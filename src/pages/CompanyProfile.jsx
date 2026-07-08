import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { companies } from "../data/companies.js";

const roleMap = {
  BFSI: ["Financial Analyst", "Relationship Manager", "Accounts Executive"],
  "IT-ITES": ["Frontend Developer", "Technical Support Engineer", "QA Engineer"],
  Retail: ["Sales Associate", "Store Executive", "Inventory Coordinator"],
  "Customer Service": ["Customer Support Executive", "Tele Caller", "Team Leader"],
};

function CompanyProfile() {
  const { companyId } = useParams();
  const company = companies.find((item) => item.id === Number(companyId));
  const [selectedRole, setSelectedRole] = useState(null);

  if (!company) {
    return (
      <main className="grid min-h-[65vh] place-items-center bg-[#eaf3fb] px-5 text-center">
        <div>
          <h1 className="text-3xl font-black">Company not found</h1>
          <Link to="/companies" className="mt-5 inline-flex rounded-full bg-[#1349c5] px-6 py-3 text-sm font-bold text-white">
            Back to companies
          </Link>
        </div>
      </main>
    );
  }

  const roleTitles = roleMap[company.industry] || [`${company.industry} Executive`, "Operations Coordinator", "Business Associate"];
  const roles = roleTitles.map((title, index) => ({
    title,
    featuredDate: `${index + 2} days ago`,
    description: `${company.name} is hiring a ${title} in ${company.location}. This role is suited for candidates who can communicate clearly, handle practical responsibilities, and contribute to a growing ${company.industry.toLowerCase()} team.`,
  }));
  const domain = `${company.name.toLowerCase().replaceAll(" ", "")}.com`;

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#eaf3fb] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1644px]">
          <Link to="/companies" className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1349c5]/25 bg-white/75 px-4 py-2 text-xs font-bold text-[#1349c5] shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#1349c5] hover:bg-[#1349c5] hover:text-white hover:shadow-[0_14px_34px_-24px_rgba(19,73,197,.95)]">
            &lt;- Back to companies
          </Link>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className={`relative grid h-28 w-28 shrink-0 place-items-center overflow-hidden rounded-[30px] text-4xl font-black text-white shadow-lg sm:h-36 sm:w-36 sm:text-5xl ${company.color}`}>
              <span className="absolute inset-x-4 top-4 h-px bg-white/45" />
              <span className="absolute bottom-4 left-4 right-10 h-px bg-white/30" />
              {company.mark}
            </div>
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-2 py-2 text-xs font-black uppercase tracking-[.15em] text-[#1349c5] shadow-sm">
                <svg className="h-4 w-4 fill-[#1349c5]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2 9.8 4.3 6.6 4 5.8 7.1 3 8.7l1.2 3L3 14.7l2.8 1.6.8 3.1 3.2-.3L12 22l2.2-2.9 3.2.3.8-3.1 2.8-1.6-1.2-3 1.2-3-2.8-1.6-.8-3.1-3.2.3L12 2Zm-1.1 13.6-3.2-3.2 1.4-1.4 1.8 1.8 4-4 1.4 1.4-5.4 5.4Z" />
                </svg>
                Verified company profile
              </p>
              <h1 className="mt-5 text-4xl font-bold text-[#1E3A8A] tracking-[-.045em] sm:text-5xl">{company.name}</h1>
              <p className="mt-3 text-sm font-medium text-[#082F49]">{company.industry} - {company.location}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Human reviewed", `${company.jobs} open jobs`].map((item) => (
                  <span key={item} className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-[#1349c5] shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1644px] gap-12 lg:grid-cols-[1fr_380px] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#1349c5]">About {company.name}</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] text-slate-950">Build your career with a growing team.</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              {company.name} is a {company.industry.toLowerCase()} company based in {company.location}. The team values practical thinking, clear communication, and people who take ownership of meaningful work. There are currently {company.jobs} open opportunities.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Recruiter review", "A real hiring expert verifies context before sharing roles."],
                ["Candidate care", "You get practical guidance before starting a conversation."]
              ].map(([title, text]) => (
                <div key={title} className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-blue-50/50 p-5">
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1349c5]/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[#29c47a] shadow-[0_0_18px_rgba(41,196,122,.65)]" />
                  <p className="text-xs font-black uppercase tracking-[.16em] text-[#1349c5]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-400">Featured open roles</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {roles.map((role) => (
                  <button
                    key={role.title}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                  className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-[#1349c5] hover:bg-white hover:shadow-[0_18px_40px_-30px_rgba(19,73,197,.65)]"
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1349c5]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <span className="absolute -left-16 top-0 h-full w-14 skew-x-[-18deg] bg-white/65 opacity-0 blur-sm transition duration-500 group-hover:left-full group-hover:opacity-100" />
                    <span className="relative font-bold text-slate-800">{role.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-fit overflow-hidden rounded-[30px] border border-blue-100 bg-white p-7 shadow-[0_24px_70px_-48px_rgba(15,23,42,.8)] sm:p-9">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1349c5] via-[#29c47a] to-[#0872ce]" />
            <div className="mb-6 rounded-3xl bg-blue-50 p-5">
              <p className="text-[11px] font-black uppercase tracking-[.16em] text-[#1349c5]">Human profile check</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Company details are organized by matching and reviewed for candidate clarity.</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {["Scan", "Match", "Review"].map((item) => (
                  <span key={item} className="rounded-2xl bg-white px-2 py-2 text-[11px] font-black uppercase tracking-[.12em] text-[#1349c5]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-400">Company details</p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs text-slate-500">Industry</p>
                <p className="mt-1 font-bold text-slate-900">{company.industry}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="mt-1 font-bold text-slate-900">{company.location}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Open jobs</p>
                <p className="mt-1 font-bold text-slate-900">{company.jobs} positions</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Careers email</p>
                <a href={`mailto:careers@${domain}`} className="mt-1 block break-all font-bold text-[#0872ce]">careers@{domain}</a>
              </div>
            </div>
            <Link to="/jobs" className="mt-8 flex items-center justify-between rounded-full bg-[#1349c5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800">
              View open jobs <span>-&gt;</span>
            </Link>
          </motion.aside>
        </div>
      </section>

      {/* <AnimatePresence>
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/55 px-5 backdrop-blur-sm"
            onClick={() => setSelectedRole(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl rounded-[28px] bg-white p-6 shadow-[0_28px_80px_-36px_rgba(15,23,42,.9)] sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                aria-label="Close role details"
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-[#1349c5] hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>

              <p className="pr-12 text-xs font-extrabold uppercase tracking-[.2em] text-[#1349c5]">Featured role</p>
              <h3 className="mt-3 pr-12 text-3xl font-black tracking-[-.04em] text-slate-950">{selectedRole.title}</h3>

              <div className="mt-6 rounded-2xl bg-[#eaf3fb] px-5 py-4">
                <p className="text-xs font-extrabold uppercase tracking-[.16em] text-slate-500">Featured date</p>
                <p className="mt-1 font-bold text-slate-950">{selectedRole.featuredDate}</p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-extrabold uppercase tracking-[.16em] text-slate-400">Description</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{selectedRole.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </main>
  );
}

export default CompanyProfile;
