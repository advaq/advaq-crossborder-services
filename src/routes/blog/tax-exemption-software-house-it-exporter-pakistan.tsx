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
} from "lucide-react";

const faqs = [
  {
    q: "Are software houses in Pakistan 100% exempt from income tax?",
    a: "Software houses and IT exporters registered with PSEB pay a 0.25% final withholding tax under Section 154A of the Income Tax Ordinance 2001, with 99.75% of export income exempt from standard corporate or individual income tax.",
  },
  {
    q: "What conditions must be met to claim the 0.25% IT export tax regime?",
    a: "To claim Section 154A tax credits: (1) Hold a valid PSEB Registration Certificate, (2) Receive foreign remittances via official banking channels (with e-PRC certificates), (3) File annual FBR Income Tax Returns, and (4) Submit quarterly Withholding Tax statements.",
  },
  {
    q: "Can software houses retain overseas client payments in foreign currency?",
    a: "Yes! Under SBP foreign exchange regulations, certified IT exporters can retain up to 50% of foreign currency earnings in an Exporters' Special Foreign Currency Account (FCVA).",
  },
  {
    q: "Does the 0.25% tax rate apply to domestic software sales inside Pakistan?",
    a: "No. The 0.25% Section 154A tax rate applies exclusively to export proceeds received in foreign currency from non-resident clients outside Pakistan. Domestic IT sales are taxed under normal corporate rates.",
  },
  {
    q: "What documentation is required during an FBR IT export tax audit?",
    a: "During an audit under Section 122/177, you must present: (1) PSEB Registration Certificate, (2) Bank e-PRCs carrying SBP IT Purpose Codes (9186/9187), (3) Foreign client service contracts, and (4) Bank maintenance statements.",
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
    "Complete 2026 tax exemption guide for software houses & IT agencies in Pakistan. Learn how to retain overseas remittances under Section 154A 0.25% tax, PSEB accreditation, e-PRC verification, and SBP FCVA retention.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/tax-exemption-software-house-it-exporter-pakistan",
};

export const Route = createFileRoute("/blog/tax-exemption-software-house-it-exporter-pakistan")({
  head: () => ({
    meta: [
      { title: "Tax Exemption Software House IT Exporter Pakistan (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Tax exemption guide for software houses in Pakistan. Retain overseas remittances tax-free under Section 154A 0.25% tax, PSEB certification & SBP FCVA accounts.",
      },
      {
        name: "keywords",
        content:
          "tax exemption software house IT exporter pakistan, section 154A IT export 0.25 percent final tax, pseb registration e-prc proceeds tax credit, sbp 50 percent dollar retention foreign remittance",
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
            A comprehensive tax structuring guide for tech founders, software agency owners, and SaaS exporters on maximizing Section 154A tax credits, obtaining e-PRCs, and retaining USD funds in SBP FCVA accounts.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ IT Tax Strategy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
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
            <span>IT Remittance Tax Exemption Pillars</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>0.25% Final Tax Regime:</strong> Section 154A caps total tax liability at 0.25% of gross foreign IT export proceeds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>PSEB Accreditation:</strong> Active Pakistan Software Export Board registration certificate required.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Bank e-PRC Verification:</strong> Electronic Proceed Realization Certificates carrying SBP purpose codes 9186/9187.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>50% USD FCVA Account:</strong> Retain up to 50% export revenue in USD for global SaaS and ad spend.</span>
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
          <ol className="space-y-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#it-tax-framework" className="hover:text-gold-600 underline">1. Pakistan's Section 154A IT Export Tax Framework</a></li>
            <li><a href="#pseb-mandate" className="hover:text-gold-600 underline">2. Why PSEB Registration Is Mandatory for Tax Credits</a></li>
            <li><a href="#eprc-documentation" className="hover:text-gold-600 underline">3. Electronic Proceed Realization Certificates (e-PRC)</a></li>
            <li><a href="#fcva-usd-retention" className="hover:text-gold-600 underline">4. SBP 50% FCVA Foreign Currency Retention Rules</a></li>
            <li><a href="#fbr-audit-defense" className="hover:text-gold-600 underline">5. FBR Audit Defense & Exemption Certificate Filing</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="it-tax-framework" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Pakistan's Section 154A IT Export Tax Framework
          </h2>
          <p>
            Under Section 154A of the Income Tax Ordinance 2001, foreign exchange proceeds earned from exporting computer software, IT services, or IT-enabled services (ITeS) are subject to a final tax rate of <strong>0.25%</strong>.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="pseb-mandate" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Why PSEB Registration Is Mandatory for Tax Credits
          </h2>
          <p>
            To claim the Section 154A 0.25% tax regime, software houses must maintain active registration with the Pakistan Software Export Board (PSEB) and submit annual tax returns on FBR Iris.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
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
        <div id="eprc-documentation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Electronic Proceed Realization Certificates (e-PRC)
          </h2>
          <p>
            Bank e-PRC certificates serve as unassailable proof during FBR tax audits that incoming funds constitute genuine foreign export proceeds.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="fcva-usd-retention" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. SBP 50% FCVA Foreign Currency Retention Rules
          </h2>
          <p>
            Certified IT exporters can retain 50% of foreign wire remittances in USD to cover international software tools, hosting, and ad campaigns.
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
            PAKISTAN IT EXPORT TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Maximize Your IT Export Tax Savings
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            PSEB registration, 0.25% Section 154A tax credit filing, e-PRC audit defense, and SBP FCVA dollar retention accounts.
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
