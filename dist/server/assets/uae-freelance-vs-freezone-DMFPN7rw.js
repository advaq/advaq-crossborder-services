import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
function UAEFreelanceVsFreezonePage() {
  const [needCorporateBank, setNeedCorporateBank] = useState(true);
  const [needMultipleVisas, setNeedMultipleVisas] = useState(false);
  const freelancePermitCost = 7500;
  const freelanceVisaCost = 3500;
  const totalFreelanceYear1 = freelancePermitCost + freelanceVisaCost;
  const freezonePackageCost = 13900;
  const isFreezoneRecommended = needCorporateBank || needMultipleVisas;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Freelance vs Freezone License" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Freelance Permit vs Freezone License (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Side-by-side cost and feature comparison for IT consultants, designers, and solo founders in Dubai." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-4 ${isFreezoneRecommended ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-gold-50 border-gold-300 text-gold-950"}`, children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "text-gold-600 shrink-0", size: 36 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isFreezoneRecommended ? "🎉 Full Freezone LLC License Recommended!" : "💡 Solo Freelance Permit Sufficient" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isFreezoneRecommended ? "Because you need corporate bank accounts or future employee visas, a Full Freezone LLC License (IFZA/SHAMS) provides complete flexibility." : "If you only need a personal residency visa and operate as an individual contractor, the GoFreelance Permit is cost-effective." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 bg-off-white/50 p-6 rounded-2xl border border-border text-xs", children: [
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Do you need a Corporate Bank Account (Wio/Mashreq)?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Freezone LLCs get corporate bank accounts; Freelance permits use personal accounts." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: needCorporateBank, onChange: (e) => setNeedCorporateBank(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Do you plan to sponsor employee visas in future?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Freelance permits cannot hire employees or issue staff visas." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: needMultipleVisas, onChange: (e) => setNeedMultipleVisas(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif font-bold text-navy-950 text-lg", children: "GoFreelance Permit (TECOM)" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-gray-700", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Annual Permit Fee:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono", children: "AED 7,500" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "2-Year Residence Visa:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono", children: "AED 3,500" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border font-bold text-navy-950 text-sm", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Year-1 Cost:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-600", children: [
                "AED ",
                totalFreelanceYear1.toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-4 shadow-lg", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif font-bold text-white text-lg", children: "Full Freezone LLC (SHAMS / IFZA)" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-navy-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Full Trade License & Flexi Desk:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono text-white", children: "AED 9,500" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "2-Year Investor Visa & Medical:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono text-white", children: "AED 4,400" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 font-bold text-white text-sm", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Year-1 Cost:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-400", children: [
                "AED ",
                freezonePackageCost.toLocaleString()
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Setup UAE Company / License with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  UAEFreelanceVsFreezonePage as component
};
