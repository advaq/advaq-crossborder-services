import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, ArrowRight, Shield } from "lucide-react";
function PakistanTaxCalculatorPage() {
  const [enablePropertyPurchase, setEnablePropertyPurchase] = useState(true);
  const [propertyPurchaseValue, setPropertyPurchaseValue] = useState(2e7);
  const [enablePropertySale, setEnablePropertySale] = useState(true);
  const [propertySaleValue, setPropertySaleValue] = useState(15e6);
  const [enableVehicle, setEnableVehicle] = useState(true);
  const [carEngineCapacity, setCarEngineCapacity] = useState(1300);
  const [enableBankCash, setEnableBankCash] = useState(true);
  const [bankWithdrawalValue, setBankWithdrawalValue] = useState(5e5);
  const [enableForeignCard, setEnableForeignCard] = useState(false);
  const [foreignCardValue, setForeignCardValue] = useState(3e5);
  const [enableItServices, setEnableItServices] = useState(false);
  const [itServicesValue, setItServicesValue] = useState(1e6);
  const [enableProfServices, setEnableProfServices] = useState(false);
  const [profServicesValue, setProfServicesValue] = useState(2e6);
  const [openFaq, setOpenFaq] = useState(0);
  const comparisonRows = [];
  if (enablePropertyPurchase) {
    const filerTax = propertyPurchaseValue * 0.0125;
    const nonFilerTax = propertyPurchaseValue * 0.025;
    comparisonRows.push({
      id: "prop_buy",
      category: "Property Purchase",
      section: "Sec 236K",
      valueStr: `Rs ${(propertyPurchaseValue / 1e5).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "1.25% vs 2.5%"
    });
  }
  if (enablePropertySale) {
    const filerTax = propertySaleValue * 0.0275;
    const nonFilerTax = propertySaleValue * 0.055;
    comparisonRows.push({
      id: "prop_sell",
      category: "Property Sale",
      section: "Sec 236C",
      valueStr: `Rs ${(propertySaleValue / 1e5).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "2.75% vs 5.5%"
    });
  }
  if (enableVehicle) {
    let filerTax = 25e3;
    let nonFilerTax = 75e3;
    let ratesStr = "Rs 25k vs Rs 75k";
    if (carEngineCapacity === 1e3) {
      filerTax = 1e4;
      nonFilerTax = 3e4;
      ratesStr = "Rs 10k vs Rs 30k";
    } else if (carEngineCapacity === 2e3) {
      filerTax = 15e4;
      nonFilerTax = 45e4;
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
      ratesStr
    });
  }
  if (enableBankCash) {
    const filerTax = 0;
    const nonFilerTax = bankWithdrawalValue * 8e-3;
    comparisonRows.push({
      id: "bank_cash",
      category: "Cash Withdrawal",
      section: "Sec 231AB",
      valueStr: `Rs ${(bankWithdrawalValue / 1e5).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "0% vs 0.8%"
    });
  }
  if (enableForeignCard) {
    const filerTax = foreignCardValue * 5e-3;
    const nonFilerTax = foreignCardValue * 0.01;
    comparisonRows.push({
      id: "foreign_card",
      category: "Foreign Card Spending",
      section: "Sec 236Y",
      valueStr: `Rs ${(foreignCardValue / 1e5).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "0.5% vs 1.0%"
    });
  }
  if (enableItServices) {
    const filerTax = itServicesValue * 0.04;
    const nonFilerTax = itServicesValue * 0.08;
    comparisonRows.push({
      id: "it_services",
      category: "IT / ITeS Services WHT",
      section: "Sec 153(1)(b)",
      valueStr: `Rs ${(itServicesValue / 1e5).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "4% vs 8%"
    });
  }
  if (enableProfServices) {
    const filerTax = profServicesValue * 0.15;
    const nonFilerTax = profServicesValue * 0.3;
    comparisonRows.push({
      id: "prof_services",
      category: "Independent Professional",
      section: "Sec 153(1)(b)",
      valueStr: `Rs ${(profServicesValue / 1e5).toFixed(1)} Lacs`,
      filerTax,
      nonFilerTax,
      savings: nonFilerTax - filerTax,
      ratesStr: "15% vs 30%"
    });
  }
  const totalFilerTax = comparisonRows.reduce((acc, r) => acc + r.filerTax, 0);
  const totalNonFilerTax = comparisonRows.reduce((acc, r) => acc + r.nonFilerTax, 0);
  const totalTaxSavings = totalNonFilerTax - totalFilerTax;
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://advaq.com"
    }, {
      "@type": "ListItem",
      position: 2,
      name: "Calculators",
      item: "https://advaq.com/calculators"
    }, {
      "@type": "ListItem",
      position: 3,
      name: "Pakistan Calculators",
      item: "https://advaq.com/calculators/pakistan"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "Pakistan Filer Tax Savings Calculator",
      item: "https://advaq.com/calculators/pakistan-filer-vs-non-filer-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Filer vs Non-Filer Tax Savings Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-filer-vs-non-filer-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate money saved on property purchases (Section 236K/236C), vehicle registration, cash withdrawals, and FBR annual returns by restoring FBR Active Taxpayer (ATL) Filer status.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the difference between Filer and Non-Filer in Pakistan?",
    a: "An Active Taxpayer (Filer) is a person whose name appears on the FBR Active Taxpayer List (ATL) after filing an annual income tax return. Non-Filers face 100% to 350% higher penalty withholding tax rates on property transfers, vehicle purchases, bank transactions, and dividends."
  }, {
    q: "How much property tax is saved under Section 236K by being a Filer?",
    a: "Under Section 236K, a Filer pays 1.25% buyer advance withholding tax on property purchases, whereas a Non-Filer pays 2.5%, saving over 50% of the tax amount."
  }, {
    q: "How can I activate my Active Taxpayer List (ATL) status instantly?",
    a: "By filing your annual income tax return for the relevant tax year and paying the statutory ATL surcharge (PKR 1,000 for individuals / PKR 10,000 for AOPs / PKR 20,000 for companies), your ATL status is updated on FBR Iris every Monday."
  }];
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-navy-950", children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdBreadcrumb)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdWebApp)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdFaq)
    } }),
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Pakistan Filer Tax Savings" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan Filer vs Non-Filer Tax Savings Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Select your transaction categories below to compare exact Filer vs Non-Filer FBR withholding tax amounts and calculate your total savings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-b border-border pb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-xl font-bold text-navy-950", children: "Select & Customize Your Transactions" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Toggle categories and enter amounts to calculate live tax differences." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: enablePropertyPurchase, onChange: (e) => setEnablePropertyPurchase(e.target.checked), className: "w-4 h-4 accent-gold-500 rounded cursor-pointer" }),
              /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "1. Property Purchase (Sec 236K)" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
              "Rs ",
              (propertyPurchaseValue / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          enablePropertyPurchase && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "100000000", step: "1000000", value: propertyPurchaseValue, onChange: (e) => setPropertyPurchaseValue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-gray-500 mt-1 font-mono", children: [
              /* @__PURE__ */ jsx("span", { children: "Rs 0" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 5 Crore" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 10 Crore" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: enablePropertySale, onChange: (e) => setEnablePropertySale(e.target.checked), className: "w-4 h-4 accent-gold-500 rounded cursor-pointer" }),
              /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. Property Sale (Sec 236C)" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
              "Rs ",
              (propertySaleValue / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          enablePropertySale && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "100000000", step: "1000000", value: propertySaleValue, onChange: (e) => setPropertySaleValue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-gray-500 mt-1 font-mono", children: [
              /* @__PURE__ */ jsx("span", { children: "Rs 0" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 5 Crore" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 10 Crore" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: enableVehicle, onChange: (e) => setEnableVehicle(e.target.checked), className: "w-4 h-4 accent-gold-500 rounded cursor-pointer" }),
              /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "3. Vehicle Registration (Sec 231B)" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
              carEngineCapacity,
              " cc"
            ] })
          ] }),
          enableVehicle && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs pt-1", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCarEngineCapacity(1e3), className: `p-2.5 rounded-lg border text-center transition-all ${carEngineCapacity === 1e3 ? "bg-navy-950 text-white border-gold-500 font-semibold" : "bg-slate-50 text-gray-700 border-border"}`, children: /* @__PURE__ */ jsx("strong", { className: "block text-xs", children: "Under 1000cc" }) }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCarEngineCapacity(1300), className: `p-2.5 rounded-lg border text-center transition-all ${carEngineCapacity === 1300 ? "bg-navy-950 text-white border-gold-500 font-semibold" : "bg-slate-50 text-gray-700 border-border"}`, children: /* @__PURE__ */ jsx("strong", { className: "block text-xs", children: "1001cc – 1500cc" }) }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCarEngineCapacity(2e3), className: `p-2.5 rounded-lg border text-center transition-all ${carEngineCapacity === 2e3 ? "bg-navy-950 text-white border-gold-500 font-semibold" : "bg-slate-50 text-gray-700 border-border"}`, children: /* @__PURE__ */ jsx("strong", { className: "block text-xs", children: "Above 1800cc" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: enableBankCash, onChange: (e) => setEnableBankCash(e.target.checked), className: "w-4 h-4 accent-gold-500 rounded cursor-pointer" }),
              /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "4. Cash Withdrawal > 50k (Sec 231AB)" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
              "Rs ",
              (bankWithdrawalValue / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          enableBankCash && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "10000000", step: "250000", value: bankWithdrawalValue, onChange: (e) => setBankWithdrawalValue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-gray-500 mt-1 font-mono", children: [
              /* @__PURE__ */ jsx("span", { children: "Rs 0" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 50 Lacs" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 100 Lacs (1 Cr)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: enableForeignCard, onChange: (e) => setEnableForeignCard(e.target.checked), className: "w-4 h-4 accent-gold-500 rounded cursor-pointer" }),
              /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "5. Foreign Card Spending (Sec 236Y)" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
              "Rs ",
              (foreignCardValue / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          enableForeignCard && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "5000000", step: "50000", value: foreignCardValue, onChange: (e) => setForeignCardValue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-gray-500 mt-1 font-mono", children: [
              /* @__PURE__ */ jsx("span", { children: "Rs 0" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 25 Lacs" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 50 Lacs" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: enableItServices, onChange: (e) => setEnableItServices(e.target.checked), className: "w-4 h-4 accent-gold-500 rounded cursor-pointer" }),
              /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "6. IT & ITeS Services (Sec 153(1)(b))" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
              "Rs ",
              (itServicesValue / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          enableItServices && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "20000000", step: "500000", value: itServicesValue, onChange: (e) => setItServicesValue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-gray-500 mt-1 font-mono", children: [
              /* @__PURE__ */ jsx("span", { children: "Rs 0" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 1 Crore" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 2 Crore" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: enableProfServices, onChange: (e) => setEnableProfServices(e.target.checked), className: "w-4 h-4 accent-gold-500 rounded cursor-pointer" }),
              /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "7. Independent Professional (Sec 153(1)(b))" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
              "Rs ",
              (profServicesValue / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          enableProfServices && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "20000000", step: "500000", value: profServicesValue, onChange: (e) => setProfServicesValue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[10px] text-gray-500 mt-1 font-mono", children: [
              /* @__PURE__ */ jsx("span", { children: "Rs 0" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 1 Crore" }),
              /* @__PURE__ */ jsx("span", { children: "Rs 2 Crore" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-4 mb-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-400 font-semibold text-xs uppercase tracking-widest", children: [
              /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
              /* @__PURE__ */ jsx("span", { children: "Filer vs Non-Filer Audit" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px] uppercase", children: "TY 2027 Slabs" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto mb-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs font-mono border-collapse", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-navy-800 text-[10px] text-gold-400 uppercase tracking-wider", children: [
              /* @__PURE__ */ jsx("th", { className: "pb-2", children: "Category" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2 text-right", children: "Filer Tax" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2 text-right", children: "Non-Filer" }),
              /* @__PURE__ */ jsx("th", { className: "pb-2 text-right text-emerald-400", children: "Savings" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-navy-900 text-[11px]", children: comparisonRows.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 4, className: "py-6 text-center text-navy-400 italic", children: "Select at least one category on the left to calculate tax savings." }) }) : comparisonRows.map((row) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-navy-900/60 transition-colors", children: [
              /* @__PURE__ */ jsxs("td", { className: "py-2.5 pr-2 font-sans font-medium text-white", children: [
                /* @__PURE__ */ jsx("div", { children: row.category }),
                /* @__PURE__ */ jsx("span", { className: "text-[9px] text-navy-200 font-mono block", children: row.ratesStr })
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "py-2.5 text-right text-emerald-400 font-bold", children: [
                "Rs ",
                Math.round(row.filerTax).toLocaleString()
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "py-2.5 text-right text-red-400 font-bold", children: [
                "Rs ",
                Math.round(row.nonFilerTax).toLocaleString()
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "py-2.5 text-right text-gold-400 font-bold", children: [
                "Rs ",
                Math.round(row.savings).toLocaleString()
              ] })
            ] }, row.id)) }),
            comparisonRows.length > 0 && /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsxs("tr", { className: "border-t-2 border-navy-800 font-bold text-xs", children: [
              /* @__PURE__ */ jsx("td", { className: "pt-3 text-white font-sans uppercase", children: "Total Tax" }),
              /* @__PURE__ */ jsxs("td", { className: "pt-3 text-right text-emerald-400", children: [
                "Rs ",
                Math.round(totalFilerTax).toLocaleString()
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "pt-3 text-right text-red-400", children: [
                "Rs ",
                Math.round(totalNonFilerTax).toLocaleString()
              ] }),
              /* @__PURE__ */ jsxs("td", { className: "pt-3 text-right text-gold-400", children: [
                "Rs ",
                Math.round(totalTaxSavings).toLocaleString()
              ] })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 uppercase tracking-widest font-semibold block mb-1", children: "Total Money Saved by Becoming Filer" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl sm:text-4xl font-serif font-bold text-gold-400", children: [
              "Rs ",
              Math.round(totalTaxSavings).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-navy-800 text-xs text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Filer Status Benefit:" }),
              /* @__PURE__ */ jsx("strong", { className: "text-emerald-400 font-mono", children: totalNonFilerTax > 0 ? `${(totalTaxSavings / totalNonFilerTax * 100).toFixed(0)}% Tax Saved` : `0%` })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-2", children: /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/atl-restoration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Restore Filer Status with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Filer vs Non-Filer Tax Savings Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line breakdown of FBR 10th Schedule withholding tax penalty rates and net savings on your selected assets." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Selected Categories" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "ATL Active" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Active Categories:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  comparisonRows.length,
                  " Items"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Non-Filer Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "Rs ",
                  Math.round(totalNonFilerTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Filer Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(totalFilerTax).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Property WHT Audit" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Sec 236K/236C" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Buyer Rate (236K):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "1.25% vs 2.5%" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Seller Rate (236C):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "2.75% vs 5.5%" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Property Tax Relief:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "50% WHT Discount" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Bank & Services WHT" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: "Sec 231AB / 153" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Cash Out (231AB):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "0% vs 0.8%" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "IT Services (153):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "4% vs 8%" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Foreign Cards (236Y):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "0.5% vs 1%" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Net Filer Benefit" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Total Saved" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Non-Filer Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "Rs ",
                  Math.round(totalNonFilerTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Filer Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "Rs ",
                  Math.round(totalFilerTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Pocket Savings:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(totalTaxSavings).toLocaleString()
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "FBR Filer vs Non-Filer Withholding Tax Rates (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Transaction Type" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "FBR Section" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Filer Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Non-Filer Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Tax Relief %" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Property Buyer WHT" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Section 236K" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "1.25%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "2.5%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "1.25% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Property Seller WHT" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Section 236C" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "2.75%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "5.5%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "2.75% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Bank Cash Withdrawal (Rs 50k+/day)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Section 231AB" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "0%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "0.8%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0.8% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Foreign Card Remittance" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Section 236Y" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "0.5%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "1.0%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0.5% Savings" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (FBR Active Taxpayer Status)" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-4xl mx-auto pt-4", children: faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : index), className: "w-full p-5 text-left font-serif text-sm sm:text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { children: faq.q }),
              /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? `rotate-180` : ``}` })
            ] }),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50", children: faq.a })
          ] }, index);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "border-b border-border pb-4", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Explore Related Pakistan FBR Tax Tools" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Withholding Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR Section 153 WHT Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate WHT rates for services (9%/18%), goods (5%/10%), and contracts." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-wht-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Property WHT" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "Property Transfer Tax Calculator (236K & 236C)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate Section 236K buyer WHT (3% vs 10.5%) and Section 236C seller WHT." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-property-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Salary Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR Salary & Business Tax Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate progressive monthly and annual income tax slabs for salaried employees." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-fbr-salary-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-40" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 16 }),
            " ADVAQ Registered Advocates & FBR Tax Consultants"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Become an FBR Active Taxpayer (ATL Filer) Today" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our Pakistan tax team files your annual FBR Iris returns, wealth statements (Form 116), and activates your ATL Filer status within 24–48 hours." }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/atl-restoration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
            "Activate ATL Filer Status ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  PakistanTaxCalculatorPage as component
};
