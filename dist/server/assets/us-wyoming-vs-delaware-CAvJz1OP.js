import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Award, ArrowRight } from "lucide-react";
function USStateComparisonToolPage() {
  const [priority, setPriority] = useState("privacy");
  let recommendedState = "Wyoming";
  let reason = "Wyoming offers 10/10 owner privacy, low $100 filing fee, and low $60 annual report costs.";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  if (priority === "vc") {
    recommendedState = "Delaware";
    reason = "Delaware is preferred by US venture capitalists, Y-Combinator, and angel investors due to its Chancery Court.";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
  } else if (priority === "cost") {
    recommendedState = "New Mexico";
    reason = "New Mexico has $50 state filing fee and $0 ongoing annual state report fees, making it the cheapest state long-term.";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "State Comparison Tool" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Wyoming vs Delaware vs New Mexico LLC Comparison (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Interactive comparison tool to select the optimal US state based on privacy, filing costs, VC fundraising, and banking." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3 text-center", children: "Select Your Primary Business Goal / Priority:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-xs", children: [
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setPriority("privacy"), className: `p-4 rounded-xl border text-center font-semibold transition-all ${priority === "privacy" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
            /* @__PURE__ */ jsx("span", { className: "block text-base mb-1", children: "🤠 Privacy & E-commerce" }),
            /* @__PURE__ */ jsx("span", { children: "Wyoming (Highest Privacy & Low Fee)" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setPriority("vc"), className: `p-4 rounded-xl border text-center font-semibold transition-all ${priority === "vc" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
            /* @__PURE__ */ jsx("span", { className: "block text-base mb-1", children: "🏦 VC Investment & Tech" }),
            /* @__PURE__ */ jsx("span", { children: "Delaware (VC/Angel Preferred)" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setPriority("cost"), className: `p-4 rounded-xl border text-center font-semibold transition-all ${priority === "cost" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
            /* @__PURE__ */ jsx("span", { className: "block text-base mb-1", children: "🌵 Lowest Ongoing Annual Cost" }),
            /* @__PURE__ */ jsx("span", { children: "New Mexico ($0 Annual Report)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border ${badgeColor} max-w-3xl mx-auto text-center space-y-2`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-gold-600 font-bold uppercase tracking-widest text-xs", children: [
          /* @__PURE__ */ jsx(Award, { size: 18 }),
          /* @__PURE__ */ jsx("span", { children: "Recommended Winner" })
        ] }),
        /* @__PURE__ */ jsxs("h3", { className: "font-serif text-3xl font-bold text-navy-950", children: [
          recommendedState,
          " LLC"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl mx-auto", children: reason })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto pt-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse border border-border rounded-xl", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-gold-400 font-serif text-sm", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Comparison Metric" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🤠 Wyoming" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🏦 Delaware" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🌵 New Mexico" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border text-navy-950", children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold", children: "State Filing Fee" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono font-bold text-emerald-600", children: "$100" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono", children: "$110" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono font-bold text-emerald-600", children: "$50" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold", children: "Annual Report Fee" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono", children: "$60 / year" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-amber-600 font-bold", children: "$300 / year (Franchise Tax)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-emerald-600 font-bold", children: "$0 / year (Zero)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold", children: "Owner Anonymity" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-600 font-bold", children: "10/10 (Anonymous)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "9/10 (High)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-600 font-bold", children: "10/10 (Anonymous)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold", children: "Mercury / Wise Bank Approval" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-600 font-bold", children: "99% High" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-600 font-bold", children: "99% High" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold", children: "95% Medium" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Form Your ",
        recommendedState,
        " LLC with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  USStateComparisonToolPage as component
};
