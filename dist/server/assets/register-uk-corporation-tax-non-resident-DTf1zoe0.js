import { jsxs, jsx } from "react/jsx-runtime";
import { O as faqs } from "./router-DCGwfQ0t.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, Key, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "How to Register for UK Corporation Tax as an Overseas Director" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A step-by-step compliance guide for non-resident founders on receiving your 10-digit Company UTR letter, registering with HMRC, and setting up Government Gateway." }),
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
            /* @__PURE__ */ jsx("span", { children: "HMRC Official Compliance Guide" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Registration Rules (TL;DR)" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "3-Month Deadline:" }),
            " You must register for Corporation Tax with HMRC within 3 months of initiating any UK company trade or invoicing."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "10-Digit Company UTR:" }),
            " HMRC generates a Unique Taxpayer Reference letter (Form CT41G) sent to your UK registered office within 14 days of formation."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Government Gateway Setup:" }),
            " Non-residents must activate an official HMRC Organization Government Gateway account using their Company UTR."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Dormant Notice:" }),
            " If not yet trading, notify HMRC of dormant status to avoid automatic failure-to-file fines."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#utr-explained", className: "hover:text-gold-600 underline", children: "1. What is a Company UTR & How is it Issued?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#registration-deadline", className: "hover:text-gold-600 underline", children: "2. Statutory 3-Month HMRC Registration Deadline" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#step-by-step-process", className: "hover:text-gold-600 underline", children: "3. Step-by-Step HMRC Online Tax Registration Guide" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#gateway-account", className: "hover:text-gold-600 underline", children: "4. Setting Up an HMRC Organization Government Gateway Account" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#dormant-rules", className: "hover:text-gold-600 underline", children: "5. What to Do If Your Company Is Not Yet Trading (Dormant Status)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "utr-explained", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What is a Company UTR & How is it Issued?" }),
        /* @__PURE__ */ jsx("p", { children: "When a UK Limited Company is registered with Companies House, Companies House automatically notifies HM Revenue & Customs (HMRC)." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "HMRC then creates an official corporate tax profile for your business and issues a unique ",
          /* @__PURE__ */ jsx("strong", { children: "10-digit Company Unique Taxpayer Reference (UTR)" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-900 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Key, { className: "text-gold-500", size: 20 }),
            "The Form CT41G Letter:"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700 leading-relaxed", children: [
            "HMRC sends the official UTR notification letter (Form CT41G) by post to your company's official ",
            /* @__PURE__ */ jsx("strong", { children: "UK Registered Office Address" }),
            " within 14 days of incorporation."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 italic", children: "* Note for Overseas Directors: ADVAQ provides a central London Registered Office Address and scans your official HMRC UTR letter directly to your dashboard same-day." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "registration-deadline", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Statutory 3-Month HMRC Registration Deadline" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under UK tax law, a company must notify HMRC that it has started carrying on a business activity within ",
          /* @__PURE__ */ jsx("strong", { children: "3 months" }),
          " of the start date."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Business activity includes:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Issuing sales invoices or receiving customer payments into your bank account." }),
          /* @__PURE__ */ jsx("li", { children: "Buying goods, software subscriptions, or services for resale." }),
          /* @__PURE__ */ jsx("li", { children: "Renting office space or employing staff." }),
          /* @__PURE__ */ jsx("li", { children: "Advertising or entering into commercial contracts." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 p-4 rounded-xl text-sm text-red-900 my-4", children: [
          /* @__PURE__ */ jsx("strong", { children: "Penalty Warning:" }),
          ' Missing the 3-month notification window exposes the company to automated "Failure to Notify" fines under Schedule 41 to the Finance Act 2008.'
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "HMRC UTR & TAX REGISTRATION ASSISTANCE" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get Your 10-Digit Company UTR & HMRC Registration" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ handles UTR retrieval, HMRC Government Gateway setup, and Corporation Tax registration for overseas directors smoothly from abroad." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/utr-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore Company UTR & Tax Registration ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "step-by-step-process", className: "space-y-6 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Step-by-Step HMRC Online Tax Registration Guide" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Retrieve Your 10-Digit Company UTR Number" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Access your scanned CT41G letter from your ADVAQ London Registered Address portal." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "2" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Create an HMRC Organization Account" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Visit GOV.UK and register a new Organization User ID for Corporation Tax online services." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "3" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Enter Company Details & Trading Start Date" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Input your Company Registration Number (CRN), 10-digit UTR, main business SIC code, and exact trading start date." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0", children: "4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Activate Corporation Tax Web Service" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Enter the activation PIN sent by HMRC to complete tax portal setup." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "gateway-account", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Setting Up an HMRC Organization Government Gateway Account" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To file tax returns, pay Corporation Tax, or register for VAT, non-resident directors must maintain an active ",
          /* @__PURE__ */ jsx("strong", { children: "HMRC Government Gateway Organization User ID" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Always ensure you select an ",
          /* @__PURE__ */ jsx("strong", { children: '"Organization"' }),
          " account type when registering your UK Limited Company on GOV.UK, as personal accounts cannot manage corporate tax."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "dormant-rules", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. What to Do If Your Company Is Not Yet Trading (Dormant Status)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If you incorporated your UK LTD company but have not yet started business activities or generated revenue, your company is legally considered ",
          /* @__PURE__ */ jsx("strong", { children: "dormant for Corporation Tax" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "You must formally notify HMRC that your company is dormant. Once HMRC marks your company as dormant, they will pause annual tax return notices until you begin trading." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "HMRC UTR & TAX REGISTRATION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Register for UK Corporation Tax with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Retrieve your 10-digit UTR, set up your HMRC Government Gateway account, and ensure full statutory compliance for non-resident directors." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/utr-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order HMRC UTR & Tax Registration" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
