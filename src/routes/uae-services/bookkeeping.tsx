import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Calculator,
  PieChart,
  FileSpreadsheet,
  LineChart,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Why do I need professional bookkeeping in the UAE?",
    a: "Under UAE Corporate Tax Law and VAT regulations, it is mandatory for businesses to maintain accurate financial records for up to 5 years (or more for real estate). Professional bookkeeping ensures your ledgers are FTA-compliant, minimizing the risk of severe penalties during a tax audit.",
  },
  {
    q: "Are small businesses exempt from maintaining accounting records?",
    a: "No. Even if your revenue falls below the Corporate Tax or VAT registration thresholds, or if you qualify for Small Business Relief, you are legally obligated to maintain accurate financial statements and keep records of all transactions.",
  },
  {
    q: "How often should my books be updated?",
    a: "We recommend monthly or quarterly updates depending on your transaction volume and VAT return filing frequency. Keeping books updated regularly allows for accurate cash flow analysis and ensures readiness for tax submissions.",
  },
  {
    q: "What software do you use for bookkeeping?",
    a: "We are proficient in leading cloud-based accounting software including Xero, QuickBooks Online, and Zoho Books. We can help you set up the software, migrate data, and maintain your books securely in the cloud.",
  },
  {
    q: "Do I need to hire an in-house accountant?",
    a: "No. Outsourcing your bookkeeping to a professional firm like ADVAQ is much more cost-effective. You save on visa, salary, and office space costs while benefiting from the expertise of seasoned financial professionals.",
  },
  {
    q: "What documents do I need to provide each month?",
    a: "You will need to provide bank statements, sales invoices, purchase receipts, expense claims, and payroll records. We provide a secure digital portal to easily upload these documents.",
  },
  {
    q: "Will you help with VAT returns as part of the bookkeeping?",
    a: "Our core bookkeeping package focuses on maintaining ledgers, reconciling banks, and preparing financial statements. We do offer dedicated VAT return filing as an add-on or within our comprehensive packages.",
  },
  {
    q: "Can you help clear a backlog of untracked finances?",
    a: "Yes. We offer historical bookkeeping services to reconstruct your accounts from past bank statements and receipts to ensure your books are completely up-to-date and FTA compliant.",
  },
  {
    q: "What is 'FTA-compliant' bookkeeping?",
    a: "FTA-compliant bookkeeping means your financial records are maintained according to International Financial Reporting Standards (IFRS) as mandated by the UAE Federal Tax Authority. This includes proper charting of accounts, accurate categorisation of VAT, and maintaining proper audit trails.",
  },
  {
    q: "How do you ensure data security?",
    a: "We use encrypted, industry-standard cloud accounting software (like Xero or QuickBooks). Your financial data is securely backed up and restricted to authorized professionals only.",
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
  serviceType: "UAE Bookkeeping & Accounting Services",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Corporate Bookkeeping Services",
  description:
    "Professional, FTA-compliant bookkeeping and accounting services in the UAE. Get accurate financial statements, bank reconciliations, and tax-ready ledgers.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/bookkeeping",
  offers: {
    "@type": "Offer",
    price: "750.00",
    priceCurrency: "AED",
    description: "Monthly professional bookkeeping services starting from AED 750.",
  },
};

