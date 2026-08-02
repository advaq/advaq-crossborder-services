import { jsxs, jsx } from "react/jsx-runtime";
import { aI as faqs } from "./router-COelCWah.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Building, Globe2, ArrowRight, Check, HelpCircle, ChevronDown } from "lucide-react";
import "sonner";
function ArticlePage() {
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("article", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:underline", children: "Blog" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US Business Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Can a Non-US Resident Form an LLC in the United States? (2026 Masterclass)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive educational blueprint for international founders, freelancers, SaaS developers, and e-commerce entrepreneurs on remote US LLC formation, state selection, acquiring an IRS EIN without SSN, remote banking, and IRS tax compliance." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Tax & Legal Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "18 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "US IRS & Secretary of State Guidelines Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "US LLC Formation Key Legal Principles" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "100% Remote & Legal Freedom" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Anyone from Pakistan, UAE, UK, or anywhere worldwide can form and own a US LLC remotely. Zero US travel or visa required." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "No SSN or ITIN Needed" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "You do NOT need a US Social Security Number to incorporate or to obtain an Employer Identification Number (EIN) from the IRS." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "State Selection (Wyoming vs Delaware)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Wyoming offers 0% state tax, $62/year annual fees, and privacy. Delaware is ideal for institutional VC funding." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Stripe & Bank Unlocking" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "A US LLC allows opening Mercury / Relay business checking accounts and activating US Stripe/PayPal for global payments." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-2xl mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BookOpen, { size: 16, className: "text-gold-600" }),
          "Table of Contents"
        ] }),
        /* @__PURE__ */ jsxs("ol", { className: "grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#legal-rights", className: "hover:text-gold-600 underline", children: "1. Legal Rights of Foreign Non-Residents to Own a US LLC" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#state-selection", className: "hover:text-gold-600 underline", children: "2. Selecting the Best State for Incorporation (Wyoming vs Delaware vs NM)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#process-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive US LLC Formation Process Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#step-by-step-workflow", className: "hover:text-gold-600 underline", children: "4. Step-by-Step Incorporation & EIN Acquisition Procedure" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#remote-banking", className: "hover:text-gold-600 underline", children: "5. Remote US Business Banking & Stripe Account Activation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#irs-tax-rules", className: "hover:text-gold-600 underline", children: "6. IRS Tax Compliance & Form 5472/1120 Reporting Rules ($25k Penalty)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "legal-rights", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Legal Rights of Foreign Non-Residents to Own a US LLC" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "United States corporate statutes place zero restrictions on foreign citizenship, nationality, or physical residence for owning a ",
          /* @__PURE__ */ jsx("strong", { children: "Limited Liability Company (LLC)" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Unlike S-Corporations (which legally restrict shareholders to US citizens and resident aliens), a US LLC is completely accessible to non-resident alien founders worldwide. You do not need a US visa, Green Card, physical US residential address, or Social Security Number to own and operate a US business entity." }),
        /* @__PURE__ */ jsx("p", { children: "An LLC grants foreign founders limited liability protection, legally separating personal overseas assets from corporate business debts and litigation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "state-selection", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Selecting the Best State for Incorporation (Wyoming vs Delaware vs New Mexico)" }),
        /* @__PURE__ */ jsx("p", { children: "The United States consists of 50 independent state jurisdictions, each with distinct corporate fees, tax statutes, and privacy laws:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-6 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-600 font-bold text-lg mb-2", children: [
              /* @__PURE__ */ jsx(Building, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Wyoming LLC (Premier Choice for Foreigners)" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1.5 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "0% State Corporate & Personal Income Tax." }),
              /* @__PURE__ */ jsx("li", { children: "Low annual report fee ($62/year for under $300k assets)." }),
              /* @__PURE__ */ jsx("li", { children: "Enhanced member privacy (owner names omitted from public registry)." }),
              /* @__PURE__ */ jsx("li", { children: "Superior charging order creditor protection." }),
              /* @__PURE__ */ jsx("li", { children: "Ideal for freelancers, SaaS founders, and e-commerce sellers." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-6 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-navy-950 font-bold text-lg mb-2", children: [
              /* @__PURE__ */ jsx(Globe2, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Delaware LLC (Best for Venture Capital)" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1.5 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "Preeminent US Court of Chancery for corporate legal disputes." }),
              /* @__PURE__ */ jsx("li", { children: "Preferred state for US Venture Capitalists (VCs) and incubators." }),
              /* @__PURE__ */ jsx("li", { children: "$300 annual mandatory franchise tax fee." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US LLC FORMATION & TAX SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Form Your US LLC Remotely with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ handles Wyoming/Delaware state incorporation, Registered Agent service, IRS EIN acquisition without SSN, and Mercury business bank opening." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore US LLC Formation Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "process-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive US LLC Formation Process Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of the US formation workflow:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Formation Stage" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Responsible Agency" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Required Documents & Inputs" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Estimated Processing Timeframe" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Articles of Organization" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Secretary of State (Wyoming / DE)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Company Name, Registered Agent Address" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "24 to 48 Hours" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Operating Agreement" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Internal Corporate Document" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Member Ownership % & Capital Contributions" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Immediate" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "IRS EIN (Employer ID)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Internal Revenue Service (IRS)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "IRS Form SS-4 (Foreign Applicant)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "5 to 10 Business Days (via Fax)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Mercury Bank Account" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Mercury Bank (Choice Bank / Evolve)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Passport, State Filing, IRS CP575 Letter" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "3 to 5 Business Days" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "IRS Form 5472 & 1120" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "IRS International Tax Division" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Annual Informational Tax Return" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Due April 15 Annually ($25k Penalty)" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "step-by-step-workflow", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Step-by-Step Incorporation & EIN Acquisition Procedure" }),
        /* @__PURE__ */ jsx("p", { children: "Forming a US LLC as a non-resident involves four sequential steps:" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 1: Registered Agent Appointment:" }),
              " Appoint an official commercial Registered Agent in Wyoming or Delaware to provide a physical street address for state notices."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 2: Articles of Organization Filing:" }),
              " Submit Articles of Organization to the Secretary of State and pay state filing fees ($102 in Wyoming)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 3: Operating Agreement Drafting:" }),
              " Draft an Operating Agreement establishing member ownership percentages and governance rules."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 4: IRS EIN Application (Form SS-4):" }),
              " File IRS Form SS-4 via international fax to obtain your CP575 EIN Confirmation Letter without an SSN."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "remote-banking", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Remote US Business Banking & Stripe Account Activation" }),
        /* @__PURE__ */ jsx("p", { children: "Once your state formation and IRS EIN letter are complete, foreign owners can open US business checking accounts 100% remotely using FinTech platforms:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Mercury Bank" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Silicon Valley-backed business banking built for startups. Provides FDIC-insured USD checking/savings, physical/virtual debit cards, wire transfers, and seamless Stripe integration with zero monthly fees." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Relay Financial & Wise Business" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Excellent alternative banking options providing multi-currency accounts and ACH/SWIFT payout capabilities for international teams." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "irs-tax-rules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. IRS Tax Compliance & Form 5472/1120 Reporting Rules ($25k Penalty)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Single-member LLCs owned by non-resident alien individuals are classified by the IRS as ",
          /* @__PURE__ */ jsx("strong", { children: "Disregarded Entities" }),
          " for federal tax purposes."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "If the non-resident owner has zero physical presence in the US, zero US employees, and no US trade or business (ETBUS), foreign-sourced profits are generally not subject to US federal income tax." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-gold-500 p-5 rounded-2xl font-mono text-xs my-4 border border-gold-500/20 space-y-2", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-white font-bold text-sm mb-1", children: "CRITICAL ANNUAL IRS COMPLIANCE MANDATE:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200", children: "Under IRC Section 6038A, every foreign-owned single-member US LLC MUST file IRS Form 5472 and a pro-forma Form 1120 annually by April 15. Failing to file Form 5472 triggers an automatic IRS administrative penalty of $25,000!" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "faqs", className: "pt-8 border-t border-border", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { size: 22, className: "text-gold-600" }),
          "Frequently Asked Questions"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(openFaq === idx ? null : idx), className: "w-full p-5 text-left font-sans font-semibold text-navy-950 flex justify-between items-center gap-4 hover:bg-off-white", children: [
            /* @__PURE__ */ jsx("span", { children: faq.q }),
            /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-500 shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}` })
          ] }),
          openFaq === idx && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-border/50 pt-3", children: faq.a })
        ] }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 py-20 text-center text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-100" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US BUSINESS FORMATION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your US LLC with ADVAQ Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Wyoming/Delaware state filing, Registered Agent service, IRS EIN acquisition without SSN, Operating Agreement, and US bank setup assistance handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order US LLC Formation Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
