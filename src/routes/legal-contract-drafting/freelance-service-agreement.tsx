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
    q: "What is a Freelance Service Agreement?",
    a: "A Freelance Service Agreement is a legally binding contract between a freelancer and their client. It clearly defines the scope of work, payment terms, deadlines, and ownership of the final deliverables, ensuring both parties are protected.",
  },
  {
    q: "Why do I need a written agreement instead of an email confirmation?",
    a: "Email confirmations are often vague and lack essential legal clauses such as intellectual property rights, liability limitations, and dispute resolution mechanisms. A formal agreement prevents scope creep, payment delays, and legal liabilities.",
  },
  {
    q: "Can this agreement be used for international clients?",
    a: "Yes, this agreement is designed with international business in mind. It includes standard jurisdiction and dispute resolution clauses that protect you when working with clients across the US, UK, EU, and beyond.",
  },
  {
    q: "Does this contract cover intellectual property (IP) rights?",
    a: "Absolutely. One of the most critical sections of this agreement clarifies who owns the work product. It typically states that IP transfers to the client only upon full payment, securing your leverage if the client defaults.",
  },
  {
    q: "How do I handle revisions in this agreement?",
    a: "The contract includes a specific clause for revisions, defining how many revision rounds are included in the base price and how much additional rounds will cost, effectively preventing endless free work (scope creep).",
  },
  {
    q: "Is a non-disclosure agreement (NDA) included?",
    a: "Our Freelance Service Agreement includes standard confidentiality clauses that act as a mutual NDA, protecting both your proprietary methods and the client's sensitive business information without needing a separate document.",
  },
  {
    q: "What happens if a client cancels the project midway?",
    a: "The agreement includes a 'kill fee' or termination clause. If the client cancels the project without cause, they are legally obligated to pay for all work completed up to that date, plus any non-refundable deposits.",
  },
  {
    q: "Are independent contractor status clauses included?",
    a: "Yes. It legally establishes you as an independent contractor, not an employee. This protects the client from employment tax liabilities and gives you the freedom to set your own hours and work methods.",
  },
  {
    q: "Can I edit the template for different projects?",
    a: "Yes, the contract is provided in an editable Word/Google Docs format. It features highlighted variables (like names, dates, and amounts) so you can easily customize it for each new client within minutes.",
  },
  {
    q: "Is this agreement legally enforceable?",
    a: "Yes, the contract is drafted by legal professionals following standard contract law principles. When signed by both parties, it serves as a legally binding and enforceable document in court or arbitration.",
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
  name: "Freelance Service Agreement Template",
  description:
    "A comprehensive, legally binding Freelance Service Agreement designed to protect freelancers, agencies, and consultants from scope creep and payment defaults.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/legal-contract-drafting/freelance-service-agreement",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "One-time purchase for a lifetime license to the contract template.",
  },
};

