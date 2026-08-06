import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UKCorporationTaxCalculatorPage() {
  const [taxableProfit, setTaxableProfit] = useState(12e4);
  const [associatedCompanies, setAssociatedCompanies] = useState(1);
  const [openFaq, setOpenFaq] = useState(0);
  const n = associatedCompanies;
  const lowerLimit = 5e4 / n;
  const upperLimit = 25e4 / n;
  const fraction = 3 / 200;
  let corporationTax = 0;
  let marginalRelief = 0;
  let effectiveRate = 19;
  if (taxableProfit <= lowerLimit) {
    corporationTax = taxableProfit * 0.19;
    effectiveRate = 19;
  } else if (taxableProfit >= upperLimit) {
    corporationTax = taxableProfit * 0.25;
    effectiveRate = 25;
  } else {
    const fullTaxAt25 = taxableProfit * 0.25;
    marginalRelief = (upperLimit - taxableProfit) * fraction;
    corporationTax = fullTaxAt25 - marginalRelief;
    effectiveRate = corporationTax / taxableProfit * 100;
  }
  const profitAfterTax = taxableProfit - corporationTax;
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
      name: "UK Corporation Tax & Marginal Relief Calculator",
      item: "https://advaq.com/calculators/uk-corporation-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Corporation Tax & Marginal Relief Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-corporation-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Corporation Tax CT600 liability, 19% vs 25% rates, Marginal Relief discount, and associated companies limits.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What are the UK Corporation Tax rates for the 2026/2027 tax year?",
    a: "UK Corporation Tax has two main rates: the Small Profits Rate of 19% for taxable profits up to £50,000, and the Main Rate of 25% for taxable profits over £250,000. Companies with taxable profits between £50,000 and £250,000 pay tax at 25% reduced by Marginal Relief."
  }, {
    q: "How is UK Corporation Tax Marginal Relief calculated?",
    a: "Marginal Relief reduces the Corporation Tax rate for companies earning between £50,000 and £250,000. The formula is: Marginal Relief = (Upper Limit - Taxable Profit) × Marginal Relief Fraction (3/200). This discount is subtracted from tax calculated at the 25% main rate."
  }, {
    q: "How do Associated Companies affect Corporation Tax profit thresholds?",
    a: "If a company has associated companies under common control, the lower threshold (£50,000) and upper threshold (£250,000) are divided equally among the associated companies. For example, if you control 2 companies, the 19% Small Profits Rate threshold drops to £25,000 for each company."
  }, {
    q: "When is UK Corporation Tax due to HMRC?",
    a: "For small and medium-sized UK companies (profits under £1.5 million), Corporation Tax must be paid to HMRC 9 months and 1 day after the end of your company's accounting period. The CT600 company tax return itself must be filed within 12 months of the period end."
  }, {
    q: "What expenses can be deducted to reduce Corporation Tax?",
    a: "Allowable deductions include director salaries (£12,570), employer SIPP pension contributions, business travel, software subscriptions, office costs, accountancy fees, and Capital Allowances (including 100% Full Expensing on qualifying plant and machinery)."
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
          /* @__PURE__ */ jsx("span", { children: "UK Corporation Tax & Marginal Relief" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Corporation Tax & Marginal Relief Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your CT600 liability across the 19% Small Profits Rate, 25% Main Rate, and exact Marginal Relief bracket." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Taxable Company Profit (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              taxableProfit.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "5000", max: "400000", step: "5000", value: taxableProfit, onChange: (e) => setTaxableProfit(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "£50k (19% Rate)" }),
            /* @__PURE__ */ jsx("span", { children: "£150k (Marginal Relief)" }),
            /* @__PURE__ */ jsx("span", { children: "£250k+ (25% Rate)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "Number of Associated Companies (including this one):" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2 text-xs", children: [1, 2, 3, 4].map((num) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setAssociatedCompanies(num), className: `p-3 rounded-xl border text-center font-bold transition-all ${associatedCompanies === num ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
            num,
            " Company",
            num > 1 ? "s" : ""
          ] }, num)) }),
          /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-gray-500 block mt-2", children: [
            "Adjusts lower threshold to £",
            (5e4 / associatedCompanies).toLocaleString(),
            " & upper threshold to £",
            (25e4 / associatedCompanies).toLocaleString(),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Corporation Tax Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Gross Taxable Profit:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                taxableProfit.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Full Tax at 25%:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "£",
                Math.round(taxableProfit * 0.25).toLocaleString()
              ] })
            ] }),
            marginalRelief > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Marginal Relief Discount (3/200):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "-£",
                Math.round(marginalRelief).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Effective Tax Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                effectiveRate.toFixed(2),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Net Corporation Tax Due (CT600)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(corporationTax).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Retained Profit After CT:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400 font-mono", children: [
                "£",
                Math.round(profitAfterTax).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/corporation-tax-return", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File CT600 Return with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Corporation Tax Walkthrough" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of how HMRC calculates your CT600 liability based on your selected inputs." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Profit & Company Limits" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                associatedCompanies,
                " Associated Co",
                associatedCompanies > 1 ? "s" : ""
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Taxable Profit:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  taxableProfit.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Small Profits Threshold (19%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "£",
                  lowerLimit.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Main Rate Threshold (25%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "£",
                  upperLimit.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-navy-300 italic pt-1", children: [
              "💡 Limits are divided by ",
              associatedCompanies,
              " associated company structure."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Tax Bracket Determination" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: taxableProfit <= lowerLimit ? "Small Profits Rate" : taxableProfit >= upperLimit ? "Main Rate" : "Marginal Relief Bracket" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Active Rate Mechanism:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: taxableProfit <= lowerLimit ? "19% Flat" : taxableProfit >= upperLimit ? "25% Flat" : "25% Minus Marginal Relief" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Effective Rate Charged:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  effectiveRate.toFixed(2),
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-navy-300 italic pt-1", children: [
              "💡 Profits between £",
              lowerLimit.toLocaleString(),
              " & £",
              upperLimit.toLocaleString(),
              " qualify for Marginal Relief."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Marginal Relief Formula" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "3/200 Fraction" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Full Main Rate Tax (25%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(taxableProfit * 0.25).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Upper Limit Gap:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-navy-300", children: [
                  "£",
                  Math.max(0, upperLimit - taxableProfit).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Marginal Relief Discount:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "-£",
                  Math.round(marginalRelief).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-navy-300 italic pt-1", children: [
              "💡 Formula: (",
              upperLimit.toLocaleString(),
              " - ",
              taxableProfit.toLocaleString(),
              ") × 3/200."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final CT600 Tax & Retained Earnings" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Net Tax Verified" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Net CT600 Tax Due:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(corporationTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Profit Retained in LTD:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(profitAfterTax).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Payment due 9 months and 1 day after company accounting year end." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UK Corporation Tax Rates & Thresholds (2026/2027)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Official HMRC Corporation Tax rates, Marginal Relief fraction, and payment deadlines." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Profit Bracket" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Taxable Profit Range" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Headline CT Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Marginal Relief Formula" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Small Profits Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "Profits up to £50,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "19%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "No Marginal Relief needed (Flat 19%)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Marginal Relief Band" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "£50,001 – £250,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-semibold text-gold-600", children: "19% to 25% Effective" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-navy-900", children: "(£250,000 - Taxable Profit) × 3/200" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Main Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "Profits over £250,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "25%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "Flat 25% on full taxable profits" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-border pb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Understanding UK Corporation Tax Rules & Filing" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Key insights into CT600 preparation, allowable deductions, capital allowances, and deadlines." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 text-xs sm:text-sm text-gray-700 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-bold text-navy-950", children: "How Marginal Relief Works for UK Limited Companies" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Under the UK tax regime introduced by HMRC, companies with profits between £50,000 and £250,000 do not pay a flat 25% tax. Instead, they receive ",
              /* @__PURE__ */ jsx("strong", { children: "Marginal Relief" }),
              ", which gradually increases their effective tax rate from 19% up to 25%."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "The formula applies a fraction of ",
              /* @__PURE__ */ jsx("strong", { children: "3/200" }),
              " to the difference between the upper limit (£250,000) and your actual taxable profit."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-bold text-navy-950", children: "CT600 Payment & Filing Deadlines" }),
            /* @__PURE__ */ jsx("p", { children: "Unlike Individual Self Assessment, Corporation Tax has a dual deadline system:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1.5 text-gray-600", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Tax Payment Deadline:" }),
                " 9 months and 1 day after your accounting period ends."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "CT600 Filing Deadline:" }),
                " 12 months after your accounting period ends."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Corporation Tax)" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need CT600 Preparation & Marginal Relief Tax Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UK chartered accountants prepare annual statutory accounts, calculate Marginal Relief, optimize capital allowances, and submit CT600 returns directly to HMRC." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uk-services/corporation-tax-return", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File CT600 with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Corporate Tax Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKCorporationTaxCalculatorPage as component
};
