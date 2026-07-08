import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    title: "Talent Sourcing & Search",
    desc: "We scan and identify high-quality candidates tailored to your organization's unique culture and requirements using our pre-verified talent pools.",
    accent: "bg-blue-50 text-blue-600 border-blue-100",
    hover: "hover:border-blue-300"
  },
  {
    num: "02",
    title: "Screening & Selection",
    desc: "Rigorous multi-level testing and panel interviews to guarantee the best-fit candidates for your team reducing mis-hire risk by 80%.",
    accent: "bg-indigo-50 text-indigo-600 border-indigo-100",
    hover: "hover:border-indigo-300"
  },
  {
    num: "03",
    title: "Background Check & Verification",
    desc: "Detailed evaluation of education, work history, references, and credentials to protect your company integrity with full compliance.",
    accent: "bg-amber-50 text-amber-600 border-amber-100",
    hover: "hover:border-amber-300"
  },
  {
    num: "04",
    title: "Retention & Replacement",
    desc: "We assist with candidate onboarding and retention policies, providing immediate replacement options when required with zero cost.",
    accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    hover: "hover:border-emerald-300"
  },
  {
    num: "05",
    title: "Skilled Entry-Level Placement",
    desc: "Specialized focus on entry-level workforce for Banking, Microfinance, Insurance, Retail, and Sales and Marketing sectors across India.",
    accent: "bg-purple-50 text-purple-600 border-purple-100",
    hover: "hover:border-purple-300"
  },
  {
    num: "06",
    title: "Custom MSME Solutions",
    desc: "Scalable and affordable human resource services engineered to match the budgets and constraints of MSMEs with flexible engagement models.",
    accent: "bg-rose-50 text-rose-600 border-rose-100",
    hover: "hover:border-rose-300"
  }
];

const industries = ["Banking & Finance", "Microfinance", "Insurance", "IT & ITES", "Retail", "Sales & Marketing", "Manufacturing", "Healthcare", "MSME", "E-Commerce"];

function Services() {
  return (
    <div>
      <div className="relative overflow-hidden bg-[#f3f0e9] px-6 py-20 text-slate-950 lg:py-24">
      {/* Background Pattern */}
      <div className="hidden" />

      {/* Animated Background */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="hidden"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="hidden"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl border-l-4 border-[#1349c5] pl-6 text-left sm:pl-9">

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#1349c5]"
        >
          WHAT WE OFFER
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-.055em] md:text-7xl"
        >
          Hiring support,
          <br />
          <span className="text-[#1349c5]">without the runaround.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.2 }}
          className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
        >
          We help teams source, screen, verify, and retain capable people. You can use the full process or ask us to step in where your team needs support.
        </motion.p>
      </div>
    </div>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24">

        <div className="relative mb-16 max-w-2xl text-left">
          <span className="text-[#1349c5] text-xs font-bold uppercase tracking-widest">
            Core Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Where we can help
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-500">
            Clear, practical support at each stage of hiring. Choose what your team needs and leave the rest with us.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative flex min-h-[300px] flex-col gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 group-hover:scale-x-100 ${
                  idx === 0 ? "from-blue-500 to-cyan-400" :
                  idx === 1 ? "from-indigo-500 to-purple-500" :
                  idx === 2 ? "from-orange-400 to-amber-400" :
                  idx === 3 ? "from-emerald-500 to-teal-400" :
                  idx === 4 ? "from-violet-500 to-fuchsia-500" :
                  "from-red-500 to-violet-500"
                }`}
              />

              <div
                className={`hidden absolute -right-10 -top-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition ${
                  idx === 0 ? "bg-blue-500" :
                  idx === 1 ? "bg-purple-500" :
                  idx === 2 ? "bg-amber-400" :
                  idx === 3 ? "bg-emerald-500" :
                  idx === 4 ? "bg-violet-500" :
                  "bg-red-500"
                }`}
              />

              <div className="relative flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border font-extrabold transition-all duration-300 ${
                    idx === 0 ? "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white" :
                    idx === 1 ? "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white" :
                    idx === 2 ? "bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-500 group-hover:text-white" :
                    idx === 3 ? "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white" :
                    idx === 4 ? "bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-600 group-hover:text-white" :
                    "bg-red-50 text-red-600 border-red-100 group-hover:bg-red-600 group-hover:text-white"
                  }`}
                >
                  {svc.num}
                </div>

                <svg
                  className={`w-6 h-6 opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${
                    idx === 0 ? "text-blue-600" :
                    idx === 1 ? "text-indigo-600" :
                    idx === 2 ? "text-amber-500" :
                    idx === 3 ? "text-emerald-600" :
                    idx === 4 ? "text-violet-600" :
                    "text-red-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <h3 className="relative text-xl font-bold text-slate-900">
                {svc.title}
              </h3>

              <p className="relative text-sm text-slate-500 leading-relaxed flex-grow">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#10214c] px-6 py-20">

        <div className="relative max-w-5xl mx-auto">
          <div className="mb-12 text-left md:grid md:grid-cols-2 md:items-end">
            <div><span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
              Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
              Industries We Serve
            </h2>
            <p className="mt-5 max-w-xl text-md leading-7 text-slate-300 md:justify-self-end">We know the language, pace, and practical hiring needs of the sectors we serve.</p>
            </div>
          </div>

          <div className="grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ x: 3 }}
                className="group cursor-default border-b border-white/20 px-5 py-5 text-sm font-semibold text-white transition hover:bg-white/[.06] sm:odd:border-r lg:border-r lg:last:border-r-0"
              >
                <span className="mr-2 text-amber-400 group-hover:text-[#1349c5]">
                  ✦
                </span>
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f3f0e9] px-6 py-24">

        <div className="relative max-w-5xl mx-auto text-center space-y-7">
          <span className="text-[#1349c5] text-xs font-bold uppercase tracking-widest">
            Custom Hiring Support
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Need a Custom Talent Solution?
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Our team crafts bespoke hiring pipelines tailored to your specific needs,
            timelines, and budget.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/employers"
              className="rounded-full bg-[#1349c5] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Hire Now
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#1349c5] hover:text-[#1349c5]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
