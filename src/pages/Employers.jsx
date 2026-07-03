import React, { useState } from "react";
import { motion } from "framer-motion";

const inputCls = "w-full border-2 border-slate-200 focus:border-[#1349c5] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/50 placeholder-slate-400";
const labelCls = "block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5";

const benefits = [
  { title: "Reduced Sourcing Time", desc: "Only interview pre-screened talent from our verified pool." },
  { title: "Complete Background Check", desc: "Every candidate is identity-verified and background-screened." },
  { title: "Replacement Guarantee", desc: "We provide prompt backup profiles when transitions occur." },
  { title: "Industry-Specific Talent", desc: "Specialists in BFSI, IT, Retail, MSME and more sectors." }
];

const constitutionOptions = [
  "Sole Proprietorship", "Partnership Firm", "LLP", "Private Limited Company",
  "Public Limited Company", "One Person Company", "Society / Trust", "Government Body", "Other"
];

const sectorOptions = [
  "BFSI (Banking, Financial Services & Insurance)", "IT & ITES", "Retail & Sales",
  "Manufacturing", "Healthcare", "MSME", "E-Commerce", "Logistics", "Education", "Other"
];

function Field({ label, required, children }) {
  return (
    <div>
      <label className={labelCls}>{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      {children}
    </div>
  );
}

function Employers() {
  const [form, setForm] = useState({
    employerName: "", description: "", constitution: "", pan: "", tan: "", gstn: "",
    registeredAddress: "", registeredOfficeBoardNo: "", corporateAddress: "", corporateBoardNo: "",
    spocName: "", spocDesignation: "", spocMobile: "", spocContactBoard: "", ext: "", spocEmail: "",
    companyUrl: "", companyEmail: "", embedMapLink: "", sector: "",
    username: "", password: "", confirmPassword: ""
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.employerName) e.employerName = "Required";
    if (!form.pan) e.pan = "Required";
    if (!form.corporateAddress) e.corporateAddress = "Required";
    if (!form.spocName) e.spocName = "Required";
    if (!form.spocDesignation) e.spocDesignation = "Required";
    if (!form.spocMobile) e.spocMobile = "Required";
    if (!form.spocEmail) e.spocEmail = "Required";
    if (!form.embedMapLink) e.embedMapLink = "Required";
    if (!form.sector) e.sector = "Required";
    if (!form.username) e.username = "Required";
    if (!form.password) e.password = "Required";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1400);
  };

  if (success) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-20">
        <motion.div initial={{ opacity:0,scale:0.9 }} animate={{ opacity:1,scale:1 }} className="text-center max-w-md space-y-5">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Registration Submitted!</h2>
          <p className="text-slate-500 leading-relaxed">Thank you for registering as an employer. Our partnership coordinator will review your application and contact you within 24 business hours.</p>
          <button onClick={() => setSuccess(false)} className="bg-[#1349c5] hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-md">
            Register Another
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
        <motion.div animate={{ scale:[1,1.2,1], opacity:[0.1,0.2,0.1] }} transition={{ duration:10,repeat:Infinity }} className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-400 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity:0,y:-16 }} animate={{ opacity:1,y:0 }} className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 inline-block">For Corporations</motion.span>
          <motion.h1 initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.1 }} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Employer <span className="text-amber-400">Registration</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:0.8 }} transition={{ delay:0.2 }} className="mt-5 text-gray-300 max-w-xl mx-auto leading-relaxed">
            Register your organization to access our pre-vetted entry-level talent pool and streamline your hiring process.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Benefits Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-[#1349c5] to-indigo-700 text-white rounded-2xl p-7 shadow-xl">
              <h3 className="text-lg font-extrabold mb-6">Corporate Advantage</h3>
              <div className="space-y-5">
                {benefits.map((b, i) => (
                  <motion.div key={i} initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{b.title}</h4>
                      <p className="text-blue-100 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4 text-sm">
              <h4 className="font-extrabold text-slate-800">Need Help?</h4>
              <p className="text-slate-500 text-xs leading-relaxed">Our team is available to help you complete the registration process.</p>
              <a href="tel:+917600002069" className="flex items-center gap-3 text-[#1349c5] font-bold hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +91-7600002069
              </a>
              <a href="mailto:xpresshiring@gmail.com" className="flex items-center gap-3 text-[#1349c5] font-bold hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                xpresshiring@gmail.com
              </a>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }} whileHover={{ scale: 1.02 }} className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-slate-900">Employer Registration Form</h2>
                <p className="text-sm text-slate-400 mt-1">Fields marked with <span className="text-red-500">*</span> are mandatory.</p>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="space-y-8"
              >

                {/* Section 1: Company Info */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">1</div>
                    <h3 className="font-extrabold text-slate-800 text-base">Company Information</h3>
                  </div>
                  <div className="space-y-4">
                    <Field label="Employer Name" required>
                      <input type="text" value={form.employerName} onChange={set("employerName")} required placeholder="Full registered company name" className={`${inputCls} ${errors.employerName ? "border-red-400" : ""}`} />
                      {errors.employerName && <p className="text-red-500 text-xs mt-1">{errors.employerName}</p>}
                    </Field>
                    <Field label="Employer Description">
                      <textarea value={form.description} onChange={set("description")} placeholder="Briefly describe your company, its business and culture..." rows="3" className={`${inputCls} resize-none`} />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Constitution of Employer">
                        <select value={form.constitution} onChange={set("constitution")} className={`${inputCls} cursor-pointer`}>
                          <option value="">Select Constitution</option>
                          {constitutionOptions.map((o) => <option key={o}>{o}</option>)}
                        </select>
                      </Field>
                      <Field label="PAN" required>
                        <input type="text" value={form.pan} onChange={set("pan")} required placeholder="ABCDE1234F" className={`${inputCls} ${errors.pan ? "border-red-400" : ""}`} />
                        {errors.pan && <p className="text-red-500 text-xs mt-1">{errors.pan}</p>}
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="TAN">
                        <input type="text" value={form.tan} onChange={set("tan")} placeholder="TAN Number" className={inputCls} />
                      </Field>
                      <Field label="GSTN">
                        <input type="text" value={form.gstn} onChange={set("gstn")} placeholder="GST Number" className={inputCls} />
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Section 2: Address */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">2</div>
                    <h3 className="font-extrabold text-slate-800 text-base">Address Details</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Registered Address">
                        <input type="text" value={form.registeredAddress} onChange={set("registeredAddress")} placeholder="Registered address" className={inputCls} />
                      </Field>
                      <Field label="Registered Office No / Board No">
                        <input type="text" value={form.registeredOfficeBoardNo} onChange={set("registeredOfficeBoardNo")} placeholder="Board / Office number" className={inputCls} />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Corporate Office Address" required>
                        <input type="text" value={form.corporateAddress} onChange={set("corporateAddress")} required placeholder="Corporate office full address" className={`${inputCls} ${errors.corporateAddress ? "border-red-400" : ""}`} />
                        {errors.corporateAddress && <p className="text-red-500 text-xs mt-1">{errors.corporateAddress}</p>}
                      </Field>
                      <Field label="Corporate Office No / Board No">
                        <input type="text" value={form.corporateBoardNo} onChange={set("corporateBoardNo")} placeholder="Corporate office number" className={inputCls} />
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Section 3: SPOC Details */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">3</div>
                    <h3 className="font-extrabold text-slate-800 text-base">SPOC (Single Point of Contact) Details</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="SPOC Name" required>
                        <input type="text" value={form.spocName} onChange={set("spocName")} required placeholder="Full name of point of contact" className={`${inputCls} ${errors.spocName ? "border-red-400" : ""}`} />
                        {errors.spocName && <p className="text-red-500 text-xs mt-1">{errors.spocName}</p>}
                      </Field>
                      <Field label="SPOC Designation" required>
                        <input type="text" value={form.spocDesignation} onChange={set("spocDesignation")} required placeholder="e.g. HR Manager" className={`${inputCls} ${errors.spocDesignation ? "border-red-400" : ""}`} />
                        {errors.spocDesignation && <p className="text-red-500 text-xs mt-1">{errors.spocDesignation}</p>}
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="SPOC Mobile No" required>
                        <input type="tel" value={form.spocMobile} onChange={set("spocMobile")} required placeholder="+91 XXXXX XXXXX" className={`${inputCls} ${errors.spocMobile ? "border-red-400" : ""}`} />
                        {errors.spocMobile && <p className="text-red-500 text-xs mt-1">{errors.spocMobile}</p>}
                      </Field>
                      <Field label="SPOC Contact No / Board No">
                        <input type="tel" value={form.spocContactBoard} onChange={set("spocContactBoard")} placeholder="Landline / Board number" className={inputCls} />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Ext (if any)">
                        <input type="text" value={form.ext} onChange={set("ext")} placeholder="Extension number" className={inputCls} />
                      </Field>
                      <Field label="SPOC Email ID" required>
                        <input type="email" value={form.spocEmail} onChange={set("spocEmail")} required placeholder="spoc@company.com" className={`${inputCls} ${errors.spocEmail ? "border-red-400" : ""}`} />
                        {errors.spocEmail && <p className="text-red-500 text-xs mt-1">{errors.spocEmail}</p>}
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Section 4: Online Presence */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">4</div>
                    <h3 className="font-extrabold text-slate-800 text-base">Online Presence</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Company URL / Website">
                        <input type="url" value={form.companyUrl} onChange={set("companyUrl")} placeholder="https://www.yourcompany.com" className={inputCls} />
                      </Field>
                      <Field label="Company Email">
                        <input type="email" value={form.companyEmail} onChange={set("companyEmail")} placeholder="info@yourcompany.com" className={inputCls} />
                      </Field>
                    </div>
                    <Field label="Embed Map Link" required>
                      <input type="url" value={form.embedMapLink} onChange={set("embedMapLink")} required placeholder="https://maps.google.com/..." className={`${inputCls} ${errors.embedMapLink ? "border-red-400" : ""}`} />
                      {errors.embedMapLink && <p className="text-red-500 text-xs mt-1">{errors.embedMapLink}</p>}
                    </Field>
                    <Field label="Sector" required>
                      <select value={form.sector} onChange={set("sector")} required className={`${inputCls} cursor-pointer ${errors.sector ? "border-red-400" : ""}`}>
                        <option value="">Select your sector</option>
                        {sectorOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                      {errors.sector && <p className="text-red-500 text-xs mt-1">{errors.sector}</p>}
                    </Field>
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Section 5: Account Credentials */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-7 h-7 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">5</div>
                    <h3 className="font-extrabold text-slate-800 text-base">Account Credentials</h3>
                  </div>
                  <div className="space-y-4">
                    <Field label="Username" required>
                      <input type="text" value={form.username} onChange={set("username")} required placeholder="Choose a unique username" className={`${inputCls} ${errors.username ? "border-red-400" : ""}`} />
                      {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Password" required>
                        <input type="password" value={form.password} onChange={set("password")} required placeholder="Min 8 characters" className={`${inputCls} ${errors.password ? "border-red-400" : ""}`} />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                      </Field>
                      <Field label="Confirm Password" required>
                        <input type="password" value={form.confirmPassword} onChange={set("confirmPassword")} required placeholder="Re-enter password" className={`${inputCls} ${errors.confirmPassword ? "border-red-400" : ""}`} />
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                      </Field>
                    </div>
                  </div>
                </div>

                {/* reCAPTCHA Notice */}
                <div className="flex items-center gap-3 bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4">
                  <input type="checkbox" id="not-robot" required className="w-4 h-4 accent-[#1349c5] cursor-pointer" />
                  <label htmlFor="not-robot" className="text-sm font-semibold text-slate-600 cursor-pointer select-none">
                    I am not a robot
                  </label>
                  <div className="ml-auto flex flex-col items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5">reCAPTCHA</span>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full bg-[#1349c5] hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                  ) : (
                    <>
                      Submit Registration
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Employers;
