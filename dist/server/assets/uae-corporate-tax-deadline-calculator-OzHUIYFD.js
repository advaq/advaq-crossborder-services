import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Gift, Sparkles, TrendingUp, Calendar, RefreshCw, Ban, DollarSign, Building, AlertTriangle, FileText, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function UAECorporateTaxDeadlinePage() {
  const [incDateStr, setIncDateStr] = useState("2025-09-15");
  const [finYearEndMonth, setFinYearEndMonth] = useState("12");
  const [taxYear, setTaxYear] = useState(2025);
  const [isRegistered, setIsRegistered] = useState(false);
  const [canFileWithin7Months, setCanFileWithin7Months] = useState(true);
  const [checkedDocs, setCheckedDocs] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const incDate = new Date(incDateStr) || /* @__PURE__ */ new Date("2025-09-15");
  const incYear = incDate.getFullYear();
  const incMonthIndex = incDate.getMonth();
  const legacyDeadlinesByMonth = [
    "May 31, 2024",
    // Jan
    "May 31, 2024",
    // Feb
    "June 30, 2024",
    // Mar
    "June 30, 2024",
    // Apr
    "July 31, 2024",
    // May
    "August 31, 2024",
    // Jun
    "September 30, 2024",
    // Jul
    "October 31, 2024",
    // Aug
    "October 31, 2024",
    // Sep
    "November 30, 2024",
    // Oct
    "November 30, 2024",
    // Nov
    "December 31, 2024"
    // Dec
  ];
  let regDeadlineStr = "";
  let isOverdue = false;
  if (incYear < 2024) {
    regDeadlineStr = legacyDeadlinesByMonth[incMonthIndex];
    isOverdue = !isRegistered;
  } else {
    const deadlineDate = new Date(incDate);
    deadlineDate.setMonth(deadlineDate.getMonth() + 3);
    regDeadlineStr = deadlineDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    const now = /* @__PURE__ */ new Date();
    isOverdue = !isRegistered && now > deadlineDate;
  }
  const effectiveYear = Math.max(taxYear, incYear < 2024 ? 2024 : incYear);
  let firstTaxPeriodStart = `Jan 1, ${effectiveYear}`;
  let firstTaxPeriodEnd = `Dec 31, ${effectiveYear}`;
  let waiverCutOffDateStr = `July 31, ${effectiveYear + 1}`;
  let ctReturnFilingDeadline = `Sep 30, ${effectiveYear + 1}`;
  if (finYearEndMonth === "03") {
    firstTaxPeriodStart = `Apr 1, ${effectiveYear}`;
    firstTaxPeriodEnd = `Mar 31, ${effectiveYear + 1}`;
    waiverCutOffDateStr = `October 31, ${effectiveYear + 1}`;
    ctReturnFilingDeadline = `December 31, ${effectiveYear + 1}`;
  } else if (finYearEndMonth === "06") {
    firstTaxPeriodStart = `Jul 1, ${effectiveYear}`;
    firstTaxPeriodEnd = `Jun 30, ${effectiveYear + 1}`;
    waiverCutOffDateStr = `January 31, ${effectiveYear + 2}`;
    ctReturnFilingDeadline = `March 31, ${effectiveYear + 2}`;
  }
  const grossLateFineAED = isRegistered ? 0 : isOverdue ? 1e4 : 0;
  const isWaiverEligible = !isRegistered && isOverdue && canFileWithin7Months;
  const trnChecklist = [{
    id: "license",
    title: "Valid UAE Trade License / Commercial License",
    subtitle: "Mainland DET or Free Zone Authority License copy"
  }, {
    id: "moa",
    title: "Memorandum of Association (MOA) / Articles (AOA)",
    subtitle: "Signed MOA showing shareholding structure"
  }, {
    id: "passport",
    title: "Passport Copy of Authorized Manager / Director",
    subtitle: "Color copy of valid passport"
  }, {
    id: "eid",
    title: "Emirates ID Copy of Authorized Signatory",
    subtitle: "Front & back copy of EID"
  }, {
    id: "poa",
    title: "Proof of Authorization (POA or Manager on License)",
    subtitle: "Document conferring manager signing authority"
  }, {
    id: "ejari",
    title: "Ejari Tenancy Lease / Flexi-Desk Agreement",
    subtitle: "Proof of physical registered office address in UAE"
  }, {
    id: "contact",
    title: "Official UAE Business Email & Phone Number",
    subtitle: "Mobile number linked to UAE Pass for EmaraTax OTP"
  }, {
    id: "financial",
    title: "Confirmation of Financial Year End Date",
    subtitle: "Official declaration of accounting period (e.g. Dec 31)"
  }];
  const toggleChecklist = (id) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  const totalChecked = Object.values(checkedDocs).filter(Boolean).length;
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
      name: "UAE Corporate Tax Compliance Calendar",
      item: "https://advaq.com/calculators/uae-corporate-tax-deadline-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UAE Corporate Tax Deadline & AED 10,000 Penalty Waiver Checker (2026/2027)",
    url: "https://advaq.com/calculators/uae-corporate-tax-deadline-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check mandatory Federal Tax Authority (FTA) Corporate Tax registration deadlines, 7-month return penalty waiver cut-off dates, and AED 10,000 reconsideration application eligibility.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the exact 7-month penalty waiver cut-off date for my company?",
    a: "The 7-month penalty waiver cut-off date is exactly 7 months following the close of your company's tax period. For example, for a financial year ending December 31, 2024, the 7-month waiver cut-off date is July 31, 2025. If your return is submitted prior to July 31, 2025, ADVAQ can apply for a 100% FTA penalty waiver."
  }, {
    q: "Can the AED 10,000 Corporate Tax late registration penalty be waived by the FTA?",
    a: "YES! Under Cabinet Decision No. 75 of 2023 and Tax Procedures Law Article 27, if a taxable entity rectifies its registration and submits its first Corporate Tax return within 7 months of tax period end, an official FTA Administrative Penalty Reconsideration Application can be filed to waive or credit back the AED 10,000 fine."
  }, {
    q: "What is the penalty for missing the UAE Corporate Tax registration deadline?",
    a: "Under FTA Administrative Decision No. 3 of 2024, a mandatory administrative penalty of AED 10,000 applies automatically to any taxable entity that fails to submit its Corporate Tax registration application within the designated deadline."
  }, {
    q: "When is the annual Corporate Tax return filing deadline in the UAE?",
    a: "The Corporate Tax return must be filed, and any tax liability paid, within 9 months following the end of the relevant tax period (e.g., for a tax year ending December 31, 2024, the standard filing deadline is September 30, 2025)."
  }, {
    q: "Do dormant or zero-revenue UAE companies need to register for Corporate Tax?",
    a: "YES! All entities holding a valid UAE trade license (mainland or free zone) must register for Corporate Tax with the FTA, regardless of whether they have generated active business revenue."
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
          /* @__PURE__ */ jsx("span", { children: "Corporate Tax Deadline & Waiver" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "UAE Corporate Tax Deadline & Penalty Waiver Checker (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Select your tax year, incorporation date, and financial year end to calculate your exact FTA Corporate Tax deadlines, 7-month waiver cut-off dates, and AED 10,000 fine exposure." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Target Tax Year:" }),
          /* @__PURE__ */ jsxs("select", { value: taxYear, onChange: (e) => setTaxYear(Number(e.target.value)), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: 2024, children: "Tax Year 2024 (First UAE CT Period)" }),
            /* @__PURE__ */ jsx("option", { value: 2025, children: "Tax Year 2025" }),
            /* @__PURE__ */ jsx("option", { value: 2026, children: "Tax Year 2026" }),
            /* @__PURE__ */ jsx("option", { value: 2027, children: "Tax Year 2027" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "2. Select Company Trade License / Registration Date:" }),
          /* @__PURE__ */ jsx("input", { type: "date", value: incDateStr, onChange: (e) => setIncDateStr(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] text-gray-500 block mt-1", children: "Found on your official DED / DET or Free Zone Trade License document." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "3. Select Company Financial Year End:" }),
          /* @__PURE__ */ jsxs("select", { value: finYearEndMonth, onChange: (e) => setFinYearEndMonth(e.target.value), className: "w-full bg-white border border-border rounded-xl p-3 text-xs text-navy-950 font-semibold focus:outline-none focus:border-gold-500", children: [
            /* @__PURE__ */ jsx("option", { value: "12", children: "December 31 (Standard Calendar Year)" }),
            /* @__PURE__ */ jsx("option", { value: "03", children: "March 31 (UK / India Financial Year Standard)" }),
            /* @__PURE__ */ jsx("option", { value: "06", children: "June 30 (Mid-Year Financial Standard)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "4. Has Your Company Received a Corporate Tax TRN Number?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsRegistered(true), className: `p-3 rounded-xl border text-center transition-all text-xs font-semibold ${isRegistered ? "bg-emerald-950 text-white border-emerald-500 shadow" : "bg-white text-navy-950 border-border hover:border-emerald-500/50"}`, children: "✅ Yes — Registered (TRN Active)" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsRegistered(false), className: `p-3 rounded-xl border text-center transition-all text-xs font-semibold ${!isRegistered ? "bg-red-950 text-white border-red-500 shadow" : "bg-white text-navy-950 border-border hover:border-red-500/50"}`, children: "❌ No — Not Registered Yet" })
          ] })
        ] }),
        !isRegistered && isOverdue && /* @__PURE__ */ jsx("div", { className: "p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl space-y-2", children: /* @__PURE__ */ jsxs("label", { className: "flex items-start justify-between cursor-pointer text-xs gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("strong", { className: "text-navy-950 block text-sm font-bold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Gift, { size: 16, className: "text-gold-600 shrink-0" }),
              "Can Submit CT Return Prior to 7-Month Waiver Cut-Off (",
              waiverCutOffDateStr,
              ")?"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-gray-600 text-[11px] leading-relaxed block mt-0.5", children: [
              "Under FTA Tax Procedures Law Article 27, filing your return before ",
              /* @__PURE__ */ jsx("strong", { children: waiverCutOffDateStr }),
              " makes your company eligible for a ",
              /* @__PURE__ */ jsx("strong", { children: "100% FTA Administrative Penalty Waiver Application" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: canFileWithin7Months, onChange: (e) => setCanFileWithin7Months(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 mt-1" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "FTA Compliance Audit Status" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Mandatory TRN Registration Deadline:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-bold", children: regDeadlineStr })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Statutory Administrative Penalty:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-red-400 font-bold", children: [
                "AED ",
                grossLateFineAED.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "7-Month Penalty Waiver Cut-Off Date:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-bold bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/30", children: waiverCutOffDateStr })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Standard 9-Month CT Filing Deadline:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-emerald-400 font-bold", children: ctReturnFilingDeadline })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `p-5 rounded-xl mb-4 border ${isRegistered ? "bg-emerald-950/60 border-emerald-500/50" : isWaiverEligible ? "bg-gold-950/80 border-gold-500/60" : isOverdue ? "bg-red-950/80 border-red-500/60" : "bg-navy-900 border-gold-500/40"}`, children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest font-semibold block mb-1 text-gold-400", children: isRegistered ? "FTA Registration Status" : isWaiverEligible ? "🎁 100% PENALTY WAIVER ELIGIBLE" : isOverdue ? "🚨 OVERDUE LATE PENALTY ACTIVE" : "⏳ Registration Pending" }),
            /* @__PURE__ */ jsx("div", { className: "text-lg sm:text-xl md:text-2xl font-serif font-bold text-white whitespace-nowrap", children: isRegistered ? "✅ Registered & Compliant" : isWaiverEligible ? "AED 0 (Fine Waivable)" : isOverdue ? "AED 10,000 FINE" : "Pending Registration" }),
            isWaiverEligible ? /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[11px] text-gold-200 leading-normal", children: [
              "🎉 ",
              /* @__PURE__ */ jsx("strong", { children: "7-Month Penalty Waiver Active!" }),
              " By submitting your CT return prior to ",
              /* @__PURE__ */ jsx("strong", { children: waiverCutOffDateStr }),
              ", ADVAQ's FTA Tax Agency can file an official Reconsideration Application to waive your AED 10,000 fine."
            ] }) : isOverdue && !isRegistered ? /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[11px] text-red-300 leading-normal", children: [
              "⚠️ Mandatory deadline of ",
              /* @__PURE__ */ jsx("strong", { children: regDeadlineStr }),
              " has passed! An automatic AED 10,000 administrative fine has been levied by the FTA under Decision No. 3 of 2024."
            ] }) : null
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: isWaiverEligible ? "Apply for AED 10,000 Fine Waiver with ADVAQ" : "Register Corporate Tax with ADVAQ (AED 1,500)" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Corporate Tax & Waiver Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of FTA Decision No. 3 of 2024 registration window, fine exposure, and 7-month penalty waiver status." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Incorporation & Tax Year" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                "Tax Year ",
                taxYear
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Incorporation Date:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: incDateStr })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Target Tax Year:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Tax Year ",
                  taxYear
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory TRN Deadline:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: regDeadlineStr })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Gross Penalty Exposure" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isRegistered ? "bg-emerald-500/20 text-emerald-400" : isOverdue ? "bg-red-500/20 text-red-400" : "bg-amber-500/20 text-amber-400"}`, children: isRegistered ? "TRN Active" : isOverdue ? "Overdue Fine" : "Pending" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "EmaraTax TRN Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isRegistered ? "text-emerald-400" : "text-red-400", children: isRegistered ? "YES (TRN Issued)" : "NO (Unregistered)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Cabinet Decision 75 Fine:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: isRegistered ? "text-emerald-400" : "text-red-400", children: [
                  "AED ",
                  grossLateFineAED.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory Gross Fine:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "AED ",
                  grossLateFineAED.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: 7-Month Waiver Cut-Off Audit" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isWaiverEligible ? "bg-emerald-500/20 text-emerald-400" : "bg-navy-800 text-gray-400"}`, children: isWaiverEligible ? "Waiver Eligible ✅" : "N/A" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "7-Month Waiver Cut-Off Date:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: waiverCutOffDateStr })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FTA Reconsideration Basis:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Tax Procedures Law Art 27" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Waiver Relief Savings:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: isWaiverEligible ? "AED 10,000 Waived" : "AED 0" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(Calendar, { size: 22 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: [
              "Company Corporate Tax Statutory Compliance Calendar (Tax Year ",
              taxYear,
              ")"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 mt-1", children: [
              "Official FTA milestones generated for incorporation date (",
              incDateStr,
              "), financial year end, and Tax Year ",
              taxYear,
              "."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative border-l-2 border-gold-500/40 ml-4 pl-6 space-y-8 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gold-500 border-4 border-slate-50" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-1 shadow-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold text-navy-950 text-sm", children: "1. Company Incorporation / Trade License Issue" }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-600 font-bold bg-gold-50 px-2 py-0.5 rounded", children: incDateStr })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-[11px]", children: "Official date company was registered with Dubai DET or Free Zone Authority." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: `absolute -left-[31px] top-0 w-4 h-4 rounded-full border-4 border-slate-50 ${isRegistered ? "bg-emerald-500" : isOverdue ? "bg-red-500" : "bg-amber-500"}` }),
            /* @__PURE__ */ jsxs("div", { className: `bg-white border p-4 rounded-xl space-y-1 shadow-sm ${isOverdue && !isRegistered ? "border-red-300 bg-red-50/20" : "border-border"}`, children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-bold text-navy-950 text-sm flex items-center gap-2", children: [
                  "2. Mandatory FTA Corporate Tax TRN Registration Deadline",
                  !isRegistered && isOverdue && /* @__PURE__ */ jsx("span", { className: "bg-red-600 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-mono", children: "AED 10k Penalty Active" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-navy-950 font-bold bg-slate-100 px-2 py-0.5 rounded", children: regDeadlineStr })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-[11px]", children: "Under FTA Decision No. 3 of 2024, registration must be submitted prior to this date. Failing to register incurs an automatic AED 10,000 penalty." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-navy-900 border-4 border-slate-50" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-4 rounded-xl space-y-1 shadow-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-bold text-navy-950 text-sm", children: [
                  "3. First Corporate Tax Period Close (",
                  taxYear,
                  ")"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-navy-950 font-bold bg-slate-100 px-2 py-0.5 rounded", children: firstTaxPeriodEnd })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-[11px]", children: [
                "End of your company's official accounting tax period (",
                firstTaxPeriodStart,
                " to ",
                firstTaxPeriodEnd,
                ")."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gold-500 border-4 border-slate-50" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gold-300 bg-gold-50/30 p-4 rounded-xl space-y-1 shadow-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-bold text-navy-950 text-sm flex items-center gap-2", children: [
                  "🌟 4. 7-Month Penalty Waiver Cut-Off Date",
                  /* @__PURE__ */ jsx("span", { className: "bg-gold-500 text-navy-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded", children: "100% Fine Waiver Window" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-700 font-bold bg-gold-100 px-2 py-0.5 rounded", children: waiverCutOffDateStr })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-[11px]", children: [
                "Under FTA Tax Procedures Law Article 27, submitting your return prior to ",
                /* @__PURE__ */ jsx("strong", { children: waiverCutOffDateStr }),
                " unlocks 100% AED 10,000 penalty waiver reconsideration."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-50" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white border border-emerald-200 bg-emerald-50/30 p-4 rounded-xl space-y-1 shadow-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold text-navy-950 text-sm", children: "5. Standard 9-Month Return Filing & Tax Payment Deadline" }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded", children: ctReturnFilingDeadline })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-[11px]", children: "Under Federal Decree-Law No. 47 of 2022, your CT return must be filed and any tax due (9% on income > AED 375k) paid within 9 months of period close." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-gold-500/10 border border-gold-500/30 rounded-2xl p-6 sm:p-8 space-y-6 text-navy-950", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-gold-500/20 pb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/20 text-gold-700 rounded-xl", children: /* @__PURE__ */ jsx(RefreshCw, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-700 uppercase tracking-widest font-semibold block", children: "Statutory Relief Mechanism" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "How to Waive Your AED 10,000 Corporate Tax Penalty (7-Month Cut-Off Rule)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs leading-relaxed text-gray-700", children: [
          "If your company missed its initial Corporate Tax registration deadline and incurred the AED 10,000 penalty, the Federal Tax Authority (FTA) provides a statutory mechanism for ",
          /* @__PURE__ */ jsx("strong", { children: "100% Penalty Reconsideration & Waiver" }),
          " prior to the 7-month cut-off date (",
          /* @__PURE__ */ jsx("strong", { children: waiverCutOffDateStr }),
          ")."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-4 gap-4 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-gold-500/30 space-y-1.5 shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-600 font-bold text-xs", children: "STEP 1" }),
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-bold text-sm", children: "Obtain Corporate Tax TRN" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-[11px]", children: "Register company on EmaraTax portal immediately to stop ongoing non-compliance." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-gold-500/30 space-y-1.5 shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-600 font-bold text-xs", children: "STEP 2" }),
            /* @__PURE__ */ jsxs("strong", { className: "block text-navy-950 font-bold text-sm", children: [
              "Submit Return Before ",
              waiverCutOffDateStr
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-[11px]", children: [
              "File your first CT return prior to the 7-month cut-off date (",
              /* @__PURE__ */ jsx("strong", { children: waiverCutOffDateStr }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-gold-500/30 space-y-1.5 shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-600 font-bold text-xs", children: "STEP 3" }),
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-bold text-sm", children: "File FTA Reconsideration Form" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-[11px]", children: "ADVAQ Tax Agency files an official Reconsideration Request under Article 27." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-emerald-300 bg-emerald-50/40 space-y-1.5 shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-emerald-700 font-bold text-xs", children: "STEP 4" }),
            /* @__PURE__ */ jsx("strong", { className: "block text-emerald-950 font-bold text-sm", children: "100% Fine Waived / Refunded" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-[11px]", children: "FTA approves waiver and credits back the AED 10,000 administrative fine." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-red-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border border-red-500/30", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-red-800/80 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30", children: /* @__PURE__ */ jsx(Ban, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-red-400 font-semibold uppercase tracking-widest block", children: "Legal & Financial Consequences" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Risks & Penalties of Missing Corporate Tax Registration" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-red-900/60 border border-red-800 p-4 rounded-xl space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-400 font-bold", children: [
              /* @__PURE__ */ jsx(DollarSign, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "AED 10,000 Fine" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-red-100 leading-relaxed text-[11px]", children: "Automatic administrative penalty under Cabinet Decision No. 75 of 2023 posted directly to your FTA EmaraTax portal." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-red-900/60 border border-red-800 p-4 rounded-xl space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-400 font-bold", children: [
              /* @__PURE__ */ jsx(Ban, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Loss of SBR 0% Relief" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-red-100 leading-relaxed text-[11px]", children: "Failure to register on time forfeits eligibility for Small Business Relief (SBR 0% tax on revenue up to AED 3 Million)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-red-900/60 border border-red-800 p-4 rounded-xl space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-400 font-bold", children: [
              /* @__PURE__ */ jsx(Building, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Bank Account Freeze" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-red-100 leading-relaxed text-[11px]", children: "UAE Banks (Wio, Emirates NBD, Mashreq) require a valid Corporate Tax TRN during annual KYC review to prevent account suspension." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-red-900/60 border border-red-800 p-4 rounded-xl space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-400 font-bold", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Trade License Block" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-red-100 leading-relaxed text-[11px]", children: "Department of Economy & Tourism (DET) and Free Zone Authorities cross-reference FTA compliance before renewing trade licenses." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(FileText, { size: 22 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "FTA Corporate Tax TRN Registration Required Documents Checklist" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-0.5", children: "Check off the documents you have ready for instant FTA EmaraTax portal submission." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white px-4 py-2 rounded-xl text-xs font-mono font-bold text-center shrink-0", children: [
            "Checklist Progress: ",
            /* @__PURE__ */ jsxs("span", { className: "text-gold-400", children: [
              totalChecked,
              " / ",
              trnChecklist.length,
              " Ready"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3 text-xs", children: trnChecklist.map((item) => {
          const isChecked = !!checkedDocs[item.id];
          return /* @__PURE__ */ jsxs("label", { onClick: () => toggleChecklist(item.id), className: `p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${isChecked ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 shadow-sm" : "bg-white border-border text-navy-950 hover:border-gold-500/50"}`, children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isChecked, onChange: () => {
            }, className: "accent-gold-500 w-4 h-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm font-semibold", children: item.title }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px] block mt-0.5", children: item.subtitle })
            ] })
          ] }, item.id);
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gold-500/30 p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-navy-950 space-y-1 text-center sm:text-left", children: [
            /* @__PURE__ */ jsx("strong", { className: "font-serif text-sm block font-bold text-navy-950", children: "Ready to Submit Your CT Registration or Waiver to the FTA?" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-[11px]", children: "ADVAQ FTA Registered Tax Agents review your documents, issue your official Corporate Tax TRN, and submit penalty reconsideration applications." })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold uppercase text-xs tracking-widest px-6 py-3.5 font-semibold shrink-0 text-center", children: "Start Registration with ADVAQ" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (UAE CT Deadlines & Waiver)" })
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
            " ADVAQ FTA Registered Tax Agency"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Waive AED 10,000 Late Fine & Register CT with ADVAQ" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: [
            "Our FTA agents process your Corporate Tax registration, file your tax return prior to the 7-month cut-off date (",
            waiverCutOffDateStr,
            "), and submit official FTA Reconsideration Applications to waive late fines."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uae-services/corporate-tax-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Apply for Penalty Waiver ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp FTA Agent" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAECorporateTaxDeadlinePage as component
};
