import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function USEINEligibilityToolPage() {
  const [hasSSN, setHasSSN] = useState(false);
  const [isLlcApproved, setIsLlcApproved] = useState(true);
  const [hasUsAddress, setHasUsAddress] = useState(true);
  const [selectedMethod, setSelectedMethod] = useState("advaq");
  const methodTimelines = {
    advaq: {
      days: "5–10 Business Days",
      cost: "$75",
      rate: "99.8% Guaranteed",
      note: "ADVAQ direct IRS agent filing with pre-validated Responsible Party representation."
    },
    fax: {
      days: "4–6 Weeks",
      cost: "Free (Self-Filing)",
      rate: "70% Success Rate",
      note: "Manual Form SS-4 fax to IRS non-resident line (+1 855-641-6935). Rejections common if address formatted wrong."
    },
    phone: {
      days: "1 Day (US Residents Only)",
      cost: "Free",
      rate: "N/A for Non-SSN",
      note: "IRS phone line requires valid US SSN/ITIN. International callers without SSN are routed to fax."
    }
  };
  const currentMethod = methodTimelines[selectedMethod] || methodTimelines.advaq;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US EIN Timeline & Eligibility" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "IRS EIN Tax ID Timeline & Eligibility Tool (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check eligibility and estimated processing time for obtaining an IRS EIN Tax ID as a Non-US Resident founder without SSN or ITIN." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-3", children: "Select EIN Application Filing Method:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setSelectedMethod("advaq"), className: `w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${selectedMethod === "advaq" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "block text-sm font-semibold", children: "ADVAQ Managed IRS Fast-Track (Recommended)" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-[11px]", children: "No SSN required. IRS Form 147C & CP575 verification letter." })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-bold shrink-0 ml-2", children: "5–10 Days" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setSelectedMethod("fax"), className: `w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${selectedMethod === "fax" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "block text-sm font-semibold", children: "Self-Filing via IRS Form SS-4 Fax" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-[11px]", children: "Manual submission to IRS international fax line." })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-amber-400 font-bold shrink-0 ml-2", children: "4–6 Weeks" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isLlcApproved, onChange: (e) => setIsLlcApproved(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-semibold", children: "Approved State Articles of Organization (Wyoming/Delaware LLC)" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasUsAddress, onChange: (e) => setHasUsAddress(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-semibold", children: "US Registered Agent & Physical Business Address Available" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "EIN Timeline Estimate" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Estimated Processing Time:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-emerald-400 font-bold text-sm", children: currentMethod.days })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Approval Success Probability:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-semibold", children: currentMethod.rate })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Official IRS Output Documents:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "Form 147C & CP575" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-navy-900 border border-gold-500/40 p-4 rounded-xl mb-4 text-xs text-navy-200 leading-relaxed", children: currentMethod.note })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/us-services/ein-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Get IRS EIN Tax ID with ADVAQ" }) })
      ] })
    ] }) })
  ] });
}
export {
  USEINEligibilityToolPage as component
};
