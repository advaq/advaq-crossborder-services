import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Calculator, ArrowRight } from "lucide-react";
function UKCalculatorsHubPage() {
  const categories = [{
    title: "🔴 High Priority Tax Calculators",
    tools: [{
      name: "UK Self Assessment Tax Calculator",
      slug: "/calculators/uk-self-assessment",
      desc: "Calculate complete UK tax liability combining salary, freelance profit, rental income, and dividend earnings.",
      badge: "Most Searched"
    }, {
      name: "UK Corporation Tax & Marginal Relief Calculator",
      slug: "/calculators/uk-corporation-tax",
      desc: "Calculate 19% Small Profits Rate, 25% Main Rate, and exact Marginal Relief discount for £50k–£250k profits.",
      badge: "Director Must-Have"
    }, {
      name: "UK Capital Gains Tax (CGT) Calculator",
      slug: "/calculators/uk-capital-gains-tax",
      desc: "Calculate CGT on UK property sales (18%/24%) and stocks/crypto (10%/20%) with the £3,000 allowance.",
      badge: "Property & Shares"
    }, {
      name: "UK Tax & Dividend Optimizer Calculator",
      slug: "/calculators/uk-tax",
      desc: "Optimize director salary (£12,570), dividend tax rates (8.75%), Class 1 vs 2/4 NI, and SIPP pension tax relief.",
      badge: "Tax Efficiency"
    }, {
      name: "UK Sole Trader vs LTD Tax Savings Calculator",
      slug: "/calculators/uk-sole-trader-vs-ltd",
      desc: "Compare side-by-side tax liability and calculate exact breakeven point (~£28,000) for forming a UK LTD.",
      badge: "Breakeven Tool"
    }]
  }, {
    title: "🟡 Property, Payroll & Tech Relief Calculators",
    tools: [{
      name: "UK Stamp Duty Land Tax (SDLT) Calculator",
      slug: "/calculators/uk-stamp-duty",
      desc: "Calculate property purchase tax including +5% BTL surcharge and +2% Non-Resident Overseas Buyer surcharge.",
      badge: "Property Buyers"
    }, {
      name: "UK Payroll & PAYE Tax Calculator",
      slug: "/calculators/uk-payroll-paye",
      desc: "Calculate Employer NI (13.8%), Employee NI (8%), PAYE Income Tax, and Workplace Pension auto-enrolment.",
      badge: "Hiring & Payroll"
    }, {
      name: "UK R&D Tax Credit Estimator (Tech & IT)",
      slug: "/calculators/uk-rd-tax-credit",
      desc: "Calculate Merged RDEC 20% scheme tax reduction and cash refunds for software development and developer salaries.",
      badge: "IT & Software"
    }]
  }, {
    title: "🟢 Compliance, Banking & Decision Tools",
    tools: [{
      name: "Should I Register for UK VAT? Quiz Tool",
      slug: "/calculators/uk-vat-register-decision",
      desc: "Interactive 4-question quiz recommending Voluntary vs Mandatory registration vs Flat Rate Scheme.",
      badge: "Decision Tool"
    }, {
      name: "UK vs Pakistan Tax Comparison Tool",
      slug: "/calculators/uk-vs-pakistan-tax-comparison",
      desc: "Compare UK LTD dividends side-by-side with Pakistan FBR IT Export 0.25% tax exemption under DTT Article 22.",
      badge: "Dual Resident Special"
    }, {
      name: "UK VAT £90,000 Threshold & Scheme Calculator",
      slug: "/calculators/uk-vat",
      desc: "Monitor rolling 12-month UK turnover against £90,000 VAT limit and compare Flat Rate Scheme vs Standard 20% VAT.",
      badge: "VAT Compliance"
    }, {
      name: "UK LTD Overseas Formation & Compliance Cost",
      slug: "/calculators/uk-setup-cost",
      desc: "Calculate Companies House fees, London registered address, Wise business bank setup, CS01 & CT600 accounts.",
      badge: "Setup & Annual"
    }, {
      name: "HMRC & Companies House Late Filing Penalty Estimator",
      slug: "/calculators/uk-penalty-risk",
      desc: "Calculate exact statutory penalties, HMRC late interest (7.5%), and appeal success probability.",
      badge: "Penalty Risk"
    }, {
      name: "UK Business Bank Account Approval Probability Checker",
      slug: "/calculators/uk-bank-approval",
      desc: "Test Wise Business, Revolut, Tide, and WorldFirst approval odds and get top recommended bank matches.",
      badge: "Bank Matching"
    }]
  }];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators", className: "hover:underline", children: "Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Calculators" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "🇬🇧 UK Business & Tax Calculators Suite (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "14 interactive calculators for UK Limited Company directors, property investors, freelancers, and non-resident founders." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 py-16 space-y-16", children: categories.map((cat, idx) => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-navy-950 font-bold border-b border-border pb-3", children: cat.title }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: cat.tools.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: t.badge }),
            /* @__PURE__ */ jsx(Calculator, { size: 20, className: "text-navy-950 group-hover:text-gold-500 transition-colors" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mb-2 group-hover:text-gold-600 transition-colors", children: t.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: t.desc })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: t.slug, className: "btn-gold !py-3 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
          "Launch Calculator ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] })
      ] }, i)) })
    ] }, idx)) })
  ] });
}
export {
  UKCalculatorsHubPage as component
};
