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
  Receipt,
  Shield,
  BarChart3,
  FileText,
  Calculator,
  BadgePercent,
  Landmark,
  Package,
  TrendingUp,
  ShoppingBag,
  RefreshCw,
  Edit,
  Trash2,
  XCircle,
  UserCheck,
  Globe,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Can a Pakistani citizen own 100% of a UAE company?",
    a: "Yes, Pakistani citizens can own 100% of a UAE Freezone company without any local UAE partner or sponsor. UAE Freezone companies allow complete foreign ownership, full profit repatriation, and zero personal income tax. Mainland companies were also opened to 100% foreign ownership in most business activities following the 2021 Commercial Companies Law amendment, though certain regulated activities may still require a local service agent. Freezone setup is the most popular and straightforward option for Pakistani entrepreneurs.",
  },
  {
    q: "What is the difference between a UAE Freezone and Mainland company?",
    a: "A UAE Freezone company allows 100% foreign ownership and is ideal for businesses serving international clients or operating online — but it cannot trade directly within the UAE local market without a local distributor. A Mainland company registered with the Department of Economic Development (DED) can trade freely across the UAE local market and bid on government contracts, but setup costs are typically higher. Most Pakistani freelancers, IT consultants, and e-commerce sellers choose a Freezone company for its simplicity, lower cost, and remote setup capability.",
  },
  {
    q: "Do I need to visit the UAE to set up a company?",
    a: "No. UAE Freezone company formation can be completed entirely remotely without visiting the UAE. We handle all documentation, authority submissions, and correspondence on your behalf. You receive your trade license, establishment card, and all company documents digitally. A UAE visit is only required if you need to open certain traditional bank accounts in person — though digital banking alternatives like Wio and Mashreq NeoBiz are available without residency.",
  },
  {
    q: "How long does UAE Freezone company formation take?",
    a: "UAE Freezone company formation typically takes 7 to 10 working days from the date we receive all required documents and initial approval from the freezone authority. Premium or expedited processing is available with certain freezones for faster turnaround. The exact timeline varies by freezone authority, business activity, and document readiness. We provide a clear timeline at the start of every formation engagement.",
  },
  {
    q: "What is UAE Corporate Tax and does my business need to register?",
    a: "UAE Corporate Tax (CT) is a federal tax introduced in June 2023 at a rate of 9% on taxable income above AED 375,000. Every UAE business — including Freezone companies, Mainland companies, and Natural Persons with business turnover above AED 1 million — must register for Corporate Tax on EmaraTax and obtain a CT Tax Registration Number, regardless of whether any tax is actually owed. Failure to register attracts an automatic AED 10,000 penalty.",
  },
  {
    q: "What is Small Business Relief and am I eligible?",
    a: "Small Business Relief (SBR) is a UAE Corporate Tax relief that allows eligible businesses with revenue of AED 3 million or less to elect zero taxable income for a given tax period, effectively paying no Corporate Tax. SBR is not applied automatically — it must be actively elected on EmaraTax each eligible tax period. Businesses that qualify for SBR still need to register for CT, file a CT return, and make the election through the EmaraTax portal. We assess your eligibility and manage the election filing for you.",
  },
  {
    q: "What happens if I miss the CT or VAT registration deadline in the UAE?",
    a: "Missing the UAE Corporate Tax or VAT registration deadline results in an automatic AED 10,000 administrative penalty issued by the Federal Tax Authority. Additional penalties may apply for continued non-compliance. The FTA has published a Public Clarification allowing businesses to apply for a penalty waiver in certain circumstances. We assist with penalty waiver applications and ensure all future registration obligations are met within the statutory deadlines.",
  },
  {
    q: "Do I need to file a Corporate Tax return even if I have zero income?",
    a: "Yes. Every UAE business registered for Corporate Tax must file an annual CT return within 9 months of the end of their financial year — even if the business has zero taxable income, is eligible for Small Business Relief, or qualifies for the 0% rate as a Qualifying Free Zone Person (QFZP). Filing a nil or SBR-elected return is still a mandatory compliance obligation. Failure to file on time attracts penalties regardless of whether any tax is owed.",
  },
  {
    q: "What is UAE VAT and when do I need to register?",
    a: "UAE VAT (Value Added Tax) is a 5% consumption tax introduced in January 2018. VAT registration is legally mandatory when your UAE taxable turnover exceeds AED 375,000 in the preceding 12 months or is expected to exceed this threshold in the next 30 days. Voluntary registration is available from AED 187,500 and is often beneficial for businesses with significant input VAT costs or B2B UAE clients who can reclaim VAT. We handle the complete EmaraTax VAT registration process and obtain your Tax Registration Number (TRN).",
  },
  {
    q: "Can I open a UAE bank account without being a UAE resident?",
    a: "Opening a traditional UAE bank account without residency is possible but can be difficult, as most banks prefer in-person visits and residency documentation. However, UAE digital banking alternatives — particularly Wio Business and Mashreq NeoBiz — allow Freezone company owners to open business accounts remotely without UAE residency. We provide step-by-step guidance for both traditional and digital banking options, including the exact document pack required for successful account opening.",
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
  serviceType: "UAE Company Formation and Tax Compliance",
  provider: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  name: "UAE Freezone Company Formation, VAT and Corporate Tax Services",
  description:
    "UAE Freezone and Mainland company setup, VAT registration, Corporate Tax registration and returns, bookkeeping, and FTA compliance for Pakistani entrepreneurs. Fully remote service.",
  areaServed: ["United Arab Emirates", "Pakistan"],
  url: "https://[yourdomain.com]/uae-services",
  offers: [
    { "@type": "Offer", name: "Freezone Starter Pack", price: "7999", priceCurrency: "AED" },
    { "@type": "Offer", name: "Annual Compliance Pack", price: "4999", priceCurrency: "AED" },
    { "@type": "Offer", name: "Full Management Monthly", price: "999", priceCurrency: "AED" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "UAE Services", item: "/uae-services" },
  ],
};

