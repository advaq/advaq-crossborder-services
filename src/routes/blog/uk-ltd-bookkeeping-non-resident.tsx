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
  Scale,
  Percent,
  Coins,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "How long must an overseas UK LTD company keep accounting records and receipts?",
    a: "Under Section 388 of the Companies Act 2006 and HMRC rules, a private UK Limited Company must preserve all statutory accounting records, bank statements, sales invoices, and supplier receipts for at least **6 years** from the end of the relevant financial year.",
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
  {
    q: "Are digital copies of paper receipts acceptable for HMRC audit purposes?",
    a: "Yes. HMRC accepts digital receipt scans and electronic PDF invoices, provided the digital copies are legible and securely archived in cloud storage for 6 years.",
  },
  {
    q: "What is a Director's Loan Account (DLA) and how does Section 455 tax work?",
    a: "A DLA tracks money borrowed from or lent to the company by a director. If an overdrawn loan exceeds £10,000 at year-end and is not repaid within 9 months and 1 day, HMRC charges a Section 455 tax surcharge of 33.75%.",
  },
  {
    q: "How does outsourced UK bookkeeping work for non-resident founders?",
    a: "ADVAQ connects directly to your cloud accounting platform (Xero or QuickBooks), reconciles monthly Wise/Payoneer statements, archives expense receipts, and prepares your accounts for seamless annual filing.",
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
    "Exhaustive 2026 bookkeeping guide for foreign directors. Learn 6-year statutory record keeping rules, multi-currency FX conversions, cloud software setup, and HMRC audit compliance.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uk-ltd-bookkeeping-non-resident",
};

