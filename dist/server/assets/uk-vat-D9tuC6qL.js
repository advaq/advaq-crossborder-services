import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
function UKVATCalculatorPage() {
  const [rollingTurnover, setRollingTurnover] = useState(85e3);
  const [annualVatExpenses, setAnnualVatExpenses] = useState(15e3);
  const [flatRatePercentage, setFlatRatePercentage] = useState(14.5);
  const [isFirstYearDiscount, setIsFirstYearDiscount] = useState(true);
  const vatThreshold = 9e4;
  const isVatRegistrationMandatory = rollingTurnover >= vatThreshold;
  const effectiveFlatRate = Math.max(0, flatRatePercentage - (isFirstYearDiscount ? 1 : 0));
  const vatOutputStandard = rollingTurnover * 0.2;
  const vatInputStandard = annualVatExpenses * 0.2;
  const netVatPayableStandard = Math.max(0, vatOutputStandard - vatInputStandard);
  const grossRevenueIncludingVat = rollingTurnover * 1.2;
  const netVatPayableFlatRate = grossRevenueIncludingVat * (effectiveFlatRate / 100);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK VAT Threshold & Scheme" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK VAT £90,000 Threshold & Scheme Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Monitor your rolling 12-month UK turnover against the £90k mandatory VAT limit and compare Flat Rate vs Standard 20% VAT savings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-5 rounded-2xl border flex items-center gap-4 ${isVatRegistrationMandatory ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-emerald-50 border-emerald-300 text-emerald-950"}`, children: [
        isVatRegistrationMandatory ? /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0", size: 32 }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 32 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-semibold text-lg", children: isVatRegistrationMandatory ? "Mandatory UK VAT Registration Required!" : "Below Mandatory £90,000 Threshold (Voluntary Optional)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-0.5", children: isVatRegistrationMandatory ? "Your 12-month rolling UK turnover has crossed £90,000. You must register for UK VAT with HMRC within 30 days to avoid penalties." : "You are currently under the mandatory threshold. Voluntary VAT registration can still be beneficial if your B2B clients reclaim VAT." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "12-Month UK Turnover (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              rollingTurnover.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "20000", max: "250000", step: "5000", value: rollingTurnover, onChange: (e) => setRollingTurnover(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Threshold: £90,000 (Mandatory Limit)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual VAT-Subject Expenses (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              annualVatExpenses.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: rollingTurnover * 0.5, step: "2500", value: annualVatExpenses, onChange: (e) => setAnnualVatExpenses(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Hardware, software, advertising, contractor costs with 20% VAT." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-serif font-semibold text-navy-950 text-lg", children: "Standard Rate VAT (20%)" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-gray-100 px-3 py-1 rounded-full font-medium", children: "Reclaim Input VAT" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-gray-700", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Output VAT Collected (20%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "£",
                Math.round(vatOutputStandard).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Input VAT Reclaimed (20%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-600", children: [
                "-£",
                Math.round(vatInputStandard).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border text-sm font-bold text-navy-950", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Annual HMRC VAT Bill:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "£",
                Math.round(netVatPayableStandard).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-4 shadow-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-white/10", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-serif font-semibold text-white text-lg", children: "Flat Rate VAT Scheme" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium", children: "Simplified %" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-navy-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsx("span", { children: "Industry Sector Rate:" }),
                /* @__PURE__ */ jsxs("select", { value: flatRatePercentage, onChange: (e) => setFlatRatePercentage(Number(e.target.value)), className: "bg-navy-900 border border-gold-500/40 text-white text-xs rounded p-1.5 font-sans", children: [
                  /* @__PURE__ */ jsx("option", { value: 14.5, children: "14.5% — IT Consultancy & Telecommunications" }),
                  /* @__PURE__ */ jsx("option", { value: 14, children: "14.0% — Management Consultancy & Business Services" }),
                  /* @__PURE__ */ jsx("option", { value: 11, children: "11.0% — Advertising, Design & Photography" }),
                  /* @__PURE__ */ jsx("option", { value: 14.5, children: "14.5% — Legal & Financial Services" }),
                  /* @__PURE__ */ jsx("option", { value: 7.5, children: "7.5% — Retail & Goods Sales" }),
                  /* @__PURE__ */ jsx("option", { value: 12.5, children: "12.5% — Catering & Hotel Services" }),
                  /* @__PURE__ */ jsx("option", { value: 6.5, children: "6.5% — Pubs & Restaurants" }),
                  /* @__PURE__ */ jsx("option", { value: 16.5, children: "16.5% — Limited Cost Business (<2% goods expenditure)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between text-xs cursor-pointer bg-navy-900/60 p-2 rounded border border-white/10", children: [
                /* @__PURE__ */ jsx("span", { children: "Apply First-Year 1% HMRC Discount" }),
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isFirstYearDiscount, onChange: (e) => setIsFirstYearDiscount(e.target.checked), className: "accent-gold-500 w-4 h-4" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Annual HMRC VAT Bill:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-400", children: [
                "£",
                Math.round(netVatPayableFlatRate).toLocaleString()
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need UK VAT Registration & Quarterly Return Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "HMRC EORI, Voluntary/Mandatory Registration & Flat Rate Advice." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/uk-services/vat-registration", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Register UK VAT with ADVAQ" })
      ] })
    ] }) })
  ] });
}
export {
  UKVATCalculatorPage as component
};
