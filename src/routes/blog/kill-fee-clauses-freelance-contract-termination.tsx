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
  DollarSign,
  FileCheck,
  AlertCircle,
} from "lucide-react";

const faqs = [
  {
    q: "What is a 'Kill Fee' in freelance and consulting agreements?",
    a: "A Kill Fee is a contractually agreed penalty or payout (typically 25% to 50% of remaining project value) payable to a freelancer or consulting agency if a client cancels a project before completion through no fault of the contractor.",
  },
  {
    q: "How does a Kill Fee clause protect agency and freelancer cash flow?",
    a: "A Kill Fee compensates the agency for reserved team capacity, opportunity costs, and unbillable onboarding hours spent preparing for a project that was abruptly cancelled by the client.",
  },
  {
    q: "What is the difference between Termination for Convenience and Termination for Cause?",
    a: "Termination for Convenience allows either party to end the contract without a breach, triggering notice periods and Kill Fees. Termination for Cause occurs when a party breaches contract obligations (e.g. non-payment or missed milestones), ending the agreement immediately without Kill Fee penalties for the non-breaching party.",
  },
  {
    q: "How should Kill Fees be structured in fixed-price project contracts?",
    a: "In fixed-price contracts, Kill Fees require: (1) Full payment for all completed milestones, (2) Pro-rated payment for work-in-progress up to cancellation date, PLUS (3) A 25%–50% Kill Fee on remaining unearned project fees.",
  },
  {
    q: "Can a client demand a refund of the initial deposit upon project cancellation?",
    a: "Contracts should explicitly state that initial upfront deposits (e.g. 30%–50% upfront retainer) are non-refundable under all Termination for Convenience scenarios.",
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
  headline: "Kill Fees & Early Termination Clauses in Freelance & Consulting Agreements",
  description:
    "Complete legal guide on Kill Fees, non-refundable deposits, and early termination clauses for freelancers, agencies, and consultancies. Learn how to draft bulletproof termination protocols.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/kill-fee-clauses-freelance-contract-termination",
};

export const Route = createFileRoute("/blog/kill-fee-clauses-freelance-contract-termination")({
  head: () => ({
    meta: [
      { title: "Kill Fees & Contract Termination Clauses (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Kill fee clauses & early contract termination guide for freelancers & agencies. Non-refundable deposits, termination for convenience vs cause & payout rules.",
      },
      {
        name: "keywords",
        content:
          "kill fee clauses freelance contract termination, non refundable deposit clause agency agreement, termination for convenience fee consultant contract, early cancellation payout software project",
      },
      {
        property: "og:title",
        content: "Kill Fees & Early Termination Clauses in Freelance & Consulting Agreements",
      },
      {
        property: "og:description",
        content:
          "Protect your agency income against sudden client project cancellations with enforced Kill Fees and non-refundable deposit terms.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/kill-fee-clauses-freelance-contract-termination" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/kill-fee-clauses-freelance-contract-termination" }],
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
            Kill Fees & Early Termination Clauses in Freelance & Consulting Agreements
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical commercial contract guide for agency owners, IT consultants, and creative freelancers on structuring Kill Fees, non-refundable retainers, and notice periods for early project cancellation.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Commercial Contract Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Agency Commercial Risk Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Termination & Kill Fee Rules</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Non-Refundable Deposit:</strong> Upfront deposits are strictly non-refundable upon client cancellation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Pro-Rata Milestone Payout:</strong> Full payment required for all work completed up to notice date.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Kill Fee Percentage:</strong> 25%–50% fee on unearned contract balance to compensate for reserved capacity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>30-Day Written Notice:</strong> Required notice period for Termination for Convenience.</span>
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
            <li><a href="#understanding-kill-fees" className="hover:text-gold-600 underline">1. Understanding Kill Fees & Early Termination</a></li>
            <li><a href="#convenience-vs-cause" className="hover:text-gold-600 underline">2. Termination for Convenience vs Termination for Cause</a></li>
            <li><a href="#non-refundable-deposits" className="hover:text-gold-600 underline">3. Structuring Non-Refundable Upfront Deposits</a></li>
            <li><a href="#drafting-kill-fee-clause" className="hover:text-gold-600 underline">4. Drafting an Enforceable Kill Fee Clause</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="understanding-kill-fees" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Understanding Kill Fees & Early Termination
          </h2>
          <p>
            When a client abruptly cancels a project halfway through, agencies face severe financial loss from unallocated developer schedules. A Kill Fee guarantees financial protection.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="convenience-vs-cause" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Termination for Convenience vs Termination for Cause
          </h2>
          <p>
            Clearly distinguish between Termination for Convenience (client cancels without breach) which requires notice and Kill Fees, versus Termination for Cause (breach of contract).
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FREELANCE CONTRACT DRAFTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Custom Freelance & Agency Contracts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts Freelance Service Agreements and Consulting Contracts featuring bulletproof Kill Fee protocols and deposit protections.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/freelance-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Contract Drafting <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="non-refundable-deposits" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Structuring Non-Refundable Upfront Deposits
          </h2>
          <p>
            Always require a 30%–50% upfront deposit before commencing work, and state explicitly that deposit funds are non-refundable once project kickoff occurs.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="drafting-kill-fee-clause" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Drafting an Enforceable Kill Fee Clause
          </h2>
          <p>
            Structure the clause: "If Client terminates this agreement prior to project completion for convenience, Client shall pay Contractor (a) fees for all work completed, plus (b) a Kill Fee equal to 30% of the remaining contract balance."
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
            CONTRACT TERMINATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Protect Your Income Against Cancellations
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Kill fee drafting, non-refundable deposit terms, notice period structuring, and breach of contract remedies.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/freelance-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Kill Fee Contract Package
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
