import { jsxs, jsx } from "react/jsx-runtime";
import { E as faqs } from "./router-B1vRwgby.js";
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
          /* @__PURE__ */ jsx("span", { children: "Legal Contract Drafting" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Software Development Agreement Checklist: 10 Clauses Every Dev Agency Must Include" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive legal risk checklist for custom software developers, mobile app agencies, and web development firms on drafting robust client contracts that prevent scope creep and secure payments." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Tech Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Software IP & Tech Licensing Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "The 10 Essential Dev Clauses" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs pt-2 text-navy-100", children: [
        /* @__PURE__ */ jsx("div", { children: "1. IP Transfer Upon Full Payment" }),
        /* @__PURE__ */ jsx("div", { children: "2. Milestone Acceptance Window (5–10 days)" }),
        /* @__PURE__ */ jsx("div", { children: "3. Formal Change Control Procedure" }),
        /* @__PURE__ */ jsx("div", { children: "4. Pre-Existing Code & Open Source Carve-outs" }),
        /* @__PURE__ */ jsx("div", { children: "5. Limitation of Financial Liability" }),
        /* @__PURE__ */ jsx("div", { children: "6. 30-Day Limited Warranty" }),
        /* @__PURE__ */ jsx("div", { children: "7. Third-Party API Interruption Exemption" }),
        /* @__PURE__ */ jsx("div", { children: "8. Late Payment & Interest Penalties" }),
        /* @__PURE__ */ jsx("div", { children: "9. Source Code Escrow (if applicable)" }),
        /* @__PURE__ */ jsx("div", { children: "10. Non-Solicitation of Engineers" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ip-transfer", className: "hover:text-gold-600 underline", children: "1. IP Assignment Conditioned Upon Full Payment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#milestone-acceptance", className: "hover:text-gold-600 underline", children: "2. Acceptance Testing & Deemed Acceptance Windows" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#change-control", className: "hover:text-gold-600 underline", children: "3. Change Request & Scope Creep Protection" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#liability-caps", className: "hover:text-gold-600 underline", children: "4. Limitation of Liability & Consequential Damage Caps" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#warranty-limits", className: "hover:text-gold-600 underline", children: "5. Bug Fix Warranties vs Maintenance Retainers" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "ip-transfer", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. IP Assignment Conditioned Upon Full Payment" }),
        /* @__PURE__ */ jsx("p", { children: "Never grant unconditional IP assignment upon signing. Ensure your contract specifies that title and copyright in custom code pass to the client only after full payment of all invoices." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "milestone-acceptance", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Acceptance Testing & Deemed Acceptance Windows" }),
        /* @__PURE__ */ jsx("p", { children: 'Include a "deemed acceptance" rule stating that if the client does not provide written feedback within 7 business days of milestone delivery, the milestone is deemed accepted and invoice payable.' })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "SOFTWARE DEVELOPMENT CONTRACT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Draft Custom Software Development Agreements with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ drafts bespoke Software Development Agreements for dev agencies, SaaS builders, and mobile app studios protecting IP and payment streams." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/software-development-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Software Contract Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "change-control", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Change Request & Scope Creep Protection" }),
        /* @__PURE__ */ jsx("p", { children: "Define a formal Change Order process requiring written agreement on cost and timeline adjustments prior to starting out-of-scope work." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "liability-caps", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Limitation of Liability & Consequential Damage Caps" }),
        /* @__PURE__ */ jsx("p", { children: "Cap agency financial exposure to the total fees paid under the specific SOW, and disclaim indirect, punitive, or lost profit damages." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "SOFTWARE CONTRACT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Draft Your Software Contract Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "IP transfer clauses, milestone payment terms, change order rules, and liability limitation clauses." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/software-development-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Software Development Agreement" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
