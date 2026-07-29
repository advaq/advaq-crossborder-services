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
  Percent,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Is VAT Registration mandatory in the UAE?",
    a: "VAT registration becomes mandatory when your company's taxable supplies and imports over the last 12 months exceed AED 375,000, or if they are expected to exceed this threshold in the next 30 days."
  },
  {
    q: "Can I register for VAT voluntarily?",
    a: "Yes, voluntary VAT registration is permitted if your taxable supplies and imports, or taxable expenses, exceed AED 187,500 over the past 12 months, or are expected to exceed it in the next 30 days."
  },
  {
    q: "What is the standard VAT rate in the UAE?",
    a: "The standard rate of VAT applied in the UAE is 5% on most goods and services, with certain specific exceptions that are either zero-rated or exempt."
  },
  {
    q: "What happens if I delay my mandatory VAT registration?",
    a: "Failure to register for VAT within the required timeframe (usually within 30 days of crossing the threshold) results in a severe administrative penalty of AED 10,000 imposed by the Federal Tax Authority (FTA)."
  },
  {
    q: "How long does the FTA take to approve a VAT registration?",
    a: "Once the application is submitted accurately with all required documentation, the FTA typically processes and issues the Tax Registration Number (TRN) within 20 business days."
  },
  {
    q: "What documents are required for UAE VAT Registration?",
    a: "You will need a copy of your Trade License, Passport and Emirates ID of the manager/owner, Memorandum of Association (MOA), bank letter or statement, and financial evidence (invoices/audits) proving you have crossed the threshold."
  },
  {
    q: "What is a TRN?",
    a: "TRN stands for Tax Registration Number. It is a unique 15-digit identifier assigned to your business by the FTA upon successful VAT registration, which must be displayed on all your tax invoices."
  },
  {
    q: "Do Freezone companies need to register for VAT?",
    a: "Yes. The VAT law applies to both Mainland and Freezone companies. If a Freezone company conducts taxable business inside the UAE and crosses the AED 375,000 threshold, it must register for VAT."
  },
  {
    q: "What are Zero-Rated supplies?",
    a: "Zero-rated supplies are taxable supplies but taxed at 0%. Examples include exports of goods/services outside the GCC, international transportation, and certain healthcare and education services."
  },
  {
    q: "What are Exempt supplies?",
    a: "Exempt supplies are not subject to VAT at all. You cannot claim input tax recovery on them. Examples include bare land sales, local passenger transport, and some specific financial services."
  },
  {
    q: "How often do I need to file VAT Returns?",
    a: "Most businesses are required to file VAT returns and make tax payments on a quarterly basis. However, the FTA may assign monthly filing periods for large businesses or specific sectors."
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
  serviceType: "UAE VAT Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE VAT Registration Services",
  description:
    "Professional UAE VAT Registration with the Federal Tax Authority (FTA). Avoid AED 10,000 fines and ensure complete tax compliance for your business.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uae-services/vat-registration",
  offers: {
    "@type": "Offer",
    price: "1499.00",
    priceCurrency: "AED",
    description: "Professional fee for UAE VAT registration filing.",
  },
};

