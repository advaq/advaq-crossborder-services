import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-trademark-cost")({
  head: () => ({
    meta: [
      { title: "USPTO Trademark Filing Fee & Class Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive USPTO trademark filing fee calculator. Calculate US government fees ($250/class), legal search fees, and trademark registration costs.",
      },
      {
        name: "keywords",
        content:
          "uspto trademark fee calculator 2026, cost to register trademark us foreign applicant, uspto teas standard fee per class",
      },
      {
        property: "og:title",
        content: "USPTO Trademark Filing Fee & Class Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate government fees and legal search costs for registering your trademark with the USPTO.",
      },
      { property: "og:url", content: "/calculators/us-trademark-cost" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-trademark-cost" }],
  }),
  component: USTrademarkCostCalculatorPage,
});

function USTrademarkCostCalculatorPage() {
  const [numberOfClasses, setNumberOfClasses] = useState<number>(1);
  const [includeComprehensiveSearch, setIncludeComprehensiveSearch] = useState<boolean>(true);
  const [includeAttorneyDrafting, setIncludeAttorneyDrafting] = useState<boolean>(true);

  // USPTO Govt Fee: $250 per class (TEAS Plus) or $350 per class (TEAS Standard)
  const usptoGovtFeePerClass = 250;
  const totalGovtFee = numberOfClasses * usptoGovtFeePerClass;

  const searchFee = includeComprehensiveSearch ? 149 : 0;
  const attorneyFee = includeAttorneyDrafting ? 299 : 0;

  const totalTrademarkCost = totalGovtFee + searchFee + attorneyFee;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>USPTO Trademark Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            USPTO Trademark Filing Fee & Class Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate official USPTO government fees ($250 per class), legal search fees, and attorney drafting costs.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            {/* NUMBER OF CLASSES */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Number of International Goods / Services Classes:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {numberOfClasses} {numberOfClasses === 1 ? "Class" : "Classes"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={numberOfClasses}
                onChange={(e) => setNumberOfClasses(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                E.g. Class 9 (Software/App) + Class 42 (IT Hosting) = 2 Classes.
              </span>
            </div>

            {/* ADDONS */}
            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeComprehensiveSearch}
                    onChange={(e) => setIncludeComprehensiveSearch(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Comprehensive Trademark Conflict Search</strong>
                    <span className="text-gray-500 text-[11px]">Searches USPTO database, state registers & web to prevent rejection.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">$149</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeAttorneyDrafting}
                    onChange={(e) => setIncludeAttorneyDrafting(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">US Licensed Attorney Filing & Office Action Defense</strong>
                    <span className="text-gray-500 text-[11px]">Mandatory for non-US applicants under USPTO rules.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">$299</span>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>USPTO Filing Cost Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>USPTO Govt Fees ({numberOfClasses}x $250):</span>
                  <span className="font-mono text-white font-semibold">${totalGovtFee}</span>
                </div>
                {includeComprehensiveSearch && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Trademark Conflict Search:</span>
                    <span className="font-mono text-white font-semibold">$149</span>
                  </div>
                )}
                {includeAttorneyDrafting && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>US Attorney Filing:</span>
                    <span className="font-mono text-white font-semibold">$299</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Trademark Filing Cost
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  ${totalTrademarkCost}
                  <span className="text-xs text-navy-300 font-sans font-normal ml-2">USD</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Register Trademark with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20USPTO%20Trademark%20Calculator%20(${numberOfClasses}%20classes,%20$${totalTrademarkCost}).%20Please%20guide%20me.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp Trademark Attorney
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
