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
    q: "What is a Freezone company in the UAE?",
    a: "A UAE Freezone company is a business entity registered in one of the UAE's designated free economic zones (such as Meydan, IFZA, SPC, or DTEC). Freezones are designed to attract foreign investment, offering 100% foreign ownership, 100% import and export tax exemptions, 0% personal tax, and full repatriation of capital and profits.",
  },
  {
    q: "Do I need to live in or travel to the UAE to register a Freezone company?",
    a: "No. The entire registration process for a UAE Freezone company can be completed remotely. You do not need a UAE visa, residency status, or physical presence to register the company and receive your trade license. Everything is processed digitally.",
  },
  {
    q: "What documents are required to start?",
    a: "We only require: a clear color scan of your valid Passport, a passport-sized photograph (with a white background), and a proof of address (utility bill, bank statement, or internet bill issued within the last 3 months).",
  },
  {
    q: "How long does the UAE Freezone registration process take?",
    a: "Once we submit your documents and application to the Freezone authority, it typically takes 3 to 5 business days for the trade license to be approved and issued. We will email the digital trade license package to you immediately.",
  },
  {
    q: "How much are the government registration fees?",
    a: "Government fees vary depending on the chosen freezone and the number of residency visas attached to the license. For a standard zero-visa trade license, government fees generally start around AED 5,500 to AED 8,000. These are paid directly to the Freezone authority.",
  },
  {
    q: "Do I need a physical office to get a Trade License?",
    a: "No. Most Freezones offer a 'virtual office' or 'flexi-desk' option as standard with their basic license packages. This satisfies the legal address requirement without the expense of leasing physical office space.",
  },
  {
    q: "Can I open a UAE business bank account like Wio Bank?",
    a: "Yes. Once your Trade License is issued, you are eligible to apply for corporate banking. Wio Bank offers a fully digital application and fast approval for UAE Freezone companies. We guide you on the exact documentation and business profile details to ensure a successful application.",
  },
  {
    q: "What are the Corporate Tax rates in the UAE?",
    a: "The UAE introduced a 9% federal Corporate Tax on taxable business profits exceeding AED 375,000. However, many Freezone companies qualify for the 0% rate on 'qualifying income' or can claim Small Business Relief (0% tax on revenue up to AED 3 Million) to legally avoid tax. We provide tax strategy advice as part of our setup package.",
  },
  {
    q: "What is the difference between Freezone and Mainland company setups?",
    a: "Freezone companies are restricted to operating within their zone and trading internationally (though they can sell services into the UAE mainland through agents or local branches). Mainland companies can trade anywhere in the UAE and bid for government contracts directly, but they require registration with the Department of Economy and Tourism (DET).",
  },
  {
    q: "Can I get a residency visa with a Freezone company?",
    a: "Yes. You can choose a Freezone package that includes 1 or more residency visas. Once the trade license is issued, we apply for your Establishment Card, entry permit, and arrange your medical test and biometrics in Dubai to secure your 2-year partner/investor residency visa.",
  },
  {
    q: "Do I need to register for VAT in the UAE?",
    a: "VAT (Value Added Tax) registration is mandatory only if your local taxable turnover exceeds AED 375,000 in a rolling 12-month period. Voluntary registration is available from AED 187,500. If you are primarily serving international clients, your services are generally zero-rated for VAT.",
  },
  {
    q: "How do I withdraw money from my UAE company bank account?",
    a: "You can easily transfer funds from your UAE corporate account (like Wio Bank) to your personal bank account or business bank account anywhere in the world. This is done as a director's draw, shareholder dividends, or service fees, with zero personal tax or restrictions on capital repatriation.",
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
  serviceType: "UAE Freezone Company Formation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Freezone Company Formation",
  description:
    "Register your UAE Freezone company and get a Dubai Trade License. 100% remote registration, corporate tax setup, and Wio corporate banking guidance.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uae-services/freezone-company-formation",
  offers: {
    "@type": "Offer",
    price: "5999.00",
    priceCurrency: "AED",
    description: "UAE Freezone company formation professional fee excluding authority fees.",
  },
};

