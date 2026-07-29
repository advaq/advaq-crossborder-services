import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  CheckCircle,
  ChevronDown,
  Shield,
  Clock,
  FileText,
  Building2,
  Lock,
  Globe,
  CreditCard,
  Coins,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is SECP and why should I register my company with it?",
    a: "SECP (Securities and Exchange Commission of Pakistan) is the federal regulatory authority that oversees corporate entities in Pakistan. Registering with SECP establishes your business as a separate legal entity (Pvt Ltd or SMC), giving you corporate credibility, limited liability protection, the ability to issue shares, and access to corporate bank accounts and government tax incentives.",
  },
  {
    q: "What is the difference between a Private Limited (Pvt Ltd) and a Single Member Company (SMC)?",
    a: "A Private Limited Company requires a minimum of 2 directors and shareholders, which is ideal for partners and co-founders. A Single Member Company (SMC) is a private limited company with only 1 director and shareholder, allowing a solo founder to have full corporate liability protection and credibility without needing a partner.",
  },
  {
    q: "What documents are required to register a company with SECP?",
    a: "We require: clear scans of valid CNICs/Passports of all proposed directors/shareholders, their email addresses and phone numbers, the proposed company names (3 options in order of preference), and the physical address of the company's registered office.",
  },
  {
    q: "How long does the SECP registration process take?",
    a: "Once we collect your documents and submit the name reservation, it takes 1 to 2 business days. The complete incorporation process (drafting Mem&Arts, filing, SECP review, and issuing the certificate) is typically completed within 7 to 10 working days.",
  },
  {
    q: "What is the minimum capital requirement to form a company?",
    a: "There is no high minimum paid-up capital requirement to register a company in Pakistan. You can start with an authorized capital of Rs. 100,000 (divided into shares of Rs. 10 or Rs. 100 each), which keeps your initial SECP registration fees low.",
  },
  {
    q: "How are the SECP government filing fees calculated?",
    a: "SECP filing fees are calculated based on your company's authorized capital. For an authorized capital of Rs. 100,000, the official SECP name reservation and registration fees (challan) total approximately Rs. 2,500 to Rs. 4,000. These fees are paid directly to SECP via bank challan or online portal.",
  },
  {
    q: "Can a foreigner register a company in Pakistan?",
    a: "Yes. Foreign citizens can register a company with SECP and act as directors or shareholders. The process requires additional documentation (passport scan, foreign address proof) and undergoes security clearance by the Ministry of Interior, which takes longer to approve.",
  },
  {
    q: "Will we get a digital or physical incorporation certificate?",
    a: "SECP issues all Certificates of Incorporation, Memorandums, and Articles of Association digitally as secure, digitally signed PDF files. These files are the official legal proof of your company and are fully accepted by banks, tax authorities (FBR), and clients.",
  },
  {
    q: "Can I open a corporate bank account with my SECP documents?",
    a: "Yes. Once your company is incorporated, you can open a corporate bank account at any commercial bank in Pakistan (such as Meezan Bank, HBL, Alfalah, or Standard Chartered). The bank will require your Certificate of Incorporation, Mem&Arts, and company NTN.",
  },
  {
    q: "How do I register for tax (NTN) after SECP incorporation?",
    a: "Once SECP issues the incorporation certificate, FBR automatically generates a corporate NTN (National Tax Number) for your company in most cases. If it is not generated automatically, we file the registration manually on the FBR IRIS portal on your behalf.",
  },
  {
    q: "What are the annual compliance requirements for an SECP company?",
    a: "SECP companies must file annual returns (Form A/Form 29) to keep their registry records up to date. They are also required to file annual corporate income tax returns with FBR. We handle these filings to keep your company in good standing.",
  },
  {
    q: "What happens if our preferred company name is rejected by SECP?",
    a: "SECP rejects names that are identical to existing companies, contain offensive or restricted words, or violate trademarks. If your preferred name is rejected, we will help you modify it or submit a new name search using your alternative choices without charging additional professional fees.",
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
  serviceType: "SECP Company Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "SECP Company Registration in Pakistan",
  description:
    "Register your Private Limited (Pvt Ltd) or Single Member Company (SMC) with SECP. Draft Memorandum & Articles of Association under advocate supervision, FBR NTN setup, and corporate bank account guidance.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/secp-registration",
  offers: {
    "@type": "Offer",
    price: "249.00",
    priceCurrency: "USD",
    description: "Legal drafting and online portal submission for SECP company incorporation.",
  },
};

