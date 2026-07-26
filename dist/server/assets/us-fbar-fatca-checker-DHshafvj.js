import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
function USFbarFatcaCheckerPage() {
  const [maxAccountBalance, setMaxAccountBalance] = useState(15e3);
  const [isUsPersonOrLlc, setIsUsPersonOrLlc] = useState(true);
  const fbarThreshold = 1e4;
  const isFbarFilingMandatory = isUsPersonOrLlc && maxAccountBalance >= fbarThreshold;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "FBAR & FATCA Compliance" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FBAR (FinCEN 114) & FATCA Requirement Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Verify whether your US LLC or foreign financial accounts cross the $10,000 threshold requiring annual FinCEN 114 reporting." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isFbarFilingMandatory ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-emerald-50 border-emerald-300 text-emerald-950"}`, children: [
        isFbarFilingMandatory ? /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0", size: 36 }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 36 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isFbarFilingMandatory ? "Mandatory FBAR (FinCEN 114) Filing Required!" : "Below $10,000 Threshold — No FBAR Required" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isFbarFilingMandatory ? `Your maximum aggregate foreign bank balance reached $${maxAccountBalance.toLocaleString()}, exceeding the $10,000 threshold. You must submit FinCEN Form 114 by April 15 (auto-extended to Oct 15).` : `Your aggregate bank balance ($${maxAccountBalance.toLocaleString()}) remained under $10,000 throughout the year. No FBAR report is required.` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Highest Peak Aggregate Bank Balance During Calendar Year ($):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              maxAccountBalance.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "2000", max: "100000", step: "2500", value: maxAccountBalance, onChange: (e) => setMaxAccountBalance(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Combines max balances of all non-US bank accounts, Wise, Payoneer, and sub-accounts." })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Is the Account Held by a US LLC or US Person?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "US entity or US tax resident signature authority." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isUsPersonOrLlc, onChange: (e) => setIsUsPersonOrLlc(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      isFbarFilingMandatory && /* @__PURE__ */ jsxs("div", { className: "p-5 bg-navy-950 text-white rounded-xl border border-gold-500/40 text-xs space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
          /* @__PURE__ */ jsx("span", { children: "Statutory FBAR Penalty Warning" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-navy-200 leading-relaxed", children: [
          "Failing to file FinCEN 114 carries non-willful statutory civil penalties up to ",
          /* @__PURE__ */ jsx("strong", { children: "$10,000 per violation" }),
          ", and willful penalties up to ",
          /* @__PURE__ */ jsx("strong", { children: "$100,000 or 50% of account balance" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "File FBAR with ADVAQ Compliance Team ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  USFbarFatcaCheckerPage as component
};
