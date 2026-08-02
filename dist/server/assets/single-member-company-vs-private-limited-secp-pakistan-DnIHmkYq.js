import { jsxs, jsx } from "react/jsx-runtime";
import { H as faqs } from "./router-COelCWah.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, ArrowRight, Check, AlertTriangle, Scale, Coins, FileText, HelpCircle, ChevronDown } from "lucide-react";
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
          /* @__PURE__ */ jsx("span", { children: "Pakistan Corporate Setup" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium", children: "Single Member Company (SMC-Pvt Ltd) vs Private Limited in Pakistan (SECP Guide)" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "An exhaustive legal, tax, and corporate governance blueprint for Pakistani entrepreneurs, IT agency owners, SaaS founders, and solo consultants comparing an SMC-Pvt Ltd and a multi-member Private Limited entity under the Companies Act 2017." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "ADVAQ Pakistan Corporate Legal Team" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "12 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "SECP Companies Act 2017 & FBR Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Comparison Summary" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "Single Member Company (SMC-Pvt Ltd)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "1 Shareholder & 1 Director. Tailored for solo tech founders, freelancers, and single business owners wanting full corporate limited liability while retaining 100% operational control. Requires nominating a non-shareholder Nominee Director for inheritance succession." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "Private Limited Company (Multi-Member)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "2 to 50 Shareholders & 2+ Directors. Essential for co-founded startups, equity funding rounds, angel/VC investment, commercial joint ventures, and businesses requiring shared board oversight under SECP regulations." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#statutory-framework", className: "hover:text-gold-600 underline", children: "1. Statutory Framework under Companies Act 2017" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-matrix", className: "hover:text-gold-600 underline", children: "2. Comprehensive SECP Comparison Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#nominee-director-mandate", className: "hover:text-gold-600 underline", children: "3. The Nominee Director Mandate & Succession Rules" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#conversion-procedure", className: "hover:text-gold-600 underline", children: "4. Step-by-Step Conversion: SMC to Multi-Member" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#sample-resolution", className: "hover:text-gold-600 underline", children: "5. Sample SECP Conversion Board Resolution Wording" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#tax-compliance", className: "hover:text-gold-600 underline", children: "6. FBR Taxation & PSEB IT Export Benefits" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#secp-annual-filings", className: "hover:text-gold-600 underline", children: "7. SECP Annual Filings & Statutory Audits" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "statutory-framework", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Statutory Framework under Companies Act 2017" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Historically in Pakistan, incorporating a legal corporate entity required a minimum of two directors and two shareholders under the repealed Companies Ordinance 1984. Solo entrepreneurs, IT agency owners, and independent consultants were forced to either form an unregistered ",
          /* @__PURE__ */ jsx("strong", { children: "Sole Proprietorship" }),
          " (exposing personal assets to unlimited financial liability) or add a dummy second shareholder (such as a spouse or family member) merely to meet regulatory thresholds."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To modernize Pakistan's corporate ecosystem, the ",
          /* @__PURE__ */ jsx("strong", { children: "Securities and Exchange Commission of Pakistan (SECP)" }),
          " introduced the concept of the ",
          /* @__PURE__ */ jsx("strong", { children: "Single Member Company (SMC-Private Limited)" }),
          ". Enacted under Section 14 of the ",
          /* @__PURE__ */ jsx("strong", { children: "Companies Act 2017" }),
          " and regulated by the ",
          /* @__PURE__ */ jsx("em", { children: "Single Member Companies Rules 2018" }),
          ", an SMC-Pvt Ltd allows a single individual to create a legal entity that enjoys complete corporate status, a perpetual succession identity, a official corporate seal, and a distinct National Tax Number (NTN)."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Corporate Veil Protection:" }),
          /* @__PURE__ */ jsxs("p", { className: "text-navy-900 text-sm", children: [
            "The primary legal advantage of an SMC-Pvt Ltd over a Sole Proprietorship is the ",
            /* @__PURE__ */ jsx("strong", { children: "Corporate Veil" }),
            ". Under Pakistani corporate law, the company is a separate artificial legal person. If the business encounters commercial debt, breach of contract claims, or legal disputes, liability is strictly limited to the assets owned by the company. The personal house, personal bank accounts, and private assets of the sole shareholder remain 100% legally insulated."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Comprehensive SECP Structure Comparison Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "While both an SMC-Pvt Ltd and a standard multi-member Private Limited company hold identical corporate privileges under SECP and FBR regulations, key structural differences dictate which entity fits your business model:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Governance & Statutory Metric" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Single Member Company (SMC-Pvt Ltd)" }),
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Private Limited Company (Multi-Member)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Number of Shareholders" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Exactly 1 individual shareholder (100% equity)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Minimum 2 shareholders; Maximum 50 members." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white bg-gold-50/30", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Number of Directors" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Exactly 1 Director (the sole shareholder)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Minimum 2 Directors." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Nominee Director Mandate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-red-700", children: "Mandatory statutory requirement under Sec 14." }),
              /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-500", children: "Not applicable (automatic board succession)." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Minimum Paid-Up Capital" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "No minimum statutory requirement (Default: PKR 100k)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "No minimum statutory requirement (Default: PKR 100k)." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Equity Dilution & VC Investment" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-amber-700", children: "Requires formal SECP conversion to add investors." }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-semibold text-emerald-700", children: "Seamless share issuance & shareholder agreements." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "FBR Corporate Tax Rate" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Standard 29% (or 0.25% Final Tax for PSEB IT Exporters)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Standard 29% (or 0.25% Final Tax for PSEB IT Exporters)." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "SECP Annual Compliance" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Form A (Annual Return) & Form 29 (Directorship)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Form A (Annual Return) & Form 29 (Directorship)." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Suffix Requirement" }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-mono font-bold text-navy-900", children: 'Must include "(SMC-Private) Limited"' }),
              /* @__PURE__ */ jsx("td", { className: "p-4 font-mono font-bold text-navy-900", children: 'Must include "(Private) Limited"' })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "SECP INCORPORATION & CORPORATE ADVISORY" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Register Your SECP Entity with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ handles name reservation, eServices incorporation filing, digital signatures, corporate NTN issuance, and SECP compliance for SMC-Pvt Ltd and Private Limited entities." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order SECP Company Registration ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "nominee-director-mandate", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. The Nominee Director Mandate & Succession Rules" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "One of the most unique statutory requirements when registering an SMC-Pvt Ltd in Pakistan is the mandatory appointment of a ",
          /* @__PURE__ */ jsx("strong", { children: "Nominee Director" }),
          ". Under Rule 4 of the ",
          /* @__PURE__ */ jsx("em", { children: "Single Member Companies Rules 2018" }),
          ", SECP enforces a legal mechanism to prevent the company from becoming orphaned or entering legal paralysis if the sole shareholder passes away or becomes permanently incapacitated."
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Legal Status & Rights of a Nominee Director:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Zero Lifetime Rights:" }),
              " During the lifetime of the primary shareholder, the Nominee Director possesses zero shares, zero voting rights, zero dividend entitlements, and zero operational control over corporate bank accounts or SECP filings."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Statutory Succession Trigger:" }),
              " In the unfortunate event of the sole shareholder's demise, the Nominee Director instantly assumes legal guardianship of the company's management for a statutory period (typically up to 180 days) to facilitate the transfer of shares to legal heirs under a Court Succession Certificate."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Eligible Nominees:" }),
              " The primary founder can nominate any adult relative (father, mother, spouse, brother, sister, or adult child) or trusted individual possessing a valid CNIC / NICOP."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-900 font-semibold text-sm mb-1", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Alternate Nominee Provision:" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-amber-900 text-xs leading-relaxed", children: [
            "SECP Form 24 also allows appointing an ",
            /* @__PURE__ */ jsx("em", { children: "Alternate Nominee Director" }),
            " who assumes responsibility if the primary Nominee Director predeceases or becomes unable to act upon the founder's death."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "conversion-procedure", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Step-by-Step Conversion: SMC to Multi-Member Company" }),
        /* @__PURE__ */ jsx("p", { children: "A common concern for Pakistani tech founders incorporating an SMC-Pvt Ltd is whether they will be locked into a single-owner structure when pitching to venture capital firms, angel investors, or taking on co-founders." }),
        /* @__PURE__ */ jsx("p", { children: "Under Section 46 of the Companies Act 2017, converting an SMC-Pvt Ltd into a standard multi-member Private Limited company is a straightforward regulatory filing with SECP eServices:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm", children: "Step 1: Pass a Special Resolution" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "The sole director passes a Special Resolution approving the allotment/transfer of shares and the adoption of revised Articles of Association." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "bg-navy-950 text-gold-500 text-xs px-3 py-1.5 rounded-md font-mono shrink-0", children: "Internal Corporate Record" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm", children: "Step 2: File SECP Form 7 & Form 7A" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Submit Form 7 (Notice of Increase in Members/Capital) or Form 7A (Share Transfer Deed) via SECP eServices to register the new incoming shareholder(s)." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "bg-navy-950 text-gold-500 text-xs px-3 py-1.5 rounded-md font-mono shrink-0", children: "SECP eServices Portal" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm", children: "Step 3: Appoint Second Director (Form 29)" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "File SECP Form 29 within 15 days notifying the commission of the appointment of the new second director on the board." })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "bg-navy-950 text-gold-500 text-xs px-3 py-1.5 rounded-md font-mono shrink-0", children: "SECP Form 29 Filing" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 border border-border rounded-xl bg-off-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold text-sm", children: "Step 4: Update Company Suffix" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: 'SECP issues an updated Certificate of Incorporation dropping the "(SMC-Private)" suffix to "(Private) Limited". Update bank records and letterheads accordingly.' })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "bg-navy-950 text-gold-500 text-xs px-3 py-1.5 rounded-md font-mono shrink-0", children: "New SECP Certificate" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "sample-resolution", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Sample SECP Conversion Board Resolution Wording" }),
        /* @__PURE__ */ jsx("p", { children: "When converting an SMC-Pvt Ltd into a multi-member entity, SECP requires submitting a formal resolution. Below is an example of standard corporate wording:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Special Resolution: Conversion of SMC-Pvt Ltd to Private Limited Entity"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: [
            '"RESOLVED THAT pursuant to Section 46 of the Companies Act 2017, the status of [Company Name] (SMC-Private) Limited be and is hereby converted from a Single Member Company to a Private Limited Company by transferring [Number of Shares] ordinary shares of PKR 10/- each to [Name of Incoming Investor/Director], holding CNIC No. [CNIC Number], who has consented to act as Director of the Company."',
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            `"FURTHER RESOLVED THAT the suffix '(SMC-Private) Limited' in the name of the Company be altered to '(Private) Limited' and that Form 7, Form 29, and altered Memorandum and Articles of Association be submitted to the Registrar of Companies, SECP."`
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "tax-compliance", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. FBR Taxation & PSEB IT Export Benefits" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "From an FBR (Federal Board of Revenue) tax perspective, both an SMC-Pvt Ltd and a multi-member Private Limited company are classified identically as ",
          /* @__PURE__ */ jsx("strong", { children: "Corporate Tax Entities" }),
          " under Section 80 of the Income Tax Ordinance 2001."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsxs("strong", { className: "block text-navy-950 font-semibold text-sm mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Coins, { size: 16, className: "text-gold-600" }),
              " Standard Corporate Tax Rates"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "Standard domestic companies are taxed at a flat rate of ",
              /* @__PURE__ */ jsx("strong", { children: "29%" }),
              " on net taxable income, alongside applicable Super Tax under Section 4C for income exceeding PKR 150 Million."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-emerald-50/50 border-emerald-200", children: [
            /* @__PURE__ */ jsxs("strong", { className: "block text-emerald-950 font-semibold text-sm mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-emerald-600" }),
              " IT Export Tax Concession (Sec 154A)"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-emerald-900 leading-relaxed", children: [
              "Pakistani software houses, SaaS companies, and IT consultancies registered as SMCs or Private Limited entities qualify for the ",
              /* @__PURE__ */ jsx("strong", { children: "0.25% Final Tax Regime" }),
              " on foreign export proceeds under Section 154A, provided they register with PSEB and retain export remittances through official SBP channels."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "secp-annual-filings", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. SECP Annual Filings & Statutory Audits" }),
        /* @__PURE__ */ jsx("p", { children: "Both SMC-Pvt Ltd and multi-member companies must maintain corporate secretarial compliance with SECP:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Form A / Form B (Annual Return):" }),
              " Must be filed within 30 days of holding the Annual General Meeting (AGM) under Section 130 of the Companies Act 2017."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Form 29 (Director & Chief Executive Changes):" }),
              " Must be filed within 15 days whenever there is a change in directorship, chief executive, or registered office address under Section 197."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Chartered Accountant Audit Threshold (Section 223):" }),
              " Small private companies and SMCs having a paid-up capital of less than PKR 1,000,000 are legally exempt from mandatory audit by a licensed Chartered Accountant, significantly reducing annual accounting compliance overhead."
            ] })
          ] })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "SECP COMPANY REGISTRATION SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Form Your SECP Company in Pakistan with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "SMC-Pvt Ltd and Private Limited incorporation, SECP eServices filing, digital signatures, corporate NTN issuance, PSEB registration, and corporate bank account assistance." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/pakistan-services/secp-registration", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order SECP Incorporation Service" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
