import { jsxs, jsx } from "react/jsx-runtime";
import { aE as faqs } from "./router-CGinzTRd.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, ArrowRight, Scale, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Choice of Law & Dispute Resolution Clauses in Cross-Border B2B Contracts" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word practical international law masterclass for software houses, digital agencies, and global vendors on drafting Choice of Law, Forum Selection, and International Arbitration clauses." }),
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
            /* @__PURE__ */ jsx("span", { children: "International Arbitration & Forum Rules" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: Cross-Border Dispute Pillars" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "1. Governing Law Selection" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Designating a clear, predictable legal jurisdiction (e.g., State of Delaware, English law, or laws of Pakistan) to interpret contract terms." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "2. International Arbitration" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Submitting disputes to neutral arbitral bodies (LCIA, ICC, SIAC) for global enforceability across 170+ New York Convention member states." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "3. Multi-Tiered Escalation" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Mandatory 30-day executive negotiation and non-binding mediation before filing expensive formal legal proceedings." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "4. Seat & Language Selection" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Explicit selection of neutral arbitral seat (e.g. London or Singapore) and English as the official proceeding language." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. Introduction: The Jurisdiction Trap in Global Contracts" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#governing-law-vs-forum", className: "hover:text-gold-600 underline", children: "2. Governing Law vs Forum Selection Clauses" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#international-arbitration", className: "hover:text-gold-600 underline", children: "3. Why International Arbitration Beats Court Litigation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#new-york-convention", className: "hover:text-gold-600 underline", children: "4. Enforcing Awards Under the New York Convention" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#multi-tiered-clauses", className: "hover:text-gold-600 underline", children: "5. Multi-Tiered Escalation (Negotiation, Mediation, Arbitration)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#drafting-arbitration-clause", className: "hover:text-gold-600 underline", children: "6. How to Draft an Enforceable Arbitration Clause" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Introduction: The Jurisdiction Trap in Global Contracts" }),
        /* @__PURE__ */ jsx("p", { children: "When a software agency based in Pakistan or the UAE executes a $100,000 Master Service Agreement with a corporate client in California or London, negotiating project scope and payment terms is standard." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "However, if the contract omits a clear ",
          /* @__PURE__ */ jsx("strong", { children: "Choice of Law and Dispute Resolution Clause" }),
          ', a billing or IP dispute forces the parties into expensive "jurisdiction battles"—fighting in multiple foreign courts over which country has legal authority to hear the case.'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Cross-Border Rule:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "Winning a court judgment in your home country against a foreign client is meaningless if foreign courts refuse to recognize or enforce foreign money judgments. International arbitration solves this enforcement gap." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "governing-law-vs-forum", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Governing Law vs Forum Selection Clauses" }),
        /* @__PURE__ */ jsx("p", { children: "Cross-border contracts must clearly separate two distinct legal concepts:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Governing Law (Substantive Law):" }),
              " Dictates which jurisdiction's contract principles will be applied to interpret rights, liabilities, and breach definitions (e.g. State of Delaware law)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Forum Selection (Procedural Forum):" }),
              " Dictates the exact physical tribunal or court system authorized to adjudicate disputes (e.g. LCIA Arbitration in London)."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "international-arbitration", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Why International Arbitration Beats Court Litigation" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For international B2B tech contracts, submitting disputes to ",
          /* @__PURE__ */ jsx("strong", { children: "International Commercial Arbitration" }),
          " (under rules such as ICC, LCIA, or SIAC) offers critical advantages over domestic court litigation:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-3 text-xs my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            "🌐 ",
            /* @__PURE__ */ jsx("strong", { children: "Global Enforceability:" }),
            " Awards enforced under the New York Convention across 170+ countries"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            "🔒 ",
            /* @__PURE__ */ jsx("strong", { children: "Strict Confidentiality:" }),
            " Arbitral proceedings and trade secrets remain private"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            "⚖️ ",
            /* @__PURE__ */ jsx("strong", { children: "Expert Arbitrators:" }),
            " Disputes decided by specialized software & IP legal experts"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            "⚡ ",
            /* @__PURE__ */ jsx("strong", { children: "Final & Binding:" }),
            " No lengthy multi-year court appeal delays"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ CROSS-BORDER CONTRACT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Structure Enforceable International Contracts with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ drafts Choice of Law, Forum Selection, and International Arbitration clauses for cross-border tech contracts between clients in US, UK, UAE, and Pakistan." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/master-service-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order International Contract Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "new-york-convention", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Enforcing Awards Under the New York Convention" }),
        /* @__PURE__ */ jsx("p", { children: "The 1958 Convention on the Recognition and Enforcement of Foreign Arbitral Awards (New York Convention) is signed by over 170 countries." }),
        /* @__PURE__ */ jsx("p", { children: "If you win an arbitration award against a US or UK client, national courts in the US or UK are treaty-bound to recognize and convert the arbitral award into a binding monetary judgment without re-trying the merits of the case." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "multi-tiered-clauses", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Multi-Tiered Escalation (Negotiation, Mediation, Arbitration)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To avoid rushing into expensive arbitration, incorporate a 3-step ",
          /* @__PURE__ */ jsx("strong", { children: "Multi-Tiered Dispute Resolution Clause" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("ol", { className: "list-none space-y-2 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Step 1: Informal Executive Negotiation:" }),
            " CEOs or Managing Directors meet for 30 days to resolve billing issues amicably."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Step 2: Non-Binding Mediation:" }),
            " Parties engage an independent mediator for a 30-day session."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Step 3: Binding Arbitration:" }),
            " If mediation fails, either party may file formal arbitration claims."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "drafting-arbitration-clause", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. How to Draft an Enforceable Arbitration Clause" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Sample Model Arbitration Wording:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: '"Any dispute arising out of or in connection with this contract shall be referred to and finally resolved by arbitration administered by the London Court of International Arbitration (LCIA) under the LCIA Rules. The seat of arbitration shall be London, UK. The language of the arbitral proceedings shall be English. The governing law of the contract shall be the substantive law of England and Wales."' })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "INTERNATIONAL DISPUTE CONTRACT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Draft Enforceable Cross-Border Contracts" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Choice of law drafting, international arbitration provisions, multi-tiered dispute resolution, and New York Convention compliance drafted by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/master-service-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Choice of Law Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
