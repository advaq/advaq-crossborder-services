import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UAEGratuityCalculatorPage() {
  const [basicMonthlySalaryAED, setBasicMonthlySalaryAED] = useState(15e3);
  const [yearsOfService, setYearsOfService] = useState(4);
  const dailyBasicSalary = basicMonthlySalaryAED / 30;
  let totalGratuityAED = 0;
  if (yearsOfService >= 1) {
    if (yearsOfService <= 5) {
      totalGratuityAED = yearsOfService * 21 * dailyBasicSalary;
    } else {
      const first5YearsGratuity = 5 * 21 * dailyBasicSalary;
      const remainingYearsGratuity = (yearsOfService - 5) * 30 * dailyBasicSalary;
      totalGratuityAED = first5YearsGratuity + remainingYearsGratuity;
    }
  }
  const maxGratuityCap = basicMonthlySalaryAED * 24;
  totalGratuityAED = Math.min(totalGratuityAED, maxGratuityCap);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UAE Gratuity Calculator" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE End of Service Gratuity Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate statutory End of Service severance pay under UAE Federal Decree-Law No. 33 of 2021 for mainland and freezone employees." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Basic Monthly Salary (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              basicMonthlySalaryAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "3000", max: "80000", step: "1000", value: basicMonthlySalaryAED, onChange: (e) => setBasicMonthlySalaryAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Note: Gratuity is calculated strictly on Basic Salary (excluding allowances)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Total Completed Years of Continuous Service:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              yearsOfService,
              " Years"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "20", step: "1", value: yearsOfService, onChange: (e) => setYearsOfService(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Gratuity Payout Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Daily Basic Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                Math.round(dailyBasicSalary).toLocaleString(),
                " / day"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "First 5 Years Rate (21 Days/yr):" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "21 Days" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "After 5 Years Rate (30 Days/yr):" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "30 Days" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total End of Service Gratuity Payout" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-emerald-400", children: [
              "AED ",
              Math.round(totalGratuityAED).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Consult ADVAQ UAE Labor Law Team" }) })
      ] })
    ] }) })
  ] });
}
export {
  UAEGratuityCalculatorPage as component
};
