import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, BookOpen, HelpCircle, ChevronDown, ShieldCheck, ArrowRight } from "lucide-react";
function UAEQFZPEligibilityPage() {
  const [qualifyingIncome, setQualifyingIncome] = useState(45e5);
  const [nonQualifyingIncome, setNonQualifyingIncome] = useState(15e4);
  const [maintainsSubstance, setMaintainsSubstance] = useState(true);
  const [auditedAccounts, setAuditedAccounts] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const totalRevenue = qualifyingIncome + nonQualifyingIncome;
  const deMinimisLimit = Math.min(totalRevenue * 0.05, 5e6);
  const passesDeMinimis = nonQualifyingIncome <= deMinimisLimit;
  const qualifiesQFZP = maintainsSubstance && auditedAccounts && passesDeMinimis;
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
      name: "UAE QFZP 0% Tax Checker",
      item: "https://advaq.com/calculators/uae-qfzp-eligibility-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Qualifying Free Zone Person (QFZP) 0% Tax Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-qfzp-eligibility-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Verify 0% UAE Corporate Tax eligibility for Free Zone entities under Cabinet Decision No. 55 and Ministerial Decision No. 139 of 2023.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is a Qualifying Free Zone Person (QFZP) in the UAE?",
    a: "A QFZP is a Free Zone company that satisfies 5 strict conditions: 1) Maintains adequate substance in a UAE Free Zone, 2) Derives Qualifying Income, 3) Has not elected to be subject to standard 9% tax, 4) Complies with Transfer Pricing rules, and 5) Satisfies the De Minimis requirement."
  }, {
    q: "What is the De Minimis rule for non-qualifying income?",
    a: "Under Ministerial Decision No. 139 of 2023, non-qualifying revenue derived by a Free Zone person must not exceed 5% of total revenue OR AED 5,000,000, whichever is lower. Exceeding this limit revokes 0% QFZP status for 5 consecutive tax years."
  }, {
    q: "Are audited financial statements mandatory to claim 0% QFZP tax?",
    a: "YES! To maintain QFZP status and benefit from 0% Corporate Tax, a Free Zone entity MUST prepare and maintain audited financial statements prepared in accordance with IFRS."
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
          /* @__PURE__ */ jsx("span", { children: "QFZP 0% Tax Status" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Qualifying Free Zone Person (QFZP) 0% Tax Checker (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Verify 0% UAE Corporate Tax eligibility under Cabinet Decision No. 55 & 139 of 2023 for Free Zone businesses." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-lg font-bold text-navy-950", children: "Freezone Revenue & Compliance Inputs" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-gray-700 mb-1", children: "Qualifying Income (AED)" }),
          /* @__PURE__ */ jsx("input", { type: "number", value: qualifyingIncome, onChange: (e) => setQualifyingIncome(Number(e.target.value)), className: "w-full bg-white border border-border rounded-lg p-3 text-sm font-medium focus:outline-none focus:border-gold-500" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-gray-700 mb-1", children: "Non-Qualifying / Local Income (AED)" }),
          /* @__PURE__ */ jsx("input", { type: "number", value: nonQualifyingIncome, onChange: (e) => setNonQualifyingIncome(Number(e.target.value)), className: "w-full bg-white border border-border rounded-lg p-3 text-sm font-medium focus:outline-none focus:border-gold-500" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white border border-border p-3.5 rounded-xl", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold block", children: "Adequate Substance in UAE Free Zone?" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500", children: "Staff, office space & core income generating activities" })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: maintainsSubstance, onChange: (e) => setMaintainsSubstance(e.target.checked), className: "w-4 h-4 accent-gold-500 shrink-0" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white border border-border p-3.5 rounded-xl", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold block", children: "Prepares Audited Financial Statements?" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500", children: "Mandatory requirement for QFZP status" })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: auditedAccounts, onChange: (e) => setAuditedAccounts(e.target.checked), className: "w-4 h-4 accent-gold-500 shrink-0" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-gold-400", children: "QFZP Status Assessment" }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl font-bold mt-2", children: qualifiesQFZP ? "✅ Qualifies for 0% Corporate Tax" : "⚠️ Subject to 9% Corporate Tax" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-3 text-xs border-t border-navy-800 pt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "De Minimis Threshold (5% or AED 5M):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-bold font-mono text-white", children: [
                "AED ",
                Math.round(deMinimisLimit).toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "De Minimis Test Result:" }),
              /* @__PURE__ */ jsx("span", { className: `font-bold ${passesDeMinimis ? "text-emerald-400" : "text-rose-400"}`, children: passesDeMinimis ? "PASSED" : "FAILED" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold pt-2 border-t border-navy-800", children: [
              /* @__PURE__ */ jsx("span", { children: "Applicable Tax Rate:" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg", children: qualifiesQFZP ? "0% (QFZP Rate)" : "9% (Standard Rate)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Get Free Zone Corporate Tax Structuring" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step QFZP 0% Tax Eligibility Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of Cabinet Decision No. 55 & Ministerial Decision No. 139 of 2023 de minimis compliance." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Total Revenue & Income Split" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "AED ",
                totalRevenue.toLocaleString(),
                " Total"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Qualifying Freezone Income:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "AED ",
                  qualifyingIncome.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Non-Qualifying / Mainland Revenue:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  nonQualifyingIncome.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Ministerial Decision 139 De Minimis Test" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${passesDeMinimis ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`, children: passesDeMinimis ? "De Minimis Passed ✅" : "Exceeded Limit ❌" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory Cap (5% or AED 5M):" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  Math.round(deMinimisLimit).toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Actual Non-Qualifying Revenue:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: passesDeMinimis ? "text-emerald-400" : "text-red-400", children: [
                  "AED ",
                  nonQualifyingIncome.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Adequate Substance & IFRS Audit" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${maintainsSubstance && auditedAccounts ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`, children: maintainsSubstance && auditedAccounts ? "Compliant ✅" : "Incomplete Requirements" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Adequate Freezone Substance:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: maintainsSubstance ? "text-emerald-400" : "text-amber-400", children: maintainsSubstance ? "YES" : "NO" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Audited Financial Statements:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: auditedAccounts ? "text-emerald-400" : "text-amber-400", children: auditedAccounts ? "YES (IFRS Compliant)" : "NO" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final Corporate Tax Verdict" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${qualifiesQFZP ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`, children: qualifiesQFZP ? "0% QFZP Status ✅" : "9% Standard Tax Rate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Applicable Corporate Tax Rate:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: qualifiesQFZP ? "0% (Qualifying Free Zone Person)" : "9% (Standard Rate)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Tax Status Risk Period:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: qualifiesQFZP ? "Clean Compliance" : "5-Year Revocation Risk if Disqualified" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "UAE QFZP Qualifying Activities vs Non-Qualifying Matrix (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Income Source / Activity" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Counterparty Location" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "QFZP Tax Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Cabinet Decision Reference" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: "bg-gold-500/10 font-bold", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-950", children: "Manufacturing & Processing Goods" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Free Zone or Foreign Person" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% Corporate Tax ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Cabinet Decision No. 55 of 2023" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Headquarter & Treasury Services" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Related Parties Worldwide" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% Corporate Tax ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Ministerial Decision No. 139 of 2023" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Retail Sales to Mainland Individuals" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "UAE Mainland Consumers" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "9% Standard Rate (De Minimis Counted)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Ministerial Decision No. 139 of 2023" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UAE QFZP 0% Tax)" })
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
            /* @__PURE__ */ jsx(ShieldCheck, { size: 16 }),
            " ADVAQ UAE Corporate Tax Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Secure Your 0% QFZP Corporate Tax Status with ADVAQ" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our UAE tax consultants perform transfer pricing audits, de minimis testing, and IFRS financial statement reviews to safeguard your 0% freezone tax status." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Consult ADVAQ UAE Tax Specialist ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp QFZP Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAEQFZPEligibilityPage as component
};
