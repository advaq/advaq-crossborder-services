import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Building2,
  Globe,
  Briefcase,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a UAE Mainland Company?",
    a: "A UAE Mainland company is a business entity registered directly with the Department of Economy and Tourism (DET) in a specific emirate, such as Dubai Mainland. It allows you to trade freely anywhere in the UAE and internationally without restrictions."
  },
  {
    q: "Can a foreigner own 100% of a Mainland company?",
    a: "Yes. Following recent legislative changes to the UAE Commercial Companies Law, foreign investors can now own 100% of most Mainland companies, especially in commercial and industrial sectors, without needing a local Emirati sponsor."
  },
  {
    q: "Do I need a local sponsor (UAE National)?",
    a: "For most trading and commercial activities, a local sponsor is no longer required. You can have 100% foreign ownership. However, for certain strategic activities, a Local Service Agent (LSA) or a local partner may still be mandatory."
  },
  {
    q: "What are the benefits of a Mainland setup over Freezone?",
    a: "Mainland companies have no territorial restrictions on trading within the UAE market, can bid on lucrative government contracts, have no visa limits (depending on office size), and offer tremendous flexibility in expanding your operations."
  },
  {
    q: "Is physical office space mandatory for a Mainland company?",
    a: "Yes. Unlike Freezones that offer flexi-desks, Mainland companies usually require a physical office space (minimum 200 sq. ft.) with a valid tenancy contract (Ejari) in Dubai to issue the trade license. However, virtual offices (Estidama) are available for certain professional licenses."
  },
  {
    q: "How much does a Dubai Mainland Trade License cost?",
    a: "The total cost varies significantly based on business activity, office rent, and government fees. Our professional setup fee starts at AED 12,000, while total costs including DET fees and a basic virtual office typically range from AED 20,000 to AED 30,000+."
  },
  {
    q: "How long does it take to get a Mainland Trade License?",
    a: "The standard processing time is generally 5 to 10 business days after obtaining all initial approvals, finalizing your office lease (Ejari), and submitting all required documents to the DET."
  },
  {
    q: "Can I open a corporate bank account with a Mainland license?",
    a: "Absolutely. UAE Mainland companies are highly regarded by local banks (such as Emirates NBD, ADCB, Mashreq) and international banks. Account opening is generally straightforward as the company demonstrates strong local substance."
  },
  {
    q: "How many visas can I get with a Mainland company?",
    a: "The number of residence visas depends on the size of your leased office space. Generally, the rule is one visa for every 80 to 100 sq. ft. of office space. Larger offices allow for a larger workforce."
  },
  {
    q: "What taxes apply to a Mainland company?",
    a: "Mainland companies are subject to the standard UAE 9% Corporate Tax on net taxable profits exceeding AED 375,000. VAT applies at 5% if annual domestic taxable supplies exceed AED 375,000. We offer comprehensive tax consulting to help you navigate these requirements."
  },
  {
    q: "Can I do e-commerce with a Mainland license?",
    a: "Yes. An e-commerce license from Dubai Mainland is one of the most powerful licenses, allowing you to sell products directly to consumers across the entire UAE market without going through a local distributor."
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
  serviceType: "UAE Mainland Company Formation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Dubai Mainland Company Registration",
  description:
    "Register your Dubai Mainland company with 100% foreign ownership. Trade anywhere in the UAE, bid on government contracts, and get premium corporate banking.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uae-services/mainland-company-formation",
  offers: {
    "@type": "Offer",
    price: "12000.00",
    priceCurrency: "AED",
    description: "UAE Mainland company formation professional fee excluding authority fees.",
  },
};

