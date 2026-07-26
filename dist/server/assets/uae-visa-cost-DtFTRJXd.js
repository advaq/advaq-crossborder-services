import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UAEVisaCostCalculatorPage() {
  const [visaType, setVisaType] = useState("investor-2yr");
  const [numberOfFamilyDependents, setNumberOfFamilyDependents] = useState(0);
  const [includeVipMedical, setIncludeVipMedical] = useState(true);
  const baseVisaCost = visaType === "golden-10yr" ? 9500 : 3800;
  const medicalEmiratesIdCost = includeVipMedical ? 3200 : 2200;
  const familyVisaCostTotal = numberOfFamilyDependents * 4500;
  const totalVisaCostAED = baseVisaCost + medicalEmiratesIdCost + familyVisaCostTotal;
  const totalVisaCostUSD = Math.round(totalVisaCostAED / 3.6725);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UAE Residence Visa Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE 2-Yr Investor vs 10-Yr Golden Visa Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact Emirates ID, medical test, entry permit, visa stamping, and family sponsorship costs in Dubai." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Target UAE Visa Type:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setVisaType("investor-2yr"), className: `p-4 rounded-xl border text-left transition-all ${visaType === "investor-2yr" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "2-Year Residence Visa" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Freezone / Mainland Partner Visa" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setVisaType("golden-10yr"), className: `p-4 rounded-xl border text-left transition-all ${visaType === "golden-10yr" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "10-Year Golden Visa" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Tech Founders / Real Estate" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. Family Dependents (Spouse / Children / Parents):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              numberOfFamilyDependents,
              " Dependents"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "5", step: "1", value: numberOfFamilyDependents, onChange: (e) => setNumberOfFamilyDependents(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeVipMedical, onChange: (e) => setIncludeVipMedical(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Include VIP Fast-Track Medical Test & Biometrics?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Same-day medical fitness results & priority Emirates ID capture." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "UAE Visa Cost Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Entry Permit & Stamping (",
                visaType === "golden-10yr" ? "10-Year" : "2-Year",
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                baseVisaCost.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Medical Fitness & Emirates ID:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                medicalEmiratesIdCost.toLocaleString()
              ] })
            ] }),
            numberOfFamilyDependents > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Family Sponsorship (",
                numberOfFamilyDependents,
                "x AED 4.5k):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                familyVisaCostTotal.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Residence Visa Cost (AED)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "AED ",
              totalVisaCostAED.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-xs text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Equivalent USD Cost:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-gold-400 font-mono", children: [
                "$",
                totalVisaCostUSD.toLocaleString(),
                " USD"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uae-services/visa-application-support", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Apply for UAE Visa with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20UAE%20Visa%20Calculator%20(${visaType},%20AED%20${totalVisaCostAED}).%20Please%20guide%20me.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp Dubai Visa PRO" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  UAEVisaCostCalculatorPage as component
};
