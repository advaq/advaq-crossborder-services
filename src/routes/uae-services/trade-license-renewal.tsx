import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  Clock,
  FileText,
  RefreshCw,
  Building2,
  Calendar,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Why do I need to renew my UAE Trade License annually?",
    a: "A UAE Trade License is typically valid for one year. Annual renewal is a strict legal requirement to maintain your company's active status, keep your corporate bank accounts open, and ensure the validity of any residency visas attached to the company.",
  },
  {
    q: "When should I start the Trade License renewal process?",
    a: "We recommend starting the renewal process at least 30 days before the expiration date. This provides ample time to arrange any required audits, finalize lease agreements (if applicable), and avoid late penalty fees imposed by the Freezone or Mainland authority.",
  },
  {
    q: "What happens if I delay or miss the renewal deadline?",
    a: "Missing the renewal deadline incurs immediate monthly fines, which can range from AED 200 to over AED 1,000 depending on the jurisdiction. Extended delays can result in the freezing of corporate bank accounts, cancellation of residency visas, and eventually, automatic deregistration of the company.",
  },
  {
    q: "Do I need a new lease agreement or Ejari for renewal?",
    a: "For Mainland companies and some Freezone companies with physical offices, a valid and renewed Ejari (tenancy contract) is mandatory for license renewal. If your company uses a flexi-desk or virtual office, the lease renewal is usually bundled with the authority's renewal invoice.",
  },
  {
    q: "Can I change my business activity during the renewal process?",
    a: "Yes, renewal is the perfect time to add, remove, or change business activities. However, changes may require additional approvals or fees. We can process activity amendments simultaneously with your license renewal.",
  },
  {
    q: "What documents are required for Trade License renewal?",
    a: "Generally, you need a copy of the current Trade License, passport copies of shareholders/directors, and the renewed lease agreement (Ejari). Depending on your company structure, an annual financial audit report might also be required.",
  },
  {
    q: "Is an audit report mandatory for renewal?",
    a: "It depends on your jurisdiction. Many Freezones (like Meydan or IFZA) do not require an audit report for standard renewals. However, Mainland companies and specific Freezones (like JAFZA or DDA) often mandate a signed audit report for license renewal.",
  },
  {
    q: "Can I renew my license if I am outside the UAE?",
    a: "Absolutely. The entire license renewal process can be handled remotely. As your corporate service provider, we manage all filings, submit the required documents, and process the payments on your behalf without you needing to travel.",
  },
  {
    q: "How long does the renewal process take?",
    a: "Once all required documents and payments are submitted, the actual renewal usually takes 2 to 5 business days. We will immediately forward the digital copy of your renewed Trade License.",
  },
  {
    q: "Does renewing the Trade License automatically renew my visa?",
    a: "No. The Trade License and your UAE Residency Visa are separate documents. However, a valid, active Trade License is a prerequisite for renewing your Establishment Card, which is then required to renew your residency visa.",
  },
  {
    q: "Can ADVAQ renew a license that was formed by another agency?",
    a: "Yes. We can take over the administration of your company. We will manage your renewals, legal filings, and compliance moving forward, ensuring you receive premium support and timely reminders.",
  },
  {
    q: "Will my corporate bank account be affected by the renewal?",
    a: "Banks actively monitor the validity of Trade Licenses. Once your license is renewed, we advise you to immediately submit the updated copy to your bank (e.g., Wio or Mashreq) via their portal to prevent any disruption or freezing of your accounts.",
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
  serviceType: "UAE Trade License Renewal",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Trade License Renewal Services",
  description:
    "Seamless, hassle-free UAE Trade License renewal for Freezone and Mainland companies. Prevent fines, maintain active banking, and stay fully compliant.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/trade-license-renewal",
  offers: {
    "@type": "Offer",
    price: "999.00",
    priceCurrency: "AED",
    description: "UAE Trade License renewal professional management fee (excluding authority fees).",
  },
};

