import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, questions } from '../api/feedbackApi'; // In a real app structure
import { StarRating } from '../components/StarRating'; // In a real app structure


export const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("No user data found. Redirecting...");
      navigate('/');
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
  }, [navigate]);

  useEffect(() => {
    if (user) {
        const userSessions = api.getSessionData(user.dept, user.day);
        setSessions(userSessions);
    }
  }, [user]);

  const handleDayChange = (e) => {
    const newDay = e.target.value;
    setUser(currentUser => {
        const updatedUser = { ...currentUser, day: newDay };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        return updatedUser;
    });
  };

  // **FIX**: Added logout handler for students
  const handleLogout = () => {
    api.studentLogout();
    navigate('/');
  };

  const handleFeedbackChange = (sessionIndex, questionIndex, value) => {
    setFeedback(prev => ({ ...prev, [`${sessionIndex}-${questionIndex}`]: value }));
  };
  
  const handleRatingChange = (sessionIndex, rating) => {
    setFeedback(prev => ({ ...prev, [`${sessionIndex}-rating`]: rating }));
  };

  const submitFeedback = (sessionIndex, session) => {
    const answers = [
      feedback[`${sessionIndex}-0`] || '',
      feedback[`${sessionIndex}-1`] || '',
      feedback[`${sessionIndex}-2`] || '',
      ["Average", "Good", "Very Good", "Excellent"][(feedback[`${sessionIndex}-rating`] || 1) - 1] || 'Not Rated'
    ];

    const feedbackData = { ...user, session, answers };
    api.submitFeedback(feedbackData);
    alert("Feedback submitted!");
    const button = document.getElementById(`submit-btn-${sessionIndex}`);
    if(button) {
        button.disabled = true;
        button.textContent = "Submitted";
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen  items-center   p-4 sm:p-8">
      <div className="flex justify-center mb-6">
        <img
          src="images/college_logo.png"
          alt="College Logo"
          className="w-24 h-auto rounded-lg shadow-lg"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">First Year SIP - Feedback Portal</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-semibold text-gray-700">Welcome {user.name} ({user.dept})</h2>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="day-select" className="font-semibold">Viewing Day:</label>
                    <select id="day-select" value={user.day} onChange={handleDayChange} className="p-2 cursor-pointer border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                        {[...Array(15)].map((_, i) => <option key={i} value={`Day ${i + 1}`}>Day {i + 1}</option>)}
                    </select>
                </div>
                {/* **FIX**: Added logout button */}
                <button onClick={handleLogout} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-red-600 transition-colors">
                    Logout
                </button>
            </div>
        </div>

        <div>
          {sessions.length > 0 ? sessions.map((session, index) => (
            <div key={`${user.day}-${index}`} className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{session.topic} ({session.time})</h3>
              <textarea className="w-full p-3 mb-3 border rounded-md" placeholder={`1. ${questions.Q1}`} onChange={e => handleFeedbackChange(index, 0, e.target.value)}></textarea>
              <textarea className="w-full p-3 mb-3 border rounded-md" placeholder={`2. ${questions.Q2}`} onChange={e => handleFeedbackChange(index, 1, e.target.value)}></textarea>
              <textarea className="w-full p-3 mb-4 border rounded-md" placeholder={`3. ${questions.Q3}`} onChange={e => handleFeedbackChange(index, 2, e.target.value)}></textarea>
              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">4. {questions.Q4}:</label>
                <StarRating rating={feedback[`${index}-rating`] || 0} setRating={(rating) => handleRatingChange(index, rating)} />
              </div>
              <button id={`submit-btn-${index}`} onClick={() => submitFeedback(index, session)} className="w-full cursor-pointer sm:w-auto bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">Submit Feedback</button>
            </div>
          )) : <p className="text-center text-gray-600 font-medium">No sessions scheduled for your department on {user.day}.</p>}
        </div>
      </div>
    </div>
  );
};