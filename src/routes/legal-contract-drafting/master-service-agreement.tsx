import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Lock,
  Globe,
  Briefcase,
  Scale,
  Scale3d,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Master Service Agreement (MSA)?",
    a: "A Master Service Agreement (MSA) is a foundational contract between a service provider and a client that establishes the overarching terms and conditions for all future projects. It covers confidentiality, dispute resolution, intellectual property rights, and liability, so you don't have to renegotiate these for every new project.",
  },
  {
    q: "Why do Pakistani IT agencies need an MSA?",
    a: "If you work with international clients, an MSA provides legal protection and sets professional standards. It prevents scope creep, protects your intellectual property, and ensures you have a clear legal standing if a foreign client attempts to withhold payment or breach terms.",
  },
  {
    q: "Is this MSA legally binding for international clients?",
    a: "Yes. Our MSAs are drafted to be legally enforceable internationally, usually specifying a mutually agreeable jurisdiction (like the UK, US, or international arbitration) to ensure your rights are protected across borders.",
  },
  {
    q: "How does an MSA differ from a Statement of Work (SOW)?",
    a: "An MSA dictates the general legal and operational terms (like payment terms, IP ownership, and confidentiality) that apply to the entire relationship. A Statement of Work (SOW) is a smaller, project-specific document attached to the MSA that outlines the exact deliverables, timeline, and cost for a single project.",
  },
  {
    q: "Does the MSA cover Intellectual Property (IP) rights?",
    a: "Absolutely. A critical component of our MSA drafts is defining exactly when IP transfers to the client (usually only upon full payment) and what pre-existing IP you retain as the agency.",
  },
  {
    q: "Can I use this template for multiple clients?",
    a: "Yes, once drafted, this Master Service Agreement acts as your core template. You can use it repeatedly with new clients, only needing to draft a new Statement of Work (SOW) for each specific project you undertake with them.",
  },
  {
    q: "What payment terms are included in the MSA?",
    a: "We structure robust payment terms including invoicing schedules, late payment penalties, currency specifications, and suspension rights if a client fails to pay. This protects your cash flow.",
  },
  {
    q: "Does the MSA include an NDA (Non-Disclosure Agreement)?",
    a: "Yes, our comprehensive MSA includes robust confidentiality and non-disclosure clauses, meaning you often don't need a separate NDA when signing a new client.",
  },
  {
    q: "How do we handle disputes under this agreement?",
    a: "The agreement includes a clear dispute resolution mechanism, starting with mandatory good-faith negotiation, followed by mediation, and specifying the final binding arbitration or court jurisdiction if unresolved.",
  },
  {
    q: "Can the MSA be terminated early?",
    a: "Yes. It includes clear termination clauses detailing how either party can exit the agreement, the required notice period, and how outstanding payments for completed work will be handled.",
  },
  {
    q: "Do I need a lawyer to review it before every use?",
    a: "Our MSA is drafted by legal professionals to serve as a solid, reusable foundation. While major changes to the core terms might require review, the standard terms are designed for you to use seamlessly with just new SOWs.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Legal Contract Drafting",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Master Service Agreement (MSA) for Tech Agencies",
  description:
    "Professional Master Service Agreement drafting for Pakistani IT agencies, software houses, and service providers dealing with international B2B clients.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/legal-contract-drafting/master-service-agreement",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    description: "Custom drafted Master Service Agreement.",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/master-service-agreement")({
  head: () => ({
    meta: [
      { title: "Master Service Agreement (MSA) | Tech Agency Legal Contract Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Secure your long-term B2B client relationships with a professional Master Service Agreement (MSA) tailored for Pakistani IT agencies and software houses.",
      },
      {
        name: "keywords",
        content:
          "master service agreement, MSA contract Pakistan, IT agency legal contract, master service agreement draft, software agency MSA, legal contract for freelancers",
      },
      {
        property: "og:title",
        content: "Master Service Agreement (MSA) | Tech Agency Legal Contract Drafting",
      },
      {
        property: "og:description",
        content:
          "Secure your long-term B2B client relationships with a professional Master Service Agreement (MSA).",
      },
      { property: "og:url", content: "/legal-contract-drafting/master-service-agreement" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/master-service-agreement" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: MSAContract,
});

/* ---------- SECTION 1: HERO ---------- */
function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">
            ⚖️ Legal Contract Drafting
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Master Service Agreement
            <br />
            For Tech Agencies
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your long-term B2B client relationships with an iron-clad Master Service Agreement (MSA). Protect your intellectual property, enforce payment terms, and prevent scope creep with international clients.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft My MSA
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Ask on WhatsApp
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> International Jurisdiction Friendly
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> IP Protection Built-In
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Drafted by Lawyers
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 2: WHAT IS IT ---------- */
function ServiceOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>THE ESSENTIALS</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is an MSA?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Master Service Agreement (MSA) is the primary contract that governs your relationship with a client. Instead of negotiating complex legal terms like confidentiality, liability limits, and intellectual property rights for every single project, an MSA sets these rules in stone from day one.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Once an MSA is signed, you can execute multiple projects quickly using simple Statements of Work (SOWs) that only detail the specific deliverables, deadlines, and pricing for that specific phase.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <FileText size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Tech Agencies Need It</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Scalability:</strong> Onboard new projects with existing clients instantly.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Professionalism:</strong> Shows international clients you are a serious enterprise.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Risk Mitigation:</strong> Caps your financial liability if a project goes wrong.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 3: THE DANGER ---------- */
function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Operating Without an MSA
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Relying solely on informal emails or generic freelance templates exposes your agency to catastrophic legal and financial risks.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Unpaid Invoices
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without strict payment terms and suspension rights outlined in an MSA, clients can delay payments indefinitely, severely impacting your cash flow.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Unlimited Liability
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If a bug in your software causes client downtime or data loss, without a liability cap in an MSA, you could be sued for millions in damages.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  IP Theft & Disputes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If IP transfer conditions aren't crystal clear, clients might claim ownership of your proprietary code or frameworks, preventing you from using them again.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 4: WHAT IS INCLUDED ---------- */
function WhatIsIncluded() {
  const inclusions = [
    {
      title: "Confidentiality & NDA",
      desc: "Robust non-disclosure terms protecting both your agency's proprietary methods and the client's sensitive data.",
    },
    {
      title: "IP Rights Management",
      desc: "Clear rules stating that IP transfers to the client only after full payment is received, protecting your code.",
    },
    {
      title: "Limitation of Liability",
      desc: "Legal safeguards that cap your financial exposure in the event of software failure or project delays.",
    },
    {
      title: "Payment & Suspension Terms",
      desc: "Strict payment schedules, late fee enforcements, and your legal right to suspend work if invoices go unpaid.",
    },
    {
      title: "Dispute Resolution",
      desc: "A step-by-step process for handling disagreements, specifying arbitration or specific legal jurisdictions.",
    },
    {
      title: "SOW Template Annexure",
      desc: "Includes a standard Statement of Work template that perfectly integrates with the MSA for future projects.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Inside Your MSA Draft
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Our comprehensive Master Service Agreement is meticulously drafted to protect every angle of your digital agency.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <CheckCircle className="text-gold-500 mb-4" size={24} />
                <h3 className="font-sans text-[18px] font-semibold text-dark-text">{inc.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{inc.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 5: PRICING ---------- */
function Pricing() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Fixed Fee Drafting
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Full Document
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">CUSTOM MSA DRAFTING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$99</span>
              <span className="text-sm text-gray-500">one-time</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Drafted by corporate legal experts tailored for tech and creative agencies.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Customised to your agency's exact services</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Includes 1 free revision within 7 days</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Delivery within 3-4 business days</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>SOW template annexure included</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Contract — $99
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: PROCESS ---------- */
function ProcessSteps() {
  const steps = [
    {
      title: "Consultation",
      desc: "We gather details about your business model, services provided, and target client jurisdictions.",
    },
    {
      title: "Drafting",
      desc: "Our legal experts draft your Master Service Agreement, focusing on IP protection and liability mitigation.",
    },
    {
      title: "Review & Revision",
      desc: "You review the drafted agreement. We provide up to one comprehensive revision round to ensure perfection.",
    },
    {
      title: "Final Delivery",
      desc: "You receive the final polished MSA in editable format, ready to be sent to your international clients.",
    },
    {
      title: "Execution Support",
      desc: "We provide brief guidelines on how to correctly fill out and attach SOWs for future projects.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Draft Your MSA
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A streamlined process ensuring legal airtightness.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          {steps.map((st, idx) => (
            <Reveal key={st.title}>
              <div className="text-center px-2">
                <div className="w-16 h-16 rounded-full border border-gold-500 flex items-center justify-center mx-auto mb-4 bg-gold-500/5">
                  <span className="font-serif text-2xl text-gold-500">{idx + 1}</span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-dark-text mt-2">{st.title}</h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 7: BENEFITS / INTEGRATIONS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>LEGAL ADVANTAGES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Why Professionals Insist on MSAs
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Elevate your agency's legal standing and close enterprise deals with confidence.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Enterprise Trust</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Large corporations and enterprise clients expect to sign an MSA. Presenting one proactively demonstrates maturity, organization, and a professional operating standard.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Briefcase className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Faster Deal Closure</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                By removing legal friction from every individual project, an MSA allows your sales team to close repeat business instantly using just a one-page SOW.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Scale className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Predictable Risk</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Clearly define boundaries for support, bug fixes, and liability. Prevent scope creep legally and ensure you get paid for extra work requested outside the initial scope.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 8: FAQ ---------- */
function FAQAccordionItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left text-lg font-medium text-white hover:text-gold-500 transition-colors focus:outline-none"
      >
        <span className="pr-6">{q}</span>
        <ChevronDown
          size={20}
          className={`text-gold-500 shrink-0 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-navy-200 text-base leading-relaxed font-sans">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <section className="bg-navy-950 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>FAQ</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-white mt-4">
            Frequently Asked Questions
          </h2>
        </Reveal>
        <Reveal>
          <div className="w-full divide-y divide-white/10">
            {faqs.map((f, i) => (
              <FAQAccordionItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 9: RELATED SERVICES ---------- */
function RelatedServices() {
  const services = [
    {
      title: "Software Development Agreement",
      path: "/legal-contract-drafting/software-development-agreement",
      desc: "Project-specific contracts detailing milestones, IP transfer, and software specifications.",
    },
    {
      title: "Service Level Agreement (SLA)",
      desc: "Contracts defining uptime, support response times, and maintenance duties.",
      path: "/legal-contract-drafting/service-level-agreement",
    },
    {
      title: "UK LTD Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a UK entity to give your international Legal Contract Drafting the backing of UK corporate law.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Legal Services
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Reveal key={s.title}>
              <Link to={s.path as any} className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full hover:border-gold-500/50 hover:shadow-lg transition-all duration-300 group block">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text group-hover:text-gold-600 transition-colors">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">View Details <ArrowRight size={12} /></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 10: CTA BANNER ---------- */
function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            PROTECT YOUR BUSINESS
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Stop Working Without a Safety Net.
            <br />
            Draft Your MSA Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your tech agency operates with professional, enforceable legal agreements that protect your IP and guarantee your payments.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get Started Now →
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              WhatsApp Us Directly
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            Professional Drafting · Fast Turnaround · International Jurisdiction Ready
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function MSAContract() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <BankingIntegrations />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
