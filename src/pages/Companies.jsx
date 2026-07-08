import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { companies } from "../data/companies.js";


function Companies() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [industry, setIndustry] = useState("All Industries");
  const [sort, setSort] = useState("Name Asc");

  const locations = [...new Set(companies.map((company) => company.location))];
  const industries = [...new Set(companies.map((company) => company.industry))];
  const visibleCompanies = useMemo(() => {
    const term = keyword.trim().toLowerCase();
    return companies
      .filter((company) => (!term || company.name.toLowerCase().includes(term)) && (location === "All Locations" || company.location === location) && (industry === "All Industries" || company.industry === industry))
      .sort((a, b) => sort === "Name Desc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name));
  }, [industry, keyword, location, sort]);

  return (
    <main className="bg-white text-slate-950">
      <section className="bg-[#f3f0e9] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1644px]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">Companies</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: .55, delay: .1 }}
            className="mt-9 grid overflow-hidden rounded-[30px] bg-white p-2 shadow-[0_20px_40px_-30px_rgba(15,23,42,.35)] lg:h-[100px] lg:grid-cols-[1.1fr_1fr_1fr_230px] lg:rounded-full"
          >
            <label className="flex items-center gap-4 border-b border-slate-200 px-7 lg:border-b-0 lg:border-r">
              <svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
              <input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Company Name or Keyword" className="w-full bg-transparent py-4 text-sm text-slate-700 outline-none placeholder:text-slate-500 sm:text-base" />
            </label>
            <FilterSelect value={location} onChange={setLocation} options={["All Locations", ...locations]} type="location" />
            <FilterSelect value={industry} onChange={setIndustry} options={["All Industries", ...industries]} type="industry" />
            <button type="button" className="m-2 rounded-[24px] bg-[#0872ce] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#055fae] lg:rounded-full sm:text-base">Find Companies</button>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1644px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .7 }}
            transition={{ duration: .45 }}
            className="mb-10 flex items-center justify-between gap-5"
          >
            <p className="text-xl font-semibold text-slate-500 sm:text-2xl">Showing <strong className="text-slate-950">{visibleCompanies.length}</strong> companies</p>
            <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort companies" className="bg-white px-3 py-2 text-sm font-bold outline-none sm:text-base"><option>Name Asc</option><option>Name Desc</option></select>
          </motion.div>

          {visibleCompanies.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleCompanies.map((company, index) => (
                <motion.article
                  key={company.id}
                  initial={{ opacity: 0, y: 30, scale: .98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: .2 }}
                  transition={{ duration: .5, delay: (index % 4) * .07, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5 }}
                  className="group relative min-h-[320px] overflow-hidden rounded-[34px] border border-blue-200 bg-white p-9 transition-all duration-300 hover:border-[#0872ce]/45 hover:shadow-[0_25px_55px_-38px_rgba(15,23,42,.45)]"
                >
                  <motion.div
                    aria-hidden="true"
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * .1 }}
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0872ce]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[11px] font-black uppercase tracking-[.16em] text-[#0872ce]">
                      <svg className="h-4 w-4 fill-[#0872ce]" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2 9.8 4.3 6.6 4 5.8 7.1 3 8.7l1.2 3L3 14.7l2.8 1.6.8 3.1 3.2-.3L12 22l2.2-2.9 3.2.3.8-3.1 2.8-1.6-1.2-3 1.2-3-2.8-1.6-.8-3.1-3.2.3L12 2Zm-1.1 13.6-3.2-3.2 1.4-1.4 1.8 1.8 4-4 1.4 1.4-5.4 5.4Z" />
                      </svg>
                      Verified
                    </span>
                  </div>
                  <div className="relative mt-9 flex items-center gap-5">
                    <div className={`grid h-18 w-18 place-items-center rounded-[24px] text-3xl font-black text-white ${company.color}`}>{company.mark}</div>
                    <div>
                      <h2 className="text-2xl font-black tracking-[-.04em]">{company.name}</h2>
                      <p className="mt-2 text-lg text-slate-500">{company.location}</p>
                    </div>
                  </div>
                  <div className="relative mt-8 flex flex-wrap gap-3">
                    {[company.industry, `${company.jobs} jobs`].map((item) => (
                      <span key={item} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0872ce]">
                        {item}
                      </span>
                    ))}
                  </div>
                  {/* <div className="relative mt-9 border-t border-slate-100 pt-7">
                    <span className="text-lg font-bold text-[#0872ce] transition group-hover:translate-x-1">View details -&gt;</span>
                  </div> */}
                  {/* <Link to={`/companies/${company.id}`} aria-label={`View ${company.name} details`} className="absolute inset-0 rounded-[34px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0872ce]/40" /> */}
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-[30px] border border-dashed border-slate-300 bg-slate-50 py-20 text-center"><h2 className="text-xl font-black">No companies found</h2><p className="mt-2 text-sm text-slate-500">Try changing the keyword or filters.</p></div>
          )}
        </div>
      </section>
    </main>
  );
}

function FilterSelect({ value, onChange, options, type }) {
  return <label className="relative flex items-center gap-4 border-b border-slate-200 px-7 lg:border-b-0 lg:border-r"><svg className="h-5 w-5 shrink-0 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{type === "location" ? <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></> : <path d="M3 7h7l2 2h9v10H3V7Z" />}</svg><select value={value} onChange={(event) => onChange(event.target.value)} className="w-full appearance-none bg-white py-5 pr-8 text-sm outline-none sm:text-base">{options.map((option) => <option key={option}>{option}</option>)}</select><svg className="pointer-events-none absolute right-7 h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 10 5 5 5-5" /></svg></label>;
}

export default Companies;
