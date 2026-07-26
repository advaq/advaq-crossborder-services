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
  Briefcase,
  Users,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What key elements must every tech company employment contract contain?",
    a: "Essential tech employment terms include: (1) Position & Job Duties, (2) Compensation & Equity Vesting Schedule, (3) Mandatory Inventions Assignment (PIIPA), (4) Confidentiality & Data Protection, (5) Notice Periods & Probationary Terms, and (6) Post-Employment Restraints.",
  },
  {
    q: "How do employment contracts differ between local W-2 employees and remote international workers?",
    a: "Local employment contracts adhere directly to domestic labor laws (e.g. US state labor codes or UK Employment Rights Act). Remote international workers must be hired either via an Employer of Record (EOR) under local in-country employment contracts or engaged as compliant Independent Contractors.",
  },
  {
    q: "What is an Inventions Assignment (PIIPA) clause in tech employment contracts?",
    a: "An Inventions Assignment clause grants the employer exclusive, automatic ownership of all software code, inventions, and patentable designs created by the employee during working hours or using company assets.",
  },
  {
    q: "How should equity options and stock vesting schedules be drafted in employment contracts?",
    a: "Contracts should reference an official Option Plan and specify a standard 4-year vesting schedule with a 1-year cliff, ensuring the employee must complete 12 months of service before any equity vests.",
  },
  {
    q: "What notice periods are standard in tech employment contracts?",
    a: "In the US, employment is 'at-will' unless specified otherwise. In the UK, UAE, and Pakistan, statutory notice periods range from 1 to 3 months for senior developers and engineering leads.",
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
  headline: "Drafting Employment Contracts for Local & Remote Workers in Tech Companies",
  description:
    "Complete 2026 legal guide on drafting employment contracts for local and remote tech workers. Learn IP invention assignment, stock vesting schedules, notice periods, and cross-border HR compliance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/tech-company-employment-contract-drafting-guide",
};

export const Route = createFileRoute("/blog/tech-company-employment-contract-drafting-guide")({
  head: () => ({
    meta: [
      { title: "Tech Company Employment Contract Drafting Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Tech company employment contract drafting guide for local & remote staff. Invention assignment clauses, stock vesting rules, probation & notice periods.",
      },
      {
        name: "keywords",
        content:
          "tech company employment contract drafting guide, software developer employment agreement template, invention assignment piipa clause employment contract, 4 year stock vesting schedule 1 year cliff agreement",
      },
      {
        property: "og:title",
        content: "Drafting Employment Contracts for Local & Remote Workers in Tech Companies",
      },
      {
        property: "og:description",
        content:
          "Structure compliant employment contracts for software engineers, product managers, and remote tech teams.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/tech-company-employment-contract-drafting-guide" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/tech-company-employment-contract-drafting-guide" }],
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
            Drafting Employment Contracts for Local & Remote Workers in Tech Companies
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive HR and legal drafting guide for software startups, SaaS companies, and digital agencies on structuring employment agreements for local and distributed engineering workforces.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Tech HR Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Global Tech HR Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Tech Employment Contract Checklist</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Invention Assignment (PIIPA):</strong> Comprehensive IP transfer covering all code, patents, and designs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Vesting & Equity Schedule:</strong> 4-year vesting schedule with 1-year cliff terms.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Confidentiality & Data Privacy:</strong> Mandatory protection of client codebases and trade secrets.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Notice & Severance Provisions:</strong> Clear termination protocols and statutory compliance.</span>
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
            <li><a href="#essential-employment-terms" className="hover:text-gold-600 underline">1. Essential Clauses in Tech Employment Contracts</a></li>
            <li><a href="#ip-invention-assignment" className="hover:text-gold-600 underline">2. Structuring Invention Assignment (PIIPA) Clauses</a></li>
            <li><a href="#stock-vesting-schedules" className="hover:text-gold-600 underline">3. Drafting Equity & Stock Option Vesting Clauses</a></li>
            <li><a href="#local-vs-remote-compliance" className="hover:text-gold-600 underline">4. Managing Local vs International Remote Workforce Compliance</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="essential-employment-terms" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Essential Clauses in Tech Employment Contracts
          </h2>
          <p>
            Employment contracts form the foundation of tech workforce management. Beyond standard salary terms, contracts must safeguard intellectual property and define remote working rules.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="ip-invention-assignment" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Structuring Invention Assignment (PIIPA) Clauses
          </h2>
          <p>
            Invention assignment clauses ensure that all code, algorithms, and product features developed by employees during employment belong exclusively to the company.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ EMPLOYMENT CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Custom Tech Employment Contracts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts bespoke Employment Agreements, PIIPA forms, and stock option documentation for software companies and tech startups.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/employment-contract"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Employment Agreement Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="stock-vesting-schedules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Drafting Equity & Stock Option Vesting Clauses
          </h2>
          <p>
            Specify a 4-year vesting schedule with a 1-year cliff, ensuring employees vest 25% of their equity after completing 12 months of service, with monthly linear vesting thereafter.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="local-vs-remote-compliance" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Managing Local vs International Remote Workforce Compliance
          </h2>
          <p>
            Ensure compliance with local statutory benefits, mandatory pension contributions, and local labor board notice rules when hiring full-time employees in foreign jurisdictions.
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
            TECH HR & EMPLOYMENT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Draft Your Tech Employment Contracts
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Custom employment agreements, PIIPA invention assignment forms, stock option vesting schedules, and remote worker compliance packets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/employment-contract"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Employment Agreement Service
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
