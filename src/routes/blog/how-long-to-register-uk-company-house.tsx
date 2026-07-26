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
  Zap,
  Calendar,
  FileCheck,
  Globe2,
  Scale,
  Percent,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "How fast can Companies House incorporate a UK company online?",
    a: "Standard online incorporation via an authorized formation agent like ADVAQ takes between 3 to 24 hours during UK business days. Same-day priority approval services process incorporations in as little as 3 to 6 hours if submitted before 3:00 PM UK time.",
  },
  {
    q: "Does incorporation take longer for non-UK residents?",
    a: "No. The Companies House digital incorporation processing speed is identical for UK residents and non-residents. The only potential variable for non-residents is digital identity (KYC) verification, which ADVAQ completes electronically in under 1 hour.",
  },
  {
    q: "Are company incorporations processed on weekends or UK bank holidays?",
    a: "Companies House examiners operate Monday to Friday from 8:30 AM to 6:00 PM UK time. Applications submitted on weekends or public bank holidays are queued and processed on the next business morning.",
  },
  {
    q: "How long after incorporation can I open a UK business bank account?",
    a: "As soon as your Certificate of Incorporation and Company Registration Number (CRN) are issued by Companies House, you can immediately apply for digital business banking with Wise Business, Revolut, or Payoneer. Account verification typically takes 24 to 48 hours.",
  },
  {
    q: "What causes delays in UK company registration?",
    a: "Common causes for rejection or delay include submitting a company name that contains sensitive words ('Group', 'Bank', 'Trust') without permission letters, mismatched identity details, or failing anti-money laundering (AML) address checks.",
  },
  {
    q: "How long does it take to receive official company formation documents?",
    a: "Digital PDF documents—including your Certificate of Incorporation, Memorandum & Articles of Association, and Share Certificates—are generated and emailed instantly upon Companies House approval.",
  },
  {
    q: "How long does HMRC take to issue a Corporation Tax UTR number?",
    a: "HMRC automatically registers your company for Corporation Tax upon incorporation. For UK registered addresses, the 10-digit Corporation Tax Unique Taxpayer Reference (UTR) letter is delivered by post within 7 to 14 days.",
  },
  {
    q: "Can I speed up incorporation if my initial application is rejected?",
    a: "If Companies House rejects an application due to a typo or name conflict, ADVAQ corrects the issue and resubmits the electronic file immediately. Resubmissions are typically processed within 2 to 4 hours.",
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
  headline: "How Long Does It Take to Register a UK Company with Companies House?",
  description:
    "Exhaustive 2026 breakdown of UK company incorporation timelines, same-day registration options, Companies House processing speeds, and bank account setup duration for non-residents.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-long-to-register-uk-company-house",
};

