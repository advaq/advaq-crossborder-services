import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function USTrademarkCostCalculatorPage() {
  const [numberOfClasses, setNumberOfClasses] = useState(1);
  const [includeComprehensiveSearch, setIncludeComprehensiveSearch] = useState(true);
  const [includeAttorneyDrafting, setIncludeAttorneyDrafting] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const usptoGovtFeePerClass = 250;
  const totalGovtFee = numberOfClasses * usptoGovtFeePerClass;
  const searchFee = includeComprehensiveSearch ? 149 : 0;
  const attorneyFee = includeAttorneyDrafting ? 299 : 0;
  const totalTrademarkCost = totalGovtFee + searchFee + attorneyFee;
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
      name: "USPTO Trademark Fee Calculator",
      item: "https://advaq.com/calculators/us-trademark-cost-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "USPTO Trademark Filing Fee & Class Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-trademark-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate official USPTO trademark government application fees ($250/class) and US attorney representation costs.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Are non-US applicants required to hire a US-licensed attorney for USPTO trademarks?",
    a: "YES! Under USPTO rules effective since 2019, all foreign-domiciled applicants, individuals, and foreign businesses MUST be represented by an attorney who is licensed to practice law in the United States."
  }, {
    q: "What is the TEAS Plus vs TEAS Standard USPTO fee difference?",
    a: "TEAS Plus filing fee is $250 per class of goods/services (requires selecting pre-approved descriptions from the USPTO ID Manual). TEAS Standard is $350 per class (allows custom descriptions)."
  }, {
    q: "How long does a USPTO federal trademark registration take?",
    a: "The entire USPTO trademark registration process takes approximately 8 to 12 months from initial filing date to certificate issuance, assuming no substantive Office Action objections."
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
          /* @__PURE__ */ jsx("span", { children: "USPTO Trademark Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "USPTO Trademark Filing Fee & Class Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate official USPTO government fees ($250 per class), legal search fees, and attorney drafting costs." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Number of International Goods / Services Classes:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              numberOfClasses,
              " ",
              numberOfClasses === 1 ? "Class" : "Classes"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "1", max: "5", step: "1", value: numberOfClasses, onChange: (e) => setNumberOfClasses(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "E.g. Class 9 (Software/App) + Class 42 (IT Hosting) = 2 Classes." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeComprehensiveSearch, onChange: (e) => setIncludeComprehensiveSearch(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Comprehensive Trademark Conflict Search" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Searches USPTO database, state registers & web to prevent rejection." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$149" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeAttorneyDrafting, onChange: (e) => setIncludeAttorneyDrafting(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "US Licensed Attorney Filing & Office Action Defense" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Mandatory for non-US applicants under USPTO rules." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "$299" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "USPTO Filing Cost Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "USPTO Govt Fees (",
                numberOfClasses,
                "x $250):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "$",
                totalGovtFee
              ] })
            ] }),
            includeComprehensiveSearch && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Trademark Conflict Search:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$149" })
            ] }),
            includeAttorneyDrafting && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "US Attorney Filing:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white font-semibold", children: "$299" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Trademark Filing Cost" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "$",
              totalTrademarkCost,
              /* @__PURE__ */ jsx("span", { className: "text-xs text-navy-300 font-sans font-normal ml-2", children: "USD" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Register Trademark with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step USPTO Trademark Registration Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of TEAS class fees, conflict search, and mandatory US attorney representation." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: USPTO Government Class Fees" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "$",
                totalGovtFee,
                " Govt Fee"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "International Classes:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  numberOfClasses,
                  " Class(es)"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "USPTO TEAS Plus Rate:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "$250 USD / Class" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "USPTO Government Subtotal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  totalGovtFee,
                  " USD"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Legal Search & Clearance" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                "$",
                searchFee,
                " Search"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Conflict Search Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: includeComprehensiveSearch ? "Full USPTO + Common Law Search" : "Self-Search Only" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Office Action Prevention Rate:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "98.4% Success Rate" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: US Licensed Attorney Requirement" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "$",
                attorneyFee,
                " Legal Fee"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "USPTO Mandate for Non-US Applicants:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "100% Compliant US Counsel" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Specimen & Description Filing:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Professional Drafting Included" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Total Registration & Protection" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                "$",
                totalTrademarkCost,
                " Total"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Turnkey Filing Cost:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  totalTrademarkCost,
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Estimated USPTO Timeline:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "8–12 Months" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "USPTO Trademark Filing Fee & Class Structure Matrix" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "USPTO Filing Type" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Govt Fee per Class" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "US Attorney Required?" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Goods Description Rule" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: "bg-gold-500/10 font-bold", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-950", children: "TEAS Plus (Recommended)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "$250 / class" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "YES for Foreign Applicants" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Must select from USPTO ID Manual" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "TEAS Standard" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600 font-bold", children: "$350 / class" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "YES for Foreign Applicants" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Custom text descriptions permitted" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (USPTO Federal Trademark)" })
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
            " ADVAQ US Licensed Attorney Trademark Counsel"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Protect Your Brand with USPTO Federal Trademark Registration" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our US trademark attorneys conduct comprehensive searches, draft pre-approved goods descriptions, and file directly with the USPTO." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File Federal Trademark with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Attorney" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USTrademarkCostCalculatorPage as component
};
