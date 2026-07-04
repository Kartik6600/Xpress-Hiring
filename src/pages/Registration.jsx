import React, { useState } from "react";
import { motion } from "framer-motion";

// Common input styles matching your UI template
const inputCls = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1349c5] focus:bg-white transition-all text-sm";

// Shared Reusable Field Wrapper Component
const Field = ({ label, children, required }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-0.5">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

// Constant Options for Dropdowns
const constitutionOptions = ["Proprietorship", "Partnership", "LLP", "Private Limited", "Public Limited", "Trust/NGO"];
const sectorOptions = ["Information Technology", "Manufacturing", "Healthcare", "Finance & Banking", "Education", "Retail & E-commerce", "Logistics", "Other"];

export default function Registration() {
  // 'selection', 'candidate', or 'employer'
  const [activeView, setActiveView] = useState("selection");

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-500 selection:text-white">
      {activeView === "selection" ? (
        <SelectionView onSelect={setActiveView} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {/* Back Navigation Bar */}
          <button
            onClick={() => setActiveView("selection")}
            className="mb-8 flex items-center gap-2 text-slate-500 hover:text-[#1349c5] font-bold text-sm transition-colors group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Account Selection
          </button>

          {/* Conditional Form Render */}
          {activeView === "employer" && <EmployerForm />}
          {activeView === "candidate" && <CandidateForm />}
        </div>
      )}
    </div>
  );
}

