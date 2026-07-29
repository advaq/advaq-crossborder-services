import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Briefcase,
  FileText,
  Scale,
  Clock,
  PenTool,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Fixed-Price Project Contract?",
    a: "It is a legally binding agreement structured specifically for projects with a defined, unchangeable total cost. It emphasizes strict scope limitations and milestone-based payments.",
  },
  {
    q: "How does this differ from an hourly contract?",
    a: "In an hourly contract, the client pays for your time regardless of the final outcome. A fixed-price contract guarantees a specific result for a specific price, making clear scope definitions absolutely vital.",
  },
  {
    q: "How do I prevent clients from adding extra tasks for free?",
    a: "This template includes a robust 'Change Order' clause. If the client requests anything outside the defined scope, it dictates that a new quote or hourly rate must be approved before work begins.",
  },
  {
    q: "What if the project is delayed by the client?",
    a: "The contract includes a 'Client Delay' clause that protects your timeline. If the client fails to provide assets or feedback within a set period, the timeline is automatically extended or project paused.",
  },
  {
    q: "How should milestone payments be structured?",
    a: "The contract template is pre-formatted with a standard deposit structure (e.g., 50% upfront, 25% at milestone, 25% on completion), ensuring you are never fully out of pocket while working.",
  },
  {
    q: "Can I use this for software development?",
    a: "Yes, this template is ideal for software development, web design, and any deliverable-based agency work where a strict budget and defined technical specifications are present.",
  },
  {
    q: "Does this contract cover warranty or bug fixes?",
    a: "Yes, it includes a limited warranty period clause, defining exactly how long you will fix bugs post-delivery for free, and when those requests become paid maintenance.",
  },
  {
    q: "Are the deliverables legally mine until paid for?",
    a: "Absolutely. The IP ownership clause explicitly states that title and rights to the deliverables do not transfer to the client until the final payment clears your bank account.",
  },
  {
    q: "Is it easy to edit the project scope?",
    a: "The template includes a dedicated 'Exhibit A / Scope of Work' appendix at the end, allowing you to easily paste in detailed specifications without altering the core legal terms.",
  },
  {
    q: "Is this contract valid internationally?",
    a: "Yes, the boilerplate clauses (governing law, dispute resolution, severability) are standard for cross-border B2B transactions, protecting you globally.",
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
  serviceType: "Legal Contract Template",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Fixed-Price Project Contract Template",
  description:
    "A rigorous legal template designed to protect agencies and freelancers undertaking fixed-price, scope-heavy projects. Includes milestone payments and change order terms.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/legal-contract-drafting/fixed-price-project-contract",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "One-time purchase for a lifetime license to the contract template.",
  },
};

