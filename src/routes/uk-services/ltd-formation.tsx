import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  CheckCircle,
  ChevronDown,
  Shield,
  HelpCircle,
  Clock,
  Briefcase,
  FileText,
  BadgeAlert,
  Building2,
  Lock,
  Globe,
  CreditCard,
  Percent,
  Coins,
  Scale,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Can a Pakistani citizen register a UK Limited Company?",
    a: "Yes — there is absolutely no restriction on nationality or residency. Anyone in the world can register a UK LTD with Companies House. You do not need a UK visa, physical address, or travel. The entire process is 100% remote, and we handle all the filing digitally.",
  },
  {
    q: "What documents are required to form a UK LTD?",
    a: "We only require two documents: a high-quality scan of your valid Passport or CNIC (English translated version if smart CNIC), and a recent proof of address (like a utility bill, bank statement, or internet bill issued within the last 3 months). No complex legal attestation is needed.",
  },
  {
    q: "How much is the Companies House government fee, and how is it paid?",
    a: "The official Companies House registration fee is £50. This is a direct government charge. You can either pay this directly on the government portal with a card during filing, or we can bundle it into your invoice and pay it on your behalf.",
  },
  {
    q: "How long does the entire UK LTD incorporation process take?",
    a: "Once we submit your documents and application to Companies House, it typically takes between 24 and 48 working hours for the government to process and issue the Certificate of Incorporation. We will send your documents via email the moment they are approved.",
  },
  {
    q: "Do I need a physical address in the UK to register a company?",
    a: "Yes, every UK LTD must have a registered office address located in the UK. This address appears on the public registry where government correspondence (HMRC and Companies House) is sent. We provide a premium registered address in London as part of our formation packages, so you do not need to buy one separately.",
  },
  {
    q: "Does registering a UK LTD guarantee a Stripe and PayPal Business account?",
    a: "A registered UK LTD company provides the exact legal entity, company registration number, and official address required to open Stripe and PayPal Business. While these platforms have their own compliance checks, having a legally registered UK company with our provided address is the prerequisite that makes opening these accounts possible for Pakistani founders.",
  },
  {
    q: "Can I open a Wise Business or Payoneer account with this company?",
    a: "Yes. Once your company is formed, you receive the Certificate of Incorporation and Memorandum & Articles of Association. You can use these official documents to apply for digital business bank accounts like Wise Business, Payoneer, and Airwallex. We provide full setup guidance to ensure your applications succeed.",
  },
  {
    q: "Do I have to pay tax in the UK if I live in Pakistan?",
    a: "A UK LTD is subject to UK Corporation Tax (currently 19% for profits up to £50,000) on its net taxable profits. However, many business expenses — including software tools, marketing costs, and contractor payments — can be deducted to reduce your taxable income. We advise on tax structuring to ensure you remain fully compliant and tax-efficient.",
  },
  {
    q: "How do I withdraw money from my UK company to Pakistan?",
    a: "You can easily transfer funds from your UK business account (like Wise or Payoneer) to your personal or business bank account in Pakistan. This can be done as a director's salary, dividends, or as a service fee payment to your local Pakistani entity. We guide you on the most tax-efficient method to repatriate your earnings.",
  },
  {
    q: "What is a Confirmation Statement, and do I have to file it?",
    a: "A Confirmation Statement is a mandatory annual filing with Companies House that verifies your company's registry details (directors, shareholders, and address) are correct. It must be filed once every 12 months. Failing to file it can result in your company being dissolved. We track this deadline and handle the filing for you.",
  },
  {
    q: "What happens if my proposed company name is already taken?",
    a: "Before filing, we run a comprehensive search on the Companies House register. If your preferred name is taken or contains restricted words, we will contact you immediately to select an alternative name before we submit the final application. This ensures your registration is not delayed.",
  },
  {
    q: "Will I receive physical documents, or is everything digital?",
    a: "Companies House issues all incorporation certificates and documents digitally as secure, signed PDF files. These digital files are the official legal proof of your company and are fully accepted by banks, tax authorities, and payment processors. We email you the complete package immediately upon approval.",
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
  serviceType: "UK Company Formation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK LTD Company Formation for Pakistani Entrepreneurs",
  description:
    "Official UK Limited Company registration at Companies House for Pakistani freelancers, agencies, and e-commerce sellers. Includes London registered office address, tax registration, and Stripe/Wise eligibility.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uk-services/ltd-formation",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "GBP",
    description: "UK Company formation fee excluding government filing fees.",
  },
};

