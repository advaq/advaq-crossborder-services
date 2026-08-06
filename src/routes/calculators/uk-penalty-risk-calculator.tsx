import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
  Clock,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-penalty-risk-calculator")({
  head: () => ({
    meta: [
      { title: "HMRC & Companies House Late Filing Penalty Estimator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK company late filing penalty calculator for 2026/2027. Calculate Companies House accounts penalties, Confirmation Statement delays, HMRC CT600 late interest, and compulsory strike-off risk.",
      },
      {
        name: "keywords",
        content:
          "companies house late filing penalty calculator 2026 2027, hmrc late ct600 penalty calculator, confirmation statement late fee uk, compulsory strike off warning companies house",
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
      { property: "og:url", content: "/calculators/uk-penalty-risk-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-penalty-risk-calculator" }],
  }),
  component: UKPenaltyRiskCalculatorPage,
});

function UKPenaltyRiskCalculatorPage() {
  const [monthsOverdueAccounts, setMonthsOverdueAccounts] = useState<number>(2);
  const [isSecondConsecutiveYear, setIsSecondConsecutiveYear] = useState<boolean>(false);
  const [monthsOverdueCT600, setMonthsOverdueCT600] = useState<number>(3);
  const [overdueTaxBill, setOverdueTaxBill] = useState<number>(5000);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  let hmrcLatePenalty = 0;
  if (monthsOverdueCT600 > 0) {
    if (monthsOverdueCT600 <= 3) hmrcLatePenalty = 100;
    else if (monthsOverdueCT600 <= 6) hmrcLatePenalty = 200;
    else hmrcLatePenalty = 500;
  }

  const hmrcInterestRate = 0.075;
  const daysOverdue = monthsOverdueCT600 * 30;
  const hmrcLateInterest = overdueTaxBill > 0 && daysOverdue > 0
    ? (overdueTaxBill * hmrcInterestRate * (daysOverdue / 365))
    : 0;

  const totalOverduePenalties = Math.round(companiesHousePenalty + hmrcLatePenalty + hmrcLateInterest);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UK Calculators", item: "https://advaq.com/calculators/uk" },
      { "@type": "ListItem", position: 4, name: "HMRC & Companies House Penalty Estimator", item: "https://advaq.com/calculators/uk-penalty-risk-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HMRC & Companies House Late Filing Penalty Estimator (2026/2027)",
    url: "https://advaq.com/calculators/uk-penalty-risk-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Companies House late accounts penalties, doubling penalties, HMRC CT600 late interest, and strike-off risks.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What are the official Companies House statutory late accounts penalties?",
      a: "For private limited companies, Companies House statutory penalties for late accounts are: Up to 1 month late = £150, 1 to 3 months late = £375, 3 to 6 months late = £750, and over 6 months late = £1,500. Penalties double automatically if accounts are late two consecutive financial years.",
    },
    {
      q: "What happens if a UK company fails to file its Confirmation Statement (CS01)?",
      a: "If a company fails to file its annual Confirmation Statement (CS01), Companies House will issue warning letters and initiate compulsory strike-off proceedings (First Gazette Notice). If unfiled, the company is dissolved and its bank accounts and corporate assets forfeit to the Crown (Bona Vacantia).",
    },
    {
      q: "What are the HMRC CT600 Corporation Tax late filing penalties?",
      a: "HMRC charges a £100 fixed penalty for filing 1 day late, an additional £100 at 3 months late, plus an estimated 10% tax penalty at 6 months late, and another 10% tax penalty at 12 months late.",
    },
    {
      q: "Can Companies House or HMRC late filing penalties be appealed?",
      a: "Yes, but only under exceptional 'Reasonable Excuse' circumstances such as severe illness of the sole director, fire/flood damaging records, or proven technical failure of the Companies House electronic filing portal. Ignorance of deadlines or failure of an accountant is NOT accepted.",
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
            <span>UK Late Filing Penalty Risk</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            HMRC & Companies House Late Penalty Estimator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact statutory penalties and interest for overdue annual accounts, Confirmation Statements, and CT600 Corporation Tax returns.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
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
            </div>

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

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  3. Overdue Corporation Tax Liability (£):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  £{overdueTaxBill.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={overdueTaxBill}
                onChange={(e) => setOverdueTaxBill(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Statutory Penalty Estimate</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Companies House Late Accounts Fine:</span>
                  <span className="font-mono text-gold-400 font-semibold">£{companiesHousePenalty.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>HMRC CT600 Late Filing Fine:</span>
                  <span className="font-mono text-gold-400 font-semibold">£{hmrcLatePenalty.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>HMRC Statutory Interest (7.5% p.a.):</span>
                  <span className="font-mono text-amber-400 font-semibold">£{Math.round(hmrcLateInterest).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Penalty & Interest Risk
                </span>
                <div className="text-4xl font-serif font-bold text-red-400">
                  £{totalOverduePenalties.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/corporation-tax-return"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Catch-Up Returns with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP PENALTY WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Statutory Penalty Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of statutory penalties & interest charges under UK Companies House & HMRC rules.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Companies House Late Accounts Penalty</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">£{companiesHousePenalty.toLocaleString()} Fine</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Overdue Period:</span> <strong className="text-white">{monthsOverdueAccounts} Month(s) Late</strong></div>
                <div className="flex justify-between"><span>Doubled Surcharge (2nd Year Late):</span> <strong className="text-amber-400">{isSecondConsecutiveYear ? "YES (2x Penalty Applied)" : "No"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Companies House Fine:</span> <strong>£{companiesHousePenalty.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: HMRC CT600 Late Filing Penalty</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]">£{hmrcLatePenalty.toLocaleString()} Fine</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Overdue CT600 Period:</span> <strong className="text-white">{monthsOverdueCT600} Month(s) Late</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>HMRC Late Fine:</span> <strong>£{hmrcLatePenalty.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: HMRC Statutory Late Interest (7.5%)</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">7.5% Interest</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Unpaid Tax Liability:</span> <strong className="text-white">£{overdueTaxBill.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-amber-400"><span>Statutory Interest Accrued:</span> <strong>+£{Math.round(hmrcLateInterest).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Total Statutory Exposure</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Total Risk</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-red-400 font-bold"><span>Total Penalty & Interest Risk:</span> <strong>£{totalOverduePenalties.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Compulsory Strike-Off Status:</span> <strong className={monthsOverdueAccounts > 6 ? "text-red-400" : "text-amber-400"}>{monthsOverdueAccounts > 6 ? "HIGH RISK (First Gazette Notice)" : "Action Required"}</strong></div>
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
                Companies House Late Filing Penalty Rates (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Overdue Period</th>
                  <th className="p-3.5">Standard Penalty (1st Year)</th>
                  <th className="p-3.5 rounded-tr-xl">Penalty (2nd Consecutive Year)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Up to 1 Month Late</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">£150</td>
                  <td className="p-3.5 font-mono font-bold text-red-600">£300</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">1 to 3 Months Late</td>
                  <td className="p-3.5 font-mono font-bold text-gold-600">£375</td>
                  <td className="p-3.5 font-mono font-bold text-red-600">£750</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">3 to 6 Months Late</td>
                  <td className="p-3.5 font-mono font-bold text-red-600">£750</td>
                  <td className="p-3.5 font-mono font-bold text-red-600">£1,500</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Over 6 Months Late</td>
                  <td className="p-3.5 font-mono font-bold text-red-600">£1,500</td>
                  <td className="p-3.5 font-mono font-bold text-red-600">£3,000</td>
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
              Frequently Asked Questions (UK Late Penalties)
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
              <Shield size={16} /> ADVAQ UK Chartered Tax Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Facing Overdue Accounts or Strike-Off Warnings?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our emergency UK chartered accounting team prepares catch-up accounts in 48 hours, stops Companies House strike-off action, and files penalty appeals with HMRC.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uk-services/corporation-tax-return"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Overdue Accounts with ADVAQ <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp Emergency Accountant
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
