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
    event: "500+ placements, 100+ corporate clients across 25+ industries.",
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
  const [showAllValues, setShowAllValues] = React.useState(false);

  return (
    <div>
      <div
        className="relative grid min-h-[315px] place-items-center overflow-hidden bg-[#10214c] px-6 py-20 text-center text-white lg:min-h-[360px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16, 33, 76, 0.72), rgba(16, 33, 76, 0.72)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-black tracking-[-.035em] sm:text-5xl">
            About us
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-white sm:text-2xl">
            Apply now and take the first step in your career journey!
          </p>
        </motion.div>
      </div>

      <section className="border-y border-slate-200 bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
          {/* Enhanced Image Section with Decorative Elements */}
          <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="relative pb-10 pl-5 sm:pl-10">
            {/* Decorative background shapes */}
            <div className="absolute bottom-0 left-0 top-12 w-[82%] bg-[#10214c]" />
            
            {/* Main image with floating effect */}
            <motion.div
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              viewport={{ once:true }}
              transition={{ duration:0.7 }}
              className="relative overflow-hidden border border-slate-200 bg-white p-2 shadow-[0_20px_45px_-32px_rgba(15,23,42,.5)]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Colleagues working together around a shared table"
                className="h-[470px] w-full object-cover sm:h-[520px]"
              />
            </motion.div>
            <div className="absolute bottom-0 right-0 max-w-[240px] border-l-4 border-amber-400 bg-white px-5 py-4 shadow-md">
              <p className="text-sm font-extrabold text-slate-900">Hiring works better when people talk.</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">That has been our approach since 2019.</p>
            </div>
          </motion.div>
          
          {/* Enhanced Content Section */}
          <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.7,delay:0.1 }} className="space-y-7">
            <motion.span initial={{ opacity:0, y:-10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="text-[#1349c5] text-xs font-bold uppercase tracking-[0.3em] inline-block">Our Story</motion.span>
            
            {/* Key highlights with better structure */}
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.2 }} className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">Xpress Talent Hiring</span> started in 2019 with a straightforward idea: listen carefully before making a recommendation. We help growing teams find capable people for entry-level roles.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From the first conversation to the first day at work, we remain involved. Our experience spans <span className="font-semibold text-slate-900">BFSI, insurance, retail, sales, marketing and MSME</span> teams.
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
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-4 border-t border-slate-300 py-4 transition-colors hover:border-[#1349c5]"
                >
                  <motion.div 
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white ${item.icon_color}`}
                  >
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </motion.div>
                  <p className="text-sm font-bold text-slate-800">{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 grid gap-5 border-l-4 border-[#1349c5] pl-6 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
            <span className="text-[#1349c5] text-xs font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="mt-2 text-4xl font-extrabold tracking-[-.04em] text-slate-900">Our Core Values</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-500 md:justify-self-end">
              These values guide every stage of our hiring process, from candidate screening to client delivery.
            </p>
          </div>
          <motion.div
            className={`grid gap-5 md:grid-cols-2 ${showAllValues ? "" : "md:flex md:justify-center"}`}
            layout
            onViewportEnter={() => {
              window.setTimeout(() => setShowAllValues(true), 1200);
            }}
            viewport={{ once: true, amount: 0.35 }}
          >
            {coreValues.map((v, i) => {
              if (i > 0 && !showAllValues) return null;

              return (
              <motion.button
                key={v.title}
                layout
                type="button"
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once:true }}
                transition={{ duration: 1, delay: showAllValues ? i * 0.35 : 0, ease: "easeOut" }}
                whileHover={{ y: -4, borderColor: "#1349c5" }}
                animate={i === 0 && !showAllValues ? { y: [0, -6, 0], borderColor: ["#e2e8f0", "#1349c5", "#e2e8f0"] } : undefined}
                className={`group relative grid grid-cols-[56px_1fr] gap-5 overflow-hidden rounded-2xl border border-[#1349c5] bg-white px-5 py-8 text-left shadow-[0_16px_42px_-34px_rgba(15,23,42,.5)] transition-all duration-300 hover:border-[#1349c5] hover:bg-slate-50 hover:shadow-[0_24px_55px_-36px_rgba(19,73,197,.58)] hover:ring-1 hover:ring-[#1349c5] md:px-6 ${
                  showAllValues ? "" : "md:w-1/2"
                }`}
              >
                <span className="absolute inset-y-6 left-0 w-0.5 origin-center scale-y-0 bg-[#1349c5] transition-transform duration-300 group-hover:scale-y-100" aria-hidden="true" />
                {/* Decorative gradient overlay on hover */}
                <span className="absolute right-5 top-4 text-xs font-bold tracking-[.18em] text-slate-300">0{i + 1}</span>
                
                <motion.div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#10214c] text-white transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#1349c5]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={v.icon} /></svg>
                </motion.div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#1349c5]">{v.title}</h3>
                  <p className="max-w-sm text-sm leading-7 text-slate-600">{v.desc} <span className="font-semibold text-slate-900">{v.highlight}</span></p>
                </div>
              </motion.button>
              );
            })}
          </motion.div>
          
          {/* Trust Statement Below Values */}
          {/* <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.25 }} className="mt-16 grid overflow-hidden border border-slate-200 bg-[#f3f0e9] lg:grid-cols-[.9fr_1.6fr]">
            <div className="bg-[#10214c] p-8 text-white sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-blue-300">What the work adds up to</p>
              <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-.035em]">The numbers matter.<br />The people matter more.</h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">Every placement began with someone explaining what they needed—and someone else ready for a chance.</p>
            </div>
            <div className="grid sm:grid-cols-3">
              {[
                { stat: "500+", label: "People placed" },
                { stat: "100+", label: "Teams supported" },
                { stat: "6+", label: "Years listening" }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: idx * .08 }} className="flex min-h-40 flex-col items-center justify-center border-b border-slate-300 px-7 py-8 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <p className="text-4xl font-black tracking-[-.05em] text-[#1349c5]">{item.stat}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[.14em] text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
            <p className="hidden">
              These proven metrics demonstrate our commitment to <span className="font-semibold text-slate-900">delivering exceptional hiring solutions</span> that transform how organizations acquire and retain top talent.
            </p>
          </motion.div> */}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f3f0e9] px-6 py-20 lg:py-28">

        <div className="relative max-w-6xl mx-auto">
          <div className="mb-15 grid gap-5 border-l-4 border-[#1349c5] pl-6 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
            <span className="text-[#1349c5] text-xs font-bold uppercase tracking-widest">
              Our Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
              Company Milestones
            </h2>

            </div>
            <p className="max-w-2xl text-md leading-7 text-slate-500 md:justify-self-end">We did not grow overnight. Each step came from doing the work, learning from people, and earning the next conversation.</p>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute bottom-0 left-5 top-0 w-px origin-top bg-slate-500 md:left-8"
            />

            <div className="space-y-0">
              {[...timeline].reverse().map((item, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative flex items-start"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        delay: i * 0.12,
                      }}
                      className="absolute left-5 top-8 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#f3f0e9] bg-[#10214c] text-white md:left-8"
                    >
                      <motion.svg
                        className="h-5 w-5"
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
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="group ml-14 w-full border-b border-slate-300 px-4 py-8 text-left md:ml-20 md:grid md:grid-cols-[110px_1fr] md:gap-8"
                    >
                      <div className="flex justify-start">
                        <div
                          className="text-xl font-extrabold tracking-[.16em] text-[#1349c5]"
                        >
                          {item.year}
                        </div>
                      </div>

                      <h3 className="hidden">
                        {item.event.split(".")[0]}
                      </h3>

                      <p className="mt-3 max-w-2xl text-xl font-semibold leading-7 text-slate-700 md:mt-0">
                        {item.event}
                      </p>

                      <div className="hidden">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                          Growth
                        </span>

                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                          Trust
                        </span>

                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Hiring
                        </span>
                      </div>

                      <div className="hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.12 }}
                          className="h-full bg-[#1349c5]"
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

      <section className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-20 lg:py-28">
        {/* Background Effects */}
        <div className="hidden" />
        <div className="hidden" />

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.16, 0.32, 0.16] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="hidden"
        />

        <motion.div
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="hidden"
        />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-[#10214c] px-7 py-12 text-left text-white sm:px-12 lg:px-16 lg:py-16"
          >

            {/* Badge */}
            <span className="inline-flex border-l-2 border-amber-400 pl-3 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-300">
              Trusted Hiring Partner
            </span>

            {/* Heading */}
            <h2 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
              Good hiring begins with
              <br />
              <span className="text-blue-300">a clear conversation.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Tell us about the role, the team, and what a good hire would look like. We will listen first, then help you find the right way forward.
            </p>

            {/* Stats */}
            <p className="hidden">
              Trusted by 150+ Companies • 500+ Successful Placements • 25+ Industries
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/employers"
                  className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
                >
                  Post a Requirement

                  <svg
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold transition hover:border-white hover:bg-white/10"
                >
                  Talk to Our Team
                </Link>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>
    </div>
  );
}
export default About;

