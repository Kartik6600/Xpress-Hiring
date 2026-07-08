import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import loginProfessional from '../assets/login-professional.png';

const bannerSlides = [
  {
    tagline: "Entry Level Job Seeker's and Giver's",
    title: "Professional Network",
    description: "Bridging the gap between ambitious job seekers and forward-thinking companies in banking, retail, and IT sectors.",
    bg: "from-blue-900 via-indigo-900 to-slate-900",
    cta1: "Apply For Jobs",
    cta1Link: "/candidates",
    cta2: "Register Company",
    cta2Link: "/employers"
  }
];

const jobs = [
  {
    title: "Admin & Accounts Manager",
    company: "Atria Finance",
    logo: "AF",
    logoBg: "bg-blue-100 text-blue-700",
    location: "Ahmedabad",
    sector: "BFSI",
    salary: "₹3.5 - 5 LPA",
    type: "Full Time",
    experience: "3-5 yrs",
    mode: "Hybrid",
    posted: "2d ago",
    tags: ["Immediate Join", "Verified"]
  },
  {
    title: "Tele Caller",
    company: "Mercury Services",
    logo: "MS",
    logoBg: "bg-sky-100 text-sky-700",
    location: "Ahmedabad",
    sector: "BFSI",
    salary: "₹1.8 - 2.4 LPA",
    type: "Full Time",
    experience: "Fresher",
    mode: "Remote",
    posted: "4d ago",
    tags: ["Pre-Trained", "Verified"]
  },
  {
    title: "Team Leader",
    company: "Novus Retail",
    logo: "NR",
    logoBg: "bg-indigo-100 text-indigo-700",
    location: "Ahmedabad",
    sector: "BFSI",
    salary: "₹4 - 6 LPA",
    type: "Full Time",
    experience: "5+ yrs",
    mode: "On-site",
    posted: "1w ago",
    tags: ["Experienced", "Verified"]
  },
  {
    title: "Android Developer",
    company: "HexaTech",
    logo: "HT",
    logoBg: "bg-violet-100 text-violet-700",
    location: "Ahmedabad",
    sector: "IT-ITES",
    salary: "₹4 - 8 LPA",
    type: "Full Time",
    experience: "1-2 yrs",
    mode: "Hybrid",
    posted: "3d ago",
    tags: ["Immediate Join", "Verified"]
  },
  {
    title: "Web Developer",
    company: "PixelEdge",
    logo: "PE",
    logoBg: "bg-cyan-100 text-cyan-700",
    location: "Ahmedabad",
    sector: "IT-ITES",
    salary: "₹3 - 7 LPA",
    type: "Full Time",
    experience: "2-4 yrs",
    mode: "Remote",
    posted: "5d ago",
    tags: ["Pre-Trained", "Verified"]
  },
  {
    title: "UI / UX Designer",
    company: "Spark Creative",
    logo: "SC",
    logoBg: "bg-fuchsia-100 text-fuchsia-700",
    location: "Ahmedabad",
    sector: "IT-ITES",
    salary: "₹2.5 - 5 LPA",
    type: "Full Time",
    experience: "1-3 yrs",
    mode: "Hybrid",
    posted: "6d ago",
    tags: ["Creative", "Verified"]
  }
];

const tagStyles = {
  'Immediate Join': 'bg-amber-100 text-amber-700',
  Verified: 'bg-emerald-100 text-emerald-700',
  'Pre-Trained': 'bg-sky-100 text-sky-700',
  Experienced: 'bg-indigo-100 text-indigo-700',
  Creative: 'bg-fuchsia-100 text-fuchsia-700'
};

