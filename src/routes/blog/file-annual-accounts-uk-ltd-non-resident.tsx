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
  AlertTriangle,
  FileText,
  Calculator,
  Calendar,
} from "lucide-react";

const faqs = [
  {
    q: "What is the deadline for a new UK LTD company to file its first Annual Accounts?",
    a: "For a new UK Limited Company, your first Annual Accounts are due 21 months from the date of incorporation (or 9 months after your first financial year-end date). SubSEQUENT annual accounts are due exactly 9 months after each accounting reference date.",
  },
  {
    q: "Can a non-resident director file Micro-Entity Accounts for a small UK LTD?",
    a: "Yes. Most small, foreign-owned UK LTD companies qualify for the Micro-Entity filing regime (turnover under £632,000, balance sheet under £316,000, 10 or fewer employees), allowing simplified balance sheets and reduced disclosures.",
  },
  {
    q: "What is the penalty for late filing of Annual Accounts with Companies House?",
    a: "Late filing penalties start at £150 for 1 day late, increasing to £375 (up to 3 months), £750 (3 to 6 months), and £1,500 (over 6 months). Penalties double if accounts are late two years in a row.",
  },
  {
    q: "Do I need a certified UK chartered accountant to prepare my annual accounts?",
    a: "While you are legally permitted to file accounts yourself, HMRC and Companies House require strict iXBRL digital tagging format. Engaging a certified UK tax advisory firm like ADVAQ ensures 100% compliance without technical tagging errors.",
  },
  {
    q: "Must a dormant UK company file annual accounts?",
    a: "Yes. Dormant companies must file annual 'Dormant Accounts' (Form AA02) with Companies House every year to maintain active corporate standing.",
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
  headline: "How to File Annual Accounts for a UK Limited Company as a Non-Resident",
  description:
    "Complete 2026 accounting guide for foreign directors on preparing Companies House Annual Accounts, Micro-Entity rules, iXBRL digital tagging, and HMRC CT600 submission.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/file-annual-accounts-uk-ltd-non-resident",
};

export const Route = createFileRoute("/blog/file-annual-accounts-uk-ltd-non-resident")({
  head: () => ({
    meta: [
      { title: "File Annual Accounts UK LTD Non-Resident (2026 Guide) | ADVAQ" },
      {
        name: "description",
        content:
          "Step-by-step guide for overseas directors to file UK LTD Annual Accounts with Companies House. Micro-entity thresholds, iXBRL format & late penalties.",
      },
      {
        name: "keywords",
        content:
          "file annual accounts uk ltd non resident, micro entity accounts companies house foreign director, ixbrl annual accounts uk company overseas, late filing penalty companies house non resident",
      },
      {
        property: "og:title",
        content: "How to File Annual Accounts for a UK Limited Company as a Non-Resident",
      },
      {
        property: "og:description",
        content:
          "Learn how non-UK resident directors prepare statutory annual accounts, apply micro-entity reporting rules, and avoid Companies House fines.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/file-annual-accounts-uk-ltd-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/file-annual-accounts-uk-ltd-non-resident" }],
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
            <span>UK Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            How to File Annual Accounts for a UK Limited Company as a Non-Resident
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A complete accounting guide for foreign directors on statutory financial reporting, Micro-Entity balance sheets, iXBRL digital formatting, and Companies House deadlines.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal & Accounting Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FRS 105 & iXBRL Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Annual Accounts Rules at a Glance</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>9-Month Filing Window:</strong> Annual accounts must be submitted to Companies House within 9 months of your company's accounting reference date.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Micro-Entity Regime (FRS 105):</strong> Small UK LTDs (turnover under £632,000) qualify for simplified balance sheet disclosures.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>iXBRL Digital Format:</strong> Accounts submitted to Companies House and HMRC must be digitally tagged in Inline XBRL format.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Automatic Fines:</strong> Missing deadlines results in automatic financial penalties starting at £150 up to £1,500.</span>
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
          <ol className="space-y-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#what-are-annual-accounts" className="hover:text-gold-600 underline">1. What Are Statutory Annual Accounts?</a></li>
            <li><a href="#micro-entity-rules" className="hover:text-gold-600 underline">2. Micro-Entity Accounting Regime (FRS 105)</a></li>
            <li><a href="#accounting-period" className="hover:text-gold-600 underline">3. Understanding Your Financial Year-End & Deadlines</a></li>
            <li><a href="#ixbrl-formatting" className="hover:text-gold-600 underline">4. What is iXBRL Digital Tagging?</a></li>
            <li><a href="#late-penalties" className="hover:text-gold-600 underline">5. Companies House Late Filing Penalty Schedule</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-are-annual-accounts" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Are Statutory Annual Accounts?
          </h2>
          <p>
            Under Part 15 of the <em>Companies Act 2006</em>, directors of every UK company are legally required to prepare statutory <strong>Annual Accounts</strong> at the end of each financial year.
          </p>
          <p>
            Annual Accounts provide a formal financial summary of your company's trading performance over a 12-month accounting reference period. They are submitted to Companies House for public record and attached to your HMRC Corporation Tax Return (CT600).
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="micro-entity-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Micro-Entity Accounting Regime (FRS 105)
          </h2>
          <p>
            For overseas founders operating a lean IT agency, consulting firm, or e-commerce store, UK law offers a highly advantageous reporting standard known as <strong>Micro-Entity Accounts (FRS 105)</strong>.
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-4 my-6">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <Calculator className="text-gold-500" size={20} />
              Micro-Entity Qualification Thresholds:
            </h4>
            <p className="text-sm text-gray-700">
              Your company qualifies as a Micro-Entity if it meets at least two of the following conditions:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-4 rounded-lg border border-border text-center">
                <span className="font-bold text-navy-900 text-base block">&le; £632,000</span>
                <span className="text-gray-500 block mt-1">Annual Turnover</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border text-center">
                <span className="font-bold text-navy-900 text-base block">&le; £316,000</span>
                <span className="text-gray-500 block mt-1">Balance Sheet Total</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border text-center">
                <span className="font-bold text-navy-900 text-base block">&le; 10</span>
                <span className="text-gray-500 block mt-1">Employees (Average)</span>
              </div>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK STATUTORY ACCOUNTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your Statutory Annual Accounts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares Micro-Entity & Small Company statutory accounts in compliant iXBRL format for Companies House and HMRC submission.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/annual-accounts"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore Annual Accounts Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="accounting-period" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Understanding Your Financial Year-End & Deadlines
          </h2>
          <p>
            When a UK Limited Company is formed, your financial year-end is automatically set to the last day of the month in which the company was incorporated.
          </p>
          <p>
            For example, if incorporated on <strong>July 15, 2026</strong>, your accounting reference period ends on <strong>July 31, 2027</strong>.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="ixbrl-formatting" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. What is iXBRL Digital Tagging?
          </h2>
          <p>
            Both Companies House and HMRC require statutory accounts to be formatted in <strong>Inline eXtensible Business Reporting Language (iXBRL)</strong>.
          </p>
          <p>
            iXBRL embeds machine-readable computer code into financial statements, allowing tax algorithms to verify line items automatically. ADVAQ handles all technical iXBRL tagging internally.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="late-penalties" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Companies House Late Filing Penalty Schedule
          </h2>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-sm border-collapse border border-border rounded-xl overflow-hidden">
              <thead className="bg-navy-950 text-white font-serif">
                <tr>
                  <th className="p-4 border border-white/10">How Late Is the Filing?</th>
                  <th className="p-4 border border-white/10 text-gold-400">Private Company Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr>
                  <td className="p-4 font-semibold text-dark-text">1 day to 1 month late</td>
                  <td className="p-4 font-semibold text-red-600">£150</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">1 month to 3 months late</td>
                  <td className="p-4 font-semibold text-red-600">£375</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">3 months to 6 months late</td>
                  <td className="p-4 font-semibold text-red-600">£750</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">More than 6 months late</td>
                  <td className="p-4 font-semibold text-red-600">£1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            UK STATUTORY ACCOUNTING & TAX FILING
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your UK Annual Accounts with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Statutory annual accounts preparation, Micro-Entity balance sheets, iXBRL tagging, and joint Companies House & HMRC filing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/annual-accounts"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Annual Accounts Service
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
