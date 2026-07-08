import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { jobs } from "../data/jobs.js";

const employmentTypes = ["Contract", "Full Time", "Internship", "Part Time", "Remote", "Training"];
const experienceLevels = ["Entry-Level", "Manager / Executive", "Mid-Level", "No Experience", "Senior-Level"];

function FindJobs() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [category, setCategory] = useState("All Categories");
  const [types, setTypes] = useState([]);
  const [levels, setLevels] = useState([]);
  const [sort, setSort] = useState("Newest");

  const toggle = (value, values, setter) => setter(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);

  const filteredJobs = useMemo(() => {
    const term = keyword.trim().toLowerCase();
    const result = jobs.filter((job) => (!term || `${job.title} ${job.company}`.toLowerCase().includes(term)) && (location === "All Locations" || job.location === location) && (category === "All Categories" || job.category === category) && (!types.length || types.includes(job.type)) && (!levels.length || levels.includes(job.experience)));
    return sort === "Title A-Z" ? [...result].sort((a, b) => a.title.localeCompare(b.title)) : result;
  }, [keyword, location, category, types, levels, sort]);

  const locations = [...new Set(jobs.map((job) => job.location))];
  const categories = [...new Set(jobs.map((job) => job.category))];

  return (
    <main className="bg-white text-slate-950">
      <section className="bg-[#eaf3fb] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1644px]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">Jobs</h1>
          </motion.div>
          <div className="mt-7 grid overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_16px_34px_-26px_rgba(15,23,42,.4)] lg:h-[82px] lg:grid-cols-[1.08fr_1fr_1fr_180px] lg:rounded-full">
            <label className="flex items-center gap-4 border-b border-slate-200 px-7 lg:border-b-0 lg:border-r">
              <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
              <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Job title or keyword" className="w-full bg-transparent py-3 text-sm text-slate-700 outline-none placeholder:text-slate-500" />
            </label>
            <label className="relative flex items-center gap-4 border-b border-slate-200 px-7 lg:border-b-0 lg:border-r">
              <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>
              <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full appearance-none bg-white py-3 pr-8 text-sm text-slate-700 outline-none"><option>All Locations</option>{locations.map((item) => <option key={item}>{item}</option>)}</select>
              <svg className="pointer-events-none absolute right-7 h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 10 5 5 5-5" /></svg>
            </label>
            <label className="relative flex items-center gap-4 border-b border-slate-200 px-7 lg:border-b-0">
              <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7h7l2 2h9v10H3V7Z" /></svg>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full appearance-none bg-white py-3 pr-8 text-sm text-slate-700 outline-none"><option>All Categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select>
              <svg className="pointer-events-none absolute right-7 h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 10 5 5 5-5" /></svg>
            </label>
            <button className="m-1 rounded-[20px] bg-[#0872ce] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#055fae] lg:rounded-full">Find Jobs</button>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1644px] gap-8 lg:grid-cols-[300px_1fr]">
          <aside className="relative h-fit rounded-[34px] bg-[#eaf3fb] px-7 py-8 lg:sticky lg:top-24">
            <button onClick={() => { setTypes([]); setLevels([]); }} disabled={!types.length && !levels.length} className="absolute right-6 top-6 rounded-full bg-white px-3 py-1.5 text-[10px] font-extrabold text-[#1349c5] shadow-sm transition hover:bg-[#1349c5] hover:text-white disabled:cursor-default disabled:opacity-45 disabled:hover:bg-white disabled:hover:text-[#1349c5]">Clear all</button>
            <FilterGroup title="Type of employment" items={employmentTypes} selected={types} onToggle={(item) => toggle(item, types, setTypes)} />
            <FilterGroup title="Experience level" items={experienceLevels} selected={levels} onToggle={(item) => toggle(item, levels, setLevels)} />
          </aside>

          <div>
            <div className="mb-7 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">Showing <strong className="text-slate-950">{filteredJobs.length}</strong> {filteredJobs.length === 1 ? "job" : "jobs"}</p>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 outline-none"><option>Newest</option><option>Title A-Z</option></select>
            </div>
            {filteredJobs.length ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredJobs.map((job, index) => {
                  const fitScore = 92 - (index % 5) * 3;

                  return (
                    <motion.article
                      key={job.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * .04 }}
                      whileHover={{ y: -5 }}
                      className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[26px] border border-slate-100 bg-white p-7 shadow-[0_20px_60px_-48px_rgba(15,23,42,.7)] transition-all duration-300 hover:border-[#1349c5]/25 hover:shadow-[0_26px_70px_-44px_rgba(19,73,197,.55)]"
                    >
                      <motion.div
                        aria-hidden="true"
                        animate={{ x: ["-120%", "120%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * .1 }}
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1349c5]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                      <div className="flex items-center gap-4">
                        <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-black text-white ${job.color}`}>
                          {job.mark}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">{job.location}</p>
                          <h4 className="text-xl font-black tracking-[-.04em] text-slate-950">{job.company}</h4>
                        </div>
                      </div>

                      <div className="mt-5 border-t border-slate-200 pt-8">
                        <Link to={`/jobs/${job.id}`} className="text-2xl font-normal leading-tight tracking-[-.04em] text-slate-950 transition hover:text-[#1349c5]">
                          {job.title}
                        </Link>
                        <p className="mt-5 text-sm leading-7 text-slate-500">
                          A recruiter-reviewed {job.category.toLowerCase()} opening for candidates with {job.experience.toLowerCase()} experience. Smart matching checks fit before you apply.
                        </p>
                      </div>

                      <div className="mt-auto border-t border-slate-200 flex items-end justify-between gap-5 pt-8">
                        <div className="space-y-3 text-slate-500">
                          <p className="flex items-center gap-3 text-sm font-semibold">
                            <svg className="h-5 w-5 text-[#1349c5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                              <path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
                            </svg>
                            {job.type}
                          </p>
                          <p className="flex items-center gap-3 text-sm font-semibold">
                            <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-50 text-sm font-black leading-none text-[#1349c5]">
                              ₹
                            </span>
                            {job.salary}
                          </p>
                        </div>
                        <Link to="/registration" className="rounded-lg bg-[#1349c5] px-4 py-4 text-sm font-black uppercase tracking-[.08em] text-white transition hover:bg-blue-800">
                          Apply Now
                        </Link>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : <div className="rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-6 py-20 text-center"><p className="text-xl font-extrabold text-slate-900">No exact match yet.</p><p className="mt-2 text-sm text-slate-500">Try removing a filter or using a broader search term.</p></div>}
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterGroup({ title, items, selected, onToggle }) {
  return <div className="mb-8 last:mb-0"><h3 className="pr-20 text-base font-extrabold capitalize text-slate-950">{title}</h3><div className="mt-5 space-y-4">{items.map((item) => <label key={item} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700"><input type="checkbox" checked={selected.includes(item)} onChange={() => onToggle(item)} className="h-5 w-5 shrink-0 cursor-pointer rounded-md accent-[#1349c5]" /><span>{item}</span><span className="ml-auto grid h-6 min-w-6 place-items-center rounded-full bg-white px-1.5 text-[10px] font-bold text-slate-500">{jobs.filter((job) => job.type === item || job.experience === item).length}</span></label>)}</div></div>;
}

export default FindJobs;