const jobCategories = [
  { name: 'Banking Finance', count: 18, description: 'Branch, accounts, relationship and back-office roles.', accent: 'bg-[#1349c5]', path: 'M4 10h16M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3 3 8h18l-9-5Z' },
  { name: 'Insurance', count: 12, description: 'Advisory, policy servicing and field support openings.', accent: 'bg-emerald-600', path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-4' },
  { name: 'IT & ITES', count: 24, description: 'Developer, support, design and operations positions.', accent: 'bg-indigo-600', path: 'M8 9 4 12l4 3m8-6 4 3-4 3m-3-8-2 10M4 4h16v16H4z' },
  { name: 'Retail', count: 16, description: 'Store, customer service and team supervisor jobs.', accent: 'bg-teal-600 ', path: 'M3 9h18l-2-5H5L3 9Zm2 0v11h14V9M9 20v-6h6v6' },
  { name: 'E-Commerce', count: 14, description: 'Catalog, logistics, marketplace and support roles.', accent: 'bg-sky-600', path: 'M3 4h2l2 11h10l3-7H6m2 11a1 1 0 1 0 0 .01M17 19a1 1 0 1 0 0 .01' },
  { name: 'Sales & Marketing', count: 21, description: 'Field sales, digital marketing and growth roles.', accent: 'bg-amber-500', path: 'M4 19V9m6 10V5m6 14v-7m4 7H2m3-7 5-4 5 2 5-6' },
  { name: 'Healthcare', count: 10, description: 'Front desk, coordination and healthcare support jobs.', accent: 'bg-rose-600', path: 'M12 21S3 16 3 9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7-9 12-9 12Zm0-11v6m-3-3h6' },
  { name: 'MSME', count: 19, description: 'Admin, production, operations and business support.', accent: 'bg-violet-600', path: 'M4 21V8l6-4v17m0-10 5-3v13m0-7 5-2v9M2 21h20M7 10h.01m0 4h.01m0 4h.01' },
];

const stats = [
  {
    value: "500+",
    count: 500,
    suffix: "+",
    label: "Placements",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    value: "100+",
    count: 100,
    suffix: "+",
    label: "Client Companies",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    value: "25+",
    count: 25,
    suffix: "+",
    label: "Industries Served",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    value: "6+",
    count: 6,
    suffix: "+",
    label: "Years of Excellence",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  }
];

const partnerLogos = [
  "/logo 1.png",
  "/logo 2.png",
  "/logo 3.png",
  "/logo 4.png",
  "/logo 5.png",
  "/logo 6.png"
];

const testimonials = [
  {
    quote: "I was not sent a random list of openings. The team understood the kind of work I wanted, prepared me for the conversation, and I joined within two weeks.",
    name: "Aman Sharma",
    initials: "AS",
    role: "Admin Manager",
    industry: "BFSI",
    company: "Atria Finance",
    rating: 3.5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Aman",
    companyLogo: "/logo 1.png"
  },
  {
    quote: "The shortlist was small, but every profile made sense. That saved our managers hours of screening and helped us make a decision much faster.",
    name: "Meera Patel",
    initials: "MP",
    role: "HR Partner",
    industry: "Retail",
    company: "Mercury Services",
    rating: 5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Meera",
    companyLogo: "/logo 2.png"
  },
  {
    quote: "The candidates arrived knowing what the role involved. We spent less time explaining the basics and more time helping them settle into the team.",
    name: "Rohan Mehta",
    initials: "RM",
    role: "Operations Lead",
    industry: "MSME",
    company: "Novus Retail",
    rating: 4.5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Rohan",
    companyLogo: "/logo 3.png"
  },
  {
    quote: "We always knew what stage each candidate was at. Three people joined in the same week, and the process never felt rushed or unclear.",
    name: "Sneha Iyer",
    initials: "SI",
    role: "Talent Lead",
    industry: "IT-ITES",
    company: "HexaTech",
    rating: 5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Sneha",
    companyLogo: "/logo 4.png"
  },
  {
    quote: "The candidate shortlist was excellent and the execution made our hiring cycle much smoother.",
    name: "Vikram Singh",
    initials: "VS",
    role: "Recruitment Head",
    industry: "Manufacturing",
    company: "PixelEdge",
    rating: 4,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Vikram",
    companyLogo: "/logo 5.png"
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : direction < 0 ? '-100%' : 0,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 45 : direction < 0 ? -45 : 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.6 },
      rotateY: { type: "spring", stiffness: 200, damping: 25 },
      scale: { duration: 0.5 },
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : direction > 0 ? '-100%' : 0,
    opacity: 0,
    scale: 0.9,
    rotateY: direction < 0 ? 45 : direction > 0 ? -45 : 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      rotateY: { type: "spring", stiffness: 200, damping: 25 },
      scale: { duration: 0.4 }
    }
  })
};

const childVariants = {
  enter: { opacity: 0, y: 25, scale: 0.95 },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 }
  }
};

