import { jsxs, jsx } from "react/jsx-runtime";
import { N as faqs } from "./router-COelCWah.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Briefcase, Check, ArrowRight, EyeOff, Lock, Building2, Mail, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Registered Office Address vs Service Address in the UK: What’s the Difference?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive legal and privacy masterclass for non-resident directors on Companies House public records, statutory mail handling, address suppression, and virtual office compliance in 2026." }),
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
            /* @__PURE__ */ jsx("span", { children: "Companies Act 2006 Address Compliance" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Key Takeaways (TL;DR)" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: "Understanding the distinction between these two statutory address requirements is essential for non-UK residents maintaining privacy and legal compliance:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Registered Office Address" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Applies to the ",
            /* @__PURE__ */ jsx("strong", { children: "COMPANY ENTITY" }),
            ". Must be a physical address in the UK. Receives official government mail from Companies House & HMRC. Visible on public register."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Directors' Service Address" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Applies to the ",
            /* @__PURE__ */ jsx("strong", { children: "INDIVIDUAL DIRECTOR / PSC" }),
            ". Can be located anywhere globally, but using a UK virtual address hides your personal home address from public search records."
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#registered-office", className: "hover:text-gold-600 underline", children: "1. What is a UK Registered Office Address?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#service-address", className: "hover:text-gold-600 underline", children: "2. What is a Directors' Service Address?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#address-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive Legal Address Comparison Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#privacy-risks", className: "hover:text-gold-600 underline", children: "4. Privacy Risks of Exposing Overseas Home Addresses" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#virtual-office-solution", className: "hover:text-gold-600 underline", children: "5. How ADVAQ's UK Virtual Office Address Package Works" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "6. 6 Critical Common Address Mistakes to Avoid" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#updating-addresses", className: "hover:text-gold-600 underline", children: "7. How to Update Addresses via Form AD01 & CH01" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "registered-office", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What is a UK Registered Office Address?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Section 86 of the ",
          /* @__PURE__ */ jsx("em", { children: "UK Companies Act 2006" }),
          ", every UK Limited Company must at all times maintain an official ",
          /* @__PURE__ */ jsx("strong", { children: "Registered Office Address" }),
          " situated in its home jurisdiction of incorporation (England & Wales, Scotland, or Northern Ireland)."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "This address functions as the corporate entity's official legal headquarters. It is the designated location where statutory communications, legal notices, court summons, and official correspondence from UK authorities (including Companies House, HM Revenue & Customs, the Information Commissioner's Office, and UK courts) are served by Royal Mail." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Example: Software Agency Legal Delivery"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Consider Tariq, a software founder in Lahore operating a UK LTD. HMRC issues an official Corporation Tax UTR notice to his company. Because Tariq subscribed to ADVAQ's London Virtual Registered Office address, the physical letter is received by ADVAQ's London mailroom, digitally scanned in high resolution, and uploaded to Tariq's secure online client dashboard within 2 hours." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "service-address", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. What is a Directors' Service Address?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "While the Registered Office belongs to the corporate entity, a ",
          /* @__PURE__ */ jsx("strong", { children: "Service Address" }),
          " belongs to the individual human beings who manage or own the entity—specifically directors, company secretaries, and Persons with Significant Control (PSCs holding >25% shares)."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Under Companies Act Sections 163 and 240, every company officer must disclose two separate addresses:" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Usual Residential Address (URA):" }),
              " Your actual home living address in your country of residence. Stored in a private, non-public database."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Service Address:" }),
              " Your official public contact address displayed on the Companies House public online register."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "address-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive Legal Address Comparison Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative legal analysis of UK corporate address types:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Address Parameter" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Registered Office Address" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Directors' Service Address" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Trading / Business Address" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Applies To" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "The Corporate Company Entity" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Individual Officers & PSCs" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Commercial Operations & Clients" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Location Mandate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Must be inside the UK" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Anywhere Globally (UK or Overseas)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Anywhere Globally" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Public Search Visibility" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "100% Public on Companies House" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "100% Public (Shields Home Address)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Optional / Private" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Mail Received" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Companies House, HMRC & UK Courts" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Director Legal Notices" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Customer Returns & Bank Cards" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "PO Box Permitted?" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Strictly Forbidden (ECCTA 2023)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "Strictly Forbidden" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Allowed" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UK ADDRESS PRIVACY SOLUTIONS" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get a Premium London Virtual Office Address" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "Protect your personal home address from public registers. ADVAQ provides commercial London Registered Office & Directors' Service Addresses with digital mail scanning and forwarding." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/registered-office-address", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Virtual Address Packages ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "privacy-risks", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Privacy Risks of Exposing Overseas Home Addresses" }),
        /* @__PURE__ */ jsx("p", { children: "If a non-resident director lists their personal residential address overseas as their Service Address, that address is permanently published on the public Companies House website and indexed by search engines globally (Google, Bing)." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(EyeOff, { className: "text-red-600", size: 18 }),
              "1. Web Scraping & Public Search Engine Indexing"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Third-party corporate data aggregators (such as Endole, Duedil, and CompanyCheck) automatically harvest Companies House records. Your full home address will be permanently linked to your name in Google search results." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(Lock, { className: "text-red-600", size: 18 }),
              "2. Junk Mail & Identity Theft Exposures"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Exposing your residential address invites unsolicited commercial junk mail, telemarketing, and identity fraud attempts by bad actors misusing public director profiles." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "virtual-office-solution", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. How ADVAQ's UK Virtual Office Address Package Works" }),
        /* @__PURE__ */ jsx("p", { children: "ADVAQ provides a commercial London street address that covers both your company's Registered Office Address and all directors' Service Addresses under a single subscription:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-2xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx(Building2, { size: 28, className: "text-gold-600 mx-auto mb-2" }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm", children: "Central London Street Address" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Prestigious commercial location in London for Companies House compliance." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-2xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx(Mail, { size: 28, className: "text-gold-600 mx-auto mb-2" }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm", children: "Same-Day Digital Scanning" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Statutory letters from HMRC & Companies House scanned and emailed instantly." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-2xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx(Shield, { size: 28, className: "text-gold-600 mx-auto mb-2" }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm", children: "Complete Home Privacy" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1 leading-relaxed", children: "Keeps your personal home address 100% hidden from search engines." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 6 Critical Common Address Mistakes to Avoid" }),
        /* @__PURE__ */ jsx("p", { children: "Avoid these six frequent errors regarding UK corporate address declarations:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Using a Standalone PO Box Address"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "PO Boxes without physical street locations are forbidden under ECCTA 2023 rules and cause immediate application rejection." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Failing to Update Companies House Within 14 Days"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "If a director moves home or changes service addresses, you must file Form CH01 within 14 days to prevent compliance penalties." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "3. Confusing Registered Office with Customer Trading Address"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Registered office services strictly receive official UK government mail. Customer parcels and trading mail should be routed to a commercial mail forwarding service." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "updating-addresses", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. How to Update Addresses via Form AD01 & CH01" }),
        /* @__PURE__ */ jsx("p", { children: "Updating corporate addresses with Companies House is fast and electronic:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Form AD01:" }),
              " Submit online via WebFiling to update the company's Registered Office Address (takes effect within 24 hours)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Form CH01:" }),
              " Submit online to update an individual director's Service Address or residential address."
            ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "PROTECT YOUR HOME ADDRESS PRIVACY" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Get Your UK Virtual Office Address Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Commercial London registered address with daily digital mail forwarding for non-resident directors." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/registered-office-address", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK Virtual Office Address" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
