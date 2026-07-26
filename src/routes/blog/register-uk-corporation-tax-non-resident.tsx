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
  Scale,
  Percent,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "When must an overseas director register their UK LTD company for Corporation Tax with HMRC?",
    a: "You must register your company for Corporation Tax with HM Revenue & Customs (HMRC) within 3 months of starting any business activity (e.g. issuing invoices, receiving client payments, opening a business bank account, purchasing software, or hiring staff).",
  },
  {
    q: "What is a 10-digit Unique Taxpayer Reference (UTR) for a UK company?",
    a: "A Company UTR is a 10-digit unique reference code issued automatically by HMRC after company incorporation. It is required to file annual Corporation Tax returns, register for VAT, and communicate with HMRC.",
  },
  {
    q: "How is the UTR letter delivered to non-resident directors living overseas?",
    a: "HMRC posts the official UTR notification letter (Form CT41G) by Royal Mail to your UK Registered Office Address within 14 days of incorporation. ADVAQ scans and uploads this letter to your digital client portal immediately.",
  },
  {
    q: "What happens if I fail to register for Corporation Tax within 3 months?",
    a: "Failing to notify HMRC within the statutory 3-month deadline results in automated 'Failure to Notify' financial penalties starting from £300, plus interest on overdue tax assessments under Finance Act 2008 Schedule 41.",
  },
  {
    q: "Do I need to register for Corporation Tax if my company is non-trading or dormant?",
    a: "Yes. Even if your company is dormant, you must formally notify HMRC of your dormant status to prevent HMRC from issuing estimated tax assessments and penalty notices.",
  },
  {
    q: "Is a Company UTR the same as a Director's Personal UTR?",
    a: "No. A Company UTR belongs to the corporate LTD entity. A Personal UTR belongs to an individual human being for Self Assessment tax filings. They are completely separate 10-digit numbers.",
  },
  {
    q: "Can a non-UK resident set up an HMRC Government Gateway account?",
    a: "Yes. Overseas directors can create an HMRC Organization Government Gateway account online on GOV.UK using their 10-digit Company UTR and 8-digit Company Registration Number (CRN).",
  },
  {
    q: "How do I request a lost or missing Company UTR letter from HMRC?",
    a: "If your UTR letter is lost, ADVAQ can request a replacement UTR confirmation letter from HMRC online, which is delivered by post to your UK Registered Office within 7 to 10 business days.",
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
    "Exhaustive step-by-step 2026 guide for foreign directors on HMRC Corporation Tax registration, 10-digit Company UTR letters, Government Gateway setup, and filing deadlines.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/register-uk-corporation-tax-non-resident",
};

