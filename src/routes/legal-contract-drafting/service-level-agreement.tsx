import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  BadgeAlert,
  Clock,
  Settings,
  Server,
  Activity,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Service Level Agreement (SLA)?",
    a: "An SLA is a contract that defines the level of ongoing service, maintenance, and support a client can expect from you after a project is launched. It covers metrics like server uptime, bug fix response times, and regular updates.",
  },
  {
    q: "Why is an SLA important for an IT agency or SaaS?",
    a: "It turns unpredictable post-launch client demands into a structured, recurring revenue stream. It sets clear boundaries so clients know exactly when you will respond to issues and how much it will cost.",
  },
  {
    q: "What is an uptime guarantee?",
    a: "It's a commitment that a software or server will be operational for a certain percentage of time (e.g., 99.9% uptime). The SLA details how this is measured and what happens (like service credits) if the guarantee isn't met.",
  },
  {
    q: "How does an SLA handle response times?",
    a: "The agreement categorizes issues by severity (e.g., Critical, High, Low) and assigns specific response and resolution timeframes to each. A critical server crash gets immediate attention, while a minor cosmetic bug might be scheduled for next week.",
  },
  {
    q: "Does this contract cover new feature development?",
    a: "Typically, no. The SLA clearly distinguishes between routine maintenance/support and new feature development, which should be billed separately via a new Statement of Work (SOW).",
  },
  {
    q: "Can I use an SLA for cloud hosting and server management?",
    a: "Yes, our SLA drafts are perfect for DevOps teams and agencies providing managed hosting, outlining server maintenance, backup schedules, and disaster recovery procedures.",
  },
  {
    q: "What are service credits?",
    a: "If you fail to meet the agreed-upon metrics (like uptime or response time), the SLA may require you to provide a partial refund or discount on their next invoice, known as a service credit. Our drafts ensure these are strictly capped to protect your business.",
  },
  {
    q: "How do we handle scheduled maintenance?",
    a: "The SLA outlines 'Maintenance Windows'—specific times (usually nights or weekends) where planned downtime is allowed and does not negatively impact your uptime guarantee.",
  },
  {
    q: "How is support provided?",
    a: "The contract specifies the acceptable channels for support (e.g., ticket system, email, phone) and your official business hours, preventing clients from demanding 24/7 support via WhatsApp unless they pay for it.",
  },
  {
    q: "What happens if a third-party service (like AWS) goes down?",
    a: "Our SLA includes 'Force Majeure' and third-party dependency clauses, ensuring you are not penalized for outages caused by upstream providers like Amazon Web Services or local ISPs.",
  },
  {
    q: "Can the client cancel the SLA?",
    a: "Yes, it includes termination clauses usually requiring 30-day or 60-day written notice, protecting your recurring revenue from abrupt cancellations.",
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
  serviceType: "Legal Contract Drafting",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Service Level Agreement (SLA)",
  description:
    "Professional Service Level Agreement (SLA) drafting to define maintenance, support, and uptime guarantees for IT agencies and SaaS platforms.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/legal-contract-drafting/service-level-agreement",
  offers: {
    "@type": "Offer",
    price: "69.00",
    priceCurrency: "USD",
    description: "Custom drafted Service Level Agreement.",
  },
};

