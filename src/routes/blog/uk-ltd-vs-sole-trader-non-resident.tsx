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
  Scale,
  DollarSign,
  ShieldAlert,
} from "lucide-react";

const faqs = [
  {
    q: "Can a non-UK resident register as a Sole Trader in the UK?",
    a: "Technically no. To register as a Sole Trader with HMRC, you must have a UK National Insurance Number (NINo) and reside in the UK. Non-UK residents operating remotely cannot register as sole traders and must instead form a UK Limited (LTD) company.",
  },
  {
    q: "Why is a UK LTD better than a Sole Trader for international freelancers?",
    a: "A UK LTD creates a distinct legal entity separate from your personal assets, providing limited liability protection. Additionally, it offers enterprise credibility with global B2B clients, allows multi-currency business banking, and provides tax-efficient dividend structuring.",
  },
  {
    q: "Do I pay double tax if I own a UK LTD as a foreign resident?",
    a: "No. The UK has Double Taxation Treaties (DTT) with over 130 countries. Your UK LTD pays UK Corporation Tax (19%–25%) on net company profits, while personal dividends are declared in your home jurisdiction in accordance with local double-tax rules.",
  },
  {
    q: "What is the liability difference between a Sole Trader and an LTD?",
    a: "As a Sole Trader, you have unlimited personal liability — your personal savings, home, and assets can be seized to pay business debts or legal claims. In a UK LTD, your liability is limited strictly to the nominal value of your unpaid company shares.",
  },
  {
    q: "How much does it cost to set up a UK LTD vs Sole Trader?",
    a: "Setting up a Sole Trader is free for UK residents. Incorporating a UK LTD via ADVAQ costs just £99 and includes official Companies House registration, London registered address, HMRC tax setup, and business bank account opening assistance.",
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
  headline: "UK LTD vs Sole Trader: Which Business Structure is Best for Non-Residents?",
  description:
    "Comprehensive comparison between a UK Limited (LTD) company and Sole Trader structure for overseas founders, freelancers, and agency owners in 2026.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://advaq.com/blog/uk-ltd-vs-sole-trader-non-resident",
};

export const Route = createFileRoute("/blog/uk-ltd-vs-sole-trader-non-resident")({
  head: () => ({
    meta: [
      { title: "UK LTD vs Sole Trader for Non-Residents (2026 Guide) | ADVAQ" },
      {
        name: "description",
        content:
          "Detailed legal comparison between a UK LTD and Sole Trader setup for non-UK residents. Discover liability, tax, banking, and registration rules.",
      },
      {
        name: "keywords",
        content:
          "uk ltd vs sole trader non resident, sole trader vs limited company uk overseas, uk business structure for foreigners, non resident sole trader uk",
      },
      {
        property: "og:title",
        content: "UK LTD vs Sole Trader: Which Business Structure is Best for Non-Residents?",
      },
      {
        property: "og:description",
        content:
          "Compare legal protection, tax efficiency, and banking options for non-UK founders between a Limited Company and Sole Trader.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-ltd-vs-sole-trader-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-ltd-vs-sole-trader-non-resident" }],
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
            UK LTD vs Sole Trader: Which Structure Is Best for Non-Residents?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A head-to-head comparison of legal liability, tax efficiency, corporate banking, and eligibility rules for non-UK resident founders and freelancers.
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
              <span>HMRC & Companies House Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>The Bottom Line for Non-Residents</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            For non-UK residents living overseas, a <strong>UK Limited (LTD) Company is the ONLY viable, legally protected business structure</strong>. HMRC requires a UK National Insurance Number for Sole Trader registration, making Sole Proprietorship practically unavailable to non-residents.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-3.5 rounded-lg text-emerald-200">
              <strong className="block text-emerald-400 mb-1">UK Limited Company (LTD)</strong>
              ✅ 100% Open to Non-Residents<br />
              ✅ Limited Personal Liability<br />
              ✅ Digital Banking (Wise, Payoneer)<br />
              ✅ Enterprise B2B Credibility
            </div>
            <div className="bg-red-950/60 border border-red-500/30 p-3.5 rounded-lg text-red-200">
              <strong className="block text-red-400 mb-1">Sole Trader (Self-Employed)</strong>
              ❌ Requires UK Residency & NINo<br />
              ❌ Unlimited Personal Liability<br />
              ❌ No Separate Business Legal Entity<br />
              ❌ High Street Bank Restrictions
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
            <li><a href="#definition" className="hover:text-gold-600 underline">Understanding the Fundamental Definitions</a></li>
            <li><a href="#eligibility" className="hover:text-gold-600 underline">Eligibility Rules: Why Sole Trader Fails for Non-Residents</a></li>
            <li><a href="#liability" className="hover:text-gold-600 underline">Personal Liability Protection Comparison</a></li>
            <li><a href="#taxation" className="hover:text-gold-600 underline">Taxation & Profit Extraction (Corporation Tax vs Income Tax)</a></li>
            <li><a href="#banking-credibility" className="hover:text-gold-600 underline">Corporate Banking & Global Client Credibility</a></li>
            <li><a href="#comparison-table" className="hover:text-gold-600 underline">Comprehensive Comparison Table</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="definition" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Understanding the Fundamental Definitions
          </h2>
          <p>
            When starting a business connected to the United Kingdom, entrepreneurs must choose between two primary legal structures: a <strong>Sole Trader</strong> (Self-Employed individual) or a <strong>Private Limited Company (LTD)</strong>.
          </p>
          <p>
            A <strong>Sole Trader</strong> is an individual who runs a business as a self-employed person. The individual and the business are legally identical — there is no legal distinction between the owner's personal identity and their business operations.
          </p>
          <p>
            A <strong>UK Limited Company (LTD)</strong>, on the other hand, is a separate legal entity created under the <em>Companies Act 2006</em>. It has its own legal identity, can own assets, sign contracts, incur liabilities, and pay taxes independently of its owners (shareholders) and managers (directors).
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="eligibility" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Eligibility Rules: Why Sole Trader Fails for Non-Residents
          </h2>
          <p>
            For foreign entrepreneurs operating from Pakistan, the UAE, the US, or elsewhere, eligibility is the first major hurdle.
          </p>
          <div className="bg-red-50 border border-red-200 p-6 rounded-xl space-y-3 my-4">
            <h4 className="font-bold text-red-900 text-lg flex items-center gap-2">
              <ShieldAlert size={20} className="text-red-600" />
              The HMRC National Insurance Barrier
            </h4>
            <p className="text-sm text-red-800 leading-relaxed">
              To register as a Sole Trader in the UK, HMRC requires you to apply for a UK National Insurance Number (NINo) and file Self-Assessment tax returns as a UK resident. If you do not live in the UK and do not have a UK right-to-work visa, you cannot obtain a NINo or register as a Sole Trader.
            </p>
          </div>
          <p>
            In contrast, <strong>Companies House allows anyone of any nationality residing anywhere in the world</strong> to register as a director or shareholder of a UK LTD company. There is zero requirement to live in the UK or hold a UK visa.
          </p>
        </div>

        {/* SECTION 3 */}
        <div id="liability" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Personal Liability Protection Comparison
          </h2>
          <p>
            Liability protection is arguably the single most important factor for IT software agencies, e-commerce stores, and digital service providers dealing with international clients.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-red-200 bg-red-50/40 p-6 rounded-xl">
              <h3 className="font-bold text-red-900 text-lg mb-2">Sole Trader: Unlimited Liability</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                As a Sole Trader, you are personally responsible for all financial losses and debts. If a client sues for copyright infringement, project delays, or contract breach, your personal bank accounts, savings, and personal property can be seized.
              </p>
            </div>

            <div className="border border-emerald-200 bg-emerald-50/40 p-6 rounded-xl">
              <h3 className="font-bold text-emerald-900 text-lg mb-2">UK LTD: Limited Corporate Liability</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                A UK LTD creates a legal firewall. Shareholders are only liable up to the nominal value of their shares (typically £1 per share). Your personal wealth remains completely insulated from company debts or lawsuits.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            NON-RESIDENT UK FORMATION
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Form Your UK LTD Company Remotely for £99
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ provides complete non-resident UK incorporation, registered London address, HMRC tax setup, and digital business banking assistance in 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UK Company Formation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="taxation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Taxation & Profit Extraction (Corporation Tax vs Income Tax)
          </h2>
          <p>
            Tax efficiency and distribution rules differ dramatically between the two structures:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-4">
            <div>
              <h4 className="font-bold text-navy-900 text-base">UK LTD Tax Model</h4>
              <p className="text-sm text-gray-600 mt-1">
                A UK LTD pays <strong>UK Corporation Tax</strong> (19% on net profits under £50,000) on company earnings after deducting allowable business expenses (software subscriptions, marketing, hosting, hardware, subcontractor fees). Profits can then be drawn tax-efficiently as dividend payouts to overseas directors under Double Taxation Treaties.
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <h4 className="font-bold text-navy-900 text-base">Sole Trader Tax Model</h4>
              <p className="text-sm text-gray-600 mt-1">
                Sole Traders pay UK Income Tax (up to 45%) and Class 2/4 National Insurance Contributions on all profits earned, regardless of whether the money is retained in the business or spent.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="banking-credibility" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Corporate Banking & Global Client Credibility
          </h2>
          <p>
            International enterprise clients in North America, Western Europe, and Australia rarely sign contracts with unverified overseas individuals.
          </p>
          <p>
            Having a <strong>UK Limited Company with a Companies House registration number</strong> gives your agency immediate corporate standing. Furthermore, non-resident UK LTD owners can open business bank accounts with multi-currency digital banks like <strong>Wise Business, Revolut Business, or Payoneer</strong> to invoice clients in GBP, USD, and EUR seamlessly.
          </p>
        </div>

        {/* SECTION 6: COMPARISON TABLE */}
        <div id="comparison-table" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Comprehensive Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse border border-border rounded-xl overflow-hidden">
              <thead className="bg-navy-950 text-white font-serif">
                <tr>
                  <th className="p-4 border border-white/10">Feature</th>
                  <th className="p-4 border border-white/10 text-gold-400">UK Limited Company (LTD)</th>
                  <th className="p-4 border border-white/10 text-navy-200">UK Sole Trader</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Non-Resident Eligibility</td>
                  <td className="p-4 font-semibold text-emerald-700 bg-emerald-50/50">100% Eligible (No UK Visa Required)</td>
                  <td className="p-4 font-semibold text-red-700 bg-red-50/50">Ineligible (Requires UK Residency & NINo)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Personal Liability</td>
                  <td className="p-4">Limited to unpaid shares value</td>
                  <td className="p-4">Unlimited personal asset liability</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Primary Tax Type</td>
                  <td className="p-4">19% Corporation Tax on Net Profits</td>
                  <td className="p-4">Up to 45% Income Tax + NICs</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Digital Banking Options</td>
                  <td className="p-4">Wise Business, Payoneer, Revolut</td>
                  <td className="p-4">Restricted high-street personal accounts</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Enterprise B2B Trust</td>
                  <td className="p-4">High (Official Companies House record)</td>
                  <td className="p-4">Low (Perceived as individual freelancer)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-dark-text">Setup Speed</td>
                  <td className="p-4">24 Hours via ADVAQ online portal</td>
                  <td className="p-4">Weeks (requires UK address proof & NINo)</td>
                </tr>
              </tbody>
            </table>
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
            READY TO SETUP YOUR UK LIMITED COMPANY?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UK LTD with ADVAQ Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Get your official Companies House registration, London registered office address, and business banking assistance for just £99.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Company Formation — £99
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Chat with Corporate Specialist
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
