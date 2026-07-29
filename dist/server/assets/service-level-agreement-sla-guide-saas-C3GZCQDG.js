import { jsxs, jsx } from "react/jsx-runtime";
import { I as faqs } from "./router-DIGQQZx9.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, ArrowRight, Check, Scale, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Service Level Agreements (SLAs) for SaaS & IT Providers: Metrics & Penalties" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word comprehensive legal and technical guide for SaaS founders, cloud hosts, and managed service providers (MSPs) on drafting Service Level Agreements (SLAs), calculating uptime percentages, and structuring Service Credits." }),
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
            /* @__PURE__ */ jsx("span", { children: "Enterprise SaaS SLA Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: SLA Architectural Pillars" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "1. Uptime Target (99.9%)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: 'Standard B2B enterprise benchmark permitting 43.8 minutes of unexcused monthly downtime. 99.99% ("Four Nines") requires costly redundant multi-region cloud infrastructure.' })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "2. Graduated Service Credits" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "10% credit for <99.9%, 25% credit for <99.0%, capped at maximum 50% of the customer's monthly subscription fee applied against future invoices." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "3. Sole & Exclusive Remedy Clause" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Legally shields the SaaS vendor by establishing that Service Credits are the customer's single financial remedy for downtime, preventing lawsuits for lost profits." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "4. Maintenance & Cloud Exclusions" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Explicitly excludes scheduled maintenance windows and third-party cloud infrastructure outages (AWS, Azure, GCP) from SLA downtime calculations." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. SLA Fundamentals for B2B SaaS Platforms" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#uptime-math", className: "hover:text-gold-600 underline", children: "2. Understanding Uptime Math (99.9% vs 99.99%)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#service-credits", className: "hover:text-gold-600 underline", children: "3. Structuring Service Credit Remedies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#severity-levels", className: "hover:text-gold-600 underline", children: "4. Severity Level Response Time Tiers (Sev 1 to Sev 4)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#sole-remedy-clause", className: "hover:text-gold-600 underline", children: '5. The "Sole & Exclusive Remedy" Legal Shield' }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#maintenance-exclusions", className: "hover:text-gold-600 underline", children: "6. Scheduled Maintenance & Upstream Cloud Exclusions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. SLA Fundamentals for B2B SaaS Platforms & IT Vendors" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "When selling cloud software or managed IT services to enterprise clients, one of the first legal contracts requested during vendor procurement is the ",
          /* @__PURE__ */ jsx("strong", { children: "Service Level Agreement (SLA)" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "An SLA is a formal contract between a service provider and a client that defines quantifiable performance metrics—specifically system availability (uptime), incident response times, maintenance windows, and financial credit remedies if availability targets are missed." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Strategic Dual Purpose:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "A well-engineered SLA builds enterprise customer trust during procurement while establishing strict financial caps on provider liability when unexpected server outages occur." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "uptime-math", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Understanding Uptime Math (99.9% vs 99.99%)" }),
        /* @__PURE__ */ jsx("p", { children: 'SaaS founders often promise "99.99% uptime" in sales pitches without realizing the legal and architectural burdens involved. Uptime percentage determines the maximum unexcused downtime allowed:' }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Uptime SLA Tier" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Allowed Monthly Downtime" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Allowed Annual Downtime" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Infrastructure Complexity" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: '99.0% ("Two Nines")' }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "7.3 hours / month" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "3.65 days / year" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Basic single-server setup." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "99.5%" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "3.65 hours / month" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "1.83 days / year" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Standard cloud server with auto-scaling." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: '99.9% ("Three Nines")' }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "43.8 minutes / month" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "8.76 hours / year" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Enterprise Standard (Multi-AZ load balancing)." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: '99.99% ("Four Nines")' }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "4.38 minutes / month" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "52.6 minutes / year" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "High Availability (Active-Active multi-region replication)." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "service-credits", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Structuring Service Credit Remedies" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "When a SaaS provider fails to meet its monthly uptime commitment, the primary contractual remedy is issuing ",
          /* @__PURE__ */ jsx("strong", { children: "Service Credits" }),
          ". Service credits are invoice discounts applied toward future billing cycles."
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Standard Graduated Service Credit Table:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 my-4 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { children: "Monthly Uptime < 99.9% but ≥ 99.0%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-gold-700 font-bold", children: "10% Credit of Monthly Fee" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { children: "Monthly Uptime < 99.0% but ≥ 95.0%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-gold-700 font-bold", children: "25% Credit of Monthly Fee" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border border-border rounded-xl bg-off-white flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { children: "Monthly Uptime < 95.0%" }),
            /* @__PURE__ */ jsx("strong", { className: "text-gold-700 font-bold", children: "50% Credit of Monthly Fee (Maximum Cap)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ SaaS SLA DRAFTING SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Draft Enterprise-Ready SLAs with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ drafts custom Service Level Agreements for B2B SaaS platforms and Managed IT Providers with balanced uptime metrics and sole-remedy credit caps." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/service-level-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order SLA Contract Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "severity-levels", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Severity Level Response Time Tiers (Sev 1 to Sev 4)" }),
        /* @__PURE__ */ jsx("p", { children: "An SLA must define incident response times based on ticket severity. The standard 4-tier incident matrix includes:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Severity 1 (Critical Outage):" }),
              " Core system down for all users. Response Time: 1 hour (24/7/365). Resolution target: 4 hours."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Severity 2 (Major Feature Impaired):" }),
              " High-impact issue affecting key features with no workaround. Response Time: 4 hours (Business Hours)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Severity 3 (Minor Defect):" }),
              " Minor feature issue with workaround. Response Time: 24 hours."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Severity 4 (Cosmetic / Feature Request):" }),
              " Non-urgent documentation or UI feedback. Response Time: 3 business days."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "sole-remedy-clause", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: '5. The "Sole & Exclusive Remedy" Legal Shield' }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Without a ",
          /* @__PURE__ */ jsx("strong", { children: "Sole and Exclusive Remedy Clause" }),
          ", a customer whose service goes down during a critical business event might claim $100,000 in lost revenue."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Sample Sole & Exclusive Remedy Clause:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: `"Customer's sole and exclusive remedy, and Provider's entire liability, for any failure of the Service to meet the Uptime Commitment or Response Time metrics set forth in this SLA shall be the issuance of Service Credits as explicitly set forth herein."` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "maintenance-exclusions", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Scheduled Maintenance & Upstream Cloud Exclusions" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Your SLA must state that the following occurrences are explicitly ",
          /* @__PURE__ */ jsx("strong", { children: "excluded from downtime calculations" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Scheduled maintenance announced at least 48 hours in advance (performed during off-peak hours)." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Outages caused by upstream cloud providers (e.g. global AWS, Azure, GCP region failure)." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: "Client ISP failures, client network firewalls, or invalid API requests sent by client code." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "SaaS & IT SLA CONTRACT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Secure Your Platform with a Professional SLA" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "99.9% uptime formulas, Service Credit structures, response time matrices, and sole-remedy liability shields drafted by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/service-level-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order SLA Drafting Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
