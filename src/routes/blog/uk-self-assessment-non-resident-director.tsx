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
  Calendar,
  UserCheck,
  Scale,
  Percent,
  Coins,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "Does an overseas director of a UK LTD company automatically need to file a UK Self Assessment tax return?",
    a: "No. Since HMRC updated its statutory guidance, simply being an office holder or director of a UK company does NOT automatically require you to file a UK Self Assessment tax return if you live overseas and have zero taxable UK-sourced income.",
  },
  {
    q: "When IS a non-resident director legally required to file a UK Self Assessment?",
    a: "You must file if you receive UK-sourced salary (via UK PAYE payroll), have taxable UK rental property income, receive UK taxable capital gains, or receive a formal Notice to File (Form SA316) from HMRC.",
  },
  {
    q: "What is the deadline for filing an online UK Self Assessment tax return?",
    a: "The online Self Assessment filing deadline is 31 January following the end of the tax year (e.g. for the 2025/26 tax year ending 5 April 2026, the online filing deadline is 31 January 2027).",
  },
  {
    q: "What is a Personal UTR Number for Self Assessment?",
    a: "A Personal Unique Taxpayer Reference (UTR) is a 10-digit code issued by HMRC to an individual taxpayer when they register for Self Assessment. (Note: A Personal UTR is separate from your 10-digit Company UTR).",
  },
  {
    q: "What is the automatic penalty for late filing of a UK Self Assessment?",
    a: "HMRC imposes an immediate £100 late filing penalty if your Self Assessment return is 1 day late, even if you owe zero tax.",
  },
  {
    q: "Why can't I submit Form SA109 through HMRC's free online portal?",
    a: "HMRC's basic Government Gateway portal does not support Form SA109 (Residence & Non-Residency page). Non-resident directors must submit their tax return using commercial third-party tax software (such as ADVAQ's filing platform) or via paper forms.",
  },
  {
    q: "How does the Statutory Residence Test (SRT) affect foreign directors?",
    a: "The Statutory Residence Test (SRT) objectively determines your UK tax residency based on days spent in the UK and ties (work, accommodation, family). If you spend fewer than 16 days in the UK during the tax year, you are classified as an Automatic Overseas Resident.",
  },
  {
    q: "How can a non-resident director cancel an unwanted HMRC Notice to File?",
    a: "If HMRC sends you an automated Notice to File but you have zero UK taxable income and live abroad, ADVAQ can submit a formal withdrawal request to HMRC to cancel the notice before penalties accrue.",
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
  headline: "UK Self Assessment Tax Return for Foreign Directors: Do You Need to File?",
  description:
    "Exhaustive 2026 HMRC Self Assessment guide for foreign directors. Learn personal UTR registration rules, statutory filing criteria, 31 January deadlines, and £100 penalty avoidance.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uk-self-assessment-non-resident-director",
};

