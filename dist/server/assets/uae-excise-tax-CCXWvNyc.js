import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UAEExciseTaxCalculatorPage() {
  const [productCategory, setProductCategory] = useState("energy");
  const [retailPriceAED, setRetailPriceAED] = useState(100);
  const [quantity, setQuantity] = useState(500);
  const rates = {
    tobacco: {
      rate: 1,
      name: "Tobacco Products (100%)"
    },
    energy: {
      rate: 1,
      name: "Energy Drinks (100%)"
    },
    vape: {
      rate: 1,
      name: "E-Cigarettes & Liquids (100%)"
    },
    carbonated: {
      rate: 0.5,
      name: "Carbonated Drinks (50%)"
    },
    sweetened: {
      rate: 0.5,
      name: "Sweetened Drinks (50%)"
    }
  };
  const currentProduct = rates[productCategory] || rates.energy;
  const totalRetailValueAED = quantity * retailPriceAED;
  const totalExciseTaxAED = totalRetailValueAED * currentProduct.rate;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UAE Excise Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Excise Tax Calculator (50% / 100%) (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate FTA Excise Tax liability for importers, producers, and stockpilers of tobacco, energy drinks, and sweetened beverages in Dubai & UAE." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Excise Product Category:" }),
          /* @__PURE__ */ jsxs("select", { value: productCategory, onChange: (e) => setProductCategory(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "tobacco", children: "Tobacco & Cigarette Products (100% Tax)" }),
            /* @__PURE__ */ jsx("option", { value: "energy", children: "Energy Drinks (100% Tax)" }),
            /* @__PURE__ */ jsx("option", { value: "vape", children: "E-Cigarettes & Vaping Liquids (100% Tax)" }),
            /* @__PURE__ */ jsx("option", { value: "carbonated", children: "Carbonated Drinks (50% Tax)" }),
            /* @__PURE__ */ jsx("option", { value: "sweetened", children: "Sweetened Beverages (50% Tax)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Declared Retail Price Per Unit (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "AED ",
              retailPriceAED
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "5", max: "500", step: "5", value: retailPriceAED, onChange: (e) => setRetailPriceAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Batch Quantity (Units):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              quantity.toLocaleString(),
              " Units"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "100", max: "10000", step: "100", value: quantity, onChange: (e) => setQuantity(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "FTA Excise Tax Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Product Category:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: currentProduct.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Declared Retail Value:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                totalRetailValueAED.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Applied Excise Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                currentProduct.rate * 100,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total FTA Excise Tax Due" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "AED ",
              Math.round(totalExciseTaxAED).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Register UAE Excise Tax with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  UAEExciseTaxCalculatorPage as component
};
