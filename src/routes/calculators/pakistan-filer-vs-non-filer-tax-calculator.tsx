import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  DollarSign,
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Percent,
  Landmark,
  ChevronDown,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/calculators/pakistan-filer-vs-non-filer-tax-calculator")({
  head: () => ({
    meta: [
      { title: "Pakistan Filer vs Non-Filer Tax Savings Calculator (2026/2027) | ADVAQ" },
      {
        name: "description",
        content:
          "Free interactive Pakistan Filer vs Non-Filer tax calculator. Calculate money saved on property purchases, car registration, bank transfers & FBR returns.",
      },
      {
        name: "keywords",
        content:
          "pakistan filer vs non filer tax savings calculator 2026, fbr active taxpayer list atl tax savings, section 236k 236c property tax non filer pakistan, fbr atl surcharge 1000 pkr",
      },
      {
        property: "og:title",
        content: "Pakistan Filer vs Non-Filer Tax Savings Calculator | ADVAQ",
      },
      {
        property: "og:description",
        content:
          "Calculate exact tax savings on property, vehicles, and bank transactions by restoring Active Taxpayer (ATL) Filer status.",
      },
      { property: "og:url", content: "/calculators/pakistan-filer-vs-non-filer-tax-calculator" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/calculators/pakistan-filer-vs-non-filer-tax-calculator" }],
  }),
  component: PakistanTaxCalculatorPage,
});

