import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Printer,
  FileSignature,
  FileCheck2,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an EIN?",
    a: "An EIN (Employer Identification Number) is a 9-digit tax ID assigned by the IRS to identify a business entity operating in the US. It is required to open a US business bank account, hire employees, and file taxes.",
  },
  {
    q: "Do I need an SSN or ITIN to get an EIN?",
    a: "No. Non-US residents without a Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN) can absolutely still obtain an EIN for their US company. We handle this specialized application process.",
  },
  {
    q: "How long does it take for non-US residents to get an EIN?",
    a: "Because non-US residents cannot apply online, we must file Form SS-4 via fax. The IRS typically processes faxed EIN applications in 10 to 15 business days, though exact times vary based on IRS backlog.",
  },
  {
    q: "Can I open a US business bank account with just an EIN?",
    a: "Yes. To open accounts with platforms like Mercury, Wise Business, or traditional US banks, you need your approved LLC documents and your official EIN confirmation letter (CP 575) from the IRS.",
  },
  {
    q: "What is a CP 575 letter?",
    a: "The CP 575 is the official confirmation letter issued by the IRS when they assign an EIN. It serves as permanent proof of your tax ID and is highly requested by banks and merchant processors like Stripe.",
  },
  {
    q: "Do I have to pay US taxes if I have an EIN?",
    a: "Having an EIN does not automatically mean you owe US income tax. If you are a non-US resident running a single-member LLC with no physical presence in the US, you typically do not owe US taxes, but you still need an EIN to report to the IRS (Form 5472).",
  },
  {
    q: "Can I apply for an EIN myself?",
    a: "You can, but the process for foreign applicants is complex and requires international calling or faxing the IRS, answering technical entity classification questions on Form SS-4, and waiting on hold. We ensure it's done correctly the first time.",
  },
  {
    q: "Does an EIN expire?",
    a: "No, an EIN never expires. Once the IRS issues an EIN to your business, it remains associated with that entity forever.",
  },
  {
    q: "Can I use the same EIN for multiple businesses?",
    a: "No. Each separate legal entity (like a distinct LLC or Corporation) must have its own unique EIN.",
  },
  {
    q: "What if I lose my EIN?",
    a: "If you lose your CP 575, you can request an EIN Verification Letter (147C) from the IRS by calling their business specialty tax line. However, keeping the original CP 575 secure is highly recommended.",
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
  serviceType: "IRS EIN Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "IRS EIN Tax ID Registration for Non-US Residents",
  description:
    "Obtain your IRS Employer Identification Number (EIN) as a non-US resident. Required for US bank accounts, Stripe, and Amazon.",
  areaServed: "Global",
  url: "https://[yourdomain.com]/us-services/ein-registration",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    description: "One-time fee for IRS Form SS-4 filing and EIN retrieval.",
  },
};

