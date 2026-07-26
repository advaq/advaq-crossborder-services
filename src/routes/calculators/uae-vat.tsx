import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Percent,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uae-vat")({
  head: () => ({
    meta: [
      { title: "UAE 5% VAT Registration Threshold & Return Estimator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UAE VAT calculator. Check mandatory AED 375,000 VAT threshold, voluntary AED 187,500 limit, and quarterly 5% VAT output vs input refund.",
      },
      {
        name: "keywords",
        content:
          "uae vat threshold calculator 375000 aed 2026, Dubai vat return filing estimator 5 percent, voluntary vat registration uae freezone",
      },
      {
        property: "og:title",
        content: "UAE 5% VAT Registration Threshold & Return Estimator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate mandatory VAT limits and quarterly 5% VAT payable or refundable with FTA.",
      },
      { property: "og:url", content: "/calculators/uae-vat" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-vat" }],
  }),
  component: UAEVATCalculatorPage,
});

function UAEVATCalculatorPage() {
  const [annualTurnoverAED, setAnnualTurnoverAED] = useState<number>(450000);
  const [annualVatExpensesAED, setAnnualVatExpensesAED] = useState<number>(100000);
  const [inputRecoveryPercentage, setInputRecoveryPercentage] = useState<number>(100); // 100% standard recovery

  const mandatoryThreshold = 375000;
  const voluntaryThreshold = 187500;

  const isMandatory = annualTurnoverAED >= mandatoryThreshold;
  const isVoluntary = annualTurnoverAED >= voluntaryThreshold && !isMandatory;

  // 5% VAT Math with Recovery Rate
  const vatOutputAED = annualTurnoverAED * 0.05;
  const recoverableVatInputAED = (annualVatExpensesAED * 0.05) * (inputRecoveryPercentage / 100);
  const netVatPayableAED = Math.max(0, vatOutputAED - recoverableVatInputAED);
  const netVatRefundAED = recoverableVatInputAED > vatOutputAED ? recoverableVatInputAED - vatOutputAED : 0;

  // FTA Penalties
  const ftaLateFilingFine = "AED 1,000 (1st Offense) / AED 2,000 (Repeat Offense within 24 months)";

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uae" className="hover:underline">UAE Calculators</Link>
            <span>/</span>
            <span>UAE 5% VAT Calculator</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UAE 5% VAT Registration & Return Estimator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Monitor your annual UAE turnover against the mandatory AED 375k VAT limit and calculate your 5% quarterly FTA VAT bill.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* STATUS BANNER */}
          <div
            className={`p-6 rounded-2xl border flex items-center gap-5 ${
              isMandatory
                ? "bg-amber-50 border-amber-300 text-amber-950"
                : isVoluntary
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-gray-50 border-gray-200 text-gray-800"
            }`}
          >
            {isMandatory ? (
              <AlertTriangle className="text-amber-600 shrink-0" size={40} />
            ) : (
              <CheckCircle2 className="text-emerald-600 shrink-0" size={40} />
            )}
            <div>
              <h3 className="font-serif font-bold text-xl">
                {isMandatory
                  ? "Mandatory UAE VAT Registration Required (Over AED 375,000)"
                  : isVoluntary
                  ? "Eligible for Voluntary UAE VAT Registration (Over AED 187,500)"
                  : "Below VAT Threshold (Registration Optional)"}
              </h3>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                {isMandatory
                  ? "Your annual turnover has exceeded AED 375,000. Under FTA regulations, you must register for UAE VAT to avoid AED 20,000 late registration penalties."
                  : "You can voluntarily register for UAE VAT to reclaim 5% input tax on your business expenses."}
              </p>
            </div>
          </div>

          {/* INPUT SLIDERS */}
          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* INPUT 1: TURNOVER */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual UAE Turnover (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualTurnoverAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="1500000"
                step="25000"
                value={annualTurnoverAED}
                onChange={(e) => setAnnualTurnoverAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <span className="text-[11px] text-gray-500 block mt-1">
                Mandatory Limit: AED 375,000.
              </span>
            </div>

            {/* INPUT 2: EXPENSES */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Annual VAT-Subject Expenses (AED):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  AED {annualVatExpensesAED.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={annualTurnoverAED * 0.7}
                step="10000"
                value={annualVatExpensesAED}
                onChange={(e) => setAnnualVatExpensesAED(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* VAT BREAKDOWN DISPLAY */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-3">
              <span className="text-xs font-semibold text-gray-500 uppercase">5% Output VAT Collected</span>
              <div className="text-3xl font-serif font-bold text-navy-950">
                AED {Math.round(vatOutputAED).toLocaleString()}
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-3 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">Net Annual FTA VAT Payable</span>
              <div className="text-3xl font-serif font-bold text-white">
                AED {Math.round(netVatPayableAED).toLocaleString()}
              </div>
              {netVatRefundAED > 0 && (
                <p className="text-xs text-emerald-400 font-semibold">
                  🎉 You qualify for an FTA Input VAT Refund of AED {Math.round(netVatRefundAED).toLocaleString()}!
                </p>
              )}
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need UAE VAT Registration & Quarterly Return Filing?</h4>
              <p className="text-xs text-gray-600">Avoid AED 20,000 late penalties with ADVAQ FTA specialists.</p>
            </div>
            <Link to="/uae-services/vat-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Register UAE VAT with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
