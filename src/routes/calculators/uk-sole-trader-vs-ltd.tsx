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
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-sole-trader-vs-ltd")({
  head: () => ({
    meta: [
      { title: "UK Sole Trader vs LTD Company Tax & Take-Home Pay Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Sole Trader vs Limited Company tax calculator. Compare Income Tax, Class 2/4 NICs, Corporation Tax, and net take-home pay.",
      },
      {
        name: "keywords",
        content:
          "uk sole trader vs ltd tax calculator 2026, sole trader vs limited company take home pay, is it better to be sole trader or ltd company uk",
      },
      {
        property: "og:title",
        content: "UK Sole Trader vs LTD Company Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare exact tax savings and net income between operating as a Sole Trader vs UK Limited Company.",
      },
      { property: "og:url", content: "/calculators/uk-sole-trader-vs-ltd" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-sole-trader-vs-ltd" }],
  }),
  component: UKSoleTraderVsLTDCalculatorPage,
});

function UKSoleTraderVsLTDCalculatorPage() {
  const [annualProfit, setAnnualProfit] = useState<number>(60000);

  // 1. SOLE TRADER CALCULATIONS (2026 Rules)
  // Personal Allowance: £12,570
  // Income Tax: 20% (£12,571 - £50,270), 40% (£50,271 - £125,140)
  const personalAllowance = 12570;
  const taxableProfitSoleTrader = Math.max(0, annualProfit - personalAllowance);

  let soleTraderIncomeTax = 0;
  if (taxableProfitSoleTrader <= 37700) {
    soleTraderIncomeTax = taxableProfitSoleTrader * 0.2;
  } else if (taxableProfitSoleTrader <= 112570) {
    soleTraderIncomeTax = 37700 * 0.2 + (taxableProfitSoleTrader - 37700) * 0.4;
  } else {
    soleTraderIncomeTax =
      37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableProfitSoleTrader - 112570) * 0.45;
  }

  // Class 4 National Insurance (6% between £12,570 and £50,270; 2% above £50,270)
  let class4NI = 0;
  if (annualProfit > 12570) {
    const niBand1 = Math.min(Math.max(0, annualProfit - 12570), 37700);
    const niBand2 = Math.max(0, annualProfit - 50270);
    class4NI = niBand1 * 0.06 + niBand2 * 0.02;
  }

  const soleTraderTotalTax = soleTraderIncomeTax + class4NI;
  const soleTraderTakeHome = annualProfit - soleTraderTotalTax;

  // 2. LIMITED COMPANY CALCULATIONS (Salary £12,570 + Dividends)
  const directorSalary = Math.min(annualProfit, 12570);
  const profitBeforeCT = Math.max(0, annualProfit - directorSalary);

  // Corporation Tax (19% up to £50k profit)
  let ltdCorporationTax = 0;
  if (profitBeforeCT <= 50000) {
    ltdCorporationTax = profitBeforeCT * 0.19;
  } else if (profitBeforeCT >= 250000) {
    ltdCorporationTax = profitBeforeCT * 0.25;
  } else {
    const mainTax = profitBeforeCT * 0.25;
    const relief = (250000 - profitBeforeCT) * (3 / 200);
    ltdCorporationTax = mainTax - relief;
  }

  const netDividends = Math.max(0, profitBeforeCT - ltdCorporationTax);
  const unusedPA = Math.max(0, personalAllowance - directorSalary);
  const dividendAllowance = 500;
  const taxableDividends = Math.max(0, netDividends - unusedPA - dividendAllowance);

  let dividendTax = 0;
  if (taxableDividends <= 37700) {
    dividendTax = taxableDividends * 0.0875;
  } else if (taxableDividends <= 112570) {
    dividendTax = 37700 * 0.0875 + (taxableDividends - 37700) * 0.3375;
  } else {
    dividendTax =
      37700 * 0.0875 + (112570 - 37700) * 0.3375 + (taxableDividends - 112570) * 0.3935;
  }

  const ltdTotalTax = ltdCorporationTax + dividendTax;
  const ltdTakeHome = annualProfit - ltdTotalTax;

  const ltdExtraSavings = ltdTakeHome - soleTraderTakeHome;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>Sole Trader vs LTD</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Sole Trader vs Limited Company Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Compare side-by-side tax liability, National Insurance, Corporation Tax, and net take-home pay between Sole Trader and UK LTD.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* BREAKEVEN BANNER CALLOUT */}
          <div className="bg-navy-950 text-white p-5 rounded-xl border border-gold-500/40 text-center shadow-lg">
            <div className="flex items-center justify-center gap-2 text-gold-500 text-xs font-semibold uppercase tracking-widest mb-1">
              <Sparkles size={16} />
              <span>LTD Breakeven Analysis</span>
            </div>
            <p className="font-serif text-xl sm:text-2xl text-white font-semibold">
              {annualProfit >= 28000 ? (
                <>
                  At <span className="text-gold-400">£{annualProfit.toLocaleString()} profit</span>, forming a UK LTD saves you <span className="text-emerald-400 font-mono">£{Math.round(ltdExtraSavings).toLocaleString()}/year</span> net vs Sole Trader!
                </>
              ) : (
                <>
                  At <span className="text-gold-400">£{annualProfit.toLocaleString()} profit</span>, Sole Trader is simpler. The breakeven point where a UK LTD becomes tax-superior is <span className="text-gold-400 font-mono">~£28,000/year</span> profit.
                </>
              )}
            </p>
          </div>

          {/* PROFIT SLIDER */}
          <div className="max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border">
            <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider block">
              Annual Net Profit Before Tax (£):
            </label>
            <div className="text-4xl font-serif font-bold text-gold-600">
              £{annualProfit.toLocaleString()}
            </div>
            <input
              type="range"
              min="15000"
              max="200000"
              step="5000"
              value={annualProfit}
              onChange={(e) => setAnnualProfit(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>£15,000</span>
              <span>£100,000</span>
              <span>£200,000</span>
            </div>
          </div>

          {/* COMPARISON CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD 1: SOLE TRADER */}
            <div className="border border-border rounded-xl p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-border">
                  <h3 className="font-serif text-xl font-semibold text-navy-950">Operating as Sole Trader</h3>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">Self-Employed</span>
                </div>

                <div className="space-y-3 text-xs text-gray-700 mb-6">
                  <div className="flex justify-between">
                    <span>Income Tax (20% / 40%):</span>
                    <strong className="font-mono text-navy-950">£{Math.round(soleTraderIncomeTax).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Class 4 National Insurance (6%):</span>
                    <strong className="font-mono text-navy-950">£{Math.round(class4NI).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border font-semibold text-sm">
                    <span>Total Tax & NI Paid:</span>
                    <strong className="font-mono text-red-600">£{Math.round(soleTraderTotalTax).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 p-4 rounded-xl text-center border border-navy-100">
                <span className="text-xs text-navy-600 uppercase font-semibold block mb-1">Net Take-Home Pay</span>
                <div className="text-3xl font-serif font-bold text-navy-950">
                  £{Math.round(soleTraderTakeHome).toLocaleString()}
                </div>
              </div>
            </div>

            {/* CARD 2: LIMITED COMPANY */}
            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-bl-xl">
                Most Tax Efficient
              </div>

              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                  <h3 className="font-serif text-xl font-semibold text-white">Operating as UK LTD</h3>
                  <span className="text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium">Director Salary + Dividends</span>
                </div>

                <div className="space-y-3 text-xs text-navy-200 mb-6">
                  <div className="flex justify-between">
                    <span>Corporation Tax (19%):</span>
                    <strong className="font-mono text-white">£{Math.round(ltdCorporationTax).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Dividend Tax (8.75%+):</span>
                    <strong className="font-mono text-white">£{Math.round(dividendTax).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/10 font-semibold text-sm">
                    <span>Total Tax Paid:</span>
                    <strong className="font-mono text-gold-400">£{Math.round(ltdTotalTax).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-4 rounded-xl text-center">
                <span className="text-xs text-gold-500 uppercase font-semibold block mb-1">Net Take-Home Pay</span>
                <div className="text-3xl font-serif font-bold text-white">
                  £{Math.round(ltdTakeHome).toLocaleString()}
                </div>
                {ltdExtraSavings > 0 && (
                  <div className="mt-2 text-xs text-emerald-400 font-semibold">
                    🎉 Save £{Math.round(ltdExtraSavings).toLocaleString()} extra per year with UK LTD!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Ready to Form Your Tax-Efficient UK LTD?</h4>
              <p className="text-xs text-gray-600">Get London registered address, Companies House incorporation, and bank setup.</p>
            </div>
            <Link to="/uk-services/ltd-formation" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Incorporate UK LTD Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
