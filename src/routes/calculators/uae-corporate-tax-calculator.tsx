import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-corporate-tax-calculator")({
  head: () => ({
    meta: [
      { title: "UAE 9% Corporate Tax & Small Business Relief Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Corporate Tax calculator. Calculate 0% tax threshold (AED 375k profit / AED 3M revenue relief) vs 9% Corporate Tax liability.",
      },
      {
        name: "keywords",
        content:
          "uae corporate tax calculator 9 percent 2026, small business relief sbr uae corporate tax 3 million revenue, dubai freezone 0 tax threshold calculator, fta corporate tax rates uae",
      },
      {
        property: "og:title",
        content: "UAE 9% Corporate Tax & Small Business Relief Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate 0% tax thresholds, Small Business Relief eligibility, and 9% UAE Corporate Tax liability.",
      },
      { property: "og:url", content: "/calculators/uae-corporate-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-corporate-tax-calculator" }],
  }),
  component: UAETaxCalculatorPage,
});

function UAETaxCalculatorPage() {
  const [annualRevenueAED, setAnnualRevenueAED] = useState<number>(1500000);
  const [annualNetProfitAED, setAnnualNetProfitAED] = useState<number>(450000);
  const [isQFZP, setIsQFZP] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isEligibleForSBR = annualRevenueAED <= 3000000;

  const taxableProfitAbove375k = Math.max(0, annualNetProfitAED - 375000);
  let standardCorporateTaxAED = taxableProfitAbove375k * 0.09;

  if (isQFZP) {
    standardCorporateTaxAED = 0;
  }

  const taxWithSBRAED = isEligibleForSBR || isQFZP ? 0 : standardCorporateTaxAED;
  const sbrSavingsAED = isEligibleForSBR || isQFZP ? standardCorporateTaxAED : 0;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE 9% Corporate Tax Calculator", item: "https://advaq.com/calculators/uae-corporate-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE 9% Corporate Tax & Small Business Relief Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uae-corporate-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UAE 9% Corporate Tax liability, AED 375,000 0% tax threshold, and AED 3M Small Business Relief (SBR) tax savings under Federal Decree-Law No. 47 of 2022.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the 0% UAE Corporate Tax profit threshold?",
      a: "Under Federal Decree-Law No. 47 of 2022, taxable net profit up to AED 375,000 is subject to 0% Corporate Tax. Taxable profit exceeding AED 375,000 is taxed at a flat rate of 9%.",
    },
    {
      q: "How does Ministerial Decision No. 73 Small Business Relief (SBR) work?",
      a: "Resident taxable persons with annual revenue of AED 3,000,000 or less in the relevant tax period can elect Small Business Relief, allowing them to be treated as having no taxable income and paying 0% Corporate Tax.",
    },
    {
      q: "Are all UAE companies required to register for Corporate Tax?",
      a: "YES! All UAE mainland companies, free zone companies, and foreign entities having a Permanent Establishment (PE) in the UAE must register with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN).",
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
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>UAE Corporate Tax & SBR Relief</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE 9% Corporate Tax & Small Business Relief Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your exact UAE Corporate Tax liability, 0% threshold (under AED 375,000 profit), and AED 3M Small Business Relief (SBR) tax savings.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isEligibleForSBR
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-navy-900 border-gold-500 text-white"
            }`}
          >
            <CheckCircle2 className="text-gold-500 shrink-0" size={40} />
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isEligibleForSBR
                  ? "🎉 Eligible for 0% Corporate Tax via Small Business Relief (SBR)!"
                  : "Standard 9% Corporate Tax Rate Applies (Revenue > AED 3M)"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isEligibleForSBR
                  ? `Your revenue (AED ${(annualRevenueAED / 1000000).toFixed(2)}M) is below AED 3 Million limit. By electing Small Business Relief, your UAE Corporate Tax is AED 0!`
                  : `Your revenue exceeds the AED 3 Million SBR limit. The standard 9% tax applies on net profits exceeding AED 375,000.`}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Revenue (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualRevenueAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="6000000"
                step="100000"
                value={annualRevenueAED}
                onChange={(e) => setAnnualRevenueAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                SBR Exemption Limit: AED 3,000,000.
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Net Taxable Profit (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualNetProfitAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="50000"
                value={annualNetProfitAED}
                onChange={(e) => setAnnualNetProfitAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                0% Threshold: AED 375,000 profit.
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-3">
              <span className="text-xs font-semibold text-gray-500 uppercase">Standard Corporate Tax (Without SBR)</span>
              <div className="text-3xl font-serif font-bold text-navy-950">
                AED {Math.round(standardCorporateTaxAED).toLocaleString()}
              </div>
              <p className="text-xs text-gray-600">Calculated as 9% on profit above AED 375k.</p>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-3 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">Net Corporate Tax Payable (With SBR Election)</span>
              <div className="text-3xl font-serif font-bold text-white">
                AED {Math.round(taxWithSBRAED).toLocaleString()}
              </div>
              {isEligibleForSBR && (
                <p className="text-xs text-emerald-400 font-semibold">
                  🎉 Small Business Relief saves you AED {Math.round(sbrSavingsAED).toLocaleString()}!
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need FTA Corporate Tax Registration & SBR Election?</h4>
              <p className="text-xs text-gray-600">Official FTA TRN registration & Small Business Relief filing.</p>
            </div>
            <Link to="/uae-services/corporate-tax-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Register Corporate Tax with ADVAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP UAE CORPORATE TAX WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step UAE Corporate Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Federal Decree-Law No. 47 of 2022 corporate tax brackets and SBR election.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Revenue & SBR Threshold Audit</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isEligibleForSBR ? "bg-emerald-500/20 text-emerald-400" : "bg-gold-500/20 text-gold-400"}`}>
                  {isEligibleForSBR ? "SBR Eligible ✅" : "Exceeds SBR"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Gross Revenue:</span> <strong className="text-white">AED {annualRevenueAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Ministerial Decision 73 SBR Cap:</span> <strong className="text-emerald-400">AED 3,000,000</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Net Profit & 0% Bracket Assessment</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED 375k Exemption</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Net Taxable Profit:</span> <strong className="text-white">AED {annualNetProfitAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>0% Exemption Profit Threshold:</span> <strong className="text-emerald-400">AED 375,000</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Taxable Base Above 375k:</span> <strong>AED {taxableProfitAbove375k.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Standard 9% Corporate Tax</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">9% Statutory Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Statutory 9% Tax Rate:</span> <strong className="text-white">9% on Profit &gt; AED 375k</strong></div>
                <div className="flex justify-between"><span>Unadjusted Standard Tax:</span> <strong className="text-amber-400">AED {Math.round(standardCorporateTaxAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net Corporate Tax Payable</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">AED {Math.round(taxWithSBRAED)} Owed</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Net FTA Tax Payable:</span> <strong>AED {Math.round(taxWithSBRAED).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Small Business Relief Savings:</span> <strong>AED {Math.round(sbrSavingsAED).toLocaleString()}</strong></div>
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
                UAE Corporate Tax Rate & Exemption Threshold Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Business Tax Category</th>
                  <th className="p-3.5">Net Profit Bracket</th>
                  <th className="p-3.5">Corporate Tax Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Statutory Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className="bg-gold-500/10 font-bold">
                  <td className="p-3.5 text-navy-950">Small Business Relief (SBR)</td>
                  <td className="p-3.5 font-mono text-emerald-600">Revenue &le; AED 3,000,000</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% Corporate Tax ✅</td>
                  <td className="p-3.5">Ministerial Decision No. 73</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">0% Profit Threshold</td>
                  <td className="p-3.5 font-mono text-emerald-600">Net Profit &le; AED 375,000</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% Corporate Tax ✅</td>
                  <td className="p-3.5">Decree-Law No. 47 (Art. 3)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Standard Corporate Tax</td>
                  <td className="p-3.5 font-mono text-amber-600 font-bold">Net Profit &gt; AED 375,000</td>
                  <td className="p-3.5 font-mono text-amber-600 font-bold">9% on excess profit</td>
                  <td className="p-3.5">Decree-Law No. 47 (Art. 3)</td>
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
              Frequently Asked Questions (UAE Corporate Tax)
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
              <Shield size={16} /> ADVAQ FTA Registered Tax Agency
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Register Corporate Tax & Elect SBR Relief with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our FTA Registered Tax Agents register your company with the FTA, obtain your TRN, and file your Small Business Relief elections to secure 0% corporate tax status.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uae-services/corporate-tax-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Register Corporate Tax with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp FTA Tax Agent
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