export const Route = createFileRoute(
  "/legal-contract-drafting/fixed-price-project-contract"
)({
  head: () => ({
    meta: [
      { title: "Fixed-Price Project Contract Template | Legal Contract Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Secure your fixed-price projects with this rigorous contract template. Enforce milestone payments, kill scope creep, and protect your margins. Download for $49.",
      },
      {
        name: "keywords",
        content:
          "fixed price project contract, fixed fee agreement template, scope of work contract, agency project contract, software development agreement, web design contract",
      },
      {
        property: "og:title",
        content: "Fixed-Price Project Contract Template | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Rigorous legal template designed to protect agencies and freelancers undertaking fixed-price, scope-heavy projects.",
      },
      {
        property: "og:url",
        content: "/legal-contract-drafting/fixed-price-project-contract",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://[yourdomain.com]/legal-contract-drafting/fixed-price-project-contract",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: FixedPriceContract,
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
            ⚖️ LEGAL CONTRACT TEMPLATES
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Fixed-Price Project Contract
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            When you charge a flat fee, scope creep destroys your profit margins. This rigorous contract template strictly limits deliverables, enforces milestone payments, and requires paid change orders for extra work.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Purchase Template — $49
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Ask a Question
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Instant Word/Docs Download
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Strict Scope Controls
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Reusable for Unlimited Projects
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
                What is a Fixed-Price Contract?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Fixed-Price Project Contract is a specialized agreement used when you promise to deliver a specific product (like a website, an app, or a branding package) for a predetermined, unchangeable flat fee.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Because the client's risk is low (they know exactly what they will pay), your risk is high. If the project takes twice as long, you still get paid the same. This contract is heavily engineered to mitigate that risk by building a legally impenetrable wall around your project scope.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Use This Contract?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Protect Profit Margins:</strong> Stop free extra work with Change Orders.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Milestone Cashflow:</strong> Tie payments legally to project phases.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Limit Liabilities:</strong> Cap damages to the project value.</span>
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
            The Danger of Flat Fees
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Fixed-price projects without strict legal boundaries are the fastest way to bankrupt a service business.
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
                  The Feature Creep Trap
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Clients will naturally assume that "minor tweaks" or "small new features" are included in the flat fee. Without a contract stating otherwise, your hourly rate drops to zero.
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
                  Hostage Milestones
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If the contract doesn't clearly define what constitutes 'completion', a client can withhold the final 50% payment indefinitely by claiming they aren't fully satisfied yet.
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
                  Client Bottlenecks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  When clients take weeks to provide feedback or assets, your schedule is ruined. Without a delay clause, you have no recourse to bill them or pause the project.
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
      title: "Detailed Scope Appendix",
      desc: "A dedicated section to list exactly what is included (and explicitly what is excluded).",
    },
    {
      title: "Change Order Protocol",
      desc: "Legal requirement that any work outside the scope must be quoted and approved in writing.",
    },
    {
      title: "Milestone Payment Schedule",
      desc: "Structures payments around deliverables (e.g., Wireframes 25%, Beta 25%, Launch 50%).",
    },
    {
      title: "Acceptance Criteria",
      desc: "Defines exactly how a client approves a milestone, and auto-approves it if they go silent.",
    },
    {
      title: "Client Responsibilities",
      desc: "Clauses holding the client accountable for delays if they fail to provide required materials.",
    },
    {
      title: "Post-Launch Warranty",
      desc: "Sets a strict time limit (e.g., 30 days) for free bug fixes before a maintenance contract is required.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Inside the Project Contract
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A contract designed to force project momentum and guarantee your compensation.
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
            One-Time Purchase
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Lifetime Access
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">CONTRACT TEMPLATE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$49</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Download instantly. Use it for unlimited clients and projects forever.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Fully editable MS Word & Google Docs formats</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Highlighted variables for quick customization</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Drafted for cross-border/international clients</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>No recurring fees or subscriptions</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Buy Template — $49
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
      title: "Purchase",
      desc: "Complete the checkout process to instantly receive the template files via email.",
    },
    {
      title: "Download",
      desc: "Open the document in MS Word or copy it to your Google Docs account.",
    },
    {
      title: "Customize",
      desc: "Fill in the highlighted brackets (e.g., [Client Name], [Payment Amount]) in minutes.",
    },
    {
      title: "Export",
      desc: "Save the document as a clean PDF ready for signature.",
    },
    {
      title: "Send & Sign",
      desc: "Send to your client via email or an e-signature platform like DocuSign.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>HOW TO USE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Ready in 5 Minutes
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Our template is designed for immediate deployment. No legal degree required.
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

/* ---------- SECTION 7: KEY CONTRACT CLAUSES ---------- */
function KeyClauses() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>LEGAL PROTECTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Powerful Contract Features
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Every clause is deliberately crafted to shift power and protection back to you.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Scale className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Auto-Acceptance</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If you deliver a milestone and the client fails to provide feedback within X days, the deliverable is legally deemed accepted, triggering the invoice.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Clock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Pause & Resume Fees</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Allows you to legally charge a re-onboarding fee if a client ghosts a project for months and then returns expecting immediate attention.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileText className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Governing Law</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Establishes exactly which country/state's laws govern the contract, preventing expensive international jurisdictional disputes if arbitration is needed.
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
      title: "Freelance Service Agreement",
      path: "/legal-contract-drafting/freelance-service-agreement",
      desc: "A foundational legal document for general freelance work, covering IP, payments, and scope boundaries.",
    },
    {
      title: "Hourly Retainer Agreement",
      path: "/legal-contract-drafting/hourly-retainer-agreement",
      desc: "Perfect for ongoing monthly services where you bill clients based on a set number of hours or availability.",
    },
    {
      title: "UK LTD Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a formal company entity to conduct international business and sign contracts under a corporate name.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>MORE CONTRACTS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Other Legal Templates
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
            Stop Losing Profit to Scope Creep.
            <br />
            Download the Template Now.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Instantly download your professional, editable Fixed-Price Project Contract and start sending it to clients today. Take your business seriously.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get Template Now →
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Ask on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            One-time payment of $49 · Instant Download · Fully Editable Word/Docs
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function FixedPriceContract() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <KeyClauses />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
