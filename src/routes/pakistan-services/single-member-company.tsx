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
  Lock,
  Globe,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Single Member Company (SMC)?",
    a: "An SMC is a type of Private Limited Company where a single individual acts as both the sole director and the sole shareholder. It offers limited liability protection and corporate credibility while allowing a solo entrepreneur to retain full control.",
  },
  {
    q: "Why should I choose an SMC over a Sole Proprietorship?",
    a: "An SMC is a legally distinct corporate entity recognized by the SECP. It protects your personal assets from business liabilities (limited liability), gives you a highly professional corporate image for B2B clients, and makes it easier to secure foreign remittances in corporate bank accounts.",
  },
  {
    q: "Can I convert my SMC into a standard Private Limited Company later?",
    a: "Yes. If you decide to take on partners or investors in the future, your SMC can be legally converted into a standard Private Limited Company by transferring shares and appointing new directors with SECP.",
  },
  {
    q: "What documents are required to register an SMC?",
    a: "We need a clear scan of your CNIC/Passport, your registered mobile number and email, 3 proposed company names, and the registered office address of the company.",
  },
  {
    q: "Do I need a partner to start an SMC?",
    a: "No, that is the main benefit of an SMC. You do not need a partner. You hold 100% of the shares and act as the sole director.",
  },
  {
    q: "What is the role of a Nominee Director in an SMC?",
    a: "SECP requires SMCs to nominate an individual (like a spouse, sibling, or parent) who will take over the shares and act as a temporary director in the event of the sole member's death. This ensures business continuity.",
  },
  {
    q: "How long does it take to register an SMC?",
    a: "The entire process, from name reservation to the issuance of the Certificate of Incorporation, typically takes 7 to 10 working days.",
  },
  {
    q: "What is the cost of SMC registration?",
    a: "Our professional fee for SMC registration is Rs. 30,000. This fee covers legal drafting, SECP filings, and NTN setup, but excludes the official government challan fees.",
  },
  {
    q: "What is the minimum capital required?",
    a: "There is no massive capital requirement. You can register an SMC with an authorized capital of Rs. 100,000. This minimizes your government registration fees.",
  },
  {
    q: "Will I get a corporate bank account with an SMC?",
    a: "Absolutely. With your SECP Incorporation Certificate and corporate NTN, you can open a corporate bank account at any commercial bank in Pakistan.",
  },
  {
    q: "Are there annual compliance requirements for an SMC?",
    a: "Yes. SMCs are required to file an annual return (Form A/29) with SECP and an annual corporate tax return with the FBR.",
  },
  {
    q: "Is an SMC suitable for an IT Export Business or Software House?",
    a: "Yes, it is highly recommended. Solo founders of software houses use SMCs to open corporate bank accounts, receive foreign IT remittances safely, and apply for PSEB registration to claim tax exemptions.",
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
  serviceType: "SMC Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Single Member Company (SMC) Registration Pakistan",
  description:
    "Register a Single Member Company (SMC) with SECP in Pakistan. Solo founder corporate structure, limited liability, and FBR NTN registration.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/single-member-company",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "USD",
    description: "SMC registration professional fee excluding SECP government fees.",
  },
};

