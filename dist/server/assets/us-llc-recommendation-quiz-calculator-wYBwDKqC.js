import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield } from "lucide-react";
function USLLCRecommendationQuizPage() {
  const [qRevenue, setQRevenue] = useState("medium");
  const [qGateway, setQGateway] = useState(true);
  const [qVcFund, setQVcFund] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  let recommendationTitle = "Wyoming US LLC Strongly Recommended!";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation = "A Wyoming US LLC gives you direct access to Stripe, US bank accounts (Mercury/Wise), 0% US federal tax status, and strong brand authority with US & European clients.";
  if (qVcFund) {
    recommendationTitle = "Delaware C-Corporation Recommended";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation = "Because you plan to raise equity capital from US Venture Capitalists or Y-Combinator, forming a Delaware C-Corp is the required legal structure.";
  } else if (qRevenue === "low" && !qGateway) {
    recommendationTitle = "Hold Off — Use Local Entity for Now";
    badgeColor = "bg-navy-50 border-navy-300 text-navy-950";
    explanation = "At under $5,000 annual revenue without payment gateway requirements, operating as a local Sole Proprietor keeps your compliance costs minimal until you scale.";
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
      name: "US LLC Decision Quiz",
      item: "https://advaq.com/calculators/us-llc-recommendation-quiz-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Should I Form a US LLC? Interactive Quiz Tool (2026/2027)",
    url: "https://advaq.com/calculators/us-llc-recommendation-quiz-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Interactive recommendation tool for non-US entrepreneurs to decide whether forming a US LLC or Delaware C-Corp matches their business goals.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "When is the right revenue milestone to incorporate a US LLC?",
    a: "Most international freelancers and e-commerce sellers incorporate a US LLC once their annual revenue crosses $5,000 to $10,000 USD, or as soon as they require a US Stripe account, Mercury Bank account, or PayPal Business integration."
  }, {
    q: "Can I form a US LLC if I live in Pakistan, UAE, or UK?",
    a: "Yes! Non-US residents living anywhere in the world can legally own 100% of a US LLC without residing in the US or holding a US visa or SSN."
  }, {
    q: "What is the total annual cost of maintaining a US LLC?",
    a: "A Wyoming LLC costs $60 in annual state fees and $99 in Registered Agent renewal. Form 5472 IRS tax returns cost around $350/year, making total annual maintenance roughly $500/year."
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
          /* @__PURE__ */ jsx("span", { children: "US LLC Decision Quiz" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Should I Form a US LLC? (Interactive Quiz) (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Answer 3 quick questions about your revenue, clients, and payment gateway needs to get an instant recommendation." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl p-6 sm:p-8 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: `p-6 rounded-2xl border ${badgeColor} transition-all`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 24, className: "text-gold-600" }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif font-bold text-xl", children: recommendationTitle })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm leading-relaxed opacity-90", children: explanation })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-xs bg-off-white/50 p-6 rounded-2xl border border-border", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "1. What is your estimated annual client revenue ($)?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQRevenue("low"), className: `p-3 rounded-xl border text-left font-semibold ${qRevenue === "low" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Under $5,000 / year" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQRevenue("medium"), className: `p-3 rounded-xl border text-left font-semibold ${qRevenue === "medium" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "$5,000 – $50,000 / year" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQRevenue("high"), className: `p-3 rounded-xl border text-left font-semibold ${qRevenue === "high" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Over $50,000 / year" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "2. Do you need Stripe, PayPal Business, or a US Bank Account?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQGateway(true), className: `p-3 rounded-xl border text-left font-semibold ${qGateway ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Yes — Crucial for international payments" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQGateway(false), className: `p-3 rounded-xl border text-left font-semibold ${!qGateway ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "No — Local bank wire is fine" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "3. Do you plan to raise equity capital from US VCs / Y-Combinator?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQVcFund(true), className: `p-3 rounded-xl border text-left font-semibold ${qVcFund ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Yes — VC fundraising planned" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQVcFund(false), className: `p-3 rounded-xl border text-left font-semibold ${!qVcFund ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "No — Self-funded / Bootstrapped" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Form Your US Company with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Entity Decision Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of your personalized US corporate structure strategy." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Revenue Benchmark Analysis" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Revenue Evaluated" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Annual Client Revenue:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: qRevenue.toUpperCase() })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Minimum Viable Scale:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "$5,000+ USD / year" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Payment Infrastructure Need" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${qGateway ? "bg-emerald-500/20 text-emerald-400" : "bg-gold-500/20 text-gold-400"}`, children: qGateway ? "Stripe Essential ✅" : "Wire Transfer" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Stripe / Mercury Bank Requirement:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: qGateway ? "text-emerald-400" : "text-white", children: qGateway ? "YES (Requires US LLC)" : "NO" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Global Client Conversion Impact:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: "+300% Higher Conversion" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: Equity Fundraising Intent" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${qVcFund ? "bg-gold-500/20 text-gold-400" : "bg-emerald-500/20 text-emerald-400"}`, children: qVcFund ? "VC Fundable" : "Bootstrapped Pass-Through" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Venture Capital Intent:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: qVcFund ? "YES (Delaware C-Corp)" : "NO (Wyoming LLC)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Corporate Governance Scope:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: qVcFund ? "Preferred Stock & ESOP" : "0% Tax Pass-Through" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final Structure Recommendation" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Optimal Match ✅" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Recommended Structure:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: recommendationTitle })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Formation Turnaround:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "24–48 Hours" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "US Entity Recommendation Matrix for International Founders" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Business Model" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Recommended US Entity" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "US Tax Bracket" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Key Advantage" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: "bg-gold-500/10 font-bold", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-950", children: "Freelancer / SaaS / E-commerce" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600", children: "Wyoming Single-Member LLC ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "0% Federal Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "Stripe, Mercury Bank, 0% Tax Pass-Through" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "VC Funded Startup (Y-Combinator)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gold-600 font-bold", children: "Delaware C-Corporation" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-red-600 font-bold", children: "21% Flat Corp Tax" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "VC Equity Investor Mandate & ESOP" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (US LLC Incorporation)" })
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
            " ADVAQ US Corporate Incorporation Advisory"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Incorporate Your Recommended US Entity Online" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our US team files your Articles of Organization, obtains your IRS EIN without an SSN, files FinCEN BOI reports, and sets up your US business bank account." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/us-services/wyoming-llc-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Incorporate US Entity with ADVAQ ",
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
  USLLCRecommendationQuizPage as component
};
