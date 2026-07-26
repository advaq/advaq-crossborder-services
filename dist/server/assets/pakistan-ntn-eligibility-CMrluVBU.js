import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
function PakistanNTNEligibilityPage() {
  const [applicantType, setApplicantType] = useState("salaried");
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
      docs: ["SECP Incorporation Certificate", "Memorandum & Articles of Association (MoA / AoA)", "Form A & Form 29 / Incorporation Form", "CNIC of all Directors & Chief Executive", "Company Business Bank Account Certificate", "Board Resolution appointing Principal Officer for FBR"],
      timeline: "2 - 3 Working Days",
      fee: "Rs. 8,000 (Corporate FBR NTN Registration)"
    }
  };
  const currentDetails = details[applicantType] || details.salaried;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/calculators/pakistan", className: "hover:underline", children: "Pakistan Calculators" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { children: "NTN Registration Checker" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "FBR NTN Registration & Document Checker (2026)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Check exact document requirements, processing timelines, and registration procedures for FBR NTN numbers in Pakistan." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
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
    ] }) })
  ] });
}
export {
  PakistanNTNEligibilityPage as component
};
