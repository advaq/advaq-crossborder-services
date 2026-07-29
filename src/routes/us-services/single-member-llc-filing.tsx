import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  CheckCircle,
  ChevronDown,
  Shield,
  Clock,
  FileText,
  BadgeAlert,
  Building2,
  Lock,
  Globe,
  CreditCard,
  Coins,
  Calculator,
  Briefcase,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Do I need to file US taxes if my LLC had no revenue?",
    a: "Yes. Even if your Single-Member LLC had zero transactions, zero revenue, or zero profits, you are still legally required by the IRS to file Form 5472 and a pro-forma Form 1120 to report the foreign ownership and any related party transactions (like initial capital contribution).",
  },
  {
    q: "What is Form 5472 and why is it required?",
    a: "Form 5472 is an informational return used to report transactions between a US LLC (treated as a disregarded entity) and its foreign owner. The IRS uses this to prevent tax evasion and track foreign investment in the US. Failing to file it results in a mandatory $25,000 penalty.",
  },
  {
    q: "When is the deadline to file my LLC tax return?",
    a: "For calendar year LLCs (which most are), the filing deadline for Form 1120 and Form 5472 is April 15th of the following year. You can request a 6-month extension by filing Form 7004 before the original deadline.",
  },
  {
    q: "Do I owe US income tax on my LLC earnings?",
    a: "If you are a non-US resident, perform all work outside the US, and have no US physical presence (no employees, offices, or warehouse), your income is typically classified as 'Not Effectively Connected Income' (ETBUS). In this case, you do not owe US federal income tax, but you still must file the informational returns.",
  },
  {
    q: "Can I file Form 5472 electronically?",
    a: "Single-Member LLCs owned by non-US residents cannot e-file Form 1120 and 5472 directly through standard consumer software. These forms must be faxed or mailed to the IRS. We handle the preparation and dedicated IRS fax submission for you.",
  },
  {
    q: "What documents do you need to prepare my tax return?",
    a: "We need your LLC's EIN confirmation letter (CP 575 or 147C), your Articles of Organization, a basic summary of income and expenses (or bank statements), and your personal identification details. We'll provide a simple questionnaire for you to complete.",
  },
  {
    q: "What if I missed the deadline or didn't file for past years?",
    a: "If you missed the deadline, you are exposed to the $25,000 late filing penalty. However, there are IRS penalty abatement procedures and first-time penalty waivers we can apply for. It is critical to get compliant immediately rather than waiting.",
  },
  {
    q: "Does this service include State tax returns?",
    a: "This service covers the federal IRS tax return (Forms 1120 & 5472). If your LLC is registered in a state like Wyoming or Delaware, there is no state income tax return required, though Wyoming requires an annual franchise report which is separate.",
  },
  {
    q: "Do I need an ITIN to file Form 5472?",
    a: "No. You do not need a personal ITIN to file Forms 1120 and 5472 for your Single-Member LLC. We can file these forms using your company's EIN and the foreign owner's foreign tax ID.",
  },
  {
    q: "How long does it take you to prepare the forms?",
    a: "Once we receive your completed questionnaire and documents, our CPAs prepare the draft returns within 3 to 5 business days for your review and signature. Once signed, we immediately submit them to the IRS.",
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
  serviceType: "US Tax Preparation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Single-Member LLC Tax Return Filing (Form 1120 & 5472)",
  description:
    "Expert IRS tax preparation and filing for foreign-owned Single-Member US LLCs. Includes Form 1120, Form 5472 preparation, and IRS submission to avoid the $25,000 penalty.",
  areaServed: "Global",
  url: "https://[yourdomain.com]/us-services/single-member-llc-filing",
  offers: {
    "@type": "Offer",
    price: "199.00",
    priceCurrency: "USD",
    description: "Annual federal tax return preparation and filing fee.",
  },
};

