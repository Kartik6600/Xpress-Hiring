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
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-5">
              For Corporations
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Employer <span className="text-amber-400">Registration</span>
            </h1>

            <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Register your organization to access our pre-vetted entry-level talent pool and streamline your hiring process.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              {[
                ["150+", "Trusted Companies"],
                ["500+", "Placements"],
                ["25+", "Industries"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <h3 className="text-2xl font-extrabold text-amber-400">{value}</h3>
                  <p className="mt-1 text-xs text-gray-300">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
              <div className="rounded-2xl bg-white p-6 text-slate-900">
                <h3 className="text-xl font-bold">Hire Smarter</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Find verified candidates faster with industry-ready hiring support.
                </p>

                <div className="mt-6 space-y-4">
                  {["Pre-vetted Candidates", "Fast Shortlisting", "Dedicated Hiring Support"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">
          {/* Left Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-[#1349c5] to-indigo-700 text-white rounded-3xl p-7 shadow-xl">
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-300">
                Corporate Advantage
              </span>

              <h3 className="text-2xl font-extrabold mt-5 mb-6">
                Hire better candidates faster
              </h3>

              <div className="grid grid-cols-3 gap-3 mb-7">
                <div className="rounded-2xl bg-white/10 p-3 text-center">
                  <h4 className="text-xl font-extrabold text-amber-400">
                    150+
                  </h4>
                  <p className="text-[10px] text-blue-100">Companies</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-3 text-center">
                  <h4 className="text-xl font-extrabold text-amber-400">
                    500+
                  </h4>
                  <p className="text-[10px] text-blue-100">Placements</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-3 text-center">
                  <h4 className="text-xl font-extrabold text-amber-400">
                    25+
                  </h4>
                  <p className="text-[10px] text-blue-100">Industries</p>
                </div>
              </div>

              <div className="space-y-5">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center shrink-0 mt-0.5">
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
                    <div>
                      <h4 className="font-bold text-sm">{b.title}</h4>
                      <p className="text-blue-100 text-xs mt-0.5 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4 text-sm">
              <h4 className="font-extrabold text-slate-800">Need Help?</h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our team is available to help you complete the registration
                process.
              </p>

              <a
                href="tel:+917600002069"
                className="flex items-center gap-3 text-[#1349c5] font-bold hover:underline"
              >
                +91-7600002069
              </a>

              <a
                href="mailto:xpresshiring@gmail.com"
                className="flex items-center gap-3 text-[#1349c5] font-bold hover:underline"
              >
                xpresshiring@gmail.com
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="bg-white border border-slate-100 rounded-3xl shadow-xl p-6 md:p-10"
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Employer Registration Form
                </h2>
                <p className="text-sm text-slate-500 mt-2">
                  Complete your company profile to start hiring verified
                  entry-level talent.
                </p>

                <div className="mt-6 grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <div
                      key={step}
                      className="h-2 rounded-full bg-gradient-to-r from-[#1349c5] to-indigo-700"
                    />
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Company Info */}
                <section>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">
                      1
                    </div>
                    <h3 className="font-extrabold text-slate-800">
                      Company Information
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <Field label="Employer Name" required>
                      <input
                        type="text"
                        value={form.employerName}
                        onChange={set("employerName")}
                        placeholder="Full registered company name"
                        className={`${inputCls} ${
                          errors.employerName ? "border-red-400" : ""
                        }`}
                      />
                      {errors.employerName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.employerName}
                        </p>
                      )}
                    </Field>

                    <Field label="Employer Description">
                      <textarea
                        value={form.description}
                        onChange={set("description")}
                        placeholder="Briefly describe your company, business and culture..."
                        rows="3"
                        className={`${inputCls} resize-none`}
                      />
                    </Field>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Constitution of Employer">
                        <select
                          value={form.constitution}
                          onChange={set("constitution")}
                          className={`${inputCls} cursor-pointer`}
                        >
                          <option value="">Select Constitution</option>
                          {constitutionOptions.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </Field>

                      <Field label="PAN" required>
                        <input
                          type="text"
                          value={form.pan}
                          onChange={set("pan")}
                          placeholder="ABCDE1234F"
                          className={`${inputCls} ${
                            errors.pan ? "border-red-400" : ""
                          }`}
                        />
                        {errors.pan && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.pan}
                          </p>
                        )}
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="TAN">
                        <input
                          type="text"
                          value={form.tan}
                          onChange={set("tan")}
                          placeholder="TAN Number"
                          className={inputCls}
                        />
                      </Field>

                      <Field label="GSTN">
                        <input
                          type="text"
                          value={form.gstn}
                          onChange={set("gstn")}
                          placeholder="GST Number"
                          className={inputCls}
                        />
                      </Field>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* Address */}
                <section>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">
                      2
                    </div>
                    <h3 className="font-extrabold text-slate-800">
                      Address Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Registered Address">
                      <input
                        type="text"
                        value={form.registeredAddress}
                        onChange={set("registeredAddress")}
                        placeholder="Registered address"
                        className={inputCls}
                      />
                    </Field>

                    <Field label="Registered Office No / Board No">
                      <input
                        type="text"
                        value={form.registeredOfficeBoardNo}
                        onChange={set("registeredOfficeBoardNo")}
                        placeholder="Board / Office number"
                        className={inputCls}
                      />
                    </Field>

                    <Field label="Corporate Office Address" required>
                      <input
                        type="text"
                        value={form.corporateAddress}
                        onChange={set("corporateAddress")}
                        placeholder="Corporate office full address"
                        className={`${inputCls} ${
                          errors.corporateAddress ? "border-red-400" : ""
                        }`}
                      />
                      {errors.corporateAddress && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.corporateAddress}
                        </p>
                      )}
                    </Field>

                    <Field label="Corporate Office No / Board No">
                      <input
                        type="text"
                        value={form.corporateBoardNo}
                        onChange={set("corporateBoardNo")}
                        placeholder="Corporate office number"
                        className={inputCls}
                      />
                    </Field>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* SPOC */}
                <section>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">
                      3
                    </div>
                    <h3 className="font-extrabold text-slate-800">
                      SPOC Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="SPOC Name" required>
                      <input
                        type="text"
                        value={form.spocName}
                        onChange={set("spocName")}
                        placeholder="Full name"
                        className={`${inputCls} ${
                          errors.spocName ? "border-red-400" : ""
                        }`}
                      />
                      {errors.spocName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.spocName}
                        </p>
                      )}
                    </Field>

                    <Field label="SPOC Designation" required>
                      <input
                        type="text"
                        value={form.spocDesignation}
                        onChange={set("spocDesignation")}
                        placeholder="e.g. HR Manager"
                        className={`${inputCls} ${
                          errors.spocDesignation ? "border-red-400" : ""
                        }`}
                      />
                      {errors.spocDesignation && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.spocDesignation}
                        </p>
                      )}
                    </Field>

                    <Field label="SPOC Mobile No" required>
                      <input
                        type="tel"
                        value={form.spocMobile}
                        onChange={set("spocMobile")}
                        placeholder="+91 XXXXX XXXXX"
                        className={`${inputCls} ${
                          errors.spocMobile ? "border-red-400" : ""
                        }`}
                      />
                      {errors.spocMobile && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.spocMobile}
                        </p>
                      )}
                    </Field>

                    <Field label="SPOC Contact No / Board No">
                      <input
                        type="tel"
                        value={form.spocContactBoard}
                        onChange={set("spocContactBoard")}
                        placeholder="Landline / Board number"
                        className={inputCls}
                      />
                    </Field>

                    <Field label="Ext">
                      <input
                        type="text"
                        value={form.ext}
                        onChange={set("ext")}
                        placeholder="Extension number"
                        className={inputCls}
                      />
                    </Field>

                    <Field label="SPOC Email ID" required>
                      <input
                        type="email"
                        value={form.spocEmail}
                        onChange={set("spocEmail")}
                        placeholder="spoc@company.com"
                        className={`${inputCls} ${
                          errors.spocEmail ? "border-red-400" : ""
                        }`}
                      />
                      {errors.spocEmail && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.spocEmail}
                        </p>
                      )}
                    </Field>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* Online Presence */}
                <section>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">
                      4
                    </div>
                    <h3 className="font-extrabold text-slate-800">
                      Online Presence
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Company URL / Website">
                      <input
                        type="url"
                        value={form.companyUrl}
                        onChange={set("companyUrl")}
                        placeholder="https://www.yourcompany.com"
                        className={inputCls}
                      />
                    </Field>

                    <Field label="Company Email">
                      <input
                        type="email"
                        value={form.companyEmail}
                        onChange={set("companyEmail")}
                        placeholder="info@yourcompany.com"
                        className={inputCls}
                      />
                    </Field>

                    <Field label="Embed Map Link" required>
                      <input
                        type="url"
                        value={form.embedMapLink}
                        onChange={set("embedMapLink")}
                        placeholder="https://maps.google.com/..."
                        className={`${inputCls} ${
                          errors.embedMapLink ? "border-red-400" : ""
                        }`}
                      />
                      {errors.embedMapLink && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.embedMapLink}
                        </p>
                      )}
                    </Field>

                    <Field label="Sector" required>
                      <select
                        value={form.sector}
                        onChange={set("sector")}
                        className={`${inputCls} cursor-pointer ${
                          errors.sector ? "border-red-400" : ""
                        }`}
                      >
                        <option value="">Select your sector</option>
                        {sectorOptions.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                      {errors.sector && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.sector}
                        </p>
                      )}
                    </Field>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* Credentials */}
                <section>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full bg-[#1349c5] text-white text-xs font-bold flex items-center justify-center">
                      5
                    </div>
                    <h3 className="font-extrabold text-slate-800">
                      Account Credentials
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Username" required>
                      <input
                        type="text"
                        value={form.username}
                        onChange={set("username")}
                        placeholder="Choose username"
                        className={`${inputCls} ${
                          errors.username ? "border-red-400" : ""
                        }`}
                      />
                      {errors.username && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.username}
                        </p>
                      )}
                    </Field>

                    <div />

                    <Field label="Password" required>
                      <input
                        type="password"
                        value={form.password}
                        onChange={set("password")}
                        placeholder="Min 8 characters"
                        className={`${inputCls} ${
                          errors.password ? "border-red-400" : ""
                        }`}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.password}
                        </p>
                      )}
                    </Field>

                    <Field label="Confirm Password" required>
                      <input
                        type="password"
                        value={form.confirmPassword}
                        onChange={set("confirmPassword")}
                        placeholder="Re-enter password"
                        className={`${inputCls} ${
                          errors.confirmPassword ? "border-red-400" : ""
                        }`}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </Field>
                  </div>
                </section>

                {/* Captcha */}
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
                  <input
                    type="checkbox"
                    id="not-robot"
                    required
                    className="w-4 h-4 accent-[#1349c5] cursor-pointer"
                  />
                  <label
                    htmlFor="not-robot"
                    className="text-sm font-semibold text-slate-600 cursor-pointer select-none"
                  >
                    I am not a robot
                  </label>

                  <div className="ml-auto flex flex-col items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5">
                      reCAPTCHA
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#1349c5] to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 rounded-xl text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
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
                  ) : (
                    <>
                      Submit Registration
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Employers;
