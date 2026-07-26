import { jsxs, jsx } from "react/jsx-runtime";
import { az as faqs } from "./router-DZ5LLfdT.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, Calculator, ArrowRight, Receipt, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Do Non-UK Residents Pay UK Taxes on LTD Company Income? (2026 Rules)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A definitive tax compliance guide for foreign directors and shareholders on UK Corporation Tax, dividend withholding exemptions, HMRC filing rules, and Double Tax Treaties." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal & Tax Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "HMRC & Tax Treaty Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Key Takeaways (TL;DR)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Company Level: Taxable in UK" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "The UK Limited Company pays ",
            /* @__PURE__ */ jsx("strong", { children: "19% to 25% Corporation Tax" }),
            " to HMRC on profits earned worldwide, regardless of director residency."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Shareholder Level: 0% UK Withholding" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "The UK has ",
            /* @__PURE__ */ jsx("strong", { children: "0% Dividend Withholding Tax (WHT)" }),
            ". Foreign shareholders receive 100% of dividends and pay tax locally in their country of residence."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#corp-tax", className: "hover:text-gold-600 underline", children: "1. UK Corporation Tax Rates for 2026" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#dividend-rules", className: "hover:text-gold-600 underline", children: "2. Dividend Taxation for Non-Resident Shareholders" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#salary-vs-dividend", className: "hover:text-gold-600 underline", children: "3. Salary vs Dividends: Tax-Efficient Profit Extraction" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#double-taxation", className: "hover:text-gold-600 underline", children: "4. Double Taxation Treaties (DTT) & Relief" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#hmrc-filing", className: "hover:text-gold-600 underline", children: "5. Annual HMRC Filing Deadlines for Non-Resident Companies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "corp-tax", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. UK Corporation Tax Rates for 2026" }),
        /* @__PURE__ */ jsx("p", { children: "Because a UK Limited Company is an independent legal entity incorporated under UK law, HM Revenue & Customs (HMRC) exercises tax jurisdiction over the company's net profits." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The residency of the company's directors or shareholders does ",
          /* @__PURE__ */ jsx("strong", { children: "not" }),
          " exempt the corporate entity from UK Corporation Tax."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-900 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Calculator, { className: "text-gold-500", size: 20 }),
            "2026 UK Corporation Tax Bands:"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 text-xs", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-border text-center", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-bold text-emerald-600 text-lg", children: "19%" }),
              /* @__PURE__ */ jsx("strong", { className: "text-dark-text block mt-1", children: "Small Profits Rate" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-1", children: "For annual net profits up to £50,000." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-border text-center", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-bold text-gold-600 text-lg", children: "Marginal Relief" }),
              /* @__PURE__ */ jsx("strong", { className: "text-dark-text block mt-1", children: "Sliding Scale" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-1", children: "For profits between £50,000 and £250,000." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-border text-center", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-bold text-navy-900 text-lg", children: "25%" }),
              /* @__PURE__ */ jsx("strong", { className: "text-dark-text block mt-1", children: "Main Rate" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-1", children: "For annual net profits exceeding £250,000." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "dividend-rules", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Dividend Taxation for Non-Resident Shareholders" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Once a UK Limited Company pays its Corporation Tax on net profits, remaining post-tax profits can be distributed to company shareholders as ",
          /* @__PURE__ */ jsx("strong", { children: "dividends" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "One of the greatest advantages of the UK tax system for overseas investors is that ",
          /* @__PURE__ */ jsx("strong", { children: "the UK imposes ZERO Dividend Withholding Tax (WHT)" }),
          " on dividends paid to non-resident shareholders."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-50 border border-emerald-200 p-5 rounded-xl text-sm text-emerald-900 my-4", children: [
          /* @__PURE__ */ jsx("strong", { children: "Key Benefit:" }),
          " If your UK company issues a £10,000 dividend to a non-resident shareholder in Pakistan, UAE, or USA, the full £10,000 is remitted without any UK tax deduction at source. You simply declare the income in your country of tax residence."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "salary-vs-dividend", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Salary vs Dividends: Tax-Efficient Profit Extraction" }),
        /* @__PURE__ */ jsx("p", { children: "Foreign directors often ask whether they should draw a salary or take dividends from their UK company:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-4 rounded-xl bg-white text-sm", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-900 block text-base mb-1", children: "Option A: Taking Dividends (Recommended for Non-Residents)" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Dividends are paid from post-corporation tax profits. No UK National Insurance (NIC) or PAYE tax withholding applies." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-4 rounded-xl bg-white text-sm", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-900 block text-base mb-1", children: "Option B: Director Salary (PAYE Payroll)" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Paying a salary requires registering a UK PAYE scheme with HMRC. Salary counts as a tax-deductible expense for Corporation Tax, but may subject the director to UK Income Tax and National Insurance if work is performed in the UK." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "HMRC TAX COMPLIANCE & FILING" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "HMRC Corporation Tax Return Service" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages complete HMRC Corporation Tax Returns (CT600), statutory annual accounts (IXBRL format), and Companies House filings for non-resident directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/corporation-tax-return", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Corporation Tax Filing Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "double-taxation", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Double Taxation Treaties (DTT) & Relief" }),
        /* @__PURE__ */ jsx("p", { children: "The UK has signed bilateral Double Taxation Treaties with over 130 countries worldwide." }),
        /* @__PURE__ */ jsx("p", { children: "These tax treaties ensure that international business owners do not pay tax twice on the same corporate earnings. Corporation tax paid in the UK can be offset as a foreign tax credit in jurisdictions that tax foreign entity profits." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "hmrc-filing", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Annual HMRC Filing Deadlines for Non-Resident Companies" }),
        /* @__PURE__ */ jsx("p", { children: "Every UK Limited Company must fulfill two major statutory filing obligations annually:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-off-white p-4 rounded-xl border border-border text-sm", children: [
            /* @__PURE__ */ jsx(Receipt, { className: "text-gold-500 shrink-0 mt-0.5", size: 18 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Companies House Annual Accounts:" }),
              " Due 9 months after your financial year-end."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-off-white p-4 rounded-xl border border-border text-sm", children: [
            /* @__PURE__ */ jsx(Receipt, { className: "text-gold-500 shrink-0 mt-0.5", size: 18 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "HMRC CT600 Corporation Tax Return:" }),
              " Due 12 months after your accounting period ends (tax payment due at 9 months and 1 day)."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "HMRC TAX COMPLIANCE & ADVISORY" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "File Your UK Corporation Tax Return with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "HMRC-registered corporate tax preparation, annual accounts filing, and double taxation treaty advice for non-resident directors." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/corporation-tax-return", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order HMRC Tax Return Filing" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
