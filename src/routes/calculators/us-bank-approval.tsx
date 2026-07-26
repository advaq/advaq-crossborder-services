import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  Shield,
  ArrowRight,
  Sparkles,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-bank-approval")({
  head: () => ({
    meta: [
      { title: "US Business Bank Account Approval Probability Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US bank account approval checker for foreign owners. Test Mercury Bank, Relay Financial & Wise Business eligibility for non-residents.",
      },
      {
        name: "keywords",
        content:
          "mercury bank approval checker non resident us llc 2026, relay financial bank eligibility non us citizen, open us business bank account foreign owner",
      },
      {
        property: "og:title",
        content: "US Business Bank Account Approval Probability Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your odds of opening a US business bank account (Mercury / Relay) for foreign-owned US LLCs.",
      },
      { property: "og:url", content: "/calculators/us-bank-approval" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-bank-approval" }],
  }),
  component: USBankApprovalCalculatorPage,
});

function USBankApprovalCalculatorPage() {
  const [hasPassport, setHasPassport] = useState<boolean>(true);
  const [hasEIN, setHasEIN] = useState<boolean>(true);
  const [hasUSPhysicalAddress, setHasUSPhysicalAddress] = useState<boolean>(true);
  const [hasProofOfAddress, setHasProofOfAddress] = useState<boolean>(true);
  const [businessType, setBusinessType] = useState<string>("saas");

  let score = 30;
  if (hasPassport) score += 25;
  if (hasEIN) score += 20;
  if (hasUSPhysicalAddress) score += 15;
  if (hasProofOfAddress) score += 10;

  if (businessType === "saas" || businessType === "agency") score += 5;
  else if (businessType === "crypto") score -= 25;

  score = Math.min(99, Math.max(10, score));

  let bankRec = "Mercury Bank & Relay Financial";
  if (score > 80) bankRec = "Mercury Bank, Relay Financial & Wise Business";
  else if (score > 60) bankRec = "Relay Financial & Wise Business";
  else bankRec = "Specialized Non-Resident Bank Assistance Required";

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US Bank Approval Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Mercury & Relay Bank Account Eligibility Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check your approval probability for Mercury Bank, Relay Financial, and Wise Business as a foreign-owned US LLC.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                Business Type:
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="saas">SaaS, Software & Digital Products</option>
                <option value="agency">Digital Marketing & Consulting Agency</option>
                <option value="ecommerce">E-Commerce & Amazon/Stripe Store</option>
                <option value="crypto">Crypto, Forex or Financial Services</option>
              </select>
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasPassport}
                  onChange={(e) => setHasPassport(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Valid International Passport Available?</strong>
                  <span className="text-gray-500">Required for biometric selfie check.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasEIN}
                  onChange={(e) => setHasEIN(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Official IRS EIN CP575 / 147C Letter Installed?</strong>
                  <span className="text-gray-500">Federal Tax ID confirmation letter.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasUSPhysicalAddress}
                  onChange={(e) => setHasUSPhysicalAddress(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">US Business Address & Mail Forwarding Ready?</strong>
                  <span className="text-gray-500">Required for Mercury compliance verification.</span>
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
                  <strong className="text-navy-950 block">Utility Bill / Home Address Proof (Last 90 Days)?</strong>
                  <span className="text-gray-500">Proof of residential address abroad.</span>
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>US Bank Approval Score</span>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Approval Odds
                </span>
                <div className="text-5xl font-serif font-bold text-white my-2">
                  {score}%
                </div>
                <div className="text-xs text-navy-200">
                  Recommended Platforms: <strong className="text-gold-400 block mt-1 font-sans">{bankRec}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/mercury-bank-guide"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Open US Bank Account with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20checked%20my%20US%20Bank%20Approval%20Odds%20(${score}%25).%20Please%20help%20me%20open%20Mercury%20Bank.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp US Banking Specialist
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
