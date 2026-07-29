import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  FileText,
  BadgeAlert,
  Building2,
  Briefcase,
  AlertTriangle,
  FileBarChart,
  Calculator,
  Landmark
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Who is required to file Form 1120?",
    a: "Form 1120 must be filed by all domestic C-Corporations, as well as LLCs that have elected to be taxed as C-Corporations. If your company is incorporated as a C-Corp (like most Delaware startups), you must file this return regardless of revenue.",
  },
  {
    q: "When is the deadline for Form 1120?",
    a: "For calendar year corporations, the filing deadline is April 15th. If the corporation uses a fiscal year, the return is due by the 15th day of the 4th month after the end of its tax year. A 6-month extension can be requested via Form 7004.",
  },
  {
    q: "What is the corporate tax rate?",
    a: "Currently, the US federal corporate income tax rate is a flat 21% on taxable net income. In addition, depending on the state of incorporation or physical operation, state corporate taxes may also apply.",
  },
  {
    q: "What forms must foreign-owned C-Corps file?",
    a: "If a C-Corporation is at least 25% owned by foreign persons, it must file Form 5472 along with Form 1120. Form 5472 reports related-party transactions and carries a $25,000 penalty if not filed accurately.",
  },
  {
    q: "Can a C-Corp carry forward losses?",
    a: "Yes. Net Operating Losses (NOLs) can generally be carried forward indefinitely to offset up to 80% of taxable income in future years, helping startups that lose money initially save on taxes when they become profitable.",
  },
  {
    q: "Does my C-Corp have to pay estimated taxes?",
    a: "Yes, if the corporation expects its tax bill to be $500 or more for the year, it must make quarterly estimated tax payments. Failure to do so can result in underpayment penalties.",
  },
  {
    q: "What documents do you need to prepare Form 1120?",
    a: "We need comprehensive financial statements (Income Statement, Balance Sheet), previous year's tax return, details of any capital investments, asset purchases for depreciation, and information on foreign ownership.",
  },
  {
    q: "What is Double Taxation?",
    a: "Double taxation occurs in C-Corporations because the corporation is taxed on its profits (at 21%), and then the shareholders are taxed individually when those profits are distributed as dividends. Proper tax planning can mitigate this.",
  },
  {
    q: "Do I need to file a state tax return as well?",
    a: "Yes, if your C-Corporation is registered in a state with corporate income tax (e.g., Delaware has a corporate income tax and franchise tax), you must file a state return. We can handle state filings as an add-on.",
  },
  {
    q: "Can we E-file Form 1120?",
    a: "Yes. In fact, corporations with $10 million or more in total assets are required to e-file. We electronically file most corporate returns to ensure fast processing by the IRS.",
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
  serviceType: "US Corporate Tax Preparation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "C-Corporation Tax Return (Form 1120)",
  description:
    "Comprehensive IRS corporate tax return preparation (Form 1120) for US C-Corporations and startups. Accurate financial reconciliation and compliance.",
  areaServed: "Global",
  url: "https://[yourdomain.com]/us-services/corporate-tax-return",
  offers: {
    "@type": "Offer",
    price: "399.00",
    priceCurrency: "USD",
    description: "Annual federal corporate tax return preparation fee.",
  },
};

