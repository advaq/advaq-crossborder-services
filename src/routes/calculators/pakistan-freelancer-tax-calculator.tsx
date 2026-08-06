import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  DollarSign,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-freelancer-tax-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan Freelancer All-in-One Tax & FCVA Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free all-in-one Pakistan freelancer tax calculator. Calculate 0.25% Section 154A WHT, PSEB tax credit savings, FCVA 50% USD retention, and Upwork/Fiverr income tax.",
      },
      {
        name: "keywords",
        content:
          "pakistan freelancer tax calculator 2026, section 154a 0.25 percent wht upwork fiverr, fcva usd retention rate pakistan freelancers, pseb freelancer registration tax credit",
      },
      {
        property: "og:title",
        content: "Pakistan Freelancer All-in-One Tax & FCVA Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "All-in-one IT export tax, PSEB registration, and SBP FCVA USD retention calculator for Pakistani freelancers.",
      },
      { property: "og:url", content: "/calculators/pakistan-freelancer-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-freelancer-tax-calculator" }],
  }),
  component: PakistanFreelancerTaxPage,
});

function PakistanFreelancerTaxPage() {
  const [taxYear, setTaxYear] = useState<string>("TY2027");
  const [isFiler, setIsFiler] = useState<boolean>(true);
  const [isPsebRegistered, setIsPsebRegistered] = useState<boolean>(true);
  const [monthlyIncomeUSD, setMonthlyIncomeUSD] = useState<number>(2500);
  const [usdPkrRate, setUsdPkrRate] = useState<number>(278);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const annualIncomeUSD = monthlyIncomeUSD * 12;
  const annualIncomePKR = annualIncomeUSD * usdPkrRate;

  let appliedWhtRate = 0.25;
  let taxRegimeNature = "Final Tax";

  if (isFiler && isPsebRegistered) {
    appliedWhtRate = 0.25;
    taxRegimeNature = "Final Tax";
  } else if (!isFiler && isPsebRegistered) {
    appliedWhtRate = 0.50;
    taxRegimeNature = "Final Tax (2x Non-Filer)";
  } else if (isFiler && !isPsebRegistered) {
    appliedWhtRate = 1.0;
    taxRegimeNature = "Final Tax";
  } else {
    appliedWhtRate = 2.0;
    taxRegimeNature = "Final Tax (2x Non-Filer)";
  }

  const annualTaxPKR = annualIncomePKR * (appliedWhtRate / 100);
  const monthlyTaxPKR = annualTaxPKR / 12;
  const normalCorporateTaxPKR = annualIncomePKR * 0.29;
  const taxSavingsPKR = normalCorporateTaxPKR - annualTaxPKR;
  const fcvaUsdRetainedMonthly = monthlyIncomeUSD * 0.5;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan Freelancer Tax Calculator", item: "https://advaq.com/calculators/pakistan-freelancer-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Freelancer All-in-One Tax & FCVA Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-freelancer-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate Section 154A 0.25% reduced tax rates, PSEB tax credit savings, and State Bank of Pakistan Exporters' Special FCVA 50% USD retention limits for freelancers.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "How can Pakistani freelancers qualify for the 0.25% reduced tax rate under Section 154A?",
      a: "To qualify for the 0.25% final withholding tax rate on IT/ITES export proceeds under Section 154A of the Income Tax Ordinance 2001, freelancers must: 1) Register with PSEB (Pakistan Software Export Board), 2) File annual FBR tax returns, and 3) Receive payments directly in foreign currency through official banking channels with a Proceeds Realization Certificate (PRC).",
    },
    {
      q: "What is an SBP Exporters' Special FCVA Account for freelancers?",
      a: "Under State Bank of Pakistan (SBP) Circulars, registered IT exporters and freelancers are allowed to open Special Foreign Currency Retention Accounts (FCVA) and retain up to 50% of their export proceeds in US Dollars, Euros, or GBP without mandatory conversion to PKR.",
    },
    {
      q: "Are freelancers required to pay Provincial Sales Tax (PRA / SRB / KPRA)?",
      a: "Exports of IT services and software development are zero-rated (0% sales tax) across all provincial tax jurisdictions (Punjab Revenue Authority PRA, Sindh Revenue Board SRB, KPRA) provided foreign exchange is realized through banking channels.",
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
            <span>Freelancer Complete Tax Tool</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Freelancer Complete Tax Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 154A 0.25% reduced tax rates, PSEB tax credit savings, and SBP Exporters' FCVA 50% USD retention limits.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          
          {/* TAX YEAR BADGE */}
          <div className="flex justify-center mb-2">
            <div className="bg-navy-950 px-6 py-2.5 rounded-xl border border-gold-500/40 shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold font-mono text-gold-400 uppercase tracking-wider">
                Tax Year 2026-27 (TY2027)
              </span>
            </div>
          </div>

          <div className="bg-off-white/50 p-6 rounded-2xl border border-border space-y-6">
            
            {/* STATUS TOGGLES */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-navy-950 uppercase tracking-wider mb-2">
                  FILER STATUS
                </label>
                <div className="bg-slate-100 p-1 rounded-xl flex gap-1 border border-border">
                  <button
                    type="button"
                    onClick={() => setIsFiler(true)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      isFiler
                        ? "bg-gold-500 text-navy-950 shadow-sm"
                        : "text-gray-600 hover:text-navy-950"
                    }`}
                  >
                    Active Filer
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFiler(false)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      !isFiler
                        ? "bg-red-600 text-white shadow-sm"
                        : "text-gray-600 hover:text-navy-950"
                    }`}
                  >
                    Non-Filer
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-navy-950 uppercase tracking-wider mb-2">
                  PSEB STATUS
                </label>
                <div className="bg-slate-100 p-1 rounded-xl flex gap-1 border border-border">
                  <button
                    type="button"
                    onClick={() => setIsPsebRegistered(true)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      isPsebRegistered
                        ? "bg-gold-500 text-navy-950 shadow-sm"
                        : "text-gray-600 hover:text-navy-950"
                    }`}
                  >
                    Registered
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPsebRegistered(false)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${
                      !isPsebRegistered
                        ? "bg-navy-900 text-white shadow-sm"
                        : "text-gray-600 hover:text-navy-950"
                    }`}
                  >
                    Not Registered
                  </button>
                </div>
              </div>
            </div>

            {/* INPUTS: USD INCOME & EXCHANGE RATE */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-[11px] font-bold text-navy-950 uppercase tracking-wider">
                    EXPORT INCOME (USD / MO)
                  </label>
                  <span className="font-mono text-gold-600 font-bold text-xs">
                    ${monthlyIncomeUSD.toLocaleString()} USD
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-xs font-bold">$</span>
                    <input
                      type="number"
                      value={monthlyIncomeUSD || ""}
                      onChange={(e) => setMonthlyIncomeUSD(Number(e.target.value))}
                      placeholder="e.g. 2500"
                      className="w-full pl-8 pr-4 py-2.5 bg-white border border-border rounded-xl font-mono text-sm font-bold text-navy-950 focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="25000"
                    step="250"
                    value={monthlyIncomeUSD}
                    onChange={(e) => setMonthlyIncomeUSD(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-[11px] font-bold text-navy-950 uppercase tracking-wider">
                    USD ➔ PKR RATE
                  </label>
                  <span className="font-mono text-gold-600 font-bold text-xs">
                    1 USD = Rs {usdPkrRate}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-xs font-bold">Rs</span>
                    <input
                      type="number"
                      value={usdPkrRate || ""}
                      onChange={(e) => setUsdPkrRate(Number(e.target.value))}
                      placeholder="278"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl font-mono text-sm font-bold text-navy-950 focus:border-gold-500 focus:outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="250"
                    max="320"
                    step="1"
                    value={usdPkrRate}
                    onChange={(e) => setUsdPkrRate(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* 3 LIVE SUMMARY CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-navy-950 text-white p-5 rounded-2xl space-y-1 shadow-md border border-navy-800">
                <span className="text-[10px] text-gold-400 uppercase font-mono tracking-wider font-semibold block">INCOME (PKR / MO)</span>
                <div className="text-2xl font-serif font-bold text-white">
                  Rs {Math.round(monthlyIncomeUSD * usdPkrRate).toLocaleString()}
                </div>
                <span className="text-[11px] text-navy-200 block font-mono pt-1 border-t border-navy-800">
                  Annual Income: Rs {Math.round(annualIncomePKR).toLocaleString()}
                </span>
              </div>

              <div className="bg-amber-500/10 border-2 border-gold-500 p-5 rounded-2xl space-y-1 shadow-md">
                <span className="text-[10px] text-gold-600 uppercase font-mono tracking-wider font-bold block">ESTIMATED TAX (MONTHLY)</span>
                <div className="text-2xl font-serif font-bold text-navy-950">
                  Rs {Math.round(monthlyTaxPKR).toLocaleString()}
                </div>
                <span className="text-[11px] text-gray-600 block font-mono pt-1 border-t border-gold-500/20">
                  Annual Tax: Rs {Math.round(annualTaxPKR).toLocaleString()}
                </span>
              </div>

              <div className="bg-navy-950 text-white p-5 rounded-2xl space-y-1 shadow-md border border-navy-800">
                <span className="text-[10px] text-gold-400 uppercase font-mono tracking-wider font-semibold block">TAX REGIME / NATURE</span>
                <div className="text-base font-serif font-bold text-gold-400">
                  {taxRegimeNature}
                </div>
                <span className="text-[11px] text-emerald-400 block font-mono pt-1 border-t border-navy-800 font-semibold">
                  Rate: {appliedWhtRate}% Applied
                </span>
              </div>
            </div>

            {/* DYNAMIC RATE APPLIED SUBTEXT */}
            <div className="text-xs text-gray-600 font-mono flex items-center justify-between pt-1">
              <span>
                Rate applied: {appliedWhtRate.toFixed(2)}% under Sec 154 / 154A.
              </span>
              <span className="text-emerald-600 font-bold">
                SBP FCVA 50% Retention: ${fcvaUsdRetainedMonthly.toLocaleString()} USD / mo
              </span>
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
                Live Step-by-Step Freelancer IT Export Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of 0.25% vs 1% SBR / FBR Concessional Export Tax Regime for ${monthlyIncomeUSD.toLocaleString()} USD monthly revenue.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross Export Revenue</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">USD Remittance</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Monthly USD Earnings:</span> <strong className="text-white">${monthlyIncomeUSD.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Exchange Rate:</span> <strong className="text-white">Rs {usdPkrRate} / USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Annual Revenue (PKR):</span> <strong>Rs {Math.round(annualIncomePKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: PSEB & FCVA Status</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Concession Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>PSEB Registered:</span> <strong className={isPsebRegistered ? "text-emerald-400" : "text-amber-400"}>{isPsebRegistered ? "YES (0.25% Rate)" : "NO (1.0% Rate)"}</strong></div>
                <div className="flex justify-between"><span>Effective WHT Rate:</span> <strong className="text-emerald-400">{appliedWhtRate}%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Monthly USD Retention:</span> <strong>${fcvaUsdRetainedMonthly.toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Final FBR Tax Due</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Final Discharge</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Monthly FBR Tax:</span> <strong className="text-emerald-400">Rs {Math.round(annualTaxPKR / 12).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Normal Tax Saved:</span> <strong className="text-emerald-400">Rs {Math.round(taxSavingsPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Annual Total Tax:</span> <strong>Rs {Math.round(annualTaxPKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: ADVAQ Compliance Package</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">PSEB + FBR</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>PSEB Registration:</span> <strong className="text-white">Rs 15,000 Fee</strong></div>
                <div className="flex justify-between"><span>FBR IT Return Filing:</span> <strong className="text-emerald-400">Included</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Exemption Certificate:</span> <strong>Issued in 48h</strong></div>
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
                Pakistan Freelancer Export Tax Regimes Compared
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Tax Regime / Status</th>
                  <th className="p-3.5">FBR Provision</th>
                  <th className="p-3.5">Effective WHT Rate</th>
                  <th className="p-3.5 rounded-tr-xl">SBP FCVA 50% USD Retention</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">PSEB Registered Freelancer</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 154A (Final Tax)</td>
                  <td className="p-3.5 font-bold text-emerald-600">0.25% WHT</td>
                  <td className="p-3.5 font-bold text-emerald-600">Eligible (50% USD)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Unregistered Export Freelancer</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 154A (Standard)</td>
                  <td className="p-3.5 font-bold text-amber-600">1.0% WHT</td>
                  <td className="p-3.5 text-gray-600">Restricted / Partial</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Social Media Content Creators (YouTube/FB/TikTok)</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 154B (Minimum Tax)</td>
                  <td className="p-3.5 font-bold text-amber-600">5.0% Min Tax</td>
                  <td className="p-3.5 text-gray-600">Bank Account Specific</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Independent Professional (Local Software Engineer)</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 153(1)(b)</td>
                  <td className="p-3.5 font-bold text-red-600">15% Filer / 30% Non-Filer</td>
                  <td className="p-3.5 text-gray-600">Not Applicable</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Non-Filer IT Freelancer</td>
                  <td className="p-3.5 font-mono text-gray-600">Normal Slabs Regime</td>
                  <td className="p-3.5 font-bold text-red-600">Up to 35% Slabs</td>
                  <td className="p-3.5 font-bold text-red-600">Not Eligible</td>
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
              Frequently Asked Questions (Freelancer Tax & FCVA)
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
              Explore Related Pakistan IT & Tax Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  IT Export Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Pakistan IT Exporter 100% Tax Credit Tool
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Section 154A 0.25% WHT, PSEB registration savings, and SBP FCVA USD retention.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-it-export-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Sales Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Provincial Sales Tax on Services (PRA / SRB / KPRA)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Compare PRA Punjab (16%), SRB Sindh (13%), and KPRA (15%) sales tax rates for IT firms.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-sales-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  SECP Setup
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  SECP Private Limited vs SMC Setup Cost Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate SECP company incorporation fees, NIFT digital signatures, and NTN registration.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-secp-cost-calculator"
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
              <Shield size={16} /> ADVAQ Registered PSEB & FBR IT Consultants
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Register with PSEB & Secure 0.25% Final Tax Status
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our IT export legal team handles PSEB freelancer registration, SBP FCVA bank account documentation, and FBR Section 154A tax return filings.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/pseb-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Register PSEB with ADVAQ <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
