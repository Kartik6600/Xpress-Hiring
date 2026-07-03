import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const values = [
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Speed and Efficiency",
    desc: "Rapid talent sourcing with pre-screened databases to cut hiring time by 60%."
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title2: "Verified Quality",
    desc2: "Every candidate undergoes multi-layer verification including background checks."
  }
];

const timeline = [
  {
    year: "2019",
    event: "Founded in Ahmedabad with a vision to solve entry-level hiring gaps.",
    icon: "M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z M6 18c0-3.3 2.7-6 6-6s6 2.7 6 6",
  },
  {
    year: "2020",
    event: "Expanded to serve 50+ corporate clients in BFSI and retail sectors.",
    icon: "M7 7h10M7 11h8M7 15h6M6 18V6h12v12H6z",
  },
  {
    year: "2022",
    event: "Crossed 300+ placements. Launched background verification services.",
    icon: "M12 8v4l3 3M3 12a9 9 0 1118 0 9 9 0 01-18 0z",
  },
  {
    year: "2024",
    event: "500+ placements, 150+ corporate clients across 25+ industries.",
    icon: "M5 13l4 4L19 7",
  }
];

const coreValues = [
  {
    title: "Speed & Efficiency",
    desc: "Rapid talent sourcing with pre-screened databases to",
    highlight: "cut hiring time by 60%.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    accent: "from-blue-50 via-blue-50/50 to-white",
    borderColor: "border-blue-200",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconColor: "text-white"
  },
  {
    title: "Verified Quality",
    desc: "Multi-layer verification including background checks with",
    highlight: "100% accuracy guarantee.",
    icon: "M5 13l4 4L19 7",
    accent: "from-indigo-50 via-indigo-50/50 to-white",
    borderColor: "border-indigo-200",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    iconColor: "text-white"
  },
  {
    title: "People First",
    desc: "Human-centric approach ensuring",
    highlight: "cultural fit and long-term retention.",
    icon: "M12 12a4 4 0 110-8 4 4 0 010 8zm-6 4a6 6 0 0112 0v4H6v-4z",
    accent: "from-amber-50 via-amber-50/50 to-white",
    borderColor: "border-amber-200",
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    iconColor: "text-white"
  },
  {
    title: "Industry Reach",
    desc: "Spanning",
    highlight: "25+ industries across BFSI, IT, Retail, and more.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6",
    accent: "from-emerald-50 via-emerald-50/50 to-white",
    borderColor: "border-emerald-200",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    iconColor: "text-white"
  }
];

