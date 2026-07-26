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

export const Route = createFileRoute("/calculators/uk-capital-gains-tax")({
  head: () => ({
    meta: [
      { title: "UK Capital Gains Tax (CGT) Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Capital Gains Tax calculator. Calculate CGT for property sales, stocks, shares, and crypto. Applies £3,000 allowance and 18%/24% property rates.",
      },
      {
        name: "keywords",
        content:
          "uk capital gains tax calculator 2026, uk cgt calculator property shares crypto, non resident uk property capital gains tax",
      },
      {
        property: "og:title",
        content: "UK Capital Gains Tax (CGT) Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate UK Capital Gains Tax on UK property sales, stocks, and crypto for UK residents and non-residents.",
      },
      { property: "og:url", content: "/calculators/uk-capital-gains-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-capital-gains-tax" }],
  }),
  component: UKCapitalGainsTaxCalculatorPage,
});

function UKCapitalGainsTaxCalculatorPage() {
  const [assetType, setAssetType] = useState<"property" | "shares">("property");
  const [purchasePrice, setPurchasePrice] = useState<number>(200000);
  const [salePrice, setSalePrice] = useState<number>(320000);
  const [allowableCosts, setAllowableCosts] = useState<number>(10000); // Legal, estate agent, improvement fees
  const [taxBand, setTaxBand] = useState<"basic" | "higher">("higher");

  // CGT Rules 2026
  const annualExemptAmount = 3000; // £3,000 exemption limit

  const grossGain = Math.max(0, salePrice - purchasePrice);
  const netGainBeforeExemption = Math.max(0, grossGain - allowableCosts);
  const taxableGain = Math.max(0, netGainBeforeExemption - annualExemptAmount);

  // Tax Rates
  // Property: 18% Basic / 24% Higher
  // Shares/Crypto: 10% Basic / 20% Higher
  let cgtRate = 24;
  if (assetType === "property") {
    cgtRate = taxBand === "basic" ? 18 : 24;
  } else {
    cgtRate = taxBand === "basic" ? 10 : 20;
  }

  const capitalGainsTax = taxableGain * (cgtRate / 100);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK Capital Gains Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Capital Gains Tax (CGT) Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate CGT for UK residential property sales, stocks, and crypto assets. Applies the £3,000 annual allowance.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* ASSET TYPE */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Asset Type:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setAssetType("property")}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    assetType === "property"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Residential Property (18% / 24%)
                </button>
                <button
                  type="button"
                  onClick={() => setAssetType("shares")}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    assetType === "shares"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Shares / Crypto / Business Assets (10% / 20%)
                </button>
              </div>
            </div>

            {/* PURCHASE & SALE PRICE */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-1">
                  Original Purchase Price (£):
                </label>
                <input
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full bg-white border border-border rounded-xl p-3 text-sm text-navy-950 font-bold font-mono"
                />
              </div>

              <div>
                <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-1">
                  Sale / Disposal Price (£):
                </label>
                <input
                  type="number"
                  value={salePrice}
                  onChange={(e) => setSalePrice(Number(e.target.value))}
                  className="w-full bg-white border border-border rounded-xl p-3 text-sm text-navy-950 font-bold font-mono"
                />
              </div>
            </div>

            {/* ALLOWABLE COSTS */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Allowable Costs (Legal, Estate Agent, Improvements) (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  £{allowableCosts.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={allowableCosts}
                onChange={(e) => setAllowableCosts(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* TAX BAND */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Your UK Income Tax Rate Bracket:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setTaxBand("basic")}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    taxBand === "basic"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Basic Rate Taxpayer (Income &lt;£50,270)
                </button>
                <button
                  type="button"
                  onClick={() => setTaxBand("higher")}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    taxBand === "higher"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Higher / Additional Rate (Income &gt;£50,270)
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>CGT Calculation Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Capital Gain:</span>
                  <span className="font-mono text-white font-semibold">£{grossGain.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Deductible Buying/Selling Costs:</span>
                  <span className="font-mono text-emerald-400 font-semibold">-£{allowableCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Annual Exempt Allowance:</span>
                  <span className="font-mono text-emerald-400 font-semibold">-£{annualExemptAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Taxable Gain:</span>
                  <span className="font-mono text-white font-semibold">£{taxableGain.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Applied CGT Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">{cgtRate}%</span>
                </div>
              </div>

              {/* NET TAX DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Capital Gains Tax Payable
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(capitalGainsTax).toLocaleString()}
                </div>
                {assetType === "property" && (
                  <p className="mt-3 text-[11px] text-amber-300">
                    ⚠️ Note: UK Property CGT returns must be reported to HMRC within 60 days of completion!
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ CGT Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
