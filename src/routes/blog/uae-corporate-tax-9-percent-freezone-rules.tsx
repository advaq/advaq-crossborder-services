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
  Building2,
  DollarSign,
  Percent,
  Landmark,
} from "lucide-react";

const faqs = [
  {
    q: "What is the UAE Corporate Tax rate and when does it apply?",
    a: "Under Federal Decree-Law No. 47 of 2022, the UAE enforces a standard 9% Corporate Tax rate on net taxable business profits exceeding AED 375,000 (~$102,000 USD). Profits up to AED 375,000 are taxed at 0%.",
  },
  {
    q: "Do UAE Freezone companies get 0% Corporate Tax?",
    a: "Freezone companies can qualify for a 0% Corporate Tax rate on 'Qualifying Income' if they meet Qualifying Freezone Person (QFZP) criteria under Cabinet Decision No. 55 of 2023, maintain adequate substance in the Freezone, and do not elect to be subject to standard tax rates.",
  },
  {
    q: "What is Small Business Relief (SBR) under UAE Corporate Tax?",
    a: "Small Business Relief allows eligible resident taxable persons (Mainland or Freezone) with annual revenue under AED 3,000,000 to elect to be treated as having zero taxable income for tax periods ending on or before December 31, 2026.",
  },
  {
    q: "Must every UAE company register for Corporate Tax even if profits are below AED 375,000?",
    a: "Yes, 100%! All UAE entities (Freezone and Mainland) must register for Corporate Tax with the Federal Tax Authority (FTA) and obtain a Corporate Tax Registration Number (TRN), regardless of revenue or profit levels.",
  },
  {
    q: "What is the penalty for late Corporate Tax registration in the UAE?",
    a: "The FTA imposes an automatic administrative penalty of AED 10,000 for failing to submit a Corporate Tax registration application within the prescribed deadline.",
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
  headline: "UAE Corporate Tax (9%) Guide: Exemption Thresholds & Freezone Qualifying Rules",
  description:
    "Complete 2026 UAE Corporate Tax guide. Learn 9% tax rates, AED 375k exemption thresholds, Qualifying Freezone Person (QFZP) 0% rules, Small Business Relief (SBR), and FTA registration deadlines.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uae-corporate-tax-9-percent-freezone-rules",
};

export const Route = createFileRoute("/blog/uae-corporate-tax-9-percent-freezone-rules")({
  head: () => ({
    meta: [
      { title: "UAE Corporate Tax (9%) & Freezone Rules Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "UAE Corporate Tax guide for Freezone & Mainland companies. 9% tax rate, AED 375k threshold, 0% Qualifying Freezone income rules & Small Business Relief (SBR).",
      },
      {
        name: "keywords",
        content:
          "uae corporate tax 9 percent freezone rules, qualifying freezone person qfzp 0 percent uae, small business relief sbr 3 million aed uae, fta corporate tax registration trn penalty 10000",
      },
      {
        property: "og:title",
        content: "UAE Corporate Tax (9%) Guide: Exemption Thresholds & Freezone Qualifying Rules",
      },
      {
        property: "og:description",
        content:
          "Master UAE Federal Corporate Tax rules, AED 375,000 thresholds, Qualifying Freezone status, and Small Business Relief.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-corporate-tax-9-percent-freezone-rules" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-corporate-tax-9-percent-freezone-rules" }],
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
            <span>UAE Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            UAE Corporate Tax (9%) Guide: Exemption Thresholds & Freezone Qualifying Rules
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An in-depth Federal Tax Authority (FTA) compliance guide for business owners on UAE Corporate Tax rates, AED 375,000 tax-free thresholds, Qualifying Freezone Entity rules, and Small Business Relief elections.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Tax Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>9 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Federal Decree-Law No. 47 of 2022 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>UAE Corporate Tax Essentials</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>0% Tax Threshold:</strong> Net business profits up to AED 375,000 (~$102,000 USD) are taxed at 0%.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>9% Standard Tax Rate:</strong> Net taxable profits exceeding AED 375,000 are taxed at 9%.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Freezone 0% Qualifying Income:</strong> Freezone entities can maintain 0% tax on qualifying cross-border and inter-freezone trade.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Small Business Relief (SBR):</strong> Businesses with under AED 3,000,000 annual revenue pay $0 corporate tax.</span>
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
            <li><a href="#tax-overview" className="hover:text-gold-600 underline">1. UAE Federal Corporate Tax Framework Overview</a></li>
            <li><a href="#freezone-qfzp" className="hover:text-gold-600 underline">2. Qualifying Freezone Person (QFZP) 0% Rules</a></li>
            <li><a href="#small-business-relief" className="hover:text-gold-600 underline">3. Small Business Relief (SBR) for Businesses Under AED 3M</a></li>
            <li><a href="#fta-registration" className="hover:text-gold-600 underline">4. Mandatory FTA Tax Registration & AED 10,000 Late Fine</a></li>
            <li><a href="#deductions-bookkeeping" className="hover:text-gold-600 underline">5. Deductible Expenses & Audited Financial Statement Rules</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="tax-overview" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. UAE Federal Corporate Tax Framework Overview
          </h2>
          <p>
            Effective for financial years starting on or after June 1, 2023, the UAE Ministry of Finance enacted a modern <strong>9% Corporate Tax regime</strong> under Federal Decree-Law No. 47 of 2022.
          </p>
          <p>
            Designed to align the UAE with international tax transparency standards (OECD BEPS IF), the law maintains a zero-tax environment for small businesses and qualifying freezone entities while taxing large commercial enterprises fairly.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="freezone-qfzp" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Qualifying Freezone Person (QFZP) 0% Rules
          </h2>
          <p>
            To maintain a <strong>0% Corporate Tax rate</strong> on Qualifying Income under Cabinet Decision No. 55 of 2023, a Freezone company must satisfy five criteria:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Derive income from Qualifying Activities (e.g. software development, headquarter services, holding shares, re-export trading).</li>
            <li>Maintain adequate physical substance in the UAE Freezone.</li>
            <li>Comply with arm's-length transfer pricing rules under Section 34.</li>
            <li>Prepare audited financial statements.</li>
            <li>Derive non-qualifying revenue that does not exceed the De Minimis threshold (5% of total revenue or AED 5,000,000).</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE CORPORATE TAX ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register & File UAE Corporate Tax with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts QFZP eligibility assessments, registers your business with the FTA, files Small Business Relief elections, and prepares corporate tax returns.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/corporate-tax-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Corporate Tax Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="small-business-relief" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Small Business Relief (SBR) for Businesses Under AED 3M
          </h2>
          <p>
            Under Ministerial Decision No. 73 of 2023, resident taxable entities with gross annual revenue under <strong>AED 3,000,000</strong> in current and previous tax periods can elect to claim Small Business Relief.
          </p>
          <p>
            Claiming SBR means the entity pays $0 corporate tax and is exempt from complex transfer pricing documentation.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="fta-registration" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Mandatory FTA Tax Registration & AED 10,000 Late Fine
          </h2>
          <p>
            Every UAE business entity is legally required to register for Corporate Tax on the EmaraTax portal.
          </p>
          <p>
            The FTA enforces a strict <strong>AED 10,000 administrative penalty</strong> on companies that fail to submit their registration within state-mandated timelines.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="deductions-bookkeeping" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Deductible Expenses & Audited Financial Statement Rules
          </h2>
          <p>
            Standard business expenses incurred wholly and exclusively for business purposes (salaries, office leases, marketing, software subscriptions) are deductible from taxable revenue. Entertainment expenses are 50% deductible.
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
            UAE CORPORATE TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure 100% Corporate Tax Compliance with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            EmaraTax registration, QFZP 0% qualification audits, Small Business Relief filings, and corporate tax return preparation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/corporate-tax-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Corporate Tax Service
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
