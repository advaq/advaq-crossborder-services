import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  Scale,
  FileSearch,
  MessageSquareWarning,
  Gavel,
  Landmark,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an FTA Penalty Waiver?",
    a: "An FTA Penalty Waiver (or Reconsideration) is a formal legal appeal submitted to the UAE Federal Tax Authority requesting the reduction or complete cancellation of administrative fines imposed for tax violations.",
  },
  {
    q: "On what grounds can I appeal a tax penalty?",
    a: "Appeals are typically granted if you can prove reasonable excuse (e.g., system errors, medical emergencies of the business owner), incorrect assessment by the FTA, or if the penalty is disproportionate to the administrative error committed.",
  },
  {
    q: "What is the timeline to file a Reconsideration request?",
    a: "You must file a Reconsideration request within 40 business days from the date you were notified of the FTA's decision or penalty. Missing this deadline generally forfeits your right to appeal.",
  },
  {
    q: "Do I have to pay the penalty before appealing?",
    a: "For a Reconsideration, you generally do not need to pay the penalty first. However, if the Reconsideration is rejected and you escalate to the Tax Disputes Resolution Committee (TDRC), payment of the disputed tax (not necessarily the penalty) may be required.",
  },
  {
    q: "What happens if my Reconsideration request is rejected?",
    a: "If the FTA rejects your Reconsideration, we can escalate your case to the Tax Disputes Resolution Committee (TDRC) within 40 business days of the rejection notice.",
  },
  {
    q: "What documents are required to file a waiver?",
    a: "We require the official penalty notification, your Trade License, Emirates ID, relevant tax returns, and comprehensive evidence supporting your 'reasonable excuse' (such as hospital records, bank letters, or technical logs).",
  },
  {
    q: "Can you guarantee the penalty will be waived?",
    a: "No professional can guarantee the outcome of an FTA decision. However, our legal expertise ensures your appeal is drafted with the strongest possible legal arguments and supporting precedents to maximize your chances of success.",
  },
  {
    q: "How long does the FTA take to respond to a Reconsideration?",
    a: "The FTA typically takes up to 40 business days to review and issue a decision on a Reconsideration request.",
  },
  {
    q: "Are late registration penalties eligible for waivers?",
    a: "Yes. Penalties for late Corporate Tax or VAT registration (typically AED 10,000) are commonly appealed, especially if there was genuine confusion regarding the threshold or if the portal experienced documented technical issues.",
  },
  {
    q: "Why should I use ADVAQ instead of submitting it myself?",
    a: "Drafting a successful appeal requires deep knowledge of UAE Tax Law (Federal Decree-Law No. 47 of 2022 and No. 8 of 2017). As licensed advocates, we structure the appeal using correct legal terminology, statutory references, and dispute resolution precedents that ordinary submissions lack.",
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
  serviceType: "FTA Penalty Waiver and Reconsideration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE FTA Penalty Waiver Services",
  description:
    "Expert legal assistance to appeal and waive UAE Federal Tax Authority fines. Reconsideration requests for Corporate Tax and VAT penalties.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/fta-penalty-waiver",
  offers: {
    "@type": "Offer",
    price: "1499.00",
    priceCurrency: "AED",
    description: "Professional fee for drafting and filing an FTA Penalty Reconsideration request.",
  },
};

