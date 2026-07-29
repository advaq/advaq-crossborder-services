import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Calculator,
  Receipt,
  TrendingUp,
  Percent,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is Small Business Relief in the UAE Corporate Tax regime?",
    a: "Small Business Relief (SBR) is a special provision under the UAE Corporate Tax Law designed to reduce the compliance burden for startups and SMEs. If a resident company's gross revenue in a relevant tax period and all previous tax periods does not exceed AED 3 Million, it can elect to be treated as having no taxable income (effectively paying 0% tax).",
  },
  {
    q: "Who is eligible for Small Business Relief?",
    a: "Any UAE resident taxable person—including mainland and freezone companies—whose gross revenue (sales) is AED 3 Million or below for the tax period and previous periods, until December 31, 2026. Free Zone companies that elect to be 'Qualifying Free Zone Persons' and members of Multinational Enterprises (MNEs) are not eligible.",
  },
  {
    q: "Do I still need to register for Corporate Tax if I qualify for SBR?",
    a: "Yes. All UAE businesses must register for Corporate Tax and obtain a Tax Registration Number (TRN), regardless of their revenue or whether they intend to claim Small Business Relief.",
  },
  {
    q: "Do I still need to file a tax return if I claim SBR?",
    a: "Yes. Small Business Relief is not automatic. You must formally elect to apply for it by filing a simplified Corporate Tax return at the end of your financial year, declaring your revenue and confirming your election for the relief.",
  },
  {
    q: "What happens if my revenue exceeds AED 3 Million in a year?",
    a: "If your revenue exceeds AED 3 Million in any tax period, you lose eligibility for Small Business Relief for that period and all subsequent periods. You will then be subject to the standard 9% Corporate Tax on net taxable profit exceeding AED 375,000.",
  },
  {
    q: "Is Small Business Relief based on revenue or profit?",
    a: "It is based strictly on Gross Revenue (total sales/turnover), not net profit. Even if your net profit is low, if your total gross revenue exceeds AED 3 Million, you cannot claim this relief.",
  },
  {
    q: "Can I claim SBR if I am a Free Zone company?",
    a: "Yes, a Free Zone company can claim SBR. However, doing so means you cannot simultaneously be treated as a Qualifying Free Zone Person (which offers a 0% rate indefinitely on qualifying income). SBR is temporary and simpler, while QFZP status is permanent but complex.",
  },
  {
    q: "How long is Small Business Relief available?",
    a: "Currently, the UAE Ministry of Finance has stated that Small Business Relief is available for tax periods starting on or after June 1, 2023, and ending on or before December 31, 2026.",
  },
  {
    q: "Can I carry forward tax losses while claiming SBR?",
    a: "No. For any tax period where you elect for Small Business Relief, you cannot carry forward tax losses incurred in that period, nor can you carry forward net interest expenditure.",
  },
  {
    q: "Do I need audited financial statements to claim SBR?",
    a: "Generally, no. The FTA does not mandate audited financial statements for businesses claiming SBR. However, you must maintain proper financial records and evidence (like bank statements and invoices) to prove your revenue did not exceed AED 3 Million.",
  },
  {
    q: "Can I artificially split my business to stay under AED 3 Million?",
    a: "No. The Federal Tax Authority has strict General Anti-Abuse Rules (GAAR). Artificially separating a business into multiple entities solely to stay below the AED 3 Million threshold is illegal and will incur severe penalties.",
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
  serviceType: "UAE Corporate Tax Small Business Relief Election",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UAE Small Business Relief Assessment & Filing",
  description:
    "Claim 0% corporate tax legally. Professional assessment and election for the UAE Small Business Relief scheme for businesses under AED 3M revenue.",
  areaServed: "United Arab Emirates",
  url: "https://[yourdomain.com]/uae-services/small-business-relief",
  offers: {
    "@type": "Offer",
    price: "999.00",
    priceCurrency: "AED",
    description: "Professional fee to assess and formally file the Small Business Relief election.",
  },
};

