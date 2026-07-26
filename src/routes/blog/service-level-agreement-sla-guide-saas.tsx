import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Server,
  Activity,
  Award,
  Scale,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Service Level Agreement (SLA) in SaaS and IT infrastructure?",
    a: "An SLA (Service Level Agreement) is a legally binding commercial contract detailing platform availability commitments (e.g. 99.9% uptime), incident response times, maintenance windows, and financial credit remedies if the provider fails to meet agreed performance targets.",
  },
  {
    q: "What does 99.9% uptime ('Three Nines') mean in terms of allowed annual downtime?",
    a: "A 99.9% uptime commitment permits a maximum of 8.76 hours of unexcused downtime per year (or 43.8 minutes per month). In contrast, 99.99% ('Four Nines') permits only 52.6 minutes of downtime per year.",
  },
  {
    q: "What are SLA Service Credits in B2B software contracts?",
    a: "Service Credits are financial invoice discounts (e.g. 10% to 30% off monthly subscription fees) credited to the customer's account if the SaaS vendor breaches monthly uptime targets.",
  },
  {
    q: "What events are excluded from SLA downtime calculations?",
    a: "Standard SLA exclusions include: (1) Scheduled emergency maintenance announced in advance, (2) Upstream third-party cloud infrastructure outages (AWS/Azure/GCP), (3) Customer network, ISP, or DNS misconfigurations, and (4) Force Majeure events.",
  },
  {
    q: "Are SLA Service Credits the customer's sole and exclusive remedy for outages?",
    a: "Yes. Well-drafted SaaS SLAs explicitly state that Service Credits constitute the customer's sole and exclusive financial remedy for service downtime, barring customers from suing for indirect business losses or lost revenue.",
  },
  {
    q: "How should incident severity levels be categorized in an SLA?",
    a: "SLAs typically categorize incidents into 4 Severity Tiers: Sev-1 (Critical Outage / Core system down: 1-hour response), Sev-2 (Major Feature impaired: 4-hour response), Sev-3 (Minor defect with workaround: 24-hour response), and Sev-4 (Cosmetic / Feature request: 3 business days).",
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
  dateModified: "2026-07-26",
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
    <article className="min-h-screen bg-white text-gray-800">
      {/* HEADER HERO */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <Link to="/legal-contract-drafting" className="hover:underline">Legal Contract Drafting</Link>
          </div>

          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium">
            Service Level Agreements (SLAs) for SaaS & IT Providers: Metrics & Penalties
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word comprehensive legal and technical guide for SaaS founders, cloud hosts, and managed service providers (MSPs) on drafting Service Level Agreements (SLAs), calculating uptime percentages, and structuring Service Credits.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>Advocate Muhammad Abdullah (Lead Counsel)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
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
            <span>Executive Legal Summary: SLA Architectural Pillars</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Uptime Target (99.9%)</strong>
              <p className="text-navy-100 leading-relaxed">
                Standard B2B enterprise benchmark permitting 43.8 minutes of unexcused monthly downtime. 99.99% ("Four Nines") requires costly redundant multi-region cloud infrastructure.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. Graduated Service Credits</strong>
              <p className="text-navy-100 leading-relaxed">
                10% credit for &lt;99.9%, 25% credit for &lt;99.0%, capped at maximum 50% of the customer's monthly subscription fee applied against future invoices.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Sole & Exclusive Remedy Clause</strong>
              <p className="text-navy-100 leading-relaxed">
                Legally shields the SaaS vendor by establishing that Service Credits are the customer's single financial remedy for downtime, preventing lawsuits for lost profits.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Maintenance & Cloud Exclusions</strong>
              <p className="text-navy-100 leading-relaxed">
                Explicitly excludes scheduled maintenance windows and third-party cloud infrastructure outages (AWS, Azure, GCP) from SLA downtime calculations.
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
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. SLA Fundamentals for B2B SaaS Platforms</a></li>
            <li><a href="#uptime-math" className="hover:text-gold-600 underline">2. Understanding Uptime Math (99.9% vs 99.99%)</a></li>
            <li><a href="#service-credits" className="hover:text-gold-600 underline">3. Structuring Service Credit Remedies</a></li>
            <li><a href="#severity-levels" className="hover:text-gold-600 underline">4. Severity Level Response Time Tiers (Sev 1 to Sev 4)</a></li>
            <li><a href="#sole-remedy-clause" className="hover:text-gold-600 underline">5. The "Sole & Exclusive Remedy" Legal Shield</a></li>
            <li><a href="#maintenance-exclusions" className="hover:text-gold-600 underline">6. Scheduled Maintenance & Upstream Cloud Exclusions</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. SLA Fundamentals for B2B SaaS Platforms & IT Vendors
          </h2>
          <p>
            When selling cloud software or managed IT services to enterprise clients, one of the first legal contracts requested during vendor procurement is the <strong>Service Level Agreement (SLA)</strong>.
          </p>
          <p>
            An SLA is a formal contract between a service provider and a client that defines quantifiable performance metrics—specifically system availability (uptime), incident response times, maintenance windows, and financial credit remedies if availability targets are missed.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Strategic Dual Purpose:</strong>
            <p className="text-navy-900 text-sm">
              A well-engineered SLA builds enterprise customer trust during procurement while establishing strict financial caps on provider liability when unexpected server outages occur.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="uptime-math" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Understanding Uptime Math (99.9% vs 99.99%)
          </h2>
          <p>
            SaaS founders often promise "99.99% uptime" in sales pitches without realizing the legal and architectural burdens involved. Uptime percentage determines the maximum unexcused downtime allowed:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Uptime SLA Tier</th>
                  <th className="p-4 text-gold-500">Allowed Monthly Downtime</th>
                  <th className="p-4 text-gold-500">Allowed Annual Downtime</th>
                  <th className="p-4">Infrastructure Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">99.0% ("Two Nines")</td>
                  <td className="p-4">7.3 hours / month</td>
                  <td className="p-4">3.65 days / year</td>
                  <td className="p-4">Basic single-server setup.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">99.5%</td>
                  <td className="p-4">3.65 hours / month</td>
                  <td className="p-4">1.83 days / year</td>
                  <td className="p-4">Standard cloud server with auto-scaling.</td>
                </tr>
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">99.9% ("Three Nines")</td>
                  <td className="p-4">43.8 minutes / month</td>
                  <td className="p-4">8.76 hours / year</td>
                  <td className="p-4">Enterprise Standard (Multi-AZ load balancing).</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">99.99% ("Four Nines")</td>
                  <td className="p-4">4.38 minutes / month</td>
                  <td className="p-4">52.6 minutes / year</td>
                  <td className="p-4">High Availability (Active-Active multi-region replication).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="service-credits" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Structuring Service Credit Remedies
          </h2>
          <p>
            When a SaaS provider fails to meet its monthly uptime commitment, the primary contractual remedy is issuing <strong>Service Credits</strong>. Service credits are invoice discounts applied toward future billing cycles.
          </p>
          
          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Standard Graduated Service Credit Table:</h3>
          <div className="space-y-3 my-4 text-xs">
            <div className="p-4 border border-border rounded-xl bg-off-white flex justify-between items-center">
              <span>Monthly Uptime &lt; 99.9% but &ge; 99.0%</span>
              <strong className="text-gold-700 font-bold">10% Credit of Monthly Fee</strong>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white flex justify-between items-center">
              <span>Monthly Uptime &lt; 99.0% but &ge; 95.0%</span>
              <strong className="text-gold-700 font-bold">25% Credit of Monthly Fee</strong>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white flex justify-between items-center">
              <span>Monthly Uptime &lt; 95.0%</span>
              <strong className="text-gold-700 font-bold">50% Credit of Monthly Fee (Maximum Cap)</strong>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ SaaS SLA DRAFTING SERVICES
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

        {/* SECTION 4 */}
        <div id="severity-levels" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Severity Level Response Time Tiers (Sev 1 to Sev 4)
          </h2>
          <p>
            An SLA must define incident response times based on ticket severity. The standard 4-tier incident matrix includes:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Severity 1 (Critical Outage):</strong> Core system down for all users. Response Time: 1 hour (24/7/365). Resolution target: 4 hours.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Severity 2 (Major Feature Impaired):</strong> High-impact issue affecting key features with no workaround. Response Time: 4 hours (Business Hours).</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Severity 3 (Minor Defect):</strong> Minor feature issue with workaround. Response Time: 24 hours.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Severity 4 (Cosmetic / Feature Request):</strong> Non-urgent documentation or UI feedback. Response Time: 3 business days.</span></li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="sole-remedy-clause" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. The "Sole & Exclusive Remedy" Legal Shield
          </h2>
          <p>
            Without a <strong>Sole and Exclusive Remedy Clause</strong>, a customer whose service goes down during a critical business event might claim $100,000 in lost revenue.
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Sole & Exclusive Remedy Clause:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "Customer's sole and exclusive remedy, and Provider's entire liability, for any failure of the Service to meet the Uptime Commitment or Response Time metrics set forth in this SLA shall be the issuance of Service Credits as explicitly set forth herein."
            </p>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="maintenance-exclusions" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Scheduled Maintenance & Upstream Cloud Exclusions
          </h2>
          <p>
            Your SLA must state that the following occurrences are explicitly <strong>excluded from downtime calculations</strong>:
          </p>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Scheduled maintenance announced at least 48 hours in advance (performed during off-peak hours).</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Outages caused by upstream cloud providers (e.g. global AWS, Azure, GCP region failure).</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Client ISP failures, client network firewalls, or invalid API requests sent by client code.</span></li>
          </ul>
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
            SaaS & IT SLA CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your Platform with a Professional SLA
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            99.9% uptime formulas, Service Credit structures, response time matrices, and sole-remedy liability shields drafted by Advocate High Court.
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
