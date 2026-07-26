import { jsxs, jsx } from "react/jsx-runtime";
import { c as faqs } from "./router-DZ5LLfdT.js";
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
          /* @__PURE__ */ jsx("span", { children: "UAE Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Wio Digital Bank vs Traditional UAE Banks: Best Business Account for Startups" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A head-to-head banking comparison evaluating Wio Business against traditional UAE banking giants (Emirates NBD, Mashreq, FAB) on onboarding speed, minimum balance rules, and FX transfer fees." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Banking Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "UAE Central Bank Licensed Digital Banking Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Wio vs Traditional Comparison Summary" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Wio Business (Digital)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Approve in 24–48 hours online. No physical branch visit. Multi-currency USD/EUR/AED accounts. $0 minimum balance subscription option." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Traditional Banks (ENBD / Mashreq)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Approve in 3–6 weeks. Requires physical meeting in Dubai. AED 25,000–50,000 minimum balance. Trade finance & cheque books included." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#digital-banking-revolution", className: "hover:text-gold-600 underline", children: "1. The UAE Business Banking Revolution" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#side-by-side-comparison", className: "hover:text-gold-600 underline", children: "2. Side-by-Side Comparison Table (Wio vs Emirates NBD vs Mashreq)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#wio-key-features", className: "hover:text-gold-600 underline", children: "3. Wio Business Features: Multi-Currency & Stripe Integration" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#traditional-bank-advantages", className: "hover:text-gold-600 underline", children: "4. When You Still Need a Traditional Physical Bank Account" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#verdict", className: "hover:text-gold-600 underline", children: "5. Recommendation for Startups, Agencies & E-commerce" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "digital-banking-revolution", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. The UAE Business Banking Revolution" }),
        /* @__PURE__ */ jsx("p", { children: "Historically, opening a business bank account in Dubai was notoriously slow, taking up to 2 months and requiring high minimum balance deposits." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The launch of ",
          /* @__PURE__ */ jsx("strong", { children: "Wio Bank" }),
          " (the UAE’s premier digital platform backed by First Abu Dhabi Bank and ADQ) transformed corporate onboarding, allowing Freezone and Mainland companies to open business accounts from their smartphones."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "side-by-side-comparison", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Side-by-Side Comparison Table (Wio vs Emirates NBD vs Mashreq)" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm border-collapse border border-border", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold", children: "Feature" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold text-gold-500", children: "Wio Business" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold", children: "Emirates NBD" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold", children: "Mashreq NEOBiz" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold", children: "Onboarding Time" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border text-emerald-600 font-bold", children: "24 – 48 Hours" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "3 – 6 Weeks" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "1 – 2 Weeks" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold", children: "Minimum Balance" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border text-emerald-600 font-bold", children: "$0 (AED 99/mo)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border text-red-600 font-bold", children: "AED 50,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "AED 10,000" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold", children: "Physical Interview" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "Not Required" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "Mandatory" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "Optional" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold", children: "Multi-Currency (USD/EUR)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "Instant Activation" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "Upon Request" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border", children: "Instant Activation" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "WIO BANK PARTNER SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Open Your Wio Business Account with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ pre-verifies your Freezone license and Emirates ID data to ensure 48-hour Wio Business account approval." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/business-bank-account-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Wio Banking Setup ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "wio-key-features", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Wio Business Features: Multi-Currency & Stripe Integration" }),
        /* @__PURE__ */ jsx("p", { children: "Wio Business allows startups to create sub-accounts in USD, EUR, GBP, and AED with real-time FX exchange. It links directly with Stripe UAE to process customer credit card payments automatically." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "traditional-bank-advantages", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. When You Still Need a Traditional Physical Bank Account" }),
        /* @__PURE__ */ jsx("p", { children: "Physical banks like Emirates NBD are recommended for enterprises operating large physical retail chains, accepting physical cash/cheques daily, or requiring trade finance credit lines." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "verdict", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Recommendation for Startups, Agencies & E-commerce" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For 95% of new Freezone companies (IT agencies, freelancers, SaaS, and e-commerce brands), ",
          /* @__PURE__ */ jsx("strong", { children: "Wio Business is the clear winner" }),
          " due to instant online setup, zero minimum balance stress, and seamless digital features."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "UAE DIGITAL BANKING SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Open Your Wio Business Account with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Wio Business fast-track onboarding, multi-currency USD/AED sub-accounts, virtual card issuance, and Stripe integration support." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uae-services/business-bank-account-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Wio Bank Fast-Track Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
