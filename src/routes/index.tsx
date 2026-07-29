import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, Shield, Globe2, Tag, Headphones,
  ListChecks, FileText, Settings, CheckCircle, Star, ChevronRight,
  Scale, Landmark, BadgeCheck, Laptop, Building2, ShoppingBag,
  Code, Users, Calendar, Clock, MessageCircle, ClipboardCheck, ShieldCheck
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADVAQ | Cross-Border Tax & Legal Services | UK, USA, UAE & Pakistan" },
      { name: "description", content: "UK LTD, US LLC, UAE Freezone, Pakistan SECP & FBR filings, and contract drafting for freelancers and IT companies — by a Punjab Bar Council licensed advocate & IRS PTIN tax preparer." },
      { name: "keywords", content: "UK company formation Pakistan, US LLC formation for Pakistanis, SECP company registration, FBR tax return Pakistan, Punjab Bar Council advocate, PSEB registration, freelancer legal services Pakistan, IT company registration Pakistan" },
      { property: "og:title", content: "ADVAQ | Cross-Border Tax & Legal Services | UK, USA, UAE & Pakistan" },
      { property: "og:description", content: "UK LTD, US LLC, UAE Freezone, Pakistan SECP & FBR, and legal contracts — one trusted advocate for international Pakistani entrepreneurs." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "https://advaq.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "ADVAQ Global Advisory",
          description: "UK, US, UAE, and Pakistan company formation, tax compliance, and legal contract drafting for freelancers and IT companies.",
          areaServed: ["United Kingdom", "United States", "United Arab Emirates", "Pakistan"],
          founder: { "@type": "Person", name: "Muhammad Abdullah", jobTitle: "Advocate & Corporate Tax Lawyer" },
          serviceType: ["UK Company Formation", "US LLC Formation", "UAE Company Setup", "Pakistan Tax Services", "Legal Contract Drafting"],
        }),
      },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-navy-950 overflow-hidden flex items-center pt-32 lg:pt-36 pb-14">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] gold-glow opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* LEFT COLUMN — 7 COLS */}
        <div className="lg:col-span-7 space-y-6 pt-2">
          <Reveal delay={100}>
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.08] mt-2">
              Your Cross-Border Business &amp; Tax Partner Across UK, USA, UAE &amp; Pakistan.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-navy-200 text-base md:text-lg max-w-xl leading-[1.7]">
              Company formation, tax compliance, and legal contracts; managed directly by a Punjab Bar Council licensed advocate &amp; IRS PTIN registered tax preparer. 100% remote.
            </p>
          </Reveal>

          {/* PRIMARY BUTTONS */}
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="btn-gold px-8 py-3.5 uppercase text-xs tracking-widest font-semibold inline-flex items-center gap-2"
              >
                BOOK FREE CONSULTATION <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light px-8 py-3.5 uppercase text-xs tracking-widest font-semibold inline-flex items-center gap-2"
              >
                <MessageCircle size={16} /> TALK ON WHATSAPP
              </a>
            </div>
          </Reveal>

          {/* INTERACTIVE JURISDICTION QUICK PILLS */}
          <Reveal delay={400}>
            <div className="pt-1">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-500/80 mb-2.5">
                EXPLORE BY JURISDICTION
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  to="/uk-services"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:border-gold-500/50 hover:bg-gold-500/10 transition-all flex items-center gap-1.5"
                >
                  <span>🇬🇧</span> UK LTD &amp; Tax
                </Link>
                <Link
                  to="/us-services"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:border-gold-500/50 hover:bg-gold-500/10 transition-all flex items-center gap-1.5"
                >
                  <span>🇺🇸</span> US LLC &amp; EIN
                </Link>
                <Link
                  to="/uae-services"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:border-gold-500/50 hover:bg-gold-500/10 transition-all flex items-center gap-1.5"
                >
                  <span>🇦🇪</span> UAE Freezone
                </Link>
                <Link
                  to="/pakistan-services"
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-medium hover:border-gold-500/50 hover:bg-gold-500/10 transition-all flex items-center gap-1.5"
                >
                  <span>🇵🇰</span> SECP &amp; FBR
                </Link>
                <Link
                  to="/legal-contract-drafting"
                  className="px-3.5 py-1.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-medium hover:border-gold-500 transition-all flex items-center gap-1.5"
                >
                  <span>⚖️</span> Legal Contracts
                </Link>
              </div>
            </div>
          </Reveal>

        </div>

        {/* RIGHT COLUMN — 5 COLS (GLASSMORPHIC TRUST SHOWCASE) */}
        <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
          {/* MAIN GLASSMORPHIC STATUS CARD */}
          <div className="absolute top-0 right-0 w-[410px] bg-navy-900/90 backdrop-blur-xl border border-gold-500/30 rounded-2xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] animate-float">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  ACTIVE &amp; STRIKE-FREE COMPLIANT
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold text-gold-500 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/20">
                ADVAQ GUARANTEED
              </span>
            </div>

            <h3 className="font-serif text-2xl text-white mt-4 leading-snug">
              Cross-Border Corporate Setup
            </h3>

            {/* LIVE JURISDICTION BADGES */}
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-navy-100 flex items-center gap-2">
                  <span>🇬🇧</span> UK Companies House
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  ✓ Registered &amp; Tax Filed
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-navy-100 flex items-center gap-2">
                  <span>🇺🇸</span> US State Secretary &amp; IRS
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  ✓ LLC &amp; EIN Issued
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-navy-100 flex items-center gap-2">
                  <span>🇦🇪</span> UAE Freezone / FTA
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  ✓ License &amp; TRN Active
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-navy-100 flex items-center gap-2">
                  <span>🇵🇰</span> SECP &amp; FBR Iris
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  ✓ Active Filer &amp; Exempt
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-navy-200">
              <span>Full Cross-Border Coverage</span>
              <span className="text-gold-500 font-semibold">100% Remote Onboarding</span>
            </div>
          </div>

          {/* FLOATING BADGE 1 — IRS PTIN */}
          <div className="absolute top-[36%] -left-3 w-[210px] bg-navy-800/95 backdrop-blur-lg border border-gold-500/40 rounded-xl p-3.5 animate-float-delayed shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 grid place-items-center bg-gold-500/15 border border-gold-500/30 rounded-lg text-gold-500 shrink-0">
                <ClipboardCheck size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gold-500 font-bold">
                  IRS PTIN AUTHORIZED
                </p>
                <p className="text-white text-xs font-medium mt-0.5">US Tax Preparer</p>
              </div>
            </div>
          </div>

          {/* FLOATING BADGE 2 — PUNJAB BAR COUNCIL */}
          <div className="absolute -bottom-2 right-6 w-[230px] bg-gold-500 text-navy-950 rounded-xl p-3.5 animate-float shadow-2xl rotate-[-2deg]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 grid place-items-center bg-navy-950 text-gold-500 rounded-lg shrink-0">
                <Scale size={16} />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-wider font-bold opacity-80">
                  PUNJAB BAR COUNCIL
                </p>
                <p className="text-navy-950 font-serif font-bold text-xs">Licensed Advocate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredibilityBar() {
  const items = [
    { icon: Scale, tag: "PUNJAB BAR COUNCIL", label: "Licensed Advocate" },
    { icon: ClipboardCheck, tag: "IRS PTIN (USA)", label: "Registered Tax Preparer" },
    { icon: Landmark, tag: "SECP & FBR", label: "Pakistan Corporate Counsel" },
    { icon: Building2, tag: "COMPANIES HOUSE UK", label: "Filing & Annual Compliance" },
  ];
  return (
    <section className="bg-navy-900 border-t border-gold-500/30 border-b border-white/10 py-7">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[11px] font-semibold text-center uppercase tracking-widest text-gold-500/80 mb-5">
          AS SEEN IN / TRUSTED &amp; LICENSED BY REGULATORY AUTHORITIES
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 hover:border-gold-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 grid place-items-center text-gold-500 shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-white text-xs font-bold tracking-wide uppercase">{it.tag}</p>
                  <p className="text-navy-200 text-[11px] mt-0.5">{it.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "200+", l: "Businesses Served" },
    { v: "4", l: "Jurisdictions Covered" },
    { v: "5★", l: "Average Client Rating" },
    { v: "48hr", l: "Average Turnaround" },
    { v: "100%", l: "IT Export Tax Exemption" },
  ];
  return (
    <section className="bg-off-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 md:divide-x divide-border">
        {items.map((s, i) => (
          <Reveal key={i} delay={i * 80} className="text-center px-4">
            <div className="font-serif text-3xl md:text-[40px] text-gold-500 leading-none">{s.v}</div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.08em] text-gray-500 font-medium">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesOverview() {
  const cards = [
    {
      label: "🇬🇧 UNITED KINGDOM",
      title: "UK LTD & Tax Services",
      sub: "Register your UK LTD remotely. HMRC tax setup, VAT registration, and full annual compliance included.",
      items: ["UK LTD Incorporation", "Self Assessment Tax Return", "Company Annual Accounts", "Confirmation Statement", "Payroll Services", "VAT Registration"],
      link: "/uk-services" as const,
      cta: "View All UK Services",
    },
    {
      label: "🇺🇸 UNITED STATES",
      title: "US LLC & Tax Services",
      sub: "Wyoming LLC formation with EIN, BOI report, Stripe setup, and full IRS compliance — no SSN required.",
      items: ["Wyoming LLC Incorporation", "EIN Number Registration", "BOI Report (FinCEN)", "ITIN Application", "US Tax Returns (1040/1065/1120)", "Registered Agent Service"],
      link: "/us-services" as const,
      cta: "View All US Services",
    },
    {
      label: "🇦🇪 UNITED ARAB EMIRATES",
      title: "UAE Company & Tax Services",
      sub: "Dubai Freezone or Mainland setup, VAT registration, Corporate Tax compliance — complete UAE coverage.",
      items: ["Freezone Company Formation", "Mainland Company Formation", "VAT Registration (TRN)", "Corporate Tax Registration", "Quarterly VAT Return Filing", "Small Business Relief (SBR)"],
      link: "/uae-services" as const,
      cta: "View All UAE Services",
    },
    {
      label: "🇵🇰 PAKISTAN",
      title: "Pakistan Legal & Tax Services",
      sub: "SECP registration, FBR NTN, PSEB IT export exemption, and income tax returns — all in one place.",
      items: ["SECP Company Registration", "NTN & FBR Registration", "PSEB Registration", "Income Tax Return Filing", "FBR Notice Response", "Legal Consultation (Advocate)"],
      link: "/pakistan-services" as const,
      cta: "View All Pakistan Services",
    },
    {
      label: "⚖️ LEGAL CONTRACT DRAFTING",
      title: "Professional Contract Drafting",
      sub: "Freelance Agreements, NDA, MSA, IP Assignment — drafted by a licensed advocate, not a template generator.",
      items: ["NDA / Non-Disclosure Agreement", "Freelance Service Agreement", "IP Assignment Agreement", "Master Service Agreement (MSA)", "IT Outsourcing Agreement", "Privacy Policy & Terms of Service"],
      link: "/legal-contract-drafting" as const,
      cta: "View All Contracts",
    },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>Our Services</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-text mt-5 max-w-3xl mx-auto leading-tight">
            Everything You Need to Build, Run &amp; Protect Your Business
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            From company formation to annual compliance, tax filing to legal contracts —
            one trusted partner for UK, USA, UAE &amp; Pakistan.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.slice(0, 3).map((c, i) => (
            <Reveal key={i} delay={i * 120}>
              <article className="group relative bg-white border border-border rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(10,15,44,0.18)] overflow-hidden h-full flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gold-500" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-500">{c.label}</p>
                  <h3 className="font-serif text-2xl text-dark-text mt-3">{c.title}</h3>
                  <p className="text-gray-500 text-sm mt-1.5">{c.sub}</p>
                  <ul className="mt-7 space-y-3">
                    {c.items.map((it) => (
                      <li key={it} className="group/item flex items-center gap-3 text-dark-text">
                        <ChevronRight size={14} className="text-gold-500 shrink-0" />
                        <span className="text-[14px]">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={c.link} className="mt-8 inline-flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-widest border-b border-transparent hover:border-gold-500 transition-colors pb-1">
                  {c.cta} <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {cards.slice(3, 5).map((c, i) => (
            <Reveal key={i} delay={(i + 3) * 120}>
              <article className="group relative bg-white border border-border rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(10,15,44,0.18)] overflow-hidden h-full flex flex-col justify-between">
                <div>
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gold-500" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-500">{c.label}</p>
                  <h3 className="font-serif text-2xl text-dark-text mt-3">{c.title}</h3>
                  <p className="text-gray-500 text-sm mt-1.5">{c.sub}</p>
                  <ul className="mt-7 space-y-3">
                    {c.items.map((it) => (
                      <li key={it} className="group/item flex items-center gap-3 text-dark-text">
                        <ChevronRight size={14} className="text-gold-500 shrink-0" />
                        <span className="text-[14px]">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={c.link} className="mt-8 inline-flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-widest border-b border-transparent hover:border-gold-500 transition-colors pb-1">
                  {c.cta} <ArrowRight size={14} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  const items = [
    { Icon: Laptop, t: "Upwork & Fiverr Freelancers", d: "Earn in dollars and pounds legally. Get Stripe, PayPal Business, and Wise activated through a properly registered UK LTD or US LLC — from Pakistan." },
    { Icon: Building2, t: "IT Agencies & Software Houses", d: "Win international contracts and receive global payments without restrictions. UK or US company registration handled end-to-end by a licensed advocate." },
    { Icon: ShoppingBag, t: "Amazon & E-Commerce Sellers", d: "Open your UK LTD or US LLC, get your VAT number, and start selling on Amazon UK, Etsy, and Shopify as a fully registered, compliant business." },
    { Icon: Code, t: "SaaS & App Developers", d: "Form your company, connect Stripe, handle US or UK taxes, and scale your product globally — fully compliant from day one." },
    { Icon: Users, t: "Business Partners & Co-Founders", d: "Shareholder agreements, partnership deeds, and IP assignment contracts — drafted by a licensed advocate to protect every founder from day one." },
    { Icon: Scale, t: "Businesses Needing Legal Cover", d: "NDAs, service agreements, IT outsourcing contracts, and privacy policies — professionally drafted, not copy-pasted from a free template." },
  ];
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>Who We Serve</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-5">
            Built for Pakistani Entrepreneurs Ready to Go Global
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group h-full bg-navy-800 border border-white/8 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40">
                <div className="w-12 h-12 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500">
                  <it.Icon size={24} />
                </div>
                <h3 className="text-white text-lg font-semibold mt-5">{it.t}</h3>
                <p className="text-navy-200 text-sm mt-2 leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { Icon: Scale, t: "Licensed Advocate — Not Just an Agent", d: "Muhammad Abdullah is a Punjab Bar Council licensed advocate and IRS PTIN registered tax preparer. Legal accountability on every service — not just form submission." },
    { Icon: Globe2, t: "100% Remote — Worldwide", d: "Everything handled online. Documents delivered to your inbox. No office visits, no travel required — from anywhere in the world." },
    { Icon: Tag, t: "Transparent, Fixed Pricing", d: "No hidden fees. No surprise invoices. Full price breakdown before any work begins — guaranteed." },
    { Icon: Headphones, t: "Long-Term Partnership", d: "We stay with you after formation i.e. annual compliance, tax returns, contract updates, and legal consultation, you need." },
  ];
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>Our Advantage</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-5">
            Why Hundreds of Founders Trust Us
          </h2>
        </Reveal>
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group bg-navy-800 border border-white/8 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40">
                <div className="w-14 h-14 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                  <it.Icon size={24} />
                </div>
                <h3 className="text-white text-xl font-semibold mt-6">{it.t}</h3>
                <p className="text-navy-200 mt-3 leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { Icon: ListChecks, t: "Choose Your Service", d: "Browse UK, USA, UAE, Pakistan, or Legal Contract services and select what fits your business." },
    { Icon: FileText, t: "Share Your Details", d: "Fill our simple secure form or WhatsApp us directly. We respond within 4 hours." },
    { Icon: Settings, t: "We Handle Everything", d: "Muhammad Abdullah personally manages your filing, formation, or contract drafting end-to-end." },
    { Icon: CheckCircle, t: "Receive Your Documents", d: "Certified documents delivered to your inbox — ready to use immediately." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>The Process</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-text mt-5">
            Get Your Company in 4 Simple Steps
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 120} className="relative text-center">
              <div className="mx-auto w-16 h-16 rounded-full border-2 border-gold-500 grid place-items-center font-serif text-2xl text-gold-500 bg-white relative z-10">
                {i + 1}
              </div>
              <div className="mx-auto mt-5 w-12 h-12 grid place-items-center text-dark-text">
                <s.Icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-dark-text mt-2">{s.t}</h3>
              <p className="mt-2 text-sm text-gray-500 max-w-[240px] mx-auto">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] border-t-2 border-dashed border-gold-500/40 -z-0" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PakistanSection() {
  const points = [
    "SECP Private Limited Company Registration",
    "PSEB Registration & 0.25% IT Export Tax Concession",
    "FBR NTN, Active Taxpayer List (ATL) Status & Annual Returns",
  ];
  return (
    <section className="bg-off-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-8">
          <SectionLabel>For Pakistani Businesses</SectionLabel>
          <h2 className="font-serif text-3xl md:text-[40px] text-dark-text mt-5 leading-tight">
            IT Export Income is taxed at 0.25% in Pakistan. Are You Claiming It?
          </h2>
          <p className="mt-5 text-gray-700 text-base leading-[1.8]">
            Under Section 154A of the Income Tax Ordinance 2001, Pakistani IT exporters and freelancers
            are eligible for a reduced 0.25% concessionary tax rate on foreign earnings — provided you
            are registered with FBR, PSEB, and maintain Active Taxpayer Status (ATL). Without proper registration,
            your remittance income can be taxed at up to 45%.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-dark-text text-[15px]">
                <CheckCircle size={18} className="text-gold-500 shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-navy-900 border-l-4 border-gold-500 rounded-2xl p-6">
            <p className="font-serif italic text-white text-lg leading-snug">
              "As a Punjab Bar Council licensed advocate, I ensure your Pakistani IT
              business is legally registered, PSEB &amp; FBR compliant, and claiming the 0.25%
              concessionary tax rate you are entitled to."
            </p>
            <p className="text-navy-200 text-[13px] mt-3">— Muhammad Abdullah, Advocate, Punjab Bar Council</p>
          </div>
        </Reveal>

        <div className="space-y-6 lg:col-span-4">
          <Reveal delay={100} className="bg-white border border-border rounded-2xl p-7 shadow-sm">
            <div className="font-serif text-5xl font-bold text-gold-500 leading-none">0.25%</div>
            <p className="mt-3 text-dark-text font-semibold text-base">Reduced IT Export Tax Rate</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">Under Sec 154A of Income Tax Ordinance with PSEB Registration &amp; FBR ATL Status</p>
          </Reveal>

          <Reveal delay={200} className="bg-white border border-border rounded-2xl p-7 shadow-sm">
            <div className="font-serif text-4xl font-bold text-gold-500 leading-none">0.25% vs 45%</div>
            <p className="mt-3 text-dark-text font-semibold text-base">Concessionary vs Non-Filer Tax Rate</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">Save significant tax legally by maintaining your PSEB &amp; FBR compliance instead of paying up to 45% standard tax</p>
          </Reveal>

          <Reveal delay={300}>
            <a
              href="https://abdullahqadeer.com/tax-calculators/freelancer-tax-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full justify-center inline-flex items-center gap-2 py-4 text-sm font-semibold shadow-md"
            >
              Calculate Your Freelancer Tax <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Got my Wyoming LLC, EIN, and Stripe account activated within 7 days. As a Pakistani freelancer, I never thought this was possible remotely.",
      n: "Ahmed K.",
      c: "🇵🇰 Lahore, Pakistan",
      r: "Upwork Top Rated",
      i: "AK",
    },
    {
      q: "Annual accounts, self-assessment, and confirmation statement filed on time every year. Muhammad Abdullah handles everything — I just focus on my business.",
      n: "Zara M.",
      c: "🇦🇪 Dubai, UAE",
      r: "UK LTD Director",
      i: "ZM",
    },
    {
      q: "SECP, PSEB, and NTN all done in one week. Our IT agency is now fully registered and claiming 100% tax exemption on export income.",
      n: "Bilal A.",
      c: "🇸🇦 Saudi Arabia",
      r: "IT Agency Owner",
      i: "BA",
    },
  ];
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>Client Stories</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-dark-text mt-5">What Our Clients Say</h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="bg-white rounded-2xl p-8 border border-border shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif italic text-lg text-dark-text mt-5 leading-snug flex-1">
                  “{t.q}”
                </p>
                <div className="mt-7 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-navy-900 text-gold-500 grid place-items-center font-semibold text-sm shrink-0">
                    {t.i}
                  </div>
                  <div>
                    <p className="font-semibold text-dark-text text-sm">{t.n}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{t.c} · {t.r}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogTeaser() {
  const posts = [
    {
      cat: "UK Formation",
      flag: "🇬🇧",
      slug: "/blog/uk-company-formation-documents-required",
      icon: Building2,
      bgGradient: "from-blue-950 via-navy-900 to-navy-950",
      title: "How to Register a UK Limited Company from Pakistan in 2026",
      excerpt: "A step-by-step walkthrough for non-residents covering Companies House, director ID requirements, and HMRC registration.",
      date: "May 12, 2026",
      read: "8 min read",
    },
    {
      cat: "Pakistan Tax",
      flag: "🇵🇰",
      slug: "/blog/pseb-registration-benefits-tax-credit-it-export",
      icon: Landmark,
      bgGradient: "from-emerald-950 via-navy-900 to-navy-950",
      title: "FBR IT Export Exemption: The Complete 2026 Guide",
      excerpt: "Everything Pakistani freelancers and IT companies need to know about claiming 100% tax exemption under the new rules.",
      date: "May 03, 2026",
      read: "12 min read",
    },
    {
      cat: "Legal",
      flag: "⚖️",
      slug: "/blog/software-development-agreement-checklist",
      icon: ShieldCheck,
      bgGradient: "from-amber-950 via-navy-900 to-navy-950",
      title: "Why Every Freelancer Needs a Service Agreement (Not a Template)",
      excerpt: "The five clauses that separate a real contract from a Google template — and what happens when you skip them.",
      date: "Apr 21, 2026",
      read: "6 min read",
    },
  ];

  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>From the Blog</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-5">
            Expert Guides for Pakistani Entrepreneurs
          </h2>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-gold-500/30 text-gold-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Scale size={14} className="text-gold-500" /> Written &amp; Reviewed by Muhammad Abdullah, Advocate
            </span>
          </div>
          <p className="mt-4 text-navy-200 max-w-2xl mx-auto text-sm leading-relaxed">
            Practical articles on UK company formation, US LLC setup, Pakistan tax law, and
            legal protection — authored directly by a Punjab Bar Council licensed advocate.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={i} delay={i * 100}>
                <Link
                  to={p.slug}
                  className="group h-full bg-navy-800 rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-1 hover:border-gold-500/50 transition-all duration-300 flex flex-col block"
                >
                  <div className={`aspect-[16/9] bg-gradient-to-br ${p.bgGradient} relative overflow-hidden border-b border-white/10 flex items-center justify-center`}>
                    <div className="absolute inset-0 grid-pattern opacity-40" />
                    <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm border border-gold-500/30 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                      <span>{p.flag}</span>
                      <span>{p.cat}</span>
                    </div>
                    <Icon size={44} className="text-gold-500/70 group-hover:scale-110 group-hover:text-gold-400 transition-all duration-300" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-lg text-white group-hover:text-gold-500 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-navy-200 text-[13px] mt-2.5 leading-relaxed line-clamp-2 flex-1">
                      {p.excerpt}
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-navy-200">
                      <span className="text-gold-400 font-medium inline-flex items-center gap-1.5">
                        <Scale size={13} /> By Muhammad Abdullah, Advocate
                      </span>
                      <span className="inline-flex items-center gap-1 text-navy-300">
                        <Clock size={12} /> {p.read}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950 px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-lg transition-all"
          >
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  const trustChecks = [
    "Free consultation",
    "Punjab Bar Council Licensed",
    "IRS PTIN Registered",
    "Response within 4 hours",
  ];

  return (
    <section className="relative bg-navy-950 overflow-hidden py-24 border-t border-white/10">
      <div className="absolute inset-0 diagonal-pattern opacity-60" />
      <div className="absolute inset-0 gold-glow opacity-30" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-gold-500 bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-500/20 mb-4">
            START YOUR JOURNEY
          </span>
          <h2 className="font-serif text-4xl md:text-[52px] text-white mt-2 leading-[1.15]">
            Ready to Take Your Business Global?
          </h2>
          <p className="mt-5 text-navy-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you need a UK LTD, US LLC, UAE Freezone, Pakistan SECP registration, or a professionally drafted legal contract — ADVAQ handles everything.
          </p>
          <p className="mt-4 text-gold-400 font-serif italic text-base font-medium">
            One licensed advocate. Four jurisdictions. 100% remote. Free initial consultation.
          </p>

          <div className="mt-9 flex flex-wrap justify-center items-center gap-4">
            <Link to="/contact" className="btn-gold py-4 px-8 text-sm uppercase tracking-wider font-bold shadow-lg">
              GET STARTED NOW <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-all shadow-md"
            >
              <MessageCircle size={18} /> WHATSAPP US
            </a>
            <Link
              to="/uk-services"
              className="border border-gold-500/80 text-gold-400 hover:bg-gold-500 hover:text-navy-950 px-8 py-4 text-sm font-semibold uppercase tracking-wider rounded-lg transition-all"
            >
              VIEW ALL SERVICES
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-navy-200">
            {trustChecks.map((check, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 text-white/90 font-medium">
                <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                {check}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <Stats />
      <ServicesOverview />
      <WhoWeServe />
      <WhyUs />
      <HowItWorks />
      <PakistanSection />
      <Testimonials />
      <BlogTeaser />
      <HomeCTA />
    </>
  );
}
