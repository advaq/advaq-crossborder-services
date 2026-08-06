import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UKPenaltyRiskCalculatorPage() {
  const [monthsOverdueAccounts, setMonthsOverdueAccounts] = useState(2);
  const [isSecondConsecutiveYear, setIsSecondConsecutiveYear] = useState(false);
  const [monthsOverdueCT600, setMonthsOverdueCT600] = useState(3);
  const [overdueTaxBill, setOverdueTaxBill] = useState(5e3);
  const [openFaq, setOpenFaq] = useState(0);
  let companiesHousePenalty = 0;
  if (monthsOverdueAccounts > 0) {
    if (monthsOverdueAccounts <= 1) companiesHousePenalty = 150;
    else if (monthsOverdueAccounts <= 3) companiesHousePenalty = 375;
    else if (monthsOverdueAccounts <= 6) companiesHousePenalty = 750;
    else companiesHousePenalty = 1500;
    if (isSecondConsecutiveYear) {
      companiesHousePenalty *= 2;
    }
  }
  let hmrcLatePenalty = 0;
  if (monthsOverdueCT600 > 0) {
    if (monthsOverdueCT600 <= 3) hmrcLatePenalty = 100;
    else if (monthsOverdueCT600 <= 6) hmrcLatePenalty = 200;
    else hmrcLatePenalty = 500;
  }
  const hmrcInterestRate = 0.075;
  const daysOverdue = monthsOverdueCT600 * 30;
  const hmrcLateInterest = overdueTaxBill > 0 && daysOverdue > 0 ? overdueTaxBill * hmrcInterestRate * (daysOverdue / 365) : 0;
  const totalOverduePenalties = Math.round(companiesHousePenalty + hmrcLatePenalty + hmrcLateInterest);
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
      name: "HMRC & Companies House Penalty Estimator",
      item: "https://advaq.com/calculators/uk-penalty-risk-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HMRC & Companies House Late Filing Penalty Estimator (2026/2027)",
    url: "https://advaq.com/calculators/uk-penalty-risk-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate UK Companies House late accounts penalties, doubling penalties, HMRC CT600 late interest, and strike-off risks.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What are the official Companies House statutory late accounts penalties?",
    a: "For private limited companies, Companies House statutory penalties for late accounts are: Up to 1 month late = £150, 1 to 3 months late = £375, 3 to 6 months late = £750, and over 6 months late = £1,500. Penalties double automatically if accounts are late two consecutive financial years."
  }, {
    q: "What happens if a UK company fails to file its Confirmation Statement (CS01)?",
    a: "If a company fails to file its annual Confirmation Statement (CS01), Companies House will issue warning letters and initiate compulsory strike-off proceedings (First Gazette Notice). If unfiled, the company is dissolved and its bank accounts and corporate assets forfeit to the Crown (Bona Vacantia)."
  }, {
    q: "What are the HMRC CT600 Corporation Tax late filing penalties?",
    a: "HMRC charges a £100 fixed penalty for filing 1 day late, an additional £100 at 3 months late, plus an estimated 10% tax penalty at 6 months late, and another 10% tax penalty at 12 months late."
  }, {
    q: "Can Companies House or HMRC late filing penalties be appealed?",
    a: "Yes, but only under exceptional 'Reasonable Excuse' circumstances such as severe illness of the sole director, fire/flood damaging records, or proven technical failure of the Companies House electronic filing portal. Ignorance of deadlines or failure of an accountant is NOT accepted."
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
          /* @__PURE__ */ jsx("span", { children: "UK Late Filing Penalty Risk" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "HMRC & Companies House Late Penalty Estimator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact statutory penalties and interest for overdue annual accounts, Confirmation Statements, and CT600 Corporation Tax returns." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-8 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "1. Companies House Accounts Overdue Period:" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-600 font-bold text-base", children: monthsOverdueAccounts === 0 ? "On Time (0 Months)" : `${monthsOverdueAccounts} Months Late` })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "12", step: "1", value: monthsOverdueAccounts, onChange: (e) => setMonthsOverdueAccounts(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isSecondConsecutiveYear, onChange: (e) => setIsSecondConsecutiveYear(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "Late for 2nd Consecutive Year?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Companies House doubles statutory penalties if accounts are late 2 years in a row." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "2. HMRC CT600 Corporation Tax Overdue Period:" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-600 font-bold text-base", children: monthsOverdueCT600 === 0 ? "On Time (0 Months)" : `${monthsOverdueCT600} Months Late` })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "12", step: "1", value: monthsOverdueCT600, onChange: (e) => setMonthsOverdueCT600(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "3. Overdue Corporation Tax Liability (£):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "£",
              overdueTaxBill.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "0", max: "50000", step: "1000", value: overdueTaxBill, onChange: (e) => setOverdueTaxBill(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Statutory Penalty Estimate" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Companies House Late Accounts Fine:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                companiesHousePenalty.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "HMRC CT600 Late Filing Fine:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-400 font-semibold", children: [
                "£",
                hmrcLatePenalty.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "HMRC Statutory Interest (7.5% p.a.):" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-amber-400 font-semibold", children: [
                "£",
                Math.round(hmrcLateInterest).toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Penalty & Interest Risk" }),
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-serif font-bold text-red-400", children: [
              "£",
              totalOverduePenalties.toLocaleString()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uk-services/corporation-tax-return", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File Catch-Up Returns with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Statutory Penalty Walkthrough" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of statutory penalties & interest charges under UK Companies House & HMRC rules." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Companies House Late Accounts Penalty" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]", children: [
                "£",
                companiesHousePenalty.toLocaleString(),
                " Fine"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Overdue Period:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  monthsOverdueAccounts,
                  " Month(s) Late"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Doubled Surcharge (2nd Year Late):" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-amber-400", children: isSecondConsecutiveYear ? "YES (2x Penalty Applied)" : "No" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Companies House Fine:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  companiesHousePenalty.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: HMRC CT600 Late Filing Penalty" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px]", children: [
                "£",
                hmrcLatePenalty.toLocaleString(),
                " Fine"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Overdue CT600 Period:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  monthsOverdueCT600,
                  " Month(s) Late"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400", children: [
                /* @__PURE__ */ jsx("span", { children: "HMRC Late Fine:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  hmrcLatePenalty.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: HMRC Statutory Late Interest (7.5%)" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: "7.5% Interest" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Unpaid Tax Liability:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "£",
                  overdueTaxBill.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-amber-400", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory Interest Accrued:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "+£",
                  Math.round(hmrcLateInterest).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Total Statutory Exposure" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: "Total Risk" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-red-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Penalty & Interest Risk:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "£",
                  totalOverduePenalties.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Compulsory Strike-Off Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: monthsOverdueAccounts > 6 ? "text-red-400" : "text-amber-400", children: monthsOverdueAccounts > 6 ? "HIGH RISK (First Gazette Notice)" : "Action Required" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Companies House Late Filing Penalty Rates (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Overdue Period" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Standard Penalty (1st Year)" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Penalty (2nd Consecutive Year)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Up to 1 Month Late" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "£150" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-red-600", children: "£300" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "1 to 3 Months Late" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-gold-600", children: "£375" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-red-600", children: "£750" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "3 to 6 Months Late" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-red-600", children: "£750" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-red-600", children: "£1,500" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Over 6 Months Late" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-red-600", children: "£1,500" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-red-600", children: "£3,000" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UK Late Penalties)" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Facing Overdue Accounts or Strike-Off Warnings?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our emergency UK chartered accounting team prepares catch-up accounts in 48 hours, stops Companies House strike-off action, and files penalty appeals with HMRC." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uk-services/corporation-tax-return", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File Overdue Accounts with ADVAQ ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Emergency Accountant" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UKPenaltyRiskCalculatorPage as component
};
