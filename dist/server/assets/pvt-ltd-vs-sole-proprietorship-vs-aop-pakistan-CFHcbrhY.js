import { jsxs, jsx } from "react/jsx-runtime";
import { W as faqs } from "./router-COelCWah.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, ArrowRight, AlertTriangle, Coins, Building2, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "Pakistan Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Private Limited Company vs Sole Proprietorship vs AOP (Partnership) in Pakistan" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive legal, financial, and tax evaluation comparing SECP Private Limited entities, Sole Proprietorships, and Associations of Persons (AOP) for Pakistani entrepreneurs, IT agency owners, and SaaS founders." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Pakistan Legal & Tax Advisory" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "12 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "SECP & FBR Structure Masterclass" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Business Structure Summary" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-3 text-xs pt-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Sole Proprietorship" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Simple FBR NTN addition. 100% unlimited personal financial liability. Best for solo local freelancers or small micro-traders." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "AOP (Partnership)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Partnership deed registered with Registrar of Firms. Unlimited joint & several personal liability for all business partners." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Pvt Ltd (SECP Entity)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Incorporated SECP corporate entity. Complete corporate limited liability protection, 0.25% IT export tax regime, and VC funding readiness." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#three-structures", className: "hover:text-gold-600 underline", children: "1. Legal Definitions under Pakistani Law" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#structural-matrix", className: "hover:text-gold-600 underline", children: "2. Comprehensive 3-Way Comparative Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#liability-exposure", className: "hover:text-gold-600 underline", children: "3. Limited Liability Protection vs Unlimited Personal Risk" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fbr-tax-comparison", className: "hover:text-gold-600 underline", children: "4. FBR Corporate Tax vs Individual / AOP Tax Slabs" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#banking-forex", className: "hover:text-gold-600 underline", children: "5. Corporate Banking & SBP FCVA Dollar Accounts" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#upgrading-roadmap", className: "hover:text-gold-600 underline", children: "6. How to Upgrade from Sole Proprietor to SECP Pvt Ltd" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#secp-compliance", className: "hover:text-gold-600 underline", children: "7. Compliance & Annual Filing Requirements" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "three-structures", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Legal Definitions under Pakistani Law" }),
        /* @__PURE__ */ jsx("p", { children: "When launching a commercial venture in Pakistan, entrepreneurs must select from three primary legal business models. Each operates under a completely different statutory framework:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm mb-1", children: "A. Sole Proprietorship (Unincorporated Entity)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "An informal structure where a single individual operates a business under a trade name. It has no separate legal existence from the owner. Registration requires simply adding a business name to your personal FBR NTN profile." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm mb-1", children: "B. Association of Persons / AOP (Partnership Act 1932)" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "A contractual partnership between two or more individuals governed by the ",
              /* @__PURE__ */ jsx("em", { children: "Partnership Act 1932" }),
              ". AOPs are registered locally with the district ",
              /* @__PURE__ */ jsx("strong", { children: "Registrar of Firms" }),
              " and assigned a distinct AOP NTN by FBR."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm mb-1", children: "C. Private Limited Company (Companies Act 2017)" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "A formal corporate entity registered federally with the ",
              /* @__PURE__ */ jsx("strong", { children: "Securities and Exchange Commission of Pakistan (SECP)" }),
              ". It exists as an artificial legal person with perpetual succession, limited liability, and a dedicated corporate seal. Includes both Single Member (SMC-Pvt Ltd) and Multi-Member entities."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "structural-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Comprehensive 3-Way Comparative Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "The table below evaluates the legal, financial, tax, and operational dimensions of each business structure in Pakistan:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Feature / Metric" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Sole Proprietorship" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "AOP (Partnership)" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Pvt Ltd (SECP Entity)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Governing Law" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Income Tax Ordinance 2001" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Partnership Act 1932" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-navy-950", children: "Companies Act 2017 (SECP)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Regulatory Body" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "FBR (Federal Board of Revenue)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Registrar of Firms & FBR" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-gold-600", children: "SECP (Federal Commission)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Personal Liability" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-red-700", children: "Unlimited (Personal Assets at Risk)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-red-700", children: "Unlimited (Joint & Several Liability)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-emerald-700 bg-emerald-50/50", children: "Limited Liability (Assets Protected)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "FBR Tax Regime" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Individual Slabs (up to 35%+)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "AOP Slabs (up to 35%+)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Flat 29% (or 0.25% IT Export Final Tax)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "PSEB & SBP FCVA Dollar Retention" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-500", children: "Freelancer limits only" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-500", children: "Limited commercial perks" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-emerald-700", children: "Full 50% SBP FCVA Dollar Retention" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Venture Capital / Investment" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-red-700", children: "Cannot issue equity" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-red-700", children: "Cannot issue shares" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-emerald-700", children: "Fully VC & Investor Ready" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Perpetual Succession" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-700", children: "Terminates on death" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-700", children: "Dissolves on partner death" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-semibold", children: "Perpetual Existence" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ PAKISTAN BUSINESS STRUCTURING" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Structure Your Business for Corporate Growth" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ advises Pakistani founders on choosing between SMC-Pvt Ltd, AOP, and Private Limited setups, managing SECP eServices filings and FBR NTN registration." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order SECP Incorporation Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "liability-exposure", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Limited Liability Protection vs Unlimited Personal Risk" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The single most critical legal difference between unincorporated structures (Sole Proprietorship and AOP) and a SECP Private Limited entity is ",
          /* @__PURE__ */ jsx("strong", { children: "Personal Financial Risk" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-900 font-semibold text-sm mb-1", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "The Danger of Unlimited Personal Liability:" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-red-900 text-xs leading-relaxed", children: [
            "If a Sole Proprietorship or AOP partnership breaches a commercial contract, fails to pay bank loans, or faces a heavy legal lawsuit, Pakistani courts can attach and seize the ",
            /* @__PURE__ */ jsx("strong", { children: "personal assets" }),
            " of the business owner or partners—including personal houses, vehicles, personal bank accounts, and inherited land."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In contrast, a ",
          /* @__PURE__ */ jsx("strong", { children: "SECP Private Limited company" }),
          " operates behind an impenetrable legal shield known as the Corporate Veil. Creditors can only lay claim to assets registered under the company's corporate NTN and bank accounts."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "fbr-tax-comparison", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. FBR Corporate Tax vs Individual / AOP Tax Slabs" }),
        /* @__PURE__ */ jsx("p", { children: "Tax treatment varies dramatically across the three structures under FBR regulations:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Coins, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "AOP & Sole Proprietor Tax Rates:" }),
              " Profits are taxed under progressive individual income tax slabs scaling from 5% up to 35%+ plus applicable surcharges for high earners."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Coins, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Standard Private Limited Tax Rates:" }),
              " Domestic corporate net taxable income is taxed at a flat rate of ",
              /* @__PURE__ */ jsx("strong", { children: "29%" }),
              " under Section 80."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Coins, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "IT Exporters Section 154A Tax Regime:" }),
              " Pakistani software houses, SaaS entities, and IT service agencies incorporated as Private Limited entities qualify for the ",
              /* @__PURE__ */ jsx("strong", { children: "0.25% Final Tax Regime" }),
              " on foreign remittance proceeds when registered with PSEB."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "banking-forex", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Banking Privileges, FCVA Accounts & Raising Capital" }),
        /* @__PURE__ */ jsx("p", { children: "For tech founders and export agencies, corporate banking functionality is paramount:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Building2, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "SBP FCVA 50% Dollar Retention:" }),
              " State Bank of Pakistan rules allow SECP-registered IT export companies to open Exporters' Special Foreign Currency Accounts (FCVA) and retain 50% of foreign export earnings in USD to pay for overseas cloud hosting (AWS, Azure), SaaS tools, and foreign software subscriptions without currency conversion losses."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Building2, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Equity Capitalization & VC Investment:" }),
              " Venture capital funds, angel investors, and foreign institutional investors in the US, UK, or UAE cannot invest in Sole Proprietorships or AOPs. They require an SECP Private Limited structure capable of issuing ordinary shares, preference shares, or SAFE notes."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "upgrading-roadmap", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. How to Upgrade from Sole Proprietor to SECP Pvt Ltd" }),
        /* @__PURE__ */ jsx("p", { children: "If you currently operate as a Sole Proprietor or AOP, transitioning to a SECP Private Limited company involves four key steps:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "1. Incorporate New SECP Entity:" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Reserve company name and incorporate an SMC-Pvt Ltd or Private Limited company via SECP eServices." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "2. Obtain Corporate NTN & Open Bank Account:" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Receive 7-digit Corporate NTN and open a corporate bank account with Meezan Bank, HBL, or Bank Alfalah." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "3. Novate Contracts & PSEB Transfer:" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Transfer client service agreements, vendor software accounts, and PSEB export certificates to the new corporate entity." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "PAKISTAN CORPORATE SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Incorporate Your SECP Company Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "SECP incorporation, AOP partnership deeds, FBR corporate NTN registration, and corporate banking support handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order SECP Incorporation" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
