import { jsxs, jsx } from "react/jsx-runtime";
import { af as faqs } from "./router-DCGwfQ0t.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, CreditCard, UserCheck, ArrowRight, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A comprehensive IRS Form W-7 masterclass for non-resident founders on personal ITIN numbers, tax treaty claims, US credit card applications, and Certifying Acceptance Agent (CAA) verification." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ US Tax Advisory" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "8 Min Read · Published July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "IRS Form W-7 & Treasury Regulations" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "ITIN Key Facts at a Glance" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "ITIN vs EIN:" }),
            " EIN is for your company (9 digits). ITIN is for you personally as a foreign individual without a US SSN (starts with 9)."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Unlocks US Credit Cards & PayPal:" }),
            " Having a personal ITIN allows non-residents to build US personal credit history and get American Express US credit cards."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Form W-7 Exception Rules:" }),
            " Non-residents can apply under Exception 1(a) or Exception 1(b) with LLC partnership documents without attaching a full tax return."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gold-500 font-bold", children: "•" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "No Need to Mail Original Passport:" }),
            " Working with an IRS Certifying Acceptance Agent (CAA) avoids mailing your physical passport to the IRS."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-off-white border border-border p-6 rounded-xl mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4", children: "Table of Contents" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm text-navy-900 list-none font-medium", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-itin", className: "hover:text-gold-600 underline", children: "1. What Is an IRS ITIN Number?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#why-founders-need-itin", className: "hover:text-gold-600 underline", children: "2. Why Foreign Non-Resident Founders Need an ITIN" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#form-w7-exceptions", className: "hover:text-gold-600 underline", children: "3. Understanding Form W-7 Exception 1a & 1b Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#application-process", className: "hover:text-gold-600 underline", children: "4. Step-by-Step Form W-7 Application Process" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#caa-benefits", className: "hover:text-gold-600 underline", children: "5. Benefits of Using an IRS Certifying Acceptance Agent (CAA)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-itin", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What Is an IRS ITIN Number?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "An ",
          /* @__PURE__ */ jsx("strong", { children: "Individual Taxpayer Identification Number (ITIN)" }),
          " is a 9-digit tax processing number issued by the IRS to individuals who are required to have a US taxpayer identification number but who do not have, and are not eligible to obtain, a Social Security Number (SSN)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "why-founders-need-itin", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Why Foreign Non-Resident Founders Need an ITIN" }),
        /* @__PURE__ */ jsx("p", { children: "While your LLC uses an EIN for business operations, a personal ITIN unlocks critical financial capabilities:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-gold-500 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(CreditCard, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "US Credit Cards & Credit Score" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Allows non-residents to apply for US credit cards (Amex, Chase) and build personal FICO credit history remotely." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-navy-700 font-semibold text-base mb-2", children: [
              /* @__PURE__ */ jsx(UserCheck, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "PayPal & Payment Gateway Verification" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Satisfies SSN/ITIN identity verification prompts on PayPal US, Stripe, and Amazon Seller Central accounts." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "IRS ITIN APPLICATION SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Apply for Your IRS ITIN Fast with ADVAQ CAA Service" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ prepares Form W-7, verifies foreign passports via CAA process, and manages IRS submission without mailing original passports." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/us-services/itin-application", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore ITIN Application Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "form-w7-exceptions", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Understanding Form W-7 Exception 1a & 1b Rules" }),
        /* @__PURE__ */ jsx("p", { children: "Normally, Form W-7 must be attached to an annual federal tax return (Form 1040-NR)." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "However, foreign founders can apply ",
          /* @__PURE__ */ jsx("strong", { children: "year-round" }),
          " without filing a tax return by qualifying under IRS ",
          /* @__PURE__ */ jsx("strong", { children: "Exception 1(a) (Partnership Interest)" }),
          " or ",
          /* @__PURE__ */ jsx("strong", { children: "Exception 1(b) (Withholding on Income)" }),
          " by providing proof of LLC ownership and bank account withholding documentation."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "application-process", className: "space-y-4 mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Step-by-Step Form W-7 Application Process" }),
        /* @__PURE__ */ jsxs("ol", { className: "list-none space-y-2 text-sm text-gray-700 ml-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Complete Form W-7 with applicant personal details and exception selection." }),
          /* @__PURE__ */ jsx("li", { children: "Obtain certified passport verification from an IRS Certifying Acceptance Agent (CAA)." }),
          /* @__PURE__ */ jsx("li", { children: "Submit W-7 packet to IRS ITIN Operation unit in Austin, Texas." }),
          /* @__PURE__ */ jsx("li", { children: "Receive IRS Notice CP565 with your official 9-digit ITIN number in 7–11 weeks." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "IRS ITIN APPLICATION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Obtain Your Personal IRS ITIN with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Form W-7 filing, CAA passport certification without mailing originals, Exception 1a/1b documentation, and CP565 letter delivery." }),
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
