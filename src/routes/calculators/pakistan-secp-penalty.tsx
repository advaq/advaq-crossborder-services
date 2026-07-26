import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-secp-penalty")({
  head: () => ({
    meta: [
      { title: "SECP Form A & Form 29 Late Filing Penalty Estimator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive SECP late filing penalty calculator. Calculate Form A, Form 29, Form 4, and annual return late fees & compounding penalties for Pakistani companies.",
      },
      {
        name: "keywords",
        content:
          "secp form a form 29 late filing penalty calculator 2026, secp company late return penalty fee calculator pakistan, secp inactive company restoration fee",
      },
      {
        property: "og:title",
        content: "SECP Form A & Form 29 Late Filing Penalty Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate compounding SECP penalties for overdue annual accounts, Form A, and Form 29 statutory filings.",
      },
      { property: "og:url", content: "/calculators/pakistan-secp-penalty" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-secp-penalty" }],
  }),
  component: PakistanSecpPenaltyCalculatorPage,
});

function PakistanSecpPenaltyCalculatorPage() {
  const [monthsOverdue, setMonthsOverdue] = useState<number>(6);
  const [unfiledFormA, setUnfiledFormA] = useState<boolean>(true);
  const [unfiledForm29, setUnfiledForm29] = useState<boolean>(true);

  // SECP Penalty Rules (Companies Act 2017 Schedule):
  // Late Filing Fee: Additional fee equals 1x to 3x of standard filing fee depending on delay.
  // Overdue Form A / 29 penalty: ~Rs 5,000 base + Rs 500 per month late.
  // Serious delay (> 1 year): Adjudication penalty up to Rs 100,000 per director!

  let baseFormAPenalty = unfiledFormA ? 5000 + monthsOverdue * 1000 : 0;
  let baseForm29Penalty = unfiledForm29 ? 5000 + monthsOverdue * 1000 : 0;

  if (monthsOverdue > 12) {
    baseFormAPenalty += 25000;
    baseForm29Penalty += 25000;
  }

  const totalSecpPenaltyRiskPKR = baseFormAPenalty + baseForm29Penalty;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>SECP Late Filing Penalty</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            SECP Form A & Form 29 Late Filing Penalty Estimator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate statutory late filing fees and adjudication penalty risks for overdue SECP Form A, Form 29, Form 4, and annual corporate returns.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* MONTHS OVERDUE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Months Overdue Beyond SECP Statutory Deadline:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {monthsOverdue} Months Late
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="24"
                step="1"
                value={monthsOverdue}
                onChange={(e) => setMonthsOverdue(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* UNFILED FORMS */}
            <div className="space-y-3 text-xs">
              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={unfiledFormA}
                  onChange={(e) => setUnfiledFormA(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Form A (Annual Return of Company) Overdue?</strong>
                  <span className="text-gray-500">Mandatory filing within 30 days of Annual General Meeting (AGM).</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={unfiledForm29}
                  onChange={(e) => setUnfiledForm29(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">Form 29 (Particulars of Directors/Officers) Overdue?</strong>
                  <span className="text-gray-500">Mandatory filing for director change, election or address updates.</span>
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT SUMMARY CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>SECP Penalty Exposure</span>
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Estimated Penalty Risk
                </span>
                <div className="text-4xl font-serif font-bold text-white my-2">
                  Rs {totalSecpPenaltyRiskPKR.toLocaleString()} PKR
                </div>
                <div className="text-xs text-navy-200">
                  File late returns through ADVAQ eServices portal before receiving SECP Adjudication notice.
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/secp-annual-filing"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Overdue SECP Returns with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20My%20SECP%20company%20has%20unfiled%20Form%20A%20/%2029%20(${monthsOverdue}%20months%20late).%20Please%20help%20me%20regularize.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp SECP Specialist
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
