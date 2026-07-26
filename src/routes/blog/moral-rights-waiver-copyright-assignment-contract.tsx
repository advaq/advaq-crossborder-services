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
  Award,
  FileCheck,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What are Moral Rights (Droit Moral) in copyright law?",
    a: "Moral Rights are personal, non-economic rights retained by creators (authors, developers, designers) that protect their right to be identified as the creator (Right of Attribution) and to object to derogatory modifications of their work (Right of Integrity).",
  },
  {
    q: "How do Moral Rights differ from Economic Copyright Rights?",
    a: "Economic Copyright Rights grant financial ownership to copy, license, sell, or distribute a work. Moral Rights protect the creator's personal and artistic reputation, and in many jurisdictions (such as the UK, EU, and Canada), Moral Rights do NOT automatically transfer when economic copyright is assigned.",
  },
  {
    q: "Why is a Moral Rights Waiver clause mandatory in software and creative contracts?",
    a: "Without an explicit written Moral Rights Waiver, a software developer or designer who assigned economic copyright could still legally prevent the client from modifying, white-labeling, or re-branding the code/designs.",
  },
  {
    q: "Can Moral Rights be assigned or sold?",
    a: "In most jurisdictions (including UK and civil law countries), Moral Rights cannot be assigned or sold; they can ONLY be waived in writing by the creator.",
  },
  {
    q: "How should a Moral Rights Waiver clause be drafted in B2B agreements?",
    a: "A standard Moral Rights Waiver clause states: 'Developer hereby irrevocably and unconditionally waives in favor of Client all moral rights or similar rights under Section 77 & 80 of the UK Copyright Act or equivalent international laws.'",
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
  headline: "Moral Rights vs Copyright Assignment in Software & Creative Contracts",
  description:
    "Complete 2026 legal guide on Moral Rights (attribution & integrity), Economic Copyright Assignment, and Moral Rights Waiver clauses in software development and creative contracts.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/moral-rights-waiver-copyright-assignment-contract",
};

export const Route = createFileRoute("/blog/moral-rights-waiver-copyright-assignment-contract")({
  head: () => ({
    meta: [
      { title: "Moral Rights vs Copyright Assignment Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Moral Rights vs Copyright Assignment guide for software & creative contracts. Right of attribution, integrity, waiver clauses & international IP laws.",
      },
      {
        name: "keywords",
        content:
          "moral rights waiver copyright assignment contract, droit moral right of attribution integrity software, moral rights waiver clause uk copyright act section 77 80, ip assignment creative design software contract",
      },
      {
        property: "og:title",
        content: "Moral Rights vs Copyright Assignment in Software & Creative Contracts",
      },
      {
        property: "og:description",
        content:
          "Understand the critical legal distinction between economic copyright assignment and moral rights waivers in commercial contracts.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/moral-rights-waiver-copyright-assignment-contract" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/moral-rights-waiver-copyright-assignment-contract" }],
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
            Moral Rights vs Copyright Assignment in Software & Creative Contracts
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive intellectual property masterclass for software engineering firms, design agencies, and corporate clients on navigating Moral Rights, Right of Attribution, and irrevocable waiver clauses.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Copyright & IP Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Berne Convention & UK Copyright Act Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Economic Rights vs Moral Rights</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Economic Copyright Rights</strong>
              <p className="text-navy-100 leading-relaxed">
                Financial ownership to sell, license, copy, and monetize work. Can be transferred or assigned via contract.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Moral Rights (Droit Moral)</strong>
              <p className="text-navy-100 leading-relaxed">
                Personal right of attribution and integrity. Cannot be assigned; must be explicitly waived in writing.
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
            <li><a href="#what-are-moral-rights" className="hover:text-gold-600 underline">1. What Are Moral Rights in IP Law?</a></li>
            <li><a href="#attribution-and-integrity" className="hover:text-gold-600 underline">2. Right of Attribution vs Right of Integrity</a></li>
            <li><a href="#why-waivers-matter" className="hover:text-gold-600 underline">3. Why Moral Rights Waivers Are Essential in Tech Contracts</a></li>
            <li><a href="#drafting-waiver-clause" className="hover:text-gold-600 underline">4. How to Draft an Irrevocable Moral Rights Waiver</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-are-moral-rights" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Are Moral Rights in IP Law?
          </h2>
          <p>
            Originating from the Berne Convention, <strong>Moral Rights (Droit Moral)</strong> protect the non-economic personal connection between an author/creator and their work.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="attribution-and-integrity" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Right of Attribution vs Right of Integrity
          </h2>
          <p>
            The <strong>Right of Attribution</strong> requires naming the creator whenever code/design is used. The <strong>Right of Integrity</strong> prevents modifying or altering the work in ways prejudicial to creator honor.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ IP CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Secure Full IP & Moral Rights Waivers with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts comprehensive IP Assignment Agreements with bulletproof Moral Rights Waiver provisions for tech agencies and software buyers.
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
        <div id="why-waivers-matter" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Why Moral Rights Waivers Are Essential in Tech Contracts
          </h2>
          <p>
            If a client buys custom code without a Moral Rights Waiver, the original developer could legally object to code refactoring or removing their author comments.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="drafting-waiver-clause" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. How to Draft an Irrevocable Moral Rights Waiver
          </h2>
          <p>
            Ensure your contract explicitly states that developer "irrevocably and unconditionally waives all moral rights, paternity rights, and integrity rights in favor of Client and its successors."
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
            IP ASSIGNMENT & MORAL RIGHTS SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Draft Your IP Assignment & Waiver Agreement
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Economic copyright assignment clauses, Moral Rights Waivers, background code licensing, and Berne Convention IP compliance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/ip-assignment-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order IP Assignment Package
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
