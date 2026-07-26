import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function USTrademarkCostCalculatorPage() {
  const [numberOfClasses, setNumberOfClasses] = useState(1);
  const [includeComprehensiveSearch, setIncludeComprehensiveSearch] = useState(true);
  const [includeAttorneyDrafting, setIncludeAttorneyDrafting] = useState(true);
  const usptoGovtFeePerClass = 250;
  const totalGovtFee = numberOfClasses * usptoGovtFeePerClass;
  const searchFee = includeComprehensiveSearch ? 149 : 0;
  const attorneyFee = includeAttorneyDrafting ? 299 : 0;
  const totalTrademarkCost = totalGovtFee + searchFee + attorneyFee;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "USPTO Trademark Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "USPTO Trademark Filing Fee & Class Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate official USPTO government fees ($250 per class), legal search fees, and attorney drafting costs." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Number of International Goods / Services Classes:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              numberOfClasses,
              " ",
              numberOfClasses === 1 ? "Class" : "Classes"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "1", max: "5", step: "1", value: numberOfClasses, onChange: (e) => setNumberOfClasses(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "E.g. Class 9 (Software/App) + Class 42 (IT Hosting) = 2 Classes." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeComprehensiveSearch, onChange: (e) => setIncludeComprehensiveSearch(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Comprehensive Trademark Conflict Search" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Searches USPTO database, state registers & web to prevent rejection." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$149" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeAttorneyDrafting, onChange: (e) => setIncludeAttorneyDrafting(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "US Licensed Attorney Filing & Office Action Defense" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Mandatory for non-US applicants under USPTO rules." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$299" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "USPTO Filing Cost Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "USPTO Govt Fees (",
                numberOfClasses,
                "x $250):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                totalGovtFee
              ] })
            ] }),
            includeComprehensiveSearch && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Trademark Conflict Search:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$149" })
            ] }),
            includeAttorneyDrafting && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "US Attorney Filing:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$299" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Trademark Filing Cost" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "$",
              totalTrademarkCost,
              /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-300 font-sans font-normal ml-2", children: "USD" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Register Trademark with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20USPTO%20Trademark%20Calculator%20(${numberOfClasses}%20classes,%20$${totalTrademarkCost}).%20Please%20guide%20me.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp Trademark Attorney" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  USTrademarkCostCalculatorPage as component
};
