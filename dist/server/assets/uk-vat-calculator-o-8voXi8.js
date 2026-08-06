import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UKVATCalculatorPage() {
  const [rollingTurnover, setRollingTurnover] = useState(85e3);
  const [annualVatExpenses, setAnnualVatExpenses] = useState(15e3);
  const [flatRatePercentage, setFlatRatePercentage] = useState(14.5);
  const [isFirstYearDiscount, setIsFirstYearDiscount] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const vatThreshold = 9e4;
  const isVatRegistrationMandatory = rollingTurnover >= vatThreshold;
  const effectiveFlatRate = Math.max(0, flatRatePercentage - (isFirstYearDiscount ? 1 : 0));
  const vatOutputStandard = rollingTurnover * 0.2;
  const vatInputStandard = annualVatExpenses * 0.2;
  const netVatPayableStandard = Math.max(0, vatOutputStandard - vatInputStandard);
  const grossRevenueIncludingVat = rollingTurnover * 1.2;
  const netVatPayableFlatRate = grossRevenueIncludingVat * (effectiveFlatRate / 100);
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
      name: "UK VAT Threshold Calculator",
      item: "https://advaq.com/calculators/uk-vat-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK VAT £90,000 Threshold & Scheme Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-vat-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK VAT threshold compliance, compare Standard 20% vs Flat Rate VAT scheme savings, and check non-resident voluntary registration.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the mandatory UK VAT registration threshold for 2026/2027?",
    a: "The mandatory UK VAT registration threshold is £90,000 of taxable turnover over a rolling 12-month period. If your turnover exceeds £90,000 in any 12-month period (or is expected to exceed £90,000 in the next 30 days), you MUST register with HMRC."
  }, {
    q: "Are non-UK resident founders required to register for UK VAT at £0 threshold?",
    a: "Yes. If your business has no physical establishment in the UK (NETP / Non-Established Taxable Person), the £90,000 threshold does not apply—you must register for UK VAT immediately upon making your first taxable supply in the UK."
  }, {
    q: "How does the UK Flat Rate VAT Scheme work?",
    a: "Under the Flat Rate Scheme, you charge customers 20% VAT on invoices, but pay HMRC a lower, fixed percentage of your gross turnover (e.g. 14.5% for IT consultancy). You retain the difference as profit, but generally cannot reclaim VAT on purchases (except capital assets over £2,000)."
  }, {
    q: "What is a Limited Cost Business under the Flat Rate VAT Scheme?",
    a: "If your expenditure on relevant goods (excluding services, software, sub-contractors, vehicles) is less than 2% of your turnover or less than £1,000 per year, HMRC classifies your business as a 'Limited Cost Business' and charges a high 16.5% flat rate."
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
          /* @__PURE__ */ jsx("span", { children: "UK VAT Threshold & Scheme" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK VAT £90,000 Threshold & Scheme Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Monitor your rolling 12-month UK turnover against the £90k mandatory VAT limit and compare Flat Rate vs Standard 20% VAT savings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-5 rounded-2xl border flex items-center gap-4 ${isVatRegistrationMandatory ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-emerald-50 border-emerald-300 text-emerald-950"}`, children: [
        isVatRegistrationMandatory ? /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0", size: 32 }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 32 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-semibold text-lg", children: isVatRegistrationMandatory ? "Mandatory UK VAT Registration Required!" : "Below Mandatory £90,000 Threshold (Voluntary Optional)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-0.5", children: isVatRegistrationMandatory ? "Your 12-month rolling UK turnover has crossed £90,000. You must register for UK VAT with HMRC within 30 days to avoid penalties." : "You are currently under the mandatory threshold. Voluntary VAT registration can still be beneficial if your B2B clients reclaim VAT." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "12-Month UK Turnover (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              rollingTurnover.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "20000", max: "250000", step: "5000", value: rollingTurnover, onChange: (e) => setRollingTurnover(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Threshold: £90,000 (Mandatory Limit)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual VAT-Subject Expenses (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              annualVatExpenses.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: rollingTurnover * 0.5, step: "2500", value: annualVatExpenses, onChange: (e) => setAnnualVatExpenses(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Hardware, software, advertising, contractor costs with 20% VAT." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-serif font-semibold text-navy-950 text-lg", children: "Standard Rate VAT (20%)" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-gray-100 px-3 py-1 rounded-full font-medium", children: "Reclaim Input VAT" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-gray-700", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Output VAT Collected (20%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "£",
                Math.round(vatOutputStandard).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Input VAT Reclaimed (20%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-600", children: [
                "-£",
                Math.round(vatInputStandard).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border text-sm font-bold text-navy-950", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Annual HMRC VAT Bill:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "£",
                Math.round(netVatPayableStandard).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-4 shadow-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-white/10", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-serif font-semibold text-white text-lg", children: "Flat Rate VAT Scheme" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium", children: "Simplified %" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-navy-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsx("span", { children: "Industry Sector Rate:" }),
                /* @__PURE__ */ jsxs("select", { value: flatRatePercentage, onChange: (e) => setFlatRatePercentage(Number(e.target.value)), className: "bg-navy-900 border border-gold-500/40 text-white text-xs rounded p-1.5 font-sans", children: [
                  /* @__PURE__ */ jsx("option", { value: 14.5, children: "14.5% — IT Consultancy & Telecommunications" }),
                  /* @__PURE__ */ jsx("option", { value: 14, children: "14.0% — Management Consultancy & Business Services" }),
                  /* @__PURE__ */ jsx("option", { value: 11, children: "11.0% — Advertising, Design & Photography" }),
                  /* @__PURE__ */ jsx("option", { value: 14.5, children: "14.5% — Legal & Financial Services" }),
                  /* @__PURE__ */ jsx("option", { value: 7.5, children: "7.5% — Retail & Goods Sales" }),
                  /* @__PURE__ */ jsx("option", { value: 12.5, children: "12.5% — Catering & Hotel Services" }),
                  /* @__PURE__ */ jsx("option", { value: 6.5, children: "6.5% — Pubs & Restaurants" }),
                  /* @__PURE__ */ jsx("option", { value: 16.5, children: "16.5% — Limited Cost Business (<2% goods expenditure)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between text-xs cursor-pointer bg-navy-900/60 p-2 rounded border border-white/10", children: [
                /* @__PURE__ */ jsx("span", { children: "Apply First-Year 1% HMRC Discount" }),
                /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isFirstYearDiscount, onChange: (e) => setIsFirstYearDiscount(e.target.checked), className: "accent-gold-500 w-4 h-4" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Annual HMRC VAT Bill:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-400", children: [
                "£",
                Math.round(netVatPayableFlatRate).toLocaleString()
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need UK VAT Registration & Quarterly Return Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "HMRC EORI, Voluntary/Mandatory Registration & Flat Rate Advice." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/uk-services/vat-registration", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Register UK VAT with ADVAQ" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step UK VAT & Scheme Walkthrough" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of your £90k threshold compliance and scheme comparison based on your inputs." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: £90k Threshold Compliance" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isVatRegistrationMandatory ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`, children: isVatRegistrationMandatory ? "Mandatory" : "Voluntary" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "12-Month UK Turnover:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  rollingTurnover.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "HMRC Statutory Threshold:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: "£90,000" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isVatRegistrationMandatory ? "text-amber-400" : "text-emerald-400", children: isVatRegistrationMandatory ? "Crossed Threshold" : "Under Threshold" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Non-UK established businesses (NETP) have a £0 threshold (must register immediately)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Standard 20% VAT Rate" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "£",
                Math.round(netVatPayableStandard).toLocaleString(),
                " Net Bill"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Output VAT (20% on Revenue):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(vatOutputStandard).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Input VAT Reclaimed (20%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "-£",
                  Math.round(vatInputStandard).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Standard VAT Bill:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(netVatPayableStandard).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Reclaim 20% VAT on hardware, software, office space & contractor expenses." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Flat Rate VAT Scheme" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                effectiveFlatRate,
                "% Flat Rate"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Gross Revenue (inc. 20% VAT):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(grossRevenueIncludingVat).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Applied Sector Rate:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-navy-300", children: [
                  effectiveFlatRate,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Flat Rate VAT Bill:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(netVatPayableFlatRate).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-navy-300 italic pt-1", children: [
              "💡 Includes ",
              isFirstYearDiscount ? "1% first-year HMRC discount" : "standard flat rate",
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Optimal Scheme Recommendation" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Optimal Choice" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Standard 20% Bill:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(netVatPayableStandard).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Flat Rate Bill:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(netVatPayableFlatRate).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Recommended Scheme:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: netVatPayableFlatRate < netVatPayableStandard ? "Flat Rate Scheme" : "Standard 20% Scheme" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-navy-300 italic pt-1", children: [
              "💡 Saves £",
              Math.abs(Math.round(netVatPayableStandard - netVatPayableFlatRate)).toLocaleString(),
              " annual VAT by choosing the right scheme!"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UK VAT Scheme Comparison (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "VAT Scheme Type" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Turnover Limit" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "VAT Accounting Method" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Key Advantage" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Standard Rate VAT" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "No limit" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Charge 20% VAT, reclaim 20% input VAT on expenses" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-semibold", children: "Best if expenses are high with heavy input VAT" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Flat Rate Scheme (FRS)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "Up to £150,000/yr" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Charge 20% VAT, pay lower flat % to HMRC on gross revenue" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gold-600 font-semibold", children: "Simplified bookkeeping & keep flat rate margin" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UK VAT)" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need Official UK VAT Registration & MTD Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UK chartered team handles mandatory & voluntary VAT registration, EORI numbers for trade, Flat Rate Scheme application, and Making Tax Digital quarterly returns." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uk-services/vat-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Register UK VAT with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp VAT Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKVATCalculatorPage as component
};
