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
  Scale,
  Percent,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "Which business bank account is best for non-resident UK LTD owners?",
    a: "Wise Business is generally considered the best overall account for non-resident UK companies due to its native UK Sort Codes, transparent mid-market FX rates (0.33%–0.5%), multi-currency holding (GBP, USD, EUR), and seamless international wire capabilities.",
  },
  {
    q: "Can I have both a Wise Business account and a Payoneer account for the same UK LTD?",
    a: "Yes. Many overseas entrepreneurs hold both Wise Business (for general client invoicing, vendor payouts, and corporate expenses) and Payoneer (for automated marketplace payouts from Amazon UK, eBay, Upwork, and Fiverr).",
  },
  {
    q: "Do Wise and Payoneer charge monthly subscription fees for UK business accounts?",
    a: "Wise Business charges a one-time £45 account setup and verification fee with zero monthly subscription costs. Payoneer has no account opening fee, charging low transaction fees during currency conversion or payouts.",
  },
  {
    q: "Can I issue corporate debit cards to my remote team members?",
    a: "Yes. Both Wise Business and Revolut Business allow UK LTD directors to issue physical and virtual corporate debit cards with individual spending limits for remote employees and software subscriptions.",
  },
  {
    q: "Will my UK business account be frozen if I receive large international transfers?",
    a: "To prevent compliance holds, ensure your client invoices match incoming wire transfer amounts and maintain updated client contracts (such as Master Service Agreements or Statements of Work) to satisfy AML verification inquiries.",
  },
  {
    q: "Are funds in Wise Business safe for non-resident directors?",
    a: "Yes. Wise is authorized by the UK Financial Conduct Authority (FCA) as an Electronic Money Institution (EMI). It safeguards 100% of customer funds in liquid, segregated accounts held at tier-1 systemic banks (such as JPMorgan Chase and Barclays).",
  },
  {
    q: "How does Revolut Business compare to Wise for UK LTDs?",
    a: "Revolut Business offers superior virtual card management and team expense controls, while Wise Business provides cheaper, transparent mid-market FX rates for international wires.",
  },
  {
    q: "Can I link Wise Business or Payoneer to Stripe UK?",
    a: "Yes. Both Wise Business and Payoneer provide official UK Sort Codes and 8-digit Account Numbers that link seamlessly with Stripe UK or PayPal Business for automatic daily merchant payouts.",
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
    "Exhaustive 2026 comparison of the best business bank accounts for non-resident UK LTD owners. Compare Wise Business, Payoneer, and Revolut Business on fees, FX rates, and features.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/best-bank-account-for-uk-ltd-non-resident",
};

