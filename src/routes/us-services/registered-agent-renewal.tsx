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
  Mail,
  UserCheck
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Registered Agent?",
    a: "A Registered Agent is an individual or business responsible for receiving important legal and tax documents on behalf of your LLC. US law requires every LLC to maintain a Registered Agent with a physical address in the state of formation.",
  },
  {
    q: "Why do I need to renew this service?",
    a: "Your Registered Agent must be maintained continuously. If your agent resigns because of non-payment, the state will immediately revoke your LLC's good standing and begin dissolution proceedings.",
  },
  {
    q: "Can I be my own Registered Agent?",
    a: "Only if you physically reside in the state where your LLC is formed (e.g., Wyoming) and are available at that address during normal business hours. For non-US residents and Pakistani entrepreneurs, hiring a professional service is legally required.",
  },
  {
    q: "I used a different company to form my LLC. Can I switch to you?",
    a: "Yes! This is called a 'Change of Registered Agent'. We handle the paperwork to notify the state that we are taking over representation for your company.",
  },
  {
    q: "Does this include mail forwarding?",
    a: "Yes. Our service includes receiving your official state and legal mail. We digitally scan and upload these documents to your secure portal so you can read them from anywhere in the world.",
  },
  {
    q: "Is this fee separate from the State Annual Report?",
    a: "Yes. The Registered Agent renewal is our service fee for providing the physical address and representation. The State Annual Report is a tax/fee paid directly to the state government.",
  },
  {
    q: "What happens to junk mail or bank cards?",
    a: "The Registered Agent address is strictly for legal and official state correspondence. If you need a physical address to receive bank debit cards, we recommend setting up a dedicated virtual business address.",
  },
  {
    q: "How fast can you become my agent?",
    a: "If you are switching to us, we can file the Change of Agent form with the state within 24-48 hours.",
  },
  {
    q: "Will my name become public if I use your service?",
    a: "By using our Wyoming Registered Agent service, our address and name go on the public state record instead of yours, maximizing your privacy as an owner.",
  },
  {
    q: "How will I know when I receive a legal notice?",
    a: "The moment a lawsuit, subpoena, or official state notice arrives at our office, we scan it and immediately notify you via email and WhatsApp.",
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
  serviceType: "Registered Agent Services",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "US Registered Agent Renewal & Change of Agent",
  description:
    "Maintain legal compliance for your US LLC with our premium Registered Agent services. Includes digital mail scanning and privacy protection.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/us-services/registered-agent-renewal",
  offers: {
    "@type": "Offer",
    price: "99.00",
    priceCurrency: "USD",
    description: "Annual Registered Agent service fee.",
  },
};

