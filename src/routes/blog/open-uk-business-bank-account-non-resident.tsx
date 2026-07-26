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
  AlertTriangle,
  Landmark,
  CreditCard,
  Globe2,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "Can a non-UK resident open a traditional UK high-street bank account (like Barclays or HSBC)?",
    a: "Traditional UK high-street banks almost universally require directors to hold UK residency and attend an in-person branch interview in London. For non-residents living abroad, digital fintech platforms like Wise Business, Payoneer, and Revolut Business are the recommended legal alternatives.",
  },
  {
    q: "Does a Wise Business or Payoneer account give me a real UK Sort Code and Account Number?",
    a: "Yes. Wise Business and Payoneer provide official UK Sort Codes and 8-digit Account Numbers in your company's legal name, allowing you to receive domestic UK BACS/Faster Payments and international SWIFT transfers seamlessly.",
  },
  {
    q: "What documents are required to open a UK business bank account from overseas?",
    a: "You need your UK Certificate of Incorporation, Memorandum & Articles of Association, valid passport copy, proof of overseas residential address (utility bill or bank statement under 3 months old), and details of company shareholders/PSCs.",
  },
  {
    q: "How long does digital business bank account approval take for non-residents?",
    a: "Digital fintech platforms process non-resident business applications in 24 to 48 hours once all identity and company documents are uploaded.",
  },
  {
    q: "Can I receive USD and EUR payments into my UK LTD bank account?",
    a: "Yes. Multi-currency business accounts provided by Wise and Payoneer allow you to hold, convert, and receive USD, EUR, GBP, CAD, and AUD under a single company dashboard.",
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
  headline: "How to Open a UK Business Bank Account for a Non-Resident Company",
  description:
    "Complete 2026 guide for foreign directors on opening a UK business bank account remotely. Compare Wise Business, Revolut, Payoneer, and high-street banking rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://advaq.com/blog/open-uk-business-bank-account-non-resident",
};