export const Route = createFileRoute("/uae-services/trade-license-renewal")({
  head: () => ({
    meta: [
      { title: "UAE Trade License Renewal | Avoid Fines | ADVAQ" },
      {
        name: "description",
        content:
          "Renew your UAE Trade License quickly and remotely. Prevent fines, keep corporate bank accounts active, and ensure legal compliance for Freezone and Mainland entities.",
      },
      {
        name: "keywords",
        content:
          "uae trade license renewal, dubai license renewal cost, freezone license renewal, avoid trade license fines, dubai business renewal, ejari renewal",
      },
      {
        property: "og:title",
        content: "UAE Trade License Renewal | Avoid Fines | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Renew your UAE Trade License quickly and remotely. Prevent fines, keep corporate bank accounts active, and ensure legal compliance for Freezone and Mainland entities.",
      },
      { property: "og:url", content: "/uae-services/trade-license-renewal" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/trade-license-renewal" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: TradeLicenseRenewal,
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
            🇦🇪 CORPORATE COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE Trade License Renewal
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your business continuity. We handle your annual Freezone or Mainland trade license renewal entirely remotely, preventing late penalties and securing your banking access.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Renew My License
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
              <Check size={16} className="text-gold-500" /> Zero Late Penalty Guarantee
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Remote Processing
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Wio Bank Update Support
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Freezone & Mainland Expertise
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
                Why Annual License Renewal is Critical
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                In the UAE, corporate trade licenses are strictly regulated and typically valid for exactly 12 months. Maintaining an active and valid trade license is the fundamental legal requirement to operate any business within the Emirates.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Allowing your license to expire not only incurs escalating financial penalties from the registry authorities but also immediately threatens your company's operational infrastructure. We streamline the entire renewal process—from Ejari (lease) coordination to final authority approvals—ensuring seamless business continuity.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <RefreshCw size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Renewal Milestones</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**30 Days Prior:** Ideal time to initiate the renewal to allow for compliance checks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Expiry Date:** The exact date your legal right to trade pauses and fines begin.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Bank Updates:** Submit the new license to your bank immediately upon issuance.</span>
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
            Consequences of an Expired Trade License
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            An expired trade license causes a cascading effect of operational and legal failures for your UAE company.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Escalating Monthly Fines
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                The moment your license expires, authorities levy late penalties. These fines compound every month and must be cleared in full before a renewal or visa process can proceed.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Frozen Bank Accounts
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                UAE banks run automated compliance checks. If an updated license is not provided upon expiration, corporate accounts are immediately restricted, freezing your funds and blocking transactions.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Visa Cancellations
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Your company's Establishment Card and all connected residency visas are dependent on an active trade license. Prolonged expiration can lead to forced visa cancellations and deportation risks.
              </p>
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
      title: "Document Collation & Review",
      desc: "We gather and verify all necessary documents, including passport copies, leases, and previous licenses to ensure a flawless application.",
    },
    {
      title: "Authority Submissions",
      desc: "We manage the entire application portal process with your specific Freezone or Mainland authority.",
    },
    {
      title: "Lease & Ejari Coordination",
      desc: "If required, we assist with ensuring your physical or virtual lease (Ejari) is active and properly linked to your license.",
    },
    {
      title: "Fine Mitigation Strategies",
      desc: "If your license is already expired, we negotiate or manage the penalty payments efficiently to minimize disruption.",
    },
    {
      title: "Banking Update Support",
      desc: "We provide guidance on how to swiftly upload your newly renewed license to banking portals like Wio to maintain account health.",
    },
    {
      title: "Compliance Health Check",
      desc: "We review your Corporate Tax and VAT status to ensure no concurrent deadlines are missed during the renewal.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Complete Renewal Management
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Delegate the bureaucracy to our corporate experts. We ensure your license is renewed accurately and on time.
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
            <p className="text-xs text-gray-500 uppercase tracking-widest">ANNUAL RENEWAL SERVICE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 999</span>
              <span className="text-sm text-gray-500">+ authority fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *This covers our professional processing and management. The official government renewal invoice (typically AED 5,000 - AED 15,000 depending on jurisdiction) is paid separately.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Dedicated corporate account manager</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Full paperwork preparation and portal filing</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Payment facilitation to authorities</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Immediate delivery of the renewed license</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Renewal — AED 999
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
      title: "Document Gathering",
      desc: "Provide us with your current license copy, passport, and updated lease details.",
    },
    {
      title: "Authority Assessment",
      desc: "We calculate the exact government renewal fees and identify any outstanding penalties.",
    },
    {
      title: "Filing & Submission",
      desc: "We submit the renewal application through the official Freezone or DET portal.",
    },
    {
      title: "Payment Processing",
      desc: "We handle the safe transfer of the government invoice payments on your behalf.",
    },
    {
      title: "License Delivery",
      desc: "Your new license is issued and sent to you instantly, ready for bank updating.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Renew Your License
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A frictionless, remote process ensuring zero downtime for your business operations.
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
      title: "Freezone Company Setup",
      path: "/uae-services/freezone-company-formation",
      desc: "Establish a new corporate entity in the UAE with 100% foreign ownership.",
    },
    {
      title: "Change Business Activity",
      path: "/uae-services/change-business-activity",
      desc: "Add, modify, or remove activities from your trade license to match new operations.",
    },
    {
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Ensure your renewed company remains compliant with the latest Federal Tax Authority regulations.",
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
            DON'T RISK YOUR BUSINESS STATUS
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Is Your License Expiring Soon?
            <br />
            Let Us Secure Your Renewal.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your bank accounts, avoid mounting fines, and maintain your residency status. We provide fast, accurate, and completely remote Trade License renewals across the UAE.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Renewal Today →
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
            Professional Management · Quick Turnaround · Secure Filings
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function TradeLicenseRenewal() {
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
