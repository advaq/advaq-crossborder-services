import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  DollarSign,
  ChevronDown,
  HelpCircle,
  BookOpen,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-tax-eligibility-calculator")({
  head: () => ({
    meta: [
      { title: "US Foreign Owner 0% Tax Eligibility Checker (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC 0% tax calculator for non-residents. Test ETBUS and ECI rules to verify if your foreign single-member LLC pays 0% US income tax.",
      },
      {
        name: "keywords",
        content:
          "us llc 0 tax non resident calculator 2026, do foreign owners pay us tax single member llc, etbus eci rules single member llc tax exempt, form 5472 non resident alien 0 percent tax",
      },
      {
        property: "og:title",
        content: "US Foreign Owner 0% Tax Eligibility Checker | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Verify if your foreign single-member US LLC is exempt from US federal income tax under IRS ETBUS/ECI guidelines.",
      },
      { property: "og:url", content: "/calculators/us-tax-eligibility-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-tax-eligibility-calculator" }],
  }),
  component: USTaxEligibilityCalculatorPage,
});

function USTaxEligibilityCalculatorPage() {
  const [isUSCitizen, setIsUSCitizen] = useState<boolean>(false);
  const [hasUSEmployees, setHasUSEmployees] = useState<boolean>(false);
  const [hasPhysicalUSOffice, setHasPhysicalUSOffice] = useState<boolean>(false);
  const [hasUSWarehouseInventory, setHasUSWarehouseInventory] = useState<boolean>(false);
  const [isSingleMemberLLC, setIsSingleMemberLLC] = useState<boolean>(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isETBUS = hasUSEmployees || hasPhysicalUSOffice;
  const isTaxExemptEligible = !isUSCitizen && !isETBUS && isSingleMemberLLC;

  let etbusRiskLevel = "LOW RISK (0% Tax Safe Pass)";
  let etbusRiskBadge = "bg-emerald-100 text-emerald-800 border-emerald-300";
  let recommendedAction = "Proceed with annual Form 5472 & 1120 pro-forma filing only. 0% US income tax owed.";

  if (isUSCitizen) {
    etbusRiskLevel = "HIGH RISK (Worldwide US Taxable)";
    etbusRiskBadge = "bg-red-100 text-red-800 border-red-300";
    recommendedAction = "File Form 1040 & Schedule C with IRS. Consult ADVAQ US CPA.";
  } else if (hasUSEmployees || hasPhysicalUSOffice) {
    etbusRiskLevel = "HIGH RISK (US ECI Triggered)";
    etbusRiskBadge = "bg-red-100 text-red-800 border-red-300";
    recommendedAction = "File Form 1040-NR & Schedule C. Claim expense deductions & state tax credit.";
  } else if (hasUSWarehouseInventory) {
    etbusRiskLevel = "MEDIUM RISK (Sales Tax / Inventory Nexus)";
    etbusRiskBadge = "bg-amber-100 text-amber-800 border-amber-300";
    recommendedAction = "0% Income tax applies, but check State Sales Tax Nexus limits for Amazon FBA.";
  }

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "USA Calculators", item: "https://advaq.com/calculators/usa" },
      { "@type": "ListItem", position: 4, name: "US 0% Tax Eligibility Checker", item: "https://advaq.com/calculators/us-tax-eligibility-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Foreign Owner 0% Tax Eligibility Checker (2026/2027)",
    url: "https://advaq.com/calculators/us-tax-eligibility-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Verify if your foreign single-member US LLC is exempt from US federal income tax under IRS ETBUS (Engaged in Trade or Business) and ECI rules.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the 3-part test for 0% US tax on a foreign Single-Member LLC?",
      a: "A foreign Single-Member LLC pays 0% US Federal Income Tax if: 1) The single owner is a non-resident alien, 2) The owner has no US physical office, store, or warehouse, and 3) The business has no dependent employees physically working inside the US.",
    },
    {
      q: "Does opening a US bank account or using Stripe trigger US income tax?",
      a: "No! Having a US business bank account (e.g. Mercury, Wise) or accepting payments via US Stripe/PayPal does NOT create a physical presence or trigger US income tax.",
    },
    {
      q: "If I pay 0% US income tax, do I still need to file returns with the IRS?",
      a: "YES! All foreign-owned single-member US LLCs are legally required to file IRS Form 5472 and a pro-forma Form 1120 annually. Failure to file incurs a mandatory $25,000 IRS penalty.",
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
            <span>US 0% Tax Eligibility</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            US Foreign Owner 0% Tax Eligibility Checker (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Test IRS ETBUS (Engaged in Trade or Business) & ECI (Effectively Connected Income) rules to verify if your foreign-owned US LLC pays 0% US income tax.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          <div
            className={`p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-5 ${
              isTaxExemptEligible
                ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                : "bg-amber-50 border-amber-300 text-amber-950"
            }`}
          >
            <div className="flex items-start gap-4">
              {isTaxExemptEligible ? (
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={36} />
              ) : (
                <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={36} />
              )}
              <div>
                <h3 className="font-serif font-bold text-xl">
                  {isTaxExemptEligible
                    ? "🎉 Eligible for 0% US Federal Income Tax!"
                    : "⚠️ Subject to US Federal Tax / ETBUS Tax Filing"}
                </h3>
                <p className="text-xs opacity-90 mt-1 leading-relaxed max-w-2xl">
                  {isTaxExemptEligible
                    ? "Your LLC qualifies as a Foreign-Owned Disregarded Entity under IRS guidelines. You pay 0% US federal income tax and only file Form 5472 & Form 1120 information returns."
                    : "Your LLC triggers US Effectively Connected Income (ECI) or ETBUS rules due to US physical presence, employees, or citizenship status. US tax returns must be filed."}
                </p>

                <div className="mt-3 pt-3 border-t border-black/10 text-xs">
                  <strong className="font-semibold block text-navy-950">Recommended Next Step:</strong>
                  <span>{recommendedAction}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 text-center md:text-right">
              <span className="text-[10px] uppercase font-bold tracking-widest block text-gray-500 mb-1">ETBUS Risk Level</span>
              <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${etbusRiskBadge}`}>
                {etbusRiskLevel}
              </span>
            </div>
          </div>

          <div className="space-y-4 bg-off-white/50 p-6 rounded-2xl border border-border text-xs">
            <h4 className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
              Answer the Following IRS Compliance Questions:
            </h4>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 block text-sm">Are you a US Citizen or Green Card Holder?</strong>
                <span className="text-gray-500 text-[11px]">US citizens pay worldwide income tax regardless of LLC structure.</span>
              </div>
              <input
                type="checkbox"
                checked={isUSCitizen}
                onChange={(e) => setIsUSCitizen(e.target.checked)}
                className="accent-gold-500 w-5 h-5"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 block text-sm">Is your LLC a Single-Member LLC?</strong>
                <span className="text-gray-500 text-[11px]">Single-Member LLCs are treated as tax pass-through disregarded entities by the IRS.</span>
              </div>
              <input
                type="checkbox"
                checked={isSingleMemberLLC}
                onChange={(e) => setIsSingleMemberLLC(e.target.checked)}
                className="accent-gold-500 w-5 h-5"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 block text-sm">Do you have a physical office, retail store, or warehouse in the US?</strong>
                <span className="text-gray-500 text-[11px]">A virtual address or registered agent DOES NOT count as physical presence.</span>
              </div>
              <input
                type="checkbox"
                checked={hasPhysicalUSOffice}
                onChange={(e) => setHasPhysicalUSOffice(e.target.checked)}
                className="accent-gold-500 w-5 h-5"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
              <div>
                <strong className="text-navy-950 block text-sm">Do you hire dependent employees working physically in the US?</strong>
                <span className="text-gray-500 text-[11px]">Hiring independent contractors (W-8BEN) abroad DOES NOT trigger ETBUS.</span>
              </div>
              <input
                type="checkbox"
                checked={hasUSEmployees}
                onChange={(e) => setHasUSEmployees(e.target.checked)}
                className="accent-gold-500 w-5 h-5"
              />
            </label>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BELOW THE FOLD RICH CONTENT ENGINE (SEO / AEO / AIO OPTIMIZATION) */}
      {/* ========================================================================= */}

      <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">

        {/* 1. LIVE DYNAMIC STEP-BY-STEP US TAX EXEMPTION WALKTHROUGH */}
        <section className="bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20">
          <div className="flex items-center gap-3 border-b border-navy-800 pb-5">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-widest block">Real-Time Mathematical Audit</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Live Step-by-Step US Tax Exemption Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line proof of IRS ETBUS (Engaged in Trade or Business) and ECI classification.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">

            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Non-Resident Alien Status</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${!isUSCitizen ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {!isUSCitizen ? "Non-Resident Pass ✅" : "US Citizen Taxable ⚠️"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Citizenship Status:</span> <strong className="text-white">{isUSCitizen ? "US Citizen / Green Card" : "Non-US Resident Alien"}</strong></div>
                <div className="flex justify-between"><span>Worldwide IRS Tax Scope:</span> <strong className={isUSCitizen ? "text-red-400" : "text-emerald-400"}>{isUSCitizen ? "100% Taxable (Form 1040)" : "Foreign Tax Exempt Scope"}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Entity Structure Classification</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isSingleMemberLLC ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {isSingleMemberLLC ? "Disregarded Entity ✅" : "Partnership Tax ⚠️"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>LLC Type:</span> <strong className="text-white">{isSingleMemberLLC ? "Single-Member LLC" : "Multi-Member Partnership"}</strong></div>
                <div className="flex justify-between"><span>IRS Federal Treatment:</span> <strong className="text-emerald-400">{isSingleMemberLLC ? "Pass-Through Disregarded" : "Form 1065 Return Required"}</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Physical Presence & ETBUS Test</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${!isETBUS ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {!isETBUS ? "No US Presence ✅" : "ETBUS Triggered ⚠️"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>US Physical Office / Store:</span> <strong className={hasPhysicalUSOffice ? "text-red-400" : "text-emerald-400"}>{hasPhysicalUSOffice ? "YES (Triggers ECI)" : "NO (Virtual Address)"}</strong></div>
                <div className="flex justify-between"><span>US Dependent Employees:</span> <strong className={hasUSEmployees ? "text-red-400" : "text-emerald-400"}>{hasUSEmployees ? "YES (Triggers ETBUS)" : "NO (Remote Contractors)"}</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Final IRS Tax & Filing Verdict</span>
                <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${isTaxExemptEligible ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                  {isTaxExemptEligible ? "0% US Tax Pass" : "US Return Required"}
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between text-gold-400 font-bold"><span>US Federal Income Tax Owed:</span> <strong>{isTaxExemptEligible ? "$0 (0% Tax Exempt)" : "Standard Corporate / ECI Tax"}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-white"><span>Mandatory IRS Filing:</span> <strong className="text-emerald-400">IRS Form 5472 + Form 1120 Pro-Forma</strong></div>
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
                IRS 0% Tax Rules for Foreign Single-Member LLCs (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">IRS Tax Metric</th>
                  <th className="p-3.5">Non-Resident Alien (No US Office)</th>
                  <th className="p-3.5">US Resident / Physical Presence</th>
                  <th className="p-3.5 rounded-tr-xl">Required IRS Forms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">US Federal Income Tax Rate</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-600">0% (Tax Exempt) ✅</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">10% – 37% Graduated Rates</td>
                  <td className="p-3.5">Form 5472 & 1120 Pro-Forma</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">US Self-Employment Tax (15.3%)</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0% EXEMPT ✅</td>
                  <td className="p-3.5 font-mono text-red-600 font-bold">15.3% SE Tax Owed</td>
                  <td className="p-3.5">Form 1040-NR / Schedule C</td>
                </tr>
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
              Frequently Asked Questions (US 0% Tax Eligibility)
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
              <Shield size={16} /> ADVAQ US Certified CPA & Tax Advisory
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Need Annual IRS Form 5472 & 1120 Pro-Forma Filing?
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our US CPA team prepares 100% compliant Form 5472 filings for foreign-owned LLCs to protect your 0% US tax status and avoid $25,000 IRS penalties.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/us-services/single-member-llc-filing"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                File Form 5472 with ADVAQ CPA <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/923000925335"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold"
              >
                WhatsApp US Tax CPA
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
