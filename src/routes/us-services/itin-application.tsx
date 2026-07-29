import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Landmark,
  CreditCard,
  BookOpen,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an ITIN?",
    a: "An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the IRS to individuals who are required to have a US taxpayer identification number but who do not have, and are not eligible to obtain, a Social Security Number (SSN).",
  },
  {
    q: "Why do I need an ITIN as a non-resident?",
    a: "You may need an ITIN if you are required to file a US federal tax return, claim a tax treaty benefit, open a personal US bank account, or if you earn income from US platforms like Amazon KDP, Upwork, or personal PayPal that withhold taxes.",
  },
  {
    q: "Do I need an ITIN to open a US LLC?",
    a: "No. You do not need an ITIN or SSN to form a US LLC or to obtain an EIN for your business. An ITIN is strictly for personal tax purposes, whereas an EIN is for business purposes.",
  },
  {
    q: "How long does it take to get an ITIN?",
    a: "The IRS typically takes 7 to 11 weeks to process an ITIN application (Form W-7). During peak tax season (January - April), it can take even longer.",
  },
  {
    q: "Do I have to mail my original physical passport to the IRS?",
    a: "Normally yes, but ADVAQ partners with IRS Certifying Acceptance Agents (CAAs). This allows us to certify your passport copy, meaning you do NOT have to mail your original, physical passport to the IRS.",
  },
  {
    q: "Can I open a personal US bank account with an ITIN?",
    a: "Yes. While a business bank account requires an EIN, opening a personal US bank account (or applying for certain US personal credit cards) often requires an ITIN if you don't have an SSN.",
  },
  {
    q: "Does getting an ITIN mean I have to pay US taxes?",
    a: "Not necessarily. An ITIN is just a processing number. Your tax liability depends on the source of your income and whether you are engaged in a US Trade or Business. However, an ITIN allows you to file returns to claim exemptions or treaty benefits.",
  },
  {
    q: "What is Form W-7?",
    a: "Form W-7 is the official IRS application form for the Individual Taxpayer Identification Number.",
  },
  {
    q: "How long is an ITIN valid?",
    a: "ITINs expire if they are not used on a federal tax return for three consecutive years. The IRS also periodically expires older ITINs based on their middle digits.",
  },
  {
    q: "Can I use an ITIN to work legally in the US?",
    a: "No. An ITIN does not authorize you to work in the US, nor does it provide eligibility for Social Security benefits or the Earned Income Tax Credit.",
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
  serviceType: "IRS ITIN Application",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "IRS ITIN Application Service (W-7)",
  description:
    "Apply for your IRS Individual Taxpayer Identification Number (ITIN). CAA certified, no need to mail original passports.",
  areaServed: "Global",
  url: "https://[yourdomain.com]/us-services/itin-application",
  offers: {
    "@type": "Offer",
    price: "299.00",
    priceCurrency: "USD",
    description: "Full service ITIN application including CAA certification and IRS submission.",
  },
};

