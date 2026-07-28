import { jsxs, jsx } from "react/jsx-runtime";
import { Y as faqs } from "./router-CT0t7Dw0.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Scale, ArrowRight, Check, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "How to Prevent Scope Creep Legally: Change Request Clauses in Agency Agreements" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word practical legal engineering guide for web development agencies, design studios, and software houses on structuring Change Orders, setting revision caps, and enforcing acceptance deadlines." }),
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
            /* @__PURE__ */ jsx("span", { children: "Commercial Scope Management Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: 4 Anti-Scope-Creep Clauses" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "1. Formal Change Control Procedure" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Mandates that no out-of-scope work commences until a written Change Order Form specifying costs and timeline extensions is signed by both parties." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "2. Deemed Acceptance Window" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Establishes that delivered milestones are legally deemed approved if the client does not submit written non-conformity feedback within 5–7 business days." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "3. Strict Revision Caps" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Caps design and code iterations at 2 rounds per deliverable. Additional revision rounds are explicitly billed at the agency's hourly overage rate." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "4. Client Delay Suspension" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Grants the agency the legal right to pause work, adjust delivery schedules, and charge restart fees if client feedback is delayed over 10 business days." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#understanding-scope-creep", className: "hover:text-gold-600 underline", children: "1. Understanding the Legal Mechanics of Scope Creep" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#change-order-clause", className: "hover:text-gold-600 underline", children: "2. Anatomy of a Bulletproof Change Order Clause" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#deemed-acceptance", className: "hover:text-gold-600 underline", children: "3. Enforcing Deemed Acceptance Windows" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#revision-caps", className: "hover:text-gold-600 underline", children: "4. Setting Hard Caps on Revisions & Iterations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#client-delays", className: "hover:text-gold-600 underline", children: "5. Handling Client Responsiveness & Delay Suspension" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#out-of-scope-lists", className: "hover:text-gold-600 underline", children: '6. Drafting Explicit "Out of Scope" Exclusions' }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "understanding-scope-creep", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Understanding the Legal Mechanics of Scope Creep" }),
        /* @__PURE__ */ jsx("p", { children: 'Scope creep is the single silent killer of agency profitability. It rarely happens as a single massive request; instead, it occurs in small, seemingly innocent steps: a client asking to "tweak" a layout, add "just one more API integration," or redesign a checkout page after sign-off.' }),
        /* @__PURE__ */ jsx("p", { children: "When an agency accommodates informal verbal or Slack requests without a contractual mechanism, two major problems occur: profit margins disappear and project schedules collapse. When the final delivery deadline is missed, the client blames the agency, refusing final payment." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Contractual Rule:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "Unless your contract explicitly defines how additional work is requested, priced, and approved, courts and arbitrators will assume that minor out-of-scope work was performed voluntarily under the original contract price." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "change-order-clause", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Anatomy of a Bulletproof Change Order Clause" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The primary defense against scope creep is a strict ",
          /* @__PURE__ */ jsx("strong", { children: "Change Control Procedure Clause" }),
          ". This clause establishes that any deviation from the original SOW must be documented in a written Change Order Form."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Sample Protective Change Control Clause:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: `"Any modification, addition, or deletion to the deliverables, technical specifications, or timeline set forth in a Statement of Work ('Change') must be documented in a written Change Order Form. Developer shall provide Client with an estimate of the additional fees and schedule impact required to implement the Change. Developer shall have no obligation to commence work on any Change until a Change Order Form is signed by authorized representatives of both parties."` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "deemed-acceptance", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Enforcing Deemed Acceptance Windows" }),
        /* @__PURE__ */ jsx("p", { children: "A major cause of project stalling is when a client takes weeks to review a delivered milestone build. Meanwhile, developer teams sit idle or milestone invoices remain unpaid." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Your agreement must include a ",
          /* @__PURE__ */ jsx("strong", { children: "Deemed Acceptance Clause" }),
          " specifying a strict 5-to-7 business day review window. If the client does not provide a detailed written notice specifying reproducible non-conformities within 5 business days, the milestone is legally deemed accepted and the associated milestone invoice becomes due and payable."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ SCOPE PROTECTION SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Eliminate Unpaid Scope Creep with ADVAQ Contracts" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ drafts customized agency contracts featuring Change Order protocols, deemed acceptance rules, and revision caps for tech agencies in the US, UK, UAE, and Pakistan." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/master-service-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Scope Protection Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "revision-caps", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Setting Hard Caps on Revisions & Design Iterations" }),
        /* @__PURE__ */ jsx("p", { children: 'Clients frequently confuse "revisions" with "endless subjective redesigns." Your SOW must explicitly cap the number of revision rounds included in the fixed price (e.g., 2 rounds of design revisions).' }),
        /* @__PURE__ */ jsx("p", { children: "The contract must also clearly define what qualifies as a valid revision: feedback must be consolidated into a single written document submitted within the review window. Piecemeal feedback submitted via Slack or WhatsApp is explicitly disallowed." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "client-delays", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Handling Client Responsiveness & Delay Suspension" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "When a client fails to provide brand assets, API documentation, or timely feedback, agency schedules collapse. Include a ",
          /* @__PURE__ */ jsx("strong", { children: "Client Delay & Project Suspension Clause" }),
          " stating:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Day-for-Day Extension:" }),
              " Any client delay in providing required assets extends all agency delivery deadlines day-for-day."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Project Suspension:" }),
              " If client delay exceeds 10 business days, the agency may suspend work and re-allocate resources to other revenue projects."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Re-Start Fee:" }),
              " Resuming a suspended project requires payment of a 10% re-boarding fee to cover team scheduling adjustments."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "out-of-scope-lists", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: '6. Drafting Explicit "Out of Scope" Exclusions' }),
        /* @__PURE__ */ jsxs("p", { children: [
          "One of the simplest ways to prevent scope disputes is adding a dedicated ",
          /* @__PURE__ */ jsx("strong", { children: '"Out of Scope"' }),
          " section in every SOW. List items explicitly excluded from the project price, such as:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-3 text-xs my-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: "❌ Multi-language content translation & localization" }),
          /* @__PURE__ */ jsx("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: "❌ Third-party API subscription fees (Stripe, Twilio, AWS)" }),
          /* @__PURE__ */ jsx("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: "❌ Custom video creation & copywriting" }),
          /* @__PURE__ */ jsx("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: "❌ Post-launch server maintenance & DevOps support" })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "AGENCY CONTRACT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Stop Scope Creep & Protect Your Profits" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Change request templates, deemed acceptance clauses, revision caps, and client delay fee protocols drafted by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/master-service-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Scope Protection Contract" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
