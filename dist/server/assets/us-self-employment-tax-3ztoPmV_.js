import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
function USSelfEmploymentTaxCalculatorPage() {
  const [netSelfEmploymentIncome, setNetSelfEmploymentIncome] = useState(5e4);
  const [isNonResidentAlien, setIsNonResidentAlien] = useState(true);
  const taxableSeEarnings = netSelfEmploymentIncome * 0.9235;
  const socialSecurityCap = 168600;
  const socialSecurityTax = Math.min(taxableSeEarnings, socialSecurityCap) * 0.124;
  let medicareTax = taxableSeEarnings * 0.029;
  if (taxableSeEarnings > 2e5) {
    medicareTax += (taxableSeEarnings - 2e5) * 9e-3;
  }
  const totalStandardSeTax = socialSecurityTax + medicareTax;
  const actualSeTaxOwed = isNonResidentAlien ? 0 : totalStandardSeTax;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US Self-Employment Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US Self-Employment Tax Calculator (15.3%) (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate 15.3% Schedule SE tax for freelancers and test Foreign Non-Resident Alien exemption eligibility." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { className: `p-5 rounded-xl border flex items-center gap-4 ${isNonResidentAlien ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-amber-50 border-amber-300 text-amber-950"}`, children: [
          isNonResidentAlien ? /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 32 }) : /* @__PURE__ */ jsx(AlertCircle, { className: "text-amber-600 shrink-0", size: 32 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-serif font-bold text-base", children: isNonResidentAlien ? "🎉 EXEMPT from 15.3% US Self-Employment Tax!" : "⚠️ Subject to 15.3% US Self-Employment Tax (Schedule SE)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-0.5", children: isNonResidentAlien ? "Under IRS Code Sec. 1402(b), Non-Resident Aliens performing services physically outside the US owe $0 Self-Employment tax!" : "US Tax Residents and Green Card holders must pay 15.3% SE tax on net self-employment earnings above $400." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Net Self-Employment Profit ($):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              netSelfEmploymentIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "5000", max: "250000", step: "5000", value: netSelfEmploymentIncome, onChange: (e) => setNetSelfEmploymentIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Non-Resident Alien Living Outside US?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Foreign contractor operating remotely from Pakistan/overseas." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isNonResidentAlien, onChange: (e) => setIsNonResidentAlien(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "SE Tax Calculation Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Self-Employment Profit:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                netSelfEmploymentIncome.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Taxable SE Base (92.35%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "$",
                Math.round(taxableSeEarnings).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Social Security Tax (12.4%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "$",
                Math.round(socialSecurityTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Medicare Tax (2.9%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "$",
                Math.round(medicareTax).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Actual Self-Employment Tax Owed" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-emerald-400", children: [
              "$",
              Math.round(actualSeTaxOwed).toLocaleString()
            ] }),
            isNonResidentAlien && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[11px] text-gold-400", children: [
              "💰 You save $",
              Math.round(totalStandardSeTax).toLocaleString(),
              "/year under the Foreign Non-Resident exemption!"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Consult ADVAQ US Tax Specialist" }) })
      ] })
    ] }) })
  ] });
}
export {
  USSelfEmploymentTaxCalculatorPage as component
};
