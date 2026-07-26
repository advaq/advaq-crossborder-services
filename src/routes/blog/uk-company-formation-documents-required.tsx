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
  FileCheck,
  Building2,
  AlertTriangle,
  FileText,
  CreditCard,
  Lock,
  Globe2,
  Scale,
  Percent,
  Receipt,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "What proof of identity is accepted for non-UK resident company directors?",
    a: "Companies House and regulated formation providers accept a valid international passport or a national smart identity card (with official English translation) as primary proof of photo identity for foreign directors and shareholders.",
  },
  {
    q: "What proof of address can I provide from outside the UK?",
    a: "Accepted overseas proof of address documents include a personal bank statement, credit card statement, or utility bill (electricity, water, gas, fixed landline internet) issued within the last 3 months, showing your full legal name and residential address.",
  },
  {
    q: "Do I need to notarize or apostille my identity documents?",
    a: "For standard UK company incorporation and online digital business banking (Wise, Payoneer, Revolut), clear digital color scans are accepted without notarization. However, traditional high-street bank accounts or international court filings may require Hague Apostille certification.",
  },
  {
    q: "Can I use a mobile phone bill as proof of residential address?",
    a: "No. Mobile phone bills (prepaid or postpaid cell records) are strictly rejected by UK AML/KYC regulations. You must provide a personal bank statement, credit card statement, or fixed utility bill.",
  },
  {
    q: "Can I use a PO Box as my company's registered office address?",
    a: "No. Under the Economic Crime and Corporate Transparency Act 2023 (ECCTA), Companies House strictly prohibits using a PO Box without a physical street location. Non-resident directors must use an Appropriate Registered Address, such as ADVAQ's commercial London virtual office.",
  },
  {
    q: "How long does Companies House take to process the incorporation documents?",
    a: "Once electronic identity verification (KYC) is completed, Companies House processes online incorporation applications in 3 to 24 hours on business days.",
  },
  {
    q: "What happens if my proof of address document is in a foreign language?",
    a: "If your bank statement or utility bill is in a non-English language (e.g. Arabic, Urdu, Chinese), you must provide the original document along with a certified English translation from a registered translator.",
  },
  {
    q: "Do all shareholders holding 25% or more shares need to submit KYC documents?",
    a: "Yes. Under UK Person with Significant Control (PSC) regulations, every shareholder who holds more than 25% of company shares or voting rights must complete full identity and address verification.",
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
  headline: "What Documents Are Needed to Form a UK Company Overseas? (KYC Guide)",
  description:
    "Exhaustive 2026 checklist of required identity documents, proof of address, and KYC compliance rules for non-UK residents registering a UK Limited company.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uk-company-formation-documents-required",
};