export const Route = createFileRoute("/us-services/registered-agent-renewal")({
  head: () => ({
    meta: [
      { title: "US Registered Agent Renewal | ADVAQ" },
      {
        name: "description",
        content:
          "Keep your US LLC compliant. Renew your Registered Agent service or switch to our premium digital mailroom for non-US residents.",
      },
      {
        name: "keywords",
        content:
          "registered agent wyoming, renew registered agent, change registered agent, us llc compliance, legal mail forwarding",
      },
      {
        property: "og:title",
        content: "US Registered Agent Renewal | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Keep your US LLC compliant. Renew your Registered Agent service or switch to our premium digital mailroom for non-US residents.",
      },
      { property: "og:url", content: "/us-services/registered-agent-renewal" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services/registered-agent-renewal" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: RegisteredAgentRenewal,
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
            🇺🇸 CORPORATE COMPLIANCE
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Registered Agent
            <br />
            Renewal & Transfer
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Maintain your mandatory US physical presence. Receive legal documents instantly with our digital scanning service designed for international founders.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Renew or Switch Now
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
              <Check size={16} className="text-gold-500" /> Digital Mail Scanning
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Privacy Protection
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Same-Day Notifications
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
                The Role of the Registered Agent
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                Under US corporate law, every LLC must maintain a Registered Agent in the state where it was formed. The agent provides a physical address and is available during all business hours to accept "Service of Process" (lawsuits) and official state communications.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                For Pakistani freelancers and global founders, your Registered Agent is your vital link to the US government. If you fail to renew your agent, they will resign, and the state will strip your company of its legal status.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <UserCheck size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Core Functions</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Legal Reception:** Accepts subpoenas and lawsuits on your behalf.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**State Mail:** Receives tax and compliance notices.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span>**Privacy Shield:** Keeps your personal home address off public records.</span>
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
            Operating Without an Agent
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Losing your Registered Agent triggers severe legal consequences for your business.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <BadgeAlert className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Loss of Good Standing
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                If an agent resigns, the state gives you roughly 30 days to appoint a new one. Failure to do so results in administrative dissolution of your LLC.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <Lock className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Default Judgments
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                If someone sues you and there is no agent to receive the lawsuit, the plaintiff can win a default judgment against you without you even knowing.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border-l-4 border-l-red-600 rounded-2xl p-8 shadow-sm h-full">
              <Mail className="text-red-600 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-dark-text">
                Missed Critical Mail
              </h3>
              <p className="text-gray-700 text-[15px] leading-[1.7] mt-3">
                You will miss mandatory tax notices, compliance warnings, and franchise tax bills, leading to accumulating penalties and fines.
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
      title: "Physical State Address",
      desc: "A commercial business address in your state of formation, meeting all statutory requirements.",
    },
    {
      title: "Digital Mail Scanning",
      desc: "Instant scanning of all state and legal correspondence, uploaded to a secure dashboard.",
    },
    {
      title: "Real-Time Notifications",
      desc: "Immediate email and WhatsApp alerts whenever critical legal documents are received.",
    },
    {
      title: "Privacy Protection",
      desc: "Use our address on public state documents to keep your personal home address hidden.",
    },
    {
      title: "Change of Agent Filing",
      desc: "If switching from another provider, we handle the state paperwork to transfer representation.",
    },
    {
      title: "Annual Compliance Reminders",
      desc: "We alert you ahead of time when your State Annual Reports are due.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Premium Representation
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Total peace of mind knowing your US compliance is actively managed.
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
            Annual Subscription
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              1 Year Service
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">DIGITAL MAILROOM INCLUDED</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$99</span>
              <span className="text-sm text-gray-500">/ year</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Flat annual fee for comprehensive Registered Agent representation.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Physical US business address</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Unlimited state mail scanning</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>State transfer fees included (if switching)</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Subscribe Now — $99/yr
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
      desc: "Provide your company name so we can pull your state records.",
    },
    {
      title: "Payment",
      desc: "Complete the $99 annual subscription payment.",
    },
    {
      title: "Filing",
      desc: "If switching, we file the Change of Agent form with the state.",
    },
    {
      title: "Setup",
      desc: "We provision your digital mailroom and alert channels.",
    },
    {
      title: "Active Defense",
      desc: "We stand guard during business hours to receive your docs.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>OUR WORKFLOW</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Seamless Onboarding
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
            Security & Accessibility
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Shield className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Asset Protection</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                By ensuring you never miss a lawsuit, you prevent default judgments that could pierce the corporate veil and target personal assets.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Globe className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Location Independence</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Travel or live anywhere in the world. Your US corporate mail is instantly digitized and delivered to your phone.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Lock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Spam Filtering</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                We filter out corporate junk mail and scams, only alerting you when legitimate state or legal documents arrive.
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
      title: "State Annual Report",
      path: "/us-services/state-annual-report",
      desc: "File your mandatory yearly report with the state to maintain Good Standing.",
    },
    {
      title: "Operating Agreement Updates",
      path: "/us-services/operating-agreement-updates",
      desc: "Draft custom resolutions to reflect new addresses or members.",
    },
    {
      title: "BOI Report",
      path: "/us-services/boi-report",
      desc: "Ensure FinCEN has your latest beneficial ownership information.",
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
            STAY COMPLIANT
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Secure Your LLC's Legal Anchor.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Ensure you never miss a critical legal notice. Renew your agent or switch to our digital mailroom designed for international founders.
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
export default function RegisteredAgentRenewal() {
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
