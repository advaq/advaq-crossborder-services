import { jsxs, jsx } from "react/jsx-runtime";
import { p as faqs } from "./router-B1vRwgby.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, FolderCheck, Check, ArrowRight, Calculator, Receipt, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive accounting standards guide for foreign directors on statutory 6-year record retention, foreign exchange currency conversions, cloud software integration, and HMRC audit readiness." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Accounting Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Companies Act Section 386 Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Bookkeeping Rules at a Glance" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "6-Year Record Retention:" }),
            " HMRC requires private UK companies to keep all bank statements, invoices, and expense receipts for at least 6 years."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "GBP Base Currency:" }),
            " Accounts must be prepared in British Pounds (GBP). Foreign currency transactions (USD, EUR, PKR) are converted using spot or HMRC monthly FX rates."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Strict Banking Separation:" }),
            " Never commingle personal and corporate funds to prevent Director's Loan Account (DLA) tax surcharges."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Cloud Software Sync:" }),
            " Integrate Wise/Payoneer bank feeds directly with Xero or QuickBooks for Making Tax Digital (MTD) compliance."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#section-386-duty", className: "hover:text-gold-600 underline", children: "1. Statutory Duty to Keep Accounting Records (Section 386)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#6-year-rule", className: "hover:text-gold-600 underline", children: "2. The 6-Year HMRC Record Retention Mandate" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#multi-currency-forex", className: "hover:text-gold-600 underline", children: "3. Managing Multi-Currency FX Transactions (USD/EUR/PKR)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#cloud-accounting", className: "hover:text-gold-600 underline", children: "4. Cloud Accounting Setup for Overseas Founders" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#directors-loan-account", className: "hover:text-gold-600 underline", children: "5. Avoiding Director's Loan Account (DLA) Tax Pitfalls" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "section-386-duty", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Statutory Duty to Keep Accounting Records (Section 386)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Section 386 of the ",
          /* @__PURE__ */ jsx("em", { children: "Companies Act 2006" }),
          ", every UK company must keep accounting records that are sufficient to show and explain the company's transactions."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The records must disclose with reasonable accuracy, at any time, the financial position of the company and enable the directors to ensure that statutory accounts comply with UK accounting standards." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "6-year-rule", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. The 6-Year HMRC Record Retention Mandate" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "HMRC enforces a strict ",
          /* @__PURE__ */ jsx("strong", { children: "6-year record retention rule" }),
          " starting from the end of the relevant accounting period."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-900 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FolderCheck, { className: "text-gold-500", size: 20 }),
            "What Digital Documents Must Be Archived:"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Sales Invoices & Receipts:" }),
                " All outgoing client invoices and proof of customer payments."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Supplier Bills & SaaS Receipts:" }),
                " Bills for web hosting, software subscriptions, advertising spend, and contractor fees."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Bank Statements:" }),
                " Monthly PDF bank statements for all UK and multi-currency accounts (Wise, Payoneer, Revolut)."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Contracts & Agreements:" }),
                " Client contracts, Master Service Agreements, and contractor statements of work."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "multi-currency-forex", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Managing Multi-Currency FX Transactions (USD/EUR/PKR)" }),
        /* @__PURE__ */ jsx("p", { children: "Non-resident UK companies frequently receive payments in USD or EUR and pay remote contractor expenses in local currencies like PKR or AED." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Because UK statutory accounts must be submitted in ",
          /* @__PURE__ */ jsx("strong", { children: "British Pounds (GBP)" }),
          ", foreign currency transactions must be translated using spot exchange rates on the date of transaction or official HMRC monthly average exchange rates."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UK MONTHLY BOOKKEEPING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Professional Monthly UK Bookkeeping Service" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages cloud bookkeeping, multi-currency bank reconciliations, receipt management, and Making Tax Digital (MTD) setup for non-resident UK directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/bookkeeping", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore UK Bookkeeping Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "cloud-accounting", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Cloud Accounting Setup for Overseas Founders" }),
        /* @__PURE__ */ jsx("p", { children: "Adopting modern cloud accounting software is mandatory for seamless remote management:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-gold-500 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Calculator, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Xero Cloud Accounting" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Offers direct automated bank feeds with Wise Business and Revolut, multi-currency ledger support, and seamless MTD VAT integration." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-navy-700 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Receipt, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "QuickBooks Online" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Provides automated receipt snapping, mobile invoicing, and real-time profit and loss tracking for overseas founders." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "directors-loan-account", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Avoiding Director's Loan Account (DLA) Tax Pitfalls" }),
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
