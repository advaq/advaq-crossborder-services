import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  Calendar,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-tax-calendar")({
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
          "pakistan tax calendar 2026 2027, fbr annual return filing deadline september 30, secp form a filing date october 31, monthly sales tax return deadline 15th",
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
      { property: "og:url", content: "/calculators/pakistan-tax-calendar" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-tax-calendar" }],
  }),
  component: PakistanTaxCalendarPage,
});

function PakistanTaxCalendarPage() {
  const [filterType, setFilterType] = useState<string>("all");

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
      desc: "Annual filing of Form A / Form 29 post Annual General Meeting (AGM) for Pvt Ltd companies.",
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

  return (
    <div className="min-h-screen bg-white">
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
      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
          {/* FILTER BUTTONS */}
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

          {/* EVENTS LIST */}
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
    </div>
  );
}
