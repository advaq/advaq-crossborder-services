import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  Building2,
  Lock,
  Globe,
  FileText,
  Users,
  Briefcase,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is PAYE Registration?",
    a: "PAYE stands for Pay As You Earn. It is the system HMRC uses to collect Income Tax and National Insurance contributions (NICs) from employees' pay directly from their employer.",
  },
  {
    q: "Do I need to register for PAYE?",
    a: "You must register as an employer with HMRC if you intend to pay yourself (as a director) or any employees a salary that exceeds the Lower Earnings Limit (currently £123 per week), or if they have another job, or receive a pension.",
  },
  {
    q: "Can I take money out of my company without PAYE?",
    a: "You can take money out as dividends, but dividends can only be paid out of company profits. To pay a regular, tax-efficient director's salary as an expense before tax, you need a PAYE scheme.",
  },
  {
    q: "How long does it take to get the PAYE reference?",
    a: "HMRC normally processes PAYE registrations within 5 to 15 working days. You will receive your Employer PAYE Reference number and an Accounts Office reference.",
  },
  {
    q: "What is an Employer PAYE reference?",
    a: "It is a unique combination of letters and numbers (e.g., 123/AB456) used by HMRC to identify your business when you submit your payroll data and make tax payments.",
  },
  {
    q: "Does a non-resident director in Pakistan need PAYE?",
    a: "If a director lives and works entirely outside the UK (e.g., in Pakistan) and does not perform any duties in the UK, they generally do not need a UK PAYE scheme for their own salary. However, if the company hires UK-based staff, it must register.",
  },
  {
    q: "What happens after I register?",
    a: "Once registered, you must run payroll software to report your employees' pay, tax, and deductions to HMRC on or before each payday (Real Time Information - RTI).",
  },
  {
    q: "Can you run my payroll for me?",
    a: "Yes. Getting registered is the first step. Our team can also handle your monthly payroll processing, issuing payslips, and filing the mandatory RTI returns with HMRC.",
  },
  {
    q: "When should I register?",
    a: "You must register before the first payday. It can take up to 2 weeks to get your employer reference, so you should apply well in advance of paying your first salary.",
  },
  {
    q: "What happens if I miss the registration or filing?",
    a: "Failing to register or failing to report payroll via RTI on time will result in strict late filing penalties and interest charges from HMRC.",
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
  serviceType: "HMRC PAYE Registration",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "PAYE & Payroll Registration Service",
  description:
    "Register your UK Limited Company as an employer with HMRC for Pay As You Earn (PAYE). Essential for hiring staff or paying tax-efficient director salaries.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/uk-services/paye-payroll-registration",
  offers: {
    "@type": "Offer",
    price: "79.00",
    priceCurrency: "GBP",
    description: "One-time fee for official HMRC PAYE Employer registration.",
  },
};

