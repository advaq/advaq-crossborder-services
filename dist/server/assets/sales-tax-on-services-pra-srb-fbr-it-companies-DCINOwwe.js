import { jsxs, jsx } from "react/jsx-runtime";
import { L as faqs } from "./router-B1vRwgby.js";
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
          /* @__PURE__ */ jsx("span", { children: "Pakistan Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "FBR Sales Tax on Services: PRA vs SRB vs KPRA vs BRA Rules for Tech Agencies" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A practical provincial tax compliance guide for Pakistani software houses, digital marketing agencies, and IT consultants comparing Punjab Revenue Authority (PRA), Sindh Revenue Board (SRB), KPRA, and FBR sales tax rules." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Provincial Tax Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Provincial Sales Tax Acts Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Provincial Tax Authorities Summary" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "PRA (Punjab) & SRB (Sindh)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Regulate services in Punjab & Sindh. IT export services to foreign clients enjoy 0% zero-rating or exemption. Domestic IT services taxed at 5%–13%." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "KPRA (KPK) & FBR (Islamabad)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "KPRA regulates KPK; FBR handles ICT Islamabad. Monthly return filings due by 15th–18th of every month." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#provincial-breakdown", className: "hover:text-gold-600 underline", children: "1. The 5 Sales Tax Authorities in Pakistan Explained" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#it-export-zero-rating", className: "hover:text-gold-600 underline", children: "2. Zero-Rating (0%) Exemption for IT Export Proceeds" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#domestic-sales-rates", className: "hover:text-gold-600 underline", children: "3. Domestic IT Sales Tax Rates (PRA, SRB, KPRA, FBR)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#monthly-filing-workflow", className: "hover:text-gold-600 underline", children: "4. Monthly Sales Tax Return Filing Workflow" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#withholding-rules", className: "hover:text-gold-600 underline", children: "5. Sales Tax Withholding (STWH) Rules for Corporate Clients" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "provincial-breakdown", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. The 5 Sales Tax Authorities in Pakistan Explained" }),
        /* @__PURE__ */ jsx("p", { children: "Following the 18th Constitutional Amendment, taxation of services was devolved to provincial governments:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "PRA:" }),
            " Punjab Revenue Authority (Lahore)"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "SRB:" }),
            " Sindh Revenue Board (Karachi)"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "KPRA:" }),
            " Khyber Pakhtunkhwa Revenue Authority (Peshawar)"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "BRA:" }),
            " Balochistan Revenue Authority (Quetta)"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "FBR:" }),
            " Federal Board of Revenue (Islamabad Capital Territory)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "it-export-zero-rating", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Zero-Rating (0%) Exemption for IT Export Proceeds" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "All provincial tax laws classify IT export services (software development, SaaS, digital consulting) provided to foreign clients as ",
          /* @__PURE__ */ jsx("strong", { children: "Zero-Rated (0%) or Exempt" }),
          ", allowing IT exporters to operate tax-free locally while claiming back input sales tax paid on office expenses."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "PROVINCIAL SALES TAX ADVISORY" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Register for PRA / SRB / KPRA Sales Tax with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages sales tax registration with PRA, SRB, KPRA, and FBR, files monthly sales tax returns, and secures 0% IT export exemptions." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/sales-tax-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Sales Tax Registration ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "domestic-sales-rates", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Domestic IT Sales Tax Rates (PRA, SRB, KPRA, FBR)" }),
        /* @__PURE__ */ jsx("p", { children: "For domestic services delivered to clients inside Pakistan, PRA levies 5% to 16%, SRB levies 13%, KPRA levies 5% to 15%, and FBR ICT levies 15%." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "monthly-filing-workflow", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Monthly Sales Tax Return Filing Workflow" }),
        /* @__PURE__ */ jsx("p", { children: "Registered entities submit monthly sales tax returns on provincial portals by the 15th (for tax payment) and 18th (for final return submission)." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "PAKISTAN PROVINCIAL TAX SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Manage Provincial Sales Tax Compliance" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "PRA, SRB, KPRA, and FBR sales tax registration, 0% IT export zero-rated auditing, monthly returns, and input tax recovery." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/sales-tax-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Sales Tax Registration Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
