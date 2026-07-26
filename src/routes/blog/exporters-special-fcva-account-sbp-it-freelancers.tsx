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
  CreditCard,
  Briefcase,
} from "lucide-react";

const faqs = [
  {
    q: "What is an Exporters' Special Foreign Currency Account (FCVA) in Pakistan?",
    a: "An Exporters' Special Foreign Currency Account (FCVA) is a specialized USD/EUR bank account authorized by the State Bank of Pakistan (SBP) allowing IT exporters, software houses, and IT freelancers to retain up to 50% of foreign export proceeds in USD.",
  },
  {
    q: "How can I spend dollars retained in my SBP FCVA account?",
    a: "USD retained in an FCVA account can be freely spent without prior SBP approval on: (1) International digital ad spend (Facebook, Google, LinkedIn Ads), (2) Cloud hosting & software tools (AWS, GitHub, OpenAI, Vercel), (3) Overseas office expenses, and (4) International debit card purchases.",
  },
  {
    q: "What percentage of export proceeds can IT companies retain in USD?",
    a: "Under current SBP foreign exchange regulations, certified IT exporters and PSEB-registered software houses can retain up to 50% of export proceeds in foreign currency.",
  },
  {
    q: "What documents are required to open an FCVA dollar account?",
    a: "You must provide: (1) SECP Incorporation Certificate or NTN, (2) Valid PSEB Registration Certificate, (3) Exporters' Declaration / SBP Undertaking, and (4) Active commercial bank account details.",
  },
  {
    q: "Can freelancers registered with PSEB open an FCVA dollar account?",
    a: "Yes! Freelancers holding valid PSEB registration and e-PRC certificates can open individual FCVA retention accounts at commercial banks in Pakistan.",
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
  headline: "How IT Agencies Can Legally Hold 50% Dollar Retention (FCVA) in Pakistan Banks",
  description:
    "Complete 2026 SBP Exporters' Special Foreign Currency Account (FCVA) guide for Pakistani software houses & freelancers. Learn how to retain 50% export proceeds in USD, spend on AWS/Google Ads, and open FCVA accounts.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/exporters-special-fcva-account-sbp-it-freelancers",
};

export const Route = createFileRoute("/blog/exporters-special-fcva-account-sbp-it-freelancers")({
  head: () => ({
    meta: [
      { title: "SBP 50% Dollar Retention FCVA Account Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How IT agencies & freelancers hold 50% dollar retention (FCVA) in Pakistan banks under SBP rules. Spend USD on AWS, Google Ads & international software tools.",
      },
      {
        name: "keywords",
        content:
          "exporters special fcva account sbp IT freelancers, 50 percent dollar retention account pakistan banks, spend usd foreign currency account aws google ads pakistan, pseb fcva dollar debit card software house",
      },
      {
        property: "og:title",
        content: "How IT Agencies Can Legally Hold 50% Dollar Retention (FCVA) in Pakistan Banks",
      },
      {
        property: "og:description",
        content:
          "Master the SBP FCVA retention framework to hold 50% of your IT export revenues in USD and pay global software vendors hassle-free.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/exporters-special-fcva-account-sbp-it-freelancers" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/exporters-special-fcva-account-sbp-it-freelancers" }],
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
            How IT Agencies Can Legally Hold 50% Dollar Retention (FCVA) in Pakistan Banks
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A step-by-step banking guide for software house owners, SaaS founders, and IT freelancers on opening Exporters' Special Foreign Currency Accounts (FCVA) under State Bank of Pakistan rules to retain 50% export revenue in USD.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Banking & Forex Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>State Bank of Pakistan FCVA Circular Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FCVA Retention Account Perks</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>50% USD Retention:</strong> 50% of foreign IT export wire transfers land directly in your USD FCVA account.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>USD International Debit Card:</strong> Issued directly against your FCVA USD balance for global online purchasing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>No SBP Prior Approval:</strong> Pay AWS, Google Ads, Facebook Ads, OpenAI, and overseas SaaS vendors without filing clearance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>PSEB Mandate:</strong> Requires an active PSEB registration certificate and e-PRC export proceeds tagging.</span>
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
            <li><a href="#what-is-fcva" className="hover:text-gold-600 underline">1. What Is an SBP Exporters' Special FCVA Account?</a></li>
            <li><a href="#retention-limits" className="hover:text-gold-600 underline">2. Understanding the 50% Dollar Retention Limit</a></li>
            <li><a href="#eligible-expenses" className="hover:text-gold-600 underline">3. What Expenses Can Be Paid from FCVA USD Funds?</a></li>
            <li><a href="#account-opening-steps" className="hover:text-gold-600 underline">4. Step-by-Step FCVA Account Opening Process at Commercial Banks</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-fcva" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is an SBP Exporters' Special FCVA Account?
          </h2>
          <p>
            To support the rapidly growing IT export sector, the State Bank of Pakistan created <strong>Exporters' Special Foreign Currency Accounts (FCVA)</strong>.
          </p>
          <p>
            FCVA accounts solve foreign exchange restrictions by allowing IT companies to retain 50% of foreign currency export earnings in USD, EUR, or GBP without automatic conversion into PKR.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="retention-limits" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Understanding the 50% Dollar Retention Limit
          </h2>
          <p>
            When a $10,000 USD foreign wire transfer lands in your company bank account, $5,000 USD (50%) is automatically converted into PKR at prevailing interbank rates, while the remaining $5,000 USD (50%) is credited to your FCVA USD retention balance.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN FCVA BANKING ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Open Your SBP 50% FCVA Account with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares FCVA documentation, secures PSEB accreditation, handles bank compliance meetings, and obtains USD corporate debit cards for your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order FCVA Banking Setup <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="eligible-expenses" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. What Expenses Can Be Paid from FCVA USD Funds?
          </h2>
          <p>
            FCVA USD funds can be spent freely on: AWS / Google Cloud hosting, Facebook & Google digital ad campaigns, foreign freelancer payments (Upwork/Fiverr), software licenses (OpenAI, Figma, GitHub), and international business travel.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="account-opening-steps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step FCVA Account Opening Process at Commercial Banks
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Obtain active PSEB Registration Certificate.</li>
            <li>Submit SECP corporate documents / CNIC copies to commercial bank.</li>
            <li>Sign SBP FCVA Undertaking Form.</li>
            <li>Receive USD FCVA account number and international USD corporate debit card.</li>
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
            PAKISTAN FCVA DOLLAR BANKING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your 50% FCVA Dollar Account
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            PSEB registration, commercial bank FCVA documentation, SBP compliance filing, and USD debit card issuance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order FCVA Dollar Account Setup
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
