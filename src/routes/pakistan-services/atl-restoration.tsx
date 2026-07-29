import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Activity,
  RefreshCw,
  ShieldAlert,
  FileCheck,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is the FBR Active Taxpayer List (ATL)?",
    a: "The Active Taxpayer List (ATL) is a record maintained by the Federal Board of Revenue (FBR) of individuals and companies who have filed their income tax returns for the latest tax year. Being on this list grants you significant tax benefits and exemptions.",
  },
  {
    q: "Why did my name get removed from the ATL?",
    a: "Your name is removed from the ATL if you fail to file your annual income tax return by the due date prescribed by the FBR, or if you filed it late and haven't paid the ATL surcharge to restore your status.",
  },
  {
    q: "What happens if I am not on the ATL?",
    a: "If you are not an active taxpayer, you will face up to 100% higher withholding taxes on bank transactions, property purchases, vehicle registration, and dividends. Non-ATL status significantly increases your cost of doing business.",
  },
  {
    q: "How can I restore my ATL status?",
    a: "To restore your ATL status, you must first ensure your income tax return for the relevant tax year is filed. If it was filed late, you must generate a PSID (Payment Slip ID) and pay the specific ATL surcharge penalty.",
  },
  {
    q: "How much is the FBR surcharge penalty for ATL restoration?",
    a: "The FBR surcharge varies: Rs. 1,000 for individuals, Rs. 10,000 for Association of Persons (AOPs) or partnerships, and Rs. 20,000 for corporate entities (companies).",
  },
  {
    q: "How long does it take to update the ATL status after payment?",
    a: "Once the ATL surcharge PSID is paid through a bank or online banking, the FBR system updates your status to 'Active' within 24 to 48 hours.",
  },
  {
    q: "Can I check my ATL status online?",
    a: "Yes, you can check your ATL status by sending an SMS with 'ATL [space] 13-digit CNIC' to 9966, or by checking the FBR IRIS portal's online ATL verification service.",
  },
  {
    q: "Is ATL status updated automatically if I pay the surcharge?",
    a: "In most cases, yes. However, technical glitches do occur. If your status isn't updated within 48 hours of payment, we follow up with the FBR helpdesk and ensure it is manually linked and activated.",
  },
  {
    q: "Do I need to restore ATL every year?",
    a: "If you file your returns on time each year, your ATL status will be automatically renewed on the new list publication date (usually March 1st). Restoration is only needed when you file late.",
  },
  {
    q: "What documents do you need from me for ATL restoration?",
    a: "We only need your CNIC or NTN, FBR IRIS login credentials (if we need to file a return or link a payment), and confirmation that the respective year's return has been filed.",
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
  serviceType: "FBR ATL Restoration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "FBR Active Taxpayer List (ATL) Restoration",
  description:
    "Restore your FBR Active Taxpayer status. We manage the surcharge PSID generation, payment processing guidance, and ensure your status is updated to active.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/atl-restoration",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    description: "ATL Restoration professional fee.",
  },
};

