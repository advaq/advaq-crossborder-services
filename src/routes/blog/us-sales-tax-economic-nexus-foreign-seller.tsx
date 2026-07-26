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
  ShoppingCart,
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
    q: "Do non-US e-commerce sellers and SaaS companies have to collect US sales tax?",
    a: "Yes. Following the landmark 2018 Supreme Court decision in South Dakota v. Wayfair, US states enforce 'Economic Nexus' laws. Foreign companies exceeding state revenue thresholds (typically $100,000 in sales or 200 transactions per year) must register for sales tax permits and collect state sales tax.",
  },
  {
    q: "What is the difference between Physical Nexus and Economic Nexus?",
    a: "Physical Nexus occurs when a company has physical assets, warehouses (like Amazon FBA centers), or employees in a state. Economic Nexus is triggered purely by reaching a specific sales dollar volume or transaction count in a state, even with zero physical presence.",
  },
  {
    q: "Does Amazon or Shopify handle US sales tax collection automatically?",
    a: "Marketplaces like Amazon, eBay, and Etsy act as 'Marketplace Facilitators' and automatically collect and remit sales tax on your behalf in most states. However, independent Shopify stores or custom SaaS billing platforms (Stripe) require the seller to register and remit sales tax directly.",
  },
  {
    q: "Are digital software and SaaS products subject to US sales tax?",
    a: "It depends on the state. States like Texas, New York, and Pennsylvania tax SaaS and digital downloads, while states like California generally do not tax un-customized SaaS.",
  },
  {
    q: "How do foreign companies register for US state sales tax permits?",
    a: "Foreign companies apply for state sales tax permits online through state Departments of Revenue using their IRS EIN and LLC incorporation documents.",
  },
  {
    q: "What are the penalties for ignoring US state sales tax laws?",
    a: "Failing to collect sales tax once economic nexus is reached makes the foreign business personally liable for all uncollected sales tax, plus interest and failure-to-file penalties ranging from 10% to 25%.",
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
  headline: "US Sales Tax Economic Nexus for Overseas E-commerce & SaaS Companies",
  description:
    "Exhaustive 2026 US state sales tax masterclass guide for foreign e-commerce & SaaS sellers. Learn Wayfair economic nexus thresholds, Amazon Marketplace Facilitator laws, and state permit registration.",
  author: { "@type": "Organization", name: "ADVAQ US Sales Tax Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/us-sales-tax-economic-nexus-foreign-seller",
};

export const Route = createFileRoute("/blog/us-sales-tax-economic-nexus-foreign-seller")({
  head: () => ({
    meta: [
      { title: "US Sales Tax Economic Nexus for Foreign Sellers (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "US sales tax guide for foreign e-commerce & SaaS businesses. Wayfair economic nexus $100k thresholds, Amazon Marketplace Facilitator rules & state permit filings.",
      },
      {
        name: "keywords",
        content:
          "us sales tax economic nexus foreign seller, south dakota v wayfair non us resident, shopify amazon fba us sales tax permit, saas digital product state sales tax compliance",
      },
      {
        property: "og:title",
        content: "US Sales Tax Economic Nexus for Overseas E-commerce & SaaS Companies",
      },
      {
        property: "og:description",
        content:
          "Master US state economic nexus thresholds and sales tax permit registration rules for foreign e-commerce sellers and SaaS founders.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/us-sales-tax-economic-nexus-foreign-seller" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/us-sales-tax-economic-nexus-foreign-seller" }],
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
            US Sales Tax Economic Nexus for Overseas E-commerce & SaaS Companies
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive state sales tax compliance masterclass for international e-commerce sellers, Shopify merchants, Amazon FBA brands, and SaaS founders on Wayfair economic nexus thresholds and permit registration.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Sales Tax Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>16 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Wayfair Economic Nexus Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Economic Nexus Key Rules</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Wayfair Supreme Court Ruling</strong>
              <p className="text-navy-100 leading-relaxed">
                States can require foreign sellers with zero physical presence to collect state sales tax if they cross economic sales thresholds.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">$100,000 Threshold Standard</strong>
              <p className="text-navy-100 leading-relaxed">
                Most states enforce an Economic Nexus threshold of $100,000 in gross annual sales or 200 separate transactions into that state.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Amazon Marketplace Facilitator</strong>
              <p className="text-navy-100 leading-relaxed">
                Amazon automatically collects sales tax on FBA sales. Independent Shopify & Stripe sellers must handle registration manually.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">SaaS & Digital Goods Taxability</strong>
              <p className="text-navy-100 leading-relaxed">
                SaaS and digital software are taxable in ~30 US states (e.g. Texas, New York, Pennsylvania).
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
            <li><a href="#wayfair-ruling" className="hover:text-gold-600 underline">1. The Wayfair Supreme Court Ruling & Economic Nexus</a></li>
            <li><a href="#state-thresholds" className="hover:text-gold-600 underline">2. State-by-State Revenue & Transaction Threshold Breakdown</a></li>
            <li><a href="#nexus-matrix" className="hover:text-gold-600 underline">3. Comprehensive State Economic Nexus & Taxability Matrix</a></li>
            <li><a href="#marketplace-facilitators" className="hover:text-gold-600 underline">4. Amazon vs Shopify: Marketplace Facilitator Laws</a></li>
            <li><a href="#saas-digital-products" className="hover:text-gold-600 underline">5. Taxability of SaaS & Digital Software Products in the US</a></li>
            <li><a href="#registration-process" className="hover:text-gold-600 underline">6. How Foreign Sellers Register for State Sales Tax Permits</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="wayfair-ruling" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Wayfair Supreme Court Ruling & Economic Nexus
          </h2>
          <p>
            In June 2018, the US Supreme Court issued a landmark ruling in <em>South Dakota v. Wayfair, Inc.</em>, eliminating the long-standing physical presence requirement for state sales tax collection.
          </p>
          <p>
            Today, 45 US states and Washington D.C. enforce <strong>Economic Nexus laws</strong>. Under these statutes, if your overseas e-commerce store or SaaS platform sells goods or services to customers within a US state and exceeds that state's economic revenue or transaction thresholds, your foreign entity is legally obligated to register for a state sales tax permit, calculate sales tax at checkout, and remit those funds quarterly.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="state-thresholds" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. State-by-State Revenue & Transaction Threshold Breakdown
          </h2>
          <p>
            Economic Nexus thresholds vary across individual US states:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <DollarSign className="text-gold-600" size={18} />
                Standard $100,000 / 200 Transaction Threshold States
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The majority of US states (including Texas, Florida, Illinois, Georgia, and Ohio) enforce an economic nexus threshold of <strong>$100,000 in gross annual sales</strong> OR <strong>200 separate transactions</strong> into the state during the current or preceding calendar year.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Scale className="text-gold-600" size={18} />
                High Threshold States ($500,000 Rules)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Economic powerhouse states like California and New York enforce higher thresholds of <strong>$500,000 in gross annual sales</strong> into the state before requiring foreign sellers to register and collect sales tax.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="nexus-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive State Economic Nexus & Taxability Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of key state nexus rules:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">US State</th>
                  <th className="p-4 text-gold-500">Revenue Threshold</th>
                  <th className="p-4 text-emerald-400">Transaction Count</th>
                  <th className="p-4">SaaS Taxability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">California</td>
                  <td className="p-4 text-emerald-700 font-bold">$500,000</td>
                  <td className="p-4 text-gray-500">No Transaction Threshold</td>
                  <td className="p-4 text-emerald-700 font-bold">Exempt (Not Taxable)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Texas</td>
                  <td className="p-4 text-navy-900">$100,000</td>
                  <td className="p-4 text-gray-500">No Transaction Threshold</td>
                  <td className="p-4 text-rose-700 font-bold">Taxable (80% Rate)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">New York</td>
                  <td className="p-4 text-emerald-700 font-bold">$500,000</td>
                  <td className="p-4 text-navy-900">AND 100 Transactions</td>
                  <td className="p-4 text-rose-700 font-bold">Taxable Software</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Florida</td>
                  <td className="p-4 text-navy-900">$100,000</td>
                  <td className="p-4 text-gray-500">No Transaction Threshold</td>
                  <td className="p-4 text-emerald-700 font-bold">Exempt (Not Taxable)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            US SALES TAX ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your US Sales Tax Permits with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts state economic nexus audits, registers sales tax permits across all 50 states, and integrates automated tax collection with Stripe and Shopify.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/wyoming-llc-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore US Sales Tax Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="marketplace-facilitators" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Amazon vs Shopify: Marketplace Facilitator Laws
          </h2>
          <p>
            If you sell physical products primarily via <strong>Amazon FBA, eBay, Etsy, or Walmart Marketplace</strong>, state Marketplace Facilitator statutes require the platform itself to automatically calculate, collect, and remit sales tax on your behalf.
          </p>
          <p>
            However, if you operate an independent <strong>Shopify store, WooCommerce site, or custom Stripe SaaS checkout</strong>, you are the merchant of record. You are solely responsible for monitoring your sales volume in every state, registering for state sales tax permits when thresholds are met, and filing quarterly tax returns.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="saas-digital-products" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Taxability of SaaS & Digital Software Products in the US
          </h2>
          <p>
            The taxability of Software-as-a-Service (SaaS), cloud software, and digital downloads varies dramatically by state:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>States That Tax SaaS:</strong> Texas, New York, Pennsylvania, Washington, Massachusetts, and Connecticut treat cloud SaaS as tangible personal property or taxable data processing services.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>States Exemption for SaaS:</strong> California, Florida, Georgia, Virginia, and North Carolina classify un-customized remote SaaS as non-taxable services.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="registration-process" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. How Foreign Sellers Register for State Sales Tax Permits
          </h2>
          <p>
            Before collecting sales tax from US customers in any state, you must apply for a Sales Tax Permit with that state's Department of Revenue using your US LLC EIN and incorporation details. Collecting sales tax without an active permit is illegal.
          </p>
          <p>
            Once registered, you enable automated sales tax calculation in Shopify or Stripe Tax, and submit periodic (monthly or quarterly) tax returns to remit collected funds.
          </p>
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
            US SALES TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Manage US Sales Tax Compliance with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Economic nexus auditing, state sales tax permit registration, Shopify/Stripe automated setup, and quarterly filings handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/wyoming-llc-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order US Sales Tax Audit
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