export const Route = createFileRoute("/uae-services/")({
  head: () => ({
    meta: [
      {
        title: "UAE Company Formation, VAT & Corporate Tax Services for Pakistani Entrepreneurs | ADVAQ",
      },
      {
        name: "description",
        content:
          "UAE Freezone and Mainland company setup, VAT registration, Corporate Tax compliance, and bookkeeping for Pakistani freelancers, IT consultants, and e-commerce sellers. 100% remote. FTA compliant.",
      },
      {
        name: "keywords",
        content:
          "UAE company formation, UAE Freezone trade license, Corporate Tax registration EmaraTax, FTA VAT registration UAE, Wio Business bank account, Mainland company setup DED, UAE tax compliance Pakistan, FTA penalty waiver",
      },
      {
        property: "og:title",
        content: "UAE Company Formation & Tax Services for Pakistani Entrepreneurs | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Freezone setup, VAT registration, Corporate Tax compliance for Pakistani freelancers and IT businesses in the UAE. Fully remote.",
      },
      { property: "og:url", content: "/uae-services" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/uae-services" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: UAEServices,
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
            🇦🇪 TRUSTED BY 200+ PAKISTANI FOUNDERS
          </p>
          <h1 className="font-serif text-white text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] mt-5 leading-[1.15] max-w-5xl mx-auto">
            <span>Your UAE Company Established. </span>
            <br className="hidden sm:block" />
            <span>Compliant and Tax-Optimized.</span>
          </h1>
          <p className="mt-6 text-navy-200 text-[17px] md:text-[18px] max-w-4xl mx-auto leading-[1.7]">
            UAE Freezone and Mainland company formation, VAT registration, Corporate Tax compliance, and bookkeeping. We handle everything from Pakistan, 100% remote. No local sponsor needed.
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
              <Check size={16} className="text-gold-500" /> FTA-Compliant Filing
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> Freezone & Mainland Experts
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 100% Remote Setup
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
    { title: "Freelancers & IT Consultants", desc: "Form UAE Freezone company & unlock Wio Business remote banking.", icon: "💻" },
    { title: "IT Agencies Expanding to UAE", desc: "Establish GCC corporate headquarters with 0% Freezone Corporate Tax.", icon: "🏢" },
    { title: "Amazon, Noon & Shopify Sellers", desc: "Access UAE e-commerce seller central, VAT registration & EORI numbers.", icon: "🛒" },
    { title: "Wio & Mashreq Bank Users", desc: "Seamless corporate bank account approval with verified UAE licenses.", icon: "💳" },
    { title: "SaaS & Digital Product Businesses", desc: "Receive global AED, USD & EUR payouts tax-optimized from Dubai.", icon: "📱" },
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
            <span>You Are Earning in Dirhams. </span>
            <br className="hidden sm:block" />
            <span>But Your Business Has No Legal Home.</span>
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-gray-600 max-w-3xl mx-auto leading-[1.65] mt-4">
            Thousands of talented Pakistani developers, consultants, and e-commerce sellers are growing their client base in the GCC — but operating without a registered company, without proper tax compliance, and without legal protection.
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
                  UAE Banks Reject You
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  UAE banks require a registered Freezone or Mainland trade license to open a business account. Without one, you cannot open Wio Business or Mashreq.
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
                  FTA Penalty Risks
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Failure to register for Corporate Tax or missing FTA VAT deadlines carries automatic AED 10,000 fines. Proper compliance keeps you protected.
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
                  Zero Legal Residency Rights
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  Without a company, you cannot sponsor an Investor Visa or Emirates ID. A UAE Freezone company gives you complete freedom to live and work.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-navy-950 text-white rounded-[20px] p-6 md:p-7 mt-8 border border-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif italic text-white text-base md:text-lg leading-relaxed max-w-3xl">
              "A UAE Freezone company gives you 0% corporate tax, a 2-year Emirates ID, and instant Wio Business banking."
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
      name: "Freezone Starter Pack",
      tag: "Perfect to get started in the UAE",
      price: "AED 5,999",
      govFee: true,
      note: "one-time · no hidden fees",
      items: [
        "Initial Approval & Name Reservation",
        "Memorandum & Articles of Association",
        "Freezone Company Formation (Trade License)",
        "Establishment Card",
        "Corporate Tax Registration (EmaraTax)",
        "Free Consultation Call (30 minutes)",
      ],
      bestFor:
        "Perfect for freelancers and online consultants setting up their first UAE presence for remote invoicing and digital banking.",
      cta: "Get Started — AED 5,999",
      caption: "Trade license issued in 7–10 working days",
      featured: false,
    },
    {
      name: "Annual Compliance Pack",
      tag: "Stay fully UAE-compliant every year",
      price: "AED 6,999",
      govFee: true,
      note: "per year · all filings included",
      items: [
        "VAT Registration (TRN) — if required",
        "Corporate Tax Registration (EmaraTax)",
        "Quarterly VAT Return Filing (4 returns/year)",
        "Small Business Relief (SBR) Election",
        "Annual Corporate Tax Return Filing",
        "Trade License Renewal Support",
        "Dedicated Account Manager",
      ],
      bestFor:
        "For active UAE company owners who want all tax registrations, quarterly VAT filings, and annual Corporate Tax filings handled correctly and on time.",
      cta: "Get This Pack — AED 6,999/yr",
      caption: "Everything your UAE company legally needs, every year",
      featured: true,
    },
    {
      name: "Full Management Monthly",
      tag: "Hands-free monthly accounting & compliance",
      price: "AED 1,499",
      govFee: true,
      note: "per month · cancel anytime",
      items: [
        "Monthly Bookkeeping (Zoho Books / Xero)",
        "VAT Record Maintenance",
        "Quarterly VAT Return Filing",
        "Corporate Tax Compliance Monitoring",
        "Quarterly Financial Summary Report",
        "FTA Correspondence Handling",
        "WhatsApp Support (Mon–Sat)",
        "Year-End CT & VAT Filing Included*",
      ],
      bestFor:
        "For serious entrepreneurs wanting complete bookkeeping, ongoing VAT maintenance, and year-end Corporate Tax submissions handled hands-free.",
      cta: "Start Monthly Plan — AED 1,499/mo",
      caption: "Cancel anytime. No long-term contract.",
      subNote: "*6 months minimum subscription required",
      featured: false,
    },
  ];

  return (
    <section id="packages" className="bg-off-white py-16 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>PACKAGES</SectionLabel>
          <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] text-dark-text mt-3 leading-[1.18] max-w-4xl mx-auto">
            Everything Your UAE Business Needs.
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
                  <div className="mt-4 flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                        {p.price}
                      </span>
                      {p.govFee && (
                        <span className="text-xs sm:text-sm font-semibold text-navy-900/80 whitespace-nowrap">
                          + gov fee
                        </span>
                      )}
                    </div>
                    <span className="text-[11.5px] text-gray-500 font-medium">{p.note}</span>
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
                  {p.subNote && (
                    <p className="mt-3 text-[10.5px] text-gray-500 leading-normal italic">
                      {p.subNote}
                    </p>
                  )}
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
  priceNote?: string;
  desc: string;
  items: string[];
  guideUrl?: string;
}

function ServiceCard({ icon: Icon, title, price, priceNote, desc, items, guideUrl }: ServiceCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between h-full relative">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-navy-950 text-gold-500 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
            <Icon size={20} />
          </div>
          <div className="flex flex-col items-end">
            <span className="bg-navy-950 text-gold-500 text-[11px] font-semibold px-3 py-1 rounded-full border border-gold-500/30 shrink-0">
              {price}
            </span>
            {priceNote && (
              <span className="text-[10px] text-gray-500 mt-1 text-right leading-tight max-w-[180px]">
                {priceNote}
              </span>
            )}
          </div>
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
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-gold-600 font-semibold text-[11px] uppercase tracking-widest hover:text-gold-500 transition-all"
        >
          Order Now <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
        {guideUrl && (
          <Link
            to={guideUrl}
            className="inline-flex items-center gap-1 text-navy-900 hover:text-gold-600 font-semibold text-[11px] uppercase tracking-widest transition-all"
          >
            Learn More →
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
            Every UAE Service. Clear Price. No Surprises.
          </h2>
          <p className="text-gray-600 text-[17px] max-w-2xl mx-auto mt-4">
            Pick exactly what you need. Every service is handled personally — not outsourced, not automated, not a template. Professionally delivered and legally sound.
          </p>
        </Reveal>

        {/* SUB-SECTION A: FORMATION */}
        <div className="py-16 border-t border-border">
          <Reveal>
            <SubSectionHeader
              step="STEP 1"
              title="Form Your UAE Company"
              desc="Every UAE business journey starts here. Your trade license is the legal entity that opens bank accounts, holds contracts, and isolates your business liability. We set it up remote."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Building2}
                title="Freezone Company Formation"
                price="AED 5,000 + gov fee"
                desc="Set up your UAE Freezone company with 100% foreign ownership, zero personal income tax, and full profit repatriation. Receive your trade license and establishment card within 7–10 working days — entirely remotely, without visiting the UAE."
                items={[
                  "Initial Approval & Name Reservation",
                  "Freezone authority registration",
                  "Memorandum & Articles of Association",
                  "Digital document delivery (remotely)",
                  "Trade License issuance",
                  "Establishment Card",
                ]}
                guideUrl="/uae-services/freezone-company-formation"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={MapPin}
                title="Mainland Company Formation (DED)"
                price="AED 8,000 + gov fee"
                desc="For businesses that need to trade directly within the UAE local market or work on government and corporate contracts. We handle DED registration, trade licensing, and local service agent coordination where required."
                items={[
                  "DED trade name reservation",
                  "Initial approval & MOA drafting",
                  "Local service agent coordination if required",
                  "Digital document delivery (remotely)",
                  "Trade license issuance",
                  "Establishment card",
                ]}
                guideUrl="/uae-services/mainland-company-formation"
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
              title="Register With the FTA & EmaraTax"
              desc="Company setup is just the beginning. These registrations ensure your UAE company complies with federal tax authorities, avoiding immediate administrative penalties."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mt-8 justify-center">
            <Reveal>
              <ServiceCard
                icon={Receipt}
                title="VAT Registration (TRN)"
                price="AED 1,499"
                desc="VAT registration is mandatory once your UAE taxable turnover exceeds AED 375,000, and voluntary above AED 187,500. We handle the complete FTA EmaraTax VAT registration process and obtain your Tax Registration Number (TRN)."
                items={[
                  "VAT scheme assessment (Standard / Voluntary)",
                  "EmaraTax account setup (if required)",
                  "VAT registration application filing",
                  "TRN certificate obtainment",
                  "First VAT return guidance",
                  "FTA correspondence handling",
                ]}
                guideUrl="/uae-services/vat-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Shield}
                title="Corporate Tax (CT) Registration"
                price="AED 1,999"
                desc="Every UAE business — Mainland, Freezone, or Natural Person with AED 1M+ turnover — must register for Corporate Tax on EmaraTax regardless of whether tax is owed. Late registration attracts an AED 10,000 automatic penalty. We handle it correctly."
                items={[
                  "EmaraTax portal setup (if required)",
                  "CT registration application filing",
                  "Tax Registration Number (CT TRN) obtainment",
                  "Document preparation & submission",
                  "Deadline compliance check",
                  "Registration confirmation delivery",
                ]}
                guideUrl="/uae-services/corporate-tax-registration"
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
              desc="UAE companies have annual trade license and tax compliance obligations. We ensure your license stays active and you avoid hefty penalties."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={RefreshCw}
                title="Trade License Renewal"
                price="AED 999 + gov fee"
                desc="Renew your Freezone or Mainland trade license before expiry to maintain your legal business status and avoid late renewal penalties."
                items={[
                  "Renewal deadline assessment",
                  "Ejari lease renewal coordination",
                  "Freezone / Mainland authority filing",
                  "State/authority fee payment facilitation",
                  "Compliance record maintenance",
                  "Updated license delivery",
                ]}
                guideUrl="/uae-services/trade-license-renewal"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Edit}
                title="Change of Business Activity"
                price="AED 599 + gov fee"
                desc="Add or amend your licensed business activities with the relevant Freezone authority or DED to reflect your current services."
                items={[
                  "Activity feasibility review",
                  "DED / Freezone authority filing",
                  "MOA updates (if required)",
                  "License amendment processing",
                  "Updated trade license delivery",
                ]}
                guideUrl="/uae-services/change-business-activity"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={UserCheck}
                title="Visa Application Support"
                price="AED 1,499 + gov fee"
                desc="Document preparation and step-by-step guidance for UAE residence visa applications (Investor or Employee) linked to your company."
                items={[
                  "Visa eligibility review (Investor / Employee)",
                  "Document preparation & submission",
                  "Establishment card renewal (if required)",
                  "Medical & Emirates ID guidance",
                  "Visa residency status tracking",
                ]}
                guideUrl="/uae-services/visa-application-support"
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
              title="File Your UAE Tax Returns"
              desc="UAE tax returns are mandatory for all registered businesses. We reconcile your accounts, apply for relief, and submit tax filings correctly."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={BarChart3}
                title="Quarterly VAT Return Filing"
                price="AED 599/quarter"
                desc="VAT returns must be filed quarterly — or monthly for some businesses — with accurate input and output VAT reconciliation submitted on EmaraTax. Late or incorrect filing attracts immediate FTA penalties. We prepare and submit every return."
                items={[
                  "Input/output VAT reconciliation",
                  "Quarterly VAT calculation",
                  "EmaraTax return preparation",
                  "Online submission & filing",
                  "Payment deadline reminder",
                  "Annual VAT account review",
                ]}
                guideUrl="/uae-services/vat-return-filing"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={FileText}
                title="Annual Corporate Tax Return Filing"
                price="From AED 2,999"
                priceNote="(Simple accounts · Complex financials quoted separately)"
                desc="Your Corporate Tax return must be filed within 9 months of your financial year-end — even if you have zero taxable income or qualify for the 0% rate as a Qualifying Free Zone Person (QFZP). We prepare your tax computation."
                items={[
                  "QFZP / SBR eligibility confirmation",
                  "CT computation & taxable income calculation",
                  "Supporting schedule preparation",
                  "EmaraTax CT return submission",
                  "Filing confirmation receipt",
                ]}
                guideUrl="/uae-services/corporate-tax-return-filing"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={BadgePercent}
                title="Small Business Relief (SBR) Election"
                price="AED 999"
                desc="If your UAE revenue is AED 3 million or less, you may qualify to elect zero taxable income under Small Business Relief. SBR is not automatic — it must be actively elected on EmaraTax each eligible tax period. We handle it."
                items={[
                  "SBR eligibility assessment",
                  "Revenue threshold monitoring guidance",
                  "EmaraTax SBR election filing",
                  "Documentation for compliance records",
                  "Annual eligibility review",
                ]}
                guideUrl="/uae-services/small-business-relief"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SUB-SECTION E: ACCOUNTING & BANKING */}
        <div className="py-24">
          <Reveal>
            <SubSectionHeader
              step="STEP 5"
              title="Manage Your Books & Business Banking"
              desc="Ensure your records are FTA-ready. We set up your cloud bookkeeping and guide you through business bank account opening."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Calculator}
                title="Monthly Bookkeeping"
                price="From AED 750/month"
                desc="Accurate monthly bookkeeping is the foundation of both VAT and Corporate Tax compliance in the UAE. We categorise all income and expenses, reconcile your accounts, and maintain FTA-ready records using Zoho Books or Xero."
                items={[
                  "Zoho Books / Xero cloud setup",
                  "Income & expense categorisation",
                  "Bank & payment reconciliation",
                  "Monthly profit & loss report",
                  "VAT & CT-ready records maintenance",
                ]}
                guideUrl="/uae-services/bookkeeping"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Landmark}
                title="UAE Business Bank Account Opening Assistance"
                price="AED 599"
                desc="Step-by-step guidance for opening a UAE business bank account — or a digital alternative such as Wio or Mashreq NeoBiz — for your Freezone company without UAE residency. We prepare your document pack."
                items={[
                  "Bank shortlisting based on activity type",
                  "Document checklist preparation",
                  "Common rejection reasons & how to avoid them",
                  "Application submission guidance",
                  "Digital alternative advice (Wio / Mashreq NeoBiz)",
                ]}
                guideUrl="/uae-services/business-bank-account-guide"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={AlertTriangle}
                title="FTA Penalty Waiver Assistance"
                price="AED 1,499"
                desc="Received an AED 10,000 late registration penalty? We review your eligibility for a penalty waiver under the FTA's published Public Clarification and manage the complete waiver application."
                items={[
                  "Penalty waiver eligibility review",
                  "Supporting documentation preparation",
                  "EmaraTax waiver application submission",
                  "Follow-up correspondence with FTA",
                  "FTA portal submission tracking",
                ]}
                guideUrl="/uae-services/fta-penalty-waiver"
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
            Complete Setup Solutions for Growing UAE Businesses.
          </h2>
          <p className="text-navy-200 text-[17px] max-w-2xl mx-auto mt-4">
            These premium packages are for Pakistani freelancers and IT businesses that want a complete, end-to-end solution — not a piecemeal service.
          </p>
        </Reveal>

        <div className="space-y-8 mt-12">
          <Reveal>
            <PremiumBundleCard
              icon={Package}
              badge="🇵🇰 BUILT FOR PAKISTANI FREELANCERS"
              title="UAE Freezone License + Full FTA Registrations"
              price="AED 7,999"
              note="one-time · complete setup"
              body="Everything a new Pakistani freelancer or IT consultant needs to operate legally in the UAE — from day one. Trade license, FTA registrations, bank account guidance, and a 30-minute onboarding call. One package. One price. No follow-up surprises."
              items={[
                "Initial Approval & Name Reservation",
                "Freezone Company Formation (Trade License)",
                "Establishment Card",
                "VAT Registration (TRN)",
                "Corporate Tax Registration (EmaraTax)",
                "UAE Business Bank Account Setup Guidance",
                "30-min Onboarding Consultation Call",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={ShoppingBag}
              badge="🛒 FOR UAE MARKETPLACE SELLERS"
              title="E-Commerce UAE License + VAT Setup"
              price="AED 7,999"
              note="one-time · seller-ready"
              body="Selling on Amazon.ae, Noon, or Shopify? You need a UAE e-commerce trade license, VAT registration, and Corporate Tax compliance before you can operate legally. We handle the full setup — so you can focus on selling, not paperwork."
              items={[
                "Initial Approval & Name Reservation",
                "Freezone E-Commerce Trade License",
                "VAT Registration (TRN)",
                "Corporate Tax Registration (EmaraTax)",
                "Amazon.ae / Noon Seller Account Guidance",
                "30-min Seller Onboarding Call",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={TrendingUp}
              badge="📊 FOR UAE COMPANY DIRECTORS & OWNERS"
              title="Corporate Tax & QFZP Strategy Session"
              price="AED 1,999"
              note="one-time · strategic consultation"
              body="Your UAE company's tax position depends on decisions made early — QFZP status, SBR eligibility, VAT thresholds. One wrong assumption costs AED 10,000+. This 60-minute session gives you a clear, documented tax strategy built around your specific business structure."
              items={[
                "Business structure & revenue review",
                "QFZP and SBR eligibility assessment",
                "VAT registration threshold analysis",
                "CT filing calendar for your specific business",
                "60-min strategy call (Zoom or WhatsApp)",
                "Written consultation summary report",
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
      Icon: RefreshCw,
      name: "Trade License Renewal",
      price: "AED 999 + gov fee",
      desc: "Renew your Freezone or Mainland trade license before expiry to maintain your legal business status and avoid late renewal penalties.",
    },
    {
      Icon: Edit,
      name: "Change of Business Activity",
      price: "AED 599 + gov fee",
      desc: "Add or amend your licensed business activities with the relevant Freezone authority or DED to reflect your current services.",
    },
    {
      Icon: Trash2,
      name: "Company Liquidation / Closure",
      price: "AED 2,999",
      desc: "Close your UAE company legally with the Freezone authority and FTA including final VAT and CT deregistration to avoid ongoing compliance obligations.",
    },
    {
      Icon: XCircle,
      name: "VAT Deregistration",
      price: "AED 999",
      desc: "Cancel your VAT registration with the FTA when your business no longer meets the threshold or has ceased UAE trading operations.",
    },
    {
      Icon: UserCheck,
      name: "Visa Application Support (Investor / Employee)",
      price: "AED 1,499 + gov fees",
      desc: "Document preparation and step-by-step guidance for UAE residence visa applications linked to your Freezone or Mainland company.",
    },
    {
      Icon: Globe,
      name: "Tax Residency Certificate (TRC) Application",
      price: "AED 1,999",
      desc: "Apply for a UAE Tax Residency Certificate from the Ministry of Finance for double taxation treaty benefits and international tax planning purposes.",
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
                    className="mt-4 inline-flex items-center gap-1.5 text-gold-500 font-semibold text-xs uppercase tracking-widest hover:gap-2.5 transition-all"
                  >
                    Add to Order <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
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
            Launch Your UAE Business Today.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Whether you need a Freezone company, VAT registration, or Corporate Tax compliance — we handle everything. One firm. All jurisdictions.
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
            Free initial consultation · Punjab Bar Council Licensed Advocate · FTA-Compliant Filing
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function UAEServices() {
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