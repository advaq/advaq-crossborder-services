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
  Scale,
  Percent,
  Receipt,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
  Award,
  Globe2,
} from "lucide-react";

const faqs = [
  {
    q: "What is an IRS ITIN and how does it differ from an EIN?",
    a: "An Individual Taxpayer Identification Number (ITIN) is a 9-digit personal tax processing number issued by the IRS to foreign individuals who are required to have a US tax ID but are ineligible for a Social Security Number (SSN). An EIN (Employer Identification Number) is a corporate tax ID assigned to your LLC entity. You need an EIN for your business operations and a personal ITIN for individual US tax filings, credit card applications, and payment gateway verifications.",
  },
  {
    q: "Do foreign non-resident US LLC owners need an ITIN?",
    a: "While you can form a US LLC and receive an EIN without an ITIN, getting a personal ITIN is highly advantageous. You need an ITIN if you are required to file an individual US non-resident tax return (Form 1040-NR), claim double taxation treaty benefits, open PayPal US business accounts, or build US credit history to acquire American Express and Chase US credit cards.",
  },
  {
    q: "How do I apply for an ITIN using IRS Form W-7 without sending my original passport?",
    a: "By working with an authorized IRS Certifying Acceptance Agent (CAA), you can have your international passport verified locally or via video audit. The CAA issues an official IRS Certificate of Accuracy (Form W-7 COA), allowing you to retain your physical passport while the IRS processes your ITIN application.",
  },
  {
    q: "What are Form W-7 Exception 1a and 1b rules?",
    a: "Under IRS Publication 1915, Exception 1(a) (Partnership Interest) and Exception 1(b) (Withholding on Income) allow foreign non-resident LLC owners to apply for an ITIN year-round without attaching a full US tax return. Submitting your LLC Operating Agreement, EIN CP575 letter, and a bank withholding letter satisfies Exception 1 criteria.",
  },
  {
    q: "How long does it take for the IRS to issue an ITIN to a non-resident?",
    a: "IRS processing for Form W-7 applications submitted from outside the United States takes approximately 7 to 11 weeks. Once approved, the IRS mails an official Notice CP565 containing your 9-digit ITIN.",
  },
  {
    q: "Does an IRS ITIN number expire?",
    a: "An ITIN expires if it is not used on a US federal income tax return at least once in three consecutive tax years. If your ITIN expires, it can be renewed by submitting a new Form W-7 with updated verification documentation.",
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
    "Exhaustive 2026 IRS Form W-7 ITIN masterclass guide for non-US resident founders. Learn ITIN vs EIN differences, passport certification, Exceptions 1a/1b, US credit building, and CAA verification.",
  author: { "@type": "Organization", name: "ADVAQ US Tax Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-to-get-itin-non-us-resident",
};

export const Route = createFileRoute("/blog/how-to-get-itin-non-us-resident")({
  head: () => ({
    meta: [
      { title: "Why Foreign Founders Need an ITIN & W-7 Guide (2026 Masterclass) | ADVAQ" },
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
            An exhaustive IRS Form W-7 masterclass for non-resident founders on personal ITIN numbers, tax treaty claims, US credit card applications, and Certifying Acceptance Agent (CAA) passport verification.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Tax Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>16 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>IRS Form W-7 & Treasury Regulations Review</span>
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
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">ITIN vs EIN Distinction</strong>
              <p className="text-navy-100 leading-relaxed">
                EIN is for your US company entity (9 digits). ITIN is for you personally as a foreign individual without a US SSN (starts with 9).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">US Credit Cards & PayPal Unlocking</strong>
              <p className="text-navy-100 leading-relaxed">
                Having a personal ITIN allows non-residents to build US personal FICO credit scores and acquire American Express & Chase credit cards.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Form W-7 Exception Rules</strong>
              <p className="text-navy-100 leading-relaxed">
                Non-residents can apply year-round under Exception 1(a) or Exception 1(b) with LLC partnership documents without attaching a tax return.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">CAA Passport Protection</strong>
              <p className="text-navy-100 leading-relaxed">
                Working with an IRS Certifying Acceptance Agent (CAA) eliminates the risk of mailing physical passports to the IRS in Texas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-2xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen size={16} className="text-gold-600" />
            Table of Contents
          </h2>
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#what-is-itin" className="hover:text-gold-600 underline">1. What Is an IRS ITIN Number & How Does It Differ From an EIN?</a></li>
            <li><a href="#why-founders-need-itin" className="hover:text-gold-600 underline">2. Why Foreign Non-Resident Founders Need an ITIN</a></li>
            <li><a href="#form-w7-exceptions" className="hover:text-gold-600 underline">3. Understanding Form W-7 Exception 1a & 1b Rules</a></li>
            <li><a href="#itin-matrix" className="hover:text-gold-600 underline">4. Comprehensive ITIN Application Process Matrix</a></li>
            <li><a href="#step-by-step-w7" className="hover:text-gold-600 underline">5. Step-by-Step Guide to Filling IRS Form W-7 Line-by-Line</a></li>
            <li><a href="#caa-benefits" className="hover:text-gold-600 underline">6. Working with an IRS Certifying Acceptance Agent (CAA)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-itin" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is an IRS ITIN Number & How Does It Differ From an EIN?
          </h2>
          <p>
            An <strong>Individual Taxpayer Identification Number (ITIN)</strong> is a 9-digit personal tax processing number issued by the Internal Revenue Service (IRS) to individuals who are required to have a US taxpayer identification number but who are ineligible to receive a Social Security Number (SSN).
          </p>
          <p>
            It is critical to distinguish between your company's tax ID and your personal tax ID:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>EIN (Employer Identification Number):</strong> Issued to your US LLC entity to open business bank accounts, hire employees, and process corporate transactions.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>ITIN (Individual Taxpayer ID):</strong> Issued to you personally as an individual foreign national to file US income tax returns, build personal US credit, and verify merchant accounts.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="why-founders-need-itin" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Why Foreign Non-Resident Founders Need an ITIN
          </h2>
          <p>
            While a non-resident alien can form a US LLC using only an EIN, obtaining a personal ITIN unlocks powerful financial and legal advantages:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <CreditCard className="text-gold-600" size={18} />
                Unlocking US Personal & Business Credit Cards
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Major US banks (such as American Express US, Chase, and Capital One) require a personal US SSN or ITIN to issue premium credit cards. With an ITIN, foreign founders can build a US FICO credit score remotely and earn valuable cash back and travel rewards.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <UserCheck className="text-gold-600" size={18} />
                Resolving Payment Gateway & Merchant Holds
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Merchant processors like PayPal US, Stripe, and Amazon Seller Central frequently audit account owners once transaction volume exceeds federal reporting thresholds. Providing a valid personal ITIN satisfies identity verification checks and prevents account freezes.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Scale className="text-gold-600" size={18} />
                Filing Individual US Non-Resident Returns (Form 1040-NR)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                If your US LLC generates effectively connected US trade or business income (ETBUS) or receives US-sourced passive dividends, foreign owners are required to file an annual individual Form 1040-NR return to claim international double-taxation treaty exemptions.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="form-w7-exceptions" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Understanding Form W-7 Exception 1a & 1b Rules
          </h2>
          <p>
            Standard IRS rules require attaching Form W-7 to an annual federal tax return (Form 1040-NR) during tax season.
          </p>
          <p>
            However, foreign entrepreneurs can apply for an ITIN <strong>year-round</strong> without waiting for tax season by qualifying under <strong>IRS Publication 1915 Exception Rules</strong>:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Exception 1(a) (Partnership Interest):</strong> Foreign members of a Multi-Member US LLC can apply by submitting a copy of the LLC Operating Agreement, EIN CP575 letter, and a partner certification letter.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Exception 1(b) (Third-Party Withholding):</strong> Foreign owners deriving interest or dividend income subject to US bank withholding can apply with an official bank withholding letter.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="itin-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive ITIN Application Process Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of ITIN submission routes:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Submission Route</th>
                  <th className="p-4 text-gold-500">Passport Protection</th>
                  <th className="p-4 text-emerald-400">Document Verification</th>
                  <th className="p-4">Processing Timeframe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">IRS Certifying Acceptance Agent (CAA)</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Safe (Retain Original Passport)</td>
                  <td className="p-4 text-emerald-700 font-bold">Certified CAA Form W-7 COA</td>
                  <td className="p-4 text-emerald-700 font-bold">7 to 11 Weeks</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Direct Mail to IRS Austin, TX</td>
                  <td className="p-4 text-rose-700 font-bold">High Risk (Must Mail Original Passport)</td>
                  <td className="p-4 text-navy-900">Physical Passport Inspection</td>
                  <td className="p-4 text-navy-900">9 to 14 Weeks</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">US Embassy / Consulate Certification</td>
                  <td className="p-4 text-emerald-700 font-bold">Retain Original Passport</td>
                  <td className="p-4 text-navy-900">Consular Certified Passport Copy</td>
                  <td className="p-4 text-rose-700 font-bold">10 to 16 Weeks (High Appointment Delay)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="step-by-step-w7" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Step-by-Step Guide to Filling IRS Form W-7 Line-by-Line
          </h2>
          <p>
            Completing IRS Form W-7 requires precision to prevent rejection:
          </p>

          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Reason for Applying:</strong> Check Box h (Other) and specify "Exception 1a - Partnership Interest" alongside your LLC name and EIN.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Applicant Identity Details:</strong> Enter your full legal name, foreign residential address, and mailing address exactly as shown on your passport.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Line 6c (Foreign Tax ID):</strong> Enter your home country personal tax identification number (e.g. CNIC / NTN in Pakistan, Emirates ID in UAE).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Line 6d (Passport Info):</strong> Enter passport number, issuing country, and expiration date.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 6 */}
        <div id="caa-benefits" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Working with an IRS Certifying Acceptance Agent (CAA)
          </h2>
          <p>
            An <strong>IRS Certifying Acceptance Agent (CAA)</strong> is an authorized tax professional trained by the IRS to verify international identity documents.
          </p>
          <p>
            When applying through a CAA, the agent inspects your passport, verifies your identity via video call or in person, issues an official <strong>Form W-7 COA (Certificate of Accuracy)</strong>, and submits your application directly to the IRS. You keep your physical passport safely in your hands throughout the entire process.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6 flex items-center gap-2">
            <HelpCircle size={22} className="text-gold-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all shadow-sm"
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
            Form W-7 filing, CAA passport certification without mailing originals, Exception 1a/1b documentation, and CP565 letter delivery handled by ADVAQ.
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
