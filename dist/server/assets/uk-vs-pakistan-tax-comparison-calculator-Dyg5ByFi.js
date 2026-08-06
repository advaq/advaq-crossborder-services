import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shield, ArrowRight, TrendingUp, BookOpen, HelpCircle, ChevronDown } from "lucide-react";
function UKVsPakistanTaxComparisonPage() {
  const [annualProfitGbp, setAnnualProfitGbp] = useState(5e4);
  const [openFaq, setOpenFaq] = useState(0);
  const pkrExchangeRate = 350;
  const salary = Math.min(annualProfitGbp, 12570);
  const profitForCt = Math.max(0, annualProfitGbp - salary);
  const ukCt = profitForCt * 0.19;
  const netDiv = profitForCt - ukCt;
  const taxableDiv = Math.max(0, netDiv - 500);
  const ukDivTax = taxableDiv > 37700 ? 37700 * 0.1075 + (taxableDiv - 37700) * 0.3575 : taxableDiv * 0.1075;
  const ukTotalTaxGbp = ukCt + ukDivTax;
  const ukNetTakeHomeGbp = annualProfitGbp - ukTotalTaxGbp;
  const pkFbrTaxGbp = annualProfitGbp * 25e-4;
  const pkNetTakeHomeGbp = annualProfitGbp - pkFbrTaxGbp;
  const pkAdvantageGbp = pkNetTakeHomeGbp - ukNetTakeHomeGbp;
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
      name: "UK vs Pakistan Tax Comparison Calculator",
      item: "https://advaq.com/calculators/uk-vs-pakistan-tax-comparison-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK vs Pakistan Business Tax Comparison Tool (2026/2027)",
    url: "https://advaq.com/calculators/uk-vs-pakistan-tax-comparison-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare UK Corporation Tax and Dividend tax with Pakistan FBR Section 154A 0.25% IT export tax under the UK-Pakistan Double Tax Treaty.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "How does the UK-Pakistan Double Taxation Agreement (DTT) prevent double taxation?",
    a: "Under the UK-Pakistan DTT (Article 22), dual-resident individuals and international founders receive Foreign Tax Credit relief. If you pay taxes to FBR in Pakistan, HMRC grants a credit against your UK tax liability for that same income, eliminating double taxation."
  }, {
    q: "Why is Pakistan FBR Section 154A 0.25% tax rate beneficial for IT exporters?",
    a: "Pakistan FBR Section 154A grants registered IT and software exporters a concessionary 0.25% final withholding tax rate on foreign currency remittances, plus 50% foreign currency retention in SBP FCVA accounts."
  }, {
    q: "Can a dual-resident founder operate both a UK LTD and a Pakistan SECP company?",
    a: "Yes. Many international software founders use a UK LTD for customer invoicing and payment gateways (Stripe, Wise) while contracting their Pakistani SECP software entity to perform technical development, achieving optimal tax efficiency."
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
          /* @__PURE__ */ jsx("span", { children: "UK vs Pakistan Tax Comparison" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "🇬🇧 UK vs 🇵🇰 Pakistan Tax Comparison Tool (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Side-by-side tax comparison for dual-resident & expat Pakistani founders: UK LTD dividends vs Pakistan FBR 0.25% IT Export Exemption." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center space-y-3 bg-off-white/60 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
          /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual International Profit (£ GBP):" }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-lg", children: [
            "£",
            annualProfitGbp.toLocaleString(),
            " (",
            (annualProfitGbp * pkrExchangeRate / 1e6).toFixed(2),
            "M PKR)"
          ] })
        ] }),
        /* @__PURE__ */ jsx("input", { type: "range", min: "10000", max: "200000", step: "5000", value: annualProfitGbp, onChange: (e) => setAnnualProfitGbp(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-2xl p-6 bg-white space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-border", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🇬🇧" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-navy-950 text-lg", children: "UK LTD Structure" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-navy-100 text-navy-900 px-3 py-1 rounded-full font-medium", children: "HMRC Rules" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-gray-700", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Corporation Tax (19%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "£",
                Math.round(ukCt).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Director Dividend Tax:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono", children: [
                "£",
                Math.round(ukDivTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border font-semibold text-navy-950", children: [
              /* @__PURE__ */ jsx("span", { children: "Total UK Tax Bill:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-600", children: [
                "£",
                Math.round(ukTotalTaxGbp).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border text-sm font-bold text-navy-950", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Take-Home Pay:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-600", children: [
                "£",
                Math.round(ukNetTakeHomeGbp).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-2xl p-6 bg-navy-950 text-white space-y-4 shadow-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-3 border-b border-white/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🇵🇰" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-white text-lg", children: "Pakistan IT Exporter" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full font-medium", children: "FBR 154A 0.25%" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-navy-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "FBR Sec 154A Final Tax (0.25%):" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-400", children: [
                "£",
                Math.round(pkFbrTaxGbp).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "SECP & PSEB Annual Compliance:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono text-white", children: "~£200" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 font-semibold text-white", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Pakistan Tax Bill:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-400", children: [
                "£",
                Math.round(pkFbrTaxGbp + 200).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-white", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Take-Home Pay:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-400", children: [
                "£",
                Math.round(pkNetTakeHomeGbp - 200).toLocaleString()
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-5 rounded-xl text-xs space-y-2 text-navy-950", children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-serif font-bold text-sm flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { size: 16, className: "text-gold-500" }),
          "UK-Pakistan Double Taxation Treaty (Article 22)"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "If you are resident in both UK and Pakistan, Article 22 of the Double Taxation Agreement ensures you never pay double tax. UK HMRC grants full Foreign Tax Credit relief for tax already paid to FBR Pakistan." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Book Cross-Border Structure Review ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step UK vs Pakistan Cross-Border Audit" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line proof of tax differential & DTT Article 22 foreign tax relief under £",
              annualProfitGbp.toLocaleString(),
              " profit."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: UK LTD Tax Breakdown" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "£",
                Math.round(ukTotalTaxGbp).toLocaleString(),
                " UK Tax"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Corporation Tax (19%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(ukCt).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Director Dividend Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(ukDivTax).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "UK Net Take-Home:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(ukNetTakeHomeGbp).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Pakistan FBR Sec 154A IT Export" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "0.25% Final Tax" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FBR IT Export Final Tax (0.25%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "£",
                  Math.round(pkFbrTaxGbp).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "SECP / PSEB Compliance:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "~£200" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Pakistan Net Take-Home:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(pkNetTakeHomeGbp - 200).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 50% foreign currency retention in SBP FCVA accounts." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Double Tax Treaty (DTT Article 22)" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Credit Protected" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "UK-Pakistan DTT Protection:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Article 22 Active ✅" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "HMRC Foreign Tax Credit:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Full Credit for FBR Tax" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Eliminates double taxation under statutory UK-PK international tax law." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Net Cross-Border Advantage" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Net Advantage" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Pakistan FBR Structure Advantage:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "+£",
                  Math.round(pkAdvantageGbp).toLocaleString(),
                  " / yr"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Hybrid UK-PK Structure Option:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Invoicing UK LTD + R&D PK Entity" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UK vs Pakistan Dual-Jurisdiction Tax Summary (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Feature / Tax Head" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "UK Limited Company" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Pakistan FBR IT Exporter" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "DTT Relief Rule" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Corporate Tax Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "19% – 25%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-emerald-600", children: "0.25% Final WHT (Sec 154A)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Article 22 Credit" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Director Dividend Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "8.75% / 33.75% / 39.35%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "Included in 0.25% Final Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "DTT Dividend Credit" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UK vs Pakistan Tax)" })
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
            " ADVAQ UK & Pakistan Dual-Qualified Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need Cross-Border Tax Structuring (UK & Pakistan)?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our dual-qualified UK chartered accountants & Pakistan FBR tax consultants structure compliant hybrid entities, manage Stripe/Wise invoicing, and claim Article 22 Double Tax Treaty relief." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Book Cross-Border Review ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Cross-Border Partner" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKVsPakistanTaxComparisonPage as component
};
