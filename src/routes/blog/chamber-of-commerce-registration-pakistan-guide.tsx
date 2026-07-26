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
  Building2,
  Briefcase,
  Award,
  Globe2,
} from "lucide-react";

const faqs = [
  {
    q: "Why is Chamber of Commerce registration required for IT companies in Pakistan?",
    a: "Chamber of Commerce membership (e.g. LCCI in Lahore, KCCI in Karachi, ICCI in Islamabad) provides official commercial validation, unlocks visa recommendation letters for international tech conferences (Gitex, Leap), and is required for certain government tenders and SBP import/export quotas.",
  },
  {
    q: "What is the difference between Corporate Class and Associate Class membership?",
    a: "Corporate Class membership is for SECP registered Private Limited companies or entities meeting specific turnover/tax thresholds. Associate Class membership is for Sole Proprietorships and smaller partnerships.",
  },
  {
    q: "What documents are required for Chamber of Commerce registration?",
    a: "You need: (1) SECP Incorporation Certificate & MOA/AOA (or Sole Proprietorship NTN), (2) Company NTN & Sales Tax Registration (if applicable), (3) CNIC copies of directors/owners, (4) Commercial office lease agreement, and (5) Bank Maintenance Certificate.",
  },
  {
    q: "How long is a Chamber of Commerce membership certificate valid for?",
    a: "Chamber of Commerce membership certificates are valid for 1 fiscal year ending March 31 or December 31 (depending on chamber rules) and must be renewed annually.",
  },
  {
    q: "Can Chamber membership help Pakistani software house owners get business visas for foreign countries?",
    a: "Yes! Chambers of Commerce issue official Visa Recommendation Letters to foreign embassies (US, UK, Schengen, UAE, Saudi Arabia) to support business visa applications for company directors.",
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
  headline: "Chamber of Commerce (LCCI/KCCI/ICCI) Registration Guide for IT Agencies",
  description:
    "Complete 2026 Chamber of Commerce registration guide for Pakistani businesses. Learn how to join LCCI, KCCI, or ICCI, Corporate vs Associate class rules, visa recommendation letters, and membership benefits.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/chamber-of-commerce-registration-pakistan-guide",
};

export const Route = createFileRoute("/blog/chamber-of-commerce-registration-pakistan-guide")({
  head: () => ({
    meta: [
      { title: "Chamber of Commerce Registration Guide Pakistan (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Chamber of Commerce (LCCI/KCCI/ICCI) registration guide for IT companies in Pakistan. Corporate vs Associate membership, visa recommendation letters & annual renewal.",
      },
      {
        name: "keywords",
        content:
          "chamber of commerce registration pakistan guide, lcci kcci icci membership certificate software house, chamber visa recommendation letter foreign embassy pakistan, corporate class associate class chamber membership",
      },
      {
        property: "og:title",
        content: "Chamber of Commerce (LCCI/KCCI/ICCI) Registration Guide for IT Agencies",
      },
      {
        property: "og:description",
        content:
          "Discover how Chamber of Commerce membership unlocks embassy visa recommendation letters and trade credibility for Pakistani IT exporters.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/chamber-of-commerce-registration-pakistan-guide" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/chamber-of-commerce-registration-pakistan-guide" }],
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
            <span>Pakistan Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Chamber of Commerce (LCCI/KCCI/ICCI) Registration Guide for IT Agencies
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical trade membership guide for Pakistani IT agencies, software houses, and corporate entities on registering with LCCI (Lahore), KCCI (Karachi), or ICCI (Islamabad), obtaining visa recommendation letters, and enhancing trade prestige.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Corporate Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>DGTO & FPCCI Chamber Guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Chamber Membership Perks</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Visa Recommendation Letters:</strong> Official chamber recommendation letters supporting foreign business visa applications for directors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Corporate Credibility:</strong> Displays verified trade standing with local government and foreign trade delegations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Corporate vs Associate Class:</strong> Corporate Class for SECP companies; Associate Class for sole proprietors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Annual Renewal:</strong> Renewable every fiscal year with updated FBR tax return filings.</span>
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
            <li><a href="#why-join-chamber" className="hover:text-gold-600 underline">1. Why Join a Chamber of Commerce in Pakistan?</a></li>
            <li><a href="#major-chambers" className="hover:text-gold-600 underline">2. Regional Chambers: LCCI, KCCI, ICCI & Rawalpindi RCCI</a></li>
            <li><a href="#corporate-vs-associate" className="hover:text-gold-600 underline">3. Corporate Class vs Associate Class Membership Rules</a></li>
            <li><a href="#visa-recommendation" className="hover:text-gold-600 underline">4. Obtaining Embassy Visa Recommendation Letters</a></li>
            <li><a href="#application-steps" className="hover:text-gold-600 underline">5. Step-by-Step Membership Application Process</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-join-chamber" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Join a Chamber of Commerce in Pakistan?
          </h2>
          <p>
            Regulated by the Directorate General of Trade Organizations (DGTO), Chambers of Commerce in Pakistan represent business interests to government ministries, foreign embassies, and international trade bodies.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="major-chambers" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Regional Chambers: LCCI, KCCI, ICCI & Rawalpindi RCCI
          </h2>
          <p>
            Businesses register with the Chamber operating in their city of incorporation:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>LCCI:</strong> Lahore Chamber of Commerce & Industry</li>
            <li><strong>KCCI:</strong> Karachi Chamber of Commerce & Industry</li>
            <li><strong>ICCI:</strong> Islamabad Chamber of Commerce & Industry</li>
            <li><strong>RCCI:</strong> Rawalpindi Chamber of Commerce & Industry</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            CHAMBER OF COMMERCE SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register Your Business with LCCI / KCCI / ICCI with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares your Chamber membership application, handles proposer/seconder endorsements, and secures your official Chamber Membership Certificate.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Chamber Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="corporate-vs-associate" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Corporate Class vs Associate Class Membership Rules
          </h2>
          <p>
            SECP registered Private Limited companies qualify for <strong>Corporate Class membership</strong>. Sole Proprietorships and un-registered partnerships qualify for <strong>Associate Class membership</strong>.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="visa-recommendation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Obtaining Embassy Visa Recommendation Letters
          </h2>
          <p>
            One of the most valuable benefits of Chamber membership is receiving official Chamber Visa Recommendation Letters addressed to foreign embassies (US, UK, Schengen, UAE) to facilitate international business travel for tech conferences.
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
            PAKISTAN CHAMBER REGISTRATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Get Your Chamber Membership Certificate Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            LCCI, KCCI, ICCI, and RCCI registration, corporate class filing, and visa recommendation letter support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Chamber Registration Package
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
