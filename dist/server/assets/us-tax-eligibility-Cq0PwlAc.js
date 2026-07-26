import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
function USTaxEligibilityCalculatorPage() {
  const [isUSCitizen, setIsUSCitizen] = useState(false);
  const [hasUSEmployees, setHasUSEmployees] = useState(false);
  const [hasPhysicalUSOffice, setHasPhysicalUSOffice] = useState(false);
  const [hasUSWarehouseInventory, setHasUSWarehouseInventory] = useState(false);
  const [isSingleMemberLLC, setIsSingleMemberLLC] = useState(true);
  const isETBUS = hasUSEmployees || hasPhysicalUSOffice;
  const isTaxExemptEligible = !isUSCitizen && !isETBUS && isSingleMemberLLC;
  let etbusRiskLevel = "LOW RISK (0% Tax Safe Pass)";
  let etbusRiskBadge = "bg-emerald-100 text-emerald-800 border-emerald-300";
  let recommendedAction = "Proceed with annual Form 5472 & 1120 pro-forma filing only. 0% US income tax owed.";
  if (isUSCitizen) {
    etbusRiskLevel = "HIGH RISK (Worldwide US Taxable)";
    etbusRiskBadge = "bg-red-100 text-red-800 border-red-300";
    recommendedAction = "File Form 1040 & Schedule C with IRS. Consult ADVAQ US CPA.";
  } else if (hasUSEmployees || hasPhysicalUSOffice) {
    etbusRiskLevel = "HIGH RISK (US ECI Triggered)";
    etbusRiskBadge = "bg-red-100 text-red-800 border-red-300";
    recommendedAction = "File Form 1040-NR & Schedule C. Claim expense deductions & state tax credit.";
  } else if (hasUSWarehouseInventory) {
    etbusRiskLevel = "MEDIUM RISK (Sales Tax / Inventory Nexus)";
    etbusRiskBadge = "bg-amber-100 text-amber-800 border-amber-300";
    recommendedAction = "0% Income tax applies, but check State Sales Tax Nexus limits for Amazon FBA.";
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US 0% Tax Eligibility" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US Foreign Owner 0% Tax Eligibility Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Test IRS ETBUS (Engaged in Trade or Business) & ECI (Effectively Connected Income) rules to verify if your foreign-owned US LLC pays 0% US income tax." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-5 ${isTaxExemptEligible ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-amber-50 border-amber-300 text-amber-950"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          isTaxExemptEligible ? /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0 mt-1", size: 36 }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0 mt-1", size: 36 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isTaxExemptEligible ? "🎉 Eligible for 0% US Federal Income Tax!" : "⚠️ Subject to US Federal Tax / ETBUS Tax Filing" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed max-w-2xl", children: isTaxExemptEligible ? "Your LLC qualifies as a Foreign-Owned Disregarded Entity under IRS guidelines. You pay 0% US federal income tax and only file Form 5472 & Form 1120 information returns." : "Your LLC triggers US Effectively Connected Income (ECI) or ETBUS rules due to US physical presence, employees, or citizenship status. US tax returns must be filed." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-black/10 text-xs", children: [
              /* @__PURE__ */ jsx("strong", { className: "font-semibold block text-navy-950", children: "Recommended Next Step:" }),
              /* @__PURE__ */ jsx("span", { children: recommendedAction })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "shrink-0 text-center md:text-right", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase font-bold tracking-widest block text-gray-500 mb-1", children: "ETBUS Risk Level" }),
          /* @__PURE__ */ jsx("span", { className: `inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${etbusRiskBadge}`, children: etbusRiskLevel })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 bg-off-white/50 p-6 rounded-2xl border border-border text-xs", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "Answer the Following IRS Compliance Questions:" }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Are you a US Citizen or Green Card Holder?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "US citizens pay worldwide income tax regardless of LLC structure." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isUSCitizen, onChange: (e) => setIsUSCitizen(e.target.checked), className: "accent-gold-500 w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Is your LLC a Single-Member LLC?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Single-Member LLCs are treated as tax pass-through disregarded entities by the IRS." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isSingleMemberLLC, onChange: (e) => setIsSingleMemberLLC(e.target.checked), className: "accent-gold-500 w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Do you have a physical office, retail store, or warehouse in the US?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "A virtual address or registered agent DOES NOT count as physical presence." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasPhysicalUSOffice, onChange: (e) => setHasPhysicalUSOffice(e.target.checked), className: "accent-gold-500 w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Do you hire dependent employees working physically in the US?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Hiring independent contractors (W-8BEN) abroad DOES NOT trigger ETBUS." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasUSEmployees, onChange: (e) => setHasUSEmployees(e.target.checked), className: "accent-gold-500 w-5 h-5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/20 space-y-3", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg text-gold-500 font-semibold", children: "Mandatory IRS Compliance for 0% Tax Foreign US LLCs" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 leading-relaxed", children: [
          "Even though you pay ",
          /* @__PURE__ */ jsx("strong", { children: "0% US Income Tax" }),
          ", foreign-owned single-member LLCs must file annual ",
          /* @__PURE__ */ jsx("strong", { children: "Form 5472 and Form 1120" }),
          " with the IRS by April 15th every year. Failure to file carries a strict ",
          /* @__PURE__ */ jsx("strong", { children: "$25,000 IRS penalty" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need Assistance with IRS Form 5472 & Tax Structuring?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Guaranteed compliant tax filing for foreign US LLC owners." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/us-services/corporate-tax-return", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "File IRS Form 5472 with ADVAQ" })
      ] })
    ] }) })
  ] });
}
export {
  USTaxEligibilityCalculatorPage as component
};
