import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, BookOpen, Sparkles, HelpCircle, ChevronDown, ArrowRight, Shield } from "lucide-react";
function PakistanFbrSalaryTaxCalculatorPage() {
  const [monthlyIncomePKR, setMonthlyIncomePKR] = useState(2e5);
  const [incomeType, setIncomeType] = useState("salaried");
  const [openFaq, setOpenFaq] = useState(0);
  const annualIncomePKR = monthlyIncomePKR * 12;
  let annualTaxPKR = 0;
  if (incomeType === "salaried") {
    if (annualIncomePKR <= 6e5) annualTaxPKR = 0;
    else if (annualIncomePKR <= 12e5) annualTaxPKR = (annualIncomePKR - 6e5) * 0.01;
    else if (annualIncomePKR <= 22e5) annualTaxPKR = 6e3 + (annualIncomePKR - 12e5) * 0.11;
    else if (annualIncomePKR <= 32e5) annualTaxPKR = 116e3 + (annualIncomePKR - 22e5) * 0.2;
    else if (annualIncomePKR <= 41e5) annualTaxPKR = 316e3 + (annualIncomePKR - 32e5) * 0.25;
    else if (annualIncomePKR <= 56e5) annualTaxPKR = 541e3 + (annualIncomePKR - 41e5) * 0.29;
    else if (annualIncomePKR <= 7e6) annualTaxPKR = 976e3 + (annualIncomePKR - 56e5) * 0.32;
    else annualTaxPKR = 1424e3 + (annualIncomePKR - 7e6) * 0.35;
  } else {
    if (annualIncomePKR <= 6e5) annualTaxPKR = 0;
    else if (annualIncomePKR <= 12e5) annualTaxPKR = (annualIncomePKR - 6e5) * 0.15;
    else if (annualIncomePKR <= 16e5) annualTaxPKR = 9e4 + (annualIncomePKR - 12e5) * 0.2;
    else if (annualIncomePKR <= 32e5) annualTaxPKR = 17e4 + (annualIncomePKR - 16e5) * 0.3;
    else annualTaxPKR = 65e4 + (annualIncomePKR - 32e5) * 0.35;
  }
  const monthlyTaxPKR = annualTaxPKR / 12;
  const netMonthlyTakeHomePKR = monthlyIncomePKR - monthlyTaxPKR;
  const effectiveTaxRate = annualIncomePKR > 0 ? annualTaxPKR / annualIncomePKR * 100 : 0;
  const getActiveSlabIndex = () => {
    if (incomeType === "salaried") {
      if (annualIncomePKR <= 6e5) return 0;
      if (annualIncomePKR <= 12e5) return 1;
      if (annualIncomePKR <= 22e5) return 2;
      if (annualIncomePKR <= 32e5) return 3;
      if (annualIncomePKR <= 41e5) return 4;
      if (annualIncomePKR <= 56e5) return 5;
      if (annualIncomePKR <= 7e6) return 6;
      return 7;
    } else {
      if (annualIncomePKR <= 6e5) return 0;
      if (annualIncomePKR <= 12e5) return 1;
      if (annualIncomePKR <= 16e5) return 2;
      if (annualIncomePKR <= 32e5) return 3;
      return 4;
    }
  };
  const activeSlabIndex = getActiveSlabIndex();
  const salariedSlabsData = [{
    bracket: "Up to Rs 600,000",
    rateStr: "0% Tax Rate",
    baseTax: "Rs 0",
    marginal: "0%",
    color: "text-emerald-600"
  }, {
    bracket: "Rs 600,001 – Rs 1,200,000",
    rateStr: "1% of amount exceeding Rs 600k",
    baseTax: "Rs 0",
    marginal: "1%",
    color: "text-emerald-600"
  }, {
    bracket: "Rs 1,200,001 – Rs 2,200,000",
    rateStr: "Rs 6,000 + 11% exceeding Rs 1.2M",
    baseTax: "Rs 6,000",
    marginal: "11%",
    color: "text-emerald-600"
  }, {
    bracket: "Rs 2,200,001 – Rs 3,200,000",
    rateStr: "Rs 116,000 + 20% exceeding Rs 2.2M",
    baseTax: "Rs 116,000",
    marginal: "20%",
    color: "text-amber-600"
  }, {
    bracket: "Rs 3,200,001 – Rs 4,100,000",
    rateStr: "Rs 316,000 + 25% exceeding Rs 3.2M",
    baseTax: "Rs 316,000",
    marginal: "25%",
    color: "text-amber-600"
  }, {
    bracket: "Rs 4,100,001 – Rs 5,600,000",
    rateStr: "Rs 541,000 + 29% exceeding Rs 4.1M",
    baseTax: "Rs 541,000",
    marginal: "29%",
    color: "text-red-600"
  }, {
    bracket: "Rs 5,600,001 – Rs 7,000,000",
    rateStr: "Rs 976,000 + 32% exceeding Rs 5.6M",
    baseTax: "Rs 976,000",
    marginal: "32%",
    color: "text-red-600"
  }, {
    bracket: "Above Rs 7,000,000",
    rateStr: "Rs 1,424,000 + 35% exceeding Rs 7.0M",
    baseTax: "Rs 1,424,000",
    marginal: "35%",
    color: "text-red-600"
  }];
  const businessSlabsData = [{
    bracket: "Up to Rs 600,000",
    rateStr: "0% Tax Rate",
    baseTax: "Rs 0",
    marginal: "0%",
    color: "text-emerald-600"
  }, {
    bracket: "Rs 600,001 – Rs 1,200,000",
    rateStr: "15% of amount exceeding Rs 600k",
    baseTax: "Rs 0",
    marginal: "15%",
    color: "text-amber-600"
  }, {
    bracket: "Rs 1,200,001 – Rs 1,600,000",
    rateStr: "Rs 90,000 + 20% exceeding Rs 1.2M",
    baseTax: "Rs 90,000",
    marginal: "20%",
    color: "text-amber-600"
  }, {
    bracket: "Rs 1,600,001 – Rs 3,200,000",
    rateStr: "Rs 170,000 + 30% exceeding Rs 1.6M",
    baseTax: "Rs 170,000",
    marginal: "30%",
    color: "text-red-600"
  }, {
    bracket: "Above Rs 3,200,000",
    rateStr: "Rs 650,000 + 35% exceeding Rs 3.2M",
    baseTax: "Rs 650,000",
    marginal: "35%",
    color: "text-red-600"
  }];
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
      name: "Pakistan FBR Salary Tax Calculator",
      item: "https://advaq.com/calculators/pakistan-fbr-salary-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan FBR Salary & Business Income Tax Calculator (Tax Year 2026/2027)",
    url: "https://advaq.com/calculators/pakistan-fbr-salary-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate monthly salary tax deductions under Section 149, progressive FBR income tax slabs, and net take-home salary for employees and business individuals in Pakistan.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the non-taxable salary limit in Pakistan for Tax Year 2026/2027?",
    a: "Salaried individuals earning up to PKR 600,000 annually (PKR 50,000 per month) pay 0% income tax under the First Schedule of the Income Tax Ordinance 2001."
  }, {
    q: "Who qualifies as a Salaried Individual under FBR tax rules?",
    a: "An individual qualifies as a salaried person if salary constitutes MORE than 75% of their total taxable income in a tax year."
  }, {
    q: "When is the annual deadline for filing FBR Income Tax Returns for salaried persons?",
    a: "The annual deadline for filing FBR Income Tax Returns (Form 114) for salaried individuals and business individuals is September 30 following the end of the tax year."
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
          /* @__PURE__ */ jsx("span", { children: "FBR Salary & Income Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FBR Income Tax Calculator (Tax Year 2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate monthly salary tax deductions, annual FBR tax slabs, and net take-home salary for employees and business individuals in Pakistan." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "Income Classification:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setIncomeType("salaried"), className: `p-3 rounded-xl border text-center transition-all ${incomeType === "salaried" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Salaried Individual" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Salary > 75% of income" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setIncomeType("business"), className: `p-3 rounded-xl border text-center transition-all ${incomeType === "business" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Business Individual / AOP" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "Sole Proprietor / Partner" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Gross Monthly Income (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "Rs ",
              (monthlyIncomePKR / 1e5).toLocaleString(),
              " Lacs / month"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "1000000", step: "25000", value: monthlyIncomePKR, onChange: (e) => setMonthlyIncomePKR(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-gray-500 block mt-1", children: [
            "Annual Total: Rs ",
            (annualIncomePKR / 1e5).toLocaleString(),
            " Lacs"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: "Monthly Tax Deduction" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-red-600", children: [
            "Rs ",
            Math.round(monthlyTaxPKR).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: "Annual Total FBR Tax" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
            "Rs ",
            Math.round(annualTaxPKR).toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gold-500 uppercase", children: "Net Monthly Take-Home" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
            "Rs ",
            Math.round(netMonthlyTakeHomePKR).toLocaleString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need FBR Income Tax Return Filing (IRIS)?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Active Taxpayer List (ATL) restoration & tax return drafting." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/individual-tax-return", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "File Tax Return with ADVAQ" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step FBR Salary Tax Walkthrough" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line breakdown of Income Tax Ordinance 2001 First Schedule tax slab calculations for Rs ",
              monthlyIncomePKR.toLocaleString(),
              " monthly salary."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Gross Annual Salary" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Annual Taxable" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Monthly Salary:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Rs ",
                  monthlyIncomePKR.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Months per Year:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "12 Months" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Taxable Income:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  annualIncomePKR.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: FBR Tax Slab Rate" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "First Schedule" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Classification:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: incomeType === "salaried" ? "Salaried (> 75%)" : "Non-Salaried / AOP" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Exempt Threshold:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Rs 600,000 / year" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Applicable Tax Rate:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  effectiveTaxRate.toFixed(1),
                  "% Effective"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Annual Tax Liability" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: "FBR Annual" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Gross Annual Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "Rs ",
                  Math.round(annualTaxPKR).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Monthly Deduction:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "Rs ",
                  Math.round(monthlyTaxPKR).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual FBR Liability:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(annualTaxPKR).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Take-Home Net Income" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Net Payout" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Gross Monthly:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Rs ",
                  monthlyIncomePKR.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Tax Deducted:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "Rs ",
                  Math.round(monthlyTaxPKR).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Monthly Payout:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(netMonthlyTakeHomePKR).toLocaleString()
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: incomeType === "salaried" ? "FBR Salaried Income Tax Slabs Schedule (2026/2027)" : "FBR Business Individual & AOP Income Tax Slabs Schedule (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: incomeType === "salaried" ? "Annual Taxable Salary Bracket" : "Annual Taxable Business Income Bracket" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "FBR Income Tax Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Base Tax Amount" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Marginal Tax Rate" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: (incomeType === "salaried" ? salariedSlabsData : businessSlabsData).map((slab, idx) => {
            const isActive = idx === activeSlabIndex;
            return /* @__PURE__ */ jsxs("tr", { className: `transition-all ${isActive ? "bg-amber-500/10 border-2 border-gold-500 font-bold shadow-md" : idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}`, children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsx("span", { children: slab.bracket }),
                isActive && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 font-sans font-bold text-[10px] uppercase tracking-wider shadow-sm", children: [
                  /* @__PURE__ */ jsx(Sparkles, { size: 11 }),
                  " Your Slab"
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("td", { className: `p-3.5 font-mono ${isActive ? "text-navy-950 font-bold" : ""}`, children: slab.rateStr }),
              /* @__PURE__ */ jsx("td", { className: `p-3.5 font-mono ${isActive ? "text-navy-950 font-bold" : ""}`, children: slab.baseTax }),
              /* @__PURE__ */ jsx("td", { className: `p-3.5 font-mono font-bold ${slab.color}`, children: slab.marginal })
            ] }, idx);
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (FBR Salary Tax)" })
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
        /* @__PURE__ */ jsx("div", { className: "border-b border-border pb-4", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Explore Related Pakistan Tax Tools" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
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
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Withholding Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR Section 153 WHT Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate WHT rates for services (9%/18%), goods (5%/10%), and contracts." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-wht-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Freelancer Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "Pakistan Freelancer 0.25% Tax & FCVA Tool" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate Section 154A reduced 0.25% export tax rate & SBP FCVA retention." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-freelancer-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
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
            " ADVAQ Licensed Pakistan Tax Advocates"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "File Your FBR Iris Income Tax Return (Form 114)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our Pakistan tax legal team prepares your annual income tax returns, wealth statements (Form 116), and reconciles employer salary WHT certificates (Section 149)." }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/individual-tax-return", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
            "File Income Tax Return ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  PakistanFbrSalaryTaxCalculatorPage as component
};
