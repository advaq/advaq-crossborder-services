import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function USLLCVsCCorpCalculatorPage() {
  const [annualProfit, setAnnualProfit] = useState(1e5);
  const [openFaq, setOpenFaq] = useState(0);
  const llcTax = 0;
  const llcTakeHome = annualProfit - llcTax;
  const cCorpTax = annualProfit * 0.21;
  const cCorpNetAfterTax = annualProfit - cCorpTax;
  const cCorpDividendTax = cCorpNetAfterTax * 0.3;
  const cCorpTakeHome = cCorpNetAfterTax - cCorpDividendTax;
  const taxDifference = llcTakeHome - cCorpTakeHome;
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
      name: "USA Calculators",
      item: "https://advaq.com/calculators/usa"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "US LLC vs C-Corp Calculator",
      item: "https://advaq.com/calculators/us-llc-vs-c-corp-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US LLC vs C-Corporation Tax Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-llc-vs-c-corp-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare Single-Member US LLC pass-through tax efficiency against Delaware C-Corporation 21% flat tax and 30% dividend withholding tax.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Why is a Single-Member LLC better for bootstrapped foreign founders?",
    a: "A foreign-owned Single-Member LLC is treated as a disregarded pass-through entity by the IRS. If you have no physical presence (ETBUS) in the US, net profits pass through to you tax-free at the federal level (0% US income tax)."
  }, {
    q: "What is double taxation in a US C-Corporation?",
    a: "A C-Corporation pays 21% flat federal corporate tax on net profits. When remaining profits are distributed to foreign shareholders as dividends, an additional 30% US dividend withholding tax applies, creating 'double taxation'."
  }, {
    q: "Why do US venture capitalists insist on Delaware C-Corporations?",
    a: "VC funds and incubators like Y Combinator cannot invest in LLC pass-through entities due to fund mandate rules. They require standard stock classes (Preferred Shares), stock option pools (ESOP), and Delaware Court of Chancery governance."
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
          /* @__PURE__ */ jsx(Link, { to: "/calculators/usa", className: "hover:underline", children: "USA Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "LLC vs C-Corp Comparison" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US LLC vs C-Corporation Tax Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Compare 0% pass-through tax efficiency of a foreign-owned US LLC against the 21% corporate tax rate of a Delaware C-Corp." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider block", children: "Annual US Business Net Profit ($):" }),
        /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-gold-600", children: [
          "$",
          annualProfit.toLocaleString(),
          " USD"
        ] }),
        /* @__PURE__ */ jsx("input", { type: "range", min: "20000", max: "500000", step: "10000", value: annualProfit, onChange: (e) => setAnnualProfit(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2.5 bg-gray-200 rounded-lg" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white flex flex-col justify-between relative shadow-lg", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bg-gold-500 text-navy-950 text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-bl-xl", children: "Best for Bootstrapped / Agencies" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-white mb-2", children: "Single-Member US LLC" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mb-6", children: "Pass-through entity. 0% US Federal Income Tax for non-residents without ETBUS." }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-navy-200 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "US Corporate Tax Rate:" }),
                /* @__PURE__ */ jsx("strong", { className: "font-mono text-emerald-400", children: "0% (Pass-through)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Total US Federal Tax Paid:" }),
                /* @__PURE__ */ jsx("strong", { className: "font-mono text-emerald-400", children: "$0 USD" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-4 rounded-xl text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase font-semibold block mb-1", children: "Net Owner Take-Home" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "$",
              llcTakeHome.toLocaleString(),
              " USD"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-navy-950 mb-2", children: "Delaware C-Corporation" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-6", children: "Required for US VC fundraising & stock option pools. Subject to double taxation." }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-gray-700 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "21% Federal Corporate Tax:" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-red-600", children: [
                  "$",
                  Math.round(cCorpTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "30% Dividend Withholding Tax:" }),
                /* @__PURE__ */ jsxs("strong", { className: "font-mono text-red-600", children: [
                  "$",
                  Math.round(cCorpDividendTax).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 p-4 rounded-xl text-center border border-navy-100", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-600 uppercase font-semibold block mb-1", children: "Net Owner Take-Home" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
              "$",
              Math.round(cCorpTakeHome).toLocaleString(),
              " USD"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need Structure Advice from a US Tax Attorney?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Form Wyoming LLC or Delaware C-Corp with full tax structuring." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Form US Entity with ADVAQ" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step LLC vs C-Corp Tax Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of corporate tax, dividend withholding, and net founder take-home income." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Gross Net Profit Base" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                "$",
                annualProfit.toLocaleString(),
                " Net"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Net Revenue:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  annualProfit.toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "LLC IRS Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Disregarded Pass-Through" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "C-Corp IRS Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-amber-400", children: "Subchapter C Entity" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Federal Corporate Tax (21%)" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "LLC $0 Tax ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "LLC Corporate Tax (0%):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "$0 USD" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "C-Corp Corporate Tax (21%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "$",
                  Math.round(cCorpTax).toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "C-Corp Retained Earnings:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-gold-400", children: [
                  "$",
                  Math.round(cCorpNetAfterTax).toLocaleString(),
                  " USD"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Dividend Withholding Tax (30%)" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: "Double Tax ⚠️" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "LLC Owner Distribution Tax:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "$0 USD (0% Pass-Through)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "C-Corp Dividend Tax (30%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "$",
                  Math.round(cCorpDividendTax).toLocaleString(),
                  " USD"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Net Founder Take-Home Advantage" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                "LLC Saves $",
                Math.round(taxDifference).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "LLC Net Take-Home Pay:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  llcTakeHome.toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-navy-300", children: [
                /* @__PURE__ */ jsx("span", { children: "C-Corp Net Take-Home Pay:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  Math.round(cCorpTakeHome).toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "LLC Extra Annual Profit Kept:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "+$",
                  Math.round(taxDifference).toLocaleString(),
                  " USD"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "US LLC vs C-Corporation Decision Matrix (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Entity Metric" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Single-Member US LLC" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Delaware C-Corporation" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "IRS Taxation Model" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-emerald-600", children: "Pass-Through Disregarded Entity ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "Subchapter C Entity (Double Tax) ⚠️" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Federal Income Tax Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% (For non-residents w/o ETBUS)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "21% Flat Corporate Tax" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Dividend Withholding Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% (No Dividend Tax)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "30% Non-Resident Withholding" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (US Structure Choice)" })
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
            " ADVAQ US Tax & Entity Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Form Your Optimized US Entity Online Today" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Whether incorporating a 0% tax Wyoming LLC or a VC-ready Delaware C-Corp, ADVAQ provides end-to-end legal drafting, EIN, and banking setup." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Incorporate US Business with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp US Entity Advisor" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USLLCVsCCorpCalculatorPage as component
};
