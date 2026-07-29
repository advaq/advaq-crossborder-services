import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Building2,
  FileText,
  Coins,
  Calculator,
  Briefcase,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Is it mandatory for an SECP registered company to file a tax return?",
    a: "Yes. Every company incorporated under the Companies Act 2017 (including Pvt Ltd and SMC) is legally required to file an annual income tax return with FBR, regardless of whether it earned a profit, incurred a loss, or remained dormant during the year.",
  },
  {
    q: "What is the tax rate for a Private Limited Company in Pakistan?",
    a: "The standard corporate tax rate for a Private Limited Company in Pakistan is generally 29% (subject to changes in the Finance Act). However, IT/ITeS companies and software houses that meet certain conditions can claim a 100% tax credit or a reduced rate of 0.25% under specific sections.",
  },
  {
    q: "What are the consequences of not filing a corporate tax return?",
    a: "Failure to file results in severe penalties starting from Rs. 40,000 or a percentage of the tax payable (whichever is higher). Your company will also lose its Active Taxpayer status, facing double withholding taxes on bank withdrawals and contracts, and may receive notices for default assessments.",
  },
  {
    q: "My company is newly registered and hasn't started operations. Do I still file?",
    a: "Yes. You must file a 'Nil' return if your company had no business activity. Not filing a return, even if dormant, constitutes a violation of both FBR and SECP compliance regulations.",
  },
  {
    q: "What documents are required to file a company tax return?",
    a: "We require the company's audited or unaudited financial statements (Balance Sheet, Profit & Loss), bank statements for the entire tax year, details of directors' remuneration, and evidence of any withholding taxes paid/deducted during the year.",
  },
  {
    q: "Do I need audited accounts to file my corporate tax return?",
    a: "If your company's paid-up capital is below Rs. 3 million, you generally do not need audited accounts for tax filing; management accounts (unaudited) suffice. If the capital is Rs. 3 million or above, audited financial statements from an authorized chartered accountant firm are required.",
  },
  {
    q: "How does my software house claim the IT Export Tax Exemption?",
    a: "To claim the IT export exemption (Section 65F) or the reduced rate (154A), your company must be registered with PSEB, bring 80% of its export revenue into Pakistan through banking channels, and file the annual tax return correctly claiming the specific exemption.",
  },
  {
    q: "What is the deadline for filing corporate tax returns?",
    a: "The deadline for companies with a tax year ending on June 30th is typically December 31st of the same year. If the tax year ends on December 31st, the deadline is September 30th of the following year.",
  },
  {
    q: "How do you handle withholding taxes deducted from my company's revenue?",
    a: "Any withholding tax deducted by your clients, banks, or telecom providers is adjusted against your final corporate tax liability. We require the tax deduction certificates (CPR) to claim these credits accurately in IRIS.",
  },
  {
    q: "Can I revise a filed company tax return?",
    a: "Yes, a corporate return can be revised within 60 days without FBR Commissioner approval, provided the revision does not reduce the tax liability. Beyond 60 days, or to claim a refund, formal approval is required.",
  },
  {
    q: "What is the minimum tax on turnover?",
    a: "Companies are subject to a minimum tax (generally 1.25% of turnover) even if they declare a loss. However, specific exemptions apply to certain sectors, and the minimum tax rate can vary depending on the industry.",
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
  serviceType: "Corporate Income Tax Return Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Company Tax Return Filing in Pakistan",
  description:
    "File your Corporate FBR Income Tax Return for Pvt Ltd and SMCs accurately with ADVAQ. Complete financial declaration and ATL compliance for businesses.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/company-tax-return",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "USD",
    description: "Professional fee for corporate income tax return filing.",
  },
};

