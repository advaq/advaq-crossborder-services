import { jsxs, jsx } from "react/jsx-runtime";
import { q as faqs } from "./router-CGinzTRd.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Briefcase, FolderCheck, Check, ArrowRight, Calculator, Receipt, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Bookkeeping Best Practices for Overseas UK Limited Companies" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive accounting standards masterclass for foreign directors on statutory 6-year record retention, foreign exchange currency conversions, cloud software integration, and HMRC audit readiness in 2026." }),
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
            /* @__PURE__ */ jsx("span", { children: "Companies Act Section 386 Official Compliance Guide" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Bookkeeping Rules at a Glance" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: "Key statutory record-keeping rules for foreign-owned UK companies:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "6-Year Record Retention" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "HMRC requires private UK companies to keep all bank statements, invoices, and expense receipts for at least 6 years." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "GBP Base Currency" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Accounts must be prepared in British Pounds (GBP). Foreign currency transactions (USD, EUR, PKR) are converted using spot or HMRC monthly FX rates." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Strict Banking Separation" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Never commingle personal and corporate funds to prevent Director's Loan Account (DLA) tax surcharges." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Cloud Software Sync" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Integrate Wise/Payoneer bank feeds directly with Xero or QuickBooks for Making Tax Digital (MTD) compliance." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#section-386-duty", className: "hover:text-gold-600 underline", children: "1. Statutory Duty to Keep Accounting Records (Section 386)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#6-year-rule", className: "hover:text-gold-600 underline", children: "2. The 6-Year HMRC Record Retention Mandate" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#multi-currency-forex", className: "hover:text-gold-600 underline", children: "3. Managing Multi-Currency FX Transactions (USD/EUR/PKR)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bookkeeping-matrix", className: "hover:text-gold-600 underline", children: "4. Bookkeeping Systems & Software Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#cloud-accounting", className: "hover:text-gold-600 underline", children: "5. Cloud Accounting Setup for Overseas Founders" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "6. 6 Critical Common Bookkeeping Mistakes to Avoid" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#directors-loan-account", className: "hover:text-gold-600 underline", children: "7. Avoiding Director's Loan Account (DLA) Tax Pitfalls" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "section-386-duty", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Statutory Duty to Keep Accounting Records (Section 386)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Section 386 of the ",
          /* @__PURE__ */ jsx("em", { children: "UK Companies Act 2006" }),
          ", every UK company must keep accounting records that are sufficient to show and explain the company's transactions."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The records must disclose with reasonable accuracy, at any time, the financial position of the company and enable the directors to ensure that statutory accounts comply with UK accounting standards." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Scenario: Automated Cloud Bookkeeping"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Consider Bilal, a software house founder in Pakistan operating a UK LTD. Bilal integrated his Wise Business multi-currency accounts directly with Xero. Whenever a US client pays an invoice in USD or Bilal pays a hosting bill in EUR, Xero automatically fetches the transaction feed and applies official HMRC spot FX rates—keeping his accounts 100% audit-ready 365 days a year." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "6-year-rule", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. The 6-Year HMRC Record Retention Mandate" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "HMRC enforces a strict ",
          /* @__PURE__ */ jsx("strong", { children: "6-year record retention rule" }),
          " starting from the end of the relevant accounting period:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FolderCheck, { className: "text-gold-600", size: 20 }),
            "What Digital Documents Must Be Archived:"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-xs text-gray-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Sales Invoices & Receipts:" }),
                " All outgoing client invoices and proof of customer payments."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Supplier Bills & SaaS Receipts:" }),
                " Bills for web hosting, software subscriptions, advertising spend, and contractor fees."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Bank Statements:" }),
                " Monthly PDF bank statements for all UK and multi-currency accounts (Wise, Payoneer, Revolut)."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Contracts & Agreements:" }),
                " Client contracts, Master Service Agreements, and contractor statements of work."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "multi-currency-forex", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Managing Multi-Currency FX Transactions (USD/EUR/PKR)" }),
        /* @__PURE__ */ jsx("p", { children: "Non-resident UK companies frequently receive payments in USD or EUR and pay remote contractor expenses in local currencies like PKR or AED." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Because UK statutory accounts must be submitted in ",
          /* @__PURE__ */ jsx("strong", { children: "British Pounds (GBP)" }),
          ", foreign currency transactions must be translated using spot exchange rates on the date of transaction or official HMRC monthly average exchange rates."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "bookkeeping-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Bookkeeping Systems & Software Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Side-by-side comparison of bookkeeping solutions for non-resident directors:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Bookkeeping Solution" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Automated Bank Feeds" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Multi-Currency FX Support" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "MTD HMRC Compliance" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "HMRC Audit Risk" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Outsourced Advisory (ADVAQ)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Automated Daily Sync" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Full Spot Rate Conversion" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "100% Fully Compliant" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Zero Audit Risk (Guaranteed)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Cloud Software (Xero / QuickBooks)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Direct API Integration" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Automated FX Rates" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Fully Compliant" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Low Risk (User Configured)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Manual Spreadsheets (Excel)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "None (Manual Entry)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Manual Formula FX" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Non-Compliant with MTD" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "High Audit & Fine Risk" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UK MONTHLY BOOKKEEPING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Professional Monthly UK Bookkeeping Service" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages cloud bookkeeping, multi-currency bank reconciliations, receipt management, and Making Tax Digital (MTD) setup for non-resident UK directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/bookkeeping", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore UK Bookkeeping Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "cloud-accounting", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Cloud Accounting Setup for Overseas Founders" }),
        /* @__PURE__ */ jsx("p", { children: "Adopting modern cloud accounting software is mandatory for seamless remote management:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Calculator, { className: "text-gold-600", size: 18 }),
              "Xero Cloud Accounting"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Offers direct automated bank feeds with Wise Business and Revolut, multi-currency ledger support, and seamless MTD VAT integration." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Receipt, { className: "text-navy-950", size: 18 }),
              "QuickBooks Online"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Provides automated receipt snapping, mobile invoicing, and real-time profit and loss tracking for overseas founders." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 6 Critical Common Bookkeeping Mistakes to Avoid" }),
        /* @__PURE__ */ jsx("p", { children: "Avoid these six frequent bookkeeping errors:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Commingling Personal & Corporate Funds"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Using personal credit cards for business expenses or withdrawing company money without documentation breaches corporate veil protections." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Failing to Archive Receipts for 6 Years"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Failing to maintain digital copies of expense receipts for 6 years results in HMRC disallowing deduction claims during audits." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "directors-loan-account", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. Avoiding Director's Loan Account (DLA) Tax Pitfalls" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If a director withdraws company money that is NOT classified as salary, dividend, or expense reimbursement, it is treated as a ",
          /* @__PURE__ */ jsx("strong", { children: "Director's Loan" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If a Director's Loan Account remains overdrawn by more than £10,000 at year-end and is not repaid within 9 months and 1 day of your accounting period end, HMRC charges a ",
          /* @__PURE__ */ jsx("strong", { children: "Section 455 tax surcharge of 33.75%" }),
          " on the overdrawn balance."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "UK MONTHLY BOOKKEEPING SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Outsource Your UK Bookkeeping to ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Dedicated cloud bookkeeping, multi-currency reconciliations, receipt archiving, and HMRC audit compliance for non-resident directors." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/bookkeeping", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK Bookkeeping Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
