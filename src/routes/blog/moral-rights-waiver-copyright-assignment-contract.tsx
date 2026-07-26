import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Award,
  Scale,
  Briefcase,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What are Moral Rights (Droit Moral) in copyright law?",
    a: "Moral Rights are personal, non-economic rights retained by creators (authors, developers, designers) that protect their right to be identified as the creator (Right of Attribution) and to object to derogatory modifications or distortion of their work (Right of Integrity).",
  },
  {
    q: "How do Moral Rights differ from Economic Copyright Rights?",
    a: "Economic Copyright Rights grant financial ownership to copy, license, sell, or distribute a work. Moral Rights protect the creator's personal and artistic reputation. In many jurisdictions (such as the UK, EU, and Canada), Moral Rights do NOT automatically transfer when economic copyright is assigned.",
  },
  {
    q: "Why is a Moral Rights Waiver clause mandatory in software and creative contracts?",
    a: "Without an explicit written Moral Rights Waiver, a software developer or designer who assigned economic copyright could still legally object if the client modifies, refactors, white-labels, or re-brands the code/designs.",
  },
  {
    q: "Can Moral Rights be assigned or sold?",
    a: "In most international jurisdictions (including UK CDPA 1988 and civil law systems), Moral Rights cannot be assigned or sold to another party; they can ONLY be waived in writing by the original creator.",
  },
  {
    q: "How should a Moral Rights Waiver clause be drafted in B2B agreements?",
    a: "A standard Moral Rights Waiver clause states: 'Developer hereby irrevocably and unconditionally waives in favor of Client and its successors all moral rights, paternity rights, or integrity rights under Section 77 & 80 of the UK Copyright Act or equivalent international laws.'",
  },
  {
    q: "Does US copyright law recognize Moral Rights for software code?",
    a: "Under the US Visual Artists Rights Act (VARA), moral rights apply primarily to fine visual art. However, US courts recognize attribution rights under common law, making express Moral Rights Waiver clauses standard in all international software agreements.",
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
  dateModified: "2026-07-26",
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
            Moral Rights vs Copyright Assignment in Software & Creative Contracts
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word comprehensive intellectual property masterclass for software engineering firms, design agencies, and corporate clients on navigating Moral Rights, Right of Attribution, and irrevocable waiver clauses.
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
            <span>Executive Legal Summary: Economic vs Moral Rights</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">Economic Copyright Rights</strong>
              <p className="text-navy-100 leading-relaxed">
                Financial rights to copy, sell, license, publish, and monetize work. Freely transferable and assignable via written IP contract.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">Moral Rights (Droit Moral)</strong>
              <p className="text-navy-100 leading-relaxed">
                Personal, non-economic rights protecting creator attribution and preventing derogatory modification. Cannot be assigned; must be explicitly waived in writing.
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
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: The Hidden Trap in IP Contracts</a></li>
            <li><a href="#what-are-moral-rights" className="hover:text-gold-600 underline">2. What Are Moral Rights in International Law?</a></li>
            <li><a href="#attribution-and-integrity" className="hover:text-gold-600 underline">3. Right of Attribution vs Right of Integrity</a></li>
            <li><a href="#why-waivers-matter" className="hover:text-gold-600 underline">4. Why Moral Rights Waivers Are Mandatory for Software</a></li>
            <li><a href="#drafting-waiver-clause" className="hover:text-gold-600 underline">5. How to Draft an Irrevocable Moral Rights Waiver</a></li>
            <li><a href="#jurisdiction-variations" className="hover:text-gold-600 underline">6. Global Differences (UK vs US vs Civil Law EU)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: The Hidden Trap in IP Contracts
          </h2>
          <p>
            When a corporate buyer commissions custom software, UI design, or marketing content, their legal team ensures the contract contains a comprehensive <strong>Copyright Assignment Clause</strong>. They believe that acquiring economic copyright grants them 100% complete, unencumbered ownership of the work.
          </p>
          <p>
            However, in many international jurisdictions (including the UK, EU, and Commonwealth nations), assigning economic copyright does <em>not</em> extinguish the creator's <strong>Moral Rights</strong>. Without an express Moral Rights Waiver, the original developer or designer retains personal legal rights that can disrupt the buyer's commercial use of the code.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Core IP Law Rule:</strong>
            <p className="text-navy-900 text-sm">
              Economic copyright can be sold or assigned. Moral rights cannot be assigned or sold—they remain permanently attached to the author unless explicitly waived in writing.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="what-are-moral-rights" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. What Are Moral Rights in International Law?
          </h2>
          <p>
            Enshrined in Article 6bis of the <strong>Berne Convention for the Protection of Literary and Artistic Works</strong>, Moral Rights (derived from the French legal concept <em>Droit Moral</em>) protect the author’s personal and reputation connection to their work.
          </p>
        </div>

        {/* SECTION 3 */}
        <div id="attribution-and-integrity" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Right of Attribution vs Right of Integrity
          </h2>
          <p>
            Moral rights comprise two primary legal protections:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Right of Attribution (Paternity):</strong> The creator's legal right to be publicly identified as the author whenever the code or work is published or distributed.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Right of Integrity:</strong> The creator's legal right to object to any distortion, mutilation, or modification of the work that would be prejudicial to their honor or reputation.</span></li>
          </ul>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ IP CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Secure Full IP & Moral Rights Waivers with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts comprehensive IP Assignment Agreements with bulletproof Moral Rights Waiver provisions for tech agencies and software buyers across US, UK, UAE, and Pakistan.
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

        {/* SECTION 4 */}
        <div id="why-waivers-matter" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Why Moral Rights Waivers Are Mandatory for Software
          </h2>
          <p>
            In software development, refactoring code, white-labeling products, and deleting author comments from headers are standard practices.
          </p>
          <p>
            Without an express <strong>Moral Rights Waiver</strong>, an original software contractor could claim that refactoring their code or removing developer credits violates their statutory Right of Integrity or Right of Attribution, creating severe title defects during M&A due diligence.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="drafting-waiver-clause" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How to Draft an Irrevocable Moral Rights Waiver
          </h2>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Protective Moral Rights Waiver Wording:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "Developer hereby irrevocably and unconditionally waives, in favor of Client and its successors, assignees, and licensees, all moral rights, paternity rights, integrity rights, and similar non-economic rights recognized under Section 77 and Section 80 of the UK Copyright, Designs and Patents Act 1988 or under any equivalent statutory or common law in any jurisdiction worldwide."
            </p>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="jurisdiction-variations" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Global Differences (UK vs US vs Civil Law EU)
          </h2>
          <p>
            In the <strong>United Kingdom</strong> (CDPA 1988), moral rights exist automatically but can be waived in writing. In <strong>France and Germany</strong> (Civil Law), moral rights are strictly non-waivable, requiring contracts to include express consent to specific modifications. In the <strong>United States</strong>, VARA covers visual art, but express waivers remain standard for software.
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
            IP ASSIGNMENT & MORAL RIGHTS SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Draft Your IP Assignment & Waiver Agreement
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Economic copyright assignment clauses, Moral Rights Waivers, background code licensing, and Berne Convention IP compliance drafted by Advocate High Court.
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
