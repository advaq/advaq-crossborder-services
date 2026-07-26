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
  Globe2,
  Scale,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "What is the UAE Corporate Tax rate and when does it apply?",
    a: "Under Federal Decree-Law No. 47 of 2022, the UAE enforces a standard 9% Corporate Tax rate on net taxable business profits exceeding AED 375,000 (~$102,000 USD). Net taxable profits up to AED 375,000 are taxed at a 0% rate to support small businesses and early-stage startups.",
  },
  {
    q: "Do UAE Freezone companies get 0% Corporate Tax?",
    a: "Freezone companies can qualify for a 0% Corporate Tax rate on 'Qualifying Income' if they meet Qualifying Freezone Person (QFZP) criteria under Cabinet Decision No. 55 of 2023. This requires deriving income from Qualifying Activities (such as software development, headquarter services, or holding shares), maintaining adequate economic substance in the Freezone, complying with transfer pricing rules, and preparing audited financial statements.",
  },
  {
    q: "What is Small Business Relief (SBR) under UAE Corporate Tax?",
    a: "Under Ministerial Decision No. 73 of 2023, Small Business Relief allows eligible resident taxable persons (Mainland or Freezone) with gross annual revenue under AED 3,000,000 (~$817,000 USD) in current and previous tax periods to elect to be treated as having zero taxable income. Claiming SBR results in a $0 corporate tax liability and waives complex transfer pricing documentation.",
  },
  {
    q: "Must every UAE company register for Corporate Tax even if profits are below AED 375,000?",
    a: "Yes, 100%! All UAE business entities (Freezone and Mainland) are legally required to register for Corporate Tax on the Federal Tax Authority (FTA) EmaraTax portal and obtain a Tax Registration Number (TRN), regardless of whether their revenue or profit levels fall below the tax-free threshold.",
  },
  {
    q: "What is the penalty for late Corporate Tax registration in the UAE?",
    a: "Under Cabinet Decision No. 10 of 2024, the Federal Tax Authority (FTA) enforces an automatic administrative penalty of AED 10,000 ($2,725 USD) on any business entity that fails to submit its Corporate Tax registration application within state-mandated deadlines.",
  },
  {
    q: "Can a company claim Small Business Relief and Qualifying Freezone status at the same time?",
    a: "No. Small Business Relief (SBR) and Qualifying Freezone Person (QFZP) status are mutually exclusive. A Freezone entity that elects to claim Small Business Relief will not be classified as a QFZP for that tax period.",
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
    "Complete 2026 UAE Corporate Tax masterclass guide. Learn 9% tax rates, AED 375k exemption thresholds, Qualifying Freezone Person (QFZP) 0% rules, Small Business Relief (SBR), and FTA registration deadlines.",
  author: { "@type": "Organization", name: "ADVAQ UAE Corporate Tax Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uae-corporate-tax-9-percent-freezone-rules",
};

export const Route = createFileRoute("/blog/uae-corporate-tax-9-percent-freezone-rules")({
  head: () => ({
    meta: [
      { title: "UAE Corporate Tax (9%) & Freezone Rules Guide (2026 Masterclass) | ADVAQ" },
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
            An in-depth Federal Tax Authority (FTA) compliance masterclass for business owners on UAE Corporate Tax rates, AED 375,000 tax-free thresholds, Qualifying Freezone Person (QFZP) 0% rules, and Small Business Relief elections under Federal Decree-Law No. 47 of 2022.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Corporate Tax Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
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
            <span>UAE Corporate Tax Framework Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">0% Tax-Free Threshold</strong>
              <p className="text-navy-100 leading-relaxed">
                Net business profits up to AED 375,000 (~$102,000 USD) are taxed at 0% for all taxable entities.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">9% Standard Tax Rate</strong>
              <p className="text-navy-100 leading-relaxed">
                Net taxable business profits exceeding AED 375,000 are subject to a standard 9% Corporate Tax rate.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Freezone 0% Qualifying Income</strong>
              <p className="text-navy-100 leading-relaxed">
                Qualifying Freezone Persons (QFZP) maintain 0% tax on qualifying cross-border and inter-freezone trade.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Small Business Relief (SBR)</strong>
              <p className="text-navy-100 leading-relaxed">
                Businesses with gross annual revenues under AED 3,000,000 can elect to pay $0 corporate tax.
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
            <li><a href="#tax-overview" className="hover:text-gold-600 underline">1. UAE Federal Corporate Tax Framework Overview</a></li>
            <li><a href="#freezone-qfzp" className="hover:text-gold-600 underline">2. Qualifying Freezone Person (QFZP) 0% Tax Rules</a></li>
            <li><a href="#tax-regimes-matrix" className="hover:text-gold-600 underline">3. Comprehensive UAE Corporate Tax Regimes Matrix</a></li>
            <li><a href="#small-business-relief" className="hover:text-gold-600 underline">4. Small Business Relief (SBR) for Businesses Under AED 3M</a></li>
            <li><a href="#fta-registration" className="hover:text-gold-600 underline">5. Mandatory FTA Tax Registration & AED 10,000 Late Fine</a></li>
            <li><a href="#deductions-bookkeeping" className="hover:text-gold-600 underline">6. Taxable Income Calculations & Expense Deductions</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="tax-overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. UAE Federal Corporate Tax Framework Overview
          </h2>
          <p>
            Effective for financial years starting on or after June 1, 2023, the UAE Ministry of Finance enacted a modern <strong>9% Corporate Tax regime</strong> under Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses.
          </p>
          <p>
            Designed to align the UAE with international tax transparency frameworks (specifically OECD BEPS Pillar Two standards), the law maintains an ultra-competitive tax structure featuring a generous tax-free threshold:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>0% Tax Rate:</strong> Applies to net taxable business profits up to <strong>AED 375,000</strong> (~$102,000 USD).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>9% Standard Tax Rate:</strong> Applies only to net taxable business profits exceeding AED 375,000.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="freezone-qfzp" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Qualifying Freezone Person (QFZP) 0% Tax Rules
          </h2>
          <p>
            Under Cabinet Decision No. 55 of 2023 and Ministerial Decision No. 265 of 2023, Freezone companies can maintain a <strong>0% Corporate Tax rate</strong> on Qualifying Income if they achieve <strong>Qualifying Freezone Person (QFZP)</strong> status by satisfying five strict conditions:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Briefcase className="text-gold-600" size={18} />
                1. Deriving Income from Qualifying Activities
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Income derived from transactions with other Freezone entities, or cross-border trade involving qualifying activities (software manufacturing, re-export trading, headquarter services, fund management, and holding company activities).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                2. Maintaining Adequate Economic Substance
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Maintaining physical office space, incurring adequate operating expenditure, and employing qualified full-time personnel within the UAE Freezone.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Percent className="text-gold-600" size={18} />
                3. Complying with De Minimis Revenue Threshold
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Non-qualifying revenue derived from mainland transactions must not exceed 5% of total revenue or AED 5,000,000 (whichever is lower).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileText className="text-gold-600" size={18} />
                4. Audited Financial Statements & Transfer Pricing
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Preparing audited financial statements under IFRS and complying with arm's-length transfer pricing rules under Section 34.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="tax-regimes-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive UAE Corporate Tax Regimes Matrix
          </h2>
          <p>
            Detailed comparative analysis of UAE Corporate Tax compliance categories:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Tax Regime Category</th>
                  <th className="p-4 text-gold-500">Gross Annual Revenue Threshold</th>
                  <th className="p-4 text-emerald-400">Effective Tax Rate %</th>
                  <th className="p-4">Audited Financials Required</th>
                  <th className="p-4">Transfer Pricing Mandate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Qualifying Freezone Person (QFZP)</td>
                  <td className="p-4 text-navy-900">Unlimited (De Minimis Rule applies)</td>
                  <td className="p-4 text-emerald-700 font-bold">0% on Qualifying Income</td>
                  <td className="p-4 text-emerald-700 font-bold">Mandatory (IFRS Standards)</td>
                  <td className="p-4 text-navy-900">Mandatory (Arm's-Length)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Small Business Relief (SBR)</td>
                  <td className="p-4 text-emerald-700 font-bold">Under AED 3,000,000 Revenue</td>
                  <td className="p-4 text-emerald-700 font-bold">0% Tax Liability</td>
                  <td className="p-4 text-navy-900">Optional / Simplified Bookkeeping</td>
                  <td className="p-4 text-emerald-700 font-bold">Exempt from TP Dossiers</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Standard Taxable Entity (Mainland / Non-QFZP)</td>
                  <td className="p-4 text-navy-900">Over AED 375,000 Net Profit</td>
                  <td className="p-4 text-rose-700 font-bold">9% on Profits &gt; AED 375k</td>
                  <td className="p-4 text-navy-900">Mandatory for &gt; AED 50M Revenue</td>
                  <td className="p-4 text-navy-900">Mandatory for Related Parties</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="small-business-relief" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Small Business Relief (SBR) for Businesses Under AED 3M
          </h2>
          <p>
            Under Ministerial Decision No. 73 of 2023, resident taxable entities (both Mainland and non-QFZP Freezone companies) with gross annual revenues below <strong>AED 3,000,000</strong> ($817,000 USD) in current and previous tax periods ending on or before December 31, 2026, can elect to claim <strong>Small Business Relief (SBR)</strong>.
          </p>
          <p>
            Claiming Small Business Relief treats the company as having zero taxable income for that tax period, resulting in a <strong>$0 corporate tax payment</strong> and exempting the entity from preparing complex transfer pricing documentation.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="fta-registration" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Mandatory FTA Tax Registration & AED 10,000 Late Fine
          </h2>
          <p>
            Every legal corporate entity incorporated in the UAE—including 100% foreign-owned Freezone LLCs and Mainland companies—is legally required to register for Corporate Tax on the Federal Tax Authority (FTA) <strong>EmaraTax portal</strong>.
          </p>
          <p>
            Under Cabinet Decision No. 10 of 2024, the FTA enforces an automatic administrative penalty of <strong>AED 10,000</strong> ($2,725 USD) on any business entity that fails to submit its Corporate Tax registration application within prescribed deadlines.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="deductions-bookkeeping" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Taxable Income Calculations & Expense Deductions
          </h2>
          <p>
            Corporate Tax is calculated on net accounting profit prepared in accordance with International Financial Reporting Standards (IFRS).
          </p>
          <p>
            Standard business operating expenses incurred wholly and exclusively for business purposes—such as staff salaries, commercial office rentals, cloud server subscriptions, marketing, and professional advisory fees—are <strong>100% tax-deductible</strong>. Client entertainment expenses are 50% deductible.
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
            UAE CORPORATE TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure 100% Corporate Tax Compliance with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            EmaraTax registration, QFZP 0% qualification audits, Small Business Relief filings, and corporate tax return preparation handled by ADVAQ.
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
