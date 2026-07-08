import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { jobs } from "../data/jobs.js";

function JobDetails() {
  const { jobId } = useParams();
  const job = jobs.find((item) => item.id === Number(jobId));

  if (!job) {
    return (
      <main className="grid min-h-[65vh] place-items-center bg-[#eaf3fb] px-5 text-center">
        <div>
          <h1 className="text-3xl font-black text-slate-950">Job not found</h1>
          <Link to="/jobs" className="mt-5 inline-flex rounded-full bg-[#1349c5] px-6 py-3 text-sm font-bold text-white">Back to jobs</Link>
        </div>
      </main>
    );
  }

  const domain = `${job.company.toLowerCase().replaceAll(" ", "")}.com`;
  const companyEmail = `careers@${domain}`;

  const details = [
    { label: "Job Type", value: job.type },
    { label: "Location", value: job.location },
    { label: "Salary", value: job.salary },
    { label: "Posted", value: job.posted },
    { label: "Company Email", value: companyEmail, href: `mailto:${companyEmail}` },
    { label: "Company", value: job.company },
  ];

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#eaf3fb] px-5 py-16 sm:px-8 lg:py-20">
        <motion.div
          aria-hidden="true"
          initial={{ x: "-30%", opacity: 0 }}
          animate={{ x: "120%", opacity: [0, 0.45, 0] }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
          className="absolute top-0 h-full w-1/3 rotate-12 bg-white/70 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1200px]">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
            <Link to="/jobs" className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1349c5] shadow-sm transition hover:bg-[#1349c5] hover:text-white">
            <span aria-hidden="true">&lt;-</span> Back to jobs
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.55, ease: "easeOut" }} className="grid gap-6 rounded-[32px] bg-white p-6 shadow-[0_22px_60px_-42px_rgba(19,73,197,.75)] sm:p-8 lg:grid-cols-[1fr_260px] lg:p-10">
            <div>
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold text-[#1349c5]">{job.category}</span>
              <h1 className="mt-6 text-4xl font-black tracking-[-.045em] text-slate-950 sm:text-5xl">{job.title}</h1>
              <p className="mt-4 text-base font-semibold text-slate-500">{job.company}</p>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex min-h-[180px] items-center justify-center rounded-[28px] bg-[#1349c5] text-white shadow-[0_24px_48px_-28px_rgba(19,73,197,.85)]"
            >
              <div className="grid h-24 w-24 place-items-center rounded-full border border-white/25 bg-white/15 text-3xl font-black">
                {job.mark}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-3">
          {details.map((detail, index) => (
            <DetailCard key={detail.label} {...detail} delay={index * 0.05} />
          ))}
        </div>
      </section>
    </main>
  );
}

function DetailCard({ label, value, href, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, borderColor: "#1349c5" }}
      transition={{ duration: 0.35, delay }}
      viewport={{ once: true }}
      className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_-34px_rgba(15,23,42,.5)] transition-shadow hover:shadow-[0_24px_52px_-32px_rgba(19,73,197,.55)]"
    >
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-slate-400">{label}</p>
      {href ? (
        <a href={href} className="mt-3 block break-all text-lg font-black text-[#0872ce]">{value}</a>
      ) : (
        <p className="mt-3 text-lg font-black text-slate-950">{value}</p>
      )}
    </motion.div>
  );
}

export default JobDetails;
