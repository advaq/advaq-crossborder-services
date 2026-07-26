import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  PoundSterling,
  TrendingUp,
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-tax")({
  head: () => ({
    meta: [
      { title: "UK Director Tax & Dividend Optimizer Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Director salary vs dividend tax calculator. Calculate Corporation Tax, National Insurance, dividend allowances, and net take-home pay.",
      },
      {
        name: "keywords",
        content:
          "uk director salary dividend tax calculator 2026, uk corporation tax calculator 19 25 percent, uk ltd director tax efficiency take home pay",
      },
      {
        property: "og:title",
        content: "UK Director Tax & Dividend Optimizer Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Optimize UK LTD Director salary (£12,570) and dividend distributions to minimize UK tax liability legally.",
      },
      {
        property: "og:type",
        content: "website",
      },
      { property: "og:url", content: "/calculators/uk-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-tax" }],
  }),
  component: UKTaxCalculatorPage,
});

function UKTaxCalculatorPage() {
  const [annualRevenue, setAnnualRevenue] = useState<number>(80000);
  const [allowableExpenses, setAllowableExpenses] = useState<number>(10000);
  const [directorSalary, setDirectorSalary] = useState<number>(12570); // Optimal tax-free threshold
  const [pensionContribution, setPensionContribution] = useState<number>(5000); // SIPP Director Pension

  // UK Tax Rules 2026
  const grossProfit = Math.max(0, annualRevenue - allowableExpenses);
  // Pension paid by LTD is 100% allowable expense for CT
  const taxableProfitBeforeSalary = Math.max(0, grossProfit - directorSalary - pensionContribution);

  // Corporation Tax Math (19% up to £50k, marginal relief up to £250k at 25%)
  let corporationTax = 0;
  if (taxableProfitBeforeSalary <= 50000) {
    corporationTax = taxableProfitBeforeSalary * 0.19;
  } else if (taxableProfitBeforeSalary >= 250000) {
    corporationTax = taxableProfitBeforeSalary * 0.25;
  } else {
    // Marginal Relief formula
    const mainRateTax = taxableProfitBeforeSalary * 0.25;
    const marginalRelief = (250000 - taxableProfitBeforeSalary) * (3 / 200);
    corporationTax = mainRateTax - marginalRelief;
  }

  // CT Saved via Pension
  const corporationTaxSavedByPension = pensionContribution * (taxableProfitBeforeSalary <= 50000 ? 0.19 : 0.25);

  const netProfitAfterCT = Math.max(0, taxableProfitBeforeSalary - corporationTax);
  const totalAvailableDividends = netProfitAfterCT;

  // Personal Tax & Dividend Tax Math
  const personalAllowance = 12570;
  const unusedPersonalAllowance = Math.max(0, personalAllowance - directorSalary);
  const dividendAllowance = 500;

  const taxableDividends = Math.max(0, totalAvailableDividends - unusedPersonalAllowance - dividendAllowance);

  // Dividend Tax Slabs: 8.75% Basic (up to £37,700 taxable), 33.75% Higher (up to £125,140), 39.35% Additional
  let dividendTax = 0;
  if (taxableDividends <= 37700) {
    dividendTax = taxableDividends * 0.0875;
  } else if (taxableDividends <= 112570) {
    dividendTax = 37700 * 0.0875 + (taxableDividends - 37700) * 0.3375;
  } else {
    dividendTax =
      37700 * 0.0875 + (112570 - 37700) * 0.3375 + (taxableDividends - 112570) * 0.3935;
  }

  const totalDirectorIncome = directorSalary + totalAvailableDividends;
  const netTakeHomePay = Math.max(0, totalDirectorIncome - dividendTax);
  const effectiveTaxRate =
    annualRevenue > 0
      ? (((corporationTax + dividendTax) / annualRevenue) * 100).toFixed(1)
      : "0";

  // National Insurance Class 1 (Director) vs Class 2/4 (Sole Trader) comparison for same profit
  const soleTraderProfit = grossProfit;
  const soleTraderClass2NI = 0; // Class 2 abolished/voluntary
  const soleTraderClass4NI = soleTraderProfit > 12570
    ? Math.min(soleTraderProfit - 12570, 37700) * 0.06 + Math.max(0, soleTraderProfit - 50270) * 0.02
    : 0;
  const directorClass1NI = directorSalary > 12570 ? (directorSalary - 12570) * 0.08 : 0;
  const niSavings = Math.max(0, soleTraderClass4NI - directorClass1NI);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators" className="hover:underline">Calculators</Link>
            <span>/</span>
            <span>UK Tax & Dividend Optimizer</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK LTD Director Tax & Dividend Optimizer (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your optimal director salary, Corporation Tax (19% vs 25%), pension tax relief, Class 1 vs 2/4 NI, and net take-home pay.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            {/* INPUT 1: REVENUE */}
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

            {/* INPUT 2: EXPENSES */}
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

            {/* INPUT 3: PENSION CONTRIBUTION */}
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

            {/* INPUT 4: SALARY SELECTION */}
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

            {/* NI CLASS COMPARISON BOX */}
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

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>UK Tax Efficiency Summary</span>
              </div>

              {/* METRIC CARDS */}
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
                  <span>Personal Dividend Tax (8.75%+):</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(dividendTax).toLocaleString()}</span>
                </div>
              </div>

              {/* NET TAKE HOME DISPLAY */}
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

            {/* CALL TO ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Form UK LTD with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20UK%20Tax%20Calculator%20(Revenue:%20%C2%A3${annualRevenue},%20Take-Home:%20%C2%A3${Math.round(netTakeHomePay)}).%20Please%20advise.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp UK Tax Specialist
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
