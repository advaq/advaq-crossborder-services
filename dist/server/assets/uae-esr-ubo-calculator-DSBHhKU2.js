import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UAEEsrUboCalculatorPage() {
  const [relevantActivity, setRelevantActivity] = useState("none");
  const [isUboFiled, setIsUboFiled] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const isEsrApplicable = relevantActivity !== "none";
  const esrPenaltyAED = isEsrApplicable ? 2e4 : 0;
  const uboPenaltyAED = !isUboFiled ? 1e5 : 0;
  const totalCompliancePenaltyRiskAED = esrPenaltyAED + uboPenaltyAED;
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://advaq.com"
    }, {
      "@type": "ListItem",
      position: 2,
      name: "Calculators",
      item: "https://advaq.com/calculators"
    }, {
      "@type": "ListItem",
      position: 3,
      name: "UAE Calculators",
      item: "https://advaq.com/calculators/uae"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "UAE ESR & UBO Risk Checker",
      item: "https://advaq.com/calculators/uae-esr-ubo-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE ESR & UBO Compliance Risk Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-esr-ubo-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check Economic Substance Regulations (ESR) filing obligations and Ultimate Beneficial Owner (UBO) declaration penalties under UAE Cabinet Decision No. 57 of 2020 and Cabinet Decision No. 109 of 2023.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What are the 9 Relevant Activities under Economic Substance Regulations (ESR)?",
    a: "The 9 ESR Relevant Activities are: 1) Banking Business, 2) Insurance Business, 3) Investment Fund Management, 4) Lease-Finance Business, 5) Headquarters Business, 6) Shipping Business, 7) Holding Company Business, 8) Intellectual Property (IP) Business, and 9) Distribution & Service Centre Business."
  }, {
    q: "What is the penalty for failing to submit an ESR Notification or Report?",
    a: "Failing to submit an ESR Notification carries an administrative penalty of AED 20,000. Failing to submit an ESR Report or meet the Economic Substance Test carries an administrative penalty of AED 50,000 for the first year and AED 400,000 for subsequent years."
  }, {
    q: "Who is an Ultimate Beneficial Owner (UBO) under UAE Cabinet Decision No. 109 of 2023?",
    a: "A UBO is any natural person who ultimately owns or controls 25% or more of the company's capital, or holds 25% or more of the voting rights. All UAE mainland and freezone entities must maintain a Register of UBOs and Register of Partners/Shareholders."
  }];
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-navy-950", children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdBreadcrumb)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdWebApp)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdFaq)
    } }),
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UAE ESR & UBO Compliance" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE ESR & UBO Compliance Risk Checker (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Test your Economic Substance Regulations (ESR) filing obligations and Ultimate Beneficial Owner (UBO) declaration penalties." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isEsrApplicable || !isUboFiled ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-emerald-50 border-emerald-300 text-emerald-950"}`, children: [
        isEsrApplicable || !isUboFiled ? /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0", size: 40 }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 40 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isEsrApplicable ? "ESR Relevant Activity Identified (Mandatory ESR Filing Required)" : !isUboFiled ? "UBO Register Non-Compliance Risk (AED 100,000 Penalty)" : "🎉 Fully ESR & UBO Compliant" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isEsrApplicable ? "Your business license activity falls under ESR Relevant Activities. You must submit an ESR Notification and ESR Report to the MoF portal annually." : "All UAE companies must maintain a UBO Register and file beneficiary disclosures to prevent license suspension." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Trade License Activity:" }),
          /* @__PURE__ */ jsxs("select", { value: relevantActivity, onChange: (e) => setRelevantActivity(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "none", children: "Standard IT, Consulting, Freelance or Retail Services (No ESR)" }),
            /* @__PURE__ */ jsx("option", { value: "headquarters", children: "Headquarters Business (Group Services)" }),
            /* @__PURE__ */ jsx("option", { value: "distribution", children: "Distribution & Service Centre (Related Party Goods)" }),
            /* @__PURE__ */ jsx("option", { value: "ip", children: "Intellectual Property Holding (Patents, Trademarks)" }),
            /* @__PURE__ */ jsx("option", { value: "holding", children: "Pure Equity Holding Company" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isUboFiled, onChange: (e) => setIsUboFiled(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "UBO Beneficiary Register Filed with Licensing Authority?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Cabinet Resolution No. 58 of 2020 requirement." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/20 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase font-semibold block", children: "Total Statutory Penalty Exposure" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white mt-1", children: [
            "AED ",
            totalCompliancePenaltyRiskAED.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold text-xs uppercase tracking-wider px-6 py-3 font-semibold", children: "File Compliance Returns with ADVAQ" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step ESR & UBO Compliance Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of Cabinet Decision No. 57 of 2020 & Cabinet Decision No. 109 of 2023 risk assessment." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Relevant Activity Classification" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isEsrApplicable ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`, children: isEsrApplicable ? "ESR Applicable ⚠️" : "Exempt ($0 ESR)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Selected Business Activity:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: relevantActivity.toUpperCase() })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Ministry of Finance Portal Scope:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isEsrApplicable ? "text-amber-400" : "text-emerald-400", children: isEsrApplicable ? "Mandatory ESR Return" : "No ESR Return Required" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Ultimate Beneficial Owner (UBO) Status" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isUboFiled ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`, children: isUboFiled ? "UBO Register Filed ✅" : "Non-Compliant ❌" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Cabinet Decision 109 Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isUboFiled ? "text-emerald-400" : "text-red-400", children: isUboFiled ? "Compliant" : "AED 100,000 Fine Exposure" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Trade License Renewal Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: isUboFiled ? "Active" : "Blockade Risk" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Statutory Fine Calculation" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: [
                "AED ",
                totalCompliancePenaltyRiskAED.toLocaleString(),
                " Fine"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "ESR Notification Fine Exposure:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  esrPenaltyAED.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "UBO Register Fine Exposure:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  uboPenaltyAED.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Fine Exposure:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  totalCompliancePenaltyRiskAED.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: ADVAQ Compliance Resolution" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Turnkey Filing" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "ADVAQ UBO & ESR Filing:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "100% Penalty Shield" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Filing Turnaround:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "24–48 Hours" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UAE ESR & UBO Statutory Fine Matrix (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Compliance Requirement" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Governing Regulation" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Filing Deadline" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Non-Compliance Fine" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "ESR Notification Submission" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "Cabinet Decision No. 57 of 2020" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "Within 6 Months of Financial Year End" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "AED 20,000 Fine" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "ESR Substance Report" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "Cabinet Decision No. 57 of 2020" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "Within 12 Months of Financial Year End" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "AED 50,000 Fine (Year 1)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "UBO Beneficiary Disclosure" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "Cabinet Decision No. 109 of 2023" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "Upon License Setup & Renewal" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "AED 100,000 Fine + License Suspension" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UAE ESR & UBO)" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-4xl mx-auto pt-4", children: faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : index), className: "w-full p-5 text-left font-serif text-sm sm:text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { children: faq.q }),
              /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })
            ] }),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50", children: faq.a })
          ] }, index);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-40" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 16 }),
            " ADVAQ UAE Corporate Compliance Desk"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "File Your ESR & UBO Declarations with ADVAQ" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our corporate compliance team prepares compliant UBO Registers and files ESR Notifications with the UAE Ministry of Finance portal." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File Compliance Returns with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Compliance Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAEEsrUboCalculatorPage as component
};
