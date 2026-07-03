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
     <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-20 lg:py-24">

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Animated Glow */}
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-10 right-10 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-300"
        >
          Get In Touch
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Let's Build Your{" "}
          <span className="text-amber-400">
            Perfect Team
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-300"
        >
          Have questions or need a customized hiring solution? Our recruitment
          experts are here to help you connect with the right talent quickly and
          efficiently. Let's start building your workforce today.
        </motion.p>
      </div>
    </div>

      <section className="relative bg-slate-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6"
        >
          <div className="relative h-full min-h-[700px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

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
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 p-5 shadow-xl">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1349c5] text-xl text-white shadow-lg">
                    📍
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
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1349c5] to-indigo-700 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-lg"
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
              className="lg:col-span-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-lg"
            >
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#1349c5]">
                Contact Form
              </span>

              <h3 className="mt-4 text-3xl font-extrabold text-slate-900">
                Send Us a Message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                We typically respond within 24 business hours.
              </p>

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
                        👤
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
                        📞
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
                      ✉️
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
                      📝
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
                      💬
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
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-[#1349c5] to-indigo-700 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
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

              {/* Quick Details */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    info@xpresshiring.com
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Office Hours
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Mon - Sat, 10:00 AM - 7:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-slate-400">
                    Trusted By
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    150+ Companies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ContactUs;
