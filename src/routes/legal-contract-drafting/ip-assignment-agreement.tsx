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
  BadgeAlert,
  Building2,
  Lock,
  Globe,
  CreditCard,
  Percent,
  Coins,
  Scale,
  Code,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an IP Assignment Agreement?",
    a: "An Intellectual Property (IP) Assignment Agreement is a legal contract that transfers the ownership rights of created works (like software code, designs, or branding) from the creator (e.g., a freelancer or employee) to the business or client.",
  },
  {
    q: "Does an NDA cover IP ownership?",
    a: "No. An NDA only requires the signing party to keep information confidential. It does NOT transfer ownership of the intellectual property they create for you. You must have an IP Assignment Agreement to legally own the work.",
  },
  {
    q: "When should I use an IP Assignment Agreement?",
    a: "You should use it whenever you hire a freelance developer, designer, or contractor to create something for your business, or when founding a startup to ensure the company owns the code and assets, not the individual founders.",
  },
  {
    q: "What happens if I don't have this agreement?",
    a: "By default, the person who creates the work (the author) owns the copyright. If a freelancer builds your software without an IP Assignment Agreement, they technically own the code and can resell it or prevent you from modifying it.",
  },
  {
    q: "Do employees automatically assign IP?",
    a: "In many jurisdictions, works created by employees within the scope of their employment are considered 'works for hire' and owned by the employer. However, having a specific IP assignment clause or agreement removes any legal ambiguity.",
  },
  {
    q: "Can this agreement transfer past work?",
    a: "Yes. An IP Assignment Agreement can be drafted to include language that retroactively transfers ownership of intellectual property created prior to signing the document.",
  },
  {
    q: "Does it cover software code and algorithms?",
    a: "Yes, our agreements are specifically drafted for tech and digital agencies, covering source code, algorithms, databases, UI/UX designs, and related documentation.",
  },
  {
    q: "Do I need to pay the creator for the assignment?",
    a: "Contracts require 'consideration' (something of value exchanged) to be valid. In most cases, the payment you make for their freelance services serves as the consideration for the IP transfer.",
  },
  {
    q: "Is this agreement internationally enforceable?",
    a: "Yes, our IP Assignment Agreements include governing law and jurisdiction clauses. While copyright laws vary, a clear contractual assignment is widely recognized and enforceable globally.",
  },
  {
    q: "What if the freelancer uses open-source code?",
    a: "Our agreements include representations and warranties where the creator states they have not infringed on third-party IP and properly disclose any open-source components used in the project.",
  },
  {
    q: "How fast can I get the contract drafted?",
    a: "We provide custom-drafted IP Assignment Agreements within 48 hours, fully tailored to your specific project or agency needs.",
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
  name: "Intellectual Property (IP) Assignment Agreement",
  description:
    "Legally transfer ownership of software code, designs, and digital assets from creators to your business with a custom IP Assignment Agreement.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/legal-contract-drafting/ip-assignment-agreement",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "One-time drafting fee for a custom IP Assignment Agreement.",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/ip-assignment-agreement")({
  head: () => ({
    meta: [
      { title: "IP Assignment Agreement Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Transfer ownership of software code and digital assets safely. Get a professionally drafted IP Assignment Agreement for your tech agency or startup.",
      },
      {
        name: "keywords",
        content:
          "ip assignment agreement, copyright transfer, intellectual property contract, software code ownership, tech startup legal, freelance ip agreement",
      },
      {
        property: "og:title",
        content: "IP Assignment Agreement Drafting | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Transfer ownership of software code and digital assets safely with a custom IP Assignment Agreement.",
      },
      { property: "og:url", content: "/legal-contract-drafting/ip-assignment-agreement" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/ip-assignment-agreement" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: IPAssignment,
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
            ©️ LEGAL CONTRACT DRAFTING
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            IP Assignment Agreement
            <br />
            (Ownership Transfer)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Ensure your business actually owns the software, designs, and content you pay for. We draft airtight Intellectual Property Assignment Agreements to legally transfer copyrights from freelancers and employees to your company.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft My IP Agreement
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
              <Check size={16} className="text-gold-500" /> Tech & Software Focused
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Complete Copyright Transfer
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Delivered in 48 Hours
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Investor Compliant
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
                What is an IP Assignment?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                An **Intellectual Property (IP) Assignment Agreement** is a legal document that transfers the ownership rights of an original work from the creator to another entity. In the digital world, this typically involves transferring the copyright of software code, graphics, or written content.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Many business owners mistakenly believe that paying a freelancer means they automatically own the final product. By default copyright law, the creator retains ownership unless it is explicitly assigned in writing. This contract fixes that vulnerability, granting you full control over your assets.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Code size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Crucial Use Cases</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Freelance Developers:** Securing ownership of custom software code.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Startup Founders:** Transferring personal IP to the newly formed company.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Agency Deliverables:** Guaranteeing you can legally transfer rights to your end clients.</span>
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
            Paying for Code You Don't Own
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Operating without an IP Assignment Agreement can destroy your company's valuation and legal standing.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Ransom by Developers
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                If relations sour, a freelancer who technically owns the copyright can demand excessive licensing fees or force you to stop using the code they built.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Failed Due Diligence
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Investors and acquirers require strict proof that your company owns its core technology. Missing IP assignments will instantly kill funding rounds or acquisitions.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Client Legal Liability
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                If an agency sells a website to a client but doesn't have an IP assignment from the subcontractor, the agency is committing copyright infringement.
              </p>
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
      title: "Absolute Transfer of Rights",
      desc: "Requires the creator to waive their 'moral rights', ensuring they cannot object to how you modify or use the work in the future.",
    },
    {
      title: "Moral Rights Waiver",
      desc: "Requires the creator to waive their 'moral rights', ensuring they cannot object to how you modify or use the work in the future.",
    },
    {
      title: "Representations & Warranties",
      desc: "The creator legally guarantees that the work is original and does not infringe on any third-party intellectual property.",
    },
    {
      title: "Further Assurances",
      desc: "Obligates the assignor to assist in filing patents or registration documents in your business name.",
    },
    {
      title: "Open Source Disclosure",
      desc: "Requires the developer to declare any open-source components used, preventing hidden licensing conflicts.",
    },
    {
      title: "Retroactive Assignment",
      desc: "Can be drafted to cover works that have already been created and delivered prior to the signing of the agreement.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Comprehensive IP Security
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We draft contracts that ensure complete, unencumbered ownership of your digital assets.
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
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE DRAFTED IP AGREEMENT</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$49</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *A robust assignment template tailored to your specific tech or creative sector, reusable for all future contractors.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Custom drafted by licensed legal professionals</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Includes Moral Rights Waivers</span>
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
      desc: "Let us know what type of assets are being created (software, design, copy) and who is creating them.",
    },
    {
      title: "Legal Review",
      desc: "We analyze your requirements to ensure the appropriate IP terminology and transfer clauses are utilized.",
    },
    {
      title: "Drafting",
      desc: "Our legal experts draft the assignment, securing your ownership and insulating you from third-party infringement claims.",
    },
    {
      title: "Delivery",
      desc: "You receive the tailored, ready-to-sign legal document within 48 hours.",
    },
    {
      title: "Execution",
      desc: "You and the creator sign the document, legally finalizing the transfer of ownership to your business.",
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
            Ironclad Asset Protection
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Our assignments are built to satisfy strict investor due diligence and global copyright laws.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileText className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Future Proofing</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Explicit language covering not just the delivered work, but any future derivations, updates, or patents derived from the project.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Indemnification</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                The creator agrees to cover your legal costs if they lied about the originality of the work and you get sued for copyright infringement.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Scale className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Enforceability</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Drafted with proper 'consideration' clauses and governing law structures to ensure the contract holds up in local and international courts.
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
      desc: "Ensure freelancers keep your business ideas and client lists strictly confidential.",
    },
    {
      title: "Mutual NDA",
      path: "/legal-contract-drafting/mutual-nda",
      desc: "For two-way confidentiality when partnering with other agencies or co-founders.",
    },
    {
      title: "UK Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a UK Limited company to house your newly acquired intellectual property.",
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
            OWN YOUR WORK
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Leave IP Up to Chance.
            <br />
            Secure Your Assets Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your startup or agency fully owns the software and designs it pays for. We draft ironclad transfer agreements ready for signature.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Order IP Agreement →
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
export default function IPAssignment() {
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
