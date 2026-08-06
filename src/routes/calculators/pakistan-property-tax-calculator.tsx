import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Building,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-property-tax-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan Property Tax & WHT Calculator (236K & 236C) (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan property tax calculator. Calculate Section 236K buyer WHT (3% vs 10.5%), Section 236C seller WHT, Stamp Duty, and CVT fees.",
      },
      {
        name: "keywords",
        content:
          "pakistan property tax calculator 2026, section 236k buyer wht filer non filer, section 236c seller wht rate, property transfer stamp duty cvt pakistan, section 7e deemed income tax property",
      },
      {
        property: "og:title",
        content: "Pakistan Property Tax & WHT Calculator (236K & 236C) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact property buyer and seller withholding tax (Section 236K / 236C) for Filers and Non-Filers.",
      },
      { property: "og:url", content: "/calculators/pakistan-property-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-property-tax-calculator" }],
  }),
  component: PakistanPropertyTaxCalculatorPage,
});

function PakistanPropertyTaxCalculatorPage() {
  const [propertyFbrValuePKR, setPropertyFbrValuePKR] = useState<number>(20000000);
  const [userRole, setUserRole] = useState<"buyer" | "seller">("buyer");
  const [isFiler, setIsFiler] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Section 236K (Buyer) vs Section 236C (Seller) per TAG Co Tax Card TY 2027
  const rateFiler = userRole === "buyer" ? 1.25 : 2.75;
  const rateNonFiler = userRole === "buyer" ? 2.5 : 5.5;
  const appliedRate = isFiler ? rateFiler : rateNonFiler;

  const whtTaxAmountPKR = propertyFbrValuePKR * (appliedRate / 100);
  const stampDutyPKR = userRole === "buyer" ? propertyFbrValuePKR * 0.02 : 0;
  const tmaFeePKR = userRole === "buyer" ? propertyFbrValuePKR * 0.01 : 0;
  const totalGovernmentFeePKR = whtTaxAmountPKR + stampDutyPKR + tmaFeePKR;

  const nonFilerTaxAmountPKR = propertyFbrValuePKR * (rateNonFiler / 100);
  const taxSavedByFiling = nonFilerTaxAmountPKR - whtTaxAmountPKR;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan Property Tax Calculator", item: "https://advaq.com/calculators/pakistan-property-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Property Tax & WHT Calculator (236K & 236C) (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-property-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate Section 236K (Buyer) and Section 236C (Seller) FBR Withholding Taxes, Stamp Duty, and Filer tax savings on real estate transactions.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What are the Section 236K (Buyer) and Section 236C (Seller) WHT rates for property?",
      a: "Under the Income Tax Ordinance 2001, Section 236K (Buyer WHT) is 3% for Filers vs 10.5% (to 12%) for Non-Filers. Section 236C (Seller WHT) is 3% for Filers vs 10% for Non-Filers, depending on property valuation and holding period.",
    },
    {
      q: "What is Section 7E Deemed Income Tax on Immovable Property?",
      a: "Section 7E taxes immovable properties valued above PKR 25 million at an effective rate of 1% of the fair market value as deemed rental income, unless the property is a primary residence or plots under specified exemptions.",
    },
    {
      q: "Is FBR valuation table rate used or actual transaction value for property WHT?",
      a: "Withholding tax is calculated on the higher of the FBR Valuation Rate published for the area/society or the actual recorded transaction price in the transfer deed.",
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
            <span>Property Tax & WHT</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Property Tax & WHT Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 236K (Buyer) and Section 236C (Seller) FBR Withholding Taxes, Stamp Duty, and Filer tax savings on real estate transactions.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Transaction Role:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setUserRole("buyer")}
                  className={`p-3.5 rounded-xl border text-left font-semibold ${
                    userRole === "buyer" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Property Buyer (Sec 236K)
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole("seller")}
                  className={`p-3.5 rounded-xl border text-left font-semibold ${
                    userRole === "seller" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Property Seller (Sec 236C)
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  FBR / DC Evaluated Property Value (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  Rs {(propertyFbrValuePKR / 100000).toLocaleString()} Lacs ({(propertyFbrValuePKR / 10000000).toFixed(2)} Crore)
                </span>
              </div>
              <input
                type="range"
                min="2500000"
                max="100000000"
                step="2500000"
                value={propertyFbrValuePKR}
                onChange={(e) => setPropertyFbrValuePKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <div>
                <strong className="text-navy-950 block text-sm">Are You an Active Taxpayer (ATL Filer)?</strong>
                <span className="text-gray-500 text-[11px]">Non-Filers pay up to 10.5%–12% WHT compared to 3% for Filers.</span>
              </div>
              <input
                type="checkbox"
                checked={isFiler}
                onChange={(e) => setIsFiler(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Property Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Applied WHT Rate ({userRole === "buyer" ? "Sec 236K" : "Sec 236C"}):</span>
                  <span className="font-mono text-gold-400 font-bold">{appliedRate}%</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>FBR WHT Amount:</span>
                  <span className="font-mono text-white font-semibold">Rs {Math.round(whtTaxAmountPKR).toLocaleString()}</span>
                </div>
                {userRole === "buyer" && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Provincial Stamp Duty (2%):</span>
                    <span className="font-mono text-white">Rs {Math.round(stampDutyPKR).toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Govt Transfer Taxes Due
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  Rs {Math.round(totalGovernmentFeePKR).toLocaleString()}
                </div>
                {!isFiler && (
                  <p className="mt-2 text-[11px] text-amber-400 font-semibold">
                    💡 Become a Filer to save Rs {Math.round(taxSavedByFiling).toLocaleString()} on this transaction!
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/atl-restoration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Become Filer with ADVAQ
              </Link>
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
                Live Step-by-Step Property Tax & WHT Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of Section 236C / 236K advance tax and provincial stamp duties for Rs {propertyFbrValuePKR.toLocaleString()} transaction.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Property Valuation</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">FBR Table</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Declared Value:</span> <strong className="text-white">Rs {propertyFbrValuePKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Transaction Role:</span> <strong className="text-white uppercase">{userRole}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Taxable Base:</span> <strong>Rs {propertyFbrValuePKR.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Advance FBR WHT</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{userRole === "buyer" ? "Sec 236K" : "Sec 236C"}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Filer Status:</span> <strong className={isFiler ? "text-emerald-400" : "text-amber-400"}>{isFiler ? "Active Filer" : "Non-Filer"}</strong></div>
                <div className="flex justify-between"><span>WHT Rate:</span> <strong className="text-white">{appliedRate}%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>FBR Tax Due:</span> <strong>Rs {Math.round(whtTaxAmountPKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Provincial Duties</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Revenue Dept</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Stamp Duty (2%):</span> <strong className="text-white">Rs {Math.round(stampDutyPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>TMA Fee (1%):</span> <strong className="text-white">Rs {Math.round(tmaFeePKR).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Provincial Total:</span> <strong>Rs {Math.round(stampDutyPKR + tmaFeePKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Govt Transfer Cost</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Net Taxes</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Filer Savings Potential:</span> <strong className="text-emerald-400">Rs {Math.round(taxSavedByFiling).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>FBR + Provincial:</span> <strong className="text-white">Combined</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Total Taxes Due:</span> <strong>Rs {Math.round(totalGovernmentFeePKR).toLocaleString()}</strong></div>
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
                Pakistan Property Transfer Tax & WHT Rates Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Tax Component</th>
                  <th className="p-3.5">Governing Provision</th>
                  <th className="p-3.5">Filer Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Non-Filer Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Section 236K (Buyer Advance WHT)</td>
                  <td className="p-3.5 font-mono text-gray-600">Income Tax Ordinance 2001</td>
                  <td className="p-3.5 font-bold text-emerald-600">1.25% WHT</td>
                  <td className="p-3.5 font-bold text-red-600">2.5% WHT</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Section 236C (Seller Advance WHT)</td>
                  <td className="p-3.5 font-mono text-gray-600">Income Tax Ordinance 2001</td>
                  <td className="p-3.5 font-bold text-emerald-600">2.75% WHT (Same year: 3%)</td>
                  <td className="p-3.5 font-bold text-red-600">5.5% WHT</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Section 7E Deemed Tax</td>
                  <td className="p-3.5 font-mono text-gray-600">Property Val &gt; Rs 25M</td>
                  <td className="p-3.5 font-bold text-amber-600">1% Fair Market Value</td>
                  <td className="p-3.5 font-bold text-red-600">1% Fair Market Value</td>
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
              Frequently Asked Questions (Pakistan Property Taxes)
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
              Explore Related Pakistan Real Estate & Tax Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Rental Income
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Section 15 Rental Income Tax Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate FBR Section 15 tax on property rent and tenant withholding tax deductions.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-rental-income-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Capital Gains Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Section 37 Property CGT Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Section 37 property gain tax and holding period reduction schedule.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-capital-gains-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

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
          </div>
        </section>

        {/* SECTION 4: ADVAQ ADVISORY BANNER */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ Registered High-Court Property Advocates
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Obtain Section 7E Exemption & Property CPR Challans
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan real estate legal team generates FBR 236K/236C CPR challans, issues Section 7E exemption certificates, and coordinates with Sub-Registrars for smooth property transfers.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/atl-restoration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Consult Property Tax Lawyer <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
