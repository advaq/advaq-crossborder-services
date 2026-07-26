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

export const Route = createFileRoute("/calculators/uae-corporate-tax-deadline")({
  head: () => ({
    meta: [
      { title: "UAE Corporate Tax Registration Deadline & AED 10,000 Fine Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FTA Corporate Tax registration deadline checker. Test FTA Decision No. 3 of 2024 limits to avoid AED 10,000 late registration penalties.",
      },
      {
        name: "keywords",
        content:
          "uae corporate tax registration deadline calculator 2026, fta corporate tax 10000 aed penalty deadline, corporate tax trn deadline dubai",
      },
      {
        property: "og:title",
        content: "UAE Corporate Tax Registration Deadline & Fine Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Check your exact FTA Corporate Tax registration deadline and avoid statutory AED 10,000 fines.",
      },
      { property: "og:url", content: "/calculators/uae-corporate-tax-deadline" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-corporate-tax-deadline" }],
  }),
  component: UAECorporateTaxDeadlinePage,
});

function UAECorporateTaxDeadlinePage() {
  const [licenseMonth, setLicenseMonth] = useState<string>("january");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  // FTA Decision No. 3 of 2024 Deadlines based on License Month:
  const deadlines: Record<string, string> = {
    january: "May 31, 2024",
    february: "May 31, 2024",
    march: "June 30, 2024",
    april: "June 30, 2024",
    may: "July 31, 2024",
    june: "August 31, 2024",
    july: "September 30, 2024",
    august: "October 31, 2024",
    september: "October 31, 2024",
    october: "November 30, 2024",
    november: "November 30, 2024",
    december: "December 31, 2024",
  };

  const deadline = deadlines[licenseMonth] || "May 31, 2024";
  const lateFineAED = isRegistered ? 0 : 10000;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>Corporate Tax Deadline Checker</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE Corporate Tax Registration Deadline Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Check your mandatory FTA Corporate Tax registration deadline under Decision No. 3 of 2024 and avoid statutory AED 10,000 late fines.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* MONTH SELECTOR */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select the Month Your UAE Trade License Was Originally Issued:
              </label>
              <select
                value={licenseMonth}
                onChange={(e) => setLicenseMonth(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>

            {/* REGISTERED CHECKBOX */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <div>
                <strong className="text-navy-950 block text-sm">Has Your Company Received a Corporate Tax TRN Number?</strong>
                <span className="text-gray-500 text-[11px]">Check if already registered with FTA EmaraTax portal.</span>
              </div>
              <input
                type="checkbox"
                checked={isRegistered}
                onChange={(e) => setIsRegistered(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>FTA Compliance Status</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Mandatory Registration Deadline:</span>
                  <span className="font-mono text-gold-400 font-bold">{deadline}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Statutory Late Fine:</span>
                  <span className="font-mono text-red-400 font-bold">AED 10,000</span>
                </div>
              </div>

              {/* FINE DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  {isRegistered ? "FTA Registration Status" : "Late Fine Risk Exposure"}
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  {isRegistered ? "✅ Registered (TRN Issued)" : `AED ${lateFineAED.toLocaleString()}`}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/uae-services/corporate-tax-registration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Register UAE Corporate Tax for AED 1,500
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
