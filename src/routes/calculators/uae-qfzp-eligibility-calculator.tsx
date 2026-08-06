import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  ArrowRight,
  Sparkles,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-qfzp-eligibility-calculator")({
  head: () => ({
    meta: [
      { title: "UAE Qualifying Free Zone Person (QFZP) 0% Tax Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Check qualifying income, de minimis rule (5% / AED 5M threshold), and substance requirements to maintain 0% UAE Corporate Tax status as a Free Zone entity.",
      },
      {
        name: "keywords",
        content:
          "uae qfzp eligibility calculator, 0% corporate tax freezone dubai, uae de minimis rule qualifying income, Cabinet Decision No. 55 139 2023, freezone adequate substance test uae",
      },
      {
        property: "og:title",
        content: "UAE Qualifying Free Zone Person (QFZP) 0% Tax Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Verify 0% UAE Corporate Tax eligibility under Cabinet Decision No. 55 & 139 of 2023 for Free Zone businesses.",
      },
      { property: "og:url", content: "/calculators/uae-qfzp-eligibility-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-qfzp-eligibility-calculator" }],
  }),
  component: UAEQFZPEligibilityPage,
});

function UAEQFZPEligibilityPage() {
  const [qualifyingIncome, setQualifyingIncome] = useState<number>(4500000);
  const [nonQualifyingIncome, setNonQualifyingIncome] = useState<number>(150000);
  const [maintainsSubstance, setMaintainsSubstance] = useState<boolean>(true);
  const [auditedAccounts, setAuditedAccounts] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const totalRevenue = qualifyingIncome + nonQualifyingIncome;
  const deMinimisLimit = Math.min(totalRevenue * 0.05, 5000000);
  const passesDeMinimis = nonQualifyingIncome <= deMinimisLimit;
  const qualifiesQFZP = maintainsSubstance && auditedAccounts && passesDeMinimis;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE QFZP 0% Tax Checker", item: "https://advaq.com/calculators/uae-qfzp-eligibility-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Qualifying Free Zone Person (QFZP) 0% Tax Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-qfzp-eligibility-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Verify 0% UAE Corporate Tax eligibility for Free Zone entities under Cabinet Decision No. 55 and Ministerial Decision No. 139 of 2023.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is a Qualifying Free Zone Person (QFZP) in the UAE?",
      a: "A QFZP is a Free Zone company that satisfies 5 strict conditions: 1) Maintains adequate substance in a UAE Free Zone, 2) Derives Qualifying Income, 3) Has not elected to be subject to standard 9% tax, 4) Complies with Transfer Pricing rules, and 5) Satisfies the De Minimis requirement.",
    },
    {
      q: "What is the De Minimis rule for non-qualifying income?",
      a: "Under Ministerial Decision No. 139 of 2023, non-qualifying revenue derived by a Free Zone person must not exceed 5% of total revenue OR AED 5,000,000, whichever is lower. Exceeding this limit revokes 0% QFZP status for 5 consecutive tax years.",
    },
    {
      q: "Are audited financial statements mandatory to claim 0% QFZP tax?",
      a: "YES! To maintain QFZP status and benefit from 0% Corporate Tax, a Free Zone entity MUST prepare and maintain audited financial statements prepared in accordance with IFRS.",
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
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>QFZP 0% Tax Status</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Qualifying Free Zone Person (QFZP) 0% Tax Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Verify 0% UAE Corporate Tax eligibility under Cabinet Decision No. 55 & 139 of 2023 for Free Zone businesses.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <h2 className="font-serif text-lg font-bold text-navy-950">Freezone Revenue & Compliance Inputs</h2>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Qualifying Income (AED)</label>
              <input
                type="number"
                value={qualifyingIncome}
                onChange={(e) => setQualifyingIncome(Number(e.target.value))}
                className="w-full bg-white border border-border rounded-lg p-3 text-sm font-medium focus:outline-none focus:border-gold-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Non-Qualifying / Local Income (AED)</label>
              <input
                type="number"
                value={nonQualifyingIncome}
                onChange={(e) => setNonQualifyingIncome(Number(e.target.value))}
                className="w-full bg-white border border-border rounded-lg p-3 text-sm font-medium focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex items-center justify-between bg-white border border-border p-3.5 rounded-xl">
              <div>
                <span className="text-xs font-semibold block">Adequate Substance in UAE Free Zone?</span>
                <span className="text-[11px] text-gray-500">Staff, office space & core income generating activities</span>
              </div>
              <input
                type="checkbox"
                checked={maintainsSubstance}
                onChange={(e) => setMaintainsSubstance(e.target.checked)}
                className="w-4 h-4 accent-gold-500 shrink-0"
              />
            </div>

            <div className="flex items-center justify-between bg-white border border-border p-3.5 rounded-xl">
              <div>
                <span className="text-xs font-semibold block">Prepares Audited Financial Statements?</span>
                <span className="text-[11px] text-gray-500">Mandatory requirement for QFZP status</span>
              </div>
              <input
                type="checkbox"
                checked={auditedAccounts}
                onChange={(e) => setAuditedAccounts(e.target.checked)}
                className="w-4 h-4 accent-gold-500 shrink-0"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">QFZP Status Assessment</span>
              <h3 className="font-serif text-2xl font-bold mt-2">
                {qualifiesQFZP ? "✅ Qualifies for 0% Corporate Tax" : "⚠️ Subject to 9% Corporate Tax"}
              </h3>

              <div className="mt-6 space-y-3 text-xs border-t border-navy-800 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">De Minimis Threshold (5% or AED 5M):</span>
                  <span className="font-bold font-mono text-white">AED {Math.round(deMinimisLimit).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">De Minimis Test Result:</span>
                  <span className={`font-bold ${passesDeMinimis ? "text-emerald-400" : "text-rose-400"}`}>
                    {passesDeMinimis ? "PASSED" : "FAILED"}
                  </span>
                </div>
                <div className="flex justify-between text-gold-400 font-bold pt-2 border-t border-navy-800">
                  <span>Applicable Tax Rate:</span>
                  <span className="text-lg">{qualifiesQFZP ? "0% (QFZP Rate)" : "9% (Standard Rate)"}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Get Free Zone Corporate Tax Structuring
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP QFZP 0% TAX WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step QFZP 0% Tax Eligibility Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Cabinet Decision No. 55 & Ministerial Decision No. 139 of 2023 de minimis compliance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Total Revenue & Income Split</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED {totalRevenue.toLocaleString()} Total</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Qualifying Freezone Income:</span> <strong className="text-emerald-400">AED {qualifyingIncome.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Non-Qualifying / Mainland Revenue:</span> <strong className="text-white">AED {nonQualifyingIncome.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Ministerial Decision 139 De Minimis Test</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${passesDeMinimis ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {passesDeMinimis ? "De Minimis Passed ✅" : "Exceeded Limit ❌"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Statutory Cap (5% or AED 5M):</span> <strong className="text-white">AED {Math.round(deMinimisLimit).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Actual Non-Qualifying Revenue:</span> <strong className={passesDeMinimis ? "text-emerald-400" : "text-red-400"}>AED {nonQualifyingIncome.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Adequate Substance & IFRS Audit</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${maintainsSubstance && auditedAccounts ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {maintainsSubstance && auditedAccounts ? "Compliant ✅" : "Incomplete Requirements"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Adequate Freezone Substance:</span> <strong className={maintainsSubstance ? "text-emerald-400" : "text-amber-400"}>{maintainsSubstance ? "YES" : "NO"}</strong></div>
                <div className="flex justify-between"><span>Audited Financial Statements:</span> <strong className={auditedAccounts ? "text-emerald-400" : "text-amber-400"}>{auditedAccounts ? "YES (IFRS Compliant)" : "NO"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Corporate Tax Verdict</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${qualifiesQFZP ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {qualifiesQFZP ? "0% QFZP Status ✅" : "9% Standard Tax Rate"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Applicable Corporate Tax Rate:</span> <strong>{qualifiesQFZP ? "0% (Qualifying Free Zone Person)" : "9% (Standard Rate)"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Tax Status Risk Period:</span> <strong className="text-emerald-400">{qualifiesQFZP ? "Clean Compliance" : "5-Year Revocation Risk if Disqualified"}</strong></div>
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
                UAE QFZP Qualifying Activities vs Non-Qualifying Matrix (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Income Source / Activity</th>
                  <th className="p-3.5">Counterparty Location</th>
                  <th className="p-3.5">QFZP Tax Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Cabinet Decision Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className="bg-gold-500/10 font-bold">
                  <td className="p-3.5 text-navy-950">Manufacturing & Processing Goods</td>
                  <td className="p-3.5">Free Zone or Foreign Person</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% Corporate Tax ✅</td>
                  <td className="p-3.5">Cabinet Decision No. 55 of 2023</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Headquarter & Treasury Services</td>
                  <td className="p-3.5">Related Parties Worldwide</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% Corporate Tax ✅</td>
                  <td className="p-3.5">Ministerial Decision No. 139 of 2023</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Retail Sales to Mainland Individuals</td>
                  <td className="p-3.5">UAE Mainland Consumers</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">9% Standard Rate (De Minimis Counted)</td>
                  <td className="p-3.5">Ministerial Decision No. 139 of 2023</td>
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
              Frequently Asked Questions (UAE QFZP 0% Tax)
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
              <ShieldCheck size={16} /> ADVAQ UAE Corporate Tax Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Secure Your 0% QFZP Corporate Tax Status with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UAE tax consultants perform transfer pricing audits, de minimis testing, and IFRS financial statement reviews to safeguard your 0% freezone tax status.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Consult ADVAQ UAE Tax Specialist <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp QFZP Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
