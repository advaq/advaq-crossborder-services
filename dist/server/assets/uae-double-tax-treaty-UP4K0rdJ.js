import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UAEDoubleTaxTreatyCalculatorPage() {
  const [partnerCountry, setPartnerCountry] = useState("pakistan");
  const [grossDividendAmountAED, setGrossDividendAmountAED] = useState(2e5);
  const treaties = {
    pakistan: {
      dividendWht: 10,
      interestWht: 10,
      royaltyWht: 10,
      name: "🇵🇰 Pakistan - UAE DTT"
    },
    india: {
      dividendWht: 10,
      interestWht: 12.5,
      royaltyWht: 10,
      name: "🇮🇳 India - UAE DTT"
    },
    uk: {
      dividendWht: 0,
      interestWht: 0,
      royaltyWht: 0,
      name: "🇬🇧 UK - UAE DTT"
    }
  };
  const currentTreaty = treaties[partnerCountry] || treaties.pakistan;
  const standardForeignWhtRate = 25;
  const treatyWhtRate = currentTreaty.dividendWht;
  const standardWhtAED = grossDividendAmountAED * (standardForeignWhtRate / 100);
  const treatyWhtAED = grossDividendAmountAED * (treatyWhtRate / 100);
  const taxSavingsAED = standardWhtAED - treatyWhtAED;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Double Tax Treaty Benefits" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Double Tax Treaty (DTT) Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate cross-border withholding tax reductions and Foreign Tax Credit relief under 135+ UAE International Tax Treaties." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Partner Treaty Country:" }),
          /* @__PURE__ */ jsxs("select", { value: partnerCountry, onChange: (e) => setPartnerCountry(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "pakistan", children: "🇵🇰 Pakistan (Pakistan - UAE Tax Treaty)" }),
            /* @__PURE__ */ jsx("option", { value: "india", children: "🇮🇳 India (India - UAE Tax Treaty)" }),
            /* @__PURE__ */ jsx("option", { value: "uk", children: "🇬🇧 United Kingdom (UK - UAE Tax Treaty)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Gross Cross-Border Dividend / Royalty Payment (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "AED ",
              grossDividendAmountAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "1000000", step: "25000", value: grossDividendAmountAED, onChange: (e) => setGrossDividendAmountAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Treaty Savings Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Treaty Agreement:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: currentTreaty.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Standard Non-Treaty WHT (25%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "AED ",
                Math.round(standardWhtAED).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Reduced Treaty WHT (",
                treatyWhtRate,
                "%):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "AED ",
                Math.round(treatyWhtAED).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Tax Savings via UAE Tax Residency Certificate (TRC)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-emerald-400", children: [
              "AED ",
              Math.round(taxSavingsAED).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Apply for UAE Tax Residency Certificate (TRC)" }) })
      ] })
    ] }) })
  ] });
}
export {
  UAEDoubleTaxTreatyCalculatorPage as component
};
