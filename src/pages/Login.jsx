import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("candidate");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const handleGoogleLogin = () => {
    window.open(
      "https://accounts.google.com/AccountChooser",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const trustStats = [
    { value: "500+", label: "Successful Placements" },
    { value: "150+", label: "Trusted Companies" },
    { value: "100%", label: "Secure Login" },
  ];

  return (
    <div className="min-h-screen bg-[#e5e7eb] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-[34px] border-[10px] border-white bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,.65)] lg:grid-cols-[1.05fr_.95fr]"
      >
        {/* Left Panel */}
        <div className="relative flex min-h-[620px] flex-col justify-between overflow-hidden bg-[#1349c5] p-8 text-white sm:p-11 lg:min-h-[680px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.22),transparent_28%),linear-gradient(135deg,#1349c5,#082d57)]" />
          <div className="absolute -right-8 top-0 hidden h-full w-16 rounded-l-[40px] bg-white lg:block" />

          <div className="relative space-y-7">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight mt-12 sm:text-5xl">
                Welcome Back
                <br />
                to XTH Portal
              </h2>

              <p className="text-blue-100 mt-4 text-sm leading-relaxed max-w-sm">
                Sign in to access your personalized dashboard, track
                applications, manage profiles, and connect with verified hiring
                opportunities.
              </p>
            </div>

            <div className="relative mt-10 max-w-md rounded-[28px] border border-white/15 bg-white/10 p-6">
              <p className="text-sm font-bold text-amber-400">Smart Hiring Access</p>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                A clean and secure way to manage applications, profiles, and hiring conversations.
              </p>
            </div>
          </div>

          <div className="relative space-y-4">
            {[
              "Verified corporate openings",
              "Pre-screened talent pool",
              "Real-time application tracking",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="flex items-center gap-3 text-sm text-blue-100"
              >
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-slate-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative flex flex-col justify-center bg-white p-8 sm:p-10 lg:rounded-l-[28px] lg:p-16">
          <div className="mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-extrabold text-slate-900 sm:text-4xl"
            >
              Sign In
            </motion.h3>
            <p className="text-slate-400 text-sm mt-2">
              Choose your role and enter credentials
            </p>
          </div>

          {/* Role Toggle */}
          <div className="mb-8 grid grid-cols-2 gap-4">
            {[
              {
                id: "candidate",
                label: "Candidate",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                  />
                ),
              },
              {
                id: "employer",
                label: "Employer",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.75 21h16.5M4.5 3h15v18h-15V3zm4.5 4.5h1.5m-1.5 4h1.5m-1.5 4h1.5m4.5-8h1.5m-1.5 4h1.5m-1.5 4h1.5"
                  />
                ),
              },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setRole(item.id);
                  setErrors({});
                }}
                className={`relative rounded-2xl border-2 p-4 text-left transition-all duration-300 ${
                  role === item.id
                    ? "border-[#1349c5] bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      role === item.id
                        ? "bg-[#1349c5] text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-extrabold text-slate-800">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Login as {item.label}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="mb-5 flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.91h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.32 2.98-7.4Z" />
              <path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.24-2.53c-.9.6-2.05.96-3.38.96-2.6 0-4.81-1.76-5.6-4.13H3.06v2.62A10 10 0 0 0 12 22Z" />
              <path fill="#FBBC05" d="M6.4 13.88A6 6 0 0 1 6.09 12c0-.65.11-1.29.31-1.88V7.5H3.06A10 10 0 0 0 2 12c0 1.61.39 3.14 1.06 4.5l3.34-2.62Z" />
              <path fill="#EA4335" d="M12 5.99c1.47 0 2.79.5 3.82 1.49l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.94 5.5l3.34 2.62C7.19 7.75 9.4 5.99 12 5.99Z" />
            </svg>
            Continue with Google
          </button>

          <div className="mb-5 flex items-center gap-4" aria-hidden="true">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">OR</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {role === "candidate" ? "Email Address" : "Corporate Email"}
              </label>

              <div className="relative">
                <svg
                  className="absolute left-4 top-3.5 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m8 0l-8-5v10l8-5zM4 6h16v12H4V6z"
                  />
                </svg>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrors({ ...errors, email: "" });
                  }}
                  placeholder={
                    role === "candidate" ? "you@example.com" : "hr@company.com"
                  }
                  className={`w-full border-2 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/60 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-200 focus:border-[#1349c5] focus:bg-white"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-xs mt-1.5 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Password
              </label>

              <div className="relative">
                <svg
                  className="absolute left-4 top-3.5 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.105 0 2-.895 2-2V7a2 2 0 10-4 0v2c0 1.105.895 2 2 2zm-6 0h12v9H6v-9z"
                  />
                </svg>

                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    setErrors({ ...errors, password: "" });
                  }}
                  placeholder="Enter your password"
                  className={`w-full border-2 rounded-xl pl-12 pr-12 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/60 ${
                    errors.password
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-200 focus:border-[#1349c5] focus:bg-white"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-[#1349c5] transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {showPassword ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M3 3l18 18"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1.5 font-medium">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-[#1349c5] focus:ring-[#1349c5]"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-[#1349c5] font-bold hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#1349c5] to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-blue-200 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </motion.button>
          </form>
          <p className="text-center text-xs text-slate-400 mt-7">
            Not registered?{" "}
            <Link
              to="/registration"
              className="text-[#1349c5] font-bold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;



