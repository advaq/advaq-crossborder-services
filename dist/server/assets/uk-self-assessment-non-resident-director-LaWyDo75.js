import { jsxs, jsx } from "react/jsx-runtime";
import { m as faqs } from "./router-BTtHwbwK.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Briefcase, Building2, UserCheck, ArrowRight, AlertTriangle, Calendar, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive HMRC tax masterclass for non-UK resident company directors on statutory filing criteria, Personal UTR numbers, Form SA109 non-residence claims, and 31 January deadlines in 2026." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ UK Corporate Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "22 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "HMRC SA100 & SA109 Official Compliance Guide" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Self Assessment Rules at a Glance" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: "Essential personal tax rules for overseas directors of UK Limited Companies:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "No Automatic Obligation" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Simply being a director of a UK LTD does NOT require a UK Self Assessment tax return if you reside abroad with zero UK taxable income." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Filing Triggers" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "You MUST file if you draw a UK salary via PAYE, receive untaxed UK income, or are issued a formal Notice to File by HMRC." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Form SA109 (Residence Page)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Non-resident directors who file must include Form SA109 to formally claim non-resident tax status under the Statutory Residence Test (SRT)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Strict 31 January Deadline" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Online Self Assessment filings and tax payments are due by 31 January following the end of the tax year." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#filing-criteria", className: "hover:text-gold-600 underline", children: "1. HMRC Statutory Criteria: Do You Need to File?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#company-utr-vs-personal-utr", className: "hover:text-gold-600 underline", children: "2. Company UTR vs Personal UTR: Understanding the Difference" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#sa109-residence-claim", className: "hover:text-gold-600 underline", children: "3. Form SA109: Claiming Non-Resident Tax Status" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tax-matrix", className: "hover:text-gold-600 underline", children: "4. Comprehensive Self Assessment Tax Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#srt-test", className: "hover:text-gold-600 underline", children: "5. The HMRC Statutory Residence Test (SRT)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "6. 6 Critical Common Self Assessment Mistakes to Avoid" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#deadlines-and-penalties", className: "hover:text-gold-600 underline", children: "7. Deadlines & Late Filing Penalties (£100 Fine)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "filing-criteria", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. HMRC Statutory Criteria: Do You Need to File?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Historically, HMRC required all company directors to register for Self Assessment. However, HMRC updated its official manual to clarify that ",
          /* @__PURE__ */ jsx("strong", { children: "non-resident directors are only required to file a Self Assessment tax return if they have UK taxable income" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Scenario: Filing SA100 with Form SA109"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Consider Hassan, a software company founder in Pakistan operating a UK LTD. Hassan draws a £12,570 director salary via UK PAYE payroll. Because he earns a UK salary, Hassan registered for a Personal UTR. ADVAQ files his SA100 return along with Form SA109 (Residence page) to claim non-resident tax status, ensuring zero UK tax is owed under his £12,570 Personal Allowance." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "company-utr-vs-personal-utr", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Company UTR vs Personal UTR: Understanding the Difference" }),
        /* @__PURE__ */ jsx("p", { children: "Overseas founders often confuse their company's tax number with their personal tax number:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Building2, { className: "text-navy-950", size: 18 }),
              "Company UTR (10 Digits)"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Issued to the corporate entity for Corporation Tax (Form CT600). Belongs to the company." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-gold-600 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "text-gold-600", size: 18 }),
              "Personal UTR (10 Digits)"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Issued to an individual human being for Self Assessment personal income tax (Form SA100). Belongs to the director personally." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "sa109-residence-claim", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Form SA109: Claiming Non-Resident Tax Status" }),
        /* @__PURE__ */ jsx("p", { children: "If a foreign director is required to submit a UK Self Assessment tax return, simply completing the standard SA100 main form is insufficient." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "You must file supplementary ",
          /* @__PURE__ */ jsx("strong", { children: "Form SA109 (Residence, Remittance Basis etc.)" }),
          " to formally notify HMRC of your non-resident status and claim relief under double taxation treaties."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "tax-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Comprehensive Self Assessment Tax Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Side-by-side comparison of Self Assessment obligations for overseas directors:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Director Profile" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Personal UTR Required?" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Self Assessment Mandate" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Form SA109 Required?" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Statutory Deadline" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Foreign Director (UK Salary £12,570 via PAYE)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Yes (Mandatory)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Mandatory Annual Filing" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Yes (SA109 Non-Residency)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "31 January Following Tax Year" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Foreign Director (Zero UK Income, Dividends Only)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "No (Unless Notice Received)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Exempt (Zero Return)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Not Applicable" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "N/A" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Foreign Director (Issued HMRC SA316 Notice)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Yes (Mandatory)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Mandatory (Or Request Cancellation)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Yes (If Filing Return)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "31 January Following Tax Year" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "HMRC PERSONAL TAX SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "File Your UK Self Assessment & Form SA109" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares and submits individual UK Self Assessment tax returns, registers Personal UTR numbers, and files Form SA109 non-residence claims for foreign directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/self-assessment", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Self Assessment Tax Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "srt-test", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. The HMRC Statutory Residence Test (SRT)" }),
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
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 6 Critical Common Self Assessment Mistakes to Avoid" }),
        /* @__PURE__ */ jsx("p", { children: "Avoid these six frequent Self Assessment tax errors:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Assuming All UK Directors Must Automatically File Returns"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "HMRC updated guidance clarifies that foreign directors with zero UK taxable income are not required to register or file." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Attempting to File Form SA109 on HMRC's Free Portal"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "HMRC's basic online portal does NOT support Form SA109 non-residence filings. You must use commercial software or an authorized advisory firm like ADVAQ." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "deadlines-and-penalties", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. Deadlines & Late Filing Penalties (£100 Fine)" }),
        /* @__PURE__ */ jsx("p", { children: "If HMRC issues a Notice to File, respect the statutory timeline:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "text-gold-600 shrink-0 mt-0.5", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-base", children: "31 October: Paper Return Deadline" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Deadline for submitting paper SA100 + SA109 returns by post to HMRC." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "text-gold-600 shrink-0 mt-0.5", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-base", children: "31 January: Online Filing & Payment Deadline" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Deadline for electronic SA100 + SA109 filings and paying any personal tax due. Missing this by 1 day triggers an immediate £100 fine." })
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
