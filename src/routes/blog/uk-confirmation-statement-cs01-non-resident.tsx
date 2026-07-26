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
  FileCheck,
  Calendar,
  AlertCircle,
} from "lucide-react";

const faqs = [
  {
    q: "Is a UK Confirmation Statement (CS01) the same as annual tax accounts?",
    a: "No. A Confirmation Statement (CS01) is a corporate governance filing for Companies House that verifies non-financial company details (directors, shareholders, registered address, PSCs, SIC code). Annual Tax Accounts and CT600 returns are financial filings submitted separately to HMRC.",
  },
  {
    q: "When is the deadline to file a UK Confirmation Statement?",
    a: "The Confirmation Statement must be filed within 14 days of your company's annual 'review period' end date (which is exactly 1 year from incorporation date or 1 year from your previous CS01 filing date).",
  },
  {
    q: "What is the Companies House filing fee for a Confirmation Statement in 2026?",
    a: "Companies House charges a £34 online filing fee for the annual Confirmation Statement.",
  },
  {
    q: "What happens if an overseas director fails to file the Confirmation Statement on time?",
    a: "Failing to file a CS01 is a criminal offense under the Companies Act 2006. Companies House will issue formal warning letters and eventually strike off (dissolve) your UK LTD company from the register, causing company bank accounts to be frozen.",
  },
  {
    q: "Must a dormant company file a Confirmation Statement?",
    a: "Yes. Every active or dormant UK Limited Company registered with Companies House must file an annual CS01 confirmation statement without exception.",
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
  headline: "What is a UK Confirmation Statement (CS01) and Who Must File It?",
  description:
    "Complete 2026 compliance guide for foreign directors on filing Companies House Form CS01 Confirmation Statement, deadlines, fees, and strike-off risks.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uk-confirmation-statement-cs01-non-resident",
};

export const Route = createFileRoute("/blog/uk-confirmation-statement-cs01-non-resident")({
  head: () => ({
    meta: [
      { title: "UK Confirmation Statement CS01 Non-Resident Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to Companies House Form CS01 Confirmation Statement for overseas UK company directors. Annual deadlines, £34 filing fee, and compliance rules.",
      },
      {
        name: "keywords",
        content:
          "uk confirmation statement cs01 non resident, companies house form cs01 foreign director, cs01 annual filing deadline uk ltd, compulsory strike off late confirmation statement",
      },
      {
        property: "og:title",
        content: "What is a UK Confirmation Statement (CS01) and Who Must File It?",
      },
      {
        property: "og:description",
        content:
          "Learn what information must be confirmed on Companies House Form CS01, filing deadlines, and how non-resident directors avoid company dissolution.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-confirmation-statement-cs01-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-confirmation-statement-cs01-non-resident" }],
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
            What is a UK Confirmation Statement (CS01) and Who Must File It?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal guide for overseas directors on Companies House Form CS01, annual review dates, corporate governance updates, and avoiding compulsory company strike-off.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Companies House Statutory Filing</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Form CS01 Requirements at a Glance</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Mandatory Annual Duty:</strong> Every registered UK Limited Company must file Form CS01 with Companies House once every 12 months.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>14-Day Filing Window:</strong> The statement must be submitted within 14 days after your company's annual review period ends.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>What is Confirmed:</strong> Registered Office, Directors' Service Address, Share Capital, Shareholders, People with Significant Control (PSC), and SIC industry code.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Compulsory Strike-Off Warning:</strong> Failure to file results in Companies House initiating dissolution proceedings, which legally freezes company bank accounts.</span>
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
            <li><a href="#what-is-cs01" className="hover:text-gold-600 underline">1. What is a UK Confirmation Statement (Form CS01)?</a></li>
            <li><a href="#cs01-vs-accounts" className="hover:text-gold-600 underline">2. Confirmation Statement vs Annual Tax Accounts</a></li>
            <li><a href="#what-is-verified" className="hover:text-gold-600 underline">3. What Information Must Be Verified on Form CS01?</a></li>
            <li><a href="#filing-deadlines" className="hover:text-gold-600 underline">4. Annual Filing Deadlines & Review Period Calculation</a></li>
            <li><a href="#strike-off-risk" className="hover:text-gold-600 underline">5. Consequences of Late Filing: Compulsory Strike-Off</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-cs01" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What is a UK Confirmation Statement (Form CS01)?
          </h2>
          <p>
            Under Section 853A of the <em>Companies Act 2006</em>, every UK company must deliver a <strong>Confirmation Statement (Form CS01)</strong> to Companies House at least once in every 12-month period.
          </p>
          <p>
            The purpose of the Confirmation Statement is to verify that all statutory company records held on the public Companies House register are accurate and up to date.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="cs01-vs-accounts" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Confirmation Statement vs Annual Tax Accounts
          </h2>
          <p>
            Many first-time overseas directors confuse the Confirmation Statement with annual financial accounts. They serve entirely distinct legal functions:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-600 font-semibold text-base mb-2">
                <FileCheck size={20} />
                <span>Confirmation Statement (CS01)</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Corporate Governance:</strong> Confirms directors, shareholders, registered address, and PSC data. Submitted to Companies House. Contains NO financial figures.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-navy-700 font-semibold text-base mb-2">
                <Building2 size={20} />
                <span>Annual Tax Accounts & CT600</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Financial & Tax Reporting:</strong> Reports profit/loss, balance sheet, and Corporation Tax liabilities. Submitted to HMRC and Companies House.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="what-is-verified" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. What Information Must Be Verified on Form CS01?
          </h2>
          <p>
            When submitting Form CS01, you must review and confirm six core company metrics:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base">Mandatory Verification Checklist:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Registered Office Address:</strong> Confirms physical London or UK office location.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Directors & Officers Details:</strong> Service addresses and residential address privacy records.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>People with Significant Control (PSC):</strong> Beneficial owners holding &gt; 25% shares or voting rights.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Statement of Capital:</strong> Total number, class, and aggregate nominal value of issued shares.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Shareholder Register:</strong> Current list of company shareholders.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>SIC Code:</strong> 5-digit Standard Industrial Classification code describing primary business activity.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ANNUAL COMPLIANCE FILING SERVICE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your UK Confirmation Statement (CS01)
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares and files your annual Companies House Confirmation Statement on time, paying the official £34 filing fee and guaranteeing zero compliance notices.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/confirmation-statement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore CS01 Filing Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="filing-deadlines" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Annual Filing Deadlines & Review Period Calculation
          </h2>
          <p>
            Your company's annual review period starts on the day of incorporation and ends exactly 12 months later.
          </p>
          <p>
            You have a strict <strong>14-day statutory grace period</strong> from the end of the review period to submit Form CS01 to Companies House.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="strike-off-risk" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Consequences of Late Filing: Compulsory Strike-Off
          </h2>
          <p>
            Ignoring Confirmation Statement deadlines carries severe legal repercussions under UK corporate law:
          </p>

          <div className="space-y-3 my-4">
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 rounded-xl text-sm">
              <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Compulsory Strike-Off (First Gazette Notice):</strong> If a CS01 is overdue by more than 30 days, Companies House issues a Gazette Notice to dissolve the company.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 rounded-xl text-sm">
              <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Frozen Bank Accounts:</strong> Once a company is struck off, all corporate bank accounts (Wise, Revolut, Payoneer) are instantly frozen and all company assets become property of the Crown (Bona Vacantia).
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
            COMPANIES HOUSE STATUTORY FILING
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your Confirmation Statement (CS01) with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Includes Companies House £34 fee, PSC register update, and guaranteed compliance for non-resident directors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/confirmation-statement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order CS01 Filing Service
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
