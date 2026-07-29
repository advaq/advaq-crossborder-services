import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Building2,
  Lock,
  Globe,
  CreditCard,
  Coins,
  FileText,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an LLC Annual Report?",
    a: "An Annual Report is a mandatory yearly filing required by your LLC's state of formation (like Wyoming or Delaware) to keep your company information up to date and maintain its 'Good Standing' status.",
  },
  {
    q: "When is my Annual Report due?",
    a: "It depends on the state. In Wyoming, it is due on the first day of your anniversary month. For example, if you formed on June 15th, your report is due June 1st the following year. In Delaware, LLC taxes/reports are due June 1st every year.",
  },
  {
    q: "How much are the state fees?",
    a: "Wyoming charges a $60 minimum fee (plus online convenience fee). Delaware charges a flat $300 Franchise Tax. Our $99 service fee is in addition to the state's required filing fee.",
  },
  {
    q: "What happens if I forget to file?",
    a: "The state will initially impose late fees. If left unpaid, they will eventually dissolve (close) your company. This is called 'administrative dissolution' and it invalidates your LLC.",
  },
  {
    q: "Will this affect my US bank account?",
    a: "Yes. Banks like Mercury and payment processors like Stripe periodically check your company's state status. If your LLC is dissolved or not in good standing, they will freeze or close your accounts.",
  },
  {
    q: "Is this the same as my IRS tax return?",
    a: "No. The State Annual Report is filed with the state (e.g., Wyoming Secretary of State). IRS tax returns (like Form 5472 and 1120) are separate federal requirements filed with the federal government.",
  },
  {
    q: "Do I need a US Visa or SSN for this?",
    a: "No. Just like the initial formation, non-US residents from Pakistan do not need an SSN, ITIN, or US Visa to file their state annual report.",
  },
  {
    q: "Can you file this if someone else formed my LLC?",
    a: "Yes. We can file your Annual Report regardless of who initially formed your LLC. We just need your company name and state to locate your records.",
  },
  {
    q: "Do I need to report my revenue on the Wyoming Annual Report?",
    a: "For Wyoming, the fee is based on your assets located inside Wyoming. For remote e-commerce or freelance businesses operated from Pakistan, this is typically $0, meaning you just pay the $60 minimum.",
  },
  {
    q: "How long does the filing take?",
    a: "Once we have your details and payment, we typically file the report electronically within 1-2 business days. The state updates their records almost instantly.",
  }
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
  serviceType: "US LLC Annual Report Filing",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "US LLC State Annual Report Filing for Non-Residents",
  description:
    "Keep your US LLC in good standing. We file your state Annual Report (Wyoming, Delaware, etc.) for non-US residents and Pakistani founders.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/us-services/state-annual-report",
  offers: {
    "@type": "Offer",
    price: "149.00",
    priceCurrency: "USD",
    description: "Annual Report filing service fee (excluding state fees).",
  },
};