// ==========================================
// 1. RE-DESIGNED DASHBOARD CARD SELECTION VIEW
// ==========================================
function SelectionView({ onSelect }) {
  const trustIndicators = [
    { value: "500+", label: "Successful Placements", icon: "🎯" },
    { value: "150+", label: "Trusted Companies", icon: "🏢" },
    { value: "25+", label: "Industries Served", icon: "🚀" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-zinc-200 overflow-hidden">
      
      {/* Decorative Background Illustration Artifacts */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Grid Mesh Overlay Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-5xl w-full z-10 space-y-16">
        
        {/* Upper Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#1349c5] text-xs font-bold uppercase tracking-wider shadow-sm">
            ⚡ Welcome to the onboarding portal
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
            Get Started with <span className="text-[#1349c5] bg-gradient-to-r from-[#1349c5] to-blue-600 bg-clip-text text-transparent">XpressHiring</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Select your professional framework profile to access automated matchmaking infrastructure channels.
          </p>
        </motion.div>

        {/* Dynamic Process Cards Row Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Candidate Card Selection Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(19, 73, 197, 0.15)" }}
            onClick={() => {
              onSelect("candidate");
              window.scrollTo({
                top: 0,
                behavior: "smooth", // or remove behavior for instant scroll
              });
            }}
            className="relative bg-white border border-slate-200/80 hover:border-[#1349c5] rounded-3xl p-8 md:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            {/* Subtle card decorative indicator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-50 text-[#1349c5] rounded-2xl flex items-center justify-center group-hover:bg-[#1349c5] group-hover:text-white transition-all duration-300 shadow-inner group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-2.5 py-1 rounded-md">Individual</span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-3">Job Seeker / Candidate</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Build your verified credentials portfolio file, demonstrate target domain competencies, and receive placement matching instantly.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full bg-slate-50 border border-slate-200 group-hover:bg-[#1349c5] group-hover:text-white group-hover:border-[#1349c5] rounded-xl py-3.5 px-5 font-bold text-sm text-slate-700 flex items-center justify-center gap-2 transition-all duration-300 shadow-sm">
                Apply as Candidate
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Employer Card Selection Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(79, 70, 229, 0.15)" }}
            onClick={() => {
              onSelect("employer");
              window.scrollTo({
                top: 0,
                behavior: "smooth", // or remove behavior for instant scroll
              });
            }}
            className="relative bg-white border border-slate-200/80 hover:border-indigo-600 rounded-3xl p-8 md:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />

            <div className="space-y-6">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-inner group-hover:scale-110">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Enterprise</span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-3">Employer / Company</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Establish corporate hiring pipelines, access pre-vetted domain candidate nodes, and streamline complete screening tracking campaigns.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full bg-slate-50 border border-slate-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 rounded-xl py-3.5 px-5 font-bold text-sm text-slate-700 flex items-center justify-center gap-2 transition-all duration-300 shadow-sm">
                Onboard Company
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. FULL EMPLOYER REGISTRATION VIEW
// ==========================================
function EmployerForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    employerName: "", description: "", constitution: "", pan: "", tan: "", gstn: "",
    registeredAddress: "", registeredOfficeBoardNo: "", corporateAddress: "", corporateBoardNo: "",
    spocName: "", spocDesignation: "", spocMobile: "", spocContactBoard: "", ext: "", spocEmail: "",
    companyUrl: "", companyEmail: "", embedMapLink: "", sector: "", username: "", password: "", confirmPassword: ""
  });

  const handleInputChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Employer registration complete!");
    }, 1500);
  };

  const dynamicBenefits = [
    { title: "Direct Placement Engine", desc: "Gain direct algorithmic indexing filters targeting optimal candidate competencies." },
    { title: "Corporate Branding Profile", desc: "Establish transparent culture metrics to secure premium retention rates." }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Sidebar Content Details */}
      <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
        <div className="bg-gradient-to-br from-[#1349c5] to-indigo-900 text-white rounded-3xl p-6 shadow-md space-y-6">
          <h3 className="font-extrabold text-xl tracking-tight">Onboarding Perks</h3>
          <div className="space-y-4">
            {dynamicBenefits.map((b, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm">{b.title}</h4>
                  <p className="text-blue-100 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 text-sm">
          <h4 className="font-extrabold text-slate-800">Need Help?</h4>
          <p className="text-slate-500 text-xs leading-relaxed">Our team is available to help you complete the registration process.</p>
          <a href="tel:+917600002069" className="flex items-center gap-3 text-[#1349c5] font-bold hover:underline">+91-7600002069</a>
          <a href="mailto:xpresshiring@gmail.com" className="flex items-center gap-3 text-[#1349c5] font-bold hover:underline">xpresshiring@gmail.com</a>
        </div>
      </div>

      {/* Right Form Component Body */}
      <div className="lg:col-span-8">
         <div className="h-[calc(100vh-120px)] overflow-y-auto pr-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Employer Registration Form</h2>
              <p className="text-sm text-slate-500 mt-2">Complete your company profile to start hiring verified entry-level talent.</p>
              <div className="mt-6 grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="h-2 rounded-full bg-gradient-to-r from-[#1349c5] to-indigo-700" />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1: Company Info */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">1</div>
                  <h3 className="font-extrabold text-slate-800">Company Information</h3>
                </div>
                <div className="space-y-4">
                  <Field label="Employer Name" required>
                    <input type="text" value={form.employerName} onChange={handleInputChange("employerName")} placeholder="Full registered company name" className={inputCls} required />
                  </Field>
                  <Field label="Employer Description">
                    <textarea value={form.description} onChange={handleInputChange("description")} placeholder="Briefly describe your company, business and culture..." rows="3" className={`${inputCls} resize-none`} />
                  </Field>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Constitution of Employer">
                      <select value={form.constitution} onChange={handleInputChange("constitution")} className={`${inputCls} cursor-pointer`}>
                        <option value="">Select Constitution</option>
                        {constitutionOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </Field>
                    <Field label="PAN" required>
                      <input type="text" value={form.pan} onChange={handleInputChange("pan")} placeholder="ABCDE1234F" className={inputCls} required />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="TAN"><input type="text" value={form.tan} onChange={handleInputChange("tan")} placeholder="TAN Number" className={inputCls} /></Field>
                    <Field label="GSTN"><input type="text" value={form.gstn} onChange={handleInputChange("gstn")} placeholder="GST Number" className={inputCls} /></Field>
                  </div>
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Section 2: Address Details */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">2</div>
                  <h3 className="font-extrabold text-slate-800">Address Details</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Registered Address"><input type="text" value={form.registeredAddress} onChange={handleInputChange("registeredAddress")} placeholder="Registered address" className={inputCls} /></Field>
                  <Field label="Registered Office No / Board No"><input type="text" value={form.registeredOfficeBoardNo} onChange={handleInputChange("registeredOfficeBoardNo")} placeholder="Board / Office number" className={inputCls} /></Field>
                  <Field label="Corporate Office Address" required><input type="text" value={form.corporateAddress} onChange={handleInputChange("corporateAddress")} placeholder="Corporate office full address" className={inputCls} required /></Field>
                  <Field label="Corporate Office No / Board No"><input type="text" value={form.corporateBoardNo} onChange={handleInputChange("corporateBoardNo")} placeholder="Corporate office number" className={inputCls} /></Field>
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Section 3: SPOC Details */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">3</div>
                  <h3 className="font-extrabold text-slate-800">SPOC Details</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="SPOC Name" required><input type="text" value={form.spocName} onChange={handleInputChange("spocName")} placeholder="Full name" className={inputCls} required /></Field>
                  <Field label="SPOC Designation" required><input type="text" value={form.spocDesignation} onChange={handleInputChange("spocDesignation")} placeholder="e.g. HR Manager" className={inputCls} required /></Field>
                  <Field label="SPOC Mobile No" required><input type="tel" value={form.spocMobile} onChange={handleInputChange("spocMobile")} placeholder="+91 XXXXX XXXXX" className={inputCls} required /></Field>
                  <Field label="SPOC Contact No / Board No"><input type="tel" value={form.spocContactBoard} onChange={handleInputChange("spocContactBoard")} placeholder="Landline / Board number" className={inputCls} /></Field>
                  <Field label="Ext"><input type="text" value={form.ext} onChange={handleInputChange("ext")} placeholder="Extension number" className={inputCls} /></Field>
                  <Field label="SPOC Email ID" required><input type="email" value={form.spocEmail} onChange={handleInputChange("spocEmail")} placeholder="spoc@company.com" className={inputCls} required /></Field>
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Section 4: Online Presence */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">4</div>
                  <h3 className="font-extrabold text-slate-800">Online Presence</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Company URL / Website"><input type="url" value={form.companyUrl} onChange={handleInputChange("companyUrl")} placeholder="https://www.yourcompany.com" className={inputCls} /></Field>
                  <Field label="Company Email"><input type="email" value={form.companyEmail} onChange={handleInputChange("companyEmail")} placeholder="info@yourcompany.com" className={inputCls} /></Field>
                  <Field label="Embed Map Link" required><input type="url" value={form.embedMapLink} onChange={handleInputChange("embedMapLink")} placeholder="http://maps.google.com/..." className={inputCls} required /></Field>
                  <Field label="Sector" required>
                    <select value={form.sector} onChange={handleInputChange("sector")} className={`${inputCls} cursor-pointer`} required>
                      <option value="">Select your sector</option>
                      {sectorOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Section 5: Account Credentials */}
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">5</div>
                  <h3 className="font-extrabold text-slate-800">Account Credentials</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Username" required><input type="text" value={form.username} onChange={handleInputChange("username")} placeholder="Choose username" className={inputCls} required /></Field>
                  <div />
                  <Field label="Password" required><input type="password" value={form.password} onChange={handleInputChange("password")} placeholder="Min 8 characters" className={inputCls} required /></Field>
                  <Field label="Confirm Password" required><input type="password" value={form.confirmPassword} onChange={handleInputChange("confirmPassword")} placeholder="Re-enter password" className={inputCls} required /></Field>
                </div>
              </section>

              {/* Captcha Box */}
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
                <input type="checkbox" id="not-robot" required className="w-4 h-4 accent-[#1349c5] cursor-pointer" />
                <label htmlFor="not-robot" className="text-sm font-semibold text-slate-600 cursor-pointer select-none">I am not a robot</label>
                <div className="ml-auto flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-0.5">reCAPTCHA</span>
                </div>
              </div>

              {/* Submission Action Button */}
              <motion.button
                type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} disabled={loading}
                className="w-full bg-gradient-to-r from-[#1349c5] to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <>Submit Company Registration &rarr;</>
                )}
              </motion.button>
            </form>
          </motion.div>
         </div> 
      </div>
    </div>
  );
}

// ==========================================
// 3. COMPLETE MATCHING CANDIDATE VIEW
// ==========================================
function CandidateForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "", email: "", mobile: "", highestQualification: "", keySkills: "",
    username: "", password: "", confirmPassword: ""
  });

  const handleInputChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Candidate registration complete!");
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Dynamic Left Content Info Column */}
      <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
        <div className="bg-gradient-to-br from-indigo-600 to-slate-900 text-white rounded-3xl p-6 shadow-md space-y-6">
          <h3 className="font-extrabold text-xl tracking-tight">Your Career Start</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-slate-900 font-bold text-xs">✓</div>
              <div>
                <h4 className="font-bold text-sm">Instant Credential Verification</h4>
                <p className="text-indigo-100 text-xs mt-0.5 leading-relaxed">Profiles are indexed quickly to establish high trust factors with tech recruiters.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-slate-900 font-bold text-xs">✓</div>
              <div>
                <h4 className="font-bold text-sm">Direct Core Interview Loops</h4>
                <p className="text-indigo-100 text-xs mt-0.5 leading-relaxed">Bypass standard screening queues using targeted skills tracking pipelines.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm text-sm">
          <h4 className="font-extrabold text-slate-800 mb-2">Registration Guideline</h4>
          <p className="text-slate-500 text-xs leading-relaxed">Ensure contact endpoints match legal document metrics to ensure smooth backend profile verification cycles.</p>
        </div>
      </div>

      {/* Primary Form Input Body */}
      <div className="max-w-5xl mx-auto lg:col-span-8 space-y-6">
        <div className="h-[calc(100vh-120px)] overflow-y-auto hide-scrollbar pr-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6 md:p-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Candidate Profile Application</h2>
              <p className="text-sm text-slate-500 mt-2">Build your onboarding dynamic index file to expose skills matching capabilities.</p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500" />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Step 1: Personal Info */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">1</div>
                  <h3 className="font-extrabold text-slate-800">Contact Foundations</h3>
                </div>
                <Field label="Full Name" required><input type="text" value={form.fullName} onChange={handleInputChange("fullName")} placeholder="John Doe" className={inputCls} required /></Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Primary Email ID" required><input type="email" value={form.email} onChange={handleInputChange("email")} placeholder="john@example.com" className={inputCls} required /></Field>
                  <Field label="Mobile Number" required><input type="tel" value={form.mobile} onChange={handleInputChange("mobile")} placeholder="+91 XXXXX XXXXX" className={inputCls} required /></Field>
                </div>
              </section>

              <hr className="border-slate-100" />

              {/* Step 2: Experience / Academic Details */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">2</div>
                  <h3 className="font-extrabold text-slate-800">Academic & Skill Base</h3>
                </div>
                <Field label="Highest Qualification" required><input type="text" value={form.highestQualification} onChange={handleInputChange("highestQualification")} placeholder="e.g. B.Tech Computer Engineering" className={inputCls} required /></Field>
                <Field label="Key Skills (Comma Separated)" required><input type="text" value={form.keySkills} onChange={handleInputChange("keySkills")} placeholder="React, Node.js, Cybersecurity, IAM" className={inputCls} required /></Field>
              </section>

              <hr className="border-slate-100" />

              {/* Step 3: Account Access Security */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">3</div>
                  <h3 className="font-extrabold text-slate-800">Account Configuration</h3>
                </div>
                <Field label="Username" required><input type="text" value={form.username} onChange={handleInputChange("username")} placeholder="Choose candidate handle" className={inputCls} required /></Field>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Password" required><input type="password" value={form.password} onChange={handleInputChange("password")} placeholder="Create access pass" className={inputCls} required /></Field>
                  <Field label="Confirm Password" required><input type="password" value={form.confirmPassword} onChange={handleInputChange("confirmPassword")} placeholder="Validate access pass" className={inputCls} required /></Field>
                </div>
              </section>

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
          </motion.div>
        </div>
      </div>
    </div>
  );
}