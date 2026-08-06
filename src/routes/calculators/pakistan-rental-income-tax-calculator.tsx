import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Home,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-rental-income-tax-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan Rental Income Tax Calculator (Section 15) (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan rental income tax calculator. Calculate Section 15 Property Income tax slabs, Section 155 tenant WHT, and Filer vs Non-Filer rates.",
      },
      {
        name: "keywords",
        content:
          "pakistan rental income tax calculator 2026, section 15 property tax slabs pakistan, section 155 tenant withholding tax rate filer non filer, fbr rental income tax brackets",
      },
      {
        property: "og:title",
        content: "Pakistan Rental Income Tax Calculator (Section 15) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate FBR income tax on rental property and Section 155 tenant withholding tax deductions.",
      },
      { property: "og:url", content: "/calculators/pakistan-rental-income-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-rental-income-tax-calculator" }],
  }),
  component: PakistanRentalIncomeTaxPage,
});

function PakistanRentalIncomeTaxPage() {
  const [monthlyRentPKR, setMonthlyRentPKR] = useState<number>(150000);
  const [isFiler, setIsFiler] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const annualRentPKR = monthlyRentPKR * 12;

  let annualRentalTaxPKR = 0;

  if (annualRentPKR > 2000000) {
    annualRentalTaxPKR = 155000 + (annualRentPKR - 2000000) * 0.25;
  } else if (annualRentPKR > 600000) {
    annualRentalTaxPKR = 15000 + (annualRentPKR - 600000) * 0.10;
  } else if (annualRentPKR > 300000) {
    annualRentalTaxPKR = (annualRentPKR - 300000) * 0.05;
  }

  if (!isFiler) {
    annualRentalTaxPKR = annualRentalTaxPKR * 2;
  }

  const effectiveTaxRate = annualRentPKR > 0 ? (annualRentalTaxPKR / annualRentPKR) * 100 : 0;

  const getActiveRentalSlabIndex = (): number => {
    if (annualRentPKR <= 300000) return 0;
    if (annualRentPKR <= 600000) return 1;
    if (annualRentPKR <= 2000000) return 2;
    return 3;
  };
  const activeRentalSlabIndex = getActiveRentalSlabIndex();

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan Rental Income Tax Calculator", item: "https://advaq.com/calculators/pakistan-rental-income-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Rental Income Tax Calculator (Section 15) (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-rental-income-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate FBR Section 15 tax on property rent and tenant withholding tax deductions under Section 155 for Filers vs Non-Filers.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the non-taxable limit for rental income under Section 15?",
      a: "For individual property owners in Pakistan, gross annual rental income up to PKR 300,000 is 100% tax-exempt (0% tax rate).",
    },
    {
      q: "Are tenants required to deduct withholding tax from rent payments under Section 155?",
      a: "Yes. Corporate tenants, companies, AOPs, and specified withholding agents MUST deduct Section 155 withholding tax when paying monthly rent to property owners exceeding PKR 300,000 per annum.",
    },
    {
      q: "What deductions are allowed against Income from Property under Section 15.5?",
      a: "Allowable deductions include: 1/5th of annual rent for repair allowance, ground rent, local property taxes paid, insurance premiums, and interest on mortgage loans borrowed to acquire or construct the property.",
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
            <span>Rental Income Tax (Sec 15)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Rental Income Tax Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate FBR Section 15 tax on property rent and tenant withholding tax deductions for Filers vs Non-Filers.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Monthly Rent Received (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  Rs {monthlyRentPKR.toLocaleString()} / month
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="500000"
                step="5000"
                value={monthlyRentPKR}
                onChange={(e) => setMonthlyRentPKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <div>
                <strong className="text-navy-950 block text-sm">Is the Property Owner an Active Taxpayer (ATL Filer)?</strong>
                <span className="text-gray-500 text-[11px]">Non-Filers pay double (100% higher) tax on rental income.</span>
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
                <span>Rental Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Annual Rent:</span>
                  <span className="font-mono text-white font-semibold">Rs {annualRentPKR.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective Tax Rate:</span>
                  <span className="font-mono text-gold-400 font-bold">{effectiveTaxRate.toFixed(2)}%</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Annual Income Tax on Property Rent
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  Rs {Math.round(annualRentalTaxPKR).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/individual-tax-return"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Property Tax Return with ADVAQ
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
                Live Step-by-Step Rental Income Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of Income Tax Ordinance Section 15 tax slabs for Rs {monthlyRentPKR.toLocaleString()} monthly property rent.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross Annual Rent</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Rental Income</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Monthly Rent:</span> <strong className="text-white">Rs {monthlyRentPKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Months per Year:</span> <strong className="text-white">12 Months</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Annual Gross Rent:</span> <strong>Rs {annualRentPKR.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: FBR Section 15 Slabs</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Tax Slabs</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Filer Penalty (2x):</span> <strong className={isFiler ? "text-emerald-400" : "text-amber-400"}>{isFiler ? "NO (Standard)" : "YES (200% Surcharge)"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Effective Tax Rate:</span> <strong>{effectiveTaxRate.toFixed(2)}%</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Annual Rental Tax</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Annual FBR</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual FBR Tax:</span> <strong className="text-red-400">Rs {Math.round(annualRentalTaxPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Monthly WHT Component:</span> <strong className="text-white">Rs {Math.round(annualRentalTaxPKR / 12).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Total Tax Liability:</span> <strong>Rs {Math.round(annualRentalTaxPKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net Rental Yield</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Income</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Monthly Rent:</span> <strong className="text-white">Rs {monthlyRentPKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Monthly Tax:</span> <strong className="text-red-400">Rs {Math.round(annualRentalTaxPKR / 12).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Net Monthly Payout:</span> <strong>Rs {Math.round((annualRentPKR - annualRentalTaxPKR) / 12).toLocaleString()}</strong></div>
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
                FBR Section 15 Property Rental Tax Slabs
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Gross Annual Rent Bracket</th>
                  <th className="p-3.5">FBR Income Tax Rate</th>
                  <th className="p-3.5">Filer Tax Slabs</th>
                  <th className="p-3.5 rounded-tr-xl">Non-Filer Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className={activeRentalSlabIndex === 0 ? "bg-amber-500/10 border-2 border-gold-500 font-bold shadow-md" : ""}>
                  <td className="p-3.5 font-bold text-navy-950 flex items-center justify-between gap-2">
                    <span>Up to Rs 300,000</span>
                    {activeRentalSlabIndex === 0 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 font-sans font-bold text-[10px] uppercase tracking-wider shadow-sm">
                        <Sparkles size={11} /> Your Slab
                      </span>
                    )}
                  </td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% Tax Rate</td>
                  <td className="p-3.5 font-mono">Rs 0</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0%</td>
                </tr>
                <tr className={activeRentalSlabIndex === 1 ? "bg-amber-500/10 border-2 border-gold-500 font-bold shadow-md" : "bg-slate-50/50"}>
                  <td className="p-3.5 font-bold text-navy-950 flex items-center justify-between gap-2">
                    <span>Rs 300,001 – Rs 600,000</span>
                    {activeRentalSlabIndex === 1 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 font-sans font-bold text-[10px] uppercase tracking-wider shadow-sm">
                        <Sparkles size={11} /> Your Slab
                      </span>
                    )}
                  </td>
                  <td className="p-3.5 font-mono">5% of rent exceeding Rs 300k</td>
                  <td className="p-3.5 font-mono">Up to Rs 15,000</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">10% WHT (2x)</td>
                </tr>
                <tr className={activeRentalSlabIndex === 2 ? "bg-amber-500/10 border-2 border-gold-500 font-bold shadow-md" : ""}>
                  <td className="p-3.5 font-bold text-navy-950 flex items-center justify-between gap-2">
                    <span>Rs 600,001 – Rs 2,000,000</span>
                    {activeRentalSlabIndex === 2 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 font-sans font-bold text-[10px] uppercase tracking-wider shadow-sm">
                        <Sparkles size={11} /> Your Slab
                      </span>
                    )}
                  </td>
                  <td className="p-3.5 font-mono">Rs 15,000 + 10% exceeding Rs 600k</td>
                  <td className="p-3.5 font-mono">Up to Rs 155,000</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">20% WHT (2x)</td>
                </tr>
                <tr className={activeRentalSlabIndex === 3 ? "bg-amber-500/10 border-2 border-gold-500 font-bold shadow-md" : "bg-slate-50/50"}>
                  <td className="p-3.5 font-bold text-navy-950 flex items-center justify-between gap-2">
                    <span>Above Rs 2,000,000</span>
                    {activeRentalSlabIndex === 3 && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 font-sans font-bold text-[10px] uppercase tracking-wider shadow-sm">
                        <Sparkles size={11} /> Your Slab
                      </span>
                    )}
                  </td>
                  <td className="p-3.5 font-mono">Rs 155,000 + 25% exceeding Rs 2M</td>
                  <td className="p-3.5 font-mono">Rs 155,000 + 25%</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">50% WHT (2x)</td>
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
              Frequently Asked Questions (FBR Rental Income Tax)
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
              Explore Related Pakistan Real Estate Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Property WHT
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Property Transfer Tax Calculator (236K & 236C)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Section 236K buyer WHT (3% vs 10.5%) and Section 236C seller WHT.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-property-tax-calculator"
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
              <Shield size={16} /> ADVAQ Registered Tax Advocates & Legal Advisors
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              File Rental Property Income Tax Return (Section 15)
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan tax team files your annual FBR Section 15 rental returns, claims 1/5th repair allowances, and reconciles Section 155 tenant WHT certificates.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/individual-tax-return"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Rental Tax Return <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
