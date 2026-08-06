import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-gratuity-calculator")({
  head: () => ({
    meta: [
      { title: "UAE End of Service Gratuity Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE End of Service Gratuity calculator. Calculate Labor Law No. 33 of 2021 severance pay for mainland & freezone employees in Dubai.",
      },
      {
        name: "keywords",
        content:
          "uae end of service gratuity calculator 2026, dubai labor law gratuity calculation 21 days 30 days, uae labor law decree 33 of 2021 severance payout, difc dews employee workplace savings",
      },
      {
        property: "og:title",
        content: "UAE End of Service Gratuity Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact UAE End of Service Gratuity payout under the new UAE Labor Law.",
      },
      { property: "og:url", content: "/calculators/uae-gratuity-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-gratuity-calculator" }],
  }),
  component: UAEGratuityCalculatorPage,
});

function UAEGratuityCalculatorPage() {
  const [basicMonthlySalaryAED, setBasicMonthlySalaryAED] = useState<number>(15000);
  const [yearsOfService, setYearsOfService] = useState<number>(4);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Daily Basic Salary = Basic Monthly Salary / 30 days
  const dailyBasicSalary = basicMonthlySalaryAED / 30;

  // Gratuity Rules 2026 (Federal Decree-Law No. 33 of 2021)
  // - Less than 1 year: 0 (Not Eligible)
  // - 1 to 5 years: 21 days daily basic salary per year
  // - Over 5 years: 21 days for first 5 years + 30 days for each additional year
  let totalGratuityAED = 0;

  if (yearsOfService >= 1) {
    if (yearsOfService <= 5) {
      totalGratuityAED = yearsOfService * 21 * dailyBasicSalary;
    } else {
      const first5YearsGratuity = 5 * 21 * dailyBasicSalary;
      const remainingYearsGratuity = (yearsOfService - 5) * 30 * dailyBasicSalary;
      totalGratuityAED = first5YearsGratuity + remainingYearsGratuity;
    }
  }

  // Maximum cap: 2 years total basic salary
  const maxGratuityCap = basicMonthlySalaryAED * 24;
  totalGratuityAED = Math.min(totalGratuityAED, maxGratuityCap);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE Gratuity Calculator", item: "https://advaq.com/calculators/uae-gratuity-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE End of Service Gratuity Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uae-gratuity-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate End of Service severance gratuity payouts under UAE Federal Decree-Law No. 33 of 2021 for mainland and freezone employees.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "How is UAE End of Service Gratuity calculated under Labor Law No. 33 of 2021?",
      a: "For continuous service of 1 to 5 years, an employee is entitled to 21 days' basic salary for each year. For service exceeding 5 years, the rate increases to 30 days' basic salary for each additional year, capped at a maximum total payout of 2 years' basic salary.",
    },
    {
      q: "Is gratuity calculated on basic salary or total monthly package?",
      a: "Gratuity is calculated STRICTLY on the basic salary stated in your MOHRE employment contract, excluding housing allowances, transport allowances, overtime, or bonuses.",
    },
    {
      q: "When must the employer pay the End of Service Gratuity?",
      a: "Under Article 53 of Federal Decree-Law No. 33 of 2021, the employer MUST pay all wages and End of Service entitlements within 14 days from the date of employment contract termination.",
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
            <span>UAE Gratuity Calculator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE End of Service Gratuity Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate statutory End of Service severance pay under UAE Federal Decree-Law No. 33 of 2021 for UAE Mainland employees and most Free Zones (excluding DIFC and ADGM which have separate employment regulations).
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: BASIC SALARY */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Basic Monthly Salary (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {basicMonthlySalaryAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="80000"
                step="1000"
                value={basicMonthlySalaryAED}
                onChange={(e) => setBasicMonthlySalaryAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Note: Gratuity is calculated strictly on Basic Salary (excluding allowances).
              </span>
            </div>

            {/* INPUT 2: YEARS OF SERVICE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Total Completed Years of Continuous Service:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {yearsOfService} Years
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={yearsOfService}
                onChange={(e) => setYearsOfService(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Gratuity Payout Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Daily Basic Rate:</span>
                  <span className="font-mono text-white font-semibold">AED {Math.round(dailyBasicSalary).toLocaleString()} / day</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>First 5 Years Rate (21 Days/yr):</span>
                  <span className="font-mono text-white">21 Days</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>After 5 Years Rate (30 Days/yr):</span>
                  <span className="font-mono text-white">30 Days</span>
                </div>
              </div>

              {/* NET DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total End of Service Gratuity Payout
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  AED {Math.round(totalGratuityAED).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ UAE Labor Law Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP GRATUITY WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step End of Service Gratuity Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Federal Decree-Law No. 33 of 2021 severance payout formula.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Daily Basic Salary Calculation</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED {Math.round(dailyBasicSalary).toLocaleString()} / day</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Basic Monthly Salary:</span> <strong className="text-white">AED {basicMonthlySalaryAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Statutory Monthly Divisor:</span> <strong className="text-white">30 Days</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Daily Basic Pay Rate:</span> <strong>AED {(basicMonthlySalaryAED / 30).toFixed(2)}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Service Tier & Days Multiplier</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{yearsOfService} Years Service</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Years 1 to 5 (21 Days/yr):</span> <strong className="text-emerald-400">{Math.min(yearsOfService, 5)} Years x 21 = {Math.min(yearsOfService, 5) * 21} Days</strong></div>
                <div className="flex justify-between"><span>Years &gt; 5 (30 Days/yr):</span> <strong className="text-emerald-400">{Math.max(0, yearsOfService - 5)} Years x 30 = {Math.max(0, yearsOfService - 5) * 30} Days</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Uncapped Gratuity Subtotal</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Subtotal Payout</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Total Accumulated Entitlement Days:</span> <strong className="text-white">{yearsOfService <= 5 ? yearsOfService * 21 : 105 + (yearsOfService - 5) * 30} Days</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Calculated Gratuity Subtotal:</span> <strong>AED {Math.round(totalGratuityAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Maximum Cap & Net Payout</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Payout</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>2-Year Basic Salary Maximum Cap:</span> <strong className="text-white">AED {maxGratuityCap.toLocaleString()}</strong></div>
                <div className="flex justify-between text-emerald-400 font-bold border-t border-navy-800 pt-1"><span>Net Employer Gratuity Check:</span> <strong>AED {Math.round(totalGratuityAED).toLocaleString()}</strong></div>
                <span className="text-[10px] text-navy-300 block pt-1 border-t border-navy-800/50 italic">
                  *Note: 24-month basic salary cap applies to standard contracts under Article 51(5). Limited contract calculations or specific freezone rules (DIFC DEWS) may differ.
                </span>
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
                UAE Labor Law No. 33 of 2021 Gratuity Rates Summary Table
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Service Duration</th>
                  <th className="p-3.5">Annual Days Entitlement</th>
                  <th className="p-3.5">Calculation Base</th>
                  <th className="p-3.5 rounded-tr-xl">Statutory Maximum Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Under 1 Year</td>
                  <td className="p-3.5 text-gray-500 font-mono font-semibold">Not Eligible (0 Days)</td>
                  <td className="p-3.5 font-mono">Basic Salary</td>
                  <td className="p-3.5 font-mono text-gray-500">N/A</td>
                </tr>
                <tr className={yearsOfService >= 1 && yearsOfService <= 5 ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">1 to 5 Years</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">21 Days Basic Salary per Year</td>
                  <td className="p-3.5 font-mono">Basic Salary / 30</td>
                  <td className="p-3.5 font-mono">24 Months Basic Salary</td>
                </tr>
                <tr className={yearsOfService > 5 ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Over 5 Years</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">30 Days Basic Salary per Extra Year</td>
                  <td className="p-3.5 font-mono">Basic Salary / 30</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">24 Months Basic Salary Cap</td>
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
              Frequently Asked Questions (UAE Gratuity)
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
              <Shield size={16} /> ADVAQ UAE Labor & Payroll Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Resolve UAE Gratuity & Employment Disputes with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UAE payroll specialists audit employment contracts, WPS payroll records, and MOHRE severance settlement calculations.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Consult UAE Labor Law Specialist <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Labor Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
