import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Sparkles,
  Building2,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

interface FreezoneOption {
  id: string;
  name: string;
  location: string;
  zeroVisaCost: number;
  oneVisaCost: number;
  twoVisaCost: number;
  additionalVisaCost: number;
  flexiDeskIncluded: boolean;
  bestFor: string;
}

const freezoneData: FreezoneOption[] = [
  {
    id: "ifza",
    name: "IFZA (International Free Zone Authority)",
    location: "Dubai",
    zeroVisaCost: 12900,
    oneVisaCost: 14900,
    twoVisaCost: 17900,
    additionalVisaCost: 3500,
    flexiDeskIncluded: true,
    bestFor: "Consulting, E-Commerce & Service Businesses",
  },
  {
    id: "meydan",
    name: "Meydan Free Zone",
    location: "Dubai (Meydan Hotel)",
    zeroVisaCost: 12500,
    oneVisaCost: 14350,
    twoVisaCost: 16800,
    additionalVisaCost: 3200,
    flexiDeskIncluded: true,
    bestFor: "Digital Marketing, Tech & Premium Address",
  },
  {
    id: "shams",
    name: "SHAMS (Sharjah Media City)",
    location: "Sharjah",
    zeroVisaCost: 9400,
    oneVisaCost: 11500,
    twoVisaCost: 13800,
    additionalVisaCost: 2800,
    flexiDeskIncluded: true,
    bestFor: "Budget-Friendly Freelancers & Media Agencies",
  },
  {
    id: "rakez",
    name: "RAKEZ (Ras Al Khaimah Economic Zone)",
    location: "Ras Al Khaimah",
    zeroVisaCost: 8900,
    oneVisaCost: 11200,
    twoVisaCost: 13500,
    additionalVisaCost: 2700,
    flexiDeskIncluded: true,
    bestFor: "Manufacturing, Trading & Cost-Effective License",
  },
];

export const Route = createFileRoute("/calculators/uae-freezone-setup-calculator")({
  head: () => ({
    meta: [
      { title: "Dubai Freezone Company Setup Cost Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Dubai Freezone setup cost calculator. Compare IFZA, Meydan, SHAMS & RAKEZ license fees, visa packages, Emirates ID & medical test costs.",
      },
      {
        name: "keywords",
        content:
          "dubai freezone setup cost calculator 2026, ifza vs meydan vs shams cost calculator, uae investor visa package cost dubai freezone, lowest cost dubai freezone license",
      },
      {
        property: "og:title",
        content: "Dubai Freezone Company Setup Cost Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare license fees, visa package costs, and establishment card fees across top UAE freezones.",
      },
      { property: "og:url", content: "/calculators/uae-freezone-setup-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-freezone-setup-calculator" }],
  }),
  component: UAEFreezoneCalculatorPage,
});

