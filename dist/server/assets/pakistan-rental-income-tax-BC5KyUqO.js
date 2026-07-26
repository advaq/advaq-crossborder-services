import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function PakistanRentalIncomeTaxPage() {
  const [monthlyRentPKR, setMonthlyRentPKR] = useState(15e4);
  const [isFiler, setIsFiler] = useState(true);
  const annualRentPKR = monthlyRentPKR * 12;
  let annualRentalTaxPKR = 0;
  if (annualRentPKR > 2e6) {
    annualRentalTaxPKR = 195e3 + (annualRentPKR - 2e6) * 0.2;
  } else if (annualRentPKR > 12e5) {
    annualRentalTaxPKR = 75e3 + (annualRentPKR - 12e5) * 0.15;
  } else if (annualRentPKR > 6e5) {
    annualRentalTaxPKR = 15e3 + (annualRentPKR - 6e5) * 0.1;
  } else if (annualRentPKR > 3e5) {
    annualRentalTaxPKR = (annualRentPKR - 3e5) * 0.05;
  }
  if (!isFiler) {
    annualRentalTaxPKR = annualRentalTaxPKR * 2;
  }
  const effectiveTaxRate = annualRentPKR > 0 ? annualRentalTaxPKR / annualRentPKR * 100 : 0;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Rental Income Tax (Sec 15)" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan Rental Income Tax Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate FBR Section 15 tax on property rent and tenant withholding tax deductions for Filers vs Non-Filers." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Monthly Rent Received (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "Rs ",
              monthlyRentPKR.toLocaleString(),
              " / month"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "20000", max: "500000", step: "5000", value: monthlyRentPKR, onChange: (e) => setMonthlyRentPKR(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Is the Property Owner an Active Taxpayer (ATL Filer)?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Non-Filers pay double (100% higher) tax on rental income." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isFiler, onChange: (e) => setIsFiler(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Rental Tax Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross Annual Rent:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "Rs ",
                annualRentPKR.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Effective Tax Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-bold", children: [
                effectiveTaxRate.toFixed(2),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Annual Income Tax on Property Rent" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "Rs ",
              Math.round(annualRentalTaxPKR).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/individual-tax-return", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File Property Tax Return with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  PakistanRentalIncomeTaxPage as component
};
