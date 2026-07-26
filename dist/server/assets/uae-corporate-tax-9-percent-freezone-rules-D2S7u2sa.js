import { jsxs, jsx } from "react/jsx-runtime";
import { y as faqs } from "./router-DZ5LLfdT.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An in-depth Federal Tax Authority (FTA) compliance guide for business owners on UAE Corporate Tax rates, AED 375,000 tax-free thresholds, Qualifying Freezone Entity rules, and Small Business Relief elections." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ UAE Tax Advisory" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "9 Min Read · Published July 2026" })
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
        /* @__PURE__ */ jsx("span", { children: "UAE Corporate Tax Essentials" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "0% Tax Threshold:" }),
            " Net business profits up to AED 375,000 (~$102,000 USD) are taxed at 0%."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "9% Standard Tax Rate:" }),
            " Net taxable profits exceeding AED 375,000 are taxed at 9%."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Freezone 0% Qualifying Income:" }),
            " Freezone entities can maintain 0% tax on qualifying cross-border and inter-freezone trade."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Small Business Relief (SBR):" }),
            " Businesses with under AED 3,000,000 annual revenue pay $0 corporate tax."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tax-overview", className: "hover:text-gold-600 underline", children: "1. UAE Federal Corporate Tax Framework Overview" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#freezone-qfzp", className: "hover:text-gold-600 underline", children: "2. Qualifying Freezone Person (QFZP) 0% Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#small-business-relief", className: "hover:text-gold-600 underline", children: "3. Small Business Relief (SBR) for Businesses Under AED 3M" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fta-registration", className: "hover:text-gold-600 underline", children: "4. Mandatory FTA Tax Registration & AED 10,000 Late Fine" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#deductions-bookkeeping", className: "hover:text-gold-600 underline", children: "5. Deductible Expenses & Audited Financial Statement Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "tax-overview", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. UAE Federal Corporate Tax Framework Overview" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Effective for financial years starting on or after June 1, 2023, the UAE Ministry of Finance enacted a modern ",
          /* @__PURE__ */ jsx("strong", { children: "9% Corporate Tax regime" }),
          " under Federal Decree-Law No. 47 of 2022."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Designed to align the UAE with international tax transparency standards (OECD BEPS IF), the law maintains a zero-tax environment for small businesses and qualifying freezone entities while taxing large commercial enterprises fairly." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "freezone-qfzp", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Qualifying Freezone Person (QFZP) 0% Rules" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To maintain a ",
          /* @__PURE__ */ jsx("strong", { children: "0% Corporate Tax rate" }),
          " on Qualifying Income under Cabinet Decision No. 55 of 2023, a Freezone company must satisfy five criteria:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Derive income from Qualifying Activities (e.g. software development, headquarter services, holding shares, re-export trading)." }),
          /* @__PURE__ */ jsx("li", { children: "Maintain adequate physical substance in the UAE Freezone." }),
          /* @__PURE__ */ jsx("li", { children: "Comply with arm's-length transfer pricing rules under Section 34." }),
          /* @__PURE__ */ jsx("li", { children: "Prepare audited financial statements." }),
          /* @__PURE__ */ jsx("li", { children: "Derive non-qualifying revenue that does not exceed the De Minimis threshold (5% of total revenue or AED 5,000,000)." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UAE CORPORATE TAX ADVISORY" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Register & File UAE Corporate Tax with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ conducts QFZP eligibility assessments, registers your business with the FTA, files Small Business Relief elections, and prepares corporate tax returns." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Corporate Tax Registration ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "small-business-relief", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Small Business Relief (SBR) for Businesses Under AED 3M" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Ministerial Decision No. 73 of 2023, resident taxable entities with gross annual revenue under ",
          /* @__PURE__ */ jsx("strong", { children: "AED 3,000,000" }),
          " in current and previous tax periods can elect to claim Small Business Relief."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Claiming SBR means the entity pays $0 corporate tax and is exempt from complex transfer pricing documentation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "fta-registration", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Mandatory FTA Tax Registration & AED 10,000 Late Fine" }),
        /* @__PURE__ */ jsx("p", { children: "Every UAE business entity is legally required to register for Corporate Tax on the EmaraTax portal." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The FTA enforces a strict ",
          /* @__PURE__ */ jsx("strong", { children: "AED 10,000 administrative penalty" }),
          " on companies that fail to submit their registration within state-mandated timelines."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "deductions-bookkeeping", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Deductible Expenses & Audited Financial Statement Rules" }),
        /* @__PURE__ */ jsx("p", { children: "Standard business expenses incurred wholly and exclusively for business purposes (salaries, office leases, marketing, software subscriptions) are deductible from taxable revenue. Entertainment expenses are 50% deductible." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "faqs", className: "pt-8 border-t border-border", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl bg-white overflow-hidden transition-all", children: [
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
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "EmaraTax registration, QFZP 0% qualification audits, Small Business Relief filings, and corporate tax return preparation." }),
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
