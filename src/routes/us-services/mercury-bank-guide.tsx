import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Building2,
  Globe,
  Landmark,
  FileCheck,
  XOctagon,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is Mercury Bank?",
    a: "Mercury is a financial technology company (not a bank itself) that provides banking services backed by Choice Financial Group and Evolve Bank & Trust. It is the premier choice for tech startups and US LLCs owned by non-US residents due to its lack of monthly fees, remote account opening, and modern API.",
  },
  {
    q: "Can non-US residents open a Mercury account?",
    a: "Yes. Mercury explicitly supports US companies (like a Wyoming LLC) owned entirely by non-US residents, provided the business meets their compliance standards and is not engaged in prohibited industries or located in sanctioned countries.",
  },
  {
    q: "What documents are required for Mercury?",
    a: "You need your LLC's Articles of Organization, the IRS CP-575 EIN confirmation letter, a valid passport for the owner(s), a utility bill or bank statement for proof of address, and a documented online presence (like a professional website or Upwork profile).",
  },
  {
    q: "Why do Mercury applications get rejected?",
    a: "Rejections typically happen because the business model is unclear, the website looks like a template/scam, the industry is unsupported (e.g., adult, crypto, gambling), or the founder's identity/address verification failed. Poorly formatted applications are flagged instantly by their compliance AI.",
  },
  {
    q: "Can you guarantee account opening?",
    a: "No one can guarantee account approval, as the final decision rests strictly with Mercury's compliance and banking partners. However, our guidance drastically increases your approval odds by ensuring your application is structured exactly how their compliance teams want to see it.",
  },
  {
    q: "If I was rejected before, can I apply again?",
    a: "It is extremely difficult to overturn a rejection. If you've been rejected, we can evaluate why it happened. In some cases, we can help you apply to alternative digital banks (like Relay or Wise) instead, as Mercury rarely allows appeals.",
  },
  {
    q: "Does Mercury require a US phone number or US IP address?",
    a: "While you don't strictly need a US IP, using a VPN can sometimes flag the application as suspicious. Mercury prefers you apply from your actual location. A US phone number is helpful but generally not a strict blocking requirement.",
  },
  {
    q: "What is included in this guide service?",
    a: "We review your business model, verify your LLC documents, audit your website for trust signals, and walk you through exactly what to write in the Mercury application form regarding your business activities and expected transaction volumes.",
  },
  {
    q: "Does Mercury have minimum balance requirements?",
    a: "No. Mercury does not have minimum balance requirements, monthly account fees, or hidden overdraft fees. It is ideal for bootstrapped startups and freelancers.",
  },
  {
    q: "How long does Mercury take to approve an account?",
    a: "If your application is clean and well-prepared, approval can take anywhere from 1 to 5 business days. Complex businesses may require additional manual review.",
  },
  {
    q: "Can I receive international wire transfers with Mercury?",
    a: "Yes, Mercury provides a routing number and account number capable of receiving domestic ACH, domestic wires, and international SWIFT wires in USD.",
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
  serviceType: "Business Consulting",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Mercury Bank Account Opening Guide for Non-US Residents",
  description:
    "Professional guidance to successfully open a Mercury US business bank account for your LLC. Includes document review, website audit, and application strategy.",
  areaServed: "Global",
  url: "https://[yourdomain.com]/us-services/mercury-bank-guide",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "One-time consulting fee for Mercury application preparation.",
  },
};

