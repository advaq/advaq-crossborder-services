import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  AlertTriangle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-corporation-tax-calculator")({
  head: () => ({
    meta: [
      { title: "UK Corporation Tax & Marginal Relief Calculator (2026/2027) | CT600 Estimator | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Corporation Tax calculator for 2026/2027. Calculate 19% Small Profits Rate, 25% Main Rate, Marginal Relief formula (3/200), associated companies limit, and CT600 payment deadlines.",
      },
      {
        name: "keywords",
        content:
          "uk corporation tax calculator 2026 2027, marginal relief calculator uk corporation tax 19 25, associated companies corporation tax limit, ct600 tax estimator uk ltd",
      },
      {
        property: "og:title",
        content: "UK Corporation Tax & Marginal Relief Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate Corporation Tax and Marginal Relief for UK Limited Companies under 2026 HMRC tax rules.",
      },
      { property: "og:url", content: "/calculators/uk-corporation-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-corporation-tax-calculator" }],
  }),
  component: UKCorporationTaxCalculatorPage,
});

function UKCorporationTaxCalculatorPage() {
  const [taxableProfit, setTaxableProfit] = useState<number>(120000);
  const [associatedCompanies, setAssociatedCompanies] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const n = associatedCompanies;
  const lowerLimit = 50000 / n;
  const upperLimit = 250000 / n;
  const fraction = 3 / 200;

  let corporationTax = 0;
  let marginalRelief = 0;
  let effectiveRate = 19;

  if (taxableProfit <= lowerLimit) {
    corporationTax = taxableProfit * 0.19;
    effectiveRate = 19;
  } else if (taxableProfit >= upperLimit) {
    corporationTax = taxableProfit * 0.25;
    effectiveRate = 25;
  } else {
    const fullTaxAt25 = taxableProfit * 0.25;
    marginalRelief = (upperLimit - taxableProfit) * fraction;
    corporationTax = fullTaxAt25 - marginalRelief;
    effectiveRate = (corporationTax / taxableProfit) * 100;
  }

  const profitAfterTax = taxableProfit - corporationTax;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Corporation Tax & Marginal Relief Calculator", item: "https://advaq.com/calculators/uk-corporation-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Corporation Tax & Marginal Relief Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-corporation-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Corporation Tax CT600 liability, 19% vs 25% rates, Marginal Relief discount, and associated companies limits.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What are the UK Corporation Tax rates for the 2026/2027 tax year?",
      a: "UK Corporation Tax has two main rates: the Small Profits Rate of 19% for taxable profits up to £50,000, and the Main Rate of 25% for taxable profits over £250,000. Companies with taxable profits between £50,000 and £250,000 pay tax at 25% reduced by Marginal Relief.",
    },
    {
      q: "How is UK Corporation Tax Marginal Relief calculated?",
      a: "Marginal Relief reduces the Corporation Tax rate for companies earning between £50,000 and £250,000. The formula is: Marginal Relief = (Upper Limit - Taxable Profit) × Marginal Relief Fraction (3/200). This discount is subtracted from tax calculated at the 25% main rate.",
    },
    {
      q: "How do Associated Companies affect Corporation Tax profit thresholds?",
      a: "If a company has associated companies under common control, the lower threshold (£50,000) and upper threshold (£250,000) are divided equally among the associated companies. For example, if you control 2 companies, the 19% Small Profits Rate threshold drops to £25,000 for each company.",
    },
    {
      q: "When is UK Corporation Tax due to HMRC?",
      a: "For small and medium-sized UK companies (profits under £1.5 million), Corporation Tax must be paid to HMRC 9 months and 1 day after the end of your company's accounting period. The CT600 company tax return itself must be filed within 12 months of the period end.",
    },
    {
      q: "What expenses can be deducted to reduce Corporation Tax?",
      a: "Allowable deductions include director salaries (£12,570), employer SIPP pension contributions, business travel, software subscriptions, office costs, accountancy fees, and Capital Allowances (including 100% Full Expensing on qualifying plant and machinery).",
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
            <span>UK Corporation Tax & Marginal Relief</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Corporation Tax & Marginal Relief Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your CT600 liability across the 19% Small Profits Rate, 25% Main Rate, and exact Marginal Relief bracket.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Taxable Company Profit (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{taxableProfit.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="400000"
                step="5000"
                value={taxableProfit}
                onChange={(e) => setTaxableProfit(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>£50k (19% Rate)</span>
                <span>£150k (Marginal Relief)</span>
                <span>£250k+ (25% Rate)</span>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Number of Associated Companies (including this one):
              </label>
              <div className="grid grid-cols-4 gap-2 text-xs">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setAssociatedCompanies(num)}
                    className={`p-3 rounded-xl border text-center font-bold transition-all ${
                      associatedCompanies === num
                        ? "bg-navy-950 text-white border-gold-500 shadow-md"
                        : "bg-white text-gray-800 border-border"
                    }`}
                  >
                    {num} Company{num > 1 ? "s" : ""}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-gray-500 block mt-2">
                Adjusts lower threshold to £{(50000 / associatedCompanies).toLocaleString()} & upper threshold to £{(250000 / associatedCompanies).toLocaleString()}.
              </span>
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Corporation Tax Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Taxable Profit:</span>
                  <span className="font-mono text-white font-semibold">£{taxableProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Full Tax at 25%:</span>
                  <span className="font-mono text-white">£{Math.round(taxableProfit * 0.25).toLocaleString()}</span>
                </div>
                {marginalRelief > 0 && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Marginal Relief Discount (3/200):</span>
                    <span className="font-mono text-emerald-400 font-semibold">-£{Math.round(marginalRelief).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective Tax Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">{effectiveRate.toFixed(2)}%</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Net Corporation Tax Due (CT600)
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(corporationTax).toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>Retained Profit After CT:</span>
                  <strong className="text-emerald-400 font-mono">£{Math.round(profitAfterTax).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/corporation-tax-return"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File CT600 Return with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP CORPORATION TAX WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Corporation Tax Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of how HMRC calculates your CT600 liability based on your selected inputs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Profit & Company Limits</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{associatedCompanies} Associated Co{associatedCompanies > 1 ? "s" : ""}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Taxable Profit:</span> <strong className="text-white">£{taxableProfit.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Small Profits Threshold (19%):</span> <strong className="text-emerald-400">£{lowerLimit.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Main Rate Threshold (25%):</span> <strong className="text-red-400">£{upperLimit.toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Limits are divided by {associatedCompanies} associated company structure.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Tax Bracket Determination</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                  {taxableProfit <= lowerLimit ? "Small Profits Rate" : taxableProfit >= upperLimit ? "Main Rate" : "Marginal Relief Bracket"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Active Rate Mechanism:</span> <strong className="text-gold-400">{taxableProfit <= lowerLimit ? "19% Flat" : taxableProfit >= upperLimit ? "25% Flat" : "25% Minus Marginal Relief"}</strong></div>
                <div className="flex justify-between"><span>Effective Rate Charged:</span> <strong className="text-white">{effectiveRate.toFixed(2)}%</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Profits between £{lowerLimit.toLocaleString()} & £{upperLimit.toLocaleString()} qualify for Marginal Relief.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Marginal Relief Formula</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">3/200 Fraction</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Full Main Rate Tax (25%):</span> <strong className="text-white">£{Math.round(taxableProfit * 0.25).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Upper Limit Gap:</span> <strong className="text-navy-300">£{Math.max(0, upperLimit - taxableProfit).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Marginal Relief Discount:</span> <strong>-£{Math.round(marginalRelief).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Formula: ({upperLimit.toLocaleString()} - {taxableProfit.toLocaleString()}) × 3/200.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final CT600 Tax & Retained Earnings</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Tax Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400"><span>Net CT600 Tax Due:</span> <strong>£{Math.round(corporationTax).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Profit Retained in LTD:</span> <strong>£{Math.round(profitAfterTax).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Payment due 9 months and 1 day after company accounting year end.
              </p>
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
                UK Corporation Tax Rates & Thresholds (2026/2027)
              </h2>
              <p className="text-xs text-gray-600">
                Official HMRC Corporation Tax rates, Marginal Relief fraction, and payment deadlines.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Profit Bracket</th>
                  <th className="p-3.5">Taxable Profit Range</th>
                  <th className="p-3.5">Headline CT Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Marginal Relief Formula</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Small Profits Rate</td>
                  <td className="p-3.5 font-mono">Profits up to £50,000</td>
                  <td className="p-3.5 font-bold text-emerald-600">19%</td>
                  <td className="p-3.5 text-gray-600">No Marginal Relief needed (Flat 19%)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Marginal Relief Band</td>
                  <td className="p-3.5 font-mono">£50,001 – £250,000</td>
                  <td className="p-3.5 font-semibold text-gold-600">19% to 25% Effective</td>
                  <td className="p-3.5 font-mono text-navy-900">(£250,000 - Taxable Profit) × 3/200</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Main Rate</td>
                  <td className="p-3.5 font-mono">Profits over £250,000</td>
                  <td className="p-3.5 font-bold text-red-600">25%</td>
                  <td className="p-3.5 text-gray-600">Flat 25% on full taxable profits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2: COMPREHENSIVE GUIDE */}
        <section className="space-y-6">
          <div className="border-b border-border pb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Understanding UK Corporation Tax Rules & Filing
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Key insights into CT600 preparation, allowable deductions, capital allowances, and deadlines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-950">How Marginal Relief Works for UK Limited Companies</h3>
              <p>
                Under the UK tax regime introduced by HMRC, companies with profits between £50,000 and £250,000 do not pay a flat 25% tax. Instead, they receive <strong>Marginal Relief</strong>, which gradually increases their effective tax rate from 19% up to 25%.
              </p>
              <p>
                The formula applies a fraction of <strong>3/200</strong> to the difference between the upper limit (£250,000) and your actual taxable profit.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-950">CT600 Payment & Filing Deadlines</h3>
              <p>
                Unlike Individual Self Assessment, Corporation Tax has a dual deadline system:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li><strong>Tax Payment Deadline:</strong> 9 months and 1 day after your accounting period ends.</li>
                <li><strong>CT600 Filing Deadline:</strong> 12 months after your accounting period ends.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (Corporation Tax)
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
              Need CT600 Preparation & Marginal Relief Tax Filing?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK chartered accountants prepare annual statutory accounts, calculate Marginal Relief, optimize capital allowances, and submit CT600 returns directly to HMRC.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/corporation-tax-return"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File CT600 with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Corporate Tax Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
