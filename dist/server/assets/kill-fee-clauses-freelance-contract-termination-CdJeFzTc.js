import { jsxs, jsx } from "react/jsx-runtime";
import { a6 as faqs } from "./router-CAPYaiJ8.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, AlertTriangle, ArrowRight, Scale, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Kill Fees & Early Termination Clauses in Freelance & Consulting Agreements" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word practical commercial contract guide for agency owners, IT consultants, and creative freelancers on structuring Kill Fees, non-refundable retainers, and notice periods for early project cancellation." }),
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
            /* @__PURE__ */ jsx("span", { children: "Agency Commercial Risk Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: Termination & Kill Fee Rules" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "1. Non-Refundable Deposit" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Upfront project deposits (30%–50%) are strictly non-refundable once project onboarding or technical development commences." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "2. Pro-Rata Work Payout" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Client must pay 100% of fees for completed milestones, plus pro-rata hourly fees for work-in-progress up to written notice date." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "3. Kill Fee Percentage" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "A 25% to 50% fee calculated on the remaining unearned contract balance to compensate for reserved team capacity and opportunity cost." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "4. Written Notice Period" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Requires 14 to 30 days written notice for Termination for Convenience, allowing the agency to offboard orderly." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. Introduction: The Risk of Abrupt Project Cancellation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#convenience-vs-cause", className: "hover:text-gold-600 underline", children: "2. Termination for Convenience vs Termination for Cause" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#non-refundable-deposits", className: "hover:text-gold-600 underline", children: "3. Structuring Non-Refundable Upfront Deposits" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#drafting-kill-fee-clause", className: "hover:text-gold-600 underline", children: "4. Drafting an Enforceable Kill Fee Clause" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ip-handling-on-termination", className: "hover:text-gold-600 underline", children: "5. Handling IP Assignment Upon Early Termination" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Introduction: The Risk of Abrupt Project Cancellation" }),
        /* @__PURE__ */ jsx("p", { children: "When a digital agency or software consultancy wins a $50,000 project, it reserves developer capacity, pauses other client proposals, and incurs upfront onboarding costs. If the client abruptly cancels the project 3 weeks in because of internal budget cuts, the agency is left with idle developers and lost revenue." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Without an explicit ",
          /* @__PURE__ */ jsx("strong", { children: "Kill Fee Clause" }),
          " and non-refundable deposit terms, the client may expect a full refund of upfront fees, leaving the agency with a net loss."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Commercial Purpose:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "A Kill Fee is not a punitive fine—it is a pre-agreed liquidated damage allocation compensating the service provider for capacity reservation, unrecoverable overhead, and lost business opportunities." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "convenience-vs-cause", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Termination for Convenience vs Termination for Cause" }),
        /* @__PURE__ */ jsx("p", { children: "Your contract must clearly distinguish between two legal cancellation pathways:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Termination for Convenience:" }),
              " The client cancels the project for business reasons (budget cuts, strategic pivot) without agency breach. Triggers 30 days notice, payment for work done, and full Kill Fee payout."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-500 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Termination for Cause:" }),
              " Either party terminates due to a material breach of contract (e.g., agency failing to deliver working code, or client failing to pay invoices). No Kill Fee applies to the breaching party."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "non-refundable-deposits", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Structuring Non-Refundable Upfront Deposits" }),
        /* @__PURE__ */ jsx("p", { children: "Always condition project commencement upon receipt of an initial upfront deposit (typically 30% to 50% of total project fee)." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The contract must explicitly state that ",
          /* @__PURE__ */ jsx("strong", { children: "all upfront deposits are non-refundable" }),
          " once project onboarding occurs, ensuring the agency retains base setup compensation even if the project is cancelled on day one."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ CONTRACT TERMINATION SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Draft Custom Freelance & Agency Contracts with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ drafts Freelance Service Agreements and Consulting Contracts featuring bulletproof Kill Fee protocols and deposit protections for agencies in US, UK, UAE, and Pakistan." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/freelance-service-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Contract Drafting ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "drafting-kill-fee-clause", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Drafting an Enforceable Kill Fee Clause" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Sample Protective Kill Fee Wording:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: '"In the event Client terminates this Agreement for convenience prior to project completion, Client shall provide thirty (30) days written notice and shall pay Developer: (a) all unpaid fees for completed milestones, (b) pro-rata fees for work-in-progress up to effective termination date, and (c) a Cancellation Kill Fee equal to thirty percent (30%) of the remaining unearned contract fee balance."' })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "ip-handling-on-termination", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Handling IP Assignment Upon Early Termination" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "State clearly that upon early termination for convenience, IP ownership in partially completed deliverables transfers to the client ",
          /* @__PURE__ */ jsx("strong", { children: "only if all outstanding invoices, pro-rata work fees, and the Kill Fee are paid in full" }),
          ". If the client refuses to pay the Kill Fee, all code and design rights remain 100% with the agency."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "CONTRACT TERMINATION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Protect Your Income Against Cancellations" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Kill fee drafting, non-refundable deposit terms, notice period structuring, and breach of contract remedies drafted by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/freelance-service-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Kill Fee Contract Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
