import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Globe2,
  Scale,
  Gavel,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Choice of Law clause in cross-border B2B contracts?",
    a: "A Choice of Law (or Governing Law) clause specifies which jurisdiction's laws will be used to interpret and enforce the contract (e.g. laws of the State of Delaware or laws of England & Wales).",
  },
  {
    q: "What is a Jurisdiction / Forum Selection clause?",
    a: "A Jurisdiction clause determines which physical court system has the legal authority to hear and decide disputes arising from the contract (e.g. courts of London, UK or courts of New York, USA).",
  },
  {
    q: "Why is International Arbitration preferred over litigation for cross-border software agreements?",
    a: "International Arbitration (under ICC, LCIA, or DIFC-LCIA rules) is preferred because arbitral awards are enforceable globally under the New York Convention in over 170 countries, whereas foreign court judgments often require complex enforcement proceedings.",
  },
  {
    q: "How should a Choice of Law clause be structured for international agencies working with US clients?",
    a: "Agencies should select a neutral, tech-friendly jurisdiction (e.g. Delaware or England & Wales law) or specify international arbitration with an English-speaking tribunal seated in a neutral financial center (e.g. London or Singapore).",
  },
  {
    q: "What is a Multi-Tiered Dispute Resolution clause?",
    a: "A Multi-Tiered Dispute Resolution clause requires parties to attempt informal executive negotiation for 30 days, followed by non-binding mediation, before commencing formal arbitration or court litigation.",
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
  headline: "Choice of Law & Dispute Resolution Clauses in Cross-Border B2B Contracts",
  description:
    "Complete legal drafting guide on Choice of Law, Forum Selection, and International Arbitration clauses for cross-border B2B contracts between agencies and global clients.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/choice-of-law-dispute-resolution-cross-border-contracts",
};

export const Route = createFileRoute("/blog/choice-of-law-dispute-resolution-cross-border-contracts")({
  head: () => ({
    meta: [
      { title: "Choice of Law & Dispute Resolution Clauses (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Choice of law & dispute resolution clauses in cross-border B2B contracts. Forum selection, international arbitration (ICC/LCIA) & multi-tiered dispute resolution.",
      },
      {
        name: "keywords",
        content:
          "choice of law dispute resolution cross border contracts, governing law forum selection clause international b2b, international arbitration clause lcia icc new york convention, multi tiered dispute resolution negotiation mediation",
      },
      {
        property: "og:title",
        content: "Choice of Law & Dispute Resolution Clauses in Cross-Border B2B Contracts",
      },
      {
        property: "og:description",
        content:
          "Master cross-border jurisdiction rules, arbitration clauses, and multi-tiered dispute resolution for international contracts.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/choice-of-law-dispute-resolution-cross-border-contracts" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/choice-of-law-dispute-resolution-cross-border-contracts" }],
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
    <article className="min-h-screen bg-white">
      {/* HEADER HERO */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <span>Legal Contract Drafting</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Choice of Law & Dispute Resolution Clauses in Cross-Border B2B Contracts
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical international law masterclass for software houses, digital agencies, and global vendors on drafting Choice of Law, Forum Selection, and International Arbitration clauses.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ International Dispute Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>International Arbitration & Forum Rules</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Dispute Resolution Core Pillars</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Governing Law Selection:</strong> Designate clear applicable law (e.g. Delaware or English law).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>International Arbitration:</strong> Submit disputes to neutral tribunals (LCIA, ICC, DIFC) for global enforceability.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Multi-Tiered Escalation:</strong> Mandatory 30-day executive negotiation before formal legal proceedings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Language & Seat Selection:</strong> Specify English language and neutral arbitral seat.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#governing-law-vs-forum" className="hover:text-gold-600 underline">1. Governing Law vs Forum Selection Clauses</a></li>
            <li><a href="#international-arbitration" className="hover:text-gold-600 underline">2. Why International Arbitration Beats Court Litigation</a></li>
            <li><a href="#multi-tiered-clauses" className="hover:text-gold-600 underline">3. Multi-Tiered Dispute Resolution (Negotiation, Mediation, Arbitration)</a></li>
            <li><a href="#drafting-cross-border-clauses" className="hover:text-gold-600 underline">4. Drafting Cross-Border Jurisdiction Clauses</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="governing-law-vs-forum" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Governing Law vs Forum Selection Clauses
          </h2>
          <p>
            Governing Law specifies which legal rules apply, while Forum Selection determines which court or tribunal hears the dispute. Both are essential in cross-border commercial contracts.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="international-arbitration" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Why International Arbitration Beats Court Litigation
          </h2>
          <p>
            The New York Convention ensures arbitration awards are enforceable across 170+ member nations, making arbitration far more effective than cross-border court judgments.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            CROSS-BORDER CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Structure Enforceable International Contracts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts Choice of Law, Forum Selection, and International Arbitration clauses for cross-border tech contracts.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order International Contract Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="multi-tiered-clauses" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Multi-Tiered Dispute Resolution (Negotiation, Mediation, Arbitration)
          </h2>
          <p>
            Structure escalation steps requiring good-faith executive negotiations and non-binding mediation before launching costly arbitration proceedings.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="drafting-cross-border-clauses" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Drafting Cross-Border Jurisdiction Clauses
          </h2>
          <p>
            Specify exact arbitral institutions (e.g., LCIA, ICC, or AAA-ICDR), number of arbitrators, official language, and governing substantive law.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all"
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
            INTERNATIONAL DISPUTE CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Draft Enforceable Cross-Border Contracts
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Choice of law drafting, international arbitration provisions, multi-tiered dispute resolution, and New York Convention compliance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Choice of Law Package
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
