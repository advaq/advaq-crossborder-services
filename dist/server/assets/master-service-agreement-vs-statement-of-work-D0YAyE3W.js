import { jsxs, jsx } from "react/jsx-runtime";
import { a4 as faqs } from "./router-GP5y7m1q.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, FileCode, Briefcase, ArrowRight, Scale, AlertTriangle, Check, HelpCircle, ChevronDown } from "lucide-react";
import "sonner";
function ArticlePage() {
  const [openFaq, setOpenFaq] = useState(null);
  return /* @__PURE__ */ jsxs("article", { className: "min-h-screen bg-white text-gray-800", children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:underline", children: "Blog" }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting", className: "hover:underline", children: "Legal Contract Drafting" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Master Service Agreement (MSA) vs Statement of Work (SOW): The Definitive Agency Legal Guide" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,200+ word contract drafting masterclass for digital agencies, IT consultancies, software houses, and SaaS vendors on structuring two-tier commercial contracts, managing legal risk, and enforcing order of precedence." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "Advocate Muhammad Abdullah (Lead Counsel)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "12 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "US, UK, UAE & Global Commercial Law Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Legal Summary: MSA vs SOW" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-5 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-2 font-serif", children: "Master Service Agreement (MSA)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "The umbrella legal contract governing overall risk allocation, IP ownership transfer triggers, indemnities, liability caps (1x fees), payment terms, confidentiality, suspension rights, and governing court jurisdiction. Signed once." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-5 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-2 font-serif", children: "Statement of Work (SOW)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "The tactical project addendum detailing functional specifications, technical deliverables, milestone schedules, acceptance test windows, pricing structures (Fixed Price or Time & Materials), and client dependencies. Signed for every project." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. Introduction: Why Single Contracts Fail Digital Agencies" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-msa", className: "hover:text-gold-600 underline", children: "2. Deep Dive: What Is a Master Service Agreement (MSA)?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#what-is-sow", className: "hover:text-gold-600 underline", children: "3. Deep Dive: What Is a Statement of Work (SOW)?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-matrix", className: "hover:text-gold-600 underline", children: "4. Side-by-Side Comparison Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#order-of-precedence", className: "hover:text-gold-600 underline", children: "5. The Order of Precedence Clause: Preventing Legal Conflicts" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#critical-clauses", className: "hover:text-gold-600 underline", children: "6. 7 Essential MSA Clauses Every Tech Vendor Must Include" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#sow-pitfalls", className: "hover:text-gold-600 underline", children: "7. Common SOW Mistakes That Lead to Scope Creep & Disputes" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#checklist", className: "hover:text-gold-600 underline", children: "8. Step-by-Step Contract Drafting Checklist" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "9. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Introduction: Why Single Contracts Fail Digital Agencies & Software Houses" }),
        /* @__PURE__ */ jsx("p", { children: 'When scaling a digital agency, software house, or IT consultancy, one of the most dangerous operational traps is relying on a single "catch-all" contract for every client project. When an agency sends a 20-page combined proposal and contract for a small $10,000 project, the client’s legal team spends three weeks redlining liability caps, governing law, and indemnification clauses. Conversely, if an agency relies on a brief 3-page proposal with no formal legal protections, a single disputed milestone or scope creep disagreement can trigger catastrophic financial liability.' }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The solution used by tier-one IT consultancies (such as Accenture, McKinsey, and enterprise software vendors) is the ",
          /* @__PURE__ */ jsx("strong", { children: "Two-Tier Commercial Contract Architecture" }),
          ": separating master legal terms into a ",
          /* @__PURE__ */ jsx("strong", { children: "Master Service Agreement (MSA)" }),
          " and individual project specifications into a ",
          /* @__PURE__ */ jsx("strong", { children: "Statement of Work (SOW)" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Key Strategic Advantage:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "By negotiating and executing an overarching MSA once, an agency establishes a permanent legal relationship with a client. Future projects, retainers, or emergency feature sprints can be authorized within 24 hours by signing a concise 3-page SOW without re-opening legal negotiations." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-msa", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Deep Dive: What Is a Master Service Agreement (MSA)?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsx("strong", { children: "Master Service Agreement (MSA)" }),
          " is a master commercial legal contract entered into by a service provider (the agency) and a buyer (the client). It sets forth the legal, financial, and risk-allocation terms that govern all current and future work between the parties."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "The MSA does not commit the client to spend a specific dollar amount, nor does it obligate the agency to perform specific technical tasks. Instead, it creates the legal framework under which work will be performed if and when an SOW is executed." }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Core Functions of an MSA:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 pl-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(Shield, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Limitation of Liability:" }),
              " Caps maximum legal damages (typically limited to total fees paid in the preceding 6 or 12 months) and waives indirect/consequential damages."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(Shield, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Intellectual Property Transfer Mechanism:" }),
              " Defines when and how IP transfers to the client (strictly conditioned upon full payment of invoices)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(Shield, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Payment Standards & Interest:" }),
              " Sets default payment windows (e.g. Net-30), accepted currencies, late payment interest rates (e.g. 1.5% per month), and suspension rights."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(Shield, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Confidentiality & Non-Disclosure:" }),
              " Establishes mutual 3-to-5 year confidentiality obligations for proprietary code, customer data, and business operations."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(Shield, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Dispute Resolution & Jurisdiction:" }),
              " Specifies choice of governing law (e.g. Delaware, UK High Court, Dubai Courts) and mandatory mediation/arbitration steps."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "what-is-sow", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Deep Dive: What Is a Statement of Work (SOW)?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "A ",
          /* @__PURE__ */ jsx("strong", { children: "Statement of Work (SOW)" }),
          " is a operational and technical contract document executed pursuant to an existing MSA. It defines the specific scope, technical deliverables, milestone timeline, acceptance testing procedures, and pricing model for a specific engagement."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "While the MSA is drafted by legal attorneys, the SOW is typically drafted by Project Managers, Solutions Architects, or Account Directors. It acts as the functional blueprint of the project." }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Core Components of an Effective SOW:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-sm mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileCode, { size: 16, className: "text-gold-600" }),
              "Technical & Functional Scope"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: 'Detailed list of features, user stories, API integrations, supported browsers/devices, third-party licenses, and explicit "Out of Scope" exclusions.' })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-sm mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 16, className: "text-gold-600" }),
              "Milestone Schedule & Acceptance"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Phased timeline with exact deliverable deadlines, client review windows (e.g. 5 business days), User Acceptance Testing (UAT) criteria, and deemed acceptance rules." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-sm mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Briefcase, { size: 16, className: "text-gold-600" }),
              "Pricing & Billing Structure"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Specifies whether the engagement is Fixed-Price (milestone-based) or Time & Materials (hourly/monthly rates), invoicing schedules, and deposit requirements." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-off-white", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-navy-950 text-sm mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 16, className: "text-gold-600" }),
              "Client Dependencies & Assumptions"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Required client inputs (brand assets, API keys, staging access, timely feedback). States that client delays automatically extend project timelines." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ LEGAL CONTRACT ENGINEERING" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Need Bulletproof MSA & SOW Templates Drafted for Your Tech Agency?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ's Advocate-led team drafts bulletproof B2B Master Service Agreements and SOW frameworks customized for US, UK, UAE, and cross-border tech consultancies, agencies, and software houses." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/master-service-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Explore MSA Contract Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Side-by-Side Architectural Comparison Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "Understanding the distinction between an MSA and an SOW is vital for both account management and legal risk containment. The following comparison highlights key differences:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Feature / Aspect" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Master Service Agreement (MSA)" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Statement of Work (SOW)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Primary Purpose" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Establishes overarching legal terms & risk allocation." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Defines specific project scope, deliverables, and fees." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Execution Frequency" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Signed once at the start of the commercial relationship." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Signed for every new project, feature sprint, or phase." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Primary Drafter" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Corporate Attorneys & Legal Counsel." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Project Managers, Account Directors & Technical Leads." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "IP Transfer Rules" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Defines legal transfer triggers & payment conditions." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Lists specific source code, assets, and design files transferred." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Liability & Indemnity" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Contains liability caps (e.g. 1x fees) and waiver of consequential damages." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Silent on legal liability (defers to MSA)." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Duration / Term" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Multi-year or perpetual (until formally terminated)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Short-term (e.g. 3 months, 6 months) for project duration." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "order-of-precedence", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. The Order of Precedence Clause: Preventing Legal Conflicts" }),
        /* @__PURE__ */ jsx("p", { children: "One of the most critical legal challenges in a two-tier contract structure is resolving conflicting provisions. What happens if the MSA states that payment is due Net-30 days, but a specific SOW states that payment is due Net-15 days? Or what if an SOW drafted by a project manager accidentally promises unlimited liability or custom IP rights that violate the MSA?" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "To prevent ambiguity, every professionally drafted MSA must contain an ",
          /* @__PURE__ */ jsx("strong", { children: "Order of Precedence Clause" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Standard Legal Order of Precedence Sample Wording:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: `"In the event of any conflict or inconsistency between the terms of this Master Service Agreement and any Statement of Work, the terms of this Master Service Agreement shall control and prevail; PROVIDED, HOWEVER, that a Statement of Work may override a specific provision of this MSA only if such Statement of Work explicitly identifies the section number of the MSA to be modified and expressly states the parties' intention to override that specific provision for that SOW alone."` })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "This legal mechanism ensures that project managers cannot accidentally compromise the agency’s master legal protections in an SOW without explicit, intentional legal override." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "critical-clauses", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 7 Essential MSA Clauses Every Tech Vendor Must Include" }),
        /* @__PURE__ */ jsx("p", { children: "When drafting or reviewing an agency MSA, failing to include protective legal clauses leaves your firm vulnerable to unpaid invoices, infinite rework, and un-capped legal damages. Ensure your MSA contains these seven essential clauses:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "1. IP Transfer Conditioned Upon Full Payment" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
              "Never assign intellectual property upon creation. State clearly that title and ownership of all deliverables pass to the client ",
              /* @__PURE__ */ jsx("em", { children: "only after full and final payment of all associated invoices under the relevant SOW" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "2. Limitation of Liability Cap" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Cap the agency’s maximum total aggregate liability for any claims to the actual amount paid by the client under the specific SOW in the preceding 6 or 12 months. Exclude indirect, special, lost profit, and consequential damages entirely." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "3. Work Suspension for Non-Payment" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Include a clause granting the agency the immediate right to suspend all work, withhold code deployment, and revoke staging access if any invoice is overdue by more than 10 business days, without incurring breach of contract liability." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "4. Background IP & Pre-Existing Tools Reservation" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Explicitly reserve ownership of the agency’s pre-existing code frameworks, libraries, devops scripts, and internal tools. Grant the client a non-exclusive, perpetual license to use embedded background IP solely as integrated into the final deliverable." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "5. Formal Change Request Procedure" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Mandate that any modification to project scope, timelines, or technical specifications must be documented in a written Change Request Form signed by authorized representatives of both parties, specifying cost and timeline impacts." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "6. Client Delay & Timeline Adjustments" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "State that project deadlines in an SOW are strictly dependent upon the client providing timely approvals, brand assets, and feedback. Any client delay automatically extends agency deadlines day-for-day and may incur restart fees if paused for over 30 days." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "7. Non-Solicitation of Agency Staff" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Protect your team from client poaching. Prohibit the client from soliciting or hiring agency developers or project managers during the agreement and for 12 months thereafter, with a pre-agreed liquidated damages fee (e.g. 50% of annual salary)." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "sow-pitfalls", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. Common SOW Mistakes That Lead to Scope Creep & Disputes" }),
        /* @__PURE__ */ jsx("p", { children: "Even with a rock-solid MSA, a poorly drafted SOW can ruin project profitability. Avoid these four common SOW drafting errors:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 p-5 rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-700 font-bold text-sm mb-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
              /* @__PURE__ */ jsx("span", { children: "Vague Acceptance Testing Terms" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-red-900 leading-relaxed", children: [
              /* @__PURE__ */ jsx("strong", { children: "Mistake:" }),
              " Allowing clients infinite time to review code or testing deliverables.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("strong", { children: "Fix:" }),
              " Set a strict 5-business-day review window. State that if no written rejection detailing non-conformities is received within 5 days, the deliverable is deemed accepted and milestone invoice triggered."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 p-5 rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-700 font-bold text-sm mb-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { size: 16 }),
              /* @__PURE__ */ jsx("span", { children: 'Omitting "Out of Scope" Section' })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-red-900 leading-relaxed", children: [
              /* @__PURE__ */ jsx("strong", { children: "Mistake:" }),
              " Only listing what IS included.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("strong", { children: "Fix:" }),
              ' Always include an explicit "Out of Scope" list (e.g. third-party API subscription costs, SEO copywriting, multi-language localization, post-launch maintenance) to eliminate client assumptions.'
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "checklist", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "8. Step-by-Step Contract Drafting Checklist for Agencies" }),
        /* @__PURE__ */ jsx("p", { children: "Follow this practical step-by-step checklist before issuing contracts to new clients:" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 text-white p-6 rounded-2xl space-y-3 text-xs my-6 border border-gold-500/30", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 1:" }),
              " Have a qualified advocate/attorney draft your standard agency Master Service Agreement (MSA)."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 2:" }),
              " Ensure the MSA includes an Order of Precedence clause, payment terms, and liability caps."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 3:" }),
              " Have both parties sign the MSA once during initial account setup."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 4:" }),
              " Draft SOW #1 detailing exact scope, deliverables, milestones, acceptance window, and fees."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 5:" }),
              " Ensure SOW #1 references the MSA date and contains no conflicting legal terms."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-500 shrink-0", size: 16 }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Step 6:" }),
              " Collect initial deposit payment before commencing technical development work."
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "ADVAQ LEGAL CONTRACT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Protect Your Tech Agency with Tailored MSAs & SOWs" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Custom B2B contract drafting, IP protection, liability cap structuring, and cross-border enforcement advisory led by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/master-service-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order MSA & SOW Contract Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
