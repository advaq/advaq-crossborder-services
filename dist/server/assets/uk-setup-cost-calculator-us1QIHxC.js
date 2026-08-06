import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UKSetupCostCalculatorPage() {
  const [includeLondonAddress, setIncludeLondonAddress] = useState(true);
  const [includeServiceAddress, setIncludeServiceAddress] = useState(true);
  const [includeBankAssistance, setIncludeBankAssistance] = useState(true);
  const [includeConfirmationStatement, setIncludeConfirmationStatement] = useState(true);
  const [includeAnnualAccounts, setIncludeAnnualAccounts] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const baseCompaniesHouseFee = 50;
  const advaqFormationPackage = 99;
  const londonAddressFee = includeLondonAddress ? 120 : 0;
  const serviceAddressFee = includeServiceAddress ? 60 : 0;
  const bankAssistanceFee = includeBankAssistance ? 99 : 0;
  const confirmationStatementFee = includeConfirmationStatement ? 75 : 0;
  const annualAccountsFee = includeAnnualAccounts ? 250 : 0;
  const totalYear1Cost = baseCompaniesHouseFee + advaqFormationPackage + londonAddressFee + serviceAddressFee + bankAssistanceFee + confirmationStatementFee + annualAccountsFee;
  const annualRecurringCost = londonAddressFee + serviceAddressFee + confirmationStatementFee + annualAccountsFee;
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
      name: "UK Calculators",
      item: "https://advaq.com/calculators/uk"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "UK LTD Setup Cost Calculator",
      item: "https://advaq.com/calculators/uk-setup-cost-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK LTD Non-Resident Setup & Compliance Cost Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-setup-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Limited Company formation fees, London registered address, Wise business bank account setup, and annual CT600 accounting costs.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Can non-UK residents incorporate a UK Limited Company completely online?",
    a: "Yes! HMRC and Companies House allow 100% foreign-owned UK Limited Companies. You do not need UK residency, a UK visa, or to visit the UK. Incorporation is completed within 3 to 24 hours online."
  }, {
    q: "What is required to open a Wise Business bank account for a non-resident UK LTD?",
    a: "To open a Wise or Revolut Business bank account from overseas, you need your UK Certificate of Incorporation, Memorandum & Articles of Association, passport, proof of home address in your home country, and a valid London registered office address."
  }, {
    q: "What are the mandatory annual filings for a UK Limited Company?",
    a: "Every UK company must file: 1) Annual Confirmation Statement (CS01) with Companies House, 2) Annual Accounts with Companies House, and 3) CT600 Corporation Tax return with HMRC (even if dormant)."
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
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK LTD Setup & Compliance Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK LTD Non-Resident Setup & Compliance Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact Companies House fees, London registered address, Wise bank account assistance, and annual CT600 accounts filing." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
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
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal Formation:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "£",
                advaqFormationPackage
              ] })
            ] }),
            includeLondonAddress && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "London Registered Address:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "£",
                londonAddressFee
              ] })
            ] }),
            includeServiceAddress && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Director Privacy Address:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "£",
                serviceAddressFee
              ] })
            ] }),
            includeBankAssistance && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Wise Bank Support:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "£",
                bankAssistanceFee
              ] })
            ] }),
            includeConfirmationStatement && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Annual CS01 Filing:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "£",
                confirmationStatementFee
              ] })
            ] }),
            includeAnnualAccounts && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Annual Accounts & CT600:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400", children: [
                "£",
                annualAccountsFee
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4 space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Year-1 Setup Cost" }),
              /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
                "£",
                totalYear1Cost
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t border-white/10 flex justify-between items-center text-xs", children: [
              /* @__PURE__ */ jsx("span", { className: "text-navy-200", children: "Annual Recurring Compliance (Yr 2+):" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400 font-mono", children: [
                "£",
                annualRecurringCost,
                "/yr"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Incorporate UK LTD with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step UK LTD Formation & Compliance Walkthrough" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of your exact initial setup and annual recurring costs." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Statutory Govt & Legal Formation" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Formation Base" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Companies House Govt Filing Fee:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  baseCompaniesHouseFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "ADVAQ Professional Formation:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  advaqFormationPackage
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Formation Base Total:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  baseCompaniesHouseFee + advaqFormationPackage
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: London Address & Privacy Services" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Address Base" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "London Registered Address:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  londonAddressFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Director Privacy Service Address:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  serviceAddressFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Address Subtotal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  londonAddressFee + serviceAddressFee
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Bank Support & Annual Filings" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Compliance" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Wise / Revolut Bank Setup Support:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  bankAssistanceFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Confirmation Statement (CS01):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  confirmationStatementFee
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Accounts & CT600:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  annualAccountsFee
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
                  "£",
                  totalYear1Cost
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Recurring Compliance (Yr 2+):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  annualRecurringCost,
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
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UK LTD Overseas Package Inclusions (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Package Component" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Fee" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Frequency" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Purpose" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Companies House Incorporation" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold", children: "£50" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "One-Time" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Official UK Government registration fee" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "London Registered Address" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold", children: "£120" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-700", children: "Annual" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Required legal UK address for Companies House & HMRC" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UK LTD Setup)" })
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
            " ADVAQ UK Chartered Tax Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Ready to Incorporate Your UK LTD from Overseas?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UK team incorporates your company in 24 hours, provides London registered office address, assists with Wise business bank accounts, and manages annual accounting." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Incorporate UK LTD with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Formation Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKSetupCostCalculatorPage as component
};
