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
  MapPin,
  Hash,
  Receipt,
  Users,
  BookOpen,
  ClipboardList,
  Landmark,
  FileText,
  BarChart3,
  PiggyBank,
  Calculator,
  Wallet,
  Package,
  TrendingUp,
  ShoppingBag,
  Trash2,
  UserCheck,
  Home,
  Globe,
  CreditCard,
  RefreshCw,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Can a Pakistani citizen register a UK Limited Company?",
    a: "Yes — and there is no restriction whatsoever on nationality or residency. Any individual anywhere in the world can register a UK Limited Company with Companies House. You do not need a UK address, a UK bank account, or a UK visa. You do need a registered office address in the UK, which we provide as standard with every company formation. Pakistani founders form UK Limited Companies every day — the process is entirely remote and typically completed within 48 hours.",
  },
  {
    q: "Why do I need a UK LTD company as a Pakistani freelancer?",
    a: "A UK Limited Company unlocks payment processors that are otherwise inaccessible from Pakistan — including Stripe, PayPal Business, Wise Business, and Paddle. It also gives you a professional business identity that international clients — especially UK and European companies — expect before signing contracts or making payments. Beyond payments, it provides legal protection for your work, your income, and your intellectual property. For any freelancer billing more than $1,000 per month, the cost of a UK LTD is recovered from a single payment it enables.",
  },
  {
    q: "How long does UK company formation take?",
    a: "Once we receive your information and confirm the company name is available, UK Limited Company formation with Companies House typically takes 24 to 48 working hours. You then receive your Certificate of Incorporation, Memorandum and Articles of Association, and company number — which are the documents needed to open Stripe, Wise Business, and other payment accounts.",
  },
  {
    q: "Do I need to visit the UK to form or run a company?",
    a: "No. The entire UK company formation process is completed remotely. You never need to visit the UK to form your company, open a Wise business account, register with HMRC, or file your annual returns. Everything is handled digitally. We manage all correspondence with Companies House and HMRC on your behalf.",
  },
  {
    q: "What is a Confirmation Statement and when is it due?",
    a: "A Confirmation Statement is an annual filing with Companies House confirming that your company's registered information — directors, shareholders, registered address, and share structure — is accurate and up to date. It is due once every 12 months from your company's incorporation date. Missing the deadline can result in automatic penalties and ultimately your company being struck off the register. We file it before the deadline, every year, without you needing to remember.",
  },
  {
    q: "What taxes does a UK Limited Company pay?",
    a: "A UK Limited Company pays Corporation Tax on its annual profits — currently 19% for profits below £50,000. As a company director, you are also required to file a personal Self Assessment tax return each year covering your director salary and any dividends you take from the company. The most tax-efficient structure — which we advise on — involves a small salary within your personal allowance and the remainder taken as dividends, which are taxed at a lower rate than income.",
  },
  {
    q: "Can I take money out of my UK LTD without paying a lot of tax?",
    a: "Yes — and this is one of the most significant advantages of operating through a UK Limited Company. The most tax-efficient method is to pay yourself a small monthly salary — set at the National Insurance threshold — and take the rest of your income as dividends, which carry a lower personal tax rate than salary. Structured correctly, a UK LTD director earning £50,000 per year can legally reduce their tax bill by thousands compared to operating as a sole trader. Our Tax Efficiency Consultation walks you through the exact numbers for your situation.",
  },
  {
    q: "What is VAT and do I need to register?",
    a: "VAT (Value Added Tax) is a consumption tax applied to most goods and services sold in the UK. VAT registration is legally mandatory once your UK taxable turnover exceeds £90,000 in any rolling 12-month period. Voluntary registration is available from £187,500 and can be beneficial if you supply other VAT-registered businesses, as they can reclaim the VAT you charge. If you are primarily serving clients outside the UK, many of your services may be zero-rated for VAT purposes — which we assess as part of registration.",
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
  serviceType: "UK Limited Company Formation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  areaServed: "Worldwide",
  description:
    "UK LTD formation, annual accounts, self assessment, VAT registration, and bookkeeping for freelancers, IT companies, and online earners.",
  offers: { "@type": "Offer", price: "299", priceCurrency: "GBP" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "UK Services", item: "/uk-services" },
  ],
};

