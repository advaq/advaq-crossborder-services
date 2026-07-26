import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKSelfAssessmentCalculatorPage() {
  const [salaryIncome, setSalaryIncome] = useState(15e3);
  const [freelanceProfit, setFreelanceProfit] = useState(35e3);
  const [rentalIncome, setRentalIncome] = useState(6e3);
  const [dividendIncome, setDividendIncome] = useState(5e3);
  const totalEarnedIncome = salaryIncome + freelanceProfit + rentalIncome;
  const totalGrossIncome = totalEarnedIncome + dividendIncome;
  let personalAllowance = 12570;
  if (totalGrossIncome > 1e5) {
    const reduction = (totalGrossIncome - 1e5) / 2;
    personalAllowance = Math.max(0, 12570 - reduction);
  }
  const taxableEarnedIncome = Math.max(0, totalEarnedIncome - personalAllowance);
  let incomeTax = 0;
  if (taxableEarnedIncome <= 37700) {
    incomeTax = taxableEarnedIncome * 0.2;
  } else if (taxableEarnedIncome <= 112570) {
    incomeTax = 37700 * 0.2 + (taxableEarnedIncome - 37700) * 0.4;
  } else {
    incomeTax = 37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableEarnedIncome - 112570) * 0.45;
  }
  let class4NI = 0;
  if (freelanceProfit > 12570) {
    const band1 = Math.min(Math.max(0, freelanceProfit - 12570), 37700);
    const band2 = Math.max(0, freelanceProfit - 50270);
    class4NI = band1 * 0.06 + band2 * 0.02;
  }
  const unusedPA = Math.max(0, personalAllowance - totalEarnedIncome);
  const taxableDividends = Math.max(0, dividendIncome - unusedPA - 500);
  let dividendTax = 0;
  if (taxableDividends > 0) {
    const totalTaxable = taxableEarnedIncome + taxableDividends;
    if (totalTaxable <= 37700) {
      dividendTax = taxableDividends * 0.0875;
    } else if (totalTaxable <= 112570) {
      dividendTax = taxableDividends * 0.3375;
    } else {
      dividendTax = taxableDividends * 0.3935;
    }
  }
  const totalSelfAssessmentTax = incomeTax + class4NI + dividendTax;
  const paymentOnAccount = totalSelfAssessmentTax > 1e3 ? totalSelfAssessmentTax * 0.5 : 0;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Self Assessment Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Self Assessment Tax Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your complete UK tax bill combining salary, freelance/sole trader profit, rental income, and dividend earnings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "PAYE Employment Salary (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              salaryIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "100000", step: "2500", value: salaryIncome, onChange: (e) => setSalaryIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Freelance / Sole Trader Profit (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              freelanceProfit.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "150000", step: "2500", value: freelanceProfit, onChange: (e) => setFreelanceProfit(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Net Property Rental Income (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              rentalIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "50000", step: "1000", value: rentalIncome, onChange: (e) => setRentalIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "UK Dividend Income (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              dividendIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "50000", step: "1000", value: dividendIncome, onChange: (e) => setDividendIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Self Assessment Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Gross Income:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                totalGrossIncome.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Personal Allowance (",
                totalGrossIncome > 1e5 ? "Tapered" : "Full",
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "£",
                Math.round(personalAllowance).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Income Tax (20%/40%/45%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(incomeTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Class 4 National Insurance (6%/2%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(class4NI).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Dividend Tax:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(dividendTax).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Self Assessment Tax Due" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(totalSelfAssessmentTax).toLocaleString()
            ] }),
            paymentOnAccount > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Jan 31 Payment on Account (+50%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-gold-400 font-mono", children: [
                "+£",
                Math.round(paymentOnAccount).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/self-assessment", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File Self Assessment with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  UKSelfAssessmentCalculatorPage as component
};
