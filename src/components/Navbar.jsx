import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        {/* Logo Branding */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1e293b] rounded-md flex items-center justify-center text-white font-bold text-xl">
            8x8
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1e293b]">
            8x8chess <span className="text-[#3b82f6]">Academy</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
       <Link to="/Courses" className="hover:text-[#3b82f6] transition-colors">Courses</Link>
        <Link to="/" className="hover:text-[#3b82f6] transition-colors">Tournaments</Link>
        <Link to="/admin" className="hover:text-[#3b82f6] transition-colors">Admin Panel</Link>
        <Link to="/student" className="hover:text-[#3b82f6] transition-colors">Student Portal</Link>

      </div>

      <div className="flex gap-4">
        <Link 
          to="/login" 
          className="bg-[#3b82f6] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;