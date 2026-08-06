import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-fbr-salary-tax-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan FBR Salary & Business Income Tax Calculator (Tax Year 2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBR income tax calculator for Pakistan. Calculate monthly and annual income tax slabs for salaried and business individuals under 2026/2027 budget rules.",
      },
      {
        name: "keywords",
        content:
          "fbr salary tax calculator 2026 2027 pakistan, fbr monthly salary tax deduction calculator, business individual tax slabs iris fbr pakistan, fbr salary tax slabs 2026",
      },
      {
        property: "og:title",
        content: "Pakistan FBR Salary & Business Income Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate monthly and annual FBR income tax deductions for salaried employees and business owners.",
      },
      { property: "og:url", content: "/calculators/pakistan-fbr-salary-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-fbr-salary-tax-calculator" }],
  }),
  component: PakistanFbrSalaryTaxCalculatorPage,
});

function PakistanFbrSalaryTaxCalculatorPage() {
  const [monthlyIncomePKR, setMonthlyIncomePKR] = useState<number>(200000);
  const [incomeType, setIncomeType] = useState<string>("salaried");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const annualIncomePKR = monthlyIncomePKR * 12;

  let annualTaxPKR = 0;
  if (incomeType === "salaried") {
    if (annualIncomePKR <= 600000) annualTaxPKR = 0;
    else if (annualIncomePKR <= 1200000) annualTaxPKR = (annualIncomePKR - 600000) * 0.01;
    else if (annualIncomePKR <= 2200000) annualTaxPKR = 6000 + (annualIncomePKR - 1200000) * 0.11;
    else if (annualIncomePKR <= 3200000) annualTaxPKR = 116000 + (annualIncomePKR - 2200000) * 0.20;
    else if (annualIncomePKR <= 4100000) annualTaxPKR = 316000 + (annualIncomePKR - 3200000) * 0.25;
    else if (annualIncomePKR <= 5600000) annualTaxPKR = 541000 + (annualIncomePKR - 4100000) * 0.29;
    else if (annualIncomePKR <= 7000000) annualTaxPKR = 976000 + (annualIncomePKR - 5600000) * 0.32;
    else annualTaxPKR = 1424000 + (annualIncomePKR - 7000000) * 0.35;
  } else {
    if (annualIncomePKR <= 600000) annualTaxPKR = 0;
    else if (annualIncomePKR <= 1200000) annualTaxPKR = (annualIncomePKR - 600000) * 0.15;
    else if (annualIncomePKR <= 1600000) annualTaxPKR = 90000 + (annualIncomePKR - 1200000) * 0.2;
    else if (annualIncomePKR <= 3200000) annualTaxPKR = 170000 + (annualIncomePKR - 1600000) * 0.3;
    else annualTaxPKR = 650000 + (annualIncomePKR - 3200000) * 0.35;
  }

  const monthlyTaxPKR = annualTaxPKR / 12;
  const netMonthlyTakeHomePKR = monthlyIncomePKR - monthlyTaxPKR;
  const effectiveTaxRate = annualIncomePKR > 0 ? (annualTaxPKR / annualIncomePKR) * 100 : 0;

  // Active Tax Slab Index Calculation
  const getActiveSlabIndex = (): number => {
    if (incomeType === "salaried") {
      if (annualIncomePKR <= 600000) return 0;
      if (annualIncomePKR <= 1200000) return 1;
      if (annualIncomePKR <= 2200000) return 2;
      if (annualIncomePKR <= 3200000) return 3;
      if (annualIncomePKR <= 4100000) return 4;
      if (annualIncomePKR <= 5600000) return 5;
      if (annualIncomePKR <= 7000000) return 6;
      return 7;
    } else {
      if (annualIncomePKR <= 600000) return 0;
      if (annualIncomePKR <= 1200000) return 1;
      if (annualIncomePKR <= 1600000) return 2;
      if (annualIncomePKR <= 3200000) return 3;
      return 4;
    }
  };

  const activeSlabIndex = getActiveSlabIndex();

  const salariedSlabsData = [
    { bracket: "Up to Rs 600,000", rateStr: "0% Tax Rate", baseTax: "Rs 0", marginal: "0%", color: "text-emerald-600" },
    { bracket: "Rs 600,001 – Rs 1,200,000", rateStr: "1% of amount exceeding Rs 600k", baseTax: "Rs 0", marginal: "1%", color: "text-emerald-600" },
    { bracket: "Rs 1,200,001 – Rs 2,200,000", rateStr: "Rs 6,000 + 11% exceeding Rs 1.2M", baseTax: "Rs 6,000", marginal: "11%", color: "text-emerald-600" },
    { bracket: "Rs 2,200,001 – Rs 3,200,000", rateStr: "Rs 116,000 + 20% exceeding Rs 2.2M", baseTax: "Rs 116,000", marginal: "20%", color: "text-amber-600" },
    { bracket: "Rs 3,200,001 – Rs 4,100,000", rateStr: "Rs 316,000 + 25% exceeding Rs 3.2M", baseTax: "Rs 316,000", marginal: "25%", color: "text-amber-600" },
    { bracket: "Rs 4,100,001 – Rs 5,600,000", rateStr: "Rs 541,000 + 29% exceeding Rs 4.1M", baseTax: "Rs 541,000", marginal: "29%", color: "text-red-600" },
    { bracket: "Rs 5,600,001 – Rs 7,000,000", rateStr: "Rs 976,000 + 32% exceeding Rs 5.6M", baseTax: "Rs 976,000", marginal: "32%", color: "text-red-600" },
    { bracket: "Above Rs 7,000,000", rateStr: "Rs 1,424,000 + 35% exceeding Rs 7.0M", baseTax: "Rs 1,424,000", marginal: "35%", color: "text-red-600" },
  ];

  const businessSlabsData = [
    { bracket: "Up to Rs 600,000", rateStr: "0% Tax Rate", baseTax: "Rs 0", marginal: "0%", color: "text-emerald-600" },
    { bracket: "Rs 600,001 – Rs 1,200,000", rateStr: "15% of amount exceeding Rs 600k", baseTax: "Rs 0", marginal: "15%", color: "text-amber-600" },
    { bracket: "Rs 1,200,001 – Rs 1,600,000", rateStr: "Rs 90,000 + 20% exceeding Rs 1.2M", baseTax: "Rs 90,000", marginal: "20%", color: "text-amber-600" },
    { bracket: "Rs 1,600,001 – Rs 3,200,000", rateStr: "Rs 170,000 + 30% exceeding Rs 1.6M", baseTax: "Rs 170,000", marginal: "30%", color: "text-red-600" },
    { bracket: "Above Rs 3,200,000", rateStr: "Rs 650,000 + 35% exceeding Rs 3.2M", baseTax: "Rs 650,000", marginal: "35%", color: "text-red-600" },
  ];

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan FBR Salary Tax Calculator", item: "https://advaq.com/calculators/pakistan-fbr-salary-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan FBR Salary & Business Income Tax Calculator (Tax Year 2026/2027)",
    url: "https://advaq.com/calculators/pakistan-fbr-salary-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate monthly salary tax deductions under Section 149, progressive FBR income tax slabs, and net take-home salary for employees and business individuals in Pakistan.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the non-taxable salary limit in Pakistan for Tax Year 2026/2027?",
      a: "Salaried individuals earning up to PKR 600,000 annually (PKR 50,000 per month) pay 0% income tax under the First Schedule of the Income Tax Ordinance 2001.",
    },
    {
      q: "Who qualifies as a Salaried Individual under FBR tax rules?",
      a: "An individual qualifies as a salaried person if salary constitutes MORE than 75% of their total taxable income in a tax year.",
    },
    {
      q: "When is the annual deadline for filing FBR Income Tax Returns for salaried persons?",
      a: "The annual deadline for filing FBR Income Tax Returns (Form 114) for salaried individuals and business individuals is September 30 following the end of the tax year.",
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
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>FBR Salary & Income Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FBR Income Tax Calculator (Tax Year 2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate monthly salary tax deductions, annual FBR tax slabs, and net take-home salary for employees and business individuals in Pakistan.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className="space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Income Classification:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setIncomeType("salaried")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    incomeType === "salaried"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">Salaried Individual</strong>
                  <span className="text-[11px] opacity-80">Salary &gt; 75% of income</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIncomeType("business")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    incomeType === "business"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">Business Individual / AOP</strong>
                  <span className="text-[11px] opacity-80">Sole Proprietor / Partner</span>
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross Monthly Income (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  Rs {(monthlyIncomePKR / 100000).toLocaleString()} Lacs / month
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="25000"
                value={monthlyIncomePKR}
                onChange={(e) => setMonthlyIncomePKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Annual Total: Rs {(annualIncomePKR / 100000).toLocaleString()} Lacs
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Monthly Tax Deduction</span>
              <div className="text-3xl font-serif font-bold text-red-600">
                Rs {Math.round(monthlyTaxPKR).toLocaleString()}
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 bg-white space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Annual Total FBR Tax</span>
              <div className="text-3xl font-serif font-bold text-navy-950">
                Rs {Math.round(annualTaxPKR).toLocaleString()}
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">Net Monthly Take-Home</span>
              <div className="text-3xl font-serif font-bold text-white">
                Rs {Math.round(netMonthlyTakeHomePKR).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need FBR Income Tax Return Filing (IRIS)?</h4>
              <p className="text-xs text-gray-600">Active Taxpayer List (ATL) restoration & tax return drafting.</p>
            </div>
            <Link to="/pakistan-services/individual-tax-return" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              File Tax Return with ADVAQ
            </Link>
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
                Live Step-by-Step FBR Salary Tax Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of Income Tax Ordinance 2001 First Schedule tax slab calculations for Rs {monthlyIncomePKR.toLocaleString()} monthly salary.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross Annual Salary</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Annual Taxable</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Monthly Salary:</span> <strong className="text-white">Rs {monthlyIncomePKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Months per Year:</span> <strong className="text-white">12 Months</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Annual Taxable Income:</span> <strong>Rs {annualIncomePKR.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: FBR Tax Slab Rate</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">First Schedule</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Classification:</span> <strong className="text-emerald-400">{incomeType === "salaried" ? "Salaried (> 75%)" : "Non-Salaried / AOP"}</strong></div>
                <div className="flex justify-between"><span>Exempt Threshold:</span> <strong className="text-white">Rs 600,000 / year</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Applicable Tax Rate:</span> <strong>{effectiveTaxRate.toFixed(1)}% Effective</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Annual Tax Liability</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">FBR Annual</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Annual Tax:</span> <strong className="text-red-400">Rs {Math.round(annualTaxPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Monthly Deduction:</span> <strong className="text-red-400">Rs {Math.round(monthlyTaxPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Annual FBR Liability:</span> <strong>Rs {Math.round(annualTaxPKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Take-Home Net Income</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Payout</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Monthly:</span> <strong className="text-white">Rs {monthlyIncomePKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Tax Deducted:</span> <strong className="text-red-400">Rs {Math.round(monthlyTaxPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Net Monthly Payout:</span> <strong>Rs {Math.round(netMonthlyTakeHomePKR).toLocaleString()}</strong></div>
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
                {incomeType === "salaried"
                  ? "FBR Salaried Income Tax Slabs Schedule (2026/2027)"
                  : "FBR Business Individual & AOP Income Tax Slabs Schedule (2026/2027)"}
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">
                    {incomeType === "salaried" ? "Annual Taxable Salary Bracket" : "Annual Taxable Business Income Bracket"}
                  </th>
                  <th className="p-3.5">FBR Income Tax Rate</th>
                  <th className="p-3.5">Base Tax Amount</th>
                  <th className="p-3.5 rounded-tr-xl">Marginal Tax Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                {(incomeType === "salaried" ? salariedSlabsData : businessSlabsData).map((slab, idx) => {
                  const isActive = idx === activeSlabIndex;
                  return (
                    <tr
                      key={idx}
                      className={`transition-all ${
                        isActive
                          ? "bg-amber-500/10 border-2 border-gold-500 font-bold shadow-md"
                          : idx % 2 === 1
                          ? "bg-slate-50/50"
                          : "bg-white"
                      }`}
                    >
                      <td className="p-3.5 font-bold text-navy-950">
                        <div className="flex items-center justify-between gap-2">
                          <span>{slab.bracket}</span>
                          {isActive && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 font-sans font-bold text-[10px] uppercase tracking-wider shadow-sm">
                              <Sparkles size={11} /> Your Slab
                            </span>
                          )}
                        </div>
                      </td>
                      <td className={`p-3.5 font-mono ${isActive ? "text-navy-950 font-bold" : ""}`}>{slab.rateStr}</td>
                      <td className={`p-3.5 font-mono ${isActive ? "text-navy-950 font-bold" : ""}`}>{slab.baseTax}</td>
                      <td className={`p-3.5 font-mono font-bold ${slab.color}`}>{slab.marginal}</td>
                    </tr>
                  );
                })}
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
              Frequently Asked Questions (FBR Salary Tax)
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
              Explore Related Pakistan Tax Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Withholding Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Section 153 WHT Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate WHT rates for services (9%/18%), goods (5%/10%), and contracts.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-wht-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Freelancer Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Pakistan Freelancer 0.25% Tax & FCVA Tool
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Section 154A reduced 0.25% export tax rate & SBP FCVA retention.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-freelancer-tax-calculator"
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
              <Shield size={16} /> ADVAQ Licensed Pakistan Tax Advocates
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              File Your FBR Iris Income Tax Return (Form 114)
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan tax legal team prepares your annual income tax returns, wealth statements (Form 116), and reconciles employer salary WHT certificates (Section 149).
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/individual-tax-return"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Income Tax Return <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
