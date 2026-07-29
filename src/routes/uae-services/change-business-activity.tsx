import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Clock,
  FileText,
  Briefcase,
  Building2,
  Calendar,
  Wallet,
  Settings,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Why would I need to change my business activity?",
    a: "Companies often pivot, expand their services, or adapt to new market demands. Changing or adding a business activity legally allows your company to trade in new products or offer new services that were not covered under your original Trade License.",
  },
  {
    q: "Can I have multiple business activities on a single Trade License?",
    a: "Yes. Most Freezone and Mainland jurisdictions allow you to bundle multiple related activities (e.g., IT consulting and software development) under one license. Unrelated activities may require separate licenses or additional approvals.",
  },
  {
    q: "Is there a limit to how many activities I can add?",
    a: "The limit depends on the licensing authority. Many Freezones allow up to 3 to 5 activities under the same license category without extra charges. Adding more activities or mixing commercial and professional activities often incurs additional fees.",
  },
  {
    q: "Do I need external approvals for certain new activities?",
    a: "Yes, regulated activities such as healthcare, education, food trading, or financial services often require No Objection Certificates (NOCs) from relevant government bodies (e.g., DHA, KHDA, Dubai Municipality) before the activity can be added.",
  },
  {
    q: "Can I change my business activity without renewing my license?",
    a: "Yes, you can apply for an activity amendment at any point during your license validity. However, if your license is close to expiring, it is highly recommended to process the activity change simultaneously with your license renewal to save on amendment fees.",
  },
  {
    q: "Will changing my activity affect my corporate bank account?",
    a: "It can. If your new activity changes your business model significantly or moves you into a high-risk sector, your bank may request an updated profile or compliance review. You must always submit the amended Trade License to your bank immediately.",
  },
  {
    q: "Do I need to change my company name if I change my activity?",
    a: "Not necessarily, unless your current company name implies a specific activity that you are removing (e.g., dropping 'Consulting' for 'Trading'). In such cases, an authority might request a name change alongside the activity change.",
  },
  {
    q: "How long does it take to process an activity amendment?",
    a: "Standard activity amendments without external approvals usually take 3 to 5 business days. If external government approvals (NOCs) are required, the timeline will depend on the specific regulatory body's processing time.",
  },
  {
    q: "What documents are required to change my business activity?",
    a: "Standard requirements include a copy of your current Trade License, a Board Resolution requesting the change, and passport copies of the shareholders. We will prepare the Board Resolution for you.",
  },
  {
    q: "Will changing my activity affect my visas?",
    a: "Generally, no. Your existing visas remain valid as long as the company itself remains active and compliant. The activity change primarily affects the Trade License and Memorandum of Association.",
  },
  {
    q: "Do I need to update my MOA (Memorandum of Association)?",
    a: "Yes. When you change or add business activities, your company's MOA must be amended to reflect the new operational scope. This is a mandatory legal step that we handle as part of the service.",
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
  serviceType: "Change Business Activity UAE",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Change Business Activity Service",
  description:
    "Legally expand or modify your UAE company's operational scope by adding or changing business activities on your Trade License.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/change-business-activity",
  offers: {
    "@type": "Offer",
    price: "599.00",
    priceCurrency: "AED",
    description: "Professional fee to amend UAE Trade License business activities (excluding authority fees).",
  },
};

