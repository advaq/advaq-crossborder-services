import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  ShieldAlert,
  FileText,
  BadgeAlert,
  Gavel,
  ScrollText,
  AlertTriangle,
  Scale,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Why did I receive an FBR Notice?",
    a: "FBR issues notices for various reasons, including failure to file a tax return (Section 114), non-filing of wealth statement (Section 116), discrepancies in declared income versus actual assets, information required for an audit (Section 176), or default on advance tax payments.",
  },
  {
    q: "What should I do if I receive an FBR notice?",
    a: "Do not ignore it. Note the deadline mentioned in the notice, gather the requested documents (bank statements, property documents, etc.), and contact a tax lawyer immediately to draft a formal legal reply via the IRIS portal before the due date.",
  },
  {
    q: "What happens if I ignore an FBR notice?",
    a: "Ignoring an FBR notice leads to ex-parte (one-sided) assessment. FBR will assume maximum tax liability on your undeclared assets or transactions, levy heavy penalties, and potentially issue orders to freeze your bank accounts to recover the demanded tax.",
  },
  {
    q: "What is a Section 114(4) notice?",
    a: "A notice under Section 114(4) of the Income Tax Ordinance 2001 is issued when you were legally required to file a tax return but failed to do so. The notice formally directs you to file your return within a specified period.",
  },
  {
    q: "What is a Section 176 notice?",
    a: "A notice under Section 176 is an 'Information and Evidence' notice. The Commissioner of Inland Revenue uses this to demand specific documents, bank statements, or explanations regarding your financial transactions to verify tax compliance.",
  },
  {
    q: "What is an amendment of assessment notice under Section 122?",
    a: "Section 122 notices are issued when FBR believes your filed tax return contains errors, concealed income, or incorrect tax credits. It gives you an opportunity to explain your position before FBR amends your return and demands additional tax.",
  },
  {
    q: "Can I reply to an FBR notice myself?",
    a: "While technically possible, it is highly discouraged. FBR notices require replies grounded in specific sections of the Income Tax Ordinance and relevant case laws. Incorrectly phrased responses can be used against you to levy higher taxes.",
  },
  {
    q: "How much time do I have to respond to an FBR notice?",
    a: "The response deadline is always specified in the notice itself, usually ranging from 7 to 15 days. If you need more time, a formal application for an extension (adjournment) must be filed through the IRIS portal before the deadline expires.",
  },
  {
    q: "Will responding to the notice trigger an audit?",
    a: "Not necessarily. A well-drafted legal response with supporting documents often satisfies the assessing officer, leading to the notice being dropped. Ignoring it, however, almost guarantees an audit or default assessment.",
  },
  {
    q: "Can a penalty be waived if I respond?",
    a: "If the notice proposes a penalty, a strong legal defense explaining reasonable cause for default (e.g., severe illness, systemic IRIS failure) can convince the officer to waive or reduce the penalty under the law.",
  },
  {
    q: "FBR has frozen my bank account. Can you help?",
    a: "Yes. Once an account is frozen, we immediately file an appeal before the Commissioner Inland Revenue (Appeals) or the Appellate Tribunal, along with a stay application to unfreeze the account and challenge the underlying tax demand.",
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
  serviceType: "FBR Notice Legal Response",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "FBR Notice Reply and Appeal Services in Pakistan",
  description:
    "Expert legal responses to FBR IRIS notices (Section 114, 122, 176, etc). Defend against penalties, audits, and ex-parte assessments with our tax attorneys.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/fbr-notice-response",
  offers: {
    "@type": "Offer",
    price: "199.00",
    priceCurrency: "USD",
    description: "Professional fee for drafting and filing a legal response to an FBR notice.",
  },
};

