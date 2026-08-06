import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Calendar,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  FileText,
  Clock,
  Ban,
  DollarSign,
  Building,
  Gift,
  RefreshCw,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-corporate-tax-deadline-calculator")({
  head: () => ({
    meta: [
      { title: "UAE Corporate Tax Deadline & AED 10,000 Penalty Waiver Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE Corporate Tax deadline checker & 7-month AED 10,000 penalty waiver calculator. Select tax year & financial year end to calculate exact FTA registration deadlines, 7-month waiver cut-off dates, return filing deadlines, and TRN document checklist.",
      },
      {
        name: "keywords",
        content:
          "uae corporate tax deadline calculator 2026, fta corporate tax 10000 aed penalty waiver, 7 month return submission cut off date uae, fta penalty reconsideration application cut off, corporate tax compliance calendar uae",
      },
      {
        property: "og:title",
        content: "UAE Corporate Tax Deadline & AED 10,000 Penalty Waiver Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Generate your exact UAE Corporate Tax compliance calendar, calculate 7-month penalty waiver cut-off date, and check AED 10,000 late fine risk.",
      },
      { property: "og:url", content: "/calculators/uae-corporate-tax-deadline-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-corporate-tax-deadline-calculator" }],
  }),
  component: UAECorporateTaxDeadlinePage,
});

