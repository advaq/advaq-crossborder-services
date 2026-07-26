import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-federal-income-tax")({
  head: () => ({
    meta: [
      { title: "US Federal Income Tax Calculator for Non-Residents (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Form 1040-NR US Federal Income Tax calculator for foreign LLC owners with US ECI. Calculate progressive tax brackets & ITIN requirements.",
      },
      {
        name: "keywords",
        content:
          "us federal income tax calculator 1040-nr 2026, non resident alien us tax brackets, eci income tax calculator foreign llc",
      },
      {
        property: "og:title",
        content: "US Federal Income Tax Calculator for Non-Residents | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate US Federal Income Tax on Effectively Connected Income (Form 1040-NR) for foreign LLC owners.",
      },
      { property: "og:url", content: "/calculators/us-federal-income-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-federal-income-tax" }],
  }),
  component: USFederalIncomeTaxCalculatorPage,
});

function USFederalIncomeTaxCalculatorPage() {
  const [grossUseciIncome, setGrossUseciIncome] = useState<number>(45000);
  const [businessExpenses, setBusinessExpenses] = useState<number>(10000);

  const netTaxableIncome = Math.max(0, grossUseciIncome - businessExpenses);

  // US Federal Tax Brackets 2026 (Single / Non-Resident Alien 1040-NR)
  // 10%: $0 to $11,600
  // 12%: $11,601 to $47,150
  // 22%: $47,151 to $100,525
  // 24%: $100,526 to $191,950
  // 32%: $191,951 to $243,725
  // 35%: $243,726 to $609,350
  // 37%: Over $609,350

  let federalTax = 0;
  if (netTaxableIncome <= 11600) {
    federalTax = netTaxableIncome * 0.10;
  } else if (netTaxableIncome <= 47150) {
    federalTax = 1160 + (netTaxableIncome - 11600) * 0.12;
  } else if (netTaxableIncome <= 100525) {
    federalTax = 1160 + 4266 + (netTaxableIncome - 47150) * 0.22;
  } else if (netTaxableIncome <= 191950) {
    federalTax = 1160 + 4266 + 11742.5 + (netTaxableIncome - 100525) * 0.24;
  } else {
    federalTax = 1160 + 4266 + 11742.5 + 21942 + (netTaxableIncome - 191950) * 0.32;
  }

  const effectiveTaxRate = netTaxableIncome > 0 ? (federalTax / netTaxableIncome) * 100 : 0;
  const netTakeHome = grossUseciIncome - businessExpenses - federalTax;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US Federal Income Tax (1040-NR)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US Federal Income Tax Calculator for Non-Residents (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your Form 1040-NR tax liability for Effectively Connected Income (ECI) from US operations, software, or physical trade.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: GROSS ECI INCOME */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross US Effectively Connected Income (ECI) ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${grossUseciIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={grossUseciIncome}
                onChange={(e) => setGrossUseciIncome(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Income generated from US trade, physical presence, or US employees.
              </span>
            </div>

            {/* INPUT 2: BUSINESS EXPENSES */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Allowable US Business Expense Deductions ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${businessExpenses.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={grossUseciIncome * 0.6}
                step="2500"
                value={businessExpenses}
                onChange={(e) => setBusinessExpenses(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Server costs, advertising, contractor fees, and operational overhead.
              </span>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Form 1040-NR Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross US ECI Income:</span>
                  <span className="font-mono text-white font-semibold">${grossUseciIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Less Business Deductions:</span>
                  <span className="font-mono text-emerald-400 font-semibold">-${businessExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Taxable Income:</span>
                  <span className="font-mono text-white font-semibold">${netTaxableIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective Federal Tax Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">{effectiveTaxRate.toFixed(1)}%</span>
                </div>
              </div>

              {/* NET TAX DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Form 1040-NR Tax Due
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  ${Math.round(federalTax).toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>Net After-Tax Income:</span>
                  <strong className="text-emerald-400 font-mono">${Math.round(netTakeHome).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/itin-application"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Form 1040-NR with ADVAQ PTIN/CPA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
