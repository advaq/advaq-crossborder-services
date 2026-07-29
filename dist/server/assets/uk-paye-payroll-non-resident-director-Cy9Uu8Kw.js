import { jsxs, jsx } from "react/jsx-runtime";
import { n as faqs } from "./router-CGinzTRd.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Briefcase, Coins, ArrowRight, Users, FileCheck, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "UK PAYE Payroll Guide for Non-Resident Directors & Remote Staff" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive HMRC compliance masterclass for foreign directors on PAYE scheme registration, tax-free Personal Allowance limits, Real Time Information (RTI) reporting, and hiring remote global staff in 2026." }),
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
            /* @__PURE__ */ jsx("span", { children: "HMRC RTI & PAYE Official Compliance Guide" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "PAYE Payroll Summary at a Glance" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4", children: "Key payroll and tax deduction rules for foreign-owned UK companies:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Tax-Deductible Salary Expense" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Paying a director salary reduces your UK Limited Company's net profit, directly lowering your Corporation Tax bill." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Optimal Salary Threshold (£12,570)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Setting a director salary up to the Personal Allowance threshold (£12,570/yr) incurs 0% UK Income Tax." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Real Time Information (RTI)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "HMRC mandates digital Full Payment Submission (FPS) filings on or before every payday." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Remote Overseas Workers" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Overseas staff physically performing duties abroad do not trigger UK PAYE Income Tax or National Insurance." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-paye", className: "hover:text-gold-600 underline", children: "1. What is HMRC Pay As You Earn (PAYE)?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#salary-tax-efficiency", className: "hover:text-gold-600 underline", children: "2. Optimal Tax-Efficient Director Salary Rules (£12,570)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#rti-reporting", className: "hover:text-gold-600 underline", children: "3. Real Time Information (RTI) & FPS Submissions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#payroll-matrix", className: "hover:text-gold-600 underline", children: "4. PAYE & Remote Staff Compliance Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#remote-staff-rules", className: "hover:text-gold-600 underline", children: "5. Hiring Remote International Workers (Non-UK Residents)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#common-mistakes", className: "hover:text-gold-600 underline", children: "6. 6 Critical Common Payroll Mistakes to Avoid" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#national-insurance", className: "hover:text-gold-600 underline", children: "7. National Insurance Contributions (NIC) Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-paye", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. What is HMRC Pay As You Earn (PAYE)?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Pay As You Earn (PAYE)" }),
          " is HM Revenue & Customs' statutory system to collect Income Tax and National Insurance Contributions (NIC) directly from employee wages and director salaries."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "When a UK Limited Company registers a PAYE scheme, HMRC issues an official ",
          /* @__PURE__ */ jsx("strong", { children: "Employer Accounts Reference Number" }),
          " and ",
          /* @__PURE__ */ jsx("strong", { children: "PAYE Reference Code" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "text-gold-600", size: 18 }),
            "Real-World Founder Scenario: Tax-Deductible Salary Savings"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 leading-relaxed", children: "Consider Asad, a software house owner in Pakistan operating a UK LTD. By registering an HMRC PAYE scheme through ADVAQ and drawing a £12,570 annual director salary, Asad reduces his company's taxable profit by £12,570—saving £2,388 (19%) in Corporation Tax while incurring 0% UK Personal Income Tax." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "salary-tax-efficiency", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Optimal Tax-Efficient Director Salary Rules (£12,570)" }),
        /* @__PURE__ */ jsx("p", { children: "For foreign directors, combining a small director salary with dividend distributions provides the most tax-efficient corporate structure in the UK:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Coins, { className: "text-gold-600", size: 20 }),
            "The £12,570 Tax Optimization Strategy:"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs text-gray-700", children: [
            /* @__PURE__ */ jsxs("p", { className: "leading-relaxed", children: [
              "1. ",
              /* @__PURE__ */ jsx("strong", { children: "Director Salary (£12,570/yr):" }),
              " Counts as a 100% tax-deductible allowable expense for Corporation Tax, reducing company taxable profit by £12,570."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "leading-relaxed", children: [
              "2. ",
              /* @__PURE__ */ jsx("strong", { children: "0% Income Tax:" }),
              " Exactly matches the UK Personal Allowance (£12,570), resulting in zero personal Income Tax due to HMRC."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "leading-relaxed", children: [
              "3. ",
              /* @__PURE__ */ jsx("strong", { children: "Remaining Profits as Dividends:" }),
              " Extracted at 0% UK Dividend Withholding Tax for non-residents."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "rti-reporting", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Real Time Information (RTI) & FPS Submissions" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "HMRC enforces ",
          /* @__PURE__ */ jsx("strong", { children: "Real Time Information (RTI)" }),
          " reporting. Employers must submit an electronic ",
          /* @__PURE__ */ jsx("strong", { children: "Full Payment Submission (FPS)" }),
          " to HMRC on or before every single payday."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If no salaries are paid in a given month, an ",
          /* @__PURE__ */ jsx("strong", { children: "Employer Payment Summary (EPS)" }),
          " must be submitted by the 19th of the following month to inform HMRC of zero activity."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "payroll-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. PAYE & Remote Staff Compliance Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Side-by-side comparison of payroll rules across worker classifications:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Worker Classification" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "PAYE Scheme Required?" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "UK Personal Allowance" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "UK Income Tax Rate" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "National Insurance (NIC)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Non-Resident Director (Salary)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Yes (To Claim Corp Tax Expense)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "£12,570 / Year" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% (Up to £12,570)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Exempt (If Work Overseas)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Overseas Independent Contractor" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "No (Invoices Company)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "N/A" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% UK Tax (Local Country Tax)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Exempt" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Overseas Direct Remote Employee" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Optional (Code NT)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "N/A" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "0% UK Tax (Code NT Applied)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Exempt" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "HMRC PAYE PAYROLL SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "HMRC PAYE Registration & Monthly Payroll Service" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ registers your HMRC PAYE employer scheme, issues digital director payslips, and handles monthly RTI Full Payment Submissions (FPS)." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uk-services/paye-payroll-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore PAYE Payroll Services ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "remote-staff-rules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Hiring Remote International Workers (Non-UK Residents)" }),
        /* @__PURE__ */ jsx("p", { children: "Many UK LTD companies operate remote software engineering or marketing teams in Pakistan, India, the UAE, or Eastern Europe:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Users, { className: "text-gold-600", size: 18 }),
              "Independent Overseas Contractors"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Remote freelancers operating abroad are engaged via Contractor Agreements. They invoice your UK company directly and handle local taxes in their home country. No UK PAYE applies." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileCheck, { className: "text-gold-600", size: 18 }),
              "Direct Overseas Remote Employees"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "If hired on UK payroll but working 100% overseas, code `NT` (No Tax) can be requested from HMRC so zero UK Income Tax is withheld." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "common-mistakes", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 6 Critical Common Payroll Mistakes to Avoid" }),
        /* @__PURE__ */ jsx("p", { children: "Avoid these six frequent payroll compliance errors:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "1. Drawing Regular Salary Without a PAYE Scheme"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Transferring regular monthly salary payments without an active HMRC PAYE scheme creates un-reconciled director loan accounts." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-red-200 bg-red-50/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-red-900 text-sm flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-600", size: 18 }),
              "2. Missing Monthly RTI FPS Submissions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 leading-relaxed", children: "Failing to submit digital FPS reports on or before payday triggers automated £100/month HMRC penalties." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "national-insurance", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. National Insurance Contributions (NIC) Rules" }),
        /* @__PURE__ */ jsx("p", { children: "UK National Insurance Contributions (NIC) fund UK state benefits and healthcare." }),
        /* @__PURE__ */ jsx("p", { children: "Non-resident directors and employees who perform zero physical work within the United Kingdom are generally exempt from UK Class 1 Employers and Employees NIC under bilateral social security agreements." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "HMRC PAYE PAYROLL SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Register Your UK PAYE Scheme with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "HMRC employer registration, monthly payslip generation, and automated RTI Full Payment Submissions." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uk-services/paye-payroll-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order UK PAYE Payroll Registration" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
