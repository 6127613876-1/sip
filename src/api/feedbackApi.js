import sessionData  from '../data/sessionData';

export const questions = {
  Q1: "Was the session engaging?",
  Q2: "Was the session helpful to your understanding?",
  Q3: "Any suggestions for improvement?",
  Q4: "Rate the session"
};

export const api = {
  getFeedback: () => {
    const data = localStorage.getItem('feedback');
    return data ? JSON.parse(data) : [];
  },
  submitFeedback: (feedback) => {
    const allFeedback = api.getFeedback();
    allFeedback.push(feedback);
    localStorage.setItem('feedback', JSON.stringify(allFeedback));
    return { status: 'success' };
  },
  login: (password) => {
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  },
  logout: () => { // Admin logout
    localStorage.removeItem('isAdmin');
  },
  // **FIX**: Added a separate logout function for students
  studentLogout: () => {
    localStorage.removeItem('user');
  },
  isAdmin: () => {
    return localStorage.getItem('isAdmin') === 'true';
  },
  getSessionData: (dept, day) => {
    return sessionData[dept]?.[day] || [];
  }
};