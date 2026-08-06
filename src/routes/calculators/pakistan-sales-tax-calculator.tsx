import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-sales-tax-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan Sales Tax on Services (PRA / SRB / FBR) Rate Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan provincial sales tax on services calculator. Compare PRA Punjab (16%), SRB Sindh (13%), KPRA (15%) & FBR ICT rates for IT & consultancy companies.",
      },
      {
        name: "keywords",
        content:
          "pakistan sales tax on services rate calculator 2026, pra punjab sales tax IT services, srb sindh sales tax rate software house, kpra sales tax rate services",
      },
      {
        property: "og:title",
        content: "Pakistan Sales Tax on Services Rate Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate provincial sales tax liability across Punjab (PRA), Sindh (SRB), KPRA, and FBR.",
      },
      { property: "og:url", content: "/calculators/pakistan-sales-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-sales-tax-calculator" }],
  }),
  component: PakistanSalesTaxCalculatorPage,
});

function PakistanSalesTaxCalculatorPage() {
  const [invoiceAmountPKR, setInvoiceAmountPKR] = useState<number>(500000);
  const [provinceAuthority, setProvinceAuthority] = useState<string>("pra");
  const [isExportService, setIsExportService] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let salesTaxRate = 0.16;
  let authorityName = "PRA (Punjab Revenue Authority)";

  if (isExportService) {
    salesTaxRate = 0;
  } else {
    if (provinceAuthority === "pra") {
      salesTaxRate = 0.16;
      authorityName = "PRA (Punjab Revenue Authority)";
    } else if (provinceAuthority === "srb") {
      salesTaxRate = 0.13;
      authorityName = "SRB (Sindh Revenue Board)";
    } else if (provinceAuthority === "kpra") {
      salesTaxRate = 0.15;
      authorityName = "KPRA (KPK Revenue Authority)";
    } else {
      salesTaxRate = 0.15;
      authorityName = "FBR ICT (Islamabad Capital Territory)";
    }
  }

  const salesTaxAmountPKR = invoiceAmountPKR * salesTaxRate;
  const totalInvoiceWithTaxPKR = invoiceAmountPKR + salesTaxAmountPKR;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan Sales Tax Calculator", item: "https://advaq.com/calculators/pakistan-sales-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Sales Tax on Services (PRA / SRB / FBR) Rate Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-sales-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate provincial sales tax output across Punjab Revenue Authority (PRA 16%), Sindh Revenue Board (SRB 13%), KPRA (15%), and FBR (ICT 15%) for IT, web, and consulting firms.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the difference between FBR Sales Tax and Provincial Sales Tax (PRA/SRB)?",
      a: "FBR levies 18% Sales Tax on the sale and import of physical GOODS under the Sales Tax Act 1990. Provincial tax authorities (PRA Punjab, SRB Sindh, KPRA KPK, BRA Balochistan) levy Sales Tax on SERVICES rendered within their respective territorial jurisdictions.",
    },
    {
      q: "Are IT and software export services zero-rated (0% sales tax)?",
      a: "YES! Export of computer software, IT consulting, and IT-enabled services to foreign clients is zero-rated (0% sales tax) across all provincial revenue authorities, provided foreign currency proceeds are received via banking channels.",
    },
    {
      q: "When must monthly provincial sales tax returns be filed?",
      a: "Monthly sales tax returns must be filed electronically on or before the 15th to 18th day of each following month on the respective provincial portal (e.g., PRA e-Services or SRB Portal).",
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
            <span>Provincial Sales Tax Rates</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Sales Tax on Services Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate provincial sales tax output across PRA (Punjab 16%), SRB (Sindh 13%), KPRA (15%), and FBR (ICT 15%) for IT, web, and marketing agencies.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Provincial Tax Authority:
              </label>
              <select
                value={provinceAuthority}
                onChange={(e) => setProvinceAuthority(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="pra">PRA - Punjab Revenue Authority (16%)</option>
                <option value="srb">SRB - Sindh Revenue Board (13%)</option>
                <option value="kpra">KPRA - Khyber Pakhtunkhwa Revenue Authority (15%)</option>
                <option value="ict">FBR - Islamabad Capital Territory (15%)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. Gross Service Invoice Amount (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  Rs {invoiceAmountPKR.toLocaleString()} PKR
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={invoiceAmountPKR}
                onChange={(e) => setInvoiceAmountPKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
            <input
              type="checkbox"
              checked={isExportService}
              onChange={(e) => setIsExportService(e.target.checked)}
              className="accent-gold-500 w-4 h-4"
            />
            <div>
              <strong className="text-navy-950 block text-sm">Export IT Service / Foreign Client Billing?</strong>
              <span className="text-gray-500">Export of IT & software services is 0% Zero-Rated across all provinces!</span>
            </div>
          </label>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Sales Tax Output ({authorityName})</span>
              <div className="text-3xl font-serif font-bold text-red-600">
                Rs {Math.round(salesTaxAmountPKR).toLocaleString()} PKR
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">Total Invoice Billed to Client</span>
              <div className="text-3xl font-serif font-bold text-white">
                Rs {Math.round(totalInvoiceWithTaxPKR).toLocaleString()} PKR
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need Provincial Sales Tax Registration (PRA/SRB/FBR)?</h4>
              <p className="text-xs text-gray-600">Complete sales tax registration & monthly return filing.</p>
            </div>
            <Link to="/pakistan-services/sales-tax-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Register Sales Tax with ADVAQ
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
                Live Step-by-Step Sales Tax Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of provincial revenue authority rates ({authorityName}) for Rs {invoiceAmountPKR.toLocaleString()} invoice.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Net Invoice Base</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Pre-Tax Base</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Base Invoice Value:</span> <strong className="text-white">Rs {invoiceAmountPKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Tax Jurisdiction:</span> <strong className="text-white uppercase">{provinceAuthority} ({authorityName})</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Taxable Base:</span> <strong>Rs {invoiceAmountPKR.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Statutory Tax Rate</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Authority Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Export Zero-Rated:</span> <strong className={isExportService ? "text-emerald-400" : "text-white"}>{isExportService ? "YES (0% Rate)" : "NO (Standard Rate)"}</strong></div>
                <div className="flex justify-between"><span>Authority Name:</span> <strong className="text-emerald-400">{authorityName}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Effective Sales Tax Rate:</span> <strong>{(salesTaxRate * 100).toFixed(0)}%</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Sales Tax Output</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Output Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Output Sales Tax:</span> <strong className="text-red-400">Rs {Math.round(salesTaxAmountPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Input Tax Credit:</span> <strong className="text-emerald-400">Adjustable</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Net Tax Billed:</span> <strong>Rs {Math.round(salesTaxAmountPKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Billed Invoice</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Gross Invoice</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Net Services Base:</span> <strong className="text-white">Rs {invoiceAmountPKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Sales Tax Output:</span> <strong className="text-red-400">Rs {Math.round(salesTaxAmountPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Total Client Invoice:</span> <strong>Rs {Math.round(totalInvoiceWithTaxPKR).toLocaleString()}</strong></div>
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
                Provincial Sales Tax Rates on Services (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Revenue Authority</th>
                  <th className="p-3.5">Jurisdiction</th>
                  <th className="p-3.5">Standard Tax Rate</th>
                  <th className="p-3.5 rounded-tr-xl">IT Export Service Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">PRA (Punjab Revenue Authority)</td>
                  <td className="p-3.5 text-gray-600">Punjab Province</td>
                  <td className="p-3.5 font-bold text-navy-950">16% Sales Tax</td>
                  <td className="p-3.5 font-bold text-emerald-600">0% Zero-Rated</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">SRB (Sindh Revenue Board)</td>
                  <td className="p-3.5 text-gray-600">Sindh Province</td>
                  <td className="p-3.5 font-bold text-navy-950">13% Sales Tax</td>
                  <td className="p-3.5 font-bold text-emerald-600">0% Zero-Rated</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">KPRA (KPK Revenue Authority)</td>
                  <td className="p-3.5 text-gray-600">KPK Province</td>
                  <td className="p-3.5 font-bold text-navy-950">15% Sales Tax</td>
                  <td className="p-3.5 font-bold text-emerald-600">0% Zero-Rated</td>
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
              Frequently Asked Questions (Provincial Sales Tax)
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
              Explore Related Pakistan Compliance Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Withholding Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Section 153 WHT Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate WHT rates for services (9%/18%), goods (5%/10%), and contracts.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-wht-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

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
          </div>
        </section>

        {/* SECTION 4: ADVAQ ADVISORY BANNER */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ Registered Provincial Sales Tax Consultants
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Register for Sales Tax on Services (PRA / SRB / FBR)
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our tax legal team handles sales tax registration with PRA, SRB, KPRA, files monthly sales tax returns, and secures IT service zero-rating exemptions.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/sales-tax-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Register Sales Tax with ADVAQ <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
