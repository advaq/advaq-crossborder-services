import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Building,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-real-estate-roi")({
  head: () => ({
    meta: [
      { title: "Dubai Real Estate ROI & Tax Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Dubai real estate ROI calculator. Calculate 4% DLD fee, 2% agency fee, service charges, net rental yields, and 0% capital gains tax.",
      },
      {
        name: "keywords",
        content:
          "dubai real estate roi calculator 2026, dubai property rental yield tax calculator 4 percent dld, 0 capital gains tax property dubai",
      },
      {
        property: "og:title",
        content: "Dubai Real Estate ROI & Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate net rental yield, DLD transfer fees, and 0% tax savings for Dubai property investments.",
      },
      { property: "og:url", content: "/calculators/uae-real-estate-roi" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-real-estate-roi" }],
  }),
  component: UAERealEstateROIPage,
});

function UAERealEstateROIPage() {
  const [propertyPriceAED, setPropertyPriceAED] = useState<number>(1500000); // 1.5M AED
  const [annualRentAED, setAnnualRentAED] = useState<number>(105000); // 105k AED (7% gross)
  const [serviceChargesAED, setServiceChargesAED] = useState<number>(12000);

  // Acquisition Costs
  const dldFeeAED = propertyPriceAED * 0.04; // 4% DLD Transfer Fee
  const agencyFeeAED = propertyPriceAED * 0.02; // 2% Real Estate Agency Fee
  const totalPurchaseCostAED = propertyPriceAED + dldFeeAED + agencyFeeAED;

  // Net Rental Yield = (Annual Rent - Service Charges) / Total Purchase Cost
  const netAnnualIncomeAED = Math.max(0, annualRentAED - serviceChargesAED);
  const netRentalYieldPercent = totalPurchaseCostAED > 0 ? (netAnnualIncomeAED / totalPurchaseCostAED) * 100 : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>Dubai Real Estate ROI & Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Dubai Real Estate ROI & Tax Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate net rental yield, 4% DLD transfer fees, 2% agency commissions, service charges, and 0% personal tax savings in Dubai.
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
                  Property Purchase Price (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {propertyPriceAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="5000000"
                step="50000"
                value={propertyPriceAED}
                onChange={(e) => setPropertyPriceAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* INPUT 2: ANNUAL RENT */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Expected Annual Rental Income (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualRentAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="30000"
                max="400000"
                step="5000"
                value={annualRentAED}
                onChange={(e) => setAnnualRentAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* INPUT 3: SERVICE CHARGES */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual HOA / Service Charges (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {serviceChargesAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={serviceChargesAED}
                onChange={(e) => setServiceChargesAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Dubai Property ROI Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>DLD Transfer Fee (4%):</span>
                  <span className="font-mono text-white font-semibold">AED {Math.round(dldFeeAED).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Broker Agency Fee (2%):</span>
                  <span className="font-mono text-white font-semibold">AED {Math.round(agencyFeeAED).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Total Purchase Cost:</span>
                  <span className="font-mono text-gold-400 font-semibold">AED {Math.round(totalPurchaseCostAED).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Annual Rental Income:</span>
                  <span className="font-mono text-emerald-400 font-semibold">AED {Math.round(netAnnualIncomeAED).toLocaleString()}</span>
                </div>
              </div>

              {/* NET YIELD DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Net Rental Yield (After Costs & Tax)
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  {netRentalYieldPercent.toFixed(2)}%
                </div>
                <p className="mt-2 text-[11px] text-navy-300">
                  💰 0% Capital Gains Tax & 0% Personal Rental Tax in Dubai!
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ Property Tax Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
