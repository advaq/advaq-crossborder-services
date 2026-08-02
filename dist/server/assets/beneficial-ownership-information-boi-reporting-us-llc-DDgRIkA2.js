import { jsxs, jsx } from "react/jsx-runtime";
import { aM as faqs } from "./router-BTjKdpe0.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Percent, Briefcase, ArrowRight, Check, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "US Business Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Corporate Transparency Act (CTA) & BOI Reporting Rules for Foreign-Owned US LLCs" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive federal compliance masterclass for foreign non-resident founders on FinCEN Beneficial Ownership Information (BOI) reporting, passport document uploads, filing deadlines, and severe civil/criminal penalty enforcement." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Federal Compliance Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "16 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "FinCEN Corporate Transparency Act Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "FinCEN BOI Reporting Highlights" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Mandatory US Federal Filing" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Enforced by the Financial Crimes Enforcement Network (FinCEN) under the Corporate Transparency Act." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "25%+ Beneficial Owners" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Applies to all individuals owning 25% or more equity or exercising substantial operational control over the LLC." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Passport Verification" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Requires uploading an image of your valid international passport along with personal residential address details." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Severe Penalties ($591/day)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Non-compliance carries civil fines up to $591/day and criminal penalties up to $10,000 and 2 years imprisonment." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-cta", className: "hover:text-gold-600 underline", children: "1. What Is the Corporate Transparency Act (CTA) & FinCEN BOI Mandate?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#who-must-file", className: "hover:text-gold-600 underline", children: "2. Who Is Classified as a Beneficial Owner?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#disclosure-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive FinCEN BOI Disclosure Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#required-information", className: "hover:text-gold-600 underline", children: "4. What Information Must Be Disclosed in the BOI Report?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fincen-deadlines", className: "hover:text-gold-600 underline", children: "5. FinCEN Filing Deadlines & 30-Day Mandatory Update Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#penalties-enforcement", className: "hover:text-gold-600 underline", children: "6. Fines & Criminal Penalties for Non-Filing ($591/Day Civil Fine)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-cta", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What Is the Corporate Transparency Act (CTA) & FinCEN BOI Mandate?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The ",
          /* @__PURE__ */ jsx("strong", { children: "Corporate Transparency Act (CTA)" }),
          " is a US federal law enacted to prevent illicit financial activity, money laundering, and opaque shell company abuse."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Administered by the ",
          /* @__PURE__ */ jsx("strong", { children: "Financial Crimes Enforcement Network (FinCEN)" }),
          ", a bureau of the US Department of the Treasury, the CTA requires all reporting companies (including single-member and multi-member US LLCs owned by non-resident aliens) to file a ",
          /* @__PURE__ */ jsx("strong", { children: "Beneficial Ownership Information (BOI) report" }),
          " disclosing the ultimate human owners behind the entity."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "who-must-file", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Who Is Classified as a Beneficial Owner?" }),
        /* @__PURE__ */ jsx("p", { children: "Under FinCEN regulations (31 C.F.R. § 1010.380), a Beneficial Owner is defined as any individual who, directly or indirectly:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Percent, { className: "text-gold-600", size: 18 }),
              "25%+ Equity Ownership Interest"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Any natural person who owns or controls 25% or more of the ownership interests (membership units or equity) of the US LLC." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
              "Substantial Operational Control"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Any individual serving as a Senior Officer, CEO, Managing Member, or decision-maker possessing authority over major corporate actions, financial distribution, or executive appointments." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "disclosure-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive FinCEN BOI Disclosure Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of required beneficial owner data:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Data Field" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Required Format" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Foreign Citizen Accepted" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Verification Document" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Full Legal Name & DOB" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Matches Official Passport Exactly" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Yes (Non-US Citizens)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Government Photo ID" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Residential Address" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Physical Home Street Address" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Yes (Foreign Residential Address)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "P.O. Boxes Strictly Prohibited" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Passport Document Scan" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "High-Res PDF / JPEG / PNG Upload" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Yes (Unexpired Foreign Passport)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Valid Non-Expired Passport" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "FINCEN BOI REPORTING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "File Your FinCEN BOI Report Securely with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares and submits encrypted FinCEN BOI filings for non-resident LLC owners, ensuring 100% federal compliance and protection against $591/day penalties." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/boi-report", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order FinCEN BOI Filing Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "required-information", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. What Information Must Be Disclosed in the BOI Report?" }),
        /* @__PURE__ */ jsx("p", { children: "For each beneficial owner, the BOI report must disclose:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Full Legal Name:" }),
              " First, middle, and last name matching official identity documents."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Date of Birth:" }),
              " Exact date of birth (MM/DD/YYYY)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Residential Street Address:" }),
              " Current physical home address (foreign non-US street addresses fully accepted; P.O. boxes and registered agent addresses prohibited)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Passport Verification Document:" }),
              " Unique identification number from a valid non-expired international passport and a clear image scan upload."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "fincen-deadlines", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. FinCEN Filing Deadlines & 30-Day Mandatory Update Rules" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For reporting companies created in 2026, the BOI report must be filed within ",
          /* @__PURE__ */ jsx("strong", { children: "90 calendar days" }),
          " of receiving official notice of formation from the Secretary of State."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Additionally, if any reported beneficial owner details change (e.g. owner moves to a new residential address, renews a expired passport, or sells equity), an ",
          /* @__PURE__ */ jsx("strong", { children: "updated BOI report must be submitted within 30 calendar days" }),
          " of the change."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "penalties-enforcement", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Fines & Criminal Penalties for Non-Filing ($591/Day Civil Fine)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "FinCEN strictly enforces civil penalties of up to ",
          /* @__PURE__ */ jsx("strong", { children: "$591 per day" }),
          " (inflation adjusted) for each day the failure to file continues."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Willful failure to file or providing fraudulent beneficial ownership information carries severe criminal penalties, including fines up to $10,000 and up to 2 years imprisonment in federal custody." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "FINCEN BOI REPORTING SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "File Your FinCEN BOI Report with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Beneficial owner verification, encrypted FinCEN portal submission, FinCEN ID management, and $591/day penalty protection handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/boi-report", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order FinCEN BOI Report Filing" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
