import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-excise-tax")({
  head: () => ({
    meta: [
      { title: "UAE Excise Tax Calculator (50% / 100%) (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Excise Tax calculator for FTA registered importers & manufacturers. Calculate 100% tobacco/energy drinks & 50% carbonated/sweetened drinks tax.",
      },
      {
        name: "keywords",
        content:
          "uae excise tax calculator 2026, fta excise tax rates tobacco energy drinks 100 percent, dubai excise tax registration calculator",
      },
      {
        property: "og:title",
        content: "UAE Excise Tax Calculator (50% / 100%) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate FTA Excise Tax on tobacco, energy drinks, carbonated beverages, and e-cigarettes.",
      },
      { property: "og:url", content: "/calculators/uae-excise-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-excise-tax" }],
  }),
  component: UAEExciseTaxCalculatorPage,
});

function UAEExciseTaxCalculatorPage() {
  const [productCategory, setProductCategory] = useState<string>("energy");
  const [retailPriceAED, setRetailPriceAED] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(500);

  // Excise Tax Rates
  const rates: Record<string, { rate: number; name: string }> = {
    tobacco: { rate: 1.0, name: "Tobacco Products (100%)" },
    energy: { rate: 1.0, name: "Energy Drinks (100%)" },
    vape: { rate: 1.0, name: "E-Cigarettes & Liquids (100%)" },
    carbonated: { rate: 0.5, name: "Carbonated Drinks (50%)" },
    sweetened: { rate: 0.5, name: "Sweetened Drinks (50%)" },
  };

  const currentProduct = rates[productCategory] || rates.energy;

  // Excise Tax Calculation = Quantity * Retail Price * Tax Rate
  const totalRetailValueAED = quantity * retailPriceAED;
  const totalExciseTaxAED = totalRetailValueAED * currentProduct.rate;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>UAE Excise Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Excise Tax Calculator (50% / 100%) (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate FTA Excise Tax liability for importers, producers, and stockpilers of tobacco, energy drinks, and sweetened beverages in Dubai & UAE.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* PRODUCT CATEGORY */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Excise Product Category:
              </label>
              <select
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="tobacco">Tobacco & Cigarette Products (100% Tax)</option>
                <option value="energy">Energy Drinks (100% Tax)</option>
                <option value="vape">E-Cigarettes & Vaping Liquids (100% Tax)</option>
                <option value="carbonated">Carbonated Drinks (50% Tax)</option>
                <option value="sweetened">Sweetened Beverages (50% Tax)</option>
              </select>
            </div>

            {/* RETAIL PRICE PER UNIT */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Declared Retail Price Per Unit (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  AED {retailPriceAED}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={retailPriceAED}
                onChange={(e) => setRetailPriceAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* QUANTITY */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Batch Quantity (Units):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  {quantity.toLocaleString()} Units
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>FTA Excise Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Product Category:</span>
                  <span className="font-mono text-white font-semibold">{currentProduct.name}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Total Declared Retail Value:</span>
                  <span className="font-mono text-white font-semibold">AED {totalRetailValueAED.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Applied Excise Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">{(currentProduct.rate * 100)}%</span>
                </div>
              </div>

              {/* NET TAX DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total FTA Excise Tax Due
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  AED {Math.round(totalExciseTaxAED).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Register UAE Excise Tax with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
