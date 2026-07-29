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
  PenTool,
  Scale,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an Operating Agreement?",
    a: "An Operating Agreement is an internal legal document that outlines the ownership structure, member duties, voting rights, and operational rules of an LLC. It is the core contract binding the LLC's members.",
  },
  {
    q: "Why do I need to update it?",
    a: "Whenever there is a significant change in the business—such as adding a new partner, changing ownership percentages, updating the company address, or removing a member—the Operating Agreement must be amended to reflect current reality.",
  },
  {
    q: "Do I have to send this to the state (e.g., Wyoming)?",
    a: "No. The Operating Agreement is an internal document. You do not file it with the Secretary of State, but you must keep it with your company records.",
  },
  {
    q: "Why do banks ask for this document?",
    a: "US banks (like Mercury) and payment processors (like Stripe) use the Operating Agreement to verify who actually owns and controls the LLC before approving an account.",
  },
  {
    q: "Can I just edit the Word document myself?",
    a: "While you technically can, improperly drafted amendments can cause disputes between partners, invalidate liability protections, or be rejected by bank compliance teams. We ensure it's drafted legally and correctly.",
  },
  {
    q: "What is a Corporate Resolution?",
    a: "A resolution is a formal document documenting a specific decision made by the members (e.g., authorizing a new bank account or confirming an address change). We provide these alongside agreement updates.",
  },
  {
    q: "Do you offer this for single-member LLCs?",
    a: "Yes. Even single-member LLCs need accurate Operating Agreements to prove sole ownership to financial institutions and maintain the corporate veil.",
  },
  {
    q: "How long does drafting take?",
    a: "Once we collect the details of your changes, we typically draft the amended agreement and resolutions within 1 to 2 business days.",
  },
  {
    q: "Do I need to sign the new agreement?",
    a: "Yes. All members (including new ones) must sign the amended Operating Agreement. Digital signatures via platforms like DocuSign are legally valid.",
  },
  {
    q: "Do I also need to update the state or IRS?",
    a: "It depends. If you change your address or add/remove members, you may also need to update your State Annual Report, amend your BOI report with FinCEN, or notify the IRS. We will advise you on these secondary requirements.",
  }
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
  serviceType: "Corporate Legal Drafting",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Custom Operating Agreement Updates",
  description:
    "Professional legal drafting of LLC Operating Agreement amendments and corporate resolutions for US compliance.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/us-services/operating-agreement-updates",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "One-time fee for drafting an amended Operating Agreement.",
  },
};

