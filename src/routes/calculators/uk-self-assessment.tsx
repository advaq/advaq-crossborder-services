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

export const Route = createFileRoute("/calculators/uk-self-assessment")({
  head: () => ({
    meta: [
      { title: "UK Self Assessment Tax Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Self Assessment tax calculator. Calculate Income Tax, Class 2/4 NI, dividend tax, rental income tax, and payments on account.",
      },
      {
        name: "keywords",
        content:
          "uk self assessment tax calculator 2026, uk freelance income tax calculator, uk personal tax allowance calculator 12570",
      },
      {
        property: "og:title",
        content: "UK Self Assessment Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate your complete UK Self Assessment tax bill across salary, freelance profit, rental income, and dividends.",
      },
      { property: "og:url", content: "/calculators/uk-self-assessment" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-self-assessment" }],
  }),
  component: UKSelfAssessmentCalculatorPage,
});

function UKSelfAssessmentCalculatorPage() {
  const [salaryIncome, setSalaryIncome] = useState<number>(15000);
  const [freelanceProfit, setFreelanceProfit] = useState<number>(35000);
  const [rentalIncome, setRentalIncome] = useState<number>(6000);
  const [dividendIncome, setDividendIncome] = useState<number>(5000);

  // Total Non-Dividend Income
  const totalEarnedIncome = salaryIncome + freelanceProfit + rentalIncome;
  const totalGrossIncome = totalEarnedIncome + dividendIncome;

  // Personal Allowance Calculation (Tapered above £100k)
  let personalAllowance = 12570;
  if (totalGrossIncome > 100000) {
    const reduction = (totalGrossIncome - 100000) / 2;
    personalAllowance = Math.max(0, 12570 - reduction);
  }

  // Taxable Earned Income
  const taxableEarnedIncome = Math.max(0, totalEarnedIncome - personalAllowance);

  // Income Tax Bands: Basic 20% (£0–£37,700), Higher 40% (£37,701–£125,140), Additional 45% (>£125,140)
  let incomeTax = 0;
  if (taxableEarnedIncome <= 37700) {
    incomeTax = taxableEarnedIncome * 0.2;
  } else if (taxableEarnedIncome <= 112570) {
    incomeTax = 37700 * 0.2 + (taxableEarnedIncome - 37700) * 0.4;
  } else {
    incomeTax =
      37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableEarnedIncome - 112570) * 0.45;
  }

  // Class 4 National Insurance on Freelance Profit (6% between £12,570 and £50,270; 2% above £50,270)
  let class4NI = 0;
  if (freelanceProfit > 12570) {
    const band1 = Math.min(Math.max(0, freelanceProfit - 12570), 37700);
    const band2 = Math.max(0, freelanceProfit - 50270);
    class4NI = band1 * 0.06 + band2 * 0.02;
  }

  // Dividend Tax (Allowance = £500)
  const unusedPA = Math.max(0, personalAllowance - totalEarnedIncome);
  const taxableDividends = Math.max(0, dividendIncome - unusedPA - 500);

  let dividendTax = 0;
  if (taxableDividends > 0) {
    const totalTaxable = taxableEarnedIncome + taxableDividends;
    if (totalTaxable <= 37700) {
      dividendTax = taxableDividends * 0.0875;
    } else if (totalTaxable <= 112570) {
      dividendTax = taxableDividends * 0.3375;
    } else {
      dividendTax = taxableDividends * 0.3935;
    }
  }

  const totalSelfAssessmentTax = incomeTax + class4NI + dividendTax;
  const netTakeHome = totalGrossIncome - totalSelfAssessmentTax;
  const paymentOnAccount = totalSelfAssessmentTax > 1000 ? totalSelfAssessmentTax * 0.5 : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>Self Assessment Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Self Assessment Tax Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your complete UK tax bill combining salary, freelance/sole trader profit, rental income, and dividend earnings.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: SALARY */}
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

            {/* INPUT 2: FREELANCE PROFIT */}
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

            {/* INPUT 3: RENTAL INCOME */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Net Property Rental Income (£):
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

            {/* INPUT 4: DIVIDENDS */}
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

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
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
                  <span>Income Tax (20%/40%/45%):</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(incomeTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Class 4 National Insurance (6%/2%):</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(class4NI).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Dividend Tax:</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(dividendTax).toLocaleString()}</span>
                </div>
              </div>

              {/* NET DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Self Assessment Tax Due
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(totalSelfAssessmentTax).toLocaleString()}
                </div>
                {paymentOnAccount > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                    <span>Jan 31 Payment on Account (+50%):</span>
                    <strong className="text-gold-400 font-mono">+£{Math.round(paymentOnAccount).toLocaleString()}</strong>
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
    </div>
  );
}
