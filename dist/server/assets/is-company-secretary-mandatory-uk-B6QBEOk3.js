import { jsxs, jsx } from "react/jsx-runtime";
import { a6 as faqs } from "./router-B1vRwgby.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, Briefcase, Check, UserCheck, Building2, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Is a Company Secretary Mandatory for UK Limited Companies in 2026?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive legal breakdown of Companies Act 2006 Section 270, corporate officer responsibilities, Articles of Association rules, and non-resident director compliance." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "7 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Companies Act 2006 Section 270" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Legal Verdict (TL;DR)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Private Limited Company (LTD)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { children: "NOT MANDATORY." }),
            " Under Section 270 of the Companies Act 2006, private UK companies are not required to have a secretary unless specified in their Articles."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Public Limited Company (PLC)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { children: "MANDATORY." }),
            " Under Section 271 of the Companies Act 2006, PLCs must appoint a qualified Company Secretary."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#section-270-rule", className: "hover:text-gold-600 underline", children: "1. Companies Act 2006 Section 270 Rule Explained" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#who-handles-duties", className: "hover:text-gold-600 underline", children: "2. Who Performs Secretarial Duties If No Secretary Is Appointed?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#benefits-of-appointing", className: "hover:text-gold-600 underline", children: "3. Why Might a Company Still Choose to Appoint a Secretary?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#appointment-rules", className: "hover:text-gold-600 underline", children: "4. Rules for Appointing a Non-Resident Company Secretary" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#articles-check", className: "hover:text-gold-600 underline", children: "5. Checking Your Articles of Association Clause" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "section-270-rule", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Companies Act 2006 Section 270 Rule Explained" }),
        /* @__PURE__ */ jsx("p", { children: "Prior to April 2008, all UK companies were legally mandated to maintain a Company Secretary." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "However, the ",
          /* @__PURE__ */ jsx("em", { children: "Companies Act 2006 (Section 270)" }),
          " repealed this mandate for private limited companies. Today, a private UK LTD company can operate legally with just ",
          /* @__PURE__ */ jsx("strong", { children: "one single director and zero secretary" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "who-handles-duties", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Who Performs Secretarial Duties If No Secretary Is Appointed?" }),
        /* @__PURE__ */ jsx("p", { children: "Eliminating the requirement for a Company Secretary does not eliminate statutory secretarial duties." }),
        /* @__PURE__ */ jsx("p", { children: "Instead, all legal governance duties fall directly upon the company's director(s):" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-900 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-500", size: 20 }),
            "Director Governance Responsibilities:"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsx("span", { children: "Filing annual Confirmation Statements (CS01) with Companies House." })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsx("span", { children: "Maintaining statutory registers (PSC register, register of directors/shareholders)." })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsx("span", { children: "Notifying Companies House of officer changes, address updates, or share allotments within statutory timeframes." })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsx("span", { children: "Organizing board meetings and recording board minutes." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "benefits-of-appointing", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Why Might a Company Still Choose to Appoint a Secretary?" }),
        /* @__PURE__ */ jsx("p", { children: "While optional, many growing UK companies choose to formally appoint a Company Secretary or corporate secretarial service:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-gold-500 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(UserCheck, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Division of Governance Workload" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Allows executive directors to focus 100% on business operations, sales, and strategy while the secretary manages statutory filings." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-navy-700 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Building2, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Institutional Credibility" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Appointing a formal secretary signals high corporate governance standards to enterprise clients, venture capital investors, and UK banks." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UK CORPORATE GOVERNANCE SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Professional UK Company Secretarial Support" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages statutory filings, Companies House officer appointments, register maintenance, and corporate governance for overseas directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore UK Secretarial Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "appointment-rules", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Rules for Appointing a Non-Resident Company Secretary" }),
        /* @__PURE__ */ jsx("p", { children: "If your UK LTD company decides to appoint a secretary, the appointee can be:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "An individual person (living anywhere in the world, UK or non-UK resident)." }),
          /* @__PURE__ */ jsx("li", { children: "A corporate entity (corporate secretary)." }),
          /* @__PURE__ */ jsx("li", { children: "An existing company director." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Form AP03 (for individual secretary) or Form AP04 (for corporate secretary) must be submitted to Companies House within 14 days of appointment." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "articles-check", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Checking Your Articles of Association Clause" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Before deciding not to appoint a secretary, check your company's ",
          /* @__PURE__ */ jsx("strong", { children: "Articles of Association" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If your company was formed using bespoke older Articles that contain an explicit clause stating ",
          /* @__PURE__ */ jsx("em", { children: '"The company shall appoint a secretary,"' }),
          " you must either appoint one or amend your Articles via special resolution."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "UK CORPORATE GOVERNANCE SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your UK LTD with Full Corporate Compliance" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Standard Model Articles, Companies House incorporation, London registered address, and statutory secretarial support." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK Formation Package — £99" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
