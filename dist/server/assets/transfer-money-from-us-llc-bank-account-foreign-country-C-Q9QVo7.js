import { jsxs, jsx } from "react/jsx-runtime";
import { A as faqs } from "./router-GP5y7m1q.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Globe2, ArrowUpRight, DollarSign, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "How to Transfer Funds from a US LLC Bank Account to Foreign Personal Accounts" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive financial guide masterclass for foreign non-resident founders on legal profit extraction, Owner's Draws, SWIFT wire transfers, Wise FX optimization, and home country tax reporting." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Accounting Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "16 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "International Remittance & IRS Compliance" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Profit Transfer Key Rules" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Owner's Draw Legal Status" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: `Transfers from an LLC to a foreign member are classified as "Owner's Draws" (equity distributions), NOT payroll salaries.` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "0% US Withholding Tax" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "For foreign non-residents with no US physical presence, there is zero US withholding tax on profit distributions." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Best Transfer Route" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Linking Mercury or Relay Bank with Wise Business provides mid-market exchange rates to local currencies (PKR, AED, EUR)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Home Country Taxes" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Profit draws must be declared on your personal home country tax return (e.g. FBR in Pakistan)." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#owners-draw", className: "hover:text-gold-600 underline", children: "1. What Is an Owner's Draw for a Non-Resident US LLC?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#transfer-methods", className: "hover:text-gold-600 underline", children: "2. Top 3 Money Transfer Methods (Mercury, Wise, SWIFT)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#remittance-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive International Remittance Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#us-tax-implications", className: "hover:text-gold-600 underline", children: "4. US Tax & Withholding Rules on Profit Distributions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#home-country-reporting", className: "hover:text-gold-600 underline", children: "5. Home Country Tax Compliance & Foreign Remittance" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bookkeeping-records", className: "hover:text-gold-600 underline", children: "6. Bookkeeping & Record Keeping for Owner Distributions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "owners-draw", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What Is an Owner's Draw for a Non-Resident US LLC?" }),
        /* @__PURE__ */ jsx("p", { children: "When you own a single-member or multi-member US LLC, you do not receive a standard US W-2 employee salary because foreign owners residing outside the US lack US employment authorization." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Instead, when you transfer money from your US LLC bank account to your personal bank account abroad, the transaction is legally categorized as an ",
          /* @__PURE__ */ jsx("strong", { children: "Owner's Draw" }),
          " (or Member Capital Distribution). An Owner's Draw represents an equity distribution of profits from the business entity to its equity holder."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "transfer-methods", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Top 3 Money Transfer Methods (Mercury, Wise, SWIFT)" }),
        /* @__PURE__ */ jsx("p", { children: "Foreign owners utilize three primary international remittance channels to transfer US LLC funds overseas:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-600 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Globe2, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Wise Business FX" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Cheapest & fastest. Converts USD to PKR/AED/EUR at real mid-market exchange rates and deposits directly into local personal bank accounts." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-navy-950 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Mercury SWIFT Wire" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Mercury offers free international USD wires. Best for transferring large lump sums directly to foreign USD currency accounts." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-emerald-700 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(DollarSign, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Payoneer / Revolut" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Great alternative for multi-currency payout management, global contractor payments, and card withdrawals." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "remittance-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive International Remittance Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of remittance methods:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Remittance Channel" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Transfer Fee" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Exchange Rate Margin" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Delivery Speed" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Mercury Bank + Wise FX" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "$0 ACH + Low Wise Fee" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Real Mid-Market Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "1 to 24 Hours" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Mercury SWIFT International Wire" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "$0 Outgoing Wire Fee" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Foreign Intermediary Bank Spread" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "1 to 3 Business Days" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Traditional US Bank Wire" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "$40 - $50 per wire" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "2.5% - 4.0% Bank FX Spread" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "2 to 5 Business Days" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "us-tax-implications", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. US Tax & Withholding Rules on Profit Distributions" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under US Internal Revenue Code regulations (26 CFR § 1.1446-1), single-member foreign-owned LLCs operating as Disregarded Entities incur ",
          /* @__PURE__ */ jsx("strong", { children: "0% US federal withholding tax" }),
          " on profit distributions transferred abroad, provided the LLC has zero US physical presence and zero effectively connected income (ETBUS)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US BUSINESS BANKING & TAX SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Optimize Your US Profit Remittances with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ assists foreign founders with compliant bookkeeping, Owner's Draw records, IRS Form 5472 filings, and Mercury bank setups." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/mercury-bank-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Banking & Tax Advisory ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "home-country-reporting", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Home Country Tax Compliance & Foreign Remittance" }),
        /* @__PURE__ */ jsx("p", { children: "While US tax on non-resident profit draws is zero, you must report international bank wire receipts on your local home country tax return (e.g. FBR in Pakistan, HMRC in UK, or local tax authorities)." }),
        /* @__PURE__ */ jsx("p", { children: "Preserving bank wire transfer receipts and invoice ledgers protects non-resident founders during local tax audits and proves foreign remittance origin." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "bookkeeping-records", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Bookkeeping & Record Keeping for Owner Distributions" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Always record every profit withdrawal in QuickBooks or Xero under an equity account named ",
          /* @__PURE__ */ jsx("strong", { children: `"Owner's Draw"` }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Maintaining strict separation between business operational expenses and personal distributions prevents co-mingling of funds and preserves your LLC's limited liability corporate shield (preventing piercing of the corporate veil)." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US REMITTANCE & TAX SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Manage Your US LLC Finances with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Mercury business banking setup, IRS Form 5472 tax compliance, and multi-currency foreign remittance advisory handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/mercury-bank-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order US Banking Advisory" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
