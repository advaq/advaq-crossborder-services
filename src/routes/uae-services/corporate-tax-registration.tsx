import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Building2,
  FileText,
  Calculator,
  Landmark,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is UAE Corporate Tax?",
    a: "The UAE implemented a Federal Corporate Tax on business profits effective for financial years starting on or after 1 June 2023. The standard statutory rate is 9% for taxable income exceeding AED 375,000."
  },
  {
    q: "Is Corporate Tax Registration mandatory for all businesses?",
    a: "Yes. Absolutely every business entity in the UAE—including Mainland companies, Freezone companies, offshore companies, and branches of foreign entities—must register for Corporate Tax with the Federal Tax Authority (FTA)."
  },
  {
    q: "Do Freezone companies need to pay 9% Corporate Tax?",
    a: "Freezone companies MUST register for Corporate Tax. However, they may benefit from a 0% Corporate Tax rate on their 'Qualifying Income' if they meet strict substance requirements and comply with specific transfer pricing rules."
  },
  {
    q: "What is the penalty for late Corporate Tax Registration?",
    a: "The FTA strictly enforces a penalty of AED 10,000 for any business that fails to submit its Corporate Tax registration application before the deadline specified by the Authority based on the license issuance month."
  },
  {
    q: "What is Small Business Relief?",
    a: "Resident taxable persons with gross revenues not exceeding AED 3 Million in a tax period can elect for 'Small Business Relief', meaning they will be treated as having no taxable income and will pay 0% corporate tax."
  },
  {
    q: "How do I know my specific deadline for registration?",
    a: "The FTA issued Decision No. 3 of 2024 detailing specific deadlines. Generally, deadlines are based on the month your Trade License was originally issued, regardless of the year of issuance. Missing this exact month's deadline triggers the fine."
  },
  {
    q: "Do I need to submit audited financial statements?",
    a: "While not all businesses are required to submit audited financials at the registration phase, businesses with revenue exceeding AED 50 Million and Qualifying Free Zone Persons must maintain audited financial statements."
  },
  {
    q: "Can non-residents be subject to UAE Corporate Tax?",
    a: "Yes. Non-resident persons may be subject to UAE CT if they have a Permanent Establishment (PE) in the UAE or derive UAE-sourced income (subject to withholding tax, currently at 0%)."
  },
  {
    q: "How long does the FTA take to issue the TRN for Corporate Tax?",
    a: "If the application is complete and accurate, the FTA typically processes the Corporate Tax Registration within 20 business days and issues a Corporate Tax Registration Number (CTRN)."
  },
  {
    q: "Is Corporate Tax Registration the same as VAT Registration?",
    a: "No. They are two entirely separate tax regimes. Even if you are already registered for VAT and have a VAT TRN, you must submit a separate application to register for Corporate Tax."
  },
  {
    q: "What documents are required to register?",
    a: "You require the Trade License, Emirates ID & Passport of the authorized signatory, Memorandum of Association (MOA), and the authorization letter or Power of Attorney if being filed by an agent."
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
  serviceType: "UAE Corporate Tax Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Corporate Tax Registration Services",
  description:
    "Mandatory Corporate Tax Registration with the UAE Federal Tax Authority. Prevent AED 10,000 late fines. Professional filing for Mainland & Freezone.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uae-services/corporate-tax-registration",
  offers: {
    "@type": "Offer",
    price: "1999.00",
    priceCurrency: "AED",
    description: "Professional fee for UAE Corporate Tax registration filing.",
  },
};