export const Route = createFileRoute("/legal-contract-drafting/service-level-agreement")({
  head: () => ({
    meta: [
      { title: "Service Level Agreement (SLA) | Legal Contract Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Define support metrics, uptime guarantees, and maintenance schedules with a professional Service Level Agreement (SLA) for IT and DevOps agencies.",
      },
      {
        name: "keywords",
        content:
          "service level agreement, SLA contract Pakistan, IT support SLA, uptime guarantee agreement, software maintenance contract, SaaS legal documents",
      },
      {
        property: "og:title",
        content: "Service Level Agreement (SLA) | Legal Contract Drafting",
      },
      {
        property: "og:description",
        content:
          "Define support metrics, uptime guarantees, and maintenance schedules with a professional Service Level Agreement (SLA).",
      },
      { property: "og:url", content: "/legal-contract-drafting/service-level-agreement" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting/service-level-agreement" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: SLAContract,
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
            ⚙️ SUPPORT CONTRACTS
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Service Level Agreement
            <br />
            (SLA)
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Monetize your post-launch support. Establish clear response times, define server uptime guarantees, and protect your team from 24/7 client demands with a legally robust SLA.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft My SLA
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
              <Check size={16} className="text-gold-500" /> Generates Recurring Revenue
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Caps Liability & Credits
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Sets Clear Boundaries
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
                What is an SLA?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Service Level Agreement (SLA) is a contract that dictates exactly how you will maintain and support a software system or IT infrastructure after it has been delivered. It turns abstract promises like "good support" into measurable legal metrics.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                By clearly defining what is covered (server patches, bug fixes, uptime) and what isn't (new feature requests, redesigns), an SLA allows you to charge a predictable monthly retainer while setting strict boundaries on client expectations.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Activity size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Support Teams Need It</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Boundary Setting:** Stop midnight WhatsApp messages from clients.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Recurring Income:** Justify monthly maintenance retainers legally.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Liability Capping:** Limit penalties if a server crashes unexpectedly.</span>
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
            Providing Support Without an SLA
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            "We"ll take care of it" is a dangerous promise. Without an SLA, support becomes a chaotic, uncompensated nightmare.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                24/7 Unpaid Demands
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Without defined support hours and response times, clients expect you to drop everything to fix minor issues immediately, often on weekends.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Free Feature Work
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                Clients frequently disguise new feature requests as "maintenance." Without an SLA defining what maintenance is, you end up doing free development.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Third-Party Liability
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                If AWS or a payment gateway goes down, clients will blame you. Without third-party exclusions in an SLA, you might be held financially responsible.
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
      title: "Severity Matrices",
      desc: "Categorize issues into Critical, High, Medium, and Low, assigning strict response and resolution times to each.",
    },
    {
      title: "Uptime Guarantees",
      desc: "Define exactly how uptime is calculated, with clear exclusions for scheduled maintenance and third-party outages.",
    },
    {
      title: "Service Credit Caps",
      desc: "Legally cap any penalties or refunds if you miss an SLA target, protecting your baseline revenue.",
    },
    {
      title: "Support Channels & Hours",
      desc: "Specify that support is only provided via your ticketing system during standard business hours.",
    },
    {
      title: "Maintenance Scope",
      desc: "Explicitly exclude new development, content updates, or consulting from the standard maintenance fee.",
    },
    {
      title: "Client Responsibilities",
      desc: "Require clients to provide reproducible steps for bugs and assign a single point of contact.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Inside the SLA Document
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A comprehensive framework designed to make IT support profitable and predictable.
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
            Fixed Fee Drafting
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Full Document
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">SERVICE LEVEL AGREEMENT</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$69</span>
              <span className="text-sm text-gray-500">one-time</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Drafted to protect IT agencies, DevOps teams, and SaaS platforms.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Customised metrics (uptime, response time)</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Includes 1 free revision within 7 days</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Delivery within 3-4 business days</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Third-party liability exclusions included</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Order Contract — $69
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
      desc: "We discuss your support capacity, business hours, and the type of software/infrastructure you maintain.",
    },
    {
      title: "Drafting",
      desc: "Our legal team drafts the SLA, focusing on strict definitions of support tiers and capping your liabilities.",
    },
    {
      title: "Review & Revision",
      desc: "You review the matrix of response times to ensure they are realistic for your current team size.",
    },
    {
      title: "Final Delivery",
      desc: "You receive a polished, reusable SLA template to bundle with all your post-launch contracts.",
    },
    {
      title: "Implementation",
      desc: "Start upselling monthly maintenance retainers to your clients with professional legal backing.",
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
            Tailoring the metrics to your team's real-world capacity.
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

/* ---------- SECTION 7: BENEFITS / INTEGRATIONS ---------- */
function BankingIntegrations() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>AGENCY ADVANTAGES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Transform Support into Profit
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            An SLA isn't just a legal document; it's a sales tool for recurring revenue.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Clock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Regain Your Time</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Force clients to respect your business hours. A critical issue gets immediate attention, but minor content changes wait in the queue.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Server className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Upsell Hosting</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Use a professional SLA to justify high-margin managed hosting and maintenance retainers, moving away from project-to-project feast or famine.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <AlertTriangle className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Limit Penalties</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If an AWS outage brings down a client's app, the SLA's force majeure clauses ensure you aren't legally or financially penalized.
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
      title: "Software Development Agreement",
      path: "/legal-contract-drafting/software-development-agreement",
      desc: "Contract for the initial build phase before the SLA kicks in.",
    },
    {
      title: "Master Service Agreement",
      path: "/legal-contract-drafting/master-service-agreement",
      desc: "Establish long-term umbrella terms for recurring enterprise clients.",
    },
    {
      title: "UK LTD Company Formation",
      path: "/uk-services/ltd-formation",
      desc: "Form a UK corporate entity to legally enforce your international contracts.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>INTERNAL RESOURCES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Related Legal Services
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
                  View Details <ArrowRight size={12} />
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
            SECURE RECURRING REVENUE
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Stop Doing Free Maintenance.
            <br />
            Draft Your SLA Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your team's time, define clear support boundaries, and start charging professional retainers for your ongoing services.
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
            Professional Legal Drafting · Caps Your Liability · Defines Response Times
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function SLAContract() {
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
