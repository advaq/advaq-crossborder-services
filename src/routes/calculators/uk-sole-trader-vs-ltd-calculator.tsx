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
  Scale,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-sole-trader-vs-ltd-calculator")({
  head: () => ({
    meta: [
      { title: "UK Sole Trader vs LTD Company Tax & Take-Home Pay Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Sole Trader vs Limited Company tax calculator for 2026/2027. Compare Income Tax, Class 2/4 NICs, Corporation Tax, dividend tax rates, and net take-home pay.",
      },
      {
        name: "keywords",
        content:
          "uk sole trader vs ltd tax calculator 2026 2027, sole trader vs limited company take home pay, is it better to be sole trader or ltd company uk breakeven, director salary vs sole trader national insurance",
      },
      {
        property: "og:title",
        content: "UK Sole Trader vs LTD Company Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare exact tax savings and net income between operating as a Sole Trader vs UK Limited Company.",
      },
      { property: "og:url", content: "/calculators/uk-sole-trader-vs-ltd-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-sole-trader-vs-ltd-calculator" }],
  }),
  component: UKSoleTraderVsLTDCalculatorPage,
});

function UKSoleTraderVsLTDCalculatorPage() {
  const [annualProfit, setAnnualProfit] = useState<number>(60000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const personalAllowance = 12570;
  const taxableProfitSoleTrader = Math.max(0, annualProfit - personalAllowance);

  let soleTraderIncomeTax = 0;
  if (taxableProfitSoleTrader <= 37700) {
    soleTraderIncomeTax = taxableProfitSoleTrader * 0.2;
  } else if (taxableProfitSoleTrader <= 112570) {
    soleTraderIncomeTax = 37700 * 0.2 + (taxableProfitSoleTrader - 37700) * 0.4;
  } else {
    soleTraderIncomeTax =
      37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableProfitSoleTrader - 112570) * 0.45;
  }

  let class4NI = 0;
  if (annualProfit > 12570) {
    const niBand1 = Math.min(Math.max(0, annualProfit - 12570), 37700);
    const niBand2 = Math.max(0, annualProfit - 50270);
    class4NI = niBand1 * 0.06 + niBand2 * 0.02;
  }

  const soleTraderTotalTax = soleTraderIncomeTax + class4NI;
  const soleTraderTakeHome = annualProfit - soleTraderTotalTax;

  const directorSalary = Math.min(annualProfit, 12570);
  const profitBeforeCT = Math.max(0, annualProfit - directorSalary);

  let ltdCorporationTax = 0;
  if (profitBeforeCT <= 50000) {
    ltdCorporationTax = profitBeforeCT * 0.19;
  } else if (profitBeforeCT >= 250000) {
    ltdCorporationTax = profitBeforeCT * 0.25;
  } else {
    const mainTax = profitBeforeCT * 0.25;
    const relief = (250000 - profitBeforeCT) * (3 / 200);
    ltdCorporationTax = mainTax - relief;
  }

  const netDividends = Math.max(0, profitBeforeCT - ltdCorporationTax);
  const unusedPA = Math.max(0, personalAllowance - directorSalary);
  const dividendAllowance = 500;
  const taxableDividends = Math.max(0, netDividends - unusedPA - dividendAllowance);

  let dividendTax = 0;
  if (taxableDividends <= 37700) {
    dividendTax = taxableDividends * 0.1075;
  } else if (taxableDividends <= 112570) {
    dividendTax = 37700 * 0.1075 + (taxableDividends - 37700) * 0.3575;
  } else {
    dividendTax =
      37700 * 0.1075 + (112570 - 37700) * 0.3575 + (taxableDividends - 112570) * 0.3935;
  }

  const ltdTotalTax = ltdCorporationTax + dividendTax;
  const ltdTakeHome = annualProfit - ltdTotalTax;
  const ltdExtraSavings = ltdTakeHome - soleTraderTakeHome;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Sole Trader vs LTD Calculator", item: "https://advaq.com/calculators/uk-sole-trader-vs-ltd-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Sole Trader vs Limited Company Tax Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-sole-trader-vs-ltd-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare UK Sole Trader vs Limited Company tax efficiency, National Insurance savings, Corporation Tax, and net take-home pay.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "At what profit level is it better to switch from Sole Trader to a UK Limited Company?",
      a: "In the UK, forming a Limited Company typically becomes tax-superior once your annual net profits reach approximately £28,000 to £30,000 per year. Above this threshold, savings on Class 4 National Insurance and lower basic dividend tax rates outweigh company accounting costs.",
    },
    {
      q: "What is the key legal difference between a Sole Trader and a Limited Company?",
      a: "As a Sole Trader, there is no legal separation between you and your business—you have unlimited personal liability for business debts. A Limited Company is a separate legal entity, providing limited liability protection to safeguard your personal assets.",
    },
    {
      q: "How does National Insurance differ between Sole Traders and LTD Directors?",
      a: "Sole traders pay 6% Class 4 NI on profits between £12,570 and £50,270 (and 2% above). LTD Directors taking an optimal salary of £12,570 + dividends pay 0% Employee NI and 0% Class 4 NI on dividends, resulting in significant annual NI savings.",
    },
    {
      q: "What extra annual compliance is required for a UK Limited Company?",
      a: "UK Limited Companies must submit annual statutory accounts and a Confirmation Statement to Companies House, plus a CT600 Corporation Tax return to HMRC. Sole traders only submit an annual Self Assessment tax return.",
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
            <span>Sole Trader vs LTD</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Sole Trader vs Limited Company Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Compare side-by-side tax liability, National Insurance, Corporation Tax, and net take-home pay between Sole Trader and UK LTD.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className="bg-navy-950 text-white p-5 rounded-xl border border-gold-500/40 text-center shadow-lg">
            <div className="flex items-center justify-center gap-2 text-gold-500 text-xs font-semibold uppercase tracking-widest mb-1">
              <Sparkles size={16} />
              <span>LTD Breakeven Analysis</span>
            </div>
            <p className="font-serif text-xl sm:text-2xl text-white font-semibold">
              {annualProfit >= 28000 ? (
                <>
                  At <span className="text-gold-400">£{annualProfit.toLocaleString()} profit</span>, forming a UK LTD saves you <span className="text-emerald-400 font-mono">£{Math.round(ltdExtraSavings).toLocaleString()}/year</span> net vs Sole Trader!
                </>
              ) : (
                <>
                  At <span className="text-gold-400">£{annualProfit.toLocaleString()} profit</span>, Sole Trader is simpler. The breakeven point where a UK LTD becomes tax-superior is <span className="text-gold-400 font-mono">~£28,000/year</span> profit.
                </>
              )}
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border">
            <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider block">
              Annual Net Profit Before Tax (£):
            </label>
            <div className="text-4xl font-serif font-bold text-gold-600">
              £{annualProfit.toLocaleString()}
            </div>
            <input
              type="range"
              min="15000"
              max="200000"
              step="5000"
              value={annualProfit}
              onChange={(e) => setAnnualProfit(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>£15,000</span>
              <span>£100,000</span>
              <span>£200,000</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border rounded-xl p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-border">
                  <h3 className="font-serif text-xl font-semibold text-navy-950">Operating as Sole Trader</h3>
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">Self-Employed</span>
                </div>

                <div className="space-y-3 text-xs text-gray-700 mb-6">
                  <div className="flex justify-between">
                    <span>Income Tax (20% / 40%):</span>
                    <strong className="font-mono text-navy-950">£{Math.round(soleTraderIncomeTax).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Class 4 National Insurance (6%):</span>
                    <strong className="font-mono text-navy-950">£{Math.round(class4NI).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border font-semibold text-sm">
                    <span>Total Tax & NI Paid:</span>
                    <strong className="font-mono text-red-600">£{Math.round(soleTraderTotalTax).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 p-4 rounded-xl text-center border border-navy-100">
                <span className="text-xs text-navy-600 uppercase font-semibold block mb-1">Net Take-Home Pay</span>
                <div className="text-3xl font-serif font-bold text-navy-950">
                  £{Math.round(soleTraderTakeHome).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-bl-xl">
                Most Tax Efficient
              </div>

              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                  <h3 className="font-serif text-xl font-semibold text-white">Operating as UK LTD</h3>
                  <span className="text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium">Director Salary + Dividends</span>
                </div>

                <div className="space-y-3 text-xs text-navy-200 mb-6">
                  <div className="flex justify-between">
                    <span>Corporation Tax (19%):</span>
                    <strong className="font-mono text-white">£{Math.round(ltdCorporationTax).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Dividend Tax (10.75%+):</span>
                    <strong className="font-mono text-white">£{Math.round(dividendTax).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between pt-2 border-white/10 font-semibold text-sm">
                    <span>Total Tax Paid:</span>
                    <strong className="font-mono text-gold-400">£{Math.round(ltdTotalTax).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-4 rounded-xl text-center">
                <span className="text-xs text-gold-500 uppercase font-semibold block mb-1">Net Take-Home Pay</span>
                <div className="text-3xl font-serif font-bold text-white">
                  £{Math.round(ltdTakeHome).toLocaleString()}
                </div>
                {ltdExtraSavings > 0 && (
                  <div className="mt-2 text-xs text-emerald-400 font-semibold">
                    🎉 Save £{Math.round(ltdExtraSavings).toLocaleString()} extra per year with UK LTD!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP SOLE TRADER VS LTD WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Sole Trader vs LTD Comparison Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof comparing tax efficiency for £{annualProfit.toLocaleString()} annual profit.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Sole Trader Calculation</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">£{Math.round(soleTraderTotalTax).toLocaleString()} Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Profit:</span> <strong className="text-white">£{annualProfit.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Income Tax (20%/40%):</span> <strong className="text-navy-300">£{Math.round(soleTraderIncomeTax).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Class 4 NI (6%/2%):</span> <strong className="text-navy-300">£{Math.round(class4NI).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Sole Trader Net Take-Home:</span> <strong>£{Math.round(soleTraderTakeHome).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Sole traders pay Income Tax + Class 4 NI on 100% of profit above Personal Allowance.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Limited Company Structure</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(ltdCorporationTax).toLocaleString()} CT</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Profit:</span> <strong className="text-white">£{annualProfit.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Director Salary (-100% Expense):</span> <strong className="text-emerald-400">-£{directorSalary.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Taxable Company Profit:</span> <strong className="text-navy-300">£{profitBeforeCT.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Available Dividends:</span> <strong>£{Math.round(netDividends).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Director salary reduces taxable profit before Corporation Tax is calculated.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Dividend Tax Extraction</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(dividendTax).toLocaleString()} Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Dividends Extracted:</span> <strong className="text-white">£{Math.round(netDividends).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Taxable Dividends (after £500):</span> <strong className="text-navy-300">£{taxableDividends.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Dividend Tax (10.75%+):</span> <strong className="text-gold-400">£{Math.round(dividendTax).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>LTD Net Take-Home:</span> <strong>£{Math.round(ltdTakeHome).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Dividends incur 0% Class 4 NI and enjoy 10.75% basic rate.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Net Advantage</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Comparison Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Sole Trader Take-Home:</span> <strong className="text-white">£{Math.round(soleTraderTakeHome).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>LTD Take-Home:</span> <strong className="text-white">£{Math.round(ltdTakeHome).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Net Annual LTD Extra Savings:</span> <strong>+£{Math.round(ltdExtraSavings).toLocaleString()}/yr</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Operating as UK LTD is {ltdExtraSavings > 0 ? "tax superior" : "less beneficial"} at £{annualProfit.toLocaleString()} profit.
              </p>
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
              Frequently Asked Questions (Sole Trader vs LTD)
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
              Ready to Incorporate a UK Limited Company & Save Taxes?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK chartered team handles complete LTD company registration, Companies House filings, HMRC tax setup, and director payroll configuration.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Form UK LTD with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Structuring Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
