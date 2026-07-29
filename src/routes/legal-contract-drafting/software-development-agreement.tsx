import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Code,
  Globe,
  Briefcase,
  Scale,
  Laptop,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Software Development Agreement?",
    a: "A Software Development Agreement is a legally binding contract between a developer (or agency) and a client. It outlines the scope of work, project milestones, payment terms, intellectual property ownership, and warranties for a specific custom software project.",
  },
  {
    q: "Why do I need a specific agreement for software development?",
    a: "Software development is complex and iterative. Without a specific contract, disputes over feature scope (scope creep), bugs, source code ownership, and payment delays are extremely common. This agreement clarifies all these points.",
  },
  {
    q: "How does it handle scope creep?",
    a: "Our agreements include robust change control procedures. If a client requests new features outside the initial specification, the contract mandates that these must be documented and quoted as a separate addendum before work begins.",
  },
  {
    q: "Who owns the Intellectual Property (IP)?",
    a: "Typically, the contract stipulates that IP transfers to the client only after final and full payment is received. Until then, you retain ownership. We can also include clauses letting you retain ownership of your pre-existing background tech/libraries.",
  },
  {
    q: "Can I use this for mobile app development?",
    a: "Yes, this agreement is tailored for all forms of custom software development, including web applications, mobile apps, desktop software, and API integrations.",
  },
  {
    q: "How are payment milestones structured?",
    a: "We structure the agreement to allow for milestone-based payments (e.g., 30% upfront, 30% at beta, 40% on delivery) or time-and-materials billing, ensuring your cash flow is protected throughout the project lifecycle.",
  },
  {
    q: "Does this include a warranty or bug-fixing period?",
    a: "Yes. The agreement defines a specific, limited warranty period (e.g., 30 or 60 days post-launch) where you will fix critical bugs for free, after which clients must sign an SLA for ongoing maintenance.",
  },
  {
    q: "What if the client delays providing necessary assets or feedback?",
    a: "The contract includes a 'Client Dependencies' clause. If the client delays in providing necessary APIs, designs, or feedback, the project timeline and milestones are automatically extended without penalty to you.",
  },
  {
    q: "Is source code delivery mandated?",
    a: "Yes, the contract defines exactly when and how the source code is delivered, and explicitly states it is only handed over upon full payment clearance.",
  },
  {
    q: "Are open-source licenses addressed?",
    a: "Yes, the agreement clarifies that the software may contain open-source components and that the client's rights to those components are subject to their respective open-source licenses, protecting you from IP infringement claims.",
  },
  {
    q: "Can the contract be terminated mid-project?",
    a: "Yes, it includes termination clauses. If a client cancels, they are required to pay for all work completed up to the termination date, protecting you from sunk costs.",
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
  name: "Software Development Agreement",
  description:
    "Custom Software Development Agreement drafting for freelancers, IT agencies, and software houses to govern specific project deliverables, IP, and milestones.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/legal-contract-drafting/software-development-agreement",
  offers: {
    "@type": "Offer",
    price: "79.00",
    priceCurrency: "USD",
    description: "Custom drafted Software Development Agreement.",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/software-development-agreement")({
  head: () => ({
    meta: [
      { title: "Software Development Agreement | Legal Contract Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Legally protect your custom software projects. Prevent scope creep, secure your IP, and guarantee payments with our Software Development Agreement.",
      },
      {
        name: "keywords",
        content:
          "software development agreement, custom software contract Pakistan, freelance developer contract, software development legal template, IT project contract",
      },
      {
        property: "og:title",
        content: "Software Development Agreement | Legal Contract Drafting",
      },
      {
        property: "og:description",
        content:
          "Legally protect your custom software projects. Prevent scope creep, secure your IP, and guarantee payments.",
      },
      { property: "og:url", content: "/legal-contract-drafting/software-development-agreement" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/software-development-agreement" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SoftwareDevelopmentAgreement,
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
            💻 PROJECT CONTRACTS
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Software Development
            <br />
            Agreement
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Define clear project scopes, protect your source code, and enforce milestone payments. A legally robust contract designed specifically for freelance developers, agencies, and software houses.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft My Contract
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
              <Check size={16} className="text-gold-500" /> Prevents Scope Creep
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Milestone Payment Security
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> IP Ownership Clarity
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
                What is a Software Development Agreement?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Software Development Agreement is the blueprint for a successful custom software project. It legally binds both you (the developer) and the client to a specific set of deliverables, timelines, and payment structures.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Unlike generic service contracts, this agreement specifically addresses technical nuances like open-source licensing, bug-fixing warranties, change requests (scope control), and the conditional handover of source code.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Laptop size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Developers Need It</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">No Free Work:</strong> Legally mandate payment for extra feature requests.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Code Leverage:</strong> Withhold the codebase until the final invoice is paid.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Expectation Management:</strong> Clearly define what constitutes a bug vs. a new feature.</span>
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
            Coding Without a Contract
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Starting development based on a verbal agreement or a basic invoice leads to classic project disasters.
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
                  Endless Scope Creep
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  "Can we just add this one small button?" Without a change control clause, you end up doing weeks of unpaid labor under the guise of finishing the project.
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
                  Payment Hostage
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Clients may demand the source code before final payment, or arbitrarily decide the software "isn"t what they wanted," leaving you unpaid for months of work.
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
                  Perpetual Support
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without defining a strict warranty period, clients expect free technical support and server maintenance years after the project is technically finished.
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
      title: "Detailed Scope & Specs",
      desc: "Framework to attach technical specifications, ensuring the client signs off on exactly what will be built.",
    },
    {
      title: "Change Request Process",
      desc: "A formalized process stating any deviations from the original scope require a new quote and timeline adjustment.",
    },
    {
      title: "Milestone Payment Structure",
      desc: "Links code delivery to cash flow, protecting you from doing significant work without intermediate compensation.",
    },
    {
      title: "IP Retention & Transfer",
      desc: "Retain ownership of your pre-existing libraries, and transfer project IP only upon clearance of final funds.",
    },
    {
      title: "Warranty & Acceptance",
      desc: "Limits your free bug-fixing period to a specific timeframe (e.g., 30 days) post-delivery.",
    },
    {
      title: "Client Responsibilities",
      desc: "Holds the client accountable for delays if they fail to provide essential assets, APIs, or feedback on time.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Inside the Agreement
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Drafted specifically for the realities of modern software engineering.
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
            <p className="text-xs text-gray-500 uppercase tracking-widest">SOFTWARE DEV AGREEMENT</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$79</span>
              <span className="text-sm text-gray-500">one-time</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Protect your code and your cash flow with a robust legal framework.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Customised to your tech stack and methods</span>
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
                <span>Change request annexure included</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Contract — $79
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
      desc: "Strict non-disclosure terms protecting both your business methods and the client's data.",
    },
    {
      title: "Drafting",
      desc: "Our legal team drafts the contract to align with your project scope and protects against common pitfalls.",
    },
    {
      title: "Review & Revision",
      desc: "You review the document to ensure the payment terms and warranty periods match your business model.",
    },
    {
      title: "Final Delivery",
      desc: "You receive the finalised, reusable contract template ready for your next big software project.",
    },
    {
      title: "Usage Guidance",
      desc: "We provide tips on how to enforce the change control process with difficult clients.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Fast, professional drafting tailored to developers.
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
          <SectionLabel center>DEVELOPER ADVANTAGES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Code With Confidence
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Transform client relationships from chaotic to structured.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Legal Protection</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Shield yourself from unreasonable client demands, liability for third-party API failures, and uncompensated feature additions.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Scale className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Fair Accountability</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Ensure clients understand their role in the project. If they delay feedback, the contract legally shifts the timeline without penalizing you.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Code className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Code Security</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Maintain leverage. The contract acts as your shield, clearly stating that source code is a product that is only delivered once fully paid for.
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
      title: "Master Service Agreement",
      path: "/legal-contract-drafting/master-service-agreement",
      desc: "Establish long-term umbrella terms for recurring enterprise clients.",
    },
    {
      title: "Service Level Agreement (SLA)",
      desc: "Define post-launch maintenance, support, and server uptime guarantees.",
      path: "/legal-contract-drafting/service-level-agreement",
    },
    {
      title: "UK LTD Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Form a UK corporate entity to legally enforce your international contracts.",
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
            PROFESSIONALIZE YOUR PROJECTS
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Write a Single Line of Code
            <br />
            Without a Contract.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your time, your intellectual property, and your revenue with a professional Software Development Agreement.
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
            Expert Legal Drafting · Built for Developers · Prevents Scope Creep
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function SoftwareDevelopmentAgreement() {
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
