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
  PoundSterling,
  Receipt,
  FileBarChart,
  LayoutDashboard,
  TrendingUp,
  Percent
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a VAT Return?",
    a: "A VAT (Value Added Tax) Return is a tax form you file with HMRC, usually every 3 months. It records the total sales and purchases of your business, detailing how much VAT you owe to HMRC or how much you can reclaim.",
  },
  {
    q: "When do I need to register for VAT in the UK?",
    a: "You must register for VAT if your VAT-taxable turnover goes over the threshold (currently £90,000) in a rolling 12-month period, or if you expect it to cross the threshold in the next 30 days. You can also register voluntarily before reaching this limit.",
  },
  {
    q: "What is Making Tax Digital (MTD) for VAT?",
    a: "Making Tax Digital is HMRC’s initiative to digitalize tax. All VAT-registered businesses must now keep digital records and use MTD-compatible software (like Xero or QuickBooks) to submit their VAT Returns. You cannot manually type figures into the HMRC portal anymore.",
  },
  {
    q: "How often do I need to file a VAT Return?",
    a: "Most businesses file VAT Returns quarterly (every 3 months). However, some businesses may choose or be required to file monthly or annually depending on their specific VAT scheme and HMRC arrangements.",
  },
  {
    q: "What are the penalties for late VAT filing or payment?",
    a: "HMRC operates a penalty points system. If you submit late, you get a point. Accumulate enough points, and you receive a £200 fine for every subsequent late submission. Late payments incur interest and potential surcharges that escalate quickly.",
  },
  {
    q: "Can I reclaim VAT on business expenses?",
    a: "Yes, you can generally reclaim the VAT you have paid on goods and services purchased exclusively for your business, provided you have a valid VAT invoice from a VAT-registered supplier.",
  },
  {
    q: "What documents do I need to provide for you to file my VAT?",
    a: "We need access to your bookkeeping software, or your sales invoices, purchase invoices, and bank statements for the relevant quarter. The cleaner your records, the faster we can reconcile and file.",
  },
  {
    q: "What if I sell digital services to EU or international customers?",
    a: "Selling digital services internationally can complicate VAT due to 'place of supply' rules. We analyze your sales channels to determine if UK VAT applies, or if you fall outside the scope of UK VAT.",
  },
  {
    q: "Do you use MTD-compliant software?",
    a: "Absolutely. We utilize top-tier MTD-compliant accounting software to ensure your digital records are kept accurately and your submissions are accepted instantly by HMRC.",
  },
  {
    q: "What is the Flat Rate Scheme, and is it better?",
    a: "The Flat Rate Scheme simplifies VAT by letting you pay a fixed percentage of your total turnover to HMRC, rather than tracking VAT on every purchase. It’s great for businesses with few expenses, but we will evaluate if it's the most cost-effective option for you.",
  },
  {
    q: "How do I pay the VAT I owe to HMRC?",
    a: "You can pay HMRC directly via Direct Debit, online bank transfer, or corporate debit card. Setting up a Direct Debit is recommended as it ensures you never miss a payment deadline.",
  },
  {
    q: "What if I made a mistake on a previous VAT Return?",
    a: "If the error is under £10,000, we can typically adjust it on your next VAT return. For larger errors, we must formally notify HMRC. We can review past returns and make the necessary corrections.",
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
  serviceType: "VAT Return Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK VAT Return Filing & MTD Compliance",
  description:
    "Quarterly VAT return preparation and MTD-compliant filing for UK Limited Companies. Ensure accurate sales tax reporting, reclaim eligible expenses, and avoid HMRC penalties.",
  areaServed: "United Kingdom",
  url: "https://[yourdomain.com]/uk-services/vat-return-filing",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "GBP",
    description: "Quarterly VAT Return filing fee.",
  },
};

