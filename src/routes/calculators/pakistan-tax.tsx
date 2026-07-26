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
  Landmark,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-tax")({
  head: () => ({
    meta: [
      { title: "Pakistan Filer vs Non-Filer Tax Savings Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan Filer vs Non-Filer tax calculator. Calculate money saved on property purchases, car registration, bank transfers & FBR returns.",
      },
      {
        name: "keywords",
        content:
          "pakistan filer vs non filer tax savings calculator 2026, fbr active taxpayer list atl tax savings, section 236k 236c property tax non filer pakistan",
      },
      {
        property: "og:title",
        content: "Pakistan Filer vs Non-Filer Tax Savings Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact tax savings on property, vehicles, and bank transactions by restoring Active Taxpayer (ATL) Filer status.",
      },
      {
        property: "og:type",
        content: "website",
      },
      { property: "og:url", content: "/calculators/pakistan-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-tax" }],
  }),
  component: PakistanTaxCalculatorPage,
});

function PakistanTaxCalculatorPage() {
  const [propertyPurchaseValue, setPropertyPurchaseValue] = useState<number>(20000000); // 2 Crore PKR
  const [carEngineCapacity, setCarEngineCapacity] = useState<number>(1300); // 1300cc
  const [bankWithdrawalValue, setBankWithdrawalValue] = useState<number>(500000); // 5 Lac PKR

  // FBR Tax Rates 2026
  // Property Purchase Section 236K: Filer 3% vs Non-Filer 12% (or up to 15% depending on value)
  const propertyFilerTax = propertyPurchaseValue * 0.03;
  const propertyNonFilerTax = propertyPurchaseValue * 0.12;
  const propertySavings = propertyNonFilerTax - propertyFilerTax;

  // Car Registration Section 231B (1001-1300cc): Filer Rs 25,000 vs Non-Filer Rs 75,000
  let carFilerTax = 25000;
  let carNonFilerTax = 75000;
  if (carEngineCapacity > 1800) {
    carFilerTax = 150000;
    carNonFilerTax = 450000;
  } else if (carEngineCapacity > 1500) {
    carFilerTax = 75000;
    carNonFilerTax = 225000;
  }
  const carSavings = carNonFilerTax - carFilerTax;

  // Bank Withdrawal Section 231AB (Above Rs 50,000 per day): Filer 0% vs Non-Filer 0.9%
  const bankFilerTax = 0;
  const bankNonFilerTax = bankWithdrawalValue * 0.009;
  const bankSavings = bankNonFilerTax - bankFilerTax;

  const totalTaxSavings = propertySavings + carSavings + bankSavings;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators" className="hover:underline">Calculators</Link>
            <span>/</span>
            <span>Pakistan Filer Tax Savings</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Filer vs Non-Filer Tax Savings Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your exact money saved on property purchases, vehicle registration, and bank cash transactions by becoming an Active Taxpayer (ATL Filer).
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            {/* INPUT 1: PROPERTY PURCHASE VALUE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider">
                  1. Property Purchase Value (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  Rs {(propertyPurchaseValue / 100000).toLocaleString()} Lacs ({(propertyPurchaseValue / 10000000).toFixed(2)} Crore)
                </span>
              </div>
              <input
                type="range"
                min="5000000"
                max="100000000"
                step="2500000"
                value={propertyPurchaseValue}
                onChange={(e) => setPropertyPurchaseValue(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>Rs 50 Lacs</span>
                <span>Rs 5 Crore</span>
                <span>Rs 10 Crore+</span>
              </div>
            </div>

            {/* INPUT 2: CAR ENGINE CAPACITY */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                2. Vehicle Registration Engine Capacity:
              </label>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setCarEngineCapacity(1000)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    carEngineCapacity === 1000
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">Under 1000cc</strong>
                  <span className="text-[11px] opacity-80">Alto / Cultus</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCarEngineCapacity(1300)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    carEngineCapacity === 1300
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">1001cc – 1500cc</strong>
                  <span className="text-[11px] opacity-80">Yaris / City / Civic</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCarEngineCapacity(2000)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    carEngineCapacity === 2000
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">Above 1800cc</strong>
                  <span className="text-[11px] opacity-80">Fortuner / Sportage</span>
                </button>
              </div>
            </div>

            {/* INPUT 3: BANK WITHDRAWALS */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider">
                  3. Annual Bank Cash Transactions (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  Rs {(bankWithdrawalValue / 100000).toLocaleString()} Lacs
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="250000"
                value={bankWithdrawalValue}
                onChange={(e) => setBankWithdrawalValue(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT SUMMARY CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Your Filer Tax Savings</span>
              </div>

              {/* COST COMPARISON LIST */}
              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Property Tax (Filer vs Non-Filer):</span>
                  <span className="font-mono text-gold-400 font-semibold">Save Rs {propertySavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Vehicle Tax (Filer vs Non-Filer):</span>
                  <span className="font-mono text-gold-400 font-semibold">Save Rs {carSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Bank Cash Tax (Section 231AB):</span>
                  <span className="font-mono text-gold-400 font-semibold">Save Rs {bankSavings.toLocaleString()}</span>
                </div>
              </div>

              {/* TOTAL SAVINGS DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Money Saved as Filer
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  Rs {totalTaxSavings.toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-navy-200">
                  FBR Active Taxpayer Status (ATL) saves you massive withholding penalties.
                </div>
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/atl-restoration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Become Filer with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20Pakistan%20Filer%20Calculator%20(Total%20Savings:%20Rs%20${totalTaxSavings.toLocaleString()}).%20Please%20help%20me%20register%20NTN%20%26%20Filer.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp Pakistan Tax Lawyer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
