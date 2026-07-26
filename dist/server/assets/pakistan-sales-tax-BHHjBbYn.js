import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
function PakistanSalesTaxCalculatorPage() {
  const [invoiceAmountPKR, setInvoiceAmountPKR] = useState(5e5);
  const [provinceAuthority, setProvinceAuthority] = useState("pra");
  const [isExportService, setIsExportService] = useState(false);
  let salesTaxRate = 0.16;
  let authorityName = "PRA (Punjab Revenue Authority)";
  if (isExportService) {
    salesTaxRate = 0;
  } else {
    if (provinceAuthority === "pra") {
      salesTaxRate = 0.16;
      authorityName = "PRA (Punjab Revenue Authority)";
    } else if (provinceAuthority === "srb") {
      salesTaxRate = 0.13;
      authorityName = "SRB (Sindh Revenue Board)";
    } else if (provinceAuthority === "kpra") {
      salesTaxRate = 0.15;
      authorityName = "KPRA (KPK Revenue Authority)";
    } else {
      salesTaxRate = 0.15;
      authorityName = "FBR ICT (Islamabad Capital Territory)";
    }
  }
  const salesTaxAmountPKR = invoiceAmountPKR * salesTaxRate;
  const totalInvoiceWithTaxPKR = invoiceAmountPKR + salesTaxAmountPKR;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Provincial Sales Tax Rates" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan Sales Tax on Services Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate provincial sales tax output across PRA (Punjab 16%), SRB (Sindh 13%), KPRA (15%), and FBR (ICT 15%) for IT, web, and marketing agencies." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Provincial Tax Authority:" }),
          /* @__PURE__ */ jsxs("select", { value: provinceAuthority, onChange: (e) => setProvinceAuthority(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "pra", children: "PRA - Punjab Revenue Authority (16%)" }),
            /* @__PURE__ */ jsx("option", { value: "srb", children: "SRB - Sindh Revenue Board (13%)" }),
            /* @__PURE__ */ jsx("option", { value: "kpra", children: "KPRA - Khyber Pakhtunkhwa Revenue Authority (15%)" }),
            /* @__PURE__ */ jsx("option", { value: "ict", children: "FBR - Islamabad Capital Territory (15%)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. Gross Service Invoice Amount (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "Rs ",
              invoiceAmountPKR.toLocaleString(),
              " PKR"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "5000000", step: "50000", value: invoiceAmountPKR, onChange: (e) => setInvoiceAmountPKR(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isExportService, onChange: (e) => setIsExportService(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Export IT Service / Foreign Client Billing?" }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Export of IT & software services is 0% Zero-Rated across all provinces!" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: [
            "Sales Tax Output (",
            authorityName,
            ")"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-red-600", children: [
            "Rs ",
            Math.round(salesTaxAmountPKR).toLocaleString(),
            " PKR"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gold-500 uppercase", children: "Total Invoice Billed to Client" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
            "Rs ",
            Math.round(totalInvoiceWithTaxPKR).toLocaleString(),
            " PKR"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need Provincial Sales Tax Registration (PRA/SRB/FBR)?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Complete sales tax registration & monthly return filing." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/sales-tax-registration", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Register Sales Tax with ADVAQ" })
      ] })
    ] }) })
  ] });
}
export {
  PakistanSalesTaxCalculatorPage as component
};
