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
     <div className="relative overflow-hidden bg-[#f3f0e9] py-20 text-slate-950 lg:py-24">

      {/* Background Pattern */}
      <div className="hidden" />

      {/* Animated Glow */}
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="hidden"
      />

      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="hidden"
      />

      <div className="relative mx-auto max-w-6xl border-l-4 border-[#1349c5] px-6 pl-10 text-left">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1349c5] shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Get In Touch
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-.05em] md:text-6xl"
        >
          Start with a conversation.{" "}
          <span className="text-[#1349c5]">
            We are listening.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
        >
          Tell us what you are working through. Whether you are hiring, looking for a role, or simply need an answer, the right person from our team will get back to you.
        </motion.p>
        <div className="mt-7 flex flex-wrap gap-2">
          {["Human reviewed", "Priority follow-up"].map((item) => (
            <span key={item} className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#1349c5] shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

      <section className="relative bg-[#fafafa] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6"
        >
          <div className="relative h-full min-h-[700px] overflow-hidden border border-slate-200 bg-white">
            <motion.div
              aria-hidden="true"
              animate={{ y: ["-20%", "120%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-x-0 z-10 h-24 bg-gradient-to-b from-transparent via-[#1349c5]/10 to-transparent"
            />

            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3114046542296!2d72.51259801480059!3d23.01233568495824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bf8d9f0bca7%3A0x62480c49874135c5!2sDev%20Aurum%20Complex!5e0!3m2!1sen!2sin!4v1601296410916!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Office Location"
            />

              {/* Floating Card */}
              <div className="absolute bottom-5 left-5 right-5 border-l-4 border-amber-400 bg-white p-5 shadow-md">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1349c5] text-xl text-white shadow-lg">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 text-lg">
                      Xpress Talent Hiring Solutions
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Dev Aurum Complex,
                      Ahmedabad, Gujarat, India
                    </p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Dev+Aurum+Complex+Ahmedabad"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1349c5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                     Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border border-slate-200 bg-white p-8 lg:col-span-6"
            >
              <motion.div
                aria-hidden="true"
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1349c5]/50 to-transparent"
              />
              <span className="inline-flex border-l-2 border-[#1349c5] pl-3 text-xs font-bold uppercase tracking-widest text-[#1349c5]">
                Contact Form
              </span>

              <h3 className="mt-4 text-3xl font-extrabold text-slate-900">
                Send Us a Message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                We typically respond within 24 business hours.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {["Understand", "Route", "Reply"].map((item) => (
                  <span key={item} className="rounded-full bg-blue-50 px-3 py-2 text-center text-[11px] font-bold text-[#1349c5]">
                    {item}
                  </span>
                ))}
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h4 className="font-bold text-slate-800 text-lg">Message Sent!</h4>

                  <p className="text-sm text-slate-400">
                    Thank you! We will get back to you shortly.
                  </p>

                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="text-[#1349c5] text-sm font-bold hover:underline"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mt-8 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Full Name"
                        className="w-full rounded-xl border-2 border-slate-200 bg-slate-50/60 px-12 py-3 text-sm outline-none transition-all hover:border-slate-300 focus:border-[#1349c5] focus:bg-white focus:shadow-md"
                      />
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.6a2 2 0 0 1-.45 2.11L9 10.69a16 16 0 0 0 4.31 4.31l1.26-1.25a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.6.59A2 2 0 0 1 22 16.92Z" /></svg>
                      </span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Phone Number"
                        className="w-full rounded-xl border-2 border-slate-200 bg-slate-50/60 px-12 py-3 text-sm outline-none transition-all hover:border-slate-300 focus:border-[#1349c5] focus:bg-white focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="m22 6-10 7L2 6" /></svg>
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Email Address"
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50/60 px-12 py-3 text-sm outline-none transition-all hover:border-slate-300 focus:border-[#1349c5] focus:bg-white focus:shadow-md"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h10" /></svg>
                    </span>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50/60 px-12 py-3 text-sm text-slate-600 outline-none transition-all hover:border-slate-300 focus:border-[#1349c5] focus:bg-white focus:shadow-md"
                    >
                      <option value="">Select Subject</option>
                      <option>General Enquiry</option>
                      <option>Candidate Registration</option>
                      <option>Employer Partnership</option>
                      <option>Background Verification</option>
                    </select>
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-4 text-slate-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></svg>
                    </span>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your Message"
                      rows="5"
                      className="w-full resize-none rounded-xl border-2 border-slate-200 bg-slate-50/60 px-12 py-3 text-sm outline-none transition-all hover:border-slate-300 focus:border-[#1349c5] focus:bg-white focus:shadow-md"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1349c5] py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-800 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
