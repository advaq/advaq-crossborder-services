import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKTaxCalculatorPage() {
  const [annualRevenue, setAnnualRevenue] = useState(8e4);
  const [allowableExpenses, setAllowableExpenses] = useState(1e4);
  const [directorSalary, setDirectorSalary] = useState(12570);
  const [pensionContribution, setPensionContribution] = useState(5e3);
  const grossProfit = Math.max(0, annualRevenue - allowableExpenses);
  const taxableProfitBeforeSalary = Math.max(0, grossProfit - directorSalary - pensionContribution);
  let corporationTax = 0;
  if (taxableProfitBeforeSalary <= 5e4) {
    corporationTax = taxableProfitBeforeSalary * 0.19;
  } else if (taxableProfitBeforeSalary >= 25e4) {
    corporationTax = taxableProfitBeforeSalary * 0.25;
  } else {
    const mainRateTax = taxableProfitBeforeSalary * 0.25;
    const marginalRelief = (25e4 - taxableProfitBeforeSalary) * (3 / 200);
    corporationTax = mainRateTax - marginalRelief;
  }
  const corporationTaxSavedByPension = pensionContribution * (taxableProfitBeforeSalary <= 5e4 ? 0.19 : 0.25);
  const netProfitAfterCT = Math.max(0, taxableProfitBeforeSalary - corporationTax);
  const totalAvailableDividends = netProfitAfterCT;
  const personalAllowance = 12570;
  const unusedPersonalAllowance = Math.max(0, personalAllowance - directorSalary);
  const dividendAllowance = 500;
  const taxableDividends = Math.max(0, totalAvailableDividends - unusedPersonalAllowance - dividendAllowance);
  let dividendTax = 0;
  if (taxableDividends <= 37700) {
    dividendTax = taxableDividends * 0.0875;
  } else if (taxableDividends <= 112570) {
    dividendTax = 37700 * 0.0875 + (taxableDividends - 37700) * 0.3375;
  } else {
    dividendTax = 37700 * 0.0875 + (112570 - 37700) * 0.3375 + (taxableDividends - 112570) * 0.3935;
  }
  const totalDirectorIncome = directorSalary + totalAvailableDividends;
  const netTakeHomePay = Math.max(0, totalDirectorIncome - dividendTax);
  const effectiveTaxRate = annualRevenue > 0 ? ((corporationTax + dividendTax) / annualRevenue * 100).toFixed(1) : "0";
  const soleTraderProfit = grossProfit;
  const soleTraderClass4NI = soleTraderProfit > 12570 ? Math.min(soleTraderProfit - 12570, 37700) * 0.06 + Math.max(0, soleTraderProfit - 50270) * 0.02 : 0;
  const directorClass1NI = directorSalary > 12570 ? (directorSalary - 12570) * 0.08 : 0;
  const niSavings = Math.max(0, soleTraderClass4NI - directorClass1NI);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators", className: "hover:underline", children: "Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Tax & Dividend Optimizer" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK LTD Director Tax & Dividend Optimizer (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your optimal director salary, Corporation Tax (19% vs 25%), pension tax relief, Class 1 vs 2/4 NI, and net take-home pay." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider", children: "Annual Turnover / Revenue (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              annualRevenue.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10000", max: "300000", step: "5000", value: annualRevenue, onChange: (e) => setAnnualRevenue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "£10,000" }),
            /* @__PURE__ */ jsx("span", { children: "£150,000" }),
            /* @__PURE__ */ jsx("span", { children: "£300,000+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider", children: "Allowable Business Expenses (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              allowableExpenses.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: Math.min(annualRevenue * 0.7, 1e5), step: "1000", value: allowableExpenses, onChange: (e) => setAllowableExpenses(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Includes software subscriptions, office space, hardware, travel & accountancy fees." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider", children: "Director Pension (SIPP) Contribution (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              pensionContribution.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "40000", step: "1000", value: pensionContribution, onChange: (e) => setPensionContribution(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-emerald-700 font-medium block mt-1", children: [
            "💡 Saves £",
            Math.round(corporationTaxSavedByPension).toLocaleString(),
            " in Corporation Tax! 100% tax-deductible pre-tax expense."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "Annual Director Salary (£):" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setDirectorSalary(12570), className: `p-3 rounded-xl border text-left transition-all ${directorSalary === 12570 ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "£12,570 / year (Optimal)" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Zero Income Tax & Zero Employee NI" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setDirectorSalary(9100), className: `p-3 rounded-xl border text-left transition-all ${directorSalary === 9100 ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "£9,100 / year (Secondary Threshold)" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Zero Employer & Employee NI" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl text-xs space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-semibold text-navy-950 uppercase tracking-wider flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { children: "National Insurance Comparison" }),
            /* @__PURE__ */ jsxs("span", { className: "text-gold-600 font-mono", children: [
              "Save £",
              Math.round(niSavings).toLocaleString(),
              "/yr"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 pt-1 text-gray-600", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-2 rounded", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-semibold text-navy-900", children: "LTD Director (Class 1)" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "£",
                directorClass1NI,
                " NI due on £",
                directorSalary.toLocaleString(),
                " salary"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-2 rounded", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-semibold text-navy-900", children: "Sole Trader (Class 2/4)" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "£",
                Math.round(soleTraderClass4NI).toLocaleString(),
                " NI due on £",
                grossProfit.toLocaleString(),
                " profit"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "UK Tax Efficiency Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross Profit (Turnover - Expenses):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                grossProfit.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Director Salary Deduction:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                directorSalary.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "UK Corporation Tax (19%-25%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(corporationTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Dividends Available:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                Math.round(totalAvailableDividends).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Personal Dividend Tax (8.75%+):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(dividendTax).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Net Take-Home Income" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(netTakeHomePay).toLocaleString(),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-300 font-sans font-normal ml-2", children: "GBP" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Effective Combined Tax Rate:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-gold-400 font-mono", children: [
                effectiveTaxRate,
                "%"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Form UK LTD with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20UK%20Tax%20Calculator%20(Revenue:%20%C2%A3${annualRevenue},%20Take-Home:%20%C2%A3${Math.round(netTakeHomePay)}).%20Please%20advise.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp UK Tax Specialist" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  UKTaxCalculatorPage as component
};
