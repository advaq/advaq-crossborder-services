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
  Receipt,
  FileText,
  Calculator,
  FolderCheck,
} from "lucide-react";

const faqs = [
  {
    q: "How long must an overseas UK LTD company keep accounting records and receipts?",
    a: "Under Section 388 of the Companies Act 2006 and HMRC rules, a private UK Limited Company must preserve all statutory accounting records, bank statements, sales invoices, and supplier receipts for at least 6 years from the end of the relevant financial year.",
  },
  {
    q: "What accounting software is best for managing a UK LTD from overseas?",
    a: "Cloud accounting platforms like Xero and QuickBooks Online are ideal for non-resident directors. They support multi-currency transactions, automatic Wise/Payoneer bank feeds, and HMRC Making Tax Digital (MTD) compliance.",
  },
  {
    q: "Can I record expenses paid in USD or PKR in my UK company accounts?",
    a: "Yes. Foreign currency transactions must be converted into British Pounds (GBP) using the official spot exchange rate on the date of transaction (or HMRC monthly average exchange rates).",
  },
  {
    q: "What happens if a UK company fails to maintain adequate accounting records?",
    a: "Failing to keep proper accounting records is a criminal offense under Section 387 of the Companies Act 2006. Directors face personal fines up to £3,000 and potential disqualification as a director.",
  },
  {
    q: "Should I separate my personal bank account from my UK LTD business bank account?",
    a: "Yes, 100%. A UK Limited Company is a separate legal entity. Commingling personal and company funds breaches corporate veil protections and creates complex director loan account tax liabilities.",
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
  headline: "Bookkeeping Best Practices for Overseas UK Limited Companies",
  description:
    "Complete 2026 bookkeeping guide for foreign directors. Learn 6-year statutory record keeping rules, multi-currency FX conversions, cloud software setup, and HMRC audit compliance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uk-ltd-bookkeeping-non-resident",
};

export const Route = createFileRoute("/blog/uk-ltd-bookkeeping-non-resident")({
  head: () => ({
    meta: [
      { title: "UK LTD Bookkeeping Non-Resident Best Practices (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Bookkeeping & accounting records guide for non-UK resident company directors. 6-year record keeping rules, multi-currency conversions & cloud software.",
      },
      {
        name: "keywords",
        content:
          "uk ltd bookkeeping non resident, statutory accounting record keeping 6 years hmrc, multi currency forex bookkeeping uk company, cloud accounting xero quickbooks uk ltd overseas",
      },
      {
        property: "og:title",
        content: "Bookkeeping Best Practices for Overseas UK Limited Companies",
      },
      {
        property: "og:description",
        content:
          "Discover how foreign directors manage digital bookkeeping, convert foreign currencies to GBP, and comply with HMRC 6-year record retention rules.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-ltd-bookkeeping-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-ltd-bookkeeping-non-resident" }],
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
            Bookkeeping Best Practices for Overseas UK Limited Companies
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive accounting standards guide for foreign directors on statutory 6-year record retention, foreign exchange currency conversions, cloud software integration, and HMRC audit readiness.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Accounting Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Companies Act Section 386 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Bookkeeping Rules at a Glance</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>6-Year Record Retention:</strong> HMRC requires private UK companies to keep all bank statements, invoices, and expense receipts for at least 6 years.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>GBP Base Currency:</strong> Accounts must be prepared in British Pounds (GBP). Foreign currency transactions (USD, EUR, PKR) are converted using spot or HMRC monthly FX rates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Strict Banking Separation:</strong> Never commingle personal and corporate funds to prevent Director's Loan Account (DLA) tax surcharges.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Cloud Software Sync:</strong> Integrate Wise/Payoneer bank feeds directly with Xero or QuickBooks for Making Tax Digital (MTD) compliance.</span>
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
            <li><a href="#section-386-duty" className="hover:text-gold-600 underline">1. Statutory Duty to Keep Accounting Records (Section 386)</a></li>
            <li><a href="#6-year-rule" className="hover:text-gold-600 underline">2. The 6-Year HMRC Record Retention Mandate</a></li>
            <li><a href="#multi-currency-forex" className="hover:text-gold-600 underline">3. Managing Multi-Currency FX Transactions (USD/EUR/PKR)</a></li>
            <li><a href="#cloud-accounting" className="hover:text-gold-600 underline">4. Cloud Accounting Setup for Overseas Founders</a></li>
            <li><a href="#directors-loan-account" className="hover:text-gold-600 underline">5. Avoiding Director's Loan Account (DLA) Tax Pitfalls</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="section-386-duty" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Statutory Duty to Keep Accounting Records (Section 386)
          </h2>
          <p>
            Under Section 386 of the <em>Companies Act 2006</em>, every UK company must keep accounting records that are sufficient to show and explain the company's transactions.
          </p>
          <p>
            The records must disclose with reasonable accuracy, at any time, the financial position of the company and enable the directors to ensure that statutory accounts comply with UK accounting standards.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="6-year-rule" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The 6-Year HMRC Record Retention Mandate
          </h2>
          <p>
            HMRC enforces a strict <strong>6-year record retention rule</strong> starting from the end of the relevant accounting period.
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <FolderCheck className="text-gold-500" size={20} />
              What Digital Documents Must Be Archived:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Sales Invoices & Receipts:</strong> All outgoing client invoices and proof of customer payments.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Supplier Bills & SaaS Receipts:</strong> Bills for web hosting, software subscriptions, advertising spend, and contractor fees.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Bank Statements:</strong> Monthly PDF bank statements for all UK and multi-currency accounts (Wise, Payoneer, Revolut).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Contracts & Agreements:</strong> Client contracts, Master Service Agreements, and contractor statements of work.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="multi-currency-forex" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Managing Multi-Currency FX Transactions (USD/EUR/PKR)
          </h2>
          <p>
            Non-resident UK companies frequently receive payments in USD or EUR and pay remote contractor expenses in local currencies like PKR or AED.
          </p>
          <p>
            Because UK statutory accounts must be submitted in <strong>British Pounds (GBP)</strong>, foreign currency transactions must be translated using spot exchange rates on the date of transaction or official HMRC monthly average exchange rates.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK MONTHLY BOOKKEEPING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Professional Monthly UK Bookkeeping Service
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages cloud bookkeeping, multi-currency bank reconciliations, receipt management, and Making Tax Digital (MTD) setup for non-resident UK directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/bookkeeping"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK Bookkeeping Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="cloud-accounting" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Cloud Accounting Setup for Overseas Founders
          </h2>
          <p>
            Adopting modern cloud accounting software is mandatory for seamless remote management:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-base mb-2">
                <Calculator size={20} />
                <span>Xero Cloud Accounting</span>
              </div>
              <p className="text-sm text-gray-600">
                Offers direct automated bank feeds with Wise Business and Revolut, multi-currency ledger support, and seamless MTD VAT integration.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-navy-700 font-semibold text-base mb-2">
                <Receipt size={20} />
                <span>QuickBooks Online</span>
              </div>
              <p className="text-sm text-gray-600">
                Provides automated receipt snapping, mobile invoicing, and real-time profit and loss tracking for overseas founders.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="directors-loan-account" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Avoiding Director's Loan Account (DLA) Tax Pitfalls
          </h2>
          <p>
            If a director withdraws company money that is NOT classified as salary, dividend, or expense reimbursement, it is treated as a <strong>Director's Loan</strong>.
          </p>
          <p>
            If a Director's Loan Account remains overdrawn by more than £10,000 at year-end and is not repaid within 9 months and 1 day of your accounting period end, HMRC charges a <strong>Section 455 tax surcharge of 33.75%</strong> on the overdrawn balance.
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
            UK MONTHLY BOOKKEEPING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Outsource Your UK Bookkeeping to ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Dedicated cloud bookkeeping, multi-currency reconciliations, receipt archiving, and HMRC audit compliance for non-resident directors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/bookkeeping"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Bookkeeping Service
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
