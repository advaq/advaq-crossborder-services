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
  Wallet,
  Landmark,
  FileCheck,
  PiggyBank,
  TrendingUp,
  Receipt
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Director Payroll or PAYE scheme?",
    a: "PAYE (Pay As You Earn) is HMRC's system to collect Income Tax and National Insurance from employment. Even as a sole director of your own UK Limited Company, you are technically an employee. Running a payroll allows you to pay yourself a formal, legal salary.",
  },
  {
    q: "Why should I take a salary instead of just dividends?",
    a: "Paying yourself a small, tax-efficient salary (up to the National Insurance threshold) counts as a deductible business expense, reducing your company's Corporation Tax. It also gives you a qualifying year towards a UK State Pension (if eligible) without actually paying any Income Tax or National Insurance.",
  },
  {
    q: "Do I have to live in the UK to run a payroll?",
    a: "No. Non-resident directors can still be paid a salary for their duties managing a UK company. However, the tax implications (whether you pay tax in the UK or your home country) depend on your residency status and dual taxation treaties. We advise on the most compliant approach.",
  },
  {
    q: "What happens if I just transfer money from the company to my personal account?",
    a: "Unreported transfers are classified as a 'Director's Loan' by HMRC. If not repaid, they are subject to a hefty tax charge (currently 33.75%). All money extracted for personal use must be officially declared as salary (via PAYE) or dividends (via company resolutions).",
  },
  {
    q: "What is RTI (Real Time Information)?",
    a: "RTI is HMRC's mandatory reporting system. It requires employers to report payroll information, including salaries, taxes, and deductions, to HMRC on or before the day employees are paid. Our service handles these RTI submissions automatically every month.",
  },
  {
    q: "I only want to be paid once a year. Do I still need monthly payroll?",
    a: "We can set up an annual payroll scheme if you prefer to take your salary in one lump sum at the end of the tax year. However, monthly payroll is generally recommended to provide a steady, documented income stream, which helps with personal finance applications.",
  },
  {
    q: "Does this service cover my other employees?",
    a: "The £49/month fee is specifically for a single-director payroll setup. If you hire additional staff (UK or international), we can scale your payroll scheme to include them for a small additional fee per employee.",
  },
  {
    q: "Will you provide official payslips?",
    a: "Yes. Every month you will receive a formal, HMRC-compliant digital payslip detailing your gross pay, deductions (if any), and net pay. These payslips are vital proof of income for visas, mortgages, or personal banking.",
  },
  {
    q: "What is a P60?",
    a: "A P60 is a certificate issued at the end of the tax year (April) summarizing your total pay and deductions for that year. It is a critical document for proving your annual income. Generation of your P60 is included in our service.",
  },
  {
    q: "What if I miss a payroll run?",
    a: "Missing an RTI submission deadline to HMRC results in automatic late filing penalties, which accumulate quickly. By letting us manage your payroll, you ensure submissions are made strictly on time, avoiding all fines.",
  },
  {
    q: "How long does it take to set up a PAYE scheme?",
    a: "Registering a new PAYE scheme with HMRC typically takes 1 to 2 weeks. Once you receive your Employer PAYE Reference and Accounts Office Reference, we can immediately begin processing your monthly payroll.",
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
  serviceType: "UK Payroll Services",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK Director Payroll & PAYE Setup",
  description:
    "Tax-efficient monthly payroll processing for UK Limited Company directors. Includes HMRC PAYE registration, RTI submissions, and monthly payslips.",
  areaServed: "United Kingdom",
  url: "https://[yourdomain.com]/uk-services/director-payroll",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "GBP",
    description: "Monthly director payroll fee.",
  },
};

