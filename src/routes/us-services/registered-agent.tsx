import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  FileText,
  MapPin,
  Mail,
  Building2,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Registered Agent?",
    a: "A Registered Agent is an individual or business entity designated to receive official legal and tax correspondence on behalf of a company. Every state requires you to maintain a Registered Agent who is a resident of that state or a corporation authorized to do business there.",
  },
  {
    q: "Do I have to use a Registered Agent in the state where my company is formed?",
    a: "Yes. Your Registered Agent must have a physical street address (not a P.O. Box) in the state where your LLC or Corporation is formed.",
  },
  {
    q: "What happens if I don't have a Registered Agent?",
    a: "Failing to maintain a Registered Agent can result in your company losing its 'good standing' with the state. This can lead to administrative dissolution, meaning your company is effectively shut down by the state, and you lose limited liability protection.",
  },
  {
    q: "Can I be my own Registered Agent?",
    a: "Yes, if you reside in the state where your company is formed, you can be your own Registered Agent. However, this means your home address becomes public record, and you must be available during normal business hours to receive service of process.",
  },
  {
    q: "Why shouldn't I just be my own Registered Agent?",
    a: "Using a professional Registered Agent protects your privacy (keeping your personal address off public records), ensures you never miss critical legal documents if you're traveling, and provides a professional front for your business.",
  },
  {
    q: "What does 'Service of Process' mean?",
    a: "Service of process is the legal term for the delivery of legal documents, such as a summons or subpoena, when a business is sued or summoned to court.",
  },
  {
    q: "How will I know if I receive mail or legal documents?",
    a: "We scan all official state and legal documents received on your behalf and upload them to a secure portal, notifying you immediately via email so you never miss a deadline.",
  },
  {
    q: "Is this service available for non-US residents?",
    a: "Absolutely. Our Registered Agent service is perfect for non-US residents who need a physical US presence and a reliable way to receive official state and IRS correspondence.",
  },
  {
    q: "Can I use the Registered Agent address as my business mailing address?",
    a: "A Registered Agent address is strictly for legal and state documents. If you need a general business mailing address for customer returns, bank statements, or Amazon, you would need a separate Virtual Mailbox service.",
  },
  {
    q: "How often do I need to renew my Registered Agent service?",
    a: "Registered Agent services are typically billed annually. Our transparent pricing means you pay a flat $99/year to maintain compliance.",
  },
  {
    q: "What states do you provide Registered Agent services in?",
    a: "We primarily provide Registered Agent services in Wyoming for our international clients, as it's the most popular state for non-US resident LLC formation.",
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
  serviceType: "Registered Agent Service",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "US Registered Agent Service for Non-Residents",
  description:
    "Secure US Registered Agent services to maintain state compliance, protect your privacy, and receive official legal mail.",
  areaServed: "United States",
  url: "https://[yourdomain.com]/us-services/registered-agent",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    description: "Annual fee for Registered Agent services.",
  },
};

