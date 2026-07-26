import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKBankApprovalCalculatorPage() {
  const [directorResidency, setDirectorResidency] = useState("non-uk");
  const [hasValidPassport, setHasValidPassport] = useState(true);
  const [hasProofOfAddress, setHasProofOfAddress] = useState(true);
  const [hasLondonAddress, setHasLondonAddress] = useState(true);
  const [businessActivity, setBusinessActivity] = useState("tech");
  let score = 30;
  if (hasValidPassport) score += 25;
  if (hasProofOfAddress) score += 25;
  if (hasLondonAddress) score += 10;
  if (businessActivity === "tech" || businessActivity === "consulting") score += 10;
  else if (businessActivity === "crypto" || businessActivity === "gambling") score -= 20;
  score = Math.min(99, Math.max(10, score));
  let bankRecommendation = "Wise Business & Revolut Business";
  if (score > 80) bankRecommendation = "Wise Business, Revolut Business & Tide Bank";
  else if (score > 60) bankRecommendation = "Wise Business & WorldFirst";
  else bankRecommendation = "Specialized Non-Resident Fintech Banking Assistance Required";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Bank Account Approval Checker" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Business Bank Account Eligibility Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check your approval probability for Wise Business, Revolut, Tide, and WorldFirst as an overseas director of a UK LTD." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Director Residency:" }),
          /* @__PURE__ */ jsxs("select", { value: directorResidency, onChange: (e) => setDirectorResidency(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "non-uk", children: "Non-UK Resident (Overseas Founder)" }),
            /* @__PURE__ */ jsx("option", { value: "uk-resident", children: "UK Resident" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "2. Primary Business Activity:" }),
          /* @__PURE__ */ jsxs("select", { value: businessActivity, onChange: (e) => setBusinessActivity(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "tech", children: "Software Development, SaaS & IT Services" }),
            /* @__PURE__ */ jsx("option", { value: "consulting", children: "Digital Marketing, E-commerce & Consulting" }),
            /* @__PURE__ */ jsx("option", { value: "trading", children: "International Physical Goods Import/Export" }),
            /* @__PURE__ */ jsx("option", { value: "crypto", children: "Crypto, Gaming or Financial Services" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasValidPassport, onChange: (e) => setHasValidPassport(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Valid International Passport Available?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Required for biometric identity verification." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasProofOfAddress, onChange: (e) => setHasProofOfAddress(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Utility Bill / Bank Statement (Proof of Address)?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Dated within the last 3 months." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasLondonAddress, onChange: (e) => setHasLondonAddress(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Official UK Registered Office Address Installed?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Required for UK bank compliance check." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "UK Bank Approval Odds" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Estimated Approval Probability" }),
            /* @__PURE__ */ jsxs("div", { className: "text-5xl font-serif font-bold text-white my-2", children: [
              score,
              "%"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-navy-200", children: [
              "Recommended Banks: ",
              /* @__PURE__ */ jsx("strong", { className: "text-gold-400 block mt-1 font-sans", children: bankRecommendation })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Setup UK LTD & Bank Account" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20checked%20my%20UK%20Bank%20Approval%20Odds%20(${score}%25).%20Please%20help%20me%20open%20Wise%20Business.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp Banking Specialist" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  UKBankApprovalCalculatorPage as component
};