export const Route = createFileRoute("/pakistan-services/secp-registration")({
  head: () => ({
    meta: [
      { title: "SECP Company Registration in Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "Register your Pvt Ltd or SMC with SECP. Complete advocate-managed corporate registration, Memorandum & Articles drafting, FBR NTN setup, and corporate bank account guidance.",
      },
      {
        name: "keywords",
        content:
          "secp company registration pakistan cost, register private limited company smc, software house registration secp, company incorporation fee pakistan, corporate ntn fbr",
      },
      {
        property: "og:title",
        content: "SECP Company Registration in Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your Pvt Ltd or SMC with SECP. Complete advocate-managed corporate registration, Memorandum & Articles drafting, FBR NTN setup, and corporate bank account guidance.",
      },
      { property: "og:url", content: "/pakistan-services/secp-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/secp-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SecpRegistration,
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
            🇵🇰 PAKISTAN COMPANY REGISTRATION
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            SECP Company Registration
            <br />
            in Pakistan
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Form your Private Limited Company (Pvt Ltd) or Single Member Company (SMC) with the Securities and Exchange Commission of Pakistan. Complete registration, corporate bank accounts, and compliance setup — 100% managed by a licensed advocate.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start SECP Incorporation
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
              <Check size={16} className="text-gold-500" /> Drafted by Punjab Bar Council Advocate
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Corporate NTN FBR Registration
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Completed in 7–10 Working Days
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Remote Process
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
                What is SECP Company Registration?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Company incorporation under the Securities and Exchange Commission of Pakistan (SECP) is the process of registering a business as a corporate entity under the Companies Act 2017. Once registered, the business exists as a separate legal person, protecting the personal assets of the directors.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For Pakistani software houses, digital agencies, and tech setups, SECP registration is the first step toward corporate maturity. It allows you to legally lease offices, hire employees under corporate contracts, apply for PSEB registrations, and open business bank accounts to receive foreign client remittances securely.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Go Corporate?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Asset Protection:</strong> Directors enjoy limited liability, shielding personal wealth from corporate debts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Enterprise Contracts:</strong> Big international clients require a registered corporate entity before signing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Bank Remittances:</strong> Commercial banks process incoming remittances without flags if sent to corporate accounts.</span>
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
            Operating Without SECP Corporate Structure
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Running a growing software house or agency as an unregistered team carries heavy operational and legal risks.
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
                  Bank Remittance Holds
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Receiving thousands of dollars in foreign client payments into a personal bank account triggers automated SBP (State Bank of Pakistan) flags, leading to account freezes and verification delays.
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
                  FBR Scrutiny
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Unregistered businesses receiving foreign funds are highly vulnerable to FBR audits and tax compliance notices. They cannot prove their eligibility for the 100% IT export tax exemption.
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
                  Personal Liability Risk
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a corporate entity, you are personally liable for client disputes, contract breaches, and IP claims. Your home, savings, and assets are exposed.
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
      title: "Company Name Reservation",
      desc: "Checking database availability and clearing the proposed corporate name through the official SECP registrar.",
    },
    {
      title: "Memorandum of Association Drafting",
      desc: "Drafting the legal scope and objectives of the company, customized specifically for IT or software houses under advocate supervision.",
    },
    {
      title: "Articles of Association Drafting",
      desc: "Drafting internal corporate regulations, share structures, director roles, and voting rules in compliance with the Companies Act 2017.",
    },
    {
      title: "eZest Portal Submission",
      desc: "Managing the entire online filing process on the SECP eZest portal, including preparing Form 1, Form 29, and Form A.",
    },
    {
      title: "Certificate of Incorporation",
      desc: "Filing and collecting your official digitally signed Certificate of Incorporation, Memorandum, and Articles from SECP.",
    },
    {
      title: "Corporate FBR NTN Registration",
      desc: "Registering the new corporate entity for tax with FBR to obtain your company NTN number required for bank accounts.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our SECP Registration Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the paperwork, legal drafts, and filings. You receive a fully registered corporate entity.
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
            SECP Incorporation Packages
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Package 1: SMC */}
          <Reveal>
            <div className="bg-white border border-border p-8 rounded-2xl shadow-sm flex flex-col justify-between h-full relative">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">SOLO FOUNDERS</p>
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2">Single Member Company</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-navy-900">Rs. 30,000</span>
                  <span className="text-xs text-gray-500">+ government fee</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> SECP SMC-PVT Registration</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Memorandum & Articles of Association</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Corporate FBR NTN Setup</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Corporate Bank Account Guidance</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Order SMC — Rs. 30,000
              </Link>
            </div>
          </Reveal>

          {/* Package 2: PVT LTD */}
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                RECOMMENDED FOR PARTNERS
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">CO-FOUNDERS & TEAMS</p>
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2">Private Limited Company</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-navy-900">Rs. 40,000</span>
                  <span className="text-xs text-gray-500">+ government fee</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> SECP PVT LTD Registration (2+ partners)</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Custom share allocation drafting</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Corporate FBR NTN Setup</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Corporate Bank Account Guidance</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Order Pvt Ltd — Rs. 40,000
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
      title: "Name Availability",
      desc: "We check the SECP database and submit a reservation application for your company name.",
    },
    {
      title: "Legal Drafting",
      desc: "We draft the Memorandum and Articles of Association customized for your specific business object clauses.",
    },
    {
      title: "IRIS & SECP Filing",
      desc: "We file the incorporation documents on the SECP eZest portal and generate your official fee challan.",
    },
    {
      title: "Certificate Issued",
      desc: "Once the registration fee challan is paid, SECP registers your company and issues the incorporation certificate.",
    },
    {
      title: "NTN & Bank Account",
      desc: "We get your FBR corporate NTN and guide you on requirements to open Meezan/HBL corporate bank accounts.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Get You Setup
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A simple, legal, and completely remote process.
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
      title: "Pakistan NTN Registration",
      path: "/pakistan-services/ntn-registration",
      desc: "Get your business or individual NTN registered with FBR to secure active taxpayer status.",
    },
    {
      title: "PSEB Registration",
      path: "/pakistan-services/pseb-registration",
      desc: "Register your IT company with PSEB to secure 100% tax exemptions on export income.",
    },
    {
      title: "IT Export Tax Exemption",
      path: "/pakistan-services/pseb-registration",
      desc: "Formally claim your export tax exemption under Section 65F of the Income Tax Ordinance.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Pakistan Compliance Services
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
            READY TO SETUP?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Secure Your Corporate Status.
            <br />
            Register With SECP Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every day you operate without a formal corporate registry is a day your payment channels stay blocked, clients look elsewhere, and your personal assets remain exposed. We handle everything.
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
          <p className="mt-6 text-[13px] text-navy-200">
            Free initial consultation · Punjab Bar Council Licensed Advocate · Corporate Tax Attorney
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function SecpRegistration() {
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
