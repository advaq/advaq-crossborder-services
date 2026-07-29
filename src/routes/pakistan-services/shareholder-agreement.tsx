import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Users,
  Handshake,
  FileText,
  Scale,
  Briefcase,
  FileSignature,
  FileLock2,
  Lock,
  Vote,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Shareholder Agreement?",
    a: "A Shareholder Agreement (SHA) is a private, legally binding contract among the shareholders of a company. It regulates their relationship, outlines their rights and obligations, governs the management of the company, and dictates how shares can be bought, sold, or transferred.",
  },
  {
    q: "Why do we need an SHA if we already have SECP Articles of Association?",
    a: "Articles of Association (AoA) are public documents registered with SECP and contain standard, basic corporate rules. An SHA is a private, highly detailed contract that covers sensitive internal matters like founder vesting, non-compete clauses, specific voting vetoes, and dead-lock resolution mechanisms that you do not want on the public record.",
  },
  {
    q: "What is Founder Vesting?",
    a: "Founder vesting is a mechanism where founders 'earn' their shares over a period of time (typically 3-4 years) rather than getting them all upfront. If a founder quits after 6 months, they lose their unvested shares. An SHA makes this legally enforceable, protecting the remaining founders.",
  },
  {
    q: "What are Drag-Along and Tag-Along rights?",
    a: "These are crucial exit clauses. A 'Drag-Along' right allows majority shareholders to force minority shareholders to join in the sale of a company. A 'Tag-Along' right protects minority shareholders by allowing them to join a sale if the majority shareholder sells their stake.",
  },
  {
    q: "Can a Shareholder Agreement override the Companies Act, 2017?",
    a: "No. An SHA cannot violate the Companies Act or the company's Articles of Association. If there is a conflict, the Companies Act prevails. However, a well-drafted SHA works in harmony with the law to fill in the gaps and provide tighter internal controls.",
  },
  {
    q: "What happens in a 50/50 deadlock?",
    a: "If two founders hold 50% each and disagree on a major decision, the company can freeze. A good SHA includes specific 'Deadlock Resolution' clauses, such as bringing in a neutral mediator, a coin toss mechanism, or a 'Texas Shootout' (buy-sell provision) to resolve the impasse.",
  },
  {
    q: "Does every shareholder need to sign the agreement?",
    a: "Ideally, yes. For the agreement to be fully effective and binding on all parties, every current shareholder must sign it. Future shareholders can be made to sign a 'Deed of Adherence' to become bound by the existing SHA.",
  },
  {
    q: "Are non-compete clauses in an SHA enforceable in Pakistan?",
    a: "Under Section 27 of the Contract Act, blanket non-compete clauses can be tricky to enforce in Pakistan. However, non-compete clauses tied directly to the sale of goodwill or carefully scoped non-solicitation (stealing clients/employees) clauses are drafted to be legally defensible.",
  },
  {
    q: "When is the right time to sign a Shareholder Agreement?",
    a: "The best time is immediately upon incorporating the company, while everyone is on good terms and optimistic. Waiting until a dispute arises or until an investor comes on board usually makes negotiations much harder.",
  },
  {
    q: "Do we need to register the SHA with SECP?",
    a: "No, a Shareholder Agreement is a private contract and does not need to be filed with or approved by SECP. This ensures that your sensitive business terms and founder arrangements remain completely confidential.",
  },
  {
    q: "Can we amend the agreement later?",
    a: "Yes. The SHA can be amended at any time, provided all the parties to the agreement (or a specified majority, depending on how the amendment clause is drafted) consent to the changes in writing.",
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
  serviceType: "Corporate Legal Document",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Shareholder Agreement Drafting in Pakistan",
  description:
    "Professional Shareholder Agreement (SHA) drafting by corporate lawyers. Secure founder vesting, drag-along rights, tag-along rights, and resolve deadlocks for your Pvt Ltd.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/shareholder-agreement",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "Professional fee for drafting a custom Shareholder Agreement.",
  },
};

