import { jsxs, jsx } from "react/jsx-runtime";
import { F as faqs } from "./router-D17Z8zgN.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, ArrowRight, FileText, Users, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An essential IRS tax and legal comparison for international founders on Disregarded Entity rules, Form 5472 vs Form 1065 filings, Operating Agreements, and liability safeguards." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Tax Advisory" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "IRS Code Section 6038A & Partnership Rules" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Structure Key Comparison Summary" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Single-Member LLC (1 Owner)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Treated as a ",
            /* @__PURE__ */ jsx("strong", { children: "Disregarded Entity" }),
            " by IRS. Simpler compliance. Requires annual ",
            /* @__PURE__ */ jsx("strong", { children: "Form 5472 + Form 1120" }),
            " filing by April 15."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Multi-Member LLC (2+ Owners)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Treated as a ",
            /* @__PURE__ */ jsx("strong", { children: "Partnership" }),
            " by IRS. Requires filing ",
            /* @__PURE__ */ jsx("strong", { children: "Form 1065" }),
            " and issuing Schedule K-1s. More complex & costly tax reporting."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#irs-classification", className: "hover:text-gold-600 underline", children: "1. IRS Tax Classifications Explained" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#single-member-taxation", className: "hover:text-gold-600 underline", children: "2. Single-Member LLC Tax Rules (Disregarded Entity)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#multi-member-taxation", className: "hover:text-gold-600 underline", children: "3. Multi-Member LLC Tax Rules (Partnership Return)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#form-5472-vs-1065", className: "hover:text-gold-600 underline", children: "4. Reporting Comparison: Form 5472 vs Form 1065" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#legal-protection", className: "hover:text-gold-600 underline", children: "5. Liability Protection & Operating Agreement Differences" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "irs-classification", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. IRS Tax Classifications Explained" }),
        /* @__PURE__ */ jsx("p", { children: "When a non-resident foreign entrepreneur forms a United States LLC, the IRS does not view an LLC as a distinct tax category by default." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Instead, the IRS uses ",
          /* @__PURE__ */ jsx("strong", { children: '"Check-the-Box" regulations' }),
          " to classify the LLC based on its number of members:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "1 Member:" }),
            " Default tax status is ",
            /* @__PURE__ */ jsx("em", { children: "Disregarded Entity" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "2+ Members:" }),
            " Default tax status is ",
            /* @__PURE__ */ jsx("em", { children: "Partnership" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "single-member-taxation", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Single-Member LLC Tax Rules (Disregarded Entity)" }),
        /* @__PURE__ */ jsx("p", { children: "For a non-resident alien owning 100% of a Single-Member LLC:" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If the LLC has no US physical presence, zero US employees, and no US effectively connected income (ETBUS), the LLC's profits pass through directly to the foreign owner with ",
          /* @__PURE__ */ jsx("strong", { children: "0% US federal tax liability" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "multi-member-taxation", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Multi-Member LLC Tax Rules (Partnership Return)" }),
        /* @__PURE__ */ jsx("p", { children: "When 2 or more co-founders (such as business partners) own a US LLC, IRS rules become significantly more involved." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The LLC must file an annual informational partnership return on ",
          /* @__PURE__ */ jsx("strong", { children: "Form 1065" }),
          " by March 15 and prepare a ",
          /* @__PURE__ */ jsx("strong", { children: "Schedule K-1" }),
          " for every partner detailing their allocated share of profits and losses."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US IRS TAX FILING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "File Form 5472 or Form 1065 with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares annual IRS Form 5472, Form 1120 pro-forma, Form 1065 Partnership returns, and foreign member K-1s for non-resident US LLC owners." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore US Tax Filing Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "form-5472-vs-1065", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Reporting Comparison: Form 5472 vs Form 1065" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-gold-500 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(FileText, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Single-Member (Form 5472 + 1120)" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1.5 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "Due Date: April 15 following the tax year." }),
              /* @__PURE__ */ jsx("li", { children: "Reports reportable transactions between foreign owner and LLC." }),
              /* @__PURE__ */ jsx("li", { children: "Late penalty: $25,000 per unfiled form." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-navy-700 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Users, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Multi-Member (Form 1065 + K-1)" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1.5 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "Due Date: March 15 following the tax year." }),
              /* @__PURE__ */ jsx("li", { children: "Reports income, deductions, and partner profit splits." }),
              /* @__PURE__ */ jsx("li", { children: "Requires individual non-resident 1040-NR tax filings." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "legal-protection", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Liability Protection & Operating Agreement Differences" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Both Single-Member and Multi-Member LLCs offer full corporate limited liability protection. However, a Multi-Member LLC ",
          /* @__PURE__ */ jsx("strong", { children: "must" }),
          " have a comprehensive Operating Agreement detailing voting percentages, profit distributions, and dispute resolution mechanisms."
        ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US IRS COMPLIANCE SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "File Your US LLC Tax Return with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Form 5472 pro-forma 1120 filings for single-member LLCs, and Form 1065 partnership filings for multi-member LLCs." }),
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
