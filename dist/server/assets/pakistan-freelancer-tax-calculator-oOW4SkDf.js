import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, BookOpen, HelpCircle, ChevronDown, ArrowRight, Shield } from "lucide-react";
function PakistanFreelancerTaxPage() {
  const [taxYear, setTaxYear] = useState("TY2027");
  const [isFiler, setIsFiler] = useState(true);
  const [isPsebRegistered, setIsPsebRegistered] = useState(true);
  const [monthlyIncomeUSD, setMonthlyIncomeUSD] = useState(2500);
  const [usdPkrRate, setUsdPkrRate] = useState(278);
  const [openFaq, setOpenFaq] = useState(0);
  const annualIncomeUSD = monthlyIncomeUSD * 12;
  const annualIncomePKR = annualIncomeUSD * usdPkrRate;
  let appliedWhtRate = 0.25;
  let taxRegimeNature = "Final Tax";
  if (isFiler && isPsebRegistered) {
    appliedWhtRate = 0.25;
    taxRegimeNature = "Final Tax";
  } else if (!isFiler && isPsebRegistered) {
    appliedWhtRate = 0.5;
    taxRegimeNature = "Final Tax (2x Non-Filer)";
  } else if (isFiler && !isPsebRegistered) {
    appliedWhtRate = 1;
    taxRegimeNature = "Final Tax";
  } else {
    appliedWhtRate = 2;
    taxRegimeNature = "Final Tax (2x Non-Filer)";
  }
  const annualTaxPKR = annualIncomePKR * (appliedWhtRate / 100);
  const monthlyTaxPKR = annualTaxPKR / 12;
  const normalCorporateTaxPKR = annualIncomePKR * 0.29;
  const taxSavingsPKR = normalCorporateTaxPKR - annualTaxPKR;
  const fcvaUsdRetainedMonthly = monthlyIncomeUSD * 0.5;
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
      name: "Pakistan Freelancer Tax Calculator",
      item: "https://advaq.com/calculators/pakistan-freelancer-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan Freelancer All-in-One Tax & FCVA Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-freelancer-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate Section 154A 0.25% reduced tax rates, PSEB tax credit savings, and State Bank of Pakistan Exporters' Special FCVA 50% USD retention limits for freelancers.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "How can Pakistani freelancers qualify for the 0.25% reduced tax rate under Section 154A?",
    a: "To qualify for the 0.25% final withholding tax rate on IT/ITES export proceeds under Section 154A of the Income Tax Ordinance 2001, freelancers must: 1) Register with PSEB (Pakistan Software Export Board), 2) File annual FBR tax returns, and 3) Receive payments directly in foreign currency through official banking channels with a Proceeds Realization Certificate (PRC)."
  }, {
    q: "What is an SBP Exporters' Special FCVA Account for freelancers?",
    a: "Under State Bank of Pakistan (SBP) Circulars, registered IT exporters and freelancers are allowed to open Special Foreign Currency Retention Accounts (FCVA) and retain up to 50% of their export proceeds in US Dollars, Euros, or GBP without mandatory conversion to PKR."
  }, {
    q: "Are freelancers required to pay Provincial Sales Tax (PRA / SRB / KPRA)?",
    a: "Exports of IT services and software development are zero-rated (0% sales tax) across all provincial tax jurisdictions (Punjab Revenue Authority PRA, Sindh Revenue Board SRB, KPRA) provided foreign exchange is realized through banking channels."
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
          /* @__PURE__ */ jsx("span", { children: "Freelancer Complete Tax Tool" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan Freelancer Complete Tax Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate Section 154A 0.25% reduced tax rates, PSEB tax credit savings, and SBP Exporters' FCVA 50% USD retention limits." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 px-6 py-2.5 rounded-xl border border-gold-500/40 shadow-md flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold font-mono text-gold-400 uppercase tracking-wider", children: "Tax Year 2026-27 (TY2027)" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white/50 p-6 rounded-2xl border border-border space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold text-navy-950 uppercase tracking-wider mb-2", children: "FILER STATUS" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-1 rounded-xl flex gap-1 border border-border", children: [
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsFiler(true), className: `flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${isFiler ? "bg-gold-500 text-navy-950 shadow-sm" : "text-gray-600 hover:text-navy-950"}`, children: "Active Filer" }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsFiler(false), className: `flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${!isFiler ? "bg-red-600 text-white shadow-sm" : "text-gray-600 hover:text-navy-950"}`, children: "Non-Filer" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold text-navy-950 uppercase tracking-wider mb-2", children: "PSEB STATUS" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-100 p-1 rounded-xl flex gap-1 border border-border", children: [
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsPsebRegistered(true), className: `flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${isPsebRegistered ? "bg-gold-500 text-navy-950 shadow-sm" : "text-gray-600 hover:text-navy-950"}`, children: "Registered" }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsPsebRegistered(false), className: `flex-1 py-2.5 rounded-lg text-xs font-bold transition-all ${!isPsebRegistered ? "bg-navy-900 text-white shadow-sm" : "text-gray-600 hover:text-navy-950"}`, children: "Not Registered" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold text-navy-950 uppercase tracking-wider", children: "EXPORT INCOME (USD / MO)" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
                "$",
                monthlyIncomeUSD.toLocaleString(),
                " USD"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-xs font-bold", children: "$" }),
                /* @__PURE__ */ jsx("input", { type: "number", value: monthlyIncomeUSD || "", onChange: (e) => setMonthlyIncomeUSD(Number(e.target.value)), placeholder: "e.g. 2500", className: "w-full pl-8 pr-4 py-2.5 bg-white border border-border rounded-xl font-mono text-sm font-bold text-navy-950 focus:border-gold-500 focus:outline-none" })
              ] }),
              /* @__PURE__ */ jsx("input", { type: "range", min: "500", max: "25000", step: "250", value: monthlyIncomeUSD, onChange: (e) => setMonthlyIncomeUSD(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold text-navy-950 uppercase tracking-wider", children: "USD ➔ PKR RATE" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-xs", children: [
                "1 USD = Rs ",
                usdPkrRate
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-xs font-bold", children: "Rs" }),
                /* @__PURE__ */ jsx("input", { type: "number", value: usdPkrRate || "", onChange: (e) => setUsdPkrRate(Number(e.target.value)), placeholder: "278", className: "w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl font-mono text-sm font-bold text-navy-950 focus:border-gold-500 focus:outline-none" })
              ] }),
              /* @__PURE__ */ jsx("input", { type: "range", min: "250", max: "320", step: "1", value: usdPkrRate, onChange: (e) => setUsdPkrRate(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-5 rounded-2xl space-y-1 shadow-md border border-navy-800", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gold-400 uppercase font-mono tracking-wider font-semibold block", children: "INCOME (PKR / MO)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-2xl font-serif font-bold text-white", children: [
              "Rs ",
              Math.round(monthlyIncomeUSD * usdPkrRate).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-navy-200 block font-mono pt-1 border-t border-navy-800", children: [
              "Annual Income: Rs ",
              Math.round(annualIncomePKR).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-amber-500/10 border-2 border-gold-500 p-5 rounded-2xl space-y-1 shadow-md", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gold-600 uppercase font-mono tracking-wider font-bold block", children: "ESTIMATED TAX (MONTHLY)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-2xl font-serif font-bold text-navy-950", children: [
              "Rs ",
              Math.round(monthlyTaxPKR).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-gray-600 block font-mono pt-1 border-t border-gold-500/20", children: [
              "Annual Tax: Rs ",
              Math.round(annualTaxPKR).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-5 rounded-2xl space-y-1 shadow-md border border-navy-800", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gold-400 uppercase font-mono tracking-wider font-semibold block", children: "TAX REGIME / NATURE" }),
            /* @__PURE__ */ jsx("div", { className: "text-base font-serif font-bold text-gold-400", children: taxRegimeNature }),
            /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-emerald-400 block font-mono pt-1 border-t border-navy-800 font-semibold", children: [
              "Rate: ",
              appliedWhtRate,
              "% Applied"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 font-mono flex items-center justify-between pt-1", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Rate applied: ",
            appliedWhtRate.toFixed(2),
            "% under Sec 154 / 154A."
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-emerald-600 font-bold", children: [
            "SBP FCVA 50% Retention: $",
            fcvaUsdRetainedMonthly.toLocaleString(),
            " USD / mo"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Freelancer IT Export Tax Audit" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line proof of 0.25% vs 1% SBR / FBR Concessional Export Tax Regime for $",
              monthlyIncomeUSD.toLocaleString(),
              " USD monthly revenue."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Gross Export Revenue" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "USD Remittance" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Monthly USD Earnings:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  monthlyIncomeUSD.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Exchange Rate:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Rs ",
                  usdPkrRate,
                  " / USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Revenue (PKR):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(annualIncomePKR).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: PSEB & FCVA Status" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Concession Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "PSEB Registered:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isPsebRegistered ? "text-emerald-400" : "text-amber-400", children: isPsebRegistered ? "YES (0.25% Rate)" : "NO (1.0% Rate)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Effective WHT Rate:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  appliedWhtRate,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Monthly USD Retention:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  fcvaUsdRetainedMonthly.toLocaleString(),
                  " USD"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Final FBR Tax Due" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Final Discharge" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Monthly FBR Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "Rs ",
                  Math.round(annualTaxPKR / 12).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Normal Tax Saved:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "Rs ",
                  Math.round(taxSavingsPKR).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Total Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  Math.round(annualTaxPKR).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: ADVAQ Compliance Package" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "PSEB + FBR" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "PSEB Registration:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Rs 15,000 Fee" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FBR IT Return Filing:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Included" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Exemption Certificate:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Issued in 48h" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Pakistan Freelancer Export Tax Regimes Compared" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Tax Regime / Status" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "FBR Provision" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Effective WHT Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "SBP FCVA 50% USD Retention" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "PSEB Registered Freelancer" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Section 154A (Final Tax)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "0.25% WHT" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-emerald-600", children: "Eligible (50% USD)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Unregistered Export Freelancer" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Section 154A (Standard)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-amber-600", children: "1.0% WHT" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "Restricted / Partial" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Social Media Content Creators (YouTube/FB/TikTok)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Section 154B (Minimum Tax)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-amber-600", children: "5.0% Min Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "Bank Account Specific" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Independent Professional (Local Software Engineer)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Section 153(1)(b)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "15% Filer / 30% Non-Filer" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "Not Applicable" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Non-Filer IT Freelancer" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Normal Slabs Regime" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "Up to 35% Slabs" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "Not Eligible" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Freelancer Tax & FCVA)" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-4xl mx-auto pt-4", children: faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : index), className: "w-full p-5 text-left font-serif text-sm sm:text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { children: faq.q }),
              /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })
            ] }),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50", children: faq.a })
          ] }, index);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "border-b border-border pb-4", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Explore Related Pakistan IT & Tax Tools" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "IT Export Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "Pakistan IT Exporter 100% Tax Credit Tool" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate Section 154A 0.25% WHT, PSEB registration savings, and SBP FCVA USD retention." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-it-export-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Sales Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "Provincial Sales Tax on Services (PRA / SRB / KPRA)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Compare PRA Punjab (16%), SRB Sindh (13%), and KPRA (15%) sales tax rates for IT firms." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-sales-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "SECP Setup" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "SECP Private Limited vs SMC Setup Cost Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate SECP company incorporation fees, NIFT digital signatures, and NTN registration." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-secp-cost-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
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
            " ADVAQ Registered PSEB & FBR IT Consultants"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Register with PSEB & Secure 0.25% Final Tax Status" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our IT export legal team handles PSEB freelancer registration, SBP FCVA bank account documentation, and FBR Section 154A tax return filings." }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/pseb-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
            "Register PSEB with ADVAQ ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  PakistanFreelancerTaxPage as component
};
