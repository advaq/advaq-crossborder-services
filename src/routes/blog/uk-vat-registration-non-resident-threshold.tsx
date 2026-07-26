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
  AlertTriangle,
  Receipt,
  Percent,
  Coins,
  Globe2,
} from "lucide-react";

const faqs = [
  {
    q: "Does the UK £90,000 VAT threshold apply to non-UK resident businesses?",
    a: "No. The standard UK VAT threshold (£90,000 in 2026) only applies to UK-established businesses. Under NETP (Non-Established Taxable Person) rules, overseas businesses selling taxable goods or digital services in the UK have a £0 VAT threshold and must register immediately upon making their first UK sale.",
  },
  {
    q: "Is a UK Limited Company owned by an overseas resident considered a UK-established business?",
    a: "Yes. Because the company is legally incorporated at Companies House with a UK Registered Office Address, it is treated as a UK-established entity for VAT purposes and benefits from the full £90,000 UK VAT registration threshold for domestic sales.",
  },
  {
    q: "What is the standard UK VAT rate?",
    a: "The standard UK VAT rate is 20%. Certain goods and services qualify for a reduced rate of 5% (e.g. home energy) or zero-rate 0% (e.g. books, children's clothing, exported goods, B2B digital services to non-UK clients).",
  },
  {
    q: "Can a non-resident business voluntarily register for UK VAT below the £90,000 threshold?",
    a: "Yes. UK LTD companies can voluntarily register for VAT even with £0 turnover to reclaim UK VAT paid on startup expenses, software subscriptions, and London virtual office costs.",
  },
  {
    q: "How often do I need to file UK VAT returns with HMRC?",
    a: "UK VAT returns are submitted quarterly (every 3 months) via HMRC Making Tax Digital (MTD) compatible accounting software (such as Xero, QuickBooks, or ADVAQ's MTD VAT service).",
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
  headline: "UK VAT Registration Threshold & Rules for Non-UK Resident Businesses",
  description:
    "Complete 2026 UK VAT compliance guide for overseas founders. Learn £90,000 vs £0 NETP threshold rules, voluntary VAT registration benefits, and Making Tax Digital (MTD).",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uk-vat-registration-non-resident-threshold",
};

export const Route = createFileRoute("/blog/uk-vat-registration-non-resident-threshold")({
  head: () => ({
    meta: [
      { title: "UK VAT Registration Threshold Non-Resident Rules (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to UK VAT registration threshold (£90,000 vs £0 NETP rule) for non-resident business owners. Voluntary VAT, Making Tax Digital & HMRC rules.",
      },
      {
        name: "keywords",
        content:
          "uk vat registration non resident threshold, £90000 vat threshold uk ltd overseas, netp zero vat threshold non established business, hmrc vat registration foreign director",
      },
      {
        property: "og:title",
        content: "UK VAT Registration Threshold & Rules for Non-UK Resident Businesses",
      },
      {
        property: "og:description",
        content:
          "Understand UK VAT registration thresholds, NETP rules, input VAT reclaims, and HMRC Making Tax Digital compliance for foreign directors.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-vat-registration-non-resident-threshold" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-vat-registration-non-resident-threshold" }],
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
            <span>UK Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            UK VAT Registration Threshold & Rules for Non-UK Resident Businesses
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive 2026 HMRC VAT guide explaining the £90,000 threshold, Non-Established Taxable Person (NETP) £0 rules, input VAT reclaims, and Making Tax Digital (MTD).
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal & Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>HMRC VAT & MTD Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>VAT Threshold Rules at a Glance (2026)</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">UK Limited Company (UK Established)</strong>
              <p className="text-navy-100 leading-relaxed">
                Enjoys the full <strong>£90,000 rolling 12-month VAT threshold</strong> for domestic UK sales. Registration is optional until turnover hits £90,000.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Non-UK Entity (NETP - Foreign Company)</strong>
              <p className="text-navy-100 leading-relaxed">
                Subject to a <strong>£0 VAT threshold</strong>. Must register for UK VAT immediately upon making their very first UK taxable sale.
              </p>
            </div>
          </div>
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
            <li><a href="#threshold-explained" className="hover:text-gold-600 underline">1. UK VAT Registration Threshold Explained (£90,000 Limit)</a></li>
            <li><a href="#netp-rules" className="hover:text-gold-600 underline">2. UK LTD vs Foreign Entity: The NETP £0 Rule</a></li>
            <li><a href="#voluntary-registration" className="hover:text-gold-600 underline">3. Benefits of Voluntary UK VAT Registration Below £90k</a></li>
            <li><a href="#vat-rates" className="hover:text-gold-600 underline">4. UK VAT Rates: 20% Standard, 5% Reduced & 0% Zero-Rated</a></li>
            <li><a href="#mtd-compliance" className="hover:text-gold-600 underline">5. HMRC Making Tax Digital (MTD) Quarterly Filing Rules</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="threshold-explained" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. UK VAT Registration Threshold Explained (£90,000 Limit)
          </h2>
          <p>
            Value Added Tax (VAT) is a consumption tax levied on goods and services sold inside the United Kingdom.
          </p>
          <p>
            For UK-established entities, HM Revenue & Customs (HMRC) sets mandatory VAT registration based on a <strong>rolling 12-month taxable turnover threshold of £90,000</strong>.
          </p>
          <p>
            You must register for UK VAT if:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Your total taxable turnover in any rolling 12-month period exceeds £90,000.</li>
            <li>You expect your taxable turnover to exceed £90,000 in the next 30 days alone.</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="netp-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. UK LTD vs Foreign Entity: The NETP £0 Rule
          </h2>
          <p>
            A critical distinction exists between an overseas entrepreneur trading via a <strong>UK Limited Company</strong> versus trading directly through an <strong>unincorporated foreign business</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-emerald-600 font-semibold text-base mb-2">
                <Building2 size={20} />
                <span>UK LTD Company (UK Established)</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Because your UK LTD is legally incorporated at Companies House with a UK registered address, HMRC grants it <strong>UK-established tax status</strong>. You get the full <strong>£90,000 threshold allowance</strong>.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-red-600 font-semibold text-base mb-2">
                <Globe2 size={20} />
                <span>NETP Foreign Business (£0 Threshold)</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                If you sell goods directly into the UK from a foreign company (e.g. US LLC or Pakistan Sole Proprietorship), you are classified as a <strong>Non-Established Taxable Person (NETP)</strong> with a <strong>£0 VAT threshold</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="voluntary-registration" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Benefits of Voluntary UK VAT Registration Below £90k
          </h2>
          <p>
            Even if your UK LTD company generates less than £90,000 in turnover, <strong>voluntary VAT registration</strong> offers major commercial advantages:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base">Key Advantages of Voluntary VAT Registration:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Reclaim UK Input VAT:</strong> Recover 20% VAT paid on business expenses, software subscriptions, equipment, and legal services.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Corporate Credibility:</strong> Displaying a valid UK VAT Number (starting with `GB`) builds immense trust with European and UK corporate clients.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Zero-Rated Exports:</strong> If you export B2B services to clients outside the UK, you charge 0% VAT while still claiming back input tax.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            HMRC VAT REGISTRATION & FILING
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your Official UK VAT Number (GB Prefix)
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ submits complete HMRC VAT registration applications and handles Making Tax Digital (MTD) quarterly filing for non-resident directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/vat-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK VAT Registration Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="vat-rates" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. UK VAT Rates: 20% Standard, 5% Reduced & 0% Zero-Rated
          </h2>
          <p>
            When issuing VAT invoices to clients, apply the correct UK statutory rate:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 my-6">
            <div className="bg-white border border-border p-5 rounded-xl text-center">
              <span className="text-gold-600 font-bold text-2xl block">20%</span>
              <strong className="text-navy-900 block mt-1 text-sm">Standard Rate</strong>
              <p className="text-xs text-gray-500 mt-1">Applies to most UK B2B services, goods, and digital software products.</p>
            </div>
            <div className="bg-white border border-border p-5 rounded-xl text-center">
              <span className="text-navy-700 font-bold text-2xl block">5%</span>
              <strong className="text-navy-900 block mt-1 text-sm">Reduced Rate</strong>
              <p className="text-xs text-gray-500 mt-1">Applies to domestic energy, heating, and specialized items.</p>
            </div>
            <div className="bg-white border border-border p-5 rounded-xl text-center">
              <span className="text-emerald-600 font-bold text-2xl block">0%</span>
              <strong className="text-navy-900 block mt-1 text-sm">Zero-Rated</strong>
              <p className="text-xs text-gray-500 mt-1">Applies to exported services, books, and basic food items.</p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="mtd-compliance" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. HMRC Making Tax Digital (MTD) Quarterly Filing Rules
          </h2>
          <p>
            Since 2022, HMRC mandates that all VAT-registered businesses submit their quarterly VAT returns through <strong>Making Tax Digital (MTD)</strong> compatible software via digital API links.
          </p>
          <p>
            ADVAQ manages MTD compliance by maintaining digital bookkeeping and submitting quarterly MTD VAT returns directly to HMRC on your behalf.
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
            HMRC VAT REGISTRATION & COMPLIANCE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your UK Company for VAT with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            HMRC VAT number registration, MTD setup, and quarterly VAT return preparation for non-resident directors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/vat-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK VAT Registration
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
