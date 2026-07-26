import { jsxs, jsx } from "react/jsx-runtime";
import { am as faqs } from "./router-D17Z8zgN.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, AlertTriangle, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "What Happens If You Miss the IRS Form 5472 Deadline? ($25,000 Penalty Rules)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive IRS penalty guide for non-resident foreign founders on IRC Section 6038A fines, Notice CP215 enforcement, 90-day escalation rules, and Reasonable Cause penalty abatement letters." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Legal & Tax Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Internal Revenue Code Section 6038A(d)" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { size: 18, className: "text-red-500" }),
        /* @__PURE__ */ jsx("span", { children: "Form 5472 Penalty Reality Check" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Automatic $25,000 Fine:" }),
            " The IRS assesses an automatic initial penalty of $25,000 per unfiled Form 5472 per year."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Applies to $0 Income LLCs:" }),
            " Fines apply regardless of revenue or profit. $0 revenue does NOT exempt you."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "90-Day Continuation Penalties:" }),
            " An additional $25,000 fine is added for every 30-day period the failure continues after IRS notification."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Abatement Relief Available:" }),
            " Taxpayers can submit a formal Reasonable Cause statement under Treas. Reg. 1.6038A-4(b) to request penalty cancellation."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#penalty-structure", className: "hover:text-gold-600 underline", children: "1. The IRS $25,000 Penalty Structure Explained" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#notice-cp215", className: "hover:text-gold-600 underline", children: "2. What Is IRS Notice CP215 / CP15?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#continuation-penalties", className: "hover:text-gold-600 underline", children: "3. The 90-Day Escalation Clause ($25,000 / 30 Days)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#reasonable-cause", className: "hover:text-gold-600 underline", children: "4. How to Claim Reasonable Cause Penalty Abatement" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#remediation-steps", className: "hover:text-gold-600 underline", children: "5. Step-by-Step Recovery Plan if You Are Late" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "penalty-structure", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. The IRS $25,000 Penalty Structure Explained" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In 2018, the US Congress increased the base penalty under ",
          /* @__PURE__ */ jsx("strong", { children: "Internal Revenue Code Section 6038A(d)" }),
          " from $10,000 to ",
          /* @__PURE__ */ jsx("strong", { children: "$25,000" }),
          " per violation."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Because foreign-owned single-member LLCs are treated as reporting entities, failing to submit Form 5472 by April 15 results in an automatic system-generated penalty notice sent to the company." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "notice-cp215", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. What Is IRS Notice CP215 / CP15?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Notice CP215" }),
          " is the official penalty assessment letter mailed by the IRS to inform the LLC that a $25,000 penalty has been charged to its account."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The notice specifies a payment due date and outlines your right to appeal or submit a written request for penalty relief." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "IRS PENALTY ABATEMENT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Received an IRS $25,000 Penalty Notice? ADVAQ Can Help" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares formal Reasonable Cause abatement statements, files delinquent Form 5472s, and communicates with IRS agents to cancel penalties." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Penalty Relief Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "continuation-penalties", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. The 90-Day Escalation Clause ($25,000 / 30 Days)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If you ignore Notice CP215 for more than 90 days after issuance, the IRS imposes an additional ",
          /* @__PURE__ */ jsx("strong", { children: "$25,000 continuation penalty for every 30 days" }),
          " the return remains unfiled, with no upper cap."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "reasonable-cause", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. How to Claim Reasonable Cause Penalty Abatement" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under ",
          /* @__PURE__ */ jsx("em", { children: "Treasury Regulation Section 1.6038A-4(b)" }),
          ", the $25,000 penalty will be canceled if you demonstrate that the failure was due to ",
          /* @__PURE__ */ jsx("strong", { children: "Reasonable Cause" }),
          " and not willful neglect."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Reasonable Cause arguments include:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Honest misunderstanding of complex US international tax laws by a first-time foreign founder." }),
          /* @__PURE__ */ jsx("li", { children: "Reliance on incorrect advice from a certified tax professional." }),
          /* @__PURE__ */ jsx("li", { children: "Serious illness, natural disaster, or severe international mail disruption." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "remediation-steps", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Step-by-Step Recovery Plan if You Are Late" }),
        /* @__PURE__ */ jsxs("ol", { className: "list-none space-y-2 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Immediately prepare the missing Form 5472 and pro-forma Form 1120." }),
          /* @__PURE__ */ jsx("li", { children: "Draft a comprehensive Reasonable Cause statement signed under penalties of perjury." }),
          /* @__PURE__ */ jsx("li", { children: "Fax the complete penalty relief packet directly to the IRS Ogden Penalty Unit." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "IRS PENALTY RELIEF SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Resolve Your IRS Form 5472 Late Penalties" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Delinquent Form 5472 preparation, pro-forma 1120 filing, Reasonable Cause abatement drafting, and IRS Notice CP215 resolution." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order IRS Penalty Abatement Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
