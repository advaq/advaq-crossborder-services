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
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/calculators/us-tax-eligibility")({
  head: () => ({
    meta: [
      { title: "US Foreign Owner 0% Tax Eligibility Checker (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive US LLC 0% tax calculator for non-residents. Test ETBUS and ECI rules to verify if your foreign single-member LLC pays 0% US income tax.",
      },
      {
        name: "keywords",
        content:
          "us llc 0 tax non resident calculator 2026, do foreign owners pay us tax single member llc, etbus eci rules single member llc tax exempt",
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
      { property: "og:url", content: "/calculators/us-tax-eligibility" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/us-tax-eligibility" }],
  }),
  component: USTaxEligibilityCalculatorPage,
});

function USTaxEligibilityCalculatorPage() {
  const [isUSCitizen, setIsUSCitizen] = useState<boolean>(false);
  const [hasUSEmployees, setHasUSEmployees] = useState<boolean>(false);
  const [hasPhysicalUSOffice, setHasPhysicalUSOffice] = useState<boolean>(false);
  const [hasUSWarehouseInventory, setHasUSWarehouseInventory] = useState<boolean>(false);
  const [isSingleMemberLLC, setIsSingleMemberLLC] = useState<boolean>(true);

  // IRS ETBUS / ECI Logic
  // A foreign single-member LLC is exempt from US Federal Income Tax (0%) if:
  // 1. Owner is a non-US citizen / non-resident
  // 2. LLC has NO physical office/branch in the US (virtual address is fine)
  // 3. LLC has NO dependent US employees performing core services in the US
  // 4. LLC operates as a pass-through entity (Single-Member Disregarded Entity)

  const isETBUS = hasUSEmployees || hasPhysicalUSOffice;
  const isTaxExemptEligible = !isUSCitizen && !isETBUS && isSingleMemberLLC;

  // ETBUS Risk Score Calculation
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

  return (
    <div className="min-h-screen bg-white">
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
            US Foreign Owner 0% Tax Eligibility Checker (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Test IRS ETBUS (Engaged in Trade or Business) & ECI (Effectively Connected Income) rules to verify if your foreign-owned US LLC pays 0% US income tax.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* ELIGIBILITY RESULT BANNER */}
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

                {/* RECOMMENDED NEXT ACTION */}
                <div className="mt-3 pt-3 border-t border-black/10 text-xs">
                  <strong className="font-semibold block text-navy-950">Recommended Next Step:</strong>
                  <span>{recommendedAction}</span>
                </div>
              </div>
            </div>

            {/* RISK SCORE BADGE */}
            <div className="shrink-0 text-center md:text-right">
              <span className="text-[10px] uppercase font-bold tracking-widest block text-gray-500 mb-1">ETBUS Risk Level</span>
              <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${etbusRiskBadge}`}>
                {etbusRiskLevel}
              </span>
            </div>
          </div>

          {/* QUESTIONNAIRE CHECKBOXES */}
          <div className="space-y-4 bg-off-white/50 p-6 rounded-2xl border border-border text-xs">
            <h4 className="font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
              Answer the Following IRS Compliance Questions:
            </h4>

            {/* Q1: CITIZENSHIP */}
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

            {/* Q2: SINGLE MEMBER */}
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

            {/* Q3: PHYSICAL OFFICE */}
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

            {/* Q4: US EMPLOYEES */}
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

          {/* MANDATORY IRS FILINGS EXPLANATION */}
          <div className="bg-navy-950 text-white p-6 rounded-2xl border border-gold-500/20 space-y-3">
            <h4 className="font-serif text-lg text-gold-500 font-semibold">
              Mandatory IRS Compliance for 0% Tax Foreign US LLCs
            </h4>
            <p className="text-xs text-navy-200 leading-relaxed">
              Even though you pay <strong>0% US Income Tax</strong>, foreign-owned single-member LLCs must file annual <strong>Form 5472 and Form 1120</strong> with the IRS by April 15th every year. Failure to file carries a strict <strong>$25,000 IRS penalty</strong>.
            </p>
          </div>

          {/* CTA BANNER */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need Assistance with IRS Form 5472 & Tax Structuring?</h4>
              <p className="text-xs text-gray-600">Guaranteed compliant tax filing for foreign US LLC owners.</p>
            </div>
            <Link to="/us-services/corporate-tax-return" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              File IRS Form 5472 with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
