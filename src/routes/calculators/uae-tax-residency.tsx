import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Plane,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-tax-residency")({
  head: () => ({
    meta: [
      { title: "UAE Tax Residency Certificate (TRC) Eligibility Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Tax Residency eligibility checker. Test Cabinet Decision No. 85 of 2022 (183-day & 90-day physical presence rules) for TRC certificate.",
      },
      {
        name: "keywords",
        content:
          "uae tax residency eligibility checker 2026, 183 days rule uae tax residency certificate trc, cabinet decision 85 of 2022 tax residency uae",
      },
      {
        property: "og:title",
        content: "UAE Tax Residency Certificate (TRC) Eligibility Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check physical presence requirements for obtaining an official FTA Tax Residency Certificate (TRC).",
      },
      { property: "og:url", content: "/calculators/uae-tax-residency" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-tax-residency" }],
  }),
  component: UAETaxResidencyCheckerPage,
});

function UAETaxResidencyCheckerPage() {
  const [daysInUae, setDaysInUae] = useState<number>(190);
  const [hasEmiratesId, setHasEmiratesId] = useState<boolean>(true);
  const [hasPermanentHome, setHasPermanentHome] = useState<boolean>(true);

  // Cabinet Decision No. 85 of 2022 Rules:
  // 183 Days: Automatic Tax Resident status.
  // 90 Days: Eligible IF UAE resident + has permanent place of residence / employment in UAE.
  const is183DayPass = daysInUae >= 183;
  const is90DayPass = daysInUae >= 90 && hasEmiratesId && hasPermanentHome;

  const isEligible = is183DayPass || is90DayPass;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>UAE Tax Residency (TRC)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Tax Residency Certificate (TRC) Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Test Cabinet Decision No. 85 of 2022 physical presence rules (183-day vs 90-day threshold) for obtaining an FTA Tax Residency Certificate.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* RESULT STATUS BANNER */}
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isEligible
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-amber-50 border-amber-300 text-amber-950"
            }`}
          >
            {isEligible ? (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={40} />
            ) : (
              <AlertTriangle className="text-amber-600 shrink-0" size={40} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isEligible
                  ? "🎉 Eligible for UAE Tax Residency Certificate (TRC)!"
                  : "⚠️ Insufficient Physical Days for UAE Tax Residency"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isEligible
                  ? `You satisfy Cabinet Decision No. 85 of 2022 physical presence limits (${daysInUae} days in UAE). You can apply for an official FTA Tax Residency Certificate.`
                  : `You currently have ${daysInUae} physical days in UAE. You need at least 183 days (or 90 days with UAE residence + lease/employment) to qualify.`}
              </p>
            </div>
          </div>

          {/* INPUT SLIDERS */}
          <div className="space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Physical Days Spent in UAE (within 12-month period):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {daysInUae} Days in UAE
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="365"
                step="5"
                value={daysInUae}
                onChange={(e) => setDaysInUae(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>90 Days (Tied to Residence)</span>
                <span>183 Days (Automatic TRC)</span>
                <span>365 Days</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasEmiratesId}
                  onChange={(e) => setHasEmiratesId(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <span className="text-navy-950 font-semibold">Valid UAE Residency Visa & Emirates ID</span>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPermanentHome}
                  onChange={(e) => setHasPermanentHome(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <span className="text-navy-950 font-semibold">Tenancy Contract (Ejari) / Property Ownership</span>
              </label>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link to="/contact" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Apply for FTA Tax Residency Certificate with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
