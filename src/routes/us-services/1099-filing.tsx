import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  Building2,
  Lock,
  Globe,
  Briefcase,
  Users,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a 1099-NEC form?",
    a: "Form 1099-NEC (Nonemployee Compensation) is an IRS form used to report payments made by a trade or business to independent contractors, freelancers, or sole proprietors. If your US LLC pays a US-based contractor $600 or more during the year, you must file this form.",
  },
  {
    q: "Who is required to file a 1099-NEC?",
    a: "Any US business entity, including foreign-owned single-member LLCs, that pays $600 or more in a calendar year for services to a non-employee (contractor) who is a US tax resident must file Form 1099-NEC.",
  },
  {
    q: "Do I need to issue a 1099 to foreign contractors (like someone in Pakistan)?",
    a: "No. You only issue 1099s to US persons (citizens, residents, or US entities). For foreign contractors performing work outside the US, you should collect a Form W-8BEN from them to prove they are not US tax residents, but you do not file a 1099 for them.",
  },
  {
    q: "What is the deadline to file 1099-NEC?",
    a: "The IRS deadline to file Form 1099-NEC and furnish a copy to the contractor is January 31st of the year following the payment year. Extensions are generally not granted for this form.",
  },
  {
    q: "What information do I need from my contractor to file?",
    a: "You need their legal name (or business name), their address, and their Taxpayer Identification Number (SSN or EIN). You should always request this information by having the contractor fill out a Form W-9 before you pay them.",
  },
  {
    q: "What happens if I don't file the 1099 forms?",
    a: "The IRS imposes steep penalties for failure to file informational returns. The penalty can range from $60 to $310 per form depending on how late it is, and can be even higher if the IRS determines the failure was intentional.",
  },
  {
    q: "Do I file 1099s if I paid the contractor via credit card or PayPal?",
    a: "Generally, no. If you paid the contractor via credit card, PayPal, or a third-party settlement organization, those platforms are responsible for issuing a Form 1099-K. You only issue a 1099-NEC for direct payments like wire transfers, ACH, cash, or checks.",
  },
  {
    q: "What is the difference between 1099-NEC and 1099-MISC?",
    a: "1099-NEC is specifically for reporting nonemployee compensation (freelance work). 1099-MISC is used for other types of miscellaneous income, such as rent payments, royalties, or prize winnings.",
  },
  {
    q: "I have a foreign-owned LLC. Do these rules apply to me?",
    a: "Yes. Even if you are a non-US resident owner of a Wyoming LLC and you don't owe US income tax yourself, your US LLC is still a US business entity and must comply with IRS reporting rules for payments made to US contractors.",
  },
  {
    q: "How does your service work?",
    a: "You provide us with the W-9s of your contractors and the total amount paid to each. We prepare the 1099-NEC forms, e-file them securely with the IRS, and email/mail the required copies to your contractors.",
  },
  {
    q: "Is the filing done electronically?",
    a: "Yes, we handle the mandatory e-filing with the IRS through authorized tax software, which is faster, more secure, and ensures you receive filing confirmations.",
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
  serviceType: "Tax Filing Service",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "1099-NEC & 1099-MISC Filing Services for US LLCs",
  description:
    "Keep your US LLC compliant by filing IRS 1099 forms for your independent contractors. We handle e-filing and contractor copy distribution.",
  areaServed: "United States",
  url: "https://[yourdomain.com]/us-services/1099-filing",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "Price per contractor for complete 1099 e-filing.",
  },
};