export const Route = createFileRoute("/us-services/ein-registration")({
  head: () => ({
    meta: [
      { title: "IRS EIN Registration for Non-Residents | ADVAQ" },
      {
        name: "description",
        content:
          "Get your US business Tax ID (EIN) from the IRS as a non-US resident. No SSN required. Unlock US banking, Stripe, and global payments.",
      },
      {
        name: "keywords",
        content:
          "ein registration, us ein for non residents, apply for ein without ssn, irs form ss-4 fax filing, cp 575 letter, us tax id",
      },
      {
        property: "og:title",
        content: "IRS EIN Registration for Non-Residents | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Get your US business Tax ID (EIN) from the IRS as a non-US resident. No SSN required. Unlock US banking, Stripe, and global payments.",
      },
      { property: "og:url", content: "/us-services/ein-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/ein-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: EinRegistrationService,
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
            🇺🇸 IRS TAX ID SERVICES
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            IRS EIN Registration
            <br />
            for Non-US Residents
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Obtain your official Employer Identification Number from the IRS without an SSN or ITIN. The key to opening US business bank accounts and processing payments globally.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Apply for EIN Now
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
              <Check size={16} className="text-gold-500" /> No SSN Required
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Direct IRS Fax Filing
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> CP 575 Delivery
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
                What is an EIN?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                An Employer Identification Number (EIN) is a unique 9-digit tax ID assigned to your business by the United States Internal Revenue Service (IRS). Think of it as the Social Security Number for your company.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                While US citizens can get an EIN online in minutes, foreign founders without an SSN must go through a manual paper/fax process (Form SS-4). We specialize in preparing, submitting, and tracking this application to get your official CP 575 letter smoothly.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <FileText size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Do You Need It?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Business Banking:</strong> Mercury, Wise, and Payoneer require it.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Payment Gateways:</strong> Essential for US Stripe, PayPal, and Square.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">US Compliance:</strong> Required to file mandatory annual IRS forms.</span>
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
            DIY Application Pitfalls
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Navigating the IRS bureaucracy from overseas is notoriously difficult and error-prone.
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
                  Form Errors
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Incorrectly checking the wrong LLC entity classification box on Form SS-4 can trigger incorrect tax statuses, leading to audits or unexpected tax liabilities.
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
                  Lost Applications
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Mailing forms internationally often results in lost documents. Even standard online fax services sometimes fail IRS secure transmission checks, leaving you waiting indefinitely.
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
                  Delayed Business
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without an EIN, your LLC is completely paralyzed. You cannot open a bank account or accept payments. Delays in processing directly translate to lost revenue.
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
      title: "SS-4 Preparation",
      desc: "We expertly prepare your IRS Form SS-4, ensuring all entity classifications and foreign owner sections are correct.",
    },
    {
      title: "Third-Party Designee",
      desc: "We act as your Third-Party Designee, allowing us to communicate directly with the IRS on your behalf.",
    },
    {
      title: "Secure Fax Filing",
      desc: "We transmit your application directly to the IRS dedicated EIN fax line for foreign applicants.",
    },
    {
      title: "IRS Follow-ups",
      desc: "If there are delays, we handle the international calls to the IRS to track your application status.",
    },
    {
      title: "CP 575 Delivery",
      desc: "Once assigned, we receive and securely digitize your official CP 575 EIN confirmation letter.",
    },
    {
      title: "Free Replacement",
      desc: "If the IRS ever loses your initial application, we refile it entirely free of charge.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Done-For-You Registration
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We bypass the headaches and handle the entire IRS interaction.
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
            One-Time Setup Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              EIN Registration
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">FOREIGN APPLICANT PROCESSING</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$89</span>
              <span className="text-sm text-gray-500">one time</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Guaranteed EIN delivery for your US LLC or Corporation. No hidden fees.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Form SS-4 drafting & review</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Priority IRS fax submission</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>IRS communications management</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Digital delivery of CP 575</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Get Your EIN — $89
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
      desc: "You provide your approved LLC Articles of Organization and owner details.",
    },
    {
      title: "Form Prep",
      desc: "We prepare Form SS-4 and send it to you for a quick digital signature.",
    },
    {
      title: "IRS Submission",
      desc: "We fax the signed application to the dedicated IRS foreign operations queue.",
    },
    {
      title: "IRS Processing",
      desc: "We wait 10-15 business days for the IRS to process the application and assign the number.",
    },
    {
      title: "Delivery",
      desc: "The IRS faxes back the CP 575 confirmation, and we immediately deliver it to you.",
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
            A streamlined process to navigate the IRS bureaucracy.
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
function SpecialSection() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>CRITICAL DOCUMENTS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Understanding the Paperwork
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Demystifying the IRS forms involved in your application.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileSignature className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Form SS-4</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                The official application form for an EIN. It requires precise entity classification, responsible party information, and a physical signature.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Printer className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">CP 575 Notice</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                The golden ticket. This is the official letter the IRS sends back once your EIN is approved. Banks require this exact document.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileCheck2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Form 147C</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If you ever lose your CP 575 in the future, the IRS can issue a 147C Verification Letter as an official replacement upon request.
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
      desc: "If you don't have a company yet, our full formation package includes the EIN registration.",
    },
    {
      title: "FinCEN BOI Reporting",
      path: "/us-services/boi-report",
      desc: "After getting your EIN, you must file a BOI report within 90 days to avoid major federal penalties.",
    },
    {
      title: "IRS ITIN Application",
      path: "/us-services/itin-application",
      desc: "Get an Individual Taxpayer Identification Number if you need to file personal US taxes or use personal PayPal.",
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
              <div className="border border-border p-6 rounded-xl bg-white flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-dark-text">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <Link
                  to="/us-services"
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
            UNLOCK US BANKING
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Ready to get your EIN?
            <br />
            Let's start the application.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Stop waiting on hold with the IRS. We manage the entire fax filing process and deliver your CP 575 so you can focus on building your business.
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
export default function EinRegistrationService() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <SpecialSection />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
