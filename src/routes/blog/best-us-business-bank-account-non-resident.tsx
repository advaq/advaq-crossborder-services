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
  CreditCard,
  Building,
  DollarSign,
  Award,
} from "lucide-react";

const faqs = [
  {
    q: "Can a foreign non-resident open a US business bank account remotely without visiting the US?",
    a: "Yes. Online business banking platforms like Mercury Bank and Relay Financial allow non-resident foreign LLC owners to complete 100% remote online applications without visiting a physical branch in the United States.",
  },
  {
    q: "What is the best US business bank account for a foreign-owned LLC?",
    a: "Mercury Bank is widely considered the best choice for tech startups, SaaS companies, and agency owners due to zero monthly fees, free domestic/international USD wires, and seamless Stripe integration. Relay Financial is ideal for multi-account budgeting and team debit cards.",
  },
  {
    q: "What documents are required to open a Mercury or Relay account for a foreign US LLC?",
    a: "You need: (1) State Approved Articles of Organization, (2) IRS CP575 / 147C EIN Confirmation Letter, (3) Signed Operating Agreement, and (4) Valid International Passport for all owners with 25%+ equity.",
  },
  {
    q: "Is Wise Business a full US bank account?",
    a: "Wise is a licensed Money Services Business (MSB), not a chartered US bank. While Wise provides US routing and account numbers for sending and receiving payments, it is best used alongside a chartered bank like Mercury or Relay.",
  },
  {
    q: "Why do traditional US High Street banks (like Chase or Bank of America) reject foreign directors remotely?",
    a: "Traditional US banks require in-person identity verification at a physical branch under US Patriot Act regulations. Digital neo-banks like Mercury specialize in remote international KYC compliance.",
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
  headline: "Mercury vs Relay vs Wise for US LLCs: Which US Bank Account is Best for Foreigners?",
  description:
    "Comprehensive 2026 comparative guide of Mercury Bank, Relay Financial, and Wise Business for foreign non-resident US LLC owners. Fees, wire limits, KYC rules, and Stripe integration.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/best-us-business-bank-account-non-resident",
};

export const Route = createFileRoute("/blog/best-us-business-bank-account-non-resident")({
  head: () => ({
    meta: [
      { title: "Mercury vs Relay vs Wise for US LLC (2026 Guide) | ADVAQ" },
      {
        name: "description",
        content:
          "Compare Mercury vs Relay vs Wise for non-resident US LLC owners. Remote opening without US visit, zero monthly fees, wire transfers & Stripe setup.",
      },
      {
        name: "keywords",
        content:
          "best us business bank account non resident, mercury bank vs relay financial non us citizen, open remote us business bank account wyoming delaware, wise business vs mercury us llc",
      },
      {
        property: "og:title",
        content: "Mercury vs Relay vs Wise for US LLCs: Which US Bank Account is Best for Foreigners?",
      },
      {
        property: "og:description",
        content:
          "Discover the best remote US business banking platforms for foreign non-residents, comparing Mercury, Relay Financial, and Wise Business.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/best-us-business-bank-account-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/best-us-business-bank-account-non-resident" }],
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
            <span>US Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Mercury vs Relay vs Wise for US LLCs: Which US Bank Account is Best for Foreigners?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive side-by-side banking analysis for non-resident founders comparing Mercury Bank, Relay Financial, and Wise Business on remote account opening, zero monthly fees, wire transfer rates, and Stripe integration.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Banking Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>9 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FDIC Insured Banking Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>US Banking Verdict Summary</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Mercury Bank (#1 Choice)</strong>
              <p className="text-navy-100 leading-relaxed">
                Best overall for tech startups & agencies. FDIC insured up to $5M, $0 monthly fee, free USD wires, instant Stripe integration.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Relay Financial (Best Budgeting)</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for e-commerce & multi-account allocation. Up to 20 checking accounts, team debit cards, zero monthly maintenance.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Wise Business (FX Payouts)</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for mid-market currency exchanges & sending funds to local personal bank accounts in Pakistan, UAE, or Europe.
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
            <li><a href="#mercury-review" className="hover:text-gold-600 underline">1. Mercury Bank: The #1 US Bank for Foreign Founders</a></li>
            <li><a href="#relay-review" className="hover:text-gold-600 underline">2. Relay Financial: Multi-Account Management & Virtual Cards</a></li>
            <li><a href="#wise-review" className="hover:text-gold-600 underline">3. Wise Business: Multi-Currency FX Powerhouse</a></li>
            <li><a href="#banking-matrix" className="hover:text-gold-600 underline">4. Side-by-Side US Banking Comparison Table</a></li>
            <li><a href="#kyc-approval-tips" className="hover:text-gold-600 underline">5. How to Guarantee Bank KYC Approval Without Rejection</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="mercury-review" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Mercury Bank: The #1 US Bank for Foreign Founders
          </h2>
          <p>
            <strong>Mercury Bank</strong> (partnered with Choice Financial Group and Evolve Bank & Trust, Members FDIC) is the leading digital banking platform built specifically for startups and international business owners.
          </p>
          <p>
            Mercury allows foreign non-residents to apply 100% online from their home country without visiting the US or having an SSN.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="relay-review" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Relay Financial: Multi-Account Management & Virtual Cards
          </h2>
          <p>
            <strong>Relay Financial</strong> is another outstanding FDIC-insured US banking platform (partnered with Thread Bank) designed for small businesses.
          </p>
          <p>
            Relay excels by allowing founders to create up to 20 individual checking accounts under one LLC entity and issue up to 50 physical or virtual Mastercard debit cards for team members.
          </p>
        </div>

        {/* SECTION 3 */}
        <div id="wise-review" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Wise Business: Multi-Currency FX Powerhouse
          </h2>
          <p>
            <strong>Wise Business</strong> provides multi-currency account details in USD, GBP, EUR, CAD, and AUD under a single dashboard.
          </p>
          <p>
            While Wise is an MSB rather than a full US bank, its mid-market foreign exchange rates make it indispensable for converting US LLC profits into local personal currencies (PKR, AED, EUR).
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            US BUSINESS BANKING ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Open Your US Business Bank Account Remotely
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares state incorporation documents, IRS EIN letters, and business descriptions to guarantee smooth onboarding with Mercury and Relay.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/mercury-bank-guide"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore US Banking Assistance Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="banking-matrix" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Side-by-Side US Banking Comparison Table
          </h2>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-sm border-collapse border border-border">
              <thead>
                <tr className="bg-navy-950 text-white">
                  <th className="p-3 border border-border font-semibold">Feature</th>
                  <th className="p-3 border border-border font-semibold text-gold-500">Mercury Bank</th>
                  <th className="p-3 border border-border font-semibold">Relay Financial</th>
                  <th className="p-3 border border-border font-semibold">Wise Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-gray-700">
                <tr>
                  <td className="p-3 border border-border font-medium">Monthly Service Fee</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">$0</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">$0</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">$0 ($31 one-time)</td>
                </tr>
                <tr className="bg-off-white">
                  <td className="p-3 border border-border font-medium">FDIC Deposit Insurance</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">Yes (Up to $5M)</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">Yes (Up to $3M)</td>
                  <td className="p-3 border border-border text-gray-500">No (Safeguarded)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-border font-medium">Remote Non-Resident KYC</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">100% Online</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">100% Online</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">100% Online</td>
                </tr>
                <tr className="bg-off-white">
                  <td className="p-3 border border-border font-medium">Domestic & Int'l USD Wires</td>
                  <td className="p-3 border border-border font-bold text-emerald-600">$0 Free Wires</td>
                  <td className="p-3 border border-border">$5 to $10</td>
                  <td className="p-3 border border-border">Low Mid-Market FX Fee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="kyc-approval-tips" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How to Guarantee Bank KYC Approval Without Rejection
          </h2>
          <p>
            To prevent your bank application from being rejected:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Provide a working website or active LinkedIn business profile.</li>
            <li>Ensure the company name on your IRS CP575 matches your Articles of Organization exactly.</li>
            <li>Do not use generic shared Registered Agent addresses as your business address.</li>
          </ul>
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
            US BUSINESS BANKING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Open Your US Bank Account with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Guaranteed KYC application preparation, CP575 verification, Operating Agreement drafting, and Mercury Bank onboarding.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/mercury-bank-guide"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order US Banking Assistance
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
