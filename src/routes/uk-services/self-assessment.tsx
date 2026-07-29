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
  FileText,
  Calculator,
  PoundSterling,
  Scale,
  Clock,
  Briefcase,
  Calendar,
  TrendingDown,
  Landmark
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an HMRC Self Assessment tax return?",
    a: "A Self Assessment tax return is the system HMRC uses to collect Income Tax. If you are a director of a UK Limited Company, or you earn income that is not taxed at source (like dividends or foreign income), you must report it annually to HMRC via a Self Assessment.",
  },
  {
    q: "Do I need to file a Self Assessment if I live in Pakistan?",
    a: "Yes. If you are a director of a UK LTD and extract profits as dividends or salary above the tax-free allowance, or if HMRC sends you a notice to file, you are legally required to submit a Self Assessment return, regardless of your residency status.",
  },
  {
    q: "What is a UTR number, and do I need one?",
    a: "UTR stands for Unique Taxpayer Reference. It is a 10-digit number uniquely identifying you to HMRC for personal tax purposes. You must have a personal UTR to file a Self Assessment. If you do not have one, we can help you register for it.",
  },
  {
    q: "When is the deadline to file a Self Assessment?",
    a: "For online submissions, the deadline is January 31st following the end of the tax year (which runs from April 6th to April 5th). Any tax owed must also be paid by this date to avoid late payment penalties and interest.",
  },
  {
    q: "What are the penalties for filing late?",
    a: "HMRC issues an automatic £100 penalty if your return is even one day late. Further penalties of £10 per day apply after 3 months, up to a maximum of £900, followed by even larger fines at 6 and 12 months.",
  },
  {
    q: "What documents do you need to prepare my Self Assessment?",
    a: "We generally require your personal UTR number, details of any UK salary (P60/P45), dividend vouchers from your UK company, details of any UK bank interest, and a summary of any other UK-sourced income.",
  },
  {
    q: "Will I have to pay tax in the UK as a non-resident director?",
    a: "Non-residents are typically only taxed on UK-sourced income. UK dividends are classed as UK-sourced, but they may be covered by your Personal Allowance or subject to specific double taxation treaties between the UK and Pakistan. We optimize this for you.",
  },
  {
    q: "Can I do the Self Assessment myself?",
    a: "While it is possible, HMRC's commercial software requirements and the complexity of non-resident tax rules make it highly prone to errors. Mistakes can trigger audits, fines, or overpayment of tax. Using a professional ensures compliance and maximum tax efficiency.",
  },
  {
    q: "What happens if I have no income from my UK company this year?",
    a: "If your company was dormant or you did not extract any salary or dividends, you may still need to file a 'nil return' if HMRC has requested you to file. Ignoring an HMRC notice to file always results in penalties.",
  },
  {
    q: "How do I pay my UK tax bill from Pakistan?",
    a: "You can pay HMRC directly using a UK business or personal bank account (like Wise or Payoneer) or via an international bank transfer using the IBAN and Swift code provided on your tax statement.",
  },
  {
    q: "Do you provide advice on double taxation?",
    a: "Yes. We consider the Double Taxation Agreement (DTA) between the UK and your country of residence to ensure you do not pay tax twice on the same income, claiming relief where applicable.",
  },
  {
    q: "How long does it take you to prepare the return?",
    a: "Once we have all the required documents and access to your HMRC account (or authorization as your agent), we typically prepare the draft calculation within 3 to 5 working days for your review and approval.",
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
  serviceType: "HMRC Self Assessment",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "HMRC Self Assessment Return for UK Company Directors",
  description:
    "Professional preparation and filing of your UK HMRC Self Assessment tax return. Specialized for non-resident directors and freelancers to ensure compliance and tax optimization.",
  areaServed: "United Kingdom & International",
  url: "https://[yourdomain.com]/uk-services/self-assessment",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "GBP",
    description: "Annual Self Assessment preparation and filing fee.",
  },
};

