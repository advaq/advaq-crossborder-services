import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
function PakistanFbrSalaryTaxCalculatorPage() {
  const [monthlyIncomePKR, setMonthlyIncomePKR] = useState(2e5);
  const [incomeType, setIncomeType] = useState("salaried");
  const annualIncomePKR = monthlyIncomePKR * 12;
  let annualTaxPKR = 0;
  if (incomeType === "salaried") {
    if (annualIncomePKR <= 6e5) annualTaxPKR = 0;
    else if (annualIncomePKR <= 12e5) annualTaxPKR = (annualIncomePKR - 6e5) * 0.05;
    else if (annualIncomePKR <= 22e5) annualTaxPKR = 3e4 + (annualIncomePKR - 12e5) * 0.15;
    else if (annualIncomePKR <= 32e5) annualTaxPKR = 18e4 + (annualIncomePKR - 22e5) * 0.25;
    else if (annualIncomePKR <= 41e5) annualTaxPKR = 43e4 + (annualIncomePKR - 32e5) * 0.3;
    else annualTaxPKR = 7e5 + (annualIncomePKR - 41e5) * 0.35;
  } else {
    if (annualIncomePKR <= 6e5) annualTaxPKR = 0;
    else if (annualIncomePKR <= 12e5) annualTaxPKR = (annualIncomePKR - 6e5) * 0.15;
    else if (annualIncomePKR <= 16e5) annualTaxPKR = 9e4 + (annualIncomePKR - 12e5) * 0.2;
    else if (annualIncomePKR <= 32e5) annualTaxPKR = 17e4 + (annualIncomePKR - 16e5) * 0.3;
    else annualTaxPKR = 65e4 + (annualIncomePKR - 32e5) * 0.35;
  }
  const monthlyTaxPKR = annualTaxPKR / 12;
  const netMonthlyTakeHomePKR = monthlyIncomePKR - monthlyTaxPKR;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "FBR Salary & Income Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FBR Income Tax Calculator (Tax Year 2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate monthly salary tax deductions, annual FBR tax slabs, and net take-home salary for employees and business individuals in Pakistan." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "Income Classification:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setIncomeType("salaried"), className: `p-3 rounded-xl border text-center transition-all ${incomeType === "salaried" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Salaried Individual" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Salary > 75% of income" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setIncomeType("business"), className: `p-3 rounded-xl border text-center transition-all ${incomeType === "business" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Business Individual / AOP" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Sole Proprietor / Partner" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Gross Monthly Income (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "Rs ",
              (monthlyIncomePKR / 1e5).toLocaleString(),
              " Lacs / month"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "1000000", step: "25000", value: monthlyIncomePKR, onChange: (e) => setMonthlyIncomePKR(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-gray-500 block mt-1", children: [
            "Annual Total: Rs ",
            (annualIncomePKR / 1e5).toLocaleString(),
            " Lacs"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: "Monthly Tax Deduction" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-red-600", children: [
            "Rs ",
            Math.round(monthlyTaxPKR).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: "Annual Total FBR Tax" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
            "Rs ",
            Math.round(annualTaxPKR).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gold-500 uppercase", children: "Net Monthly Take-Home" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
            "Rs ",
            Math.round(netMonthlyTakeHomePKR).toLocaleString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need FBR Income Tax Return Filing (IRIS)?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Active Taxpayer List (ATL) restoration & tax return drafting." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/individual-tax-return", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "File Tax Return with ADVAQ" })
      ] })
    ] }) })
  ] });
}
export {
  PakistanFbrSalaryTaxCalculatorPage as component
};
