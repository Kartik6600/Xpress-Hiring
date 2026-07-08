import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllCandidates } from "../data/candidateStorage.js";

function Candidates() {
  const routeLocation = useLocation();
  const candidates = useMemo(() => getAllCandidates(), []);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [industry, setIndustry] = useState("All Industries");
  const [sort, setSort] = useState("Name A–Z");

  const locations = [...new Set(candidates.map((candidate) => candidate.location))];
  const industries = [...new Set(candidates.map((candidate) => candidate.industry))];
  const visibleCandidates = useMemo(() => {
    const term = keyword.trim().toLowerCase();
    const result = candidates.filter((candidate) => (!term || `${candidate.name} ${candidate.role}`.toLowerCase().includes(term)) && (location === "All Locations" || candidate.location === location) && (industry === "All Industries" || candidate.industry === industry));
    return [...result].sort((a, b) => sort === "Name Z–A" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
  }, [candidates, keyword, location, industry, sort]);

  return (
    <main className="bg-white text-slate-950">
      <section className="bg-[#eaf3fb] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1644px]">
          {routeLocation.state?.registrationComplete && <div role="status" className="mb-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">Registration complete — your profile is now listed.</div>}
          <h1 className="text-4xl font-black tracking-[-.055em] text-slate-950 sm:text-5xl">Candidates</h1>
          <p className="mt-3 text-base text-slate-500 sm:text-lg">Meet capable people who are ready for their next chapter.</p>

          <div className="mt-7 grid overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_16px_34px_-26px_rgba(15,23,42,.4)] lg:h-[82px] lg:grid-cols-[1.08fr_1fr_1fr_180px] lg:rounded-full">
            <label className="flex items-center gap-4 border-b border-slate-200 px-7 lg:border-b-0 lg:border-r">
              <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
              <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Candidate name or skill" className="w-full bg-transparent py-4 text-sm text-slate-700 outline-none placeholder:text-slate-500 sm:text-base" />
            </label>
            <SelectField value={location} onChange={setLocation} options={["All Locations", ...locations]} icon="location" />
            <SelectField value={industry} onChange={setIndustry} options={["All Industries", ...industries]} icon="folder" last />
            <button className="m-1 rounded-[22px] bg-[#0872ce] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#055fae] lg:rounded-full">Find Candidates</button>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1644px]">
          <div className="mb-9 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div></div>
            <label className="flex items-center gap-2 text-xs text-slate-400">Sort by <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 outline-none"><option>Name A–Z</option><option>Name Z–A</option></select></label>
          </div>

          {visibleCandidates.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleCandidates.map((candidate, index) => (
                <motion.article key={candidate.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .05 }} whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 transition-shadow hover:shadow-[0_22px_50px_-32px_rgba(19,73,197,.55)]">
                  <span className="absolute right-5 top-3 text-5xl font-black text-slate-900/[.035]">{String(index + 1).padStart(2, "0")}</span>
                  <div className={`grid h-20 w-20 place-items-center rounded-full ${candidate.tone} text-xl font-black text-white shadow-sm`}>{candidate.initials}</div>
                  <h2 className="mt-6 text-xl font-extrabold tracking-[-.02em] text-slate-950">{candidate.name}</h2>
                  <p className="mt-1 text-sm font-medium text-[#1349c5]">{candidate.role}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-500"><span className="rounded-full bg-slate-100 px-3 py-1.5">{candidate.location}</span><span className="rounded-full bg-slate-100 px-3 py-1.5">{candidate.experience}</span></div>
                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5"><span className="text-xs font-bold text-slate-500">{candidate.industry}</span><Link to={`/candidates/${candidate.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#0872ce] transition group-hover:gap-3">View profile <span>→</span></Link></div>
                  <div className="absolute inset-x-7 bottom-0 h-1 origin-left scale-x-0 rounded-t-full bg-[#0872ce] transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-20 text-center"><h2 className="text-xl font-extrabold text-slate-900">No exact match yet.</h2><p className="mt-2 text-sm text-slate-500">Try another name, location, or industry.</p></div>
          )}
        </div>
      </section>
    </main>
  );
}

function SelectField({ value, onChange, options, icon, last = false }) {
  return <label className={`relative flex items-center gap-4 border-b border-slate-200 px-7 lg:border-b-0 ${last ? "" : "lg:border-r"}`}>{icon === "location" ? <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg> : <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7h7l2 2h9v10H3V7Z" /></svg>}<select value={value} onChange={(event) => onChange(event.target.value)} className="w-full appearance-none bg-white py-4 pr-8 text-sm text-slate-700 outline-none sm:text-base">{options.map((option) => <option key={option}>{option}</option>)}</select><svg className="pointer-events-none absolute right-7 h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 10 5 5 5-5" /></svg></label>;
}

export default Candidates;
