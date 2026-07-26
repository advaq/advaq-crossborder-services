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

export const Route = createFileRoute("/calculators/us-llc-annual-compliance")({
  head: () => ({
    meta: [
      { title: "US LLC Annual Compliance & Maintenance Cost Estimator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC annual maintenance cost calculator. Estimate registered agent, state annual reports, Form 5472 tax return, and FBAR costs.",
      },
      {
        name: "keywords",
        content:
          "us llc annual maintenance cost calculator 2026, wyoming delaware llc annual renewal cost, form 5472 cpa filing fee non resident llc",
      },
      {
        property: "og:title",
        content: "US LLC Annual Compliance Cost Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Full transparency breakdown of ongoing annual fees for foreign-owned US LLCs.",
      },
      { property: "og:url", content: "/calculators/us-llc-annual-compliance" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-llc-annual-compliance" }],
  }),
  component: USLLCAnnualComplianceCalculatorPage,
});

function USLLCAnnualComplianceCalculatorPage() {
  const [selectedState, setSelectedState] = useState<"wyoming" | "delaware" | "newmexico">("wyoming");
  const [includeCpaFiling, setIncludeCpaFiling] = useState<boolean>(true); // Form 5472
  const [includeFbarFiling, setIncludeFbarFiling] = useState<boolean>(false); // FBAR

  // State Annual Fees
  const stateFees: Record<string, { fee: number; name: string }> = {
    wyoming: { fee: 60, name: "Wyoming Annual Report" },
    delaware: { fee: 300, name: "Delaware Franchise Tax" },
    newmexico: { fee: 0, name: "New Mexico ($0 Annual Fee)" },
  };

  const currentState = stateFees[selectedState] || stateFees.wyoming;
  const registeredAgentFee = 99;
  const cpa5472Fee = includeCpaFiling ? 350 : 0;
  const fbarFee = includeFbarFiling ? 99 : 0;

  const totalAnnualMaintenance = currentState.fee + registeredAgentFee + cpa5472Fee + fbarFee;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US LLC Annual Compliance Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US LLC Annual Compliance Cost Estimator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Full transparency breakdown of ongoing annual fees: State renewal, Registered Agent, Form 5472 IRS tax returns, and FBAR filings.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: STATE SELECTION */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select US State of LLC Formation:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedState("wyoming")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    selectedState === "wyoming"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Wyoming ($60/yr)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedState("delaware")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    selectedState === "delaware"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Delaware ($300/yr)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedState("newmexico")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    selectedState === "newmexico"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  New Mexico ($0/yr)
                </button>
              </div>
            </div>

            {/* CHECKBOXES */}
            <div className="space-y-3 text-xs border-t border-border pt-4">
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeCpaFiling}
                    onChange={(e) => setIncludeCpaFiling(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">IRS Form 5472 & 1120 Pro-Forma CPA Filing</strong>
                    <span className="text-gray-500 text-[11px]">Mandatory information return for foreign single-member LLCs.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">$350</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeFbarFiling}
                    onChange={(e) => setIncludeFbarFiling(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">FinCEN Form 114 (FBAR Filing)</strong>
                    <span className="text-gray-500 text-[11px]">Required if US LLC bank account exceeds $10,000.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">$99</span>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Annual Cost Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>State Renewal ({currentState.name}):</span>
                  <span className="font-mono text-white font-semibold">${currentState.fee}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>US Registered Agent Renewal:</span>
                  <span className="font-mono text-white font-semibold">$99</span>
                </div>
                {includeCpaFiling && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>IRS Form 5472 CPA Return:</span>
                    <span className="font-mono text-gold-400 font-semibold">$350</span>
                  </div>
                )}
                {includeFbarFiling && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>FBAR FinCEN 114 Filing:</span>
                    <span className="font-mono text-gold-400 font-semibold">$99</span>
                  </div>
                )}
              </div>

              {/* NET DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Annual Ongoing Compliance Fee
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  ${totalAnnualMaintenance}
                  <span className="text-xs text-navy-300 font-sans font-normal ml-2">/ year</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Hire ADVAQ for Annual LLC Compliance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
