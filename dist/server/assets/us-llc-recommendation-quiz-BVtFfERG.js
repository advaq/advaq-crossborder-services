import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
function USLLCRecommendationQuizPage() {
  const [qRevenue, setQRevenue] = useState("medium");
  const [qGateway, setQGateway] = useState(true);
  const [qVcFund, setQVcFund] = useState(false);
  let recommendationTitle = "Wyoming US LLC Strongly Recommended!";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation = "A Wyoming US LLC gives you direct access to Stripe, US bank accounts (Mercury/Wise), 0% US federal tax status, and strong brand authority with US & European clients.";
  if (qVcFund) {
    recommendationTitle = "Delaware C-Corporation Recommended";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation = "Because you plan to raise equity capital from US Venture Capitalists or Y-Combinator, forming a Delaware C-Corp is the required legal structure.";
  } else if (qRevenue === "low" && !qGateway) {
    recommendationTitle = "Hold Off — Use Local Entity for Now";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
    explanation = "At under $5,000 annual revenue without payment gateway requirements, operating as a local Sole Proprietor keeps your compliance costs minimal until you scale.";
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US LLC Decision Quiz" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Should I Form a US LLC? (Interactive Quiz)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Answer 3 quick questions about your revenue, clients, and payment gateway needs to get an instant recommendation." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border ${badgeColor} transition-all`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 24, className: "text-gold-600" }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: recommendationTitle })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm leading-relaxed opacity-90", children: explanation })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-xs bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "1. What is your estimated annual client revenue ($)?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQRevenue("low"), className: `p-3 rounded-xl border text-left font-semibold ${qRevenue === "low" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Under $5,000 / year" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQRevenue("medium"), className: `p-3 rounded-xl border text-left font-semibold ${qRevenue === "medium" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "$5,000 – $50,000 / year" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQRevenue("high"), className: `p-3 rounded-xl border text-left font-semibold ${qRevenue === "high" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Over $50,000 / year" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "2. Do you need Stripe, PayPal Business, or a US Bank Account?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQGateway(true), className: `p-3 rounded-xl border text-left font-semibold ${qGateway ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Yes — Crucial for international payments" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQGateway(false), className: `p-3 rounded-xl border text-left font-semibold ${!qGateway ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "No — Local bank wire is fine" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "3. Do you plan to raise equity capital from US VCs / Y-Combinator?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQVcFund(true), className: `p-3 rounded-xl border text-left font-semibold ${qVcFund ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Yes — VC fundraising planned" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQVcFund(false), className: `p-3 rounded-xl border text-left font-semibold ${!qVcFund ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "No — Self-funded / Bootstrapped" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Form Your US Company with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  USLLCRecommendationQuizPage as component
};
