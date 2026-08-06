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
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-fbar-fatca-checker-calculator")({
  head: () => ({
    meta: [
      { title: "FBAR (FinCEN 114) & FATCA Requirement Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBAR (FinCEN 114) & FATCA filing requirement checker. Check $10,000 foreign account threshold & calculate statutory penalty exposure.",
      },
      {
        name: "keywords",
        content:
          "fbar fincen 114 requirement checker 2026, 10000 threshold foreign bank account fbar, non resident us llc fbar penalty calculator, fatca form 8938 threshold",
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
      { property: "og:url", content: "/calculators/us-fbar-fatca-checker-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-fbar-fatca-checker-calculator" }],
  }),
  component: USFbarFatcaCheckerPage,
});

function USFbarFatcaCheckerPage() {
  const [maxAccountBalance, setMaxAccountBalance] = useState<number>(15000);
  const [isUsPersonOrLlc, setIsUsPersonOrLlc] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const fbarThreshold = 10000;
  const isFbarFilingMandatory = isUsPersonOrLlc && maxAccountBalance >= fbarThreshold;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "FBAR & FATCA Checker", item: "https://advaq.com/calculators/us-fbar-fatca-checker-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FBAR (FinCEN 114) & FATCA Requirement Checker (2026/2027)",
    url: "https://advaq.com/calculators/us-fbar-fatca-checker-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check mandatory FinCEN Form 114 FBAR ($10,000 threshold) and IRS FATCA Form 8938 filing requirements for US entities and residents.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the $10,000 aggregate FBAR threshold calculation?",
      a: "The $10,000 threshold is met if the aggregate maximum value of ALL non-US bank accounts owned or controlled by a US person/LLC exceeds $10,000 at ANY time during the calendar year (even for 1 day).",
    },
    {
      q: "Do foreign-owned single-member US LLCs file FBAR?",
      a: "A US domestic LLC is legally a 'US Person' under Treasury regulations. If a US LLC holds financial accounts in non-US banks or fintechs outside the US with peak balances exceeding $10,000, FinCEN 114 must be filed.",
    },
    {
      q: "What is the penalty for failing to file FBAR?",
      a: "Non-willful failure to file carries statutory civil penalties up to $10,000+ per violation. Willful non-filing penalties can reach $100,000 or 50% of the account balance, plus criminal charges.",
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
            <span>FBAR & FATCA Compliance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FBAR (FinCEN 114) & FATCA Requirement Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Verify whether your US LLC or foreign financial accounts cross the $10,000 threshold requiring annual FinCEN 114 reporting.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
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

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP FBAR & FATCA WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step FBAR & FATCA Compliance Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of FinCEN Form 114 and IRS Form 8938 filing thresholds.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Aggregate Foreign Account Peak</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${maxAccountBalance.toLocaleString()} Peak</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Peak Account Balance:</span> <strong className="text-white">${maxAccountBalance.toLocaleString()} USD</strong></div>
                <div className="flex justify-between"><span>FinCEN 114 Statutory Threshold:</span> <strong className="text-gold-400">$10,000 USD Aggregate</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: US Person / Entity Classification</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isUsPersonOrLlc ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {isUsPersonOrLlc ? "US Person / LLC ✅" : "Foreign Individual"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Account Holder Status:</span> <strong className="text-white">{isUsPersonOrLlc ? "US Registered LLC / US Person" : "Foreign Non-US Individual"}</strong></div>
                <div className="flex justify-between"><span>FBAR Statutory Scope:</span> <strong className={isUsPersonOrLlc ? "text-emerald-400" : "text-amber-400"}>{isUsPersonOrLlc ? "Subject to FinCEN 114" : "Exempt"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: FATCA Form 8938 Threshold</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">$50k–$400k Scope</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>IRS Form 8938 Threshold:</span> <strong className="text-white">$50,000 USD (Single US Resident)</strong></div>
                <div className="flex justify-between"><span>FATCA Filing Required:</span> <strong className={maxAccountBalance >= 50000 && isUsPersonOrLlc ? "text-amber-400" : "text-emerald-400"}>{maxAccountBalance >= 50000 && isUsPersonOrLlc ? "YES (Form 8938 Required)" : "NO (Below $50k)"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final FBAR & FATCA Verdict</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isFbarFilingMandatory ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {isFbarFilingMandatory ? "FBAR Required ⚠️" : "No Filing Needed ✅"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>FinCEN 114 Filing Status:</span> <strong>{isFbarFilingMandatory ? "MANDATORY (Due April 15 / Oct 15)" : "EXEMPT ($0 Owed)"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Penalty Risk Exposure:</span> <strong className={isFbarFilingMandatory ? "text-red-400" : "text-emerald-400"}>{isFbarFilingMandatory ? "Up to $10,000 Non-Willful Fine" : "$0 Fine Exposure"}</strong></div>
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
                FBAR (FinCEN 114) vs FATCA (Form 8938) Comparison Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Filing Provision</th>
                  <th className="p-3.5">FBAR (FinCEN Form 114)</th>
                  <th className="p-3.5 rounded-tr-xl">FATCA (IRS Form 8938)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Filing Threshold</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">$10,000 (Aggregate Peak Balance)</td>
                  <td className="p-3.5 font-mono text-amber-600 font-bold">$50,000 to $400,000+</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Filing Agency</td>
                  <td className="p-3.5 font-mono text-gold-600 font-bold">FinCEN (BSAE-Filing)</td>
                  <td className="p-3.5 font-mono text-navy-950 font-bold">IRS (Income Tax Return)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Non-Filing Penalty</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">$10,000+ Civil Penalty</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">$10,000 + $50,000 Continuation</td>
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
              Frequently Asked Questions (FBAR & FATCA)
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
              <Shield size={16} /> ADVAQ US Certified CPA FBAR Filing Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Need Annual FinCEN 114 FBAR Filing?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US CPA team prepares accurate BSA E-Filing FinCEN 114 reports for foreign-owned LLCs and US persons to prevent $10,000 statutory penalties.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File FBAR Report with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp FBAR CPA
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
