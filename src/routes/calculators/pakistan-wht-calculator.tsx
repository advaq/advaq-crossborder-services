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

export const Route = createFileRoute("/calculators/pakistan-wht-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan FBR Withholding Tax (WHT) Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBR Withholding Tax (WHT) calculator. Calculate Section 153 services (9%/18%), goods (5%/10%), contracts (7.5%/15%) and Section 149 salary WHT rates.",
      },
      {
        name: "keywords",
        content:
          "pakistan fbr withholding tax calculator 2026, section 153 wht rate filer non filer pakistan, fbr salary withholding tax section 149 calculator, fbr section 165 quarterly wht return",
      },
      {
        property: "og:title",
        content: "Pakistan FBR Withholding Tax (WHT) Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact FBR withholding tax deduction rates for services, goods, and contracts for Filers and Non-Filers.",
      },
      { property: "og:url", content: "/calculators/pakistan-wht-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-wht-calculator" }],
  }),
  component: PakistanWHTCalculatorPage,
});

function PakistanWHTCalculatorPage() {
  const [transactionType, setTransactionType] = useState<string>("services");
  const [invoiceAmountPKR, setInvoiceAmountPKR] = useState<number>(500000);
  const [isFiler, setIsFiler] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whtRates: Record<string, { filer: number; nonFiler: number; label: string }> = {
    it_services: { filer: 4, nonFiler: 8, label: "IT & ITeS Services (Sec 153(1)(b))" },
    specified_services: { filer: 7, nonFiler: 14, label: "Transport / Software / Courier / Hotel / Security (Sec 153(1)(b))" },
    professionals: { filer: 15, nonFiler: 30, label: "Independent Professionals / Consultants (Sec 153(1)(b))" },
    services: { filer: 14, nonFiler: 28, label: "General Services & Others (Sec 153(1)(b))" },
    goods: { filer: 5.5, nonFiler: 11, label: "Sale of Goods (Sec 153(1)(a) AOP/Individual)" },
    goods_company: { filer: 5, nonFiler: 10, label: "Sale of Goods (Sec 153(1)(a) Company)" },
    contracts: { filer: 8, nonFiler: 16, label: "Execution of Contracts (Sec 153(1)(c))" },
  };

  const currentRate = whtRates[transactionType] || whtRates.services;
  const appliedRatePercent = isFiler ? currentRate.filer : currentRate.nonFiler;

  const whtDeductedAmountPKR = invoiceAmountPKR * (appliedRatePercent / 100);
  const netPaymentToVendorPKR = invoiceAmountPKR - whtDeductedAmountPKR;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan FBR Withholding Tax Calculator", item: "https://advaq.com/calculators/pakistan-wht-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan FBR Withholding Tax (WHT) Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-wht-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate FBR Section 153 withholding tax deductions on invoices for services, goods, and contracts for ATL Filers vs Non-Filers.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What are the FBR Section 153 Withholding Tax rates for 2026/2027?",
      a: "Under Section 153 of the Income Tax Ordinance 2001, withholding rates are: Services (9% for Filers / 18% for Non-Filers), Sale of Goods (5% for Filers / 10% for Non-Filers), and Execution of Contracts (7.5% for Filers / 15% for Non-Filers).",
    },
    {
      q: "When must withholding tax (CPR) be deposited with the FBR?",
      a: "Withholding tax deducted from payments to vendors or employees MUST be deposited into the Federal Treasury via a Computerized Payment Receipt (CPR) within 7 days of the end of the week in which the deduction was made.",
    },
    {
      q: "What is the penalty for failing to deduct withholding tax in Pakistan?",
      a: "Under Section 161 of the Income Tax Ordinance 2001, any withholding agent who fails to deduct or deposit WHT is personally liable to pay the unpaid tax amount plus default surcharge (18% per annum) and administrative penalties under Section 182.",
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
            <span>FBR Withholding Tax (WHT)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan FBR Withholding Tax (WHT) Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 153 withholding tax deductions on invoices for services, goods, and contracts for ATL Filers vs Non-Filers.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Payment Category (Section 153):
              </label>
              <select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="services">Services (Filer 9% / Non-Filer 18%)</option>
                <option value="goods">Supply of Goods (Filer 5% / Non-Filer 10%)</option>
                <option value="contracts">Execution of Contracts (Filer 7.5% / Non-Filer 15%)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross Invoice Amount (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  Rs {invoiceAmountPKR.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="10000000"
                step="50000"
                value={invoiceAmountPKR}
                onChange={(e) => setInvoiceAmountPKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <div>
                <strong className="text-navy-950 block text-sm">Is the Vendor / Payee an Active Taxpayer (ATL Filer)?</strong>
                <span className="text-gray-500 text-[11px]">Non-Filers are subject to double 100% higher WHT penalty rates.</span>
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
                <span>WHT Deduction Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Category:</span>
                  <span className="font-mono text-white font-semibold">{currentRate.label}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Filer Status:</span>
                  <span className={`font-semibold ${isFiler ? "text-emerald-400" : "text-amber-400"}`}>
                    {isFiler ? "Active Filer" : "Non-Filer (2x Rate)"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Applied WHT Rate:</span>
                  <span className="font-mono text-gold-400 font-bold">{appliedRatePercent}%</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Payable to Vendor:</span>
                  <span className="font-mono text-emerald-400 font-bold">Rs {Math.round(netPaymentToVendorPKR).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  WHT Tax to Deposit with FBR (CPR)
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  Rs {Math.round(whtDeductedAmountPKR).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/withholding-compliance"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File FBR WHT Statement with ADVAQ
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
                Live Step-by-Step FBR Withholding Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of Income Tax Ordinance withholding sections ({currentRate.label}) for Rs {invoiceAmountPKR.toLocaleString()} payment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Gross Transaction Base</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Pre-WHT Base</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Transaction Amount:</span> <strong className="text-white">Rs {invoiceAmountPKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Category:</span> <strong className="text-white">{currentRate.label}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Gross Payment Base:</span> <strong>Rs {invoiceAmountPKR.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Statutory Rate & 10th Sched</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">WHT Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Filer Status:</span> <strong className={isFiler ? "text-emerald-400" : "text-amber-400"}>{isFiler ? "Active Filer" : "Non-Filer (2x Rate)"}</strong></div>
                <div className="flex justify-between"><span>Filer Base Rate:</span> <strong className="text-white">{currentRate.filer}%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Applied WHT Rate:</span> <strong>{appliedRatePercent}%</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: FBR Deposit CPR</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">FBR Deposit</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>WHT Deduction:</span> <strong className="text-red-400">Rs {Math.round(whtDeductedAmountPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>FBR Challan Due:</span> <strong className="text-white">Monthly CPR</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Tax to Deposit:</span> <strong>Rs {Math.round(whtDeductedAmountPKR).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net Vendor Payout</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Payout</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Invoice:</span> <strong className="text-white">Rs {invoiceAmountPKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Less WHT Withheld:</span> <strong className="text-red-400">Rs {Math.round(whtDeductedAmountPKR).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Net Check / Bank Wire:</span> <strong>Rs {Math.round(netPaymentToVendorPKR).toLocaleString()}</strong></div>
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
                FBR Section 153 Withholding Tax Schedule
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Transaction Category</th>
                  <th className="p-3.5">FBR Provision</th>
                  <th className="p-3.5">Filer WHT Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Non-Filer WHT Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">IT & IT-Enabled Services</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 153(1)(b)</td>
                  <td className="p-3.5 font-bold text-emerald-600">4% WHT</td>
                  <td className="p-3.5 font-bold text-red-600">8% WHT</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Transport / Software / Hotel / Courier / Security</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 153(1)(b)</td>
                  <td className="p-3.5 font-bold text-emerald-600">7% WHT</td>
                  <td className="p-3.5 font-bold text-red-600">14% WHT</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Independent Professionals (Doctors/Lawyers/Devs)</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 153(1)(b)</td>
                  <td className="p-3.5 font-bold text-emerald-600">15% WHT</td>
                  <td className="p-3.5 font-bold text-red-600">30% WHT</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">General Services & Others</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 153(1)(b)</td>
                  <td className="p-3.5 font-bold text-emerald-600">14% WHT</td>
                  <td className="p-3.5 font-bold text-red-600">28% WHT</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Supply of Goods (AOPs & Individuals)</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 153(1)(a)</td>
                  <td className="p-3.5 font-bold text-emerald-600">5.5% WHT (Co: 5%)</td>
                  <td className="p-3.5 font-bold text-red-600">11% WHT (Co: 10%)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Execution of Contracts</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 153(1)(c)</td>
                  <td className="p-3.5 font-bold text-emerald-600">8% WHT (Listed: 7.5%)</td>
                  <td className="p-3.5 font-bold text-red-600">16% WHT (Listed: 15%)</td>
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
              Frequently Asked Questions (FBR Withholding Tax)
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
              Explore Related Pakistan Tax Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Salary Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Salary & Business Tax Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate progressive monthly and annual income tax slabs for salaried employees.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-fbr-salary-tax-calculator"
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
          </div>
        </section>

        {/* SECTION 4: ADVAQ ADVISORY BANNER */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ Registered Corporate WHT Auditors
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              File Quarterly FBR WHT Returns & Avoid Audit Notices
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our tax legal team prepares Section 165 quarterly WHT returns, generates CPR challans, and handles Section 161 non-deduction audit notices.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/withholding-compliance"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File WHT Returns <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
