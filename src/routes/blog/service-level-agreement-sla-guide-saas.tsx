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
  Server,
  Activity,
  Award,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Service Level Agreement (SLA) in SaaS and IT infrastructure?",
    a: "An SLA (Service Level Agreement) is a legally binding contract detailing uptime commitments (e.g. 99.9% uptime), incident response times, maintenance windows, and financial credit remedies if the provider fails to meet service targets.",
  },
  {
    q: "What does 99.9% uptime ('Three Nines') mean in terms of allowed annual downtime?",
    a: "A 99.9% uptime commitment permits a maximum of 8.76 hours of unexcused downtime per year (or 43.8 minutes per month). In contrast, 99.99% ('Four Nines') permits only 52.6 minutes of downtime per year.",
  },
  {
    q: "What are SLA Service Credits in B2B software contracts?",
    a: "Service Credits are financial refunds or invoice discounts (e.g. 10% to 30% off monthly subscription fees) credited to the customer's account if the SaaS vendor breaches monthly uptime targets.",
  },
  {
    q: "What events are excluded from SLA downtime calculations?",
    a: "Standard SLA exclusions include: (1) Scheduled emergency maintenance, (2) Third-party cloud infrastructure outages (AWS/Azure/GCP), (3) Customer network or DNS misconfigurations, and (4) Force Majeure events.",
  },
  {
    q: "Are SLA Service Credits the customer's sole and exclusive remedy for outages?",
    a: "Yes. Well-drafted SaaS SLAs explicitly state that Service Credits constitute the customer's sole and exclusive remedy for service downtime, barring customers from suing for indirect business losses.",
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
  headline: "Service Level Agreements (SLAs) for SaaS & IT Providers: Metrics & Penalties",
  description:
    "Complete 2026 legal guide on Service Level Agreements (SLAs) for SaaS vendors & managed IT providers. Learn 99.9% uptime calculations, response time tiers, service credits, and liability exclusions.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/service-level-agreement-sla-guide-saas",
};

export const Route = createFileRoute("/blog/service-level-agreement-sla-guide-saas")({
  head: () => ({
    meta: [
      { title: "Service Level Agreement SLA Guide SaaS IT (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "SLA drafting guide for SaaS & IT providers. 99.9% uptime metrics, incident response times, service credit remedies & sole remedy clauses.",
      },
      {
        name: "keywords",
        content:
          "service level agreement sla guide saas, saas uptime metrics 99.9 percent service credits, response time sla tiers severity level 1 2 3, sole and exclusive remedy sla clause",
      },
      {
        property: "og:title",
        content: "Service Level Agreements (SLAs) for SaaS & IT Providers: Metrics & Penalties",
      },
      {
        property: "og:description",
        content:
          "Master SLA uptime commitments, service credit structures, and liability caps for SaaS applications and cloud infrastructure.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/service-level-agreement-sla-guide-saas" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/service-level-agreement-sla-guide-saas" }],
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
            Service Level Agreements (SLAs) for SaaS & IT Providers: Metrics & Penalties
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal and technical guide for SaaS founders, cloud hosts, and managed service providers (MSPs) on drafting Service Level Agreements (SLAs), calculating uptime percentages, and structuring Service Credits.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ SaaS Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Enterprise SaaS SLA Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>SLA Key Architectural Pillars</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>99.9% Uptime Commitment:</strong> Standard enterprise benchmark permitting 43.8 minutes monthly downtime.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Graduated Service Credits:</strong> 10% credit for &lt;99.9%, 25% credit for &lt;99.0%, capped at monthly fee total.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Sole & Exclusive Remedy:</strong> Protects provider from consequential damage lawsuits arising from outages.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Maintenance & Cloud Exclusions:</strong> Excludes scheduled maintenance and upstream cloud outages (AWS/GCP).</span>
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
            <li><a href="#sla-fundamentals" className="hover:text-gold-600 underline">1. SLA Fundamentals for B2B SaaS Platforms</a></li>
            <li><a href="#uptime-math" className="hover:text-gold-600 underline">2. Understanding Uptime Math (99.9% vs 99.99%)</a></li>
            <li><a href="#service-credits" className="hover:text-gold-600 underline">3. Structuring Service Credit Remedies</a></li>
            <li><a href="#severity-levels" className="hover:text-gold-600 underline">4. Severity Level Response Time Tiers (Sev 1 to Sev 4)</a></li>
            <li><a href="#sole-remedy-clause" className="hover:text-gold-600 underline">5. The "Sole and Exclusive Remedy" Legal Shield</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="sla-fundamentals" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. SLA Fundamentals for B2B SaaS Platforms
          </h2>
          <p>
            Enterprise buyers demand guaranteed platform availability. An SLA sets clear service benchmarks while limiting the provider's legal and financial liability during unexpected downtime.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="uptime-math" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Understanding Uptime Math (99.9% vs 99.99%)
          </h2>
          <p>
            Committing to 99.9% uptime allows 43.8 minutes of unexcused monthly downtime. Committing to 99.99% allows only 4.38 minutes monthly downtime, requiring expensive multi-region failover infrastructure.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SaaS SLA DRAFTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Enterprise-Ready SLAs with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts custom Service Level Agreements for B2B SaaS platforms and Managed IT Providers with balanced uptime metrics and sole-remedy credit caps.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/service-level-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SLA Contract Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="service-credits" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Structuring Service Credit Remedies
          </h2>
          <p>
            Service Credits provide financial compensation (e.g. 10% to 50% discount on monthly subscription fees) applied against future invoices if monthly uptime targets are breached.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="severity-levels" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Severity Level Response Time Tiers (Sev 1 to Sev 4)
          </h2>
          <p>
            Categorize support tickets into Severity 1 (Critical Outage: 1-hour response), Severity 2 (Major Feature Failure: 4-hour response), and Severity 3/4 (Minor bugs: 24-hour response).
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
            SaaS & IT SLA CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your Platform with a Professional SLA
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            99.9% uptime formulas, Service Credit structures, response time matrices, and sole-remedy liability shields.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/service-level-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SLA Drafting Service
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
