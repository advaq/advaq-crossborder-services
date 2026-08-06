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
  Shield,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-capital-gains-tax-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan FBR Capital Gains Tax (CGT) Calculator (2026/2027) | Sec 37 & 37A | ADVAQ" },
      {
        name: "description",
        content:
          "Calculate FBR Section 37 property capital gains tax and Section 37A stocks/mutual funds CGT rates for ATL Filers vs Non-Filers.",
      },
      {
        name: "keywords",
        content:
          "pakistan capital gains tax calculator 2026, fbr section 37 cgt property holding period, cgt shares mutual funds PSX fbr rates, section 37a capital gains tax pakistan",
      },
      {
        property: "og:title",
        content: "Pakistan FBR Capital Gains Tax (CGT) Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate Section 37 property gain tax and Section 37A securities CGT for Filers vs Non-Filers.",
      },
      { property: "og:url", content: "/calculators/pakistan-capital-gains-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-capital-gains-tax-calculator" }],
  }),
  component: PakistanCGTCalculatorPage,
});

function PakistanCGTCalculatorPage() {
  const [gainAmount, setGainAmount] = useState<number>(2000000);
  const [holdingPeriodMonths, setHoldingPeriodMonths] = useState<number>(18);
  const [assetType, setAssetType] = useState<"property" | "securities">("property");
  const [isFiler, setIsFiler] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let cgtRate = 0;
  if (assetType === "property") {
    if (isFiler) {
      if (holdingPeriodMonths <= 12) cgtRate = 15;
      else if (holdingPeriodMonths <= 24) cgtRate = 12.5;
      else if (holdingPeriodMonths <= 36) cgtRate = 10;
      else cgtRate = 0;
    } else {
      if (holdingPeriodMonths <= 12) cgtRate = 30;
      else if (holdingPeriodMonths <= 24) cgtRate = 25;
      else if (holdingPeriodMonths <= 36) cgtRate = 20;
      else cgtRate = 15;
    }
  } else {
    if (isFiler) {
      cgtRate = holdingPeriodMonths <= 12 ? 15 : 12.5;
    } else {
      cgtRate = 30;
    }
  }

  const estimatedTax = (gainAmount * cgtRate) / 100;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan Capital Gains Tax Calculator", item: "https://advaq.com/calculators/pakistan-capital-gains-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan FBR Capital Gains Tax (CGT) Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-capital-gains-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate FBR Section 37 immovable property capital gains tax and Section 37A securities/stocks CGT rates for Filers vs Non-Filers.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is Section 37 Immovable Property Capital Gains Tax (CGT)?",
      a: "Under Section 37 of the Income Tax Ordinance 2001, profit made from selling real estate in Pakistan is subject to Capital Gains Tax. For Filers, CGT rates range from 15% (holding period up to 1 year) down to 0% (holding period exceeding 3 years).",
    },
    {
      q: "What is Section 37A Capital Gains Tax on Securities and Stocks?",
      a: "Section 37A taxes capital gains from the sale of shares in public companies listed on the Pakistan Stock Exchange (PSX), mutual fund units, and debt securities. NCCPL automatically calculates and deducts CGT at source.",
    },
    {
      q: "How does ATL Filer status reduce Capital Gains Tax?",
      a: "Active Taxpayers (Filers) pay half the CGT rate of Non-Filers. For example, property sold within 1 year incurs a 15% CGT for Filers versus a 30% CGT penalty rate for Non-Filers.",
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
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span className="text-gray-300">Capital Gains Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan FBR Capital Gains Tax (CGT) Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 37 property gain tax and Section 37A securities CGT for Filers vs Non-Filers under Finance Act 2026 rules.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <h2 className="font-serif text-lg font-bold text-navy-950">Asset & Holding Inputs</h2>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Asset Category</label>
              <select
                value={assetType}
                onChange={(e) => setAssetType(e.target.value as "property" | "securities")}
                className="w-full bg-white border border-border rounded-lg p-3 text-sm font-medium"
              >
                <option value="property">Immovable Property (Plot / House / Commercial)</option>
                <option value="securities">Securities (PSX Shares / Mutual Funds)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Net Capital Gain (PKR)</label>
              <input
                type="number"
                value={gainAmount}
                onChange={(e) => setGainAmount(Number(e.target.value))}
                className="w-full bg-white border border-border rounded-lg p-3 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Holding Period (Months)</label>
              <input
                type="number"
                value={holdingPeriodMonths}
                onChange={(e) => setHoldingPeriodMonths(Number(e.target.value))}
                className="w-full bg-white border border-border rounded-lg p-3 text-sm font-medium"
              />
            </div>

            <div className="flex items-center justify-between bg-white border border-border p-3.5 rounded-lg">
              <div>
                <span className="text-xs font-semibold block text-navy-950">Active Taxpayer (ATL Filer) Status?</span>
                <span className="text-[11px] text-gray-500">Filers save up to 50% on CGT rates</span>
              </div>
              <input
                type="checkbox"
                checked={isFiler}
                onChange={(e) => setIsFiler(e.target.checked)}
                className="w-5 h-5 accent-gold-500 shrink-0 ml-4 cursor-pointer"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Calculation Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Applicable CGT Rate:</span>
                  <span className="font-mono text-gold-400 font-bold">{cgtRate}%</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Filer Status Discount:</span>
                  <span className="font-semibold text-emerald-400">{isFiler ? "Yes (Reduced Rate)" : "No (Standard Surcharge Rate)"}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Capital Gains Tax
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  PKR {Math.round(estimatedTax).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Get FBR Tax & CGT Advice
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
                Live Step-by-Step Capital Gains Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of Income Tax Ordinance Section 37 / 37A holding period tax rates for PKR {gainAmount.toLocaleString()} gain.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Capital Gain Calculation</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Net Gain</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Total Capital Gain:</span> <strong className="text-white">PKR {gainAmount.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Holding Duration:</span> <strong className="text-white">{holdingPeriodMonths} Months</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Total Net Gain:</span> <strong>PKR {gainAmount.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Holding Period & Asset</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Statutory Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Asset Type:</span> <strong className="text-emerald-400 uppercase">{assetType}</strong></div>
                <div className="flex justify-between"><span>Holding Period:</span> <strong className="text-white">{(holdingPeriodMonths / 12).toFixed(1)} Years</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Statutory CGT Rate:</span> <strong>{cgtRate}%</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Filer Status Audit</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">ATL Status</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Active Filer:</span> <strong className={isFiler ? "text-emerald-400" : "text-red-400"}>{isFiler ? "YES (Reduced Rate)" : "NO (Non-Filer Surcharge)"}</strong></div>
                <div className="flex justify-between"><span>Non-Filer Surcharge:</span> <strong className="text-white">{isFiler ? "0%" : "Higher Rates Apply"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Effective CGT:</span> <strong>{cgtRate}%</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final CGT Payable</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">FBR Payable</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Net Gain Amount:</span> <strong className="text-white">PKR {gainAmount.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Tax Rate:</span> <strong className="text-white">{cgtRate}%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Total CGT Payable:</span> <strong>PKR {Math.round(estimatedTax).toLocaleString()}</strong></div>
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
                Pakistan Property Capital Gains Tax (Section 37) Slabs
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Holding Period</th>
                  <th className="p-3.5">Filer CGT Rate</th>
                  <th className="p-3.5">Non-Filer CGT Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Tax Exemption</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Up to 1 Year (0 – 12 Months)</td>
                  <td className="p-3.5 font-bold text-amber-600">15% CGT</td>
                  <td className="p-3.5 font-bold text-red-600">30% CGT</td>
                  <td className="p-3.5 font-mono">No Exemption</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">1 to 2 Years (13 – 24 Months)</td>
                  <td className="p-3.5 font-bold text-emerald-600">12.5% CGT</td>
                  <td className="p-3.5 font-bold text-red-600">25% CGT</td>
                  <td className="p-3.5 font-mono">Partial Tax Reduction</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Exceeding 3 Years (36+ Months)</td>
                  <td className="p-3.5 font-bold text-emerald-600">0% (100% Tax Free)</td>
                  <td className="p-3.5 font-bold text-red-600">15% CGT</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">100% Exempt for Filers</td>
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
              Frequently Asked Questions (Capital Gains Tax)
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
              Explore Related Pakistan Real Estate & Tax Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Property WHT
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Property Transfer Tax Calculator (236K & 236C)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Section 236K buyer WHT (3% vs 10.5%) and Section 236C seller WHT.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-property-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Rental Income
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Section 15 Rental Income Tax Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate FBR Section 15 tax on property rent and tenant withholding tax deductions.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-rental-income-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Filer Savings
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Pakistan Filer Tax Savings Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate money saved on property, vehicles & bank cash transfers by becoming an ATL Filer.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-filer-vs-non-filer-tax-calculator"
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
              <Shield size={16} /> ADVAQ Registered Tax Advocates & Legal Advisors
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Optimize Capital Gains Tax on Property & Securities
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan tax legal team handles capital gains tax filing under Section 37, reconciles NCCPL securities statements, and provides Section 7E exemption legal opinions.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Book CGT Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