function About() {
  return (
    <div>
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-24 px-6 overflow-hidden">
        {/* Enhanced background with mesh gradient effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Animated background shapes */}
        <motion.div animate={{ scale: [1,1.15,1], opacity: [0.15,0.25,0.15] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-8 left-10 w-28 h-28 rounded-full bg-white/10 blur-3xl" />
        <motion.div animate={{ scale: [1,1.12,1], opacity: [0.16,0.28,0.16] }} transition={{ duration: 9, repeat: Infinity }} className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <motion.div animate={{ y: [0, -18, 0], opacity: [0.22, 0.4, 0.22] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl" />
        
        {/* New animated accent shapes for depth */}
        <motion.div animate={{ x: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-amber-400/10 blur-2xl" />
        <motion.div animate={{ y: [0, 30, 0], opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-indigo-400/5 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-center">
            {/* Left content - Centered */}
            <motion.div initial={{ opacity:0,x:-40 }} animate={{ opacity:1,x:0 }} transition={{ duration:0.7 }} className="space-y-8 max-w-2xl w-full">
              <motion.span initial={{ opacity:0,y:-20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }} className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] inline-block">Who We Are</motion.span>
              
              <motion.h1 initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.6,delay:0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                About Xpress<br /><span className="text-amber-400">Talent Hiring</span>
              </motion.h1>
              
              <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.7,delay:0.2 }} className="text-gray-200 max-w-2xl text-lg leading-relaxed">
                Incorporated in 2019, we help organizations recruit, screen, and retain high-potential entry-level workforce across India.
              </motion.p>
              
              {/* Feature badges with icons */}
              <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }} className="flex flex-wrap gap-3 pt-2">
                {[
                  { text: 'Pre-screened talent', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
                  { text: 'Rapid hiring support', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                  { text: '150+ trusted clients', icon: 'M12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' }
                ].map((item) => (
                  <motion.div
                    key={item.text}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-3 hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:border-amber-400/50"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                      <span className="text-xs uppercase tracking-[0.24em] text-slate-100 font-medium">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-4 pt-4"
              >
                <Link
                  to="/services"
                  className="flex-1 inline-flex items-center pl-5 pr-5 justify-center rounded-2xl bg-amber-500 h-14 px-8 text-sm font-bold text-slate-900 shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                >
                  Explore Our Services
                </Link>

                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center rounded-2xl border-2 border-white/30 h-14 px-8 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/10 hover:border-amber-400 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Enhanced Image Section with Decorative Elements */}
          <motion.div initial={{ opacity:0,x:-40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-100 via-indigo-50 to-slate-100 rounded-[40px] -z-10" />
            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-200/20 blur-3xl -z-10" />
            <motion.div animate={{ x: [-15, 15, -15] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-indigo-200/20 blur-3xl -z-10" />
            
            {/* Main image with floating effect */}
            <motion.div
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              viewport={{ once:true }}
              transition={{ duration:0.7 }}
              className="relative rounded-[32px] overflow-hidden"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-[32px] border-2 border-white/30 shadow-2xl object-cover w-full h-[520px] sm:h-[500px] lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent rounded-[32px]" />
            </motion.div>
            
            {/* Enhanced Statistics with Glass Effect and Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="
                absolute left-1/2 bottom-6 w-[88%] -translate-x-1/2
                grid grid-cols-2 gap-4
                max-[420px]:gap-3
              "
            >
              {[
                { label: "Placements", value: "500", suffix: "+" },
                { label: "Clients", value: "150", suffix: "+" },
                { label: "Industries", value: "25", suffix: "+" },
                { label: "Years", value: "6", suffix: "+" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5, scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="
                    rounded-2xl bg-white/95 backdrop-blur-md
                    border border-white/50 shadow-xl
                    px-5 py-4
                    max-[420px]:px-4 max-[420px]:py-3
                  "
                >
                  <p className="text-3xl max-[420px]:text-2xl font-extrabold text-blue-600">
                    {item.value}{item.suffix}
                  </p>
                  <p className="mt-2 text-[12px] max-[420px]:text-[10px] uppercase tracking-[0.28em] text-slate-600 font-bold">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Enhanced Content Section */}
          <motion.div initial={{ opacity:0,x:40 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,delay:0.1 }} className="space-y-8">
            <motion.span initial={{ opacity:0, y:-10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="text-[#1349c5] text-xs font-bold uppercase tracking-[0.3em] inline-block">Our Story</motion.span>
            
            <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }} className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              One-Stop Solutions for<br /><span className="text-[#1349c5]">Talent Acquisition</span>
            </motion.h2>
            
            {/* Key highlights with better structure */}
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.2 }} className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Xpress Talent Hiring LLP (XTH-LLP)</span> was incorporated in 2019 to deliver <span className="font-semibold text-[#1349c5]">end-to-end talent sourcing, screening, selection, recruitment, verification and retention support</span> for entry-level roles.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We work closely with employers across <span className="font-semibold text-slate-900">BFSI, Microfinance, Insurance, Retail, Sales, Marketing and MSME</span> sectors to make hiring faster, more reliable, and cost-effective.
              </p>
            </motion.div>
            
            {/* Enhanced Feature Cards with distinct icons and hover animations */}
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.3 }} className="grid gap-4 sm:grid-cols-2 pt-2">
              {[
                { 
                  icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', 
                  title: 'Pre-screened candidates',
                  color: 'from-blue-50 to-blue-100',
                  icon_color: 'text-blue-600'
                },
                { 
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z', 
                  title: 'Rapid selection',
                  color: 'from-amber-50 to-amber-100',
                  icon_color: 'text-amber-600'
                },
                { 
                  icon: 'M9 12l2 2 4-4', 
                  title: 'Quality verified',
                  color: 'from-emerald-50 to-emerald-100',
                  icon_color: 'text-emerald-600'
                },
                { 
                  icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', 
                  title: 'Industry expertise',
                  color: 'from-indigo-50 to-indigo-100',
                  icon_color: 'text-indigo-600'
                }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`group rounded-2xl border-2 border-slate-200 bg-gradient-to-br ${item.color} p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-slate-300 cursor-pointer`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 ${item.icon_color} mb-4 shadow-md group-hover:shadow-lg transition-all`}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon} />
                    </svg>
                  </motion.div>
                  <p className="font-bold text-slate-900 text-lg group-hover:text-slate-950">{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-nowrap items-center justify-between gap-4 pt-8"
            >
              <Link
                to="/services"
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1349c5] text-white font-bold h-16 shadow-xl hover:bg-blue-700 transition-all"
              >
                Explore Services
                <span className="text-xl">→</span>
              </Link>

              <Link
                to="/contact"
                className="flex-1 inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-300 bg-white text-slate-800 font-bold h-16 shadow-md hover:border-[#1349c5] hover:text-[#1349c5] transition-all"
              >
                Get In Touch
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#1349c5] text-xs font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-slate-500 mt-4 text-sm leading-relaxed">
              These values guide every stage of our hiring process, from candidate screening to client delivery.
            </p>
            <div className="w-12 h-1 bg-[#1349c5] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, i) => (
              <motion.div key={i} initial={{ opacity:0,y:30, scale: 0.98 }} whileInView={{ opacity:1,y:0, scale: 1 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.12 }} whileHover={{ y:-12 }} className={`group rounded-[28px] border-2 ${v.borderColor} p-8 bg-gradient-to-br ${v.accent} overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer relative`}>
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-300" />
                
                <motion.div whileHover={{ scale: 1.15, rotate: 12 }} transition={{ duration: 0.3 }} className={`relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[20px] ${v.iconBg} shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                  <svg className={`w-8 h-8 ${v.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32"  ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={v.icon} /></svg>
                </motion.div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-1">
                  {v.desc}
                  <span className="font-semibold text-slate-900">{v.highlight}</span>
                </p>
                
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }} className="mt-5 pt-4 border-t border-slate-200/50">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Trust Statement Below Values */}
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.5 }} className="mt-16 pt-12 border-t border-slate-200">
            <div className="grid grid-cols-3 gap-8 md:gap-12">
              {[
                { stat: "500+", label: "Successful Placements" },
                { stat: "150+", label: "Trusted Companies" },
                { stat: "6+", label: "Years of Excellence" }
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }} className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-[#1349c5]">{item.stat}</p>
                  <p className="text-xs md:text-sm uppercase tracking-widest text-slate-600 mt-2 font-semibold">{item.label}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-slate-600 mt-8 text-sm leading-relaxed max-w-2xl mx-auto">
              These proven metrics demonstrate our commitment to <span className="font-semibold text-slate-900">delivering exceptional hiring solutions</span> that transform how organizations acquire and retain top talent.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(#1349c510_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#1349c5] text-xs font-bold uppercase tracking-widest">
              Our Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
              Company Milestones
            </h2>

            <p className="max-w-2xl mx-auto text-slate-500 mt-4 text-sm leading-relaxed">
              A creative timeline of how Xpress Talent Hiring has grown, served clients,
              and built trust across industries.
            </p>

            <div className="w-16 h-1 bg-[#1349c5] mx-auto mt-5 rounded-full" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-6 md:left-1/2 top-0 h-full w-[4px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-600 via-indigo-600 to-amber-500"
            />

            <div>
              {timeline.map((item, i) => {
                const isEven = i % 2 === 0;
                const colors = [
                  "from-blue-600 to-indigo-600",
                  "from-emerald-500 to-teal-600",
                  "from-amber-500 to-orange-600",
                  "from-rose-500 to-pink-600",
                ];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.65, delay: i * 0.12 }}
                    className={`relative flex items-center ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 220, delay: i * 0.15 }}
                      className={`absolute left-6 md:left-1/2 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl bg-gradient-to-br ${
                        colors[i % colors.length]
                      } text-white shadow-xl shadow-blue-500/30`}
                    >
                      <motion.svg
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="h-7 w-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.4"
                          d={item.icon}
                        />
                      </motion.svg>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -10, scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className={`group ml-20 md:ml-0 w-full md:w-[44%] rounded-[30px] border border-white/60 bg-white/80 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20 ${
                        isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                      }`}
                    >
                      <div
                        className={`inline-flex rounded-full bg-gradient-to-r ${
                          colors[i % colors.length]
                        } px-5 py-2 text-sm font-extrabold tracking-widest text-white shadow-lg`}
                      >
                        {item.year}
                      </div>

                      <h3 className="mt-5 text-xl md:text-2xl font-extrabold text-slate-900">
                        {item.event.split(".")[0]}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.event}
                      </p>

                      <div
                        className={`mt-6 flex gap-2 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                          Growth
                        </span>
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                          Trust
                        </span>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                          Hiring
                        </span>
                      </div>

                      <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.15 }}
                          className={`h-full bg-gradient-to-r ${
                            colors[i % colors.length]
                          }`}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f3ea8] via-[#1349c5] to-indigo-800 text-white py-28 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:24px_24px]" />

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.16, 0.32, 0.16] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl"
        />

        <div className="relative max-w-6xl mx-auto grid gap-14 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-100 backdrop-blur-md">
              Trusted Hiring Partner
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Ready to Transform <br />
              <span className="text-amber-400">Your Hiring?</span>
            </h2>

            <p className="text-blue-100 max-w-2xl text-base md:text-lg leading-relaxed">
              Partner with Xpress Talent Hiring and experience precision-matched,
              pre-vetted talent backed by proven recruitment success.
            </p>

            <p className="text-sm font-semibold text-white/90">
              Trusted by 150+ Companies • 500+ Successful Placements • 25+ Industries
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.07, y: -4 }}>
                <Link
                  to="/employers"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-amber-500 px-10 py-4 text-base font-extrabold text-slate-950 shadow-2xl shadow-amber-500/40 transition duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Post a Requirement
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.07, y: -4 }}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center rounded-3xl border-2 border-white/40 bg-white/15 px-10 py-4 text-base font-extrabold text-white backdrop-blur-md transition duration-300 hover:border-amber-400 hover:bg-white/25 hover:shadow-xl"
                >
                  Talk to Our Team
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid gap-5"
          >
            {[
              {
                title: "Successful Placements",
                value: "500+",
                icon: "M5 13l4 4L19 7",
              },
              {
                title: "Trusted Clients",
                value: "150+",
                icon: "M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a4 4 0 100-8 4 4 0 000 8z",
              },
              {
                title: "Industries Served",
                value: "25+",
                icon: "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="group rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-white/15"
              >
                <div className="flex items-center gap-5">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-amber-400 shadow-lg"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d={item.icon} />
                    </svg>
                  </motion.div>

                  <div>
                    <p className="text-4xl font-extrabold text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-widest text-blue-100 font-semibold">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default About;
