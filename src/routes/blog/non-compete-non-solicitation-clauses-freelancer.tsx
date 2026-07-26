import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Lock,
  Scale,
  Briefcase,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "Are Non-Compete clauses legally enforceable in independent contractor agreements?",
    a: "Non-compete clauses for independent contractors face extreme legal scrutiny worldwide. In many jurisdictions (such as California, FTC US regulations, and UK restraint of trade principles), blanket non-competes against independent contractors are void or illegal. Instead, tech agencies rely on enforceable Non-Solicitation clauses.",
  },
  {
    q: "What is the primary difference between a Non-Compete clause and a Non-Solicitation clause?",
    a: "A Non-Compete clause attempts to prohibit a worker from operating anywhere in the same industry. A Non-Solicitation clause permits the contractor to work in the industry but prohibits them from soliciting or poaching your specific company clients or employees.",
  },
  {
    q: "Can an agency enforce a Non-Solicitation clause against a remote freelancer abroad?",
    a: "Yes! Non-solicitation clauses protecting company client accounts and business relationships are widely recognized and enforceable internationally, provided the duration (e.g. 12 months) and scope are reasonable.",
  },
  {
    q: "What happens if a contractor agreement contains an overly broad non-compete clause?",
    a: "An overly broad non-compete clause can increase worker misclassification risk (by demonstrating excessive employer control) and may render the entire covenant void under local labor laws.",
  },
  {
    q: "How should a Non-Solicitation of Clients clause be drafted for a tech agency?",
    a: "Draft the clause to specifically prohibit the contractor from soliciting, performing services for, or accepting business from any agency clients with whom the contractor interacted during their engagement for a 12-month period post-termination.",
  },
  {
    q: "What is a liquidated damages provision in a non-solicitation agreement?",
    a: "A liquidated damages provision sets a pre-agreed financial penalty (e.g., 50% of annual account revenue) payable if a contractor breaches the non-solicitation covenant by poaching an agency client.",
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
  dateModified: "2026-07-26",
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
            Non-Compete & Non-Solicitation Clauses in Contractor Contracts (Legality Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word practical legal analysis for digital agencies, IT consultancies, and remote tech companies on protecting client accounts, avoiding illegal non-competes, and enforcing non-solicitation covenants.
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
            <span>Executive Legal Summary: Key Restraint Differences</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">Non-Compete Clauses</strong>
              <p className="text-navy-100 leading-relaxed">
                Attempts to block a contractor from working in an entire sector. Severely restricted or illegal under US FTC rules and UK restraint of trade principles.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">Non-Solicitation Clauses</strong>
              <p className="text-navy-100 leading-relaxed">
                Widely enforceable worldwide. Prohibits contractors from poaching company clients or colleagues for a reasonable period (e.g. 12 months post-contract).
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
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: Restraint of Trade Principles</a></li>
            <li><a href="#non-compete-vs-non-solicitation" className="hover:text-gold-600 underline">2. Non-Compete vs Non-Solicitation Legal Distinctions</a></li>
            <li><a href="#ftc-rules" className="hover:text-gold-600 underline">3. FTC Non-Compete Regulations & Global Banning Trends</a></li>
            <li><a href="#client-poaching-protection" className="hover:text-gold-600 underline">4. Protecting Agency Client Accounts Legally</a></li>
            <li><a href="#drafting-enforceable-clauses" className="hover:text-gold-600 underline">5. How to Draft Enforceable Non-Solicitation Clauses</a></li>
            <li><a href="#liquidated-damages" className="hover:text-gold-600 underline">6. Liquidated Damages & Enforcement Remedies</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: Restraint of Trade Principles in Contractor Agreements
          </h2>
          <p>
            When a digital agency or software consultancy places a freelance developer or project manager onto a high-value client account, a major fear is client poaching: the freelancer cutting out the agency and contracting directly with the client at a lower rate.
          </p>
          <p>
            To prevent this, agency founders frequently insert restrictive covenants into contractor agreements. However, using poorly drafted <strong>Non-Compete clauses</strong> can violate international restraint of trade laws and invalidate contractor status during tax audits.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Core Legal Rule:</strong>
            <p className="text-navy-900 text-sm">
              Courts will not enforce a clause that prevents an independent contractor from earning a living in their profession. Restraints must be strictly limited to protecting legitimate business interests—specifically existing client relationships.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="non-compete-vs-non-solicitation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Non-Compete vs Non-Solicitation Legal Distinctions
          </h2>
          <p>
            Understanding the distinction between these two covenants is vital for agency risk management:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={16} /> <span><strong>Non-Compete Covenant:</strong> Attempts to ban a contractor from performing web development or marketing services for <em>any competitor</em> in a geographic region. Highly unenforceable for independent contractors.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Non-Solicitation Covenant:</strong> Permits the contractor to work freely in the industry, but prohibits them from soliciting, pitching, or accepting work from <em>your agency's specific clients</em>. Highly enforceable.</span></li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div id="ftc-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. FTC Non-Compete Regulations & Global Banning Trends
          </h2>
          <p>
            Regulatory bodies worldwide are cracking down on non-compete clauses. The US Federal Trade Commission (FTC) passed comprehensive rules classifying worker non-competes as unfair methods of competition.
          </p>
          <p>
            Furthermore, states like California explicitly declare all employment and contractor non-competes void (Cal. Bus. & Prof. Code § 16600). Agencies relying on non-compete clauses face immediate court dismissal of their claims.
          </p>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ CONTRACTOR LEGAL SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Protect Agency Client Accounts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts enforceable Independent Contractor Agreements featuring compliant non-solicitation and client anti-poaching covenants for agencies in US, UK, UAE, and Pakistan.
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

        {/* SECTION 4 */}
        <div id="client-poaching-protection" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Protecting Agency Client Accounts Legally
          </h2>
          <p>
            To legally protect your agency from client poaching, enforce a narrow, targeted <strong>Client Non-Solicitation Covenant</strong>:
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Protective Non-Solicitation Wording:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "During the term of this Agreement and for a period of twelve (12) months following its termination for any reason, Contractor agrees that Contractor shall not, directly or indirectly, solicit, divert, perform services for, or accept business from any client of Agency with whom Contractor had direct contact or performed work for under this Agreement."
            </p>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="drafting-enforceable-clauses" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How to Draft Enforceable Non-Solicitation Clauses
          </h2>
          <p>
            To ensure your non-solicitation clause withstands judicial review in US, UK, or international courts:
          </p>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Limit Duration to 12 Months:</strong> Courts view 12-month post-contract restraints as reasonable; multi-year bans are frequently thrown out.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Restrict Scope to Interacted Clients:</strong> Limit the non-solicitation strictly to clients the contractor actually interacted with during their engagement.</span></li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="liquidated-damages" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Liquidated Damages & Enforcement Remedies
          </h2>
          <p>
            Measuring exact financial damages when a client is poached can be complex. Incorporating a pre-agreed <strong>Liquidated Damages Clause</strong> (e.g. 50% of gross revenue earned from the poached client during the subsequent 12 months) creates an immediate, clear financial remedy without requiring lengthy accounting discovery.
          </p>
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
            CONTRACTOR RESTRAINT OF TRADE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your Client Relationships Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Non-solicitation clauses, anti-poaching agreements, FTC-compliant contractor contracts, and client account protection templates drafted by Advocate High Court.
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
