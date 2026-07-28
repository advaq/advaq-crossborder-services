import { jsxs, jsx } from "react/jsx-runtime";
import { L as faqs } from "./router-CT0t7Dw0.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, ArrowRight, FileText, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "State Bank of Pakistan (SBP) Form R & Foreign Remittances Guide for Software Houses" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A practical foreign exchange compliance masterclass for Pakistani software houses, IT agencies, and SaaS founders on State Bank of Pakistan (SBP) Form R processing, purpose code selection, and Proceed Realization Certificate (PRC) management under SBP FE Manual rules." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Foreign Exchange Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "11 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "State Bank of Pakistan FE Manual Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "SBP Remittance Essentials" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Form R Declaration Mandate" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Electronic declaration processed by commercial bank FOREX desks whenever foreign currency (USD, EUR, GBP) is credited to a Pakistani account." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Key SBP IT Purpose Codes" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Code 9186 (Software Consultancy), Code 9187 (Software Export), and Code 9188 (Data Processing & Hosting)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Electronic e-PRC Certificates" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Digital proof of foreign currency realization required to claim 0.25% Section 154A IT export tax credits during FBR audits." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Merchant Payout Realization" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Payoneer, Wise, and Stripe payouts must be tagged under IT export purpose codes to unlock 50% FCVA dollar retention." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-form-r", className: "hover:text-gold-600 underline", children: "1. What Is SBP Form R & How Banking Systems Process Inflows" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#sbp-purpose-codes", className: "hover:text-gold-600 underline", children: "2. Official SBP Purpose Codes for IT & Software Exports" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#eprc-issuance", className: "hover:text-gold-600 underline", children: "3. Electronic Proceed Realization Certificates (e-PRC)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#third-party-payouts", className: "hover:text-gold-600 underline", children: "4. Managing Payoneer, Wise & Stripe Remittances" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fcva-link", className: "hover:text-gold-600 underline", children: "5. Linking Form R Realization to SBP 50% FCVA Accounts" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#banking-errors", className: "hover:text-gold-600 underline", children: "6. Common Banking Errors & FBR Audit Risks" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-form-r", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What Is SBP Form R & How Banking Systems Process Inflows" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In Pakistan's foreign exchange ecosystem regulated by the ",
          /* @__PURE__ */ jsx("strong", { children: "State Bank of Pakistan (SBP)" }),
          " under Chapter 14 of the Foreign Exchange Manual, every incoming international wire transfer must be declared through ",
          /* @__PURE__ */ jsx("strong", { children: "Form R (Remittance Form)" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "When a foreign client wire transfers funds from the US, UK, EU, or UAE, your commercial bank's Foreign Exchange (FOREX) department acts as an Authorized Dealer. The bank requires the account holder to declare the precise nature and purpose of the incoming funds." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "sbp-purpose-codes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Official SBP Purpose Codes for IT & Software Exports" }),
        /* @__PURE__ */ jsx("p", { children: "Tagging foreign wire transfers under the correct SBP Purpose Code is the single most critical step in safeguarding your company's IT export tax status:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "SBP Purpose Code" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Official SBP Description" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Eligible Services & Business Activities" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Code 9186" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Software Consultancy Services" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "IT consulting, software architecture, tech advisory, system integration." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Code 9187" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Computer Software Export" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Custom software development, mobile app coding, web development, SaaS subscriptions." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Code 9188" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Data Processing & Hosting Services" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Cloud hosting, database management, data entry, DevOps, infrastructure management." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Code 9189" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Other IT & Call Center Services" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Inbound/outbound call center operations, BPO, virtual assistant services, digital marketing." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "SBP REMITTANCE & BANKING ADVISORY" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Optimize Your IT Remittances with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ assists software houses with bank Form R tagging, e-PRC collection, Payoneer/Wise proceeds realization, and 50% FCVA account management." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/pseb-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Remittance Advisory Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "eprc-issuance", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Electronic Proceed Realization Certificates (e-PRC)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "An ",
          /* @__PURE__ */ jsx("strong", { children: "Electronic Proceed Realization Certificate (e-PRC)" }),
          " is an official digital record issued by commercial banks in Pakistan upon realizing foreign exchange funds:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { size: 18 }),
            "Mandatory Fields on a Valid e-PRC:"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: [
            "1. ",
            /* @__PURE__ */ jsx("strong", { children: "Beneficiary Details:" }),
            " Company Name & 7-digit Corporate NTN / CNIC.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "2. ",
            /* @__PURE__ */ jsx("strong", { children: "Remitter Details:" }),
            " Foreign Client Name & Foreign Bank Country.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "3. ",
            /* @__PURE__ */ jsx("strong", { children: "Financial Data:" }),
            " Foreign Currency Amount (USD), Conversion Exchange Rate, & Equivalent PKR Realized.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "4. ",
            /* @__PURE__ */ jsx("strong", { children: "SBP Purpose Code:" }),
            " Explicit SBP Purpose Code (e.g. 9186 or 9187)."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "third-party-payouts", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Managing Payoneer, Wise & Stripe Remittances" }),
        /* @__PURE__ */ jsx("p", { children: "Thousands of Pakistani software houses and IT freelancers receive client payments via third-party fintech platforms such as Payoneer, Wise, Stripe, or Upwork." }),
        /* @__PURE__ */ jsx("p", { children: 'When withdrawing funds from Payoneer or Wise to your Pakistani commercial bank account (Meezan, HBL, Bank Alfalah), banks sometimes default to tagging incoming transfers as "Personal Inward Remittance" (Purpose Code 9999).' }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-900 font-semibold text-sm mb-1", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "How to Fix Fintech Payout Tagging:" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-amber-900 text-xs leading-relaxed", children: "To preserve your 0.25% Section 154A IT export tax credit, submit your Payoneer/Wise withdrawal invoice and client contract to your bank FOREX officer, requesting that the incoming remittance be tagged under Purpose Code 9187 with an e-PRC issued accordingly." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "SBP FOREIGN EXCHANGE SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Secure Your SBP e-PRC Certificates" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Form R compliance, SBP purpose code tagging, e-PRC collection, and 0.25% FBR tax return filing." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/pseb-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order SBP Remittance Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
