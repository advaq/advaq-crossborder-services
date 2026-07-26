import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  FileText,
  AlertTriangle,
  Scale,
} from "lucide-react";

const faqs = [
  {
    q: "What is scope creep in digital agency contracts?",
    a: "Scope creep refers to continuous, unapproved expansion of project deliverables, feature requests, or design revisions beyond what was originally specified in the signed Statement of Work (SOW).",
  },
  {
    q: "How does a formal Change Control Order clause protect agencies?",
    a: "A Change Control Order clause stipulates that no out-of-scope work will commence until both client and agency sign an official written Change Request specifying additional costs and milestone extensions.",
  },
  {
    q: "What is a 'Deemed Acceptance' clause and how does it prevent project delays?",
    a: "A Deemed Acceptance clause states that if a client fails to provide written feedback on a delivered milestone within a set period (e.g. 5–7 business days), the milestone is legally deemed approved and invoice payable.",
  },
  {
    q: "How many round of design revisions should be included in an agency contract?",
    a: "Contracts should specify an exact cap on design/code revisions (e.g. 2 rounds of revisions per milestone). Additional revisions are explicitly billed at the agency's standard hourly rate.",
  },
  {
    q: "Can an agency pause work if a client fails to respond or approve milestones?",
    a: "Yes. Well-drafted agreements include a 'Client Delay & Project Suspension' clause allowing agencies to suspend work and re-allocate resources if client feedback is delayed by more than 14 days.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Prevent Scope Creep Legally: Change Request Clauses in Agency Agreements",
  description:
    "Complete legal guide for digital agencies & IT freelancers on eliminating scope creep. Learn change order procedures, deemed acceptance windows, revision caps, and client delay suspension clauses.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/prevent-scope-creep-contract-clauses-agency",
};

export const Route = createFileRoute("/blog/prevent-scope-creep-contract-clauses-agency")({
  head: () => ({
    meta: [
      { title: "Prevent Scope Creep Agency Contract Clauses (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to prevent scope creep legally in agency contracts. Change request clauses, revision caps, deemed acceptance windows & project suspension rules.",
      },
      {
        name: "keywords",
        content:
          "prevent scope creep contract clauses agency, change control order clause software contract, deemed acceptance clause digital agency, revision cap clause web design contract",
      },
      {
        property: "og:title",
        content: "How to Prevent Scope Creep Legally: Change Request Clauses in Agency Agreements",
      },
      {
        property: "og:description",
        content:
          "Eliminate unpaid work and scope creep with legally bulletproof Change Order and Acceptance clauses.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/prevent-scope-creep-contract-clauses-agency" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/prevent-scope-creep-contract-clauses-agency" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema) },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="min-h-screen bg-white">
      {/* HEADER HERO */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <span>Legal Contract Drafting</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            How to Prevent Scope Creep Legally: Change Request Clauses in Agency Agreements
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical legal engineering guide for web development agencies, design studios, and software houses on structuring Change Orders, setting revision caps, and enforcing acceptance deadlines.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Agency Risk Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Commercial Scope Management Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>4 Anti-Scope-Creep Clauses</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Formal Change Control Procedure:</strong> Written Change Order required prior to executing out-of-scope tasks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Deemed Acceptance Window:</strong> Milestones automatically deemed accepted after 5–7 days without written objection.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Strict Revision Limits:</strong> Capped at 2 revision rounds per deliverable; subsequent edits billed hourly.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Client Delay Suspension:</strong> Right to pause work and adjust delivery schedules if client stalls feedback.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#understanding-scope-creep" className="hover:text-gold-600 underline">1. Understanding the Legal Mechanics of Scope Creep</a></li>
            <li><a href="#change-order-clause" className="hover:text-gold-600 underline">2. Anatomy of a Bulletproof Change Order Clause</a></li>
            <li><a href="#deemed-acceptance" className="hover:text-gold-600 underline">3. Enforcing Deemed Acceptance Windows</a></li>
            <li><a href="#revision-caps" className="hover:text-gold-600 underline">4. Setting Hard Caps on Revisions & Design Iterations</a></li>
            <li><a href="#client-delays" className="hover:text-gold-600 underline">5. Handling Client Responsiveness & Delay Fees</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="understanding-scope-creep" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Understanding the Legal Mechanics of Scope Creep
          </h2>
          <p>
            Scope creep destroys agency profitability when informal client requests ("can you quickly add this feature?") compound without contractual adjustment.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="change-order-clause" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Anatomy of a Bulletproof Change Order Clause
          </h2>
          <p>
            The Change Order clause must state: "No modification to specifications shall take effect unless embodied in a written Change Order signed by authorized representatives of both parties."
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ SCOPE PROTECTION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Eliminate Unpaid Scope Creep with ADVAQ Contracts
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts customized agency contracts featuring Change Order protocols, deemed acceptance rules, and revision caps.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Scope Protection Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="deemed-acceptance" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Enforcing Deemed Acceptance Windows
          </h2>
          <p>
            Protect agency cash flow by establishing a 5-day acceptance window. If the client fails to provide written rejection outlining specific non-conformities, the milestone is deemed approved.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="revision-caps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Setting Hard Caps on Revisions & Design Iterations
          </h2>
          <p>
            Explicitly define what constitutes a "revision" versus a "new feature", and cap iterations per milestone to prevent endless tweaking.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-sans font-semibold text-navy-950 flex justify-between items-center gap-4 hover:bg-off-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gold-500 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-border/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section className="bg-navy-950 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 diagonal-pattern opacity-100" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold">
            AGENCY CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Stop Scope Creep & Protect Your Profits
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Change request templates, deemed acceptance clauses, revision caps, and client delay fee protocols.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Scope Creep Protection Contract
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
