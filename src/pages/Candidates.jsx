import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Candidates() {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'Male',
    phone: '',
    email: '',
    highestEducation: '',
    experienceYears: '',
    experienceMonths: '',
    currentSalaryMonth: '',
    currentSalaryYear: '',
    willingToRelocate: 'Yes',
    resumeText: '',
    resumeFile: null,
    sector: 'BFSI'
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <motion.section
      className="relative overflow-hidden bg-slate-50 py-16 px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(19,73,197,0.08),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#1349c5] mb-3">
            Career Registration
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">
            Candidates
          </h1>
          <div className="w-20 h-1.5 bg-[#1349c5] mx-auto rounded-full mt-4" />
          <p className="text-sm text-gray-500 uppercase tracking-widest mt-4">
            Register your profile & advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* Left Side */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-lg border border-blue-100 p-7"
            >
              <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-[#1349c5] to-indigo-700 flex items-center justify-center mb-7 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-30 h-30 text-white"
                >
                  <circle cx="12" cy="8" r="3.5"/>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"
                  />
                  <circle cx="5" cy="10" r="2"/>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1.5 19c.4-2.3 2.2-4 4.5-4"
                  />
                  <circle cx="19" cy="10" r="2"/>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22.5 19c-.4-2.3-2.2-4-4.5-4"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-extrabold text-blue-950 mb-5">
                Why Register with Us?
              </h3>

              <ul className="space-y-5">
                {[
                  {
                    title: "Direct Recruiter Connections",
                    desc: "Get directly matched with hiring managers and trusted companies.",
                  },
                  {
                    title: "Pre-Placement Skill Training",
                    desc: "Improve your skills for BFSI, Retail, IT, and more sectors.",
                  },
                  {
                    title: "Reliable Career Growth",
                    desc: "Get continuous support, feedback, and better job opportunities.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#1349c5] rounded-full text-white flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow border border-gray-100 text-center">
                <h4 className="text-2xl font-extrabold text-[#1349c5]">500+</h4>
                <p className="text-xs font-semibold text-gray-500 mt-1">Successful Placements</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow border border-gray-100 text-center">
                <h4 className="text-2xl font-extrabold text-[#1349c5]">150+</h4>
                <p className="text-xs font-semibold text-gray-500 mt-1">Hiring Partners</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Candidate Registration
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Fill your details and upload your resume.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#1349c5] bg-blue-50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#1349c5]" />
                Step 1 of 1
              </div>
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Registration Successful!
                </h4>
                <p className="text-sm text-gray-500 max-w-sm mx-auto">
                  Thank you for registering. Our team will review your profile and get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Details */}
                <div>
                  <h4 className="text-sm font-extrabold text-blue-950 uppercase tracking-wider mb-4">
                    Personal Details
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter full name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5] focus:border-[#1349c5]"
                      />
                    </div>

                    <div>
                      <span className="block text-xs font-bold text-gray-600 uppercase mb-3">Gender</span>
                      <div className="flex flex-wrap items-center gap-4">
                        {["Male", "Female", "Transgender"].map((value) => (
                          <label key={value} className="inline-flex items-center gap-2 text-sm cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              value={value}
                              checked={formData.gender === value}
                              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                              className="accent-[#1349c5]"
                            />
                            {value}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Mobile No / Phone No</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter mobile number"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5] focus:border-[#1349c5]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Email ID</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email address"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5] focus:border-[#1349c5]"
                      />
                    </div>
                  </div>
                </div>

                {/* Career Details */}
                <div>
                  <h4 className="text-sm font-extrabold text-blue-950 uppercase tracking-wider mb-4">
                    Career Details
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Highest Education</label>
                      <select
                        required
                        value={formData.highestEducation}
                        onChange={(e) => setFormData({ ...formData, highestEducation: e.target.value })}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5] focus:border-[#1349c5] bg-white"
                      >
                        <option value="">Select education</option>
                        <option>High School</option>
                        <option>Diploma</option>
                        <option>Graduate</option>
                        <option>Postgraduate</option>
                        <option>Doctorate</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Exp. Year</label>
                        <select
                          required
                          value={formData.experienceYears}
                          onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5] bg-white"
                        >
                          <option value="">Year</option>
                          {Array.from({ length: 21 }, (_, index) => (
                            <option key={index} value={String(index)}>
                              {index}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Exp. Month</label>
                        <select
                          required
                          value={formData.experienceMonths}
                          onChange={(e) => setFormData({ ...formData, experienceMonths: e.target.value })}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5] bg-white"
                        >
                          <option value="">Month</option>
                          {Array.from({ length: 12 }, (_, index) => (
                            <option key={index} value={String(index)}>
                              {index}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Current Salary / Month</label>
                      <input
                        type="text"
                        value={formData.currentSalaryMonth}
                        onChange={(e) => setFormData({ ...formData, currentSalaryMonth: e.target.value })}
                        placeholder="Example: 25000"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Current Salary / Year</label>
                      <input
                        type="text"
                        value={formData.currentSalaryYear}
                        onChange={(e) => setFormData({ ...formData, currentSalaryYear: e.target.value })}
                        placeholder="Example: 300000"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5]"
                      />
                    </div>

                    <div className="md:col-span-2 flex flex-wrap items-center gap-5 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4">
                      <span className="text-xs font-bold text-gray-700 uppercase">
                        Willing to relocate
                      </span>
                      {["Yes", "No"].map((value) => (
                        <label key={value} className="inline-flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="radio"
                            name="relocate"
                            value={value}
                            checked={formData.willingToRelocate === value}
                            onChange={(e) => setFormData({ ...formData, willingToRelocate: e.target.value })}
                            className="accent-[#1349c5]"
                          />
                          {value}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resume */}
                <div>
                  <h4 className="text-sm font-extrabold text-blue-950 uppercase tracking-wider mb-4">
                    Resume Details
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Paste Resume Here</label>
                      <textarea
                        value={formData.resumeText}
                        onChange={(e) => setFormData({ ...formData, resumeText: e.target.value })}
                        rows={10}
                        placeholder="Paste your resume or career summary here"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1349c5] resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Upload Resume</label>
                      <label className="group relative block h-full min-h-[280px] rounded-2xl border-2 border-dashed border-gray-300 bg-slate-50 p-6 text-center cursor-pointer hover:border-[#1349c5] hover:bg-blue-50 transition">
                        <input
                          type="file"
                          accept=".doc,.docx,.rtf,.pdf"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              resumeFile: e.target.files?.[0] || null,
                            })
                          }
                        />

                        <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-500">
                          <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center mx-auto group-hover:bg-[#1349c5] transition">
                            <svg className="w-7 h-7 text-[#1349c5] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                            </svg>
                          </div>

                          <p className="text-sm font-extrabold text-gray-800">
                            Drag & Drop Resume
                          </p>
                          <p className="text-xs text-gray-400">
                            or click to browse file
                          </p>
                          <p className="text-xs text-gray-400">
                            .doc, .docx, .rtf, .pdf
                          </p>

                          {formData.resumeFile && (
                            <p className="text-xs font-semibold text-[#1349c5] mt-2">
                              Selected: {formData.resumeFile.name}
                            </p>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Captcha */}
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
                  <input
                    type="checkbox"
                    id="not-robot"
                    required
                    className="w-4 h-4 accent-[#1349c5]"
                  />
                  <label
                    htmlFor="not-robot"
                    className="text-sm font-semibold text-slate-600 cursor-pointer select-none"
                  >
                    I am not a robot
                  </label>

                  <div className="ml-auto flex items-center gap-3 text-slate-400 text-xs">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    reCAPTCHA
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1349c5] to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-extrabold py-4 rounded-2xl uppercase text-sm tracking-wider transition shadow-lg shadow-blue-200"
                >
                  Submit Registration
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Candidates;
