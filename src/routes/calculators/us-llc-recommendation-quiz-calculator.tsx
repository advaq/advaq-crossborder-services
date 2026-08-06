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

export const Route = createFileRoute("/calculators/us-llc-recommendation-quiz-calculator")({
  head: () => ({
    meta: [
      { title: "Should I Form a US LLC? Interactive Quiz Tool (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "5-question interactive quiz tool to decide whether forming a US LLC is right for your foreign freelance or e-commerce business.",
      },
      {
        name: "keywords",
        content:
          "should i form a us llc quiz tool 2026, is us llc worth it for foreign freelancers, wyoming llc vs pakistan sole prop, non resident us llc benefits stripe bank",
      },
      {
        property: "og:title",
        content: "Should I Form a US LLC? Interactive Quiz Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Answer 5 quick questions to see if a US LLC is recommended for your international business.",
      },
      { property: "og:url", content: "/calculators/us-llc-recommendation-quiz-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-llc-recommendation-quiz-calculator" }],
  }),
  component: USLLCRecommendationQuizPage,
});

function USLLCRecommendationQuizPage() {
  const [qRevenue, setQRevenue] = useState<string>("medium");
  const [qGateway, setQGateway] = useState<boolean>(true);
  const [qVcFund, setQVcFund] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let recommendationTitle = "Wyoming US LLC Strongly Recommended!";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation =
    "A Wyoming US LLC gives you direct access to Stripe, US bank accounts (Mercury/Wise), 0% US federal tax status, and strong brand authority with US & European clients.";

  if (qVcFund) {
    recommendationTitle = "Delaware C-Corporation Recommended";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation =
      "Because you plan to raise equity capital from US Venture Capitalists or Y-Combinator, forming a Delaware C-Corp is the required legal structure.";
  } else if (qRevenue === "low" && !qGateway) {
    recommendationTitle = "Hold Off — Use Local Entity for Now";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
    explanation =
      "At under $5,000 annual revenue without payment gateway requirements, operating as a local Sole Proprietor keeps your compliance costs minimal until you scale.";
  }

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US LLC Decision Quiz", item: "https://advaq.com/calculators/us-llc-recommendation-quiz-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Should I Form a US LLC? Interactive Quiz Tool (2026/2027)",
    url: "https://advaq.com/calculators/us-llc-recommendation-quiz-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Interactive recommendation tool for non-US entrepreneurs to decide whether forming a US LLC or Delaware C-Corp matches their business goals.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "When is the right revenue milestone to incorporate a US LLC?",
      a: "Most international freelancers and e-commerce sellers incorporate a US LLC once their annual revenue crosses $5,000 to $10,000 USD, or as soon as they require a US Stripe account, Mercury Bank account, or PayPal Business integration.",
    },
    {
      q: "Can I form a US LLC if I live in Pakistan, UAE, or UK?",
      a: "Yes! Non-US residents living anywhere in the world can legally own 100% of a US LLC without residing in the US or holding a US visa or SSN.",
    },
    {
      q: "What is the total annual cost of maintaining a US LLC?",
      a: "A Wyoming LLC costs $60 in annual state fees and $99 in Registered Agent renewal. Form 5472 IRS tax returns cost around $350/year, making total annual maintenance roughly $500/year.",
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
            <span>US LLC Decision Quiz</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Should I Form a US LLC? (Interactive Quiz) (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Answer 3 quick questions about your revenue, clients, and payment gateway needs to get an instant recommendation.
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
                1. What is your estimated annual client revenue ($)?
              </label>
              <div className="grid sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setQRevenue("low")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qRevenue === "low" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Under $5,000 / year
                </button>
                <button
                  type="button"
                  onClick={() => setQRevenue("medium")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qRevenue === "medium" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  $5,000 – $50,000 / year
                </button>
                <button
                  type="button"
                  onClick={() => setQRevenue("high")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qRevenue === "high" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Over $50,000 / year
                </button>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                2. Do you need Stripe, PayPal Business, or a US Bank Account?
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setQGateway(true)}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qGateway ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Yes — Crucial for international payments
                </button>
                <button
                  type="button"
                  onClick={() => setQGateway(false)}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    !qGateway ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  No — Local bank wire is fine
                </button>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                3. Do you plan to raise equity capital from US VCs / Y-Combinator?
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setQVcFund(true)}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qVcFund ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Yes — VC fundraising planned
                </button>
                <button
                  type="button"
                  onClick={() => setQVcFund(false)}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    !qVcFund ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  No — Self-funded / Bootstrapped
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link to="/us-services/wyoming-llc-formation" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Form Your US Company with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US LLC DECISION QUIZ WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Entity Decision Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your personalized US corporate structure strategy.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Revenue Benchmark Analysis</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Revenue Evaluated</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Client Revenue:</span> <strong className="text-white">{qRevenue.toUpperCase()}</strong></div>
                <div className="flex justify-between"><span>Minimum Viable Scale:</span> <strong className="text-emerald-400">$5,000+ USD / year</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Payment Infrastructure Need</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${qGateway ? "bg-emerald-500/20 text-emerald-400" : "bg-gold-500/20 text-gold-400"}`}>
                  {qGateway ? "Stripe Essential ✅" : "Wire Transfer"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Stripe / Mercury Bank Requirement:</span> <strong className={qGateway ? "text-emerald-400" : "text-white"}>{qGateway ? "YES (Requires US LLC)" : "NO"}</strong></div>
                <div className="flex justify-between"><span>Global Client Conversion Impact:</span> <strong className="text-gold-400">+300% Higher Conversion</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Equity Fundraising Intent</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${qVcFund ? "bg-gold-500/20 text-gold-400" : "bg-emerald-500/20 text-emerald-400"}`}>
                  {qVcFund ? "VC Fundable" : "Bootstrapped Pass-Through"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Venture Capital Intent:</span> <strong className="text-white">{qVcFund ? "YES (Delaware C-Corp)" : "NO (Wyoming LLC)"}</strong></div>
                <div className="flex justify-between"><span>Corporate Governance Scope:</span> <strong className="text-emerald-400">{qVcFund ? "Preferred Stock & ESOP" : "0% Tax Pass-Through"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final Structure Recommendation</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Optimal Match ✅</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Recommended Structure:</span> <strong>{recommendationTitle}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Formation Turnaround:</span> <strong className="text-emerald-400">24–48 Hours</strong></div>
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
                US Entity Recommendation Matrix for International Founders
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Business Model</th>
                  <th className="p-3.5">Recommended US Entity</th>
                  <th className="p-3.5">US Tax Bracket</th>
                  <th className="p-3.5 rounded-tr-xl">Key Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr className="bg-gold-500/10 font-bold">
                  <td className="p-3.5 text-navy-950">Freelancer / SaaS / E-commerce</td>
                  <td className="p-3.5 font-mono text-emerald-600">Wyoming Single-Member LLC ✅</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% Federal Tax</td>
                  <td className="p-3.5">Stripe, Mercury Bank, 0% Tax Pass-Through</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">VC Funded Startup (Y-Combinator)</td>
                  <td className="p-3.5 font-mono text-gold-600 font-bold">Delaware C-Corporation</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">21% Flat Corp Tax</td>
                  <td className="p-3.5">VC Equity Investor Mandate & ESOP</td>
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
              Frequently Asked Questions (US LLC Incorporation)
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
              <Shield size={16} /> ADVAQ US Corporate Incorporation Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Incorporate Your Recommended US Entity Online
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US team files your Articles of Organization, obtains your IRS EIN without an SSN, files FinCEN BOI reports, and sets up your US business bank account.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Incorporate US Entity with ADVAQ <ArrowRight size={16} />
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
