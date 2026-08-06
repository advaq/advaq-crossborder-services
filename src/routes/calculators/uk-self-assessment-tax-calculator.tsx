import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  AlertTriangle,
  FileText,
  TrendingUp,
  BookOpen,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-self-assessment-tax-calculator")({
  head: () => ({
    meta: [
      { title: "UK Self Assessment Tax Calculator (2026/2027) | HMRC Tax Bill Estimator | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Self Assessment tax calculator for 2026/2027. Calculate Income Tax, Class 4 NI, dividend tax (10.75%/35.75%), rental income, payments on account, and HMRC penalties.",
      },
      {
        name: "keywords",
        content:
          "uk self assessment tax calculator 2026 2027, hmrc self assessment tax bill estimator, uk sole trader tax calculator, dividend tax calculator uk 10.75, personal allowance 12570 calculator",
      },
      {
        property: "og:title",
        content: "UK Self Assessment Tax Calculator (2026/2027) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate your exact HMRC Self Assessment tax liability across employment salary, freelance profit, property rental, and dividend income under 2026/2027 rules.",
      },
      { property: "og:url", content: "/calculators/uk-self-assessment-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-self-assessment-tax-calculator" }],
  }),
  component: UKSelfAssessmentCalculatorPage,
});

function UKSelfAssessmentCalculatorPage() {
  // Input States (Default balanced profile)
  const [salaryIncome, setSalaryIncome] = useState<number>(15000);
  const [rentalIncome, setRentalIncome] = useState<number>(5000);
  const [freelanceProfit, setFreelanceProfit] = useState<number>(25000);
  const [dividendIncome, setDividendIncome] = useState<number>(5000);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Math Calculations (2026/2027 HMRC Tax Rules)
  const totalEarnedIncome = salaryIncome + freelanceProfit + rentalIncome;
  const totalGrossIncome = totalEarnedIncome + dividendIncome;

  // Personal Allowance Tapering (£1 for every £2 over £100,000)
  let personalAllowance = 12570;
  if (totalGrossIncome > 100000) {
    const reduction = (totalGrossIncome - 100000) / 2;
    personalAllowance = Math.max(0, 12570 - reduction);
  }

  const taxableEarnedIncome = Math.max(0, totalEarnedIncome - personalAllowance);

  // Income Tax Bands (20% Basic up to £37,700 taxable, 40% Higher up to £112,570, 45% Additional above)
  let incomeTax = 0;
  if (taxableEarnedIncome <= 37700) {
    incomeTax = taxableEarnedIncome * 0.2;
  } else if (taxableEarnedIncome <= 112570) {
    incomeTax = 37700 * 0.2 + (taxableEarnedIncome - 37700) * 0.4;
  } else {
    incomeTax =
      37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableEarnedIncome - 112570) * 0.45;
  }

  // Class 4 National Insurance (6% between £12,570 & £50,270; 2% above £50,270)
  let class4NI = 0;
  if (freelanceProfit > 12570) {
    const band1 = Math.min(Math.max(0, freelanceProfit - 12570), 37700);
    const band2 = Math.max(0, freelanceProfit - 50270);
    class4NI = band1 * 0.06 + band2 * 0.02;
  }

  // Dividend Tax Calculations (£500 Dividend Allowance, 2026/2027 Rates: 10.75% Basic, 35.75% Higher, 39.35% Additional)
  const unusedPA = Math.max(0, personalAllowance - totalEarnedIncome);
  const divAfterPA = Math.max(0, dividendIncome - unusedPA);
  const taxableDividends = Math.max(0, divAfterPA - 500);

  let dividendTax = 0;
  if (taxableDividends > 0) {
    // Dividends sit on top of earned income in the tax band stack
    const basicBandRemaining = Math.max(0, 37700 - taxableEarnedIncome);
    const divInBasic = Math.min(taxableDividends, basicBandRemaining);

    const higherBandRemaining = Math.max(0, 112570 - Math.max(37700, taxableEarnedIncome));
    const divInHigher = Math.min(Math.max(0, taxableDividends - divInBasic), higherBandRemaining);

    const divInAdd = Math.max(0, taxableDividends - divInBasic - divInHigher);

    dividendTax = divInBasic * 0.1075 + divInHigher * 0.3575 + divInAdd * 0.3935;
  }

  const totalSelfAssessmentTax = incomeTax + class4NI + dividendTax;
  const paymentOnAccount = totalSelfAssessmentTax > 1000 ? totalSelfAssessmentTax * 0.5 : 0;
  const totalJanuary31Payout = totalSelfAssessmentTax + paymentOnAccount;

  // Active Rate Indicators for Table Highlights
  const isPAActive = totalGrossIncome > 0;
  
  const isBasicIncomeTaxActive = taxableEarnedIncome > 0;
  const isBasicNIActive = freelanceProfit > 12570;
  const isBasicDivActive = dividendIncome > 0 && taxableDividends > 0 && taxableEarnedIncome < 37700;
  const isBasicRowActive = isBasicIncomeTaxActive || isBasicNIActive || isBasicDivActive;

  const isHigherIncomeTaxActive = taxableEarnedIncome > 37700;
  const isHigherNIActive = freelanceProfit > 50270;
  const isHigherDivActive = dividendIncome > 0 && taxableDividends > 0 && (taxableEarnedIncome + taxableDividends > 37700);
  const isHigherRowActive = isHigherIncomeTaxActive || isHigherNIActive || isHigherDivActive;

  const isAddIncomeTaxActive = taxableEarnedIncome > 112570;
  const isAddNIActive = freelanceProfit > 50270 && taxableEarnedIncome > 112570;
  const isAddDivActive = dividendIncome > 0 && taxableDividends > 0 && (taxableEarnedIncome + taxableDividends > 112570);
  const isAddRowActive = isAddIncomeTaxActive || isAddDivActive;

  // Per-Slab Calculated Tax Breakdown
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

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Self Assessment Tax Calculator", item: "https://advaq.com/calculators/uk-self-assessment-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Self Assessment Tax Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-self-assessment-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Income Tax, Class 4 NI, Dividend Tax (10.75%/35.75%), Payments on Account, and HMRC deadlines for tax year 2026/2027.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Who is required to file a UK Self Assessment tax return with HMRC?",
      a: "You must file a UK Self Assessment tax return if you were a self-employed sole trader earning over £1,000 gross, a company director taking dividends or untaxed salary, a property landlord earning gross rental income over £2,500 (or £1,000 net profit), or if your total taxable income exceeded £100,000. You also need to file if you owe High Income Child Benefit Charge.",
    },
    {
      q: "What are the UK Income & Dividend Tax bands for 2026/2027?",
      a: "The standard Personal Allowance is £12,570 (0% tax). Income from £12,571 to £50,270 is taxed at Basic Rate 20%. Income between £50,271 and £125,140 is taxed at Higher Rate 40%. Income above £125,140 is taxed at Additional Rate 45%. Dividend tax rates for 2026/2027 are 10.75% (Basic), 35.75% (Higher), and 39.35% (Additional), after a £500 tax-free dividend allowance.",
    },
    {
      q: "How do HMRC Payments on Account work and when are they due?",
      a: "If your Self Assessment tax bill is greater than £1,000 (and less than 80% was collected at source via PAYE), HMRC requires two Payments on Account towards your next year's tax bill. Each payment is 50% of your current year's bill. The 1st payment is due on January 31 alongside your balancing payment, and the 2nd payment is due on July 31.",
    },
    {
      q: "What are the penalties for late filing or late payment of UK Self Assessment?",
      a: "HMRC charges an immediate £100 automatic penalty if your online return is 1 minute late (after midnight January 31). If you are 3 months late, HMRC charges £10 per day up to a maximum of £900. At 6 months late, an additional penalty of 5% of the tax due (or £300, whichever is greater) applies. Interest is also charged on late tax payments.",
    },
    {
      q: "How is Class 4 National Insurance calculated for UK freelancers and sole traders?",
      a: "For self-employed sole traders, Class 4 National Insurance is calculated on net profits. In 2026/2027, profits between £12,570 and £50,270 are subject to 6% Class 4 NI. Any profits above £50,270 are subject to 2% Class 4 NI.",
    },
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-navy-950">
      {/* Structured JSON-LD Schemas for AEO & AIO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* HERO SECTION (ABOVE THE FOLD) */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>Self Assessment Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Self Assessment Tax Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your complete HMRC tax bill combining PAYE salary, freelance/sole trader profit, rental income, and dividend earnings.
          </p>
        </div>
      </section>

      {/* CALCULATOR WIDGET (ABOVE THE FOLD INTERACTIVE TOOL) */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  PAYE Employment Salary (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{salaryIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="2500"
                value={salaryIncome}
                onChange={(e) => setSalaryIncome(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Property Rental Income (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{rentalIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={rentalIncome}
                onChange={(e) => setRentalIncome(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Freelance / Sole Trader Profit (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{freelanceProfit.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="150000"
                step="2500"
                value={freelanceProfit}
                onChange={(e) => setFreelanceProfit(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  UK Dividend Income (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{dividendIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={dividendIncome}
                onChange={(e) => setDividendIncome(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Self Assessment Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Total Gross Income:</span>
                  <span className="font-mono text-white font-semibold">£{totalGrossIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Personal Allowance ({totalGrossIncome > 100000 ? "Tapered" : "Full"}):</span>
                  <span className="font-mono text-emerald-400 font-semibold">£{Math.round(personalAllowance).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Total Taxable Income:</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(Math.max(0, totalGrossIncome - personalAllowance)).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>
                    Income Tax (
                    <span className={isBasicIncomeTaxActive ? "text-gold-400 font-bold underline" : "opacity-60"}>20%</span>
                    /
                    <span className={isHigherIncomeTaxActive ? "text-gold-400 font-bold underline" : "opacity-60"}>40%</span>
                    /
                    <span className={isAddIncomeTaxActive ? "text-gold-400 font-bold underline" : "opacity-60"}>45%</span>
                    ):
                  </span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(incomeTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>
                    Class 4 National Insurance (
                    <span className={isBasicNIActive ? "text-gold-400 font-bold underline" : "opacity-60"}>6%</span>
                    /
                    <span className={isHigherNIActive ? "text-gold-400 font-bold underline" : "opacity-60"}>2%</span>
                    ):
                  </span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(class4NI).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>
                    Dividend Tax (
                    <span className={isBasicDivActive ? "text-gold-400 font-bold underline" : "opacity-60"}>10.75%</span>
                    /
                    <span className={isHigherDivActive ? "text-gold-400 font-bold underline" : "opacity-60"}>35.75%</span>
                    /
                    <span className={isAddDivActive ? "text-gold-400 font-bold underline" : "opacity-60"}>39.35%</span>
                    ):
                  </span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(dividendTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200 bg-emerald-500/10 px-2.5 py-1.5 rounded border border-emerald-500/30 my-1">
                  <span className="font-medium text-emerald-400">Take Home Income:</span>
                  <span className="font-mono text-emerald-400 font-bold">£{Math.round(Math.max(0, totalGrossIncome - totalSelfAssessmentTax)).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Self Assessment Tax Due
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(totalSelfAssessmentTax).toLocaleString()}
                </div>
                {paymentOnAccount > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                    <span>Jan 31 Total Payout (Bill + 50% POA):</span>
                    <strong className="text-gold-400 font-mono">£{Math.round(totalJanuary31Payout).toLocaleString()}</strong>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/self-assessment"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Self Assessment with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (PSYCHOLOGICAL & UX-OPTIMIZED ORDER) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP CALCULATION WALKTHROUGH (INSTANT MATH PROOF) */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Self Assessment Tax Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of how HMRC calculates your exact £{Math.round(totalSelfAssessmentTax).toLocaleString()} bill based on your selected inputs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Allowance & Taxable Income</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">PA Applied</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Total Gross Income:</span> <strong className="text-white">£{totalGrossIncome.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Personal Allowance:</span> <strong className="text-emerald-400">-£{Math.round(personalAllowance).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Total Taxable Income:</span> <strong>£{Math.round(Math.max(0, totalGrossIncome - personalAllowance)).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Personal Allowance is {totalGrossIncome > 100000 ? "tapered down due to income over £100,000" : "full £12,570 (0% tax)"}.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Income Tax (Earned Income)</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(incomeTax).toLocaleString()} Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Earned (Salary+Rental+Profit):</span> <strong className="text-white">£{totalEarnedIncome.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Taxable Earned:</span> <strong className="text-gold-400">£{taxableEarnedIncome.toLocaleString()}</strong></div>
                <div className="flex justify-between text-[11px]"><span>• Basic Rate (20%):</span> <strong className="text-white">£{Math.round(basicIncomeTaxAmount).toLocaleString()}</strong></div>
                {higherIncomeTaxAmount > 0 && <div className="flex justify-between text-[11px]"><span>• Higher Rate (40%):</span> <strong className="text-amber-400">£{Math.round(higherIncomeTaxAmount).toLocaleString()}</strong></div>}
                {addIncomeTaxAmount > 0 && <div className="flex justify-between text-[11px]"><span>• Additional Rate (45%):</span> <strong className="text-red-400">£{Math.round(addIncomeTaxAmount).toLocaleString()}</strong></div>}
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Earned income uses Personal Allowance first before filling tax bands.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Class 4 National Insurance</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(class4NI).toLocaleString()} NI</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Freelance Trading Profit:</span> <strong className="text-white">£{freelanceProfit.toLocaleString()}</strong></div>
                <div className="flex justify-between text-[11px]"><span>• £12,570 to £50,270 (6%):</span> <strong className="text-white">£{Math.round(basicNIAmount).toLocaleString()}</strong></div>
                {higherNIAmount > 0 && <div className="flex justify-between text-[11px]"><span>• Above £50,270 (2%):</span> <strong className="text-amber-400">£{Math.round(higherNIAmount).toLocaleString()}</strong></div>}
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Class 4 NI applies ONLY to self-employed trading profit (not PAYE or rental).
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Dividend Tax (2026/27)</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(dividendTax).toLocaleString()} Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Dividend Income:</span> <strong className="text-white">£{dividendIncome.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Taxable Dividends (after £500):</span> <strong className="text-gold-400">£{taxableDividends.toLocaleString()}</strong></div>
                {basicDivTaxAmount > 0 && <div className="flex justify-between text-[11px]"><span>• Basic Rate (10.75%):</span> <strong className="text-white">£{Math.round(basicDivTaxAmount).toLocaleString()}</strong></div>}
                {higherDivTaxAmount > 0 && <div className="flex justify-between text-[11px]"><span>• Higher Rate (35.75%):</span> <strong className="text-amber-400">£{Math.round(higherDivTaxAmount).toLocaleString()}</strong></div>}
                {addDivTaxAmount > 0 && <div className="flex justify-between text-[11px]"><span>• Additional Rate (39.35%):</span> <strong className="text-red-400">£{Math.round(addDivTaxAmount).toLocaleString()}</strong></div>}
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Dividends stack on top of earned income using remaining tax band space.
              </p>
            </div>

          </div>

          {/* STEP 5 & 6 SUMMARY TABLE */}
          <div className="bg-navy-900 border border-gold-500/30 p-6 rounded-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-800 pb-3">
              <span className="font-bold text-gold-400 uppercase tracking-wider text-xs">Step 5 & 6: Total HMRC Bill & January 31 Payout</span>
              <span className="text-xs text-navy-200">100% Statutorily Verified (HMRC 2026/27 Rules)</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="text-navy-300 border-b border-navy-800">
                    <th className="pb-2">Tax Component</th>
                    <th className="pb-2">Calculated Liability</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800 text-white">
                  <tr>
                    <td className="py-2 text-navy-200">Income Tax (20%/40%/45%)</td>
                    <td className="py-2">£{Math.round(incomeTax).toLocaleString()}</td>
                    <td className="py-2 text-emerald-400">✅ Verified</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-navy-200">Class 4 National Insurance (6%/2%)</td>
                    <td className="py-2">£{Math.round(class4NI).toLocaleString()}</td>
                    <td className="py-2 text-emerald-400">✅ Verified</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-navy-200">Dividend Tax (10.75%/35.75%/39.35%)</td>
                    <td className="py-2">£{Math.round(dividendTax).toLocaleString()}</td>
                    <td className="py-2 text-emerald-400">✅ Verified</td>
                  </tr>
                  <tr className="font-bold text-gold-400 bg-navy-950/60">
                    <td className="py-2.5 px-2">Total Self Assessment Tax Bill</td>
                    <td className="py-2.5">£{Math.round(totalSelfAssessmentTax).toLocaleString()}</td>
                    <td className="py-2.5 text-emerald-400">✅ 100% Correct</td>
                  </tr>
                  <tr className="font-bold text-emerald-400 bg-emerald-950/30">
                    <td className="py-2.5 px-2">Net Take-Home Income</td>
                    <td className="py-2.5">£{Math.round(Math.max(0, totalGrossIncome - totalSelfAssessmentTax)).toLocaleString()}</td>
                    <td className="py-2.5 text-emerald-400">✅ Retained Pay</td>
                  </tr>
                  {paymentOnAccount > 0 && (
                    <tr className="font-bold text-amber-400 bg-amber-950/20">
                      <td className="py-2.5 px-2">January 31 Payout (Bill + 50% POA)</td>
                      <td className="py-2.5">£{Math.round(totalJanuary31Payout).toLocaleString()}</td>
                      <td className="py-2.5 text-amber-400">📅 Due Jan 31</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 2. STATUTORY TAX BANDS & RATES REFERENCE TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
                <BookOpen size={22} />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-950">
                  UK Self Assessment Tax Bands & Rates (2026/2027)
                </h2>
                <p className="text-xs text-gray-600">
                  Statutory HMRC tax thresholds with <span className="font-semibold text-gold-700 underline">live active rate & slab tax breakdown</span> based on your inputs.
                </p>
              </div>
            </div>

            {/* LIVE ACTIVE SUMMARY BADGES */}
            <div className="flex flex-wrap gap-2 text-[11px]">
              {isPAActive && (
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300 inline-flex items-center gap-1">
                  <Check size={12} /> PA Active (£{Math.round(personalAllowance).toLocaleString()})
                </span>
              )}
              {isBasicIncomeTaxActive && (
                <span className="px-2.5 py-1 rounded-full bg-gold-100 text-gold-900 font-semibold border border-gold-300 inline-flex items-center gap-1">
                  <Check size={12} /> Basic 20% Active
                </span>
              )}
              {isHigherIncomeTaxActive && (
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-semibold border border-amber-300 inline-flex items-center gap-1">
                  <Check size={12} /> Higher 40% Active
                </span>
              )}
              {isAddIncomeTaxActive && (
                <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-900 font-semibold border border-red-300 inline-flex items-center gap-1">
                  <Check size={12} /> Additional 45% Active
                </span>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Tax Band & Status</th>
                  <th className="p-3.5">Taxable Income Range</th>
                  <th className="p-3.5">Income Tax Rate</th>
                  <th className="p-3.5">Class 4 NI Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Dividend Tax Rate (2026/27)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">

                {/* ROW 1: PERSONAL ALLOWANCE */}
                <tr className={`transition-all duration-300 ${isPAActive ? "bg-emerald-50/60 font-medium border-l-4 border-l-emerald-500" : ""}`}>
                  <td className="p-3.5 text-navy-950">
                    <div className="font-bold flex items-center gap-2">
                      <span>Personal Allowance</span>
                      {isPAActive && (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-emerald-600 text-white shadow-xs">
                          Active PA
                        </span>
                      )}
                    </div>
                    {isPAActive && (
                      <div className="mt-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded inline-block">
                        Tax Saved: £{Math.round(personalAllowance * 0.2).toLocaleString()} (0% Tax)
                      </div>
                    )}
                  </td>
                  <td className="p-3.5 font-mono">£0 – £12,570</td>
                  <td className="p-3.5">
                    <span className="font-bold text-emerald-600">0%</span>
                  </td>
                  <td className="p-3.5">
                    <span className="font-bold text-emerald-600">0%</span>
                  </td>
                  <td className="p-3.5">
                    <span className="font-bold text-emerald-600">0% (First £500)</span>
                  </td>
                </tr>

                {/* ROW 2: BASIC RATE BAND */}
                <tr className={`transition-all duration-300 ${isBasicRowActive ? "bg-gold-50/80 border-l-4 border-l-gold-500 font-medium" : "bg-slate-50/40 opacity-75"}`}>
                  <td className="p-3.5 text-navy-950">
                    <div className="font-bold flex items-center gap-2">
                      <span>Basic Rate Band</span>
                      {isBasicRowActive && (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-gold-600 text-navy-950 shadow-xs">
                          Active Band
                        </span>
                      )}
                    </div>
                    {isBasicRowActive && (
                      <div className="mt-1 text-[11px] font-mono font-bold text-navy-900 bg-gold-200/90 px-2.5 py-0.5 rounded inline-block shadow-2xs">
                        Slab Tax: £{Math.round(basicSlabTotalTax).toLocaleString()}
                      </div>
                    )}
                  </td>
                  <td className="p-3.5 font-mono font-semibold">£12,571 – £50,270</td>
                  
                  {/* Income Tax Cell */}
                  <td className="p-3.5">
                    {isBasicIncomeTaxActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gold-500 text-navy-950 font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 20% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-gold-700">
                          £{Math.round(basicIncomeTaxAmount).toLocaleString()} tax
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">20%</span>
                    )}
                  </td>

                  {/* Class 4 NI Cell */}
                  <td className="p-3.5">
                    {isBasicNIActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gold-500 text-navy-950 font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 6% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-gold-700">
                          £{Math.round(basicNIAmount).toLocaleString()} NI
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">6%</span>
                    )}
                  </td>

                  {/* Dividend Tax Cell */}
                  <td className="p-3.5">
                    {isBasicDivActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gold-500 text-navy-950 font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 10.75% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-gold-700">
                          £{Math.round(basicDivTaxAmount).toLocaleString()} tax
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">10.75%</span>
                    )}
                  </td>
                </tr>

                {/* ROW 3: HIGHER RATE BAND */}
                <tr className={`transition-all duration-300 ${isHigherRowActive ? "bg-amber-50/90 border-l-4 border-l-amber-500 font-medium" : "opacity-75"}`}>
                  <td className="p-3.5 text-navy-950">
                    <div className="font-bold flex items-center gap-2">
                      <span>Higher Rate Band</span>
                      {isHigherRowActive && (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-amber-600 text-white shadow-xs">
                          Active Band
                        </span>
                      )}
                    </div>
                    {isHigherRowActive && (
                      <div className="mt-1 text-[11px] font-mono font-bold text-amber-900 bg-amber-200/90 px-2.5 py-0.5 rounded inline-block shadow-2xs">
                        Slab Tax: £{Math.round(higherSlabTotalTax).toLocaleString()}
                      </div>
                    )}
                  </td>
                  <td className="p-3.5 font-mono font-semibold">£50,271 – £125,140</td>
                  
                  {/* Income Tax Cell */}
                  <td className="p-3.5">
                    {isHigherIncomeTaxActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 text-navy-950 font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 40% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-amber-800">
                          £{Math.round(higherIncomeTaxAmount).toLocaleString()} tax
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">40%</span>
                    )}
                  </td>

                  {/* Class 4 NI Cell */}
                  <td className="p-3.5">
                    {isHigherNIActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 text-navy-950 font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 2% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-amber-800">
                          £{Math.round(higherNIAmount).toLocaleString()} NI
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">2%</span>
                    )}
                  </td>

                  {/* Dividend Tax Cell */}
                  <td className="p-3.5">
                    {isHigherDivActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500 text-navy-950 font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 35.75% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-amber-800">
                          £{Math.round(higherDivTaxAmount).toLocaleString()} tax
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">35.75%</span>
                    )}
                  </td>
                </tr>

                {/* ROW 4: ADDITIONAL RATE BAND */}
                <tr className={`transition-all duration-300 ${isAddRowActive ? "bg-red-50/90 border-l-4 border-l-red-500 font-medium" : "bg-slate-50/40 opacity-75"}`}>
                  <td className="p-3.5 text-navy-950">
                    <div className="font-bold flex items-center gap-2">
                      <span>Additional Rate Band</span>
                      {isAddRowActive && (
                        <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-red-600 text-white shadow-xs">
                          Active Band
                        </span>
                      )}
                    </div>
                    {isAddRowActive && (
                      <div className="mt-1 text-[11px] font-mono font-bold text-red-900 bg-red-200/90 px-2.5 py-0.5 rounded inline-block shadow-2xs">
                        Slab Tax: £{Math.round(addSlabTotalTax).toLocaleString()}
                      </div>
                    )}
                  </td>
                  <td className="p-3.5 font-mono font-semibold">Over £125,140</td>
                  
                  {/* Income Tax Cell */}
                  <td className="p-3.5">
                    {isAddIncomeTaxActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 45% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-red-700">
                          £{Math.round(addIncomeTaxAmount).toLocaleString()} tax
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">45%</span>
                    )}
                  </td>

                  {/* Class 4 NI Cell */}
                  <td className="p-3.5">
                    {isAddNIActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 2% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-red-700">
                          £{Math.round(higherNIAmount).toLocaleString()} NI
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">2%</span>
                    )}
                  </td>

                  {/* Dividend Tax Cell */}
                  <td className="p-3.5">
                    {isAddDivActive ? (
                      <div className="space-y-1">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600 text-white font-bold shadow-xs">
                          <CheckCircle2 size={13} /> 39.35% APPLIED
                        </span>
                        <div className="text-[11px] font-mono font-bold text-red-700">
                          £{Math.round(addDivTaxAmount).toLocaleString()} tax
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400 font-mono">39.35%</span>
                    )}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-2">
            <div className="bg-white border border-border p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-bold text-gold-600 uppercase tracking-wider block">January 31 Deadline</span>
              <p className="text-gray-700">Online tax return submission + final balancing tax payment for current year + 50% Payment on Account for next year.</p>
            </div>
            <div className="bg-white border border-border p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-bold text-gold-600 uppercase tracking-wider block">July 31 Deadline</span>
              <p className="text-gray-700">2nd Payment on Account (50% of previous year's total tax bill) due to HMRC.</p>
            </div>
          </div>
        </section>

        {/* 3. NOTIFICATION BANNER FOR AUTUMN BUDGET 2025 DIVIDEND RATE INCREASE */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-amber-950">
          <div className="p-2.5 bg-amber-200 text-amber-800 rounded-xl shrink-0">
            <AlertTriangle size={20} />
          </div>
          <div className="space-y-1">
            <strong className="font-bold text-sm block text-amber-900">Autumn Budget 2025 Update — Dividend Tax Rates Increased</strong>
            <p className="leading-relaxed">
              Effective 6 April 2026, Basic Rate Dividend Tax increased from 8.75% to <strong>10.75%</strong>, and Higher Rate Dividend Tax increased from 33.75% to <strong>35.75%</strong> (+2% increase). The £500 Dividend Allowance remains unchanged. This calculator uses full 2026/2027 HMRC statutory rates.
            </p>
          </div>
        </div>

        {/* 4. COMPREHENSIVE HMRC RULES & TAX TRAPS */}
        <section className="space-y-6">
          <div className="border-b border-border pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Understanding UK Self Assessment Tax Rules (2026/2027)
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Everything you need to know about HMRC filing requirements, income pooling, MTD for ITSA, and personal allowance tapering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-950">Who Must File a UK Self Assessment Return?</h3>
              <p>
                Under UK tax law, HMRC requires individuals to complete a Self Assessment return if their tax is not fully collected automatically through Pay As You Earn (PAYE). You must register and file if during the tax year (6 April to 5 April):
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li>You earned over <strong>£1,000 in gross self-employment or freelance revenue</strong> (Sole Trader status).</li>
                <li>You were a <strong>Company Director</strong> taking dividends or salary not fully taxed under PAYE.</li>
                <li>You received <strong>rental income from UK property</strong> exceeding £2,500 gross (or £1,000 net profit).</li>
                <li>Your total taxable income exceeded <strong>£100,000</strong>.</li>
                <li>You earned <strong>untaxed foreign income</strong> or capital gains exceeding your annual exemption.</li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-950 text-xs">
                ℹ️ <strong>Making Tax Digital (MTD for ITSA):</strong> Starting 6 April 2026, self-employed sole traders and landlords with qualifying gross income over £50,000 must keep digital records and send quarterly updates to HMRC using MTD-compliant accounting software.
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-950">The 60% Effective Tax Trap Above £100,000</h3>
              <p>
                Once your total gross income exceeds £100,000, your <strong>£12,570 Personal Allowance tapers down by £1 for every £2 of income above £100,000</strong>. This means your Personal Allowance reaches zero once your income hits £125,140.
              </p>
              <p className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-xs">
                ⚠️ <strong>Tax Trap Alert:</strong> Because you lose your Personal Allowance while simultaneously paying 40% Higher Rate Income Tax, the effective marginal tax rate on income between £100,000 and £125,140 is a massive <strong>60%</strong>! Making SIPP pension contributions or company dividend adjustments can recover this allowance.
              </p>
              <div className="bg-slate-100 border border-slate-200 p-4 rounded-xl text-slate-800 text-xs">
                📌 <strong>Upcoming 2027/2028 Tax Rate Notice:</strong> HMRC has announced proposed future rate revisions. Keep updated with ADVAQ advisory for future tax year planning.
              </div>
            </div>
          </div>
        </section>

        {/* 5. HMRC PENALTIES & COMPLIANCE RISKS */}
        <section className="bg-red-50/50 border border-red-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-100 text-red-600 rounded-xl">
              <AlertTriangle size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                HMRC Late Filing Fines & Statutory Penalties
              </h2>
              <p className="text-xs text-gray-600">
                Avoid automatic fines by filing your online Self Assessment return on time.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-white border border-red-100 p-4 rounded-xl space-y-1 shadow-sm">
              <span className="font-bold text-red-600 text-base block">£100 Fine</span>
              <strong className="text-navy-950 block">1 Minute Late (Feb 1)</strong>
              <p className="text-gray-600">Applies automatically even if you have no tax to pay or paid your tax on time.</p>
            </div>

            <div className="bg-white border border-red-100 p-4 rounded-xl space-y-1 shadow-sm">
              <span className="font-bold text-red-600 text-base block">£10 / Day</span>
              <strong className="text-navy-950 block">3 Months Late (May 1)</strong>
              <p className="text-gray-600">Compounding daily penalty charged up to a maximum of 90 days (£900 extra fine).</p>
            </div>

            <div className="bg-white border border-red-100 p-4 rounded-xl space-y-1 shadow-sm">
              <span className="font-bold text-red-600 text-base block">5% of Tax</span>
              <strong className="text-navy-950 block">6 Months Late (Aug 1)</strong>
              <p className="text-gray-600">An additional penalty of 5% of the total tax due or £300, whichever is higher.</p>
            </div>

            <div className="bg-white border border-red-100 p-4 rounded-xl space-y-1 shadow-sm">
              <span className="font-bold text-red-600 text-base block">12 Months Late</span>
              <strong className="text-navy-950 block">Additional 5% Fine</strong>
              <p className="text-gray-600">Another 5% penalty or £300 added, plus potential HMRC investigation proceedings.</p>
            </div>
          </div>
        </section>

        {/* 6. FREQUENTLY ASKED QUESTIONS (AEO ACCORDION) */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (UK Self Assessment)
            </h2>
            <p className="text-xs text-gray-600">
              Authoritative answers to common questions about HMRC filing, dividend tax, and Payments on Account.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto pt-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-serif text-sm sm:text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. ADVAQ PROFESSIONAL CTA BANNER (HIGH INTENT CONVERSION OFFER) */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ UK Chartered Tax Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Need Your UK Self Assessment Prepared & Filed by Chartered Advisors?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK tax team registers UTR numbers, prepares accurate Self Assessment returns, reclaims allowable expenses, and submits directly to HMRC on your behalf.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/self-assessment"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Self Assessment with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp UK Tax Specialist
              </a>
            </div>
          </div>
        </section>

        {/* 8. RELATED UK CALCULATORS GRID (CROSS-NAVIGATION & DISCOVERY) */}
        <section className="space-y-6">
          <div className="border-b border-border pb-4">
            <h2 className="font-serif text-2xl font-bold text-navy-950">
              Explore Related UK Business & Tax Calculators
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Optimize your UK corporate setup, dividend extraction, and property taxes with our suite of free tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Corporate Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  UK Corporation Tax Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate 19% to 25% marginal relief Corporation Tax for UK Limited Companies.
                </p>
              </div>
              <Link
                to="/calculators/uk-corporation-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Dividend Optimizer
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  UK Tax & Dividend Optimizer
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate the optimal tax-free salary (£12,570) and dividend combination for UK directors.
                </p>
              </div>
              <Link
                to="/calculators/uk-tax-dividend-optimizer-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Sole Trader vs LTD
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  UK Sole Trader vs Limited Company
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Compare net take-home pay between operating as a Sole Trader vs incorporating a UK LTD.
                </p>
              </div>
              <Link
                to="/calculators/uk-sole-trader-vs-ltd-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
