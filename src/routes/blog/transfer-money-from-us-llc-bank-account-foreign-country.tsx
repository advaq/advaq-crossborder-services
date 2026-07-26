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
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const faqs = [
  {
    q: "How can a foreign owner legally withdraw profits from a US LLC to a personal bank account abroad?",
    a: "Non-resident owners can transfer profits legally via: (1) Owner's Draw wire transfers from Mercury/Relay to a local personal bank account, (2) Wise Business foreign exchange transfers, or (3) Payoneer / Revolut international payouts.",
  },
  {
    q: "Is there a US withholding tax when transferring money from a US LLC to an overseas personal bank account?",
    a: "For a single-member foreign-owned US LLC with zero US physical presence and zero US trade or business (ETBUS), there is NO US federal withholding tax on profit distributions sent abroad.",
  },
  {
    q: "What is the cheapest way to send USD from a Mercury Bank account to Pakistan, UAE, or Europe?",
    a: "Linking your Mercury Bank account to Wise Business offers the lowest mid-market exchange rates and minimal fees compared to traditional SWIFT international wire transfers.",
  },
  {
    q: "Do I need to report profit withdrawals on my local country tax return (e.g. FBR Pakistan)?",
    a: "Yes. While US tax may be zero under non-resident rules, foreign owners must declare foreign remittance and offshore business income on their local home country tax return (e.g. FBR in Pakistan or local tax authority).",
  },
  {
    q: "What documentation should I keep when transferring money out of my US LLC?",
    a: "You must record every transfer in your accounting books as an 'Owner's Draw' or 'Member Distribution' and preserve bank transfer receipts for 6 years.",
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
  headline: "How to Transfer Funds from a US LLC Bank Account to Foreign Personal Accounts",
  description:
    "Complete 2026 profit extraction guide for non-US residents. Learn how to transfer funds from Mercury/Relay US bank accounts to personal foreign bank accounts (Wise, SWIFT, Owner's Draws).",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/transfer-money-from-us-llc-bank-account-foreign-country",
};

export const Route = createFileRoute("/blog/transfer-money-from-us-llc-bank-account-foreign-country")({
  head: () => ({
    meta: [
      { title: "Transfer Funds from US LLC to Foreign Personal Account | ADVAQ" },
      {
        name: "description",
        content:
          "Guide for foreign non-residents to transfer funds from US LLC bank account to local personal bank accounts. Wise, SWIFT wire, Owner's Draws & 0% US withholding tax.",
      },
      {
        name: "keywords",
        content:
          "transfer money from us llc bank account foreign country, mercury bank owner draw international wire, how to withdraw profits from us llc non resident, foreign remittance home country tax",
      },
      {
        property: "og:title",
        content: "How to Transfer Funds from a US LLC Bank Account to Foreign Personal Accounts",
      },
      {
        property: "og:description",
        content:
          "Discover how foreign non-resident founders legally transfer US LLC profits to personal bank accounts in Pakistan, UAE, UK, or Europe with minimal FX fees.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/transfer-money-from-us-llc-bank-account-foreign-country" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/transfer-money-from-us-llc-bank-account-foreign-country" }],
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
            How to Transfer Funds from a US LLC Bank Account to Foreign Personal Accounts
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive financial guide for foreign non-resident founders on legal profit extraction, Owner's Draws, SWIFT wire transfers, Wise FX optimization, and home country tax reporting.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Accounting Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>International Remittance & IRS Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Profit Transfer Key Rules</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Owner's Draw Legal Status:</strong> Transfers from an LLC to a foreign member are classified as "Owner's Draws" (equity distributions), NOT payroll salaries.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>0% US Withholding Tax:</strong> For foreign non-residents with no US physical presence, there is zero US withholding tax on profit distributions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Best Transfer Route:</strong> Linking Mercury or Relay Bank with Wise Business provides mid-market exchange rates to local currencies (PKR, AED, EUR).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Home Country Taxes:</strong> Profit draws must be declared on your personal home country tax return (e.g. FBR in Pakistan).</span>
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
            <li><a href="#owners-draw" className="hover:text-gold-600 underline">1. What Is an Owner's Draw for a Non-Resident US LLC?</a></li>
            <li><a href="#transfer-methods" className="hover:text-gold-600 underline">2. Top 3 Money Transfer Methods (Mercury, Wise, SWIFT)</a></li>
            <li><a href="#us-tax-implications" className="hover:text-gold-600 underline">3. US Tax & Withholding Rules on Profit Distributions</a></li>
            <li><a href="#home-country-reporting" className="hover:text-gold-600 underline">4. Home Country Tax Compliance & Foreign Remittance</a></li>
            <li><a href="#bookkeeping-records" className="hover:text-gold-600 underline">5. Bookkeeping & Record Keeping for Owner Transfers</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="owners-draw" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is an Owner's Draw for a Non-Resident US LLC?
          </h2>
          <p>
            When you own a single-member or multi-member US LLC, you do not receive a standard US W-2 employee salary.
          </p>
          <p>
            Instead, when you transfer money from your US LLC bank account to your personal bank account abroad, the transaction is legally categorized as an <strong>Owner's Draw</strong> (or Member Capital Distribution).
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="transfer-methods" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Top 3 Money Transfer Methods (Mercury, Wise, SWIFT)
          </h2>

          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-base mb-2">
                <Globe2 size={18} />
                <span>Wise Business FX</span>
              </div>
              <p className="text-xs text-gray-600">
                Cheapest & fastest. Converts USD to PKR/AED/EUR at real mid-market rates and deposits directly into local banks.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-navy-700 font-semibold text-base mb-2">
                <ArrowUpRight size={18} />
                <span>Mercury SWIFT Wire</span>
              </div>
              <p className="text-xs text-gray-600">
                Mercury offers free international USD wires. Best for transferring large lump sums directly to foreign USD accounts.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold text-base mb-2">
                <DollarSign size={18} />
                <span>Payoneer / Revolut</span>
              </div>
              <p className="text-xs text-gray-600">
                Great alternative for multi-currency payout management and global supplier payments.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="us-tax-implications" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. US Tax & Withholding Rules on Profit Distributions
          </h2>
          <p>
            For a foreign non-resident owning a Disregarded Entity LLC with zero US physical presence, the IRS imposes <strong>0% US withholding tax</strong> on Owner's Draws sent outside the United States.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            US BUSINESS BANKING & TAX SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Optimize Your US Profit Remittances with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ assists foreign founders with compliant bookkeeping, Owner's Draw records, IRS Form 5472 filings, and Mercury bank setups.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/mercury-bank-guide"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore Banking & Tax Advisory <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="home-country-reporting" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Home Country Tax Compliance & Foreign Remittance
          </h2>
          <p>
            While US tax on profit draws is zero, you must report international wire receipts on your local home country personal income tax return (e.g. FBR in Pakistan, HMRC in UK, or local tax authorities).
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="bookkeeping-records" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Bookkeeping & Record Keeping for Owner Transfers
          </h2>
          <p>
            Always preserve bank wire receipts and record transfers in Quickbooks/Xero under an equity account named <em>"Owner's Draw"</em> to maintain clean separation between business expenses and personal distributions.
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
            US REMITTANCE & TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Manage Your US LLC Finances with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Mercury business banking setup, IRS Form 5472 tax compliance, and multi-currency foreign remittance advisory.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/mercury-bank-guide"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order US Banking Advisory
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
