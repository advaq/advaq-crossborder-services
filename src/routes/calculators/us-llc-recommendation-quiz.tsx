import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-llc-recommendation-quiz")({
  head: () => ({
    meta: [
      { title: "Should I Form a US LLC? Interactive Quiz Tool (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "5-question interactive quiz tool to decide whether forming a US LLC is right for your foreign freelance or e-commerce business.",
      },
      {
        name: "keywords",
        content:
          "should i form a us llc quiz tool 2026, is us llc worth it for foreign freelancers, wyoming llc vs pakistan sole prop",
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
      { property: "og:url", content: "/calculators/us-llc-recommendation-quiz" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-llc-recommendation-quiz" }],
  }),
  component: USLLCRecommendationQuizPage,
});

function USLLCRecommendationQuizPage() {
  const [qRevenue, setQRevenue] = useState<string>("medium"); // low (<5k), medium (5k-50k), high (>50k)
  const [qGateway, setQGateway] = useState<boolean>(true); // Need Stripe/Wise
  const [qVcFund, setQVcFund] = useState<boolean>(false); // Need VC funds

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

  return (
    <div className="min-h-screen bg-white">
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
            Should I Form a US LLC? (Interactive Quiz)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Answer 3 quick questions about your revenue, clients, and payment gateway needs to get an instant recommendation.
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
              <h3 className="font-serif font-bold text-xl">{recommendationTitle}</h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed opacity-90">{explanation}</p>
          </div>

          {/* QUIZ QUESTIONS */}
          <div className="space-y-6 text-xs bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* Q1: REVENUE */}
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

            {/* Q2: PAYMENT GATEWAY */}
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

            {/* Q3: VC FUNDING */}
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
    </div>
  );
}
