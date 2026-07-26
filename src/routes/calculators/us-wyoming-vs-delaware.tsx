import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-wyoming-vs-delaware")({
  head: () => ({
    meta: [
      { title: "Wyoming vs Delaware vs New Mexico LLC Comparison Tool (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive state comparison tool. Compare Wyoming, Delaware & New Mexico LLCs on privacy, state fees, VC investor readiness & annual maintenance.",
      },
      {
        name: "keywords",
        content:
          "wyoming vs delaware llc comparison tool 2026, wyoming vs new mexico llc foreign resident, best state to form llc non-us resident",
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
      { property: "og:url", content: "/calculators/us-wyoming-vs-delaware" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-wyoming-vs-delaware" }],
  }),
  component: USStateComparisonToolPage,
});

function USStateComparisonToolPage() {
  const [priority, setPriority] = useState<"privacy" | "cost" | "vc">("privacy");

  let recommendedState = "Wyoming";
  let reason = "Wyoming offers 10/10 owner privacy, low $100 filing fee, and low $60 annual report costs.";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";

  if (priority === "vc") {
    recommendedState = "Delaware";
    reason = "Delaware is preferred by US venture capitalists, Y-Combinator, and angel investors due to its Chancery Court.";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
  } else if (priority === "cost") {
    recommendedState = "New Mexico";
    reason = "New Mexico has $50 state filing fee and $0 ongoing annual state report fees, making it the cheapest state long-term.";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
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
            <span>State Comparison Tool</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Wyoming vs Delaware vs New Mexico LLC Comparison (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Interactive comparison tool to select the optimal US state based on privacy, filing costs, VC fundraising, and banking.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* PRIORITY SELECTOR */}
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

          {/* RECOMMENDATION RESULT CARD */}
          <div className={`p-6 rounded-2xl border ${badgeColor} max-w-3xl mx-auto text-center space-y-2`}>
            <div className="flex items-center justify-center gap-2 text-gold-600 font-bold uppercase tracking-widest text-xs">
              <Award size={18} />
              <span>Recommended Winner</span>
            </div>
            <h3 className="font-serif text-3xl font-bold text-navy-950">{recommendedState} LLC</h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl mx-auto">{reason}</p>
          </div>

          {/* SIDE-BY-SIDE MATRIX */}
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
    </div>
  );
}