export const Route = createFileRoute("/us-services/corporate-tax-return")({
  head: () => ({
    meta: [
      { title: "Corporate Tax Return | Form 1120 for C-Corps | ADVAQ" },
      {
        name: "description",
        content:
          "Professional IRS tax preparation for US C-Corporations. Includes Form 1120, balance sheet reconciliation, and foreign-ownership reporting (Form 5472).",
      },
      {
        name: "keywords",
        content:
          "form 1120, corporate tax return, c-corp tax filing, delaware c-corp taxes, startup tax return, foreign owned corporation tax",
      },
      {
        property: "og:title",
        content: "Corporate Tax Return | Form 1120 for C-Corps | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional IRS tax preparation for US C-Corporations. Includes Form 1120, balance sheet reconciliation, and foreign-ownership reporting.",
      },
      { property: "og:url", content: "/us-services/corporate-tax-return" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/corporate-tax-return" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: CorporateTaxReturn,
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
            C-Corporation
            <br />
            Tax Return (Form 1120)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Robust, CPA-grade corporate tax preparation for US C-Corporations and startups. Optimize deductions, reconcile financials, and ensure strict IRS compliance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Corporate Return
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
              <Check size={16} className="text-gold-500" /> Form 1120 Preparation
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Form 5472 (If applicable)
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> NOL Tracking
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> IRS E-Filing Support
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
                What is Form 1120?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Form 1120 (U.S. Corporation Income Tax Return) is the primary tax form used by C-Corporations to report their income, gains, losses, deductions, and credits to the IRS. It is used to calculate the corporation's income tax liability at the 21% flat corporate rate.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Unlike LLCs or Partnerships which pass tax burdens to owners, a C-Corporation is a separate taxable entity. This makes the accounting and tax preparation significantly more complex, requiring strict adherence to GAAP, detailed balance sheets, and proper depreciation schedules.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Building2 size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Crucial Details</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Entity Level Tax:</strong> The corporation itself owes tax on net profits.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Foreign Ownership:</strong> 25%+ foreign-owned C-Corps MUST attach Form 5472.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Deadline:</strong> April 15th (for standard calendar year entities).</span>
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
            Penalties & Audit Triggers
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Corporate returns are highly scrutinized. Errors lead to massive financial exposure.
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
                  Late Filing Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Failing to file Form 1120 triggers a penalty of 5% of the unpaid tax for each month the return is late, up to 25%. Minimum penalties apply even if no tax is owed if filed 60+ days late.
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
                  Form 5472 Violations
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If your C-Corp has foreign ownership and you fail to accurately report related-party transactions, the IRS imposes an immediate, non-negotiable $25,000 penalty per violation.
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
                  Underpayment Interest
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Corporations must pay estimated taxes. Improper tax calculations or failure to submit quarterly payments results in severe underpayment penalties and compounding interest.
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
      title: "Full 1120 Preparation",
      desc: "Complete calculation of corporate gross income, deductions, taxable income, and tax owed.",
    },
    {
      title: "Balance Sheet (Schedule L)",
      desc: "Accurate financial reporting of assets, liabilities, and shareholder equity matching your books.",
    },
    {
      title: "M-1 / M-2 Reconciliation",
      desc: "Reconciling net income per books with income per return, and tracking unappropriated retained earnings.",
    },
    {
      title: "Foreign Reporting (5472)",
      desc: "If required, preparation of Form 5472 to report transactions between the C-Corp and foreign shareholders.",
    },
    {
      title: "Depreciation & NOLs",
      desc: "Tracking and applying asset depreciation (Form 4562) and Net Operating Loss carryforwards.",
    },
    {
      title: "E-Filing Submission",
      desc: "Direct electronic filing to the IRS, securing immediate confirmation of acceptance.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Corporate Filing Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A precise accounting process to protect corporate assets.
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
            <p className="text-xs text-gray-500 uppercase tracking-widest">C-CORPORATION (1120)</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-2xl text-gray-500">From</span>
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$349</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Base fee covers standard C-Corp filings. Highly complex balance sheets, massive asset ledgers, or extensive foreign transaction reporting may adjust pricing.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Form 1120 Preparation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Balance Sheet & Reconciliations</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Basic Form 5472 Reporting</span>
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
              Order Now — $349
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
      desc: "Upload your corporate financial statements (P&L, Balance Sheet) and previous tax returns.",
    },
    {
      title: "Tax Planning",
      desc: "Our CPAs analyze your books to maximize deductions and determine precise tax liabilities.",
    },
    {
      title: "Form Drafting",
      desc: "We generate Form 1120, alongside Schedules L, M-1, and M-2 accurately reflecting corporate equity.",
    },
    {
      title: "Review & Sign",
      desc: "Corporate officers review the draft returns and digitally sign the e-file authorization form (8879-CORP).",
    },
    {
      title: "IRS Acceptance",
      desc: "We transmit the data to the IRS and deliver the formal acceptance confirmation for your corporate records.",
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
            Streamlined processing for startups and mature corporations alike.
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
          <SectionLabel center>CORPORATE FOCUS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Specialized Compliance
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Ensuring C-Corps survive rigorous IRS audits.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Landmark className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Shareholder Loans</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Loans between the C-Corp and shareholders must be treated strictly with formal notes and interest. We analyze these to prevent the IRS reclassifying them as taxable dividends.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileBarChart className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Stock & Equity</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Tracking common stock, preferred stock, and Additional Paid-in Capital (APIC) correctly on the balance sheet is vital for startups raising venture capital.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Calculator className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Tax Credits</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                We help identify eligible R&D tax credits and other incentives that can directly offset the 21% corporate tax liability or payroll taxes.
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
      desc: "Mandatory federal filing detailing company ownership. Avoid $500 daily penalties.",
    },
    {
      title: "Single-Member LLC Tax Return",
      path: "/us-services/single-member-llc-filing",
      desc: "For disregarded entities requiring Form 1120 pro-forma and Form 5472.",
    },
    {
      title: "Partnership Tax Return",
      path: "/us-services/partnership-tax-return",
      desc: "Multi-member LLC tax filing, including Form 1065 and K-1 generation.",
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
            READY FOR APRIL 15?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            File Form 1120 Securely.
            <br />
            Protect Corporate Status.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Corporate taxes require precision. Ensure your C-Corp is fully compliant with the IRS to avoid massive late fees and protect shareholder equity.
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
            CPA-Guided Preparation · Accurate Reconciliations · Secure E-Filing
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function CorporateTaxReturn() {
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
