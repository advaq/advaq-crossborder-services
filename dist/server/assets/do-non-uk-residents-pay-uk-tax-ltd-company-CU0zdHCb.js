import { jsxs, jsx } from "react/jsx-runtime";
import { aA as faqs } from "./router-BQ-EE0Jb.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Briefcase, Calculator, ArrowRight, AlertTriangle, Receipt, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive tax compliance masterclass for foreign directors and shareholders on UK Corporation Tax, dividend withholding exemptions, HMRC filing rules, and Double Tax Treaties in 2026." }),
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
            /* @__PURE__ */ jsx("span", { children: "HMRC & International Tax Treaty Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Key Takeaways (TL;DR)" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: "Understanding UK tax obligations for foreign non-resident company owners:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Company Level: Taxable in UK" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "The UK Limited Company pays ",
            /* @__PURE__ */ jsx("strong", { children: "19% to 25% Corporation Tax" }),
            " to HMRC on profits earned worldwide, regardless of director residency."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Shareholder Level: 0% UK Withholding" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "The UK imposes ",
            /* @__PURE__ */ jsx("strong", { children: "0% Dividend Withholding Tax (WHT)" }),
            ". Foreign shareholders receive 100% of dividends and pay tax locally in their home country."
          ] })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#corp-tax", className: "hover:text-gold-600 underline", children: "1. UK Corporation Tax Rates for 2026" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#dividend-rules", className: "hover:text-gold-600 underline", children: "2. Dividend Taxation for Non-Resident Shareholders" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#salary-vs-dividend", className: "hover:text-gold-600 underline", children: "3. Salary vs Dividends: Tax-Efficient Profit Extraction" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tax-matrix", className: "hover:text-gold-600 underline", children: "4. Comprehensive UK Tax Liability Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#double-taxation", className: "hover:text-gold-600 underline", children: "5. Double Taxation Treaties (DTT) & Relief" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "6. 6 Critical Common Tax Mistakes Overseas Directors Make" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#hmrc-filing", className: "hover:text-gold-600 underline", children: "7. Annual HMRC Filing Deadlines for Non-Residents" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "corp-tax", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. UK Corporation Tax Rates for 2026" }),
        /* @__PURE__ */ jsx("p", { children: "Because a UK Limited Company is a distinct corporate entity incorporated under UK law, HM Revenue & Customs (HMRC) exercises tax jurisdiction over the company's net profits worldwide." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The physical residency of the company's directors or shareholders does ",
          /* @__PURE__ */ jsx("strong", { children: "not" }),
          " exempt the corporate entity from UK Corporation Tax."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Tax Scenario"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Consider Hamza, a software agency founder in Pakistan operating a UK LTD. In 2026, Hamza's company generates £40,000 in net profit after software expenses. Because the net profit is under £50,000, his company pays the 19% Small Profits Rate (£7,600) to HMRC, leaving £32,400 in post-tax retained earnings for dividend payouts." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Calculator, { className: "text-gold-600", size: 20 }),
            "2026 UK Corporation Tax Bands:"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 text-xs", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-border text-center shadow-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-bold text-emerald-600 text-xl", children: "19%" }),
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block mt-1", children: "Small Profits Rate" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-1", children: "Net profits up to £50,000" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-border text-center shadow-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-bold text-gold-600 text-xl", children: "Marginal Relief" }),
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block mt-1", children: "Sliding Scale Rate" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-1", children: "Profits between £50k and £250k" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-border text-center shadow-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-bold text-navy-950 text-xl", children: "25%" }),
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block mt-1", children: "Main Rate" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-1", children: "Net profits exceeding £250,000" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "dividend-rules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Dividend Taxation for Non-Resident Shareholders" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Once a UK Limited Company pays its Corporation Tax on net profits, remaining post-tax profits can be distributed to company shareholders as ",
          /* @__PURE__ */ jsx("strong", { children: "dividends" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "One of the greatest advantages of the UK tax framework for overseas investors is that ",
          /* @__PURE__ */ jsx("strong", { children: "the UK imposes ZERO Dividend Withholding Tax (WHT)" }),
          " on dividends paid to non-resident shareholders."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-xs text-emerald-900 my-6 space-y-2", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-sm font-bold text-emerald-950 block", children: "0% Withholding Tax Advantage:" }),
          /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "If your UK company issues a £10,000 dividend to an overseas shareholder in Pakistan, UAE, or the US, the full £10,000 is transferred without any UK tax deduction at source. Foreign shareholders declare and pay tax on dividends in their home country according to local laws." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "salary-vs-dividend", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Salary vs Dividends: Tax-Efficient Profit Extraction" }),
        /* @__PURE__ */ jsx("p", { children: "Foreign directors often evaluate drawing a salary versus issuing dividends:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-base mb-1", children: "Option A: Taking Dividends (Recommended for Non-Residents)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Dividends are distributed from post-corporation tax profits. Zero UK National Insurance (NIC) or PAYE withholding tax applies to non-residents." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-base mb-1", children: "Option B: Director Salary (PAYE Payroll)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Paying a salary requires setting up a UK PAYE scheme with HMRC. While salary acts as a tax-deductible expense for Corporation Tax, it may trigger UK Income Tax and National Insurance liabilities if work is physically performed inside the UK." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "tax-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Comprehensive UK Tax Liability Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed legal comparison of UK tax obligations for foreign non-resident directors:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Tax Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Applicable Tax Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Non-Resident Withholding" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "HMRC Filing Requirement" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "UK Corporation Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "19% to 25% on Net Profit" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Paid by Company in UK" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Annual CT600 Return" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Dividend Distributions" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% UK Withholding Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% Deducted at Source" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Declare in Home Country" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Director Salary (PAYE)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "20% to 45% (If UK Sourced)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "PAYE Deducted via Payroll" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Monthly Real Time Information (RTI)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "UK Value Added Tax (VAT)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "20% Standard Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Applies over £90k UK Sales" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Quarterly VAT Returns" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "HMRC TAX COMPLIANCE & FILING" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "HMRC Corporation Tax Return Service" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages complete HMRC Corporation Tax Returns (CT600), statutory annual accounts (iXBRL format), and Companies House filings for non-resident directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/corporation-tax-return", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore HMRC Tax Filing Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "double-taxation", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Double Taxation Treaties (DTT) & Relief" }),
        /* @__PURE__ */ jsx("p", { children: "The UK maintains bilateral Double Taxation Treaties with over 130 countries globally (including Pakistan, UAE, USA, and EU member states)." }),
        /* @__PURE__ */ jsx("p", { children: "These international treaties ensure foreign company owners are not taxed twice on the same corporate income. Corporation tax paid in the UK can be offset as a foreign tax credit in jurisdictions that tax overseas company earnings." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 6 Critical Common Tax Mistakes Overseas Directors Make" }),
        /* @__PURE__ */ jsx("p", { children: "Avoid these six frequent corporate tax errors:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Assuming Overseas Residence Exempts the UK LTD"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Believing foreign director residency cancels UK Corporation Tax liabilities results in severe HMRC financial penalties." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Drawing Unlawful Dividends Prior to Corp Tax Calculations"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Taking dividends in excess of actual post-tax retained profits causes HMRC to reclassify withdrawals as director loans subject to Section 455 tax penalties (33.75%)." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "hmrc-filing", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. Annual HMRC Filing Deadlines for Non-Residents" }),
        /* @__PURE__ */ jsx("p", { children: "Every UK Limited Company must satisfy two annual statutory filing deadlines:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-off-white p-5 rounded-2xl border border-border text-sm", children: [
            /* @__PURE__ */ jsx(Receipt, { className: "text-gold-600 shrink-0 mt-0.5", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-bold", children: "Companies House Annual Accounts:" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Due 9 months after your financial year-end." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-off-white p-5 rounded-2xl border border-border text-sm", children: [
            /* @__PURE__ */ jsx(Receipt, { className: "text-gold-600 shrink-0 mt-0.5", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-bold", children: "HMRC CT600 Corporation Tax Return:" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Due 12 months after your accounting period ends (tax payment due at 9 months & 1 day)." })
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
