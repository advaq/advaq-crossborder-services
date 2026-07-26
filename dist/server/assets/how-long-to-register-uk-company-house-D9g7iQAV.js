import { jsxs, jsx } from "react/jsx-runtime";
import { aj as faqs } from "./router-DCGwfQ0t.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, Zap, Check, AlertTriangle, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "How Long Does It Take to Register a UK Company with Companies House?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A complete breakdown of Companies House processing times, standard vs same-day incorporation, non-resident KYC verification speeds, and full operational timelines." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "6 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Verified Companies House SLA" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(Zap, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Registration Timelines at a Glance" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-3 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold text-lg block mb-1", children: "3 to 24 Hours" }),
          /* @__PURE__ */ jsx("strong", { className: "text-white block text-sm", children: "Standard Online Setup" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-300 text-[11px] mt-1", children: "Average digital incorporation speed via ADVAQ" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-emerald-400 font-bold text-lg block mb-1", children: "3 to 6 Hours" }),
          /* @__PURE__ */ jsx("strong", { className: "text-white block text-sm", children: "Same-Day Priority" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-300 text-[11px] mt-1", children: "Express priority filing before 3:00 PM UK time" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold text-lg block mb-1", children: "24 to 48 Hours" }),
          /* @__PURE__ */ jsx("strong", { className: "text-white block text-sm", children: "Business Banking" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-300 text-[11px] mt-1", children: "Wise / Payoneer digital account approval" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#standard-timelines", className: "hover:text-gold-600 underline", children: "Standard Digital Incorporation Timelines (3-24 Hours)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#same-day-service", className: "hover:text-gold-600 underline", children: "Express Same-Day Priority Incorporation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#paper-vs-online", className: "hover:text-gold-600 underline", children: "Paper Registration vs Online Digital Filing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#step-by-step-time", className: "hover:text-gold-600 underline", children: "Step-by-Step Breakdown of Setup Stages" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-delays", className: "hover:text-gold-600 underline", children: "5 Common Reasons for Companies House Delays" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#full-operational-timeline", className: "hover:text-gold-600 underline", children: "Full Operational Timeline to Receive First Client Payment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "standard-timelines", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Standard Digital Incorporation Timelines (3-24 Hours)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Under standard operating conditions, registering a UK Private Limited Company (LTD) digitally with Companies House takes ",
          /* @__PURE__ */ jsx("strong", { children: "between 3 and 24 hours" }),
          " during normal business days (Monday through Friday)."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The UK possesses one of the fastest corporate registration systems in the world. Because applications are submitted electronically via authorized formation software connected directly to Companies House APIs, manual data entry is eliminated." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "same-day-service", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Express Same-Day Priority Incorporation" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If you need your company formed urgently to sign a contract, secure a domain, or open a merchant payment gateway, Companies House offers an ",
          /* @__PURE__ */ jsx("strong", { children: "Express Same-Day Incorporation Service" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-50 border border-emerald-200 p-6 rounded-xl space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-emerald-900 text-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Zap, { size: 20, className: "text-emerald-600" }),
            "Same-Day Guarantee Rules:"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-emerald-800 leading-relaxed", children: [
            "If your application and identity documents are submitted before ",
            /* @__PURE__ */ jsx("strong", { children: "3:00 PM UK Time (GMT/BST)" }),
            " on a business day, Companies House guarantees that your Certificate of Incorporation will be issued by 6:00 PM the exact same day."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "paper-vs-online", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Paper Registration vs Online Digital Filing" }),
        /* @__PURE__ */ jsx("p", { children: "It is critical to distinguish between paper application forms (Form IN01 sent by postal mail) and digital electronic submission:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-emerald-200 bg-white p-5 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1", children: "RECOMMENDED" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-navy-900 text-lg mb-2", children: "Digital Online Filing" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs text-gray-600", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Check, { size: 14, className: "text-emerald-500" }),
                " Duration: 3 to 24 Hours"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Check, { size: 14, className: "text-emerald-500" }),
                " Digital Certificates sent via PDF instantly"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Check, { size: 14, className: "text-emerald-500" }),
                " Available for Non-UK Residents"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-red-200 bg-white p-5 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-red-600 uppercase tracking-widest block mb-1", children: "AVOID" }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-navy-900 text-lg mb-2", children: "Postal Paper Filing" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs text-gray-600", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { size: 14, className: "text-red-500" }),
                " Duration: 8 to 15 Business Days"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { size: 14, className: "text-red-500" }),
                " High risk of postal loss or rejection"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { size: 14, className: "text-red-500" }),
                " Requires physical paper signing"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "NEED FAST 24-HOUR INCORPORATION?" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Get Your UK LTD Registered in 24 Hours" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ handles your complete UK company incorporation, registered office address, Companies House filing, HMRC tax setup, and digital bank account application with 100% approval guarantee." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/ltd-formation", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order UK Company Formation ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "step-by-step-time", className: "space-y-6 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Step-by-Step Breakdown of Setup Stages" }),
        /* @__PURE__ */ jsx("p", { children: "The complete incorporation procedure consists of four distinct operational stages:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5", children: "Stage 1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "KYC Identity Verification (30–60 Minutes)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "You submit your passport copy and proof of residential address. ADVAQ's compliance team verifies your documents under UK anti-money laundering (AML) regulations." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5", children: "Stage 2" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Companies House Queueing & Processing (3–24 Hours)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Your application is transmitted directly to the Companies House automated examiner queue." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5", children: "Stage 3" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "Certificate & Document Generation (Instant upon Approval)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Upon approval, Companies House issues your Company Registration Number (CRN), Certificate of Incorporation, Memorandum, and Articles of Association." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 border border-border rounded-xl bg-white", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5", children: "Stage 4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-900 text-sm", children: "HMRC Corporation Tax Activation & Banking (24–48 Hours)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Your company is registered with HMRC for Corporation Tax, and digital bank applications (Wise Business / Payoneer) are submitted." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-delays", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Common Reasons for Companies House Delays" }),
        /* @__PURE__ */ jsx("p", { children: "While 95% of digital incorporations complete in under 24 hours, the following factors can trigger a manual review or rejection:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600 shrink-0 mt-0.5", size: 18 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Sensitive Company Names:" }),
              ' Words like "Group", "International", "Trust", "Bank", or "Royal" require supporting justification letters, which adds 1–3 business days.'
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600 shrink-0 mt-0.5", size: 18 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Similar Existing Names:" }),
              " If your proposed name is deemed too similar to an existing trademark or registered entity, Companies House will reject the application."
            ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "REGISTER YOUR UK COMPANY TODAY" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your UK LTD in 24 Hours" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Order online today. ADVAQ incorporates your UK LTD company with Companies House in 3 to 24 hours guaranteed." }),
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
