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
    q: "Can a software agency located in Pakistan, UAE, or India enforce a contract against a US or UK client?",
    a: "Yes! International contracts are legally enforceable across borders provided the agreement includes: (1) An explicit Governing Law & Jurisdiction clause (e.g. State of Delaware or Courts of England & Wales), (2) Consent to personal jurisdiction, and (3) International Arbitration provisions.",
  },
  {
    q: "Why should overseas agencies choose US or UK governing law in their contracts?",
    a: "Choosing the client's local jurisdiction (e.g., Delaware law for US clients or English law for UK clients) makes it significantly faster and cheaper to file breach of contract or unpaid invoice claims directly in the client's home courts.",
  },
  {
    q: "What is an International Arbitration Clause and why is it recommended?",
    a: "An International Arbitration clause (e.g. under ICC, LCIA, or ICDR rules) submits disputes to a neutral arbitral tribunal. Under the New York Convention on Foreign Arbitral Awards (1958), arbitration awards are enforceable in over 170 countries.",
  },
  {
    q: "How can overseas agencies enforce unpaid invoices against US/UK clients?",
    a: "If the contract includes a US/UK governing law clause and attorney fee recovery provision, the agency can hire a local US/UK debt collection attorney to issue a formal Demand Letter or file a Summary Judgment claim.",
  },
  {
    q: "What is an Attorney's Fees Recovery clause in international contracts?",
    a: "An Attorney's Fees Recovery clause obligates the defaulting party to pay all legal fees, court costs, and collection expenses incurred by the prevailing party during contract enforcement.",
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
  headline: "Can Overseas Agencies Enforce NDAs and Contracts Against US & UK Clients?",
  description:
    "Complete legal enforcement guide for international dev agencies & offshore vendors on enforcing NDAs, contracts, and unpaid invoices against US and UK corporate clients.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/enforcing-nda-contract-international-clients",
};

export const Route = createFileRoute("/blog/enforcing-nda-contract-international-clients")({
  head: () => ({
    meta: [
      { title: "Enforcing Contracts Against US & UK Clients (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Can overseas agencies enforce NDAs & contracts against US/UK clients? Learn governing law clauses, New York Convention arbitration & attorney fee recovery.",
      },
      {
        name: "keywords",
        content:
          "enforcing nda contract international clients, overseas agency enforce contract us uk client, governing law jurisdiction clause international contract, new york convention foreign arbitral awards agency",
      },
      {
        property: "og:title",
        content: "Can Overseas Agencies Enforce NDAs and Contracts Against US & UK Clients?",
      },
      {
        property: "og:description",
        content:
          "Learn how offshore software agencies and international vendors legally enforce contracts and recover unpaid invoices in US & UK courts.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/enforcing-nda-contract-international-clients" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/enforcing-nda-contract-international-clients" }],
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
            Can Overseas Agencies Enforce NDAs and Contracts Against US & UK Clients?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive cross-border litigation guide for international software houses, offshore IT vendors, and digital agencies on enforcing contracts and recovering unpaid invoices against US and UK clients.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Cross-Border Dispute Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>New York Convention & US/UK Forum Rules</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Cross-Border Enforcement Pillars</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Client Jurisdiction Selection:</strong> Designating US/UK courts makes enforcement direct, fast, and accessible.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>New York Convention Arbitration:</strong> Arbitral awards enforceable in 170+ member nations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Attorney Fees Recovery Clause:</strong> Compels defaulting client to pay agency's legal representation fees.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Consent to Electronic Signatures:</strong> E-Sign Act & eIDAS compliance ensures digital contracts hold full court validity.</span>
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
            <li><a href="#cross-border-enforceability" className="hover:text-gold-600 underline">1. The Reality of Cross-Border Contract Enforcement</a></li>
            <li><a href="#governing-law-strategy" className="hover:text-gold-600 underline">2. Strategic Governing Law & Jurisdiction Selection</a></li>
            <li><a href="#new-york-convention" className="hover:text-gold-600 underline">3. Leveraging the New York Convention on Arbitration</a></li>
            <li><a href="#attorney-fees-clause" className="hover:text-gold-600 underline">4. The Power of Attorney's Fees Recovery Clauses</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="cross-border-enforceability" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Reality of Cross-Border Contract Enforcement
          </h2>
          <p>
            Offshore agencies frequently fear that overseas clients can breach contracts or withhold payment with impunity. With proper jurisdiction drafting, foreign contracts hold full legal force in US and UK courts.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="governing-law-strategy" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Strategic Governing Law & Jurisdiction Selection
          </h2>
          <p>
            Counter-intuitively, designating the client's home state (e.g. State of New York or High Court of Justice in London) empowers the overseas agency to file local summary proceedings without jurisdictional disputes.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            INTERNATIONAL CONTRACT DRAFTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Structure Enforceable Cross-Border Contracts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts international B2B agreements, dispute resolution clauses, and cross-border IP enforcement contracts.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/non-disclosure-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order International Contract Setup <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="new-york-convention" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Leveraging the New York Convention on Arbitration
          </h2>
          <p>
            The 1958 New York Convention allows arbitration awards issued in one treaty member nation to be recognized and enforced directly by courts in 170+ member states.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="attorney-fees-clause" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. The Power of Attorney's Fees Recovery Clauses
          </h2>
          <p>
            Without an express Attorney's Fees clause, US courts follow the "American Rule" where each party pays their own legal costs. Including this clause makes defaulting clients responsible for your legal fees.
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
            CROSS-BORDER LEGAL CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Enforce Your Contracts Internationally
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Cross-border jurisdiction clauses, New York Convention arbitration provisions, and US/UK debt recovery contract templates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/non-disclosure-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order International Contract Package
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
