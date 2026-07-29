import { jsxs, jsx } from "react/jsx-runtime";
import { an as faqs } from "./router-wwha1nVk.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, AlertTriangle, BookOpen, ArrowRight, Scale, Briefcase, Check, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive IRS penalty guide masterclass for non-resident foreign founders on IRC Section 6038A fines, Notice CP215 enforcement, 90-day escalation rules, and Reasonable Cause penalty abatement letters." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Legal & Tax Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "16 Min Read · Updated July 2026" })
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
        /* @__PURE__ */ jsx(AlertTriangle, { size: 18, className: "text-rose-500" }),
        /* @__PURE__ */ jsx("span", { children: "Form 5472 Penalty Reality Check" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Automatic $25,000 Fine" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "The IRS assesses an automatic initial penalty of $25,000 per unfiled Form 5472 per year under IRC § 6038A(d)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Applies to $0 Income LLCs" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Fines apply regardless of revenue or profit. $0 revenue does NOT exempt foreign owners from filing." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "90-Day Escalation Fines" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "An additional $25,000 fine is added for every 30-day period the failure continues after IRS notification." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Abatement Relief Available" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Taxpayers can submit a formal Reasonable Cause statement under Treas. Reg. 1.6038A-4(b) to request penalty cancellation." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#penalty-structure", className: "hover:text-gold-600 underline", children: "1. The IRS $25,000 Penalty Structure Explained" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#notice-cp215", className: "hover:text-gold-600 underline", children: "2. What Is IRS Notice CP215 / CP15?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#continuation-penalties", className: "hover:text-gold-600 underline", children: "3. The 90-Day Escalation Clause ($25,000 / 30 Days)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#penalty-matrix", className: "hover:text-gold-600 underline", children: "4. Comprehensive IRS Penalty & Relief Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#reasonable-cause", className: "hover:text-gold-600 underline", children: "5. How to Claim Reasonable Cause Penalty Abatement" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#remediation-steps", className: "hover:text-gold-600 underline", children: "6. Step-by-Step Recovery Plan if You Are Late" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "penalty-structure", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. The IRS $25,000 Penalty Structure Explained" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In 2018, the US Congress increased the statutory base penalty under ",
          /* @__PURE__ */ jsx("strong", { children: "Internal Revenue Code Section 6038A(d)" }),
          " from $10,000 to ",
          /* @__PURE__ */ jsx("strong", { children: "$25,000" }),
          " per violation."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Because foreign-owned single-member LLCs are classified as reporting corporations under Treasury Regulations, failing to submit Form 5472 by April 15 triggers an automatic, system-generated $25,000 fine. Crucially, because Form 5472 is an informational reporting document rather than an income tax return, the $25,000 penalty applies regardless of whether your US LLC earned $1,000,000 or $0 in revenue." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "notice-cp215", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. What Is IRS Notice CP215 / CP15?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Notice CP215" }),
          " (or Notice CP15) is the official computer-generated penalty assessment letter mailed by the IRS to notify your LLC that a $25,000 penalty has been charged against your company account."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The notice outlines the specific tax year in default, the exact penalty amount assessed under IRC § 6038A, a payment due date, and instructions for appealing or requesting administrative penalty relief." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "IRS PENALTY ABATEMENT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Received an IRS $25,000 Penalty Notice? ADVAQ Can Help" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares formal Reasonable Cause abatement statements, files delinquent Form 5472s, and communicates with IRS agents to cancel penalties." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Penalty Relief Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "continuation-penalties", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. The 90-Day Escalation Clause ($25,000 / 30 Days)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If a foreign founder ignores Notice CP215 for more than 90 days after its mailing date, the IRS imposes an additional ",
          /* @__PURE__ */ jsx("strong", { children: "$25,000 continuation penalty for every 30-day period" }),
          " (or fraction thereof) that the failure continues."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Unlike other IRS tax penalties, continuation penalties under Section 6038A have no maximum statutory cap. A multi-year delay in addressing Notice CP215 can result in cumulative penalties exceeding $100,000+." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "penalty-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Comprehensive IRS Penalty & Relief Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of IRS penalty stages and relief options:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Penalty Stage" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Penalty Amount" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Statutory Authority" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Relief Option" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Initial Failure Notice CP215" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "$25,000 Automatic Fine" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "IRC § 6038A(d)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Reasonable Cause Statement" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Past 90-Day Escalation" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "+$25,000 per 30-day period" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Treas. Reg. § 1.6038A-4" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Urgent Remediation Petition" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "First-Time Abatement (FTA)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-500", children: "Not Applicable" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "IRM 20.1.1.3.6" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Ineligible for Form 5472" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "reasonable-cause", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. How to Claim Reasonable Cause Penalty Abatement" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under ",
          /* @__PURE__ */ jsx("strong", { children: "Treasury Regulation Section 1.6038A-4(b)" }),
          ", the IRS will cancel the $25,000 penalty if you establish that the failure to file on time was due to ",
          /* @__PURE__ */ jsx("strong", { children: "Reasonable Cause" }),
          " and not willful neglect."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Scale, { className: "text-gold-600", size: 18 }),
              "First-Time Honest Oversight by Foreign Non-Residents"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Demonstrating that a non-resident alien founder residing outside the United States acted in good faith, relied on reasonable assumptions, and acted promptly upon discovering the filing requirement." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
              "Reliance on Qualified US Tax Professional Advice"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Showing that the LLC retained a tax preparer or formation agency who failed to advise the founder regarding Form 5472 filing requirements." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "remediation-steps", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Step-by-Step Recovery Plan if You Are Late" }),
        /* @__PURE__ */ jsx("p", { children: "If your LLC has received Notice CP215 or missed past filing deadlines, execute this immediate recovery plan:" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Form Preparation:" }),
              " Prepare the missing Form 5472 and pro-forma Form 1120 with exact reportable transaction figures."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Abatement Letter Drafting:" }),
              " Draft a formal Reasonable Cause petition citing Treas. Reg. § 1.6038A-4(b) signed under penalties of perjury."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "IRS Ogden Transmission:" }),
              " Transmit the complete packet directly to the IRS Ogden Penalty Unit via certified fax (`+1 855-887-7737`)."
            ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "IRS PENALTY RELIEF SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Resolve Your IRS Form 5472 Late Penalties" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Delinquent Form 5472 preparation, pro-forma 1120 filing, Reasonable Cause abatement drafting, and IRS Notice CP215 resolution handled by ADVAQ." }),
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
