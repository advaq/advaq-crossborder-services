import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKStampDutyCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState(45e4);
  const [buyerType, setBuyerType] = useState("additional");
  const [isNonResident, setIsNonResident] = useState(true);
  const additionalSurcharge = buyerType === "additional" ? 0.05 : 0;
  const overseasSurcharge = isNonResident ? 0.02 : 0;
  const totalSurchargeRate = additionalSurcharge + overseasSurcharge;
  let baseSdlt = 0;
  if (buyerType === "first" && propertyPrice <= 625e3) {
    if (propertyPrice > 425e3) {
      baseSdlt = (propertyPrice - 425e3) * 0.05;
    }
  } else {
    if (propertyPrice > 25e4) {
      const band2Amount = Math.min(propertyPrice, 925e3) - 25e4;
      baseSdlt += band2Amount * 0.05;
    }
    if (propertyPrice > 925e3) {
      const band3Amount = Math.min(propertyPrice, 15e5) - 925e3;
      baseSdlt += band3Amount * 0.1;
    }
    if (propertyPrice > 15e5) {
      const band4Amount = propertyPrice - 15e5;
      baseSdlt += band4Amount * 0.12;
    }
  }
  const surchargeSdlt = propertyPrice * totalSurchargeRate;
  const totalSdltPayable = baseSdlt + surchargeSdlt;
  const effectiveSdltRate = propertyPrice > 0 ? totalSdltPayable / propertyPrice * 100 : 0;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Stamp Duty (SDLT)" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Stamp Duty Land Tax (SDLT) Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact UK property Stamp Duty tax including First-Time Buyer relief, +5% BTL surcharge, and +2% Overseas Buyer surcharge." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Property Purchase Price (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              propertyPrice.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "100000", max: "2000000", step: "25000", value: propertyPrice, onChange: (e) => setPropertyPrice(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "£100,000" }),
            /* @__PURE__ */ jsx("span", { children: "£1,000,000" }),
            /* @__PURE__ */ jsx("span", { children: "£2,000,000+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "Buyer Property Status:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setBuyerType("first"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${buyerType === "first" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "First-Time Buyer" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setBuyerType("next"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${buyerType === "next" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Main Residence" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setBuyerType("additional"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${buyerType === "additional" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Additional / Buy-to-Let (+5%)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Non-UK Resident / Overseas Buyer Surcharge (+2%)" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Applied to non-UK residents purchasing UK residential property." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isNonResident, onChange: (e) => setIsNonResident(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Stamp Duty (SDLT) Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Base SDLT Tax:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                Math.round(baseSdlt).toLocaleString()
              ] })
            ] }),
            additionalSurcharge > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Additional Property (+5% Surcharge):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-amber-400 font-semibold", children: [
                "+£",
                Math.round(propertyPrice * 0.05).toLocaleString()
              ] })
            ] }),
            isNonResident && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Overseas Non-Resident (+2% Surcharge):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-amber-400 font-semibold", children: [
                "+£",
                Math.round(propertyPrice * 0.02).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Effective SDLT Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                effectiveSdltRate.toFixed(2),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Stamp Duty Payable" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(totalSdltPayable).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Consult ADVAQ Property Tax Legal Team" }) })
      ] })
    ] }) })
  ] });
}
export {
  UKStampDutyCalculatorPage as component
};
