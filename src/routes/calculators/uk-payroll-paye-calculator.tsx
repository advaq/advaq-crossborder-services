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
  Users,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-payroll-paye-calculator")({
  head: () => ({
    meta: [
      { title: "UK Payroll & PAYE Tax Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Payroll & PAYE calculator for 2026/2027. Calculate Employer NI (13.8%), Employee NI (8%), PAYE Income Tax, auto-enrolment pension, and net take-home salary.",
      },
      {
        name: "keywords",
        content:
          "uk payroll paye calculator 2026 2027, uk employer national insurance calculator 13.8 percent, uk employee net salary take home calculator, auto enrolment pension threshold 2026",
      },
      {
        property: "og:title",
        content: "UK Payroll & PAYE Tax Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate total employer payroll cost and net employee take-home pay under 2026 HMRC PAYE tax rules.",
      },
      { property: "og:url", content: "/calculators/uk-payroll-paye-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-payroll-paye-calculator" }],
  }),
  component: UKPayrollPAYECalculatorPage,
});

function UKPayrollPAYECalculatorPage() {
  const [grossSalary, setGrossSalary] = useState<number>(35000);
  const [pensionPercentage, setPensionPercentage] = useState<number>(3);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const taxableSalary = Math.max(0, grossSalary - 12570);
  let employeeIncomeTax = 0;
  if (taxableSalary <= 37700) {
    employeeIncomeTax = taxableSalary * 0.2;
  } else if (taxableSalary <= 112570) {
    employeeIncomeTax = 37700 * 0.2 + (taxableSalary - 37700) * 0.4;
  } else {
    employeeIncomeTax =
      37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableSalary - 112570) * 0.45;
  }

  let employeeNI = 0;
  if (grossSalary > 12570) {
    const niBand1 = Math.min(Math.max(0, grossSalary - 12570), 37700);
    const niBand2 = Math.max(0, grossSalary - 50270);
    employeeNI = niBand1 * 0.08 + niBand2 * 0.02;
  }

  const employerNIBase = Math.max(0, grossSalary - 9100);
  const employerNI = employerNIBase * 0.138;

  const qualifyingPensionEarnings = Math.min(Math.max(0, grossSalary - 6240), 44030);
  const employerPension = qualifyingPensionEarnings * (pensionPercentage / 100);

  const netEmployeeTakeHome = grossSalary - employeeIncomeTax - employeeNI;
  const totalCostToEmployer = grossSalary + employerNI + employerPension;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Payroll & PAYE Tax Calculator", item: "https://advaq.com/calculators/uk-payroll-paye-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Payroll & PAYE Tax Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-payroll-paye-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK employee net salary, PAYE tax, Employee NI, Employer NI (13.8%), and Workplace Pension auto-enrolment costs.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the UK Employer National Insurance rate for 2026/2027?",
      a: "Employer Class 1 National Insurance is charged at 13.8% on employee earnings above the Secondary Threshold (£9,100 per year or £175 per week). Eligible UK businesses can claim the £5,000 annual Employment Allowance to reduce their Employer NI liability.",
    },
    {
      q: "What are the UK Employee National Insurance rates for 2026/2027?",
      a: "Employees pay Class 1 Primary National Insurance at a main rate of 8% on earnings between £12,570 and £50,270 per year, and 2% on all earnings above £50,270.",
    },
    {
      q: "What are the UK Workplace Pension Auto-Enrolment minimum contribution rates?",
      a: "Under UK law, total minimum pension contributions under auto-enrolment are 8% of qualifying earnings (£6,240 to £50,270). Employers must contribute a minimum of 3%, and the employee contributes 5% (which includes 1% tax relief).",
    },
    {
      q: "How does HMRC Real Time Information (RTI) payroll reporting work?",
      a: "Employers must report PAYE deductions to HMRC on or before every payday using a Full Payment Submission (FPS) generated by RTI-compliant payroll software.",
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
            <span>UK Payroll & PAYE</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Payroll & PAYE Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate gross-to-net employee salary, Employer National Insurance (13.8%), Employee NI (8%), PAYE tax, and Workplace Pension.
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
                  Gross Annual Salary (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{grossSalary.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="12000"
                max="120000"
                step="1000"
                value={grossSalary}
                onChange={(e) => setGrossSalary(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Employer Pension Contribution (%):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {pensionPercentage}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={pensionPercentage}
                onChange={(e) => setPensionPercentage(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Minimum UK Auto-Enrolment Employer Pension Rate is 3%.
              </span>
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Payroll Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Employee Salary:</span>
                  <span className="font-mono text-white font-semibold">£{grossSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Employee PAYE Tax:</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(employeeIncomeTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Employee NI (8%/2%):</span>
                  <span className="font-mono text-gold-400 font-semibold">£{Math.round(employeeNI).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200 pt-2 border-t border-white/10">
                  <span>Employer NI (13.8%):</span>
                  <span className="font-mono text-amber-400 font-semibold">+£{Math.round(employerNI).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Employer Pension ({pensionPercentage}%):</span>
                  <span className="font-mono text-amber-400 font-semibold">+£{Math.round(employerPension).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4 space-y-3">
                <div>
                  <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                    Net Employee Take-Home Pay
                  </span>
                  <div className="text-3xl font-serif font-bold text-emerald-400">
                    £{Math.round(netEmployeeTakeHome).toLocaleString()} / year
                  </div>
                  <div className="text-xs text-navy-300">
                    (£{Math.round(netEmployeeTakeHome / 12).toLocaleString()} / month)
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-navy-200">Total Employer Payroll Cost:</span>
                  <strong className="text-gold-400 font-mono">£{Math.round(totalCostToEmployer).toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Setup UK Payroll & PAYE with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP PAYROLL WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step UK PAYE Payroll Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of employee deductions and total employer payroll costs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Employee PAYE Income Tax</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(employeeIncomeTax).toLocaleString()} Tax</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Annual Salary:</span> <strong className="text-white">£{grossSalary.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Personal Allowance:</span> <strong className="text-emerald-400">-£12,570</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Taxable Salary (20%/40%):</span> <strong>£{taxableSalary.toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Deducted directly at source via PAYE on payday.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Employee National Insurance (Class 1)</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">8% Main Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Primary Threshold (£12,570):</span> <strong className="text-emerald-400">0% Tax</strong></div>
                <div className="flex justify-between"><span>£12,570 to £50,270 (8%):</span> <strong className="text-white">£{Math.round(employeeNI).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Employee Net Take-Home:</span> <strong>£{Math.round(netEmployeeTakeHome).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Take-Home Salary = Gross Salary (£{grossSalary.toLocaleString()}) minus Tax (£{Math.round(employeeIncomeTax).toLocaleString()}) & NI (£{Math.round(employeeNI).toLocaleString()}).
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Employer National Insurance (13.8%)</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">Employer Cost</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Secondary Threshold Base (£9,100):</span> <strong className="text-white">£{employerNIBase.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-amber-400"><span>Employer NI Charge (13.8%):</span> <strong>+£{Math.round(employerNI).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Eligible employers can claim £5,000/yr HMRC Employment Allowance!
              </p>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Employer Cost</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Total Cost</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Salary:</span> <strong className="text-white">£{grossSalary.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Employer NI (13.8%):</span> <strong className="text-amber-400">+£{Math.round(employerNI).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Employer Pension ({pensionPercentage}%):</span> <strong className="text-amber-400">+£{Math.round(employerPension).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Total Cost to Employer:</span> <strong>£{Math.round(totalCostToEmployer).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Includes Workplace Pension auto-enrolment contributions.
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
                UK Payroll Tax & NI Rates (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Payroll Tax Type</th>
                  <th className="p-3.5">Threshold / Band</th>
                  <th className="p-3.5">Tax / NI Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Deducted From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Employee Income Tax (PAYE)</td>
                  <td className="p-3.5 font-mono">£12,571 – £50,270</td>
                  <td className="p-3.5 font-bold text-gold-600">20% Basic</td>
                  <td className="p-3.5">Employee Gross Salary</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Employee Class 1 NI</td>
                  <td className="p-3.5 font-mono">£12,571 – £50,270</td>
                  <td className="p-3.5 font-bold text-gold-600">8% Main Rate</td>
                  <td className="p-3.5">Employee Gross Salary</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Employer Class 1 NI</td>
                  <td className="p-3.5 font-mono">Above £9,100 / yr</td>
                  <td className="p-3.5 font-bold text-red-600">13.8% Employer Rate</td>
                  <td className="p-3.5 font-semibold text-navy-950">Employer Company Cost</td>
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
              Frequently Asked Questions (UK Payroll & PAYE)
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
              Need Fully Managed UK Payroll & RTI Filing?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK payroll team sets up HMRC PAYE schemes, processes monthly payslips, files RTI FPS submissions, and manages Auto-Enrolment pension contributions.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Setup UK Payroll with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Payroll Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
