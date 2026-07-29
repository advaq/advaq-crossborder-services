import { jsxs, jsx } from "react/jsx-runtime";
import { aL as faqs } from "./router-GP5y7m1q.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Briefcase, Landmark, CreditCard, Globe2, ArrowRight, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Wise vs Payoneer vs Revolut for UK LTD Companies: Non-Resident Guide" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive head-to-head legal and financial comparison of FX exchange rates, international transfer fees, corporate card features, and non-resident approval speeds across top UK FinTech banking providers in 2026." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ UK Corporate Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "22 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "FCA Regulated FinTech Compliance Analysis" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Winner Verdict at a Glance" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-emerald-500/30", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-emerald-400 block font-serif text-sm mb-1", children: "🥇 Wise Business" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 text-[11px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { children: "Best Overall:" }),
            " Lowest FX conversion fees (real mid-market rates), native UK Sort Code + 8-digit Account Number, USD routing, zero monthly fees."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-gold-400 block font-serif text-sm mb-1", children: "🥈 Payoneer" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 text-[11px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { children: "Best for Marketplaces:" }),
            " Direct payouts from Amazon, Upwork, Fiverr & eBay. Seamless local bank withdrawals in foreign currency."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-blue-400 block font-serif text-sm mb-1", children: "🥉 Revolut Business" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 text-[11px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("strong", { children: "Best for Expense Cards:" }),
            " Instant virtual employee debit cards, Xero accounting sync, and team permission controls."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-2xl mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BookOpen, { size: 16, className: "text-gold-600" }),
          "Table of Contents"
        ] }),
        /* @__PURE__ */ jsxs("ol", { className: "grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#overview", className: "hover:text-gold-600 underline", children: "1. Why Non-Resident UK LTDs Rely on FinTech Banking" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#wise-deep-dive", className: "hover:text-gold-600 underline", children: "2. Wise Business: Features, Pricing & FX Rates" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#payoneer-deep-dive", className: "hover:text-gold-600 underline", children: "3. Payoneer: Features, Pricing & E-Commerce Integration" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#revolut-deep-dive", className: "hover:text-gold-600 underline", children: "4. Revolut Business: Features, Cards & Sub-Accounts" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-matrix", className: "hover:text-gold-600 underline", children: "5. Feature-by-Feature FinTech Comparison Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#recommendations", className: "hover:text-gold-600 underline", children: "6. Recommended Selection by Business Type" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "7. 6 Critical Common Banking Mistakes to Avoid" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "overview", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Why Non-Resident UK LTDs Rely on FinTech Banking" }),
        /* @__PURE__ */ jsx("p", { children: "For foreign founders operating a UK Limited Company from Pakistan, the UAE, the US, or elsewhere, traditional high-street banks (Barclays, HSBC, Lloyds, NatWest) are practically inaccessible without physical UK residency and London in-person branch interviews." }),
        /* @__PURE__ */ jsx("p", { children: "Digital FinTech banking platforms regulated by the UK Financial Conduct Authority (FCA) as Electronic Money Institutions (EMIs) bridge this gap. They allow overseas directors to obtain official UK bank credentials, hold multi-currency balances, and execute international wire transfers remotely." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Scenario: Software Agency FX Savings"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Consider Usman, a software agency director in Lahore. Usman invoices European clients in EUR and US clients in USD under his UK LTD. By utilizing Wise Business, Usman receives EUR via SEPA and USD via ACH, converting funds to PKR for local developer salaries at a 0.35% FX fee—saving over £4,200 annually compared to traditional bank wire fees." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "wise-deep-dive", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Wise Business (Formerly TransferWise): The Undisputed Leader" }),
        /* @__PURE__ */ jsx("p", { children: "Wise Business is widely recognized as the gold standard corporate banking account for foreign-owned UK companies:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Landmark, { className: "text-gold-600", size: 18 }),
              "Real Mid-Market FX Rates & Native UK Credentials"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Wise provides true mid-market exchange rates without hidden currency markups. It equips your UK LTD with a native UK Sort Code (56-00-36), 8-digit Account Number, US Routing Number, and European IBAN." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CreditCard, { className: "text-gold-600", size: 18 }),
              "Zero Monthly Subscription Fees"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Wise Business charges a one-time £45 account verification fee with **zero ongoing monthly maintenance costs**." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "payoneer-deep-dive", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Payoneer: Ideal for E-Commerce & Marketplace Payouts" }),
        /* @__PURE__ */ jsx("p", { children: "Payoneer excels for UK LTD companies operating e-commerce stores on Amazon UK/US, eBay, or selling services via Upwork and Fiverr:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Globe2, { className: "text-gold-600", size: 18 }),
              "Automated Marketplace Integrations"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Payoneer connects directly to Amazon FBA, Walmart, eBay, Upwork, and Fiverr for automated daily marketplace payouts in GBP, USD, and EUR." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CreditCard, { className: "text-gold-600", size: 18 }),
              "Local Overseas Bank Withdrawals"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Withdraw corporate earnings directly into foreign personal or commercial bank accounts in 150+ countries in local currency." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "revolut-deep-dive", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Revolut Business: Best for Corporate Cards & Sub-Accounts" }),
        /* @__PURE__ */ jsx("p", { children: "Revolut Business offers an advanced app interface tailored for software agencies needing instant virtual expense cards for remote teams:" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 my-6", children: /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "text-gold-600", size: 18 }),
            "Unlimited Virtual Debit Cards for Ad Spend"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Generate disposable virtual cards for Facebook Ads, Google Ads, and SaaS tool subscriptions with dedicated monthly spending caps." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Feature-by-Feature FinTech Comparison Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Side-by-side comparison of the top three UK FinTech banking platforms:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Comparison Feature" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Wise Business" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Payoneer" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-blue-400", children: "Revolut Business" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Setup Verification Fee" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "One-time £45 Fee" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Free to Open" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Free Tier Available" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Monthly Subscription" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "£0 / Month" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "£0 / Month" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "£0 to £19 / Month" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "UK Sort Code & Account #" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Included (Native 56-00-36)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Receiving Account" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Included" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "FX Exchange Markups" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Mid-Market Rate (0.33%–0.5%)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "1.5%–2% Markup" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Interbank (Limits Apply)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Non-Resident Approval Speed" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "24 to 48 Hours" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "24 to 48 Hours" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "2 to 5 Days" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UK FORMATION & BANKING ASSISTANCE" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Form Your UK LTD & Secure Banking Support" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ provides complete non-resident UK company formation, registered London address, HMRC tax setup, and digital banking application support for £99." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore UK Banking Packages ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "recommendations", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Recommended Selection by Business Type" }),
        /* @__PURE__ */ jsx("p", { children: "Choose your banking stack based on your core business model:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-emerald-200 bg-emerald-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-emerald-900 text-base mb-1", children: "For Software Agencies & B2B Consultants" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-700 leading-relaxed", children: [
              "Choose ",
              /* @__PURE__ */ jsx("strong", { children: "Wise Business" }),
              ". Its low FX conversion rates and native UK Sort Codes allow you to invoice international clients in USD, EUR, and GBP with minimum transaction loss."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-navy-200 bg-navy-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-base mb-1", children: "For Amazon Sellers & E-Commerce Brands" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Set up **Dual Banking** with Wise Business and Payoneer simultaneously to optimize marketplace payouts and supplier wire transfers." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. 6 Critical Common Banking Mistakes to Avoid" }),
        /* @__PURE__ */ jsx("p", { children: "Steer clear of these six costly banking missteps:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Depositing Unverified Large Wires Without Invoices"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Receiving large wire transfers without matching client contracts or invoices triggers automated AML compliance holds." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Using Personal Accounts for Corporate Expenses"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Intermingling personal and business funds breaches the corporate veil and creates tax audit complications." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "faqs", className: "pt-8 border-t border-border", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { size: 22, className: "text-gold-600" }),
          "Frequently Asked Questions"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm", children: [
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "START YOUR UK BUSINESS TODAY" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your UK Company & Secure Business Banking" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Order online with ADVAQ. Get your official UK LTD incorporated in 24 hours with full digital business banking setup support." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK Formation & Banking — £99" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
