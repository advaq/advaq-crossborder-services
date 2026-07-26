import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
function UKSetupCostCalculatorPage() {
  const [includeLondonAddress, setIncludeLondonAddress] = useState(true);
  const [includeServiceAddress, setIncludeServiceAddress] = useState(true);
  const [includeBankAssistance, setIncludeBankAssistance] = useState(true);
  const [includeConfirmationStatement, setIncludeConfirmationStatement] = useState(true);
  const [includeAnnualAccounts, setIncludeAnnualAccounts] = useState(true);
  const baseCompaniesHouseFee = 50;
  const advaqFormationPackage = 99;
  const londonAddressFee = includeLondonAddress ? 120 : 0;
  const serviceAddressFee = includeServiceAddress ? 60 : 0;
  const bankAssistanceFee = includeBankAssistance ? 99 : 0;
  const confirmationStatementFee = includeConfirmationStatement ? 75 : 0;
  const annualAccountsFee = includeAnnualAccounts ? 250 : 0;
  const totalYear1Cost = baseCompaniesHouseFee + advaqFormationPackage + londonAddressFee + serviceAddressFee + bankAssistanceFee + confirmationStatementFee + annualAccountsFee;
  const annualRecurringCost = londonAddressFee + serviceAddressFee + confirmationStatementFee + annualAccountsFee;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK LTD Setup & Compliance Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK LTD Non-Resident Setup & Compliance Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact Companies House fees, London registered address, Wise bank account assistance, and annual CT600 accounts filing." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "Select Required UK LTD Packages & Services:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeLondonAddress, onChange: (e) => setIncludeLondonAddress(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "London Registered Office Address (1 Year)" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Official UK legal address for Companies House & HMRC." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "£120/yr" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeServiceAddress, onChange: (e) => setIncludeServiceAddress(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Director Service Address Privacy" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Keeps your home address off the public Companies House register." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "£60/yr" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeBankAssistance, onChange: (e) => setIncludeBankAssistance(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Wise Business & Revolut Bank Setup Assistance" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Guaranteed support for opening UK business accounts from overseas." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "£99" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeConfirmationStatement, onChange: (e) => setIncludeConfirmationStatement(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Confirmation Statement (CS01) Filing" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Mandatory annual confirmation statement filed with Companies House." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "£75/yr" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeAnnualAccounts, onChange: (e) => setIncludeAnnualAccounts(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Annual Accounts & CT600 Corporation Tax Filing" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Complete dormant/active accounts prepared by UK qualified accountant." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "£250/yr" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "UK Package Cost Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2.5 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Companies House Govt Fee:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "£",
                baseCompaniesHouseFee
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Formation Package:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "£",
                advaqFormationPackage
              ] })
            ] }),
            includeLondonAddress && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "London Office Address:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "£120" })
            ] }),
            includeServiceAddress && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Director Privacy Address:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "£60" })
            ] }),
            includeBankAssistance && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Wise/Revolut Bank Setup:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "£99" })
            ] }),
            includeConfirmationStatement && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Confirmation Statement (CS01):" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "£75" })
            ] }),
            includeAnnualAccounts && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Annual Accounts & CT600:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "£250" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Year-1 Cost (£)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              totalYear1Cost,
              /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-300 font-sans font-normal ml-2", children: "GBP" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-xs text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Year-2 Onwards Annual Cost:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-gold-400 font-mono", children: [
                "£",
                annualRecurringCost,
                "/yr"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Incorporate UK LTD Now" }),
          /* @__PURE__ */ jsx("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20UK%20Setup%20Cost%20Calculator%20(Total:%20%C2%A3${totalYear1Cost}).%20Please%20guide%20me.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: "WhatsApp UK Formation Lawyer" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  UKSetupCostCalculatorPage as component
};
