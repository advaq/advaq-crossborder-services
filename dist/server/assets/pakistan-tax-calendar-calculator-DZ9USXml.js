import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield } from "lucide-react";
function PakistanTaxCalendarPage() {
  const [filterType, setFilterType] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);
  const events = [{
    date: "September 30",
    title: "FBR Annual Income Tax Return Filing",
    cat: "fbr",
    desc: "Mandatory annual tax return deadline for Individuals & Salaried Persons.",
    badge: "High Priority"
  }, {
    date: "October 31",
    title: "SECP Form A & Annual Return Filing",
    cat: "secp",
    desc: "Annual filing of Form A / Form 9 post Annual General Meeting (AGM) for Pvt Ltd companies.",
    badge: "SECP Annual"
  }, {
    date: "December 31",
    title: "Corporate Tax Return (Companies with June 30 Year End)",
    cat: "fbr",
    desc: "Annual corporate income tax return filing deadline for registered companies.",
    badge: "Corporate Tax"
  }, {
    date: "15th of Every Month",
    title: "Monthly Provincial & Federal Sales Tax Deposit",
    cat: "salestax",
    desc: "Deposit monthly sales tax collected (PRA, SRB, KPRA, FBR) by 15th, file return by 18th.",
    badge: "Monthly Recurring"
  }, {
    date: "Quarterly (Oct 20, Jan 20, Apr 20, Jul 20)",
    title: "Section 165 Withholding Tax Statements",
    cat: "fbr",
    desc: "Quarterly WHT statement filing for withholding agents across Pakistan.",
    badge: "Quarterly WHT"
  }];
  const filteredEvents = filterType === "all" ? events : events.filter((e) => e.cat === filterType);
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
      name: "Pakistan Calculators",
      item: "https://advaq.com/calculators/pakistan"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "Pakistan FBR & SECP Tax Calendar",
      item: "https://advaq.com/calculators/pakistan-tax-calendar-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pakistan FBR & SECP Tax Compliance Calendar (2026-2027)",
    url: "https://advaq.com/calculators/pakistan-tax-calendar-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Track key FBR annual income tax return dates, monthly sales tax filings (PRA/SRB), Section 147 advance tax deadlines, and SECP Form A/29 corporate compliance dates.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the annual deadline for filing FBR Income Tax Returns for individuals?",
    a: "The statutory deadline for filing FBR Income Tax Returns for salaried and business individuals for the tax year ending June 30 is September 30."
  }, {
    q: "When must SECP Form A and Form 29 be filed annually?",
    a: "SECP Form A (Annual Return) must be filed within 30 days of holding the Annual General Meeting (AGM), typically by October 31 for companies with a June 30 financial year end."
  }, {
    q: "What are the quarterly advance tax deadlines under Section 147?",
    a: "Quarterly advance income tax payments under Section 147 are due on: September 25 (Q1), December 25 (Q2), March 25 (Q3), and June 15 (Q4)."
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
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "Tax Compliance Calendar" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Pakistan FBR & SECP Tax Calendar (2026-2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Interactive compliance calendar tracking FBR annual return dates, monthly sales tax filings, quarterly WHT, and SECP annual forms." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-5xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 text-xs", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setFilterType("all"), className: `px-4 py-2 rounded-xl font-semibold border ${filterType === "all" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"}`, children: "All Compliance Events" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setFilterType("fbr"), className: `px-4 py-2 rounded-xl font-semibold border ${filterType === "fbr" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"}`, children: "FBR Income Tax" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setFilterType("secp"), className: `px-4 py-2 rounded-xl font-semibold border ${filterType === "secp" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"}`, children: "SECP Corporate" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setFilterType("salestax"), className: `px-4 py-2 rounded-xl font-semibold border ${filterType === "salestax" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-700"}`, children: "Sales Tax" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: filteredEvents.map((ev, idx) => /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-off-white/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-2.5 py-0.5 rounded", children: ev.badge }),
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-base font-serif", children: ev.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: ev.desc })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "shrink-0 font-mono text-gold-600 font-bold text-sm bg-white border border-border px-4 py-2 rounded-xl text-center", children: [
          "📅 ",
          ev.date
        ] })
      ] }, idx)) }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Retain ADVAQ for Annual Tax Compliance ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Pakistan Tax Compliance Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line breakdown of FBR, SECP, and Provincial Sales Tax statutory filing deadlines for 2026/2027." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: FBR Income Tax Return" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Sep 30 / Dec 31" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Salaried Deadline:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Sep 30" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Company Deadline:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Dec 31" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "ATL Inclusion:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Immediate" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Monthly Sales Tax" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "15th / 18th Monthly" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Challan Payment:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "15th of Month" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Return Annexure C/STR-3:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "18th of Month" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Provincial Sync:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "PRA / SRB / KPRA" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: SECP Form A & 29" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Post-AGM 30 Days" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Return Form A:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Within 30 Days AGM" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Director Form 29:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "15 Days of Event" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "SECP Compliance:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Active" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: ADVAQ Retainer Shield" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Annual Retainer" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Automatic Reminders:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Included" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Audit Representation:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Included" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Penalty Exposure:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "0% Zero Fines" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Pakistan Annual & Quarterly Tax Filing Matrix" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Filing Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Governing Authority" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Statutory Deadline" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Late Non-Filing Penalty" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Individual Annual Income Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Federal Board of Revenue (FBR)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "September 30" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "ATL Inactive + PKR 1,000 Fine" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "SECP Form A Annual Return" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "SECP Companies Act 2017" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "October 31" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "PKR 5,000 + PKR 1,000/mo" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Corporate Income Tax Return" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "FBR Corporate Tax Division" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "December 31" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-red-600", children: "PKR 20,000 ATL Surcharge" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Pakistan Tax Calendar)" })
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
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "border-b border-border pb-4", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Explore Related Pakistan Tax Tools" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Filer Verification" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR Filer or Non-Filer Status Checker" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Step-by-step guide & SMS 9966 checker to verify FBR Active Taxpayer List (ATL) status." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-filer-status-checker-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Checker ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "FBR Notice Risk" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR Tax Notice Response Deadline Checker" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Check statutory response deadlines for FBR Iris notices (Sec 114, 116, 122, 177)." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-fbr-notice-timeline-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "SECP Penalty Risk" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "SECP Form A & Form 9 Late Penalty Estimator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate Form A, Form 9, Form 4, and annual return late fees & compounding penalties." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-secp-penalty-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-40" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 16 }),
            " ADVAQ Retainer Corporate Tax Lawyers"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Retain ADVAQ for Full 365-Day Annual Tax Compliance" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our Pakistan corporate tax legal team manages all your monthly sales tax returns, Section 165 WHT statements, SECP Form A filings, and annual FBR Iris returns seamlessly." }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
            "Retain ADVAQ Tax Team ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  PakistanTaxCalendarPage as component
};
