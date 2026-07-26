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
  Landmark,
  CreditCard,
  Globe2,
  DollarSign,
} from "lucide-react";

const faqs = [
  {
    q: "Which business bank account is best for non-resident UK LTD owners?",
    a: "Wise Business is generally considered the best overall account for non-resident UK companies due to its native UK Sort Codes, transparent mid-market FX rates, multi-currency holding (GBP, USD, EUR), and seamless international wire capabilities.",
  },
  {
    q: "Can I have both a Wise Business account and a Payoneer account for the same UK LTD?",
    a: "Yes. Many overseas entrepreneurs hold both Wise Business (for general client invoicing and corporate expenses) and Payoneer (for automated marketplace payouts from Amazon UK, eBay, Upwork, and Fiverr).",
  },
  {
    q: "Do Wise and Payoneer charge monthly subscription fees for UK business accounts?",
    a: "Wise Business charges a one-time £45 account setup/verification fee with zero monthly subscription costs. Payoneer has no account opening fee, but charges transaction and annual account maintenance fees if inactive.",
  },
  {
    q: "Can I issue corporate debit cards to my remote team members?",
    a: "Yes. Both Wise Business and Revolut Business allow UK LTD directors to issue physical and virtual corporate debit cards with individual spending limits for remote employees and contractors.",
  },
  {
    q: "Will my UK business account be frozen if I receive large international transfers?",
    a: "To prevent account holds, ensure your invoices match incoming transfer amounts and maintain updated client contracts (such as Master Service Agreements or Statements of Work) to satisfy AML compliance inquiries.",
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
  headline: "Wise vs Payoneer vs Revolut for UK LTD Companies: Non-Resident Guide",
  description:
    "Comprehensive comparison of the best business bank accounts for non-resident UK LTD owners in 2026. Compare Wise Business, Payoneer, and Revolut Business on fees, FX rates, and features.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://advaq.com/blog/best-bank-account-for-uk-ltd-non-resident",
};

export const Route = createFileRoute("/blog/best-bank-account-for-uk-ltd-non-resident")({
  head: () => ({
    meta: [
      { title: "Wise vs Payoneer vs Revolut for UK LTD (2026 Comparison) | ADVAQ" },
      {
        name: "description",
        content:
          "In-depth 2026 comparison of Wise Business, Payoneer, and Revolut for foreign-owned UK Limited Companies. Fees, FX rates, UK Sort Codes & card features.",
      },
      {
        name: "keywords",
        content:
          "best bank account for uk ltd non resident, wise vs payoneer vs revolut uk business, wise business account uk ltd overseas, payoneer vs wise uk company non resident",
      },
      {
        property: "og:title",
        content: "Wise vs Payoneer vs Revolut for UK LTD Companies: Non-Resident Guide",
      },
      {
        property: "og:description",
        content:
          "Discover which digital banking platform offers the lowest FX fees, fastest verification, and best features for foreign UK company owners.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/best-bank-account-for-uk-ltd-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/best-bank-account-for-uk-ltd-non-resident" }],
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
            Wise vs Payoneer vs Revolut for UK LTD Companies: Non-Resident Guide
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A head-to-head comparison of FX exchange rates, international transfer fees, corporate card features, and non-resident approval speeds across top UK FinTech banking providers.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FCA Regulated FinTech Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Winner Verdict at a Glance</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-emerald-500/30">
              <strong className="text-emerald-400 block font-bold text-sm mb-1">🥇 Wise Business</strong>
              <p className="text-navy-100 text-[11px] leading-relaxed">
                <strong>Best Overall:</strong> Lowest FX conversion fees (mid-market rates), native UK Sort Code + 8-digit Account Number, USD routing, zero monthly fees.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="text-gold-400 block font-bold text-sm mb-1">🥈 Payoneer</strong>
              <p className="text-navy-100 text-[11px] leading-relaxed">
                <strong>Best for Marketplaces:</strong> Direct payouts from Amazon, Upwork, Fiverr & eBay. Seamless local bank withdrawals in home currency.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="text-blue-400 block font-bold text-sm mb-1">🥉 Revolut Business</strong>
              <p className="text-navy-100 text-[11px] leading-relaxed">
                <strong>Best for Corporate Expense Cards:</strong> Instant virtual employee cards, accounting integrations (Xero/QuickBooks), and sub-accounts.
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
          <ol className="space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#overview" className="hover:text-gold-600 underline">1. Why Non-Resident UK LTDs Rely on FinTech Banking</a></li>
            <li><a href="#wise-deep-dive" className="hover:text-gold-600 underline">2. Wise Business: Features, Pricing & FX Rates</a></li>
            <li><a href="#payoneer-deep-dive" className="hover:text-gold-600 underline">3. Payoneer: Features, Pricing & E-Commerce Integration</a></li>
            <li><a href="#revolut-deep-dive" className="hover:text-gold-600 underline">4. Revolut Business: Features, Cards & Sub-Accounts</a></li>
            <li><a href="#comparison-matrix" className="hover:text-gold-600 underline">5. Feature-by-Feature Comparison Matrix</a></li>
            <li><a href="#recommendations" className="hover:text-gold-600 underline">6. Which Account Should You Choose?</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="overview" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Non-Resident UK LTDs Rely on FinTech Banking
          </h2>
          <p>
            For foreign founders operating a UK Limited Company from Pakistan, the UAE, the US, or elsewhere, traditional high-street banks (Barclays, HSBC, Lloyds) are almost entirely inaccessible without physical UK residency.
          </p>
          <p>
            Digital FinTech banking platforms regulated by the UK Financial Conduct Authority (FCA) bridge this gap. They allow overseas directors to obtain official UK bank credentials, hold multiple currencies, and execute international wire transfers remotely.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="wise-deep-dive" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Wise Business (Formerly TransferWise): The Undisputed Leader
          </h2>
          <p>
            Wise Business is widely regarded as the premier business banking solution for foreign-owned UK companies.
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <Landmark className="text-gold-500" size={20} /> Wise Business Core Advantages:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Real Mid-Market Exchange Rates:</strong> Zero hidden markups on currency conversion.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Native Account Details:</strong> Official UK Sort Code, Account Number, US Routing, and IBAN.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Accounting Integration:</strong> Direct 2-way sync with Xero, QuickBooks, and FreeAgent.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>No Monthly Fees:</strong> One-time £45 registration fee, zero ongoing subscription charges.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="payoneer-deep-dive" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Payoneer: Ideal for E-Commerce & Marketplace Payouts
          </h2>
          <p>
            Payoneer excels for UK LTD companies operating e-commerce stores on Amazon UK/US, eBay, or selling freelance services via Upwork and Fiverr.
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <Globe2 className="text-gold-500" size={20} /> Payoneer Core Advantages:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Marketplace Integration:</strong> Direct payout API links for Amazon FBA, Walmart, and Upwork.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Local Bank Withdrawals:</strong> Transfer funds directly to overseas local bank accounts (e.g. PKR in Pakistan, AED in UAE).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Free Account Opening:</strong> Zero upfront registration fee.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="revolut-deep-dive" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Revolut Business: Best for Corporate Cards & Sub-Accounts
          </h2>
          <p>
            Revolut Business offers an advanced app interface tailored for software agencies needing instant virtual expense cards for remote teams.
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <CreditCard className="text-gold-500" size={20} /> Revolut Business Core Advantages:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Virtual Corporate Debit Cards:</strong> Generate disposable virtual cards for ad spend (Facebook/Google Ads) and SaaS subscriptions.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Multi-User Permissioning:</strong> Assign team roles with custom spend caps for employees.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK FORMATION & BANKING ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Form Your UK LTD & Secure Banking Support
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ provides complete non-resident UK company formation, registered London address, HMRC tax setup, and digital banking application support for £99.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UK Formation & Banking Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5: COMPARISON MATRIX */}
        <div id="comparison-matrix" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Feature-by-Feature Comparison Matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse border border-border rounded-xl overflow-hidden">
              <thead className="bg-navy-950 text-white font-serif">
                <tr>
                  <th className="p-4 border border-white/10">Feature</th>
                  <th className="p-4 border border-white/10 text-emerald-400">Wise Business</th>
                  <th className="p-4 border border-white/10 text-gold-400">Payoneer</th>
                  <th className="p-4 border border-white/10 text-blue-400">Revolut Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Account Setup Fee</td>
                  <td className="p-4">One-time £45</td>
                  <td className="p-4 font-semibold text-emerald-700">Free</td>
                  <td className="p-4">Free tier available</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Monthly Subscription</td>
                  <td className="p-4 font-semibold text-emerald-700">£0 / Month</td>
                  <td className="p-4">£0 / Month</td>
                  <td className="p-4">£0 to £19 / Month</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">UK Sort Code & Account No.</td>
                  <td className="p-4 font-semibold text-emerald-700">Included</td>
                  <td className="p-4">Receiving Account</td>
                  <td className="p-4 font-semibold text-emerald-700">Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">FX Rates</td>
                  <td className="p-4 font-semibold text-emerald-700">Real Mid-Market Rate (0.33%-0.5%)</td>
                  <td className="p-4">2% above mid-market</td>
                  <td className="p-4">Interbank rate (cap applies)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Corporate Debit Cards</td>
                  <td className="p-4">Physical & Virtual</td>
                  <td className="p-4">Physical Mastercard</td>
                  <td className="p-4 font-semibold text-emerald-700">Unlimited Virtual Cards</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Non-Resident Approval Speed</td>
                  <td className="p-4 font-semibold text-emerald-700">24 – 48 Hours</td>
                  <td className="p-4 font-semibold text-emerald-700">24 – 48 Hours</td>
                  <td className="p-4">2 – 5 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="recommendations" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Which Account Should You Choose?
          </h2>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-sm">
              <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
              <div>
                <strong>For IT Agencies & B2B Service Providers:</strong> Choose <strong>Wise Business</strong>. Its low FX conversion rates and native UK Sort Codes allow you to invoice international clients in USD, EUR, and GBP with minimum transaction loss.
              </div>
            </div>

            <div className="flex items-start gap-3 bg-navy-50 border border-navy-200 p-4 rounded-xl text-sm">
              <CheckCircle2 className="text-navy-700 shrink-0 mt-0.5" size={20} />
              <div>
                <strong>For Amazon Sellers & Freelancers:</strong> Choose <strong>Payoneer</strong> or open both Wise and Payoneer simultaneously to optimize marketplace payouts.
              </div>
            </div>
          </div>
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
            START YOUR UK BUSINESS TODAY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UK Company & Secure Business Banking
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Order online with ADVAQ. Get your official UK LTD incorporated in 24 hours with full digital business banking setup support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Formation & Banking — £99
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
