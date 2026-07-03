import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Candidates from "./pages/Candidates.jsx";
import Employers from "./pages/Employers.jsx";
import Login from "./pages/Login.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Registration from "./pages/Registration.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="flex-grow"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8fafc] text-gray-800">
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;