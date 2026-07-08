import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <main className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-[#f3f0e9] px-5 py-20 text-center">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[240px] font-black leading-none tracking-[-.1em] text-[#1349c5]/[.05]" aria-hidden="true">404</div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative max-w-xl">
        <span className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#1349c5]">Page not found</span>
        <h1 className="mt-6 text-5xl font-black tracking-[-.055em] text-slate-950 sm:text-6xl">This path led nowhere.</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-600">The page may have moved, or the address might be incomplete. Let’s get you back to the useful part of the site.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="rounded-full bg-[#1349c5] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-800">Back to home</Link>
          <Link to="/contact" className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#1349c5] hover:text-[#1349c5]">Contact us</Link>
        </div>
      </motion.div>
    </main>
  );
}

export default NotFound;
