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
  Building,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-nrl-property-tax-calculator")({
  head: () => ({
    meta: [
      { title: "UK Non-Resident Landlord (NRL) Property Tax Estimator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Non-Resident Landlord Scheme (NRLS) tax calculator for 2026/2027. Calculate 20% withholding tax, NRL1 approval gross payment savings, Section 24 mortgage tax credits, and UK Personal Allowance eligibility.",
      },
      {
        name: "keywords",
        content:
          "uk non resident landlord tax calculator 2026 2027, nrls 20 percent withholding tax calculator, nrl1 form approval rental income tax uk, section 24 mortgage interest relief calculator overseas landlord",
      },
      {
        property: "og:title",
        content: "UK Non-Resident Landlord Property Tax Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate UK tax on rental property income for overseas non-resident landlords under NRLS 2026 rules.",
      },
      { property: "og:url", content: "/calculators/uk-nrl-property-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-nrl-property-tax-calculator" }],
  }),
  component: UKNRLPropertyTaxCalculatorPage,
});

function UKNRLPropertyTaxCalculatorPage() {
  const [grossRentalIncome, setGrossRentalIncome] = useState<number>(24000);
  const [allowableExpenses, setAllowableExpenses] = useState<number>(4000);
  const [mortgageInterest, setMortgageInterest] = useState<number>(6000);
  const [hasNrl1Approval, setHasNrl1Approval] = useState<boolean>(true);
  const [isEligiblePersonalAllowance, setIsEligiblePersonalAllowance] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const netRentalProfit = Math.max(0, grossRentalIncome - allowableExpenses);

  let withholdingTax = 0;
  if (!hasNrl1Approval) {
    withholdingTax = grossRentalIncome * 0.20;
  }

  const personalAllowance = isEligiblePersonalAllowance ? 12570 : 0;
  const taxableRentalProfit = Math.max(0, netRentalProfit - personalAllowance);

  let baseTax = 0;
  if (taxableRentalProfit <= 37700) {
    baseTax = taxableRentalProfit * 0.20;
  } else if (taxableRentalProfit <= 112570) {
    baseTax = 37700 * 0.20 + (taxableRentalProfit - 37700) * 0.40;
  } else {
    baseTax =
      37700 * 0.20 + (112570 - 37700) * 0.40 + (taxableRentalProfit - 112570) * 0.45;
  }

  const section24TaxCredit = mortgageInterest * 0.20;
  const finalTaxPayable = Math.max(0, baseTax - section24TaxCredit);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Non-Resident Landlord Property Tax Calculator", item: "https://advaq.com/calculators/uk-nrl-property-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Non-Resident Landlord (NRL) Property Tax Estimator (2026/2027)",
    url: "https://advaq.com/calculators/uk-nrl-property-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK property tax for overseas non-resident landlords under the Non-Resident Landlords Scheme (NRLS) and Section 24 mortgage rules.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the UK Non-Resident Landlord Scheme (NRLS)?",
      a: "The Non-Resident Landlords Scheme (NRLS) requires UK letting agents or tenants to deduct 20% tax at source from rental payments made to landlords whose usual place of abode is outside the UK, unless HMRC grants NRL1 gross payment approval.",
    },
    {
      q: "How do overseas landlords receive rental income gross without 20% tax deduction?",
      a: "Landlords can submit form NRL1 (for individuals) or NRL2 (for companies) to HMRC. Once approved, HMRC issues a certificate instructing your letting agent to pay rent without deducting 20% withholding tax. You then pay tax annually via Self Assessment.",
    },
    {
      q: "Are non-resident landlords eligible for the UK Personal Allowance (£12,570)?",
      a: "UK citizens, British National (Overseas) passport holders, and passport holders of EEA countries are entitled to the full UK Personal Allowance (£12,570), meaning rental profits up to £12,570 are completely tax-free.",
    },
    {
      q: "How does Section 24 mortgage relief affect UK property landlords?",
      a: "Under Section 24, landlords can no longer deduct mortgage interest as a direct expense. Instead, mortgage interest receives a flat 20% tax credit against your final UK Income Tax bill.",
    },
    {
      q: "What allowable expenses can overseas landlords deduct from UK rent?",
      a: "Allowable expenses include letting agent fees, property management costs, building insurance, landlord liability cover, council tax / utility bills paid by landlord, safety certificates (gas, EPC, electrical), and repair costs.",
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
            <span>Non-Resident Landlord Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Non-Resident Landlord (NRL) Property Tax Estimator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate UK property tax for overseas landlords under the Non-Resident Landlords Scheme (NRLS), Section 24 mortgage relief, and NRL1 approval.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Gross UK Rental Income (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{grossRentalIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="6000"
                max="100000"
                step="2000"
                value={grossRentalIncome}
                onChange={(e) => setGrossRentalIncome(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Allowable Property Expenses (Repairs, Letting Agent Fees) (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{allowableExpenses.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30000"
                step="1000"
                value={allowableExpenses}
                onChange={(e) => setAllowableExpenses(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual Residential Mortgage Interest (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{mortgageInterest.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="40000"
                step="1000"
                value={mortgageInterest}
                onChange={(e) => setMortgageInterest(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">Under Section 24, mortgage interest receives a 20% tax credit.</span>
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasNrl1Approval}
                  onChange={(e) => setHasNrl1Approval(e.target.value)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">HMRC NRL1 Approval Granted?</strong>
                  <span className="text-gray-500">If checked, letting agent pays gross rent without 20% withholding tax.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={isEligiblePersonalAllowance}
                  onChange={(e) => setIsEligiblePersonalAllowance(e.target.value)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Eligible for UK Personal Tax Allowance (£12,570)?</strong>
                  <span className="text-gray-500">UK/EEA passport holders qualify for £12,570 tax-free allowance.</span>
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>NRL Property Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Rental Income:</span>
                  <span className="font-mono text-white font-semibold">£{grossRentalIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Rental Profit (after expenses):</span>
                  <span className="font-mono text-white font-semibold">£{netRentalProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Personal Allowance ({isEligiblePersonalAllowance ? "Eligible" : "None"}):</span>
                  <span className="font-mono text-emerald-400 font-semibold">£{personalAllowance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Section 24 Mortgage Tax Credit (20%):</span>
                  <span className="font-mono text-emerald-400 font-semibold">-£{Math.round(section24TaxCredit).toLocaleString()}</span>
                </div>
                {!hasNrl1Approval && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>NRLS 20% Withholding Tax:</span>
                    <span className="font-mono text-amber-400 font-semibold">£{Math.round(withholdingTax).toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Final Annual UK Tax Payable
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(finalTaxPayable).toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>NRL1 Status:</span>
                  <strong className={hasNrl1Approval ? "text-emerald-400 font-mono" : "text-amber-400 font-mono"}>
                    {hasNrl1Approval ? "Gross Payment Approved ✅" : "20% Withheld by Agent ⚠️"}
                  </strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/self-assessment"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Apply for NRL1 & File Tax with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP NRL PROPERTY TAX WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step NRL Property Tax Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of non-resident rental tax, Section 24 mortgage relief & NRL1 approval status.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Net Property Profit</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Expenses Deducted</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Rental Income:</span> <strong className="text-white">£{grossRentalIncome.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Allowable Property Expenses:</span> <strong className="text-emerald-400">-£{allowableExpenses.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Net Rental Profit:</span> <strong>£{netRentalProfit.toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Includes letting agent fees, repairs & safety certificates.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Personal Allowance & Tax Base</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{isEligiblePersonalAllowance ? "PA Eligible" : "No PA"}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Net Rental Profit:</span> <strong className="text-white">£{netRentalProfit.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Personal Allowance:</span> <strong className="text-emerald-400">-£{personalAllowance.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Taxable Base Profit:</span> <strong>£{taxableRentalProfit.toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 UK & EEA passport holders qualify for full £12,570 Personal Allowance.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Section 24 Mortgage Relief</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">20% Credit</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Mortgage Interest:</span> <strong className="text-white">£{mortgageInterest.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Base Tax Charge:</span> <strong className="text-navy-300">£{Math.round(baseTax).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Section 24 Tax Reduction:</span> <strong>-£{Math.round(section24TaxCredit).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Mortgage interest receives a flat 20% tax reduction under Section 24.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Tax & NRL1 Status</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${hasNrl1Approval ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {hasNrl1Approval ? "Gross Payment" : "20% Withheld"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Final HMRC Annual Tax Due:</span> <strong>£{Math.round(finalTaxPayable).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>NRL1 Status:</span> <strong className={hasNrl1Approval ? "text-emerald-400" : "text-amber-400"}>{hasNrl1Approval ? "NRL1 Approved (Gross Rent)" : "20% Tax Withheld at Source"}</strong></div>
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
                NRLS Tax Rules & Personal Allowance Eligibility (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Category / Status</th>
                  <th className="p-3.5">Without NRL1 Approval</th>
                  <th className="p-3.5">With NRL1 Approval</th>
                  <th className="p-3.5 rounded-tr-xl">Personal Allowance (£12,570)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">UK / EEA Passport Holder</td>
                  <td className="p-3.5 text-amber-600 font-semibold">20% Withheld on Gross Rent</td>
                  <td className="p-3.5 text-emerald-600 font-bold">100% Gross Rent Paid to You</td>
                  <td className="p-3.5 text-emerald-600 font-bold">ELIGIBLE (£12,570 0% Tax) ✅</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Non-EEA Overseas Resident</td>
                  <td className="p-3.5 text-amber-600 font-semibold">20% Withheld on Gross Rent</td>
                  <td className="p-3.5 text-emerald-600 font-bold">100% Gross Rent Paid to You</td>
                  <td className="p-3.5 text-gray-500 font-semibold">Depends on Double Tax Treaty</td>
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
              Frequently Asked Questions (Non-Resident Landlord Tax)
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
              Need NRL1 Approval & Non-Resident Tax Filing?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK chartered team files NRL1 forms with HMRC so you receive 100% gross rent without tax withholding, and submits your annual UK Self Assessment return.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/self-assessment"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Apply NRL1 & File Tax with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp NRL Property Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
