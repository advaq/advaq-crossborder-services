import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AlertTriangle, CheckCircle2, ArrowRight, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield } from "lucide-react";
function USFbarFatcaCheckerPage() {
  const [maxAccountBalance, setMaxAccountBalance] = useState(15e3);
  const [isUsPersonOrLlc, setIsUsPersonOrLlc] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const fbarThreshold = 1e4;
  const isFbarFilingMandatory = isUsPersonOrLlc && maxAccountBalance >= fbarThreshold;
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
      name: "FBAR & FATCA Checker",
      item: "https://advaq.com/calculators/us-fbar-fatca-checker-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FBAR (FinCEN 114) & FATCA Requirement Checker (2026/2027)",
    url: "https://advaq.com/calculators/us-fbar-fatca-checker-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check mandatory FinCEN Form 114 FBAR ($10,000 threshold) and IRS FATCA Form 8938 filing requirements for US entities and residents.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the $10,000 aggregate FBAR threshold calculation?",
    a: "The $10,000 threshold is met if the aggregate maximum value of ALL non-US bank accounts owned or controlled by a US person/LLC exceeds $10,000 at ANY time during the calendar year (even for 1 day)."
  }, {
    q: "Do foreign-owned single-member US LLCs file FBAR?",
    a: "A US domestic LLC is legally a 'US Person' under Treasury regulations. If a US LLC holds financial accounts in non-US banks or fintechs outside the US with peak balances exceeding $10,000, FinCEN 114 must be filed."
  }, {
    q: "What is the penalty for failing to file FBAR?",
    a: "Non-willful failure to file carries statutory civil penalties up to $10,000+ per violation. Willful non-filing penalties can reach $100,000 or 50% of the account balance, plus criminal charges."
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
          /* @__PURE__ */ jsx("span", { children: "FBAR & FATCA Compliance" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FBAR (FinCEN 114) & FATCA Requirement Checker (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Verify whether your US LLC or foreign financial accounts cross the $10,000 threshold requiring annual FinCEN 114 reporting." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex items-center gap-5 ${isFbarFilingMandatory ? "bg-amber-50 border-amber-300 text-amber-950" : "bg-emerald-50 border-emerald-300 text-emerald-950"}`, children: [
        isFbarFilingMandatory ? /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0", size: 36 }) : /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0", size: 36 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isFbarFilingMandatory ? "Mandatory FBAR (FinCEN 114) Filing Required!" : "Below $10,000 Threshold — No FBAR Required" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed", children: isFbarFilingMandatory ? `Your maximum aggregate foreign bank balance reached $${maxAccountBalance.toLocaleString()}, exceeding the $10,000 threshold. You must submit FinCEN Form 114 by April 15 (auto-extended to Oct 15).` : `Your aggregate bank balance ($${maxAccountBalance.toLocaleString()}) remained under $10,000 throughout the year. No FBAR report is required.` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Highest Peak Aggregate Bank Balance During Calendar Year ($):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "$",
              maxAccountBalance.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "2000", max: "100000", step: "2500", value: maxAccountBalance, onChange: (e) => setMaxAccountBalance(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Combines max balances of all non-US bank accounts, Wise, Payoneer, and sub-accounts." })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Is the Account Held by a US LLC or US Person?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "US entity or US tax resident signature authority." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isUsPersonOrLlc, onChange: (e) => setIsUsPersonOrLlc(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      isFbarFilingMandatory && /* @__PURE__ */ jsxs("div", { className: "p-5 bg-navy-950 text-white rounded-xl border border-gold-500/40 text-xs space-y-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
          /* @__PURE__ */ jsx("span", { children: "Statutory FBAR Penalty Warning" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-navy-200 leading-relaxed", children: [
          "Failing to file FinCEN 114 carries non-willful statutory civil penalties up to ",
          /* @__PURE__ */ jsx("strong", { children: "$10,000 per violation" }),
          ", and willful penalties up to ",
          /* @__PURE__ */ jsx("strong", { children: "$100,000 or 50% of account balance" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "File FBAR with ADVAQ Compliance Team ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step FBAR & FATCA Compliance Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of FinCEN Form 114 and IRS Form 8938 filing thresholds." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Aggregate Foreign Account Peak" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "$",
                maxAccountBalance.toLocaleString(),
                " Peak"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Peak Account Balance:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "$",
                  maxAccountBalance.toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FinCEN 114 Statutory Threshold:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: "$10,000 USD Aggregate" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: US Person / Entity Classification" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isUsPersonOrLlc ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`, children: isUsPersonOrLlc ? "US Person / LLC ✅" : "Foreign Individual" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Account Holder Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: isUsPersonOrLlc ? "US Registered LLC / US Person" : "Foreign Non-US Individual" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FBAR Statutory Scope:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isUsPersonOrLlc ? "text-emerald-400" : "text-amber-400", children: isUsPersonOrLlc ? "Subject to FinCEN 114" : "Exempt" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: FATCA Form 8938 Threshold" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "$50k–$400k Scope" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "IRS Form 8938 Threshold:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "$50,000 USD (Single US Resident)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FATCA Filing Required:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: maxAccountBalance >= 5e4 && isUsPersonOrLlc ? "text-amber-400" : "text-emerald-400", children: maxAccountBalance >= 5e4 && isUsPersonOrLlc ? "YES (Form 8938 Required)" : "NO (Below $50k)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final FBAR & FATCA Verdict" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isFbarFilingMandatory ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`, children: isFbarFilingMandatory ? "FBAR Required ⚠️" : "No Filing Needed ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "FinCEN 114 Filing Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: isFbarFilingMandatory ? "MANDATORY (Due April 15 / Oct 15)" : "EXEMPT ($0 Owed)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Penalty Risk Exposure:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isFbarFilingMandatory ? "text-red-400" : "text-emerald-400", children: isFbarFilingMandatory ? "Up to $10,000 Non-Willful Fine" : "$0 Fine Exposure" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "FBAR (FinCEN 114) vs FATCA (Form 8938) Comparison Matrix" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Filing Provision" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "FBAR (FinCEN Form 114)" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "FATCA (IRS Form 8938)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Filing Threshold" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "$10,000 (Aggregate Peak Balance)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600 font-bold", children: "$50,000 to $400,000+" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Filing Agency" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gold-600 font-bold", children: "FinCEN (BSAE-Filing)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-navy-950 font-bold", children: "IRS (Income Tax Return)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Non-Filing Penalty" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "$10,000+ Civil Penalty" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "$10,000 + $50,000 Continuation" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (FBAR & FATCA)" })
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
            " ADVAQ US Certified CPA FBAR Filing Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need Annual FinCEN 114 FBAR Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our US CPA team prepares accurate BSA E-Filing FinCEN 114 reports for foreign-owned LLCs and US persons to prevent $10,000 statutory penalties." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File FBAR Report with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp FBAR CPA" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USFbarFatcaCheckerPage as component
};
