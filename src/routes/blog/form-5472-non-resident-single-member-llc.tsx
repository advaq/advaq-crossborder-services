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
  FileText,
  AlertTriangle,
  DollarSign,
} from "lucide-react";

const faqs = [
  {
    q: "Must a foreign-owned single-member US LLC file IRS Form 5472 even if it had zero income?",
    a: "Yes, 100%. Under Treasury Regulations Section 1.6038A-1, a foreign-owned single-member US LLC is treated as a US corporation for reporting purposes. It must file Form 5472 along with a pro-forma Form 1120 annually, even if it generated zero revenue or $0 taxable income.",
  },
  {
    q: "What is the deadline for filing IRS Form 5472?",
    a: "The deadline for filing Form 5472 and pro-forma Form 1120 is April 15 following the end of the tax year (or October 15 if an extension is requested via Form 7004).",
  },
  {
    q: "What is considered a 'reportable transaction' on Form 5472?",
    a: "Reportable transactions include any transfer of money or property between the foreign owner and the LLC, including capital contributions, owner's draws, loans, management fees, or software expense reimbursements.",
  },
  {
    q: "Can I file Form 5472 online through the IRS e-file portal?",
    a: "No. Foreign-owned single-member LLCs filing Form 5472 with a pro-forma Form 1120 cannot use standard IRS e-file. They must be submitted via fax or mail to the IRS Special Processing Unit in Ogden, Utah.",
  },
  {
    q: "What happens if I fail to file Form 5472 on time?",
    a: "The IRS imposes an automatic, mandatory initial penalty of $25,000 for failing to file Form 5472 or filing an incomplete form.",
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
  headline: "IRS Form 5472 & 1120 Filing Requirements for Foreign-Owned Single-Member LLCs",
  description:
    "Complete 2026 IRS tax compliance guide for foreign non-resident single-member LLC owners. Learn Form 5472 reporting rules, pro-forma 1120 instructions, reportable transactions, and April 15 deadlines.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/form-5472-non-resident-single-member-llc",
};

export const Route = createFileRoute("/blog/form-5472-non-resident-single-member-llc")({
  head: () => ({
    meta: [
      { title: "IRS Form 5472 & 1120 Foreign Single Member LLC (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Form 5472 & pro-forma Form 1120 guide for foreign-owned single-member US LLCs. Reportable transactions, April 15 deadline & $25,000 IRS penalty avoidance.",
      },
      {
        name: "keywords",
        content:
          "form 5472 non resident single member llc, irs pro forma 1120 foreign owner us llc, section 6038a reportable transactions owner draw, form 5472 april 15 deadline",
      },
      {
        property: "og:title",
        content: "IRS Form 5472 & 1120 Filing Requirements for Foreign-Owned Single-Member LLCs",
      },
      {
        property: "og:description",
        content:
          "Master IRS Section 6038A reporting obligations for foreign non-resident single-member US LLCs to avoid $25,000 late penalties.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/form-5472-non-resident-single-member-llc" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/form-5472-non-resident-single-member-llc" }],
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
            <span>US Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            IRS Form 5472 & 1120 Filing Requirements for Foreign-Owned Single-Member LLCs
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive IRS tax compliance guide for non-resident alien founders on Section 6038A regulations, pro-forma Form 1120 attachments, reportable transactions, and April 15 submission deadlines.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Tax Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>9 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Treasury Reg Section 1.6038A-1 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Form 5472 Compliance Highlights</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Mandatory Tax Reporting:</strong> All 25%+ foreign-owned single-member US LLCs must file Form 5472 annually with IRS.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Pro-Forma Form 1120:</strong> Form 5472 must be attached to a pro-forma Form 1120 (U.S. Corporation Income Tax Return) with "Foreign-owned U.S. DE" written at the top.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Reportable Transactions:</strong> Must disclose capital injections, owner's draws, loans, and business expense reimbursements between foreign owner and LLC.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Strict $25,000 Fine:</strong> Failing to file on time triggers an automatic $25,000 IRS penalty.</span>
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
            <li><a href="#why-5472-required" className="hover:text-gold-600 underline">1. Why Foreign-Owned Single-Member LLCs Must File Form 5472</a></li>
            <li><a href="#reportable-transactions" className="hover:text-gold-600 underline">2. What Constitutes a Reportable Transaction?</a></li>
            <li><a href="#pro-forma-1120" className="hover:text-gold-600 underline">3. How to Prepare Pro-Forma Form 1120</a></li>
            <li><a href="#deadlines-extension" className="hover:text-gold-600 underline">4. Filing Deadlines (April 15) & Form 7004 Extensions</a></li>
            <li><a href="#submission-method" className="hover:text-gold-600 underline">5. How to Fax Form 5472 Directly to the IRS Ogden Unit</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-5472-required" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Foreign-Owned Single-Member LLCs Must File Form 5472
          </h2>
          <p>
            Under US tax regulations updated in 2017 (T.D. 9796), foreign-owned single-member LLCs (Disregarded Entities) are treated as US corporations solely for the purpose of <strong>Section 6038A information reporting</strong>.
          </p>
          <p>
            This rule applies to any US LLC where a foreign non-resident person or entity directly or indirectly owns 25% or more of the company.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="reportable-transactions" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. What Constitutes a Reportable Transaction?
          </h2>
          <p>
            A reportable transaction includes any exchange of money or assets between the LLC and its foreign owner:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Owner's equity contributions (money deposited to form or run the LLC).</li>
            <li>Owner's draws (profit withdrawals transferred overseas).</li>
            <li>Loans between the owner and the LLC.</li>
            <li>Payment of personal software subscriptions or domain fees paid by owner on behalf of LLC.</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div id="pro-forma-1120" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. How to Prepare Pro-Forma Form 1120
          </h2>
          <p>
            Form 5472 cannot be filed alone. It must be attached to a <strong>pro-forma Form 1120</strong>.
          </p>
          <p>
            On Form 1120, you complete the company name, address, EIN, and write <em>"Foreign-owned U.S. DE"</em> at the top of page 1. Income and deduction lines on Form 1120 are left blank because tax pass-through rules apply.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            IRS FORM 5472 TAX FILING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Form 5472 & 1120 Pro-Forma with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares Form 5472, documents reportable transactions, generates pro-forma Form 1120, and faxes directly to the IRS to protect your LLC from $25,000 penalties.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/single-member-llc-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Form 5472 Tax Filing Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="deadlines-extension" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Filing Deadlines (April 15) & Form 7004 Extensions
          </h2>
          <p>
            Form 5472 is due on <strong>April 15</strong> following the close of the calendar tax year.
          </p>
          <p>
            If you need additional time, filing IRS <strong>Form 7004</strong> on or before April 15 grants an automatic 6-month extension to October 15.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="submission-method" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How to Fax Form 5472 Directly to the IRS Ogden Unit
          </h2>
          <p>
            Form 5472 and pro-forma Form 1120 must be faxed to the dedicated IRS unit in Ogden, Utah:
          </p>
          <p>
            <strong>IRS Ogden Fax Number:</strong> <code>+1 (855) 887-7737</code>.
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
            IRS FORM 5472 COMPLIANCE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your Form 5472 with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Pro-forma Form 1120 preparation, reportable transaction auditing, IRS Ogden faxing, and $25,000 penalty protection.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/single-member-llc-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Form 5472 Tax Service
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
