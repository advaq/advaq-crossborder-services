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
  Award,
  Lock,
  Globe2,
} from "lucide-react";

const faqs = [
  {
    q: "Can a foreign non-resident register a US trademark with the USPTO?",
    a: "Yes. Foreign non-resident individuals and international companies can register trademarks with the United States Patent and Trademark Office (USPTO). However, federal USPTO rules require foreign-domiciled applicants to be represented by a licensed US attorney.",
  },
  {
    q: "Why do Amazon FBA sellers need a USPTO trademark?",
    a: "A registered USPTO trademark unlocks Amazon Brand Registry US, protecting your product listings from counterfeit hijackers and granting access to A+ Content and Amazon Brand Analytics.",
  },
  {
    q: "How much does a USPTO trademark application cost?",
    a: "The USPTO official TEAS Standard online application fee is $350 per class of goods or services.",
  },
  {
    q: "How long does USPTO trademark registration take?",
    a: "USPTO trademark registration takes approximately 8 to 12 months from filing to registration certificate, including a 3-month examining attorney review and a 30-day public publication window.",
  },
  {
    q: "What is an Intent-to-Use (Section 1b) trademark application?",
    a: "If you have not yet sold products under your brand in US interstate commerce, an Intent-to-Use (Section 1b) application reserves your brand name with the USPTO before product launch.",
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
  headline: "USPTO Trademark Registration Guide for Overseas Companies & Amazon Brands",
  description:
    "Complete 2026 USPTO trademark registration guide for foreign applicants & Amazon FBA sellers. Learn US attorney mandate, TEAS fees ($350), Amazon Brand Registry & Section 1(b) rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uspto-trademark-registration-guide-foreign-applicant",
};

export const Route = createFileRoute("/blog/uspto-trademark-registration-guide-foreign-applicant")({
  head: () => ({
    meta: [
      { title: "USPTO Trademark Guide Foreign Applicants & Amazon Brands (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "USPTO trademark registration guide for foreign non-residents & Amazon sellers. US licensed attorney rule, TEAS $350 fees & Amazon Brand Registry unlock.",
      },
      {
        name: "keywords",
        content:
          "uspto trademark registration guide foreign applicant, us attorney requirement foreign applicant uspto, amazon brand registry uspto trademark non resident, teas standard fee 350",
      },
      {
        property: "og:title",
        content: "USPTO Trademark Registration Guide for Overseas Companies & Amazon Brands",
      },
      {
        property: "og:description",
        content:
          "Master USPTO federal trademark rules, US attorney representation mandates, and Amazon Brand Registry unlocking for non-resident founders.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uspto-trademark-registration-guide-foreign-applicant" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uspto-trademark-registration-guide-foreign-applicant" }],
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
            <span>US Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            USPTO Trademark Registration Guide for Overseas Companies & Amazon Brands
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive federal trademark guide for foreign non-resident founders on USPTO clearance searches, US licensed attorney representation requirements, TEAS application fees, and Amazon Brand Registry enrollment.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>9 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>USPTO US Counsel Rule Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>USPTO Key Requirements</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>US Attorney Mandate:</strong> The USPTO legally requires all foreign-domiciled applicants to be represented by a licensed US attorney in good standing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Amazon Brand Registry:</strong> A USPTO pending or registered trademark unlocks Amazon Brand Registry US, protecting product listings from counterfeit hijackers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>$350 TEAS Fee:</strong> The official USPTO application fee is $350 per class of goods/services.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>10-Year Protection:</strong> Registered US federal trademarks provide exclusive legal protection across all 50 US states for 10 years (renewable).</span>
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
            <li><a href="#uspto-foreign-rule" className="hover:text-gold-600 underline">1. The Mandatory US Licensed Attorney Rule for Foreign Applicants</a></li>
            <li><a href="#amazon-brand-registry" className="hover:text-gold-600 underline">2. Unlocking Amazon Brand Registry with USPTO Filing</a></li>
            <li><a href="#section-1a-vs-1b" className="hover:text-gold-600 underline">3. Section 1(a) Actual Use vs Section 1(b) Intent-to-Use</a></li>
            <li><a href="#application-timeline" className="hover:text-gold-600 underline">4. Step-by-Step Application Steps & 8-12 Month Timeline</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="uspto-foreign-rule" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Mandatory US Licensed Attorney Rule for Foreign Applicants
          </h2>
          <p>
            Effective August 2019, the <strong>United States Patent and Trademark Office (USPTO)</strong> enacted a federal rule requiring all foreign-domiciled applicants (individual or corporate) to be represented by an attorney who is an active member of the bar of a US state.
          </p>
          <p>
            Submitting a foreign USPTO application without an authorized US attorney results in immediate office action refusal.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="amazon-brand-registry" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Unlocking Amazon Brand Registry with USPTO Filing
          </h2>
          <p>
            For e-commerce founders selling on Amazon US, a USPTO trademark is essential.
          </p>
          <p>
            Once your USPTO serial number is issued, you can immediately apply for <strong>Amazon Brand Registry</strong>, gaining automated protection against counterfeit buy-box hijackers, access to A+ Content, and Amazon Storefront features.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            USPTO TRADEMARK SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Protect Your US Brand & Unlock Amazon Brand Registry
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ provides comprehensive USPTO clearance searches, US licensed attorney representation, TEAS application filings, and Amazon Brand Registry support.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/wyoming-llc-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore US Trademark Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="section-1a-vs-1b" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Section 1(a) Actual Use vs Section 1(b) Intent-to-Use
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-base mb-2">
                <CheckCircle2 size={20} />
                <span>Section 1(a) Use in Commerce</span>
              </div>
              <p className="text-sm text-gray-600">
                Filed if you are already selling products or services in US interstate commerce. Requires submitting proof of use (product specimen).
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-navy-700 font-semibold text-base mb-2">
                <Award size={20} />
                <span>Section 1(b) Intent to Use</span>
              </div>
              <p className="text-sm text-gray-600">
                Filed before commercial product launch to reserve your brand name priority with USPTO. Specimen is submitted later.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="application-timeline" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step Application Steps & 8-12 Month Timeline
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 ml-2">
            <li>Conduct a thorough USPTO TESS search for confusingly similar marks.</li>
            <li>Select international NICE classes (e.g. Class 9 for software, Class 35 for retail).</li>
            <li>Submit TEAS Standard application with $350 fee per class via US licensed counsel.</li>
            <li>Pass examining attorney review (approx 8 months).</li>
            <li>Undergo 30-day public publication in the Official Gazette before certificate issuance.</li>
          </ol>
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
            USPTO TRADEMARK REGISTRATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your US Trademark with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            USPTO clearance searches, US licensed attorney representation, TEAS application filing, and Amazon Brand Registry activation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/wyoming-llc-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order USPTO Trademark Registration
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
