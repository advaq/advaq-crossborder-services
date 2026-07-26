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
  Landmark,
  CreditCard,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What documents are required to open a corporate business bank account in Pakistan for a SECP company?",
    a: "You must provide: (1) Certified True Copies of SECP Incorporation Certificate, MOA & AOA, (2) SECP Form 1, Form 21 & Form 29, (3) Company NTN Certificate from FBR, (4) CNIC copies of all directors, (5) Board Resolution to open bank account, and (6) Company rubber stamp.",
  },
  {
    q: "Which bank is best for IT companies and software houses in Pakistan?",
    a: "Top Pakistani banks for IT exporters include Meezan Bank, Habib Bank Limited (HBL), Bank Alfalah, and Faysal Bank, due to their specialized IT export desks, fast e-PRC generation, and FCVA dollar retention accounts.",
  },
  {
    q: "How long does it take to open a SECP company bank account in Pakistan?",
    a: "Once all SECP certified documents and board resolutions are presented to the bank branch, corporate account opening takes 3 to 7 business days.",
  },
  {
    q: "Do all directors need to be physically present at the bank branch to open the account?",
    a: "Yes. Authorized signatories and directors specified in the Board Resolution must visit the bank branch for in-person biometric verification (NADRA thumb impression).",
  },
  {
    q: "What is a Board Resolution for opening a company bank account?",
    a: "A Board Resolution is a formal document passed by company directors approving the opening of a bank account, naming the chosen bank, and designating authorized signatories who can sign cheques and manage online banking.",
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
  headline: "How to Open a Business Bank Account in Pakistan for a New SECP Company",
  description:
    "Complete 2026 corporate banking guide for SECP companies in Pakistan. Learn required certified documents, Board Resolutions, NADRA biometric verification, top IT export banks (Meezan, HBL), and internet banking setup.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/open-company-business-bank-account-pakistan",
};

export const Route = createFileRoute("/blog/open-company-business-bank-account-pakistan")({
  head: () => ({
    meta: [
      { title: "Open SECP Company Business Bank Account Pakistan (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to opening a business bank account in Pakistan for SECP companies. Required SECP certified documents, Board Resolution, NADRA biometrics & top IT banks.",
      },
      {
        name: "keywords",
        content:
          "open company business bank account pakistan, secp corporate bank account documents meezan hbl, board resolution to open bank account secp company, nadra biometric verification corporate account pakistan",
      },
      {
        property: "og:title",
        content: "How to Open a Business Bank Account in Pakistan for a New SECP Company",
      },
      {
        property: "og:description",
        content:
          "Master the corporate bank account opening process in Pakistan for your SECP Private Limited entity.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/open-company-business-bank-account-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/open-company-business-bank-account-pakistan" }],
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
            How to Open a Business Bank Account in Pakistan for a New SECP Company
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive banking tutorial for business owners on opening a corporate bank account for a SECP Private Limited or SMC-Pvt Ltd company in Pakistan, preparing Board Resolutions, and passing NADRA biometric verification.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Banking Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>State Bank of Pakistan Corporate Banking Guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Corporate Banking Checklist</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>SECP Certified Documents:</strong> Certificate of Incorporation, Memorandum & Articles, Form 1, Form 21, and Form 29.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Board Resolution:</strong> Official resolution signed by all directors authorizing account opening and signatories.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>NADRA Biometric Verification:</strong> In-person thumb impression at bank branch for authorized signatories.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>FBR Corporate NTN:</strong> Official 7-digit corporate tax registration certificate.</span>
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
            <li><a href="#choosing-bank" className="hover:text-gold-600 underline">1. Choosing the Right Bank for Your SECP Company (Meezan, HBL, Bank Alfalah)</a></li>
            <li><a href="#required-documents" className="hover:text-gold-600 underline">2. Full List of SECP Certified Documents Required</a></li>
            <li><a href="#board-resolution-drafting" className="hover:text-gold-600 underline">3. Drafting an Approved Board Resolution</a></li>
            <li><a href="#biometric-verification" className="hover:text-gold-600 underline">4. NADRA Biometric Verification & Account Activation</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="choosing-bank" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Choosing the Right Bank for Your SECP Company (Meezan, HBL, Bank Alfalah)
          </h2>
          <p>
            Opening a business bank account is essential for injecting paid-up capital, receiving client payments, and operating legally in Pakistan.
          </p>
          <p>
            For software houses and IT exporters, banks like <strong>Meezan Bank, HBL, and Bank Alfalah</strong> offer superior digital banking portals, e-PRC generation, and SBP 50% FCVA dollar retention accounts.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="required-documents" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Full List of SECP Certified Documents Required
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>SECP Certificate of Incorporation (attested certified copy).</li>
            <li>Memorandum & Articles of Association (MOA / AOA).</li>
            <li>SECP Form 1, Form 21 (Registered Office), and Form 29 (Directors).</li>
            <li>FBR Corporate NTN Certificate.</li>
            <li>CNIC / NICOP copies of all directors.</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN CORPORATE BANKING ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Open Your SECP Business Bank Account with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts board resolutions, orders SECP certified document copies, pre-screens your dossier with bank branch managers, and expedites account approval.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Corporate Banking Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="board-resolution-drafting" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Drafting an Approved Board Resolution
          </h2>
          <p>
            The Board Resolution must explicitly state: the bank branch name, account title, authorized signatories, single or joint signing authority, and online banking privileges.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="biometric-verification" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. NADRA Biometric Verification & Account Activation
          </h2>
          <p>
            Authorized signatories must visit the chosen bank branch in person to complete NADRA biometric thumbprint verification and sign specimen signature cards.
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
            PAKISTAN CORPORATE BANKING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Open Your Company Bank Account Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            SECP certified document ordering, Board Resolution drafting, bank branch introductions, and digital banking activation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Bank Account Assistance
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
