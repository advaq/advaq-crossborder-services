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
  Hash,
  Shield,
  CreditCard,
  UserCheck,
  FileText,
  Zap,
  Landmark,
  ArrowRightLeft,
  FileCheck,
  Receipt,
  Mail,
  BarChart3,
  TrendingUp,
  Users,
  Percent,
  Globe,
  Trash2,
  RefreshCw,
  MapPin,
  UserPlus,
  Clock,
  ShoppingBag,
  Package,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const faqs = [
  {
    q: "Can a Pakistani citizen form a US LLC?",
    a: "Yes. Non-US residents including Pakistani citizens can legally form a US LLC in any state. Wyoming is the most popular choice due to its low annual fees, strong privacy protections, and zero state income tax. No US address, SSN, or visa is required.",
  },
  {
    q: "Why do I need a US LLC as a Pakistani freelancer?",
    a: "A US LLC allows you to open a Stripe account, Mercury bank account, and PayPal Business account — all of which are difficult or impossible to access with Pakistani business registration alone. It also gives you a professional US business identity for your international clients.",
  },
  {
    q: "What is a BOI Report and what happens if I don't file it?",
    a: "A Beneficial Ownership Information (BOI) Report is a mandatory FinCEN filing introduced under the Corporate Transparency Act. All US LLCs formed after January 2024 must file within 90 days of formation. Penalties for non-compliance are up to $500 per day and up to $10,000 in criminal fines. We handle this filing for you.",
  },
  {
    q: "What is an EIN and why do I need one?",
    a: "An Employer Identification Number (EIN) is a unique tax ID issued by the IRS for your US business. Without an EIN you cannot open a Mercury bank account, apply for Stripe, file US tax returns, or hire employees. It is the first thing you need after forming your LLC.",
  },
  {
    q: "Wyoming vs Delaware — which is better for Pakistani freelancers?",
    a: "Wyoming is better for most Pakistani freelancers and IT businesses. It has no state income tax, very low annual fees ($60/year), strong privacy laws, and is fully accepted by Stripe and Mercury. Delaware is better if you plan to raise venture capital or apply to Y Combinator.",
  },
  {
    q: "Do I need to pay US taxes if I am in Pakistan?",
    a: "A single-member LLC owned by a non-US resident is typically treated as a disregarded entity by the IRS. If your LLC has no US-connected income (i.e. your clients and work are outside the US), you may have minimal or no US tax obligation. However, filing requirements may still apply. We assess your specific situation accurately.",
  },
  {
    q: "How long does Wyoming LLC formation take?",
    a: "Standard Wyoming LLC formation takes 3 to 5 business days. We offer expedited 24-hour formation for an additional fee.",
  },
  {
    q: "Can I open a Mercury bank account remotely from Pakistan?",
    a: "Yes. Mercury is a US fintech bank that allows non-US residents to open a business bank account fully online. You will need your LLC documents, EIN, and a valid passport. Our Mercury Bank Guide walks you through the exact process step by step.",
  },
  {
    q: "What is ITIN and do I need one?",
    a: "An Individual Taxpayer Identification Number (ITIN) is issued by the IRS to non-US residents who have US tax obligations but are not eligible for a Social Security Number. You may need an ITIN to file certain US tax returns, open specific bank accounts, or claim tax treaty benefits.",
  },
  {
    q: "I received a 1099 from a US client — what should I do?",
    a: "A 1099-NEC means your US client has reported your income to the IRS. You likely have a US tax filing obligation. Do not ignore it. Contact us and we will review your situation, advise on any taxes owed, and handle the filing for you.",
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
  serviceType: "Wyoming LLC Formation",
  provider: { "@type": "Organization", name: "ADVAQ" },
  areaServed: "Worldwide",
  description:
    "Wyoming LLC formation, EIN, BOI report, ITIN application, and US tax returns for Pakistani freelancers, IT agencies, and online earners.",
  offers: { "@type": "Offer", price: "299", priceCurrency: "USD" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    { "@type": "ListItem", position: 2, name: "US Services", item: "/us-services" },
  ],
};

export const Route = createFileRoute("/us-services/")({
  head: () => ({
    meta: [
      { title: "US LLC Formation & Tax for Pakistani Freelancers | ADVAQ" },
      {
        name: "description",
        content:
          "Wyoming LLC, EIN, BOI, ITIN, and US tax returns for Pakistani freelancers — open Stripe and Mercury 100% remotely. No SSN required.",
      },
      {
        name: "keywords",
        content:
          "Wyoming LLC formation, US LLC for Pakistanis, non-resident US bank account, EIN registration IRS, FinCEN BOI report, ITIN application Pakistan, US tax return non-resident, Stripe account setup Pakistan",
      },
      {
        property: "og:title",
        content: "US LLC Formation & Tax for Pakistani Freelancers | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Form your Wyoming LLC, get your EIN, open Mercury or Stripe — all remotely from Pakistan. 100% remote. No SSN required.",
      },
      { property: "og:url", content: "/us-services" },
    ],
    links: [{ rel: "canonical", href: "https://[yourdomain.com]/us-services" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: USServices,
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
            🇺🇸 TRUSTED BY 200+ PAKISTANI FOUNDERS
          </p>
          <h1 className="font-serif text-white text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] mt-5 leading-[1.15] max-w-5xl mx-auto">
            <span>Your US LLC Formed & Registered. </span>
            <br className="hidden sm:block" />
            <span>Ready to Collect USD Payments.</span>
          </h1>
          <p className="mt-6 text-navy-200 text-[17px] md:text-[18px] max-w-4xl mx-auto leading-[1.7]">
            Wyoming LLC formation, EIN registration, FinCEN BOI compliance, ITIN applications, and US tax returns. We handle everything from Pakistan, 100% remote. No US address or residency needed.
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
              <Check size={16} className="text-gold-500" /> IRS Authorized Acceptance Agent
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> FinCEN BOI Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <Check size={16} className="text-gold-500" /> 3 to 5 Day LLC Turnaround
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
    { title: "Upwork & Fiverr Freelancers", desc: "Unlock Stripe USD & Mercury Bank to receive direct client payouts.", icon: "💻" },
    { title: "IT Agencies & Software Houses", desc: "Win US enterprise contracts with a registered US LLC corporate presence.", icon: "🏢" },
    { title: "Amazon, Etsy & Shopify Sellers", desc: "Access US Amazon Seller Central, US PayPal & sales tax exemption.", icon: "🛒" },
    { title: "Stripe & Mercury Users", desc: "Zero account closures with verified US LLC EIN & FinCEN BOI filings.", icon: "💳" },
    { title: "SaaS & App Developers", desc: "Collect USD subscriptions globally via US Stripe & US Bank accounts.", icon: "📱" },
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
            <span>You Are Earning in Dollars. </span>
            <br className="hidden sm:block" />
            <span>But Your Business Has No Legal Home.</span>
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-gray-600 max-w-3xl mx-auto leading-[1.65] mt-4">
            Thousands of talented Pakistani developers, designers, and IT agency owners are billing US and international clients every month — but operating without a registered company, without proper tax compliance, and without legal protection.
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
                  Stripe requires a registered US or UK company to open a business account. Without one, you are stuck using personal accounts with lower limits and risk of account closure.
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
                  Clients Ask for Documents You Don't Have
                </h3>
                <p className="text-gray-600 text-[13.5px] leading-relaxed mt-2">
                  International clients increasingly require proof of company registration before signing contracts or making payments. Every time you cannot provide this, you lose the deal.
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
                  If a client refuses to pay, disputes your work, or claims ownership of what you built — you have almost no legal recourse without a registered company. A US LLC protects you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-navy-950 text-white rounded-[20px] p-6 md:p-7 mt-8 border border-gold-500/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-serif italic text-white text-base md:text-lg leading-relaxed max-w-3xl">
              "A Wyoming US LLC costs less than one lost client invoice. It takes 3 to 5 days to form. And it opens every US payment gate."
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
      name: "Stripe Chalao Pack",
      tag: "For freelancers who just need Stripe",
      price: "$349",
      note: "one-time · no hidden fees",
      items: [
        "Wyoming LLC Formation",
        "Incorporation Certificate",
        "Operating Agreement",
        "Registered Agent (1 year)",
        "EIN Number Registration",
        "Stripe Account Setup Guide",
        "30-min Onboarding Call",
      ],
      bestFor:
        "Perfect for Upwork and Fiverr freelancers who want to start accepting international payments through a legitimate US company and Stripe.",
      cta: "Get Started — $349",
      caption: "Formation confirmed in as little as 3-5 business days",
      featured: false,
    },
    {
      name: "Full US Setup Pack",
      tag: "Complete US business setup",
      price: "$599",
      note: "one-time · complete setup",
      items: [
        "Wyoming LLC Formation",
        "Incorporation Certificate",
        "Operating Agreement",
        "Registered Agent (1 year)",
        "EIN Number Registration",
        "BOI Report (FinCEN Filing)",
        "ITIN Application Submisison",
        "Bank Account Setup Guide",
        "60-min Onboarding Call",
      ],
      bestFor:
        "For serious online business owners and freelancers who want a fully-equipped US presence with banking, ITIN, and agent support.",
      cta: "Get This Pack — $599",
      caption: "Everything you need to run a US business remotely",
      featured: true,
    },
    {
      name: "Annual Compliance Pack",
      tag: "For existing US LLC owners",
      price: "$399",
      note: "per year · all filings included",
      items: [
        "US LLC Tax Return",
        "Wyoming State Annual Report Filing",
        "Registered Agent Renewal (1 year)",
        "BOI Annual Update (if required)",
        "Compliance Deadline Reminders",
        "Dedicated Account Manager",
      ],
      bestFor:
        "For US LLC owners who want every legal annual filing and renewal handled correctly and on time to avoid state and federal fines.",
      cta: "Stay Compliant — $399/yr",
      caption: "Never miss a state or IRS deadline again",
      featured: false,
    },
  ];

  return (
    <section id="packages" className="bg-off-white py-16 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>PACKAGES</SectionLabel>
          <h2 className="font-serif text-[28px] sm:text-[38px] md:text-[44px] text-dark-text mt-3 leading-[1.18] max-w-4xl mx-auto">
            Everything Your US Business Needs.
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
            Every US Service. Clear Price. No Surprises.
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
              title="Form Your US Company (LLC)"
              desc="Every US business journey starts here. Your LLC is the legal entity that opens Stripe, holds contracts, and protects your personal assets. We form it in Wyoming — the best state for non-residents."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Building2}
                title="Wyoming LLC Formation"
                price="From $249"
                desc="Wyoming is the most popular US state for non-resident Pakistani freelancers and IT businesses. Low fees, strong privacy laws, and no state income tax. Required to open Stripe, Mercury, and PayPal Business accounts."
                items={[
                  "Wyoming LLC Formation",
                  "Incorporation Certificate",
                  "Operating Agreement",
                  "EIN Application Guidance",
                  "30-min Onboarding Call",
                ]}
                guideUrl="/us-services/wyoming-llc-formation"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={UserCheck}
                title="Registered Agent Service"
                price="$99/year"
                desc="Every US LLC is legally required to have a Registered Agent in the state of formation. Your Registered Agent receives official legal and government correspondence on behalf of your company."
                items={[
                  "Wyoming registered agent address",
                  "Legal document receipt & forwarding",
                  "Government notice handling",
                  "Annual renewal reminder",
                  "Same-day document scanning",
                ]}
                guideUrl="/us-services/registered-agent"
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
              title="Register With the IRS & FinCEN"
              desc="Forming an LLC is just the beginning. These registrations tell the IRS and FinCEN who you are, provide your tax ID, and ensure you comply with federal transparency laws."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={Hash}
                title="EIN Number Registration"
                price="$99"
                desc="Your Employer Identification Number (EIN) is your US business tax ID issued by the IRS. Without an EIN you cannot open a Mercury bank account, Stripe account, or file US tax returns."
                items={[
                  "IRS SS-4 form preparation",
                  "EIN application submission",
                  "EIN confirmation letter",
                  "IRS follow-up if delayed",
                  "Guidance on EIN usage",
                ]}
                guideUrl="/us-services/ein-registration"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Shield}
                title="BOI Report (FinCEN Filing)"
                price="$149"
                desc="Since January 2024, all US LLCs must file a Beneficial Ownership Information report with FinCEN under the Corporate Transparency Act. Non-compliance can lead to penalties."
                items={[
                  "Beneficial owner identification",
                  "FinCEN BOIR online filing",
                  "Filed report copy",
                  "Compliance confirmation",
                  "Update filing if ownership changes",
                ]}
                guideUrl="/us-services/boi-report"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={CreditCard}
                title="ITIN Application"
                price="$299"
                desc="An Individual Taxpayer Identification Number (ITIN) is required for non-US residents to file US tax returns, open certain US bank accounts, and receive payments from US clients."
                items={[
                  "IRS Form W-7 preparation",
                  "Supporting document review",
                  "IRS submission",
                  "Application status tracking",
                  "IRS correspondence handling",
                ]}
                guideUrl="/us-services/itin-application"
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
              desc="Wyoming LLCs have annual filing obligations. Miss a deadline, and you face automatic penalties from the state or the IRS. We make sure your LLC remains active and in good standing."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={RefreshCw}
                title="Wyoming State Annual Report"
                price="$149"
                desc="Every Wyoming LLC must file an Annual Report to maintain active status with the Secretary of State. We calculate potential license tax, prepare the report, pay state fees, and file before the deadline."
                items={[
                  "Wyoming report preparation",
                  "State filing fee handling",
                  "Good standing verification",
                  "Filing confirmation delivery",
                  "Filing deadline reminder (30 days in advance)",
                ]}
                guideUrl="/us-services/state-annual-report"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={UserCheck}
                title="Registered Agent Renewal"
                price="$99/year"
                desc="Maintain your mandatory Wyoming registered agent. Continued physical presence in the state handles official state and legal notices on behalf of your LLC. Annual renewal avoids state administrative dissolution."
                items={[
                  "Physical address maintenance",
                  "Mail scanning and digital forwarding",
                  "Legal document receipt and notice handling",
                  "Wyoming Secretary of State compliance",
                  "Annual renewal tracking",
                ]}
                guideUrl="/us-services/registered-agent-renewal"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={FileText}
                title="Operating Agreement Updates"
                price="$49"
                desc="Need to add a member, change profit sharing, or update management terms in your LLC? We revise your Operating Agreement to reflect ownership shifts and member duties accurately and legally."
                items={[
                  "Operating Agreement revision draft",
                  "Ownership percentage updates",
                  "Management provision amendments",
                  "Member approval documentation",
                  "Signed digital copy delivery",
                ]}
                guideUrl="/us-services/operating-agreement-updates"
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
              title="File Your US Tax Returns"
              desc="US LLCs must file annual information returns with the IRS. For single-member LLCs owned by non-residents, filing is mandatory even if no US tax is owed. We prepare and file your returns accurately."
            />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={FileText}
                title="Single-Member LLC IRS Filing"
                price="From $199"
                desc="Foreign-owned single-member LLCs are treated as disregarded entities but must file Form 5472 and Form 1120 pro-forma annually. Failure to file carries a penalty of $25,000. We ensure your informational filings are handled correctly."
                items={[
                  "IRS Form 5472 preparation",
                  "Pro-forma Form 1120 preparation",
                  "Disregarded entity assessment",
                  "IRS e-filing or certified fax submission",
                  "Filing confirmation receipt",
                ]}
                guideUrl="/us-services/single-member-llc-filing"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={BarChart3}
                title="Partnership Tax Return (1065)"
                price="From $299"
                desc="Multi-member LLCs (two or more owners) must file a partnership information return on Form 1065 with the IRS. We manage your books review, prepare all Schedule K-1s for individual partners, and file electronically."
                items={[
                  "IRS Form 1065 preparation & e-filing",
                  "Schedule K-1 for each member",
                  "Income & deduction review",
                  "IRS filing confirmation",
                  "IRS notice response (30 days)",
                ]}
                guideUrl="/us-services/partnership-tax-return"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={TrendingUp}
                title="Corporate Tax Return (Form 1120)"
                price="From $399"
                desc="For C-Corporations and startups incorporated in the US. We prepare Form 1120 corporate income tax returns, assess capital depreciation, apply allowable business deductions, and file directly with the IRS."
                items={[
                  "Form 1120 preparation & e-filing",
                  "Corporate deductions review",
                  "Depreciation schedule",
                  "IRS filing confirmation",
                  "State tax return guidance",
                ]}
                guideUrl="/us-services/corporate-tax-return"
              />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SUB-SECTION E: ACCOUNTING & CLIENT FORMS */}
        <div className="py-24">
          <Reveal>
            <SubSectionHeader
              step="STEP 5"
              title="Manage Your USD Flows & Client Documentation"
              desc="Keep your US business accounts clean and ready. We help you handle client tax forms (W-8BEN / W-9), contractor payments, and bank setup."
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Reveal>
              <ServiceCard
                icon={FileCheck}
                title="W-8BEN / W-9 Form Assistance"
                price="$49"
                desc="US clients often request a W-8BEN (for non-residents) or W-9 form before releasing payment. We prepare the correct form for your situation, preventing withholding tax delays."
                items={[
                  "Correct form identification",
                  "Form preparation & review",
                  "Digital delivery to your US client",
                  "Withholding tax exemption review",
                  "HMRC/FBR treaty benefit advice",
                ]}
                guideUrl="/us-services/w8-w9-assistance"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Users}
                title="1099 Filing for Contractors"
                price="$49 per contractor"
                desc="IT firms paying US contractors more than $600/year must file a Form 1099-NEC. We compile contractor tax data, prepare Form 1096, and e-file on time."
                items={[
                  "1099-NEC preparation per contractor",
                  "1096 summary form filing",
                  "IRS e-filing",
                  "Contractor copy delivery",
                  "Compliance verification",
                ]}
                guideUrl="/us-services/1099-filing"
              />
            </Reveal>
            <Reveal>
              <ServiceCard
                icon={Landmark}
                title="Mercury Bank Account Guide"
                price="$49"
                desc="Step-by-step guide to opening a Mercury business bank account remotely from Pakistan. Mercury is the preferred bank for freelancers — no monthly fees, no minimum balance."
                items={[
                  "Mercury application walkthrough",
                  "Required documents checklist",
                  "Common rejection reasons & fixes",
                  "Account setup after approval",
                  "Wise + Mercury usage guide",
                ]}
                guideUrl="/us-services/mercury-bank-guide"
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
            Complete Setup Solutions for Serious Earners.
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
              title="US LLC + UK LTD Double Setup"
              price="$699"
              note="one-time · maximum flexibility"
              body="The ultimate setup for serious online earners. Get a Wyoming LLC for Stripe and US clients, and a UK LTD for Wise Business. Gives you redundant payment gateways and ultimate business flexibility."
              items={[
                "Wyoming LLC Formation + EIN",
                "Registered Address US (1 year)",
                "BOI Report FinCEN Filing (US)",
                "Bank Account Setup Guide (US)",
                "UK LTD Formation + UTR",
                "Registered Address UK (1 year)",
                "Bank Account Setup Guide (UK)",
                "60-minute strategy call",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={UserCheck}
              badge="CERTIFIED IRS AGENT"
              title="ITIN Application + W-7 Certified Submission"
              price="$299"
              note="one-time · complete handling"
              body="As an IRS Authorized Acceptance Agent, we certify your passport and submit your W-7 application directly. No need to mail your original passport to the IRS. 100% safe and compliant."
              items={[
                "IRS Form W-7 preparation",
                "Supporting document review",
                "IRS submission",
                "Application status tracking",
                "IRS correspondence handling",
              ]}
            />
          </Reveal>

          <Reveal>
            <PremiumBundleCard
              icon={Percent}
              badge="FOR SAAS & APP BUILDERS"
              title="US Sales Tax Nexus Registration"
              price="$199"
              note="per state · tax-compliant"
              body="If you sell digital products, SaaS, or software to US buyers, you may trigger sales tax liability. We assess your revenue, identify which states you have nexus in, and register you for state sales tax."
              items={[
                "State-by-state nexus assessment",
                "Sales tax permit application",
                "State filing frequency setup",
                "First return filing guidance",
                "Tax exemption certificate review",
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
      name: "LLC Dissolution / Closure",
      price: "$149",
      desc: "Close your US LLC properly with the state and IRS to avoid future tax obligations and penalties.",
    },
    {
      Icon: RefreshCw,
      name: "Wyoming Registered Agent Renewal",
      price: "$99/year",
      desc: "Renew your Wyoming registered agent service for another 12 months to keep your LLC active and compliant.",
    },
    {
      Icon: MapPin,
      name: "Delaware LLC Formation",
      price: "From $249",
      desc: "Delaware LLC as an alternative to Wyoming — preferred for startups seeking VC funding or Stripe Atlas applications.",
    },
    {
      Icon: FileText,
      name: "EIN Cancellation Letter",
      price: "$49",
      desc: "Officially close your EIN with the IRS when dissolving your LLC or no longer needing the tax ID number.",
    },
    {
      Icon: UserPlus,
      name: "Add / Change LLC Member",
      price: "$99",
      desc: "Update your LLC's Operating Agreement and state records to add, remove, or change a member's ownership percentage.",
    },
    {
      Icon: Clock,
      name: "Expedited Formation (24hr)",
      price: "+$99",
      desc: "Need your LLC formed urgently? We expedite your state filing for guaranteed 24-hour turnaround.",
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
            Your US Company Is
            <br />
            Days Away.
          </h2>
          <p className="mt-6 text-navy-200 text-base md:text-[18px] max-w-xl mx-auto leading-relaxed">
            Every day without a registered US company is a day Stripe stays closed, clients ask for documents you cannot provide, and payments you earned sit out of reach. Let us fix that — starting today.
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
            Free initial consultation · Punjab Bar Council Licensed Advocate · IRS Authorized Acceptance Agent
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PAGE ASSEMBLY ---------- */
export default function USServices() {
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