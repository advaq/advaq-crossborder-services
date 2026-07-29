import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  AlertTriangle,
  FileText,
  Clock,
  Landmark,
  BadgePercent
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is UK Corporation Tax Registration?",
    a: "Every UK Limited Company must register for Corporation Tax with HM Revenue & Customs (HMRC) within 3 months of starting business activities. Registration sets up your company tax account and ensures you receive official tax notices and filing deadlines.",
  },
  {
    q: "When must I register for Corporation Tax?",
    a: "You must register with HMRC within 3 months of starting to trade, employ people, buy/sell goods, or provide services through your UK company.",
  },
  {
    q: "Is Corporation Tax Registration automatic when I form a UK LTD?",
    a: "Companies House automatically notifies HMRC when a company is registered, but you must still complete the Corporation Tax registration with HMRC to activate your company tax account.",
  },
  {
    q: "What information is needed to register?",
    a: "We need your UK Limited Company name, registration number (CRN), date trading started, and registered office address details.",
  },
  {
    q: "What happens if I don't register on time?",
    a: "Failure to register for Corporation Tax within 3 months of trading can result in automatic HMRC penalties and delays in receiving official tax references.",
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
  serviceType: "UK Corporation Tax Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK Corporation Tax Registration Service",
  description:
    "Official HMRC Corporation Tax registration for UK Limited Companies. Setup your company tax UTR and Government Gateway access.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/uk-services/corporation-tax-registration",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "GBP",
    description: "Corporation Tax Registration from £149.",
  },
};

export const Route = createFileRoute("/uk-services/corporation-tax-registration")({
  head: () => ({
    meta: [
      { title: "UK Corporation Tax Registration Service | ADVAQ" },
      {
        name: "description",
        content:
          "Official HMRC Corporation Tax registration for UK Limited Companies. Setup your company tax UTR and Government Gateway access fast.",
      },
      {
        name: "keywords",
        content:
          "uk corporation tax registration, hmrc tax setup, register company for tax uk, hmrc tax utr, uk business tax setup",
      },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/corporation-tax-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: CorporationTaxRegistration,
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
            HMRC Corporation Tax Registration
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Register your UK Limited Company with HMRC within 3 months of trading. Setup your official company tax account and ensure full statutory compliance from day one.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Register Now — £149
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
              <Check size={16} className="text-gold-500" /> Official HMRC Registration
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Company Tax UTR Setup
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Legal Deadline Guarantee
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 2: SERVICE OVERVIEW ---------- */
function ServiceOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>THE REQUIREMENT</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is HMRC Corporation Tax Registration?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Every active UK Limited Company is legally required to notify HM Revenue &amp; Customs (HMRC) that it has started trading within 3 months of initiating business operations.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                This registration establishes your official company tax record with HMRC, links your company registration number (CRN) to your 10-digit Corporation Tax Unique Taxpayer Reference (UTR), and sets up your accounting period deadlines.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Register Early?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Avoid Penalties:</strong> Missing the 3-month HMRC deadline results in automatic financial fines.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Tax UTR Issuance:</strong> Essential for submitting annual CT600 returns and communicating with HMRC.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Bank Compliance:</strong> Corporate banks often request your Tax UTR during periodic KYB reviews.</span>
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
            The Danger of Delaying Tax Setup
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Failing to register your UK company for Corporation Tax leads to legal friction and severe penalties.
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
                  Failure to Notify Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  HMRC imposes mandatory financial penalties for failing to notify them of business activities within 3 months of trading start.
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
                  Inability to File CT600
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without an active Corporation Tax account and UTR, you cannot submit your mandatory annual CT600 return, leading to cascading late filing fees.
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
                  Banking &amp; Stripe Blocks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  UK merchant providers and digital banks regularly perform automated compliance checks requesting valid HMRC tax registration proof.
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
      title: "HMRC Online Registration",
      desc: "Complete registration setup with HM Revenue & Customs for your UK Limited Company.",
    },
    {
      title: "Tax UTR Retrieval Assistance",
      desc: "Ensure your 10-digit Tax UTR is generated and safely received at your registered office.",
    },
    {
      title: "Accounting Period Alignment",
      desc: "Configure your initial accounting period end date with HMRC to match Companies House.",
    },
    {
      title: "HMRC Agent Authorization",
      desc: "Optionally link ADVAQ as your authorized HMRC tax agent for ongoing statutory filings.",
    },
    {
      title: "Compliance Deadline Calendar",
      desc: "Receive exact dates for when your first Corporation Tax payment and CT600 return will be due.",
    },
    {
      title: "Direct Advocate Support",
      desc: "Have your tax registration handled and verified by experienced cross-border legal consultants.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR SERVICE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            What's Included in Tax Registration
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the official government correspondence and registration process accurately from start to finish.
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

/* ---------- SECTION 5: HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Provide Company Details",
      desc: "Share your UK LTD name, Companies House CRN, and date trading commenced.",
    },
    {
      step: "02",
      title: "HMRC Application Submission",
      desc: "Our team submits your official Corporation Tax registration with HMRC.",
    },
    {
      step: "03",
      title: "Tax UTR & Gateway Setup",
      desc: "HMRC issues your company Tax UTR and activates your tax profile for full statutory compliance.",
    },
  ];

  return (
    <section className="bg-navy-950 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <Reveal className="text-center mb-16">
          <SectionLabel center>PROCESS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-white mt-4">
            3 Simple Steps to HMRC Compliance
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <Reveal key={s.step}>
              <div className="bg-navy-900 border border-white/10 rounded-2xl p-8 h-full relative">
                <span className="text-gold-500 font-mono text-3xl font-bold">{s.step}</span>
                <h3 className="font-serif text-xl text-white mt-4">{s.title}</h3>
                <p className="mt-3 text-navy-200 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: FAQ ---------- */
function FAQAccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left text-white font-serif text-lg md:text-xl font-medium focus:outline-none"
      >
        <span>{q}</span>
        <ChevronDown
          size={20}
          className={`text-gold-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-3 text-navy-200 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
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

/* ---------- SECTION 7: RELATED SERVICES ---------- */
function RelatedServices() {
  const services = [
    {
      title: "Corporation Tax Return",
      path: "/uk-services/corporation-tax-return",
      desc: "Annual CT600 filing to calculate and report your UK company tax liability accurately.",
    },
    {
      title: "Self Assessment",
      path: "/uk-services/self-assessment",
      desc: "Annual personal tax return required for all directors to declare salary and dividends legally.",
    },
    {
      title: "UK LTD Formation",
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

/* ---------- SECTION 8: CTA BANNER ---------- */
function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            HMRC TAX REGISTRATION
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Register Your UK Company
            <br />
            for HMRC Tax Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Stay 100% compliant with UK tax authorities. Get your Corporation Tax registration done by licensed advocates.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get Started — £149 →
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

export default function CorporationTaxRegistration() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <HowItWorks />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
