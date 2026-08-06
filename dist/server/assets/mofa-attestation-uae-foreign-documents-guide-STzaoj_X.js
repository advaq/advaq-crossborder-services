import { jsxs, jsx } from "react/jsx-runtime";
import { a3 as faqs } from "./router-BTtHwbwK.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Award, Globe2, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "UAE Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "MOFA Document Attestation Guide in UAE: How to Legalize Foreign Certificates" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A practical step-by-step legalization masterclass for expatriates and business owners on authenticating foreign educational degrees, marriage certificates, birth records, and commercial documents for UAE residency and company incorporation." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ UAE Legalization Advisory Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "15 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "UAE MOFAIC Foreign Ministry Protocol Review" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "3-Step Legal Attestation Chain Essentials" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Step 1: Home Country Notary & MOFA" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Notary Public certification and Ministry of Foreign Affairs (MOFA / State Dept) attestation in your home nation." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Step 2: UAE Embassy Legalization" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Official consular legalization stamp by the UAE Embassy located in your country of origin." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Step 3: UAE MOFAIC Final Stamp" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Final attestation stamp by the Ministry of Foreign Affairs and International Cooperation inside Dubai or Abu Dhabi." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 font-serif text-sm mb-1", children: "Legal Arabic Translation" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Sworn translation into Arabic certified by a UAE Ministry of Justice licensed legal translator." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-mofa", className: "hover:text-gold-600 underline", children: "1. Why Is Document Attestation Required in the UAE?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#attestation-chain", className: "hover:text-gold-600 underline", children: "2. The 3-Step International Legalization Chain Explained" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#attestation-matrix", className: "hover:text-gold-600 underline", children: "3. Comprehensive Attestation Categories Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#educational-degrees", className: "hover:text-gold-600 underline", children: "4. Educational Degree Attestation for Executive & Golden Visas" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#family-certificates", className: "hover:text-gold-600 underline", children: "5. Personal Family Certificates (Marriage & Birth Attestation)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#arabic-translation", className: "hover:text-gold-600 underline", children: "6. Ministry of Justice Certified Legal Arabic Translation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "7. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-mofa", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Why Is Document Attestation Required in the UAE?" }),
        /* @__PURE__ */ jsx("p", { children: "Under UAE federal law, government bodies—including the General Directorate of Residency and Foreigners Affairs (GDRFA), Dubai Economy and Tourism (DET), Ministry of Human Resources and Emiratisation (MoHRE), and Freezone Authorities—cannot accept foreign public documents unless they are legally authenticated." }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "MOFA Attestation" }),
          " verifies that the signatures, seals, and issuing institutions of foreign certificates are authentic, ensuring seamless legal recognition for visa processing, university equivalency, and commercial entity establishment."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "attestation-chain", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. The 3-Step International Legalization Chain Explained" }),
        /* @__PURE__ */ jsx("p", { children: "Because the UAE is not a signatory to the Hague Apostille Convention for all document categories, a mandatory 3-step legal chain must be executed:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Award, { className: "text-gold-600", size: 18 }),
              "Step 1: Home Country Notary & Foreign Ministry"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "The document is notarized by a certified Notary Public and authenticated by the Ministry of Foreign Affairs (MOFA / State Dept / FCO) in your country of origin." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Globe2, { className: "text-gold-600", size: 18 }),
              "Step 2: UAE Embassy Consular Legalization"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "The authenticated document is presented to the official UAE Embassy or Consulate in your home capital for consular verification." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-2xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-base mb-1 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "text-gold-600", size: 18 }),
              "Step 3: UAE MOFAIC Final Attestation"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Upon arrival in the UAE, the document receives its final digital or physical attestation stamp from the Ministry of Foreign Affairs and International Cooperation (MOFAIC)." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "GLOBAL MOFA ATTESTATION SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Attest Your Foreign Certificates with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ handles door-to-door document pick-up, home country embassy attestation, UAE MOFA stamping, and Ministry of Justice legal Arabic translation." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/uae-services/visa-application-support", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Document Attestation Service ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "attestation-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Comprehensive Attestation Categories Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Detailed comparative matrix of document legalization categories:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Document Category" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Mandatory Legal Steps" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-emerald-400", children: "Primary Usage Purpose" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Turnaround Time" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Legal Arabic Translation" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white font-semibold bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Educational Degrees (Bachelor/Master)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "University Verification + Home MOFA + UAE Embassy + UAE MOFA" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Executive Visa / Golden Visa" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "7 to 14 Business Days" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Mandatory if non-Arabic" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Personal Certificates (Marriage/Birth)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Home Registrar + Home MOFA + UAE Embassy + UAE MOFA" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Family Visa Sponsorship" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "5 to 10 Business Days" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Mandatory for GDRFA" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Commercial Corporate Papers (POA / MOA)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "Commercial Notary + Chamber of Commerce + UAE Embassy + UAE MOFA" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Branch Formation / Bank Account" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-navy-900", children: "10 to 18 Business Days" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-emerald-700 font-bold", children: "Mandatory for Courts/DET" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "educational-degrees", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Educational Degree Attestation for Executive & Golden Visas" }),
        /* @__PURE__ */ jsx("p", { children: "Attested bachelor's and master's degrees are required for MoHRE Skill Level 1 employment titles (General Manager, CTO, Specialist Engineer, Legal Advisor)." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Furthermore, applying for the ",
          /* @__PURE__ */ jsx("strong", { children: "10-Year Specialized Talent Golden Visa" }),
          " under the Skilled Employee pathway requires submitting a MOFA-attested bachelor's degree alongside proof of a minimum monthly salary of AED 30,000."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "family-certificates", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Personal Family Certificates (Marriage & Birth Attestation)" }),
        /* @__PURE__ */ jsx("p", { children: "When sponsoring a spouse or children under a 2-year UAE Investor Visa or Golden Visa, GDRFA immigration requires submitting a fully MOFA-attested marriage certificate and children's birth certificates." }),
        /* @__PURE__ */ jsx("p", { children: "Attestation validates the legal family relationship and prevents delays in Emirates ID issuance for dependents." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "arabic-translation", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. Ministry of Justice Certified Legal Arabic Translation" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Once foreign certificates receive their final MOFAIC stamp, non-Arabic documents must undergo ",
          /* @__PURE__ */ jsx("strong", { children: "legal Arabic translation" }),
          " by a sworn translator licensed by the UAE Ministry of Justice."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Legal translations carry an official Ministry of Justice stamp recognized by courts, notary public offices, and government departments." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "MOFA ATTESTATION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Legalize Your Certificates for the UAE" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Home country notary, UAE Embassy attestation, UAE MOFAIC stamping, and Ministry of Justice legal Arabic translation handled by ADVAQ." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/uae-services/visa-application-support", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order MOFA Attestation Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
