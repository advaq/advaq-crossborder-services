import { jsxs, jsx } from "react/jsx-runtime";
import { am as faqs } from "./router-CAPYaiJ8.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, DollarSign, Receipt, FileText, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "IRS Form 5472 & 1120 Filing Requirements for Foreign-Owned Single-Member LLCs" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive IRS tax compliance masterclass for non-resident alien founders on Section 6038A regulations, pro-forma Form 1120 attachments, reportable transactions, and April 15 submission deadlines." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Tax Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "16 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Treasury Reg Section 1.6038A-1 Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Form 5472 Compliance Highlights" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Mandatory Tax Reporting" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "All 25%+ foreign-owned single-member US LLCs must file Form 5472 annually with IRS." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Pro-Forma Form 1120" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: 'Form 5472 must be attached to a pro-forma Form 1120 with "Foreign-owned U.S. DE" written at the top.' })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Reportable Transactions" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Must disclose capital injections, owner's draws, loans, and business expense reimbursements." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Strict $25,000 Fine" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Failing to file on time triggers an automatic $25,000 IRS penalty under IRC § 6038A." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why-5472-required", className: "hover:text-gold-600 underline", children: "1. Why Foreign-Owned Single-Member LLCs Must File Form 5472" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#reportable-transactions", className: "hover:text-gold-600 underline", children: "2. What Constitutes a Reportable Transaction Under Part IV?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#pro-forma-1120", className: "hover:text-gold-600 underline", children: "3. How to Prepare Pro-Forma Form 1120 Attachment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#compliance-matrix", className: "hover:text-gold-600 underline", children: "4. Comprehensive Form 5472 Compliance & Penalty Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#deadlines-extension", className: "hover:text-gold-600 underline", children: "5. Filing Deadlines (April 15) & Form 7004 Extensions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#submission-method", className: "hover:text-gold-600 underline", children: "6. How to Fax Form 5472 Directly to the IRS Ogden Unit" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "why-5472-required", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Why Foreign-Owned Single-Member LLCs Must File Form 5472" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under US Treasury Regulations updated in 2017 (T.D. 9796), foreign-owned single-member LLCs (Disregarded Entities) are treated as domestic US corporations solely for the purpose of ",
          /* @__PURE__ */ jsx("strong", { children: "Section 6038A information reporting" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "This mandatory reporting rule applies to any US LLC where a foreign non-resident alien person or entity directly or indirectly owns 25% or more of the company's equity. Crucially, the IRS requires Form 5472 filing ",
          /* @__PURE__ */ jsx("strong", { children: "even if your LLC generated $0 in revenue or conducted zero commercial activity" }),
          " during the tax year."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "reportable-transactions", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. What Constitutes a Reportable Transaction Under Part IV?" }),
        /* @__PURE__ */ jsx("p", { children: "Under Part IV of Form 5472, a reportable transaction encompasses any transfer of money, capital, or property between the foreign owner and the LLC:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(DollarSign, { className: "text-gold-600", size: 18 }),
              "Capital Contributions & Injections"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Initial capital deposits used to pay state incorporation fees, registered agent expenses, or fund business checking accounts." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Receipt, { className: "text-gold-600", size: 18 }),
              "Owner's Draws & Profit Distributions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Any profit withdrawals transferred from the LLC's US bank account to the foreign owner's personal account abroad." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileText, { className: "text-gold-600", size: 18 }),
              "Business Expense Reimbursements"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Personal funds spent by the foreign owner to purchase company domain names, web hosting, or software tools on behalf of the LLC." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "pro-forma-1120", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. How to Prepare Pro-Forma Form 1120 Attachment" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Form 5472 cannot be filed as a standalone document. The IRS strictly mandates that it must be attached to a ",
          /* @__PURE__ */ jsx("strong", { children: "pro-forma Form 1120" }),
          " (U.S. Corporation Income Tax Return)."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "On the pro-forma Form 1120, you complete company identity fields (Entity Name, US Address, EIN, Date Incorporated) and write ",
          /* @__PURE__ */ jsx("strong", { children: '"Foreign-owned U.S. DE"' }),
          " across the top of Page 1. Financial lines for income, deductions, and tax liability are left blank because pass-through tax rules apply."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "IRS FORM 5472 TAX FILING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "File Form 5472 & 1120 Pro-Forma with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares Form 5472, documents reportable transactions, generates pro-forma Form 1120, and faxes directly to the IRS to protect your LLC from $25,000 penalties." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Form 5472 Tax Filing Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "compliance-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Comprehensive Form 5472 Compliance & Penalty Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of tax filing scenarios:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Tax Scenario" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Required Forms" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Filing Deadline" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Automatic Penalty Exposure" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Zero Revenue Single-Member LLC" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Form 5472 + Pro-Forma 1120" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "April 15 (or Oct 15 ext)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "$25,000 Penalty for Failure to File" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Active Revenue Single-Member LLC" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Form 5472 + Pro-Forma 1120" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "April 15 (or Oct 15 ext)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "$25,000 Penalty for Failure to File" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Multi-Member Foreign-Owned LLC" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Form 1065 + Schedule K-1s" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-gold-700 font-bold", children: "March 15 (or Sept 15 ext)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "$220/month per partner penalty" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "deadlines-extension", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Filing Deadlines (April 15) & Form 7004 Extensions" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Form 5472 is due on ",
          /* @__PURE__ */ jsx("strong", { children: "April 15" }),
          " following the close of the calendar tax year."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If you require additional preparation time, filing IRS ",
          /* @__PURE__ */ jsx("strong", { children: "Form 7004" }),
          " on or before April 15 grants an automatic 6-month extension to October 15."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "submission-method", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. How to Fax Form 5472 Directly to the IRS Ogden Unit" }),
        /* @__PURE__ */ jsx("p", { children: "Form 5472 and pro-forma Form 1120 cannot be e-filed online. They must be faxed or mailed to the specialized IRS unit in Ogden, Utah." }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Official IRS Ogden Fax Number:" }),
          " ",
          /* @__PURE__ */ jsx("code", { children: "+1 (855) 887-7737" }),
          ". Always preserve your fax transmission confirmation report as legal audit proof."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "IRS FORM 5472 COMPLIANCE" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "File Your Form 5472 with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Pro-forma Form 1120 preparation, reportable transaction auditing, IRS Ogden faxing, and $25,000 penalty protection handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Form 5472 Tax Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
