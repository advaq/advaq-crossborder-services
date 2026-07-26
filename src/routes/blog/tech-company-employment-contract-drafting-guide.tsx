import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Briefcase,
  Scale,
  Users,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What key elements must every tech company employment contract contain?",
    a: "Essential tech employment provisions include: (1) Detailed Job Position & Reporting Duties, (2) Base Compensation & Equity Vesting Schedule, (3) Mandatory Inventions Assignment (PIIPA), (4) Confidentiality & Data Protection, (5) Notice Periods & Probationary Terms, and (6) Post-Employment Restraints.",
  },
  {
    q: "How do employment contracts differ between local W-2 employees and remote international workers?",
    a: "Local employment contracts adhere directly to domestic labor laws (e.g. US state labor codes or UK Employment Rights Act). Remote international staff must be hired either via an Employer of Record (EOR) under local in-country employment contracts or engaged as compliant Independent Contractors.",
  },
  {
    q: "What is an Inventions Assignment (PIIPA) clause in tech employment contracts?",
    a: "An Inventions Assignment clause grants the employer exclusive, automatic ownership of all software code, inventions, and patentable designs created by the employee during working hours or using company computing assets.",
  },
  {
    q: "How should equity options and stock vesting schedules be drafted in employment contracts?",
    a: "Contracts should reference an official Option Plan and specify a standard 4-year vesting schedule with a 1-year cliff, ensuring the employee must complete 12 months of service before any equity vests.",
  },
  {
    q: "What notice periods are standard in tech employment contracts?",
    a: "In the US, employment is 'at-will' by default unless specified otherwise. In the UK, UAE, and Pakistan, statutory notice periods range from 1 to 3 months for senior developers and engineering leads.",
  },
  {
    q: "What is a Dual-Moonlighting / Exclusivity clause in developer employment contracts?",
    a: "An Exclusivity clause prohibits full-time developers from taking side freelance projects, moonlighting for competitors, or running external software consultancies during their employment.",
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
  dateModified: "2026-07-26",
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
            Drafting Employment Contracts for Local & Remote Workers in Tech Companies
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word comprehensive HR and legal drafting guide for software startups, SaaS companies, and digital agencies on structuring employment agreements for local and distributed engineering workforces.
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
            <span>Executive Legal Summary: Essential Tech Employment Provisions</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Inventions Assignment (PIIPA)</strong>
              <p className="text-navy-100 leading-relaxed">
                Automatic legal transfer of all code, algorithms, patentable designs, and technical documentation created by developers during employment.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. Equity Vesting & Cliff Terms</strong>
              <p className="text-navy-100 leading-relaxed">
                Standard 4-year equity option vesting schedule with a 1-year cliff (25% vests after 12 months, followed by monthly linear vesting).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Confidentiality & Data Protection</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory protection of company trade secrets, client code repositories, staging API keys, and customer PII.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Exclusivity & Anti-Moonlighting</strong>
              <p className="text-navy-100 leading-relaxed">
                Prohibits full-time engineering staff from taking side freelance clients or operating competing software consultancies.
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
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: Tech Employment Contract Architecture</a></li>
            <li><a href="#ip-invention-assignment" className="hover:text-gold-600 underline">2. Structuring Invention Assignment (PIIPA) Clauses</a></li>
            <li><a href="#stock-vesting-schedules" className="hover:text-gold-600 underline">3. Drafting Equity & Stock Option Vesting Clauses</a></li>
            <li><a href="#exclusivity-moonlighting" className="hover:text-gold-600 underline">4. Exclusivity & Anti-Moonlighting Provisions</a></li>
            <li><a href="#probation-notice-periods" className="hover:text-gold-600 underline">5. Probationary Windows & Termination Notice Periods</a></li>
            <li><a href="#remote-compliance" className="hover:text-gold-600 underline">6. Local W-2 vs International Remote Hiring Compliance</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: Tech Employment Contract Architecture
          </h2>
          <p>
            Drafting an employment contract for a software company or digital agency requires far more legal rigor than a traditional retail or corporate employment agreement. Software engineers and product managers hold direct access to your company's core intellectual property, customer databases, and proprietary algorithms.
          </p>
          <p>
            An inadequate tech employment agreement leaves your startup vulnerable to title disputes during investor due diligence, code theft by departing employees, and unexpected employment tribunal penalties.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Legal Baseline:</strong>
            <p className="text-navy-900 text-sm">
              Inventure capital investors and M&A buyers will audit 100% of employee contracts to verify clean title to source code. Missing a signed PIIPA form from a single early developer can stall a multi-million-dollar acquisition.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="ip-invention-assignment" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Structuring Invention Assignment (PIIPA) Clauses
          </h2>
          <p>
            The core legal pillar of a tech employment agreement is the <strong>Proprietary Information and Inventions Assignment Agreement (PIIPA)</strong> clause.
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Inventions Assignment Wording:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "Employee agrees that all inventions, software source code, algorithms, patents, designs, and documentation conceived, developed, or reduced to practice by Employee during employment ('Inventions') shall be the sole and exclusive property of Company. Employee hereby irrevocably assigns to Company all right, title, and interest in and to all such Inventions."
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="stock-vesting-schedules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Drafting Equity & Stock Option Vesting Clauses
          </h2>
          <p>
            Attracting top software engineering talent often requires offering stock option equity grants. Employment agreements should reference the company's Equity Incentive Plan and specify standard 4-year vesting parameters:
          </p>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>1-Year Cliff:</strong> 25% of stock options vest only after completing 12 full months of service.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Monthly Linear Vesting:</strong> Remaining 75% vests in equal monthly increments over the remaining 36 months (1/48th per month).</span></li>
          </ul>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ EMPLOYMENT CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Custom Tech Employment Contracts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts bespoke Employment Agreements, PIIPA forms, and stock option documentation for software companies and tech startups in US, UK, UAE, and Pakistan.
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

        {/* SECTION 4 */}
        <div id="exclusivity-moonlighting" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Exclusivity & Anti-Moonlighting Provisions
          </h2>
          <p>
            With the rise of remote work, software developers frequently attempt "double employment" (working two full-time remote developer jobs simultaneously).
          </p>
          <p>
            Your employment agreement must contain an explicit <strong>Exclusivity & Full-Time Commitment Clause</strong> prohibiting employees from taking secondary employment, freelance side gigs, or consulting work during employment without prior written CEO approval.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="probation-notice-periods" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Probationary Windows & Termination Notice Periods
          </h2>
          <p>
            Specify a 3-to-6 month <strong>Probationary Period</strong> during which either party can terminate employment with a shortened notice period (e.g. 1 week). Post-probation notice periods for senior engineering leads should range from 1 to 3 months to allow adequate knowledge transfer.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="remote-compliance" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Local W-2 vs International Remote Hiring Compliance
          </h2>
          <p>
            Ensure compliance with local statutory benefits, mandatory pension contributions, paid annual leave, and severance rules when hiring staff in foreign countries via Employer of Record (EOR) structures or localized employment contracts.
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
            TECH HR & EMPLOYMENT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Draft Your Tech Employment Contracts
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Custom employment agreements, PIIPA invention assignment forms, stock option vesting schedules, and remote worker compliance packets drafted by Advocate High Court.
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