function Home() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });
  const heroContentY = useTransform(
    scrollYProgress,
    [0, 0.16],
    [0, prefersReducedMotion ? 0 : 42],
  );
  const heroVisualY = useTransform(
    scrollYProgress,
    [0, 0.16],
    [0, prefersReducedMotion ? 0 : 80],
  );
  const [searchKeywords, setSearchKeywords] = useState('');
  const [selectedCity, setSelectedCity] = useState('All City');
  const [selectedIndustry, setSelectedIndustry] = useState('Industry');
  const [selectedExp, setSelectedExp] = useState('Experience');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState(1);
  const [showAllAdvantages, setShowAllAdvantages] = useState(false);
  const [alertMsg, setAlertMsg] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  const toggleSaveJob = (jobIndex) => {
    setSavedJobs((prev) => {
      const isSaved = prev.includes(jobIndex);
      const next = isSaved ? prev.filter((id) => id !== jobIndex) : [...prev, jobIndex];
      setAlertMsg(isSaved ? 'Job removed from saved list.' : 'Job saved to your shortlist.');
      return next;
    });
  };

  useEffect(() => {
    const duration = 1400;
    const interval = 30;
    const steps = Math.ceil(duration / interval);
    const targets = stats.map((stat) => stat.count);
    let step = 0;

    const counter = setInterval(() => {
      step += 1;
      setAnimatedStats(targets.map((target) => Math.min(target, Math.round((target * step) / steps))));
      if (step >= steps) {
        clearInterval(counter);
        setAnimatedStats(targets);
      }
    }, interval);

    return () => clearInterval(counter);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setAlertMsg(`Searching for "${searchKeywords}" in ${selectedCity} (${selectedIndustry}, ${selectedExp})...`);
  };

  const goToTestimonial = (index) => {
    setTestimonialDirection(index > activeTestimonial ? 1 : -1);
    setActiveTestimonial(index);
  };

  const previousTestimonial = () => {
    setTestimonialDirection(-1);
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setTestimonialDirection(1);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-[#1349c5]"
        style={{ scaleX: smoothScrollProgress }}
      />

    {/* 1. Reference-inspired Hero */}
    <section className="relative min-h-[720px] overflow-hidden bg-[#f3f0e9]">
      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:px-10 lg:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .65 }}
          style={{ y: heroContentY }}
          className="relative z-10 text-center lg:text-left"
        >
          <motion.p variants={childVariants} className="mb-6 text-xs font-black uppercase tracking-[.22em] text-[#1349c5]">
            Lets start your career here!
          </motion.p>
          <motion.h1 variants={childVariants} className="mx-auto max-w-2xl text-[42px] font-black leading-[1.12] tracking-[-.045em] text-slate-950 sm:text-6xl lg:mx-0">
            Looking for a career? Browse our job listings now!
          </motion.h1>
          <motion.p variants={childVariants} className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base lg:mx-0">
            Find verified roles across BFSI, retail, IT-ITES, sales, support, and operations. Our team helps you move from search to real conversations with employers.
          </motion.p>

          <motion.div variants={childVariants} className="mt-9 flex justify-center lg:justify-start">
            <Link
              to="/jobs"
              className="inline-flex min-w-[158px] items-center justify-center rounded-md bg-[#1349c5] px-8 py-4 text-xs font-black uppercase tracking-[.08em] text-white transition hover:bg-blue-800"
            >
              Browse Job
            </Link>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: heroVisualY }} className="relative z-10 mx-auto h-[430px] w-full max-w-[620px] sm:h-[580px]">
          <div className="absolute left-[16%] top-[25%] h-[250px] w-[340px] -rotate-12 rounded-[48%_52%_45%_55%] bg-[#1349c5] sm:h-[340px] sm:w-[450px]" />
          <div className="absolute right-[2%] top-[23%] h-[270px] w-[310px] rotate-6 rounded-[48%_52%_44%_56%] bg-[#10214c] sm:h-[390px] sm:w-[410px]" />
          <div className="absolute bottom-[3%] left-[26%] h-[120px] w-[310px] -rotate-6 rounded-full bg-[#1349c5] sm:h-[150px] sm:w-[390px]" />

          <div className="absolute left-[5%] top-[37%] grid grid-cols-7 gap-3 opacity-70">
            {Array.from({ length: 35 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#1349c5]" />
            ))}
          </div>

          <svg className="absolute right-[4%] top-[23%] h-32 w-48 text-white/85" viewBox="0 0 210 130" fill="none" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((line) => (
              <path
                key={line}
                d={`M12 ${22 + line * 14} C 56 ${36 + line * 8}, 104 ${8 + line * 17}, 198 ${22 + line * 13}`}
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            ))}
          </svg>

          <div className="absolute inset-x-16 bottom-0 top-0 overflow-hidden rounded-[46%_46%_42%_42%] sm:inset-x-20">
            <img
              src="/professional-transparent.png"
              alt="Professional ready for career opportunities"
              className="h-full w-full scale-100 object-cover object-top"
              alt="Professional ready for career opportunities"
            />
          </div>
        </motion.div>
      </div>
    </section>

      {/* 3. Search by Category Section */}
      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[.18em] text-[#1349c5] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Smart category matching
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-[-.045em] text-slate-900 sm:text-4xl">Search by Category</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">Pick a field you understand. Our matching signals help connect your skills with roles a recruiter can actually discuss with you.</p>
            </div>
            <Link to="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-[#1349c5] transition hover:gap-3">All Categories <span aria-hidden="true">→</span></Link>
          </div>
          <Link to="/jobs">
          <div className="relative mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jobCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ duration: .45, delay: index * .06 }}
                whileHover={{ y: -5 }}
                className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_35px_-32px_rgba(15,23,42,.45)] transition duration-300 hover:border-[#1349c5]/35 hover:shadow-[0_24px_55px_-34px_rgba(19,73,197,.55)]"
              >
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: index * .12 }}
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1349c5]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* <span className="absolute right-4 top-2 text-[42px] font-black leading-none text-[#1349c5]/[.055] transition group-hover:text-[#1349c5]/10">{String(index + 1).padStart(2, '0')}</span> */}
                <div className="relative flex items-start justify-between">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-sm ${category.accent}`}>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path strokeLinecap="round" strokeLinejoin="round" d={category.path} /></svg>
                  </div>
                  <Link
                    to={`/jobs?category=${encodeURIComponent(category.name)}`}
                    aria-label={`Browse ${category.name} jobs`}
                    className="text-[#1349c5] font-bold hover:underline"
                  >
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 transition group-hover:border-[#1349c5] group-hover:bg-[#1349c5] group-hover:text-white">↗</span>
                  </Link>
                </div>
                <div className="relative mt-7">
                  <h3 className="text-lg font-extrabold leading-tight text-slate-950 transition group-hover:text-[#1349c5]">{category.name}</h3>
                  <p className="mt-3  mb-3 min-h-[44px] text-sm leading-6 text-slate-500">{category.description}</p>
                </div>
                <div className="relative mt-auto flex flex-wrap gap-2 border-t border-slate-200 pt-5">
                  <p className="shrink-0 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-extrabold text-[#1349c5]">{category.count} open jobs</p>
                </div>
                <div className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 ${category.accent} transition-transform duration-300 group-hover:scale-x-100`} />
              </motion.div>
            ))}
          </div>
          </Link>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="relative overflow-hidden bg-[#f3f0e9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.24em] text-[#1349c5]">
                <span className="h-px w-8 bg-[#1349c5]" /> Why choose Xpress Talent
              </span>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.06] tracking-[-.05em] text-slate-950 sm:text-5xl">
                AI-assisted hiring, <span className="text-[#1349c5]">guided by people.</span>
              </h2>
            </div>
          </div>

          <div className="relative mt-14 grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: .96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: .35 }}
              transition={{ duration: .7, ease: "easeOut" }}
              className="relative mx-auto min-h-[430px] w-full max-w-[430px]"
            >
              <motion.div
                onViewportEnter={() => {
                  window.setTimeout(() => setShowAllAdvantages(true), 700);
                }}
                className="absolute left-8 right-8 top-6 h-72 rounded-[42px] bg-white shadow-[0_24px_70px_-48px_rgba(15,23,42,.85)]"
              />
              <motion.div
                initial={{ opacity: 0, x: -18, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ delay: .15, duration: .55 }}
                className="absolute left-0 top-16 w-[245px] rounded-3xl border border-blue-100 bg-white p-5 shadow-[0_18px_50px_-34px_rgba(15,23,42,.75)]"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-100 text-sm font-black text-[#1349c5]">HR</div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-950">Recruiter review</p>
                    <p className="text-xs text-slate-500">Listens before shortlisting</p>
                  </div>
                </div>
                <div className="mt-5 space-y-2">
                  <span className="block h-2 w-11/12 rounded-full bg-slate-100" />
                  <span className="block h-2 w-8/12 rounded-full bg-slate-100" />
                  <span className="block h-2 w-10/12 rounded-full bg-blue-100" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 18, rotate: 2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                viewport={{ once: true }}
                transition={{ delay: .28, duration: .55 }}
                className="absolute right-0 top-40 w-[245px] rounded-3xl border border-amber-100 bg-white p-5 shadow-[0_18px_50px_-34px_rgba(15,23,42,.75)]"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-amber-100 text-sm font-black text-amber-700">CV</div>
                  <div>
                    <p className="text-sm font-extrabold text-slate-950">Candidate fit</p>
                    <p className="text-xs text-slate-500">Skills, goals, and comfort</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Skills", "Intent", "Culture"].map((label) => (
                    <span key={label} className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600">{label}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .45, duration: .55 }}
                className="absolute bottom-7 left-8 right-8 rounded-3xl bg-[#1349c5] p-5 text-white shadow-[0_22px_55px_-30px_rgba(19,73,197,.85)]"
              >
                <p className="text-xs font-black uppercase tracking-[.18em] text-blue-100">Human decision</p>
                <p className="mt-2 text-2xl font-black tracking-[-.04em]">Right person, right role.</p>
                <p className="mt-2 text-sm leading-6 text-blue-100">AI supports the process. People make the match meaningful.</p>
              </motion.div>
            </motion.div>

            <motion.div
              layout
              className="relative"
              onViewportEnter={() => {
                window.setTimeout(() => setShowAllAdvantages(true), 700);
              }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-transparent via-[#1349c5]/30 to-transparent sm:block" />
              <div className="grid gap-8">
                {[
                  { 
                    title: 'AI-assisted Screening', 
                    desc: 'We use structured signals to quickly understand skills, experience, availability, and role relevance.',
                    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
                    tone: 'bg-blue-50 text-blue-700', number: '01'
                  },
                  { 
                    title: 'Human Shortlisting', 
                    desc: 'A recruiter checks the context behind every profile, so the shortlist feels thoughtful instead of automated.',
                    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                    tone: 'bg-indigo-50 text-indigo-700', number: '02'
                  },
                  { 
                    title: 'Clear Conversations', 
                    desc: 'Candidates and employers get practical updates from one accountable person, not a confusing black box.',
                    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                    tone: 'bg-amber-50 text-amber-700', number: '03'
                  },
                  { 
                    title: 'Fit Beyond Keywords', 
                    desc: 'We look at goals, communication, workplace expectations, and sector understanding before making an introduction.',
                    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
                    tone: 'bg-emerald-50 text-emerald-700', number: '04'
                  }
                ].map((item, i) => {
                  if (i > 0 && !showAllAdvantages) return null;

                  return (
                    <motion.article
                      key={item.title}
                      layout
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: .2 }}
                      transition={{ duration: .55, delay: showAllAdvantages ? i * .12 : 0, ease: "easeOut" }}
                      whileHover={{ x: 8 }}
                      className="group relative grid gap-4 pl-0 sm:grid-cols-[3rem_1fr] sm:pl-0"
                    >
                      <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-[#1349c5] shadow-[0_10px_30px_-20px_rgba(15,23,42,.6)] ring-1 ring-[#1349c5]/15 transition duration-300 group-hover:bg-[#1349c5] group-hover:text-white">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                      <div className="relative border-b border-slate-200 pb-7">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-black tracking-[.22em] text-[#1349c5]">{item.number}</span>
                          <motion.span
                            className="h-px flex-1 bg-[#1349c5]/25"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: .7, delay: i * .1 }}
                            style={{ transformOrigin: "left" }}
                          />
                        </div>
                        <h3 className="mt-3 text-xl font-extrabold text-slate-950 transition group-hover:text-[#1349c5]">{item.title}</h3>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{item.desc}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Dual Call-to-Action Portals Section */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-slate-100" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-[.22em] text-[#1349c5]">Where do you want to start?</span>
              <h2 className="mt-3 text-3xl font-black tracking-[-.04em] text-slate-950 sm:text-4xl">Two ways in. One helpful team.</h2>
            </div>
            {/* <p className="max-w-md text-sm leading-6 text-slate-500">No complicated forms or endless back-and-forth. Tell us what you need, and a real recruiter will take it from there.</p> */}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* For Candidates */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .55 }}
            className="group relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[32px] border border-blue-100 bg-[#eef5ff] p-7 sm:p-10"
          >
            <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border-[28px] border-white/60 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute right-8 top-8 grid h-14 w-14 rotate-3 place-items-center rounded-2xl bg-white text-2xl shadow-[0_12px_30px_-16px_rgba(19,73,197,.45)] transition-transform group-hover:-rotate-3">👋</div>
            <div className="relative max-w-md">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#1349c5] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> For candidates
              </span>
              <h3 className="mt-8 text-3xl font-black leading-tight tracking-[-.035em] text-slate-950 sm:text-4xl">Your next role should feel right, not just look right.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Share what you are good at and where you want to grow. We will help you find roles worth a conversation.</p>
            </div>
            <div className="relative mt-10 flex flex-wrap items-center gap-4">
              <Link to="/candidates" className="inline-flex items-center gap-3 rounded-full bg-[#1349c5] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-12px_rgba(19,73,197,.65)] transition hover:-translate-y-0.5 hover:bg-[#0f3e8f]">
                Create my profile <span aria-hidden="true">→</span>
              </Link>
              <span className="text-xs font-medium text-slate-500">Takes about 3 minutes</span>
            </div>
          </motion.article>

          {/* For Employers */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .55, delay: .1 }}
            className="group relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[32px] bg-[#111827] p-7 text-white sm:p-10"
          >
            <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#1349c5]/30 blur-2xl transition-transform duration-700 group-hover:scale-125" />
            <div className="absolute right-8 top-8 grid h-14 w-14 -rotate-3 place-items-center rounded-2xl border border-white/10 bg-white/10 text-2xl backdrop-blur transition-transform group-hover:rotate-3">🤝</div>
            <div className="relative max-w-md">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-3 py-1.5 text-[11px] font-bold text-blue-200">
                <span className="h-2 w-2 rounded-full bg-amber-400" /> For employers
              </span>
              <h3 className="mt-8 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Tell us who is missing from your team.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">We will listen first, screen carefully, and introduce people who fit the work—not just the keywords.</p>
            </div>
            <div className="relative mt-10 flex flex-wrap items-center gap-4">
              <Link to="/employers" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50">
                Start a hiring brief <span aria-hidden="true">→</span>
              </Link>
              <span className="text-xs font-medium text-slate-400">We usually reply within a day</span>
            </div>
          </motion.article>
          </div>
        </div>
      </section>

      {/* 5. Stats Counters Section */}
      <section className="relative overflow-hidden bg-[#f3f0e9] px-5 py-20 sm:px-8 lg:py-28">
        <div className="relative mx-auto max-w-7xl">
          <div>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[.18em] text-[#1349c5] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />Our track record</span>
              <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-.05em] text-slate-950 sm:text-5xl">Good work leaves a trail.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">These numbers are not vanity metrics. Each one represents a person who found a role, or a team that found the person it needed.</p>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                <span className="h-px w-10 bg-slate-400" /> Built one conversation at a time
              </div>
            </div>

            <div className="mt-14 grid w-full overflow-hidden rounded-2xl bg-[#10214c] shadow-[0_24px_55px_-38px_rgba(15,23,42,.75)] sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="relative flex min-h-[270px] flex-col items-center justify-center overflow-hidden border-b border-white/15 bg-[#1349c5] px-8 py-10 text-center text-white sm:border-r lg:border-b-0"
            >
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-blue-100">
                People Placed
              </p>

              <h3 className="mt-4 text-6xl font-black leading-none tracking-[-0.02em] [font-family:arial]">
                {animatedStats[0]}
                <span className="text-amber-300">+</span>
              </h3>

              <p className="mt-6 max-w-[230px] text-sm leading-6 text-blue-100">
                Careers moved forward through a real conversation.
              </p>
            </motion.div>

            {/* Remaining Cards */}
            {stats.slice(1).map((stat, index) => {
              const i = index + 1;

              const notes = [
                "companies that trust our judgement",
                "industries where we know the landscape",
                "years spent learning what good hiring takes",
              ];

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group relative flex min-h-[270px] flex-col items-center justify-center overflow-hidden border-b border-white/15 px-8 py-10 text-center transition-all duration-300 hover:bg-white/5 odd:sm:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <h3 className="text-5xl font-black tracking-[-0.05em] leading-none text-white">
                    {animatedStats[i]}
                    <span className="text-sky-400">{stat.suffix}</span>
                  </h3>

                  <h4 className="mt-6 text-2xl font-extrabold text-white">
                    {stat.label}
                  </h4>

                  <p className="mt-3 max-w-[230px] text-sm leading-6 text-slate-300">
                    {notes[index]}
                  </p>
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Carousel Section */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(19,73,197,.08),transparent_28%),radial-gradient(circle_at_82%_74%,rgba(41,196,122,.08),transparent_24%)]" />
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[.22em] text-[#1349c5]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(34,197,94,.75)]" />
            In their own words
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-[-.045em] text-slate-950 sm:text-5xl">
            The part we are proudest of.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-500">
            Real experiences from people we have worked alongside.
          </p>
        </div>

        <div className="relative mx-auto flex max-w-3xl items-center justify-center">
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="absolute bottom-1 right-[74px] z-20 hidden h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_28px_70px_-42px_rgba(15,23,42,.85)] transition hover:border-[#1349c5] hover:bg-[#1349c5] hover:text-white hover:shadow-[0_28px_70px_-42px_rgba(15,23,42,.85)] sm:grid"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="relative flex flex-1 justify-center overflow-hidden shadow-[0_28px_70px_-50px_rgba(15,23,42,.65)] lg:rounded-[18px]">
          <AnimatePresence mode="wait" custom={testimonialDirection}>
            <motion.div
              key={activeTestimonial}
              custom={testimonialDirection}
              initial={{ opacity: 0, x: testimonialDirection > 0 ? 80 : -80, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: testimonialDirection > 0 ? -80 : 80, scale: 0.96 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) nextTestimonial();
                if (info.offset.x > 70) previousTestimonial();
              }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[18px] border border-blue-100 bg-[#E0F2FE] px-8 py-16 text-center shadow-[0_28px_70px_-50px_rgba(15,23,42,.65)] sm:px-16 sm:py-20"
            >
              <motion.span
                className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#1349c5]/55 to-transparent"
                animate={{ opacity: [0.25, 1, 0.25], x: [-24, 24, -24] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-4 rounded-[14px] border border-white/65" />
              <div className="relative z-10">
                <p className="mx-auto min-h-[150px] max-w-2xl text-2xl font-medium leading-[1.45] text-[#64748B]">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="mt-10 text-center">
                  <h5 className="text-2xl font-bold text-[#1349c5]">
                    {testimonials[activeTestimonial].name}
                  </h5>

                  <p className="mt-2 text-xl font-bold text-[#4B5563]">
                    {testimonials[activeTestimonial].role}
                    {testimonials[activeTestimonial].industry
                      ? `, ${testimonials[activeTestimonial].industry}`
                      : ""}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          </div>
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute bottom-1 right-6 z-20 hidden h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_18px_40px_-22px_rgba(15,23,42,.65)] transition hover:border-[#1349c5] hover:bg-[#1349c5] hover:text-white hover:shadow-[0_22px_46px_-24px_rgba(19,73,197,.75)] sm:grid"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#1349c5] hover:bg-[#1349c5] hover:text-white sm:hidden"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#1349c5] hover:bg-[#1349c5] hover:text-white sm:hidden"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>

      {/* 7. Trusted Companies Section */}
      <section className="overflow-hidden border-t border-slate-200 bg-[#f3f0e9] px-4 py-16">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.24em]">Trusted Companies</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Trusted by 100+ Companies</h2>
          <p className="text-sm text-slate-700 max-w-2xl mx-auto mt-3">A proven partner for organisations that need fast, reliable entry-level hiring support.</p>
        </div>

        <div className="animate-company-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
              <motion.div
                key={`${logo}-${idx}`}
                whileHover={{ y: -3 }}
                className="group/logo flex h-24 w-[200px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-4 transition-all duration-100"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  className="max-h-16 max-w-full object-contain filter grayscale transition duration-300 group-hover/logo:grayscale-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerText = `Partner ${idx + 1}`;
                  }}
                />
              </motion.div>
            ))}
        </div>
      </section>

      {/* General Alert Modal */}
      {alertMsg && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl border border-slate-100">
            <h4 className="text-lg font-bold text-[#1349c5] mb-2">Notification</h4>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">{alertMsg}</p>
            <button
              onClick={() => setAlertMsg(null)}
              className="bg-[#1349c5] text-white hover:bg-blue-700 font-bold px-6 py-2 rounded-xl text-sm transition-all duration-300 hover:scale-[1.05]"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;
