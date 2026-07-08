import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/jobs", label: "FIND JOBS" },
    { to: "/about", label: "ABOUT US" },
    { to: "/services", label: "SERVICES" },
    { to: "/contact", label: "CONTACT US" },
    { to: "/login", label: "LOGIN" },
  ];
  const desktopNavLinks = navLinks.filter((link) => link.to !== "/login");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 will-change-transform transition-[background-color,box-shadow,backdrop-filter] duration-500 bg-[radial-gradient(circle_at_top_right,_rgba(191, 219, 254, 1),transparent_45%)] ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_12px_32px_-18px_rgba(15,23,42,.32)]"
          : "bg-[#082D57] shadow-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[72px] items-center justify-between">
          {/* Logo */}
          <div className="flex min-w-[150px] items-center">
            <Link to="/" className="flex items-center">
              <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: .98 }} className="bg-white rounded-xl px-3 py-1.5 shadow-md transition-all duration-300">
                <img
                  src="/logo.png.png"
                  alt="Xpress Talent Hiring"
                  className="h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Center Desktop Navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-3 lg:flex">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`group relative px-4 py-2 rounded-full text-[14px] font-heading font-bold tracking-wide transition-all duration-300 ${
                  isActive(link.to)
                    ? scrolled
                      ? "text-[#1374d1] bg-blue-50 shadow-sm"
                      : "text-blue-800 bg-blue-200 shadow-md shadow-blue-400/20"
                    : scrolled
                      ? "text-slate-600 hover:text-[#1374d1] hover:bg-blue-50"
                      : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}

                {!isActive(link.to) && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-amber-400 transition-all duration-300 group-hover:w-5" />
                )}

                {isActive(link.to) && (
                  <motion.span
                    layoutId="active-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${scrolled ? "bg-blue-50" : "bg-white"}`}
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

          {/* Right Actions */}
          <div className="flex min-w-[150px] items-center justify-end">
            <Link
              to="/login"
              className={`hidden items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide transition lg:inline-flex ${
                isActive("/login")
                  ? scrolled
                    ? "bg-[#1349c5] text-white shadow-[0_14px_30px_-20px_rgba(19,73,197,.9)]"
                    : "bg-white text-[#1349c5] shadow-md"
                  : scrolled
                    ? "border border-[#1349c5]/20 bg-white text-[#1349c5] hover:-translate-y-0.5 hover:bg-[#1349c5] hover:text-white hover:shadow-[0_14px_30px_-22px_rgba(19,73,197,.9)]"
                    : "border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white hover:text-[#1349c5]"
              }`}
            >
              LOGIN
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition ${scrolled ? "text-slate-700 hover:bg-blue-50" : "text-white hover:bg-white/10"}`}
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
            className={`lg:hidden overflow-hidden backdrop-blur-xl border-t shadow-xl ${scrolled ? "bg-white/95 border-slate-200" : "bg-[#1374d1]/95 border-white/10"}`}
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
                        : scrolled
                          ? "text-slate-600 hover:text-[#1374d1] hover:bg-blue-50 active:scale-[0.98]"
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
