import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Coins,
  Calculator,
  Briefcase,
  FileSearch,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Who is required to file an individual tax return in Pakistan?",
    a: "Every citizen of Pakistan whose annual income exceeds Rs. 600,000, anyone who owns property of specific dimensions, owns a vehicle over 1000cc, holds a commercial electricity connection, or has registered an NTN, is legally obligated to file an annual income tax return with FBR.",
  },
  {
    q: "What documents do I need to provide for filing my tax return?",
    a: "You need to provide your CNIC, salary certificate (if employed), bank statements for the tax year (July 1 to June 30), details of assets (property, vehicles, investments), and utility bills.",
  },
  {
    q: "I am a freelancer receiving remittances. Do I still need to file a tax return?",
    a: "Yes. Freelancers receiving IT export remittances must file a tax return to claim the tax exemption under Section 65F or the reduced tax rate under section 154A. Not filing means you become a non-filer and lose these benefits.",
  },
  {
    q: "What is the penalty for not filing a tax return?",
    a: "Non-filers face double withholding tax rates on banking transactions, property transfers, vehicle registrations, and dividend income. Moreover, FBR can impose a penalty starting from Rs. 1,000 per day up to a maximum amount, and may block mobile SIMs or travel.",
  },
  {
    q: "What is the tax year in Pakistan?",
    a: "The tax year in Pakistan runs from July 1st to June 30th of the following year. For example, Tax Year 2024 covers the period from July 1, 2023, to June 30, 2024.",
  },
  {
    q: "How long does it take for you to file my individual tax return?",
    a: "Once we receive all your required documents and bank statements, we typically prepare, review, and file your tax return within 2 to 3 working days.",
  },
  {
    q: "Will I become an 'Active Taxpayer' immediately after filing?",
    a: "If you file before the FBR deadline, you will automatically appear on the Active Taxpayers List (ATL) for the respective year. If you file after the deadline, an ATL surcharge (Rs. 1,000 for individuals) must be paid to become active.",
  },
  {
    q: "How is a sole proprietor taxed?",
    a: "A sole proprietorship is not a separate legal entity from the owner. Therefore, the business income is clubbed with the individual's personal income and taxed at the applicable individual tax slabs.",
  },
  {
    q: "Can I revise my tax return if I made a mistake?",
    a: "Yes, you can revise your tax return within 60 days of filing without FBR approval, provided the revision does not reduce the tax payable. After 60 days, FBR commissioner approval is required.",
  },
  {
    q: "What is a wealth statement and is it mandatory?",
    a: "Yes, filing a wealth statement (reconciliation of assets and liabilities) is mandatory along with your income tax return. It details all your assets, liabilities, personal expenses, and reconciles them with your declared income.",
  },
  {
    q: "Do I need to declare foreign assets?",
    a: "Absolutely. Resident Pakistanis must declare all foreign assets, bank accounts, and properties in their wealth statement. Failure to do so can lead to severe penalties and prosecution under anti-money laundering laws.",
  },
  {
    q: "How do I pay my tax liability if any arises?",
    a: "We generate a Computerized Payment Receipt (CPR) or PSID for you. You can easily pay this tax amount via any banking app, ATM, or over the counter at any commercial bank in Pakistan.",
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
  serviceType: "Individual Income Tax Return Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Individual Tax Return Filing in Pakistan",
  description:
    "File your FBR Individual Income Tax Return accurately with ADVAQ. Tailored for salaried individuals, freelancers, and sole proprietors. Become an active taxpayer today.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/individual-tax-return",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    description: "Professional fee for individual income tax return and wealth statement filing.",
  },
};

