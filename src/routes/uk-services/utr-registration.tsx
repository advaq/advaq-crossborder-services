import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  AlertTriangle,
  Building2,
  Lock,
  Globe,
  FileText,
  Calculator,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a UTR number?",
    a: "UTR stands for Unique Taxpayer Reference. It is a 10-digit number issued by Her Majesty's Revenue and Customs (HMRC) to identify individual taxpayers and companies in the UK for tax purposes.",
  },
  {
    q: "Why does my UK Company need a UTR?",
    a: "Your company needs a Corporation Tax UTR to file its annual company tax returns, pay Corporation Tax, and communicate officially with HMRC regarding company financial matters.",
  },
  {
    q: "Is a Company UTR different from a Personal UTR?",
    a: "Yes. A Company UTR is for the Limited Company's Corporation Tax. A Personal UTR is for an individual's Self Assessment tax return. Both are 10 digits but relate to entirely different entities.",
  },
  {
    q: "When should I register for a Company UTR?",
    a: "HMRC requires you to register your company for Corporation Tax (which triggers the issuance of your UTR) within 3 months of starting to do business. However, we recommend registering immediately upon incorporation to avoid late penalties.",
  },
  {
    q: "How long does it take to get the UTR?",
    a: "Once we submit the registration to HMRC, it typically takes 2-3 weeks for HMRC to process the application and post the official UTR letter to your registered office address.",
  },
  {
    q: "Where is the UTR sent?",
    a: "HMRC will only send the official UTR letter via physical post to your company's Registered Office Address. If you use our Registered Office Address service, we will scan and email it to you the day it arrives.",
  },
  {
    q: "What if I lose my UTR number?",
    a: "If you lose it, you can request a reminder from HMRC online. They will post it again to your registered office address. It cannot be given out over the phone for security reasons.",
  },
  {
    q: "Do I need a UTR to open a business bank account?",
    a: "Some digital banks like Wise or traditional high-street banks may ask for your company UTR as part of their compliance and 'Know Your Business' (KYB) checks.",
  },
  {
    q: "What happens if I don't register?",
    a: "Failing to register for Corporation Tax within the statutory deadline can result in financial penalties from HMRC and prevents you from legally filing your required tax returns.",
  },
  {
    q: "Can you help me file my Corporation Tax return once I have my UTR?",
    a: "Yes, once your company reaches its financial year-end, our accounting team can prepare and file your annual accounts and Corporation Tax return using your UTR.",
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
  serviceType: "HMRC UTR Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Company UTR Registration Service",
  description:
    "Official HMRC Corporation Tax registration to secure your company's 10-digit Unique Taxpayer Reference (UTR) number. Guaranteed compliance within the legal 3-month deadline.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uk-services/utr-registration",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "GBP",
    description: "One-time fee for official HMRC Corporation Tax and UTR registration.",
  },
};

