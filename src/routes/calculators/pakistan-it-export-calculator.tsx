import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Percent,
  ChevronDown,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-it-export-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan IT Exporter 100% Tax Credit & FCVA USD Retention Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan IT export tax calculator. Calculate 100% tax credit savings under Section 154A, 0.25% WHT, PSEB registration ROI, and SBP 50% FCVA USD retention.",
      },
      {
        name: "keywords",
        content:
          "pakistan it export tax credit calculator section 154a 2026, pseb registration tax benefit freelancers software house, sbp fcva account usd retention limit calculator, clause 133 part i second schedule it export exemption",
      },
      {
        property: "og:title",
        content: "Pakistan IT Exporter 100% Tax Credit Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate 100% tax exemption under Section 154A, PSEB registration benefits, and SBP FCVA USD retention.",
      },
      { property: "og:url", content: "/calculators/pakistan-it-export-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-it-export-calculator" }],
  }),
  component: PakistanITExportCalculatorPage,
});

function PakistanITExportCalculatorPage() {
  const [annualExportUsd, setAnnualExportUsd] = useState<number>(50000);
  const [exchangeRatePKR, setExchangeRatePKR] = useState<number>(280);
  const [isPsebRegistered, setIsPsebRegistered] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const totalExportRevenuePKR = annualExportUsd * exchangeRatePKR;

  const normalCorporateTaxPKR = totalExportRevenuePKR * 0.29;
  const section154aTaxPKR = totalExportRevenuePKR * (isPsebRegistered ? 0.0025 : 0.01);
  const taxSavingsPKR = normalCorporateTaxPKR - section154aTaxPKR;

  const usdRetentionAllowed = annualExportUsd * 0.5;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan IT Exporter Tax Credit Tool", item: "https://advaq.com/calculators/pakistan-it-export-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan IT Exporter 100% Tax Credit & FCVA USD Retention Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-it-export-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate Section 154A 100% tax credit savings, 0.25% reduced withholding tax, PSEB registration ROI, and State Bank of Pakistan 50% USD foreign currency retention capacity.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is Section 154A of the Income Tax Ordinance 2001 for IT Exporters?",
      a: "Section 154A provides a concessionary tax regime for exporters of computer software, IT services, and IT-enabled services (ITES). Exporters registered with PSEB pay a final withholding tax of 0.25% on export proceeds in lieu of the standard 29% corporate income tax rate.",
    },
    {
      q: "What documents are required to claim the 0.25% Section 154A tax rate?",
      a: "Exporters must provide their bank with: 1) Valid PSEB Registration Certificate, 2) Valid FBR Active Taxpayer List (ATL) status, and 3) Proceed Realization Certificates (PRCs) issued by the commercial bank.",
    },
    {
      q: "How does the SBP 50% FCVA USD retention benefit software companies in Pakistan?",
      a: "State Bank of Pakistan regulations allow registered IT export companies to keep 50% of foreign currency earnings in Special FCVA accounts to make un-restricted payments for foreign server hosting (AWS/Azure), international digital advertising (Google/Meta), software subscriptions, and foreign branch expenses.",
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
            <span>Pakistan IT Exporter Tax Credit</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan IT Exporter 100% Tax Credit Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 154A 100% tax credit savings, 0.25% reduced withholding tax, PSEB ROI, and SBP 50% USD foreign currency retention capacity.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className="p-6 rounded-2xl border bg-navy-950 border-gold-500 text-white flex items-center justify-between">
            <div>
              <span className="text-xs text-gold-500 uppercase font-semibold block">Section 154A 100% Tax Credit Benefit</span>
              <h3 className="font-serif text-2xl font-bold mt-1 text-white">
                Save Rs {Math.round(taxSavingsPKR).toLocaleString()} PKR in FBR Income Tax!
              </h3>
              <p className="text-xs text-navy-200 mt-1">
                Your tax liability is reduced from 29% corporate rate down to 0.25% final withholding tax.
              </p>
            </div>
            <Link to="/pakistan-services/pseb-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0 hidden sm:block">
              Register PSEB with ADVAQ
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual IT Export Remittances ($ USD):
                </label>
                <div className="font-mono text-right">
                  <span className="text-gold-600 font-bold text-base">
                    ${annualExportUsd.toLocaleString()} USD
                  </span>
                  <span className="text-emerald-600 font-bold text-xs ml-2">
                    (= Rs {totalExportRevenuePKR.toLocaleString()} PKR)
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={annualExportUsd}
                onChange={(e) => setAnnualExportUsd(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono mt-1">
                <span>$10,000 USD (Rs {(10000 * exchangeRatePKR / 100000).toLocaleString()} Lacs)</span>
                <span>Tax Rate Applicable On: <strong>Rs {totalExportRevenuePKR.toLocaleString()} PKR</strong></span>
                <span>$500,000 USD</span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
                <input
                  type="checkbox"
                  checked={isPsebRegistered}
                  onChange={(e) => setIsPsebRegistered(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">PSEB Call Center / IT Exporter Registered?</strong>
                  <span className="text-gray-500">Qualifies for 0.25% reduced rate under Section 154A.</span>
                </div>
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT CARD: SBP FCVA 50% USD RETENTION ALLOWANCE */}
            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">SBP FCVA 50% USD Retention Allowance</span>
              <div className="text-3xl font-serif font-bold text-white">
                ${usdRetentionAllowed.toLocaleString()} USD
              </div>
              <p className="text-xs text-navy-200">Retain 50% in foreign currency to pay software, hosting & digital ad bills abroad.</p>
            </div>

            {/* RIGHT CARD: SECTION 154A FINAL TAX */}
            <div className="border border-border rounded-xl p-6 bg-white space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">
                Section 154A Final Tax ({isPsebRegistered ? "0.25%" : "1.0%"})
              </span>
              <div className="text-3xl font-serif font-bold text-navy-950">
                Rs {Math.round(section154aTaxPKR).toLocaleString()} PKR
              </div>
              <p className="text-xs text-gray-600">No further FBR audit or income tax liability.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need PSEB Registration & Section 154A Tax Exemption Certificate?</h4>
              <p className="text-xs text-gray-600">Complete PSEB registration, FBR 154A filing & FCVA bank approval.</p>
            </div>
            <Link to="/pakistan-services/pseb-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Get 100% Tax Credit with ADVAQ
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
                Live Step-by-Step IT Export Tax Credit Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Section 154A final withholding tax and SBP FCVA retention for Rs {totalExportRevenuePKR.toLocaleString()} export revenue.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Annual Remittance</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">SBP Remittance</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Export Inflow:</span> <strong className="text-white">Rs {totalExportRevenuePKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>USD Equivalent:</span> <strong className="text-white">${annualExportUsd.toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Annual Revenue:</span> <strong>Rs {totalExportRevenuePKR.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Section 154A Final Tax</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">FTR Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>PSEB Registered:</span> <strong className={isPsebRegistered ? "text-emerald-400" : "text-amber-400"}>{isPsebRegistered ? "YES (0.25% Rate)" : "NO (1.0% Rate)"}</strong></div>
                <div className="flex justify-between"><span>Tax Regime:</span> <strong className="text-white">Section 154A FTR</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Total Final Tax:</span> <strong>Rs {Math.round(section154aTaxPKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: FCVA USD Retention</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">SBP Circular</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>FCVA Allowance:</span> <strong className="text-white">50% USD Retention</strong></div>
                <div className="flex justify-between"><span>Annual USD Retained:</span> <strong className="text-gold-400">${usdRetentionAllowed.toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Monthly USD Limit:</span> <strong>${Math.round(usdRetentionAllowed / 12).toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Tax Exemption Certificate</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">ADVAQ Guarantee</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>FBR Audit Exemption:</span> <strong className="text-emerald-400">100% Guaranteed</strong></div>
                <div className="flex justify-between"><span>Filing Service Fee:</span> <strong className="text-white">Rs 20,000 Flat</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Processing Window:</span> <strong>48 Hours</strong></div>
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
                Pakistan IT Export Tax Credit & Compliance Schedule
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Compliance Requirement</th>
                  <th className="p-3.5">Governing Regulation</th>
                  <th className="p-3.5">Tax Rate / Benefit</th>
                  <th className="p-3.5 rounded-tr-xl">Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">PSEB IT Exporter Registration</td>
                  <td className="p-3.5 font-mono text-gray-600">PSEB IT Policy 2026</td>
                  <td className="p-3.5 font-bold text-emerald-600">0.25% Final WHT Rate</td>
                  <td className="p-3.5 text-gray-600">Pakistan Software Export Board</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">FBR Section 154A Exemption</td>
                  <td className="p-3.5 font-mono text-gray-600">Income Tax Ordinance 2001</td>
                  <td className="p-3.5 font-bold text-emerald-600">100% Tax Credit Exemption</td>
                  <td className="p-3.5 text-gray-600">Federal Board of Revenue (FBR)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">SBP FCVA Foreign Currency Account</td>
                  <td className="p-3.5 font-mono text-gray-600">SBP Exchange Control Manual</td>
                  <td className="p-3.5 font-bold text-emerald-600">50% USD Retention</td>
                  <td className="p-3.5 text-gray-600">State Bank of Pakistan</td>
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
              Frequently Asked Questions (IT Export Tax & PSEB)
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
                  Freelancer Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Pakistan Freelancer Complete Tax Tool
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

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  SECP Setup
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  SECP Private Limited Company Setup Cost
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

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Sales Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Provincial Sales Tax on Services (PRA / SRB)
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
          </div>
        </section>

        {/* SECTION 4: ADVAQ ADVISORY BANNER */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ Registered PSEB & FBR IT Legal Advisors
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Secure 100% Tax Credit Exemption for Your Software House
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan IT legal team processes PSEB registrations, obtains FBR Section 154A tax exemption certificates, and assists with SBP 50% FCVA foreign currency bank account approvals.
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
