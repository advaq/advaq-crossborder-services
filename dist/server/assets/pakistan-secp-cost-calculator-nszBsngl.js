import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, TrendingUp, BookOpen, HelpCircle, ChevronDown, ArrowRight, Shield } from "lucide-react";
function PakistanSecpCostCalculatorPage() {
  const [companyType, setCompanyType] = useState("pvt-ltd");
  const [authorizedCapitalPKR, setAuthorizedCapitalPKR] = useState(1e5);
  const [numberOfDirectors, setNumberOfDirectors] = useState(2);
  const [includeNiftDigitalSignatures, setIncludeNiftDigitalSignatures] = useState(true);
  const [includeNTNRegistration, setIncludeNTNRegistration] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const baseNameFee = 200;
  const baseIncorporationFee = 2420;
  let capitalFee = 0;
  if (authorizedCapitalPKR > 1e5) {
    capitalFee = Math.ceil((authorizedCapitalPKR - 1e5) / 1e5) * 770;
  }
  const secpGovtFeeTotal = baseNameFee + baseIncorporationFee + capitalFee;
  const niftDigitalSigFee = includeNiftDigitalSignatures ? numberOfDirectors * 1800 : 0;
  const advaqServiceFee = companyType === "smc" ? 4e4 : 5e4;
  const ntnRegistrationFee = includeNTNRegistration ? 1e4 : 0;
  const totalSetupCostPKR = secpGovtFeeTotal + niftDigitalSigFee + advaqServiceFee + ntnRegistrationFee;
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
      name: "SECP Setup Cost Calculator",
      item: "https://advaq.com/calculators/pakistan-secp-cost-calculator"
    }]
  };
  const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SECP Private Limited vs SMC Setup Cost Calculator (2026/2027)",
    url: "https://advaq.com/calculators/pakistan-secp-cost-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    description: "Calculate SECP incorporation fees, name reservation, NIFT digital signatures, FBR company NTN registration, and legal drafting costs under Companies Act 2017.",
    publisher: {
      "@type": "Organization",
      name: "ADVAQ",
      url: "https://advaq.com"
    }
  };
  const faqs = [{
    q: "What is the difference between a Private Limited (Pvt Ltd) and Single Member Company (SMC-Pvt Ltd)?",
    a: "A Private Limited company requires at least 2 directors/shareholders, whereas a Single Member Company (SMC-Pvt Ltd) is incorporated by a single individual founder while retaining full limited liability protection under the Companies Act 2017."
  }, {
    q: "How long does SECP company incorporation take in Pakistan?",
    a: "With complete documents and active NIFT/e-Crac digital signatures, online incorporation through SECP eServices is completed within 2 to 3 working days."
  }, {
    q: "What documents are issued by SECP upon successful company formation?",
    a: "SECP issues 3 primary statutory documents: 1) Certificate of Incorporation, 2) Memorandum of Association (MOA), and 3) Articles of Association (AOA), alongside SECP Form 29 (Particulars of Directors)."
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
          /* @__PURE__ */ jsx("span", { children: "SECP Company Setup Cost" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium max-w-3xl mx-auto leading-tight", children: "SECP Private Limited & SMC Setup Cost Calculator (2026/2027)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed", children: "Calculate exact SECP government fees, NIFT digital signatures, authorized capital fees, and NTN registration for Private Limited, SMC, and Sole Proprietorship." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto px-6 -mt-10 relative z-10 mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 p-6 sm:p-8 space-y-6 bg-off-white/40", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block font-sans font-bold text-navy-950 text-xs uppercase tracking-wider mb-2", children: "1. Select Company Structure:" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              setCompanyType("pvt-ltd");
              setNumberOfDirectors(2);
            }, className: `p-3.5 rounded-xl border text-center transition-all ${companyType === "pvt-ltd" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "Private Limited" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "2+ Directors" })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
              setCompanyType("smc");
              setNumberOfDirectors(1);
            }, className: `p-3.5 rounded-xl border text-center transition-all ${companyType === "smc" ? "bg-navy-950 text-white border-gold-500 shadow-md" : "bg-white text-gray-800 border-border"}`, children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-sm", children: "SMC (Single Member)" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] opacity-80", children: "1 Director" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("label", { className: "font-sans font-bold text-navy-950 text-xs uppercase tracking-wider", children: "Authorized Share Capital (PKR):" }),
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-gold-600 font-bold text-base", children: [
              "Rs ",
              (authorizedCapitalPKR / 1e5).toLocaleString(),
              " Lacs"
            ] })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "range", min: "100000", max: "10000000", step: "100000", value: authorizedCapitalPKR, onChange: (e) => setAuthorizedCapitalPKR(Number(e.target.value)), className: "w-full accent-gold-500 cursor-pointer h-2 bg-gray-200 rounded-lg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeNiftDigitalSignatures, onChange: (e) => setIncludeNiftDigitalSignatures(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("strong", { className: "text-navy-950 block", children: [
                "NIFT Digital Signatures (",
                numberOfDirectors,
                " Directors)?"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Mandatory biometric digital signatures for SECP eServices." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 p-3.5 bg-white border border-border rounded-xl cursor-pointer hover:border-gold-500", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", checked: includeNTNRegistration, onChange: (e) => setIncludeNTNRegistration(e.target.checked), className: "accent-gold-500 w-4 h-4" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "text-navy-950 block", children: "FBR Company NTN Registration included?" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Required for opening corporate bank account in Pakistan." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-navy-950 p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-xs uppercase tracking-widest mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "SECP Setup Cost Breakdown" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs border-b border-white/10 pb-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "SECP Name Availability & Filing:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "Rs ",
                secpGovtFeeTotal.toLocaleString()
              ] })
            ] }),
            includeNiftDigitalSignatures && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "NIFT Digital Signatures (",
                numberOfDirectors,
                "x):"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "Rs ",
                niftDigitalSigFee.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Legal & Incorporation Fee:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "Rs ",
                advaqServiceFee.toLocaleString()
              ] })
            ] }),
            includeNTNRegistration && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-navy-200", children: [
              /* @__PURE__ */ jsx("span", { children: "FBR Company NTN Registration:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-white", children: [
                "Rs ",
                ntnRegistrationFee.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/40 p-5 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-500 uppercase tracking-widest font-semibold block mb-1", children: "Total Incorporation Cost" }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-serif font-bold text-white", children: [
              "Rs ",
              totalSetupCostPKR.toLocaleString(),
              " PKR"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest py-4 font-semibold text-center w-full block", children: "Incorporate SECP Company with ADVAQ" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 space-y-16 pb-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 text-white rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl border border-gold-500/20", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-navy-800 pb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gold-500/10 text-gold-400 rounded-xl border border-gold-500/20", children: /* @__PURE__ */ jsx(TrendingUp, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-gold-400 font-semibold uppercase tracking-widest block", children: "Real-Time Mathematical Audit" }),
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Live Step-by-Step SECP Incorporation Cost Audit" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 mt-1", children: "Line-by-line breakdown of SECP eServices statutory filing fees, NIFT digital signatures, and FBR NTN registration." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 1: Authorized Capital & Fees" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "SECP Fee" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Authorized Capital:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Rs ",
                  authorizedCapitalPKR.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "SECP Filing Fee:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  "Rs ",
                  secpGovtFeeTotal.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Govt Statutory Subtotal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  secpGovtFeeTotal.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 2: NIFT Digital Signatures" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "NIFT Biometrics" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Directors Count:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { className: "text-white", children: [
                  numberOfDirectors,
                  " Directors"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "NIFT Selected:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: includeNiftDigitalSignatures ? "text-emerald-400" : "text-amber-400", children: includeNiftDigitalSignatures ? "YES" : "NO" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "NIFT Fee Total:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  niftDigitalSigFee.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 3: ADVAQ Legal Services" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[10px]", children: "Legal Drafting" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "MOA & AOA Drafting:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Included" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "FBR Company NTN:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: includeNTNRegistration ? "Included" : "Excluded" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-gold-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Service Subtotal:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  (advaqServiceFee + ntnRegistrationFee).toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-navy-800 p-5 rounded-xl space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-navy-800 pb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gold-400 uppercase tracking-wider text-[11px]", children: "Step 4: All-Inclusive Total" }),
              /* @__PURE__ */ jsx("span", { className: "px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]", children: "Turnkey Cost" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5 font-mono text-navy-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Bank Account Ready:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-emerald-400", children: "Guaranteed" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx("span", { children: "Processing Window:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "3 to 5 Days" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-t border-navy-800 pt-1 text-emerald-400 font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: "Grand Total:" }),
                " ",
                /* @__PURE__ */ jsxs("strong", { children: [
                  "Rs ",
                  totalSetupCostPKR.toLocaleString(),
                  " PKR"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-slate-50 border border-border rounded-2xl p-6 sm:p-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2.5 bg-gold-500/10 text-gold-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { size: 22 }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "SECP Incorporation & Registration Fee Schedule" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs border-collapse", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-navy-950 text-white font-serif uppercase tracking-wider text-[11px]", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tl-xl", children: "Entity Type" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "SECP Filing Fee" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5", children: "Min Directors" }),
            /* @__PURE__ */ jsx("th", { className: "p-3.5 rounded-tr-xl", children: "Processing Timeline" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-800", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Private Limited (Pvt Ltd)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "Rs 2,620 + Rs 770/100k Slabs" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "2 Directors" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono text-emerald-600 font-bold", children: "2 to 3 Working Days" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "Single Member Company (SMC)" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-mono", children: "Rs 2,620 + Rs 770/100k Slabs" }),
              /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-navy-950", children: "1 Director" }),
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
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-navy-950", children: "Frequently Asked Questions (SECP Company Formation)" })
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
        /* @__PURE__ */ jsx("div", { className: "border-b border-border pb-4", children: /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl font-bold text-navy-950", children: "Explore Related SECP & Corporate Tools" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "SECP Penalty Risk" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "SECP Form A & Form 9 Late Penalty Estimator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate Form A, Form 9, Form 4, and annual return late fees & compounding penalties." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-secp-penalty-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "NTN Eligibility" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "FBR NTN Registration Eligibility Checker" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Check required documents, timeline & process for Salaried, Business & SECP Companies." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-ntn-eligibility-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
              "Launch Calculator ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-wider font-semibold text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded", children: "IT Export Tax" }),
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-semibold text-navy-950 mt-3 mb-2 group-hover:text-gold-600 transition-colors", children: "Pakistan IT Exporter 100% Tax Credit Tool" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-6", children: "Calculate Section 154A 0.25% WHT, PSEB registration savings, and SBP FCVA USD retention." })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/calculators/pakistan-it-export-calculator", className: "btn-gold !py-2.5 !px-4 text-xs font-semibold w-full inline-flex items-center justify-center gap-2 uppercase tracking-wider", children: [
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
            " ADVAQ Registered SECP High-Court Corporate Advocates"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl sm:text-4xl text-white font-bold", children: "Incorporate Your SECP Private Limited Company" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto", children: "Our Pakistan corporate legal team drafts Memorandum & Articles of Association, obtains SECP name approvals, issues NIFT digital signatures, and opens corporate bank accounts in 2–3 working days." }),
          /* @__PURE__ */ jsx("div", { className: "pt-2 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold uppercase text-xs tracking-widest px-8 py-4 font-semibold inline-flex items-center gap-2", children: [
            "Register SECP Company ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  PakistanSecpCostCalculatorPage as component
};
