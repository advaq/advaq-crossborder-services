import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function PakistanWHTCalculatorPage() {
  const [transactionType, setTransactionType] = useState("services");
  const [invoiceAmountPKR, setInvoiceAmountPKR] = useState(5e5);
  const [isFiler, setIsFiler] = useState(true);
  const whtRates = {
    services: {
      filer: 9,
      nonFiler: 18,
      label: "Services (Section 153(1)(b))"
    },
    goods: {
      filer: 5,
      nonFiler: 10,
      label: "Sale of Goods (Section 153(1)(a))"
    },
    contracts: {
      filer: 7.5,
      nonFiler: 15,
      label: "Execution of Contracts (Section 153(1)(c))"
    }
  };
  const currentRate = whtRates[transactionType] || whtRates.services;
  const appliedRatePercent = isFiler ? currentRate.filer : currentRate.nonFiler;
  const whtDeductedAmountPKR = invoiceAmountPKR * (appliedRatePercent / 100);
  const netPaymentToVendorPKR = invoiceAmountPKR - whtDeductedAmountPKR;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "FBR Withholding Tax (WHT)" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan FBR Withholding Tax (WHT) Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate Section 153 withholding tax deductions on invoices for services, goods, and contracts for ATL Filers vs Non-Filers." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Payment Category (Section 153):" }),
          /* @__PURE__ */ jsxs("select", { value: transactionType, onChange: (e) => setTransactionType(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "services", children: "Services (Filer 9% / Non-Filer 18%)" }),
            /* @__PURE__ */ jsx("option", { value: "goods", children: "Supply of Goods (Filer 5% / Non-Filer 10%)" }),
            /* @__PURE__ */ jsx("option", { value: "contracts", children: "Execution of Contracts (Filer 7.5% / Non-Filer 15%)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Gross Invoice Amount (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "Rs ",
              invoiceAmountPKR.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "10000000", step: "50000", value: invoiceAmountPKR, onChange: (e) => setInvoiceAmountPKR(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Is the Vendor / Payee an Active Taxpayer (ATL Filer)?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Non-Filers are subject to double 100% higher WHT penalty rates." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isFiler, onChange: (e) => setIsFiler(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "WHT Deduction Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Category:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: currentRate.label })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Filer Status:" }),
              /* @__PURE__ */ jsx("span", { className: `font-semibold ${isFiler ? "text-emerald-400" : "text-amber-400"}`, children: isFiler ? "Active Filer" : "Non-Filer (2x Rate)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Applied WHT Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-bold", children: [
                appliedRatePercent,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Payable to Vendor:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-bold", children: [
                "Rs ",
                Math.round(netPaymentToVendorPKR).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "WHT Tax to Deposit with FBR (CPR)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "Rs ",
              Math.round(whtDeductedAmountPKR).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/withholding-compliance", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File FBR WHT Statement with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  PakistanWHTCalculatorPage as component
};
