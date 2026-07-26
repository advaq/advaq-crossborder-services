import { jsxs, jsx } from "react/jsx-runtime";
import { n as faqs } from "./router-B1vRwgby.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, ShieldAlert, ArrowRight, ChevronDown } from "lucide-react";
import "sonner";
function ArticlePage() {
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("article", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:underline", children: "Blog" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "UK Business Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "UK LTD vs Sole Trader: Which Structure Is Best for Non-Residents?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A head-to-head comparison of legal liability, tax efficiency, corporate banking, and eligibility rules for non-UK resident founders and freelancers." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "7 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "HMRC & Companies House Compliance" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "The Bottom Line for Non-Residents" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: [
        "For non-UK residents living overseas, a ",
        /* @__PURE__ */ jsx("strong", { children: "UK Limited (LTD) Company is the ONLY viable, legally protected business structure" }),
        ". HMRC requires a UK National Insurance Number for Sole Trader registration, making Sole Proprietorship practically unavailable to non-residents."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-950/60 border border-emerald-500/30 p-3.5 rounded-lg text-emerald-200", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-emerald-400 mb-1", children: "UK Limited Company (LTD)" }),
          "✅ 100% Open to Non-Residents",
          /* @__PURE__ */ jsx("br", {}),
          "✅ Limited Personal Liability",
          /* @__PURE__ */ jsx("br", {}),
          "✅ Digital Banking (Wise, Payoneer)",
          /* @__PURE__ */ jsx("br", {}),
          "✅ Enterprise B2B Credibility"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-950/60 border border-red-500/30 p-3.5 rounded-lg text-red-200", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-red-400 mb-1", children: "Sole Trader (Self-Employed)" }),
          "❌ Requires UK Residency & NINo",
          /* @__PURE__ */ jsx("br", {}),
          "❌ Unlimited Personal Liability",
          /* @__PURE__ */ jsx("br", {}),
          "❌ No Separate Business Legal Entity",
          /* @__PURE__ */ jsx("br", {}),
          "❌ High Street Bank Restrictions"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#definition", className: "hover:text-gold-600 underline", children: "Understanding the Fundamental Definitions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#eligibility", className: "hover:text-gold-600 underline", children: "Eligibility Rules: Why Sole Trader Fails for Non-Residents" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#liability", className: "hover:text-gold-600 underline", children: "Personal Liability Protection Comparison" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#taxation", className: "hover:text-gold-600 underline", children: "Taxation & Profit Extraction (Corporation Tax vs Income Tax)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#banking-credibility", className: "hover:text-gold-600 underline", children: "Corporate Banking & Global Client Credibility" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-table", className: "hover:text-gold-600 underline", children: "Comprehensive Comparison Table" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "definition", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Understanding the Fundamental Definitions" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "When starting a business connected to the United Kingdom, entrepreneurs must choose between two primary legal structures: a ",
          /* @__PURE__ */ jsx("strong", { children: "Sole Trader" }),
          " (Self-Employed individual) or a ",
          /* @__PURE__ */ jsx("strong", { children: "Private Limited Company (LTD)" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsx("strong", { children: "Sole Trader" }),
          " is an individual who runs a business as a self-employed person. The individual and the business are legally identical — there is no legal distinction between the owner's personal identity and their business operations."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsx("strong", { children: "UK Limited Company (LTD)" }),
          ", on the other hand, is a separate legal entity created under the ",
          /* @__PURE__ */ jsx("em", { children: "Companies Act 2006" }),
          ". It has its own legal identity, can own assets, sign contracts, incur liabilities, and pay taxes independently of its owners (shareholders) and managers (directors)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "eligibility", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Eligibility Rules: Why Sole Trader Fails for Non-Residents" }),
        /* @__PURE__ */ jsx("p", { children: "For foreign entrepreneurs operating from Pakistan, the UAE, the US, or elsewhere, eligibility is the first major hurdle." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 p-6 rounded-xl space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ShieldAlert, { size: 20, className: "text-red-600" }),
            "The HMRC National Insurance Barrier"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-red-800 leading-relaxed", children: "To register as a Sole Trader in the UK, HMRC requires you to apply for a UK National Insurance Number (NINo) and file Self-Assessment tax returns as a UK resident. If you do not live in the UK and do not have a UK right-to-work visa, you cannot obtain a NINo or register as a Sole Trader." })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In contrast, ",
          /* @__PURE__ */ jsx("strong", { children: "Companies House allows anyone of any nationality residing anywhere in the world" }),
          " to register as a director or shareholder of a UK LTD company. There is zero requirement to live in the UK or hold a UK visa."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "liability", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Personal Liability Protection Comparison" }),
        /* @__PURE__ */ jsx("p", { children: "Liability protection is arguably the single most important factor for IT software agencies, e-commerce stores, and digital service providers dealing with international clients." }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-red-200 bg-red-50/40 p-6 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-red-900 text-lg mb-2", children: "Sole Trader: Unlimited Liability" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: "As a Sole Trader, you are personally responsible for all financial losses and debts. If a client sues for copyright infringement, project delays, or contract breach, your personal bank accounts, savings, and personal property can be seized." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-emerald-200 bg-emerald-50/40 p-6 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-emerald-900 text-lg mb-2", children: "UK LTD: Limited Corporate Liability" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: "A UK LTD creates a legal firewall. Shareholders are only liable up to the nominal value of their shares (typically £1 per share). Your personal wealth remains completely insulated from company debts or lawsuits." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "NON-RESIDENT UK FORMATION" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Form Your UK LTD Company Remotely for £99" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ provides complete non-resident UK incorporation, registered London address, HMRC tax setup, and digital business banking assistance in 24 hours." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order UK Company Formation ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "taxation", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Taxation & Profit Extraction (Corporation Tax vs Income Tax)" }),
        /* @__PURE__ */ jsx("p", { children: "Tax efficiency and distribution rules differ dramatically between the two structures:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-base", children: "UK LTD Tax Model" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
              "A UK LTD pays ",
              /* @__PURE__ */ jsx("strong", { children: "UK Corporation Tax" }),
              " (19% on net profits under £50,000) on company earnings after deducting allowable business expenses (software subscriptions, marketing, hosting, hardware, subcontractor fees). Profits can then be drawn tax-efficiently as dividend payouts to overseas directors under Double Taxation Treaties."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-border pt-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-base", children: "Sole Trader Tax Model" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Sole Traders pay UK Income Tax (up to 45%) and Class 2/4 National Insurance Contributions on all profits earned, regardless of whether the money is retained in the business or spent." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "banking-credibility", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Corporate Banking & Global Client Credibility" }),
        /* @__PURE__ */ jsx("p", { children: "International enterprise clients in North America, Western Europe, and Australia rarely sign contracts with unverified overseas individuals." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Having a ",
          /* @__PURE__ */ jsx("strong", { children: "UK Limited Company with a Companies House registration number" }),
          " gives your agency immediate corporate standing. Furthermore, non-resident UK LTD owners can open business bank accounts with multi-currency digital banks like ",
          /* @__PURE__ */ jsx("strong", { children: "Wise Business, Revolut Business, or Payoneer" }),
          " to invoice clients in GBP, USD, and EUR seamlessly."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-table", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Comprehensive Comparison Table" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm border-collapse border border-border rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white font-serif", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4 border border-white/10", children: "Feature" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 border border-white/10 text-gold-400", children: "UK Limited Company (LTD)" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 border border-white/10 text-navy-200", children: "UK Sole Trader" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Non-Resident Eligibility" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-emerald-700 bg-emerald-50/50", children: "100% Eligible (No UK Visa Required)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-red-700 bg-red-50/50", children: "Ineligible (Requires UK Residency & NINo)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Personal Liability" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Limited to unpaid shares value" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Unlimited personal asset liability" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Primary Tax Type" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "19% Corporation Tax on Net Profits" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Up to 45% Income Tax + NICs" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Digital Banking Options" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Wise Business, Payoneer, Revolut" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Restricted high-street personal accounts" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Enterprise B2B Trust" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "High (Official Companies House record)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Low (Perceived as individual freelancer)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Setup Speed" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "24 Hours via ADVAQ online portal" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Weeks (requires UK address proof & NINo)" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "faqs", className: "pt-8 border-t border-border", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl bg-white overflow-hidden transition-all", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(openFaq === idx ? null : idx), className: "w-full p-5 text-left font-sans font-semibold text-navy-950 flex justify-between items-center gap-4 hover:bg-off-white", children: [
            /* @__PURE__ */ jsx("span", { children: faq.q }),
            /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-500 shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}` })
          ] }),
          openFaq === idx && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-border/50 pt-3", children: faq.a })
        ] }, idx)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 py-20 text-center text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-100" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "READY TO SETUP YOUR UK LIMITED COMPANY?" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your UK LTD with ADVAQ Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Get your official Companies House registration, London registered office address, and business banking assistance for just £99." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK Company Formation — £99" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Chat with Corporate Specialist" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
