import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Globe,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-vs-pakistan-tax-comparison-calculator")({
  head: () => ({
    meta: [
      { title: "UK vs Pakistan Business Tax Comparison Tool (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive tax comparison tool for dual-resident & expat Pakistani founders for 2026/2027. Compare UK LTD dividends vs Pakistan FBR IT Export 0.25% tax exemption under UK-PK Double Tax Treaty.",
      },
      {
        name: "keywords",
        content:
          "uk vs pakistan tax comparison 2026 2027, dual resident tax uk pakistan dtt article 22, fbr 154a 0.25 percent it export tax vs uk ltd dividend, foreign tax credit relief hmrc fbr",
      },
      {
        property: "og:title",
        content: "UK vs Pakistan Business Tax Comparison Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare UK Corporation & Dividend Tax side-by-side with Pakistan FBR IT Export 0.25% tax exemption under UK-PK Double Tax Treaty.",
      },
      { property: "og:url", content: "/calculators/uk-vs-pakistan-tax-comparison-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-vs-pakistan-tax-comparison-calculator" }],
  }),
  component: UKVsPakistanTaxComparisonPage,
});

function UKVsPakistanTaxComparisonPage() {
  const [annualProfitGbp, setAnnualProfitGbp] = useState<number>(50000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pkrExchangeRate = 350;

  const salary = Math.min(annualProfitGbp, 12570);
  const profitForCt = Math.max(0, annualProfitGbp - salary);
  const ukCt = profitForCt * 0.19;
  const netDiv = profitForCt - ukCt;
  const taxableDiv = Math.max(0, netDiv - 500);
  const ukDivTax = taxableDiv > 37700 ? 37700 * 0.1075 + (taxableDiv - 37700) * 0.3575 : taxableDiv * 0.1075;
  const ukTotalTaxGbp = ukCt + ukDivTax;
  const ukNetTakeHomeGbp = annualProfitGbp - ukTotalTaxGbp;

  const pkFbrTaxGbp = annualProfitGbp * 0.0025;
  const pkNetTakeHomeGbp = annualProfitGbp - pkFbrTaxGbp;
  const pkAdvantageGbp = pkNetTakeHomeGbp - ukNetTakeHomeGbp;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK vs Pakistan Tax Comparison Calculator", item: "https://advaq.com/calculators/uk-vs-pakistan-tax-comparison-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK vs Pakistan Business Tax Comparison Tool (2026/2027)",
    url: "https://advaq.com/calculators/uk-vs-pakistan-tax-comparison-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare UK Corporation Tax and Dividend tax with Pakistan FBR Section 154A 0.25% IT export tax under the UK-Pakistan Double Tax Treaty.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "How does the UK-Pakistan Double Taxation Agreement (DTT) prevent double taxation?",
      a: "Under the UK-Pakistan DTT (Article 22), dual-resident individuals and international founders receive Foreign Tax Credit relief. If you pay taxes to FBR in Pakistan, HMRC grants a credit against your UK tax liability for that same income, eliminating double taxation.",
    },
    {
      q: "Why is Pakistan FBR Section 154A 0.25% tax rate beneficial for IT exporters?",
      a: "Pakistan FBR Section 154A grants registered IT and software exporters a concessionary 0.25% final withholding tax rate on foreign currency remittances, plus 50% foreign currency retention in SBP FCVA accounts.",
    },
    {
      q: "Can a dual-resident founder operate both a UK LTD and a Pakistan SECP company?",
      a: "Yes. Many international software founders use a UK LTD for customer invoicing and payment gateways (Stripe, Wise) while contracting their Pakistani SECP software entity to perform technical development, achieving optimal tax efficiency.",
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
            <span>UK vs Pakistan Tax Comparison</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            🇬🇧 UK vs 🇵🇰 Pakistan Tax Comparison Tool (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Side-by-side tax comparison for dual-resident & expat Pakistani founders: UK LTD dividends vs Pakistan FBR 0.25% IT Export Exemption.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className="max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border">
            <div className="flex justify-between items-center mb-1">
              <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                Annual International Profit (£ GBP):
              </label>
              <span className="font-mono text-gold-600 font-bold text-lg">
                £{annualProfitGbp.toLocaleString()} ({(annualProfitGbp * pkrExchangeRate / 1000000).toFixed(2)}M PKR)
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="200000"
              step="5000"
              value={annualProfitGbp}
              onChange={(e) => setAnnualProfitGbp(Number(e.target.value))}
              className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-2xl p-6 bg-white space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇬🇧</span>
                  <h3 className="font-serif font-bold text-navy-950 text-lg">UK LTD Structure</h3>
                </div>
                <span className="text-xs bg-navy-100 text-navy-900 px-3 py-1 rounded-full font-medium">HMRC Rules</span>
              </div>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Corporation Tax (19%):</span>
                  <strong className="font-mono">£{Math.round(ukCt).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Director Dividend Tax:</span>
                  <strong className="font-mono">£{Math.round(ukDivTax).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-border font-semibold text-navy-950">
                  <span>Total UK Tax Bill:</span>
                  <strong className="font-mono text-gold-600">£{Math.round(ukTotalTaxGbp).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-border text-sm font-bold text-navy-950">
                  <span>Net Take-Home Pay:</span>
                  <strong className="font-mono text-emerald-600">£{Math.round(ukNetTakeHomeGbp).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-2xl p-6 bg-navy-950 text-white space-y-4 shadow-lg">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇵🇰</span>
                  <h3 className="font-serif font-bold text-white text-lg">Pakistan IT Exporter</h3>
                </div>
                <span className="text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium">FBR 154A 0.25%</span>
              </div>
              <div className="space-y-2 text-xs text-navy-200">
                <div className="flex justify-between">
                  <span>FBR Sec 154A Final Tax (0.25%):</span>
                  <strong className="font-mono text-emerald-400">£{Math.round(pkFbrTaxGbp).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>SECP & PSEB Annual Compliance:</span>
                  <strong className="font-mono text-white">~£200</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 font-semibold text-white">
                  <span>Total Pakistan Tax Bill:</span>
                  <strong className="font-mono text-gold-400">£{Math.round(pkFbrTaxGbp + 200).toLocaleString()}</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white">
                  <span>Net Take-Home Pay:</span>
                  <strong className="font-mono text-emerald-400">£{Math.round(pkNetTakeHomeGbp - 200).toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-off-white border border-border p-5 rounded-xl text-xs space-y-2 text-navy-950">
            <h4 className="font-serif font-bold text-sm flex items-center gap-2">
              <Shield size={16} className="text-gold-500" />
              UK-Pakistan Double Taxation Treaty (Article 22)
            </h4>
            <p className="text-gray-600 leading-relaxed">
              If you are resident in both UK and Pakistan, Article 22 of the Double Taxation Agreement ensures you never pay double tax. UK HMRC grants full Foreign Tax Credit relief for tax already paid to FBR Pakistan.
            </p>
          </div>

          <div className="pt-4 text-center">
            <Link to="/contact" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Book Cross-Border Structure Review <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP CROSS BORDER TAX WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step UK vs Pakistan Cross-Border Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of tax differential & DTT Article 22 foreign tax relief under £{annualProfitGbp.toLocaleString()} profit.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: UK LTD Tax Breakdown</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(ukTotalTaxGbp).toLocaleString()} UK Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Corporation Tax (19%):</span> <strong className="text-white">£{Math.round(ukCt).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Director Dividend Tax:</span> <strong className="text-white">£{Math.round(ukDivTax).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>UK Net Take-Home:</span> <strong>£{Math.round(ukNetTakeHomeGbp).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Pakistan FBR Sec 154A IT Export</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">0.25% Final Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>FBR IT Export Final Tax (0.25%):</span> <strong className="text-emerald-400">£{Math.round(pkFbrTaxGbp).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>SECP / PSEB Compliance:</span> <strong className="text-white">~£200</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Pakistan Net Take-Home:</span> <strong>£{Math.round(pkNetTakeHomeGbp - 200).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 50% foreign currency retention in SBP FCVA accounts.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Double Tax Treaty (DTT Article 22)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Credit Protected</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>UK-Pakistan DTT Protection:</span> <strong className="text-emerald-400">Article 22 Active ✅</strong></div>
                <div className="flex justify-between"><span>HMRC Foreign Tax Credit:</span> <strong className="text-white">Full Credit for FBR Tax</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Eliminates double taxation under statutory UK-PK international tax law.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net Cross-Border Advantage</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Advantage</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-emerald-400 font-bold"><span>Pakistan FBR Structure Advantage:</span> <strong>+£{Math.round(pkAdvantageGbp).toLocaleString()} / yr</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Hybrid UK-PK Structure Option:</span> <strong>Invoicing UK LTD + R&D PK Entity</strong></div>
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
                UK vs Pakistan Dual-Jurisdiction Tax Summary (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Feature / Tax Head</th>
                  <th className="p-3.5">UK Limited Company</th>
                  <th className="p-3.5">Pakistan FBR IT Exporter</th>
                  <th className="p-3.5 rounded-tr-xl">DTT Relief Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Corporate Tax Rate</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">19% – 25%</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">0.25% Final WHT (Sec 154A)</td>
                  <td className="p-3.5">Article 22 Credit</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Director Dividend Tax</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">8.75% / 33.75% / 39.35%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">Included in 0.25% Final Tax</td>
                  <td className="p-3.5">DTT Dividend Credit</td>
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
              Frequently Asked Questions (UK vs Pakistan Tax)
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
              <Shield size={16} /> ADVAQ UK & Pakistan Dual-Qualified Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Need Cross-Border Tax Structuring (UK & Pakistan)?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our dual-qualified UK chartered accountants & Pakistan FBR tax consultants structure compliant hybrid entities, manage Stripe/Wise invoicing, and claim Article 22 Double Tax Treaty relief.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Book Cross-Border Review <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Cross-Border Partner
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
