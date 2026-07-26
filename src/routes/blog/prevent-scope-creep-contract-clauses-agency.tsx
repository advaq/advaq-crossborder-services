import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Scale,
  Briefcase,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is scope creep in digital agency contracts?",
    a: "Scope creep refers to continuous, unapproved expansion of project deliverables, feature requests, or design iterations beyond what was explicitly defined and priced in the signed Statement of Work (SOW).",
  },
  {
    q: "How does a formal Change Control Order clause protect agencies?",
    a: "A Change Control Order clause stipulates that no out-of-scope work will commence until both client and agency sign an official written Change Request Form specifying additional costs, milestone timeline extensions, and payment terms.",
  },
  {
    q: "What is a 'Deemed Acceptance' clause and how does it prevent project delays?",
    a: "A Deemed Acceptance clause states that if a client fails to provide written feedback or rejection detailing specific non-conformities within a set period (e.g. 5–7 business days of delivery), the milestone is legally deemed approved and the associated invoice becomes payable.",
  },
  {
    q: "How many rounds of design/code revisions should be included in an agency contract?",
    a: "Contracts should specify an exact numerical cap on design or code revisions (e.g. 2 rounds of revisions per milestone). Any additional revision requests are explicitly billed at the agency's standard hourly overage rate.",
  },
  {
    q: "Can an agency pause work if a client fails to respond or approve milestones?",
    a: "Yes. Well-drafted agreements include a 'Client Delay & Project Suspension' clause allowing agencies to suspend work, withhold code deployment, and re-allocate developers if client feedback is delayed by more than 10 business days.",
  },
  {
    q: "What is the difference between a revision and a scope change?",
    a: "A revision modifies existing work created within agreed specifications (e.g., changing color palette or tweaking button copy). A scope change introduces entirely new functionality, new pages, or structural architecture not in the original SOW.",
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
  dateModified: "2026-07-26",
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
    <article className="min-h-screen bg-white text-gray-800">
      {/* HEADER HERO */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <Link to="/legal-contract-drafting" className="hover:underline">Legal Contract Drafting</Link>
          </div>

          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium">
            How to Prevent Scope Creep Legally: Change Request Clauses in Agency Agreements
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word practical legal engineering guide for web development agencies, design studios, and software houses on structuring Change Orders, setting revision caps, and enforcing acceptance deadlines.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>Advocate Muhammad Abdullah (Lead Counsel)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
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
            <span>Executive Legal Summary: 4 Anti-Scope-Creep Clauses</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Formal Change Control Procedure</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandates that no out-of-scope work commences until a written Change Order Form specifying costs and timeline extensions is signed by both parties.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. Deemed Acceptance Window</strong>
              <p className="text-navy-100 leading-relaxed">
                Establishes that delivered milestones are legally deemed approved if the client does not submit written non-conformity feedback within 5–7 business days.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Strict Revision Caps</strong>
              <p className="text-navy-100 leading-relaxed">
                Caps design and code iterations at 2 rounds per deliverable. Additional revision rounds are explicitly billed at the agency's hourly overage rate.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Client Delay Suspension</strong>
              <p className="text-navy-100 leading-relaxed">
                Grants the agency the legal right to pause work, adjust delivery schedules, and charge restart fees if client feedback is delayed over 10 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-2xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen size={16} className="text-gold-600" />
            Table of Contents
          </h2>
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#understanding-scope-creep" className="hover:text-gold-600 underline">1. Understanding the Legal Mechanics of Scope Creep</a></li>
            <li><a href="#change-order-clause" className="hover:text-gold-600 underline">2. Anatomy of a Bulletproof Change Order Clause</a></li>
            <li><a href="#deemed-acceptance" className="hover:text-gold-600 underline">3. Enforcing Deemed Acceptance Windows</a></li>
            <li><a href="#revision-caps" className="hover:text-gold-600 underline">4. Setting Hard Caps on Revisions & Iterations</a></li>
            <li><a href="#client-delays" className="hover:text-gold-600 underline">5. Handling Client Responsiveness & Delay Suspension</a></li>
            <li><a href="#out-of-scope-lists" className="hover:text-gold-600 underline">6. Drafting Explicit "Out of Scope" Exclusions</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="understanding-scope-creep" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Understanding the Legal Mechanics of Scope Creep
          </h2>
          <p>
            Scope creep is the single silent killer of agency profitability. It rarely happens as a single massive request; instead, it occurs in small, seemingly innocent steps: a client asking to "tweak" a layout, add "just one more API integration," or redesign a checkout page after sign-off.
          </p>
          <p>
            When an agency accommodates informal verbal or Slack requests without a contractual mechanism, two major problems occur: profit margins disappear and project schedules collapse. When the final delivery deadline is missed, the client blames the agency, refusing final payment.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Contractual Rule:</strong>
            <p className="text-navy-900 text-sm">
              Unless your contract explicitly defines how additional work is requested, priced, and approved, courts and arbitrators will assume that minor out-of-scope work was performed voluntarily under the original contract price.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="change-order-clause" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Anatomy of a Bulletproof Change Order Clause
          </h2>
          <p>
            The primary defense against scope creep is a strict <strong>Change Control Procedure Clause</strong>. This clause establishes that any deviation from the original SOW must be documented in a written Change Order Form.
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Protective Change Control Clause:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "Any modification, addition, or deletion to the deliverables, technical specifications, or timeline set forth in a Statement of Work ('Change') must be documented in a written Change Order Form. Developer shall provide Client with an estimate of the additional fees and schedule impact required to implement the Change. Developer shall have no obligation to commence work on any Change until a Change Order Form is signed by authorized representatives of both parties."
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="deemed-acceptance" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Enforcing Deemed Acceptance Windows
          </h2>
          <p>
            A major cause of project stalling is when a client takes weeks to review a delivered milestone build. Meanwhile, developer teams sit idle or milestone invoices remain unpaid.
          </p>
          <p>
            Your agreement must include a <strong>Deemed Acceptance Clause</strong> specifying a strict 5-to-7 business day review window. If the client does not provide a detailed written notice specifying reproducible non-conformities within 5 business days, the milestone is legally deemed accepted and the associated milestone invoice becomes due and payable.
          </p>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ SCOPE PROTECTION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Eliminate Unpaid Scope Creep with ADVAQ Contracts
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts customized agency contracts featuring Change Order protocols, deemed acceptance rules, and revision caps for tech agencies in the US, UK, UAE, and Pakistan.
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

        {/* SECTION 4 */}
        <div id="revision-caps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Setting Hard Caps on Revisions & Design Iterations
          </h2>
          <p>
            Clients frequently confuse "revisions" with "endless subjective redesigns." Your SOW must explicitly cap the number of revision rounds included in the fixed price (e.g., 2 rounds of design revisions).
          </p>
          <p>
            The contract must also clearly define what qualifies as a valid revision: feedback must be consolidated into a single written document submitted within the review window. Piecemeal feedback submitted via Slack or WhatsApp is explicitly disallowed.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="client-delays" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Handling Client Responsiveness & Delay Suspension
          </h2>
          <p>
            When a client fails to provide brand assets, API documentation, or timely feedback, agency schedules collapse. Include a <strong>Client Delay & Project Suspension Clause</strong> stating:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Day-for-Day Extension:</strong> Any client delay in providing required assets extends all agency delivery deadlines day-for-day.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Project Suspension:</strong> If client delay exceeds 10 business days, the agency may suspend work and re-allocate resources to other revenue projects.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Re-Start Fee:</strong> Resuming a suspended project requires payment of a 10% re-boarding fee to cover team scheduling adjustments.</span></li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="out-of-scope-lists" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Drafting Explicit "Out of Scope" Exclusions
          </h2>
          <p>
            One of the simplest ways to prevent scope disputes is adding a dedicated <strong>"Out of Scope"</strong> section in every SOW. List items explicitly excluded from the project price, such as:
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-xs my-4">
            <div className="p-4 border border-border rounded-xl bg-off-white">❌ Multi-language content translation & localization</div>
            <div className="p-4 border border-border rounded-xl bg-off-white">❌ Third-party API subscription fees (Stripe, Twilio, AWS)</div>
            <div className="p-4 border border-border rounded-xl bg-off-white">❌ Custom video creation & copywriting</div>
            <div className="p-4 border border-border rounded-xl bg-off-white">❌ Post-launch server maintenance & DevOps support</div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6 flex items-center gap-2">
            <HelpCircle size={22} className="text-gold-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm"
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
            Change request templates, deemed acceptance clauses, revision caps, and client delay fee protocols drafted by Advocate High Court.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Scope Protection Contract
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