export const Route = createFileRoute("/blog/uk-company-formation-documents-required")({
  head: () => ({
    meta: [
      { title: "Documents Needed to Register a UK Company Overseas (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Full 2026 KYC checklist for foreign directors: passport, proof of address, UK registered address, and Companies House documentation required.",
      },
      {
        name: "keywords",
        content:
          "uk company formation documents required, kyc documents uk company formation non resident, proof of address uk ltd non resident, register uk company passport",
      },
      {
        property: "og:title",
        content: "What Documents Are Needed to Form a UK Company Overseas? (KYC Guide)",
      },
      {
        property: "og:description",
        content:
          "Learn exact identity and address verification requirements for foreign directors registering a UK Limited Company remotely.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-company-formation-documents-required" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-company-formation-documents-required" }],
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
            What Documents Are Needed to Form a UK Company Overseas? (2026 KYC Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A definitive masterclass guide to passport requirements, international proof of address standards, Companies House compliance, and Anti-Money Laundering (AML) verification for foreign directors.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UK Corporate Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>22 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Verified UK AML & KYC Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Document Checklist Summary (TL;DR)</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            To register a UK Limited Company remotely from overseas, foreign directors and shareholders must provide <strong>two primary personal documents</strong> alongside standard company structural information:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">1. Proof of Photo ID</strong>
              <p className="text-navy-100 leading-relaxed">
                Valid International Passport or National Smart Identity Card showing full photo and MRZ zone.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">2. Proof of Residential Address</strong>
              <p className="text-navy-100 leading-relaxed">
                Personal bank statement, credit card statement, or utility bill issued within the last 90 days.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">3. UK Registered Address</strong>
              <p className="text-navy-100 leading-relaxed">
                Commercial physical UK street address for statutory mail (provided by ADVAQ).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">4. Company Structure Details</strong>
              <p className="text-navy-100 leading-relaxed">
                Unique business name, 5-digit SIC trade code, and share capital allocation (£100 standard).
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
            <li><a href="#why-kyc" className="hover:text-gold-600 underline">1. Statutory Framework: Why UK Law Mandates KYC</a></li>
            <li><a href="#proof-of-id" className="hover:text-gold-600 underline">2. Document 1: Acceptable Proof of Identity (Photo ID)</a></li>
            <li><a href="#proof-of-address" className="hover:text-gold-600 underline">3. Document 2: Acceptable Overseas Proof of Address</a></li>
            <li><a href="#kyc-matrix" className="hover:text-gold-600 underline">4. Non-Resident Document Verification Matrix</a></li>
            <li><a href="#company-data" className="hover:text-gold-600 underline">5. Required Company Structure Data</a></li>
            <li><a href="#uk-addresses" className="hover:text-gold-600 underline">6. UK Address Requirements (Registered Office vs Service)</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">7. 6 Critical Common Mistakes Foreign Applicants Must Avoid</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-kyc" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Statutory Framework: Why UK Law Mandates KYC Verification
          </h2>
          <p>
            Under the UK <em>Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017</em> (MLR 2017) and updated provisions under the <em>Economic Crime and Corporate Transparency Act 2023</em> (ECCTA 2023), all registered UK corporate service providers are legally required to perform strict <strong>Anti-Money Laundering (AML)</strong> and <strong>Know Your Customer (KYC)</strong> identity checks on directors and beneficial owners.
          </p>
          <p>
            These mandatory identity verification protocols protect the integrity of the UK Companies House corporate register, preventing fraudulent formations while giving legitimate overseas founders clean corporate standing to trade globally.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Digital Agency Founder Verification
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Usman, a software developer based in Lahore. When forming his UK LTD company via ADVAQ, Usman uploads a clear photo scan of his Pakistani passport and a PDF bank statement issued by HBL showing his Lahore residential address. Within 2 hours, ADVAQ's digital AML portal verifies his identity without requiring an expensive apostille or embassy visit, submitting Form IN01 to Companies House for instant approval.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="proof-of-id" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Document 1: Acceptable Proof of Identity (Photo ID Guidelines)
          </h2>
          <p>
            Every company director, shareholder, and Person with Significant Control (PSC) holding 25% or more shares must provide a valid photo ID document.
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <IdCard className="text-gold-600" size={18} />
                International Passport (Gold Standard - Highly Recommended)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Must be valid (unexpired), showing the full photo page, clear facial image, signature line, and bottom Machine Readable Zone (MRZ) code strip.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <IdCard className="text-gold-600" size={18} />
                National Smart Identity Card
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Government-issued plastic smart ID card containing photo and English script translation (e.g. NICOP or Smart National ID).
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="proof-of-address" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Document 2: Acceptable Overseas Proof of Residential Address
          </h2>
          <p>
            Proof of address verifies where you currently live in your home country.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-emerald-200 bg-emerald-50/40 p-6 rounded-2xl">
              <h3 className="font-bold text-emerald-900 text-base mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-600" size={18} />
                Accepted Proof of Address (Under 90 Days Old):
              </h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Personal Bank Statement (PDF download or scan showing full legal name & home address)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Credit Card Statement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Fixed Utility Bill (Electricity, Water, Gas, Fiber Landline Internet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Official Government Tax Assessment Letter</span>
                </li>
              </ul>
            </div>

            <div className="border border-red-200 bg-red-50/40 p-6 rounded-2xl">
              <h3 className="font-bold text-red-900 text-base mb-2 flex items-center gap-2">
                <AlertTriangle className="text-red-600" size={18} />
                Rejected Documents (Will Cause AML Failures):
              </h3>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Mobile Phone Bills (prepaid or postpaid mobile cell records)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Documents older than 90 days from issuance date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Cropped screenshots missing page headers, footers, or page numbers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Commercial lease agreements or company corporate bank statements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="kyc-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Non-Resident Document Verification Matrix
          </h2>
          <p>
            Detailed side-by-side verification standards for foreign non-resident applicants:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Document Category</th>
                  <th className="p-4 text-gold-500">Accepted Document Types</th>
                  <th className="p-4 text-emerald-400">Freshness Requirement</th>
                  <th className="p-4">Common Rejection Trigger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Primary Photo ID</td>
                  <td className="p-4 text-emerald-700 font-bold">International Passport / Smart ID</td>
                  <td className="p-4 text-navy-900">Valid (Unexpired)</td>
                  <td className="p-4 text-rose-700 font-bold">Expired ID or missing signature line</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Proof of Address</td>
                  <td className="p-4 text-navy-900">Bank Statement / Electricity Bill</td>
                  <td className="p-4 text-emerald-700 font-bold">Under 90 Days (Issued inside 3 mos)</td>
                  <td className="p-4 text-rose-700 font-bold">Mobile cell phone bill or older than 90 days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">UK Registered Address</td>
                  <td className="p-4 text-emerald-700 font-bold">Commercial Virtual Office Street Address</td>
                  <td className="p-4 text-navy-900">Annual Subscription Active</td>
                  <td className="p-4 text-rose-700 font-bold">Using PO Box (Prohibited by ECCTA)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Director Service Address</td>
                  <td className="p-4 text-navy-900">London Virtual Contact Address</td>
                  <td className="p-4 text-emerald-700 font-bold">Annual Subscription Active</td>
                  <td className="p-4 text-rose-700 font-bold">Exposing home address on public website</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FAST DIGITAL VERIFICATION
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Hassle-Free Non-Resident UK Incorporation
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles your complete UK incorporation, KYC verification, virtual London registered office address, and HMRC registration in 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK Formation Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="company-data" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Required Company Structure Data
          </h2>
          <p>
            In addition to personal KYC verification documents, you will provide basic structural information about your proposed UK entity:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                Unique Business Name & Sensitivity Clearance
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Must end with "Limited" or "LTD" and pass sensitive words checks (avoiding terms like "Bank", "Trust", "Royal", or "Insurance" unless licensed).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileText className="text-gold-600" size={18} />
                SIC Trade Code Selection (5-Digit Trade Classification)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Select your industry activity code (e.g. 62010 for Software Development, 47910 for Internet Retail, 70220 for Management Consultancy).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <CreditCard className="text-gold-600" size={18} />
                Share Capital Structure & Equity Distribution
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Standard setup is 100 ordinary shares valued at £1 per share (£100 total authorized share capital). You do not need to deposit this money into a bank beforehand.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="uk-addresses" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. UK Address Requirements: Registered Office vs Service Address
          </h2>
          <p>
            Companies House requires two distinct address declarations for every UK Limited Company:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Globe2 className="text-gold-600" size={18} />
                A. Registered Office Address (Statutory Legal Contact)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The official corporate address in the UK where formal legal summons and HMRC correspondence are delivered. Must be a physical street location (PO Boxes prohibited). ADVAQ provides London Registered Address coverage.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Lock className="text-gold-600" size={18} />
                B. Directors' Service Address (Privacy Shield)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The public contact address for company officers. Utilizing a Directors' Service Address keeps your personal foreign home address confidential and hidden from the public Companies House website.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. 6 Critical Common Mistakes Foreign Applicants Must Avoid
          </h2>
          <p>
            Steer clear of these six frequent document mistakes that cause KYC rejections:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Submitting Mobile Phone Bills as Proof of Address
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Mobile cell records are universally rejected by UK AML regulations. You must provide a bank statement, credit card bill, or fixed utility statement.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Name Mismatch Between Passport & Utility Bill
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Ensure your full legal name on your proof of address matches your passport identity exactly (including middle names).
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                3. Submitting Documents Older Than 90 Days
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Proof of address documents issued more than 3 months prior to application submission are automatically invalidated.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                4. Uploading Cropped Screenshots Missing Page Borders
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Screenshots missing page headers, footers, or statement account details will fail digital compliance checks. Always upload full official PDF e-statements.
              </p>
            </div>
          </div>
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
            GET YOUR UK COMPANY FORMED TODAY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UK LTD with Full KYC Assistance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Submit your passport & proof of address online. ADVAQ incorporates your UK LTD in 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Company Formation — £99
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
