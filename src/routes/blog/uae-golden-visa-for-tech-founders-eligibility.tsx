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
  Crown,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    q: "What is the UAE Golden Visa for Tech Founders and IT Experts?",
    a: "The UAE Golden Visa is a long-term 10-year residency visa granted to investors, entrepreneurs, tech founders, software engineers, and specialized talents. It allows 100% self-sponsored residency in the UAE without requiring a local employer sponsor.",
  },
  {
    q: "How can tech founders and software engineers qualify for the 10-year Golden Visa?",
    a: "Tech founders qualify by: (1) Owning a UAE business valued at AED 2,000,000+ or (2) Possessing an approved startup incubator endorsement. Executive IT professionals qualify with a bachelor's degree, a monthly salary of AED 30,000+, and a specialized role in AI, software, or engineering.",
  },
  {
    q: "Does the UAE Golden Visa expire if I stay outside the UAE for more than 6 months?",
    a: "No! Unlike standard 2-year residence visas, Golden Visa holders can stay outside the UAE for any duration without forfeiting their residency status.",
  },
  {
    q: "Can Golden Visa holders sponsor their family members and domestic helpers?",
    a: "Yes. Golden Visa holders can sponsor their spouse, children of any age, and domestic staff for 10-year residence visas.",
  },
  {
    q: "What government body issues Golden Visa nominations for tech experts?",
    a: "The UAE Council for Artificial Intelligence and Digital Economy, Ministry of Economy, and Dubai Future Council issue nominations for tech talents.",
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
  headline: "UAE Golden Visa Guide for Tech Founders, IT Experts & Business Owners (Eligibility)",
  description:
    "Complete 2026 10-year UAE Golden Visa eligibility guide for tech founders, software engineers, IT executives, and business owners. Learn AED 2M capital rules, AED 30k salary thresholds, and application steps.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uae-golden-visa-for-tech-founders-eligibility",
};

export const Route = createFileRoute("/blog/uae-golden-visa-for-tech-founders-eligibility")({
  head: () => ({
    meta: [
      { title: "UAE Golden Visa Guide Tech Founders & IT Experts (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "10-year UAE Golden Visa eligibility guide for tech founders, software developers & IT executives. AED 2M business valuation & AED 30k salary rules.",
      },
      {
        name: "keywords",
        content:
          "uae golden visa for tech founders eligibility, 10 year golden visa dubai software engineer, uae golden visa 30k salary requirement, golden visa entrepreneur endorsement uae",
      },
      {
        property: "og:title",
        content: "UAE Golden Visa Guide for Tech Founders, IT Experts & Business Owners (Eligibility)",
      },
      {
        property: "og:description",
        content:
          "Master the 10-year UAE Golden Visa criteria for tech entrepreneurs, AI experts, and executive software leaders.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-golden-visa-for-tech-founders-eligibility" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-golden-visa-for-tech-founders-eligibility" }],
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
            <span>UAE Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            UAE Golden Visa Guide for Tech Founders, IT Experts & Business Owners (Eligibility)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive eligibility masterclass on securing the 10-year UAE Golden Visa for tech entrepreneurs, software engineers, AI specialists, and business owners.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>9 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Federal Authority (ICP) Golden Visa Rules</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <Crown size={18} />
            <span>Golden Visa Pathways</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>10-Year Self-Sponsored Residency:</strong> No employer sponsor needed. 100% independent residency status.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Entrepreneur Pathway:</strong> Own a technical startup valued at AED 2,000,000+ or backed by an accredited incubator (DIFC, Hub71).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Specialized Talent Pathway:</strong> IT executives and software leads earning AED 30,000+/month with a bachelor's degree.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>No 6-Month Travel Restriction:</strong> Stay outside the UAE for extended periods without losing visa validity.</span>
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
          <ol className="space-y-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#what-is-golden-visa" className="hover:text-gold-600 underline">1. What Is the UAE 10-Year Golden Visa?</a></li>
            <li><a href="#eligibility-founders" className="hover:text-gold-600 underline">2. Eligibility for Tech Founders & Startup Owners (AED 2M Rules)</a></li>
            <li><a href="#eligibility-executives" className="hover:text-gold-600 underline">3. Eligibility for Software Engineers & IT Executives (AED 30k Salary)</a></li>
            <li><a href="#application-steps" className="hover:text-gold-600 underline">4. Step-by-Step Nomination & ICP Application Process</a></li>
            <li><a href="#family-perks" className="hover:text-gold-600 underline">5. Exclusive Perks: Family Sponsorship & Unlimited Travel</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-golden-visa" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is the UAE 10-Year Golden Visa?
          </h2>
          <p>
            The <strong>UAE Golden Visa</strong> is a long-term residency program introduced by the UAE government to attract world-class tech founders, investors, scientists, and highly skilled professionals.
          </p>
          <p>
            It grants 10 years of self-sponsored residency, complete business flexibility, and immunity from standard employment sponsorship rules.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="eligibility-founders" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Eligibility for Tech Founders & Startup Owners (AED 2M Rules)
          </h2>
          <p>
            Entrepreneurs qualify for a 10-year Golden Visa under two main criteria:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Owning a UAE company with a total capital valuation of at least <strong>AED 2,000,000</strong> (~$545,000 USD).</li>
            <li>Obtaining an official recommendation letter from an accredited UAE tech incubator (e.g. Hub71 Abu Dhabi, DIFC Innovation Hub).</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE GOLDEN VISA CONSULTANCY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Apply for Your 10-Year Golden Visa with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ assists tech founders and IT executives with Ministry nomination letters, eligibility audits, document attestation, and 10-year Golden Visa processing.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Golden Visa Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="eligibility-executives" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Eligibility for Software Engineers & IT Executives (AED 30k Salary)
          </h2>
          <p>
            Highly skilled IT professionals and software architects qualify under the <strong>Specialized Talent / High-Salaried Professional category</strong> if they satisfy:
          </p>
          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <Sparkles className="text-gold-500" size={20} />
              IT Talent Requirements Checklist:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Valid employment contract in the UAE as Chief Technology Officer, Lead Architect, or Senior Developer.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Minimum basic monthly salary of <strong>AED 30,000</strong> (~$8,170 USD).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Attested Bachelor's degree in Computer Science, Engineering, or relevant technical field.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="application-steps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step Nomination & ICP Application Process
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Submit initial nomination request to Ministry of Economy or Dubai Culture / ICP portal.</li>
            <li>Receive official Golden Visa approval letter.</li>
            <li>Cancel existing 2-year visa and undergo VIP medical fitness test.</li>
            <li>Receive 10-year Golden Emirates ID.</li>
          </ol>
        </div>

        {/* SECTION 5 */}
        <div id="family-perks" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Exclusive Perks: Family Sponsorship & Unlimited Travel
          </h2>
          <p>
            Golden Visa holders can sponsor their spouse, unmarried sons up to age 25, daughters of any age, and domestic staff for full 10-year residency permits.
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
            10-YEAR UAE GOLDEN VISA SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your 10-Year Golden Visa Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Eligibility audits, Ministry nomination applications, degree attestation, and 10-year Emirates ID processing for tech leaders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Golden Visa Audit
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
