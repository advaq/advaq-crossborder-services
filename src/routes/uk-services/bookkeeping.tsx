import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  AlertTriangle,
  FileSpreadsheet,
  Calculator,
  LineChart,
  BarChart4,
  FileText,
  PieChart,
  Target
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Why do I need professional bookkeeping for my UK LTD?",
    a: "HMRC requires all UK limited companies to keep accurate financial records. Professional bookkeeping ensures your income, expenses, and taxes are correctly categorised, preventing costly errors, compliance penalties, and overpaying on corporation tax.",
  },
  {
    q: "Can I just do the bookkeeping myself?",
    a: "While you legally can, UK tax laws and HMRC requirements are complex. Incorrectly categorising expenses or failing to reconcile accounts properly can lead to inaccurate tax returns, HMRC investigations, and fines. Using a professional saves you time and risk.",
  },
  {
    q: "What software do you use for bookkeeping?",
    a: "We predominantly use industry-leading cloud accounting software such as Xero and QuickBooks. These platforms allow for secure bank feeds, automated receipt tracking, and real-time financial visibility for your business.",
  },
  {
    q: "Do I need to send you physical receipts?",
    a: "No, our entire process is digital. You can simply upload photos or digital copies of your receipts and invoices through our secure portal or via apps like Dext, which integrate directly with our accounting software.",
  },
  {
    q: "How often will my accounts be updated?",
    a: "Our standard bookkeeping packages include monthly reconciliation. This means your accounts are updated and balanced every month, giving you a clear, up-to-date picture of your company’s financial health.",
  },
  {
    q: "Is bookkeeping the same as filing Annual Accounts?",
    a: "No. Bookkeeping is the day-to-day recording and categorising of financial transactions. Annual Accounts (or Statutory Accounts) are the official year-end financial statements prepared from the bookkeeping data and submitted to Companies House and HMRC.",
  },
  {
    q: "How do you get access to my bank transactions?",
    a: "We set up secure, read-only bank feeds directly into the accounting software (like Xero). This allows us to see transactions and reconcile them without having any access to move or manage your actual funds.",
  },
  {
    q: "What happens if I have multiple currencies?",
    a: "We are experienced in handling multi-currency transactions, which is common for e-commerce and international freelancers. We ensure exchange gains and losses are accurately recorded according to UK accounting standards.",
  },
  {
    q: "Can you help if my accounts are currently in a mess?",
    a: "Absolutely. We offer catch-up and clean-up bookkeeping services. We will review your historical data, correct any miscategorisations, and bring your accounts fully up to date and compliant.",
  },
  {
    q: "How is the £75/month fee calculated?",
    a: "The 'From £75/month' fee is our starting rate for standard, low-volume transaction businesses (e.g., simple freelancers or contractors). The final fee depends on your average monthly transaction volume and complexity.",
  },
  {
    q: "Does this include VAT return preparation?",
    a: "If your company is VAT registered, we can seamlessly integrate VAT return preparation and MTD (Making Tax Digital) compliant submissions to HMRC into your monthly bookkeeping package for an additional adjusted fee.",
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
  serviceType: "UK Bookkeeping Services",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Professional UK Bookkeeping for Limited Companies",
  description:
    "Expert monthly bookkeeping services for UK LTDs. Cloud software setup, monthly reconciliations, and financial reporting to ensure HMRC compliance.",
  areaServed: "United Kingdom",
  url: "https://[yourdomain.com]/uk-services/bookkeeping",
  offers: {
    "@type": "Offer",
    price: "75.00",
    priceCurrency: "GBP",
    description: "Monthly bookkeeping starting fee.",
  },
};

