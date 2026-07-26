import { jsxs, jsx } from "react/jsx-runtime";
import { k as faqs } from "./router-DZ5LLfdT.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, Building2, Globe2, Check, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive 2026 HMRC VAT guide explaining the £90,000 threshold, Non-Established Taxable Person (NETP) £0 rules, input VAT reclaims, and Making Tax Digital (MTD)." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal & Tax Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "HMRC VAT & MTD Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "VAT Threshold Rules at a Glance (2026)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "UK Limited Company (UK Established)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Enjoys the full ",
            /* @__PURE__ */ jsx("strong", { children: "£90,000 rolling 12-month VAT threshold" }),
            " for domestic UK sales. Registration is optional until turnover hits £90,000."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Non-UK Entity (NETP - Foreign Company)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Subject to a ",
            /* @__PURE__ */ jsx("strong", { children: "£0 VAT threshold" }),
            ". Must register for UK VAT immediately upon making their very first UK taxable sale."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#threshold-explained", className: "hover:text-gold-600 underline", children: "1. UK VAT Registration Threshold Explained (£90,000 Limit)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#netp-rules", className: "hover:text-gold-600 underline", children: "2. UK LTD vs Foreign Entity: The NETP £0 Rule" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#voluntary-registration", className: "hover:text-gold-600 underline", children: "3. Benefits of Voluntary UK VAT Registration Below £90k" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#vat-rates", className: "hover:text-gold-600 underline", children: "4. UK VAT Rates: 20% Standard, 5% Reduced & 0% Zero-Rated" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#mtd-compliance", className: "hover:text-gold-600 underline", children: "5. HMRC Making Tax Digital (MTD) Quarterly Filing Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "threshold-explained", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. UK VAT Registration Threshold Explained (£90,000 Limit)" }),
        /* @__PURE__ */ jsx("p", { children: "Value Added Tax (VAT) is a consumption tax levied on goods and services sold inside the United Kingdom." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For UK-established entities, HM Revenue & Customs (HMRC) sets mandatory VAT registration based on a ",
          /* @__PURE__ */ jsx("strong", { children: "rolling 12-month taxable turnover threshold of £90,000" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "You must register for UK VAT if:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Your total taxable turnover in any rolling 12-month period exceeds £90,000." }),
          /* @__PURE__ */ jsx("li", { children: "You expect your taxable turnover to exceed £90,000 in the next 30 days alone." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "netp-rules", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. UK LTD vs Foreign Entity: The NETP £0 Rule" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A critical distinction exists between an overseas entrepreneur trading via a ",
          /* @__PURE__ */ jsx("strong", { children: "UK Limited Company" }),
          " versus trading directly through an ",
          /* @__PURE__ */ jsx("strong", { children: "unincorporated foreign business" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-emerald-600 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Building2, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "UK LTD Company (UK Established)" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 leading-relaxed", children: [
              "Because your UK LTD is legally incorporated at Companies House with a UK registered address, HMRC grants it ",
              /* @__PURE__ */ jsx("strong", { children: "UK-established tax status" }),
              ". You get the full ",
              /* @__PURE__ */ jsx("strong", { children: "£90,000 threshold allowance" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-red-600 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Globe2, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "NETP Foreign Business (£0 Threshold)" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 leading-relaxed", children: [
              "If you sell goods directly into the UK from a foreign company (e.g. US LLC or Pakistan Sole Proprietorship), you are classified as a ",
              /* @__PURE__ */ jsx("strong", { children: "Non-Established Taxable Person (NETP)" }),
              " with a ",
              /* @__PURE__ */ jsx("strong", { children: "£0 VAT threshold" }),
              "."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "voluntary-registration", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Benefits of Voluntary UK VAT Registration Below £90k" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Even if your UK LTD company generates less than £90,000 in turnover, ",
          /* @__PURE__ */ jsx("strong", { children: "voluntary VAT registration" }),
          " offers major commercial advantages:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-3 my-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-base", children: "Key Advantages of Voluntary VAT Registration:" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Reclaim UK Input VAT:" }),
                " Recover 20% VAT paid on business expenses, software subscriptions, equipment, and legal services."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Corporate Credibility:" }),
                " Displaying a valid UK VAT Number (starting with `GB`) builds immense trust with European and UK corporate clients."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Zero-Rated Exports:" }),
                " If you export B2B services to clients outside the UK, you charge 0% VAT while still claiming back input tax."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "HMRC VAT REGISTRATION & FILING" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get Your Official UK VAT Number (GB Prefix)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ submits complete HMRC VAT registration applications and handles Making Tax Digital (MTD) quarterly filing for non-resident directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/vat-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore UK VAT Registration Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "vat-rates", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. UK VAT Rates: 20% Standard, 5% Reduced & 0% Zero-Rated" }),
        /* @__PURE__ */ jsx("p", { children: "When issuing VAT invoices to clients, apply the correct UK statutory rate:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gold-600 font-bold text-2xl block", children: "20%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-900 block mt-1 text-sm", children: "Standard Rate" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Applies to most UK B2B services, goods, and digital software products." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-navy-700 font-bold text-2xl block", children: "5%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-900 block mt-1 text-sm", children: "Reduced Rate" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Applies to domestic energy, heating, and specialized items." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-emerald-600 font-bold text-2xl block", children: "0%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-900 block mt-1 text-sm", children: "Zero-Rated" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Applies to exported services, books, and basic food items." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "mtd-compliance", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. HMRC Making Tax Digital (MTD) Quarterly Filing Rules" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Since 2022, HMRC mandates that all VAT-registered businesses submit their quarterly VAT returns through ",
          /* @__PURE__ */ jsx("strong", { children: "Making Tax Digital (MTD)" }),
          " compatible software via digital API links."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "ADVAQ manages MTD compliance by maintaining digital bookkeeping and submitting quarterly MTD VAT returns directly to HMRC on your behalf." })
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
