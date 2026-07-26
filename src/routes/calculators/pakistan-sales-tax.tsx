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

export const Route = createFileRoute("/calculators/pakistan-sales-tax")({
  head: () => ({
    meta: [
      { title: "Pakistan Sales Tax on Services (PRA / SRB / FBR) Rate Calculator (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan provincial sales tax on services calculator. Compare PRA Punjab (16%), SRB Sindh (13%), KPRA (15%) & FBR ICT rates for IT & consultancy companies.",
      },
      {
        name: "keywords",
        content:
          "pakistan sales tax on services rate calculator 2026, pra punjab sales tax IT services, srb sindh sales tax rate software house",
      },
      {
        property: "og:title",
        content: "Pakistan Sales Tax on Services Rate Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate provincial sales tax liability across Punjab (PRA), Sindh (SRB), KPRA, and FBR.",
      },
      { property: "og:url", content: "/calculators/pakistan-sales-tax" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-sales-tax" }],
  }),
  component: PakistanSalesTaxCalculatorPage,
});

function PakistanSalesTaxCalculatorPage() {
  const [invoiceAmountPKR, setInvoiceAmountPKR] = useState<number>(500000); // 5 Lac PKR
  const [provinceAuthority, setProvinceAuthority] = useState<string>("pra");
  const [isExportService, setIsExportService] = useState<boolean>(false);

  // Provincial Rates for IT & Business Services (2026):
  // PRA (Punjab): 16% (or 5% reduced for IT without input tax)
  // SRB (Sindh): 13% (or 3% for IT)
  // KPRA (KPK): 15% (or 2% for IT)
  // FBR ICT (Islamabad): 15% (or 5% reduced)

  let salesTaxRate = 0.16;
  let authorityName = "PRA (Punjab Revenue Authority)";

  if (isExportService) {
    salesTaxRate = 0; // 0% Export Exemption
  } else {
    if (provinceAuthority === "pra") {
      salesTaxRate = 0.16;
      authorityName = "PRA (Punjab Revenue Authority)";
    } else if (provinceAuthority === "srb") {
      salesTaxRate = 0.13;
      authorityName = "SRB (Sindh Revenue Board)";
    } else if (provinceAuthority === "kpra") {
      salesTaxRate = 0.15;
      authorityName = "KPRA (KPK Revenue Authority)";
    } else {
      salesTaxRate = 0.15;
      authorityName = "FBR ICT (Islamabad Capital Territory)";
    }
  }

  const salesTaxAmountPKR = invoiceAmountPKR * salesTaxRate;
  const totalInvoiceWithTaxPKR = invoiceAmountPKR + salesTaxAmountPKR;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/calculators/pakistan" className="hover:underline">Pakistan Calculators</Link>
            <span>/</span>
            <span>Provincial Sales Tax Rates</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Sales Tax on Services Calculator (2026)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate provincial sales tax output across PRA (Punjab 16%), SRB (Sindh 13%), KPRA (15%), and FBR (ICT 15%) for IT, web, and marketing agencies.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20">
        <div className="bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8">
          {/* INPUTS */}
          <div className="grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border">
            {/* AUTHORITY */}
            <div>
              <label className="block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2">
                1. Select Provincial Tax Authority:
              </label>
              <select
                value={provinceAuthority}
                onChange={(e) => setProvinceAuthority(e.target.value)}
                className="w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500"
              >
                <option value="pra">PRA - Punjab Revenue Authority (16%)</option>
                <option value="srb">SRB - Sindh Revenue Board (13%)</option>
                <option value="kpra">KPRA - Khyber Pakhtunkhwa Revenue Authority (15%)</option>
                <option value="ict">FBR - Islamabad Capital Territory (15%)</option>
              </select>
            </div>

            {/* INVOICE VALUE */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                  2. Gross Service Invoice Amount (PKR):
                </label>
                <span className="font-mono text-gold-600 font-bold text-base">
                  Rs {invoiceAmountPKR.toLocaleString()} PKR
                </span>
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={invoiceAmountPKR}
                onChange={(e) => setInvoiceAmountPKR(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          {/* EXPORT TOGGLE */}
          <label className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500 text-xs">
            <input
              type="checkbox"
              checked={isExportService}
              onChange={(e) => setIsExportService(e.target.checked)}
              className="accent-gold-500 w-4 h-4"
            />
            <div>
              <strong className="text-navy-950 block text-sm">Export IT Service / Foreign Client Billing?</strong>
              <span className="text-gray-500">Export of IT & software services is 0% Zero-Rated across all provinces!</span>
            </div>
          </label>

          {/* RESULT CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6 bg-white space-y-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">Sales Tax Output ({authorityName})</span>
              <div className="text-3xl font-serif font-bold text-red-600">
                Rs {Math.round(salesTaxAmountPKR).toLocaleString()} PKR
              </div>
            </div>

            <div className="border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-2 shadow-lg">
              <span className="text-xs font-semibold text-gold-500 uppercase">Total Invoice Billed to Client</span>
              <div className="text-3xl font-serif font-bold text-white">
                Rs {Math.round(totalInvoiceWithTaxPKR).toLocaleString()} PKR
              </div>
            </div>
          </div>

          {/* CTA BANNER */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
            <div>
              <h4 className="font-serif text-lg font-semibold text-navy-950">Need Provincial Sales Tax Registration (PRA/SRB/FBR)?</h4>
              <p className="text-xs text-gray-600">Complete sales tax registration & monthly return filing.</p>
            </div>
            <Link to="/pakistan-services/sales-tax-registration" className="btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0">
              Register Sales Tax with ADVAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