export const Route = createFileRoute("/uk-services/director-payroll")({
  head: () => ({
    meta: [
      { title: "UK Director Payroll Services | PAYE Setup | ADVAQ" },
      {
        name: "description",
        content:
          "Tax-efficient monthly payroll processing for UK Limited Company directors. HMRC PAYE registration, RTI submissions, and digital payslips for just £49/month.",
      },
      {
        name: "keywords",
        content:
          "uk director payroll, paye registration hmrc, tax efficient director salary uk, rti submissions uk, monthly payslips director, uk company payroll pakistani resident",
      },
      {
        property: "og:title",
        content: "UK Director Payroll Services | PAYE Setup | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Tax-efficient monthly payroll processing for UK Limited Company directors. HMRC PAYE registration, RTI submissions, and digital payslips.",
      },
      { property: "og:url", content: "/uk-services/director-payroll" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/director-payroll" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: DirectorPayroll,
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
            💷 UK SALARY & COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UK Director Payroll
            <br />
            & PAYE Management
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Extract funds legally and tax-efficiently from your UK Limited Company. We handle your HMRC PAYE registration, monthly RTI submissions, and provide official digital payslips.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Set Up My Payroll
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
              <Check size={16} className="text-gold-500" /> HMRC PAYE Registration
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Official Monthly Payslips
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Automated RTI Submissions
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Tax-Efficient Salary Structuring
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
                What is a Director Payroll?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Even as the founder and sole director of your UK Limited Company, any money you take out for personal use must be officially categorized. You cannot simply transfer company funds into your personal account.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Setting up a PAYE (Pay As You Earn) scheme allows you to pay yourself a formal salary. It provides legally recognized proof of income, reduces your company's Corporation Tax burden, and ensures total compliance with HMRC's strict extraction rules.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Run a Payroll?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Tax Efficiency:</strong> A small salary is a deductible business expense, lowering Corporation Tax.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Proof of Income:</strong> Formal payslips are vital for mortgages, visas, and banking.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Legal Extraction:</strong> Avoid harsh tax penalties from illegal "Director's Loans."</span>
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
            The Danger of Unreported Income
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Withdrawing funds without the proper HMRC mechanisms in place will result in severe financial consequences.
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
                  The Section 455 Tax Trap
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you take money out without declaring it as salary or dividends, HMRC classifies it as a Director's Loan. If unpaid within 9 months of your year-end, a heavy 33.75% tax penalty is applied to the balance.
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
                  Missed RTI Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you are registered for PAYE but fail to submit your Real Time Information (RTI) reports to HMRC on or before payday, you will incur automatic monthly fines starting at £100.
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
                  Higher Corporation Tax
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  By only extracting funds via dividends (which are drawn from post-tax profits), you miss out on the Corporation Tax deduction that a structured director's salary provides.
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
      title: "HMRC PAYE Registration",
      desc: "Complete setup of your Employer PAYE scheme directly with HM Revenue & Customs.",
      icon: <Landmark className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "Monthly Payslips",
      desc: "Generation of professional, legal digital payslips (PDF) detailing gross pay, net pay, and NI contributions.",
      icon: <FileCheck className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "RTI Submissions",
      desc: "Automated electronic filing of your Real Time Information reports to HMRC every single month on schedule.",
      icon: <Receipt className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "Tax Optimization Strategy",
      desc: "Calculating the optimal mix of salary and dividends to keep you below tax thresholds while maximizing income.",
      icon: <TrendingUp className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "Year-End P60 Generation",
      desc: "Provision of your official P60 certificate at the end of the tax year, summarizing your total earnings.",
      icon: <Wallet className="text-gold-500 mb-4" size={24} />
    },
    {
      title: "HMRC Liaison",
      desc: "We act as your payroll agent, dealing with HMRC directly regarding any PAYE queries or coding notices.",
      icon: <PiggyBank className="text-gold-500 mb-4" size={24} />
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Payroll Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Everything you need to legally extract funds from your business.
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
            Fixed Monthly Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Single Director
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">PAYROLL & COMPLIANCE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£49</span>
              <span className="text-sm text-gray-500">/ month</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Fixed fee for a single-director payroll setup. Additional employees can be added for a small supplementary fee.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>HMRC PAYE Registration included</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Monthly Payslip generation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Guaranteed on-time RTI submissions</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Annual P60 & P32 reporting</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Payroll Service
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
      title: "Data Gathering",
      desc: "We collect your basic company and personal details required to act as your payroll agent.",
    },
    {
      title: "HMRC Registration",
      desc: "We apply to HMRC to open a new Employer PAYE scheme, awaiting your official reference numbers.",
    },
    {
      title: "Salary Strategy",
      desc: "We help you define an optimal monthly salary figure that maximizes tax efficiency for the current year.",
    },
    {
      title: "Monthly Processing",
      desc: "We run your payroll, generate your payslip, and send you the exact figures to transfer to your personal account.",
    },
    {
      title: "RTI Reporting",
      desc: "We file the mandatory Real Time Information return to HMRC on or before your payday, keeping you compliant.",
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
            Zero stress. We manage the filings; you simply make the bank transfer.
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

/* ---------- SECTION 7: COMPLIANCE BENEFITS ---------- */
function ComplianceBenefits() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>THE ADVANTAGE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Why It's The Smart Choice
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Structuring your income properly yields massive long-term benefits.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <TrendingUp className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Lower Corp Tax</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Every pound you take as a salary is a deductible business expense, reducing the total taxable profit of your company and lowering your Corporation Tax bill.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">HMRC Compliance</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                By formalizing your income extraction through PAYE, you eliminate the risk of illegal Director's Loans and aggressive audits from tax authorities.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Wallet className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Verified Income</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Consistent digital payslips and annual P60s provide unquestionable proof of personal income, essential for global banking, visas, and personal finance.
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
      title: "Bookkeeping",
      path: "/uk-services/bookkeeping",
      desc: "Monthly categorization of your company expenses and reconciliation of your business bank accounts.",
    },
    {
      title: "Self Assessment",
      path: "/uk-services/self-assessment",
      desc: "Annual personal tax return required for all directors to declare salary and dividends legally.",
    },
    {
      title: "Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Official registration of your UK Limited Company with Companies House.",
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
            READY TO PAY YOURSELF?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Extract Funds Legally.
            <br />
            Avoid HMRC Penalties.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure every penny you take out of your company is fully compliant, tax-efficient, and documented with our managed payroll service.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Setup Payroll Now →
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
export default function DirectorPayroll() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <ComplianceBenefits />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
