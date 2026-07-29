import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Calculator,
  Receipt,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is VAT Return Filing in the UAE?",
    a: "VAT Return Filing is the formal process of submitting your financial data to the Federal Tax Authority (FTA). It summarizes the Value Added Tax collected from customers (Output VAT) and the VAT paid to suppliers (Input VAT) over a specific tax period, determining the net tax payable or refundable.",
  },
  {
    q: "How often do I need to file a VAT return?",
    a: "For most businesses in the UAE, VAT returns must be filed on a quarterly basis. However, the FTA may assign a monthly filing frequency for certain businesses, typically those with very high turnover or consistent VAT refunds.",
  },
  {
    q: "What is the deadline for filing a VAT return?",
    a: "The deadline for filing the VAT return and making the corresponding tax payment is the 28th day following the end of the tax period. If the 28th falls on a weekend or public holiday, the deadline is extended to the next business day.",
  },
  {
    q: "What happens if I miss the VAT filing deadline?",
    a: "Failing to file your VAT return by the deadline incurs an administrative penalty of AED 1,000 for the first offense. If repeated within 24 months, the penalty increases to AED 2,000. Additionally, late payment penalties accrue progressively on the unpaid tax amount.",
  },
  {
    q: "Do I need to file a VAT return if I had no transactions?",
    a: "Yes. Even if your business had zero sales and zero expenses during a tax period, you are legally required to file a 'Nil' VAT return. Failure to file a Nil return will still trigger late filing penalties from the FTA.",
  },
  {
    q: "What records do I need to keep for VAT purposes?",
    a: "You must maintain original tax invoices, credit notes, debit notes, import/export documents, accounting ledgers, and bank statements for a minimum of 5 years. For real estate businesses, records must be kept for 15 years.",
  },
  {
    q: "How do I claim a VAT refund?",
    a: "If your Input VAT (tax paid on purchases) exceeds your Output VAT (tax collected on sales), you are in a refund position. You can choose to carry the refund forward to offset future liabilities or submit a formal VAT Refund request to the FTA.",
  },
  {
    q: "Can I correct an error in a previously filed VAT return?",
    a: "Yes. If the error results in a tax difference of less than AED 10,000, you can correct it in your next VAT return. If the error exceeds AED 10,000, you must submit a Voluntary Disclosure to the FTA within 20 business days of discovering the error.",
  },
  {
    q: "What is the reverse charge mechanism?",
    a: "The reverse charge mechanism shifts the responsibility of recording VAT from the supplier to the buyer. It is commonly used when a UAE VAT-registered business imports services or certain goods from a supplier located outside the UAE.",
  },
  {
    q: "Are exports subject to UAE VAT?",
    a: "Exports of goods and services outside the UAE, as well as certain international transportation services, are generally zero-rated (0% VAT). However, you must still report these sales on your VAT return and retain official export documentation as proof.",
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
  serviceType: "UAE VAT Return Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE VAT Return Filing Service",
  description:
    "Professional UAE VAT Return Filing services to ensure FTA compliance, accurate tax calculation, and timely submission.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/vat-return-filing",
  offers: {
    "@type": "Offer",
    price: "599.00",
    priceCurrency: "AED",
    description: "Professional fee per quarter for UAE VAT Return Filing.",
  },
};

