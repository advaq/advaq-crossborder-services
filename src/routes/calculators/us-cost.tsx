import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Building2,
  FileCheck,
  Check,
} from "lucide-react";

interface StateOption {
  id: string;
  name: string;
  flag: string;
  stateFilingFee: number;
  annualReportFee: number;
  privacyRating: string;
  bestFor: string;
}

const statesData: StateOption[] = [
  {
    id: "wyoming",
    name: "Wyoming",
    flag: "🤠",
    stateFilingFee: 100,
    annualReportFee: 60,
    privacyRating: "10/10 (Highest Anonymous)",
    bestFor: "E-commerce, Freelancers, Software & Non-US Residents",
  },
  {
    id: "delaware",
    name: "Delaware",
    flag: "🏦",
    stateFilingFee: 110,
    annualReportFee: 300,
    privacyRating: "9/10 (Chancery Court)",
    bestFor: "VC-Backed Startups, Holding Companies & Investors",
  },
  {
    id: "newmexico",
    name: "New Mexico",
    flag: "🌵",
    stateFilingFee: 50,
    annualReportFee: 0,
    privacyRating: "10/10 (Zero Annual Fee)",
    bestFor: "Budget-conscious Non-US Founders & Consultants",
  },
  {
    id: "florida",
    name: "Florida",
    flag: "🌴",
    stateFilingFee: 125,
    annualReportFee: 138.75,
    privacyRating: "6/10 (Public Register)",
    bestFor: "Physical US Presence, Real Estate & Local Trade",
  },
  {
    id: "texas",
    name: "Texas",
    flag: "⭐",
    stateFilingFee: 300,
    annualReportFee: 0,
    privacyRating: "7/10 (Strong Business Economy)",
    bestFor: "Large Scale Operations & US In-State Trading",
  },
];