function UAECorporateTaxDeadlinePage() {
  const [incDateStr, setIncDateStr] = useState<string>("2025-09-15");
  const [finYearEndMonth, setFinYearEndMonth] = useState<string>("12"); // 12 = Dec, 03 = Mar, 06 = Jun
  const [taxYear, setTaxYear] = useState<number>(2025);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [canFileWithin7Months, setCanFileWithin7Months] = useState<boolean>(true);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Parse incorporation date
  const incDate = new Date(incDateStr) || new Date("2025-09-15");
  const incYear = incDate.getFullYear();
  const incMonthIndex = incDate.getMonth(); // 0 = Jan, 1 = Feb, etc.

  // Legacy Schedule for companies pre-2024 (FTA Decision 3 of 2024)
  const legacyDeadlinesByMonth = [
    "May 31, 2024", // Jan
    "May 31, 2024", // Feb
    "June 30, 2024", // Mar
    "June 30, 2024", // Apr
    "July 31, 2024", // May
    "August 31, 2024", // Jun
    "September 30, 2024", // Jul
    "October 31, 2024", // Aug
    "October 31, 2024", // Sep
    "November 30, 2024", // Oct
    "November 30, 2024", // Nov
    "December 31, 2024", // Dec
  ];

  // Statutory Registration Deadline Calculation
  let regDeadlineStr = "";
  let isOverdue = false;

  if (incYear < 2024) {
    regDeadlineStr = legacyDeadlinesByMonth[incMonthIndex];
    // All pre-2024 deadlines have passed
    isOverdue = !isRegistered;
  } else {
    // Post-Jan 1 2024: 3 Months from Incorporation Date (FTA Decision No. 3 of 2024)
    const deadlineDate = new Date(incDate);
    deadlineDate.setMonth(deadlineDate.getMonth() + 3);
    regDeadlineStr = deadlineDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const now = new Date();
    isOverdue = !isRegistered && now > deadlineDate;
  }

  // Tax Period & 7-Month Waiver Cut-Off Date Calculation based on selected Tax Year & Financial Year End
  const effectiveYear = Math.max(taxYear, incYear < 2024 ? 2024 : incYear);
  let firstTaxPeriodStart = `Jan 1, ${effectiveYear}`;
  let firstTaxPeriodEnd = `Dec 31, ${effectiveYear}`;
  let waiverCutOffDateStr = `July 31, ${effectiveYear + 1}`;
  let ctReturnFilingDeadline = `Sep 30, ${effectiveYear + 1}`;

  if (finYearEndMonth === "03") {
    firstTaxPeriodStart = `Apr 1, ${effectiveYear}`;
    firstTaxPeriodEnd = `Mar 31, ${effectiveYear + 1}`;
    waiverCutOffDateStr = `October 31, ${effectiveYear + 1}`;
    ctReturnFilingDeadline = `December 31, ${effectiveYear + 1}`;
  } else if (finYearEndMonth === "06") {
    firstTaxPeriodStart = `Jul 1, ${effectiveYear}`;
    firstTaxPeriodEnd = `Jun 30, ${effectiveYear + 1}`;
    waiverCutOffDateStr = `January 31, ${effectiveYear + 2}`;
    ctReturnFilingDeadline = `March 31, ${effectiveYear + 2}`;
  }

  const grossLateFineAED = isRegistered ? 0 : isOverdue ? 10000 : 0;
  const isWaiverEligible = !isRegistered && isOverdue && canFileWithin7Months;

  const trnChecklist = [
    { id: "license", title: "Valid UAE Trade License / Commercial License", subtitle: "Mainland DET or Free Zone Authority License copy" },
    { id: "moa", title: "Memorandum of Association (MOA) / Articles (AOA)", subtitle: "Signed MOA showing shareholding structure" },
    { id: "passport", title: "Passport Copy of Authorized Manager / Director", subtitle: "Color copy of valid passport" },
    { id: "eid", title: "Emirates ID Copy of Authorized Signatory", subtitle: "Front & back copy of EID" },
    { id: "poa", title: "Proof of Authorization (POA or Manager on License)", subtitle: "Document conferring manager signing authority" },
    { id: "ejari", title: "Ejari Tenancy Lease / Flexi-Desk Agreement", subtitle: "Proof of physical registered office address in UAE" },
    { id: "contact", title: "Official UAE Business Email & Phone Number", subtitle: "Mobile number linked to UAE Pass for EmaraTax OTP" },
    { id: "financial", title: "Confirmation of Financial Year End Date", subtitle: "Official declaration of accounting period (e.g. Dec 31)" },
  ];

  const toggleChecklist = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalChecked = Object.values(checkedDocs).filter(Boolean).length;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "UAE Calculators", item: "https://advaq.com/calculators/uae" },
      { "@type": "ListItem", position: 4, name: "UAE Corporate Tax Compliance Calendar", item: "https://advaq.com/calculators/uae-corporate-tax-deadline-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Corporate Tax Deadline & AED 10,000 Penalty Waiver Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-corporate-tax-deadline-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check mandatory Federal Tax Authority (FTA) Corporate Tax registration deadlines, 7-month return penalty waiver cut-off dates, and AED 10,000 reconsideration application eligibility.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the exact 7-month penalty waiver cut-off date for my company?",
      a: "The 7-month penalty waiver cut-off date is exactly 7 months following the close of your company's tax period. For example, for a financial year ending December 31, 2024, the 7-month waiver cut-off date is July 31, 2025. If your return is submitted prior to July 31, 2025, ADVAQ can apply for a 100% FTA penalty waiver.",
    },
    {
      q: "Can the AED 10,000 Corporate Tax late registration penalty be waived by the FTA?",
      a: "YES! Under Cabinet Decision No. 75 of 2023 and Tax Procedures Law Article 27, if a taxable entity rectifies its registration and submits its first Corporate Tax return within 7 months of tax period end, an official FTA Administrative Penalty Reconsideration Application can be filed to waive or credit back the AED 10,000 fine.",
    },
    {
      q: "What is the penalty for missing the UAE Corporate Tax registration deadline?",
      a: "Under FTA Administrative Decision No. 3 of 2024, a mandatory administrative penalty of AED 10,000 applies automatically to any taxable entity that fails to submit its Corporate Tax registration application within the designated deadline.",
    },
    {
      q: "When is the annual Corporate Tax return filing deadline in the UAE?",
      a: "The Corporate Tax return must be filed, and any tax liability paid, within 9 months following the end of the relevant tax period (e.g., for a tax year ending December 31, 2024, the standard filing deadline is September 30, 2025).",
    },
    {
      q: "Do dormant or zero-revenue UAE companies need to register for Corporate Tax?",
      a: "YES! All entities holding a valid UAE trade license (mainland or free zone) must register for Corporate Tax with the FTA, regardless of whether they have generated active business revenue.",
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
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>Corporate Tax Deadline & Waiver</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Corporate Tax Deadline & Penalty Waiver Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Select your tax year, incorporation date, and financial year end to calculate your exact FTA Corporate Tax deadlines, 7-month waiver cut-off dates, and AED 10,000 fine exposure.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">

            {/* INPUT 1: TARGET TAX YEAR */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Target Tax Year:
              </label>
              <select
                value={taxYear}
                onChange={(e) => setTaxYear(Number(e.target.value))}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value={2024}>Tax Year 2024 (First UAE CT Period)</option>
                <option value={2025}>Tax Year 2025</option>
                <option value={2026}>Tax Year 2026</option>
                <option value={2027}>Tax Year 2027</option>
              </select>
            </div>

            {/* INPUT 2: COMPANY INCORPORATION DATE */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                2. Select Company Trade License / Registration Date:
              </label>
              <input
                type="date"
                value={incDateStr}
                onChange={(e) => setIncDateStr(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Found on your official DED / DET or Free Zone Trade License document.
              </span>
            </div>

            {/* INPUT 3: FINANCIAL YEAR END */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                3. Select Company Financial Year End:
              </label>
              <select
                value={finYearEndMonth}
                onChange={(e) => setFinYearEndMonth(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="12">December 31 (Standard Calendar Year)</option>
                <option value="03">March 31 (UK / India Financial Year Standard)</option>
                <option value="06">June 30 (Mid-Year Financial Standard)</option>
              </select>
            </div>

            {/* INPUT 4: TRN REGISTRATION STATUS */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                4. Has Your Company Received a Corporate Tax TRN Number?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsRegistered(true)}
                  className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                    isRegistered
                      ? "bg-emerald-950 text-white border-emerald-500 shadow"
                      : "bg-white text-navy-950 border-border hover:border-emerald-500/50"
                  }`}
                >
                  ✅ Yes — Registered (TRN Active)
                </button>
                <button
                  type="button"
                  onClick={() => setIsRegistered(false)}
                  className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                    !isRegistered
                      ? "bg-red-950 text-white border-red-500 shadow"
                      : "bg-white text-navy-950 border-border hover:border-red-500/50"
                  }`}
                >
                  ❌ No — Not Registered Yet
                </button>
              </div>
            </div>

            {/* INPUT 5: 7-MONTH RETURN SUBMISSION WAIVER TOGGLE */}
            {!isRegistered && isOverdue && (
              <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl space-y-2">
                <label className="flex items-start justify-between cursor-pointer text-xs gap-3">
                  <div>
                    <strong className="text-navy-950 block text-sm font-bold flex items-center gap-1.5">
                      <Gift size={16} className="text-gold-600 shrink-0" />
                      Can Submit CT Return Prior to 7-Month Waiver Cut-Off ({waiverCutOffDateStr})?
                    </strong>
                    <span className="text-gray-600 text-[11px] leading-relaxed block mt-0.5">
                      Under FTA Tax Procedures Law Article 27, filing your return before <strong>{waiverCutOffDateStr}</strong> makes your company eligible for a <strong>100% FTA Administrative Penalty Waiver Application</strong>.
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={canFileWithin7Months}
                    onChange={(e) => setCanFileWithin7Months(e.target.checked)}
                    className="accent-gold-500 w-5 h-5 shrink-0 mt-1"
                  />
                </label>
              </div>
            )}

          </div>

          {/* RIGHT RESULT SUMMARY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>FTA Compliance Audit Status</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Mandatory TRN Registration Deadline:</span>
                  <span className="font-mono text-gold-400 font-bold">{regDeadlineStr}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Statutory Administrative Penalty:</span>
                  <span className="font-mono text-red-400 font-bold">AED {grossLateFineAED.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>7-Month Penalty Waiver Cut-Off Date:</span>
                  <span className="font-mono text-gold-400 font-bold bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/30">{waiverCutOffDateStr}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Standard 9-Month CT Filing Deadline:</span>
                  <span className="font-mono text-emerald-400 font-bold">{ctReturnFilingDeadline}</span>
                </div>
              </div>

              {/* OVERDUE / WAIVER ELIGIBLE / COMPLIANT BOX */}
              <div className={`p-5 rounded-xl mb-4 border ${isRegistered ? "bg-emerald-950/60 border-emerald-500/50" : isWaiverEligible ? "bg-gold-950/80 border-gold-500/60" : isOverdue ? "bg-red-950/80 border-red-500/60" : "bg-navy-900 border-gold-500/40"}`}>
                <span className="text-xs uppercase tracking-widest font-semibold block mb-1 text-gold-400">
                  {isRegistered ? "FTA Registration Status" : isWaiverEligible ? "🎁 100% PENALTY WAIVER ELIGIBLE" : isOverdue ? "🚨 OVERDUE LATE PENALTY ACTIVE" : "⏳ Registration Pending"}
                </span>
                <div className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white whitespace-nowrap">
                  {isRegistered ? "✅ Registered & Compliant" : isWaiverEligible ? "AED 0 (Fine Waivable)" : isOverdue ? "AED 10,000 FINE" : "Pending Registration"}
                </div>
                {isWaiverEligible ? (
                  <p className="mt-2 text-[11px] text-gold-200 leading-normal">
                    🎉 <strong>7-Month Penalty Waiver Active!</strong> By submitting your CT return prior to <strong>{waiverCutOffDateStr}</strong>, ADVAQ's FTA Tax Agency can file an official Reconsideration Application to waive your AED 10,000 fine.
                  </p>
                ) : isOverdue && !isRegistered ? (
                  <p className="mt-2 text-[11px] text-red-300 leading-normal">
                    ⚠️ Mandatory deadline of <strong>{regDeadlineStr}</strong> has passed! An automatic AED 10,000 administrative fine has been levied by the FTA under Decision No. 3 of 2024.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uae-services/corporate-tax-registration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                {isWaiverEligible ? "Apply for AED 10,000 Fine Waiver with ADVAQ" : "Register Corporate Tax with ADVAQ (AED 1,500)"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. DYNAMIC STEP-BY-STEP COMPLIANCE AUDIT CARD */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Corporate Tax & Waiver Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of FTA Decision No. 3 of 2024 registration window, fine exposure, and 7-month penalty waiver status.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Incorporation & Tax Year</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Tax Year {taxYear}</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Incorporation Date:</span> <strong className="text-white">{incDateStr}</strong></div>
                <div className="flex justify-between"><span>Target Tax Year:</span> <strong className="text-white">Tax Year {taxYear}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Statutory TRN Deadline:</span> <strong>{regDeadlineStr}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Gross Penalty Exposure</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isRegistered ? "bg-emerald-500/20 text-emerald-400" : isOverdue ? "bg-red-500/20 text-red-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {isRegistered ? "TRN Active" : isOverdue ? "Overdue Fine" : "Pending"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>EmaraTax TRN Status:</span> <strong className={isRegistered ? "text-emerald-400" : "text-red-400"}>{isRegistered ? "YES (TRN Issued)" : "NO (Unregistered)"}</strong></div>
                <div className="flex justify-between"><span>Cabinet Decision 75 Fine:</span> <strong className={isRegistered ? "text-emerald-400" : "text-red-400"}>AED {grossLateFineAED.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Statutory Gross Fine:</span> <strong>AED {grossLateFineAED.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: 7-Month Waiver Cut-Off Audit</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isWaiverEligible ? "bg-emerald-500/20 text-emerald-400" : "bg-navy-800 text-gray-400"}`}>
                  {isWaiverEligible ? "Waiver Eligible ✅" : "N/A"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>7-Month Waiver Cut-Off Date:</span> <strong className="text-gold-400">{waiverCutOffDateStr}</strong></div>
                <div className="flex justify-between"><span>FTA Reconsideration Basis:</span> <strong className="text-white">Tax Procedures Law Art 27</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Waiver Relief Savings:</span> <strong>{isWaiverEligible ? "AED 10,000 Waived" : "AED 0"}</strong></div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. DYNAMIC COMPLIANCE CALENDAR TIMELINE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <Calendar size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                Company Corporate Tax Statutory Compliance Calendar (Tax Year {taxYear})
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Official FTA milestones generated for incorporation date ({incDateStr}), financial year end, and Tax Year {taxYear}.
              </p>
            </div>
          </div>

          <div className="relative border-l-2 border-gold-500/40 ml-4 pl-6 space-y-8 text-xs">

            {/* MILESTONE 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gold-500 border-4 border-slate-50" />
              <div className="bg-white border border-border p-4 rounded-xl space-y-1 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-navy-950 text-sm">1. Company Incorporation / Trade License Issue</span>
                  <span className="font-mono text-gold-600 font-bold bg-gold-50 px-2 py-0.5 rounded">{incDateStr}</span>
                </div>
                <p className="text-gray-600 text-[11px]">
                  Official date company was registered with Dubai DET or Free Zone Authority.
                </p>
              </div>
            </div>

            {/* MILESTONE 2 */}
            <div className="relative">
              <div className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-4 border-slate-50 ${isRegistered ? "bg-emerald-500" : isOverdue ? "bg-red-500" : "bg-amber-500"}`} />
              <div className={`bg-white border p-4 rounded-xl space-y-1 shadow-sm ${isOverdue && !isRegistered ? "border-red-300 bg-red-50/20" : "border-border"}`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-navy-950 text-sm flex items-center gap-2">
                    2. Mandatory FTA Corporate Tax TRN Registration Deadline
                    {!isRegistered && isOverdue && <span className="bg-red-600 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-mono">AED 10k Penalty Active</span>}
                  </span>
                  <span className="font-mono text-navy-950 font-bold bg-slate-100 px-2 py-0.5 rounded">{regDeadlineStr}</span>
                </div>
                <p className="text-gray-600 text-[11px]">
                  Under FTA Decision No. 3 of 2024, registration must be submitted prior to this date. Failing to register incurs an automatic AED 10,000 penalty.
                </p>
              </div>
            </div>

            {/* MILESTONE 3 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-navy-900 border-4 border-slate-50" />
              <div className="bg-white border border-border p-4 rounded-xl space-y-1 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-navy-950 text-sm">3. First Corporate Tax Period Close ({taxYear})</span>
                  <span className="font-mono text-navy-950 font-bold bg-slate-100 px-2 py-0.5 rounded">{firstTaxPeriodEnd}</span>
                </div>
                <p className="text-gray-600 text-[11px]">
                  End of your company's official accounting tax period ({firstTaxPeriodStart} to {firstTaxPeriodEnd}).
                </p>
              </div>
            </div>

            {/* MILESTONE 4: 7-MONTH WAIVER CUT-OFF */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gold-500 border-4 border-slate-50" />
              <div className="bg-white border border-gold-300 bg-gold-50/30 p-4 rounded-xl space-y-1 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-navy-950 text-sm flex items-center gap-2">
                    🌟 4. 7-Month Penalty Waiver Cut-Off Date
                    <span className="bg-gold-500 text-navy-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">100% Fine Waiver Window</span>
                  </span>
                  <span className="font-mono text-gold-700 font-bold bg-gold-100 px-2 py-0.5 rounded">{waiverCutOffDateStr}</span>
                </div>
                <p className="text-gray-600 text-[11px]">
                  Under FTA Tax Procedures Law Article 27, submitting your return prior to <strong>{waiverCutOffDateStr}</strong> unlocks 100% AED 10,000 penalty waiver reconsideration.
                </p>
              </div>
            </div>

            {/* MILESTONE 5 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-50" />
              <div className="bg-white border border-emerald-200 bg-emerald-50/30 p-4 rounded-xl space-y-1 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-navy-950 text-sm">5. Standard 9-Month Return Filing & Tax Payment Deadline</span>
                  <span className="font-mono text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">{ctReturnFilingDeadline}</span>
                </div>
                <p className="text-gray-600 text-[11px]">
                  Under Federal Decree-Law No. 47 of 2022, your CT return must be filed and any tax due (9% on income &gt; AED 375k) paid within 9 months of period close.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. DEDICATED SECTION: HOW TO WAIVE AED 10,000 FINE VIA 7-MONTH RULE */}
        <section className="bg-gold-500/10 border border-gold-500/30 rounded-2xl p-6 sm:p-8 space-y-6 text-navy-950">
          <div className="flex items-center gap-3 border-b border-gold-500/20 pb-4">
            <div className="p-2.5 bg-gold-500/20 text-gold-700 rounded-xl">
              <RefreshCw size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-700 uppercase tracking-widest font-semibold block">Statutory Relief Mechanism</span>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                How to Waive Your AED 10,000 Corporate Tax Penalty (7-Month Cut-Off Rule)
              </h2>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-gray-700">
            If your company missed its initial Corporate Tax registration deadline and incurred the AED 10,000 penalty, the Federal Tax Authority (FTA) provides a statutory mechanism for <strong>100% Penalty Reconsideration & Waiver</strong> prior to the 7-month cut-off date (<strong>{waiverCutOffDateStr}</strong>).
          </p>

          <div className="grid sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border border-gold-500/30 space-y-1.5 shadow-sm">
              <span className="font-mono text-gold-600 font-bold text-xs">STEP 1</span>
              <strong className="block text-navy-950 font-bold text-sm">Obtain Corporate Tax TRN</strong>
              <p className="text-gray-600 text-[11px]">Register company on EmaraTax portal immediately to stop ongoing non-compliance.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gold-500/30 space-y-1.5 shadow-sm">
              <span className="font-mono text-gold-600 font-bold text-xs">STEP 2</span>
              <strong className="block text-navy-950 font-bold text-sm">Submit Return Before {waiverCutOffDateStr}</strong>
              <p className="text-gray-600 text-[11px]">File your first CT return prior to the 7-month cut-off date (<strong>{waiverCutOffDateStr}</strong>).</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gold-500/30 space-y-1.5 shadow-sm">
              <span className="font-mono text-gold-600 font-bold text-xs">STEP 3</span>
              <strong className="block text-navy-950 font-bold text-sm">File FTA Reconsideration Form</strong>
              <p className="text-gray-600 text-[11px]">ADVAQ Tax Agency files an official Reconsideration Request under Article 27.</p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-emerald-300 bg-emerald-50/40 space-y-1.5 shadow-sm">
              <span className="font-mono text-emerald-700 font-bold text-xs">STEP 4</span>
              <strong className="block text-emerald-950 font-bold text-sm">100% Fine Waived / Refunded</strong>
              <p className="text-gray-600 text-[11px]">FTA approves waiver and credits back the AED 10,000 administrative fine.</p>
            </div>
          </div>
        </section>

        {/* 4. NON-COMPLIANCE RISKS & PENALTIES SECTION */}
        <section className="bg-red-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-red-500/30">
          <div className="flex items-center gap-3 border-b border-red-800/80 pb-5">
            <div className="p-3 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30">
              <Ban size={24} />
            </div>
            <div>
              <span className="text-xs text-red-400 font-semibold uppercase tracking-widest block">Legal & Financial Consequences</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Risks & Penalties of Missing Corporate Tax Registration
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-red-900/60 border border-red-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <DollarSign size={18} />
                <span>AED 10,000 Fine</span>
              </div>
              <p className="text-red-100 leading-relaxed text-[11px]">
                Automatic administrative penalty under Cabinet Decision No. 75 of 2023 posted directly to your FTA EmaraTax portal.
              </p>
            </div>

            <div className="bg-red-900/60 border border-red-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <Ban size={18} />
                <span>Loss of SBR 0% Relief</span>
              </div>
              <p className="text-red-100 leading-relaxed text-[11px]">
                Failure to register on time forfeits eligibility for Small Business Relief (SBR 0% tax on revenue up to AED 3 Million).
              </p>
            </div>

            <div className="bg-red-900/60 border border-red-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <Building size={18} />
                <span>Bank Account Freeze</span>
              </div>
              <p className="text-red-100 leading-relaxed text-[11px]">
                UAE Banks (Wio, Emirates NBD, Mashreq) require a valid Corporate Tax TRN during annual KYC review to prevent account suspension.
              </p>
            </div>

            <div className="bg-red-900/60 border border-red-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <AlertTriangle size={18} />
                <span>Trade License Block</span>
              </div>
              <p className="text-red-100 leading-relaxed text-[11px]">
                Department of Economy & Tourism (DET) and Free Zone Authorities cross-reference FTA compliance before renewing trade licenses.
              </p>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE TRN REGISTRATION DOCUMENT CHECKLIST */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
                <FileText size={22} />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-950">
                  FTA Corporate Tax TRN Registration Required Documents Checklist
                </h2>
                <p className="text-xs text-gray-600 mt-0.5">
                  Check off the documents you have ready for instant FTA EmaraTax portal submission.
                </p>
              </div>
            </div>
            <div className="bg-navy-950 text-white px-4 py-2 rounded-xl text-xs font-mono font-bold text-center shrink-0">
              Checklist Progress: <span className="text-gold-400">{totalChecked} / {trnChecklist.length} Ready</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 text-xs">
            {trnChecklist.map((item) => {
              const isChecked = !!checkedDocs[item.id];
              return (
                <label
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isChecked
                      ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 shadow-sm"
                      : "bg-white border-border text-navy-950 hover:border-gold-500/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="accent-gold-500 w-4 h-4 mt-0.5 shrink-0"
                  />
                  <div>
                    <strong className="block text-sm font-semibold">{item.title}</strong>
                    <span className="text-gray-500 text-[11px] block mt-0.5">{item.subtitle}</span>
                  </div>
                </label>
              );
            })}
          </div>

          <div className="bg-white border border-gold-500/30 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-navy-950 space-y-1 text-center sm:text-left">
              <strong className="font-serif text-sm block font-bold text-navy-950">Ready to Submit Your CT Registration or Waiver to the FTA?</strong>
              <p className="text-gray-600 text-[11px]">
                ADVAQ FTA Registered Tax Agents review your documents, issue your official Corporate Tax TRN, and submit penalty reconsideration applications.
              </p>
            </div>
            <Link
              to="/uae-services/corporate-tax-registration"
              className="btn-gold uppercase text-xs tracking-widest px-6 py-3.5 font-semibold shrink-0 text-center"
            >
              Start Registration with ADVAQ
            </Link>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (UAE CT Deadlines & Waiver)
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
              <Shield size={16} /> ADVAQ FTA Registered Tax Agency
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Waive AED 10,000 Late Fine & Register CT with ADVAQ
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our FTA agents process your Corporate Tax registration, file your tax return prior to the 7-month cut-off date ({waiverCutOffDateStr}), and submit official FTA Reconsideration Applications to waive late fines.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/uae-services/corporate-tax-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Apply for Penalty Waiver <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp FTA Agent
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
