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
  Ship,
  FileCheck,
  Key,
} from "lucide-react";

const faqs = [
  {
    q: "What is WEBOC in Pakistan Customs and why is it required?",
    a: "WEBOC (Web Based One Customs) is the digital clearance portal managed by Pakistan Customs for processing import and export goods, filing Goods Declarations (GDs), and clearing commercial shipments at sea ports, dry ports, and airports.",
  },
  {
    q: "Who needs a WEBOC ID in Pakistan?",
    a: "Any business importing commercial goods, physical hardware, machinery, or exporting physical products from Pakistan must hold an active WEBOC Trader User ID.",
  },
  {
    q: "What documents are required to apply for a WEBOC Registration ID?",
    a: "You need: (1) SECP Incorporation Certificate & MOA/AOA (or Sole Proprietorship NTN), (2) FBR Sales Tax Registration Certificate (STRN), (3) Chamber of Commerce Membership Certificate, (4) Bank Maintenance Certificate, (5) Biometric verification slip from NADRA, and (6) Commercial office lease agreement.",
  },
  {
    q: "Where is WEBOC user registration conducted?",
    a: "Physical document verification and biometric registration are conducted at designated Customs Houses (e.g., Karachi Customs House, Lahore Dry Port Customs House, Rawalpindi Dry Port).",
  },
  {
    q: "How long does WEBOC ID approval take?",
    a: "Once all verified documents and biometric thumbprints are submitted at Customs House, WEBOC User ID credentials are sent via email within 3 to 5 business days.",
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
  headline: "WEBOC Customs Registration Guide: How to Get Import/Export ID in Pakistan",
  description:
    "Complete 2026 WEBOC Customs registration guide for importers & exporters in Pakistan. Learn required documents, Chamber of Commerce & STRN prerequisites, Customs House biometric verification, and WEBOC User ID approval steps.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/weboc-customs-registration-guide-pakistan",
};

export const Route = createFileRoute("/blog/weboc-customs-registration-guide-pakistan")({
  head: () => ({
    meta: [
      { title: "WEBOC Customs Registration Guide Pakistan (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "WEBOC Customs registration guide to get import/export ID in Pakistan. Required SECP, STRN, Chamber of Commerce documents & Customs House biometrics.",
      },
      {
        name: "keywords",
        content:
          "weboc customs registration guide pakistan, weboc user id application documents customs house, goods declaration gd filing weboc pakistan, import export license registration pakistan",
      },
      {
        property: "og:title",
        content: "WEBOC Customs Registration Guide: How to Get Import/Export ID in Pakistan",
      },
      {
        property: "og:description",
        content:
          "Master the WEBOC Pakistan Customs registration process to obtain your official Import/Export License ID.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/weboc-customs-registration-guide-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/weboc-customs-registration-guide-pakistan" }],
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
            WEBOC Customs Registration Guide: How to Get Import/Export ID in Pakistan
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive trade masterclass for business owners, importers, and hardware exporters on obtaining a Web Based One Customs (WEBOC) User ID from Pakistan Customs, submitting biometric verifications, and filing Goods Declarations.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Customs Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Pakistan Customs Act 1969 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>WEBOC Prerequisites</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>FBR Sales Tax Registration (STRN):</strong> Active Sales Tax profile required prior to WEBOC application.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Chamber of Commerce Membership:</strong> Valid LCCI, KCCI, or ICCI membership certificate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Customs House Biometric Visit:</strong> In-person thumbprint verification at regional Customs House.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Goods Declaration (GD) Access:</strong> Enables electronic filing of import/export GDs.</span>
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
            <li><a href="#what-is-weboc" className="hover:text-gold-600 underline">1. What Is WEBOC (Web Based One Customs)?</a></li>
            <li><a href="#weboc-prerequisites" className="hover:text-gold-600 underline">2. Statutory Prerequisites (STRN, Chamber Membership & Bank Accounts)</a></li>
            <li><a href="#document-checklist" className="hover:text-gold-600 underline">3. Complete WEBOC Document Dossier</a></li>
            <li><a href="#customs-house-workflow" className="hover:text-gold-600 underline">4. Customs House Submission & NADRA Biometrics</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-weboc" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is WEBOC (Web Based One Customs)?
          </h2>
          <p>
            Managed by Pakistan Customs, <strong>WEBOC (Web Based One Customs)</strong> is the national digital portal for filing Goods Declarations (GDs), paying customs duties, and clearing import/export shipments across ports and airports.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="weboc-prerequisites" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Statutory Prerequisites (STRN, Chamber Membership & Bank Accounts)
          </h2>
          <p>
            Before applying for WEBOC, a business must obtain an FBR Sales Tax Registration Number (STRN), active Chamber of Commerce membership, and a Bank Maintenance Certificate.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN WEBOC CUSTOMS SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your WEBOC Import/Export ID with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares WEBOC document dossiers, manages Customs House appointments, handles biometric verifications, and secures User ID approvals.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order WEBOC Setup Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="document-checklist" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Complete WEBOC Document Dossier
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>SECP Incorporation Certificate & MOA/AOA (or Sole Proprietorship NTN).</li>
            <li>FBR Sales Tax Registration Certificate (STRN).</li>
            <li>Chamber of Commerce Membership Certificate.</li>
            <li>Bank Maintenance Certificate & Undertaking on Stamp Paper.</li>
            <li>CNIC copies & photographs of authorized person.</li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="customs-house-workflow" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Customs House Submission & NADRA Biometrics
          </h2>
          <p>
            The authorized representative visits the regional Customs House for physical document submission and biometric thumbprint verification. Credentials are emailed within 3-5 days.
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
            PAKISTAN WEBOC CUSTOMS SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Obtain Your WEBOC Import/Export ID
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            STRN, Chamber of Commerce, and Customs House WEBOC registration support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order WEBOC Registration Package
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
