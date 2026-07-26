import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, Clock, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/advaq-logo.jpg" alt="ADVAQ Logo" className="w-10 h-10 rounded-lg border border-gold-500/30 object-cover" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl text-white">ADVAQ</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gold-500/90 font-medium">
                Global Advisory
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-navy-200/80">
            Your cross-border business partner for the UK, USA, UAE & Pakistan — from
            company formation and tax registration to annual filings, payroll,
            and legal contracts. Trusted by freelancers, IT firms, and founders worldwide.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3 text-navy-200/80">
              <Mail size={14} className="text-gold-500 shrink-0" />
              <a href="mailto:contact@advaq.com" className="hover:text-gold-500 transition-colors">
                contact@advaq.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-navy-200/80">
              <Phone size={14} className="text-gold-500 shrink-0" />
              <a href="https://wa.me/923000925335" target="_blank" rel="noreferrer" className="hover:text-gold-500 transition-colors">
                +92 3000 925335 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-3 text-navy-200/80">
              <Clock size={14} className="text-gold-500 shrink-0" />
              <span>Mon–Sat, 9am–6pm (PKT)</span>
            </li>
            <li className="flex items-center gap-3 text-navy-200/80">
              <MapPin size={14} className="text-gold-500 shrink-0" />
              <span>🇬🇧 UK · 🇺🇸 USA · 🇦🇪 UAE · 🇵🇰 Pakistan</span>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, MessageCircle, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 grid place-items-center border border-white/10 text-white/70 hover:text-gold-500 hover:border-gold-500/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="label-eyebrow !text-white/90 mb-5">UK Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "UK LTD Company Incorporation",
              "Corporation Tax Registration",
              "VAT Registration & Returns",
              "Self Assessment Tax Return",
              "Annual Accounts Filing",
              "Confirmation Statement Filing",
              "Registered Office Address",
            ].map((s) => (
              <li key={s}>
                <Link to="/uk-services" className="hover:text-gold-500 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/uk-services" className="text-gold-500 hover:text-gold-400 transition-colors">
                View All UK Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow !text-white/90 mb-5">US Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "USA LLC Incorporation",
              "C-Corp / S-Corp Formation",
              "EIN Application (No SSN)",
              "Federal & State Tax Returns",
              "Sales Tax Registration",
              "BOI / FinCEN Report Filing",
              "Registered Agent Service",
            ].map((s) => (
              <li key={s}>
                <Link to="/us-services" className="hover:text-gold-500 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/us-services" className="text-gold-500 hover:text-gold-400 transition-colors">
                View All US Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow !text-white/90 mb-5">UAE Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Freezone Company Formation",
              "Mainland Company Formation",
              "VAT Registration (TRN)",
              "Corporate Tax Registration",
              "Quarterly VAT Return Filing",
              "Annual CT Return Filing",
            ].map((s) => (
              <li key={s}>
                <Link to="/uae-services" className="hover:text-gold-500 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/uae-services" className="text-gold-500 hover:text-gold-400 transition-colors">
                View All UAE Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow !text-white/90 mb-5">Pak Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              "SECP Company Registration",
              "NTN & FBR Registration",
              "PSEB Registration",
              "Income Tax Return Filing",
              "FBR Notice Response",
              "Sales Tax Registration",
            ].map((s) => (
              <li key={s}>
                <Link to="/pakistan-services" className="hover:text-gold-500 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/pakistan-services" className="text-gold-500 hover:text-gold-400 transition-colors">
                View All Pakistan Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow !text-white/90 mb-5">Legal Contract Drafting</h4>
          <ul className="space-y-3 text-sm">
            {[
              "Freelance Service Agreement",
              "NDA / Non-Disclosure Agreement",
              "IP Assignment Agreement",
              "Master Service Agreement",
              "IT Outsourcing Agreement",
              "Privacy Policy Drafting",
            ].map((s) => (
              <li key={s}>
                <Link to="/legal-contract-drafting" className="hover:text-gold-500 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/legal-contract-drafting" className="text-gold-500 hover:text-gold-400 transition-colors">
                View All Contracts →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-navy-200/60">
          <p>© 2025 ADVAQ. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
