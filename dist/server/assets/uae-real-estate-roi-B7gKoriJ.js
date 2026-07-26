import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UAERealEstateROIPage() {
  const [propertyPriceAED, setPropertyPriceAED] = useState(15e5);
  const [annualRentAED, setAnnualRentAED] = useState(105e3);
  const [serviceChargesAED, setServiceChargesAED] = useState(12e3);
  const dldFeeAED = propertyPriceAED * 0.04;
  const agencyFeeAED = propertyPriceAED * 0.02;
  const totalPurchaseCostAED = propertyPriceAED + dldFeeAED + agencyFeeAED;
  const netAnnualIncomeAED = Math.max(0, annualRentAED - serviceChargesAED);
  const netRentalYieldPercent = totalPurchaseCostAED > 0 ? netAnnualIncomeAED / totalPurchaseCostAED * 100 : 0;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Dubai Real Estate ROI & Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Dubai Real Estate ROI & Tax Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate net rental yield, 4% DLD transfer fees, 2% agency commissions, service charges, and 0% personal tax savings in Dubai." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Property Purchase Price (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              propertyPriceAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "500000", max: "5000000", step: "50000", value: propertyPriceAED, onChange: (e) => setPropertyPriceAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Expected Annual Rental Income (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              annualRentAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "30000", max: "400000", step: "5000", value: annualRentAED, onChange: (e) => setAnnualRentAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual HOA / Service Charges (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              serviceChargesAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "2000", max: "50000", step: "1000", value: serviceChargesAED, onChange: (e) => setServiceChargesAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Dubai Property ROI Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "DLD Transfer Fee (4%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                Math.round(dldFeeAED).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Broker Agency Fee (2%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                Math.round(agencyFeeAED).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Purchase Cost:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "AED ",
                Math.round(totalPurchaseCostAED).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Annual Rental Income:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "AED ",
                Math.round(netAnnualIncomeAED).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Net Rental Yield (After Costs & Tax)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-emerald-400", children: [
              netRentalYieldPercent.toFixed(2),
              "%"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-[11px] text-navy-300", children: "💰 0% Capital Gains Tax & 0% Personal Rental Tax in Dubai!" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Consult ADVAQ Property Tax Team" }) })
      ] })
    ] }) })
  ] });
}
export {
  UAERealEstateROIPage as component
};
