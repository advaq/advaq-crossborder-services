import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  DollarSign,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-freelancer-tax")({
  head: () => ({
    meta: [
      { title: "Pakistan Freelancer All-in-One Tax & FCVA Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free all-in-one Pakistan freelancer tax calculator. Calculate 0.25% Section 154A WHT, PSEB tax credit savings, FCVA 50% USD retention, and Upwork/Fiverr income tax.",
      },
      {
        name: "keywords",
        content:
          "pakistan freelancer tax calculator 2026, section 154a 0.25 percent wht upwork fiverr, fcva usd retention rate pakistan freelancers, pseb freelancer registration tax credit",
      },
      {
        property: "og:title",
        content: "Pakistan Freelancer All-in-One Tax & FCVA Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "All-in-one IT export tax, PSEB registration, and SBP FCVA USD retention calculator for Pakistani freelancers.",
      },
      { property: "og:url", content: "/calculators/pakistan-freelancer-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-freelancer-tax" }],
  }),
  component: PakistanFreelancerTaxPage,
});

function PakistanFreelancerTaxPage() {
  const [monthlyIncomeUSD, setMonthlyIncomeUSD] = useState<number>(2500);
  const [usdPkrRate, setUsdPkrRate] = useState<number>(278);
  const [isPsebRegistered, setIsPsebRegistered] = useState<boolean>(true);

  // Annual Math
  const annualIncomeUSD = monthlyIncomeUSD * 12;
  const annualIncomePKR = annualIncomeUSD * usdPkrRate;

  // Section 154A Reduced Final Tax Rate: 0.25% if PSEB registered, 1.0% if not registered
  const appliedWhtRate = isPsebRegistered ? 0.25 : 1.0;
  const totalTaxPayablePKR = annualIncomePKR * (appliedWhtRate / 100);

  // FCVA 50% Retention Limit
  const fcvaUsdRetainedMonthly = monthlyIncomeUSD * 0.5;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>Freelancer Complete Tax Tool</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Freelancer Complete Tax Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 154A 0.25% reduced tax rates, PSEB tax credit savings, and SBP Exporters' FCVA 50% USD retention limits.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: MONTHLY USD */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Monthly Freelance Income (USD $):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  ${monthlyIncomeUSD.toLocaleString()} USD
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="20000"
                step="250"
                value={monthlyIncomeUSD}
                onChange={(e) => setMonthlyIncomeUSD(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* INPUT 2: USD TO PKR RATE */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  USD to PKR Exchange Rate:
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  1 USD = Rs {usdPkrRate}
                </span>
              </div>
              <input
                type="range"
                min="250"
                max="320"
                step="1"
                value={usdPkrRate}
                onChange={(e) => setUsdPkrRate(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* PSEB TOGGLE */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <div>
                <strong className="text-navy-950 block text-sm">Are You Registered with PSEB (Pakistan Software Export Board)?</strong>
                <span className="text-gray-500 text-[11px]">PSEB registration unlocks the 0.25% concessional final tax rate under Section 154A.</span>
              </div>
              <input
                type="checkbox"
                checked={isPsebRegistered}
                onChange={(e) => setIsPsebRegistered(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Freelancer Tax & FCVA Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Annual Income (PKR):</span>
                  <span className="font-mono text-white font-semibold">Rs {Math.round(annualIncomePKR).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Section 154A WHT Rate:</span>
                  <span className="font-mono text-gold-400 font-bold">{appliedWhtRate}%</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>FCVA 50% Monthly USD Retention:</span>
                  <span className="font-mono text-emerald-400 font-bold">${fcvaUsdRetainedMonthly.toLocaleString()} USD / mo</span>
                </div>
              </div>

              {/* TOTAL TAX DUE */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Final Income Tax Due (Annual)
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  Rs {Math.round(totalTaxPayablePKR).toLocaleString()}
                </div>
                <p className="mt-2 text-[11px] text-navy-300">
                  That's only Rs {Math.round(totalTaxPayablePKR / 12).toLocaleString()} per month!
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/pseb-registration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Register PSEB & File Tax Return with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
