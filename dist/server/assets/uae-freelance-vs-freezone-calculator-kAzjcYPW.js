import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield } from "lucide-react";
function UAEFreelanceVsFreezonePage() {
  const [needCorporateBank, setNeedCorporateBank] = useState(true);
  const [needMultipleVisas, setNeedMultipleVisas] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const freelancePermitCost = 7500;
  const freelanceVisaCost = 3500;
  const totalFreelanceYear1 = freelancePermitCost + freelanceVisaCost;
  const freezonePackageCost = 13900;
  const isFreezoneRecommended = needCorporateBank || needMultipleVisas;
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
      name: "Freelance vs Freezone License",
      item: "https://advaq.com/calculators/uae-freelance-vs-freezone-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Freelance Permit vs Freezone Company License Cost (2026/2027)",
    url: "https://advaq.com/calculators/uae-freelance-vs-freezone-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare costs, visa limits, corporate banking eligibility, and Corporate Tax obligations between TECOM GoFreelance permits and Freezone Single-Shareholder LLC licenses.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Can a holder of a TECOM GoFreelance permit open a corporate bank account?",
    a: "No. A freelance permit is issued to an individual, not a separate corporate legal entity. Freelancers must use personal bank accounts. If you require a business corporate account (Wio / Mashreq NeoBiz), you must register a Freezone Single-Shareholder LLC."
  }, {
    q: "Are freelancers subject to UAE 9% Corporate Tax?",
    a: "Yes. Freelancers operating as natural persons in the UAE are subject to Corporate Tax if their net annual turnover from business activities exceeds AED 1,000,000 in a calendar year."
  }, {
    q: "Can I hire staff or sponsor employees on a Freelance Permit?",
    a: "No. Freelance permits are strictly for solo independent contractors. You cannot issue employment visas to staff. To hire employees, a Freezone LLC license is required."
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
          /* @__PURE__ */ jsx("span", { children: "Freelance vs Freezone License" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Freelance Permit vs Freezone License (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Side-by-side cost and feature comparison for IT consultants, designers, and solo founders in Dubai." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-4 ${isFreezoneRecommended ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-gold-50 border-gold-300 text-gold-950"}`, children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "text-gold-600 shrink-0", size: 36 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isFreezoneRecommended ? "🎉 Full Freezone LLC License Recommended!" : "💡 Solo Freelance Permit Sufficient" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isFreezoneRecommended ? "Because you need corporate bank accounts or future employee visas, a Full Freezone LLC License (IFZA/SHAMS) provides complete flexibility." : "If you only need a personal residency visa and operate as an individual contractor, the GoFreelance Permit is cost-effective." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 bg-off-white/50 p-6 rounded-2xl border border-border text-xs", children: [
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Do you need a Corporate Bank Account (Wio/Mashreq)?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Freezone LLCs get corporate bank accounts; Freelance permits use personal accounts." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: needCorporateBank, onChange: (e) => setNeedCorporateBank(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Do you plan to sponsor employee visas in future?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Freelance permits cannot hire employees or issue staff visas." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: needMultipleVisas, onChange: (e) => setNeedMultipleVisas(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl p-6 bg-white space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif font-bold text-navy-950 text-lg", children: "GoFreelance Permit (TECOM)" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-gray-700", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Annual Permit Fee:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono", children: "AED 7,500" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "2-Year Residence Visa:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono", children: "AED 3,500" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-border font-bold text-navy-950 text-sm", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Year-1 Cost:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-gold-600", children: [
                "AED ",
                totalFreelanceYear1.toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-2 border-gold-500 rounded-xl p-6 bg-navy-950 text-white space-y-4 shadow-lg", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-serif font-bold text-white text-lg", children: "Full Freezone LLC (SHAMS / IFZA)" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs text-navy-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Full Trade License & Flexi Desk:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono text-white", children: "AED 9,500" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "2-Year Investor Visa & Medical:" }),
              /* @__PURE__ */ jsx("strong", { className: "font-mono text-white", children: "AED 4,400" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between pt-2 border-t border-white/10 font-bold text-white text-sm", children: [
              /* @__PURE__ */ jsx("span", { children: "Total Year-1 Cost:" }),
              /* @__PURE__ */ jsxs("strong", { className: "font-mono text-emerald-400", children: [
                "AED ",
                freezonePackageCost.toLocaleString()
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Setup UAE Company / License with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Freelance vs Freezone Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line financial and operational comparison of GoFreelance permit vs Full Freezone LLC company." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Outlay & Permit Fee Audit" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Year 1 Budget" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "GoFreelance Permit Total (Year 1):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  totalFreelanceYear1.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Freezone Single-Owner LLC (Year 1):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "AED ",
                  freezonePackageCost.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Banking & Invoicing Capability" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${needCorporateBank ? "bg-emerald-500/20 text-emerald-400" : "bg-gold-500/20 text-gold-400"}`, children: needCorporateBank ? "Corporate Account Needed" : "Personal Account" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Corporate Banking (Wio/Mashreq):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: needCorporateBank ? "text-emerald-400" : "text-white", children: needCorporateBank ? "Requires Freezone LLC ✅" : "Not Available on Freelance" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "B2B Corporate Contracts:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: needCorporateBank ? "LLC Corporate Entity" : "Sole Proprietor" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Employee Sponsorship & Growth" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${needMultipleVisas ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-500/20 text-gray-300"}`, children: needMultipleVisas ? "Hiring Staff" : "Solo Operator" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Staff Employment Visa Quota:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: needMultipleVisas ? "text-emerald-400" : "text-white", children: needMultipleVisas ? "Freezone LLC Quota (1-6+ Visas)" : "0 Staff Visas (GoFreelance)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Business Scalability:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: needMultipleVisas ? "Full Corporate Enterprise" : "Individual Freelancer" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Strategic Setup Recommendation" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Optimal Verdict" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Recommended Legal Option:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: isFreezoneRecommended ? "Freezone LLC Company" : "TECOM GoFreelance Permit" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "ADVAQ Formation Assistance:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Guaranteed 3-Day Turnaround" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UAE Freelance Permit vs Freezone LLC Comparison Matrix" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Feature / Option" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "GoFreelance Permit (TECOM)" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Full Freezone LLC (SHAMS / IFZA)" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "ADVAQ Recommendation" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: !isFreezoneRecommended ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Corporate Bank Account Access" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-rose-600 font-bold", children: "Personal Account Only ❌" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "Wio / Mashreq Corporate ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Freezone LLC for Business Banking" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: isFreezoneRecommended ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Employee Visa Sponsorship Quota" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-rose-600 font-bold", children: "0 Employee Visas ❌" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "1 to 6+ Visa Quotas ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Freezone LLC for Staff Hiring" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Year 1 Setup Investment" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "AED 11,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gold-600", children: "AED 13,900" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-950", children: "Freezone LLC provides 10x value" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Freelance vs Freezone)" })
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
            " ADVAQ UAE Legal Entity Structuring"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Set Up Your UAE Business or Freelance License with ADVAQ" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Not sure whether to register as a freelancer or a Freezone company? Our UAE corporate consultants evaluate your business model and assist with fast-track licensing." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Incorporate UAE Freezone Company ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Structuring Consultant" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAEFreelanceVsFreezonePage as component
};