export const Route = createFileRoute("/uae-services/freezone-company-formation")({
  head: () => ({
    meta: [
      { title: "UAE Freezone Company Formation | ADVAQ" },
      {
        name: "description",
        content:
          "Register your UAE Freezone company remotely. Get your Dubai trade license, 100% foreign ownership, 0% personal tax, and fast digital Wio bank setup support.",
      },
      {
        name: "keywords",
        content:
          "uae freezone company setup cost, dubai freezone trade license, wio bank corporate account dubai, uae corporate tax registration, meydan freezone license",
      },
      {
        property: "og:title",
        content: "UAE Freezone Company Formation | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your UAE Freezone company remotely. Get your Dubai trade license, 100% foreign ownership, 0% personal tax, and fast digital Wio bank setup support.",
      },
      { property: "og:url", content: "/uae-services/freezone-company-formation" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/freezone-company-formation" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: FreezoneCompanyFormation,
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
            UAE Freezone Company Formation
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Form your UAE Freezone company remotely. Enjoy 100% foreign ownership, 0% personal tax, and access to premium Dubai corporate bank accounts (Wio Bank) — no travel required.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start My UAE Setup
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
              <Check size={16} className="text-gold-500" /> Dubai Trade License Issued in 5 Days
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Wio Bank Corporate Account Guidance
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Foreign Ownership Allowed
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 0% Personal Tax Jurisdiction
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
                What is UAE Freezone Company Formation?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A UAE Freezone company is a business entity registered within one of the UAE's specialized economic zones. These zones are separate legal jurisdictions that provide massive financial benefits, including 100% exemption from personal taxes and customs duties, alongside complete ownership without requiring a UAE local partner.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For Pakistani agencies, software houses, and e-commerce founders, a Dubai or Sharjah Freezone company provides a highly prestigious corporate address in the Middle East. It serves as an excellent tax haven and provides access to advanced local corporate banking like Wio and Mashreq to transact globally.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Go Dubai Freezone?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">0% Personal Tax:</strong> Pay zero tax on dividends, salaries, or capital gains.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Qualifying Zone Exemptions:</strong> Qualify for 0% corporate tax under Small Business Relief schemes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Premium Bank Accounts:</strong> Open corporate bank accounts remotely with Wio Business.</span>
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
            Operating Without a Valid Trade License
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Conducting commercial activities in the UAE without a registered trade license carries severe financial and legal risks.
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
                  Heavy Regulatory Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Conducting business in the UAE without a license, or operating outside your licensed business activities, can trigger fines starting from AED 10,000 to AED 50,000 from local authorities.
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
                  Corporate Tax Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  All companies operating in the UAE must register for Corporate Tax. Missing the registration deadline results in an automatic penalty of AED 10,000 from the Federal Tax Authority.
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
                  Corporate Banking Blocks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  UAE banks maintain strict compliance frameworks under central bank rules. Running business operations using personal bank accounts leads to instant account closures and asset freezes.
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
      title: "Dubai Trade License (1 Year)",
      desc: "We process your registration and secure your official corporate license from the Freezone authority.",
    },
    {
      title: "MOA & AOA Drafting",
      desc: "Drafting the Memorandum and Articles of Association customized for your specific business activity objects.",
    },
    {
      title: "Share Registry Certificate",
      desc: "Official share structure certificates demonstrating 100% foreign ownership of the corporate entity.",
    },
    {
      title: "Establishment Card Filing",
      desc: "Filing and issuing the company's Establishment Card from the Immigration department (necessary for visa applications).",
    },
    {
      title: "FTA Corporate Tax Registration",
      desc: "We register your company with the Federal Tax Authority (FTA) for Corporate Tax within the legal deadline.",
    },
    {
      title: "Wio Bank Setup Guidance",
      desc: "Detailed documentation and steps to apply for your digital corporate bank account with Wio Business.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our UAE Freezone Package Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the paperwork, licensing, and filings. You receive a fully setup, compliant corporate entity.
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
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE MANAGED SETUP</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 5,999</span>
              <span className="text-sm text-gray-500">+ authority fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *The official Freezone authority license fees generally start around AED 5,500 to AED 8,000 depending on the zone, paid directly to the authority.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Dubai or Northern Emirates Freezone Trade License</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>FTA Corporate Tax registration included</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Establishment Card application support</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Wio Bank, Mashreq Bank setup guides</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — AED 5,999
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
      title: "Activity Selection",
      desc: "Select up to 3 compatible business activities (e.g. software development, web portal, consulting).",
    },
    {
      title: "Name Reservation",
      desc: "We check registry availability and submit name reservation requests to the Freezone authority.",
    },
    {
      title: "Authority Filing",
      desc: "We submit your passport scan, photograph, and application forms, handling the official registry payment.",
    },
    {
      title: "License Issued",
      desc: "Within 3 to 5 working days, the Freezone authority registers the company and issues your Trade License.",
    },
    {
      title: "Tax & Bank Setup",
      desc: "We register your company for Corporate Tax with the FTA and initiate your Wio Bank application.",
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
      title: "UAE VAT Registration",
      path: "/uae-services/vat-registration",
      desc: "Register for VAT with the Federal Tax Authority (FTA) when your taxable turnover exceeds mandatory thresholds.",
    },
    {
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Mandatory corporate tax registration with the FTA to satisfy federal tax audit standards.",
    },
    {
      title: "Small Business Relief",
      path: "/uae-services/small-business-relief",
      desc: "Claim 0% corporate tax status on revenues up to AED 3 Million under UAE relief schemes.",
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
              <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <Link
                  to="/uae-services"
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
            Establish Your Dubai Corporate Hub.
            <br />
            Form Your UAE Freezone Company Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every day you operate without a formal trade license is a day your corporate payment channels stay blocked, regulatory fines accumulate, and tax penalties risk being issued. We handle everything.
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
            Free initial consultation · Punjab Bar Council Licensed Advocate · Corporate Tax Attorney
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function FreezoneCompanyFormation() {
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
