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
  Globe,
  FileCheck,
  Code,
} from "lucide-react";

const faqs = [
  {
    q: "How can US and UK companies contract remote freelancers abroad legally?",
    a: "US/UK companies can contract foreign freelancers legally by executing an International Freelance Service Agreement that includes: (1) IRS Form W-8BEN tax exemption declaration, (2) Present IP Assignment clause, (3) Confidentiality obligations, and (4) Choice of Law jurisdiction.",
  },
  {
    q: "Does the US 'Work Made For Hire' doctrine apply to international freelancers?",
    a: "No! The US statutory 'Work Made For Hire' doctrine does NOT automatically apply to foreign freelancers operating outside US borders. Contracts must contain an express written IP Assignment clause transferring code and designs.",
  },
  {
    q: "What tax forms are required when hiring remote freelancers outside the US?",
    a: "US companies must collect a signed Form W-8BEN (for individuals) or Form W-8BEN-E (for foreign agencies) to document non-US status and justify paying invoices without withholding 30% US backup tax.",
  },
  {
    q: "How should payments to foreign freelancers be handled legally?",
    a: "Payments should be executed in commercial business currencies via verified platforms (Payoneer, Wise, direct wire transfers) linked to the contractor's official business bank account, maintaining clear invoice audit trails.",
  },
  {
    q: "What currency and tax clauses must be included in international freelance agreements?",
    a: "Contracts should specify: (1) Payment currency (e.g. USD, GBP, EUR), (2) Responsibility for international wire transfer bank fees, and (3) Explicit statement that foreign contractor is responsible for all local income taxes.",
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
  headline: "How to Contract Remote Freelancers Abroad Legally (Work For Hire Rules)",
  description:
    "Complete legal guide for contracting remote international freelancers in 2026. Learn W-8BEN requirements, Work-Made-For-Hire international IP rules, invoice compliance, and currency risk management.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/contracting-remote-freelancers-overseas-legally",
};

export const Route = createFileRoute("/blog/contracting-remote-freelancers-overseas-legally")({
  head: () => ({
    meta: [
      { title: "Contracting Remote Freelancers Abroad Legally (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to contract remote freelancers overseas legally. W-8BEN tax forms, international Work-For-Hire IP assignment, Wise/Payoneer payment compliance & contracts.",
      },
      {
        name: "keywords",
        content:
          "contracting remote freelancers overseas legally, w8ben foreign contractor tax compliance us, work for hire international freelancer software ip assignment, freelance service agreement remote developer",
      },
      {
        property: "og:title",
        content: "How to Contract Remote Freelancers Abroad Legally (Work For Hire Rules)",
      },
      {
        property: "og:description",
        content:
          "Master international IP assignment, IRS W-8BEN compliance, and cross-border freelance service agreements.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/contracting-remote-freelancers-overseas-legally" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/contracting-remote-freelancers-overseas-legally" }],
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
            How to Contract Remote Freelancers Abroad Legally (Work For Hire Rules)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A step-by-step legal blueprint for US, UK, and European companies on hiring overseas developers, designers, and virtual assistants with IRS W-8BEN tax compliance and international IP assignment.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ International Tax & Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>IRS W-8BEN & Global Freelance Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>4-Step International Freelance Protocol</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Execute Freelance Agreement:</strong> Formal contract defining scope, milestones, and payment terms.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Present IP Assignment Clause:</strong> Direct copyright assignment replacing US work-for-hire assumptions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Collect IRS W-8BEN Form:</strong> Validates foreign status to exempt payment from 30% US withholding tax.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Compliant Payment Rails:</strong> Commercial banking payments with full invoice tracking.</span>
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
            <li><a href="#why-work-for-hire-fails-abroad" className="hover:text-gold-600 underline">1. Why US "Work-Made-For-Hire" Fails International Freelancers</a></li>
            <li><a href="#w8ben-tax-rules" className="hover:text-gold-600 underline">2. IRS Form W-8BEN & W-8BEN-E Tax Rules</a></li>
            <li><a href="#essential-freelance-clauses" className="hover:text-gold-600 underline">3. Essential Clauses for International Freelance Agreements</a></li>
            <li><a href="#payment-rails" className="hover:text-gold-600 underline">4. Compliant Cross-Border Payment Protocols</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-work-for-hire-fails-abroad" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why US "Work-Made-For-Hire" Fails International Freelancers
          </h2>
          <p>
            The statutory Work-Made-For-Hire doctrine under US Copyright Law applies strictly within domestic US jurisdictions. Foreign courts require an explicit present assignment clause to transfer copyright.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="w8ben-tax-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. IRS Form W-8BEN & W-8BEN-E Tax Rules
          </h2>
          <p>
            US companies paying foreign contractors must collect Form W-8BEN (for individuals) or W-8BEN-E (for entities). This certifies that the contractor performs work outside the US and is exempt from 30% US backup tax withholding.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FREELANCE SERVICE AGREEMENT DRAFTING
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Cross-Border Freelance Agreements with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts international Freelance Service Agreements with W-8BEN compliance, global IP assignment, and dispute resolution.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/freelance-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Freelance Agreement Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="essential-freelance-clauses" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Essential Clauses for International Freelance Agreements
          </h2>
          <p>
            Key clauses include: (1) Scope of Work & Deliverables, (2) Present Assignment of IP, (3) Confidentiality & Data Privacy (GDPR), and (4) Tax Indemnification.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="payment-rails" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Compliant Cross-Border Payment Protocols
          </h2>
          <p>
            Always make payments in agreed commercial currencies directly to contractor business accounts, maintaining detailed invoices to satisfy corporate accounting and tax audits.
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
            INTERNATIONAL FREELANCE LEGAL SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Hire Foreign Freelancers with Confidence
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Cross-border freelance agreements, Form W-8BEN onboarding packets, IP assignment clauses, and international payment compliance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/freelance-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Freelance Agreement Service
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
