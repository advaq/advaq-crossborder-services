import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Plane,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-tax-residency-calculator")({
  head: () => ({
    meta: [
      { title: "UAE Tax Residency Certificate (TRC) Eligibility Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Tax Residency eligibility checker. Test Cabinet Decision No. 85 of 2022 (183-day & 90-day physical presence rules) for TRC certificate.",
      },
      {
        name: "keywords",
        content:
          "uae tax residency eligibility checker 2026, 183 days rule uae tax residency certificate trc, cabinet decision 85 of 2022 tax residency uae, fta tax residency certificate dubai",
      },
      {
        property: "og:title",
        content: "UAE Tax Residency Certificate (TRC) Eligibility Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check physical presence requirements for obtaining an official FTA Tax Residency Certificate (TRC).",
      },
      { property: "og:url", content: "/calculators/uae-tax-residency-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-tax-residency-calculator" }],
  }),
  component: UAETaxResidencyCheckerPage,
});

function UAETaxResidencyCheckerPage() {
  const [daysInUae, setDaysInUae] = useState<number>(190);
  const [hasEmiratesId, setHasEmiratesId] = useState<boolean>(true);
  const [hasPermanentHome, setHasPermanentHome] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const is183DayPass = daysInUae >= 183;
  const is90DayPass = daysInUae >= 90 && hasEmiratesId && hasPermanentHome;

  const isEligible = is183DayPass || is90DayPass;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE Tax Residency (TRC) Checker", item: "https://advaq.com/calculators/uae-tax-residency-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Tax Residency Certificate (TRC) Eligibility Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-tax-residency-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check physical presence limits for obtaining an official FTA Tax Residency Certificate (TRC) under UAE Cabinet Decision No. 85 of 2022.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What are the physical presence rules for UAE Tax Residency under Cabinet Decision No. 85 of 2022?",
      a: "An individual is considered a UAE Tax Resident if they satisfy any of the following 3 tests: 1) Physical presence in UAE for 183+ days in a 12-month period, 2) Physical presence in UAE for 90+ days AND hold a valid UAE residency visa + permanent place of residence (tenancy lease/property), or 3) Primary center of financial and personal interests in the UAE.",
    },
    {
      q: "Who issues the official UAE Tax Residency Certificate (TRC)?",
      a: "The Federal Tax Authority (FTA) issues official Tax Residency Certificates via the online EmaraTax portal.",
    },
    {
      q: "What documents are required to apply for an FTA Tax Residency Certificate?",
      a: "Required documents include: Valid Passport copy, UAE Residency Visa & Emirates ID, Bank statements for 6 months, Ejari tenancy contract or title deed, and GDRFA entry/exit report showing physical days spent in the UAE.",
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
            <span>UAE Tax Residency (TRC)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Tax Residency Certificate (TRC) Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Test Cabinet Decision No. 85 of 2022 physical presence rules (183-day vs 90-day threshold) for obtaining an FTA Tax Residency Certificate.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isEligible
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-amber-50 border-amber-300 text-amber-950"
            }`}
          >
            {isEligible ? (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={40} />
            ) : (
              <AlertTriangle className="text-amber-600 shrink-0" size={40} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isEligible
                  ? "🎉 Eligible for UAE Tax Residency Certificate (TRC)!"
                  : "⚠️ Insufficient Physical Days for UAE Tax Residency"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isEligible
                  ? `You satisfy Cabinet Decision No. 85 of 2022 physical presence limits (${daysInUae} days in UAE). You can apply for an official FTA Tax Residency Certificate.`
                  : `You currently have ${daysInUae} physical days in UAE. You need at least 183 days (or 90 days with UAE residence + lease/employment) to qualify.`}
              </p>
            </div>
          </div>

          <div className="space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Physical Days Spent in UAE (within 12-month period):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {daysInUae} Days in UAE
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="365"
                step="5"
                value={daysInUae}
                onChange={(e) => setDaysInUae(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>90 Days (Tied to Residence)</span>
                <span>183 Days (Automatic TRC)</span>
                <span>365 Days</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasEmiratesId}
                  onChange={(e) => setHasEmiratesId(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <span className="text-navy-950 font-semibold">Valid UAE Residency Visa & Emirates ID</span>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPermanentHome}
                  onChange={(e) => setHasPermanentHome(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <span className="text-navy-950 font-semibold">Tenancy Contract (Ejari) / Property Ownership</span>
              </label>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link to="/contact" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Apply for FTA Tax Residency Certificate with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP TAX RESIDENCY AUDIT */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Tax Residency Certificate (TRC) Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Cabinet Decision No. 85 of 2022 physical presence and primary interest tests.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: 183-Day Primary Presence Test</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${is183DayPass ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {is183DayPass ? "183-Day Test Passed ✅" : "Under 183 Days"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Physical Days in UAE (12 Months):</span> <strong className="text-white">{daysInUae} Days</strong></div>
                <div className="flex justify-between"><span>Automatic TRC Day Threshold:</span> <strong className="text-emerald-400">183 Days</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: 90-Day Tie-Breaker Test</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${is90DayPass ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-500/20 text-gray-300"}`}>
                  {is90DayPass ? "90-Day Test Passed ✅" : "Additional Ties Needed"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>90+ Physical Days Requirement:</span> <strong className={daysInUae >= 90 ? "text-emerald-400" : "text-amber-400"}>{daysInUae >= 90 ? "YES" : "NO"}</strong></div>
                <div className="flex justify-between"><span>Emirates ID & Ejari Permanent Home:</span> <strong className={hasEmiratesId && hasPermanentHome ? "text-emerald-400" : "text-amber-400"}>{hasEmiratesId && hasPermanentHome ? "YES" : "NO"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: GDRFA Travel Report Verification</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Movement Audit</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>GDRFA Entry/Exit Report:</span> <strong className="text-white">Official Movement Log</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Verified Physical Days:</span> <strong>{daysInUae} Days</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: FTA EmaraTax TRC Verdict</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isEligible ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {isEligible ? "TRC Issued ✅" : "Ineligible"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>TRC Certificate Status:</span> <strong>{isEligible ? "100% Eligible for FTA TRC" : "Need Additional Physical Days"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>ADVAQ Processing:</span> <strong className="text-emerald-400">FTA Certificate in 5 Days</strong></div>
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
                UAE Tax Residency Physical Presence Criteria (Cabinet Decision 85)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">TRC Rule Category</th>
                  <th className="p-3.5">Physical Presence Requirement</th>
                  <th className="p-3.5">Additional Prerequisites</th>
                  <th className="p-3.5 rounded-tr-xl">TRC Certificate Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className={is183DayPass ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Standard Physical Presence</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">183 Days or More</td>
                  <td className="p-3.5">None (Automatic TRC Eligibility)</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Full Domestic & DTT TRC ✅</td>
                </tr>
                <tr className={is90DayPass && !is183DayPass ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Substantial Ties Rule</td>
                  <td className="p-3.5 font-mono text-gold-600 font-bold">90 to 182 Days</td>
                  <td className="p-3.5">Valid EID + Permanent Home (Ejari)</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Domestic Tax Residency TRC ✅</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Non-Resident Status</td>
                  <td className="p-3.5 font-mono text-rose-600">Under 90 Days</td>
                  <td className="p-3.5">N/A</td>
                  <td className="p-3.5 text-rose-600 font-bold">Ineligible for TRC ❌</td>
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
              Frequently Asked Questions (UAE Tax Residency)
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
              <Shield size={16} /> ADVAQ FTA Tax Residency Specialist
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Obtain Your UAE Tax Residency Certificate (TRC)
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our FTA agents compile your GDRFA travel history, Ejari tenancy contract, and bank statements to secure your official Tax Residency Certificate from the Ministry of Finance / FTA.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Apply for UAE TRC with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp TRC Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