export const Route = createFileRoute("/blog/open-uk-business-bank-account-non-resident")({
  head: () => ({
    meta: [
      { title: "Open UK Business Bank Account for Non-Residents (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Step-by-step guide to opening a UK business bank account remotely for non-UK resident company directors. Wise, Payoneer, Revolut & KYC rules.",
      },
      {
        name: "keywords",
        content:
          "open uk business bank account non resident, uk business bank account for foreign company, wise business account uk ltd overseas, non resident bank account for uk limited company",
      },
      {
        property: "og:title",
        content: "How to Open a UK Business Bank Account for a Non-Resident Company",
      },
      {
        property: "og:description",
        content:
          "Discover how overseas founders open GBP, USD, and EUR business bank accounts for UK Limited Companies remotely without visiting London.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/open-uk-business-bank-account-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/open-uk-business-bank-account-non-resident" }],
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
            <span>UK Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            How to Open a UK Business Bank Account for a Non-Resident Company
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive guide for foreign directors on securing UK Sort Codes, GBP/USD/EUR multi-currency accounts, and digital banking approval remotely from abroad.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FCA & HMRC Compliant Banking</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Banking Summary (TL;DR)</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>No UK Travel Required:</strong> Non-residents can open business bank accounts 100% online through FCA-regulated digital banking platforms.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Top 3 Digital Banks:</strong> <strong>Wise Business</strong>, <strong>Payoneer</strong>, and <strong>Revolut Business</strong> offer the highest approval rates for foreign-owned UK LTDs.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Official UK Account Details:</strong> You receive an official UK Sort Code, 8-digit Account Number, and IBAN in your company's name.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Fast Approval:</strong> Digital verification completes within 24 to 48 hours after submitting Incorporation Certificates and Passport ID.</span>
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
            <li><a href="#challenge" className="hover:text-gold-600 underline">1. The Banking Challenge for Non-Resident Directors</a></li>
            <li><a href="#top-digital-banks" className="hover:text-gold-600 underline">2. Top 3 Digital Business Banking Platforms Compared</a></li>
            <li><a href="#required-documents" className="hover:text-gold-600 underline">3. Documents Required for Banking Verification</a></li>
            <li><a href="#application-steps" className="hover:text-gold-600 underline">4. Step-by-Step Bank Account Opening Process</a></li>
            <li><a href="#rejection-pitfalls" className="hover:text-gold-600 underline">5. Common Rejection Causes & How to Avoid Them</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="challenge" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Banking Challenge for Non-Resident Directors
          </h2>
          <p>
            Once your UK Limited Company is registered with Companies House, the immediate next step is opening a corporate business bank account to receive client payments, pay software expenses, and manage payroll.
          </p>
          <p>
            However, traditional UK high-street banks (Barclays, HSBC, Lloyds, NatWest) enforce strict internal compliance policies requiring company directors to be physical UK residents with a UK credit history and in-person branch verification.
          </p>
          <p>
            Fortunately, the rise of <strong>FCA-regulated UK FinTech institutions</strong> has revolutionized cross-border banking. Foreign directors operating from Pakistan, the UAE, the US, or elsewhere can legally open dedicated UK business accounts remotely in 24–48 hours.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="top-digital-banks" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Top 3 Digital Business Banking Platforms Compared
          </h2>
          <p>
            Below is an in-depth comparison of the primary digital business banking providers supporting non-resident UK LTDs:
          </p>

          <div className="space-y-6 my-6">
            {/* WISE BUSINESS */}
            <div className="border border-border bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-navy-950 text-xl flex items-center gap-2">
                  <Landmark className="text-gold-500" size={22} /> Wise Business (Formerly TransferWise)
                </h3>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Wise Business is the gold standard for non-resident UK companies. It provides dedicated UK Sort Codes and Account Numbers, US Routing & Account Numbers, and European IBANs in over 40 currencies at mid-market exchange rates.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-600 bg-off-white p-3 rounded-lg">
                <div>✓ <strong>UK Account Details:</strong> Sort Code & 8-digit Account Number</div>
                <div>✓ <strong>Multi-Currency:</strong> Hold GBP, USD, EUR, CAD, AUD</div>
                <div>✓ <strong>Integration:</strong> Connects to Xero, QuickBooks, Stripe</div>
                <div>✓ <strong>Setup Fee:</strong> One-time £45 account verification fee</div>
              </div>
            </div>

            {/* PAYONEER */}
            <div className="border border-border bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-navy-950 text-xl flex items-center gap-2">
                  <Globe2 className="text-gold-500" size={22} /> Payoneer for UK LTDs
                </h3>
                <span className="bg-navy-100 text-navy-800 text-xs font-bold px-3 py-1 rounded-full">
                  BEST FOR E-COMMERCE & FREELANCERS
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Payoneer provides receiving accounts in UK GBP, US USD, and EU EUR. It seamlessly integrates with Amazon UK, Upwork, Fiverr, eBay, and global B2B clients.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-600 bg-off-white p-3 rounded-lg">
                <div>✓ <strong>Marketplace Ready:</strong> Direct Payouts from Upwork/Amazon</div>
                <div>✓ <strong>Debit Card:</strong> Physical & Virtual Mastercard available</div>
                <div>✓ <strong>Global Transfer:</strong> Withdraw to local overseas bank accounts</div>
                <div>✓ <strong>Setup Fee:</strong> Free to apply for UK LTD owners</div>
              </div>
            </div>

            {/* REVOLUT BUSINESS */}
            <div className="border border-border bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-navy-950 text-xl flex items-center gap-2">
                  <CreditCard className="text-gold-500" size={22} /> Revolut Business
                </h3>
                <span className="bg-navy-100 text-navy-800 text-xs font-bold px-3 py-1 rounded-full">
                  BEST FOR EUROPEAN & UK DEALS
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Revolut Business offers rapid digital onboarding, smart corporate employee cards, automated expense management, and multi-currency IBANs.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-600 bg-off-white p-3 rounded-lg">
                <div>✓ <strong>Virtual Cards:</strong> Issue instant corporate debit cards</div>
                <div>✓ <strong>API Access:</strong> Automated payment workflows</div>
                <div>✓ <strong>Fast FX:</strong> Low-cost currency exchange</div>
                <div>✓ <strong>Setup Fee:</strong> Free tier available</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="required-documents" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Documents Required for Banking Verification
          </h2>
          <p>
            To pass digital banking KYC (Know Your Customer) compliance, prepare the following official documents:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base">Mandatory Verification Checklist:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <FileCheck className="text-gold-500 shrink-0" size={16} />
                <span><strong>Certificate of Incorporation:</strong> Official PDF issued by Companies House displaying your Company Registration Number (CRN).</span>
              </li>
              <li className="flex items-center gap-2">
                <FileCheck className="text-gold-500 shrink-0" size={16} />
                <span><strong>Memorandum & Articles of Association:</strong> Corporate governing documents.</span>
              </li>
              <li className="flex items-center gap-2">
                <FileCheck className="text-gold-500 shrink-0" size={16} />
                <span><strong>Valid Director Passport:</strong> Clear color scan of passport photo page.</span>
              </li>
              <li className="flex items-center gap-2">
                <FileCheck className="text-gold-500 shrink-0" size={16} />
                <span><strong>Director Proof of Address:</strong> Personal bank statement or utility bill (under 90 days old) matching passport name.</span>
              </li>
              <li className="flex items-center gap-2">
                <FileCheck className="text-gold-500 shrink-0" size={16} />
                <span><strong>Business Web Presence:</strong> Active website URL, LinkedIn profile, or client invoice template describing your business services.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK FORMATION & BANKING ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your UK LTD & Bank Account Setup Package
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ includes complete digital business bank account application support with Wise Business & Payoneer alongside your UK incorporation package.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UK LTD Formation Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="application-steps" className="space-y-6 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step Bank Account Opening Process
          </h2>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Submit Online Application</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Create a business profile on Wise or Payoneer using your official UK LTD company name, CRN, and London registered office address.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Upload Identity & Company Certificates</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Upload your passport scan, proof of address, Certificate of Incorporation, and PSC details.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Liveness Selfie Verification</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Complete a 30-second biometric facial scan using your smartphone camera to confirm identity matching.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Receive UK Sort Code & Account Details</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Within 24 to 48 hours, your UK account is activated, providing instant access to GBP Sort Codes and international payment links.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="rejection-pitfalls" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Common Rejection Causes & How to Avoid Them
          </h2>
          
          <div className="space-y-3 my-4">
            <div className="flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm">
              <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Mismatched Names or Addresses:</strong> Ensure the address on your utility bill or bank statement matches the residential address entered in your application character for character.
              </div>
            </div>
            <div className="flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm">
              <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Expired Documents:</strong> Submitting a proof of address older than 90 days causes immediate rejection.
              </div>
            </div>
          </div>
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
            GET YOUR UK COMPANY & BANK ACCOUNT READY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Start Your UK Business with ADVAQ Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            From Companies House incorporation and London registered address to digital business bank account setup support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Formation & Banking Setup — £99
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
