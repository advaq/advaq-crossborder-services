import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ChevronDown,
  Shield,
  Users,
  Handshake,
  FileText,
  Scale,
  Briefcase,
  FileSignature,
  AlertTriangle,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "What is a Partnership Deed?",
    a: "A Partnership Deed is a legally binding written agreement between two or more partners that outlines the terms of their business relationship. It covers profit/loss sharing ratios, capital contributions, roles, salaries, and dispute resolution mechanisms under the Partnership Act, 1932.",
  },
  {
    q: "Is a written Partnership Deed legally required in Pakistan?",
    a: "While a partnership can technically exist verbally, a written and registered Partnership Deed is highly recommended and practically required. Banks will not open a partnership bank account without it, and courts rely heavily on a written deed to resolve any disputes between partners.",
  },
  {
    q: "What is the difference between an unregistered and registered partnership?",
    a: "An unregistered partnership operates on a simple notarized deed. A registered partnership (Firm-C) is formally registered with the Registrar of Firms. A registered firm has the legal power to sue third parties for breach of contract, whereas an unregistered firm cannot.",
  },
  {
    q: "Do I need to register my partnership with the Registrar of Firms right away?",
    a: "Not necessarily. Many small businesses start with an unregistered, notarized Partnership Deed on stamp paper to open bank accounts and start operations quickly. However, registering with the Registrar of Firms is strongly advised for long-term legal protection.",
  },
  {
    q: "How are profits and losses shared if not mentioned in the deed?",
    a: "If the profit and loss sharing ratio is not explicitly defined in a written Partnership Deed, the Partnership Act, 1932 dictates that all partners must share profits and losses equally, regardless of who contributed more capital or work.",
  },
  {
    q: "Can a Partnership Deed be amended after it is signed?",
    a: "Yes. A Partnership Deed can be amended through a supplementary deed. All partners must agree to the changes and sign the new document. If the firm is registered, the changes must also be notified to the Registrar of Firms.",
  },
  {
    q: "What happens if a partner wants to leave the business?",
    a: "A well-drafted Partnership Deed includes an exit clause detailing how a partner can resign, how their share will be valued, and whether the remaining partners can buy them out. Without this clause, one partner leaving can force the dissolution of the entire firm.",
  },
  {
    q: "Can a partner take a salary in addition to profit sharing?",
    a: "Yes, but it must be clearly stated in the Partnership Deed. Active or managing partners often take a fixed monthly salary for their operational work, and then receive their percentage of the remaining profits at year-end.",
  },
  {
    q: "What is the minimum and maximum number of partners allowed?",
    a: "A partnership requires a minimum of 2 partners. Under Pakistani law, a standard business partnership can have a maximum of 20 partners (with some exceptions for professional firms like lawyers or accountants).",
  },
  {
    q: "Can a foreign national be a partner in a Pakistani firm?",
    a: "Yes, a foreign national can be a partner, but there are strict regulatory and security clearance requirements from the Ministry of Interior and State Bank of Pakistan. We generally recommend foreigners use an SECP Pvt Ltd structure instead.",
  },
  {
    q: "Who is liable for the debts of the partnership firm?",
    a: "In a traditional partnership under the 1932 Act, all partners have unlimited joint and several liability. This means if the business fails, partners' personal assets can be used to pay off the firm's business debts.",
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
  serviceType: "Legal Document Drafting",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Partnership Deed Drafting in Pakistan",
  description:
    "Custom drafted Partnership Deeds by licensed advocates. Secure your business partnerships, define profit ratios, and formalize terms on legal stamp paper.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services/partnership-deed",
  offers: {
    "@type": "Offer",
    price: "49.00",
    priceCurrency: "USD",
    description: "Professional fee for drafting a comprehensive Partnership Deed.",
  },
};

