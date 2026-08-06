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
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-fbr-notice-timeline-calculator")({
  head: () => ({
    meta: [
      { title: "FBR Tax Notice Response Deadline & Penalty Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBR Tax Notice response deadline & penalty calculator. Check Section 114, 116, 122, 177 audit notice deadlines to avoid Section 182 non-compliance fines.",
      },
      {
        name: "keywords",
        content:
          "fbr tax notice response deadline calculator 2026, fbr section 114 177 notice response time, section 182 non compliance penalty calculator fbr pakistan, section 122 amendment of assessment reply deadline",
      },
      {
        property: "og:title",
        content: "FBR Tax Notice Response Deadline & Penalty Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your exact FBR notice reply deadline and avoid statutory Section 182 penalties.",
      },
      { property: "og:url", content: "/calculators/pakistan-fbr-notice-timeline-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-fbr-notice-timeline-calculator" }],
  }),
  component: PakistanFBRNoticeTimelinePage,
});

function PakistanFBRNoticeTimelinePage() {
  const [noticeType, setNoticeType] = useState<string>("sec114");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const notices: Record<string, { days: number; penalty: string; name: string; desc: string }> = {
    sec114: {
      days: 30,
      penalty: "Rs 40,000 or 0.1% of tax payable per day (Sec 182)",
      name: "Section 114 (Notice to File Return)",
      desc: "Issued by FBR for non-filing of annual income tax return.",
    },
    sec116: {
      days: 30,
      penalty: "Rs 20,000 for unfiled wealth statement",
      name: "Section 116 (Wealth Statement Reconciliation)",
      desc: "Issued to reconcile assets, foreign bank accounts, and wealth discrepancies.",
    },
    sec122: {
      days: 15,
      penalty: "Ex-parte Best Judgment Assessment & Default Surcharge (Sec 205)",
      name: "Section 122 (Amendment of Assessment)",
      desc: "Issued when FBR proposes to add concealed income or reject deductions.",
    },
    sec177: {
      days: 15,
      penalty: "Rs 50,000 plus automatic ex-parte audit assessment",
      name: "Section 177 / 214C (Audit Notice)",
      desc: "Issued for audit of books of accounts, invoices, and bank statements.",
    },
  };

  const currentNotice = notices[noticeType] || notices.sec114;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "FBR Tax Notice Deadline Checker", item: "https://advaq.com/calculators/pakistan-fbr-notice-timeline-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FBR Tax Notice Response Deadline & Penalty Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-fbr-notice-timeline-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177) and calculate Section 182 non-compliance penalty exposure.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What happens if I ignore or miss an FBR Iris tax notice deadline?",
      a: "Ignoring an FBR notice leads to an Ex-Parte Best Judgment Assessment under Section 121, where the tax officer creates arbitrary tax demands, levies Section 182 non-compliance penalties, and attaches bank accounts.",
    },
    {
      q: "Can I request an extension for responding to an FBR Iris notice?",
      a: "Yes. Under the Income Tax Ordinance 2001, taxpayers or their authorized legal advocates can submit a formal application for extension of time via the Iris portal prior to the expiry of the statutory deadline.",
    },
    {
      q: "What should I do if FBR issues a Section 122 Amendment of Assessment notice?",
      a: "A Section 122 notice proposes adding concealed income or disallowing expense deductions. You MUST engage a licensed tax advocate to prepare a point-by-point legal response backed by bank statements, invoices, and wealth reconciliations.",
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
            <span>FBR Notice Deadline Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            FBR Tax Notice Response Deadline Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177) and calculate non-compliance penalty exposure.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Received FBR Notice Section:
              </label>
              <select
                value={noticeType}
                onChange={(e) => setNoticeType(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="sec114">Section 114 (Notice to File Return)</option>
                <option value="sec116">Section 116 (Wealth Statement Reconciliation)</option>
                <option value="sec122">Section 122 (Amendment of Assessment / Show Cause)</option>
                <option value="sec177">Section 177 / 214C (Income Tax Audit Notice)</option>
              </select>
            </div>

            <div className="p-4 bg-white border border-border rounded-xl text-xs space-y-1 text-navy-950">
              <strong className="block text-gold-600 font-serif text-sm">{currentNotice.name}</strong>
              <p className="text-gray-600">{currentNotice.desc}</p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Notice Reply Deadline</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Statutory Response Window:</span>
                  <span className="font-mono text-emerald-400 font-bold">{currentNotice.days} Days from Receipt</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Non-Compliance Penalty:</span>
                  <span className="font-mono text-red-400 font-bold text-[11px]">{currentNotice.penalty}</span>
                </div>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Urgent Legal Advice Needed?
                </span>
                <p className="text-xs text-navy-200 leading-relaxed">
                  Our FBR tax advocates draft professional legal replies and handle Iris hearings to prevent default assessments.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/fbr-notice-response"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Reply to FBR Notice with ADVAQ Lawyers
              </Link>
            </div>
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
                Live Step-by-Step FBR Notice Defense Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of Income Tax Ordinance statutory reply windows and default assessment penalty shields.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Notice Type & Section</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">FBR Notice</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Selected Notice:</span> <strong className="text-white">{currentNotice.name}</strong></div>
                <div className="flex justify-between"><span>Income Tax Sec:</span> <strong className="text-white">Ordinance 2001</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Statutory Deadline:</span> <strong>{currentNotice.days} Days</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Statutory Window</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Iris Window</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Notice Receipt:</span> <strong className="text-white">Official Serve Date</strong></div>
                <div className="flex justify-between"><span>Reply Countdown:</span> <strong className="text-emerald-400">{currentNotice.days} Days Remaining</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Adjournment:</span> <strong>Extensible via Iris</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Penalty Risk Exposure</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Non-Compliance</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Ex-Parte Assessment:</span> <strong className="text-red-400">Risk Active</strong></div>
                <div className="flex justify-between"><span>Statutory Fine:</span> <strong className="text-red-400">{currentNotice.penalty}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold"><span>Bank Account Freeze:</span> <strong>High Risk</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: ADVAQ Legal Defense</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">High Court Advocates</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Legal Reply Drafted:</span> <strong className="text-emerald-400">Within 24h</strong></div>
                <div className="flex justify-between"><span>Iris Hearing Rep:</span> <strong className="text-white">Included</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Penalty Stay Order:</span> <strong>Guaranteed</strong></div>
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
                FBR Iris Notice Statutory Reply Timeline & Penalty Matrix
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">FBR Notice Type</th>
                  <th className="p-3.5">FBR Provision</th>
                  <th className="p-3.5">Statutory Reply Time</th>
                  <th className="p-3.5 rounded-tr-xl">Non-Reply Fine Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Notice to File Income Tax Return</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 114(4)</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">30 Days</td>
                  <td className="p-3.5 font-bold text-red-600">Rs 40,000 + Rs 1,000/day</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Wealth Reconciliation Discrepancy</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 116(1)</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">30 Days</td>
                  <td className="p-3.5 font-bold text-red-600">Rs 20,000 Fine</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Amendment of Tax Assessment</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 122(5A) / 122(9)</td>
                  <td className="p-3.5 font-mono text-amber-600 font-bold">15 Days</td>
                  <td className="p-3.5 font-bold text-red-600">Ex-Parte Tax Assessment Demand</td>
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
              Frequently Asked Questions (FBR Tax Notices)
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
                  Tax Calendar
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR & SECP Tax Calendar 2026-2027
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Interactive compliance calendar tracking FBR return dates & quarterly WHT deadlines.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-tax-calendar-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calendar <ArrowRight size={14} />
              </Link>
            </div>

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
                  Withholding Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Section 153 WHT Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate WHT rates for services (9%/18%), goods (5%/10%), and contracts.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-wht-calculator"
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
              <Shield size={16} /> ADVAQ High-Court Licensed FBR Tax Advocates
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Respond to FBR Iris Notices & Avoid Arbitrary Demands
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan tax legal team drafts professional legal responses, files Iris adjournments, and represents taxpayers before CIR Appeals and ATIR.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/fbr-notice-response"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File FBR Notice Reply <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
