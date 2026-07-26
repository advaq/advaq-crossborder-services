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
  Plane,
  Award,
} from "lucide-react";

interface FreezoneOption {
  id: string;
  name: string;
  location: string;
  zeroVisaCost: number;
  oneVisaCost: number;
  twoVisaCost: number;
  additionalVisaCost: number;
  flexiDeskIncluded: boolean;
  bestFor: string;
}

const freezoneData: FreezoneOption[] = [
  {
    id: "ifza",
    name: "IFZA (International Free Zone Authority)",
    location: "Dubai",
    zeroVisaCost: 12900,
    oneVisaCost: 17900,
    twoVisaCost: 22900,
    additionalVisaCost: 5000,
    flexiDeskIncluded: true,
    bestFor: "IT Consultancies, E-commerce & Global Tech Founders",
  },
  {
    id: "meydan",
    name: "Meydan Free Zone",
    location: "Dubai (Near Downtown)",
    zeroVisaCost: 12500,
    oneVisaCost: 16900,
    twoVisaCost: 21500,
    additionalVisaCost: 4600,
    flexiDeskIncluded: true,
    bestFor: "Prestigious Dubai Address & Instant Bank Account Approval",
  },
  {
    id: "shams",
    name: "SHAMS (Sharjah Media City)",
    location: "Sharjah",
    zeroVisaCost: 9500,
    oneVisaCost: 13900,
    twoVisaCost: 18200,
    additionalVisaCost: 4300,
    flexiDeskIncluded: true,
    bestFor: "Creative Agencies, Media, Digital Marketing & Budget Setup",
  },
  {
    id: "rakez",
    name: "RAKEZ (Ras Al Khaimah Economic Zone)",
    location: "Ras Al Khaimah",
    zeroVisaCost: 8900,
    oneVisaCost: 12900,
    twoVisaCost: 16900,
    additionalVisaCost: 4000,
    flexiDeskIncluded: true,
    bestFor: "Manufacturing, Trading & Cost-Effective License",
  },
];

