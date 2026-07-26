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
  FileText,
  DollarSign,
  Landmark,
} from "lucide-react";

const faqs = [
  {
    q: "What is the deadline to file FBR Income Tax Returns in Pakistan?",
    a: "For individuals, salaried employees, sole proprietors, and AOPs, the standard annual FBR income tax filing deadline is September 30 (or extended to October 31). For SECP companies, the deadline is December 31 following the fiscal year-end.",
  },
  {
    q: "What is the Active Taxpayer List (ATL) in Pakistan and why is it important?",
    a: "The Active Taxpayer List (ATL) is FBR's official roster of compliant tax filers published every Monday. Being on the ATL reduces withholding tax rates on bank transfers, property transactions, vehicle registration, and international cash withdrawals by 50%.",
  },
  {
    q: "How do IT exporters file tax returns on FBR Iris under Section 154A?",
    a: "IT exporters select Section 154A in Iris 2.0, input foreign proceeds verified by e-PRC certificates, pay the 0.25% final tax, and claim complete tax credit under Section 65F / Section 154A.",
  },
  {
    q: "What happens if I miss the annual FBR tax return filing deadline?",
    a: "Missing the deadline results in being categorized as a 'Non-Filer', removal from the ATL, penalty fines under Section 182 starting at PKR 1,000 to PKR 40,000+, and doubled withholding tax rates across banking and asset transactions.",
  },
  {
    q: "Can a non-resident Pakistani file an FBR Income Tax return in Pakistan?",
    a: "Yes. Non-Resident Pakistanis holding Pakistani bank accounts or local income can file their non-resident tax return on Iris 2.0 to maintain ATL status without paying tax on overseas foreign income.",
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
  headline: "How to File FBR Income Tax Return in Pakistan (Iris Portal Active Taxpayer Guide)",
  description:
    "Complete 2026 FBR Income Tax filing guide on Iris 2.0 for individuals, companies, and IT exporters. Learn step-by-step return filing, Active Taxpayer List (ATL) status, Wealth Statements, and Section 154A IT export credits.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer",
};

export const Route = createFileRoute("/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer")({
  head: () => ({
    meta: [
      { title: "File FBR Income Tax Return Iris Active Taxpayer (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to file FBR Income Tax Return on Iris 2.0 in Pakistan. Become Filer on Active Taxpayer List (ATL), wealth statement reconciliation & Section 154A IT credit.",
      },
      {
        name: "keywords",
        content:
          "file for income tax return iris pakistan active taxpayer, fbr iris 2.0 tax return filing guide, active taxpayer list atl restoration fee 1000 pkr, wealth statement reconciliation fbr iris",
      },
      {
        property: "og:title",
        content: "How to File FBR Income Tax Return in Pakistan (Iris Portal Active Taxpayer Guide)",
      },
      {
        property: "og:description",
        content:
          "Master FBR Iris 2.0 income tax return filing, wealth statement reconciliation, and Active Taxpayer List (ATL) status.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer" }],
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
            How to File FBR Income Tax Return in Pakistan (Iris Portal Active Taxpayer Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive tax filing tutorial for Pakistani citizens, business owners, and software exporters on submitting annual tax returns via FBR Iris 2.0, reconciling Wealth Statements, and securing Active Taxpayer List (ATL) status.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>9 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FBR Income Tax Ordinance 2001 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FBR Filing Key Essentials</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>FBR Iris 2.0 Portal:</strong> Submit annual tax return under Form 114(1) and Wealth Statement under Form 116.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Active Taxpayer List (ATL):</strong> Filing return grants "Filer" status, cutting banking withholding taxes in half.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Wealth Statement Reconciliation:</strong> Total assets at year-end must equal opening assets + net income - personal expenses.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>IT Exporter 0.25% Tax Rate:</strong> Claim Section 154A reduced rate by attaching bank e-PRCs on Iris.</span>
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
            <li><a href="#fbr-iris-overview" className="hover:text-gold-600 underline">1. Overview of FBR Iris 2.0 & Filer Privileges</a></li>
            <li><a href="#step-by-step-filing" className="hover:text-gold-600 underline">2. Step-by-Step Return Filing Workflow on Iris 2.0</a></li>
            <li><a href="#wealth-reconciliation" className="hover:text-gold-600 underline">3. Reconciling Wealth Statements (Form 116)</a></li>
            <li><a href="#section-154a-it" className="hover:text-gold-600 underline">4. Special Return Filing Rules for IT Exporters (Section 154A)</a></li>
            <li><a href="#atl-restoration" className="hover:text-gold-600 underline">5. Restoring Active Taxpayer List (ATL) Status</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="fbr-iris-overview" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Overview of FBR Iris 2.0 & Filer Privileges
          </h2>
          <p>
            Filing your annual Income Tax Return on the <strong>FBR Iris 2.0 portal</strong> is a legal obligation under the Income Tax Ordinance 2001.
          </p>
          <p>
            Being recognized as an active tax filer on the Federal Board of Revenue's <strong>Active Taxpayer List (ATL)</strong> protects you from punitive withholding tax rates applied on cash withdrawals, property purchases, vehicle registration, and foreign credit card transactions.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="step-by-step-filing" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step Return Filing Workflow on Iris 2.0
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Log into FBR Iris 2.0 portal using CNIC and password.</li>
            <li>Select 114(1) Return of Income Tax form for target tax year.</li>
            <li>Enter gross business receipts, salaries, or export revenues under appropriate heads.</li>
            <li>Input tax deductions (adjustable bank WHT, advance tax, mobile bill tax).</li>
            <li>Submit Wealth Statement 116 and complete pin verification.</li>
          </ol>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FBR TAX FILING ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your FBR Tax Return with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ reconciles your wealth statement, claims Section 154A IT export credits, files corporate returns, and restores Active Taxpayer List (ATL) status.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/company-tax-return"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Income Tax Return Filing <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="wealth-reconciliation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Reconciling Wealth Statements (Form 116)
          </h2>
          <p>
            The Wealth Statement (Form 116) requires listing all personal assets (bank balances, property, vehicles, gold, investments) held in Pakistan and overseas. The mathematical reconciliation formula must balance perfectly to avoid FBR audit notices under Section 122.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="section-154a-it" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Special Return Filing Rules for IT Exporters (Section 154A)
          </h2>
          <p>
            Certified IT exporters declare foreign proceeds under Section 154A in Iris 2.0. Attaching bank-issued e-PRC certificates ensures export income is taxed at a final rate of 0.25% with zero audit exposure.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="atl-restoration" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Restoring Active Taxpayer List (ATL) Status
          </h2>
          <p>
            If you file after the September 30 deadline, pay the nominal ATL surcharge fee (PKR 1,000 for individuals, PKR 20,000 for companies) via CPR on eFBR to instantly restore Active Filer status.
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
            FBR TAX COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your FBR Tax Return with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Iris 2.0 return filing, wealth statement reconciliation, IT export tax credit claims, and Active Taxpayer List (ATL) restoration.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/company-tax-return"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Income Tax Return Filing
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
