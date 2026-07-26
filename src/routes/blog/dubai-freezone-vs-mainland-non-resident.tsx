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
  Globe2,
  Landmark,
  Scale,
} from "lucide-react";

const faqs = [
  {
    q: "What is the main legal difference between a Dubai Freezone and a UAE Mainland company?",
    a: "A Dubai Freezone company allows 100% foreign ownership, 0% corporate tax benefits for Qualifying Freezone Entities, and 100% profit repatriation, but restricted direct local UAE market trading without a local distributor. A Mainland company allows direct commercial trading across the entire UAE local market and government tenders.",
  },
  {
    q: "Can a foreign non-resident own 100% of a UAE Mainland company?",
    a: "Yes. Following the 2021 UAE Commercial Companies Law amendments, foreign investors can now own 100% of most mainland commercial and industrial entities without requiring a 51% UAE national local sponsor.",
  },
  {
    q: "Which option is cheaper for a tech agency or freelancer: Freezone or Mainland?",
    a: "Freezone formation is generally much cheaper and faster for tech agencies, e-commerce sellers, and consultants because it includes flexi-desk virtual office options and lower initial license fees.",
  },
  {
    q: "Do Dubai Freezone companies qualify for 0% UAE Corporate Tax?",
    a: "Freezone companies can qualify for a 0% Corporate Tax rate on Qualifying Income under UAE Cabinet Decision No. 55 of 2023, provided they maintain adequate substance and derive income from qualifying activities.",
  },
  {
    q: "Which option allows getting UAE Residence Visas and Emirates IDs?",
    a: "Both Freezone and Mainland company setups allow owners, investors, and employees to obtain 2-year or 10-year UAE Residence Visas and Emirates IDs.",
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
  headline: "Dubai Freezone vs Mainland Company Formation: Which Option is Best for Foreigners?",
  description:
    "Complete 2026 legal comparison for foreign investors setting up a business in Dubai. Compare Freezone vs Mainland on 100% ownership, corporate tax rates, local UAE market trading, and visa allocations.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/dubai-freezone-vs-mainland-non-resident",
};

export const Route = createFileRoute("/blog/dubai-freezone-vs-mainland-non-resident")({
  head: () => ({
    meta: [
      { title: "Dubai Freezone vs Mainland Comparison for Foreigners (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Dubai Freezone vs Mainland company setup comparison for non-residents. Compare 100% foreign ownership, 0% corporate tax, local market trading & visa costs.",
      },
      {
        name: "keywords",
        content:
          "dubai freezone vs mainland non resident, uae company formation foreign investor, 100 percent foreign ownership uae mainland, uae corporate tax freezone qualifying income",
      },
      {
        property: "og:title",
        content: "Dubai Freezone vs Mainland Company Formation: Which Option is Best for Foreigners?",
      },
      {
        property: "og:description",
        content:
          "Discover whether a Dubai Freezone or UAE Mainland entity is right for your international business, IT agency, or e-commerce venture.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/dubai-freezone-vs-mainland-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/dubai-freezone-vs-mainland-non-resident" }],
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
            Dubai Freezone vs Mainland Company Formation: Which Option is Best for Foreigners?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal and financial comparison for international founders on choosing between a UAE Freezone (IFZA, Meydan, DMCC) and a Dubai Mainland (DET) company setup.
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
              <span>UAE Commercial Companies Law Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Freezone vs Mainland Key Takeaways</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Freezone Ideal For:</strong> IT agencies, SaaS, global e-commerce, consulting, and remote service providers serving international clients.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Mainland Ideal For:</strong> Physical retail shops, restaurants, local construction, government contracting, and direct B2C sales inside the UAE.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>100% Foreign Ownership:</strong> Now available in BOTH Freezones and Mainland for most commercial business activities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Corporate Tax Rate:</strong> Freezones offer 0% tax on qualifying income, while Mainland entities pay 9% tax on profits exceeding AED 375,000.</span>
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
            <li><a href="#core-differences" className="hover:text-gold-600 underline">1. Core Legal Differences: Freezone vs Mainland</a></li>
            <li><a href="#ownership-rules" className="hover:text-gold-600 underline">2. 100% Foreign Ownership Rules (Commercial Companies Law)</a></li>
            <li><a href="#corporate-tax-rules" className="hover:text-gold-600 underline">3. UAE Corporate Tax Treatment (0% vs 9%)</a></li>
            <li><a href="#visa-allocations" className="hover:text-gold-600 underline">4. Residence Visa Quotas & Emirates ID Allocations</a></li>
            <li><a href="#banking-comparison" className="hover:text-gold-600 underline">5. UAE Corporate Bank Account Opening Comparison</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="core-differences" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Core Legal Differences: Freezone vs Mainland
          </h2>
          <p>
            When setting up a business in the United Arab Emirates, international entrepreneurs must select one of two primary corporate jurisdictions: a <strong>Free Zone</strong> or the <strong>UAE Mainland</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-base mb-2">
                <Globe2 size={18} />
                <span>UAE Freezone Entity</span>
              </div>
              <p className="text-xs text-gray-600">
                Independent special economic zone with zero currency restrictions, flexi-desk office options, and streamlined foreign incorporation. Best for international tech and consulting.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-navy-800 font-semibold text-base mb-2">
                <Landmark size={18} />
                <span>UAE Mainland Entity (DET)</span>
              </div>
              <p className="text-xs text-gray-600">
                Licensed by the Department of Economy and Tourism (DET). Allows unlimited commercial trading anywhere inside the UAE and bidding on government contracts.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="ownership-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. 100% Foreign Ownership Rules (Commercial Companies Law)
          </h2>
          <p>
            Historically, foreign investors in Mainland Dubai required a local UAE sponsor holding 51% shares.
          </p>
          <p>
            Following Decree-Law No. 26 of 2020, the UAE abolished the local sponsor requirement for over 1,000 commercial and industrial activities, allowing non-residents to retain <strong>100% equity ownership</strong> in both Mainland and Freezone companies.
          </p>
        </div>

        {/* SECTION 3 */}
        <div id="corporate-tax-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. UAE Corporate Tax Treatment (0% vs 9%)
          </h2>
          <p>
            Under the UAE Federal Corporate Tax Law (effective June 2023):
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>Mainland Entities:</strong> Taxed at 0% on net taxable profits up to AED 375,000 (~$102,000 USD), and 9% on profits exceeding AED 375,000.</li>
            <li><strong>Qualifying Freezone Entities:</strong> Enjoy 0% Corporate Tax on qualifying income derived from transactions with foreign clients or other Freezone entities.</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE COMPANY FORMATION ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Set Up Your Business in Dubai with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ provides end-to-end guidance on selecting Freezone vs Mainland licenses, Emirates ID processing, and corporate bank account opening.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UAE Setup Packages <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="visa-allocations" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Residence Visa Quotas & Emirates ID Allocations
          </h2>
          <p>
            Freezone packages typically offer visa quotas based on office package type (e.g. 1-2 visas for Flexi-Desk packages, unlimited for physical office leases).
          </p>
          <p>
            Mainland companies calculate visa quotas based on the square footage of their commercial office lease (approx 1 visa per 80 sq ft).
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="banking-comparison" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. UAE Corporate Bank Account Opening Comparison
          </h2>
          <p>
            Opening a business bank account with traditional UAE banks (Emirates NBD, Mashreq, FAB) requires presenting proof of physical address, investor Emirates ID, and business background checks. Digital banks (Wio Business, Mashreq NEOBiz) accelerate approvals for Freezone entities.
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
            UAE BUSINESS FORMATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UAE Company with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Freezone and Mainland licensing, 2-year UAE Residence Visas, Emirates ID processing, and Wio corporate banking support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UAE Freezone Package
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
