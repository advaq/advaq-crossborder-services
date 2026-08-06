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
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-setup-cost-calculator")({
  head: () => ({
    meta: [
      { title: "UK LTD Overseas Formation & Annual Compliance Cost Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Limited Company setup cost calculator for non-residents for 2026/2027. Calculate Companies House fees, London registered address, Wise business bank setup, CS01 & CT600 accounts.",
      },
      {
        name: "keywords",
        content:
          "uk ltd company setup cost calculator non resident 2026 2027, uk company incorporation total cost, london registered address cs01 confirmation statement cost, wise business bank account setup non resident uk",
      },
      {
        property: "og:title",
        content: "UK LTD Overseas Formation & Compliance Cost Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact Year-1 setup fees and annual recurring costs for operating a UK LTD from overseas.",
      },
      { property: "og:url", content: "/calculators/uk-setup-cost-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-setup-cost-calculator" }],
  }),
  component: UKSetupCostCalculatorPage,
});

function UKSetupCostCalculatorPage() {
  const [includeLondonAddress, setIncludeLondonAddress] = useState<boolean>(true);
  const [includeServiceAddress, setIncludeServiceAddress] = useState<boolean>(true);
  const [includeBankAssistance, setIncludeBankAssistance] = useState<boolean>(true);
  const [includeConfirmationStatement, setIncludeConfirmationStatement] = useState<boolean>(true);
  const [includeAnnualAccounts, setIncludeAnnualAccounts] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const baseCompaniesHouseFee = 50;
  const advaqFormationPackage = 99;
  const londonAddressFee = includeLondonAddress ? 120 : 0;
  const serviceAddressFee = includeServiceAddress ? 60 : 0;
  const bankAssistanceFee = includeBankAssistance ? 99 : 0;
  const confirmationStatementFee = includeConfirmationStatement ? 75 : 0;
  const annualAccountsFee = includeAnnualAccounts ? 250 : 0;

  const totalYear1Cost =
    baseCompaniesHouseFee +
    advaqFormationPackage +
    londonAddressFee +
    serviceAddressFee +
    bankAssistanceFee +
    confirmationStatementFee +
    annualAccountsFee;

  const annualRecurringCost =
    londonAddressFee + serviceAddressFee + confirmationStatementFee + annualAccountsFee;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK LTD Setup Cost Calculator", item: "https://advaq.com/calculators/uk-setup-cost-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK LTD Non-Resident Setup & Compliance Cost Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-setup-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Limited Company formation fees, London registered address, Wise business bank account setup, and annual CT600 accounting costs.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Can non-UK residents incorporate a UK Limited Company completely online?",
      a: "Yes! HMRC and Companies House allow 100% foreign-owned UK Limited Companies. You do not need UK residency, a UK visa, or to visit the UK. Incorporation is completed within 3 to 24 hours online.",
    },
    {
      q: "What is required to open a Wise Business bank account for a non-resident UK LTD?",
      a: "To open a Wise or Revolut Business bank account from overseas, you need your UK Certificate of Incorporation, Memorandum & Articles of Association, passport, proof of home address in your home country, and a valid London registered office address.",
    },
    {
      q: "What are the mandatory annual filings for a UK Limited Company?",
      a: "Every UK company must file: 1) Annual Confirmation Statement (CS01) with Companies House, 2) Annual Accounts with Companies House, and 3) CT600 Corporation Tax return with HMRC (even if dormant).",
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
            <span>UK LTD Setup & Compliance Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK LTD Non-Resident Setup & Compliance Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact Companies House fees, London registered address, Wise bank account assistance, and annual CT600 accounts filing.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
              Select Required UK LTD Packages & Services:
            </label>

            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeLondonAddress}
                    onChange={(e) => setIncludeLondonAddress(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">London Registered Office Address (1 Year)</strong>
                    <span className="text-gray-500 text-[11px]">Official UK legal address for Companies House & HMRC.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£120/yr</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeServiceAddress}
                    onChange={(e) => setIncludeServiceAddress(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Director Service Address Privacy</strong>
                    <span className="text-gray-500 text-[11px]">Keeps your home address off the public Companies House register.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£60/yr</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeBankAssistance}
                    onChange={(e) => setIncludeBankAssistance(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Wise Business & Revolut Bank Setup Assistance</strong>
                    <span className="text-gray-500 text-[11px]">Guaranteed support for opening UK business accounts from overseas.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£99</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeConfirmationStatement}
                    onChange={(e) => setIncludeConfirmationStatement(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Confirmation Statement (CS01) Filing</strong>
                    <span className="text-gray-500 text-[11px]">Mandatory annual confirmation statement filed with Companies House.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£75/yr</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeAnnualAccounts}
                    onChange={(e) => setIncludeAnnualAccounts(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Annual Accounts & CT600 Corporation Tax Filing</strong>
                    <span className="text-gray-500 text-[11px]">Complete dormant/active accounts prepared by UK qualified accountant.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£250/yr</span>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>UK Package Cost Breakdown</span>
              </div>

              <div className="space-y-2.5 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Companies House Govt Fee:</span>
                  <span className="font-mono text-white">£{baseCompaniesHouseFee}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>ADVAQ Legal Formation:</span>
                  <span className="font-mono text-white">£{advaqFormationPackage}</span>
                </div>
                {includeLondonAddress && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>London Registered Address:</span>
                    <span className="font-mono text-gold-400">£{londonAddressFee}</span>
                  </div>
                )}
                {includeServiceAddress && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Director Privacy Address:</span>
                    <span className="font-mono text-gold-400">£{serviceAddressFee}</span>
                  </div>
                )}
                {includeBankAssistance && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Wise Bank Support:</span>
                    <span className="font-mono text-gold-400">£{bankAssistanceFee}</span>
                  </div>
                )}
                {includeConfirmationStatement && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Annual CS01 Filing:</span>
                    <span className="font-mono text-gold-400">£{confirmationStatementFee}</span>
                  </div>
                )}
                {includeAnnualAccounts && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Annual Accounts & CT600:</span>
                    <span className="font-mono text-gold-400">£{annualAccountsFee}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4 space-y-3">
                <div>
                  <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                    Total Year-1 Setup Cost
                  </span>
                  <div className="text-4xl font-serif font-bold text-white">
                    £{totalYear1Cost}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-navy-200">Annual Recurring Compliance (Yr 2+):</span>
                  <strong className="text-emerald-400 font-mono">£{annualRecurringCost}/yr</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Incorporate UK LTD with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP SETUP COST WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step UK LTD Formation & Compliance Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your exact initial setup and annual recurring costs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Statutory Govt & Legal Formation</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Formation Base</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Companies House Govt Filing Fee:</span> <strong className="text-white">£{baseCompaniesHouseFee}</strong></div>
                <div className="flex justify-between"><span>ADVAQ Professional Formation:</span> <strong className="text-white">£{advaqFormationPackage}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Formation Base Total:</span> <strong>£{baseCompaniesHouseFee + advaqFormationPackage}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: London Address & Privacy Services</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Address Base</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>London Registered Address:</span> <strong className="text-white">£{londonAddressFee}</strong></div>
                <div className="flex justify-between"><span>Director Privacy Service Address:</span> <strong className="text-white">£{serviceAddressFee}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Annual Address Subtotal:</span> <strong>£{londonAddressFee + serviceAddressFee}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Bank Support & Annual Filings</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Compliance</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Wise / Revolut Bank Setup Support:</span> <strong className="text-white">£{bankAssistanceFee}</strong></div>
                <div className="flex justify-between"><span>Confirmation Statement (CS01):</span> <strong className="text-white">£{confirmationStatementFee}</strong></div>
                <div className="flex justify-between"><span>Annual Accounts & CT600:</span> <strong className="text-white">£{annualAccountsFee}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Year 1 & Recurring Summary</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Cost Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Year 1 Setup Cost:</span> <strong>£{totalYear1Cost}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Annual Recurring Compliance (Yr 2+):</span> <strong>£{annualRecurringCost}/yr</strong></div>
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
                UK LTD Overseas Package Inclusions (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Package Component</th>
                  <th className="p-3.5">Fee</th>
                  <th className="p-3.5">Frequency</th>
                  <th className="p-3.5 rounded-tr-xl">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Companies House Incorporation</td>
                  <td className="p-3.5 font-mono font-bold">£50</td>
                  <td className="p-3.5 text-emerald-600 font-bold">One-Time</td>
                  <td className="p-3.5">Official UK Government registration fee</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">London Registered Address</td>
                  <td className="p-3.5 font-mono font-bold">£120</td>
                  <td className="p-3.5 text-navy-700">Annual</td>
                  <td className="p-3.5">Required legal UK address for Companies House & HMRC</td>
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
              Frequently Asked Questions (UK LTD Setup)
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
              Ready to Incorporate Your UK LTD from Overseas?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK team incorporates your company in 24 hours, provides London registered office address, assists with Wise business bank accounts, and manages annual accounting.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Incorporate UK LTD with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Formation Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
