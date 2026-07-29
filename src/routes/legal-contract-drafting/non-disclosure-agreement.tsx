import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  CheckCircle,
  ChevronDown,
  Shield,
  HelpCircle,
  Clock,
  Briefcase,
  FileText,
  Building2,
  Lock,
  Globe,
  CreditCard,
  Percent,
  Coins,
  Scale,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Non-Disclosure Agreement (NDA)?",
    a: "A Non-Disclosure Agreement (NDA), also known as a confidentiality agreement, is a legally binding contract that establishes a confidential relationship. The party or parties signing the agreement agree that sensitive information they may obtain will not be made available to any others.",
  },
  {
    q: "When should I use a one-way NDA?",
    a: "You should use a one-way (unilateral) NDA when only one party is disclosing confidential information to the other. For example, if you are hiring a freelancer, a contractor, or an employee who will have access to your proprietary code, customer lists, or business strategies.",
  },
  {
    q: "Is this NDA enforceable internationally?",
    a: "Our NDAs are drafted with jurisdiction clauses that are generally enforceable, but enforcing a contract across borders depends on local laws. We typically draft the governing law to protect your business under the jurisdiction of your choice, making it a strong deterrent.",
  },
  {
    q: "How long does an NDA last?",
    a: "The duration of an NDA varies depending on what is agreed upon. A typical timeframe is 2 to 5 years, but it can be indefinite for highly sensitive information like trade secrets. We tailor the duration clause to fit the nature of your specific business needs.",
  },
  {
    q: "Can an NDA protect my business idea?",
    a: "An NDA protects the confidential information and execution details of your business idea, not just the abstract idea itself. If you share proprietary data, financial projections, or software architecture, the NDA legally binds the recipient from disclosing or using that specific information.",
  },
  {
    q: "What happens if someone breaches the NDA?",
    a: "If an NDA is breached, you have the legal right to seek injunctive relief (to stop further disclosure) and claim financial damages for any losses incurred. A well-drafted NDA serves as a strong legal basis for litigation if a breach occurs.",
  },
  {
    q: "Do I need a lawyer to draft an NDA?",
    a: "While you can find templates online, generic NDAs often fail to adequately protect specific business interests or lack proper jurisdiction clauses. Our NDAs are drafted by legal professionals specifically for software houses, agencies, and e-commerce businesses.",
  },
  {
    q: "What information should be excluded from an NDA?",
    a: "Standard exclusions include information that is already in the public domain, information the receiving party already knew before signing, information obtained from a third party without confidentiality obligations, and information independently developed without using the confidential data.",
  },
  {
    q: "Can I use the same NDA for multiple contractors?",
    a: "Yes, once we draft a master one-way NDA tailored to your business, you can use it as a standard template for onboarding multiple freelancers, employees, or contractors by simply updating the recipient's details.",
  },
  {
    q: "How quickly can I get my drafted NDA?",
    a: "We deliver custom-drafted NDAs within 24 to 48 hours of understanding your specific requirements. You will receive a fully formatted, legally binding document ready for signatures.",
  },
  {
    q: "Do NDAs cover intellectual property (IP)?",
    a: "An NDA protects the confidentiality of your IP but does not necessarily transfer ownership. For transferring ownership of created work (like software code), you need an IP Assignment Agreement, which we also provide.",
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
  name: "Non-Disclosure Agreement (NDA)",
  description:
    "Professionally drafted Non-Disclosure Agreement (One-Way NDA) for Pakistani agencies, freelancers, and businesses to protect confidential information.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/legal-contract-drafting/non-disclosure-agreement",
  offers: {
    "@type": "Offer",
    price: "39.00",
    priceCurrency: "USD",
    description: "One-time drafting fee for a custom One-Way Non-Disclosure Agreement.",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/non-disclosure-agreement")({
  head: () => ({
    meta: [
      { title: "Non-Disclosure Agreement (NDA) Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Secure your sensitive business information with a professionally drafted Non-Disclosure Agreement (NDA). Custom-made for Pakistani startups, agencies, and tech companies.",
      },
      {
        name: "keywords",
        content:
          "non disclosure agreement, one way nda, confidentiality agreement, legal contract pakistani business, protect trade secrets, nda drafting service",
      },
      {
        property: "og:title",
        content: "Non-Disclosure Agreement (NDA) Drafting | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Secure your sensitive business information with a professionally drafted Non-Disclosure Agreement (NDA). Custom-made for Pakistani startups and agencies.",
      },
      { property: "og:url", content: "/legal-contract-drafting/non-disclosure-agreement" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/non-disclosure-agreement" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: NonDisclosureAgreement,
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
            ⚖️ LEGAL CONTRACT DRAFTING
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Non-Disclosure Agreement
            <br />
            (One-Way NDA)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Protect your trade secrets, client lists, and proprietary software. We draft airtight, legally binding confidentiality agreements tailored for Pakistani agencies hiring freelancers, contractors, and employees.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft My NDA
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
              <Check size={16} className="text-gold-500" /> Drafted by Legal Experts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Custom Jurisdiction
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Delivered in 48 Hours
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Ready to Sign
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
                What is a One-Way NDA?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A <strong className="font-semibold">One-Way Non-Disclosure Agreement (NDA)</strong> is a foundational legal contract used when only one party is disclosing confidential information to another. It ensures that the receiving party is legally bound to keep the information secret and not use it for unauthorized purposes.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For software houses, digital agencies, and startups in Pakistan, an NDA is crucial when hiring contractors, remote developers, or sharing access to client databases and proprietary source code. It establishes legal boundaries and deters intellectual property theft.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Lock size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Do You Need It?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Protect Client Data:</strong> Ensure freelancers don't steal your clients or expose their data.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Safeguard Source Code:</strong> Prevent remote developers from copying your proprietary software.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Deterrent Effect:</strong> A formal legal document strongly discourages unethical behavior.</span>
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
            Operating Without Confidentiality Protocols
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Hiring contractors or sharing sensitive business ideas without an NDA leaves your most valuable assets completely exposed.
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
                  Client Poaching
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a non-solicitation and non-disclosure clause, freelancers can directly contact your clients and offer services at a lower rate, bypassing your agency entirely.
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
                  Code & IP Theft
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Developers may reuse the proprietary algorithms, designs, or source code they built for you on other competing projects if not legally restricted.
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
                  No Legal Recourse
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If someone leaks your business strategies or financial data, you have no solid foundation to sue for damages without a signed confidentiality agreement.
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
      title: "Definition of Confidentiality",
      desc: "Clear, exhaustive definitions of what constitutes protected confidential information in your specific industry.",
    },
    {
      title: "Obligations of Receiving Party",
      desc: "Strict terms dictating how the recipient must handle, store, and eventually destroy or return the sensitive data.",
    },
    {
      title: "Exclusions from Confidentiality",
      desc: "Standard legal carve-outs ensuring the contract remains fair and legally enforceable in a court of law.",
    },
    {
      title: "Term and Duration",
      desc: "Custom timeframes dictating how long the confidentiality obligations survive after the working relationship ends.",
    },
    {
      title: "Jurisdiction & Governing Law",
      desc: "Specifically determining which courts and laws apply in the event of a breach or dispute.",
    },
    {
      title: "Remedies & Injunctive Relief",
      desc: "Clauses that allow you to seek immediate court intervention to stop unauthorized disclosures.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Custom NDA Features
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We don't provide generic templates. We draft comprehensive legal shields for your business.
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
            One-Time Drafting Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Bespoke Contract
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE DRAFTED NDA</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$39</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *A single, comprehensive template tailored for your business that you can reuse for unlimited contractors and employees.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Custom drafted by licensed legal professionals</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Tailored jurisdiction and governing law clauses</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Delivered in fully editable Word & PDF formats</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Includes one round of revisions if needed</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — $39
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
      title: "Submit Requirements",
      desc: "Fill out a brief form detailing your business type, the nature of the information to be protected, and your preferred jurisdiction.",
    },
    {
      title: "Legal Review",
      desc: "Our advocates review your specific scenario to ensure the necessary restrictive covenants and definitions are included.",
    },
    {
      title: "Drafting",
      desc: "We draft the custom One-Way NDA, ensuring all loopholes are closed and the language is robust and enforceable.",
    },
    {
      title: "Delivery",
      desc: "Within 48 hours, you receive the complete document, ready to be sent to your contractors or employees for digital signature.",
    },
    {
      title: "Revisions",
      desc: "Review the contract, and if you need minor adjustments or specific clauses tweaked, we offer a round of revisions.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How to Get Your Contract
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A fast, professional, and entirely remote legal drafting process.
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

/* ---------- SECTION 7: CORE CLAUSES ---------- */
function ContractInfrastructure() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>CONTRACT INFRASTRUCTURE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Built for Modern Digital Agencies
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Our contracts are designed specifically for the tech and service sectors, covering modern digital assets.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileText className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Software & Code Protection</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Explicit clauses protecting source code, algorithms, API architectures, and database schemas from being copied or reused by freelance developers.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Client Data Privacy</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Protects your client lists, pricing strategies, and customer personal data, ensuring contractors cannot circumvent you to work directly with your clients.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Scale className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Non-Solicitation (Optional)</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                We can include clauses that prevent former contractors or employees from poaching your staff or soliciting your active customers after they leave.
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
      title: "Mutual NDA",
      path: "/legal-contract-drafting/mutual-nda",
      desc: "For two-way confidentiality when both parties are sharing sensitive business information.",
    },
    {
      title: "IP Assignment Agreement",
      path: "/legal-contract-drafting/ip-assignment-agreement",
      desc: "Legally transfer the ownership of software code, designs, or other intellectual property.",
    },
    {
      title: "UK Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a UK Limited company to give your business an international corporate identity.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Legal Contract Drafting
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <Link
                  to={s.path}
                  className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest hover:gap-2.5 transition-all"
                >
                  View Details <ArrowRight size={12} />
                </Link>
              </div>
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
            SECURE YOUR BUSINESS
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Expose Your IP.
            <br />
            Get Your Custom NDA Drafted Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Stop relying on risky free templates. Get an airtight, professionally drafted confidentiality agreement that stands up in court.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Order NDA Drafting →
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
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function NonDisclosureAgreement() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <ContractInfrastructure />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
