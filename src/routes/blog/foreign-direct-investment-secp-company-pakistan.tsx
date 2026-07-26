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
  Globe2,
  DollarSign,
  Landmark,
} from "lucide-react";

const faqs = [
  {
    q: "Can foreign nationals and overseas entities own 100% shares of a SECP company in Pakistan?",
    a: "Yes! Under Pakistan's Foreign Direct Investment (FDI) policy and SECP regulations, foreign individuals and foreign corporate bodies can hold up to 100% equity ownership in Pakistani Private Limited companies in most sectors (including IT, software, consulting, and manufacturing).",
  },
  {
    q: "What is the process for foreign nationals to register a company with SECP?",
    a: "Foreign directors provide: (1) Passport copy attested by the Pakistan Embassy or Apostille, (2) SECP eServices User ID registration, (3) Interior Ministry security clearance workflow (if required), and (4) Memorandum & Articles of Association.",
  },
  {
    q: "Can foreign shareholders repatriate 100% of profits and dividends back to their home country?",
    a: "Yes. Under State Bank of Pakistan (SBP) Foreign Exchange Manual rules, foreign investors in eligible sectors can freely repatriate 100% of net profits, dividends, and initial capital back to their foreign bank accounts.",
  },
  {
    q: "What is an SBP Encashment Certificate for foreign inward remittances?",
    a: "An SBP Encashment Certificate (or Foreign Inward Remittance Certificate / FIRC) is an official bank document proving that foreign equity capital was remitted from abroad into Pakistan via official banking channels.",
  },
  {
    q: "Do foreign directors require a work visa to own a SECP company in Pakistan?",
    a: "Foreign investors who manage their Pakistani company remotely from overseas do NOT need a Pakistan resident visa. If a foreign director intends to live in Pakistan full-time, they apply for an official Board of Investment (BOI) Work / Business Visa.",
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
  headline: "Foreign Direct Investment (FDI) in Pakistan: 100% Foreign SECP Shareholding",
  description:
    "Complete 2026 FDI guide for foreign investors in Pakistan. Learn 100% foreign equity ownership rules, SECP incorporation for non-residents, SBP dividend repatriation, and BOI work visas.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/foreign-direct-investment-secp-company-pakistan",
};

export const Route = createFileRoute("/blog/foreign-direct-investment-secp-company-pakistan")({
  head: () => ({
    meta: [
      { title: "FDI & 100% Foreign SECP Shareholding Pakistan (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Foreign Direct Investment (FDI) guide for SECP incorporation in Pakistan. 100% foreign ownership, SBP profit & dividend repatriation, Encashment Certificate & BOI visa.",
      },
      {
        name: "keywords",
        content:
          "foreign direct investment secp company pakistan, 100 percent foreign shareholding secp pvt ltd, sbp dividend repatriation foreign investor pakistan, boi business work visa foreign director pakistan",
      },
      {
        property: "og:title",
        content: "Foreign Direct Investment (FDI) in Pakistan: 100% Foreign SECP Shareholding",
      },
      {
        property: "og:description",
        content:
          "Discover how foreign investors and overseas companies establish 100% foreign-owned SECP subsidiaries in Pakistan.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/foreign-direct-investment-secp-company-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/foreign-direct-investment-secp-company-pakistan" }],
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
            Foreign Direct Investment (FDI) in Pakistan: 100% Foreign SECP Shareholding
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal and foreign exchange guide for international companies, foreign nationals, and overseas Pakistanis on incorporating 100% foreign-owned SECP subsidiaries, SBP profit repatriation, and Board of Investment compliance.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Foreign Investment Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>State Bank of Pakistan & BOI Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FDI Framework Key Features</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>100% Foreign Ownership:</strong> Foreign individuals and foreign corporations can hold 100% shares of a SECP entity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Full Dividend Repatriation:</strong> 100% of net profits can be legally remitted back to foreign bank accounts under SBP rules.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>SBP Encashment Certificate:</strong> Mandatory proof of foreign capital wire transfer issued by recipient bank.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>BOI Work Visa:</strong> 2-year business visas issued to foreign directors by Board of Investment (BOI).</span>
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
            <li><a href="#fdi-policy-overview" className="hover:text-gold-600 underline">1. Pakistan's Foreign Direct Investment (FDI) Policy Overview</a></li>
            <li><a href="#foreign-secp-incorporation" className="hover:text-gold-600 underline">2. Step-by-Step SECP Incorporation for Foreign Shareholders</a></li>
            <li><a href="#sbp-encashment" className="hover:text-gold-600 underline">3. Capital Inflow & SBP Foreign Inward Remittance Certificate (FIRC)</a></li>
            <li><a href="#repatriation-rules" className="hover:text-gold-600 underline">4. Legal Dividend & Profit Repatriation Rules</a></li>
            <li><a href="#boi-visas" className="hover:text-gold-600 underline">5. Board of Investment (BOI) Business & Work Visas</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="fdi-policy-overview" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Pakistan's Foreign Direct Investment (FDI) Policy Overview
          </h2>
          <p>
            Under Pakistan's liberal Investment Policy managed by the Board of Investment (BOI) and SECP, foreign investors are granted equal treatment alongside domestic investors, enjoying 100% equity ownership in IT, services, and manufacturing sectors.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="foreign-secp-incorporation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step SECP Incorporation for Foreign Shareholders
          </h2>
          <p>
            Foreign individual shareholders provide passport copies attested by the Pakistan Embassy or Apostille. Foreign corporate entities provide attested Certificates of Incorporation, Board Resolutions, and MOA/AOA documents.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FOREIGN INVESTMENT ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Establish Your Foreign Entity in Pakistan with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages 100% foreign SECP company registration, SBP Encashment Certificate issuance, dividend repatriation protocols, and BOI work visa approvals.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore FDI Setup Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="sbp-encashment" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Capital Inflow & SBP Foreign Inward Remittance Certificate (FIRC)
          </h2>
          <p>
            Initial share capital wire transferred from abroad into the company's Pakistani bank account is certified by the receiving bank through an SBP Encashment Certificate, creating proof of foreign equity investment.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="repatriation-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Legal Dividend & Profit Repatriation Rules
          </h2>
          <p>
            Under SBP Foreign Exchange Manual Chapter 19, commercial banks are authorized to remit foreign shareholders' net dividends and capital liquidation proceeds abroad without requiring prior SBP approval.
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
            PAKISTAN FDI SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Set Up Your Foreign Entity in Pakistan
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            100% foreign SECP shareholding, SBP Encashment Certificates, dividend repatriation advisory, and BOI business visa assistance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Foreign SECP Setup
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
