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
  Percent,
  DollarSign,
  Award,
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "Are software houses in Pakistan 100% exempt from income tax?",
    a: "Software houses and IT exporters registered with PSEB pay a 0.25% final withholding tax under Section 154A of the Income Tax Ordinance 2001, effectively exempting 99.75% of export income from standard corporate (29%) or individual income tax rates.",
  },
  {
    q: "What conditions must be met to claim the 0.25% IT export tax regime?",
    a: "To claim Section 154A tax credits: (1) Maintain an active PSEB Registration Certificate, (2) Receive foreign remittances via official banking channels (with e-PRC certificates), (3) File annual FBR Income Tax Returns on Iris 2.0, and (4) Submit quarterly Withholding Tax statements.",
  },
  {
    q: "Can software houses retain overseas client payments in foreign currency?",
    a: "Yes! Under SBP FE Circular No. 01 of 2023, certified IT exporters can retain up to 50% of foreign currency earnings in an Exporters' Special Foreign Currency Account (FCVA) to pay for international cloud hosting, SaaS tools, and digital ad campaigns.",
  },
  {
    q: "Does the 0.25% tax rate apply to domestic software sales inside Pakistan?",
    a: "No. The 0.25% Section 154A tax rate applies exclusively to export proceeds received in foreign currency from non-resident clients outside Pakistan. Domestic IT sales inside Pakistan are subject to normal corporate income tax (29%) and provincial sales tax.",
  },
  {
    q: "What documentation is required during an FBR IT export tax audit under Section 122?",
    a: "During an audit, you must present: (1) Valid PSEB Registration Certificate, (2) Bank e-PRCs carrying SBP IT Purpose Codes (9186/9187/9188), (3) Foreign client service contracts, and (4) Bank maintenance statements.",
  },
  {
    q: "What SBP purpose codes classify foreign remittances as IT export proceeds?",
    a: "Key SBP IT purpose codes include: Code 9186 (Software Development & Coding), Code 9187 (IT-Enabled Services & Call Centers), and Code 9188 (Data Processing & SaaS Operations).",
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
  headline: "How Software Houses in Pakistan Can Retain Overseas Remittances Tax-Free",
  description:
    "Complete 2026 tax exemption masterclass for software houses & IT agencies in Pakistan. Learn how to retain overseas remittances under Section 154A 0.25% final tax, PSEB accreditation, e-PRC proceed verification, and SBP 50% FCVA dollar retention.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan IT Tax Strategy Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/tax-exemption-software-house-it-exporter-pakistan",
};

