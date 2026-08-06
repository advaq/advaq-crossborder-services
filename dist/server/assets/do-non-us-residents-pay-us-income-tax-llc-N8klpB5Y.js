import { jsxs, jsx } from "react/jsx-runtime";
import { az as faqs } from "./router-BTtHwbwK.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Scale, DollarSign, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Do Non-US Residents Pay Income Tax on US LLC Profits? (ETBUS Rules & Tax Treaties)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An in-depth IRS legal and tax analysis masterclass for foreign non-resident founders evaluating ETBUS status, Effectively Connected Income (ECI), FDAP passive income, and double taxation treaty benefits." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US International Tax Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "16 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "IRS Code Section 861 & 871 Tax Analysis" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "0% US Tax Principles" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Pass-Through Tax Entity" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Single-member LLCs are disregarded by IRS. Profits pass through directly to the foreign owner." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "ETBUS Statutory Rule" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "If you have zero US physical presence, zero US employees, and zero US dependent agents, your business is NOT ETBUS." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "0% Federal Income Tax" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Non-ETBUS foreign income has $0 US federal income tax liability under IRC Sections 861 & 871." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Mandatory Form 5472" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "You still must file informational IRS Form 5472 annually by April 15 even with $0 tax liability." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#etbus-explained", className: "hover:text-gold-600 underline", children: "1. What Does ETBUS (Engaged in Trade or Business) Mean?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#eci-vs-fdap", className: "hover:text-gold-600 underline", children: "2. Effectively Connected Income (ECI) vs FDAP Income" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#taxability-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive US Tax & Income Classification Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#digital-founders", className: "hover:text-gold-600 underline", children: "4. Why E-Commerce & SaaS Founders Qualify for 0% US Tax" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tax-treaties", className: "hover:text-gold-600 underline", children: "5. Double Taxation Treaties & Permanent Establishment (PE)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#home-country-taxes", className: "hover:text-gold-600 underline", children: "6. State Income Tax Rules & Home Country Obligations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "etbus-explained", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What Does ETBUS (Engaged in Trade or Business) Mean?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Internal Revenue Code ",
          /* @__PURE__ */ jsx("strong", { children: "Section 864(b)" }),
          ", a foreign individual or foreign entity is subject to US federal income tax only if they are classified as being ",
          /* @__PURE__ */ jsx("strong", { children: "Engaged in a Trade or Business within the United States (ETBUS)" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "To be classified as ETBUS, your business must satisfy a 3-part statutory test: (1) maintain a physical office, retail store, or warehouse in the US, (2) employ US-based employees or dependent agents operating on your behalf in the US, or (3) own physical real estate generating active US rental income. If your company satisfies none of these 3 conditions, it is NOT ETBUS." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "eci-vs-fdap", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Effectively Connected Income (ECI) vs FDAP Income" }),
        /* @__PURE__ */ jsx("p", { children: "The IRS categorizes income earned by non-resident aliens into two distinct legal classifications:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Scale, { className: "text-gold-600", size: 18 }),
              "Effectively Connected Income (ECI)"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Income generated from operating an active US trade or business (ETBUS). ECI is subject to standard US progressive income tax rates (10% to 37% individual or 21% corporate rate) and requires filing Form 1040-NR." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(DollarSign, { className: "text-gold-600", size: 18 }),
              "FDAP Income (Fixed, Determinable, Annual, Periodical)"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Passive investment income derived from US sources (such as US stock dividends, interest, or royalties). FDAP income is subject to a flat 30% US gross withholding tax unless reduced by bilateral tax treaties." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "taxability-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive US Tax & Income Classification Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of business models:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Business Model" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "ETBUS Status" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Income Classification" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "US Federal Tax Rate" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Remote SaaS / Digital Agency / Freelancing" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "NOT ETBUS" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Foreign-Sourced Personal Services" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% US Federal Tax" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "E-Commerce Dropshipping (Outside US)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "NOT ETBUS" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Foreign Sales Income" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% US Federal Tax" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Amazon FBA with US Staff/Warehouses" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "ETBUS Triggered" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Effectively Connected Income (ECI)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Progressive US Rates (Form 1040-NR)" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US INTERNATIONAL TAX ADVISORY" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Verify Your 0% US Tax Eligibility with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ conducts ETBUS audits, verifies non-resident tax exemptions, prepares IRS Form 5472, and optimizes international tax treaties." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order US Tax Advisory Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "digital-founders", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Why E-Commerce & SaaS Founders Qualify for 0% US Tax" }),
        /* @__PURE__ */ jsx("p", { children: "Under IRS Sourcing Rules (IRC §§ 861 & 862), income derived from personal services, software development, or digital consulting is sourced to the physical location where the services are performed." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If a non-resident alien founder writes code, delivers digital marketing services, or manages online store operations while physically located outside the US, the income is classified as foreign-sourced income. As a result, the owner incurs ",
          /* @__PURE__ */ jsx("strong", { children: "0% US federal income tax liability" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "tax-treaties", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Double Taxation Treaties & Permanent Establishment (PE)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Article 7 (Business Profits) of US Model Income Tax Treaties, business profits earned by a foreign enterprise are taxable in the US ",
          /* @__PURE__ */ jsx("strong", { children: "only if" }),
          " the foreign enterprise carries on business through a fixed ",
          /* @__PURE__ */ jsx("strong", { children: "Permanent Establishment (PE)" }),
          " in the US."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Maintaining a virtual address or employing third-party independent fulfillment centers does not constitute a Permanent Establishment, insulating treaty-country residents from US tax." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "home-country-taxes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. State Income Tax Rules & Home Country Obligations" }),
        /* @__PURE__ */ jsx("p", { children: "Incorporating in 0% state income tax states (such as Wyoming, Nevada, or Florida) ensures that no state-level income tax is owed." }),
        /* @__PURE__ */ jsx("p", { children: "However, non-resident founders remain obligated to declare their global income and foreign business distributions on their personal income tax returns in their home country (e.g. FBR in Pakistan, HMRC in UK, or local tax authorities)." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US INTERNATIONAL TAX SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Ensure US Tax Compliance with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "ETBUS audits, IRS Form 5472 & 1120 pro-forma filings, tax treaty analysis, and non-resident tax structuring handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order US Tax Advisory" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
