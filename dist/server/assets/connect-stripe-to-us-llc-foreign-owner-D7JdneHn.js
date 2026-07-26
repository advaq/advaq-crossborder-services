import { jsxs, jsx } from "react/jsx-runtime";
import { aC as faqs } from "./router-DCGwfQ0t.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, CreditCard, Check, ArrowRight, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "US Business Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Connecting US Stripe & PayPal Accounts to a Foreign-Owned US LLC" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A step-by-step payment gateway integration guide for foreign entrepreneurs on activating US Stripe and PayPal accounts, linking Mercury bank details, verifying EINs, and preventing account suspensions." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US FinTech Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Payment Gateway Compliance Guide" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Stripe & PayPal Setup Essentials" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "No SSN Required for Stripe US:" }),
            " Non-residents can activate a US Stripe account using their 9-digit IRS EIN and international passport."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Mercury / Relay Bank Linking:" }),
            " Connect your US ACH checking account to receive daily payouts in USD with zero currency conversion losses."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Real US Business Address:" }),
            " Use a virtual business address rather than a generic shared registered agent address to pass Stripe KYC checks."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Website & Business Transparency:" }),
            " Ensure your website displays clear terms of service, refund policy, and contact details before submitting."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why-us-stripe", className: "hover:text-gold-600 underline", children: "1. Why Global Founders Need a US Stripe & PayPal Account" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#prerequisites", className: "hover:text-gold-600 underline", children: "2. Prerequisites Checklist Before Applying" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#stripe-setup-steps", className: "hover:text-gold-600 underline", children: "3. Step-by-Step US Stripe Account Activation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#paypal-setup-steps", className: "hover:text-gold-600 underline", children: "4. Setting Up a US PayPal Business Account" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#avoiding-freezes", className: "hover:text-gold-600 underline", children: "5. How to Prevent Payment Gateway Holds & Rejections" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "why-us-stripe", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Why Global Founders Need a US Stripe & PayPal Account" }),
        /* @__PURE__ */ jsx("p", { children: "For digital entrepreneurs based in unsupported regions (such as Pakistan or parts of Africa/Asia), processing payments from international customers is a major barrier." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "By incorporating a US Limited Liability Company, you gain access to ",
          /* @__PURE__ */ jsx("strong", { children: "US Stripe and US PayPal Business accounts" }),
          ", allowing you to accept Visa, Mastercard, American Express, and Apple Pay in 135+ currencies."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "prerequisites", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Prerequisites Checklist Before Applying" }),
        /* @__PURE__ */ jsx("p", { children: "Before filling out the Stripe application, ensure you have:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-xl border border-border space-y-3 my-4", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-900 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "text-gold-500", size: 20 }),
            "Stripe Onboarding Checklist:"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "US LLC Entity:" }),
                " State approved Articles of Organization."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "IRS EIN Letter:" }),
                " Official CP575 or 147C confirmation letter."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "US Bank Account:" }),
                " Mercury or Relay checking account (routing and account number)."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "US Phone Number:" }),
                " Virtual US number (OpenPhone or Skype) for 2FA verification."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "stripe-setup-steps", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Step-by-Step US Stripe Account Activation" }),
        /* @__PURE__ */ jsxs("ol", { className: "list-none space-y-2 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: 'Create a new account on Stripe.com selecting "United States" as business location.' }),
          /* @__PURE__ */ jsx("li", { children: 'Select business type: "Company" → "Single-member LLC" or "Multi-member LLC".' }),
          /* @__PURE__ */ jsx("li", { children: "Enter your 9-digit Employer Identification Number (EIN) under Business Tax ID." }),
          /* @__PURE__ */ jsx("li", { children: "Enter your personal home address (foreign country) and passport details for identity verification." }),
          /* @__PURE__ */ jsx("li", { children: "Link your Mercury or Relay US bank checking account for daily USD payouts." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "US PAYMENT GATEWAY ASSISTANCE" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Form Your US LLC & Unlock Stripe & PayPal" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ manages state LLC incorporation, IRS EIN tax ID acquisition, Mercury bank setup, and payment gateway onboarding." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/mercury-bank-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore US Setup Packages ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "paypal-setup-steps", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Setting Up a US PayPal Business Account" }),
        /* @__PURE__ */ jsx("p", { children: "A US PayPal Business account requires your US LLC details, EIN, and linked US bank account." }),
        /* @__PURE__ */ jsx("p", { children: "Unlike Stripe, PayPal may prompt for a personal SSN or ITIN if transaction volume exceeds certain reporting thresholds. Having an ITIN (issued via Form W-7) ensures long-term PayPal stability." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "avoiding-freezes", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. How to Prevent Payment Gateway Holds & Rejections" }),
        /* @__PURE__ */ jsx("p", { children: "To avoid risk flags from Stripe Radar:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Never log in using cheap VPN proxies that trigger location fraud alerts." }),
          /* @__PURE__ */ jsx("li", { children: "Maintain clear refund policies and customer support emails on your website." }),
          /* @__PURE__ */ jsx("li", { children: "Fulfill orders promptly and upload tracking numbers to minimize chargebacks." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "US PAYMENT GATEWAY SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Start Accepting Global Payments with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "LLC incorporation, IRS EIN processing, Mercury banking, and Stripe integration support." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/mercury-bank-guide", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order US Payment Gateway Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
