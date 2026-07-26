import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKSoleTraderVsLTDCalculatorPage() {
  const [annualProfit, setAnnualProfit] = useState(6e4);
  const personalAllowance = 12570;
  const taxableProfitSoleTrader = Math.max(0, annualProfit - personalAllowance);
  let soleTraderIncomeTax = 0;
  if (taxableProfitSoleTrader <= 37700) {
    soleTraderIncomeTax = taxableProfitSoleTrader * 0.2;
  } else if (taxableProfitSoleTrader <= 112570) {
    soleTraderIncomeTax = 37700 * 0.2 + (taxableProfitSoleTrader - 37700) * 0.4;
  } else {
    soleTraderIncomeTax = 37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableProfitSoleTrader - 112570) * 0.45;
  }
  let class4NI = 0;
  if (annualProfit > 12570) {
    const niBand1 = Math.min(Math.max(0, annualProfit - 12570), 37700);
    const niBand2 = Math.max(0, annualProfit - 50270);
    class4NI = niBand1 * 0.06 + niBand2 * 0.02;
  }
  const soleTraderTotalTax = soleTraderIncomeTax + class4NI;
  const soleTraderTakeHome = annualProfit - soleTraderTotalTax;
  const directorSalary = Math.min(annualProfit, 12570);
  const profitBeforeCT = Math.max(0, annualProfit - directorSalary);
  let ltdCorporationTax = 0;
  if (profitBeforeCT <= 5e4) {
    ltdCorporationTax = profitBeforeCT * 0.19;
  } else if (profitBeforeCT >= 25e4) {
    ltdCorporationTax = profitBeforeCT * 0.25;
  } else {
    const mainTax = profitBeforeCT * 0.25;
    const relief = (25e4 - profitBeforeCT) * (3 / 200);
    ltdCorporationTax = mainTax - relief;
  }
  const netDividends = Math.max(0, profitBeforeCT - ltdCorporationTax);
  const unusedPA = Math.max(0, personalAllowance - directorSalary);
  const dividendAllowance = 500;
  const taxableDividends = Math.max(0, netDividends - unusedPA - dividendAllowance);
  let dividendTax = 0;
  if (taxableDividends <= 37700) {
    dividendTax = taxableDividends * 0.0875;
  } else if (taxableDividends <= 112570) {
    dividendTax = 37700 * 0.0875 + (taxableDividends - 37700) * 0.3375;
  } else {
    dividendTax = 37700 * 0.0875 + (112570 - 37700) * 0.3375 + (taxableDividends - 112570) * 0.3935;
  }
  const ltdTotalTax = ltdCorporationTax + dividendTax;
  const ltdTakeHome = annualProfit - ltdTotalTax;
  const ltdExtraSavings = ltdTakeHome - soleTraderTakeHome;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Sole Trader vs LTD" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Sole Trader vs Limited Company Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Compare side-by-side tax liability, National Insurance, Corporation Tax, and net take-home pay between Sole Trader and UK LTD." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-5 rounded-xl border border-gold-500/40 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-gold-500 text-xs font-semibold uppercase tracking-widest mb-1", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
          /* @__PURE__ */ jsx("span", { children: "LTD Breakeven Analysis" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-serif text-xl sm:text-2xl text-white font-semibold", children: annualProfit >= 28e3 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "At ",
          /* @__PURE__ */ jsxs("span", { className: "text-gold-400", children: [
            "£",
            annualProfit.toLocaleString(),
            " profit"
          ] }),
          ", forming a UK LTD saves you ",
          /* @__PURE__ */ jsxs("span", { className: "text-emerald-400 font-mono", children: [
            "£",
            Math.round(ltdExtraSavings).toLocaleString(),
            "/year"
          ] }),
          " net vs Sole Trader!"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          "At ",
          /* @__PURE__ */ jsxs("span", { className: "text-gold-400", children: [
            "£",
            annualProfit.toLocaleString(),
            " profit"
          ] }),
          ", Sole Trader is simpler. The breakeven point where a UK LTD becomes tax-superior is ",
          /* @__PURE__ */ jsx("span", { className: "text-gold-400 font-mono", children: "~£28,000/year" }),
          " profit."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider block", children: "Annual Net Profit Before Tax (£):" }),
        /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-gold-600", children: [
          "£",
          annualProfit.toLocaleString()
        ] }),
        /* @__PURE__ */ jsx("input", { type: "range", min: "15000", max: "200000", step: "5000", value: annualProfit, onChange: (e) => setAnnualProfit(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500", children: [
          /* @__PURE__ */ jsx("span", { children: "£15,000" }),
          /* @__PURE__ */ jsx("span", { children: "£100,000" }),
          /* @__PURE__ */ jsx("span", { children: "£200,000" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4 pb-3 border-b border-border", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-navy-950", children: "Operating as Sole Trader" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium", children: "Self-Employed" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-gray-700 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Income Tax (20% / 40%):" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-navy-950", children: [
                  "£",
                  Math.round(soleTraderIncomeTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Class 4 National Insurance (6%):" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-navy-950", children: [
                  "£",
                  Math.round(class4NI).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border font-semibold text-sm", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Tax & NI Paid:" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-red-600", children: [
                  "£",
                  Math.round(soleTraderTotalTax).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 p-4 rounded-xl text-center border border-navy-100", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-600 uppercase font-semibold block mb-1", children: "Net Take-Home Pay" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
              "£",
              Math.round(soleTraderTakeHome).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white flex flex-col justify-between relative overflow-hidden shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-bl-xl", children: "Most Tax Efficient" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4 pb-3 border-b border-white/10", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-white", children: "Operating as UK LTD" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium", children: "Director Salary + Dividends" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-navy-200 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Corporation Tax (19%):" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-white", children: [
                  "£",
                  Math.round(ltdCorporationTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Dividend Tax (8.75%+):" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-white", children: [
                  "£",
                  Math.round(dividendTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 font-semibold text-sm", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Tax Paid:" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-400", children: [
                  "£",
                  Math.round(ltdTotalTax).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-4 rounded-xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase font-semibold block mb-1", children: "Net Take-Home Pay" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "£",
              Math.round(ltdTakeHome).toLocaleString()
            ] }),
            ltdExtraSavings > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-xs text-emerald-400 font-semibold", children: [
              "🎉 Save £",
              Math.round(ltdExtraSavings).toLocaleString(),
              " extra per year with UK LTD!"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Ready to Form Your Tax-Efficient UK LTD?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Get London registered address, Companies House incorporation, and bank setup." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Incorporate UK LTD Now" })
      ] })
    ] }) })
  ] });
}
export {
  UKSoleTraderVsLTDCalculatorPage as component
};
