import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  FileText,
  Calculator,
  Receipt,
  Clock,
  Briefcase,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is Corporate Tax Return Filing in the UAE?",
    a: "Corporate Tax Return Filing is the annual mandatory declaration of a company's financial performance, taxable income, and corporate tax liability to the Federal Tax Authority (FTA). It requires submitting audited or well-documented financial statements alongside the tax calculation.",
  },
  {
    q: "When is the deadline to file my Corporate Tax return?",
    a: "Your Corporate Tax return must be filed and any tax due must be paid within 9 months following the end of your company's relevant tax period (financial year). For example, if your financial year ends on December 31, the deadline is September 30 of the following year.",
  },
  {
    q: "What is the Corporate Tax rate in the UAE?",
    a: "The standard Corporate Tax rate is 9% on taxable income exceeding AED 375,000. Taxable income up to AED 375,000 is taxed at 0%. Free Zone Persons meeting certain qualifying conditions may benefit from a 0% rate on their Qualifying Income.",
  },
  {
    q: "Do I need to file a return if my profit is below AED 375,000?",
    a: "Yes. Even if your taxable income is below the AED 375,000 threshold and your tax liability is zero, you are legally required to file a Corporate Tax return. Failing to file will result in administrative penalties.",
  },
  {
    q: "What are the penalties for late filing?",
    a: "Failing to file your Corporate Tax return by the deadline will result in an immediate administrative penalty of AED 1,000 per month for the first 12 months, escalating to AED 2,000 per month thereafter. Late payments incur additional percentage-based penalties.",
  },
  {
    q: "Are financial statements required to file the return?",
    a: "Yes. The Corporate Tax return must be based on standalone financial statements prepared in accordance with International Financial Reporting Standards (IFRS). Certain businesses, including those with revenue exceeding AED 50 million or Qualifying Free Zone Persons, must have these statements independently audited.",
  },
  {
    q: "What is a Qualifying Free Zone Person (QFZP)?",
    a: "A QFZP is a Free Zone company that meets strict FTA criteria, including maintaining adequate substance in the UAE, deriving 'Qualifying Income', and complying with transfer pricing rules. A QFZP can benefit from a 0% Corporate Tax rate on its Qualifying Income.",
  },
  {
    q: "Can I deduct my personal expenses from the company's taxable income?",
    a: "No. Only expenses wholly and exclusively incurred for the purpose of the business are deductible. Personal expenses, fines, and certain entertainment expenses (limited to 50% deduction) are not allowable deductions.",
  },
  {
    q: "What is Small Business Relief?",
    a: "Small Business Relief allows eligible resident companies with gross revenue up to AED 3 Million to be treated as having zero taxable income. If elected, they are not subject to the 9% tax, but they must still file a simplified Corporate Tax return.",
  },
  {
    q: "Can I carry forward business losses to offset future taxes?",
    a: "Yes, tax losses can be carried forward indefinitely and used to offset up to 75% of taxable income in subsequent tax periods, provided the business meets specific continuity of ownership or business activity conditions.",
  },
  {
    q: "How does Transfer Pricing affect my return?",
    a: "Transactions between related parties and connected persons must comply with the 'arm’s length' principle. You must maintain transfer pricing documentation and disclose these transactions in your Corporate Tax return.",
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
  serviceType: "UAE Corporate Tax Return Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Corporate Tax Return Filing Service",
  description:
    "Expert UAE Corporate Tax Return Filing service. Avoid FTA penalties and ensure accurate calculation and compliance with our professional tax agents.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/corporate-tax-return-filing",
  offers: {
    "@type": "Offer",
    price: "2999.00",
    priceCurrency: "AED",
    description: "Professional fee for annual UAE Corporate Tax Return Filing.",
  },
};

