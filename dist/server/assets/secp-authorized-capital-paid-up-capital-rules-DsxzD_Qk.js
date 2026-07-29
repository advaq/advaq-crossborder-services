import { jsxs, jsx } from "react/jsx-runtime";
import { J as faqs } from "./router-D0x5mnlO.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, AlertTriangle, ArrowRight, Check, FileText, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "Pakistan Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Minimum Paid-Up Capital & Shareholder Rules for SECP Incorporation" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive capital structuring blueprint for business owners, SaaS founders, and corporate directors detailing SECP Authorized Capital rules, Paid-Up Capital bank deposit mandates, Form 22 auditor certificates, and share value allocations under the Companies Act 2017." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Pakistan Corporate Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "11 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "SECP Companies Act 2017 Section 85 Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "SECP Capital Structure Key Takeaways" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Authorized Capital Ceiling" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "The maximum share capital headroom registered in Clause V of your Memorandum (Default: PKR 100,000 divided into 10,000 shares of PKR 10 each). Determines initial SECP incorporation fee." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Paid-Up Capital & Form 22 Mandate" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Actual cash money deposited into the corporate bank account within 30 days of incorporation. Must be verified by a Chartered Accountant via SECP Form 22 within 45 days." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fundamental-concepts", className: "hover:text-gold-600 underline", children: "1. Fundamental Capital Concepts under Companies Act 2017" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#minimum-capital-rules", className: "hover:text-gold-600 underline", children: "2. SECP Statutory Minimum Capital Rules for Startups" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#deposit-mandate", className: "hover:text-gold-600 underline", children: "3. The 30-Day Capital Deposit Mandate & Banking Protocol" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#form22-auditor-certificate", className: "hover:text-gold-600 underline", children: "4. SECP Form 22 & Chartered Accountant Verification" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#increasing-authorized-capital", className: "hover:text-gold-600 underline", children: "5. How to Increase Authorized Capital via Form 7" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#share-allotment-procedures", className: "hover:text-gold-600 underline", children: "6. Share Allotments & Provincial Stamp Duty Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "fundamental-concepts", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Fundamental Capital Concepts under Companies Act 2017" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "When incorporating a Private Limited company or Single Member Company (SMC-Pvt Ltd) with the ",
          /* @__PURE__ */ jsx("strong", { children: "Securities and Exchange Commission of Pakistan (SECP)" }),
          ", understanding share capital definitions under Section 85 of the ",
          /* @__PURE__ */ jsx("strong", { children: "Companies Act 2017" }),
          " is essential:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm mb-1", children: "A. Authorized Share Capital" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "The maximum financial limit of share capital a company is legally authorized to issue to shareholders, as specified in Clause V of its Memorandum of Association. SECP government incorporation fees are calculated based on this figure." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm mb-1", children: "B. Subscribed Share Capital" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "The portion of Authorized Capital that the founding subscribers formally pledge to purchase upon signing the company incorporation documents." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm mb-1", children: "C. Paid-Up Share Capital" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "The actual liquid cash money transferred by subscribers from their personal bank accounts into the newly opened corporate bank account to pay for their allotted shares." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "minimum-capital-rules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. SECP Statutory Minimum Capital Rules for Startups" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under the repealed Companies Ordinance 1984, companies faced rigid minimum paid-up capital floors. To foster entrepreneurship, SECP completely abolished minimum capital requirements for general private limited entities under the ",
          /* @__PURE__ */ jsx("strong", { children: "Companies Act 2017" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Today, a tech startup, software house, digital marketing agency, or consulting firm can legally incorporate with an initial Authorized Capital of ",
          /* @__PURE__ */ jsx("strong", { children: "PKR 100,000" }),
          " (10,000 ordinary shares valued at PKR 10 per share)."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-900 font-semibold text-sm mb-1", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Regulated Sector Exceptions:" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-amber-900 text-xs leading-relaxed", children: [
            "Special licensed business sectors retain mandatory statutory minimum capital floors enforced by specialized regulators:",
            /* @__PURE__ */ jsx("br", {}),
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Non-Banking Finance Companies (NBFC):" }),
            " PKR 20 Million to PKR 100 Million+",
            /* @__PURE__ */ jsx("br", {}),
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Security Guard Agencies:" }),
            " PKR 15 Million",
            /* @__PURE__ */ jsx("br", {}),
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Insurance Companies:" }),
            " PKR 300 Million+"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "SECP CAPITAL STRUCTURING & FORM 22 SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Structure Your SECP Share Capital with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ assists Pakistani founders with share capital allocations, Form 22 Chartered Accountant verifications, and Form 7 capital expansion filings." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order SECP Capital Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "deposit-mandate", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. The 30-Day Capital Deposit Mandate & Banking Protocol" }),
        /* @__PURE__ */ jsx("p", { children: "Under Section 85(1) of the Companies Act 2017, subscribers who pledge share capital during incorporation are under a strict legal obligation to pay for their shares:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "30-Day Mandatory Deposit Deadline:" }),
              " Within 30 days from the date of receiving the official SECP Certificate of Incorporation, every subscriber must deposit their subscribed share capital amount in cash or online bank transfer into the company's newly opened corporate bank account."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Individual Bank Transfer Verification:" }),
              " Deposits must originate from the personal bank account of each respective subscriber matching their registered CNIC/NICOP. Cash deposits must bear the subscriber's name on the bank deposit slip."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "form22-auditor-certificate", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. SECP Form 22 & Chartered Accountant Verification" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Depositing money into the bank account is not enough to satisfy SECP requirements. The company must report the capital deposit to SECP via ",
          /* @__PURE__ */ jsx("strong", { children: "Form 22" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { size: 18 }),
            "Form 22 Statutory Filing Requirements:"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: [
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Filing Deadline:" }),
            " Must be submitted on SECP eServices within 45 days of incorporation.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Auditor Certificate:" }),
            " Must be accompanied by a formal certificate issued by a practicing Chartered Accountant (CA) or Cost and Management Accountant (CMA) confirming inspection of the company's bank statement.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "• ",
            /* @__PURE__ */ jsx("strong", { children: "Non-Compliance Penalties:" }),
            " Failure to file Form 22 within 45 days triggers automatic late filing fines and prevents the company from filing subsequent annual returns (Form A)."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "increasing-authorized-capital", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. How to Increase Authorized Capital via Form 7" }),
        /* @__PURE__ */ jsx("p", { children: "As your business expands or prepares for equity financing from venture capital funds, your current Authorized Capital of PKR 100,000 may prove insufficient. To issue new shares, you must increase your Authorized Capital:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm pl-2 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Step 1: Convene Board Meeting & AGM/EGM" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "The Board of Directors passes a resolution recommending an increase in Authorized Capital (e.g. from PKR 100,000 to PKR 10,000,000) and calls an Extraordinary General Meeting (EGM)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Step 2: Pass Special Resolution" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Shareholders pass a Special Resolution approving the amendment to Clause V of the Memorandum of Association." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Step 3: File SECP Form 7 via eServices" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Submit Form 7 (Notice of Increase in Authorized Capital) on SECP eServices within 15 days, paying the incremental fee schedule based on the new capital bracket." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "SECP CAPITAL COMPLIANCE SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Manage SECP Capital Filings with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Authorized capital structuring, Form 22 auditor verification certificates, Form 7 capital increases, and share transfer compliance." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order SECP Capital Filing Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
