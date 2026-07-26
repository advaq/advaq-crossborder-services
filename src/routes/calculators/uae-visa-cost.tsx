import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Plane,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-visa-cost")({
  head: () => ({
    meta: [
      { title: "UAE 2-Year Investor vs 10-Year Golden Visa Cost Estimator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE residence visa cost calculator. Compare 2-Year Investor Visa vs 10-Year Golden Visa costs including Emirates ID, VIP medical test & family sponsorship.",
      },
      {
        name: "keywords",
        content:
          "uae investor visa cost calculator 2026, Dubai 10 year golden visa cost tech founder, Emirates ID medical fitness test fee Dubai",
      },
      {
        property: "og:title",
        content: "UAE 2-Year Investor vs 10-Year Golden Visa Cost Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact Emirates ID, medical test, stamping, and family visa costs in Dubai.",
      },
      { property: "og:url", content: "/calculators/uae-visa-cost" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-visa-cost" }],
  }),
  component: UAEVisaCostCalculatorPage,
});

function UAEVisaCostCalculatorPage() {
  const [visaType, setVisaType] = useState<string>("investor-2yr");
  const [numberOfFamilyDependents, setNumberOfFamilyDependents] = useState<number>(0);
  const [includeVipMedical, setIncludeVipMedical] = useState<boolean>(true);

  // 1. BASE VISA COST (AED)
  // 2-Year Investor: ~AED 3,800 Govt fees
  // 10-Year Golden Visa: ~AED 9,500 Govt fees
  const baseVisaCost = visaType === "golden-10yr" ? 9500 : 3800;
  const medicalEmiratesIdCost = includeVipMedical ? 3200 : 2200;

  // Family Visa Cost per Dependent (~AED 4,500)
  const familyVisaCostTotal = numberOfFamilyDependents * 4500;

  const totalVisaCostAED = baseVisaCost + medicalEmiratesIdCost + familyVisaCostTotal;
  const totalVisaCostUSD = Math.round(totalVisaCostAED / 3.6725);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>UAE Residence Visa Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE 2-Yr Investor vs 10-Yr Golden Visa Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact Emirates ID, medical test, entry permit, visa stamping, and family sponsorship costs in Dubai.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* SELECT VISA TYPE */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Target UAE Visa Type:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setVisaType("investor-2yr")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    visaType === "investor-2yr"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">2-Year Residence Visa</strong>
                  <span className="text-[11px] opacity-80">Freezone / Mainland Partner Visa</span>
                </button>

                <button
                  type="button"
                  onClick={() => setVisaType("golden-10yr")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    visaType === "golden-10yr"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">10-Year Golden Visa</strong>
                  <span className="text-[11px] opacity-80">Tech Founders / Real Estate</span>
                </button>
              </div>
            </div>

            {/* FAMILY DEPENDENTS */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. Family Dependents (Spouse / Children / Parents):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {numberOfFamilyDependents} Dependents
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={numberOfFamilyDependents}
                onChange={(e) => setNumberOfFamilyDependents(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* VIP MEDICAL */}
            <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <input
                type="checkbox"
                checked={includeVipMedical}
                onChange={(e) => setIncludeVipMedical(e.target.checked)}
                className="accent-gold-500 w-4 h-4"
              />
              <div className="text-xs">
                <strong className="text-navy-950 block">Include VIP Fast-Track Medical Test & Biometrics?</strong>
                <span className="text-gray-500">Same-day medical fitness results & priority Emirates ID capture.</span>
              </div>
            </label>
          </div>

          {/* RIGHT SUMMARY CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>UAE Visa Cost Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Entry Permit & Stamping ({visaType === "golden-10yr" ? "10-Year" : "2-Year"}):</span>
                  <span className="font-mono text-white font-semibold">AED {baseVisaCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Medical Fitness & Emirates ID:</span>
                  <span className="font-mono text-white font-semibold">AED {medicalEmiratesIdCost.toLocaleString()}</span>
                </div>
                {numberOfFamilyDependents > 0 && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Family Sponsorship ({numberOfFamilyDependents}x AED 4.5k):</span>
                    <span className="font-mono text-white font-semibold">AED {familyVisaCostTotal.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Residence Visa Cost (AED)
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  AED {totalVisaCostAED.toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-navy-200 flex justify-between">
                  <span>Equivalent USD Cost:</span>
                  <strong className="text-gold-400 font-mono">${totalVisaCostUSD.toLocaleString()} USD</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uae-services/visa-application-support"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Apply for UAE Visa with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20UAE%20Visa%20Calculator%20(${visaType},%20AED%20${totalVisaCostAED}).%20Please%20guide%20me.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp Dubai Visa PRO
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
