import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  Building,
  Landmark,
  CreditCard,
  FileCheck,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Can I open a UAE business bank account as a non-resident?",
    a: "Yes. Many digital banks like Wio Business allow Freezone companies with 100% foreign non-resident ownership to open corporate bank accounts, provided the company documents are fully compliant.",
  },
  {
    q: "Which banks do you assist with?",
    a: "We primarily assist with top-tier digital and commercial banks such as Wio Business, Mashreq NeoBiz, and traditional banks depending on your business profile and presence in the UAE.",
  },
  {
    q: "Is bank account approval guaranteed?",
    a: "No consultancy can guarantee bank account approval, as it depends entirely on the bank's internal compliance and central bank regulations. However, our guidance ensures your application profile is structured to have the highest possible chance of approval.",
  },
  {
    q: "Do I need to visit the bank in person?",
    a: "For digital banks like Wio Business, the entire process is completed remotely via their mobile app. Traditional banks may require an in-person meeting to sign documents.",
  },
  {
    q: "What documents are required to open a corporate account?",
    a: "Standard requirements include your Trade License, MOA, Share Certificate, Passport, Visa (if applicable), Emirates ID (if resident), and a brief business profile detailing your operations and expected transactions.",
  },
  {
    q: "How long does it take to open the account?",
    a: "Digital banks like Wio can approve accounts within 48 to 72 hours if all compliance documents are correct. Traditional banks generally take 2 to 4 weeks.",
  },
  {
    q: "Is there a minimum balance requirement?",
    a: "Wio Business and similar digital accounts often have a very low or zero minimum balance requirement for their starter tiers. Traditional banks may require AED 50,000 to AED 100,000 as an average monthly balance.",
  },
  {
    q: "Can I get a multi-currency account?",
    a: "Yes. Most UAE corporate accounts allow you to hold balances in AED, USD, EUR, and GBP, making it ideal for international trade and e-commerce.",
  },
  {
    q: "Will I get a corporate debit or credit card?",
    a: "Yes. Approved accounts typically come with a physical or virtual corporate debit card. Corporate credit cards are usually available after a few months of account history or against a fixed deposit.",
  },
  {
    q: "Can I use my personal account for business until my corporate account is open?",
    a: "It is strictly advised against. Using a personal account for commercial transactions violates UAE central bank regulations and can lead to the immediate freezing and closure of your personal bank account.",
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
  serviceType: "UAE Business Bank Account Assistance",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Corporate Bank Account Opening Guidance",
  description:
    "Expert guidance for opening your UAE corporate bank account. Support for Wio Business, Mashreq NeoBiz, and more. Avoid compliance rejections.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/business-bank-account-guide",
  offers: {
    "@type": "Offer",
    price: "599.00",
    priceCurrency: "AED",
    description: "Business bank account opening application assistance.",
  },
};

