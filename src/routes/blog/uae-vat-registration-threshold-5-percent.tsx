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
  Percent,
  Receipt,
} from "lucide-react";

const faqs = [
  {
    q: "What is the mandatory threshold for UAE VAT registration?",
    a: "Under Federal Decree-Law No. 8 of 2017 on Value Added Tax, a business MUST register for UAE VAT if its taxable supplies and imports exceed the mandatory registration threshold of AED 375,000 (~$102,000 USD) in the preceding 12 months.",
  },
  {
    q: "What is the voluntary threshold for UAE VAT registration?",
    a: "A business CAN voluntarily register for UAE VAT if its taxable supplies or taxable expenses exceed the voluntary registration threshold of AED 187,500 (~$51,000 USD) in the preceding 12 months.",
  },
  {
    q: "Are exports of services (e.g. software development for foreign clients) subject to 5% UAE VAT?",
    a: "No! Under Article 31 of the Executive Regulations, exports of services to recipients established outside the UAE qualify for the 0% Zero-Rated VAT rate. However, zero-rated export revenue COUNTS toward your mandatory AED 375,000 VAT registration threshold.",
  },
  {
    q: "What is the penalty for failing to register for UAE VAT on time?",
    a: "The Federal Tax Authority (FTA) imposes an automatic administrative penalty of AED 10,000 for failing to submit a VAT registration application when crossing the mandatory AED 375,000 threshold.",
  },
  {
    q: "How often must a business file UAE VAT returns?",
    a: "Most registered businesses file quarterly VAT returns (every 3 months) via the EmaraTax portal, with payment due by the 28th day following the end of the tax period.",
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
  headline: "UAE VAT Registration Rules (5%): Mandatory Thresholds & Filing Deadlines",
  description:
    "Complete 2026 UAE VAT compliance guide. Learn 5% VAT rules, AED 375k mandatory vs AED 187.5k voluntary thresholds, zero-rated service export rules, quarterly filings, and FTA late penalty fines.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uae-vat-registration-threshold-5-percent",
};

export const Route = createFileRoute("/blog/uae-vat-registration-threshold-5-percent")({
  head: () => ({
    meta: [
      { title: "UAE VAT Registration Thresholds & 5% Rules (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "UAE VAT registration rules (5%). Mandatory AED 375k & voluntary AED 187.5k thresholds, zero-rated service exports, EmaraTax quarterly filings & AED 10k late fines.",
      },
      {
        name: "keywords",
        content:
          "uae vat registration threshold 5 percent, mandatory vat threshold 375000 aed uae, zero rated service exports vat uae, fta vat registration penalty 10000 emaratax",
      },
      {
        property: "og:title",
        content: "UAE VAT Registration Rules (5%): Mandatory Thresholds & Filing Deadlines",
      },
      {
        property: "og:description",
        content:
          "Master UAE 5% VAT registration rules, mandatory AED 375,000 thresholds, zero-rated export exemptions, and quarterly FTA tax returns.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-vat-registration-threshold-5-percent" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-vat-registration-threshold-5-percent" }],
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
            UAE VAT Registration Rules (5%): Mandatory Thresholds & Filing Deadlines
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive Federal Tax Authority (FTA) guide for business owners on 5% Value Added Tax registration thresholds, zero-rated service export exemptions, EmaraTax filings, and administrative penalty avoidance.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Tax Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Federal Decree-Law No. 8 of 2017 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>UAE VAT Key Thresholds</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Mandatory Threshold (AED 375,000):</strong> Registration required when taxable sales/imports exceed AED 375,000 (~$102k USD).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Voluntary Threshold (AED 187,500):</strong> Optional registration allowed when taxable sales or expenses exceed AED 187,500.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>0% Zero-Rated Exports:</strong> International IT consulting & software exports to foreign clients are 0% rated, but count toward mandatory thresholds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>AED 10,000 Late Fine:</strong> Missing mandatory registration triggers an automatic AED 10,000 FTA fine.</span>
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
            <li><a href="#vat-overview" className="hover:text-gold-600 underline">1. Overview of the UAE 5% Value Added Tax System</a></li>
            <li><a href="#registration-thresholds" className="hover:text-gold-600 underline">2. Mandatory (AED 375k) vs Voluntary (AED 187.5k) Thresholds</a></li>
            <li><a href="#zero-rated-exports" className="hover:text-gold-600 underline">3. Zero-Rated (0%) Exports for IT & Software Agencies</a></li>
            <li><a href="#emaratax-filing" className="hover:text-gold-600 underline">4. Quarterly EmaraTax Filing Deadlines & Input VAT Recovery</a></li>
            <li><a href="#fta-penalties" className="hover:text-gold-600 underline">5. Avoiding Administrative Penalties (AED 10,000 Late Fine)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="vat-overview" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Overview of the UAE 5% Value Added Tax System
          </h2>
          <p>
            Introduced on January 1, 2018 under <strong>Federal Decree-Law No. 8 of 2017</strong>, the United Arab Emirates levies a standard <strong>5% Value Added Tax (VAT)</strong> on consumption of goods and services.
          </p>
          <p>
            Managed by the Federal Tax Authority (FTA), VAT compliance requires registered businesses to issue tax invoices, collect 5% output VAT, and file regular tax returns.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="registration-thresholds" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Mandatory (AED 375k) vs Voluntary (AED 187.5k) Thresholds
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-base mb-2">
                <Receipt size={18} />
                <span>Mandatory Registration (AED 375,000)</span>
              </div>
              <p className="text-xs text-gray-600">
                You MUST register within 20 business days of crossing AED 375,000 in taxable supplies or expected 30-day turnover.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-navy-800 font-semibold text-base mb-2">
                <Percent size={18} />
                <span>Voluntary Registration (AED 187,500)</span>
              </div>
              <p className="text-xs text-gray-600">
                You CAN register if turnover or taxable business expenses exceed AED 187,500, allowing early input VAT recovery on start-up costs.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE VAT REGISTRATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register Your Business for UAE VAT with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages FTA EmaraTax portal registration, VAT Certificate issuance (TRN), input tax recovery, and quarterly return filings.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/vat-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UAE VAT Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="zero-rated-exports" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Zero-Rated (0%) Exports for IT & Software Agencies
          </h2>
          <p>
            Under Article 31 of the Executive Regulations, exporting services (IT consulting, software development, design) to foreign recipients located outside the UAE qualifies for <strong>0% Zero-Rated VAT</strong>.
          </p>
          <p>
            This allows tech agencies to charge 0% VAT to global clients while remaining eligible to claim back 5% VAT paid on local office expenses.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="emaratax-filing" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Quarterly EmaraTax Filing Deadlines & Input VAT Recovery
          </h2>
          <p>
            Registered entities submit VAT returns (Form VAT201) quarterly via the online EmaraTax portal. Return filing and payment must be completed by the 28th day of the month following the quarterly tax period.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="fta-penalties" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Avoiding Administrative Penalties (AED 10,000 Late Fine)
          </h2>
          <p>
            The FTA enforces an automatic <strong>AED 10,000 penalty</strong> for late registration, plus AED 1,000 for late return submissions, making proactive threshold monitoring vital.
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
            UAE VAT COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Manage UAE VAT Registration & Returns
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            EmaraTax portal registration, 0% zero-rated export auditing, quarterly VAT201 returns, and input VAT refund claims.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/vat-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UAE VAT Registration
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
