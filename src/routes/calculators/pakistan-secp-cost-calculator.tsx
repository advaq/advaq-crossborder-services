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
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-secp-cost-calculator")({
  head: () => ({
    meta: [
      { title: "SECP Private Limited vs SMC Setup Cost Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive SECP company formation cost calculator. Calculate SECP fees, name availability, NIFT digital signatures, NTN, and corporate bank account setup costs.",
      },
      {
        name: "keywords",
        content:
          "secp company registration cost calculator 2026, private limited vs single member company cost secp pakistan, nift digital signature fees secp, secp eservices company incorporation timeline",
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
      { property: "og:url", content: "/calculators/pakistan-secp-cost-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-secp-cost-calculator" }],
  }),
  component: PakistanSecpCostCalculatorPage,
});

function PakistanSecpCostCalculatorPage() {
  const [companyType, setCompanyType] = useState<string>("pvt-ltd");
  const [authorizedCapitalPKR, setAuthorizedCapitalPKR] = useState<number>(100000);
  const [numberOfDirectors, setNumberOfDirectors] = useState<number>(2);
  const [includeNiftDigitalSignatures, setIncludeNiftDigitalSignatures] = useState<boolean>(true);
  const [includeNTNRegistration, setIncludeNTNRegistration] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const baseNameFee = 200;
  const baseIncorporationFee = 2420;

  let capitalFee = 0;
  if (authorizedCapitalPKR > 100000) {
    capitalFee = Math.ceil((authorizedCapitalPKR - 100000) / 100000) * 770;
  }

  const secpGovtFeeTotal = baseNameFee + baseIncorporationFee + capitalFee;
  const niftDigitalSigFee = includeNiftDigitalSignatures ? numberOfDirectors * 1800 : 0;
  const advaqServiceFee = companyType === "smc" ? 40000 : 50000;
  const ntnRegistrationFee = includeNTNRegistration ? 10000 : 0;

  const totalSetupCostPKR = secpGovtFeeTotal + niftDigitalSigFee + advaqServiceFee + ntnRegistrationFee;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "SECP Setup Cost Calculator", item: "https://advaq.com/calculators/pakistan-secp-cost-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SECP Private Limited vs SMC Setup Cost Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-secp-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate SECP incorporation fees, name reservation, NIFT digital signatures, FBR company NTN registration, and legal drafting costs under Companies Act 2017.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the difference between a Private Limited (Pvt Ltd) and Single Member Company (SMC-Pvt Ltd)?",
      a: "A Private Limited company requires at least 2 directors/shareholders, whereas a Single Member Company (SMC-Pvt Ltd) is incorporated by a single individual founder while retaining full limited liability protection under the Companies Act 2017.",
    },
    {
      q: "How long does SECP company incorporation take in Pakistan?",
      a: "With complete documents and active NIFT/e-Crac digital signatures, online incorporation through SECP eServices is completed within 2 to 3 working days.",
    },
    {
      q: "What documents are issued by SECP upon successful company formation?",
      a: "SECP issues 3 primary statutory documents: 1) Certificate of Incorporation, 2) Memorandum of Association (MOA), and 3) Articles of Association (AOA), alongside SECP Form 29 (Particulars of Directors).",
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
            <span>SECP Company Setup Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            SECP Private Limited & SMC Setup Cost Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact SECP government fees, NIFT digital signatures, authorized capital fees, and NTN registration for Private Limited, SMC, and Sole Proprietorship.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Company Structure:
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => { setCompanyType("pvt-ltd"); setNumberOfDirectors(2); }}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
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
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    companyType === "smc"
                      ? "bg-navy-950 text-white border-gold-500 shadow-md"
                      : "bg-white text-gray-800 border-border"
                  }`}
                >
                  <strong className="block text-sm">SMC (Single Member)</strong>
                  <span className="text-[11px] opacity-80">1 Director</span>
                </button>
              </div>
            </div>

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

            <div className="space-y-3 text-xs">
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

          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>SECP Setup Cost Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
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
                Live Step-by-Step SECP Incorporation Cost Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of SECP eServices statutory filing fees, NIFT digital signatures, and FBR NTN registration.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Authorized Capital & Fees</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">SECP Fee</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Authorized Capital:</span> <strong className="text-white">Rs {authorizedCapitalPKR.toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>SECP Filing Fee:</span> <strong className="text-white">Rs {secpGovtFeeTotal.toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Govt Statutory Subtotal:</span> <strong>Rs {secpGovtFeeTotal.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: NIFT Digital Signatures</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">NIFT Biometrics</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Directors Count:</span> <strong className="text-white">{numberOfDirectors} Directors</strong></div>
                <div className="flex justify-between"><span>NIFT Selected:</span> <strong className={includeNiftDigitalSignatures ? "text-emerald-400" : "text-amber-400"}>{includeNiftDigitalSignatures ? "YES" : "NO"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>NIFT Fee Total:</span> <strong>Rs {niftDigitalSigFee.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: ADVAQ Legal Services</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">Legal Drafting</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>MOA & AOA Drafting:</span> <strong className="text-white">Included</strong></div>
                <div className="flex justify-between"><span>FBR Company NTN:</span> <strong className="text-emerald-400">{includeNTNRegistration ? "Included" : "Excluded"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Service Subtotal:</span> <strong>Rs {(advaqServiceFee + ntnRegistrationFee).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: All-Inclusive Total</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Turnkey Cost</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Bank Account Ready:</span> <strong className="text-emerald-400">Guaranteed</strong></div>
                <div className="flex justify-between"><span>Processing Window:</span> <strong className="text-white">3 to 5 Days</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold"><span>Grand Total:</span> <strong>Rs {totalSetupCostPKR.toLocaleString()} PKR</strong></div>
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
                SECP Incorporation & Registration Fee Schedule
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Entity Type</th>
                  <th className="p-3.5">SECP Filing Fee</th>
                  <th className="p-3.5">Min Directors</th>
                  <th className="p-3.5 rounded-tr-xl">Processing Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Private Limited (Pvt Ltd)</td>
                  <td className="p-3.5 font-mono">Rs 2,620 + Rs 770/100k Slabs</td>
                  <td className="p-3.5 font-bold text-navy-950">2 Directors</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">2 to 3 Working Days</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Single Member Company (SMC)</td>
                  <td className="p-3.5 font-mono">Rs 2,620 + Rs 770/100k Slabs</td>
                  <td className="p-3.5 font-bold text-navy-950">1 Director</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">2 to 3 Working Days</td>
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
              Frequently Asked Questions (SECP Company Formation)
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
              Explore Related SECP & Corporate Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  SECP Penalty Risk
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  SECP Form A & Form 9 Late Penalty Estimator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Form A, Form 9, Form 4, and annual return late fees & compounding penalties.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-secp-penalty-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  NTN Eligibility
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR NTN Registration Eligibility Checker
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Check required documents, timeline & process for Salaried, Business & SECP Companies.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-ntn-eligibility-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  IT Export Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Pakistan IT Exporter 100% Tax Credit Tool
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Section 154A 0.25% WHT, PSEB registration savings, and SBP FCVA USD retention.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-it-export-calculator"
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
              <Shield size={16} /> ADVAQ Registered SECP High-Court Corporate Advocates
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Incorporate Your SECP Private Limited Company
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan corporate legal team drafts Memorandum & Articles of Association, obtains SECP name approvals, issues NIFT digital signatures, and opens corporate bank accounts in 2–3 working days.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/secp-registration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Register SECP Company <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
