import { jsxs, jsx } from "react/jsx-runtime";
import { u as faqs } from "./router-GP5y7m1q.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Receipt, Percent, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "UAE VAT Registration Rules (5%): Mandatory Thresholds & Filing Deadlines" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An in-depth Federal Tax Authority (FTA) compliance masterclass for business owners on 5% Value Added Tax registration thresholds, zero-rated service export exemptions, EmaraTax filings, and administrative penalty avoidance under Federal Decree-Law No. 8 of 2017." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ UAE Tax Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "15 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Federal Decree-Law No. 8 of 2017 Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "UAE VAT Key Threshold Essentials" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Mandatory Threshold (AED 375,000)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Registration required when taxable sales/imports exceed AED 375,000 (~$102k USD) in a rolling 12-month period." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Voluntary Threshold (AED 187,500)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Optional registration permitted when taxable sales or business expenses exceed AED 187,500 (~$51k USD)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "0% Zero-Rated Exports" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Software & IT exports to foreign overseas clients qualify for 0% VAT, but count toward mandatory registration thresholds." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "AED 10,000 Late Fine" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Missing mandatory registration deadlines triggers an automatic AED 10,000 administrative penalty from the FTA." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#vat-overview", className: "hover:text-gold-600 underline", children: "1. Overview of the UAE 5% Value Added Tax System" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#registration-thresholds", className: "hover:text-gold-600 underline", children: "2. Mandatory (AED 375k) vs Voluntary (AED 187.5k) Thresholds" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#vat-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive UAE VAT Treatment Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#zero-rated-exports", className: "hover:text-gold-600 underline", children: "4. Zero-Rated (0%) Exports for IT Consultants & Software Agencies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#emaratax-filing", className: "hover:text-gold-600 underline", children: "5. Quarterly EmaraTax Filing Deadlines & Input VAT Recovery" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fta-penalties", className: "hover:text-gold-600 underline", children: "6. Avoiding FTA Administrative Penalties (AED 10,000 Late Fine)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "vat-overview", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Overview of the UAE 5% Value Added Tax System" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Enacted on January 1, 2018 under ",
          /* @__PURE__ */ jsx("strong", { children: "Federal Decree-Law No. 8 of 2017" }),
          ", the United Arab Emirates introduced a standard ",
          /* @__PURE__ */ jsx("strong", { children: "5% Value Added Tax (VAT)" }),
          " on consumption of goods and commercial services."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Administered directly by the Federal Tax Authority (FTA), VAT compliance requires registered UAE corporate entities to issue compliant tax invoices, collect 5% output VAT on domestic supplies, and file quarterly tax returns on the EmaraTax portal." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "registration-thresholds", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Mandatory (AED 375k) vs Voluntary (AED 187.5k) Thresholds" }),
        /* @__PURE__ */ jsx("p", { children: "The UAE VAT framework establishes two distinct registration thresholds based on a rolling 12-month historical calculation or a 30-day forward-looking projection:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-6 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-600 font-bold text-lg mb-2", children: [
              /* @__PURE__ */ jsx(Receipt, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Mandatory Registration (AED 375,000)" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "A business MUST register within 20 business days of crossing ",
              /* @__PURE__ */ jsx("strong", { children: "AED 375,000" }),
              " (~$102,000 USD) in taxable supplies/imports in the preceding 12 months, or if expected turnover in the next 30 days exceeds AED 375,000."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-6 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-navy-950 font-bold text-lg mb-2", children: [
              /* @__PURE__ */ jsx(Percent, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Voluntary Registration (AED 187,500)" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "A business CAN voluntarily register if taxable supplies or taxable business expenses exceed ",
              /* @__PURE__ */ jsx("strong", { children: "AED 187,500" }),
              " (~$51,000 USD), permitting early recovery of 5% input VAT paid on initial startup setup costs."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UAE VAT REGISTRATION SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Register Your Business for UAE VAT with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages FTA EmaraTax portal registration, VAT Certificate issuance (TRN), input tax recovery, and quarterly return filings." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/vat-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order UAE VAT Registration ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "vat-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive UAE VAT Treatment Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of VAT classifications in the UAE:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Supply Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Applicable VAT Rate %" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Input VAT Recovery Rights" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Contribution to AED 375k Threshold" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Tax Invoice Wording" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Standard Rated Onshore Goods & Services" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "5% Output VAT" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "100% Full Input Recovery" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900 font-bold", children: "Yes (Included in Total)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Standard 5% Tax Invoice" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Zero-Rated Service Exports (Article 31)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% Zero-Rated VAT" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "100% Full Input Recovery" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900 font-bold", children: "Yes (Mandatory Included)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Zero-Rated 0% Tax Invoice" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Exempt Supplies (Bare Land, Local Transport)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900 font-bold", children: "Exempt (0% Charge)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Restricted (No Input Recovery)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "No (Excluded)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Exempt Invoice" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "zero-rated-exports", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Zero-Rated (0%) Exports for IT Consultants & Software Agencies" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Article 31 of the Executive Regulations of Federal Decree-Law No. 8 of 2017, exporting services (software development, SaaS subscriptions, digital marketing, IT consulting) to recipients established outside the UAE qualifies for ",
          /* @__PURE__ */ jsx("strong", { children: "0% Zero-Rated VAT" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "This allows UAE tech companies billing overseas clients in the US, Europe, UK, or Asia to charge 0% VAT on international invoices while remaining legally entitled to claim back 100% of the 5% input VAT paid on local office leases, hardware, and sub-contractor fees." }),
        /* @__PURE__ */ jsx("p", { className: "bg-navy-950 text-gold-500 p-4 rounded-xl font-mono text-xs my-4 border border-gold-500/20", children: "CRITICAL RULE: Zero-rated export revenue MUST be counted when calculating your mandatory AED 375,000 VAT registration threshold! Even if 100% of your sales are exported to overseas clients at 0% VAT, you must register for VAT once global sales cross AED 375,000." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "emaratax-filing", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Quarterly EmaraTax Filing Deadlines & Input VAT Recovery" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Registered corporate entities file quarterly VAT returns (Form VAT201) online via the FTA ",
          /* @__PURE__ */ jsx("strong", { children: "EmaraTax portal" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Tax returns and payment settlements must be submitted by the ",
          /* @__PURE__ */ jsx("strong", { children: "28th day of the month following the end of the tax period" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "During return submission, input VAT paid on commercial operating expenses (office Ejari lease, telecom, equipment purchases, legal fees) is offset against output VAT collected from domestic customers. If input VAT exceeds output VAT (e.g. for exporters charging 0% VAT), the business receives an FTA tax refund or credit carry-forward." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "fta-penalties", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Avoiding FTA Administrative Penalties (AED 10,000 Late Fine)" }),
        /* @__PURE__ */ jsx("p", { children: "The Federal Tax Authority enforces strict administrative fines under Cabinet Decision No. 40 of 2017 for non-compliance:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm pl-2 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "AED 10,000 Late Registration Penalty" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Imposed automatically when a company fails to submit its VAT registration application within 20 business days of crossing the AED 375,000 threshold." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "AED 1,000 Late Return Submission Penalty" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Imposed for failing to submit Form VAT201 by the 28th day deadline (doubles to AED 2,000 upon repeat late filings)." })
          ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "UAE VAT COMPLIANCE SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Manage UAE VAT Registration & Returns" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "EmaraTax portal registration, 0% zero-rated export auditing, quarterly VAT201 returns, and input VAT refund claims handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uae-services/vat-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UAE VAT Registration" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
