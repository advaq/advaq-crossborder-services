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
    q: "What is a Single Member Company (SMC-Pvt Ltd) in Pakistan?",
    a: "A Single Member Company (SMC-Private Limited) is a corporate structure registered under the Companies Act 2017 with SECP that allows a single individual to operate a corporate entity with full limited liability protection.",
  },
  {
    q: "What is the difference between an SMC-Pvt Ltd and a standard Private Limited company?",
    a: "An SMC-Pvt Ltd has exactly 1 shareholder and 1 director. A standard Private Limited company requires a minimum of 2 shareholders and 2 directors. Both structures enjoy corporate limited liability and distinct legal identity.",
  },
  {
    q: "Can an SMC-Pvt Ltd be converted into a multi-member Private Limited company later?",
    a: "Yes. An SMC-Pvt Ltd can easily be converted into a multi-member Private Limited company by passing a special resolution, issuing or transferring shares to additional directors, and filing Form 7 & Form 29 with SECP.",
  },
  {
    q: "Is an SMC-Pvt Ltd eligible for PSEB IT export tax credits and SBP retention accounts?",
    a: "Yes! SMC-Pvt Ltd companies qualify 100% for PSEB (Pakistan Software Export Board) registration, 0.25% reduced IT export tax regime, and State Bank of Pakistan 50% FCVA dollar retention accounts.",
  },
  {
    q: "What is the minimum authorized capital required to register an SMC-Pvt Ltd with SECP?",
    a: "There is no minimum statutory paid-up capital requirement enforced by SECP. Startups typically register with an Authorized Capital of PKR 100,000.",
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
  headline: "Single Member Company (SMC-Pvt Ltd) vs Private Limited in Pakistan (SECP Guide)",
  description:
    "Complete 2026 SECP company comparison guide for Pakistani founders. Learn differences between Single Member Company (SMC-Pvt Ltd) vs multi-member Private Limited on liability, governance, tax, and registration.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/single-member-company-vs-private-limited-secp-pakistan",
};

export const Route = createFileRoute("/blog/single-member-company-vs-private-limited-secp-pakistan")({
  head: () => ({
    meta: [
      { title: "SMC-Pvt Ltd vs Private Limited SECP Pakistan (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "SMC-Pvt Ltd vs Private Limited company comparison in Pakistan. SECP eServices registration, 1 director rules, limited liability & corporate tax guide.",
      },
      {
        name: "keywords",
        content:
          "single member company vs private limited secp pakistan, smc pvt ltd registration process eservices, secp company registration minimum capital, smc pvt ltd vs sole proprietorship pakistan",
      },
      {
        property: "og:title",
        content: "Single Member Company (SMC-Pvt Ltd) vs Private Limited in Pakistan (SECP Guide)",
      },
      {
        property: "og:description",
        content:
          "Discover whether a Single Member Company (SMC-Pvt Ltd) or multi-member Private Limited is best for your business in Pakistan.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/single-member-company-vs-private-limited-secp-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/single-member-company-vs-private-limited-secp-pakistan" }],
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
            Single Member Company (SMC-Pvt Ltd) vs Private Limited in Pakistan (SECP Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical legal and corporate governance guide for Pakistani entrepreneurs, IT agency owners, and solo founders on choosing between an SMC-Pvt Ltd and a multi-member Private Limited entity under the Companies Act 2017.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Corporate Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SECP Companies Act 2017 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Structure Comparison Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">SMC-Pvt Ltd (Single Member)</strong>
              <p className="text-navy-100 leading-relaxed">
                1 Shareholder & 1 Director. Perfect for solo software founders, consultants, and single owners wanting full corporate limited liability.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">Private Limited (Multi-Member)</strong>
              <p className="text-navy-100 leading-relaxed">
                2+ Shareholders & 2+ Directors. Required for co-founded startups, equity investors, venture capital backing, and joint ventures.
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
            <li><a href="#what-is-smc" className="hover:text-gold-600 underline">1. What Is an SMC-Pvt Ltd under SECP Law?</a></li>
            <li><a href="#smc-vs-multi-member" className="hover:text-gold-600 underline">2. SMC-Pvt Ltd vs Multi-Member Private Limited Comparison</a></li>
            <li><a href="#nominee-director-rule" className="hover:text-gold-600 underline">3. The Statutory Nominee Director Requirement for SMCs</a></li>
            <li><a href="#conversion-process" className="hover:text-gold-600 underline">4. How to Convert an SMC into a Multi-Member Company</a></li>
            <li><a href="#pseb-tax-benefits" className="hover:text-gold-600 underline">5. PSEB Registration & IT Export Tax Benefits</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-smc" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is an SMC-Pvt Ltd under SECP Law?
          </h2>
          <p>
            Introduced by the Securities and Exchange Commission of Pakistan (SECP), a <strong>Single Member Company (SMC-Pvt Ltd)</strong> allows a sole entrepreneur to incorporate a private limited entity without needing a second shareholder.
          </p>
          <p>
            Unlike a sole proprietorship, an SMC-Pvt Ltd provides a distinct legal personality, corporate seal, limited liability protection, and separate tax identity (NTN).
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="smc-vs-multi-member" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. SMC-Pvt Ltd vs Multi-Member Private Limited Comparison
          </h2>
          <p>
            Both structures enjoy identical corporate legal standing under the Companies Act 2017, but differ in internal management structure:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>Minimum Shareholders:</strong> SMC requires 1; Private Limited requires 2.</li>
            <li><strong>Minimum Directors:</strong> SMC requires 1; Private Limited requires 2.</li>
            <li><strong>Nominee Director:</strong> SMC requires appointing a Nominee Director to take over shares in case of sole shareholder's demise.</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SECP COMPANY REGISTRATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register Your SECP Company in Pakistan with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages name availability, eServices incorporation filing, digital signatures, corporate NTN issuance, and SECP compliance.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Incorporation Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="nominee-director-rule" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. The Statutory Nominee Director Requirement for SMCs
          </h2>
          <p>
            Under SECP rules, every single member company must nominate a <strong>Nominee Director</strong> (usually a close family member or relative) during registration. The nominee holds zero operational control and zero dividends while the primary shareholder is alive.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="conversion-process" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. How to Convert an SMC into a Multi-Member Company
          </h2>
          <p>
            As your business grows and accepts co-founders or investors, you can convert the SMC into a standard Private Limited company by filing Form 7 and Form 29 with SECP to add additional shareholders.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="pseb-tax-benefits" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. PSEB Registration & IT Export Tax Benefits
          </h2>
          <p>
            Both SMC-Pvt Ltd and Private Limited companies qualify for <strong>Pakistan Software Export Board (PSEB) registration</strong>, enabling software houses to enjoy reduced 0.25% final tax regimes on IT export proceeds.
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
            SECP COMPANY REGISTRATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your SECP Company with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            SMC-Pvt Ltd and Private Limited incorporation, SECP eServices filing, digital signatures, corporate NTN issuance, and bank account assistance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Company Registration
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
