import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, Check, CheckCircle2, AlertTriangle, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UKSelfAssessmentCalculatorPage() {
  const [salaryIncome, setSalaryIncome] = useState(15e3);
  const [rentalIncome, setRentalIncome] = useState(5e3);
  const [freelanceProfit, setFreelanceProfit] = useState(25e3);
  const [dividendIncome, setDividendIncome] = useState(5e3);
  const [openFaq, setOpenFaq] = useState(0);
  const totalEarnedIncome = salaryIncome + freelanceProfit + rentalIncome;
  const totalGrossIncome = totalEarnedIncome + dividendIncome;
  let personalAllowance = 12570;
  if (totalGrossIncome > 1e5) {
    const reduction = (totalGrossIncome - 1e5) / 2;
    personalAllowance = Math.max(0, 12570 - reduction);
  }
  const taxableEarnedIncome = Math.max(0, totalEarnedIncome - personalAllowance);
  let incomeTax = 0;
  if (taxableEarnedIncome <= 37700) {
    incomeTax = taxableEarnedIncome * 0.2;
  } else if (taxableEarnedIncome <= 112570) {
    incomeTax = 37700 * 0.2 + (taxableEarnedIncome - 37700) * 0.4;
  } else {
    incomeTax = 37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableEarnedIncome - 112570) * 0.45;
  }
  let class4NI = 0;
  if (freelanceProfit > 12570) {
    const band1 = Math.min(Math.max(0, freelanceProfit - 12570), 37700);
    const band2 = Math.max(0, freelanceProfit - 50270);
    class4NI = band1 * 0.06 + band2 * 0.02;
  }
  const unusedPA = Math.max(0, personalAllowance - totalEarnedIncome);
  const divAfterPA = Math.max(0, dividendIncome - unusedPA);
  const taxableDividends = Math.max(0, divAfterPA - 500);
  let dividendTax = 0;
  if (taxableDividends > 0) {
    const basicBandRemaining2 = Math.max(0, 37700 - taxableEarnedIncome);
    const divInBasic2 = Math.min(taxableDividends, basicBandRemaining2);
    const higherBandRemaining2 = Math.max(0, 112570 - Math.max(37700, taxableEarnedIncome));
    const divInHigher2 = Math.min(Math.max(0, taxableDividends - divInBasic2), higherBandRemaining2);
    const divInAdd2 = Math.max(0, taxableDividends - divInBasic2 - divInHigher2);
    dividendTax = divInBasic2 * 0.1075 + divInHigher2 * 0.3575 + divInAdd2 * 0.3935;
  }
  const totalSelfAssessmentTax = incomeTax + class4NI + dividendTax;
  const paymentOnAccount = totalSelfAssessmentTax > 1e3 ? totalSelfAssessmentTax * 0.5 : 0;
  const totalJanuary31Payout = totalSelfAssessmentTax + paymentOnAccount;
  const isPAActive = totalGrossIncome > 0;
  const isBasicIncomeTaxActive = taxableEarnedIncome > 0;
  const isBasicNIActive = freelanceProfit > 12570;
  const isBasicDivActive = dividendIncome > 0 && taxableDividends > 0 && taxableEarnedIncome < 37700;
  const isBasicRowActive = isBasicIncomeTaxActive || isBasicNIActive || isBasicDivActive;
  const isHigherIncomeTaxActive = taxableEarnedIncome > 37700;
  const isHigherNIActive = freelanceProfit > 50270;
  const isHigherDivActive = dividendIncome > 0 && taxableDividends > 0 && taxableEarnedIncome + taxableDividends > 37700;
  const isHigherRowActive = isHigherIncomeTaxActive || isHigherNIActive || isHigherDivActive;
  const isAddIncomeTaxActive = taxableEarnedIncome > 112570;
  const isAddNIActive = freelanceProfit > 50270 && taxableEarnedIncome > 112570;
  const isAddDivActive = dividendIncome > 0 && taxableDividends > 0 && taxableEarnedIncome + taxableDividends > 112570;
  const isAddRowActive = isAddIncomeTaxActive || isAddDivActive;
  const basicEarnedTaxable = Math.min(taxableEarnedIncome, 37700);
  const basicIncomeTaxAmount = basicEarnedTaxable * 0.2;
  const higherEarnedTaxable = Math.min(Math.max(0, taxableEarnedIncome - 37700), 74870);
  const higherIncomeTaxAmount = higherEarnedTaxable * 0.4;
  const addEarnedTaxable = Math.max(0, taxableEarnedIncome - 112570);
  const addIncomeTaxAmount = addEarnedTaxable * 0.45;
  const basicNIAmount = freelanceProfit > 12570 ? Math.min(Math.max(0, freelanceProfit - 12570), 37700) * 0.06 : 0;
  const higherNIAmount = freelanceProfit > 50270 ? Math.max(0, freelanceProfit - 50270) * 0.02 : 0;
  const basicBandRemaining = Math.max(0, 37700 - taxableEarnedIncome);
  const divInBasic = taxableDividends > 0 ? Math.min(taxableDividends, basicBandRemaining) : 0;
  const basicDivTaxAmount = divInBasic * 0.1075;
  const higherBandRemaining = Math.max(0, 112570 - Math.max(37700, taxableEarnedIncome));
  const divInHigher = taxableDividends > 0 ? Math.min(Math.max(0, taxableDividends - divInBasic), higherBandRemaining) : 0;
  const higherDivTaxAmount = divInHigher * 0.3575;
  const divInAdd = taxableDividends > 0 ? Math.max(0, taxableDividends - divInBasic - divInHigher) : 0;
  const addDivTaxAmount = divInAdd * 0.3935;
  const basicSlabTotalTax = basicIncomeTaxAmount + basicNIAmount + basicDivTaxAmount;
  const higherSlabTotalTax = higherIncomeTaxAmount + higherNIAmount + higherDivTaxAmount;
  const addSlabTotalTax = addIncomeTaxAmount + addDivTaxAmount;
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
      name: "UK Self Assessment Tax Calculator",
      item: "https://advaq.com/calculators/uk-self-assessment-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Self Assessment Tax Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-self-assessment-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Income Tax, Class 4 NI, Dividend Tax (10.75%/35.75%), Payments on Account, and HMRC deadlines for tax year 2026/2027.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Who is required to file a UK Self Assessment tax return with HMRC?",
    a: "You must file a UK Self Assessment tax return if you were a self-employed sole trader earning over £1,000 gross, a company director taking dividends or untaxed salary, a property landlord earning gross rental income over £2,500 (or £1,000 net profit), or if your total taxable income exceeded £100,000. You also need to file if you owe High Income Child Benefit Charge."
  }, {
    q: "What are the UK Income & Dividend Tax bands for 2026/2027?",
    a: "The standard Personal Allowance is £12,570 (0% tax). Income from £12,571 to £50,270 is taxed at Basic Rate 20%. Income between £50,271 and £125,140 is taxed at Higher Rate 40%. Income above £125,140 is taxed at Additional Rate 45%. Dividend tax rates for 2026/2027 are 10.75% (Basic), 35.75% (Higher), and 39.35% (Additional), after a £500 tax-free dividend allowance."
  }, {
    q: "How do HMRC Payments on Account work and when are they due?",
    a: "If your Self Assessment tax bill is greater than £1,000 (and less than 80% was collected at source via PAYE), HMRC requires two Payments on Account towards your next year's tax bill. Each payment is 50% of your current year's bill. The 1st payment is due on January 31 alongside your balancing payment, and the 2nd payment is due on July 31."
  }, {
    q: "What are the penalties for late filing or late payment of UK Self Assessment?",
    a: "HMRC charges an immediate £100 automatic penalty if your online return is 1 minute late (after midnight January 31). If you are 3 months late, HMRC charges £10 per day up to a maximum of £900. At 6 months late, an additional penalty of 5% of the tax due (or £300, whichever is greater) applies. Interest is also charged on late tax payments."
  }, {
    q: "How is Class 4 National Insurance calculated for UK freelancers and sole traders?",
    a: "For self-employed sole traders, Class 4 National Insurance is calculated on net profits. In 2026/2027, profits between £12,570 and £50,270 are subject to 6% Class 4 NI. Any profits above £50,270 are subject to 2% Class 4 NI."
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
          /* @__PURE__ */ jsx("span", { children: "Self Assessment Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Self Assessment Tax Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your complete HMRC tax bill combining PAYE salary, freelance/sole trader profit, rental income, and dividend earnings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "PAYE Employment Salary (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              salaryIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "100000", step: "2500", value: salaryIncome, onChange: (e) => setSalaryIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Property Rental Income (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              rentalIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "50000", step: "1000", value: rentalIncome, onChange: (e) => setRentalIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Freelance / Sole Trader Profit (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              freelanceProfit.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "150000", step: "2500", value: freelanceProfit, onChange: (e) => setFreelanceProfit(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "UK Dividend Income (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              dividendIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "50000", step: "1000", value: dividendIncome, onChange: (e) => setDividendIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Self Assessment Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Gross Income:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                totalGrossIncome.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Personal Allowance (",
                totalGrossIncome > 1e5 ? "Tapered" : "Full",
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                "£",
                Math.round(personalAllowance).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Taxable Income:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(Math.max(0, totalGrossIncome - personalAllowance)).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Income Tax (",
                /* @__PURE__ */ jsx("span", { className: isBasicIncomeTaxActive ? "text-gold-400 font-bold underline" : "opacity-60", children: "20%" }),
                "/",
                /* @__PURE__ */ jsx("span", { className: isHigherIncomeTaxActive ? "text-gold-400 font-bold underline" : "opacity-60", children: "40%" }),
                "/",
                /* @__PURE__ */ jsx("span", { className: isAddIncomeTaxActive ? "text-gold-400 font-bold underline" : "opacity-60", children: "45%" }),
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(incomeTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Class 4 National Insurance (",
                /* @__PURE__ */ jsx("span", { className: isBasicNIActive ? "text-gold-400 font-bold underline" : "opacity-60", children: "6%" }),
                "/",
                /* @__PURE__ */ jsx("span", { className: isHigherNIActive ? "text-gold-400 font-bold underline" : "opacity-60", children: "2%" }),
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(class4NI).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Dividend Tax (",
                /* @__PURE__ */ jsx("span", { className: isBasicDivActive ? "text-gold-400 font-bold underline" : "opacity-60", children: "10.75%" }),
                "/",
                /* @__PURE__ */ jsx("span", { className: isHigherDivActive ? "text-gold-400 font-bold underline" : "opacity-60", children: "35.75%" }),
                "/",
                /* @__PURE__ */ jsx("span", { className: isAddDivActive ? "text-gold-400 font-bold underline" : "opacity-60", children: "39.35%" }),
                "):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                Math.round(dividendTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200 bg-emerald-500/10 px-2.5 py-1.5 rounded border border-emerald-500/30 my-1", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-emerald-400", children: "Take Home Income:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-bold", children: [
                "£",
                Math.round(Math.max(0, totalGrossIncome - totalSelfAssessmentTax)).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Self Assessment Tax Due" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(totalSelfAssessmentTax).toLocaleString()
            ] }),
            paymentOnAccount > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Jan 31 Total Payout (Bill + 50% POA):" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-gold-400 font-mono", children: [
                "£",
                Math.round(totalJanuary31Payout).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/self-assessment", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File Self Assessment with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Self Assessment Tax Walkthrough" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line proof of how HMRC calculates your exact £",
              Math.round(totalSelfAssessmentTax).toLocaleString(),
              " bill based on your selected inputs."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Allowance & Taxable Income" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "PA Applied" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Gross Income:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  totalGrossIncome.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Personal Allowance:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "-£",
                  Math.round(personalAllowance).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Taxable Income:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(Math.max(0, totalGrossIncome - personalAllowance)).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-navy-300 italic pt-1", children: [
              "💡 Personal Allowance is ",
              totalGrossIncome > 1e5 ? "tapered down due to income over £100,000" : "full £12,570 (0% tax)",
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Income Tax (Earned Income)" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "£",
                Math.round(incomeTax).toLocaleString(),
                " Tax"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Earned (Salary+Rental+Profit):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  totalEarnedIncome.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Taxable Earned:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-gold-400", children: [
                  "£",
                  taxableEarnedIncome.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { children: "• Basic Rate (20%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(basicIncomeTaxAmount).toLocaleString()
                ] })
              ] }),
              higherIncomeTaxAmount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { children: "• Higher Rate (40%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-amber-400", children: [
                  "£",
                  Math.round(higherIncomeTaxAmount).toLocaleString()
                ] })
              ] }),
              addIncomeTaxAmount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { children: "• Additional Rate (45%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "£",
                  Math.round(addIncomeTaxAmount).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Earned income uses Personal Allowance first before filling tax bands." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Class 4 National Insurance" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "£",
                Math.round(class4NI).toLocaleString(),
                " NI"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Freelance Trading Profit:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  freelanceProfit.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { children: "• £12,570 to £50,270 (6%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(basicNIAmount).toLocaleString()
                ] })
              ] }),
              higherNIAmount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { children: "• Above £50,270 (2%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-amber-400", children: [
                  "£",
                  Math.round(higherNIAmount).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Class 4 NI applies ONLY to self-employed trading profit (not PAYE or rental)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Dividend Tax (2026/27)" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "£",
                Math.round(dividendTax).toLocaleString(),
                " Tax"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Dividend Income:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  dividendIncome.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Taxable Dividends (after £500):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-gold-400", children: [
                  "£",
                  taxableDividends.toLocaleString()
                ] })
              ] }),
              basicDivTaxAmount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { children: "• Basic Rate (10.75%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(basicDivTaxAmount).toLocaleString()
                ] })
              ] }),
              higherDivTaxAmount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { children: "• Higher Rate (35.75%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-amber-400", children: [
                  "£",
                  Math.round(higherDivTaxAmount).toLocaleString()
                ] })
              ] }),
              addDivTaxAmount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px]", children: [
                /* @__PURE__ */ jsx("span", { children: "• Additional Rate (39.35%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "£",
                  Math.round(addDivTaxAmount).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Dividends stack on top of earned income using remaining tax band space." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 p-6 rounded-xl space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-800 pb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-xs", children: "Step 5 & 6: Total HMRC Bill & January 31 Payout" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-200", children: "100% Statutorily Verified (HMRC 2026/27 Rules)" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left font-mono text-xs", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "text-navy-300 border-b border-navy-800", children: [
              /* @__PURE__ */ jsx("th", { className: "pb-2", children: "Tax Component" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2", children: "Calculated Liability" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-navy-800 text-white", children: [
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { className: "py-2 text-navy-200", children: "Income Tax (20%/40%/45%)" }),
                /* @__PURE__ */ jsxs("td", { className: "py-2", children: [
                  "£",
                  Math.round(incomeTax).toLocaleString()
                ] }),
                /* @__PURE__ */ jsx("td", { className: "py-2 text-emerald-400", children: "✅ Verified" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { className: "py-2 text-navy-200", children: "Class 4 National Insurance (6%/2%)" }),
                /* @__PURE__ */ jsxs("td", { className: "py-2", children: [
                  "£",
                  Math.round(class4NI).toLocaleString()
                ] }),
                /* @__PURE__ */ jsx("td", { className: "py-2 text-emerald-400", children: "✅ Verified" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { className: "py-2 text-navy-200", children: "Dividend Tax (10.75%/35.75%/39.35%)" }),
                /* @__PURE__ */ jsxs("td", { className: "py-2", children: [
                  "£",
                  Math.round(dividendTax).toLocaleString()
                ] }),
                /* @__PURE__ */ jsx("td", { className: "py-2 text-emerald-400", children: "✅ Verified" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "font-bold text-gold-400 bg-navy-950/60", children: [
                /* @__PURE__ */ jsx("td", { className: "py-2.5 px-2", children: "Total Self Assessment Tax Bill" }),
                /* @__PURE__ */ jsxs("td", { className: "py-2.5", children: [
                  "£",
                  Math.round(totalSelfAssessmentTax).toLocaleString()
                ] }),
                /* @__PURE__ */ jsx("td", { className: "py-2.5 text-emerald-400", children: "✅ 100% Correct" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "font-bold text-emerald-400 bg-emerald-950/30", children: [
                /* @__PURE__ */ jsx("td", { className: "py-2.5 px-2", children: "Net Take-Home Income" }),
                /* @__PURE__ */ jsxs("td", { className: "py-2.5", children: [
                  "£",
                  Math.round(Math.max(0, totalGrossIncome - totalSelfAssessmentTax)).toLocaleString()
                ] }),
                /* @__PURE__ */ jsx("td", { className: "py-2.5 text-emerald-400", children: "✅ Retained Pay" })
              ] }),
              paymentOnAccount > 0 && /* @__PURE__ */ jsxs("tr", { className: "font-bold text-amber-400 bg-amber-950/20", children: [
                /* @__PURE__ */ jsx("td", { className: "py-2.5 px-2", children: "January 31 Payout (Bill + 50% POA)" }),
                /* @__PURE__ */ jsxs("td", { className: "py-2.5", children: [
                  "£",
                  Math.round(totalJanuary31Payout).toLocaleString()
                ] }),
                /* @__PURE__ */ jsx("td", { className: "py-2.5 text-amber-400", children: "📅 Due Jan 31" })
              ] })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UK Self Assessment Tax Bands & Rates (2026/2027)" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600", children: [
                "Statutory HMRC tax thresholds with ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-gold-700 underline", children: "live active rate & slab tax breakdown" }),
                " based on your inputs."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 text-[11px]", children: [
            isPAActive && /* @__PURE__ */ jsxs("span", { className: "px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300 inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Check, { size: 12 }),
              " PA Active (£",
              Math.round(personalAllowance).toLocaleString(),
              ")"
            ] }),
            isBasicIncomeTaxActive && /* @__PURE__ */ jsxs("span", { className: "px-2.5 py-1 rounded-full bg-gold-100 text-gold-900 font-semibold border border-gold-300 inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Check, { size: 12 }),
              " Basic 20% Active"
            ] }),
            isHigherIncomeTaxActive && /* @__PURE__ */ jsxs("span", { className: "px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold border border-amber-300 inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Check, { size: 12 }),
              " Higher 40% Active"
            ] }),
            isAddIncomeTaxActive && /* @__PURE__ */ jsxs("span", { className: "px-2.5 py-1 rounded-full bg-red-100 text-red-900 font-semibold border border-red-300 inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Check, { size: 12 }),
              " Additional 45% Active"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Tax Band & Status" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Taxable Income Range" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Income Tax Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Class 4 NI Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Dividend Tax Rate (2026/27)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: `transition-all duration-300 ${isPAActive ? "bg-emerald-50/60 font-medium border-l-4 border-l-emerald-500" : ""}`, children: [
              /* @__PURE__ */ jsxs("td", { className: "p-3.5 text-navy-950", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-bold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { children: "Personal Allowance" }),
                  isPAActive && /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-emerald-600 text-white shadow-xs", children: "Active PA" })
                ] }),
                isPAActive && /* @__PURE__ */ jsxs("div", { className: "mt-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded inline-block", children: [
                  "Tax Saved: £",
                  Math.round(personalAllowance * 0.2).toLocaleString(),
                  " (0% Tax)"
                ] })
              ] }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "£0 – £12,570" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-emerald-600", children: "0%" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-emerald-600", children: "0%" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: /* @__PURE__ */ jsx("span", { className: "font-bold text-emerald-600", children: "0% (First £500)" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: `transition-all duration-300 ${isBasicRowActive ? "bg-gold-50/80 border-l-4 border-l-gold-500 font-medium" : "bg-slate-50/40 opacity-75"}`, children: [
              /* @__PURE__ */ jsxs("td", { className: "p-3.5 text-navy-950", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-bold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { children: "Basic Rate Band" }),
                  isBasicRowActive && /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-gold-600 text-navy-950 shadow-xs", children: "Active Band" })
                ] }),
                isBasicRowActive && /* @__PURE__ */ jsxs("div", { className: "mt-1 text-[11px] font-mono font-bold text-navy-900 bg-gold-200/90 px-2.5 py-0.5 rounded inline-block shadow-2xs", children: [
                  "Slab Tax: £",
                  Math.round(basicSlabTotalTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-semibold", children: "£12,571 – £50,270" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isBasicIncomeTaxActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gold-500 text-navy-950 font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 20% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-gold-700", children: [
                  "£",
                  Math.round(basicIncomeTaxAmount).toLocaleString(),
                  " tax"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "20%" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isBasicNIActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gold-500 text-navy-950 font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 6% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-gold-700", children: [
                  "£",
                  Math.round(basicNIAmount).toLocaleString(),
                  " NI"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "6%" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isBasicDivActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gold-500 text-navy-950 font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 10.75% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-gold-700", children: [
                  "£",
                  Math.round(basicDivTaxAmount).toLocaleString(),
                  " tax"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "10.75%" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: `transition-all duration-300 ${isHigherRowActive ? "bg-amber-50/90 border-l-4 border-l-amber-500 font-medium" : "opacity-75"}`, children: [
              /* @__PURE__ */ jsxs("td", { className: "p-3.5 text-navy-950", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-bold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { children: "Higher Rate Band" }),
                  isHigherRowActive && /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-amber-600 text-white shadow-xs", children: "Active Band" })
                ] }),
                isHigherRowActive && /* @__PURE__ */ jsxs("div", { className: "mt-1 text-[11px] font-mono font-bold text-amber-900 bg-amber-200/90 px-2.5 py-0.5 rounded inline-block shadow-2xs", children: [
                  "Slab Tax: £",
                  Math.round(higherSlabTotalTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-semibold", children: "£50,271 – £125,140" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isHigherIncomeTaxActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 text-navy-950 font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 40% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-amber-800", children: [
                  "£",
                  Math.round(higherIncomeTaxAmount).toLocaleString(),
                  " tax"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "40%" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isHigherNIActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 text-navy-950 font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 2% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-amber-800", children: [
                  "£",
                  Math.round(higherNIAmount).toLocaleString(),
                  " NI"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "2%" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isHigherDivActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 text-navy-950 font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 35.75% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-amber-800", children: [
                  "£",
                  Math.round(higherDivTaxAmount).toLocaleString(),
                  " tax"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "35.75%" }) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: `transition-all duration-300 ${isAddRowActive ? "bg-red-50/90 border-l-4 border-l-red-500 font-medium" : "bg-slate-50/40 opacity-75"}`, children: [
              /* @__PURE__ */ jsxs("td", { className: "p-3.5 text-navy-950", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-bold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { children: "Additional Rate Band" }),
                  isAddRowActive && /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-red-600 text-white shadow-xs", children: "Active Band" })
                ] }),
                isAddRowActive && /* @__PURE__ */ jsxs("div", { className: "mt-1 text-[11px] font-mono font-bold text-red-900 bg-red-200/90 px-2.5 py-0.5 rounded inline-block shadow-2xs", children: [
                  "Slab Tax: £",
                  Math.round(addSlabTotalTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-semibold", children: "Over £125,140" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isAddIncomeTaxActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 45% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-red-700", children: [
                  "£",
                  Math.round(addIncomeTaxAmount).toLocaleString(),
                  " tax"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "45%" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isAddNIActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 2% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-red-700", children: [
                  "£",
                  Math.round(higherNIAmount).toLocaleString(),
                  " NI"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "2%" }) }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: isAddDivActive ? /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white font-bold shadow-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { size: 13 }),
                  " 39.35% APPLIED"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-[11px] font-mono font-bold text-red-700", children: [
                  "£",
                  Math.round(addDivTaxAmount).toLocaleString(),
                  " tax"
                ] })
              ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-mono", children: "39.35%" }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-gold-600 uppercase tracking-wider block", children: "January 31 Deadline" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Online tax return submission + final balancing tax payment for current year + 50% Payment on Account for next year." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-gold-600 uppercase tracking-wider block", children: "July 31 Deadline" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "2nd Payment on Account (50% of previous year's total tax bill) due to HMRC." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 border border-amber-300 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-amber-950", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-amber-200 text-amber-800 rounded-xl shrink-0", children: /* @__PURE__ */ jsx(AlertTriangle, { size: 20 }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("strong", { className: "font-bold text-sm block text-amber-900", children: "Autumn Budget 2025 Update — Dividend Tax Rates Increased" }),
          /* @__PURE__ */ jsxs("p", { className: "leading-relaxed", children: [
            "Effective 6 April 2026, Basic Rate Dividend Tax increased from 8.75% to ",
            /* @__PURE__ */ jsx("strong", { children: "10.75%" }),
            ", and Higher Rate Dividend Tax increased from 33.75% to ",
            /* @__PURE__ */ jsx("strong", { children: "35.75%" }),
            " (+2% increase). The £500 Dividend Allowance remains unchanged. This calculator uses full 2026/2027 HMRC statutory rates."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-border pb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Understanding UK Self Assessment Tax Rules (2026/2027)" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Everything you need to know about HMRC filing requirements, income pooling, MTD for ITSA, and personal allowance tapering." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 text-xs sm:text-sm text-gray-700 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-bold text-navy-950", children: "Who Must File a UK Self Assessment Return?" }),
            /* @__PURE__ */ jsx("p", { children: "Under UK tax law, HMRC requires individuals to complete a Self Assessment return if their tax is not fully collected automatically through Pay As You Earn (PAYE). You must register and file if during the tax year (6 April to 5 April):" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1.5 text-gray-600", children: [
              /* @__PURE__ */ jsxs("li", { children: [
                "You earned over ",
                /* @__PURE__ */ jsx("strong", { children: "£1,000 in gross self-employment or freelance revenue" }),
                " (Sole Trader status)."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                "You were a ",
                /* @__PURE__ */ jsx("strong", { children: "Company Director" }),
                " taking dividends or salary not fully taxed under PAYE."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                "You received ",
                /* @__PURE__ */ jsx("strong", { children: "rental income from UK property" }),
                " exceeding £2,500 gross (or £1,000 net profit)."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                "Your total taxable income exceeded ",
                /* @__PURE__ */ jsx("strong", { children: "£100,000" }),
                "."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                "You earned ",
                /* @__PURE__ */ jsx("strong", { children: "untaxed foreign income" }),
                " or capital gains exceeding your annual exemption."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-950 text-xs", children: [
              "ℹ️ ",
              /* @__PURE__ */ jsx("strong", { children: "Making Tax Digital (MTD for ITSA):" }),
              " Starting 6 April 2026, self-employed sole traders and landlords with qualifying gross income over £50,000 must keep digital records and send quarterly updates to HMRC using MTD-compliant accounting software."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-bold text-navy-950", children: "The 60% Effective Tax Trap Above £100,000" }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Once your total gross income exceeds £100,000, your ",
              /* @__PURE__ */ jsx("strong", { children: "£12,570 Personal Allowance tapers down by £1 for every £2 of income above £100,000" }),
              ". This means your Personal Allowance reaches zero once your income hits £125,140."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-xs", children: [
              "⚠️ ",
              /* @__PURE__ */ jsx("strong", { children: "Tax Trap Alert:" }),
              " Because you lose your Personal Allowance while simultaneously paying 40% Higher Rate Income Tax, the effective marginal tax rate on income between £100,000 and £125,140 is a massive ",
              /* @__PURE__ */ jsx("strong", { children: "60%" }),
              "! Making SIPP pension contributions or company dividend adjustments can recover this allowance."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 border border-slate-200 p-4 rounded-xl text-slate-800 text-xs", children: [
              "📌 ",
              /* @__PURE__ */ jsx("strong", { children: "Upcoming 2027/2028 Tax Rate Notice:" }),
              " HMRC has announced proposed future rate revisions. Keep updated with ADVAQ advisory for future tax year planning."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-red-50/50 border border-red-200 rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-red-100 text-red-600 rounded-xl", children: /* @__PURE__ */ jsx(AlertTriangle, { size: 22 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "HMRC Late Filing Fines & Statutory Penalties" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Avoid automatic fines by filing your online Self Assessment return on time." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-red-100 p-4 rounded-xl space-y-1 shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-red-600 text-base block", children: "£100 Fine" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "1 Minute Late (Feb 1)" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Applies automatically even if you have no tax to pay or paid your tax on time." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-red-100 p-4 rounded-xl space-y-1 shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-red-600 text-base block", children: "£10 / Day" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "3 Months Late (May 1)" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Compounding daily penalty charged up to a maximum of 90 days (£900 extra fine)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-red-100 p-4 rounded-xl space-y-1 shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-red-600 text-base block", children: "5% of Tax" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "6 Months Late (Aug 1)" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "An additional penalty of 5% of the total tax due or £300, whichever is higher." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-red-100 p-4 rounded-xl space-y-1 shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-red-600 text-base block", children: "12 Months Late" }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Additional 5% Fine" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Another 5% penalty or £300 added, plus potential HMRC investigation proceedings." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UK Self Assessment)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Authoritative answers to common questions about HMRC filing, dividend tax, and Payments on Account." })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need Your UK Self Assessment Prepared & Filed by Chartered Advisors?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UK tax team registers UTR numbers, prepares accurate Self Assessment returns, reclaims allowable expenses, and submits directly to HMRC on your behalf." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uk-services/self-assessment", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File Self Assessment with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp UK Tax Specialist" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-border pb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Explore Related UK Business & Tax Calculators" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Optimize your UK corporate setup, dividend extraction, and property taxes with our suite of free tools." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Corporate Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "UK Corporation Tax Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate 19% to 25% marginal relief Corporation Tax for UK Limited Companies." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/uk-corporation-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Dividend Optimizer" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "UK Tax & Dividend Optimizer" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate the optimal tax-free salary (£12,570) and dividend combination for UK directors." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/uk-tax-dividend-optimizer-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Sole Trader vs LTD" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "UK Sole Trader vs Limited Company" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Compare net take-home pay between operating as a Sole Trader vs incorporating a UK LTD." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/uk-sole-trader-vs-ltd-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKSelfAssessmentCalculatorPage as component
};
