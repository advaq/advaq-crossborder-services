import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  CheckCircle,
  ChevronDown,
  AlertTriangle,
  Scale,
  ShieldCheck,
  Clock,
  FileSignature,
  FileEdit,
  MessageSquare,
  Package,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Why do Pakistani freelancers need a written contract with foreign clients?",
    a: "Pakistani freelancers working with UK or US clients need a written contract because verbal agreements and platform terms alone do not provide adequate legal protection in cross-border disputes. A proper contract defines the scope of work, payment schedule, intellectual property ownership, and what happens if either party fails to meet their obligations. Without one, you have no enforceable recourse if a client refuses to pay, demands unlimited revisions, or claims ownership of your work. A single professionally drafted contract can prevent disputes worth thousands of dollars.",
  },
  {
    q: "What is the most important contract a freelancer should have?",
    a: "The most important contract for a freelancer is a Freelance Service Agreement combined with an IP Assignment Agreement. The Service Agreement establishes the scope of work, payment terms, revision limits, and deadlines, while the IP Assignment Agreement ensures the client only receives ownership of your work after full payment has been made. These two documents together protect both your income and your intellectual property on every project. Most experienced freelancers also add an NDA and a Deposit Agreement to their standard contract stack.",
  },
  {
    q: "What is an NDA and when should a Pakistani freelancer use one?",
    a: "An NDA (Non-Disclosure Agreement) is a legal contract that prevents you from sharing a client's confidential information — such as their business plans, source code, pricing, or data — with third parties. Pakistani freelancers should sign an NDA before any serious project discussion begins, especially when the client shares sensitive business information. Most UK and US clients working on software products or SaaS platforms will require an NDA before they share project details.",
  },
  {
    q: "What is an IP Assignment Agreement and why do US clients always ask for it?",
    a: "An IP Assignment Agreement is a contract that legally transfers full ownership of the work you create — including code, designs, and written content — from you to the client upon final payment. US clients ask for this because under US copyright law, the creator of a work automatically owns it unless ownership is explicitly transferred in writing. Without a signed IP Assignment Agreement, you technically still own everything you built, which creates significant legal risk for the client's business.",
  },
  {
    q: "What is a Master Service Agreement (MSA) and does my IT agency need one?",
    a: "A Master Service Agreement (MSA) is an umbrella contract that establishes the overall terms and conditions governing all projects between your IT agency and a specific client. Instead of negotiating a new contract for every project, you sign the MSA once and then attach individual Statements of Work (SOWs) for each new project. Pakistani IT agencies working with recurring UK or US clients should always use an MSA because it saves time, reduces legal risk, and makes your agency appear more professional to international clients.",
  },
  {
    q: "Are contracts drafted by you enforceable in the UK and USA?",
    a: "Yes. The contracts we draft are written to be enforceable under both UK and US law, with governing law and jurisdiction clauses that can be customised to your preference. For UK clients, contracts follow English contract law principles. For US clients, contracts reference the applicable state law (typically New York, Delaware, or the client's state). We recommend all contracts specify the governing jurisdiction clearly to avoid ambiguity.",
  },
  {
    q: "How long does contract drafting take and what do I receive?",
    a: "Contract drafting is completed within 48 hours of receiving your requirements. You receive your finished contract in both Microsoft Word format (so you can edit it for future use) and PDF format (for sending to clients). All packages include at least one round of revisions. If you need changes after reviewing the draft, simply tell us and we update the document at no extra charge within the revision limit.",
  },
  {
    q: "What is a Data Processing Agreement (DPA) and do I need one?",
    a: "A Data Processing Agreement (DPA) is a legally required contract under the UK GDPR and EU GDPR that must be in place whenever you handle personal data on behalf of a UK or EU client. If you build websites, manage databases, process customer information, or have access to client user data, you are acting as a 'data processor' under GDPR law, and a DPA must be signed. Failing to have one in place exposes both you and your client to significant penalties.",
  },
  {
    q: "Can I use the same contracts for multiple clients?",
    a: "Yes. Once we draft a contract for you, you own it and can reuse it with multiple clients. The Word format we deliver allows you to update the client name, project details, and dates for each new engagement. We recommend reviewing your contracts once a year to ensure they reflect any changes in your services or pricing. For agencies handling many clients, our Agency Legal Pack and Full Legal Protection Pack provide a complete reusable contract library.",
  },
  {
    q: "What happens if a client refuses to sign a contract?",
    a: "If a client refuses to sign a contract before work begins, this is a serious warning sign that should not be ignored. A legitimate client will have no objection to signing a standard professional service agreement. Refusal to sign often indicates the client intends to dispute payment, claim ownership of your work, or request unlimited revisions without additional compensation. Our strong recommendation is to never begin any paid project without a signed contract.",
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
  name: "Legal Contract Drafting for Freelancers and IT Companies",
  description:
    "Professional contract drafting service for Pakistani freelancers and IT agencies working with UK and US clients. Covers NDAs, service agreements, IP assignments, MSAs, SLAs, and more.",
  areaServed: "Worldwide",
  url: "https://[yourdomain.com]/legal-contract-drafting",
  offers: [
    { "@type": "Offer", name: "Freelancer Starter Legal Pack", price: "99", priceCurrency: "USD" },
    { "@type": "Offer", name: "Agency Legal Pack", price: "199", priceCurrency: "USD" },
    { "@type": "Offer", name: "Full Legal Protection Pack", price: "349", priceCurrency: "USD" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Legal Contract Drafting", item: "/legal-contract-drafting" },
  ],
};

export const Route = createFileRoute("/legal-contract-drafting/")({
  head: () => ({
    meta: [
      { title: "Contract Drafting for Freelancers & IT Companies | ADVAQ" },
      {
        name: "description",
        content:
          "NDA, freelance service agreement, IP assignment, MSA, SLA, and IT outsourcing contracts drafted for Pakistani freelancers and IT agencies.",
      },
      {
        name: "keywords",
        content:
          "freelance contract template, software development agreement, master service agreement MSA, service level agreement SLA, non-disclosure agreement NDA, IP assignment agreement, data processing agreement DPA, GDPR compliance contract",
      },
      {
        property: "og:title",
        content: "Legal Contract Drafting for Freelancers & IT Companies | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Get professionally drafted contracts for your freelance or IT business. NDA, Service Agreement, IP Assignment, MSA, SLA and more.",
      },
      { property: "og:url", content: "/legal-contract-drafting" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/legal-contract-drafting" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: LegalContracts,
});

/* ---------- SECTION 1: HERO ---------- */
function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em] inline-flex items-center gap-2">
            ⚖️ LEGAL CONTRACT DRAFTING
          </p>
          <h1 className="font-serif text-white text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] mt-5 leading-[1.15] max-w-5xl mx-auto">
            <span>Your Business Contracts. </span>
            <br className="hidden sm:block" />
            <span className="inline-block sm:inline">Drafted, Enforceable, and Protective.</span>
          </h1>
          <p className="mt-6 text-navy-200 text-[19px] max-w-2xl mx-auto leading-[1.75]">
            Professional contract drafting for Pakistani freelancers and IT agencies working with UK and US clients. Protect your payments, intellectual property, and business relationships. Delivered in 48 hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#packages" className="btn-gold rounded-none uppercase tracking-widest">
              See Our Packages
            </a>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest"
            >
              Talk to Us on WhatsApp
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] text-navy-200">
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Drafted by Legal Professionals
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> UK & US Law Compatible
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 48-Hour Turnaround Delivery
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Punjab Bar Council Licensed
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 2: WHO IS THIS FOR ---------- */
function WhoIsThisFor() {
  const categories = [
    { title: "Upwork & Fiverr Freelancers", desc: "Protect payments, limit revisions & own your intellectual property.", icon: "💻" },
    { title: "IT Agencies & Software Houses", desc: "Master Service Agreements, SOWs, and team contractor contracts.", icon: "🏢" },
    { title: "Designers & Creative Agencies", desc: "Copyright transfer, milestone payments & deposit terms.", icon: "🎨" },
    { title: "SaaS & App Developers", desc: "Terms of Service, Privacy Policies & GDPR Data Processing Agreements.", icon: "📱" },
    { title: "E-Commerce & Digital Sellers", desc: "Vendor contracts, white-label agreements & brand licensing.", icon: "🛒" },
  ];

  return (
    <section className="bg-navy-950 py-16 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-10">
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">TAILORED SOLUTIONS</p>
          <h2 className="font-serif text-white text-2xl md:text-3xl mt-2">
            Built for Pakistani Freelancers and IT Businesses With International Clients
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((c) => (
            <Reveal key={c.title}>
              <div className="bg-navy-900/90 border border-white/10 rounded-[22px] p-5 h-full hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 shadow-lg group">
                <div className="w-11 h-11 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="font-sans font-semibold text-white text-sm leading-tight">{c.title}</h3>
                <p className="text-navy-200 text-xs mt-2 leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 3: THE PROBLEM ---------- */
function TheProblem() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>THE REALITY</SectionLabel>
          <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] text-dark-text mt-3 leading-[1.18] max-w-4xl mx-auto">
            <span>A Handshake Is Not Enough — </span>
            <br className="hidden sm:block" />
            <span>Protect Yourself Legally.</span>
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-gray-600 max-w-3xl mx-auto leading-[1.65] mt-4">
            Most Pakistani freelancers lose money, clients, or their work because they never had a proper contract. Operating without a written contract means you take all the risk. A professional contract is not just a legal document — it is your strongest business tool.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Client Refuses to Pay
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a signed payment agreement, you have almost no legal recourse when a client disappears after receiving your work. A proper contract with payment milestones protects every rupee you earn.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border border-red-400 rounded-[20px] p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group bg-red-50/10">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Client Steals Your Work
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If you do not have an IP Assignment or Licensing Agreement in place, your client may use, resell, or claim ownership of work you created — with nothing you can do about it legally.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-red-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <AlertTriangle size={22} />
                </div>
                <h3 className="font-sans text-lg font-bold text-navy-950">
                  Scope Creep Destroys Projects
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Clients who keep adding requirements without paying more are a freelancer's biggest enemy. A Statement of Work and Change Order clause stops scope creep before it starts.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-navy-950 text-white rounded-[20px] p-6 md:p-7 mt-8 border border-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif italic text-white text-base md:text-lg leading-relaxed max-w-3xl">
              "We have seen Pakistani freelancers lose $5,000+ projects simply because they had no written contract. One document, drafted properly, changes everything."
            </p>
            <p className="text-navy-200 font-sans text-xs sm:text-sm font-semibold shrink-0">
              — ADVAQ Legal Team
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- SECTION 4: PACKAGES ---------- */
function Packages() {
  const packagesData = [
    {
      name: "Freelancer Starter Legal Pack",
      tag: "Perfect for independent freelancers",
      price: "$99",
      note: "one-time · no hidden fees",
      items: [
        "Freelance Service Agreement",
        "Non-Disclosure Agreement (NDA)",
        "IP Assignment Agreement",
        "Deposit & Payment Terms Agreement",
        "1 Round of Revisions Included",
        "Delivered in Word + PDF format",
      ],
      bestFor:
        "Covers the 4 essential contracts every freelancer must have to protect their work and guarantee payment.",
      cta: "GET STARTED — $99",
      caption: "Delivered in editable Word and PDF format",
      featured: false,
    },
    {
      name: "Agency Legal Pack",
      tag: "For IT agencies and software houses",
      price: "$199",
      note: "one-time · complete setup",
      items: [
        "Master Service Agreement (MSA)",
        "Statement of Work (SOW) Template",
        "Non-Disclosure Agreement (NDA)",
        "Independent Contractor Agreement",
        "Service Level Agreement (SLA)",
        "Change Order / Scope Change Form",
        "2 Rounds of Revisions Included",
        "Delivered in Word + PDF format",
      ],
      bestFor:
        "Everything an IT agency needs before onboarding a client or hiring team members safely.",
      cta: "GET THIS PACK — $199",
      caption: "Fully customized to your agency's tech stack",
      featured: true,
    },
    {
      name: "Full Legal Protection Pack",
      tag: "Complete legal coverage for your business",
      price: "$349",
      note: "one-time · complete shielding",
      items: [
        "Everything in Agency Legal Pack",
        "IT Outsourcing Agreement",
        "IP Assignment Agreement",
        "Data Processing Agreement (GDPR)",
        "Non-Compete / Non-Solicitation Agreement",
        "Dispute Resolution Agreement",
        "Terms of Service & Privacy Policy",
        "Employee / Contractor Confidentiality Agreement",
        "Unlimited Revisions (30 days)",
        "1-hour legal consultation call",
        "Delivered in Word + PDF format",
      ],
      bestFor:
        "Ideal for agencies scaling up with multiple UK/US clients and remote teams.",
      cta: "GET FULL PROTECTION — $349",
      caption: "Includes a 60-min strategy call with an advocate",
      featured: false,
    },
  ];

  return (
    <section id="packages" className="bg-off-white py-16 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>PACKAGES</SectionLabel>
          <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] text-dark-text mt-3 leading-[1.18] max-w-4xl mx-auto">
            Everything Your Business Needs.
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] max-w-3xl mx-auto leading-[1.65] mt-4">
            Not sure where to start? These three packages cover the most common needs of Pakistani freelancers and IT businesses — bundled to save you money and remove every guessing game.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {packagesData.map((p) => (
            <Reveal key={p.name}>
              <div
                className={`relative bg-white rounded-[22px] p-6 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl group ${
                  p.featured
                    ? "border-2 border-gold-500 shadow-[0_8px_30px_rgba(201,168,76,0.18)]"
                    : "border border-gray-200 hover:border-gold-500/50"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full inline-flex items-center gap-1 shadow-md">
                    ⭐ Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-sans text-xl font-bold text-navy-950">{p.name}</h3>
                  <p className="mt-1 text-xs text-gray-500 leading-normal">{p.tag}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-navy-950">{p.price}</span>
                    <span className="text-xs text-gray-500">{p.note}</span>
                  </div>
                  <div className="mt-4 h-px bg-gray-100" />
                  <ul className="mt-4 space-y-2.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-gray-800 text-[13px]">
                        <CheckCircle size={16} className="text-gold-500 mt-0.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 pt-3 border-t border-gray-100">
                  <p className="text-[11.5px] text-gray-500 italic leading-relaxed mb-3">{p.bestFor}</p>
                  <Link
                    to="/contact"
                    className="btn-gold rounded-full uppercase tracking-widest w-full text-center py-3 text-xs font-bold block"
                  >
                    {p.cta}
                  </Link>
                  <p className="mt-1.5 text-[10.5px] text-gray-400 text-center">{p.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 5: INDIVIDUAL SERVICES ---------- */
interface ServiceCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  price: string;
  desc: string;
  items: string[];
  guideUrl?: string;
}

function ServiceCard({ icon: Icon, title, price, desc, items, guideUrl }: ServiceCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between h-full relative">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-navy-950 text-gold-500 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
            <Icon size={20} />
          </div>
          <span className="bg-navy-950 text-gold-500 text-[11px] font-semibold px-3 py-1 rounded-full border border-gold-500/30 shrink-0">
            {price}
          </span>
        </div>
        <h3 className="font-sans text-lg font-bold text-navy-950">{title}</h3>
        <p className="mt-2 text-gray-600 leading-relaxed text-[13px]">{desc}</p>
        <ul className="mt-4 space-y-2 border-t border-gray-100 pt-3">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2 text-gray-700 text-[12.5px]">
              <CheckCircle size={15} className="text-gold-500 mt-0.5 shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2.5">
        <Link
          to="/contact"
          className="flex-1 py-2.5 px-3 rounded-xl border-1.5 border-gold-500 text-navy-950 bg-transparent hover:bg-gold-500 hover:text-navy-950 font-bold text-[11px] uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] shadow-sm"
        >
          <span>ORDER NOW</span>
          <ArrowRight size={13} className="shrink-0" />
        </Link>
        {guideUrl ? (
          <Link
            to={guideUrl}
            className="flex-1 py-2.5 px-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-[11px] uppercase tracking-wider inline-flex items-center justify-center gap-1 transition-all shadow-sm hover:scale-[1.02]"
          >
            <span>LEARN MORE</span>
          </Link>
        ) : (
          <Link
            to="/contact"
            className="flex-1 py-2.5 px-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold text-[11px] uppercase tracking-wider inline-flex items-center justify-center gap-1 transition-all shadow-sm hover:scale-[1.02]"
          >
            <span>GET STARTED</span>
          </Link>
        )}
      </div>
    </div>
  );
}

function SubSectionHeader({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="max-w-2xl mb-8">
      <div className="inline-block border border-gold-500/30 bg-gold-500/10 px-3.5 py-1 rounded-full text-gold-600 text-[11px] font-bold tracking-[0.12em] uppercase">
        {step}
      </div>
      <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 mt-3 font-bold">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed text-[14.5px]">{desc}</p>
    </div>
  );
}

function IndividualServices() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <SectionLabel center>INDIVIDUAL SERVICES</SectionLabel>
          <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] text-dark-text mt-3 leading-[1.18] max-w-4xl mx-auto">
            Every Contract Service. Clear Price. No Surprises.
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] max-w-3xl mx-auto leading-[1.65] mt-4">
            Pick exactly what you need. Every contract is handled personally — not outsourced, not automated, not a template. Professionally delivered and legally sound.
          </p>
        </Reveal>

        {/* SUB-SECTION A: CLIENT AGREEMENTS */}
        <div className="py-12 border-t border-gray-200">
          <Reveal>
            <SubSectionHeader
              step="STEP 1"
              title="Client Contracts"
              desc="Establish clear terms with your clients. Protect your payments, set revision limits, and define deliverables clearly."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Reveal>
              <ServiceCard
                icon={FileSignature}
                title="Freelance Service Agreement"
                price="$49"
                desc="The essential contract between you and your client. Covers scope, payment schedule, revisions, and ownership of deliverables."
                items={[
                  "Custom scope definitions",
                  "Payment milestones",
                  "Revision limits",
                  "Governing law choices",
                ]}
                guideUrl="/legal-contract-drafting/freelance-service-agreement"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Clock}
                title="Fixed-Price Project Contract"
                price="$49"
                desc="One project, one price. Define milestones, deliverables, revision limits, and a kill fee if the client cancels mid-project."
                items={[
                  "Milestone deliverables",
                  "Final approval criteria",
                  "Kill fee cancellation terms",
                  "Delay management",
                ]}
                guideUrl="/legal-contract-drafting/fixed-price-project-contract"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={ShieldCheck}
                title="Hourly & Retainer Agreement"
                price="$49"
                desc="For ongoing client relationships billed hourly or on a monthly retainer. Includes billing cycle and hours cap."
                items={[
                  "Retainer terms",
                  "Timesheet logging guidelines",
                  "Hours cap",
                  "Notice period",
                ]}
                guideUrl="/legal-contract-drafting/hourly-retainer-agreement"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* SUB-SECTION B: CONFIDENTIALITY & IP */}
      <div className="bg-off-white py-16 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SubSectionHeader
              step="STEP 2"
              title="Confidentiality & IP Protection"
              desc="Protect your ideas, client code, and intellectual property. Ensure IP transfers only after full payment."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Reveal>
              <ServiceCard
                icon={ShieldCheck}
                title="Non-Disclosure Agreement (NDA)"
                price="$39"
                desc="Protects your client's confidential information before and during a project. Required by most serious clients."
                items={[
                  "Confidential data definition",
                  "Permitted use restrictions",
                  "Term limits",
                  "Remedy clauses",
                ]}
                guideUrl="/legal-contract-drafting/non-disclosure-agreement"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={ShieldCheck}
                title="Mutual NDA"
                price="$49"
                desc="Both parties share sensitive information — protects both sides equally. Essential for agency partnerships."
                items={[
                  "Two-way confidentiality",
                  "Equal IP protection",
                  "Strategic partner terms",
                  "Remedy clauses",
                ]}
                guideUrl="/legal-contract-drafting/mutual-nda"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={FileSignature}
                title="IP Assignment Agreement"
                price="$49"
                desc="Transfers full ownership of your work to the client upon final payment. Required by virtually all US clients."
                items={[
                  "Full IP transfer",
                  "Payment contingency clauses",
                  "Warranty definitions",
                  "US/UK compatibility",
                ]}
                guideUrl="/legal-contract-drafting/ip-assignment-agreement"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SUB-SECTION C: AGENCY CONTRACTS */}
        <div className="py-16">
          <Reveal>
            <SubSectionHeader
              step="STEP 3"
              title="IT Agency & Company Contracts"
              desc="Scale your software house or IT agency. Use master agreements and SLAs to win enterprise clients."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Reveal>
              <ServiceCard
                icon={Scale}
                title="Master Service Agreement (MSA)"
                price="$99"
                desc="The umbrella contract that governs all projects with one client. Individual SOWs attach under it for each project."
                items={[
                  "Overall terms",
                  "Liability caps",
                  "Intellectual property clauses",
                  "Payment frameworks",
                ]}
                guideUrl="/legal-contract-drafting/master-service-agreement"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={FileEdit}
                title="Software Development Agreement"
                price="$79"
                desc="Formal agreement for custom software builds. Covers tech stack, timelines, testing, acceptance criteria, and warranties."
                items={[
                  "Tech stack details",
                  "Acceptance testing criteria",
                  "Warranty periods",
                  "Source code delivery",
                ]}
                guideUrl="/legal-contract-drafting/software-development-agreement"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={ShieldCheck}
                title="Service Level Agreement (SLA)"
                price="$69"
                desc="Defines uptime guarantees, response times, support tiers, and penalties for managed IT services and hosting."
                items={[
                  "Uptime guarantees",
                  "Support response times",
                  "Support tiers",
                  "Penalty credits",
                ]}
                guideUrl="/legal-contract-drafting/service-level-agreement"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* SUB-SECTION D: HR & TEAM CONTRACTS */}
      <div className="bg-off-white py-16 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SubSectionHeader
              step="STEP 4"
              title="HR & Team Contracts"
              desc="Hire contractors, remote developers, and in-house staff safely without legal risk."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Reveal>
              <ServiceCard
                icon={FileSignature}
                title="Independent Contractor Agreement"
                price="$49"
                desc="Hire developers, designers, or QA engineers as contractors without employee obligations. Fully customisable."
                items={[
                  "Contractor IP assignment",
                  "Non-employee status",
                  "Notice period",
                  "Confidentiality clauses",
                ]}
                guideUrl="/legal-contract-drafting/independent-contractor-agreement"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Scale}
                title="Employment Contract (Pakistan Law)"
                price="$59"
                desc="Formal employment agreement compliant with Pakistan Labour Law for your in-house permanent staff members."
                items={[
                  "Labour law compliance",
                  "Leave policies",
                  "Probation terms",
                  "Notice guidelines",
                ]}
                guideUrl="/legal-contract-drafting/employment-contract"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={ShieldCheck}
                title="Employee Confidentiality Agreement"
                price="$39"
                desc="Internal NDA for staff who handle client data, source code, credentials, or sensitive business information."
                items={[
                  "Access restrictions",
                  "Source code security",
                  "Client data NDA",
                  "Liability terms",
                ]}
                guideUrl="/legal-contract-drafting/employee-confidentiality-agreement"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SUB-SECTION E: COMPLIANCE DOCUMENTS */}
        <div className="py-16">
          <Reveal>
            <SubSectionHeader
              step="STEP 5"
              title="Legal & Compliance Documents"
              desc="Ensure your website, SaaS, and database handling comply with UK GDPR and US regulations."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Reveal>
              <ServiceCard
                icon={FileSignature}
                title="Terms of Service"
                price="$79"
                desc="The legal agreement between your product and its users. Required before any SaaS or web platform goes live."
                items={[
                  "SaaS user rules",
                  "Liability limitations",
                  "Billing terms",
                  "Account terminations",
                ]}
                guideUrl="/legal-contract-drafting/terms-of-service"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={ShieldCheck}
                title="Privacy Policy"
                price="$69"
                desc="Legally required document explaining how you collect, store, and use personal data. GDPR and UK GDPR compliant."
                items={[
                  "GDPR compliance",
                  "Cookie usage details",
                  "Data collection declarations",
                  "User rights",
                ]}
                guideUrl="/legal-contract-drafting/privacy-policy"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={FileEdit}
                title="Data Processing Agreement (DPA)"
                price="$79"
                desc="Mandatory under GDPR when handling EU or UK client data. Defines your role as data processor and your obligations."
                items={[
                  "Data processor duties",
                  "Sub-processor terms",
                  "GDPR standard clauses",
                  "Breach alerts",
                ]}
                guideUrl="/legal-contract-drafting/data-processing-agreement"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6: PREMIUM BUNDLES ---------- */
interface PremiumBundleProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge: string;
  title: string;
  price: string;
  note: string;
  body: string;
  items: string[];
}

function PremiumBundleCard({ icon: Icon, badge, title, price, note, body, items }: PremiumBundleProps) {
  return (
    <div className="bg-navy-800 border border-white/8 rounded-2xl hover:border-gold-500/40 p-8 md:p-10 transition-all duration-300 hover:-translate-y-[6px] grid lg:grid-cols-2 gap-10">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-lg text-gold-500 shrink-0">
            <Icon size={28} />
          </div>
          <span className="bg-gold-500 text-navy-900 text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {badge}
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-white mt-5">{title}</h3>
        <p className="mt-3 text-navy-200 leading-relaxed text-sm">{body}</p>
        <div className="mt-6 flex items-baseline gap-3">
          <span className="font-serif text-4xl text-gold-500">{price}</span>
          <span className="text-xs text-navy-200">{note}</span>
        </div>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all"
        >
          ORDER NOW <ArrowRight size={14} />
        </Link>
      </div>
      <div className="bg-navy-950/50 border border-white/5 p-7 rounded-xl flex flex-col justify-center">
        <p className="text-gold-500 uppercase text-[11px] font-semibold tracking-wider mb-4">
          What's included
        </p>
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-white text-[14px]">
              <CheckCircle size={18} className="text-gold-500 mt-0.5 shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PremiumBundles() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>PREMIUM BUNDLES</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-white mt-4">
            Complete Legal Protection for Growing Businesses.
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            These premium packages are for Pakistani freelancers and IT businesses that want a complete, end-to-end solution — not a piecemeal service.
          </p>
        </Reveal>

        <div className="space-y-8 mt-12">
          <Reveal>
            <PremiumBundleCard
              icon={ShoppingBag}
              badge="FOR PRODUCT BUILDERS"
              title="SaaS Launch Compliance Pack"
              price="$199"
              note="one-time · compliant setup"
              body="Get your SaaS or web product ready for international users. Includes full GDPR privacy policies, terms of service, and user data policies matching UK and US rules."
              items={[
                "Terms of Service (SaaS/Website)",
                "Privacy Policy (GDPR/US compatible)",
                "Cookie Policy",
                "Acceptable Use Policy (AUP)",
                "Data Processing Agreement (DPA)",
                "30 days of free minor edits",
                "Delivered in Word + PDF format",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={Package}
              badge="MOST POPULAR FOR IT AGENCIES"
              title="The Complete IT Agency Client & Team Suite"
              price="$199"
              note="one-time · complete setup"
              body="Everything an IT agency needs before onboarding a client or hiring team members safely. Gives you reusable templates for MSAs, SOWs, NDAs, and contractor hires."
              items={[
                "Master Service Agreement (MSA)",
                "Statement of Work (SOW) Template",
                "Non-Disclosure Agreement (NDA)",
                "Independent Contractor Agreement",
                "Service Level Agreement (SLA)",
                "Change Order / Scope Change Form",
                "2 Rounds of Revisions Included",
                "Delivered in Word + PDF format",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={TrendingUp}
              badge="ENTERPRISE READY"
              title="Full Legal Protection Pack"
              price="$349"
              note="one-time · complete shield"
              body="Complete legal coverage for growing agencies scaling with multiple foreign clients and local teams. Includes client contracts, outsourcing agreements, DPAs, and employee NDAs."
              items={[
                "Everything in Agency Legal Pack",
                "IT Outsourcing Agreement",
                "IP Assignment Agreement",
                "Data Processing Agreement (GDPR)",
                "Non-Compete / Non-Solicitation Agreement",
                "Dispute Resolution Agreement",
                "Terms of Service & Privacy Policy",
                "Employee / Contractor Confidentiality Agreement",
                "1-hour strategy consultation call",
                "Unlimited revisions for 30 days",
                "Delivered in Word + PDF format",
              ]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 7: ADD-ONS ---------- */
function AddOns() {
  const addonsData = [
    {
      Icon: FileSignature,
      name: "Website & App Development Contract",
      price: "$59",
      desc: "Purpose-built for web/app projects. Covers hosting, testing, launch conditions, and support.",
    },
    {
      Icon: FileEdit,
      name: "White-Label Agreement",
      price: "$79",
      desc: "Build products/services your client resells under their brand. Covers IP, fees, and restrictions.",
    },
    {
      Icon: ShieldCheck,
      name: "Mutual NDA",
      price: "$49",
      desc: "Protects both parties equally when sharing sensitive business information or tech assets.",
    },
    {
      Icon: FileSignature,
      name: "Change Order Form",
      price: "$29",
      desc: "Protects you when a client requests work outside scope. Documents and prices changes formally.",
    },
    {
      Icon: Clock,
      name: "Deposit & Upfront Payment Agreement",
      price: "$39",
      desc: "Protects you by requiring upfront deposits. Defines non-refundable terms and billing schedules.",
    },
    {
      Icon: Scale,
      name: "Revenue Share Agreement",
      price: "$69",
      desc: "Instead of fixed fees, take a percentage of product revenue. Prevents costly partner/client disputes.",
    },
  ];

  return (
    <section className="bg-off-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <SectionLabel center>ADD-ONS</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-text mt-5">
            Small Services. Real Impact.
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mt-4">
            Need something specific? Add any of these to an existing order or request them standalone.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {addonsData.map((a) => (
            <Reveal key={a.name}>
              <div className="group bg-white border border-border p-6 rounded-xl hover:border-gold-500/40 hover:-translate-y-[6px] transition-transform duration-300 ease-out flex items-start gap-5 shadow-sm h-full">
                <div className="w-12 h-12 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-lg text-gold-500 shrink-0">
                  <a.Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-sans font-semibold text-lg text-dark-text truncate">
                      {a.name}
                    </h3>
                    <span className="bg-gold-500 text-navy-900 text-xs font-bold px-2.5 py-1 rounded-full shrink-0">
                      {a.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-[11px] uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02]"
                  >
                    <span>ADD TO ORDER</span>
                    <ArrowRight size={12} className="shrink-0" />
                  </Link>
                </div>
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
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>FAQ</SectionLabel>
          <h2 className="font-serif text-[32px] md:text-[44px] text-white mt-4">
            Questions We Hear Every Day.
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

/* ---------- SECTION 9: CTA BANNER ---------- */
function CTABannerCustom() {
  return (
    <section className="relative bg-navy-950 py-28 overflow-hidden text-center">
      <div className="absolute inset-0 diagonal-pattern opacity-100" />
      <div className="relative max-w-4xl mx-auto px-6 flex flex-col items-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            READY TO START?
          </p>
          <h2 className="font-serif text-white text-[36px] md:text-[52px] mt-4 leading-[1.1]">
            Stop Working Without a Contract.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every project you start without a signed contract is a project where your payment, your work, and your reputation are at risk. Get professionally drafted contracts delivered in 48 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              GET STARTED NOW →
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase tracking-widest px-8 py-4 font-semibold text-sm"
            >
              WHATSAPP US DIRECTLY
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-gold-500 text-gold-500 px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-gold-500/10 transition-all rounded-none"
            >
              VIEW ALL PACKAGES
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            Free initial consultation · Punjab Bar Council Licensed Advocate · 48-Hour Delivery
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function LegalContracts() {
  return (
    <div className="page-transition">
      <Hero />
      <WhoIsThisFor />
      <TheProblem />
      <Packages />
      <IndividualServices />
      <PremiumBundles />
      <AddOns />
      <FAQSection />
      <CTABannerCustom />
    </div>
  );
}
