import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Sparkles,
  Landmark,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-bank-approval")({
  head: () => ({
    meta: [
      { title: "UK Business Bank Account Approval Probability Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK business bank account eligibility checker. Test Wise Business, Tide, Revolut & High-Street Bank approval odds for overseas directors.",
      },
      {
        name: "keywords",
        content:
          "uk business bank account approval checker non resident 2026, wise business account approval eligibility uk ltd, tide revolut business bank non uk resident",
      },
      {
        property: "og:title",
        content: "UK Business Bank Account Approval Probability Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your odds of opening a UK business bank account for foreign-owned UK Limited Companies.",
      },
      { property: "og:url", content: "/calculators/uk-bank-approval" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-bank-approval" }],
  }),
  component: UKBankApprovalCalculatorPage,
});

function UKBankApprovalCalculatorPage() {
  const [directorResidency, setDirectorResidency] = useState<string>("non-uk");
  const [hasValidPassport, setHasValidPassport] = useState<boolean>(true);
  const [hasProofOfAddress, setHasProofOfAddress] = useState<boolean>(true);
  const [hasLondonAddress, setHasLondonAddress] = useState<boolean>(true);
  const [businessActivity, setBusinessActivity] = useState<string>("tech");

  // Approval Score Algorithm (Out of 100)
  let score = 30; // base score

  if (hasValidPassport) score += 25;
  if (hasProofOfAddress) score += 25;
  if (hasLondonAddress) score += 10;

  if (businessActivity === "tech" || businessActivity === "consulting") score += 10;
  else if (businessActivity === "crypto" || businessActivity === "gambling") score -= 20;

  score = Math.min(99, Math.max(10, score));

  let bankRecommendation = "Wise Business & Revolut Business";
  if (score > 80) bankRecommendation = "Wise Business, Revolut Business & Tide Bank";
  else if (score > 60) bankRecommendation = "Wise Business & WorldFirst";
  else bankRecommendation = "Specialized Non-Resident Fintech Banking Assistance Required";

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK Bank Account Approval Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK Business Bank Account Eligibility Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check your approval probability for Wise Business, Revolut, Tide, and WorldFirst as an overseas director of a UK LTD.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* INPUT 1: RESIDENCY */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Director Residency:
              </label>
              <select
                value={directorResidency}
                onChange={(e) => setDirectorResidency(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="non-uk">Non-UK Resident (Overseas Founder)</option>
                <option value="uk-resident">UK Resident</option>
              </select>
            </div>

            {/* INPUT 2: BUSINESS ACTIVITY */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                2. Primary Business Activity:
              </label>
              <select
                value={businessActivity}
                onChange={(e) => setBusinessActivity(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="tech">Software Development, SaaS & IT Services</option>
                <option value="consulting">Digital Marketing, E-commerce & Consulting</option>
                <option value="trading">International Physical Goods Import/Export</option>
                <option value="crypto">Crypto, Gaming or Financial Services</option>
              </select>
            </div>

            {/* CHECKBOXES */}
            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasValidPassport}
                  onChange={(e) => setHasValidPassport(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Valid International Passport Available?</strong>
                  <span className="text-gray-500">Required for biometric identity verification.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasProofOfAddress}
                  onChange={(e) => setHasProofOfAddress(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Utility Bill / Bank Statement (Proof of Address)?</strong>
                  <span className="text-gray-500">Dated within the last 3 months.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasLondonAddress}
                  onChange={(e) => setHasLondonAddress(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Official UK Registered Office Address Installed?</strong>
                  <span className="text-gray-500">Required for UK bank compliance check.</span>
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>UK Bank Approval Odds</span>
              </div>

              {/* SCORE DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Approval Probability
                </span>
                <div className="text-5xl font-serif font-bold text-white my-2">
                  {score}%
                </div>
                <div className="text-xs text-navy-200">
                  Recommended Banks: <strong className="text-gold-400 block mt-1 font-sans">{bankRecommendation}</strong>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Setup UK LTD & Bank Account
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20checked%20my%20UK%20Bank%20Approval%20Odds%20(${score}%25).%20Please%20help%20me%20open%20Wise%20Business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp Banking Specialist
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
