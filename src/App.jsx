import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Routes>
          {/* Public Routes with Navbar */}
          <Route path="/" element={<><Navbar /><Home /></>} />
          
          {/* Auth Routes - No Navbar for a cleaner look */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Student Routes */}
          <Route path="/student" element={<StudentDashboard />} />

        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;