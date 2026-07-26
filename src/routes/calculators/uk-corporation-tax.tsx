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
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-corporation-tax")({
  head: () => ({
    meta: [
      { title: "UK Corporation Tax & Marginal Relief Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Corporation Tax calculator. Calculate 19% small profits rate, 25% main rate, and exact Marginal Relief for profits between £50k and £250k.",
      },
      {
        name: "keywords",
        content:
          "uk corporation tax calculator 2026, marginal relief calculator uk corporation tax 19 25, associated companies corporation tax limit",
      },
      {
        property: "og:title",
        content: "UK Corporation Tax & Marginal Relief Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate Corporation Tax and Marginal Relief for UK Limited Companies under 2026 HMRC tax rules.",
      },
      { property: "og:url", content: "/calculators/uk-corporation-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-corporation-tax" }],
  }),
  component: UKCorporationTaxCalculatorPage,
});

function UKCorporationTaxCalculatorPage() {
  const [taxableProfit, setTaxableProfit] = useState<number>(120000);
  const [associatedCompanies, setAssociatedCompanies] = useState<number>(1);

  // Adjusted Thresholds based on Associated Companies
  const n = associatedCompanies;
  const lowerLimit = 50000 / n;
  const upperLimit = 250000 / n;
  const fraction = 3 / 200; // 0.015

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
    effectiveRate = (corporationTax / taxableProfit) * 100;
  }

  const profitAfterTax = taxableProfit - corporationTax;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK Corporation Tax & Marginal Relief</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Corporation Tax & Marginal Relief Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your CT600 liability across the 19% Small Profits Rate, 25% Main Rate, and exact Marginal Relief bracket.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: PROFIT */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Taxable Company Profit (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{taxableProfit.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="400000"
                step="5000"
                value={taxableProfit}
                onChange={(e) => setTaxableProfit(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>£50k (19% Rate)</span>
                <span>£150k (Marginal Relief)</span>
                <span>£250k+ (25% Rate)</span>
              </div>
            </div>

            {/* INPUT 2: ASSOCIATED COMPANIES */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Number of Associated Companies (including this one):
              </label>
              <div className="grid grid-cols-4 gap-2 text-xs">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setAssociatedCompanies(num)}
                    className={`p-3 rounded-xl border text-center font-bold transition-all ${
                      associatedCompanies === num
                        ? "bg-navy-950 text-white border-gold-500 shadow-md"
                        : "bg-white text-gray-800 border-border"
                    }`}
                  >
                    {num} Company{num > 1 ? "s" : ""}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-gray-500 block mt-2">
                Adjusts lower threshold to £{(50000 / associatedCompanies).toLocaleString()} & upper threshold to £{(250000 / associatedCompanies).toLocaleString()}.
              </span>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Corporation Tax Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Taxable Profit:</span>
                  <span className="font-mono text-white font-semibold">£{taxableProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Full Tax at 25%:</span>
                  <span className="font-mono text-white">£{Math.round(taxableProfit * 0.25).toLocaleString()}</span>
                </div>
                {marginalRelief > 0 && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Marginal Relief Discount (3/200):</span>
                    <span className="font-mono text-emerald-400 font-semibold">-£{Math.round(marginalRelief).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective Tax Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">{effectiveRate.toFixed(2)}%</span>
                </div>
              </div>

              {/* NET DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Net Corporation Tax Due (CT600)
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(corporationTax).toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>Retained Profit After CT:</span>
                  <strong className="text-emerald-400 font-mono">£{Math.round(profitAfterTax).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/corporation-tax-return"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File CT600 Return with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
