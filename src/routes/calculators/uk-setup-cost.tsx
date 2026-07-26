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
  FileCheck,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/calculators/uk-setup-cost")({
  head: () => ({
    meta: [
      { title: "UK LTD Overseas Formation & Annual Compliance Cost Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive UK Limited Company setup cost calculator. Calculate Companies House fees, London office address, Wise bank setup, CS01 & CT600 accounts.",
      },
      {
        name: "keywords",
        content:
          "uk ltd company setup cost calculator non resident 2026, uk company incorporation total cost, london registered address cs01 confirmation statement cost",
      },
      {
        property: "og:title",
        content: "UK LTD Overseas Formation & Compliance Cost Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact Year-1 setup fees and annual recurring costs for operating a UK LTD from overseas.",
      },
      { property: "og:url", content: "/calculators/uk-setup-cost" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/uk-setup-cost" }],
  }),
  component: UKSetupCostCalculatorPage,
});

function UKSetupCostCalculatorPage() {
  const [includeLondonAddress, setIncludeLondonAddress] = useState<boolean>(true);
  const [includeServiceAddress, setIncludeServiceAddress] = useState<boolean>(true);
  const [includeBankAssistance, setIncludeBankAssistance] = useState<boolean>(true);
  const [includeConfirmationStatement, setIncludeConfirmationStatement] = useState<boolean>(true);
  const [includeAnnualAccounts, setIncludeAnnualAccounts] = useState<boolean>(true);

  // Fee Breakdown (£)
  const baseCompaniesHouseFee = 50; // UK Companies House government fee
  const advaqFormationPackage = 99;
  const londonAddressFee = includeLondonAddress ? 120 : 0;
  const serviceAddressFee = includeServiceAddress ? 60 : 0;
  const bankAssistanceFee = includeBankAssistance ? 99 : 0;
  const confirmationStatementFee = includeConfirmationStatement ? 75 : 0;
  const annualAccountsFee = includeAnnualAccounts ? 250 : 0;

  const totalYear1Cost =
    baseCompaniesHouseFee +
    advaqFormationPackage +
    londonAddressFee +
    serviceAddressFee +
    bankAssistanceFee +
    confirmationStatementFee +
    annualAccountsFee;

  const annualRecurringCost =
    londonAddressFee + serviceAddressFee + confirmationStatementFee + annualAccountsFee;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/uk" className="hover:underline">UK Calculators</Link>
            <span>/</span>
            <span>UK LTD Setup & Compliance Cost</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            UK LTD Non-Resident Setup & Compliance Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate exact Companies House fees, London registered address, Wise bank account assistance, and annual CT600 accounts filing.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <label className="block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2">
              Select Required UK LTD Packages & Services:
            </label>

            <div className="space-y-3 text-xs">
              {/* LONDON REGISTERED ADDRESS */}
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeLondonAddress}
                    onChange={(e) => setIncludeLondonAddress(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">London Registered Office Address (1 Year)</strong>
                    <span className="text-gray-500 text-[11px]">Official UK legal address for Companies House & HMRC.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£120/yr</span>
              </label>

              {/* DIRECTOR SERVICE ADDRESS */}
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeServiceAddress}
                    onChange={(e) => setIncludeServiceAddress(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Director Service Address Privacy</strong>
                    <span className="text-gray-500 text-[11px]">Keeps your home address off the public Companies House register.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£60/yr</span>
              </label>

              {/* BANK ACCOUNT ASSISTANCE */}
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeBankAssistance}
                    onChange={(e) => setIncludeBankAssistance(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Wise Business & Revolut Bank Setup Assistance</strong>
                    <span className="text-gray-500 text-[11px]">Guaranteed support for opening UK business accounts from overseas.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£99</span>
              </label>

              {/* CONFIRMATION STATEMENT */}
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeConfirmationStatement}
                    onChange={(e) => setIncludeConfirmationStatement(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Confirmation Statement (CS01) Filing</strong>
                    <span className="text-gray-500 text-[11px]">Mandatory annual confirmation statement filed with Companies House.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£75/yr</span>
              </label>

              {/* ANNUAL ACCOUNTS & CT600 */}
              <label className="flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeAnnualAccounts}
                    onChange={(e) => setIncludeAnnualAccounts(e.target.checked)}
                    className="accent-gold-500 w-4 h-4"
                  />
                  <div>
                    <strong className="text-navy-950 block text-sm">Annual Accounts & CT600 Corporation Tax Filing</strong>
                    <span className="text-gray-500 text-[11px]">Complete dormant/active accounts prepared by UK qualified accountant.</span>
                  </div>
                </div>
                <span className="font-semibold text-navy-950 shrink-0">£250/yr</span>
              </label>
            </div>
          </div>

          {/* RIGHT SUMMARY CARD (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>UK Package Cost Breakdown</span>
              </div>

              {/* ITEM LIST */}
              <div className="space-y-2.5 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Companies House Govt Fee:</span>
                  <span className="font-mono text-white">£{baseCompaniesHouseFee}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>ADVAQ Formation Package:</span>
                  <span className="font-mono text-white">£{advaqFormationPackage}</span>
                </div>
                {includeLondonAddress && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>London Office Address:</span>
                    <span className="font-mono text-white">£120</span>
                  </div>
                )}
                {includeServiceAddress && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Director Privacy Address:</span>
                    <span className="font-mono text-white">£60</span>
                  </div>
                )}
                {includeBankAssistance && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Wise/Revolut Bank Setup:</span>
                    <span className="font-mono text-white">£99</span>
                  </div>
                )}
                {includeConfirmationStatement && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Confirmation Statement (CS01):</span>
                    <span className="font-mono text-white">£75</span>
                  </div>
                )}
                {includeAnnualAccounts && (
                  <div className="flex justify-between items-center text-navy-200">
                    <span>Annual Accounts & CT600:</span>
                    <span className="font-mono text-white">£250</span>
                  </div>
                )}
              </div>

              {/* TOTAL COST DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Total Year-1 Cost (£)
                </span>
                <div className="text-4xl font-serif font-bold text-white">
                  £{totalYear1Cost}
                  <span className="text-xs text-navy-300 font-sans font-normal ml-2">GBP</span>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-navy-200 flex justify-between">
                  <span>Year-2 Onwards Annual Cost:</span>
                  <strong className="text-gold-400 font-mono">£{annualRecurringCost}/yr</strong>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="space-y-3 pt-4">
              <Link
                to="/uk-services/ltd-formation"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Incorporate UK LTD Now
              </Link>

              <a
                href={`https://wa.me/923000925335?text=Hi%20ADVAQ!%20I%20used%20the%20UK%20Setup%20Cost%20Calculator%20(Total:%20%C2%A3${totalYear1Cost}).%20Please%20guide%20me.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light rounded-none uppercase text-xs tracking-widest py-3.5 font-semibold text-center w-full block"
              >
                WhatsApp UK Formation Lawyer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