export const Route = createFileRoute("/pakistan-services/single-member-company")({
  head: () => ({
    meta: [
      { title: "SMC Registration in Pakistan | Single Member Company | ADVAQ" },
      {
        name: "description",
        content:
          "Register a Single Member Company (SMC) with SECP. Perfect for solo entrepreneurs seeking limited liability. Complete legal setup for Rs. 30,000.",
      },
      {
        name: "keywords",
        content:
          "single member company pakistan, smc registration secp, solo founder secp, register smc cost pakistan, limited liability for one person",
      },
      {
        property: "og:title",
        content: "SMC Registration in Pakistan | Single Member Company | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register a Single Member Company (SMC) with SECP. Perfect for solo entrepreneurs seeking limited liability. Complete legal setup.",
      },
      { property: "og:url", content: "/pakistan-services/single-member-company" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/single-member-company" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SMCRegistration,
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
            🇵🇰 SOLO FOUNDER CORPORATE STRUCTURE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Single Member Company
            <br />
            Registration
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Protect your personal assets and gain corporate credibility without needing a partner. Register your SMC with the Securities and Exchange Commission of Pakistan (SECP).
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Register Your SMC
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
              <Check size={16} className="text-gold-500" /> 100% Ownership
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Limited Liability Protection
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Complete SECP Filing
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Corporate NTN Included
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
                What is an SMC?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Single Member Company (SMC) is a class of private limited company designed specifically for solo entrepreneurs. Under the Companies Act 2017, an SMC enjoys all the benefits of a corporate entity—including separate legal status and limited liability—while allowing one person to hold all shares and act as the sole director.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                This is the ultimate structure for successful freelancers, solo tech founders, and independent consultants who want to scale their operations, hire a formal workforce, and open corporate bank accounts without giving away equity.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Lock size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">SMC Advantages</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**No Partners Needed:** Retain 100% control of your business.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Asset Shielding:** Your personal savings and property are protected from corporate lawsuits.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Corporate Image:** Look established and trustworthy to international clients and B2B vendors.</span>
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
            Operating as a Solo Individual
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            If you are generating substantial revenue but remain unincorporated, you face several major bottlenecks.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Unlimited Liability
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                As a sole proprietor, you and your business are one entity. If your business fails or faces a lawsuit from a client, you are personally responsible for the debts.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Lost Enterprise Clients
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Large corporations, government agencies, and international enterprises often require a registered corporate entity (SMC/Pvt Ltd) to sign vendor contracts.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Payment Processing Issues
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Payment gateways like Stripe, PayPal (via proxies), or local banks scrutinize large transactions entering non-corporate accounts, frequently freezing funds.
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
      title: "Name Reservation",
      desc: "SECP database search and approval of your SMC name.",
    },
    {
      title: "Legal Documentation",
      desc: "Drafting the SMC-specific Memorandum and Articles of Association.",
    },
    {
      title: "Nominee Director Setup",
      desc: "Properly structuring the legally required nominee for your SMC.",
    },
    {
      title: "eZest Incorporation",
      desc: "End-to-end filing on the SECP portal and fee challan generation.",
    },
    {
      title: "SMC Certificate",
      desc: "Issuance of your official digitally signed Incorporation Certificate.",
    },
    {
      title: "Corporate NTN",
      desc: "FBR tax registration to secure your corporate NTN for banking.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our SMC Registration Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A fully managed process to transition you from a solo freelancer to a corporate director.
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
            SMC Registration Fee
          </h2>
        </Reveal>

        <div className="max-w-md mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                SOLO FOUNDERS
              </span>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-widest">SINGLE MEMBER COMPANY</p>
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 30,000</span>
                  <span className="text-xs text-gray-500">+ gov fee</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700 text-left">
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> SECP Name Reservation & Filing</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Mem & Arts of Association</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Form 1, Form 29 filings</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-gold-500" /> Corporate FBR NTN Registration</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Order SMC
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
      title: "Info Gathering",
      desc: "Share your CNIC, nominee details, and preferred company names.",
    },
    {
      title: "Drafting",
      desc: "Our advocates prepare the legal incorporation documents for your signature.",
    },
    {
      title: "SECP Filing",
      desc: "We submit the documents to SECP and generate the government fee challan.",
    },
    {
      title: "Incorporation",
      desc: "SECP approves the application and issues your official SMC certificate and NTN.",
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
      title: "SECP Pvt Ltd Registration",
      path: "/pakistan-services/secp-registration",
      desc: "Have partners? Register a standard Private Limited Company with multiple directors.",
    },
    {
      title: "PSEB Registration",
      path: "/pakistan-services/pseb-registration",
      desc: "Register your tech SMC with PSEB to claim your IT export tax exemptions.",
    },
    {
      title: "Trademark Registration",
      path: "/pakistan-services/trademark-registration",
      desc: "Protect your SMC's brand name, logo, and intellectual property across Pakistan.",
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
            READY TO SETUP?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Scale as a Solo Founder.
            <br />
            Incorporate Your SMC.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Gain the ultimate corporate advantage without sacrificing equity. Let our advocates handle your SECP registration perfectly.
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
export default function SMCRegistration() {
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