export const Route = createFileRoute("/pakistan-services/shareholder-agreement")({
  head: () => ({
    meta: [
      { title: "Shareholder Agreement Drafting Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "Protect your tech startup or corporate entity with a legally binding Shareholder Agreement. Custom drafting covering vesting, exit rights, and deadlocks.",
      },
      {
        name: "keywords",
        content:
          "shareholder agreement pakistan, founders agreement draft, startup vesting contract, drag along tag along clause, secp company dispute",
      },
      {
        property: "og:title",
        content: "Shareholder Agreement Drafting Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Protect your tech startup or corporate entity with a legally binding Shareholder Agreement. Custom drafting covering vesting, exit rights, and deadlocks.",
      },
      { property: "og:url", content: "/pakistan-services/shareholder-agreement" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/shareholder-agreement" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: ShareholderAgreement,
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
            🇵🇰 CORPORATE CONTRACTS PAKISTAN
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Shareholder Agreement
            <br />
            Drafting
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Protect your company from founder disputes and bad exits. We draft robust Shareholder Agreements with custom vesting schedules, drag-along rights, and deadlock resolutions for Private Limited Companies.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft Shareholder Agreement
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
              <Check size={16} className="text-gold-500" /> Drafted by Tech & Corporate Lawyers
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Founder Vesting Schedules
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Pre-Emption & Exit Rights
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Confidential
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
                What is a Shareholder Agreement?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Shareholder Agreement (SHA) is a private contract between the owners of a company. While your SECP Articles of Association handle basic public compliance, the SHA governs exactly how the company is actually run behind closed doors.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                It details what happens if a founder wants to leave, how major company decisions are voted on, what restrictions are placed on selling shares to outsiders, and how to resolve a situation where co-founders are completely deadlocked on a decision. It is the single most important document for protecting your startup's equity.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <FileLock2 size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why It Matters</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Keeps Equity Safe:</strong> Stops a co-founder from leaving on day 2 and keeping 50% of the company forever.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Investor Readiness:</strong> Venture Capitalists will not invest unless a solid SHA is in place to manage the cap table.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Privacy:</strong> Unlike SECP documents, an SHA remains private between the founders.</span>
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
            Operating Without an SHA
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The honeymoon phase of a startup eventually ends. When things go wrong, an SECP certificate won't save you.
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
                  The "Free Rider" Problem
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a vesting clause, a co-founder can legally quit working after a month but retain their massive chunk of shares, benefiting forever from the hard work of the remaining founders.
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
                  The 50/50 Deadlock
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If two equal partners fundamentally disagree on a pivot or a hire, the company completely freezes. Without a deadlock resolution clause, the only legal remedy is liquidating the company.
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
                  Rogue Share Sales
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without Right of First Refusal (ROFR) clauses, your co-founder could legally sell their 40% stake to your worst competitor, making them your new business partner.
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
      icon: Users,
      title: "Board & Voting Rights",
      desc: "Define how directors are appointed, how many board seats each founder gets, and which decisions require unanimous consent.",
    },
    {
      icon: Lock,
      title: "Founder Vesting",
      desc: "Implement a standard 4-year vesting schedule with a 1-year cliff to ensure founders earn their equity through actual work.",
    },
    {
      icon: Shield,
      title: "Pre-Emption Rights (ROFR)",
      desc: "Require any shareholder who wants to sell to first offer their shares to the existing founders before selling to outsiders.",
    },
    {
      icon: Handshake,
      title: "Drag & Tag Along Rights",
      desc: "Protect majority owners trying to sell the whole company (Drag) and protect minority owners from being left behind (Tag).",
    },
    {
      icon: Scale,
      title: "Deadlock Mechanisms",
      desc: "Legal procedures (like Mediation or Russian Roulette provisions) to break ties when the board is split 50/50.",
    },
    {
      icon: FileSignature,
      title: "Non-Compete & Confidentiality",
      desc: "Restrict exiting founders from immediately starting a copycat company or poaching your key employees.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our SHA Drafting Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We build venture-ready contracts that protect both the founders and the company.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <inc.icon className="text-gold-500 mb-4" size={24} />
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
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            SHA Drafting Package
          </h2>
        </Reveal>

        <div className="max-w-lg mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                STARTUP & CORPORATE
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center">SHAREHOLDER AGREEMENT</p>
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2 text-center">Custom Drafting</h3>
                <div className="mt-6 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 20,000</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> One-on-one consultation with an attorney</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Custom Vesting & Exit Rights integration</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Up to 2 rounds of revisions</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Investor-ready legal formatting</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Soft copy PDF & Word formats provided</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Draft Shareholder Agreement — Rs. 20,000
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: PROCESS ---------- */
function ProcessSteps() {
  const steps = [
    {
      title: "Discovery Call",
      desc: "We discuss your cap table, founder roles, vesting expectations, and voting preferences.",
    },
    {
      title: "First Draft",
      desc: "Our legal team drafts the comprehensive agreement integrating all necessary corporate safeguards.",
    },
    {
      title: "Review Period",
      desc: "You review the document with your co-founders. We explain the legal implications of the clauses.",
    },
    {
      title: "Revisions",
      desc: "We tweak the voting thresholds and exit scenarios based on your specific founder dynamics.",
    },
    {
      title: "Execution",
      desc: "The final agreement is issued for signing by all shareholders to become legally binding.",
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
            A precise drafting process to align all founders.
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
      title: "SECP Company Registration",
      path: "/pakistan-services/secp-registration",
      desc: "Register your Pvt Ltd entity before executing your Shareholder Agreement.",
    },
    {
      title: "Trademark Registration",
      path: "/pakistan-services/trademark-registration",
      desc: "Protect your company's brand name and intellectual property with IPO-Pakistan.",
    },
    {
      title: "Partnership Deed",
      path: "/pakistan-services/partnership-deed",
      desc: "If you are not an SECP company, you need a standard Partnership Deed instead.",
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
            READY TO PROTECT YOUR EQUITY?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Leave Your Startup
            <br />
            Exposed to Disputes.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Secure your cap table, implement founder vesting, and establish clear exit mechanisms with a robust Shareholder Agreement drafted by corporate attorneys.
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
            Expert Drafting · Investor Ready · 100% Confidential
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function ShareholderAgreement() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