export const Route = createFileRoute(
  "/legal-contract-drafting/freelance-service-agreement"
)({
  head: () => ({
    meta: [
      { title: "Freelance Service Agreement Template | Legal Contract Drafting | ADVAQ" },
      {
        name: "description",
        content:
          "Protect your freelance business with a professional Freelance Service Agreement. Stop scope creep, secure payments, and own your IP. Download for $49.",
      },
      {
        name: "keywords",
        content:
          "freelance service agreement, independent contractor agreement, freelance contract template, graphic design contract, developer freelance contract, protect freelance payments",
      },
      {
        property: "og:title",
        content: "Freelance Service Agreement Template | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional Freelance Service Agreement designed to protect you from scope creep and unpaid invoices.",
      },
      {
        property: "og:url",
        content: "/legal-contract-drafting/freelance-service-agreement",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://[yourdomain.com]/legal-contract-drafting/freelance-service-agreement",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: FreelanceAgreement,
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
            Freelance Service Agreement
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Stop working on trust alone. Get a comprehensive, legally binding contract drafted by professionals to secure your payments, prevent scope creep, and protect your intellectual property.
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
              <Check size={16} className="text-gold-500" /> International Jurisdiction
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
                What is a Freelance Service Agreement?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Freelance Service Agreement is a foundational legal document that formalizes the working relationship between you (the freelancer) and your client. It replaces vague email threads with a solid set of rules governing exactly what work will be done, when it will be delivered, and how much you will be paid.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Whether you are a software developer, graphic designer, writer, or consultant, this contract sets clear boundaries. It legally establishes you as an independent contractor and clearly delineates the ownership of intellectual property rights, ensuring you have the leverage you need if things go wrong.
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
                    <span><strong className="font-semibold">Enforce Payments:</strong> Built-in late fee clauses and payment schedules.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Kill Scope Creep:</strong> Strict definitions of project scope and revision rounds.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Professionalism:</strong> Present yourself as a serious business, not a hobbyist.</span>
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
            Working Without a Solid Contract
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Relying on handshakes or WhatsApp messages leaves you entirely exposed to bad clients and unpaid invoices.
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
                  Endless Scope Creep
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a contract defining the exact deliverables and revision limits, clients will continuously ask for "just one more change" for free, destroying your hourly rate.
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
                  Unpaid Invoices
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If a client decides to ghost you or withhold payment after you've delivered the work, you have no legal basis or leverage to demand the funds or take them to arbitration.
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
                  IP Theft & Liability
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a clause stating that IP transfers only upon payment, a client can steal your work and use it without paying. Furthermore, you remain liable for damages if things break.
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
      title: "Scope of Work Definitions",
      desc: "Clear sections to detail exact deliverables, milestones, and what is specifically excluded from the project.",
    },
    {
      title: "Payment Terms & Late Fees",
      desc: "Detailed schedules for deposits, milestone payments, and enforceable late payment penalties.",
    },
    {
      title: "Intellectual Property Ownership",
      desc: "Clauses that retain your rights to the work until the final invoice is paid in full.",
    },
    {
      title: "Revisions & Change Orders",
      desc: "Strict non-disclosure terms protecting both your business methods and the client's data.",
    },
    {
      title: "Confidentiality (NDA)",
      desc: "Strict non-disclosure terms protecting both your business methods and the client's data.",
    },
    {
      title: "Termination & Kill Fees",
      desc: "Protections ensuring you get paid for your time even if the client decides to cancel the project early.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Inside the Agreement Template
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A battle-tested contract drafted to protect your time and money.
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
              <h3 className="font-sans text-xl font-semibold text-white">Limitation of Liability</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Caps your total financial liability to the total amount paid by the client, protecting your business from catastrophic lawsuits if an issue arises with the deliverables.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <Clock className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Client Delay Clause</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                If the client ghosts you or delays providing necessary assets, this clause pauses deadlines and allows you to pause the project or invoice for work completed to date.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-navy-800/80 border border-white/10 rounded-2xl p-8">
              <PenTool className="text-gold-500 mb-5" size={28} />
              <h3 className="font-sans text-xl font-semibold text-white">Portfolio Rights</h3>
              <p className="text-navy-200 text-sm leading-relaxed mt-3">
                Explicitly grants you the right to showcase the completed work in your portfolio and marketing materials, ensuring you can leverage successful projects to win new clients.
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
      title: "Fixed-Price Project Contract",
      path: "/legal-contract-drafting/fixed-price-project-contract",
      desc: "Contract template designed for one-off projects with rigid scopes and fixed milestone payments.",
    },
    {
      title: "Hourly Retainer Agreement",
      path: "/legal-contract-drafting/hourly-retainer-agreement",
      desc: "Perfect for ongoing monthly services where you bill clients based on a set number of hours or availability.",
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
            Stop Working Without a Contract.
            <br />
            Download the Template Now.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Instantly download your professional, editable Freelance Service Agreement and start sending it to clients today. Take your business seriously.
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
export default function FreelanceAgreement() {
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
