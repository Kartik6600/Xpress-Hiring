import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* About Us */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 uppercase tracking-[0.22em]">About Us</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Xpress Talent Hiring LLP (XTH-LLP) was incorporated in 2019 with an idea to provide one-stop solutions for talent search, screening, selection, recruitment, background checks, retention and replacement of qualified, trained and skilled entry-level workforce.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 uppercase tracking-[0.22em]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>C 608, Dev Auram Commercial, 100 Feet Rd, Deer Circle, Satellite, Ahmedabad, Gujarat 380015</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+917600002069" className="hover:text-white transition">+91-7600002069</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:xpresshiring@gmail.com" className="hover:text-white transition">xpresshiring@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 uppercase tracking-[0.22em]">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/candidates', label: 'Candidates' },
                { to: '/employers', label: 'Employers' },
                { to: '/login', label: 'Login' },
                { to: '/contact', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-200">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5 uppercase tracking-[0.22em]">Stay Updated</h4>
            <p className="text-sm mb-5 text-slate-400">
              Get timely hiring insights, candidate updates, and recruitment tips straight to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 rounded-3xl border border-slate-700 bg-slate-900/90 p-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-slate-950/90 border border-slate-800 rounded-3xl px-4 py-4 text-sm text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-500 hover:-translate-y-0.5">
                Subscribe
              </button>
            </form>

            <div className="flex gap-3 mt-6">
              {[
                { icon: 'f', label: 'Facebook', href: '#' },
                { icon: 't', label: 'Twitter', href: '#' },
                { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/company/xpress-talent-hiring-llp/' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white"
                  aria-label={s.label}
                >
                  <span className="text-sm font-bold">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Xpress Talent Hiring LLP. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span className="text-slate-600">|</span>
            <Link to="/candidates" className="hover:text-white transition">Candidates</Link>
            <span className="text-slate-600">|</span>
            <Link to="/employers" className="hover:text-white transition">Employers</Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="http://xpresstalenthiring.com/privacy-policy" target="_blank" rel="noreferrer" className="hover:text-white transition">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="http://xpresstalenthiring.com/termsandcondition" target="_blank" rel="noreferrer" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
