import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { api, questions } from '../api/feedbackApi'; // In a real app structure

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [feedbackData, setFeedbackData] = useState([]);
  const [filters, setFilters] = useState({ dept: 'ALL', day: 'ALL' });

  useEffect(() => {
    const data = api.getFeedback();
    setFeedbackData(data);
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };
  
  const handleLogout = () => {
    api.logout();
    navigate('/admin-login');
  };

  const filteredData = feedbackData.filter(entry =>
    (filters.dept === 'ALL' || entry.dept === filters.dept) &&
    (filters.day === 'ALL' || entry.day === filters.day)
  );

  const groupedData = filteredData.reduce((acc, entry) => {
    const key = `${entry.dept}-${entry.day}-${entry.session.topic}-${entry.session.time}`;
    if (!acc[key]) {
      acc[key] = {
        dept: entry.dept,
        day: entry.day,
        topic: entry.session.topic,
        time: entry.session.time,
        entries: []
      };
    }
    acc[key].entries.push(entry);
    return acc;
  }, {});
  
  const submissionCounts = filteredData.reduce((acc, entry) => {
    acc[entry.dept] = (acc[entry.dept] || 0) + 1;
    return acc;
  }, {});

  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-4 sm:p-8">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel - Feedback</h1>
        <div className="flex gap-4">
          <button onClick={handleLogout} className="bg-red-500 cursor-pointer text-white font-bold py-2 px-4 rounded hover:bg-red-600">Logout</button>
        </div>
      </div>

      {/* Feedback Questions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">📋 Feedback Questions</h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-600">
          {Object.entries(questions).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value}</li>
          ))}
        </ol>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-200 flex flex-wrap gap-6 items-center">
        <div>
          <label className="font-semibold mr-2 text-gray-700">Department:</label>
          <select id="dept" onChange={handleFilterChange} className="p-2 border rounded-md text-sm cursor-pointer">
            <option value="ALL">All</option>
            {['CSE', 'IT', 'ECE', 'EEE', 'MECH', 'AI-ML', 'MECHATRONICS', 'CSBS', 'CIVIL'].map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-semibold mr-2 text-gray-700">Day:</label>
          <select id="day" onChange={handleFilterChange} className="p-2 border rounded-md text-sm cursor-pointer">
            <option value="ALL">All Days</option>
            {[...Array(15)].map((_, i) => (
              <option key={i} value={`Day ${i + 1}`}>Day {i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Submission Summary */}
      <div className="bg-white border border-yellow-300 rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-3 text-yellow-600">📊 Submission Summary</h3>
        {Object.keys(submissionCounts).length > 0 ? (
          <ul className="list-disc list-inside text-gray-700">
            {Object.entries(submissionCounts).map(([dept, count]) => (
              <li key={dept}><strong>{dept}</strong>: {count}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No submissions for selected filters.</p>
        )}
      </div>

      {/* Feedback Charts */}
      <div className="space-y-8 cursor-pointer">
        {Object.values(groupedData).length > 0 ? Object.values(groupedData).map((group, index) => {
          const helpful = group.entries.filter(e => {
            const ans = (e.answers[1] || "").toLowerCase();
            return ['yes', 'somewhat', 'good', 'ok'].some(term => ans.includes(term));
          }).length;
          const notHelpful = group.entries.length - helpful;

          const chartData = {
            labels: ['Helpful', 'Not Helpful'],
            datasets: [{
              label: 'Helpfulness',
              data: [helpful, notHelpful],
              backgroundColor: ['#10b981', '#ef4444'],
              borderRadius: 8,
              barThickness: 50
            }]
          };

          const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                  color: '#6b7280'
                }
              },
              x: {
                ticks: {
                  color: '#6b7280'
                }
              }
            }
          };

          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">{group.dept} - {group.day}</h3>
              <h4 className="text-md font-medium text-gray-600 mb-4">{group.topic} ({group.time})</h4>
              <div className="mb-6 h-52">
                <Bar data={chartData} options={chartOptions} />
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border text-sm">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="py-2 px-4 border">Name</th>
                      {Object.keys(questions).map((q, i) => (
                        <th key={i} className="py-2 px-4 border">{q}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {group.entries.map((entry, i) => (
                      <tr key={i} className="text-center hover:bg-gray-50">
                        <td className="py-2 px-4 border">{entry.name || entry.user}</td>
                        {entry.answers.map((ans, j) => (
                          <td key={j} className="py-2 px-4 border">{ans}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }) : (
          <p className="text-center text-gray-500">No data available for the selected filters.</p>
        )}
      </div>
    </div>
  </div>
);
};