import { jsxs, jsx } from "react/jsx-runtime";
import { aq as faqs } from "./router-DoRrh2l-.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, Check, AlertTriangle, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Fixed Price vs Hourly Retainer Contracts: Which Model Protects Digital Agencies Best?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word financial and legal contract masterclass for agency owners, design studios, and software houses comparing Fixed Price project agreements against Time & Materials (Hourly Retainer) models." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "Advocate Muhammad Abdullah (Lead Counsel)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-gold-500" }),
              /* @__PURE__ */ jsx("span", { children: "11 Min Read · Updated July 2026" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { size: 14, className: "text-gold-500" }),
            /* @__PURE__ */ jsx("span", { children: "Agency Commercial Contract Standards" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Summary: Fixed Price vs Retainer Contracts" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-5 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-2 font-serif", children: "Fixed Price Contract" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Best for static, well-defined projects (e.g. 5-page website, basic mobile app MVP). All risk of cost overruns falls on the agency unless protected by strict functional specs and written Change Orders." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-5 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-2 font-serif", children: "Hourly Retainer (Time & Materials)" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Best for iterative software development, SaaS scaling, and ongoing digital marketing. Risk of scope changes falls on the client; the agency is guaranteed payment for every developer hour logged." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#introduction", className: "hover:text-gold-600 underline", children: "1. Introduction: The Agency Contract Pricing Dilemma" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fixed-price-dynamics", className: "hover:text-gold-600 underline", children: "2. Legal & Financial Dynamics of Fixed Price Contracts" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#retainer-dynamics", className: "hover:text-gold-600 underline", children: "3. Legal & Financial Dynamics of Hourly Retainers" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#comparison-matrix", className: "hover:text-gold-600 underline", children: "4. Side-by-Side Comparison Matrix" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#risk-allocation", className: "hover:text-gold-600 underline", children: "5. Risk Allocation: Where Commercial Disputes Arise" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#essential-retainer-clauses", className: "hover:text-gold-600 underline", children: "6. 5 Must-Have Clauses in an Hourly Retainer Agreement" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#hybrid-model", className: "hover:text-gold-600 underline", children: "7. The Hybrid Contract Model: Fixed MVP + Monthly Retainer" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "8. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "introduction", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Introduction: The Agency Contract Pricing Dilemma" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "One of the most consequential decisions facing digital agency founders, software consultancies, and design studios is choosing between ",
          /* @__PURE__ */ jsx("strong", { children: "Fixed Price" }),
          " and ",
          /* @__PURE__ */ jsx("strong", { children: "Hourly Retainer (Time & Materials)" }),
          " commercial contracts."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Selecting the wrong pricing model can severely damage profit margins. A fixed price contract with a demanding client can turn a estimated 40% margin into a net loss if scope creep goes unchecked. Conversely, an hourly contract without clear timesheet reporting can lead to client distrust and unpaid invoices." }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-navy-950 font-semibold mb-1", children: "Core Legal Rule:" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-900 text-sm", children: "The purpose of an agency contract is not merely setting price — it is establishing legal risk allocation. Fixed Price shifts operational risk to the agency, whereas Hourly Retainers shift scope uncertainty risk to the client." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "fixed-price-dynamics", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Legal & Financial Dynamics of Fixed Price Contracts" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In a ",
          /* @__PURE__ */ jsx("strong", { children: "Fixed Price Agreement" }),
          ", the agency agrees to deliver a specified project scope for an agreed total sum (e.g. $25,000). The client knows exact total cost in advance, while the agency assumes full responsibility for managing team hours and efficiency."
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Advantages of Fixed Price Contracts:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Higher Profit Potential:" }),
              " If your team completes a $30k project in half the estimated hours using pre-built libraries, the agency retains 100% of the profit margin."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Faster Sales Closing:" }),
              " Enterprise clients and startups often prefer predictable fixed budgets over uncapped hourly estimates."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Legal Risks of Fixed Price Contracts:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-500 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Scope Creep Erosion:" }),
              " Vague functional requirements lead clients to demand extra revisions without paying extra fees."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-500 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Payment Withholding Risk:" }),
              " If a client rejects a milestone on subjective grounds, large milestone payments can be blocked for months."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "hourly-retainer-dynamics", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Legal & Financial Dynamics of Hourly Retainers (Time & Materials)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In an ",
          /* @__PURE__ */ jsx("strong", { children: "Hourly Retainer or Time & Materials (T&M) Agreement" }),
          ", the client pays for actual developer, designer, or consultant hours spent on their project, billed weekly or monthly at agreed hourly rates."
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Advantages of Hourly Retainers:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Guaranteed Profitability:" }),
              " Every hour worked generates billable revenue, eliminating unpaid over-runs."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "text-gold-600 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Agile Flexibility:" }),
              " Ideal for complex software scaling where technical requirements change rapidly based on user feedback."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl text-dark-text font-semibold mt-6", children: "Legal Risks of Hourly Retainers:" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-500 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Timesheet Auditing Disputes:" }),
              " Clients may challenge hours logged or claim developers were working inefficiently."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "text-red-500 shrink-0 mt-1", size: 16 }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Unpredictable Revenue Fluctuation:" }),
              " If client workload pauses, agency billing drops unexpectedly unless minimum monthly commitments are enforced."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ AGENCY CONTRACT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Need Customized Agency Contracts Drafted for Your Agency?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ's legal team drafts tailored B2B Fixed Price contracts, Monthly Retainer agreements, and Change Order frameworks for digital agencies across the US, UK, UAE, and Pakistan." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/fixed-price-project-contract", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order Agency Contract Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "comparison-matrix", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Side-by-Side Comparison Matrix" }),
        /* @__PURE__ */ jsx("p", { children: "The table below illustrates the primary commercial differences between Fixed Price and Hourly Retainer agreements:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 border border-border rounded-xl", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-navy-950 text-white uppercase text-[11px] tracking-wider", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "p-4", children: "Criteria" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Fixed Price Agreement" }),
            /* @__PURE__ */ jsx("th", { className: "p-4 text-gold-500", children: "Hourly Retainer (T&M)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-border bg-white text-gray-700", children: [
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Scope Clarity Required" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Exhaustive & 100% frozen prior to kickoff." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Flexible & evolving iteratively." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Scope Creep Risk" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "High (borne by Agency unless Change Orders enforced)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Zero (borne by Client via paid hours)." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Billing Method" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Milestone-based deposits (e.g. 50/25/25)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Monthly in advance or bi-weekly timesheets." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Profit Margin Potential" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "High (if completed efficiently under budget)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Predictable & capped at hourly billing rate." })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "hover:bg-off-white", children: [
              /* @__PURE__ */ jsx("td", { className: "p-4 font-bold text-navy-950", children: "Client Trust Level Needed" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Moderate (Client has fixed total cost assurance)." }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "High (Client trusts agency timesheet accuracy)." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "risk-allocation", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Risk Allocation: Where Commercial Disputes Arise" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In Fixed Price contracts, disputes almost always arise from ",
          /* @__PURE__ */ jsx("strong", { children: "scope ambiguity" }),
          " — where the client expects a complex sub-feature (e.g. multi-currency payment checkout) that was not explicitly listed in the SOW, leading to standoff over extra charges."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "In Hourly Retainers, disputes arise over ",
          /* @__PURE__ */ jsx("strong", { children: "perceived inefficiency" }),
          " — where the client feels an 80-hour task should have taken 40 hours. Your contract must clarify that hourly billing reflects actual effort and technical execution, not guaranteed outcome speed."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "essential-retainer-clauses", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "6. 5 Must-Have Clauses in an Hourly Retainer Agreement" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "1. Advance Monthly Payment Commitment" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Require retainer fees (e.g. 40 hours/month) to be paid in advance on the 1st of each month before hours are allocated." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: '2. "Use-It-or-Lose-It" Non-Rollover Provision' }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "State that unused monthly hours do NOT roll over to the following month, protecting agency monthly scheduling and revenue forecasting." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "3. Overage Billing Rates" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Specify that hours worked beyond the monthly retainer commitment are billed at standard overage hourly rates (e.g. +15% surge rate)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "4. Time-Tracking Tool Acceptance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Designate an official time-tracking tool (e.g. Toggl, Harvest, Jira) as the conclusive record of logged hours." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border border-border p-5 rounded-xl bg-white shadow-sm", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-navy-950 text-sm mb-1 text-gold-700", children: "5. 30-Day Contract Termination Notice" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: "Permit either party to terminate the ongoing retainer with 30 days written notice, ensuring smooth offboarding." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "hybrid-model", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "7. The Hybrid Contract Model: Fixed MVP + Monthly Retainer" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "The most effective commercial strategy for high-growth tech agencies is the ",
          /* @__PURE__ */ jsx("strong", { children: "Hybrid Contract Model" }),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("ol", { className: "list-none space-y-2 text-sm pl-2", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Phase 1 (Fixed Price):" }),
            " Build the core platform or MVP with clear, static functional requirements under a milestone-based Fixed Price SOW."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Phase 2 (Hourly Retainer):" }),
            " Upon launch, transition the client to a Monthly Retainer for continuous maintenance, feature iteration, and DevOps support."
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm mt-3", children: "This hybrid approach delivers initial budget predictability for the client while building long-term recurring revenue for the agency." })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "AGENCY PRICING & CONTRACT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Optimize Your Agency Contracts Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "Fixed price project agreements, monthly retainer agreements, hybrid contracts, and change order management templates." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/fixed-price-project-contract", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order Fixed Price & Retainer Package" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
