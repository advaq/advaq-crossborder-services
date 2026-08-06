import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, Calculator, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
function UAECalculatorsHubPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const keyRates = [{
    label: "Corporate Tax Rate",
    value: "0% / 9%",
    detail: "AED 375,000 Threshold"
  }, {
    label: "Small Business Relief",
    value: "AED 3 Million",
    detail: "0% CT Election Limit"
  }, {
    label: "VAT Rate",
    value: "5%",
    detail: "AED 375,000 Registration Limit"
  }, {
    label: "FTA Compliance",
    value: "2026",
    detail: "Fully Updated Rules"
  }];
  const categories = [{
    title: "🔴 High Priority Corporate Tax & Freezone Setup",
    subtitle: "Essential estimators for Dubai Freezone incorporation, 9% Corporate Tax, and QFZP status.",
    tools: [{
      name: "UAE Freezone Company Setup Cost Calculator",
      slug: "/calculators/uae-freezone-setup-calculator",
      desc: "Calculate total setup fees across IFZA, Meydan, SHAMS, and RAKEZ including trade license, flexi-desk, investor visa, and E-channel deposit.",
      badge: "Setup Cost"
    }, {
      name: "UAE Corporate Tax & Small Business Relief Calculator",
      slug: "/calculators/uae-corporate-tax-calculator",
      desc: "Calculate 9% Corporate Tax on net profits above AED 375,000 and check Small Business Relief (SBR) 0% tax election for revenue <= AED 3M.",
      badge: "9% Corporate Tax"
    }, {
      name: "Qualifying Free Zone Person (QFZP) 0% Tax Checker",
      slug: "/calculators/uae-qfzp-eligibility-calculator",
      desc: "Verify whether your Freezone entity meets Cabinet Decision No. 55/139 rules for 0% Corporate Tax on Qualifying Income.",
      badge: "0% QFZP Exemption"
    }]
  }, {
    title: "🟠 VAT, FTA Penalty Risk & Registration Deadlines",
    subtitle: "5% VAT thresholds, FTA AED 10,000 late CT registration penalties, and ESR/UBO compliance.",
    tools: [{
      name: "UAE VAT Registration Threshold & Return Estimator",
      slug: "/calculators/uae-vat-calculator",
      desc: "Calculate output & input VAT at 5% and track mandatory (AED 375k) vs voluntary (AED 187.5k) VAT registration limits.",
      badge: "5% VAT"
    }, {
      name: "FTA Corporate Tax Registration Deadline & Fine Checker",
      slug: "/calculators/uae-corporate-tax-deadline-calculator",
      desc: "Find your statutory registration deadline based on license issuance month and avoid the mandatory AED 10,000 FTA late registration penalty.",
      badge: "AED 10k Penalty Risk"
    }, {
      name: "UAE ESR & UBO Compliance Risk Estimator",
      slug: "/calculators/uae-esr-ubo-calculator",
      desc: "Check Economic Substance Regulations (ESR) Relevant Activity reporting and Ultimate Beneficial Owner (UBO) filing duties.",
      badge: "ESR & UBO Compliance"
    }]
  }, {
    title: "🟡 Visas, Employment Gratuity & Banking Approvals",
    subtitle: "Golden Visa costs, labor law severance calculations, and Wio Bank approval odds.",
    tools: [{
      name: "UAE Labor Law End of Service Gratuity Calculator",
      slug: "/calculators/uae-gratuity-calculator",
      desc: "Calculate statutory severance payout under UAE Labor Law No. 33 of 2021 for 1 to 5 years (21 days basic) and 5+ years (30 days basic).",
      badge: "Labor Law Gratuity"
    }, {
      name: "UAE Residency & 10-Year Golden Visa Cost Estimator",
      slug: "/calculators/uae-visa-cost-calculator",
      desc: "Calculate total costs for 2-Year Investor Visas vs 10-Year Golden Visas including medical fitness, Emirates ID, and MOFA attestation.",
      badge: "Residency Visas"
    }, {
      name: "UAE Corporate Bank Account Approval Probability Checker",
      slug: "/calculators/uae-bank-approval-calculator",
      desc: "Check approval odds for Wio Bank Digital, Mashreq NeoBiz, Emirates NBD, and RAKBANK based on license type and physical substance.",
      badge: "Bank Matching"
    }]
  }, {
    title: "🔵 Business Models, Treaties & Real Estate ROI",
    subtitle: "GoFreelance vs Freezone LLC, DTT withholding tax savings, and Dubai property ROI.",
    tools: [{
      name: "TECOM Freelance Permit vs Freezone LLC Decision Tool",
      slug: "/calculators/uae-freelance-vs-freezone-calculator",
      desc: "Compare annual costs and operational limits of a GoFreelance permit against a Single-Shareholder Freezone LLC for solopreneurs.",
      badge: "Freelance vs LLC"
    }, {
      name: "UAE Double Tax Treaty (DTT) Withholding Tax Relief Tool",
      slug: "/calculators/uae-double-tax-treaty-calculator",
      desc: "Calculate tax savings on cross-border dividends, royalties, and interest under UAE's 140+ Double Tax Treaties using TRC certificates.",
      badge: "DTT Relief"
    }, {
      name: "Dubai Real Estate ROI, DLD Fee & Net Yield Calculator",
      slug: "/calculators/uae-real-estate-roi-calculator",
      desc: "Calculate net rental yield, DLD 4% transfer fees, trustee fees, service charges, and 0% capital gains tax on Dubai property investments.",
      badge: "Property ROI"
    }]
  }, {
    title: "🟢 Tax Residency, Excise Tax & Decision Quizzes",
    subtitle: "TRC 183-day rules, FTA 50%/100% excise taxes, and Freezone vs Mainland decision quizzes.",
    tools: [{
      name: "UAE Tax Residency Certificate (TRC) Eligibility Checker",
      slug: "/calculators/uae-tax-residency-calculator",
      desc: "Verify Cabinet Decision No. 85 rules for 183-day vs 90-day physical presence to qualify for official UAE Tax Residency.",
      badge: "TRC Residency"
    }, {
      name: "FTA Excise Tax Calculator (Sweetened Drinks & Tobacco)",
      slug: "/calculators/uae-excise-tax-calculator",
      desc: "Calculate 50% excise tax on sweetened beverages and 100% excise tax on tobacco, energy drinks, and electronic smoking devices.",
      badge: "Excise Tax"
    }, {
      name: "Dubai Free Zone vs Mainland Company Setup Quiz Tool",
      slug: "/calculators/uae-freezone-vs-mainland-quiz-calculator",
      desc: "Answer 4 questions about your target clients, office needs, and visa requirements to get an instant structural recommendation.",
      badge: "Structure Quiz"
    }]
  }];
  const faqs = [{
    q: "Who is subject to the UAE 9% Corporate Tax and who qualifies for 0% tax?",
    a: "UAE Corporate Tax applies at 9% on taxable net profits exceeding AED 375,000. Qualifying Free Zone Persons (QFZPs) maintaining adequate substance and deriving qualifying income enjoy 0% tax. Additionally, businesses with revenue under AED 3,000,000 qualify for Small Business Relief (SBR) and can elect 0% tax treatment."
  }, {
    q: "What is the penalty for missing the FTA Corporate Tax registration deadline in the UAE?",
    a: "Under FTA Administrative Decision No. 3 of 2024, a mandatory administrative penalty of AED 10,000 applies to any taxable entity that fails to submit its Corporate Tax registration application within the designated deadline set by the Federal Tax Authority."
  }, {
    q: "When is VAT registration mandatory for businesses operating in the UAE?",
    a: "Mandatory VAT registration applies when taxable supplies and imports exceed AED 375,000 over the preceding 12 months or are expected to exceed AED 375,000 in the next 30 days. Voluntary registration is available at AED 187,500."
  }, {
    q: "How is End of Service Gratuity calculated under UAE Labor Law No. 33 of 2021?",
    a: "For continuous service of 1 to 5 years, employees receive 21 days' basic salary for each year of service. For service exceeding 5 years, employees receive 30 days' basic salary for each additional year, capped at a maximum of 2 years' total remuneration."
  }, {
    q: "How does Cabinet Decision No. 85 determine UAE Tax Residency for Individuals?",
    a: "An individual is a UAE Tax Resident if they have a primary residence and center of financial interests in the UAE, or spend 183 days (or 90 days if holding UAE residency/employment and home/business) in a 12-month period, qualifying for a Tax Residency Certificate (TRC)."
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
      name: "UAE Calculators",
      item: "https://advaq.com/calculators/uae"
    }]
  };
  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "UAE Freezone & Tax Calculators Suite",
    description: "15 interactive UAE tax, setup cost, real estate ROI, and Corporate Tax compliance calculators.",
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
          /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "UAE Calculators" })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-6", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 14, className: "text-gold-400" }),
          " FTA 2026 Corporate Tax & Freezone Rules Updated"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-4xl mx-auto leading-tight", children: "🇦🇪 UAE Freezone & Tax Calculators Suite (2026)" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-5 text-navy-200 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed space-y-1", children: [
          /* @__PURE__ */ jsx("span", { className: "block", children: "15 free interactive tax, compliance, and financial estimators for Dubai Freezone setups, mainland companies, property investors, and expats." }),
          /* @__PURE__ */ jsx("span", { className: "block text-gold-400/90 text-xs sm:text-sm font-medium pt-1", children: "Updated for FTA 2026 tax rules, Cabinet Decision No. 55/139 QFZP 0% status, Cabinet Decision No. 85 TRC, and End of Service Gratuity." })
        ] }),
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
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-2", children: "Frequently Asked Questions (UAE Business & Corporate Tax)" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-2 max-w-xl mx-auto", children: "Quick authoritative guidance on UAE Corporate Tax, AED 10,000 FTA late fine deadlines, VAT thresholds, and End of Service Gratuity." })
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
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold", children: "Need Personal Guidance from a UAE Tax & Corporate Setup Specialist?" }),
      /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed", children: "Get your Dubai Freezone setup, FTA Corporate Tax registration, VAT returns, TRC certificates, and corporate banking approvals managed by seasoned UAE tax consultants." }),
      /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold !py-3.5 !px-8 text-xs font-semibold inline-flex items-center gap-2 uppercase tracking-wider", children: [
        "Book a Tax Consultation ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] }) })
    ] }) })
  ] });
}
export {
  UAECalculatorsHubPage as component
};
