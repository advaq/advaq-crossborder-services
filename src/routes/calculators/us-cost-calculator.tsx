import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

interface StateData {
  id: string;
  name: string;
  flag: string;
  stateFilingFee: number;
  annualReportFee: number;
  privacyRating: string;
  bestFor: string;
}

const statesData: StateData[] = [
  {
    id: "wyoming",
    name: "Wyoming",
    flag: "🤠",
    stateFilingFee: 100,
    annualReportFee: 60,
    privacyRating: "10/10 (Anonymous LLC)",
    bestFor: "Non-Resident Founders, E-commerce, SaaS & Stripe",
  },
  {
    id: "delaware",
    name: "Delaware",
    flag: "🏦",
    stateFilingFee: 110,
    annualReportFee: 300,
    privacyRating: "9/10 (High Privacy)",
    bestFor: "VC Funding, Angel Investors & Tech Startups",
  },
  {
    id: "newmexico",
    name: "New Mexico",
    flag: "🌵",
    stateFilingFee: 50,
    annualReportFee: 0,
    privacyRating: "10/10 (Anonymous LLC)",
    bestFor: "Lowest Annual Maintenance ($0 Annual Report)",
  },
  {
    id: "florida",
    name: "Florida",
    flag: "🌴",
    stateFilingFee: 125,
    annualReportFee: 138,
    privacyRating: "5/10 (Public Owner Directory)",
    bestFor: "Physical US Operations & Local Trading",
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

export const Route = createFileRoute("/calculators/us-cost-calculator")({
  head: () => ({
    meta: [
      { title: "US LLC Total State & Setup Cost Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC cost calculator for non-residents for 2026/2027. Compare Wyoming, Delaware, New Mexico & Florida state filing fees, registered agent, EIN & FinCEN BOI total costs.",
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
      { property: "og:url", content: "/calculators/us-cost-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-cost-calculator" }],
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedState = statesData.find((s) => s.id === selectedStateId) || statesData[0];

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

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US LLC Setup Cost Calculator", item: "https://advaq.com/calculators/us-cost-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US LLC Total State & Setup Cost Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate US LLC formation state filing fees, registered agent fees, IRS EIN registration, FinCEN BOIR reporting, and annual state maintenance.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "Which US state is cheapest for a non-resident LLC founder?",
      a: "New Mexico offers the lowest upfront state fee ($50) and $0 annual report fees forever. However, Wyoming ($100 state fee, $60 annual report) is the most popular due to superior asset protection laws, privacy, and full compatibility with Stripe and Mercury Bank.",
    },
    {
      q: "Is a Registered Agent mandatory for a foreign-owned US LLC?",
      a: "Yes. Every US state legally requires an LLC to maintain a Registered Agent with a physical street address in that state to receive official legal notices and state compliance documents.",
    },
    {
      q: "Do I need a US Social Security Number (SSN) to get an EIN?",
      a: "No! Non-US residents without an SSN or ITIN can obtain an IRS EIN for their US LLC by submitting IRS Form SS-4 via fax or through an authorized IRS Third-Party Designee.",
    },
    {
      q: "What is the mandatory FinCEN BOI Reporting requirement for US LLCs?",
      a: "Under the Corporate Transparency Act, all US LLCs must submit a Beneficial Ownership Information (BOI) report to FinCEN detailing passport details of all 25%+ owners. Filing is mandatory to avoid severe federal daily fines.",
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
            <Link to="/calculators/usa" className="hover:underline">USA Calculators</Link>
            <span>/</span>
            <span>US LLC Setup Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US LLC Total State & Setup Cost Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact state filing fees, registered agent costs, EIN tax ID, and annual state report maintenance for non-resident US LLC formation.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40">
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

              <div className="mt-4 p-4 bg-navy-900/5 border border-gold-500/20 rounded-xl text-xs space-y-1 text-navy-950">
                <div><strong>Privacy Rating:</strong> {selectedState.privacyRating}</div>
                <div><strong>Best For:</strong> {selectedState.bestFor}</div>
                <div><strong>Annual State Fee:</strong> ${selectedState.annualReportFee}/year</div>
              </div>
            </div>

            <div>
              <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3">
                2. Select Required Services & Addons:
              </label>
              <div className="space-y-3 text-xs">
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

          {/* RIGHT RESULT CARD */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>US LLC Package Breakdown</span>
              </div>

              <div className="space-y-2.5 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>{selectedState.name} State Filing Fee:</span>
                  <span className="font-mono text-white">${selectedState.stateFilingFee}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>ADVAQ Formation Service:</span>
                  <span className="font-mono text-white">${baseServiceFee}</span>
                </div>
                {includeRegisteredAgent && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Registered Agent (1 Yr):</span>
                    <span className="font-mono text-gold-400">${registeredAgentFee}</span>
                  </div>
                )}
                {includePhysicalAddress && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>US Address & Mail Forwarding:</span>
                    <span className="font-mono text-gold-400">${physicalAddressFee}</span>
                  </div>
                )}
                {includeEIN && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>IRS EIN Registration:</span>
                    <span className="font-mono text-gold-400">${einServiceFee}</span>
                  </div>
                )}
                {includeBOI && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>FinCEN BOI Filing:</span>
                    <span className="font-mono text-gold-400">${boiServiceFee}</span>
                  </div>
                )}
                {includeOperatingAgreement && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Operating Agreement:</span>
                    <span className="font-mono text-gold-400">${operatingAgreementFee}</span>
                  </div>
                )}
                {expeditedProcessing && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Expedited Filing:</span>
                    <span className="font-mono text-gold-400">${expeditedFee}</span>
                  </div>
                )}
              </div>

              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4 space-y-3">
                <div>
                  <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                    Total Year-1 Setup Cost
                  </span>
                  <div className="text-4xl font-serif font-bold text-white">
                    ${totalSetupCost}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-navy-200">Annual State Maintenance (Yr 2+):</span>
                  <strong className="text-emerald-400 font-mono">${annualMaintenanceCost}/yr</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Incorporate {selectedState.name} LLC
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US LLC SETUP WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step {selectedState.name} LLC Cost Walkthrough
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of your exact state filing fees, add-on compliance, and annual recurring costs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: State Incorporation Fee</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">${selectedState.stateFilingFee} State Base</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Selected US State:</span> <strong className="text-white">{selectedState.name} {selectedState.flag}</strong></div>
                <div className="flex justify-between"><span>Statutory State Filing Fee:</span> <strong className="text-white">${selectedState.stateFilingFee}</strong></div>
                <div className="flex justify-between"><span>ADVAQ Formation Service:</span> <strong className="text-white">${baseServiceFee}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Formation Base Total:</span> <strong>${selectedState.stateFilingFee + baseServiceFee}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: US Address & Registered Agent</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">${registeredAgentFee + physicalAddressFee} Address Base</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Registered Agent Service (1 Yr):</span> <strong className="text-white">${registeredAgentFee}</strong></div>
                <div className="flex justify-between"><span>US Business Address & Mail:</span> <strong className="text-white">${physicalAddressFee}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400"><span>Address Subtotal:</span> <strong>${registeredAgentFee + physicalAddressFee}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Federal Tax & BOI Compliance</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Federal Compliance</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>IRS EIN Registration:</span> <strong className="text-white">${einServiceFee}</strong></div>
                <div className="flex justify-between"><span>FinCEN BOI Report Filing:</span> <strong className="text-white">${boiServiceFee}</strong></div>
                <div className="flex justify-between"><span>Operating Agreement:</span> <strong className="text-white">${operatingAgreementFee}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Year 1 & Recurring Summary</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Cost Verified</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>Total Year 1 Setup Cost:</span> <strong>${totalSetupCost}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400"><span>Annual State Maintenance (Yr 2+):</span> <strong>${annualMaintenanceCost}/yr</strong></div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 1: QUICK REFERENCE SUMMARY TABLE */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/10 text-gold-600 rounded-xl">
              <BookOpen size={22} />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">
                US State LLC Filing & Annual Maintenance Fee Comparison
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">US State</th>
                  <th className="p-3.5">Initial Filing Fee</th>
                  <th className="p-3.5">Annual Report Fee</th>
                  <th className="p-3.5 rounded-tr-xl">Privacy / Owner Anonymity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                {statesData.map((s) => (
                  <tr key={s.id} className={s.id === selectedStateId ? "bg-gold-500/10 font-bold" : ""}>
                    <td className="p-3.5 font-bold text-navy-950 flex items-center gap-2">
                      <span>{s.flag}</span> <span>{s.name}</span>
                    </td>
                    <td className="p-3.5 font-mono font-bold">${s.stateFilingFee}</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-600">${s.annualReportFee}/yr</td>
                    <td className="p-3.5 text-navy-700">{s.privacyRating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5">
              <HelpCircle size={15} /> Knowledge Base
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions (US LLC Setup)
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

        {/* ADVAQ CTA */}
        <section className="bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl">
          <div className="absolute inset-0 diagonal-pattern opacity-40" />
          <div className="relative max-w-3xl mx-auto space-y-6">
            <span className="text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2">
              <Shield size={16} /> ADVAQ US Corporate Incorporation Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Ready to Form Your {selectedState.name} LLC Online?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US team files your Articles of Organization, secures your IRS EIN without an SSN, files FinCEN BOI reports, and sets up your US business bank account.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/wyoming-llc-formation"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Incorporate {selectedState.name} LLC <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp US Formation Advisor
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
