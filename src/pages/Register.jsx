import React, { useState } from 'react';
import { User, Lock, Mail, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lichessUser: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering Student:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-[#1e293b] p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Join the Academy</h2>
          <p className="text-blue-200 text-sm mt-1">Begin your journey to Grandmaster</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><User size={18} /></span>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-[#3b82f6] outline-none"
                  placeholder="John Doe"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><Mail size={18} /></span>
                <input 
                  type="email" 
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-[#3b82f6] outline-none"
                  placeholder="john@example.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Lichess Username (For tracking)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><Trophy size={18} /></span>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-[#3b82f6] outline-none"
                  placeholder="Lichess_ID"
                  onChange={(e) => setFormData({...formData, lichessUser: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Create Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><Lock size={18} /></span>
                <input 
                  type="password" 
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-[#3b82f6] outline-none"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl shadow-lg text-sm font-bold text-white bg-[#3b82f6] hover:bg-blue-700 transition-all transform hover:-translate-y-1">
              Create My Account <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account? <Link to="/login" className="text-[#3b82f6] font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;