export const Route = createFileRoute("/uae-services/corporate-tax-registration")({
  head: () => ({
    meta: [
      { title: "UAE Corporate Tax Registration | ADVAQ" },
      {
        name: "description",
        content:
          "Register for UAE Corporate Tax before the FTA deadline to avoid the AED 10,000 penalty. Expert filing for Freezone and Mainland companies.",
      },
      {
        name: "keywords",
        content:
          "uae corporate tax registration, fta corporate tax, 9% corporate tax uae, dubai corporate tax, avoid uae tax penalty",
      },
      {
        property: "og:title",
        content: "UAE Corporate Tax Registration | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register for UAE Corporate Tax before the FTA deadline to avoid the AED 10,000 penalty. Expert filing for Freezone and Mainland companies.",
      },
      { property: "og:url", content: "/uae-services/corporate-tax-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/corporate-tax-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: CorporateTaxRegistration,
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
            🇦🇪 FTA COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE Corporate Tax Registration
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Corporate Tax registration is legally mandatory for ALL UAE companies (Freezone and Mainland). Missing your specific FTA deadline results in a strict AED 10,000 penalty. Let us handle your filing securely.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Register Now
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Check My Deadline
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Mandatory for All Companies
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Avoid AED 10,000 Fines
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Expert FTA Representation
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
                What is UAE Corporate Tax?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                The UAE introduced a federal Corporate Tax regime on business profits, cementing its position as a transparent, globally compliant jurisdiction. The standard rate is set at 9% for taxable net profits exceeding AED 375,000.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                <strong>Critically:</strong> Registration is mandatory for every single registered entity in the UAE, regardless of revenue size, profitability, or Freezone status. Even if your company makes zero revenue or qualifies for 0% tax, you must register and obtain a Corporate Tax Registration Number (CTRN) from the FTA.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Landmark size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">The Tax Framework</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">0% Rate:</strong> On taxable income up to AED 375,000, or for qualifying Freezone companies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">9% Rate:</strong> On taxable net profits exceeding AED 375,000.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Small Business Relief:</strong> Available for revenues under AED 3 Million.</span>
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
            The Cost of Missing Your Deadline
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The FTA has mandated specific registration deadlines based on the month of your license issuance. Ignorance of the law is not an excuse.
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
                  AED 10,000 Instant Fine
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Missing your specific registration deadline results in an automatic administrative penalty of AED 10,000 applied directly to your FTA portal account.
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
                  Loss of 0% Status
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Freezone companies that fail to register and comply with FTA regulations risk losing their Qualifying Free Zone Person status, subjecting all profits to 9% tax.
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
                  Bank Account Freezes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  UAE banks require proof of corporate tax registration during KYC updates. Non-compliance can lead to restricted banking facilities or account closure.
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
      title: "Deadline Verification",
      desc: "We analyze your trade license to accurately determine your exact FTA mandatory registration deadline.",
    },
    {
      title: "Document Preparation",
      desc: "Collating and verifying MOAs, passports, EIDs, and licenses to meet stringent FTA upload requirements.",
    },
    {
      title: "EmaratTax Filing",
      desc: "Professional completion and submission of the complex Corporate Tax registration forms on EmaratTax.",
    },
    {
      title: "Entity Classification",
      desc: "Ensuring your business is correctly classified (e.g. Qualifying Free Zone Person) during registration.",
    },
    {
      title: "Clarification Management",
      desc: "Handling any follow-up questions or requests for information directly from the FTA.",
    },
    {
      title: "CTRN Delivery",
      desc: "Delivering your official Corporate Tax Registration Number (CTRN) and certificate.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Corporate Tax Registration
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Protect your business from fines with our swift and accurate filing process.
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
              Standard Registration
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE MANAGED FILING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 1,999</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *One-time professional fee for Corporate Tax registration via the FTA portal. The FTA does not charge government fees for the initial registration.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Deadline check and urgency assessment</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>EmaratTax portal profile creation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Full application submission & tracking</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Issuance of official CTRN Certificate</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — AED 1,999
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
      title: "Document Collation",
      desc: "Send us your Trade License, MOA, and owner identification documents.",
    },
    {
      title: "Deadline Audit",
      desc: "We verify your strict FTA deadline based on your license issuance month.",
    },
    {
      title: "Portal Registration",
      desc: "We create and configure your EmaratTax account for Corporate Tax.",
    },
    {
      title: "Application Filing",
      desc: "Accurate submission of your corporate structure and details to the FTA.",
    },
    {
      title: "CTRN Issued",
      desc: "The FTA processes the application and issues your Corporate Tax Certificate.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Register You
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Fast, secure, and fully compliant with federal laws.
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
      desc: "Mandatory if your local taxable turnover exceeds AED 375,000.",
    },
    {
      title: "Freezone Setup",
      path: "/uae-services/freezone-company-formation",
      desc: "Set up a new UAE entity optimized for 0% corporate tax benefits.",
    },
    {
      title: "Mainland Setup",
      path: "/uae-services/mainland-company-formation",
      desc: "Direct access to the local UAE market with 100% ownership.",
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
            BEAT THE DEADLINE
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Avoid the AED 10,000 Fine.
            <br />
            Register Your Company Now.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every UAE company must register. Missing your specific month's deadline triggers an instant automated penalty. Let our tax experts secure your compliance today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Registration →
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
            Guaranteed Filing · Expert FTA Support · No Hidden Fees
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function CorporateTaxRegistration() {
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
