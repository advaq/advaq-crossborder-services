import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
function USLLCVsCCorpCalculatorPage() {
  const [annualProfit, setAnnualProfit] = useState(1e5);
  const [plansVcFundraising, setPlansVcFundraising] = useState(false);
  const llcTax = 0;
  const llcTakeHome = annualProfit - llcTax;
  const cCorpTax = annualProfit * 0.21;
  const cCorpNetAfterTax = annualProfit - cCorpTax;
  const cCorpDividendTax = cCorpNetAfterTax * 0.3;
  const cCorpTakeHome = cCorpNetAfterTax - cCorpDividendTax;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "LLC vs C-Corp Comparison" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US LLC vs C-Corporation Tax Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Compare 0% pass-through tax efficiency of a foreign-owned US LLC against the 21% corporate tax rate of a Delaware C-Corp." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider block", children: "Annual US Business Net Profit ($):" }),
        /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-gold-600", children: [
          "$",
          annualProfit.toLocaleString(),
          " USD"
        ] }),
        /* @__PURE__ */ jsx("input", { type: "range", min: "20000", max: "500000", step: "10000", value: annualProfit, onChange: (e) => setAnnualProfit(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white flex flex-col justify-between relative shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-bl-xl", children: "Best for Bootstrapped / Agencies" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-white mb-2", children: "Single-Member US LLC" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mb-6", children: "Pass-through entity. 0% US Federal Income Tax for non-residents without ETBUS." }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-navy-200 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "US Corporate Tax Rate:" }),
                /* @__PURE__ */ jsx("strong", { className: "font-mono text-emerald-400", children: "0% (Pass-through)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Total US Federal Tax Paid:" }),
                /* @__PURE__ */ jsx("strong", { className: "font-mono text-emerald-400", children: "$0 USD" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-4 rounded-xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase font-semibold block mb-1", children: "Net Owner Take-Home" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "$",
              llcTakeHome.toLocaleString(),
              " USD"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-navy-950 mb-2", children: "Delaware C-Corporation" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-6", children: "Required for US VC fundraising & stock option pools. Subject to double taxation." }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-gray-700 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "21% Federal Corporate Tax:" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-red-600", children: [
                  "$",
                  Math.round(cCorpTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "30% Dividend Withholding Tax:" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-red-600", children: [
                  "$",
                  Math.round(cCorpDividendTax).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 p-4 rounded-xl text-center border border-navy-100", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-600 uppercase font-semibold block mb-1", children: "Net Owner Take-Home" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
              "$",
              Math.round(cCorpTakeHome).toLocaleString(),
              " USD"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need Structure Advice from a US Tax Attorney?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Form Wyoming LLC or Delaware C-Corp with full tax structuring." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Form US Entity with ADVAQ" })
      ] })
    ] }) })
  ] });
}
export {
  USLLCVsCCorpCalculatorPage as component
};
