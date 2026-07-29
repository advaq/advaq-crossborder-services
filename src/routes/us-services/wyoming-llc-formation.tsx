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
  Building2,
  Lock,
  Globe,
  CreditCard,
  Coins,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Why choose Wyoming over Delaware for my LLC?",
    a: "Wyoming is the most cost-effective and privacy-friendly state for international freelancers and bootstrapper agencies. It has lower annual state fees ($60 vs $300 in Delaware), lower upfront state fees, and doesn't publish member names on the public registry. Delaware is preferred primarily for startups seeking venture capital or plan to issue stocks.",
  },
  {
    q: "Do I need a US visa, travel, or an SSN to form a Wyoming LLC?",
    a: "No. You do not need a US visa, travel, or a Social Security Number (SSN) to register a Wyoming LLC, obtain an EIN from the IRS, or open US business bank accounts. The entire process is handled remotely by us from Pakistan.",
  },
  {
    q: "What documents are required to start?",
    a: "We only need a clear scan of your valid Passport or smart CNIC (English version), along with a recent proof of address (utility bill, bank statement, or internet bill issued within the last 3 months).",
  },
  {
    q: "How long does the Wyoming LLC formation take?",
    a: "State registration of the LLC takes about 3 to 5 business days. Once registered, applying for and receiving your EIN from the IRS takes another 10 to 15 business days for non-US residents via fax processing. The total turnaround time is typically 3 weeks.",
  },
  {
    q: "What is a Registered Agent and why do I need one?",
    a: "A Registered Agent is a legal requirement for all US companies. They must have a physical address in the state of formation to receive official legal mail and service of process on behalf of the company during business hours. We include one year of Wyoming Registered Agent service in our package.",
  },
  {
    q: "How is the EIN obtained from the IRS?",
    a: "The EIN (Employer Identification Number) is your company's tax ID. Since non-US residents do not have an SSN or ITIN, we apply for your EIN via IRS Form SS-4 through a dedicated fax filing process. We monitor the IRS response and send you the official CP 575 EIN confirmation letter once issued.",
  },
  {
    q: "Can I open US Stripe and PayPal accounts with a Wyoming LLC?",
    a: "Yes. Your Wyoming LLC provides the legal US entity, address, and EIN tax ID required to open US merchant accounts. While Stripe and PayPal have their own verification checks, a registered US company with an EIN is the only way for non-US residents to access these services.",
  },
  {
    q: "Can I open a US business bank account like Mercury or Wise?",
    a: "Yes. Once your LLC is registered and you receive your EIN, you are eligible to apply for digital business bank accounts like Mercury, Wise Business, and Payoneer. These banks provide real US routing and account numbers. We guide you on the exact documents and application answers to ensure approval.",
  },
  {
    q: "Do I have to pay US taxes on my earnings?",
    a: "For single-member LLCs owned by non-US residents, if your business has no physical presence (no employees, offices, or warehouse in the US) and is classified as 'not effectively connected with a US trade or business' (ETBUS), you do not owe US federal income tax on your service earnings. However, you must file annual informational returns (Form 5472 & Pro-Forma 1120) with the IRS to remain compliant. We advise on tax structuring to protect your income.",
  },
  {
    q: "What is a BOI Report and when must I file it?",
    a: "The BOI (Beneficial Ownership Information) Report is a mandatory federal filing with FinCEN required for all US companies. It discloses the beneficial owners of the LLC. For new LLCs formed, the report must be filed within 90 days of incorporation. Failing to file carries severe daily penalties. We handle this filing as part of our package.",
  },
  {
    q: "What are the annual state renewal costs in Wyoming?",
    a: "Wyoming requires an Annual Report filing starting the year after formation. The state fee is $60 for businesses with assets under $300,000 inside the state. You will also need to renew your Registered Agent address (typically $49/year). These are the only recurring state costs to keep your LLC active.",
  },
  {
    q: "How do I withdraw money from my US LLC to Pakistan?",
    a: "You can transfer your LLC funds from your US business bank account (like Mercury) directly to your personal bank account or business bank account in Pakistan via local bank transfer or payment channels. This is treated as a tax-exempt owner's draw or a service payment to your Pakistani freelancing setup.",
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
  serviceType: "US LLC Formation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Wyoming LLC Company Formation for Pakistani Entrepreneurs",
  description:
    "Register your US LLC in Wyoming remotely from Pakistan. Includes Registered Agent service, EIN tax ID application, BOI Report filing, and US Stripe eligibility. Managed by a licensed advocate.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/us-services/wyoming-llc-formation",
  offers: {
    "@type": "Offer",
    price: "199.00",
    priceCurrency: "USD",
    description: "US Wyoming LLC formation fee excluding state filing fees.",
  },
};

