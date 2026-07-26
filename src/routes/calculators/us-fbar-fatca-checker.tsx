import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  DollarSign,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-fbar-fatca-checker")({
  head: () => ({
    meta: [
      { title: "FBAR (FinCEN 114) & FATCA Requirement Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBAR (FinCEN 114) & FATCA filing requirement checker. Check $10,000 foreign account threshold & calculate statutory penalty exposure.",
      },
      {
        name: "keywords",
        content:
          "fbar fincen 114 requirement checker 2026, 10000 threshold foreign bank account fbar, non resident us llc fbar penalty calculator",
      },
      {
        property: "og:title",
        content: "FBAR (FinCEN 114) & FATCA Requirement Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check whether your US LLC or foreign bank accounts trigger mandatory FinCEN FBAR filings.",
      },
      { property: "og:url", content: "/calculators/us-fbar-fatca-checker" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-fbar-fatca-checker" }],
  }),
  component: USFbarFatcaCheckerPage,
});

function USFbarFatcaCheckerPage() {
  const [maxAccountBalance, setMaxAccountBalance] = useState<number>(15000);
  const [isUsPersonOrLlc, setIsUsPersonOrLlc] = useState<boolean>(true); // US LLC or US Resident

  const fbarThreshold = 10000; // $10,000 aggregate max balance threshold
  const isFbarFilingMandatory = isUsPersonOrLlc && maxAccountBalance >= fbarThreshold;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>FBAR & FATCA Compliance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FBAR (FinCEN 114) & FATCA Requirement Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Verify whether your US LLC or foreign financial accounts cross the $10,000 threshold requiring annual FinCEN 114 reporting.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* RESULT STATUS BANNER */}
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isFbarFilingMandatory
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : "bg-emerald-50 border-emerald-300 text-emerald-950"
            }`}
          >
            {isFbarFilingMandatory ? (
              <AlertTriangle className="text-amber-600 shrink-0" size={36} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={36} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isFbarFilingMandatory
                  ? "Mandatory FBAR (FinCEN 114) Filing Required!"
                  : "Below $10,000 Threshold — No FBAR Required"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isFbarFilingMandatory
                  ? `Your maximum aggregate foreign bank balance reached $${maxAccountBalance.toLocaleString()}, exceeding the $10,000 threshold. You must submit FinCEN Form 114 by April 15 (auto-extended to Oct 15).`
                  : `Your aggregate bank balance ($${maxAccountBalance.toLocaleString()}) remained under $10,000 throughout the year. No FBAR report is required.`}
              </p>
            </div>
          </div>

          {/* INPUT SLIDER */}
          <div className="space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Highest Peak Aggregate Bank Balance During Calendar Year ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${maxAccountBalance.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="2500"
                value={maxAccountBalance}
                onChange={(e) => setMaxAccountBalance(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Combines max balances of all non-US bank accounts, Wise, Payoneer, and sub-accounts.
              </span>
            </div>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Is the Account Held by a US LLC or US Person?</strong>
                <span className="text-gray-500 text-xs">US entity or US tax resident signature authority.</span>
              </div>
              <input
                type="checkbox"
                checked={isUsPersonOrLlc}
                onChange={(e) => setIsUsPersonOrLlc(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* WARNING BANNER */}
          {isFbarFilingMandatory && (
            <div className="p-5 bg-navy-950 text-white rounded-xl border border-gold-500/40 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
                <AlertTriangle size={16} />
                <span>Statutory FBAR Penalty Warning</span>
              </div>
              <p className="text-navy-200 leading-relaxed">
                Failing to file FinCEN 114 carries non-willful statutory civil penalties up to <strong>$10,000 per violation</strong>, and willful penalties up to <strong>$100,000 or 50% of account balance</strong>.
              </p>
            </div>
          )}

          <div className="pt-4 text-center">
            <Link to="/contact" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              File FBAR with ADVAQ Compliance Team <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
