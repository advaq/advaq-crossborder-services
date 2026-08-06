import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertCircle,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-sales-tax-calculator")({
  head: () => ({
    meta: [
      { title: "US Sales Tax Economic Nexus & Registration Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US Sales Tax calculator for foreign sellers. Check $100,000 revenue or 200 transaction Economic Nexus limits across US states.",
      },
      {
        name: "keywords",
        content:
          "us sales tax economic nexus calculator 2026, foreign seller stripe shopify us sales tax threshold, state sales tax registration threshold foreign llc, South Dakota v Wayfair sales tax",
      },
      {
        property: "og:title",
        content: "US Sales Tax Economic Nexus Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate economic nexus limits across top US states for e-commerce, software, and Stripe sellers.",
      },
      { property: "og:url", content: "/calculators/us-sales-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-sales-tax-calculator" }],
  }),
  component: USSalesTaxCalculatorPage,
});

function USSalesTaxCalculatorPage() {
  const [annualUSRevenue, setAnnualUSRevenue] = useState<number>(120000);
  const [annualUSTransactions, setAnnualUSTransactions] = useState<number>(250);
  const [sellsDigitalGoods, setSellsDigitalGoods] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isNexusTriggered = annualUSRevenue >= 100000 || annualUSTransactions >= 200;

  let statesCount = 0;
  if (annualUSRevenue > 500000) statesCount = 15;
  else if (annualUSRevenue > 250000) statesCount = 8;
  else if (isNexusTriggered) statesCount = 3;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US Sales Tax Economic Nexus Calculator", item: "https://advaq.com/calculators/us-sales-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Sales Tax Economic Nexus & Registration Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-sales-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate US state sales tax economic nexus thresholds ($100,000 revenue or 200 separate transactions) for foreign e-commerce and SaaS sellers.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is Economic Nexus in the United States?",
      a: "Following the landmark 2018 Supreme Court ruling (South Dakota v. Wayfair), out-of-state and foreign sellers are required to register, collect, and remit state sales tax once their sales into a specific state cross certain financial thresholds (typically $100,000 in annual revenue or 200 transactions).",
    },
    {
      q: "Do foreign-owned LLCs selling digital software/SaaS pay state sales tax?",
      a: "It depends on the state. Many US states (such as New York, Texas, and Washington) tax SaaS and digital products, while others exempt un-downloaded cloud software. If your digital sales cross state nexus limits, you may need a state sales tax permit.",
    },
    {
      q: "How do Marketplace Facilitator Laws affect Amazon, Shopify, and Etsy sellers?",
      a: "Marketplaces like Amazon, eBay, and Etsy automatically collect and remit sales tax on behalf of sellers. However, direct Shopify or custom website sales processed via Stripe remain the seller's responsibility once economic nexus is reached.",
    },
    {
      q: "What are the 5 US states with NO state sales tax?",
      a: "Alaska, Delaware, Montana, New Hampshire, and Oregon (the 'NOMAD' states) do not levy a general state sales tax.",
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
            <span>US Sales Tax Nexus</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US Sales Tax Economic Nexus Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Determine where your Stripe, Shopify, or Amazon store triggers Economic Nexus ($100k revenue or 200 transactions) across US states.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isNexusTriggered
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : "bg-emerald-50 border-emerald-300 text-emerald-950"
            }`}
          >
            {isNexusTriggered ? (
              <AlertCircle className="text-amber-600 shrink-0" size={40} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={40} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isNexusTriggered
                  ? `⚠️ Economic Nexus Triggered in ~${statesCount} US States`
                  : "Below Economic Nexus Thresholds (No Sales Tax Permit Required)"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isNexusTriggered
                  ? "Your US sales or transaction volume has crossed the $100,000 or 200 transaction threshold in major states. You must register for US Sales Tax permits and collect tax on checkout."
                  : "Your US sales are below the threshold in all 45 sales-tax states. No state sales tax registration is currently required."}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Total US Gross Sales ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${annualUSRevenue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="600000"
                step="10000"
                value={annualUSRevenue}
                onChange={(e) => setAnnualUSRevenue(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Benchmark Limit: $100,000 per state.
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Separate US Orders / Transactions:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {annualUSTransactions} Orders
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={annualUSTransactions}
                onChange={(e) => setAnnualUSTransactions(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Benchmark Limit: 200 transactions per state.
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need US State Sales Tax Registration & Filing?</h4>
              <p className="text-xs text-gray-600">State permit registration, TaxJar/Avalara setup & monthly filing.</p>
            </div>
            <Link to="/us-services/corporate-tax-return" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Get Sales Tax Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US SALES TAX NEXUS WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Economic Nexus Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of South Dakota v. Wayfair sales tax registration obligations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross Sales Base</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${annualUSRevenue.toLocaleString()} Revenue</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual US Sales:</span> <strong className="text-white">${annualUSRevenue.toLocaleString()} USD</strong></div>
                <div className="flex justify-between"><span>Standard State Threshold:</span> <strong className="text-white">$100,000 USD / State</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Revenue Benchmark:</span> <strong>{annualUSRevenue >= 100000 ? "EXCEEDED ($100k Limit Triggered)" : "SAFE (Below $100k Limit)"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Transaction Volume Base</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{annualUSTransactions} Orders</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Orders / Transactions:</span> <strong className="text-white">{annualUSTransactions} Orders</strong></div>
                <div className="flex justify-between"><span>Standard State Threshold:</span> <strong className="text-white">200 Transactions / State</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Volume Benchmark:</span> <strong>{annualUSTransactions >= 200 ? "EXCEEDED (200 Orders Triggered)" : "SAFE (Below 200 Orders)"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Affected US States Count</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isNexusTriggered ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {isNexusTriggered ? `~${statesCount} States Triggered` : "0 States Triggered ✅"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Nomad States (0% Sales Tax):</span> <strong className="text-emerald-400">DE, MT, NH, OR, AK (No Tax)</strong></div>
                <div className="flex justify-between"><span>High Volume State Exposure:</span> <strong className={isNexusTriggered ? "text-amber-400" : "text-emerald-400"}>{isNexusTriggered ? `~${statesCount} States Require Permits` : "0 Permits Required"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Permit Registration Verdict</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isNexusTriggered ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {isNexusTriggered ? "Permits Required ⚠️" : "No Tax Collection Needed ✅"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Tax Collection Requirement:</span> <strong>{isNexusTriggered ? "Collect at Checkout (Stripe/Shopify)" : "0% Tax Collected"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Action Required:</span> <strong className={isNexusTriggered ? "text-amber-400" : "text-emerald-400"}>{isNexusTriggered ? "Register State Sales Tax Permits" : "Monitor Annual Revenue Monthly"}</strong></div>
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
                Top State Sales Tax Economic Nexus Thresholds (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">US State</th>
                  <th className="p-3.5">Economic Nexus Threshold</th>
                  <th className="p-3.5">SaaS & Digital Goods Taxability</th>
                  <th className="p-3.5 rounded-tr-xl">Filing Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">California</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">$500,000 Revenue</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Exempt (Un-downloaded SaaS)</td>
                  <td className="p-3.5">Quarterly / Monthly</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Texas</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">$500,000 Revenue</td>
                  <td className="p-3.5 text-red-600 font-bold">Taxable (80% Taxable Base)</td>
                  <td className="p-3.5">Quarterly / Annual</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">New York</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">$500,000 + 100 Transactions</td>
                  <td className="p-3.5 text-red-600 font-bold">Taxable (SaaS Taxable)</td>
                  <td className="p-3.5">Quarterly</td>
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
              Frequently Asked Questions (US Sales Tax)
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
              <Shield size={16} /> ADVAQ US Sales Tax Compliance
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Need US Sales Tax State Registration & Filing?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US state tax specialists register sales tax permits, configure Stripe Tax / TaxJar, and file recurring state returns.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/corporate-tax-return"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Get Sales Tax Permits <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Sales Tax Advisor
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
