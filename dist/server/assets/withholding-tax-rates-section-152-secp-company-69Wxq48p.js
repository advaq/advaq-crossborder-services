import { jsxs, jsx } from "react/jsx-runtime";
import { c as faqs } from "./router-Bt8yfDuo.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, ArrowRight, Check, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "Pakistan Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Withholding Tax (WHT) Rates & Filings in Pakistan for Companies (Section 153/152)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive withholding tax compliance masterclass for corporate finance leads, CFOs, and business owners on FBR WHT rates under Section 153, foreign payments under Section 152, quarterly Form 165 statements, and CPR deposit receipts." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Pakistan Corporate Tax Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "12 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Income Tax Ordinance 2001 Section 153/152" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "WHT Corporate Statutory Mandate" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Withholding Agent Status" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Every SECP Private Limited company is legally designated as a Statutory Withholding Agent under Section 153." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Section 153 (Local Payments)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Deduct WHT on vendor payments for goods, IT services, and contracts. Deposit via CPR within 7 days." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Section 152 (Foreign Payments)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Deduct WHT on payments to non-resident foreign software vendors unless covered by Double Tax Treaties." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Quarterly Form 165 Statements" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "File electronic withholding tax statements on FBR Iris 2.0 every 3 months to avoid Section 161 penalties." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#withholding-agent-role", className: "hover:text-gold-600 underline", children: "1. The Role of SECP Companies as Statutory Withholding Agents" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#section-153-rates", className: "hover:text-gold-600 underline", children: "2. Section 153 WHT Rates (Goods, Services, Contracts)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#section-152-foreign", className: "hover:text-gold-600 underline", children: "3. Section 152 WHT on Payments to Foreign Non-Residents" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#quarterly-form-165", className: "hover:text-gold-600 underline", children: "4. Submitting Quarterly Withholding Tax Statements (Form 165)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#section-21c-disallowance", className: "hover:text-gold-600 underline", children: "5. Avoiding Expense Disallowance under Section 21(c)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#audit-defense", className: "hover:text-gold-600 underline", children: "6. Section 161 Audit Defense & Default Surcharge Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "withholding-agent-role", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. The Role of SECP Companies as Statutory Withholding Agents" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Section 153 of the ",
          /* @__PURE__ */ jsx("strong", { children: "Income Tax Ordinance 2001" }),
          ", all SECP registered companies automatically operate as ",
          /* @__PURE__ */ jsx("strong", { children: "Withholding Tax Agents" }),
          " for the Federal Board of Revenue (FBR)."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "When making payments to suppliers, IT vendors, contractors, landlords, or foreign software platforms, companies must deduct the statutory tax percentage at source and deposit it into the Federal Treasury via a Computerized Payment Receipt (CPR) within 7 days." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "section-153-rates", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Section 153 WHT Rates (Goods, Services, Contracts)" }),
        /* @__PURE__ */ jsx("p", { children: "Statutory withholding rates vary based on whether the vendor is an Active Filer or Non-Filer on FBR's Active Taxpayer List (ATL):" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Payment Transaction Head" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-500 font-bold", children: "Active Filer WHT Rate (ATL)" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-red-400 font-bold", children: "Non-Filer Penalty WHT Rate" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "IT & IT-Enabled Services (Section 153(1)(b))" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "3% WHT Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-700 font-bold", children: "6% WHT Rate" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "General Services (Consulting, Marketing)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "8% to 11%" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-700 font-bold", children: "16% to 22%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Sale / Supply of Goods" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "4% to 5%" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-700 font-bold", children: "8% to 10%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Execution of Contracts" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "7% to 8%" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-700 font-bold", children: "14% to 16%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Rent of Immovable Property (Section 155)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "15% on excess rent" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-700 font-bold", children: "30% (Doubled Rate)" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "CORPORATE WHT COMPLIANCE SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Manage Corporate Withholding Tax with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ calculates vendor WHT deductions, generates CPR payment receipts, files quarterly Form 165 statements, and protects against Section 161 tax audits." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/withholding-compliance", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Withholding Tax Advisory ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "section-152-foreign", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Section 152 WHT on Payments to Foreign Non-Residents" }),
        /* @__PURE__ */ jsx("p", { children: "When a Pakistani company pays foreign offshore vendors for cloud software (AWS, Azure), international digital ads (Meta, Google), or overseas consulting under Section 152:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Standard Foreign WHT Rate:" }),
              " Payments to non-residents attract a standard 15% to 20% withholding tax unless covered by a Double Taxation Treaty (DTAA)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "FBR Exemption Certificate:" }),
              " Companies can apply for an FBR Exemption Certificate under Section 152(5) if the foreign vendor has no Permanent Establishment (PE) in Pakistan."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "section-21c-disallowance", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Avoiding Expense Disallowance under Section 21(c)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The single greatest financial threat during an FBR corporate audit is ",
          /* @__PURE__ */ jsx("strong", { children: "Section 21(c) Expense Disallowance" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-900 font-semibold text-sm mb-1", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Section 21(c) Audit Risk:" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-red-900 text-xs leading-relaxed", children: [
            "If a company pays a vendor PKR 10,000,000 for IT services but fails to deduct and deposit Section 153 withholding tax, FBR tax auditors will completely ",
            /* @__PURE__ */ jsx("strong", { children: "disallow the PKR 10,000,000 expense" }),
            ", adding it back to corporate net income and levying 29% corporate tax (PKR 2,900,000 tax penalty) plus default surcharge."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "PAKISTAN CORPORATE WHT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Ensure 100% Withholding Tax Compliance" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Section 153 & 152 WHT calculation, CPR payment generation, quarterly Form 165 Iris filings, and Section 161 audit defense handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/withholding-compliance", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Withholding Tax Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
