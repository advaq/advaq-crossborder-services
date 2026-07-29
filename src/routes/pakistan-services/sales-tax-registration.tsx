import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Coins,
  FileText,
  Calculator,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is Sales Tax Registration (GST) in Pakistan?",
    a: "Sales Tax Registration, commonly known as GST (General Sales Tax), is the process of registering your business with the Federal Board of Revenue (FBR) or Provincial Revenue Authorities (like PRA, SRB) to collect and deposit tax on taxable supplies and services.",
  },
  {
    q: "Is Sales Tax Registration mandatory for all businesses?",
    a: "No. It is mandatory only if your business turnover exceeds a certain threshold (usually Rs. 10 Million for goods), if you are an importer/exporter, or if you are specifically required by the government. Certain B2B clients also mandate GST registration before signing contracts.",
  },
  {
    q: "What is the difference between FBR Sales Tax and Provincial Sales Tax?",
    a: "FBR collects sales tax on 'Goods' across Pakistan. Provincial authorities (like PRA in Punjab, SRB in Sindh, BRA in Balochistan, KPRA in KPK) collect sales tax on 'Services' rendered within their respective provinces.",
  },
  {
    q: "What is a Sales Tax Registration Number (STRN)?",
    a: "An STRN is a unique identification number issued upon successful FBR sales tax registration. It allows businesses to issue legal tax invoices, claim input tax adjustments, and file monthly sales tax returns.",
  },
  {
    q: "What documents are required for GST Registration?",
    a: "You need a valid NTN, business bank account maintenance certificate, tenancy agreement/ownership proof of business premises, electricity bill, and photographs of your office displaying the business signboard.",
  },
  {
    q: "Do I need biometric verification for Sales Tax?",
    a: "Yes. Once the application is submitted in the IRIS system, FBR requires biometric verification of the directors or the sole proprietor at a designated E-Sahulat center (NADRA) to activate the STRN.",
  },
  {
    q: "How often do I need to file Sales Tax returns?",
    a: "Once registered, you must file Sales Tax returns every month, typically by the 15th (for Annexures) and 18th (for final payment/submission) of the following month, even if there were zero sales (Nil return).",
  },
  {
    q: "What is Input Tax Adjustment?",
    a: "Input tax adjustment allows a registered business to subtract the sales tax it paid on purchases (input) from the sales tax it collected on sales (output), remitting only the difference to the government. This prevents double taxation.",
  },
  {
    q: "How much does Sales Tax Registration cost?",
    a: "Our professional fee for preparing and filing your FBR Sales Tax Registration application is Rs. 15,000. (Provincial registrations may vary based on complexity).",
  },
  {
    q: "How long does the registration process take?",
    a: "If all documents are complete and biometric verification is done promptly, FBR usually issues the STRN within 5 to 7 working days.",
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
  serviceType: "Sales Tax Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Sales Tax Registration (GST/STRN) Pakistan",
  description:
    "Register for FBR Sales Tax (STRN) and Provincial Sales Tax (PRA/SRB). Full legal guidance, IRIS submission, and compliance management for businesses in Pakistan.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/sales-tax-registration",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    description: "Sales Tax registration professional fee.",
  },
};

