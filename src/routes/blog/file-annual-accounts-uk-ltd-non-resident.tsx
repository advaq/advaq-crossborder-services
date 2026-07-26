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
  Scale,
  Percent,
  Receipt,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "What is the deadline for a new UK LTD company to file its first Annual Accounts?",
    a: "For a newly incorporated UK Limited Company, your first Annual Accounts are due **21 months** from the date of incorporation (or 9 months after your first financial year-end date). Subsequent annual accounts are due exactly 9 months after each accounting reference date.",
  },
  {
    q: "Can a non-resident director file Micro-Entity Accounts for a small UK LTD?",
    a: "Yes. Most small, foreign-owned UK LTD companies qualify for the Micro-Entity filing regime (turnover under £632,000, balance sheet under £316,000, 10 or fewer employees), allowing simplified balance sheets and reduced public disclosures.",
  },
  {
    q: "What is the penalty for late filing of Annual Accounts with Companies House?",
    a: "Late filing penalties start at £150 for 1 day to 1 month late, increasing to £375 (1 to 3 months), £750 (3 to 6 months), and £1,500 (over 6 months). Penalties double if accounts are late two consecutive years.",
  },
  {
    q: "Do I need a certified UK chartered accountant to prepare my annual accounts?",
    a: "While you are legally permitted to file accounts yourself, HMRC and Companies House require strict iXBRL digital tagging format. Engaging a certified UK tax advisory firm like ADVAQ ensures 100% compliance without technical tagging errors.",
  },
  {
    q: "Must a dormant UK company file annual accounts?",
    a: "Yes. Dormant companies must file annual 'Dormant Accounts' (Form AA02) with Companies House every year to maintain active corporate standing.",
  },
  {
    q: "What is the difference between the Companies House deadline and the HMRC tax deadline?",
    a: "Annual Accounts must be filed with Companies House within 9 months of your financial year-end. Corporation Tax payment is due to HMRC at 9 months and 1 day, while the CT600 return itself is due at 12 months.",
  },
  {
    q: "Can I shorten or extend my company's financial accounting period?",
    a: "Yes. You can change your accounting reference date by filing Form AA01 with Companies House online. You can extend an accounting period once every 5 years up to a maximum of 18 months.",
  },
  {
    q: "Will Companies House grant a deadline extension for overseas directors?",
    a: "Companies House only grants filing extensions for unforeseen external emergencies (such as medical emergencies or natural disasters) if requested before the filing deadline passes.",
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
    "Exhaustive 2026 accounting guide for foreign directors on preparing Companies House Annual Accounts, Micro-Entity rules, iXBRL digital tagging, and HMRC CT600 submission.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/file-annual-accounts-uk-ltd-non-resident",
};

