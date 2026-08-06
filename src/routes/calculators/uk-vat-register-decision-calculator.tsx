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

export const Route = createFileRoute("/calculators/uk-vat-register-decision-calculator")({
  head: () => ({
    meta: [
      { title: "Should I Register for UK VAT? Decision Tool (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "5-question interactive quiz tool to decide whether you should register for UK VAT voluntarily, mandatory, or apply for Flat Rate Scheme in 2026/2027.",
      },
      {
        name: "keywords",
        content:
          "should i register for vat uk tool 2026 2027, voluntary vat registration decision tree uk, uk vat registration threshold test 90000, b2b vs b2c vat registration strategy",
      },
      {
        property: "og:title",
        content: "Should I Register for UK VAT? Interactive Decision Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Answer 4 quick questions to get an instant recommendation on UK VAT registration.",
      },
      { property: "og:url", content: "/calculators/uk-vat-register-decision-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-vat-register-decision-calculator" }],
  }),
  component: UKVATDecisionToolPage,
});

function UKVATDecisionToolPage() {
  const [qTurnover, setQTurnover] = useState<string>("medium");
  const [qClientType, setQClientType] = useState<string>("b2b");
  const [qExpenses, setQExpenses] = useState<string>("high");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  let title = "Voluntary VAT Registration Recommended!";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation =
    "Since your clients are primarily B2B businesses and you incur VAT expenses, registering voluntarily allows you to reclaim 20% input VAT on hardware, ads & software without impacting your B2B clients.";

  if (qTurnover === "high") {
    title = "Mandatory UK VAT Registration Required!";
    badgeColor = "bg-amber-50 border-amber-300 text-amber-950";
    explanation =
      "Your 12-month rolling UK turnover exceeds £90,000. You are legally required by HMRC to register for UK VAT within 30 days.";
  } else if (qClientType === "b2c" && qTurnover === "low") {
    title = "Hold Off — Do Not Register Yet";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
    explanation =
      "Because your customers are end consumers (B2C) who cannot reclaim VAT, adding 20% VAT would make your prices 20% more expensive or reduce your margins.";
  } else if (qExpenses === "low" && qClientType === "b2b") {
    title = "Register & Apply Flat Rate Scheme (FRS)";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation =
      "With low physical expenses and B2B clients, registering under the Flat Rate Scheme (e.g., 14.5% IT rate with 1% 1st year discount) lets you keep the difference!";
  }

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "UK VAT Registration Decision Calculator", item: "https://advaq.com/calculators/uk-vat-register-decision-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Should I Register for UK VAT? Decision Tool (2026/2027)",
    url: "https://advaq.com/calculators/uk-vat-register-decision-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Interactive decision tree to evaluate whether voluntary or mandatory UK VAT registration is profitable for your business.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "When is voluntary UK VAT registration advantageous?",
      a: "Voluntary VAT registration (under £90,000 turnover) is advantageous if your customers are VAT-registered B2B businesses (who can reclaim the VAT you charge) and you incur significant VAT on business purchases (hardware, software, ads, hosting) which you can reclaim from HMRC.",
    },
    {
      q: "Why should B2C consumer businesses avoid voluntary VAT registration?",
      a: "End consumers (B2C) cannot reclaim VAT. If you register voluntarily, you must either increase your retail prices by 20% (reducing sales volume) or absorb the 20% VAT into your existing prices (reducing your profit margin by 16.67%).",
    },
    {
      q: "Can non-UK resident founders register for UK VAT voluntarily?",
      a: "Yes. Non-UK founders selling digital services or physical goods to UK customers can register voluntarily or mandatorily with HMRC to receive a UK VAT and EORI number.",
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
            <span>VAT Registration Decision Tool</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Should I Register for UK VAT? (Interactive Quiz)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Answer 3 quick questions about your turnover, clients, and expenses to get an instant recommendation.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className={`p-6 rounded-2xl border ${badgeColor} transition-all`}>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles size={24} className="text-gold-600" />
              <h3 className="font-serif font-bold text-xl">{title}</h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed opacity-90">{explanation}</p>
          </div>

          <div className="space-y-6 text-xs bg-off-white/50 p-6 rounded-2xl border border-border">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                1. What is your 12-month rolling UK turnover?
              </label>
              <div className="grid sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setQTurnover("low")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qTurnover === "low" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Under £50,000
                </button>
                <button
                  type="button"
                  onClick={() => setQTurnover("medium")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qTurnover === "medium" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  £50,000 – £90,000
                </button>
                <button
                  type="button"
                  onClick={() => setQTurnover("high")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qTurnover === "high" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Over £90,000 (Mandatory)
                </button>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                2. Who are your primary customers?
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setQClientType("b2b")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qClientType === "b2b" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  B2B Companies (They reclaim VAT)
                </button>
                <button
                  type="button"
                  onClick={() => setQClientType("b2c")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qClientType === "b2c" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  B2C Consumers (Cannot reclaim VAT)
                </button>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
                3. Do you have high VAT-subject expenses (Hardware, Software, Ads)?
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setQExpenses("high")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qExpenses === "high" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  High VAT Expenses (&gt;15% of turnover)
                </button>
                <button
                  type="button"
                  onClick={() => setQExpenses("low")}
                  className={`p-3 rounded-xl border text-left font-semibold ${
                    qExpenses === "low" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"
                  }`}
                >
                  Low VAT Expenses (&lt;15% of turnover)
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center">
            <Link to="/uk-services/vat-registration" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Apply for UK VAT Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP VAT DECISION WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Logic Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step VAT Registration Decision Logic
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of HMRC statutory threshold & client-side margin logic.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Statutory Limit Check</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{qTurnover.toUpperCase()} Turnover</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Turnover Level:</span> <strong className="text-white">{qTurnover === "high" ? "Over £90k" : qTurnover === "medium" ? "£50k-£90k" : "Under £50k"}</strong></div>
                <div className="flex justify-between"><span>Mandatory Threshold:</span> <strong className="text-gold-400">£90,000</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Statutory Rule:</span> <strong>{qTurnover === "high" ? "Mandatory Registration Required" : "Voluntary Option Available"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Client Base Reclaimability</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{qClientType.toUpperCase()} Clients</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Client Reclaim Ability:</span> <strong className="text-white">{qClientType === "b2b" ? "Can Reclaim 20% VAT ✅" : "Cannot Reclaim ❌"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Price Sensitivity:</span> <strong>{qClientType === "b2b" ? "Zero Price Impact (B2B neutral)" : "20% Price Penalty (B2C)"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Expense Input VAT Recovery</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">{qExpenses.toUpperCase()} Expenses</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>VAT Expense Level:</span> <strong className="text-white">{qExpenses === "high" ? "High (>15% of turnover)" : "Low (<15% of turnover)"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Optimal Mechanism:</span> <strong>{qExpenses === "high" ? "Reclaim 20% Input VAT on Purchases" : "Apply Flat Rate Scheme (FRS)"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Strategic Verdict</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Action Recommended</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Final Verdict:</span> <strong>{title}</strong></div>
              </div>
              <p className="text-[11px] text-navy-300 italic pt-1">
                💡 Follow ADVAQ guidance to optimize pricing and input VAT claims.
              </p>
            </div>

          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (VAT Decision)
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

      </div>
    </div>
  );
}