export const Route = createFileRoute("/calculators/us-cost")({
  head: () => ({
    meta: [
      { title: "US LLC Total State & Setup Cost Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC cost calculator. Compare Wyoming, Delaware, New Mexico & Florida state filing fees, registered agent, EIN & BOI total costs.",
      },
      {
        name: "keywords",
        content:
          "us llc cost calculator, wyoming vs delaware llc cost calculator, non resident us llc total setup fee, ein boi report filing fee estimator",
      },
      {
        property: "og:title",
        content: "US LLC Total State & Setup Cost Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact state filing fees, annual report fees, and full setup costs for your foreign-owned US LLC.",
      },
      {
        property: "og:type",
        content: "website",
      },
      { property: "og:url", content: "/calculators/us-cost" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-cost" }],
  }),
  component: USLLCCostCalculatorPage,
});

function USLLCCostCalculatorPage() {
  const [selectedStateId, setSelectedStateId] = useState<string>("wyoming");
  const [includeRegisteredAgent, setIncludeRegisteredAgent] = useState<boolean>(true);
  const [includePhysicalAddress, setIncludePhysicalAddress] = useState<boolean>(true);
  const [includeEIN, setIncludeEIN] = useState<boolean>(true);
  const [includeBOI, setIncludeBOI] = useState<boolean>(true);
  const [includeOperatingAgreement, setIncludeOperatingAgreement] = useState<boolean>(true);
  const [expeditedProcessing, setExpeditedProcessing] = useState<boolean>(false);

  const selectedState = statesData.find((s) => s.id === selectedStateId) || statesData[0];

  // ADVAQ Service Fees
  const baseServiceFee = 149;
  const registeredAgentFee = includeRegisteredAgent ? 99 : 0;
  const physicalAddressFee = includePhysicalAddress ? 120 : 0;
  const einServiceFee = includeEIN ? 75 : 0;
  const boiServiceFee = includeBOI ? 49 : 0;
  const operatingAgreementFee = includeOperatingAgreement ? 50 : 0;
  const expeditedFee = expeditedProcessing ? 99 : 0;

  const totalStateFee = selectedState.stateFilingFee;
  const totalServiceAddons =
    baseServiceFee +
    registeredAgentFee +
    physicalAddressFee +
    einServiceFee +
    boiServiceFee +
    operatingAgreementFee +
    expeditedFee;

  const totalSetupCost = totalStateFee + totalServiceAddons;
  const annualMaintenanceCost = selectedState.annualReportFee + (includeRegisteredAgent ? 99 : 0);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators" className="hover:underline">Calculators</Link>
            <span>/</span>
            <span>US LLC Setup Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US LLC Total State & Setup Cost Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact state filing fees, registered agent costs, EIN tax ID, and annual state report maintenance for non-resident US LLC formation.
          </p>
        </div>
      </section>

      {/* CALCULATOR MAIN INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
            {/* STEP 1: STATE SELECTION */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3">
                1. Select Target US State:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {statesData.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStateId(s.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedStateId === s.id
                        ? "bg-navy-950 text-white border-gold-500 shadow-md"
                        : "bg-white text-gray-800 border-border hover:border-gold-500/50"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{s.flag}</span>
                      <strong className="text-sm font-serif">{s.name}</strong>
                    </div>
                    <div className="text-[11px] opacity-80">
                      State Fee: ${s.stateFilingFee}
                    </div>
                  </button>
                ))}
              </div>

              {/* STATE DETAILS BANNER */}
              <div className="mt-4 p-4 bg-navy-900/5 border border-gold-500/20 rounded-xl text-xs space-y-1 text-navy-950">
                <div><strong>Privacy Rating:</strong> {selectedState.privacyRating}</div>
                <div><strong>Best For:</strong> {selectedState.bestFor}</div>
                <div><strong>Annual State Fee:</strong> ${selectedState.annualReportFee}/year</div>
              </div>
            </div>

            {/* STEP 2: ESSENTIAL ADDONS & SERVICES */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3">
                2. Select Required Services & Addons:
              </label>
              <div className="space-y-3 text-xs">
                {/* REGISTERED AGENT */}
                <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeRegisteredAgent}
                      onChange={(e) => setIncludeRegisteredAgent(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                    <div>
                      <strong className="text-navy-950 block text-sm">US Registered Agent Service (1 Year)</strong>
                      <span className="text-gray-500 text-[11px]">Mandatory physical state address for legal service of process.</span>
                    </div>
                  </div>
                  <span className="font-semibold text-navy-950 shrink-0">$99</span>
                </label>

                {/* PHYSICAL MAIL ADDRESS */}
                <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includePhysicalAddress}
                      onChange={(e) => setIncludePhysicalAddress(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                    <div>
                      <strong className="text-navy-950 block text-sm">US Business Address & Mail Forwarding</strong>
                      <span className="text-gray-500 text-[11px]">Required for Mercury Bank, Stripe & IRS correspondence.</span>
                    </div>
                  </div>
                  <span className="font-semibold text-navy-950 shrink-0">$120</span>
                </label>

                {/* EIN TAX ID */}
                <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeEIN}
                      onChange={(e) => setIncludeEIN(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                    <div>
                      <strong className="text-navy-950 block text-sm">IRS EIN (Employer ID Number) Registration</strong>
                      <span className="text-gray-500 text-[11px]">Official Tax ID for Non-US Resident without SSN.</span>
                    </div>
                  </div>
                  <span className="font-semibold text-navy-950 shrink-0">$75</span>
                </label>

                {/* BOI REPORT */}
                <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeBOI}
                      onChange={(e) => setIncludeBOI(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                    <div>
                      <strong className="text-navy-950 block text-sm">FinCEN BOI Report Filing</strong>
                      <span className="text-gray-500 text-[11px]">Mandatory federal beneficial ownership report for FinCEN.</span>
                    </div>
                  </div>
                  <span className="font-semibold text-navy-950 shrink-0">$49</span>
                </label>

                {/* OPERATING AGREEMENT */}
                <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeOperatingAgreement}
                      onChange={(e) => setIncludeOperatingAgreement(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                    <div>
                      <strong className="text-navy-950 block text-sm">Custom Operating Agreement Drafting</strong>
                      <span className="text-gray-500 text-[11px]">Bank-compliant Single/Multi-Member Operating Agreement.</span>
                    </div>
                  </div>
                  <span className="font-semibold text-navy-950 shrink-0">$50</span>
                </label>

                {/* EXPEDITED PROCESSING */}
                <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={expeditedProcessing}
                      onChange={(e) => setExpeditedProcessing(e.target.checked)}
                      className="accent-gold-500 w-4 h-4"
                    />
                    <div>
                      <strong className="text-navy-950 block text-sm">Expedited State Filing (24-48 Hours)</strong>
                      <span className="text-gray-500 text-[11px]">Fast-track state approval & immediate document dispatch.</span>
                    </div>
                  </div>
                  <span className="font-semibold text-navy-950 shrink-0">$99</span>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT SUMMARY & CHECKOUT CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Real-Time Cost Breakdown</span>
              </div>

              {/* COST SUMMARY LIST */}
              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>State Filing Fee ({selectedState.name}):</span>
                  <span className="font-mono text-white font-semibold">${totalStateFee}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>ADVAQ Formation Package Fee:</span>
                  <span className="font-mono text-white font-semibold">${baseServiceFee}</span>
                </div>
                {includeRegisteredAgent && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Registered Agent (1 Year):</span>
                    <span className="font-mono text-white font-semibold">$99</span>
                  </div>
                )}
                {includePhysicalAddress && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>US Physical Address:</span>
                    <span className="font-mono text-white font-semibold">$120</span>
                  </div>
                )}
                {includeEIN && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>IRS EIN Tax ID Registration:</span>
                    <span className="font-mono text-white font-semibold">$75</span>
                  </div>
                )}
                {includeBOI && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>FinCEN BOI Report:</span>
                    <span className="font-mono text-white font-semibold">$49</span>
                  </div>
                )}
                {includeOperatingAgreement && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Operating Agreement:</span>
                    <span className="font-mono text-white font-semibold">$50</span>
                  </div>
                )}
                {expeditedProcessing && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Expedited 24-Hour Filing:</span>
                    <span className="font-mono text-white font-semibold">$99</span>
                  </div>
                )}
              </div>

              {/* TOTAL ESTIMATED SETUP COST */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Year-1 Formation Cost
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  ${totalSetupCost}
                  <span className="text-xs text-navy-300 font-sans font-normal ml-2">USD</span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between">
                  <span>Year-2 Onwards Recurring Cost:</span>
                  <strong className="text-gold-400 font-mono">${annualMaintenanceCost}/yr</strong>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Proceed with {selectedState.name} LLC Formation
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20US%20LLC%20Cost%20Calculator%20for%20${selectedState.name}%20LLC%20($${totalSetupCost}).%20Please%20guide%20me.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp Advisor for {selectedState.name}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-xl">
          <h3 className="font-serif text-2xl font-semibold text-white mb-6 text-center">
            🇺🇸 Side-by-Side State Comparison: Wyoming vs Delaware vs New Mexico
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gold-400 font-serif text-sm">
                  <th className="p-3">Feature / Metric</th>
                  <th className="p-3">🤠 Wyoming</th>
                  <th className="p-3">🏦 Delaware</th>
                  <th className="p-3">🌵 New Mexico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-navy-200">
                <tr>
                  <td className="p-3 font-semibold text-white">State Filing Fee</td>
                  <td className="p-3 font-mono text-emerald-400">$100</td>
                  <td className="p-3 font-mono">$110</td>
                  <td className="p-3 font-mono text-emerald-400">$50</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Annual State Renewal Fee</td>
                  <td className="p-3 font-mono text-emerald-400">$60/year</td>
                  <td className="p-3 font-mono text-amber-400">$300/year (Tax)</td>
                  <td className="p-3 font-mono text-emerald-400">$0 (Zero Annual Fee)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Owner Anonymity & Privacy</td>
                  <td className="p-3 text-emerald-400 font-semibold">10/10 (Highest Anonymous)</td>
                  <td className="p-3">9/10 (High Privacy)</td>
                  <td className="p-3 text-emerald-400 font-semibold">10/10 (Anonymous)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">VC Investor Preference</td>
                  <td className="p-3">Good for Bootstrap/SaaS</td>
                  <td className="p-3 text-gold-400 font-semibold">Gold Standard for VCs / YC</td>
                  <td className="p-3">Budget Consultants</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white">Best Overall For</td>
                  <td className="p-3">E-commerce, Stripe, Amazon, Freelancers</td>
                  <td className="p-3">Startups seeking US Angel Capital</td>
                  <td className="p-3">Lowest ongoing annual maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FOOTER ADVAQ EXPLANATION */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-gray-700 leading-relaxed text-sm">
        <h2 className="font-serif text-2xl text-navy-950 font-semibold mb-4">
          Why Non-US Residents Choose Wyoming & Delaware for US LLC Formation
        </h2>
        <p className="mb-4">
          For foreign entrepreneurs, e-commerce sellers, and software consultants, <strong>Wyoming</strong> is the premier choice due to its $100 low state filing fee, $60 annual report cost, and total owner anonymity. <strong>Delaware</strong> remains the gold standard for venture-capital backed tech startups and holding structures.
        </p>
      </section>
    </div>
  );
}
