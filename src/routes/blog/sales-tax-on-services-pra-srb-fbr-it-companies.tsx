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
  Receipt,
  Landmark,
} from "lucide-react";

const faqs = [
  {
    q: "Which provincial tax authority regulates Sales Tax on Services in Pakistan?",
    a: "Sales tax on services is governed provincially: (1) PRA (Punjab Revenue Authority) in Punjab, (2) SRB (Sindh Revenue Board) in Sindh, (3) KPRA (Khyber Pakhtunkhwa Revenue Authority) in KPK, (4) BRA in Balochistan, and (5) FBR in Islamabad Capital Territory (ICT).",
  },
  {
    q: "Are IT services and software exports subject to Sales Tax on Services?",
    a: "Export of IT services and software development to foreign clients is zero-rated or exempt (0% sales tax) across PRA, SRB, and KPRA. However, domestic IT sales to clients inside Pakistan attract provincial sales tax rates ranging from 5% to 16%.",
  },
  {
    q: "What is the mandatory Sales Tax registration threshold for tech agencies?",
    a: "Tech agencies and software houses providing services to domestic clients must register for Sales Tax on Services with their respective provincial revenue authority (PRA/SRB/KPRA) if turnover exceeds provincial thresholds or if operating as a SECP company.",
  },
  {
    q: "How often must a business file provincial Sales Tax returns?",
    a: "Provincial Sales Tax returns must be filed monthly on the respective portal (e.g. PRA / SRB / eFBR) by the 15th to 18th day of the following month.",
  },
  {
    q: "What is the penalty for late provincial Sales Tax return filing?",
    a: "Provincial tax authorities impose penalties starting at PKR 5,000 to PKR 20,000 for late return submissions, plus default surcharge interest on unpaid sales tax amounts.",
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
  headline: "FBR Sales Tax on Services: PRA vs SRB vs KPRA vs BRA Rules for Tech Agencies",
  description:
    "Complete 2026 Sales Tax on Services guide for Pakistani tech agencies & software houses. Compare PRA (Punjab), SRB (Sindh), KPRA (KPK), BRA (Balochistan), and FBR rules on IT exports, domestic sales tax rates, and monthly return filings.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/sales-tax-on-services-pra-srb-fbr-it-companies",
};

export const Route = createFileRoute("/blog/sales-tax-on-services-pra-srb-fbr-it-companies")({
  head: () => ({
    meta: [
      { title: "Sales Tax on Services PRA SRB KPRA FBR Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Sales Tax on Services guide for IT companies in Pakistan. Compare PRA, SRB, KPRA, BRA & FBR rules on 0% IT export zero-rating, domestic rates & monthly filings.",
      },
      {
        name: "keywords",
        content:
          "sales tax on services PRA SRB fbr IT companies, punjab revenue authority pra sales tax rate software house, sindh revenue board srb it export zero rating, kpra sales tax return filing IT agency",
      },
      {
        property: "og:title",
        content: "FBR Sales Tax on Services: PRA vs SRB vs KPRA vs BRA Rules for Tech Agencies",
      },
      {
        property: "og:description",
        content:
          "Master provincial Sales Tax on Services rules (PRA, SRB, KPRA, BRA, FBR) for domestic IT sales and international software exports.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/sales-tax-on-services-pra-srb-fbr-it-companies" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/sales-tax-on-services-pra-srb-fbr-it-companies" }],
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
            FBR Sales Tax on Services: PRA vs SRB vs KPRA vs BRA Rules for Tech Agencies
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical provincial tax compliance guide for Pakistani software houses, digital marketing agencies, and IT consultants comparing Punjab Revenue Authority (PRA), Sindh Revenue Board (SRB), KPRA, and FBR sales tax rules.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Provincial Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Provincial Sales Tax Acts Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Provincial Tax Authorities Summary</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">PRA (Punjab) & SRB (Sindh)</strong>
              <p className="text-navy-100 leading-relaxed">
                Regulate services in Punjab & Sindh. IT export services to foreign clients enjoy 0% zero-rating or exemption. Domestic IT services taxed at 5%–13%.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1">KPRA (KPK) & FBR (Islamabad)</strong>
              <p className="text-navy-100 leading-relaxed">
                KPRA regulates KPK; FBR handles ICT Islamabad. Monthly return filings due by 15th–18th of every month.
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
          <ol className="space-y-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#provincial-breakdown" className="hover:text-gold-600 underline">1. The 5 Sales Tax Authorities in Pakistan Explained</a></li>
            <li><a href="#it-export-zero-rating" className="hover:text-gold-600 underline">2. Zero-Rating (0%) Exemption for IT Export Proceeds</a></li>
            <li><a href="#domestic-sales-rates" className="hover:text-gold-600 underline">3. Domestic IT Sales Tax Rates (PRA, SRB, KPRA, FBR)</a></li>
            <li><a href="#monthly-filing-workflow" className="hover:text-gold-600 underline">4. Monthly Sales Tax Return Filing Workflow</a></li>
            <li><a href="#withholding-rules" className="hover:text-gold-600 underline">5. Sales Tax Withholding (STWH) Rules for Corporate Clients</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="provincial-breakdown" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The 5 Sales Tax Authorities in Pakistan Explained
          </h2>
          <p>
            Following the 18th Constitutional Amendment, taxation of services was devolved to provincial governments:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>PRA:</strong> Punjab Revenue Authority (Lahore)</li>
            <li><strong>SRB:</strong> Sindh Revenue Board (Karachi)</li>
            <li><strong>KPRA:</strong> Khyber Pakhtunkhwa Revenue Authority (Peshawar)</li>
            <li><strong>BRA:</strong> Balochistan Revenue Authority (Quetta)</li>
            <li><strong>FBR:</strong> Federal Board of Revenue (Islamabad Capital Territory)</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="it-export-zero-rating" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Zero-Rating (0%) Exemption for IT Export Proceeds
          </h2>
          <p>
            All provincial tax laws classify IT export services (software development, SaaS, digital consulting) provided to foreign clients as <strong>Zero-Rated (0%) or Exempt</strong>, allowing IT exporters to operate tax-free locally while claiming back input sales tax paid on office expenses.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PROVINCIAL SALES TAX ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register for PRA / SRB / KPRA Sales Tax with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages sales tax registration with PRA, SRB, KPRA, and FBR, files monthly sales tax returns, and secures 0% IT export exemptions.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/sales-tax-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Sales Tax Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="domestic-sales-rates" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Domestic IT Sales Tax Rates (PRA, SRB, KPRA, FBR)
          </h2>
          <p>
            For domestic services delivered to clients inside Pakistan, PRA levies 5% to 16%, SRB levies 13%, KPRA levies 5% to 15%, and FBR ICT levies 15%.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="monthly-filing-workflow" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Monthly Sales Tax Return Filing Workflow
          </h2>
          <p>
            Registered entities submit monthly sales tax returns on provincial portals by the 15th (for tax payment) and 18th (for final return submission).
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
            PAKISTAN PROVINCIAL TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Manage Provincial Sales Tax Compliance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            PRA, SRB, KPRA, and FBR sales tax registration, 0% IT export zero-rated auditing, monthly returns, and input tax recovery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/sales-tax-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Sales Tax Registration Package
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
