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
    q: "Can a foreign non-resident open a corporate bank account in Dubai?",
    a: "Yes. By registering a UAE Freezone or Mainland company and obtaining an investor Emirates ID, foreign non-residents can open full multi-currency business bank accounts (AED, USD, EUR, GBP) in Dubai.",
  },
  {
    q: "What is the fastest bank to open a business account for a new Freezone company?",
    a: "Wio Bank (Wio Business) offers the fastest digital corporate onboarding in the UAE, approving multi-currency business accounts online in 2 to 4 business days.",
  },
  {
    q: "What documents are required to open a corporate bank account in Dubai?",
    a: "You must provide: (1) Trade License, (2) Commercial Register / MOA, (3) Share Certificate & Board Resolution, (4) Investor Emirates ID & Passport, (5) 6-month personal/business bank statements from home country, and (6) Proof of business background (invoices, website, supplier contracts).",
  },
  {
    q: "What is the minimum account balance requirement for traditional UAE banks?",
    a: "Traditional physical banks (such as Emirates NBD or Mashreq) require maintaining a minimum monthly average balance ranging from AED 25,000 to AED 50,000 to avoid low balance penalty fees.",
  },
  {
    q: "Is physical presence required in Dubai to open a corporate bank account?",
    a: "For digital platforms like Wio Business, account opening is conducted online using your Emirates ID via facial recognition. For traditional tier-1 banks, a physical meeting with a bank relationship manager in Dubai is required.",
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
  headline: "How to Open a Corporate Bank Account in Dubai for a New Freezone Company",
  description:
    "Complete 2026 banking guide for foreign founders in Dubai. Learn how to open business accounts with Wio Bank, Emirates NBD, and Mashreq, KYC documentation rules, and minimum balance requirements.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/open-corporate-bank-account-in-dubai-freezone",
};

export const Route = createFileRoute("/blog/open-corporate-bank-account-in-dubai-freezone")({
  head: () => ({
    meta: [
      { title: "Open Corporate Bank Account in Dubai Freezone (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to opening a corporate bank account in Dubai for Freezone companies. Wio Bank, Emirates NBD & Mashreq setup, KYC documents & minimum balance rules.",
      },
      {
        name: "keywords",
        content:
          "open corporate bank account in dubai freezone, wio bank business account foreign non resident, uae business bank account kyc requirements, dubai bank account opening timeline",
      },
      {
        property: "og:title",
        content: "How to Open a Corporate Bank Account in Dubai for a New Freezone Company",
      },
      {
        property: "og:description",
        content:
          "Master the corporate banking workflow in Dubai to open multi-currency AED/USD business bank accounts for your Freezone entity.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/open-corporate-bank-account-in-dubai-freezone" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/open-corporate-bank-account-in-dubai-freezone" }],
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
            <span>UAE Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            How to Open a Corporate Bank Account in Dubai for a New Freezone Company
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive banking guide for international entrepreneurs detailing KYC compliance, bank officer interviews, proof of business background, and multi-currency account activation.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Banking Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Central Bank Compliance Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Dubai Banking Essentials</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Wio Business (Fastest Option):</strong> Digital onboarding in 2-4 days. No minimum balance required for basic plans.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Emirates NBD / Mashreq:</strong> Traditional tier-1 banks. Requires physical interview and AED 25,000–50,000 minimum balance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Emirates ID Mandate:</strong> Primary shareholder must hold a valid UAE investor residence visa and Emirates ID.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Proof of Business Activity:</strong> Must supply active website link, client contracts, and supplier invoices.</span>
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
            <li><a href="#banking-landscape" className="hover:text-gold-600 underline">1. The Banking Landscape in Dubai for Foreign-Owned Freezone Entities</a></li>
            <li><a href="#digital-vs-traditional" className="hover:text-gold-600 underline">2. Digital Banks (Wio) vs Traditional Banks (Emirates NBD, Mashreq)</a></li>
            <li><a href="#required-kyc-documents" className="hover:text-gold-600 underline">3. Full List of Required Corporate & Personal KYC Documents</a></li>
            <li><a href="#bank-interview-prep" className="hover:text-gold-600 underline">4. How to Pass the Bank Relationship Manager Compliance Interview</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="banking-landscape" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Banking Landscape in Dubai for Foreign-Owned Freezone Entities
          </h2>
          <p>
            Securing a business bank account is the most vital step in operationalizing your UAE Freezone entity.
          </p>
          <p>
            Under Central Bank of the UAE Anti-Money Laundering (AML) regulations, banks perform stringent background checks on Ultimate Beneficial Owners (UBOs) before approving accounts.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="digital-vs-traditional" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Digital Banks (Wio) vs Traditional Banks (Emirates NBD, Mashreq)
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-base mb-2">
                <CreditCard size={18} />
                <span>Wio Business (Digital Leader)</span>
              </div>
              <p className="text-xs text-gray-600">
                Backed by FAB and ADQ. Fully online setup in 2-4 days, multi-currency USD/EUR/AED accounts, virtual debit cards, and zero minimum balance options.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-navy-800 font-semibold text-base mb-2">
                <Landmark size={18} />
                <span>Emirates NBD & Mashreq</span>
              </div>
              <p className="text-xs text-gray-600">
                Established tier-1 physical banks. Best for complex international trade, LC issuance, and high-volume corporate treasury management.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="required-kyc-documents" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Full List of Required Corporate & Personal KYC Documents
          </h2>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <FileCheck className="text-gold-500" size={20} />
              Bank Application Document Checklist:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Corporate Documents:</strong> Trade License, MOA, Certificate of Formation, Share Certificate.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Personal ID:</strong> Investor Emirates ID and Passport copy of all 20%+ shareholders.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Bank Statements:</strong> 6-month personal or foreign company bank statements from home country.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Proof of Business:</strong> 3 signed client contracts, sample sales invoices, and company website link.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            GUARANTEED CORPORATE BANKING ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Open Your Dubai Corporate Bank Account with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares your corporate KYC dossier, pre-screens your application with Wio and tier-1 banks, and manages relationship officer meetings.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/business-bank-account-guide"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Corporate Banking Advisory <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="bank-interview-prep" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. How to Pass the Bank Relationship Manager Compliance Interview
          </h2>
          <p>
            During the bank interview, clearly explain your business revenue model, expected monthly deposit volumes, key customer locations (US, Europe, Asia), and main suppliers.
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
            DUBAI CORPORATE BANKING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your UAE Business Bank Account
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Wio digital bank setup, tier-1 physical bank introductions (Emirates NBD, Mashreq), KYC profile drafting, and account approval management.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/business-bank-account-guide"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Corporate Banking Service
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
