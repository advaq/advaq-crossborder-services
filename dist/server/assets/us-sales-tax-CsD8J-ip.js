import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
function USSalesTaxCalculatorPage() {
  const [annualUSRevenue, setAnnualUSRevenue] = useState(12e4);
  const [annualUSTransactions, setAnnualUSTransactions] = useState(250);
  const [sellsDigitalGoods, setSellsDigitalGoods] = useState(true);
  const isNexusTriggered = annualUSRevenue >= 1e5 || annualUSTransactions >= 200;
  let statesCount = 0;
  if (annualUSRevenue > 5e5) statesCount = 15;
  else if (annualUSRevenue > 25e4) statesCount = 8;
  else if (isNexusTriggered) statesCount = 3;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US Sales Tax Nexus" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US Sales Tax Economic Nexus Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Determine where your Stripe, Shopify, or Amazon store triggers Economic Nexus ($100k revenue or 200 transactions) across US states." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isNexusTriggered ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-emerald-50 border-emerald-300 text-emerald-950"}`, children: [
        isNexusTriggered ? /* @__PURE__ */ jsx(AlertCircle, { className: "text-amber-600 shrink-0", size: 40 }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 40 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isNexusTriggered ? `⚠️ Economic Nexus Triggered in ~${statesCount} US States` : "Below Economic Nexus Thresholds (No Sales Tax Permit Required)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isNexusTriggered ? "Your US sales or transaction volume has crossed the $100,000 or 200 transaction threshold in major states. You must register for US Sales Tax permits and collect tax on checkout." : "Your US sales are below the threshold in all 45 sales-tax states. No state sales tax registration is currently required." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Total US Gross Sales ($):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              annualUSRevenue.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10000", max: "600000", step: "10000", value: annualUSRevenue, onChange: (e) => setAnnualUSRevenue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Benchmark Limit: $100,000 per state." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Separate US Orders / Transactions:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              annualUSTransactions,
              " Orders"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10", max: "500", step: "10", value: annualUSTransactions, onChange: (e) => setAnnualUSTransactions(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Benchmark Limit: 200 transactions per state." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need US State Sales Tax Registration & Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "State permit registration, TaxJar/Avalara setup & monthly filing." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/us-services/corporate-tax-return", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Get Sales Tax Assistance" })
      ] })
    ] }) })
  ] });
}
export {
  USSalesTaxCalculatorPage as component
};
