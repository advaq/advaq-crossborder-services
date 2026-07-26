import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles } from "lucide-react";
const statesData = [{
  id: "wyoming",
  name: "Wyoming",
  flag: "🤠",
  stateFilingFee: 100,
  annualReportFee: 60,
  privacyRating: "10/10 (Highest Anonymous)",
  bestFor: "E-commerce, Freelancers, Software & Non-US Residents"
}, {
  id: "delaware",
  name: "Delaware",
  flag: "🏦",
  stateFilingFee: 110,
  annualReportFee: 300,
  privacyRating: "9/10 (Chancery Court)",
  bestFor: "VC-Backed Startups, Holding Companies & Investors"
}, {
  id: "newmexico",
  name: "New Mexico",
  flag: "🌵",
  stateFilingFee: 50,
  annualReportFee: 0,
  privacyRating: "10/10 (Zero Annual Fee)",
  bestFor: "Budget-conscious Non-US Founders & Consultants"
}, {
  id: "florida",
  name: "Florida",
  flag: "🌴",
  stateFilingFee: 125,
  annualReportFee: 138.75,
  privacyRating: "6/10 (Public Register)",
  bestFor: "Physical US Presence, Real Estate & Local Trade"
}, {
  id: "texas",
  name: "Texas",
  flag: "⭐",
  stateFilingFee: 300,
  annualReportFee: 0,
  privacyRating: "7/10 (Strong Business Economy)",
  bestFor: "Large Scale Operations & US In-State Trading"
}];
function USLLCCostCalculatorPage() {
  const [selectedStateId, setSelectedStateId] = useState("wyoming");
  const [includeRegisteredAgent, setIncludeRegisteredAgent] = useState(true);
  const [includePhysicalAddress, setIncludePhysicalAddress] = useState(true);
  const [includeEIN, setIncludeEIN] = useState(true);
  const [includeBOI, setIncludeBOI] = useState(true);
  const [includeOperatingAgreement, setIncludeOperatingAgreement] = useState(true);
  const [expeditedProcessing, setExpeditedProcessing] = useState(false);
  const selectedState = statesData.find((s) => s.id === selectedStateId) || statesData[0];
  const baseServiceFee = 149;
  const registeredAgentFee = includeRegisteredAgent ? 99 : 0;
  const physicalAddressFee = includePhysicalAddress ? 120 : 0;
  const einServiceFee = includeEIN ? 75 : 0;
  const boiServiceFee = includeBOI ? 49 : 0;
  const operatingAgreementFee = includeOperatingAgreement ? 50 : 0;
  const expeditedFee = expeditedProcessing ? 99 : 0;
  const totalStateFee = selectedState.stateFilingFee;
  const totalServiceAddons = baseServiceFee + registeredAgentFee + physicalAddressFee + einServiceFee + boiServiceFee + operatingAgreementFee + expeditedFee;
  const totalSetupCost = totalStateFee + totalServiceAddons;
  const annualMaintenanceCost = selectedState.annualReportFee + (includeRegisteredAgent ? 99 : 0);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators", className: "hover:underline", children: "Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US LLC Setup Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US LLC Total State & Setup Cost Calculator (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact state filing fees, registered agent costs, EIN tax ID, and annual state report maintenance for non-resident US LLC formation." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3", children: "1. Select Target US State:" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: statesData.map((s) => /* @__PURE__ */ jsxs("button", { onClick: () => setSelectedStateId(s.id), className: `p-3 rounded-xl border text-left transition-all ${selectedStateId === s.id ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border hover:border-gold-500/50"}`, children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xl", children: s.flag }),
              /* @__PURE__ */ jsx("strong", { className: "text-sm font-serif", children: s.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-[11px] opacity-80", children: [
              "State Fee: $",
              s.stateFilingFee
            ] })
          ] }, s.id)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-navy-900/5 border border-gold-500/20 rounded-xl text-xs space-y-1 text-navy-950", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Privacy Rating:" }),
              " ",
              selectedState.privacyRating
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Best For:" }),
              " ",
              selectedState.bestFor
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Annual State Fee:" }),
              " $",
              selectedState.annualReportFee,
              "/year"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3", children: "2. Select Required Services & Addons:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeRegisteredAgent, onChange: (e) => setIncludeRegisteredAgent(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "US Registered Agent Service (1 Year)" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Mandatory physical state address for legal service of process." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$99" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includePhysicalAddress, onChange: (e) => setIncludePhysicalAddress(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "US Business Address & Mail Forwarding" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Required for Mercury Bank, Stripe & IRS correspondence." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$120" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeEIN, onChange: (e) => setIncludeEIN(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "IRS EIN (Employer ID Number) Registration" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Official Tax ID for Non-US Resident without SSN." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$75" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeBOI, onChange: (e) => setIncludeBOI(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "FinCEN BOI Report Filing" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Mandatory federal beneficial ownership report for FinCEN." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$49" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeOperatingAgreement, onChange: (e) => setIncludeOperatingAgreement(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Custom Operating Agreement Drafting" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Bank-compliant Single/Multi-Member Operating Agreement." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$50" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: expeditedProcessing, onChange: (e) => setExpeditedProcessing(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Expedited State Filing (24-48 Hours)" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Fast-track state approval & immediate document dispatch." })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$99" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Real-Time Cost Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "State Filing Fee (",
                selectedState.name,
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                totalStateFee
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Formation Package Fee:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                baseServiceFee
              ] })
            ] }),
            includeRegisteredAgent && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Registered Agent (1 Year):" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$99" })
            ] }),
            includePhysicalAddress && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "US Physical Address:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$120" })
            ] }),
            includeEIN && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "IRS EIN Tax ID Registration:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$75" })
            ] }),
            includeBOI && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FinCEN BOI Report:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$49" })
            ] }),
            includeOperatingAgreement && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Operating Agreement:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$50" })
            ] }),
            expeditedProcessing && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Expedited 24-Hour Filing:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$99" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Year-1 Formation Cost" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "$",
              totalSetupCost,
              /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-300 font-sans font-normal ml-2", children: "USD" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Year-2 Onwards Recurring Cost:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-gold-400 font-mono", children: [
                "$",
                annualMaintenanceCost,
                "/yr"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: [
            "Proceed with ",
            selectedState.name,
            " LLC Formation"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: `https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20US%20LLC%20Cost%20Calculator%20for%20${selectedState.name}%20LLC%20($${totalSetupCost}).%20Please%20guide%20me.`, target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block", children: [
            "WhatsApp Advisor for ",
            selectedState.name
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-xl", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl font-semibold text-white mb-6 text-center", children: "🇺🇸 Side-by-Side State Comparison: Wyoming vs Delaware vs New Mexico" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-white/10 text-gold-400 font-serif text-sm", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Feature / Metric" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🤠 Wyoming" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🏦 Delaware" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🌵 New Mexico" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-white/5 text-navy-200", children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "State Filing Fee" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-emerald-400", children: "$100" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono", children: "$110" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-emerald-400", children: "$50" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Annual State Renewal Fee" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-emerald-400", children: "$60/year" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-amber-400", children: "$300/year (Tax)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-emerald-400", children: "$0 (Zero Annual Fee)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Owner Anonymity & Privacy" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-400 font-semibold", children: "10/10 (Highest Anonymous)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "9/10 (High Privacy)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-400 font-semibold", children: "10/10 (Anonymous)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "VC Investor Preference" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Good for Bootstrap/SaaS" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-gold-400 font-semibold", children: "Gold Standard for VCs / YC" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Budget Consultants" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold text-white", children: "Best Overall For" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "E-commerce, Stripe, Amazon, Freelancers" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Startups seeking US Angel Capital" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Lowest ongoing annual maintenance" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 pb-20 text-gray-700 leading-relaxed text-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl text-navy-950 font-semibold mb-4", children: "Why Non-US Residents Choose Wyoming & Delaware for US LLC Formation" }),
      /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
        "For foreign entrepreneurs, e-commerce sellers, and software consultants, ",
        /* @__PURE__ */ jsx("strong", { children: "Wyoming" }),
        " is the premier choice due to its $100 low state filing fee, $60 annual report cost, and total owner anonymity. ",
        /* @__PURE__ */ jsx("strong", { children: "Delaware" }),
        " remains the gold standard for venture-capital backed tech startups and holding structures."
      ] })
    ] })
  ] });
}
export {
  USLLCCostCalculatorPage as component
};
