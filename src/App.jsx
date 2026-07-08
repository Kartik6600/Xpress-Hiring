import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Candidates from "./pages/Candidates.jsx";
import Companies from "./pages/Companies.jsx";
import CompanyProfile from "./pages/CompanyProfile.jsx";
import Employers from "./pages/Employers.jsx";
import Login from "./pages/Login.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Registration from "./pages/Registration.jsx";
import NotFound from "./pages/NotFound.jsx";
import FindJobs from "./pages/FindJobs.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import CandidateProfile from "./pages/CandidateProfile.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
// import LoadingScreen from "./components/LoadingScreen.jsx";
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
          <Route path="/jobs" element={<FindJobs />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:companyId" element={<CompanyProfile />} />
          <Route path="/candidates/:candidateId" element={<CandidateProfile />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8fafc] text-gray-800">
      <AnimatePresence></AnimatePresence>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;





// {isLoading ? <LoadingScreen /> : null}