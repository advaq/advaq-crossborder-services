import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  ShieldAlert,
  Scale,
  Briefcase,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Limitation of Liability clause in B2B agency contracts?",
    a: "A Limitation of Liability clause caps the maximum dollar amount of legal damages a client can recover from a digital agency, software house, or SaaS vendor in the event of a contract breach, server outage, or software failure.",
  },
  {
    q: "What is the key legal difference between a Liability Cap and an Indemnification Clause?",
    a: "A Limitation of Liability clause caps financial claims between the TWO CONTRACTING PARTIES (e.g. client suing agency). An Indemnification clause obligates one party to cover legal defense fees and damages if a THIRD PARTY sues the other party (e.g. third-party copyright owner suing agency over client-provided graphics).",
  },
  {
    q: "What is an acceptable financial cap for agency liability?",
    a: "Standard commercial contract practice caps agency liability at the TOTAL FEES PAID by the client under the specific Statement of Work (SOW) in the preceding 6 to 12 months (or $10,000 for low-ticket engagements).",
  },
  {
    q: "What damages are typically excluded under a Consequential Damages Waiver?",
    a: "A Consequential Damages Waiver disclaims indirect, special, incidental, punitive, or consequential damages—such as lost business profits, lost revenue, business interruption, reputational harm, or corrupted databases.",
  },
  {
    q: "Can a Limitation of Liability clause cap gross negligence or intentional fraud?",
    a: "No. In virtually all jurisdictions (including US, UK, EU, and Pakistan), contract clauses attempting to limit liability for gross negligence, willful misconduct, intentional fraud, or bodily injury are void as against public policy.",
  },
  {
    q: "What is a 'Super-Cap' in commercial IT contracts?",
    a: "A Super-Cap is a higher liability limit (e.g., 2x to 5x annual fees paid or $1 Million) reserved specifically for breaches of data privacy (GDPR), confidentiality obligations, or IP infringement indemnities.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Limitation of Liability & Indemnification Clauses: Protecting Your Business from Lawsuits",
  description:
    "Complete legal guide on Limitation of Liability and Indemnification clauses in commercial agency agreements. Learn risk caps, consequential damage waivers, third-party indemnity, and fraud exclusions.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/limitation-of-liability-clause-agency-contract",
};

