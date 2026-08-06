import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
const statesData = [{
  id: "wyoming",
  name: "Wyoming",
  flag: "🤠",
  stateFilingFee: 100,
  annualReportFee: 60,
  privacyRating: "10/10 (Anonymous LLC)",
  bestFor: "Non-Resident Founders, E-commerce, SaaS & Stripe"
}, {
  id: "delaware",
  name: "Delaware",
  flag: "🏦",
  stateFilingFee: 110,
  annualReportFee: 300,
  privacyRating: "9/10 (High Privacy)",
  bestFor: "VC Funding, Angel Investors & Tech Startups"
}, {
  id: "newmexico",
  name: "New Mexico",
  flag: "🌵",
  stateFilingFee: 50,
  annualReportFee: 0,
  privacyRating: "10/10 (Anonymous LLC)",
  bestFor: "Lowest Annual Maintenance ($0 Annual Report)"
}, {
  id: "florida",
  name: "Florida",
  flag: "🌴",
  stateFilingFee: 125,
  annualReportFee: 138,
  privacyRating: "5/10 (Public Owner Directory)",
  bestFor: "Physical US Operations & Local Trading"
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
  const [openFaq, setOpenFaq] = useState(0);
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
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://advaq.com"
    }, {
      "@type": "ListItem",
      position: 2,
      name: "Calculators",
      item: "https://advaq.com/calculators"
    }, {
      "@type": "ListItem",
      position: 3,
      name: "USA Calculators",
      item: "https://advaq.com/calculators/usa"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "US LLC Setup Cost Calculator",
      item: "https://advaq.com/calculators/us-cost-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US LLC Total State & Setup Cost Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate US LLC formation state filing fees, registered agent fees, IRS EIN registration, FinCEN BOIR reporting, and annual state maintenance.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Which US state is cheapest for a non-resident LLC founder?",
    a: "New Mexico offers the lowest upfront state fee ($50) and $0 annual report fees forever. However, Wyoming ($100 state fee, $60 annual report) is the most popular due to superior asset protection laws, privacy, and full compatibility with Stripe and Mercury Bank."
  }, {
    q: "Is a Registered Agent mandatory for a foreign-owned US LLC?",
    a: "Yes. Every US state legally requires an LLC to maintain a Registered Agent with a physical street address in that state to receive official legal notices and state compliance documents."
  }, {
    q: "Do I need a US Social Security Number (SSN) to get an EIN?",
    a: "No! Non-US residents without an SSN or ITIN can obtain an IRS EIN for their US LLC by submitting IRS Form SS-4 via fax or through an authorized IRS Third-Party Designee."
  }, {
    q: "What is the mandatory FinCEN BOI Reporting requirement for US LLCs?",
    a: "Under the Corporate Transparency Act, all US LLCs must submit a Beneficial Ownership Information (BOI) report to FinCEN detailing passport details of all 25%+ owners. Filing is mandatory to avoid severe federal daily fines."
  }];
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-navy-950", children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdBreadcrumb)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdWebApp)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdFaq)
    } }),
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "US LLC Setup Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US LLC Total State & Setup Cost Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact state filing fees, registered agent costs, EIN tax ID, and annual state report maintenance for non-resident US LLC formation." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
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
            /* @__PURE__ */ jsx("span", { children: "US LLC Package Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2.5 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                selectedState.name,
                " State Filing Fee:"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "$",
                selectedState.stateFilingFee
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Formation Service:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "$",
                baseServiceFee
              ] })
            ] }),
            includeRegisteredAgent && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Registered Agent (1 Yr):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "$",
                registeredAgentFee
              ] })
            ] }),
            includePhysicalAddress && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "US Address & Mail Forwarding:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "$",
                physicalAddressFee
              ] })
            ] }),
            includeEIN && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "IRS EIN Registration:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "$",
                einServiceFee
              ] })
            ] }),
            includeBOI && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FinCEN BOI Filing:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "$",
                boiServiceFee
              ] })
            ] }),
            includeOperatingAgreement && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Operating Agreement:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "$",
                operatingAgreementFee
              ] })
            ] }),
            expeditedProcessing && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Expedited Filing:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "$",
                expeditedFee
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Year-1 Setup Cost" }),
              /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
                "$",
                totalSetupCost
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-white/10 flex justify-between items-center text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "text-navy-200", children: "Annual State Maintenance (Yr 2+):" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400 font-mono", children: [
                "$",
                annualMaintenanceCost,
                "/yr"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: [
          "Incorporate ",
          selectedState.name,
          " LLC"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsxs("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: [
              "Live Step-by-Step ",
              selectedState.name,
              " LLC Cost Walkthrough"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of your exact state filing fees, add-on compliance, and annual recurring costs." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: State Incorporation Fee" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                "$",
                selectedState.stateFilingFee,
                " State Base"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Selected US State:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  selectedState.name,
                  " ",
                  selectedState.flag
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory State Filing Fee:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  selectedState.stateFilingFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "ADVAQ Formation Service:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  baseServiceFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Formation Base Total:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  selectedState.stateFilingFee + baseServiceFee
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: US Address & Registered Agent" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "$",
                registeredAgentFee + physicalAddressFee,
                " Address Base"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Registered Agent Service (1 Yr):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  registeredAgentFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "US Business Address & Mail:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  physicalAddressFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Address Subtotal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  registeredAgentFee + physicalAddressFee
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Federal Tax & BOI Compliance" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Federal Compliance" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "IRS EIN Registration:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  einServiceFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FinCEN BOI Report Filing:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  boiServiceFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Operating Agreement:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  operatingAgreementFee
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Year 1 & Recurring Summary" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Cost Verified" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Year 1 Setup Cost:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  totalSetupCost
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual State Maintenance (Yr 2+):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  annualMaintenanceCost,
                  "/yr"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "US State LLC Filing & Annual Maintenance Fee Comparison" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "US State" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Initial Filing Fee" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Annual Report Fee" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Privacy / Owner Anonymity" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: statesData.map((s) => /* @__PURE__ */ jsxs("tr", { className: s.id === selectedStateId ? "bg-gold-500/10 font-bold" : "", children: [
            /* @__PURE__ */ jsxs("td", { className: "p-3.5 font-bold text-navy-950 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: s.flag }),
              " ",
              /* @__PURE__ */ jsx("span", { children: s.name })
            ] }),
            /* @__PURE__ */ jsxs("td", { className: "p-3.5 font-mono font-bold", children: [
              "$",
              s.stateFilingFee
            ] }),
            /* @__PURE__ */ jsxs("td", { className: "p-3.5 font-mono font-bold text-emerald-600", children: [
              "$",
              s.annualReportFee,
              "/yr"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-700", children: s.privacyRating })
          ] }, s.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (US LLC Setup)" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-4xl mx-auto pt-4", children: faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : index), className: "w-full p-5 text-left font-serif text-sm sm:text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { children: faq.q }),
              /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })
            ] }),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50", children: faq.a })
          ] }, index);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-40" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 16 }),
            " ADVAQ US Corporate Incorporation Advisory"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: [
            "Ready to Form Your ",
            selectedState.name,
            " LLC Online?"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our US team files your Articles of Organization, secures your IRS EIN without an SSN, files FinCEN BOI reports, and sets up your US business bank account." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Incorporate ",
              selectedState.name,
              " LLC ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp US Formation Advisor" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USLLCCostCalculatorPage as component
};
