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
  Percent,
  Receipt,
  FileText,
} from "lucide-react";

const faqs = [
  {
    q: "What is Withholding Tax (WHT) under Pakistan tax law?",
    a: "Withholding Tax (WHT) is a tax deduction collected at source by designated withholding agents (including all SECP registered companies) when making payments for goods, services, office rent, contracts, and dividends.",
  },
  {
    q: "What is Section 153 of the Income Tax Ordinance 2001?",
    a: "Section 153 governs withholding tax on payments made for supply of goods, rendering of services, and execution of contracts. Companies must deduct WHT at applicable rates (e.g. 3% to 11% for services) depending on the vendor's Active Taxpayer List (ATL) status.",
  },
  {
    q: "What is Section 152 of the Income Tax Ordinance 2001?",
    a: "Section 152 governs withholding tax on payments made to non-residents (foreign companies or offshore software vendors). Unless covered under a Double Taxation Treaty or Exemption Certificate, payments to non-residents attract 15% to 20% withholding tax.",
  },
  {
    q: "How often must companies file withholding tax statements on FBR Iris?",
    a: "Under Section 165, all companies must file quarterly Withholding Tax Statements (Form 165) on FBR Iris detailing tax deducted from vendors, employees, and landlords.",
  },
  {
    q: "What is the penalty for failing to deduct or deposit Withholding Tax?",
    a: "Failing to deduct or deposit WHT makes the company personally liable to pay the un-deducted tax plus a 12% per annum default surcharge interest under Section 161, and disallows the underlying expense from corporate tax deductions under Section 21(c).",
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
  headline: "Withholding Tax (WHT) Rates & Filings in Pakistan for Companies (Section 153/152)",
  description:
    "Complete 2026 Withholding Tax (WHT) compliance guide for SECP companies in Pakistan. Learn Section 153 (goods & services), Section 152 (non-residents), quarterly Form 165 filing deadlines, and Section 161 penalty rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/withholding-tax-rates-section-152-secp-company",
};

export const Route = createFileRoute("/blog/withholding-tax-rates-section-152-secp-company")({
  head: () => ({
    meta: [
      { title: "Withholding Tax Rates & Section 153/152 Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Withholding tax (WHT) rates guide for SECP companies in Pakistan. Section 153 (services/goods), Section 152 (non-residents), quarterly Form 165 & CPR deposits.",
      },
      {
        name: "keywords",
        content:
          "withholding tax rates section 152 secp company, section 153 withholding tax rates services goods pakistan, quarterly withholding tax statement form 165 fbr iris, section 161 default surcharge withholding tax audit",
      },
      {
        property: "og:title",
        content: "Withholding Tax (WHT) Rates & Filings in Pakistan for Companies (Section 153/152)",
      },
      {
        property: "og:description",
        content:
          "Master FBR Withholding Tax obligations under Section 153 and 152 to protect your corporate expense deductions.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/withholding-tax-rates-section-152-secp-company" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/withholding-tax-rates-section-152-secp-company" }],
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
            <span>Pakistan Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Withholding Tax (WHT) Rates & Filings in Pakistan for Companies (Section 153/152)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive withholding tax compliance guide for corporate finance leads and business owners on FBR WHT rates under Section 153, foreign payments under Section 152, quarterly Form 165 statements, and CPR deposit receipts.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Corporate Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Income Tax Ordinance Ordinance 2001 Section 153/152</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>WHT Corporate Mandate</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Withholding Agent Status:</strong> Every SECP Private Limited company is legally designated as a Withholding Agent.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Section 153 (Local Payments):</strong> Deduct WHT on vendor payments for goods, services, and contracts (rates differ for Filers vs Non-Filers).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Section 152 (Foreign Payments):</strong> Deduct WHT on offshore software licenses and foreign consultant fees.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Quarterly Form 165 Filings:</strong> Submit withholding tax statements on FBR Iris every 3 months.</span>
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
            <li><a href="#withholding-agent-role" className="hover:text-gold-600 underline">1. The Role of SECP Companies as Statutory Withholding Agents</a></li>
            <li><a href="#section-153-rates" className="hover:text-gold-600 underline">2. Section 153 WHT Rates (Goods, Services, Contracts)</a></li>
            <li><a href="#section-152-foreign" className="hover:text-gold-600 underline">3. Section 152 WHT on Payments to Foreign Companies</a></li>
            <li><a href="#quarterly-form-165" className="hover:text-gold-600 underline">4. Submitting Quarterly Withholding Tax Statements (Form 165)</a></li>
            <li><a href="#disallowance-penalties" className="hover:text-gold-600 underline">5. Avoiding Expense Disallowance under Section 21(c)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="withholding-agent-role" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Role of SECP Companies as Statutory Withholding Agents
          </h2>
          <p>
            Under Section 153 of the Income Tax Ordinance 2001, all SECP registered companies automatically act as <strong>Withholding Tax Agents</strong> for the Federal Board of Revenue.
          </p>
          <p>
            When making payments to suppliers, contractors, landlords, or employees, companies must deduct the statutory tax percentage and deposit it into the Federal Treasury via Computerized Payment Receipt (CPR) within 7 days.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="section-153-rates" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Section 153 WHT Rates (Goods, Services, Contracts)
          </h2>
          <p>
            Standard Section 153 WHT rates for active tax filers include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>Supply of Goods:</strong> 4% to 5%</li>
            <li><strong>Services (General):</strong> 8% to 11%</li>
            <li><strong>Specified IT / Software Services:</strong> 3% (reduced rate for certified IT services)</li>
            <li><strong>Execution of Contracts:</strong> 7% to 8%</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            CORPORATE WHT COMPLIANCE SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Manage Corporate Withholding Tax with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ calculates vendor WHT deductions, generates CPR payment receipts, files quarterly Form 165 statements, and protects against Section 161 tax audits.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/withholding-compliance"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Withholding Tax Advisory <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="section-152-foreign" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Section 152 WHT on Payments to Foreign Companies
          </h2>
          <p>
            When a Pakistani company pays foreign offshore vendors for cloud software, international consulting, or digital services under Section 152, WHT must be withheld unless an official SBP or FBR Double Tax Treaty Exemption Certificate is held.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="quarterly-form-165" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Submitting Quarterly Withholding Tax Statements (Form 165)
          </h2>
          <p>
            Under Section 165, companies file electronic withholding tax statements on FBR Iris 2.0 every quarter (Q1: Oct 20, Q2: Jan 20, Q3: Apr 20, Q4: Jul 20).
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="disallowance-penalties" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Avoiding Expense Disallowance under Section 21(c)
          </h2>
          <p>
            Failing to deduct or deposit WHT on vendor invoices causes FBR to disallow the entire underlying expense under Section 21(c), artificially increasing your corporate taxable income.
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
            PAKISTAN CORPORATE WHT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure 100% Withholding Tax Compliance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Section 153 & 152 WHT calculation, CPR payment generation, quarterly Form 165 Iris filings, and Section 161 audit defense.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/withholding-compliance"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Withholding Tax Service
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
