import { jsxs, jsx } from "react/jsx-runtime";
import { M as faqs } from "./router-D17Z8zgN.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, ArrowRight, EyeOff, Lock, Building2, Mail, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive legal breakdown for non-resident directors on address privacy, Companies House public records, statutory mail handling, and virtual office compliance." }),
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
            /* @__PURE__ */ jsx("span", { children: "Companies Act 2006 Address Rules" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Key Takeaways (TL;DR)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Registered Office Address" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Applies to the ",
            /* @__PURE__ */ jsx("strong", { children: "COMPANY" }),
            ". Must be a physical address in the UK. Receives official government mail from Companies House & HMRC. Visible on public register."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1", children: "Directors' Service Address" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-100 leading-relaxed", children: [
            "Applies to the ",
            /* @__PURE__ */ jsx("strong", { children: "INDIVIDUAL DIRECTOR / PSC" }),
            ". Can be located anywhere in the world, but using a UK virtual address hides your home address from public records."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#registered-office", className: "hover:text-gold-600 underline", children: "1. What is a UK Registered Office Address?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#service-address", className: "hover:text-gold-600 underline", children: "2. What is a Directors' Service Address?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-table", className: "hover:text-gold-600 underline", children: "3. Side-by-Side Legal Comparison Table" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#privacy-risks", className: "hover:text-gold-600 underline", children: "4. Why Overseas Directors Must Protect Personal Home Privacy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#virtual-office-solution", className: "hover:text-gold-600 underline", children: "5. How ADVAQ's UK Virtual Office Address Package Works" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "registered-office", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What is a UK Registered Office Address?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under Section 86 of the ",
          /* @__PURE__ */ jsx("em", { children: "Companies Act 2006" }),
          ", every UK Limited Company must at all times have an official ",
          /* @__PURE__ */ jsx("strong", { children: "Registered Office Address" }),
          " situated in the jurisdiction of incorporation (England & Wales, Scotland, or Northern Ireland)."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "This address acts as the official legal headquarters of your company. It is where statutory communications, legal notices, court summons, and official letters from UK authorities (Companies House, HMRC, ICO) are delivered." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-5 rounded-xl border border-border space-y-2 my-4 text-sm text-gray-700", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900", children: "Key Rules for Registered Office Addresses:" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-1.5 list-disc list-inside", children: [
            /* @__PURE__ */ jsx("li", { children: "Must be a physical street location in the UK (PO Boxes are forbidden)." }),
            /* @__PURE__ */ jsx("li", { children: "Is permanently displayed on the public Companies House online register." }),
            /* @__PURE__ */ jsx("li", { children: "Must be located in the same UK home jurisdiction as the company's registration." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "service-address", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. What is a Directors' Service Address?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "While the Registered Office belongs to the company, a ",
          /* @__PURE__ */ jsx("strong", { children: "Service Address" }),
          " belongs to the individual human beings managing the company — specifically directors, secretaries, and People with Significant Control (PSCs)."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The Service Address is the official correspondence address for a director where official mail concerning their directorship is sent." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Crucially, Companies House requires every director to provide both their ",
          /* @__PURE__ */ jsx("strong", { children: "Usual Residential Address (URA)" }),
          " and a ",
          /* @__PURE__ */ jsx("strong", { children: "Service Address" }),
          ". The Service Address is published on the public record, while your residential address is kept in a secure, non-public database accessible only to credit reference agencies and law enforcement."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-table", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Side-by-Side Legal Comparison Table" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm border-collapse border border-border rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white font-serif", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4 border border-white/10", children: "Feature" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 border border-white/10 text-gold-400", children: "Registered Office Address" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 border border-white/10 text-navy-200", children: "Directors' Service Address" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Applies To" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "The Corporate Entity (Company)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Individual Directors, Officers & PSCs" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Location Requirement" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-emerald-700 bg-emerald-50/50", children: "Must be in the UK" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Can be anywhere worldwide (UK or overseas)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Public Register Visibility" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Publicly visible on Companies House" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Publicly visible (keeps home address hidden)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "Mail Handled" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Companies House, HMRC & UK Courts mail" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Personal director legal notices & correspondence" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-dark-text", children: "PO Box Permitted?" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-600 font-semibold", children: "No (Strictly Prohibited)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-red-600 font-semibold", children: "No (Requires physical address)" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "UK ADDRESS PRIVACY SOLUTIONS" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get a Premium London Virtual Office Address" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "Protect your personal home address from public registers. ADVAQ provides commercial London Registered Office & Directors' Service Addresses with digital mail scanning and forwarding." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/registered-office-address", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore UK Virtual Address Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "privacy-risks", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Why Overseas Directors Must Protect Personal Home Privacy" }),
        /* @__PURE__ */ jsx("p", { children: "If a non-resident director registers their personal home address overseas as their Service Address, that address becomes permanently searchable on the internet via Companies House databases and third-party company information aggregators (such as Endole, Duedil, and Google Search)." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm", children: [
            /* @__PURE__ */ jsx(EyeOff, { className: "text-red-600 shrink-0 mt-0.5", size: 18 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Spam & Cold Mail Harassment:" }),
              " Marketing companies harvest public Companies House records daily to send unwanted physical junk mail and cold solicitations."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm", children: [
            /* @__PURE__ */ jsx(Lock, { className: "text-red-600 shrink-0 mt-0.5", size: 18 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Identity Theft & Security Risks:" }),
              " Publishing your home location alongside your full legal name and month of birth exposes you to identity fraud."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "virtual-office-solution", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. How ADVAQ's UK Virtual Office Package Works" }),
        /* @__PURE__ */ jsx("p", { children: "ADVAQ provides a prestige commercial London street address that covers both your company's Registered Office Address and all directors' Service Addresses simultaneously:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx(Building2, { size: 24, className: "text-gold-500 mx-auto mb-2" }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Prestige Address" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Central London commercial street address for Companies House." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx(Mail, { size: 24, className: "text-gold-500 mx-auto mb-2" }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Digital Mail Scan" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Statutory letters from HMRC & Companies House scanned and emailed same-day." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border p-5 rounded-xl text-center shadow-sm", children: [
            /* @__PURE__ */ jsx(Shield, { size: 24, className: "text-gold-500 mx-auto mb-2" }),
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Complete Privacy" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Keeps your personal home address 100% off public internet databases." })
          ] })
        ] })
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