export const Route = createFileRoute("/us-services/single-member-llc-filing")({
  head: () => ({
    meta: [
      { title: "Single-Member LLC Tax Return Filing | Forms 1120 & 5472 | ADVAQ" },
      {
        name: "description",
        content:
          "Expert IRS tax preparation and filing for foreign-owned Single-Member US LLCs. Includes Form 1120, Form 5472 preparation, and IRS fax submission.",
      },
      {
        name: "keywords",
        content:
          "form 5472, form 1120, foreign owned single member llc tax return, us tax filing for non residents, llc tax deadline, irs form 5472 penalty",
      },
      {
        property: "og:title",
        content: "Single-Member LLC Tax Return Filing | Forms 1120 & 5472 | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Expert IRS tax preparation and filing for foreign-owned Single-Member US LLCs. Includes Form 1120, Form 5472 preparation, and IRS fax submission.",
      },
      { property: "og:url", content: "/us-services/single-member-llc-filing" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/single-member-llc-filing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SingleMemberLlcFiling,
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
            Single-Member LLC
            <br />
            Tax Return Filing
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Avoid the catastrophic $25,000 IRS penalty. Expert preparation and filing of Forms 1120 and 5472 for foreign-owned US LLCs. We handle the math, the forms, and the direct IRS submission.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start My Tax Return
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
              <Check size={16} className="text-gold-500" /> Form 1120 Prepared
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Form 5472 Attached
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Direct IRS Submission
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> ETBUS Compliance check
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
                What are Forms 1120 and 5472?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                If you are a non-US resident who owns a Single-Member LLC in the United States, the IRS classifies your company as a "Disregarded Entity" for tax purposes. However, to prevent tax evasion and monitor foreign investments, the IRS imposes a strict informational filing requirement.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                You must file a pro-forma Form 1120 (US Corporation Income Tax Return) with Form 5472 attached. Form 5472 reports "Reportable Transactions" between your LLC and its foreign owner, such as initial investments, distributions, loans, or payments for services. Even if your LLC made zero dollars, this filing is mandatory.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why is this filing crucial?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Zero Revenue Rule:</strong> Even LLCs with no activity MUST file.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Strict Deadlines:</strong> Returns are due by April 15th every year.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">No Online E-File:</strong> Must be specially prepared and faxed/mailed to the IRS.</span>
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
            The Cost of Non-Compliance
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The IRS does not forgive ignorance. Failing to file correctly can destroy your business.
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
                  $25,000 Minimum Penalty
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  The IRS imposes a mandatory $25,000 penalty for failing to file Form 5472 or for filing a substantially incomplete return. This penalty applies to EACH year missed.
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
                  Continuous Monthly Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If the IRS notifies you of a failure to file and you don't correct it within 90 days, an additional $25,000 penalty applies for each 30-day period the failure continues.
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
                  Audit & Account Closures
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Non-compliance flags your LLC in the IRS database, leading to potential audits, closure of your US bank accounts, and bans from services like Stripe and PayPal.
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
      title: "Financial Review",
      desc: "We analyze your LLC's income, expenses, and bank statements to determine all reportable related-party transactions.",
    },
    {
      title: "Pro-Forma 1120 Preparation",
      desc: "We prepare the required US Corporation Income Tax Return covering page 1 identifying details.",
    },
    {
      title: "Form 5472 Completion",
      desc: "Accurate preparation of Form 5472, ensuring all foreign ownership data and monetary transactions are reported flawlessly.",
    },
    {
      title: "ETBUS Classification",
      desc: "We ensure your business is properly classified as having 'no US trade or business' to protect you from federal income tax.",
    },
    {
      title: "IRS Fax Submission",
      desc: "Direct submission of your signed tax package to the dedicated IRS fax line for foreign-owned LLCs.",
    },
    {
      title: "Filing Confirmation",
      desc: "We provide you with a transmission receipt proving the IRS successfully received your tax return on time.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Complete Tax Preparation Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the complexity of US tax law so you can focus on scaling your business.
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
            Simple, Flat-Fee Filing
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Annual Filing
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">SINGLE-MEMBER LLC RETURN</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-2xl text-gray-500">From</span>
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$149</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Price covers standard zero-revenue or straightforward transaction LLCs. High transaction volume may incur additional accounting fees.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation of Form 1120</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation of Form 5472</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Foreign ownership reporting</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Direct IRS fax submission & confirmation</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — $149
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
      desc: "You fill out our simple online questionnaire and upload your LLC documents and bank statements.",
    },
    {
      title: "Accountant Review",
      desc: "Our tax team analyzes your financial data to determine all reportable transactions and ETBUS status.",
    },
    {
      title: "Drafting Forms",
      desc: "We professionally prepare Forms 1120 and 5472 according to the latest IRS regulations.",
    },
    {
      title: "Client Signature",
      desc: "We send you the finalized tax forms for your review and secure digital signature.",
    },
    {
      title: "IRS Submission",
      desc: "We submit the forms directly to the IRS via their dedicated fax line and provide you with the receipt.",
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
            Fast, secure, and hassle-free tax filing.
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
          <SectionLabel center>COMPLIANCE PROTOCOLS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Key IRS Requirements
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Understanding the boundaries of foreign LLC ownership.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileText className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Related Party Transactions</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Every exchange of money between the LLC and you (the owner) must be reported. This includes initial deposits, software payments you made for the LLC, and withdrawals to your local bank.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Physical Presence Test</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                To maintain tax-free status, you must ensure you have no Dependent Agents, US-based employees, or dedicated offices in the US. We verify this structure during preparation.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Clock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Filing Deadlines</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                The deadline is typically April 15. If you cannot meet this, we must file Form 7004 before the deadline to grant a 6-month extension to October 15, avoiding the $25,000 fine.
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
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Start a new tax-free US entity completely remotely from anywhere in the world.",
    },
    {
      title: "Partnership Tax Return (Form 1065)",
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
            DON'T RISK IRS PENALTIES
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            File Your 1120 & 5472 Today.
            <br />
            Stay 100% Compliant.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            The IRS deadline is approaching. Ensure your Single-Member LLC is accurately reported to prevent the devastating $25,000 failure-to-file penalty.
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
            Professional Preparation · Secure IRS Fax Submission · Complete Peace of Mind
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function SingleMemberLlcFiling() {
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
