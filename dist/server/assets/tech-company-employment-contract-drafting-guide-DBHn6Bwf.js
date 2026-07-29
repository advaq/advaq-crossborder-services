import { jsxs, jsx } from "react/jsx-runtime";
import { C as faqs } from "./router-CmFywa92.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Scale, Check, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Drafting Employment Contracts for Local & Remote Workers in Tech Companies" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word comprehensive HR and legal drafting guide for software startups, SaaS companies, and digital agencies on structuring employment agreements for local and distributed engineering workforces." }),
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
            /* @__PURE__ */ jsx("span", { children: "Global Tech HR Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: Essential Tech Employment Provisions" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "1. Inventions Assignment (PIIPA)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Automatic legal transfer of all code, algorithms, patentable designs, and technical documentation created by developers during employment." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "2. Equity Vesting & Cliff Terms" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Standard 4-year equity option vesting schedule with a 1-year cliff (25% vests after 12 months, followed by monthly linear vesting)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "3. Confidentiality & Data Protection" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Mandatory protection of company trade secrets, client code repositories, staging API keys, and customer PII." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "4. Exclusivity & Anti-Moonlighting" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Prohibits full-time engineering staff from taking side freelance clients or operating competing software consultancies." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. Introduction: Tech Employment Contract Architecture" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ip-invention-assignment", className: "hover:text-gold-600 underline", children: "2. Structuring Invention Assignment (PIIPA) Clauses" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#stock-vesting-schedules", className: "hover:text-gold-600 underline", children: "3. Drafting Equity & Stock Option Vesting Clauses" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#exclusivity-moonlighting", className: "hover:text-gold-600 underline", children: "4. Exclusivity & Anti-Moonlighting Provisions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#probation-notice-periods", className: "hover:text-gold-600 underline", children: "5. Probationary Windows & Termination Notice Periods" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#remote-compliance", className: "hover:text-gold-600 underline", children: "6. Local W-2 vs International Remote Hiring Compliance" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Introduction: Tech Employment Contract Architecture" }),
        /* @__PURE__ */ jsx("p", { children: "Drafting an employment contract for a software company or digital agency requires far more legal rigor than a traditional retail or corporate employment agreement. Software engineers and product managers hold direct access to your company's core intellectual property, customer databases, and proprietary algorithms." }),
        /* @__PURE__ */ jsx("p", { children: "An inadequate tech employment agreement leaves your startup vulnerable to title disputes during investor due diligence, code theft by departing employees, and unexpected employment tribunal penalties." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Legal Baseline:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "Inventure capital investors and M&A buyers will audit 100% of employee contracts to verify clean title to source code. Missing a signed PIIPA form from a single early developer can stall a multi-million-dollar acquisition." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "ip-invention-assignment", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Structuring Invention Assignment (PIIPA) Clauses" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The core legal pillar of a tech employment agreement is the ",
          /* @__PURE__ */ jsx("strong", { children: "Proprietary Information and Inventions Assignment Agreement (PIIPA)" }),
          " clause."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Sample Inventions Assignment Wording:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: `"Employee agrees that all inventions, software source code, algorithms, patents, designs, and documentation conceived, developed, or reduced to practice by Employee during employment ('Inventions') shall be the sole and exclusive property of Company. Employee hereby irrevocably assigns to Company all right, title, and interest in and to all such Inventions."` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "stock-vesting-schedules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Drafting Equity & Stock Option Vesting Clauses" }),
        /* @__PURE__ */ jsx("p", { children: "Attracting top software engineering talent often requires offering stock option equity grants. Employment agreements should reference the company's Equity Incentive Plan and specify standard 4-year vesting parameters:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "1-Year Cliff:" }),
              " 25% of stock options vest only after completing 12 full months of service."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Monthly Linear Vesting:" }),
              " Remaining 75% vests in equal monthly increments over the remaining 36 months (1/48th per month)."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ EMPLOYMENT CONTRACT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Draft Custom Tech Employment Contracts with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ drafts bespoke Employment Agreements, PIIPA forms, and stock option documentation for software companies and tech startups in US, UK, UAE, and Pakistan." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/employment-contract", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Employment Agreement Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "exclusivity-moonlighting", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Exclusivity & Anti-Moonlighting Provisions" }),
        /* @__PURE__ */ jsx("p", { children: 'With the rise of remote work, software developers frequently attempt "double employment" (working two full-time remote developer jobs simultaneously).' }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Your employment agreement must contain an explicit ",
          /* @__PURE__ */ jsx("strong", { children: "Exclusivity & Full-Time Commitment Clause" }),
          " prohibiting employees from taking secondary employment, freelance side gigs, or consulting work during employment without prior written CEO approval."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "probation-notice-periods", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Probationary Windows & Termination Notice Periods" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Specify a 3-to-6 month ",
          /* @__PURE__ */ jsx("strong", { children: "Probationary Period" }),
          " during which either party can terminate employment with a shortened notice period (e.g. 1 week). Post-probation notice periods for senior engineering leads should range from 1 to 3 months to allow adequate knowledge transfer."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "remote-compliance", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Local W-2 vs International Remote Hiring Compliance" }),
        /* @__PURE__ */ jsx("p", { children: "Ensure compliance with local statutory benefits, mandatory pension contributions, paid annual leave, and severance rules when hiring staff in foreign countries via Employer of Record (EOR) structures or localized employment contracts." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "TECH HR & EMPLOYMENT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Draft Your Tech Employment Contracts" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Custom employment agreements, PIIPA invention assignment forms, stock option vesting schedules, and remote worker compliance packets drafted by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/employment-contract", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Employment Agreement Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
