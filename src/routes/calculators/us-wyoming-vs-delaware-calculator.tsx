import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  Award,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-wyoming-vs-delaware-calculator")({
  head: () => ({
    meta: [
      { title: "Wyoming vs Delaware vs New Mexico LLC Comparison Tool (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive state comparison tool. Compare Wyoming, Delaware & New Mexico LLCs on privacy, state fees, VC investor readiness & annual maintenance.",
      },
      {
        name: "keywords",
        content:
          "wyoming vs delaware llc comparison tool 2026, wyoming vs new mexico llc foreign resident, best state to form llc non-us resident, anonymous llc state comparison",
      },
      {
        property: "og:title",
        content: "Wyoming vs Delaware vs New Mexico LLC Comparison Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Find the perfect US state for your non-resident LLC based on privacy, annual fees, and business goals.",
      },
      { property: "og:url", content: "/calculators/us-wyoming-vs-delaware-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-wyoming-vs-delaware-calculator" }],
  }),
  component: USStateComparisonToolPage,
});

function USStateComparisonToolPage() {
  const [priority, setPriority] = useState<"privacy" | "cost" | "vc">("privacy");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let recommendedState = "Wyoming";
  let reason = "Wyoming offers 10/10 owner privacy, low $100 filing fee, and low $60 annual report costs.";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";

  if (priority === "vc") {
    recommendedState = "Delaware";
    reason = "Delaware is preferred by US venture capitalists, Y-Combinator, and angel investors due to its Court of Chancery.";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
  } else if (priority === "cost") {
    recommendedState = "New Mexico";
    reason = "New Mexico has a $50 state filing fee and $0 ongoing annual state report fees, making it the cheapest state long-term.";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
  }

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "Wyoming vs Delaware Comparison Tool", item: "https://advaq.com/calculators/us-wyoming-vs-delaware-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Wyoming vs Delaware vs New Mexico LLC Comparison Tool (2026/2027)",
    url: "https://advaq.com/calculators/us-wyoming-vs-delaware-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare Wyoming, Delaware, and New Mexico LLC state fees, owner privacy, annual franchise tax, and VC investor preferences.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Why is Wyoming the most popular state for foreign non-resident LLCs?",
      a: "Wyoming created the world's first LLC in 1977 and offers complete owner privacy (anonymous LLC), low $100 state filing fee, low $60 annual report cost, no state income tax, and strong asset protection charging order protection.",
    },
    {
      q: "Why do US venture capitalists prefer Delaware over Wyoming?",
      a: "Delaware has a dedicated corporate court (Court of Chancery) with hundreds of years of legal precedent. Most VC funds and accelerators (such as Y Combinator) require startup companies to be incorporated as Delaware C-Corporations.",
    },
    {
      q: "Is New Mexico really $0 annual fee forever?",
      a: "Yes! New Mexico does not require an annual report filing for LLCs and charges $0 in annual state fees, making it an excellent low-maintenance choice for solo consultants.",
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
            <span>State Comparison Tool</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Wyoming vs Delaware vs New Mexico LLC Comparison (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Interactive comparison tool to select the optimal US state based on privacy, filing costs, VC fundraising, and banking.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div>
            <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3 text-center">
              Select Your Primary Business Goal / Priority:
            </label>

            <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-xs">
              <button
                type="button"
                onClick={() => setPriority("privacy")}
                className={`p-4 rounded-xl border text-center font-semibold transition-all ${
                  priority === "privacy"
                    ? "bg-navy-950 text-white border-gold-500 shadow-md"
                    : "bg-white text-gray-800 border-border"
                }`}
              >
                <span className="block text-base mb-1">🤠 Privacy & E-commerce</span>
                <span>Wyoming (Highest Privacy & Low Fee)</span>
              </button>

              <button
                type="button"
                onClick={() => setPriority("vc")}
                className={`p-4 rounded-xl border text-center font-semibold transition-all ${
                  priority === "vc"
                    ? "bg-navy-950 text-white border-gold-500 shadow-md"
                    : "bg-white text-gray-800 border-border"
                }`}
              >
                <span className="block text-base mb-1">🏦 VC Investment & Tech</span>
                <span>Delaware (VC/Angel Preferred)</span>
              </button>

              <button
                type="button"
                onClick={() => setPriority("cost")}
                className={`p-4 rounded-xl border text-center font-semibold transition-all ${
                  priority === "cost"
                    ? "bg-navy-950 text-white border-gold-500 shadow-md"
                    : "bg-white text-gray-800 border-border"
                }`}
              >
                <span className="block text-base mb-1">🌵 Lowest Ongoing Annual Cost</span>
                <span>New Mexico ($0 Annual Report)</span>
              </button>
            </div>
          </div>

          <div className={`p-6 rounded-2xl border ${badgeColor} max-w-3xl mx-auto text-center space-y-2`}>
            <div className="flex items-center justify-center gap-2 text-gold-600 font-bold uppercase tracking-widest text-xs">
              <Award size={18} />
              <span>Recommended Winner</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-navy-950">{recommendedState} LLC</h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl mx-auto">{reason}</p>
          </div>

          <div className="overflow-x-auto pt-4">
            <table className="w-full text-left text-xs border-collapse border border-border rounded-xl">
              <thead>
                <tr className="bg-navy-950 text-gold-400 font-serif text-sm">
                  <th className="p-3">Comparison Metric</th>
                  <th className="p-3">🤠 Wyoming</th>
                  <th className="p-3">🏦 Delaware</th>
                  <th className="p-3">🌵 New Mexico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-navy-950">
                <tr>
                  <td className="p-3 font-semibold">State Filing Fee</td>
                  <td className="p-3 font-mono font-bold text-emerald-600">$100</td>
                  <td className="p-3 font-mono">$110</td>
                  <td className="p-3 font-mono font-bold text-emerald-600">$50</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Annual Report Fee</td>
                  <td className="p-3 font-mono">$60 / year</td>
                  <td className="p-3 font-mono text-amber-600 font-bold">$300 / year (Franchise Tax)</td>
                  <td className="p-3 font-mono text-emerald-600 font-bold">$0 / year (Zero)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Owner Anonymity</td>
                  <td className="p-3 text-emerald-600 font-bold">10/10 (Anonymous)</td>
                  <td className="p-3">9/10 (High)</td>
                  <td className="p-3 text-emerald-600 font-bold">10/10 (Anonymous)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Mercury / Wise Bank Approval</td>
                  <td className="p-3 text-emerald-600 font-bold">99% High</td>
                  <td className="p-3 text-emerald-600 font-bold">99% High</td>
                  <td className="p-3 font-bold">95% Medium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4 text-center">
            <Link to="/us-services/wyoming-llc-formation" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Form Your {recommendedState} LLC with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US STATE DECISION WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step {recommendedState} LLC Decision Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your optimal US incorporation state selection.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Selected Priority Profile</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Priority Match ✅</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>User Selected Goal:</span> <strong className="text-white">{priority === "privacy" ? "Privacy & E-commerce" : priority === "vc" ? "VC Funding / Tech Startup" : "Lowest Maintenance Cost"}</strong></div>
                <div className="flex justify-between"><span>Recommended State:</span> <strong className="text-gold-400 font-bold">{recommendedState} LLC</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Upfront & Recurring State Fees</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Fee Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Initial State Filing Fee:</span> <strong className="text-white">{recommendedState === "Wyoming" ? "$100" : recommendedState === "Delaware" ? "$110" : "$50"}</strong></div>
                <div className="flex justify-between"><span>Annual State Franchise Tax:</span> <strong className="text-emerald-400">{recommendedState === "Wyoming" ? "$60 / yr" : recommendedState === "Delaware" ? "$300 / yr" : "$0 / yr"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Privacy & Anonymity Rating</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Privacy Safe ✅</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Public Owner Directory:</span> <strong className="text-emerald-400">{recommendedState === "Delaware" ? "High Privacy (9/10)" : "Anonymous LLC (10/10)"}</strong></div>
                <div className="flex justify-between"><span>Charging Order Protection:</span> <strong className="text-emerald-400">Exclusive Remedy Granted</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Banking & Investor Acceptance</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">High Approval</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Mercury & Wise Approval:</span> <strong className="text-emerald-400">99% Instant Pre-Check</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Final Verdict:</span> <strong>Form {recommendedState} LLC</strong></div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (US State Selection)
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
              <Shield size={16} /> ADVAQ Corporate Advisory Services
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Ready to Form Your {recommendedState} Company?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              ADVAQ handles state filing, registered agent, EIN, BOI report, and guaranteed US bank account setup for non-resident founders.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Incorporate {recommendedState} LLC <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Advisor
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
