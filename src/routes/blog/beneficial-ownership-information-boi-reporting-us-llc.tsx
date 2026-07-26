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
  FileText,
  Lock,
} from "lucide-react";

const faqs = [
  {
    q: "What is FinCEN BOI Reporting under the Corporate Transparency Act (CTA)?",
    a: "The Beneficial Ownership Information (BOI) report is a mandatory federal filing required by the US Financial Crimes Enforcement Network (FinCEN) under the Corporate Transparency Act. It requires reporting entities to disclose identifying details of all individuals who own 25%+ of the company or exercise substantial control.",
  },
  {
    q: "Do foreign-owned single-member US LLCs have to file a FinCEN BOI report?",
    a: "Yes, 100%. All US LLCs created by filing with a Secretary of State (including foreign-owned single-member LLCs) are classified as 'Reporting Companies' and must file a BOI report.",
  },
  {
    q: "What is the penalty for failing to file a FinCEN BOI report?",
    a: "Failing to file or willfully providing false BOI information carries severe federal penalties: civil penalties of up to $500 per day for each day the violation continues, plus criminal fines up to $10,000 and up to 2 years imprisonment.",
  },
  {
    q: "Is there a filing fee to submit a BOI report to FinCEN?",
    a: "No. FinCEN does NOT charge an official government filing fee to submit a BOI report online.",
  },
  {
    q: "What information must beneficial owners disclose in the BOI report?",
    a: "You must provide: (1) Full legal name, (2) Date of birth, (3) Current residential street address (foreign addresses accepted), and (4) Unique identifying number from a valid non-expired passport along with a PDF scan of the passport.",
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
  headline: "Corporate Transparency Act (CTA) & BOI Reporting Rules for Foreign-Owned US LLCs",
  description:
    "Complete 2026 FinCEN BOI reporting guide for foreign US LLC owners. Corporate Transparency Act requirements, beneficial owner identification, passport uploads, and $500/day penalty avoidance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/beneficial-ownership-information-boi-reporting-us-llc",
};

export const Route = createFileRoute("/blog/beneficial-ownership-information-boi-reporting-us-llc")({
  head: () => ({
    meta: [
      { title: "FinCEN BOI Reporting Guide Foreign US LLC (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Corporate Transparency Act BOI reporting guide for foreign US LLC owners. FinCEN beneficial ownership rules, passport scan uploads & $500/day penalty avoidance.",
      },
      {
        name: "keywords",
        content:
          "beneficial ownership information boi reporting us llc, fincen cta corporate transparency act foreign owner, fincen boi report deadline penalties 500 per day, passport scan upload fincen boi us llc",
      },
      {
        property: "og:title",
        content: "Corporate Transparency Act (CTA) & BOI Reporting Rules for Foreign-Owned US LLCs",
      },
      {
        property: "og:description",
        content:
          "Master FinCEN BOI reporting mandates under the Corporate Transparency Act to keep your foreign-owned US LLC in 100% federal compliance.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/beneficial-ownership-information-boi-reporting-us-llc" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/beneficial-ownership-information-boi-reporting-us-llc" }],
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
            Corporate Transparency Act (CTA) & BOI Reporting Rules for Foreign-Owned US LLCs
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive federal compliance guide for foreign non-resident founders on FinCEN Beneficial Ownership Information (BOI) reporting, passport document uploads, filing deadlines, and severe civil/criminal penalty enforcement.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Compliance Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FinCEN Corporate Transparency Act Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FinCEN BOI Reporting Highlights</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Mandatory US Federal Filing:</strong> Enforced by the Financial Crimes Enforcement Network (FinCEN) under the Corporate Transparency Act.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>25%+ Beneficial Owners:</strong> Applies to all individuals owning 25% or more equity or exercising substantial operational control over the LLC.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Passport Verification:</strong> Requires uploading an image of your valid international passport along with personal residential address details.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Severe Penalties ($500/day):</strong> Non-compliance carries civil fines up to $500 per day and criminal penalties up to $10,000 and 2 years imprisonment.</span>
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
            <li><a href="#what-is-cta" className="hover:text-gold-600 underline">1. What Is the Corporate Transparency Act (CTA)?</a></li>
            <li><a href="#who-must-file" className="hover:text-gold-600 underline">2. Who Is Classified as a Beneficial Owner?</a></li>
            <li><a href="#required-information" className="hover:text-gold-600 underline">3. What Information Must Be Disclosed in the BOI Report?</a></li>
            <li><a href="#fincen-deadlines" className="hover:text-gold-600 underline">4. FinCEN Filing Deadlines & Updated Reporting Rules</a></li>
            <li><a href="#penalties-enforcement" className="hover:text-gold-600 underline">5. Fines & Criminal Penalties for Non-Filing</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-cta" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is the Corporate Transparency Act (CTA)?
          </h2>
          <p>
            The <strong>Corporate Transparency Act (CTA)</strong> is a US anti-money laundering law enacted to prevent illicit financial activities, shell company abuse, and tax evasion.
          </p>
          <p>
            Administered by FinCEN (a bureau of the US Department of the Treasury), the CTA requires reporting companies to file a <strong>Beneficial Ownership Information (BOI) report</strong> disclosing the humans behind the corporate entity.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="who-must-file" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Who Is Classified as a Beneficial Owner?
          </h2>
          <p>
            A Beneficial Owner is any individual who, directly or indirectly:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Exercises substantial control over the US LLC (e.g. Senior Officers, CEO, Managing Members).</li>
            <li>Owns or controls 25% or more of the ownership interests (equity/shares) of the LLC.</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div id="required-information" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. What Information Must Be Disclosed in the BOI Report?
          </h2>
          <p>
            For each beneficial owner, the BOI report must disclose:
          </p>
          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <FileText className="text-gold-500" size={20} />
              BOI Passport & Data Checklist:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Full legal first and last name.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Date of birth (MM/DD/YYYY).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Current foreign residential street address.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span>Valid passport number and high-resolution PDF/JPEG scan of the bio page.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FINCEN BOI REPORTING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your FinCEN BOI Report Securely with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares and submits encrypted FinCEN BOI filings for non-resident LLC owners, ensuring 100% federal compliance and protection against $500/day penalties.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/boi-report"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order FinCEN BOI Filing Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="fincen-deadlines" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. FinCEN Filing Deadlines & Updated Reporting Rules
          </h2>
          <p>
            For companies formed in 2026, the BOI report must be filed within <strong>90 calendar days</strong> of receiving official notice of incorporation from the Secretary of State.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="penalties-enforcement" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Fines & Criminal Penalties for Non-Filing
          </h2>
          <p>
            FinCEN strictly enforces civil penalties of up to <strong>$500 per day</strong> for late or willful non-filing, alongside potential criminal fines up to $10,000 and 2 years imprisonment.
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
            FINCEN BOI REPORTING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your FinCEN BOI Report with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Beneficial owner verification, encrypted FinCEN portal submission, FinCEN ID management, and $500/day penalty protection.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/boi-report"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order FinCEN BOI Report Filing
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
