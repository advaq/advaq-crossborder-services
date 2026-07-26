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
  CreditCard,
  UserCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What is an IRS ITIN and how does it differ from an EIN?",
    a: "An Individual Taxpayer Identification Number (ITIN) is a 9-digit personal tax ID issued by the IRS to individuals who need a US tax ID but are not eligible for a Social Security Number (SSN). An EIN is a business tax ID assigned to your LLC entity.",
  },
  {
    q: "Do foreign non-resident US LLC owners need an ITIN?",
    a: "You need an ITIN if you are required to file an individual US non-resident tax return (Form 1040-NR), claim double taxation treaty benefits, open PayPal US business accounts, or apply for US business credit cards.",
  },
  {
    q: "How do I apply for an ITIN using IRS Form W-7?",
    a: "You submit IRS Form W-7 along with a certified copy of your valid international passport (certified by a Certifying Acceptance Agent or issuing agency) and proof of US tax filing requirement (or LLC documentation under Exception 1a/1b).",
  },
  {
    q: "How long does it take for the IRS to issue an ITIN to a non-resident?",
    a: "IRS processing for Form W-7 submitted from outside the United States takes approximately 7 to 11 weeks.",
  },
  {
    q: "What is an IRS Certifying Acceptance Agent (CAA)?",
    a: "A CAA is an authorized individual or firm authorized by the IRS to verify foreign applicant passports for Form W-7 applications, eliminating the need to mail your original passport to the IRS in the United States.",
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
  headline: "Why Foreign Business Owners Need an ITIN & How to Apply (W-7 Form Guide)",
  description:
    "Complete 2026 IRS Form W-7 ITIN guide for non-US resident founders. Learn ITIN vs EIN differences, passport certification, Exceptions 1a/1b, and application steps.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/how-to-get-itin-non-us-resident",
};

export const Route = createFileRoute("/blog/how-to-get-itin-non-us-resident")({
  head: () => ({
    meta: [
      { title: "Why Foreign Founders Need an ITIN & W-7 Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Form W-7 ITIN application guide for foreign non-resident US LLC owners. Learn ITIN vs EIN, passport verification rules, 1040-NR tax filings & CAA process.",
      },
      {
        name: "keywords",
        content:
          "how to get itin non us resident, irs form w7 application guide foreign founder, itin vs ein difference us llc, certifying acceptance agent caa itin passport",
      },
      {
        property: "og:title",
        content: "Why Foreign Business Owners Need an ITIN & How to Apply (W-7 Form Guide)",
      },
      {
        property: "og:description",
        content:
          "Discover why international entrepreneurs need a Personal IRS ITIN, how it unlocks US credit cards and PayPal, and how to apply using Form W-7.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-get-itin-non-us-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-get-itin-non-us-resident" }],
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
            <span>US Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Why Foreign Business Owners Need an ITIN & How to Apply (W-7 Form Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive IRS Form W-7 masterclass for non-resident founders on personal ITIN numbers, tax treaty claims, US credit card applications, and Certifying Acceptance Agent (CAA) verification.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Tax Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>IRS Form W-7 & Treasury Regulations</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>ITIN Key Facts at a Glance</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>ITIN vs EIN:</strong> EIN is for your company (9 digits). ITIN is for you personally as a foreign individual without a US SSN (starts with 9).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Unlocks US Credit Cards & PayPal:</strong> Having a personal ITIN allows non-residents to build US personal credit history and get American Express US credit cards.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form W-7 Exception Rules:</strong> Non-residents can apply under Exception 1(a) or Exception 1(b) with LLC partnership documents without attaching a full tax return.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>No Need to Mail Original Passport:</strong> Working with an IRS Certifying Acceptance Agent (CAA) avoids mailing your physical passport to the IRS.</span>
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
            <li><a href="#what-is-itin" className="hover:text-gold-600 underline">1. What Is an IRS ITIN Number?</a></li>
            <li><a href="#why-founders-need-itin" className="hover:text-gold-600 underline">2. Why Foreign Non-Resident Founders Need an ITIN</a></li>
            <li><a href="#form-w7-exceptions" className="hover:text-gold-600 underline">3. Understanding Form W-7 Exception 1a & 1b Rules</a></li>
            <li><a href="#application-process" className="hover:text-gold-600 underline">4. Step-by-Step Form W-7 Application Process</a></li>
            <li><a href="#caa-benefits" className="hover:text-gold-600 underline">5. Benefits of Using an IRS Certifying Acceptance Agent (CAA)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-itin" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is an IRS ITIN Number?
          </h2>
          <p>
            An <strong>Individual Taxpayer Identification Number (ITIN)</strong> is a 9-digit tax processing number issued by the IRS to individuals who are required to have a US taxpayer identification number but who do not have, and are not eligible to obtain, a Social Security Number (SSN).
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="why-founders-need-itin" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Why Foreign Non-Resident Founders Need an ITIN
          </h2>
          <p>
            While your LLC uses an EIN for business operations, a personal ITIN unlocks critical financial capabilities:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-base mb-2">
                <CreditCard size={20} />
                <span>US Credit Cards & Credit Score</span>
              </div>
              <p className="text-sm text-gray-600">
                Allows non-residents to apply for US credit cards (Amex, Chase) and build personal FICO credit history remotely.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-navy-700 font-semibold text-base mb-2">
                <UserCheck size={20} />
                <span>PayPal & Payment Gateway Verification</span>
              </div>
              <p className="text-sm text-gray-600">
                Satisfies SSN/ITIN identity verification prompts on PayPal US, Stripe, and Amazon Seller Central accounts.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            IRS ITIN APPLICATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Apply for Your IRS ITIN Fast with ADVAQ CAA Service
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares Form W-7, verifies foreign passports via CAA process, and manages IRS submission without mailing original passports.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/itin-application"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore ITIN Application Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="form-w7-exceptions" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Understanding Form W-7 Exception 1a & 1b Rules
          </h2>
          <p>
            Normally, Form W-7 must be attached to an annual federal tax return (Form 1040-NR).
          </p>
          <p>
            However, foreign founders can apply <strong>year-round</strong> without filing a tax return by qualifying under IRS <strong>Exception 1(a) (Partnership Interest)</strong> or <strong>Exception 1(b) (Withholding on Income)</strong> by providing proof of LLC ownership and bank account withholding documentation.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="application-process" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step Form W-7 Application Process
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 ml-2">
            <li>Complete Form W-7 with applicant personal details and exception selection.</li>
            <li>Obtain certified passport verification from an IRS Certifying Acceptance Agent (CAA).</li>
            <li>Submit W-7 packet to IRS ITIN Operation unit in Austin, Texas.</li>
            <li>Receive IRS Notice CP565 with your official 9-digit ITIN number in 7–11 weeks.</li>
          </ol>
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
            IRS ITIN APPLICATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Obtain Your Personal IRS ITIN with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Form W-7 filing, CAA passport certification without mailing originals, Exception 1a/1b documentation, and CP565 letter delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/itin-application"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order IRS ITIN Service
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