export const Route = createFileRoute("/uae-services/small-business-relief")({
  head: () => ({
    meta: [
      { title: "UAE Small Business Relief | ADVAQ" },
      {
        name: "description",
        content:
          "Claim 0% UAE Corporate Tax. We handle your Small Business Relief assessment and formal election with the FTA for revenues under AED 3 Million.",
      },
      {
        name: "keywords",
        content:
          "small business relief uae, uae corporate tax 0%, sbr corporate tax, fta small business relief, corporate tax exemption dubai",
      },
      {
        property: "og:title",
        content: "UAE Small Business Relief | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Claim 0% UAE Corporate Tax. We handle your Small Business Relief assessment and formal election with the FTA.",
      },
      { property: "og:url", content: "/uae-services/small-business-relief" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services/small-business-relief" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SmallBusinessRelief,
});

function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">
            🇦🇪 TAX EXEMPTION ELECTION
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Small Business Relief (SBR)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Does your company make under AED 3 Million in revenue? Legally bypass the 9% Corporate Tax by having us formally elect the Small Business Relief on your behalf.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Claim 0% Tax Relief
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
              <Check size={16} className="text-gold-500" /> Pay 0% Corporate Tax
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Simplified FTA Compliance
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> No Complex Audits Required
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Formal EmaraTax Election
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>THE ESSENTIALS</SectionLabel>
              <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
                What is Small Business Relief?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Small Business Relief is a generous incentive by the UAE government to support startups and SMEs. It allows resident companies with gross revenues below AED 3 Million to elect to be treated as having ZERO taxable income. This means you owe exactly AED 0 in Corporate Tax, regardless of your profit margins.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                However, this relief is not applied automatically. Businesses must maintain appropriate financial records, properly classify their revenue under FTA guidelines, and formally file a tax return electing this relief. Failure to actively claim it will default your company to standard tax rules, exposing you to the 9% rate and complex transfer pricing compliance.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Percent size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Claim SBR?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Absolute 0% Tax:</strong> Completely bypass the 9% tax on profits.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Simplified Compliance:</strong> Exempt from complex transfer pricing rules.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Lower Costs:</strong> Avoid the need for expensive, audited IFRS financial statements.</span>
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

function TheDanger() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE RISK</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Pitfalls of Improper Election
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Missing the deadline or miscalculating your revenue can cost you your 0% tax status.
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
                  Failing to Elect
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Assuming you don't need to file because your revenue is small is a critical mistake. If you don't formally elect SBR by the filing deadline, you face standard tax laws and penalties.
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
                  Revenue Miscalculation
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Incorrectly excluding certain income streams (like capital gains or side income) could push your actual revenue over AED 3M, making an SBR claim fraudulent and heavily penalized.
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
                  Freezone Conflicts
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Claiming SBR restricts Freezone companies from claiming Qualifying Freezone status for the year. This requires strategic planning to choose the most beneficial path.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatIsIncluded() {
  const inclusions = [
    {
      title: "Revenue Assessment",
      desc: "Careful calculation of your gross revenue in accordance with FTA definitions to ensure it stays below AED 3M.",
    },
    {
      title: "Strategic Advisory",
      desc: "Guiding Freezone entities on whether SBR or Qualifying Free Zone Person (QFZP) status is more advantageous.",
    },
    {
      title: "Tax Registration Verification",
      desc: "Ensuring your TRN is active and your EmaraTax portal is prepared for the election.",
    },
    {
      title: "Return Preparation",
      desc: "Drafting the simplified corporate tax return specifying the SBR election.",
    },
    {
      title: "FTA Submission",
      desc: "Formally filing the election via the EmaraTax portal before the corporate tax deadline.",
    },
    {
      title: "Documentation Advisory",
      desc: "Advising you on the exact bank statements and invoices to retain to defend your 0% status in an audit.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our SBR Election Process
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We ensure you safely and legally lock in your 0% corporate tax rate.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <TrendingUp className="text-gold-500 mb-4" size={24} />
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

function Pricing() {
  return (
    <section className="bg-off-white py-24 border-y border-border">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            One-Time Election Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Annual Filing
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">SMALL BUSINESS RELIEF</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">AED 999</span>
              <span className="text-sm text-gray-500">/ year</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Flat rate for assessing revenue eligibility and filing the simplified Corporate Tax return.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Eligibility confirmation based on FTA rules</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Strategic advice for Freezone vs SBR</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation and filing of CT return</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Confirmation of 0% tax assessment</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — AED 999
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSteps() {
  const steps = [
    {
      title: "Provide Records",
      desc: "Share your business bank statements and invoices for the tax year.",
    },
    {
      title: "Eligibility Check",
      desc: "We calculate total gross revenue to definitively ensure it is below the AED 3M threshold.",
    },
    {
      title: "Strategic Review",
      desc: "We verify if this is the most tax-efficient route for your specific business setup.",
    },
    {
      title: "Drafting",
      desc: "We draft the simplified tax return and officially elect the Small Business Relief clause.",
    },
    {
      title: "Filing & Zero Tax",
      desc: "We submit the return, securing your AED 0 corporate tax liability for the year.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Claim Your Relief
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A fast, legally binding process to secure your tax exemption.
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

function RelatedServices() {
  const services = [
    {
      title: "Corporate Tax Registration",
      path: "/uae-services/corporate-tax-registration",
      desc: "Mandatory first step: Get your Corporate Tax Registration Number (TRN) to file.",
    },
    {
      title: "Corporate Tax Return Filing",
      path: "/uae-services/corporate-tax-return-filing",
      desc: "Standard CT filing for businesses exceeding the AED 3M revenue threshold.",
    },
    {
      title: "Freezone Company Formation",
      path: "/uae-services/freezone-company-formation",
      desc: "Setup your company correctly to ensure you are eligible for maximum tax reliefs.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Compliance Services
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

function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            CLAIM YOUR RELIEF
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Overpay on Corporate Tax.
            <br />
            File Your SBR Election Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Relief is not automatic. Failing to elect for it means defaulting to a 9% tax rate. We handle the assessment and filing to legally zero your tax bill.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Secure 0% Tax Status →
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
            Professional Assessment · FTA Compliant · Fast Turnaround
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function SmallBusinessRelief() {
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