export const Route = createFileRoute("/pakistan-services/partnership-deed")({
  head: () => ({
    meta: [
      { title: "Partnership Deed Drafting & Registration | ADVAQ" },
      {
        name: "description",
        content:
          "Professional Partnership Deed drafting by corporate lawyers in Pakistan. Secure your business terms, profit sharing, and legal rights on valid stamp paper.",
      },
      {
        name: "keywords",
        content:
          "partnership deed draft pakistan, register partnership firm, firm c registration, business agreement lawyers",
      },
      {
        property: "og:title",
        content: "Partnership Deed Drafting & Registration | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Professional Partnership Deed drafting by corporate lawyers in Pakistan. Secure your business terms, profit sharing, and legal rights on valid stamp paper.",
      },
      { property: "og:url", content: "/pakistan-services/partnership-deed" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services/partnership-deed" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    ],
  }),
  component: PartnershipDeed,
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
            🇵🇰 BUSINESS CONTRACTS PAKISTAN
          </p>
          <h1 className="font-serif text-white text-[38px] md:text-[60px] mt-5 leading-[1.1] max-w-4xl mx-auto">
            Partnership Deed
            <br />
            Drafting & Registration
          </h1>
          <p className="mt-6 text-navy-200 text-[18px] max-w-2xl mx-auto leading-[1.75]">
            Secure your business venture with a legally airtight agreement. We draft custom Partnership Deeds that clearly define profit shares, roles, and exit strategies, printed on legal stamp paper by licensed advocates.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold rounded-none uppercase tracking-widest">
              Draft Partnership Deed
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
              <Check size={16} className="text-gold-500" /> Drafted by Corporate Lawyers
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Custom Profit & Exit Clauses
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Valid for Bank Accounts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> E-Stamp Paper Ready
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
                What is a Partnership Deed?
              </h2>
              <p className="mt-6 text-gray-700 text-[16px] leading-[1.8]">
                A Partnership Deed is the foundational legal document for any multi-owner business that is not incorporated as a company. It acts as the constitution of your partnership, explicitly stating who brought what to the table, and who gets what from the profits.
              </p>
              <p className="mt-4 text-gray-700 text-[16px] leading-[1.8]">
                Far too many businesses start on a handshake or a downloaded template, only to fall apart a year later when the business makes money (or loses it). A custom-drafted deed ensures that all financial, operational, and legal expectations are legally binding from day one.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-navy-950 p-8 rounded-2xl border border-white/10 relative">
                <div className="absolute top-4 right-4 text-gold-500/20">
                  <Handshake size={80} />
                </div>
                <h3 className="font-serif text-xl text-white mb-4">Why It Matters</h3>
                <ul className="space-y-4 text-sm text-navy-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Bank Accounts:</strong> Banks legally require a notarized deed to open a firm account.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Dispute Prevention:</strong> Clearly defines what happens if a partner dies, quits, or underperforms.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                    <span><strong className="font-semibold">Legal Standing:</strong> Protects your invested capital in a court of law if a partner commits fraud.</span>
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
            The Danger of Verbal Partnerships
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            A handshake agreement works great—until the business actually becomes profitable.
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
                  Profit & Salary Conflicts
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a written deed, the law assumes all partners share profits equally, even if one partner invested 90% of the money and the other only invested 10%.
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
                  The "Exit" Deadlock
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If a partner wants to leave or sell their share, and there is no exit clause, they can legally force the entire business to liquidate and shut down just to extract their capital.
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
                  Unlimited Liability Trap
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  In a partnership, you are personally liable for the debts created by your partner. If they take an unauthorized loan in the firm's name, your personal assets can be seized to pay it.
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
      icon: Users,
      title: "Consultation & Discovery",
      desc: "We discuss your specific business model to understand the roles, capital inputs, and intended profit splits of each partner.",
    },
    {
      icon: FileSignature,
      title: "Custom Legal Drafting",
      desc: "Our advocates draft a bespoke deed covering capital, drawing rights, salaries, non-compete clauses, and arbitration.",
    },
    {
      icon: FileText,
      title: "E-Stamp Paper Issuance",
      desc: "We generate the official non-judicial E-stamp paper of the required legal denomination from the Board of Revenue.",
    },
    {
      icon: Scale,
      title: "Exit & Dissolution Clauses",
      desc: "We build safety nets to govern exactly what happens if a partner dies, becomes incapacitated, or wishes to resign.",
    },
    {
      icon: Briefcase,
      title: "Bank Account Ready",
      desc: "The final document is formatted exactly to the compliance standards of commercial banks for firm account opening.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>THE SOLUTION</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Our Drafting Inclusions
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Stop relying on generic templates. Get a contract built for your exact situation.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusions.map((inc) => (
            <Reveal key={inc.title}>
              <div className="border border-border p-8 rounded-xl bg-white hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300">
                <inc.icon className="text-gold-500 mb-4" size={24} />
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
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>TRANSPARENT PRICING</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-dark-text mt-4">
            Deed Drafting Package
          </h2>
        </Reveal>

        <div className="max-w-lg mx-auto">
          <Reveal>
            <div className="bg-white border-[2px] border-gold-500 p-8 rounded-2xl shadow-[0_8px_30px_rgba(201,168,76,0.1)] flex flex-col justify-between h-full relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                ADVOCATE DRAFTED
              </span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest text-center">PARTNERSHIP DEED</p>
                <h3 className="font-sans text-2xl font-bold text-dark-text mt-2 text-center">Custom Drafting</h3>
                <div className="mt-6 flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl text-navy-900">Rs. 15,000</span>
                </div>
                <p className="text-center text-xs text-gray-500 mt-2">+ cost of E-Stamp Paper (usually Rs. 1,000 - Rs. 2,000)</p>
                <div className="h-px bg-border my-6" />
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> One-on-one consultation with an attorney</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Custom clauses for your specific business</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Up to 2 rounds of revisions</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Formatted for Bank Account Opening</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-gold-500 shrink-0" /> Soft copy PDF & Word formats provided</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase tracking-widest mt-8 w-full text-center"
              >
                Draft Partnership Deed — Rs. 15,000
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: PROCESS ---------- */
function ProcessSteps() {
  const steps = [
    {
      title: "Discovery Call",
      desc: "We discuss your business structure, who is investing what, and how you want to split profits.",
    },
    {
      title: "Initial Draft",
      desc: "Our legal team drafts the deed, inserting necessary protective and exit clauses.",
    },
    {
      title: "Review & Revise",
      desc: "You review the draft with your partners. We make adjustments to ensure everyone is comfortable.",
    },
    {
      title: "E-Stamp Paper",
      desc: "Once approved, the deed is printed onto official non-judicial e-stamp paper.",
    },
    {
      title: "Signing & Notary",
      desc: "Partners sign the deed in the presence of witnesses, and it is notarized to become legally binding.",
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
            A collaborative process to ensure every partner is protected.
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
      title: "SECP Company Registration",
      path: "/pakistan-services/secp-registration",
      desc: "Upgrade your partnership to a Private Limited Company for limited liability protection.",
    },
    {
      title: "NTN Registration",
      path: "/pakistan-services/ntn-registration",
      desc: "Register your new partnership firm with FBR to obtain a business NTN.",
    },
    {
      title: "Shareholder Agreement",
      path: "/pakistan-services/shareholder-agreement",
      desc: "If you operate an SECP company, you need a Shareholder Agreement instead of a Deed.",
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
            READY TO SECURE YOUR PARTNERSHIP?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Don't Rely on a Handshake.
            <br />
            Get It in Writing.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Protect your investments, prevent future disputes, and formalize your business today with a custom-drafted Partnership Deed by a corporate advocate.
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
            Expert Drafting · 100% Legally Binding · Fast Turnaround
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function PartnershipDeed() {
  return (
    <div className="page-transition">
      <Hero />
      <ServiceOverview />
      <TheDanger />
      <WhatIsIncluded />
      <Pricing />
      <ProcessSteps />
      <FAQSection />
      <RelatedServices />
      <CTABannerCustom />
    </div>
  );
}
