import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  { to: "/uk-services", label: "UK Services" },
  { to: "/us-services", label: "USA Services" },
  { to: "/uae-services", label: "UAE Services" },
  { to: "/pakistan-services", label: "Pakistan Services" },
  { to: "/legal-contract-drafting", label: "Legal Contract Drafting" },
] as const;

const calculators = [
  { to: "/calculators/uk", label: "UK Calculators" },
  { to: "/calculators/usa", label: "USA Calculators" },
  { to: "/calculators/uae", label: "UAE Calculators" },
  { to: "/calculators/pakistan", label: "Pakistan Calculators" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [svcMobileOpen, setSvcMobileOpen] = useState(false);
  const [calcMobileOpen, setCalcMobileOpen] = useState(false);
  let closeTimer: ReturnType<typeof setTimeout> | undefined;
  let calcTimer: ReturnType<typeof setTimeout> | undefined;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-[2px] bg-gold-500 z-[60]" />
      <header
        className={`fixed top-[2px] inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md border-b border-gold-500/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/advaq-logo.jpg" alt="ADVAQ Logo" className="w-9 h-9 rounded-lg border border-gold-500/40 object-cover group-hover:border-gold-500 transition-colors" />
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl text-white tracking-tight">
                ADVAQ
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 group-hover:scale-150 transition-transform" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="nav-link text-[14px] tracking-wide" activeOptions={{ exact: true }}>
              Home
            </Link>

            <Link to="/about" className="nav-link text-[14px] tracking-wide">
              About
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => { if (closeTimer) clearTimeout(closeTimer); setSvcOpen(true); }}
              onMouseLeave={() => { closeTimer = setTimeout(() => setSvcOpen(false), 150); }}
            >
              <button className="nav-link text-[14px] tracking-wide inline-flex items-center gap-1">
                Services <ChevronDown size={14} className={`transition-transform ${svcOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-56 transition-all duration-200 ${
                  svcOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-navy-900/98 backdrop-blur-md border border-white/10 shadow-2xl py-2">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-4 py-3 text-[13px] text-white/80 border-l-2 border-transparent hover:border-gold-500 hover:bg-navy-800 hover:text-gold-500 transition-all"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CALCULATORS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => { if (calcTimer) clearTimeout(calcTimer); setCalcOpen(true); }}
              onMouseLeave={() => { calcTimer = setTimeout(() => setCalcOpen(false), 150); }}
            >
              <button className="nav-link text-[14px] tracking-wide inline-flex items-center gap-1">
                Calculators <ChevronDown size={14} className={`transition-transform ${calcOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 transition-all duration-200 ${
                  calcOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-navy-900/98 backdrop-blur-md border border-white/10 shadow-2xl py-2">
                  {calculators.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block px-4 py-3 text-[13px] text-white/80 border-l-2 border-transparent hover:border-gold-500 hover:bg-navy-800 hover:text-gold-500 transition-all"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/blog" className="nav-link text-[14px] tracking-wide">
              Blog
            </Link>
            <Link to="/contact" className="nav-link text-[14px] tracking-wide">
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-gold !px-6 !py-3 text-[12px]">
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-navy-900/95 backdrop-blur-md ${
            open ? "max-h-[820px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-4 border-t border-white/5">
            <Link to="/" onClick={() => setOpen(false)} className="text-white/80 hover:text-gold-500 text-base py-2">
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className="text-white/80 hover:text-gold-500 text-base py-2">
              About
            </Link>
            <button
              type="button"
              onClick={() => setSvcMobileOpen((v) => !v)}
              className="flex items-center justify-between text-white/80 hover:text-gold-500 text-base py-2"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${svcMobileOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${svcMobileOpen ? "max-h-80" : "max-h-0"}`}>
              <div className="pl-4 flex flex-col gap-2 border-l border-gold-500/30">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-gold-500 text-sm py-1.5"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCalcMobileOpen((v) => !v)}
              className="flex items-center justify-between text-white/80 hover:text-gold-500 text-base py-2"
            >
              Calculators
              <ChevronDown size={16} className={`transition-transform ${calcMobileOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${calcMobileOpen ? "max-h-80" : "max-h-0"}`}>
              <div className="pl-4 flex flex-col gap-2 border-l border-gold-500/30">
                {calculators.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-gold-500 text-sm py-1.5"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/blog" onClick={() => setOpen(false)} className="text-white/80 hover:text-gold-500 text-base py-2">
              Blog
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-white/80 hover:text-gold-500 text-base py-2">
              Contact
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
