import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Plane,
  Award,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-visa-cost-calculator")({
  head: () => ({
    meta: [
      { title: "UAE 2-Year Investor vs 10-Year Golden Visa Cost Estimator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE residence visa cost calculator. Compare 2-Year Investor Visa vs 10-Year Golden Visa costs including Emirates ID, VIP medical test & family sponsorship.",
      },
      {
        name: "keywords",
        content:
          "uae investor visa cost calculator 2026, Dubai 10 year golden visa cost tech founder, Emirates ID medical fitness test fee Dubai, family visa sponsorship cost uae",
      },
      {
        property: "og:title",
        content: "UAE 2-Year Investor vs 10-Year Golden Visa Cost Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact Emirates ID, medical test, stamping, and family visa costs in Dubai.",
      },
      { property: "og:url", content: "/calculators/uae-visa-cost-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-visa-cost-calculator" }],
  }),
  component: UAEVisaCostCalculatorPage,
});

function UAEVisaCostCalculatorPage() {
  const [visaType, setVisaType] = useState<string>("investor-2yr");
  const [numberOfFamilyDependents, setNumberOfFamilyDependents] = useState<number>(0);
  const [includeVipMedical, setIncludeVipMedical] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const baseVisaCost = visaType === "golden-10yr" ? 9500 : 3800;
  const medicalEmiratesIdCost = includeVipMedical ? 3200 : 2200;

  const familyVisaCostTotal = numberOfFamilyDependents * 4500;

  const totalVisaCostAED = baseVisaCost + medicalEmiratesIdCost + familyVisaCostTotal;
  const totalVisaCostUSD = Math.round(totalVisaCostAED / 3.6725);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE Visa Cost Calculator", item: "https://advaq.com/calculators/uae-visa-cost-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE 2-Year Investor vs 10-Year Golden Visa Cost Estimator (2026/2027)",
    url: "https://advaq.com/calculators/uae-visa-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare UAE 2-Year Investor Visa vs 10-Year Golden Visa government fees, VIP medical fitness test costs, Emirates ID processing, and family sponsorship.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the primary eligibility for a 10-Year UAE Golden Visa?",
      a: "The 10-Year Golden Visa is available for: 1) Real estate investors owning property valued at AED 2,000,000+, 2) Entrepreneurs & Tech Founders with approved startup evaluation, 3) Highly skilled professionals with basic salary exceeding AED 30,000/month, and 4) Outstanding students.",
    },
    {
      q: "What is included in the Emirates ID and Medical Fitness test fee?",
      a: "The government fee covers the mandatory DHS medical fitness blood test, chest X-ray, biometric fingerprint capture, and a 2-year or 10-year Emirates ID card.",
    },
    {
      q: "Can a Golden Visa holder sponsor their family and domestic helpers?",
      a: "YES! Golden Visa holders enjoy unlimited family sponsorship (spouse and children of any age) and can sponsor unlimited domestic helpers (nannies, drivers) without salary restrictions.",
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
            <span>UAE Residence Visa Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE 2-Yr Investor vs 10-Yr Golden Visa Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact Emirates ID, medical test, entry permit, visa stamping, and family sponsorship costs in Dubai.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Target UAE Visa Type:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setVisaType("investor-2yr")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    visaType === "investor-2yr"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">2-Year Residence Visa</strong>
                  <span className="text-[11px] opacity-80">Freezone / Mainland Partner Visa</span>
                </button>

                <button
                  type="button"
                  onClick={() => setVisaType("golden-10yr")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    visaType === "golden-10yr"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">10-Year Golden Visa</strong>
                  <span className="text-[11px] opacity-80">Tech Founders / Real Estate</span>
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. Family Dependents (Spouse / Children / Parents):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {numberOfFamilyDependents} Dependents
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={numberOfFamilyDependents}
                onChange={(e) => setNumberOfFamilyDependents(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <input
                type="checkbox"
                checked={includeVipMedical}
                onChange={(e) => setIncludeVipMedical(e.target.checked)}
                className="accent-gold-500 w-4 h-4"
              />
              <div className="text-xs">
                <strong className="text-navy-950 block">Include VIP Fast-Track Medical Test & Biometrics?</strong>
                <span className="text-gray-500">Same-day medical fitness results & priority Emirates ID capture.</span>
              </div>
            </label>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>UAE Visa Cost Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Entry Permit & Stamping ({visaType === "golden-10yr" ? "10-Year" : "2-Year"}):</span>
                  <span className="font-mono text-white font-semibold">AED {baseVisaCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Medical Fitness & Emirates ID:</span>
                  <span className="font-mono text-white font-semibold">AED {medicalEmiratesIdCost.toLocaleString()}</span>
                </div>
                {numberOfFamilyDependents > 0 && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Family Sponsorship ({numberOfFamilyDependents}x AED 4.5k):</span>
                    <span className="font-mono text-white font-semibold">AED {familyVisaCostTotal.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Residence Visa Cost (AED)
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  AED {totalVisaCostAED.toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-navy-200 flex justify-between">
                  <span>Equivalent USD Cost:</span>
                  <strong className="text-gold-400 font-mono">${totalVisaCostUSD.toLocaleString()} USD</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uae-services/visa-application-support"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Apply for UAE Visa with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP VISA COST WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step UAE Residency Visa Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of GDRFA & ICP government fees, VIP medical fitness, Emirates ID, and family sponsorship.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Primary Visa Approval & Stamping</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED {baseVisaCost.toLocaleString()}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Selected Residence Category:</span> <strong className="text-white">{visaType === "golden-10yr" ? "10-Year Golden Visa" : "2-Year Investor Visa"}</strong></div>
                <div className="flex justify-between"><span>GDRFA Entry Permit & Stamping:</span> <strong className="text-emerald-400">AED {baseVisaCost.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Medical Fitness & Emirates ID Fee</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED {medicalEmiratesIdCost.toLocaleString()}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>DHS Medical Blood/X-Ray Test:</span> <strong className="text-white">{includeVipMedical ? "VIP Same-Day Service" : "Standard 48-Hour Test"}</strong></div>
                <div className="flex justify-between"><span>ICP Emirates ID Card (Biometrics):</span> <strong className="text-emerald-400">Included</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Medical & ID Subtotal:</span> <strong>AED {medicalEmiratesIdCost.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Family Dependent Sponsorship</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{numberOfFamilyDependents} Dependent(s)</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Family Dependents Sponsored:</span> <strong className="text-white">{numberOfFamilyDependents} Dependent(s)</strong></div>
                <div className="flex justify-between"><span>Rate per Dependent Visa:</span> <strong className="text-white">AED 4,500</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Family Sponsorship Subtotal:</span> <strong>AED {familyVisaCostTotal.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Visa Package Outlay</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Grand Total</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Residence Investment:</span> <strong>AED {totalVisaCostAED.toLocaleString()} (${totalVisaCostUSD.toLocaleString()} USD)</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>ADVAQ VIP Assistance:</span> <strong className="text-emerald-400">Dedicated PRO Concierge</strong></div>
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
                UAE Residence Visa Types & Cost Comparison Matrix (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Visa Category</th>
                  <th className="p-3.5">Validity Period</th>
                  <th className="p-3.5">Est. Government Fee</th>
                  <th className="p-3.5 rounded-tr-xl">Family Sponsorship Limit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className={visaType === "investor-2yr" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Freezone Partner / Investor Visa</td>
                  <td className="p-3.5 font-mono">2 Years</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">AED 3,800 – AED 5,500</td>
                  <td className="p-3.5">Spouse + Children (Subject to Salary)</td>
                </tr>
                <tr className={visaType === "golden-10yr" ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">10-Year Golden Visa (Tech / Real Estate)</td>
                  <td className="p-3.5 font-mono text-gold-600 font-bold">10 Years</td>
                  <td className="p-3.5 font-mono text-gold-600 font-bold">AED 9,500 – AED 12,000</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Unlimited Family + Domestic Staff ✅</td>
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
              Frequently Asked Questions (UAE Visa Payouts)
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
              <Shield size={16} /> ADVAQ UAE PRO & Immigration Services
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Secure Your UAE Residence & Golden Visa with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our dedicated PRO concierge team manages your entry permit, VIP medical appointment, Emirates ID biometrics, and family visa approvals.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uae-services/visa-application-support"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Apply for UAE Residence Visa <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Visa PRO
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
