import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function PakistanSecpCostCalculatorPage() {
  const [companyType, setCompanyType] = useState("pvt-ltd");
  const [authorizedCapitalPKR, setAuthorizedCapitalPKR] = useState(1e5);
  const [numberOfDirectors, setNumberOfDirectors] = useState(2);
  const [includeNiftDigitalSignatures, setIncludeNiftDigitalSignatures] = useState(true);
  const [includeNTNRegistration, setIncludeNTNRegistration] = useState(true);
  const baseNameFee = 500;
  const baseIncorporationFee = companyType === "sole-prop" ? 0 : 2500;
  let capitalFee = 0;
  if (companyType !== "sole-prop" && authorizedCapitalPKR > 1e5) {
    capitalFee = Math.ceil((authorizedCapitalPKR - 1e5) / 1e5) * 500;
  }
  const secpGovtFeeTotal = baseNameFee + baseIncorporationFee + capitalFee;
  const niftDigitalSigFee = includeNiftDigitalSignatures && companyType !== "sole-prop" ? numberOfDirectors * 1800 : 0;
  const advaqServiceFee = companyType === "sole-prop" ? 15e3 : companyType === "smc" ? 35e3 : 45e3;
  const ntnRegistrationFee = includeNTNRegistration ? 5e3 : 0;
  const totalSetupCostPKR = secpGovtFeeTotal + niftDigitalSigFee + advaqServiceFee + ntnRegistrationFee;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "SECP Company Setup Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "SECP Private Limited & SMC Setup Cost Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact SECP government fees, NIFT digital signatures, authorized capital fees, and NTN registration for Private Limited, SMC, and Sole Proprietorship." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Company Structure:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              setCompanyType("pvt-ltd");
              setNumberOfDirectors(2);
            }, className: `p-3 rounded-xl border text-center transition-all ${companyType === "pvt-ltd" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Private Limited" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "2+ Directors" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              setCompanyType("smc");
              setNumberOfDirectors(1);
            }, className: `p-3 rounded-xl border text-center transition-all ${companyType === "smc" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "SMC (Single Member)" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "1 Director" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              setCompanyType("sole-prop");
              setNumberOfDirectors(1);
            }, className: `p-3 rounded-xl border text-center transition-all ${companyType === "sole-prop" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Sole Proprietor" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Individual NTN" })
            ] })
          ] })
        ] }),
        companyType !== "sole-prop" && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Authorized Share Capital (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "Rs ",
              (authorizedCapitalPKR / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "100000", max: "10000000", step: "100000", value: authorizedCapitalPKR, onChange: (e) => setAuthorizedCapitalPKR(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          companyType !== "sole-prop" && /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeNiftDigitalSignatures, onChange: (e) => setIncludeNiftDigitalSignatures(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("strong", { className: "text-navy-950 block", children: [
                "NIFT Digital Signatures (",
                numberOfDirectors,
                " Directors)?"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Mandatory biometric digital signatures for SECP eServices." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeNTNRegistration, onChange: (e) => setIncludeNTNRegistration(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "FBR Company NTN Registration included?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Required for opening corporate bank account in Pakistan." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "SECP Setup Cost Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            companyType !== "sole-prop" && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
                /* @__PURE__ */ jsx("span", { children: "SECP Name Availability & Filing:" }),
                /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                  "Rs ",
                  secpGovtFeeTotal.toLocaleString()
                ] })
              ] }),
              includeNiftDigitalSignatures && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "NIFT Digital Signatures (",
                  numberOfDirectors,
                  "x):"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                  "Rs ",
                  niftDigitalSigFee.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal & Incorporation Fee:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "Rs ",
                advaqServiceFee.toLocaleString()
              ] })
            ] }),
            includeNTNRegistration && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FBR Company NTN Registration:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "Rs ",
                ntnRegistrationFee.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Incorporation Cost" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "Rs ",
              totalSetupCostPKR.toLocaleString(),
              " PKR"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Incorporate SECP Company with ADVAQ" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20SECP%20Setup%20Cost%20Calculator%20(${companyType},%20Rs%20${totalSetupCostPKR.toLocaleString()}).%20Please%20guide%20me.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp Corporate Lawyer" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PakistanSecpCostCalculatorPage as component
};
