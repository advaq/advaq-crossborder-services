import { jsxs, jsx } from "react/jsx-runtime";
import { l as faqs } from "./router-D17Z8zgN.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, AlertTriangle, ArrowRight, Calendar, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "UK Self Assessment Tax Return for Foreign Directors: Do You Need to File?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An essential HMRC tax guide for non-UK resident company directors on statutory filing criteria, Personal UTR numbers, Form SA109 non-residence claims, and 31 January deadlines." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Tax Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "HMRC SA100 & SA109 Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Self Assessment Rules at a Glance" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "No Automatic Obligation:" }),
            " Simply being a director of a UK LTD does NOT require a UK Self Assessment tax return if you reside abroad with zero UK taxable income."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Filing Triggers:" }),
            " You MUST file if you draw a UK salary, receive untaxed UK income, or are issued a formal Notice to File by HMRC."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Form SA109 (Residence Page):" }),
            " Non-resident directors who file must include Form SA109 to formally claim non-resident tax status under the Statutory Residence Test (SRT)."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Strict 31 January Deadline:" }),
            " Online Self Assessment filings and tax payments are due by 31 January following the end of the tax year."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#filing-criteria", className: "hover:text-gold-600 underline", children: "1. HMRC Statutory Criteria: Do You Need to File?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#company-utr-vs-personal-utr", className: "hover:text-gold-600 underline", children: "2. Company UTR vs Personal UTR: Understanding the Difference" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#sa109-residence-claim", className: "hover:text-gold-600 underline", children: "3. Form SA109: Claiming Non-Resident Tax Status" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#srt-test", className: "hover:text-gold-600 underline", children: "4. The HMRC Statutory Residence Test (SRT)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#deadlines-and-penalties", className: "hover:text-gold-600 underline", children: "5. Deadlines & Late Filing Penalties (£100 Fine)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "filing-criteria", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. HMRC Statutory Criteria: Do You Need to File?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Historically, HMRC required all company directors to register for Self Assessment. However, HMRC updated its official manual to clarify that ",
          /* @__PURE__ */ jsx("strong", { children: "non-resident directors are only required to file a Self Assessment tax return if they have UK taxable income" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-red-600 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "You MUST File If You:" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1.5 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "Receive UK salary via UK PAYE payroll." }),
              /* @__PURE__ */ jsx("li", { children: "Receive UK rental income from property." }),
              /* @__PURE__ */ jsx("li", { children: "Have taxable UK capital gains." }),
              /* @__PURE__ */ jsx("li", { children: "Receive an explicit Notice to File (Form SA316) from HMRC." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-emerald-600 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "You DO NOT Need to File If:" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1.5 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "You live 100% abroad and perform no work in the UK." }),
              /* @__PURE__ */ jsx("li", { children: "You only take non-taxable foreign dividends." }),
              /* @__PURE__ */ jsx("li", { children: "You have no UK-sourced income." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "company-utr-vs-personal-utr", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Company UTR vs Personal UTR: Understanding the Difference" }),
        /* @__PURE__ */ jsx("p", { children: "Overseas founders often confuse their company's tax number with their personal tax number:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-4 rounded-xl bg-white text-sm", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-900 block text-base mb-1", children: "Company UTR (10 Digits)" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Issued to the corporate entity for Corporation Tax (Form CT600). Belongs to the company." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-4 rounded-xl bg-white text-sm", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-900 block text-base mb-1", children: "Personal UTR (10 Digits)" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Issued to an individual human being for Self Assessment personal income tax (Form SA100). Belongs to the director personally." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "sa109-residence-claim", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Form SA109: Claiming Non-Resident Tax Status" }),
        /* @__PURE__ */ jsx("p", { children: "If a foreign director is required to submit a UK Self Assessment tax return, simply completing the standard SA100 main form is insufficient." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "You must file supplementary ",
          /* @__PURE__ */ jsx("strong", { children: "Form SA109 (Residence, Remittance Basis etc.)" }),
          " to formally notify HMRC of your non-resident status and claim relief under double taxation treaties."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 italic", children: "* Note: HMRC's basic online portal does not support Form SA109 electronic filing. You must use commercial tax software (such as ADVAQ Tax filing platform) or third-party filing services." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "HMRC PERSONAL TAX SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "File Your UK Self Assessment & Form SA109" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares and submits individual UK Self Assessment tax returns, registers Personal UTR numbers, and files Form SA109 non-residence claims for foreign directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/self-assessment", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Self Assessment Tax Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "srt-test", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. The HMRC Statutory Residence Test (SRT)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Your UK tax residence status is determined objectively using the ",
          /* @__PURE__ */ jsx("strong", { children: "Statutory Residence Test (SRT)" }),
          " introduced in Finance Act 2013."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "You are classified as an ",
          /* @__PURE__ */ jsx("strong", { children: "Automatic Overseas Resident" }),
          " if you spend fewer than 16 days in the UK during the tax year (or fewer than 46 days if you have not been a UK resident in the previous 3 tax years)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "deadlines-and-penalties", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Deadlines & Late Filing Penalties (£100 Fine)" }),
        /* @__PURE__ */ jsx("p", { children: "If HMRC issues a Notice to File, respect the statutory timeline:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-off-white p-4 rounded-xl border border-border text-sm", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "text-gold-500 shrink-0 mt-0.5", size: 18 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "31 October:" }),
              " Paper tax return deadline (if filing by post)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-off-white p-4 rounded-xl border border-border text-sm", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "text-gold-500 shrink-0 mt-0.5", size: 18 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "31 January:" }),
              " Online tax return deadline and tax payment due date."
            ] })
          ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "HMRC SELF ASSESSMENT TAX SERVICES" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "File Your UK Self Assessment with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Personal UTR registration, Form SA100 & SA109 non-resident tax filings, and double taxation treaty claims." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/self-assessment", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Self Assessment Tax Return" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
