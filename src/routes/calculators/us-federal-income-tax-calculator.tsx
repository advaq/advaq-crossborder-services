import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-federal-income-tax-calculator")({
  head: () => ({
    meta: [
      { title: "US Federal Income Tax Calculator for Non-Residents (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Form 1040-NR US Federal Income Tax calculator for foreign LLC owners with US ECI. Calculate progressive tax brackets, FDAP withholding, and ITIN requirements.",
      },
      {
        name: "keywords",
        content:
          "us federal income tax calculator 1040-nr 2026, non resident alien us tax brackets, eci income tax calculator foreign llc, fdap 30 percent withholding tax us",
      },
      {
        property: "og:title",
        content: "US Federal Income Tax Calculator for Non-Residents | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate US Federal Income Tax on Effectively Connected Income (Form 1040-NR) for foreign LLC owners.",
      },
      { property: "og:url", content: "/calculators/us-federal-income-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-federal-income-tax-calculator" }],
  }),
  component: USFederalIncomeTaxCalculatorPage,
});

function USFederalIncomeTaxCalculatorPage() {
  const [grossUseciIncome, setGrossUseciIncome] = useState<number>(45000);
  const [businessExpenses, setBusinessExpenses] = useState<number>(10000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const netTaxableIncome = Math.max(0, grossUseciIncome - businessExpenses);

  let federalTax = 0;
  if (netTaxableIncome <= 11600) {
    federalTax = netTaxableIncome * 0.10;
  } else if (netTaxableIncome <= 47150) {
    federalTax = 1160 + (netTaxableIncome - 11600) * 0.12;
  } else if (netTaxableIncome <= 100525) {
    federalTax = 1160 + 4266 + (netTaxableIncome - 47150) * 0.22;
  } else if (netTaxableIncome <= 191950) {
    federalTax = 1160 + 4266 + 11742.5 + (netTaxableIncome - 100525) * 0.24;
  } else {
    federalTax = 1160 + 4266 + 11742.5 + 21942 + (netTaxableIncome - 191950) * 0.32;
  }

  const effectiveTaxRate = netTaxableIncome > 0 ? (federalTax / netTaxableIncome) * 100 : 0;
  const netTakeHome = grossUseciIncome - businessExpenses - federalTax;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US Federal Income Tax Calculator", item: "https://advaq.com/calculators/us-federal-income-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Federal Income Tax Calculator for Non-Residents (2026/2027)",
    url: "https://advaq.com/calculators/us-federal-income-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate US Form 1040-NR Federal Income Tax liability on Effectively Connected Income (ECI) for foreign-owned LLC owners and non-resident aliens.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is Effectively Connected Income (ECI) for non-US residents?",
      a: "ECI is income derived from a US trade or business, such as having physical employees in the US, maintaining a US warehouse/office, or providing in-person services inside the US. ECI is taxed at progressive US federal tax rates (10% to 37%) via Form 1040-NR.",
    },
    {
      q: "Do foreign single-member LLC owners pay 0% US tax if they have no ECI?",
      a: "Yes! If a non-resident foreign entrepreneur operates a single-member LLC, performs all work remotely outside the US, has no US employees/offices, and generates pure digital/service income, the income is non-US source and subject to $0 US federal income tax.",
    },
    {
      q: "What is FDAP income and how is it taxed for foreign individuals?",
      a: "FDAP (Fixed, Determinable, Annual, or Periodical) income includes US dividends, royalties, interest, and passive income. FDAP is taxed at a flat 30% gross withholding rate (or lower if a Double Tax Treaty applies).",
    },
    {
      q: "What is the deadline for filing IRS Form 1040-NR?",
      a: "For non-resident aliens who received wages subject to US withholding, the deadline is April 15. For non-residents without US W-2 wages, the deadline is June 15 following the tax year end.",
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
            <span>US Federal Income Tax (1040-NR)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US Federal Income Tax Calculator for Non-Residents (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your Form 1040-NR tax liability for Effectively Connected Income (ECI) from US operations, software, or physical trade.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross US Effectively Connected Income (ECI) ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${grossUseciIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={grossUseciIncome}
                onChange={(e) => setGrossUseciIncome(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Income generated from US trade, physical presence, or US employees.
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Allowable US Business Expense Deductions ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${businessExpenses.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={grossUseciIncome * 0.6}
                step="2500"
                value={businessExpenses}
                onChange={(e) => setBusinessExpenses(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Server costs, advertising, contractor fees, and operational overhead.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Form 1040-NR Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross US ECI Income:</span>
                  <span className="font-mono text-white font-semibold">${grossUseciIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Less Business Deductions:</span>
                  <span className="font-mono text-emerald-400 font-semibold">-${businessExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Taxable Income:</span>
                  <span className="font-mono text-white font-semibold">${netTaxableIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective Federal Tax Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">{effectiveTaxRate.toFixed(1)}%</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Form 1040-NR Tax Due
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  ${Math.round(federalTax).toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>Net After-Tax Income:</span>
                  <strong className="text-emerald-400 font-mono">${Math.round(netTakeHome).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/itin-application"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Form 1040-NR with ADVAQ PTIN/CPA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US FORM 1040-NR WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Form 1040-NR Federal Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of IRS 1040-NR progressive tax brackets and net take-home calculation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross ECI & Expense Deductions</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${netTaxableIncome.toLocaleString()} Net</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross ECI Revenue:</span> <strong className="text-white">${grossUseciIncome.toLocaleString()} USD</strong></div>
                <div className="flex justify-between"><span>Allowable Deductions:</span> <strong className="text-emerald-400">-${businessExpenses.toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Net Taxable Base:</span> <strong>${netTaxableIncome.toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Progressive IRS Brackets (10%-32%)</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{effectiveTaxRate.toFixed(1)}% Effective</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>10% Bracket ($0–$11.6k):</span> <strong className="text-white">${Math.round(Math.min(netTaxableIncome, 11600) * 0.10).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>12% Bracket ($11.6k–$47.1k):</span> <strong className="text-white">${Math.round(Math.max(0, Math.min(netTaxableIncome - 11600, 35550)) * 0.12).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>22%+ Higher Brackets:</span> <strong className="text-white">${Math.round(Math.max(0, netTaxableIncome - 47150) * 0.22).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Total Form 1040-NR Tax Liability</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">Tax Due</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Total Federal Tax Owed:</span> <strong className="text-amber-400 font-bold">${Math.round(federalTax).toLocaleString()} USD</strong></div>
                <div className="flex justify-between"><span>IRS ITIN / SSN Obligation:</span> <strong className="text-white">Form W-7 ITIN Required</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net After-Tax Take-Home Income</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Income</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Net After-Tax Income Kept:</span> <strong>${Math.round(netTakeHome).toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Filing Deadline:</span> <strong className="text-emerald-400">June 15 (Form 1040-NR)</strong></div>
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
                IRS 2026/2027 Non-Resident Alien Tax Brackets (Form 1040-NR)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Tax Bracket</th>
                  <th className="p-3.5">Single Non-Resident Income Bracket</th>
                  <th className="p-3.5">Base Tax Owed</th>
                  <th className="p-3.5 rounded-tr-xl">Marginal Tax Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">10% Bracket</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">$0 to $11,600</td>
                  <td className="p-3.5 font-mono">$0 + 10% of amount</td>
                  <td className="p-3.5 font-bold">10%</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">12% Bracket</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">$11,601 to $47,150</td>
                  <td className="p-3.5 font-mono">$1,160 + 12% over $11,600</td>
                  <td className="p-3.5 font-bold">12%</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">22% Bracket</td>
                  <td className="p-3.5 font-mono font-bold text-amber-600">$47,151 to $100,525</td>
                  <td className="p-3.5 font-mono">$5,426 + 22% over $47,150</td>
                  <td className="p-3.5 font-bold">22%</td>
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
              Frequently Asked Questions (US Federal Income Tax)
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
              <Shield size={16} /> ADVAQ US Certified CPA & PTIN Tax Preparer
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              File Form 1040-NR & W-7 ITIN Application with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our IRS Certifying Acceptance Agents (CAA) and US CPAs prepare Form 1040-NR returns and certify ITIN passport documents.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/itin-application"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Get Form 1040-NR & ITIN Filing <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp US Tax CPA
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
