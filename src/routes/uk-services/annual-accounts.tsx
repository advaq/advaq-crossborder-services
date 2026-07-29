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
  Calendar,
  AlertTriangle,
  FileBox,
  Scale,
  Receipt,
  PiggyBank,
  Briefcase
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What are UK Annual Accounts?",
    a: "Annual Accounts (also known as Statutory Accounts) are a financial summary of your company's performance over the financial year. They must be prepared according to UK accounting standards and filed with both Companies House and HM Revenue & Customs (HMRC).",
  },
  {
    q: "When is the deadline to file Annual Accounts?",
    a: "For your first year, accounts are usually due 21 months after the date you registered your company. For subsequent years, they must be filed within 9 months of your company's financial year-end.",
  },
  {
    q: "My UK LTD didn't do any business. Do I still need to file?",
    a: "Yes. Even if your company had no transactions and is considered 'dormant', you are still legally required to file Dormant Accounts with Companies House. Failing to file will result in late filing penalties and potential company strike-off.",
  },
  {
    q: "What happens if I miss the filing deadline?",
    a: "Companies House enforces strict late filing penalties starting at £150 for being one day late, increasing up to £1,500 if over 6 months late. Furthermore, repeated late filing doubles the penalties, and the company can be forcibly struck off the register.",
  },
  {
    q: "What is the difference between Annual Accounts and a Confirmation Statement?",
    a: "A Confirmation Statement simply updates Companies House on your company's management structure (directors, address, shareholders). Annual Accounts are purely financial, detailing your income, expenses, assets, and liabilities.",
  },
  {
    q: "Do you file my accounts with both HMRC and Companies House?",
    a: "Yes. Our Annual Accounts service ensures that your statutory accounts are prepared in the correct iXBRL format and submitted simultaneously to both Companies House and HMRC, fulfilling all your corporate reporting obligations.",
  },
  {
    q: "What documents do I need to provide for you to prepare my accounts?",
    a: "We need your business bank statements (e.g., from Wise, Payoneer, or Tide), sales invoices, purchase receipts, and details of any business expenses for the financial year. We will provide a simple checklist to help you gather this.",
  },
  {
    q: "Does this fee include my personal Self-Assessment tax return?",
    a: "No. Annual Accounts relate solely to the Limited Company. If you withdrew money as dividends, you may also need a personal Self-Assessment tax return, which is a separate service we also provide.",
  },
  {
    q: "What are Micro-Entity Accounts?",
    a: "Most newly formed UK companies by Pakistani entrepreneurs qualify as 'Micro-Entities'. This means they can submit simpler, shorter accounts to Companies House, keeping less financial information on the public record. We prepare micro-entity accounts by default if you qualify.",
  },
  {
    q: "How long does it take for you to prepare the accounts?",
    a: "Once we receive all your bank statements and expense records, we typically draft the accounts within 5 to 7 working days. After your approval, we file them immediately with Companies House and HMRC.",
  },
  {
    q: "Can I claim my software subscriptions and home office as expenses?",
    a: "Yes. Legitimate business expenses such as AWS, Shopify, Upwork fees, marketing spend, and proportional home office costs can be deducted from your revenue. We ensure all allowable expenses are captured to minimize your tax liability.",
  },
  {
    q: "Will my financial details be publicly visible?",
    a: "For small and micro-entities, we file 'abbreviated' or 'filleted' accounts to Companies House. This means your full profit and loss statement is kept private from the public registry, while full accounts are only sent securely to HMRC.",
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
  serviceType: "UK Annual Accounts Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK Annual Accounts Preparation & Filing",
  description:
    "Professional preparation and filing of statutory Annual Accounts for UK Limited Companies. Fully compliant iXBRL submissions to Companies House and HMRC.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uk-services/annual-accounts",
  offers: {
    "@type": "Offer",
    price: "199.00",
    priceCurrency: "GBP",
    description: "Annual Accounts preparation and filing starting from £199.",
  },
};

