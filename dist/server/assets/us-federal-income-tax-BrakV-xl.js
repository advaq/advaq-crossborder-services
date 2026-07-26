import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function USFederalIncomeTaxCalculatorPage() {
  const [grossUseciIncome, setGrossUseciIncome] = useState(45e3);
  const [businessExpenses, setBusinessExpenses] = useState(1e4);
  const netTaxableIncome = Math.max(0, grossUseciIncome - businessExpenses);
  let federalTax = 0;
  if (netTaxableIncome <= 11600) {
    federalTax = netTaxableIncome * 0.1;
  } else if (netTaxableIncome <= 47150) {
    federalTax = 1160 + (netTaxableIncome - 11600) * 0.12;
  } else if (netTaxableIncome <= 100525) {
    federalTax = 1160 + 4266 + (netTaxableIncome - 47150) * 0.22;
  } else if (netTaxableIncome <= 191950) {
    federalTax = 1160 + 4266 + 11742.5 + (netTaxableIncome - 100525) * 0.24;
  } else {
    federalTax = 1160 + 4266 + 11742.5 + 21942 + (netTaxableIncome - 191950) * 0.32;
  }
  const effectiveTaxRate = netTaxableIncome > 0 ? federalTax / netTaxableIncome * 100 : 0;
  const netTakeHome = grossUseciIncome - businessExpenses - federalTax;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US Federal Income Tax (1040-NR)" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US Federal Income Tax Calculator for Non-Residents (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your Form 1040-NR tax liability for Effectively Connected Income (ECI) from US operations, software, or physical trade." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Gross US Effectively Connected Income (ECI) ($):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              grossUseciIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "5000", max: "200000", step: "5000", value: grossUseciIncome, onChange: (e) => setGrossUseciIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Income generated from US trade, physical presence, or US employees." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Allowable US Business Expense Deductions ($):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              businessExpenses.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: grossUseciIncome * 0.6, step: "2500", value: businessExpenses, onChange: (e) => setBusinessExpenses(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Server costs, advertising, contractor fees, and operational overhead." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Form 1040-NR Tax Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross US ECI Income:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                grossUseciIncome.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Less Business Deductions:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "-$",
                businessExpenses.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Taxable Income:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                netTaxableIncome.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Effective Federal Tax Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                effectiveTaxRate.toFixed(1),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Estimated Form 1040-NR Tax Due" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "$",
              Math.round(federalTax).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Net After-Tax Income:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400 font-mono", children: [
                "$",
                Math.round(netTakeHome).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/us-services/itin-application", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File Form 1040-NR with ADVAQ PTIN/CPA" }) })
      ] })
    ] }) })
  ] });
}
export {
  USFederalIncomeTaxCalculatorPage as component
};
