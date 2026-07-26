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
  Briefcase,
  Users,
} from "lucide-react";

const faqs = [
  {
    q: "What are the main business structures in Pakistan?",
    a: "The three main business structures in Pakistan are: (1) Sole Proprietorship (unincorporated single owner), (2) Association of Persons / AOP (partnership registered with Registrar of Firms under Partnership Act 1932), and (3) Private Limited Company (Pvt Ltd / SMC-Pvt Ltd registered with SECP).",
  },
  {
    q: "Why is a Private Limited Company safer than a Sole Proprietorship or AOP?",
    a: "A Private Limited Company provides limited liability protection, keeping your personal assets (home, personal savings) safe if the business incurs debts. In a Sole Proprietorship or AOP, partners face unlimited personal liability.",
  },
  {
    q: "Can a Sole Proprietorship or AOP get PSEB registration and SBP 50% dollar retention accounts?",
    a: "While sole proprietors can register as freelancers with PSEB, only SECP registered Private Limited companies enjoy full corporate banking privileges, 50% FCVA dollar retention accounts, and investor equity credibility.",
  },
  {
    q: "What is the tax rate difference between an AOP and a Private Limited company?",
    a: "AOPs are taxed under progressive individual tax slabs (up to 35%+). Private Limited companies pay a flat 29% corporate tax rate (or 0.25% reduced IT export tax rate for certified software exporters).",
  },
  {
    q: "How do I upgrade a Sole Proprietorship to a SECP Private Limited company?",
    a: "Upgrading requires incorporating a new Private Limited company with SECP, transferring business assets and contracts to the new corporate NTN, and closing the old individual sole proprietor business name.",
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
  headline: "Private Limited Company vs Sole Proprietorship vs AOP (Partnership) in Pakistan",
  description:
    "Complete 2026 legal & tax comparison guide for Pakistani founders. Compare SECP Private Limited (Pvt Ltd) vs Sole Proprietorship vs Association of Persons (AOP) on liability, FBR tax slabs, and corporate credibility.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan",
};

export const Route = createFileRoute("/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan")({
  head: () => ({
    meta: [
      { title: "Pvt Ltd vs Sole Proprietorship vs AOP Pakistan (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Private Limited company vs Sole Proprietorship vs AOP in Pakistan. Compare SECP limited liability, FBR tax rates, bank account rules & corporate prestige.",
      },
      {
        name: "keywords",
        content:
          "pvt ltd vs sole proprietorship vs aop pakistan, secp company vs partnership deed fbr tax, single member company vs sole proprietor pakistan, limited liability corporate structure pakistan",
      },
      {
        property: "og:title",
        content: "Private Limited Company vs Sole Proprietorship vs AOP (Partnership) in Pakistan",
      },
      {
        property: "og:description",
        content:
          "Discover which business structure provides the legal safety, tax benefits, and growth potential for your Pakistani business.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan" }],
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
            Private Limited Company vs Sole Proprietorship vs AOP (Partnership) in Pakistan
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal, financial, and tax evaluation comparing SECP Private Limited entities, Sole Proprietorships, and Associations of Persons (AOP) for Pakistani entrepreneurs and IT exporters.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal & Tax Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SECP & FBR Legal Structure Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Business Structure Summary</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 text-xs pt-2">
            <div className="bg-navy-950 p-3.5 rounded-xl border border-white/10">
              <strong className="block text-gold-500 mb-1">Sole Proprietorship</strong>
              <p className="text-navy-100 leading-relaxed">
                Simple FBR NTN registration. Unlimited personal liability. Best for small local freelancers.
              </p>
            </div>

            <div className="bg-navy-950 p-3.5 rounded-xl border border-white/10">
              <strong className="block text-gold-500 mb-1">AOP (Partnership)</strong>
              <p className="text-navy-100 leading-relaxed">
                Partnership deed filed with Registrar of Firms. Unlimited liability for partners.
              </p>
            </div>

            <div className="bg-navy-950 p-3.5 rounded-xl border border-white/10">
              <strong className="block text-gold-500 mb-1">Pvt Ltd (SECP)</strong>
              <p className="text-navy-100 leading-relaxed">
                SECP corporate entity. Limited liability protection. Best for IT agencies, SaaS & raising capital.
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
            <li><a href="#three-structures" className="hover:text-gold-600 underline">1. Overview of the 3 Primary Business Structures in Pakistan</a></li>
            <li><a href="#liability-protection" className="hover:text-gold-600 underline">2. Limited Liability Protection vs Unlimited Personal Exposure</a></li>
            <li><a href="#fbr-taxation" className="hover:text-gold-600 underline">3. FBR Corporate Tax vs Individual / AOP Tax Slabs</a></li>
            <li><a href="#banking-credibility" className="hover:text-gold-600 underline">4. Banking Privileges, FCVA Accounts & Raising Capital</a></li>
            <li><a href="#upgrading-structure" className="hover:text-gold-600 underline">5. How to Upgrade from Sole Proprietor to SECP Pvt Ltd</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="three-structures" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Overview of the 3 Primary Business Structures in Pakistan
          </h2>
          <p>
            When starting a business in Pakistan, choosing the right legal entity determines your tax liability, personal financial exposure, and corporate growth potential.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="liability-protection" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Limited Liability Protection vs Unlimited Personal Exposure
          </h2>
          <p>
            In a Sole Proprietorship or AOP, the owner and business are legally identical. If the business incurs debts or legal damages, your personal assets can be seized. A SECP Private Limited company protects personal wealth behind a corporate veil.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN CORPORATE STRUCTURING
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Structure Your Business Legally with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ advises Pakistani founders on choosing between SMC-Pvt Ltd, AOP, and Private Limited setups, managing SECP filings and FBR NTN registration.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Business Structuring Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="fbr-taxation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. FBR Corporate Tax vs Individual / AOP Tax Slabs
          </h2>
          <p>
            AOPs and Sole Proprietors pay tax based on individual income tax slabs that scale up to 35%+. Certified IT export Private Limited companies enjoy a 0.25% final tax regime under Section 154A of the Income Tax Ordinance 2001.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="banking-credibility" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Banking Privileges, FCVA Accounts & Raising Capital
          </h2>
          <p>
            SECP Private Limited companies command superior credibility with Pakistani commercial banks (HBL, Meezan, Bank Alfalah), making it easier to open Foreign Currency Retention Accounts (FCVA) and secure foreign investment.
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
            PAKISTAN CORPORATE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Incorporate Your SECP Company Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            SECP incorporation, AOP partnership deeds, FBR corporate NTN registration, and corporate banking support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Incorporation
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
