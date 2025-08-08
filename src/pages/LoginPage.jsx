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
//     const { name, email, reg, dept, day } = formData;

//     if (!name || !email || !reg || !dept || !day) {
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
//           className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-800 font-medium underline z-50"
//         >
//           Helpdesk & Support
//         </a>

//         {/* Logo and Heading */}
//         <img
//           src="/images/college_logo.png"
//           alt="College Logo"
//           className="w-20 max-w-md h-auto mb-6 rounded-lg shadow-lg"
//         />
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
//           First Year Student Induction Programme
//         </h1>
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
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

//             {/* Remove Download Feature */}
//             {/* Optionally, replace with View Schedule info or message */}
//             {formData.dept && (
//               <div className="mb-4 text-center">
//                 <p className="text-sm text-blue-700">
//                   You selected: <strong>{formData.dept}</strong> department.
//                 </p>
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
//         <div className="w-full overflow-hidden mt-5 mb-10 p-3 bg-yellow-100 rounded-lg shadow-lg">
//           <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
//             Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
//           </div>
//         </div>

//         {/* Footer with Helpdesk Section Anchor */}
//         <div id="helpdesk">
//           <Footer />
//         </div>
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
//     const { name, email, reg, dept, day } = formData;

//     if (!name || !email || !reg || !dept || !day) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify(formData));
//     navigate('/dashboard');
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center" style={{ backgroundImage: `url('/images/college_bg.jpeg')` }}>

//         {/* Helpdesk Link */}
//         <a
//           href="#helpdesk"
//           className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-800 font-medium underline z-50"
//         >
//           Helpdesk & Support
//         </a>

//         {/* Logo */}
//         <img
//           src="/images/college_logo.png"
//           alt="College Logo"
//           className="w-20 h-auto mb-6 rounded-lg shadow-lg"
//         />

//         {/* Heading */}
//      <h1 className="text-3xl font-bold text-center mt-7 mb-2">
//   First Year Student Induction Programme
// </h1>
// <h2 className="text-3xl font-bold text-center mt-0 mb-4">
//   Feedback Portal
// </h2>


//         {/* Form Container */}
//         <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur rounded-lg shadow-xl p-8">
//           <form onSubmit={handleSubmit}>

//             <input
//               id="name"
//               type="text"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               id="email"
//               type="email"
//               placeholder="Email ID"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               id="reg"
//               type="text"
//               placeholder="Roll Number"
//               value={formData.reg}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             {/* Department Dropdown */}
//             <select
//               id="dept"
//               value={formData.dept}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

//             {/* View selected department */}
//             {formData.dept && (
//               <div className="mb-4 text-center text-sm text-blue-700">
//                 You selected: <strong>{formData.dept}</strong>
//               </div>
//             )}

//             {/* Day Dropdown */}
//             <select
//               id="day"
//               value={formData.day}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             >
//               <option value="">Select Day</option>
//               {dayOptions.map((option, i) => (
//                 <option key={i} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg hover:bg-yellow-600 transition-colors"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         {/* Marquee Section */}
//         <div className="w-full overflow-hidden mt-6 mb-10 p-3 bg-yellow-100 rounded-lg shadow-lg">
//           <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
//             Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
//           </div>
//         </div>

//         {/* Helpdesk Footer Section */}
//         <div id="helpdesk" className="w-full">
//           <Footer />
//         </div>
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
//     const { name, email, reg, dept, day } = formData;

//     if (!name || !email || !reg || !dept || !day) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify(formData));
//     navigate('/dashboard');
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center" style={{ backgroundImage: `url('/images/college_bg.jpeg')` }}>

//         {/* Helpdesk Link */}
//         <a
//           href="#helpdesk"
//           className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-800 font-medium underline z-50"
//         >
//           Helpdesk & Support
//         </a>

//         {/* Logo */}
//         <img
//           src="/images/college_logo.png"
//           alt="College Logo"
//           className="w-15 h-auto mb-4 rounded-lg shadow-lg"
//         />

