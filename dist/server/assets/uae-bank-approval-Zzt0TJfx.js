import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UAEBankApprovalCalculatorPage() {
  const [hasEmiratesId, setHasEmiratesId] = useState(true);
  const [hasEjariOffice, setHasEjariOffice] = useState(false);
  const [minMonthlyBalanceAED, setMinMonthlyBalanceAED] = useState(25e3);
  const [businessActivity, setBusinessActivity] = useState("it-consulting");
  let score = 30;
  if (hasEmiratesId) score += 30;
  if (hasEjariOffice) score += 20;
  if (minMonthlyBalanceAED >= 5e4) score += 15;
  else if (minMonthlyBalanceAED >= 1e4) score += 10;
  if (businessActivity === "it-consulting" || businessActivity === "marketing") score += 5;
  else if (businessActivity === "crypto" || businessActivity === "trading") score -= 20;
  score = Math.min(99, Math.max(10, score));
  let bankRec = "Wio Business & Mashreq NeoBiz";
  if (score > 80) bankRec = "Wio Business, Mashreq NeoBiz & Emirates NBD";
  else if (score > 60) bankRec = "Wio Business & RAKBANK Digital";
  else bankRec = "Specialized UAE Corporate Banking Assistance Required";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Dubai Bank Approval Checker" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Dubai Corporate Bank Account Approval Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check your approval probability for Wio Bank, Mashreq NeoBiz, Emirates NBD, and RAKBANK for Freezone & Mainland companies." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Business Activity:" }),
          /* @__PURE__ */ jsxs("select", { value: businessActivity, onChange: (e) => setBusinessActivity(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "it-consulting", children: "Software, Tech & IT Consultancy" }),
            /* @__PURE__ */ jsx("option", { value: "marketing", children: "Digital Marketing & Media Agency" }),
            /* @__PURE__ */ jsx("option", { value: "trading", children: "General Trading & Physical Goods" }),
            /* @__PURE__ */ jsx("option", { value: "crypto", children: "Crypto, Gaming or Financial Trading" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. Planned Minimum Monthly Balance (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              minMonthlyBalanceAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "100000", step: "5000", value: minMonthlyBalanceAED, onChange: (e) => setMinMonthlyBalanceAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasEmiratesId, onChange: (e) => setHasEmiratesId(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "UAE Residence Visa & Emirates ID Stamped?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Crucial for UAE compliance KYC." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasEjariOffice, onChange: (e) => setHasEjariOffice(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Physical Office Space with Ejari Tenancy?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Improves traditional bank approval (Emirates NBD / FAB)." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Dubai Bank Approval Odds" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Estimated Approval Odds" }),
            /* @__PURE__ */ jsxs("div", { className: "text-5xl font-serif font-bold text-white my-2", children: [
              score,
              "%"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-navy-200", children: [
              "Recommended Banks: ",
              /* @__PURE__ */ jsx("strong", { className: "text-gold-400 block mt-1 font-sans", children: bankRec })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uae-services/business-bank-account-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Open UAE Bank Account with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20checked%20my%20Dubai%20Bank%20Approval%20Odds%20(${score}%25).%20Please%20help%20me%20open%20Wio%20Bank.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp Dubai Banking Lawyer" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  UAEBankApprovalCalculatorPage as component
};
