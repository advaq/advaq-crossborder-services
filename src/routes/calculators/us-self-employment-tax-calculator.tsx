import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-self-employment-tax-calculator")({
  head: () => ({
    meta: [
      { title: "US Self-Employment Tax Calculator (15.3%) (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US Self-Employment Tax calculator. Calculate 15.3% SE tax (12.4% Social Security + 2.9% Medicare) & non-resident alien exemptions under IRC Sec 1402.",
      },
      {
        name: "keywords",
        content:
          "us self employment tax calculator 15.3 percent 2026, do non resident foreign freelancers pay self employment tax, schedule se calculator us llc, irc section 1402 non resident alien exemption",
      },
      {
        property: "og:title",
        content: "US Self-Employment Tax Calculator (15.3%) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate 15.3% Self-Employment Tax and test non-resident alien exemption rules for foreign freelancers.",
      },
      { property: "og:url", content: "/calculators/us-self-employment-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-self-employment-tax-calculator" }],
  }),
  component: USSelfEmploymentTaxCalculatorPage,
});

function USSelfEmploymentTaxCalculatorPage() {
  const [netSelfEmploymentIncome, setNetSelfEmploymentIncome] = useState<number>(50000);
  const [isNonResidentAlien, setIsNonResidentAlien] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const taxableSeEarnings = netSelfEmploymentIncome * 0.9235;

  const socialSecurityCap = 168600;
  const socialSecurityTax = Math.min(taxableSeEarnings, socialSecurityCap) * 0.124;

  let medicareTax = taxableSeEarnings * 0.029;
  if (taxableSeEarnings > 200000) {
    medicareTax += (taxableSeEarnings - 200000) * 0.009;
  }

  const totalStandardSeTax = socialSecurityTax + medicareTax;
  const actualSeTaxOwed = isNonResidentAlien ? 0 : totalStandardSeTax;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US Self-Employment Tax Calculator", item: "https://advaq.com/calculators/us-self-employment-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Self-Employment Tax Calculator (15.3%) (2026/2027)",
    url: "https://advaq.com/calculators/us-self-employment-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate 15.3% US SECA Self-Employment Tax (Social Security & Medicare) and test Non-Resident Alien exemption under IRC Section 1402.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Do non-resident alien founders of single-member US LLCs pay US Self-Employment tax?",
      a: "No! Under Internal Revenue Code Section 1402(b), Self-Employment Tax (SECA) applies only to US citizens and US resident aliens. Non-Resident Aliens performing services outside the US are completely EXEMPT from the 15.3% Social Security and Medicare self-employment tax.",
    },
    {
      q: "What is the US Self-Employment Tax rate breakdown for US residents?",
      a: "For US tax residents, the self-employment tax rate is 15.3%, consisting of 12.4% Social Security (capped on net earnings up to $168,600) and 2.9% Medicare tax (uncapped, with an additional 0.9% tax on earnings above $200,000).",
    },
    {
      q: "How does the 92.35% SE net earnings deduction rule work?",
      a: "Before calculating the 15.3% SE tax, the IRS allows taxpayers to multiply net profit by 92.35% (0.9235), which mimics the employer half of FICA taxes.",
    },
    {
      q: "Do I file Schedule SE if I am a non-resident alien?",
      a: "No. Non-resident aliens filing Form 1040-NR do not file Schedule SE unless they are subject to a specific international Totalization Agreement requiring Social Security coverage.",
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
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US Self-Employment Tax</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US Self-Employment Tax Calculator (15.3%) (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate 15.3% Schedule SE tax for freelancers and test Foreign Non-Resident Alien exemption eligibility.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div
              className={`p-5 rounded-xl border flex items-center gap-4 ${
                isNonResidentAlien
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                  : "bg-amber-50 border-amber-300 text-amber-950"
              }`}
            >
              {isNonResidentAlien ? (
                <CheckCircle2 className="text-emerald-600 shrink-0" size={32} />
              ) : (
                <AlertCircle className="text-amber-600 shrink-0" size={32} />
              )}
              <div>
                <h4 className="font-serif font-bold text-base">
                  {isNonResidentAlien
                    ? "🎉 EXEMPT from 15.3% US Self-Employment Tax!"
                    : "⚠️ Subject to 15.3% US Self-Employment Tax (Schedule SE)"}
                </h4>
                <p className="text-xs opacity-90 mt-0.5">
                  {isNonResidentAlien
                    ? "Under IRS Code Sec. 1402(b), Non-Resident Aliens performing services physically outside the US owe $0 Self-Employment tax!"
                    : "US Tax Residents and Green Card holders must pay 15.3% SE tax on net self-employment earnings above $400."}
                </p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Net Self-Employment Profit ($):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  ${netSelfEmploymentIncome.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={netSelfEmploymentIncome}
                onChange={(e) => setNetSelfEmploymentIncome(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Non-Resident Alien Living Outside US?</strong>
                <span className="text-gray-500 text-xs">Foreign contractor operating remotely from Pakistan/overseas.</span>
              </div>
              <input
                type="checkbox"
                checked={isNonResidentAlien}
                onChange={(e) => setIsNonResidentAlien(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>SE Tax Calculation Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Self-Employment Profit:</span>
                  <span className="font-mono text-white font-semibold">${netSelfEmploymentIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Taxable SE Base (92.35%):</span>
                  <span className="font-mono text-white">${Math.round(taxableSeEarnings).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Social Security Tax (12.4%):</span>
                  <span className="font-mono text-white">${Math.round(socialSecurityTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Medicare Tax (2.9%):</span>
                  <span className="font-mono text-white">${Math.round(medicareTax).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Actual Self-Employment Tax Owed
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  ${Math.round(actualSeTaxOwed).toLocaleString()}
                </div>
                {isNonResidentAlien && (
                  <p className="mt-2 text-[11px] text-gold-400">
                    💰 You save ${Math.round(totalStandardSeTax).toLocaleString()}/year under the Foreign Non-Resident exemption!
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ US Tax CPA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP SCHEDULE C & SE TAX WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Schedule C & SE Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of 15.3% SE tax breakdown and IRC Sec. 1402(b) non-resident alien exemption.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Net Schedule C Earnings</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${netSelfEmploymentIncome.toLocaleString()} Net</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Net Schedule C Profit:</span> <strong className="text-white">${netSelfEmploymentIncome.toLocaleString()} USD</strong></div>
                <div className="flex justify-between"><span>IRS 92.35% Taxable Base Adjustment:</span> <strong className="text-gold-400">${Math.round(taxableSeEarnings).toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Social Security & Medicare Taxes</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">15.3% Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Social Security Tax (12.4%):</span> <strong className="text-white">${Math.round(socialSecurityTax).toLocaleString()} USD</strong></div>
                <div className="flex justify-between"><span>Medicare Tax (2.9%):</span> <strong className="text-white">${Math.round(medicareTax).toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Standard SE Tax Subtotal:</span> <strong>${Math.round(totalStandardSeTax).toLocaleString()} USD</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Non-Resident Alien Exemption (IRC 1402)</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isNonResidentAlien ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {isNonResidentAlien ? "Exempt ✅" : "Taxable (US Resident)"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Residency Status:</span> <strong className="text-white">{isNonResidentAlien ? "Foreign Non-Resident Alien" : "US Resident / Green Card"}</strong></div>
                <div className="flex justify-between"><span>IRC Sec. 1402 Exemption:</span> <strong className={isNonResidentAlien ? "text-emerald-400" : "text-red-400"}>{isNonResidentAlien ? "100% Tax Relief ($0 Tax)" : "No Exemption"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final SE Tax Owed</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">${Math.round(actualSeTaxOwed)} Owed</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Actual SE Tax Owed:</span> <strong>${Math.round(actualSeTaxOwed).toLocaleString()} USD</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Foreign Founder Annual Savings:</span> <strong>${Math.round(totalStandardSeTax).toLocaleString()} USD</strong></div>
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
                US Self-Employment Tax Rates & Exemption Matrix (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Tax Component</th>
                  <th className="p-3.5">US Resident / Green Card</th>
                  <th className="p-3.5 rounded-tr-xl">Foreign Non-Resident Alien</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Social Security Tax (12.4%)</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">12.4% (Capped at $168,600)</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% EXEMPT (IRC 1402) ✅</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Medicare Tax (2.9%)</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">2.9% Uncapped</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% EXEMPT (IRC 1402) ✅</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Combined SE Rate</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">15.3% Total SE Tax</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% Total SE Tax ✅</td>
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
              Frequently Asked Questions (US Self-Employment Tax)
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
              <Shield size={16} /> ADVAQ US Certified CPA Tax Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Protect Your 0% SE Tax Status with ADVAQ CPAs
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US tax team ensures your foreign-owned LLC is structured correctly under IRC Section 1402 so you legally pay $0 in US Self-Employment taxes.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Consult ADVAQ US Tax CPA <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Tax CPA
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
