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
  Lock,
  FileCheck,
  Briefcase,
} from "lucide-react";

const faqs = [
  {
    q: "What is the primary difference between a One-Way NDA and a Mutual NDA?",
    a: "A One-Way NDA (Unilateral NDA) protects confidential information disclosed by ONLY ONE party (e.g. a client sharing business ideas with an agency). A Mutual NDA (Bilateral NDA) protects confidential information shared mutually by BOTH parties (e.g. two companies negotiating a merger or partnership).",
  },
  {
    q: "When should a business use a One-Way NDA?",
    a: "Use a One-Way NDA when evaluating contractors, hiring agency vendors, disclosing proprietary pitch decks to potential investors, or sharing trade secrets with employees.",
  },
  {
    q: "When should a business use a Mutual NDA?",
    a: "Use a Mutual NDA during joint venture negotiations, M&A due diligence, co-development partnerships, or strategic B2B integrations where both companies will expose proprietary code or client data.",
  },
  {
    q: "How long should a Non-Disclosure Agreement remain effective?",
    a: "Standard commercial NDAs remain effective for 2 to 5 years from the date of disclosure. However, trade secrets (like source code, algorithms, and customer lists) should be protected indefinitely for as long as they remain secret.",
  },
  {
    q: "What standard exclusions must every NDA include?",
    a: "NDAs must exclude information that: (1) Is already publicly known through no fault of receiving party, (2) Was already in receiving party's possession prior to disclosure, (3) Is independently developed, or (4) Is required to be disclosed by court order or government subpoena.",
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
  headline: "One-Way NDA vs Mutual NDA: When Should Businesses Use Each Agreement?",
  description:
    "Complete legal guide comparing One-Way (Unilateral) and Mutual (Bilateral) NDAs. Learn when to use each non-disclosure agreement, key confidentiality definitions, duration limits, and standard legal exclusions.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/one-way-nda-vs-mutual-nda-difference",
};

export const Route = createFileRoute("/blog/one-way-nda-vs-mutual-nda-difference")({
  head: () => ({
    meta: [
      { title: "One-Way NDA vs Mutual NDA Difference Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "One-Way NDA vs Mutual NDA comparison guide. Learn when to use unilateral vs bilateral non-disclosure agreements, trade secret protection & exclusions.",
      },
      {
        name: "keywords",
        content:
          "one way nda vs mutual nda difference, unilateral vs bilateral non disclosure agreement, standard nda duration 2 to 5 years trade secret, confidential information exclusions court subpoena nda",
      },
      {
        property: "og:title",
        content: "One-Way NDA vs Mutual NDA: When Should Businesses Use Each Agreement?",
      },
      {
        property: "og:description",
        content:
          "Master the differences between Unilateral and Mutual NDAs to safeguard your trade secrets and proprietary data.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/one-way-nda-vs-mutual-nda-difference" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/one-way-nda-vs-mutual-nda-difference" }],
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
            One-Way NDA vs Mutual NDA: When Should Businesses Use Each Agreement?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical legal comparison for founders, agencies, and enterprise executives on selecting between Unilateral (One-Way) and Bilateral (Mutual) Non-Disclosure Agreements.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Confidentiality Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>International Trade Secret Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>NDA Type Comparison</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">One-Way (Unilateral) NDA</strong>
              <p className="text-navy-100 leading-relaxed">
                Protects information disclosed by 1 party. Used when sharing specs with contractors, agencies, or prospective employees.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Mutual (Bilateral) NDA</strong>
              <p className="text-navy-100 leading-relaxed">
                Protects information disclosed by BOTH parties. Used in joint ventures, M&A due diligence, and strategic co-marketing partnerships.
              </p>
            </div>
          </div>
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
            <li><a href="#what-is-one-way-nda" className="hover:text-gold-600 underline">1. What Is a One-Way (Unilateral) NDA?</a></li>
            <li><a href="#what-is-mutual-nda" className="hover:text-gold-600 underline">2. What Is a Mutual (Bilateral) NDA?</a></li>
            <li><a href="#use-case-scenarios" className="hover:text-gold-600 underline">3. Strategic Use Case Scenarios</a></li>
            <li><a href="#essential-clauses" className="hover:text-gold-600 underline">4. Essential NDA Clauses & Standard Exclusions</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-one-way-nda" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is a One-Way (Unilateral) NDA?
          </h2>
          <p>
            A <strong>One-Way NDA</strong> protects proprietary information when only one business or individual is revealing confidential details to a recipient who is receiving the information.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="what-is-mutual-nda" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. What Is a Mutual (Bilateral) NDA?
          </h2>
          <p>
            A <strong>Mutual NDA</strong> imposes reciprocal confidentiality obligations on both signing parties, ensuring that sensitive data exchanged during commercial discussions remains protected.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ NDA DRAFTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Custom One-Way & Mutual NDAs with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts bulletproof Non-Disclosure Agreements tailored for tech startups, digital agencies, and cross-border commercial transactions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/mutual-nda"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order NDA Contract Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="use-case-scenarios" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Strategic Use Case Scenarios
          </h2>
          <p>
            Choose a One-Way NDA when sharing client specs with freelancers. Choose a Mutual NDA when exploring M&A, technology integration, or shared IP development.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="essential-clauses" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Essential NDA Clauses & Standard Exclusions
          </h2>
          <p>
            Every NDA must define: (1) Definition of Confidential Information, (2) Term & Duration, (3) Permitted Disclosures, and (4) Standard Exclusions for public knowledge or court orders.
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
            CONFIDENTIALITY & NDA SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Protect Your Trade Secrets Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            One-Way and Mutual NDA drafting, trade secret classification, duration structuring, and international enforcement advisory.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/mutual-nda"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order NDA Drafting Service
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
