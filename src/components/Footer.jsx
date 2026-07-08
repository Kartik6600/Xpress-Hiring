import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#082d57] text-slate-400">
      {/* Top section */}
      <div className="mx-auto max-w-[1510px] px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:grid-cols-[420px_440px_325px] lg:justify-between lg:gap-10">
    
          {/* Contact */}
          <div className="w-full max-w-[420px] mx-auto lg:mx-0">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-[0.22em] text-center lg:text-left">
              Contact Us
            </h4>

            <ul className="space-y-5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span>
                  C 608, Dev Auram Commercial, 100 Feet Rd, Deer Circle,
                  Satellite, Ahmedabad, Gujarat 380015
                </span>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <a href="tel:+917600002069" className="hover:text-white transition">
                  +91-7600002069
                </a>
              </li>

              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href="mailto:xpresshiring@gmail.com"
                  className="hover:text-white transition"
                >
                  xpresshiring@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6 justify-center lg:justify-start">
              {[
                { icon: "f", label: "Facebook", href: "#" },
                { icon: "t", label: "Twitter", href: "#" },
                {
                  icon: "in",
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/xpress-talent-hiring-llp/",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf3fb] text-[#082D57] transition duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5"
                  aria-label={s.label}
                >
                  <span className="font-bold">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Stay Updated */}
          <div className="w-full max-w-[440px] mx-auto lg:mx-0">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-[0.22em] text-center lg:text-left">
              Stay Updated
            </h4>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4 rounded-3xl border border-slate-700 bg-slate-900/90 p-4"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-slate-950/90 border border-slate-800 rounded-3xl px-4 py-4 text-sm text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-500 hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Logo */}
          <div className="flex mt-12 w-full justify-center pt-10 lg:justify-end lg:pt-8">
            <div className="flex w-full max-w-[325px] items-center justify-center">
              {/* <div className="w-full rounded-2xl px-7 py-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,.55)]"> */}
                <img
                  src="/logo.png.png"
                  alt="Xpress Talent Hiring"
                  className="mx-auto rounded-2xl h-[80px] w-auto object-contain shadow-[0_18px_40px_-24px_rgba(0,0,0,.55)]"
                />
              {/* </div> */}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Xpress Talent Hiring LLP. All Rights
            Reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <span>|</span>

            <Link to="/terms-and-conditions" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
