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
      <div className="relative bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 text-white py-24 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* Animated Background */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/25 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 right-10 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-5"
        >
          WHAT WE OFFER
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Smart Hiring
          <br />
          <span className="text-amber-400">Solutions</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-9"
        >
          End-to-end recruitment solutions designed to eliminate hiring
          bottlenecks and connect your organization with pre-vetted,
          job-ready talent.
        </motion.p>
      </div>
    </div>

      <section className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />

        <div className="relative text-center mb-20">
          <span className="text-[#1349c5] text-xs font-bold uppercase tracking-widest">
            Core Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">
            Six Pillars of Excellence
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Complete recruitment solutions designed to simplify hiring and deliver quality talent faster.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-[#1349c5] to-purple-500 mx-auto mt-5 rounded-full" />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col gap-5 overflow-hidden"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                  idx === 0 ? "from-blue-500 to-cyan-400" :
                  idx === 1 ? "from-indigo-500 to-purple-500" :
                  idx === 2 ? "from-orange-400 to-amber-400" :
                  idx === 3 ? "from-emerald-500 to-teal-400" :
                  idx === 4 ? "from-violet-500 to-fuchsia-500" :
                  "from-red-500 to-violet-500"
                }`}
              />

              <div
                className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition ${
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
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-xl border transition-all duration-300 ${
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
                  className={`w-6 h-6 transition group-hover:translate-x-1 ${
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

              <Link
                to="/contact"
                className="relative mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1349c5] group-hover:bg-[#1349c5] group-hover:text-white transition-all duration-300"
              >
                Learn More
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#1349c5] via-indigo-700 to-slate-900 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
              Industries We Serve
            </h2>
            <p className="text-blue-100 mt-4 max-w-xl mx-auto">
              We support fast-growing companies across multiple sectors with skilled, pre-vetted talent.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group bg-white/10 hover:bg-white text-white hover:text-[#1349c5] border border-white/20 hover:border-white font-semibold text-sm px-5 py-3 rounded-full transition-all cursor-default backdrop-blur-md shadow-sm hover:shadow-xl"
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

      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />

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
              className="bg-gradient-to-r from-[#1349c5] to-indigo-600 hover:from-indigo-600 hover:to-[#1349c5] text-white font-bold px-9 py-3.5 rounded-full text-sm transition-all hover:scale-105 shadow-lg"
            >
              Hire Now
            </Link>

            <Link
              to="/contact"
              className="bg-white border-2 border-slate-200 hover:border-[#1349c5] text-slate-700 hover:text-[#1349c5] font-bold px-9 py-3.5 rounded-full text-sm transition-all hover:scale-105 shadow-md"
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
