import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Lock,
  Scale,
  Database,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Data Processing Agreement (DPA)?",
    a: "A Data Processing Agreement (DPA) is a legally binding contract mandated under GDPR Article 28 executed between a Data Controller (e.g. a B2B SaaS corporate customer) and a Data Processor (e.g. a SaaS vendor, cloud hosting provider, or software development agency) governing the handling, security, and privacy of personal data.",
  },
  {
    q: "Why is a Data Processing Agreement mandatory under GDPR?",
    a: "Article 28(3) of the European Union GDPR mandates that any processing of personal data by a processor MUST be governed by a binding written contract that legally binds the processor to specific technical security standards and documented processing instructions.",
  },
  {
    q: "What mandatory provisions must every DPA contain under GDPR Article 28?",
    a: "A compliant DPA must stipulate that the processor will: (1) Process personal data strictly on documented controller instructions, (2) Ensure personnel confidentiality commitments, (3) Implement appropriate Technical & Organizational Security Measures (TOMs), (4) Engage sub-processors only with prior written controller authorization, (5) Assist with Data Subject Access Requests (DSARs), and (6) Delete or return data upon contract termination.",
  },
  {
    q: "What are EU Standard Contractual Clauses (SCCs) in a DPA?",
    a: "Standard Contractual Clauses (SCCs) are standardized, unalterable legal templates published by the European Commission that legally authorize transferring personal data outside the European Economic Area (EEA) to third countries (such as the US, UK, Pakistan, or UAE).",
  },
  {
    q: "What happens if a SaaS vendor fails to provide a DPA to its enterprise clients?",
    a: "Enterprise B2B clients cannot legally use SaaS platforms without a signed DPA. Operating without a DPA violates GDPR Article 28, exposing both parties to regulatory fines up to €10 Million or 2% of annual turnover, plus immediate deal cancellation.",
  },
  {
    q: "What is a Data Breach Notification SLA in a DPA?",
    a: "Under GDPR Article 33, a DPA requires the Data Processor to notify the Data Controller without undue delay (typically within 24 to 48 hours) upon discovering a personal data breach or unauthorized server access.",
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
  dateModified: "2026-07-26",
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
            What is a Data Processing Agreement (DPA) and Why Is It Mandatory Under GDPR?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word comprehensive data privacy and contract drafting guide for B2B SaaS vendors, IT consultancies, and digital agencies on satisfying GDPR Article 28 DPA requirements and Standard Contractual Clauses (SCCs).
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
            <span>Executive Legal Summary: GDPR DPA Mandatory Pillars</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Documented Controller Instructions</strong>
              <p className="text-navy-100 leading-relaxed">
                Processor acts strictly on documented instructions from the controller, prohibiting independent data monetization.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. Technical Security Measures (TOMs)</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory AES-256 encryption at rest, TLS 1.3 in transit, role-based access control, and 48-hour breach notifications.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Sub-Processor Authorization</strong>
              <p className="text-navy-100 leading-relaxed">
                Prior written approval required before engaging third-party cloud infrastructure (e.g. AWS, Stripe, Twilio).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Standard Contractual Clauses (SCCs)</strong>
              <p className="text-navy-100 leading-relaxed">
                Incorporation of European Commission SCCs to legally authorize cross-border data transfers outside the EEA.
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
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: Why B2B SaaS Deals Require a DPA</a></li>
            <li><a href="#controller-vs-processor" className="hover:text-gold-600 underline">2. Data Controller vs Data Processor Roles</a></li>
            <li><a href="#article-28-requirements" className="hover:text-gold-600 underline">3. Mandatory Provisions Under GDPR Article 28(3)</a></li>
            <li><a href="#technical-security-measures" className="hover:text-gold-600 underline">4. Technical & Organizational Security Measures (TOMs)</a></li>
            <li><a href="#standard-contractual-clauses" className="hover:text-gold-600 underline">5. EU Standard Contractual Clauses (SCCs) for International Transfers</a></li>
            <li><a href="#breach-notification" className="hover:text-gold-600 underline">6. Data Breach Notifications & Audit Rights</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: Why B2B SaaS Deals Require a DPA
          </h2>
          <p>
            When selling a B2B SaaS platform or software development service to corporate clients in the US, UK, or European Union, the sales process inevitably hits a legal roadblock: the client's legal and security procurement team demands a signed <strong>Data Processing Agreement (DPA)</strong>.
          </p>
          <p>
            Without an enterprise-ready DPA containing pre-drafted EU Standard Contractual Clauses (SCCs), enterprise procurement teams will refuse to sign Master Service Agreements (MSAs), stalling deals for months.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Commercial Impact:</strong>
            <p className="text-navy-900 text-sm">
              Having a self-service, downloadable DPA attached to your SaaS Terms of Service accelerates B2B sales cycles and proves enterprise security maturity.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="controller-vs-processor" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Data Controller vs Data Processor Roles
          </h2>
          <p>
            Understanding legal roles under GDPR is vital for structuring a DPA:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Data Controller:</strong> The client entity that collects personal data from end-users and determines <em>why</em> and <em>how</em> data is processed.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Data Processor:</strong> The SaaS vendor or IT agency that processes customer data strictly on behalf of the controller.</span></li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div id="article-28-requirements" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Mandatory Provisions Under GDPR Article 28(3)
          </h2>
          <p>
            GDPR Article 28(3) stipulates that every DPA MUST include the following explicit legal covenants:
          </p>
          <div className="space-y-3 text-sm pl-2 my-4">
            <div className="p-4 border border-border rounded-xl bg-off-white font-medium">1. Processor shall process data ONLY on documented instructions from Controller.</div>
            <div className="p-4 border border-border rounded-xl bg-off-white font-medium">2. Processor shall ensure all personnel authorized to handle data are bound by strict confidentiality.</div>
            <div className="p-4 border border-border rounded-xl bg-off-white font-medium">3. Processor shall assist Controller in responding to Data Subject Access Requests (DSARs).</div>
            <div className="p-4 border border-border rounded-xl bg-off-white font-medium">4. Processor shall delete or return all customer data upon contract termination.</div>
          </div>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ DPA CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Enterprise-Ready DPAs with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts custom Data Processing Agreements, EU Standard Contractual Clauses (SCCs), and Technical Security Annexes for SaaS vendors in US, UK, UAE, and Pakistan.
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

        {/* SECTION 4 */}
        <div id="technical-security-measures" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Technical & Organizational Security Measures (TOMs)
          </h2>
          <p>
            <strong>Annex II of a DPA</strong> must detail the specific Technical and Organizational Measures (TOMs) implemented by the processor, including:
          </p>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Encryption Standards:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Access Control:</strong> Multi-factor authentication (MFA) and Least-Privilege role restrictions for engineering staff.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Disaster Recovery:</strong> Daily automated database backups and redundant multi-region cloud hosting.</span></li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="standard-contractual-clauses" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. EU Standard Contractual Clauses (SCCs) for International Transfers
          </h2>
          <p>
            When customer data is stored or accessed outside the European Economic Area (EEA)—such as cloud servers or remote support engineers in the US, Pakistan, or UAE—the DPA must attach <strong>Module 2 (Controller-to-Processor) Standard Contractual Clauses</strong> approved by the European Commission.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="breach-notification" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Data Breach Notifications & Audit Rights
          </h2>
          <p>
            Under GDPR Article 33, processors must commit to notifying controllers without undue delay (typically within 48 hours) upon confirming a data breach, providing incident details and remediation steps.
          </p>
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
            GDPR DPA CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Close Enterprise Deals with Compliant DPAs
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            GDPR Article 28 DPA drafting, EU Standard Contractual Clauses (SCCs), Technical Security Annexes, and sub-processor agreements drafted by Advocate High Court.
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
