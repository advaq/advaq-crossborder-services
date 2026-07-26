import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  PoundSterling,
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-vat")({
  head: () => ({
    meta: [
      { title: "UK VAT £90,000 Threshold & Scheme Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK VAT threshold calculator. Check rolling 12-month turnover against £90,000 limit and compare Flat Rate Scheme vs Standard 20% VAT.",
      },
      {
        name: "keywords",
        content:
          "uk vat threshold calculator 90000 2026, uk vat flat rate scheme calculator, voluntary vat registration uk non resident",
      },
      {
        property: "og:title",
        content: "UK VAT £90,000 Threshold & Scheme Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate whether you must register for UK VAT and compare Flat Rate vs Standard 20% VAT Scheme savings.",
      },
      { property: "og:url", content: "/calculators/uk-vat" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-vat" }],
  }),
  component: UKVATCalculatorPage,
});

function UKVATCalculatorPage() {
  const [rollingTurnover, setRollingTurnover] = useState<number>(85000);
  const [annualVatExpenses, setAnnualVatExpenses] = useState<number>(15000); // Expenses subject to VAT
  const [flatRatePercentage, setFlatRatePercentage] = useState<number>(14.5); // E.g. IT Consultancy
  const [isFirstYearDiscount, setIsFirstYearDiscount] = useState<boolean>(true); // 1% discount in 1st year

  const vatThreshold = 90000;
  const isVatRegistrationMandatory = rollingTurnover >= vatThreshold;

  // Effective Flat Rate (1% reduction for 1st year of registration)
  const effectiveFlatRate = Math.max(0, flatRatePercentage - (isFirstYearDiscount ? 1 : 0));

  // 1. STANDARD RATE VAT (20% Output - 20% Input Reclaimed)
  const vatOutputStandard = rollingTurnover * 0.2;
  const vatInputStandard = annualVatExpenses * 0.2;
  const netVatPayableStandard = Math.max(0, vatOutputStandard - vatInputStandard);

  // 2. FLAT RATE SCHEME VAT (Gross Revenue * Flat Rate %)
  const grossRevenueIncludingVat = rollingTurnover * 1.2;
  const netVatPayableFlatRate = grossRevenueIncludingVat * (effectiveFlatRate / 100);

  const flatRateSavings = netVatPayableStandard - netVatPayableFlatRate;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK VAT Threshold & Scheme</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK VAT £90,000 Threshold & Scheme Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Monitor your rolling 12-month UK turnover against the £90k mandatory VAT limit and compare Flat Rate vs Standard 20% VAT savings.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* MANDATORY STATUS BANNER */}
          <div
            className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isVatRegistrationMandatory
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : "bg-emerald-50 border-emerald-300 text-emerald-950"
            }`}
          >
            {isVatRegistrationMandatory ? (
              <AlertTriangle className="text-amber-600 shrink-0" size={32} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={32} />
            )}
            <div>
              <h3 className="font-serif font-semibold text-lg">
                {isVatRegistrationMandatory
                  ? "Mandatory UK VAT Registration Required!"
                  : "Below Mandatory £90,000 Threshold (Voluntary Optional)"}
              </h3>
              <p className="text-xs opacity-90 mt-0.5">
                {isVatRegistrationMandatory
                  ? "Your 12-month rolling UK turnover has crossed £90,000. You must register for UK VAT with HMRC within 30 days to avoid penalties."
                  : "You are currently under the mandatory threshold. Voluntary VAT registration can still be beneficial if your B2B clients reclaim VAT."}
              </p>
            </div>
          </div>

          {/* INPUT SLIDERS */}
          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* INPUT 1: ROLLING TURNOVER */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  12-Month UK Turnover (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{rollingTurnover.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="250000"
                step="5000"
                value={rollingTurnover}
                onChange={(e) => setRollingTurnover(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Threshold: £90,000 (Mandatory Limit)
              </span>
            </div>

            {/* INPUT 2: VAT EXPENSES */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual VAT-Subject Expenses (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{annualVatExpenses.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={rollingTurnover * 0.5}
                step="2500"
                value={annualVatExpenses}
                onChange={(e) => setAnnualVatExpenses(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Hardware, software, advertising, contractor costs with 20% VAT.
              </span>
            </div>
          </div>

          {/* SCHEME COMPARISON */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* SCHEME 1: STANDARD 20% */}
            <div className="border border-border rounded-xl p-6 bg-white space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <h4 className="font-serif font-semibold text-navy-950 text-lg">Standard Rate VAT (20%)</h4>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">Reclaim Input VAT</span>
              </div>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Output VAT Collected (20%):</span>
                  <strong className="font-mono">£{Math.round(vatOutputStandard).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Input VAT Reclaimed (20%):</span>
                  <strong className="font-mono text-emerald-600">-£{Math.round(vatInputStandard).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-border text-sm font-bold text-navy-950">
                  <span>Net Annual HMRC VAT Bill:</span>
                  <strong className="font-mono">£{Math.round(netVatPayableStandard).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            {/* SCHEME 2: FLAT RATE SCHEME */}
            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-4 shadow-lg">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <h4 className="font-serif font-semibold text-white text-lg">Flat Rate VAT Scheme</h4>
                <span className="text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium">Simplified %</span>
              </div>
              <div className="space-y-2 text-xs text-navy-200">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Industry Sector Rate:</span>
                    <select
                      value={flatRatePercentage}
                      onChange={(e) => setFlatRatePercentage(Number(e.target.value))}
                      className="bg-navy-900 border border-gold-500/40 text-white text-xs rounded p-1.5 font-sans"
                    >
                      <option value={14.5}>14.5% — IT Consultancy & Telecommunications</option>
                      <option value={14.0}>14.0% — Management Consultancy & Business Services</option>
                      <option value={11.0}>11.0% — Advertising, Design & Photography</option>
                      <option value={14.5}>14.5% — Legal & Financial Services</option>
                      <option value={7.5}>7.5% — Retail & Goods Sales</option>
                      <option value={12.5}>12.5% — Catering & Hotel Services</option>
                      <option value={6.5}>6.5% — Pubs & Restaurants</option>
                      <option value={16.5}>16.5% — Limited Cost Business (&lt;2% goods expenditure)</option>
                    </select>
                  </div>

                  <label className="flex items-center justify-between text-xs cursor-pointer bg-navy-900/60 p-2 rounded border border-white/10">
                    <span>Apply First-Year 1% HMRC Discount</span>
                    <input
                      type="checkbox"
                      checked={isFirstYearDiscount}
                      onChange={(e) => setIsFirstYearDiscount(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                  </label>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white">
                  <span>Net Annual HMRC VAT Bill:</span>
                  <strong className="font-mono text-gold-400">£{Math.round(netVatPayableFlatRate).toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need UK VAT Registration & Quarterly Return Filing?</h4>
              <p className="text-xs text-gray-600">HMRC EORI, Voluntary/Mandatory Registration & Flat Rate Advice.</p>
            </div>
            <Link to="/uk-services/vat-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Register UK VAT with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
