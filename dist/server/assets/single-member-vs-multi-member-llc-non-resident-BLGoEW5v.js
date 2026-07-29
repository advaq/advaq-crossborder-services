import { jsxs, jsx } from "react/jsx-runtime";
import { G as faqs } from "./router-D0x5mnlO.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Single-Member LLC vs Multi-Member LLC for Non-US Residents: Tax & Legal Differences" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An essential legal and IRS tax comparison masterclass for international founders on Disregarded Entity rules, Form 5472 vs Form 1065 filings, Schedule K-1s, Operating Agreements, and liability safeguards." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Tax Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "15 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "IRS Code Section 6038A & Treasury Reg § 301.7701-3" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Structure Comparison Key Takeaways" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Single-Member LLC (1 Owner)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Treated as a ",
            /* @__PURE__ */ jsx("strong", { children: "Disregarded Entity" }),
            " by IRS. Simpler compliance. Mandatory annual ",
            /* @__PURE__ */ jsx("strong", { children: "Form 5472 + Form 1120" }),
            " filing by April 15 ($25,000 penalty for non-filing)."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Multi-Member LLC (2+ Owners)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Treated as a ",
            /* @__PURE__ */ jsx("strong", { children: "Partnership" }),
            " by IRS. Requires filing ",
            /* @__PURE__ */ jsx("strong", { children: "Form 1065" }),
            " and issuing Schedule K-1s by March 15. Requires foreign partner ITINs & Section 1446 withholding."
          ] })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#irs-classification", className: "hover:text-gold-600 underline", children: "1. IRS Tax Classifications Explained (Check-the-Box)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#single-member-taxation", className: "hover:text-gold-600 underline", children: "2. Single-Member LLC Tax Rules (Disregarded Entity)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#multi-member-taxation", className: "hover:text-gold-600 underline", children: "3. Multi-Member LLC Tax Rules (Partnership Return)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-matrix", className: "hover:text-gold-600 underline", children: "4. Comprehensive Structure Comparison Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#legal-protection", className: "hover:text-gold-600 underline", children: "5. Liability Protection & Operating Agreement Differences" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#advaq-solution", className: "hover:text-gold-600 underline", children: "6. ADVAQ IRS Compliance & Setup Support" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "irs-classification", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. IRS Tax Classifications Explained (Check-the-Box)" }),
        /* @__PURE__ */ jsx("p", { children: "When a non-resident foreign entrepreneur forms a United States LLC, the IRS does not recognize an LLC as a distinct tax category by default." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under IRS ",
          /* @__PURE__ */ jsx("strong", { children: '"Check-the-Box" Treasury Regulations (26 CFR § 301.7701-3)' }),
          ", the IRS automatically assigns tax status based on the number of members:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Single-Member LLC (1 Owner):" }),
              " Classified by default as a ",
              /* @__PURE__ */ jsx("em", { children: "Disregarded Entity" }),
              " (pass-through entity)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Multi-Member LLC (2+ Owners):" }),
              " Classified by default as a ",
              /* @__PURE__ */ jsx("em", { children: "Partnership" }),
              " for US tax purposes."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "single-member-taxation", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Single-Member LLC Tax Rules (Disregarded Entity)" }),
        /* @__PURE__ */ jsx("p", { children: "For a non-resident alien individual owning 100% of a Single-Member LLC:" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The company's income passes directly to the foreign owner. If the LLC has no physical US presence, zero US employees, and no US trade or business (ETBUS), foreign-sourced active sales revenue is subject to ",
          /* @__PURE__ */ jsx("strong", { children: "0% US federal income tax" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "bg-navy-950 text-gold-500 p-4 rounded-xl font-mono text-xs my-4 border border-gold-500/20", children: "MANDATORY REPORTING: Foreign-owned single-member LLCs must file IRS Form 5472 and Form 1120 pro-forma annually by April 15 to report transactions between the LLC and its foreign owner." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "multi-member-taxation", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Multi-Member LLC Tax Rules (Partnership Return)" }),
        /* @__PURE__ */ jsx("p", { children: "When two or more co-founders (such as business partners) own a US LLC, IRS tax compliance becomes significantly more complex:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "IRS Form 1065 Filing:" }),
              " The LLC must file an annual Partnership Income Return by March 15."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Schedule K-1 Distributions:" }),
              " The LLC must issue Schedule K-1 forms to each partner detailing their share of profits."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Section 1446 Withholding:" }),
              " The LLC must withhold taxes on effectively connected income allocated to foreign partners via Forms 8804 and 8805."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US IRS TAX FILING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "File Form 5472 or Form 1065 with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares annual IRS Form 5472, Form 1120 pro-forma, Form 1065 Partnership returns, and foreign member K-1s for non-resident US LLC owners." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore US Tax Filing Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Comprehensive Structure Comparison Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of SMLLC vs MMLLC:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Comparison Criteria" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Single-Member LLC (1 Owner)" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Multi-Member LLC (2+ Owners)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "IRS Tax Status" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900 font-bold", children: "Disregarded Entity" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900 font-bold", children: "Partnership" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Primary IRS Annual Filing Form" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Form 5472 + Pro-Forma Form 1120" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900 font-bold", children: "Form 1065 + Schedule K-1s" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "IRS Annual Filing Deadline" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "April 15" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "March 15" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Late Filing Penalty Risk" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "$25,000 automatic penalty" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "$220 / partner / month" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Foreign Partner ITIN Requirement" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Not required for Form 5472" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900 font-bold", children: "Required for 1040-NR returns" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "legal-protection", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Liability Protection & Operating Agreement Differences" }),
        /* @__PURE__ */ jsx("p", { children: "Both Single-Member and Multi-Member LLCs offer full corporate limited liability protection." }),
        /* @__PURE__ */ jsx("p", { children: "However, Multi-Member LLCs benefit from stronger charging order protections in certain states, preventing a single partner's personal creditor from foreclosing on company assets." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "advaq-solution", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. ADVAQ IRS Compliance & Setup Support" }),
        /* @__PURE__ */ jsx("p", { children: "ADVAQ prepares annual IRS Form 5472 filings for single-member LLCs, Form 1065 partnership returns for multi-member LLCs, ITIN applications via W-7, and custom multi-partner Operating Agreements." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US IRS COMPLIANCE SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "File Your US LLC Tax Return with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Form 5472 pro-forma 1120 filings for single-member LLCs, and Form 1065 partnership filings for multi-member LLCs handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order IRS Tax Filing Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
