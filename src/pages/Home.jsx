import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const bannerSlides = [
  {
    tagline: "Entry Level Job Seeker's and Giver's",
    title: "Professional Network",
    description: "Bridging the gap between ambitious job seekers and forward-thinking companies in banking, retail, and IT sectors.",
    bg: "from-blue-900 via-indigo-900 to-slate-900",
    cta1: "Apply For Jobs",
    cta1Link: "/candidates",
    cta2: "Find Company",
    cta2Link: "/employers"
  },
  {
    tagline: "Bridging the gap between Talent & Opportunity",
    title: "Instant Matching Portal",
    description: "Pre-screened candidates matching customized organizational requirements instantly.",
    bg: "from-indigo-950 via-blue-900 to-indigo-900",
    cta1: "Register Profile",
    cta1Link: "/candidates",
    cta2: "Post a Requirement",
    cta2Link: "/employers"
  },
  {
    tagline: "Accelerating Careers in Premium Sectors",
    title: "One-Stop Solutions",
    description: "End-to-end recruitment, sourcing, selection, and replacement solutions.",
    bg: "from-blue-950 via-blue-900 to-slate-900",
    cta1: "Our Services",
    cta1Link: "/services",
    cta2: "Contact Us",
    cta2Link: "/contact"
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
    value: "150+",
    count: 150,
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

const logoLoop = [...partnerLogos, ...partnerLogos];

const testimonials = [
  {
    quote: "Xpress Talent Sourcing helped me land my dream role in under two weeks. The pre-placement screening and support was stellar!",
    name: "Aman Sharma",
    initials: "AS",
    role: "Admin Manager",
    industry: "BFSI",
    company: "Atria Finance",
    rating: 5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Aman",
    companyLogo: "https://via.placeholder.com/96x28?text=Atria"
  },
  {
    quote: "Very reliable and pre-screened talent supply. It significantly lowered our corporate hiring costs and sourcing cycle time.",
    name: "Meera Patel",
    initials: "MP",
    role: "HR Partner",
    industry: "Retail",
    company: "Mercury Services",
    rating: 5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Meera",
    companyLogo: "https://via.placeholder.com/96x28?text=Mercury"
  },
  {
    quote: "Highly recommend for entry-level placements. The training modules candidates complete make onboarding smooth and easy.",
    name: "Rohan Mehta",
    role: "Operations Lead",
    industry: "MSME",
    company: "Novus Retail",
    rating: 5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Rohan",
    companyLogo: "https://via.placeholder.com/96x28?text=Novus"
  },
  {
    quote: "Their sourcing process is transparent and fast. We onboarded three hires in a single week with great quality.",
    name: "Sneha Iyer",
    initials: "SI",
    role: "Talent Lead",
    industry: "IT-ITES",
    company: "HexaTech",
    rating: 5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Sneha",
    companyLogo: "https://via.placeholder.com/96x28?text=HexaTech"
  },
  {
    quote: "The candidate shortlist was excellent and the execution made our hiring cycle much smoother.",
    name: "Vikram Singh",
    initials: "VS",
    role: "Recruitment Head",
    industry: "Manufacturing",
    company: "PixelEdge",
    rating: 5,
    image: "https://api.dicebear.com/6.x/adventurer/svg?seed=Vikram",
    companyLogo: "https://via.placeholder.com/96x28?text=PixelEdge"
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
  const [[slideIndex, direction], setSlide] = useState([0, 0]);
  const [searchKeywords, setSearchKeywords] = useState('');
  const [selectedCity, setSelectedCity] = useState('All City');
  const [selectedIndustry, setSelectedIndustry] = useState('Industry');
  const [selectedExp, setSelectedExp] = useState('Experience');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const paginate = (newDirection) => {
    let nextIndex = (slideIndex + newDirection) % bannerSlides.length;
    if (nextIndex < 0) nextIndex = bannerSlides.length - 1;
    setSlide([nextIndex, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  const previousTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col min-h-screen">

{/* 1. Hero Banner Slider */}
<div
  className="relative overflow-hidden text-white bg-slate-950 group min-h-[auto] lg:min-h-[620px]"
  style={{ perspective: 1200 }}
>
  {/* Animated Background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 0.9, 1.1, 1],
        x: [0, 30, -20, 15, 0],
        y: [0, -25, 40, -15, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-0 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-blue-500/20 blur-3xl"
    />

    <motion.div
      animate={{
        scale: [1, 0.8, 1.1, 0.9, 1],
        x: [0, -30, 25, -10, 0],
        y: [0, 35, -20, 25, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-10 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-indigo-500/20 blur-3xl"
    />

    <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
  </div>

  <AnimatePresence initial={false} custom={direction} mode="wait">
    <motion.div
      key={slideIndex}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className={`relative lg:absolute lg:inset-0 flex items-start lg:items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 lg:pt-0 pb-24 sm:pb-28 lg:pb-0 bg-gradient-to-br ${bannerSlides[slideIndex].bg}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.9fr] gap-8 lg:gap-12 items-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Left Content */}
        <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
          <motion.span
            variants={childVariants}
            className="block max-w-[330px] sm:max-w-none mx-auto lg:mx-0 text-amber-400 font-bold text-[10px] sm:text-xs md:text-sm leading-relaxed tracking-[0.16em] sm:tracking-[0.25em] uppercase"
          >
            {bannerSlides[slideIndex].tagline}
          </motion.span>

          <motion.h2
            variants={childVariants}
            className="max-w-4xl mx-auto lg:mx-0 text-[32px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white drop-shadow-md"
          >
            {bannerSlides[slideIndex].title}
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="text-sm sm:text-base md:text-lg text-gray-200 max-w-[340px] sm:max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            {bannerSlides[slideIndex].description}
          </motion.p>

          <motion.div
            variants={childVariants}
            className="flex flex-nowrap items-center gap-3 pt-2 w-full sm:w-auto"
          >
            <Link
              to={bannerSlides[slideIndex].cta1Link}
              className="relative flex-1 sm:flex-none min-w-0 h-14 px-6 rounded-xl
                        bg-amber-500 hover:bg-amber-600
                        text-slate-950 font-bold text-sm
                        flex items-center justify-center
                        shadow-lg shadow-amber-500/20
                        transition-all duration-300 hover:scale-105"
            >
              <span className="truncate">
                {bannerSlides[slideIndex].cta1}
              </span>
            </Link>

            <Link
              to={bannerSlides[slideIndex].cta2Link}
              className="relative flex-1 sm:flex-none min-w-0 h-14 px-6 rounded-xl
                        bg-white/5 hover:bg-white/10
                        border-2 border-white/50 hover:border-white
                        text-white font-bold text-sm
                        flex items-center justify-center
                        backdrop-blur-sm
                        transition-all duration-300 hover:scale-105"
            >
              <span className="truncate">
                {bannerSlides[slideIndex].cta2}
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={childVariants}
            className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          >
            {[
              { value: "90%", label: "Hiring success" },
              { value: "500+", label: "Placements" },
              { value: "150+", label: "Trusted companies" },
              { value: "24h", label: "Response time" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/10 border border-white/10 px-3 sm:px-4 py-4 text-center lg:text-left backdrop-blur-md"
              >
                <p className="text-xl sm:text-2xl font-bold text-white">
                  {item.value}
                </p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-slate-200/70 mt-1 leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Card */}
        <motion.div
          variants={childVariants}
          className="relative w-full max-w-md mx-auto lg:max-w-none rounded-[28px] sm:rounded-[32px] border border-white/10 bg-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),transparent_45%)] pointer-events-none" />

          <div className="relative space-y-4 sm:space-y-6">
            <div className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/10 p-4 sm:p-5">
              <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-slate-200/75">
                    Featured talent
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    Pre-screened candidates
                  </h3>
                </div>

                <div className="w-fit shrink-0 inline-flex items-center justify-center rounded-full bg-emerald-400/15 px-3 py-2 text-emerald-100 text-xs font-semibold">
                  Verified
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-slate-200">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl sm:text-3xl font-bold">24h</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-slate-200/70 mt-1">
                    Fast Matching
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl sm:text-3xl font-bold">92%</p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-slate-200/70 mt-1">
                    Success rate
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="flex items-center gap-3 text-white">
                <span className="inline-flex items-center justify-center rounded-2xl bg-white/15 p-3 shrink-0">
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
                      d="M3 7h18M3 12h18M3 17h18"
                    />
                  </svg>
                </span>

                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-200/70">
                    Matching in
                  </p>
                  <p className="text-base sm:text-lg font-bold">
                    BFSI, Retail & IT
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 text-slate-200">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs sm:text-sm font-semibold">
                    Remote friendly
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs sm:text-sm font-semibold">
                    Entry level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Left Button */}
  <button
    onClick={() => paginate(-1)}
    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center transition opacity-100 lg:opacity-0 lg:group-hover:opacity-100 focus:outline-none z-20"
    aria-label="Previous slide"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Right Button */}
  <button
    onClick={() => paginate(1)}
    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/55 text-white flex items-center justify-center transition opacity-100 lg:opacity-0 lg:group-hover:opacity-100 focus:outline-none z-20"
    aria-label="Next slide"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
    </svg>
  </button>

  {/* Dots */}
  <div className="absolute bottom-7 sm:bottom-2 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {bannerSlides.map((_, i) => (
      <button
        key={i}
        onClick={() => setSlide([i, i > slideIndex ? 1 : -1])}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          slideIndex === i ? "w-8 bg-amber-400" : "w-2 bg-white/40"
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
</div>

      {/* 2. Find The Right Job For You Section */}
      <section className="bg-white/90 backdrop-blur-md py-12 px-6 shadow-xl relative -mt-8 mx-auto max-w-6xl w-full rounded-3xl border border-slate-200/80 z-20">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight">Find The Right Job For You</h3>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            Search across cities, industries and experience levels with smart filters, instant preview and trusted employer matches.
          </p>
        </div>

        {/* Search bar row */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto items-end">
          <div className="md:col-span-2 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Enter keywords, role or company"
              value={searchKeywords}
              onChange={(e) => setSearchKeywords(e.target.value)}
              className="w-full border border-gray-200 focus:border-blue-500 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white transition-all duration-200"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.208 0 4.295.573 6.121 1.575M7 7h10M7 12h8" /></svg>
            </span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border border-gray-200 focus:border-blue-500 rounded-2xl pl-10 pr-3 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white transition-all duration-200 cursor-pointer"
            >
              <option>All City</option>
              <option>Ahmedabad</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </span>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full border border-gray-200 focus:border-blue-500 rounded-2xl pl-10 pr-3 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white transition-all duration-200 cursor-pointer"
            >
              <option>Industry</option>
              <option>BFSI</option>
              <option>IT-ITES</option>
              <option>Manufacturing</option>
              <option>Healthcare</option>
            </select>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 16h10M5 8h4" /></svg>
            </span>
            <select
              value={selectedExp}
              onChange={(e) => setSelectedExp(e.target.value)}
              className="w-full border border-gray-200 focus:border-blue-500 rounded-2xl pl-10 pr-3 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white transition-all duration-200 cursor-pointer"
            >
              <option>Experience</option>
              <option>Fresher</option>
              <option>1-2 years</option>
              <option>3-5 years</option>
              <option>5+ years</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#1349c5] text-white font-bold rounded-2xl py-3 px-6 uppercase text-xs tracking-widest hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg w-full flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            Search Now
          </button>
        </form>

        <div className="max-w-5xl mx-auto mt-5 flex flex-wrap items-center justify-center gap-3">
          {['Fresher', 'Immediate Join', 'Verified', 'Remote Ready', 'BFSI', 'IT & ITES'].map((filter) => (
            <button key={filter} className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-xs text-slate-700 font-semibold transition-all duration-200 hover:bg-[#1349c5] hover:text-white">
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Job Spotlight Section */}
      <section className="bg-[#f8fafc] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Job Spotlight</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Latest Openings</h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-3 leading-relaxed">
            Curated entry-level roles updated daily across top sectors, with transparent hiring details and quick access to top employers.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {jobs.map((job, idx) => {
            const isSaved = savedJobs.includes(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-12 w-12 rounded-2xl flex items-center justify-center font-bold ${job.logoBg}`}>
                        {job.logo}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{job.company}</p>
                        <p className="text-xs text-slate-400">{job.posted}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 leading-snug">{job.title}</h4>
                    <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job.sector}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a9 9 0 109 9" />
                        </svg>
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21h14a2 2 0 002-2V8H3v11a2 2 0 002 2z" />
                        </svg>
                        {job.mode}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-emerald-600">
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${tagStyles[tag] || 'bg-slate-100 text-slate-700'} text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-[0.2em]`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setAlertMsg(`Viewing details for ${job.title}`)}
                      className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-400 hover:text-blue-700"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => toggleSaveJob(idx)}
                      className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition-all duration-300 ${isSaved ? 'border-emerald-500 text-emerald-700 bg-emerald-50 hover:bg-emerald-100' : 'border-slate-200 text-slate-700 bg-white hover:border-blue-400 hover:text-blue-700'}`}
                    >
                      {isSaved ? 'Saved' : 'Save Job'}
                    </button>
                    <button
                      onClick={() => setAlertMsg(`Thank you for applying to the "${job.title}" role!`)}
                      className="rounded-2xl bg-[#1349c5] px-5 py-2 text-sm font-bold text-white uppercase tracking-[0.15em] shadow-lg shadow-[#1349c5]/15 transition duration-300 hover:bg-blue-700 hover:-translate-y-0.5"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setAlertMsg('Showing all open positions soon!')}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white uppercase tracking-[0.18em] shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-700 hover:scale-[1.02]"
          >
            View All Jobs
          </button>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Why Choose Us</span>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-600"></span>
              500+ Successful Placements
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              150+ Trusted Companies
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-6">A smarter hiring experience for employers and candidates</h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto mt-5 leading-relaxed">
            We combine human expertise with technology to deliver pre-verified candidates, faster shortlists, and a more transparent recruitment experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            { 
              title: 'Verified Talent', 
              desc: 'Every candidate goes through screening, assessment and',
              highlight: 'verification.',
              icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
              accent: 'from-blue-50 via-blue-50/50 to-white',
              borderColor: 'border-blue-200',
              iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600'
            },
            { 
              title: 'Faster Hiring', 
              desc: 'Shortlisted candidates delivered within',
              highlight: '24 hours for urgent roles.',
              icon: 'M13 10V3L4 14h7v7l9-11h-7z',
              accent: 'from-indigo-50 via-indigo-50/50 to-white',
              borderColor: 'border-indigo-200',
              iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600'
            },
            { 
              title: 'Transparent Process', 
              desc: 'Real-time status updates and',
              highlight: 'consistent recruiter support.',
              icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
              accent: 'from-amber-50 via-amber-50/50 to-white',
              borderColor: 'border-amber-200',
              iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600'
            },
            { 
              title: 'Trusted Network', 
              desc: 'Supported by top companies across',
              highlight: 'BFSI, IT, Retail and MSME.',
              icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zM12 6c.83 0 1.5-.67 1.5-1.5S12.83 3 12 3s-1.5.67-1.5 1.5S11.17 6 12 6zm-6 6c.83 0 1.5-.67 1.5-1.5S6.83 9 6 9s-1.5.67-1.5 1.5S5.17 12 6 12zm0 6c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm12 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z',
              accent: 'from-emerald-50 via-emerald-50/50 to-white',
              borderColor: 'border-emerald-200',
              iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600'
            }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity:0, y:30, scale: 0.98 }}
              whileInView={{ opacity:1, y:0, scale: 1 }}
              viewport={{ once:true }}
              transition={{ duration:0.5, delay:i*0.12 }}
              whileHover={{ y:-12 }}
              className={`group rounded-[28px] border-2 ${item.borderColor} p-8 bg-gradient-to-br ${item.accent} overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer relative`}
            >
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-300" />
              
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 12 }} 
                transition={{ duration: 0.3 }} 
                className={`relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[20px] ${item.iconBg} shadow-lg group-hover:shadow-2xl transition-all duration-300`}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={item.icon} />
                </svg>
              </motion.div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-1">
                {item.desc}
                <span className="font-semibold text-slate-900"> {item.highlight}</span>
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }} 
                className="mt-5 pt-4 border-t border-slate-200/50"
              >
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
      </section>

      {/* 5. Dual Call-to-Action Portals Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Candidates */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-10 shadow-2xl shadow-blue-800/20 flex flex-col justify-between min-h-[320px] group">
            <div className="absolute -left-10 top-12 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-6 top-10 h-32 w-32 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-300 font-bold">For Candidates</span>
              <h3 className="text-3xl font-extrabold tracking-tight">Are you seeking your dream career path?</h3>
              <p className="text-base text-blue-100 leading-8 font-medium">
                Submit your profile and resume details to gain instant access to verified corporate openings with high match potential.
              </p>
            </div>
            <Link
              to="/candidates"
              className="relative z-10 mt-6 inline-flex items-center gap-3 bg-white text-[#1349c5] font-bold px-7 py-3 rounded-2xl text-sm uppercase tracking-[0.15em] transition-all duration-300 shadow-xl shadow-white/20 hover:-translate-y-1 hover:bg-slate-100 hover:text-[#0f3e8f]"
            >
              Register Candidate Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* For Employers */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-10 shadow-2xl shadow-slate-900/20 flex flex-col justify-between min-h-[320px] group">
            <div className="absolute left-6 bottom-10 h-40 w-40 rounded-full bg-slate-200/10 blur-3xl" />
            <div className="absolute right-10 top-16 h-28 w-28 rounded-full bg-blue-300/10 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-amber-300 font-bold">For Corporations</span>
              <h3 className="text-3xl font-extrabold tracking-tight">Need pre-vetted entry level talent supply?</h3>
              <p className="text-base text-slate-300 leading-8 font-medium">
                Lower sourcing cycle times and human resource costs with custom pre-screened talent filters designed for rapid hiring.
              </p>
            </div>
            <Link
              to="/employers"
              className="relative z-10 mt-6 inline-flex items-center gap-3 bg-[#1349c5] text-white font-bold px-7 py-3 rounded-2xl text-sm uppercase tracking-[0.15em] transition-all duration-300 shadow-xl shadow-blue-900/30 hover:-translate-y-1 hover:bg-blue-700"
            >
              Post Sourcing Requirement
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Stats Counters Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Our Achievements</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Building trust through results</h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            Key performance metrics that reflect our success helping employers and candidates connect faster and with confidence.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-slate-50 via-white to-blue-50 border border-slate-200 rounded-3xl p-10 text-center flex flex-col justify-center items-center shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-4 bg-white rounded-3xl mb-4 shadow-sm">
                {stat.icon}
              </div>
              <span className="text-5xl md:text-6xl font-extrabold text-[#1349c5] mb-3">
                {animatedStats[i]}{stat.suffix}
              </span>
              <span className="text-sm uppercase tracking-[0.28em] text-slate-500 font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials Carousel Section */}
      <section className="bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Success Stories</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">What They Say</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full mb-12"></div>

          <div className="min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="relative max-w-3xl rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-xl"
              >
                <div className="absolute inset-x-10 -top-6 h-16 rounded-b-[32px] bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10" />
                <div className="relative space-y-8">
                  <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed max-w-2xl mx-auto">
                    "{testimonials[activeTestimonial].quote}"
                  </p>

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <h5 className="text-xl font-semibold text-slate-900">{testimonials[activeTestimonial].name}</h5>
                        <p className="text-sm text-slate-500">{testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].industry}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-3">
                      <div className="inline-flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className={`w-4 h-4 ${starIndex < testimonials[activeTestimonial].rating ? 'text-amber-400' : 'text-slate-300'}`}
                            fill={starIndex < testimonials[activeTestimonial].rating ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.538 1.118l-3.377-2.455a1 1 0 00-1.176 0l-3.377 2.455c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.098 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.966z" />
                          </svg>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                        <img src={testimonials[activeTestimonial].companyLogo} alt={testimonials[activeTestimonial].company} className="h-4 object-contain" />
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={previousTestimonial}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'w-8 bg-[#1349c5]' : 'w-2 bg-slate-200'}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 7. Trusted Companies Section */}
      <section className="bg-blue-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-[0.24em]">Trusted Companies</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3">Trusted by 150+ Companies</h2>
          <p className="text-sm text-slate-700 max-w-2xl mx-auto mt-3">A proven partner for organisations that need fast, reliable entry-level hiring support.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: '98%', label: 'Client satisfaction' },
              { value: '500+', label: 'Successful hires' },
              { value: '24h', label: 'Average turnaround' }
            ].map((metric) => (
              <div key={metric.label} className="rounded-3xl bg-white/90 border border-white/80 px-6 py-5 shadow-sm">
                <p className="text-3xl font-extrabold text-slate-900">{metric.value}</p>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}
            className="flex gap-6 items-center py-6"
          >
            {logoLoop.map((logo, idx) => (
              <motion.div
                key={`${logo}-${idx}`}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group min-w-[220px] h-28 rounded-3xl bg-white/95 border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-300 overflow-hidden"
              >
                <img
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  className="max-h-16 max-w-full object-contain filter grayscale transition duration-300 group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerText = `Partner ${idx + 1}`;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
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
