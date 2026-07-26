import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function USPenaltyRiskCalculatorPage() {
  const [yearsUnfiledForm5472, setYearsUnfiledForm5472] = useState(1);
  const [isBoiReportOverdue, setIsBoiReportOverdue] = useState(true);
  const [boiDaysOverdue, setBoiDaysOverdue] = useState(30);
  const baseForm5472Penalty = yearsUnfiledForm5472 * 25e3;
  const baseBoiPenalty = isBoiReportOverdue ? Math.min(1e4, boiDaysOverdue * 590) : 0;
  const totalPenaltyExposure = baseForm5472Penalty + baseBoiPenalty;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US Penalty Risk Estimator" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "IRS Form 5472 & FinCEN Penalty Estimator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your exposure to statutory $25,000 IRS late penalties and $590/day FinCEN BOI report non-compliance fines." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "1. Years of Unfiled IRS Form 5472:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              yearsUnfiledForm5472,
              " ",
              yearsUnfiledForm5472 === 1 ? "Tax Year" : "Tax Years"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "4", step: "1", value: yearsUnfiledForm5472, onChange: (e) => setYearsUnfiledForm5472(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "IRS section 6038A imposes $25,000 per unfiled Form 5472." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isBoiReportOverdue, onChange: (e) => setIsBoiReportOverdue(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "FinCEN BOI Report Overdue?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Mandatory beneficial ownership report for US LLCs." })
            ] })
          ] }),
          isBoiReportOverdue && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Days Overdue Beyond 90-Day Deadline:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
                boiDaysOverdue,
                " Days Late"
              ] })
            ] }),
            /* @__PURE__ */ jsx("input", { type: "range", min: "1", max: "90", step: "5", value: boiDaysOverdue, onChange: (e) => setBoiDaysOverdue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Statutory Penalty Exposure" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "IRS Form 5472 Penalty ($",
                yearsUnfiledForm5472,
                "x $25k):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "$",
                baseForm5472Penalty.toLocaleString()
              ] })
            ] }),
            isBoiReportOverdue && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FinCEN BOI Penalty ($590/day):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "$",
                baseBoiPenalty.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Federal Penalty Risk" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "$",
              totalPenaltyExposure.toLocaleString(),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-300 font-sans font-normal ml-2", children: "USD" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 pt-3 border-t border-white/10 text-xs text-navy-200", children: "File retroactive penalty relief disclosures with ADVAQ before receiving an IRS CP215 notice." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/corporate-tax-return", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File Overdue Form 5472 with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20My%20US%20LLC%20has%20unfiled%20Form%205472%20(${yearsUnfiledForm5472}%20years).%20Please%20help%20me%20file%20and%20request%20penalty%20relief.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp US Tax CPA" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  USPenaltyRiskCalculatorPage as component
};
