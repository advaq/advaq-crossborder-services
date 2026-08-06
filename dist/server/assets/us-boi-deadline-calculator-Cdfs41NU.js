import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function USBOIDeadlineCalculatorPage() {
  const [formationYear, setFormationYear] = useState("2025+");
  const [daysOverdue, setDaysOverdue] = useState(15);
  const [isFiled, setIsFiled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  let deadlineText = "Within 30 Calendar Days of Formation";
  if (formationYear === "before2024") {
    deadlineText = "December 31, 2024 (Expired)";
  } else if (formationYear === "2024") {
    deadlineText = "Within 90 Calendar Days of Formation";
  }
  const dailyPenaltyRate = 590;
  const estimatedFine = isFiled ? 0 : Math.min(1e4, daysOverdue * dailyPenaltyRate);
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
      name: "FinCEN BOI Deadline Calculator",
      item: "https://advaq.com/calculators/us-boi-deadline-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FinCEN BOI Report Deadline & Penalty Calculator (2026/2027)",
    url: "https://advaq.com/calculators/us-boi-deadline-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate mandatory FinCEN Beneficial Ownership Information (BOIR) report deadlines and statutory $590/day non-filing penalties under the Corporate Transparency Act.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the Corporate Transparency Act (CTA) FinCEN BOI filing mandate?",
    a: "Enacted by US Congress, the Corporate Transparency Act requires almost all domestic and foreign registered LLCs and Corporations to report information about their Beneficial Owners (individuals who own 25%+ or exercise substantial control) to FinCEN."
  }, {
    q: "What are the strict BOI deadlines for newly formed 2025/2026 LLCs?",
    a: "For LLCs formed on or after January 1, 2025, the BOI report MUST be filed within 30 calendar days of receiving notice of state creation."
  }, {
    q: "What happens if a foreign owner fails to file a FinCEN BOI report?",
    a: "Failing to file carries severe statutory civil penalties of up to $590 per day (adjusted annually for inflation), criminal fines up to $10,000, and up to 2 years imprisonment."
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
          /* @__PURE__ */ jsx("span", { children: "FinCEN BOI Deadline & Penalty" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FinCEN BOI Report Deadline & Penalty Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Determine your mandatory FinCEN Corporate Transparency Act filing deadline and estimate statutory $590/day late penalties." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. When was your US LLC formed?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFormationYear("before2024"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${formationYear === "before2024" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "Before Jan 1, 2024" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFormationYear("2024"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${formationYear === "2024" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "In 2024" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFormationYear("2025+"), className: `p-3 rounded-xl border text-center font-semibold transition-all ${formationYear === "2025+" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: "2025 / 2026 (New LLC)" })
          ] })
        ] }),
        !isFiled && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Days Overdue Beyond Legal Deadline:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              daysOverdue,
              " Days Overdue"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "1", max: "60", step: "1", value: daysOverdue, onChange: (e) => setDaysOverdue(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 text-sm block", children: "Already Filed FinCEN BOI Report?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-xs", children: "Verify your compliance status." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isFiled, onChange: (e) => setIsFiled(e.target.checked), className: "accent-gold-500 w-5 h-5 shrink-0 ml-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "BOI Compliance Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Mandatory Deadline:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-semibold", children: deadlineText })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Daily FinCEN Non-Filing Fine:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-amber-400 font-semibold", children: "$590 / day" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Maximum Statutory Fine:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-red-400 font-semibold", children: "$10,000" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: isFiled ? "BOI Report Status" : "Estimated Fine Exposure" }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-serif font-bold text-white", children: isFiled ? "✅ Compliant (Filed)" : `$${estimatedFine.toLocaleString()}` })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/us-services/boi-report", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "File FinCEN BOI Report Now" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step FinCEN BOI Penalty Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of Corporate Transparency Act statutory deadlines and $590/day civil penalties." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Statutory Deadline Window" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "CTA Benchmark" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Formation Year Category:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: formationYear === "before2024" ? "Pre-2024 Formation" : formationYear === "2024" ? "2024 Formation" : "2025/2026 Formation" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory Deadline Window:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: deadlineText })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Days Overdue Exposure" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${!isFiled ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`, children: !isFiled ? `${daysOverdue} Days Unfiled` : "Filed ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Days Past Filing Deadline:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: isFiled ? "0 Days" : `${daysOverdue} Days` })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Daily Statutory Civil Penalty:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-amber-400", children: "$590 / day" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: FinCEN Fine Calculation" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-400 font-mono text-[10px]", children: [
                "$590 x ",
                daysOverdue,
                " Days"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Calculated Daily Accumulation:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-red-400", children: [
                  "$",
                  isFiled ? 0 : daysOverdue * dailyPenaltyRate,
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Statutory Penalty Cap:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "$10,000 Maximum" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final Compliance Risk Status" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isFiled ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`, children: isFiled ? "Compliant ✅" : "Immediate Action Needed" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Total Fine Exposure:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "$",
                  estimatedFine.toLocaleString(),
                  " USD"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Required Action:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isFiled ? "text-emerald-400" : "text-amber-400", children: isFiled ? "Maintain Updated BOIR" : "File BOI Report immediately" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "FinCEN Beneficial Ownership Reporting Rules (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "LLC Formation Date" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Filing Window" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Daily Non-Filing Fine" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Max Criminal Fine" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Formed on or after Jan 1, 2025" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-emerald-600", children: "30 Calendar Days" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "$590 / day" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "$10,000 + 2 Yrs Prison" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Formed in 2024" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-amber-600", children: "90 Calendar Days" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "$590 / day" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "$10,000 + 2 Yrs Prison" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Formed Before Jan 1, 2024" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-red-600", children: "Dec 31, 2024 (Expired)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "$590 / day" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "$10,000 + 2 Yrs Prison" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (FinCEN BOI)" })
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
            " ADVAQ FinCEN Authorized BOI Filing Concierge"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "File Your FinCEN BOI Report Today for $49" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our US compliance specialists file your official Beneficial Ownership Information Report with FinCEN in 24 hours to secure your LLC and prevent $590/day fines." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/boi-report", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File BOI Report for $49 ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp BOI Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USBOIDeadlineCalculatorPage as component
};
