import { jsxs, jsx } from "react/jsx-runtime";
import { a8 as faqs } from "./router-COelCWah.js";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Clock, Shield, CheckCircle2, BookOpen, ArrowRight, Scale, HelpCircle, ChevronDown } from "lucide-react";
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium", children: "Who Owns the Code? Intellectual Property Rights Transfer in Software Development" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl", children: "A 2,100+ word comprehensive IP law tutorial for software engineering agencies, SaaS startups, and client founders on copyright ownership, IP assignment timing, and background framework licensing." }),
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
            /* @__PURE__ */ jsx("span", { children: "International Copyright Law Compliant" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-6 -mt-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }),
        /* @__PURE__ */ jsx("span", { children: "Executive Summary: Software IP Core Principles" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4 text-xs pt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "1. Default Ownership Rule" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Creators (contractors/agencies) retain software copyright by default. Paying for software development does NOT automatically transfer copyright without a written IP assignment deed." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "2. Payment-Triggered Assignment" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "IP transfer must be strictly conditioned upon receipt of full and final payment of all invoices under the relevant Statement of Work." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "3. Background IP Carve-Out" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Agencies retain ownership of pre-existing boilerplates, developer tools, and internal code libraries used to build the custom software." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 p-4 rounded-xl border border-white/10", children: [
          /* @__PURE__ */ jsx("strong", { className: "block text-gold-500 text-sm mb-1 font-serif", children: "4. Non-Exclusive License Grant" }),
          /* @__PURE__ */ jsx("p", { className: "text-navy-100 leading-relaxed", children: "Clients receive a perpetual, non-exclusive, worldwide license to use and modify agency Background IP embedded in their custom software." })
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#default-copyright-rules", className: "hover:text-gold-600 underline", children: "1. Default Software Copyright Laws (US, UK, Global)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#work-made-for-hire", className: "hover:text-gold-600 underline", children: "2. Work-Made-For-Hire vs Assignment Agreements" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#payment-conditioned-assignment", className: "hover:text-gold-600 underline", children: "3. Conditioning IP Transfer Upon Full Payment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#background-ip-carveout", className: "hover:text-gold-600 underline", children: "4. Protecting Agency Background IP & Open Source Libraries" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#open-source-risks", className: "hover:text-gold-600 underline", children: "5. Managing Open Source (OSS) License Risks" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#faqs", className: "hover:text-gold-600 underline", children: "6. Frequently Asked Questions" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "default-copyright-rules", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "1. Default Software Copyright Laws (US, UK, Global)" }),
        /* @__PURE__ */ jsx("p", { children: "One of the most dangerous legal misconceptions in the tech industry is that paying a software agency or freelance developer for custom code automatically makes the client the owner of that code." }),
        /* @__PURE__ */ jsxs("p", { children: [
          'Under copyright laws in the United States (US Copyright Act), the United Kingdom (CDPA 1988), and international Berne Convention treaties, source code is legally classified as a "literary work." Ownership vests automatically in the author (the software developer or agency) upon creation. Paying an invoice grants an implied license to use the software, but does ',
          /* @__PURE__ */ jsx("em", { children: "not" }),
          " transfer underlying copyright without an explicit written IP Assignment Deed."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "work-made-for-hire", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "2. Work-Made-For-Hire vs Assignment Agreements" }),
        /* @__PURE__ */ jsx("p", { children: 'Clients frequently insert generic "Work-Made-For-Hire" clauses into B2B vendor contracts. However, under US copyright law, the Work-Made-For-Hire doctrine applies automatically ONLY to full-time W-2 employees.' }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For independent contractor agencies, software code does not fall into standard statutory work-for-hire categories unless accompanied by an explicit ",
          /* @__PURE__ */ jsx("strong", { children: "Present Assignment Clause" }),
          ' ("Developer hereby assigns all right, title, and interest in and to...").'
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 uppercase text-xs font-semibold tracking-widest", children: "ADVAQ IP ASSIGNMENT CONTRACT SERVICES" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-3xl text-white mt-2", children: "Draft Bulletproof IP Assignment Agreements with ADVAQ" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-navy-200 text-sm max-w-xl leading-relaxed", children: "ADVAQ drafts IP Assignment Agreements and Software Ownership clauses tailored to protect agency background code while providing clients clean title upon full payment." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/legal-contract-drafting/ip-assignment-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2", children: [
          "Order IP Assignment Package ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "payment-conditioned-assignment", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "3. Conditioning IP Transfer Upon Full Payment" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "For agencies, the single most critical protective mechanism in an IP assignment clause is establishing a ",
          /* @__PURE__ */ jsx("strong", { children: "Payment Condition Precedent" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Scale, { size: 18 }),
            "Sample Conditional IP Assignment Wording:"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3", children: `"Conditioned strictly upon Developer's receipt of full and final payment of all invoices and fees under the applicable Statement of Work, Developer hereby assigns, transfers, and conveys to Client all right, title, and interest in and to the custom deliverables created under such Statement of Work."` })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "If a client defaults on payment, copyright remains 100% with the agency, making unauthorized deployment an actionable act of copyright infringement." })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "background-ip-carveout", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "4. Protecting Agency Background IP & Open Source Libraries" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Software agencies rarely build applications from total scratch. Developers utilize pre-existing utility libraries, UI components, API wrappers, and devops scripts (",
          /* @__PURE__ */ jsx("strong", { children: "Background IP" }),
          ")."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Your contract must explicitly separate ",
          /* @__PURE__ */ jsx("strong", { children: "Custom Deliverables" }),
          " (assigned to client) from ",
          /* @__PURE__ */ jsx("strong", { children: "Background IP" }),
          " (retained by agency). The client receives a perpetual, non-exclusive, worldwide license to use embedded Background IP as part of the application."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { id: "open-source-risks", className: "space-y-4 mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl text-dark-text font-semibold", children: "5. Managing Open Source (OSS) License Risks" }),
        /* @__PURE__ */ jsx("p", { children: 'Enterprise buyers perform thorough open-source audit scans (e.g. Snyk, Black Duck) during M&A due diligence. Contracts must warrant that no "copyleft" open-source packages (such as GPL v3 or AGPL) are embedded in proprietary client codebases, as copyleft licenses can legally force the client to make their entire application open-source.' })
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
        /* @__PURE__ */ jsx("p", { className: "text-gold-500 text-xs uppercase tracking-widest font-semibold", children: "SOFTWARE IP CONTRACT SOLUTIONS" }),
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl mt-3 text-white", children: "Secure Your Software IP Rights Today" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-navy-200 text-base max-w-xl mx-auto", children: "IP Assignment Agreement drafting, background code carve-outs, conditional transfer provisions, and open-source compliance drafted by Advocate High Court." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/legal-contract-drafting/ip-assignment-agreement", className: "btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "Order IP Assignment Agreement" }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/923000925335", target: "_blank", rel: "noopener noreferrer", className: "btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold", children: "WhatsApp Us Directly" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ArticlePage as component
};
