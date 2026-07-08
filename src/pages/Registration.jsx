import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { saveRegisteredCandidate } from "../data/candidateStorage.js";

const inputCls =
  "w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm transition placeholder:text-slate-400 focus:border-[#1349c5] focus:outline-none focus:ring-4 focus:ring-[#1349c5]/10";

const Field = ({ label, children, required }) => (
  <div className="flex w-full flex-col gap-1.5">
    <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    {children}
  </div>
);

const constitutionOptions = [
  "Proprietorship",
  "Partnership",
  "LLP",
  "Private Limited",
  "Public Limited",
  "Trust/NGO",
];

const sectorOptions = [
  "Information Technology",
  "Manufacturing",
  "Healthcare",
  "Finance & Banking",
  "Education",
  "Retail & E-commerce",
  "Logistics",
  "Other",
];

const candidateHighlights = [
  "Share your background in a way that feels natural.",
  "Keep your profile clean, current, and easy to read.",
  "Move straight into candidate matching after signup.",
];

export default function Registration() {
  const [activeView, setActiveView] = useState("selection");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(19,73,197,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(15,118,110,0.09),transparent_28%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 selection:bg-[#1349c5] selection:text-white">
      {activeView === "selection" ? (
        <SelectionView onSelect={setActiveView} />
      ) : (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <button
            onClick={() => {
              setActiveView("selection");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mb-5 inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur transition hover:border-[#1349c5]/30 hover:text-[#1349c5]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to selection
          </button>

          <div>
            {activeView === "employer" && <EmployerForm />}
            {activeView === "candidate" && <CandidateForm />}
          </div>
        </div>
      )}
    </div>
  );
}

function SectionTitle({ step, title, description, accent = "blue" }) {
  const accentClasses =
    accent === "indigo"
      ? "bg-indigo-50 text-indigo-700 ring-indigo-100"
      : "bg-blue-50 text-[#1349c5] ring-blue-100";

  return (
    <div className="mb-6 flex items-start gap-4">
      <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl font-semibold ring-8 ${accentClasses}`}>
        {step}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </div>
  );
}

function pillClass(theme) {
  return theme === "indigo"
    ? "bg-indigo-50 text-indigo-700 ring-indigo-100"
    : "bg-blue-50 text-[#1349c5] ring-blue-100";
}

function SelectionView({ onSelect }) {
  const cards = [
    {
      key: "candidate",
      theme: "blue",
      badge: "For job seekers",
      title: "Create a candidate profile",
      copy: "Tell your story, list your strengths, and build a profile that feels like you.",
      points: ["Simple profile setup", "Skills and role focus", "Smooth handoff to candidate view"],
      cta: "Start as a candidate",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      glow: "from-[#1349c5]/15 to-transparent",
      iconBg: "bg-blue-50 text-[#1349c5]",
      accent: "from-[#1349c5] to-blue-500",
      button: "bg-slate-950 group-hover:bg-[#1349c5]",
    },
    {
      key: "employer",
      theme: "indigo",
      badge: "For companies",
      title: "Create a company profile",
      copy: "Introduce your company clearly so candidates understand who they are applying to.",
      points: ["Company details", "Hiring contact info", "Clean employer profile"],
      cta: "Start as an employer",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h1m-1 4h1m4-4h1m-1 4h1M9 15h6" />
        </svg>
      ),
      glow: "from-indigo-600/15 to-transparent",
      iconBg: "bg-indigo-50 text-indigo-700",
      accent: "from-indigo-600 to-sky-500",
      button: "bg-slate-950 group-hover:bg-indigo-600",
    },
  ];

  return (
    <div className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="absolute left-[-8%] top-[-8%] h-72 w-72 rounded-full bg-[#1349c5]/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-6%] h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 shadow-sm backdrop-blur">
            Registration
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Pick the path that fits how you want to show up.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            The goal here is simple: make the signup feel calm, clear, and human. Choose the account type that matches you, then fill in the details at your own pace.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.button
              key={card.key}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => {
                onSelect(card.key);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 text-left shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur transition hover:border-[#1349c5]/20"
            >
              <div className={`absolute right-[-2rem] top-[-2rem] h-36 w-36 rounded-full bg-gradient-to-br ${card.glow}`} />
              <div className="relative space-y-6">
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ring-1 ${pillClass(card.theme)}`}>
                  {card.badge}
                </div>

                <div className={`flex h-16 w-16 items-center justify-center rounded-3xl ${card.iconBg} transition group-hover:text-white ${card.theme === "indigo" ? "group-hover:bg-indigo-600" : "group-hover:bg-[#1349c5]"}`}>
                  {card.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">{card.copy}</p>
                </div>

                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-slate-600">
                      <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${card.accent} text-white shadow-sm`}>
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className={`inline-flex items-center gap-2 rounded-full ${card.button} px-4 py-2 text-sm font-medium text-white transition`}>
                  {card.cta}
                  <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M13 5l7 7m0 0l-7 7m7-7H4" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmployerForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    employerName: "",
    description: "",
    constitution: "",
    pan: "",
    tan: "",
    gstn: "",
    registeredAddress: "",
    registeredOfficeBoardNo: "",
    corporateAddress: "",
    corporateBoardNo: "",
    spocName: "",
    spocDesignation: "",
    spocMobile: "",
    spocContactBoard: "",
    ext: "",
    spocEmail: "",
    companyUrl: "",
    companyEmail: "",
    embedMapLink: "",
    sector: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field) => (e) => {
    setForm((current) => ({ ...current, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Employer registration complete!");
    }, 1200);
  };

  const benefits = [
    {
      title: "A profile that feels credible",
      desc: "A steady, readable structure helps the company page feel approachable and trustworthy.",
    },
    {
      title: "Easy contact handoff",
      desc: "The form keeps the important hiring details close together, so it is easier to review later.",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="space-y-6 lg:col-span-4">
        <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-[0_22px_70px_rgba(15,23,42,0.22)]">
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Employer profile
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">Make the company page feel grounded and clear.</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Keep the language real, the structure clean, and the details easy to scan. That usually reads better than trying to sound overly polished.
          </p>

          <div className="mt-6 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-3 rounded-2xl bg-white/5 p-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{benefit.title}</h4>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
          <h4 className="text-lg font-semibold text-slate-900">Need help?</h4>
          <p className="mt-2 text-sm leading-6 text-slate-500">If a field feels unclear, reach out and we’ll help you finish the setup cleanly.</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href="tel:+917600002069" className="block font-medium text-[#1349c5] hover:underline">
              +91-7600002069
            </a>
            <a href="mailto:xpresshiring@gmail.com" className="block font-medium text-[#1349c5] hover:underline">
              xpresshiring@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex max-h-[calc(100vh)] flex-col overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
        >
          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col gap-10 overflow-y-auto bg-white px-6 pb-12 pt-6 pr-8 md:px-10 md:pb-14 md:pt-10 md:pr-12">
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1349c5]">
              Company Registration
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Tell us about your company</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Use plain language and keep it honest. The best company profiles are the ones that feel easy to understand at a glance.
            </p>
            <div className="mt-6 grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="h-2 rounded-full bg-gradient-to-r from-[#1349c5] via-sky-500 to-indigo-500" />
              ))}
            </div>
          </div>
            <section>
              <SectionTitle
                step="1"
                title="Company basics"
                description="Start with the core company details that people will actually look for."
              />
              <div className="space-y-4">
                <Field label="Employer name" required>
                  <input
                    type="text"
                    value={form.employerName}
                    onChange={handleInputChange("employerName")}
                    placeholder="Full registered company name"
                    className={inputCls}
                    required
                  />
                </Field>
                <Field label="Company overview">
                  <textarea
                    value={form.description}
                    onChange={handleInputChange("description")}
                    placeholder="A short note about what your company does and the kind of people you hire."
                    rows="4"
                    className={`${inputCls} resize-none`}
                  />
                </Field>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Constitution">
                    <select value={form.constitution} onChange={handleInputChange("constitution")} className={`${inputCls} cursor-pointer`}>
                      <option value="">Select constitution</option>
                      {constitutionOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="PAN" required>
                    <input
                      type="text"
                      value={form.pan}
                      onChange={handleInputChange("pan")}
                      placeholder="ABCDE1234F"
                      className={inputCls}
                      required
                    />
                  </Field>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="TAN">
                    <input type="text" value={form.tan} onChange={handleInputChange("tan")} placeholder="TAN number" className={inputCls} />
                  </Field>
                  <Field label="GSTN">
                    <input type="text" value={form.gstn} onChange={handleInputChange("gstn")} placeholder="GST number" className={inputCls} />
                  </Field>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-200/70" />

            <section>
              <SectionTitle
                step="2"
                title="Address details"
                description="Use the address people should rely on, not the most formal wording possible."
                accent="indigo"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Registered address">
                  <input
                    type="text"
                    value={form.registeredAddress}
                    onChange={handleInputChange("registeredAddress")}
                    placeholder="Registered address"
                    className={inputCls}
                  />
                </Field>
                <Field label="Registered office / board no">
                  <input
                    type="text"
                    value={form.registeredOfficeBoardNo}
                    onChange={handleInputChange("registeredOfficeBoardNo")}
                    placeholder="Office or board number"
                    className={inputCls}
                  />
                </Field>
                <Field label="Corporate office address" required>
                  <input
                    type="text"
                    value={form.corporateAddress}
                    onChange={handleInputChange("corporateAddress")}
                    placeholder="Corporate office full address"
                    className={inputCls}
                    required
                  />
                </Field>
                <Field label="Corporate office / board no">
                  <input
                    type="text"
                    value={form.corporateBoardNo}
                    onChange={handleInputChange("corporateBoardNo")}
                    placeholder="Corporate office number"
                    className={inputCls}
                  />
                </Field>
              </div>
            </section>

            <div className="border-t border-slate-200/70" />

            <section>
              <SectionTitle
                step="3"
                title="Main contact"
                description="This is the person we should be able to reach without confusion."
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="SPOC name" required>
                  <input type="text" value={form.spocName} onChange={handleInputChange("spocName")} placeholder="Full name" className={inputCls} required />
                </Field>
                <Field label="SPOC designation" required>
                  <input type="text" value={form.spocDesignation} onChange={handleInputChange("spocDesignation")} placeholder="e.g. HR Manager" className={inputCls} required />
                </Field>
                <Field label="SPOC mobile no" required>
                  <input type="tel" value={form.spocMobile} onChange={handleInputChange("spocMobile")} placeholder="+91 XXXXX XXXXX" className={inputCls} required />
                </Field>
                <Field label="SPOC contact / board no">
                  <input type="tel" value={form.spocContactBoard} onChange={handleInputChange("spocContactBoard")} placeholder="Landline or board number" className={inputCls} />
                </Field>
                <Field label="Ext">
                  <input type="text" value={form.ext} onChange={handleInputChange("ext")} placeholder="Extension number" className={inputCls} />
                </Field>
                <Field label="SPOC email ID" required>
                  <input type="email" value={form.spocEmail} onChange={handleInputChange("spocEmail")} placeholder="name@company.com" className={inputCls} required />
                </Field>
              </div>
            </section>

            <div className="border-t border-slate-200/70" />

            <section>
              <SectionTitle
                step="4"
                title="Online presence"
                description="Add the links and sector details that help candidates understand your company faster."
                accent="indigo"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Company website">
                  <input type="url" value={form.companyUrl} onChange={handleInputChange("companyUrl")} placeholder="https://www.yourcompany.com" className={inputCls} />
                </Field>
                <Field label="Company email">
                  <input type="email" value={form.companyEmail} onChange={handleInputChange("companyEmail")} placeholder="info@yourcompany.com" className={inputCls} />
                </Field>
                <Field label="Embed map link" required>
                  <input type="url" value={form.embedMapLink} onChange={handleInputChange("embedMapLink")} placeholder="https://maps.google.com/..." className={inputCls} required />
                </Field>
                <Field label="Sector" required>
                  <select value={form.sector} onChange={handleInputChange("sector")} className={`${inputCls} cursor-pointer`} required>
                    <option value="">Select your sector</option>
                    {sectorOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            </section>

            <div className="border-t border-slate-200/70" />

            <section>
              <SectionTitle
                step="5"
                title="Account access"
                description="Choose credentials that are easy to remember and secure."
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Username" required>
                  <input type="text" value={form.username} onChange={handleInputChange("username")} placeholder="Choose username" className={inputCls} required />
                </Field>
                <div />
                <Field label="Password" required>
                  <input type="password" value={form.password} onChange={handleInputChange("password")} placeholder="At least 8 characters" className={inputCls} required />
                </Field>
                <Field label="Confirm password" required>
                  <input type="password" value={form.confirmPassword} onChange={handleInputChange("confirmPassword")} placeholder="Re-enter password" className={inputCls} required />
                </Field>
              </div>
            </section>

            <label className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 px-5 py-4 text-sm text-slate-600">
              <input type="checkbox" required className="h-4 w-4 accent-[#1349c5]" />
              I confirm that the details above are accurate.
            </label>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1349c5] to-indigo-600 px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(19,73,197,0.25)] transition hover:from-[#0f3f9e] hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving your company profile...
                </>
              ) : (
                "Submit company registration"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function CandidateForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    highestQualification: "",
    keySkills: "",
    role: "",
    location: "",
    industry: "",
    experience: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field) => (e) => {
    setForm((current) => ({ ...current, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (form.password !== form.confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const initials = form.fullName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();

    saveRegisteredCandidate({
      id: Date.now(),
      name: form.fullName.trim(),
      email: form.email.trim(),
      mobile: form.mobile.trim(),
      role: form.role.trim(),
      location: form.location.trim(),
      industry: form.industry,
      experience: form.experience.trim(),
      qualification: form.highestQualification.trim(),
      skills: form.keySkills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      initials,
      tone: "bg-indigo-600",
    });

    navigate("/candidates", { state: { registrationComplete: true } });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="space-y-6 lg:col-span-4">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-6 text-white shadow-[0_22px_70px_rgba(15,23,42,0.22)]">
          <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Candidate profile
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">Build a profile that sounds like a person, not a form.</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Keep the details grounded. A good profile should read smoothly, make sense at a glance, and feel easy to trust.
          </p>

          <div className="mt-6 space-y-4">
            {candidateHighlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/5 p-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur">
          <h4 className="text-lg font-semibold text-slate-900">A small note</h4>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            If you are a fresher, that is fine. Keep the role and skills fields honest, and use the profile to make your strengths visible.
          </p>
        </div>
      </div>

      <div className="lg:col-span-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex max-h-[calc(100vh)] flex-col overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
        >
          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col gap-10 overflow-y-auto bg-white px-6 pb-12 pt-6 pr-8 md:px-10 md:pb-14 md:pt-10 md:pr-12">
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
              Candidate Registration
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Create your candidate profile</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Share the basics first, then fill in the parts that help a recruiter understand your background quickly.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="h-2 rounded-full bg-gradient-to-r from-indigo-600 via-sky-500 to-blue-500" />
              ))}
            </div>
          </div>
            <section>
              <SectionTitle
                step="1"
                title="Contact basics"
                description="Use the details you want a recruiter to reach you on."
                accent="indigo"
              />
              <Field label="Full name" required>
                <input type="text" value={form.fullName} onChange={handleInputChange("fullName")} placeholder="John Doe" className={inputCls} required />
              </Field>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Primary email" required>
                  <input type="email" value={form.email} onChange={handleInputChange("email")} placeholder="john@example.com" className={inputCls} required />
                </Field>
                <Field label="Mobile number" required>
                  <input type="tel" value={form.mobile} onChange={handleInputChange("mobile")} placeholder="+91 XXXXX XXXXX" className={inputCls} required />
                </Field>
              </div>
            </section>

            <div className="border-t border-slate-200/70" />

            <section>
              <SectionTitle
                step="2"
                title="Skills and direction"
                description="Write this the way you would explain it to someone in an interview."
              />
              <Field label="Highest qualification" required>
                <input
                  type="text"
                  value={form.highestQualification}
                  onChange={handleInputChange("highestQualification")}
                  placeholder="e.g. B.Tech Computer Engineering"
                  className={inputCls}
                  required
                />
              </Field>
              <Field label="Key skills" required>
                <input
                  type="text"
                  value={form.keySkills}
                  onChange={handleInputChange("keySkills")}
                  placeholder="React, Node.js, Cybersecurity, IAM"
                  className={inputCls}
                  required
                />
              </Field>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Current or desired role" required>
                  <input type="text" value={form.role} onChange={handleInputChange("role")} placeholder="e.g. React Developer" className={inputCls} required />
                </Field>
                <Field label="Location" required>
                  <input type="text" value={form.location} onChange={handleInputChange("location")} placeholder="e.g. Ahmedabad" className={inputCls} required />
                </Field>
                <Field label="Industry" required>
                  <select value={form.industry} onChange={handleInputChange("industry")} className={inputCls} required>
                    <option value="">Select industry</option>
                    <option>IT-ITES</option>
                    <option>BFSI</option>
                    <option>Retail</option>
                    <option>Customer Service</option>
                    <option>Human Resources</option>
                    <option>Marketing</option>
                    <option>Operations</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Experience" required>
                  <input type="text" value={form.experience} onChange={handleInputChange("experience")} placeholder="e.g. 2 years or Fresher" className={inputCls} required />
                </Field>
              </div>
            </section>

            <div className="border-t border-slate-200/70" />

            <section>
              <SectionTitle
                step="3"
                title="Account access"
                description="Create login details you will remember without making them complicated."
              />
              <Field label="Username" required>
                <input type="text" value={form.username} onChange={handleInputChange("username")} placeholder="Choose candidate handle" className={inputCls} required />
              </Field>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Password" required>
                  <input type="password" value={form.password} onChange={handleInputChange("password")} placeholder="Create access pass" className={inputCls} required />
                </Field>
                <Field label="Confirm password" required>
                  <input type="password" value={form.confirmPassword} onChange={handleInputChange("confirmPassword")} placeholder="Validate access pass" className={inputCls} required />
                </Field>
              </div>
            </section>

            {formError && (
              <p role="alert" className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                {formError}
              </p>
            )}

            <label className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 px-5 py-4 text-sm text-slate-600">
              <input type="checkbox" required className="h-4 w-4 accent-[#1349c5]" />
              I confirm the details above are accurate.
            </label>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1349c5] to-indigo-600 px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(19,73,197,0.25)] transition hover:from-[#0f3f9e] hover:to-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving your profile...
                </>
              ) : (
                "Submit registration"
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
