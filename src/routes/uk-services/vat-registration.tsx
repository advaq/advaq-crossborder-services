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
  Percent,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is UK VAT Registration?",
    a: "Value Added Tax (VAT) is a tax added to most products and services sold by VAT-registered businesses in the UK. Registering gives you a VAT number to charge tax on your invoices and reclaim tax on your business expenses.",
  },
  {
    q: "Is VAT registration mandatory for my UK LTD?",
    a: "It becomes mandatory only if your VAT-taxable turnover (sales) exceeds £90,000 in a rolling 12-month period, or if you expect it to exceed £90,000 in the next 30 days. Otherwise, registration is purely voluntary.",
  },
  {
    q: "Why would I register voluntarily if my turnover is below £90,000?",
    a: "Voluntary registration allows you to reclaim VAT paid on business expenses. It also gives your company a more established, corporate image, as many large enterprises prefer or require dealing with VAT-registered suppliers.",
  },
  {
    q: "How long does it take HMRC to issue a VAT number?",
    a: "Once the application is submitted, it typically takes HMRC between 20 to 40 working days to process the application and issue your official VAT Registration Number and Certificate.",
  },
  {
    q: "Can non-UK residents (e.g., Pakistani citizens) get a UK VAT number?",
    a: "Yes. Non-resident directors of UK Limited Companies can register for VAT. However, HMRC often performs stricter compliance checks, which we help you navigate by preparing a robust application.",
  },
  {
    q: "What is a NETP (Non-Established Taxable Person)?",
    a: "If your company does not have a physical business establishment in the UK (a registered office alone does not count), it may be classed as an NETP. NETPs have a zero VAT threshold for UK taxable supplies and must register immediately if they sell locally.",
  },
  {
    q: "What documents are required to apply for VAT?",
    a: "HMRC usually requires proof of identity (Passport/CNIC), proof of address, evidence of your business activities (like contracts, invoices, or a website), and details of your business bank account.",
  },
  {
    q: "Do I have to file returns once registered?",
    a: "Yes. Once you have a VAT number, you must keep digital records and file VAT Returns to HMRC, usually every 3 months (quarterly), even if you have no VAT to pay or reclaim.",
  },
  {
    q: "What happens if I delay mandatory registration?",
    a: "If you exceed the £90,000 threshold and fail to register within 30 days, HMRC will penalize you. You will owe the VAT you should have charged from the date you were required to register, plus potential surcharge penalties.",
  },
  {
    q: "Can you help me file the quarterly VAT returns?",
    a: "Yes, our accounting department offers ongoing VAT return preparation and filing services to ensure you remain fully compliant with Making Tax Digital (MTD) rules.",
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
  serviceType: "UK VAT Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "UK VAT Registration Service",
  description:
    "Professional Value Added Tax (VAT) registration with HMRC for UK Limited Companies. Essential for businesses exceeding the £90k threshold or seeking corporate credibility.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uk-services/vat-registration",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "GBP",
    description: "Comprehensive HMRC VAT Registration application service.",
  },
};