export const Route = createFileRoute("/blog/uk-ltd-bookkeeping-non-resident")({
  head: () => ({
    meta: [
      { title: "UK LTD Bookkeeping Non-Resident Best Practices (2026 Masterclass) | ADVAQ" },
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
            An exhaustive accounting standards masterclass for foreign directors on statutory 6-year record retention, foreign exchange currency conversions, cloud software integration, and HMRC audit readiness in 2026.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UK Corporate Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>22 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Companies Act Section 386 Official Compliance Guide</span>
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
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Key statutory record-keeping rules for foreign-owned UK companies:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">6-Year Record Retention</strong>
              <p className="text-navy-100 leading-relaxed">
                HMRC requires private UK companies to keep all bank statements, invoices, and expense receipts for at least 6 years.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">GBP Base Currency</strong>
              <p className="text-navy-100 leading-relaxed">
                Accounts must be prepared in British Pounds (GBP). Foreign currency transactions (USD, EUR, PKR) are converted using spot or HMRC monthly FX rates.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Strict Banking Separation</strong>
              <p className="text-navy-100 leading-relaxed">
                Never commingle personal and corporate funds to prevent Director's Loan Account (DLA) tax surcharges.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Cloud Software Sync</strong>
              <p className="text-navy-100 leading-relaxed">
                Integrate Wise/Payoneer bank feeds directly with Xero or QuickBooks for Making Tax Digital (MTD) compliance.
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
            <li><a href="#section-386-duty" className="hover:text-gold-600 underline">1. Statutory Duty to Keep Accounting Records (Section 386)</a></li>
            <li><a href="#6-year-rule" className="hover:text-gold-600 underline">2. The 6-Year HMRC Record Retention Mandate</a></li>
            <li><a href="#multi-currency-forex" className="hover:text-gold-600 underline">3. Managing Multi-Currency FX Transactions (USD/EUR/PKR)</a></li>
            <li><a href="#bookkeeping-matrix" className="hover:text-gold-600 underline">4. Bookkeeping Systems & Software Matrix</a></li>
            <li><a href="#cloud-accounting" className="hover:text-gold-600 underline">5. Cloud Accounting Setup for Overseas Founders</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Bookkeeping Mistakes to Avoid</a></li>
            <li><a href="#directors-loan-account" className="hover:text-gold-600 underline">7. Avoiding Director's Loan Account (DLA) Tax Pitfalls</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="section-386-duty" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Statutory Duty to Keep Accounting Records (Section 386)
          </h2>
          <p>
            Under Section 386 of the <em>UK Companies Act 2006</em>, every UK company must keep accounting records that are sufficient to show and explain the company's transactions.
          </p>
          <p>
            The records must disclose with reasonable accuracy, at any time, the financial position of the company and enable the directors to ensure that statutory accounts comply with UK accounting standards.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Automated Cloud Bookkeeping
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Bilal, a software house founder in Pakistan operating a UK LTD. Bilal integrated his Wise Business multi-currency accounts directly with Xero. Whenever a US client pays an invoice in USD or Bilal pays a hosting bill in EUR, Xero automatically fetches the transaction feed and applies official HMRC spot FX rates—keeping his accounts 100% audit-ready 365 days a year.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="6-year-rule" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The 6-Year HMRC Record Retention Mandate
          </h2>
          <p>
            HMRC enforces a strict <strong>6-year record retention rule</strong> starting from the end of the relevant accounting period:
          </p>

          <div className="bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6">
            <h4 className="font-bold text-navy-950 text-base flex items-center gap-2">
              <FolderCheck className="text-gold-600" size={20} />
              What Digital Documents Must Be Archived:
            </h4>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span><strong>Sales Invoices & Receipts:</strong> All outgoing client invoices and proof of customer payments.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span><strong>Supplier Bills & SaaS Receipts:</strong> Bills for web hosting, software subscriptions, advertising spend, and contractor fees.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span><strong>Bank Statements:</strong> Monthly PDF bank statements for all UK and multi-currency accounts (Wise, Payoneer, Revolut).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span><strong>Contracts & Agreements:</strong> Client contracts, Master Service Agreements, and contractor statements of work.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="multi-currency-forex" className="space-y-4 mb-14">
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

        {/* SECTION 4 */}
        <div id="bookkeeping-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Bookkeeping Systems & Software Matrix
          </h2>
          <p>
            Side-by-side comparison of bookkeeping solutions for non-resident directors:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Bookkeeping Solution</th>
                  <th className="p-4 text-gold-500">Automated Bank Feeds</th>
                  <th className="p-4 text-emerald-400">Multi-Currency FX Support</th>
                  <th className="p-4">MTD HMRC Compliance</th>
                  <th className="p-4">HMRC Audit Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Outsourced Advisory (ADVAQ)</td>
                  <td className="p-4 text-emerald-700 font-bold">Automated Daily Sync</td>
                  <td className="p-4 text-emerald-700 font-bold">Full Spot Rate Conversion</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Fully Compliant</td>
                  <td className="p-4 text-emerald-700 font-bold">Zero Audit Risk (Guaranteed)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Cloud Software (Xero / QuickBooks)</td>
                  <td className="p-4 text-emerald-700 font-bold">Direct API Integration</td>
                  <td className="p-4 text-emerald-700 font-bold">Automated FX Rates</td>
                  <td className="p-4 text-emerald-700 font-bold">Fully Compliant</td>
                  <td className="p-4 text-navy-900">Low Risk (User Configured)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Manual Spreadsheets (Excel)</td>
                  <td className="p-4 text-rose-700 font-bold">None (Manual Entry)</td>
                  <td className="p-4 text-rose-700 font-bold">Manual Formula FX</td>
                  <td className="p-4 text-rose-700 font-bold">Non-Compliant with MTD</td>
                  <td className="p-4 text-rose-700 font-bold">High Audit & Fine Risk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
              Explore UK Bookkeeping Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="cloud-accounting" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Cloud Accounting Setup for Overseas Founders
          </h2>
          <p>
            Adopting modern cloud accounting software is mandatory for seamless remote management:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Calculator className="text-gold-600" size={18} />
                Xero Cloud Accounting
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Offers direct automated bank feeds with Wise Business and Revolut, multi-currency ledger support, and seamless MTD VAT integration.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Receipt className="text-navy-950" size={18} />
                QuickBooks Online
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provides automated receipt snapping, mobile invoicing, and real-time profit and loss tracking for overseas founders.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Bookkeeping Mistakes to Avoid
          </h2>
          <p>
            Avoid these six frequent bookkeeping errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Commingling Personal & Corporate Funds
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Using personal credit cards for business expenses or withdrawing company money without documentation breaches corporate veil protections.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Failing to Archive Receipts for 6 Years
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Failing to maintain digital copies of expense receipts for 6 years results in HMRC disallowing deduction claims during audits.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="directors-loan-account" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Avoiding Director's Loan Account (DLA) Tax Pitfalls
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