export const Route = createFileRoute("/uk-services/utr-registration")({
  head: () => ({
    meta: [
      { title: "Company UTR Registration Service | ADVAQ" },
      {
        name: "description",
        content:
          "Register your UK Limited Company for Corporation Tax with HMRC and secure your 10-digit UTR number. Quick processing and full compliance.",
      },
      {
        name: "keywords",
        content:
          "uk company utr, hmrc corporation tax registration, unique taxpayer reference uk, apply for company utr number, utr for pakistani resident",
      },
      {
        property: "og:title",
        content: "Company UTR Registration Service | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your UK Limited Company for Corporation Tax with HMRC and secure your 10-digit UTR number.",
      },
      { property: "og:url", content: "/uk-services/utr-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/utr-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: UtrRegistration,
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
            🇬🇧 HMRC COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Company UTR Registration
            <br />
            for Corporation Tax
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your 10-digit Unique Taxpayer Reference (UTR) from HMRC. Mandatory for all UK Limited Companies within 3 months of starting trading. Let us handle the filing securely.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Get Your UTR Now
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
              <Check size={16} className="text-gold-500" /> Direct HMRC Filing
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Avoid Late Penalties
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Guaranteed Compliance
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
                What is a Company UTR?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Unique Taxpayer Reference (UTR) is a 10-digit number that HMRC uses to identify your company for all tax-related matters. It is essentially your company's tax ID in the UK.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                While Companies House gives you a Company Registration Number (CRN) when you form the company, HMRC requires you to officially register for Corporation Tax to generate your UTR. Without it, you cannot legally file your end-of-year accounts or pay corporate taxes.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Calculator size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Do You Need It?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">File Tax Returns:</strong> Mandatory for submitting your CT600 Corporation Tax return.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Bank Accounts:</strong> Often requested by digital banks for KYC/KYB compliance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">HMRC Communication:</strong> Required for any correspondence with the tax authority.</span>
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
            The Danger of Not Registering
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            HMRC imposes strict deadlines and penalties for failing to register your company for Corporation Tax.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Statutory Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  By law, you must register within 3 months of doing business. Missing this deadline results in automatic financial penalties applied by HMRC directly to your company.
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
                  Filing Blocks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  You cannot file your year-end accounts without a UTR. This creates a domino effect where you miss your tax filing deadline, incurring even more substantial late filing penalties.
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
                  If your business bank requests your UTR to verify your tax status and you cannot provide it, they may freeze or close your corporate accounts to comply with anti-money laundering laws.
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
      title: "HMRC Registration Filing",
      desc: "We manually prepare and submit the necessary forms to HMRC to activate your company's Corporation Tax record.",
    },
    {
      title: "Deadline Management",
      desc: "We ensure your application is submitted well within the statutory 3-month deadline to avoid any penalties.",
    },
    {
      title: "Document Tracking",
      desc: "We monitor the dispatch of your official UTR letter from HMRC to your registered office.",
    },
    {
      title: "Digital Delivery",
      desc: "If using our address service, we immediately scan and securely email the 10-digit UTR directly to you.",
    },
    {
      title: "Compliance Checking",
      desc: "We verify that all director and company details match the Companies House registry to prevent HMRC rejections.",
    },
    {
      title: "Future Filing Setup",
      desc: "Having your UTR ready means our accounting team can seamlessly handle your year-end tax returns when the time comes.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Complete UTR Processing
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A hassle-free service to ensure your UK LTD is fully registered with the tax authorities.
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
            One-Time Registration Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              One-Off Payment
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">HMRC UTR REGISTRATION</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£49</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              A single payment to handle the paperwork, submission, and tracking with HMRC.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation and filing of HMRC application</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Avoidance of late registration penalties</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Secure digital delivery of your UTR number</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Expert review of company details before submission</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Register for UTR — £49
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
      desc: "Provide us with your company name, CRN, and director details.",
    },
    {
      title: "Form Preparation",
      desc: "Our agents prepare the official Corporation Tax registration forms.",
    },
    {
      title: "HMRC Submission",
      desc: "We submit the application directly to HMRC via secure channels.",
    },
    {
      title: "HMRC Processing",
      desc: "HMRC takes 2-3 weeks to process the request and generate the number.",
    },
    {
      title: "Delivery",
      desc: "HMRC posts the letter to your registered address. We scan and email it to you.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Get Your UTR
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A precise, managed process to ensure accurate filing.
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

/* ---------- SECTION 7: BANKING PARTNERS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>CORPORATE COMPLIANCE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Why UTR Matters for Business
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            It's not just a tax number; it's proof of your company's active status.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">HMRC Standing</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                A UTR proves your company is legally registered for tax in the UK, a requirement for long-term operational health and avoiding forced closure.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Financial Audits</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                You need a UTR to interact with accountants, file your year-end CT600, and ensure all corporate profits are legally declared and taxed correctly.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Banking Security</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Modern digital banks require tax identifiers to comply with global financial regulations (like CRS/FATCA). The UTR satisfies these requirements.
              </p>
            </div>
          </Reveal>
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
      title: "Annual Accounts Filing",
      path: "/uk-services/annual-accounts",
      desc: "Use your UTR to file your mandatory year-end accounts and tax returns.",
    },
    {
      title: "Registered Office Address",
      path: "/uk-services/registered-office-address",
      desc: "Ensure you have a reliable UK address to receive your official HMRC UTR letter.",
    },
    {
      title: "VAT Registration",
      path: "/uk-services/vat-registration",
      desc: "Register for Value Added Tax if your business turnover requires it.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related UK Compliance Services
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
            DON'T MISS THE DEADLINE
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Secure Your Company UTR Today.
            <br />
            Stay Compliant with HMRC.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Avoid unnecessary penalties. Let our experts handle the HMRC registration so you can focus on growing your business globally.
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
            Guaranteed Filing within Deadlines · Official HMRC Processing · Direct Support
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function UtrRegistration() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <BankingIntegrations />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
