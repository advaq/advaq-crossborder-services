import { jsxs, jsx } from "react/jsx-runtime";
import { ah as faqs } from "./router-DCGwfQ0t.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, Building2, FileText, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "How to Dissolve & Close a US LLC Legally (Articles of Cancellation & IRS Closure)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A step-by-step legal dissolution roadmap for foreign non-resident founders on state Articles of Dissolution, final IRS tax filings, Mercury/Relay bank account liquidations, and closing IRS EIN tax accounts." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "State & IRS Corporate Dissolution Protocols" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "5-Step Legal Dissolution Roadmap" })
      ] }),
      /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm sm:text-[15px] text-navy-100 leading-relaxed list-none", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Member Resolution:" }),
          " Formal written consent to dissolve approved by LLC owners."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Settle Business Debts:" }),
          " Pay off all vendor invoices and tax liabilities."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Close US Bank Accounts:" }),
          " Liquidate balances via final Owner's Draw wire."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "File State Articles of Dissolution:" }),
          " Submit Articles of Cancellation with Secretary of State."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Final IRS Filing & EIN Closure:" }),
          ' Mark "Final Return" on Form 5472 and mail EIN cancellation letter to IRS.'
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why-formal-dissolution", className: "hover:text-gold-600 underline", children: "1. Why You Must Dissolve Legally (Risks of Abandonment)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#state-dissolution-filings", className: "hover:text-gold-600 underline", children: "2. State Filings: Wyoming ($60) vs Delaware ($200)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bank-account-liquidation", className: "hover:text-gold-600 underline", children: "3. Closing Mercury & Relay Business Bank Accounts" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#final-irs-filings", className: "hover:text-gold-600 underline", children: "4. Submitting Final IRS Form 5472 & 1120 Returns" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ein-cancellation", className: "hover:text-gold-600 underline", children: "5. How to Close Your IRS EIN Business Tax Account" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "why-formal-dissolution", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Why You Must Dissolve Legally (Risks of Abandonment)" }),
        /* @__PURE__ */ jsx("p", { children: "Simply walking away from an active US LLC without formal dissolution is a dangerous mistake." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The state will continue to assess annual report fees and penalties. Furthermore, the IRS may continue issuing automatic ",
          /* @__PURE__ */ jsx("strong", { children: "$25,000 late penalties" }),
          " for unfiled Form 5472 tax returns until the entity is legally closed."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "state-dissolution-filings", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. State Filings: Wyoming ($60) vs Delaware ($200)" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Building2, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Wyoming LLC Dissolution" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
              "File ",
              /* @__PURE__ */ jsx("strong", { children: "Articles of Dissolution" }),
              " with the Wyoming Secretary of State. State fee is ",
              /* @__PURE__ */ jsx("strong", { children: "$60" }),
              ". All annual reports must be current."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-navy-700 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(FileText, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Delaware LLC Cancellation" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
              "File a ",
              /* @__PURE__ */ jsx("strong", { children: "Certificate of Cancellation" }),
              " with Delaware Division of Corporations. State fee is ",
              /* @__PURE__ */ jsx("strong", { children: "$200" }),
              " + all paid franchise taxes ($300/yr)."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US LLC DISSOLUTION SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Dissolve Your US LLC Legally with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ handles state Articles of Dissolution, final IRS Form 5472 returns, and IRS EIN account cancellation to protect your legal standing." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order LLC Dissolution Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "bank-account-liquidation", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Closing Mercury & Relay Business Bank Accounts" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Transfer remaining funds to your personal foreign bank account as a final ",
          /* @__PURE__ */ jsx("em", { children: "Owner's Draw" }),
          ", download all historical PDF statements for 6-year tax records, and request official account closure from Mercury or Relay support."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "final-irs-filings", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Submitting Final IRS Form 5472 & 1120 Returns" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "On your final Form 1120 and Form 5472 filing for the year of dissolution, check the box marked ",
          /* @__PURE__ */ jsx("strong", { children: '"Final Return"' }),
          ". This notifies the IRS that no future tax returns will be expected."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "ein-cancellation", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. How to Close Your IRS EIN Business Tax Account" }),
        /* @__PURE__ */ jsx("p", { children: "Mail a formal written notice to:" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm bg-off-white p-4 rounded-xl border border-border font-mono", children: [
          "Internal Revenue Service",
          /* @__PURE__ */ jsx("br", {}),
          "MS 6273, Cincinnati, OH 45999 USA"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: "Include your full company name, EIN, US business address, reason for closure, and a copy of your IRS CP575 confirmation letter." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US CORPORATE DISSOLUTION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Dissolve Your US LLC Safely with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "State Articles of Dissolution, final IRS Form 5472 tax return preparation, and IRS EIN account cancellation." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order LLC Dissolution Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
