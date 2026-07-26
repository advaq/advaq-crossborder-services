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
    q: "What is SBP Form R in Pakistan banking?",
    a: "Form R (Remittance Form) is a mandatory State Bank of Pakistan (SBP) foreign exchange declaration form processed by commercial banks whenever international funds (USD, EUR, GBP) are received into a Pakistani bank account.",
  },
  {
    q: "Why is Form R classification important for IT exporters?",
    a: "Properly classifying foreign wire transfers under IT & ITeS Export Purpose Codes (e.g. 9186 for Software Consulting, 9187 for Software Exports) ensures export proceeds are taxed at the 0.25% Section 154A reduced rate and credited to your 50% FCVA retention account.",
  },
  {
    q: "What is a Foreign Inward Remittance Certificate (FIRC) / Proceed Realization Certificate (PRC)?",
    a: "A PRC (Proceed Realization Certificate) is an official bank document issued by your commercial bank confirming the foreign currency amount, conversion exchange rate, beneficiary name, and SBP purpose code for an incoming export wire.",
  },
  {
    q: "Can software houses receive export remittances via Payoneer, Wise, or Stripe?",
    a: "Yes. Remittances received from foreign merchant platforms (Payoneer, Wise, Stripe) qualify as IT export proceeds provided the commercial bank issues a valid PRC carrying the IT purpose code.",
  },
  {
    q: "How long does a bank take to issue a PRC / Form R certificate in Pakistan?",
    a: "Most commercial banks (HBL, Meezan, Bank Alfalah, Faysal) issue electronic PRCs (e-PRC) within 24 to 48 hours of export funds landing in your account.",
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
  headline: "State Bank of Pakistan (SBP) Form R & Foreign Remittances Guide for Software Houses",
  description:
    "Complete 2026 SBP foreign remittance guide for Pakistani software houses & IT exporters. Learn Form R rules, SBP purpose codes (9186/9187), Proceed Realization Certificates (PRC/e-PRC), and Payoneer/Wise compliance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan",
};

export const Route = createFileRoute("/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan")({
  head: () => ({
    meta: [
      { title: "SBP Form R & Foreign Remittance Guide IT Exporters (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "State Bank of Pakistan (SBP) Form R & foreign remittance guide for software houses. Learn SBP purpose codes 9186/9187, e-PRC certificates & Payoneer/Wise rules.",
      },
      {
        name: "keywords",
        content:
          "sbp form r foreign remittance IT exporter pakistan, sbp purpose code 9186 software export, e-prc proceed realization certificate pakistan bank, payoneer wise stripe IT export remittance sbp",
      },
      {
        property: "og:title",
        content: "State Bank of Pakistan (SBP) Form R & Foreign Remittances Guide for Software Houses",
      },
      {
        property: "og:description",
        content:
          "Master State Bank of Pakistan Form R procedures, SBP IT export purpose codes, and e-PRC certificates to protect your 0.25% tax status.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan" }],
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
            State Bank of Pakistan (SBP) Form R & Foreign Remittances Guide for Software Houses
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive foreign exchange compliance guide for Pakistani IT exporters and agency owners on State Bank of Pakistan (SBP) Form R processing, purpose code selection, and Proceed Realization Certificate (PRC) management.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Foreign Exchange Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>State Bank of Pakistan FE Manual Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>SBP Remittance Essentials</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form R Classification:</strong> Mandatory bank declaration form for incoming foreign wire transfers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Key SBP Purpose Codes:</strong> 9186 (Software Consultancy), 9187 (Software Export), 9188 (IT Services).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>e-PRC Issuance:</strong> Electronic Proceed Realization Certificate required for 0.25% FBR tax return claims.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Payoneer / Wise Wire Realization:</strong> Ensure receiving bank tags third-party merchant payouts under IT export codes.</span>
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
            <li><a href="#what-is-form-r" className="hover:text-gold-600 underline">1. What Is SBP Form R and Why Does It Matter?</a></li>
            <li><a href="#sbp-purpose-codes" className="hover:text-gold-600 underline">2. Official SBP Purpose Codes for IT & Software Exports</a></li>
            <li><a href="#eprc-issuance" className="hover:text-gold-600 underline">3. How to Obtain Electronic Proceed Realization Certificates (e-PRC)</a></li>
            <li><a href="#third-party-payouts" className="hover:text-gold-600 underline">4. Managing Payoneer, Wise & Stripe Remittances</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-form-r" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is SBP Form R and Why Does It Matter?
          </h2>
          <p>
            Whenever a foreign client transfers foreign currency (USD, EUR, GBP) to your company bank account in Pakistan, the receiving bank processes an electronic <strong>Form R (Remittance Form)</strong> reported directly to the State Bank of Pakistan.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="sbp-purpose-codes" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Official SBP Purpose Codes for IT & Software Exports
          </h2>
          <p>
            To qualify for the 0.25% Section 154A reduced tax rate, your incoming wire transfer must be tagged under correct SBP Purpose Codes:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>9186:</strong> Computer Software Consultancy & Implementation Services</li>
            <li><strong>9187:</strong> Export of Computer Software (Custom Development & SaaS)</li>
            <li><strong>9188:</strong> Data Processing & Hosting Services</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SBP REMITTANCE & BANKING ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Optimize Your IT Remittances with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ assists software houses with bank Form R tagging, e-PRC collection, Payoneer/Wise proceeds realization, and 50% FCVA account management.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/pseb-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Remittance Advisory Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="eprc-issuance" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. How to Obtain Electronic Proceed Realization Certificates (e-PRC)
          </h2>
          <p>
            An e-PRC is an official digital certificate generated by your bank confirming foreign exchange realization. It serves as primary evidence during FBR income tax audits.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="third-party-payouts" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Managing Payoneer, Wise & Stripe Remittances
          </h2>
          <p>
            When withdrawing funds from Payoneer or Wise into local bank accounts, instruct your bank’s foreign exchange officer to issue e-PRCs tagged under IT export purpose codes rather than generic personal remittances.
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
            SBP FOREIGN EXCHANGE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your SBP e-PRC Certificates
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Form R compliance, SBP purpose code tagging, e-PRC collection, and 0.25% FBR tax return filing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/pseb-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SBP Remittance Service
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
