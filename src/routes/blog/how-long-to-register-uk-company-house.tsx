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
} from "lucide-react";

const faqs = [
  {
    q: "How fast can Companies House incorporate a UK company online?",
    a: "Standard online incorporation via an authorized formation agent like ADVAQ takes between 3 to 24 hours. Same-day approval services can process incorporations in as little as 3 to 6 hours if submitted before 3:00 PM UK time.",
  },
  {
    q: "Does incorporation take longer for non-UK residents?",
    a: "No. The Companies House digital incorporation timeframe is identical for UK residents and non-residents. The only potential delay for non-residents is completing digital identity (KYC) verification, which ADVAQ processes in under 1 hour.",
  },
  {
    q: "Are company incorporations processed on weekends or UK bank holidays?",
    a: "Companies House operates Monday to Friday from 8:30 AM to 6:00 PM UK time. Applications submitted on weekends or public bank holidays are queued and processed on the next business morning.",
  },
  {
    q: "How long after incorporation can I open a UK business bank account?",
    a: "As soon as your Certificate of Incorporation and Company Registration Number (CRN) are issued by Companies House, you can immediately apply for digital business banking with Wise Business or Payoneer. Verification typically takes 24 to 48 hours.",
  },
  {
    q: "What causes delays in UK company registration?",
    a: "Common causes for rejection or delay include submitting a company name that contains sensitive words without permission, mismatched identity details, or failing anti-money laundering (AML) address checks.",
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
    "Complete 2026 breakdown of UK company incorporation timelines, same-day registration options, Companies House processing speeds, and bank account setup duration.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://advaq.com/blog/how-long-to-register-uk-company-house",
};

export const Route = createFileRoute("/blog/how-long-to-register-uk-company-house")({
  head: () => ({
    meta: [
      { title: "How Long Does It Take to Register a UK Company? (2026 Timelines) | ADVAQ" },
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
            A complete breakdown of Companies House processing times, standard vs same-day incorporation, non-resident KYC verification speeds, and full operational timelines.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>6 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Verified Companies House SLA</span>
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
          <div className="grid sm:grid-cols-3 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10 text-center">
              <span className="text-gold-500 font-bold text-lg block mb-1">3 to 24 Hours</span>
              <strong className="text-white block text-sm">Standard Online Setup</strong>
              <p className="text-navy-300 text-[11px] mt-1">Average digital incorporation speed via ADVAQ</p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10 text-center">
              <span className="text-emerald-400 font-bold text-lg block mb-1">3 to 6 Hours</span>
              <strong className="text-white block text-sm">Same-Day Priority</strong>
              <p className="text-navy-300 text-[11px] mt-1">Express priority filing before 3:00 PM UK time</p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10 text-center">
              <span className="text-gold-500 font-bold text-lg block mb-1">24 to 48 Hours</span>
              <strong className="text-white block text-sm">Business Banking</strong>
              <p className="text-navy-300 text-[11px] mt-1">Wise / Payoneer digital account approval</p>
            </div>
          </div>
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
            <li><a href="#standard-timelines" className="hover:text-gold-600 underline">Standard Digital Incorporation Timelines (3-24 Hours)</a></li>
            <li><a href="#same-day-service" className="hover:text-gold-600 underline">Express Same-Day Priority Incorporation</a></li>
            <li><a href="#paper-vs-online" className="hover:text-gold-600 underline">Paper Registration vs Online Digital Filing</a></li>
            <li><a href="#step-by-step-time" className="hover:text-gold-600 underline">Step-by-Step Breakdown of Setup Stages</a></li>
            <li><a href="#common-delays" className="hover:text-gold-600 underline">5 Common Reasons for Companies House Delays</a></li>
            <li><a href="#full-operational-timeline" className="hover:text-gold-600 underline">Full Operational Timeline to Receive First Client Payment</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="standard-timelines" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Standard Digital Incorporation Timelines (3-24 Hours)
          </h2>
          <p>
            Under standard operating conditions, registering a UK Private Limited Company (LTD) digitally with Companies House takes <strong>between 3 and 24 hours</strong> during normal business days (Monday through Friday).
          </p>
          <p>
            The UK possesses one of the fastest corporate registration systems in the world. Because applications are submitted electronically via authorized formation software connected directly to Companies House APIs, manual data entry is eliminated.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="same-day-service" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Express Same-Day Priority Incorporation
          </h2>
          <p>
            If you need your company formed urgently to sign a contract, secure a domain, or open a merchant payment gateway, Companies House offers an <strong>Express Same-Day Incorporation Service</strong>.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl space-y-3 my-4">
            <h4 className="font-bold text-emerald-900 text-lg flex items-center gap-2">
              <Zap size={20} className="text-emerald-600" />
              Same-Day Guarantee Rules:
            </h4>
            <p className="text-sm text-emerald-800 leading-relaxed">
              If your application and identity documents are submitted before <strong>3:00 PM UK Time (GMT/BST)</strong> on a business day, Companies House guarantees that your Certificate of Incorporation will be issued by 6:00 PM the exact same day.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="paper-vs-online" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Paper Registration vs Online Digital Filing
          </h2>
          <p>
            It is critical to distinguish between paper application forms (Form IN01 sent by postal mail) and digital electronic submission:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-emerald-200 bg-white p-5 rounded-xl shadow-sm">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">RECOMMENDED</span>
              <h3 className="font-bold text-navy-900 text-lg mb-2">Digital Online Filing</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Duration: 3 to 24 Hours</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Digital Certificates sent via PDF instantly</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Available for Non-UK Residents</li>
              </ul>
            </div>

            <div className="border border-red-200 bg-white p-5 rounded-xl shadow-sm">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-1">AVOID</span>
              <h3 className="font-bold text-navy-900 text-lg mb-2">Postal Paper Filing</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-center gap-2"><AlertTriangle size={14} className="text-red-500" /> Duration: 8 to 15 Business Days</li>
                <li className="flex items-center gap-2"><AlertTriangle size={14} className="text-red-500" /> High risk of postal loss or rejection</li>
                <li className="flex items-center gap-2"><AlertTriangle size={14} className="text-red-500" /> Requires physical paper signing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
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
              Order UK Company Formation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="step-by-step-time" className="space-y-6 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step Breakdown of Setup Stages
          </h2>
          <p>
            The complete incorporation procedure consists of four distinct operational stages:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5">
                Stage 1
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">KYC Identity Verification (30–60 Minutes)</h4>
                <p className="text-xs text-gray-600 mt-1">
                  You submit your passport copy and proof of residential address. ADVAQ's compliance team verifies your documents under UK anti-money laundering (AML) regulations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5">
                Stage 2
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Companies House Queueing & Processing (3–24 Hours)</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Your application is transmitted directly to the Companies House automated examiner queue.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5">
                Stage 3
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Certificate & Document Generation (Instant upon Approval)</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Upon approval, Companies House issues your Company Registration Number (CRN), Certificate of Incorporation, Memorandum, and Articles of Association.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="bg-gold-500/10 text-gold-600 font-bold px-3 py-1 rounded text-xs shrink-0 mt-0.5">
                Stage 4
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">HMRC Corporation Tax Activation & Banking (24–48 Hours)</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Your company is registered with HMRC for Corporation Tax, and digital bank applications (Wise Business / Payoneer) are submitted.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="common-delays" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Common Reasons for Companies House Delays
          </h2>
          <p>
            While 95% of digital incorporations complete in under 24 hours, the following factors can trigger a manual review or rejection:
          </p>

          <ul className="space-y-3 my-4">
            <li className="flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm">
              <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Sensitive Company Names:</strong> Words like "Group", "International", "Trust", "Bank", or "Royal" require supporting justification letters, which adds 1–3 business days.
              </div>
            </li>
            <li className="flex items-start gap-3 bg-red-50/50 border border-red-200 p-4 rounded-xl text-sm">
              <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>Similar Existing Names:</strong> If your proposed name is deemed too similar to an existing trademark or registered entity, Companies House will reject the application.
              </div>
            </li>
          </ul>
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
