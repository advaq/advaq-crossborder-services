import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
function UAETaxCalculatorPage() {
  const [annualRevenueAED, setAnnualRevenueAED] = useState(15e5);
  const [annualNetProfitAED, setAnnualNetProfitAED] = useState(45e4);
  const [isQFZP, setIsQFZP] = useState(false);
  const [hasRelatedPartyTransactions, setHasRelatedPartyTransactions] = useState(false);
  const isEligibleForSBR = annualRevenueAED <= 3e6;
  const taxableProfitAbove375k = Math.max(0, annualNetProfitAED - 375e3);
  let standardCorporateTaxAED = taxableProfitAbove375k * 0.09;
  if (isQFZP) {
    standardCorporateTaxAED = 0;
  }
  const taxWithSBRAED = isEligibleForSBR || isQFZP ? 0 : standardCorporateTaxAED;
  const sbrSavingsAED = isEligibleForSBR || isQFZP ? standardCorporateTaxAED : 0;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UAE Corporate Tax & SBR Relief" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE 9% Corporate Tax & Small Business Relief Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your exact UAE Corporate Tax liability, 0% threshold (under AED 375,000 profit), and AED 3M Small Business Relief (SBR) tax savings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isEligibleForSBR ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-navy-900 border-gold-500 text-white"}`, children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "text-gold-500 shrink-0", size: 40 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isEligibleForSBR ? "🎉 Eligible for 0% Corporate Tax via Small Business Relief (SBR)!" : "Standard 9% Corporate Tax Rate Applies (Revenue > AED 3M)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isEligibleForSBR ? `Your revenue (AED ${(annualRevenueAED / 1e6).toFixed(2)}M) is below AED 3 Million limit. By electing Small Business Relief, your UAE Corporate Tax is AED 0!` : `Your revenue exceeds the AED 3 Million SBR limit. The standard 9% tax applies on net profits exceeding AED 375,000.` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Revenue (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              annualRevenueAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "100000", max: "6000000", step: "100000", value: annualRevenueAED, onChange: (e) => setAnnualRevenueAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "SBR Exemption Limit: AED 3,000,000." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Net Taxable Profit (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              annualNetProfitAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "2000000", step: "50000", value: annualNetProfitAED, onChange: (e) => setAnnualNetProfitAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "0% Threshold: AED 375,000 profit." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: "Standard Corporate Tax (Without SBR)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
            "AED ",
            Math.round(standardCorporateTaxAED).toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Calculated as 9% on profit above AED 375k." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-3 shadow-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gold-500 uppercase", children: "Net Corporate Tax Payable (With SBR Election)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
            "AED ",
            Math.round(taxWithSBRAED).toLocaleString()
          ] }),
          isEligibleForSBR && /* @__PURE__ */ jsxs("p", { className: "text-xs text-emerald-400 font-semibold", children: [
            "🎉 Small Business Relief saves you AED ",
            Math.round(sbrSavingsAED).toLocaleString(),
            "!"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need FTA Corporate Tax Registration & SBR Election?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Official FTA TRN registration & Small Business Relief filing." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Register Corporate Tax with ADVAQ" })
      ] })
    ] }) })
  ] });
}
export {
  UAETaxCalculatorPage as component
};
