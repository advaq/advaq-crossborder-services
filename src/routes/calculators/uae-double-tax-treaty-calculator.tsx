import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Globe,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-double-tax-treaty-calculator")({
  head: () => ({
    meta: [
      { title: "UAE Double Tax Treaty (DTT) Benefit Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Double Tax Treaty calculator. Calculate withholding tax savings on dividends, interest & royalties under Pakistan, UK, India, Germany, Canada, Australia & US DTTs.",
      },
      {
        name: "keywords",
        content:
          "uae double tax treaty calculator 2026, pakistan uae double tax treaty article 10 dividend wht, uae tax residency certificate trc calculator, uk uae dtt royalty withholding tax rates, india uae tax treaty dividend wht",
      },
      {
        property: "og:title",
        content: "UAE Double Tax Treaty (DTT) Benefit Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate withholding tax savings and Foreign Tax Credit relief under UAE international Double Tax Treaties.",
      },
      { property: "og:url", content: "/calculators/uae-double-tax-treaty-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-double-tax-treaty-calculator" }],
  }),
  component: UAEDoubleTaxTreatyCalculatorPage,
});

type PaymentType = "dividends" | "royalties" | "interest";

interface CountryRates {
  name: string;
  flag: string;
  hasTreaty: boolean;
  rates: Record<PaymentType, { domesticWht: number; treatyWht: number }>;
}

const countryTreatyData: Record<string, CountryRates> = {
  pakistan: {
    name: "Pakistan - UAE DTT",
    flag: "🇵🇰",
    hasTreaty: true,
    rates: {
      dividends: { domesticWht: 15, treatyWht: 10 },
      royalties: { domesticWht: 15, treatyWht: 12 },
      interest: { domesticWht: 10, treatyWht: 10 },
    },
  },
  uk: {
    name: "UK - UAE DTT",
    flag: "🇬🇧",
    hasTreaty: true,
    rates: {
      dividends: { domesticWht: 0, treatyWht: 0 },
      royalties: { domesticWht: 20, treatyWht: 0 },
      interest: { domesticWht: 20, treatyWht: 0 },
    },
  },
  india: {
    name: "India - UAE DTT",
    flag: "🇮🇳",
    hasTreaty: true,
    rates: {
      dividends: { domesticWht: 20, treatyWht: 10 },
      royalties: { domesticWht: 20, treatyWht: 10 },
      interest: { domesticWht: 20, treatyWht: 12.5 },
    },
  },
  germany: {
    name: "Germany - UAE DTT",
    flag: "🇩🇪",
    hasTreaty: true,
    rates: {
      dividends: { domesticWht: 26.375, treatyWht: 15 },
      royalties: { domesticWht: 15.825, treatyWht: 0 },
      interest: { domesticWht: 0, treatyWht: 0 },
    },
  },
  canada: {
    name: "Canada - UAE DTT",
    flag: "🇨🇦",
    hasTreaty: true,
    rates: {
      dividends: { domesticWht: 25, treatyWht: 15 },
      royalties: { domesticWht: 25, treatyWht: 10 },
      interest: { domesticWht: 25, treatyWht: 15 },
    },
  },
  australia: {
    name: "Australia - UAE DTT",
    flag: "🇦🇺",
    hasTreaty: true,
    rates: {
      dividends: { domesticWht: 30, treatyWht: 15 },
      royalties: { domesticWht: 30, treatyWht: 10 },
      interest: { domesticWht: 10, treatyWht: 10 },
    },
  },
  usa: {
    name: "United States (No Treaty)",
    flag: "🇺🇸",
    hasTreaty: false,
    rates: {
      dividends: { domesticWht: 30, treatyWht: 30 },
      royalties: { domesticWht: 30, treatyWht: 30 },
      interest: { domesticWht: 30, treatyWht: 30 },
    },
  },
};

