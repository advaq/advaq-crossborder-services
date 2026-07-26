import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-fbr-notice-timeline")({
  head: () => ({
    meta: [
      { title: "FBR Tax Notice Response Deadline & Penalty Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBR Tax Notice response deadline & penalty calculator. Check Section 114, 116, 122, 177 audit notice deadlines to avoid Section 182 non-compliance fines.",
      },
      {
        name: "keywords",
        content:
          "fbr tax notice response deadline calculator 2026, fbr section 114 177 notice response time, section 182 non compliance penalty calculator fbr pakistan",
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
      { property: "og:url", content: "/calculators/pakistan-fbr-notice-timeline" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-fbr-notice-timeline" }],
  }),
  component: PakistanFBRNoticeTimelinePage,
});

function PakistanFBRNoticeTimelinePage() {
  const [noticeType, setNoticeType] = useState<string>("sec114");

  // Notice rules & penalties
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
      name: "Section 116 (Wealth Statement Reconcilation)",
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

  return (
    <div className="min-h-screen bg-white">
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
            FBR Tax Notice Response Deadline Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177) and calculate non-compliance penalty exposure.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* NOTICE TYPE SELECTOR */}
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

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
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
    </div>
  );
}
