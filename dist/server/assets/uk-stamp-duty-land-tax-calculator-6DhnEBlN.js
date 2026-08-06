import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UKStampDutyCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState(45e4);
  const [buyerType, setBuyerType] = useState("additional");
  const [isNonResident, setIsNonResident] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const additionalSurcharge = buyerType === "additional" ? 0.05 : 0;
  const overseasSurcharge = isNonResident ? 0.02 : 0;
  const totalSurchargeRate = additionalSurcharge + overseasSurcharge;
  let baseSdlt = 0;
  if (buyerType === "first" && propertyPrice <= 625e3) {
    if (propertyPrice > 425e3) {
      baseSdlt = (propertyPrice - 425e3) * 0.05;
    }
  } else {
    if (propertyPrice > 25e4) {
      const band2Amount = Math.min(propertyPrice, 925e3) - 25e4;
      baseSdlt += band2Amount * 0.05;
    }
    if (propertyPrice > 925e3) {
      const band3Amount = Math.min(propertyPrice, 15e5) - 925e3;
      baseSdlt += band3Amount * 0.1;
    }
    if (propertyPrice > 15e5) {
      const band4Amount = propertyPrice - 15e5;
      baseSdlt += band4Amount * 0.12;
    }
  }
  const surchargeSdlt = propertyPrice * totalSurchargeRate;
  const totalSdltPayable = baseSdlt + surchargeSdlt;
  const effectiveSdltRate = propertyPrice > 0 ? totalSdltPayable / propertyPrice * 100 : 0;
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
      name: "UK Stamp Duty Land Tax Calculator",
      item: "https://advaq.com/calculators/uk-stamp-duty-land-tax-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UK Stamp Duty Land Tax (SDLT) Calculator (2026/2027)",
    url: "https://advaq.com/calculators/uk-stamp-duty-land-tax-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Stamp Duty Land Tax (SDLT) rates, First-Time Buyer relief, +5% BTL surcharge, and +2% overseas non-resident surcharge.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What are the UK Stamp Duty Land Tax (SDLT) threshold bands for 2026/2027?",
    a: "For main residential property purchases, standard SDLT bands are: £0 to £250,000 = 0%, £250,001 to £925,000 = 5%, £925,001 to £1,500,000 = 10%, and over £1,500,000 = 12%."
  }, {
    q: "What is the UK Stamp Duty surcharge for Buy-to-Let and additional properties?",
    a: "If you purchase an additional residential property or Buy-to-Let (BTL) property in England or Northern Ireland, a 5% SDLT surcharge applies across all purchase price bands (including the 0% band)."
  }, {
    q: "What is the 2% Non-UK Resident Stamp Duty Surcharge?",
    a: "Buyers who are not present in the UK for at least 183 days during the 12 months before purchase are classified as non-UK residents for SDLT purposes and must pay a 2% surcharge on top of standard or additional SDLT rates."
  }, {
    q: "What is First-Time Buyer SDLT Relief in the UK?",
    a: "First-time buyers pay 0% SDLT on residential properties up to £425,000 and 5% on the portion between £425,001 and £625,000. If the property price exceeds £625,000, standard SDLT rates apply to the entire price."
  }, {
    q: "When must SDLT be submitted and paid to HMRC?",
    a: "An SDLT return must be filed and any tax due paid within 14 days of the property transaction completion date."
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
          /* @__PURE__ */ jsx("span", { children: "UK Stamp Duty (SDLT)" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UK Stamp Duty Land Tax (SDLT) Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact UK property Stamp Duty tax including First-Time Buyer relief, +5% BTL surcharge, and +2% Overseas Buyer surcharge." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Property Purchase Price (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              propertyPrice.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "100000", max: "2000000", step: "25000", value: propertyPrice, onChange: (e) => setPropertyPrice(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "£100,000" }),
            /* @__PURE__ */ jsx("span", { children: "£1,000,000" }),
            /* @__PURE__ */ jsx("span", { children: "£2,000,000+" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "Buyer Property Status:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setBuyerType("first"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${buyerType === "first" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "First-Time Buyer" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setBuyerType("next"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${buyerType === "next" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Main Residence" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setBuyerType("additional"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${buyerType === "additional" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Additional / Buy-to-Let (+5%)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Non-UK Resident / Overseas Buyer Surcharge (+2%)" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Applied to non-UK residents purchasing UK residential property." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isNonResident, onChange: (e) => setIsNonResident(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Stamp Duty Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Property Purchase Price:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white font-semibold", children: [
                "£",
                propertyPrice.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Standard Band Base SDLT:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "£",
                Math.round(baseSdlt).toLocaleString()
              ] })
            ] }),
            surchargeSdlt > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Surcharges (",
                totalSurchargeRate * 100,
                "%):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-amber-400 font-semibold", children: [
                "+£",
                Math.round(surchargeSdlt).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200 border-t border-white/10 pt-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Effective SDLT Tax Rate:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-bold", children: [
                effectiveSdltRate.toFixed(2),
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Stamp Duty Due (SDLT)" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-white", children: [
              "£",
              Math.round(totalSdltPayable).toLocaleString()
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-white/10 text-[11px] text-navy-200 flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Payment Deadline:" }),
              /* @__PURE__ */ jsx("strong", { className: "text-gold-400 font-mono", children: "Within 14 Days of Completion" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/self-assessment", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Consult ADVAQ Property Tax Team" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Stamp Duty (SDLT) Walkthrough" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line proof of your exact SDLT calculation for £",
              propertyPrice.toLocaleString(),
              " purchase price."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Property Purchase Base" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Purchase Base" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Purchase Price:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  propertyPrice.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Buyer Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: buyerType === "first" ? "First-Time Buyer" : buyerType === "additional" ? "Additional Property / BTL" : "Main Residence" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Base Band Calculation" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "£",
                Math.round(baseSdlt).toLocaleString(),
                " Base"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "£0 to £250k (0%):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "£0" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "£250k to £925k (5%):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  Math.round(baseSdlt).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Base SDLT Liability:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(baseSdlt).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Progressive tax bands applied under statutory HMRC rules." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Statutory Surcharges" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]", children: [
                "+",
                totalSurchargeRate * 100,
                "% Surcharge"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "BTL / Additional Property (+5%):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-amber-400", children: buyerType === "additional" ? `+£${Math.round(propertyPrice * 0.05).toLocaleString()}` : "£0" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Non-UK Resident Overseas (+2%):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-amber-400", children: isNonResident ? `+£${Math.round(propertyPrice * 0.02).toLocaleString()}` : "£0" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-amber-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Surcharges Paid:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "+£",
                  Math.round(surchargeSdlt).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final SDLT Bill" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "SDLT Verified" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Stamp Duty (SDLT) Due:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  Math.round(totalSdltPayable).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Effective SDLT Rate:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  effectiveSdltRate.toFixed(2),
                  "%"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-navy-300 italic pt-1", children: "💡 Must be paid to HMRC within 14 days of property completion." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UK Stamp Duty Land Tax (SDLT) Rates (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Property Price Band" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Standard Main Residence" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "First-Time Buyer Relief" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Additional Property (+5% Surcharge)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Up to £250,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% (up to £425,000)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600 font-bold", children: "5%" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "£250,001 – £925,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gold-600 font-bold", children: "5%" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gold-600 font-bold", children: "5% (£425k-£625k)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600 font-bold", children: "10%" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Stamp Duty SDLT)" })
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
            " ADVAQ UK Chartered Tax Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need UK Stamp Duty Advisory & Overseas Buyer Relief?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UK property tax team advises on SDLT surcharges, First-Time Buyer relief eligibility, and multi-property tax structuring." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uk-services/self-assessment", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Consult Property Advisory ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp SDLT Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKStampDutyCalculatorPage as component
};
