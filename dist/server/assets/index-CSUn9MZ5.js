import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Scale, Landmark, Globe2, FileText, BadgeCheck, ChevronRight, Laptop, Building2, ShoppingBag, Code, Users, Shield, Tag, Headphones, ListChecks, Settings, CheckCircle, Star, Calendar, Clock } from "lucide-react";
import { R as Reveal, S as SectionLabel } from "./router-DZ5LLfdT.js";
import "react";
import "sonner";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen bg-navy-950 overflow-hidden flex items-center pt-24", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gold-glow opacity-60 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full py-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "🇬🇧 UK  •  🇺🇸 US  •  🇦🇪 UAE  •  🇵🇰 PAKISTAN" }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxs("h1", { className: "font-serif text-white text-5xl md:text-6xl lg:text-[64px] leading-[1.05] mt-6", children: [
          "Your UK, USA, UAE ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gold-500", children: "& Pakistan Business" }),
          " ",
          /* @__PURE__ */ jsx("br", {}),
          "Partner."
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 240, children: /* @__PURE__ */ jsx("p", { className: "mt-7 text-navy-200 text-lg max-w-lg leading-[1.7]", children: "Company formation, tax and ongoing compliance across the UK, USA, UAE and Pakistan — plus international legal contracts, all managed by one trusted advisory team. 100% remote. Expert. Affordable." }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 360, children: /* @__PURE__ */ jsxs("div", { className: "mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/uk-services", className: "btn-gold", children: [
            "🇬🇧 UK Services ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/us-services", className: "btn-outline-light", children: [
            "🇺🇸 USA Services ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/uae-services", className: "btn-outline-light border-gold-500/70 text-gold-200 hover:border-gold-500 hover:text-gold-500", children: [
            "🇦🇪 UAE Services ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services", className: "btn-outline-light", children: [
            "🇵🇰 Pakistan Services ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting", className: "sm:col-span-2 inline-flex items-center justify-center gap-2 border border-gold-500 text-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-500/10 transition-colors", children: [
            "Legal Contract Drafting ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Reveal, { delay: 480, children: /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-navy-200", children: ["Punjab Bar Council Licensed", "HMRC & IRS Compliant", "SECP & FBR Registered", "200+ Clients Served"].map((t) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-gold-500" }),
          " ",
          t
        ] }, t)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative h-[480px] hidden lg:block", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute top-8 right-0 w-[420px] bg-navy-800 border border-gold-500/20 rounded-2xl p-7 animate-float shadow-2xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "label-eyebrow !text-gold-200/80", children: "Status" }),
            /* @__PURE__ */ jsx("span", { className: "px-3 py-1 text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 rounded-full border border-emerald-400/20", children: "Approved" })
          ] }),
          /* @__PURE__ */ jsxs("h3", { className: "font-serif text-2xl text-white mt-5", children: [
            "Company Successfully Registered ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "🎉" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Company" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Acme Trading Ltd" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Jurisdiction" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "🇬🇧 United Kingdom" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Date" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "12 Apr 2025" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full w-full bg-gradient-to-r from-gold-500 to-gold-200" }) }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-navy-200", children: "Onboarding complete · 100%" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-0 w-[300px] bg-navy-700/90 backdrop-blur border border-white/10 rounded-2xl p-5 animate-float-delayed shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 grid place-items-center bg-gold-500/15 border border-gold-500/30 rounded-lg text-gold-500 font-bold text-sm", children: "UK" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-semibold", children: "UK LTD #12456789" }),
            /* @__PURE__ */ jsxs("p", { className: "text-navy-200 text-xs flex items-center gap-1.5 mt-0.5", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400" }),
              " Active"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-1/2 left-12 w-[200px] bg-gold-500 text-navy-900 rounded-2xl p-4 animate-float shadow-2xl rotate-[-4deg]", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[11px] uppercase tracking-widest font-semibold opacity-70", children: "EIN Issued" }),
          /* @__PURE__ */ jsx("p", { className: "font-serif text-lg mt-1", children: "87-1234567" })
        ] })
      ] })
    ] })
  ] });
}
function CredibilityBar() {
  const items = [{
    Icon: Scale,
    t: "Punjab Bar Council",
    s: "Licensed Advocate"
  }, {
    Icon: Landmark,
    t: "SECP & FBR",
    s: "Registered Practitioner"
  }, {
    Icon: Globe2,
    t: "UK & US Expert",
    s: "HMRC & IRS Compliant"
  }, {
    Icon: FileText,
    t: "Legal Contracts",
    s: "NDA, MSA, IP & More"
  }, {
    Icon: BadgeCheck,
    t: "200+ Businesses",
    s: "Formed & Compliant"
  }];
  return /* @__PURE__ */ jsx("section", { className: "bg-navy-800 border-t border-gold-500/30 border-b border-white/5 py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 lg:divide-x lg:divide-white/10", children: items.map((it, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 px-4", children: [
    /* @__PURE__ */ jsx(it.Icon, { size: 20, className: "text-gold-500 shrink-0" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-semibold leading-tight", children: it.t }),
      /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs leading-tight mt-0.5", children: it.s })
    ] })
  ] }, i)) }) });
}
function Stats() {
  const items = [{
    v: "200+",
    l: "Companies Formed"
  }, {
    v: "UK · US · PK",
    l: "Triple Jurisdiction"
  }, {
    v: "5★",
    l: "Client Rating"
  }, {
    v: "48hr",
    l: "Average Turnaround"
  }, {
    v: "100%",
    l: "IT Export Tax Exemption"
  }];
  return /* @__PURE__ */ jsx("section", { className: "bg-off-white border-b border-border", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 md:divide-x divide-border", children: items.map((s, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 80, className: "text-center px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "font-serif text-3xl md:text-[40px] text-gold-500 leading-none", children: s.v }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-[11px] uppercase tracking-[0.08em] text-gray-500 font-medium", children: s.l })
  ] }, i)) }) });
}
function ServicesOverview() {
  const cards = [{
    label: "🇬🇧 UNITED KINGDOM",
    title: "UK Limited Company Services",
    sub: "From incorporation to annual compliance",
    items: ["UK LTD Incorporation", "Self Assessment Tax Return", "Company Annual Accounts", "Confirmation Statement", "Payroll Services", "VAT Registration"],
    link: "/uk-services",
    cta: "View All UK Services"
  }, {
    label: "🇺🇸 UNITED STATES",
    title: "US LLC & Tax Services",
    sub: "Form your LLC and stay IRS-compliant",
    items: ["Wyoming LLC Incorporation", "EIN Number Registration", "BOI Report (FinCEN)", "ITIN Application", "US Tax Returns (1040/1065/1120)", "Registered Agent Service"],
    link: "/us-services",
    cta: "View All US Services"
  }, {
    label: "🇦🇪 UNITED ARAB EMIRATES",
    title: "UAE Company & Tax Services",
    sub: "Freezone setup, VAT & Corporate Tax compliance",
    items: ["Freezone Company Formation", "Mainland Company Formation", "VAT Registration (TRN)", "Corporate Tax Registration", "Quarterly VAT Return Filing", "Small Business Relief (SBR)"],
    link: "/uae-services",
    cta: "View All UAE Services"
  }, {
    label: "🇵🇰 PAKISTAN",
    title: "Pakistan Legal & Tax Services",
    sub: "SECP, FBR & legal compliance for IT businesses",
    items: ["SECP Company Registration", "NTN & FBR Registration", "PSEB Registration", "Income Tax Return Filing", "FBR Notice Response", "Legal Consultation (Advocate)"],
    link: "/pakistan-services",
    cta: "View All Pakistan Services"
  }, {
    label: "⚖️ LEGAL CONTRACT DRAFTING",
    title: "Professional Contract Drafting",
    sub: "Protect your work, payment & intellectual property",
    items: ["NDA / Non-Disclosure Agreement", "Freelance Service Agreement", "IP Assignment Agreement", "Master Service Agreement (MSA)", "IT Outsourcing Agreement", "Privacy Policy & Terms of Service"],
    link: "/legal-contract-drafting",
    cta: "View All Contracts"
  }];
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsx(SectionLabel, { center: true, children: "Our Services" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl text-dark-text mt-5 max-w-3xl mx-auto leading-tight", children: "Everything You Need to Build & Run Your Business" }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-gray-500 max-w-2xl mx-auto", children: "From company formation to annual compliance, tax filing to legal contracts — one trusted partner for UK, US, and Pakistan." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: cards.map((c, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxs("article", { className: "group relative bg-white border border-border rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(10,15,44,0.18)] overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 inset-x-0 h-[3px] bg-gold-500" }),
      /* @__PURE__ */ jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-500", children: c.label }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl text-dark-text mt-3", children: c.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm mt-1.5", children: c.sub }),
      /* @__PURE__ */ jsx("ul", { className: "mt-7 space-y-3", children: c.items.map((it) => /* @__PURE__ */ jsxs("li", { className: "group/item flex items-center gap-3 text-dark-text", children: [
        /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-gold-500 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-[14px]", children: it })
      ] }, it)) }),
      /* @__PURE__ */ jsxs(Link, { to: c.link, className: "mt-8 inline-flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-widest border-b border-transparent hover:border-gold-500 transition-colors pb-1", children: [
        c.cta,
        " ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] })
    ] }) }, i)) })
  ] }) });
}
function WhoWeServe() {
  const items = [{
    Icon: Laptop,
    t: "Upwork & Fiverr Freelancers",
    d: "Earn in dollars and pounds legally. Get Stripe, PayPal Business, and Wise set up through a proper UK or US company."
  }, {
    Icon: Building2,
    t: "IT Agencies & Software Houses",
    d: "Register your company in the UK or US to win international contracts and receive payments without restrictions."
  }, {
    Icon: ShoppingBag,
    t: "Amazon & E-Commerce Sellers",
    d: "Open your UK LTD or US LLC, get your VAT number, and start selling on Amazon UK, Etsy, and Shopify as a registered business."
  }, {
    Icon: Code,
    t: "SaaS & App Developers",
    d: "Form your company, get Stripe connected, handle your US or UK taxes, and stay compliant as your product grows globally."
  }, {
    Icon: Users,
    t: "Business Partners & Co-Founders",
    d: "Shareholder agreements, partnership deeds, and company structures that protect every founder's rights from day one."
  }, {
    Icon: Scale,
    t: "Businesses Needing Legal Cover",
    d: "NDAs, service agreements, IP assignments, and outsourcing contracts — drafted by a licensed advocate, not a template generator."
  }];
  return /* @__PURE__ */ jsxs("section", { className: "bg-navy-900 py-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "text-center", children: [
        /* @__PURE__ */ jsx(SectionLabel, { center: true, children: "Who We Serve" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl text-white mt-5", children: "Built for Pakistani Entrepreneurs Going Global" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxs("div", { className: "group h-full bg-navy-800 border border-white/8 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500", children: /* @__PURE__ */ jsx(it.Icon, { size: 24 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-white text-lg font-semibold mt-5", children: it.t }),
        /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-sm mt-2 leading-relaxed", children: it.d })
      ] }) }, i)) })
    ] })
  ] });
}
function WhyUs() {
  const items = [{
    Icon: Shield,
    t: "Expert Professionals",
    d: "Qualified accountants & formation specialists handling every step."
  }, {
    Icon: Globe2,
    t: "100% Remote Process",
    d: "Everything handled online from anywhere in the world."
  }, {
    Icon: Tag,
    t: "Transparent Pricing",
    d: "No hidden fees. What you see is what you pay — guaranteed."
  }, {
    Icon: Headphones,
    t: "Lifetime Support",
    d: "We're here long after formation — for compliance and growth."
  }];
  return /* @__PURE__ */ jsxs("section", { className: "bg-navy-900 py-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "text-center", children: [
        /* @__PURE__ */ jsx(SectionLabel, { center: true, children: "Our Advantage" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl text-white mt-5", children: "Why Hundreds of Founders Trust Us" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid sm:grid-cols-2 gap-6", children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxs("div", { className: "group bg-navy-800 border border-white/8 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 grid place-items-center bg-gold-500/10 border border-gold-500/20 rounded-xl text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors", children: /* @__PURE__ */ jsx(it.Icon, { size: 24 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-semibold mt-6", children: it.t }),
        /* @__PURE__ */ jsx("p", { className: "text-navy-200 mt-3 leading-relaxed", children: it.d })
      ] }) }, i)) })
    ] })
  ] });
}
function HowItWorks() {
  const steps = [{
    Icon: ListChecks,
    t: "Choose Service",
    d: "Pick the formation or tax service you need."
  }, {
    Icon: FileText,
    t: "Fill Our Form",
    d: "Submit your details through our secure form."
  }, {
    Icon: Settings,
    t: "We Handle It",
    d: "Our experts file everything on your behalf."
  }, {
    Icon: CheckCircle,
    t: "Receive Documents",
    d: "Get certified documents delivered to your inbox."
  }];
  return /* @__PURE__ */ jsx("section", { className: "bg-white py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsx(SectionLabel, { center: true, children: "The Process" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl text-dark-text mt-5", children: "Get Your Company in 4 Simple Steps" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-20 grid md:grid-cols-4 gap-8 relative", children: steps.map((s, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 120, className: "relative text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto w-16 h-16 rounded-full border-2 border-gold-500 grid place-items-center font-serif text-2xl text-gold-500 bg-white relative z-10", children: i + 1 }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-5 w-12 h-12 grid place-items-center text-dark-text", children: /* @__PURE__ */ jsx(s.Icon, { size: 28, strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-dark-text mt-2", children: s.t }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-500 max-w-[220px] mx-auto", children: s.d }),
      i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] border-t-2 border-dashed border-gold-500/40 -z-0" })
    ] }, i)) })
  ] }) });
}
function PakistanSection() {
  const points = ["SECP Private Limited Company Registration", "PSEB Registration & IT Export Exemption", "FBR NTN, ATL Status & Annual Returns"];
  return /* @__PURE__ */ jsx("section", { className: "bg-off-white py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start", children: [
    /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx(SectionLabel, { children: "For Pakistani Businesses" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-[40px] text-dark-text mt-5 leading-tight", children: "IT Export Income is 100% Tax Exempt in Pakistan. Are You Claiming It?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-gray-700 text-base leading-[1.8]", children: "Under the Income Tax Ordinance 2001, Pakistani IT companies and freelancers are entitled to a complete income tax exemption on export earnings — but only if properly registered with FBR, PSEB, and maintaining Active Taxpayer status. Most Pakistani IT businesses are missing this benefit entirely." }),
      /* @__PURE__ */ jsx("ul", { className: "mt-7 space-y-3", children: points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-dark-text text-[15px]", children: [
        /* @__PURE__ */ jsx(CheckCircle, { size: 18, className: "text-gold-500 shrink-0" }),
        " ",
        p
      ] }, p)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-navy-900 border-l-4 border-gold-500 rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "font-serif italic text-white text-lg leading-snug", children: '"As a Punjab Bar Council licensed advocate, I ensure your Pakistani IT business is legally registered, FBR compliant, and claiming every tax exemption you are entitled to."' }),
        /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-[13px] mt-3", children: "— [Your Name], Advocate, Punjab Bar Council" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services", className: "btn-gold", children: [
        "View Pakistan Services ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Reveal, { delay: 150, className: "space-y-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-5xl text-gold-500 leading-none", children: "100%" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-dark-text font-semibold", children: "IT Export Tax Exemption" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-[13px] mt-1", children: "Available to all registered Pakistani IT companies" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-5xl text-gold-500 leading-none", children: "Rs.0" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-dark-text font-semibold", children: "Tax on Foreign Freelance Income" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-[13px] mt-1", children: "When properly registered with FBR & PSEB" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx(Scale, { size: 28, className: "text-gold-500" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-white font-semibold", children: "Punjab Bar Council Licensed" }),
        /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-[13px] mt-1", children: "Your legal and tax matters handled by a qualified advocate — not just an accountant." })
      ] })
    ] })
  ] }) });
}
function Testimonials() {
  const items = [{
    q: "Got my Wyoming LLC, EIN, and Stripe account set up within a week. Never thought it would be this easy from Pakistan.",
    n: "Ahmed K.",
    c: "🇵🇰 Pakistan",
    r: "Upwork Freelancer",
    i: "AK"
  }, {
    q: "Annual accounts, self-assessment, and confirmation statement all filed on time. Completely stress-free. Highly recommend.",
    n: "Zara M.",
    c: "🇦🇪 UAE",
    r: "UK LTD Director",
    i: "ZM"
  }, {
    q: "They handled our SECP registration, PSEB filing, and NTN in one go. Professional, fast, and exactly what our agency needed.",
    n: "Bilal A.",
    c: "🇸🇦 Saudi Arabia",
    r: "IT Agency Owner",
    i: "BA"
  }];
  return /* @__PURE__ */ jsx("section", { className: "bg-gray-100 py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "text-center", children: [
      /* @__PURE__ */ jsx(SectionLabel, { center: true, children: "Client Stories" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl text-dark-text mt-5", children: "What Our Clients Say" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: items.map((t, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 border border-border shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-1 text-gold-500", children: Array.from({
        length: 5
      }).map((_, k) => /* @__PURE__ */ jsx(Star, { size: 16, fill: "currentColor" }, k)) }),
      /* @__PURE__ */ jsxs("p", { className: "font-serif italic text-lg text-dark-text mt-5 leading-snug flex-1", children: [
        "“",
        t.q,
        "”"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-7 flex items-center gap-3 pt-5 border-t border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-navy-900 text-gold-500 grid place-items-center font-semibold text-sm", children: t.i }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-dark-text text-sm", children: t.n }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500", children: [
            t.c,
            " · ",
            t.r
          ] })
        ] })
      ] })
    ] }) }, i)) })
  ] }) });
}
function BlogTeaser() {
  const posts = [{
    cat: "UK Formation",
    title: "How to Register a UK Limited Company from Pakistan in 2025",
    excerpt: "A step-by-step walkthrough for non-residents covering Companies House, director ID requirements, and HMRC registration.",
    date: "May 12, 2026",
    read: "8 min read"
  }, {
    cat: "Pakistan Tax",
    title: "FBR IT Export Exemption: The Complete 2026 Guide",
    excerpt: "Everything Pakistani freelancers and IT companies need to know about claiming 100% tax exemption under the new rules.",
    date: "May 03, 2026",
    read: "12 min read"
  }, {
    cat: "Legal",
    title: "Why Every Freelancer Needs a Service Agreement (Not a Template)",
    excerpt: "The five clauses that separate a real contract from a Google template — and what happens when you skip them.",
    date: "Apr 21, 2026",
    read: "6 min read"
  }];
  return /* @__PURE__ */ jsxs("section", { className: "bg-navy-900 py-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "text-center", children: [
        /* @__PURE__ */ jsx(SectionLabel, { center: true, children: "From the Blog" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-5xl text-white mt-5", children: "Expert Guides for Pakistani Entrepreneurs" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-navy-200 max-w-2xl mx-auto", children: "Practical articles on UK company formation, US LLC setup, Pakistan tax law, and legal protection — written by a Punjab Bar Council licensed advocate." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: posts.map((p, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxs("article", { className: "group h-full bg-navy-800 rounded-2xl overflow-hidden border border-white/8 hover:-translate-y-1 hover:border-gold-500/40 transition-all duration-300 flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "aspect-[16/9] bg-navy-700 relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-60" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gold-glow opacity-30" }),
          /* @__PURE__ */ jsx(FileText, { size: 40, className: "text-gold-500/40 absolute inset-0 m-auto" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block self-start text-[11px] uppercase tracking-widest bg-gold-500 text-navy-900 px-3 py-1 rounded-full font-semibold", children: p.cat }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg text-white mt-4 group-hover:text-gold-500 transition-colors leading-snug", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-[13px] mt-2 leading-relaxed line-clamp-2 flex-1", children: p.excerpt }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-4 text-navy-200 text-xs", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Calendar, { size: 12 }),
              " ",
              p.date
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Clock, { size: 12 }),
              " ",
              p.read
            ] })
          ] })
        ] })
      ] }) }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "inline-flex items-center gap-2 border border-gold-500 text-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-500/10 transition-colors", children: [
        "View All Articles ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] }) })
    ] })
  ] });
}
function HomeCTA() {
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-navy-950 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gold-glow opacity-40" }),
    /* @__PURE__ */ jsx("div", { className: "relative max-w-4xl mx-auto px-6 py-24 text-center", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "label-eyebrow", children: "Ready to start?" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl md:text-[52px] text-white mt-5 leading-[1.1]", children: "Launch Your Business Today." }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-navy-200 text-lg max-w-2xl mx-auto leading-relaxed", children: "Whether you need a UK LTD, US LLC, Pakistan SECP registration, or a professionally drafted legal contract — we handle everything. One firm. All jurisdictions." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold", children: [
          "Get Started Now ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "https://wa.me/[number]", className: "btn-outline-light", children: "WhatsApp Us" }),
        /* @__PURE__ */ jsx(Link, { to: "/uk-services", className: "inline-flex items-center justify-center gap-2 border border-gold-500 text-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gold-500/10 transition-colors", children: "View All Services" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-[13px]", children: "Free initial consultation · Punjab Bar Council Licensed Advocate · UK, US & Pakistan Services" })
    ] }) })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(CredibilityBar, {}),
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(ServicesOverview, {}),
    /* @__PURE__ */ jsx(WhoWeServe, {}),
    /* @__PURE__ */ jsx(WhyUs, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(PakistanSection, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(BlogTeaser, {}),
    /* @__PURE__ */ jsx(HomeCTA, {})
  ] });
}
export {
  Home as component
};
