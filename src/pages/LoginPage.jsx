// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';

// export const LoginPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     reg: '',
//     dept: '',
//     day: '' 
//   });

//   const dayOptions = [
//     { label: "Day 1 - 11.08.2025", value: "Day 1" },
//     { label: "Day 2 - 12.08.2025", value: "Day 2" },
//     { label: "Day 3 - 13.08.2025", value: "Day 3" },
//     { label: "Day 4 - 14.08.2025", value: "Day 4" },
//     { label: "Day 5 - 18.08.2025", value: "Day 5" },
//     { label: "Day 6 - 19.08.2025", value: "Day 6" },
//     { label: "Day 7 - 20.08.2025", value: "Day 7" },
//     { label: "Day 8 - 21.08.2025", value: "Day 8" },
//     { label: "Day 9 - 22.08.2025", value: "Day 9" },
//     { label: "Day 10 - 25.08.2025", value: "Day 10" },
//     { label: "Day 11 - 26.08.2025", value: "Day 11" },
//     { label: "Day 12 - 27.08.2025", value: "Day 12" },
//     { label: "Day 13 - 28.08.2025", value: "Day 13" },
//   ];

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       navigate('/dashboard');
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.reg || !formData.dept || !formData.day) {
//       alert("Please fill out all fields.");
//       return;
//     }
//     localStorage.setItem("user", JSON.stringify(formData));
//     navigate('/dashboard');
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
//         {/* Helpdesk Link */}
//         <a
//           href="#helpdesk"
//           className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-800 font-medium underline"
//         >
//           Helpdesk & Support
//         </a>

//          {/* Helpdesk Section - only title */}
// <div
//   id="helpdesk"
//   className="w-full overflow-hidden mt-5 mb-4 p-3 bg-yellow-100 rounded-lg shadow-lg"
// >
// {/*  <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
//     Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
//   </div>
// </div>  */}

// {/* Download Helpdesk PDF Button */}
// {/* <a
//   href="/helpdesk-info.pdf"
//   download
//   className="mt-4 inline-block bg-yellow-500 text-white font-semibold px-5 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
// >
//   Download Helpdesk Info
// </a> */}



       

//         {/* Logo and Heading */} 
//         <img
//           src="images/college_logo.png"
//           alt="College Logo"
//           className="w-20 max-w-md h-auto mb-6 rounded-lg shadow-lg"
//         />
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
//                 First Year Student Induction Programme  
//         </h1>
       
//          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
//                 Feedback Portal
//         </h1>
//         {/* Form */}
//         <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
//           <form onSubmit={handleSubmit}>
//             <input
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               type="text"
//               id="name"
//               placeholder="Full Name"
//               required
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               type="email"
//               id="email"
//               placeholder="Email ID"
//               required
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               type="text"
//               id="reg"
//               placeholder="Roll Number"
//               required
//               onChange={handleChange}
//             />
//             <select
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               id="dept"
//               required
//               onChange={handleChange}
//               value={formData.dept}
//             >
//               <option value="">Select Department</option>
//               <option value="CSE">CSE</option>
//               <option value="IT">IT</option>
//               <option value="ECE">ECE</option>
//               <option value="EEE">EEE</option>
//               <option value="MECH">MECH</option>
//               <option value="AI-ML">AIML</option>
//               <option value="MECHATRONICS">MECHATRONICS</option>
//               <option value="CSBS">CSBS</option>
//               <option value="CIVIL">CIVIL</option>
//             </select>
//             <select
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               id="day"
//               required
//               onChange={handleChange}
//               value={formData.day}
//             >
//               <option value="">Select Day</option>
//               {dayOptions.map((option, i) => (
//                 <option key={i} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//             <button
//               className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors"
//               type="submit"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         {/* Helpdesk Section - only title */}
//         <div
//   id="helpdesk"
//   className="w-full overflow-hidden mt-5 mb-10 p-3 bg-yellow-100 rounded-lg shadow-lg"
// >
//   <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
//     Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
//   </div>
// </div>


//         {/* Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// };


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';

// export const LoginPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     reg: '',
//     dept: '',
//     day: ''
//   });

//   const dayOptions = [
//     { label: "Day 1 - 11.08.2025", value: "Day 1" },
//     { label: "Day 2 - 12.08.2025", value: "Day 2" },
//     { label: "Day 3 - 13.08.2025", value: "Day 3" },
//     { label: "Day 4 - 14.08.2025", value: "Day 4" },
//     { label: "Day 5 - 18.08.2025", value: "Day 5" },
//     { label: "Day 6 - 19.08.2025", value: "Day 6" },
//     { label: "Day 7 - 20.08.2025", value: "Day 7" },
//     { label: "Day 8 - 21.08.2025", value: "Day 8" },
//     { label: "Day 9 - 22.08.2025", value: "Day 9" },
//     { label: "Day 10 - 25.08.2025", value: "Day 10" },
//     { label: "Day 11 - 26.08.2025", value: "Day 11" },
//     { label: "Day 12 - 27.08.2025", value: "Day 12" },
//     { label: "Day 13 - 28.08.2025", value: "Day 13" }
//   ];

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       navigate('/dashboard');
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.reg || !formData.dept || !formData.day) {
//       alert("Please fill out all fields.");
//       return;
//     }
//     localStorage.setItem("user", JSON.stringify(formData));
//     navigate('/dashboard');
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">

//         {/* Helpdesk Link */}
//         <a
//           href="#helpdesk"
//           className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-800 font-medium underline"
//         >
//           Helpdesk & Support
//         </a>



//         {/* Logo and Heading */}
//         <img
//           src="images/college_logo.png"
//           alt="College Logo"
//           className="w-20 max-w-md h-auto mb-6 rounded-lg shadow-lg"
//         />
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
//           First Year Student Induction Programme
//         </h1>
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
//           Feedback Portal
//         </h1>

//         {/* Form */}
//         <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
//           <form onSubmit={handleSubmit}>
//             <input
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               type="text"
//               id="name"
//               placeholder="Full Name"
//               required
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               type="email"
//               id="email"
//               placeholder="Email ID"
//               required
//               onChange={handleChange}
//             />
//             <input
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               type="text"
//               id="reg"
//               placeholder="Roll Number"
//               required
//               onChange={handleChange}
//             />

//             {/* Department Dropdown */}
//             <select
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               id="dept"
//               required
//               onChange={handleChange}
//               value={formData.dept}
//             >
//               <option value="">Select Department</option>
//               <option value="CSE">CSE</option>
//               <option value="IT">IT</option>
//               <option value="ECE">ECE</option>
//               <option value="EEE">EEE</option>
//               <option value="MECH">MECH</option>
//               <option value="AI-ML">AIML</option>
//               <option value="MECHATRONICS">MECHATRONICS</option>
//               <option value="CSBS">CSBS</option>
//               <option value="CIVIL">CIVIL</option>
//             </select>

//             {/* View Schedule Button */}
//             {formData.dept && (
//               <div className="mb-4 text-center">
//                 <a
//                   href={`/schedules/${formData.dept}.pdf`}
//                   download
//                   className="inline-block bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//                 >
//                   View Schedule
//                 </a>
//               </div>
//             )}

//             {/* Day Dropdown */}
//             <select
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               id="day"
//               required
//               onChange={handleChange}
//               value={formData.day}
//             >
//               <option value="">Select Day</option>
//               {dayOptions.map((option, i) => (
//                 <option key={i} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//             {/* Submit */}
//             <button
//               className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors"
//               type="submit"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         {/* Marquee */}
//         <div
//           className="w-full overflow-hidden mt-5 mb-10 p-3 bg-yellow-100 rounded-lg shadow-lg"
//         >
//           <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
//             Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
//           </div>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </>
//   );
// };




import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    { label: "Day 1 - 11.08.2025", value: "Day 1" },
    { label: "Day 2 - 12.08.2025", value: "Day 2" },
    { label: "Day 3 - 13.08.2025", value: "Day 3" },
    { label: "Day 4 - 14.08.2025", value: "Day 4" },
    { label: "Day 5 - 18.08.2025", value: "Day 5" },
    { label: "Day 6 - 19.08.2025", value: "Day 6" },
    { label: "Day 7 - 20.08.2025", value: "Day 7" },
    { label: "Day 8 - 21.08.2025", value: "Day 8" },
    { label: "Day 9 - 22.08.2025", value: "Day 9" },
    { label: "Day 10 - 25.08.2025", value: "Day 10" },
    { label: "Day 11 - 26.08.2025", value: "Day 11" },
    { label: "Day 12 - 27.08.2025", value: "Day 12" },
    { label: "Day 13 - 28.08.2025", value: "Day 13" }
  ];

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
    const { name, email, reg, dept, day } = formData;

    if (!name || !email || !reg || !dept || !day) {
      alert("Please fill out all fields.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">

        {/* Helpdesk Link */}
        <a
          href="#helpdesk"
          className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-800 font-medium underline z-50"
        >
          Helpdesk & Support
        </a>

        {/* Logo and Heading */}
        <img
          src="/images/college_logo.png"
          alt="College Logo"
          className="w-20 max-w-md h-auto mb-6 rounded-lg shadow-lg"
        />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          First Year Student Induction Programme
        </h1>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Feedback Portal
        </h1>

        {/* Form */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
              id="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="email"
              id="email"
              placeholder="Email ID"
              required
              onChange={handleChange}
            />
            <input
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
              id="reg"
              placeholder="Roll Number"
              required
              onChange={handleChange}
            />

            {/* Department Dropdown */}
            <select
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              id="dept"
              required
              onChange={handleChange}
              value={formData.dept}
            >
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

            {/* Remove Download Feature */}
            {/* Optionally, replace with View Schedule info or message */}
            {formData.dept && (
              <div className="mb-4 text-center">
                <p className="text-sm text-blue-700">
                  You selected: <strong>{formData.dept}</strong> department.
                </p>
              </div>
            )}

            {/* Day Dropdown */}
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

            {/* Submit */}
            <button
              className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-yellow-600 transition-colors"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>

        {/* Marquee */}
        <div className="w-full overflow-hidden mt-5 mb-10 p-3 bg-yellow-100 rounded-lg shadow-lg">
          <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
            Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
          </div>
        </div>

        {/* Footer with Helpdesk Section Anchor */}
        <div id="helpdesk">
          <Footer />
        </div>
      </div>
    </>
  );
};

