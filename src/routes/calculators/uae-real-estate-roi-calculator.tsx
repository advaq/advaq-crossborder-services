import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Building,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-real-estate-roi-calculator")({
  head: () => ({
    meta: [
      { title: "Dubai Real Estate ROI & Tax Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Dubai real estate ROI calculator. Calculate 4% DLD fee, 2% agency fee, service charges, net rental yields, and 0% capital gains tax.",
      },
      {
        name: "keywords",
        content:
          "dubai real estate roi calculator 2026, dubai property rental yield tax calculator 4 percent dld, 0 capital gains tax property dubai, dld transfer fee calculator 4 percent",
      },
      {
        property: "og:title",
        content: "Dubai Real Estate ROI & Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate net rental yield, DLD transfer fees, and 0% tax savings for Dubai property investments.",
      },
      { property: "og:url", content: "/calculators/uae-real-estate-roi-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-real-estate-roi-calculator" }],
  }),
  component: UAERealEstateROIPage,
});

function UAERealEstateROIPage() {
  const [propertyPriceAED, setPropertyPriceAED] = useState<number>(1500000);
  const [annualRentAED, setAnnualRentAED] = useState<number>(105000);
  const [serviceChargesAED, setServiceChargesAED] = useState<number>(12000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const dldFeeAED = propertyPriceAED * 0.04;
  const agencyFeeAED = propertyPriceAED * 0.02;
  const totalPurchaseCostAED = propertyPriceAED + dldFeeAED + agencyFeeAED;

  const netAnnualIncomeAED = Math.max(0, annualRentAED - serviceChargesAED);
  const netRentalYieldPercent = totalPurchaseCostAED > 0 ? (netAnnualIncomeAED / totalPurchaseCostAED) * 100 : 0;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "Dubai Real Estate ROI Calculator", item: "https://advaq.com/calculators/uae-real-estate-roi-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dubai Real Estate ROI & Tax Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uae-real-estate-roi-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate Dubai Land Department (DLD) 4% transfer fees, 2% broker commissions, HOA service charges, net rental yield, and 0% capital gains tax savings.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the Dubai Land Department (DLD) transfer fee?",
      a: "The Dubai Land Department (DLD) levies a mandatory 4% transfer fee on all real estate purchases in Dubai, typically split 50/50 between buyer and seller or paid fully by the buyer as negotiated.",
    },
    {
      q: "Is rental income or property capital gains subject to tax in Dubai?",
      a: "NO! Rental income earned by individual property owners is 100% tax-free (0% personal income tax). Furthermore, the UAE levies 0% capital gains tax on real estate sales for individual investors.",
    },
    {
      q: "Does purchasing Dubai property qualify for a 10-Year Golden Visa?",
      a: "YES! Investors purchasing real estate in Dubai valued at AED 2,000,000 or more (whether off-plan with developer payment plan or ready property) qualify for a 10-Year Renewable Golden Visa.",
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
            <span>Dubai Real Estate ROI & Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Dubai Real Estate ROI & Tax Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate net rental yield, 4% DLD transfer fees, 2% agency commissions, service charges, and 0% personal tax savings in Dubai.
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
                  Property Purchase Price (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {propertyPriceAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="5000000"
                step="50000"
                value={propertyPriceAED}
                onChange={(e) => setPropertyPriceAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Expected Annual Rental Income (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualRentAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="30000"
                max="400000"
                step="5000"
                value={annualRentAED}
                onChange={(e) => setAnnualRentAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual HOA / Service Charges (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {serviceChargesAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={serviceChargesAED}
                onChange={(e) => setServiceChargesAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Dubai Property ROI Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>DLD Transfer Fee (4%):</span>
                  <span className="font-mono text-white font-semibold">AED {Math.round(dldFeeAED).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Broker Agency Fee (2%):</span>
                  <span className="font-mono text-white font-semibold">AED {Math.round(agencyFeeAED).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Total Purchase Cost:</span>
                  <span className="font-mono text-gold-400 font-semibold">AED {Math.round(totalPurchaseCostAED).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Annual Rental Income:</span>
                  <span className="font-mono text-emerald-400 font-semibold">AED {Math.round(netAnnualIncomeAED).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Net Rental Yield (After Costs & Tax)
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  {netRentalYieldPercent.toFixed(2)}%
                </div>
                <p className="mt-2 text-[11px] text-navy-300">
                  💰 0% Capital Gains Tax & 0% Personal Rental Tax in Dubai!
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ Property Tax Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP DUBAI REAL ESTATE ROI WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Dubai Property ROI & Yield Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Dubai Land Department (DLD) transfer fees, agency fees, net rental yields, and 0% tax benefits.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Total Acquisition Costs (DLD & Agency)</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED {Math.round(totalPurchaseCostAED).toLocaleString()}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Property Purchase Price:</span> <strong className="text-white">AED {propertyPriceAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>DLD 4% Transfer Fee:</span> <strong className="text-white">AED {Math.round(dldFeeAED).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>2% Real Estate Agency Commission:</span> <strong className="text-white">AED {Math.round(agencyFeeAED).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Total Outlay Subtotal:</span> <strong>AED {Math.round(totalPurchaseCostAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Net Annual Rental Cash Flow</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">AED {Math.round(netAnnualIncomeAED).toLocaleString()} Net</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Annual Rent Collected:</span> <strong className="text-white">AED {annualRentAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Annual HOA / Service Charges:</span> <strong className="text-red-400">-AED {serviceChargesAED.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Net Rental Income Subtotal:</span> <strong>AED {Math.round(netAnnualIncomeAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Net Rental Yield % Formula</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{netRentalYieldPercent.toFixed(2)}% Net Yield</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Yield Calculation Formula:</span> <strong className="text-white">(Net Rent / Total Cost) x 100</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Calculated Net ROI Yield:</span> <strong>{netRentalYieldPercent.toFixed(2)}% per year</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: UAE 0% Tax Savings & Golden Visa</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${propertyPriceAED >= 2000000 ? "bg-emerald-500/20 text-emerald-400" : "bg-gold-500/20 text-gold-400"}`}>
                  {propertyPriceAED >= 2000000 ? "10-Yr Golden Visa Eligible ✅" : "0% Personal Tax"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>UAE Personal Rental Income Tax:</span> <strong className="text-emerald-400">0% ($0 Tax)</strong></div>
                <div className="flex justify-between"><span>Property Capital Gains Tax:</span> <strong className="text-emerald-400">0% ($0 Tax)</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>10-Year Golden Visa Threshold:</span> <strong className={propertyPriceAED >= 2000000 ? "text-emerald-400" : "text-navy-300"}>{propertyPriceAED >= 2000000 ? "QUALIFIED (Price >= AED 2M)" : "AED 2M Required"}</strong></div>
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
                Dubai Real Estate Government Fees & Tax Breakdown
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Fee / Tax Element</th>
                  <th className="p-3.5">Government Rate</th>
                  <th className="p-3.5">Calculated Amount (AED)</th>
                  <th className="p-3.5 rounded-tr-xl">Statutory Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className="bg-gold-500/10 font-bold">
                  <td className="p-3.5 text-navy-950">Dubai Land Department (DLD) Transfer Fee</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">4.0% of Property Price</td>
                  <td className="p-3.5 font-mono text-gold-600 font-bold">AED {Math.round(dldFeeAED).toLocaleString()}</td>
                  <td className="p-3.5">Mandatory DLD Registration Fee</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Real Estate Brokerage Commission</td>
                  <td className="p-3.5 font-mono">2.0% + 5% VAT</td>
                  <td className="p-3.5 font-mono">AED {Math.round(agencyFeeAED).toLocaleString()}</td>
                  <td className="p-3.5">Standard RERA Buyer Agency Fee</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Capital Gains Tax on Property Sale</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0.0% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">AED 0</td>
                  <td className="p-3.5">100% Tax Free for Individuals</td>
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
              Frequently Asked Questions (Dubai Real Estate ROI)
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
              <Shield size={16} /> ADVAQ UAE Property & Golden Visa Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Structure Your Dubai Property Investment with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our real estate tax advisors assist international investors with property holding structures, SPV registrations, and 10-Year Real Estate Golden Visa applications.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Consult ADVAQ Property Tax Team <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Property Advisor
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
