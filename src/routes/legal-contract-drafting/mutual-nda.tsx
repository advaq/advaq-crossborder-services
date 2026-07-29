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
  Handshake,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Mutual Non-Disclosure Agreement (MNDA)?",
    a: "A Mutual Non-Disclosure Agreement (MNDA) is a legal contract where both parties agree not to disclose each other's confidential information. It is used when two businesses or individuals intend to share proprietary data with one another.",
  },
  {
    q: "How does a Mutual NDA differ from a standard NDA?",
    a: "A standard (one-way) NDA only protects the information of the disclosing party. A Mutual NDA protects the information of both parties equally, making it ideal for joint ventures, partnerships, and two-way business evaluations.",
  },
  {
    q: "When should I use a Mutual NDA?",
    a: "You should use an MNDA when exploring a merger, forming a joint venture, collaborating on software development, or anytime both sides need to evaluate each other's confidential data before entering into a formal business relationship.",
  },
  {
    q: "Do I need a lawyer to draft a Mutual NDA?",
    a: "While templates exist, an MNDA must carefully balance the obligations of both parties. Our legal professionals draft bespoke MNDAs that ensure neither side is unfairly burdened, while maintaining robust protection.",
  },
  {
    q: "What constitutes 'confidential information' in an MNDA?",
    a: "It includes trade secrets, business plans, financial records, algorithms, customer lists, and proprietary software. We define this clearly in the contract to ensure both parties understand what is protected.",
  },
  {
    q: "What happens if the other party breaches the Mutual NDA?",
    a: "If a breach occurs, the injured party can seek injunctive relief to prevent further disclosure and pursue financial damages in court. The contract provides the legal standing to enforce these remedies.",
  },
  {
    q: "How long is a Mutual NDA valid?",
    a: "The term of confidentiality typically ranges from 2 to 5 years, though trade secrets may be protected indefinitely. We customize the duration based on the sensitivity of the information being shared.",
  },
  {
    q: "Can an MNDA prevent a company from working with my competitors?",
    a: "No, an MNDA only prevents the sharing of confidential information. To prevent working with competitors, you would need a Non-Compete Agreement (NCA) integrated into the contract or as a separate document.",
  },
  {
    q: "What exceptions are standard in a Mutual NDA?",
    a: "Information that is public knowledge, already known by the receiving party, independently developed, or rightfully received from a third party without restriction is typically excluded from confidentiality obligations.",
  },
  {
    q: "Is an MNDA legally binding across borders?",
    a: "Yes, provided the contract includes a clear governing law and jurisdiction clause. Our drafts specify which country's laws apply, giving you legal certainty in international collaborations.",
  },
  {
    q: "Can this agreement protect my startup during investor pitches?",
    a: "Yes, an MNDA is highly recommended when sharing detailed financials and proprietary tech architecture with potential investors or corporate partners.",
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
  name: "Mutual Non-Disclosure Agreement (MNDA)",
  description:
    "Professionally drafted Mutual Non-Disclosure Agreement (MNDA) for partnerships, joint ventures, and mutual evaluation of proprietary data.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/legal-contract-drafting/mutual-nda",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "One-time drafting fee for a custom Mutual Non-Disclosure Agreement.",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/mutual-nda")({
  head: () => ({
    meta: [
      { title: "Mutual Non-Disclosure Agreement (MNDA) Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Establish secure two-way confidentiality with a professionally drafted Mutual NDA. Ideal for partnerships, joint ventures, and investor pitches.",
      },
      {
        name: "keywords",
        content:
          "mutual nda, two way nda, mnda contract, joint venture legal, partnership confidentiality, mutual non disclosure, legal drafting pakistan",
      },
      {
        property: "og:title",
        content: "Mutual Non-Disclosure Agreement (MNDA) Drafting | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Establish secure two-way confidentiality with a professionally drafted Mutual NDA. Ideal for partnerships and joint ventures.",
      },
      { property: "og:url", content: "/legal-contract-drafting/mutual-nda" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/mutual-nda" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: MutualNDA,
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
            🤝 LEGAL CONTRACT DRAFTING
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Mutual Non-Disclosure Agreement
            <br />
            (Two-Way MNDA)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure two-way collaborations, joint ventures, and strategic partnerships. We draft balanced, enforceable mutual NDAs that protect the proprietary information of both parties equally.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft My Mutual NDA
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
              <Check size={16} className="text-gold-500" /> Balanced Protections
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Custom Jurisdiction
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Delivered in 48 Hours
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Ready for Signature
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
                What is a Mutual NDA?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A <strong className="font-semibold">Mutual Non-Disclosure Agreement (MNDA)</strong> is a legal contract designed for situations where two parties will be sharing confidential information with each other. It ensures that both sides are legally bound to protect the other's proprietary data.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                This is the standard agreement used before entering into joint ventures, co-development projects, or deep strategic partnerships. It ensures a level playing field, giving both entities the confidence to discuss sensitive financials, algorithms, and business plans openly.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Handshake size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">When to Use an MNDA?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Joint Ventures:</strong> Evaluating a merger or cooperative business venture.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Investor Pitches:</strong> Sharing detailed IP and financials with potential investors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Tech Collaborations:</strong> Two companies integrating their proprietary software systems.</span>
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
            Unprotected Bilateral Discussions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Sharing data without mutual protection can lead to severe business consequences if the partnership falls through.
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
                  Idea Appropriation
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  The other party could take your shared concepts, strategies, or workflows and implement them independently if the deal collapses.
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
                  Unfair Legal Imbalance
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Signing their one-way NDA while you also disclose information leaves you legally bound while they are completely free to exploit your data.
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
                  Loss of Trade Secrets
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a documented confidentiality timeline, proprietary formulas or algorithms can lose their legal status as protected trade secrets.
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
      title: "Balanced Definitions",
      desc: "Equal definitions of what constitutes protected information, ensuring both parties are held to the same standard.",
    },
    {
      title: "Permitted Use Clauses",
      desc: "Strict non-disclosure terms protecting both your business methods and the client's data.",
    },
    {
      title: "Return or Destruction",
      desc: "Mandates that both parties immediately return or destroy all confidential materials and data if negotiations terminate.",
    },
    {
      title: "Non-Circumvention (Optional)",
      desc: "Clauses preventing either party from bypassing the other to deal directly with introduced clients or suppliers.",
    },
    {
      title: "Governing Law Alignment",
      desc: "Careful drafting to establish a mutually acceptable jurisdiction for dispute resolution.",
    },
    {
      title: "Equitable Relief",
      desc: "Provisions allowing both sides to seek immediate court injunctions in the event of an unauthorized data leak.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Mutual NDA Features
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A balanced contract that fosters trust while providing ironclad legal protection.
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
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE DRAFTED MUTUAL NDA</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$49</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *A perfectly balanced mutual agreement tailored to the specific nature of your upcoming partnership or joint venture.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Custom drafted by licensed legal professionals</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Balanced clauses for equitable protection</span>
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
              Order Now — $49
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
      desc: "Provide details about your company, the partnering entity, and the nature of the information being exchanged.",
    },
    {
      title: "Legal Review",
      desc: "Our team assesses the risk profile of both sides to ensure the restrictive covenants are fair and balanced.",
    },
    {
      title: "Drafting",
      desc: "We draft the Mutual NDA, incorporating robust protective clauses, non-circumvention, and jurisdiction terms.",
    },
    {
      title: "Delivery",
      desc: "You receive the complete, legally binding document within 48 hours, ready for both parties to execute.",
    },
    {
      title: "Revisions",
      desc: "If the counterparty requests minor, reasonable amendments, we provide a round of revisions to close the deal.",
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
            Designed for Collaboration
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Our mutual agreements foster trust while maintaining strict legal boundaries.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Symmetrical Protection</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Obligations apply equally to both the Disclosing and Receiving parties, preventing one side from exploiting an unfair legal advantage.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Purpose Limitation</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Explicitly restricts the use of shared IP exclusively to evaluating the potential business relationship, blocking all other commercial uses.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Cross-Border Efficacy</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Clear governing law provisions ensure the contract remains valid and enforceable even when dealing with international corporate partners.
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
      title: "One-Way NDA",
      path: "/legal-contract-drafting/non-disclosure-agreement",
      desc: "For protecting your information when hiring freelancers or contractors.",
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
            SECURE YOUR PARTNERSHIPS
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Build Trust With Confidence.
            <br />
            Get Your Mutual NDA Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure both sides are protected before discussing sensitive financials or proprietary technology. We draft balanced agreements ready for signature.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Order MNDA Drafting →
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
export default function MutualNDA() {
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
