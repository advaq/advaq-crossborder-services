import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertCircle,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-sales-tax")({
  head: () => ({
    meta: [
      { title: "US Sales Tax Economic Nexus & Registration Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US Sales Tax calculator for foreign sellers. Check $100,000 revenue or 200 transaction Economic Nexus limits across US states.",
      },
      {
        name: "keywords",
        content:
          "us sales tax economic nexus calculator 2026, foreign seller stripe shopify us sales tax threshold, state sales tax registration threshold foreign llc",
      },
      {
        property: "og:title",
        content: "US Sales Tax Economic Nexus Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate economic nexus limits across top US states for e-commerce, software, and Stripe sellers.",
      },
      { property: "og:url", content: "/calculators/us-sales-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-sales-tax" }],
  }),
  component: USSalesTaxCalculatorPage,
});

function USSalesTaxCalculatorPage() {
  const [annualUSRevenue, setAnnualUSRevenue] = useState<number>(120000);
  const [annualUSTransactions, setAnnualUSTransactions] = useState<number>(250);
  const [sellsDigitalGoods, setSellsDigitalGoods] = useState<boolean>(true);

  // Economic Nexus thresholds generally trigger at $100,000 revenue OR 200 transactions in major states (e.g. CA, NY, TX, FL)
  const isNexusTriggered = annualUSRevenue >= 100000 || annualUSTransactions >= 200;

  // Estimated States Triggered
  let statesCount = 0;
  if (annualUSRevenue > 500000) statesCount = 15;
  else if (annualUSRevenue > 250000) statesCount = 8;
  else if (isNexusTriggered) statesCount = 3;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US Sales Tax Nexus</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US Sales Tax Economic Nexus Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Determine where your Stripe, Shopify, or Amazon store triggers Economic Nexus ($100k revenue or 200 transactions) across US states.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* NEXUS RESULT BANNER */}
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isNexusTriggered
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : "bg-emerald-50 border-emerald-300 text-emerald-950"
            }`}
          >
            {isNexusTriggered ? (
              <AlertCircle className="text-amber-600 shrink-0" size={40} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={40} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isNexusTriggered
                  ? `⚠️ Economic Nexus Triggered in ~${statesCount} US States`
                  : "Below Economic Nexus Thresholds (No Sales Tax Permit Required)"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isNexusTriggered
                  ? "Your US sales or transaction volume has crossed the $100,000 or 200 transaction threshold in major states. You must register for US Sales Tax permits and collect tax on checkout."
                  : "Your US sales are below the threshold in all 45 sales-tax states. No state sales tax registration is currently required."}
              </p>
            </div>
          </div>

          {/* INPUT SLIDERS */}
          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* INPUT 1: US REVENUE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Total US Gross Sales ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${annualUSRevenue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="600000"
                step="10000"
                value={annualUSRevenue}
                onChange={(e) => setAnnualUSRevenue(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Benchmark Limit: $100,000 per state.
              </span>
            </div>

            {/* INPUT 2: TRANSACTIONS */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Separate US Orders / Transactions:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {annualUSTransactions} Orders
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={annualUSTransactions}
                onChange={(e) => setAnnualUSTransactions(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Benchmark Limit: 200 transactions per state.
              </span>
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need US State Sales Tax Registration & Filing?</h4>
              <p className="text-xs text-gray-600">State permit registration, TaxJar/Avalara setup & monthly filing.</p>
            </div>
            <Link to="/us-services/corporate-tax-return" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Get Sales Tax Assistance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
