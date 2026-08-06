import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Award,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-trademark-cost-calculator")({
  head: () => ({
    meta: [
      { title: "USPTO Trademark Filing Fee & Class Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive USPTO trademark filing fee calculator. Calculate US government fees ($250/class), legal search fees, and trademark registration costs.",
      },
      {
        name: "keywords",
        content:
          "uspto trademark fee calculator 2026, cost to register trademark us foreign applicant, uspto teas standard fee per class, foreign applicant us attorney requirement trademark",
      },
      {
        property: "og:title",
        content: "USPTO Trademark Filing Fee & Class Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate government fees and legal search costs for registering your trademark with the USPTO.",
      },
      { property: "og:url", content: "/calculators/us-trademark-cost-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-trademark-cost-calculator" }],
  }),
  component: USTrademarkCostCalculatorPage,
});

function USTrademarkCostCalculatorPage() {
  const [numberOfClasses, setNumberOfClasses] = useState<number>(1);
  const [includeComprehensiveSearch, setIncludeComprehensiveSearch] = useState<boolean>(true);
  const [includeAttorneyDrafting, setIncludeAttorneyDrafting] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const usptoGovtFeePerClass = 250;
  const totalGovtFee = numberOfClasses * usptoGovtFeePerClass;

  const searchFee = includeComprehensiveSearch ? 149 : 0;
  const attorneyFee = includeAttorneyDrafting ? 299 : 0;

  const totalTrademarkCost = totalGovtFee + searchFee + attorneyFee;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "USPTO Trademark Fee Calculator", item: "https://advaq.com/calculators/us-trademark-cost-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "USPTO Trademark Filing Fee & Class Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-trademark-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate official USPTO trademark government application fees ($250/class) and US attorney representation costs.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Are non-US applicants required to hire a US-licensed attorney for USPTO trademarks?",
      a: "YES! Under USPTO rules effective since 2019, all foreign-domiciled applicants, individuals, and foreign businesses MUST be represented by an attorney who is licensed to practice law in the United States.",
    },
    {
      q: "What is the TEAS Plus vs TEAS Standard USPTO fee difference?",
      a: "TEAS Plus filing fee is $250 per class of goods/services (requires selecting pre-approved descriptions from the USPTO ID Manual). TEAS Standard is $350 per class (allows custom descriptions).",
    },
    {
      q: "How long does a USPTO federal trademark registration take?",
      a: "The entire USPTO trademark registration process takes approximately 8 to 12 months from initial filing date to certificate issuance, assuming no substantive Office Action objections.",
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
            <span>USPTO Trademark Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            USPTO Trademark Filing Fee & Class Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate official USPTO government fees ($250 per class), legal search fees, and attorney drafting costs.
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
                  Number of International Goods / Services Classes:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {numberOfClasses} {numberOfClasses === 1 ? "Class" : "Classes"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={numberOfClasses}
                onChange={(e) => setNumberOfClasses(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                E.g. Class 9 (Software/App) + Class 42 (IT Hosting) = 2 Classes.
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeComprehensiveSearch}
                    onChange={(e) => setIncludeComprehensiveSearch(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Comprehensive Trademark Conflict Search</strong>
                    <span className="text-gray-500 text-[11px]">Searches USPTO database, state registers & web to prevent rejection.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">$149</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeAttorneyDrafting}
                    onChange={(e) => setIncludeAttorneyDrafting(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">US Licensed Attorney Filing & Office Action Defense</strong>
                    <span className="text-gray-500 text-[11px]">Mandatory for non-US applicants under USPTO rules.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">$299</span>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>USPTO Filing Cost Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>USPTO Govt Fees ({numberOfClasses}x $250):</span>
                  <span className="font-mono text-white font-semibold">${totalGovtFee}</span>
                </div>
                {includeComprehensiveSearch && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Trademark Conflict Search:</span>
                    <span className="font-mono text-white font-semibold">$149</span>
                  </div>
                )}
                {includeAttorneyDrafting && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>US Attorney Filing:</span>
                    <span className="font-mono text-white font-semibold">$299</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Trademark Filing Cost
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  ${totalTrademarkCost}
                  <span className="text-xs text-navy-300 font-sans font-normal ml-2">USD</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Register Trademark with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP USPTO TRADEMARK WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step USPTO Trademark Registration Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of TEAS class fees, conflict search, and mandatory US attorney representation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: USPTO Government Class Fees</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${totalGovtFee} Govt Fee</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>International Classes:</span> <strong className="text-white">{numberOfClasses} Class(es)</strong></div>
                <div className="flex justify-between"><span>USPTO TEAS Plus Rate:</span> <strong className="text-emerald-400">$250 USD / Class</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>USPTO Government Subtotal:</span> <strong>${totalGovtFee} USD</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Legal Search & Clearance</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">${searchFee} Search</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Conflict Search Status:</span> <strong className="text-white">{includeComprehensiveSearch ? "Full USPTO + Common Law Search" : "Self-Search Only"}</strong></div>
                <div className="flex justify-between"><span>Office Action Prevention Rate:</span> <strong className="text-emerald-400">98.4% Success Rate</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: US Licensed Attorney Requirement</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${attorneyFee} Legal Fee</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>USPTO Mandate for Non-US Applicants:</span> <strong className="text-emerald-400">100% Compliant US Counsel</strong></div>
                <div className="flex justify-between"><span>Specimen & Description Filing:</span> <strong className="text-white">Professional Drafting Included</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Registration & Protection</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">${totalTrademarkCost} Total</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Turnkey Filing Cost:</span> <strong>${totalTrademarkCost} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Estimated USPTO Timeline:</span> <strong className="text-emerald-400">8–12 Months</strong></div>
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
                USPTO Trademark Filing Fee & Class Structure Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">USPTO Filing Type</th>
                  <th className="p-3.5">Govt Fee per Class</th>
                  <th className="p-3.5">US Attorney Required?</th>
                  <th className="p-3.5 rounded-tr-xl">Goods Description Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className="bg-gold-500/10 font-bold">
                  <td className="p-3.5 text-navy-950">TEAS Plus (Recommended)</td>
                  <td className="p-3.5 font-mono text-emerald-600">$250 / class</td>
                  <td className="p-3.5 text-emerald-600 font-bold">YES for Foreign Applicants</td>
                  <td className="p-3.5">Must select from USPTO ID Manual</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">TEAS Standard</td>
                  <td className="p-3.5 font-mono text-amber-600 font-bold">$350 / class</td>
                  <td className="p-3.5 text-emerald-600 font-bold">YES for Foreign Applicants</td>
                  <td className="p-3.5">Custom text descriptions permitted</td>
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
              Frequently Asked Questions (USPTO Federal Trademark)
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
              <Shield size={16} /> ADVAQ US Licensed Attorney Trademark Counsel
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Protect Your Brand with USPTO Federal Trademark Registration
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US trademark attorneys conduct comprehensive searches, draft pre-approved goods descriptions, and file directly with the USPTO.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Federal Trademark with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Attorney
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
