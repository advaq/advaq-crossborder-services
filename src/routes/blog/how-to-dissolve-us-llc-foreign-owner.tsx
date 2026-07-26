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
    q: "What happens if I just abandon my US LLC without dissolving it legally?",
    a: "Abandoning an LLC without legal dissolution causes state late penalty fees to accumulate year after year. It can permanently damage your ability to form US entities or open US bank accounts in the future, and IRS Form 5472 penalties ($25,000) may still accrue.",
  },
  {
    q: "How much does it cost to file Articles of Dissolution in Wyoming?",
    a: "The Wyoming Secretary of State charges a $60 official state filing fee to process Articles of Dissolution.",
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
  {
    q: "Can I dissolve a US LLC if it has outstanding debts?",
    a: "No. State LLC acts require all known business debts, vendor liabilities, and state taxes to be paid or settled before distributing remaining assets to members and filing for dissolution.",
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
    "Exhaustive 2026 legal masterclass guide on dissolving a foreign-owned US LLC. Articles of Dissolution/Cancellation fees, Mercury bank closure, final IRS Form 5472 tax return, and EIN account cancellation.",
  author: { "@type": "Organization", name: "ADVAQ US Corporate Legal Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-to-dissolve-us-llc-foreign-owner",
};

export const Route = createFileRoute("/blog/how-to-dissolve-us-llc-foreign-owner")({
  head: () => ({
    meta: [
      { title: "How to Dissolve US LLC Foreign Owner Legally (2026 Masterclass) | ADVAQ" },
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
            A step-by-step legal dissolution roadmap masterclass for foreign non-resident founders on state Articles of Dissolution, final IRS tax filings, Mercury/Relay bank account liquidations, and closing IRS EIN tax accounts.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US Corporate Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>16 Min Read · Updated July 2026</span>
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
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">1. Member Resolution</strong>
              <p className="text-navy-100 leading-relaxed">
                Formal written consent to dissolve approved by LLC owners.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">2. Settle Debts & Bank</strong>
              <p className="text-navy-100 leading-relaxed">
                Pay off vendor invoices and liquidate bank account balances via final Owner's Draw wire.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">3. State Dissolution</strong>
              <p className="text-navy-100 leading-relaxed">
                File Articles of Dissolution with Secretary of State (Wyoming $60 / Delaware $200).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">4. Final IRS & EIN Closure</strong>
              <p className="text-navy-100 leading-relaxed">
                Mark "Final Return" on Form 5472 and mail EIN account cancellation letter to IRS.
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
            <li><a href="#why-formal-dissolution" className="hover:text-gold-600 underline">1. Why You Must Dissolve Legally (Risks of Abandonment)</a></li>
            <li><a href="#state-dissolution-filings" className="hover:text-gold-600 underline">2. State Filings: Wyoming ($60) vs Delaware ($200)</a></li>
            <li><a href="#dissolution-matrix" className="hover:text-gold-600 underline">3. Comprehensive State LLC Dissolution Comparison Matrix</a></li>
            <li><a href="#bank-account-liquidation" className="hover:text-gold-600 underline">4. Closing Mercury & Relay Business Bank Accounts</a></li>
            <li><a href="#final-irs-filings" className="hover:text-gold-600 underline">5. Submitting Final IRS Form 5472 & 1120 Returns</a></li>
            <li><a href="#ein-cancellation" className="hover:text-gold-600 underline">6. How to Close Your IRS EIN Business Tax Account</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-formal-dissolution" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why You Must Dissolve Legally (Risks of Abandonment)
          </h2>
          <p>
            Simply walking away from a foreign-owned US LLC without formal legal dissolution is a dangerous mistake.
          </p>
          <p>
            When an LLC is abandoned, the Secretary of State assesses escalating annual report penalties and late fees. More critically, the IRS continues to expect annual Form 5472 tax filings. Failing to file Form 5472 triggers automatic <strong>$25,000 late filing penalties</strong> year after year, exposing foreign owners to federal tax debt and permanent US banking bans.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="state-dissolution-filings" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. State Filings: Wyoming ($60) vs Delaware ($200)
          </h2>
          <p>
            Closing an LLC requires filing statutory dissolution forms with the Secretary of State:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                Wyoming LLC Dissolution ($60 State Fee)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submit <strong>Articles of Dissolution</strong> to the Wyoming Secretary of State along with the official <strong>$60 filing fee</strong>. All annual state reports must be paid up to date prior to filing.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileText className="text-gold-600" size={18} />
                Delaware LLC Cancellation ($200 State Fee)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submit a <strong>Certificate of Cancellation</strong> under 6 Del. C. § 18-203 to the Delaware Division of Corporations with the mandatory <strong>$200 filing fee</strong>, ensuring all past annual franchise taxes ($300/yr) are settled.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="dissolution-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive State LLC Dissolution Comparison Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of state dissolution procedures:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Incorporation State</th>
                  <th className="p-4 text-gold-500">Dissolution Document</th>
                  <th className="p-4 text-emerald-400">State Filing Fee</th>
                  <th className="p-4">Good Standing Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Wyoming</td>
                  <td className="p-4 text-navy-900">Articles of Dissolution</td>
                  <td className="p-4 text-emerald-700 font-bold">$60 State Fee</td>
                  <td className="p-4 text-emerald-700 font-bold">Annual Reports Paid Up to Date</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Delaware</td>
                  <td className="p-4 text-navy-900">Certificate of Cancellation</td>
                  <td className="p-4 text-navy-900">$200 State Fee</td>
                  <td className="p-4 text-navy-900">Franchise Taxes Fully Paid ($300/yr)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Florida</td>
                  <td className="p-4 text-navy-900">Articles of Dissolution</td>
                  <td className="p-4 text-emerald-700 font-bold">$25 State Fee</td>
                  <td className="p-4 text-navy-900">Annual Reports Settled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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

        {/* SECTION 4 */}
        <div id="bank-account-liquidation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Closing Mercury & Relay Business Bank Accounts
          </h2>
          <p>
            Before filing Articles of Dissolution with the state:
          </p>
          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Liquidate Funds:</strong> Transfer all remaining corporate bank balances to your personal foreign bank account as a final <em>Owner's Draw</em> wire transfer.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Download Records:</strong> Download all historical PDF monthly bank statements and transaction CSVs for 6-year tax record retention.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Account Closure:</strong> Formally notify Mercury or Relay support to close your commercial account.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 5 */}
        <div id="final-irs-filings" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Submitting Final IRS Form 5472 & 1120 Returns
          </h2>
          <p>
            On your final Form 1120 pro-forma and Form 5472 submission for the year of dissolution, you MUST check the box marked <strong>"Final Return"</strong> (Form 1120 Page 1, Box E / Form 5472 Part I, Box 1b).
          </p>
          <p>
            This informs the Internal Revenue Service that your LLC has ceased operations, closing out your federal tax reporting obligations.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="ein-cancellation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. How to Close Your IRS EIN Business Tax Account
          </h2>
          <p>
            To officially deactivate your Employer Identification Number (EIN), send a formal written cancellation request letter to:
          </p>
          <div className="p-4 bg-navy-950 text-white rounded-xl font-mono text-xs my-4 border border-gold-500/20">
            Internal Revenue Service<br />
            MS 6273, Cincinnati, OH 45999 USA
          </div>
          <p>
            Include your full company name, EIN number, US business address, reason for closing, and attach a copy of your original IRS CP575 notice along with your approved state Articles of Dissolution certificate.
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
            US CORPORATE DISSOLUTION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Dissolve Your US LLC Safely with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            State Articles of Dissolution, final IRS Form 5472 tax return preparation, and IRS EIN account cancellation handled by ADVAQ.
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