export const Route = createFileRoute("/blog/tax-exemption-software-house-it-exporter-pakistan")({
  head: () => ({
    meta: [
      { title: "Tax Exemption Software House IT Exporter Pakistan (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Tax exemption guide for software houses in Pakistan. Retain overseas remittances tax-free under Section 154A 0.25% tax, PSEB certification & SBP FCVA accounts.",
      },
      {
        name: "keywords",
        content:
          "tax exemption software house IT exporter pakistan, section 154A IT export 0.25 percent final tax, pseb registration e-prc proceeds tax credit, sbp 50 percent dollar retention foreign remittance, sbp purpose code 9186 9187",
      },
      {
        property: "og:title",
        content: "How Software Houses in Pakistan Can Retain Overseas Remittances Tax-Free",
      },
      {
        property: "og:description",
        content:
          "Discover how Pakistani software houses and IT exporters legally retain overseas remittances under Section 154A reduced tax regimes.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/tax-exemption-software-house-it-exporter-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/tax-exemption-software-house-it-exporter-pakistan" }],
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
            How Software Houses in Pakistan Can Retain Overseas Remittances Tax-Free
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive tax structuring masterclass for tech founders, software agency owners, call center operators, and SaaS exporters on maximizing Section 154A tax credits, obtaining e-PRCs, and retaining USD funds in SBP FCVA accounts.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan IT Tax Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Income Tax Ordinance Section 154A & Section 65F</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>IT Remittance Tax Exemption Framework</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">0.25% Final Tax Regime</strong>
              <p className="text-navy-100 leading-relaxed">
                Section 154A caps total tax liability at 0.25% of gross foreign IT export proceeds, exempting 99.75% of income.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">PSEB Accreditation</strong>
              <p className="text-navy-100 leading-relaxed">
                Active Pakistan Software Export Board registration certificate required for statutory tax exemption.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Bank e-PRC Certificates</strong>
              <p className="text-navy-100 leading-relaxed">
                Electronic Proceed Realization Certificates carrying SBP purpose codes 9186 / 9187 proving foreign wire origin.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">50% USD FCVA Retention</strong>
              <p className="text-navy-100 leading-relaxed">
                Retain up to 50% export revenue in USD in an FCVA bank account for global cloud hosting & SaaS expenses.
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
            <li><a href="#it-tax-framework" className="hover:text-gold-600 underline">1. Pakistan's Section 154A IT Export Tax Framework</a></li>
            <li><a href="#compliance-matrix" className="hover:text-gold-600 underline">2. Statutory Compliance Matrix for 0.25% Tax Rate</a></li>
            <li><a href="#eprc-documentation" className="hover:text-gold-600 underline">3. Electronic Proceed Realization Certificates (e-PRC)</a></li>
            <li><a href="#fcva-usd-retention" className="hover:text-gold-600 underline">4. SBP 50% FCVA Foreign Currency Retention Rules</a></li>
            <li><a href="#domestic-vs-export" className="hover:text-gold-600 underline">5. Domestic IT Sales vs Foreign IT Exports</a></li>
            <li><a href="#fbr-audit-defense" className="hover:text-gold-600 underline">6. FBR Audit Defense under Section 122/177</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="it-tax-framework" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Pakistan's Section 154A IT Export Tax Framework
          </h2>
          <p>
            Under Section 154A of the <strong>Income Tax Ordinance 2001</strong>, foreign exchange export proceeds earned from exporting computer software, IT services, SaaS platforms, or IT-enabled services (ITeS) are subject to a concessionary final tax rate of <strong>0.25%</strong>.
          </p>
          <p>
            This regime replaces the standard 29% corporate income tax rate, allowing software houses to legally retain 99.75% of their export profits tax-free inside Pakistan.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="compliance-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Statutory Compliance Matrix for 0.25% Tax Rate
          </h2>
          <p>
            To maintain eligibility for the Section 154A 0.25% final tax regime:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Compliance Requirement</th>
                  <th className="p-4 text-gold-500">Regulating Authority</th>
                  <th className="p-4">Verification Document Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Active PSEB Registration</td>
                  <td className="p-4 text-emerald-700 font-bold">Pakistan Software Export Board</td>
                  <td className="p-4">Annual PSEB Call Center / IT Exporter Certificate.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Bank e-PRC Certificates</td>
                  <td className="p-4">State Bank of Pakistan / Commercial Bank</td>
                  <td className="p-4">Electronic Proceed Realization Certificate with SBP Purpose Code.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Annual FBR Return Filing</td>
                  <td className="p-4">Federal Board of Revenue (Iris)</td>
                  <td className="p-4">Form 114(1) declaring foreign export proceeds under Section 154A.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Quarterly WHT Statements</td>
                  <td className="p-4">Federal Board of Revenue (Iris)</td>
                  <td className="p-4">Form 165 quarterly withholding tax statements.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN IT TAX EXEMPTION ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Secure Your 0.25% IT Export Tax Status with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages PSEB portal filings, collects bank e-PRCs, files Section 154A tax returns on FBR Iris, and opens SBP 50% FCVA dollar accounts.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/pseb-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order IT Tax Exemption Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="fcva-usd-retention" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. SBP 50% FCVA Foreign Currency Retention Rules
          </h2>
          <p>
            Under State Bank of Pakistan FE Circular No. 01 of 2023, certified IT exporters can retain up to 50% of foreign currency earnings in an <strong>Exporters' Special Foreign Currency Account (FCVA)</strong>.
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <DollarSign size={18} />
              Permissible Foreign Expenditure Head Uses:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              • <strong>Cloud Infrastructure:</strong> Paying AWS, Google Cloud, Azure, and Vercel monthly bills.
              <br /><br />
              • <strong>SaaS Subscriptions:</strong> GitHub, OpenAI API, Figma, Jira, and Slack license payments.
              <br /><br />
              • <strong>Global Digital Ads:</strong> Running Meta (Facebook/Instagram) and Google Ads campaigns via foreign USD debit cards.
            </p>
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
            PAKISTAN IT EXPORT TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Maximize Your IT Export Tax Savings
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            PSEB registration, 0.25% Section 154A tax credit filing, e-PRC audit defense, and SBP FCVA dollar retention accounts handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/pseb-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order IT Tax Exemption Service
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
