import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertCircle, CheckCircle2, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function USSalesTaxCalculatorPage() {
  const [annualUSRevenue, setAnnualUSRevenue] = useState(12e4);
  const [annualUSTransactions, setAnnualUSTransactions] = useState(250);
  const [sellsDigitalGoods, setSellsDigitalGoods] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const isNexusTriggered = annualUSRevenue >= 1e5 || annualUSTransactions >= 200;
  let statesCount = 0;
  if (annualUSRevenue > 5e5) statesCount = 15;
  else if (annualUSRevenue > 25e4) statesCount = 8;
  else if (isNexusTriggered) statesCount = 3;
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
      name: "US Sales Tax Economic Nexus Calculator",
      item: "https://advaq.com/calculators/us-sales-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Sales Tax Economic Nexus & Registration Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-sales-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate US state sales tax economic nexus thresholds ($100,000 revenue or 200 separate transactions) for foreign e-commerce and SaaS sellers.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is Economic Nexus in the United States?",
    a: "Following the landmark 2018 Supreme Court ruling (South Dakota v. Wayfair), out-of-state and foreign sellers are required to register, collect, and remit state sales tax once their sales into a specific state cross certain financial thresholds (typically $100,000 in annual revenue or 200 transactions)."
  }, {
    q: "Do foreign-owned LLCs selling digital software/SaaS pay state sales tax?",
    a: "It depends on the state. Many US states (such as New York, Texas, and Washington) tax SaaS and digital products, while others exempt un-downloaded cloud software. If your digital sales cross state nexus limits, you may need a state sales tax permit."
  }, {
    q: "How do Marketplace Facilitator Laws affect Amazon, Shopify, and Etsy sellers?",
    a: "Marketplaces like Amazon, eBay, and Etsy automatically collect and remit sales tax on behalf of sellers. However, direct Shopify or custom website sales processed via Stripe remain the seller's responsibility once economic nexus is reached."
  }, {
    q: "What are the 5 US states with NO state sales tax?",
    a: "Alaska, Delaware, Montana, New Hampshire, and Oregon (the 'NOMAD' states) do not levy a general state sales tax."
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
          /* @__PURE__ */ jsx("span", { children: "US Sales Tax Nexus" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US Sales Tax Economic Nexus Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Determine where your Stripe, Shopify, or Amazon store triggers Economic Nexus ($100k revenue or 200 transactions) across US states." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isNexusTriggered ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-emerald-50 border-emerald-300 text-emerald-950"}`, children: [
        isNexusTriggered ? /* @__PURE__ */ jsx(AlertCircle, { className: "text-amber-600 shrink-0", size: 40 }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 40 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isNexusTriggered ? `⚠️ Economic Nexus Triggered in ~${statesCount} US States` : "Below Economic Nexus Thresholds (No Sales Tax Permit Required)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isNexusTriggered ? "Your US sales or transaction volume has crossed the $100,000 or 200 transaction threshold in major states. You must register for US Sales Tax permits and collect tax on checkout." : "Your US sales are below the threshold in all 45 sales-tax states. No state sales tax registration is currently required." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Total US Gross Sales ($):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              annualUSRevenue.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10000", max: "600000", step: "10000", value: annualUSRevenue, onChange: (e) => setAnnualUSRevenue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Benchmark Limit: $100,000 per state." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Annual Separate US Orders / Transactions:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              annualUSTransactions,
              " Orders"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10", max: "500", step: "10", value: annualUSTransactions, onChange: (e) => setAnnualUSTransactions(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Benchmark Limit: 200 transactions per state." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-semibold text-navy-950", children: "Need US State Sales Tax Registration & Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "State permit registration, TaxJar/Avalara setup & monthly filing." })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/us-services/corporate-tax-return", className: "btn-gold uppercase text-xs tracking-wider px-6 py-3 font-semibold shrink-0", children: "Get Sales Tax Assistance" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Economic Nexus Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of South Dakota v. Wayfair sales tax registration obligations." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Gross Sales Base" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "$",
                annualUSRevenue.toLocaleString(),
                " Revenue"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual US Sales:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  annualUSRevenue.toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Standard State Threshold:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "$100,000 USD / State" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Revenue Benchmark:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: annualUSRevenue >= 1e5 ? "EXCEEDED ($100k Limit Triggered)" : "SAFE (Below $100k Limit)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Transaction Volume Base" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                annualUSTransactions,
                " Orders"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Orders / Transactions:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  annualUSTransactions,
                  " Orders"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Standard State Threshold:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "200 Transactions / State" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Volume Benchmark:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: annualUSTransactions >= 200 ? "EXCEEDED (200 Orders Triggered)" : "SAFE (Below 200 Orders)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Affected US States Count" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isNexusTriggered ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`, children: isNexusTriggered ? `~${statesCount} States Triggered` : "0 States Triggered ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Nomad States (0% Sales Tax):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "DE, MT, NH, OR, AK (No Tax)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "High Volume State Exposure:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isNexusTriggered ? "text-amber-400" : "text-emerald-400", children: isNexusTriggered ? `~${statesCount} States Require Permits` : "0 Permits Required" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Permit Registration Verdict" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isNexusTriggered ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`, children: isNexusTriggered ? "Permits Required ⚠️" : "No Tax Collection Needed ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Tax Collection Requirement:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: isNexusTriggered ? "Collect at Checkout (Stripe/Shopify)" : "0% Tax Collected" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Action Required:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isNexusTriggered ? "text-amber-400" : "text-emerald-400", children: isNexusTriggered ? "Register State Sales Tax Permits" : "Monitor Annual Revenue Monthly" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Top State Sales Tax Economic Nexus Thresholds (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "US State" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Economic Nexus Threshold" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "SaaS & Digital Goods Taxability" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Filing Frequency" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "California" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "$500,000 Revenue" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "Exempt (Un-downloaded SaaS)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Quarterly / Monthly" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Texas" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "$500,000 Revenue" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-red-600 font-bold", children: "Taxable (80% Taxable Base)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Quarterly / Annual" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "New York" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "$500,000 + 100 Transactions" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-red-600 font-bold", children: "Taxable (SaaS Taxable)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Quarterly" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (US Sales Tax)" })
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
            " ADVAQ US Sales Tax Compliance"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need US Sales Tax State Registration & Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our US state tax specialists register sales tax permits, configure Stripe Tax / TaxJar, and file recurring state returns." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/corporate-tax-return", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Get Sales Tax Permits ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Sales Tax Advisor" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USSalesTaxCalculatorPage as component
};
