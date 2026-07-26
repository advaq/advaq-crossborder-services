import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-llc-vs-c-corp")({
  head: () => ({
    meta: [
      { title: "US LLC vs C-Corporation Tax & Structure Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC vs C-Corp tax comparison calculator. Compare 0% foreign pass-through LLC tax vs 21% US corporate tax for C-Corporations.",
      },
      {
        name: "keywords",
        content:
          "us llc vs c corp tax calculator 2026, foreign founder llc vs c corporation comparison, Delaware c corp vs Wyoming llc non resident",
      },
      {
        property: "og:title",
        content: "US LLC vs C-Corporation Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare tax burden, VC fundraising eligibility, and annual compliance between LLC and C-Corp.",
      },
      { property: "og:url", content: "/calculators/us-llc-vs-c-corp" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-llc-vs-c-corp" }],
  }),
  component: USLLCVsCCorpCalculatorPage,
});

function USLLCVsCCorpCalculatorPage() {
  const [annualProfit, setAnnualProfit] = useState<number>(100000);
  const [plansVcFundraising, setPlansVcFundraising] = useState<boolean>(false);

  // 1. LLC (Single-Member Disregarded Entity - Non-US Resident 0% Tax if no ETBUS)
  const llcTax = 0;
  const llcTakeHome = annualProfit - llcTax;

  // 2. C-CORPORATION (21% Flat Federal Corporate Tax + Potential Dividend WHT 30%)
  const cCorpTax = annualProfit * 0.21;
  const cCorpNetAfterTax = annualProfit - cCorpTax;
  const cCorpDividendTax = cCorpNetAfterTax * 0.3; // 30% Statutory WHT
  const cCorpTakeHome = cCorpNetAfterTax - cCorpDividendTax;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>LLC vs C-Corp Comparison</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US LLC vs C-Corporation Tax Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Compare 0% pass-through tax efficiency of a foreign-owned US LLC against the 21% corporate tax rate of a Delaware C-Corp.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* PROFIT SLIDER */}
          <div className="max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border">
            <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider block">
              Annual US Business Net Profit ($):
            </label>
            <div className="text-4xl font-serif font-bold text-gold-600">
              ${annualProfit.toLocaleString()} USD
            </div>
            <input
              type="range"
              min="20000"
              max="500000"
              step="10000"
              value={annualProfit}
              onChange={(e) => setAnnualProfit(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg"
            />
          </div>

          {/* COMPARISON CARDS */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD 1: LLC */}
            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white flex flex-col justify-between relative shadow-lg">
              <div className="absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-bl-xl">
                Best for Bootstrapped / Agencies
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-2">Single-Member US LLC</h3>
                <p className="text-xs text-navy-200 mb-6">Pass-through entity. 0% US Federal Income Tax for non-residents without ETBUS.</p>

                <div className="space-y-3 text-xs text-navy-200 mb-6">
                  <div className="flex justify-between">
                    <span>US Corporate Tax Rate:</span>
                    <strong className="font-mono text-emerald-400">0% (Pass-through)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Total US Federal Tax Paid:</span>
                    <strong className="font-mono text-emerald-400">$0 USD</strong>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-4 rounded-xl text-center">
                <span className="text-xs text-gold-500 uppercase font-semibold block mb-1">Net Owner Take-Home</span>
                <div className="text-3xl font-serif font-bold text-white">
                  ${llcTakeHome.toLocaleString()} USD
                </div>
              </div>
            </div>

            {/* CARD 2: C-CORP */}
            <div className="border border-border rounded-xl p-6 bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-semibold text-navy-950 mb-2">Delaware C-Corporation</h3>
                <p className="text-xs text-gray-600 mb-6">Required for US VC fundraising & stock option pools. Subject to double taxation.</p>

                <div className="space-y-3 text-xs text-gray-700 mb-6">
                  <div className="flex justify-between">
                    <span>21% Federal Corporate Tax:</span>
                    <strong className="font-mono text-red-600">${Math.round(cCorpTax).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>30% Dividend Withholding Tax:</span>
                    <strong className="font-mono text-red-600">${Math.round(cCorpDividendTax).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 p-4 rounded-xl text-center border border-navy-100">
                <span className="text-xs text-navy-600 uppercase font-semibold block mb-1">Net Owner Take-Home</span>
                <div className="text-3xl font-serif font-bold text-navy-950">
                  ${Math.round(cCorpTakeHome).toLocaleString()} USD
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need Structure Advice from a US Tax Attorney?</h4>
              <p className="text-xs text-gray-600">Form Wyoming LLC or Delaware C-Corp with full tax structuring.</p>
            </div>
            <Link to="/us-services/wyoming-llc-formation" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Form US Entity with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
