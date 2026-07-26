import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UAECorporateTaxDeadlinePage() {
  const [licenseMonth, setLicenseMonth] = useState("january");
  const [isRegistered, setIsRegistered] = useState(false);
  const deadlines = {
    january: "May 31, 2024",
    february: "May 31, 2024",
    march: "June 30, 2024",
    april: "June 30, 2024",
    may: "July 31, 2024",
    june: "August 31, 2024",
    july: "September 30, 2024",
    august: "October 31, 2024",
    september: "October 31, 2024",
    october: "November 30, 2024",
    november: "November 30, 2024",
    december: "December 31, 2024"
  };
  const deadline = deadlines[licenseMonth] || "May 31, 2024";
  const lateFineAED = isRegistered ? 0 : 1e4;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Corporate Tax Deadline Checker" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Corporate Tax Registration Deadline Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check your mandatory FTA Corporate Tax registration deadline under Decision No. 3 of 2024 and avoid statutory AED 10,000 late fines." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select the Month Your UAE Trade License Was Originally Issued:" }),
          /* @__PURE__ */ jsxs("select", { value: licenseMonth, onChange: (e) => setLicenseMonth(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "january", children: "January" }),
            /* @__PURE__ */ jsx("option", { value: "february", children: "February" }),
            /* @__PURE__ */ jsx("option", { value: "march", children: "March" }),
            /* @__PURE__ */ jsx("option", { value: "april", children: "April" }),
            /* @__PURE__ */ jsx("option", { value: "may", children: "May" }),
            /* @__PURE__ */ jsx("option", { value: "june", children: "June" }),
            /* @__PURE__ */ jsx("option", { value: "july", children: "July" }),
            /* @__PURE__ */ jsx("option", { value: "august", children: "August" }),
            /* @__PURE__ */ jsx("option", { value: "september", children: "September" }),
            /* @__PURE__ */ jsx("option", { value: "october", children: "October" }),
            /* @__PURE__ */ jsx("option", { value: "november", children: "November" }),
            /* @__PURE__ */ jsx("option", { value: "december", children: "December" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Has Your Company Received a Corporate Tax TRN Number?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Check if already registered with FTA EmaraTax portal." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isRegistered, onChange: (e) => setIsRegistered(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "FTA Compliance Status" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Mandatory Registration Deadline:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-bold", children: deadline })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Statutory Late Fine:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-red-400 font-bold", children: "AED 10,000" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: isRegistered ? "FTA Registration Status" : "Late Fine Risk Exposure" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-serif font-bold text-white", children: isRegistered ? "✅ Registered (TRN Issued)" : `AED ${lateFineAED.toLocaleString()}` })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Register UAE Corporate Tax for AED 1,500" }) })
      ] })
    ] }) })
  ] });
}
export {
  UAECorporateTaxDeadlinePage as component
};
