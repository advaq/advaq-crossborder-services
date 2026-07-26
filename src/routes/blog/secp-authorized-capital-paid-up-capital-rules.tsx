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
  DollarSign,
  Briefcase,
} from "lucide-react";

const faqs = [
  {
    q: "What is the difference between Authorized Capital and Paid-Up Capital under SECP rules?",
    a: "Authorized Capital is the maximum amount of share capital a company is legally authorized to issue under its Memorandum of Association. Paid-Up Capital is the actual amount of money paid by shareholders into the company's bank account for issued shares.",
  },
  {
    q: "Is there a minimum Paid-Up Capital requirement for SECP incorporation in Pakistan?",
    a: "No! Under the Companies Act 2017, SECP removed minimum paid-up capital requirements for general Private Limited and SMC-Pvt Ltd companies. You can incorporate a company with any initial capital (e.g. PKR 100,000).",
  },
  {
    q: "What is the recommended Authorized Capital for a new startup in Pakistan?",
    a: "Most IT startups and small businesses register with an initial Authorized Capital of PKR 100,000 (divided into 10,000 shares of PKR 10 each) to minimize initial SECP filing fees.",
  },
  {
    q: "How many days do shareholders have to deposit Paid-Up Capital after incorporation?",
    a: "Shareholders must deposit the full subscribed share capital into the company's corporate bank account within 30 days of receiving the SECP Certificate of Incorporation, and file Form 22 (Auditor Certificate of Paid-Up Capital) within 45 days.",
  },
  {
    q: "How can a company increase its Authorized Capital with SECP later?",
    a: "To increase Authorized Capital, the company passes a special shareholder resolution, files Form 7 with SECP, and pays the incremental SECP registration fee based on the newly authorized amount.",
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
  headline: "Minimum Paid-Up Capital & Shareholder Rules for SECP Incorporation",
  description:
    "Complete 2026 SECP capital structure guide for Pakistani companies. Learn Authorized Capital vs Paid-Up Capital rules, Form 22 filing deadlines, bank deposit timelines, and share allocation rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/secp-authorized-capital-paid-up-capital-rules",
};

export const Route = createFileRoute("/blog/secp-authorized-capital-paid-up-capital-rules")({
  head: () => ({
    meta: [
      { title: "SECP Authorized & Paid-Up Capital Rules (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "SECP Authorized Capital vs Paid-Up Capital rules in Pakistan. Minimum capital requirements, Form 22 auditor certificate deadline & bank deposit timeline.",
      },
      {
        name: "keywords",
        content:
          "secp authorized capital paid up capital rules, secp minimum paid up capital requirement pvt ltd, form 22 auditor certificate paid up capital timeline secp, increase authorized capital form 7 secp pakistan",
      },
      {
        property: "og:title",
        content: "Minimum Paid-Up Capital & Shareholder Rules for SECP Incorporation",
      },
      {
        property: "og:description",
        content:
          "Master SECP share capital rules, Authorized vs Paid-Up capital limits, Form 22 auditor certificates, and bank deposit deadlines.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/secp-authorized-capital-paid-up-capital-rules" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/secp-authorized-capital-paid-up-capital-rules" }],
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
            Minimum Paid-Up Capital & Shareholder Rules for SECP Incorporation
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive capital structuring guide for business owners on SECP Authorized Capital rules, Paid-Up Capital bank deposits, Form 22 auditor certificates, and share value allocations under the Companies Act 2017.
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
              <span>SECP Companies Act 2017 Section 85 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Capital Rules Summary</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Authorized Capital:</strong> Maximum capital headroom defined in MOA (standard: PKR 100,000).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Paid-Up Capital:</strong> Cash actually deposited by shareholders into the company's corporate bank account.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>30-Day Bank Deposit Mandate:</strong> Subscribed capital must be deposited into the business bank account within 30 days of incorporation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form 22 Filing:</strong> Auditor certificate proving capital deposit submitted to SECP within 45 days.</span>
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
            <li><a href="#authorized-vs-paidup" className="hover:text-gold-600 underline">1. Authorized Capital vs Paid-Up Capital Explained</a></li>
            <li><a href="#minimum-capital-rules" className="hover:text-gold-600 underline">2. SECP Minimum Capital Rules for Startups & IT Companies</a></li>
            <li><a href="#bank-deposit-timeline" className="hover:text-gold-600 underline">3. The 30-Day Capital Deposit Mandate & Form 22 Auditor Certificate</a></li>
            <li><a href="#increasing-capital" className="hover:text-gold-600 underline">4. How to Increase Authorized Capital via Form 7</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="authorized-vs-paidup" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Authorized Capital vs Paid-Up Capital Explained
          </h2>
          <p>
            When registering a Private Limited company with SECP, founders must define two key capital figures:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>Authorized Capital:</strong> The upper ceiling of share capital the company can issue without paying additional SECP fees.</li>
            <li><strong>Paid-Up Capital:</strong> The actual equity money injected into the business bank account by shareholders.</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="minimum-capital-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. SECP Minimum Capital Rules for Startups & IT Companies
          </h2>
          <p>
            Under the Companies Act 2017, SECP removed fixed minimum paid-up capital requirements for standard private limited entities. Startups can register with an Authorized Capital of PKR 100,000 (10,000 shares of PKR 10 each).
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SECP CAPITAL STRUCTURING ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Structure Your Company Capital with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts share capital structures, files Form 22 auditor certificates, and manages Authorized Capital increases with SECP.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Capital Structuring <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="bank-deposit-timeline" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. The 30-Day Capital Deposit Mandate & Form 22 Auditor Certificate
          </h2>
          <p>
            Within 30 days of incorporation, shareholders must deposit their subscribed capital into the newly opened business bank account. A Chartered Accountant must verify the deposit and issue an Auditor's Certificate for SECP Form 22.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="increasing-capital" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. How to Increase Authorized Capital via Form 7
          </h2>
          <p>
            When raising venture capital or issuing new equity to partners, companies file SECP Form 7 to expand Authorized Capital beyond the initial PKR 100,000 threshold.
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
            SECP CAPITAL COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Manage SECP Capital Filings with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Authorized capital advice, Form 22 auditor certificates, Form 7 capital increases, and share transfer filings.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Capital Filing
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
