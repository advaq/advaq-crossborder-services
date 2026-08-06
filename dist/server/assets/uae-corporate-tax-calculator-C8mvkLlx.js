import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UAETaxCalculatorPage() {
  const [annualRevenueAED, setAnnualRevenueAED] = useState(15e5);
  const [annualNetProfitAED, setAnnualNetProfitAED] = useState(45e4);
  const [isQFZP, setIsQFZP] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const isEligibleForSBR = annualRevenueAED <= 3e6;
  const taxableProfitAbove375k = Math.max(0, annualNetProfitAED - 375e3);
  let standardCorporateTaxAED = taxableProfitAbove375k * 0.09;
  if (isQFZP) {
    standardCorporateTaxAED = 0;
  }
  const taxWithSBRAED = isEligibleForSBR || isQFZP ? 0 : standardCorporateTaxAED;
  const sbrSavingsAED = isEligibleForSBR || isQFZP ? standardCorporateTaxAED : 0;
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
      name: "UAE 9% Corporate Tax Calculator",
      item: "https://advaq.com/calculators/uae-corporate-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE 9% Corporate Tax & Small Business Relief Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uae-corporate-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UAE 9% Corporate Tax liability, AED 375,000 0% tax threshold, and AED 3M Small Business Relief (SBR) tax savings under Federal Decree-Law No. 47 of 2022.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the 0% UAE Corporate Tax profit threshold?",
    a: "Under Federal Decree-Law No. 47 of 2022, taxable net profit up to AED 375,000 is subject to 0% Corporate Tax. Taxable profit exceeding AED 375,000 is taxed at a flat rate of 9%."
  }, {
    q: "How does Ministerial Decision No. 73 Small Business Relief (SBR) work?",
    a: "Resident taxable persons with annual revenue of AED 3,000,000 or less in the relevant tax period can elect Small Business Relief, allowing them to be treated as having no taxable income and paying 0% Corporate Tax."
  }, {
    q: "Are all UAE companies required to register for Corporate Tax?",
    a: "YES! All UAE mainland companies, free zone companies, and foreign entities having a Permanent Establishment (PE) in the UAE must register with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN)."
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
          /* @__PURE__ */ jsx("span", { children: "UAE Corporate Tax & SBR Relief" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE 9% Corporate Tax & Small Business Relief Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate your exact UAE Corporate Tax liability, 0% threshold (under AED 375,000 profit), and AED 3M Small Business Relief (SBR) tax savings." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isEligibleForSBR ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-navy-900 border-gold-500 text-white"}`, children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "text-gold-500 shrink-0", size: 40 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isEligibleForSBR ? "🎉 Eligible for 0% Corporate Tax via Small Business Relief (SBR)!" : "Standard 9% Corporate Tax Rate Applies (Revenue > AED 3M)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isEligibleForSBR ? `Your revenue (AED ${(annualRevenueAED / 1e6).toFixed(2)}M) is below AED 3 Million limit. By electing Small Business Relief, your UAE Corporate Tax is AED 0!` : `Your revenue exceeds the AED 3 Million SBR limit. The standard 9% tax applies on net profits exceeding AED 375,000.` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Revenue (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              annualRevenueAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "100000", max: "6000000", step: "100000", value: annualRevenueAED, onChange: (e) => setAnnualRevenueAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "SBR Exemption Limit: AED 3,000,000." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Net Taxable Profit (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              annualNetProfitAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "50000", max: "2000000", step: "50000", value: annualNetProfitAED, onChange: (e) => setAnnualNetProfitAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "0% Threshold: AED 375,000 profit." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gray-500 uppercase", children: "Standard Corporate Tax (Without SBR)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-navy-950", children: [
            "AED ",
            Math.round(standardCorporateTaxAED).toLocaleString()
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Calculated as 9% on profit above AED 375k." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-3 shadow-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-gold-500 uppercase", children: "Net Corporate Tax Payable (With SBR Election)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
            "AED ",
            Math.round(taxWithSBRAED).toLocaleString()
          ] }),
          isEligibleForSBR && /* @__PURE__ */ jsxs("p", { className: "text-xs text-emerald-400 font-semibold", children: [
            "🎉 Small Business Relief saves you AED ",
            Math.round(sbrSavingsAED).toLocaleString(),
            "!"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need FTA Corporate Tax Registration & SBR Election?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Official FTA TRN registration & Small Business Relief filing." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Register Corporate Tax with ADVAQ" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step UAE Corporate Tax Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of Federal Decree-Law No. 47 of 2022 corporate tax brackets and SBR election." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Revenue & SBR Threshold Audit" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isEligibleForSBR ? "bg-emerald-500/20 text-emerald-400" : "bg-gold-500/20 text-gold-400"}`, children: isEligibleForSBR ? "SBR Eligible ✅" : "Exceeds SBR" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Gross Revenue:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  annualRevenueAED.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Ministerial Decision 73 SBR Cap:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "AED 3,000,000" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Net Profit & 0% Bracket Assessment" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "AED 375k Exemption" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Taxable Profit:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  annualNetProfitAED.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "0% Exemption Profit Threshold:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "AED 375,000" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Taxable Base Above 375k:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  taxableProfitAbove375k.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Standard 9% Corporate Tax" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]", children: "9% Statutory Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory 9% Tax Rate:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "9% on Profit > AED 375k" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Unadjusted Standard Tax:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-amber-400", children: [
                  "AED ",
                  Math.round(standardCorporateTaxAED).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Net Corporate Tax Payable" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                "AED ",
                Math.round(taxWithSBRAED),
                " Owed"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Net FTA Tax Payable:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  Math.round(taxWithSBRAED).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Small Business Relief Savings:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  Math.round(sbrSavingsAED).toLocaleString()
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UAE Corporate Tax Rate & Exemption Threshold Matrix" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Business Tax Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Net Profit Bracket" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Corporate Tax Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Statutory Reference" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: "bg-gold-500/10 font-bold", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-950", children: "Small Business Relief (SBR)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "Revenue ≤ AED 3,000,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% Corporate Tax ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Ministerial Decision No. 73" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "0% Profit Threshold" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "Net Profit ≤ AED 375,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% Corporate Tax ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Decree-Law No. 47 (Art. 3)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Standard Corporate Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600 font-bold", children: "Net Profit > AED 375,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600 font-bold", children: "9% on excess profit" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Decree-Law No. 47 (Art. 3)" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UAE Corporate Tax)" })
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
            " ADVAQ FTA Registered Tax Agency"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Register Corporate Tax & Elect SBR Relief with ADVAQ" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our FTA Registered Tax Agents register your company with the FTA, obtain your TRN, and file your Small Business Relief elections to secure 0% corporate tax status." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Register Corporate Tax with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp FTA Tax Agent" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAETaxCalculatorPage as component
};
