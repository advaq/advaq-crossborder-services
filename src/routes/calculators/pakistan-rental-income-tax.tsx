import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Shield,
  ArrowRight,
  Sparkles,
  Home,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-rental-income-tax")({
  head: () => ({
    meta: [
      { title: "Pakistan Rental Income Tax Calculator (Section 15) (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan rental income tax calculator. Calculate Section 15 Property Income tax slabs, Section 155 tenant WHT, and Filer vs Non-Filer rates.",
      },
      {
        name: "keywords",
        content:
          "pakistan rental income tax calculator 2026, section 15 property tax slabs pakistan, section 155 tenant withholding tax rate filer non filer",
      },
      {
        property: "og:title",
        content: "Pakistan Rental Income Tax Calculator (Section 15) | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate FBR income tax on rental property and Section 155 tenant withholding tax deductions.",
      },
      { property: "og:url", content: "/calculators/pakistan-rental-income-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-rental-income-tax" }],
  }),
  component: PakistanRentalIncomeTaxPage,
});

function PakistanRentalIncomeTaxPage() {
  const [monthlyRentPKR, setMonthlyRentPKR] = useState<number>(150000); // 1.5 Lacs PKR/month
  const [isFiler, setIsFiler] = useState<boolean>(true);

  const annualRentPKR = monthlyRentPKR * 12;

  // Section 15 Income from Property Slabs (Individual 2026):
  // Up to 300,000: 0%
  // 300,000 - 600,000: 5% of amount exceeding 300k
  // 600,000 - 1,200,000: 15,000 + 10% of amount exceeding 600k
  // 1,200,000 - 2,000,000: 75,000 + 15% of amount exceeding 1.2M
  // Above 2,000,000: 195,000 + 20% of amount exceeding 2M
  let annualRentalTaxPKR = 0;

  if (annualRentPKR > 2000000) {
    annualRentalTaxPKR = 195000 + (annualRentPKR - 2000000) * 0.20;
  } else if (annualRentPKR > 1200000) {
    annualRentalTaxPKR = 75000 + (annualRentPKR - 1200000) * 0.15;
  } else if (annualRentPKR > 600000) {
    annualRentalTaxPKR = 15000 + (annualRentPKR - 600000) * 0.10;
  } else if (annualRentPKR > 300000) {
    annualRentalTaxPKR = (annualRentPKR - 300000) * 0.05;
  }

  // Non-Filer 100% penalty rate multiplier
  if (!isFiler) {
    annualRentalTaxPKR = annualRentalTaxPKR * 2;
  }

  const effectiveTaxRate = annualRentPKR > 0 ? (annualRentalTaxPKR / annualRentPKR) * 100 : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>Rental Income Tax (Sec 15)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Rental Income Tax Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate FBR Section 15 tax on property rent and tenant withholding tax deductions for Filers vs Non-Filers.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* MONTHLY RENT */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Monthly Rent Received (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  Rs {monthlyRentPKR.toLocaleString()} / month
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="500000"
                step="5000"
                value={monthlyRentPKR}
                onChange={(e) => setMonthlyRentPKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* FILER TOGGLE */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <div>
                <strong className="text-navy-950 block text-sm">Is the Property Owner an Active Taxpayer (ATL Filer)?</strong>
                <span className="text-gray-500 text-[11px]">Non-Filers pay double (100% higher) tax on rental income.</span>
              </div>
              <input
                type="checkbox"
                checked={isFiler}
                onChange={(e) => setIsFiler(e.target.checked)}
                className="accent-gold-500 w-5 h-5 shrink-0 ml-4"
              />
            </label>
          </div>

          {/* RIGHT RESULT DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6">
                <Sparkles size={16} />
                <span>Rental Tax Summary</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Gross Annual Rent:</span>
                  <span className="font-mono text-white font-semibold">Rs {annualRentPKR.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Effective Tax Rate:</span>
                  <span className="font-mono text-gold-400 font-bold">{effectiveTaxRate.toFixed(2)}%</span>
                </div>
              </div>

              {/* TAX DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  Annual Income Tax on Property Rent
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  Rs {Math.round(annualRentalTaxPKR).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/individual-tax-return"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File Property Tax Return with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
