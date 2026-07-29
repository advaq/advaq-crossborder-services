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
  AlertTriangle,
  Scale,
  Calculator,
  PoundSterling,
  Receipt,
  PiggyBank
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a UK Corporation Tax Return (CT600)?",
    a: "The CT600 is an official tax return form filed with HM Revenue & Customs (HMRC). It details your company's income, allowable expenses, and calculates the exact amount of Corporation Tax you owe on your net profits.",
  },
  {
    q: "When is the deadline to file the CT600?",
    a: "The CT600 form must be filed within 12 months after the end of your company's accounting period. However, any Corporation Tax you owe must be paid earlier—usually 9 months and 1 day after your accounting period ends.",
  },
  {
    q: "What is the current UK Corporation Tax rate?",
    a: "Currently, the 'Small Profits Rate' is 19% for companies with taxable profits under £50,000. If your profits exceed this threshold, the rate marginally increases up to 25%. We calculate the exact rate applicable to your net profit.",
  },
  {
    q: "Do I have to file a tax return if my company made no profit?",
    a: "Yes. Even if your company operated at a loss or had zero income, you are still legally required to file a nil or loss-making CT600 return with HMRC, unless HMRC has officially classified your company as dormant.",
  },
  {
    q: "What happens if I file the return late?",
    a: "HMRC imposes strict late filing penalties starting at £100 for being a day late. This increases by another £100 after 3 months. After 6 months, HMRC will estimate your tax bill and add a 10% penalty on top of that unpaid tax.",
  },
  {
    q: "How do I pay my Corporation Tax from Pakistan?",
    a: "Once we file your return, HMRC issues a payment reference number. You can pay your tax bill directly to HMRC via bank transfer using your digital corporate bank account (like Wise, Payoneer, or Airwallex).",
  },
  {
    q: "What expenses can I deduct to reduce my tax bill?",
    a: "You can deduct all costs incurred 'wholly and exclusively' for your business. Common deductions include server costs (AWS, DigitalOcean), software subscriptions, freelancer fees, payment gateway fees, and professional accountancy fees.",
  },
  {
    q: "Can I claim director salaries as an expense?",
    a: "Yes, a director's salary is a deductible business expense. However, if you are a non-UK resident living in Pakistan, different tax rules apply regarding UK payroll (PAYE) versus dividend withdrawals. We advise you on the most tax-efficient structure.",
  },
  {
    q: "Is the CT600 the same as Annual Accounts?",
    a: "No. Annual Accounts are filed to Companies House (and HMRC) to show the company's financial position. The CT600 is specifically the tax calculation form sent exclusively to HMRC based on those accounts. We offer a combined service if needed.",
  },
  {
    q: "What documents do you need from me?",
    a: "If we already prepared your Annual Accounts, we have everything we need. If not, we will need your finalised statutory accounts, a detailed trial balance, and a breakdown of your business expenses to calculate your tax liability accurately.",
  },
  {
    q: "Do I need to sign the CT600 physically?",
    a: "No. The entire process is digital. We prepare the return, send you a digital copy for approval, and then securely transmit it to HMRC using our certified agent software.",
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
  serviceType: "UK Corporation Tax Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK Corporation Tax Return (CT600) Filing",
  description:
    "Professional preparation and submission of the CT600 Corporation Tax Return to HMRC. Maximize allowable deductions and ensure accurate tax calculations.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uk-services/corporation-tax-return",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "GBP",
    description: "Corporation Tax Return filing from £149.",
  },
};

