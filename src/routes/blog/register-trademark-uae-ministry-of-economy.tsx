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
  Bookmark,
  Award,
  Lock,
} from "lucide-react";

const faqs = [
  {
    q: "Why should I register a trademark with the UAE Ministry of Economy (MOEC)?",
    a: "Registering your brand name, logo, or slogan with the MOEC grants legal monopoly ownership across all 7 UAE Emirates, protects against counterfeiters, and secures brand assets in GCC markets.",
  },
  {
    q: "How long is a registered UAE Trademark valid for?",
    a: "A UAE trademark registration certificate is valid for 10 years from the filing date and can be renewed indefinitely for 10-year terms.",
  },
  {
    q: "Can a foreign company or non-resident register a trademark in the UAE?",
    a: "Yes. Foreign companies and non-resident brand owners can register trademarks in the UAE through a licensed UAE trademark agent like ADVAQ.",
  },
  {
    q: "What is the cost of registering a trademark in the UAE?",
    a: "Official MOEC government fees for trademark filing, examination, publication in the Official Trademark Bulletin, and registration certificate issuance total approximately AED 6,500 to AED 8,500 per class.",
  },
  {
    q: "How long does the UAE trademark registration process take?",
    a: "The trademark registration process takes approximately 3 to 4 months, including a mandatory 30-day public opposition period.",
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
  headline: "How to Register a Trademark with the UAE Ministry of Economy (MOEC)",
  description:
    "Complete 2026 trademark filing guide for brand owners in the UAE. Learn Ministry of Economy (MOEC) class searches, application steps, public opposition periods, and 10-year protection rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/register-trademark-uae-ministry-of-economy",
};

export const Route = createFileRoute("/blog/register-trademark-uae-ministry-of-economy")({
  head: () => ({
    meta: [
      { title: "Register Trademark UAE Ministry of Economy Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to register a trademark with the UAE Ministry of Economy (MOEC). Nice classification search, government fees, 30-day opposition & 10-year brand protection.",
      },
      {
        name: "keywords",
        content:
          "register trademark uae ministry of economy, moec trademark search fee dubai, uae brand name logo protection 10 year certificate, foreign company trademark agent dubai",
      },
      {
        property: "og:title",
        content: "How to Register a Trademark with the UAE Ministry of Economy (MOEC)",
      },
      {
        property: "og:description",
        content:
          "Master the step-by-step trademark registration process in the UAE to protect your brand identity, logo, and digital intellectual property.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/register-trademark-uae-ministry-of-economy" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/register-trademark-uae-ministry-of-economy" }],
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
            How to Register a Trademark with the UAE Ministry of Economy (MOEC)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical intellectual property masterclass for founders, SaaS companies, and international brands on securing 10-year exclusive trademark protection across all 7 UAE Emirates.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ IP & Trademark Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Federal Law No. 36 of 2021 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Trademark Filing Highlights</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Governing Body:</strong> UAE Ministry of Economy (MOEC) Intellectual Property Sector.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>10-Year Protection:</strong> Grants exclusive ownership rights renewable every 10 years.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Nice Classification:</strong> Multi-class system covering goods (Classes 1–34) and services (Classes 35–45).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>30-Day Opposition Period:</strong> Mandatory public gazette notice prior to final registration certificate issuance.</span>
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
            <li><a href="#why-register-trademark" className="hover:text-gold-600 underline">1. Why Register a Trademark in the UAE?</a></li>
            <li><a href="#trademark-search" className="hover:text-gold-600 underline">2. Conducting a Pre-Filing MOEC Trademark Search</a></li>
            <li><a href="#step-by-step-filing" className="hover:text-gold-600 underline">3. Step-by-Step Filing Workflow with the Ministry of Economy</a></li>
            <li><a href="#fees-and-timelines" className="hover:text-gold-600 underline">4. Government Fees & 30-Day Opposition Period</a></li>
            <li><a href="#enforcement" className="hover:text-gold-600 underline">5. Enforcing Trademark Protection with Dubai Customs</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-register-trademark" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Register a Trademark in the UAE?
          </h2>
          <p>
            Under <strong>Federal Law No. 36 of 2021 on Trademarks</strong>, registration with the UAE Ministry of Economy gives your company exclusive legal rights to prevent competitors from copying your brand name, logo, or product packaging.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="trademark-search" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Conducting a Pre-Filing MOEC Trademark Search
          </h2>
          <p>
            Before submitting your application, conduct a comprehensive trademark search in the MOEC database to ensure no identical or confusingly similar mark is already registered under your target Nice Classification class.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE TRADEMARK REGISTRATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Protect Your Brand Name in the UAE with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts MOEC trademark clearance searches, drafts class specifications, files applications, handles gazette publications, and delivers your 10-year certificate.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Trademark Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="step-by-step-filing" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step Filing Workflow with the Ministry of Economy
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Submit electronic application on MOEC portal.</li>
            <li>MOEC legal examiner reviews application (approx. 30 days).</li>
            <li>Publish accepted trademark in Official Trademark Bulletin.</li>
            <li>Wait for 30-day public opposition window.</li>
            <li>Pay final registration fee and receive official 10-Year Trademark Certificate.</li>
          </ol>
        </div>

        {/* SECTION 4 */}
        <div id="fees-and-timelines" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Government Fees & 30-Day Opposition Period
          </h2>
          <p>
            Total government fees (filing, publication, issuance) amount to approximately AED 6,500 – AED 8,500 per class. The 30-day public opposition period provides third parties a legal opportunity to challenge conflicting applications.
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
            UAE INTELLECTUAL PROPERTY SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your UAE Trademark Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            MOEC clearance search, class filing, trademark bulletin publication, and 10-year certificate delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Trademark Registration
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
