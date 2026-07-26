import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
function UAEFreezoneVsMainlandQuizPage() {
  const [qClients, setQClients] = useState("global");
  const [qOffice, setQOffice] = useState(false);
  const [qGovt, setQGovt] = useState(false);
  let recommendationTitle = "Dubai Freezone LLC Recommended (IFZA / Meydan)";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation = "Since your clients are global/B2B and you do not require a physical onshore shopfront or UAE government tenders, a Dubai Freezone LLC gives you 100% foreign ownership, 0% personal tax, and zero local sponsor requirements at the lowest setup cost.";
  if (qClients === "local" || qOffice || qGovt) {
    recommendationTitle = "Dubai Mainland DET Company Recommended";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation = "Because you trade directly with local UAE retail consumers, require a physical shopfront, or bid on UAE government tenders, a Dubai Mainland DET license is legally required.";
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Freezone or Mainland Quiz" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Freezone or Mainland? (Interactive Decision Quiz)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Answer quick questions about your target clients, office needs, and trading activities for a custom recommendation." })
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
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "1. Where are your target clients located?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQClients("global"), className: `p-3 rounded-xl border text-left font-semibold ${qClients === "global" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Global / Overseas / B2B Clients" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQClients("local"), className: `p-3 rounded-xl border text-left font-semibold ${qClients === "local" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Local UAE Onshore Consumers / Retail" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "2. Do you require a physical commercial office or shopfront in Dubai?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQOffice(false), className: `p-3 rounded-xl border text-left font-semibold ${!qOffice ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "No — Flexi Desk / Virtual Office is fine" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQOffice(true), className: `p-3 rounded-xl border text-left font-semibold ${qOffice ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Yes — Physical retail shop / warehouse needed" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "3. Do you plan to bid on UAE Government tenders or municipal contracts?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQGovt(true), className: `p-3 rounded-xl border text-left font-semibold ${qGovt ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Yes — Government contracts planned" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQGovt(false), className: `p-3 rounded-xl border text-left font-semibold ${!qGovt ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "No — Private commercial clients only" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Setup Company with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  UAEFreezoneVsMainlandQuizPage as component
};
