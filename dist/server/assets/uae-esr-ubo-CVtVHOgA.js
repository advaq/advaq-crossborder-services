import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
function UAEEsrUboCalculatorPage() {
  const [relevantActivity, setRelevantActivity] = useState("none");
  const [isUboFiled, setIsUboFiled] = useState(true);
  const isEsrApplicable = relevantActivity !== "none";
  const esrPenaltyAED = isEsrApplicable ? 2e4 : 0;
  const uboPenaltyAED = !isUboFiled ? 1e5 : 0;
  const totalCompliancePenaltyRiskAED = esrPenaltyAED + uboPenaltyAED;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UAE ESR & UBO Compliance" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE ESR & UBO Compliance Risk Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Test your Economic Substance Regulations (ESR) filing obligations and Ultimate Beneficial Owner (UBO) declaration penalties." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
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
    ] }) })
  ] });
}
export {
  UAEEsrUboCalculatorPage as component
};