export const Route = createFileRoute("/uae-services/bookkeeping")({
  head: () => ({
    meta: [
      { title: "UAE Bookkeeping & Accounting Services | ADVAQ" },
      {
        name: "description",
        content:
          "Secure your business with FTA-compliant bookkeeping in the UAE. From AED 750/month. We provide accurate ledgers, bank reconciliation, and tax-ready financials.",
      },
      {
        name: "keywords",
        content:
          "uae bookkeeping, dubai accounting services, fta compliant bookkeeping, corporate tax accounting uae, small business accounting dubai",
      },
      {
        property: "og:title",
        content: "UAE Bookkeeping & Accounting Services | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Secure your business with FTA-compliant bookkeeping in the UAE. From AED 750/month. We provide accurate ledgers, bank reconciliation, and tax-ready financials.",
      },
      { property: "og:url", content: "/uae-services/bookkeeping" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/bookkeeping" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: BookkeepingService,
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
            📊 FINANCIAL COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE Bookkeeping & Accounting Services
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Keep your business financially healthy and 100% FTA-compliant. Our professional bookkeeping services deliver tax-ready accounts, pristine bank reconciliations, and deep financial insights.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Get Your Custom Quote
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
              <Check size={16} className="text-gold-500" /> IFRS Compliant Reporting
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Audit & Tax Ready Ledgers
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Xero & QuickBooks Experts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Cloud-Based Security
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
                Why Outsource Your Bookkeeping?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                With the introduction of Corporate Tax, the UAE has shifted to a strictly regulated tax environment. Every business, regardless of size or Freezone status, is now legally required to maintain accurate financial records for up to 5 years.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Professional bookkeeping is no longer optional. By outsourcing your accounting to ADVAQ, you ensure your books are meticulously maintained according to International Financial Reporting Standards (IFRS). We handle the data entry, reconciliations, and reporting, so you can focus entirely on scaling your business without fearing an FTA audit.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">The ADVAQ Edge</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Tax-Ready Output:</strong> Accounts formatted specifically for UAE Corporate Tax and VAT returns.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Cost Efficiency:</strong> Avoid the overheads of hiring a full-time, visa-sponsored accountant.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Actionable Insights:</strong> Receive monthly profit & loss statements to make informed decisions.</span>
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
            The Cost of Poor Record-Keeping
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Inaccurate or missing financial records expose your business to severe penalties and operational bottlenecks in the UAE.
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
                  FTA Audit Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Failure to keep required records under UAE tax law triggers an automatic penalty of AED 10,000 for the first offense, escalating to AED 50,000 for repeat violations.
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
                  Tax Assessment Risks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without proper books, you cannot accurately claim legitimate business expenses or Small Business Relief, resulting in overpaying Corporate Tax.
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
                  Blind Decision Making
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Relying solely on your bank balance rather than a Profit & Loss statement masks true profitability, leading to cash flow crises and poor investment choices.
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
      icon: <FileSpreadsheet className="text-gold-500 mb-4" size={24} />,
      title: "Data Entry & Ledger Maintenance",
      desc: "Accurate logging of all sales, purchases, and expenses into industry-standard accounting software.",
    },
    {
      icon: <Shield className="text-gold-500 mb-4" size={24} />,
      title: "Bank & Gateway Reconciliation",
      desc: "Matching your accounting records with bank statements and payment gateways (Stripe, PayPal) to prevent missing funds.",
    },
    {
      icon: <PieChart className="text-gold-500 mb-4" size={24} />,
      title: "Financial Statement Preparation",
      desc: "Monthly generation of Profit & Loss statements, Balance Sheets, and Cash Flow reports.",
    },
    {
      icon: <BookOpen className="text-gold-500 mb-4" size={24} />,
      title: "Accounts Payable/Receivable",
      desc: "Tracking who owes you money (aging reports) and managing your supplier invoices to optimize cash flow.",
    },
    {
      icon: <LineChart className="text-gold-500 mb-4" size={24} />,
      title: "VAT Categorisation",
      desc: "Ensuring all inputs and outputs are correctly flagged with standard, zero, or exempt VAT rates for easy returns.",
    },
    {
      icon: <CheckCircle className="text-gold-500 mb-4" size={24} />,
      title: "Dedicated Account Manager",
      desc: "Direct access to a financial expert who understands your business model and answers your queries promptly.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Comprehensive Bookkeeping Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A full-stack accounting department, available at a fraction of the cost.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                {inc.icon}
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
            Monthly Retainer Packages
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Starting From
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">MICRO & SMALL BUSINESS</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 750</span>
              <span className="text-sm text-gray-500">/ month</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Pricing is tailored based on your monthly transaction volume, required reporting frequency, and business complexity.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Up to 50 transactions / month</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Monthly Bank Reconciliation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Quarterly Management Reports</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Cloud Software Setup (Xero/QuickBooks)</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Request Custom Quote
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
      title: "Consultation",
      desc: "We analyze your business model, transaction volume, and current accounting state to provide a customized quote.",
    },
    {
      title: "Software Setup",
      desc: "We set up your Xero or QuickBooks environment, customize the chart of accounts, and link your banks.",
    },
    {
      title: "Data Handover",
      desc: "You simply upload your monthly statements, invoices, and receipts to our secure digital portal.",
    },
    {
      title: "Processing & Reconciling",
      desc: "Our accountants categorize every transaction accurately and reconcile against your bank feeds.",
    },
    {
      title: "Reporting",
      desc: "Receive clear, accurate financial statements (P&L, Balance Sheet) to evaluate your business performance.",
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
            A streamlined, hassle-free process designed for busy founders.
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
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Mandatory tax registration for all UAE businesses to avoid a minimum AED 10,000 fine.",
    },
    {
      title: "Small Business Relief",
      path: "/uae-services/small-business-relief",
      desc: "Qualify for a 0% corporate tax rate if your revenue is under AED 3 Million.",
    },
    {
      title: "Freezone Company Setup",
      path: "/uae-services/freezone-company-formation",
      desc: "Register a new UAE entity with 100% foreign ownership and complete compliance frameworks.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Compliance Services
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
            PROTECT YOUR BUSINESS
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Fail Your First FTA Audit.
            <br />
            Get Professional Bookkeeping Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your accounts are impeccably maintained, fully reconciled, and ready for UAE Corporate Tax compliance. Contact us for a customized bookkeeping quote.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get Custom Quote →
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
            Certified Accountants · Xero & QuickBooks Experts · FTA Compliant
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function BookkeepingService() {
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
