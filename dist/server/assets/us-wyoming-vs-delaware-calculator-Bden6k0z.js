import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Award, ArrowRight, TrendingUp, HelpCircle, ChevronDown, Shield } from "lucide-react";
function USStateComparisonToolPage() {
  const [priority, setPriority] = useState("privacy");
  const [openFaq, setOpenFaq] = useState(0);
  let recommendedState = "Wyoming";
  let reason = "Wyoming offers 10/10 owner privacy, low $100 filing fee, and low $60 annual report costs.";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  if (priority === "vc") {
    recommendedState = "Delaware";
    reason = "Delaware is preferred by US venture capitalists, Y-Combinator, and angel investors due to its Court of Chancery.";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
  } else if (priority === "cost") {
    recommendedState = "New Mexico";
    reason = "New Mexico has a $50 state filing fee and $0 ongoing annual state report fees, making it the cheapest state long-term.";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
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
      name: "Wyoming vs Delaware Comparison Tool",
      item: "https://advaq.com/calculators/us-wyoming-vs-delaware-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Wyoming vs Delaware vs New Mexico LLC Comparison Tool (2026/2027)",
    url: "https://advaq.com/calculators/us-wyoming-vs-delaware-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Compare Wyoming, Delaware, and New Mexico LLC state fees, owner privacy, annual franchise tax, and VC investor preferences.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "Why is Wyoming the most popular state for foreign non-resident LLCs?",
    a: "Wyoming created the world's first LLC in 1977 and offers complete owner privacy (anonymous LLC), low $100 state filing fee, low $60 annual report cost, no state income tax, and strong asset protection charging order protection."
  }, {
    q: "Why do US venture capitalists prefer Delaware over Wyoming?",
    a: "Delaware has a dedicated corporate court (Court of Chancery) with hundreds of years of legal precedent. Most VC funds and accelerators (such as Y Combinator) require startup companies to be incorporated as Delaware C-Corporations."
  }, {
    q: "Is New Mexico really $0 annual fee forever?",
    a: "Yes! New Mexico does not require an annual report filing for LLCs and charges $0 in annual state fees, making it an excellent low-maintenance choice for solo consultants."
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
          /* @__PURE__ */ jsx("span", { children: "State Comparison Tool" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Wyoming vs Delaware vs New Mexico LLC Comparison (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Interactive comparison tool to select the optimal US state based on privacy, filing costs, VC fundraising, and banking." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-3 text-center", children: "Select Your Primary Business Goal / Priority:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-xs", children: [
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setPriority("privacy"), className: `p-4 rounded-xl border text-center font-semibold transition-all ${priority === "privacy" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
            /* @__PURE__ */ jsx("span", { className: "block text-base mb-1", children: "🤠 Privacy & E-commerce" }),
            /* @__PURE__ */ jsx("span", { children: "Wyoming (Highest Privacy & Low Fee)" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setPriority("vc"), className: `p-4 rounded-xl border text-center font-semibold transition-all ${priority === "vc" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
            /* @__PURE__ */ jsx("span", { className: "block text-base mb-1", children: "🏦 VC Investment & Tech" }),
            /* @__PURE__ */ jsx("span", { children: "Delaware (VC/Angel Preferred)" })
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setPriority("cost"), className: `p-4 rounded-xl border text-center font-semibold transition-all ${priority === "cost" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
            /* @__PURE__ */ jsx("span", { className: "block text-base mb-1", children: "🌵 Lowest Ongoing Annual Cost" }),
            /* @__PURE__ */ jsx("span", { children: "New Mexico ($0 Annual Report)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border ${badgeColor} max-w-3xl mx-auto text-center space-y-2`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-gold-600 font-bold uppercase tracking-widest text-xs", children: [
          /* @__PURE__ */ jsx(Award, { size: 18 }),
          /* @__PURE__ */ jsx("span", { children: "Recommended Winner" })
        ] }),
        /* @__PURE__ */ jsxs("h3", { className: "font-serif text-3xl font-bold text-navy-950", children: [
          recommendedState,
          " LLC"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xl mx-auto", children: reason })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto pt-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse border border-border rounded-xl", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-gold-400 font-serif text-sm", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Comparison Metric" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🤠 Wyoming" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🏦 Delaware" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "🌵 New Mexico" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border text-navy-950", children: [
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold", children: "State Filing Fee" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono font-bold text-emerald-600", children: "$100" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono", children: "$110" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono font-bold text-emerald-600", children: "$50" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold", children: "Annual Report Fee" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono", children: "$60 / year" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-amber-600 font-bold", children: "$300 / year (Franchise Tax)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-mono text-emerald-600 font-bold", children: "$0 / year (Zero)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold", children: "Owner Anonymity" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-600 font-bold", children: "10/10 (Anonymous)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "9/10 (High)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-600 font-bold", children: "10/10 (Anonymous)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold", children: "Mercury / Wise Bank Approval" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-600 font-bold", children: "99% High" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-emerald-600 font-bold", children: "99% High" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold", children: "95% Medium" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Form Your ",
        recommendedState,
        " LLC with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsxs("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: [
              "Live Step-by-Step ",
              recommendedState,
              " LLC Decision Audit"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of your optimal US incorporation state selection." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Selected Priority Profile" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Priority Match ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "User Selected Goal:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: priority === "privacy" ? "Privacy & E-commerce" : priority === "vc" ? "VC Funding / Tech Startup" : "Lowest Maintenance Cost" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Recommended State:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-gold-400 font-bold", children: [
                  recommendedState,
                  " LLC"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Upfront & Recurring State Fees" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Fee Verified" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Initial State Filing Fee:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: recommendedState === "Wyoming" ? "$100" : recommendedState === "Delaware" ? "$110" : "$50" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual State Franchise Tax:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: recommendedState === "Wyoming" ? "$60 / yr" : recommendedState === "Delaware" ? "$300 / yr" : "$0 / yr" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Privacy & Anonymity Rating" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Privacy Safe ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Public Owner Directory:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: recommendedState === "Delaware" ? "High Privacy (9/10)" : "Anonymous LLC (10/10)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Charging Order Protection:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Exclusive Remedy Granted" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Banking & Investor Acceptance" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "High Approval" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Mercury & Wise Approval:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "99% Instant Pre-Check" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Final Verdict:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Form ",
                  recommendedState,
                  " LLC"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (US State Selection)" })
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
            " ADVAQ Corporate Advisory Services"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: [
            "Ready to Form Your ",
            recommendedState,
            " Company?"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "ADVAQ handles state filing, registered agent, EIN, BOI report, and guaranteed US bank account setup for non-resident founders." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Incorporate ",
              recommendedState,
              " LLC ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Advisor" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  USStateComparisonToolPage as component
};
