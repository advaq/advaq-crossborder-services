import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  PoundSterling,
  TrendingUp,
  Percent,
  ChevronDown,
  HelpCircle,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-tax-dividend-optimizer-calculator")({
  head: () => ({
    meta: [
      { title: "UK Director Salary & Dividend Tax Optimizer (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Director salary vs dividend tax optimizer for 2026/2027. Calculate Corporation Tax, National Insurance, dividend allowance, SIPP pension relief, and net take-home pay.",
      },
      {
        name: "keywords",
        content:
          "uk director salary dividend tax calculator 2026 2027, uk corporation tax calculator 19 25 percent, optimal director salary uk 12570, dividend tax rate 8.75 33.75 percent, uk ltd director tax efficiency take home pay",
      },
      {
        property: "og:title",
        content: "UK Director Salary & Dividend Tax Optimizer | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Optimize UK LTD Director salary (£12,570) and dividend distributions to minimize UK tax liability legally.",
      },
      { property: "og:url", content: "/calculators/uk-tax-dividend-optimizer-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-tax-dividend-optimizer-calculator" }],
  }),
  component: UKTaxCalculatorPage,
});

function UKTaxCalculatorPage() {
  const [annualRevenue, setAnnualRevenue] = useState<number>(80000);
  const [allowableExpenses, setAllowableExpenses] = useState<number>(10000);
  const [directorSalary, setDirectorSalary] = useState<number>(12570);
  const [pensionContribution, setPensionContribution] = useState<number>(5000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const grossProfit = Math.max(0, annualRevenue - allowableExpenses);
  const taxableProfitBeforeSalary = Math.max(0, grossProfit - directorSalary - pensionContribution);

  let corporationTax = 0;
  if (taxableProfitBeforeSalary <= 50000) {
    corporationTax = taxableProfitBeforeSalary * 0.19;
  } else if (taxableProfitBeforeSalary >= 250000) {
    corporationTax = taxableProfitBeforeSalary * 0.25;
  } else {
    const mainRateTax = taxableProfitBeforeSalary * 0.25;
    const marginalRelief = (250000 - taxableProfitBeforeSalary) * (3 / 200);
    corporationTax = mainRateTax - marginalRelief;
  }

  const corporationTaxSavedByPension = pensionContribution * (taxableProfitBeforeSalary <= 50000 ? 0.19 : 0.25);
  const netProfitAfterCT = Math.max(0, taxableProfitBeforeSalary - corporationTax);
  const totalAvailableDividends = netProfitAfterCT;

  const personalAllowance = 12570;
  const unusedPersonalAllowance = Math.max(0, personalAllowance - directorSalary);
  const dividendAllowance = 500;

  const taxableDividends = Math.max(0, totalAvailableDividends - unusedPersonalAllowance - dividendAllowance);

  let dividendTax = 0;
  if (taxableDividends <= 37700) {
    dividendTax = taxableDividends * 0.1075;
  } else if (taxableDividends <= 112570) {
    dividendTax = 37700 * 0.1075 + (taxableDividends - 37700) * 0.3575;
  } else {
    dividendTax =
      37700 * 0.1075 + (112570 - 37700) * 0.3575 + (taxableDividends - 112570) * 0.3935;
  }

  const totalDirectorIncome = directorSalary + totalAvailableDividends;
  const netTakeHomePay = Math.max(0, totalDirectorIncome - dividendTax);
  const effectiveTaxRate =
    annualRevenue > 0
      ? (((corporationTax + dividendTax) / annualRevenue) * 100).toFixed(1)
      : "0";

  const soleTraderProfit = grossProfit;
  const soleTraderClass4NI = soleTraderProfit > 12570
    ? Math.min(soleTraderProfit - 12570, 37700) * 0.06 + Math.max(0, soleTraderProfit - 50270) * 0.02
    : 0;
  const directorClass1NI = directorSalary > 12570 ? (directorSalary - 12570) * 0.08 : 0;
  const niSavings = Math.max(0, soleTraderClass4NI - directorClass1NI);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Director Tax & Dividend Optimizer", item: "https://advaq.com/calculators/uk-tax-dividend-optimizer-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Director Salary & Dividend Tax Optimizer (2026/2027)",
    url: "https://advaq.com/calculators/uk-tax-dividend-optimizer-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate optimal UK director salary (£12,570 vs £9,100), dividend tax rates, Corporation Tax marginal relief, and take-home pay.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the most tax-efficient UK Director salary for the 2026/2027 tax year?",
      a: "For most UK Limited Company directors, taking an annual salary of £12,570 (the Primary Threshold) is most tax-efficient. At £12,570, you pay 0% Employee National Insurance and 0% Income Tax while qualifying for state pension credit. The salary is also 100% tax-deductible against Corporation Tax for your company.",
    },
    {
      q: "What are the UK Dividend Tax rates for tax year 2026/2027?",
      a: "Dividend tax rates in 2026/2027 are: Basic Rate = 10.75% (on dividend income falling within the £50,270 threshold), Higher Rate = 35.75% (between £50,271 and £125,140), and Additional Rate = 39.35% (above £125,140). Every individual receives a £500 tax-free Dividend Allowance.",
    },
    {
      q: "How do company employer pension contributions reduce UK Corporation Tax?",
      a: "Direct employer pension contributions into a Director's SIPP pension scheme are treated as allowable business expenses. They reduce your company's taxable profit before Corporation Tax is calculated, effectively saving 19% to 25% in Corporation Tax while transferring tax-free wealth into your private pension.",
    },
    {
      q: "What is Corporation Tax Marginal Relief in the UK?",
      a: "UK Corporation Tax applies at 19% for taxable profits under £50,000 (Small Profits Rate) and 25% for profits over £250,000 (Main Rate). Profits between £50,001 and £250,000 benefit from Marginal Relief, resulting in an effective tax rate that gradually scales from 19% to 25%.",
    },
    {
      q: "Why is extracting income via Salary + Dividends more tax-efficient than a Sole Trader structure?",
      a: "As a Limited Company director taking £12,570 salary + dividends, you avoid Class 4 National Insurance (which costs sole traders 6% on profits up to £50,270). Additionally, basic rate dividends are taxed at 10.75% compared to 20% Income Tax for sole traders.",
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
      {/* Structured JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK Tax & Dividend Optimizer</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK LTD Director Tax & Dividend Optimizer (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your optimal director salary, Corporation Tax (19% vs 25%), pension tax relief, Class 1 vs 2/4 NI, and net take-home pay.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider">
                  Annual Turnover / Revenue (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{annualRevenue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>£10,000</span>
                <span>£150,000</span>
                <span>£300,000+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider">
                  Allowable Business Expenses (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{allowableExpenses.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={Math.min(annualRevenue * 0.7, 100000)}
                step="1000"
                value={allowableExpenses}
                onChange={(e) => setAllowableExpenses(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Includes software subscriptions, office space, hardware, travel & accountancy fees.
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider">
                  Director Pension (SIPP) Contribution (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{pensionContribution.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="40000"
                step="1000"
                value={pensionContribution}
                onChange={(e) => setPensionContribution(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-emerald-700 font-medium block mt-1">
                💡 Saves £{Math.round(corporationTaxSavedByPension).toLocaleString()} in Corporation Tax! 100% tax-deductible pre-tax expense.
              </span>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                Annual Director Salary (£):
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setDirectorSalary(12570)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    directorSalary === 12570
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">£12,570 / year (Optimal)</strong>
                  <span className="text-[11px] opacity-80">Zero Income Tax & Zero Employee NI</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDirectorSalary(9100)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    directorSalary === 9100
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">£9,100 / year (Secondary Threshold)</strong>
                  <span className="text-[11px] opacity-80">Zero Employer & Employee NI</span>
                </button>
              </div>
            </div>

            <div className="bg-white border border-border p-4 rounded-xl text-xs space-y-2">
              <div className="font-semibold text-navy-950 uppercase tracking-wider flex items-center justify-between">
                <span>National Insurance Comparison</span>
                <span className="text-gold-600 font-mono">Save £{Math.round(niSavings).toLocaleString()}/yr</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-gray-600">
                <div className="bg-off-white p-2 rounded">
                  <span className="block font-semibold text-navy-900">LTD Director (Class 1)</span>
                  <span>£{directorClass1NI} NI due on £{directorSalary.toLocaleString()} salary</span>
                </div>
                <div className="bg-off-white p-2 rounded">
                  <span className="block font-semibold text-navy-900">Sole Trader (Class 2/4)</span>
                  <span>£{Math.round(soleTraderClass4NI).toLocaleString()} NI due on £{grossProfit.toLocaleString()} profit</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>UK Tax Efficiency Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Profit (Turnover - Expenses):</span>
                  <span className="font-mono text-white font-semibold">£{grossProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Director Salary Deduction:</span>
                  <span className="font-mono text-white font-semibold">£{directorSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>UK Corporation Tax (19%-25%):</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(corporationTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Dividends Available:</span>
                  <span className="font-mono text-white font-semibold">£{Math.round(totalAvailableDividends).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Personal Dividend Tax (10.75%+):</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(dividendTax).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Net Take-Home Income
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(netTakeHomePay).toLocaleString()}
                  <span className="text-xs text-navy-300 font-sans font-normal ml-2">GBP</span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>Effective Combined Tax Rate:</span>
                  <strong className="text-gold-400 font-mono">{effectiveTaxRate}%</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Form UK LTD with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP TAX OPTIMIZER WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Salary & Dividend Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of how HMRC calculates your corporate & personal tax liabilities based on your inputs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross Profit & Salary/Pension</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Expenses Deducted</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Revenue:</span> <strong className="text-white">£{annualRevenue.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Allowable Expenses:</span> <strong className="text-navy-300">-£{allowableExpenses.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Director Salary:</span> <strong className="text-emerald-400">-£{directorSalary.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Employer SIPP Pension:</span> <strong className="text-emerald-400">-£{pensionContribution.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Taxable Profit Before CT:</span> <strong>£{taxableProfitBeforeSalary.toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Director salary and SIPP pension are 100% tax-deductible pre-tax company expenses.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Corporation Tax & Retained Profit</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(corporationTax).toLocaleString()} CT</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Taxable Profit Before CT:</span> <strong className="text-white">£{taxableProfitBeforeSalary.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Corporation Tax Due:</span> <strong className="text-gold-400">£{Math.round(corporationTax).toLocaleString()}</strong></div>
                <div className="flex justify-between text-emerald-400"><span>Pension CT Tax Relief Saved:</span> <strong>-£{Math.round(corporationTaxSavedByPension).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Net Dividends Available:</span> <strong>£{Math.round(totalAvailableDividends).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Dividends can ONLY be paid out of post-Corporation Tax profits.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Personal Dividend Tax (2026/27)</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(dividendTax).toLocaleString()} Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Dividends Taken:</span> <strong className="text-white">£{Math.round(totalAvailableDividends).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Unused Personal Allowance:</span> <strong className="text-emerald-400">-£{unusedPersonalAllowance.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Tax-Free Dividend Allowance:</span> <strong className="text-emerald-400">-£500</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Taxable Dividends:</span> <strong>£{taxableDividends.toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Dividend tax rates applied: 10.75% Basic / 35.75% Higher / 39.35% Additional.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net Take-Home Pay & NI Savings</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Director Salary Received:</span> <strong className="text-white">£{directorSalary.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Net Dividends (after Tax):</span> <strong className="text-white">£{Math.round(totalAvailableDividends - dividendTax).toLocaleString()}</strong></div>
                <div className="flex justify-between text-gold-400"><span>National Insurance Saved:</span> <strong>£{Math.round(niSavings).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Net Take-Home Pay:</span> <strong>£{Math.round(netTakeHomePay).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Salary + Dividends extraction saves up to 6% in Class 4 NI compared to Sole Trader!
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 1: QUICK REFERENCE COMPARISON TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                Director Salary Threshold Options (2026/2027)
              </h2>
              <p className="text-xs text-gray-600">
                Compare statutory threshold options for UK Limited Company directors.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Salary Threshold Option</th>
                  <th className="p-3.5">Annual Amount</th>
                  <th className="p-3.5">Employee NI</th>
                  <th className="p-3.5">Employer NI</th>
                  <th className="p-3.5">State Pension Credit</th>
                  <th className="p-3.5 rounded-tr-xl">Corporation Tax Deductible</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className="bg-gold-50/60 font-medium">
                  <td className="p-3.5 font-bold text-navy-950">Primary Threshold (Optimal)</td>
                  <td className="p-3.5 font-mono font-bold text-gold-700">£12,570 / yr</td>
                  <td className="p-3.5 text-emerald-600 font-bold">£0 (0%)</td>
                  <td className="p-3.5 text-gray-700">Small Employer NI (offset by Employment Allowance)</td>
                  <td className="p-3.5 text-emerald-600 font-bold">YES ✅</td>
                  <td className="p-3.5 text-emerald-600 font-bold">YES (100%) ✅</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Secondary Threshold</td>
                  <td className="p-3.5 font-mono font-bold">£9,100 / yr</td>
                  <td className="p-3.5 text-emerald-600 font-bold">£0 (0%)</td>
                  <td className="p-3.5 text-emerald-600 font-bold">£0 (0%)</td>
                  <td className="p-3.5 text-emerald-600 font-bold">YES ✅</td>
                  <td className="p-3.5 text-emerald-600 font-bold">YES (100%) ✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (Director Salary & Dividend)
            </h2>
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

        {/* ADVAQ CTA */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ UK Chartered Tax Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Want Chartered Accountants to Optimize Your Salary & Dividends?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK tax team sets up tax-free payroll, drafts legal dividend vouchers/minutes, optimizes SIPP pension contributions, and files CT600 returns directly with HMRC.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Form UK LTD with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Director Tax Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
