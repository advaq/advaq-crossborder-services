import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Globe,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-double-tax-treaty")({
  head: () => ({
    meta: [
      { title: "UAE Double Tax Treaty (DTT) Benefit Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Double Tax Treaty calculator. Calculate withholding tax savings on dividends, interest & royalties under Pakistan-UAE & international DTTs.",
      },
      {
        name: "keywords",
        content:
          "uae double tax treaty calculator 2026, pakistan uae double tax treaty article 10 dividend wht, uae tax residency certificate trc calculator",
      },
      {
        property: "og:title",
        content: "UAE Double Tax Treaty (DTT) Benefit Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate withholding tax savings and Foreign Tax Credit relief under UAE international Double Tax Treaties.",
      },
      { property: "og:url", content: "/calculators/uae-double-tax-treaty" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-double-tax-treaty" }],
  }),
  component: UAEDoubleTaxTreatyCalculatorPage,
});

function UAEDoubleTaxTreatyCalculatorPage() {
  const [partnerCountry, setPartnerCountry] = useState<string>("pakistan");
  const [grossDividendAmountAED, setGrossDividendAmountAED] = useState<number>(200000);

  // Treaty Rates
  const treaties: Record<string, { dividendWht: number; interestWht: number; royaltyWht: number; name: string }> = {
    pakistan: { dividendWht: 10, interestWht: 10, royaltyWht: 10, name: "🇵🇰 Pakistan - UAE DTT" },
    india: { dividendWht: 10, interestWht: 12.5, royaltyWht: 10, name: "🇮🇳 India - UAE DTT" },
    uk: { dividendWht: 0, interestWht: 0, royaltyWht: 0, name: "🇬🇧 UK - UAE DTT" },
  };

  const currentTreaty = treaties[partnerCountry] || treaties.pakistan;

  // UAE local WHT rate is 0%. Standard non-treaty WHT in foreign countries can be 20-30%.
  const standardForeignWhtRate = 25; // 25% default
  const treatyWhtRate = currentTreaty.dividendWht;

  const standardWhtAED = grossDividendAmountAED * (standardForeignWhtRate / 100);
  const treatyWhtAED = grossDividendAmountAED * (treatyWhtRate / 100);
  const taxSavingsAED = standardWhtAED - treatyWhtAED;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>Double Tax Treaty Benefits</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Double Tax Treaty (DTT) Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate cross-border withholding tax reductions and Foreign Tax Credit relief under 135+ UAE International Tax Treaties.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* PARTNER COUNTRY */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Partner Treaty Country:
              </label>
              <select
                value={partnerCountry}
                onChange={(e) => setPartnerCountry(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="pakistan">🇵🇰 Pakistan (Pakistan - UAE Tax Treaty)</option>
                <option value="india">🇮🇳 India (India - UAE Tax Treaty)</option>
                <option value="uk">🇬🇧 United Kingdom (UK - UAE Tax Treaty)</option>
              </select>
            </div>

            {/* DIVIDEND AMOUNT */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross Cross-Border Dividend / Royalty Payment (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  AED {grossDividendAmountAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="25000"
                value={grossDividendAmountAED}
                onChange={(e) => setGrossDividendAmountAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Treaty Savings Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Treaty Agreement:</span>
                  <span className="font-mono text-white font-semibold">{currentTreaty.name}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Standard Non-Treaty WHT (25%):</span>
                  <span className="font-mono text-white">AED {Math.round(standardWhtAED).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Reduced Treaty WHT ({treatyWhtRate}%):</span>
                  <span className="font-mono text-emerald-400 font-semibold">AED {Math.round(treatyWhtAED).toLocaleString()}</span>
                </div>
              </div>

              {/* SAVINGS DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Tax Savings via UAE Tax Residency Certificate (TRC)
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  AED {Math.round(taxSavingsAED).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Apply for UAE Tax Residency Certificate (TRC)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