export const Route = createFileRoute("/uae-services/mainland-company-formation")({
  head: () => ({
    meta: [
      { title: "UAE Mainland Company Formation | ADVAQ" },
      {
        name: "description",
        content:
          "Register your Dubai Mainland company with 100% foreign ownership. Trade directly in the UAE market, open physical offices, and unlock premium banking.",
      },
      {
        name: "keywords",
        content:
          "dubai mainland company setup, uae mainland trade license cost, 100% foreign ownership dubai, det mainland license, uae mainland corporate account",
      },
      {
        property: "og:title",
        content: "UAE Mainland Company Formation | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your Dubai Mainland company with 100% foreign ownership. Trade directly in the UAE market, open physical offices, and unlock premium banking.",
      },
      { property: "og:url", content: "/uae-services/mainland-company-formation" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/mainland-company-formation" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: MainlandCompanyFormation,
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
            🇦🇪 UAE COMPANY REGISTRATION
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE Mainland Company Formation
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Establish a powerhouse entity in Dubai Mainland with 100% foreign ownership. Trade everywhere in the local UAE market, secure government contracts, and unlock the highest tier of local corporate banking.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Mainland Setup
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
              <Check size={16} className="text-gold-500" /> Trade Anywhere in the UAE
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Foreign Ownership
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Unlimited Visas
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Easy Premium Banking
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
                What is a Dubai Mainland Company?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Mainland company is an onshore business registered directly with the Department of Economy and Tourism (DET). Unlike Freezone companies, Mainland licenses allow you to operate and trade anywhere across all emirates, open retail stores, and bid directly on UAE government tenders.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                With the new foreign ownership laws, you can now own 100% of your Dubai Mainland company in most commercial and industrial sectors without requiring a local sponsor, combining maximum market access with complete control over your business assets.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Building2 size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Mainland Advantages</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Direct Local Market Access:</strong> Sell B2B and B2C directly in the UAE.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Government Contracts:</strong> High trust level to bid for state and federal tenders.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Tier-1 Banking:</strong> Easier approval for facilities and loans from local banks.</span>
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
            The Danger of Operating Without Mainland Setup
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Attempting to penetrate the local UAE market using the wrong legal structure creates massive liabilities.
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
                  Freezone Trade Violations
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Trading physical goods directly into the local UAE market with a Freezone license is illegal. Doing so can result in hefty fines, goods confiscation, and license revocation.
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
                  Missed Tenders
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Government and large corporate entities generally mandate vendors to hold a DET Mainland license. You miss out on the most lucrative contracts without it.
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
                  Visa Limitations
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Freezone setups cap the number of visas you can issue based on predefined packages. A Mainland setup allows unlimited visas depending on your physical office size.
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
      title: "DET Name Approval",
      desc: "Securing your desired trade name with the Department of Economy and Tourism.",
    },
    {
      title: "Initial Approval Certificate",
      desc: "Obtaining the official nod from DET to proceed with the specific business activities.",
    },
    {
      title: "MOA & Civil Company Drafting",
      desc: "Structuring the Memorandum of Association to guarantee 100% foreign ownership and protect your assets.",
    },
    {
      title: "Ejari Assistance",
      desc: "Guidance on finalizing your physical office lease and registering it with the Dubai Land Department.",
    },
    {
      title: "Final License Issuance",
      desc: "Handling the final submissions and securing the official physical Trade License.",
    },
    {
      title: "Banking & Tax Intro",
      desc: "VIP introductions to top-tier UAE banks and immediate Corporate Tax registration with the FTA.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Premium Mainland Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            End-to-end legal structuring for high-net-worth individuals and serious enterprises.
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
            Professional Setup Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Premium Mainland Setup
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE MANAGED SETUP</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-xl text-gray-500">From</span>
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 12,000</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *Excludes DET government fees, market fees, and office rent/Ejari costs which vary by activity and location.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>End-to-end DET representation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Drafting of custom Memorandum of Association</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Assistance with Ejari and Tenancy Contracts</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Corporate Tax & Banking setup priority</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Consult an Expert Today
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
      title: "Name & Activity Approval",
      desc: "We secure your trade name and obtain initial DET approval for your chosen activities.",
    },
    {
      title: "Legal Structuring",
      desc: "Drafting the MOA to ensure 100% foreign ownership compliance and signing before a Notary Public.",
    },
    {
      title: "Ejari Registration",
      desc: "You secure your office space; we help register the lease (Ejari) required for the license.",
    },
    {
      title: "License Issuance",
      desc: "Final payment to DET is made, and your official Mainland Trade License is generated.",
    },
    {
      title: "Visas & Banking",
      desc: "Establishment card filing, investor visa processing, and premium corporate bank account opening.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Build Your Mainland Entity
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A precise, legally robust methodology for Dubai setup.
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
      title: "UAE Freezone Setup",
      path: "/uae-services/freezone-company-formation",
      desc: "Looking for a zero-tax remote setup instead? Explore UAE Freezone packages.",
    },
    {
      title: "VAT Registration",
      path: "/uae-services/vat-registration",
      desc: "Once your mainland company scales, mandatory VAT registration is required.",
    },
    {
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Mandatory corporate tax registration with the FTA for all mainland companies.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related UAE Compliance Services
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
            READY FOR UNLIMITED TRADING?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Dominate the UAE Market.
            <br />
            Register Your Mainland Setup.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Stop limiting your business growth. Own 100% of your company, bid on government contracts, and open premium banking relationships today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Consult With Us →
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
            Professional Guidance · End-to-End Execution · Corporate Attorneys
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function MainlandCompanyFormation() {
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