export const Route = createFileRoute("/us-services/registered-agent")({
  head: () => ({
    meta: [
      { title: "US Registered Agent Services | ADVAQ" },
      {
        name: "description",
        content:
          "Secure a professional US Registered Agent to maintain state compliance, protect your privacy, and reliably receive official legal documents.",
      },
      {
        name: "keywords",
        content:
          "registered agent, us registered agent, wyoming registered agent, non resident registered agent, service of process",
      },
      {
        property: "og:title",
        content: "US Registered Agent Services | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Secure a professional US Registered Agent to maintain state compliance, protect your privacy, and reliably receive official legal documents.",
      },
      { property: "og:url", content: "/us-services/registered-agent" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/registered-agent" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: RegisteredAgentService,
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
            🇺🇸 US CORPORATE COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Professional US Registered
            <br />
            Agent Services
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Maintain your company's good standing with the state, protect your personal privacy, and never miss critical legal correspondence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Get an Agent Now
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
              <Check size={16} className="text-gold-500" /> Same-Day Document Scanning
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Privacy Protection
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> State Compliance Alerts
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
                What is a Registered Agent?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Every US state legally requires LLCs and Corporations to designate and maintain a Registered Agent. This agent is responsible for receiving official notices, state tax documents, and legal process (like lawsuit summons) on behalf of the business.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For international founders, a professional Registered Agent is the critical bridge connecting your foreign operation to US legal infrastructure. We provide the mandatory physical street address in the state of formation and ensure all official mail is digitized and forwarded to you immediately.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Core Responsibilities</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Legal Mail Receipt:</strong> Accepting Service of Process during business hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">State Compliance:</strong> Forwarding annual report reminders and tax notices.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Privacy Shield:</strong> Using our address on public records instead of yours.</span>
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
            The Danger of Non-Compliance
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Losing your Registered Agent puts your entire corporate structure at immediate risk.
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
                  If the state cannot reach your business due to an invalid Registered Agent, they will revoke your company's good standing and dissolve the entity, erasing your liability protection.
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
                  Default Judgments
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If your business is sued and there is no agent to receive the summons, you may lose the case by default without even knowing you were being sued.
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
                  Loss of Privacy
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Attempting to use your own personal or virtual address as your Registered Agent address makes it permanent public record, exposing you to junk mail and direct legal service.
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
      title: "Physical Street Address",
      desc: "A commercial address in your state of formation, not a P.O. Box, fully satisfying state legal requirements.",
    },
    {
      title: "Same-Day Document Scans",
      desc: "Instant digital access to all your state and legal correspondence the same day it arrives at our office.",
    },
    {
      title: "Compliance Reminders",
      desc: "Automated alerts for state annual reports and franchise tax deadlines so you never incur late penalties.",
    },
    {
      title: "Junk Mail Filtering",
      desc: "We shred unsolicited junk mail automatically, ensuring you only receive important corporate documents.",
    },
    {
      title: "Privacy Protection",
      desc: "Our address goes on the public state registry, keeping your personal details completely hidden.",
    },
    {
      title: "Unlimited Forwarding",
      desc: "No hidden fees for forwarding state correspondence. All digital uploads are included in the annual fee.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Premium Agent Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Everything you need to maintain impeccable legal standing in the US.
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
            Flat Annual Fee
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Annual Plan
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">REGISTERED AGENT SERVICE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$99</span>
              <span className="text-sm text-gray-500">/ year</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Simple, transparent pricing with no hidden mail forwarding fees or upsells.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>State compliant street address</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Immediate document scanning</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Annual report reminders</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Junk mail filtering included</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Secure Your Agent — $99
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
      title: "Sign Up",
      desc: "Purchase our Registered Agent service and provide your company details.",
    },
    {
      title: "Address Assigned",
      desc: "Instantly receive your new official Registered Agent street address to use on state forms.",
    },
    {
      title: "Update State",
      desc: "If changing agents, file the Change of Agent form with the state. (We handle this for you).",
    },
    {
      title: "Mail Receiving",
      desc: "We stand ready during all business hours to accept Service of Process and state mail.",
    },
    {
      title: "Digital Access",
      desc: "Get notified via email the moment documents arrive and view them securely online.",
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
            Seamless setup and continuous protection.
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
function FeatureHighlights() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>KEY FEATURES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Built for Modern Founders
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            We don't just meet the legal minimum; we provide a superior compliance experience.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Absolute Privacy</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Your personal address is kept entirely off public state records, protecting you from data brokers, marketers, and frivolous legal harassment.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Mail className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Digital Mailroom</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                No waiting for physical mail forwarding. Your critical state notices and IRS letters are scanned instantly and delivered securely to your inbox.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Building2 className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Professional Image</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Project credibility with a real commercial address instead of a residential home address, inspiring trust among partners and institutions.
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
      desc: "Complete US company registration for non-residents including Registered Agent service for the first year.",
    },
    {
      title: "US EIN Registration",
      path: "/us-services/ein-registration",
      desc: "Apply for your IRS tax identity document (Form CP 575) to enable corporate business accounts.",
    },
    {
      title: "FinCEN BOI Reporting",
      path: "/us-services/boi-report",
      desc: "Declare beneficial ownership to FinCEN within 90 days of formation to avoid daily non-compliance penalties.",
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
            STAY COMPLIANT
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Risk Your US Company.
            <br />
            Secure Your Agent Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Maintain good standing, protect your privacy, and ensure you never miss critical state deadlines. Just $99/year.
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
export default function RegisteredAgentService() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <FeatureHighlights />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
