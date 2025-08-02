import { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reg: '',
    dept: '',
    day: ''
  });

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
            <option value="Computer Science">CSE</option>
            <option value="Information Technology">IT</option>
            <option value="Electronics and Communication">ECE</option>
            <option value="Electrical and Electronics">EEE</option>
            <option value="Mechanical">MECH</option>
            <option value="Artificial Intelligence And Machine Learning">AIML</option>
            <option value="Mechatronics">MECHATRONICS</option>
            <option value="Computer Science and Business Systems">CSBS</option>
            <option value="Civil">CIVIL</option>
          </select>
          <select className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" id="day" required onChange={handleChange} value={formData.day}>
            <option value="">Select Day</option>
            {[...Array(15)].map((_, i) => <option key={i} value={`Day ${i + 1}`}>Day {i + 1}</option>)}
          </select>
          <button className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
