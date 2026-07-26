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
  FileCode2,
  Code2,
  Briefcase,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Software Development Agreement?",
    a: "A Software Development Agreement is a legally binding contract between a client and a software development agency establishing project scope, IP transfer conditions, payment milestones, bug fix warranties, and liability caps.",
  },
  {
    q: "When should Intellectual Property (IP) transfer to the client?",
    a: "Standard agency contract best practice dictates that IP rights transfer to the client ONLY upon receipt of full and final payment for the project.",
  },
  {
    q: "What is a Change Control / Scope Creep Clause in a software contract?",
    a: "A Change Control clause outlines the formal procedure for requesting, pricing, and approving additions to the original project scope, preventing clients from expecting unpaid feature additions.",
  },
  {
    q: "What warranty period should software agencies offer for bug fixes?",
    a: "Most dev agencies offer a 30-day to 90-day post-launch warranty limited strictly to fixing non-conformities against written functional specifications, excluding new feature requests or third-party API changes.",
  },
  {
    q: "Why is a Limitation of Liability clause essential for software agencies?",
    a: "A Limitation of Liability clause caps the maximum financial damages a client can claim against the agency (usually capped at fees paid in the last 6-12 months), protecting the agency from catastrophic indirect loss claims.",
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
  headline: "Software Development Agreement Checklist: 10 Clauses Every Dev Agency Must Include",
  description:
    "Complete 2026 contract drafting checklist for software development agencies and IT freelancers. Learn 10 essential legal clauses for IP ownership, payment milestones, scope creep prevention, and liability caps.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/software-development-agreement-checklist",
};

export const Route = createFileRoute("/blog/software-development-agreement-checklist")({
  head: () => ({
    meta: [
      { title: "Software Development Agreement Checklist (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Software Development Agreement checklist for dev agencies. 10 essential clauses for IP transfer, milestone payments, bug fix warranties & liability caps.",
      },
      {
        name: "keywords",
        content:
          "software development agreement checklist, dev agency contract template, ip assignment upon full payment clause, change request scope creep software contract",
      },
      {
        property: "og:title",
        content: "Software Development Agreement Checklist: 10 Clauses Every Dev Agency Must Include",
      },
      {
        property: "og:description",
        content:
          "Protect your software agency with 10 critical legal clauses for custom development contracts.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/software-development-agreement-checklist" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/software-development-agreement-checklist" }],
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
            Software Development Agreement Checklist: 10 Clauses Every Dev Agency Must Include
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal risk checklist for custom software developers, mobile app agencies, and web development firms on drafting robust client contracts that prevent scope creep and secure payments.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Tech Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Software IP & Tech Licensing Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>The 10 Essential Dev Clauses</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-xs pt-2 text-navy-100">
            <div>1. IP Transfer Upon Full Payment</div>
            <div>2. Milestone Acceptance Window (5–10 days)</div>
            <div>3. Formal Change Control Procedure</div>
            <div>4. Pre-Existing Code & Open Source Carve-outs</div>
            <div>5. Limitation of Financial Liability</div>
            <div>6. 30-Day Limited Warranty</div>
            <div>7. Third-Party API Interruption Exemption</div>
            <div>8. Late Payment & Interest Penalties</div>
            <div>9. Source Code Escrow (if applicable)</div>
            <div>10. Non-Solicitation of Engineers</div>
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
            <li><a href="#ip-transfer" className="hover:text-gold-600 underline">1. IP Assignment Conditioned Upon Full Payment</a></li>
            <li><a href="#milestone-acceptance" className="hover:text-gold-600 underline">2. Acceptance Testing & Deemed Acceptance Windows</a></li>
            <li><a href="#change-control" className="hover:text-gold-600 underline">3. Change Request & Scope Creep Protection</a></li>
            <li><a href="#liability-caps" className="hover:text-gold-600 underline">4. Limitation of Liability & Consequential Damage Caps</a></li>
            <li><a href="#warranty-limits" className="hover:text-gold-600 underline">5. Bug Fix Warranties vs Maintenance Retainers</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="ip-transfer" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. IP Assignment Conditioned Upon Full Payment
          </h2>
          <p>
            Never grant unconditional IP assignment upon signing. Ensure your contract specifies that title and copyright in custom code pass to the client only after full payment of all invoices.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="milestone-acceptance" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Acceptance Testing & Deemed Acceptance Windows
          </h2>
          <p>
            Include a "deemed acceptance" rule stating that if the client does not provide written feedback within 7 business days of milestone delivery, the milestone is deemed accepted and invoice payable.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SOFTWARE DEVELOPMENT CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Custom Software Development Agreements with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts bespoke Software Development Agreements for dev agencies, SaaS builders, and mobile app studios protecting IP and payment streams.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/software-development-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Software Contract Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="change-control" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Change Request & Scope Creep Protection
          </h2>
          <p>
            Define a formal Change Order process requiring written agreement on cost and timeline adjustments prior to starting out-of-scope work.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="liability-caps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Limitation of Liability & Consequential Damage Caps
          </h2>
          <p>
            Cap agency financial exposure to the total fees paid under the specific SOW, and disclaim indirect, punitive, or lost profit damages.
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
            SOFTWARE CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Draft Your Software Contract Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            IP transfer clauses, milestone payment terms, change order rules, and liability limitation clauses.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/software-development-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Software Development Agreement
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
