import { jsxs, jsx } from "react/jsx-runtime";
import { l as faqs } from "./router-CAPYaiJ8.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, Briefcase, Building2, Globe2, ArrowRight, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "UK Business Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "UK VAT Registration Threshold & Rules for Non-UK Resident Businesses" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive 2026 HMRC VAT masterclass explaining the £90,000 threshold, Non-Established Taxable Person (NETP) £0 rules, input VAT reclaims, and Making Tax Digital (MTD) compliance." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ UK Corporate Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "22 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "HMRC VAT & MTD Official Compliance Guide" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "VAT Threshold Rules at a Glance (2026)" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: "Understanding HMRC VAT thresholds for UK incorporated entities versus foreign entities:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "UK Limited Company (UK Established)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Enjoys the full ",
            /* @__PURE__ */ jsx("strong", { children: "£90,000 rolling 12-month VAT threshold" }),
            " for domestic UK sales. Registration is optional until turnover hits £90,000."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Non-UK Entity (NETP - Foreign Company)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Subject to a ",
            /* @__PURE__ */ jsx("strong", { children: "£0 VAT threshold" }),
            ". Must register for UK VAT immediately upon making their very first UK taxable sale."
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#threshold-explained", className: "hover:text-gold-600 underline", children: "1. UK VAT Registration Threshold Explained (£90,000 Limit)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#netp-rules", className: "hover:text-gold-600 underline", children: "2. UK LTD vs Foreign Entity: The NETP £0 Rule" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#voluntary-registration", className: "hover:text-gold-600 underline", children: "3. Benefits of Voluntary UK VAT Registration Below £90k" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#vat-matrix", className: "hover:text-gold-600 underline", children: "4. Comprehensive UK VAT Rates & Threshold Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#vat-rates", className: "hover:text-gold-600 underline", children: "5. UK VAT Rates: 20% Standard, 5% Reduced & 0% Zero-Rated" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "6. 6 Critical Common VAT Mistakes Non-Residents Must Avoid" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#mtd-compliance", className: "hover:text-gold-600 underline", children: "7. HMRC Making Tax Digital (MTD) Quarterly Filing Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "threshold-explained", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. UK VAT Registration Threshold Explained (£90,000 Limit)" }),
        /* @__PURE__ */ jsx("p", { children: "Value Added Tax (VAT) is a consumption tax levied on goods and services sold inside the United Kingdom." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For UK-established corporate entities, HM Revenue & Customs (HMRC) sets mandatory VAT registration based on a ",
          /* @__PURE__ */ jsx("strong", { children: "rolling 12-month taxable turnover threshold of £90,000" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "You must register for UK VAT if:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-700 my-4 pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0", size: 16 }),
            " Your total taxable UK turnover in any rolling 12-month period exceeds £90,000."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0", size: 16 }),
            " You expect your taxable turnover to exceed £90,000 in the next 30 days alone."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Scenario: Voluntary VAT Registration"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Consider Zayn, a software founder in Pakistan operating a UK LTD. Zayn's agency generates £60,000 in annual turnover—well below the mandatory £90,000 threshold. However, Zayn voluntarily registers for UK VAT to reclaim 20% VAT (£1,400) paid on expensive UK server infrastructure and London virtual office fees." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "netp-rules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. UK LTD vs Foreign Entity: The NETP £0 Rule" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A critical distinction exists under UK VAT law between an overseas entrepreneur trading via a ",
          /* @__PURE__ */ jsx("strong", { children: "UK Limited Company" }),
          " versus trading directly through an ",
          /* @__PURE__ */ jsx("strong", { children: "unincorporated foreign business" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-emerald-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Building2, { className: "text-emerald-600", size: 18 }),
              "UK LTD Company (UK Established)"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "Because your UK LTD is incorporated at Companies House with a UK registered address, HMRC grants it ",
              /* @__PURE__ */ jsx("strong", { children: "UK-established tax status" }),
              " with the full ",
              /* @__PURE__ */ jsx("strong", { children: "£90,000 threshold allowance" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-rose-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Globe2, { className: "text-rose-600", size: 18 }),
              "NETP Foreign Business (£0 Threshold)"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "If you sell goods directly into the UK from an overseas entity (e.g. US LLC or Pakistan Sole Proprietorship), you are classified as a ",
              /* @__PURE__ */ jsx("strong", { children: "Non-Established Taxable Person (NETP)" }),
              " with a ",
              /* @__PURE__ */ jsx("strong", { children: "£0 VAT threshold" }),
              "."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "voluntary-registration", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Benefits of Voluntary UK VAT Registration Below £90k" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Even if your UK LTD company generates less than £90,000 in turnover, ",
          /* @__PURE__ */ jsx("strong", { children: "voluntary VAT registration" }),
          " offers major commercial advantages:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-600", size: 18 }),
              "Reclaim UK Input VAT Expenses"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Recover 20% VAT paid on UK business expenses, software subscriptions, equipment, and London virtual office services." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-600", size: 18 }),
              "Corporate Credibility & GB VAT Number"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Displaying an official UK VAT Registration Number (`GB123456789`) on client invoices builds immense trust with UK corporate clients." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "vat-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Comprehensive UK VAT Rates & Threshold Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed overview of UK VAT thresholds and rates based on entity classification:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Entity & Transaction Type" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "VAT Registration Threshold" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Applicable VAT Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Input VAT Reclaim" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "UK LTD (Domestic UK Sales)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "£90,000 Rolling 12-Month Limit" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "20% Standard Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Eligible (Full Input Reclaim)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Foreign Entity (NETP Sales to UK)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£0 (Mandatory Immediate Reg)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "20% Standard Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Eligible" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "UK LTD Export B2B Services" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Excluded from UK Threshold" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% Zero-Rated" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Eligible (Full Reclaim)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "UK Domestic Books & Childrenswear" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Counts Towards £90k Limit" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% Zero-Rated" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Eligible" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "HMRC VAT REGISTRATION & FILING" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get Your Official UK VAT Number (GB Prefix)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ submits complete HMRC VAT registration applications and handles Making Tax Digital (MTD) quarterly filing for non-resident directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/vat-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore UK VAT Registration Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "vat-rates", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. UK VAT Rates: 20% Standard, 5% Reduced & 0% Zero-Rated" }),
        /* @__PURE__ */ jsx("p", { children: "When issuing VAT invoices to clients, apply the correct UK statutory rate:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-2xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold-600 font-bold text-2xl block", children: "20%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block mt-1 text-sm", children: "Standard Rate" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Applies to most UK B2B services, goods, and digital software products." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-2xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-navy-700 font-bold text-2xl block", children: "5%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block mt-1 text-sm", children: "Reduced Rate" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Applies to domestic energy, heating, and specialized items." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-2xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-emerald-600 font-bold text-2xl block", children: "0%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block mt-1 text-sm", children: "Zero-Rated" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Applies to exported services, books, and basic food items." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 6 Critical Common VAT Mistakes Non-Residents Must Avoid" }),
        /* @__PURE__ */ jsx("p", { children: "Avoid these six frequent VAT compliance mistakes:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Confusing Calendar Year with Rolling 12-Month Turnover"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "HMRC calculates the £90,000 threshold on a rolling 12-month basis, not a fixed calendar year." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Charging 20% VAT Prior to Receiving GB VAT Number"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Charging VAT on invoices before receiving your official GB VAT registration number from HMRC is strictly illegal." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "mtd-compliance", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. HMRC Making Tax Digital (MTD) Quarterly Filing Rules" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "HMRC mandates that all VAT-registered businesses submit their quarterly VAT returns through ",
          /* @__PURE__ */ jsx("strong", { children: "Making Tax Digital (MTD)" }),
          " compatible software via digital API links."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "ADVAQ manages MTD compliance by maintaining digital bookkeeping and submitting quarterly MTD VAT returns directly to HMRC on your behalf." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "HMRC VAT REGISTRATION & COMPLIANCE" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Register Your UK Company for VAT with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "HMRC VAT number registration, MTD setup, and quarterly VAT return preparation for non-resident directors." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/vat-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK VAT Registration" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