export const Route = createFileRoute("/blog/limitation-of-liability-clause-agency-contract")({
  head: () => ({
    meta: [
      { title: "Limitation of Liability & Indemnification Clauses (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Limitation of liability & indemnification clause guide for agency contracts. Consequential damages waivers, 12-month fee caps & third-party indemnity rules.",
      },
      {
        name: "keywords",
        content:
          "limitation of liability clause agency contract, indemnification clause b2b software contract, consequential damages waiver lost profits, liability cap 12 months fees paid agency",
      },
      {
        property: "og:title",
        content: "Limitation of Liability & Indemnification Clauses: Protecting Your Business from Lawsuits",
      },
      {
        property: "og:description",
        content:
          "Shield your software agency or SaaS business from catastrophic legal claims with bulletproof liability and indemnity provisions.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/limitation-of-liability-clause-agency-contract" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/limitation-of-liability-clause-agency-contract" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="min-h-screen bg-white text-gray-800">
      {/* HEADER HERO */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <Link to="/legal-contract-drafting" className="hover:underline">Legal Contract Drafting</Link>
          </div>

          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium">
            Limitation of Liability & Indemnification Clauses: Protecting Your Business from Lawsuits
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word comprehensive commercial risk management guide for digital agencies, IT consultancies, and SaaS vendors on structuring financial liability caps, waivers of consequential damages, and indemnification obligations.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>Advocate Muhammad Abdullah (Lead Counsel)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Commercial Liability & Indemnity Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Legal Summary: Liability & Indemnity Core Pillars</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Direct Financial Liability Cap</strong>
              <p className="text-navy-100 leading-relaxed">
                Caps maximum direct breach damages between client and agency to total fees paid under the SOW in the preceding 12 months.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. Waiver of Consequential Damages</strong>
              <p className="text-navy-100 leading-relaxed">
                Disclaims all indirect, special, incidental, punitive, or lost profit claims arising from server downtime or bug errors.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Third-Party Indemnification</strong>
              <p className="text-navy-100 leading-relaxed">
                Client holds agency harmless if client-provided code, logos, or content infringe third-party IP rights.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Uncapped Fraud Carve-Outs</strong>
              <p className="text-navy-100 leading-relaxed">
                Intentional fraud, gross negligence, and confidentiality breaches remain uncapped as mandated by public policy law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-2xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen size={16} className="text-gold-600" />
            Table of Contents
          </h2>
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: Commercial Risk Exposure for Tech Agencies</a></li>
            <li><a href="#why-liability-caps-matter" className="hover:text-gold-600 underline">2. Why Liability Caps Are Essential in B2B Contracts</a></li>
            <li><a href="#consequential-damages" className="hover:text-gold-600 underline">3. Waiving Consequential & Indirect Damages</a></li>
            <li><a href="#indemnification-mechanics" className="hover:text-gold-600 underline">4. Third-Party Indemnification Mechanics</a></li>
            <li><a href="#carve-outs-exceptions" className="hover:text-gold-600 underline">5. Standard Carve-Outs & Uncapped Exceptions</a></li>
            <li><a href="#super-caps" className="hover:text-gold-600 underline">6. Structuring Super-Caps for Data & IP Breaches</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: Commercial Risk Exposure for Tech Agencies
          </h2>
          <p>
            A software house builds a custom e-commerce web application for a client for a fee of $15,000. During Black Friday weekend, a database configuration bug causes a 6-hour checkout outage, resulting in $500,000 of lost client sales.
          </p>
          <p>
            Without a properly drafted <strong>Limitation of Liability Clause</strong>, the client could sue the software house for the full $500,000 in lost revenue, bankrupting the agency over a $15,000 project.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Risk Engineering Rule:</strong>
            <p className="text-navy-900 text-sm">
              Your contract's financial risk exposure must always be proportional to the contract price earned. Never accept unlimited liability on a fixed-fee software project.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="why-liability-caps-matter" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Why Liability Caps Are Essential in B2B Contracts
          </h2>
          <p>
            A Liability Cap sets a firm ceiling on total financial damages recoverable in a breach of contract claim:
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Liability Cap Wording:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "IN NO EVENT SHALL AGENCY'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER IN CONTRACT, TORT, OR OTHERWISE, EXCEED THE TOTAL FEES ACTUALLY PAID BY CLIENT TO AGENCY UNDER THE SPECIFIC STATEMENT OF WORK GIVING RISE TO THE CLAIM IN THE TWELVE (12) MONTHS PRECEDING THE INCIDENT."
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="consequential-damages" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Waiving Consequential & Indirect Damages
          </h2>
          <p>
            In commercial contract law, damages are split into <strong>Direct Damages</strong> (actual out-of-pocket costs to repair code) and <strong>Consequential Damages</strong> (lost business profits, lost customer goodwill, business interruption).
          </p>
          <p>
            Your agreement must feature a bold, capitalized waiver disclaiming all consequential and indirect damages.
          </p>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ RISK MANAGEMENT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Bulletproof Liability & Indemnity Clauses with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts customized Limitation of Liability clauses, consequential damage waivers, and indemnification provisions for agencies in US, UK, UAE, and Pakistan.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Risk Management Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="indemnification-mechanics" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Third-Party Indemnification Mechanics
          </h2>
          <p>
            An <strong>Indemnification Clause</strong> protects your business from lawsuits brought by third parties.
          </p>
          <p>
            Ensure your contract obligates the client to defend and indemnify your agency if third parties sue over client-provided brand assets, unverified database content, or client-mandated software features that violate third-party patents.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="carve-outs-exceptions" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Standard Carve-Outs & Uncapped Exceptions
          </h2>
          <p>
            To withstand judicial review, liability caps must exclude standard legal carve-outs that cannot legally be limited:
          </p>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Gross Negligence & Willful Misconduct:</strong> Intentionally harmful acts cannot be shielded by contract caps.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Third-Party IP Indemnity Claims:</strong> Infringements of third-party copyrights or trademarks.</span></li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="super-caps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Structuring Super-Caps for Data & IP Breaches
          </h2>
          <p>
            Enterprise buyers frequently negotiate a <strong>"Super-Cap"</strong>—a separate, higher liability limit (e.g. $1 Million or 3x annual contract value) that applies exclusively to data privacy breaches (GDPR) or confidentiality violations.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6 flex items-center gap-2">
            <HelpCircle size={22} className="text-gold-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-sans font-semibold text-navy-950 flex justify-between items-center gap-4 hover:bg-off-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gold-500 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-border/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section className="bg-navy-950 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 diagonal-pattern opacity-100" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold">
            COMMERCIAL RISK CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Shield Your Business from Catastrophic Lawsuits
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Limitation of liability drafting, consequential damage waivers, third-party indemnity clauses, and risk management templates drafted by Advocate High Court.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Liability & Indemnity Package
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
