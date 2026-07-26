import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function PakistanTaxCalculatorPage() {
  const [propertyPurchaseValue, setPropertyPurchaseValue] = useState(2e7);
  const [carEngineCapacity, setCarEngineCapacity] = useState(1300);
  const [bankWithdrawalValue, setBankWithdrawalValue] = useState(5e5);
  const propertyFilerTax = propertyPurchaseValue * 0.03;
  const propertyNonFilerTax = propertyPurchaseValue * 0.12;
  const propertySavings = propertyNonFilerTax - propertyFilerTax;
  let carFilerTax = 25e3;
  let carNonFilerTax = 75e3;
  if (carEngineCapacity > 1800) {
    carFilerTax = 15e4;
    carNonFilerTax = 45e4;
  } else if (carEngineCapacity > 1500) {
    carFilerTax = 75e3;
    carNonFilerTax = 225e3;
  }
  const carSavings = carNonFilerTax - carFilerTax;
  const bankFilerTax = 0;
  const bankNonFilerTax = bankWithdrawalValue * 9e-3;
  const bankSavings = bankNonFilerTax - bankFilerTax;
  const totalTaxSavings = propertySavings + carSavings + bankSavings;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators", className: "hover:underline", children: "Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Pakistan Filer Tax Savings" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan Filer vs Non-Filer Tax Savings Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your exact money saved on property purchases, vehicle registration, and bank cash transactions by becoming an Active Taxpayer (ATL Filer)." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider", children: "1. Property Purchase Value (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "Rs ",
              (propertyPurchaseValue / 1e5).toLocaleString(),
              " Lacs (",
              (propertyPurchaseValue / 1e7).toFixed(2),
              " Crore)"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "5000000", max: "100000000", step: "2500000", value: propertyPurchaseValue, onChange: (e) => setPropertyPurchaseValue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "Rs 50 Lacs" }),
            /* @__PURE__ */ jsx("span", { children: "Rs 5 Crore" }),
            /* @__PURE__ */ jsx("span", { children: "Rs 10 Crore+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "2. Vehicle Registration Engine Capacity:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCarEngineCapacity(1e3), className: `p-3 rounded-xl border text-center transition-all ${carEngineCapacity === 1e3 ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Under 1000cc" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Alto / Cultus" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCarEngineCapacity(1300), className: `p-3 rounded-xl border text-center transition-all ${carEngineCapacity === 1300 ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "1001cc – 1500cc" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Yaris / City / Civic" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCarEngineCapacity(2e3), className: `p-3 rounded-xl border text-center transition-all ${carEngineCapacity === 2e3 ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Above 1800cc" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Fortuner / Sportage" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider", children: "3. Annual Bank Cash Transactions (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "Rs ",
              (bankWithdrawalValue / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "100000", max: "10000000", step: "250000", value: bankWithdrawalValue, onChange: (e) => setBankWithdrawalValue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Your Filer Tax Savings" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Property Tax (Filer vs Non-Filer):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "Save Rs ",
                propertySavings.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Vehicle Tax (Filer vs Non-Filer):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "Save Rs ",
                carSavings.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Bank Cash Tax (Section 231AB):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "Save Rs ",
                bankSavings.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Money Saved as Filer" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl sm:text-4xl font-serif font-bold text-white", children: [
              "Rs ",
              totalTaxSavings.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 pt-3 border-t border-white/10 text-xs text-navy-200", children: "FBR Active Taxpayer Status (ATL) saves you massive withholding penalties." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/atl-restoration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Become Filer with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20Pakistan%20Filer%20Calculator%20(Total%20Savings:%20Rs%20${totalTaxSavings.toLocaleString()}).%20Please%20help%20me%20register%20NTN%20%26%20Filer.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp Pakistan Tax Lawyer" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PakistanTaxCalculatorPage as component
};
