import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const userRules = [
  "Must not be false, inaccurate or misleading.",
  "Must not infringe any third party copyright, patent, trademark, trade secret, publicity or privacy rights.",
  "Must not be defamatory, unlawfully threatening or unlawfully harassing.",
  "Must not contain viruses, Trojan horses, worms, time bombs, cancel bots or other harmful routines.",
  "Must not be fraudulent.",
  "Must not violate any law, statute, ordinance or regulation.",
  "Must not create liability for us or cause us to lose services from ISPs or suppliers.",
];

const breachItems = [
  "The user breaches this Agreement or referenced documents.",
  "We are unable to verify or authenticate information provided by the user.",
  "We believe the user actions may cause legal liability for the user, other users, or us.",
];

const indemnityItems = [
  "The user breach of the terms of this Agreement.",
  "The user unauthorized or unlawful use of the site.",
  "Unauthorized or unlawful use of the site by another person using the user identity.",
];

const termsSections = [
  {
    title: "Agreement to use the website",
    text: "These terms and conditions govern the use of the Xpress Talent Hiring website, including text, information, images, and services available through www.xpresstalenthiring.com. Xpress Talent Hiring may modify these terms when needed, and changes become effective within a month of posting in this section.",
  },
  {
    title: "Who can become a user",
    text: "The services are available only to individuals, excluding minors, who are eligible for legally binding contracts under applicable law. Services are not available to temporarily or indefinitely suspended Xpress Talent Hiring users.",
  },
  {
    title: "Use of website content",
    text: "The website content includes copyrighted works proprietary to Xpress Talent Hiring or to partners and third parties. Users may download and print a single copy solely for internal non-commercial use. Content may not be altered and must retain copyright and proprietary notices. Unauthorized use may constitute copyright infringement.",
  },
  {
    title: "Personal information",
    text: "Personal information means information the user provides to us. The user is solely responsible for this information, and we act as a passive conduit for receiving and processing requests based on it.",
  },
  {
    title: "Rights to use personal information",
    text: "To enable Xpress Talent Hiring to use personal information supplied by the user, the user grants us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sublicensable right to exercise copyright and publicity rights in that information. Personal information will be used in accordance with our Privacy Policy.",
  },
  {
    title: "Information accuracy",
    text: "All user information provided to us, including information in registration forms or relevant sections, must be current, accurate, and complete. If an error or omission is discovered, we may terminate access to and use of the site by any user.",
  },
  {
    title: "Business relationship",
    text: "The user and Xpress Talent Hiring are independent contractors. This Agreement does not create an agency, partnership, joint venture, employee-employer, franchiser-franchisee or other business relationship.",
  },
  {
    title: "Intellectual property",
    text: "Xpress Talent Hiring owns worldwide rights, titles and interests in and to the site. Users may bookmark the home page, but may not create links to the site without prior written approval. All rights not expressly granted are reserved.",
  },
  {
    title: "Damage to website content",
    text: "Users must not use robots, spiders, automatic devices or manual processes to monitor or copy web pages or content without prior written permission. Users must not interfere with the proper working of the site, overload infrastructure, or copy, reproduce, alter, modify, create derivative works from, or publicly display website content without permission.",
  },
  {
    title: "Termination",
    text: "The user right to access and use the site terminates immediately upon breach of this Agreement. We may terminate this Agreement or the user right to use the site at any time, with or without cause. We may discontinue or change the site at any time.",
  },
  {
    title: "Privacy and warranty",
    text: "Xpress Talent Hiring is dedicated to protecting user privacy. The website and services are provided as is and without warranty or condition, express, implied or statutory. We and our associates disclaim implied warranties with respect to any product or service.",
  },
  {
    title: "Limit of liability",
    text: "Xpress Talent Hiring will not be responsible or liable to any website user for direct, compensatory, indirect, incidental, consequential, special, exemplary or punitive damages arising from use of content, services, errors, inaccuracies, omissions, defects, untimeliness, security breaches or other causes.",
  },
  {
    title: "Arbitration",
    text: "Any controversy or claim arising out of or relating to this Agreement or our services shall be settled by binding arbitration under commercial arbitration rules applicable to Ahmedabad. Arbitration shall be conducted at Ahmedabad, Gujarat. Interim or preliminary relief may be sought from a competent court at New Delhi, India where necessary to protect rights or property pending arbitration.",
  },
  {
    title: "General terms",
    text: "Xpress Talent Hiring does not guarantee continuous, uninterrupted or secure access to services. Site operation may be affected by factors outside our control. Headings are for reference only. Failure to act on a breach does not waive our right to act on later or similar breaches. This Agreement sets forth the entire understanding between us.",
  },
];

function TermsAndConditions() {
  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-[#f3f0e9] px-5 py-16 sm:px-8 lg:py-24">
        <div className="absolute -left-20 top-12 h-56 w-56 rounded-full border border-[#1349c5]/10" />
        <div className="absolute right-0 top-0 hidden h-full w-[30%] bg-[#10214c] lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.22em] text-[#1349c5] shadow-sm">
              Terms and Conditions
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.055em] sm:text-6xl">
              Clear rules for using our website.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              These terms explain who can use the site, how website content and personal information should be handled, and what responsibilities apply when using Xpress Talent Hiring services online.
            </p>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="rounded-[30px] bg-white p-7 shadow-[0_24px_70px_-48px_rgba(15,23,42,.65)]">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-slate-400">Important themes</p>
            <div className="mt-5 grid gap-3">
              {["Use content responsibly", "Keep user information accurate", "Respect intellectual property", "Follow lawful website use"].map((item) => (
                <div key={item} className="rounded-2xl bg-blue-50 px-4 py-3 text-sm font-bold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[340px_1fr]">
          <aside className="h-fit rounded-[28px] bg-[#10214c] p-7 text-white lg:sticky lg:top-24">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-blue-200">User information must not</p>
            <ul className="mt-6 space-y-3">
              {userRules.map((rule) => (
                <li key={rule} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  {rule}
                </li>
              ))}
            </ul>
          </aside>

          <div className="grid gap-4">
            {termsSections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
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

            <div className="grid gap-4 md:grid-cols-2">
              <InfoList title="Breach may lead to" items={breachItems} />
              <InfoList title="Indemnity covers" items={indemnityItems} />
            </div>

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

            <Link to="/privacy-policy" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#1349c5] px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800">
              Read Privacy Policy <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoList({ title, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1349c5]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TermsAndConditions;
