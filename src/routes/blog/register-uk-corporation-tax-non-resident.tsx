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
  Receipt,
  FileText,
  Key,
  Calendar,
} from "lucide-react";

const faqs = [
  {
    q: "When must an overseas director register their UK LTD company for Corporation Tax with HMRC?",
    a: "You must register your company for Corporation Tax with HM Revenue & Customs (HMRC) within 3 months of starting any business activity (e.g. issuing invoices, opening a business bank account, purchasing software, or hiring staff).",
  },
  {
    q: "What is a 10-digit Unique Taxpayer Reference (UTR) for a UK company?",
    a: "A Company UTR is a 10-digit unique reference code issued automatically by HMRC after company incorporation. It is required to file annual Corporation Tax returns, register for VAT, and communicate with HMRC.",
  },
  {
    q: "How is the UTR letter delivered to non-resident directors living overseas?",
    a: "HMRC posts the official UTR notification letter (Form CT41G) to your UK Registered Office Address within 14 days of incorporation. ADVAQ scans and uploads this letter to your digital client portal immediately.",
  },
  {
    q: "What happens if I fail to register for Corporation Tax within 3 months?",
    a: "Failing to notify HMRC within the 3-month statutory deadline results in automated 'Failure to Notify' financial penalties starting from £300, plus interest on overdue tax assessments.",
  },
  {
    q: "Do I need to register for Corporation Tax if my company is non-trading or dormant?",
    a: "Yes. Even if your company is dormant, you must formally notify HMRC of your dormant status to prevent HMRC from issuing estimated tax assessments and penalty notices.",
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
  headline: "How to Register for UK Corporation Tax as an Overseas Director",
  description:
    "Step-by-step 2026 guide for foreign directors on HMRC Corporation Tax registration, 10-digit Company UTR letters, Government Gateway setup, and filing deadlines.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/register-uk-corporation-tax-non-resident",
};

export const Route = createFileRoute("/blog/register-uk-corporation-tax-non-resident")({
  head: () => ({
    meta: [
      { title: "Register for UK Corporation Tax Non-Resident (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Complete HMRC guide for overseas directors to register for UK Corporation Tax, retrieve company 10-digit UTR, and set up HMRC Government Gateway.",
      },
      {
        name: "keywords",
        content:
          "register uk corporation tax non resident, company utr letter hmrc overseas director, hmrc government gateway account foreign company, uk ltd tax registration deadline",
      },
      {
        property: "og:title",
        content: "How to Register for UK Corporation Tax as an Overseas Director",
      },
      {
        property: "og:description",
        content:
          "Learn how foreign company directors register for HMRC Corporation Tax, retrieve their 10-digit UTR code, and activate HMRC Government Gateway.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/register-uk-corporation-tax-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/register-uk-corporation-tax-non-resident" }],
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
            How to Register for UK Corporation Tax as an Overseas Director
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A step-by-step compliance guide for non-resident founders on receiving your 10-digit Company UTR letter, registering with HMRC, and setting up Government Gateway.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>HMRC Official Compliance Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Registration Rules (TL;DR)</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>3-Month Deadline:</strong> You must register for Corporation Tax with HMRC within 3 months of initiating any UK company trade or invoicing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>10-Digit Company UTR:</strong> HMRC generates a Unique Taxpayer Reference letter (Form CT41G) sent to your UK registered office within 14 days of formation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Government Gateway Setup:</strong> Non-residents must activate an official HMRC Organization Government Gateway account using their Company UTR.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Dormant Notice:</strong> If not yet trading, notify HMRC of dormant status to avoid automatic failure-to-file fines.</span>
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
            <li><a href="#utr-explained" className="hover:text-gold-600 underline">1. What is a Company UTR & How is it Issued?</a></li>
            <li><a href="#registration-deadline" className="hover:text-gold-600 underline">2. Statutory 3-Month HMRC Registration Deadline</a></li>
            <li><a href="#step-by-step-process" className="hover:text-gold-600 underline">3. Step-by-Step HMRC Online Tax Registration Guide</a></li>
            <li><a href="#gateway-account" className="hover:text-gold-600 underline">4. Setting Up an HMRC Organization Government Gateway Account</a></li>
            <li><a href="#dormant-rules" className="hover:text-gold-600 underline">5. What to Do If Your Company Is Not Yet Trading (Dormant Status)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="utr-explained" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What is a Company UTR & How is it Issued?
          </h2>
          <p>
            When a UK Limited Company is registered with Companies House, Companies House automatically notifies HM Revenue & Customs (HMRC). 
          </p>
          <p>
            HMRC then creates an official corporate tax profile for your business and issues a unique <strong>10-digit Company Unique Taxpayer Reference (UTR)</strong>.
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <Key className="text-gold-500" size={20} />
              The Form CT41G Letter:
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              HMRC sends the official UTR notification letter (Form CT41G) by post to your company's official <strong>UK Registered Office Address</strong> within 14 days of incorporation.
            </p>
            <p className="text-xs text-gray-500 italic">
              * Note for Overseas Directors: ADVAQ provides a central London Registered Office Address and scans your official HMRC UTR letter directly to your dashboard same-day.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="registration-deadline" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Statutory 3-Month HMRC Registration Deadline
          </h2>
          <p>
            Under UK tax law, a company must notify HMRC that it has started carrying on a business activity within <strong>3 months</strong> of the start date.
          </p>
          <p>
            Business activity includes:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Issuing sales invoices or receiving customer payments into your bank account.</li>
            <li>Buying goods, software subscriptions, or services for resale.</li>
            <li>Renting office space or employing staff.</li>
            <li>Advertising or entering into commercial contracts.</li>
          </ul>

          <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-sm text-red-900 my-4">
            <strong>Penalty Warning:</strong> Missing the 3-month notification window exposes the company to automated "Failure to Notify" fines under Schedule 41 to the Finance Act 2008.
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            HMRC UTR & TAX REGISTRATION ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your 10-Digit Company UTR & HMRC Registration
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles UTR retrieval, HMRC Government Gateway setup, and Corporation Tax registration for overseas directors smoothly from abroad.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/utr-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore Company UTR & Tax Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="step-by-step-process" className="space-y-6 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step HMRC Online Tax Registration Guide
          </h2>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Retrieve Your 10-Digit Company UTR Number</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Access your scanned CT41G letter from your ADVAQ London Registered Address portal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Create an HMRC Organization Account</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Visit GOV.UK and register a new Organization User ID for Corporation Tax online services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Enter Company Details & Trading Start Date</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Input your Company Registration Number (CRN), 10-digit UTR, main business SIC code, and exact trading start date.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Activate Corporation Tax Web Service</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Enter the activation PIN sent by HMRC to complete tax portal setup.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="gateway-account" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Setting Up an HMRC Organization Government Gateway Account
          </h2>
          <p>
            To file tax returns, pay Corporation Tax, or register for VAT, non-resident directors must maintain an active <strong>HMRC Government Gateway Organization User ID</strong>.
          </p>
          <p>
            Always ensure you select an <strong>"Organization"</strong> account type when registering your UK Limited Company on GOV.UK, as personal accounts cannot manage corporate tax.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="dormant-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. What to Do If Your Company Is Not Yet Trading (Dormant Status)
          </h2>
          <p>
            If you incorporated your UK LTD company but have not yet started business activities or generated revenue, your company is legally considered <strong>dormant for Corporation Tax</strong>.
          </p>
          <p>
            You must formally notify HMRC that your company is dormant. Once HMRC marks your company as dormant, they will pause annual tax return notices until you begin trading.
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
            HMRC UTR & TAX REGISTRATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register for UK Corporation Tax with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Retrieve your 10-digit UTR, set up your HMRC Government Gateway account, and ensure full statutory compliance for non-resident directors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/utr-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order HMRC UTR & Tax Registration
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
