import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-vat-calculator")({
  head: () => ({
    meta: [
      { title: "UK VAT £90,000 Threshold & Scheme Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK VAT threshold calculator for 2026/2027. Check rolling 12-month turnover against £90,000 limit, compare Flat Rate Scheme vs Standard 20% VAT, and calculate non-resident voluntary VAT registration.",
      },
      {
        name: "keywords",
        content:
          "uk vat threshold calculator 90000 2026 2027, uk vat flat rate scheme calculator, voluntary vat registration uk non resident, hmrc eori number uk ltd",
      },
      {
        property: "og:title",
        content: "UK VAT £90,000 Threshold & Scheme Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate whether you must register for UK VAT and compare Flat Rate vs Standard 20% VAT Scheme savings.",
      },
      { property: "og:url", content: "/calculators/uk-vat-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-vat-calculator" }],
  }),
  component: UKVATCalculatorPage,
});

function UKVATCalculatorPage() {
  const [rollingTurnover, setRollingTurnover] = useState<number>(85000);
  const [annualVatExpenses, setAnnualVatExpenses] = useState<number>(15000);
  const [flatRatePercentage, setFlatRatePercentage] = useState<number>(14.5);
  const [isFirstYearDiscount, setIsFirstYearDiscount] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const vatThreshold = 90000;
  const isVatRegistrationMandatory = rollingTurnover >= vatThreshold;

  const effectiveFlatRate = Math.max(0, flatRatePercentage - (isFirstYearDiscount ? 1 : 0));

  const vatOutputStandard = rollingTurnover * 0.2;
  const vatInputStandard = annualVatExpenses * 0.2;
  const netVatPayableStandard = Math.max(0, vatOutputStandard - vatInputStandard);

  const grossRevenueIncludingVat = rollingTurnover * 1.2;
  const netVatPayableFlatRate = grossRevenueIncludingVat * (effectiveFlatRate / 100);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK VAT Threshold Calculator", item: "https://advaq.com/calculators/uk-vat-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK VAT £90,000 Threshold & Scheme Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-vat-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK VAT threshold compliance, compare Standard 20% vs Flat Rate VAT scheme savings, and check non-resident voluntary registration.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the mandatory UK VAT registration threshold for 2026/2027?",
      a: "The mandatory UK VAT registration threshold is £90,000 of taxable turnover over a rolling 12-month period. If your turnover exceeds £90,000 in any 12-month period (or is expected to exceed £90,000 in the next 30 days), you MUST register with HMRC.",
    },
    {
      q: "Are non-UK resident founders required to register for UK VAT at £0 threshold?",
      a: "Yes. If your business has no physical establishment in the UK (NETP / Non-Established Taxable Person), the £90,000 threshold does not apply—you must register for UK VAT immediately upon making your first taxable supply in the UK.",
    },
    {
      q: "How does the UK Flat Rate VAT Scheme work?",
      a: "Under the Flat Rate Scheme, you charge customers 20% VAT on invoices, but pay HMRC a lower, fixed percentage of your gross turnover (e.g. 14.5% for IT consultancy). You retain the difference as profit, but generally cannot reclaim VAT on purchases (except capital assets over £2,000).",
    },
    {
      q: "What is a Limited Cost Business under the Flat Rate VAT Scheme?",
      a: "If your expenditure on relevant goods (excluding services, software, sub-contractors, vehicles) is less than 2% of your turnover or less than £1,000 per year, HMRC classifies your business as a 'Limited Cost Business' and charges a high 16.5% flat rate.",
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
            <span>UK VAT Threshold & Scheme</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK VAT £90,000 Threshold & Scheme Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Monitor your rolling 12-month UK turnover against the £90k mandatory VAT limit and compare Flat Rate vs Standard 20% VAT savings.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div
            className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isVatRegistrationMandatory
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : "bg-emerald-50 border-emerald-300 text-emerald-950"
            }`}
          >
            {isVatRegistrationMandatory ? (
              <AlertTriangle className="text-amber-600 shrink-0" size={32} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={32} />
            )}
            <div>
              <h3 className="font-serif font-semibold text-lg">
                {isVatRegistrationMandatory
                  ? "Mandatory UK VAT Registration Required!"
                  : "Below Mandatory £90,000 Threshold (Voluntary Optional)"}
              </h3>
              <p className="text-xs opacity-90 mt-0.5">
                {isVatRegistrationMandatory
                  ? "Your 12-month rolling UK turnover has crossed £90,000. You must register for UK VAT with HMRC within 30 days to avoid penalties."
                  : "You are currently under the mandatory threshold. Voluntary VAT registration can still be beneficial if your B2B clients reclaim VAT."}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  12-Month UK Turnover (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{rollingTurnover.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="250000"
                step="5000"
                value={rollingTurnover}
                onChange={(e) => setRollingTurnover(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Threshold: £90,000 (Mandatory Limit)
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual VAT-Subject Expenses (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{annualVatExpenses.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={rollingTurnover * 0.5}
                step="2500"
                value={annualVatExpenses}
                onChange={(e) => setAnnualVatExpenses(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Hardware, software, advertising, contractor costs with 20% VAT.
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <h4 className="font-serif font-semibold text-navy-950 text-lg">Standard Rate VAT (20%)</h4>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">Reclaim Input VAT</span>
              </div>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Output VAT Collected (20%):</span>
                  <strong className="font-mono">£{Math.round(vatOutputStandard).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Input VAT Reclaimed (20%):</span>
                  <strong className="font-mono text-emerald-600">-£{Math.round(vatInputStandard).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-border text-sm font-bold text-navy-950">
                  <span>Net Annual HMRC VAT Bill:</span>
                  <strong className="font-mono">£{Math.round(netVatPayableStandard).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-4 shadow-lg">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <h4 className="font-serif font-semibold text-white text-lg">Flat Rate VAT Scheme</h4>
                <span className="text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium">Simplified %</span>
              </div>
              <div className="space-y-2 text-xs text-navy-200">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Industry Sector Rate:</span>
                    <select
                      value={flatRatePercentage}
                      onChange={(e) => setFlatRatePercentage(Number(e.target.value))}
                      className="bg-navy-900 border border-gold-500/40 text-white text-xs rounded p-1.5 font-sans"
                    >
                      <option value={14.5}>14.5% — IT Consultancy & Telecommunications</option>
                      <option value={14.0}>14.0% — Management Consultancy & Business Services</option>
                      <option value={11.0}>11.0% — Advertising, Design & Photography</option>
                      <option value={14.5}>14.5% — Legal & Financial Services</option>
                      <option value={7.5}>7.5% — Retail & Goods Sales</option>
                      <option value={12.5}>12.5% — Catering & Hotel Services</option>
                      <option value={6.5}>6.5% — Pubs & Restaurants</option>
                      <option value={16.5}>16.5% — Limited Cost Business (&lt;2% goods expenditure)</option>
                    </select>
                  </div>

                  <label className="flex items-center justify-between text-xs cursor-pointer bg-navy-900/60 p-2 rounded border border-white/10">
                    <span>Apply First-Year 1% HMRC Discount</span>
                    <input
                      type="checkbox"
                      checked={isFirstYearDiscount}
                      onChange={(e) => setIsFirstYearDiscount(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                  </label>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white">
                  <span>Net Annual HMRC VAT Bill:</span>
                  <strong className="font-mono text-gold-400">£{Math.round(netVatPayableFlatRate).toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need UK VAT Registration & Quarterly Return Filing?</h4>
              <p className="text-xs text-gray-600">HMRC EORI, Voluntary/Mandatory Registration & Flat Rate Advice.</p>
            </div>
            <Link to="/uk-services/vat-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Register UK VAT with ADVAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP VAT WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step UK VAT & Scheme Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your £90k threshold compliance and scheme comparison based on your inputs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: £90k Threshold Compliance</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isVatRegistrationMandatory ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {isVatRegistrationMandatory ? "Mandatory" : "Voluntary"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>12-Month UK Turnover:</span> <strong className="text-white">£{rollingTurnover.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>HMRC Statutory Threshold:</span> <strong className="text-gold-400">£90,000</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Status:</span> <strong className={isVatRegistrationMandatory ? "text-amber-400" : "text-emerald-400"}>{isVatRegistrationMandatory ? "Crossed Threshold" : "Under Threshold"}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Non-UK established businesses (NETP) have a £0 threshold (must register immediately).
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Standard 20% VAT Rate</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(netVatPayableStandard).toLocaleString()} Net Bill</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Output VAT (20% on Revenue):</span> <strong className="text-white">£{Math.round(vatOutputStandard).toLocaleString()}</strong></div>
                <div className="flex justify-between text-emerald-400"><span>Input VAT Reclaimed (20%):</span> <strong>-£{Math.round(vatInputStandard).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Net Standard VAT Bill:</span> <strong>£{Math.round(netVatPayableStandard).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Reclaim 20% VAT on hardware, software, office space & contractor expenses.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Flat Rate VAT Scheme</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{effectiveFlatRate}% Flat Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Revenue (inc. 20% VAT):</span> <strong className="text-white">£{Math.round(grossRevenueIncludingVat).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Applied Sector Rate:</span> <strong className="text-navy-300">{effectiveFlatRate}%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Net Flat Rate VAT Bill:</span> <strong>£{Math.round(netVatPayableFlatRate).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Includes {isFirstYearDiscount ? "1% first-year HMRC discount" : "standard flat rate"}.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Optimal Scheme Recommendation</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Optimal Choice</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Standard 20% Bill:</span> <strong className="text-white">£{Math.round(netVatPayableStandard).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Flat Rate Bill:</span> <strong className="text-white">£{Math.round(netVatPayableFlatRate).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Recommended Scheme:</span> <strong>{netVatPayableFlatRate < netVatPayableStandard ? "Flat Rate Scheme" : "Standard 20% Scheme"}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Saves £{Math.abs(Math.round(netVatPayableStandard - netVatPayableFlatRate)).toLocaleString()} annual VAT by choosing the right scheme!
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
                UK VAT Scheme Comparison (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">VAT Scheme Type</th>
                  <th className="p-3.5">Turnover Limit</th>
                  <th className="p-3.5">VAT Accounting Method</th>
                  <th className="p-3.5 rounded-tr-xl">Key Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Standard Rate VAT</td>
                  <td className="p-3.5 font-mono">No limit</td>
                  <td className="p-3.5">Charge 20% VAT, reclaim 20% input VAT on expenses</td>
                  <td className="p-3.5 text-emerald-600 font-semibold">Best if expenses are high with heavy input VAT</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Flat Rate Scheme (FRS)</td>
                  <td className="p-3.5 font-mono">Up to £150,000/yr</td>
                  <td className="p-3.5">Charge 20% VAT, pay lower flat % to HMRC on gross revenue</td>
                  <td className="p-3.5 text-gold-600 font-semibold">Simplified bookkeeping & keep flat rate margin</td>
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
              Frequently Asked Questions (UK VAT)
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
              Need Official UK VAT Registration & MTD Filing?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK chartered team handles mandatory & voluntary VAT registration, EORI numbers for trade, Flat Rate Scheme application, and Making Tax Digital quarterly returns.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/vat-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Register UK VAT with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp VAT Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
