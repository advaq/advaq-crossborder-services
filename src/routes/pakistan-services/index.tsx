import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Star,
  CheckCircle,
  ChevronDown,
  AlertTriangle,
  Building2,
  User,
  UserCheck,
  Users,
  Globe,
  Hash,
  Receipt,
  FileText,
  AlertOctagon,
  BadgePercent,
  Calculator,
  Award,
  RefreshCw,
  Banknote,
  FileSearch,
  Mail,
  FileSignature,
  Handshake,
  Scale,
  Landmark,
  Shield,
  BadgeCheck,
  Package,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Do Pakistani freelancers need to pay income tax on Upwork or Fiverr earnings?",
    a: "Pakistani freelancers earning from Upwork or Fiverr are entitled to a 100% income tax exemption on IT export income under the Income Tax Ordinance 2001, but this exemption is not automatic. To qualify, you must be registered with FBR, maintain Active Taxpayer status, receive income through proper Pakistani banking channels, and correctly declare your earnings in your annual tax return. Freelancers who are unregistered lose this exemption entirely and become liable for standard income tax rates plus penalties and surcharges for non-filing.",
  },
  {
    q: "What is PSEB registration and what benefits does it give Pakistani IT companies?",
    a: "PSEB (Pakistan Software Export Board) registration is the official government registration for Pakistani IT companies and freelancers that unlocks significant financial and regulatory benefits. Registered businesses receive a 100% income tax exemption on IT export earnings, facilitated foreign remittance processing through Pakistani banks at lower withholding tax rates, access to government IT support schemes and grants, and official recognition as a Pakistani IT exporter that strengthens credibility with international clients. PSEB registration is free of government charges and the application process is handled entirely by us on your behalf.",
  },
  {
    q: "What is the difference between a Sole Proprietorship and a Private Limited Company in Pakistan?",
    a: "The key difference between a Sole Proprietorship and a Private Limited Company in Pakistan is legal separation and liability protection. A Sole Proprietorship means you and your business are the same legal entity — you are personally liable for all business debts and obligations. A Private Limited Company (Pvt Ltd) registered with SECP is a completely separate legal entity from its owners, which means your personal assets are protected from business liabilities, you can have multiple shareholders, issue shares, and the company carries significantly greater credibility with banks and international clients. For any IT business expecting growth, a Private Limited Company is almost always the better structure.",
  },
  {
    q: "What happens if I receive a notice from FBR and how should I respond?",
    a: "An FBR notice must never be ignored because ignoring it leads to automatic tax assessments, accumulating financial penalties, and in serious cases, legal proceedings and bank account freezes. As a Punjab Bar Council licensed advocate I review the exact notice, identify what FBR is challenging or requesting, prepare a legally correct written response with full supporting documentation, and submit it through the proper IRIS channel before the deadline. The majority of FBR notices — including audit notices, discrepancy notices, and return amendment notices — can be resolved completely without penalty when handled promptly by a qualified tax lawyer.",
  },
  {
    q: "Is IT export income from foreign clients really 100% tax exempt in Pakistan?",
    a: "Yes, IT export income in Pakistan is entitled to a 100% income tax exemption under Section 65F and related provisions of the Income Tax Ordinance 2001. This exemption covers income from software development, web development, mobile app development, digital marketing, and all IT-enabled services provided to foreign clients. The exemption applies when income is received through a Pakistani bank account in foreign currency, you are registered with FBR as an Active Taxpayer, and the income is correctly declared in your annual tax return. We ensure you are claiming this exemption accurately and legally, with no risk of future FBR challenge.",
  },
  {
    q: "Do I need a lawyer to register a company with SECP in Pakistan?",
    a: "While SECP's online portal technically allows company registration without a lawyer, having a qualified corporate advocate handle your registration provides critical protection that self-registration does not. A Punjab Bar Council licensed advocate ensures your Memorandum and Articles of Association are properly drafted for your specific business needs, your shareholding structure is legally correct, all SECP compliance requirements are met from incorporation day one, and you avoid the common drafting mistakes that cause delays, SECP rejections, or serious legal problems later when the company grows. The cost of professional registration is minimal compared to the cost of fixing incorrect incorporation documents.",
  },
  {
    q: "How do Pakistani banks handle Upwork and Fiverr payments and what documents are required?",
    a: "Pakistani banks are legally required to document the purpose of all incoming foreign remittances, and freelance platform payments from Upwork, Fiverr, PayPal, Wise, and direct client transfers require specific documentation to be processed smoothly. Banks typically require a Freelancer Certificate from MoITT, proof of services rendered, your NTN number, and FBR Active Taxpayer status. Without this documentation, banks may hold your funds, apply the double withholding tax rate applied to non-filers, or require lengthy compliance procedures that delay your payment. We prepare the complete remittance documentation package that satisfies your bank's requirements and ensures fast, uninterrupted processing of all your foreign earnings.",
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
  serviceType: "Legal and Tax Services",
  provider: { "@type": "Organization", name: "ADVAQ" },
  name: "Pakistan Legal, Tax and Corporate Services for IT Companies and Freelancers",
  description:
    "SECP company registration, FBR tax filing, PSEB registration, freelancer certificate, and legal services for Pakistani IT agencies and freelancers. Provided by a Punjab Bar Council licensed advocate.",
  areaServed: "Pakistan",
  url: "https://[yourdomain.com]/pakistan-services",
  offers: [
    { "@type": "Offer", name: "Freelancer Starter Pack", price: "199", priceCurrency: "USD" },
    { "@type": "Offer", name: "IT Company Registration Pack", price: "499", priceCurrency: "USD" },
    { "@type": "Offer", name: "Full Legal and Tax Management", price: "1499", priceCurrency: "USD" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "Pakistan Services", item: "/pakistan-services" },
  ],
};

