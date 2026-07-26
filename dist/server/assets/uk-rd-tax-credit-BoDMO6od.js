import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKRDTaxCreditCalculatorPage() {
  const [developerSalaries, setDeveloperSalaries] = useState(8e4);
  const [cloudHostingCosts, setCloudHostingCosts] = useState(15e3);
  const [subcontractorCosts, setSubcontractorCosts] = useState(25e3);
  const [isLossMaking, setIsLossMaking] = useState(false);
  const allowableSubcontractor = subcontractorCosts * 0.65;
  const totalQualifyingExpenditure = developerSalaries + cloudHostingCosts + allowableSubcontractor;
  const effectiveBenefitRate = isLossMaking ? 0.162 : 0.15;
  const netTaxBenefit = totalQualifyingExpenditure * effectiveBenefitRate;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK R&D Tax Credit Estimator" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK R&D Tax Credit Estimator for IT & Tech Firms (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your HMRC R&D Tax Relief under the Merged RDEC Scheme for software development, engineer salaries, and cloud hosting." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Developer & Software Engineer Salaries (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              developerSalaries.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10000", max: "300000", step: "5000", value: developerSalaries, onChange: (e) => setDeveloperSalaries(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "100% of staff costs engaged in technical problem solving qualify." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Cloud Hosting & Data Costs (AWS, Azure, GCP) (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              cloudHostingCosts.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "100000", step: "2500", value: cloudHostingCosts, onChange: (e) => setCloudHostingCosts(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "UK Sub-Contractor R&D Costs (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              subcontractorCosts.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "100000", step: "2500", value: subcontractorCosts, onChange: (e) => setSubcontractorCosts(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Subcontractor expenditure is eligible at 65% under HMRC R&D rules." })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Loss-Making / Pre-Revenue Startup?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Eligible for cash payout (16.2% net cash refund)." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isLossMaking, onChange: (e) => setIsLossMaking(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "R&D Tax Relief Estimate" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Qualifying R&D Expenditure:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                Math.round(totalQualifyingExpenditure).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross RDEC Credit Rate:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-semibold", children: "20.0%" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Effective Benefit Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                (effectiveBenefitRate * 100).toFixed(1),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: isLossMaking ? "Estimated Cash Refund from HMRC" : "Corporation Tax Reduction" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-emerald-400", children: [
              "£",
              Math.round(netTaxBenefit).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Claim R&D Tax Credit with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  UKRDTaxCreditCalculatorPage as component
};