export const Route = createFileRoute("/uk-services/")({
  head: () => ({
    meta: [
      { title: "UK Business Setup & Corporate Compliance Services | ADVAQ" },
      {
        name: "description",
        content:
          "Complete UK business setup services for global founders & IT firms. SECP/HMRC compliant business registration, VAT, PAYE, annual accounts, & tax filings remote.",
      },
      {
        name: "keywords",
        content:
          "uk business setup services, business setup in uk, uk business registration & compliance, uk company setup non resident, uk business accounting and tax advisory, register business in united kingdom",
      },
      {
        property: "og:title",
        content: "UK Business Setup & Corporate Compliance Services | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Complete UK business setup services for global founders & IT firms. SECP/HMRC compliant business registration, VAT, PAYE, annual accounts, & tax filings remote.",
      },
      { property: "og:url", content: "/uk-services" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uk-services" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: UKServices,
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
            🇬🇧 TRUSTED BY 200+ PAKISTANI FOUNDERS
          </p>
          <h1 className="font-serif text-white text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] mt-5 leading-[1.15] max-w-5xl mx-auto">
            <span>Your UK Limited Company Registered. </span>
            <br className="hidden sm:block" />
            <span>Ready to Accept Global Payments.</span>
          </h1>
          <p className="mt-6 text-navy-200 text-[17px] md:text-[18px] max-w-4xl mx-auto leading-[1.7]">
            Most Pakistani freelancers and IT agencies are one document away from unlocking Stripe, Wise Business, and PayPal, they just do not know it yet. We form your UK Limited Company and keep it legally compliant, year after year. 100% remote. No UK visit needed.
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
              <Check size={16} className="text-gold-500" /> Companies House Registered Agent
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> HMRC Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 48hr Formation Turnaround
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
    { title: "Upwork & Fiverr Freelancers", desc: "Unlock Stripe & Wise Business to receive direct client payouts.", icon: "💻" },
    { title: "IT Agencies & Software Houses", desc: "Win UK & EU enterprise contracts with registered UK LTD credibility.", icon: "🏢" },
    { title: "Amazon, Etsy & Shopify Sellers", desc: "Access UK marketplaces, EORI numbers & VAT seller programs.", icon: "🛒" },
    { title: "Stripe & Paddle Users", desc: "Zero account closures with verified UK LTD business documentation.", icon: "💳" },
    { title: "SaaS & App Developers", desc: "Collect recurring SaaS subscription payments in GBP & USD globally.", icon: "📱" },
  ];

  return (
    <section className="bg-navy-950 py-16 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-10">
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">TAILORED SOLUTIONS</p>
          <h2 className="font-serif text-white text-2xl md:text-3xl mt-2">
            Built for Pakistani Freelancers, IT Companies & Online Earners
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
            <span>You Are Earning in Pounds and Dollars. </span>
            <br className="hidden sm:block" />
            <span>But Your Business Has No Legal Home.</span>
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-gray-600 max-w-3xl mx-auto leading-[1.65] mt-4">
            Thousands of talented Pakistani developers, designers, and IT agency owners are billing UK and international clients every month — but operating without a registered company, without proper tax compliance, and without the legal protection they deserve.
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
                  Stripe Won't Accept You
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Stripe requires a registered UK or US company to open a business account. Without one, you are stuck using personal accounts with lower limits and constant risk of account closure.
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
                  Clients Ask for LTD Documents
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  International clients increasingly require proof of company registration before signing contracts or making payments. Without it, you lose deals to competitors who have registered companies.
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
                  You Have Zero Legal Protection
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  If a client refuses to pay, disputes your work, or claims ownership of what you built — you have almost no legal recourse without a registered company. A UK Limited Company protects you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-navy-950 text-white rounded-[20px] p-6 md:p-7 mt-8 border border-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif italic text-white text-base md:text-lg leading-relaxed max-w-3xl">
              "A UK Limited Company costs less than one lost client invoice. It takes 48 hours to form. And it opens every door that has been closed to you."
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
      tag: "Get your UK company live in 48 hours",
      price: "£349",
      note: "one-time · no hidden fees",
      items: [
        "UK LTD Company Formation",
        "Registered Office Address (1 year)",
        "UTR Number Registration with HMRC",
        "Wise Business Account Setup Guide",
        "Share Certificate & Company Documents",
        "Free Consultation Call (30 minutes)",
      ],
      bestFor:
        "Perfect for Upwork, Fiverr, and Toptal freelancers who want to start accepting international payments through a legitimate UK company — fast.",
      cta: "Get Started — £349",
      caption: "Formation confirmed in as little as 48 hours",
      featured: false,
    },
    {
      name: "Annual Compliance Pack",
      tag: "Your LTD stays legal — we handle everything",
      price: "£499",
      note: "per year · all filings included",
      items: [
        "Company Annual Accounts (Statutory)",
        "Confirmation Statement (CS01)",
        "Corporation Tax Return (CT600)",
        "Director's Self Assessment Tax Return",
        "HMRC & Companies House Filing",
        "Dedicated Account Manager",
      ],
      bestFor:
        "For existing UK LTD owners who want every legal annual filing handled correctly and on time — without chasing deadlines or decoding HMRC letters.",
      cta: "Get This Pack — £499",
      caption: "Everything your LTD legally needs, every year",
      featured: true,
    },
    {
      name: "Full Management Monthly",
      tag: "Your accounts run themselves",
      price: "£199",
      note: "per month · cancel anytime",
      items: [
        "Monthly Bookkeeping (Xero / QuickBooks)",
        "Director-Only Payroll Setup",
        "Quarterly VAT Return Filing",
        "Expense Categorisation & Reports",
        "WhatsApp Support (Mon–Sat)",
        "Year-End Accounts Included",
      ],
      bestFor:
        "For serious UK LTD directors who want complete hands-off financial management — books reconciled, payroll run, VAT filed, and nothing missed.",
      cta: "Start Monthly Plan — £199/m",
      caption: "No long-term contract. Cancel anytime.",
      featured: false,
    },
  ];

  return (
    <section id="packages" className="bg-off-white py-16 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>PACKAGES</SectionLabel>
          <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] text-dark-text mt-3 leading-[1.18] max-w-4xl mx-auto">
            Everything Your UK Business Needs.
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
            Every UK Service. Clear Price. No Surprises.
          </h2>
          <p className="text-gray-600 text-[17px] md:text-[18px] max-w-4xl mx-auto leading-[1.7] mt-6">
            Pick exactly what you need. Every service is handled personally — not outsourced, not automated, not a template. Professionally delivered and legally sound.
          </p>
        </Reveal>

        {/* SUB-SECTION A: FORMATION */}
        <div className="py-16 border-t border-border">
          <Reveal>
            <SubSectionHeader
              step="STEP 1"
              title="Form Your UK Company"
              desc="Every UK business journey starts here. Your Limited Company is the legal entity that opens Stripe, holds contracts, pays you dividends, and protects your personal assets. We form it correctly — the first time."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Building2}
                title="UK Limited Company (LTD) Formation"
                price="From £249"
                desc="Register your UK Limited Company with Companies House and receive your Certificate of Incorporation within 48 hours. The moment your LTD is active, you can open Stripe, PayPal Business, Wise Business, and Paddle accounts."
                items={[
                  "Companies House registration",
                  "Certificate of Incorporation",
                  "Memorandum & Articles of Association",
                  "Company shares certificate",
                ]}
                guideUrl="/uk-services/ltd-formation"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={MapPin}
                title="Registered Office Address"
                price="£99/year"
                desc="Every UK Limited Company legally requires a registered office address. We help you get UK-based address, receive all official HMRC and Companies House correspondence, and forward it to you digitally wherever you are in the world."
                items={[
                  "London-based registered address",
                  "Mail scanning & digital forwarding",
                  "HMRC correspondence handling",
                  "Annual renewal reminder",
                ]}
                guideUrl="/uk-services/registered-office-address"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* SUB-SECTION B: REGISTRATIONS */}
      <div className="bg-off-white py-24 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SubSectionHeader
              step="STEP 2"
              title="Register With HMRC"
              desc="Forming a company is just the beginning. These registrations tell HMRC who you are, what taxes you owe, and give you the legal identity to operate, pay yourself, and charge VAT — correctly."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Hash}
                title="UTR Number Registration"
                price="£49"
                desc="Your Unique Taxpayer Reference (UTR) is your personal tax identity with HMRC. Without it, you cannot file a Self Assessment return, claim director expenses, or prove your UK tax status to banks or clients. We register you directly with HMRC and handle all initial correspondence."
                items={[
                  "HMRC registration as director / self-employed",
                  "UTR number application & tracking",
                  "HMRC online account setup guidance",
                  "Confirmation letter handling",
                  "Response to any HMRC queries",
                ]}
                guideUrl="/uk-services/utr-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Receipt}
                title="VAT Registration"
                price="£149"
                desc="VAT registration is mandatory when your UK taxable turnover exceeds £90,000 — and smart to consider before that if you work with B2B European clients who can reclaim VAT. We handle the entire HMRC VAT registration and make sure you are on the right VAT scheme from day one."
                items={[
                  "HMRC VAT registration application",
                  "VAT registration confirmation",
                  "VAT scheme advice (Standard / Flat Rate)",
                  "First VAT return guidance",
                  "MTD (Making Tax Digital) setup",
                ]}
                guideUrl="/uk-services/vat-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Landmark}
                title="Corporation Tax Registration"
                price="£149"
                desc="Every UK Limited Company must register for Corporation Tax with HMRC within 3 months of starting business activities. We handle your HMRC Corporation Tax registration, set up your company tax account, and ensure full statutory compliance from day one."
                items={[
                  "HMRC Corporation Tax registration",
                  "Company UTR & tax office setup",
                  "Accounting period alignment",
                  "Government Gateway activation",
                  "HMRC correspondence & filing reminders",
                ]}
                guideUrl="/uk-services/corporation-tax-registration"
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
              desc="A UK Limited Company has legal filing obligations every single year — regardless of whether it traded or made a profit. Miss a deadline and your company faces automatic penalties, or worse, gets struck off the register entirely. We make sure that never happens."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={BookOpen}
                title="Company Annual Accounts"
                price="From £199"
                desc="Statutory accounts are a legal requirement for every UK Limited Company. Filed with both Companies House and HMRC each year, they document your company's financial performance and form the basis of your Corporation Tax calculation. We prepare them accurately and file them on time."
                items={[
                  "Profit & loss statement",
                  "Balance sheet preparation",
                  "Companies House annual filing",
                  "HMRC financial statements submission",
                  "Director's report",
                ]}
                guideUrl="/uk-services/annual-accounts"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={ClipboardList}
                title="Confirmation Statement (CS01)"
                price="£99"
                desc="The Confirmation Statement, formerly known as the Annual Return, is yearly filed with Companies House confirming that your company's registered details are accurate and up to date. It takes minutes to prepare, but missing the deadline can result in your company being automatically struck off."
                items={[
                  "Review of current company register",
                  "Update officer or address details",
                  "CS01 filing with Companies House",
                  "Confirmation receipt & compliance record",
                  "Filing deadline reminder (30 days in advance)",
                ]}
                guideUrl="/uk-services/confirmation-statement"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Users}
                title="PAYE & Payroll Management"
                price="£99"
                desc="Before you can pay yourself or any employee a salary through your UK LTD, HMRC requires your company to be registered as an employer under PAYE. We set up your PAYE scheme, register your company with HMRC, and prepare everything for your first payroll run."
                items={[
                  "PAYE employer registration with HMRC",
                  "Employer reference number",
                  "First payroll setup guidance",
                  "RTI submission framework",
                  "Director salary structure advice",
                ]}
                guideUrl="/uk-services/paye-payroll-registration"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* SUB-SECTION D: TAX RETURNS */}
      <div className="bg-off-white py-24 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SubSectionHeader
              step="STEP 4"
              title="File Your Taxes. Keep More of What You Earn."
              desc="Tax compliance is not just a legal obligation — it is an opportunity. The right salary and dividend structure, the right VAT scheme, the right deductions claimed — these decisions directly affect how much money stays in your pocket. We do not just file your returns. We make them work for you."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={FileText}
                title="Self Assessment Tax Return"
                price="£149"
                desc="As a UK company director, you are legally required to file a personal Self Assessment tax return with HMRC each year. This covers your director salary, dividends received, and any other personal income. We calculate your exact tax liability and structure it to be as low as legally possible."
                items={[
                  "Director salary + dividends calculation",
                  "HMRC Self Assessment online submission",
                  "Tax liability calculation & review",
                  "UTR registration assistance if needed",
                  "Up to 1 free amendment if required",
                ]}
                guideUrl="/uk-services/self-assessment"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={BarChart3}
                title="VAT Return Filing"
                price="£149/quarter"
                desc="Once VAT-registered, your company must file a VAT return — usually quarterly — through HMRC's Making Tax Digital system. Late or incorrect submissions attract automatic penalties. We reconcile your input and output VAT, calculate exactly what is owed or refundable, and submit through the correct MTD-compliant channel."
                items={[
                  "Quarterly VAT calculation",
                  "MTD-compliant HMRC submission",
                  "Input / output VAT reconciliation",
                  "VAT payment reminder",
                  "Annual VAT account review",
                ]}
                guideUrl="/uk-services/vat-return-filing"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Landmark}
                title="Corporation Tax Return (CT600)"
                price="£149"
                desc="Every UK Limited Company must file a Corporation Tax Return (Form CT600) with HMRC each year, whether it made a profit or a loss. This is separate from your annual accounts, and carries its own deadline. We prepare your tax computation, apply all allowable deductions, and submit your Form CT600."
                items={[
                  "Tax computation & allowances review",
                  "Capital allowances calculation",
                  "CT600 HMRC submission",
                  "Tax payment deadline notification",
                  "Confirmation of filing received",
                ]}
                guideUrl="/uk-services/corporation-tax-return"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SUB-SECTION E: ACCOUNTING & PAYROLL */}
        <div className="py-24">
          <Reveal>
            <SubSectionHeader
              step="STEP 5"
              title="Keep Your Books Clean. Pay Yourself Correctly."
              desc="Clean books are not just good practice — they are the foundation of every tax return, every VAT filing, and every financial decision you make. And a correctly structured director payroll saves you thousands every year in unnecessary tax."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Calculator}
                title="Monthly Bookkeeping"
                price="From £99/month"
                desc="Track every Upwork payment, Fiverr withdrawal, Wise transfer, and business expense properly categorised, reconciled, and reported cleanly each month. We use Xero or QuickBooks and provide you with a monthly profit & loss report so you always know exactly where your business stands financially."
                items={[
                  "Income & expense categorisation",
                  "Bank & payment platform reconciliation",
                  "Monthly profit & loss report",
                  "Xero / QuickBooks cloud management",
                  "VAT-ready record keeping",
                ]}
                guideUrl="/uk-services/bookkeeping"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Wallet}
                title="Director Payroll (Monthly)"
                price="£99/month"
                desc="As a UK LTD director, the most tax-efficient way to pay yourself is through a small monthly salary, set at the optimal level to maintain your National Insurance record without triggering unnecessary income tax. We run your payroll, submit RTI to HMRC monthly, and generate payslips."
                items={[
                  "PAYE scheme registration (if not already done)",
                  "Monthly director payslip generation",
                  "RTI submission to HMRC every month",
                  "Employer NIC calculation & management",
                  "P60 annual year-end form",
                ]}
                guideUrl="/uk-services/director-payroll"
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
            For Freelancers Who Want Everything Done Right,
            <br />
            the First Time.
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            These premium packages are for Pakistani freelancers and IT businesses that want a complete, end-to-end solution — not a piecemeal service.
          </p>
        </Reveal>

        <div className="space-y-8 mt-12">
          <Reveal>
            <PremiumBundleCard
              icon={Package}
              badge="THE POWERFUL COMBO"
              title="UK LTD + US LLC Double Setup"
              price="£599"
              note="one-time · maximum flexibility"
              body="The ultimate setup for serious online earners. Get a UK LTD for Wise Business and a Wyoming LLC for Stripe and US clients. Gives you redundant payment gateways and ultimate business flexibility."
              items={[
                "UK LTD Formation + UTR",
                "Registered Address UK (1 year)",
                "Bank Account Setup Guide (UK)",
                "Wyoming LLC Formation + EIN",
                "Registered Address US (1 year)",
                "BOI Report FinCEN Filing (US)",
                "Bank Account Setup Guide (US)",
                "60-minute strategy call",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={ShoppingBag}
              badge="FOR ONLINE SELLERS"
              title="E-Commerce UK LTD Setup (Amazon UK, Etsy, Shopify)"
              price="£399"
              note="one-time · seller-ready"
              body="Built for Amazon UK, Etsy, and Shopify sellers who need a UK Limited Company to access marketplace seller programmes, charge VAT correctly, and import physical goods with an EORI number. We set up everything the marketplace requires — in one package."
              items={[
                "UK LTD Formation",
                "Registered Office Address",
                "UTR Number Registration",
                "VAT Registration (if applicable)",
                "EORI Number Registration",
                "Amazon Seller account setup guidance",
                "30-min seller onboarding call",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={TrendingUp}
              badge="MOST POPULAR FOR DIRECTORS"
              title="Tax Efficiency Consultation"
              price="£149"
              note="one-time · personalised strategy"
              body="A one-on-one consultation dedicated entirely to making your UK LTD as tax-efficient as legally possible. We analyse your income, build a personalised salary-dividend strategy, and give you a written plan you can follow for the entire financial year — saving you far more than the consultation costs."
              items={[
                "60-min strategy call (Zoom or WhatsApp)",
                "Salary vs dividend optimisation",
                "Tax-free allowances breakdown",
                "IR35 risk assessment if applicable",
                "Written personalised summary report",
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
      Icon: Trash2,
      name: "Company Dissolution / Strike-Off",
      price: "£149",
      desc: "Close your UK LTD legally with Companies House. Includes final filing and dissolution confirmation.",
    },
    {
      Icon: UserCheck,
      name: "Change of Director",
      price: "£49",
      desc: "Add or remove a director from your Companies House register. Processed and confirmed within 24 hours.",
    },
    {
      Icon: Home,
      name: "Change of Registered Address",
      price: "£49",
      desc: "Update your company's registered office address with Companies House quickly and correctly.",
    },
    {
      Icon: Globe,
      name: "EORI Number Registration",
      price: "£99",
      desc: "Required for any UK business importing or exporting physical goods. We register your EORI with HMRC.",
    },
    {
      Icon: CreditCard,
      name: "Wise / Airwallex Business Account Guide",
      price: "£49",
      desc: "Step-by-step guide to opening a UK business bank account remotely — no UK residency required.",
    },
    {
      Icon: RefreshCw,
      name: "Registered Address Renewal",
      price: "£99/year",
      desc: "Keep your London registered office address active for another 12 months. Renewed before expiry.",
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
            Your UK Company Is
            <br />
            48 Hours Away.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every day without a registered UK company is a day Stripe stays closed, clients ask for documents you cannot provide, and payments you earned sit out of reach. Let us fix that — starting today.
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
            Free initial consultation · Punjab Bar Council Licensed Advocate · 48-hour company formation
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function UKServices() {
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