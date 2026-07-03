import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("candidate");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
        {/* Left Panel */}
        <div className="relative bg-gradient-to-br from-[#1349c5] to-indigo-800 text-white p-12 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
          <motion.div animate={{ scale:[1,1.2,1], opacity:[0.15,0.3,0.15] }} transition={{ duration:6,repeat:Infinity }} className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-indigo-400 blur-3xl" />
          <div className="relative space-y-6">
            <div className="bg-white rounded-xl p-3 inline-block">
              <img src="/logo.png.png" alt="Xpress Talent Hiring" className="h-10 object-contain" onError={(e) => { e.target.style.display="none"; }} />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight">Welcome Back<br />to XTH Portal</h2>
              <p className="text-blue-200 mt-3 text-sm leading-relaxed">Sign in to access your personalized dashboard, track applications, and manage your profile.</p>
            </div>
          </div>
          <div className="relative space-y-4">
            {["Verified corporate openings", "Pre-screened talent pool", "Real-time application tracking"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-blue-100">
                <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white p-10 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-slate-900">Sign In</h3>
            <p className="text-slate-400 text-sm mt-1">Choose your role and enter credentials</p>
          </div>

          {/* Role Toggle */}
          <div className="flex gap-2 mb-8 bg-slate-100 p-1 rounded-xl">
            {["candidate", "employer"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${role === r ? "bg-[#1349c5] text-white shadow-md" : "text-slate-500 hover:text-slate-700"}`}
              >
                {r}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {role === "candidate" ? "Email Address" : "Corporate Email"}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder={role === "candidate" ? "you@example.com" : "hr@company.com"}
                required
                className="w-full border-2 border-slate-200 focus:border-[#1349c5] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Enter your password"
                  required
                  className="w-full border-2 border-slate-200 focus:border-[#1349c5] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/50 pr-12"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
                <input type="checkbox" className="rounded" /> Remember me
              </label>
              <button type="button" className="text-[#1349c5] font-semibold hover:underline">Forgot password?</button>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full bg-[#1349c5] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
              ) : "Sign In"}
            </motion.button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            Not registered?{" "}
            <Link to="/candidates" className="text-[#1349c5] font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
