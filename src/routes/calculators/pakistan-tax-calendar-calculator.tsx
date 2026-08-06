import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Calendar,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-tax-calendar-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan FBR & SECP Tax Compliance Calendar (2026-2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan FBR & SECP compliance calendar. Track annual income tax return deadlines, monthly sales tax, quarterly WHT & SECP Form A dates.",
      },
      {
        name: "keywords",
        content:
          "pakistan tax calendar 2026 2027, fbr annual return filing deadline september 30, secp form a filing date october 31, monthly sales tax return deadline 15th, fbr section 147 advance tax deadline",
      },
      {
        property: "og:title",
        content: "Pakistan FBR & SECP Tax Compliance Calendar (2026-2027) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Track key FBR tax return deadlines, monthly sales tax filings, and SECP corporate compliance dates in Pakistan.",
      },
      { property: "og:url", content: "/calculators/pakistan-tax-calendar-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-tax-calendar-calculator" }],
  }),
  component: PakistanTaxCalendarPage,
});

function PakistanTaxCalendarPage() {
  const [filterType, setFilterType] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const events = [
    {
      date: "September 30",
      title: "FBR Annual Income Tax Return Filing",
      cat: "fbr",
      desc: "Mandatory annual tax return deadline for Individuals & Salaried Persons.",
      badge: "High Priority",
    },
    {
      date: "October 31",
      title: "SECP Form A & Annual Return Filing",
      cat: "secp",
      desc: "Annual filing of Form A / Form 9 post Annual General Meeting (AGM) for Pvt Ltd companies.",
      badge: "SECP Annual",
    },
    {
      date: "December 31",
      title: "Corporate Tax Return (Companies with June 30 Year End)",
      cat: "fbr",
      desc: "Annual corporate income tax return filing deadline for registered companies.",
      badge: "Corporate Tax",
    },
    {
      date: "15th of Every Month",
      title: "Monthly Provincial & Federal Sales Tax Deposit",
      cat: "salestax",
      desc: "Deposit monthly sales tax collected (PRA, SRB, KPRA, FBR) by 15th, file return by 18th.",
      badge: "Monthly Recurring",
    },
    {
      date: "Quarterly (Oct 20, Jan 20, Apr 20, Jul 20)",
      title: "Section 165 Withholding Tax Statements",
      cat: "fbr",
      desc: "Quarterly WHT statement filing for withholding agents across Pakistan.",
      badge: "Quarterly WHT",
    },
  ];

  const filteredEvents = filterType === "all" ? events : events.filter((e) => e.cat === filterType);

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan FBR & SECP Tax Calendar", item: "https://advaq.com/calculators/pakistan-tax-calendar-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan FBR & SECP Tax Compliance Calendar (2026-2027)",
    url: "https://advaq.com/calculators/pakistan-tax-calendar-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Track key FBR annual income tax return dates, monthly sales tax filings (PRA/SRB), Section 147 advance tax deadlines, and SECP Form A/29 corporate compliance dates.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the annual deadline for filing FBR Income Tax Returns for individuals?",
      a: "The statutory deadline for filing FBR Income Tax Returns for salaried and business individuals for the tax year ending June 30 is September 30.",
    },
    {
      q: "When must SECP Form A and Form 29 be filed annually?",
      a: "SECP Form A (Annual Return) must be filed within 30 days of holding the Annual General Meeting (AGM), typically by October 31 for companies with a June 30 financial year end.",
    },
    {
      q: "What are the quarterly advance tax deadlines under Section 147?",
      a: "Quarterly advance income tax payments under Section 147 are due on: September 25 (Q1), December 25 (Q2), March 25 (Q3), and June 15 (Q4).",
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
            <span>Tax Compliance Calendar</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan FBR & SECP Tax Calendar (2026-2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Interactive compliance calendar tracking FBR annual return dates, monthly sales tax filings, quarterly WHT, and SECP annual forms.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-2 rounded-xl font-semibold border ${
                filterType === "all" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"
              }`}
            >
              All Compliance Events
            </button>
            <button
              onClick={() => setFilterType("fbr")}
              className={`px-4 py-2 rounded-xl font-semibold border ${
                filterType === "fbr" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"
              }`}
            >
              FBR Income Tax
            </button>
            <button
              onClick={() => setFilterType("secp")}
              className={`px-4 py-2 rounded-xl font-semibold border ${
                filterType === "secp" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"
              }`}
            >
              SECP Corporate
            </button>
            <button
              onClick={() => setFilterType("salestax")}
              className={`px-4 py-2 rounded-xl font-semibold border ${
                filterType === "salestax" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"
              }`}
            >
              Sales Tax
            </button>
          </div>

          <div className="space-y-4">
            {filteredEvents.map((ev, idx) => (
              <div key={idx} className="p-5 border border-border rounded-2xl bg-off-white/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-2.5 py-0.5 rounded">
                      {ev.badge}
                    </span>
                    <strong className="text-navy-950 text-base font-serif">{ev.title}</strong>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{ev.desc}</p>
                </div>
                <div className="shrink-0 font-mono text-gold-600 font-bold text-sm bg-white border border-border px-4 py-2 rounded-xl text-center">
                  📅 {ev.date}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link to="/contact" className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2">
              Retain ADVAQ for Annual Tax Compliance <ArrowRight size={14} />
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
                Live Step-by-Step Pakistan Tax Compliance Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of FBR, SECP, and Provincial Sales Tax statutory filing deadlines for 2026/2027.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: FBR Income Tax Return</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Sep 30 / Dec 31</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Salaried Deadline:</span> <strong className="text-white">Sep 30</strong></div>
                <div className="flex justify-between"><span>Company Deadline:</span> <strong className="text-white">Dec 31</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>ATL Inclusion:</span> <strong>Immediate</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Monthly Sales Tax</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">15th / 18th Monthly</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Challan Payment:</span> <strong className="text-white">15th of Month</strong></div>
                <div className="flex justify-between"><span>Return Annexure C/STR-3:</span> <strong className="text-emerald-400">18th of Month</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Provincial Sync:</span> <strong>PRA / SRB / KPRA</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: SECP Form A & 29</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Post-AGM 30 Days</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Annual Return Form A:</span> <strong className="text-white">Within 30 Days AGM</strong></div>
                <div className="flex justify-between"><span>Director Form 29:</span> <strong className="text-white">15 Days of Event</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>SECP Compliance:</span> <strong>Active</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: ADVAQ Retainer Shield</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Annual Retainer</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Automatic Reminders:</span> <strong className="text-emerald-400">Included</strong></div>
                <div className="flex justify-between"><span>Audit Representation:</span> <strong className="text-white">Included</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Penalty Exposure:</span> <strong>0% Zero Fines</strong></div>
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
                Pakistan Annual & Quarterly Tax Filing Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Filing Category</th>
                  <th className="p-3.5">Governing Authority</th>
                  <th className="p-3.5">Statutory Deadline</th>
                  <th className="p-3.5 rounded-tr-xl">Late Non-Filing Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Individual Annual Income Tax</td>
                  <td className="p-3.5 font-mono text-gray-600">Federal Board of Revenue (FBR)</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">September 30</td>
                  <td className="p-3.5 font-bold text-red-600">ATL Inactive + PKR 1,000 Fine</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">SECP Form A Annual Return</td>
                  <td className="p-3.5 font-mono text-gray-600">SECP Companies Act 2017</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">October 31</td>
                  <td className="p-3.5 font-bold text-red-600">PKR 5,000 + PKR 1,000/mo</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Corporate Income Tax Return</td>
                  <td className="p-3.5 font-mono text-gray-600">FBR Corporate Tax Division</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">December 31</td>
                  <td className="p-3.5 font-bold text-red-600">PKR 20,000 ATL Surcharge</td>
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
              Frequently Asked Questions (Pakistan Tax Calendar)
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
              Explore Related Pakistan Tax Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Filer Verification
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Filer or Non-Filer Status Checker
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Step-by-step guide & SMS 9966 checker to verify FBR Active Taxpayer List (ATL) status.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-filer-status-checker-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Checker <ArrowRight size={14} />
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

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  SECP Penalty Risk
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  SECP Form A & Form 9 Late Penalty Estimator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Form A, Form 9, Form 4, and annual return late fees & compounding penalties.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-secp-penalty-calculator"
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
              <Shield size={16} /> ADVAQ Retainer Corporate Tax Lawyers
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Retain ADVAQ for Full 365-Day Annual Tax Compliance
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan corporate tax legal team manages all your monthly sales tax returns, Section 165 WHT statements, SECP Form A filings, and annual FBR Iris returns seamlessly.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Retain ADVAQ Tax Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
