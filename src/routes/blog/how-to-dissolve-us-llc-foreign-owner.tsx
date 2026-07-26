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
  XCircle,
  FileText,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "What happens if I just abandon my US LLC without dissolving it legally?",
    a: "Abandoning an LLC without legal dissolution causes state late penalty fees to accumulate year after year. It can permanently damage your ability to form US entities or open US bank accounts in the future, and IRS Form 5472 penalties ($25,000) may still accrue.",
  },
  {
    q: "How much does it cost to file Articles of Dissolution in Wyoming?",
    a: "The Wyoming Secretary of State charges a $60 filing fee to process Articles of Dissolution.",
  },
  {
    q: "How much does Delaware charge to cancel an LLC?",
    a: "The Delaware Division of Corporations charges a $200 state filing fee to process a Certificate of Cancellation, plus any outstanding annual franchise taxes ($300/yr).",
  },
  {
    q: "How do I close my US LLC EIN with the IRS?",
    a: "To close an IRS business tax account, you must send a formal letter to the IRS in Cincinnati, Ohio stating your full LLC name, EIN, US address, and reason for closing, attached with a copy of your state CP575 notice.",
  },
  {
    q: "Should I close my US business bank account before filing for state dissolution?",
    a: "Yes. You should pay off all business debts, distribute remaining capital to members, and officially close your Mercury or Relay bank account BEFORE filing Articles of Dissolution with the Secretary of State.",
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
  headline: "How to Dissolve & Close a US LLC Legally (Articles of Cancellation & IRS Closure)",
  description:
    "Complete 2026 legal guide on dissolving a foreign-owned US LLC. Articles of Dissolution/Cancellation fees, Mercury bank closure, final IRS Form 5472 tax return, and EIN account cancellation.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/how-to-dissolve-us-llc-foreign-owner",
};

export const Route = createFileRoute("/blog/how-to-dissolve-us-llc-foreign-owner")({
  head: () => ({
    meta: [
      { title: "How to Dissolve US LLC Foreign Owner Legally (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to legal dissolution of foreign-owned US LLC. Articles of Dissolution (Wyoming $60 / Delaware $200), closing Mercury bank account, IRS Form 5472 final return & EIN cancellation.",
      },
      {
        name: "keywords",
        content:
          "how to dissolve us llc foreign owner, wyoming articles of dissolution fee 60, delaware certificate of cancellation 200, close irs ein account final form 5472 return",
      },
      {
        property: "og:title",
        content: "How to Dissolve & Close a US LLC Legally (Articles of Cancellation & IRS Closure)",
      },
      {
        property: "og:description",
        content:
          "Master the 5 step legal roadmap for dissolving a US LLC, closing business bank accounts, and canceling IRS tax accounts safely for foreign founders.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-dissolve-us-llc-foreign-owner" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-dissolve-us-llc-foreign-owner" }],
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
            How to Dissolve & Close a US LLC Legally (Articles of Cancellation & IRS Closure)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A step-by-step legal dissolution roadmap for foreign non-resident founders on state Articles of Dissolution, final IRS tax filings, Mercury/Relay bank account liquidations, and closing IRS EIN tax accounts.
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
              <span>State & IRS Corporate Dissolution Protocols</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>5-Step Legal Dissolution Roadmap</span>
          </div>
          <ol className="space-y-2 text-sm sm:text-[15px] text-navy-100 leading-relaxed list-none">
            <li><strong>Member Resolution:</strong> Formal written consent to dissolve approved by LLC owners.</li>
            <li><strong>Settle Business Debts:</strong> Pay off all vendor invoices and tax liabilities.</li>
            <li><strong>Close US Bank Accounts:</strong> Liquidate balances via final Owner's Draw wire.</li>
            <li><strong>File State Articles of Dissolution:</strong> Submit Articles of Cancellation with Secretary of State.</li>
            <li><strong>Final IRS Filing & EIN Closure:</strong> Mark "Final Return" on Form 5472 and mail EIN cancellation letter to IRS.</li>
          </ol>
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
            <li><a href="#why-formal-dissolution" className="hover:text-gold-600 underline">1. Why You Must Dissolve Legally (Risks of Abandonment)</a></li>
            <li><a href="#state-dissolution-filings" className="hover:text-gold-600 underline">2. State Filings: Wyoming ($60) vs Delaware ($200)</a></li>
            <li><a href="#bank-account-liquidation" className="hover:text-gold-600 underline">3. Closing Mercury & Relay Business Bank Accounts</a></li>
            <li><a href="#final-irs-filings" className="hover:text-gold-600 underline">4. Submitting Final IRS Form 5472 & 1120 Returns</a></li>
            <li><a href="#ein-cancellation" className="hover:text-gold-600 underline">5. How to Close Your IRS EIN Business Tax Account</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-formal-dissolution" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why You Must Dissolve Legally (Risks of Abandonment)
          </h2>
          <p>
            Simply walking away from an active US LLC without formal dissolution is a dangerous mistake.
          </p>
          <p>
            The state will continue to assess annual report fees and penalties. Furthermore, the IRS may continue issuing automatic <strong>$25,000 late penalties</strong> for unfiled Form 5472 tax returns until the entity is legally closed.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="state-dissolution-filings" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. State Filings: Wyoming ($60) vs Delaware ($200)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-gold-500 font-semibold text-base mb-2">
                <Building2 size={18} />
                <span>Wyoming LLC Dissolution</span>
              </div>
              <p className="text-sm text-gray-600">
                File <strong>Articles of Dissolution</strong> with the Wyoming Secretary of State. State fee is <strong>$60</strong>. All annual reports must be current.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-navy-700 font-semibold text-base mb-2">
                <FileText size={18} />
                <span>Delaware LLC Cancellation</span>
              </div>
              <p className="text-sm text-gray-600">
                File a <strong>Certificate of Cancellation</strong> with Delaware Division of Corporations. State fee is <strong>$200</strong> + all paid franchise taxes ($300/yr).
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            US LLC DISSOLUTION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Dissolve Your US LLC Legally with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles state Articles of Dissolution, final IRS Form 5472 returns, and IRS EIN account cancellation to protect your legal standing.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/wyoming-llc-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order LLC Dissolution Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="bank-account-liquidation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Closing Mercury & Relay Business Bank Accounts
          </h2>
          <p>
            Transfer remaining funds to your personal foreign bank account as a final <em>Owner's Draw</em>, download all historical PDF statements for 6-year tax records, and request official account closure from Mercury or Relay support.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="final-irs-filings" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Submitting Final IRS Form 5472 & 1120 Returns
          </h2>
          <p>
            On your final Form 1120 and Form 5472 filing for the year of dissolution, check the box marked <strong>"Final Return"</strong>. This notifies the IRS that no future tax returns will be expected.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="ein-cancellation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How to Close Your IRS EIN Business Tax Account
          </h2>
          <p>
            Mail a formal written notice to:
          </p>
          <p className="text-sm bg-off-white p-4 rounded-xl border border-border font-mono">
            Internal Revenue Service<br />
            MS 6273, Cincinnati, OH 45999 USA
          </p>
          <p className="text-sm text-gray-700">
            Include your full company name, EIN, US business address, reason for closure, and a copy of your IRS CP575 confirmation letter.
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
            US CORPORATE DISSOLUTION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Dissolve Your US LLC Safely with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            State Articles of Dissolution, final IRS Form 5472 tax return preparation, and IRS EIN account cancellation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/wyoming-llc-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order LLC Dissolution Service
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