export const Route = createFileRoute("/pakistan-services/individual-tax-return")({
  head: () => ({
    meta: [
      { title: "Individual Tax Return Filing in Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "File your FBR Individual Income Tax Return accurately. Tax filing services for salaried persons, freelancers, and sole proprietors in Pakistan. Get on the ATL today.",
      },
      {
        name: "keywords",
        content:
          "fbr tax return filing, individual tax return pakistan, freelancer tax filing fbr, active taxpayer list, atl surcharge, wealth statement filing",
      },
      {
        property: "og:title",
        content: "Individual Tax Return Filing in Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "File your FBR Individual Income Tax Return accurately. Tax filing services for salaried persons, freelancers, and sole proprietors in Pakistan.",
      },
      { property: "og:url", content: "/pakistan-services/individual-tax-return" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/individual-tax-return" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: IndividualTaxReturn,
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
            🇵🇰 FBR TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Individual Tax Return Filing
            <br />
            in Pakistan
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Professional tax return and wealth statement filing for salaried individuals, freelancers, and sole proprietors. Ensure 100% compliance, maximize deductions, and secure your active taxpayer status.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Tax Filing
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
              <Check size={16} className="text-gold-500" /> Prepared by Tax Experts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Includes Wealth Statement
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Active Taxpayer Status (ATL)
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Remote & Secure
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
                Why File an Individual Tax Return?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Filing your annual income tax return is a legal obligation under the Income Tax Ordinance 2001 for all qualifying individuals in Pakistan. It is a comprehensive declaration of your income from all sources, tax deductions, and a reconciliation of your personal wealth over the tax year.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For freelancers, independent contractors, and salaried professionals, properly filing your return ensures you take advantage of allowable exemptions (like IT export remittances) and prevents you from paying exorbitant withholding taxes as a non-filer on banking, property, and vehicle transactions.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Benefits of Filing</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Lower Taxes:</strong> Halve the withholding taxes on cash withdrawals, property purchases, and vehicle registration.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Visa Approvals:</strong> Verified tax returns and wealth statements are vital for securing international travel visas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Avoid Penalties:</strong> Avoid FBR notices, SIM blocking, and heavy statutory fines for non-compliance.</span>
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
            The Cost of Being a Non-Filer
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The FBR actively tracks high-value transactions. Failing to file your return exposes you to significant financial and legal consequences.
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
                  Double Withholding Tax
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Non-filers pay up to 100% higher withholding taxes on property transfers, dividend income, and banking transactions, draining your savings unnecessarily.
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
                  SIM & Travel Blocks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  FBR exercises its authority to block mobile SIM cards and impose travel bans on persistent non-filers who fail to respond to automated notices.
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
                  Wealth Reconciliation Issues
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Failing to declare assets as they are acquired makes it impossible to justify the source of funds later, leading to tax audits and severe penalties.
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
      title: "Income Computation",
      desc: "Accurate calculation of taxable income from salary, business (sole proprietor), property, capital gains, and other sources.",
    },
    {
      title: "Wealth Statement (Section 116)",
      desc: "Complete preparation of your personal wealth statement, reconciling your opening wealth, income, expenses, and closing wealth.",
    },
    {
      title: "Exemption Claims",
      desc: "Applying correct tax credits and exemptions, such as IT export remittances for freelancers under Section 65F / 154A.",
    },
    {
      title: "Tax Challan Generation",
      desc: "If any tax liability arises, we generate the CPR/PSID for easy online payment through your banking app.",
    },
    {
      title: "IRIS Portal Submission",
      desc: "Error-free filing of your tax return directly through the FBR IRIS portal.",
    },
    {
      title: "ATL Activation",
      desc: "Ensuring you are successfully placed on the FBR Active Taxpayers List (ATL) after filing.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Comprehensive Tax Filing
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the complexities of FBR IRIS, ensuring absolute accuracy and legal protection for your finances.
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
            Individual Filing Package
          </h2>
        </Reveal>

        <div className="max-w-lg mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                STANDARD PACKAGE
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center mt-2">SALARIED, FREELANCE & SOLE PROPRIETOR</p>
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2 text-center">Annual Tax Return</h3>
                <div className="mt-4 flex justify-center items-baseline gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 8,000</span>
                  <span className="text-xs text-gray-500">/ year</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Income Tax Return Preparation</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Wealth Statement Reconciliation</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Applicable Tax Exemption Claims</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Active Taxpayer Status (ATL) Activation</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> FBR IRIS Portal Filing</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Start Filing — Rs. 8,000
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
      title: "Document Collection",
      desc: "You provide CNIC, bank statements, salary certificates, and asset details via our secure portal.",
    },
    {
      title: "Drafting & Calculation",
      desc: "Our experts compute your taxable income, deductions, and reconcile your wealth statement.",
    },
    {
      title: "Review & Approval",
      desc: "We share a summary of your tax return and wealth statement for your final review.",
    },
    {
      title: "Payment of Tax (If any)",
      desc: "If tax is payable, we generate a PSID challan for you to pay directly to FBR via your bank.",
    },
    {
      title: "Final FBR Filing",
      desc: "We submit the approved return on IRIS and send you the official FBR acknowledgement receipt.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Simple 5-Step Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Filing taxes shouldn't be complicated. We do the heavy lifting for you.
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
      title: "Pakistan NTN Registration",
      path: "/pakistan-services/ntn-registration",
      desc: "Get your personal NTN registered with FBR instantly.",
    },
    {
      title: "SECP Company Registration",
      path: "/pakistan-services/secp-registration",
      desc: "Ready to scale? Convert your sole proprietorship to an SECP Pvt Ltd company.",
    },
    {
      title: "FBR Notice Response",
      path: "/pakistan-services/fbr-notice-response",
      desc: "Received a penalty or audit notice from FBR? We handle legal replies.",
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
            STAY COMPLIANT
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Wait for Deadlines.
            <br />
            File Your Taxes Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your assets, avoid FBR penalties, and become a responsible active taxpayer. Let our expert tax consultants handle the numbers.
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
            Professional Tax Consultants · Accurate Wealth Reconciliations · FBR IRIS Experts
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function IndividualTaxReturn() {
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