export const Route = createFileRoute("/uae-services/business-bank-account-guide")({
  head: () => ({
    meta: [
      { title: "UAE Business Bank Account Guidance | ADVAQ" },
      {
        name: "description",
        content:
          "Open your UAE corporate bank account faster. Expert assistance for Wio Business and Mashreq NeoBiz. Complete compliance profiling for just AED 599.",
      },
      {
        name: "keywords",
        content:
          "uae business bank account, wio bank corporate account setup, dubai corporate banking, mashreq neo biz account opening, non resident corporate account dubai",
      },
      {
        property: "og:title",
        content: "UAE Business Bank Account Guidance | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Open your UAE corporate bank account faster. Expert assistance for Wio Business and Mashreq NeoBiz. Complete compliance profiling for just AED 599.",
      },
      { property: "og:url", content: "/uae-services/business-bank-account-guide" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/business-bank-account-guide" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: BankAccountGuide,
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
            🏦 CORPORATE BANKING
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            UAE Business Bank Account Assistance
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Opening a corporate account in the UAE can be a complex compliance maze. We structure your application profile and guide you through the process for fast approvals with Wio, Mashreq, and more.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Get Banking Support
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
              <Check size={16} className="text-gold-500" /> High Approval Success Rate
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Wio Business Experts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Multi-Currency Setup
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Non-Resident Support
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
                Why Do You Need Banking Assistance?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                UAE Central Bank regulations strictly enforce Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance. As a result, many new companies—especially those with non-resident founders—face immediate rejection when applying for a corporate bank account on their own.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Our corporate banking assistance ensures your business profile, proof of income, and corporate structure are perfectly aligned with bank compliance requirements before you ever click "submit." We help translate your business model into the risk-free terminology that bank compliance officers look for.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Landmark size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">What Banks Look For</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Clear Business Model:** They need to understand exactly how you make money and who your clients are.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Matching Activities:** Your transactions must match the exact business activities listed on your Trade License.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Source of Funds:** Proof of the shareholder's ability to fund the company.</span>
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
            The Cost of Being Rejected
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A poorly prepared application doesn't just result in a "no" — it can permanently blacklist your entity.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Internal Blacklisting
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                If a UAE bank rejects your application for compliance reasons, you cannot reapply with that same bank for at least 6 months, locking you out of their ecosystem.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Using Personal Accounts
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Without a corporate account, founders often mistakenly use their personal UAE accounts to receive business payments. This triggers immediate AML freezes by the central bank.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Operational Paralysis
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                A registered company without a bank account cannot open a Stripe or PayPal payment gateway, cannot pay suppliers, and cannot legally distribute dividends.
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
      icon: <Building className="text-gold-500 mb-4" size={24} />,
      title: "Corporate Profile Drafting",
      desc: "We help draft a professional Company Profile outlining your business model, target market, and operational flows.",
    },
    {
      icon: <FileCheck className="text-gold-500 mb-4" size={24} />,
      title: "Document Pre-Screening",
      desc: "Full review of your MOA, Trade License, and Share Certificates to ensure they meet the specific bank's requirements.",
    },
    {
      icon: <Smartphone className="text-gold-500 mb-4" size={24} />,
      title: "Digital App Guidance",
      desc: "Step-by-step walkthrough for digital banking platforms like Wio Business, ensuring no mistakes are made during the live application.",
    },
    {
      icon: <CreditCard className="text-gold-500 mb-4" size={24} />,
      title: "Proof of Income Structuring",
      desc: "Advice on how to present shareholder's source of wealth or previous business bank statements to pass KYC.",
    },
    {
      icon: <Shield className="text-gold-500 mb-4" size={24} />,
      title: "Compliance Questionnaire Prep",
      desc: "Preparation for the inevitable compliance calls or emails regarding your expected turnover, major suppliers, and client geography.",
    },
    {
      icon: <CheckCircle className="text-gold-500 mb-4" size={24} />,
      title: "Alternative Banking Options",
      desc: "If your primary choice is delayed, we provide immediate backup options for payment gateways and EMI accounts.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Account Assistance Program
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We bridge the gap between your business vision and the bank's strict compliance reality.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                {inc.icon}
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
            Consultancy Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Fixed Fee
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">BANKING GUIDANCE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 599</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              A one-time professional fee for complete application review, structuring, and advisory.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Document compilation & review</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Company profile drafting assistance</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Wio / Mashreq NeoBiz application guidance</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Compliance query handling support</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Assistance — AED 599
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
      title: "Document Audit",
      desc: "You send us your Trade License, Passport, and corporate documents for a full compliance pre-audit.",
    },
    {
      title: "Profile Structuring",
      desc: "We work with you to draft a clear, compliance-friendly business profile explaining your operations.",
    },
    {
      title: "Application Submission",
      desc: "We guide you on precisely how to submit the application via the bank's digital portal or app.",
    },
    {
      title: "Compliance Handling",
      desc: "When the bank's KYC team asks for clarification, we advise you on the correct way to respond.",
    },
    {
      title: "Account Activation",
      desc: "Your account is approved, and you receive your IBAN and corporate debit card access.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Path to Approval
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Systematic preparation guarantees the highest chance of success.
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
      title: "Freezone Company Formation",
      path: "/uae-services/freezone-company-formation",
      desc: "Need an entity first? We register UAE Freezone companies perfectly structured for banking success.",
    },
    {
      title: "Bookkeeping & Accounting",
      path: "/uae-services/bookkeeping",
      desc: "Once your account is open, keep it compliant with monthly professional bookkeeping.",
    },
    {
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Ensure your new company is registered with the FTA within the mandatory deadlines.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Business Services
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
            OPEN YOUR ACCOUNT
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Stop Getting Rejected by UAE Banks.
            <br />
            Let the Experts Guide You.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Get your business profile perfectly aligned with central bank compliance. Start transacting globally with a premium UAE corporate account.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get Banking Support →
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
            Wio Business Partners · High Approval Rate · Compliance Experts
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function BankAccountGuide() {
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
