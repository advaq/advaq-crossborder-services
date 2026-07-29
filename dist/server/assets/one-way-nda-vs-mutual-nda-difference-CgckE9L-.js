import { jsxs, jsx } from "react/jsx-runtime";
import { a0 as faqs } from "./router-DIGQQZx9.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import "sonner";
function ArticlePage() {
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("article", { className: "min-h-screen bg-white text-gray-800", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:underline", children: "Blog" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting", className: "hover:underline", children: "Legal Contract Drafting" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "One-Way NDA vs Mutual NDA: When Should Businesses Use Each Agreement?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word practical legal comparison for founders, agencies, and enterprise executives on selecting between Unilateral (One-Way) and Bilateral (Mutual) Non-Disclosure Agreements." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "Advocate Muhammad Abdullah (Lead Counsel)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "11 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "International Trade Secret Protection" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: One-Way vs Mutual NDA" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "One-Way (Unilateral) NDA" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Protects information disclosed by ONE party. Best for hiring contractors, onboarding software agencies, pitching investors, or onboarding new employees." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "Mutual (Bilateral) NDA" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Protects information disclosed by BOTH parties. Essential for joint ventures, M&A due diligence, co-development partnerships, and strategic B2B integrations." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. Introduction: Why Confidentiality Agreements Matter" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-one-way-nda", className: "hover:text-gold-600 underline", children: "2. What Is a One-Way (Unilateral) NDA?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-mutual-nda", className: "hover:text-gold-600 underline", children: "3. What Is a Mutual (Bilateral) NDA?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-matrix", className: "hover:text-gold-600 underline", children: "4. Side-by-Side Comparison Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#essential-clauses", className: "hover:text-gold-600 underline", children: "5. 5 Essential Clauses Every NDA Must Contain" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#trade-secrets-vs-standard-data", className: "hover:text-gold-600 underline", children: "6. Trade Secrets vs Standard Confidential Data" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Introduction: Why Confidentiality Agreements Matter" }),
        /* @__PURE__ */ jsx("p", { children: "In today's knowledge economy, proprietary trade secrets, customer databases, unreleased software source code, and strategic business plans are often a company's most valuable assets. Sharing these assets with third-party contractors, potential partners, or investors is necessary for business growth, but exposes the firm to severe risk if not protected by a Non-Disclosure Agreement (NDA)." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Selecting between a ",
          /* @__PURE__ */ jsx("strong", { children: "One-Way NDA" }),
          " and a ",
          /* @__PURE__ */ jsx("strong", { children: "Mutual NDA" }),
          " is the foundational decision when structuring commercial confidentiality protections."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Core Legal Rule:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "An NDA does not grant IP rights or transfer ownership — it creates an enforceable legal duty of confidence preventing the recipient from disclosing or misusing proprietary information." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-one-way-nda", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. What Is a One-Way (Unilateral) NDA?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsx("strong", { children: "One-Way (Unilateral) NDA" }),
          " is a commercial contract where only ONE party discloses confidential information to a second party who receives it. The receiving party agrees to keep the information confidential and use it solely for the specified evaluation purpose."
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Primary Use Cases for One-Way NDAs:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Hiring independent contractors, software agencies, or external legal/tax consultants." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Presenting a proprietary pitch deck or prototype to potential angel investors or venture capitalists." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Onboarding employees who will gain access to company customer databases and source code." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-mutual-nda", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. What Is a Mutual (Bilateral) NDA?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsx("strong", { children: "Mutual (Bilateral) NDA" }),
          " imposes equal, reciprocal confidentiality obligations on BOTH signing parties. Both companies anticipate sharing proprietary information with each other during joint discussions."
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Primary Use Cases for Mutual NDAs:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Exploring corporate Mergers & Acquisitions (M&A) or buyouts where financial books of both firms are audited." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Structuring strategic Joint Ventures, co-marketing partnerships, or shared product development." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Negotiating complex B2B API integrations where both platforms expose technical architectures." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ NDA DRAFTING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Draft Custom One-Way & Mutual NDAs with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ's legal team drafts bulletproof Non-Disclosure Agreements tailored for tech startups, digital agencies, and cross-border commercial transactions." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/mutual-nda", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order NDA Contract Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Side-by-Side Comparison Matrix" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Feature" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "One-Way (Unilateral) NDA" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Mutual (Bilateral) NDA" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Disclosing Parties" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Single party discloses confidential data." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Both parties disclose confidential data." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Obligations" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Recipient has sole duty of confidentiality." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Reciprocal, symmetric duties of confidentiality." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Typical Scenario" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Client hiring agency / hiring employee." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "M&A due diligence / Joint venture." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Drafting Complexity" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Simpler (favors disclosing party)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Balanced (must protect both entities equally)." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "essential-clauses", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. 5 Essential Clauses Every NDA Must Contain" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "1. Precise Definition of Confidential Information" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Explicitly define what constitutes protected data (source code, financial statements, customer lists, marketing algorithms, trade secrets) and require written marking where feasible." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "2. Standard Legal Exclusions" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Exclude info already public, previously known, independently developed, or legally required to be disclosed under court order/subpoena." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "3. Purpose of Use Limitation" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "State that recipient may use confidential data ",
              /* @__PURE__ */ jsx("em", { children: "solely for evaluating or performing the specific commercial project" }),
              " and for no other business purpose."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "4. Term & Duration of Confidentiality" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Set standard 2-to-5 year confidentiality duration, with perpetual protection for core software trade secrets." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "5. Injunctive Relief Provision" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Acknowledge that monetary damages are inadequate for breach, granting disclosing party the immediate right to seek court injunctions." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "trade-secrets-vs-standard-data", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Trade Secrets vs Standard Confidential Data" }),
        /* @__PURE__ */ jsx("p", { children: "A common drafting flaw in NDAs is treating all confidential information identically. Standard business discussions (e.g. pricing quotes) warrant 2 to 3 years of confidentiality protection." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "However, ",
          /* @__PURE__ */ jsx("strong", { children: "core trade secrets" }),
          " (such as proprietary AI algorithms, source code repositories, and patent-pending hardware schematics) should be protected perpetually for as long as the information remains a trade secret under applicable law (such as the US Defend Trade Secrets Act or UK Trade Secrets Regulations)."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "CONFIDENTIALITY & NDA SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Protect Your Trade Secrets Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "One-Way and Mutual NDA drafting, trade secret classification, duration structuring, and international enforcement advisory drafted by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/mutual-nda", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order NDA Drafting Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