export const Route = createFileRoute("/uk-services/bookkeeping")({
  head: () => ({
    meta: [
      { title: "UK Bookkeeping Services | Xero & QuickBooks | ADVAQ" },
      {
        name: "description",
        content:
          "Professional UK bookkeeping services starting from £75/month. Monthly reconciliation, expense tracking, and HMRC compliance for your UK Limited Company.",
      },
      {
        name: "keywords",
        content:
          "uk bookkeeping service, monthly bookkeeping uk ltd, xero bookkeeping pakistani founders, quickbooks uk setup, hmrc compliance bookkeeping",
      },
      {
        property: "og:title",
        content: "UK Bookkeeping Services | Xero & QuickBooks | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional UK bookkeeping services. Monthly reconciliation, expense tracking, and HMRC compliance for your UK Limited Company.",
      },
      { property: "og:url", content: "/uk-services/bookkeeping" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/bookkeeping" }],
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
            📊 UK ACCOUNTING & COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Professional UK Bookkeeping
            <br />
            for Limited Companies
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Keep your finances flawless and HMRC-compliant. We handle your monthly reconciliations, expense categorisation, and financial reporting using industry-leading cloud software.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Get a Custom Quote
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
              <Check size={16} className="text-gold-500" /> Xero & QuickBooks Experts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Monthly Reconciliations
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Multi-Currency Handling
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Digital Receipt Management
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
                What is UK Bookkeeping?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Bookkeeping is the foundational process of recording and managing all financial transactions for your UK Limited Company. Under UK law, directors are legally responsible for keeping accurate financial records.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Our professional bookkeeping service ensures every invoice, receipt, and bank transaction is perfectly categorised. We transform raw bank data into clear financial insights, ensuring your company remains compliant, tax-efficient, and prepared for year-end reporting.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Outsource It?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Save Hours of Time:</strong> Focus on scaling your business, not matching receipts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Ensure HMRC Compliance:</strong> Avoid costly errors in categorisation and tax deductions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Clear Financial Visibility:</strong> Know exactly how profitable your business is every month.</span>
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
            The Cost of Poor Record Keeping
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Neglecting your company's bookkeeping isn't just disorganised—it's a legal and financial risk.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  HMRC Investigations
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Inaccurate or missing financial records can trigger HMRC audits. If discrepancies are found, you can face severe penalties, back-taxes, and intense ongoing scrutiny.
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
                  Overpaying Corporation Tax
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you fail to properly log and categorise allowable business expenses, your recorded profit will be artificially high, leading you to pay more Corporation Tax than necessary.
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
                  Year-End Chaos
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Scrambling to reconcile 12 months of transactions right before your Annual Accounts deadline leads to rushed filings, missed deductions, and high emergency accountant fees.
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
      title: "Cloud Software Setup",
      desc: "Integration with industry-standard platforms like Xero or QuickBooks for seamless, real-time financial tracking.",
      icon: <FileSpreadsheet className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "Bank Reconciliation",
      desc: "Monthly matching of your bank feeds and merchant accounts (Stripe, PayPal) to ensure every penny is accounted for.",
      icon: <CheckCircle className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "Expense Categorisation",
      desc: "Accurate allocation of business expenses to maximise your allowable deductions and reduce corporation tax liability.",
      icon: <Calculator className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "Digital Receipt Management",
      desc: "Simple upload and tracking of digital receipts using tools like Dext, ensuring you are audit-ready without paper clutter.",
      icon: <FileText className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "Multi-Currency Handling",
      desc: "Expert management of USD, EUR, and GBP transactions, correctly accounting for exchange rate variances.",
      icon: <Target className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "Monthly Financial Reporting",
      desc: "Clear Profit & Loss and Balance Sheet reports delivered monthly so you always know your exact financial position.",
      icon: <PieChart className="text-gold-500 mb-4" size={24} />
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Bookkeeping Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A fully managed, end-to-end digital bookkeeping service.
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
            Monthly Retainer
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Starting From
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">MONTHLY BOOKKEEPING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£75</span>
              <span className="text-sm text-gray-500">/ month</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Pricing scales based on monthly transaction volume, complexity, and VAT registration status. Contact us for an exact quote.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Dedicated account manager</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Monthly bank and merchant reconciliation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Expense tracking and categorisation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Monthly Profit & Loss reports</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Request a Custom Quote
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
      title: "Discovery & Quote",
      desc: "We review your business model, transaction volume, and current accounting setup to provide a fixed monthly quote.",
    },
    {
      title: "Software Setup",
      desc: "We integrate your business with Xero/QuickBooks and establish secure bank feeds and receipt capture apps.",
    },
    {
      title: "Data Handover",
      desc: "You simply upload your digital receipts/invoices throughout the month using our provided tools.",
    },
    {
      title: "Monthly Reconciliation",
      desc: "Our team categorises all transactions, matches them against receipts, and balances your accounts at month-end.",
    },
    {
      title: "Reporting",
      desc: "Receive clear, concise financial reports detailing your profit, loss, and tax liabilities for the period.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Manage Your Accounts
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A seamless, hands-off approach to financial management.
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
          <SectionLabel center>TECH STACK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Powered by Cloud Accounting
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            We use industry-leading software to keep your finances secure, accurate, and accessible 24/7.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <LineChart className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Xero</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Beautiful accounting software perfect for small businesses. Seamless bank feeds, powerful reporting, and intuitive dashboards.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <BarChart4 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">QuickBooks</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Robust financial tracking and deep integration capabilities. Excellent for handling complex multi-currency e-commerce setups.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileText className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Dext / Hubdoc</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Automated receipt data extraction. Simply snap a photo or forward an email, and the data is seamlessly synced to your accounting ledger.
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
      title: "Annual Accounts",
      path: "/uk-services/annual-accounts",
      desc: "Full year-end corporate filing for Companies House and HMRC compliance, generated from your bookkeeping data.",
    },
    {
      title: "Director Payroll",
      path: "/uk-services/director-payroll",
      desc: "Tax-efficient monthly salary processing and PAYE submissions for company directors.",
    },
    {
      title: "VAT Registration & Returns",
      path: "/uk-services/vat-registration",
      desc: "Setup your UK VAT registration and manage ongoing MTD-compliant VAT returns.",
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
            READY TO ORGANISE YOUR FINANCES?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Stop Stressing Over Receipts.
            <br />
            Let Us Handle the Books.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your business is fully compliant and highly tax-efficient with our professional monthly bookkeeping services tailored for UK limited companies.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get a Custom Quote →
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
export default function BookkeepingService() {
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
