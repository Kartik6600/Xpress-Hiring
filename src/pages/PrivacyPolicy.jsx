import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const collectedDetails = [
  "Your name",
  "Your email and mailing address",
  "Your telephone number",
  "Your payment processing details",
  "Any other data Xpress Talent Hiring may require",
];

const policySections = [
  {
    title: "Confidentiality",
    text: "Xpress Talent Hiring keeps user information collected through www.xpresstalenthiring.com strictly confidential. It is not shared with external agencies or individuals.",
  },
  {
    title: "Communication",
    text: "We may keep users updated about happenings and developments through bulletins and newsletters. Users have the option not to subscribe to these updates.",
  },
  {
    title: "General browsing",
    text: "General browsing of the website is anonymous. We do not register personal information except the time, date and place of visits, and the name of the internet service provider. This information is not shared with external agencies.",
  },
  {
    title: "Internal access",
    text: "Relevant information collected through the website is handled and used only by internal and authorized officials.",
  },
  {
    title: "Third-party responsibility",
    text: "Xpress Talent Hiring is not liable for loss, damage or harm caused by misuse of personal information by a third party, including through a linked site or otherwise, when that party is not an employee of Xpress Talent Hiring.",
  },
  {
    title: "Policy updates",
    text: "Xpress Talent Hiring holds the discretion to modify the terms and conditions under this privacy policy.",
  },
  {
    title: "Content ownership",
    text: "Content published on the website, including graphics, write-ups, logos, pictures, images and software, is the property of Xpress Talent Hiring and its partners or associates. Users must seek formal permission before using this information. Misuse may make the user liable.",
  },
];

function PrivacyPolicy() {
  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-[#eaf3fb] px-5 py-16 sm:px-8 lg:py-24">
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full border border-[#1349c5]/10" />
        <div className="absolute right-0 top-0 hidden h-full w-[32%] bg-[#10214c] lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#1349c5] shadow-sm">
              Privacy Policy
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.055em] sm:text-6xl">
              Your information deserves careful handling.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              This page explains how Xpress Talent Hiring treats information shared through its website, how it is used internally, and what rights we reserve around site content and policy updates.
            </p>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative rounded-[30px] bg-white p-7 shadow-[0_24px_70px_-48px_rgba(15,23,42,.65)]">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-slate-400">At a glance</p>
            <div className="mt-5 space-y-4">
              {["Confidential user information", "Anonymous general browsing", "Authorized internal access only"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-blue-50 px-4 py-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1349c5] text-white">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[330px_1fr]">
          <aside className="h-fit rounded-[28px] bg-[#10214c] p-7 text-white lg:sticky lg:top-24">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-blue-200">Information we may ask for</p>
            <ul className="mt-6 space-y-3">
              {collectedDetails.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="grid gap-4">
            {policySections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_48px_-40px_rgba(15,23,42,.6)]"
              >
                <div className="flex gap-4">
                  <span className="text-xs font-black tracking-[.18em] text-[#1349c5]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-xl font-black tracking-[-.025em] text-slate-950">{section.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{section.text}</p>
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="mt-6 rounded-[28px] bg-[#f3f0e9] p-7">
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#1349c5]">Contact</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                C-608 Dev Auram Commercial, 100 Ft. Road, Anandnagar (Deer) Circle, Satellite, Ahmedabad - 380015 (Gujarat), India
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+917383407035" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:text-[#1349c5]">
                  +91-7383407035
                </a>
                <a href="mailto:xpresshiring@gmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:text-[#1349c5]">
                  xpresshiring@gmail.com
                </a>
              </div>
            </div>

            <Link to="/contact" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#1349c5] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800">
              Questions about privacy <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
