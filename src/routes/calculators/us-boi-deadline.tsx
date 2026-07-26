import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Calendar,
  DollarSign,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-boi-deadline")({
  head: () => ({
    meta: [
      { title: "FinCEN BOI Report Deadline & Penalty Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FinCEN Beneficial Ownership Information (BOI) deadline & penalty calculator. Calculate $590/day non-compliance fines for US LLCs.",
      },
      {
        name: "keywords",
        content:
          "fincen boi report deadline calculator 2026, boi report late filing penalty 590 per day, corporate transparency act us llc deadline",
      },
      {
        property: "og:title",
        content: "FinCEN BOI Report Deadline & Penalty Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your exact FinCEN BOI report deadline and estimate daily non-filing penalties for your US LLC.",
      },
      { property: "og:url", content: "/calculators/us-boi-deadline" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-boi-deadline" }],
  }),
  component: USBOIDeadlineCalculatorPage,
});

function USBOIDeadlineCalculatorPage() {
  const [formationYear, setFormationYear] = useState<"before2024" | "2024" | "2025+">("2025+");
  const [daysOverdue, setDaysOverdue] = useState<number>(15);
  const [isFiled, setIsFiled] = useState<boolean>(false);

  // FinCEN Penalties: $590/day civil penalty up to $10,000 maximum + up to 2 years imprisonment
  let deadlineText = "Within 30 Calendar Days of Formation";
  if (formationYear === "before2024") {
    deadlineText = "December 31, 2024 (Expired)";
  } else if (formationYear === "2024") {
    deadlineText = "Within 90 Calendar Days of Formation";
  }

  const dailyPenaltyRate = 590;
  const estimatedFine = isFiled ? 0 : Math.min(10000, daysOverdue * dailyPenaltyRate);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>FinCEN BOI Deadline & Penalty</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FinCEN BOI Report Deadline & Penalty Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Determine your mandatory FinCEN Corporate Transparency Act filing deadline and estimate statutory $590/day late penalties.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: FORMATION YEAR */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. When was your US LLC formed?
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setFormationYear("before2024")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    formationYear === "before2024"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Before Jan 1, 2024
                </button>
                <button
                  type="button"
                  onClick={() => setFormationYear("2024")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    formationYear === "2024"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  In 2024
                </button>
                <button
                  type="button"
                  onClick={() => setFormationYear("2025+")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    formationYear === "2025+"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  2025 / 2026 (New LLC)
                </button>
              </div>
            </div>

            {/* INPUT 2: DAYS OVERDUE */}
            {!isFiled && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    Days Overdue Beyond Legal Deadline:
                  </label>
                  <span className="font-mono text-gold-600 font-bold text-base">
                    {daysOverdue} Days Overdue
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="60"
                  step="1"
                  value={daysOverdue}
                  onChange={(e) => setDaysOverdue(Number(e.target.value))}
                  className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
              </div>
            )}

            {/* TOGGLE: ALREADY FILED */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Already Filed FinCEN BOI Report?</strong>
                <span className="text-gray-500 text-xs">Verify your compliance status.</span>
              </div>
              <input
                type="checkbox"
                checked={isFiled}
                onChange={(e) => setIsFiled(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>BOI Compliance Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Mandatory Deadline:</span>
                  <span className="font-mono text-gold-400 font-semibold">{deadlineText}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Daily FinCEN Non-Filing Fine:</span>
                  <span className="font-mono text-amber-400 font-semibold">$590 / day</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Maximum Statutory Fine:</span>
                  <span className="font-mono text-red-400 font-semibold">$10,000</span>
                </div>
              </div>

              {/* ESTIMATED FINE DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  {isFiled ? "BOI Report Status" : "Estimated Fine Exposure"}
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  {isFiled ? "✅ Compliant (Filed)" : `$${estimatedFine.toLocaleString()}`}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/boi-report"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File BOI Report for $49 with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
