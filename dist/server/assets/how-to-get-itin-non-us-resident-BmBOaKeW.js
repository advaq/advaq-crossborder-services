import { jsxs, jsx } from "react/jsx-runtime";
import { ag as faqs } from "./router-DoRrh2l-.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, CreditCard, UserCheck, Scale, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Why Foreign Business Owners Need an ITIN & How to Apply (W-7 Form Guide)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive IRS Form W-7 masterclass for non-resident founders on personal ITIN numbers, tax treaty claims, US credit card applications, and Certifying Acceptance Agent (CAA) passport verification." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Tax Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "16 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "IRS Form W-7 & Treasury Regulations Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "ITIN Key Facts at a Glance" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "ITIN vs EIN Distinction" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "EIN is for your US company entity (9 digits). ITIN is for you personally as a foreign individual without a US SSN (starts with 9)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "US Credit Cards & PayPal Unlocking" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Having a personal ITIN allows non-residents to build US personal FICO credit scores and acquire American Express & Chase credit cards." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Form W-7 Exception Rules" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Non-residents can apply year-round under Exception 1(a) or Exception 1(b) with LLC partnership documents without attaching a tax return." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "CAA Passport Protection" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Working with an IRS Certifying Acceptance Agent (CAA) eliminates the risk of mailing physical passports to the IRS in Texas." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-itin", className: "hover:text-gold-600 underline", children: "1. What Is an IRS ITIN Number & How Does It Differ From an EIN?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why-founders-need-itin", className: "hover:text-gold-600 underline", children: "2. Why Foreign Non-Resident Founders Need an ITIN" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#form-w7-exceptions", className: "hover:text-gold-600 underline", children: "3. Understanding Form W-7 Exception 1a & 1b Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#itin-matrix", className: "hover:text-gold-600 underline", children: "4. Comprehensive ITIN Application Process Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#step-by-step-w7", className: "hover:text-gold-600 underline", children: "5. Step-by-Step Guide to Filling IRS Form W-7 Line-by-Line" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#caa-benefits", className: "hover:text-gold-600 underline", children: "6. Working with an IRS Certifying Acceptance Agent (CAA)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-itin", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What Is an IRS ITIN Number & How Does It Differ From an EIN?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "An ",
          /* @__PURE__ */ jsx("strong", { children: "Individual Taxpayer Identification Number (ITIN)" }),
          " is a 9-digit personal tax processing number issued by the Internal Revenue Service (IRS) to individuals who are required to have a US taxpayer identification number but who are ineligible to receive a Social Security Number (SSN)."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "It is critical to distinguish between your company's tax ID and your personal tax ID:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "EIN (Employer Identification Number):" }),
              " Issued to your US LLC entity to open business bank accounts, hire employees, and process corporate transactions."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "ITIN (Individual Taxpayer ID):" }),
              " Issued to you personally as an individual foreign national to file US income tax returns, build personal US credit, and verify merchant accounts."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "why-founders-need-itin", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Why Foreign Non-Resident Founders Need an ITIN" }),
        /* @__PURE__ */ jsx("p", { children: "While a non-resident alien can form a US LLC using only an EIN, obtaining a personal ITIN unlocks powerful financial and legal advantages:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CreditCard, { className: "text-gold-600", size: 18 }),
              "Unlocking US Personal & Business Credit Cards"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Major US banks (such as American Express US, Chase, and Capital One) require a personal US SSN or ITIN to issue premium credit cards. With an ITIN, foreign founders can build a US FICO credit score remotely and earn valuable cash back and travel rewards." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "text-gold-600", size: 18 }),
              "Resolving Payment Gateway & Merchant Holds"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Merchant processors like PayPal US, Stripe, and Amazon Seller Central frequently audit account owners once transaction volume exceeds federal reporting thresholds. Providing a valid personal ITIN satisfies identity verification checks and prevents account freezes." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Scale, { className: "text-gold-600", size: 18 }),
              "Filing Individual US Non-Resident Returns (Form 1040-NR)"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "If your US LLC generates effectively connected US trade or business income (ETBUS) or receives US-sourced passive dividends, foreign owners are required to file an annual individual Form 1040-NR return to claim international double-taxation treaty exemptions." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "IRS ITIN APPLICATION SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Apply for Your IRS ITIN Fast with ADVAQ CAA Service" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares Form W-7, verifies foreign passports via CAA process, and manages IRS submission without mailing original passports." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/itin-application", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore ITIN Application Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "form-w7-exceptions", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Understanding Form W-7 Exception 1a & 1b Rules" }),
        /* @__PURE__ */ jsx("p", { children: "Standard IRS rules require attaching Form W-7 to an annual federal tax return (Form 1040-NR) during tax season." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "However, foreign entrepreneurs can apply for an ITIN ",
          /* @__PURE__ */ jsx("strong", { children: "year-round" }),
          " without waiting for tax season by qualifying under ",
          /* @__PURE__ */ jsx("strong", { children: "IRS Publication 1915 Exception Rules" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Exception 1(a) (Partnership Interest):" }),
              " Foreign members of a Multi-Member US LLC can apply by submitting a copy of the LLC Operating Agreement, EIN CP575 letter, and a partner certification letter."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Exception 1(b) (Third-Party Withholding):" }),
              " Foreign owners deriving interest or dividend income subject to US bank withholding can apply with an official bank withholding letter."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "itin-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Comprehensive ITIN Application Process Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed side-by-side comparative analysis of ITIN submission routes:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Submission Route" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Passport Protection" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Document Verification" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Processing Timeframe" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "IRS Certifying Acceptance Agent (CAA)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "100% Safe (Retain Original Passport)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Certified CAA Form W-7 COA" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "7 to 11 Weeks" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Direct Mail to IRS Austin, TX" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "High Risk (Must Mail Original Passport)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Physical Passport Inspection" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "9 to 14 Weeks" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "US Embassy / Consulate Certification" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Retain Original Passport" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Consular Certified Passport Copy" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-rose-700 font-bold", children: "10 to 16 Weeks (High Appointment Delay)" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "step-by-step-w7", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Step-by-Step Guide to Filling IRS Form W-7 Line-by-Line" }),
        /* @__PURE__ */ jsx("p", { children: "Completing IRS Form W-7 requires precision to prevent rejection:" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-3 text-sm pl-2 my-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Reason for Applying:" }),
              ' Check Box h (Other) and specify "Exception 1a - Partnership Interest" alongside your LLC name and EIN.'
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Applicant Identity Details:" }),
              " Enter your full legal name, foreign residential address, and mailing address exactly as shown on your passport."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Line 6c (Foreign Tax ID):" }),
              " Enter your home country personal tax identification number (e.g. CNIC / NTN in Pakistan, Emirates ID in UAE)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Line 6d (Passport Info):" }),
              " Enter passport number, issuing country, and expiration date."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "caa-benefits", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Working with an IRS Certifying Acceptance Agent (CAA)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "An ",
          /* @__PURE__ */ jsx("strong", { children: "IRS Certifying Acceptance Agent (CAA)" }),
          " is an authorized tax professional trained by the IRS to verify international identity documents."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "When applying through a CAA, the agent inspects your passport, verifies your identity via video call or in person, issues an official ",
          /* @__PURE__ */ jsx("strong", { children: "Form W-7 COA (Certificate of Accuracy)" }),
          ", and submits your application directly to the IRS. You keep your physical passport safely in your hands throughout the entire process."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "IRS ITIN APPLICATION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Obtain Your Personal IRS ITIN with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Form W-7 filing, CAA passport certification without mailing originals, Exception 1a/1b documentation, and CP565 letter delivery handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/us-services/itin-application", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order IRS ITIN Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
