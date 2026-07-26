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
  ShieldCheck,
  Lock,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Terms of Service (ToS) agreement for SaaS applications?",
    a: "A Terms of Service (also known as Terms of Use or Terms & Conditions) is a legal contract governing user access, account rules, acceptable use policies, subscription billing, IP licensing, and liability limits on a SaaS application or website.",
  },
  {
    q: "What essential clauses must every SaaS Terms of Service agreement include?",
    a: "Core SaaS ToS clauses include: (1) Account Registration & Eligibility, (2) Subscription Billing & Auto-Renewal Terms, (3) Acceptable Use Policy (AUP), (4) Intellectual Property Ownership, (5) Limitation of Liability & Warranty Disclaimers, and (6) Dispute Resolution & Class Action Waivers.",
  },
  {
    q: "How does a Limitation of Liability clause protect SaaS founders?",
    a: "A Limitation of Liability clause caps the maximum financial damages a user can recover from the SaaS company (usually capped at total fees paid in the last 12 months or $100), shielding the company from catastrophic indirect or lost profit claims.",
  },
  {
    q: "What is a Class Action Waiver clause in SaaS Terms of Service?",
    a: "A Class Action Waiver obligates users to resolve disputes individually through binding arbitration rather than joining collective class action lawsuits, preventing massive class litigation risks.",
  },
  {
    q: "How can SaaS platforms ensure their Terms of Service are legally binding?",
    a: "Enforce 'Clickwrap' consent where users must actively check a box agreeing to the Terms of Service during account creation or checkout, rather than relying on passive footer links ('Browsewrap').",
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
  headline: "Terms of Service Checklist for SaaS Apps & Digital Platforms (Liability Caps)",
  description:
    "Complete 2026 legal guide on Terms of Service for SaaS startups and web applications. Learn essential clauses, clickwrap consent rules, subscription auto-renewal, and liability limitation caps.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/terms-of-service-checklist-saas-website",
};

export const Route = createFileRoute("/blog/terms-of-service-checklist-saas-website")({
  head: () => ({
    meta: [
      { title: "Terms of Service Checklist SaaS App (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Terms of Service checklist for SaaS apps & digital platforms. Limitation of liability caps, clickwrap consent, subscription billing & class action waivers.",
      },
      {
        name: "keywords",
        content:
          "terms of service checklist saas website, saas limitation of liability cap clause, clickwrap consent vs browsewrap terms of use, saas subscription auto renewal rules arbitration clause",
      },
      {
        property: "og:title",
        content: "Terms of Service Checklist for SaaS Apps & Digital Platforms (Liability Caps)",
      },
      {
        property: "og:description",
        content:
          "Protect your SaaS business from user liability, platform abuse, and class action lawsuits with custom Terms of Service.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/terms-of-service-checklist-saas-website" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/terms-of-service-checklist-saas-website" }],
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
            Terms of Service Checklist for SaaS Apps & Digital Platforms (Liability Caps)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal engineering tutorial for SaaS founders, app developers, and digital platform owners on drafting enforceable Terms of Service, Acceptable Use Policies, and liability caps.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ SaaS Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SaaS Compliance & Clickwrap Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>SaaS Terms Checklist Pillars</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Clickwrap Enforcement:</strong> Require active checkbox consent during registration/checkout.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Limitation of Liability Cap:</strong> Cap financial exposure at fees paid in the last 12 months.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Acceptable Use Policy:</strong> Strict ban on scrapers, reverse engineering, and abusive API calls.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Auto-Renewal Disclosure:</strong> Clear subscription terms complying with US ROSCA and EU laws.</span>
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
            <li><a href="#why-saas-terms-matter" className="hover:text-gold-600 underline">1. Why SaaS Terms of Service Are Critical</a></li>
            <li><a href="#clickwrap-vs-browsewrap" className="hover:text-gold-600 underline">2. Clickwrap vs Browsewrap Enforceability</a></li>
            <li><a href="#liability-disclaimers" className="hover:text-gold-600 underline">3. Liability Limitation & Warranty Disclaimers</a></li>
            <li><a href="#subscription-billing-rules" className="hover:text-gold-600 underline">4. Managing Subscription Auto-Renewals & Refunds</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-saas-terms-matter" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why SaaS Terms of Service Are Critical
          </h2>
          <p>
            Your Terms of Service (ToS) acts as the legal shield for your software application. It defines user rights, protects software IP, and caps liability against downtime or user error.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="clickwrap-vs-browsewrap" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Clickwrap vs Browsewrap Enforceability
          </h2>
          <p>
            Courts routinely invalidate "Browsewrap" agreements hidden in website footers. To ensure legal enforceability, implement "Clickwrap" where users actively check "I agree to Terms" before creating accounts.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            TERMS OF SERVICE DRAFTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Custom Terms of Service for Your SaaS with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts bespoke Terms of Service agreements and Acceptable Use Policies for SaaS platforms and mobile apps.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/terms-of-service"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Terms of Service Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="liability-disclaimers" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Liability Limitation & Warranty Disclaimers
          </h2>
          <p>
            Explicitly disclaim implied warranties of merchantability and fitness for a particular purpose ("Software provided AS-IS"), capping total liability to fees paid in the last 12 months.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="subscription-billing-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Managing Subscription Auto-Renewals & Refunds
          </h2>
          <p>
            Comply with automatic renewal laws by providing clear cancellation mechanics and explicit disclosures regarding recurring billing schedules.
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
            SaaS LEGAL POLICY SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your Platform with Professional Terms
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Terms of Service drafting, Acceptable Use Policies, liability limitation clauses, and clickwrap implementation guidance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/terms-of-service"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Terms of Service Drafting
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
