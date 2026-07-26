import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKPayrollPAYECalculatorPage() {
  const [grossSalary, setGrossSalary] = useState(35e3);
  const [pensionPercentage, setPensionPercentage] = useState(3);
  const taxableSalary = Math.max(0, grossSalary - 12570);
  let employeeIncomeTax = 0;
  if (taxableSalary <= 37700) {
    employeeIncomeTax = taxableSalary * 0.2;
  } else if (taxableSalary <= 112570) {
    employeeIncomeTax = 37700 * 0.2 + (taxableSalary - 37700) * 0.4;
  } else {
    employeeIncomeTax = 37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableSalary - 112570) * 0.45;
  }
  let employeeNI = 0;
  if (grossSalary > 12570) {
    const niBand1 = Math.min(Math.max(0, grossSalary - 12570), 37700);
    const niBand2 = Math.max(0, grossSalary - 50270);
    employeeNI = niBand1 * 0.08 + niBand2 * 0.02;
  }
  const employerNIBase = Math.max(0, grossSalary - 9100);
  const employerNI = employerNIBase * 0.138;
  const qualifyingPensionEarnings = Math.min(Math.max(0, grossSalary - 6240), 44030);
  const employerPension = qualifyingPensionEarnings * (pensionPercentage / 100);
  const netEmployeeTakeHome = grossSalary - employeeIncomeTax - employeeNI;
  const totalCostToEmployer = grossSalary + employerNI + employerPension;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Payroll & PAYE" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Payroll & PAYE Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate gross-to-net employee salary, Employer National Insurance (13.8%), Employee NI (8%), PAYE tax, and Workplace Pension." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Gross Annual Salary (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              grossSalary.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "12000", max: "120000", step: "1000", value: grossSalary, onChange: (e) => setGrossSalary(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Employer Pension Contribution (%):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              pensionPercentage,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "10", step: "1", value: pensionPercentage, onChange: (e) => setPensionPercentage(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Minimum UK Auto-Enrolment Employer Pension Rate is 3%." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Payroll Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross Employee Salary:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                grossSalary.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Employee PAYE Tax:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(employeeIncomeTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Employee NI (8%/2%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(employeeNI).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200 pt-2 border-t border-white/10", children: [
              /* @__PURE__ */ jsx("span", { children: "Employer NI (13.8%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-amber-400 font-semibold", children: [
                "+£",
                Math.round(employerNI).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Employer Pension (",
                pensionPercentage,
                "%):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-amber-400 font-semibold", children: [
                "+£",
                Math.round(employerPension).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Net Employee Take-Home Pay" }),
              /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-emerald-400", children: [
                "£",
                Math.round(netEmployeeTakeHome).toLocaleString(),
                " / year"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-navy-300", children: [
                "(£",
                Math.round(netEmployeeTakeHome / 12).toLocaleString(),
                " / month)"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-white/10", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Cost to Employer" }),
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-serif font-bold text-white", children: [
                "£",
                Math.round(totalCostToEmployer).toLocaleString(),
                " / year"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/paye-payroll-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Setup UK PAYE Payroll with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  UKPayrollPAYECalculatorPage as component
};
