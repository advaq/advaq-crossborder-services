import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, ArrowRight, Shield } from "lucide-react";
function PakistanPropertyTaxCalculatorPage() {
  const [propertyFbrValuePKR, setPropertyFbrValuePKR] = useState(2e7);
  const [userRole, setUserRole] = useState("buyer");
  const [isFiler, setIsFiler] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const rateFiler = userRole === "buyer" ? 1.25 : 2.75;
  const rateNonFiler = userRole === "buyer" ? 2.5 : 5.5;
  const appliedRate = isFiler ? rateFiler : rateNonFiler;
  const whtTaxAmountPKR = propertyFbrValuePKR * (appliedRate / 100);
  const stampDutyPKR = userRole === "buyer" ? propertyFbrValuePKR * 0.02 : 0;
  const tmaFeePKR = userRole === "buyer" ? propertyFbrValuePKR * 0.01 : 0;
  const totalGovernmentFeePKR = whtTaxAmountPKR + stampDutyPKR + tmaFeePKR;
  const nonFilerTaxAmountPKR = propertyFbrValuePKR * (rateNonFiler / 100);
  const taxSavedByFiling = nonFilerTaxAmountPKR - whtTaxAmountPKR;
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
      name: "Pakistan Calculators",
      item: "https://advaq.com/calculators/pakistan"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "Pakistan Property Tax Calculator",
      item: "https://advaq.com/calculators/pakistan-property-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Property Tax & WHT Calculator (236K & 236C) (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-property-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate Section 236K (Buyer) and Section 236C (Seller) FBR Withholding Taxes, Stamp Duty, and Filer tax savings on real estate transactions.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What are the Section 236K (Buyer) and Section 236C (Seller) WHT rates for property?",
    a: "Under the Income Tax Ordinance 2001, Section 236K (Buyer WHT) is 3% for Filers vs 10.5% (to 12%) for Non-Filers. Section 236C (Seller WHT) is 3% for Filers vs 10% for Non-Filers, depending on property valuation and holding period."
  }, {
    q: "What is Section 7E Deemed Income Tax on Immovable Property?",
    a: "Section 7E taxes immovable properties valued above PKR 25 million at an effective rate of 1% of the fair market value as deemed rental income, unless the property is a primary residence or plots under specified exemptions."
  }, {
    q: "Is FBR valuation table rate used or actual transaction value for property WHT?",
    a: "Withholding tax is calculated on the higher of the FBR Valuation Rate published for the area/society or the actual recorded transaction price in the transfer deed."
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
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Property Tax & WHT" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan Property Tax & WHT Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate Section 236K (Buyer) and Section 236C (Seller) FBR Withholding Taxes, Stamp Duty, and Filer tax savings on real estate transactions." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Transaction Role:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setUserRole("buyer"), className: `p-3.5 rounded-xl border text-left font-semibold ${userRole === "buyer" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Property Buyer (Sec 236K)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setUserRole("seller"), className: `p-3.5 rounded-xl border text-left font-semibold ${userRole === "seller" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Property Seller (Sec 236C)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "FBR / DC Evaluated Property Value (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "Rs ",
              (propertyFbrValuePKR / 1e5).toLocaleString(),
              " Lacs (",
              (propertyFbrValuePKR / 1e7).toFixed(2),
              " Crore)"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "2500000", max: "100000000", step: "2500000", value: propertyFbrValuePKR, onChange: (e) => setPropertyFbrValuePKR(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Are You an Active Taxpayer (ATL Filer)?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Non-Filers pay up to 10.5%–12% WHT compared to 3% for Filers." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isFiler, onChange: (e) => setIsFiler(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Property Tax Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Applied WHT Rate (",
                userRole === "buyer" ? "Sec 236K" : "Sec 236C",
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-bold", children: [
                appliedRate,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FBR WHT Amount:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "Rs ",
                Math.round(whtTaxAmountPKR).toLocaleString()
              ] })
            ] }),
            userRole === "buyer" && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Provincial Stamp Duty (2%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "Rs ",
                Math.round(stampDutyPKR).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Govt Transfer Taxes Due" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "Rs ",
              Math.round(totalGovernmentFeePKR).toLocaleString()
            ] }),
            !isFiler && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[11px] text-amber-400 font-semibold", children: [
              "💡 Become a Filer to save Rs ",
              Math.round(taxSavedByFiling).toLocaleString(),
              " on this transaction!"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/atl-restoration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Become Filer with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Property Tax & WHT Audit" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line breakdown of Section 236C / 236K advance tax and provincial stamp duties for Rs ",
              propertyFbrValuePKR.toLocaleString(),
              " transaction."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Property Valuation" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "FBR Table" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Declared Value:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Rs ",
                  propertyFbrValuePKR.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Transaction Role:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white uppercase", children: userRole })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Taxable Base:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  propertyFbrValuePKR.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Advance FBR WHT" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: userRole === "buyer" ? "Sec 236K" : "Sec 236C" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Filer Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isFiler ? "text-emerald-400" : "text-amber-400", children: isFiler ? "Active Filer" : "Non-Filer" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "WHT Rate:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  appliedRate,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "FBR Tax Due:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(whtTaxAmountPKR).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Provincial Duties" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Revenue Dept" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Stamp Duty (2%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Rs ",
                  Math.round(stampDutyPKR).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "TMA Fee (1%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Rs ",
                  Math.round(tmaFeePKR).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Provincial Total:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(stampDutyPKR + tmaFeePKR).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Total Govt Transfer Cost" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: "Net Taxes" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Filer Savings Potential:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "Rs ",
                  Math.round(taxSavedByFiling).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FBR + Provincial:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Combined" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Taxes Due:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(totalGovernmentFeePKR).toLocaleString()
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Pakistan Property Transfer Tax & WHT Rates Matrix" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Tax Component" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Governing Provision" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Filer Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Non-Filer Rate" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Section 236K (Buyer Advance WHT)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Income Tax Ordinance 2001" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "1.25% WHT" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "2.5% WHT" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Section 236C (Seller Advance WHT)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Income Tax Ordinance 2001" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "2.75% WHT (Same year: 3%)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "5.5% WHT" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Section 7E Deemed Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Property Val > Rs 25M" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-amber-600", children: "1% Fair Market Value" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "1% Fair Market Value" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Pakistan Property Taxes)" })
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
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "border-b border-border pb-4", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Explore Related Pakistan Real Estate & Tax Tools" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Rental Income" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "Section 15 Rental Income Tax Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate FBR Section 15 tax on property rent and tenant withholding tax deductions." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-rental-income-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Capital Gains Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR Section 37 Property CGT Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate Section 37 property gain tax and holding period reduction schedule." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-capital-gains-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Filer Savings" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "Pakistan Filer Tax Savings Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate money saved on property, vehicles & bank cash transfers by becoming an ATL Filer." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-filer-vs-non-filer-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-40" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 16 }),
            " ADVAQ Registered High-Court Property Advocates"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Obtain Section 7E Exemption & Property CPR Challans" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our Pakistan real estate legal team generates FBR 236K/236C CPR challans, issues Section 7E exemption certificates, and coordinates with Sub-Registrars for smooth property transfers." }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/atl-restoration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
            "Consult Property Tax Lawyer ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  PakistanPropertyTaxCalculatorPage as component
};