export const Route = createFileRoute("/uae-services/vat-registration")({
  head: () => ({
    meta: [
      { title: "UAE VAT Registration | ADVAQ" },
      {
        name: "description",
        content:
          "Register your business for VAT in the UAE with the Federal Tax Authority. Avoid penalties, get your TRN quickly, and ensure complete tax compliance.",
      },
      {
        name: "keywords",
        content:
          "uae vat registration, fta vat registration, vat registration dubai, obtain trn uae, fta penalty for late vat registration",
      },
      {
        property: "og:title",
        content: "UAE VAT Registration | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your business for VAT in the UAE with the Federal Tax Authority. Avoid penalties, get your TRN quickly, and ensure complete tax compliance.",
      },
      { property: "og:url", content: "/uae-services/vat-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/vat-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: VATRegistration,
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
            🇦🇪 FEDERAL TAX AUTHORITY
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE VAT Registration
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your Tax Registration Number (TRN) promptly. We handle complex FTA filings, ensure accurate document submission, and protect your business from massive late registration penalties.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Register for VAT
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
              <Check size={16} className="text-gold-500" /> 100% FTA Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Avoid AED 10,000 Penalties
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> TRN Issuance Support
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
                What is UAE VAT Registration?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Value Added Tax (VAT) was introduced in the UAE at a standard rate of 5%. If your business achieves taxable supplies and imports exceeding AED 375,000 annually, you are legally mandated to register for VAT with the Federal Tax Authority (FTA).
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Upon successful registration, your business is issued a unique Tax Registration Number (TRN). This TRN empowers you to charge VAT on your sales, collect it on behalf of the government, and recover VAT paid on your business expenses (Input Tax).
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Percent size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Registration Types</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Mandatory:</strong> When taxable supplies exceed AED 375,000 in 12 months.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Voluntary:</strong> When taxable supplies/expenses exceed AED 187,500.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Exemption:</strong> If your supplies are entirely zero-rated, you may apply for an exemption from VAT registration.</span>
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
            The Danger of Non-Compliance
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The FTA strictly enforces VAT regulations. Missing deadlines or submitting incorrect information triggers severe penalties.
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
                  AED 10,000 Late Fine
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you cross the AED 375,000 threshold and fail to submit your VAT registration application within the designated 20-30 day window, you face an immediate AED 10,000 penalty.
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
                  Inability to Recover Tax
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a TRN, you cannot legally issue Tax Invoices, nor can you reclaim the VAT you pay on your own business expenses (Input Tax), eating into your profit margins.
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
                  Reputational Damage
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Large B2B clients in the UAE will often refuse to do business with suppliers who cannot provide a valid TRN and official Tax Invoices.
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
      title: "Threshold Assessment",
      desc: "We analyze your financial records to definitively determine if you meet mandatory or voluntary thresholds.",
    },
    {
      title: "Document Collation",
      desc: "Structuring and organizing your trade licenses, bank letters, and financial proofs to FTA standards.",
    },
    {
      title: "EmaratTax Portal Setup",
      desc: "Creating and configuring your official taxpayer profile on the FTA's EmaratTax portal.",
    },
    {
      title: "Application Filing",
      desc: "Precise submission of the VAT registration application to prevent FTA rejections or delays.",
    },
    {
      title: "RFI Management",
      desc: "Handling any Requests for Information (RFI) from the FTA during the review process.",
    },
    {
      title: "TRN Issuance",
      desc: "Delivering your official Tax Registration Certificate and educating you on next steps.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our VAT Registration Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A seamless, error-free pathway to securing your TRN with the Federal Tax Authority.
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
              Flat Rate
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE MANAGED FILING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 1,499</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *One-time professional fee for comprehensive VAT registration via the FTA portal. The FTA does not charge government fees for the initial registration itself.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Threshold assessment & consultation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Full document review and collation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>EmaratTax portal submission</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Handling of FTA clarifications (RFIs)</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — AED 1,499
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
      desc: "You provide trade licenses, MOAs, bank details, and 12-month turnover evidence.",
    },
    {
      title: "Review & Audit",
      desc: "Our experts review the data to ensure it aligns perfectly with FTA strict requirements.",
    },
    {
      title: "Portal Submission",
      desc: "We file the official application securely via the FTA's EmaratTax online portal.",
    },
    {
      title: "FTA Processing",
      desc: "The FTA reviews the application, typically taking up to 20 working days.",
    },
    {
      title: "TRN Issuance",
      desc: "Your official Tax Registration Certificate (TRC) is issued, allowing you to charge VAT.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Get Your TRN
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A streamlined process designed to avoid FTA rejections.
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
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Ensure you are registered for UAE Corporate Tax before the FTA deadline hits.",
    },
    {
      title: "Mainland Company Formation",
      path: "/uae-services/mainland-company-formation",
      desc: "Establish a direct local presence in the UAE with 100% foreign ownership.",
    },
    {
      title: "Freezone Setup",
      path: "/uae-services/freezone-company-formation",
      desc: "Set up a highly efficient, 0% personal tax entity remotely.",
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
            DON'T RISK PENALTIES
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Secure Your TRN.
            <br />
            Register for VAT Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Missing the AED 375,000 threshold deadline results in an automatic AED 10,000 fine from the FTA. Let our experts secure your compliance smoothly.
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
            Professional Filing · FTA Compliant · Error-free Documentation
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function VATRegistration() {
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
