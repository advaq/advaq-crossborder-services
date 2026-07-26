import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
function UAEVATCalculatorPage() {
  const [annualTurnoverAED, setAnnualTurnoverAED] = useState(45e4);
  const [annualVatExpensesAED, setAnnualVatExpensesAED] = useState(1e5);
  const [inputRecoveryPercentage, setInputRecoveryPercentage] = useState(100);
  const mandatoryThreshold = 375e3;
  const voluntaryThreshold = 187500;
  const isMandatory = annualTurnoverAED >= mandatoryThreshold;
  const isVoluntary = annualTurnoverAED >= voluntaryThreshold && !isMandatory;
  const vatOutputAED = annualTurnoverAED * 0.05;
  const recoverableVatInputAED = annualVatExpensesAED * 0.05 * (inputRecoveryPercentage / 100);
  const netVatPayableAED = Math.max(0, vatOutputAED - recoverableVatInputAED);
  const netVatRefundAED = recoverableVatInputAED > vatOutputAED ? recoverableVatInputAED - vatOutputAED : 0;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UAE 5% VAT Calculator" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE 5% VAT Registration & Return Estimator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Monitor your annual UAE turnover against the mandatory AED 375k VAT limit and calculate your 5% quarterly FTA VAT bill." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isMandatory ? "bg-amber-50 border-amber-300 text-amber-950" : isVoluntary ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-gray-50 border-gray-200 text-gray-800"}`, children: [
        isMandatory ? /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0", size: 40 }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 40 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isMandatory ? "Mandatory UAE VAT Registration Required (Over AED 375,000)" : isVoluntary ? "Eligible for Voluntary UAE VAT Registration (Over AED 187,500)" : "Below VAT Threshold (Registration Optional)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isMandatory ? "Your annual turnover has exceeded AED 375,000. Under FTA regulations, you must register for UAE VAT to avoid AED 20,000 late registration penalties." : "You can voluntarily register for UAE VAT to reclaim 5% input tax on your business expenses." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual UAE Turnover (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              annualTurnoverAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "1500000", step: "25000", value: annualTurnoverAED, onChange: (e) => setAnnualTurnoverAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Mandatory Limit: AED 375,000." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual VAT-Subject Expenses (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              annualVatExpensesAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: annualTurnoverAED * 0.7, step: "10000", value: annualVatExpensesAED, onChange: (e) => setAnnualVatExpensesAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: "5% Output VAT Collected" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
            "AED ",
            Math.round(vatOutputAED).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-3 shadow-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gold-500 uppercase", children: "Net Annual FTA VAT Payable" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
            "AED ",
            Math.round(netVatPayableAED).toLocaleString()
          ] }),
          netVatRefundAED > 0 && /* @__PURE__ */ jsxs("p", { className: "text-xs text-emerald-400 font-semibold", children: [
            "🎉 You qualify for an FTA Input VAT Refund of AED ",
            Math.round(netVatRefundAED).toLocaleString(),
            "!"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need UAE VAT Registration & Quarterly Return Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Avoid AED 20,000 late penalties with ADVAQ FTA specialists." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/uae-services/vat-registration", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Register UAE VAT with ADVAQ" })
      ] })
    ] }) })
  ] });
}
export {
  UAEVATCalculatorPage as component
};
