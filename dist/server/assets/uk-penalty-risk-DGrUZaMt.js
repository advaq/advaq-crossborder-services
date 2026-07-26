import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKPenaltyRiskCalculatorPage() {
  const [monthsOverdueAccounts, setMonthsOverdueAccounts] = useState(2);
  const [isSecondConsecutiveYear, setIsSecondConsecutiveYear] = useState(false);
  const [monthsOverdueCT600, setMonthsOverdueCT600] = useState(3);
  const [overdueTaxBill, setOverdueTaxBill] = useState(5e3);
  const [appealReason, setAppealReason] = useState("medical");
  let companiesHousePenalty = 0;
  if (monthsOverdueAccounts > 0) {
    if (monthsOverdueAccounts <= 1) companiesHousePenalty = 150;
    else if (monthsOverdueAccounts <= 3) companiesHousePenalty = 375;
    else if (monthsOverdueAccounts <= 6) companiesHousePenalty = 750;
    else companiesHousePenalty = 1500;
    if (isSecondConsecutiveYear) {
      companiesHousePenalty *= 2;
    }
  }
  let hmrcLatePenalty = 0;
  if (monthsOverdueCT600 > 0) {
    if (monthsOverdueCT600 <= 3) hmrcLatePenalty = 100;
    else if (monthsOverdueCT600 <= 6) hmrcLatePenalty = 200;
    else hmrcLatePenalty = 500;
  }
  const hmrcInterestRate = 0.075;
  const daysOverdue = monthsOverdueCT600 * 30;
  const hmrcLateInterest = overdueTaxBill > 0 && daysOverdue > 0 ? overdueTaxBill * hmrcInterestRate * (daysOverdue / 365) : 0;
  const totalOverduePenalties = companiesHousePenalty + hmrcLatePenalty + hmrcLateInterest;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Late Filing Penalty Risk" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "HMRC & Companies House Late Penalty Estimator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact statutory penalties and interest for overdue annual accounts, Confirmation Statements, and CT600 Corporation Tax returns." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "1. Companies House Accounts Overdue Period:" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-600 font-bold text-base", children: monthsOverdueAccounts === 0 ? "On Time (0 Months)" : `${monthsOverdueAccounts} Months Late` })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "12", step: "1", value: monthsOverdueAccounts, onChange: (e) => setMonthsOverdueAccounts(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "0 Months" }),
            /* @__PURE__ */ jsx("span", { children: "3 Months" }),
            /* @__PURE__ */ jsx("span", { children: "6 Months" }),
            /* @__PURE__ */ jsx("span", { children: "12+ Months" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isSecondConsecutiveYear, onChange: (e) => setIsSecondConsecutiveYear(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Late for 2nd Consecutive Year?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Companies House doubles statutory penalties if accounts are late 2 years in a row." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. HMRC CT600 Corporation Tax Overdue Period:" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-600 font-bold text-base", children: monthsOverdueCT600 === 0 ? "On Time (0 Months)" : `${monthsOverdueCT600} Months Late` })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "12", step: "1", value: monthsOverdueCT600, onChange: (e) => setMonthsOverdueCT600(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Statutory Penalty Estimate" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Companies House Late Accounts Penalty:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                companiesHousePenalty
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "HMRC CT600 Late Tax Return Penalty:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                hmrcLatePenalty
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Statutory Penalty Risk" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              totalOverduePenalties,
              /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-300 font-sans font-normal ml-2", children: "GBP" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 pt-3 border-t border-white/10 text-xs text-navy-200", children: "Act fast before Companies House issues a compulsory strike-off warning!" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/annual-accounts", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File Overdue Accounts with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20My%20UK%20LTD%20accounts%20are%20overdue%20(${monthsOverdueAccounts}%20months).%20Please%20help%20me%20file%20immediately.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp UK Compliance Accountant" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  UKPenaltyRiskCalculatorPage as component
};