export const Route = createFileRoute("/uae-services/corporate-tax-return-filing")({
  head: () => ({
    meta: [
      { title: "UAE Corporate Tax Return Filing | ADVAQ" },
      {
        name: "description",
        content:
          "Professional UAE Corporate Tax return filing services. Avoid heavy FTA penalties, ensure accurate tax calculations, and claim exemptions for AED 2,999.",
      },
      {
        name: "keywords",
        content:
          "uae corporate tax return filing, file corporate tax dubai, uae ct filing, fta corporate tax compliance, small business relief, freezone qualifying income",
      },
      {
        property: "og:title",
        content: "UAE Corporate Tax Return Filing | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional UAE Corporate Tax return filing services. Avoid heavy FTA penalties and ensure accurate tax calculations.",
      },
      { property: "og:url", content: "/uae-services/corporate-tax-return-filing" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/corporate-tax-return-filing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: CorporateTaxReturnFiling,
});

function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">
            🇦🇪 ANNUAL TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE Corporate Tax Return Filing
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your business with expert annual Corporate Tax filing. From determining taxable income to applying for critical exemptions, we ensure 100% FTA compliance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File My Corporate Tax
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
              <Check size={16} className="text-gold-500" /> Accurate IFRS Adjustments
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Free Zone Exemption Checks
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Small Business Relief Election
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> EmaraTax Submission
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>THE ESSENTIALS</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is Corporate Tax Return Filing?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Following the implementation of the Federal Corporate Tax in the UAE, every registered entity—Mainland, Freezone, and Offshore—must file an annual Corporate Tax return. This process involves calculating your net accounting profit, applying tax adjustments for non-deductible expenses or exempt incomes, and declaring your final taxable income to the FTA.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For Free Zone companies, filing is even more critical. To claim the 0% tax rate, you must legally prove that you derived "Qualifying Income" and maintained "Adequate Substance". A mistake in this filing can instantly subject your entire company's revenue to the standard 9% tax rate.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Briefcase size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Professional Filing Matters</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Tax Optimization:** Legally applying relief programs like Small Business Relief.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Complex Calculations:** Accurate add-backs and transfer pricing adjustments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Audit Protection:** Detailed working papers defending your tax position against FTA scrutiny.</span>
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

function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Severe Repercussions for Errors
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The UAE Corporate Tax regime enforces strict compliance, treating tax evasion and negligent reporting with heavy financial penalties.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Loss of 0% Freezone Status
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Failing to correctly classify Qualifying Income or missing the audit requirement completely nullifies your 0% Freezone tax benefit, taxing all profit at 9%.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Late Submission Fines
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Missed filing deadlines result in AED 1,000 penalties per month. If deliberate evasion is suspected, penalties can reach 300% of the tax due plus potential prosecution.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Improper Deductions
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Claiming non-deductible personal expenses or failing to adhere to arm's-length transfer pricing leads to tax assessments and heavy corrective fines during an FTA audit.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsIncluded() {
  const inclusions = [
    {
      title: "Financial Review",
      desc: "Comprehensive review of your balance sheet and income statement for tax compliance.",
    },
    {
      title: "Tax Computations",
      desc: "Preparing the tax computation schedule, identifying disallowable expenses and tax exemptions.",
    },
    {
      title: "SBR / QFZP Assessment",
      desc: "Evaluating eligibility and formally electing Small Business Relief or Free Zone Qualifying Income.",
    },
    {
      title: "Loss Relief & Carry Forward",
      desc: "Accurately declaring business losses to offset tax liabilities in future financial years.",
    },
    {
      title: "EmaraTax Filing",
      desc: "Submitting the comprehensive annual corporate tax return through the FTA EmaraTax portal.",
    },
    {
      title: "Audit File Preparation",
      desc: "Creating robust tax working papers to be kept on file in the event of an FTA tax audit.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Comprehensive Corporate Tax Filing
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We transform your accounting data into a fully compliant, risk-free tax declaration.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <FileText className="text-gold-500 mb-4" size={24} />
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

function Pricing() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Annual Filing Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Annual Service
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">CORPORATE TAX RETURN</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 2,999</span>
              <span className="text-sm text-gray-500">/ year</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Flat rate for standard SME businesses. Does not include financial auditing or bookkeeping services.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Thorough review of financial statements</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Tax adjustment and add-back calculation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Filing of the official FTA Corporate Tax Return</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Small Business Relief election handling</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — AED 2,999
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    {
      title: "Data Handover",
      desc: "Provide your year-end financial statements (Trial Balance, P&L, Balance Sheet).",
    },
    {
      title: "Tax Assessment",
      desc: "We analyze your financials, determine non-deductible expenses, and identify exemptions.",
    },
    {
      title: "Drafting Return",
      desc: "We prepare the detailed tax computation working papers and draft the CT return.",
    },
    {
      title: "Client Approval",
      desc: "You review the computed tax liability or exemption status before we finalize.",
    },
    {
      title: "FTA Submission",
      desc: "We file your Corporate Tax Return via EmaraTax within the 9-month deadline.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Process Your CT Return
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Methodical, accurate, and fully transparent tax processing.
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

function RelatedServices() {
  const services = [
    {
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Mandatory first step: Get your Corporate Tax Registration Number (TRN).",
    },
    {
      title: "Small Business Relief",
      path: "/uae-services/small-business-relief",
      desc: "Detailed evaluation and election for 0% corporate tax for revenues under AED 3M.",
    },
    {
      title: "VAT Return Filing",
      path: "/uae-services/vat-return-filing",
      desc: "Quarterly filing of Value Added Tax returns to ensure 100% FTA compliance.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Tax Services
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

function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            DON'T RISK HEAVY PENALTIES
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            File Your Corporate Tax Correctly.
            <br />
            Secure Your 0% Relief.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your business from costly compliance errors. Let our expert tax professionals handle your Corporate Tax Return seamlessly.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Secure My Filing →
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
            Professional Tax Agents · IFRS Knowledge · 100% FTA Compliance
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function CorporateTaxReturnFiling() {
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
