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

export const Route = createFileRoute("/calculators/pakistan-wht-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan FBR Withholding Tax (WHT) Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive FBR Withholding Tax (WHT) calculator. Calculate Section 153 services (9%/18%), goods (5%/10%), contracts (7.5%/15%) and Section 149 salary WHT rates.",
      },
      {
        name: "keywords",
        content:
          "pakistan fbr withholding tax calculator 2026, section 153 wht rate filer non filer pakistan, fbr salary withholding tax section 149 calculator",
      },
      {
        property: "og:title",
        content: "Pakistan FBR Withholding Tax (WHT) Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact FBR withholding tax deduction rates for services, goods, and contracts for Filers and Non-Filers.",
      },
      { property: "og:url", content: "/calculators/pakistan-wht-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-wht-calculator" }],
  }),
  component: PakistanWHTCalculatorPage,
});

function PakistanWHTCalculatorPage() {
  const [transactionType, setTransactionType] = useState<string>("services");
  const [invoiceAmountPKR, setInvoiceAmountPKR] = useState<number>(500000); // 5 Lacs PKR
  const [isFiler, setIsFiler] = useState<boolean>(true);

  // FBR WHT Rates 2026 (Section 153)
  // Services: Filer 9% vs Non-Filer 18% (or 11% corporate)
  // Goods: Filer 5% vs Non-Filer 10%
  // Contracts: Filer 7.5% vs Non-Filer 15%
  const whtRates: Record<string, { filer: number; nonFiler: number; label: string }> = {
    services: { filer: 9, nonFiler: 18, label: "Services (Section 153(1)(b))" },
    goods: { filer: 5, nonFiler: 10, label: "Sale of Goods (Section 153(1)(a))" },
    contracts: { filer: 7.5, nonFiler: 15, label: "Execution of Contracts (Section 153(1)(c))" },
  };

  const currentRate = whtRates[transactionType] || whtRates.services;
  const appliedRatePercent = isFiler ? currentRate.filer : currentRate.nonFiler;

  const whtDeductedAmountPKR = invoiceAmountPKR * (appliedRatePercent / 100);
  const netPaymentToVendorPKR = invoiceAmountPKR - whtDeductedAmountPKR;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>FBR Withholding Tax (WHT)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan FBR Withholding Tax (WHT) Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate Section 153 withholding tax deductions on invoices for services, goods, and contracts for ATL Filers vs Non-Filers.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          {/* LEFT INPUT CONTROLS (7 COLS) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            {/* TRANSACTION TYPE */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Payment Category (Section 153):
              </label>
              <select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="services">Services (Filer 9% / Non-Filer 18%)</option>
                <option value="goods">Supply of Goods (Filer 5% / Non-Filer 10%)</option>
                <option value="contracts">Execution of Contracts (Filer 7.5% / Non-Filer 15%)</option>
              </select>
            </div>

            {/* INVOICE AMOUNT */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  Gross Invoice Amount (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-sm">
                  Rs {invoiceAmountPKR.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="10000000"
                step="50000"
                value={invoiceAmountPKR}
                onChange={(e) => setInvoiceAmountPKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>

            {/* FILER TOGGLE */}
            <label className="flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
              <div>
                <strong className="text-navy-950 block text-sm">Is the Vendor / Payee an Active Taxpayer (ATL Filer)?</strong>
                <span className="text-gray-500 text-[11px]">Non-Filers are subject to double 100% higher WHT penalty rates.</span>
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
                <span>WHT Deduction Breakdown</span>
              </div>

              <div className="space-y-3 text-xs border-b border-white/10 pb-6 mb-6">
                <div className="flex justify-between items-center text-navy-200">
                  <span>Category:</span>
                  <span className="font-mono text-white font-semibold">{currentRate.label}</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Filer Status:</span>
                  <span className={`font-semibold ${isFiler ? "text-emerald-400" : "text-amber-400"}`}>
                    {isFiler ? "Active Filer" : "Non-Filer (2x Rate)"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Applied WHT Rate:</span>
                  <span className="font-mono text-gold-400 font-bold">{appliedRatePercent}%</span>
                </div>
                <div className="flex justify-between items-center text-navy-200">
                  <span>Net Payable to Vendor:</span>
                  <span className="font-mono text-emerald-400 font-bold">Rs {Math.round(netPaymentToVendorPKR).toLocaleString()}</span>
                </div>
              </div>

              {/* WHT DEDUCTED DISPLAY */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4">
                <span className="text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1">
                  WHT Tax to Deposit with FBR (CPR)
                </span>
                <div className="text-3xl font-serif font-bold text-white">
                  Rs {Math.round(whtDeductedAmountPKR).toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <Link
                to="/pakistan-services/withholding-compliance"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                File FBR WHT Statement with ADVAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
