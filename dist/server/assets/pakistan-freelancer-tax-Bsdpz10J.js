import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function PakistanFreelancerTaxPage() {
  const [monthlyIncomeUSD, setMonthlyIncomeUSD] = useState(2500);
  const [usdPkrRate, setUsdPkrRate] = useState(278);
  const [isPsebRegistered, setIsPsebRegistered] = useState(true);
  const annualIncomeUSD = monthlyIncomeUSD * 12;
  const annualIncomePKR = annualIncomeUSD * usdPkrRate;
  const appliedWhtRate = isPsebRegistered ? 0.25 : 1;
  const totalTaxPayablePKR = annualIncomePKR * (appliedWhtRate / 100);
  const fcvaUsdRetainedMonthly = monthlyIncomeUSD * 0.5;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Freelancer Complete Tax Tool" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan Freelancer Complete Tax Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate Section 154A 0.25% reduced tax rates, PSEB tax credit savings, and SBP Exporters' FCVA 50% USD retention limits." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Monthly Freelance Income (USD $):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "$",
              monthlyIncomeUSD.toLocaleString(),
              " USD"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "500", max: "20000", step: "250", value: monthlyIncomeUSD, onChange: (e) => setMonthlyIncomeUSD(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "USD to PKR Exchange Rate:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "1 USD = Rs ",
              usdPkrRate
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "250", max: "320", step: "1", value: usdPkrRate, onChange: (e) => setUsdPkrRate(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Are You Registered with PSEB (Pakistan Software Export Board)?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "PSEB registration unlocks the 0.25% concessional final tax rate under Section 154A." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isPsebRegistered, onChange: (e) => setIsPsebRegistered(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Freelancer Tax & FCVA Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross Annual Income (PKR):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "Rs ",
                Math.round(annualIncomePKR).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Section 154A WHT Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-bold", children: [
                appliedWhtRate,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FCVA 50% Monthly USD Retention:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-bold", children: [
                "$",
                fcvaUsdRetainedMonthly.toLocaleString(),
                " USD / mo"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Final Income Tax Due (Annual)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "Rs ",
              Math.round(totalTaxPayablePKR).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[11px] text-navy-300", children: [
              "That's only Rs ",
              Math.round(totalTaxPayablePKR / 12).toLocaleString(),
              " per month!"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/pseb-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Register PSEB & File Tax Return with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  PakistanFreelancerTaxPage as component
};
