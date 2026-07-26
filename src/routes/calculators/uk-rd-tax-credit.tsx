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
  Code,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-rd-tax-credit")({
  head: () => ({
    meta: [
      { title: "UK R&D Tax Credit Estimator for IT & Software Firms (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK R&D Tax Credit calculator for IT companies, software houses, and tech startups. Calculate RDEC 20% scheme tax savings and cash refunds.",
      },
      {
        name: "keywords",
        content:
          "uk r and d tax credit calculator 2026, software house r&d tax relief uk, rdec merged scheme software developer salary tax credit",
      },
      {
        property: "og:title",
        content: "UK R&D Tax Credit Estimator for Tech Firms | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate UK R&D Tax Credit savings for software development, developer salaries, and cloud infrastructure.",
      },
      { property: "og:url", content: "/calculators/uk-rd-tax-credit" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-rd-tax-credit" }],
  }),
  component: UKRDTaxCreditCalculatorPage,
});

function UKRDTaxCreditCalculatorPage() {
  const [developerSalaries, setDeveloperSalaries] = useState<number>(80000);
  const [cloudHostingCosts, setCloudHostingCosts] = useState<number>(15000);
  const [subcontractorCosts, setSubcontractorCosts] = useState<number>(25000);
  const [isLossMaking, setIsLossMaking] = useState<boolean>(false);

  // Subcontractor costs are allowable at 65% under HMRC rules
  const allowableSubcontractor = subcontractorCosts * 0.65;
  const totalQualifyingExpenditure = developerSalaries + cloudHostingCosts + allowableSubcontractor;

  // Merged R&D Scheme 2026 (20% RDEC Gross Credit)
  const grossRdecCredit = totalQualifyingExpenditure * 0.20;
  // Effective benefit after CT: 15% net reduction for profitable firms, or 16.2% cash payout for R&D intensive SMEs
  const effectiveBenefitRate = isLossMaking ? 0.162 : 0.15;
  const netTaxBenefit = totalQualifyingExpenditure * effectiveBenefitRate;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK R&D Tax Credit Estimator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK R&D Tax Credit Estimator for IT & Tech Firms (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your HMRC R&D Tax Relief under the Merged RDEC Scheme for software development, engineer salaries, and cloud hosting.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: SALARIES */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Developer & Software Engineer Salaries (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{developerSalaries.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={developerSalaries}
                onChange={(e) => setDeveloperSalaries(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">100% of staff costs engaged in technical problem solving qualify.</span>
            </div>

            {/* INPUT 2: CLOUD HOSTING */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Cloud Hosting & Data Costs (AWS, Azure, GCP) (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{cloudHostingCosts.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="2500"
                value={cloudHostingCosts}
                onChange={(e) => setCloudHostingCosts(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* INPUT 3: SUBCONTRACTORS */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  UK Sub-Contractor R&D Costs (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{subcontractorCosts.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="2500"
                value={subcontractorCosts}
                onChange={(e) => setSubcontractorCosts(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">Subcontractor expenditure is eligible at 65% under HMRC R&D rules.</span>
            </div>

            {/* TOGGLE: LOSS MAKING */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Loss-Making / Pre-Revenue Startup?</strong>
                <span className="text-gray-500 text-xs">Eligible for cash payout (16.2% net cash refund).</span>
              </div>
              <input
                type="checkbox"
                checked={isLossMaking}
                onChange={(e) => setIsLossMaking(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>R&D Tax Relief Estimate</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Qualifying R&D Expenditure:</span>
                  <span className="font-mono text-white font-semibold">£{Math.round(totalQualifyingExpenditure).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross RDEC Credit Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">20.0%</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective Benefit Rate:</span>
                  <span className="font-mono text-emerald-400 font-semibold">{(effectiveBenefitRate * 100).toFixed(1)}%</span>
                </div>
              </div>

              {/* NET DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  {isLossMaking ? "Estimated Cash Refund from HMRC" : "Corporation Tax Reduction"}
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  £{Math.round(netTaxBenefit).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Claim R&D Tax Credit with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