export const Route = createFileRoute("/uk-services/annual-accounts")({
  head: () => ({
    meta: [
      { title: "UK Annual Accounts Filing | ADVAQ" },
      {
        name: "description",
        content:
          "Avoid severe late filing penalties. We prepare and file your UK Limited Company's Statutory Annual Accounts with Companies House and HMRC accurately and on time.",
      },
      {
        name: "keywords",
        content:
          "uk annual accounts filing, statutory accounts uk ltd, companies house accounts filing, hmrc annual accounts, dormant accounts filing, micro entity accounts uk",
      },
      {
        property: "og:title",
        content: "UK Annual Accounts Filing | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional Annual Accounts preparation and filing for your UK LTD. Stay compliant with Companies House and HMRC.",
      },
      { property: "og:url", content: "/uk-services/annual-accounts" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/annual-accounts" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: AnnualAccounts,
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
            📊 CORPORATE COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UK Annual Accounts
            <br />
            Filing & Preparation
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Avoid severe Companies House penalties and HMRC fines. We professionally draft, format (in iXBRL), and submit your company's statutory financial accounts on time, ensuring total legal compliance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File My Accounts
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Consult an Expert
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Companies House & HMRC Filing
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> iXBRL Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Micro-Entity Format
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Penalty Prevention
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
              <SectionLabel>THE REQUIREMENT</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What are Statutory Annual Accounts?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Every single registered UK Limited Company — whether actively trading, making a loss, or entirely dormant — is legally obligated to prepare and submit Annual Accounts to Companies House and HMRC at the end of its financial year.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                These accounts must conform to specific UK accounting standards (GAAP). They summarize your company's financial activity, including your profit and loss, balance sheet, and director notes. For most small international businesses, we file "Micro-Entity Accounts" which keeps your detailed financial turnover off the public registry while fully satisfying government requirements.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Professional Filing?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Strict iXBRL Format:</strong> Accounts must be coded in specialized digital tagging formats; PDFs are not accepted.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Expense Optimization:</strong> We correctly categorize allowable expenses to legally reduce your corporate tax burden.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Dual Submission:</strong> We handle the complex syncing of filings between both Companies House and HMRC platforms.</span>
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
            The Cost of Missing Your Deadline
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Companies House operates a strict, automatic penalty system for late accounts. No excuses are accepted.
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
                  Automatic Escalating Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Penalties hit instantly. £150 for being one day late, £375 for 1 month, £750 for 3 months, and £1,500 for over 6 months. These double if you are late two years in a row.
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
                  Company Strike-Off Action
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If accounts remain unfiled, Companies House will initiate compulsory strike-off action. Your company will be dissolved, and any funds in its bank accounts will be seized by the Crown.
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
                  Frozen Corporate Banking
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Institutions like Wise, Payoneer, and Stripe actively monitor the public registry. A notice of impending strike-off due to late accounts immediately results in frozen merchant accounts.
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
      title: "Full Financial Reconciliation",
      desc: "We balance your bank statements against your invoices and receipts to ensure every penny is accounted for accurately.",
    },
    {
      title: "Profit & Loss Preparation",
      desc: "Drafting of your comprehensive Income Statement detailing your revenue, allowable expenses, and net profit.",
    },
    {
      title: "Balance Sheet Creation",
      desc: "Preparation of your company's statement of financial position, showing corporate assets, liabilities, and equity.",
    },
    {
      title: "Companies House iXBRL Filing",
      desc: "Conversion of your accounts into the mandatory digital iXBRL format and secure transmission to the registry.",
    },
    {
      title: "HMRC Joint Submission",
      desc: "Simultaneous filing of your full accounts to HM Revenue & Customs as part of your Corporation Tax obligations.",
    },
    {
      title: "Dormant Accounts (If Applicable)",
      desc: "If you didn't trade, we will legally file AA02 Dormant Accounts to keep your company alive and penalty-free.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR SERVICE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Comprehensive Accounts Preparation
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the numbers from end-to-end, guaranteeing precision and legal compliance.
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
            Professional Filing Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Fixed Fee
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ANNUAL ACCOUNTS FILING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-2xl text-navy-900 font-serif mr-2">From</span>
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£199</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Pricing based on transaction volume (micro-entities). Dormant company filing available at a reduced rate.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Complete bookkeeping and reconciliation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>iXBRL formatting and document prep</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Companies House direct submission</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>HMRC dual-submission handled</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Filing
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
      title: "Data Collection",
      desc: "Upload your bank statements (CSV/PDF), invoices, and expense receipts via our secure client portal.",
    },
    {
      title: "Reconciliation",
      desc: "Our accountants categorize your transactions, map allowable expenses, and balance the ledgers.",
    },
    {
      title: "Draft Preparation",
      desc: "We generate the draft Profit & Loss and Balance Sheet and send it to you for review and approval.",
    },
    {
      title: "iXBRL Tagging",
      desc: "The approved accounts are converted into the strict digital code format required by UK government systems.",
    },
    {
      title: "Submission",
      desc: "Final accounts are securely transmitted to both Companies House and HMRC, securing your compliance.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How The Filing Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A seamless, guided process ensuring zero errors.
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

/* ---------- SECTION 7: CRITICAL METRICS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>IMPORTANT DETAILS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Key Accounting Fundamentals
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            What you need to know about your company's financial timeline.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Calendar className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">The 9-Month Rule</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Your annual accounts must be filed exactly 9 months after your financial year ends. E.g., If your year ends on 31 March, your deadline is 31 December. Missing this triggers immediate fines.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Public Privacy</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                By filing Micro-Entity (filleted) accounts, we ensure your detailed revenue and gross profit are not published on the public Companies House register, protecting your business privacy.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <FileBox className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Record Keeping</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                HMRC requires you to retain all digital business records (invoices, receipts, bank statements) for at least 6 years. Good bookkeeping throughout the year reduces end-of-year accounting fees.
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
      title: "Corporation Tax Return",
      path: "/uk-services/corporation-tax-return",
      desc: "Mandatory filing of the CT600 form with HMRC, calculated alongside your accounts.",
    },
    {
      title: "Confirmation Statement",
      path: "/uk-services/confirmation-statement",
      desc: "The annual administrative filing to confirm your company details are up to date.",
    },
    {
      title: "UK LTD Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a new UK Limited Company remotely with a premium London address.",
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
            DON'T RISK PENALTIES
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Is Your Deadline Approaching?
            <br />
            Let Us Handle The Paperwork.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your company from strike-off and steep government fines. Our expert team ensures your Annual Accounts are filed flawlessly and on time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Filing Now →
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
            Guaranteed compliance · Expert accountants · Secure filing portal
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function AnnualAccounts() {
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