export const Route = createFileRoute("/uk-services/corporation-tax-return")({
  head: () => ({
    meta: [
      { title: "UK Corporation Tax Return (CT600) Filing | ADVAQ" },
      {
        name: "description",
        content:
          "Accurate preparation and submission of your UK Company's CT600 to HMRC. We help maximize allowable deductions and prevent late tax penalties.",
      },
      {
        name: "keywords",
        content:
          "ct600 filing, uk corporation tax return, hmrc company tax, file ct600 online, uk corporate tax pakistani, hmrc penalties",
      },
      {
        property: "og:title",
        content: "UK Corporation Tax Return (CT600) Filing | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Expert preparation and electronic filing of your CT600 tax return to HMRC. Maximize your allowable business expenses.",
      },
      { property: "og:url", content: "/uk-services/corporation-tax-return" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/corporation-tax-return" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: CorporationTaxReturn,
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
            💷 HMRC TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Corporation Tax Return
            <br />
            (CT600) Filing
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Accurately declare your company's profits to HM Revenue & Customs. We expertly prepare your CT600 form, maximize your allowable expense deductions, and file securely to keep you 100% compliant.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File CT600 — £149
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Tax Consultation
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> HMRC Approved Software
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Expense Optimization
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Prevents HMRC Fines
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Precise iXBRL Formatting
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
                What is the CT600 Return?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Every active UK Limited Company must pay Corporation Tax on its taxable profits. To do this, you are legally required to file a Company Tax Return (known as form CT600) directly with HM Revenue & Customs (HMRC) once a year.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                The CT600 contains complex calculations based on your Annual Accounts. It factors in your gross income, subtracts allowable business expenses and capital allowances, and calculates the exact percentage of tax you owe to the UK government. Submitting this accurately is vital for avoiding tax investigations.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Use Professionals?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Deduction Maximisation:</strong> We ensure every legal business expense is claimed, lowering your final tax bill.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">HMRC Formats:</strong> HMRC rejects standard PDFs. Tax returns must be coded in iXBRL format via recognized agent software.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Penalty Avoidance:</strong> Getting the calculation wrong can lead to severe fines or a full HMRC audit into your accounts.</span>
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
            The Cost of HMRC Non-Compliance
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            HMRC is strict. Missing filing deadlines or under-declaring tax results in severe punitive actions.
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
                  Automatic Late Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Failing to file your CT600 by the deadline incurs an immediate £100 fine, which increases over time. After 6 months, HMRC will estimate your tax and add a 10% penalty on top.
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
                  Late Payment Interest
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If the CT600 is not filed, you cannot accurately pay your tax bill on time. HMRC charges daily compound interest on any late Corporation Tax payments, rapidly increasing your debt.
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
                  HMRC Investigations
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Submitting inaccurate returns, over-claiming expenses, or failing to file can trigger an in-depth HMRC tax investigation into both the company and your personal finances.
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
      title: "Tax Calculation",
      desc: "Precise calculation of your Corporation Tax liability based on the latest UK tax bands and your company's net profits.",
    },
    {
      title: "Expense Deduction Check",
      desc: "We review your expenditure to ensure you are legally claiming all allowable expenses to minimize your tax bill.",
    },
    {
      title: "Capital Allowances",
      desc: "Applying complex rules to write off the costs of business assets (like laptops or servers) against your taxable income.",
    },
    {
      title: "iXBRL Conversion",
      desc: "Formatting the return into the strict digital language required by HMRC's mainframe for immediate processing.",
    },
    {
      title: "Direct HMRC Submission",
      desc: "Electronic filing directly to the HMRC portal using our verified agent software.",
    },
    {
      title: "Payment Guidance",
      desc: "Providing you with the exact PRN (Payment Reference Number) and instructions to pay your tax directly from your corporate account.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR SERVICE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            End-to-End Tax Management
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the complexities of the UK tax code to deliver accurate, compliant filings.
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
            <p className="text-xs text-gray-500 uppercase tracking-widest">CT600 PREPARATION & FILING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£149</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Requires finalised Annual Accounts. If you need both Accounts and Tax filed together, contact us for a package rate.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Thorough review of allowable expenses</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Accurate Corporation Tax calculation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation of form CT600</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Secure electronic submission to HMRC</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — £149
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
      desc: "Provide us with your finalized Annual Accounts and a breakdown of your business activities for the year.",
    },
    {
      title: "Tax Review",
      desc: "We analyze your figures to identify tax reliefs, capital allowances, and maximize legal deductions.",
    },
    {
      title: "CT600 Drafting",
      desc: "We generate the draft CT600 tax return and tax computation document for your review.",
    },
    {
      title: "Client Approval",
      desc: "You review the final tax liability and sign off on the return electronically.",
    },
    {
      title: "HMRC Filing",
      desc: "We submit the iXBRL-formatted return directly to HMRC and send you the payment instructions.",
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
            A precise, accountant-led procedure to finalize your tax.
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

/* ---------- SECTION 7: TAX STRATEGY ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>TAX EFFICIENCY</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Why Precision Matters
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Strategic filing ensures you only pay what you legally owe.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Receipt className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Claiming Expenses</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Every software subscription, server hosting fee, and freelancer invoice from Pakistan reduces your UK corporate tax bill. We ensure these are fully and properly declared.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <PoundSterling className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">The 9-Month Trap</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                While you have 12 months to file the form, the actual tax payment is due 9 months and 1 day after your year-end. Filing early prevents surprise bills and late payment interest.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">HMRC Defense</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Submitting a professionally prepared CT600 drastically reduces the chance of an HMRC audit. Our software flags potential inconsistencies before submission.
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
      desc: "Mandatory financial statements that must be prepared before you can file the CT600.",
    },
    {
      title: "Confirmation Statement",
      path: "/uk-services/confirmation-statement",
      desc: "The annual administrative filing to keep your company's data accurate on the public register.",
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
            HMRC COMPLIANCE
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Is Your Tax Deadline Due?
            <br />
            Let's File Your CT600.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Don't risk HMRC penalties or miss out on allowable expense deductions. Let our professionals calculate and submit your Corporation Tax accurately.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Your Return →
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
            Maximise deductions · Avoid HMRC penalties · Secure filing
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function CorporationTaxReturn() {
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