export const Route = createFileRoute("/calculators/uae-freezone")({
  head: () => ({
    meta: [
      { title: "Dubai Freezone Company Setup Cost Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Dubai Freezone setup cost calculator. Compare IFZA, Meydan, SHAMS & RAKEZ license fees, visa packages, Emirates ID & medical test costs.",
      },
      {
        name: "keywords",
        content:
          "dubai freezone setup cost calculator 2026, ifza vs meydan vs shams cost calculator, uae investor visa package cost dubai freezone",
      },
      {
        property: "og:title",
        content: "Dubai Freezone Company Setup Cost Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Compare license fees, visa package costs, and establishment card fees across top UAE freezones.",
      },
      {
        property: "og:type",
        content: "website",
      },
      { property: "og:url", content: "/calculators/uae-freezone" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uae-freezone" }],
  }),
  component: UAEFreezoneCalculatorPage,
});

function UAEFreezoneCalculatorPage() {
  const [selectedFreezoneId, setSelectedFreezoneId] = useState<string>("ifza");
  const [visasRequired, setVisasRequired] = useState<number>(1);
  const [includeVipMedical, setIncludeVipMedical] = useState<boolean>(true);
  const [includeCorporateTaxReg, setIncludeCorporateTaxReg] = useState<boolean>(true);

  const selectedFreezone = freezoneData.find((f) => f.id === selectedFreezoneId) || freezoneData[0];

  // License Cost Math
  let baseLicenseCost = selectedFreezone.zeroVisaCost;
  if (visasRequired === 1) baseLicenseCost = selectedFreezone.oneVisaCost;
  else if (visasRequired === 2) baseLicenseCost = selectedFreezone.twoVisaCost;
  else if (visasRequired > 2) {
    baseLicenseCost =
      selectedFreezone.twoVisaCost + (visasRequired - 2) * selectedFreezone.additionalVisaCost;
  }

  // Medical, Emirates ID, Stamping per Visa
  const medicalEmiratesIdPerVisa = includeVipMedical ? 3500 : 2500;
  const totalVisaProcessingCost = visasRequired * medicalEmiratesIdPerVisa;

  const corporateTaxRegFee = includeCorporateTaxReg ? 1500 : 0;
  const TotalSetupCostAED = baseLicenseCost + totalVisaProcessingCost + corporateTaxRegFee;
  const TotalSetupCostUSD = Math.round(TotalSetupCostAED / 3.6725);

  // Year 2+ Renewal Estimate (License renewal is ~AED 2,500 less because establishment card is every 3 yrs & initial admin fees drops)
  const annualRenewalCostAED = Math.round(baseLicenseCost * 0.85);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators" className="hover:underline">Calculators</Link>
            <span>/</span>
            <span>Dubai Freezone Setup Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Dubai Freezone Setup Cost Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Compare license costs, flexi-desk options, establishment cards, and investor visa package fees across top UAE freezones.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            {/* STEP 1: FREEZONE SELECTION */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3">
                1. Select Target UAE Freezone:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {freezoneData.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFreezoneId(f.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedFreezoneId === f.id
                        ? "bg-navy-950 text-white border-gold-500 shadow-md"
                        : "bg-white text-gray-800 border-border hover:border-gold-500/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <strong className="text-sm font-serif">{f.name}</strong>
                    </div>
                    <div className="text-[11px] opacity-80">
                      Location: {f.location}
                    </div>
                  </button>
                ))}
              </div>

              {/* FREEZONE DETAILS */}
              <div className="mt-4 p-4 bg-navy-900/5 border border-gold-500/20 rounded-xl text-xs space-y-1 text-navy-950">
                <div><strong>Location:</strong> {selectedFreezone.location}</div>
                <div><strong>Flexi Desk Included:</strong> {selectedFreezone.flexiDeskIncluded ? "Yes (Shared Desk)" : "No"}</div>
                <div><strong>Best Suited For:</strong> {selectedFreezone.bestFor}</div>
              </div>
            </div>

            {/* STEP 2: VISA ALLOCATION */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. Investor & Employee Visas Required:
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  {visasRequired} {visasRequired === 1 ? "Visa" : "Visas"}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={visasRequired}
                onChange={(e) => setVisasRequired(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                <span>0 Visas (License Only)</span>
                <span>1 Visa</span>
                <span>2 Visas</span>
                <span>3+ Visas</span>
              </div>
            </div>

            {/* STEP 3: OPTIONAL ADDONS */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-3">
                3. Additional Processing & Tax Services:
              </label>
              <div className="space-y-3 text-xs">
                <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeVipMedical}
                      onChange={(e) => setIncludeVipMedical(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                    <div>
                      <strong className="text-navy-950 block text-sm">VIP Fast-Track Medical Test & Emirates ID</strong>
                      <span className="text-gray-500 text-[11px]">Same-day medical test & biometrics processing.</span>
                    </div>
                  </div>
                  <span className="font-semibold text-navy-950 shrink-0">+AED 1,000/visa</span>
                </label>

                <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeCorporateTaxReg}
                      onChange={(e) => setIncludeCorporateTaxReg(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                    <div>
                      <strong className="text-navy-950 block text-sm">UAE Corporate Tax (9%) FTA Registration</strong>
                      <span className="text-gray-500 text-[11px]">Mandatory FTA tax registration & Corporate Tax TRN number.</span>
                    </div>
                  </div>
                  <span className="font-semibold text-navy-950 shrink-0">+AED 1,500</span>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT SUMMARY CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Total UAE Package Cost</span>
              </div>

              {/* COST LIST */}
              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Freezone License ({selectedFreezone.name}):</span>
                  <span className="font-mono text-white font-semibold">AED {baseLicenseCost.toLocaleString()}</span>
                </div>
                {visasRequired > 0 && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Medical & Emirates ID ({visasRequired} Visas):</span>
                    <span className="font-mono text-white font-semibold">AED {totalVisaProcessingCost.toLocaleString()}</span>
                  </div>
                )}
                {includeCorporateTaxReg && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>FTA Corporate Tax Registration:</span>
                    <span className="font-mono text-white font-semibold">AED 1,500</span>
                  </div>
                )}
              </div>

              {/* TOTAL ESTIMATED AED & USD COST */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Year-1 Setup Cost (AED)
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  AED {TotalSetupCostAED.toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-navy-200 flex justify-between">
                  <span>Equivalent USD Cost:</span>
                  <strong className="text-gold-400 font-mono">${TotalSetupCostUSD.toLocaleString()} USD</strong>
                </div>
                <div className="mt-2 pt-2 border-t border-white/10 text-[11px] text-emerald-400 flex justify-between">
                  <span>Estimated Year 2+ Renewal:</span>
                  <strong className="font-mono">~AED {annualRenewalCostAED.toLocaleString()}/yr</strong>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <Link
                to="/uae-services/freezone-company-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Setup Company in {selectedFreezone.name}
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20UAE%20Freezone%20Calculator%20for%20${selectedFreezone.name}%20(Visas:%20${visasRequired},%20Total:%20AED%20${TotalSetupCostAED}).%20Please%20guide%20me.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp Dubai Corporate Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