//         {/* Heading */}
//      <h1 className="text-2xl font-bold text-center mt-2 mb-2">
//   First Year Student Induction Programme
// </h1>
// <h2 className="text-2xl font-bold text-center mt-0 mb-4">
//   Feedback Portal
// </h2>


//         {/* Form Container */}
//         <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur rounded-lg shadow-xl p-8">
//           <form onSubmit={handleSubmit}>

//             <input
//               id="name"
//               type="text"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               id="email"
//               type="email"
//               placeholder="Email ID"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               id="reg"
//               type="text"
//               placeholder="Roll Number"
//               value={formData.reg}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             {/* Department Dropdown */}
//             <select
//               id="dept"
//               value={formData.dept}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

//             {/* View selected department */}
//             {formData.dept && (
//               <div className="mb-4 text-center text-sm text-blue-700">
//                 You selected: <strong>{formData.dept}</strong>
//               </div>
//             )}

//              {formData.dept && (
//   <div className="mb-4 text-center">
//     <a
//       href={`/schedules/${formData.dept}.jpg`}  // or .jpg if you use JPGs
//       download
//       className="inline-block bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//     >
//       View Schedule
//     </a>
//   </div>
// )}

//             {/* Day Dropdown */}
//             <select
//               id="day"
//               value={formData.day}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             >
//               <option value="">Select Day</option>
//               {dayOptions.map((option, i) => (
//                 <option key={i} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg hover:bg-yellow-600 transition-colors"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         {/* Marquee Section */}
//         <div className="w-full overflow-hidden mt-6 mb-10 p-3 bg-yellow-100 rounded-lg shadow-lg">
//           <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
//             Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
//           </div>
//         </div>

//         {/* Helpdesk Footer Section */}
//         <div id="helpdesk" className="w-full">
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };





// final working code


// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';


// const slotOptions = {
//   "CIVIL": [
//     { slot: "CIVIL A", faculty: "Mrs. J. Eunice / Dr. G. AngelinLincy" },
//     { slot: "CIVIL B", faculty: "Ms. R. AbinayaRajakumari / Dr. C. S. Senthilkumar" }
//   ],
//   "CSBS": [
//     { slot: "CSBS A", faculty: "Mr.V. Janakiraman / Dr. S. Subash" },
//     { slot: "CSBS B", faculty: "Mr. T. Siva / Dr. S. Suriyakala" }
//   ],
//   "CSE": [
//     { slot: "CSE A", faculty: "Dr. C. Senthilkumar / Dr. M. Nirmala Devi" },
//     { slot: "CSE B", faculty: "Dr. N. Shivakumar / Dr. B. Subbulakshmi" },
//     { slot: "CSE C", faculty: "Dr. M. Sivakumar / Dr. N. Anita" }
//   ],
//   "AI-ML": [
//     { slot: "CSE - AIML", faculty: "Mr. D. Nagendrakumar / Ms. C. Karthika" }
//   ],
//   "ECE": [
//     { slot: "ECE A", faculty: "Dr. P. G. S. Velmurugan / Dr. V. Aravindan" },
//     { slot: "ECE B", faculty: "Dr. K. Priya / Dr. M. Tamil Elakkiya" },
//     { slot: "ECE C", faculty: "Mr. N. Senthilnathan / Dr. S. Sivailango" }
//   ],
//   "EEE": [
//     { slot: "EEE A", faculty: "Dr. R. Rajan Prakash / Dr. P.M. Devie" },
//     { slot: "EEE B", faculty: "Dr. D. Kavitha / Dr. B. Ashok Kumar" }
//   ],
//   "IT": [
//     { slot: "IT A", faculty: "Dr. D. Tamilselvi / Dr. S. Sumathi" },
//     { slot: "IT B", faculty: "Dr. K. R. Premlatha / Ms. T. Suba Nachiar" },
//     { slot: "IT C", faculty: "Mrs. A. Indirani / Dr. M. Velayudham" },
//     { slot: "IT D", faculty: "Dr. K. V. Uma / Dr. RS. Swarnalakshmi" }
//   ],
//   "MECH": [
//     { slot: "MECH A", faculty: "Mr. T. Prakash / Dr. S. Umar Sherif" },
//     { slot: "MECH B", faculty: "Dr. S. Arunkumar / Dr. R. Kamalakannan" }
//   ],
//   "MECHATRONICS": [
//     { slot: "MECT", faculty: "Mr. M. A. Ganesh / Mr. S. Rajkumar" }
//   ]
// };