export const Route = createFileRoute("/uae-services/fta-penalty-waiver")({
  head: () => ({
    meta: [
      { title: "FTA Penalty Waiver & Reconsideration UAE | ADVAQ" },
      {
        name: "description",
        content:
          "Hit with an FTA penalty? We draft strong legal Reconsideration requests to waive UAE Corporate Tax and VAT fines. Professional appeal services for AED 1,499.",
      },
      {
        name: "keywords",
        content:
          "fta penalty waiver uae, uae corporate tax penalty reconsideration, vat fine appeal dubai, federal tax authority fines, tax dispute resolution uae",
      },
      {
        property: "og:title",
        content: "FTA Penalty Waiver & Reconsideration UAE | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Hit with an FTA penalty? We draft strong legal Reconsideration requests to waive UAE Corporate Tax and VAT fines. Professional appeal services for AED 1,499.",
      },
      { property: "og:url", content: "/uae-services/fta-penalty-waiver" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/fta-penalty-waiver" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: FTAPenaltyWaiver,
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
            ⚖️ TAX DISPUTE RESOLUTION
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            FTA Penalty Waiver & Reconsideration
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Have you been hit with an AED 10,000 late registration fine or VAT penalty? Our legal experts draft powerful Reconsideration requests to the Federal Tax Authority to waive your fines.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Appeal Your Penalty
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
              <Check size={16} className="text-gold-500" /> Legal Advocacy Approach
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Corporate Tax & VAT Appeals
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> English & Arabic Submissions
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Fast Turnaround Before Deadlines
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
                What is an FTA Reconsideration?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                When the UAE Federal Tax Authority (FTA) imposes an administrative penalty for late registration, late filing, or inaccurate tax declarations, you have the legal right to challenge it. This process is known as a Reconsideration request.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                A successful Reconsideration must be grounded in strong legal reasoning, citing specific articles of the UAE Tax Procedures Law. Simple apologies or pleas for forgiveness are systematically rejected. As legal advocates, we structure your appeal based on established legal precedents of "reasonable excuse" to maximize the probability of a penalty waiver.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Scale size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Valid Grounds for Appeal</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Technical Failures:** Documented errors on the EmaraTax portal preventing compliance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Force Majeure:** Severe illness of the sole owner or natural disasters preventing filing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Disproportionate Fines:** Where the penalty grossly outweighs the minor administrative error committed.</span>
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
            The Danger of Delaying Your Appeal
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The FTA enforces strict statutory deadlines. Ignoring a penalty or filing a weak appeal can have permanent consequences.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Missed 40-Day Deadline
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                You only have 40 business days from the date of the penalty notice to file a Reconsideration. Missing this deadline forfeits your right to appeal, making the fine permanently payable.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Compounding Fines
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Unpaid penalties for late tax payments can compound monthly. A minor fine can rapidly escalate to hundreds of thousands of Dirhams if left unchallenged and unpaid.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Amateur Submissions
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Submitting a one-paragraph emotional plea without legal backing results in automatic rejection. Once rejected, escalating to the TDRC becomes exponentially more expensive.
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
      icon: <FileSearch className="text-gold-500 mb-4" size={24} />,
      title: "Case Merit Assessment",
      desc: "We analyze your penalty notice and surrounding circumstances to determine the legal viability of an appeal.",
    },
    {
      icon: <Gavel className="text-gold-500 mb-4" size={24} />,
      title: "Legal Memorandum Drafting",
      desc: "Our advocates draft a formal legal memorandum citing relevant articles from the UAE Tax Procedures Law.",
    },
    {
      icon: <MessageSquareWarning className="text-gold-500 mb-4" size={24} />,
      title: "Arabic Translation",
      desc: "All Reconsideration requests are professionally translated and submitted in Arabic as mandated by the FTA.",
    },
    {
      icon: <Shield className="text-gold-500 mb-4" size={24} />,
      title: "Evidence Structuring",
      desc: "We help you compile, format, and present your evidence (medical reports, technical logs) to meet FTA evidentiary standards.",
    },
    {
      icon: <Landmark className="text-gold-500 mb-4" size={24} />,
      title: "EmaraTax Portal Submission",
      desc: "We handle the technical submission through your EmaraTax portal, ensuring all fields and attachments are flawless.",
    },
    {
      icon: <CheckCircle className="text-gold-500 mb-4" size={24} />,
      title: "Follow-up & Liaison",
      desc: "We monitor the status of your appeal and respond to any additional requests for information from FTA officers.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Penalty Waiver Package
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A robust, legally sound appeal designed to overturn administrative penalties.
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
            Reconsideration Filing Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Fixed Fee
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">LEGAL DRAFTING & SUBMISSION</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 1,499</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              A one-time professional fee for drafting the legal memorandum and managing the FTA portal submission.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Case analysis & evidence review</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Legal memorandum drafting (English & Arabic)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>EmaraTax portal filing execution</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Ongoing FTA follow-up until decision</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Your Appeal — AED 1,499
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
      title: "Notice Review",
      desc: "Send us your penalty notice. We assess the violation and confirm the 40-day deadline hasn't passed.",
    },
    {
      title: "Evidence Gathering",
      desc: "We instruct you on exactly what documents, logs, or proof we need to support the 'reasonable excuse'.",
    },
    {
      title: "Legal Drafting",
      desc: "Our advocates draft the Reconsideration memorandum in English, which is then legally translated to Arabic.",
    },
    {
      title: "FTA Submission",
      desc: "We submit the complete appeal package through your EmaraTax portal.",
    },
    {
      title: "Resolution",
      desc: "The FTA reviews the case (up to 40 business days) and issues a decision to waive, reduce, or uphold the fine.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Appeal Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Swift, decisive action before your legal deadline expires.
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
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Once your penalty is sorted, ensure you are properly registered to avoid future fines.",
    },
    {
      title: "Bookkeeping & Accounting",
      path: "/uae-services/bookkeeping",
      desc: "Maintain FTA-compliant records to defend against any future tax audits.",
    },
    {
      title: "Small Business Relief",
      path: "/uae-services/small-business-relief",
      desc: "Claim your 0% corporate tax exemption legally if your revenue is under AED 3 Million.",
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
            ACT BEFORE THE DEADLINE
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Pay Unjustified Tax Fines.
            <br />
            Appeal Your Penalty Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            You only have 40 business days to file a Reconsideration. Let our legal experts draft a robust appeal to waive your AED 10,000 late registration or VAT fines.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start Your Appeal →
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
            Legal Advocates · High Success Rate · Fast Turnaround
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function FTAPenaltyWaiver() {
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
