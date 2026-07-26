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
  DollarSign,
  Briefcase,
  Scale,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Fixed Price Contract in digital agency operations?",
    a: "A Fixed Price Contract agrees on a lump-sum price for a clearly defined set of deliverables, regardless of actual hours spent by agency developers or designers.",
  },
  {
    q: "What is an Hourly Retainer Agreement?",
    a: "An Hourly Retainer Agreement charges clients based on actual hours logged at agreed hourly rates (Time & Materials) or reserves a set number of monthly hours paid in advance.",
  },
  {
    q: "Which pricing model provides higher profit margins for experienced agencies?",
    a: "Fixed Price contracts typically yield higher profit margins for experienced agencies with efficient workflows, while Time & Materials (Hourly Retainer) models provide maximum protection against unpredictable scope changes.",
  },
  {
    q: "How can agencies mitigate legal risks in Fixed Price contracts?",
    a: "To mitigate risk in Fixed Price contracts: (1) Include detailed functional specification documents in the SOW, (2) Enforce strict Change Control procedures, and (3) Require milestone deposit payments prior to commencing work.",
  },
  {
    q: "Can an agency combine Fixed Price and Hourly Retainer models?",
    a: "Yes! Hybrid models build initial MVP core features on a Fixed Price basis, while post-launch maintenance, iterative feature enhancements, and support operate on a Monthly Hourly Retainer.",
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
  headline: "Fixed Price vs Hourly Retainer Contracts: Which Model Protects Digital Agencies Best?",
  description:
    "Complete legal & financial guide comparing Fixed Price vs Hourly Retainer contracts for digital marketing, design, and software agencies. Learn risk allocation, scope control, and hybrid agreement drafting.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/fixed-price-vs-hourly-retainer-agreement-agency",
};

export const Route = createFileRoute("/blog/fixed-price-vs-hourly-retainer-agreement-agency")({
  head: () => ({
    meta: [
      { title: "Fixed Price vs Hourly Retainer Contract Agency Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Fixed Price vs Hourly Retainer contract guide for digital agencies. Learn legal risk allocation, scope control, payment terms & hybrid retainer drafting.",
      },
      {
        name: "keywords",
        content:
          "fixed price vs hourly retainer agreement agency, time and materials contract vs fixed fee, digital agency pricing model contract protection, hybrid retainer agreement software development",
      },
      {
        property: "og:title",
        content: "Fixed Price vs Hourly Retainer Contracts: Which Model Protects Digital Agencies Best?",
      },
      {
        property: "og:description",
        content:
          "Discover how to choose and draft the right pricing contract model for your digital agency.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/fixed-price-vs-hourly-retainer-agreement-agency" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/fixed-price-vs-hourly-retainer-agreement-agency" }],
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
            Fixed Price vs Hourly Retainer Contracts: Which Model Protects Digital Agencies Best?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive financial and legal contract masterclass for agency owners, design studios, and software houses comparing Fixed Price project agreements against Time & Materials (Hourly Retainer) models.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal & Pricing Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Agency Commercial Contract Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Pricing Model Comparison</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Fixed Price Contract</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for well-defined, static projects. Risk of scope creep falls on agency unless protected by strict Change Orders.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Hourly Retainer (T&M)</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for agile software development and ongoing marketing. Risk of scope changes falls on client; agency is paid for all hours worked.
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
            <li><a href="#fixed-price-dynamics" className="hover:text-gold-600 underline">1. Legal & Financial Dynamics of Fixed Price Contracts</a></li>
            <li><a href="#hourly-retainer-dynamics" className="hover:text-gold-600 underline">2. Legal & Financial Dynamics of Hourly Retainers</a></li>
            <li><a href="#risk-allocation-analysis" className="hover:text-gold-600 underline">3. Risk Allocation Analysis: Where Do Legal Disputes Arise?</a></li>
            <li><a href="#hybrid-contract-model" className="hover:text-gold-600 underline">4. The Hybrid Contract Model: Combining Fixed MVP with Retainers</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="fixed-price-dynamics" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Legal & Financial Dynamics of Fixed Price Contracts
          </h2>
          <p>
            Fixed price agreements set an absolute fee for defined deliverables. While attractive to enterprise clients, they require rock-solid functional specifications to prevent profit erosion.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="hourly-retainer-dynamics" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Legal & Financial Dynamics of Hourly Retainers
          </h2>
          <p>
            Hourly retainers charge clients for dedicated developer time or actual logged hours. Contracts must define time-tracking protocols and monthly rollover limits.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            AGENCY CONTRACT DRAFTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Custom Agency Contracts with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts bespoke Fixed Price and Hourly Retainer contracts tailored to protect agency margins and eliminate scope disputes.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/fixed-price-project-contract"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Contract Drafting <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="risk-allocation-analysis" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Risk Allocation Analysis: Where Do Legal Disputes Arise?
          </h2>
          <p>
            Fixed price contracts spark disputes over scope interpretations, whereas hourly contracts spark disputes over timesheet auditing and developer efficiency expectations.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="hybrid-contract-model" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. The Hybrid Contract Model: Combining Fixed MVP with Retainers
          </h2>
          <p>
            A hybrid model uses a Fixed Price contract for phase 1 initial deployment, followed automatically by a Monthly Hourly Retainer for ongoing feature updates.
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
            AGENCY PRICING & CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Optimize Your Agency Contracts Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Fixed price project agreements, monthly retainer agreements, hybrid contracts, and change order management templates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/fixed-price-project-contract"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Fixed Price & Retainer Package
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
