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
  ShieldAlert,
  Scale,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Limitation of Liability clause in B2B agency agreements?",
    a: "A Limitation of Liability clause caps the maximum dollar amount of damages a client can recover from an agency or software vendor in the event of a breach, server outage, or software error.",
  },
  {
    q: "What is the difference between a Liability Cap and an Indemnification Clause?",
    a: "A Limitation of Liability clause limits financial claims between the TWO CONTRACTING PARTIES. An Indemnification clause obligates one party to cover legal costs, settlements, and damages if a THIRD PARTY sues the other party (e.g. copyright infringement lawsuit from a third party).",
  },
  {
    q: "What is an acceptable financial cap for agency liability?",
    a: "Standard commercial contract practice caps agency liability at the TOTAL FEES PAID by the client under the specific Statement of Work in the preceding 6 to 12 months.",
  },
  {
    q: "What damages are typically excluded under a Consequential Damages Waiver?",
    a: "A Consequential Damages Waiver excludes indirect, special, incidental, punitive, or consequential damages—such as lost business profits, lost revenue, business interruption, or data loss.",
  },
  {
    q: "Can a Limitation of Liability clause cap gross negligence or intentional fraud?",
    a: "No. In virtually all jurisdictions (including US, UK, and EU), contract clauses capping liability for gross negligence, intentional misconduct, or bodily injury are legally unenforceable and void as against public policy.",
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
  dateModified: "2026-07-22",
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
            Limitation of Liability & Indemnification Clauses: Protecting Your Business from Lawsuits
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive commercial risk management guide for digital agencies, IT consultancies, and SaaS vendors on structuring financial liability caps, waivers of consequential damages, and indemnification obligations.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Risk Engineering Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
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
            <span>Liability & Indemnity Core Pillars</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Limitation of Liability</strong>
              <p className="text-navy-100 leading-relaxed">
                Caps maximum direct damages between contracting parties to fees paid in last 12 months. Disclaims lost profits.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Indemnification Clause</strong>
              <p className="text-navy-100 leading-relaxed">
                Protects party from third-party lawsuits (e.g. client indemnifies agency if client-provided content infringes third-party IP).
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
            <li><a href="#why-liability-caps-matter" className="hover:text-gold-600 underline">1. Why Liability Caps Are Essential in B2B Contracts</a></li>
            <li><a href="#consequential-damages" className="hover:text-gold-600 underline">2. Waiving Consequential & Indirect Damages</a></li>
            <li><a href="#indemnification-mechanics" className="hover:text-gold-600 underline">3. Understanding Indemnification Mechanics</a></li>
            <li><a href="#carve-outs-exceptions" className="hover:text-gold-600 underline">4. Standard Exceptions & Uncapped Liability Exclusions</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-liability-caps-matter" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Liability Caps Are Essential in B2B Contracts
          </h2>
          <p>
            Without a Limitation of Liability clause, a $10,000 web development project could expose your agency to millions of dollars in damages if a website outage impacts the client's sales.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="consequential-damages" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Waiving Consequential & Indirect Damages
          </h2>
          <p>
            The Consequential Damages Waiver disclaims lost business profits, data corruption, and indirect losses, ensuring damages are limited to actual direct costs.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            RISK MANAGEMENT DRAFTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Bulletproof Liability & Indemnity Clauses with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts customized Limitation of Liability clauses, consequential damage waivers, and indemnification provisions.
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

        {/* SECTION 3 */}
        <div id="indemnification-mechanics" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Understanding Indemnification Mechanics
          </h2>
          <p>
            An Indemnification clause acts as a hold-harmless provision. Ensure clients indemnify your agency if marketing materials or assets provided by the client infringe third-party trademarks or copyrights.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="carve-outs-exceptions" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Standard Exceptions & Uncapped Liability Exclusions
          </h2>
          <p>
            Courts prohibit capping liability for intentional fraud, gross negligence, or breach of confidentiality. Keep these standard carve-outs explicit to ensure contract enforceability.
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
            COMMERCIAL RISK CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Shield Your Business from Catastrophic Lawsuits
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Limitation of liability drafting, consequential damage waivers, third-party indemnity clauses, and risk management templates.
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