export const Route = createFileRoute("/pakistan-services/atl-restoration")({
  head: () => ({
    meta: [
      { title: "FBR ATL Restoration Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "Restore your FBR Active Taxpayer status quickly. We generate the PSID, pay the surcharge, and ensure your ATL status is updated to save you from double taxes.",
      },
      {
        name: "keywords",
        content:
          "fbr atl restoration, active taxpayer list, atl status check, fbr penalty payment, psid generation, income tax return late filing",
      },
      {
        property: "og:title",
        content: "FBR ATL Restoration Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Restore your FBR Active Taxpayer status quickly. We generate the PSID, pay the surcharge, and ensure your ATL status is updated to save you from double taxes.",
      },
      { property: "og:url", content: "/pakistan-services/atl-restoration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/atl-restoration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: AtlRestoration,
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
            🇵🇰 FBR TAX COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            FBR ATL Restoration
            <br />
            Services
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Dropped from the Active Taxpayer List due to late filing? Don't pay double taxes on banks and property. Let us restore your active status within 24–48 hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Restore ATL Now
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
              <Check size={16} className="text-gold-500" /> Fast PSID Generation
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 24-48 Hour Turnaround
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Save on Double Taxation
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Seamless Online Process
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
              <SectionLabel>ACTIVE TAXPAYER STATUS</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is ATL Restoration?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                The Active Taxpayer List (ATL) is an FBR registry that separates compliant tax filers from non-filers. If you miss the annual tax return deadline, you lose your active status, instantly doubling your withholding taxes on routine transactions.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Restoration requires a specialized process of generating an e-challan (PSID) for the exact surcharge penalty prescribed for your taxpayer class (Individual, AOP, or Company), paying it, and ensuring FBR's backend systems link the payment to restore your status.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Activity size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why You Need Active Status</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Lower Bank Taxes:</strong> Avoid exorbitant withholding taxes on cash withdrawals and banking transactions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Cheaper Property Transfers:</strong> Pay exactly half the withholding tax compared to non-filers when buying or selling property.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Vehicle Registration:</strong> Benefit from significantly lower taxes on new car registrations and transfers.</span>
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
            The Cost of Being Non-Active
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Operating as an inactive taxpayer silently bleeds your finances through increased withholding taxes.
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
                  100% Tax Surcharge
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Non-ATL persons face a 100% increase in withholding taxes under the Tenth Schedule of the Income Tax Ordinance. You pay double the tax on dividends, profits, and commercial transactions.
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
                  Real Estate Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Purchasing or transferring property as an inactive taxpayer triggers massive advance tax rates, which can amount to millions of rupees on high-value properties.
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
                  Corporate Rejection
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Corporate clients and government tenders outright reject vendors who are not on the Active Taxpayer List, costing you major business opportunities.
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
      title: "ATL Status Verification",
      desc: "Checking the backend FBR database to ascertain exactly why your ATL status was dropped and what year is missing.",
    },
    {
      title: "Return Filing Verification",
      desc: "Ensuring that the relevant tax year return has been properly filed and submitted in the IRIS portal.",
    },
    {
      title: "PSID Surcharge Generation",
      desc: "Creating the exact payment slip ID (PSID) required for your taxpayer category without errors.",
    },
    {
      title: "Payment Guidance",
      desc: "Providing you with clear instructions to pay the surcharge via your mobile banking app seamlessly.",
    },
    {
      title: "Status Linkage",
      desc: "Monitoring the FBR portal to ensure the payment clears and the CPR (Computerized Payment Receipt) is attached.",
    },
    {
      title: "Final Confirmation",
      desc: "Confirming and providing proof that your name is officially restored on the Active Taxpayer List.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            What We Do
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A fast, zero-stress solution to get your name back on the FBR radar.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <RefreshCw className="text-gold-500 mb-4" size={24} />
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
            ATL Restoration Fee
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                QUICK RESTORE
              </span>
              <div className="text-center">
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2">Restoration Service</h3>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-4xl text-navy-900">Rs. 5,000</span>
                  <span className="text-xs text-gray-500">+ surcharge</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Professional fee for restoring ATL status</p>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700 text-left">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Accurate PSID Generation</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Missing Return Verification</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> FBR Backend Linkage</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Status Update Confirmation</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Restore Now
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
      title: "Provide CNIC",
      desc: "Send us your CNIC or NTN so we can check your current compliance status in FBR.",
    },
    {
      title: "Challan Generation",
      desc: "We generate the correct penalty surcharge PSID for you to pay.",
    },
    {
      title: "Make Payment",
      desc: "You pay the PSID via your banking app, which instantly reflects in FBR's system.",
    },
    {
      title: "Status Linkage",
      desc: "We verify the CPR and ensure FBR systems register the payment against the penalty.",
    },
    {
      title: "ATL Activated",
      desc: "Your name appears on the Active Taxpayer List, shielding you from higher taxes.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Quick, reliable, and hassle-free.
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
      title: "Individual Tax Return",
      path: "/pakistan-services/individual-tax-return",
      desc: "File your annual individual tax return to ensure long-term ATL status.",
    },
    {
      title: "Corporate Tax Return",
      path: "/pakistan-services/company-tax-return",
      desc: "Filing services for Private Limited and Single Member Companies.",
    },
    {
      title: "NTN Registration",
      path: "/pakistan-services/ntn-registration",
      desc: "Get your new National Tax Number registered smoothly with FBR.",
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

/* ---------- SECTION 10: CTA BANNER ---------- */
function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            STOP PAYING DOUBLE TAXES
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Get Back on the ATL.
            <br />
            Restore Your Status Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every transaction while inactive costs you money. We make the restoration process quick, accurate, and completely stress-free.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Restore Status
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
            Same-day PSID Processing · Fast Activation · Dedicated Support
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function AtlRestoration() {
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
