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
  Users,
  FileCheck,
  Lock,
} from "lucide-react";

const faqs = [
  {
    q: "What is an Ultimate Beneficial Owner (UBO) declaration in the UAE?",
    a: "Under Cabinet Resolution No. 109 of 2023 on the Regulation of Real Beneficial Owner Procedures, every registered UAE business entity (Freezone & Mainland) must register and maintain an official Register of Real Beneficial Owners (UBO) with their licensing authority.",
  },
  {
    q: "Who qualifies as an Ultimate Beneficial Owner (UBO)?",
    a: "A UBO is any natural person who ultimately owns or controls 25% or more of the company's capital, voting rights, or shareholder shares (directly or indirectly), or exercises ultimate control over executive management.",
  },
  {
    q: "What registers must a UAE company maintain under UBO law?",
    a: "All UAE companies must maintain three internal registers: (1) Register of Real Beneficial Owners (UBO), (2) Register of Shareholders / Partners, and (3) Register of Nominee Directors.",
  },
  {
    q: "Within how many days must a company report UBO changes to the licensing authority?",
    a: "Any change or update to UBO details must be reported to the relevant Freezone authority or Department of Economy and Tourism (DET) within 15 business days.",
  },
  {
    q: "What are the penalties for non-compliance with UAE UBO regulations?",
    a: "Administrative penalties for failing to maintain or submit UBO registers start at AED 20,000 for the first offense and rise to AED 100,000 for repeated offenses, plus trade license suspension.",
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
  headline: "Ultimate Beneficial Owner (UBO) Declaration in the UAE: Rules & Compliance",
  description:
    "Complete 2026 UBO compliance guide for UAE Freezone & Mainland companies. Learn Cabinet Resolution No. 109 of 2023, 25% ownership rules, Real Beneficial Owner registers, and administrative fine prevention.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uae-ultimate-beneficial-owner-ubo-declaration",
};

export const Route = createFileRoute("/blog/uae-ultimate-beneficial-owner-ubo-declaration")({
  head: () => ({
    meta: [
      { title: "UAE Ultimate Beneficial Owner (UBO) Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "UAE UBO declaration rules (Cabinet Resolution No. 109 of 2023). 25% ownership criteria, Register of Beneficial Owners, 15-day update rules & fine prevention.",
      },
      {
        name: "keywords",
        content:
          "uae ultimate beneficial owner ubo declaration, register of real beneficial owner uae freezone, cabinet resolution 109 of 2023 ubo threshold 25 percent, ubo penalty fine 20000 100000 aed uae",
      },
      {
        property: "og:title",
        content: "Ultimate Beneficial Owner (UBO) Declaration in the UAE: Rules & Compliance",
      },
      {
        property: "og:description",
        content:
          "Master UAE Real Beneficial Owner (UBO) transparency laws, 25% ownership thresholds, and official register filings.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-ultimate-beneficial-owner-ubo-declaration" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-ultimate-beneficial-owner-ubo-declaration" }],
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
            Ultimate Beneficial Owner (UBO) Declaration in the UAE: Rules & Compliance
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical legal transparency guide for business owners on UAE Cabinet Resolution No. 109 of 2023, registering Ultimate Beneficial Owners (UBO), maintaining shareholder registers, and penalty protection.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Legal Compliance Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Cabinet Resolution No. 109 of 2023 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>UBO Mandatory Requirements</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>UBO Threshold:</strong> Any natural person owning or controlling 25%+ of company capital or voting rights.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>3 Mandatory Registers:</strong> (1) Register of Real Beneficial Owners, (2) Register of Partners/Shareholders, (3) Register of Nominee Directors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>15-Day Update Mandate:</strong> Notify licensing authority within 15 days of any ownership or passport detail changes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Penalties:</strong> Administrative fines start at AED 20,000 to AED 100,000 plus trade license suspension.</span>
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
            <li><a href="#ubo-framework" className="hover:text-gold-600 underline">1. Understanding Cabinet Resolution No. 109 of 2023 on UBOs</a></li>
            <li><a href="#who-is-ubo" className="hover:text-gold-600 underline">2. Who Qualifies as an Ultimate Beneficial Owner (25% Rule)</a></li>
            <li><a href="#three-registers" className="hover:text-gold-600 underline">3. The 3 Mandatory Corporate Registers Every Company Must Keep</a></li>
            <li><a href="#reporting-updates" className="hover:text-gold-600 underline">4. Reporting Timelines (15-Day Rule) & Licensing Portals</a></li>
            <li><a href="#penalties" className="hover:text-gold-600 underline">5. Avoiding Fines & License Suspensions</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="ubo-framework" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Understanding Cabinet Resolution No. 109 of 2023 on UBOs
          </h2>
          <p>
            To enhance international financial transparency and prevent illicit shell company usage, the UAE government enacted <strong>Cabinet Resolution No. 109 of 2023</strong>.
          </p>
          <p>
            The resolution requires every company registered in a Freezone or Mainland jurisdiction to file accurate records of its ultimate human beneficial owners.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="who-is-ubo" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Who Qualifies as an Ultimate Beneficial Owner (25% Rule)
          </h2>
          <p>
            A <strong>Real Beneficial Owner</strong> is defined as:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Any individual who ultimate owns or controls <strong>25% or more</strong> of company shares or voting rights.</li>
            <li>If no individual meets the 25% threshold, any individual who exercises control through other means (e.g. appointing directors).</li>
            <li>If no individual is identified, the natural person holding the position of Senior Management Official (Managing Director / CEO).</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE UBO COMPLIANCE SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your UAE UBO Declaration with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares statutory UBO registers, submits official beneficial ownership declarations to Freezone & DET portals, and manages ongoing 15-day updates.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UBO Compliance Filing <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="three-registers" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. The 3 Mandatory Corporate Registers Every Company Must Keep
          </h2>
          <p>
            Every UAE entity must maintain: (1) Register of Beneficial Owners, (2) Register of Shareholders/Partners, and (3) Register of Nominee Directors, kept at the registered office address.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="reporting-updates" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Reporting Timelines (15-Day Rule) & Licensing Portals
          </h2>
          <p>
            Whenever a shareholder sells shares, updates passport numbers, or changes residential addresses, the company must file an updated UBO declaration within 15 business days.
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
            UAE CORPORATE TRANSPARENCY SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Maintain 100% UBO Compliance with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Beneficial owner register drafting, Freezone & DET portal submissions, and 15-day detail updates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UBO Compliance Package
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
