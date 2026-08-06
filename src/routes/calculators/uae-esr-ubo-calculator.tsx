import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-esr-ubo-calculator")({
  head: () => ({
    meta: [
      { title: "UAE ESR & UBO Compliance Risk Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Economic Substance Regulations (ESR) and Ultimate Beneficial Owner (UBO) compliance calculator.",
      },
      {
        name: "keywords",
        content:
          "uae economic substance regulations esr calculator 2026, ubo declaration reporting penalty fine dubai freezone, cabinet decision 57 of 2020 esr relevant activities, cabinet decision 109 of 2023 ubo register uae",
      },
      {
        property: "og:title",
        content: "UAE ESR & UBO Compliance Risk Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check ESR filing obligations and UBO declaration penalty risks for UAE companies.",
      },
      { property: "og:url", content: "/calculators/uae-esr-ubo-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-esr-ubo-calculator" }],
  }),
  component: UAEEsrUboCalculatorPage,
});

function UAEEsrUboCalculatorPage() {
  const [relevantActivity, setRelevantActivity] = useState<string>("none");
  const [isUboFiled, setIsUboFiled] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isEsrApplicable = relevantActivity !== "none";

  const esrPenaltyAED = isEsrApplicable ? 20000 : 0;
  const uboPenaltyAED = !isUboFiled ? 100000 : 0;
  const totalCompliancePenaltyRiskAED = esrPenaltyAED + uboPenaltyAED;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE ESR & UBO Risk Checker", item: "https://advaq.com/calculators/uae-esr-ubo-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE ESR & UBO Compliance Risk Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-esr-ubo-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check Economic Substance Regulations (ESR) filing obligations and Ultimate Beneficial Owner (UBO) declaration penalties under UAE Cabinet Decision No. 57 of 2020 and Cabinet Decision No. 109 of 2023.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What are the 9 Relevant Activities under Economic Substance Regulations (ESR)?",
      a: "The 9 ESR Relevant Activities are: 1) Banking Business, 2) Insurance Business, 3) Investment Fund Management, 4) Lease-Finance Business, 5) Headquarters Business, 6) Shipping Business, 7) Holding Company Business, 8) Intellectual Property (IP) Business, and 9) Distribution & Service Centre Business.",
    },
    {
      q: "What is the penalty for failing to submit an ESR Notification or Report?",
      a: "Failing to submit an ESR Notification carries an administrative penalty of AED 20,000. Failing to submit an ESR Report or meet the Economic Substance Test carries an administrative penalty of AED 50,000 for the first year and AED 400,000 for subsequent years.",
    },
    {
      q: "Who is an Ultimate Beneficial Owner (UBO) under UAE Cabinet Decision No. 109 of 2023?",
      a: "A UBO is any natural person who ultimately owns or controls 25% or more of the company's capital, or holds 25% or more of the voting rights. All UAE mainland and freezone entities must maintain a Register of UBOs and Register of Partners/Shareholders.",
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
            <span>UAE ESR & UBO Compliance</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE ESR & UBO Compliance Risk Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Test your Economic Substance Regulations (ESR) filing obligations and Ultimate Beneficial Owner (UBO) declaration penalties.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isEsrApplicable || !isUboFiled
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : "bg-emerald-50 border-emerald-300 text-emerald-950"
            }`}
          >
            {isEsrApplicable || !isUboFiled ? (
              <AlertTriangle className="text-amber-600 shrink-0" size={40} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={40} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isEsrApplicable
                  ? "ESR Relevant Activity Identified (Mandatory ESR Filing Required)"
                  : !isUboFiled
                  ? "UBO Register Non-Compliance Risk (AED 100,000 Penalty)"
                  : "🎉 Fully ESR & UBO Compliant"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isEsrApplicable
                  ? "Your business license activity falls under ESR Relevant Activities. You must submit an ESR Notification and ESR Report to the MoF portal annually."
                  : "All UAE companies must maintain a UBO Register and file beneficiary disclosures to prevent license suspension."}
              </p>
            </div>
          </div>

          <div className="space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Trade License Activity:
              </label>
              <select
                value={relevantActivity}
                onChange={(e) => setRelevantActivity(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="none">Standard IT, Consulting, Freelance or Retail Services (No ESR)</option>
                <option value="headquarters">Headquarters Business (Group Services)</option>
                <option value="distribution">Distribution & Service Centre (Related Party Goods)</option>
                <option value="ip">Intellectual Property Holding (Patents, Trademarks)</option>
                <option value="holding">Pure Equity Holding Company</option>
              </select>
            </div>

            <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <input
                type="checkbox"
                checked={isUboFiled}
                onChange={(e) => setIsUboFiled(e.target.checked)}
                className="accent-gold-500 w-4 h-4"
              />
              <div>
                <strong className="text-navy-950 block">UBO Beneficiary Register Filed with Licensing Authority?</strong>
                <span className="text-gray-500">Cabinet Resolution No. 58 of 2020 requirement.</span>
              </div>
            </label>
          </div>

          <div className="bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/20 flex items-center justify-between">
            <div>
              <span className="text-xs text-gold-500 uppercase font-semibold block">Total Statutory Penalty Exposure</span>
              <div className="text-3xl font-serif font-bold text-white mt-1">
                AED {totalCompliancePenaltyRiskAED.toLocaleString()}
              </div>
            </div>
            <Link to="/uae-services/corporate-tax-registration" className="btn-gold text-xs uppercase tracking-wider px-6 py-3 font-semibold">
              File Compliance Returns with ADVAQ
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP ESR & UBO AUDIT */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step ESR & UBO Compliance Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of Cabinet Decision No. 57 of 2020 & Cabinet Decision No. 109 of 2023 risk assessment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Relevant Activity Classification</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isEsrApplicable ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {isEsrApplicable ? "ESR Applicable ⚠️" : "Exempt ($0 ESR)"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Selected Business Activity:</span> <strong className="text-white">{relevantActivity.toUpperCase()}</strong></div>
                <div className="flex justify-between"><span>Ministry of Finance Portal Scope:</span> <strong className={isEsrApplicable ? "text-amber-400" : "text-emerald-400"}>{isEsrApplicable ? "Mandatory ESR Return" : "No ESR Return Required"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Ultimate Beneficial Owner (UBO) Status</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isUboFiled ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {isUboFiled ? "UBO Register Filed ✅" : "Non-Compliant ❌"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Cabinet Decision 109 Status:</span> <strong className={isUboFiled ? "text-emerald-400" : "text-red-400"}>{isUboFiled ? "Compliant" : "AED 100,000 Fine Exposure"}</strong></div>
                <div className="flex justify-between"><span>Trade License Renewal Status:</span> <strong className="text-white">{isUboFiled ? "Active" : "Blockade Risk"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Statutory Fine Calculation</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">AED {totalCompliancePenaltyRiskAED.toLocaleString()} Fine</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>ESR Notification Fine Exposure:</span> <strong className="text-white">AED {esrPenaltyAED.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>UBO Register Fine Exposure:</span> <strong className="text-white">AED {uboPenaltyAED.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Total Fine Exposure:</span> <strong>AED {totalCompliancePenaltyRiskAED.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: ADVAQ Compliance Resolution</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Turnkey Filing</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>ADVAQ UBO & ESR Filing:</span> <strong>100% Penalty Shield</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Filing Turnaround:</span> <strong className="text-emerald-400">24–48 Hours</strong></div>
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
                UAE ESR & UBO Statutory Fine Matrix (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Compliance Requirement</th>
                  <th className="p-3.5">Governing Regulation</th>
                  <th className="p-3.5">Filing Deadline</th>
                  <th className="p-3.5 rounded-tr-xl">Non-Compliance Fine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">ESR Notification Submission</td>
                  <td className="p-3.5 text-gray-600">Cabinet Decision No. 57 of 2020</td>
                  <td className="p-3.5 font-mono">Within 6 Months of Financial Year End</td>
                  <td className="p-3.5 font-bold text-red-600">AED 20,000 Fine</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">ESR Substance Report</td>
                  <td className="p-3.5 text-gray-600">Cabinet Decision No. 57 of 2020</td>
                  <td className="p-3.5 font-mono">Within 12 Months of Financial Year End</td>
                  <td className="p-3.5 font-bold text-red-600">AED 50,000 Fine (Year 1)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">UBO Beneficiary Disclosure</td>
                  <td className="p-3.5 text-gray-600">Cabinet Decision No. 109 of 2023</td>
                  <td className="p-3.5 font-mono">Upon License Setup & Renewal</td>
                  <td className="p-3.5 font-bold text-red-600">AED 100,000 Fine + License Suspension</td>
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
              Frequently Asked Questions (UAE ESR & UBO)
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
              <Shield size={16} /> ADVAQ UAE Corporate Compliance Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              File Your ESR & UBO Declarations with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our corporate compliance team prepares compliant UBO Registers and files ESR Notifications with the UAE Ministry of Finance portal.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uae-services/corporate-tax-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Compliance Returns with ADVAQ <ArrowRight size={16} />
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
