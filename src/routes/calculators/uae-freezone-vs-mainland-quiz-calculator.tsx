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

export const Route = createFileRoute("/calculators/uae-freezone-vs-mainland-quiz-calculator")({
  head: () => ({
    meta: [
      { title: "Freezone or Mainland? UAE Entity Selection Quiz Tool (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "7-question interactive quiz tool to decide whether to register a Dubai Freezone LLC or Mainland DET company.",
      },
      {
        name: "keywords",
        content:
          "freezone vs mainland uae decision quiz tool 2026, Dubai mainland vs freezone company setup comparison, freezone or mainland quiz uae, ded mainland vs ifza freezone",
      },
      {
        property: "og:title",
        content: "Freezone or Mainland? UAE Entity Selection Quiz Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Answer quick questions to get an instant recommendation between Freezone LLC and Dubai Mainland DET.",
      },
      { property: "og:url", content: "/calculators/uae-freezone-vs-mainland-quiz-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-freezone-vs-mainland-quiz-calculator" }],
  }),
  component: UAEFreezoneVsMainlandQuizPage,
});

function UAEFreezoneVsMainlandQuizPage() {
  const [qClients, setQClients] = useState<"global" | "local">("global");
  const [qOffice, setQOffice] = useState<boolean>(false);
  const [qGovt, setQGovt] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let recommendationTitle = "Dubai Freezone LLC Recommended (IFZA / Meydan)";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation =
    "Since your clients are global/B2B and you do not require a physical onshore shopfront or UAE government tenders, a Dubai Freezone LLC gives you 100% foreign ownership, 0% personal tax, and zero local sponsor requirements at the lowest setup cost.";

  if (qClients === "local" || qOffice || qGovt) {
    recommendationTitle = "Dubai Mainland DET Company Recommended";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation =
      "Because you trade directly with local UAE retail consumers, require a physical shopfront, or bid on UAE government tenders, a Dubai Mainland DET license is legally required.";
  }

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "Freezone vs Mainland Quiz", item: "https://advaq.com/calculators/uae-freezone-vs-mainland-quiz-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Freezone or Mainland? UAE Entity Selection Quiz Tool (2026/2027)",
    url: "https://advaq.com/calculators/uae-freezone-vs-mainland-quiz-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Interactive recommendation tool to decide whether forming a Dubai Freezone LLC or DED Mainland company matches your business model.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the main legal difference between a UAE Freezone and Mainland company?",
      a: "A Freezone entity is registered within a specific economic zone (e.g. IFZA, Meydan, DMCC) and is ideal for international B2B services, consulting, and e-commerce. A Mainland company (DED / DET) is licensed to trade anywhere directly within the local UAE onshore market.",
    },
    {
      q: "Can foreigners own 100% of a Dubai Mainland company without a UAE local sponsor?",
      a: "YES! Following the 2021 amendments to the UAE Commercial Companies Law, 100% foreign ownership is allowed for over 1,000 commercial and industrial activities on the Dubai Mainland.",
    },
    {
      q: "Is flexi-desk office allowed for Freezone companies?",
      a: "Yes! Freezone entities can operate with a shared 'Flexi Desk' or virtual office address, keeping annual rental overheads significantly lower than mandatory physical mainland leases (Ejari).",
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
            <span>Freezone or Mainland Quiz</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Freezone or Mainland? (Interactive Decision Quiz) (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Answer quick questions about your target clients, office needs, and trading activities for a custom recommendation.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className={`p-6 rounded-2xl border ${badgeColor} transition-all`}>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles size={24} className="text-gold-600" />
              <h3 className="font-serif font-bold text-xl">{recommendationTitle}</h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed opacity-90">{explanation}</p>
          </div>

          <div className="space-y-6 text-xs bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                1. Where are your target clients located?
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setQClients("global")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qClients === "global" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Global / Overseas / B2B Clients
                </button>
                <button
                  type="button"
                  onClick={() => setQClients("local")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qClients === "local" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Local UAE Onshore Consumers / Retail
                </button>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                2. Do you require a physical commercial office or shopfront in Dubai?
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setQOffice(false)}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    !qOffice ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  No — Flexi Desk / Virtual Office is fine
                </button>
                <button
                  type="button"
                  onClick={() => setQOffice(true)}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qOffice ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Yes — Physical retail shop / warehouse needed
                </button>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                3. Do you plan to bid on UAE Government tenders or municipal contracts?
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setQGovt(true)}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qGovt ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Yes — Government contracts planned
                </button>
                <button
                  type="button"
                  onClick={() => setQGovt(false)}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    !qGovt ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  No — Private commercial clients only
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link to="/uae-services/freezone-company-formation" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Setup Company with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP FREEZONE VS MAINLAND DECISION WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Entity Selection Strategy Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your client jurisdiction, commercial office requirement, and government tender eligibility.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Market Jurisdiction Assessment</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{qClients.toUpperCase()}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Target Client Audience:</span> <strong className="text-white">{qClients === "global" ? "Global / B2B / Exports" : "UAE Onshore Local Consumers"}</strong></div>
                <div className="flex justify-between"><span>Licensing Impact:</span> <strong className={qClients === "local" ? "text-amber-400" : "text-emerald-400"}>{qClients === "local" ? "Mainland License Mandatory" : "Freezone Friendly"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Real Estate & Lease (Ejari) Test</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${qOffice ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {qOffice ? "Physical Shopfront" : "Flexi Desk"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Physical Commercial Lease:</span> <strong className="text-white">{qOffice ? "Required (Mainland Ejari)" : "Not Required (Flexi Desk)"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Rental Cost Overhead:</span> <strong>{qOffice ? "High (Mainland Commercial)" : "Low (Freezone Package)"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: UAE Government Procurement</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${qGovt ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {qGovt ? "Mainland Tender" : "Private Commercial"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Government Tenders Planned:</span> <strong className={qGovt ? "text-amber-400" : "text-emerald-400"}>{qGovt ? "YES (Requires DED/DET)" : "NO (Private Clients Only)"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Entity Recommendation</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Optimal Choice</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Recommended Legal Form:</span> <strong>{qClients === "local" || qOffice || qGovt ? "Dubai Mainland DET" : "Dubai Freezone LLC"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Foreign Ownership:</span> <strong className="text-emerald-400">100% Foreign Owned</strong></div>
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
                Dubai Freezone vs Mainland DET Feature Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Feature / Requirement</th>
                  <th className="p-3.5">Dubai Freezone LLC</th>
                  <th className="p-3.5">Dubai Mainland (DET)</th>
                  <th className="p-3.5 rounded-tr-xl">Winner / Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className={!(qClients === "local" || qOffice || qGovt) ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Setup & License Cost</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">AED 12,500 – AED 14,900</td>
                  <td className="p-3.5 font-mono text-amber-600">AED 18,500 – AED 25,000+</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Freezone is lower cost ✅</td>
                </tr>
                <tr className={(qClients === "local" || qOffice || qGovt) ? "bg-gold-500/10 font-bold" : ""}>
                  <td className="p-3.5 font-bold text-navy-950">Onshore Retail Trading Access</td>
                  <td className="p-3.5 text-rose-600 font-bold">Requires Local Distributor ❌</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">100% Direct Local Trading ✅</td>
                  <td className="p-3.5 text-navy-950">Mainland for Local Retail</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">100% Foreign Ownership</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">100% Foreign Owned ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">100% Foreign Owned ✅</td>
                  <td className="p-3.5 text-emerald-600 font-bold">Equal (Both 100% Foreign)</td>
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
              Frequently Asked Questions (Freezone vs Mainland)
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
              Incorporate Your UAE Freezone or Mainland Entity with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our corporate advisory team guides you through trade name reservation, MOA drafting, license issuance, and corporate bank account opening.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uae-services/freezone-company-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Incorporate UAE Company <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Setup Consultant
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
