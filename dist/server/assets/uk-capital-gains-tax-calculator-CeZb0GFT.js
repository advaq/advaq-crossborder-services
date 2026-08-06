import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UKCapitalGainsTaxCalculatorPage() {
  const [assetType, setAssetType] = useState("property");
  const [purchasePrice, setPurchasePrice] = useState(2e5);
  const [salePrice, setSalePrice] = useState(32e4);
  const [allowableCosts, setAllowableCosts] = useState(1e4);
  const [taxBand, setTaxBand] = useState("higher");
  const [openFaq, setOpenFaq] = useState(0);
  const annualExemptAmount = 3e3;
  const grossGain = Math.max(0, salePrice - purchasePrice);
  const netGainBeforeExemption = Math.max(0, grossGain - allowableCosts);
  const taxableGain = Math.max(0, netGainBeforeExemption - annualExemptAmount);
  let cgtRate = taxBand === "basic" ? 18 : 24;
  const capitalGainsTax = taxableGain * (cgtRate / 100);
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
      name: "UK Capital Gains Tax Calculator",
      item: "https://advaq.com/calculators/uk-capital-gains-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Capital Gains Tax (CGT) Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-capital-gains-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Capital Gains Tax on property, stocks, and crypto assets under 2026/2027 HMRC rules.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the UK Capital Gains Tax annual exempt allowance for 2026/2027?",
    a: "For the 2026/2027 tax year, the individual UK Capital Gains Tax annual exempt amount is £3,000. Capital gains up to £3,000 per person per year are completely tax-free. Married couples or civil partners can pool their allowances for up to £6,000 tax-free gain."
  }, {
    q: "What are the UK Capital Gains Tax rates for residential property?",
    a: "For UK residential property disposals (other than your main home covered by Private Residence Relief), the CGT rates are 18% for Basic Rate taxpayers and 24% for Higher and Additional Rate taxpayers."
  }, {
    q: "What is the HMRC 60-day UK Property CGT reporting rule?",
    a: "If you sell a UK residential property resulting in a taxable gain, you MUST report the disposal to HMRC and pay the estimated Capital Gains Tax within 60 days of the completion date using an online UK Property Tax Account."
  }, {
    q: "What costs can be deducted to reduce UK Capital Gains Tax?",
    a: "Allowable costs include original purchase costs, solicitors' fees, stamp duty paid on purchase, estate agent selling fees, valuation fees, and capital improvement expenditures (e.g. extension or structural refurbishment). Regular maintenance costs are not deductible."
  }, {
    q: "Does Business Asset Disposal Relief (BADR) reduce CGT for business sales?",
    a: "Yes. Business Asset Disposal Relief (formerly Entrepreneurs' Relief) allows qualifying company directors and sole traders selling their business or shares to pay a reduced 10% CGT rate up to a lifetime limit of £1,000,000 in qualifying gains."
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
          /* @__PURE__ */ jsx("span", { children: "UK Capital Gains Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Capital Gains Tax (CGT) Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate CGT for UK residential property sales, stocks, and crypto assets. Applies the £3,000 annual allowance." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Asset Type:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setAssetType("property"), className: `p-3 rounded-xl border text-left font-semibold transition-all ${assetType === "property" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Residential Property (18% / 24%)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setAssetType("shares"), className: `p-3 rounded-xl border text-left font-semibold transition-all ${assetType === "shares" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Shares / Crypto / Business Assets (18% / 24%)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-1", children: "Original Purchase Price (£):" }),
            /* @__PURE__ */ jsx("input", { type: "number", value: purchasePrice, onChange: (e) => setPurchasePrice(Number(e.target.value)), className: "w-full bg-white border border-border rounded-xl p-3 text-sm text-navy-950 font-bold font-mono" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-1", children: "Sale / Disposal Price (£):" }),
            /* @__PURE__ */ jsx("input", { type: "number", value: salePrice, onChange: (e) => setSalePrice(Number(e.target.value)), className: "w-full bg-white border border-border rounded-xl p-3 text-sm text-navy-950 font-bold font-mono" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Allowable Costs (Legal, Estate Agent, Improvements) (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "£",
              allowableCosts.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "50000", step: "1000", value: allowableCosts, onChange: (e) => setAllowableCosts(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "Your UK Income Tax Rate Bracket:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setTaxBand("basic"), className: `p-3 rounded-xl border text-left font-semibold transition-all ${taxBand === "basic" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Basic Rate Taxpayer (Income <£50,270)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setTaxBand("higher"), className: `p-3 rounded-xl border text-left font-semibold transition-all ${taxBand === "higher" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Higher / Additional Rate (>£50,270)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Capital Gains Tax Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross Capital Gain:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                grossGain.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Allowable Costs Deducted:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400", children: [
                "-£",
                allowableCosts.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Annual Exempt Allowance:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400", children: [
                "-£",
                annualExemptAmount.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200 border-t border-white/10 pt-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Taxable Capital Gain:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-bold", children: [
                "£",
                taxableGain.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Applied CGT Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                cgtRate,
                "% (",
                assetType === "property" ? "Property" : "Other",
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Estimated Capital Gains Tax Due" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(capitalGainsTax).toLocaleString()
            ] }),
            assetType === "property" && /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "HMRC Property Reporting Deadline:" }),
              /* @__PURE__ */ jsx("strong", { className: "text-amber-400 font-mono", children: "Within 60 Days" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/self-assessment", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File CGT Return with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Capital Gains Tax Walkthrough" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line proof of how HMRC calculates your exact CGT liability for ",
              assetType === "property" ? "Property" : "Shares/Crypto",
              "."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Gross Capital Gain" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Gain Verified" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Disposal / Sale Price:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  salePrice.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Original Purchase Price:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-navy-300", children: [
                  "-£",
                  purchasePrice.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Gross Capital Gain:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  grossGain.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Allowable Expenses & Exempt Allowance" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Deductions Applied" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Gross Gain:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  grossGain.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Allowable Legal/Agent Costs:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "-£",
                  allowableCosts.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual CGT Exempt Amount:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "-£3,000" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Taxable Capital Gain:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  taxableGain.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Statutory £3,000 annual allowance deducted tax-free." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: CGT Rate Calculation" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                cgtRate,
                "% Rate"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Asset Classification:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: assetType === "property" ? "Residential Property" : "Shares / Crypto" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Taxpayer Income Bracket:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-navy-300", children: taxBand === "basic" ? "Basic Rate" : "Higher / Additional Rate" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory CGT Rate:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  cgtRate,
                  "%"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final Tax & Reporting Deadline" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "CGT Verified" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Capital Gains Tax Due:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(capitalGainsTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "HMRC Filing Deadline:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: assetType === "property" ? "Within 60 Days of Completion" : "Self Assessment (Jan 31)" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UK Capital Gains Tax Rates (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Asset Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Basic Rate Taxpayer" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Higher / Additional Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Annual Exemption" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "UK Residential Property" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "18%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-red-600", children: "24%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "£3,000 / person" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Shares, Crypto & Other Assets" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-emerald-600", children: "10%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "20%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "£3,000 / person" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Capital Gains Tax)" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need 60-Day UK Property CGT Tax Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UK chartered team prepares accurate CGT calculations, reclaims allowable improvement costs, and submits 60-day UK Property Returns directly to HMRC." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uk-services/self-assessment", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File CGT Return with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp CGT Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKCapitalGainsTaxCalculatorPage as component
};
