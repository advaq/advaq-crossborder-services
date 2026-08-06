import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function USTaxEligibilityCalculatorPage() {
  const [isUSCitizen, setIsUSCitizen] = useState(false);
  const [hasUSEmployees, setHasUSEmployees] = useState(false);
  const [hasPhysicalUSOffice, setHasPhysicalUSOffice] = useState(false);
  const [hasUSWarehouseInventory, setHasUSWarehouseInventory] = useState(false);
  const [isSingleMemberLLC, setIsSingleMemberLLC] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const isETBUS = hasUSEmployees || hasPhysicalUSOffice;
  const isTaxExemptEligible = !isUSCitizen && !isETBUS && isSingleMemberLLC;
  let etbusRiskLevel = "LOW RISK (0% Tax Safe Pass)";
  let etbusRiskBadge = "bg-emerald-100 text-emerald-800 border-emerald-300";
  let recommendedAction = "Proceed with annual Form 5472 & 1120 pro-forma filing only. 0% US income tax owed.";
  if (isUSCitizen) {
    etbusRiskLevel = "HIGH RISK (Worldwide US Taxable)";
    etbusRiskBadge = "bg-red-100 text-red-800 border-red-300";
    recommendedAction = "File Form 1040 & Schedule C with IRS. Consult ADVAQ US CPA.";
  } else if (hasUSEmployees || hasPhysicalUSOffice) {
    etbusRiskLevel = "HIGH RISK (US ECI Triggered)";
    etbusRiskBadge = "bg-red-100 text-red-800 border-red-300";
    recommendedAction = "File Form 1040-NR & Schedule C. Claim expense deductions & state tax credit.";
  } else if (hasUSWarehouseInventory) {
    etbusRiskLevel = "MEDIUM RISK (Sales Tax / Inventory Nexus)";
    etbusRiskBadge = "bg-amber-100 text-amber-800 border-amber-300";
    recommendedAction = "0% Income tax applies, but check State Sales Tax Nexus limits for Amazon FBA.";
  }
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
      name: "US 0% Tax Eligibility Checker",
      item: "https://advaq.com/calculators/us-tax-eligibility-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US Foreign Owner 0% Tax Eligibility Checker (2026/2027)",
    url: "https://advaq.com/calculators/us-tax-eligibility-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Verify if your foreign single-member US LLC is exempt from US federal income tax under IRS ETBUS (Engaged in Trade or Business) and ECI rules.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the 3-part test for 0% US tax on a foreign Single-Member LLC?",
    a: "A foreign Single-Member LLC pays 0% US Federal Income Tax if: 1) The single owner is a non-resident alien, 2) The owner has no US physical office, store, or warehouse, and 3) The business has no dependent employees physically working inside the US."
  }, {
    q: "Does opening a US bank account or using Stripe trigger US income tax?",
    a: "No! Having a US business bank account (e.g. Mercury, Wise) or accepting payments via US Stripe/PayPal does NOT create a physical presence or trigger US income tax."
  }, {
    q: "If I pay 0% US income tax, do I still need to file returns with the IRS?",
    a: "YES! All foreign-owned single-member US LLCs are legally required to file IRS Form 5472 and a pro-forma Form 1120 annually. Failure to file incurs a mandatory $25,000 IRS penalty."
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
          /* @__PURE__ */ jsx("span", { children: "US 0% Tax Eligibility" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "US Foreign Owner 0% Tax Eligibility Checker (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Test IRS ETBUS (Engaged in Trade or Business) & ECI (Effectively Connected Income) rules to verify if your foreign-owned US LLC pays 0% US income tax." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-5 ${isTaxExemptEligible ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-amber-50 border-amber-300 text-amber-950"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          isTaxExemptEligible ? /* @__PURE__ */ jsx(CheckCircle2, { className: "text-emerald-600 shrink-0 mt-1", size: 36 }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "text-amber-600 shrink-0 mt-1", size: 36 }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: isTaxExemptEligible ? "🎉 Eligible for 0% US Federal Income Tax!" : "⚠️ Subject to US Federal Tax / ETBUS Tax Filing" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs opacity-90 mt-1 leading-relaxed max-w-2xl", children: isTaxExemptEligible ? "Your LLC qualifies as a Foreign-Owned Disregarded Entity under IRS guidelines. You pay 0% US federal income tax and only file Form 5472 & Form 1120 information returns." : "Your LLC triggers US Effectively Connected Income (ECI) or ETBUS rules due to US physical presence, employees, or citizenship status. US tax returns must be filed." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-black/10 text-xs", children: [
              /* @__PURE__ */ jsx("strong", { className: "font-semibold block text-navy-950", children: "Recommended Next Step:" }),
              /* @__PURE__ */ jsx("span", { children: recommendedAction })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "shrink-0 text-center md:text-right", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase font-bold tracking-widest block text-gray-500 mb-1", children: "ETBUS Risk Level" }),
          /* @__PURE__ */ jsx("span", { className: `inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${etbusRiskBadge}`, children: etbusRiskLevel })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 bg-off-white/50 p-6 rounded-2xl border border-border text-xs", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "Answer the Following IRS Compliance Questions:" }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Are you a US Citizen or Green Card Holder?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "US citizens pay worldwide income tax regardless of LLC structure." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isUSCitizen, onChange: (e) => setIsUSCitizen(e.target.checked), className: "accent-gold-500 w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Is your LLC a Single-Member LLC?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Single-Member LLCs are treated as tax pass-through disregarded entities by the IRS." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isSingleMemberLLC, onChange: (e) => setIsSingleMemberLLC(e.target.checked), className: "accent-gold-500 w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Do you have a physical office, retail store, or warehouse in the US?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "A virtual address or registered agent DOES NOT count as physical presence." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasPhysicalUSOffice, onChange: (e) => setHasPhysicalUSOffice(e.target.checked), className: "accent-gold-500 w-5 h-5" })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center justify-between p-4 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block text-sm", children: "Do you hire dependent employees working physically in the US?" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-[11px]", children: "Hiring independent contractors (W-8BEN) abroad DOES NOT trigger ETBUS." })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasUSEmployees, onChange: (e) => setHasUSEmployees(e.target.checked), className: "accent-gold-500 w-5 h-5" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step US Tax Exemption Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of IRS ETBUS (Engaged in Trade or Business) and ECI classification." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Non-Resident Alien Status" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${!isUSCitizen ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`, children: !isUSCitizen ? "Non-Resident Pass ✅" : "US Citizen Taxable ⚠️" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Citizenship Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: isUSCitizen ? "US Citizen / Green Card" : "Non-US Resident Alien" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Worldwide IRS Tax Scope:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isUSCitizen ? "text-red-400" : "text-emerald-400", children: isUSCitizen ? "100% Taxable (Form 1040)" : "Foreign Tax Exempt Scope" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Entity Structure Classification" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isSingleMemberLLC ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`, children: isSingleMemberLLC ? "Disregarded Entity ✅" : "Partnership Tax ⚠️" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "LLC Type:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: isSingleMemberLLC ? "Single-Member LLC" : "Multi-Member Partnership" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "IRS Federal Treatment:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: isSingleMemberLLC ? "Pass-Through Disregarded" : "Form 1065 Return Required" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Physical Presence & ETBUS Test" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${!isETBUS ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`, children: !isETBUS ? "No US Presence ✅" : "ETBUS Triggered ⚠️" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "US Physical Office / Store:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: hasPhysicalUSOffice ? "text-red-400" : "text-emerald-400", children: hasPhysicalUSOffice ? "YES (Triggers ECI)" : "NO (Virtual Address)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "US Dependent Employees:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: hasUSEmployees ? "text-red-400" : "text-emerald-400", children: hasUSEmployees ? "YES (Triggers ETBUS)" : "NO (Remote Contractors)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final IRS Tax & Filing Verdict" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isTaxExemptEligible ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`, children: isTaxExemptEligible ? "0% US Tax Pass" : "US Return Required" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "US Federal Income Tax Owed:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: isTaxExemptEligible ? "$0 (0% Tax Exempt)" : "Standard Corporate / ECI Tax" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Mandatory IRS Filing:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "IRS Form 5472 + Form 1120 Pro-Forma" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "IRS 0% Tax Rules for Foreign Single-Member LLCs (2026/2027)" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "IRS Tax Metric" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Non-Resident Alien (No US Office)" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "US Resident / Physical Presence" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Required IRS Forms" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "US Federal Income Tax Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono font-bold text-emerald-600", children: "0% (Tax Exempt) ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "10% – 37% Graduated Rates" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Form 5472 & 1120 Pro-Forma" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "US Self-Employment Tax (15.3%)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% EXEMPT ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "15.3% SE Tax Owed" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Form 1040-NR / Schedule C" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (US 0% Tax Eligibility)" })
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
            " ADVAQ US Certified CPA & Tax Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Need Annual IRS Form 5472 & 1120 Pro-Forma Filing?" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our US CPA team prepares 100% compliant Form 5472 filings for foreign-owned LLCs to protect your 0% US tax status and avoid $25,000 IRS penalties." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/single-member-llc-filing", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "File Form 5472 with ADVAQ CPA ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp US Tax CPA" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USTaxEligibilityCalculatorPage as component
};
