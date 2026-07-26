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
  Lock,
  Globe,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What mandatory disclosures must be included in a GDPR-compliant Privacy Policy?",
    a: "Under GDPR Article 13/14, a Privacy Policy must disclose: (1) Identity & contact details of Data Controller, (2) Categories of personal data collected, (3) Legal bases for processing (Consent, Contract performance, Legitimate Interest), (4) Third-party data recipients, (5) Data retention periods, and (6) User rights (Access, Erasure, Portability).",
  },
  {
    q: "Does GDPR apply to US or non-EU companies operating SaaS applications?",
    a: "Yes! GDPR applies extraterritorially to ANY company worldwide that targets, collects, or processes personal data of individuals located within the EU or UK, regardless of where the company is legally registered.",
  },
  {
    q: "What are the penalties for non-compliant Privacy Policies under GDPR?",
    a: "GDPR fines can reach up to €20 Million or 4% of global annual turnover (whichever is higher) for severe data privacy violations.",
  },
  {
    q: "What is the difference between a Data Controller and a Data Processor?",
    a: "A Data Controller determines the purposes and means of processing personal data. A Data Processor processes data on behalf of the Controller under strict instructions (regulated by a Data Processing Agreement).",
  },
  {
    q: "What cookie consent disclosures are required for web applications?",
    a: "Web applications using analytics, marketing, or tracking cookies must deploy an explicit Cookie Consent Banner requiring active opt-in consent before non-essential cookies are dropped.",
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
  headline: "GDPR Privacy Policy Requirements for SaaS & Web Applications: What to Disclose",
  description:
    "Complete 2026 GDPR Privacy Policy compliance guide for SaaS applications and websites. Learn mandatory Article 13 disclosures, legal bases for processing, cookie consent rules, and user data rights.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/gdpr-privacy-policy-requirements-saas-website",
};

export const Route = createFileRoute("/blog/gdpr-privacy-policy-requirements-saas-website")({
  head: () => ({
    meta: [
      { title: "GDPR Privacy Policy Requirements SaaS (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "GDPR Privacy Policy requirements for SaaS & web apps. Mandatory disclosures, legal bases for processing, cookie consent banners & user data rights.",
      },
      {
        name: "keywords",
        content:
          "gdpr privacy policy requirements saas website, article 13 mandatory disclosures gdpr privacy policy, legal basis processing contract consent legitimate interest saas, cookie consent opt in banner gdpr compliance",
      },
      {
        property: "og:title",
        content: "GDPR Privacy Policy Requirements for SaaS & Web Applications: What to Disclose",
      },
      {
        property: "og:description",
        content:
          "Ensure your SaaS platform satisfies EU GDPR and UK Data Protection Act mandatory privacy disclosures.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/gdpr-privacy-policy-requirements-saas-website" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/gdpr-privacy-policy-requirements-saas-website" }],
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
            <span>Legal Contract Drafting</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            GDPR Privacy Policy Requirements for SaaS & Web Applications: What to Disclose
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive data privacy compliance guide for SaaS founders, software developers, and web app operators on satisfying EU GDPR Article 13 and UK DPA mandatory privacy disclosures.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Data Privacy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>EU GDPR & UK DPA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>GDPR Privacy Policy Checklist</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Data Controller Identification:</strong> Company legal name, registered address, and DPO email.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Legal Basis Mapping:</strong> Specify exact lawful basis (Consent, Contract, Legitimate Interest) for each data type.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>User Data Rights:</strong> Explicit details on how users request data erasure (Right to be Forgotten) or export.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Third-Party Sub-Processors:</strong> List cloud hosts, analytics providers, and payment gateways.</span>
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
            <li><a href="#extraterritorial-scope" className="hover:text-gold-600 underline">1. Why GDPR Applies Globally to SaaS Applications</a></li>
            <li><a href="#article-13-disclosures" className="hover:text-gold-600 underline">2. Mandatory Article 13 Privacy Disclosures</a></li>
            <li><a href="#legal-bases" className="hover:text-gold-600 underline">3. Identifying Lawful Bases for Processing Data</a></li>
            <li><a href="#user-rights-and-cookies" className="hover:text-gold-600 underline">4. Managing User Rights & Cookie Consent Banners</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="extraterritorial-scope" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why GDPR Applies Globally to SaaS Applications
          </h2>
          <p>
            Under Article 3(2), GDPR applies to any software application or platform that processes personal data of EU/UK residents, regardless of where your startup is legally incorporated.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="article-13-disclosures" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Mandatory Article 13 Privacy Disclosures
          </h2>
          <p>
            Your privacy policy must clearly state: (1) Data collected, (2) Purpose of processing, (3) Data retention schedules, and (4) International data transfer mechanisms (e.g. EU Standard Contractual Clauses).
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PRIVACY POLICY DRAFTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft GDPR-Compliant Privacy Policies with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts custom GDPR, CCPA, and UK DPA Privacy Policies tailored for SaaS platforms, mobile apps, and e-commerce websites.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/privacy-policy"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Privacy Policy Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="legal-bases" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Identifying Lawful Bases for Processing Data
          </h2>
          <p>
            Every data processing activity must rely on one of six legal bases under GDPR Article 6, most commonly: Performance of a Contract, Legitimate Interest, or Explicit Consent.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="user-rights-and-cookies" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Managing User Rights & Cookie Consent Banners
          </h2>
          <p>
            Provide transparent instructions enabling users to exercise data rights, and deploy an explicit cookie consent banner before firing non-essential tracking pixels.
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
            DATA PRIVACY COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure Full GDPR & CCPA Compliance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            GDPR privacy policies, cookie consent policy drafting, sub-processor disclosures, and user data rights management templates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/privacy-policy"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order GDPR Privacy Policy
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
