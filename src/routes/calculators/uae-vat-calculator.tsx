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

export const Route = createFileRoute("/calculators/uae-vat-calculator")({
  head: () => ({
    meta: [
      { title: "UAE 5% VAT Registration Threshold & Return Estimator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE VAT calculator. Check mandatory AED 375,000 VAT threshold, voluntary AED 187,500 limit, and quarterly 5% VAT output vs input refund.",
      },
      {
        name: "keywords",
        content:
          "uae vat threshold calculator 375000 aed 2026, Dubai vat return filing estimator 5 percent, voluntary vat registration uae freezone, fta late vat registration 20000 penalty",
      },
      {
        property: "og:title",
        content: "UAE 5% VAT Registration Threshold & Return Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate mandatory VAT limits and quarterly 5% VAT payable or refundable with FTA.",
      },
      { property: "og:url", content: "/calculators/uae-vat-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-vat-calculator" }],
  }),
  component: UAEVATCalculatorPage,
});

function UAEVATCalculatorPage() {
  const [annualTurnoverAED, setAnnualTurnoverAED] = useState<number>(450000);
  const [annualVatExpensesAED, setAnnualVatExpensesAED] = useState<number>(100000);
  const [inputRecoveryPercentage, setInputRecoveryPercentage] = useState<number>(100);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const mandatoryThreshold = 375000;
  const voluntaryThreshold = 187500;

  const isMandatory = annualTurnoverAED >= mandatoryThreshold;
  const isVoluntary = annualTurnoverAED >= voluntaryThreshold && !isMandatory;

  const vatOutputAED = annualTurnoverAED * 0.05;
  const recoverableVatInputAED = (annualVatExpensesAED * 0.05) * (inputRecoveryPercentage / 100);
  const netVatPayableAED = Math.max(0, vatOutputAED - recoverableVatInputAED);
  const netVatRefundAED = recoverableVatInputAED > vatOutputAED ? recoverableVatInputAED - vatOutputAED : 0;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE 5% VAT Registration Calculator", item: "https://advaq.com/calculators/uae-vat-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE 5% VAT Registration Threshold & Return Estimator (2026/2027)",
    url: "https://advaq.com/calculators/uae-vat-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate mandatory AED 375,000 VAT threshold and quarterly 5% VAT output collected vs input tax recovery under UAE Federal Decree-Law No. 8 of 2017.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "When is VAT registration mandatory in the United Arab Emirates?",
      a: "VAT registration is mandatory when a business's taxable supplies and imports exceed AED 375,000 in the preceding 12 months or are expected to exceed AED 375,000 in the next 30 days.",
    },
    {
      q: "What is the voluntary VAT registration threshold in the UAE?",
      a: "Businesses with taxable turnover or expenses exceeding AED 187,500 can voluntarily register for UAE VAT to reclaim input VAT paid on operational expenses.",
    },
    {
      q: "What is the penalty for failing to register for UAE VAT on time?",
      a: "Under FTA Administrative Penalties regulations, a mandatory fine of AED 10,000 (previously AED 20,000) applies for late submission of a VAT registration application.",
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
            <span>UAE 5% VAT Calculator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE 5% VAT Registration & Return Estimator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Monitor your annual UAE turnover against the mandatory AED 375k VAT limit and calculate your 5% quarterly FTA VAT bill.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isMandatory
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : isVoluntary
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-gray-50 border-gray-200 text-gray-800"
            }`}
          >
            {isMandatory ? (
              <AlertTriangle className="text-amber-600 shrink-0" size={40} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={40} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isMandatory
                  ? "Mandatory UAE VAT Registration Required (Over AED 375,000)"
                  : isVoluntary
                  ? "Eligible for Voluntary UAE VAT Registration (Over AED 187,500)"
                  : "Below VAT Threshold (Registration Optional)"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isMandatory
                  ? "Your annual turnover has exceeded AED 375,000. Under FTA regulations, you must register for UAE VAT to avoid AED 20,000 late registration penalties."
                  : "You can voluntarily register for UAE VAT to reclaim 5% input tax on your business expenses."}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual UAE Turnover (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualTurnoverAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1500000"
                step="25000"
                value={annualTurnoverAED}
                onChange={(e) => setAnnualTurnoverAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Mandatory Limit: AED 375,000.
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual VAT-Subject Expenses (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualVatExpensesAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={annualTurnoverAED * 0.7}
                step="10000"
                value={annualVatExpensesAED}
                onChange={(e) => setAnnualVatExpensesAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-3">
              <span className="text-xs font-semibold text-gray-500 uppercase">5% Output VAT Collected</span>
              <div className="text-3xl font-serif font-bold text-navy-950">
                AED {Math.round(vatOutputAED).toLocaleString()}
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-3 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">Net Annual FTA VAT Payable</span>
              <div className="text-3xl font-serif font-bold text-white">
                AED {Math.round(netVatPayableAED).toLocaleString()}
              </div>
              {netVatRefundAED > 0 && (
                <p className="text-xs text-emerald-400 font-semibold">
                  🎉 You qualify for an FTA Input VAT Refund of AED {Math.round(netVatRefundAED).toLocaleString()}!
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need UAE VAT Registration & Quarterly Return Filing?</h4>
              <p className="text-xs text-gray-600">Avoid AED 20,000 late penalties with ADVAQ FTA specialists.</p>
            </div>
            <Link to="/uae-services/vat-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Register UAE VAT with ADVAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP UAE 5% VAT WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step UAE 5% VAT Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Federal Decree-Law No. 8 of 2017 output VAT vs input tax recovery calculation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: VAT Threshold Verification</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isMandatory ? "bg-amber-500/20 text-amber-400" : isVoluntary ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-500/20 text-gray-300"}`}>
                  {isMandatory ? "Mandatory AED 375k" : isVoluntary ? "Voluntary AED 187.5k" : "Below Limit"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Taxable Turnover:</span> <strong className="text-white">AED {annualTurnoverAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Mandatory Registration Threshold:</span> <strong className="text-emerald-400">AED 375,000</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: 5% Output VAT Collected</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED {Math.round(vatOutputAED).toLocaleString()} Output</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Taxable Invoiced Sales:</span> <strong className="text-white">AED {annualTurnoverAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Statutory 5% Output VAT Rate:</span> <strong className="text-gold-400">5.0%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Output VAT Collected Subtotal:</span> <strong>AED {Math.round(vatOutputAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Recoverable Input VAT Expenses</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">AED {Math.round(recoverableVatInputAED).toLocaleString()} Input</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Business Expenses Paid:</span> <strong className="text-white">AED {annualVatExpensesAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Input Tax Credit Recovery:</span> <strong className="text-emerald-400">AED {Math.round(recoverableVatInputAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net Quarterly FTA VAT Payable</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">AED {Math.round(netVatPayableAED)} Payable</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Net Annual VAT Owed FTA:</span> <strong>AED {Math.round(netVatPayableAED).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Estimated Quarterly Return Payment:</span> <strong className="text-emerald-400">AED {Math.round(netVatPayableAED / 4).toLocaleString()} / quarter</strong></div>
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
                UAE VAT Registration Thresholds & Penalties Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Registration Status</th>
                  <th className="p-3.5">Turnover Threshold (12 Months)</th>
                  <th className="p-3.5">Filing Frequency</th>
                  <th className="p-3.5 rounded-tr-xl">Late Registration Fine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className={isMandatory ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Mandatory Registration</td>
                  <td className="p-3.5 font-mono font-bold text-amber-600">Exceeds AED 375,000</td>
                  <td className="p-3.5">Quarterly (or Monthly)</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">AED 10,000 Administrative Fine</td>
                </tr>
                <tr className={isVoluntary ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Voluntary Registration</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">Exceeds AED 187,500</td>
                  <td className="p-3.5">Quarterly</td>
                  <td className="p-3.5 text-emerald-600 font-bold">No Penalty ($0)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Exempt / Below Threshold</td>
                  <td className="p-3.5 font-mono font-bold text-gray-500">Under AED 187,500</td>
                  <td className="p-3.5">N/A</td>
                  <td className="p-3.5 text-gray-500">No Penalty ($0)</td>
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
              Frequently Asked Questions (UAE VAT)
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
              <Shield size={16} /> ADVAQ FTA Registered Tax Agency
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Register for UAE 5% VAT with ADVAQ Tax Consultants
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our FTA Registered Tax Agents assist with VAT registration, TRN issuance, quarterly VAT return filings, and input tax recovery claims.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uae-services/vat-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Register UAE VAT with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp VAT Agent
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