export const Route = createFileRoute("/blog/register-uk-corporation-tax-non-resident")({
  head: () => ({
    meta: [
      { title: "Register for UK Corporation Tax Non-Resident (2026 Masterclass) | ADVAQ" },
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
            An exhaustive compliance masterclass for non-resident founders on receiving your 10-digit Company UTR letter, registering with HMRC, and setting up Government Gateway in 2026.
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
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Essential HMRC compliance requirements for foreign company directors:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">3-Month Deadline</strong>
              <p className="text-navy-100 leading-relaxed">
                You must register for Corporation Tax with HMRC within 3 months of starting any UK business activity or issuing invoices.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">10-Digit Company UTR</strong>
              <p className="text-navy-100 leading-relaxed">
                HMRC generates a Unique Taxpayer Reference notice (Form CT41G) sent to your UK registered office within 14 days of formation.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Government Gateway Account</strong>
              <p className="text-navy-100 leading-relaxed">
                Non-residents activate an official HMRC Organization Government Gateway account using their 10-digit UTR.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Dormant Status Notice</strong>
              <p className="text-navy-100 leading-relaxed">
                If not yet trading, notify HMRC of dormant status to pause automatic failure-to-file penalty assessments.
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
            <li><a href="#utr-explained" className="hover:text-gold-600 underline">1. What is a Company UTR & How is it Issued?</a></li>
            <li><a href="#registration-deadline" className="hover:text-gold-600 underline">2. Statutory 3-Month HMRC Registration Deadline</a></li>
            <li><a href="#step-by-step-process" className="hover:text-gold-600 underline">3. Step-by-Step HMRC Online Tax Registration Guide</a></li>
            <li><a href="#registration-matrix" className="hover:text-gold-600 underline">4. HMRC Registration & Tax Setup Matrix</a></li>
            <li><a href="#gateway-account" className="hover:text-gold-600 underline">5. Setting Up an HMRC Organization Government Gateway Account</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Registration Errors to Avoid</a></li>
            <li><a href="#dormant-rules" className="hover:text-gold-600 underline">7. What to Do If Your Company Is Not Yet Trading (Dormant)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="utr-explained" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What is a Company UTR & How is it Issued?
          </h2>
          <p>
            When a UK Limited Company is registered with Companies House, Companies House automatically notifies HM Revenue & Customs (HMRC).
          </p>
          <p>
            HMRC creates an official corporate tax profile for your entity and generates a unique <strong>10-digit Company Unique Taxpayer Reference (UTR)</strong>.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Key className="text-gold-600" size={18} />
              Real-World Founder Example: Scanned UTR Letter Retrieval
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Bilal, an e-commerce store owner in Pakistan who formed a UK LTD. Within 10 days of incorporation, HMRC posted Form CT41G containing his 10-digit Company UTR to his London Registered Address. ADVAQ scanned the document in high resolution and uploaded it to Bilal's dashboard, allowing him to set up his HMRC Government Gateway account immediately.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="registration-deadline" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Statutory 3-Month HMRC Registration Deadline
          </h2>
          <p>
            Under UK tax law, a company must notify HMRC that it has started carrying on business activities within <strong>3 months</strong> of the start date.
          </p>
          <p>
            Business activity includes:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 my-4 pl-2">
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> Issuing sales invoices or receiving customer payments into your bank account.</li>
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> Purchasing software subscriptions, domain names, or inventory.</li>
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> Advertising or entering into commercial client contracts.</li>
          </ul>

          <div className="bg-red-50 border border-red-200 p-5 rounded-2xl text-xs text-red-900 my-6">
            <strong className="text-sm font-bold text-red-950 block mb-1">Failure-to-Notify Penalty Notice:</strong>
            <p className="leading-relaxed">
              Missing the 3-month notification window exposes the company to automated "Failure to Notify" fines starting from £300 under Schedule 41 to the Finance Act 2008.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="step-by-step-process" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step HMRC Online Tax Registration Guide
          </h2>
          <p>
            Follow this 4-step sequence to complete Corporation Tax registration:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Retrieve Your 10-Digit Company UTR Number</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Access your scanned CT41G letter from your ADVAQ London Registered Address portal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Create an HMRC Organization Account</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Visit GOV.UK and register a new Organization User ID for Corporation Tax online services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Enter Company Details & Trading Start Date</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Input your 8-digit CRN, 10-digit UTR, main SIC code, and exact trading start date.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Activate Corporation Tax Web Service</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Enter the activation PIN sent by HMRC to complete tax portal setup.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="registration-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. HMRC Registration & Tax Setup Matrix
          </h2>
          <p>
            Comprehensive legal overview of HMRC tax onboarding steps:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Tax Setup Step</th>
                  <th className="p-4 text-gold-500">Action Trigger</th>
                  <th className="p-4 text-emerald-400">HMRC SLA Deadline</th>
                  <th className="p-4">Delivery Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Company UTR Generation</td>
                  <td className="p-4 text-navy-900">Automatic upon Incorporation</td>
                  <td className="p-4 text-emerald-700 font-bold">14 Days Post Formation</td>
                  <td className="p-4 text-navy-900">Form CT41G Posted to Registered Office</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Corporation Tax Registration</td>
                  <td className="p-4 text-navy-900">Commencement of Business Trade</td>
                  <td className="p-4 text-emerald-700 font-bold">Within 3 Months of Trading</td>
                  <td className="p-4 text-navy-900">Online via GOV.UK Gateway</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">HMRC Gateway Activation PIN</td>
                  <td className="p-4 text-navy-900">Organization Gateway Creation</td>
                  <td className="p-4 text-navy-900">7 to 10 Business Days</td>
                  <td className="p-4 text-navy-900">Activation Code Posted to Office</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Dormant Company Notice</td>
                  <td className="p-4 text-navy-900">No Trading Activity Commenced</td>
                  <td className="p-4 text-navy-900">Prior to Accounting Year-End</td>
                  <td className="p-4 text-navy-900">Online or Formal Letter to HMRC</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
              Explore Company UTR & Tax Setup <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="gateway-account" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Setting Up an HMRC Organization Government Gateway Account
          </h2>
          <p>
            To submit tax returns, pay Corporation Tax, or register for VAT, non-resident directors must maintain an active <strong>HMRC Government Gateway Organization User ID</strong>.
          </p>
          <p>
            Always ensure you select an <strong>"Organization"</strong> account type when registering your UK Limited Company on GOV.UK, as personal accounts cannot manage corporate tax filings.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Registration Errors to Avoid
          </h2>
          <p>
            Avoid these six frequent tax setup mistakes:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Confusing Personal UTR with Company UTR
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Attempting to register a UK LTD company using an individual's personal Self Assessment UTR fails automated HMRC gateway verification.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Creating a Personal Gateway Account Instead of Organization
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Registering a Personal User ID on GOV.UK prevents adding corporate tax services to your dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="dormant-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. What to Do If Your Company Is Not Yet Trading (Dormant Status)
          </h2>
          <p>
            If you incorporated your UK company but have not yet initiated trading activities, your entity is legally considered <strong>dormant for Corporation Tax</strong>.
          </p>
          <p>
            Formally notifying HMRC of your dormant status pauses automated estimated tax assessments and failure-to-file penalty notices during early setup phases.
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
