import { jsxs, jsx } from "react/jsx-runtime";
import { o as faqs } from "./router-wwha1nVk.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Briefcase, ShieldAlert, AlertTriangle, ArrowRight, Receipt, Percent, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "UK LTD vs Sole Trader: Which Business Structure Is Best for Non-Residents?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive legal, tax, and banking comparison for non-UK resident founders, freelancers, and agency owners evaluating Limited Company (LTD) vs Sole Trader structures in 2026." }),
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
            /* @__PURE__ */ jsx("span", { children: "HMRC & Companies House Compliance Analysis" })
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
        ". HMRC requires a UK National Insurance Number for Sole Trader registration, making Sole Proprietorship legally unavailable to non-residents."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-950/60 border border-emerald-500/30 p-3.5 rounded-lg text-emerald-200", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-emerald-400 font-serif text-sm mb-1", children: "UK Limited Company (LTD)" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: "✅ 100% Open to Foreign Non-Residents" }),
            /* @__PURE__ */ jsx("li", { children: "✅ Limited Personal Asset Liability Shield" }),
            /* @__PURE__ */ jsx("li", { children: "✅ Remote Digital Banking (Wise, Revolut)" }),
            /* @__PURE__ */ jsx("li", { children: "✅ Enterprise B2B Corporate Credibility" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-950/60 border border-red-500/30 p-3.5 rounded-lg text-red-200", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-red-400 font-serif text-sm mb-1", children: "Sole Trader (Self-Employed)" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: "❌ Requires UK Residency & NINo" }),
            /* @__PURE__ */ jsx("li", { children: "❌ Unlimited Personal Asset Liability" }),
            /* @__PURE__ */ jsx("li", { children: "❌ No Separate Corporate Legal Entity" }),
            /* @__PURE__ */ jsx("li", { children: "❌ High Street Bank Restrictions" })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#definition", className: "hover:text-gold-600 underline", children: "1. Fundamental Definitions: UK LTD vs Sole Trader" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#eligibility", className: "hover:text-gold-600 underline", children: "2. The HMRC NINo Barrier: Why Sole Trader Fails" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#liability", className: "hover:text-gold-600 underline", children: "3. Personal Legal Liability Protection Comparison" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-table", className: "hover:text-gold-600 underline", children: "4. Comprehensive Business Structure Comparison Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#taxation", className: "hover:text-gold-600 underline", children: "5. Tax Efficiency & Profit Extraction Comparison" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#banking-credibility", className: "hover:text-gold-600 underline", children: "6. Corporate Banking & Global Client Credibility" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "7. 6 Critical Common Mistakes Non-Residents Must Avoid" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "definition", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Fundamental Definitions: UK LTD vs Sole Trader" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "When establishing a business presence connected to the United Kingdom, non-resident entrepreneurs must evaluate the legal distinction between two core entity types: a ",
          /* @__PURE__ */ jsx("strong", { children: "Sole Trader" }),
          " (Self-Employed individual) and a ",
          /* @__PURE__ */ jsx("strong", { children: "Private Limited Company (LTD)" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsx("strong", { children: "Sole Trader" }),
          " is an individual who owns and runs a business as an unincorporated self-employed person. Under UK law, the owner and the business are legally identical—there is zero separation between personal identity and business operations."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Conversely, a ",
          /* @__PURE__ */ jsx("strong", { children: "UK Limited Company (LTD)" }),
          " is a distinct legal person incorporated under the ",
          /* @__PURE__ */ jsx("em", { children: "UK Companies Act 2006" }),
          ". It possesses its own independent legal identity, meaning it can hold assets, enter into binding contracts, sue and be sued, incur debt, and pay tax completely separate from its directors and shareholders."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Example: Designer Freelancer vs Incorporated Agency"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: 'Consider Ali, a UI/UX designer based in Pakistan. As a sole freelancer invoicing directly under his personal name, overseas clients treat him as an individual contractor subject to personal withholding taxes. By incorporating "Apex Design LTD" in the UK, Ali presents a registered corporate entity to European clients, signs Master Service Agreements under UK corporate law, and builds enterprise brand equity.' })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "eligibility", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. The HMRC NINo Barrier: Why Sole Trader Fails for Non-Residents" }),
        /* @__PURE__ */ jsx("p", { children: "For foreign founders operating from outside the UK, legal eligibility is the first non-negotiable roadblock:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 p-6 rounded-2xl space-y-3 my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ShieldAlert, { size: 20, className: "text-red-600" }),
            "The HMRC National Insurance Number (NINo) Hard Barrier"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "To register as a Sole Trader with HM Revenue & Customs (HMRC), you must provide a valid UK National Insurance Number (NINo), a UK right-to-work visa, and evidence of UK residential address. HMRC strictly requires in-person identity interviews in the UK to issue a NINo. Foreign non-residents living abroad CANNOT obtain a NINo and are legally barred from registering as UK Sole Traders." })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In sharp contrast, ",
          /* @__PURE__ */ jsx("strong", { children: "Companies House permits foreign nationals of any citizenship residing anywhere on earth" }),
          " to incorporate and own a UK LTD company. There is zero requirement to hold a UK visa, reside in the UK, or possess a National Insurance Number."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "liability", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Personal Legal Liability Protection Comparison" }),
        /* @__PURE__ */ jsx("p", { children: "Liability protection is the single most critical legal factor for IT agencies, SaaS platforms, and e-commerce stores serving international clients:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-red-200 bg-red-50/40 p-6 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-red-900 text-base mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "Sole Trader: Unlimited Personal Asset Risk"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "As a Sole Trader, you face unlimited personal liability. If a customer sues your business for contract breach, data infringement, or product liability, your personal savings, personal bank accounts, and home can be seized by court order to satisfy business debts." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-emerald-200 bg-emerald-50/40 p-6 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-bold text-emerald-900 text-base mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "text-emerald-600", size: 18 }),
              "UK LTD: Limited Corporate Liability Shield"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "A UK LTD creates a legal firewall between personal and company finances. Shareholders are only liable up to the nominal value of their unpaid shares (typically £1 per share). Your personal wealth remains completely insulated from corporate liabilities or lawsuits." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-table", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Comprehensive Business Structure Comparison Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side legal comparison between UK Limited Company (LTD) and Sole Trader structures:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Comparison Parameter" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "UK Limited Company (LTD)" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "UK Sole Trader" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Non-Resident Eligibility" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "100% Eligible (No UK Visa Required)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Ineligible (Requires UK NINo & Visa)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Personal Liability Shield" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Limited to Unpaid Shares (£1)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Unlimited Personal Asset Liability" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Primary Tax Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "19% Corporation Tax on Net Profits" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Up to 45% Income Tax + NICs" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Corporate Banking" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Approved via Wise, Revolut, Payoneer" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Restricted Personal High-Street Accounts" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Enterprise B2B Trust" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "High (Official Companies House record)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-500", children: "Low (Perceived as informal freelancer)" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "NON-RESIDENT UK FORMATION" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Form Your UK LTD Company Remotely for £99" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ provides complete non-resident UK incorporation, registered London address, HMRC tax setup, and digital business banking assistance in 24 hours." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore UK LTD Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "taxation", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Tax Efficiency & Profit Extraction Comparison" }),
        /* @__PURE__ */ jsx("p", { children: "Tax treatment and profit extraction mechanics differ fundamentally between an incorporated LTD company and a sole proprietorship:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Receipt, { className: "text-gold-600", size: 18 }),
              "UK LTD Corporate Tax & Dividend Model"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "A UK LTD pays ",
              /* @__PURE__ */ jsx("strong", { children: "19% UK Corporation Tax" }),
              " on net profits under £50,000 after deducting all legitimate business operating expenses (software tools, hosting, advertising, hardware, contractor fees). Post-tax profits are extracted as dividends to foreign shareholders under bilateral Double Taxation Treaties."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Percent, { className: "text-gold-600", size: 18 }),
              "Sole Trader Personal Income Tax Model"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Sole Traders pay UK progressive income tax (up to 45%) plus Class 2 and Class 4 National Insurance Contributions on all annual profits earned, regardless of whether funds are retained in the business or withdrawn." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "banking-credibility", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Corporate Banking & Global Client Credibility" }),
        /* @__PURE__ */ jsx("p", { children: "Enterprise B2B clients in the US, UK, and Europe maintain strict vendor procurement rules. They rarely execute contracts or remit large wire transfers to unverified overseas personal accounts." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Operating a ",
          /* @__PURE__ */ jsx("strong", { children: "UK Limited Company with an official Companies House registration number" }),
          " provides immediate institutional credibility. Furthermore, non-resident LTD directors qualify for multi-currency UK business banking accounts (Wise Business, Revolut Business, Payoneer), enabling direct billing in GBP, USD, and EUR."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. 6 Critical Common Mistakes Non-Residents Must Avoid" }),
        /* @__PURE__ */ jsx("p", { children: "Avoid these six frequent missteps made by overseas founders:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Attempting Sole Trader Registration Without a UK Address"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Trying to register as a UK sole trader using a fake UK address or without a valid National Insurance Number results in HMRC rejection and tax fraud penalties." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Intermingling Personal & Corporate Funds"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Using a UK LTD company bank account for personal living expenses breaks the corporate veil, creating illegal director loan accounts." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "3. Neglecting Dividend Vouchers & Board Minutes"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Withdrawing company profits without issuing formal dividend vouchers and holding recorded board meetings breaches UK corporate law." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "4. Missing Companies House Confirmation Statement Deadlines"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Failing to submit annual Confirmation Statements (Form CS01) leads to company strike-off and bank account freezes." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "READY TO SETUP YOUR UK LIMITED COMPANY?" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your UK LTD with ADVAQ Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Get your official Companies House registration, London registered office address, and business banking assistance for just £99." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK Company Formation — £99" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
