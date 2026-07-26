import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-it-export")({
  head: () => ({
    meta: [
      { title: "Pakistan IT Exporter 100% Tax Credit & FCVA USD Retention Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan IT export tax calculator. Calculate 100% tax credit savings under Section 154A, 0.25% WHT, PSEB registration ROI, and SBP 50% FCVA USD retention.",
      },
      {
        name: "keywords",
        content:
          "pakistan it export tax credit calculator section 154a 2026, pseb registration tax benefit freelancers software house, sbp fcva account usd retention limit calculator",
      },
      {
        property: "og:title",
        content: "Pakistan IT Exporter 100% Tax Credit Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate 100% tax exemption under Section 154A, PSEB registration benefits, and SBP FCVA USD retention.",
      },
      { property: "og:url", content: "/calculators/pakistan-it-export" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-it-export" }],
  }),
  component: PakistanITExportCalculatorPage,
});

function PakistanITExportCalculatorPage() {
  const [annualExportUsd, setAnnualExportUsd] = useState<number>(50000); // $50,000 USD
  const [exchangeRatePKR, setExchangeRatePKR] = useState<number>(280); // Rs 280 / $1 USD
  const [isPsebRegistered, setIsPsebRegistered] = useState<boolean>(true);

  const totalExportRevenuePKR = annualExportUsd * exchangeRatePKR;

  // 1. Standard Withholding Tax without Section 154A compliance: 1% WHT (or normal business tax up to 29%)
  // Under Section 154A:
  // - 0.25% Reduced WHT (if PSEB registered, FBR returns filed, and 80% export proceeds realized)
  // - 100% Tax Credit (154A) means final tax liability is capped at 0.25% instead of 29% corporate tax!

  const normalCorporateTaxPKR = totalExportRevenuePKR * 0.29;
  const section154aTaxPKR = totalExportRevenuePKR * (isPsebRegistered ? 0.0025 : 0.01);
  const taxSavingsPKR = normalCorporateTaxPKR - section154aTaxPKR;

  // SBP FCVA USD Retention (Exporters can retain up to 50% in USD in Exporters Special FCVA Account)
  const usdRetentionAllowed = annualExportUsd * 0.5;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>Pakistan IT Exporter Tax Credit</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan IT Exporter 100% Tax Credit Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 154A 100% tax credit savings, 0.25% reduced withholding tax, PSEB ROI, and SBP 50% USD foreign currency retention capacity.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* TAX CREDIT BANNER */}
          <div className="p-6 rounded-2xl border bg-navy-950 border-gold-500 text-white flex items-center justify-between">
            <div>
              <span className="text-xs text-gold-500 uppercase font-semibold block">Section 154A 100% Tax Credit Benefit</span>
              <h3 className="font-serif text-2xl font-bold mt-1 text-white">
                Save Rs {Math.round(taxSavingsPKR).toLocaleString()} PKR in FBR Income Tax!
              </h3>
              <p className="text-xs text-navy-200 mt-1">
                Your tax liability is reduced from 29% corporate rate down to 0.25% final withholding tax.
              </p>
            </div>
            <Link to="/pakistan-services/pseb-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0 hidden sm:block">
              Register PSEB with ADVAQ
            </Link>
          </div>

          {/* INPUT SLIDERS */}
          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* INPUT 1: ANNUAL EXPORT USD */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual IT Export Remittances ($ USD):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${annualExportUsd.toLocaleString()} USD
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={annualExportUsd}
                onChange={(e) => setAnnualExportUsd(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Equivalent PKR: Rs {(totalExportRevenuePKR / 100000).toLocaleString()} Lacs
              </span>
            </div>

            {/* INPUT 2: PSEB TOGGLE */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
                <input
                  type="checkbox"
                  checked={isPsebRegistered}
                  onChange={(e) => setIsPsebRegistered(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">PSEB Call Center / IT Exporter Registered?</strong>
                  <span className="text-gray-500">Qualifies for 0.25% reduced rate under Section 154A.</span>
                </div>
              </label>
            </div>
          </div>

          {/* SBP FCVA USD RETENTION DISPLAY */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Section 154A Final Tax (0.25%)</span>
              <div className="text-3xl font-serif font-bold text-navy-950">
                Rs {Math.round(section154aTaxPKR).toLocaleString()} PKR
              </div>
              <p className="text-xs text-gray-600">No further FBR audit or income tax liability.</p>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">SBP FCVA 50% USD Retention Allowance</span>
              <div className="text-3xl font-serif font-bold text-white">
                ${usdRetentionAllowed.toLocaleString()} USD
              </div>
              <p className="text-xs text-navy-200">Retain 50% in foreign currency to pay software, hosting & digital ad bills abroad.</p>
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need PSEB Registration & Section 154A Tax Exemption Certificate?</h4>
              <p className="text-xs text-gray-600">Complete PSEB registration, FBR 154A filing & FCVA bank approval.</p>
            </div>
            <Link to="/pakistan-services/pseb-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Get 100% Tax Credit with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
