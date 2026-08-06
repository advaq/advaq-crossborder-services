import { jsxs, jsx } from "react/jsx-runtime";
import { at as faqs } from "./router-BA-gYosD.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Briefcase, Calculator, ArrowRight, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "How to File Annual Accounts for a UK Limited Company as a Non-Resident" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive accounting masterclass for foreign directors on statutory financial reporting, Micro-Entity balance sheets, iXBRL digital formatting, and Companies House deadlines in 2026." }),
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
            /* @__PURE__ */ jsx("span", { children: "FRS 105 & iXBRL Statutory Compliance" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Annual Accounts Rules at a Glance" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: "Key statutory reporting rules for foreign-owned UK companies:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "9-Month Filing Window" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Annual accounts must be submitted to Companies House within 9 months of your financial year-end." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Micro-Entity Regime (FRS 105)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Small UK LTDs (turnover under £632,000) qualify for simplified balance sheet disclosures." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "iXBRL Digital Format" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Accounts submitted to Companies House and HMRC must be digitally tagged in Inline XBRL format." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Automatic Fines" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Missing deadlines results in automatic financial penalties starting at £150 up to £1,500." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-are-annual-accounts", className: "hover:text-gold-600 underline", children: "1. What Are Statutory Annual Accounts?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#micro-entity-rules", className: "hover:text-gold-600 underline", children: "2. Micro-Entity Accounting Regime (FRS 105)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#accounting-period", className: "hover:text-gold-600 underline", children: "3. Understanding Your Financial Year-End & Deadlines" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#penalty-matrix", className: "hover:text-gold-600 underline", children: "4. Annual Accounts & Late Penalty Schedule Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ixbrl-formatting", className: "hover:text-gold-600 underline", children: "5. What is iXBRL Digital Tagging?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "6. 6 Critical Accounting Mistakes Overseas Directors Make" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#workflow-steps", className: "hover:text-gold-600 underline", children: "7. Step-by-Step Annual Accounts Preparation Workflow" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-are-annual-accounts", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What Are Statutory Annual Accounts?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Part 15 of the ",
          /* @__PURE__ */ jsx("em", { children: "UK Companies Act 2006" }),
          ", directors of every UK company are legally required to prepare statutory ",
          /* @__PURE__ */ jsx("strong", { children: "Annual Accounts" }),
          " at the end of each financial year."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Annual Accounts provide a formal financial summary of your company's trading performance over a 12-month accounting reference period. They are submitted to Companies House for public record and attached to your HMRC Corporation Tax Return (CT600)." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Scenario: On-Time Micro-Entity Filing"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Consider Kashif, a software agency founder in Pakistan operating a UK LTD. Kashif's financial year ends on July 31. His Companies House deadline for annual accounts is April 30 of the following year. Kashif provided his Xero bank transaction records to ADVAQ in January. ADVAQ prepared his FRS 105 Micro-Entity accounts with iXBRL tagging and submitted them 3 months ahead of the deadline." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "micro-entity-rules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Micro-Entity Accounting Regime (FRS 105)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For overseas founders operating a lean IT agency, consulting firm, or e-commerce store, UK law offers a highly advantageous reporting standard known as ",
          /* @__PURE__ */ jsx("strong", { children: "Micro-Entity Accounts (FRS 105)" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Calculator, { className: "text-gold-600", size: 20 }),
            "Micro-Entity Qualification Thresholds:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Your company qualifies as a Micro-Entity if it meets at least two of the following conditions:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 text-xs", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-border text-center shadow-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-emerald-600 text-lg block", children: "≤ £632,000" }),
              /* @__PURE__ */ jsx("span", { className: "text-navy-950 block mt-1 font-semibold", children: "Annual Turnover" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-border text-center shadow-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-600 text-lg block", children: "≤ £316,000" }),
              /* @__PURE__ */ jsx("span", { className: "text-navy-950 block mt-1 font-semibold", children: "Balance Sheet Total" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-border text-center shadow-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-navy-950 text-lg block", children: "≤ 10" }),
              /* @__PURE__ */ jsx("span", { className: "text-navy-950 block mt-1 font-semibold", children: "Employees (Average)" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "accounting-period", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Understanding Your Financial Year-End & Deadlines" }),
        /* @__PURE__ */ jsx("p", { children: "When a UK Limited Company is formed, your financial year-end is automatically set to the last day of the month in which the company was incorporated." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For example, if incorporated on ",
          /* @__PURE__ */ jsx("strong", { children: "July 15, 2026" }),
          ", your accounting reference period ends on ",
          /* @__PURE__ */ jsx("strong", { children: "July 31, 2027" }),
          ". Your first annual accounts are due 21 months from incorporation (or 9 months post year-end)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "penalty-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Annual Accounts & Late Penalty Schedule Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Companies House strictly enforces financial penalties for late annual accounts submissions:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Delay Period" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "First-Time Late Penalty" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-rose-400", children: "Consecutive Year Penalty" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Companies House Action" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "1 Day to 1 Month Late" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£150" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£300 (Doubled)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Late Filing Penalty Notice Issued" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "1 Month to 3 Months Late" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£375" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£750 (Doubled)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Warning Letter Sent to Registered Address" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "3 Months to 6 Months Late" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£750" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£1,500 (Doubled)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Compulsory Strike-Off Warning" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "More than 6 Months Late" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£1,500" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "£3,000 (Doubled)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Gazette Dissolution & Bank Freeze" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UK STATUTORY ACCOUNTING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "File Your Statutory Annual Accounts with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares Micro-Entity & Small Company statutory accounts in compliant iXBRL format for Companies House and HMRC submission." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/annual-accounts", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Annual Accounts Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "ixbrl-formatting", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. What is iXBRL Digital Tagging?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Both Companies House and HMRC require statutory accounts to be formatted in ",
          /* @__PURE__ */ jsx("strong", { children: "Inline eXtensible Business Reporting Language (iXBRL)" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "iXBRL embeds machine-readable computer code into financial statements, allowing tax algorithms to verify line items automatically. ADVAQ handles all technical iXBRL tagging internally." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 6 Critical Accounting Mistakes Overseas Directors Make" }),
        /* @__PURE__ */ jsx("p", { children: "Avoid these six frequent statutory accounting errors:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Confusing Companies House 9-Month Deadline with HMRC 12-Month Limit"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Accounts are due at Companies House in 9 months, whereas the CT600 return is due at 12 months. Delaying accounts until month 12 triggers automatic Companies House late fines." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Submitting PDF Documents Without iXBRL Computer Tagging"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Submitting plain PDF accounts without Inline XBRL data tags results in immediate Companies House portal rejection." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "workflow-steps", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. Step-by-Step Annual Accounts Preparation Workflow" }),
        /* @__PURE__ */ jsx("p", { children: "Follow this step-by-step accounting workflow:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-base", children: "Gather Transaction & Bank Statements" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Provide Wise/Payoneer statements and sales invoice records to your ADVAQ dedicated tax accountant." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "2" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-base", children: "Draft FRS 105 Micro-Entity Statements" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "ADVAQ prepares Profit & Loss statements and Balance Sheet disclosures." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "3" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-base", children: "Generate iXBRL Tags & Electronic Submission" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Accounts are tagged in iXBRL format and submitted directly to Companies House and HMRC via secure API gateways." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "UK STATUTORY ACCOUNTING & TAX FILING" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "File Your UK Annual Accounts with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Statutory annual accounts preparation, Micro-Entity balance sheets, iXBRL tagging, and joint Companies House & HMRC filing." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/annual-accounts", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Annual Accounts Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
