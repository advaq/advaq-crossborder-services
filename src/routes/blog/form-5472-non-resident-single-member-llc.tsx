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
  AlertTriangle,
  DollarSign,
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
    q: "Must a foreign-owned single-member US LLC file IRS Form 5472 even if it had zero income?",
    a: "Yes, 100%. Under Treasury Regulations Section 1.6038A-1, a foreign-owned single-member US LLC is treated as a US corporation for reporting purposes. It must file Form 5472 along with a pro-forma Form 1120 annually, even if it generated zero revenue, $0 bank balance, or $0 taxable income.",
  },
  {
    q: "What is the deadline for filing IRS Form 5472?",
    a: "The deadline for filing Form 5472 and pro-forma Form 1120 is April 15 following the end of the calendar tax year (or October 15 if an extension is requested via Form 7004 on or before April 15).",
  },
  {
    q: "What is considered a 'reportable transaction' on Form 5472?",
    a: "Reportable transactions under Part IV include any transfer of money or property between the foreign owner and the LLC, including capital contributions (formation funds), owner's draws (profit withdrawals), loans, management fees, or software expense reimbursements.",
  },
  {
    q: "Can I file Form 5472 online through the IRS e-file portal?",
    a: "No. Foreign-owned single-member LLCs filing Form 5472 with a pro-forma Form 1120 cannot use standard IRS e-file software. They must be submitted via fax or mail to the IRS Special Processing Unit in Ogden, Utah.",
  },
  {
    q: "What happens if I fail to file Form 5472 on time?",
    a: "The IRS imposes an automatic, mandatory initial penalty of $25,000 under IRC Section 6038A for failing to file Form 5472 or filing an incomplete form.",
  },
  {
    q: "How do I request an extension using IRS Form 7004?",
    a: "You must file IRS Form 7004 on or before April 15. Form 7004 grants an automatic 6-month extension to file Form 5472 and pro-forma Form 1120 by October 15.",
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
  headline: "IRS Form 5472 & 1120 Filing Requirements for Foreign-Owned Single-Member LLCs",
  description:
    "Exhaustive 2026 IRS tax compliance masterclass guide for foreign non-resident single-member LLC owners. Learn Form 5472 reporting rules, pro-forma 1120 instructions, reportable transactions, and April 15 deadlines.",
  author: { "@type": "Organization", name: "ADVAQ US Tax Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/form-5472-non-resident-single-member-llc",
};

export const Route = createFileRoute("/blog/form-5472-non-resident-single-member-llc")({
  head: () => ({
    meta: [
      { title: "IRS Form 5472 & 1120 Foreign Single Member LLC (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Form 5472 & pro-forma Form 1120 guide for foreign-owned single-member US LLCs. Reportable transactions, April 15 deadline & $25,000 IRS penalty avoidance.",
      },
      {
        name: "keywords",
        content:
          "form 5472 non resident single member llc, irs pro forma 1120 foreign owner us llc, section 6038a reportable transactions owner draw, form 5472 april 15 deadline",
      },
      {
        property: "og:title",
        content: "IRS Form 5472 & 1120 Filing Requirements for Foreign-Owned Single-Member LLCs",
      },
      {
        property: "og:description",
        content:
          "Master IRS Section 6038A reporting obligations for foreign non-resident single-member US LLCs to avoid $25,000 late penalties.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/form-5472-non-resident-single-member-llc" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/form-5472-non-resident-single-member-llc" }],
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
            IRS Form 5472 & 1120 Filing Requirements for Foreign-Owned Single-Member LLCs
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive IRS tax compliance masterclass for non-resident alien founders on Section 6038A regulations, pro-forma Form 1120 attachments, reportable transactions, and April 15 submission deadlines.
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
              <span>Treasury Reg Section 1.6038A-1 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Form 5472 Compliance Highlights</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Mandatory Tax Reporting</strong>
              <p className="text-navy-100 leading-relaxed">
                All 25%+ foreign-owned single-member US LLCs must file Form 5472 annually with IRS.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Pro-Forma Form 1120</strong>
              <p className="text-navy-100 leading-relaxed">
                Form 5472 must be attached to a pro-forma Form 1120 with "Foreign-owned U.S. DE" written at the top.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Reportable Transactions</strong>
              <p className="text-navy-100 leading-relaxed">
                Must disclose capital injections, owner's draws, loans, and business expense reimbursements.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Strict $25,000 Fine</strong>
              <p className="text-navy-100 leading-relaxed">
                Failing to file on time triggers an automatic $25,000 IRS penalty under IRC § 6038A.
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
            <li><a href="#why-5472-required" className="hover:text-gold-600 underline">1. Why Foreign-Owned Single-Member LLCs Must File Form 5472</a></li>
            <li><a href="#reportable-transactions" className="hover:text-gold-600 underline">2. What Constitutes a Reportable Transaction Under Part IV?</a></li>
            <li><a href="#pro-forma-1120" className="hover:text-gold-600 underline">3. How to Prepare Pro-Forma Form 1120 Attachment</a></li>
            <li><a href="#compliance-matrix" className="hover:text-gold-600 underline">4. Comprehensive Form 5472 Compliance & Penalty Matrix</a></li>
            <li><a href="#deadlines-extension" className="hover:text-gold-600 underline">5. Filing Deadlines (April 15) & Form 7004 Extensions</a></li>
            <li><a href="#submission-method" className="hover:text-gold-600 underline">6. How to Fax Form 5472 Directly to the IRS Ogden Unit</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-5472-required" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Foreign-Owned Single-Member LLCs Must File Form 5472
          </h2>
          <p>
            Under US Treasury Regulations updated in 2017 (T.D. 9796), foreign-owned single-member LLCs (Disregarded Entities) are treated as domestic US corporations solely for the purpose of <strong>Section 6038A information reporting</strong>.
          </p>
          <p>
            This mandatory reporting rule applies to any US LLC where a foreign non-resident alien person or entity directly or indirectly owns 25% or more of the company's equity. Crucially, the IRS requires Form 5472 filing <strong>even if your LLC generated $0 in revenue or conducted zero commercial activity</strong> during the tax year.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="reportable-transactions" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. What Constitutes a Reportable Transaction Under Part IV?
          </h2>
          <p>
            Under Part IV of Form 5472, a reportable transaction encompasses any transfer of money, capital, or property between the foreign owner and the LLC:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <DollarSign className="text-gold-600" size={18} />
                Capital Contributions & Injections
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Initial capital deposits used to pay state incorporation fees, registered agent expenses, or fund business checking accounts.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Receipt className="text-gold-600" size={18} />
                Owner's Draws & Profit Distributions
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Any profit withdrawals transferred from the LLC's US bank account to the foreign owner's personal account abroad.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileText className="text-gold-600" size={18} />
                Business Expense Reimbursements
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Personal funds spent by the foreign owner to purchase company domain names, web hosting, or software tools on behalf of the LLC.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="pro-forma-1120" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. How to Prepare Pro-Forma Form 1120 Attachment
          </h2>
          <p>
            Form 5472 cannot be filed as a standalone document. The IRS strictly mandates that it must be attached to a <strong>pro-forma Form 1120</strong> (U.S. Corporation Income Tax Return).
          </p>
          <p>
            On the pro-forma Form 1120, you complete company identity fields (Entity Name, US Address, EIN, Date Incorporated) and write <strong>"Foreign-owned U.S. DE"</strong> across the top of Page 1. Financial lines for income, deductions, and tax liability are left blank because pass-through tax rules apply.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            IRS FORM 5472 TAX FILING SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Form 5472 & 1120 Pro-Forma with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares Form 5472, documents reportable transactions, generates pro-forma Form 1120, and faxes directly to the IRS to protect your LLC from $25,000 penalties.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/single-member-llc-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Form 5472 Tax Filing Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="compliance-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive Form 5472 Compliance & Penalty Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of tax filing scenarios:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Tax Scenario</th>
                  <th className="p-4 text-gold-500">Required Forms</th>
                  <th className="p-4 text-emerald-400">Filing Deadline</th>
                  <th className="p-4">Automatic Penalty Exposure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Zero Revenue Single-Member LLC</td>
                  <td className="p-4 text-navy-900">Form 5472 + Pro-Forma 1120</td>
                  <td className="p-4 text-emerald-700 font-bold">April 15 (or Oct 15 ext)</td>
                  <td className="p-4 text-rose-700 font-bold">$25,000 Penalty for Failure to File</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Active Revenue Single-Member LLC</td>
                  <td className="p-4 text-navy-900">Form 5472 + Pro-Forma 1120</td>
                  <td className="p-4 text-emerald-700 font-bold">April 15 (or Oct 15 ext)</td>
                  <td className="p-4 text-rose-700 font-bold">$25,000 Penalty for Failure to File</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Multi-Member Foreign-Owned LLC</td>
                  <td className="p-4 text-navy-900">Form 1065 + Schedule K-1s</td>
                  <td className="p-4 text-gold-700 font-bold">March 15 (or Sept 15 ext)</td>
                  <td className="p-4 text-navy-900">$220/month per partner penalty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="deadlines-extension" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Filing Deadlines (April 15) & Form 7004 Extensions
          </h2>
          <p>
            Form 5472 is due on <strong>April 15</strong> following the close of the calendar tax year.
          </p>
          <p>
            If you require additional preparation time, filing IRS <strong>Form 7004</strong> on or before April 15 grants an automatic 6-month extension to October 15.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="submission-method" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. How to Fax Form 5472 Directly to the IRS Ogden Unit
          </h2>
          <p>
            Form 5472 and pro-forma Form 1120 cannot be e-filed online. They must be faxed or mailed to the specialized IRS unit in Ogden, Utah.
          </p>
          <p>
            <strong>Official IRS Ogden Fax Number:</strong> <code>+1 (855) 887-7737</code>. Always preserve your fax transmission confirmation report as legal audit proof.
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
            IRS FORM 5472 COMPLIANCE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your Form 5472 with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Pro-forma Form 1120 preparation, reportable transaction auditing, IRS Ogden faxing, and $25,000 penalty protection handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/single-member-llc-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Form 5472 Tax Service
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
