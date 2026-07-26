import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  DollarSign,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-penalty-risk")({
  head: () => ({
    meta: [
      { title: "US Form 5472 & $25,000 IRS Penalty Risk Estimator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC IRS Form 5472 late penalty calculator. Estimate $25,000 late filing penalties, BOI report fines, and tax compliance risk score.",
      },
      {
        name: "keywords",
        content:
          "irs form 5472 late penalty calculator 2026, 25000 irs penalty single member llc foreign owner, boi report late penalty fine calculator us llc",
      },
      {
        property: "og:title",
        content: "US Form 5472 & $25,000 IRS Penalty Risk Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact IRS penalties and interest for overdue Form 5472, Form 1120, and FinCEN BOI reports.",
      },
      { property: "og:url", content: "/calculators/us-penalty-risk" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-penalty-risk" }],
  }),
  component: USPenaltyRiskCalculatorPage,
});

function USPenaltyRiskCalculatorPage() {
  const [yearsUnfiledForm5472, setYearsUnfiledForm5472] = useState<number>(1);
  const [isBoiReportOverdue, setIsBoiReportOverdue] = useState<boolean>(true);
  const [boiDaysOverdue, setBoiDaysOverdue] = useState<number>(30);

  // IRS Form 5472 penalty: $25,000 per year per missing form!
  // If unfiled for more than 90 days after IRS notice, an additional $25,000 is assessed every 30 days.
  const baseForm5472Penalty = yearsUnfiledForm5472 * 25000;

  // FinCEN BOI Report Penalty: $590/day up to $10,000 max + potential criminal penalty
  const baseBoiPenalty = isBoiReportOverdue ? Math.min(10000, boiDaysOverdue * 590) : 0;

  const totalPenaltyExposure = baseForm5472Penalty + baseBoiPenalty;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US Penalty Risk Estimator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            IRS Form 5472 & FinCEN Penalty Estimator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your exposure to statutory $25,000 IRS late penalties and $590/day FinCEN BOI report non-compliance fines.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            {/* INPUT 1: YEARS UNFILED */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  1. Years of Unfiled IRS Form 5472:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {yearsUnfiledForm5472} {yearsUnfiledForm5472 === 1 ? "Tax Year" : "Tax Years"}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="4"
                step="1"
                value={yearsUnfiledForm5472}
                onChange={(e) => setYearsUnfiledForm5472(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                IRS section 6038A imposes $25,000 per unfiled Form 5472.
              </span>
            </div>

            {/* INPUT 2: BOI REPORT */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={isBoiReportOverdue}
                  onChange={(e) => setIsBoiReportOverdue(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div className="text-xs">
                  <strong className="text-navy-950 block">FinCEN BOI Report Overdue?</strong>
                  <span className="text-gray-500">Mandatory beneficial ownership report for US LLCs.</span>
                </div>
              </label>

              {isBoiReportOverdue && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                      Days Overdue Beyond 90-Day Deadline:
                    </label>
                    <span className="font-mono text-gold-600 font-bold text-base">
                      {boiDaysOverdue} Days Late
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="90"
                    step="5"
                    value={boiDaysOverdue}
                    onChange={(e) => setBoiDaysOverdue(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          {/* RIGHT RESULT SUMMARY CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Statutory Penalty Exposure</span>
              </div>

              {/* COST LIST */}
              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>IRS Form 5472 Penalty (${yearsUnfiledForm5472}x $25k):</span>
                  <span className="font-mono text-gold-400 font-semibold">${baseForm5472Penalty.toLocaleString()}</span>
                </div>
                {isBoiReportOverdue && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>FinCEN BOI Penalty ($590/day):</span>
                    <span className="font-mono text-gold-400 font-semibold">${baseBoiPenalty.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* TOTAL ESTIMATED PENALTY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Federal Penalty Risk
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  ${totalPenaltyExposure.toLocaleString()}
                  <span className="text-xs text-navy-300 font-sans font-normal ml-2">USD</span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-navy-200">
                  File retroactive penalty relief disclosures with ADVAQ before receiving an IRS CP215 notice.
                </div>
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/corporate-tax-return"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Overdue Form 5472 with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20My%20US%20LLC%20has%20unfiled%20Form%205472%20(${yearsUnfiledForm5472}%20years).%20Please%20help%20me%20file%20and%20request%20penalty%20relief.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp US Tax CPA
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
