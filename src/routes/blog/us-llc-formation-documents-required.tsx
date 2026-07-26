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
  FolderCheck,
  CreditCard,
  Building,
} from "lucide-react";

const faqs = [
  {
    q: "What key documents are required to form a US LLC from overseas?",
    a: "The core documents are: (1) Articles of Organization (filed with Secretary of State), (2) Operating Agreement (internal legal contract), (3) IRS CP575 EIN Confirmation Letter, and (4) Registered Agent Acceptance Consent.",
  },
  {
    q: "Do I need to notarize or apostille my identity documents to form a US LLC?",
    a: "No. Secretary of State incorporation filings for Wyoming and Delaware do NOT require notarized or apostilled passports. Only standard passport copies are required for identity verification.",
  },
  {
    q: "What is the difference between Articles of Organization and Certificate of Formation?",
    a: "They are the exact same document. 'Articles of Organization' is the term used in Wyoming and Florida, whereas 'Certificate of Formation' is the term used in Delaware.",
  },
  {
    q: "What is an IRS CP575 document?",
    a: "CP575 is the official paper letter issued by the Internal Revenue Service (IRS) assigning your 9-digit Employer Identification Number (EIN) to your US LLC.",
  },
  {
    q: "Is an Operating Agreement filed with the Secretary of State?",
    a: "No. An Operating Agreement is an internal legal governance document. It is NOT filed with the state or IRS, but is required by US banks (Mercury/Relay) and payment processors (Stripe).",
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
  headline: "What Documents Do You Need to Form a US LLC from Overseas? (Articles of Organization)",
  description:
    "Complete checklist of legal documents required for foreign non-residents forming a US LLC. Articles of Organization, Operating Agreement, IRS CP575 EIN letter, and Registered Agent consent.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/us-llc-formation-documents-required",
};

export const Route = createFileRoute("/blog/us-llc-formation-documents-required")({
  head: () => ({
    meta: [
      { title: "What Documents Do You Need to Form a US LLC? (2026 Checklist) | ADVAQ" },
      {
        name: "description",
        content:
          "Checklist of documents needed for non-US residents forming a US LLC. Articles of Organization, Operating Agreement, IRS CP575 EIN letter & Registered Agent.",
      },
      {
        name: "keywords",
        content:
          "us llc formation documents required, articles of organization wyoming delaware foreign owner, irs cp575 ein letter foreign founder, operating agreement us llc non resident",
      },
      {
        property: "og:title",
        content: "What Documents Do You Need to Form a US LLC from Overseas? (Articles of Organization)",
      },
      {
        property: "og:description",
        content:
          "Explore the exact statutory legal documents required for foreign founders to establish, verify, and bank a US Limited Liability Company.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/us-llc-formation-documents-required" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/us-llc-formation-documents-required" }],
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
            What Documents Do You Need to Form a US LLC from Overseas? (Articles of Organization)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive documentation checklist for foreign founders detailing state incorporation filings, Operating Agreements, IRS CP575 EIN letters, Registered Agent consents, and bank verification records.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>US Statutory Filing Verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Core US LLC Document Stack</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Articles of Organization:</strong> The state legal charter establishing your LLC entity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>IRS Form CP575 (EIN Letter):</strong> Federal tax assignment document issued by the IRS.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Operating Agreement:</strong> Internal governance contract specifying member ownership shares.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Registered Agent Appointment:</strong> Official acceptance consent from your state physical agent.</span>
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
            <li><a href="#articles-of-organization" className="hover:text-gold-600 underline">1. Articles of Organization / Certificate of Formation</a></li>
            <li><a href="#operating-agreement" className="hover:text-gold-600 underline">2. The Operating Agreement (Internal Bylaws)</a></li>
            <li><a href="#cp575-ein-letter" className="hover:text-gold-600 underline">3. IRS CP575 EIN Confirmation Letter</a></li>
            <li><a href="#registered-agent-consent" className="hover:text-gold-600 underline">4. Registered Agent Acceptance Consent</a></li>
            <li><a href="#banking-kyc-docs" className="hover:text-gold-600 underline">5. KYC Documents Required for US Bank Account Opening</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="articles-of-organization" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Articles of Organization / Certificate of Formation
          </h2>
          <p>
            The <strong>Articles of Organization</strong> is the primary legal document filed with the Secretary of State to officially create your US LLC.
          </p>
          <p>
            It contains:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Official legal name of the LLC (must end in "LLC" or "L.L.C.").</li>
            <li>Registered Agent name and physical state address.</li>
            <li>Management structure (Member-Managed vs Manager-Managed).</li>
            <li>Organizer signature and filing timestamp.</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="operating-agreement" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The Operating Agreement (Internal Bylaws)
          </h2>
          <p>
            An <strong>Operating Agreement</strong> is a legal contract that outlines the internal rules, ownership percentages, rights, and duties of the LLC members.
          </p>
          <p>
            Although not filed with the Secretary of State, US digital banks (Mercury, Relay) and payment gateways (Stripe, PayPal) mandatory require a signed Operating Agreement before opening accounts.
          </p>
        </div>

        {/* SECTION 3 */}
        <div id="cp575-ein-letter" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. IRS CP575 EIN Confirmation Letter
          </h2>
          <p>
            Form <strong>CP575</strong> is the official physical confirmation letter issued by the Internal Revenue Service assigning your 9-digit Employer Identification Number (EIN).
          </p>
          <p>
            This document is essential for opening US bank accounts, filing federal tax returns, hiring staff, and processing international credit card transactions.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            COMPLETE US FORMATION PACKAGE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your Complete US Document Stack with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares state Articles of Organization, custom Operating Agreements, IRS CP575 EIN letters, and Registered Agent filings for non-resident founders.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/wyoming-llc-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order US Document Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="registered-agent-consent" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Registered Agent Acceptance Consent
          </h2>
          <p>
            Every US state requires an LLC to maintain a <strong>Registered Agent</strong> with a physical street address in that state.
          </p>
          <p>
            The Registered Agent receives official government correspondence and legal notices (service of process) on behalf of the LLC.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="banking-kyc-docs" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. KYC Documents Required for US Bank Account Opening
          </h2>
          <p>
            When applying for a remote US business bank account (Mercury or Relay), foreign owners must provide:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <FolderCheck className="text-gold-500" size={20} />
              Bank Account Passport & KYC Checklist:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Valid International Passport (colour scan of bio page).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>State Approved Articles of Organization (PDF).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>IRS CP575 or 147C EIN Confirmation Letter.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Signed LLC Operating Agreement.</span>
              </li>
            </ul>
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
            US FORMATION DOCUMENT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your US LLC Remotely with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Articles of Organization, IRS CP575 EIN letter, custom Operating Agreement, Registered Agent, and US bank setup.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/wyoming-llc-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order US Document Package
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
