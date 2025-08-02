import { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reg: '',
    dept: '',
    day: ''
  });
  const dayOptions = [
  { label: "Day 1 - 05.08.2025", value: "Day 1" },
  { label: "Day 2 - 06.08.2025", value: "Day 2" },
  { label: "Day 3 - 07.08.2025", value: "Day 3" },
  { label: "Day 4 - 08.08.2025", value: "Day 4" },
  { label: "Day 5 - 09.08.2025", value: "Day 5" },
  { label: "Day 6 - 10.08.2025", value: "Day 6" },
  { label: "Day 7 - 11.08.2025", value: "Day 7" },
  { label: "Day 8 - 12.08.2025", value: "Day 8" },
  { label: "Day 9 - 13.08.2025", value: "Day 9" },
  { label: "Day 10 - 14.08.2025", value: "Day 10" },
  { label: "Day 11 - 15.08.2025", value: "Day 11" },
  { label: "Day 12 - 16.08.2025", value: "Day 12" },
  { label: "Day 13 - 17.08.2025", value: "Day 13" },
  { label: "Day 14 - 18.08.2025", value: "Day 14" },
  { label: "Day 15 - 19.08.2025", value: "Day 15" }
];
  // **FIX**: Check if user is already logged in. If so, redirect to dashboard.
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.reg || !formData.dept || !formData.day) {
        alert("Please fill out all fields.");
        return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <>
    <div className="min-h-screen  flex flex-col items-center justify-center p-4">
      <img src="images/college_logo.png" alt="College Logo" className="w-20 max-w-md h-auto mb-6 rounded-lg shadow-lg" />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">First Year SIP-Feedback Portal</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <form onSubmit={handleSubmit}>
          <input className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" type="text" id="name" placeholder="Full Name" required onChange={handleChange} />
          <input className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" type="email" id="email" placeholder="Email ID" required onChange={handleChange} />
          <input className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" type="text" id="reg" placeholder="Register Number" required onChange={handleChange} />
          <select className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="dept" required onChange={handleChange} value={formData.dept}>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
            <option value="AI-ML">AIML</option>
            <option value="MECHATRONICS">MECHATRONICS</option>
            <option value="CSBS">CSBS</option>
            <option value="CIVIL">CIVIL</option>
          </select>
          <select
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            id="day"
            required
            onChange={handleChange}
            value={formData.day}
          >
            <option value="">Select Day</option>
            {dayOptions.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors" type="submit">Login</button>
        </form>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};