export const Route = createFileRoute("/us-services/mercury-bank-guide")({
  head: () => ({
    meta: [
      { title: "Mercury Bank Account Opening Guide | ADVAQ" },
      {
        name: "description",
        content:
          "Open a Mercury US business bank account as a non-US resident. Get professional guidance, document review, and website auditing to prevent rejection.",
      },
      {
        name: "keywords",
        content:
          "open mercury bank account non us resident, mercury business bank account, mercury bank pakistani founders, mercury bank us llc, mercury rejected how to reapply",
      },
      {
        property: "og:title",
        content: "Mercury Bank Account Opening Guide | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Open a Mercury US business bank account as a non-US resident. Get professional guidance, document review, and website auditing to prevent rejection.",
      },
      { property: "og:url", content: "/us-services/mercury-bank-guide" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/mercury-bank-guide" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: MercuryBankGuide,
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
            🏦 US BUSINESS BANKING
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Mercury Bank Account
            <br />
            Opening Guidance
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Don't let a poorly prepared application get your US LLC permanently blacklisted. We review your documents, website, and business plan to secure your Mercury account approval.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Get Application Help
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
              <Check size={16} className="text-gold-500" /> Document Verification
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Website Compliance Audit
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Business Plan Formatting
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
                The Mercury Advantage
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Mercury is a financial technology platform that provides banking services for US companies. It has become the gold standard for global entrepreneurs and non-US residents because it allows completely remote account opening and has zero monthly fees.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                However, because of strict US anti-money laundering (AML) and KYC regulations, Mercury's compliance teams are incredibly strict. A simple discrepancy in your application, an unclear business model, or an unprofessional website will result in an immediate and irreversible rejection.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Landmark size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Mercury?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Remote Opening:</strong> No US travel or US visa required.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Zero Fees:</strong> No monthly minimums, maintenance fees, or overdraft charges.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">API & Cards:</strong> Virtual/physical debit cards and powerful software integrations.</span>
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

/* ---------- SECTION 3: THE RISK ---------- */
function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Danger of Winging It
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Mercury doesn't offer second chances. If your application fails their risk assessment, you will not get an account.
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
                  Permanent Bans
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Mercury rarely accepts appeals. If you are rejected due to a poorly explained business model, your LLC and personal identity will be blacklisted from their platform indefinitely.
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
                  Website Red Flags
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Applying with a template website, missing Terms & Conditions, placeholder text, or an unclear value proposition signals high risk and fraud to compliance officers.
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
                  Document Discrepancies
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If the address on your utility bill doesn't exactly match your passport or your application inputs, the automated KYC systems will auto-reject your file.
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
      title: "Document Review",
      desc: "We thoroughly review your LLC formation documents, EIN letter, and identity proofs for consistency.",
    },
    {
      title: "Website Compliance Audit",
      desc: "We analyze your website to ensure it clearly explains your services and contains required legal footers.",
    },
    {
      title: "Business Description",
      desc: "We help you draft a clear, concise, and low-risk description of your business model for the application.",
    },
    {
      title: "Questionnaire Strategy",
      desc: "Guidance on how to answer questions about expected wire volumes, geographies, and client types.",
    },
    {
      title: "Alternative Planning",
      desc: "If your business falls in a high-risk category for Mercury, we advise you before you burn the application.",
    },
    {
      title: "Ongoing Support",
      desc: "Assistance if Mercury compliance requests additional information or clarification during processing.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Application Preparation
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We structure your profile to make it easy for compliance officers to say yes.
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
            Consultation Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Bank Setup Guide
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ONE-TIME FEE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$49</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Complete review of your business presence and step-by-step guidance for the Mercury application.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Document verification (LLC, EIN, KYC)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Website and online presence audit</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Business description drafting</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Application submission walkthrough</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — $49
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
      title: "Intake",
      desc: "Provide us with your LLC documents, website link, and ID proofs via our secure portal.",
    },
    {
      title: "The Audit",
      desc: "We review your materials to identify any red flags that Mercury compliance would reject.",
    },
    {
      title: "Corrections",
      desc: "You make the necessary tweaks to your website or address proofs based on our findings.",
    },
    {
      title: "Preparation",
      desc: "We help you draft the exact answers for the business model questions in the application.",
    },
    {
      title: "Submission",
      desc: "You submit the application confidently. We stand by if they request follow-up info.",
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
            Preparation is the key to banking approval.
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
          <SectionLabel center>ALTERNATIVES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Other Banking Options
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            If Mercury isn't a fit for your specific business model, we also guide on alternatives.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Relay Financial</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                An excellent alternative to Mercury with multi-account support and strong integration with accounting platforms. Great for e-commerce.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Wise Business</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                The best option for receiving international currencies and managing FX conversions with transparent, mid-market rates.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileCheck className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Payoneer</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                A solid backup option for freelancers and Amazon sellers needing a US receiving account quickly, though with higher fees.
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
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Don't have a US company yet? We form your LLC and provide the documents Mercury requires.",
    },
    {
      title: "US EIN Registration",
      path: "/us-services/ein-registration",
      desc: "Mercury requires an official CP-575 EIN confirmation letter. We secure this from the IRS.",
    },
    {
      title: "1099-NEC Filing",
      path: "/us-services/1099-filing",
      desc: "Use your new bank account to pay contractors? We'll file the required 1099s for you.",
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
            GET APPROVED ON THE FIRST TRY
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Unlock US Banking.
            <br />
            Apply with Confidence.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure your business plan, website, and documents meet Mercury's strict compliance standards before you hit submit.
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
export default function MercuryBankGuide() {
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
