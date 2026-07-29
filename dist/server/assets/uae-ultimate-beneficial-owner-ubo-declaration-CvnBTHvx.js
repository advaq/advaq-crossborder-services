import { jsxs, jsx } from "react/jsx-runtime";
import { v as faqs } from "./router-DoRrh2l-.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Users, Building2, ArrowRight, Check, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "UAE Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Ultimate Beneficial Owner (UBO) Declaration in the UAE: Rules & Compliance" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An in-depth legal transparency masterclass for business owners on UAE Cabinet Resolution No. 109 of 2023, registering Ultimate Beneficial Owners (UBO), maintaining statutory shareholder registers, and penalty protection." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ UAE Legal Compliance Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "15 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Cabinet Resolution No. 109 of 2023 Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "UBO Statutory Framework Essentials" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "25% UBO Threshold" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Any natural person owning or controlling 25%+ of company capital or voting rights." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "3 Mandatory Registers" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "(1) Register of Real Beneficial Owners, (2) Register of Partners/Shareholders, (3) Register of Nominee Directors." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "15-Day Update Mandate" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Notify licensing authority within 15 days of any ownership or passport detail changes." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Administrative Fines" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Fines start at AED 20,000 to AED 100,000 plus potential trade license suspension." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ubo-framework", className: "hover:text-gold-600 underline", children: "1. Understanding Cabinet Resolution No. 109 of 2023 on UBOs" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#who-is-ubo", className: "hover:text-gold-600 underline", children: "2. Who Qualifies as an Ultimate Beneficial Owner (25% Rule)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ubo-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive UBO Compliance Requirements Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#three-registers", className: "hover:text-gold-600 underline", children: "4. The 3 Mandatory Corporate Registers Every Company Must Keep" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#reporting-updates", className: "hover:text-gold-600 underline", children: "5. Reporting Timelines (15-Day Rule) & Licensing Portals" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#penalties", className: "hover:text-gold-600 underline", children: "6. Avoiding Fines & Trade License Suspensions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "ubo-framework", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Understanding Cabinet Resolution No. 109 of 2023 on UBOs" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To align with global Financial Action Task Force (FATF) standards and enhance international financial transparency, the UAE government enacted ",
          /* @__PURE__ */ jsx("strong", { children: "Cabinet Resolution No. 109 of 2023" }),
          " on the Regulation of Real Beneficial Owner Procedures."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The resolution requires all commercial corporate entities registered in UAE Freezones and Mainland jurisdictions to maintain accurate records of their ultimate human beneficial owners and declare them to licensing authorities." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "who-is-ubo", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Who Qualifies as an Ultimate Beneficial Owner (25% Rule)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under UAE statutory law, a ",
          /* @__PURE__ */ jsx("strong", { children: "Real Beneficial Owner (UBO)" }),
          " is determined through a 3-tier cascade test:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Users, { className: "text-gold-600", size: 18 }),
              "Tier 1: 25% Equity or Voting Control Test"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "Any natural person who ultimately owns or controls ",
              /* @__PURE__ */ jsx("strong", { children: "25% or more" }),
              " of company capital, shares, or voting rights (whether held directly or indirectly through corporate holding entities)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "text-gold-600", size: 18 }),
              "Tier 2: Ultimate Control Test"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "If no individual meets the 25% ownership threshold, any natural person who exercises ultimate control over the company through contractual rights or director appointments." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Building2, { className: "text-gold-600", size: 18 }),
              "Tier 3: Senior Management Official Test"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "If no natural person is identified under Tier 1 or Tier 2, the natural person holding the executive position of Senior Management Official (Managing Director or CEO)." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UAE UBO COMPLIANCE SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "File Your UAE UBO Declaration with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares statutory UBO registers, submits official beneficial ownership declarations to Freezone & DET portals, and manages ongoing 15-day updates." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order UBO Compliance Filing ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "ubo-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive UBO Compliance Requirements Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of mandatory internal corporate registers:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Mandatory Corporate Register" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Required Data Fields" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Storage Location Mandate" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Submission Deadline" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Register of Real Beneficial Owners (UBO)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Full Name, Passport Copy, Nationality, % Ownership, Address" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Registered UAE Office Address" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900 font-bold", children: "Within 15 Days of Setup / Change" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Register of Partners / Shareholders" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Share Certificate Nos, Voting Rights, Number of Shares" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Registered UAE Office Address" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Maintained Continuously" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Register of Nominee Directors" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Nominee Details, Appointing Entity Details, Service Date" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Registered UAE Office Address" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Within 15 Days of Appointment" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "three-registers", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. The 3 Mandatory Corporate Registers Every Company Must Keep" }),
        /* @__PURE__ */ jsx("p", { children: "Under Cabinet Resolution No. 109 of 2023, every active UAE company must maintain three statutory internal registers:" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "1. Register of Beneficial Owners (UBO):" }),
              " Detailing ultimate natural human owners controlling 25%+ equity."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "2. Register of Partners / Shareholders:" }),
              " Recording direct shareholdings, voting rights, and share classes."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "3. Register of Nominee Directors:" }),
              " Listing any individuals serving as directors under formal nominee arrangements."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "reporting-updates", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Reporting Timelines (15-Day Rule) & Licensing Portals" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Whenever a share transfer occurs, a new passport is issued to a shareholder, or residential addresses change, the company must submit an updated UBO declaration to its licensing authority within ",
          /* @__PURE__ */ jsx("strong", { children: "15 business days" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Declarations are submitted via digital portals (such as the Dubai DET portal or respective Freezone portal)." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "penalties", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Avoiding Fines & Trade License Suspensions" }),
        /* @__PURE__ */ jsx("p", { children: "Failure to maintain or submit statutory UBO registers triggers severe administrative penalties:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm pl-2 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "AED 20,000 First Offense Penalty" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Imposed for failing to file initial UBO records or missing the 15-day update deadline." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "AED 100,000 Repeat Penalty & License Hold" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Imposed for repeated non-compliance, alongside trade license suspension and bank account freezes." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "UAE CORPORATE TRANSPARENCY SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Maintain 100% UBO Compliance with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Beneficial owner register drafting, Freezone & DET portal submissions, and 15-day detail updates handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UBO Compliance Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
