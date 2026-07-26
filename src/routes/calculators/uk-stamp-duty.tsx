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
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-stamp-duty")({
  head: () => ({
    meta: [
      { title: "UK Stamp Duty Land Tax (SDLT) Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Stamp Duty Land Tax calculator. Calculates SDLT for property buyers, overseas non-resident surcharge (+2%), and BTL additional property (+5%).",
      },
      {
        name: "keywords",
        content:
          "uk stamp duty calculator 2026, sdlt non resident overseas buyer 2 percent surcharge, uk property purchase tax calculator",
      },
      {
        property: "og:title",
        content: "UK Stamp Duty Land Tax (SDLT) Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact UK Stamp Duty Land Tax including overseas non-resident and additional property surcharges.",
      },
      { property: "og:url", content: "/calculators/uk-stamp-duty" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-stamp-duty" }],
  }),
  component: UKStampDutyCalculatorPage,
});

function UKStampDutyCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState<number>(450000);
  const [buyerType, setBuyerType] = useState<"next" | "first" | "additional">("additional");
  const [isNonResident, setIsNonResident] = useState<boolean>(true); // Overseas buyer +2%

  // Surcharges
  const additionalSurcharge = buyerType === "additional" ? 0.05 : 0; // +5%
  const overseasSurcharge = isNonResident ? 0.02 : 0; // +2%
  const totalSurchargeRate = additionalSurcharge + overseasSurcharge;

  // SDLT Band Calculation
  let baseSdlt = 0;

  if (buyerType === "first" && propertyPrice <= 625000) {
    // First Time Buyer Relief: 0% up to £425,000, 5% on £425,001 to £625,000
    if (propertyPrice > 425000) {
      baseSdlt = (propertyPrice - 425000) * 0.05;
    }
  } else {
    // Standard SDLT Bands
    // Band 1: £0 - £250,000 (0%)
    // Band 2: £250,001 - £925,000 (5%)
    // Band 3: £925,001 - £1,500,000 (10%)
    // Band 4: >£1,500,000 (12%)
    if (propertyPrice > 250000) {
      const band2Amount = Math.min(propertyPrice, 925000) - 250000;
      baseSdlt += band2Amount * 0.05;
    }
    if (propertyPrice > 925000) {
      const band3Amount = Math.min(propertyPrice, 1500000) - 925000;
      baseSdlt += band3Amount * 0.10;
    }
    if (propertyPrice > 1500000) {
      const band4Amount = propertyPrice - 1500000;
      baseSdlt += band4Amount * 0.12;
    }
  }

  // Surcharge is applied to the entire property price for portions above threshold or total price
  const surchargeSdlt = propertyPrice * totalSurchargeRate;
  const totalSdltPayable = baseSdlt + surchargeSdlt;

  const effectiveSdltRate = propertyPrice > 0 ? (totalSdltPayable / propertyPrice) * 100 : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK Stamp Duty (SDLT)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Stamp Duty Land Tax (SDLT) Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact UK property Stamp Duty tax including First-Time Buyer relief, +5% BTL surcharge, and +2% Overseas Buyer surcharge.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: PROPERTY PRICE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Property Purchase Price (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{propertyPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="2000000"
                step="25000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>£100,000</span>
                <span>£1,000,000</span>
                <span>£2,000,000+</span>
              </div>
            </div>

            {/* INPUT 2: BUYER STATUS */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Buyer Property Status:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setBuyerType("first")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    buyerType === "first"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  First-Time Buyer
                </button>

                <button
                  type="button"
                  onClick={() => setBuyerType("next")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    buyerType === "next"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Main Residence
                </button>

                <button
                  type="button"
                  onClick={() => setBuyerType("additional")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    buyerType === "additional"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Additional / Buy-to-Let (+5%)
                </button>
              </div>
            </div>

            {/* TOGGLE: OVERSEAS BUYER */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Non-UK Resident / Overseas Buyer Surcharge (+2%)</strong>
                <span className="text-gray-500 text-xs">Applied to non-UK residents purchasing UK residential property.</span>
              </div>
              <input
                type="checkbox"
                checked={isNonResident}
                onChange={(e) => setIsNonResident(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Stamp Duty (SDLT) Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Base SDLT Tax:</span>
                  <span className="font-mono text-white font-semibold">£{Math.round(baseSdlt).toLocaleString()}</span>
                </div>
                {additionalSurcharge > 0 && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Additional Property (+5% Surcharge):</span>
                    <span className="font-mono text-amber-400 font-semibold">+£{Math.round(propertyPrice * 0.05).toLocaleString()}</span>
                  </div>
                )}
                {isNonResident && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Overseas Non-Resident (+2% Surcharge):</span>
                    <span className="font-mono text-amber-400 font-semibold">+£{Math.round(propertyPrice * 0.02).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective SDLT Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">{effectiveSdltRate.toFixed(2)}%</span>
                </div>
              </div>

              {/* NET SDLT DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Stamp Duty Payable
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(totalSdltPayable).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ Property Tax Legal Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
