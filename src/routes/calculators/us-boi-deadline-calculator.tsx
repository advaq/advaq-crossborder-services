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
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-boi-deadline-calculator")({
  head: () => ({
    meta: [
      { title: "FinCEN BOI Report Deadline & Penalty Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FinCEN Beneficial Ownership Information (BOI) deadline & penalty calculator. Calculate $590/day non-compliance fines for US LLCs.",
      },
      {
        name: "keywords",
        content:
          "fincen boi report deadline calculator 2026, boi report late filing penalty 590 per day, corporate transparency act us llc deadline, fincen boir foreign owner requirements",
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
      { property: "og:url", content: "/calculators/us-boi-deadline-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-boi-deadline-calculator" }],
  }),
  component: USBOIDeadlineCalculatorPage,
});

function USBOIDeadlineCalculatorPage() {
  const [formationYear, setFormationYear] = useState<"before2024" | "2024" | "2025+">("2025+");
  const [daysOverdue, setDaysOverdue] = useState<number>(15);
  const [isFiled, setIsFiled] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let deadlineText = "Within 30 Calendar Days of Formation";
  if (formationYear === "before2024") {
    deadlineText = "December 31, 2024 (Expired)";
  } else if (formationYear === "2024") {
    deadlineText = "Within 90 Calendar Days of Formation";
  }

  const dailyPenaltyRate = 590;
  const estimatedFine = isFiled ? 0 : Math.min(10000, daysOverdue * dailyPenaltyRate);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "FinCEN BOI Deadline Calculator", item: "https://advaq.com/calculators/us-boi-deadline-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FinCEN BOI Report Deadline & Penalty Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-boi-deadline-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate mandatory FinCEN Beneficial Ownership Information (BOIR) report deadlines and statutory $590/day non-filing penalties under the Corporate Transparency Act.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the Corporate Transparency Act (CTA) FinCEN BOI filing mandate?",
      a: "Enacted by US Congress, the Corporate Transparency Act requires almost all domestic and foreign registered LLCs and Corporations to report information about their Beneficial Owners (individuals who own 25%+ or exercise substantial control) to FinCEN.",
    },
    {
      q: "What are the strict BOI deadlines for newly formed 2025/2026 LLCs?",
      a: "For LLCs formed on or after January 1, 2025, the BOI report MUST be filed within 30 calendar days of receiving notice of state creation.",
    },
    {
      q: "What happens if a foreign owner fails to file a FinCEN BOI report?",
      a: "Failing to file carries severe statutory civil penalties of up to $590 per day (adjusted annually for inflation), criminal fines up to $10,000, and up to 2 years imprisonment.",
    },
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-navy-950">
      {/* Structured JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

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
            FinCEN BOI Report Deadline & Penalty Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Determine your mandatory FinCEN Corporate Transparency Act filing deadline and estimate statutory $590/day late penalties.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
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
                File FinCEN BOI Report Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP FINCEN BOI DEADLINE WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step FinCEN BOI Penalty Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Corporate Transparency Act statutory deadlines and $590/day civil penalties.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Statutory Deadline Window</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">CTA Benchmark</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Formation Year Category:</span> <strong className="text-white">{formationYear === "before2024" ? "Pre-2024 Formation" : formationYear === "2024" ? "2024 Formation" : "2025/2026 Formation"}</strong></div>
                <div className="flex justify-between"><span>Statutory Deadline Window:</span> <strong className="text-gold-400">{deadlineText}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Days Overdue Exposure</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${!isFiled ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {!isFiled ? `${daysOverdue} Days Unfiled` : "Filed ✅"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Days Past Filing Deadline:</span> <strong className="text-white">{isFiled ? "0 Days" : `${daysOverdue} Days`}</strong></div>
                <div className="flex justify-between"><span>Daily Statutory Civil Penalty:</span> <strong className="text-amber-400">$590 / day</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: FinCEN Fine Calculation</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">$590 x {daysOverdue} Days</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Calculated Daily Accumulation:</span> <strong className="text-red-400">${isFiled ? 0 : daysOverdue * dailyPenaltyRate} USD</strong></div>
                <div className="flex justify-between"><span>Statutory Penalty Cap:</span> <strong className="text-white">$10,000 Maximum</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Compliance Risk Status</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isFiled ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {isFiled ? "Compliant ✅" : "Immediate Action Needed"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Fine Exposure:</span> <strong>${estimatedFine.toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Required Action:</span> <strong className={isFiled ? "text-emerald-400" : "text-amber-400"}>{isFiled ? "Maintain Updated BOIR" : "File BOI Report immediately"}</strong></div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: QUICK REFERENCE SUMMARY TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                FinCEN Beneficial Ownership Reporting Rules (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">LLC Formation Date</th>
                  <th className="p-3.5">Filing Window</th>
                  <th className="p-3.5">Daily Non-Filing Fine</th>
                  <th className="p-3.5 rounded-tr-xl">Max Criminal Fine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Formed on or after Jan 1, 2025</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">30 Calendar Days</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">$590 / day</td>
                  <td className="p-3.5">$10,000 + 2 Yrs Prison</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Formed in 2024</td>
                  <td className="p-3.5 font-mono font-bold text-amber-600">90 Calendar Days</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">$590 / day</td>
                  <td className="p-3.5">$10,000 + 2 Yrs Prison</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Formed Before Jan 1, 2024</td>
                  <td className="p-3.5 font-mono font-bold text-red-600">Dec 31, 2024 (Expired)</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">$590 / day</td>
                  <td className="p-3.5">$10,000 + 2 Yrs Prison</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (FinCEN BOI)
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto pt-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-serif text-sm sm:text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ADVAQ CTA */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ FinCEN Authorized BOI Filing Concierge
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              File Your FinCEN BOI Report Today for $49
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US compliance specialists file your official Beneficial Ownership Information Report with FinCEN in 24 hours to secure your LLC and prevent $590/day fines.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/boi-report"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File BOI Report for $49 <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp BOI Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
