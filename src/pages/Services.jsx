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
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
        <motion.div animate={{ scale:[1,1.2,1], x:[0,50,0] }} transition={{ duration:12,repeat:Infinity }} className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity:0,y:-20 }} animate={{ opacity:1,y:0 }} className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 inline-block">What We Offer</motion.span>
          <motion.h1 initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.1 }} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Our <span className="text-amber-400">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:0.8 }} transition={{ delay:0.2 }} className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end recruitment solutions designed to eliminate hiring bottlenecks and supply pre-vetted talent to your organization.
          </motion.p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-[#1349c5] text-xs font-bold uppercase tracking-widest">Core Offerings</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Six Pillars of Excellence</h2>
          <div className="w-12 h-1 bg-[#1349c5] mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity:0,y:30 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.5,delay:idx*0.08 }}
              whileHover={{ y:-6,scale:1.02 }}
              className={`bg-white border-2 ${svc.hover} border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-5`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 ${svc.accent} rounded-xl flex items-center justify-center font-extrabold text-xl border`}>{svc.num}</div>
                <svg className={`w-6 h-6 ${svc.accent.split(" ")[1]}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-grow">{svc.desc}</p>
              <Link to="/contact" className="text-[#1349c5] text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1">
                Learn More
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#1349c5] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Coverage</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind, i) => (
              <motion.span
                key={i}
                initial={{ opacity:0,scale:0.8 }}
                whileInView={{ opacity:1,scale:1 }}
                viewport={{ once:true }}
                transition={{ duration:0.3,delay:i*0.05 }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-5 py-2.5 rounded-full transition-all cursor-default"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">Need a Custom Talent Solution?</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Our team crafts bespoke hiring pipelines tailored to your specific needs, timelines, and budget.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/employers" className="bg-[#1349c5] hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl text-sm transition-all hover:scale-105 shadow-md">Hire Now</Link>
            <Link to="/contact" className="border-2 border-slate-300 hover:border-[#1349c5] text-slate-700 hover:text-[#1349c5] font-bold px-8 py-3 rounded-xl text-sm transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
