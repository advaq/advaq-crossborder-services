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
  Globe2,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "What is the mandatory threshold for UAE VAT registration?",
    a: "Under Federal Decree-Law No. 8 of 2017 on Value Added Tax, a business MUST register for UAE VAT if its taxable supplies and imports exceed the mandatory registration threshold of AED 375,000 (~$102,000 USD) in the preceding 12 months, or if it expects taxable supplies to exceed AED 375,000 in the next 30 days.",
  },
  {
    q: "What is the voluntary threshold for UAE VAT registration?",
    a: "A business CAN voluntarily register for UAE VAT if its taxable supplies or taxable business expenses exceed the voluntary registration threshold of AED 187,500 (~$51,000 USD) in the preceding 12 months, or if it expects expenses to exceed AED 187,500 in the next 30 days. Voluntary registration allows early recovery of 5% input VAT paid on startup setup costs.",
  },
  {
    q: "Are exports of services (software/IT consulting) subject to 5% UAE VAT?",
    a: "No! Under Article 31 of the Executive Regulations of Federal Decree-Law No. 8 of 2017, exports of services to recipients established outside the UAE qualify for the 0% Zero-Rated VAT rate. However, zero-rated export revenue COUNTS toward your mandatory AED 375,000 VAT registration threshold.",
  },
  {
    q: "What is the penalty for failing to register for UAE VAT on time?",
    a: "The Federal Tax Authority (FTA) enforces an automatic administrative penalty of AED 10,000 ($2,725 USD) under Cabinet Decision No. 40 of 2017 on any business entity that fails to submit its VAT registration application within 20 business days of crossing the mandatory AED 375,000 threshold.",
  },
  {
    q: "How often must a business file UAE VAT returns on EmaraTax?",
    a: "Most registered corporate entities file quarterly VAT returns (Form VAT201 every 3 months) via the online EmaraTax portal. Return filing and tax payment must be submitted by the 28th day following the end of the assigned tax period.",
  },
  {
    q: "Can I claim back VAT paid on company formation fees and office leases?",
    a: "Yes! Once your business obtains a valid VAT Registration Number (TRN) from the FTA, you can recover 5% input VAT paid on eligible commercial expenses—including office lease Ejari contracts, IT equipment purchases, telecom bills, and advisory services.",
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
    "Complete 2026 UAE VAT compliance masterclass guide. Learn 5% VAT rules, AED 375k mandatory vs AED 187.5k voluntary thresholds, zero-rated service export rules, quarterly filings, and FTA late penalty fines.",
  author: { "@type": "Organization", name: "ADVAQ UAE Tax Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uae-vat-registration-threshold-5-percent",
};

export const Route = createFileRoute("/blog/uae-vat-registration-threshold-5-percent")({
  head: () => ({
    meta: [
      { title: "UAE VAT Registration Thresholds & 5% Rules (2026 Masterclass) | ADVAQ" },
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
            An in-depth Federal Tax Authority (FTA) compliance masterclass for business owners on 5% Value Added Tax registration thresholds, zero-rated service export exemptions, EmaraTax filings, and administrative penalty avoidance under Federal Decree-Law No. 8 of 2017.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Tax Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Federal Decree-Law No. 8 of 2017 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>UAE VAT Key Threshold Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Mandatory Threshold (AED 375,000)</strong>
              <p className="text-navy-100 leading-relaxed">
                Registration required when taxable sales/imports exceed AED 375,000 (~$102k USD) in a rolling 12-month period.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Voluntary Threshold (AED 187,500)</strong>
              <p className="text-navy-100 leading-relaxed">
                Optional registration permitted when taxable sales or business expenses exceed AED 187,500 (~$51k USD).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">0% Zero-Rated Exports</strong>
              <p className="text-navy-100 leading-relaxed">
                Software & IT exports to foreign overseas clients qualify for 0% VAT, but count toward mandatory registration thresholds.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">AED 10,000 Late Fine</strong>
              <p className="text-navy-100 leading-relaxed">
                Missing mandatory registration deadlines triggers an automatic AED 10,000 administrative penalty from the FTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-2xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen size={16} className="text-gold-600" />
            Table of Contents
          </h2>
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#vat-overview" className="hover:text-gold-600 underline">1. Overview of the UAE 5% Value Added Tax System</a></li>
            <li><a href="#registration-thresholds" className="hover:text-gold-600 underline">2. Mandatory (AED 375k) vs Voluntary (AED 187.5k) Thresholds</a></li>
            <li><a href="#vat-matrix" className="hover:text-gold-600 underline">3. Comprehensive UAE VAT Treatment Matrix</a></li>
            <li><a href="#zero-rated-exports" className="hover:text-gold-600 underline">4. Zero-Rated (0%) Exports for IT Consultants & Software Agencies</a></li>
            <li><a href="#emaratax-filing" className="hover:text-gold-600 underline">5. Quarterly EmaraTax Filing Deadlines & Input VAT Recovery</a></li>
            <li><a href="#fta-penalties" className="hover:text-gold-600 underline">6. Avoiding FTA Administrative Penalties (AED 10,000 Late Fine)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="vat-overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Overview of the UAE 5% Value Added Tax System
          </h2>
          <p>
            Enacted on January 1, 2018 under <strong>Federal Decree-Law No. 8 of 2017</strong>, the United Arab Emirates introduced a standard <strong>5% Value Added Tax (VAT)</strong> on consumption of goods and commercial services.
          </p>
          <p>
            Administered directly by the Federal Tax Authority (FTA), VAT compliance requires registered UAE corporate entities to issue compliant tax invoices, collect 5% output VAT on domestic supplies, and file quarterly tax returns on the EmaraTax portal.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="registration-thresholds" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Mandatory (AED 375k) vs Voluntary (AED 187.5k) Thresholds
          </h2>
          <p>
            The UAE VAT framework establishes two distinct registration thresholds based on a rolling 12-month historical calculation or a 30-day forward-looking projection:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-6 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-lg mb-2">
                <Receipt size={20} />
                <span>Mandatory Registration (AED 375,000)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                A business MUST register within 20 business days of crossing <strong>AED 375,000</strong> (~$102,000 USD) in taxable supplies/imports in the preceding 12 months, or if expected turnover in the next 30 days exceeds AED 375,000.
              </p>
            </div>

            <div className="border border-border p-6 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-navy-950 font-bold text-lg mb-2">
                <Percent size={20} />
                <span>Voluntary Registration (AED 187,500)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                A business CAN voluntarily register if taxable supplies or taxable business expenses exceed <strong>AED 187,500</strong> (~$51,000 USD), permitting early recovery of 5% input VAT paid on initial startup setup costs.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="vat-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive UAE VAT Treatment Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of VAT classifications in the UAE:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Supply Category</th>
                  <th className="p-4 text-gold-500">Applicable VAT Rate %</th>
                  <th className="p-4 text-emerald-400">Input VAT Recovery Rights</th>
                  <th className="p-4">Contribution to AED 375k Threshold</th>
                  <th className="p-4">Tax Invoice Wording</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Standard Rated Onshore Goods & Services</td>
                  <td className="p-4 text-rose-700 font-bold">5% Output VAT</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Full Input Recovery</td>
                  <td className="p-4 text-navy-900 font-bold">Yes (Included in Total)</td>
                  <td className="p-4 text-navy-900">Standard 5% Tax Invoice</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Zero-Rated Service Exports (Article 31)</td>
                  <td className="p-4 text-emerald-700 font-bold">0% Zero-Rated VAT</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Full Input Recovery</td>
                  <td className="p-4 text-navy-900 font-bold">Yes (Mandatory Included)</td>
                  <td className="p-4 text-navy-900">Zero-Rated 0% Tax Invoice</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Exempt Supplies (Bare Land, Local Transport)</td>
                  <td className="p-4 text-navy-900 font-bold">Exempt (0% Charge)</td>
                  <td className="p-4 text-rose-700 font-bold">Restricted (No Input Recovery)</td>
                  <td className="p-4 text-navy-900">No (Excluded)</td>
                  <td className="p-4 text-navy-900">Exempt Invoice</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="zero-rated-exports" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Zero-Rated (0%) Exports for IT Consultants & Software Agencies
          </h2>
          <p>
            Under Article 31 of the Executive Regulations of Federal Decree-Law No. 8 of 2017, exporting services (software development, SaaS subscriptions, digital marketing, IT consulting) to recipients established outside the UAE qualifies for <strong>0% Zero-Rated VAT</strong>.
          </p>
          <p>
            This allows UAE tech companies billing overseas clients in the US, Europe, UK, or Asia to charge 0% VAT on international invoices while remaining legally entitled to claim back 100% of the 5% input VAT paid on local office leases, hardware, and sub-contractor fees.
          </p>
          <p className="bg-navy-950 text-gold-500 p-4 rounded-xl font-mono text-xs my-4 border border-gold-500/20">
            CRITICAL RULE: Zero-rated export revenue MUST be counted when calculating your mandatory AED 375,000 VAT registration threshold! Even if 100% of your sales are exported to overseas clients at 0% VAT, you must register for VAT once global sales cross AED 375,000.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="emaratax-filing" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Quarterly EmaraTax Filing Deadlines & Input VAT Recovery
          </h2>
          <p>
            Registered corporate entities file quarterly VAT returns (Form VAT201) online via the FTA <strong>EmaraTax portal</strong>.
          </p>
          <p>
            Tax returns and payment settlements must be submitted by the <strong>28th day of the month following the end of the tax period</strong>.
          </p>
          <p>
            During return submission, input VAT paid on commercial operating expenses (office Ejari lease, telecom, equipment purchases, legal fees) is offset against output VAT collected from domestic customers. If input VAT exceeds output VAT (e.g. for exporters charging 0% VAT), the business receives an FTA tax refund or credit carry-forward.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="fta-penalties" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Avoiding FTA Administrative Penalties (AED 10,000 Late Fine)
          </h2>
          <p>
            The Federal Tax Authority enforces strict administrative fines under Cabinet Decision No. 40 of 2017 for non-compliance:
          </p>

          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">AED 10,000 Late Registration Penalty</strong>
              <p className="text-xs text-gray-600">Imposed automatically when a company fails to submit its VAT registration application within 20 business days of crossing the AED 375,000 threshold.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">AED 1,000 Late Return Submission Penalty</strong>
              <p className="text-xs text-gray-600">Imposed for failing to submit Form VAT201 by the 28th day deadline (doubles to AED 2,000 upon repeat late filings).</p>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6 flex items-center gap-2">
            <HelpCircle size={22} className="text-gold-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm"
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
            EmaraTax portal registration, 0% zero-rated export auditing, quarterly VAT201 returns, and input VAT refund claims handled by ADVAQ.
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
