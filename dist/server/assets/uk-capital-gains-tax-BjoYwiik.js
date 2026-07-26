import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKCapitalGainsTaxCalculatorPage() {
  const [assetType, setAssetType] = useState("property");
  const [purchasePrice, setPurchasePrice] = useState(2e5);
  const [salePrice, setSalePrice] = useState(32e4);
  const [allowableCosts, setAllowableCosts] = useState(1e4);
  const [taxBand, setTaxBand] = useState("higher");
  const annualExemptAmount = 3e3;
  const grossGain = Math.max(0, salePrice - purchasePrice);
  const netGainBeforeExemption = Math.max(0, grossGain - allowableCosts);
  const taxableGain = Math.max(0, netGainBeforeExemption - annualExemptAmount);
  let cgtRate = 24;
  if (assetType === "property") {
    cgtRate = taxBand === "basic" ? 18 : 24;
  } else {
    cgtRate = taxBand === "basic" ? 10 : 20;
  }
  const capitalGainsTax = taxableGain * (cgtRate / 100);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Capital Gains Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Capital Gains Tax (CGT) Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate CGT for UK residential property sales, stocks, and crypto assets. Applies the £3,000 annual allowance." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Asset Type:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setAssetType("property"), className: `p-3 rounded-xl border text-left font-semibold transition-all ${assetType === "property" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Residential Property (18% / 24%)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setAssetType("shares"), className: `p-3 rounded-xl border text-left font-semibold transition-all ${assetType === "shares" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Shares / Crypto / Business Assets (10% / 20%)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-1", children: "Original Purchase Price (£):" }),
            /* @__PURE__ */ jsx("input", { type: "number", value: purchasePrice, onChange: (e) => setPurchasePrice(Number(e.target.value)), className: "w-full bg-white border border-border rounded-xl p-3 text-sm text-navy-950 font-bold font-mono" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-1", children: "Sale / Disposal Price (£):" }),
            /* @__PURE__ */ jsx("input", { type: "number", value: salePrice, onChange: (e) => setSalePrice(Number(e.target.value)), className: "w-full bg-white border border-border rounded-xl p-3 text-sm text-navy-950 font-bold font-mono" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Allowable Costs (Legal, Estate Agent, Improvements) (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "£",
              allowableCosts.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "50000", step: "1000", value: allowableCosts, onChange: (e) => setAllowableCosts(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "Your UK Income Tax Rate Bracket:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setTaxBand("basic"), className: `p-3 rounded-xl border text-left font-semibold transition-all ${taxBand === "basic" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Basic Rate Taxpayer (Income <£50,270)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setTaxBand("higher"), className: `p-3 rounded-xl border text-left font-semibold transition-all ${taxBand === "higher" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Higher / Additional Rate (Income >£50,270)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "CGT Calculation Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross Capital Gain:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                grossGain.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Deductible Buying/Selling Costs:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "-£",
                allowableCosts.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Annual Exempt Allowance:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "-£",
                annualExemptAmount.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Taxable Gain:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                taxableGain.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Applied CGT Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                cgtRate,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Capital Gains Tax Payable" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(capitalGainsTax).toLocaleString()
            ] }),
            assetType === "property" && /* @__PURE__ */ jsx("p", { className: "mt-3 text-[11px] text-amber-300", children: "⚠️ Note: UK Property CGT returns must be reported to HMRC within 60 days of completion!" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Consult ADVAQ CGT Specialist" }) })
      ] })
    ] }) })
  ] });
}
export {
  UKCapitalGainsTaxCalculatorPage as component
};
