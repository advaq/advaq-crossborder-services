import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield, ArrowRight } from "lucide-react";
function USEINEligibilityToolPage() {
  const [hasSSN, setHasSSN] = useState(false);
  const [isLlcApproved, setIsLlcApproved] = useState(true);
  const [hasUsAddress, setHasUsAddress] = useState(true);
  const [selectedMethod, setSelectedMethod] = useState("advaq");
  const [openFaq, setOpenFaq] = useState(0);
  const methodTimelines = {
    advaq: {
      days: "5–10 Business Days",
      cost: "$75",
      rate: "99.8% Guaranteed",
      note: "ADVAQ direct IRS agent filing with pre-validated Responsible Party representation."
    },
    fax: {
      days: "4–6 Weeks",
      cost: "Free (Self-Filing)",
      rate: "70% Success Rate",
      note: "Manual Form SS-4 fax to IRS non-resident line (+1 855-641-6935). Rejections common if address formatted wrong."
    },
    phone: {
      days: "1 Day (US Residents Only)",
      cost: "Free",
      rate: "N/A for Non-SSN",
      note: "IRS phone line requires valid US SSN/ITIN. International callers without SSN are routed to fax."
    }
  };
  const currentMethod = methodTimelines[selectedMethod] || methodTimelines.advaq;
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
      name: "US EIN Eligibility & Timeline Tool",
      item: "https://advaq.com/calculators/us-ein-eligibility-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "US EIN Application Eligibility & Timeline Tool (2026/2027)",
    url: "https://advaq.com/calculators/us-ein-eligibility-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Check how non-US residents obtain an IRS Employer Identification Number (EIN) without an SSN or ITIN.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Can a foreign non-resident obtain an IRS EIN without a Social Security Number (SSN)?",
    a: "Yes! Foreign founders without an SSN or ITIN can apply for an EIN by submitting IRS Form SS-4 via fax or through an authorized Third-Party Designee."
  }, {
    q: "What is the difference between a CP575 letter and a 147C letter?",
    a: "CP575 is the original EIN confirmation letter mailed by the IRS upon issuance. If lost or delayed, the IRS issues a 147C letter, which serves as official proof of EIN for US banks like Mercury."
  }, {
    q: "Why does the online IRS EIN application fail for non-US founders?",
    a: "The online IRS EIN application tool strictly requires a US SSN or ITIN for the Responsible Party. Non-residents must use the manual Form SS-4 fax/mail workflow."
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
          /* @__PURE__ */ jsx("span", { children: "US EIN Timeline & Eligibility" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "IRS EIN Tax ID Timeline & Eligibility Tool (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check eligibility and estimated processing time for obtaining an IRS EIN Tax ID as a Non-US Resident founder without SSN or ITIN." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-3", children: "Select EIN Application Filing Method:" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setSelectedMethod("advaq"), className: `w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${selectedMethod === "advaq" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "block text-sm font-semibold", children: "ADVAQ Managed IRS Fast-Track (Recommended)" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-[11px]", children: "No SSN required. IRS Form 147C & CP575 verification letter." })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-bold shrink-0 ml-2", children: "5–10 Days" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setSelectedMethod("fax"), className: `w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${selectedMethod === "fax" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { className: "block text-sm font-semibold", children: "Self-Filing via IRS Form SS-4 Fax" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-[11px]", children: "Manual submission to IRS international fax line." })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-amber-400 font-bold shrink-0 ml-2", children: "4–6 Weeks" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: isLlcApproved, onChange: (e) => setIsLlcApproved(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-semibold", children: "Approved State Articles of Organization (Wyoming/Delaware LLC)" })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: hasUsAddress, onChange: (e) => setHasUsAddress(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-semibold", children: "US Registered Agent & Physical Business Address Available" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "EIN Timeline Estimate" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Estimated Processing Time:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-emerald-400 font-bold text-sm", children: currentMethod.days })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Approval Success Probability:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-semibold", children: currentMethod.rate })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Official IRS Output Documents:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-white", children: "Form 147C & CP575" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-navy-900 border border-gold-500/40 p-4 rounded-xl mb-4 text-xs text-navy-200 leading-relaxed", children: currentMethod.note })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/us-services/ein-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Get IRS EIN Tax ID with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step IRS EIN Timeline Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of IRS Form SS-4 processing workflow for non-residents without SSN." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Prerequisite LLC Verification" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${isLlcApproved && hasUsAddress ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`, children: isLlcApproved && hasUsAddress ? "Prerequisites Pass ✅" : "Incomplete Info ⚠️" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Approved Articles of Organization:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: isLlcApproved ? "text-emerald-400" : "text-amber-400", children: isLlcApproved ? "Verified ✅" : "Pending State Approval" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "US Business Physical Address:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: hasUsAddress ? "text-emerald-400" : "text-amber-400", children: hasUsAddress ? "Verified ✅" : "Missing" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Selected Filing Channel" }),
              /* @__PURE__ */ jsxs("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: [
                selectedMethod.toUpperCase(),
                " Channel"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Application Method:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: selectedMethod === "advaq" ? "ADVAQ Managed Direct IRS Agent" : "Manual Form SS-4 Fax" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "IRS Queue Queue Priority:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: selectedMethod === "advaq" ? "text-emerald-400" : "text-amber-400", children: selectedMethod === "advaq" ? "Fast-Track Agent Line" : "Standard Fax Queue" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Processing Time Estimate" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: currentMethod.days })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Estimated Delivery Window:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400 font-bold", children: currentMethod.days })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "IRS Approval Rate:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: currentMethod.rate })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Delivered IRS Documentation" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Bank Ready ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Official IRS Documents Delivered:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Form 147C & CP575" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Bank Account Verification:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "100% Mercury & Stripe Approved" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "IRS EIN Application Method Comparison for Non-Residents" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Filing Method" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Estimated Turnaround" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "SSN/ITIN Needed?" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Official IRS Proof" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: "bg-gold-500/10 font-bold", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-950", children: "ADVAQ Direct IRS Fast-Track" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "5–10 Business Days ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "NO (Foreign Passport)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "IRS Form 147C & CP575" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Self Form SS-4 Fax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600", children: "4–6 Weeks" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "NO" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "CP575 Confirmation Fax" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "IRS Online Portal" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600", children: "Instant (US Residents Only)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "YES (Mandatory US SSN)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "PDF Download (US Only)" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (IRS EIN Application)" })
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
            " ADVAQ IRS Authorized Third-Party Designee"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Get Your Official IRS EIN Tax ID in 5–10 Business Days" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Skip 6-week IRS fax delays. Our IRS specialists file Form SS-4 and obtain your official 147C & CP575 EIN letter for your US LLC." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/ein-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Get IRS EIN Tax ID for $75 ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp IRS Specialist" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USEINEligibilityToolPage as component
};
