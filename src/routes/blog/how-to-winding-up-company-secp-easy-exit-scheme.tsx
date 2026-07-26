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
  XCircle,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "What is the SECP Easy Exit Scheme (EES) for company strike-off?",
    a: "The SECP Easy Exit Scheme (EES) is a streamlined administrative procedure under Section 426 of the Companies Act 2017 allowing inoperative, defunct, or dormant Private Limited companies with no liabilities or assets to legally strike off their company name without lengthy court liquidation.",
  },
  {
    q: "What conditions must a company meet to qualify for SECP Easy Exit Scheme?",
    a: "To qualify: (1) Company must have ceased commercial operations or never commenced business, (2) Company has zero outstanding liabilities, bank loans, or tax dues, (3) Shareholders pass a unanimous Board Resolution to strike off, and (4) Indemnity Bonds are submitted by directors.",
  },
  {
    q: "What is the difference between SECP Strike-Off (Easy Exit) and formal Winding Up?",
    a: "SECP Strike-Off (Easy Exit) is an expedited 2 to 3 month administrative process for clean dormant companies. Formal Winding Up is a judicial or voluntary liquidation process required for operating companies holding active assets, liabilities, or employee obligations.",
  },
  {
    q: "What documents are required to file an SECP Easy Exit application?",
    a: "You need: (1) Form EES-1 application, (2) Board & Shareholder Resolutions for dissolution, (3) Auditor Certificate of Zero Assets & Liabilities, (4) Indemnity Bond on stamp paper signed by all directors, (5) FBR Tax Clearance Certificate (NOC), and (6) Closure of corporate bank accounts.",
  },
  {
    q: "How long does SECP take to issue an Official Gazette notification of striking off?",
    a: "After SECP publishes the public notice in newspapers and official gazette, the company name is struck off the Register of Companies within 60 to 90 days.",
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
  headline: "How to Strike Off & Dissolve a Company with SECP (Easy Exit Scheme)",
  description:
    "Complete 2026 SECP company strike-off and dissolution guide under Easy Exit Scheme (EES). Learn Section 426 requirements, Form EES-1 filing, zero-liability auditor certificates, FBR NOC, and Official Gazette notices.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/how-to-winding-up-company-secp-easy-exit-scheme",
};

export const Route = createFileRoute("/blog/how-to-winding-up-company-secp-easy-exit-scheme")({
  head: () => ({
    meta: [
      { title: "SECP Company Strike Off Easy Exit Scheme Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to dissolve & strike off a SECP company in Pakistan under Easy Exit Scheme (EES). Form EES-1 filing, zero liability auditor certificate & FBR NOC.",
      },
      {
        name: "keywords",
        content:
          "how to winding up company secp easy exit scheme, secp company strike off form ees-1, Section 426 companies act 2017 easy exit scheme, fbr tax clearance noc company dissolution pakistan",
      },
      {
        property: "og:title",
        content: "How to Strike Off & Dissolve a Company with SECP (Easy Exit Scheme)",
      },
      {
        property: "og:description",
        content:
          "Discover how to legally strike off and close an inoperative SECP Private Limited company under the Easy Exit Scheme.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-winding-up-company-secp-easy-exit-scheme" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-winding-up-company-secp-easy-exit-scheme" }],
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
            How to Strike Off & Dissolve a Company with SECP (Easy Exit Scheme)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A step-by-step legal closure guide for company owners, directors, and investors on dissolving dormant SECP Private Limited entities through the Easy Exit Scheme (EES) under Section 426 of the Companies Act 2017.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Corporate Dissolution Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SECP Companies Act 2017 Section 426 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Easy Exit Scheme (EES) Highlights</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Fast Administrative Strike-Off:</strong> 60 to 90 day administrative closure without court intervention.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Zero Liability Requirement:</strong> Company must have no unpaid taxes, debts, or pending lawsuits.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form EES-1 Filing:</strong> Submitted on SECP eServices alongside director Indemnity Bonds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>FBR Tax Clearance (NOC):</strong> FBR tax deregistration and bank account closure mandatory.</span>
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
            <li><a href="#what-is-easy-exit" className="hover:text-gold-600 underline">1. What Is the SECP Easy Exit Scheme (EES)?</a></li>
            <li><a href="#eligibility-criteria" className="hover:text-gold-600 underline">2. Eligibility Criteria for SECP Company Strike-Off</a></li>
            <li><a href="#required-documents" className="hover:text-gold-600 underline">3. Document Dossier (Form EES-1, Indemnity Bonds, Auditor Certificate)</a></li>
            <li><a href="#fbr-bank-closure" className="hover:text-gold-600 underline">4. FBR Tax Deregistration & Corporate Bank Account Closure</a></li>
            <li><a href="#gazette-dissolution" className="hover:text-gold-600 underline">5. Gazette Notification & Final Certificate of Dissolution</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-easy-exit" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is the SECP Easy Exit Scheme (EES)?
          </h2>
          <p>
            Under Section 426 of the Companies Act 2017, the Securities and Exchange Commission of Pakistan created the <strong>Easy Exit Scheme (EES)</strong> to allow dormant or inoperative Private Limited entities to voluntarily apply for striking off their company name from the Register of Companies.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="eligibility-criteria" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Eligibility Criteria for SECP Company Strike-Off
          </h2>
          <p>
            To apply under the Easy Exit Scheme, a company must satisfy three core conditions: (1) No commercial assets or liabilities, (2) No pending litigation or SECP show-cause notices, and (3) Unanimous shareholder consent.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SECP COMPANY DISSOLUTION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Dissolve Your SECP Company Legally with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts board dissolution resolutions, prepares Form EES-1, obtains auditor zero-liability certificates, handles FBR NOCs, and secures official SECP strike-off gazette notices.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-annual-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Company Dissolution <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="required-documents" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Document Dossier (Form EES-1, Indemnity Bonds, Auditor Certificate)
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Form EES-1 application signed by directors.</li>
            <li>Unanimous Board & Shareholder Resolutions for dissolution.</li>
            <li>Chartered Accountant Certificate verifying zero assets and zero liabilities.</li>
            <li>Indemnity Bonds on Judicial Stamp Paper signed by directors.</li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="fbr-bank-closure" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. FBR Tax Deregistration & Corporate Bank Account Closure
          </h2>
          <p>
            Prior to strike-off, close corporate bank accounts and submit an FBR Iris deregistration application to obtain an official FBR Tax Clearance Certificate (NOC).
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="gazette-dissolution" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Gazette Notification & Final Certificate of Dissolution
          </h2>
          <p>
            SECP publishes a public notice of intention to strike off the company in the Official Gazette. Upon expiration of the 30-day notice period, SECP issues the final Certificate of Dissolution.
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
            SECP COMPANY STRIKE-OFF SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Strike Off Your Company Legally with SECP
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Easy Exit Scheme Form EES-1 filing, zero-liability auditor certificates, FBR NOC, and Official Gazette strike-off notices.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-annual-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Company Dissolution
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
