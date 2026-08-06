import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, ArrowRight, Shield } from "lucide-react";
function PakistanNTNEligibilityPage() {
  const [applicantType, setApplicantType] = useState("salaried");
  const [openFaq, setOpenFaq] = useState(0);
  const details = {
    salaried: {
      docs: ["CNIC (Color Copy)", "Active Mobile Number registered on applicant's CNIC", "Personal Email Address", "Paid Utility Bill (electricity or gas bill of residence)", "Salary Slip / Employment Certificate"],
      timeline: "Instant / Same Day (24 Hours)",
      fee: "Rs. 2,500 (ADVAQ Professional Assistance)"
    },
    business: {
      docs: ["CNIC (Color Copy)", "Active Mobile Number registered on applicant's CNIC", "Business Letterhead & Rubber Stamp", "Paid Commercial Utility Bill of business premises", "Business Bank Account Maintenance Certificate (IBAN)", "Rent Agreement / Ownership Document of Business Office"],
      timeline: "1 - 2 Working Days",
      fee: "Rs. 5,000 (Business NTN & Premises Addition)"
    },
    company: {
      docs: ["SECP Incorporation Certificate", "Memorandum & Articles of Association (MoA / AoA)", "Form A & Form 9 / Incorporation Form", "CNIC of all Directors & Chief Executive", "Company Business Bank Account Certificate", "Board Resolution appointing Principal Officer for FBR"],
      timeline: "2 - 3 Working Days",
      fee: "Rs. 10,000 (Corporate FBR NTN Registration)"
    }
  };
  const currentDetails = details[applicantType] || details.salaried;
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://advaq.com"
    }, {
      "@type": "ListItem",
      position: 2,
      name: "Calculators",
      item: "https://advaq.com/calculators"
    }, {
      "@type": "ListItem",
      position: 3,
      name: "Pakistan Calculators",
      item: "https://advaq.com/calculators/pakistan"
    }, {
      "@type": "ListItem",
      position: 4,
      name: "NTN Registration Eligibility Checker",
      item: "https://advaq.com/calculators/pakistan-ntn-eligibility-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "NTN Registration Eligibility & Document Checker (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-ntn-eligibility-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Verify required documents, processing timelines, and eligibility criteria for FBR National Tax Number (NTN) registration under Section 181 of Income Tax Ordinance 2001.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is an FBR National Tax Number (NTN) in Pakistan?",
    a: "An NTN (National Tax Number) is a unique identification number issued by the Federal Board of Revenue (FBR). For individual Pakistani citizens, the NTN is automatically mapped to their 13-digit CNIC number upon registration."
  }, {
    q: "Why is a Business NTN required for opening a business bank account?",
    a: "Commercial banks in Pakistan require an FBR Business NTN Order / Form 181 certificate to open business current accounts for Sole Proprietorships, Partnerships (AOPs), and SECP Private Limited companies."
  }, {
    q: "Does obtaining an NTN automatically make me a Filer?",
    a: "NO! Simply registering an NTN does NOT make you an Active Taxpayer (Filer). You become an Active Taxpayer on the FBR Active Taxpayer List (ATL) only AFTER filing your annual income tax return."
  }];
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white text-navy-950", children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdBreadcrumb)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdWebApp)
    } }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLdFaq)
    } }),
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "NTN Registration Checker" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FBR NTN Registration & Document Checker (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check exact document requirements, processing timelines, and registration procedures for FBR NTN numbers in Pakistan." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Applicant Structure:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setApplicantType("salaried"), className: `p-3 rounded-xl border text-left font-semibold ${applicantType === "salaried" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Salaried Person" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setApplicantType("business"), className: `p-3 rounded-xl border text-left font-semibold ${applicantType === "business" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "Sole Proprietor" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setApplicantType("company"), className: `p-3 rounded-xl border text-left font-semibold ${applicantType === "company" ? "bg-navy-950 text-white border-gold-500" : "bg-white text-gray-800"}`, children: "SECP Company" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-3", children: "Required Documents Checklist:" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2 text-xs", children: currentDetails.docs.map((doc, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 p-3 bg-white border border-border rounded-xl", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-emerald-600 shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-navy-950 font-medium", children: doc })
          ] }, idx)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "NTN Processing Summary" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Processing Timeline:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-emerald-400 font-bold", children: currentDetails.timeline })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "Professional Filing Fee:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-gold-400 font-bold", children: currentDetails.fee })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "ADVAQ Guaranteed NTN Filing" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 leading-relaxed", children: "Our tax lawyers will handle your complete Iris FBR registration, biometric verification setup, and active taxpayer status." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/ntn-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Apply for FBR NTN with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step NTN & Iris Registration Audit" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 mt-1", children: [
              "Line-by-line breakdown of FBR NTN registration steps for ",
              applicantType.toUpperCase(),
              " applicants."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Entity Classification" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Entity Type" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Applicant Category:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white uppercase", children: applicantType })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FBR Tax Office:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "RTO Jurisdiction" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Mandatory NTN:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Required" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: Document Verification" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "IRIS Portal" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "CNIC & Mobile OTP:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Verified" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Electricity Bill / Rent:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Proof of Address" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Docs Checklist:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  currentDetails.docs.length,
                  " Documents Ready"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: FBR Biometrics" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "NADRA Biometrics" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "NADRA E-Sahulat:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-gold-400", children: "Biometric Verification" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Iris Password & PIN:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Generated" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "FBR Iris Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Active" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: Turnkey NTN Issuance" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "NTN Certificate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Processing Timeline:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: currentDetails.timeline })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Filing Service Fee:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: currentDetails.fee })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "NTN Order Status:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Ready in 24 Hours" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "FBR NTN Category Document & Timeline Matrix" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "NTN Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "FBR Iris Form" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Key Document Required" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Turnaround Time" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Salaried Individual" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Form 181 (Salaried)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "CNIC + Salary Slip + Utility Bill" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "Same Day (24 Hours)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Business / Sole Proprietorship" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Form 181 (Business)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "Letterhead + Commercial Lease + IBAN" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "1 to 2 Working Days" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "SECP Company NTN" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-gray-600", children: "Form 181 (Corporate)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 text-gray-600", children: "SECP Certificate + MOA/AOA + Board Res." }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "2 to 3 Working Days" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto space-y-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-gold-600 font-semibold inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(HelpCircle, { size: 15 }),
            " Knowledge Base"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (FBR NTN Registration)" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-4xl mx-auto pt-4", children: faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-xl overflow-hidden transition-all shadow-sm", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setOpenFaq(isOpen ? null : index), className: "w-full p-5 text-left font-serif text-sm sm:text-base font-semibold text-navy-950 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors", children: [
              /* @__PURE__ */ jsx("span", { children: faq.q }),
              /* @__PURE__ */ jsx(ChevronDown, { size: 18, className: `text-gold-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })
            ] }),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 bg-slate-50/50", children: faq.a })
          ] }, index);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "border-b border-border pb-4", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Explore Related FBR Compliance Tools" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Filer Verification" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR Filer or Non-Filer Status Checker" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Step-by-step guide & SMS 9966 checker to verify FBR Active Taxpayer List (ATL) status." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-filer-status-checker-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Checker ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "Salary Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR Salary & Business Tax Calculator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate progressive monthly and annual income tax slabs for salaried employees." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-fbr-salary-tax-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "SECP Setup" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "SECP Private Limited Company Setup Cost" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate SECP company incorporation fees, NIFT digital signatures, and NTN registration." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-secp-cost-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-500/30 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 diagonal-pattern opacity-40" }),
        /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto space-y-6", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 16 }),
            " ADVAQ Registered Advocates & FBR Tax Consultants"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Obtain Your FBR NTN & Business Registration" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our Pakistan tax legal team registers your personal and business NTN on FBR Iris, adds business bank account details, and activates ATL Filer status." }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/ntn-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
            "Apply for FBR NTN ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  PakistanNTNEligibilityPage as component
};
