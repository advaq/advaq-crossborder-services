import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Briefcase,
  FileText,
  Scale,
  Clock,
  PenTool,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is an Hourly Retainer Agreement?",
    a: "An Hourly Retainer Agreement is a contract where a client pays you a set fee every month to guarantee a specific amount of your time, availability, or output.",
  },
  {
    q: "Why is a retainer contract different from a standard freelance contract?",
    a: "A retainer focuses on ongoing, recurring availability rather than a single fixed deliverable. It requires specific clauses for rollover hours, recurring billing cycles, and cancellation notice periods.",
  },
  {
    q: "How does this contract handle unused hours?",
    a: "The template includes a 'Rollover Clause' which you can configure. You can choose whether unused hours roll over to the next month (and cap them) or if they expire at the end of the billing cycle (use-it-or-lose-it).",
  },
  {
    q: "What happens if a client needs more hours than the retainer?",
    a: "The agreement includes an 'Overage Clause'. It explicitly states the hourly rate the client will be billed for any work that exceeds their monthly retained hours.",
  },
  {
    q: "How do I ensure I get paid on time every month?",
    a: "The contract mandates upfront payment for the retainer before the month begins. Work does not commence until the retainer invoice is cleared, ensuring you are never working on credit.",
  },
  {
    q: "Is there a minimum commitment period included?",
    a: "Yes. The template allows you to define an initial commitment term (e.g., 3 months or 6 months), preventing clients from signing up, demanding rapid work, and cancelling immediately.",
  },
  {
    q: "How does the client cancel the retainer?",
    a: "It includes a strict 'Notice of Termination' clause, usually requiring 30 or 60 days written notice before cancellation, ensuring you have time to replace the income.",
  },
  {
    q: "Does this template cover intellectual property rights?",
    a: "Yes, standard IP clauses are included to ensure that ownership of the work produced during the retainer transfers to the client only as long as they are in good financial standing.",
  },
  {
    q: "Who is this contract best for?",
    a: "It is ideal for virtual assistants, SEO specialists, social media managers, fractional developers, and any freelancer who provides ongoing monthly support.",
  },
  {
    q: "Can I edit this template in Google Docs?",
    a: "Yes, the file is provided in formats compatible with Microsoft Word and Google Docs. It contains highlighted fields for easy customization.",
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
  serviceType: "Legal Contract Template",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Hourly Retainer Agreement Template",
  description:
    "A specialized legal contract for ongoing monthly retainers. Secure recurring revenue, define rollover policies, and enforce notice periods.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/legal-contract-drafting/hourly-retainer-agreement",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "One-time purchase for a lifetime license to the contract template.",
  },
};

