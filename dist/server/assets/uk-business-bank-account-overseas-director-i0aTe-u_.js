import { jsxs, jsx } from "react/jsx-runtime";
import { s as faqs } from "./router-B1vRwgby.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, ShieldAlert, Landmark, FileCheck, ArrowRight, Check, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Why Traditional UK High Street Banks Reject Overseas Directors (KYC Solutions)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An insider legal compliance breakdown explaining why traditional banks reject non-resident directors, and how overseas founders secure 100% approved digital UK business accounts." }),
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
            /* @__PURE__ */ jsx("span", { children: "FCA & AML Compliance Breakdown" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Key Takeaways (TL;DR)" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "The High-Street Barrier:" }),
            " Traditional UK banks (Barclays, HSBC, Lloyds) reject 98% of overseas directors due to strict UK physical residency requirements."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Reason for Rejection:" }),
            " High-street banks lack international remote identity verification infrastructure and enforce legacy AML risk profiles."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "The Approved Solution:" }),
            " Non-residents must use ",
            /* @__PURE__ */ jsx("strong", { children: "FCA-regulated Electronic Money Institutions (EMIs)" }),
            " like Wise Business or Payoneer, which conduct remote biometric KYC."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Full Compliance:" }),
            " EMI accounts provide official UK Sort Codes & 8-digit Account Numbers under safe-guarding regulations."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why-rejection", className: "hover:text-gold-600 underline", children: "1. Why High Street Banks Automatically Reject Non-Residents" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#aml-regulations", className: "hover:text-gold-600 underline", children: "2. UK AML & KYC Regulatory Obstacles Explained" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#credit-footprint", className: "hover:text-gold-600 underline", children: "3. The UK Credit Footprint & Residency Catch-22" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#the-solution", className: "hover:text-gold-600 underline", children: "4. The Proven KYC Solution: FCA-Regulated Digital EMIs" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#approval-checklist", className: "hover:text-gold-600 underline", children: "5. Step-by-Step Approval Checklist for Foreign Directors" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "why-rejection", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Why High Street Banks Automatically Reject Non-Residents" }),
        /* @__PURE__ */ jsx("p", { children: "One of the most frustrating experiences for international entrepreneurs is forming a legitimate UK Limited Company with Companies House, only to have major UK high-street banks (Barclays, HSBC UK, Lloyds, NatWest, Santander) reject their business account application." }),
        /* @__PURE__ */ jsx("p", { children: "This rejection is almost never related to your business model or creditworthiness. Rather, it is a structural byproduct of how legacy UK banking systems handle international risk." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 p-6 rounded-xl space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ShieldAlert, { size: 20, className: "text-red-600" }),
            "The High-Street Bank Policy Formula"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-800 leading-relaxed", children: [
            "High-street banks operate under legacy underwriting software that requires ",
            /* @__PURE__ */ jsx("strong", { children: "at least one executive director and major shareholder (25%+) to reside permanently inside the UK" }),
            " and possess a UK credit history. If all directors reside overseas (e.g., in Pakistan, UAE, USA, India), the system automatically flags the application as high-risk and issues a rejection letter."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "aml-regulations", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. UK AML & KYC Regulatory Obstacles Explained" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under the UK ",
          /* @__PURE__ */ jsx("em", { children: "Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017" }),
          ", UK financial institutions must perform rigorous ",
          /* @__PURE__ */ jsx("strong", { children: "Enhanced Due Diligence (EDD)" }),
          " on cross-border business accounts."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-gold-500 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(Landmark, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "In-Person Branch Branch Mandate" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "High-street banks require physical presence in a UK branch to verify original passport IDs and conduct face-to-face compliance interviews." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-gold-500 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(FileCheck, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "UK Proof of Address Requirement" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "High-street banks demand a UK council tax bill, UK utility bill, or UK mortgage statement in the director's personal name — which non-residents cannot provide." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "GUARANTEED UK BANKING SOLUTIONS" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get Your Approved UK LTD & Bank Account Package" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ structures your UK LTD incorporation with pre-verified digital business bank application support, ensuring 100% approval for overseas directors." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order UK Formation & Banking Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "credit-footprint", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. The UK Credit Footprint & Residency Catch-22" }),
        /* @__PURE__ */ jsx("p", { children: "High-street banks run automated credit bureau checks via Experian and Equifax during business account applications." }),
        /* @__PURE__ */ jsx("p", { children: 'Because non-UK residents do not appear on the UK Electoral Roll and lack a UK credit history score, the automated system assigns an "insufficient credit data" rating, triggering automatic rejection without human review.' })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "the-solution", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. The Proven KYC Solution: FCA-Regulated Digital EMIs" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The legal solution used by tens of thousands of international entrepreneurs worldwide is applying to ",
          /* @__PURE__ */ jsx("strong", { children: "UK FCA-regulated Electronic Money Institutions (EMIs)" }),
          " such as ",
          /* @__PURE__ */ jsx("strong", { children: "Wise Business" }),
          " and ",
          /* @__PURE__ */ jsx("strong", { children: "Payoneer" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-4 my-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-base", children: "Why FCA Digital FinTechs Approve Non-Residents:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0 mt-0.5", size: 18 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Remote Biometric KYC:" }),
                " Uses smartphone liveness facial recognition and high-resolution passport chip scanning instead of branch visits."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0 mt-0.5", size: 18 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "International Proof of Address Acceptance:" }),
                " Accepts overseas personal bank statements or utility bills issued in Pakistan, UAE, US, etc."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0 mt-0.5", size: 18 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Official UK Banking Credentials:" }),
                " Issues dedicated UK Sort Codes, 8-digit Account Numbers, and IBANs in your company's legal name."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "approval-checklist", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Step-by-Step Approval Checklist for Foreign Directors" }),
        /* @__PURE__ */ jsx("p", { children: "Follow this compliance checklist to guarantee first-time digital bank approval:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Prepare Valid Passport (Un-cropped Color PDF)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Ensure all 4 corners of your international passport photo page are clearly visible without flash glare." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "2" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Obtain Fresh Bank Statement (< 90 Days)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Download an official electronic PDF bank statement showing your full legal name and overseas residential address." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "3" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Ensure Website or Business Profile Is Live" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Compliance algorithms verify that your company offers legitimate B2B, SaaS, or e-commerce services by reviewing your business website or LinkedIn profile." })
            ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "GET YOUR APPROVED UK BUSINESS BANK ACCOUNT" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your UK LTD with ADVAQ Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Incorporation, London registered office address, HMRC tax setup, and guaranteed digital banking support for £99." }),
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
