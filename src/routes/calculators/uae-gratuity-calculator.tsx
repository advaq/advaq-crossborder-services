import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-gratuity-calculator")({
  head: () => ({
    meta: [
      { title: "UAE End of Service Gratuity Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE End of Service Gratuity calculator. Calculate Labor Law No. 33 of 2021 severance pay for mainland & freezone employees in Dubai.",
      },
      {
        name: "keywords",
        content:
          "uae end of service gratuity calculator 2026, dubai labor law gratuity calculation 21 days 30 days, difc dews employee workplace savings",
      },
      {
        property: "og:title",
        content: "UAE End of Service Gratuity Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact UAE End of Service Gratuity payout under the new UAE Labor Law.",
      },
      { property: "og:url", content: "/calculators/uae-gratuity-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-gratuity-calculator" }],
  }),
  component: UAEGratuityCalculatorPage,
});

function UAEGratuityCalculatorPage() {
  const [basicMonthlySalaryAED, setBasicMonthlySalaryAED] = useState<number>(15000);
  const [yearsOfService, setYearsOfService] = useState<number>(4);

  // Daily Basic Salary = Basic Monthly Salary / 30 days
  const dailyBasicSalary = basicMonthlySalaryAED / 30;

  // Gratuity Rules 2026 (Federal Decree-Law No. 33 of 2021)
  // - Less than 1 year: 0
  // - 1 to 5 years: 21 days daily basic salary per year
  // - Over 5 years: 21 days for first 5 years + 30 days for each additional year
  let totalGratuityAED = 0;

  if (yearsOfService >= 1) {
    if (yearsOfService <= 5) {
      totalGratuityAED = yearsOfService * 21 * dailyBasicSalary;
    } else {
      const first5YearsGratuity = 5 * 21 * dailyBasicSalary;
      const remainingYearsGratuity = (yearsOfService - 5) * 30 * dailyBasicSalary;
      totalGratuityAED = first5YearsGratuity + remainingYearsGratuity;
    }
  }

  // Maximum cap: 2 years total basic salary
  const maxGratuityCap = basicMonthlySalaryAED * 24;
  totalGratuityAED = Math.min(totalGratuityAED, maxGratuityCap);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>UAE Gratuity Calculator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE End of Service Gratuity Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate statutory End of Service severance pay under UAE Federal Decree-Law No. 33 of 2021 for mainland and freezone employees.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: BASIC SALARY */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Basic Monthly Salary (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {basicMonthlySalaryAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="80000"
                step="1000"
                value={basicMonthlySalaryAED}
                onChange={(e) => setBasicMonthlySalaryAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Note: Gratuity is calculated strictly on Basic Salary (excluding allowances).
              </span>
            </div>

            {/* INPUT 2: YEARS OF SERVICE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Total Completed Years of Continuous Service:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {yearsOfService} Years
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={yearsOfService}
                onChange={(e) => setYearsOfService(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Gratuity Payout Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Daily Basic Rate:</span>
                  <span className="font-mono text-white font-semibold">AED {Math.round(dailyBasicSalary).toLocaleString()} / day</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>First 5 Years Rate (21 Days/yr):</span>
                  <span className="font-mono text-white">21 Days</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>After 5 Years Rate (30 Days/yr):</span>
                  <span className="font-mono text-white">30 Days</span>
                </div>
              </div>

              {/* NET DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total End of Service Gratuity Payout
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  AED {Math.round(totalGratuityAED).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ UAE Labor Law Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
