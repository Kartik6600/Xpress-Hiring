import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllCandidates } from "../data/candidateStorage.js";

const skillMap = {
  "Financial Analyst": ["Financial reporting", "Excel", "Data analysis"],
  "Customer Support Executive": ["Customer care", "Communication", "CRM"],
  "React Developer": ["React", "JavaScript", "Responsive UI"],
  "HR Coordinator": ["Recruitment", "Onboarding", "HR operations"],
  "Sales Associate": ["Client relations", "Sales", "Negotiation"],
  "Social Media Executive": ["Content", "Social media", "Campaigns"],
  "Operations Executive": ["Operations", "Coordination", "Reporting"],
  "Relationship Manager": ["Client service", "BFSI", "Portfolio support"],
};

function CandidateProfile() {
  const { candidateId } = useParams();
  const candidates = getAllCandidates();
  const candidate = candidates.find((item) => item.id === Number(candidateId));

  if (!candidate) {
    return <main className="grid min-h-[65vh] place-items-center bg-[#f3f0e9] px-5 text-center"><div><h1 className="text-3xl font-black text-slate-950">Candidate not found</h1><Link to="/candidates" className="mt-5 inline-flex rounded-full bg-[#1349c5] px-6 py-3 text-sm font-bold text-white">Back to candidates</Link></div></main>;
  }

  const firstName = candidate.name.split(" ")[0];
  const email = candidate.email || `${candidate.name.toLowerCase().replaceAll(" ", ".")}@example.com`;

  return (
    <main className="bg-white">
      <section className="bg-[#aeb6bd] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1644px]">
          <Link to="/candidates" className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue bg-blue px-4 py-2 text-xs font-bold text-blue backdrop-blur-sm transition hover:bg-blue hover:text-slate-800"><span aria-hidden="true">←</span> Back to candidates</Link>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className={`grid h-28 w-28 shrink-0 place-items-center rounded-full ${candidate.tone} text-3xl font-black shadow-sm sm:h-36 sm:w-36 sm:text-4xl`}>{candidate.initials}</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-white/65">Candidate profile</p>
              <h1 className="mt-2 text-4xl font-black tracking-[-.045em] sm:text-5xl">{candidate.name}</h1>
              <p className="mt-3 text-sm font-medium text-white/80">{candidate.role} · {candidate.location}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1644px] gap-12 lg:grid-cols-[1fr_380px] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-extrabold uppercase tracking-[.2em] text-[#1349c5]">About {firstName}</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] text-slate-950">A little more than a resume.</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{firstName} is a {candidate.role.toLowerCase()} based in {candidate.location}, with {candidate.experience === "Fresher" ? "the energy and foundation to begin a professional career" : `${candidate.experience} of practical experience`}. They are interested in thoughtful teams where they can contribute, keep learning, and take ownership of meaningful work.</p>
            <div className="mt-9">
              <p className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-400">Key strengths</p>
              <div className="mt-4 flex flex-wrap gap-2">{(candidate.skills || skillMap[candidate.role] || [candidate.industry]).map((skill) => <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">{skill}</span>)}</div>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="h-fit rounded-[30px] bg-[#fff8ed] p-7 sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-400">Contact</p>
            <div className="mt-6 space-y-5">
              <div><p className="text-xs text-slate-500">Email</p><a href={`mailto:${email}`} className="mt-1 block break-all font-bold text-[#0872ce]">{email}</a></div>
              <div><p className="text-xs text-slate-500">Industry</p><p className="mt-1 font-bold text-slate-900">{candidate.industry}</p></div>
              <div><p className="text-xs text-slate-500">Experience</p><p className="mt-1 font-bold text-slate-900">{candidate.experience}</p></div>
              {candidate.qualification && <div><p className="text-xs text-slate-500">Qualification</p><p className="mt-1 font-bold text-slate-900">{candidate.qualification}</p></div>}
              {candidate.mobile && <div><p className="text-xs text-slate-500">Mobile</p><a href={`tel:${candidate.mobile}`} className="mt-1 block font-bold text-[#0872ce]">{candidate.mobile}</a></div>}
            </div>
            <Link to="/contact" className="mt-8 flex items-center justify-between rounded-full bg-[#1349c5] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800">Request an introduction <span>→</span></Link>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

export default CandidateProfile;
