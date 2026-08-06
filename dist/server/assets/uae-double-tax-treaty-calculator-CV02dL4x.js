import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Globe, ArrowRight } from "lucide-react";
const countryTreatyData = {
  pakistan: {
    name: "Pakistan - UAE DTT",
    flag: "🇵🇰",
    hasTreaty: true,
    rates: {
      dividends: {
        domesticWht: 15,
        treatyWht: 10
      },
      royalties: {
        domesticWht: 15,
        treatyWht: 12
      },
      interest: {
        domesticWht: 10,
        treatyWht: 10
      }
    }
  },
  uk: {
    name: "UK - UAE DTT",
    flag: "🇬🇧",
    hasTreaty: true,
    rates: {
      dividends: {
        domesticWht: 0,
        treatyWht: 0
      },
      royalties: {
        domesticWht: 20,
        treatyWht: 0
      },
      interest: {
        domesticWht: 20,
        treatyWht: 0
      }
    }
  },
  india: {
    name: "India - UAE DTT",
    flag: "🇮🇳",
    hasTreaty: true,
    rates: {
      dividends: {
        domesticWht: 20,
        treatyWht: 10
      },
      royalties: {
        domesticWht: 20,
        treatyWht: 10
      },
      interest: {
        domesticWht: 20,
        treatyWht: 12.5
      }
    }
  },
  germany: {
    name: "Germany - UAE DTT",
    flag: "🇩🇪",
    hasTreaty: true,
    rates: {
      dividends: {
        domesticWht: 26.375,
        treatyWht: 15
      },
      royalties: {
        domesticWht: 15.825,
        treatyWht: 0
      },
      interest: {
        domesticWht: 0,
        treatyWht: 0
      }
    }
  },
  canada: {
    name: "Canada - UAE DTT",
    flag: "🇨🇦",
    hasTreaty: true,
    rates: {
      dividends: {
        domesticWht: 25,
        treatyWht: 15
      },
      royalties: {
        domesticWht: 25,
        treatyWht: 10
      },
      interest: {
        domesticWht: 25,
        treatyWht: 15
      }
    }
  },
  australia: {
    name: "Australia - UAE DTT",
    flag: "🇦🇺",
    hasTreaty: true,
    rates: {
      dividends: {
        domesticWht: 30,
        treatyWht: 15
      },
      royalties: {
        domesticWht: 30,
        treatyWht: 10
      },
      interest: {
        domesticWht: 10,
        treatyWht: 10
      }
    }
  },
  usa: {
    name: "United States (No Treaty)",
    flag: "🇺🇸",
    hasTreaty: false,
    rates: {
      dividends: {
        domesticWht: 30,
        treatyWht: 30
      },
      royalties: {
        domesticWht: 30,
        treatyWht: 30
      },
      interest: {
        domesticWht: 30,
        treatyWht: 30
      }
    }
  }
};
function UAEDoubleTaxTreatyCalculatorPage() {
  const [partnerCountry, setPartnerCountry] = useState("pakistan");
  const [paymentType, setPaymentType] = useState("royalties");
  const [grossAmountAED, setGrossAmountAED] = useState(2e5);
  const [openFaq, setOpenFaq] = useState(0);
  const countryInfo = countryTreatyData[partnerCountry] || countryTreatyData.pakistan;
  const rateConfig = countryInfo.rates[paymentType];
  const domesticWhtRate = rateConfig.domesticWht;
  const treatyWhtRate = rateConfig.treatyWht;
  const domesticWhtAED = grossAmountAED * (domesticWhtRate / 100);
  const treatyWhtAED = grossAmountAED * (treatyWhtRate / 100);
  const taxSavingsAED = Math.max(0, domesticWhtAED - treatyWhtAED);
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
      name: "UAE Calculators",
      item: "https://advaq.com/calculators/uae"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "UAE Double Tax Treaty Calculator",
      item: "https://advaq.com/calculators/uae-double-tax-treaty-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Double Tax Treaty (DTT) Benefit Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uae-double-tax-treaty-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate cross-border withholding tax reductions and Foreign Tax Credit relief under 135+ UAE International Double Tax Treaties.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "How does withholding tax work on payments from foreign countries to UAE residents?",
    a: "When a foreign entity pays dividends, royalties, or interest to a UAE resident company or individual, the foreign country's domestic tax law may require withholding tax (WHT) to be deducted at source. Presenting a valid UAE Tax Residency Certificate (TRC) invokes the bilateral Double Tax Treaty (DTT) to cap or eliminate this withholding tax."
  }, {
    q: "Does the UAE impose any withholding tax on outbound payments?",
    a: "NO! Under UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022), the UAE domestic withholding tax rate is currently 0%. Outbound dividends, royalties, and interest paid by UAE entities to foreign recipients are not subject to UAE withholding tax."
  }, {
    q: "Why is there no tax reduction for payments from the United States (USA)?",
    a: "As of 2026, the United States and the United Arab Emirates do NOT have a bilateral comprehensive Income Tax Treaty in effect. Outbound payments of US-sourced fixed, determinable, annual, or periodical (FDAP) income to UAE entities are subject to the standard US Internal Revenue Code (IRS) 30% withholding tax."
  }, {
    q: "What document is required to claim Double Tax Treaty relief?",
    a: "To claim withholding tax relief under a UAE DTT, the receiving company or individual MUST present an official Tax Residency Certificate (TRC) issued by the Federal Tax Authority (FTA) of the UAE to the foreign paying agent."
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
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uae", className: "hover:underline", children: "UAE Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Double Tax Treaty Benefits" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Double Tax Treaty (DTT) Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate cross-border withholding tax reductions and Foreign Tax Credit relief under 135+ UAE International Tax Treaties." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Partner Payer Country:" }),
          /* @__PURE__ */ jsxs("select", { value: partnerCountry, onChange: (e) => setPartnerCountry(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "pakistan", children: "🇵🇰 Pakistan (Pakistan - UAE Tax Treaty)" }),
            /* @__PURE__ */ jsx("option", { value: "uk", children: "🇬🇧 United Kingdom (UK - UAE Tax Treaty)" }),
            /* @__PURE__ */ jsx("option", { value: "india", children: "🇮🇳 India (India - UAE Tax Treaty)" }),
            /* @__PURE__ */ jsx("option", { value: "germany", children: "🇩🇪 Germany (Germany - UAE Tax Treaty)" }),
            /* @__PURE__ */ jsx("option", { value: "canada", children: "🇨🇦 Canada (Canada - UAE Tax Treaty)" }),
            /* @__PURE__ */ jsx("option", { value: "australia", children: "🇦🇺 Australia (Australia - UAE Tax Treaty)" }),
            /* @__PURE__ */ jsx("option", { value: "usa", children: "🇺🇸 United States (No Comprehensive Tax Treaty)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "2. Select Payment Type:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setPaymentType("royalties"), className: `p-3 rounded-xl border text-center transition-all text-xs font-semibold ${paymentType === "royalties" ? "bg-navy-950 text-white border-gold-500 shadow" : "bg-white text-navy-950 border-border hover:border-gold-500/50"}`, children: "Royalties / IP" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setPaymentType("dividends"), className: `p-3 rounded-xl border text-center transition-all text-xs font-semibold ${paymentType === "dividends" ? "bg-navy-950 text-white border-gold-500 shadow" : "bg-white text-navy-950 border-border hover:border-gold-500/50"}`, children: "Dividends" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setPaymentType("interest"), className: `p-3 rounded-xl border text-center transition-all text-xs font-semibold ${paymentType === "interest" ? "bg-navy-950 text-white border-gold-500 shadow" : "bg-white text-navy-950 border-border hover:border-gold-500/50"}`, children: "Interest / Debt" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Gross Cross-Border Payment (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-sm", children: [
              "AED ",
              grossAmountAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "1000000", step: "25000", value: grossAmountAED, onChange: (e) => setGrossAmountAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        !countryInfo.hasTreaty && /* @__PURE__ */ jsxs("div", { className: "p-4 bg-amber-50 border border-amber-300 rounded-xl flex gap-3 text-xs text-amber-950", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0 mt-0.5", size: 18 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "block font-bold", children: "No UAE–US Comprehensive Tax Treaty Exists" }),
            /* @__PURE__ */ jsx("span", { children: "US domestic withholding tax of 30% applies on FDAP payments (dividends, royalties, interest) to UAE entities. A UAE Tax Residency Certificate (TRC) will not reduce US IRS withholding tax." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Treaty Savings Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Treaty Agreement:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                countryInfo.flag,
                " ",
                countryInfo.name
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Partner Country Domestic WHT Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                domesticWhtRate,
                "% (AED ",
                Math.round(domesticWhtAED).toLocaleString(),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Reduced WHT Rate Under UAE DTT:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-emerald-400 font-semibold", children: [
                treatyWhtRate,
                "% (AED ",
                Math.round(treatyWhtAED).toLocaleString(),
                ")"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Tax Savings via UAE Tax Residency Certificate (TRC)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-emerald-400", children: [
              "AED ",
              Math.round(taxSavingsAED).toLocaleString()
            ] }),
            countryInfo.hasTreaty && domesticWhtRate === 0 && /* @__PURE__ */ jsx("span", { className: "text-[11px] text-navy-300 block mt-1", children: "ℹ️ Partner country domestic WHT is already 0% on this payment category." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Apply for UAE Tax Residency Certificate (TRC)" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Double Tax Treaty Relief Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of bilateral withholding tax reduction via FTA Tax Residency Certificate (TRC)." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Foreign Payment & Country Audit" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                countryInfo.flag,
                " ",
                partnerCountry.toUpperCase()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Payment Category:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: paymentType.toUpperCase() })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Gross Payment Amount:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  grossAmountAED.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-red-400 font-bold", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  "Partner Country Domestic WHT (",
                  domesticWhtRate,
                  "%):"
                ] }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  Math.round(domesticWhtAED).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Bilateral DTT Reduced Rate" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                treatyWhtRate,
                "% Treaty Rate"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Reduced WHT Rate Under UAE DTT:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  treatyWhtRate,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Reduced WHT Deduction:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  Math.round(treatyWhtAED).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Net Cash Tax Savings" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Net Benefit" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Gross Tax Dollars Retained:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  Math.round(taxSavingsAED).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Net DTT Tax Relief Benefit:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  Math.round(taxSavingsAED).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: FTA TRC Certificate Compliance" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "TRC Required" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Prerequisite Document:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "FTA Tax Residency Certificate" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "ADVAQ Expedited TRC Issuance:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Issued in 5 Business Days" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-900/5 border border-gold-500/30 rounded-2xl p-6 space-y-2 text-xs text-navy-950 leading-relaxed", children: [
        /* @__PURE__ */ jsx("strong", { className: "text-gold-600 font-serif text-sm block", children: "📌 Statutory Note & Calculator Scope Disclaimer" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Withholding tax rates shown reflect the partner country's domestic rates on cross-border payments made to UAE residents. The United Arab Emirates imposes ",
          /* @__PURE__ */ jsx("strong", { children: "0% domestic withholding tax" }),
          " on outbound payments. Treaty rates apply upon submission of a valid UAE Tax Residency Certificate (TRC) to the foreign payer. Rates vary by payment category, shareholding percentage, and beneficial ownership status. This calculator is for illustrative purposes only — consult ADVAQ's cross-border tax team for formal legal advice."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Master Reference Table: Partner Country Domestic vs UAE DTT Rates" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Partner Country" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Payment Type" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Without Treaty (Domestic WHT)" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "With UAE DTT" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Tax Savings %" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "uk" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", rowSpan: 3, children: "🇬🇧 United Kingdom" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Dividends" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "0%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "0%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "uk" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Royalties" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "20%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "20% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "uk" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Interest" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "20%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "20% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "pakistan" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", rowSpan: 3, children: "🇵🇰 Pakistan" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Dividends" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "15%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "5% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "pakistan" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Royalties" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "15%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "12% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "3% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "pakistan" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Interest" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "10%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold", children: "10%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "0%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "india" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", rowSpan: 3, children: "🇮🇳 India" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Dividends" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "20%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "india" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Royalties" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "20%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "india" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Interest" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "20%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "12.5% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "7.5% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "germany" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", rowSpan: 3, children: "🇩🇪 Germany" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Dividends" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "26.375%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "15% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "11.375% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "germany" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Royalties" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "15.825%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "15.825% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "germany" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Interest" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "0%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "0%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "canada" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", rowSpan: 3, children: "🇨🇦 Canada" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Dividends" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "25%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "15% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "canada" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Royalties" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "25%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "15% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "canada" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Interest" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "25%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "15% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "australia" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", rowSpan: 3, children: "🇦🇺 Australia" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Dividends" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "30%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "15% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "15% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "australia" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Royalties" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "30%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "10% ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "20% Savings" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "australia" ? "bg-gold-500/10 font-bold" : "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Interest" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "10%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold", children: "10%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "0%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "usa" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", rowSpan: 3, children: "🇺🇸 USA" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Dividends" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "30%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "30% ❌ No Treaty" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-500", children: "0%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "usa" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Royalties" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "30%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "30% ❌ No Treaty" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-500", children: "0%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: partnerCountry === "usa" ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Interest" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "30%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "30% ❌ No Treaty" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-500", children: "0%" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UAE Tax Treaties)" })
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
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-40" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Globe, { size: 16 }),
            " ADVAQ International Tax Advisory Desk"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Obtain Your UAE Tax Residency Certificate (TRC) with ADVAQ" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our international tax consultants process your Tax Residency Certificate (TRC) application with the UAE Federal Tax Authority (FTA) to unlock Double Tax Treaty benefits worldwide." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Apply for UAE TRC Certificate ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp DTT Tax Consultant" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAEDoubleTaxTreatyCalculatorPage as component
};