export const Route = createFileRoute("/blog/file-annual-accounts-uk-ltd-non-resident")({
  head: () => ({
    meta: [
      { title: "File Annual Accounts UK LTD Non-Resident (2026 Masterclass) | ADVAQ" },
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
            An exhaustive accounting masterclass for foreign directors on statutory financial reporting, Micro-Entity balance sheets, iXBRL digital formatting, and Companies House deadlines in 2026.
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
              <span>FRS 105 & iXBRL Statutory Compliance</span>
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
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Key statutory reporting rules for foreign-owned UK companies:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">9-Month Filing Window</strong>
              <p className="text-navy-100 leading-relaxed">
                Annual accounts must be submitted to Companies House within 9 months of your financial year-end.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Micro-Entity Regime (FRS 105)</strong>
              <p className="text-navy-100 leading-relaxed">
                Small UK LTDs (turnover under £632,000) qualify for simplified balance sheet disclosures.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">iXBRL Digital Format</strong>
              <p className="text-navy-100 leading-relaxed">
                Accounts submitted to Companies House and HMRC must be digitally tagged in Inline XBRL format.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Automatic Fines</strong>
              <p className="text-navy-100 leading-relaxed">
                Missing deadlines results in automatic financial penalties starting at £150 up to £1,500.
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
            <li><a href="#what-are-annual-accounts" className="hover:text-gold-600 underline">1. What Are Statutory Annual Accounts?</a></li>
            <li><a href="#micro-entity-rules" className="hover:text-gold-600 underline">2. Micro-Entity Accounting Regime (FRS 105)</a></li>
            <li><a href="#accounting-period" className="hover:text-gold-600 underline">3. Understanding Your Financial Year-End & Deadlines</a></li>
            <li><a href="#penalty-matrix" className="hover:text-gold-600 underline">4. Annual Accounts & Late Penalty Schedule Matrix</a></li>
            <li><a href="#ixbrl-formatting" className="hover:text-gold-600 underline">5. What is iXBRL Digital Tagging?</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Accounting Mistakes Overseas Directors Make</a></li>
            <li><a href="#workflow-steps" className="hover:text-gold-600 underline">7. Step-by-Step Annual Accounts Preparation Workflow</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-are-annual-accounts" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Are Statutory Annual Accounts?
          </h2>
          <p>
            Under Part 15 of the <em>UK Companies Act 2006</em>, directors of every UK company are legally required to prepare statutory <strong>Annual Accounts</strong> at the end of each financial year.
          </p>
          <p>
            Annual Accounts provide a formal financial summary of your company's trading performance over a 12-month accounting reference period. They are submitted to Companies House for public record and attached to your HMRC Corporation Tax Return (CT600).
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: On-Time Micro-Entity Filing
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Kashif, a software agency founder in Pakistan operating a UK LTD. Kashif's financial year ends on July 31. His Companies House deadline for annual accounts is April 30 of the following year. Kashif provided his Xero bank transaction records to ADVAQ in January. ADVAQ prepared his FRS 105 Micro-Entity accounts with iXBRL tagging and submitted them 3 months ahead of the deadline.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="micro-entity-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Micro-Entity Accounting Regime (FRS 105)
          </h2>
          <p>
            For overseas founders operating a lean IT agency, consulting firm, or e-commerce store, UK law offers a highly advantageous reporting standard known as <strong>Micro-Entity Accounts (FRS 105)</strong>:
          </p>

          <div className="bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6">
            <h4 className="font-bold text-navy-950 text-base flex items-center gap-2">
              <Calculator className="text-gold-600" size={20} />
              Micro-Entity Qualification Thresholds:
            </h4>
            <p className="text-xs text-gray-600">
              Your company qualifies as a Micro-Entity if it meets at least two of the following conditions:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-4 rounded-xl border border-border text-center shadow-sm">
                <span className="font-bold text-emerald-600 text-lg block">&le; £632,000</span>
                <span className="text-navy-950 block mt-1 font-semibold">Annual Turnover</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-border text-center shadow-sm">
                <span className="font-bold text-gold-600 text-lg block">&le; £316,000</span>
                <span className="text-navy-950 block mt-1 font-semibold">Balance Sheet Total</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-border text-center shadow-sm">
                <span className="font-bold text-navy-950 text-lg block">&le; 10</span>
                <span className="text-navy-950 block mt-1 font-semibold">Employees (Average)</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="accounting-period" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Understanding Your Financial Year-End & Deadlines
          </h2>
          <p>
            When a UK Limited Company is formed, your financial year-end is automatically set to the last day of the month in which the company was incorporated.
          </p>
          <p>
            For example, if incorporated on <strong>July 15, 2026</strong>, your accounting reference period ends on <strong>July 31, 2027</strong>. Your first annual accounts are due 21 months from incorporation (or 9 months post year-end).
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="penalty-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Annual Accounts & Late Penalty Schedule Matrix
          </h2>
          <p>
            Companies House strictly enforces financial penalties for late annual accounts submissions:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Delay Period</th>
                  <th className="p-4 text-gold-500">First-Time Late Penalty</th>
                  <th className="p-4 text-rose-400">Consecutive Year Penalty</th>
                  <th className="p-4">Companies House Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">1 Day to 1 Month Late</td>
                  <td className="p-4 text-rose-700 font-bold">£150</td>
                  <td className="p-4 text-rose-700 font-bold">£300 (Doubled)</td>
                  <td className="p-4 text-navy-900">Late Filing Penalty Notice Issued</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">1 Month to 3 Months Late</td>
                  <td className="p-4 text-rose-700 font-bold">£375</td>
                  <td className="p-4 text-rose-700 font-bold">£750 (Doubled)</td>
                  <td className="p-4 text-navy-900">Warning Letter Sent to Registered Address</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">3 Months to 6 Months Late</td>
                  <td className="p-4 text-rose-700 font-bold">£750</td>
                  <td className="p-4 text-rose-700 font-bold">£1,500 (Doubled)</td>
                  <td className="p-4 text-rose-700 font-bold">Compulsory Strike-Off Warning</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">More than 6 Months Late</td>
                  <td className="p-4 text-rose-700 font-bold">£1,500</td>
                  <td className="p-4 text-rose-700 font-bold">£3,000 (Doubled)</td>
                  <td className="p-4 text-rose-700 font-bold">Gazette Dissolution & Bank Freeze</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
              Explore Annual Accounts Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="ixbrl-formatting" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. What is iXBRL Digital Tagging?
          </h2>
          <p>
            Both Companies House and HMRC require statutory accounts to be formatted in <strong>Inline eXtensible Business Reporting Language (iXBRL)</strong>.
          </p>
          <p>
            iXBRL embeds machine-readable computer code into financial statements, allowing tax algorithms to verify line items automatically. ADVAQ handles all technical iXBRL tagging internally.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Accounting Mistakes Overseas Directors Make
          </h2>
          <p>
            Avoid these six frequent statutory accounting errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Confusing Companies House 9-Month Deadline with HMRC 12-Month Limit
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Accounts are due at Companies House in 9 months, whereas the CT600 return is due at 12 months. Delaying accounts until month 12 triggers automatic Companies House late fines.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Submitting PDF Documents Without iXBRL Computer Tagging
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Submitting plain PDF accounts without Inline XBRL data tags results in immediate Companies House portal rejection.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="workflow-steps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Step-by-Step Annual Accounts Preparation Workflow
          </h2>
          <p>
            Follow this step-by-step accounting workflow:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Gather Transaction & Bank Statements</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Provide Wise/Payoneer statements and sales invoice records to your ADVAQ dedicated tax accountant.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Draft FRS 105 Micro-Entity Statements</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  ADVAQ prepares Profit & Loss statements and Balance Sheet disclosures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Generate iXBRL Tags & Electronic Submission</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Accounts are tagged in iXBRL format and submitted directly to Companies House and HMRC via secure API gateways.
                </p>
              </div>
            </div>
          </div>
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