export const Route = createFileRoute("/us-services/itin-application")({
  head: () => ({
    meta: [
      { title: "IRS ITIN Application Service | ADVAQ" },
      {
        name: "description",
        content:
          "Apply for your US ITIN (Individual Taxpayer Identification Number). Certified processing means you keep your original passport. Perfect for Amazon KDP & US Taxes.",
      },
      {
        name: "keywords",
        content:
          "itin application, w-7 form, irs itin, non resident tax id, amazon kdp tax, apply for itin online, certify passport itin",
      },
      {
        property: "og:title",
        content: "IRS ITIN Application Service | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Apply for your US ITIN (Individual Taxpayer Identification Number). Certified processing means you keep your original passport. Perfect for Amazon KDP & US Taxes.",
      },
      { property: "og:url", content: "/us-services/itin-application" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/itin-application" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: ItinApplicationService,
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
            🇺🇸 PERSONAL TAX IDENTITY
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            IRS ITIN Application
            <br />
            (Form W-7)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Get your Individual Taxpayer Identification Number. Essential for claiming tax treaty benefits, publishing on Amazon KDP, or opening personal US accounts. Keep your physical passport safe.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Apply For ITIN
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
              <Check size={16} className="text-gold-500" /> No Original Passport Mailing
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Form W-7 Preparation
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Claim Treaty Benefits
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
                What is an ITIN?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the IRS for non-residents who need a US taxpayer ID but are ineligible for a Social Security Number (SSN).
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                If you receive royalties from platforms like Amazon KDP, earn income that is subject to US withholding tax, or need to file a personal US tax return (1040-NR) to claim a refund, the IRS requires you to have an ITIN. It acts as your personal financial identifier within the US tax system.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <FileText size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Common Use Cases</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Tax Treaties:</strong> Claiming 0% withholding on royalties (Amazon/Upwork).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Personal Banking:</strong> Opening personal accounts or building US credit.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Tax Filing:</strong> Filing Form 1040-NR to report US-sourced income.</span>
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
          <SectionLabel center>THE CHALLENGE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            The Nightmare of W-7 Filings
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Applying for an ITIN on your own is one of the most notoriously difficult IRS processes for non-residents.
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
                  Mailing Your Passport
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you apply directly, the IRS legally requires you to mail your original, physical passport to Texas. It will be held for months, and occasionally, passports are lost in the mail.
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
                  High Rejection Rates
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Form W-7 requires you to cite specific exceptions, tax treaty articles, and attach supporting documentation. A single checked box error leads to an automatic 10-week rejection.
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
                  30% Withholding Loss
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without an ITIN, US platforms like Amazon will automatically withhold 30% of your earnings for taxes. Getting an ITIN is the only way to claim treaty benefits to reduce this to 0%.
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
      title: "CAA Network Processing",
      desc: "We process your application through our Certifying Acceptance Agent network, meaning you keep your original passport.",
    },
    {
      title: "W-7 Preparation",
      desc: "Expert drafting of your Form W-7, ensuring the correct reason codes and treaty articles are selected.",
    },
    {
      title: "Document Assembly",
      desc: "We compile the required supporting documentation, such as publisher letters or tax returns, to validate your need for an ITIN.",
    },
    {
      title: "Secure IRS Mailing",
      desc: "We physically mail the certified package to the specific IRS ITIN operations unit in Austin, Texas via tracked courier.",
    },
    {
      title: "IRS Monitoring",
      desc: "We monitor the application through the 7-11 week process and communicate with the IRS if issues arise.",
    },
    {
      title: "CP565 Delivery",
      desc: "Once issued, we receive your official CP565 ITIN Assignment Notice and deliver it digitally.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            A Better Way to Apply
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Protect your travel documents while we handle the IRS bureaucracy.
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
            All-Inclusive Filing
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Full Service
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ITIN APPLICATION PROCESS</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$229</span>
              <span className="text-sm text-gray-500">one time</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Includes passport certification so you do not mail your original ID to the IRS.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Form W-7 drafting & tax treaty mapping</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>CAA Passport Certification process</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Tracked courier mailing to IRS Austin</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Digital delivery of ITIN CP565 notice</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Application — $229
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
      title: "Intake & Reason",
      desc: "We collect your basic info and determine the precise IRS exception code required for your application.",
    },
    {
      title: "Video Verification",
      desc: "A brief video call is required by the IRS to verify your identity against your passport.",
    },
    {
      title: "Sign & Ship",
      desc: "You physically sign the W-7. We compile the certified package and courier it to the IRS.",
    },
    {
      title: "IRS Wait Time",
      desc: "The IRS manual processing queue takes 7 to 11 weeks. We track the status.",
    },
    {
      title: "Number Issued",
      desc: "The IRS assigns the number, mails the CP565 letter to our office, and we deliver it to you.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A compliant, guided process from start to finish.
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

/* ---------- SECTION 7: FEATURE HIGHLIGHTS ---------- */
function UseCases() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>PLATFORMS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Unlock Global Platforms
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            An ITIN clears compliance roadblocks across the creator and gig economy.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <BookOpen className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Amazon KDP</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Stop losing 30% of your book royalties to US tax withholding. Input your ITIN in the tax interview to claim tax treaty benefits.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Landmark className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Personal US Banking</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Some US banks allow non-residents to open personal checking accounts and begin building US credit profiles if they provide an ITIN.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <CreditCard className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">PayPal / Upwork</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Comply with platform KYC and tax documentation requests (Form W-8BEN) without triggering mandatory backup withholding.
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
      title: "US EIN Registration",
      path: "/us-services/ein-registration",
      desc: "Need a Tax ID for your business instead? Get an EIN to open Mercury and Stripe accounts.",
    },
    {
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Form a complete US corporate entity with zero state tax and maximum privacy.",
    },
    {
      title: "FinCEN BOI Reporting",
      path: "/us-services/boi-report",
      desc: "Mandatory federal filing for anyone who already owns a US LLC or Corporation.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related US Compliance Services
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
            CLAIM YOUR IDENTITY
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Stop Losing 30% to Taxes.
            <br />
            Apply For Your ITIN Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Let our professionals navigate the Form W-7 process. We keep your original passport safe while ensuring your application is accepted by the IRS.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Start ITIN Application →
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
export default function ItinApplicationService() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <UseCases />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
