import { jsxs, jsx } from "react/jsx-runtime";
import { B as faqs } from "./router-COelCWah.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, Scale, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
import "sonner";
function ArticlePage() {
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("article", { className: "min-h-screen bg-white text-gray-800", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:underline", children: "Blog" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting", className: "hover:underline", children: "Legal Contract Drafting" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Terms of Service Checklist for SaaS Apps & Digital Platforms (Liability Caps)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word comprehensive legal engineering tutorial for SaaS founders, app developers, and digital platform owners on drafting enforceable Terms of Service, Acceptable Use Policies, and liability caps." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "Advocate Muhammad Abdullah (Lead Counsel)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "11 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "SaaS Compliance & Clickwrap Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: SaaS Terms Checklist Pillars" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "1. Clickwrap Enforcement" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: 'Require active checkbox consent during user registration or checkout rather than relying on passive footer links ("Browsewrap").' })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "2. Limitation of Liability Cap" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Cap maximum financial exposure to total subscription fees paid by the user in the preceding 12 months, disclaiming indirect damages." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "3. Acceptable Use Policy (AUP)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Strict prohibition against automated scraping, API abuse, reverse-engineering, malware distribution, and account sharing." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "4. Auto-Renewal Disclosures" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Explicit subscription billing terms complying with US ROSCA, California ARL, and EU consumer protection regulations." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. Introduction: Why SaaS Terms of Service Are Essential" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#clickwrap-vs-browsewrap", className: "hover:text-gold-600 underline", children: "2. Clickwrap vs Browsewrap Enforceability" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#liability-disclaimers", className: "hover:text-gold-600 underline", children: "3. Liability Limitation & Warranty Disclaimers" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#acceptable-use-policy", className: "hover:text-gold-600 underline", children: "4. Structuring an Enforceable Acceptable Use Policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#subscription-billing-rules", className: "hover:text-gold-600 underline", children: "5. Auto-Renewal Subscriptions & Cancellation Disclosures" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#arbitration-class-action", className: "hover:text-gold-600 underline", children: "6. Arbitration & Class Action Waivers" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Introduction: Why SaaS Terms of Service Are Essential" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Operating a Software-as-a-Service (SaaS) application or digital platform without a comprehensive ",
          /* @__PURE__ */ jsx("strong", { children: "Terms of Service (ToS)" }),
          " exposes your company to immense legal liability."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Your Terms of Service is the legal contract between your SaaS business and its users. It defines permitted platform usage, outlines subscription payment rules, protects your software intellectual property, and shields the business from user lawsuits arising from server outages or data loss." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Legal Baseline:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "Copy-pasting generic Terms of Service from another website can leave your SaaS platform vulnerable to invalidation in court if key jurisdictional or subscription auto-renewal disclaimers are omitted." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "clickwrap-vs-browsewrap", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Clickwrap vs Browsewrap Enforceability" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Courts routinely invalidate ",
          /* @__PURE__ */ jsx("strong", { children: "Browsewrap" }),
          ' agreements—where a website simply places a static "Terms of Use" link in the footer without requiring user interaction.'
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To ensure legal enforceability in US, UK, and European courts, SaaS platforms must implement ",
          /* @__PURE__ */ jsx("strong", { children: "Clickwrap Consent" }),
          ": requiring users to actively check a box stating ",
          /* @__PURE__ */ jsx("em", { children: '"I have read and agree to the Terms of Service"' }),
          " before registering an account or completing checkout."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "liability-disclaimers", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Liability Limitation & Warranty Disclaimers" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The most critical clause protecting SaaS founders is the ",
          /* @__PURE__ */ jsx("strong", { children: "Limitation of Liability Clause" }),
          ". It must contain two components:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Financial Liability Cap:" }),
              " Caps total damages to the actual fees paid by the user to the SaaS platform in the preceding 12 months (or $100 if a free tier)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Consequential Damages Waiver:" }),
              " Explicitly excludes lost profits, lost revenue, data corruption, or indirect business interruption claims."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Sample Liability Cap Wording:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: `"IN NO EVENT SHALL SAAS COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE SERVICE. IN ALL CASES, SAAS COMPANY'S TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE TOTAL FEES PAID BY USER IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM."` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ SaaS LEGAL POLICY SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Draft Custom Terms of Service for Your SaaS with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ drafts bespoke Terms of Service agreements and Acceptable Use Policies for SaaS platforms and mobile apps across US, UK, UAE, and Pakistan." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/terms-of-service", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Terms of Service Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "acceptable-use-policy", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Structuring an Enforceable Acceptable Use Policy (AUP)" }),
        /* @__PURE__ */ jsx("p", { children: "An Acceptable Use Policy protects your cloud infrastructure and database integrity by defining prohibited user activities, including:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-3 text-xs my-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: "❌ Automated data scraping, crawling, or harvesting" }),
          /* @__PURE__ */ jsx("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: "❌ Reverse-engineering or decompiling application source code" }),
          /* @__PURE__ */ jsx("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: "❌ Transmitting malware, viruses, or spam via API endpoints" }),
          /* @__PURE__ */ jsx("div", { className: "p-4 border border-border rounded-xl bg-off-white", children: "❌ Sharing account credentials to bypass seat licensing" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "subscription-billing-rules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Auto-Renewal Subscriptions & Cancellation Disclosures" }),
        /* @__PURE__ */ jsx("p", { children: `Consumer protection statutes (such as the US Restore Online Shoppers' Confidence Act - ROSCA, and California Automatic Renewal Law - ARL) mandate that SaaS platforms must provide clear, conspicuous disclosures regarding recurring billing schedules and offer a simple "one-click" online cancellation mechanism.` })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "arbitration-class-action", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Mandatory Arbitration & Class Action Waivers" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Include a ",
          /* @__PURE__ */ jsx("strong", { children: "Mandatory Binding Arbitration Clause" }),
          " paired with a ",
          /* @__PURE__ */ jsx("strong", { children: "Class Action Waiver" }),
          " requiring users to resolve disputes on an individual basis rather than joining class litigation."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "SaaS LEGAL POLICY SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Secure Your Platform with Professional Terms" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Terms of Service drafting, Acceptable Use Policies, liability limitation clauses, and clickwrap implementation guidance drafted by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/terms-of-service", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Terms of Service Drafting" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
