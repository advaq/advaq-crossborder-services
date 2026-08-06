import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield } from "lucide-react";
function UAETaxResidencyCheckerPage() {
  const [daysInUae, setDaysInUae] = useState(190);
  const [hasEmiratesId, setHasEmiratesId] = useState(true);
  const [hasPermanentHome, setHasPermanentHome] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const is183DayPass = daysInUae >= 183;
  const is90DayPass = daysInUae >= 90 && hasEmiratesId && hasPermanentHome;
  const isEligible = is183DayPass || is90DayPass;
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
      name: "UAE Tax Residency (TRC) Checker",
      item: "https://advaq.com/calculators/uae-tax-residency-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Tax Residency Certificate (TRC) Eligibility Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-tax-residency-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check physical presence limits for obtaining an official FTA Tax Residency Certificate (TRC) under UAE Cabinet Decision No. 85 of 2022.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What are the physical presence rules for UAE Tax Residency under Cabinet Decision No. 85 of 2022?",
    a: "An individual is considered a UAE Tax Resident if they satisfy any of the following 3 tests: 1) Physical presence in UAE for 183+ days in a 12-month period, 2) Physical presence in UAE for 90+ days AND hold a valid UAE residency visa + permanent place of residence (tenancy lease/property), or 3) Primary center of financial and personal interests in the UAE."
  }, {
    q: "Who issues the official UAE Tax Residency Certificate (TRC)?",
    a: "The Federal Tax Authority (FTA) issues official Tax Residency Certificates via the online EmaraTax portal."
  }, {
    q: "What documents are required to apply for an FTA Tax Residency Certificate?",
    a: "Required documents include: Valid Passport copy, UAE Residency Visa & Emirates ID, Bank statements for 6 months, Ejari tenancy contract or title deed, and GDRFA entry/exit report showing physical days spent in the UAE."
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
          /* @__PURE__ */ jsx("span", { children: "UAE Tax Residency (TRC)" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Tax Residency Certificate (TRC) Checker (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Test Cabinet Decision No. 85 of 2022 physical presence rules (183-day vs 90-day threshold) for obtaining an FTA Tax Residency Certificate." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isEligible ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-amber-50 border-amber-300 text-amber-950"}`, children: [
        isEligible ? /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 40 }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0", size: 40 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isEligible ? "🎉 Eligible for UAE Tax Residency Certificate (TRC)!" : "⚠️ Insufficient Physical Days for UAE Tax Residency" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isEligible ? `You satisfy Cabinet Decision No. 85 of 2022 physical presence limits (${daysInUae} days in UAE). You can apply for an official FTA Tax Residency Certificate.` : `You currently have ${daysInUae} physical days in UAE. You need at least 183 days (or 90 days with UAE residence + lease/employment) to qualify.` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Physical Days Spent in UAE (within 12-month period):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              daysInUae,
              " Days in UAE"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "10", max: "365", step: "5", value: daysInUae, onChange: (e) => setDaysInUae(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] text-gray-500 mt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "90 Days (Tied to Residence)" }),
            /* @__PURE__ */ jsx("span", { children: "183 Days (Automatic TRC)" }),
            /* @__PURE__ */ jsx("span", { children: "365 Days" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasEmiratesId, onChange: (e) => setHasEmiratesId(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-semibold", children: "Valid UAE Residency Visa & Emirates ID" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasPermanentHome, onChange: (e) => setHasPermanentHome(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-semibold", children: "Tenancy Contract (Ejari) / Property Ownership" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Apply for FTA Tax Residency Certificate with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Tax Residency Certificate (TRC) Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of Cabinet Decision No. 85 of 2022 physical presence and primary interest tests." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: 183-Day Primary Presence Test" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${is183DayPass ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`, children: is183DayPass ? "183-Day Test Passed ✅" : "Under 183 Days" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Physical Days in UAE (12 Months):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  daysInUae,
                  " Days"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Automatic TRC Day Threshold:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "183 Days" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: 90-Day Tie-Breaker Test" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${is90DayPass ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-500/20 text-gray-300"}`, children: is90DayPass ? "90-Day Test Passed ✅" : "Additional Ties Needed" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "90+ Physical Days Requirement:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: daysInUae >= 90 ? "text-emerald-400" : "text-amber-400", children: daysInUae >= 90 ? "YES" : "NO" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Emirates ID & Ejari Permanent Home:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: hasEmiratesId && hasPermanentHome ? "text-emerald-400" : "text-amber-400", children: hasEmiratesId && hasPermanentHome ? "YES" : "NO" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: GDRFA Travel Report Verification" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Movement Audit" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "GDRFA Entry/Exit Report:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Official Movement Log" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Verified Physical Days:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  daysInUae,
                  " Days"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: FTA EmaraTax TRC Verdict" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isEligible ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`, children: isEligible ? "TRC Issued ✅" : "Ineligible" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "TRC Certificate Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: isEligible ? "100% Eligible for FTA TRC" : "Need Additional Physical Days" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "ADVAQ Processing:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "FTA Certificate in 5 Days" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UAE Tax Residency Physical Presence Criteria (Cabinet Decision 85)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "TRC Rule Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Physical Presence Requirement" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Additional Prerequisites" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "TRC Certificate Type" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: is183DayPass ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Standard Physical Presence" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "183 Days or More" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "None (Automatic TRC Eligibility)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "Full Domestic & DTT TRC ✅" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: is90DayPass && !is183DayPass ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Substantial Ties Rule" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gold-600 font-bold", children: "90 to 182 Days" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Valid EID + Permanent Home (Ejari)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "Domestic Tax Residency TRC ✅" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Non-Resident Status" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-rose-600", children: "Under 90 Days" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "N/A" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-rose-600 font-bold", children: "Ineligible for TRC ❌" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UAE Tax Residency)" })
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
            " ADVAQ FTA Tax Residency Specialist"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Obtain Your UAE Tax Residency Certificate (TRC)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our FTA agents compile your GDRFA travel history, Ejari tenancy contract, and bank statements to secure your official Tax Residency Certificate from the Ministry of Finance / FTA." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Apply for UAE TRC with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp TRC Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAETaxResidencyCheckerPage as component
};
