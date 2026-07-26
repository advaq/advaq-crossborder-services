import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  FileCode,
  AlertTriangle,
  Scale,
  Briefcase,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Software Development Agreement?",
    a: "A Software Development Agreement is a legally binding commercial contract between a client and a software development agency establishing project scope, IP transfer conditions, milestone payment schedules, bug fix warranties, liability caps, and dispute resolution rules.",
  },
  {
    q: "When should Intellectual Property (IP) transfer to the client?",
    a: "Standard tech contract best practice dictates that title and copyright in custom code pass to the client ONLY upon receipt of full and final payment of all invoices. Until full payment is received, the agency retains complete ownership of the code.",
  },
  {
    q: "What is a Change Control / Scope Creep Clause in a software contract?",
    a: "A Change Control clause defines the formal procedure for requesting, pricing, and approving additions to original project specifications. It mandates that no out-of-scope work commences without a written Change Order Form signed by both parties specifying cost and schedule impacts.",
  },
  {
    q: "What warranty period should software agencies offer for bug fixes?",
    a: "Most dev agencies offer a 30-day to 90-day post-launch warranty limited strictly to fixing non-conformities against written functional specifications, excluding new feature requests, third-party API changes, or client server misconfigurations.",
  },
  {
    q: "Why is a Limitation of Liability clause essential for software agencies?",
    a: "A Limitation of Liability clause caps the maximum financial damages a client can claim against the agency (usually limited to actual fees paid under the specific contract in the preceding 6–12 months), protecting the agency from catastrophic indirect or lost profit claims.",
  },
  {
    q: "How should open-source libraries and pre-existing agency code be handled in a software contract?",
    a: "The contract must explicitly reserve the agency's ownership of pre-existing tools, libraries, and frameworks (Background IP). The client receives a non-exclusive, perpetual license to use the Background IP solely as integrated into the specific custom application.",
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
    "Complete legal risk checklist for custom software developers, mobile app agencies, and web dev firms. Learn 10 critical legal clauses for IP ownership, milestone payments, scope creep prevention, and liability caps.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
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
          "software development agreement checklist, dev agency contract template, ip assignment upon full payment clause, change request scope creep software contract, software warranty clause",
      },
      {
        property: "og:title",
        content: "Software Development Agreement Checklist: 10 Essential Clauses for Tech Agencies",
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
            Software Development Agreement Checklist: 10 Clauses Every Dev Agency Must Include
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word comprehensive legal risk checklist for custom software developers, mobile app agencies, and web engineering firms on drafting robust client contracts that prevent scope creep and secure payments.
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
            <span>Executive Legal Summary: The 10 Essential Dev Clauses</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-xs pt-2 text-navy-100">
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 1. IP Transfer Upon Full Payment</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 2. Deemed Milestone Acceptance (5-7 Days)</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 3. Formal Change Control Procedure</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 4. Background IP & Open-Source Carveouts</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 5. Financial Liability Cap (1x Fees Paid)</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 6. 30-to-90 Day Limited Bug Fix Warranty</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 7. Third-Party API Interruption Exemption</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 8. Late Payment Interest & Work Suspension</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 9. Source Code Escrow (Enterprise Only)</div>
            <div className="flex items-center gap-2"><Check size={14} className="text-gold-500" /> 10. Non-Solicitation of Engineers</div>
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
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: Why Custom Software Contracts Fail</a></li>
            <li><a href="#clause-1-ip" className="hover:text-gold-600 underline">2. Clause 1: IP Assignment Conditioned Upon Full Payment</a></li>
            <li><a href="#clause-2-acceptance" className="hover:text-gold-600 underline">3. Clause 2: Milestone Acceptance & Deemed Approval</a></li>
            <li><a href="#clause-3-scope" className="hover:text-gold-600 underline">4. Clause 3: Formal Change Control Procedure</a></li>
            <li><a href="#clause-4-background-ip" className="hover:text-gold-600 underline">5. Clause 4: Background IP & Open Source Reservations</a></li>
            <li><a href="#clause-5-liability" className="hover:text-gold-600 underline">6. Clause 5: Limitation of Financial Liability & Consequential Damages</a></li>
            <li><a href="#clause-6-warranty" className="hover:text-gold-600 underline">7. Clause 6: Limited Bug Fix Warranty vs Maintenance</a></li>
            <li><a href="#clause-7-third-party" className="hover:text-gold-600 underline">8. Clause 7: Third-Party API & Infrastructure Exemption</a></li>
            <li><a href="#remaining-clauses" className="hover:text-gold-600 underline">9. Clauses 8-10: Payment Suspension, Escrow & Non-Solicitation</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">10. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: Why Custom Software Development Contracts Fail
          </h2>
          <p>
            Building custom software is fundamentally different from selling physical goods or fixed consultancy services. Software projects are inherently iterative, technically complex, and heavily dependent on third-party APIs, evolving cloud infrastructure, and changing client requirements.
          </p>
          <p>
            When a software development agency uses an inadequate contract, small misaligned expectations rapidly turn into major legal disputes. The client refuses to pay the final milestone because they expect extra un-scoped features, while the agency faces cash flow paralysis and potential lawsuits over delayed launches.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Legal Reality:</strong>
            <p className="text-navy-900 text-sm">
              A well-drafted Software Development Agreement does not just protect you in court — it actively prevents disputes during the development lifecycle by establishing clear boundaries for code ownership, acceptance testing, and scope changes.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="clause-1-ip" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Clause 1: IP Assignment Conditioned Upon Full Payment
          </h2>
          <p>
            The most common legal mistake made by software agencies is drafting an IP assignment clause that automatically assigns code ownership to the client upon creation or signature. If the client subsequently defaults on payment, they still legally own the code you wrote, making repossession or code withholding legally complex.
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Protective IP Transfer Wording:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "Subject to the terms and conditions of this Agreement, Developer agrees that upon Client's complete, full, and final payment of all fees and invoices under the applicable Statement of Work, Developer shall assign to Client all right, title, and interest in and to the custom deliverables specifically created for Client under such Statement of Work."
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="clause-2-acceptance" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Clause 2: Milestone Acceptance & Deemed Approval
          </h2>
          <p>
            Without a strict milestone review window, clients often take 3 to 6 weeks to test a delivered staging build while developer teams sit idle or invoices remain unpaid. 
          </p>
          <p>
            Your agreement must specify a <strong>Deemed Acceptance Window</strong> (typically 5 to 7 business days). If the client does not submit a written rejection detailing reproducible non-conformities within 5 business days of delivery, the milestone is legally deemed accepted and the associated invoice becomes due.
          </p>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ LEGAL CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Custom Software Contracts Drafted for Your Agency
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            Protect your development business with Advocate-drafted B2B Software Development Agreements, milestone payment structures, and IP assignment deeds.
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

        {/* SECTION 4 */}
        <div id="clause-3-scope" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Clause 3: Formal Change Control Procedure
          </h2>
          <p>
            Scope creep is the single leading cause of agency project unprofitability. A robust software contract must mandate that any change, addition, or modification to original technical requirements requires a written Change Order Form signed by authorized representatives of both parties detailing fee adjustments and timeline extensions.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="clause-4-background-ip" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Clause 4: Background IP & Open Source Reservations
          </h2>
          <p>
            Agencies frequently reuse internal code libraries, UI component design systems, boilerplates, and open-source packages across multiple client projects.
          </p>
          <p>
            Your agreement must explicitly reserve ownership of the agency's <strong>Background IP</strong>. Rather than transferring ownership of pre-existing code, the client is granted a non-exclusive, perpetual, royalty-free license to run and modify the Background IP solely as integrated into their specific custom software build.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="clause-5-liability" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Clause 5: Limitation of Financial Liability & Consequential Damages
          </h2>
          <p>
            If a bug in an e-commerce platform causes a client to lose $500,000 in sales during a Black Friday promo, an agency without a liability cap could face company-ending litigation.
          </p>
          <p>
            Your contract must contain a strict <strong>Limitation of Liability Clause</strong> capping total legal exposure to actual fees paid under the specific contract in the preceding 6 or 12 months, and disclaiming all indirect, consequential, or lost revenue claims.
          </p>
        </div>

        {/* SECTION 7 */}
        <div id="clause-6-warranty" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Clause 6: Limited Bug Fix Warranty vs Maintenance Retainers
          </h2>
          <p>
            Clearly distinguish between a <strong>Bug Fix Warranty</strong> and an ongoing <strong>Maintenance Agreement</strong>. A standard warranty covers 30 to 90 days post-launch and is strictly limited to correcting reproducible code defects that violate written functional specs. It explicitly excludes new feature requests, server environment upgrades, or OS version updates.
          </p>
        </div>

        {/* SECTION 8 */}
        <div id="clause-7-third-party" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            8. Clause 7: Third-Party API & Infrastructure Exemption
          </h2>
          <p>
            Modern web applications rely heavily on external APIs (Stripe, OpenAI, AWS, Google Maps, Twilio). Your contract must state that the agency is not liable for software failures or delays caused by third-party API deprecation, outage, price hikes, or terms-of-service changes beyond the agency’s control.
          </p>
        </div>

        {/* SECTION 9 */}
        <div id="remaining-clauses" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            9. Clauses 8–10: Work Suspension, Source Code Escrow & Non-Solicitation
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="p-4 border border-border rounded-xl bg-off-white">
              <strong>Clause 8: Work Suspension for Non-Payment:</strong> Grants the agency the legal right to pause development, suspend staging server access, and halt deployment if an invoice is overdue by 10+ business days.
            </li>
            <li className="p-4 border border-border rounded-xl bg-off-white">
              <strong>Clause 9: Source Code Escrow (Enterprise Only):</strong> Defines rules for enterprise clients requesting source code release only in the event of formal agency insolvency or liquidation.
            </li>
            <li className="p-4 border border-border rounded-xl bg-off-white">
              <strong>Clause 10: Non-Solicitation of Engineering Staff:</strong> Prohibits clients from poaching agency software engineers or contractors during the contract and for 12 months thereafter, backed by liquidated damages.
            </li>
          </ul>
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
            SOFTWARE DEVELOPMENT CONTRACT SERVICES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Protect Your Software Agency Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Get bespoke Software Development Agreements drafted by Advocate High Court customized for US, UK, UAE, and cross-border IT consultancies.
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
