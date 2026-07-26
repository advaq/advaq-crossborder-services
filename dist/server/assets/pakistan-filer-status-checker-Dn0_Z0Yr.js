import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
function PakistanFilerStatusCheckerPage() {
  const [cnicInput, setCnicInput] = useState("");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Filer Status Checker" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FBR Filer / Non-Filer Status Checker & Guide (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Verify your Active Taxpayer List (ATL) status instantly using FBR official verification methods." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/30 space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-bold uppercase tracking-wider text-xs", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 18 }),
          /* @__PURE__ */ jsx("span", { children: "Instant SMS Verification (Fastest Method)" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-navy-200 text-sm leading-relaxed", children: [
          "Send an SMS to ",
          /* @__PURE__ */ jsx("strong", { children: "9966" }),
          " from your registered mobile phone with the text:"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-navy-900 border border-white/20 p-4 rounded-xl font-mono text-emerald-400 font-bold text-center text-lg", children: "ATL [space] 13-Digit-CNIC (e.g. ATL 3520212345671)" }),
        /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-navy-300", children: [
          "You will receive an instant reply from FBR confirming whether your CNIC is ",
          /* @__PURE__ */ jsx("strong", { children: "ACTIVE (Filer)" }),
          " or ",
          /* @__PURE__ */ jsx("strong", { children: "INACTIVE (Non-Filer)" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-xs bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-navy-950 text-base", children: "Method 2: FBR Online Portal Verification" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2.5 text-gray-700 list-decimal pl-4", children: [
          /* @__PURE__ */ jsx("li", { children: "Visit the official FBR Iris Active Taxpayer List page (e.fbr.gov.pk)." }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Select ",
            /* @__PURE__ */ jsx("strong", { children: "Active Taxpayer List (Income Tax)" }),
            " under the Search menu."
          ] }),
          /* @__PURE__ */ jsx("li", { children: "Enter your 13-digit CNIC number (without dashes)." }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Click ",
            /* @__PURE__ */ jsx("strong", { children: "Verify" }),
            " to view your current ATL Status & Registration date."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center space-y-3", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/atl-restoration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Restore Your Filer Status with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  PakistanFilerStatusCheckerPage as component
};
