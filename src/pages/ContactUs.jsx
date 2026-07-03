import React, { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    title: "Our Office",
    detail: "C 608, Dev Auram Commercial, 100 Feet Rd, Deer Circle, Satellite, Ahmedabad, Gujarat 380015",
    sub: "Mon - Sat: 9:00 AM - 7:00 PM",
    href: "https://maps.google.com",
    linkLabel: "Get Directions",
    bg: "bg-blue-50",
    text: "text-blue-600"
  },
  {
    title: "Call Us",
    detail: "+91-7600002069",
    sub: "Available for quick enquiries",
    href: "tel:+917600002069",
    linkLabel: "Call Now",
    bg: "bg-amber-50",
    text: "text-amber-600"
  },
  {
    title: "Email Us",
    detail: "xpresshiring@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:xpresshiring@gmail.com",
    linkLabel: "Send Email",
    bg: "bg-emerald-50",
    text: "text-emerald-600"
  }
];

function ContactUs() {
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", subject: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1200);
  };

  return (
    <div>
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
        <motion.div animate={{ x:[0,-60,0], y:[0,40,0] }} transition={{ duration:15,repeat:Infinity }} className="absolute top-10 right-10 w-72 h-72 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity:0,y:-20 }} animate={{ opacity:1,y:0 }} className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] mb-4 inline-block">Get In Touch</motion.span>
          <motion.h1 initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.1 }} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Contact <span className="text-amber-400">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:0.8 }} transition={{ delay:0.2 }} className="mt-6 text-gray-300 max-w-xl mx-auto leading-relaxed">
            Have a question or need a tailored hiring solution? Our team is here to help you.
          </motion.p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, i) => (
            <motion.div key={i} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }} whileHover={{ y:-4 }} className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center gap-4">
              <div className={`w-14 h-14 ${info.bg} ${info.text} rounded-2xl flex items-center justify-center`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {i === 0 && <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></>}
                  {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>}
                  {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>}
                </svg>
              </div>
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">{info.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{info.detail}</p>
              <p className="text-xs text-slate-400">{info.sub}</p>
              <a href={info.href} className={`${info.text} text-xs font-bold uppercase tracking-wider hover:underline flex items-center gap-1`}>
                {info.linkLabel}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
              </a>
            </motion.div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3114046542296!2d72.51259801480059!3d23.01233568495824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bf8d9f0bca7%3A0x62480c49874135c5!2sDev%20Aurum%20Complex!5e0!3m2!1sen!2sin!4v1601296410916!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border:0, minHeight:"420px" }} allowFullScreen loading="lazy" title="Office Location"
            />
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Send Us a Message</h3>
            <p className="text-sm text-slate-400 mb-7">Our team will respond within 24 business hours.</p>

            {success ? (
              <motion.div initial={{ opacity:0,scale:0.9 }} animate={{ opacity:1,scale:1 }} className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h4 className="font-bold text-slate-800 text-lg">Message Sent!</h4>
                <p className="text-sm text-slate-400">Thank you! We will get back to you shortly.</p>
                <button onClick={() => { setSuccess(false); setFormData({ fullName:"",email:"",phone:"",subject:"",message:"" }); }} className="text-[#1349c5] text-sm font-bold hover:underline">Send Another</button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required value={formData.fullName} onChange={(e) => setFormData({...formData,fullName:e.target.value})} placeholder="Full Name" className="border-2 border-slate-200 focus:border-[#1349c5] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/50 hover:border-slate-300 hover:shadow-sm" />
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData,phone:e.target.value})} placeholder="Phone Number" className="border-2 border-slate-200 focus:border-[#1349c5] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/50 hover:border-slate-300 hover:shadow-sm" />
                </div>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData,email:e.target.value})} placeholder="Email Address" className="w-full border-2 border-slate-200 focus:border-[#1349c5] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/50 hover:border-slate-300 hover:shadow-sm" />
                <select value={formData.subject} onChange={(e) => setFormData({...formData,subject:e.target.value})} className="w-full border-2 border-slate-200 focus:border-[#1349c5] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/50 text-slate-600 hover:border-slate-300 hover:shadow-sm">
                  <option value="">Select Subject</option>
                  <option>General Enquiry</option>
                  <option>Candidate Registration</option>
                  <option>Employer Partnership</option>
                  <option>Background Verification</option>
                </select>
                <textarea required value={formData.message} onChange={(e) => setFormData({...formData,message:e.target.value})} placeholder="Your Message" rows="4" className="w-full border-2 border-slate-200 focus:border-[#1349c5] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 bg-slate-50/50 resize-none hover:border-slate-300 hover:shadow-sm" />
                <motion.button type="submit" whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }} disabled={loading} className="w-full bg-[#1349c5] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  {loading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  ) : "Send Message"}
                </motion.button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
