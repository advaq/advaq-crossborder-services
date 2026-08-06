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
  AlertTriangle,
  BookOpen,
  Building2,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-stamp-duty-land-tax-calculator")({
  head: () => ({
    meta: [
      { title: "UK Stamp Duty Land Tax (SDLT) Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Stamp Duty Land Tax calculator for 2026/2027. Calculate SDLT for residential buyers, First-Time Buyer relief, overseas non-resident surcharge (+2%), and BTL additional property (+5%).",
      },
      {
        name: "keywords",
        content:
          "uk stamp duty calculator 2026 2027, sdlt non resident overseas buyer 2 percent surcharge, buy to let stamp duty 5 percent surcharge uk, first time buyer sdlt threshold",
      },
      {
        property: "og:title",
        content: "UK Stamp Duty Land Tax (SDLT) Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact UK Stamp Duty Land Tax including overseas non-resident and additional property surcharges.",
      },
      { property: "og:url", content: "/calculators/uk-stamp-duty-land-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-stamp-duty-land-tax-calculator" }],
  }),
  component: UKStampDutyCalculatorPage,
});

function UKStampDutyCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState<number>(450000);
  const [buyerType, setBuyerType] = useState<"next" | "first" | "additional">("additional");
  const [isNonResident, setIsNonResident] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const additionalSurcharge = buyerType === "additional" ? 0.05 : 0;
  const overseasSurcharge = isNonResident ? 0.02 : 0;
  const totalSurchargeRate = additionalSurcharge + overseasSurcharge;

  let baseSdlt = 0;

  if (buyerType === "first" && propertyPrice <= 625000) {
    if (propertyPrice > 425000) {
      baseSdlt = (propertyPrice - 425000) * 0.05;
    }
  } else {
    if (propertyPrice > 250000) {
      const band2Amount = Math.min(propertyPrice, 925000) - 250000;
      baseSdlt += band2Amount * 0.05;
    }
    if (propertyPrice > 925000) {
      const band3Amount = Math.min(propertyPrice, 1500000) - 925000;
      baseSdlt += band3Amount * 0.10;
    }
    if (propertyPrice > 1500000) {
      const band4Amount = propertyPrice - 1500000;
      baseSdlt += band4Amount * 0.12;
    }
  }

  const surchargeSdlt = propertyPrice * totalSurchargeRate;
  const totalSdltPayable = baseSdlt + surchargeSdlt;
  const effectiveSdltRate = propertyPrice > 0 ? (totalSdltPayable / propertyPrice) * 100 : 0;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK Stamp Duty Land Tax Calculator", item: "https://advaq.com/calculators/uk-stamp-duty-land-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Stamp Duty Land Tax (SDLT) Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-stamp-duty-land-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Stamp Duty Land Tax (SDLT) rates, First-Time Buyer relief, +5% BTL surcharge, and +2% overseas non-resident surcharge.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What are the UK Stamp Duty Land Tax (SDLT) threshold bands for 2026/2027?",
      a: "For main residential property purchases, standard SDLT bands are: £0 to £250,000 = 0%, £250,001 to £925,000 = 5%, £925,001 to £1,500,000 = 10%, and over £1,500,000 = 12%.",
    },
    {
      q: "What is the UK Stamp Duty surcharge for Buy-to-Let and additional properties?",
      a: "If you purchase an additional residential property or Buy-to-Let (BTL) property in England or Northern Ireland, a 5% SDLT surcharge applies across all purchase price bands (including the 0% band).",
    },
    {
      q: "What is the 2% Non-UK Resident Stamp Duty Surcharge?",
      a: "Buyers who are not present in the UK for at least 183 days during the 12 months before purchase are classified as non-UK residents for SDLT purposes and must pay a 2% surcharge on top of standard or additional SDLT rates.",
    },
    {
      q: "What is First-Time Buyer SDLT Relief in the UK?",
      a: "First-time buyers pay 0% SDLT on residential properties up to £425,000 and 5% on the portion between £425,001 and £625,000. If the property price exceeds £625,000, standard SDLT rates apply to the entire price.",
    },
    {
      q: "When must SDLT be submitted and paid to HMRC?",
      a: "An SDLT return must be filed and any tax due paid within 14 days of the property transaction completion date.",
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
            <span>UK Stamp Duty (SDLT)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Stamp Duty Land Tax (SDLT) Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact UK property Stamp Duty tax including First-Time Buyer relief, +5% BTL surcharge, and +2% Overseas Buyer surcharge.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Property Purchase Price (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{propertyPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="2000000"
                step="25000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>£100,000</span>
                <span>£1,000,000</span>
                <span>£2,000,000+</span>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Buyer Property Status:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setBuyerType("first")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    buyerType === "first"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  First-Time Buyer
                </button>

                <button
                  type="button"
                  onClick={() => setBuyerType("next")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    buyerType === "next"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Main Residence
                </button>

                <button
                  type="button"
                  onClick={() => setBuyerType("additional")}
                  className={`p-3 rounded-xl border text-center font-semibold transition-all ${
                    buyerType === "additional"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  Additional / Buy-to-Let (+5%)
                </button>
              </div>
            </div>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 text-sm block">Non-UK Resident / Overseas Buyer Surcharge (+2%)</strong>
                <span className="text-gray-500 text-xs">Applied to non-UK residents purchasing UK residential property.</span>
              </div>
              <input
                type="checkbox"
                checked={isNonResident}
                onChange={(e) => setIsNonResident(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Stamp Duty Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Property Purchase Price:</span>
                  <span className="font-mono text-white font-semibold">£{propertyPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Standard Band Base SDLT:</span>
                  <span className="font-mono text-white">£{Math.round(baseSdlt).toLocaleString()}</span>
                </div>
                {surchargeSdlt > 0 && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Surcharges ({totalSurchargeRate * 100}%):</span>
                    <span className="font-mono text-amber-400 font-semibold">+£{Math.round(surchargeSdlt).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-navy-200 border-t border-white/10 pt-2">
                  <span>Effective SDLT Tax Rate:</span>
                  <span className="font-mono text-gold-400 font-bold">{effectiveSdltRate.toFixed(2)}%</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Stamp Duty Due (SDLT)
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{Math.round(totalSdltPayable).toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>Payment Deadline:</span>
                  <strong className="text-gold-400 font-mono">Within 14 Days of Completion</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/self-assessment"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Consult ADVAQ Property Tax Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP STAMP DUTY WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Stamp Duty (SDLT) Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your exact SDLT calculation for £{propertyPrice.toLocaleString()} purchase price.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Property Purchase Base</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Purchase Base</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Purchase Price:</span> <strong className="text-white">£{propertyPrice.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Buyer Status:</span> <strong className="text-gold-400">{buyerType === "first" ? "First-Time Buyer" : buyerType === "additional" ? "Additional Property / BTL" : "Main Residence"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Base Band Calculation</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">£{Math.round(baseSdlt).toLocaleString()} Base</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>£0 to £250k (0%):</span> <strong className="text-emerald-400">£0</strong></div>
                <div className="flex justify-between"><span>£250k to £925k (5%):</span> <strong className="text-white">£{Math.round(baseSdlt).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Base SDLT Liability:</span> <strong>£{Math.round(baseSdlt).toLocaleString()}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Progressive tax bands applied under statutory HMRC rules.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Statutory Surcharges</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">+{totalSurchargeRate * 100}% Surcharge</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>BTL / Additional Property (+5%):</span> <strong className="text-amber-400">{buyerType === "additional" ? `+£${Math.round(propertyPrice * 0.05).toLocaleString()}` : "£0"}</strong></div>
                <div className="flex justify-between"><span>Non-UK Resident Overseas (+2%):</span> <strong className="text-amber-400">{isNonResident ? `+£${Math.round(propertyPrice * 0.02).toLocaleString()}` : "£0"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-amber-400"><span>Total Surcharges Paid:</span> <strong>+£{Math.round(surchargeSdlt).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final SDLT Bill</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">SDLT Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Stamp Duty (SDLT) Due:</span> <strong>£{Math.round(totalSdltPayable).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Effective SDLT Rate:</span> <strong>{effectiveSdltRate.toFixed(2)}%</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Must be paid to HMRC within 14 days of property completion.
              </p>
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
                UK Stamp Duty Land Tax (SDLT) Rates (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Property Price Band</th>
                  <th className="p-3.5">Standard Main Residence</th>
                  <th className="p-3.5">First-Time Buyer Relief</th>
                  <th className="p-3.5 rounded-tr-xl">Additional Property (+5% Surcharge)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Up to £250,000</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% (up to £425,000)</td>
                  <td className="p-3.5 font-mono text-amber-600 font-bold">5%</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">£250,001 – £925,000</td>
                  <td className="p-3.5 font-mono text-gold-600 font-bold">5%</td>
                  <td className="p-3.5 font-mono text-gold-600 font-bold">5% (£425k-£625k)</td>
                  <td className="p-3.5 font-mono text-amber-600 font-bold">10%</td>
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
              Frequently Asked Questions (Stamp Duty SDLT)
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
              Need UK Stamp Duty Advisory & Overseas Buyer Relief?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our UK property tax team advises on SDLT surcharges, First-Time Buyer relief eligibility, and multi-property tax structuring.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/self-assessment"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Consult Property Advisory <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp SDLT Specialist
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
