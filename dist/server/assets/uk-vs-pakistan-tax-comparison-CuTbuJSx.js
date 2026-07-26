import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shield, ArrowRight } from "lucide-react";
function UKVsPakistanTaxComparisonPage() {
  const [annualProfitGbp, setAnnualProfitGbp] = useState(5e4);
  const pkrExchangeRate = 350;
  const salary = Math.min(annualProfitGbp, 12570);
  const profitForCt = Math.max(0, annualProfitGbp - salary);
  const ukCt = profitForCt * 0.19;
  const netDiv = profitForCt - ukCt;
  const taxableDiv = Math.max(0, netDiv - 500);
  const ukDivTax = taxableDiv > 37700 ? 37700 * 0.0875 + (taxableDiv - 37700) * 0.3375 : taxableDiv * 0.0875;
  const ukTotalTaxGbp = ukCt + ukDivTax;
  const ukNetTakeHomeGbp = annualProfitGbp - ukTotalTaxGbp;
  const pkFbrTaxGbp = annualProfitGbp * 25e-4;
  const pkNetTakeHomeGbp = annualProfitGbp - pkFbrTaxGbp;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK vs Pakistan Tax Comparison" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "🇬🇧 UK vs 🇵🇰 Pakistan Tax Comparison Tool (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Side-by-side tax comparison for dual-resident & expat Pakistani founders: UK LTD dividends vs Pakistan FBR 0.25% IT Export Exemption." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
          /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual International Profit (£ GBP):" }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-lg", children: [
            "£",
            annualProfitGbp.toLocaleString(),
            " (",
            (annualProfitGbp * pkrExchangeRate / 1e6).toFixed(2),
            "M PKR)"
          ] })
        ] }),
        /* @__PURE__ */ jsx("input", { type: "range", min: "10000", max: "200000", step: "5000", value: annualProfitGbp, onChange: (e) => setAnnualProfitGbp(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-2xl p-6 bg-white space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🇬🇧" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-navy-950 text-lg", children: "UK LTD Structure" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-navy-100 text-navy-900 px-3 py-1 rounded-full font-medium", children: "HMRC Rules" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-gray-700", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Corporation Tax (19%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "£",
                Math.round(ukCt).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Director Dividend Tax:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "£",
                Math.round(ukDivTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border font-semibold text-navy-950", children: [
              /* @__PURE__ */ jsx("span", { children: "Total UK Tax Bill:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-600", children: [
                "£",
                Math.round(ukTotalTaxGbp).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border text-sm font-bold text-navy-950", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Take-Home Pay:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-600", children: [
                "£",
                Math.round(ukNetTakeHomeGbp).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-2xl p-6 bg-navy-950 text-white space-y-4 shadow-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-white/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🇵🇰" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-white text-lg", children: "Pakistan IT Exporter" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium", children: "FBR 154A 0.25%" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-navy-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "FBR Sec 154A Final Tax (0.25%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-400", children: [
                "£",
                Math.round(pkFbrTaxGbp).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "SECP & PSEB Annual Compliance:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono text-white", children: "~£200" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 font-semibold text-white", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Pakistan Tax Bill:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-400", children: [
                "£",
                Math.round(pkFbrTaxGbp + 200).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Take-Home Pay:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-400", children: [
                "£",
                Math.round(pkNetTakeHomeGbp - 200).toLocaleString()
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-5 rounded-xl text-xs space-y-2 text-navy-950", children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-serif font-bold text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { size: 16, className: "text-gold-500" }),
          "UK-Pakistan Double Taxation Treaty (Article 22)"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "If you are resident in both UK and Pakistan, Article 22 of the Double Taxation Agreement ensures you never pay double tax. UK HMRC grants full Foreign Tax Credit relief for tax already paid to FBR Pakistan." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Book Cross-Border Structure Review ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  UKVsPakistanTaxComparisonPage as component
};
