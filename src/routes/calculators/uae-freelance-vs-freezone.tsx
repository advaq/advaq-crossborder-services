import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-freelance-vs-freezone")({
  head: () => ({
    meta: [
      { title: "UAE Freelance Permit vs Freezone Company License Cost (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Freelance Permit vs Freezone License cost calculator. Compare TECOM GoFreelance vs IFZA/Meydan company setup & visa costs.",
      },
      {
        name: "keywords",
        content:
          "uae freelance permit vs freezone license calculator 2026, gofreelance dubai cost vs company setup, freelance visa dubai non resident freelancer",
      },
      {
        property: "og:title",
        content: "UAE Freelance Permit vs Freezone Company License Cost | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare exact costs and benefits between UAE Freelance Permit and Full Freezone LLC License.",
      },
      { property: "og:url", content: "/calculators/uae-freelance-vs-freezone" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-freelance-vs-freezone" }],
  }),
  component: UAEFreelanceVsFreezonePage,
});

function UAEFreelanceVsFreezonePage() {
  const [needCorporateBank, setNeedCorporateBank] = useState<boolean>(true);
  const [needMultipleVisas, setNeedMultipleVisas] = useState<boolean>(false);

  // Math Comparison
  // Freelance Permit (GoFreelance): ~AED 7,500 Permit + AED 3,500 2-yr Visa = AED 11,000 Total
  const freelancePermitCost = 7500;
  const freelanceVisaCost = 3500;
  const totalFreelanceYear1 = freelancePermitCost + freelanceVisaCost;

  // Freezone LLC (SHAMS/RAKEZ 1 Visa Package): ~AED 13,900 total with visa
  const freezonePackageCost = 13900;

  const isFreezoneRecommended = needCorporateBank || needMultipleVisas;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>Freelance vs Freezone License</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Freelance Permit vs Freezone License (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Side-by-side cost and feature comparison for IT consultants, designers, and solo founders in Dubai.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* RECOMMENDATION BANNER */}
          <div
            className={`p-6 rounded-2xl border flex items-center gap-4 ${
              isFreezoneRecommended
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-gold-50 border-gold-300 text-gold-950"
            }`}
          >
            <Sparkles className="text-gold-600 shrink-0" size={36} />
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isFreezoneRecommended
                  ? "🎉 Full Freezone LLC License Recommended!"
                  : "💡 Solo Freelance Permit Sufficient"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isFreezoneRecommended
                  ? "Because you need corporate bank accounts or future employee visas, a Full Freezone LLC License (IFZA/SHAMS) provides complete flexibility."
                  : "If you only need a personal residency visa and operate as an individual contractor, the GoFreelance Permit is cost-effective."}
              </p>
            </div>
          </div>

          {/* CHECKBOX OPTIONS */}
          <div className="space-y-3 bg-off-white/50 p-6 rounded-2xl border border-border text-xs">
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Do you need a Corporate Bank Account (Wio/Mashreq)?</strong>
                <span className="text-gray-500 text-xs">Freezone LLCs get corporate bank accounts; Freelance permits use personal accounts.</span>
              </div>
              <input
                type="checkbox"
                checked={needCorporateBank}
                onChange={(e) => setNeedCorporateBank(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Do you plan to sponsor employee visas in future?</strong>
                <span className="text-gray-500 text-xs">Freelance permits cannot hire employees or issue staff visas.</span>
              </div>
              <input
                type="checkbox"
                checked={needMultipleVisas}
                onChange={(e) => setNeedMultipleVisas(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* COST COMPARISON CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* FREELANCE PERMIT */}
            <div className="border border-border rounded-xl p-6 bg-white space-y-4">
              <h4 className="font-serif font-bold text-navy-950 text-lg">GoFreelance Permit (TECOM)</h4>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Annual Permit Fee:</span>
                  <strong className="font-mono">AED 7,500</strong>
                </div>
                <div className="flex justify-between">
                  <span>2-Year Residence Visa:</span>
                  <strong className="font-mono">AED 3,500</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-border font-bold text-navy-950 text-sm">
                  <span>Total Year-1 Cost:</span>
                  <strong className="font-mono text-gold-600">AED {totalFreelanceYear1.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            {/* FREEZONE COMPANY */}
            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-4 shadow-lg">
              <h4 className="font-serif font-bold text-white text-lg">Full Freezone LLC (SHAMS / IFZA)</h4>
              <div className="space-y-2 text-xs text-navy-200">
                <div className="flex justify-between">
                  <span>Full Trade License & Flexi Desk:</span>
                  <strong className="font-mono text-white">AED 9,500</strong>
                </div>
                <div className="flex justify-between">
                  <span>2-Year Investor Visa & Medical:</span>
                  <strong className="font-mono text-white">AED 4,400</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 font-bold text-white text-sm">
                  <span>Total Year-1 Cost:</span>
                  <strong className="font-mono text-emerald-400">AED {freezonePackageCost.toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link to="/uae-services/freezone-company-formation" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Setup UAE Company / License with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
