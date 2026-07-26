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
  FileCheck,
  Building2,
  AlertTriangle,
  FileText,
  CreditCard,
  Lock,
  Globe2,
} from "lucide-react";

const faqs = [
  {
    q: "What proof of identity is accepted for non-UK resident company directors?",
    a: "Companies House and corporate formation agents accept a clear, valid international passport or a national identity card (with English translation) as primary proof of identity.",
  },
  {
    q: "What proof of address can I provide from outside the UK?",
    a: "Accepted proof of address documents include a bank statement, credit card statement, or utility bill (electricity, water, gas, fixed landline) issued within the last 3 months, showing your full name and residential address.",
  },
  {
    q: "Do I need to notarize or apostille my identity documents?",
    a: "For standard UK company formation and online fintech banking (Wise, Payoneer), digital color scans of your documents are sufficient without notarization. However, traditional high-street banking or court filings may require Hague Apostille certification.",
  },
  {
    q: "Can I use a PO Box as my company's registered office address?",
    a: "No. Companies House strictly prohibits using a PO Box without a physical street location. Non-resident directors use a commercial UK Virtual Registered Address service provided by ADVAQ.",
  },
  {
    q: "How long does Companies House take to process the incorporation documents?",
    a: "Once digital KYC identity verification is complete, Companies House processes online incorporation applications in 3 to 24 hours.",
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
  headline: "What Documents Are Needed to Form a UK Company Overseas? (KYC Guide)",
  description:
    "Complete 2026 checklist of required identity documents, proof of address, and KYC compliance rules for non-UK residents registering a UK Limited company.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://advaq.com/blog/uk-company-formation-documents-required",
};

export const Route = createFileRoute("/blog/uk-company-formation-documents-required")({
  head: () => ({
    meta: [
      { title: "Documents Needed to Register a UK Company Overseas (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Full 2026 KYC checklist for foreign directors: passport, proof of address, UK registered address, and Companies House documentation required.",
      },
      {
        name: "keywords",
        content:
          "uk company formation documents required, kyc documents uk company formation non resident, proof of address uk ltd non resident, register uk company passport",
      },
      {
        property: "og:title",
        content: "What Documents Are Needed to Form a UK Company Overseas? (KYC Guide)",
      },
      {
        property: "og:description",
        content:
          "Learn exact identity and address verification requirements for foreign directors registering a UK Limited Company remotely.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-company-formation-documents-required" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-company-formation-documents-required" }],
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
            What Documents Are Needed to Form a UK Company Overseas? (2026 KYC Checklist)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A definitive guide to passport requirements, international proof of address standards, Companies House compliance, and anti-money laundering (AML) verification for foreign directors.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Verified UK AML & KYC Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Document Checklist Summary (TL;DR)</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            To register a UK Limited Company remotely from overseas, foreign directors & shareholders need to provide only <strong>two primary personal documents</strong> alongside standard company structural details:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs pt-3 border-t border-white/10">
            <li className="flex items-center gap-2 bg-navy-950 p-3 rounded-lg text-navy-100 border border-white/10">
              <FileCheck size={16} className="text-gold-500 shrink-0" />
              <span><strong>1. Proof of ID:</strong> Valid International Passport or National ID Card</span>
            </li>
            <li className="flex items-center gap-2 bg-navy-950 p-3 rounded-lg text-navy-100 border border-white/10">
              <FileCheck size={16} className="text-gold-500 shrink-0" />
              <span><strong>2. Proof of Address:</strong> Bank statement or utility bill (under 3 months old)</span>
            </li>
            <li className="flex items-center gap-2 bg-navy-950 p-3 rounded-lg text-navy-100 border border-white/10">
              <FileCheck size={16} className="text-gold-500 shrink-0" />
              <span><strong>3. UK Registered Address:</strong> Commercial UK Virtual Office address</span>
            </li>
            <li className="flex items-center gap-2 bg-navy-950 p-3 rounded-lg text-navy-100 border border-white/10">
              <FileCheck size={16} className="text-gold-500 shrink-0" />
              <span><strong>4. Company Structure:</strong> Unique Name, SIC Code, Share Allocation</span>
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
            <li><a href="#why-kyc" className="hover:text-gold-600 underline">Why UK Law Requires Identity & Address Documents (AML Regulations)</a></li>
            <li><a href="#proof-of-id" className="hover:text-gold-600 underline">Document 1: Acceptable Proof of Identity (Passport & Photo ID)</a></li>
            <li><a href="#proof-of-address" className="hover:text-gold-600 underline">Document 2: Acceptable Overseas Proof of Address</a></li>
            <li><a href="#company-data" className="hover:text-gold-600 underline">Required Company Information (Name, SIC & Shareholding)</a></li>
            <li><a href="#uk-addresses" className="hover:text-gold-600 underline">UK Address Requirements (Registered Office vs Directors' Service Address)</a></li>
            <li><a href="#verification-process" className="hover:text-gold-600 underline">How Digital Identity Verification Works in Practice</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-kyc" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why UK Law Requires Identity & Address Documents
          </h2>
          <p>
            Under the UK <em>Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017</em> and recent updates via the <em>Economic Crime and Corporate Transparency Act 2023</em>, all regulated UK formation providers are legally mandated to conduct <strong>Know Your Customer (KYC)</strong> identity checks on company directors and beneficial owners.
          </p>
          <p>
            These checks ensure that the UK corporate register remains transparent, legitimate, and free from financial crime, while enabling honest international entrepreneurs to access global commerce smoothly.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="proof-of-id" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Document 1: Acceptable Proof of Identity (Photo ID)
          </h2>
          <p>
            Every director, shareholder, and Person with Significant Control (PSC) holding 25% or more shares must submit a clear, un-cropped digital color scan of a valid government-issued photo ID.
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base">Valid Proof of Identity Options:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>International Passport (Recommended):</strong> Must be valid and signed, showing full photo page and MRZ code.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>National Identity Card:</strong> Government-issued smart ID card with English translation.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Driving License:</strong> Official photo driving permit containing current residential address.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="proof-of-address" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Document 2: Acceptable Overseas Proof of Address
          </h2>
          <p>
            Proof of residential address verifies your place of living in your home country (e.g. Pakistan, UAE, USA, or Canada).
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-emerald-200 bg-emerald-50/30 p-5 rounded-xl">
              <h3 className="font-bold text-emerald-900 text-base mb-2">Accepted Address Documents (Issued within 3 months):</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Personal Bank Statement (PDF or digital scan showing full name & address)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Credit Card Statement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Utility Bill (Electricity, Water, Gas, Landline Internet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Government Tax Letter / Tax Assessment</span>
                </li>
              </ul>
            </div>

            <div className="border border-red-200 bg-red-50/30 p-5 rounded-xl">
              <h3 className="font-bold text-red-900 text-base mb-2">Un-Accepted Documents (Will be Rejected):</h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Mobile phone bills (prepaid or postpaid cell records)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Documents older than 90 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Screenshots or cropped partial documents missing page borders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Documents where name differs from Passport identity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FAST DIGITAL VERIFICATION
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Hassle-Free Non-Resident UK Incorporation
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles your complete UK incorporation, KYC verification, virtual London registered office address, and HMRC registration in 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UK Company Formation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="company-data" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Required Company Structure Data
          </h2>
          <p>
            In addition to personal identity documents, you will provide basic details about how your company is configured:
          </p>

          <ul className="space-y-3 my-4">
            <li className="flex items-start gap-3 bg-white border border-border p-4 rounded-xl text-sm">
              <Building2 className="text-gold-500 shrink-0 mt-0.5" size={20} />
              <div>
                <strong>Proposed Business Name:</strong> Must end with "Limited" or "LTD".
              </div>
            </li>
            <li className="flex items-start gap-3 bg-white border border-border p-4 rounded-xl text-sm">
              <FileText className="text-gold-500 shrink-0 mt-0.5" size={20} />
              <div>
                <strong>SIC Code (Nature of Business):</strong> Standard 5-digit code classifying your industry (e.g. 62020 for Information Technology consultancy).
              </div>
            </li>
            <li className="flex items-start gap-3 bg-white border border-border p-4 rounded-xl text-sm">
              <CreditCard className="text-gold-500 shrink-0 mt-0.5" size={20} />
              <div>
                <strong>Share Capital Allocation:</strong> Standard setup is 100 ordinary shares valued at £1 per share (£100 total authorized share capital).
              </div>
            </li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="uk-addresses" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. UK Address Requirements: Registered Office vs Service Address
          </h2>
          <p>
            Companies House requires two specific addresses for every UK Limited Company:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-4">
            <div>
              <h4 className="font-bold text-navy-900 text-base">A. Registered Office Address</h4>
              <p className="text-sm text-gray-600 mt-1">
                The official legal address of the company located in the UK. This address receives official statutory notices from Companies House and HMRC. Overseas directors purchase a UK Virtual Office address service.
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <h4 className="font-bold text-navy-900 text-base">B. Directors' Service Address</h4>
              <p className="text-sm text-gray-600 mt-1">
                The public contact address for company directors. By using a Directors' Service Address service, your personal overseas residential address remains confidential and protected from public records.
              </p>
            </div>
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
            GET YOUR UK COMPANY FORMED TODAY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UK LTD with Full KYC Assistance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Submit your passport & proof of address online. ADVAQ incorporates your UK LTD in 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Company Formation — £99
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
