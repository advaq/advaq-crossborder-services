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

export const Route = createFileRoute("/calculators/uk-capital-gains-tax-calculator")({
  head: () => ({
    meta: [
      { title: "UK Capital Gains Tax (CGT) Calculator (2026/2027) | Property & Shares | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Capital Gains Tax calculator for 2026/2027. Calculate CGT for property sales, stocks, shares, crypto, and business assets. Applies £3,000 allowance, 18%/24% property rates, and HMRC 60-day filing rule.",
      },
      {
        name: "keywords",
        content:
          "uk capital gains tax calculator 2026 2027, uk cgt calculator property shares crypto, non resident uk property capital gains tax 60 day deadline, business asset disposal relief badr",
      },
      {
        property: "og:title",
        content: "UK Capital Gains Tax (CGT) Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate UK Capital Gains Tax on UK property sales, stocks, and crypto for UK residents and non-residents.",
      },
      { property: "og:url", content: "/calculators/uk-capital-gains-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-capital-gains-tax-calculator" }],
  }),
  component: UKCapitalGainsTaxCalculatorPage,
});

function UKCapitalGainsTaxCalculatorPage() {
  const [assetType, setAssetType] = useState<"property" | "shares">("property");
  const [purchasePrice, setPurchasePrice] = useState<number>(200000);
  const [salePrice, setSalePrice] = useState<number>(320000);
  const [allowableCosts, setAllowableCosts] = useState<number>(10000);
  const [taxBand, setTaxBand] = useState<"basic" | "higher">("higher");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const annualExemptAmount = 3000;

  const grossGain = Math.max(0, salePrice - purchasePrice);
  const netGainBeforeExemption = Math.max(0, grossGain - allowableCosts);
  const taxableGain = Math.max(0, netGainBeforeExemption - annualExemptAmount);

  let cgtRate = taxBand === "basic" ? 18 : 24;

  const capitalGainsTax = taxableGain * (cgtRate / 100);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Capital Gains Tax Calculator", item: "https://advaq.com/calculators/uk-capital-gains-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Capital Gains Tax (CGT) Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-capital-gains-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Capital Gains Tax on property, stocks, and crypto assets under 2026/2027 HMRC rules.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the UK Capital Gains Tax annual exempt allowance for 2026/2027?",
      a: "For the 2026/2027 tax year, the individual UK Capital Gains Tax annual exempt amount is £3,000. Capital gains up to £3,000 per person per year are completely tax-free. Married couples or civil partners can pool their allowances for up to £6,000 tax-free gain.",
    },
    {
      q: "What are the UK Capital Gains Tax rates for residential property?",
      a: "For UK residential property disposals (other than your main home covered by Private Residence Relief), the CGT rates are 18% for Basic Rate taxpayers and 24% for Higher and Additional Rate taxpayers.",
    },
    {
      q: "What is the HMRC 60-day UK Property CGT reporting rule?",
      a: "If you sell a UK residential property resulting in a taxable gain, you MUST report the disposal to HMRC and pay the estimated Capital Gains Tax within 60 days of the completion date using an online UK Property Tax Account.",
    },
    {
      q: "What costs can be deducted to reduce UK Capital Gains Tax?",
      a: "Allowable costs include original purchase costs, solicitors' fees, stamp duty paid on purchase, estate agent selling fees, valuation fees, and capital improvement expenditures (e.g. extension or structural refurbishment). Regular maintenance costs are not deductible.",
    },
    {
      q: "Does Business Asset Disposal Relief (BADR) reduce CGT for business sales?",
      a: "Yes. Business Asset Disposal Relief (formerly Entrepreneurs' Relief) allows qualifying company directors and sole traders selling their business or shares to pay a reduced 10% CGT rate up to a lifetime limit of £1,000,000 in qualifying gains.",
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
            <span>UK Capital Gains Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Capital Gains Tax (CGT) Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate CGT for UK residential property sales, stocks, and crypto assets. Applies the £3,000 annual allowance.
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
                1. Asset Type:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setAssetType("property")}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    assetType === "property"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Residential Property (18% / 24%)
                </button>
                <button
                  type="button"
                  onClick={() => setAssetType("shares")}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    assetType === "shares"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Shares / Crypto / Business Assets (18% / 24%)
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-1">
                  Original Purchase Price (£):
                </label>
                <input
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full bg-white border border-border rounded-xl p-3 text-sm text-navy-950 font-bold font-mono"
                />
              </div>

              <div>
                <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-1">
                  Sale / Disposal Price (£):
                </label>
                <input
                  type="number"
                  value={salePrice}
                  onChange={(e) => setSalePrice(Number(e.target.value))}
                  className="w-full bg-white border border-border rounded-xl p-3 text-sm text-navy-950 font-bold font-mono"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Allowable Costs (Legal, Estate Agent, Improvements) (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  £{allowableCosts.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={allowableCosts}
                onChange={(e) => setAllowableCosts(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Your UK Income Tax Rate Bracket:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setTaxBand("basic")}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    taxBand === "basic"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Basic Rate Taxpayer (Income &lt;£50,270)
                </button>
                <button
                  type="button"
                  onClick={() => setTaxBand("higher")}
                  className={`p-3 rounded-xl border text-left font-semibold transition-all ${
                    taxBand === "higher"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Higher / Additional Rate (&gt;£50,270)
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Capital Gains Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Capital Gain:</span>
                  <span className="font-mono text-white font-semibold">£{grossGain.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Allowable Costs Deducted:</span>
                  <span className="font-mono text-emerald-400">-£{allowableCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Annual Exempt Allowance:</span>
                  <span className="font-mono text-emerald-400">-£{annualExemptAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200 border-t border-white/10 pt-2">
                  <span>Net Taxable Capital Gain:</span>
                  <span className="font-mono text-gold-400 font-bold">£{taxableGain.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Applied CGT Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">{cgtRate}% ({assetType === "property" ? "Property" : "Other"})</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Capital Gains Tax Due
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(capitalGainsTax).toLocaleString()}
                </div>
                {assetType === "property" && (
                  <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                    <span>HMRC Property Reporting Deadline:</span>
                    <strong className="text-amber-400 font-mono">Within 60 Days</strong>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/self-assessment"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File CGT Return with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP CGT WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Capital Gains Tax Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of how HMRC calculates your exact CGT liability for {assetType === "property" ? "Property" : "Shares/Crypto"}.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross Capital Gain</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Gain Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Disposal / Sale Price:</span> <strong className="text-white">£{salePrice.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Original Purchase Price:</span> <strong className="text-navy-300">-£{purchasePrice.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Gross Capital Gain:</span> <strong>£{grossGain.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Allowable Expenses & Exempt Allowance</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Deductions Applied</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Gain:</span> <strong className="text-white">£{grossGain.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Allowable Legal/Agent Costs:</span> <strong className="text-emerald-400">-£{allowableCosts.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Annual CGT Exempt Amount:</span> <strong className="text-emerald-400">-£3,000</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Net Taxable Capital Gain:</span> <strong>£{taxableGain.toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Statutory £3,000 annual allowance deducted tax-free.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: CGT Rate Calculation</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{cgtRate}% Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Asset Classification:</span> <strong className="text-white">{assetType === "property" ? "Residential Property" : "Shares / Crypto"}</strong></div>
                <div className="flex justify-between"><span>Taxpayer Income Bracket:</span> <strong className="text-navy-300">{taxBand === "basic" ? "Basic Rate" : "Higher / Additional Rate"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Statutory CGT Rate:</span> <strong>{cgtRate}%</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Tax & Reporting Deadline</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">CGT Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400"><span>Net Capital Gains Tax Due:</span> <strong>£{Math.round(capitalGainsTax).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>HMRC Filing Deadline:</span> <strong>{assetType === "property" ? "Within 60 Days of Completion" : "Self Assessment (Jan 31)"}</strong></div>
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
                UK Capital Gains Tax Rates (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Asset Category</th>
                  <th className="p-3.5">Basic Rate Taxpayer</th>
                  <th className="p-3.5">Higher / Additional Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Annual Exemption</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">UK Residential Property</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">18%</td>
                  <td className="p-3.5 font-mono font-bold text-red-600">24%</td>
                  <td className="p-3.5 font-mono">£3,000 / person</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Shares, Crypto & Other Assets</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">10%</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">20%</td>
                  <td className="p-3.5 font-mono">£3,000 / person</td>
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

        {/* ADVAQ CTA */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ UK Chartered Tax Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Need 60-Day UK Property CGT Tax Filing?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK chartered team prepares accurate CGT calculations, reclaims allowable improvement costs, and submits 60-day UK Property Returns directly to HMRC.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/self-assessment"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File CGT Return with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp CGT Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