export const Route = createFileRoute("/us-services/1099-filing")({
  head: () => ({
    meta: [
      { title: "1099-NEC Filing Service for US LLCs | ADVAQ" },
      {
        name: "description",
        content:
          "Keep your US LLC compliant by filing IRS Form 1099-NEC for your US contractors. Prevent IRS penalties with our professional e-filing service.",
      },
      {
        name: "keywords",
        content:
          "1099-nec filing service, issue 1099 to contractors, us llc 1099 requirements, file 1099-misc, 1099 penalty, pakistani founders us llc 1099",
      },
      {
        property: "og:title",
        content: "1099-NEC Filing Service for US LLCs | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Keep your US LLC compliant by filing IRS Form 1099-NEC for your US contractors. Prevent IRS penalties with our professional e-filing service.",
      },
      { property: "og:url", content: "/us-services/1099-filing" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/1099-filing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: Form1099Filing,
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
            🧾 ANNUAL COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            1099-NEC IRS Filing
            <br />
            for US LLCs
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Did your US LLC pay $600 or more to a US contractor this year? Avoid severe IRS penalties. Let us e-file your 1099-NEC forms securely before the January 31st deadline.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File 1099s Now
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
              <Check size={16} className="text-gold-500" /> E-filed with the IRS
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Contractor Copies Distributed
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> $49 per Contractor
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
                The 1099 Requirement
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                If your US LLC hires US-based freelancers, agencies, consultants, or independent contractors and pays them $600 or more via bank transfer (ACH/Wire) during the calendar year, you are legally required to report these payments to the IRS.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                This is done using <strong className="font-semibold">Form 1099-NEC</strong> (Nonemployee Compensation). The purpose of this form is to inform the IRS about the contractor's income so the IRS can ensure they pay their taxes. As the business owner, the burden is on you to file this form on time, every year.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Important Rules</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Deadline:</strong> Must be filed by January 31st each year.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">W-9 Needed:</strong> You must collect a W-9 from contractors to get their SSN/EIN.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Foreign Contractors:</strong> You do NOT file 1099s for non-US contractors.</span>
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
            Skipping Your 1099 Filings
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            The IRS heavily enforces 1099 compliance. Ignoring this requirement exposes your LLC to direct financial penalties.
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
                  Hefty IRS Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Penalties range from $60 to $310 per unfiled 1099 form depending on how late you file. If the IRS determines "intentional disregard," the penalty jumps to a minimum of $630 per form with no maximum cap.
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
                  Audit Flags
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  When you file your annual tax returns and claim contractor expenses, the IRS expects to see matching 1099s. Discrepancies are a major red flag that can trigger a business audit.
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
                  Upset Contractors
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Your US contractors need the 1099 form from you to file their own personal tax returns on time. Failing to provide it creates friction and unprofessionalism with your US partners.
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
      title: "Data Verification",
      desc: "We review the W-9 forms and payment totals to ensure all required information is accurate before filing.",
    },
    {
      title: "IRS E-Filing",
      desc: "We electronically file the 1099-NEC forms directly with the IRS using authorized transmitter software.",
    },
    {
      title: "Contractor Distribution",
      desc: "We securely email the required Copy B of the 1099 form to your contractors so they can file their taxes.",
    },
    {
      title: "State Filing Coordination",
      desc: "If applicable, we ensure the information is routed to states participating in the Combined Federal/State Filing Program.",
    },
    {
      title: "Confirmation Records",
      desc: "We provide you with the IRS acceptance confirmation and PDF copies of all filed forms for your corporate records.",
    },
    {
      title: "1099-MISC Support",
      desc: "If you made payments for rent or royalties, we can also file Form 1099-MISC under the same service.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Hands-Off 1099 Processing
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Just give us the data. We handle the IRS portals and the contractor distribution.
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
            Pay Per Contractor
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Filing Fee
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">PER 1099 FORM FILED</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$49</span>
              <span className="text-sm text-gray-500">per contractor</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Flat rate includes IRS e-filing and distributing the form to the contractor via secure email. 
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>IRS E-filing included</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>PDF copies provided to you</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Contractor copies emailed</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Avoid late penalties and audit risks</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Start Filing
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
      title: "Submit Data",
      desc: "Send us the W-9 forms for your contractors and the total amount paid to each during the year.",
    },
    {
      title: "Data Verification",
      desc: "We verify the TIN and details to prevent IRS mismatches and errors.",
    },
    {
      title: "Draft Review",
      desc: "We prepare the forms and provide a summary for your final approval.",
    },
    {
      title: "IRS E-Filing",
      desc: "We transmit the forms electronically to the IRS system.",
    },
    {
      title: "Distribution",
      desc: "We send the finalized copies to your contractors and provide you the confirmation logs.",
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
            A simple process done well before the January 31st deadline.
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

/* ---------- SECTION 7: WHO NEEDS THIS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>APPLICABILITY</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Who Needs a 1099-NEC?
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            If your LLC paid $600 or more in the year, consider these categories.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Users className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Freelancers</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Web developers, designers, or writers based in the US who act as independent contractors for your LLC.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Service Agencies</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                US-based marketing agencies or consulting firms (unless they are registered as a C-Corp or S-Corp).
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Briefcase className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Professionals</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Attorneys, accountants, or registered agents that provided professional services to your business.
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
      title: "W-8/W-9 Assistance",
      path: "/us-services/w8-w9-assistance",
      desc: "Need to collect W-9s from your contractors or provide your own W-8BEN to platforms?",
    },
    {
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Start a US LLC the right way with complete setup and compliance.",
    },
    {
      title: "FinCEN BOI Reporting",
      path: "/us-services/boi-report",
      desc: "Ensure your LLC's ownership reporting is up to date to avoid federal penalties.",
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
            DEADLINE IS JANUARY 31ST
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Risk IRS Penalties.
            <br />
            File Your 1099s Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your US company and maintain professional relationships with your contractors. Let us handle the tax portals while you focus on business.
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
export default function Form1099Filing() {
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
