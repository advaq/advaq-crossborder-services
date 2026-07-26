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
  XCircle,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What is Form DS01 for striking off a UK Limited Company?",
    a: "Form DS01 is the official application submitted by company directors to Companies House under Section 1003 of the Companies Act 2006 to voluntarily strike off and dissolve an inactive or solvent private UK Limited Company.",
  },
  {
    q: "How much does it cost to dissolve a UK company using Form DS01?",
    a: "Companies House charges an official filing fee of £33 for online Form DS01 submissions (or £44 for paper submissions).",
  },
  {
    q: "Can a non-resident director apply to strike off a UK company online?",
    a: "Yes. Foreign directors can submit Form DS01 online via the Companies House WebFiling portal using electronic signatures.",
  },
  {
    q: "How long does the UK company dissolution process take?",
    a: "Once Form DS01 is filed and published in the Gazette, Companies House allows a mandatory 2-month public notice period for creditors to object. If no objections are raised, the company is struck off and legally dissolved within 2 to 3 months.",
  },
  {
    q: "What happens to company bank accounts and cash when a company is struck off?",
    a: "CRITICAL: Any money, assets, or bank account balances remaining in the company's account on the exact date of dissolution automatically revert to the UK Crown as 'Bona Vacantia' (ownerless property). Bank accounts MUST be emptied and closed before filing Form DS01.",
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
  headline: "How to Strike Off & Dissolve a UK Limited Company Legally (DS01 Process)",
  description:
    "Complete 2026 Companies House DS01 striking off guide for foreign directors. Learn legal eligibility rules, HMRC final tax returns, Gazette notices, and Bona Vacantia asset warnings.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/how-to-dissolve-uk-limited-company-ds01",
};

