import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  FileText,
  BadgeAlert,
  Users,
  Briefcase,
  AlertTriangle,
  FileBarChart,
  Calculator
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Who needs to file a Partnership Tax Return (Form 1065)?",
    a: "Any multi-member LLC (an LLC with 2 or more owners/partners) that operates in the US or has US-sourced income must file Form 1065. If the LLC is entirely foreign-owned and has no US effectively connected income, it still must file a Form 1065 to report its operations and distribute Schedule K-1s to partners.",
  },
  {
    q: "What is Schedule K-1?",
    a: "Schedule K-1 is a tax document issued to each partner in a multi-member LLC. It outlines their individual share of the partnership's profits, losses, deductions, and credits. The partners then use the K-1 to file their individual tax returns.",
  },
  {
    q: "When is the deadline for Form 1065?",
    a: "The filing deadline for Form 1065 is March 15th (a month earlier than personal and corporate returns). You can request an automatic 6-month extension to September 15th by filing Form 7004.",
  },
  {
    q: "What is the penalty for filing Form 1065 late?",
    a: "The IRS penalty for late filing a partnership return is steep: $235 for each month (or part of a month) the return is late, multiplied by the number of partners. This can quickly add up to thousands of dollars.",
  },
  {
    q: "Do foreign partners need an ITIN or SSN?",
    a: "Yes. In most cases, foreign partners receiving a Schedule K-1 that allocates US-sourced income or who are required to file a non-resident individual tax return (Form 1040-NR) will need an Individual Taxpayer Identification Number (ITIN).",
  },
  {
    q: "Are Form 8804 and 8805 required?",
    a: "If your partnership has Effectively Connected Income (ECI) that is allocable to a foreign partner, the partnership must withhold US tax and report it on Forms 8804 and 8805. We assist in evaluating these requirements.",
  },
  {
    q: "What financial documents do you need from us?",
    a: "We require your LLC's complete financial statements for the year (Profit & Loss statement, Balance Sheet), details of capital contributions and distributions to each partner, and partner identifying information.",
  },
  {
    q: "Do the partners have to pay US taxes?",
    a: "A partnership is a pass-through entity, meaning the LLC itself doesn't pay income tax. The profits pass through to the partners. Whether foreign partners pay US tax depends on if the income is considered US-sourced and effectively connected to a US trade or business.",
  },
  {
    q: "Can this return be filed electronically?",
    a: "Yes, in most cases, Form 1065 can be e-filed. Partnerships with more than 100 partners are required to e-file, but we e-file most standard partnership returns for speed and accuracy.",
  },
  {
    q: "What if our LLC made no money this year?",
    a: "Generally, a domestic partnership that has no income, deductions, or credits for the tax year is not required to file Form 1065. However, there are exceptions (such as elections needing to be made), and it is often best practice to file a zero return to establish a record.",
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
  serviceType: "US Partnership Tax Preparation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Multi-Member LLC / Partnership Tax Return (Form 1065)",
  description:
    "Professional preparation and filing of Form 1065 and Schedule K-1s for US Multi-Member LLCs and Partnerships. Avoid late penalties and ensure accurate partner allocations.",
  areaServed: "Global",
  url: "https://[yourdomain.com]/us-services/partnership-tax-return",
  offers: {
    "@type": "Offer",
    price: "299.00",
    priceCurrency: "USD",
    description: "Annual federal partnership tax return preparation fee.",
  },
};