function UAEFreezoneCalculatorPage() {
  const [selectedFreezoneId, setSelectedFreezoneId] = useState<string>("ifza");
  const [visasRequired, setVisasRequired] = useState<number>(1);
  const [includeVipMedical, setIncludeVipMedical] = useState<boolean>(true);
  const [includeCorporateTaxReg, setIncludeCorporateTaxReg] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedFreezone = freezoneData.find((f) => f.id === selectedFreezoneId) || freezoneData[0];

  let baseLicenseCost = selectedFreezone.zeroVisaCost;
  if (visasRequired === 1) baseLicenseCost = selectedFreezone.oneVisaCost;
  else if (visasRequired === 2) baseLicenseCost = selectedFreezone.twoVisaCost;
  else if (visasRequired > 2) {
    baseLicenseCost =
      selectedFreezone.twoVisaCost + (visasRequired - 2) * selectedFreezone.additionalVisaCost;
  }

  const medicalEmiratesIdPerVisa = includeVipMedical ? 3500 : 2500;
  const totalVisaProcessingCost = visasRequired * medicalEmiratesIdPerVisa;

  const corporateTaxRegFee = includeCorporateTaxReg ? 1500 : 0;
  const TotalSetupCostAED = baseLicenseCost + totalVisaProcessingCost + corporateTaxRegFee;
  const TotalSetupCostUSD = Math.round(TotalSetupCostAED / 3.6725);

  const annualRenewalCostAED = Math.round(baseLicenseCost * 0.85);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "Dubai Freezone Setup Cost Calculator", item: "https://advaq.com/calculators/uae-freezone-setup-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dubai Freezone Company Setup Cost Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uae-freezone-setup-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare Dubai and UAE Freezone setup costs across IFZA, Meydan, SHAMS, and RAKEZ including residence visa packages, flexi desk lease, and Emirates ID fees.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Which UAE Freezone is cheapest for single-owner digital businesses?",
      a: "SHAMS (Sharjah Media City) and RAKEZ (Ras Al Khaimah) offer the lowest 0-visa license costs starting around AED 8,900 – AED 9,400. In Dubai, Meydan Free Zone (from AED 12,500) and IFZA (from AED 12,900) are the most popular choices for tech startups and consultants.",
    },
    {
      q: "Does a Freezone license include a physical office or flexi desk?",
      a: "Yes! Most zero-visa and 1-visa Freezone packages include a shared 'Flexi Desk' lease agreement, which meets the legal requirement for corporate bank account opening and Establishment Card issuance.",
    },
    {
      q: "Are UAE Freezone companies subject to 9% Corporate Tax?",
      a: "UAE Corporate Tax applies to all UAE Freezone entities at 9% on net taxable profits exceeding AED 375,000. However, Qualifying Free Zone Persons (QFZPs) deriving qualifying income and maintaining adequate substance pay 0% tax.",
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
            <span>Dubai Freezone Setup Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Dubai Freezone Setup Cost Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Compare license costs, flexi-desk options, establishment cards, and investor visa package fees across top UAE freezones.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3">
                1. Select Target UAE Freezone:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {freezoneData.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setSelectedFreezoneId(f.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedFreezoneId === f.id
                        ? "bg-navy-950 text-white border-gold-500 shadow-md"
                        : "bg-white text-gray-800 border-border hover:border-gold-500/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <strong className="text-sm font-serif">{f.name}</strong>
                    </div>
                    <div className="text-[11px] opacity-80">
                      Location: {f.location}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-4 p-4 bg-navy-900/5 border border-gold-500/20 rounded-xl text-xs space-y-1 text-navy-950">
                <div><strong>Location:</strong> {selectedFreezone.location}</div>
                <div><strong>Flexi Desk Included:</strong> {selectedFreezone.flexiDeskIncluded ? "Yes (Shared Desk)" : "No"}</div>
                <div><strong>Best Suited For:</strong> {selectedFreezone.bestFor}</div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. Investor & Employee Visas Required:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {visasRequired} {visasRequired === 1 ? "Visa" : "Visas"}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="4"
                step="1"
                value={visasRequired}
                onChange={(e) => setVisasRequired(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                0 visas = virtual license only; 1+ visas = residency permit included.
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeVipMedical}
                    onChange={(e) => setIncludeVipMedical(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">VIP Medical Fitness & Emirates ID Processing</strong>
                    <span className="text-gray-500 text-[11px]">Same-day VIP medical blood test and biometrics appointment.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">AED 3,500 / visa</span>
              </label>

              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeCorporateTaxReg}
                    onChange={(e) => setIncludeCorporateTaxReg(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">FTA Corporate Tax Registration & TRN Issuance</strong>
                    <span className="text-gray-500 text-[11px]">Mandatory FTA Registration to avoid AED 10,000 penalty.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">AED 1,500</span>
              </label>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Year 1 Freezone Investment</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Base Freezone License:</span>
                  <span className="font-mono text-white font-semibold">AED {baseLicenseCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Visa Processing & Emirates ID:</span>
                  <span className="font-mono text-white font-semibold">AED {totalVisaProcessingCost.toLocaleString()}</span>
                </div>
                {includeCorporateTaxReg && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>FTA Corporate Tax Reg:</span>
                    <span className="font-mono text-gold-400 font-semibold">AED {corporateTaxRegFee.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Year 1 Setup Budget
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  AED {TotalSetupCostAED.toLocaleString()}
                </div>
                <span className="text-xs text-navy-300 font-mono block mt-1">
                  (Approx. ${TotalSetupCostUSD.toLocaleString()} USD)
                </span>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>Est. Year 2 Renewal:</span>
                  <strong className="text-emerald-400 font-mono">AED {annualRenewalCostAED.toLocaleString()} / yr</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uae-services/freezone-company-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Incorporate {selectedFreezone.name} with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP FREEZONE SETUP WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Freezone Setup Cost Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your selected Freezone license, visa quota, and annual renewal budget.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Trade License & Lease Agreement</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">AED {baseLicenseCost.toLocaleString()}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Selected Freezone Authority:</span> <strong className="text-white">{selectedFreezone.name}</strong></div>
                <div className="flex justify-between"><span>Shared Flexi Desk Agreement:</span> <strong className="text-emerald-400">Included</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Base License Subtotal:</span> <strong>AED {baseLicenseCost.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: UAE Residence Visa & Emirates ID</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{visasRequired} Visa(s)</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Residence Visa Quota:</span> <strong className="text-white">{visasRequired} Visa Allocation(s)</strong></div>
                <div className="flex justify-between"><span>Medical & Biometrics Rate:</span> <strong className="text-white">AED {medicalEmiratesIdPerVisa.toLocaleString()} / visa</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Visa Processing Subtotal:</span> <strong>AED {totalVisaProcessingCost.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: FTA Tax & Bank Account Registration</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Tax & Banking</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>FTA Corporate Tax Registration:</span> <strong className="text-white">AED {corporateTaxRegFee.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Corporate Bank Opening Assistance:</span> <strong className="text-emerald-400">Included with ADVAQ</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Year 1 & Renewal Budget</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Grand Total</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Year 1 Outlay:</span> <strong>AED {TotalSetupCostAED.toLocaleString()} (${TotalSetupCostUSD.toLocaleString()} USD)</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Estimated Annual Renewal:</span> <strong className="text-emerald-400">AED {annualRenewalCostAED.toLocaleString()} / year</strong></div>
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
                Top UAE Freezone License & Visa Package Comparison (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Freezone Authority</th>
                  <th className="p-3.5">Emirate Location</th>
                  <th className="p-3.5">0-Visa License</th>
                  <th className="p-3.5">1-Visa Package</th>
                  <th className="p-3.5 rounded-tr-xl">Key Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                {freezoneData.map((f) => (
                  <tr key={f.id} className={selectedFreezoneId === f.id ? "bg-gold-500/10 font-bold" : ""}>
                    <td className="p-3.5 font-bold text-navy-950">{f.name}</td>
                    <td className="p-3.5">{f.location}</td>
                    <td className="p-3.5 font-mono text-emerald-600 font-bold">AED {f.zeroVisaCost.toLocaleString()}</td>
                    <td className="p-3.5 font-mono text-gold-600 font-bold">AED {f.oneVisaCost.toLocaleString()}</td>
                    <td className="p-3.5">{f.bestFor}</td>
                  </tr>
                ))}
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
              Frequently Asked Questions (Dubai Freezone Setup)
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
              <Shield size={16} /> ADVAQ UAE Corporate Formation Specialist
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Form Your Freezone Company with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UAE corporate advisory team assists with Freezone company registration, Establishment Card issuance, VIP Emirates ID processing, and corporate bank account opening.
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
                WhatsApp UAE Consultant
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