export const Route = createFileRoute("/pakistan-services/company-tax-return")({
  head: () => ({
    meta: [
      { title: "Company Tax Return Filing in Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "File your Corporate FBR Income Tax Return accurately. Services for Private Limited Companies (Pvt Ltd) and Single Member Companies (SMC). Ensure corporate compliance.",
      },
      {
        name: "keywords",
        content:
          "company tax return pakistan, corporate tax filing fbr, pvt ltd tax return, smc tax filing, corporate active taxpayer, fbr company tax, software house tax exemption",
      },
      {
        property: "og:title",
        content: "Company Tax Return Filing in Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "File your Corporate FBR Income Tax Return accurately. Services for Private Limited Companies (Pvt Ltd) and Single Member Companies (SMC) in Pakistan.",
      },
      { property: "og:url", content: "/pakistan-services/company-tax-return" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/company-tax-return" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: CompanyTaxReturn,
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
            🇵🇰 CORPORATE TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Company Tax Return Filing
            <br />
            in Pakistan
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Complete corporate tax return preparation for Private Limited Companies and SMCs. We ensure strict adherence to FBR regulations, optimize tax credits, and maintain your Active Taxpayer status.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Corporate Tax Filing
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
              <Check size={16} className="text-gold-500" /> For Pvt Ltd & SMC
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> IT Export Exemption Claim
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Corporate ATL Activation
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Processed by Tax Attorneys
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
                What is a Corporate Tax Return?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Every SECP-registered company is a separate legal entity and must independently file a corporate income tax return with the Federal Board of Revenue (FBR) detailing its annual revenue, expenses, profits, and tax liabilities.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Filing is mandatory even if the company is dormant or operating at a loss. Proper filing allows the company to carry forward business losses to future years, claim tax credits (such as withheld taxes by clients), and formally declare exemptions like the IT export tax credit for software houses.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Building2 size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Corporate Advantages</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Carry Forward Losses:</strong> Offset this year's losses against future profits to reduce tax burdens over time.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Tax Credits:</strong> Reclaim the withholding taxes deducted by your banks and clients.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Tender Eligibility:</strong> Maintain active taxpayer status to bid for government and private corporate contracts.</span>
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
            Consequences of Default
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Corporate tax default attracts severe penalties and paralyzes business operations.
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
                  Heavy Statutory Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Non-filing companies face a minimum penalty of Rs. 40,000, which can increase rapidly if FBR issues a notice of default assessment.
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
                  Bank Account Freezes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  FBR possesses the legal authority to attach and freeze corporate bank accounts to recover outstanding tax liabilities and default penalties.
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
                  Loss of Exemptions
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  IT companies lose their 100% tax exemption if they fail to file the return within the due date, exposing their entire revenue to the standard 29% tax rate.
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
      title: "Financial Statement Entry",
      desc: "Accurately mapping your company's P&L and Balance Sheet into the FBR IRIS corporate return forms.",
    },
    {
      title: "Tax Depreciation Calculation",
      desc: "Calculating tax depreciation on company assets according to FBR schedules, differing from accounting depreciation.",
    },
    {
      title: "Minimum Tax & Turnover",
      desc: "Determining minimum tax applicability based on corporate turnover and specific industry exemptions.",
    },
    {
      title: "Withholding Tax Adjustments",
      desc: "Claiming credits for all taxes withheld by clients, banks, and utility companies during the year.",
    },
    {
      title: "Section 65F / 154A Claims",
      desc: "Properly claiming IT export exemptions for tech companies and software houses.",
    },
    {
      title: "IRIS Submission & ATL",
      desc: "Final submission of the corporate return and immediate activation on the FBR Active Taxpayers List.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Complete Corporate Tax Filing
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the intricate FBR mapping of your financials, ensuring total compliance.
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
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Corporate Filing Package
          </h2>
        </Reveal>

        <div className="max-w-lg mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                SMC & PVT LTD
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center mt-2">SECP REGISTERED COMPANIES</p>
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2 text-center">Company Tax Return</h3>
                <div className="mt-4 flex justify-center items-baseline gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 20,000</span>
                  <span className="text-xs text-gray-500">/ year</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Corporate Income Tax Return</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Financial Statement Mapping</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Withholding Tax Adjustments</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> IT Exemption Claim Handling</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Active Taxpayer Status (ATL) Activation</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Start Filing — Rs. 20,000
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
      title: "Financials Review",
      desc: "You share your management or audited accounts (P&L, Balance Sheet) and bank statements.",
    },
    {
      title: "Tax Computation",
      desc: "We calculate taxable income, apply tax depreciation, and adjust deductible withholding taxes.",
    },
    {
      title: "Draft Approval",
      desc: "We share a detailed draft computation of your corporate tax liability for final approval.",
    },
    {
      title: "Payment Setup",
      desc: "If corporate tax is due, we issue the PSID challan for direct payment via your bank.",
    },
    {
      title: "IRIS Filing",
      desc: "We file the return through the corporate IRIS portal and ensure ATL status is updated.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How Corporate Filing Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A precise, five-step process handled by corporate tax professionals.
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
      desc: "Register a new Pvt Ltd or SMC with the SECP in Pakistan.",
    },
    {
      title: "Individual Tax Return",
      path: "/pakistan-services/individual-tax-return",
      desc: "Need to file tax returns for the company directors? We do that too.",
    },
    {
      title: "IT Export Tax Exemption",
      path: "/pakistan-services/pseb-registration",
      desc: "Specific consulting to claim Section 65F export exemptions.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Corporate Services
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
            CORPORATE COMPLIANCE
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Protect Your Business.
            <br />
            File Your Corporate Return.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Avoid heavy statutory fines and maintain your corporate standing. Our tax experts ensure perfect mapping of your financials into the FBR system.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Corporate Filing →
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
            Expert Tax Attorneys · Correct Financial Mapping · FBR IRIS Experts
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function CompanyTaxReturn() {
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