export const Route = createFileRoute("/blog/uk-self-assessment-non-resident-director")({
  head: () => ({
    meta: [
      { title: "UK Self Assessment Non-Resident Director Guide (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "HMRC Self Assessment guide for overseas UK company directors. Learn if you must file SA100 & SA109 forms, personal UTR rules & 31 January deadlines.",
      },
      {
        name: "keywords",
        content:
          "uk self assessment non resident director, do foreign directors file uk tax return, sa109 residence page self assessment overseas director, personal utr registration hmrc foreign director",
      },
      {
        property: "og:title",
        content: "UK Self Assessment Tax Return for Foreign Directors: Do You Need to File?",
      },
      {
        property: "og:description",
        content:
          "Discover HMRC statutory filing criteria, SA109 residence pages, personal UTR registration, and late filing penalty rules for non-resident directors.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-self-assessment-non-resident-director" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-self-assessment-non-resident-director" }],
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
            UK Self Assessment Tax Return for Foreign Directors: Do You Need to File?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive HMRC tax masterclass for non-UK resident company directors on statutory filing criteria, Personal UTR numbers, Form SA109 non-residence claims, and 31 January deadlines in 2026.
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
              <span>HMRC SA100 & SA109 Official Compliance Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Self Assessment Rules at a Glance</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Essential personal tax rules for overseas directors of UK Limited Companies:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">No Automatic Obligation</strong>
              <p className="text-navy-100 leading-relaxed">
                Simply being a director of a UK LTD does NOT require a UK Self Assessment tax return if you reside abroad with zero UK taxable income.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Filing Triggers</strong>
              <p className="text-navy-100 leading-relaxed">
                You MUST file if you draw a UK salary via PAYE, receive untaxed UK income, or are issued a formal Notice to File by HMRC.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Form SA109 (Residence Page)</strong>
              <p className="text-navy-100 leading-relaxed">
                Non-resident directors who file must include Form SA109 to formally claim non-resident tax status under the Statutory Residence Test (SRT).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Strict 31 January Deadline</strong>
              <p className="text-navy-100 leading-relaxed">
                Online Self Assessment filings and tax payments are due by 31 January following the end of the tax year.
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
            <li><a href="#filing-criteria" className="hover:text-gold-600 underline">1. HMRC Statutory Criteria: Do You Need to File?</a></li>
            <li><a href="#company-utr-vs-personal-utr" className="hover:text-gold-600 underline">2. Company UTR vs Personal UTR: Understanding the Difference</a></li>
            <li><a href="#sa109-residence-claim" className="hover:text-gold-600 underline">3. Form SA109: Claiming Non-Resident Tax Status</a></li>
            <li><a href="#tax-matrix" className="hover:text-gold-600 underline">4. Comprehensive Self Assessment Tax Matrix</a></li>
            <li><a href="#srt-test" className="hover:text-gold-600 underline">5. The HMRC Statutory Residence Test (SRT)</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Self Assessment Mistakes to Avoid</a></li>
            <li><a href="#deadlines-and-penalties" className="hover:text-gold-600 underline">7. Deadlines & Late Filing Penalties (£100 Fine)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="filing-criteria" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. HMRC Statutory Criteria: Do You Need to File?
          </h2>
          <p>
            Historically, HMRC required all company directors to register for Self Assessment. However, HMRC updated its official manual to clarify that <strong>non-resident directors are only required to file a Self Assessment tax return if they have UK taxable income</strong>.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Filing SA100 with Form SA109
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Hassan, a software company founder in Pakistan operating a UK LTD. Hassan draws a £12,570 director salary via UK PAYE payroll. Because he earns a UK salary, Hassan registered for a Personal UTR. ADVAQ files his SA100 return along with Form SA109 (Residence page) to claim non-resident tax status, ensuring zero UK tax is owed under his £12,570 Personal Allowance.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="company-utr-vs-personal-utr" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Company UTR vs Personal UTR: Understanding the Difference
          </h2>
          <p>
            Overseas founders often confuse their company's tax number with their personal tax number:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-navy-950" size={18} />
                Company UTR (10 Digits)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Issued to the corporate entity for Corporation Tax (Form CT600). Belongs to the company.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-gold-600 text-base mb-1 flex items-center gap-2">
                <UserCheck className="text-gold-600" size={18} />
                Personal UTR (10 Digits)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Issued to an individual human being for Self Assessment personal income tax (Form SA100). Belongs to the director personally.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="sa109-residence-claim" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Form SA109: Claiming Non-Resident Tax Status
          </h2>
          <p>
            If a foreign director is required to submit a UK Self Assessment tax return, simply completing the standard SA100 main form is insufficient.
          </p>
          <p>
            You must file supplementary <strong>Form SA109 (Residence, Remittance Basis etc.)</strong> to formally notify HMRC of your non-resident status and claim relief under double taxation treaties.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="tax-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive Self Assessment Tax Matrix
          </h2>
          <p>
            Side-by-side comparison of Self Assessment obligations for overseas directors:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Director Profile</th>
                  <th className="p-4 text-gold-500">Personal UTR Required?</th>
                  <th className="p-4 text-emerald-400">Self Assessment Mandate</th>
                  <th className="p-4">Form SA109 Required?</th>
                  <th className="p-4">Statutory Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Foreign Director (UK Salary £12,570 via PAYE)</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (Mandatory)</td>
                  <td className="p-4 text-emerald-700 font-bold">Mandatory Annual Filing</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (SA109 Non-Residency)</td>
                  <td className="p-4 text-navy-900">31 January Following Tax Year</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Foreign Director (Zero UK Income, Dividends Only)</td>
                  <td className="p-4 text-navy-900">No (Unless Notice Received)</td>
                  <td className="p-4 text-emerald-700 font-bold">Exempt (Zero Return)</td>
                  <td className="p-4 text-navy-900">Not Applicable</td>
                  <td className="p-4 text-navy-900">N/A</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Foreign Director (Issued HMRC SA316 Notice)</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (Mandatory)</td>
                  <td className="p-4 text-rose-700 font-bold">Mandatory (Or Request Cancellation)</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (If Filing Return)</td>
                  <td className="p-4 text-navy-900">31 January Following Tax Year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            HMRC PERSONAL TAX SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your UK Self Assessment & Form SA109
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares and submits individual UK Self Assessment tax returns, registers Personal UTR numbers, and files Form SA109 non-residence claims for foreign directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/self-assessment"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore Self Assessment Tax Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="srt-test" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. The HMRC Statutory Residence Test (SRT)
          </h2>
          <p>
            Your UK tax residence status is determined objectively using the <strong>Statutory Residence Test (SRT)</strong> introduced in Finance Act 2013.
          </p>
          <p>
            You are classified as an <strong>Automatic Overseas Resident</strong> if you spend fewer than 16 days in the UK during the tax year (or fewer than 46 days if you have not been a UK resident in the previous 3 tax years).
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Self Assessment Mistakes to Avoid
          </h2>
          <p>
            Avoid these six frequent Self Assessment tax errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Assuming All UK Directors Must Automatically File Returns
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                HMRC updated guidance clarifies that foreign directors with zero UK taxable income are not required to register or file.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Attempting to File Form SA109 on HMRC's Free Portal
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                HMRC's basic online portal does NOT support Form SA109 non-residence filings. You must use commercial software or an authorized advisory firm like ADVAQ.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="deadlines-and-penalties" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Deadlines & Late Filing Penalties (£100 Fine)
          </h2>
          <p>
            If HMRC issues a Notice to File, respect the statutory timeline:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <Calendar className="text-gold-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-navy-950 text-base">31 October: Paper Return Deadline</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Deadline for submitting paper SA100 + SA109 returns by post to HMRC.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <Calendar className="text-gold-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-navy-950 text-base">31 January: Online Filing & Payment Deadline</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Deadline for electronic SA100 + SA109 filings and paying any personal tax due. Missing this by 1 day triggers an immediate £100 fine.
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
            HMRC SELF ASSESSMENT TAX SERVICES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your UK Self Assessment with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Personal UTR registration, Form SA100 & SA109 non-resident tax filings, and double taxation treaty claims.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/self-assessment"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Self Assessment Tax Return
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
