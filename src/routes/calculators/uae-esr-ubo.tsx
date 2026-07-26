import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-esr-ubo")({
  head: () => ({
    meta: [
      { title: "UAE ESR & UBO Compliance Risk Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Economic Substance Regulations (ESR) and Ultimate Beneficial Owner (UBO) compliance calculator.",
      },
      {
        name: "keywords",
        content:
          "uae economic substance regulations esr calculator 2026, ubo declaration reporting penalty fine dubai freezone",
      },
      {
        property: "og:title",
        content: "UAE ESR & UBO Compliance Risk Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check ESR filing obligations and UBO declaration penalty risks for UAE companies.",
      },
      { property: "og:url", content: "/calculators/uae-esr-ubo" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-esr-ubo" }],
  }),
  component: UAEEsrUboCalculatorPage,
});

function UAEEsrUboCalculatorPage() {
  const [relevantActivity, setRelevantActivity] = useState<string>("none");
  const [isUboFiled, setIsUboFiled] = useState<boolean>(true);

  // Relevant Activities under ESR (Cabinet Resolution No. 57 of 2020):
  // Headquarters, Distribution & Service Centre, IP Holding, Shipping, Banking, Insurance, Investment Fund, Lease-Finance, Holding Company.
  const isEsrApplicable = relevantActivity !== "none";

  // Penalties:
  // ESR Notification Failure: AED 20,000 penalty
  // ESR Report Failure: AED 50,000 penalty + additional AED 400,000 for 2nd year!
  // UBO Filing Failure: AED 100,000 penalty + license suspension warning

  const esrPenaltyAED = isEsrApplicable ? 20000 : 0;
  const uboPenaltyAED = !isUboFiled ? 100000 : 0;
  const totalCompliancePenaltyRiskAED = esrPenaltyAED + uboPenaltyAED;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>UAE ESR & UBO Compliance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE ESR & UBO Compliance Risk Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Test your Economic Substance Regulations (ESR) filing obligations and Ultimate Beneficial Owner (UBO) declaration penalties.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* ESR STATUS BANNER */}
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isEsrApplicable || !isUboFiled
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : "bg-emerald-50 border-emerald-300 text-emerald-950"
            }`}
          >
            {isEsrApplicable || !isUboFiled ? (
              <AlertTriangle className="text-amber-600 shrink-0" size={40} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={40} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isEsrApplicable
                  ? "ESR Relevant Activity Identified (Mandatory ESR Filing Required)"
                  : !isUboFiled
                  ? "UBO Register Non-Compliance Risk (AED 100,000 Penalty)"
                  : "🎉 Fully ESR & UBO Compliant"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isEsrApplicable
                  ? "Your business license activity falls under ESR Relevant Activities. You must submit an ESR Notification and ESR Report to the MoF portal annually."
                  : "All UAE companies must maintain a UBO Register and file beneficiary disclosures to prevent license suspension."}
              </p>
            </div>
          </div>

          {/* INPUTS */}
          <div className="space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Trade License Activity:
              </label>
              <select
                value={relevantActivity}
                onChange={(e) => setRelevantActivity(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="none">Standard IT, Consulting, Freelance or Retail Services (No ESR)</option>
                <option value="headquarters">Headquarters Business (Group Services)</option>
                <option value="distribution">Distribution & Service Centre (Related Party Goods)</option>
                <option value="ip">Intellectual Property Holding (Patents, Trademarks)</option>
                <option value="holding">Pure Equity Holding Company</option>
              </select>
            </div>

            <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <input
                type="checkbox"
                checked={isUboFiled}
                onChange={(e) => setIsUboFiled(e.target.checked)}
                className="accent-gold-500 w-4 h-4"
              />
              <div>
                <strong className="text-navy-950 block">UBO Beneficiary Register Filed with Licensing Authority?</strong>
                <span className="text-gray-500">Cabinet Resolution No. 58 of 2020 requirement.</span>
              </div>
            </label>
          </div>

          {/* RESULT CARD */}
          <div className="bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/20 flex items-center justify-between">
            <div>
              <span className="text-xs text-gold-500 uppercase font-semibold block">Total Statutory Penalty Exposure</span>
              <div className="text-3xl font-serif font-bold text-white mt-1">
                AED {totalCompliancePenaltyRiskAED.toLocaleString()}
              </div>
            </div>
            <Link to="/uae-services/corporate-tax-registration" className="btn-gold text-xs uppercase tracking-wider px-6 py-3 font-semibold">
              File Compliance Returns with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
