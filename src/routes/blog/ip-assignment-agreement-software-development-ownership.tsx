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
  Code,
  Lock,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "Who legally owns software code written by an independent contractor software agency?",
    a: "Under US, UK, and international copyright law, software created by an independent contractor agency is owned by the AGENCY until an explicit written Intellectual Property (IP) Assignment Agreement transfers ownership to the client.",
  },
  {
    q: "What is the difference between a Work-Made-For-Hire clause and an IP Assignment?",
    a: "A 'Work-Made-For-Hire' doctrine automatically assigns copyright to employers for internal employees. For independent contractor software agencies, copyright law requires an explicit written IP Assignment clause executed in a contract.",
  },
  {
    q: "Can an agency retain rights to its pre-existing code libraries and frameworks?",
    a: "Yes! Well-drafted IP clauses distinguish between 'Custom Deliverables' (assigned to the client) and 'Background IP / Agency Frameworks' (retained by agency, with a non-exclusive license granted to client).",
  },
  {
    q: "Should IP rights transfer before or after final payment?",
    a: "Agencies must ensure IP assignment clauses explicitly state that IP ownership transfers to the client ONLY upon receipt of full and final payment.",
  },
  {
    q: "What happens if a client defaults on payment after code has been delivered?",
    a: "If IP assignment is conditioned upon full payment, code delivered to a defaulting client remains the legal property of the agency, allowing the agency to revoke software licenses or pursue copyright infringement remedies.",
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
  headline: "Who Owns the Code? Intellectual Property Rights Transfer in Software Development",
  description:
    "Complete legal guide on software ownership, Work-Made-For-Hire rules, IP Assignment Agreements, and background framework licensing for dev agencies and tech clients.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/ip-assignment-agreement-software-development-ownership",
};

export const Route = createFileRoute("/blog/ip-assignment-agreement-software-development-ownership")({
  head: () => ({
    meta: [
      { title: "Software IP Ownership & Code Assignment Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Who owns software code? IP assignment agreement guide for dev agencies & tech clients. Work-for-hire rules, background code carve-outs & payment-triggered transfer.",
      },
      {
        name: "keywords",
        content:
          "ip assignment agreement software development ownership, who owns code independent contractor agency, work made for hire software copyright law, background ip pre-existing framework license software contract",
      },
      {
        property: "og:title",
        content: "Who Owns the Code? Intellectual Property Rights Transfer in Software Development",
      },
      {
        property: "og:description",
        content:
          "Master software copyright ownership, IP assignment clauses, and pre-existing code protections in software development contracts.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/ip-assignment-agreement-software-development-ownership" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/ip-assignment-agreement-software-development-ownership" }],
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
            Who Owns the Code? Intellectual Property Rights Transfer in Software Development
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive IP law tutorial for software engineering agencies, SaaS startups, and client founders on copyright ownership, IP assignment timing, and background framework licensing.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ IP Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>International Copyright Law Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Software IP Core Principles</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Default Ownership:</strong> Creators (contractors) own software copyright by default unless assigned in writing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Payment Condition:</strong> IP assignment must be strictly conditioned upon full receipt of project fees.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Background IP Carve-Out:</strong> Agency retains ownership of internal toolkits, boilerplate code, and frameworks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Non-Exclusive License:</strong> Client receives perpetual non-exclusive license to use agency background code embedded in final software.</span>
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
            <li><a href="#default-copyright-rules" className="hover:text-gold-600 underline">1. Default Software Copyright Laws (US, UK, Global)</a></li>
            <li><a href="#work-made-for-hire" className="hover:text-gold-600 underline">2. Work-Made-For-Hire vs Assignment Agreements</a></li>
            <li><a href="#payment-conditioned-assignment" className="hover:text-gold-600 underline">3. Conditioning IP Transfer Upon Full Payment</a></li>
            <li><a href="#background-ip-carveout" className="hover:text-gold-600 underline">4. Protecting Agency Background IP & Open Source Libraries</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="default-copyright-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Default Software Copyright Laws (US, UK, Global)
          </h2>
          <p>
            Many clients mistakenly assume that paying an agency for software development automatically transfers code copyright. Under international copyright law, the author retains copyright until an explicit written assignment is executed.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="work-made-for-hire" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Work-Made-For-Hire vs Assignment Agreements
          </h2>
          <p>
            Work-Made-For-Hire doctrines apply to W-2 employees. For third-party B2B agencies and contractors, contracts must include an explicit Present Assignment clause ("Developer hereby assigns...").
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            IP ASSIGNMENT CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Bulletproof IP Assignment Agreements with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts IP Assignment Agreements and Software Ownership clauses tailored to protect agency background code while providing clients clean title upon full payment.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/ip-assignment-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order IP Assignment Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="payment-conditioned-assignment" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Conditioning IP Transfer Upon Full Payment
          </h2>
          <p>
            Structure IP transfer clauses to state that ownership transfers to the client "contingent upon, and subject to, Client's payment in full of all fees owed."
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="background-ip-carveout" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Protecting Agency Background IP & Open Source Libraries
          </h2>
          <p>
            Explicitly carve out agency pre-existing frameworks, utilities, and open source components from the assignment, granting clients a perpetual non-exclusive license instead.
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
            SOFTWARE IP CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your Software IP Rights
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            IP Assignment Agreement drafting, background code carve-outs, conditional transfer provisions, and open-source compliance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/ip-assignment-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order IP Assignment Agreement
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
