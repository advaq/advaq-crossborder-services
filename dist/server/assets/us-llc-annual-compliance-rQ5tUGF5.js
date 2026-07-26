import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function USLLCAnnualComplianceCalculatorPage() {
  const [selectedState, setSelectedState] = useState("wyoming");
  const [includeCpaFiling, setIncludeCpaFiling] = useState(true);
  const [includeFbarFiling, setIncludeFbarFiling] = useState(false);
  const stateFees = {
    wyoming: {
      fee: 60,
      name: "Wyoming Annual Report"
    },
    delaware: {
      fee: 300,
      name: "Delaware Franchise Tax"
    },
    newmexico: {
      fee: 0,
      name: "New Mexico ($0 Annual Fee)"
    }
  };
  const currentState = stateFees[selectedState] || stateFees.wyoming;
  const registeredAgentFee = 99;
  const cpa5472Fee = includeCpaFiling ? 350 : 0;
  const fbarFee = includeFbarFiling ? 99 : 0;
  const totalAnnualMaintenance = currentState.fee + registeredAgentFee + cpa5472Fee + fbarFee;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US LLC Annual Compliance Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US LLC Annual Compliance Cost Estimator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Full transparency breakdown of ongoing annual fees: State renewal, Registered Agent, Form 5472 IRS tax returns, and FBAR filings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select US State of LLC Formation:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSelectedState("wyoming"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${selectedState === "wyoming" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Wyoming ($60/yr)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSelectedState("delaware"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${selectedState === "delaware" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Delaware ($300/yr)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSelectedState("newmexico"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${selectedState === "newmexico" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "New Mexico ($0/yr)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeCpaFiling, onChange: (e) => setIncludeCpaFiling(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "IRS Form 5472 & 1120 Pro-Forma CPA Filing" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Mandatory information return for foreign single-member LLCs." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$350" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeFbarFiling, onChange: (e) => setIncludeFbarFiling(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "FinCEN Form 114 (FBAR Filing)" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Required if US LLC bank account exceeds $10,000." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$99" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Annual Cost Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "State Renewal (",
                currentState.name,
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                currentState.fee
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "US Registered Agent Renewal:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$99" })
            ] }),
            includeCpaFiling && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "IRS Form 5472 CPA Return:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-semibold", children: "$350" })
            ] }),
            includeFbarFiling && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FBAR FinCEN 114 Filing:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-semibold", children: "$99" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Annual Ongoing Compliance Fee" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "$",
              totalAnnualMaintenance,
              /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-300 font-sans font-normal ml-2", children: "/ year" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Hire ADVAQ for Annual LLC Compliance" }) })
      ] })
    ] }) })
  ] });
}
export {
  USLLCAnnualComplianceCalculatorPage as component
};
