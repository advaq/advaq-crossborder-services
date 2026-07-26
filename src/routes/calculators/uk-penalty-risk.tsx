import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  PoundSterling,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-penalty-risk")({
  head: () => ({
    meta: [
      { title: "HMRC & Companies House Late Filing Penalty Estimator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK company late filing penalty calculator. Calculate Companies House accounts penalties, Confirmation Statement delays & HMRC CT600 late interest.",
      },
      {
        name: "keywords",
        content:
          "companies house late filing penalty calculator 2026, hmrc late ct600 penalty calculator, confirmation statement late fee uk",
      },
      {
        property: "og:title",
        content: "HMRC & Companies House Late Filing Penalty Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact Companies House and HMRC penalty risk for overdue accounts, CS01 statements, and tax returns.",
      },
      { property: "og:url", content: "/calculators/uk-penalty-risk" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-penalty-risk" }],
  }),
  component: UKPenaltyRiskCalculatorPage,
});

function UKPenaltyRiskCalculatorPage() {
  const [monthsOverdueAccounts, setMonthsOverdueAccounts] = useState<number>(2);
  const [isSecondConsecutiveYear, setIsSecondConsecutiveYear] = useState<boolean>(false);
  const [monthsOverdueCT600, setMonthsOverdueCT600] = useState<number>(3);
  const [overdueTaxBill, setOverdueTaxBill] = useState<number>(5000); // Tax amount
  const [appealReason, setAppealReason] = useState<string>("medical"); // Reason

  // 1. COMPANIES HOUSE LATE ACCOUNTS PENALTIES
  let companiesHousePenalty = 0;
  if (monthsOverdueAccounts > 0) {
    if (monthsOverdueAccounts <= 1) companiesHousePenalty = 150;
    else if (monthsOverdueAccounts <= 3) companiesHousePenalty = 375;
    else if (monthsOverdueAccounts <= 6) companiesHousePenalty = 750;
    else companiesHousePenalty = 1500;

    if (isSecondConsecutiveYear) {
      companiesHousePenalty *= 2;
    }
  }

  // 2. HMRC CT600 CORPORATION TAX LATE PENALTIES
  let hmrcLatePenalty = 0;
  if (monthsOverdueCT600 > 0) {
    if (monthsOverdueCT600 <= 3) hmrcLatePenalty = 100;
    else if (monthsOverdueCT600 <= 6) hmrcLatePenalty = 200;
    else hmrcLatePenalty = 500;
  }

  // 3. HMRC LATE PAYMENT INTEREST (7.5% per annum statutory interest)
  const hmrcInterestRate = 0.075;
  const daysOverdue = monthsOverdueCT600 * 30;
  const hmrcLateInterest = overdueTaxBill > 0 && daysOverdue > 0
    ? (overdueTaxBill * hmrcInterestRate * (daysOverdue / 365))
    : 0;

  const totalOverduePenalties = companiesHousePenalty + hmrcLatePenalty + hmrcLateInterest;

  // 4. APPEAL SUCCESS PROBABILITY ESTIMATOR
  const appealProbabilities: Record<string, { prob: number; label: string; tip: string }> = {
    medical: { prob: 85, label: "High (85%)", tip: "Hospital records/doctor note required as reasonable excuse." },
    technical: { prob: 80, label: "High (80%)", tip: "Screenshots of HMRC portal error / gateway downtime required." },
    postal: { prob: 65, label: "Moderate (65%)", tip: "Proof of international courier dispatch before deadline needed." },
    agent: { prob: 45, label: "Fair (45%)", tip: "HMRC expects directors to monitor agents, but engagement letters help." },
    unaware: { prob: 15, label: "Low (15%)", tip: "Ignorance of deadline is rarely accepted by HMRC or Companies House." },
  };

  const selectedAppeal = appealProbabilities[appealReason] || appealProbabilities.medical;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK Late Filing Penalty Risk</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            HMRC & Companies House Late Penalty Estimator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact statutory penalties and interest for overdue annual accounts, Confirmation Statements, and CT600 Corporation Tax returns.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            {/* INPUT 1: ACCOUNTS OVERDUE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  1. Companies House Accounts Overdue Period:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {monthsOverdueAccounts === 0 ? "On Time (0 Months)" : `${monthsOverdueAccounts} Months Late`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="12"
                step="1"
                value={monthsOverdueAccounts}
                onChange={(e) => setMonthsOverdueAccounts(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>0 Months</span>
                <span>3 Months</span>
                <span>6 Months</span>
                <span>12+ Months</span>
              </div>
            </div>

            {/* TOGGLE: SECOND YEAR */}
            <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <input
                type="checkbox"
                checked={isSecondConsecutiveYear}
                onChange={(e) => setIsSecondConsecutiveYear(e.target.checked)}
                className="accent-gold-500 w-4 h-4"
              />
              <div className="text-xs">
                <strong className="text-navy-950 block">Late for 2nd Consecutive Year?</strong>
                <span className="text-gray-500">Companies House doubles statutory penalties if accounts are late 2 years in a row.</span>
              </div>
            </label>

            {/* INPUT 2: CT600 OVERDUE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. HMRC CT600 Corporation Tax Overdue Period:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {monthsOverdueCT600 === 0 ? "On Time (0 Months)" : `${monthsOverdueCT600} Months Late`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="12"
                step="1"
                value={monthsOverdueCT600}
                onChange={(e) => setMonthsOverdueCT600(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT SUMMARY CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Statutory Penalty Estimate</span>
              </div>

              {/* ITEM LIST */}
              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Companies House Late Accounts Penalty:</span>
                  <span className="font-mono text-gold-400 font-semibold">£{companiesHousePenalty}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>HMRC CT600 Late Tax Return Penalty:</span>
                  <span className="font-mono text-gold-400 font-semibold">£{hmrcLatePenalty}</span>
                </div>
              </div>

              {/* TOTAL ESTIMATED PENALTY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Statutory Penalty Risk
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{totalOverduePenalties}
                  <span className="text-xs text-navy-300 font-sans font-normal ml-2">GBP</span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-navy-200">
                  Act fast before Companies House issues a compulsory strike-off warning!
                </div>
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/annual-accounts"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Overdue Accounts with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20My%20UK%20LTD%20accounts%20are%20overdue%20(${monthsOverdueAccounts}%20months).%20Please%20help%20me%20file%20immediately.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp UK Compliance Accountant
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