export const Route = createFileRoute("/blog/how-long-to-register-uk-company-house")({
  head: () => ({
    meta: [
      { title: "How Long Does It Take to Register a UK Company? (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Detailed 2026 guide on Companies House registration timelines. Discover standard 3-24 hour digital incorporation, same-day services, and setup duration for non-residents.",
      },
      {
        name: "keywords",
        content:
          "how long to register uk company house, uk company formation timeline, companies house processing time, same day uk company incorporation, fast uk ltd registration",
      },
      {
        property: "og:title",
        content: "How Long Does It Take to Register a UK Company with Companies House?",
      },
      {
        property: "og:description",
        content:
          "Learn exact processing times for UK LTD company incorporation, KYC verification, and business banking setup for overseas founders.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-long-to-register-uk-company-house" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-long-to-register-uk-company-house" }],
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
            How Long Does It Take to Register a UK Company with Companies House?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive legal and operational breakdown of Companies House processing speeds, standard vs same-day incorporation, non-resident KYC verification duration, and full setup timelines in 2026.
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
              <span>Verified Companies House SLA Timelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <Zap size={18} />
            <span>Registration Timelines at a Glance</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            For foreign non-resident entrepreneurs, digital UK company formation is remarkably fast. Below are the official Service Level Agreement (SLA) timeframes:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10 text-center">
              <span className="text-gold-500 font-bold text-xl block mb-1">3 to 24 Hours</span>
              <strong className="text-white block text-sm">Standard Online Setup</strong>
              <p className="text-navy-300 text-[11px] mt-1">Average digital incorporation speed via ADVAQ portal</p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10 text-center">
              <span className="text-emerald-400 font-bold text-xl block mb-1">3 to 6 Hours</span>
              <strong className="text-white block text-sm">Same-Day Priority</strong>
              <p className="text-navy-300 text-[11px] mt-1">Express priority filing before 3:00 PM UK time</p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10 text-center">
              <span className="text-gold-500 font-bold text-xl block mb-1">24 to 48 Hours</span>
              <strong className="text-white block text-sm">Digital Banking Setup</strong>
              <p className="text-navy-300 text-[11px] mt-1">Wise / Payoneer business account activation</p>
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
            <li><a href="#standard-timelines" className="hover:text-gold-600 underline">1. Standard Digital Incorporation Timelines (3-24 Hours)</a></li>
            <li><a href="#same-day-service" className="hover:text-gold-600 underline">2. Express Same-Day Priority Incorporation Services</a></li>
            <li><a href="#paper-vs-online" className="hover:text-gold-600 underline">3. Paper Postal Filing vs Digital Online Registration</a></li>
            <li><a href="#timeline-matrix" className="hover:text-gold-600 underline">4. Comprehensive Incorporation & Operational Timeline Matrix</a></li>
            <li><a href="#step-by-step-time" className="hover:text-gold-600 underline">5. Step-by-Step Breakdown of Setup Stages</a></li>
            <li><a href="#common-delays" className="hover:text-gold-600 underline">6. 6 Common Reasons for Companies House Delays</a></li>
            <li><a href="#full-operational-timeline" className="hover:text-gold-600 underline">7. Full Operational Roadmap: From Filing to First Payment</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="standard-timelines" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Standard Digital Incorporation Timelines (3 to 24 Hours)
          </h2>
          <p>
            Under standard operating conditions, registering a UK Private Limited Company (LTD) digitally with Companies House takes <strong>between 3 and 24 hours</strong> during normal business days (Monday through Friday, 8:30 AM to 6:00 PM UK time).
          </p>
          <p>
            The UK corporate registry is recognized globally for its speed and efficiency. Applications submitted electronically via authorized formation software connected directly to Companies House XML/REST gateway APIs bypass manual paper filing queues.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Express E-Commerce Launch
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Tariq, a Shopify merchant based in Dubai. Tariq completed his digital KYC submission via ADVAQ at 9:15 AM London time on Tuesday. ADVAQ transmitted Form IN01 to Companies House at 9:30 AM. By 1:45 PM the same afternoon, Companies House approved the registration, issuing Company Registration Number #15849201 along with digital Certificate of Incorporation PDFs.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="same-day-service" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Express Same-Day Priority Incorporation Services
          </h2>
          <p>
            For founders facing urgent deadlines—such as signing an enterprise B2B contract, acquiring a trademark domain, or onboarding with a payment processor—Companies House offers an <strong>Express Same-Day Priority Incorporation Service</strong>.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl space-y-3 my-6">
            <h4 className="font-bold text-emerald-900 text-base flex items-center gap-2">
              <Zap size={20} className="text-emerald-600" />
              Express Same-Day Priority Rules:
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              If your application and identity documents are submitted before <strong>3:00 PM UK Time (GMT/BST)</strong> on a business day, Companies House guarantees that your Certificate of Incorporation will be issued by 6:00 PM the exact same day.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="paper-vs-online" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Paper Postal Filing vs Digital Online Registration
          </h2>
          <p>
            It is critical to distinguish between paper postal applications (Form IN01 sent by mail to Cardiff, Wales) and electronic digital filings:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-emerald-200 bg-white p-6 rounded-2xl shadow-sm">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">RECOMMENDED</span>
              <h3 className="font-bold text-navy-900 text-lg mb-2">Digital Online Filing</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Processing Speed: 3 to 24 Hours</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Digital Certificates issued as PDF instantly</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> 100% Available for Non-UK Residents</li>
              </ul>
            </div>

            <div className="border border-red-200 bg-white p-6 rounded-2xl shadow-sm">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-1">AVOID</span>
              <h3 className="font-bold text-navy-900 text-lg mb-2">Postal Paper Filing</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><AlertTriangle size={14} className="text-red-500" /> Processing Speed: 8 to 15 Business Days</li>
                <li className="flex items-center gap-2"><AlertTriangle size={14} className="text-red-500" /> High risk of postal delay or rejection</li>
                <li className="flex items-center gap-2"><AlertTriangle size={14} className="text-red-500" /> Requires physical paper signatures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="timeline-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive Incorporation & Operational Timeline Matrix
          </h2>
          <p>
            Detailed step-by-step Service Level Agreement (SLA) timelines for non-resident company setup:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Setup Phase</th>
                  <th className="p-4 text-gold-500">Timeline SLA</th>
                  <th className="p-4 text-emerald-400">Key Deliverables</th>
                  <th className="p-4">Non-Resident Action Item</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">1. Digital KYC Verification</td>
                  <td className="p-4 text-emerald-700 font-bold">30 to 60 Minutes</td>
                  <td className="p-4 text-navy-900">AML Approval Clearance</td>
                  <td className="p-4 text-navy-900">Upload Passport & Bank Statement</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">2. Companies House Filing</td>
                  <td className="p-4 text-emerald-700 font-bold">3 to 24 Hours</td>
                  <td className="p-4 text-navy-900">Company Registration Number (CRN)</td>
                  <td className="p-4 text-navy-900">Form IN01 Automated Gateway Review</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">3. Official Document Issuance</td>
                  <td className="p-4 text-emerald-700 font-bold">Instant upon Approval</td>
                  <td className="p-4 text-navy-900">Certificate of Incorporation, Articles, Share Certs</td>
                  <td className="p-4 text-navy-900">Download Digital PDF Package</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">4. Business Banking Setup</td>
                  <td className="p-4 text-emerald-700 font-bold">24 to 48 Hours</td>
                  <td className="p-4 text-navy-900">UK Sort Code, Account #, IBAN</td>
                  <td className="p-4 text-navy-900">Submit Application via Wise/Payoneer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            NEED FAST 24-HOUR INCORPORATION?
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your UK LTD Registered in 24 Hours
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles your complete UK company incorporation, registered office address, Companies House filing, HMRC tax setup, and digital bank account application with 100% approval guarantee.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UK Formation Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="step-by-step-time" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Step-by-Step Breakdown of Setup Stages
          </h2>
          <p>
            The entire incorporation journey consists of four operational stages:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5">
                Stage 1
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">KYC Identity Verification (30–60 Minutes)</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Submit digital passport scans and proof of residential address. ADVAQ verifies your compliance under UK anti-money laundering (AML) regulations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5">
                Stage 2
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Companies House Examiner Processing (3–24 Hours)</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Your application is queued in Companies House automated digital examiner system.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5">
                Stage 3
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Document Generation & Incorporation Approval (Instant)</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Upon approval, Companies House issues your Company Registration Number (CRN) and official PDF incorporation certificates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5">
                Stage 4
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Digital Business Banking Activation (24–48 Hours)</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Your official company documents are submitted to Wise Business or Payoneer for multi-currency account opening.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="common-delays" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Common Reasons for Companies House Delays
          </h2>
          <p>
            While 95% of digital applications complete in under 24 hours, these six factors trigger manual review or rejection:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Sensitive Words in Proposed Company Name
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Using sensitive terms like "Group", "International", "Bank", "Trust", or "Royal" requires formal approval permission letters, adding 1 to 3 business days.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Conflicting or Similar Existing Company Names
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                If your proposed name is phonetically or visually identical to an existing registered entity, Companies House rejects the filing.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                3. Weekend & Bank Holiday Submissions
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Companies House examiners do not process incorporations on UK weekends or public holidays (e.g. Easter, Christmas, Summer Bank Holidays).
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                4. Incorrect Prohibited PO Box Addresses
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Attempting to use a PO Box as a Registered Office Address breaches ECCTA 2023 rules and results in automatic rejection.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="full-operational-timeline" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Full Operational Roadmap: From Application to First Payment
          </h2>
          <p>
            Complete step-by-step 72-hour operational timeline:
          </p>

          <div className="space-y-3 my-6">
            <div className="p-4 border border-border rounded-xl bg-white flex items-start gap-3">
              <Check className="text-gold-600 shrink-0 mt-1" size={18} />
              <div>
                <strong className="block text-navy-950 text-sm font-bold">Day 1 (Hours 0–24): Company Incorporation</strong>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  Submit KYC documents, receive Companies House approval, and download official PDF incorporation certificates.
                </p>
              </div>
            </div>

            <div className="p-4 border border-border rounded-xl bg-white flex items-start gap-3">
              <Check className="text-gold-600 shrink-0 mt-1" size={18} />
              <div>
                <strong className="block text-navy-950 text-sm font-bold">Day 2 (Hours 24–48): Banking Application</strong>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  Apply for Wise Business or Payoneer account. Receive UK Sort Code and GBP Account Number.
                </p>
              </div>
            </div>

            <div className="p-4 border border-border rounded-xl bg-white flex items-start gap-3">
              <Check className="text-gold-600 shrink-0 mt-1" size={18} />
              <div>
                <strong className="block text-navy-950 text-sm font-bold">Day 3 (Hours 48–72): Live Commercial Operations</strong>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  Connect Stripe UK or PayPal, issue official invoices to international clients, and receive direct payment wire transfers.
                </p>
              </div>
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
            REGISTER YOUR UK COMPANY TODAY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UK LTD in 24 Hours
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Order online today. ADVAQ incorporates your UK LTD company with Companies House in 3 to 24 hours guaranteed.
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
