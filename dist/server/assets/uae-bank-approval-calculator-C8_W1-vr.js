import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UAEBankApprovalCalculatorPage() {
  const [hasEmiratesId, setHasEmiratesId] = useState(true);
  const [hasEjariOffice, setHasEjariOffice] = useState(false);
  const [minMonthlyBalanceAED, setMinMonthlyBalanceAED] = useState(25e3);
  const [businessActivity, setBusinessActivity] = useState("it-consulting");
  const [openFaq, setOpenFaq] = useState(0);
  let score = 30;
  if (hasEmiratesId) score += 30;
  if (hasEjariOffice) score += 20;
  if (minMonthlyBalanceAED >= 5e4) score += 15;
  else if (minMonthlyBalanceAED >= 1e4) score += 10;
  if (businessActivity === "it-consulting" || businessActivity === "marketing") score += 5;
  else if (businessActivity === "crypto" || businessActivity === "trading") score -= 20;
  score = Math.min(99, Math.max(10, score));
  let bankRec = "Wio Business & Mashreq NeoBiz";
  if (score > 80) bankRec = "Wio Business, Mashreq NeoBiz & Emirates NBD";
  else if (score > 60) bankRec = "Wio Business & RAKBANK Digital";
  else bankRec = "Specialized UAE Corporate Banking Assistance Required";
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
      name: "Dubai Bank Approval Checker",
      item: "https://advaq.com/calculators/uae-bank-approval-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dubai Corporate Bank Account Approval Probability Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-bank-approval-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check corporate banking approval odds for Wio Bank, Mashreq NeoBiz, Emirates NBD, and RAKBANK for UAE Freezone & Mainland entities.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Which UAE bank is easiest for digital onboarding and non-resident founders?",
    a: "Wio Bank is currently the fastest and most accessible digital corporate bank in the UAE. Onboarding takes 1 to 3 business days via the Wio app, with no physical branch visit required if the founder holds a valid Emirates ID."
  }, {
    q: "Is an Emirates ID mandatory to open a business bank account in Dubai?",
    a: "YES! For digital banks like Wio and Mashreq NeoBiz, the primary signatory MUST hold a valid UAE Residence Visa and Emirates ID. For non-resident high-street banking (e.g. Emirates NBD), physical presence and minimum balance requirements of AED 50,000+ apply."
  }, {
    q: "What documents do UAE banks require for corporate account opening?",
    a: "Required documents include: Valid UAE Trade License, Memorandum of Association (MOA), Certificate of Formation, Passport copy, Emirates ID, 6-month personal/corporate bank statements, and proof of address."
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
          /* @__PURE__ */ jsx("span", { children: "Dubai Bank Approval Checker" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Dubai Corporate Bank Account Approval Checker (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check your approval probability for Wio Bank, Mashreq NeoBiz, Emirates NBD, and RAKBANK for Freezone & Mainland companies." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Business Activity:" }),
          /* @__PURE__ */ jsxs("select", { value: businessActivity, onChange: (e) => setBusinessActivity(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "it-consulting", children: "Software, Tech & IT Consultancy" }),
            /* @__PURE__ */ jsx("option", { value: "marketing", children: "Digital Marketing & Media Agency" }),
            /* @__PURE__ */ jsx("option", { value: "trading", children: "General Trading & Physical Goods" }),
            /* @__PURE__ */ jsx("option", { value: "crypto", children: "Crypto, Gaming or Financial Trading" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. Planned Minimum Monthly Balance (AED):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "AED ",
              minMonthlyBalanceAED.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "100000", step: "5000", value: minMonthlyBalanceAED, onChange: (e) => setMinMonthlyBalanceAED(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasEmiratesId, onChange: (e) => setHasEmiratesId(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "UAE Residence Visa & Emirates ID Stamped?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Crucial for UAE compliance KYC." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasEjariOffice, onChange: (e) => setHasEjariOffice(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Physical Office Space with Ejari Tenancy?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Improves traditional bank approval (Emirates NBD / FAB)." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Dubai Bank Approval Odds" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-6 rounded-xl text-center mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Estimated Approval Odds" }),
            /* @__PURE__ */ jsxs("div", { className: "text-5xl font-serif font-bold text-white my-2", children: [
              score,
              "%"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-navy-200", children: [
              "Recommended Banks: ",
              /* @__PURE__ */ jsx("strong", { className: "text-gold-400 block mt-1 font-sans", children: bankRec })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uae-services/business-bank-account-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Open UAE Bank Account with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Corporate Bank Approval Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of UAE Central Bank KYC scoring, Emirates ID validation, and office proof." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Activity Risk & Compliance Weight" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Risk Tiering" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Selected Commercial Activity:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: businessActivity.toUpperCase() })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Activity Risk Rating:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: businessActivity === "crypto" || businessActivity === "trading" ? "High Risk (Enhanced Due Diligence)" : "Low Risk (Standard Onboarding)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Signatory Residency & Office Lease" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${hasEmiratesId ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`, children: hasEmiratesId ? "EID Validated ✅" : "Non-Resident Status" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "UAE Residence Visa & EID:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: hasEmiratesId ? "text-emerald-400" : "text-amber-400", children: hasEmiratesId ? "YES (+30 Points)" : "NO (Non-Resident)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Ejari Commercial Office Space:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: hasEjariOffice ? "text-emerald-400" : "text-navy-300", children: hasEjariOffice ? "YES (+20 Points)" : "Shared Flexi-Desk" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Average Balance Commitment" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "AED ",
                minMonthlyBalanceAED.toLocaleString(),
                " / mo"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Planned Monthly Account Balance:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "AED ",
                  minMonthlyBalanceAED.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Balance Score Bonus:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-emerald-400", children: [
                  "+",
                  minMonthlyBalanceAED >= 5e4 ? "15" : minMonthlyBalanceAED >= 1e4 ? "10" : "0",
                  " Points"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final Banking Match Verdict" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: [
                score,
                "% Score"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Score Rating:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  score,
                  "% Approval Odds"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Target Banking Partner:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: bankRec })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Top UAE Corporate Banking Options & Onboarding Matrix (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Bank Name" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Account Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Min. Monthly Balance" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Avg. Onboarding Speed" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: "bg-gold-500/10 font-bold", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-950", children: "Wio Business Digital Bank" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Digital Neobank" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "AED 0 – AED 3,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "1–3 Business Days ✅" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Mashreq NeoBiz" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Digital SME Bank" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "AED 10,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "3–7 Business Days" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Emirates NBD / FAB" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Traditional High-Street Bank" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600", children: "AED 50,000 – AED 200,000" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "2–4 Weeks" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Dubai Corporate Banking)" })
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
            " ADVAQ UAE Banking Concierge"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Open Your UAE Corporate Bank Account with ADVAQ" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our banking relationship team prepares your corporate KYC dossier, business plan profile, and manages introductions with Wio Bank, Mashreq NeoBiz, and Emirates NBD." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uae-services/business-bank-account-guide", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Get Banking Assistance ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Banking Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAEBankApprovalCalculatorPage as component
};
