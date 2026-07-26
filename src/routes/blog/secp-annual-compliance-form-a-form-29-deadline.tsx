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
  FileCheck,
  Calendar,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "What are the mandatory annual compliance filings required by SECP for Private Limited companies?",
    a: "Mandatory annual SECP filings under the Companies Act 2017 include: (1) Form A (Annual Return of Company Capital & Shareholders), (2) Form 29 (Particulars of Directors & Officers), (3) Annual General Meeting (AGM) Minutes, and (4) Filing Audited Financial Statements under Form 23B.",
  },
  {
    q: "What is the deadline to file SECP Form A and Form 29?",
    a: "Form A must be filed within 30 days of holding the Annual General Meeting (AGM), which must take place within 120 days of the company's financial year-end (by October 28 for companies ending June 30). Form 29 must be filed within 14 days of any director or chief executive change.",
  },
  {
    q: "When are Audited Financial Statements required by SECP?",
    a: "Under Section 223 of the Companies Act 2017, all Private Limited companies with a paid-up capital of PKR 3,000,000 or more must have their annual financial statements audited by a SECP registered Chartered Accountant and filed with SECP.",
  },
  {
    q: "What are the penalties for missing annual SECP filing deadlines?",
    a: "Missing SECP annual deadlines results in late filing fees per day, issuance of show-cause notices under Section 479, disqualification of directors under Section 172, and placement on SECP's defaulting list.",
  },
  {
    q: "Do Single Member Companies (SMC-Pvt Ltd) need to file Form A?",
    a: "SMC-Pvt Ltd entities file Form B (Annual Return for Single Member Companies) instead of Form A, alongside Form 29 and annual financial statements.",
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
  headline: "SECP Annual Compliance Checklist: Form A, Form 29 & Financial Audit Deadlines",
  description:
    "Complete 2026 SECP annual compliance checklist for Private Limited & SMC-Pvt Ltd companies in Pakistan. Learn Form A/B, Form 29, AGM minutes, Chartered Accountant audit rules, and SECP late fee penalties.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/secp-annual-compliance-form-a-form-29-deadline",
};

export const Route = createFileRoute("/blog/secp-annual-compliance-form-a-form-29-deadline")({
  head: () => ({
    meta: [
      { title: "SECP Annual Compliance Form A Form 29 Checklist (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "SECP annual compliance guide for Pakistani companies. Learn Form A, Form 29, AGM deadlines, Chartered Accountant financial audits & penalty avoidance.",
      },
      {
        name: "keywords",
        content:
          "secp annual compliance form A form 29 deadline, secp form A annual return filing date agm, chartered accountant financial audit secp 3 million capital, secp defaulting company penalty show cause notice",
      },
      {
        property: "og:title",
        content: "SECP Annual Compliance Checklist: Form A, Form 29 & Financial Audit Deadlines",
      },
      {
        property: "og:description",
        content:
          "Master statutory SECP annual filings, Form A/B returns, Form 29 director updates, and audited financial statements.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/secp-annual-compliance-form-a-form-29-deadline" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/secp-annual-compliance-form-a-form-29-deadline" }],
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
            SECP Annual Compliance Checklist: Form A, Form 29 & Financial Audit Deadlines
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A step-by-step corporate secretarial masterclass for company directors on SECP annual return filings under the Companies Act 2017, Form A/B submissions, Form 29 director notifications, and Chartered Accountant financial audits.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Corporate Secretarial Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SECP Companies Act 2017 Section 130 & 223</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>SECP Annual Compliance Calendar</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form A / Form B:</strong> Annual Return of Company Capital & Shareholders due within 30 days of AGM.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form 29:</strong> Particulars of Directors & Officers due within 14 days of any appointment or resignation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>AGM Holding Mandate:</strong> Hold Annual General Meeting within 120 days of financial year-end (by Oct 28).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Audited Financial Statements:</strong> Mandatory for companies with capital of PKR 3M+ audited by ICAP Chartered Accountant.</span>
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
            <li><a href="#annual-compliance-overview" className="hover:text-gold-600 underline">1. Why SECP Annual Compliance Is Mandatory for Every Company</a></li>
            <li><a href="#form-a-form-b" className="hover:text-gold-600 underline">2. Form A vs Form B Filing Rules & Deadlines</a></li>
            <li><a href="#form-29-directors" className="hover:text-gold-600 underline">3. Form 29: Reporting Changes in Directors & Chief Executive</a></li>
            <li><a href="#financial-audit-rules" className="hover:text-gold-600 underline">4. Statutory Financial Audit Requirements (PKR 3M Threshold)</a></li>
            <li><a href="#secp-penalties" className="hover:text-gold-600 underline">5. Avoiding Show-Cause Notices & Director Disqualifications</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="annual-compliance-overview" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why SECP Annual Compliance Is Mandatory for Every Company
          </h2>
          <p>
            Under the Companies Act 2017, registering a company with SECP brings ongoing corporate secretarial duties.
          </p>
          <p>
            Failure to submit annual returns puts the company on SECP's defaulting list, blocking good standing certificates and bank account operations.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="form-a-form-b" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Form A vs Form B Filing Rules & Deadlines
          </h2>
          <p>
            Multi-member Private Limited companies file <strong>Form A</strong> within 30 days of their Annual General Meeting. Single Member Companies file <strong>Form B</strong>.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SECP ANNUAL COMPLIANCE SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your SECP Annual Compliance Returns with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares Form A/B, Form 29, AGM minutes, manages Chartered Accountant financial audits, and clears SECP default notices.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-annual-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Compliance Filing <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="form-29-directors" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Form 29: Reporting Changes in Directors & Chief Executive
          </h2>
          <p>
            Whenever a director resigns, a new director is appointed, or address details change, SECP Form 29 must be submitted on eServices within 14 business days.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="financial-audit-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Statutory Financial Audit Requirements (PKR 3M Threshold)
          </h2>
          <p>
            Under Section 223, companies with paid-up capital exceeding PKR 3,000,000 must present audited financial statements prepared by an ICAP-registered Chartered Accountant.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="secp-penalties" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Avoiding Show-Cause Notices & Director Disqualifications
          </h2>
          <p>
            Unresolved filing defaults lead SECP to issue show-cause notices under Section 479 and initiate director disqualification proceedings under Section 172.
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
            SECP CORPORATE SECRETARIAL SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Maintain 100% SECP Annual Compliance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Form A/B returns, Form 29 director updates, AGM minutes, Chartered Accountant audit reports, and SECP default clearance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-annual-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Compliance Filing
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
