import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
function PakistanTaxCalendarPage() {
  const [filterType, setFilterType] = useState("all");
  const events = [{
    date: "September 30",
    title: "FBR Annual Income Tax Return Filing",
    cat: "fbr",
    desc: "Mandatory annual tax return deadline for Individuals & Salaried Persons.",
    badge: "High Priority"
  }, {
    date: "October 31",
    title: "SECP Form A & Annual Return Filing",
    cat: "secp",
    desc: "Annual filing of Form A / Form 29 post Annual General Meeting (AGM) for Pvt Ltd companies.",
    badge: "SECP Annual"
  }, {
    date: "December 31",
    title: "Corporate Tax Return (Companies with June 30 Year End)",
    cat: "fbr",
    desc: "Annual corporate income tax return filing deadline for registered companies.",
    badge: "Corporate Tax"
  }, {
    date: "15th of Every Month",
    title: "Monthly Provincial & Federal Sales Tax Deposit",
    cat: "salestax",
    desc: "Deposit monthly sales tax collected (PRA, SRB, KPRA, FBR) by 15th, file return by 18th.",
    badge: "Monthly Recurring"
  }, {
    date: "Quarterly (Oct 20, Jan 20, Apr 20, Jul 20)",
    title: "Section 165 Withholding Tax Statements",
    cat: "fbr",
    desc: "Quarterly WHT statement filing for withholding agents across Pakistan.",
    badge: "Quarterly WHT"
  }];
  const filteredEvents = filterType === "all" ? events : events.filter((e) => e.cat === filterType);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Tax Compliance Calendar" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan FBR & SECP Tax Calendar (2026-2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Interactive compliance calendar tracking FBR annual return dates, monthly sales tax filings, quarterly WHT, and SECP annual forms." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-5xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 text-xs", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setFilterType("all"), className: `px-4 py-2 rounded-xl font-semibold border ${filterType === "all" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"}`, children: "All Compliance Events" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setFilterType("fbr"), className: `px-4 py-2 rounded-xl font-semibold border ${filterType === "fbr" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"}`, children: "FBR Income Tax" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setFilterType("secp"), className: `px-4 py-2 rounded-xl font-semibold border ${filterType === "secp" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"}`, children: "SECP Corporate" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setFilterType("salestax"), className: `px-4 py-2 rounded-xl font-semibold border ${filterType === "salestax" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"}`, children: "Sales Tax" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredEvents.map((ev, idx) => /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-off-white/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-2.5 py-0.5 rounded", children: ev.badge }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-base font-serif", children: ev.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: ev.desc })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "shrink-0 font-mono text-gold-600 font-bold text-sm bg-white border border-border px-4 py-2 rounded-xl text-center", children: [
          "📅 ",
          ev.date
        ] })
      ] }, idx)) }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Retain ADVAQ for Annual Tax Compliance ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) })
  ] });
}
export {
  PakistanTaxCalendarPage as component
};
