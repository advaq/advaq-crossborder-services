import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  CreditCard,
  FileText,
  UserCheck,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an NTN in Pakistan?",
    a: "NTN stands for National Tax Number. It is a unique identification number issued by the Federal Board of Revenue (FBR) to individuals and businesses for taxation purposes.",
  },
  {
    q: "Who needs to register for an NTN?",
    a: "Any individual earning taxable income, buying property or vehicles, opening certain bank accounts, or wishing to avoid penalty withholding taxes must register for an NTN and file returns.",
  },
  {
    q: "What is the difference between an Individual NTN and a Business NTN?",
    a: "An Individual NTN is for salaried persons or individuals earning non-business income. A Business NTN (Sole Proprietorship) links a specific business name to your individual tax profile, allowing you to open business bank accounts.",
  },
  {
    q: "What documents do I need for Individual NTN registration?",
    a: "You simply need your original CNIC, an active mobile number registered in your name (for OTP), your email address, and a paid electricity bill.",
  },
  {
    q: "How long does it take to get my NTN certificate?",
    a: "Once we have your details and perform the FBR IRIS registration, your NTN is generated immediately. The formal certificate can be downloaded the same day.",
  },
  {
    q: "Will getting an NTN make me an Active Taxpayer (ATL)?",
    a: "No. Getting an NTN is just registration. To appear on the Active Taxpayer List (ATL) and get lower withholding tax rates, you must also file your income tax return and pay the ATL surcharge.",
  },
  {
    q: "How much does NTN Registration cost?",
    a: "Our professional fee for Individual NTN Registration and IRIS profile setup is just Rs. 5,000. There are no direct government fees for generating an NTN.",
  },
  {
    q: "Do I have to file tax returns every year after getting an NTN?",
    a: "Yes. Once you are registered and have an NTN, it becomes mandatory to file an annual income tax return, even if your income is zero (Nil return).",
  },
  {
    q: "What happens if I forget my FBR IRIS password?",
    a: "We can help you recover or reset your FBR IRIS login credentials using your registered mobile number and email address.",
  },
  {
    q: "Can overseas Pakistanis get an NTN?",
    a: "Yes, non-resident Pakistanis can register for an NTN. However, their tax filing requirements and liabilities differ from resident Pakistanis.",
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
  serviceType: "NTN Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "FBR NTN Registration Pakistan",
  description:
    "Register for your National Tax Number (NTN) with the FBR in Pakistan. Fast processing, IRIS portal setup, and tax profiling for individuals.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/ntn-registration",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "NTN registration professional fee.",
  },
};

export const Route = createFileRoute("/pakistan-services/ntn-registration")({
  head: () => ({
    meta: [
      { title: "FBR NTN Registration in Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "Get your Individual FBR NTN registered today for just Rs. 5,000. Fast IRIS profile setup to help you buy property, vehicles, and open bank accounts legally.",
      },
      {
        name: "keywords",
        content:
          "ntn registration pakistan, fbr ntn fee, how to get ntn in pakistan, individual ntn fbr, tax registration fbr",
      },
      {
        property: "og:title",
        content: "FBR NTN Registration in Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Get your Individual FBR NTN registered today for just Rs. 5,000. Fast IRIS profile setup.",
      },
      { property: "og:url", content: "/pakistan-services/ntn-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/ntn-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: NTNRegistration,
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
            🇵🇰 FEDERAL BOARD OF REVENUE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            FBR NTN Registration
            <br />
            in Pakistan
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Get your National Tax Number (NTN) and FBR IRIS login credentials setup in less than 24 hours. The first step toward becoming a compliant taxpayer in Pakistan.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Register NTN Now
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
              <Check size={16} className="text-gold-500" /> Rs. 5,000 Flat Fee
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Delivered in 24 Hours
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> IRIS Profile Setup
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
                What is an NTN?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Your National Tax Number (NTN) is your primary identification with the Federal Board of Revenue (FBR). Essentially, your 13-digit CNIC acts as your NTN once you are formally registered in the FBR database.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Registering for an NTN provides you access to the FBR IRIS portal, enabling you to file your annual income tax returns, claim tax refunds, and officially transition from an undocumented citizen to a recognized taxpayer.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <UserCheck size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Register?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Property & Cars:** Essential for purchasing real estate or registering vehicles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Bank Accounts:** Mandatory requirement by the State Bank for opening accounts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Tax Filing:** You cannot file returns or become an Active Taxpayer without it.</span>
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
          <SectionLabel center>THE PENALTIES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Cost of Being Unregistered
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The government heavily penalizes individuals who are not registered in the tax net.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Double Withholding Taxes
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Non-filers and unregistered individuals pay up to 100% higher withholding taxes on bank withdrawals, dividends, and utility bills compared to filers.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Blocked Major Purchases
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                You will be legally prohibited from purchasing property worth over a certain threshold or registering a new vehicle in your name.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Travel & SIM Restrictions
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                FBR has initiated actions to block mobile SIM cards and impose travel restrictions on individuals who evade registration and tax filings.
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
      title: "IRIS Account Creation",
      desc: "Setting up your official profile on the FBR IRIS online taxation portal.",
    },
    {
      title: "OTP Verification",
      desc: "Handling the exact SMS and Email verification process required by FBR.",
    },
    {
      title: "Profile Completion",
      desc: "Adding your residential addresses, employment status, and basic details.",
    },
    {
      title: "NTN Certificate",
      desc: "Generating and delivering your official PDF NTN Certificate from FBR.",
    },
    {
      title: "Tax Guidance",
      desc: "Brief consultation on when and how you need to file your upcoming returns.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our NTN Registration Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We bypass the confusing portal and handle the entire registration for you quickly.
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
            NTN Registration Fee
          </h2>
        </Reveal>

        <div className="max-w-md mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                INDIVIDUALS
              </span>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest">INDIVIDUAL NTN</p>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 5,000</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700 text-left">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> FBR IRIS Profile Setup</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> NTN Certificate Generation</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Same-day Processing</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Get Your NTN
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
      title: "Submit Details",
      desc: "Send us your CNIC, mobile number, email, and utility bill.",
    },
    {
      title: "Verification",
      desc: "You will provide us with the OTP codes sent by FBR to your phone and email.",
    },
    {
      title: "FBR Submission",
      desc: "We complete the data entry and finalize your registration on the IRIS portal.",
    },
    {
      title: "Receive NTN",
      desc: "We send you your official FBR NTN certificate and IRIS login credentials.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How to Register
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A seamless digital process taking less than a day.
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
      title: "Tax Return Filing",
      path: "/pakistan-services/individual-tax-return",
      desc: "Already have an NTN? File your annual returns to become an Active Taxpayer.",
    },
    {
      title: "Sole Proprietorship",
      path: "/pakistan-services/sole-proprietorship",
      desc: "Upgrade your individual NTN into a Business NTN to open commercial accounts.",
    },
    {
      title: "SECP Registration",
      path: "/pakistan-services/secp-registration",
      desc: "Launch a fully compliant Private Limited Company.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Next Steps After NTN
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
            DON'T WAIT
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Get Registered Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Avoid penalties, heavy withholding taxes, and restrictions. We process individual NTNs within hours.
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
export default function NTNRegistration() {
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
