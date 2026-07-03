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
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Candidates</h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        <p className="text-sm text-gray-500 uppercase tracking-widest mt-3">Register your profile & advance your career</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left side: Information and Benefits */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1349c5]/5 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Why Register with Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-1 bg-blue-600 rounded-full text-white mt-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Direct Recruiter Connections</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Skip long queues and get directly matched with hiring managers.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-blue-600 rounded-full text-white mt-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Pre-Placement Skill Training</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Upgrade your skills with modules tailored for BFSI, Retail, and IT sectors.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 bg-blue-600 rounded-full text-white mt-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Reliable Career Growth</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Continuous feedback and replacement guarantees for active candidates.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side: Registration Form */}
        <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-gray-100 p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Candidate Registration</h3>

          {success ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Registration Successful!</h4>
              <p className="text-sm text-gray-500 max-w-sm mx-auto">
                Thank you for registering. Our team will review your profile and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-600 uppercase mb-2">Gender</span>
                  <div className="flex items-center gap-5">
                    {['Male', 'Female', 'Transgender'].map((value) => (
                      <label key={value} className="inline-flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="radio"
                          name="gender"
                          value={value}
                          checked={formData.gender === value}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        {value}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Mobile No / Phone No</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Mobile No / Phone No"
                    className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Email ID</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email ID"
                    className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Highest Education</label>
                  <select
                    required
                    value={formData.highestEducation}
                    onChange={(e) => setFormData({ ...formData, highestEducation: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                      <option value="">Candidate Highest Education</option>
                    <option>High School</option>
                    <option>Diploma</option>
                    <option>Graduate</option>
                    <option>Postgraduate</option>
                    <option>Doctorate</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Experience Year</label>
                    <select
                      required
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 21 }, (_, index) => (
                        <option key={index} value={String(index)}>{String(index)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Experience Month</label>
                    <select
                      required
                      value={formData.experienceMonths}
                      onChange={(e) => setFormData({ ...formData, experienceMonths: e.target.value })}
                      className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, index) => (
                        <option key={index} value={String(index)}>{String(index)}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Current Salary Per Month</label>
                  <input
                    type="text"
                    value={formData.currentSalaryMonth}
                    onChange={(e) => setFormData({ ...formData, currentSalaryMonth: e.target.value })}
                    placeholder="Current Salary Per Month"
                    className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Current Salary Per Year</label>
                  <input
                    type="text"
                    value={formData.currentSalaryYear}
                    onChange={(e) => setFormData({ ...formData, currentSalaryYear: e.target.value })}
                    placeholder="Current Salary Per Year"
                    className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div />
                <div className="flex items-center gap-6">
                  <span className="text-xs font-semibold text-gray-600 uppercase">Willing to relocate</span>
                  {['Yes', 'No'].map((value) => (
                    <label key={value} className="inline-flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="relocate"
                        value={value}
                        checked={formData.willingToRelocate === value}
                        onChange={(e) => setFormData({ ...formData, willingToRelocate: e.target.value })}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      {value}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Paste Resume Here</label>
                  <textarea
                    value={formData.resumeText}
                    onChange={(e) => setFormData({ ...formData, resumeText: e.target.value })}
                    rows={10}
                    placeholder="Paste your resume or career summary here"
                    className="w-full border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Upload Your Resume</label>
                  <label className="group relative block h-full min-h-[280px] rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center cursor-pointer hover:border-blue-500 transition">
                    <input
                      type="file"
                      accept=".doc,.docx,.rtf,.pdf"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => setFormData({ ...formData, resumeFile: e.target.files?.[0] || null })}
                    />
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-gray-500">
                      <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mx-auto">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-gray-700">Upload Your Resume</p>
                      <p className="text-xs text-gray-400">Allowed file types: .doc, .docx, .rtf, .pdf</p>
                      {formData.resumeFile && <p className="text-xs text-slate-500">Selected: {formData.resumeFile.name}</p>}
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4">
                <input type="checkbox" id="not-robot" required className="w-4 h-4 accent-[#1349c5]" />
                <label htmlFor="not-robot" className="text-sm font-semibold text-slate-600 cursor-pointer select-none">I am not a robot</label>
                <div className="ml-auto flex items-center gap-3 text-slate-400 text-xs">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  reCAPTCHA
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1349c5] hover:bg-blue-800 text-white font-bold py-3 rounded uppercase text-sm tracking-wider transition shadow-md"
              >
                Submit
              </button>
            </form>
          )}
        </div>

      </div>
    </motion.section>
  );
}

export default Candidates;
