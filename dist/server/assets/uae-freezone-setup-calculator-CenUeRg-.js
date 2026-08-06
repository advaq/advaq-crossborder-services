import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
const freezoneData = [{
  id: "ifza",
  name: "IFZA (International Free Zone Authority)",
  location: "Dubai",
  zeroVisaCost: 12900,
  oneVisaCost: 14900,
  twoVisaCost: 17900,
  additionalVisaCost: 3500,
  flexiDeskIncluded: true,
  bestFor: "Consulting, E-Commerce & Service Businesses"
}, {
  id: "meydan",
  name: "Meydan Free Zone",
  location: "Dubai (Meydan Hotel)",
  zeroVisaCost: 12500,
  oneVisaCost: 14350,
  twoVisaCost: 16800,
  additionalVisaCost: 3200,
  flexiDeskIncluded: true,
  bestFor: "Digital Marketing, Tech & Premium Address"
}, {
  id: "shams",
  name: "SHAMS (Sharjah Media City)",
  location: "Sharjah",
  zeroVisaCost: 9400,
  oneVisaCost: 11500,
  twoVisaCost: 13800,
  additionalVisaCost: 2800,
  flexiDeskIncluded: true,
  bestFor: "Budget-Friendly Freelancers & Media Agencies"
}, {
  id: "rakez",
  name: "RAKEZ (Ras Al Khaimah Economic Zone)",
  location: "Ras Al Khaimah",
  zeroVisaCost: 8900,
  oneVisaCost: 11200,
  twoVisaCost: 13500,
  additionalVisaCost: 2700,
  flexiDeskIncluded: true,
  bestFor: "Manufacturing, Trading & Cost-Effective License"
}];
function UAEFreezoneCalculatorPage() {
  const [selectedFreezoneId, setSelectedFreezoneId] = useState("ifza");
  const [visasRequired, setVisasRequired] = useState(1);
  const [includeVipMedical, setIncludeVipMedical] = useState(true);
  const [includeCorporateTaxReg, setIncludeCorporateTaxReg] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const selectedFreezone = freezoneData.find((f) => f.id === selectedFreezoneId) || freezoneData[0];
  let baseLicenseCost = selectedFreezone.zeroVisaCost;
  if (visasRequired === 1) baseLicenseCost = selectedFreezone.oneVisaCost;
  else if (visasRequired === 2) baseLicenseCost = selectedFreezone.twoVisaCost;
  else if (visasRequired > 2) {
    baseLicenseCost = selectedFreezone.twoVisaCost + (visasRequired - 2) * selectedFreezone.additionalVisaCost;
  }
  const medicalEmiratesIdPerVisa = includeVipMedical ? 3500 : 2500;
  const totalVisaProcessingCost = visasRequired * medicalEmiratesIdPerVisa;
  const corporateTaxRegFee = includeCorporateTaxReg ? 1500 : 0;
  const TotalSetupCostAED = baseLicenseCost + totalVisaProcessingCost + corporateTaxRegFee;
  const TotalSetupCostUSD = Math.round(TotalSetupCostAED / 3.6725);
  const annualRenewalCostAED = Math.round(baseLicenseCost * 0.85);
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
      name: "Dubai Freezone Setup Cost Calculator",
      item: "https://advaq.com/calculators/uae-freezone-setup-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dubai Freezone Company Setup Cost Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uae-freezone-setup-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare Dubai and UAE Freezone setup costs across IFZA, Meydan, SHAMS, and RAKEZ including residence visa packages, flexi desk lease, and Emirates ID fees.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Which UAE Freezone is cheapest for single-owner digital businesses?",
    a: "SHAMS (Sharjah Media City) and RAKEZ (Ras Al Khaimah) offer the lowest 0-visa license costs starting around AED 8,900 – AED 9,400. In Dubai, Meydan Free Zone (from AED 12,500) and IFZA (from AED 12,900) are the most popular choices for tech startups and consultants."
  }, {
    q: "Does a Freezone license include a physical office or flexi desk?",
    a: "Yes! Most zero-visa and 1-visa Freezone packages include a shared 'Flexi Desk' lease agreement, which meets the legal requirement for corporate bank account opening and Establishment Card issuance."
  }, {
    q: "Are UAE Freezone companies subject to 9% Corporate Tax?",
    a: "UAE Corporate Tax applies to all UAE Freezone entities at 9% on net taxable profits exceeding AED 375,000. However, Qualifying Free Zone Persons (QFZPs) deriving qualifying income and maintaining adequate substance pay 0% tax."
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
          /* @__PURE__ */ jsx("span", { children: "Dubai Freezone Setup Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Dubai Freezone Setup Cost Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Compare license costs, flexi-desk options, establishment cards, and investor visa package fees across top UAE freezones." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3", children: "1. Select Target UAE Freezone:" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: freezoneData.map((f) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setSelectedFreezoneId(f.id), className: `p-3.5 rounded-xl border text-left transition-all ${selectedFreezoneId === f.id ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border hover:border-gold-500/50"}`, children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-2 mb-1", children: /* @__PURE__ */ jsx("strong", { className: "text-sm font-serif", children: f.name }) }),
            /* @__PURE__ */ jsxs("div", { className: "text-[11px] opacity-80", children: [
              "Location: ",
              f.location
            ] })
          ] }, f.id)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-navy-900/5 border border-gold-500/20 rounded-xl text-xs space-y-1 text-navy-950", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Location:" }),
              " ",
              selectedFreezone.location
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Flexi Desk Included:" }),
              " ",
              selectedFreezone.flexiDeskIncluded ? "Yes (Shared Desk)" : "No"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Best Suited For:" }),
              " ",
              selectedFreezone.bestFor
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. Investor & Employee Visas Required:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              visasRequired,
              " ",
              visasRequired === 1 ? "Visa" : "Visas"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "4", step: "1", value: visasRequired, onChange: (e) => setVisasRequired(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "0 visas = virtual license only; 1+ visas = residency permit included." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeVipMedical, onChange: (e) => setIncludeVipMedical(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "VIP Medical Fitness & Emirates ID Processing" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Same-day VIP medical blood test and biometrics appointment." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "AED 3,500 / visa" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeCorporateTaxReg, onChange: (e) => setIncludeCorporateTaxReg(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "FTA Corporate Tax Registration & TRN Issuance" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Mandatory FTA Registration to avoid AED 10,000 penalty." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-navy-950 shrink-0", children: "AED 1,500" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Year 1 Freezone Investment" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Base Freezone License:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                baseLicenseCost.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Visa Processing & Emirates ID:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "AED ",
                totalVisaProcessingCost.toLocaleString()
              ] })
            ] }),
            includeCorporateTaxReg && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FTA Corporate Tax Reg:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "AED ",
                corporateTaxRegFee.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Year 1 Setup Budget" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl sm:text-4xl font-serif font-bold text-white", children: [
              "AED ",
              TotalSetupCostAED.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-navy-300 font-mono block mt-1", children: [
              "(Approx. $",
              TotalSetupCostUSD.toLocaleString(),
              " USD)"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Est. Year 2 Renewal:" }),
              /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400 font-mono", children: [
                "AED ",
                annualRenewalCostAED.toLocaleString(),
                " / yr"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: [
          "Incorporate ",
          selectedFreezone.name,
          " with ADVAQ"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Freezone Setup Cost Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of your selected Freezone license, visa quota, and annual renewal budget." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Trade License & Lease Agreement" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "AED ",
                baseLicenseCost.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Selected Freezone Authority:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: selectedFreezone.name })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Shared Flexi Desk Agreement:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Included" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Base License Subtotal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  baseLicenseCost.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: UAE Residence Visa & Emirates ID" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                visasRequired,
                " Visa(s)"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Residence Visa Quota:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  visasRequired,
                  " Visa Allocation(s)"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Medical & Biometrics Rate:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  medicalEmiratesIdPerVisa.toLocaleString(),
                  " / visa"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Visa Processing Subtotal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  totalVisaProcessingCost.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: FTA Tax & Bank Account Registration" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Tax & Banking" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FTA Corporate Tax Registration:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  corporateTaxRegFee.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Corporate Bank Opening Assistance:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Included with ADVAQ" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Total Year 1 & Renewal Budget" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Grand Total" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Year 1 Outlay:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  TotalSetupCostAED.toLocaleString(),
                  " ($",
                  TotalSetupCostUSD.toLocaleString(),
                  " USD)"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Estimated Annual Renewal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "AED ",
                  annualRenewalCostAED.toLocaleString(),
                  " / year"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Top UAE Freezone License & Visa Package Comparison (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Freezone Authority" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Emirate Location" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "0-Visa License" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "1-Visa Package" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Key Advantage" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: freezoneData.map((f) => /* @__PURE__ */ jsxs("tr", { className: selectedFreezoneId === f.id ? "bg-gold-500/10 font-bold" : "", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: f.name }),
            /* @__PURE__ */ jsx("td", { className: "p-3.5", children: f.location }),
            /* @__PURE__ */ jsxs("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: [
              "AED ",
              f.zeroVisaCost.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("td", { className: "p-3.5 font-mono text-gold-600 font-bold", children: [
              "AED ",
              f.oneVisaCost.toLocaleString()
            ] }),
            /* @__PURE__ */ jsx("td", { className: "p-3.5", children: f.bestFor })
          ] }, f.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Dubai Freezone Setup)" })
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
            " ADVAQ UAE Corporate Formation Specialist"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Form Your Freezone Company with ADVAQ" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UAE corporate advisory team assists with Freezone company registration, Establishment Card issuance, VIP Emirates ID processing, and corporate bank account opening." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Incorporate UAE Freezone Company ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp UAE Consultant" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAEFreezoneCalculatorPage as component
};
