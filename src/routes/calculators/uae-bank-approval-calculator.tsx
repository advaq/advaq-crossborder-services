import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Sparkles,
  Building2,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-bank-approval-calculator")({
  head: () => ({
    meta: [
      { title: "Dubai Corporate Bank Account Approval Probability Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Dubai corporate bank account approval checker. Test Wio Bank, Mashreq NeoBiz & Emirates NBD approval odds for freezone & mainland companies.",
      },
      {
        name: "keywords",
        content:
          "wio bank approval checker dubai 2026, open corporate bank account dubai freezone non resident, mashreq neobiz approval eligibility uae, emirates nbd business account requirements",
      },
      {
        property: "og:title",
        content: "Dubai Corporate Bank Account Approval Probability Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your odds of opening a Dubai business bank account (Wio / Mashreq / Emirates NBD).",
      },
      { property: "og:url", content: "/calculators/uae-bank-approval-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-bank-approval-calculator" }],
  }),
  component: UAEBankApprovalCalculatorPage,
});

function UAEBankApprovalCalculatorPage() {
  const [hasEmiratesId, setHasEmiratesId] = useState<boolean>(true);
  const [hasEjariOffice, setHasEjariOffice] = useState<boolean>(false);
  const [minMonthlyBalanceAED, setMinMonthlyBalanceAED] = useState<number>(25000);
  const [businessActivity, setBusinessActivity] = useState<string>("it-consulting");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let score = 30;
  if (hasEmiratesId) score += 30;
  if (hasEjariOffice) score += 20;

  if (minMonthlyBalanceAED >= 50000) score += 15;
  else if (minMonthlyBalanceAED >= 10000) score += 10;

  if (businessActivity === "it-consulting" || businessActivity === "marketing") score += 5;
  else if (businessActivity === "crypto" || businessActivity === "trading") score -= 20;

  score = Math.min(99, Math.max(10, score));

  let bankRec = "Wio Business & Mashreq NeoBiz";
  if (score > 80) bankRec = "Wio Business, Mashreq NeoBiz & Emirates NBD";
  else if (score > 60) bankRec = "Wio Business & RAKBANK Digital";
  else bankRec = "Specialized UAE Corporate Banking Assistance Required";

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "Dubai Bank Approval Checker", item: "https://advaq.com/calculators/uae-bank-approval-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dubai Corporate Bank Account Approval Probability Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-bank-approval-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check corporate banking approval odds for Wio Bank, Mashreq NeoBiz, Emirates NBD, and RAKBANK for UAE Freezone & Mainland entities.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Which UAE bank is easiest for digital onboarding and non-resident founders?",
      a: "Wio Bank is currently the fastest and most accessible digital corporate bank in the UAE. Onboarding takes 1 to 3 business days via the Wio app, with no physical branch visit required if the founder holds a valid Emirates ID.",
    },
    {
      q: "Is an Emirates ID mandatory to open a business bank account in Dubai?",
      a: "YES! For digital banks like Wio and Mashreq NeoBiz, the primary signatory MUST hold a valid UAE Residence Visa and Emirates ID. For non-resident high-street banking (e.g. Emirates NBD), physical presence and minimum balance requirements of AED 50,000+ apply.",
    },
    {
      q: "What documents do UAE banks require for corporate account opening?",
      a: "Required documents include: Valid UAE Trade License, Memorandum of Association (MOA), Certificate of Formation, Passport copy, Emirates ID, 6-month personal/corporate bank statements, and proof of address.",
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
            <span>Dubai Bank Approval Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Dubai Corporate Bank Account Approval Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check your approval probability for Wio Bank, Mashreq NeoBiz, Emirates NBD, and RAKBANK for Freezone & Mainland companies.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Business Activity:
              </label>
              <select
                value={businessActivity}
                onChange={(e) => setBusinessActivity(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="it-consulting">Software, Tech & IT Consultancy</option>
                <option value="marketing">Digital Marketing & Media Agency</option>
                <option value="trading">General Trading & Physical Goods</option>
                <option value="crypto">Crypto, Gaming or Financial Trading</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. Planned Minimum Monthly Balance (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {minMonthlyBalanceAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={minMonthlyBalanceAED}
                onChange={(e) => setMinMonthlyBalanceAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasEmiratesId}
                  onChange={(e) => setHasEmiratesId(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">UAE Residence Visa & Emirates ID Stamped?</strong>
                  <span className="text-gray-500">Crucial for UAE compliance KYC.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasEjariOffice}
                  onChange={(e) => setHasEjariOffice(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Physical Office Space with Ejari Tenancy?</strong>
                  <span className="text-gray-500">Improves traditional bank approval (Emirates NBD / FAB).</span>
                </div>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Dubai Bank Approval Odds</span>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Approval Odds
                </span>
                <div className="text-5xl font-serif font-bold text-white my-2">
                  {score}%
                </div>
                <div className="text-xs text-navy-200">
                  Recommended Banks: <strong className="text-gold-400 block mt-1 font-sans">{bankRec}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uae-services/business-bank-account-guide"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Open UAE Bank Account with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP BANK APPROVAL AUDIT */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Corporate Bank Approval Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of UAE Central Bank KYC scoring, Emirates ID validation, and office proof.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Activity Risk & Compliance Weight</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Risk Tiering</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Selected Commercial Activity:</span> <strong className="text-white">{businessActivity.toUpperCase()}</strong></div>
                <div className="flex justify-between"><span>Activity Risk Rating:</span> <strong className="text-emerald-400">{businessActivity === "crypto" || businessActivity === "trading" ? "High Risk (Enhanced Due Diligence)" : "Low Risk (Standard Onboarding)"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Signatory Residency & Office Lease</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${hasEmiratesId ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {hasEmiratesId ? "EID Validated ✅" : "Non-Resident Status"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>UAE Residence Visa & EID:</span> <strong className={hasEmiratesId ? "text-emerald-400" : "text-amber-400"}>{hasEmiratesId ? "YES (+30 Points)" : "NO (Non-Resident)"}</strong></div>
                <div className="flex justify-between"><span>Ejari Commercial Office Space:</span> <strong className={hasEjariOffice ? "text-emerald-400" : "text-navy-300"}>{hasEjariOffice ? "YES (+20 Points)" : "Shared Flexi-Desk"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Average Balance Commitment</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED {minMonthlyBalanceAED.toLocaleString()} / mo</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Planned Monthly Account Balance:</span> <strong className="text-white">AED {minMonthlyBalanceAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Balance Score Bonus:</span> <strong className="text-emerald-400">+{minMonthlyBalanceAED >= 50000 ? "15" : minMonthlyBalanceAED >= 10000 ? "10" : "0"} Points</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Banking Match Verdict</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{score}% Score</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Score Rating:</span> <strong>{score}% Approval Odds</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Target Banking Partner:</span> <strong className="text-emerald-400">{bankRec}</strong></div>
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
                Top UAE Corporate Banking Options & Onboarding Matrix (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Bank Name</th>
                  <th className="p-3.5">Account Category</th>
                  <th className="p-3.5">Min. Monthly Balance</th>
                  <th className="p-3.5 rounded-tr-xl">Avg. Onboarding Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className="bg-gold-500/10 font-bold">
                  <td className="p-3.5 text-navy-950">Wio Business Digital Bank</td>
                  <td className="p-3.5">Digital Neobank</td>
                  <td className="p-3.5 font-mono text-emerald-600">AED 0 – AED 3,000</td>
                  <td className="p-3.5 text-emerald-600 font-bold">1–3 Business Days ✅</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Mashreq NeoBiz</td>
                  <td className="p-3.5">Digital SME Bank</td>
                  <td className="p-3.5 font-mono text-emerald-600">AED 10,000</td>
                  <td className="p-3.5 font-mono">3–7 Business Days</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Emirates NBD / FAB</td>
                  <td className="p-3.5">Traditional High-Street Bank</td>
                  <td className="p-3.5 font-mono text-amber-600">AED 50,000 – AED 200,000</td>
                  <td className="p-3.5 font-mono">2–4 Weeks</td>
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
              Frequently Asked Questions (Dubai Corporate Banking)
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
              <Shield size={16} /> ADVAQ UAE Banking Concierge
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Open Your UAE Corporate Bank Account with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our banking relationship team prepares your corporate KYC dossier, business plan profile, and manages introductions with Wio Bank, Mashreq NeoBiz, and Emirates NBD.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uae-services/business-bank-account-guide"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Get Banking Assistance <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Banking Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