function PakistanTaxCalculatorPage() {
  // Category Enable Toggles
  const [enablePropertyPurchase, setEnablePropertyPurchase] = useState<boolean>(true);
  const [propertyPurchaseValue, setPropertyPurchaseValue] = useState<number>(20000000);

  const [enablePropertySale, setEnablePropertySale] = useState<boolean>(true);
  const [propertySaleValue, setPropertySaleValue] = useState<number>(15000000);

  const [enableVehicle, setEnableVehicle] = useState<boolean>(true);
  const [carEngineCapacity, setCarEngineCapacity] = useState<number>(1300);

  const [enableBankCash, setEnableBankCash] = useState<boolean>(true);
  const [bankWithdrawalValue, setBankWithdrawalValue] = useState<number>(500000);

  const [enableForeignCard, setEnableForeignCard] = useState<boolean>(false);
  const [foreignCardValue, setForeignCardValue] = useState<number>(300000);

  const [enableItServices, setEnableItServices] = useState<boolean>(false);
  const [itServicesValue, setItServicesValue] = useState<number>(1000000);

  const [enableProfServices, setEnableProfServices] = useState<boolean>(false);
  const [profServicesValue, setProfServicesValue] = useState<number>(2000000);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Dynamic Row Computation
  interface TaxRow {
    id: string;
    category: string;
    section: string;
    valueStr: string;
    filerTax: number;
    nonFilerTax: number;
    savings: number;
    ratesStr: string;
  }

  const comparisonRows: TaxRow[] = [];

  if (enablePropertyPurchase) {
    const filerTax = propertyPurchaseValue * 0.0125;
    const nonFilerTax = propertyPurchaseValue * 0.025;
    comparisonRows.push({
      id: "prop_buy",
      category: "Property Purchase",
      section: "Sec 236K",
      valueStr: `Rs ${(propertyPurchaseValue / 100000).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "1.25% vs 2.5%",
    });
  }

  if (enablePropertySale) {
    const filerTax = propertySaleValue * 0.0275;
    const nonFilerTax = propertySaleValue * 0.055;
    comparisonRows.push({
      id: "prop_sell",
      category: "Property Sale",
      section: "Sec 236C",
      valueStr: `Rs ${(propertySaleValue / 100000).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "2.75% vs 5.5%",
    });
  }

  if (enableVehicle) {
    let filerTax = 25000;
    let nonFilerTax = 75000;
    let ratesStr = "Rs 25k vs Rs 75k";
    if (carEngineCapacity === 1000) {
      filerTax = 10000;
      nonFilerTax = 30000;
      ratesStr = "Rs 10k vs Rs 30k";
    } else if (carEngineCapacity === 2000) {
      filerTax = 150000;
      nonFilerTax = 450000;
      ratesStr = "Rs 150k vs Rs 450k";
    }
    comparisonRows.push({
      id: "vehicle",
      category: `Vehicle Reg (${carEngineCapacity}cc)`,
      section: "Sec 231B",
      valueStr: `${carEngineCapacity} cc`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr,
    });
  }

  if (enableBankCash) {
    const filerTax = 0;
    const nonFilerTax = bankWithdrawalValue * 0.008;
    comparisonRows.push({
      id: "bank_cash",
      category: "Cash Withdrawal",
      section: "Sec 231AB",
      valueStr: `Rs ${(bankWithdrawalValue / 100000).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "0% vs 0.8%",
    });
  }

  if (enableForeignCard) {
    const filerTax = foreignCardValue * 0.005;
    const nonFilerTax = foreignCardValue * 0.010;
    comparisonRows.push({
      id: "foreign_card",
      category: "Foreign Card Spending",
      section: "Sec 236Y",
      valueStr: `Rs ${(foreignCardValue / 100000).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "0.5% vs 1.0%",
    });
  }

  if (enableItServices) {
    const filerTax = itServicesValue * 0.04;
    const nonFilerTax = itServicesValue * 0.08;
    comparisonRows.push({
      id: "it_services",
      category: "IT / ITeS Services WHT",
      section: "Sec 153(1)(b)",
      valueStr: `Rs ${(itServicesValue / 100000).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "4% vs 8%",
    });
  }

  if (enableProfServices) {
    const filerTax = profServicesValue * 0.15;
    const nonFilerTax = profServicesValue * 0.30;
    comparisonRows.push({
      id: "prof_services",
      category: "Independent Professional",
      section: "Sec 153(1)(b)",
      valueStr: `Rs ${(profServicesValue / 100000).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "15% vs 30%",
    });
  }

  const totalFilerTax = comparisonRows.reduce((acc, r) => acc + r.filerTax, 0);
  const totalNonFilerTax = comparisonRows.reduce((acc, r) => acc + r.nonFilerTax, 0);
  const totalTaxSavings = totalNonFilerTax - totalFilerTax;

  // JSON-LD Schemas for AEO & AIO Google Search Engines
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://advaq.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://advaq.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Pakistan Calculators", item: "https://advaq.com/calculators/pakistan" },
      { "@type": "ListItem", position: 4, name: "Pakistan Filer Tax Savings Calculator", item: "https://advaq.com/calculators/pakistan-filer-vs-non-filer-tax-calculator" },
    ],
  };

  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Filer vs Non-Filer Tax Savings Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-filer-vs-non-filer-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate money saved on property purchases (Section 236K/236C), vehicle registration, cash withdrawals, and FBR annual returns by restoring FBR Active Taxpayer (ATL) Filer status.",
    publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  };

  const faqs = [
    {
      q: "What is the difference between Filer and Non-Filer in Pakistan?",
      a: "An Active Taxpayer (Filer) is a person whose name appears on the FBR Active Taxpayer List (ATL) after filing an annual income tax return. Non-Filers face 100% to 350% higher penalty withholding tax rates on property transfers, vehicle purchases, bank transactions, and dividends.",
    },
    {
      q: "How much property tax is saved under Section 236K by being a Filer?",
      a: "Under Section 236K, a Filer pays 1.25% buyer advance withholding tax on property purchases, whereas a Non-Filer pays 2.5%, saving over 50% of the tax amount.",
    },
    {
      q: "How can I activate my Active Taxpayer List (ATL) status instantly?",
      a: "By filing your annual income tax return for the relevant tax year and paying the statutory ATL surcharge (PKR 1,000 for individuals / PKR 10,000 for AOPs / PKR 20,000 for companies), your ATL status is updated on FBR Iris every Monday.",
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
            <span>Pakistan Filer Tax Savings</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight">
            Pakistan Filer vs Non-Filer Tax Savings Calculator (2026/2027)
          </h1>

          <p className="mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Select your transaction categories below to compare exact Filer vs Non-Filer FBR withholding tax amounts and calculate your total savings.
          </p>
        </div>
      </section>

      {/* CALCULATOR INTERFACE */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 mb-16">
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12">
          
          {/* LEFT INPUT PANEL */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40">
            <div className="border-b border-border pb-4">
              <h2 className="font-serif text-xl font-bold text-navy-950">Select & Customize Your Transactions</h2>
              <p className="text-xs text-gray-500 mt-1">Toggle categories and enter amounts to calculate live tax differences.</p>
            </div>

            {/* 1. PROPERTY PURCHASE */}
            <div className="bg-white border border-border p-4 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enablePropertyPurchase}
                    onChange={(e) => setEnablePropertyPurchase(e.target.checked)}
                    className="w-4 h-4 accent-gold-500 rounded cursor-pointer"
                  />
                  <span className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    1. Property Purchase (Sec 236K)
                  </span>
                </label>
                <span className="font-mono text-gold-600 font-bold text-xs">
                  Rs {(propertyPurchaseValue / 100000).toLocaleString()} Lacs
                </span>
              </div>
              {enablePropertyPurchase && (
                <div>
                  <input
                    type="range"
                    min="0"
                    max="100000000"
                    step="1000000"
                    value={propertyPurchaseValue}
                    onChange={(e) => setPropertyPurchaseValue(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                    <span>Rs 0</span>
                    <span>Rs 5 Crore</span>
                    <span>Rs 10 Crore</span>
                  </div>
                </div>
              )}
            </div>

            {/* 2. PROPERTY SALE */}
            <div className="bg-white border border-border p-4 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enablePropertySale}
                    onChange={(e) => setEnablePropertySale(e.target.checked)}
                    className="w-4 h-4 accent-gold-500 rounded cursor-pointer"
                  />
                  <span className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    2. Property Sale (Sec 236C)
                  </span>
                </label>
                <span className="font-mono text-gold-600 font-bold text-xs">
                  Rs {(propertySaleValue / 100000).toLocaleString()} Lacs
                </span>
              </div>
              {enablePropertySale && (
                <div>
                  <input
                    type="range"
                    min="0"
                    max="100000000"
                    step="1000000"
                    value={propertySaleValue}
                    onChange={(e) => setPropertySaleValue(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                    <span>Rs 0</span>
                    <span>Rs 5 Crore</span>
                    <span>Rs 10 Crore</span>
                  </div>
                </div>
              )}
            </div>

            {/* 3. VEHICLE REGISTRATION */}
            <div className="bg-white border border-border p-4 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableVehicle}
                    onChange={(e) => setEnableVehicle(e.target.checked)}
                    className="w-4 h-4 accent-gold-500 rounded cursor-pointer"
                  />
                  <span className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    3. Vehicle Registration (Sec 231B)
                  </span>
                </label>
                <span className="font-mono text-gold-600 font-bold text-xs">{carEngineCapacity} cc</span>
              </div>
              {enableVehicle && (
                <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                  <button
                    type="button"
                    onClick={() => setCarEngineCapacity(1000)}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      carEngineCapacity === 1000
                        ? "bg-navy-950 text-white border-gold-500 font-semibold"
                        : "bg-slate-50 text-gray-700 border-border"
                    }`}
                  >
                    <strong className="block text-xs">Under 1000cc</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCarEngineCapacity(1300)}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      carEngineCapacity === 1300
                        ? "bg-navy-950 text-white border-gold-500 font-semibold"
                        : "bg-slate-50 text-gray-700 border-border"
                    }`}
                  >
                    <strong className="block text-xs">1001cc – 1500cc</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCarEngineCapacity(2000)}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      carEngineCapacity === 2000
                        ? "bg-navy-950 text-white border-gold-500 font-semibold"
                        : "bg-slate-50 text-gray-700 border-border"
                    }`}
                  >
                    <strong className="block text-xs">Above 1800cc</strong>
                  </button>
                </div>
              )}
            </div>

            {/* 4. BANK CASH WITHDRAWAL */}
            <div className="bg-white border border-border p-4 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableBankCash}
                    onChange={(e) => setEnableBankCash(e.target.checked)}
                    className="w-4 h-4 accent-gold-500 rounded cursor-pointer"
                  />
                  <span className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    4. Cash Withdrawal &gt; 50k (Sec 231AB)
                  </span>
                </label>
                <span className="font-mono text-gold-600 font-bold text-xs">
                  Rs {(bankWithdrawalValue / 100000).toLocaleString()} Lacs
                </span>
              </div>
              {enableBankCash && (
                <div>
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    step="250000"
                    value={bankWithdrawalValue}
                    onChange={(e) => setBankWithdrawalValue(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                    <span>Rs 0</span>
                    <span>Rs 50 Lacs</span>
                    <span>Rs 100 Lacs (1 Cr)</span>
                  </div>
                </div>
              )}
            </div>

            {/* 5. FOREIGN CARD SPENDING */}
            <div className="bg-white border border-border p-4 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableForeignCard}
                    onChange={(e) => setEnableForeignCard(e.target.checked)}
                    className="w-4 h-4 accent-gold-500 rounded cursor-pointer"
                  />
                  <span className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    5. Foreign Card Spending (Sec 236Y)
                  </span>
                </label>
                <span className="font-mono text-gold-600 font-bold text-xs">
                  Rs {(foreignCardValue / 100000).toLocaleString()} Lacs
                </span>
              </div>
              {enableForeignCard && (
                <div>
                  <input
                    type="range"
                    min="0"
                    max="5000000"
                    step="50000"
                    value={foreignCardValue}
                    onChange={(e) => setForeignCardValue(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                    <span>Rs 0</span>
                    <span>Rs 25 Lacs</span>
                    <span>Rs 50 Lacs</span>
                  </div>
                </div>
              )}
            </div>

            {/* 6. IT & ITES SERVICES WHT */}
            <div className="bg-white border border-border p-4 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableItServices}
                    onChange={(e) => setEnableItServices(e.target.checked)}
                    className="w-4 h-4 accent-gold-500 rounded cursor-pointer"
                  />
                  <span className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    6. IT & ITeS Services (Sec 153(1)(b))
                  </span>
                </label>
                <span className="font-mono text-gold-600 font-bold text-xs">
                  Rs {(itServicesValue / 100000).toLocaleString()} Lacs
                </span>
              </div>
              {enableItServices && (
                <div>
                  <input
                    type="range"
                    min="0"
                    max="20000000"
                    step="500000"
                    value={itServicesValue}
                    onChange={(e) => setItServicesValue(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                    <span>Rs 0</span>
                    <span>Rs 1 Crore</span>
                    <span>Rs 2 Crore</span>
                  </div>
                </div>
              )}
            </div>

            {/* 7. INDEPENDENT PROFESSIONAL WHT */}
            <div className="bg-white border border-border p-4 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enableProfServices}
                    onChange={(e) => setEnableProfServices(e.target.checked)}
                    className="w-4 h-4 accent-gold-500 rounded cursor-pointer"
                  />
                  <span className="font-sans font-bold text-navy-950 text-xs uppercase tracking-wider">
                    7. Independent Professional (Sec 153(1)(b))
                  </span>
                </label>
                <span className="font-mono text-gold-600 font-bold text-xs">
                  Rs {(profServicesValue / 100000).toLocaleString()} Lacs
                </span>
              </div>
              {enableProfServices && (
                <div>
                  <input
                    type="range"
                    min="0"
                    max="20000000"
                    step="500000"
                    value={profServicesValue}
                    onChange={(e) => setProfServicesValue(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                    <span>Rs 0</span>
                    <span>Rs 1 Crore</span>
                    <span>Rs 2 Crore</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COMPARISON TABLE PANEL */}
          <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20">
            <div>
              <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-5">
                <div className="flex items-center gap-2 text-gold-400 font-semibold text-xs uppercase tracking-widest">
                  <Sparkles size={16} />
                  <span>Filer vs Non-Filer Audit</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px] uppercase">
                  TY 2027 Slabs
                </span>
              </div>

              {/* LIVE COMPARISON TABLE */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-navy-800 text-[10px] text-gold-400 uppercase tracking-wider">
                      <th className="pb-2">Category</th>
                      <th className="pb-2 text-right">Filer Tax</th>
                      <th className="pb-2 text-right">Non-Filer</th>
                      <th className="pb-2 text-right text-emerald-400">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-900 text-[11px]">
                    {comparisonRows.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-6 text-center text-navy-400 italic">
                          Select at least one category on the left to calculate tax savings.
                        </td>
                      </tr>
                    ) : (
                      comparisonRows.map((row) => (
                        <tr key={row.id} className="hover:bg-navy-900/60 transition-colors">
                          <td className="py-2.5 pr-2 font-sans font-medium text-white">
                            <div>{row.category}</div>
                            <span className="text-[9px] text-navy-200 font-mono block">{row.ratesStr}</span>
                          </td>
                          <td className="py-2.5 text-right text-emerald-400 font-bold">
                            Rs {Math.round(row.filerTax).toLocaleString()}
                          </td>
                          <td className="py-2.5 text-right text-red-400 font-bold">
                            Rs {Math.round(row.nonFilerTax).toLocaleString()}
                          </td>
                          <td className="py-2.5 text-right text-gold-400 font-bold">
                            Rs {Math.round(row.savings).toLocaleString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                  {comparisonRows.length > 0 && (
                    <tfoot>
                      <tr className="border-t-2 border-navy-800 font-bold text-xs">
                        <td className="pt-3 text-white font-sans uppercase">Total Tax</td>
                        <td className="pt-3 text-right text-emerald-400">Rs {Math.round(totalFilerTax).toLocaleString()}</td>
                        <td className="pt-3 text-right text-red-400">Rs {Math.round(totalNonFilerTax).toLocaleString()}</td>
                        <td className="pt-3 text-right text-gold-400">Rs {Math.round(totalTaxSavings).toLocaleString()}</td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>

              {/* TOTAL SAVINGS DISPLAY CARD */}
              <div className="bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6">
                <span className="text-xs text-gold-400 uppercase tracking-widest font-semibold block mb-1">
                  Total Money Saved by Becoming Filer
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-400">
                  Rs {Math.round(totalTaxSavings).toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-navy-800 text-xs text-navy-200 flex justify-between">
                  <span>Filer Status Benefit:</span>
                  <strong className="text-emerald-400 font-mono">
                    {totalNonFilerTax > 0 ? `${((totalTaxSavings / totalNonFilerTax) * 100).toFixed(0)}% Tax Saved` : `0%`}
                  </strong>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                to="/pakistan-services/atl-restoration"
                className="btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block"
              >
                Restore Filer Status with ADVAQ
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
                Live Step-by-Step Filer vs Non-Filer Tax Savings Audit
              </h2>
              <p className="text-xs text-navy-200 mt-1">
                Line-by-line breakdown of FBR 10th Schedule withholding tax penalty rates and net savings on your selected assets.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
            {/* STEP 1 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 1: Selected Categories</span>
                <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]">ATL Active</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Active Categories:</span> <strong className="text-white">{comparisonRows.length} Items</strong></div>
                <div className="flex justify-between"><span>Total Non-Filer Tax:</span> <strong className="text-red-400">Rs {Math.round(totalNonFilerTax).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Total Filer Tax:</span> <strong>Rs {Math.round(totalFilerTax).toLocaleString()}</strong></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 2: Property WHT Audit</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Sec 236K/236C</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Buyer Rate (236K):</span> <strong className="text-emerald-400">1.25% vs 2.5%</strong></div>
                <div className="flex justify-between"><span>Seller Rate (236C):</span> <strong className="text-emerald-400">2.75% vs 5.5%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Property Tax Relief:</span> <strong>50% WHT Discount</strong></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 3: Bank & Services WHT</span>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]">Sec 231AB / 153</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Cash Out (231AB):</span> <strong className="text-white">0% vs 0.8%</strong></div>
                <div className="flex justify-between"><span>IT Services (153):</span> <strong className="text-emerald-400">4% vs 8%</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Foreign Cards (236Y):</span> <strong>0.5% vs 1%</strong></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2">
                <span className="font-bold text-gold-400 uppercase tracking-wider text-[11px]">Step 4: Net Filer Benefit</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">Total Saved</span>
              </div>
              <div className="space-y-1.5 font-mono text-navy-200">
                <div className="flex justify-between"><span>Total Non-Filer Tax:</span> <strong className="text-red-400">Rs {Math.round(totalNonFilerTax).toLocaleString()}</strong></div>
                <div className="flex justify-between"><span>Total Filer Tax:</span> <strong className="text-emerald-400">Rs {Math.round(totalFilerTax).toLocaleString()}</strong></div>
                <div className="flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold"><span>Net Pocket Savings:</span> <strong>Rs {Math.round(totalTaxSavings).toLocaleString()}</strong></div>
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
                FBR Filer vs Non-Filer Withholding Tax Rates (2026/2027)
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 rounded-tl-xl">Transaction Type</th>
                  <th className="p-3.5">FBR Section</th>
                  <th className="p-3.5">Filer Rate</th>
                  <th className="p-3.5">Non-Filer Rate</th>
                  <th className="p-3.5 rounded-tr-xl">Tax Relief %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-800">
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Property Buyer WHT</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 236K</td>
                  <td className="p-3.5 font-bold text-emerald-600">1.25%</td>
                  <td className="p-3.5 font-bold text-red-600">2.5%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">1.25% Savings</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Property Seller WHT</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 236C</td>
                  <td className="p-3.5 font-bold text-emerald-600">2.75%</td>
                  <td className="p-3.5 font-bold text-red-600">5.5%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">2.75% Savings</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-navy-950">Bank Cash Withdrawal (Rs 50k+/day)</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 231AB</td>
                  <td className="p-3.5 font-bold text-emerald-600">0%</td>
                  <td className="p-3.5 font-bold text-red-600">0.8%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0.8% Savings</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3.5 font-bold text-navy-950">Foreign Card Remittance</td>
                  <td className="p-3.5 font-mono text-gray-600">Section 236Y</td>
                  <td className="p-3.5 font-bold text-emerald-600">0.5%</td>
                  <td className="p-3.5 font-bold text-red-600">1.0%</td>
                  <td className="p-3.5 font-mono text-emerald-600 font-bold">0.5% Savings</td>
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
              Frequently Asked Questions (FBR Active Taxpayer Status)
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
                      className={`text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? `rotate-180` : ``}`}
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
              Explore Related Pakistan FBR Tax Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Withholding Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Section 153 WHT Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate WHT rates for services (9%/18%), goods (5%/10%), and contracts.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-wht-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Property WHT
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  Property Transfer Tax Calculator (236K & 236C)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate Section 236K buyer WHT (3% vs 10.5%) and Section 236C seller WHT.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-property-tax-calculator"
                className="btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Launch Calculator <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                  Salary Tax
                </span>
                <h3 className="font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors">
                  FBR Salary & Business Tax Calculator
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Calculate progressive monthly and annual income tax slabs for salaried employees.
                </p>
              </div>
              <Link
                to="/calculators/pakistan-fbr-salary-tax-calculator"
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
              <Shield size={16} /> ADVAQ Registered Advocates & FBR Tax Consultants
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold">
              Become an FBR Active Taxpayer (ATL Filer) Today
            </h2>
            <p className="text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Our Pakistan tax team files your annual FBR Iris returns, wealth statements (Form 116), and activates your ATL Filer status within 24–48 hours.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/pakistan-services/atl-restoration"
                className="btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Activate ATL Filer Status <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