export const Route = createFileRoute("/uk-services/vat-registration")({
  head: () => ({
    meta: [
      { title: "UK VAT Registration Service | ADVAQ" },
      {
        name: "description",
        content:
          "Register your UK LTD for Value Added Tax (VAT) with HMRC. Mandatory for turnovers over £90k, or voluntary for reclaiming expenses and building trust.",
      },
      {
        name: "keywords",
        content:
          "uk vat registration, hmrc vat number, register for vat uk company, voluntary vat registration, mandatory vat threshold, netp vat registration",
      },
      {
        property: "og:title",
        content: "UK VAT Registration Service | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your UK LTD for Value Added Tax (VAT) with HMRC. Full application management for non-resident directors.",
      },
      { property: "og:url", content: "/uk-services/vat-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/vat-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: VatRegistration,
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
            UK VAT Registration
            <br />
            for Limited Companies
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your official Value Added Tax (VAT) number from HMRC. Whether mandatory due to turnover or voluntary for corporate credibility, we handle the complex application process for you.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Start Application
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
              <Check size={16} className="text-gold-500" /> Expert Application Prep
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Non-Resident Support
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> HMRC Query Handling
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
                What is VAT Registration?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Value Added Tax (VAT) is a consumption tax added to most goods and services in the UK. When you register, HMRC issues a unique VAT Number. You then charge VAT on your sales and can reclaim VAT on your business expenses.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Registration is legally required if your taxable turnover hits £90,000 over a 12-month period. However, many businesses register voluntarily early on to reclaim startup expenses and project a larger, more established corporate image to B2B clients.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Percent size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Registration Triggers</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Mandatory Threshold:</strong> Your sales exceed £90k in a rolling 12 months.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">Voluntary Reclaim:</strong> Register to recover VAT paid on software, ads, and expenses.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="text-white font-semibold">NETP Status:</strong> Non-Established Taxable Persons selling locally have no threshold.</span>
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
            The Danger of Getting it Wrong
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            VAT is one of HMRC's most heavily audited taxes. Mistakes in registration or ignoring thresholds can severely damage your business.
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
                  Late Registration Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you miss the mandatory 30-day window after hitting the £90k threshold, HMRC will charge a penalty based on the VAT due, plus you must pay the VAT out of your own pocket.
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
                  Application Rejection
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  HMRC actively flags applications from non-UK residents for fraud checks. Incomplete or contradictory answers in your application will result in swift rejection.
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
                  Lost Revenue
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a VAT number, you cannot reclaim the 20% tax you pay on business services, SaaS tools, and local advertising, eating directly into your profit margins.
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
      title: "Comprehensive Assessment",
      desc: "We analyze your business activities, turnover, and structure to determine your precise VAT liability and scheme.",
    },
    {
      title: "Form Preparation",
      desc: "Expert drafting of the HMRC VAT registration application, ensuring all questions regarding non-resident directors are answered correctly.",
    },
    {
      title: "HMRC Liaison",
      desc: "We act as your intermediary. If HMRC raises additional questionnaires or demands proof of trade, we handle the correspondence.",
    },
    {
      title: "Scheme Selection",
      desc: "Advice on whether standard accounting, cash accounting, or the flat rate scheme is most beneficial for your business.",
    },
    {
      title: "Certificate Delivery",
      desc: "Secure delivery of your official VAT Registration Certificate containing your VAT number.",
    },
    {
      title: "MTD Guidance",
      desc: "Basic guidance on setting up Making Tax Digital (MTD) compliant software for your ongoing quarterly returns.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Expert VAT Application Setup
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We navigate the complex HMRC compliance checks so you get approved smoothly.
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
              Full Service
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">HMRC VAT REGISTRATION</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£149</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Comprehensive filing and handling of HMRC queries for non-resident directors.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Thorough assessment of VAT requirements</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation and submission to HMRC</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Handling of HMRC follow-up questionnaires</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>VAT Scheme consultation</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Registration — £149
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
      title: "Consultation",
      desc: "We assess your business activity to ensure VAT registration is necessary or beneficial.",
    },
    {
      title: "Document Collation",
      desc: "Gathering proof of identity, business activity, and financial data required by HMRC.",
    },
    {
      title: "Filing",
      desc: "Our team drafts and submits the detailed online application to HMRC.",
    },
    {
      title: "HMRC Review",
      desc: "HMRC processes the application (20-40 days) and may issue security questionnaires, which we answer.",
    },
    {
      title: "Certificate Issued",
      desc: "You receive your official VAT number and can begin charging and reclaiming VAT.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How We Get Your VAT Number
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A structured process to satisfy HMRC compliance checks.
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
          <SectionLabel center>BUSINESS IMPACT</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Why VAT Matters
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            VAT registration fundamentally changes how you interact with clients and suppliers.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Corporate Image</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Displaying a VAT number on your invoices signals to larger corporations that you are an established, substantial business.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Expense Recovery</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Reclaim the 20% VAT you pay on business expenses like laptops, software subscriptions, AWS hosting, and professional services.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Legal Necessity</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If your sales trajectory is high, early registration prevents nasty surprises, backdated tax bills, and severe HMRC penalties.
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
      desc: "Complete your corporate tax filings alongside your quarterly VAT returns.",
    },
    {
      title: "UTR Registration",
      path: "/uk-services/utr-registration",
      desc: "Ensure your company has its Corporation Tax ID established.",
    },
    {
      title: "Registered Office Address",
      path: "/uk-services/registered-office-address",
      desc: "A stable UK address is mandatory for successful HMRC registrations.",
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
              <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <Link
                  to="/uk-services"
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
            PROFESSIONALIZE YOUR BUSINESS
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Need a UK VAT Number?
            <br />
            Let the Experts Handle HMRC.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            VAT applications for non-resident directors require precision to avoid rejection. Our team manages the complexity from start to finish.
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
            Full Compliance · Questionnaire Handling · Expert Advice
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function VatRegistration() {
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
