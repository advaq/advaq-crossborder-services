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
  FileCheck,
  Database,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Data Processing Agreement (DPA)?",
    a: "A Data Processing Agreement (DPA) is a legally binding contract under GDPR Article 28 executed between a Data Controller (e.g. a B2B SaaS client) and a Data Processor (e.g. an agency, cloud hosting provider, or software vendor) governing the handling and protection of personal data.",
  },
  {
    q: "Why is a Data Processing Agreement mandatory under GDPR?",
    a: "Article 28(3) of the GDPR mandates that processing of personal data by a processor MUST be governed by a written contract that binds the processor to specific technical security standards and processing instructions.",
  },
  {
    q: "What mandatory provisions must every DPA contain under GDPR Article 28?",
    a: "A compliant DPA must stipulate that the processor will: (1) Process data strictly on written controller instructions, (2) Ensure personnel confidentiality, (3) Implement appropriate Technical & Organizational Security Measures (TOMs), (4) Engage sub-processors only with controller authorization, (5) Assist with Data Subject Access Requests (DSARs), and (6) Delete or return data upon contract termination.",
  },
  {
    q: "What are EU Standard Contractual Clauses (SCCs) in a DPA?",
    a: "Standard Contractual Clauses (SCCs) are pre-approved legal templates published by the European Commission that legally authorize transferring personal data outside the European Economic Area (EEA) to third countries (e.g. US, UK, Pakistan, UAE).",
  },
  {
    q: "What happens if a SaaS vendor fails to sign a DPA with its enterprise clients?",
    a: "Enterprise clients cannot legally use SaaS platforms without a signed DPA. Operating without a DPA violates GDPR Article 28, exposing both parties to regulatory fines and contract cancellation.",
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
  headline: "What is a Data Processing Agreement (DPA) and Why Is It Mandatory Under GDPR?",
  description:
    "Complete 2026 legal guide on Data Processing Agreements (DPAs) under GDPR Article 28. Learn mandatory DPA clauses, Technical & Organizational Security Measures (TOMs), sub-processor rules, and EU Standard Contractual Clauses (SCCs).",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/data-processing-agreement-dpa-gdpr-requirements",
};

export const Route = createFileRoute("/blog/data-processing-agreement-dpa-gdpr-requirements")({
  head: () => ({
    meta: [
      { title: "Data Processing Agreement DPA GDPR Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "What is a Data Processing Agreement (DPA)? GDPR Article 28 requirements, mandatory clauses, technical security measures & EU Standard Contractual Clauses (SCCs).",
      },
      {
        name: "keywords",
        content:
          "data processing agreement dpa gdpr requirements, gdpr article 28 mandatory dpa clauses saas, standard contractual clauses sccs cross border data transfer, technical and organizational security measures toms dpa",
      },
      {
        property: "og:title",
        content: "What is a Data Processing Agreement (DPA) and Why Is It Mandatory Under GDPR?",
      },
      {
        property: "og:description",
        content:
          "Master GDPR Article 28 requirements and draft enterprise-ready Data Processing Agreements for your SaaS platform.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/data-processing-agreement-dpa-gdpr-requirements" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/data-processing-agreement-dpa-gdpr-requirements" }],
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
            What is a Data Processing Agreement (DPA) and Why Is It Mandatory Under GDPR?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive data privacy and contract drafting guide for B2B SaaS vendors, IT consultancies, and digital agencies on satisfying GDPR Article 28 DPA requirements and Standard Contractual Clauses (SCCs).
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ GDPR & DPA Compliance Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>GDPR Article 28 & EU SCC Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>GDPR DPA Mandatory Pillars</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Documented Controller Instructions:</strong> Processor acts only on written instructions from client.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Technical & Organizational Security:</strong> Mandatory encryption, access control, and incident response.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Sub-Processor Authorization:</strong> Prior written approval required before engaging third-party sub-processors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Standard Contractual Clauses (SCCs):</strong> Authorizes cross-border data transfers outside the EEA.</span>
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
            <li><a href="#what-is-a-dpa" className="hover:text-gold-600 underline">1. What Is a Data Processing Agreement (DPA)?</a></li>
            <li><a href="#article-28-requirements" className="hover:text-gold-600 underline">2. Mandatory Clauses Under GDPR Article 28</a></li>
            <li><a href="#technical-security-measures" className="hover:text-gold-600 underline">3. Technical & Organizational Security Measures (TOMs)</a></li>
            <li><a href="#standard-contractual-clauses" className="hover:text-gold-600 underline">4. Standard Contractual Clauses (SCCs) for International Transfers</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-a-dpa" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is a Data Processing Agreement (DPA)?
          </h2>
          <p>
            A <strong>Data Processing Agreement (DPA)</strong> regulates the legal relationship between a Data Controller and a Data Processor, ensuring personal data handled during SaaS service delivery complies with GDPR security standards.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="article-28-requirements" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Mandatory Clauses Under GDPR Article 28
          </h2>
          <p>
            Article 28(3) mandates terms covering: processing subject matter, duration, nature and purpose, categories of personal data, and specific controller/processor obligations.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            GDPR DPA CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Enterprise-Ready DPAs with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts custom Data Processing Agreements, EU Standard Contractual Clauses (SCCs), and Technical Security Annexes for SaaS vendors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/data-processing-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order DPA Contract Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="technical-security-measures" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Technical & Organizational Security Measures (TOMs)
          </h2>
          <p>
            Annex II of a DPA must detail technical security measures including end-to-end data encryption, SOC 2 compliance, multi-factor authentication, and 72-hour breach notification SLAs.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="standard-contractual-clauses" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Standard Contractual Clauses (SCCs) for International Transfers
          </h2>
          <p>
            Incorporate EU Module 2 (Controller to Processor) or Module 3 (Processor to Processor) Standard Contractual Clauses to authorize data transfers to non-EEA countries legally.
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
            GDPR DPA CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Close Enterprise Deals with Compliant DPAs
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            GDPR Article 28 DPA drafting, EU Standard Contractual Clauses (SCCs), Technical Security Annexes, and sub-processor agreements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/data-processing-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order DPA Drafting Service
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
