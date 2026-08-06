import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertCircle, Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function USSelfEmploymentTaxCalculatorPage() {
  const [netSelfEmploymentIncome, setNetSelfEmploymentIncome] = useState(5e4);
  const [isNonResidentAlien, setIsNonResidentAlien] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const taxableSeEarnings = netSelfEmploymentIncome * 0.9235;
  const socialSecurityCap = 168600;
  const socialSecurityTax = Math.min(taxableSeEarnings, socialSecurityCap) * 0.124;
  let medicareTax = taxableSeEarnings * 0.029;
  if (taxableSeEarnings > 2e5) {
    medicareTax += (taxableSeEarnings - 2e5) * 9e-3;
  }
  const totalStandardSeTax = socialSecurityTax + medicareTax;
  const actualSeTaxOwed = isNonResidentAlien ? 0 : totalStandardSeTax;
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
      name: "US Self-Employment Tax Calculator",
      item: "https://advaq.com/calculators/us-self-employment-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Self-Employment Tax Calculator (15.3%) (2026/2027)",
    url: "https://advaq.com/calculators/us-self-employment-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate 15.3% US SECA Self-Employment Tax (Social Security & Medicare) and test Non-Resident Alien exemption under IRC Section 1402.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Do non-resident alien founders of single-member US LLCs pay US Self-Employment tax?",
    a: "No! Under Internal Revenue Code Section 1402(b), Self-Employment Tax (SECA) applies only to US citizens and US resident aliens. Non-Resident Aliens performing services outside the US are completely EXEMPT from the 15.3% Social Security and Medicare self-employment tax."
  }, {
    q: "What is the US Self-Employment Tax rate breakdown for US residents?",
    a: "For US tax residents, the self-employment tax rate is 15.3%, consisting of 12.4% Social Security (capped on net earnings up to $168,600) and 2.9% Medicare tax (uncapped, with an additional 0.9% tax on earnings above $200,000)."
  }, {
    q: "How does the 92.35% SE net earnings deduction rule work?",
    a: "Before calculating the 15.3% SE tax, the IRS allows taxpayers to multiply net profit by 92.35% (0.9235), which mimics the employer half of FICA taxes."
  }, {
    q: "Do I file Schedule SE if I am a non-resident alien?",
    a: "No. Non-resident aliens filing Form 1040-NR do not file Schedule SE unless they are subject to a specific international Totalization Agreement requiring Social Security coverage."
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
          /* @__PURE__ */ jsx("span", { children: "US Self-Employment Tax" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US Self-Employment Tax Calculator (15.3%) (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate 15.3% Schedule SE tax for freelancers and test Foreign Non-Resident Alien exemption eligibility." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { className: `p-5 rounded-xl border flex items-center gap-4 ${isNonResidentAlien ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-amber-50 border-amber-300 text-amber-950"}`, children: [
          isNonResidentAlien ? /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 32 }) : /* @__PURE__ */ jsx(AlertCircle, { className: "text-amber-600 shrink-0", size: 32 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-serif font-bold text-base", children: isNonResidentAlien ? "🎉 EXEMPT from 15.3% US Self-Employment Tax!" : "⚠️ Subject to 15.3% US Self-Employment Tax (Schedule SE)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-0.5", children: isNonResidentAlien ? "Under IRS Code Sec. 1402(b), Non-Resident Aliens performing services physically outside the US owe $0 Self-Employment tax!" : "US Tax Residents and Green Card holders must pay 15.3% SE tax on net self-employment earnings above $400." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Net Self-Employment Profit ($):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              netSelfEmploymentIncome.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "5000", max: "250000", step: "5000", value: netSelfEmploymentIncome, onChange: (e) => setNetSelfEmploymentIncome(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Non-Resident Alien Living Outside US?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Foreign contractor operating remotely from Pakistan/overseas." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isNonResidentAlien, onChange: (e) => setIsNonResidentAlien(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "SE Tax Calculation Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Net Self-Employment Profit:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                netSelfEmploymentIncome.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Taxable SE Base (92.35%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "$",
                Math.round(taxableSeEarnings).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Social Security Tax (12.4%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "$",
                Math.round(socialSecurityTax).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Medicare Tax (2.9%):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "$",
                Math.round(medicareTax).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Actual Self-Employment Tax Owed" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-emerald-400", children: [
              "$",
              Math.round(actualSeTaxOwed).toLocaleString()
            ] }),
            isNonResidentAlien && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[11px] text-gold-400", children: [
              "💰 You save $",
              Math.round(totalStandardSeTax).toLocaleString(),
              "/year under the Foreign Non-Resident exemption!"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Consult ADVAQ US Tax CPA" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Schedule C & SE Tax Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of 15.3% SE tax breakdown and IRC Sec. 1402(b) non-resident alien exemption." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Net Schedule C Earnings" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "$",
                netSelfEmploymentIncome.toLocaleString(),
                " Net"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Net Schedule C Profit:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  netSelfEmploymentIncome.toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "IRS 92.35% Taxable Base Adjustment:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-gold-400", children: [
                  "$",
                  Math.round(taxableSeEarnings).toLocaleString(),
                  " USD"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Social Security & Medicare Taxes" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]", children: "15.3% Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Social Security Tax (12.4%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  Math.round(socialSecurityTax).toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Medicare Tax (2.9%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  Math.round(medicareTax).toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Standard SE Tax Subtotal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  Math.round(totalStandardSeTax).toLocaleString(),
                  " USD"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Non-Resident Alien Exemption (IRC 1402)" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isNonResidentAlien ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`, children: isNonResidentAlien ? "Exempt ✅" : "Taxable (US Resident)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Residency Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: isNonResidentAlien ? "Foreign Non-Resident Alien" : "US Resident / Green Card" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "IRC Sec. 1402 Exemption:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isNonResidentAlien ? "text-emerald-400" : "text-red-400", children: isNonResidentAlien ? "100% Tax Relief ($0 Tax)" : "No Exemption" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final SE Tax Owed" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                "$",
                Math.round(actualSeTaxOwed),
                " Owed"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Actual SE Tax Owed:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  Math.round(actualSeTaxOwed).toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Foreign Founder Annual Savings:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  Math.round(totalStandardSeTax).toLocaleString(),
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
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "US Self-Employment Tax Rates & Exemption Matrix (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Tax Component" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "US Resident / Green Card" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Foreign Non-Resident Alien" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Social Security Tax (12.4%)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "12.4% (Capped at $168,600)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% EXEMPT (IRC 1402) ✅" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Medicare Tax (2.9%)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "2.9% Uncapped" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% EXEMPT (IRC 1402) ✅" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Combined SE Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "15.3% Total SE Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% Total SE Tax ✅" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (US Self-Employment Tax)" })
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
            " ADVAQ US Certified CPA Tax Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Protect Your 0% SE Tax Status with ADVAQ CPAs" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our US tax team ensures your foreign-owned LLC is structured correctly under IRC Section 1402 so you legally pay $0 in US Self-Employment taxes." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Consult ADVAQ US Tax CPA ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Tax CPA" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USSelfEmploymentTaxCalculatorPage as component
};
