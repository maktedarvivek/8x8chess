import React from 'react';
import { User, Lock, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0b0f1a] flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full relative">
        {/* Glow Effect Background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] blur opacity-20"></div>
        
        <div className="relative bg-[#111827] rounded-[40px] border border-slate-800 shadow-2xl overflow-hidden p-10">
          <div className="text-center mb-10">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-600/40 rotate-3">
              <Shield className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Secure Login</h2>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">Enter the Arena</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Identity (Email)</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500"><User size={18} /></span>
                <input 
                  type="email" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                  placeholder="name@8x8chess.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Access Code</label>
                <a href="#" className="text-[10px] text-blue-500 font-black uppercase tracking-widest hover:underline">Reset</a>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500"><Lock size={18} /></span>
                <input 
                  type="password" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-2xl text-white font-bold outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/20 group">
              AUTHENTICATE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
              No academy ID? <Link to="/register" className="text-white hover:text-blue-500 transition-colors">Join Elite Circle</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;