export const Route = createFileRoute("/pakistan-services/sales-tax-registration")({
  head: () => ({
    meta: [
      { title: "Sales Tax Registration (STRN) in Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "Register for FBR Sales Tax (STRN). Complete legal preparation for manufacturers, traders, and service providers. Price: Rs. 15,000.",
      },
      {
        name: "keywords",
        content:
          "sales tax registration pakistan, strn registration fbr, gst registration fee, pra registration, provincial sales tax services",
      },
      {
        property: "og:title",
        content: "Sales Tax Registration (STRN) in Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register for FBR Sales Tax (STRN). Complete legal preparation for manufacturers, traders, and service providers.",
      },
      { property: "og:url", content: "/pakistan-services/sales-tax-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/sales-tax-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SalesTaxRegistration,
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
            🇵🇰 FBR & PROVINCIAL COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Sales Tax Registration
            <br />
            (GST / STRN)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your Sales Tax Registration Number (STRN) with the FBR or register your services with provincial authorities (PRA/SRB) to operate at scale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Apply for STRN
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
              <Check size={16} className="text-gold-500" /> FBR STRN Registration
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> PRA / SRB Services Setup
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Input Tax Adjustment Ready
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
                Understanding Sales Tax
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Sales tax in Pakistan is a consumption tax placed on the sale of goods and services. A business collects it from the consumer at the point of sale and passes it to the government. Registering provides you with an STRN (Sales Tax Registration Number).
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For manufacturers, importers, and large retailers, FBR registration for goods is mandatory. For software houses, consultants, and marketing agencies, you must register with provincial boards (like PRA in Punjab or SRB in Sindh) to invoice corporate clients legally.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Register?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">B2B Contracts:</strong> Corporate clients will not deal with you unless you can issue a formal sales tax invoice.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Claim Deductions:</strong> Adjust the sales tax you pay on office utilities and supplies against your tax liability.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Legal Requirement:</strong> Avoid massive FBR penalties for failing to register once you hit turnover thresholds.</span>
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
            Evading Sales Tax Requirements
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            FBR continuously monitors bank accounts, utility usage, and third-party supplier data to catch unregistered businesses.
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
                  Heavy Default Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If FBR detects that you were liable to collect sales tax but failed to register, they will demand the uncollected tax retroactively alongside massive fines.
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
                  Loss of Input Tax
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Unregistered businesses cannot claim input tax adjustments. This means the sales tax you pay on purchases becomes an unrecoverable business expense.
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
                  Blocked at Customs
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Commercial importers and exporters cannot clear shipments through Pakistan Customs (WeBOC) without an active FBR STRN.
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
      title: "Document Preparation",
      desc: "Guiding you to prepare the mandatory tenancy agreements, bank certificates, and photos.",
    },
    {
      title: "IRIS Filing",
      desc: "Creating and submitting the complex Form-14 (Sales Tax Registration application) on IRIS.",
    },
    {
      title: "Biometric Guidance",
      desc: "Coordinating with you to complete the NADRA e-Sahulat biometric verification seamlessly.",
    },
    {
      title: "STRN Issuance",
      desc: "Tracking the application with FBR officers until your STRN is successfully activated.",
    },
    {
      title: "Provincial Setup",
      desc: "If you deal in services, we also manage your registration with PRA, SRB, or KPRA.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our STRN Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A precise, managed process to clear FBR's strict registration checks.
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
            Registration Fee
          </h2>
        </Reveal>

        <div className="max-w-md mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                COMPANIES & INDIVIDUALS
              </span>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest">SALES TAX REGISTRATION</p>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 15,000</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700 text-left">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> FBR STRN Application Filing</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Document Review & Alignment</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Biometric Coordination</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Final Certificate Retrieval</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Start Registration
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
      title: "Preparation",
      desc: "We compile your bank maintenance letter, office photos, and utility bills.",
    },
    {
      title: "Filing",
      desc: "Our tax experts file the intricate Sales Tax registration form via FBR IRIS.",
    },
    {
      title: "Biometric",
      desc: "You visit a nearby e-Sahulat center to verify your fingerprint for FBR.",
    },
    {
      title: "Activation",
      desc: "FBR approves the application and activates your STRN on the Active Taxpayer List.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Registration Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A precise workflow to avoid FBR rejections.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
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
      title: "Monthly Sales Tax Filing",
      path: "/pakistan-services/individual-tax-return",
      desc: "We manage your mandatory monthly sales tax returns (Annexures) securely.",
    },
    {
      title: "SECP Registration",
      path: "/pakistan-services/secp-registration",
      desc: "Need to form a company before getting sales tax registered? We do that.",
    },
    {
      title: "NTN Registration",
      path: "/pakistan-services/ntn-registration",
      desc: "Mandatory prerequisite. You must have an NTN before applying for an STRN.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Compliance & Maintenance
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
            READY TO EXPAND?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Secure Your STRN.
            <br />
            Sign Bigger Contracts.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Stop losing out on B2B clients because you cannot provide a tax invoice. Let our experts handle the FBR compliance securely.
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
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function SalesTaxRegistration() {
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
