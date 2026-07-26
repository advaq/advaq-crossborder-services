import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-secp-cost")({
  head: () => ({
    meta: [
      { title: "SECP Private Limited vs SMC Setup Cost Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive SECP company formation cost calculator. Calculate SECP fees, name availability, NIFT digital signatures, NTN, and corporate bank account setup costs.",
      },
      {
        name: "keywords",
        content:
          "secp company registration cost calculator 2026, private limited vs single member company cost secp pakistan, nift digital signature fees secp",
      },
      {
        property: "og:title",
        content: "SECP Private Limited vs SMC Setup Cost Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact SECP government fees, digital signatures, and legal drafting costs for Pakistani companies.",
      },
      { property: "og:url", content: "/calculators/pakistan-secp-cost" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-secp-cost" }],
  }),
  component: PakistanSecpCostCalculatorPage,
});

function PakistanSecpCostCalculatorPage() {
  const [companyType, setCompanyType] = useState<string>("pvt-ltd");
  const [authorizedCapitalPKR, setAuthorizedCapitalPKR] = useState<number>(100000); // 1 Lac PKR
  const [numberOfDirectors, setNumberOfDirectors] = useState<number>(2);
  const [includeNiftDigitalSignatures, setIncludeNiftDigitalSignatures] = useState<boolean>(true);
  const [includeNTNRegistration, setIncludeNTNRegistration] = useState<boolean>(true);

  // SECP Fee Schedule (2026 eServices)
  // Name Availability: Rs 500
  // Incorporation Filing Fee: Rs 2,500 base + Rs 500 per Rs 100,000 capital above 1 Lac
  const baseNameFee = 500;
  const baseIncorporationFee = companyType === "sole-prop" ? 0 : 2500;

  let capitalFee = 0;
  if (companyType !== "sole-prop" && authorizedCapitalPKR > 100000) {
    capitalFee = Math.ceil((authorizedCapitalPKR - 100000) / 100000) * 500;
  }

  const secpGovtFeeTotal = baseNameFee + baseIncorporationFee + capitalFee;
  const niftDigitalSigFee = includeNiftDigitalSignatures && companyType !== "sole-prop" ? numberOfDirectors * 1800 : 0;
  const advaqServiceFee = companyType === "sole-prop" ? 15000 : companyType === "smc" ? 35000 : 45000;
  const ntnRegistrationFee = includeNTNRegistration ? 5000 : 0;

  const totalSetupCostPKR = secpGovtFeeTotal + niftDigitalSigFee + advaqServiceFee + ntnRegistrationFee;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>SECP Company Setup Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            SECP Private Limited & SMC Setup Cost Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact SECP government fees, NIFT digital signatures, authorized capital fees, and NTN registration for Private Limited, SMC, and Sole Proprietorship.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* ENTITY TYPE */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Company Structure:
              </label>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => { setCompanyType("pvt-ltd"); setNumberOfDirectors(2); }}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    companyType === "pvt-ltd"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">Private Limited</strong>
                  <span className="text-[11px] opacity-80">2+ Directors</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setCompanyType("smc"); setNumberOfDirectors(1); }}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    companyType === "smc"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">SMC (Single Member)</strong>
                  <span className="text-[11px] opacity-80">1 Director</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setCompanyType("sole-prop"); setNumberOfDirectors(1); }}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    companyType === "sole-prop"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">Sole Proprietor</strong>
                  <span className="text-[11px] opacity-80">Individual NTN</span>
                </button>
              </div>
            </div>

            {/* AUTHORIZED CAPITAL */}
            {companyType !== "sole-prop" && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    Authorized Share Capital (PKR):
                  </label>
                  <span className="font-mono text-gold-600 font-bold text-base">
                    Rs {(authorizedCapitalPKR / 100000).toLocaleString()} Lacs
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={authorizedCapitalPKR}
                  onChange={(e) => setAuthorizedCapitalPKR(Number(e.target.value))}
                  className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
              </div>
            )}

            {/* CHECKBOXES */}
            <div className="space-y-3 text-xs">
              {companyType !== "sole-prop" && (
                <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <input
                    type="checkbox"
                    checked={includeNiftDigitalSignatures}
                    onChange={(e) => setIncludeNiftDigitalSignatures(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block">NIFT Digital Signatures ({numberOfDirectors} Directors)?</strong>
                    <span className="text-gray-500">Mandatory biometric digital signatures for SECP eServices.</span>
                  </div>
                </label>
              )}

              <label className="flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <input
                  type="checkbox"
                  checked={includeNTNRegistration}
                  onChange={(e) => setIncludeNTNRegistration(e.target.checked)}
                  className="accent-gold-500 w-4 h-4"
                />
                <div>
                  <strong className="text-navy-950 block">FBR Company NTN Registration included?</strong>
                  <span className="text-gray-500">Required for opening corporate bank account in Pakistan.</span>
                </div>
              </label>
            </div>
          </div>

          {/* RIGHT SUMMARY CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>SECP Setup Cost Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                {companyType !== "sole-prop" && (
                  <>
                    <div className="flex justify-between items-center text-navy-200">
                      <span>SECP Name Availability & Filing:</span>
                      <span className="font-mono text-white">Rs {secpGovtFeeTotal.toLocaleString()}</span>
                    </div>
                    {includeNiftDigitalSignatures && (
                      <div className="flex justify-between items-center text-navy-200">
                        <span>NIFT Digital Signatures ({numberOfDirectors}x):</span>
                        <span className="font-mono text-white">Rs {niftDigitalSigFee.toLocaleString()}</span>
                      </div>
                    )}
                  </>
                )}
                <div className="flex justify-between items-center text-navy-200">
                  <span>ADVAQ Legal & Incorporation Fee:</span>
                  <span className="font-mono text-white">Rs {advaqServiceFee.toLocaleString()}</span>
                </div>
                {includeNTNRegistration && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>FBR Company NTN Registration:</span>
                    <span className="font-mono text-white">Rs {ntnRegistrationFee.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Incorporation Cost
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  Rs {totalSetupCostPKR.toLocaleString()} PKR
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/secp-registration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Incorporate SECP Company with ADVAQ
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20SECP%20Setup%20Cost%20Calculator%20(${companyType},%20Rs%20${totalSetupCostPKR.toLocaleString()}).%20Please%20guide%20me.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp Corporate Lawyer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
