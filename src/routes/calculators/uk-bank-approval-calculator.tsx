import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  Landmark,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-bank-approval-calculator")({
  head: () => ({
    meta: [
      { title: "UK Business Bank Account Approval Probability Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK business bank account eligibility checker for 2026/2027. Test Wise Business, Tide, Revolut & High-Street Bank approval odds for overseas non-resident directors.",
      },
      {
        name: "keywords",
        content:
          "uk business bank account approval checker non resident 2026 2027, wise business account approval eligibility uk ltd, tide revolut business bank non uk resident, non resident bank account uk company",
      },
      {
        property: "og:title",
        content: "UK Business Bank Account Approval Probability Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your odds of opening a UK business bank account for foreign-owned UK Limited Companies.",
      },
      { property: "og:url", content: "/calculators/uk-bank-approval-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-bank-approval-calculator" }],
  }),
  component: UKBankApprovalCalculatorPage,
});

function UKBankApprovalCalculatorPage() {
  const [directorResidency, setDirectorResidency] = useState<string>("non-uk");
  const [hasValidPassport, setHasValidPassport] = useState<boolean>(true);
  const [hasProofOfAddress, setHasProofOfAddress] = useState<boolean>(true);
  const [hasLondonAddress, setHasLondonAddress] = useState<boolean>(true);
  const [businessActivity, setBusinessActivity] = useState<string>("tech");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let score = 30;

  if (hasValidPassport) score += 25;
  if (hasProofOfAddress) score += 25;
  if (hasLondonAddress) score += 10;

  if (businessActivity === "tech" || businessActivity === "consulting") score += 10;
  else if (businessActivity === "crypto" || businessActivity === "gambling") score -= 20;

  score = Math.min(99, Math.max(10, score));

  let bankRecommendation = "Wise Business & Revolut Business";
  if (score > 80) bankRecommendation = "Wise Business, Revolut Business & Tide Bank";
  else if (score > 60) bankRecommendation = "Wise Business & WorldFirst";
  else bankRecommendation = "Specialized Non-Resident Fintech Banking Assistance Required";

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Business Bank Account Approval Checker", item: "https://advaq.com/calculators/uk-bank-approval-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Business Bank Account Approval Probability Checker (2026/2027)",
    url: "https://advaq.com/calculators/uk-bank-approval-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check non-resident UK Limited Company business bank account approval probability across Wise Business, Revolut, Tide, and WorldFirst.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Can non-UK resident directors open a UK business bank account?",
      a: "Yes! Non-resident directors of UK Limited Companies can open multi-currency UK business accounts with fintech banking partners like Wise Business, Revolut Business, and WorldFirst without traveling to the UK.",
    },
    {
      q: "Why do traditional UK High Street Banks (Barclays, HSBC) decline non-residents?",
      a: "Traditional UK high street banks require at least one UK-resident director present in person to complete face-to-face KYC verification. Digital fintech banks like Wise verify identity remotely via biometric passport scanning.",
    },
    {
      q: "What documents are required to open a Wise Business account for a UK LTD?",
      a: "You need: 1) UK Certificate of Incorporation, 2) Memorandum & Articles of Association, 3) Valid international passport of directors/shareholders, 4) Proof of home address (utility bill/bank statement within 3 months), and 5) London registered office address.",
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
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK Bank Account Approval Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Business Bank Account Eligibility Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check your approval probability for Wise Business, Revolut, Tide, and WorldFirst as an overseas director of a UK LTD.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Director Residency:
              </label>
              <select
                value={directorResidency}
                onChange={(e) => setDirectorResidency(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="non-uk">Non-UK Resident (Overseas Founder)</option>
                <option value="uk-resident">UK Resident</option>
              </select>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                2. Primary Business Activity:
              </label>
              <select
                value={businessActivity}
                onChange={(e) => setBusinessActivity(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="tech">Software Development, SaaS & IT Services</option>
                <option value="consulting">Digital Marketing, E-commerce & Consulting</option>
                <option value="trading">International Physical Goods Import/Export</option>
                <option value="crypto">Crypto, Gaming or Financial Services</option>
              </select>
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasValidPassport}
                  onChange={(e) => setHasValidPassport(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Valid International Passport Available?</strong>
                  <span className="text-gray-500">Required for biometric identity verification.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasProofOfAddress}
                  onChange={(e) => setHasProofOfAddress(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Utility Bill / Bank Statement (Proof of Address)?</strong>
                  <span className="text-gray-500">Dated within the last 3 months.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasLondonAddress}
                  onChange={(e) => setHasLondonAddress(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Official UK Registered Office Address Installed?</strong>
                  <span className="text-gray-500">Required for UK bank compliance check.</span>
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>UK Bank Approval Odds</span>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Approval Probability
                </span>
                <div className="text-5xl font-serif font-bold text-white my-2">
                  {score}%
                </div>
                <div className="text-xs text-navy-200">
                  Recommended Banks: <strong className="text-gold-400 block mt-1 font-sans">{bankRecommendation}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Setup UK LTD & Bank Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP BANK APPROVAL WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step UK Bank Approval Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of KYC compliance factors & recommended fintech banking portals.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Director Residency & Biometrics</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{hasValidPassport ? "+25% Score" : "Passport Missing"}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Director Residency:</span> <strong className="text-white">{directorResidency === "non-uk" ? "Non-UK Resident" : "UK Resident"}</strong></div>
                <div className="flex justify-between"><span>Biometric Passport:</span> <strong className={hasValidPassport ? "text-emerald-400" : "text-red-400"}>{hasValidPassport ? "Available (Verified)" : "Missing"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Proof of Address & Registered Office</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{hasProofOfAddress && hasLondonAddress ? "Address Verified" : "Action Needed"}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Proof of Home Address:</span> <strong className={hasProofOfAddress ? "text-emerald-400" : "text-red-400"}>{hasProofOfAddress ? "Utility / Bank Doc" : "Missing"}</strong></div>
                <div className="flex justify-between"><span>London Office Address:</span> <strong className={hasLondonAddress ? "text-emerald-400" : "text-red-400"}>{hasLondonAddress ? "Installed" : "Missing"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Industry Risk Profiling</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Industry Checked</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Business Activity:</span> <strong className="text-white">{businessActivity.toUpperCase()}</strong></div>
                <div className="flex justify-between"><span>Risk Classification:</span> <strong className={businessActivity === "crypto" ? "text-red-400" : "text-emerald-400"}>{businessActivity === "crypto" ? "High Risk (-20%)" : "Low Risk (+10%)"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Verdict & Recommended Banks</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{score}% Score</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Approval Odds:</span> <strong>{score}%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Target Banking Partners:</span> <strong className="text-emerald-400">{bankRecommendation}</strong></div>
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
                UK Non-Resident Business Bank Options Comparison
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Bank / Provider</th>
                  <th className="p-3.5">Non-UK Resident Friendly?</th>
                  <th className="p-3.5">In-Person Visit Needed?</th>
                  <th className="p-3.5 rounded-tr-xl">Setup Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Wise Business</td>
                  <td className="p-3.5 text-emerald-600 font-bold">YES (100% Online) ✅</td>
                  <td className="p-3.5 text-emerald-600 font-bold">NO</td>
                  <td className="p-3.5 font-mono">24 – 48 Hours</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Revolut Business</td>
                  <td className="p-3.5 text-emerald-600 font-bold">YES (Selected Countries) ✅</td>
                  <td className="p-3.5 text-emerald-600 font-bold">NO</td>
                  <td className="p-3.5 font-mono">1 – 3 Days</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Barclays / HSBC UK</td>
                  <td className="p-3.5 text-red-600 font-bold">NO (Requires UK Resident Director)</td>
                  <td className="p-3.5 text-red-600 font-bold">YES (In-Person Visit)</td>
                  <td className="p-3.5 font-mono">4 – 8 Weeks</td>
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
              Frequently Asked Questions (Non-Resident Banking)
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
              <Shield size={16} /> ADVAQ UK Chartered Tax Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Need Guaranteed Support Opening Your UK Business Bank Account?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK non-resident formation team prepares your legal verification documents and provides step-by-step assistance for Wise Business & Revolut approvals.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Incorporate LTD & Open Bank Account <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Banking Advisor
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
