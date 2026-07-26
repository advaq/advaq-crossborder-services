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
  CreditCard,
  Briefcase,
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
  Laptop,
} from "lucide-react";

const faqs = [
  {
    q: "What is an Exporters' Special Foreign Currency Account (FCVA) in Pakistan?",
    a: "An Exporters' Special Foreign Currency Account (FCVA) is a specialized foreign currency bank account authorized by the State Bank of Pakistan (SBP) under FE Circular No. 01 of 2023. It allows IT exporters, software houses, SaaS companies, and IT freelancers to retain up to 50% of foreign export proceeds in USD, EUR, or GBP.",
  },
  {
    q: "How can I spend dollars retained in my SBP FCVA account?",
    a: "USD retained in an FCVA account can be freely spent without prior SBP approval on: (1) International digital ad campaigns (Meta, Google, LinkedIn Ads), (2) Cloud hosting & software subscriptions (AWS, Google Cloud, OpenAI, GitHub, Vercel), (3) Foreign consultant & freelancer fees, and (4) Overseas business travel using a corporate USD debit card.",
  },
  {
    q: "What percentage of export proceeds can IT companies retain in USD?",
    a: "Under SBP foreign exchange regulations, certified IT exporters, software houses, and freelancers holding valid PSEB registration can retain up to 50% of export proceeds in foreign currency.",
  },
  {
    q: "What documents are required to open an FCVA dollar account at a Pakistani commercial bank?",
    a: "Required documents include: (1) SECP Incorporation Certificate or Sole Proprietorship NTN, (2) Valid PSEB Registration Certificate for current fiscal year, (3) Formal SBP FCVA Undertaking Form signed by authorized directors, and (4) Bank Maintenance Certificate of active PKR business account.",
  },
  {
    q: "Can freelancers registered with PSEB open an FCVA dollar account?",
    a: "Yes! IT freelancers holding a valid PSEB Freelancer Registration Certificate and e-PRC export remittance records can open an individual FCVA USD retention account at commercial banks in Pakistan.",
  },
  {
    q: "Does opening an FCVA account subject my business to extra FBR taxes?",
    a: "No! FCVA accounts operate within the 0.25% Section 154A IT export final tax regime. Retaining 50% of proceeds in USD does not trigger higher tax rates, provided your annual FBR income tax returns accurately reconcile FCVA balances with e-PRC proceeds.",
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
  headline: "How IT Agencies Can Legally Hold 50% Dollar Retention (FCVA) in Pakistan Banks",
  description:
    "Complete 2026 SBP Exporters' Special Foreign Currency Account (FCVA) masterclass for Pakistani software houses & IT freelancers. Detailed guide on 50% USD retention rules under SBP FE Circular 01, spending on AWS/Google Ads, bank setup, and corporate USD debit cards.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Banking & Forex Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/exporters-special-fcva-account-sbp-it-freelancers",
};

export const Route = createFileRoute("/blog/exporters-special-fcva-account-sbp-it-freelancers")({
  head: () => ({
    meta: [
      { title: "SBP 50% Dollar Retention FCVA Account Guide (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "How IT agencies & freelancers hold 50% dollar retention (FCVA) in Pakistan banks under SBP rules. Spend USD on AWS, Google Ads & international software tools.",
      },
      {
        name: "keywords",
        content:
          "exporters special fcva account sbp IT freelancers, 50 percent dollar retention account pakistan banks, spend usd foreign currency account aws google ads pakistan, pseb fcva dollar debit card software house, sbp fe circular 01 2023 fcva rules",
      },
      {
        property: "og:title",
        content: "How IT Agencies Can Legally Hold 50% Dollar Retention (FCVA) in Pakistan Banks",
      },
      {
        property: "og:description",
        content:
          "Master the SBP FCVA retention framework to hold 50% of your IT export revenues in USD and pay global software vendors hassle-free.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/exporters-special-fcva-account-sbp-it-freelancers" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/exporters-special-fcva-account-sbp-it-freelancers" }],
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
            <span>Pakistan Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            How IT Agencies Can Legally Hold 50% Dollar Retention (FCVA) in Pakistan Banks
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive banking and foreign exchange masterclass for software house owners, SaaS founders, and IT freelancers on opening Exporters' Special Foreign Currency Accounts (FCVA) under State Bank of Pakistan rules to retain 50% export revenue in USD.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Banking & Forex Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>State Bank of Pakistan FCVA Circular Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FCVA Retention Account Key Features</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">50% USD Automated Retention</strong>
              <p className="text-navy-100 leading-relaxed">
                50% of foreign IT export wire transfers land directly in your USD FCVA account without forced PKR conversion.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">USD Corporate Debit Card</strong>
              <p className="text-navy-100 leading-relaxed">
                Issued directly against your FCVA USD balance for seamless global online SaaS and cloud purchases.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">No SBP Prior Approval</strong>
              <p className="text-navy-100 leading-relaxed">
                Pay AWS, Google Cloud, Meta Ads, OpenAI, and overseas freelancers without filing manual SBP clearance forms.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">PSEB Certification Mandate</strong>
              <p className="text-navy-100 leading-relaxed">
                Requires an active PSEB registration certificate and e-PRC export proceeds realization tagging.
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
            <li><a href="#what-is-fcva" className="hover:text-gold-600 underline">1. What Is an SBP Exporters' Special FCVA Account?</a></li>
            <li><a href="#retention-limits" className="hover:text-gold-600 underline">2. Understanding the 50% Dollar Retention Framework</a></li>
            <li><a href="#eligible-expenses" className="hover:text-gold-600 underline">3. Exhaustive List of Permissible FCVA Overseas Expenses</a></li>
            <li><a href="#commercial-bank-setup" className="hover:text-gold-600 underline">4. FCVA Setup at Top Commercial Banks (Meezan, HBL, Alfalah)</a></li>
            <li><a href="#freelancers-vs-corporate" className="hover:text-gold-600 underline">5. FCVA Rules for IT Freelancers vs SECP Companies</a></li>
            <li><a href="#fbr-tax-reconciliation" className="hover:text-gold-600 underline">6. FBR Tax Audit & Annual FCVA Statement Compliance</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-fcva" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is an SBP Exporters' Special FCVA Account?
          </h2>
          <p>
            Historically, Pakistani businesses receiving foreign currency export wire transfers faced strict foreign exchange rules: commercial banks automatically converted 100% of foreign currency (USD, EUR, GBP) into Pakistani Rupees (PKR) upon arrival.
          </p>
          <p>
            To empower the IT export sector, the <strong>State Bank of Pakistan (SBP)</strong> enacted <strong>FE Circular No. 01 of 2023</strong>, creating the <strong>Exporters' Special Foreign Currency Account (FCVA)</strong> framework. Under this regime, certified IT exporters, software houses, and IT freelancers can retain up to <strong>50% of foreign export proceeds in USD</strong> inside a dedicated foreign currency account.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="retention-limits" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Understanding the 50% Dollar Retention Framework
          </h2>
          <p>
            The mechanics of SBP FCVA retention operate on an automated split upon inward wire realization:
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <DollarSign size={18} />
              Automated 50% Split Example ($10,000 USD Export Remittance):
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              • <strong>$5,000 USD (50% Operational Allocation):</strong> Converted to PKR at prevailing interbank exchange rates and credited to your primary PKR business account for local salaries and office rent.
              <br /><br />
              • <strong>$5,000 USD (50% FCVA Retention Allocation):</strong> Credited directly into your USD FCVA account in foreign currency, protecting your business against PKR exchange rate fluctuations.
            </p>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN FCVA BANKING ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Open Your SBP 50% FCVA Account with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares FCVA documentation, secures PSEB accreditation, handles bank compliance meetings, and obtains USD corporate debit cards for your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order FCVA Banking Setup <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="eligible-expenses" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Exhaustive List of Permissible FCVA Overseas Expenses
          </h2>
          <p>
            The SBP Foreign Exchange Manual explicitly permits FCVA USD funds to be spent abroad without requiring prior individual SBP clearance:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <CreditCard className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Cloud Infrastructure & Servers:</strong> Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, DigitalOcean, Vercel, Linode.</span>
            </li>
            <li className="flex items-start gap-2">
              <CreditCard className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Software & AI API Subscriptions:</strong> OpenAI API, GitHub Copilot, Figma, Adobe Creative Cloud, Jira, Slack, Zoom, JetBrains.</span>
            </li>
            <li className="flex items-start gap-2">
              <CreditCard className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Global Digital Advertising:</strong> Meta Ads (Facebook/Instagram), Google Ads, LinkedIn Ads, X (Twitter) Ads.</span>
            </li>
            <li className="flex items-start gap-2">
              <CreditCard className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Overseas Contractor & Consultant Payouts:</strong> Paying foreign freelancers on Upwork, Fiverr, or international consulting agencies.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="commercial-bank-setup" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. FCVA Setup at Top Commercial Banks (Meezan, HBL, Alfalah)
          </h2>
          <p>
            Major Pakistani commercial banks provide streamlined online FCVA account opening workflows:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Commercial Bank</th>
                  <th className="p-4 text-gold-500">FCVA Debit Card Availability</th>
                  <th className="p-4">Average Setup Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Meezan Bank (Islamic Banking)</td>
                  <td className="p-4 text-emerald-700 font-bold">USD Corporate Visa Debit Card Issued</td>
                  <td className="p-4">3 - 5 Working Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Habib Bank Limited (HBL)</td>
                  <td className="p-4 text-emerald-700 font-bold">USD Corporate Mastercard Issued</td>
                  <td className="p-4">3 - 5 Working Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Bank Alfalah</td>
                  <td className="p-4 text-emerald-700 font-bold">Alfa Business USD Card Issued</td>
                  <td className="p-4">2 - 4 Working Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Faysal Bank</td>
                  <td className="p-4 text-emerald-700 font-bold">USD Business Card Issued</td>
                  <td className="p-4">4 - 6 Working Days</td>
                </tr>
              </tbody>
            </table>
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
            PAKISTAN FCVA DOLLAR BANKING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your 50% FCVA Dollar Account
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            PSEB registration, commercial bank FCVA documentation, SBP compliance filing, and USD debit card issuance handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order FCVA Dollar Account Setup
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
