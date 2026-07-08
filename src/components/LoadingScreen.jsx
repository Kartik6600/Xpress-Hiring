import { motion } from "framer-motion";

const nodes = [
  { x: "24%", y: "36%", delay: 0 },
  { x: "50%", y: "24%", delay: 0.24 },
  { x: "76%", y: "38%", delay: 0.48 },
  { x: "36%", y: "70%", delay: 0.72 },
  { x: "66%", y: "68%", delay: 0.96 },
];

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#f3f0e9]"
      role="status"
      aria-label="Loading Xpress Talent Hiring"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(19,73,197,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(19,73,197,.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <motion.div
        animate={{ y: ["-20%", "120%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-28 bg-gradient-to-b from-transparent via-[#1349c5]/8 to-transparent"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,73,197,.14),transparent_38%),linear-gradient(180deg,rgba(243,240,233,.35),#f3f0e9_88%)]" />

      <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden="true">
        <motion.path
          d="M 140 280 C 320 180, 450 360, 620 260 S 940 220, 1120 320"
          fill="none"
          stroke="url(#loaderLineA)"
          strokeWidth="1.5"
          strokeDasharray="8 20"
          animate={{ strokeDashoffset: [0, -120] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="loaderLineA" x1="0" x2="1">
            <stop stopColor="#1349c5" stopOpacity="0" />
            <stop offset="0.5" stopColor="#1349c5" />
            <stop offset="1" stopColor="#1349c5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((node, index) => (
        <motion.span
          key={index}
          animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut",
          }}
          className="absolute h-2 w-2 rounded-full bg-[#1349c5] shadow-[0_0_18px_rgba(19,73,197,.35)]"
          style={{ left: node.x, top: node.y }}
        />
      ))}

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ y: 22, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative grid h-44 w-44 place-items-center sm:h-52 sm:w-52"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-[#1349c5]/10 border-t-[#1349c5]/45"
          />
          <motion.div
            animate={{ scale: [0.94, 1.04, 0.94], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-12 rounded-full bg-[#1349c5]/10 blur-xl"
          />
          <div className="relative rounded-[28px] border border-white bg-white/95 p-5 shadow-[0_24px_70px_-42px_rgba(15,23,42,.85)] backdrop-blur">
            <img
              src="/logo.png.png"
              alt="Xpress Talent Hiring"
              className="h-20 w-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.6 }}
          className="mt-3 max-w-xl text-3xl font-black leading-tight text-slate-950 sm:text-5xl"
        >
          Finding people who fit.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55 }}
          className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base"
        >
          Smart hiring support, guided by real human judgment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {["Smart search", "Human review", "Right match"].map((label, index) => (
            <motion.span
              key={label}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: index * 0.28,
                ease: "easeInOut",
              }}
              className="rounded-full border border-[#1349c5]/10 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1349c5]"
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-8 h-2 w-full max-w-xs overflow-hidden rounded-full bg-white shadow-inner">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#1349c5] via-blue-400 to-amber-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