export const Route = createFileRoute("/pakistan-services/fbr-notice-response")({
  head: () => ({
    meta: [
      { title: "FBR Notice Reply and Appeals in Pakistan | ADVAQ" },
      {
        name: "description",
        content:
          "Expert legal responses to FBR IRIS notices (Section 114, 122, 176, 182). Defend against penalties, audits, and tax demands with licensed tax attorneys in Pakistan.",
      },
      {
        name: "keywords",
        content:
          "fbr notice reply, section 114 fbr notice, section 176 notice, tax audit reply pakistan, fbr penalty defense, tax lawyer fbr, fbr iris notice",
      },
      {
        property: "og:title",
        content: "FBR Notice Reply and Appeals in Pakistan | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Expert legal responses to FBR IRIS notices. Defend against penalties, audits, and tax demands with licensed tax attorneys in Pakistan.",
      },
      { property: "og:url", content: "/pakistan-services/fbr-notice-response" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/fbr-notice-response" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: FBRNoticeResponse,
});

/* ---------- SECTION 1: HERO ---------- */
function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-red-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">
            🇵🇰 FBR LEGAL DEFENSE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            FBR Notice Response
            <br />
            & Tax Appeals
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Received a notice from the Federal Board of Revenue? Our licensed tax attorneys draft strong, law-backed responses to Section 114, 122, and 176 notices to protect your assets and prevent penalties.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Get Legal Defense
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
              <Check size={16} className="text-red-500" /> Drafted by Tax Attorneys
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-red-500" /> Prevent Bank Account Freezes
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-red-500" /> Resolve Penalties & Audits
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-red-500" /> Fast IRIS Submission
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
                Why Professional Responses Matter
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                An FBR notice is a formal legal query from the government demanding explanation, documentation, or tax payments. Replying to a notice is not a simple email response; it requires citing relevant sections of the Income Tax Ordinance, presenting factual evidence, and utilizing established case laws.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Attempting to handle notices yourself or ignoring them entirely gives the FBR Commissioner the legal right to pass an 'ex-parte' order. This means they will calculate your tax liability based on their own assumptions, which is always highly inflated, and proceed to recover it forcibly.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-red-500/20">
                  <Scale size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Common Notice Types</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Section 114 / 116:</strong> Notice to file missing income tax returns and wealth statements.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Section 176:</strong> Notice demanding specific information, bank records, or evidence of transactions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Section 122:</strong> Notice of amendment of assessment (audit findings and additional tax demands).</span>
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
            The Danger of Ignoring FBR
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The FBR system is automated. Missing the response deadline triggers severe enforcement actions automatically.
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
                  Bank Account Attachment
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  FBR has the statutory power to instruct your bank to freeze your accounts and directly withdraw funds to satisfy ex-parte tax demands.
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
                  Heavy Default Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Non-compliance with a notice invites additional penalties under Section 182, which compound rapidly for every day the default continues.
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
                  Prosecution & Arrest
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  In cases of severe deliberate concealment or persistent non-compliance, FBR can initiate criminal prosecution and issue arrest warrants for directors or individuals.
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
      title: "Notice Analysis",
      desc: "Detailed review of the FBR notice to understand the specific sections cited and the evidence demanded.",
    },
    {
      title: "Legal Drafting",
      desc: "Drafting a comprehensive, professional reply referencing the Income Tax Ordinance and relevant tribunal case laws.",
    },
    {
      title: "Evidence Preparation",
      desc: "Guiding you on assembling the correct bank statements, CPRs, and property documents to support your defense.",
    },
    {
      title: "IRIS Submission",
      desc: "Formally submitting the legal reply and attachments through the FBR IRIS e-portal before the deadline.",
    },
    {
      title: "Time Extensions",
      desc: "Filing legal adjournment applications if more time is required to gather complex historical documents.",
    },
    {
      title: "Officer Follow-up",
      desc: "Handling any subsequent queries or hearings with the assessing officer to ensure the notice is officially dropped.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Defense Strategy
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We provide an end-to-end legal shield against FBR actions, ensuring your rights are protected.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-red-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <CheckCircle className="text-red-500 mb-4" size={24} />
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
            Legal Defense Package
          </h2>
        </Reveal>

        <div className="max-w-lg mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-red-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(220,38,38,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                STANDARD NOTICE REPLY
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center mt-2">FOR INDIVIDUALS & COMPANIES</p>
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2 text-center">FBR Notice Response</h3>
                <div className="mt-4 flex justify-center items-baseline gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 15,000</span>
                  <span className="text-xs text-gray-500">/ notice</span>
                </div>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Complete legal analysis of the notice</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Drafting of statutory reply</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Document arrangement & evidence structuring</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> IRIS Portal e-filing</li>
                  <li className="flex items-center gap-2"><Check size={16} className="text-red-500" /> Notice closure tracking</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center !bg-navy-900 hover:!bg-navy-800"
              >
                Hire Legal Defense — Rs. 15,000
              </Link>
              <p className="text-[11px] text-gray-500 text-center mt-4">* Complex appellate tribunal cases may incur additional brief fees.</p>
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
      title: "Share the Notice",
      desc: "Send us a PDF or screenshot of the FBR notice you received via IRIS or mail.",
    },
    {
      title: "Legal Assessment",
      desc: "Our attorneys review the cited sections and identify the necessary defense evidence.",
    },
    {
      title: "Drafting Reply",
      desc: "We draft a formal response relying on facts, statutory exemptions, and case laws.",
    },
    {
      title: "Client Approval",
      desc: "You review the drafted response and the attached evidence before we proceed.",
    },
    {
      title: "IRIS Submission",
      desc: "We securely submit the reply via the FBR portal to halt further adverse action.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Immediate Response Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Time is critical. We act fast to secure your legal position.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          {steps.map((st, idx) => (
            <Reveal key={st.title}>
              <div className="text-center px-2">
                <div className="w-16 h-16 rounded-full border border-red-500 flex items-center justify-center mx-auto mb-4 bg-red-500/5">
                  <span className="font-serif text-2xl text-red-500">{idx + 1}</span>
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
        className="flex justify-between items-center w-full py-6 text-left text-lg font-medium text-white hover:text-red-500 transition-colors focus:outline-none"
      >
        <span className="pr-6">{q}</span>
        <ChevronDown
          size={20}
          className={`text-red-500 shrink-0 transform transition-transform duration-300 ${
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
      desc: "Prevent notices before they happen by filing your annual return correctly.",
    },
    {
      title: "Company Tax Return",
      path: "/pakistan-services/company-tax-return",
      desc: "Corporate compliance to avoid SECP and FBR default actions.",
    },
    {
      title: "IT Export Tax Exemption",
      path: "/pakistan-services/pseb-registration",
      desc: "Ensure your IT exemptions are legally grounded to survive audit scrutiny.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Preventative Tax Services
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
                  className="mt-6 inline-flex items-center gap-1.5 text-red-500 font-semibold text-xs uppercase tracking-widest hover:gap-2.5 transition-all"
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
          <p className="text-red-500 uppercase text-xs font-semibold tracking-[0.15em]">
            ACT IMMEDIATELY
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Deadlines Are Unforgiving.
            <br />
            Secure Your Defense Now.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every day you ignore an FBR notice brings you closer to frozen accounts and ex-parte assessments. Hand it over to our tax attorneys and get peace of mind.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm !bg-red-600 !text-white hover:!bg-red-700"
            >
              Submit Your Notice →
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              WhatsApp Urgent Response
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            Licensed Tax Attorneys · Urgent IRIS Appeals · Proven Defense Strategies
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function FBRNoticeResponse() {
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
