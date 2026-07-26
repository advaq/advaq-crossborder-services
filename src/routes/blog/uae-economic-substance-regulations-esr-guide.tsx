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
  FileText,
  AlertTriangle,
  Scale,
} from "lucide-react";

const faqs = [
  {
    q: "What are UAE Economic Substance Regulations (ESR)?",
    a: "UAE Economic Substance Regulations (Cabinet Resolution No. 57 of 2020) require UAE entities (Freezone & Mainland) that carry out 'Relevant Activities' to demonstrate genuine economic presence, physical management, and operational substance inside the UAE.",
  },
  {
    q: "What business activities are classified as 'Relevant Activities' under ESR?",
    a: "The 9 Relevant Activities under ESR are: (1) Headquarter Business, (2) Distribution & Service Center, (3) Holding Company, (4) Lease-Finance, (5) Fund Management, (6) Banking, (7) Insurance, (8) Intellectual Property (IP) Business, and (9) Shipping Business.",
  },
  {
    q: "What filing obligations does ESR impose on UAE companies?",
    a: "Entities conducting Relevant Activities must submit: (1) An annual ESR Notification within 6 months of financial year-end, and (2) An annual Economic Substance Report within 12 months of financial year-end via the Ministry of Finance portal.",
  },
  {
    q: "What are the penalties for non-compliance with UAE ESR regulations?",
    a: "Failing to submit an ESR notification carries a fine of AED 20,000. Failing to satisfy the Economic Substance Test or submit an ESR report carries fines of AED 50,000 (first year) and AED 400,000 (subsequent years), plus potential license suspension.",
  },
  {
    q: "How does ESR impact Qualifying Freezone Persons (QFZP) claiming 0% Corporate Tax?",
    a: "Maintaining adequate economic substance under ESR is a strict prerequisite for Freezone entities seeking to qualify for the 0% Corporate Tax rate on Qualifying Income under Cabinet Decision No. 55 of 2023.",
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
  headline: "Ultimate Guide to UAE Economic Substance Regulations (ESR) for Freezones",
  description:
    "Complete 2026 ESR compliance guide for UAE Freezone & Mainland companies. Learn 9 relevant activities, Core Income Generating Activities (CIGA), Ministry of Finance notification deadlines, and penalty rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uae-economic-substance-regulations-esr-guide",
};

export const Route = createFileRoute("/blog/uae-economic-substance-regulations-esr-guide")({
  head: () => ({
    meta: [
      { title: "UAE Economic Substance Regulations (ESR) Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to UAE Economic Substance Regulations (ESR) for Freezone companies. Learn 9 relevant activities, CIGA tests, MoF portal filing deadlines & AED 50k penalties.",
      },
      {
        name: "keywords",
        content:
          "uae economic substance regulations esr guide, esr relevant activities freezone ciga test, ministry of finance esr notification deadline 6 months, esr penalty fine 50000 400000 aed uae",
      },
      {
        property: "og:title",
        content: "Ultimate Guide to UAE Economic Substance Regulations (ESR) for Freezones",
      },
      {
        property: "og:description",
        content:
          "Master UAE ESR compliance rules, Relevant Activity tests, and Ministry of Finance reporting to protect your company from penalties.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-economic-substance-regulations-esr-guide" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-economic-substance-regulations-esr-guide" }],
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
            Ultimate Guide to UAE Economic Substance Regulations (ESR) for Freezones
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An in-depth regulatory guide for business owners on UAE Economic Substance Regulations (ESR), Core Income Generating Activities (CIGA), Ministry of Finance reporting portals, and non-compliance penalty prevention.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Tax & Compliance Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>9 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Cabinet Resolution No. 57 of 2020 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>ESR Compliance Requirements</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Relevant Activities (9 Sectors):</strong> Distribution/Service Centers, Headquarters, Holding Companies, IP Business, etc.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>ESR Notification (6 Months):</strong> Mandatory annual filing within 6 months of financial year-end.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>ESR Report (12 Months):</strong> Report detailing local employees, operating expenditures, and physical office space.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Severe Penalties:</strong> AED 20,000 for notification failures; AED 50,000 to AED 400,000 for substance test failures.</span>
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
            <li><a href="#esr-overview" className="hover:text-gold-600 underline">1. Understanding Cabinet Resolution No. 57 of 2020 (ESR)</a></li>
            <li><a href="#relevant-activities" className="hover:text-gold-600 underline">2. The 9 Relevant Business Activities Specified under ESR</a></li>
            <li><a href="#ciga-test" className="hover:text-gold-600 underline">3. Passing the Economic Substance & CIGA Test</a></li>
            <li><a href="#mof-filing-deadlines" className="hover:text-gold-600 underline">4. Ministry of Finance Filing Deadlines & Portal Rules</a></li>
            <li><a href="#corporate-tax-link" className="hover:text-gold-600 underline">5. The Crucial Link Between ESR & 0% Corporate Tax (QFZP)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="esr-overview" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Understanding Cabinet Resolution No. 57 of 2020 (ESR)
          </h2>
          <p>
            Introduced by the UAE Ministry of Finance in alignment with OECD BEPS Action 5, <strong>Economic Substance Regulations (ESR)</strong> prevent artificial profit shifting by requiring companies operating in specific sectors to demonstrate real economic activity within the UAE.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="relevant-activities" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The 9 Relevant Business Activities Specified under ESR
          </h2>
          <p>
            ESR applies to UAE entities carrying out any of the following 9 Relevant Activities:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Distribution and Service Center Business</li>
            <li>Headquarter Business</li>
            <li>Holding Company Business</li>
            <li>Intellectual Property (IP) Business</li>
            <li>Lease-Finance Business</li>
            <li>Fund Management Business</li>
            <li>Banking, Insurance, and Shipping Businesses</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE ESR COMPLIANCE ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your UAE ESR Notification & Report with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts ESR activity audits, prepares Core Income Generating Activity (CIGA) dossiers, and submits annual notifications on the MoF portal.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/corporate-tax-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order ESR Compliance Filing <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="ciga-test" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Passing the Economic Substance & CIGA Test
          </h2>
          <p>
            To pass the ESR test, a licensee must demonstrate: (1) Its Relevant Activity is directed and managed in the UAE, (2) Core Income Generating Activities (CIGA) are performed in the UAE, and (3) It maintains adequate full-time employees, physical assets, and operating expenditures locally.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="mof-filing-deadlines" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Ministry of Finance Filing Deadlines & Portal Rules
          </h2>
          <p>
            The ESR Notification must be filed electronically on the Ministry of Finance portal within 6 months of financial year-end. If income was derived from a Relevant Activity, the full ESR Report must be submitted within 12 months.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="corporate-tax-link" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. The Crucial Link Between ESR & 0% Corporate Tax (QFZP)
          </h2>
          <p>
            Satisfying ESR requirements is mandatory for Freezone companies seeking to claim Qualifying Freezone Person (QFZP) status and benefit from a 0% UAE Corporate Tax rate.
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
            UAE ESR COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure Full ESR Compliance with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Relevant Activity assessments, Core Income Generating Activity (CIGA) dossiers, and Ministry of Finance ESR portal filings.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/corporate-tax-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order ESR Compliance Filing
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
