import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Globe,
  Shield,
  ArrowRight,
  Sparkles,
  PoundSterling,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-vs-pakistan-tax-comparison")({
  head: () => ({
    meta: [
      { title: "UK vs Pakistan Business Tax Comparison Tool (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive tax comparison tool for dual-resident & expat Pakistani founders. Compare UK LTD dividends vs Pakistan FBR IT Export 0.25% tax exemption.",
      },
      {
        name: "keywords",
        content:
          "uk vs pakistan tax comparison 2026, dual resident tax uk pakistan dtt article 22, fbr 154a 0.25 percent it export tax vs uk ltd dividend",
      },
      {
        property: "og:title",
        content: "UK vs Pakistan Business Tax Comparison Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare UK Corporation & Dividend Tax side-by-side with Pakistan FBR IT Export 0.25% tax exemption under UK-PK Double Tax Treaty.",
      },
      { property: "og:url", content: "/calculators/uk-vs-pakistan-tax-comparison" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-vs-pakistan-tax-comparison" }],
  }),
  component: UKVsPakistanTaxComparisonPage,
});

function UKVsPakistanTaxComparisonPage() {
  const [annualProfitGbp, setAnnualProfitGbp] = useState<number>(50000);
  const pkrExchangeRate = 350; // 1 GBP = ~350 PKR

  // 1. UK LTD STRUCTURE (Salary £12.5k + Dividends + 19% CT)
  const salary = Math.min(annualProfitGbp, 12570);
  const profitForCt = Math.max(0, annualProfitGbp - salary);
  const ukCt = profitForCt * 0.19;
  const netDiv = profitForCt - ukCt;
  const taxableDiv = Math.max(0, netDiv - 500);
  const ukDivTax = taxableDiv > 37700 ? 37700 * 0.0875 + (taxableDiv - 37700) * 0.3375 : taxableDiv * 0.0875;
  const ukTotalTaxGbp = ukCt + ukDivTax;
  const ukNetTakeHomeGbp = annualProfitGbp - ukTotalTaxGbp;

  // 2. PAKISTAN REGISTERED IT EXPORTER (PSEB + FBR 154A 0.25% Final Tax Rate)
  const pkFbrTaxGbp = annualProfitGbp * 0.0025; // 0.25% final tax
  const pkNetTakeHomeGbp = annualProfitGbp - pkFbrTaxGbp;

  const annualTaxSavingsPkr = (ukTotalTaxGbp - pkFbrTaxGbp) * pkrExchangeRate;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK vs Pakistan Tax Comparison</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            🇬🇧 UK vs 🇵🇰 Pakistan Tax Comparison Tool (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Side-by-side tax comparison for dual-resident & expat Pakistani founders: UK LTD dividends vs Pakistan FBR 0.25% IT Export Exemption.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* PROFIT SLIDER */}
          <div className="max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border">
            <div className="flex justify-between items-center mb-1">
              <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                Annual International Profit (£ GBP):
              </label>
              <span className="font-mono text-gold-600 font-bold text-lg">
                £{annualProfitGbp.toLocaleString()} ({ (annualProfitGbp * pkrExchangeRate / 1000000).toFixed(2) }M PKR)
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="200000"
              step="5000"
              value={annualProfitGbp}
              onChange={(e) => setAnnualProfitGbp(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
            />
          </div>

          {/* SIDE BY SIDE COMPARISON GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* UK LTD CARD */}
            <div className="border border-border rounded-2xl p-6 bg-white space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇬🇧</span>
                  <h3 className="font-serif font-bold text-navy-950 text-lg">UK LTD Structure</h3>
                </div>
                <span className="text-xs bg-navy-100 text-navy-900 px-3 py-1 rounded-full font-medium">HMRC Rules</span>
              </div>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Corporation Tax (19%):</span>
                  <strong className="font-mono">£{Math.round(ukCt).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Director Dividend Tax:</span>
                  <strong className="font-mono">£{Math.round(ukDivTax).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-border font-semibold text-navy-950">
                  <span>Total UK Tax Bill:</span>
                  <strong className="font-mono text-gold-600">£{Math.round(ukTotalTaxGbp).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-border text-sm font-bold text-navy-950">
                  <span>Net Take-Home Pay:</span>
                  <strong className="font-mono text-emerald-600">£{Math.round(ukNetTakeHomeGbp).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            {/* PAKISTAN FBR IT EXPORT CARD */}
            <div className="border-2 border-gold-500 rounded-2xl p-6 bg-navy-950 text-white space-y-4 shadow-lg">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇵🇰</span>
                  <h3 className="font-serif font-bold text-white text-lg">Pakistan IT Exporter</h3>
                </div>
                <span className="text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium">FBR 154A 0.25%</span>
              </div>
              <div className="space-y-2 text-xs text-navy-200">
                <div className="flex justify-between">
                  <span>FBR Sec 154A Final Tax (0.25%):</span>
                  <strong className="font-mono text-emerald-400">£{Math.round(pkFbrTaxGbp).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>SECP & PSEB Annual Compliance:</span>
                  <strong className="font-mono text-white">~£200</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 font-semibold text-white">
                  <span>Total Pakistan Tax Bill:</span>
                  <strong className="font-mono text-gold-400">£{Math.round(pkFbrTaxGbp + 200).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white">
                  <span>Net Take-Home Pay:</span>
                  <strong className="font-mono text-emerald-400">£{Math.round(pkNetTakeHomeGbp - 200).toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* DTT TREATY EXPLANATION */}
          <div className="bg-off-white border border-border p-5 rounded-xl text-xs space-y-2 text-navy-950">
            <h4 className="font-serif font-bold text-sm flex items-center gap-2">
              <Shield size={16} className="text-gold-500" />
              UK-Pakistan Double Taxation Treaty (Article 22)
            </h4>
            <p className="text-gray-600 leading-relaxed">
              If you are resident in both UK and Pakistan, Article 22 of the Double Taxation Agreement ensures you never pay double tax. UK HMRC grants full Foreign Tax Credit relief for tax already paid to FBR Pakistan.
            </p>
          </div>

          <div className="pt-4 text-center">
            <Link to="/contact" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Book Cross-Border Structure Review <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
