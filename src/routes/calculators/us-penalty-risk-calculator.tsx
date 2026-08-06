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
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-penalty-risk-calculator")({
  head: () => ({
    meta: [
      { title: "US Form 5472 & $25,000 IRS Penalty Risk Estimator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC IRS Form 5472 late penalty calculator. Estimate $25,000 late filing penalties, BOI report fines, and tax compliance risk score.",
      },
      {
        name: "keywords",
        content:
          "irs form 5472 late penalty calculator 2026, 25000 irs penalty single member llc foreign owner, boi report late penalty fine calculator us llc, irs reasonable cause penalty abatement",
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
      { property: "og:url", content: "/calculators/us-penalty-risk-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-penalty-risk-calculator" }],
  }),
  component: USPenaltyRiskCalculatorPage,
});

function USPenaltyRiskCalculatorPage() {
  const [yearsUnfiledForm5472, setYearsUnfiledForm5472] = useState<number>(1);
  const [isBoiReportOverdue, setIsBoiReportOverdue] = useState<boolean>(true);
  const [boiDaysOverdue, setBoiDaysOverdue] = useState<number>(30);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const baseForm5472Penalty = yearsUnfiledForm5472 * 25000;
  const baseBoiPenalty = isBoiReportOverdue ? Math.min(10000, boiDaysOverdue * 590) : 0;
  const totalPenaltyExposure = baseForm5472Penalty + baseBoiPenalty;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "IRS Penalty Risk Estimator", item: "https://advaq.com/calculators/us-penalty-risk-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Form 5472 & $25,000 IRS Penalty Risk Estimator (2026/2027)",
    url: "https://advaq.com/calculators/us-penalty-risk-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate exposure for statutory $25,000 IRS Form 5472 late filing penalties and $590/day FinCEN BOI report non-compliance fines.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the penalty for late filing IRS Form 5472?",
      a: "Internal Revenue Code Section 6038A imposes a strict, mandatory $25,000 penalty for failure to file Form 5472 or failure to maintain required records. An additional $25,000 penalty applies for every 90 days of continued non-filing after IRS notification.",
    },
    {
      q: "Can the $25,000 IRS Form 5472 penalty be waived?",
      a: "Yes! If you have reasonable cause (such as non-resident reliance on incorrect tax advice or lack of awareness of US reporting rules), ADVAQ CPAs can submit a formal Reasonable Cause Penalty Abatement Statement to request 100% waiver of the fine.",
    },
    {
      q: "Does $0 profit mean I don't have to file Form 5472?",
      a: "NO! Even if your LLC had $0 revenue and $0 profit, Form 5472 is MANDATORY if there were any reportable transactions (such as the owner depositing capital into the LLC bank account or paying formation fees out of pocket).",
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
            <span>US Penalty Risk Estimator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            IRS Form 5472 & FinCEN Penalty Estimator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your exposure to statutory $25,000 IRS late penalties and $590/day FinCEN BOI report non-compliance fines.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
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

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Statutory Penalty Exposure</span>
              </div>

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

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/corporate-tax-return"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Overdue Form 5472 with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US PENALTY RISK WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Statutory Penalty Exposure Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of IRC Section 6038A Form 5472 fines and FinCEN BOI late filing penalties.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: IRS Form 5472 Non-Filing Exposure</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">${baseForm5472Penalty.toLocaleString()} Fine</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Unfiled Form 5472 Tax Years:</span> <strong className="text-white">{yearsUnfiledForm5472} Year(s)</strong></div>
                <div className="flex justify-between"><span>Statutory Penalty per Year:</span> <strong className="text-amber-400">$25,000 USD / Year</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Form 5472 Penalty Subtotal:</span> <strong>${baseForm5472Penalty.toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: FinCEN BOI Report Fine Exposure</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isBoiReportOverdue ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {isBoiReportOverdue ? `$${baseBoiPenalty.toLocaleString()} Fine` : "$0 Fine ✅"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>FinCEN BOI Status:</span> <strong className={isBoiReportOverdue ? "text-red-400" : "text-emerald-400"}>{isBoiReportOverdue ? `${boiDaysOverdue} Days Late` : "Filed / Compliant"}</strong></div>
                <div className="flex justify-between"><span>Daily Statutory Fine Rate:</span> <strong className="text-amber-400">$590 / day</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>FinCEN Penalty Subtotal:</span> <strong>${baseBoiPenalty.toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: State Corporate Dissolution Risk</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">Administrative Risk</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>State Annual Report Status:</span> <strong className="text-amber-400">Late Franchise Risk</strong></div>
                <div className="flex justify-between"><span>LLC Administrative Dissolution:</span> <strong className="text-red-400">High Risk if Unpaid</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Compliance Fine & Abatement</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Action Required</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Federal Fine Exposure:</span> <strong>${totalPenaltyExposure.toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>ADVAQ Reasonable Cause Abatement:</span> <strong>100% Waiver Eligible</strong></div>
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
                US Non-Resident Compliance Penalties Overview (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Filing Obligation</th>
                  <th className="p-3.5">Statutory Late Penalty</th>
                  <th className="p-3.5">Filing Agency</th>
                  <th className="p-3.5 rounded-tr-xl">Penalty Abatement Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">IRS Form 5472 + 1120 Pro-Forma</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">$25,000 per unfiled year</td>
                  <td className="p-3.5">IRS Ogden / Memphis Center</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Reasonable Cause Statement ✅</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">FinCEN BOI Report</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">$590 per day (up to $10,000)</td>
                  <td className="p-3.5">FinCEN Treasury</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Good Faith Corrective Filing ✅</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">FBAR (FinCEN Form 114)</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">$10,000+ non-willful fine</td>
                  <td className="p-3.5">FinCEN Treasury</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Streamlined Filing Procedures ✅</td>
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
              Frequently Asked Questions (IRS Penalty Abatement)
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
              <Shield size={16} /> ADVAQ US Certified CPA Penalty Abatement Concierge
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Facing a $25,000 IRS Form 5472 Penalty Notice?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US CPAs draft custom Reasonable Cause Penalty Abatement petitions to request 100% penalty waiver and submit retroactive Form 5472 filings.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/corporate-tax-return"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Request Penalty Abatement <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Penalty Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
