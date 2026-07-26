import { jsxs, jsx } from "react/jsx-runtime";
import { aJ as faqs } from "./router-B1vRwgby.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Mercury vs Relay vs Wise for US LLCs: Which US Bank Account is Best for Foreigners?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive side-by-side banking analysis for non-resident founders comparing Mercury Bank, Relay Financial, and Wise Business on remote account opening, zero monthly fees, wire transfer rates, and Stripe integration." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Banking Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "9 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "FDIC Insured Banking Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "US Banking Verdict Summary" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Mercury Bank (#1 Choice)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Best overall for tech startups & agencies. FDIC insured up to $5M, $0 monthly fee, free USD wires, instant Stripe integration." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Relay Financial (Best Budgeting)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Best for e-commerce & multi-account allocation. Up to 20 checking accounts, team debit cards, zero monthly maintenance." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Wise Business (FX Payouts)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Best for mid-market currency exchanges & sending funds to local personal bank accounts in Pakistan, UAE, or Europe." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#mercury-review", className: "hover:text-gold-600 underline", children: "1. Mercury Bank: The #1 US Bank for Foreign Founders" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#relay-review", className: "hover:text-gold-600 underline", children: "2. Relay Financial: Multi-Account Management & Virtual Cards" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#wise-review", className: "hover:text-gold-600 underline", children: "3. Wise Business: Multi-Currency FX Powerhouse" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#banking-matrix", className: "hover:text-gold-600 underline", children: "4. Side-by-Side US Banking Comparison Table" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#kyc-approval-tips", className: "hover:text-gold-600 underline", children: "5. How to Guarantee Bank KYC Approval Without Rejection" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "mercury-review", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Mercury Bank: The #1 US Bank for Foreign Founders" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Mercury Bank" }),
          " (partnered with Choice Financial Group and Evolve Bank & Trust, Members FDIC) is the leading digital banking platform built specifically for startups and international business owners."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Mercury allows foreign non-residents to apply 100% online from their home country without visiting the US or having an SSN." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "relay-review", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Relay Financial: Multi-Account Management & Virtual Cards" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Relay Financial" }),
          " is another outstanding FDIC-insured US banking platform (partnered with Thread Bank) designed for small businesses."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Relay excels by allowing founders to create up to 20 individual checking accounts under one LLC entity and issue up to 50 physical or virtual Mastercard debit cards for team members." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "wise-review", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Wise Business: Multi-Currency FX Powerhouse" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Wise Business" }),
          " provides multi-currency account details in USD, GBP, EUR, CAD, and AUD under a single dashboard."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "While Wise is an MSB rather than a full US bank, its mid-market foreign exchange rates make it indispensable for converting US LLC profits into local personal currencies (PKR, AED, EUR)." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US BUSINESS BANKING ASSISTANCE" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Open Your US Business Bank Account Remotely" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares state incorporation documents, IRS EIN letters, and business descriptions to guarantee smooth onboarding with Mercury and Relay." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/mercury-bank-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore US Banking Assistance Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "banking-matrix", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Side-by-Side US Banking Comparison Table" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm border-collapse border border-border", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold", children: "Feature" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold text-gold-500", children: "Mercury Bank" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold", children: "Relay Financial" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold", children: "Wise Business" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-medium", children: "Monthly Service Fee" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "$0" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "$0" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "$0 ($31 one-time)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-medium", children: "FDIC Deposit Insurance" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "Yes (Up to $5M)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "Yes (Up to $3M)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border text-gray-500", children: "No (Safeguarded)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-medium", children: "Remote Non-Resident KYC" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "100% Online" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "100% Online" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "100% Online" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-medium", children: "Domestic & Int'l USD Wires" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "$0 Free Wires" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "$5 to $10" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "Low Mid-Market FX Fee" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "kyc-approval-tips", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. How to Guarantee Bank KYC Approval Without Rejection" }),
        /* @__PURE__ */ jsx("p", { children: "To prevent your bank application from being rejected:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Provide a working website or active LinkedIn business profile." }),
          /* @__PURE__ */ jsx("li", { children: "Ensure the company name on your IRS CP575 matches your Articles of Organization exactly." }),
          /* @__PURE__ */ jsx("li", { children: "Do not use generic shared Registered Agent addresses as your business address." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US BUSINESS BANKING SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Open Your US Bank Account with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Guaranteed KYC application preparation, CP575 verification, Operating Agreement drafting, and Mercury Bank onboarding." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/mercury-bank-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order US Banking Assistance" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
