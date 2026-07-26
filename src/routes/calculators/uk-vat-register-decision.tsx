import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-vat-register-decision")({
  head: () => ({
    meta: [
      { title: "Should I Register for UK VAT? Decision Tool (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "5-question interactive quiz tool to decide whether you should register for UK VAT voluntarily, mandatory, or apply for Flat Rate Scheme.",
      },
      {
        name: "keywords",
        content:
          "should i register for vat uk tool, voluntary vat registration decision tree uk, uk vat registration threshold test",
      },
      {
        property: "og:title",
        content: "Should I Register for UK VAT? Interactive Decision Tool | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Answer 5 quick questions to get an instant recommendation on UK VAT registration.",
      },
      { property: "og:url", content: "/calculators/uk-vat-register-decision" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-vat-register-decision" }],
  }),
  component: UKVATDecisionToolPage,
});

function UKVATDecisionToolPage() {
  const [qTurnover, setQTurnover] = useState<string>("medium"); // low (<50k), medium (50k-90k), high (>90k)
  const [qClientType, setQClientType] = useState<string>("b2b"); // b2b vs b2c
  const [qExpenses, setQExpenses] = useState<string>("high"); // high vs low
  const [qOverseasAds, setQOverseasAds] = useState<boolean>(true); // Reverse charge

  // Recommendation Engine Logic
  let status = "VOLUNTARY_RECOMMENDED";
  let title = "Voluntary VAT Registration Recommended!";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation =
    "Since your clients are primarily B2B businesses and you incur VAT expenses, registering voluntarily allows you to reclaim 20% input VAT on hardware, ads & software without impacting your B2B clients.";

  if (qTurnover === "high") {
    status = "MANDATORY";
    title = "Mandatory UK VAT Registration Required!";
    badgeColor = "bg-amber-50 border-amber-300 text-amber-950";
    explanation =
      "Your 12-month rolling UK turnover exceeds £90,000. You are legally required by HMRC to register for UK VAT within 30 days.";
  } else if (qClientType === "b2c" && qTurnover === "low") {
    status = "HOLD";
    title = "Hold Off — Do Not Register Yet";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
    explanation =
      "Because your customers are end consumers (B2C) who cannot reclaim VAT, adding 20% VAT would make your prices 20% more expensive or reduce your margins.";
  } else if (qExpenses === "low" && qClientType === "b2b") {
    status = "FLAT_RATE";
    title = "Register & Apply Flat Rate Scheme (FRS)";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation =
      "With low physical expenses and B2B clients, registering under the Flat Rate Scheme (e.g., 14.5% IT rate with 1% 1st year discount) lets you keep the difference!";
  }

  return (
    <div className="min-h-screen bg-white">
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
            Answer 4 quick questions about your turnover, clients, and expenses to get an instant recommendation.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* RESULT CARD */}
          <div className={`p-6 rounded-2xl border ${badgeColor} transition-all`}>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles size={24} className="text-gold-600" />
              <h3 className="font-serif font-bold text-xl">{title}</h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed opacity-90">{explanation}</p>
          </div>

          {/* QUIZ QUESTIONS */}
          <div className="space-y-6 text-xs bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* Q1: TURNOVER */}
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

            {/* Q2: CLIENT TYPE */}
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

            {/* Q3: EXPENSES */}
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
    </div>
  );
}