export const Route = createFileRoute("/uk-services/ltd-formation")({
  head: () => ({
    meta: [
      { title: "UK Company Formation Service | Register UK Company Online | ADVAQ" },
      {
        name: "description",
        content:
          "Official UK company formation service for non-residents & global founders. Fast Companies House registration, London office address, HMRC setup & Stripe/Wise readiness.",
      },
      {
        name: "keywords",
        content:
          "uk company formation, company formation uk, company formation in uk, best company formation agents uk, register a company in uk, non resident uk company formation",
      },
      {
        property: "og:title",
        content: "UK Company Formation Service | Register UK Company Online | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Official UK company formation service for non-residents & global founders. Fast Companies House registration, London office address, HMRC setup & Stripe/Wise readiness.",
      },
      { property: "og:url", content: "/uk-services/ltd-formation" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/ltd-formation" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: LtdFormation,
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
            🇬🇧 UK COMPANY REGISTRATION
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UK LTD Company Formation
            <br />
            for Pakistani Entrepreneurs
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Form your UK Limited Company officially at Companies House. Get a premium London registered office address, full HMRC setup, and Stripe/Wise business account eligibility — 100% remote. Managed by a licensed advocate.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start My UK Formation
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
              <Check size={16} className="text-gold-500" /> London Registered Address Included
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> HMRC Registration Support
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Completed in 48 Hours
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> No UK Travel Required
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
                What is UK LTD Company Formation?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A UK Limited Company (LTD) is a corporate structure registered directly with the United Kingdom government's Companies House. It exists as a separate legal entity from its owners, protecting your personal assets from business liabilities.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For Pakistani freelancers, software house owners, and e-commerce sellers, a UK LTD serves as the ultimate gateway to the global digital economy. It allows you to legally open UK-based merchant accounts, sign contracts with high-value international clients, and bypass local payment processing roadblocks entirely.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Do It Legally?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Unlock Stripe &amp; PayPal:</strong> Standard payment channels unavailable in Pakistan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Corporate Credibility:</strong> Win high-ticket corporate clients who expect formal invoicing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Limited Liability:</strong> Separate your personal wealth from your business activities.</span>
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
            Operating Without a Corporate Identity
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Running an international business using personal bank accounts or virtual cards is a recipe for operational risk.
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
                  Stripe Account Bans
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Using fake details or unverified addresses to set up Stripe accounts leads to permanent locks, frozen funds, and loss of client trust. A UK company provides the legal backbone needed for compliance.
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
                  Client Onboarding Blocks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  High-paying international enterprises will not transfer funds directly to individual personal accounts in Pakistan due to internal compliance. They require structured, professional invoices.
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
                  Personal Liability Risk
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a corporate entity, you are personally liable for client disputes, contract breaches, and IP claims. Your home, savings, and assets are exposed.
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
      title: "Companies House Registry Filing",
      desc: "Preparation and submission of Form IN01 to officially register your company name, directors, and share capital allocation.",
    },
    {
      title: "Premium London Office Address",
      desc: "One year of a prestigious registered office address in central London. Handles all official government mail and scans it to you.",
    },
    {
      title: "Director Service Address",
      desc: "Protects your personal home address from being visible on the public registry by proxying it through our London location.",
    },
    {
      title: "HMRC Corporate Tax Setup",
      desc: "We register your company with HMRC for Corporation Tax within the legal deadline to ensure you avoid active late penalties.",
    },
    {
      title: "Official Corporate Documents",
      desc: "Receive your digital Certificate of Incorporation, Memorandum and Articles of Association, and Share Certificates.",
    },
    {
      title: "Digital Bank Account Walkthrough",
      desc: "Detailed guides and support to apply for Wise Business, Payoneer, and Airwallex to begin receiving client funds.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our UK LTD Setup Inclusions
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
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£49</span>
              <span className="text-sm text-gray-500">+ government fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *The official Companies House registration fee is £50, which can be paid directly on the portal or bundled into our invoice.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>London Registered Address (1 year)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>HMRC Corporation Tax registration support</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Corporate Documents (Certificate of Incorporation, Mem&Arts)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Wise Business, Stripe, and Payoneer setup guide</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — £49
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
      title: "Name Search",
      desc: "We check the official UK registry to ensure your chosen company name is available and doesn't infringe on existing trademarks.",
    },
    {
      title: "Document Collection",
      desc: "You provide a copy of your CNIC/Passport and a utility bill. No physical signatures or complex attestations required.",
    },
    {
      title: "Companies House Filing",
      desc: "Our legal team drafts the Articles of Association and submits the official formation application directly to the UK registry.",
    },
    {
      title: "Incorporation Done",
      desc: "Within 48 hours, Companies House issues your official Certificate of Incorporation. We email the complete package instantly.",
    },
    {
      title: "Bank & Stripe Setup",
      desc: "We provide detailed documentation and steps to apply for Wise Business, Payoneer, and set up your UK Stripe account.",
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
            Stripe & Digital Banking Eligibility
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Your UK LTD acts as the master key to activate global commercial accounts.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <CreditCard className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">UK Stripe Setup</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Receive payments from credit cards globally. Your UK LTD registration, London address, and EIN/UTR numbers satisfy Stripe's official European business verification standards.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Wise Business</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Receive client payments via local UK bank transfers (sort code and account number). Send payments out globally or transfer to local accounts at highly competitive exchange rates.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Coins className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Payoneer Business</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Integrate with major freelance platforms (Upwork, Fiverr) to draw earnings directly into your UK corporate account and maintain currency balances in GBP, USD, and EUR.
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
      desc: "Annual personal tax filing for company directors to declare income and dividends legally.",
    },
    {
      title: "Annual Accounts & Filing",
      path: "/uk-services/annual-accounts",
      desc: "Full year-end corporate filing for Companies House and HMRC compliance.",
    },
    {
      title: "VAT Registration",
      path: "/uk-services/vat-registration",
      desc: "Setup your UK VAT registration with HMRC once your turnover matches requirements.",
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
                {/* We link back to the main uk-services overview or contact since other subpages do not exist yet */}
                <Link
                  to="/uk-services"
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
            READY TO SETUP?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Delay Your Stripe Setup.
            <br />
            Form Your UK Company Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every day you operate without a formal corporate registry is a day your payment channels stay blocked, clients look elsewhere, and your personal assets remain exposed. We handle everything.
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
            Free initial consultation · Punjab Bar Council Licensed Advocate · London Address Provider
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function LtdFormation() {
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