export const Route = createFileRoute("/us-services/wyoming-llc-formation")({
  head: () => ({
    meta: [
      { title: "Wyoming LLC Formation for Pakistani Entrepreneurs | ADVAQ" },
      {
        name: "description",
        content:
          "Register your US LLC in Wyoming remotely from Pakistan. Zero state tax, Registered Agent, EIN tax ID, and BOI filing. Complete setup for US Stripe and PayPal.",
      },
      {
        name: "keywords",
        content:
          "wyoming llc for pakistani freelancers, register us company from pakistan, wyoming llc cost, ein tax id irs, mercury bank account non resident, us stripe pakistani non resident",
      },
      {
        property: "og:title",
        content: "Wyoming LLC Formation for Pakistani Entrepreneurs | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your US LLC in Wyoming remotely from Pakistan. Zero state tax, Registered Agent, EIN tax ID, and BOI filing. Complete setup for US Stripe and PayPal.",
      },
      { property: "og:url", content: "/us-services/wyoming-llc-formation" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/wyoming-llc-formation" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: WyomingLlcFormation,
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
            🇺🇸 US COMPANY REGISTRATION
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Wyoming LLC Formation
            <br />
            for Pakistani Entrepreneurs
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Form your US LLC in Wyoming. Enjoy zero state income tax, asset privacy, and immediate global banking and merchant eligibility — 100% remote. Managed by a licensed advocate.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start My Wyoming Setup
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
              <Check size={16} className="text-gold-500" /> Wyoming Registered Agent Included
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> IRS EIN Tax ID Application
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> FinCEN BOI Report Filed
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> No US Visa Required
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
                What is a Wyoming LLC?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Wyoming Limited Liability Company (LLC) is a legal business entity registered directly with the Wyoming Secretary of State. Wyoming is famous globally as the birthplace of the LLC structure, offering non-US resident founders zero state income tax, zero corporate tax, and exceptional privacy protections.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For Pakistani freelancers, software developers, and e-commerce sellers, a Wyoming LLC acts as a legal bridge to the US market. It enables you to acquire an official US business registry, secure an IRS tax ID (EIN), open real US business bank accounts, and run fully verified US merchant accounts on Stripe, PayPal, and Amazon.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Choose Wyoming?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Zero State Tax:</strong> No state corporate income tax or franchise tax in Wyoming.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Member Privacy:</strong> Member names are not published on the state's public registry.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Low Annual Costs:</strong> Wyoming has the lowest annual state franchise fee ($60).</span>
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
            Operating Without a US Corporate Home
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Running an international business using personal bank accounts or virtual cards is a recipe for operational risk.
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
                  Stripe & PayPal Bans
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Using fake details or unverified addresses to set up Stripe accounts leads to permanent locks, frozen funds, and loss of client trust. A US company provides the legal backbone needed for compliance.
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
                  IRS Compliance Pitfalls
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Non-US residents owning US companies must file annual informational returns (Forms 5472 and 1120) even if no tax is owed. Failing to do so triggers a mandatory IRS penalty of $25,000.
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
                  FinCEN BOI Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  The new federal Corporate Transparency Act requires all new LLCs to file a Beneficial Ownership Information (BOI) Report within 90 days. Non-compliance results in civil penalties of $500 per day.
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
      title: "Articles of Organization Filing",
      desc: "We draft and submit your Articles of Organization to the Wyoming Secretary of State, paying the state filing fee on your behalf.",
    },
    {
      title: "Wyoming Registered Agent",
      desc: "One year of a legally mandated Registered Agent service in Wyoming to receive state mail and handle legal correspondence.",
    },
    {
      title: "IRS EIN Tax ID Application",
      desc: "We file Form SS-4 with the IRS to obtain your Employer Identification Number, which is essential to open US bank accounts.",
    },
    {
      title: "Custom Operating Agreement",
      desc: "A professionally drafted Operating Agreement proving your 100% ownership, which is required by US banks like Mercury.",
    },
    {
      title: "FinCEN BOI Report Filing",
      desc: "We handle the mandatory federal Beneficial Ownership Information Report filing with FinCEN to keep your LLC 100% compliant.",
    },
    {
      title: "US Bank Setup Guidance",
      desc: "Step-by-step assistance to apply for business banking accounts at Mercury, Wise Business, and US Stripe.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Wyoming LLC Pack Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the paperwork, addresses, and filings. You receive a fully setup, compliant corporate entity ready for international business.
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
            One-Time Setup Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              All-In-One Pack
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE MANAGED FORMATION</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$199</span>
              <span className="text-sm text-gray-500">+ state filing fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *The official Wyoming Secretary of State filing fee is $102, which can be paid directly to the state or bundled into our invoice.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Wyoming Registered Agent (1 year)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>IRS EIN Tax ID filing &CP 575 collection</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>FinCEN BOI Report Filing included</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Mercury, Wise Business, and Stripe setup guides</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — $199
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
      title: "Name Check",
      desc: "We check the Wyoming Secretary of State database to ensure your chosen company name is available and compliant.",
    },
    {
      title: "Articles Filing",
      desc: "We file your Articles of Organization with the state, establishing your LLC's legal registry.",
    },
    {
      title: "EIN Application",
      desc: "We file Form SS-4 with the IRS via fax to secure your Tax ID. The CP 575 form will be sent to us once ready.",
    },
    {
      title: "BOI Report Filing",
      desc: "We submit your Beneficial Ownership Information Report to FinCEN within the mandatory timeline.",
    },
    {
      title: "Bank & Stripe Setup",
      desc: "We provide your setup package and walk you through Mercury and US Stripe business account openings.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Get You Setup
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A simple, legal, and completely remote process.
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

/* ---------- SECTION 7: BANKING PARTNERS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>MERCHANT INFRASTRUCTURE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            US Stripe & Banking Integrations
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Your US LLC acts as the master key to activate global commercial accounts.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <CreditCard className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">US Stripe Setup</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Securely receive credit card payments globally. Your Wyoming LLC registry, EIN Tax ID, and Operating Agreement satisfy Stripe's official US compliance verification.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Mercury Bank</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Open a real US business bank account with routing and checking numbers. Mercury accepts non-US resident owners with a valid EIN and offers seamless Wire and ACH transfers.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Coins className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Wise Business</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Get bank details for USD, GBP, EUR, and AUD. Receive direct payments from international clients and convert balances at mid-market exchange rates.
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
      title: "US EIN Registration",
      path: "/us-services/ein-registration",
      desc: "Apply for your IRS tax identity document (Form CP 575) to enable corporate business accounts.",
    },
    {
      title: "FinCEN BOI Reporting",
      path: "/us-services/boi-report",
      desc: "Declare beneficial ownership to FinCEN within 90 days of formation to avoid daily non-compliance penalties.",
    },
    {
      title: "IRS ITIN Application",
      path: "/us-services/itin-application",
      desc: "Get an Individual Taxpayer Identification Number to file personal returns or open PayPal Business accounts.",
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
            READY TO SETUP?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Activate Your US Market Access.
            <br />
            Form Your Wyoming LLC Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every day you operate without a formal US company is a day your Stripe payment channels stay blocked, clients look elsewhere, and your personal assets remain exposed. We handle everything.
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
            Free initial consultation · Punjab Bar Council Licensed Advocate · Wyoming Address Provider
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function WyomingLlcFormation() {
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
