import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-self-employment-tax")({
  head: () => ({
    meta: [
      { title: "US Self-Employment Tax Calculator (15.3%) (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US Self-Employment Tax calculator. Calculate 15.3% SE tax (12.4% Social Security + 2.9% Medicare) & non-resident alien exemptions.",
      },
      {
        name: "keywords",
        content:
          "us self employment tax calculator 15.3 percent 2026, do non resident foreign freelancers pay self employment tax, schedule se calculator us llc",
      },
      {
        property: "og:title",
        content: "US Self-Employment Tax Calculator (15.3%) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate 15.3% Self-Employment Tax and test non-resident alien exemption rules for foreign freelancers.",
      },
      { property: "og:url", content: "/calculators/us-self-employment-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-self-employment-tax" }],
  }),
  component: USSelfEmploymentTaxCalculatorPage,
});

function USSelfEmploymentTaxCalculatorPage() {
  const [netSelfEmploymentIncome, setNetSelfEmploymentIncome] = useState<number>(50000);
  const [isNonResidentAlien, setIsNonResidentAlien] = useState<boolean>(true); // Foreign contractor living outside US

  // Schedule SE Calculation: Net Earnings = 92.35% of Net Self-Employment Income
  const taxableSeEarnings = netSelfEmploymentIncome * 0.9235;

  // Social Security Tax: 12.4% on earnings up to $168,600
  const socialSecurityCap = 168600;
  const socialSecurityTax = Math.min(taxableSeEarnings, socialSecurityCap) * 0.124;

  // Medicare Tax: 2.9% on all earnings (+0.9% above $200,000)
  let medicareTax = taxableSeEarnings * 0.029;
  if (taxableSeEarnings > 200000) {
    medicareTax += (taxableSeEarnings - 200000) * 0.009;
  }

  const totalStandardSeTax = socialSecurityTax + medicareTax;

  // EXEMPTION RULE: Non-Resident Aliens performing services OUTSIDE the US are EXEMPT from 15.3% SE Tax under IRC Sec. 1402(b) & 3121(b)!
  const actualSeTaxOwed = isNonResidentAlien ? 0 : totalStandardSeTax;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US Self-Employment Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US Self-Employment Tax Calculator (15.3%) (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate 15.3% Schedule SE tax for freelancers and test Foreign Non-Resident Alien exemption eligibility.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* EXEMPTION BANNER */}
            <div
              className={`p-5 rounded-xl border flex items-center gap-4 ${
                isNonResidentAlien
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                  : "bg-amber-50 border-amber-300 text-amber-950"
              }`}
            >
              {isNonResidentAlien ? (
                <CheckCircle2 className="text-emerald-600 shrink-0" size={32} />
              ) : (
                <AlertCircle className="text-amber-600 shrink-0" size={32} />
              )}
              <div>
                <h4 className="font-serif font-bold text-base">
                  {isNonResidentAlien
                    ? "🎉 EXEMPT from 15.3% US Self-Employment Tax!"
                    : "⚠️ Subject to 15.3% US Self-Employment Tax (Schedule SE)"}
                </h4>
                <p className="text-xs opacity-90 mt-0.5">
                  {isNonResidentAlien
                    ? "Under IRS Code Sec. 1402(b), Non-Resident Aliens performing services physically outside the US owe $0 Self-Employment tax!"
                    : "US Tax Residents and Green Card holders must pay 15.3% SE tax on net self-employment earnings above $400."}
                </p>
              </div>
            </div>

            {/* INPUT 1: NET INCOME */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Net Self-Employment Profit ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${netSelfEmploymentIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={netSelfEmploymentIncome}
                onChange={(e) => setNetSelfEmploymentIncome(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* TOGGLE: NON-RESIDENT ALIEN */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Non-Resident Alien Living Outside US?</strong>
                <span className="text-gray-500 text-xs">Foreign contractor operating remotely from Pakistan/overseas.</span>
              </div>
              <input
                type="checkbox"
                checked={isNonResidentAlien}
                onChange={(e) => setIsNonResidentAlien(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>SE Tax Calculation Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Self-Employment Profit:</span>
                  <span className="font-mono text-white font-semibold">${netSelfEmploymentIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Taxable SE Base (92.35%):</span>
                  <span className="font-mono text-white">${Math.round(taxableSeEarnings).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Social Security Tax (12.4%):</span>
                  <span className="font-mono text-white">${Math.round(socialSecurityTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Medicare Tax (2.9%):</span>
                  <span className="font-mono text-white">${Math.round(medicareTax).toLocaleString()}</span>
                </div>
              </div>

              {/* NET TAX DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Actual Self-Employment Tax Owed
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  ${Math.round(actualSeTaxOwed).toLocaleString()}
                </div>
                {isNonResidentAlien && (
                  <p className="mt-2 text-[11px] text-gold-400">
                    💰 You save ${Math.round(totalStandardSeTax).toLocaleString()}/year under the Foreign Non-Resident exemption!
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ US Tax Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
