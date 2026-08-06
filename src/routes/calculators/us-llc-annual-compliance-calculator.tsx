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

export const Route = createFileRoute("/calculators/us-llc-annual-compliance-calculator")({
  head: () => ({
    meta: [
      { title: "US LLC Annual Compliance & Maintenance Cost Estimator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC annual maintenance cost calculator. Estimate registered agent, state annual reports, Form 5472 tax return, and FBAR costs.",
      },
      {
        name: "keywords",
        content:
          "us llc annual maintenance cost calculator 2026, wyoming delaware llc annual renewal cost, form 5472 cpa filing fee non resident llc, annual report deadlines us llc",
      },
      {
        property: "og:title",
        content: "US LLC Annual Compliance Cost Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Full transparency breakdown of ongoing annual fees for foreign-owned US LLCs.",
      },
      { property: "og:url", content: "/calculators/us-llc-annual-compliance-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-llc-annual-compliance-calculator" }],
  }),
  component: USLLCAnnualComplianceCalculatorPage,
});

function USLLCAnnualComplianceCalculatorPage() {
  const [selectedState, setSelectedState] = useState<"wyoming" | "delaware" | "newmexico">("wyoming");
  const [includeCpaFiling, setIncludeCpaFiling] = useState<boolean>(true);
  const [includeFbarFiling, setIncludeFbarFiling] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stateFees: Record<string, { fee: number; name: string }> = {
    wyoming: { fee: 60, name: "Wyoming Annual Report" },
    delaware: { fee: 300, name: "Delaware Franchise Tax" },
    newmexico: { fee: 0, name: "New Mexico ($0 Annual Fee)" },
  };

  const currentState = stateFees[selectedState] || stateFees.wyoming;
  const registeredAgentFee = 99;
  const cpa5472Fee = includeCpaFiling ? 350 : 0;
  const fbarFee = includeFbarFiling ? 99 : 0;

  const totalAnnualMaintenance = currentState.fee + registeredAgentFee + cpa5472Fee + fbarFee;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US LLC Annual Compliance Calculator", item: "https://advaq.com/calculators/us-llc-annual-compliance-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US LLC Annual Compliance & Maintenance Cost Estimator (2026/2027)",
    url: "https://advaq.com/calculators/us-llc-annual-compliance-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate annual state report fees, Registered Agent renewals, IRS Form 5472/1120 pro-forma CPA fees, and FinCEN FBAR reporting.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What are the mandatory annual compliance items for a foreign-owned US LLC?",
      a: "Every foreign-owned single-member LLC must fulfill 3 annual requirements: 1) State Annual Report / Franchise Tax renewal, 2) US Registered Agent renewal, and 3) IRS Form 5472 + Form 1120 pro-forma tax return filing.",
    },
    {
      q: "What is the annual report deadline for Wyoming LLCs?",
      a: "In Wyoming, the Annual Report and $60 state fee are due on the first day of the anniversary month of your LLC formation (e.g. formed June 15 -> due June 1 every year).",
    },
    {
      q: "What is the annual franchise tax deadline for Delaware LLCs?",
      a: "Delaware LLC annual franchise tax ($300) is due every year on or before June 1st. Failure to pay results in a mandatory $200 state penalty plus 1.5% monthly interest.",
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
            <span>US LLC Annual Compliance Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US LLC Annual Compliance Cost Estimator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Full transparency breakdown of ongoing annual fees: State renewal, Registered Agent, Form 5472 IRS tax returns, and FBAR filings.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select US State of LLC Formation:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedState("wyoming")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    selectedState === "wyoming"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Wyoming ($60/yr)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedState("delaware")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    selectedState === "delaware"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Delaware ($300/yr)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedState("newmexico")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    selectedState === "newmexico"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  New Mexico ($0/yr)
                </button>
              </div>
            </div>

            <div className="space-y-3 text-xs border-t border-border pt-4">
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeCpaFiling}
                    onChange={(e) => setIncludeCpaFiling(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">IRS Form 5472 & 1120 Pro-Forma CPA Filing</strong>
                    <span className="text-gray-500 text-[11px]">Mandatory information return for foreign single-member LLCs.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">$350</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeFbarFiling}
                    onChange={(e) => setIncludeFbarFiling(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">FinCEN Form 114 (FBAR Filing)</strong>
                    <span className="text-gray-500 text-[11px]">Required if US LLC bank account exceeds $10,000.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">$99</span>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Annual Cost Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>State Renewal ({currentState.name}):</span>
                  <span className="font-mono text-white font-semibold">${currentState.fee}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>US Registered Agent Renewal:</span>
                  <span className="font-mono text-white font-semibold">$99</span>
                </div>
                {includeCpaFiling && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>IRS Form 5472 CPA Return:</span>
                    <span className="font-mono text-gold-400 font-semibold">$350</span>
                  </div>
                )}
                {includeFbarFiling && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>FBAR FinCEN 114 Filing:</span>
                    <span className="font-mono text-gold-400 font-semibold">$99</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Annual Compliance Bill
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  ${totalAnnualMaintenance} / yr
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/single-member-llc-filing"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Annual Tax Compliance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US LLC ANNUAL COMPLIANCE WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step State Annual Report & Tax Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your exact state franchise fees, registered agent, and IRS compliance obligations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: State Franchise & Annual Report Fee</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${currentState.fee} / yr</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Selected US State:</span> <strong className="text-white">{selectedState.toUpperCase()} LLC</strong></div>
                <div className="flex justify-between"><span>Annual State Franchise Fee:</span> <strong className="text-emerald-400">${currentState.fee} USD</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: US Registered Agent Service</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">$99 / yr</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Physical State Agent Representation:</span> <strong className="text-white">$99 USD / yr</strong></div>
                <div className="flex justify-between"><span>State Compliance Protection:</span> <strong className="text-emerald-400">Included</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: IRS Form 5472 CPA Tax Return</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${cpa5472Fee} CPA Fee</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>IRS Form 5472 + 1120 Pro-Forma:</span> <strong className="text-white">${cpa5472Fee} USD</strong></div>
                <div className="flex justify-between"><span>IRS Non-Filing Fine Risk:</span> <strong className="text-amber-400">$25,000 Statutory Penalty</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Annual Compliance Bill</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">${totalAnnualMaintenance} / yr</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Annual Maintenance Cost:</span> <strong>${totalAnnualMaintenance} USD / year</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Good Standing Status:</span> <strong className="text-emerald-400">100% Guaranteed</strong></div>
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
                Annual Compliance Deadlines by US State (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">US State</th>
                  <th className="p-3.5">State Report Fee</th>
                  <th className="p-3.5">Annual Report Deadline</th>
                  <th className="p-3.5 rounded-tr-xl">IRS Tax Return Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className={selectedState === "wyoming" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Wyoming</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">$60 / year</td>
                  <td className="p-3.5">1st day of anniversary month</td>
                  <td className="p-3.5">April 15 (Form 5472)</td>
                </tr>
                <tr className={selectedState === "delaware" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Delaware</td>
                  <td className="p-3.5 font-mono text-amber-600 font-bold">$300 / year</td>
                  <td className="p-3.5">June 1st every year</td>
                  <td className="p-3.5">April 15 (Form 5472)</td>
                </tr>
                <tr className={selectedState === "newmexico" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">New Mexico</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">$0 / year</td>
                  <td className="p-3.5">No Annual Report Required</td>
                  <td className="p-3.5">April 15 (Form 5472)</td>
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
              Frequently Asked Questions (US LLC Annual Compliance)
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
              <Shield size={16} /> ADVAQ US Certified CPA Annual Compliance Package
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Let ADVAQ Handle Your US LLC Annual Filing
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              We file your state annual report, renew registered agent, and prepare IRS Form 5472 + Form 1120 pro-forma returns to keep your company in 100% Good Standing.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/single-member-llc-filing"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Annual Compliance with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Compliance Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
