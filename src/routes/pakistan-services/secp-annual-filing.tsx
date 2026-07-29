import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  BadgeAlert,
  Calendar,
  AlertTriangle,
  FileCheck,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is SECP Annual Filing and why is it mandatory?",
    a: "SECP annual filing is the mandatory submission of statutory returns (such as Form A, Form 29) by every registered company to the Securities and Exchange Commission of Pakistan. It ensures your company's records are up to date regarding directors, shareholding, and registered address.",
  },
  {
    q: "When is the deadline for filing SECP annual returns?",
    a: "For most companies, the annual returns must be filed within 30 days of the Annual General Meeting (AGM). The AGM must be held once every calendar year, typically within 16 months from incorporation or 4 months after the close of the financial year.",
  },
  {
    q: "What happens if we fail to file our SECP annual returns on time?",
    a: "Late filing attracts penalties and late fees. Continual failure to file can lead to the SECP issuing show-cause notices, marking the company as non-compliant, and eventually initiating winding-up or striking-off procedures.",
  },
  {
    q: "Do Single Member Companies (SMCs) also need to file annual returns?",
    a: "Yes. Single Member Companies are also required to comply with annual filing requirements, although they have simplified procedures compared to standard Private Limited Companies. They must file the necessary forms to maintain active status.",
  },
  {
    q: "What forms are typically included in the annual filing?",
    a: "The most common forms are Form A (Annual Return of a Company having share capital) and Form 29 (Particulars of Directors and Officers). Other forms like Form 45 may be required to declare compliance.",
  },
  {
    q: "Are financial statements required to be filed with SECP?",
    a: "Yes, companies are required to submit their audited or unaudited financial statements (depending on the paid-up capital) along with their annual returns to the SECP.",
  },
  {
    q: "How does ADVAQ help with SECP annual filing?",
    a: "We prepare all the required statutory forms, ensure your company resolutions (like AGM minutes) are properly drafted, generate the fee challans, and submit the filing via the SECP eZest portal on your behalf.",
  },
  {
    q: "What documents do you need from us to complete the filing?",
    a: "We generally need your previous year's filing documents, current list of directors and shareholders, any changes in the registered address, and the financial statements for the year ending.",
  },
  {
    q: "Is there a government fee for filing SECP returns?",
    a: "Yes, SECP charges an official filing fee for each form submitted. If the forms are submitted late, a late filing penalty is also added to the challan.",
  },
  {
    q: "How long does it take for SECP to process the annual returns?",
    a: "Once filed and the challan is paid, the SECP portal updates the company’s compliance status almost immediately, although physical or manual reviews can occasionally take a few days.",
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
  serviceType: "SECP Annual Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "SECP Annual Filing Services in Pakistan",
  description:
    "Complete SECP annual filing services including Form A, Form 29, and AGM minutes drafting to keep your company compliant and avoid penalties.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/secp-annual-filing",
  offers: {
    "@type": "Offer",
    price: "199.00",
    priceCurrency: "USD",
    description: "SECP annual filing professional fee.",
  },
};