export const Route = createFileRoute("/uk-services/paye-payroll-registration")({
  head: () => ({
    meta: [
      { title: "PAYE & Payroll Registration Service | ADVAQ" },
      {
        name: "description",
        content:
          "Register your UK Company as an employer with HMRC for PAYE. Mandatory for paying staff or processing director salaries. Fast and compliant setup.",
      },
      {
        name: "keywords",
        content:
          "uk paye registration, register as employer hmrc, paye scheme setup, director salary uk company, hmrc employer reference",
      },
      {
        property: "og:title",
        content: "PAYE & Payroll Registration Service | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Register your UK Company as an employer with HMRC for PAYE. Mandatory for paying staff or processing director salaries.",
      },
      { property: "og:url", content: "/uk-services/paye-payroll-registration" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services/paye-payroll-registration" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: PayeRegistration,
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
            🇬🇧 HR & COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            HMRC PAYE Registration
            <br />
            for Employers
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Officially register your UK Limited Company as an employer with HMRC. Required to legally pay yourself a director's salary or hire UK-based staff.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Register for PAYE
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
              <Check size={16} className="text-gold-500" /> Employer Reference Sourced
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Director Salary Setup
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> HMRC Compliant
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
                What is a PAYE Scheme?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Pay As You Earn (PAYE) is HMRC's system for collecting Income Tax and National Insurance contributions directly from paychecks. To run a payroll—whether for yourself as the director or for employees—your company must first register as an official employer.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Once registered, HMRC issues an Employer Reference Number (ERN) and an Accounts Office reference. You will need these to use payroll software and submit your mandatory Real Time Information (RTI) returns every time you pay staff.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Users size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">When is it required?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Director Salaries:** To legally extract money as a salary rather than purely dividends.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Hiring Staff:** If you employ staff earning over £123/week.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Pensioners/Second Jobs:** If any employee has another job or receives a pension.</span>
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
            The Danger of Unregistered Payroll
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Paying yourself or staff without an official PAYE scheme leads to severe legal and financial consequences.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Illegal Payments
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Transferring money from your company to individuals as a "salary" without running it through an RTI-compliant PAYE scheme is tax evasion in the eyes of HMRC.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Severe Penalties
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                HMRC issues strict monthly penalties for failing to report payroll data on time. If you haven't registered, you literally cannot file the required data, triggering automatic fines.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Lost Tax Efficiency
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                A properly structured director's salary run through PAYE is an allowable business expense that reduces your Corporation Tax. Without PAYE, you lose this benefit.
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
      title: "HMRC Employer Registration",
      desc: "We submit the official application to register your Limited Company as an employer with HMRC.",
    },
    {
      title: "Reference Number Procurement",
      desc: "We secure your Employer PAYE Reference and Accounts Office Reference directly from the tax authorities.",
    },
    {
      title: "Scheme Optimization",
      desc: "Advice on structuring director salaries optimally within tax-free allowances to save on Corporation Tax.",
    },
    {
      title: "Deadline Management",
      desc: "Ensuring the application is processed well ahead of your first intended payday.",
    },
    {
      title: "HMRC Liaison",
      desc: "Handling any queries HMRC might have regarding your application, saving you hours on the phone.",
    },
    {
      title: "Payroll Software Setup Prep",
      desc: "Providing you with the exact credentials needed to plug into modern payroll software like Xero or BrightPay.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Complete PAYE Setup
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We handle the bureaucracy so you can legally start paying your team.
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
              Setup Fee
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">HMRC EMPLOYER REGISTRATION</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">£79</span>
              <span className="text-sm text-gray-500">flat fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              A single payment to activate your PAYE scheme and acquire your employer references.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation and filing of employer application</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Securing Employer PAYE Reference</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Securing Accounts Office Reference</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Basic consultation on director salary structure</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Register Scheme — £79
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
      title: "Data Gathering",
      desc: "Provide details about your business, the number of employees, and the date of your first payday.",
    },
    {
      title: "Application Prep",
      desc: "We prepare the necessary forms ensuring all criteria match HMRC requirements.",
    },
    {
      title: "Submission",
      desc: "The application is submitted directly to HMRC's employer registration portal.",
    },
    {
      title: "Processing",
      desc: "HMRC processes the application, typically taking 5 to 15 working days.",
    },
    {
      title: "Activation",
      desc: "You receive your reference numbers and can immediately begin running compliant payroll.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            How Registration Works
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A fast, straightforward path to becoming a legal UK employer.
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
          <SectionLabel center>WHY IT MATTERS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            The Power of Payroll
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            A PAYE scheme unlocks structural benefits for your company.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Tax Efficiency</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Paying a director's salary up to the primary threshold is an allowable expense, saving 19-25% in Corporation Tax compared to taking purely dividends.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Briefcase className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Scale Your Team</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                You cannot legally hire staff in the UK without this scheme in place. It is the foundational requirement for building a local workforce.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Pension Access</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                A registered payroll allows you to set up a workplace pension scheme, offering further tax-advantaged ways to extract company profits.
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
      title: "HMRC Self Assessment",
      path: "/uk-services/self-assessment",
      desc: "Report your salary and dividend income on your personal tax return.",
    },
    {
      title: "UTR Registration",
      path: "/uk-services/utr-registration",
      desc: "Ensure your company is registered for Corporation Tax.",
    },
    {
      title: "UK LTD Formation",
      path: "/uk-services/ltd-formation",
      desc: "Form your company first before setting up payroll.",
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
            READY TO HIRE?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Set Up Your PAYE Scheme Today.
            <br />
            Pay Staff and Directors Legally.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Don't risk illegal payments or late penalties. Let us handle the HMRC registration so you can focus on building your team and running your business.
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
            Employer Reference Setup · HMRC Compliance · Fast Processing
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function PayeRegistration() {
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
