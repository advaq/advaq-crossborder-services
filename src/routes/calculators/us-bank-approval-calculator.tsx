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

export const Route = createFileRoute("/calculators/us-bank-approval-calculator")({
  head: () => ({
    meta: [
      { title: "US Business Bank Account Approval Probability Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US bank account approval checker for foreign owners. Test Mercury Bank, Relay Financial & Wise Business eligibility for non-residents.",
      },
      {
        name: "keywords",
        content:
          "mercury bank approval checker non resident us llc 2026, relay financial bank eligibility non us citizen, open us business bank account foreign owner, wise business us bank account approval",
      },
      {
        property: "og:title",
        content: "US Business Bank Account Approval Probability Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your odds of opening a US business bank account (Mercury / Relay) for foreign-owned US LLCs.",
      },
      { property: "og:url", content: "/calculators/us-bank-approval-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-bank-approval-calculator" }],
  }),
  component: USBankApprovalCalculatorPage,
});

function USBankApprovalCalculatorPage() {
  const [hasPassport, setHasPassport] = useState<boolean>(true);
  const [hasEIN, setHasEIN] = useState<boolean>(true);
  const [hasUSPhysicalAddress, setHasUSPhysicalAddress] = useState<boolean>(true);
  const [hasProofOfAddress, setHasProofOfAddress] = useState<boolean>(true);
  const [businessType, setBusinessType] = useState<string>("saas");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let score = 30;
  if (hasPassport) score += 25;
  if (hasEIN) score += 20;
  if (hasUSPhysicalAddress) score += 15;
  if (hasProofOfAddress) score += 10;

  if (businessType === "saas" || businessType === "agency") score += 5;
  else if (businessType === "crypto") score -= 25;

  score = Math.min(99, Math.max(10, score));

  let bankRec = "Mercury Bank & Relay Financial";
  if (score > 80) bankRec = "Mercury Bank, Relay Financial & Wise Business";
  else if (score > 60) bankRec = "Relay Financial & Wise Business";
  else bankRec = "Specialized Non-Resident Bank Assistance Required";

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US Bank Approval Checker", item: "https://advaq.com/calculators/us-bank-approval-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Business Bank Account Approval Probability Checker (2026/2027)",
    url: "https://advaq.com/calculators/us-bank-approval-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check non-resident approval odds for Mercury Bank, Relay Financial, and Wise Business accounts for foreign-owned US LLCs.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Can non-US residents open a US business bank account remotely without traveling?",
      a: "Yes! Fintech banking partners like Mercury Bank and Relay Financial allow 100% online application for foreign-owned US LLCs using an international passport, approved Articles of Organization, and IRS EIN letter.",
    },
    {
      q: "Why do Mercury Bank applications get rejected for foreign LLC founders?",
      a: "Common reasons for rejection include: submitting incomplete website/social proof, using blacklisted virtual address providers, submitting blurry passport scans, or operating high-risk industries (crypto/forex/gambling).",
    },
    {
      q: "What documents are required to open a Mercury Bank account?",
      a: "You need: 1) Approved State Articles of Organization, 2) IRS EIN Confirmation Letter (CP575 or 147C), 3) Valid International Passport of all 25%+ owners, and 4) Live website or active business contract proof.",
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
            <span>US Bank Approval Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Mercury & Relay Bank Account Eligibility Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check your approval probability for Mercury Bank, Relay Financial, and Wise Business as a foreign-owned US LLC.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Business Type:
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="saas">SaaS, Software & Digital Products</option>
                <option value="agency">Digital Marketing & Consulting Agency</option>
                <option value="ecommerce">E-Commerce & Amazon/Stripe Store</option>
                <option value="crypto">Crypto, Forex or Financial Services</option>
              </select>
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasPassport}
                  onChange={(e) => setHasPassport(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Valid International Passport Available?</strong>
                  <span className="text-gray-500">Required for biometric selfie check.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasEIN}
                  onChange={(e) => setHasEIN(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Official IRS EIN CP575 / 147C Letter Installed?</strong>
                  <span className="text-gray-500">Federal Tax ID confirmation letter.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasUSPhysicalAddress}
                  onChange={(e) => setHasUSPhysicalAddress(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">US Business Address & Mail Forwarding Ready?</strong>
                  <span className="text-gray-500">Required for Mercury compliance verification.</span>
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
                  <strong className="text-navy-950 block">Utility Bill / Home Address Proof (Last 90 Days)?</strong>
                  <span className="text-gray-500">Proof of residential address abroad.</span>
                </div>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>US Bank Approval Score</span>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Approval Odds
                </span>
                <div className="text-5xl font-serif font-bold text-white my-2">
                  {score}%
                </div>
                <div className="text-xs text-navy-200">
                  Recommended Platforms: <strong className="text-gold-400 block mt-1 font-sans">{bankRec}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/mercury-bank-guide"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Open US Bank Account with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US BANK APPROVAL WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Bank Approval Odds Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your non-resident Mercury Bank and Relay Financial underwriting criteria.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Core ID & Tax Verification</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${hasPassport && hasEIN ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {hasPassport && hasEIN ? "Core ID Pass ✅" : "Incomplete Docs ⚠️"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Biometric Passport:</span> <strong className={hasPassport ? "text-emerald-400" : "text-amber-400"}>{hasPassport ? "Verified (+25%)" : "Missing"}</strong></div>
                <div className="flex justify-between"><span>IRS EIN Tax ID Letter:</span> <strong className={hasEIN ? "text-emerald-400" : "text-amber-400"}>{hasEIN ? "Verified (+20%)" : "Missing"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: US Address & Residential Proof</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${hasUSPhysicalAddress && hasProofOfAddress ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {hasUSPhysicalAddress && hasProofOfAddress ? "Address Pass ✅" : "Address Risk ⚠️"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>US Commercial Address:</span> <strong className={hasUSPhysicalAddress ? "text-emerald-400" : "text-amber-400"}>{hasUSPhysicalAddress ? "Verified (+15%)" : "Missing"}</strong></div>
                <div className="flex justify-between"><span>Residential Proof (Utility):</span> <strong className={hasProofOfAddress ? "text-emerald-400" : "text-amber-400"}>{hasProofOfAddress ? "Verified (+10%)" : "Missing"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Industry Underwriting Risk</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${businessType !== "crypto" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {businessType !== "crypto" ? "Low Risk Sector ✅" : "High Risk Sector ⚠️"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Industry Sector:</span> <strong className="text-white">{businessType.toUpperCase()}</strong></div>
                <div className="flex justify-between"><span>Fintech Risk Score Impact:</span> <strong className={businessType === "crypto" ? "text-red-400" : "text-emerald-400"}>{businessType === "crypto" ? "-25% Restricted" : "+5% Low Risk Pass"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Bank Score & Target</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{score}% Score</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Approval Score:</span> <strong>{score}%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Target Fintech Banks:</span> <strong className="text-emerald-400">{bankRec}</strong></div>
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
                US Non-Resident Business Bank Account Comparison (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">US Banking Platform</th>
                  <th className="p-3.5">Non-Resident Remote Opening</th>
                  <th className="p-3.5">Monthly Service Fee</th>
                  <th className="p-3.5 rounded-tr-xl">Key Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Mercury Bank</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">100% Online (No SSN) ✅</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">$0 / month</td>
                  <td className="p-3.5">Active Website / Contract Proof</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Relay Financial</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">100% Online (No SSN) ✅</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">$0 / month</td>
                  <td className="p-3.5">Passport & IRS EIN CP575</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Wise Business</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">100% Online (No SSN) ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">$0 / month ($31 one-time fee)</td>
                  <td className="p-3.5">Passport & Utility Bill</td>
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
              Frequently Asked Questions (US Business Banking)
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
              <Shield size={16} /> ADVAQ US Business Banking Concierge
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Guaranteed US Business Banking Support for Non-Residents
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our banking specialists review your application documents, format your website proof, and assist with Mercury & Relay application approval.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/mercury-bank-guide"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Open US Bank Account with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp US Bank Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
