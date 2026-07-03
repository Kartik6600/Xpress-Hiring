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
    { to: "/services", label: "SERVICES" },
    { to: "/login", label: "LOGIN" },
    { to: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),transparent_45%)] ${
        scrolled
          ? "bg-[#0f3a9e]/95 backdrop-blur-md shadow-xl shadow-blue-950/30"
          : "bg-[#1349c5] shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo */}
          <div className="absolute left-0">
            <Link to="/" className="flex items-center">
              <div className="bg-white rounded-xl px-3 py-1.5 shadow-md transition-all duration-300 hover:scale-105">
                <img
                  src="/logo.png.png"
                  alt="Xpress Talent Hiring"
                  className={`object-contain transition-all duration-300 ${
                    scrolled ? "h-8" : "h-10"
                  }`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </Link>
          </div>

          {/* Center Desktop Navigation */}
          <nav className="hidden lg:flex mx-auto items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-full text-[14px] font-heading font-bold tracking-wide transition-all duration-300 ${
                  isActive(link.to)
                    ? "text-blue-800 bg-blue-200 shadow-md shadow-blue-400/20"
                    : "text-blue-200 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}

                {isActive(link.to) && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-white -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="absolute right-0">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-[#0f3a9e]/95 backdrop-blur-xl border-t border-white/10 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1.5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={link.to}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 ${
                      isActive(link.to)
                        ? "bg-white text-[#1349c5] shadow-md border-l-4 border-amber-400"
                        : "text-white/85 hover:text-white hover:bg-white/10 active:scale-[0.98]"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>{link.label}</span>
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