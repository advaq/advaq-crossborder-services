import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKCorporationTaxCalculatorPage() {
  const [taxableProfit, setTaxableProfit] = useState(12e4);
  const [associatedCompanies, setAssociatedCompanies] = useState(1);
  const n = associatedCompanies;
  const lowerLimit = 5e4 / n;
  const upperLimit = 25e4 / n;
  const fraction = 3 / 200;
  let corporationTax = 0;
  let marginalRelief = 0;
  let effectiveRate = 19;
  if (taxableProfit <= lowerLimit) {
    corporationTax = taxableProfit * 0.19;
    effectiveRate = 19;
  } else if (taxableProfit >= upperLimit) {
    corporationTax = taxableProfit * 0.25;
    effectiveRate = 25;
  } else {
    const fullTaxAt25 = taxableProfit * 0.25;
    marginalRelief = (upperLimit - taxableProfit) * fraction;
    corporationTax = fullTaxAt25 - marginalRelief;
    effectiveRate = corporationTax / taxableProfit * 100;
  }
  const profitAfterTax = taxableProfit - corporationTax;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Corporation Tax & Marginal Relief" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Corporation Tax & Marginal Relief Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your CT600 liability across the 19% Small Profits Rate, 25% Main Rate, and exact Marginal Relief bracket." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Taxable Company Profit (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              taxableProfit.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "5000", max: "400000", step: "5000", value: taxableProfit, onChange: (e) => setTaxableProfit(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "£50k (19% Rate)" }),
            /* @__PURE__ */ jsx("span", { children: "£150k (Marginal Relief)" }),
            /* @__PURE__ */ jsx("span", { children: "£250k+ (25% Rate)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "Number of Associated Companies (including this one):" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2 text-xs", children: [1, 2, 3, 4].map((num) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setAssociatedCompanies(num), className: `p-3 rounded-xl border text-center font-bold transition-all ${associatedCompanies === num ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
            num,
            " Company",
            num > 1 ? "s" : ""
          ] }, num)) }),
          /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-gray-500 block mt-2", children: [
            "Adjusts lower threshold to £",
            (5e4 / associatedCompanies).toLocaleString(),
            " & upper threshold to £",
            (25e4 / associatedCompanies).toLocaleString(),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Corporation Tax Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross Taxable Profit:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                taxableProfit.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Full Tax at 25%:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "£",
                Math.round(taxableProfit * 0.25).toLocaleString()
              ] })
            ] }),
            marginalRelief > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Marginal Relief Discount (3/200):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "-£",
                Math.round(marginalRelief).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Effective Tax Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                effectiveRate.toFixed(2),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Net Corporation Tax Due (CT600)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(corporationTax).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Retained Profit After CT:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400 font-mono", children: [
                "£",
                Math.round(profitAfterTax).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/corporation-tax-return", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File CT600 Return with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  UKCorporationTaxCalculatorPage as component
};
