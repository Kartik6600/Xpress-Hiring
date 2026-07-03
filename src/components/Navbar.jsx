import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT US" },
    { to: "/services", label: "OUR SERVICES" },
    { to: "/candidates", label: "CANDIDATES" },
    { to: "/employers", label: "EMPLOYERS" },
    { to: "/login", label: "LOGIN" },
    { to: "/contact", label: "CONTACT US" }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0f3a9e] shadow-2xl shadow-blue-900/40" : "bg-[#1349c5] shadow-lg"}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16 md:h-[72px]"}`}>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <div className="bg-white rounded-lg px-3 py-2 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.03]">
              <img
                src="/logo.png.png"
                alt="Xpress Talent Hiring"
                className={`object-contain transition-all duration-300 ${scrolled ? "h-9" : "h-11 md:h-12"}`}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = '<span style="font-weight:900;font-size:14px;color:#1349c5;white-space:nowrap;">XTH</span>';
                }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3 py-2 text-[13px] font-bold tracking-wider transition-all duration-200 rounded-md ${isActive(link.to)
                    ? "text-amber-400"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-400 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <motion.div animate={mobileOpen ? { rotate: 90 } : { rotate: 0 }} transition={{ duration: 0.2 }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#0f3a9e] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={link.to}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-bold tracking-wider transition-all duration-200 ${isActive(link.to)
                        ? "text-amber-400 bg-white/10"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {isActive(link.to) && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
