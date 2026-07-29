import { jsxs, jsx } from "react/jsx-runtime";
import { z as faqs } from "./router-DoRrh2l-.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, Briefcase, Building2, Percent, FileText, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "UAE Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "UAE Corporate Tax (9%) Guide: Exemption Thresholds & Freezone Qualifying Rules" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An in-depth Federal Tax Authority (FTA) compliance masterclass for business owners on UAE Corporate Tax rates, AED 375,000 tax-free thresholds, Qualifying Freezone Person (QFZP) 0% rules, and Small Business Relief elections under Federal Decree-Law No. 47 of 2022." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ UAE Corporate Tax Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "15 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Federal Decree-Law No. 47 of 2022 Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "UAE Corporate Tax Framework Essentials" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "0% Tax-Free Threshold" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Net business profits up to AED 375,000 (~$102,000 USD) are taxed at 0% for all taxable entities." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "9% Standard Tax Rate" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Net taxable business profits exceeding AED 375,000 are subject to a standard 9% Corporate Tax rate." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Freezone 0% Qualifying Income" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Qualifying Freezone Persons (QFZP) maintain 0% tax on qualifying cross-border and inter-freezone trade." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Small Business Relief (SBR)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Businesses with gross annual revenues under AED 3,000,000 can elect to pay $0 corporate tax." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tax-overview", className: "hover:text-gold-600 underline", children: "1. UAE Federal Corporate Tax Framework Overview" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#freezone-qfzp", className: "hover:text-gold-600 underline", children: "2. Qualifying Freezone Person (QFZP) 0% Tax Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tax-regimes-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive UAE Corporate Tax Regimes Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#small-business-relief", className: "hover:text-gold-600 underline", children: "4. Small Business Relief (SBR) for Businesses Under AED 3M" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fta-registration", className: "hover:text-gold-600 underline", children: "5. Mandatory FTA Tax Registration & AED 10,000 Late Fine" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#deductions-bookkeeping", className: "hover:text-gold-600 underline", children: "6. Taxable Income Calculations & Expense Deductions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "tax-overview", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. UAE Federal Corporate Tax Framework Overview" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Effective for financial years starting on or after June 1, 2023, the UAE Ministry of Finance enacted a modern ",
          /* @__PURE__ */ jsx("strong", { children: "9% Corporate Tax regime" }),
          " under Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Designed to align the UAE with international tax transparency frameworks (specifically OECD BEPS Pillar Two standards), the law maintains an ultra-competitive tax structure featuring a generous tax-free threshold:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "0% Tax Rate:" }),
              " Applies to net taxable business profits up to ",
              /* @__PURE__ */ jsx("strong", { children: "AED 375,000" }),
              " (~$102,000 USD)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "9% Standard Tax Rate:" }),
              " Applies only to net taxable business profits exceeding AED 375,000."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "freezone-qfzp", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Qualifying Freezone Person (QFZP) 0% Tax Rules" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Cabinet Decision No. 55 of 2023 and Ministerial Decision No. 265 of 2023, Freezone companies can maintain a ",
          /* @__PURE__ */ jsx("strong", { children: "0% Corporate Tax rate" }),
          " on Qualifying Income if they achieve ",
          /* @__PURE__ */ jsx("strong", { children: "Qualifying Freezone Person (QFZP)" }),
          " status by satisfying five strict conditions:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
              "1. Deriving Income from Qualifying Activities"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Income derived from transactions with other Freezone entities, or cross-border trade involving qualifying activities (software manufacturing, re-export trading, headquarter services, fund management, and holding company activities)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Building2, { className: "text-gold-600", size: 18 }),
              "2. Maintaining Adequate Economic Substance"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Maintaining physical office space, incurring adequate operating expenditure, and employing qualified full-time personnel within the UAE Freezone." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Percent, { className: "text-gold-600", size: 18 }),
              "3. Complying with De Minimis Revenue Threshold"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Non-qualifying revenue derived from mainland transactions must not exceed 5% of total revenue or AED 5,000,000 (whichever is lower)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileText, { className: "text-gold-600", size: 18 }),
              "4. Audited Financial Statements & Transfer Pricing"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Preparing audited financial statements under IFRS and complying with arm's-length transfer pricing rules under Section 34." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UAE CORPORATE TAX ADVISORY" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Register & File UAE Corporate Tax with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ conducts QFZP eligibility assessments, registers your business with the FTA, files Small Business Relief elections, and prepares corporate tax returns." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Corporate Tax Registration ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "tax-regimes-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive UAE Corporate Tax Regimes Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed comparative analysis of UAE Corporate Tax compliance categories:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Tax Regime Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Gross Annual Revenue Threshold" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Effective Tax Rate %" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Audited Financials Required" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Transfer Pricing Mandate" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Qualifying Freezone Person (QFZP)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Unlimited (De Minimis Rule applies)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% on Qualifying Income" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Mandatory (IFRS Standards)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Mandatory (Arm's-Length)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Small Business Relief (SBR)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Under AED 3,000,000 Revenue" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% Tax Liability" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Optional / Simplified Bookkeeping" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Exempt from TP Dossiers" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Standard Taxable Entity (Mainland / Non-QFZP)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Over AED 375,000 Net Profit" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "9% on Profits > AED 375k" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Mandatory for > AED 50M Revenue" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Mandatory for Related Parties" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "small-business-relief", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Small Business Relief (SBR) for Businesses Under AED 3M" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Ministerial Decision No. 73 of 2023, resident taxable entities (both Mainland and non-QFZP Freezone companies) with gross annual revenues below ",
          /* @__PURE__ */ jsx("strong", { children: "AED 3,000,000" }),
          " ($817,000 USD) in current and previous tax periods ending on or before December 31, 2026, can elect to claim ",
          /* @__PURE__ */ jsx("strong", { children: "Small Business Relief (SBR)" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Claiming Small Business Relief treats the company as having zero taxable income for that tax period, resulting in a ",
          /* @__PURE__ */ jsx("strong", { children: "$0 corporate tax payment" }),
          " and exempting the entity from preparing complex transfer pricing documentation."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "fta-registration", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Mandatory FTA Tax Registration & AED 10,000 Late Fine" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Every legal corporate entity incorporated in the UAE—including 100% foreign-owned Freezone LLCs and Mainland companies—is legally required to register for Corporate Tax on the Federal Tax Authority (FTA) ",
          /* @__PURE__ */ jsx("strong", { children: "EmaraTax portal" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Cabinet Decision No. 10 of 2024, the FTA enforces an automatic administrative penalty of ",
          /* @__PURE__ */ jsx("strong", { children: "AED 10,000" }),
          " ($2,725 USD) on any business entity that fails to submit its Corporate Tax registration application within prescribed deadlines."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "deductions-bookkeeping", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Taxable Income Calculations & Expense Deductions" }),
        /* @__PURE__ */ jsx("p", { children: "Corporate Tax is calculated on net accounting profit prepared in accordance with International Financial Reporting Standards (IFRS)." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Standard business operating expenses incurred wholly and exclusively for business purposes—such as staff salaries, commercial office rentals, cloud server subscriptions, marketing, and professional advisory fees—are ",
          /* @__PURE__ */ jsx("strong", { children: "100% tax-deductible" }),
          ". Client entertainment expenses are 50% deductible."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "UAE CORPORATE TAX SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Ensure 100% Corporate Tax Compliance with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "EmaraTax registration, QFZP 0% qualification audits, Small Business Relief filings, and corporate tax return preparation handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Corporate Tax Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