export const Route = createFileRoute("/pakistan-services/secp-annual-filing")({
  head: () => ({
    meta: [
      { title: "SECP Annual Filing Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "Keep your Private Limited or SMC compliant with SECP. Expert handling of Form A, Form 29, AGM documents, and financial statement submissions.",
      },
      {
        name: "keywords",
        content:
          "secp annual filing, form A, form 29, secp returns pakistan, annual general meeting secp, company compliance pakistan",
      },
      {
        property: "og:title",
        content: "SECP Annual Filing Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Keep your Private Limited or SMC compliant with SECP. Expert handling of Form A, Form 29, AGM documents, and financial statement submissions.",
      },
      { property: "og:url", content: "/pakistan-services/secp-annual-filing" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/secp-annual-filing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SecpAnnualFiling,
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
            🇵🇰 CORPORATE COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            SECP Annual Filing
            <br />
            Services
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Avoid hefty penalties and keep your company in good standing. We handle your Form A, Form 29, and all statutory filings with the Securities and Exchange Commission of Pakistan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Annual Filing
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
              <Check size={16} className="text-gold-500" /> Form A & Form 29 Prepared
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> AGM Minutes Drafted
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> eZest Portal Submission
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Penalty Avoidance
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
              <SectionLabel>MANDATORY COMPLIANCE</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is SECP Annual Filing?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Every company incorporated in Pakistan, whether a Private Limited Company or a Single Member Company, is required by law to file annual returns with the SECP. This ensures the government registry has the latest information on your company's directors, shareholders, and financial health.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                The filing involves holding an Annual General Meeting (AGM) and submitting statutory forms like Form A and Form 29. Missing these filings leads to escalating fines and the risk of your company being struck off the active register, which can freeze corporate bank accounts.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Timely Filing Matters</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Maintain Active Status:</strong> Prevents your company from being marked as inactive or dormant.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Uninterrupted Banking:</strong> Banks regularly check SECP status; inactive status can freeze your accounts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Avoid Heavy Penalties:</strong> SECP imposes strict daily fines for late submissions of statutory forms.</span>
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
            Consequences of Non-Compliance
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Failing to file your annual SECP returns is a breach of the Companies Act 2017.
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
                  Mounting Financial Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  The SECP system automatically generates late fees that compound over time. What would normally cost a small filing fee can escalate into tens of thousands of rupees in penalties.
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
                  Show-Cause Notices
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Continuous default will trigger legal show-cause notices directed to the directors. You will be required to explain the non-compliance to an SECP registrar, consuming valuable time.
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
                  Company Strike-Off
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  In severe cases of prolonged non-compliance, SECP has the authority to strike your company off the register, dissolving your corporate entity and exposing directors to liability.
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
      title: "Preparation of Form A",
      desc: "Drafting the annual return summarizing share capital, shareholders, and general company information.",
    },
    {
      title: "Preparation of Form 29",
      desc: "Documenting any changes or confirming the current status of directors, chief executive, and officers.",
    },
    {
      title: "AGM Minutes Drafting",
      desc: "Creating compliant minutes for your Annual General Meeting to meet statutory documentary requirements.",
    },
    {
      title: "Form 45 (If Applicable)",
      desc: "Filing declaration of compliance where required, ensuring all technical checkpoints are covered.",
    },
    {
      title: "eZest Portal Processing",
      desc: "Logging into the SECP portal and seamlessly processing the filings without you lifting a finger.",
    },
    {
      title: "Challan Generation",
      desc: "Creating the precise government fee challan for payment, including accurate penalty calculations if late.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Complete Filing Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Everything required to make your company 100% compliant with SECP regulations.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <FileCheck className="text-gold-500 mb-4" size={24} />
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
            SECP Annual Filing Pricing
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                ANNUAL COMPLIANCE
              </span>
              <div className="text-center">
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2">Standard Filing Package</h3>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-4xl text-navy-900">From Rs. 15,000</span>
                  <span className="text-xs text-gray-500">+ gov fee</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">For standard SMC and Pvt Ltd companies</p>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700 text-left">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Preparation of Form A & Form 29</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> AGM Minutes Drafting</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Filing via SECP eZest</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Resolution of Default Status</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Start Filing Now
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
      title: "Data Collection",
      desc: "Provide us with your latest director/shareholder details and financial statements.",
    },
    {
      title: "Drafting",
      desc: "Our legal experts prepare the AGM minutes, Form A, and Form 29 accurately.",
    },
    {
      title: "Client Approval",
      desc: "We send the drafted documents to you for final review and digital approval.",
    },
    {
      title: "SECP Submission",
      desc: "We upload the forms to the eZest portal and generate the government challan.",
    },
    {
      title: "Compliance Updated",
      desc: "Once the fee is paid, your company is marked as fully compliant for the year.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Seamless Filing Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We do the heavy lifting. You stay focused on your business.
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
      title: "SECP Company Registration",
      path: "/pakistan-services/secp-registration",
      desc: "Register a new Private Limited (Pvt Ltd) or Single Member Company.",
    },
    {
      title: "FBR Corporate Tax Return",
      path: "/pakistan-services/company-tax-return",
      desc: "File your annual company tax returns with the Federal Board of Revenue.",
    },
    {
      title: "Withholding Tax Compliance",
      path: "/pakistan-services/withholding-compliance",
      desc: "Manage monthly tax deductions, CPRs, and statement filings.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Corporate Services
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
            Don't Let Penalties Accumulate.
            <br />
            File Your SECP Returns Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your corporate entity remains in perfect legal standing. We handle the paperwork, filings, and portals efficiently.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Filing
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            Professional Filing · Fast Turnaround · Expert Guidance
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function SecpAnnualFiling() {
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
