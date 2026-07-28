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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <Stats />
      <Services />
      <WhoWeServe />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}

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
              Company formation, tax compliance, and legal contracts — managed directly by a licensed advocate &amp; IRS PTIN tax preparer. 100% remote. Full legal accountability.
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
    { Icon: Scale, t: "Punjab Bar Council", s: "Licensed Advocate" },
    { Icon: ClipboardCheck, t: "IRS PTIN Registered", s: "US Tax Preparer" },
    { Icon: Landmark, t: "SECP & FBR Registered", s: "Pakistan Corporate Counsel" },
    { Icon: Globe2, t: "UK, USA, UAE & PK", s: "Cross-Border Expertise" },
    { Icon: BadgeCheck, t: "200+ Businesses", s: "Formed & Compliant" },
  ];
  return (
    <section className="bg-navy-900 border-t border-gold-500/30 border-b border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 lg:divide-x lg:divide-white/10">
        {items.map((it, i) => (
          <div key={i} className="flex items-center justify-center gap-3 px-4">
            <it.Icon size={20} className="text-gold-500 shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold leading-tight">{it.t}</p>
              <p className="text-navy-200 text-xs leading-tight mt-0.5">{it.s}</p>
            </div>
          </div>
        ))}
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
      title: "UK Limited Company Services",
      sub: "From incorporation to annual compliance",
      items: ["UK LTD Incorporation", "Self Assessment Tax Return", "Company Annual Accounts", "Confirmation Statement", "Payroll Services", "VAT Registration"],
      link: "/uk-services" as const,
      cta: "View All UK Services",
    },
    {
      label: "🇺🇸 UNITED STATES",
      title: "US LLC & Tax Services",
      sub: "Form your LLC and stay IRS-compliant",
      items: ["Wyoming LLC Incorporation", "EIN Number Registration", "BOI Report (FinCEN)", "ITIN Application", "US Tax Returns (1040/1065/1120)", "Registered Agent Service"],
      link: "/us-services" as const,
      cta: "View All US Services",
    },
    {
      label: "🇦🇪 UNITED ARAB EMIRATES",
      title: "UAE Company & Tax Services",
      sub: "Freezone setup, VAT & Corporate Tax compliance",
      items: ["Freezone Company Formation", "Mainland Company Formation", "VAT Registration (TRN)", "Corporate Tax Registration", "Quarterly VAT Return Filing", "Small Business Relief (SBR)"],
      link: "/uae-services" as const,
      cta: "View All UAE Services",
    },
    {
      label: "🇵🇰 PAKISTAN",
      title: "Pakistan Legal & Tax Services",
      sub: "SECP, FBR & legal compliance for IT businesses",
      items: ["SECP Company Registration", "NTN & FBR Registration", "PSEB Registration", "Income Tax Return Filing", "FBR Notice Response", "Legal Consultation (Advocate)"],
      link: "/pakistan-services" as const,
      cta: "View All Pakistan Services",
    },
    {
      label: "⚖️ LEGAL CONTRACT DRAFTING",
      title: "Professional Contract Drafting",
      sub: "Protect your work, payment & intellectual property",
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
            Everything You Need to Build & Run Your Business
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            From company formation to annual compliance, tax filing to legal contracts —
            one trusted partner for UK, US, and Pakistan.
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
    { Icon: Laptop, t: "Upwork & Fiverr Freelancers", d: "Earn in dollars and pounds legally. Get Stripe, PayPal Business, and Wise set up through a proper UK or US company." },
    { Icon: Building2, t: "IT Agencies & Software Houses", d: "Register your company in the UK or US to win international contracts and receive payments without restrictions." },
    { Icon: ShoppingBag, t: "Amazon & E-Commerce Sellers", d: "Open your UK LTD or US LLC, get your VAT number, and start selling on Amazon UK, Etsy, and Shopify as a registered business." },
    { Icon: Code, t: "SaaS & App Developers", d: "Form your company, get Stripe connected, handle your US or UK taxes, and stay compliant as your product grows globally." },
    { Icon: Users, t: "Business Partners & Co-Founders", d: "Shareholder agreements, partnership deeds, and company structures that protect every founder's rights from day one." },
    { Icon: Scale, t: "Businesses Needing Legal Cover", d: "NDAs, service agreements, IP assignments, and outsourcing contracts — drafted by a licensed advocate, not a template generator." },
  ];
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <Reveal className="text-center">
          <SectionLabel center>Who We Serve</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-5">
            Built for Pakistani Entrepreneurs Going Global
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
    { Icon: Shield, t: "Expert Professionals", d: "Qualified accountants & company formation specialists." },
    { Icon: Globe2, t: "100% Remote Process", d: "Everything handled online from anywhere in the world." },
    { Icon: Tag, t: "Transparent Pricing", d: "No hidden fees. What you see is what you pay — guaranteed." },
    { Icon: Headphones, t: "Lifetime Support", d: "We're here long after formation — for compliance and growth." },
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
    { Icon: ListChecks, t: "Choose Service", d: "Pick the formation or tax service you need." },
    { Icon: FileText, t: "Fill Our Form", d: "Submit your details through our secure form." },
    { Icon: Settings, t: "We Handle It", d: "Our experts file everything on your behalf." },
    { Icon: CheckCircle, t: "Receive Documents", d: "Get certified documents delivered to your inbox." },
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
              <p className="mt-2 text-sm text-gray-500 max-w-[220px] mx-auto">{s.d}</p>
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
    "PSEB Registration & IT Export Exemption",
    "FBR NTN, ATL Status & Annual Returns",
  ];
  return (
    <section className="bg-off-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <SectionLabel>For Pakistani Businesses</SectionLabel>
          <h2 className="font-serif text-3xl md:text-[40px] text-dark-text mt-5 leading-tight">
            IT Export Income is 100% Tax Exempt in Pakistan. Are You Claiming It?
          </h2>
          <p className="mt-5 text-gray-700 text-base leading-[1.8]">
            Under the Income Tax Ordinance 2001, Pakistani IT companies and freelancers are
            entitled to a complete income tax exemption on export earnings — but only if
            properly registered with FBR, PSEB, and maintaining Active Taxpayer status.
            Most Pakistani IT businesses are missing this benefit entirely.
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
              business is legally registered, FBR compliant, and claiming every tax
              exemption you are entitled to."
            </p>
            <p className="text-navy-200 text-[13px] mt-3">— [Your Name], Advocate, Punjab Bar Council</p>
          </div>
          <div className="mt-7">
            <Link to="/pakistan-services" className="btn-gold">
              View Pakistan Services <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} className="space-y-5">
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="font-serif text-5xl text-gold-500 leading-none">100%</div>
            <p className="mt-3 text-dark-text font-semibold">IT Export Tax Exemption</p>
            <p className="text-gray-500 text-[13px] mt-1">Available to all registered Pakistani IT companies</p>
          </div>
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="font-serif text-5xl text-gold-500 leading-none">Rs.0</div>
            <p className="mt-3 text-dark-text font-semibold">Tax on Foreign Freelance Income</p>
            <p className="text-gray-500 text-[13px] mt-1">When properly registered with FBR & PSEB</p>
          </div>
          <div className="bg-navy-900 rounded-2xl p-6">
            <Scale size={28} className="text-gold-500" />
            <p className="mt-3 text-white font-semibold">Punjab Bar Council Licensed</p>
            <p className="text-navy-200 text-[13px] mt-1">
              Your legal and tax matters handled by a qualified advocate — not just an accountant.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Got my Wyoming LLC, EIN, and Stripe account set up within a week. Never thought it would be this easy from Pakistan.", n: "Ahmed K.", c: "🇵🇰 Pakistan", r: "Upwork Freelancer", i: "AK" },
    { q: "Annual accounts, self-assessment, and confirmation statement all filed on time. Completely stress-free. Highly recommend.", n: "Zara M.", c: "🇦🇪 UAE", r: "UK LTD Director", i: "ZM" },
    { q: "They handled our SECP registration, PSEB filing, and NTN in one go. Professional, fast, and exactly what our agency needed.", n: "Bilal A.", c: "🇸🇦 Saudi Arabia", r: "IT Agency Owner", i: "BA" },
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
                  <div className="w-11 h-11 rounded-full bg-navy-900 text-gold-500 grid place-items-center font-semibold text-sm">
                    {t.i}
                  </div>
                  <div>
                    <p className="font-semibold text-dark-text text-sm">{t.n}</p>
                    <p className="text-xs text-gray-500">{t.c} · {t.r}</p>
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
    { cat: "UK Formation", title: "How to Register a UK Limited Company from Pakistan in 2025", excerpt: "A step-by-step walkthrough for non-residents covering Companies House, director ID requirements, and HMRC registration.", date: "May 12, 2026", read: "8 min read" },
    { cat: "Pakistan Tax", title: "FBR IT Export Exemption: The Complete 2026 Guide", excerpt: "Everything Pakistani freelancers and IT companies need to know about claiming 100% tax exemption under the new rules.", date: "May 03, 2026", read: "12 min read" },
    { cat: "Legal", title: "Why Every Freelancer Needs a Service Agreement (Not a Template)", excerpt: "The five clauses that separate a real contract from a Google template — and what happens when you skip them.", date: "Apr 21, 2026", read: "6 min read" },
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
          <p className="mt-5 text-navy-200 max-w-2xl mx-auto">
            Practical articles on UK company formation, US LLC setup, Pakistan tax law, and
            legal protection — written by a Punjab Bar Council licensed advocate.
          </p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="group h-full bg-navy-800 rounded-2xl overflow-hidden border border-white/8 hover:-translate-y-1 hover:border-gold-500/40 transition-all duration-300 flex flex-col">
                <div className="aspect-[16/9] bg-navy-700 relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-60" />
                  <div className="absolute inset-0 gold-glow opacity-30" />
                  <FileText size={40} className="text-gold-500/40 absolute inset-0 m-auto" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block self-start text-[11px] uppercase tracking-widest bg-gold-500 text-navy-900 px-3 py-1 rounded-full font-semibold">
                    {p.cat}
                  </span>
                  <h3 className="font-serif text-lg text-white mt-4 group-hover:text-gold-500 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-navy-200 text-[13px] mt-2 leading-relaxed line-clamp-2 flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-navy-200 text-xs">
                    <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> {p.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {p.read}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 border border-gold-500 text-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-500/10 transition-colors">
            View All Articles <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 diagonal-pattern" />
      <div className="absolute inset-0 gold-glow opacity-40" />
      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        <Reveal>
          <p className="label-eyebrow">Ready to start?</p>
          <h2 className="font-serif text-4xl md:text-[52px] text-white mt-5 leading-[1.1]">
            Launch Your Business Today.
          </h2>
          <p className="mt-5 text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a UK LTD, US LLC, Pakistan SECP registration, or a professionally
            drafted legal contract — we handle everything. One firm. All jurisdictions.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Get Started Now <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/[number]" className="btn-outline-light">WhatsApp Us</a>
            <Link to="/uk-services" className="inline-flex items-center justify-center gap-2 border border-gold-500 text-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-500/10 transition-colors">
              View All Services
            </Link>
          </div>
          <p className="mt-6 text-navy-200 text-[13px]">
            Free initial consultation · Punjab Bar Council Licensed Advocate · UK, US & Pakistan Services
          </p>
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