export const Route = createFileRoute("/blog/best-bank-account-for-uk-ltd-non-resident")({
  head: () => ({
    meta: [
      { title: "Wise vs Payoneer vs Revolut for UK LTD (2026 Masterclass) | ADVAQ" },
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
            An exhaustive head-to-head legal and financial comparison of FX exchange rates, international transfer fees, corporate card features, and non-resident approval speeds across top UK FinTech banking providers in 2026.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UK Corporate Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>22 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FCA Regulated FinTech Compliance Analysis</span>
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
              <strong className="text-emerald-400 block font-serif text-sm mb-1">🥇 Wise Business</strong>
              <p className="text-navy-100 text-[11px] leading-relaxed">
                <strong>Best Overall:</strong> Lowest FX conversion fees (real mid-market rates), native UK Sort Code + 8-digit Account Number, USD routing, zero monthly fees.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="text-gold-400 block font-serif text-sm mb-1">🥈 Payoneer</strong>
              <p className="text-navy-100 text-[11px] leading-relaxed">
                <strong>Best for Marketplaces:</strong> Direct payouts from Amazon, Upwork, Fiverr & eBay. Seamless local bank withdrawals in foreign currency.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="text-blue-400 block font-serif text-sm mb-1">🥉 Revolut Business</strong>
              <p className="text-navy-100 text-[11px] leading-relaxed">
                <strong>Best for Expense Cards:</strong> Instant virtual employee debit cards, Xero accounting sync, and team permission controls.
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
            <li><a href="#overview" className="hover:text-gold-600 underline">1. Why Non-Resident UK LTDs Rely on FinTech Banking</a></li>
            <li><a href="#wise-deep-dive" className="hover:text-gold-600 underline">2. Wise Business: Features, Pricing & FX Rates</a></li>
            <li><a href="#payoneer-deep-dive" className="hover:text-gold-600 underline">3. Payoneer: Features, Pricing & E-Commerce Integration</a></li>
            <li><a href="#revolut-deep-dive" className="hover:text-gold-600 underline">4. Revolut Business: Features, Cards & Sub-Accounts</a></li>
            <li><a href="#comparison-matrix" className="hover:text-gold-600 underline">5. Feature-by-Feature FinTech Comparison Matrix</a></li>
            <li><a href="#recommendations" className="hover:text-gold-600 underline">6. Recommended Selection by Business Type</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">7. 6 Critical Common Banking Mistakes to Avoid</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Non-Resident UK LTDs Rely on FinTech Banking
          </h2>
          <p>
            For foreign founders operating a UK Limited Company from Pakistan, the UAE, the US, or elsewhere, traditional high-street banks (Barclays, HSBC, Lloyds, NatWest) are practically inaccessible without physical UK residency and London in-person branch interviews.
          </p>
          <p>
            Digital FinTech banking platforms regulated by the UK Financial Conduct Authority (FCA) as Electronic Money Institutions (EMIs) bridge this gap. They allow overseas directors to obtain official UK bank credentials, hold multi-currency balances, and execute international wire transfers remotely.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Software Agency FX Savings
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Usman, a software agency director in Lahore. Usman invoices European clients in EUR and US clients in USD under his UK LTD. By utilizing Wise Business, Usman receives EUR via SEPA and USD via ACH, converting funds to PKR for local developer salaries at a 0.35% FX fee—saving over £4,200 annually compared to traditional bank wire fees.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="wise-deep-dive" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Wise Business (Formerly TransferWise): The Undisputed Leader
          </h2>
          <p>
            Wise Business is widely recognized as the gold standard corporate banking account for foreign-owned UK companies:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Landmark className="text-gold-600" size={18} />
                Real Mid-Market FX Rates & Native UK Credentials
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Wise provides true mid-market exchange rates without hidden currency markups. It equips your UK LTD with a native UK Sort Code (56-00-36), 8-digit Account Number, US Routing Number, and European IBAN.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <CreditCard className="text-gold-600" size={18} />
                Zero Monthly Subscription Fees
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Wise Business charges a one-time £45 account verification fee with **zero ongoing monthly maintenance costs**.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="payoneer-deep-dive" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Payoneer: Ideal for E-Commerce & Marketplace Payouts
          </h2>
          <p>
            Payoneer excels for UK LTD companies operating e-commerce stores on Amazon UK/US, eBay, or selling services via Upwork and Fiverr:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Globe2 className="text-gold-600" size={18} />
                Automated Marketplace Integrations
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Payoneer connects directly to Amazon FBA, Walmart, eBay, Upwork, and Fiverr for automated daily marketplace payouts in GBP, USD, and EUR.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <CreditCard className="text-gold-600" size={18} />
                Local Overseas Bank Withdrawals
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Withdraw corporate earnings directly into foreign personal or commercial bank accounts in 150+ countries in local currency.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="revolut-deep-dive" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Revolut Business: Best for Corporate Cards & Sub-Accounts
          </h2>
          <p>
            Revolut Business offers an advanced app interface tailored for software agencies needing instant virtual expense cards for remote teams:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <CreditCard className="text-gold-600" size={18} />
                Unlimited Virtual Debit Cards for Ad Spend
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Generate disposable virtual cards for Facebook Ads, Google Ads, and SaaS tool subscriptions with dedicated monthly spending caps.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="comparison-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Feature-by-Feature FinTech Comparison Matrix
          </h2>
          <p>
            Side-by-side comparison of the top three UK FinTech banking platforms:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Comparison Feature</th>
                  <th className="p-4 text-gold-500">Wise Business</th>
                  <th className="p-4 text-emerald-400">Payoneer</th>
                  <th className="p-4 text-blue-400">Revolut Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Setup Verification Fee</td>
                  <td className="p-4 text-navy-900">One-time £45 Fee</td>
                  <td className="p-4 text-emerald-700 font-bold">Free to Open</td>
                  <td className="p-4 text-navy-900">Free Tier Available</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Monthly Subscription</td>
                  <td className="p-4 text-emerald-700 font-bold">£0 / Month</td>
                  <td className="p-4 text-emerald-700 font-bold">£0 / Month</td>
                  <td className="p-4 text-navy-900">£0 to £19 / Month</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">UK Sort Code & Account #</td>
                  <td className="p-4 text-emerald-700 font-bold">Included (Native 56-00-36)</td>
                  <td className="p-4 text-navy-900">Receiving Account</td>
                  <td className="p-4 text-emerald-700 font-bold">Included</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">FX Exchange Markups</td>
                  <td className="p-4 text-emerald-700 font-bold">Mid-Market Rate (0.33%–0.5%)</td>
                  <td className="p-4 text-navy-900">1.5%–2% Markup</td>
                  <td className="p-4 text-navy-900">Interbank (Limits Apply)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Non-Resident Approval Speed</td>
                  <td className="p-4 text-emerald-700 font-bold">24 to 48 Hours</td>
                  <td className="p-4 text-emerald-700 font-bold">24 to 48 Hours</td>
                  <td className="p-4 text-navy-900">2 to 5 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
              Explore UK Banking Packages <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="recommendations" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Recommended Selection by Business Type
          </h2>
          <p>
            Choose your banking stack based on your core business model:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-emerald-200 bg-emerald-50/40 rounded-2xl">
              <h4 className="font-bold text-emerald-900 text-base mb-1">For Software Agencies & B2B Consultants</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Choose <strong>Wise Business</strong>. Its low FX conversion rates and native UK Sort Codes allow you to invoice international clients in USD, EUR, and GBP with minimum transaction loss.
              </p>
            </div>

            <div className="p-5 border border-navy-200 bg-navy-50/40 rounded-2xl">
              <h4 className="font-bold text-navy-950 text-base mb-1">For Amazon Sellers & E-Commerce Brands</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Set up **Dual Banking** with Wise Business and Payoneer simultaneously to optimize marketplace payouts and supplier wire transfers.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. 6 Critical Common Banking Mistakes to Avoid
          </h2>
          <p>
            Steer clear of these six costly banking missteps:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Depositing Unverified Large Wires Without Invoices
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Receiving large wire transfers without matching client contracts or invoices triggers automated AML compliance holds.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Using Personal Accounts for Corporate Expenses
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Intermingling personal and business funds breaches the corporate veil and creates tax audit complications.
              </p>
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
