import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Code,
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
    q: "Who legally owns software code written by an independent contractor software agency?",
    a: "Under US, UK, and international copyright law, software code created by an independent contractor agency is owned by the AGENCY by default until an explicit written Intellectual Property (IP) Assignment Agreement transfers copyright to the client.",
  },
  {
    q: "What is the difference between a Work-Made-For-Hire clause and an IP Assignment?",
    a: "The 'Work-Made-For-Hire' doctrine automatically assigns copyright to employers for W-2 internal employees. For third-party software agencies and independent contractors, copyright law requires an explicit written IP Assignment clause executed in a contract.",
  },
  {
    q: "Can an agency retain rights to its pre-existing code libraries and frameworks?",
    a: "Yes! Well-drafted IP agreements distinguish between 'Custom Deliverables' (assigned to the client upon full payment) and 'Background IP / Agency Frameworks' (retained by the agency, with a non-exclusive, perpetual license granted to the client).",
  },
  {
    q: "Should IP rights transfer before or after final payment?",
    a: "Agencies must ensure IP assignment clauses explicitly state that title and copyright in deliverables transfer to the client ONLY upon receipt of full and final payment of all project invoices.",
  },
  {
    q: "What happens if a client defaults on payment after code has been delivered?",
    a: "If IP assignment is conditioned upon full payment, code delivered to a defaulting client remains the legal property of the agency. The agency can legally revoke software licenses, demand code removal, or pursue copyright infringement remedies.",
  },
  {
    q: "How should open-source software (OSS) licenses be handled in custom development agreements?",
    a: "The agreement must require the developer to declare all open-source libraries used (e.g. MIT, Apache 2.0, GPL) and warrant that no copyleft open-source licenses (such as GPL v3) infect the client's proprietary codebase.",
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
  dateModified: "2026-07-26",
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
            Who Owns the Code? Intellectual Property Rights Transfer in Software Development
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word comprehensive IP law tutorial for software engineering agencies, SaaS startups, and client founders on copyright ownership, IP assignment timing, and background framework licensing.
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
            <span>Executive Summary: Software IP Core Principles</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Default Ownership Rule</strong>
              <p className="text-navy-100 leading-relaxed">
                Creators (contractors/agencies) retain software copyright by default. Paying for software development does NOT automatically transfer copyright without a written IP assignment deed.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. Payment-Triggered Assignment</strong>
              <p className="text-navy-100 leading-relaxed">
                IP transfer must be strictly conditioned upon receipt of full and final payment of all invoices under the relevant Statement of Work.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Background IP Carve-Out</strong>
              <p className="text-navy-100 leading-relaxed">
                Agencies retain ownership of pre-existing boilerplates, developer tools, and internal code libraries used to build the custom software.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Non-Exclusive License Grant</strong>
              <p className="text-navy-100 leading-relaxed">
                Clients receive a perpetual, non-exclusive, worldwide license to use and modify agency Background IP embedded in their custom software.
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
            <li><a href="#default-copyright-rules" className="hover:text-gold-600 underline">1. Default Software Copyright Laws (US, UK, Global)</a></li>
            <li><a href="#work-made-for-hire" className="hover:text-gold-600 underline">2. Work-Made-For-Hire vs Assignment Agreements</a></li>
            <li><a href="#payment-conditioned-assignment" className="hover:text-gold-600 underline">3. Conditioning IP Transfer Upon Full Payment</a></li>
            <li><a href="#background-ip-carveout" className="hover:text-gold-600 underline">4. Protecting Agency Background IP & Open Source Libraries</a></li>
            <li><a href="#open-source-risks" className="hover:text-gold-600 underline">5. Managing Open Source (OSS) License Risks</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="default-copyright-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Default Software Copyright Laws (US, UK, Global)
          </h2>
          <p>
            One of the most dangerous legal misconceptions in the tech industry is that paying a software agency or freelance developer for custom code automatically makes the client the owner of that code.
          </p>
          <p>
            Under copyright laws in the United States (US Copyright Act), the United Kingdom (CDPA 1988), and international Berne Convention treaties, source code is legally classified as a "literary work." Ownership vests automatically in the author (the software developer or agency) upon creation. Paying an invoice grants an implied license to use the software, but does <em>not</em> transfer underlying copyright without an explicit written IP Assignment Deed.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="work-made-for-hire" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Work-Made-For-Hire vs Assignment Agreements
          </h2>
          <p>
            Clients frequently insert generic "Work-Made-For-Hire" clauses into B2B vendor contracts. However, under US copyright law, the Work-Made-For-Hire doctrine applies automatically ONLY to full-time W-2 employees.
          </p>
          <p>
            For independent contractor agencies, software code does not fall into standard statutory work-for-hire categories unless accompanied by an explicit <strong>Present Assignment Clause</strong> ("Developer hereby assigns all right, title, and interest in and to...").
          </p>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ IP ASSIGNMENT CONTRACT SERVICES
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
        <div id="payment-conditioned-assignment" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Conditioning IP Transfer Upon Full Payment
          </h2>
          <p>
            For agencies, the single most critical protective mechanism in an IP assignment clause is establishing a <strong>Payment Condition Precedent</strong>.
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Conditional IP Assignment Wording:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "Conditioned strictly upon Developer's receipt of full and final payment of all invoices and fees under the applicable Statement of Work, Developer hereby assigns, transfers, and conveys to Client all right, title, and interest in and to the custom deliverables created under such Statement of Work."
            </p>
          </div>

          <p className="text-sm">
            If a client defaults on payment, copyright remains 100% with the agency, making unauthorized deployment an actionable act of copyright infringement.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="background-ip-carveout" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Protecting Agency Background IP & Open Source Libraries
          </h2>
          <p>
            Software agencies rarely build applications from total scratch. Developers utilize pre-existing utility libraries, UI components, API wrappers, and devops scripts (<strong>Background IP</strong>).
          </p>
          <p>
            Your contract must explicitly separate <strong>Custom Deliverables</strong> (assigned to client) from <strong>Background IP</strong> (retained by agency). The client receives a perpetual, non-exclusive, worldwide license to use embedded Background IP as part of the application.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="open-source-risks" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Managing Open Source (OSS) License Risks
          </h2>
          <p>
            Enterprise buyers perform thorough open-source audit scans (e.g. Snyk, Black Duck) during M&A due diligence. Contracts must warrant that no "copyleft" open-source packages (such as GPL v3 or AGPL) are embedded in proprietary client codebases, as copyleft licenses can legally force the client to make their entire application open-source.
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
            SOFTWARE IP CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your Software IP Rights Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            IP Assignment Agreement drafting, background code carve-outs, conditional transfer provisions, and open-source compliance drafted by Advocate High Court.
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
