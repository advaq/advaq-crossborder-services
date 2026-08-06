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

export const Route = createFileRoute("/calculators/uae-freelance-vs-freezone-calculator")({
  head: () => ({
    meta: [
      { title: "UAE Freelance Permit vs Freezone Company License Cost (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Freelance Permit vs Freezone License cost calculator. Compare TECOM GoFreelance vs IFZA/Meydan company setup & visa costs.",
      },
      {
        name: "keywords",
        content:
          "uae freelance permit vs freezone license calculator 2026, gofreelance dubai cost vs company setup, freelance visa dubai non resident freelancer, tecom freelance permit dubai",
      },
      {
        property: "og:title",
        content: "UAE Freelance Permit vs Freezone Company License Cost | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare exact costs and benefits between UAE Freelance Permit and Full Freezone LLC License.",
      },
      { property: "og:url", content: "/calculators/uae-freelance-vs-freezone-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-freelance-vs-freezone-calculator" }],
  }),
  component: UAEFreelanceVsFreezonePage,
});

function UAEFreelanceVsFreezonePage() {
  const [needCorporateBank, setNeedCorporateBank] = useState<boolean>(true);
  const [needMultipleVisas, setNeedMultipleVisas] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const freelancePermitCost = 7500;
  const freelanceVisaCost = 3500;
  const totalFreelanceYear1 = freelancePermitCost + freelanceVisaCost;

  const freezonePackageCost = 13900;

  const isFreezoneRecommended = needCorporateBank || needMultipleVisas;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "Freelance vs Freezone License", item: "https://advaq.com/calculators/uae-freelance-vs-freezone-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Freelance Permit vs Freezone Company License Cost (2026/2027)",
    url: "https://advaq.com/calculators/uae-freelance-vs-freezone-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare costs, visa limits, corporate banking eligibility, and Corporate Tax obligations between TECOM GoFreelance permits and Freezone Single-Shareholder LLC licenses.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Can a holder of a TECOM GoFreelance permit open a corporate bank account?",
      a: "No. A freelance permit is issued to an individual, not a separate corporate legal entity. Freelancers must use personal bank accounts. If you require a business corporate account (Wio / Mashreq NeoBiz), you must register a Freezone Single-Shareholder LLC.",
    },
    {
      q: "Are freelancers subject to UAE 9% Corporate Tax?",
      a: "Yes. Freelancers operating as natural persons in the UAE are subject to Corporate Tax if their net annual turnover from business activities exceeds AED 1,000,000 in a calendar year.",
    },
    {
      q: "Can I hire staff or sponsor employees on a Freelance Permit?",
      a: "No. Freelance permits are strictly for solo independent contractors. You cannot issue employment visas to staff. To hire employees, a Freezone LLC license is required.",
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
            <span>Freelance vs Freezone License</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Freelance Permit vs Freezone License (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Side-by-side cost and feature comparison for IT consultants, designers, and solo founders in Dubai.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div
            className={`p-6 rounded-2xl border flex items-center gap-4 ${
              isFreezoneRecommended
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-gold-50 border-gold-300 text-gold-950"
            }`}
          >
            <Sparkles className="text-gold-600 shrink-0" size={36} />
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isFreezoneRecommended
                  ? "🎉 Full Freezone LLC License Recommended!"
                  : "💡 Solo Freelance Permit Sufficient"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isFreezoneRecommended
                  ? "Because you need corporate bank accounts or future employee visas, a Full Freezone LLC License (IFZA/SHAMS) provides complete flexibility."
                  : "If you only need a personal residency visa and operate as an individual contractor, the GoFreelance Permit is cost-effective."}
              </p>
            </div>
          </div>

          <div className="space-y-3 bg-off-white/50 p-6 rounded-2xl border border-border text-xs">
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Do you need a Corporate Bank Account (Wio/Mashreq)?</strong>
                <span className="text-gray-500 text-xs">Freezone LLCs get corporate bank accounts; Freelance permits use personal accounts.</span>
              </div>
              <input
                type="checkbox"
                checked={needCorporateBank}
                onChange={(e) => setNeedCorporateBank(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Do you plan to sponsor employee visas in future?</strong>
                <span className="text-gray-500 text-xs">Freelance permits cannot hire employees or issue staff visas.</span>
              </div>
              <input
                type="checkbox"
                checked={needMultipleVisas}
                onChange={(e) => setNeedMultipleVisas(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-4">
              <h4 className="font-serif font-bold text-navy-950 text-lg">GoFreelance Permit (TECOM)</h4>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Annual Permit Fee:</span>
                  <strong className="font-mono">AED 7,500</strong>
                </div>
                <div className="flex justify-between">
                  <span>2-Year Residence Visa:</span>
                  <strong className="font-mono">AED 3,500</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-border font-bold text-navy-950 text-sm">
                  <span>Total Year-1 Cost:</span>
                  <strong className="font-mono text-gold-600">AED {totalFreelanceYear1.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-4 shadow-lg">
              <h4 className="font-serif font-bold text-white text-lg">Full Freezone LLC (SHAMS / IFZA)</h4>
              <div className="space-y-2 text-xs text-navy-200">
                <div className="flex justify-between">
                  <span>Full Trade License & Flexi Desk:</span>
                  <strong className="font-mono text-white">AED 9,500</strong>
                </div>
                <div className="flex justify-between">
                  <span>2-Year Investor Visa & Medical:</span>
                  <strong className="font-mono text-white">AED 4,400</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 font-bold text-white text-sm">
                  <span>Total Year-1 Cost:</span>
                  <strong className="font-mono text-emerald-400">AED {freezonePackageCost.toLocaleString()}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link to="/uae-services/freezone-company-formation" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Setup UAE Company / License with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP FREELANCE VS FREEZONE WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Freelance vs Freezone Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line financial and operational comparison of GoFreelance permit vs Full Freezone LLC company.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Outlay & Permit Fee Audit</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Year 1 Budget</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>GoFreelance Permit Total (Year 1):</span> <strong className="text-white">AED {totalFreelanceYear1.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Freezone Single-Owner LLC (Year 1):</span> <strong className="text-emerald-400">AED {freezonePackageCost.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Banking & Invoicing Capability</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${needCorporateBank ? "bg-emerald-500/20 text-emerald-400" : "bg-gold-500/20 text-gold-400"}`}>
                  {needCorporateBank ? "Corporate Account Needed" : "Personal Account"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Corporate Banking (Wio/Mashreq):</span> <strong className={needCorporateBank ? "text-emerald-400" : "text-white"}>{needCorporateBank ? "Requires Freezone LLC ✅" : "Not Available on Freelance"}</strong></div>
                <div className="flex justify-between"><span>B2B Corporate Contracts:</span> <strong className="text-white">{needCorporateBank ? "LLC Corporate Entity" : "Sole Proprietor"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Employee Sponsorship & Growth</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${needMultipleVisas ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-500/20 text-gray-300"}`}>
                  {needMultipleVisas ? "Hiring Staff" : "Solo Operator"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Staff Employment Visa Quota:</span> <strong className={needMultipleVisas ? "text-emerald-400" : "text-white"}>{needMultipleVisas ? "Freezone LLC Quota (1-6+ Visas)" : "0 Staff Visas (GoFreelance)"}</strong></div>
                <div className="flex justify-between"><span>Business Scalability:</span> <strong className="text-white">{needMultipleVisas ? "Full Corporate Enterprise" : "Individual Freelancer"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Strategic Setup Recommendation</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Optimal Verdict</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Recommended Legal Option:</span> <strong>{isFreezoneRecommended ? "Freezone LLC Company" : "TECOM GoFreelance Permit"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>ADVAQ Formation Assistance:</span> <strong className="text-emerald-400">Guaranteed 3-Day Turnaround</strong></div>
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
                UAE Freelance Permit vs Freezone LLC Comparison Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Feature / Option</th>
                  <th className="p-3.5">GoFreelance Permit (TECOM)</th>
                  <th className="p-3.5">Full Freezone LLC (SHAMS / IFZA)</th>
                  <th className="p-3.5 rounded-tr-xl">ADVAQ Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className={!isFreezoneRecommended ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Corporate Bank Account Access</td>
                  <td className="p-3.5 text-rose-600 font-bold">Personal Account Only ❌</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">Wio / Mashreq Corporate ✅</td>
                  <td className="p-3.5">Freezone LLC for Business Banking</td>
                </tr>
                <tr className={isFreezoneRecommended ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Employee Visa Sponsorship Quota</td>
                  <td className="p-3.5 text-rose-600 font-bold">0 Employee Visas ❌</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">1 to 6+ Visa Quotas ✅</td>
                  <td className="p-3.5">Freezone LLC for Staff Hiring</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Year 1 Setup Investment</td>
                  <td className="p-3.5 font-mono text-emerald-600">AED 11,000</td>
                  <td className="p-3.5 font-mono text-gold-600">AED 13,900</td>
                  <td className="p-3.5 text-navy-950">Freezone LLC provides 10x value</td>
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
              Frequently Asked Questions (Freelance vs Freezone)
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
              <Shield size={16} /> ADVAQ UAE Legal Entity Structuring
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Set Up Your UAE Business or Freelance License with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Not sure whether to register as a freelancer or a Freezone company? Our UAE corporate consultants evaluate your business model and assist with fast-track licensing.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uae-services/freezone-company-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Incorporate UAE Freezone Company <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Structuring Consultant
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
