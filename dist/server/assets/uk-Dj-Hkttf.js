import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, Calculator, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
function UKCalculatorsHubPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const keyRates = [{
    label: "Corporation Tax",
    value: "19% – 25%",
    detail: "Small Profits vs Main Rate"
  }, {
    label: "VAT Registration Limit",
    value: "£90,000",
    detail: "Rolling 12-Month Turnover"
  }, {
    label: "Personal Tax Allowance",
    value: "£12,570",
    detail: "0% Tax-Free Income"
  }, {
    label: "HMRC Compliance",
    value: "2025/2026",
    detail: "Fully Updated Rules"
  }];
  const categories = [{
    title: "🔴 High Priority Corporate & Personal Tax Calculators",
    subtitle: "Essential tax estimators for UK LTD directors, sole traders, and non-resident shareholders.",
    tools: [{
      name: "UK Self Assessment Tax Calculator",
      slug: "/calculators/uk-self-assessment",
      desc: "Calculate total UK Income Tax & National Insurance liability combining director salary, freelance profit, UK rental income, and dividend earnings.",
      badge: "Most Searched"
    }, {
      name: "UK Corporation Tax & Marginal Relief Calculator",
      slug: "/calculators/uk-corporation-tax",
      desc: "Calculate exact Corporation Tax liability using 19% Small Profits Rate, 25% Main Rate, and Marginal Relief for profits between £50,000 and £250,000.",
      badge: "Director Must-Have"
    }, {
      name: "UK Capital Gains Tax (CGT) Calculator",
      slug: "/calculators/uk-capital-gains-tax",
      desc: "Calculate CGT on UK residential property sales (18%/24%) and stocks/crypto (10%/20%) incorporating the annual £3,000 CGT allowance.",
      badge: "Property & Shares"
    }, {
      name: "UK Tax & Dividend Optimizer Calculator",
      slug: "/calculators/uk-tax",
      desc: "Find optimal director salary (£12,570), dividend tax tiers (8.75%/33.75%/39.35%), Class 1 vs 2/4 NI, and SIPP pension tax relief.",
      badge: "Tax Efficiency"
    }, {
      name: "UK Sole Trader vs LTD Tax Savings Calculator",
      slug: "/calculators/uk-sole-trader-vs-ltd",
      desc: "Compare side-by-side tax liabilities to find your exact profit breakeven threshold (~£28,000) for forming a UK Limited Company.",
      badge: "Breakeven Tool"
    }]
  }, {
    title: "🟡 Property, Payroll & R&D Tax Relief Calculators",
    subtitle: "Property buyer stamp duty, payroll PAYE deductions, and software development tax credits.",
    tools: [{
      name: "UK Stamp Duty Land Tax (SDLT) Calculator",
      slug: "/calculators/uk-stamp-duty",
      desc: "Calculate UK property purchase tax including +5% Buy-to-Let / Second Home surcharge and +2% Non-Resident Overseas Buyer surcharge.",
      badge: "Property Buyers"
    }, {
      name: "UK Payroll & PAYE Tax Calculator",
      slug: "/calculators/uk-payroll-paye",
      desc: "Calculate Employer NI (13.8%), Employee NI (8%), PAYE Income Tax deductions, and Workplace Pension auto-enrolment contributions.",
      badge: "Hiring & Payroll"
    }, {
      name: "UK R&D Tax Credit Estimator (Tech & IT)",
      slug: "/calculators/uk-rd-tax-credit",
      desc: "Estimate tax reductions and cash refunds under the Merged RDEC 20% scheme for software engineering and IT contractor payroll.",
      badge: "IT & Software"
    }]
  }, {
    title: "🟢 HMRC Compliance, VAT & Banking Decision Tools",
    subtitle: "VAT thresholds, late filing penalties, overseas bank matching, and cross-border tax comparison.",
    tools: [{
      name: "Should I Register for UK VAT? Quiz Tool",
      slug: "/calculators/uk-vat-register-decision",
      desc: "Interactive decision tool evaluating Voluntary vs Mandatory registration, overseas reverse charge, and Flat Rate vs Standard VAT.",
      badge: "Decision Tool"
    }, {
      name: "UK vs Pakistan Tax Comparison Tool",
      slug: "/calculators/uk-vs-pakistan-tax-comparison",
      desc: "Compare UK LTD dividend taxation against Pakistan FBR IT Export 0.25% tax exemption under UK-Pakistan Double Tax Treaty Article 22.",
      badge: "Dual Resident Special"
    }, {
      name: "UK VAT £90,000 Threshold & Scheme Calculator",
      slug: "/calculators/uk-vat",
      desc: "Track rolling 12-month UK turnover against the £90,000 VAT registration threshold and compare Flat Rate Scheme vs Standard 20% VAT.",
      badge: "VAT Compliance"
    }, {
      name: "UK LTD Overseas Formation & Compliance Cost",
      slug: "/calculators/uk-setup-cost",
      desc: "Calculate Companies House incorporation fees, London registered address, Wise business bank setup, CS01 & CT600 accounting costs.",
      badge: "Setup & Annual"
    }, {
      name: "HMRC & Companies House Late Filing Penalty Estimator",
      slug: "/calculators/uk-penalty-risk",
      desc: "Calculate statutory penalties for late Confirmation Statements (CS01) & CT600 accounts, HMRC late interest (7.5%), and appeal odds.",
      badge: "Penalty Risk"
    }, {
      name: "UK Business Bank Account Approval Probability Checker",
      slug: "/calculators/uk-bank-approval",
      desc: "Check non-resident approval odds for Wise Business, Revolut, Tide, and WorldFirst and receive custom bank setup recommendations.",
      badge: "Bank Matching"
    }]
  }];
  const faqs = [{
    q: "How do UK tax calculators help non-resident directors and overseas founders?",
    a: "Non-resident directors of UK Limited Companies face unique cross-border tax considerations, such as UK Corporation Tax on global UK company profits, dividend tax withholding rules, and Double Tax Treaty (DTT) relief in their home country. Our suite calculates exact UK liabilities and helps non-residents optimize salary vs dividend drawdowns 100% remotely."
  }, {
    q: "What are the UK Corporation Tax rates for the 2025/2026 tax year?",
    a: "For profits up to £50,000, companies pay the Small Profits Rate of 19%. Profits above £250,000 are taxed at the Main Rate of 25%. Profits between £50,000 and £250,000 qualify for Marginal Relief, providing a gradual tax rate progression between 19% and 25%. Our Corporation Tax calculator calculates your exact effective tax rate instantly."
  }, {
    q: "When must a UK business register for VAT in 2026?",
    a: "A UK business must register for VAT if its taxable turnover exceeds £90,000 over a rolling 12-month period or is expected to exceed £90,000 in the next 30 days. Non-resident UK companies making taxable supplies in the UK have a £0 threshold and must register immediately. Use our VAT decision tool to check voluntary vs mandatory registration."
  }, {
    q: "At what profit level is it better to form a UK Limited Company instead of operating as a Sole Trader?",
    a: "Generally, when net profits exceed approximately £28,000 to £30,000 annually, operating through a UK Limited Company becomes more tax-efficient than a Sole Trader structure due to director salary (£12,570 tax-free) and lower dividend tax rates compared to combined Income Tax (20%-40%) and Class 4 National Insurance."
  }];
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
    }]
  };
  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "UK Business & Tax Calculators Suite",
    description: "Interactive UK tax, VAT, payroll, and compliance calculators for UK LTD directors, freelancers, and non-resident founders.",
    itemListElement: categories.flatMap((cat) => cat.tools).map((t, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: t.name,
      url: `https://advaq.com${t.slug}`,
      description: t.desc
    }))
  };
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
      __html: JSON.stringify(jsonLdItemList)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdFaq)
    } }),
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators", className: "hover:underline transition-colors", children: "Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "UK Calculators" })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-6", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 14, className: "text-gold-400" }),
          " HMRC 2025/2026 Tax Rules & Rates Updated"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-4xl mx-auto leading-tight", children: "🇬🇧 UK Business & Tax Calculators Suite (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-navy-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed", children: "14 interactive tax, compliance, and financial estimators for UK Limited Company directors, property investors, freelancers, and non-resident founders." }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-left max-w-4xl mx-auto", children: keyRates.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-navy-900/80 border border-navy-800 rounded-xl p-4 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium text-gold-400 uppercase tracking-wider block", children: item.label }),
          /* @__PURE__ */ jsx("span", { className: "text-xl sm:text-2xl font-bold font-serif text-white mt-1 block", children: item.value }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400 mt-0.5 block", children: item.detail })
        ] }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 py-16 space-y-16", children: categories.map((cat, idx) => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "border-b border-border pb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-navy-950 font-bold", children: cat.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: cat.subtitle })
      ] }),
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
    ] }, idx)) }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-50 border-t border-border py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
          " Knowledge Base"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-2", children: "Frequently Asked Questions (UK Business & Tax)" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-2 max-w-xl mx-auto", children: "Quick authoritative guidance on UK tax thresholds, Corporation Tax rates, VAT limits, and non-resident LTD rules." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => {
        const isOpen = openFaq === index;
        return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : index), className: "w-full p-5 text-left font-serif text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors", children: [
            /* @__PURE__ */ jsx("span", { children: faq.q }),
            /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })
          ] }),
          isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50", children: faq.a })
        ] }, index);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-navy-950 text-white py-16 border-t border-navy-900", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold", children: "Need Personal Guidance from a UK Tax & Legal Specialist?" }),
      /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed", children: "Get your UK LTD formation, HMRC tax filings, CT600 accounts, and VAT returns handled directly by licensed advocates and PTIN registered tax professionals." }),
      /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold !py-3.5 !px-8 text-xs font-semibold inline-flex items-center gap-2 uppercase tracking-wider", children: [
        "Book a Tax Consultation ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }) })
  ] });
}
export {
  UKCalculatorsHubPage as component
};
