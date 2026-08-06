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
  Code,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-rd-tax-credit-calculator")({
  head: () => ({
    meta: [
      { title: "UK R&D Tax Credit Estimator for IT & Software Firms (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK R&D Tax Credit calculator for IT companies, software houses, and tech startups for 2026/2027. Calculate RDEC 20% scheme tax savings, cloud hosting eligibility, and cash refunds.",
      },
      {
        name: "keywords",
        content:
          "uk r and d tax credit calculator 2026 2027, software house r&d tax relief uk, rdec merged scheme software developer salary tax credit, hmrc additional information form aif r&d",
      },
      {
        property: "og:title",
        content: "UK R&D Tax Credit Estimator for Tech Firms | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate UK R&D Tax Credit savings for software development, developer salaries, and cloud infrastructure.",
      },
      { property: "og:url", content: "/calculators/uk-rd-tax-credit-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-rd-tax-credit-calculator" }],
  }),
  component: UKRDTaxCreditCalculatorPage,
});

function UKRDTaxCreditCalculatorPage() {
  const [developerSalaries, setDeveloperSalaries] = useState<number>(80000);
  const [cloudHostingCosts, setCloudHostingCosts] = useState<number>(15000);
  const [subcontractorCosts, setSubcontractorCosts] = useState<number>(25000);
  const [isLossMaking, setIsLossMaking] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const allowableSubcontractor = subcontractorCosts * 0.65;
  const totalQualifyingExpenditure = developerSalaries + cloudHostingCosts + allowableSubcontractor;

  const grossRdecCredit = totalQualifyingExpenditure * 0.20;
  const effectiveBenefitRate = isLossMaking ? 0.162 : 0.15;
  const netTaxBenefit = totalQualifyingExpenditure * effectiveBenefitRate;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK R&D Tax Credit Calculator", item: "https://advaq.com/calculators/uk-rd-tax-credit-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK R&D Tax Credit Estimator for IT & Tech Firms (2026/2027)",
    url: "https://advaq.com/calculators/uk-rd-tax-credit-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK R&D Tax Credit savings for software engineering salaries, AWS/Azure cloud hosting, and subcontractor costs under the Merged RDEC Scheme.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What software development activities qualify for UK R&D Tax Relief?",
      a: "Qualifying software activities include resolving non-trivial technological uncertainties, developing novel algorithms, building custom database architectures, enhancing cybersecurity protocols, and integrating complex APIs where standard off-the-shelf solutions do not exist.",
    },
    {
      q: "How does the UK Merged RDEC Scheme work for R&D claims in 2026/2027?",
      a: "The Merged RDEC Scheme provides a taxable expenditure credit of 20% on qualifying R&D costs. For profitable companies, this yields a net 15% Corporation Tax reduction after 25% CT is applied to the gross credit. For loss-making R&D intensive firms, the net cash payout is up to 16.2%.",
    },
    {
      q: "Are cloud computing and AWS/Azure costs eligible for UK R&D Tax Credits?",
      a: "Yes. Cloud computing costs, data license fees, and software licenses directly used in R&D activities (e.g. AWS, Azure, GCP testing environments) qualify for R&D tax relief under current HMRC guidelines.",
    },
    {
      q: "What is the mandatory HMRC Additional Information Form (AIF)?",
      a: "HMRC requires all R&D claims to be accompanied by an online Additional Information Form (AIF) submitted before or on the date the CT600 return is filed. The AIF details project descriptions, technological advancements, and cost breakdowns.",
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
            <span>UK R&D Tax Credit Estimator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK R&D Tax Credit Estimator for IT & Tech Firms (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate your HMRC R&D Tax Relief under the Merged RDEC Scheme for software development, engineer salaries, and cloud hosting.
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
                  Developer & Software Engineer Salaries (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{developerSalaries.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="300000"
                step="5000"
                value={developerSalaries}
                onChange={(e) => setDeveloperSalaries(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">100% of staff costs engaged in technical problem solving qualify.</span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Cloud Hosting & Data Costs (AWS, Azure, GCP) (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{cloudHostingCosts.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="2500"
                value={cloudHostingCosts}
                onChange={(e) => setCloudHostingCosts(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  UK Sub-Contractor R&D Costs (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{subcontractorCosts.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="2500"
                value={subcontractorCosts}
                onChange={(e) => setSubcontractorCosts(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">Subcontractor expenditure is eligible at 65% under HMRC R&D rules.</span>
            </div>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Loss-Making / Pre-Revenue Startup?</strong>
                <span className="text-gray-500 text-xs">Eligible for cash payout (16.2% net cash refund).</span>
              </div>
              <input
                type="checkbox"
                checked={isLossMaking}
                onChange={(e) => setIsLossMaking(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>R&D Tax Relief Estimate</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Qualifying R&D Expenditure:</span>
                  <span className="font-mono text-white font-semibold">£{Math.round(totalQualifyingExpenditure).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross RDEC Credit Rate:</span>
                  <span className="font-mono text-gold-400 font-semibold">20.0%</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective Benefit Rate:</span>
                  <span className="font-mono text-emerald-400 font-semibold">{(effectiveBenefitRate * 100).toFixed(1)}%</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  {isLossMaking ? "Estimated Cash Refund from HMRC" : "Corporation Tax Reduction"}
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  £{Math.round(netTaxBenefit).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/corporation-tax-return"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Prepare R&D Claim with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP R&D TAX CREDIT WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step R&D Tax Credit Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof under HMRC's Merged RDEC Scheme rules.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Qualifying R&D Expenditure</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Costs Calculated</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Developer Staff Salaries (100%):</span> <strong className="text-white">£{developerSalaries.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Cloud Computing (AWS/Azure):</span> <strong className="text-white">£{cloudHostingCosts.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>UK Subcontractors (65% Rate):</span> <strong className="text-white">£{Math.round(allowableSubcontractor).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Total Qualifying R&D Base:</span> <strong>£{Math.round(totalQualifyingExpenditure).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Merged RDEC Credit (20%)</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">20% Gross Credit</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross RDEC Credit (20%):</span> <strong className="text-white">£{Math.round(grossRdecCredit).toLocaleString()}</strong></div>
                <div className="flex justify-between text-navy-300"><span>Scheme Status:</span> <strong>Merged RDEC (Statutory 2026/27)</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Gross credit is subject to Corporation Tax.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Company Tax Profile</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{(effectiveBenefitRate * 100).toFixed(1)}% Net Benefit</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Company Tax Status:</span> <strong className="text-white">{isLossMaking ? "Loss-Making Startup" : "Profitable Business"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Effective Benefit Rate:</span> <strong>{(effectiveBenefitRate * 100).toFixed(1)}%</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Net HMRC Tax Benefit</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Benefit Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-emerald-400 font-bold"><span>Net R&D Benefit:</span> <strong>£{Math.round(netTaxBenefit).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Form Required:</span> <strong>Mandatory HMRC AIF Form</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Received as {isLossMaking ? "direct HMRC cash refund" : "Corporation Tax reduction"}.
              </p>
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
                UK R&D Tax Scheme Rates (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">R&D Scheme Name</th>
                  <th className="p-3.5">Gross Credit Rate</th>
                  <th className="p-3.5">Net Benefit (Profitable)</th>
                  <th className="p-3.5 rounded-tr-xl">Net Benefit (Loss-Making)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Merged RDEC Scheme</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">20.0%</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">15.0% CT Reduction</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">16.2% Cash Refund</td>
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
              Frequently Asked Questions (UK R&D Tax Relief)
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
              Need R&D Claim Preparation & AIF Form Submission?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK technical R&D tax team prepares technical narratives, cost qualification schedules, and submits mandatory AIF forms to HMRC.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/corporation-tax-return"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Prepare R&D Claim with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp R&D Tax Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