export const Route = createFileRoute("/blog/how-to-dissolve-uk-limited-company-ds01")({
  head: () => ({
    meta: [
      { title: "How to Strike Off UK LTD Company (DS01 Guide 2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Form DS01 guide to strike off & dissolve a UK Limited Company remotely. Legal eligibility, HMRC final accounts, Gazette notice & Bona Vacantia asset warning.",
      },
      {
        name: "keywords",
        content:
          "how to dissolve uk limited company ds01, strike off uk company non resident, form ds01 companies house strike off fee, bona vacantia asset forfeiture uk company dissolution",
      },
      {
        property: "og:title",
        content: "How to Strike Off & Dissolve a UK Limited Company Legally (DS01 Process)",
      },
      {
        property: "og:description",
        content:
          "Discover how non-resident directors legally close an inactive UK company using Form DS01, clear HMRC liabilities, and avoid asset forfeiture.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-dissolve-uk-limited-company-ds01" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-dissolve-uk-limited-company-ds01" }],
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
            How to Strike Off & Dissolve a UK Limited Company Legally (DS01 Process)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal guide for foreign directors on voluntary company dissolution, Form DS01 filing, HMRC final Corporation Tax clearances, Gazette public notices, and asset forfeiture rules.
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
              <span>Companies Act 2006 Section 1003 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>DS01 Dissolution Essentials</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Eligibility Criteria:</strong> Company must NOT have traded, sold stock, or changed name for at least 3 months prior to application.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form DS01 Filing:</strong> Official electronic strike-off application submitted to Companies House with £33 fee.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>WARNING (Bona Vacantia):</strong> Empty all company bank accounts before filing. Any remaining money automatically becomes Crown property upon dissolution.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>HMRC Final Clearance:</strong> File final CT600 Corporation Tax return and close PAYE/VAT schemes to prevent HMRC strike-off objections.</span>
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
            <li><a href="#eligibility" className="hover:text-gold-600 underline">1. Legal Eligibility Rules for Striking Off (Section 1004)</a></li>
            <li><a href="#pre-dissolution-checklist" className="hover:text-gold-600 underline">2. Pre-Dissolution Checklist & Bank Account Closure</a></li>
            <li><a href="#hmrc-tax-clearance" className="hover:text-gold-600 underline">3. HMRC Final Tax Returns & Closing PAYE/VAT</a></li>
            <li><a href="#ds01-submission" className="hover:text-gold-600 underline">4. Submitting Form DS01 & Gazetting Process</a></li>
            <li><a href="#bona-vacantia" className="hover:text-gold-600 underline">5. The Bona Vacantia Risk: Loss of Uncollected Funds</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="eligibility" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Legal Eligibility Rules for Striking Off (Section 1004)
          </h2>
          <p>
            Under Section 1004 of the <em>Companies Act 2006</em>, a private UK Limited Company can only apply for voluntary strike-off using Form DS01 if it meets strict legal conditions:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-emerald-600 font-semibold text-base mb-2">
                <CheckCircle2 size={20} />
                <span>You CAN File Form DS01 If:</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                <li>The company has not traded or carried on business for 3 months.</li>
                <li>The company has not changed its legal name in the last 3 months.</li>
                <li>The company is solvent and has no outstanding debts to suppliers or HMRC.</li>
              </ul>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-red-600 font-semibold text-base mb-2">
                <XCircle size={20} />
                <span>You CANNOT File Form DS01 If:</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                <li>The company is insolvent (must use liquidation process).</li>
                <li>The company is subject to active legal proceedings.</li>
                <li>The company traded within the past 90 days.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="pre-dissolution-checklist" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Pre-Dissolution Checklist & Bank Account Closure
          </h2>
          <p>
            Before signing Form DS01, directors must complete crucial administrative tasks:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <FileCheck className="text-gold-500" size={20} />
              Pre-Strike Off Action Checklist:
            </h4>
            <ol className="space-y-2 text-sm text-gray-700 list-none">
              <li><strong>Settle All Liabilities:</strong> Pay all outstanding supplier bills, utility invoices, and accountancy fees.</li>
              <li><strong>Distribute Remaining Assets:</strong> Pay remaining cash reserves to shareholders as final capital distributions or dividends.</li>
              <li><strong>Close Corporate Bank Accounts:</strong> Formally close all Wise, Payoneer, or Revolut business accounts once the balance reaches £0.00.</li>
              <li><strong>Notify Interested Parties:</strong> Send a copy of Form DS01 within 7 days to shareholders, employees, co-directors, and creditors.</li>
            </ol>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="hmrc-tax-clearance" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. HMRC Final Tax Returns & Closing PAYE/VAT
          </h2>
          <p>
            HMRC is the most frequent objector to company strike-offs. If a company owes Corporation Tax, VAT, or PAYE penalties, HMRC will automatically block the dissolution.
          </p>
          <p>
            <strong>Steps for HMRC Tax Clearance:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>File a final CT600 Corporation Tax return covering up to the date trading ceased.</li>
            <li>Deregister from VAT via HMRC Gateway and submit a final VAT return.</li>
            <li>Close the PAYE scheme and mark final RTI payroll submissions as <em>"Final Submission upon Ceasing Scheme."</em></li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK COMPANY DISSOLUTION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Strike Off Your UK LTD Company Safely with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages final CT600 tax returns, HMRC tax clearance, Gazette notice publication, and Companies House DS01 online submissions for non-resident directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UK Company Dissolution Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="ds01-submission" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Submitting Form DS01 & Gazetting Process
          </h2>
          <p>
            Once Form DS01 is submitted online with the £33 fee, Companies House publishes a notice in the <strong>London, Edinburgh, or Belfast Gazette</strong>.
          </p>
          <p>
            The Gazette notice serves as a 2-month public warning to creditors. If no objection is received during this 60-day window, Companies House issues a second Gazette notice confirming the company has been dissolved and struck off the register.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="bona-vacantia" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. The Bona Vacantia Risk: Loss of Uncollected Funds
          </h2>
          <p>
            Under UK law, when a company is dissolved, all remaining property, rights, and bank account balances pass to the Crown as <strong>Bona Vacantia</strong> (ownerless goods).
          </p>
          <p>
            If you leave £5,000 in your Wise bank account on the day of dissolution, the bank account will be frozen, and the funds will be transferred to the Treasury Solicitor. Reclaiming Bona Vacantia property requires a costly court order or administrative restoration.
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
            UK COMPANY DISSOLUTION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Dissolve Your UK LTD Remotely with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            HMRC final tax clearance, Form DS01 filing, Gazette publishing, and legal strike-off support for overseas directors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Company Strike Off
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
