import { jsxs, jsx } from "react/jsx-runtime";
import { N as faqs } from "./router-DCGwfQ0t.js";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Registered Agent vs Virtual Address in the US: What Are the Legal Differences?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive legal breakdown for foreign non-resident founders on statutory Registered Agent roles, commercial Virtual Address mail forwarding, Service of Process, and US bank KYC compliance." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "US Statutory Corporate Law Compliance" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Key Functional Differences" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Registered Agent (Statutory Requirement)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Mandatory by state law. Accepts legal summons, court documents, and Secretary of State notices during business hours." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Virtual Address (Commercial Service)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Commercial service for receiving customer mail, bank debit cards, supplier letters, and website address displays." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#registered-agent-role", className: "hover:text-gold-600 underline", children: "1. The Statutory Role of a US Registered Agent" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#virtual-address-role", className: "hover:text-gold-600 underline", children: "2. What Is a US Commercial Virtual Address?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-table", className: "hover:text-gold-600 underline", children: "3. Side-by-Side Functional Comparison" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bank-kyc-rules", className: "hover:text-gold-600 underline", children: "4. US Bank KYC Rules (Mercury & Relay Address Verification)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#privacy-benefits", className: "hover:text-gold-600 underline", children: "5. Privacy Protections for Foreign Non-Residents" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "registered-agent-role", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. The Statutory Role of a US Registered Agent" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under state corporation statutes across all 50 US states, every Limited Liability Company ",
          /* @__PURE__ */ jsx("strong", { children: "must" }),
          " designate a Registered Agent residing or operating in that state."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The Registered Agent's legal mandate is to accept ",
          /* @__PURE__ */ jsx("strong", { children: "Service of Process" }),
          " (legal summons, court lawsuits, and official government compliance demands) on behalf of the LLC during normal business hours."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "virtual-address-role", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. What Is a US Commercial Virtual Address?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsx("strong", { children: "Virtual Business Address" }),
          " (or Virtual Mailbox) is a commercial service providing a real US physical street address with digital mail scanning and forwarding features."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Unlike a Registered Agent (which only handles government legal mail), a Virtual Address receives routine business mail, customer returns, supplier packages, and bank debit card deliveries." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-table", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Side-by-Side Functional Comparison" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm border-collapse border border-border", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold", children: "Feature" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold text-gold-500", children: "Registered Agent" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-border font-semibold", children: "Virtual Address" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-medium", children: "State Legal Requirement" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "Mandatory (100%)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border text-gray-500", children: "Optional" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-medium", children: "Handles Legal Lawsuits (Service of Process)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "Yes" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border text-red-600", children: "No" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-medium", children: "Receives General Business & Customer Mail" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border text-red-600", children: "No" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "Yes" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-medium", children: "US Bank Debit Card Delivery" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border text-red-600", children: "Rejected" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-border font-bold text-emerald-600", children: "Accepted" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US REGISTERED AGENT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get 1 Year Registered Agent Service with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ provides official Registered Agent representation in Wyoming and Delaware, immediate document scanning, and compliance tracking for foreign founders." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/registered-agent", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Registered Agent Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "bank-kyc-rules", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. US Bank KYC Rules (Mercury & Relay Address Verification)" }),
        /* @__PURE__ */ jsx("p", { children: "FinCEN Customer Due Diligence rules require US banks to verify a physical address for every business account." }),
        /* @__PURE__ */ jsx("p", { children: "Because thousands of companies use identical Registered Agent addresses, banks maintain database filters to detect commercial Registered Agent addresses and flag them during KYC. Combining your Registered Agent with a unique virtual business address solves bank compliance instantly." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "privacy-benefits", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Privacy Protections for Foreign Non-Residents" }),
        /* @__PURE__ */ jsx("p", { children: "Using a professional Registered Agent address keeps your personal home address off public state registers and protects non-resident founders from junk mail, spam, and privacy exposure." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US REGISTERED AGENT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Appoint ADVAQ as Your US Registered Agent" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Wyoming and Delaware statutory Registered Agent service, mail scanning, state annual report reminders, and privacy safeguards." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/registered-agent", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Registered Agent Service — $99/yr" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
