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

export const Route = createFileRoute("/calculators/uae-freezone-vs-mainland-quiz")({
  head: () => ({
    meta: [
      { title: "Freezone or Mainland? UAE Entity Selection Quiz Tool (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "7-question interactive quiz tool to decide whether to register a Dubai Freezone LLC or Mainland DET company.",
      },
      {
        name: "keywords",
        content:
          "freezone vs mainland uae decision quiz tool 2026, Dubai mainland vs freezone company setup comparison, freezone or mainland quiz uae",
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
      { property: "og:url", content: "/calculators/uae-freezone-vs-mainland-quiz" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-freezone-vs-mainland-quiz" }],
  }),
  component: UAEFreezoneVsMainlandQuizPage,
});

function UAEFreezoneVsMainlandQuizPage() {
  const [qClients, setQClients] = useState<"global" | "local">("global");
  const [qOffice, setQOffice] = useState<boolean>(false);
  const [qGovt, setQGovt] = useState<boolean>(false);

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

  return (
    <div className="min-h-screen bg-white">
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
            Freezone or Mainland? (Interactive Decision Quiz)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Answer quick questions about your target clients, office needs, and trading activities for a custom recommendation.
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
            {/* Q1: CLIENT LOCATION */}
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

            {/* Q2: PHYSICAL OFFICE */}
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

            {/* Q3: GOVT TENDERS */}
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
    </div>
  );
}
