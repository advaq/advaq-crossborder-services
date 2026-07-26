import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
const freezoneData = [{
  id: "ifza",
  name: "IFZA (International Free Zone Authority)",
  location: "Dubai",
  zeroVisaCost: 12900,
  oneVisaCost: 17900,
  twoVisaCost: 22900,
  additionalVisaCost: 5e3,
  flexiDeskIncluded: true,
  bestFor: "IT Consultancies, E-commerce & Global Tech Founders"
}, {
  id: "meydan",
  name: "Meydan Free Zone",
  location: "Dubai (Near Downtown)",
  zeroVisaCost: 12500,
  oneVisaCost: 16900,
  twoVisaCost: 21500,
  additionalVisaCost: 4600,
  flexiDeskIncluded: true,
  bestFor: "Prestigious Dubai Address & Instant Bank Account Approval"
}, {
  id: "shams",
  name: "SHAMS (Sharjah Media City)",
  location: "Sharjah",
  zeroVisaCost: 9500,
  oneVisaCost: 13900,
  twoVisaCost: 18200,
  additionalVisaCost: 4300,
  flexiDeskIncluded: true,
  bestFor: "Creative Agencies, Media, Digital Marketing & Budget Setup"
}, {
  id: "rakez",
  name: "RAKEZ (Ras Al Khaimah Economic Zone)",
  location: "Ras Al Khaimah",
  zeroVisaCost: 8900,
  oneVisaCost: 12900,
  twoVisaCost: 16900,
  additionalVisaCost: 4e3,
  flexiDeskIncluded: true,
  bestFor: "Manufacturing, Trading & Cost-Effective License"
}];
function UAEFreezoneCalculatorPage() {
  const [selectedFreezoneId, setSelectedFreezoneId] = useState("ifza");
  const [visasRequired, setVisasRequired] = useState(1);
  const [includeVipMedical, setIncludeVipMedical] = useState(true);
  const [includeCorporateTaxReg, setIncludeCorporateTaxReg] = useState(true);
  const selectedFreezone = freezoneData.find((f) => f.id === selectedFreezoneId) || freezoneData[0];
  let baseLicenseCost = selectedFreezone.zeroVisaCost;
  if (visasRequired === 1) baseLicenseCost = selectedFreezone.oneVisaCost;
  else if (visasRequired === 2) baseLicenseCost = selectedFreezone.twoVisaCost;
  else if (visasRequired > 2) {
    baseLicenseCost = selectedFreezone.twoVisaCost + (visasRequired - 2) * selectedFreezone.additionalVisaCost;
  }
  const medicalEmiratesIdPerVisa = includeVipMedical ? 3500 : 2500;
  const totalVisaProcessingCost = visasRequired * medicalEmiratesIdPerVisa;
  const corporateTaxRegFee = includeCorporateTaxReg ? 1500 : 0;
  const TotalSetupCostAED = baseLicenseCost + totalVisaProcessingCost + corporateTaxRegFee;
  const TotalSetupCostUSD = Math.round(TotalSetupCostAED / 3.6725);
  const annualRenewalCostAED = Math.round(baseLicenseCost * 0.85);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators", className: "hover:underline", children: "Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Dubai Freezone Setup Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Dubai Freezone Setup Cost Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Compare license costs, flexi-desk options, establishment cards, and investor visa package fees across top UAE freezones." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3", children: "1. Select Target UAE Freezone:" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: freezoneData.map((f) => /* @__PURE__ */ jsxs("button", { onClick: () => setSelectedFreezoneId(f.id), className: `p-3.5 rounded-xl border text-left transition-all ${selectedFreezoneId === f.id ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border hover:border-gold-500/50"}`, children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-2 mb-1", children: /* @__PURE__ */ jsx("strong", { className: "text-sm font-serif", children: f.name }) }),
            /* @__PURE__ */ jsxs("div", { className: "text-[11px] opacity-80", children: [
              "Location: ",
              f.location
            ] })
          ] }, f.id)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-navy-900/5 border border-gold-500/20 rounded-xl text-xs space-y-1 text-navy-950", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Location:" }),
              " ",
              selectedFreezone.location
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Flexi Desk Included:" }),
              " ",
              selectedFreezone.flexiDeskIncluded ? "Yes (Shared Desk)" : "No"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Best Suited For:" }),
              " ",
              selectedFreezone.bestFor
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. Investor & Employee Visas Required:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              visasRequired,
              " ",
              visasRequired === 1 ? "Visa" : "Visas"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "5", step: "1", value: visasRequired, onChange: (e) => setVisasRequired(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "0 Visas (License Only)" }),
            /* @__PURE__ */ jsx("span", { children: "1 Visa" }),
            /* @__PURE__ */ jsx("span", { children: "2 Visas" }),
            /* @__PURE__ */ jsx("span", { children: "3+ Visas" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-3", children: "3. Additional Processing & Tax Services:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeVipMedical, onChange: (e) => setIncludeVipMedical(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "VIP Fast-Track Medical Test & Emirates ID" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Same-day medical test & biometrics processing." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "+AED 1,000/visa" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeCorporateTaxReg, onChange: (e) => setIncludeCorporateTaxReg(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "UAE Corporate Tax (9%) FTA Registration" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Mandatory FTA tax registration & Corporate Tax TRN number." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "+AED 1,500" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Total UAE Package Cost" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Freezone License (",
                selectedFreezone.name,
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                baseLicenseCost.toLocaleString()
              ] })
            ] }),
            visasRequired > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Medical & Emirates ID (",
                visasRequired,
                " Visas):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                totalVisaProcessingCost.toLocaleString()
              ] })
            ] }),
            includeCorporateTaxReg && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FTA Corporate Tax Registration:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "AED 1,500" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Year-1 Setup Cost (AED)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl sm:text-4xl font-serif font-bold text-white", children: [
              "AED ",
              TotalSetupCostAED.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-xs text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Equivalent USD Cost:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-gold-400 font-mono", children: [
                "$",
                TotalSetupCostUSD.toLocaleString(),
                " USD"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 pt-2 border-t border-white/10 text-[11px] text-emerald-400 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Estimated Year 2+ Renewal:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "~AED ",
                annualRenewalCostAED.toLocaleString(),
                "/yr"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: [
            "Setup Company in ",
            selectedFreezone.name
          ] }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20UAE%20Freezone%20Calculator%20for%20${selectedFreezone.name}%20(Visas:%20${visasRequired},%20Total:%20AED%20${TotalSetupCostAED}).%20Please%20guide%20me.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp Dubai Corporate Advisor" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  UAEFreezoneCalculatorPage as component
};