export const Route = createFileRoute("/us-services/state-annual-report")({
  head: () => ({
    meta: [
      { title: "US LLC Annual Report Filing Service | ADVAQ" },
      {
        name: "description",
        content:
          "Maintain your US LLC's Good Standing status. We file your mandatory State Annual Report quickly and securely.",
      },
      {
        name: "keywords",
        content:
          "wyoming annual report, delaware franchise tax, llc annual report filing, us company renewal, good standing certificate",
      },
      {
        property: "og:title",
        content: "US LLC Annual Report Filing Service | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Maintain your US LLC's Good Standing status. We file your mandatory State Annual Report quickly and securely.",
      },
      { property: "og:url", content: "/us-services/state-annual-report" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/state-annual-report" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: StateAnnualReport,
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
            🇺🇸 STATE COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            US LLC State Annual
            <br />
            Report Filing
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Avoid late fees, protect your bank accounts, and keep your company active. We handle the mandatory yearly filings for your Wyoming or Delaware LLC.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              File My Annual Report
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
              <Check size={16} className="text-gold-500" /> Prevents Dissolution
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Maintains Bank Access
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Remote Process
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
                What is the State Annual Report?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Every state requires LLCs to file a report each year to update their records. This confirms your principal address, member details, and Registered Agent information. It is accompanied by an annual state franchise fee.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Filing this report guarantees your company receives a "Certificate of Good Standing". Without it, the state marks your company as delinquent, which can immediately disrupt your international operations and vendor contracts.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <FileText size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">State Specific Deadlines</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Wyoming:</strong> 1st day of the anniversary month of formation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Delaware:</strong> June 1st of every year.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Florida:</strong> May 1st of every year.</span>
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
            The Cost of Missing the Deadline
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Missing your state filing creates a domino effect across your entire business structure.
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
                  Administrative Dissolution
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  The state will revoke your LLC's legal existence. You lose limited liability protection, making your personal assets vulnerable.
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
                  Frozen Bank Accounts
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  US banks and Stripe API frequently query state databases. If your status falls out of "Good Standing", they lock your funds.
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
                  Late Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Restoring a dissolved company requires paying massive late penalties and reinstatement fees, often costing hundreds of dollars.
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
      title: "State Database Audit",
      desc: "We review your company's current status and verify the exact amount owed to the state.",
    },
    {
      title: "Information Updates",
      desc: "We ensure your mailing and principal addresses remain accurate on the public record.",
    },
    {
      title: "Accurate Fee Calculation",
      desc: "We calculate your state franchise tax to ensure you never overpay based on foreign assets.",
    },
    {
      title: "Electronic Submission",
      desc: "Rapid electronic filing directly with the Secretary of State's portal for instant processing.",
    },
    {
      title: "Fee Remittance",
      desc: "We process the payment of the state fees securely on your behalf.",
    },
    {
      title: "Proof of Good Standing",
      desc: "Once filed, we provide the official receipt and updated status showing your compliance.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Annual Report Filing Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            We ensure your LLC remains fully compliant with state regulations, hassle-free.
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
            Simple Service Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Annual Filing
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">ADVOCATE MANAGED</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$99</span>
              <span className="text-sm text-gray-500">+ state fee</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              *You will be billed our $99 service fee plus the exact amount your state charges (e.g., ~$62 for Wyoming).
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Audit of your state records</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Preparation of the report</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Expedited electronic filing</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Now — $99
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
      desc: "Provide your company name and state of formation.",
    },
    {
      title: "Audit",
      desc: "We verify your upcoming deadline and state fees.",
    },
    {
      title: "Payment",
      desc: "You cover the service fee and state fee securely.",
    },
    {
      title: "Filing",
      desc: "We electronically file your report with the state.",
    },
    {
      title: "Confirmation",
      desc: "Receive your updated Good Standing status.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Filing in 5 Simple Steps
          </h2>
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

/* ---------- SECTION 7: BENEFITS ---------- */
function ComplianceBenefits() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>WHY IT MATTERS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Uninterrupted Operations
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Compliance protects the platforms that power your business.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Corporate Veil</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Maintaining Good Standing ensures your personal assets stay protected from business liabilities and lawsuits.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <CreditCard className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Merchant Safety</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Stripe periodically audits business registrations. An active LLC prevents unexpected account holds.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Global Trust</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                B2B clients and vendors check public state records. An active status verifies you are a legitimate entity.
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
      title: "Registered Agent Renewal",
      path: "/us-services/registered-agent-renewal",
      desc: "Renew your mandated state address and mail forwarder for the year.",
    },
    {
      title: "Operating Agreement Updates",
      path: "/us-services/operating-agreement-updates",
      desc: "Need to change addresses or members? We can draft custom resolutions.",
    },
    {
      title: "Wyoming LLC Formation",
      path: "/us-services/wyoming-llc-formation",
      desc: "Ready to launch a new brand? Form a new privacy-focused US entity.",
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
            DON'T RISK DISSOLUTION
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Keep Your LLC in Good Standing.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your business bank accounts and limited liability status. Let us handle your annual state filing quickly and accurately.
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
export default function StateAnnualReport() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <ComplianceBenefits />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
