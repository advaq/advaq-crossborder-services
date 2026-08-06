import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight, TrendingUp, BookOpen, HelpCircle, ChevronDown, Shield } from "lucide-react";
function UAEFreezoneVsMainlandQuizPage() {
  const [qClients, setQClients] = useState("global");
  const [qOffice, setQOffice] = useState(false);
  const [qGovt, setQGovt] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  let recommendationTitle = "Dubai Freezone LLC Recommended (IFZA / Meydan)";
  let badgeColor = "bg-emerald-50 border-emerald-300 text-emerald-950";
  let explanation = "Since your clients are global/B2B and you do not require a physical onshore shopfront or UAE government tenders, a Dubai Freezone LLC gives you 100% foreign ownership, 0% personal tax, and zero local sponsor requirements at the lowest setup cost.";
  if (qClients === "local" || qOffice || qGovt) {
    recommendationTitle = "Dubai Mainland DET Company Recommended";
    badgeColor = "bg-gold-50 border-gold-300 text-gold-950";
    explanation = "Because you trade directly with local UAE retail consumers, require a physical shopfront, or bid on UAE government tenders, a Dubai Mainland DET license is legally required.";
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
      name: "UAE Calculators",
      item: "https://advaq.com/calculators/uae"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "Freezone vs Mainland Quiz",
      item: "https://advaq.com/calculators/uae-freezone-vs-mainland-quiz-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Freezone or Mainland? UAE Entity Selection Quiz Tool (2026/2027)",
    url: "https://advaq.com/calculators/uae-freezone-vs-mainland-quiz-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Interactive recommendation tool to decide whether forming a Dubai Freezone LLC or DED Mainland company matches your business model.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the main legal difference between a UAE Freezone and Mainland company?",
    a: "A Freezone entity is registered within a specific economic zone (e.g. IFZA, Meydan, DMCC) and is ideal for international B2B services, consulting, and e-commerce. A Mainland company (DED / DET) is licensed to trade anywhere directly within the local UAE onshore market."
  }, {
    q: "Can foreigners own 100% of a Dubai Mainland company without a UAE local sponsor?",
    a: "YES! Following the 2021 amendments to the UAE Commercial Companies Law, 100% foreign ownership is allowed for over 1,000 commercial and industrial activities on the Dubai Mainland."
  }, {
    q: "Is flexi-desk office allowed for Freezone companies?",
    a: "Yes! Freezone entities can operate with a shared 'Flexi Desk' or virtual office address, keeping annual rental overheads significantly lower than mandatory physical mainland leases (Ejari)."
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
          /* @__PURE__ */ jsx("span", { children: "Freezone or Mainland Quiz" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "Freezone or Mainland? (Interactive Decision Quiz) (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Answer quick questions about your target clients, office needs, and trading activities for a custom recommendation." })
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
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "1. Where are your target clients located?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQClients("global"), className: `p-3 rounded-xl border text-left font-semibold ${qClients === "global" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Global / Overseas / B2B Clients" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQClients("local"), className: `p-3 rounded-xl border text-left font-semibold ${qClients === "local" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Local UAE Onshore Consumers / Retail" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "2. Do you require a physical commercial office or shopfront in Dubai?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQOffice(false), className: `p-3 rounded-xl border text-left font-semibold ${!qOffice ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "No — Flexi Desk / Virtual Office is fine" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQOffice(true), className: `p-3 rounded-xl border text-left font-semibold ${qOffice ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Yes — Physical retail shop / warehouse needed" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-sm uppercase tracking-wider mb-2", children: "3. Do you plan to bid on UAE Government tenders or municipal contracts?" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQGovt(true), className: `p-3 rounded-xl border text-left font-semibold ${qGovt ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Yes — Government contracts planned" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setQGovt(false), className: `p-3 rounded-xl border text-left font-semibold ${!qGovt ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "No — Private commercial clients only" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
        "Setup Company with ADVAQ ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step Entity Selection Strategy Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line proof of your client jurisdiction, commercial office requirement, and government tender eligibility." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Market Jurisdiction Assessment" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: qClients.toUpperCase() })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Target Client Audience:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: qClients === "global" ? "Global / B2B / Exports" : "UAE Onshore Local Consumers" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Licensing Impact:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: qClients === "local" ? "text-amber-400" : "text-emerald-400", children: qClients === "local" ? "Mainland License Mandatory" : "Freezone Friendly" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Real Estate & Lease (Ejari) Test" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${qOffice ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`, children: qOffice ? "Physical Shopfront" : "Flexi Desk" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Physical Commercial Lease:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: qOffice ? "Required (Mainland Ejari)" : "Not Required (Flexi Desk)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Rental Cost Overhead:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: qOffice ? "High (Mainland Commercial)" : "Low (Freezone Package)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: UAE Government Procurement" }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded font-mono text-[10px] ${qGovt ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"}`, children: qGovt ? "Mainland Tender" : "Private Commercial" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1.5 font-mono text-navy-200", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Government Tenders Planned:" }),
              " ",
              /* @__PURE__ */ jsx("strong", { className: qGovt ? "text-amber-400" : "text-emerald-400", children: qGovt ? "YES (Requires DED/DET)" : "NO (Private Clients Only)" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Final Entity Recommendation" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Optimal Choice" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Recommended Legal Form:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: qClients === "local" || qOffice || qGovt ? "Dubai Mainland DET" : "Dubai Freezone LLC" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-white", children: [
                /* @__PURE__ */ jsx("span", { children: "Foreign Ownership:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "100% Foreign Owned" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Dubai Freezone vs Mainland DET Feature Matrix" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Feature / Requirement" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Dubai Freezone LLC" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Dubai Mainland (DET)" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Winner / Recommendation" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { className: !(qClients === "local" || qOffice || qGovt) ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Setup & License Cost" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "AED 12,500 – AED 14,900" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-amber-600", children: "AED 18,500 – AED 25,000+" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "Freezone is lower cost ✅" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: qClients === "local" || qOffice || qGovt ? "bg-gold-500/10 font-bold" : "", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Onshore Retail Trading Access" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-rose-600 font-bold", children: "Requires Local Distributor ❌" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "100% Direct Local Trading ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-navy-950", children: "Mainland for Local Retail" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "100% Foreign Ownership" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "100% Foreign Owned ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "100% Foreign Owned ✅" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-emerald-600 font-bold", children: "Equal (Both 100% Foreign)" })
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (Freezone vs Mainland)" })
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
            " ADVAQ UAE Corporate Formation Specialist"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Incorporate Your UAE Freezone or Mainland Entity with ADVAQ" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our corporate advisory team guides you through trade name reservation, MOA drafting, license issuance, and corporate bank account opening." }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/uae-services/freezone-company-formation", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
              "Incorporate UAE Company ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Setup Consultant" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UAEFreezoneVsMainlandQuizPage as component
};
