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

export const Route = createFileRoute("/calculators/uae-bank-approval")({
  head: () => ({
    meta: [
      { title: "Dubai Corporate Bank Account Approval Probability Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Dubai corporate bank account approval checker. Test Wio Bank, Mashreq NeoBiz & Emirates NBD approval odds for freezone & mainland companies.",
      },
      {
        name: "keywords",
        content:
          "wio bank approval checker dubai 2026, open corporate bank account dubai freezone non resident, mashreq neobiz approval eligibility uae",
      },
      {
        property: "og:title",
        content: "Dubai Corporate Bank Account Approval Probability Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your odds of opening a Dubai business bank account (Wio / Mashreq / Emirates NBD).",
      },
      { property: "og:url", content: "/calculators/uae-bank-approval" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-bank-approval" }],
  }),
  component: UAEBankApprovalCalculatorPage,
});

function UAEBankApprovalCalculatorPage() {
  const [hasEmiratesId, setHasEmiratesId] = useState<boolean>(true);
  const [hasEjariOffice, setHasEjariOffice] = useState<boolean>(false);
  const [minMonthlyBalanceAED, setMinMonthlyBalanceAED] = useState<number>(25000);
  const [businessActivity, setBusinessActivity] = useState<string>("it-consulting");

  let score = 30;
  if (hasEmiratesId) score += 30;
  if (hasEjariOffice) score += 20;

  if (minMonthlyBalanceAED >= 50000) score += 15;
  else if (minMonthlyBalanceAED >= 10000) score += 10;

  if (businessActivity === "it-consulting" || businessActivity === "marketing") score += 5;
  else if (businessActivity === "crypto" || businessActivity === "trading") score -= 20;

  score = Math.min(99, Math.max(10, score));

  let bankRec = "Wio Business & Mashreq NeoBiz";
  if (score > 80) bankRec = "Wio Business, Mashreq NeoBiz & Emirates NBD";
  else if (score > 60) bankRec = "Wio Business & RAKBANK Digital";
  else bankRec = "Specialized UAE Corporate Banking Assistance Required";

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>Dubai Bank Approval Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Dubai Corporate Bank Account Approval Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check your approval probability for Wio Bank, Mashreq NeoBiz, Emirates NBD, and RAKBANK for Freezone & Mainland companies.
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
                1. Business Activity:
              </label>
              <select
                value={businessActivity}
                onChange={(e) => setBusinessActivity(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="it-consulting">Software, Tech & IT Consultancy</option>
                <option value="marketing">Digital Marketing & Media Agency</option>
                <option value="trading">General Trading & Physical Goods</option>
                <option value="crypto">Crypto, Gaming or Financial Trading</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. Planned Minimum Monthly Balance (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {minMonthlyBalanceAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={minMonthlyBalanceAED}
                onChange={(e) => setMinMonthlyBalanceAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasEmiratesId}
                  onChange={(e) => setHasEmiratesId(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">UAE Residence Visa & Emirates ID Stamped?</strong>
                  <span className="text-gray-500">Crucial for UAE compliance KYC.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={hasEjariOffice}
                  onChange={(e) => setHasEjariOffice(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Physical Office Space with Ejari Tenancy?</strong>
                  <span className="text-gray-500">Improves traditional bank approval (Emirates NBD / FAB).</span>
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Dubai Bank Approval Odds</span>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Approval Odds
                </span>
                <div className="text-5xl font-serif font-bold text-white my-2">
                  {score}%
                </div>
                <div className="text-xs text-navy-200">
                  Recommended Banks: <strong className="text-gold-400 block mt-1 font-sans">{bankRec}</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uae-services/business-bank-account-guide"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Open UAE Bank Account with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20checked%20my%20Dubai%20Bank%20Approval%20Odds%20(${score}%25).%20Please%20help%20me%20open%20Wio%20Bank.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp Dubai Banking Lawyer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
