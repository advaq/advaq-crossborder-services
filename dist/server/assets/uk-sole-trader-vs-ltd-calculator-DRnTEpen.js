import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UKSoleTraderVsLTDCalculatorPage() {
  const [annualProfit, setAnnualProfit] = useState(6e4);
  const [openFaq, setOpenFaq] = useState(0);
  const personalAllowance = 12570;
  const taxableProfitSoleTrader = Math.max(0, annualProfit - personalAllowance);
  let soleTraderIncomeTax = 0;
  if (taxableProfitSoleTrader <= 37700) {
    soleTraderIncomeTax = taxableProfitSoleTrader * 0.2;
  } else if (taxableProfitSoleTrader <= 112570) {
    soleTraderIncomeTax = 37700 * 0.2 + (taxableProfitSoleTrader - 37700) * 0.4;
  } else {
    soleTraderIncomeTax = 37700 * 0.2 + (112570 - 37700) * 0.4 + (taxableProfitSoleTrader - 112570) * 0.45;
  }
  let class4NI = 0;
  if (annualProfit > 12570) {
    const niBand1 = Math.min(Math.max(0, annualProfit - 12570), 37700);
    const niBand2 = Math.max(0, annualProfit - 50270);
    class4NI = niBand1 * 0.06 + niBand2 * 0.02;
  }
  const soleTraderTotalTax = soleTraderIncomeTax + class4NI;
  const soleTraderTakeHome = annualProfit - soleTraderTotalTax;
  const directorSalary = Math.min(annualProfit, 12570);
  const profitBeforeCT = Math.max(0, annualProfit - directorSalary);
  let ltdCorporationTax = 0;
  if (profitBeforeCT <= 5e4) {
    ltdCorporationTax = profitBeforeCT * 0.19;
  } else if (profitBeforeCT >= 25e4) {
    ltdCorporationTax = profitBeforeCT * 0.25;
  } else {
    const mainTax = profitBeforeCT * 0.25;
    const relief = (25e4 - profitBeforeCT) * (3 / 200);
    ltdCorporationTax = mainTax - relief;
  }
  const netDividends = Math.max(0, profitBeforeCT - ltdCorporationTax);
  const unusedPA = Math.max(0, personalAllowance - directorSalary);
  const dividendAllowance = 500;
  const taxableDividends = Math.max(0, netDividends - unusedPA - dividendAllowance);
  let dividendTax = 0;
  if (taxableDividends <= 37700) {
    dividendTax = taxableDividends * 0.1075;
  } else if (taxableDividends <= 112570) {
    dividendTax = 37700 * 0.1075 + (taxableDividends - 37700) * 0.3575;
  } else {
    dividendTax = 37700 * 0.1075 + (112570 - 37700) * 0.3575 + (taxableDividends - 112570) * 0.3935;
  }
  const ltdTotalTax = ltdCorporationTax + dividendTax;
  const ltdTakeHome = annualProfit - ltdTotalTax;
  const ltdExtraSavings = ltdTakeHome - soleTraderTakeHome;
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
      name: "UK Calculators",
      item: "https://advaq.com/calculators/uk"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "UK Sole Trader vs LTD Calculator",
      item: "https://advaq.com/calculators/uk-sole-trader-vs-ltd-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Sole Trader vs Limited Company Tax Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-sole-trader-vs-ltd-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare UK Sole Trader vs Limited Company tax efficiency, National Insurance savings, Corporation Tax, and net take-home pay.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "At what profit level is it better to switch from Sole Trader to a UK Limited Company?",
    a: "In the UK, forming a Limited Company typically becomes tax-superior once your annual net profits reach approximately £28,000 to £30,000 per year. Above this threshold, savings on Class 4 National Insurance and lower basic dividend tax rates outweigh company accounting costs."
  }, {
    q: "What is the key legal difference between a Sole Trader and a Limited Company?",
    a: "As a Sole Trader, there is no legal separation between you and your business—you have unlimited personal liability for business debts. A Limited Company is a separate legal entity, providing limited liability protection to safeguard your personal assets."
  }, {
    q: "How does National Insurance differ between Sole Traders and LTD Directors?",
    a: "Sole traders pay 6% Class 4 NI on profits between £12,570 and £50,270 (and 2% above). LTD Directors taking an optimal salary of £12,570 + dividends pay 0% Employee NI and 0% Class 4 NI on dividends, resulting in significant annual NI savings."
  }, {
    q: "What extra annual compliance is required for a UK Limited Company?",
    a: "UK Limited Companies must submit annual statutory accounts and a Confirmation Statement to Companies House, plus a CT600 Corporation Tax return to HMRC. Sole traders only submit an annual Self Assessment tax return."
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
          /* @__PURE__ */ jsx(Link, { to: "/calculators/uk", className: "hover:underline", children: "UK Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Sole Trader vs LTD" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Sole Trader vs Limited Company Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Compare side-by-side tax liability, National Insurance, Corporation Tax, and net take-home pay between Sole Trader and UK LTD." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-5 rounded-xl border border-gold-500/40 text-center shadow-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-gold-500 text-xs font-semibold uppercase tracking-widest mb-1", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
          /* @__PURE__ */ jsx("span", { children: "LTD Breakeven Analysis" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-serif text-xl sm:text-2xl text-white font-semibold", children: annualProfit >= 28e3 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "At ",
          /* @__PURE__ */ jsxs("span", { className: "text-gold-400", children: [
            "£",
            annualProfit.toLocaleString(),
            " profit"
          ] }),
          ", forming a UK LTD saves you ",
          /* @__PURE__ */ jsxs("span", { className: "text-emerald-400 font-mono", children: [
            "£",
            Math.round(ltdExtraSavings).toLocaleString(),
            "/year"
          ] }),
          " net vs Sole Trader!"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          "At ",
          /* @__PURE__ */ jsxs("span", { className: "text-gold-400", children: [
            "£",
            annualProfit.toLocaleString(),
            " profit"
          ] }),
          ", Sole Trader is simpler. The breakeven point where a UK LTD becomes tax-superior is ",
          /* @__PURE__ */ jsx("span", { className: "text-gold-400 font-mono", children: "~£28,000/year" }),
          " profit."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider block", children: "Annual Net Profit Before Tax (£):" }),
        /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-gold-600", children: [
          "£",
          annualProfit.toLocaleString()
        ] }),
        /* @__PURE__ */ jsx("input", { type: "range", min: "15000", max: "200000", step: "5000", value: annualProfit, onChange: (e) => setAnnualProfit(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg" }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500", children: [
          /* @__PURE__ */ jsx("span", { children: "£15,000" }),
          /* @__PURE__ */ jsx("span", { children: "£100,000" }),
          /* @__PURE__ */ jsx("span", { children: "£200,000" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4 pb-3 border-b border-border", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-navy-950", children: "Operating as Sole Trader" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium", children: "Self-Employed" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-gray-700 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Income Tax (20% / 40%):" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-navy-950", children: [
                  "£",
                  Math.round(soleTraderIncomeTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Class 4 National Insurance (6%):" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-navy-950", children: [
                  "£",
                  Math.round(class4NI).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border font-semibold text-sm", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Tax & NI Paid:" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-red-600", children: [
                  "£",
                  Math.round(soleTraderTotalTax).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 p-4 rounded-xl text-center border border-navy-100", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-600 uppercase font-semibold block mb-1", children: "Net Take-Home Pay" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
              "£",
              Math.round(soleTraderTakeHome).toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white flex flex-col justify-between relative overflow-hidden shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-bl-xl", children: "Most Tax Efficient" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4 pb-3 border-b border-white/10", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-white", children: "Operating as UK LTD" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium", children: "Director Salary + Dividends" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-navy-200 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Corporation Tax (19%):" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-white", children: [
                  "£",
                  Math.round(ltdCorporationTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Dividend Tax (10.75%+):" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-white", children: [
                  "£",
                  Math.round(dividendTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-white/10 font-semibold text-sm", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Tax Paid:" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-400", children: [
                  "£",
                  Math.round(ltdTotalTax).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-4 rounded-xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase font-semibold block mb-1", children: "Net Take-Home Pay" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "£",
              Math.round(ltdTakeHome).toLocaleString()
            ] }),
            ltdExtraSavings > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-xs text-emerald-400 font-semibold", children: [
              "🎉 Save £",
              Math.round(ltdExtraSavings).toLocaleString(),
              " extra per year with UK LTD!"
            ] })
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
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Sole Trader vs LTD Comparison Walkthrough" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line proof comparing tax efficiency for £",
              annualProfit.toLocaleString(),
              " annual profit."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Sole Trader Calculation" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: [
                "£",
                Math.round(soleTraderTotalTax).toLocaleString(),
                " Tax"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Profit:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  annualProfit.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Income Tax (20%/40%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-navy-300", children: [
                  "£",
                  Math.round(soleTraderIncomeTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Class 4 NI (6%/2%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-navy-300", children: [
                  "£",
                  Math.round(class4NI).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Sole Trader Net Take-Home:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(soleTraderTakeHome).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Sole traders pay Income Tax + Class 4 NI on 100% of profit above Personal Allowance." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Limited Company Structure" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "£",
                Math.round(ltdCorporationTax).toLocaleString(),
                " CT"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Profit:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  annualProfit.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Director Salary (-100% Expense):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "-£",
                  directorSalary.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Taxable Company Profit:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-navy-300", children: [
                  "£",
                  profitBeforeCT.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Available Dividends:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(netDividends).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Director salary reduces taxable profit before Corporation Tax is calculated." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Dividend Tax Extraction" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "£",
                Math.round(dividendTax).toLocaleString(),
                " Tax"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Gross Dividends Extracted:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(netDividends).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Taxable Dividends (after £500):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-navy-300", children: [
                  "£",
                  taxableDividends.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Dividend Tax (10.75%+):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-gold-400", children: [
                  "£",
                  Math.round(dividendTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "LTD Net Take-Home:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(ltdTakeHome).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Dividends incur 0% Class 4 NI and enjoy 10.75% basic rate." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final Net Advantage" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Comparison Verified" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Sole Trader Take-Home:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(soleTraderTakeHome).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "LTD Take-Home:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(ltdTakeHome).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Annual LTD Extra Savings:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "+£",
                  Math.round(ltdExtraSavings).toLocaleString(),
                  "/yr"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-navy-300 italic pt-1", children: [
              "💡 Operating as UK LTD is ",
              ltdExtraSavings > 0 ? "tax superior" : "less beneficial",
              " at £",
              annualProfit.toLocaleString(),
              " profit."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Sole Trader vs LTD)" })
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
            /* @__PURE__ */ jsx(Shield, { size: 16 }),
            " ADVAQ UK Chartered Tax Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Ready to Incorporate a UK Limited Company & Save Taxes?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UK chartered team handles complete LTD company registration, Companies House filings, HMRC tax setup, and director payroll configuration." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Form UK LTD with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Structuring Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKSoleTraderVsLTDCalculatorPage as component
};