// export const LoginPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     reg: '',
//     dept: '',
//     day: '',
//     slot:''
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
//     const { name, email, reg, dept, day } = formData;

//     if (!name || !email || !reg || !dept || !day||!slot) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify(formData));
//     navigate('/dashboard');
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center" style={{ backgroundImage: `url('/images/college_bg.jpeg')` }}>

//         {/* Helpdesk Link */}
//         <a
//           href="#helpdesk"
//           className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-800 font-medium underline z-50"
//         >
//           Helpdesk & Support
//         </a>

//         {/* Logo */}
//         <img
//           src="/images/college_logo.png"
//           alt="College Logo"
//           className="w-15 h-auto mb-4 rounded-lg shadow-lg"
//         />

//         {/* Heading */}
//      <h1 className="text-2xl font-bold text-center mt-2 mb-2">
//   First Year Student Induction Programme
// </h1>
// <h2 className="text-2xl font-bold text-center mt-0 mb-4">
//   Feedback Portal
// </h2>


//         {/* Form Container */}
//         <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur rounded-lg shadow-xl p-8">
//           <form onSubmit={handleSubmit}>

//             <input
//               id="name"
//               type="text"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               id="email"
//               type="email"
//               placeholder="Email ID"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               id="reg"
//               type="text"
//               placeholder="Roll Number"
//               value={formData.reg}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             {/* Department Dropdown */}
//             <select
//               id="dept"
//               value={formData.dept}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

//             {/* View selected department */}
//             {formData.dept && (
//               <div className="mb-4 text-center text-sm text-blue-700">
//                 You selected: <strong>{formData.dept}</strong>
//               </div>
//             )}

//              {formData.dept && (
//   <div className="mb-4 text-center">
//     <a
//       href={`/schedules/${formData.dept}.jpg`}  // or .jpg if you use JPGs
//       download
//       className="inline-block bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//     >
//       View Schedule
//     </a>
//   </div>
// )}

//             {/* Day Dropdown */}
//             <select
//               id="day"
//               value={formData.day}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             >
//               <option value="">Select Day</option>
//               {dayOptions.map((option, i) => (
//                 <option key={i} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//          {/* Slot Dropdown */}
// {formData.dept && slotOptions[formData.dept] && (
//   <select
//     id="slot"
//     value={formData.slot}
//     onChange={handleChange}
//     required
//     className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//   >
//     <option value="">Select Slot</option>
//     {slotOptions[formData.dept].map((option, index) => (
//       <option key={index} value={option.slot}>
//         {option.slot} 
//       </option>
//     ))}
//   </select>
// )}

           

                 
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg hover:bg-yellow-600 transition-colors"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         {/* Marquee Section */}
//         <div className="w-full overflow-hidden mt-6 mb-10 p-3 bg-yellow-100 rounded-lg shadow-lg">
//           <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
//             Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
//           </div>
//         </div>

//         {/* Helpdesk Footer Section */}
//         <div id="helpdesk" className="w-full">
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };



export const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [dayOptions, setDayOptions] = useState([]);
  const [submittedSessions, setSubmittedSessions] = useState(() => {
    const saved = localStorage.getItem("submittedFeedback") || "{}";
    return JSON.parse(saved);
  });

  // Keep track of missing feedback
  const [missingFeedbackCount, setMissingFeedbackCount] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.error("No user data found. Redirecting...");
      navigate('/');
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
  }, [navigate]);

  useEffect(() => {
    if (user?.dept) {
      const options = api.getAvailableDays(user.dept);
      setDayOptions(options);
    }
  }, [user?.dept]);

  useEffect(() => {
    if (user?.dept && user?.day) {
      const userSessions = api.getSessionData(user.dept, user.day);
      setSessions(userSessions);
      // Calculate missing feedback count
      const count = userSessions.filter(session => !submittedSessions[`${user.dept}-${user.day}-${session.topic}`]).length;
      setMissingFeedbackCount(count);
    }
  }, [user?.dept, user?.day, submittedSessions]);

  const handleDayChange = (e) => {
    const newDay = e.target.value;
    setUser(currentUser => {
      const updatedUser = { ...currentUser, day: newDay };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const handleLogout = () => {
    api.studentLogout();
    navigate('/');
  };

  const handleFeedbackChange = (sessionIndex, questionIndex, value) => {
    setFeedback(prev => ({ ...prev, [`${sessionIndex}-${questionIndex}`]: value }));
  };

  const submitFeedback = async (sessionIndex, session) => {
    const sessionKey = `${user.dept}-${user.day}-${session.topic}`;

    if (submittedSessions[sessionKey]) {
      toast.info("You have already submitted feedback for this session.");
      return;
    }

    const topic = session.topic.toLowerCase();
    let customQuestions = [];

    // Define custom questions based on session topic (as before)...
    // Omitted for brevity.

    const ratingTexts = ["Poor", "Average", "Good", "Very Good", "Excellent"];
    const answers = [];

    // Loop through the custom questions to capture answers
    for (let qIndex = 0; qIndex < customQuestions.length - 1; qIndex++) {
      const ratingVal = feedback[`${sessionIndex}-${qIndex}`];
      const label = ratingTexts[(ratingVal || 0) - 1] || 'Not Rated';
      answers.push(label);
    }

    answers.push(feedback[`${sessionIndex}-${customQuestions.length - 1}`] || '');

    const feedbackData = {
      name: user.name,
      dept: user.dept,
      day: user.day,
      session,
      answers
    };

    const result = await api.submitFeedback(feedbackData);

    if (result.status === "success") {
      toast.success("Feedback submitted successfully!");
      const updated = { ...submittedSessions, [sessionKey]: true };
      setSubmittedSessions(updated);
      localStorage.setItem("submittedFeedback", JSON.stringify(updated));
    } else {
      toast.error("Failed to submit feedback. Please try again.");
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen items-center p-4 sm:p-8">
      <ToastContainer />
      <div className="flex justify-center mb-6">
        <img
          src="images/college_logo.png"
          alt="College Logo"
          className="w-24 h-auto rounded-lg shadow-lg"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        First Year Student Induction Programme - Feedback Portal
      </h1>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome {user.name} ({user.dept})
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="day-select" className="font-semibold">Viewing Day:</label>
              <select
                value={user.day}
                onChange={handleDayChange}
                className="p-2 border rounded"
              >
                {dayOptions.map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div>
          {sessions.length > 0 ? (
            <>
              <p className="text-center text-gray-600 font-medium mb-4">
                {missingFeedbackCount} session(s) have missing feedback.
              </p>
              {sessions.map((session, index) => {
                const topic = session.topic.toLowerCase();
                const sessionKey = `${user.dept}-${user.day}-${session.topic}`;
                const isSubmitted = submittedSessions[sessionKey];

                let customQuestions = [];
                // Define custom questions based on session topic...
                // Omitted for brevity.

                return (
                  <div key={`${user.day}-${index}`} className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{session.topic} ({session.time})</h3>
                    {customQuestions.map((question, qIndex) => {
                      const isSuggestion = qIndex === customQuestions.length - 1;
                      const key = `${index}-${qIndex}`;
                      return (
                        <div key={key} className="mb-4">
                          <label className="block font-semibold text-gray-700 mb-2">
                            {qIndex + 1}. {question}
                          </label>
                          {isSuggestion ? (
                            <textarea
                              className="w-full p-3 border rounded-md"
                              placeholder="Your suggestions or feedback"
                              onChange={e => handleFeedbackChange(index, qIndex, e.target.value)}
                              disabled={isSubmitted}
                            />
                          ) : (
                            <StarRating
                              rating={feedback[key] || 0}
                              setRating={rating => handleFeedbackChange(index, qIndex, rating)}
                              disabled={isSubmitted}
                            />
                          )}
                        </div>
                      );
                    })}
                    <button
                      id={`submit-btn-${index}`}
                      onClick={() => submitFeedback(index, session)}
                      className="w-full cursor-pointer sm:w-auto bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? "Submitted" : "Submit Feedback"}
                    </button>
                  </div>
                );
              })}
            </>
          ) : (
            <p className="text-center text-gray-600 font-medium">
              No sessions scheduled for your department on {user.day}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};









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
//     const { name, email, reg, dept, day } = formData;

//     if (!name || !email || !reg || !dept || !day) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     localStorage.setItem("user", JSON.stringify(formData));
//     navigate('/dashboard');
//   };

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-cover bg-center" style={{ backgroundImage: url('/images/college_bg.jpeg') }}>

//         {/* Helpdesk Link */}
//         <a
//           href="#helpdesk"
//           className="absolute top-4 right-4 text-yellow-600 hover:text-yellow-800 font-medium underline z-50"
//         >
//           Helpdesk & Support
//         </a>

//         {/* Logo */}
//         <img
//           src="/images/college_logo.png"
//           alt="College Logo"
//           className="w-15 h-auto mb-4 rounded-lg shadow-lg"
//         />

//         {/* Heading */}
//      <h1 className="text-2xl font-bold text-center mt-2 mb-2">
//   First Year Student Induction Programme
// </h1>
// <h2 className="text-2xl font-bold text-center mt-0 mb-4">
//   Feedback Portal
// </h2>


//         {/* Form Container */}
//         <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur rounded-lg shadow-xl p-8">
//           <form onSubmit={handleSubmit}>

//             <input
//               id="name"
//               type="text"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               id="email"
//               type="email"
//               placeholder="Email ID"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             <input
//               id="reg"
//               type="text"
//               placeholder="Roll Number"
//               value={formData.reg}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             />

//             {/* Department Dropdown */}
//             <select
//               id="dept"
//               value={formData.dept}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

//             {/* View selected department */}
//             {formData.dept && (
//               <div className="mb-4 text-center text-sm text-blue-700">
//                 You selected: <strong>{formData.dept}</strong>
//               </div>
//             )}

//              {formData.dept && (
//   <div className="mb-4 text-center">
//     <a
//       href={/schedules/${formData.dept}.jpg}  // or .jpg if you use JPGs
//       download
//       className="inline-block bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//     >
//       View Schedule
//     </a>
//   </div>
// )}

//             {/* Day Dropdown */}
//             <select
//               id="day"
//               value={formData.day}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//             >
//               <option value="">Select Day</option>
//               {dayOptions.map((option, i) => (
//                 <option key={i} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>

//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-white font-bold p-3 rounded-lg hover:bg-yellow-600 transition-colors"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         {/* Marquee Section */}
//         <div className="w-full overflow-hidden mt-6 mb-10 p-3 bg-yellow-100 rounded-lg shadow-lg">
//           <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-yellow-800">
//             Thiagarajar College of Engineering • Welcome to the First Year Student Induction Programme 2025 • Wishing You a Great Learning Journey!
//           </div>
//         </div>

//         {/* Helpdesk Footer Section */}
//         <div id="helpdesk" className="w-full">
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// };  






