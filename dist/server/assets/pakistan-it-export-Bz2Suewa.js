import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
function PakistanITExportCalculatorPage() {
  const [annualExportUsd, setAnnualExportUsd] = useState(5e4);
  const [exchangeRatePKR, setExchangeRatePKR] = useState(280);
  const [isPsebRegistered, setIsPsebRegistered] = useState(true);
  const totalExportRevenuePKR = annualExportUsd * exchangeRatePKR;
  const normalCorporateTaxPKR = totalExportRevenuePKR * 0.29;
  const section154aTaxPKR = totalExportRevenuePKR * (isPsebRegistered ? 25e-4 : 0.01);
  const taxSavingsPKR = normalCorporateTaxPKR - section154aTaxPKR;
  const usdRetentionAllowed = annualExportUsd * 0.5;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Pakistan IT Exporter Tax Credit" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan IT Exporter 100% Tax Credit Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate Section 154A 100% tax credit savings, 0.25% reduced withholding tax, PSEB ROI, and SBP 50% USD foreign currency retention capacity." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl border bg-navy-950 border-gold-500 text-white flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase font-semibold block", children: "Section 154A 100% Tax Credit Benefit" }),
          /* @__PURE__ */ jsxs("h3", { className: "font-serif text-2xl font-bold mt-1 text-white", children: [
            "Save Rs ",
            Math.round(taxSavingsPKR).toLocaleString(),
            " PKR in FBR Income Tax!"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Your tax liability is reduced from 29% corporate rate down to 0.25% final withholding tax." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/pseb-registration", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0 hidden sm:block", children: "Register PSEB with ADVAQ" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual IT Export Remittances ($ USD):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              annualExportUsd.toLocaleString(),
              " USD"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10000", max: "500000", step: "10000", value: annualExportUsd, onChange: (e) => setAnnualExportUsd(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-gray-500 block mt-1", children: [
            "Equivalent PKR: Rs ",
            (totalExportRevenuePKR / 1e5).toLocaleString(),
            " Lacs"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isPsebRegistered, onChange: (e) => setIsPsebRegistered(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "PSEB Call Center / IT Exporter Registered?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Qualifies for 0.25% reduced rate under Section 154A." })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: "Section 154A Final Tax (0.25%)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
            "Rs ",
            Math.round(section154aTaxPKR).toLocaleString(),
            " PKR"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "No further FBR audit or income tax liability." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gold-500 uppercase", children: "SBP FCVA 50% USD Retention Allowance" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
            "$",
            usdRetentionAllowed.toLocaleString(),
            " USD"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200", children: "Retain 50% in foreign currency to pay software, hosting & digital ad bills abroad." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need PSEB Registration & Section 154A Tax Exemption Certificate?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Complete PSEB registration, FBR 154A filing & FCVA bank approval." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/pseb-registration", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Get 100% Tax Credit with ADVAQ" })
      ] })
    ] }) })
  ] });
}
export {
  PakistanITExportCalculatorPage as component
};
