import { jsxs, jsx } from "react/jsx-runtime";
import { r as faqs } from "./router-DZ5LLfdT.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, FileCheck, Check, ArrowRight, Building2, FileText, CreditCard, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "What Documents Are Needed to Form a UK Company Overseas? (2026 KYC Checklist)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A definitive guide to passport requirements, international proof of address standards, Companies House compliance, and anti-money laundering (AML) verification for foreign directors." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Verified UK AML & KYC Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Document Checklist Summary (TL;DR)" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: [
        "To register a UK Limited Company remotely from overseas, foreign directors & shareholders need to provide only ",
        /* @__PURE__ */ jsx("strong", { children: "two primary personal documents" }),
        " alongside standard company structural details:"
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "grid sm:grid-cols-2 gap-3 text-xs pt-3 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 bg-navy-950 p-3 rounded-lg text-navy-100 border border-white/10", children: [
          /* @__PURE__ */ jsx(FileCheck, { size: 16, className: "text-gold-500 shrink-0" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "1. Proof of ID:" }),
            " Valid International Passport or National ID Card"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 bg-navy-950 p-3 rounded-lg text-navy-100 border border-white/10", children: [
          /* @__PURE__ */ jsx(FileCheck, { size: 16, className: "text-gold-500 shrink-0" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "2. Proof of Address:" }),
            " Bank statement or utility bill (under 3 months old)"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 bg-navy-950 p-3 rounded-lg text-navy-100 border border-white/10", children: [
          /* @__PURE__ */ jsx(FileCheck, { size: 16, className: "text-gold-500 shrink-0" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "3. UK Registered Address:" }),
            " Commercial UK Virtual Office address"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 bg-navy-950 p-3 rounded-lg text-navy-100 border border-white/10", children: [
          /* @__PURE__ */ jsx(FileCheck, { size: 16, className: "text-gold-500 shrink-0" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "4. Company Structure:" }),
            " Unique Name, SIC Code, Share Allocation"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why-kyc", className: "hover:text-gold-600 underline", children: "Why UK Law Requires Identity & Address Documents (AML Regulations)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#proof-of-id", className: "hover:text-gold-600 underline", children: "Document 1: Acceptable Proof of Identity (Passport & Photo ID)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#proof-of-address", className: "hover:text-gold-600 underline", children: "Document 2: Acceptable Overseas Proof of Address" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#company-data", className: "hover:text-gold-600 underline", children: "Required Company Information (Name, SIC & Shareholding)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#uk-addresses", className: "hover:text-gold-600 underline", children: "UK Address Requirements (Registered Office vs Directors' Service Address)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#verification-process", className: "hover:text-gold-600 underline", children: "How Digital Identity Verification Works in Practice" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "why-kyc", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Why UK Law Requires Identity & Address Documents" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under the UK ",
          /* @__PURE__ */ jsx("em", { children: "Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017" }),
          " and recent updates via the ",
          /* @__PURE__ */ jsx("em", { children: "Economic Crime and Corporate Transparency Act 2023" }),
          ", all regulated UK formation providers are legally mandated to conduct ",
          /* @__PURE__ */ jsx("strong", { children: "Know Your Customer (KYC)" }),
          " identity checks on company directors and beneficial owners."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "These checks ensure that the UK corporate register remains transparent, legitimate, and free from financial crime, while enabling honest international entrepreneurs to access global commerce smoothly." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "proof-of-id", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Document 1: Acceptable Proof of Identity (Photo ID)" }),
        /* @__PURE__ */ jsx("p", { children: "Every director, shareholder, and Person with Significant Control (PSC) holding 25% or more shares must submit a clear, un-cropped digital color scan of a valid government-issued photo ID." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-3 my-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-base", children: "Valid Proof of Identity Options:" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "International Passport (Recommended):" }),
                " Must be valid and signed, showing full photo page and MRZ code."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "National Identity Card:" }),
                " Government-issued smart ID card with English translation."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Driving License:" }),
                " Official photo driving permit containing current residential address."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "proof-of-address", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Document 2: Acceptable Overseas Proof of Address" }),
        /* @__PURE__ */ jsx("p", { children: "Proof of residential address verifies your place of living in your home country (e.g. Pakistan, UAE, USA, or Canada)." }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-emerald-200 bg-emerald-50/30 p-5 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-emerald-900 text-base mb-2", children: "Accepted Address Documents (Issued within 3 months):" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs text-gray-700", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-emerald-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Personal Bank Statement (PDF or digital scan showing full name & address)" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-emerald-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Credit Card Statement" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-emerald-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Utility Bill (Electricity, Water, Gas, Landline Internet)" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-emerald-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Government Tax Letter / Tax Assessment" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-red-200 bg-red-50/30 p-5 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-red-900 text-base mb-2", children: "Un-Accepted Documents (Will be Rejected):" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs text-gray-700", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Mobile phone bills (prepaid or postpaid cell records)" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Documents older than 90 days" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Screenshots or cropped partial documents missing page borders" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: "Documents where name differs from Passport identity" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "FAST DIGITAL VERIFICATION" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Hassle-Free Non-Resident UK Incorporation" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ handles your complete UK incorporation, KYC verification, virtual London registered office address, and HMRC registration in 24 hours." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order UK Company Formation ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "company-data", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Required Company Structure Data" }),
        /* @__PURE__ */ jsx("p", { children: "In addition to personal identity documents, you will provide basic details about how your company is configured:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-white border border-border p-4 rounded-xl text-sm", children: [
            /* @__PURE__ */ jsx(Building2, { className: "text-gold-500 shrink-0 mt-0.5", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Proposed Business Name:" }),
              ' Must end with "Limited" or "LTD".'
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-white border border-border p-4 rounded-xl text-sm", children: [
            /* @__PURE__ */ jsx(FileText, { className: "text-gold-500 shrink-0 mt-0.5", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "SIC Code (Nature of Business):" }),
              " Standard 5-digit code classifying your industry (e.g. 62020 for Information Technology consultancy)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-white border border-border p-4 rounded-xl text-sm", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "text-gold-500 shrink-0 mt-0.5", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Share Capital Allocation:" }),
              " Standard setup is 100 ordinary shares valued at £1 per share (£100 total authorized share capital)."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "uk-addresses", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. UK Address Requirements: Registered Office vs Service Address" }),
        /* @__PURE__ */ jsx("p", { children: "Companies House requires two specific addresses for every UK Limited Company:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-base", children: "A. Registered Office Address" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "The official legal address of the company located in the UK. This address receives official statutory notices from Companies House and HMRC. Overseas directors purchase a UK Virtual Office address service." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-base", children: "B. Directors' Service Address" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "The public contact address for company directors. By using a Directors' Service Address service, your personal overseas residential address remains confidential and protected from public records." })
          ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "GET YOUR UK COMPANY FORMED TODAY" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your UK LTD with Full KYC Assistance" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Submit your passport & proof of address online. ADVAQ incorporates your UK LTD in 24 hours." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK Company Formation — £99" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
