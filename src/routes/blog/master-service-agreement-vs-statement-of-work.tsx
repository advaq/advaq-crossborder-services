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
  Scale,
  Briefcase,
} from "lucide-react";

const faqs = [
  {
    q: "What is the main difference between a Master Service Agreement (MSA) and a Statement of Work (SOW)?",
    a: "An MSA is an overarching master contract governing the long-term legal relationship, liabilities, payment terms, and IP ownership between two companies. An SOW is a specific project addendum defining project deliverables, milestones, timelines, and pricing.",
  },
  {
    q: "Why do agencies use MSAs combined with SOWs instead of a single contract?",
    a: "Using an MSA + SOW structure eliminates the need to renegotiate legal terms (like indemnities and liability limits) for every new project. Once the MSA is signed, launching a new project simply requires signing a short SOW.",
  },
  {
    q: "Which document prevails if an MSA and SOW conflict?",
    a: "Standard legal practice specifies that the MSA terms govern unless the SOW explicitly states an intention to override a specific clause (e.g. customized payment milestones or specific IP license carve-outs).",
  },
  {
    q: "What key clauses must every agency Master Service Agreement contain?",
    a: "Essential MSA clauses include: (1) Intellectual Property Assignment, (2) Limitation of Liability, (3) Payment & Invoicing Terms, (4) Confidentiality & Non-Disclosure, (5) Termination & Suspension, and (6) Governing Law & Dispute Resolution.",
  },
  {
    q: "Can a client terminate an SOW without terminating the entire MSA?",
    a: "Yes. Well-drafted MSAs permit individual SOWs to be completed or cancelled without terminating the underlying master agreement, maintaining the overarching legal framework for future projects.",
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
  headline: "Master Service Agreement (MSA) vs Statement of Work (SOW): What's the Difference?",
  description:
    "Complete legal guide comparing Master Service Agreements (MSA) and Statements of Work (SOW) for digital agencies, IT vendors, and SaaS developers. Learn key clauses, structure, and conflict rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/master-service-agreement-vs-statement-of-work",
};

export const Route = createFileRoute("/blog/master-service-agreement-vs-statement-of-work")({
  head: () => ({
    meta: [
      { title: "MSA vs SOW Difference: Agency Contract Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Master Service Agreement (MSA) vs Statement of Work (SOW) guide for digital agencies & software houses. Key clauses, structure, conflict resolution & legal tips.",
      },
      {
        name: "keywords",
        content:
          "master service agreement vs statement of work, msa vs sow difference digital agency, software development msa sow template, limitation of liability msa clause agency",
      },
      {
        property: "og:title",
        content: "Master Service Agreement (MSA) vs Statement of Work (SOW): What's the Difference?",
      },
      {
        property: "og:description",
        content:
          "Master the legal structure of MSAs and SOWs to streamline client onboarding and protect your agency from liability.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/master-service-agreement-vs-statement-of-work" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/master-service-agreement-vs-statement-of-work" }],
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
            Master Service Agreement (MSA) vs Statement of Work (SOW): What's the Difference?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive contract drafting masterclass for digital agencies, IT consultancies, software houses, and freelancers on structuring Master Service Agreements alongside project Statements of Work.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Engineering Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>International Contract Law Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>MSA vs SOW Key Differences</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Master Service Agreement (MSA)</strong>
              <p className="text-navy-100 leading-relaxed">
                Establishes long-term legal relationship, IP ownership transfer, limitation of liability, payment terms, confidentiality, and governing jurisdiction.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Statement of Work (SOW)</strong>
              <p className="text-navy-100 leading-relaxed">
                Defines individual project scope, deliverables, acceptance criteria, milestone timelines, price, and specific client responsibilities.
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
            <li><a href="#what-is-msa" className="hover:text-gold-600 underline">1. What Is a Master Service Agreement (MSA)?</a></li>
            <li><a href="#what-is-sow" className="hover:text-gold-600 underline">2. What Is a Statement of Work (SOW)?</a></li>
            <li><a href="#side-by-side-comparison" className="hover:text-gold-600 underline">3. Side-by-Side Architectural Comparison</a></li>
            <li><a href="#conflict-resolution" className="hover:text-gold-600 underline">4. Resolving Conflicts Between MSA & SOW Terms</a></li>
            <li><a href="#best-practices" className="hover:text-gold-600 underline">5. Agency Best Practices for Drafting MSAs & SOWs</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-msa" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is a Master Service Agreement (MSA)?
          </h2>
          <p>
            A <strong>Master Service Agreement (MSA)</strong> serves as the legal foundation of a B2B commercial relationship. It outlines standard legal protections that apply across all future projects.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="what-is-sow" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. What Is a Statement of Work (SOW)?
          </h2>
          <p>
            A <strong>Statement of Work (SOW)</strong> is a project-specific addendum executed under the umbrella of an MSA. It details exact project scope, technical specifications, and delivery milestones.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ LEGAL CONTRACT DRAFTING
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Custom MSA & SOW Templates Drafted for Your Agency
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts bulletproof B2B Master Service Agreements and Statements of Work customized for US, UK, UAE, and cross-border tech agencies.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore MSA Drafting Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="side-by-side-comparison" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Side-by-Side Architectural Comparison
          </h2>
          <p>
            While the MSA regulates risk allocation, indemnity, and IP rights, the SOW focuses purely on tactical execution, deliverables, and fees.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="conflict-resolution" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Resolving Conflicts Between MSA & SOW Terms
          </h2>
          <p>
            Always include an Order of Precedence clause in your MSA. Standard clauses dictate that MSA legal terms supersede SOW provisions unless the SOW explicitly names the specific MSA clause it intends to modify.
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
            AGENCY LEGAL CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Protect Your Agency with Tailored MSAs & SOWs
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Custom B2B contract drafting, IP protection, liability cap structuring, and cross-border enforcement advisory.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order MSA & SOW Contract Package
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
