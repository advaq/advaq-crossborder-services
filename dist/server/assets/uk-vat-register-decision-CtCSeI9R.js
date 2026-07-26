import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
function UKVATDecisionToolPage() {
  const [qTurnover, setQTurnover] = useState("medium");
  const [qClientType, setQClientType] = useState("b2b");
  const [qExpenses, setQExpenses] = useState("high");
  const [qOverseasAds, setQOverseasAds] = useState(true);
  let title = "Voluntary VAT Registration Recommended!";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation = "Since your clients are primarily B2B businesses and you incur VAT expenses, registering voluntarily allows you to reclaim 20% input VAT on hardware, ads & software without impacting your B2B clients.";
  if (qTurnover === "high") {
    title = "Mandatory UK VAT Registration Required!";
    badgeColor = "bg-amber-50 border-amber-300 text-amber-950";
    explanation = "Your 12-month rolling UK turnover exceeds £90,000. You are legally required by HMRC to register for UK VAT within 30 days.";
  } else if (qClientType === "b2c" && qTurnover === "low") {
    title = "Hold Off — Do Not Register Yet";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
    explanation = "Because your customers are end consumers (B2C) who cannot reclaim VAT, adding 20% VAT would make your prices 20% more expensive or reduce your margins.";
  } else if (qExpenses === "low" && qClientType === "b2b") {
    title = "Register & Apply Flat Rate Scheme (FRS)";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation = "With low physical expenses and B2B clients, registering under the Flat Rate Scheme (e.g., 14.5% IT rate with 1% 1st year discount) lets you keep the difference!";
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "VAT Registration Decision Tool" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Should I Register for UK VAT? (Interactive Quiz)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Answer 4 quick questions about your turnover, clients, and expenses to get an instant recommendation." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border ${badgeColor} transition-all`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 24, className: "text-gold-600" }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm leading-relaxed opacity-90", children: explanation })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-xs bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "1. What is your 12-month rolling UK turnover?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQTurnover("low"), className: `p-3 rounded-xl border text-left font-semibold ${qTurnover === "low" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Under £50,000" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQTurnover("medium"), className: `p-3 rounded-xl border text-left font-semibold ${qTurnover === "medium" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "£50,000 – £90,000" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQTurnover("high"), className: `p-3 rounded-xl border text-left font-semibold ${qTurnover === "high" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Over £90,000 (Mandatory)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "2. Who are your primary customers?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQClientType("b2b"), className: `p-3 rounded-xl border text-left font-semibold ${qClientType === "b2b" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "B2B Companies (They reclaim VAT)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQClientType("b2c"), className: `p-3 rounded-xl border text-left font-semibold ${qClientType === "b2c" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "B2C Consumers (Cannot reclaim VAT)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "3. Do you have high VAT-subject expenses (Hardware, Software, Ads)?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQExpenses("high"), className: `p-3 rounded-xl border text-left font-semibold ${qExpenses === "high" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "High VAT Expenses (>15% of turnover)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQExpenses("low"), className: `p-3 rounded-xl border text-left font-semibold ${qExpenses === "low" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Low VAT Expenses (<15% of turnover)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/vat-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Apply for UK VAT Registration ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  UKVATDecisionToolPage as component
};
