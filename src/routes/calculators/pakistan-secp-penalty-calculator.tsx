import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-secp-penalty-calculator")({
  head: () => ({
    meta: [
      { title: "SECP Form A & Form 9 Late Filing Penalty Estimator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive SECP late filing penalty calculator. Calculate Form A, Form 9, Form 4, and annual return late fees & compounding penalties for Pakistani companies.",
      },
      {
        name: "keywords",
        content:
          "secp form a form 9 late filing penalty calculator 2026, secp company late return penalty fee calculator pakistan, secp inactive company restoration fee, secp adjudication order late filing fine",
      },
      {
        property: "og:title",
        content: "SECP Form A & Form 9 Late Filing Penalty Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate compounding SECP penalties for overdue annual accounts, Form A, and Form 9 statutory filings.",
      },
      { property: "og:url", content: "/calculators/pakistan-secp-penalty-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-secp-penalty-calculator" }],
  }),
  component: PakistanSecpPenaltyCalculatorPage,
});

function PakistanSecpPenaltyCalculatorPage() {
  const [monthsOverdue, setMonthsOverdue] = useState<number>(6);
  const [unfiledFormA, setUnfiledFormA] = useState<boolean>(true);
  const [unfiledForm9, setUnfiledForm9] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let baseFormAPenalty = unfiledFormA ? 5000 + monthsOverdue * 1000 : 0;
  let baseForm9Penalty = unfiledForm9 ? 5000 + monthsOverdue * 1000 : 0;

  if (monthsOverdue > 12) {
    baseFormAPenalty += 25000;
    baseForm9Penalty += 25000;
  }

  const totalSecpPenaltyRiskPKR = baseFormAPenalty + baseForm9Penalty;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "SECP Late Filing Penalty Estimator", item: "https://advaq.com/calculators/pakistan-secp-penalty-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SECP Form A & Form 9 Late Filing Penalty Estimator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-secp-penalty-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate statutory late filing fees and adjudication penalty risks for overdue SECP Form A, Form 9, Form 4, and annual corporate returns under Companies Act 2017.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is SECP Form A and when is it required to be filed?",
      a: "Form A (Annual Return of Company) is a mandatory annual statutory return submitted under Section 130 of the Companies Act 2017 within 30 days of holding the Annual General Meeting (AGM).",
    },
    {
      q: "What is SECP Form 9 and when must it be submitted?",
      a: "Form 9 (Particulars of Directors, Officers, and Auditors - replacing Form 29) must be filed within 14 days of any change in company directors, chief executive, auditor appointments, or registered addresses under Section 197 of the Companies Act 2017.",
    },
    {
      q: "What happens if a company fails to file SECP Form A and Form 9 for multiple years?",
      a: "Continuous non-filing leads to SECP Adjudication Proceedings, compounding monetary fines on directors personally, issuance of Show-Cause notices, and ultimate strike-off (winding-up) of the company from the SECP Register.",
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
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>SECP Late Filing Penalty</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            SECP Form A & Form 9 Late Filing Penalty Estimator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate statutory late filing fees and adjudication penalty risks for overdue SECP Form A, Form 9, Form 4, and annual corporate returns.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Months Overdue Beyond SECP Statutory Deadline:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {monthsOverdue} Months Late
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="24"
                step="1"
                value={monthsOverdue}
                onChange={(e) => setMonthsOverdue(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={unfiledFormA}
                  onChange={(e) => setUnfiledFormA(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Form A (Annual Return of Company) Overdue?</strong>
                  <span className="text-gray-500">Mandatory filing within 30 days of Annual General Meeting (AGM).</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={unfiledForm9}
                  onChange={(e) => setUnfiledForm9(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Form 9 (Particulars of Directors/Officers) Overdue?</strong>
                  <span className="text-gray-500">Mandatory filing for director change, election or address updates (replacing Form 29).</span>
                </div>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>SECP Penalty Exposure</span>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Penalty Risk
                </span>
                <div className="text-4xl font-serif font-bold text-white my-2">
                  Rs {Math.round(totalSecpPenaltyRiskPKR).toLocaleString()} PKR
                </div>
                <div className="text-xs text-navy-200">
                  File late returns through ADVAQ eServices portal before receiving SECP Adjudication notice.
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/secp-annual-filing"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Overdue SECP Returns with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. DYNAMIC STEP-BY-STEP MATHEMATICAL WALKTHROUGH ENGINE */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step SECP Penalty Exposure Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of Companies Act 2017 late filing statutory daily fine accumulation for {monthsOverdue} months delay.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Overdue Delay Period</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Delay Months</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Months Overdue:</span> <strong className="text-white">{monthsOverdue} Months</strong></div>
                <div className="flex justify-between"><span>Governing Act:</span> <strong className="text-white">Companies Act 2017</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Total Delay Window:</span> <strong>{monthsOverdue * 30} Days</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Form A / 9 Audit</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">Late Forms</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Form A Overdue:</span> <strong className={unfiledFormA ? "text-red-400" : "text-emerald-400"}>{unfiledFormA ? "YES" : "NO"}</strong></div>
                <div className="flex justify-between"><span>Form 9 Overdue:</span> <strong className={unfiledForm9 ? "text-red-400" : "text-emerald-400"}>{unfiledForm9 ? "YES" : "NO"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Daily Fine Accumulation:</span> <strong>Active</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Penalty Risk Exposure</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Statutory Risk</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>SECP Adjudication:</span> <strong className="text-red-400">Pending</strong></div>
                <div className="flex justify-between"><span>Estimated Fine:</span> <strong className="text-red-400">Rs {Math.round(totalSecpPenaltyRiskPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Total Penalty Risk:</span> <strong>Rs {Math.round(totalSecpPenaltyRiskPKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: ADVAQ Regularization</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Remediation</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Form A Filing:</span> <strong className="text-white">Same-Day eServices</strong></div>
                <div className="flex justify-between"><span>CRO Fee Deposit:</span> <strong className="text-emerald-400">Included</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Adjudication Shield:</span> <strong>Active</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUICK REFERENCE SUMMARY TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                SECP Annual Statutory Returns Schedule & Penalty Rates
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">SECP Form Name</th>
                  <th className="p-3.5">Statutory Purpose</th>
                  <th className="p-3.5">Filing Deadline</th>
                  <th className="p-3.5 rounded-tr-xl">Late Penalty Exposure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Form A / Form B</td>
                  <td className="p-3.5 text-gray-600">Annual Return of Capital & Shareholders</td>
                  <td className="p-3.5 font-mono">30 Days from AGM Date</td>
                  <td className="p-3.5 font-bold text-red-600">Rs 5,000 + Rs 1,000/mo</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Form 9 (replaces Form 29)</td>
                  <td className="p-3.5 text-gray-600">Particulars of Directors & CEO</td>
                  <td className="p-3.5 font-mono">14 Days from Change Date</td>
                  <td className="p-3.5 font-bold text-red-600">Rs 5,000 + Rs 1,000/mo</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Form 45 (UBO)</td>
                  <td className="p-3.5 text-gray-600">Ultimate Beneficial Owner Declaration</td>
                  <td className="p-3.5 font-mono">Within 14 Days of Change</td>
                  <td className="p-3.5 font-bold text-red-600">Adjudication Hearing Fine</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2: FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (SECP Late Filing Fines)
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

        {/* SECTION 3: RELATED PAKISTAN CALCULATORS */}
        <section className="space-y-6">
          <div className="border-b border-border pb-4">
            <h2 className="font-serif text-2xl font-bold text-navy-950">
              Explore Related SECP & Corporate Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  SECP Setup
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  SECP Private Limited Company Setup Cost
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate SECP company incorporation fees, NIFT digital signatures, and NTN registration.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-secp-cost-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  NTN Eligibility
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR NTN Registration Eligibility Checker
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Check required documents, timeline & process for Salaried, Business & SECP Companies.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-ntn-eligibility-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  FBR Notice Risk
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Tax Notice Response Deadline Checker
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177).
                </p>
              </div>
              <Link
                to="/calculators/pakistan-fbr-notice-timeline-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: ADVAQ ADVISORY BANNER */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ Registered High-Court Corporate Lawyers
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Regularize Overdue SECP Form A & Form 9 Filings
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our SECP legal team submits overdue Form A, Form 9, and Form 45 returns, represents companies in SECP Adjudication hearings, and restores inactive corporate entities.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/secp-annual-filing"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Overdue SECP Forms <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
