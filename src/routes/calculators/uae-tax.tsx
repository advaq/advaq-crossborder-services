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

export const Route = createFileRoute("/calculators/uae-tax")({
  head: () => ({
    meta: [
      { title: "UAE 9% Corporate Tax & Small Business Relief Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Corporate Tax calculator. Calculate 0% tax threshold (AED 375k profit / AED 3M revenue relief) vs 9% Corporate Tax liability.",
      },
      {
        name: "keywords",
        content:
          "uae corporate tax calculator 9 percent 2026, small business relief sbr uae corporate tax 3 million revenue, dubai freezone 0 tax threshold calculator",
      },
      {
        property: "og:title",
        content: "UAE 9% Corporate Tax & Small Business Relief Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate 0% tax thresholds, Small Business Relief eligibility, and 9% UAE Corporate Tax liability.",
      },
      { property: "og:url", content: "/calculators/uae-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-tax" }],
  }),
  component: UAETaxCalculatorPage,
});

function UAETaxCalculatorPage() {
  const [annualRevenueAED, setAnnualRevenueAED] = useState<number>(1500000); // 1.5M AED
  const [annualNetProfitAED, setAnnualNetProfitAED] = useState<number>(450000); // 450k AED
  const [isQFZP, setIsQFZP] = useState<boolean>(false); // Qualifying Free Zone Person
  const [hasRelatedPartyTransactions, setHasRelatedPartyTransactions] = useState<boolean>(false); // Transfer pricing

  // UAE Corporate Tax Rules (Federal Decree-Law No. 47 of 2022)
  const isEligibleForSBR = annualRevenueAED <= 3000000;

  // Standard Tax Math (without SBR or QFZP)
  const taxableProfitAbove375k = Math.max(0, annualNetProfitAED - 375000);
  let standardCorporateTaxAED = taxableProfitAbove375k * 0.09;

  if (isQFZP) {
    standardCorporateTaxAED = 0; // 0% on Qualifying Income for QFZP
  }

  // Tax with SBR Election
  const taxWithSBRAED = isEligibleForSBR || isQFZP ? 0 : standardCorporateTaxAED;
  const sbrSavingsAED = isEligibleForSBR || isQFZP ? standardCorporateTaxAED : 0;

  // Deadline: 9 Months from Financial Year End (Dec 31 FY -> Sept 30)
  const taxDeadlineNote = "9 Months from Financial Year End (e.g., Dec 31 FY End -> Sept 30 Filing Deadline)";

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>UAE Corporate Tax & SBR Relief</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE 9% Corporate Tax & Small Business Relief Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your exact UAE Corporate Tax liability, 0% threshold (under AED 375,000 profit), and AED 3M Small Business Relief (SBR) tax savings.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* SBR RELIEF BANNER */}
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isEligibleForSBR
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-navy-900 border-gold-500 text-white"
            }`}
          >
            <CheckCircle2 className="text-gold-500 shrink-0" size={40} />
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isEligibleForSBR
                  ? "🎉 Eligible for 0% Corporate Tax via Small Business Relief (SBR)!"
                  : "Standard 9% Corporate Tax Rate Applies (Revenue > AED 3M)"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isEligibleForSBR
                  ? `Your revenue (AED ${(annualRevenueAED / 1000000).toFixed(2)}M) is below AED 3 Million limit. By electing Small Business Relief, your UAE Corporate Tax is AED 0!`
                  : `Your revenue exceeds the AED 3 Million SBR limit. The standard 9% tax applies on net profits exceeding AED 375,000.`}
              </p>
            </div>
          </div>

          {/* INPUT SLIDERS */}
          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* INPUT 1: REVENUE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Revenue (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualRevenueAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="6000000"
                step="100000"
                value={annualRevenueAED}
                onChange={(e) => setAnnualRevenueAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                SBR Exemption Limit: AED 3,000,000.
              </span>
            </div>

            {/* INPUT 2: NET PROFIT */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Net Taxable Profit (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualNetProfitAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="50000"
                value={annualNetProfitAED}
                onChange={(e) => setAnnualNetProfitAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                0% Threshold: AED 375,000 profit.
              </span>
            </div>
          </div>

          {/* RESULT METRICS */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-3">
              <span className="text-xs font-semibold text-gray-500 uppercase">Standard Corporate Tax (Without SBR)</span>
              <div className="text-3xl font-serif font-bold text-navy-950">
                AED {Math.round(standardCorporateTaxAED).toLocaleString()}
              </div>
              <p className="text-xs text-gray-600">Calculated as 9% on profit above AED 375k.</p>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-3 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">Net Corporate Tax Payable (With SBR Election)</span>
              <div className="text-3xl font-serif font-bold text-white">
                AED {Math.round(taxWithSBRAED).toLocaleString()}
              </div>
              {isEligibleForSBR && (
                <p className="text-xs text-emerald-400 font-semibold">
                  🎉 Small Business Relief saves you AED {Math.round(sbrSavingsAED).toLocaleString()}!
                </p>
              )}
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need FTA Corporate Tax Registration & SBR Election?</h4>
              <p className="text-xs text-gray-600">Official FTA TRN registration & Small Business Relief filing.</p>
            </div>
            <Link to="/uae-services/corporate-tax-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Register Corporate Tax with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
