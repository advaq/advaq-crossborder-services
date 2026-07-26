import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Calculator, ArrowRight } from "lucide-react";
function PakistanCalculatorsHubPage() {
  const categories = [{
    title: "🔴 High Priority FBR & Property Tax Tools",
    tools: [{
      name: "Pakistan FBR Withholding Tax (WHT) Calculator",
      slug: "/calculators/pakistan-wht-calculator",
      desc: "Calculate Section 153 WHT rates for services (9%/18%), goods (5%/10%), contracts (7.5%/15%) and Section 149 salary.",
      badge: "FBR Section 153 WHT"
    }, {
      name: "Pakistan Property Tax & WHT Calculator (236K & 236C)",
      slug: "/calculators/pakistan-property-tax",
      desc: "Calculate Section 236K buyer WHT (3% vs 10.5%), Section 236C seller WHT, Stamp Duty, and Filer savings.",
      badge: "Property WHT"
    }, {
      name: "FBR NTN Registration Eligibility & Document Checker",
      slug: "/calculators/pakistan-ntn-eligibility",
      desc: "Check required documents, timeline & process for Salaried, Business Individual, AOP & SECP Companies.",
      badge: "NTN Registration"
    }, {
      name: "Pakistan Filer Tax Savings Calculator",
      slug: "/calculators/pakistan-tax",
      desc: "Calculate exact money saved on property purchases, car registration, bank cash transfers & FBR returns by becoming an Active Taxpayer (ATL Filer).",
      badge: "ATL Filer Savings"
    }, {
      name: "Pakistan FBR Salary & Business Income Tax",
      slug: "/calculators/pakistan-fbr-salary-tax",
      desc: "Calculate monthly and annual income tax slabs for salaried and business individuals under 2026/2027 budget rules.",
      badge: "Income Tax Slabs"
    }]
  }, {
    title: "🟡 Freelancers, SECP & Rental Income",
    tools: [{
      name: "Pakistan Freelancer All-in-One Tax & FCVA Tool",
      slug: "/calculators/pakistan-freelancer-tax",
      desc: "Calculate Section 154A 0.25% reduced tax rates, PSEB tax credit savings, and SBP Exporters' FCVA 50% USD retention.",
      badge: "Freelancer Tax"
    }, {
      name: "FBR Tax Notice Response Deadline & Penalty",
      slug: "/calculators/pakistan-fbr-notice-timeline",
      desc: "Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177) and non-compliance penalty exposure.",
      badge: "FBR Notice Risk"
    }, {
      name: "Pakistan Rental Income Tax Calculator (Section 15)",
      slug: "/calculators/pakistan-rental-income-tax",
      desc: "Calculate FBR Section 15 tax on property rent and tenant withholding tax deductions for Filers vs Non-Filers.",
      badge: "Property Rent Tax"
    }, {
      name: "Pakistan IT Exporter 100% Tax Credit & FCVA Tool",
      slug: "/calculators/pakistan-it-export",
      desc: "Calculate 100% tax credit savings under Section 154A, 0.25% WHT, PSEB registration ROI, and SBP 50% FCVA USD retention.",
      badge: "IT Export Tax"
    }, {
      name: "SECP Private Limited vs SMC Setup Cost Calculator",
      slug: "/calculators/pakistan-secp-cost",
      desc: "Calculate SECP fees, name availability, NIFT digital signatures, NTN, annual compliance costs & 2-3 day timeline.",
      badge: "SECP Company Setup"
    }]
  }, {
    title: "🟢 Status Checkers, Sales Tax & Compliance Calendar",
    tools: [{
      name: "FBR Filer or Non-Filer Status Checker & Guide",
      slug: "/calculators/pakistan-filer-status-checker",
      desc: "Step-by-step guide & SMS 9966 checker to verify FBR Active Taxpayer List (ATL) status.",
      badge: "Filer Verification"
    }, {
      name: "Pakistan FBR & SECP Tax Calendar 2026-2027",
      slug: "/calculators/pakistan-tax-calendar",
      desc: "Interactive compliance calendar tracking FBR annual return dates, monthly sales tax filings, quarterly WHT, and SECP forms.",
      badge: "Tax Calendar"
    }, {
      name: "Pakistan Sales Tax on Services (PRA / SRB / FBR) Rate",
      slug: "/calculators/pakistan-sales-tax",
      desc: "Compare PRA Punjab (16%), SRB Sindh (13%), KPRA (15%) & FBR ICT rates for IT & consultancy companies.",
      badge: "Provincial Sales Tax"
    }, {
      name: "SECP Form A & Form 29 Late Filing Penalty Estimator",
      slug: "/calculators/pakistan-secp-penalty",
      desc: "Calculate Form A, Form 29, Form 4, and annual return late fees & compounding penalties for Pakistani companies.",
      badge: "SECP Penalty Risk"
    }]
  }];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators", className: "hover:underline", children: "Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Pakistan Calculators" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "🇵🇰 Pakistan SECP & FBR Tax Calculators Suite (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "14 interactive calculators for Active Taxpayer (ATL Filer) savings, FBR Section 153 WHT, property transfer taxes, and SECP compliance." })
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
  PakistanCalculatorsHubPage as component
};