export const Route = createFileRoute("/uk-services/self-assessment")({
  head: () => ({
    meta: [
      { title: "HMRC Self Assessment Return for UK Directors | ADVAQ" },
      {
        name: "description",
        content:
          "Professional HMRC Self Assessment filing for UK company directors and non-residents. Avoid penalties, optimize your tax position, and stay fully compliant. Managed by experts.",
      },
      {
        name: "keywords",
        content:
          "hmrc self assessment, personal tax return uk, file self assessment from pakistan, non resident uk director tax, uk tax filing for freelancers",
      },
      {
        property: "og:title",
        content: "HMRC Self Assessment Return for UK Directors | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional HMRC Self Assessment filing for UK company directors and non-residents. Avoid penalties and optimize your tax position.",
      },
      { property: "og:url", content: "/uk-services/self-assessment" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/self-assessment" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SelfAssessment,
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
            🇬🇧 PERSONAL TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            HMRC Self Assessment
            <br />
            For UK Directors
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Accurate, timely, and optimized personal tax filings. We calculate your liabilities, claim eligible reliefs, and file directly with HMRC so you avoid late penalties and stay focused on your business.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File My Return Now
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
              <Check size={16} className="text-gold-500" /> Full Income Declaration
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Non-Resident Experts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Penalty Prevention
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Double Tax Relief
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
                What is a Self Assessment?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Self Assessment is the UK government’s method for individuals to report their income and calculate the correct amount of tax owed to HMRC. While employees have tax deducted automatically from their pay, company directors, freelancers, and investors must manually file a return.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For international directors of UK Limited Companies, filing a Self Assessment is critical if you extract money from your business via dividends or salary. Navigating personal allowances, dividend tax bands, and foreign residency rules requires expert guidance to ensure you don't overpay tax.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Who Needs to File?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Company Directors:</strong> Anyone taking dividends or untaxed salary from a UK LTD.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">High Earners:</strong> Individuals with income over £100,000 annually.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Foreign Income:</strong> Residents receiving income from overseas sources.</span>
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
            The Cost of Non-Compliance
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            HMRC enforces strict deadlines for Self Assessments. Ignoring these obligations leads to escalating financial penalties and legal trouble.
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
                  Automatic £100 Penalty
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If your return is just one day late past the January 31st deadline, HMRC issues an automatic £100 fine. This applies even if you owe no tax or have a dormant company.
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
                  Escalating Daily Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  After 3 months, penalties increase by £10 per day, up to £900. After 6 and 12 months, penalties jump by an additional £300 or 5% of the tax due, whichever is higher.
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
                  Submitting incorrect figures, failing to declare dividends, or applying wrong tax codes can trigger a formal HMRC audit into your personal and corporate finances.
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
      title: "Income & Dividend Calculation",
      desc: "We accurately calculate your total personal income, including UK dividends, salary, and any other relevant income streams.",
    },
    {
      title: "Tax Relief Optimization",
      desc: "We apply all eligible personal allowances, basic rate bands, and double taxation treaty benefits to minimize your tax bill legally.",
    },
    {
      title: "UTR Number Registration",
      desc: "If you do not already have a Unique Taxpayer Reference, we guide you through the process of registering with HMRC.",
    },
    {
      title: "Official HMRC Submission",
      desc: "We file your complete SA100 and supplementary pages digitally using HMRC-approved accounting software.",
    },
    {
      title: "Tax Bill Notification",
      desc: "We provide a clear summary of exactly how much tax you owe (if any) and instructions on how to pay HMRC from abroad.",
    },
    {
      title: "Audit Support & Records",
      desc: "We maintain digital records of your return and provide ongoing support in case HMRC has any routine queries.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Self Assessment Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the numbers, the paperwork, and the HMRC portal. You get peace of mind knowing your personal tax is fully compliant.
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
            Annual Filing Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Standard Return
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">EXPERT TAX PREPARATION</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£149</span>
              <span className="text-sm text-gray-500">/ tax year</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Flat rate for a standard director's Self Assessment including salary and dividend income. Complex returns involving foreign property or capital gains may vary.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Income and Dividend Tax Calculation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Application of Personal Allowance & Reliefs</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Electronic Submission to HMRC</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Clear Guidance on Tax Payment Methods</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Your Tax Return
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
      desc: "You provide your UTR number, dividend vouchers, P60/P45, and any other relevant income details via our secure portal.",
    },
    {
      title: "Agent Authorization",
      desc: "We apply to HMRC to act as your official tax agent, allowing us to file on your behalf securely.",
    },
    {
      title: "Draft Calculation",
      desc: "Our accountants prepare a draft tax calculation, maximizing all legal allowances to reduce your liability.",
    },
    {
      title: "Client Approval",
      desc: "We send the draft return to you for review, explaining your tax position and answering any questions.",
    },
    {
      title: "HMRC Submission",
      desc: "Upon your approval, we digitally submit the return to HMRC before the deadline and provide you with a filing receipt.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Process Your Return
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A streamlined, hassle-free approach to personal taxation.
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

/* ---------- SECTION 7: STRATEGIC ADVANTAGES ---------- */
function StrategicAdvantages() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>STRATEGIC ADVANTAGES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Why Use a Professional Tax Agent?
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Don't risk overpaying tax or triggering an HMRC audit. We provide the expertise you need.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <TrendingDown className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Tax Minimization</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                We ensure every legal allowance, band, and treaty relief is applied. Small calculation errors when doing it yourself can lead to hundreds or thousands in overpaid tax.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Clock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Time & Stress Savings</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Navigating the HMRC gateway and decoding tax jargon is frustrating. We handle the bureaucracy so you can spend your time building your business.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8 h-full">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Audit Protection</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Professionally filed returns are less likely to be flagged by HMRC for investigation. If questions do arise, you have a registered agent to represent you.
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
      title: "Dividend Tax Planning",
      path: "/uk-services/dividend-planning",
      desc: "Strategically plan your dividend payouts to minimize personal tax exposure.",
    },
    {
      title: "UK LTD Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a new UK corporate entity to separate business from personal liabilities.",
    },
    {
      title: "VAT Return Filing",
      path: "/uk-services/vat-return-filing",
      desc: "Ensure your corporate sales tax (VAT) is calculated and submitted under MTD rules.",
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
            DON'T MISS THE DEADLINE
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Avoid HMRC Penalties.
            <br />
            File Your Self Assessment Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your personal finances and stay compliant. Our expert accountants will ensure your tax return is accurate, optimized, and filed on time.
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
            Free initial consultation · Expert UK Tax Accountants · Full HMRC Compliance
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function SelfAssessment() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <StrategicAdvantages />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
