import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
function UAETaxResidencyCheckerPage() {
  const [daysInUae, setDaysInUae] = useState(190);
  const [hasEmiratesId, setHasEmiratesId] = useState(true);
  const [hasPermanentHome, setHasPermanentHome] = useState(true);
  const is183DayPass = daysInUae >= 183;
  const is90DayPass = daysInUae >= 90 && hasEmiratesId && hasPermanentHome;
  const isEligible = is183DayPass || is90DayPass;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UAE Tax Residency (TRC)" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Tax Residency Certificate (TRC) Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Test Cabinet Decision No. 85 of 2022 physical presence rules (183-day vs 90-day threshold) for obtaining an FTA Tax Residency Certificate." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isEligible ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-amber-50 border-amber-300 text-amber-950"}`, children: [
        isEligible ? /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 40 }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0", size: 40 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isEligible ? "🎉 Eligible for UAE Tax Residency Certificate (TRC)!" : "⚠️ Insufficient Physical Days for UAE Tax Residency" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isEligible ? `You satisfy Cabinet Decision No. 85 of 2022 physical presence limits (${daysInUae} days in UAE). You can apply for an official FTA Tax Residency Certificate.` : `You currently have ${daysInUae} physical days in UAE. You need at least 183 days (or 90 days with UAE residence + lease/employment) to qualify.` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Physical Days Spent in UAE (within 12-month period):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              daysInUae,
              " Days in UAE"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10", max: "365", step: "5", value: daysInUae, onChange: (e) => setDaysInUae(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "90 Days (Tied to Residence)" }),
            /* @__PURE__ */ jsx("span", { children: "183 Days (Automatic TRC)" }),
            /* @__PURE__ */ jsx("span", { children: "365 Days" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasEmiratesId, onChange: (e) => setHasEmiratesId(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-semibold", children: "Valid UAE Residency Visa & Emirates ID" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasPermanentHome, onChange: (e) => setHasPermanentHome(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-semibold", children: "Tenancy Contract (Ejari) / Property Ownership" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Apply for FTA Tax Residency Certificate with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  UAETaxResidencyCheckerPage as component
};
