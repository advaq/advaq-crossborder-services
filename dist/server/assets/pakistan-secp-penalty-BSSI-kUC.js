import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function PakistanSecpPenaltyCalculatorPage() {
  const [monthsOverdue, setMonthsOverdue] = useState(6);
  const [unfiledFormA, setUnfiledFormA] = useState(true);
  const [unfiledForm29, setUnfiledForm29] = useState(true);
  let baseFormAPenalty = unfiledFormA ? 5e3 + monthsOverdue * 1e3 : 0;
  let baseForm29Penalty = unfiledForm29 ? 5e3 + monthsOverdue * 1e3 : 0;
  if (monthsOverdue > 12) {
    baseFormAPenalty += 25e3;
    baseForm29Penalty += 25e3;
  }
  const totalSecpPenaltyRiskPKR = baseFormAPenalty + baseForm29Penalty;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "SECP Late Filing Penalty" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "SECP Form A & Form 29 Late Filing Penalty Estimator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate statutory late filing fees and adjudication penalty risks for overdue SECP Form A, Form 29, Form 4, and annual corporate returns." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Months Overdue Beyond SECP Statutory Deadline:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              monthsOverdue,
              " Months Late"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "1", max: "24", step: "1", value: monthsOverdue, onChange: (e) => setMonthsOverdue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: unfiledFormA, onChange: (e) => setUnfiledFormA(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Form A (Annual Return of Company) Overdue?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Mandatory filing within 30 days of Annual General Meeting (AGM)." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: unfiledForm29, onChange: (e) => setUnfiledForm29(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Form 29 (Particulars of Directors/Officers) Overdue?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Mandatory filing for director change, election or address updates." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "SECP Penalty Exposure" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Estimated Penalty Risk" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white my-2", children: [
              "Rs ",
              totalSecpPenaltyRiskPKR.toLocaleString(),
              " PKR"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-navy-200", children: "File late returns through ADVAQ eServices portal before receiving SECP Adjudication notice." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/secp-annual-filing", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File Overdue SECP Returns with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20My%20SECP%20company%20has%20unfiled%20Form%20A%20/%2029%20(${monthsOverdue}%20months%20late).%20Please%20help%20me%20regularize.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp SECP Specialist" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PakistanSecpPenaltyCalculatorPage as component
};