export const Route = createFileRoute("/uae-services/change-business-activity")({
  head: () => ({
    meta: [
      { title: "Change Business Activity | UAE Trade License | ADVAQ" },
      {
        name: "description",
        content:
          "Easily add, change, or remove business activities on your UAE Freezone or Mainland Trade License. We handle MOA amendments and authority approvals.",
      },
      {
        name: "keywords",
        content:
          "change business activity uae, add activity to trade license, amend uae trade license, modify moa dubai, business activity amendment",
      },
      {
        property: "og:title",
        content: "Change Business Activity | UAE Trade License | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Easily add, change, or remove business activities on your UAE Freezone or Mainland Trade License. We handle MOA amendments and authority approvals.",
      },
      { property: "og:url", content: "/uae-services/change-business-activity" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/change-business-activity" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: ChangeBusinessActivity,
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
            🇦🇪 CORPORATE STRUCTURING
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Change Business Activity
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Pivoting your business model? We smoothly navigate the legal process to add, remove, or modify the approved business activities on your UAE Trade License and MOA.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Request Activity Change
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
              <Check size={16} className="text-gold-500" /> Fast Authority Approvals
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Complete MOA Amendments
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> External NOC Coordination
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Remote Processing
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
                What is an Activity Amendment?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                In the UAE, your company is only legally permitted to conduct the exact business activities listed on your official Trade License. Operating outside this scope is a serious violation.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                If your business expands into new markets—for example, a software consultancy deciding to start e-commerce trading—you must officially amend your license. This process updates the government registry, modifies your corporate documents (MOA), and ensures your banking compliance remains intact.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Briefcase size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">When to Amend</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Scaling Operations:</strong> Launching new services not covered by your initial setup.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Business Pivots:</strong> Changing direction entirely (e.g., from marketing to real estate).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Removing Constraints:</strong> Dropping unused activities to reduce renewal costs.</span>
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
            Operating Outside Licensed Activities
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Invoicing for services or products not listed on your trade license creates significant legal and financial exposure.
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
                  Compliance Fines
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Government inspectors routinely audit corporate invoices. Billing for activities not explicitly stated on your license can trigger instant fines ranging from AED 5,000 to AED 50,000.
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
                  When incoming funds do not match your approved business profile (e.g., a software company receiving payments for real estate brokering), banks flag the account for suspected money laundering and will freeze funds.
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
                  Contract Invalidation
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you enter into a contract to provide a service you are not licensed for, UAE courts may declare the contract null and void, leaving you with no legal recourse to collect payments.
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
      title: "Activity Matching",
      desc: "We analyze your new business goals and match them against the exact legal activity codes in your specific jurisdiction.",
    },
    {
      title: "Board Resolution Drafting",
      desc: "We legally draft the required Shareholder/Board Resolutions authorizing the change of activities.",
    },
    {
      title: "MOA Amendment",
      desc: "We draft and process the necessary amendments to your Memorandum and Articles of Association.",
    },
    {
      title: "External Approvals (NOC)",
      desc: "If your new activity requires third-party approvals (e.g., from the health or education authority), we guide that application process.",
    },
    {
      title: "Authority Filing",
      desc: "We submit the complete application to the Freezone or Mainland authority and track its progress to approval.",
    },
    {
      title: "License Re-issuance",
      desc: "We secure your newly amended Trade License and deliver the digital corporate pack to you.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Amendment Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the drafting, the filings, and the bureaucracy. You focus on launching your new services.
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
            Professional Management Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Flat Rate
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ACTIVITY AMENDMENT</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 599</span>
              <span className="text-sm text-gray-500">+ authority fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *This is our professional processing fee. The official government amendment fee varies widely by jurisdiction and is paid separately.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Legal matching of required activity codes</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Drafting of resolutions and MOA amendments</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>End-to-end portal submission management</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Support with bank compliance updates</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Amendment — AED 599
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
      title: "Consultation",
      desc: "Tell us your new business plans. We find the exact legal activity codes to match.",
    },
    {
      title: "Drafting",
      desc: "We prepare the Board Resolution and MOA amendment documents for your signature.",
    },
    {
      title: "NOC Clearance",
      desc: "If needed, we route the application to external ministries for preliminary approvals.",
    },
    {
      title: "Submission",
      desc: "We file the signed documents and process the government amendment fees.",
    },
    {
      title: "New License",
      desc: "Your company is officially updated and the new Trade License is issued to you.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Process the Change
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A fast, legally airtight process to expand your company's potential.
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
      title: "Trade License Renewal",
      path: "/uae-services/trade-license-renewal",
      desc: "Save on amendment fees by processing your activity changes alongside your annual renewal.",
    },
    {
      title: "Freezone Company Setup",
      path: "/uae-services/freezone-company-formation",
      desc: "Establish a new corporate entity in the UAE if your new activities require a separate company.",
    },
    {
      title: "Visa Application Support",
      path: "/uae-services/visa-application-support",
      desc: "Secure residency visas for yourself or new employees required for your expanded operations.",
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
            READY TO EXPAND?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Unlock New Revenue Streams.
            <br />
            Update Your License Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your company remains fully compliant while taking advantage of new market opportunities. We execute activity amendments quickly and precisely.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Amendment →
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
            Expert Document Drafting · Fast Authority Approvals · Bank Compliance
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function ChangeBusinessActivity() {
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