export const Route = createFileRoute(
  "/legal-contract-drafting/hourly-retainer-agreement"
)({
  head: () => ({
    meta: [
      { title: "Hourly Retainer Agreement Template | Legal Contract Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Secure recurring revenue with a professional Hourly Retainer Agreement. Define rollover hours, overage rates, and cancellation terms. Download for $49.",
      },
      {
        name: "keywords",
        content:
          "hourly retainer agreement, monthly retainer contract, freelance retainer template, ongoing services agreement, virtual assistant contract, seo retainer contract",
      },
      {
        property: "og:title",
        content: "Hourly Retainer Agreement Template | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional legal contract for ongoing monthly retainers. Secure recurring revenue and enforce notice periods.",
      },
      {
        property: "og:url",
        content: "/legal-contract-drafting/hourly-retainer-agreement",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://[yourdomain.com]/legal-contract-drafting/hourly-retainer-agreement",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: RetainerAgreement,
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
            ⚖️ LEGAL CONTRACT TEMPLATES
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Hourly Retainer Agreement
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Turn unpredictable freelance income into stable, recurring revenue. A specialized contract that secures your monthly retainers, legally defines rollover rules, and guarantees upfront payment.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Purchase Template — $49
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Ask a Question
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Instant Word/Docs Download
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Recurring Revenue Focus
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Reusable for Unlimited Clients
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
                What is a Retainer Agreement?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Retainer Agreement is a specialized contract used when a client agrees to pay you a fixed monthly fee in exchange for guaranteed availability, ongoing services, or a set number of working hours each month.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Unlike one-off project contracts, retainers focus on relationship longevity. They require unique legal mechanics—like rollover policies, overage billing, and cancellation notice periods—to protect you from being treated like a full-time employee without the benefits.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Shield size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why Use This Contract?</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Stable Income:</strong> Enforce upfront monthly payments legally.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Control Your Time:</strong> Set strict boundaries on availability and hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Prevent Sudden Drops:</strong> Require 30-60 day cancellation notices.</span>
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
            The Danger of Informal Retainers
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A handshake retainer is often worse than no retainer at all.
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
                  Rollover Disputes
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If the client doesn't use their hours in Month 1, they will assume those hours roll over to Month 2 indefinitely, creating an impossible backlog of owed time.
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
                  Unpaid Overages
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Clients on retainer frequently demand extra work above their hour limit. Without a contract defining an overage rate, you end up working those extra hours for free.
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
                  Sudden Cancellation
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a notice period clause, a client can email you on Friday and say "we"re done," instantly wiping out a major chunk of your expected monthly revenue.
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
      title: "Recurring Billing Cycle",
      desc: "Explicitly outlines when invoices are sent and requires upfront payment before the month begins.",
    },
    {
      title: "Use-It-Or-Lose-It Policies",
      desc: "Clear rules regarding whether unused retainer hours roll over or expire to protect your bandwidth.",
    },
    {
      title: "Overage Authorizations",
      desc: "Legal framework dictating how extra hours are approved and the specific hourly rate they incur.",
    },
    {
      title: "Minimum Term Commitments",
      desc: "Strict non-disclosure terms protecting both your business methods and the client's data.",
    },
    {
      title: "Communication Boundaries",
      desc: "Sets clear office hours and response times so your team isn't treated like a 24/7 employee.",
    },
    {
      title: "Termination Notice",
      desc: "Requires the client to provide 30-60 days written notice before cancelling the retainer.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Inside the Retainer Agreement
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A contract built specifically for the mechanics of subscription-style freelance work.
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
            One-Time Purchase
          </h2>
        </Reveal>

        <Reveal>
          <div className="bg-white border border-border p-8 md:p-10 rounded-2xl shadow-sm text-center relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-gold-500 text-navy-900 text-xs font-bold uppercase tracking-widest px-6 py-2">
              Lifetime Access
            </span>
            <p className="text-xs text-gray-500 uppercase tracking-widest">CONTRACT TEMPLATE</p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-navy-900">$49</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
              Download instantly. Use it for unlimited clients and projects forever.
            </p>

            <div className="h-px bg-border my-8" />

            <div className="text-left space-y-4 max-w-md mx-auto">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Fully editable MS Word & Google Docs formats</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Highlighted variables for quick customization</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>Drafted for cross-border/international clients</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <Check className="text-gold-500 shrink-0 mt-0.5" size={18} />
                <span>No recurring fees or subscriptions</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full justify-center"
            >
              Buy Template — $49
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
      title: "Purchase",
      desc: "Complete the checkout process to instantly receive the template files via email.",
    },
    {
      title: "Download",
      desc: "Open the document in MS Word or copy it to your Google Docs account.",
    },
    {
      title: "Customize",
      desc: "Fill in the highlighted brackets (e.g., [Client Name], [Payment Amount]) in minutes.",
    },
    {
      title: "Export",
      desc: "Save the document as a clean PDF ready for signature.",
    },
    {
      title: "Send & Sign",
      desc: "Send to your client via email or an e-signature platform like DocuSign.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>HOW TO USE</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Ready in 5 Minutes
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Our template is designed for immediate deployment. No legal degree required.
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

/* ---------- SECTION 7: KEY CONTRACT CLAUSES ---------- */
function KeyClauses() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>LEGAL PROTECTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] mt-4">
            Powerful Contract Features
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            Every clause is deliberately crafted to shift power and protection back to you.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Scale className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Independent Contractor</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Explicitly states you are not an employee, shielding the client from tax liabilities and preserving your freedom to work your own hours.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Clock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Suspension for Non-Payment</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Grants you the immediate right to halt all ongoing work if the monthly retainer invoice is not paid by the 1st of the month.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <FileText className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Non-Exclusivity</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Ensures the client acknowledges you have other clients and cannot demand your undivided 40-hour-a-week attention.
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
      title: "Freelance Service Agreement",
      path: "/legal-contract-drafting/freelance-service-agreement",
      desc: "A foundational legal document for general freelance work, covering IP, payments, and scope boundaries.",
    },
    {
      title: "Fixed-Price Project Contract",
      path: "/legal-contract-drafting/fixed-price-project-contract",
      desc: "Contract template designed for one-off projects with rigid scopes and fixed milestone payments.",
    },
    {
      title: "UK LTD Formation",
      path: "/uk-services/ltd-formation",
      desc: "Register a formal company entity to conduct international business and sign contracts under a corporate name.",
    },
  ];

  return (
    <section className="bg-white py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>MORE CONTRACTS</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Other Legal Templates
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
                <div className="mt-6 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">View Details <ArrowRight size={12} /></div>
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
            PROTECT YOUR BUSINESS
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Secure Your Recurring Revenue.
            <br />
            Download the Template Now.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Instantly download your professional, editable Hourly Retainer Agreement and start locking in your clients today. Take your business seriously.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Get Template Now →
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              Ask on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            One-time payment of $49 · Instant Download · Fully Editable Word/Docs
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function RetainerAgreement() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <KeyClauses />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
