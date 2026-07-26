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

export const Route = createFileRoute("/calculators/pakistan-fbr-salary-tax")({
  head: () => ({
    meta: [
      { title: "Pakistan FBR Salary & Business Income Tax Calculator (Tax Year 2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBR income tax calculator for Pakistan. Calculate monthly and annual income tax slabs for salaried and business individuals under 2026/2027 budget rules.",
      },
      {
        name: "keywords",
        content:
          "fbr salary tax calculator 2026 2027 pakistan, fbr monthly salary tax deduction calculator, business individual tax slabs iris fbr pakistan",
      },
      {
        property: "og:title",
        content: "Pakistan FBR Salary & Business Income Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate monthly and annual FBR income tax deductions for salaried employees and business owners.",
      },
      { property: "og:url", content: "/calculators/pakistan-fbr-salary-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-fbr-salary-tax" }],
  }),
  component: PakistanFbrSalaryTaxCalculatorPage,
});

function PakistanFbrSalaryTaxCalculatorPage() {
  const [monthlyIncomePKR, setMonthlyIncomePKR] = useState<number>(200000); // 2 Lacs PKR
  const [incomeType, setIncomeType] = useState<string>("salaried");

  const annualIncomePKR = monthlyIncomePKR * 12;

  // FBR Salaried Slabs (2026/2027 Budget Rules):
  // Up to Rs 600,000: 0%
  // Rs 600,001 to Rs 1,200,000: 5% of amount exceeding Rs 600,000
  // Rs 1,200,001 to Rs 2,200,000: Rs 30,000 + 15% exceeding Rs 1,200,000
  // Rs 2,200,001 to Rs 3,200,000: Rs 180,000 + 25% exceeding Rs 2,200,000
  // Rs 3,200,001 to Rs 4,100,000: Rs 430,000 + 30% exceeding Rs 3,200,000
  // Above Rs 4,100,000: Rs 700,000 + 35% exceeding Rs 4,100,000

  let annualTaxPKR = 0;
  if (incomeType === "salaried") {
    if (annualIncomePKR <= 600000) annualTaxPKR = 0;
    else if (annualIncomePKR <= 1200000) annualTaxPKR = (annualIncomePKR - 600000) * 0.05;
    else if (annualIncomePKR <= 2200000) annualTaxPKR = 30000 + (annualIncomePKR - 1200000) * 0.15;
    else if (annualIncomePKR <= 3200000) annualTaxPKR = 180000 + (annualIncomePKR - 2200000) * 0.25;
    else if (annualIncomePKR <= 4100000) annualTaxPKR = 430000 + (annualIncomePKR - 3200000) * 0.3;
    else annualTaxPKR = 700000 + (annualIncomePKR - 4100000) * 0.35;
  } else {
    // Business Individual Slabs
    if (annualIncomePKR <= 600000) annualTaxPKR = 0;
    else if (annualIncomePKR <= 1200000) annualTaxPKR = (annualIncomePKR - 600000) * 0.15;
    else if (annualIncomePKR <= 1600000) annualTaxPKR = 90000 + (annualIncomePKR - 1200000) * 0.2;
    else if (annualIncomePKR <= 3200000) annualTaxPKR = 170000 + (annualIncomePKR - 1600000) * 0.3;
    else annualTaxPKR = 650000 + (annualIncomePKR - 3200000) * 0.35;
  }

  const monthlyTaxPKR = annualTaxPKR / 12;
  const netMonthlyTakeHomePKR = monthlyIncomePKR - monthlyTaxPKR;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>FBR Salary & Income Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FBR Income Tax Calculator (Tax Year 2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate monthly salary tax deductions, annual FBR tax slabs, and net take-home salary for employees and business individuals in Pakistan.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* INPUT SLIDERS */}
          <div className="space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* INCOME TYPE */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Income Classification:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setIncomeType("salaried")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    incomeType === "salaried"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">Salaried Individual</strong>
                  <span className="text-[11px] opacity-80">Salary &gt; 75% of income</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIncomeType("business")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    incomeType === "business"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">Business Individual / AOP</strong>
                  <span className="text-[11px] opacity-80">Sole Proprietor / Partner</span>
                </button>
              </div>
            </div>

            {/* MONTHLY SALARY */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross Monthly Income (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  Rs {(monthlyIncomePKR / 100000).toLocaleString()} Lacs / month
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="25000"
                value={monthlyIncomePKR}
                onChange={(e) => setMonthlyIncomePKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Annual Total: Rs {(annualIncomePKR / 100000).toLocaleString()} Lacs
              </span>
            </div>
          </div>

          {/* RESULT CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Monthly Tax Deduction</span>
              <div className="text-3xl font-serif font-bold text-red-600">
                Rs {Math.round(monthlyTaxPKR).toLocaleString()}
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 bg-white space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Annual Total FBR Tax</span>
              <div className="text-3xl font-serif font-bold text-navy-950">
                Rs {Math.round(annualTaxPKR).toLocaleString()}
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">Net Monthly Take-Home</span>
              <div className="text-3xl font-serif font-bold text-white">
                Rs {Math.round(netMonthlyTakeHomePKR).toLocaleString()}
              </div>
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need FBR Income Tax Return Filing (IRIS)?</h4>
              <p className="text-xs text-gray-600">Active Taxpayer List (ATL) restoration & tax return drafting.</p>
            </div>
            <Link to="/pakistan-services/individual-tax-return" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              File Tax Return with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