export const Route = createFileRoute("/uk-services/vat-return-filing")({
  head: () => ({
    meta: [
      { title: "VAT Return Filing & MTD Compliance | ADVAQ" },
      {
        name: "description",
        content:
          "Professional UK VAT return preparation and Making Tax Digital (MTD) compliant filing. Quarterly VAT calculations, expense reclaims, and HMRC penalty prevention.",
      },
      {
        name: "keywords",
        content:
          "vat return filing uk, mtd vat compliant, file vat return hmrc, quarter vat filing, vat reclaim uk business",
      },
      {
        property: "og:title",
        content: "VAT Return Filing & MTD Compliance | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional UK VAT return preparation and Making Tax Digital (MTD) compliant filing.",
      },
      { property: "og:url", content: "/uk-services/vat-return-filing" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/vat-return-filing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: VATReturnFiling,
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
            🇬🇧 CORPORATE VAT COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            VAT Return Filing &
            <br />
            MTD Compliance
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Accurate quarterly VAT calculations and Making Tax Digital (MTD) compliant submissions. We handle the reconciliations, maximize your allowable reclaims, and keep HMRC satisfied.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Setup VAT Filing
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Discuss with an Expert
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% MTD Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Maximize VAT Reclaims
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Timely Submissions
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Error Correction
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
                What is VAT Filing and MTD?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Value Added Tax (VAT) is a consumption tax placed on almost all goods and services sold in the UK. When your business is VAT registered, you act as a tax collector for the government, adding 20% to your invoices and paying it to HMRC, while deducting the VAT you've paid on business expenses.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                <strong>Making Tax Digital (MTD)</strong> is now the mandatory law. It requires all VAT-registered businesses to keep their financial records digitally and use approved software to bridge data directly to HMRC. Manual entry via the HMRC web portal is no longer permitted, making professional software and accounting support essential.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Receipt size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Outsource VAT?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Strict Deadlines:** Quarterly filings must be precise and on-time.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Software Mandate:** MTD requires specific, compliant bridging software.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Complex Rules:** Differentiating between standard, zero-rated, and exempt items is tricky.</span>
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
            The Danger of VAT Errors
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            HMRC views VAT as their money that you are holding. Mismanaging it carries severe consequences.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                MTD Non-Compliance
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Failing to keep digital records or attempting to submit outside of MTD-approved software results in automatic rejections and immediate penalties from HMRC.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Points-Based Penalties
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                HMRC issues penalty points for every late submission. Reaching the threshold triggers a strict £200 fine for every subsequent late filing, plus compounding interest on unpaid tax.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                VAT Inspections
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Claiming back VAT without proper receipts, or incorrectly applying zero-rates to standard goods, triggers deep-dive audits where HMRC can demand years of back taxes.
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
      title: "Bookkeeping Review",
      desc: "We review your sales and purchase ledgers to ensure all transactions are categorized correctly for VAT purposes.",
    },
    {
      title: "Input/Output Tax Calculation",
      desc: "We accurately calculate the VAT you owe on sales (Output Tax) against the VAT you can reclaim on purchases (Input Tax).",
    },
    {
      title: "MTD Compliant Software",
      desc: "We use HMRC-recognized software to bridge your digital records and submit the 9-box VAT return directly to HMRC.",
    },
    {
      title: "Scheme Optimization",
      desc: "We monitor whether the Standard Rate or Flat Rate scheme is more financially beneficial for your current business volume.",
    },
    {
      title: "Filing & Confirmation",
      desc: "We handle the strict deadlines, submit the return on time, and provide you with the official HMRC receipt.",
    },
    {
      title: "Payment Guidance",
      desc: "We instruct you on exactly how much is owed, when the deadline is, and the easiest ways to pay HMRC.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our VAT Filing Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            End-to-end VAT management. We handle the calculations, the software, and the submission.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300 h-full">
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
            Quarterly Filing Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              MTD VAT RETURN
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">QUARTERLY COMPLIANCE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£99</span>
              <span className="text-sm text-gray-500">/ quarter</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Flat rate for standard quarterly VAT returns assuming clean, categorized records. Bookkeeping catch-up services available if needed.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Full Input & Output Tax Calculation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Verification of Allowable Expenses</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>HMRC MTD-Compliant Digital Submission</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Agent Representation with HMRC</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start VAT Filing
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
      title: "Record Collection",
      desc: "At quarter-end, you share your digital records, bank statements, and invoices with our team via secure portal or software link.",
    },
    {
      title: "Reconciliation",
      desc: "We review transactions, ensuring VAT is applied correctly to sales and maximizing eligible VAT reclaims on purchases.",
    },
    {
      title: "Draft Return",
      desc: "We generate the standard 9-box VAT return detailing the exact figures that will be submitted to HMRC.",
    },
    {
      title: "Approval",
      desc: "We send you the draft for final review and approval, confirming the exact liability or refund due.",
    },
    {
      title: "MTD Submission",
      desc: "Upon approval, we transmit the return directly to HMRC via MTD bridging software, providing you a submission receipt.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Process Your VAT
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A precise, quarterly rhythm to keep you compliant.
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

/* ---------- SECTION 7: SOFTWARE INTEGRATIONS ---------- */
function SoftwareIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>DIGITAL COMPLIANCE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Making Tax Digital Software
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            We interface seamlessly with industry-leading accounting software to maintain strict MTD compliance.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <LayoutDashboard className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Xero</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Fully compatible with Xero cloud accounting. We can link directly to your ledger to pull VAT reports, review coding, and submit bridging data to HMRC.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <FileBarChart className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">QuickBooks Online</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Expert handling of QBO’s VAT center. We ensure your VAT codes are mapped correctly and seamlessly transmit your quarterly return.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Percent className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Bridging Software</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If you use custom systems or robust spreadsheets, we use authorized bridging software to convert your data into an MTD-compliant format for submission.
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
      title: "HMRC Self Assessment",
      path: "/uk-services/self-assessment",
      desc: "Annual personal tax filing for company directors to declare income legally.",
    },
    {
      title: "UK LTD Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a new UK corporate entity with Companies House.",
    },
    {
      title: "Dividend Planning",
      path: "/uk-services/dividend-planning",
      desc: "Strategically extract profits from your company tax-efficiently.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related UK Compliance Services
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
            STAY COMPLIANT
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Ready for your Next VAT Quarter?
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Don't risk HMRC penalty points or audits. Let our accounting professionals manage your Making Tax Digital VAT returns smoothly and accurately.
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
            MTD Compliant Software · Accurate Reconciliations · Timely Submissions
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function VATReturnFiling() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <SoftwareIntegrations />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
