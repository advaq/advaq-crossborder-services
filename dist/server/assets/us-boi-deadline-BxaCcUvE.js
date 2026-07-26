import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function USBOIDeadlineCalculatorPage() {
  const [formationYear, setFormationYear] = useState("2025+");
  const [daysOverdue, setDaysOverdue] = useState(15);
  const [isFiled, setIsFiled] = useState(false);
  let deadlineText = "Within 30 Calendar Days of Formation";
  if (formationYear === "before2024") {
    deadlineText = "December 31, 2024 (Expired)";
  } else if (formationYear === "2024") {
    deadlineText = "Within 90 Calendar Days of Formation";
  }
  const dailyPenaltyRate = 590;
  const estimatedFine = isFiled ? 0 : Math.min(1e4, daysOverdue * dailyPenaltyRate);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "FinCEN BOI Deadline & Penalty" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FinCEN BOI Report Deadline & Penalty Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Determine your mandatory FinCEN Corporate Transparency Act filing deadline and estimate statutory $590/day late penalties." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. When was your US LLC formed?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFormationYear("before2024"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${formationYear === "before2024" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Before Jan 1, 2024" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFormationYear("2024"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${formationYear === "2024" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "In 2024" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFormationYear("2025+"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${formationYear === "2025+" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "2025 / 2026 (New LLC)" })
          ] })
        ] }),
        !isFiled && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Days Overdue Beyond Legal Deadline:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              daysOverdue,
              " Days Overdue"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "1", max: "60", step: "1", value: daysOverdue, onChange: (e) => setDaysOverdue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Already Filed FinCEN BOI Report?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Verify your compliance status." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isFiled, onChange: (e) => setIsFiled(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "BOI Compliance Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Mandatory Deadline:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-semibold", children: deadlineText })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Daily FinCEN Non-Filing Fine:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-amber-400 font-semibold", children: "$590 / day" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Maximum Statutory Fine:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-red-400 font-semibold", children: "$10,000" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: isFiled ? "BOI Report Status" : "Estimated Fine Exposure" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-serif font-bold text-white", children: isFiled ? "✅ Compliant (Filed)" : `$${estimatedFine.toLocaleString()}` })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/us-services/boi-report", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File BOI Report for $49 with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  USBOIDeadlineCalculatorPage as component
};