export const Route = createFileRoute("/pakistan-services/")({
  head: () => ({
    meta: [
      { title: "Pakistan SECP, FBR & Legal Services for IT Firms | ADVAQ" },
      {
        name: "description",
        content:
          "SECP registration, FBR & PSEB filing, income tax returns, and legal services for Pakistani IT agencies and freelancers — by a licensed advocate.",
      },
      {
        name: "keywords",
        content:
          "SECP company registration, FBR tax return filing Pakistan, PSEB IT export registration, active taxpayer list ATL restoration, FBR notice response lawyer, individual wealth statement FBR, trademark registration IPO Pakistan, cofounder shareholder agreement",
      },
      {
        property: "og:title",
        content: "Pakistan Legal & Tax Services for IT Companies and Freelancers | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "SECP registration, FBR compliance, PSEB, and legal services for Pakistani IT businesses. Licensed advocate. Fully remote.",
      },
      { property: "og:url", content: "/pakistan-services" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/pakistan-services" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: PakistanServices,
});

/* ---------- SECTION 1: HERO ---------- */
function Hero() {
  return (
    <section className="relative bg-navy-950 pt-36 pb-24 overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-[0.15em]">
            🇵🇰 TRUSTED BY 200+ PAKISTANI FOUNDERS
          </p>
          <h1 className="font-serif text-white text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] mt-5 leading-[1.15] max-w-5xl mx-auto">
            <span>Your Pakistani Business Registered. </span>
            <br className="hidden sm:block" />
            <span>Compliant and Tax-Protected.</span>
          </h1>
          <p className="mt-6 text-navy-200 text-[17px] md:text-[18px] max-w-4xl mx-auto leading-[1.7]">
            SECP company registration, FBR tax return filing, PSEB export registration, and legal advisor agreements. We handle your complete Pakistan compliance, 100% remote. Managed by a Punjab Bar Council licensed advocate.
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
              <Check size={16} className="text-gold-500" /> Punjab Bar Council Licensed Advocate
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> SECP & FBR Registered Practitioner
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Remote Service
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Free Initial Consultation
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
    { title: "Upwork & Fiverr Freelancers", desc: "Claim 100% IT export tax credit & active Filer ATL status.", icon: "💻" },
    { title: "IT Agencies & Software Houses", desc: "Register SECP SMC/Pvt Ltd company & PSEB IT exporter certification.", icon: "🏢" },
    { title: "SaaS Product Builders", desc: "Protect software IP, trademark registration & client SLAs.", icon: "📱" },
    { title: "PSEB Registered Companies", desc: "100% income tax exemption under Section 154A & SBP Form-R compliance.", icon: "🎓" },
    { title: "Dollar & Pound Earners", desc: "Legal foreign remittance filing & zero tax penalty risk.", icon: "💰" },
  ];

  return (
    <section className="bg-navy-950 py-16 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-10">
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">TAILORED SOLUTIONS</p>
          <h2 className="font-serif text-white text-2xl md:text-3xl mt-2">
            Built for Pakistani IT Agencies, Software Houses & Freelancers
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
            <span>You Are Earning in Foreign Currency. </span>
            <br className="hidden sm:block" />
            <span>But Your Local Business Has No Legal Home.</span>
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-gray-600 max-w-3xl mx-auto leading-[1.65] mt-4">
            Most Pakistani freelancers and IT companies are earning foreign currency every month but have never filed a tax return, never registered their business, and have no legal protection.
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
                  FBR Is Watching
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  IT exports are 100% tax exempt in Pakistan — but only if you are registered and compliant. Unregistered freelancers risk FBR notices and penalties.
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
                  Non-Filer Penalty Penalties
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Non-filers pay double withholding tax on bank transactions, property purchases, and cash withdrawals. Active Filer status saves you money daily.
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
                  Unregistered & Unprotected
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Operating as an unregistered entity means your business name can be stolen and client contracts are unenforceable. An SECP registration protects you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-navy-950 text-white rounded-[20px] p-6 md:p-7 mt-8 border border-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif italic text-white text-base md:text-lg leading-relaxed max-w-3xl">
              "An SECP company and FBR active Filer status gives you 100% tax credit on IT exports, legal protection, and peace of mind."
            </p>
            <span className="text-gold-500 font-sans text-xs uppercase tracking-widest font-semibold shrink-0 bg-navy-900 border border-gold-500/30 px-4 py-2 rounded-full">
              — ADVAQ Global Advisory
            </span>
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
      name: "Freelancer Starter Pack",
      tag: "For individual freelancers just getting started",
      price: "$199",
      note: "one-time · no hidden fees",
      items: [
        "NTN Registration with FBR",
        "Sole Proprietorship Registration",
        "FBR Active Taxpayer Status",
        "Freelancer Certificate Application (MoITT)",
        "Income Tax Return Filing (1 year)",
        "30-min Legal Consultation",
      ],
      bestFor:
        "Best for Upwork, Fiverr, and Freelancer.com earners who want to become legally compliant and protect their income.",
      cta: "Get Started — $199",
      caption: "FBR and business registrations processed in 3–5 working days",
      featured: false,
    },
    {
      name: "IT Company Registration Pack",
      tag: "For agencies and software houses ready to go formal",
      price: "$499",
      note: "one-time · complete setup",
      items: [
        "Private Limited Company Registration (SECP)",
        "NTN Registration (Company)",
        "Sales Tax Registration (FBR)",
        "Memorandum & Articles of Association",
        "PSEB Registration for IT Companies",
        "FBR Active Taxpayer Status",
        "Company Bank Account Guidance",
        "1-Hour Legal Consultation",
      ],
      bestFor:
        "Best for IT agencies and software houses that want full legal standing, PSEB benefits, and proper tax registration in one go.",
      cta: "Get This Pack — $499",
      caption: "SECP company registration issued in 7–10 working days",
      featured: true,
    },
    {
      name: "Full Legal & Tax Management",
      tag: "Ongoing annual compliance for serious businesses",
      price: "$1,499",
      note: "per year · all filings included",
      items: [
        "Annual Income Tax Return (Company)",
        "Annual Sales Tax Returns (12 months)",
        "Withholding Tax Compliance (monthly)",
        "SECP Annual Filing",
        "FBR Notice Handling (unlimited)",
        "Quarterly Legal Consultation",
        "Contract Review (up to 3 per year)",
        "Dedicated WhatsApp Support",
      ],
      bestFor:
        "Best for established IT companies that want a qualified lawyer managing all Pakistan compliance year-round.",
      cta: "Start Annual Plan — $1,499/yr",
      caption: "Complete annual compliance handling and legal support",
      featured: false,
    },
  ];

  return (
    <section id="packages" className="bg-off-white py-16 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>PACKAGES</SectionLabel>
          <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] text-dark-text mt-3 leading-[1.18] max-w-4xl mx-auto">
            Everything Your Pakistani IT Business Needs.
          </h2>
          <p className="text-gray-600 text-[15px] md:text-[16px] max-w-3xl mx-auto leading-[1.65] mt-4">
            Not sure where to start? These three packages are bundled to save you money.
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
    <div className="max-w-3xl mb-12">
      <div className="inline-flex items-center gap-2 rounded-full bg-navy-950 text-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest border border-gold-500/30 mb-3 shadow-md">
        <span>{step}</span>
      </div>
      <h3 className="font-serif text-3xl font-bold text-navy-950 mt-2">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed text-base">{desc}</p>
    </div>
  );
}

function IndividualServices() {
  return (
    <section className="bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <SectionLabel center>INDIVIDUAL SERVICES</SectionLabel>
          <h2 className="font-serif text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] text-dark-text mt-3 leading-[1.18] max-w-6xl mx-auto">
            Every Pakistani Service. Clear Price. No Surprises.
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Pick exactly what you need. Every service is handled personally — not outsourced, not automated, not a template. Professionally delivered and legally sound.
          </p>
        </Reveal>

        {/* SUB-SECTION A: FORMATION & REGISTRATION */}
        <div className="py-16 border-t border-border">
          <Reveal>
            <SubSectionHeader
              step="STEP 1"
              title="Form Your Pakistani Business"
              desc="Choose the right business structure for your IT agency or freelance setup. We register your business with SECP or local authorities correctly."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Building2}
                title="Private Limited Company Registration (SECP)"
                price="$249"
                desc="Register your IT company as a Private Limited Company with the Securities and Commission of Pakistan. Draft Memorandum & Articles of Association, handle online filing, and get your incorporation certificate."
                items={[
                  "SECP name availability check",
                  "Memorandum of Association drafting",
                  "Articles of Association drafting",
                  "SECP online portal filing",
                  "Certificate of Incorporation",
                ]}
                guideUrl="/pakistan-services/secp-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={UserCheck}
                title="Single Member Company (SMC) Registration (SECP)"
                price="$149"
                desc="A Single Member Company (SMC) is a Private Limited Company with a single owner. It is ideal for solo founders who want the legal protection of a company structure without business partners. It is registered with SECP."
                items={[
                  "SECP SMC registration",
                  "Single member Articles of Association",
                  "Company NTN registration",
                  "Share certificate preparation",
                  "Corporate bank account guidance",
                ]}
                guideUrl="/pakistan-services/single-member-company"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={User}
                title="Sole Proprietorship Registration (FBR)"
                price="$99"
                desc="Register your freelance business or trade name with the relevant district authority. Required for opening a business bank account, applying for a freelancer certificate, and maintaining FBR compliance."
                items={[
                  "Business name registration",
                  "District authority filing",
                  "Business NTN setup",
                  "Chamber of Commerce assistance",
                  "Remittance verification support",
                ]}
                guideUrl="/pakistan-services/sole-proprietorship"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* SUB-SECTION B: TAX REGISTRATIONS */}
      <div className="bg-off-white py-24 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SubSectionHeader
              step="STEP 2"
              title="Register With FBR & Provincial Revenue Authorities"
              desc="Set up your tax registrations with FBR and provincial authorities. Get your tax IDs to operate legally and open business bank accounts."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Hash}
                title="NTN Registration (Company)"
                price="$49"
                desc="Register for your National Tax Number (NTN) with FBR. It is your tax identity in Pakistan and required for all business registrations, bank accounts, property transactions, and maintaining Active Taxpayer status."
                items={[
                  "National Tax Number registration",
                  "Individual or Company NTN",
                  "FBR portal setup",
                  "Active status verification",
                  "Tax file creation support",
                ]}
                guideUrl="/pakistan-services/ntn-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Receipt}
                title="Sales Tax Registration (Company)"
                price="$99"
                desc="Register for Sales Tax with FBR via the IRIS portal. It is required for IT companies providing taxable services in Pakistan and by many corporate clients before they will actively engage your business."
                items={[
                  "FBR Sales Tax registration",
                  "IRIS online filing",
                  "Sales tax certificate",
                  "Provincial authority registration advice",
                  "Tax scheme suitability assessment",
                ]}
                guideUrl="/pakistan-services/sales-tax-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Globe}
                title="PSEB Registration for IT Company"
                price="$149"
                desc="Register your IT company or freelancer profile with the Pakistan Software Export Board and unlock IT export tax exemptions, facilitated bank remittances, government IT schemes, and official recognition."
                items={[
                  "Pakistan Software Export Board registration",
                  "Tax exemption support",
                  "Bank remittance clearance",
                  "IT exporter status",
                  "Annual renewal tracking",
                ]}
                guideUrl="/pakistan-services/pseb-registration"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SUB-SECTION C: ANNUAL COMPLIANCE */}
        <div className="py-24">
          <Reveal>
            <SubSectionHeader
              step="STEP 3"
              title="Stay Legally Compliant — Every Year"
              desc="SECP companies have annual filing obligations. We ensure your filings are submitted on time, keeping your business active."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={RefreshCw}
                title="SECP Annual Filing (Form A & Form 9)"
                price="$199"
                desc="Prepare and file mandatory SECP returns (Form A, Form 9) within deadlines. We compile annual general meeting documentation and ensure SECP records are fully up to date."
                items={[
                  "Form A and Form 9 preparation",
                  "Annual general meeting documentation",
                  "SECP portal submission",
                  "Director records update",
                  "SECP filing reminders",
                ]}
                guideUrl="/pakistan-services/secp-annual-filing"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={FileText}
                title="FBR Income Tax Return — Company/AOP"
                price="From $149"
                desc="Annual corporate income tax return for Private Limited Companies, SMCs, and AOPs. Tax computation, depreciation schedules, and financial statement filing."
                items={[
                  "Corporate return preparation",
                  "SECP-compliant financial statements",
                  "Depreciation schedules",
                  "IRIS e-filing",
                  "Auditor coordination support",
                ]}
                guideUrl="/pakistan-services/company-tax-return"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={FileText}
                title="FBR Income Tax Return — Sole Proprietor"
                price="From $99"
                desc="Annual income tax return filing for freelancers, self-employed individuals, and company directors. Review income, wealth reconciliation, and file on IRIS."
                items={[
                  "Annual FBR IRIS return filing",
                  "Wealth statement reconciliation",
                  "Freelance income declaration",
                  "Active status retention",
                  "Free tax advice",
                ]}
                guideUrl="/pakistan-services/individual-tax-return"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* SUB-SECTION D: TAX RETURNS & NOTICES */}
      <div className="bg-off-white py-24 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SubSectionHeader
              step="STEP 4"
              title="File Your Taxes & Respond to FBR Notices"
              desc="File your annual returns and claim your 100% IT export tax exemption. We also handle any FBR notice responses with full legal cover."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Calculator}
                title="Withholding Tax Compliance"
                price="$49/month"
                desc="Prepare and file monthly Section 165 withholding tax statements for salary, contractor payments, and service fees. Avoid automatic FBR penalties and stay compliant."
                items={[
                  "Monthly Section 165 statement preparation",
                  "Salary/contractor withholding tax filing",
                  "FBR challan generation",
                  "Compliance reports",
                  "Monthly filing schedule tracking",
                ]}
                guideUrl="/pakistan-services/withholding-compliance"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Receipt}
                title="Sales Tax Return (Company)"
                price="From $49/month"
                desc="Monthly sales tax return filing on FBR IRIS and provincial revenue portals (PRA/SRB/KPRA/BRA). Input and output tax reconciliation, challan generation, and timely submission."
                items={[
                  "Input & output sales tax reconciliation",
                  "Monthly / quarterly FBR & provincial filing",
                  "FBR IRIS & PRA/SRB portal submission",
                  "Tax challan generation & payment guidance",
                  "Filing deadline alerts & compliance records",
                ]}
                guideUrl="/pakistan-services/sales-tax-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={AlertOctagon}
                title="FBR Notice Reply — Company"
                price="From $199"
                desc="Received a notice from FBR? Do not ignore it. As a licensed advocate I review the notice, prepare a response on advocate letterhead, and submit it on IRIS."
                items={[
                  "FBR notice review",
                  "Legal reply drafting on advocate letterhead",
                  "IRIS portal submission",
                  "FBR commissioner representation",
                  "Audit notice response handling",
                ]}
                guideUrl="/pakistan-services/fbr-notice-response"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SUB-SECTION E: LEGAL & CORPORATE SERVICES */}
        <div className="py-24">
          <Reveal>
            <SubSectionHeader
              step="STEP 5"
              title="Legal Protection & Intellectual Property"
              desc="Protect your intellectual property, partner relationships, and contracts. Handled by a Punjab Bar Council licensed advocate."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={BadgeCheck}
                title="Trademark Registration (IPO Pakistan)"
                price="$299"
                desc="Register your brand name, logo, or product name as a trademark with the Intellectual Property Organisation of Pakistan (IPO-Pakistan). Protect your brand identity."
                items={[
                  "Brand name & logo search",
                  "IPO-Pakistan trademark application",
                  "Classification advice",
                  "Registration certificate",
                  "Infringement notice support",
                ]}
                guideUrl="/pakistan-services/trademark-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={FileSignature}
                title="Partnership Deed Drafting (Pakistan)"
                price="$49"
                desc="A professionally drafted Partnership Deed protects every business partner's rights, profit share percentage, decision-making authority, and exit terms."
                items={[
                  "Partnership deed drafting",
                  "Registered firm filing",
                  "Partner profit split structure",
                  "Dispute resolution terms",
                  "Exit guidelines drafting",
                ]}
                guideUrl="/pakistan-services/partnership-deed"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Handshake}
                title="Shareholder Agreement (Pakistan)"
                price="$49"
                desc="A legally binding agreement between shareholders. Covers voting rights, dividend policy, share transfer restrictions, and co-founder exit terms."
                items={[
                  "Custom Shareholder Agreement",
                  "Voting rights clause",
                  "Share transfer restrictions",
                  "Dividend distribution guidelines",
                  "Multi-founder exit terms",
                ]}
                guideUrl="/pakistan-services/shareholder-agreement"
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
          Order Now <ArrowRight size={14} />
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
            Complete Setup Solutions for Pakistani IT Businesses.
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            These premium packages are for Pakistani freelancers and IT businesses that want a complete, end-to-end solution — not a piecemeal service.
          </p>
        </Reveal>

        <div className="space-y-8 mt-12">
          <Reveal>
            <PremiumBundleCard
              icon={Package}
              badge="THE ULTIMATE BUNDLE"
              title="SECP Pvt Ltd Company Registration + Full Tax Setup"
              price="$499"
              note="one-time · complete setup"
              body="Everything your growing IT agency or software house needs to establish its corporate presence in Pakistan. Trade license, tax IDs, and PSEB export registration completed under professional legal oversight."
              items={[
                "Private Limited Company Registration (SECP)",
                "Company NTN Registration",
                "Sales Tax Registration (FBR)",
                "Memorandum & Articles of Association",
                "PSEB Registration for IT Companies",
                "FBR Active Taxpayer Status",
                "Company Bank Account Guidance",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={BadgePercent}
              badge="100% TAX PROTECTION"
              title="FBR Export Exemption + PSEB Registration Package"
              price="$299"
              note="one-time · tax-exempt"
              body="Establish your legal tax exemption on IT export income under Section 65F. We handle your FBR export registration, PSEB filing, and prepare the complete bank remittance package to prevent account locks."
              items={[
                "NTN Registration (Company)",
                "PSEB Registration for IT Company",
                "FBR Export Exemption Registration",
                "Income Tax Return — Individual",
                "Income Tax Return — Company",
                "Bank Remittance documentation package",
                "Active Taxpayer list verification",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={Handshake}
              badge="MULTI-FOUNDER PROTECTION"
              title="Co-Founder Shareholder Agreement + IP Assignment"
              price="$99"
              note="one-time · legal protection"
              body="A legally binding agreement drafted by a Punjab Bar Council licensed advocate. Protects co-founders, registers share structures, sets up IP assignments, and documents exit terms cleanly."
              items={[
                "Custom Shareholder Agreement",
                "Intellectual Property (IP) assignment clauses",
                "Voting rights & board seat allocations",
                "Vesting schedules & buy-back rights",
                "Co-founder dispute resolution framework",
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
      Icon: Award,
      name: "Freelancer Certificate (MoITT)",
      price: "$49",
      desc: "Apply for your Freelancer Certificate from the Ministry of IT. Required by banks to receive foreign remittances with lower tax.",
    },
    {
      Icon: Banknote,
      name: "Bank Remittance Documentation",
      price: "$49",
      desc: "Prepare the complete documentation package your bank requires to receive Upwork/Fiverr foreign remittances without delay.",
    },
    {
      Icon: RefreshCw,
      name: "Active Taxpayer List (ATL) Restoration",
      price: "$99",
      desc: "If your name has been removed from ATL, we file returns and submit surcharges to restore active taxpayer status immediately.",
    },
    {
      Icon: Scale,
      name: "Legal Consultation (Business Law)",
      price: "$49/session",
      desc: "One-on-one session with a Punjab Bar Council licensed advocate specializing in corporate, tax, and IT business law.",
    },
    {
      Icon: FileSearch,
      name: "Contract Review & Legal Opinion",
      price: "$49",
      desc: "Contract review for client agreements, employment deeds, or partner documents. Legal opinion on risks and edits.",
    },
    {
      Icon: FileSignature,
      name: "Partnership Deed Drafting",
      price: "$49",
      desc: "Professionally drafted Partnership Deed under the Partnership Act 1932 to protect every business partner's rights.",
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
            Stop Delaying Your
            <br />
            Pakistan Compliance.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every month you operate without proper registration, tax filing, and legal protection is a month of unnecessary financial and legal risk. FBR penalties accumulate. Bank restrictions tighten. Let us fix that — starting today.
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
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-gold-500 text-gold-500 px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-gold-500/10 transition-all rounded-none"
            >
              View All Packages
            </a>
          </div>
          <p className="mt-6 text-[13px] text-navy-200">
            Free initial consultation · Punjab Bar Council Licensed Advocate · SECP & FBR Practitioner
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function PakistanServices() {
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