function UAEDoubleTaxTreatyCalculatorPage() {
  const [partnerCountry, setPartnerCountry] = useState<string>("pakistan");
  const [paymentType, setPaymentType] = useState<PaymentType>("royalties");
  const [grossAmountAED, setGrossAmountAED] = useState<number>(200000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const countryInfo = countryTreatyData[partnerCountry] || countryTreatyData.pakistan;
  const rateConfig = countryInfo.rates[paymentType];

  const domesticWhtRate = rateConfig.domesticWht;
  const treatyWhtRate = rateConfig.treatyWht;

  const domesticWhtAED = grossAmountAED * (domesticWhtRate / 100);
  const treatyWhtAED = grossAmountAED * (treatyWhtRate / 100);
  const taxSavingsAED = Math.max(0, domesticWhtAED - treatyWhtAED);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE Double Tax Treaty Calculator", item: "https://advaq.com/calculators/uae-double-tax-treaty-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Double Tax Treaty (DTT) Benefit Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uae-double-tax-treaty-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate cross-border withholding tax reductions and Foreign Tax Credit relief under 135+ UAE International Double Tax Treaties.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "How does withholding tax work on payments from foreign countries to UAE residents?",
      a: "When a foreign entity pays dividends, royalties, or interest to a UAE resident company or individual, the foreign country's domestic tax law may require withholding tax (WHT) to be deducted at source. Presenting a valid UAE Tax Residency Certificate (TRC) invokes the bilateral Double Tax Treaty (DTT) to cap or eliminate this withholding tax.",
    },
    {
      q: "Does the UAE impose any withholding tax on outbound payments?",
      a: "NO! Under UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022), the UAE domestic withholding tax rate is currently 0%. Outbound dividends, royalties, and interest paid by UAE entities to foreign recipients are not subject to UAE withholding tax.",
    },
    {
      q: "Why is there no tax reduction for payments from the United States (USA)?",
      a: "As of 2026, the United States and the United Arab Emirates do NOT have a bilateral comprehensive Income Tax Treaty in effect. Outbound payments of US-sourced fixed, determinable, annual, or periodical (FDAP) income to UAE entities are subject to the standard US Internal Revenue Code (IRS) 30% withholding tax.",
    },
    {
      q: "What document is required to claim Double Tax Treaty relief?",
      a: "To claim withholding tax relief under a UAE DTT, the receiving company or individual MUST present an official Tax Residency Certificate (TRC) issued by the Federal Tax Authority (FTA) of the UAE to the foreign paying agent.",
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
            <span>Double Tax Treaty Benefits</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Double Tax Treaty (DTT) Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate cross-border withholding tax reductions and Foreign Tax Credit relief under 135+ UAE International Tax Treaties.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">

            {/* INPUT 1: PARTNER COUNTRY */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Partner Payer Country:
              </label>
              <select
                value={partnerCountry}
                onChange={(e) => setPartnerCountry(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="pakistan">🇵🇰 Pakistan (Pakistan - UAE Tax Treaty)</option>
                <option value="uk">🇬🇧 United Kingdom (UK - UAE Tax Treaty)</option>
                <option value="india">🇮🇳 India (India - UAE Tax Treaty)</option>
                <option value="germany">🇩🇪 Germany (Germany - UAE Tax Treaty)</option>
                <option value="canada">🇨🇦 Canada (Canada - UAE Tax Treaty)</option>
                <option value="australia">🇦🇺 Australia (Australia - UAE Tax Treaty)</option>
                <option value="usa">🇺🇸 United States (No Comprehensive Tax Treaty)</option>
              </select>
            </div>

            {/* INPUT 2: PAYMENT TYPE */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                2. Select Payment Type:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentType("royalties")}
                  className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                    paymentType === "royalties"
                      ? "bg-navy-950 text-white border-gold-500 shadow"
                      : "bg-white text-navy-950 border-border hover:border-gold-500/50"
                  }`}
                >
                  Royalties / IP
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType("dividends")}
                  className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                    paymentType === "dividends"
                      ? "bg-navy-950 text-white border-gold-500 shadow"
                      : "bg-white text-navy-950 border-border hover:border-gold-500/50"
                  }`}
                >
                  Dividends
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentType("interest")}
                  className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                    paymentType === "interest"
                      ? "bg-navy-950 text-white border-gold-500 shadow"
                      : "bg-white text-navy-950 border-border hover:border-gold-500/50"
                  }`}
                >
                  Interest / Debt
                </button>
              </div>
            </div>

            {/* INPUT 3: GROSS PAYMENT AMOUNT */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross Cross-Border Payment (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  AED {grossAmountAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="25000"
                value={grossAmountAED}
                onChange={(e) => setGrossAmountAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* SPECIAL ALERT FOR USA */}
            {!countryInfo.hasTreaty && (
              <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl flex gap-3 text-xs text-amber-950">
                <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <strong className="block font-bold">No UAE–US Comprehensive Tax Treaty Exists</strong>
                  <span>
                    US domestic withholding tax of 30% applies on FDAP payments (dividends, royalties, interest) to UAE entities. A UAE Tax Residency Certificate (TRC) will not reduce US IRS withholding tax.
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Treaty Savings Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Treaty Agreement:</span>
                  <span className="font-mono text-white font-semibold">{countryInfo.flag} {countryInfo.name}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Partner Country Domestic WHT Rate:</span>
                  <span className="font-mono text-white">{domesticWhtRate}% (AED {Math.round(domesticWhtAED).toLocaleString()})</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Reduced WHT Rate Under UAE DTT:</span>
                  <span className="font-mono text-emerald-400 font-semibold">{treatyWhtRate}% (AED {Math.round(treatyWhtAED).toLocaleString()})</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Tax Savings via UAE Tax Residency Certificate (TRC)
                </span>
                <div className="text-4xl font-serif font-bold text-emerald-400">
                  AED {Math.round(taxSavingsAED).toLocaleString()}
                </div>
                {countryInfo.hasTreaty && domesticWhtRate === 0 && (
                  <span className="text-[11px] text-navy-300 block mt-1">
                    ℹ️ Partner country domestic WHT is already 0% on this payment category.
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/contact"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Apply for UAE Tax Residency Certificate (TRC)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP DOUBLE TAX TREATY WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Double Tax Treaty Relief Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of bilateral withholding tax reduction via FTA Tax Residency Certificate (TRC).
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Foreign Payment & Country Audit</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{countryInfo.flag} {partnerCountry.toUpperCase()}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Payment Category:</span> <strong className="text-white">{paymentType.toUpperCase()}</strong></div>
                <div className="flex justify-between"><span>Gross Payment Amount:</span> <strong className="text-white">AED {grossAmountAED.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Partner Country Domestic WHT ({domesticWhtRate}%):</span> <strong>AED {Math.round(domesticWhtAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Bilateral DTT Reduced Rate</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">{treatyWhtRate}% Treaty Rate</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Reduced WHT Rate Under UAE DTT:</span> <strong className="text-emerald-400">{treatyWhtRate}%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Reduced WHT Deduction:</span> <strong>AED {Math.round(treatyWhtAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Net Cash Tax Savings</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Net Benefit</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Gross Tax Dollars Retained:</span> <strong className="text-white">AED {Math.round(taxSavingsAED).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Net DTT Tax Relief Benefit:</span> <strong>AED {Math.round(taxSavingsAED).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: FTA TRC Certificate Compliance</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">TRC Required</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Prerequisite Document:</span> <strong className="text-white">FTA Tax Residency Certificate</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>ADVAQ Expedited TRC Issuance:</span> <strong className="text-emerald-400">Issued in 5 Business Days</strong></div>
              </div>
            </div>

          </div>
        </section>

        {/* DISCLAIMER BOX */}
        <section className="bg-navy-900/5 border border-gold-500/30 rounded-2xl p-6 space-y-2 text-xs text-navy-950 leading-relaxed">
          <strong className="text-gold-600 font-serif text-sm block">📌 Statutory Note & Calculator Scope Disclaimer</strong>
          <p>
            Withholding tax rates shown reflect the partner country's domestic rates on cross-border payments made to UAE residents. The United Arab Emirates imposes <strong>0% domestic withholding tax</strong> on outbound payments. Treaty rates apply upon submission of a valid UAE Tax Residency Certificate (TRC) to the foreign payer. Rates vary by payment category, shareholding percentage, and beneficial ownership status. This calculator is for illustrative purposes only — consult ADVAQ's cross-border tax team for formal legal advice.
          </p>
        </section>

        {/* SECTION 1: QUICK REFERENCE SUMMARY TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                Master Reference Table: Partner Country Domestic vs UAE DTT Rates
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Partner Country</th>
                  <th className="p-3.5">Payment Type</th>
                  <th className="p-3.5">Without Treaty (Domestic WHT)</th>
                  <th className="p-3.5">With UAE DTT</th>
                  <th className="p-3.5 rounded-tr-xl">Tax Savings %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                {/* UK */}
                <tr className={partnerCountry === "uk" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950" rowSpan={3}>🇬🇧 United Kingdom</td>
                  <td className="p-3.5">Dividends</td>
                  <td className="p-3.5 font-mono text-emerald-600">0%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% ✅</td>
                  <td className="p-3.5 font-mono">0%</td>
                </tr>
                <tr className={partnerCountry === "uk" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5">Royalties</td>
                  <td className="p-3.5 font-mono text-red-600">20%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">20% Savings</td>
                </tr>
                <tr className={partnerCountry === "uk" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5">Interest</td>
                  <td className="p-3.5 font-mono text-red-600">20%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">20% Savings</td>
                </tr>

                {/* PAKISTAN */}
                <tr className={partnerCountry === "pakistan" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5 font-bold text-navy-950" rowSpan={3}>🇵🇰 Pakistan</td>
                  <td className="p-3.5">Dividends</td>
                  <td className="p-3.5 font-mono text-red-600">15%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">5% Savings</td>
                </tr>
                <tr className={partnerCountry === "pakistan" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5">Royalties</td>
                  <td className="p-3.5 font-mono text-red-600">15%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">12% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">3% Savings</td>
                </tr>
                <tr className={partnerCountry === "pakistan" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5">Interest</td>
                  <td className="p-3.5 font-mono">10%</td>
                  <td className="p-3.5 font-mono font-bold">10%</td>
                  <td className="p-3.5 font-mono">0%</td>
                </tr>

                {/* INDIA */}
                <tr className={partnerCountry === "india" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950" rowSpan={3}>🇮🇳 India</td>
                  <td className="p-3.5">Dividends</td>
                  <td className="p-3.5 font-mono text-red-600">20%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% Savings</td>
                </tr>
                <tr className={partnerCountry === "india" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5">Royalties</td>
                  <td className="p-3.5 font-mono text-red-600">20%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% Savings</td>
                </tr>
                <tr className={partnerCountry === "india" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5">Interest</td>
                  <td className="p-3.5 font-mono text-red-600">20%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">12.5% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">7.5% Savings</td>
                </tr>

                {/* GERMANY */}
                <tr className={partnerCountry === "germany" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5 font-bold text-navy-950" rowSpan={3}>🇩🇪 Germany</td>
                  <td className="p-3.5">Dividends</td>
                  <td className="p-3.5 font-mono text-red-600">26.375%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">15% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">11.375% Savings</td>
                </tr>
                <tr className={partnerCountry === "germany" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5">Royalties</td>
                  <td className="p-3.5 font-mono text-red-600">15.825%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">15.825% Savings</td>
                </tr>
                <tr className={partnerCountry === "germany" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5">Interest</td>
                  <td className="p-3.5 font-mono text-emerald-600">0%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% ✅</td>
                  <td className="p-3.5 font-mono">0%</td>
                </tr>

                {/* CANADA */}
                <tr className={partnerCountry === "canada" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950" rowSpan={3}>🇨🇦 Canada</td>
                  <td className="p-3.5">Dividends</td>
                  <td className="p-3.5 font-mono text-red-600">25%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">15% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% Savings</td>
                </tr>
                <tr className={partnerCountry === "canada" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5">Royalties</td>
                  <td className="p-3.5 font-mono text-red-600">25%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">15% Savings</td>
                </tr>
                <tr className={partnerCountry === "canada" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5">Interest</td>
                  <td className="p-3.5 font-mono text-red-600">25%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">15% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% Savings</td>
                </tr>

                {/* AUSTRALIA */}
                <tr className={partnerCountry === "australia" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5 font-bold text-navy-950" rowSpan={3}>🇦🇺 Australia</td>
                  <td className="p-3.5">Dividends</td>
                  <td className="p-3.5 font-mono text-red-600">30%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">15% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">15% Savings</td>
                </tr>
                <tr className={partnerCountry === "australia" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5">Royalties</td>
                  <td className="p-3.5 font-mono text-red-600">30%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">10% ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">20% Savings</td>
                </tr>
                <tr className={partnerCountry === "australia" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50"}>
                  <td className="p-3.5">Interest</td>
                  <td className="p-3.5 font-mono">10%</td>
                  <td className="p-3.5 font-mono font-bold">10%</td>
                  <td className="p-3.5 font-mono">0%</td>
                </tr>

                {/* USA */}
                <tr className={partnerCountry === "usa" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950" rowSpan={3}>🇺🇸 USA</td>
                  <td className="p-3.5">Dividends</td>
                  <td className="p-3.5 font-mono text-red-600">30%</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">30% ❌ No Treaty</td>
                  <td className="p-3.5 font-mono text-gray-500">0%</td>
                </tr>
                <tr className={partnerCountry === "usa" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5">Royalties</td>
                  <td className="p-3.5 font-mono text-red-600">30%</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">30% ❌ No Treaty</td>
                  <td className="p-3.5 font-mono text-gray-500">0%</td>
                </tr>
                <tr className={partnerCountry === "usa" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5">Interest</td>
                  <td className="p-3.5 font-mono text-red-600">30%</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">30% ❌ No Treaty</td>
                  <td className="p-3.5 font-mono text-gray-500">0%</td>
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
              Frequently Asked Questions (UAE Tax Treaties)
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
              <Globe size={16} /> ADVAQ International Tax Advisory Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Obtain Your UAE Tax Residency Certificate (TRC) with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our international tax consultants process your Tax Residency Certificate (TRC) application with the UAE Federal Tax Authority (FTA) to unlock Double Tax Treaty benefits worldwide.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Apply for UAE TRC Certificate <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp DTT Tax Consultant
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
