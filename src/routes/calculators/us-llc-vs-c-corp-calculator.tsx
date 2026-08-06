import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Scale,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-llc-vs-c-corp-calculator")({
  head: () => ({
    meta: [
      { title: "US LLC vs C-Corporation Tax & Structure Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC vs C-Corp tax comparison calculator. Compare 0% foreign pass-through LLC tax vs 21% US corporate tax for C-Corporations.",
      },
      {
        name: "keywords",
        content:
          "us llc vs c corp tax calculator 2026, foreign founder llc vs c corporation comparison, Delaware c corp vs Wyoming llc non resident, double taxation c-corp dividend",
      },
      {
        property: "og:title",
        content: "US LLC vs C-Corporation Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare tax burden, VC fundraising eligibility, and annual compliance between LLC and C-Corp.",
      },
      { property: "og:url", content: "/calculators/us-llc-vs-c-corp-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-llc-vs-c-corp-calculator" }],
  }),
  component: USLLCVsCCorpCalculatorPage,
});

function USLLCVsCCorpCalculatorPage() {
  const [annualProfit, setAnnualProfit] = useState<number>(100000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const llcTax = 0;
  const llcTakeHome = annualProfit - llcTax;

  const cCorpTax = annualProfit * 0.21;
  const cCorpNetAfterTax = annualProfit - cCorpTax;
  const cCorpDividendTax = cCorpNetAfterTax * 0.3;
  const cCorpTakeHome = cCorpNetAfterTax - cCorpDividendTax;

  const taxDifference = llcTakeHome - cCorpTakeHome;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US LLC vs C-Corp Calculator", item: "https://advaq.com/calculators/us-llc-vs-c-corp-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US LLC vs C-Corporation Tax Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-llc-vs-c-corp-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare Single-Member US LLC pass-through tax efficiency against Delaware C-Corporation 21% flat tax and 30% dividend withholding tax.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Why is a Single-Member LLC better for bootstrapped foreign founders?",
      a: "A foreign-owned Single-Member LLC is treated as a disregarded pass-through entity by the IRS. If you have no physical presence (ETBUS) in the US, net profits pass through to you tax-free at the federal level (0% US income tax).",
    },
    {
      q: "What is double taxation in a US C-Corporation?",
      a: "A C-Corporation pays 21% flat federal corporate tax on net profits. When remaining profits are distributed to foreign shareholders as dividends, an additional 30% US dividend withholding tax applies, creating 'double taxation'.",
    },
    {
      q: "Why do US venture capitalists insist on Delaware C-Corporations?",
      a: "VC funds and incubators like Y Combinator cannot invest in LLC pass-through entities due to fund mandate rules. They require standard stock classes (Preferred Shares), stock option pools (ESOP), and Delaware Court of Chancery governance.",
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
            <span>LLC vs C-Corp Comparison</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US LLC vs C-Corporation Tax Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Compare 0% pass-through tax efficiency of a foreign-owned US LLC against the 21% corporate tax rate of a Delaware C-Corp.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border">
            <label className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider block">
              Annual US Business Net Profit ($):
            </label>
            <div className="text-4xl font-serif font-bold text-gold-600">
              ${annualProfit.toLocaleString()} USD
            </div>
            <input
              type="range"
              min="20000"
              max="500000"
              step="10000"
              value={annualProfit}
              onChange={(e) => setAnnualProfit(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white flex flex-col justify-between relative shadow-lg">
              <div className="absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-bl-xl">
                Best for Bootstrapped / Agencies
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-2">Single-Member US LLC</h3>
                <p className="text-xs text-navy-200 mb-6">Pass-through entity. 0% US Federal Income Tax for non-residents without ETBUS.</p>

                <div className="space-y-3 text-xs text-navy-200 mb-6">
                  <div className="flex justify-between">
                    <span>US Corporate Tax Rate:</span>
                    <strong className="font-mono text-emerald-400">0% (Pass-through)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Total US Federal Tax Paid:</span>
                    <strong className="font-mono text-emerald-400">$0 USD</strong>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-4 rounded-xl text-center">
                <span className="text-xs text-gold-500 uppercase font-semibold block mb-1">Net Owner Take-Home</span>
                <div className="text-3xl font-serif font-bold text-white">
                  ${llcTakeHome.toLocaleString()} USD
                </div>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-semibold text-navy-950 mb-2">Delaware C-Corporation</h3>
                <p className="text-xs text-gray-600 mb-6">Required for US VC fundraising & stock option pools. Subject to double taxation.</p>

                <div className="space-y-3 text-xs text-gray-700 mb-6">
                  <div className="flex justify-between">
                    <span>21% Federal Corporate Tax:</span>
                    <strong className="font-mono text-red-600">${Math.round(cCorpTax).toLocaleString()}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>30% Dividend Withholding Tax:</span>
                    <strong className="font-mono text-red-600">${Math.round(cCorpDividendTax).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 p-4 rounded-xl text-center border border-navy-100">
                <span className="text-xs text-navy-600 uppercase font-semibold block mb-1">Net Owner Take-Home</span>
                <div className="text-3xl font-serif font-bold text-navy-950">
                  ${Math.round(cCorpTakeHome).toLocaleString()} USD
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need Structure Advice from a US Tax Attorney?</h4>
              <p className="text-xs text-gray-600">Form Wyoming LLC or Delaware C-Corp with full tax structuring.</p>
            </div>
            <Link to="/us-services/wyoming-llc-formation" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Form US Entity with ADVAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US LLC VS C-CORP TAX WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step LLC vs C-Corp Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of corporate tax, dividend withholding, and net founder take-home income.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross Net Profit Base</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">${annualProfit.toLocaleString()} Net</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Net Revenue:</span> <strong className="text-white">${annualProfit.toLocaleString()} USD</strong></div>
                <div className="flex justify-between"><span>LLC IRS Status:</span> <strong className="text-emerald-400">Disregarded Pass-Through</strong></div>
                <div className="flex justify-between"><span>C-Corp IRS Status:</span> <strong className="text-amber-400">Subchapter C Entity</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Federal Corporate Tax (21%)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">LLC $0 Tax ✅</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>LLC Corporate Tax (0%):</span> <strong className="text-emerald-400">$0 USD</strong></div>
                <div className="flex justify-between"><span>C-Corp Corporate Tax (21%):</span> <strong className="text-red-400">${Math.round(cCorpTax).toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>C-Corp Retained Earnings:</span> <strong className="text-gold-400">${Math.round(cCorpNetAfterTax).toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Dividend Withholding Tax (30%)</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Double Tax ⚠️</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>LLC Owner Distribution Tax:</span> <strong className="text-emerald-400">$0 USD (0% Pass-Through)</strong></div>
                <div className="flex justify-between"><span>C-Corp Dividend Tax (30%):</span> <strong className="text-red-400">${Math.round(cCorpDividendTax).toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net Founder Take-Home Advantage</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">LLC Saves ${Math.round(taxDifference).toLocaleString()}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>LLC Net Take-Home Pay:</span> <strong>${llcTakeHome.toLocaleString()} USD</strong></div>
                <div className="flex justify-between text-navy-300"><span>C-Corp Net Take-Home Pay:</span> <strong>${Math.round(cCorpTakeHome).toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>LLC Extra Annual Profit Kept:</span> <strong>+${Math.round(taxDifference).toLocaleString()} USD</strong></div>
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
                US LLC vs C-Corporation Decision Matrix (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Entity Metric</th>
                  <th className="p-3.5">Single-Member US LLC</th>
                  <th className="p-3.5 rounded-tr-xl">Delaware C-Corporation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">IRS Taxation Model</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">Pass-Through Disregarded Entity ✅</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">Subchapter C Entity (Double Tax) ⚠️</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Federal Income Tax Rate</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% (For non-residents w/o ETBUS)</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">21% Flat Corporate Tax</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Dividend Withholding Tax</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% (No Dividend Tax)</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">30% Non-Resident Withholding</td>
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
              Frequently Asked Questions (US Structure Choice)
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
              <Shield size={16} /> ADVAQ US Tax & Entity Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Form Your Optimized US Entity Online Today
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Whether incorporating a 0% tax Wyoming LLC or a VC-ready Delaware C-Corp, ADVAQ provides end-to-end legal drafting, EIN, and banking setup.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Incorporate US Business with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp US Entity Advisor
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
