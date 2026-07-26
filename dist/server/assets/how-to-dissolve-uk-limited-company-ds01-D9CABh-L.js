import { jsxs, jsx } from "react/jsx-runtime";
import { ai as faqs } from "./router-B1vRwgby.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, XCircle, FileCheck, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "How to Strike Off & Dissolve a UK Limited Company Legally (DS01 Process)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive legal guide for foreign directors on voluntary company dissolution, Form DS01 filing, HMRC final Corporation Tax clearances, Gazette public notices, and asset forfeiture rules." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Companies Act 2006 Section 1003 Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "DS01 Dissolution Essentials" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Eligibility Criteria:" }),
            " Company must NOT have traded, sold stock, or changed name for at least 3 months prior to application."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Form DS01 Filing:" }),
            " Official electronic strike-off application submitted to Companies House with £33 fee."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "WARNING (Bona Vacantia):" }),
            " Empty all company bank accounts before filing. Any remaining money automatically becomes Crown property upon dissolution."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "HMRC Final Clearance:" }),
            " File final CT600 Corporation Tax return and close PAYE/VAT schemes to prevent HMRC strike-off objections."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#eligibility", className: "hover:text-gold-600 underline", children: "1. Legal Eligibility Rules for Striking Off (Section 1004)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#pre-dissolution-checklist", className: "hover:text-gold-600 underline", children: "2. Pre-Dissolution Checklist & Bank Account Closure" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#hmrc-tax-clearance", className: "hover:text-gold-600 underline", children: "3. HMRC Final Tax Returns & Closing PAYE/VAT" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ds01-submission", className: "hover:text-gold-600 underline", children: "4. Submitting Form DS01 & Gazetting Process" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bona-vacantia", className: "hover:text-gold-600 underline", children: "5. The Bona Vacantia Risk: Loss of Uncollected Funds" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "eligibility", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Legal Eligibility Rules for Striking Off (Section 1004)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Section 1004 of the ",
          /* @__PURE__ */ jsx("em", { children: "Companies Act 2006" }),
          ", a private UK Limited Company can only apply for voluntary strike-off using Form DS01 if it meets strict legal conditions:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-emerald-600 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "You CAN File Form DS01 If:" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1.5 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "The company has not traded or carried on business for 3 months." }),
              /* @__PURE__ */ jsx("li", { children: "The company has not changed its legal name in the last 3 months." }),
              /* @__PURE__ */ jsx("li", { children: "The company is solvent and has no outstanding debts to suppliers or HMRC." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-red-600 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(XCircle, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "You CANNOT File Form DS01 If:" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-600 space-y-1.5 list-disc list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "The company is insolvent (must use liquidation process)." }),
              /* @__PURE__ */ jsx("li", { children: "The company is subject to active legal proceedings." }),
              /* @__PURE__ */ jsx("li", { children: "The company traded within the past 90 days." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "pre-dissolution-checklist", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Pre-Dissolution Checklist & Bank Account Closure" }),
        /* @__PURE__ */ jsx("p", { children: "Before signing Form DS01, directors must complete crucial administrative tasks:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-900 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileCheck, { className: "text-gold-500", size: 20 }),
            "Pre-Strike Off Action Checklist:"
          ] }),
          /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-gray-700 list-decimal list-inside", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Settle All Liabilities:" }),
              " Pay all outstanding supplier bills, utility invoices, and accountancy fees."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Distribute Remaining Assets:" }),
              " Pay remaining cash reserves to shareholders as final capital distributions or dividends."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Close Corporate Bank Accounts:" }),
              " Formally close all Wise, Payoneer, or Revolut business accounts once the balance reaches £0.00."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Notify Interested Parties:" }),
              " Send a copy of Form DS01 within 7 days to shareholders, employees, co-directors, and creditors."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "hmrc-tax-clearance", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. HMRC Final Tax Returns & Closing PAYE/VAT" }),
        /* @__PURE__ */ jsx("p", { children: "HMRC is the most frequent objector to company strike-offs. If a company owes Corporation Tax, VAT, or PAYE penalties, HMRC will automatically block the dissolution." }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Steps for HMRC Tax Clearance:" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "File a final CT600 Corporation Tax return covering up to the date trading ceased." }),
          /* @__PURE__ */ jsx("li", { children: "Deregister from VAT via HMRC Gateway and submit a final VAT return." }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Close the PAYE scheme and mark final RTI payroll submissions as ",
            /* @__PURE__ */ jsx("em", { children: '"Final Submission upon Ceasing Scheme."' })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UK COMPANY DISSOLUTION SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Strike Off Your UK LTD Company Safely with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages final CT600 tax returns, HMRC tax clearance, Gazette notice publication, and Companies House DS01 online submissions for non-resident directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order UK Company Dissolution Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "ds01-submission", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Submitting Form DS01 & Gazetting Process" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Once Form DS01 is submitted online with the £33 fee, Companies House publishes a notice in the ",
          /* @__PURE__ */ jsx("strong", { children: "London, Edinburgh, or Belfast Gazette" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The Gazette notice serves as a 2-month public warning to creditors. If no objection is received during this 60-day window, Companies House issues a second Gazette notice confirming the company has been dissolved and struck off the register." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "bona-vacantia", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. The Bona Vacantia Risk: Loss of Uncollected Funds" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under UK law, when a company is dissolved, all remaining property, rights, and bank account balances pass to the Crown as ",
          /* @__PURE__ */ jsx("strong", { children: "Bona Vacantia" }),
          " (ownerless goods)."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "If you leave £5,000 in your Wise bank account on the day of dissolution, the bank account will be frozen, and the funds will be transferred to the Treasury Solicitor. Reclaiming Bona Vacantia property requires a costly court order or administrative restoration." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "UK COMPANY DISSOLUTION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Dissolve Your UK LTD Remotely with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "HMRC final tax clearance, Form DS01 filing, Gazette publishing, and legal strike-off support for overseas directors." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK Company Strike Off" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