export const Route = createFileRoute("/us-services/partnership-tax-return")({
  head: () => ({
    meta: [
      { title: "Partnership Tax Return | Form 1065 & K-1 | ADVAQ" },
      {
        name: "description",
        content:
          "Professional IRS tax preparation and filing for Multi-Member LLCs. Includes Form 1065 and Schedule K-1 preparation to ensure full compliance.",
      },
      {
        name: "keywords",
        content:
          "form 1065, partnership tax return, multi member llc tax, schedule k-1, foreign partner us tax, llc tax deadline march 15",
      },
      {
        property: "og:title",
        content: "Partnership Tax Return | Form 1065 & K-1 | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional IRS tax preparation and filing for Multi-Member LLCs. Includes Form 1065 and Schedule K-1 preparation to ensure full compliance.",
      },
      { property: "og:url", content: "/us-services/partnership-tax-return" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/partnership-tax-return" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: PartnershipTaxReturn,
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
            🇺🇸 US TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Partnership & Multi-Member LLC
            <br />
            Tax Return (Form 1065)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Accurate, professional preparation of Form 1065 and Schedule K-1s. Ensure correct profit allocations among partners and avoid the severe per-partner late filing penalties.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Partnership Return
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
              <Check size={16} className="text-gold-500" /> Form 1065 Preparation
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Schedule K-1s Generated
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Capital Accounts Tracked
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> March 15 Deadline Support
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
                What is Form 1065?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                If your US LLC has two or more owners, the IRS automatically treats it as a Partnership for tax purposes. A partnership is a "pass-through" entity, meaning the business itself doesn't pay income tax. Instead, it must file an informational return called Form 1065.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Form 1065 reports the company's total income, deductions, gains, and losses. Most importantly, it generates a Schedule K-1 for every partner. The K-1 dictates exactly how much of the partnership's financials belong to that specific owner, which they then report on their personal tax returns.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Users size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Crucial Details</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Early Deadline:</strong> Due March 15th (not April 15th) to give partners time for personal filing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Partner Equity:</strong> Tracks partner capital contributions and withdrawals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Foreign Withholding:</strong> May require Forms 8804/8805 if foreign partners have US income.</span>
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
            Penalties for Late or Incorrect Filing
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Partnerships face brutal, multiplying penalties for missing deadlines.
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
                  Per-Partner Late Fees
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  The late filing penalty is $235 per month (for up to 12 months) MULTIPLIED by the number of partners. A 4-partner LLC late by 3 months faces a $2,820 fine.
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
                  K-1 Delivery Failure
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Failing to provide partners with their Schedule K-1s on time incurs an additional penalty of $310 per partner. Accuracy is just as legally binding.
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
                  Improper Allocations
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Allocating profits incorrectly that do not match the Operating Agreement can trigger IRS audits and internal legal disputes among business partners.
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
      title: "Full Balance Sheet Prep",
      desc: "We align your Profit & Loss statements with a tax-basis balance sheet to ensure accounting precision.",
    },
    {
      title: "Form 1065 Filing",
      desc: "Complete preparation of the US Return of Partnership Income including all necessary schedules (B, L, M-1, M-2).",
    },
    {
      title: "Schedule K-1 Generation",
      desc: "Accurate creation of individual K-1s for each partner detailing their share of ordinary business income.",
    },
    {
      title: "Foreign Partner Compliance",
      desc: "Assessment of withholding tax requirements and ETBUS status for non-US resident partners.",
    },
    {
      title: "E-Filing Submission",
      desc: "Secure, direct electronic submission to the IRS to ensure fast processing and proof of delivery.",
    },
    {
      title: "Partner Tax Guidance",
      desc: "We provide clear instructions to each partner on what they need to do with their Schedule K-1.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Partnership Prep Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Complex multi-owner accounting handled securely.
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
            Expert Tax Filing
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Annual Return
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">MULTI-MEMBER LLC (1065)</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-2xl text-gray-500">From</span>
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$299</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Base fee includes up to 2 partners and standard financial activity. Additional partners or complex asset/inventory tracking may incur extra fees.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Form 1065 Preparation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Up to 2 Schedule K-1s included</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Balance Sheet & M-1 Reconciliation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>IRS Electronic Submission</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — $299
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
      title: "Data Submission",
      desc: "Provide your year-end financials (P&L, Balance Sheet) and the latest Operating Agreement.",
    },
    {
      title: "Equity Calculation",
      desc: "We calculate the exact capital accounts and profit allocations for each partner.",
    },
    {
      title: "Form Drafting",
      desc: "Our CPAs draft Form 1065, associated schedules, and the individual K-1s.",
    },
    {
      title: "Review & Approval",
      desc: "You review the drafted returns and sign the e-file authorization form (Form 8879-PE).",
    },
    {
      title: "IRS E-Filing",
      desc: "We transmit the return directly to the IRS and provide the accepted acknowledgment.",
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
            A precise, CPA-led process.
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

/* ---------- SECTION 7: CRITICAL ELEMENTS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>PARTNERSHIP SPECIFICS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Key Focus Areas
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Complexities we manage during preparation.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileBarChart className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Capital Accounts</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                The IRS strictly monitors partner capital accounts (Schedule M-2). We ensure contributions and distributions match equity percentages exactly.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <AlertTriangle className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Foreign Withholding</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If the partnership has US Effectively Connected Income, the LLC must withhold taxes on behalf of foreign partners (Section 1446).
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Calculator className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Book-to-Tax Differences</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                We reconcile your accounting records (books) with allowable tax deductions (Schedule M-1), ensuring meal expenses, depreciation, and amortizations are treated legally.
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
      desc: "Mandatory reporting of all beneficial owners in your partnership to the federal government.",
    },
    {
      title: "IRS ITIN Application",
      path: "/us-services/itin-application",
      desc: "Get an ITIN for foreign partners so they can file their individual US tax returns.",
    },
    {
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Start a new LLC with partners securely and cost-effectively.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related US Compliance Services
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
                <div className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">View Service Details <ArrowRight size={12} /></div>
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
            DON'T MISS THE MARCH 15 DEADLINE
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            File Form 1065 Accurately.
            <br />
            Protect Your Partnership.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            The IRS heavily penalizes multi-member LLCs for late returns ($235 per month, per partner). Secure your compliant filing today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Tax Filing →
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
            CPA-Guided Preparation · Accurate K-1 Generation · Secure E-Filing
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function PartnershipTaxReturn() {
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
