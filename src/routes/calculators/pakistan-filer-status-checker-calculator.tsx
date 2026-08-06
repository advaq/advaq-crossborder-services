import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Search,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-filer-status-checker-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan Filer or Non-Filer Status Verification Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free step-by-step guide & checker to verify FBR Active Taxpayer List (ATL) Filer status via Iris portal or SMS 9966.",
      },
      {
        name: "keywords",
        content:
          "pakistan filer status checker online 2026, check active taxpayer list atl status cnic sms 9966, how to become active filer fbr iris, fbr atl surcharge 1000 pkr",
      },
      {
        property: "og:title",
        content: "Pakistan Filer or Non-Filer Status Verification Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Verify your FBR Active Taxpayer List (ATL) Filer status via SMS 9966 or FBR Iris portal.",
      },
      { property: "og:url", content: "/calculators/pakistan-filer-status-checker-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-filer-status-checker-calculator" }],
  }),
  component: PakistanFilerStatusCheckerPage,
});

function PakistanFilerStatusCheckerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "FBR Filer Status Verification Checker", item: "https://advaq.com/calculators/pakistan-filer-status-checker-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Filer or Non-Filer Status Verification Checker (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-filer-status-checker-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Step-by-step guide and SMS 9966 verification checker to test FBR Active Taxpayer List (ATL) status, pay Section 182A ATL surcharges, and restore Filer privileges.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "How can I check my FBR Active Taxpayer List (ATL) status via SMS?",
      a: "Send an SMS to 9966 with the text: ATL [space] 13-digit CNIC (e.g. ATL 3520212345671). You will receive an automated reply from FBR confirming your Active (Filer) or Inactive (Non-Filer) status.",
    },
    {
      q: "How much is the FBR ATL Surcharge fee to restore Filer status after the deadline?",
      a: "Under Section 182A of the Income Tax Ordinance 2001, the ATL surcharge to restore Active Filer status is: PKR 1,000 for salaried/individual taxpayers, PKR 10,000 for Associations of Persons (AOPs), and PKR 20,000 for SECP companies.",
    },
    {
      q: "When does FBR update the Active Taxpayer List (ATL)?",
      a: "FBR updates the official Active Taxpayer List on the Iris portal every Monday at midnight.",
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
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>Filer Status Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FBR Filer / Non-Filer Status Checker & Guide (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Verify your Active Taxpayer List (ATL) status instantly using FBR official verification methods.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div className="bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/30 space-y-3">
            <div className="flex items-center gap-2 text-gold-500 font-bold uppercase tracking-wider text-xs">
              <Sparkles size={18} />
              <span>Instant SMS Verification (Fastest Method)</span>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed">
              Send an SMS to <strong>9966</strong> from your registered mobile phone with the text:
            </p>
            <div className="bg-navy-900 border border-white/20 p-4 rounded-xl font-mono text-emerald-400 font-bold text-center text-lg">
              ATL [space] 13-Digit-CNIC (e.g. ATL 3520212345671)
            </div>
            <p className="text-[11px] text-navy-300">
              You will receive an instant reply from FBR confirming whether your CNIC is <strong>ACTIVE (Filer)</strong> or <strong>INACTIVE (Non-Filer)</strong>.
            </p>
          </div>

          <div className="space-y-4 text-xs bg-off-white/50 p-6 rounded-2xl border border-border">
            <h3 className="font-serif font-bold text-navy-950 text-base">Method 2: FBR Online Portal Verification</h3>
            <ol className="space-y-2.5 text-gray-700 list-decimal pl-4">
              <li>
                Visit the official FBR Iris Active Taxpayer List page (
                <a
                  href="https://iris.fbr.gov.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-600 underline font-semibold hover:text-gold-700"
                >
                  https://iris.fbr.gov.pk/
                </a>
                ).
              </li>
              <li>Select <strong>Active Taxpayer List (Income Tax)</strong> under the Search menu.</li>
              <li>Enter your 13-digit CNIC number (without dashes).</li>
              <li>Click <strong>Verify</strong> to view your current ATL Status & Registration date.</li>
            </ol>
          </div>

          <div className="pt-4 text-center space-y-3">
            <Link to="/pakistan-services/atl-restoration" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Restore Your Filer Status with ADVAQ <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. DYNAMIC STEP-BY-STEP MATHEMATICAL WALKTHROUGH ENGINE */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step Active Taxpayer List (ATL) Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of Section 182A ATL surcharge fees and Monday midnight FBR portal update cycles.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Tax Return Filing</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">IRIS Portal</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual IT Return:</span> <strong className="text-white">Form 114(1)</strong></div>
                <div className="flex justify-between"><span>Wealth Statement:</span> <strong className="text-white">Form 116</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Submission Status:</span> <strong>Mandatory First Step</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Section 182A Surcharge</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">ATL Surcharge</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Individual Surcharge:</span> <strong className="text-emerald-400">PKR 1,000</strong></div>
                <div className="flex justify-between"><span>AOP Surcharge:</span> <strong className="text-white">PKR 10,000</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Company Surcharge:</span> <strong>PKR 20,000</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: FBR Weekly Refresh</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Weekly Sync</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>FBR Refresh Day:</span> <strong className="text-gold-400">Every Monday</strong></div>
                <div className="flex justify-between"><span>Cut-Off Time:</span> <strong className="text-white">11:59 PM Sunday</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Bank KYC Sync:</span> <strong>Automatic</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Active Filer Status</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Active Status</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>WHT Penalty Shield:</span> <strong className="text-emerald-400">100% Active</strong></div>
                <div className="flex justify-between"><span>Bank Transfer WHT:</span> <strong className="text-emerald-400">0% Rate</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>ADVAQ Fast-Track:</span> <strong>24 Hour Sync</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUICK REFERENCE SUMMARY TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                FBR ATL Surcharge & Status Activation Schedule
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Taxpayer Entity Type</th>
                  <th className="p-3.5">FBR Provision</th>
                  <th className="p-3.5">ATL Surcharge Amount</th>
                  <th className="p-3.5 rounded-tr-xl">ATL Update Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Salaried / Individual</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 182A</td>
                  <td className="p-3.5 font-bold text-emerald-600">PKR 1,000 Surcharge</td>
                  <td className="p-3.5 font-mono">Every Monday Midnight</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Association of Persons (AOP)</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 182A</td>
                  <td className="p-3.5 font-bold text-amber-600">PKR 10,000 Surcharge</td>
                  <td className="p-3.5 font-mono">Every Monday Midnight</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">SECP Company</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 182A</td>
                  <td className="p-3.5 font-bold text-red-600">PKR 20,000 Surcharge</td>
                  <td className="p-3.5 font-mono">Every Monday Midnight</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 2: FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (FBR Filer Status Verification)
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

        {/* SECTION 3: RELATED PAKISTAN CALCULATORS */}
        <section className="space-y-6">
          <div className="border-b border-border pb-4">
            <h2 className="font-serif text-2xl font-bold text-navy-950">
              Explore Related FBR Tax Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Filer Savings
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Pakistan Filer Tax Savings Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate money saved on property, vehicles & bank cash transfers by becoming an ATL Filer.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-filer-vs-non-filer-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  NTN Eligibility
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR NTN Registration Eligibility Checker
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Check required documents, timeline & process for Salaried, Business & SECP Companies.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-ntn-eligibility-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  FBR Notice Risk
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Tax Notice Response Deadline Checker
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177).
                </p>
              </div>
              <Link
                to="/calculators/pakistan-fbr-notice-timeline-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: ADVAQ ADVISORY BANNER */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ Registered Advocates & FBR Tax Consultants
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Restore Your Active Taxpayer Status (ATL Filer) Today
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan tax legal team files your overdue income tax returns, generates Section 182A ATL surcharge challans, and activates your Filer status within 24–48 hours.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/atl-restoration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Restore ATL Filer Status <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
