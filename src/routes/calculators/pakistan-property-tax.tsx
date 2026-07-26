import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Building,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-property-tax")({
  head: () => ({
    meta: [
      { title: "Pakistan Property Tax & WHT Calculator (236K & 236C) (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan property tax calculator. Calculate Section 236K buyer WHT (3% vs 10.5%), Section 236C seller WHT, Stamp Duty, and CVT fees.",
      },
      {
        name: "keywords",
        content:
          "pakistan property tax calculator 2026, section 236k buyer wht filer non filer, section 236c seller wht rate, property transfer stamp duty cvt pakistan",
      },
      {
        property: "og:title",
        content: "Pakistan Property Tax & WHT Calculator (236K & 236C) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact property buyer and seller withholding tax (Section 236K / 236C) for Filers and Non-Filers.",
      },
      { property: "og:url", content: "/calculators/pakistan-property-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-property-tax" }],
  }),
  component: PakistanPropertyTaxCalculatorPage,
});

function PakistanPropertyTaxCalculatorPage() {
  const [propertyFbrValuePKR, setPropertyFbrValuePKR] = useState<number>(20000000); // 2 Crore PKR
  const [userRole, setUserRole] = useState<"buyer" | "seller">("buyer");
  const [isFiler, setIsFiler] = useState<boolean>(true);

  // Section 236K (Buyer WHT): Filer 3% vs Non-Filer 10.5% (or 12%)
  // Section 236C (Seller WHT): Filer 3% vs Non-Filer 10%
  const rateFiler = userRole === "buyer" ? 3 : 3;
  const rateNonFiler = userRole === "buyer" ? 10.5 : 10;
  const appliedRate = isFiler ? rateFiler : rateNonFiler;

  const whtTaxAmountPKR = propertyFbrValuePKR * (appliedRate / 100);
  const stampDutyPKR = userRole === "buyer" ? propertyFbrValuePKR * 0.02 : 0; // 2% Stamp Duty
  const totalGovernmentFeePKR = whtTaxAmountPKR + stampDutyPKR;

  // Savings if Filer
  const nonFilerTaxAmountPKR = propertyFbrValuePKR * (rateNonFiler / 100);
  const taxSavedByFiling = nonFilerTaxAmountPKR - whtTaxAmountPKR;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>Property Tax & WHT</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Property Tax & WHT Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 236K (Buyer) and Section 236C (Seller) FBR Withholding Taxes, Stamp Duty, and Filer tax savings on real estate transactions.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* ROLE SELECTOR */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Transaction Role:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setUserRole("buyer")}
                  className={`p-3.5 rounded-xl border text-left font-semibold ${
                    userRole === "buyer" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Property Buyer (Sec 236K)
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole("seller")}
                  className={`p-3.5 rounded-xl border text-left font-semibold ${
                    userRole === "seller" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Property Seller (Sec 236C)
                </button>
              </div>
            </div>

            {/* FBR PROPERTY VALUE */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  FBR / DC Evaluated Property Value (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  Rs {(propertyFbrValuePKR / 100000).toLocaleString()} Lacs ({(propertyFbrValuePKR / 10000000).toFixed(2)} Crore)
                </span>
              </div>
              <input
                type="range"
                min="2500000"
                max="100000000"
                step="2500000"
                value={propertyFbrValuePKR}
                onChange={(e) => setPropertyFbrValuePKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* FILER TOGGLE */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <div>
                <strong className="text-navy-950 block text-sm">Are You an Active Taxpayer (ATL Filer)?</strong>
                <span className="text-gray-500 text-[11px]">Non-Filers pay up to 10.5%–12% WHT compared to 3% for Filers.</span>
              </div>
              <input
                type="checkbox"
                checked={isFiler}
                onChange={(e) => setIsFiler(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Property Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Applied WHT Rate ({userRole === "buyer" ? "Sec 236K" : "Sec 236C"}):</span>
                  <span className="font-mono text-gold-400 font-bold">{appliedRate}%</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>FBR WHT Amount:</span>
                  <span className="font-mono text-white font-semibold">Rs {Math.round(whtTaxAmountPKR).toLocaleString()}</span>
                </div>
                {userRole === "buyer" && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Provincial Stamp Duty (2%):</span>
                    <span className="font-mono text-white">Rs {Math.round(stampDutyPKR).toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* TOTAL DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Govt Transfer Taxes Due
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  Rs {Math.round(totalGovernmentFeePKR).toLocaleString()}
                </div>
                {!isFiler && (
                  <p className="mt-2 text-[11px] text-amber-400 font-semibold">
                    💡 Become a Filer to save Rs {Math.round(taxSavedByFiling).toLocaleString()} on this transaction!
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/atl-restoration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Become Filer with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
