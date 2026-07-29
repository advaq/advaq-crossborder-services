import { jsxs, jsx } from "react/jsx-runtime";
import { F as faqs } from "./router-CGinzTRd.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, Check, BookOpen, Scale, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Software Development Agreement Checklist: 10 Clauses Every Dev Agency Must Include" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word comprehensive legal risk checklist for custom software developers, mobile app agencies, and web engineering firms on drafting robust client contracts that prevent scope creep and secure payments." }),
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
            /* @__PURE__ */ jsx("span", { children: "Software IP & Tech Licensing Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: The 10 Essential Dev Clauses" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs pt-2 text-navy-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 1. IP Transfer Upon Full Payment"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 2. Deemed Milestone Acceptance (5-7 Days)"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 3. Formal Change Control Procedure"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 4. Background IP & Open-Source Carveouts"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 5. Financial Liability Cap (1x Fees Paid)"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 6. 30-to-90 Day Limited Bug Fix Warranty"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 7. Third-Party API Interruption Exemption"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 8. Late Payment Interest & Work Suspension"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 9. Source Code Escrow (Enterprise Only)"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "text-gold-500" }),
          " 10. Non-Solicitation of Engineers"
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. Introduction: Why Custom Software Contracts Fail" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#clause-1-ip", className: "hover:text-gold-600 underline", children: "2. Clause 1: IP Assignment Conditioned Upon Full Payment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#clause-2-acceptance", className: "hover:text-gold-600 underline", children: "3. Clause 2: Milestone Acceptance & Deemed Approval" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#clause-3-scope", className: "hover:text-gold-600 underline", children: "4. Clause 3: Formal Change Control Procedure" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#clause-4-background-ip", className: "hover:text-gold-600 underline", children: "5. Clause 4: Background IP & Open Source Reservations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#clause-5-liability", className: "hover:text-gold-600 underline", children: "6. Clause 5: Limitation of Financial Liability & Consequential Damages" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#clause-6-warranty", className: "hover:text-gold-600 underline", children: "7. Clause 6: Limited Bug Fix Warranty vs Maintenance" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#clause-7-third-party", className: "hover:text-gold-600 underline", children: "8. Clause 7: Third-Party API & Infrastructure Exemption" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#remaining-clauses", className: "hover:text-gold-600 underline", children: "9. Clauses 8-10: Payment Suspension, Escrow & Non-Solicitation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "10. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Introduction: Why Custom Software Development Contracts Fail" }),
        /* @__PURE__ */ jsx("p", { children: "Building custom software is fundamentally different from selling physical goods or fixed consultancy services. Software projects are inherently iterative, technically complex, and heavily dependent on third-party APIs, evolving cloud infrastructure, and changing client requirements." }),
        /* @__PURE__ */ jsx("p", { children: "When a software development agency uses an inadequate contract, small misaligned expectations rapidly turn into major legal disputes. The client refuses to pay the final milestone because they expect extra un-scoped features, while the agency faces cash flow paralysis and potential lawsuits over delayed launches." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Legal Reality:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "A well-drafted Software Development Agreement does not just protect you in court — it actively prevents disputes during the development lifecycle by establishing clear boundaries for code ownership, acceptance testing, and scope changes." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "clause-1-ip", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Clause 1: IP Assignment Conditioned Upon Full Payment" }),
        /* @__PURE__ */ jsx("p", { children: "The most common legal mistake made by software agencies is drafting an IP assignment clause that automatically assigns code ownership to the client upon creation or signature. If the client subsequently defaults on payment, they still legally own the code you wrote, making repossession or code withholding legally complex." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Sample Protective IP Transfer Wording:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: `"Subject to the terms and conditions of this Agreement, Developer agrees that upon Client's complete, full, and final payment of all fees and invoices under the applicable Statement of Work, Developer shall assign to Client all right, title, and interest in and to the custom deliverables specifically created for Client under such Statement of Work."` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "clause-2-acceptance", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Clause 2: Milestone Acceptance & Deemed Approval" }),
        /* @__PURE__ */ jsx("p", { children: "Without a strict milestone review window, clients often take 3 to 6 weeks to test a delivered staging build while developer teams sit idle or invoices remain unpaid." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Your agreement must specify a ",
          /* @__PURE__ */ jsx("strong", { children: "Deemed Acceptance Window" }),
          " (typically 5 to 7 business days). If the client does not submit a written rejection detailing reproducible non-conformities within 5 business days of delivery, the milestone is legally deemed accepted and the associated invoice becomes due."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ LEGAL CONTRACT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get Custom Software Contracts Drafted for Your Agency" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "Protect your development business with Advocate-drafted B2B Software Development Agreements, milestone payment structures, and IP assignment deeds." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/software-development-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Software Contract Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "clause-3-scope", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Clause 3: Formal Change Control Procedure" }),
        /* @__PURE__ */ jsx("p", { children: "Scope creep is the single leading cause of agency project unprofitability. A robust software contract must mandate that any change, addition, or modification to original technical requirements requires a written Change Order Form signed by authorized representatives of both parties detailing fee adjustments and timeline extensions." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "clause-4-background-ip", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Clause 4: Background IP & Open Source Reservations" }),
        /* @__PURE__ */ jsx("p", { children: "Agencies frequently reuse internal code libraries, UI component design systems, boilerplates, and open-source packages across multiple client projects." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Your agreement must explicitly reserve ownership of the agency's ",
          /* @__PURE__ */ jsx("strong", { children: "Background IP" }),
          ". Rather than transferring ownership of pre-existing code, the client is granted a non-exclusive, perpetual, royalty-free license to run and modify the Background IP solely as integrated into their specific custom software build."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "clause-5-liability", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Clause 5: Limitation of Financial Liability & Consequential Damages" }),
        /* @__PURE__ */ jsx("p", { children: "If a bug in an e-commerce platform causes a client to lose $500,000 in sales during a Black Friday promo, an agency without a liability cap could face company-ending litigation." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Your contract must contain a strict ",
          /* @__PURE__ */ jsx("strong", { children: "Limitation of Liability Clause" }),
          " capping total legal exposure to actual fees paid under the specific contract in the preceding 6 or 12 months, and disclaiming all indirect, consequential, or lost revenue claims."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "clause-6-warranty", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. Clause 6: Limited Bug Fix Warranty vs Maintenance Retainers" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Clearly distinguish between a ",
          /* @__PURE__ */ jsx("strong", { children: "Bug Fix Warranty" }),
          " and an ongoing ",
          /* @__PURE__ */ jsx("strong", { children: "Maintenance Agreement" }),
          ". A standard warranty covers 30 to 90 days post-launch and is strictly limited to correcting reproducible code defects that violate written functional specs. It explicitly excludes new feature requests, server environment upgrades, or OS version updates."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "clause-7-third-party", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "8. Clause 7: Third-Party API & Infrastructure Exemption" }),
        /* @__PURE__ */ jsx("p", { children: "Modern web applications rely heavily on external APIs (Stripe, OpenAI, AWS, Google Maps, Twilio). Your contract must state that the agency is not liable for software failures or delays caused by third-party API deprecation, outage, price hikes, or terms-of-service changes beyond the agency’s control." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "remaining-clauses", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "9. Clauses 8–10: Work Suspension, Source Code Escrow & Non-Solicitation" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { children: "Clause 8: Work Suspension for Non-Payment:" }),
            " Grants the agency the legal right to pause development, suspend staging server access, and halt deployment if an invoice is overdue by 10+ business days."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { children: "Clause 9: Source Code Escrow (Enterprise Only):" }),
            " Defines rules for enterprise clients requesting source code release only in the event of formal agency insolvency or liquidation."
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { children: "Clause 10: Non-Solicitation of Engineering Staff:" }),
            " Prohibits clients from poaching agency software engineers or contractors during the contract and for 12 months thereafter, backed by liquidated damages."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "SOFTWARE DEVELOPMENT CONTRACT SERVICES" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Protect Your Software Agency Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Get bespoke Software Development Agreements drafted by Advocate High Court customized for US, UK, UAE, and cross-border IT consultancies." }),
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
