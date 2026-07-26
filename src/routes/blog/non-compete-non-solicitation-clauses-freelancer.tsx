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
  Lock,
  Scale,
  ShieldAlert,
} from "lucide-react";

const faqs = [
  {
    q: "Are Non-Compete clauses legally enforceable in independent contractor agreements?",
    a: "Non-compete clauses for independent contractors face severe legal scrutiny. In many jurisdictions (like California, FTC US rules, and UK restraint of trade principles), blanket non-competes against independent contractors are void or illegal. Instead, companies rely on enforceability of Non-Solicitation clauses.",
  },
  {
    q: "What is the difference between a Non-Compete clause and a Non-Solicitation clause?",
    a: "A Non-Compete prohibits a worker from operating in the same industry. A Non-Solicitation clause allows the contractor to work in the industry but prohibits them from soliciting or poaching your specific company clients or employees.",
  },
  {
    q: "Can a client enforce a Non-Solicitation clause against a remote freelancer abroad?",
    a: "Yes! Non-solicitation clauses protecting company client accounts are widely recognized and enforceable internationally, provided the duration (e.g. 12 months) and scope are reasonable.",
  },
  {
    q: "What happens if a contractor agreement contains an overly broad non-compete?",
    a: "An overly broad non-compete can increase misclassification risk (proving economic dependence and control) and may render the entire clause unenforceable under local labor laws.",
  },
  {
    q: "How should a Non-Solicitation of Clients clause be drafted for a tech agency?",
    a: "Draft the clause to specifically prohibit the contractor from soliciting, accepting business from, or diverting any clients with whom the contractor interacted during their agency engagement for a 12-month period post-termination.",
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
  headline: "Non-Compete & Non-Solicitation Clauses in Contractor Contracts (Legality Guide)",
  description:
    "Complete legal guide on Non-Compete and Non-Solicitation clauses in freelancer & independent contractor contracts. Learn enforceability limits, FTC non-compete rules, and client poaching protection.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/non-compete-non-solicitation-clauses-freelancer",
};

export const Route = createFileRoute("/blog/non-compete-non-solicitation-clauses-freelancer")({
  head: () => ({
    meta: [
      { title: "Non-Compete & Non-Solicitation Contractor Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Non-compete & non-solicitation clauses in contractor agreements guide. Legal enforceability, FTC non-compete bans, client poaching protection & duration caps.",
      },
      {
        name: "keywords",
        content:
          "non compete non solicitation clauses freelancer, independent contractor non solicitation clause legal, ftc non compete ban agency contractor, client poaching protection remote developer contract",
      },
      {
        property: "og:title",
        content: "Non-Compete & Non-Solicitation Clauses in Contractor Contracts (Legality Guide)",
      },
      {
        property: "og:description",
        content:
          "Protect your agency client accounts without violating FTC rules or invalidating contractor status.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/non-compete-non-solicitation-clauses-freelancer" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/non-compete-non-solicitation-clauses-freelancer" }],
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
            Non-Compete & Non-Solicitation Clauses in Contractor Contracts (Legality Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical legal analysis for digital agencies, IT consultancies, and remote tech companies on protecting client accounts, avoiding illegal non-competes, and enforcing non-solicitation covenants.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Restraint of Trade Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FTC & International Restraint of Trade Law</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Key Restraint Differences</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Non-Compete Clauses</strong>
              <p className="text-navy-100 leading-relaxed">
                Severely restricted or banned in many jurisdictions for contractors. Risks triggering misclassification audits.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Non-Solicitation Clauses</strong>
              <p className="text-navy-100 leading-relaxed">
                Widely enforceable. Prohibits contractors from poaching company clients or colleagues for a reasonable period (e.g., 12 months).
              </p>
            </div>
          </div>
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
            <li><a href="#non-compete-vs-non-solicitation" className="hover:text-gold-600 underline">1. Non-Compete vs Non-Solicitation Legal Distinctions</a></li>
            <li><a href="#ftc-rules-and-global-bans" className="hover:text-gold-600 underline">2. FTC Regulations & Global Restraint Trends</a></li>
            <li><a href="#client-poaching-protection" className="hover:text-gold-600 underline">3. Protecting Agency Client Accounts Legally</a></li>
            <li><a href="#drafting-enforceable-clauses" className="hover:text-gold-600 underline">4. How to Draft Enforceable Non-Solicitation Clauses</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="non-compete-vs-non-solicitation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Non-Compete vs Non-Solicitation Legal Distinctions
          </h2>
          <p>
            While non-compete clauses attempt to block workers from working in an entire industry, non-solicitation clauses protect specific commercial assets—namely, your agency's clients and team members.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="ftc-rules-and-global-bans" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. FTC Regulations & Global Restraint Trends
          </h2>
          <p>
            Recent regulatory actions by the US FTC and state legislatures (e.g. California, New York) heavily restrict non-compete agreements. Overseas agencies must ensure their contracts rely on enforceable non-solicitation protections.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            CONTRACTOR LEGAL SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Protect Agency Client Accounts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts enforceable Independent Contractor Agreements featuring compliant non-solicitation and client anti-poaching covenants.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/independent-contractor-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Contractor Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="client-poaching-protection" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Protecting Agency Client Accounts Legally
          </h2>
          <p>
            When contractors work directly on client accounts, explicit non-solicitation clauses prevent them from cutting out the agency and taking the client account directly.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="drafting-enforceable-clauses" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. How to Draft Enforceable Non-Solicitation Clauses
          </h2>
          <p>
            Ensure your non-solicitation clause includes reasonable duration limits (e.g. 12 months) and clearly defines "prohibited solicitation" without placing an illegal restraint on trade.
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
            CONTRACTOR RESTRAINT OF TRADE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your Client Relationships Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Non-solicitation clauses, anti-poaching agreements, FTC-compliant contractor contracts, and client account protection templates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/independent-contractor-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Non-Solicitation Package
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