export const Route = createFileRoute("/uae-services/vat-return-filing")({
  head: () => ({
    meta: [
      { title: "UAE VAT Return Filing | ADVAQ" },
      {
        name: "description",
        content:
          "Professional UAE VAT return filing services. Ensure accurate calculation, 100% FTA compliance, and on-time submission for AED 599/quarter.",
      },
      {
        name: "keywords",
        content:
          "uae vat return filing, fta tax return, vat filing dubai, file vat return uae, vat compliance",
      },
      {
        property: "og:title",
        content: "UAE VAT Return Filing | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional UAE VAT return filing services. Ensure accurate calculation, 100% FTA compliance, and on-time submission.",
      },
      { property: "og:url", content: "/uae-services/vat-return-filing" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/vat-return-filing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: VATReturnFiling,
});

function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">
            🇦🇪 FTA TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE VAT Return Filing
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Avoid severe FTA penalties with our accurate and timely VAT return filing service. We handle the complex calculations, tax treatments, and EmaraTax submissions for you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File My VAT Return
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
              <Check size={16} className="text-gold-500" /> Accurate VAT Calculations
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> On-Time FTA Submission
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Expert Tax Treatment
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> EmaraTax Portal Management
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>THE ESSENTIALS</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is VAT Return Filing?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                VAT Return Filing is a mandatory requirement for all VAT-registered businesses in the UAE. It involves consolidating your business's sales and purchase data for a given tax period, applying the correct tax treatments (standard-rated, zero-rated, exempt, or out-of-scope), and declaring the net tax position to the Federal Tax Authority (FTA).
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Filing your return accurately is crucial, as the FTA strictly audits submitted data. Even minor errors in data entry, incorrect tax codes, or missing the filing deadline by a single day can trigger significant administrative penalties. Our tax experts ensure absolute compliance and peace of mind.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Outsource Your VAT Filing?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Penalty Prevention:</strong> Never miss a deadline or incur a late filing fee.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Technical Accuracy:</strong> Correct application of complex tax rules (e.g. reverse charge).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Audit Readiness:</strong> Professionally maintained tax records and working papers.</span>
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
            The UAE Federal Tax Authority imposes strict and compounding penalties for errors, omissions, and delays in VAT reporting.
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
                  Late Filing Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Missing the filing deadline results in an immediate AED 1,000 fine for the first offense, escalating to AED 2,000 for repeated failures within 24 months.
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
                  Data Error Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Submitting an incorrect tax return triggers penalties based on the unpaid tax amount, plus fixed fines for submitting a Voluntary Disclosure later.
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
                  Late Payment Fees
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Failing to pay the exact tax due on time incurs a 2% penalty immediately, followed by a 4% penalty after one month, and a daily 1% penalty thereafter.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsIncluded() {
  const inclusions = [
    {
      title: "Transaction Review",
      desc: "Detailed review of your sales invoices and purchase bills for tax code accuracy.",
    },
    {
      title: "Input VAT Verification",
      desc: "Validating your supplier tax invoices to ensure they meet FTA requirements for Input Tax recovery.",
    },
    {
      title: "Reverse Charge Analysis",
      desc: "Identifying and properly applying reverse charge mechanisms on imported services.",
    },
    {
      title: "Return Preparation",
      desc: "Drafting the VAT201 return form with accurate consolidation of standard, zero-rated, and exempt supplies.",
    },
    {
      title: "EmaraTax Filing",
      desc: "Securely logging into the FTA EmaraTax portal to submit your approved VAT return.",
    },
    {
      title: "Payment Generation",
      desc: "Generating the GIBAN payment reference and guiding you on the tax settlement process.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our VAT Filing Deliverables
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the entire end-to-end process from data review to final submission.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <Receipt className="text-gold-500 mb-4" size={24} />
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

function Pricing() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Fixed Fee Structure
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Per Quarter
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">VAT RETURN FILING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 599</span>
              <span className="text-sm text-gray-500">/ quarter</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Flat rate for standard SME businesses. Extremely high volume transactions may be subject to a custom quote.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Thorough review of sales and purchase data</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Accurate FTA Form VAT201 preparation</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Submission via EmaraTax portal</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Dedicated tax agent support</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — AED 599
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    {
      title: "Data Collection",
      desc: "You securely share your accounting ledgers, invoices, and bank statements with our team.",
    },
    {
      title: "Tax Review",
      desc: "Our tax experts analyze the data, verify input VAT eligibility, and calculate liabilities.",
    },
    {
      title: "Draft Approval",
      desc: "We generate a draft VAT201 return and share it with you for management approval.",
    },
    {
      title: "FTA Submission",
      desc: "We officially file your return via the EmaraTax portal before the regulatory deadline.",
    },
    {
      title: "Tax Settlement",
      desc: "You transfer the payable tax directly to the FTA using the generated GIBAN reference.",
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
            A seamless, stress-free process every tax period.
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

function RelatedServices() {
  const services = [
    {
      title: "UAE VAT Registration",
      path: "/uae-services/vat-registration",
      desc: "Mandatory VAT registration when your taxable turnover crosses AED 375,000.",
    },
    {
      title: "Corporate Tax Return Filing",
      path: "/uae-services/corporate-tax-return-filing",
      desc: "Annual filing of your corporate tax return and financial statements with the FTA.",
    },
    {
      title: "Small Business Relief",
      path: "/uae-services/small-business-relief",
      desc: "Claim 0% corporate tax rate legally on revenues up to AED 3 Million.",
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

function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            DEADLINE APPROACHING?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            File Your UAE VAT Return Accurately.
            <br />
            Avoid FTA Penalties.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your business from costly compliance errors. Let our expert tax professionals handle your EmaraTax submissions seamlessly.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Secure My Filing →
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
            Expert Tax Assessment · 100% FTA Compliance · On-Time Filing
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function VATReturnFiling() {
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