export const Route = createFileRoute("/us-services/operating-agreement-updates")({
  head: () => ({
    meta: [
      { title: "Operating Agreement Updates & Amendments | ADVAQ" },
      {
        name: "description",
        content:
          "Need to change LLC members, addresses, or ownership? We draft legally sound Operating Agreement amendments and resolutions.",
      },
      {
        name: "keywords",
        content:
          "llc operating agreement amendment, add member to llc, wyoming operating agreement, corporate resolutions, llc ownership transfer",
      },
      {
        property: "og:title",
        content: "Operating Agreement Updates & Amendments | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Need to change LLC members, addresses, or ownership? We draft legally sound Operating Agreement amendments and resolutions.",
      },
      { property: "og:url", content: "/us-services/operating-agreement-updates" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/operating-agreement-updates" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: OperatingAgreementUpdates,
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
            🇺🇸 CORPORATE DRAFTING
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Operating Agreement
            <br />
            Updates & Amendments
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Formalize partnership changes, ownership transfers, and address updates with professionally drafted legal agreements that banks and payment processors trust.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft My Agreement
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
              <Check size={16} className="text-gold-500" /> Add/Remove Members
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Ownership Restructuring
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Bank Compliance Ready
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
                What is an Agreement Update?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                An LLC's Operating Agreement is its governing constitution. Whenever the realities of the business change—such as bringing on an investor, a partner leaving, or simply changing the business address—the document must be legally amended.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Banks, payment processors like Stripe, and auditors rely on the Operating Agreement to verify the ultimate beneficial owners of the company. A mismatch between your actual ownership and your written agreement can lead to compliance freezes.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <PenTool size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Common Amendments</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Equity Changes:</strong> Adjusting ownership percentages between partners.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Partner Entry/Exit:</strong> Officially adding or removing an LLC member.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Address Updates:</strong> Changing the principal place of business.</span>
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

/* ---------- SECTION 3: THE RISK ---------- */
function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Danger of Informal Changes
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A verbal agreement means nothing in US corporate law.
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
                  Partnership Disputes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a signed amendment, exiting partners could still claim equity and profits. Clear documentation prevents messy legal battles.
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
                  Bank Compliance Freezes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If a new partner tries to access Mercury Bank or Stripe, but their name is not on a formally executed Operating Agreement, accounts will be locked for fraud suspicion.
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
                  Piercing the Corporate Veil
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Failure to maintain accurate internal records signals to courts that you aren't treating the LLC as a separate entity, putting personal assets at risk.
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
      title: "Consultation & Review",
      desc: "We review your current agreement and understand the exact changes you wish to enact.",
    },
    {
      title: "Custom Drafting",
      desc: "An advocate drafts the specific clauses, schedules, and amendments tailored to your situation.",
    },
    {
      title: "Corporate Resolutions",
      desc: "We generate the formal Member Resolutions authorizing the changes for your records.",
    },
    {
      title: "Bank-Ready Formatting",
      desc: "Documents are structured specifically to pass compliance checks at US financial institutions.",
    },
    {
      title: "Execution Guidance",
      desc: "Instructions on how all members must sign and date the documents for legal validity.",
    },
    {
      title: "Next-Steps Roadmap",
      desc: "Guidance on whether you need to also update the IRS, FinCEN (BOI), or the State.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Professional Drafting Services
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We translate your business decisions into legally binding corporate documents.
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
            Flat-Rate Drafting Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              One-Time Fee
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">AMENDMENT & RESOLUTIONS</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$69</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Complete drafting for standard ownership, address, or member changes.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Custom Operating Agreement Amendment</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Authorizing Corporate Resolution</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Delivery within 1-2 business days</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Drafting — $69
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
      title: "Details",
      desc: "Tell us exactly what is changing (e.g., new partner details).",
    },
    {
      title: "Payment",
      desc: "Submit the one-time $69 drafting fee.",
    },
    {
      title: "Drafting",
      desc: "Our team writes the custom amendment and resolution.",
    },
    {
      title: "Review",
      desc: "You review the documents for accuracy.",
    },
    {
      title: "Execution",
      desc: "All members sign to make the document legally binding.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Fast Legal Turnaround
          </h2>
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

/* ---------- SECTION 7: USE CASES ---------- */
function ComplianceBenefits() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>USE CASES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            When Do You Need This?
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Adding a Co-Founder</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Bringing in a new partner requires redefining ownership splits and voting power to protect all parties.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileText className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Stripe Verification</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If Stripe requests proof of ownership with your current address, an updated agreement acts as the ultimate proof.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Selling the Business</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Selling your LLC entirely to a new owner requires a formal Membership Interest Transfer Agreement and resolution.
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
      title: "FinCEN BOI Reporting",
      path: "/us-services/boi-report",
      desc: "If ownership changes, you must legally update FinCEN within 30 days.",
    },
    {
      title: "State Annual Report",
      path: "/us-services/state-annual-report",
      desc: "Keep the state updated with your new principal address or member details.",
    },
    {
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Need an entirely new company instead? We provide complete formations.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Post-Update Compliance
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
                  View Service Details <ArrowRight size={12} />
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
            FORMALIZE YOUR CHANGES
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Get Compliant Legal Drafting.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your partnership agreements, ownership stakes, and company rules are legally solid and bank-ready.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Request Drafting →
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
export default function OperatingAgreementUpdates() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <ComplianceBenefits />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
