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
} from "lucide-react";

const faqs = [
  {
    q: "Does an overseas director of a UK LTD company automatically need to file a UK Self Assessment tax return?",
    a: "No. Since HMRC updated its statutory guidance, simply being an office holder or director of a UK company does NOT automatically require you to file a UK Self Assessment tax return if you live overseas and have zero taxable UK-sourced income.",
  },
  {
    q: "When IS a non-resident director legally required to file a UK Self Assessment?",
    a: "You must file if you receive UK-sourced salary (via UK PAYE payroll), have taxable UK rental property income, or receive UK untaxed income exceeding personal allowances.",
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
    "Complete 2026 HMRC Self Assessment guide for foreign directors. Learn personal UTR registration rules, statutory filing criteria, 31 January deadlines, and £100 penalty avoidance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uk-self-assessment-non-resident-director",
};

export const Route = createFileRoute("/blog/uk-self-assessment-non-resident-director")({
  head: () => ({
    meta: [
      { title: "UK Self Assessment Non-Resident Director Guide (2026) | ADVAQ" },
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
            An essential HMRC tax guide for non-UK resident company directors on statutory filing criteria, Personal UTR numbers, Form SA109 non-residence claims, and 31 January deadlines.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Tax Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>HMRC SA100 & SA109 Compliant</span>
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
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>No Automatic Obligation:</strong> Simply being a director of a UK LTD does NOT require a UK Self Assessment tax return if you reside abroad with zero UK taxable income.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Filing Triggers:</strong> You MUST file if you draw a UK salary, receive untaxed UK income, or are issued a formal Notice to File by HMRC.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form SA109 (Residence Page):</strong> Non-resident directors who file must include Form SA109 to formally claim non-resident tax status under the Statutory Residence Test (SRT).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Strict 31 January Deadline:</strong> Online Self Assessment filings and tax payments are due by 31 January following the end of the tax year.</span>
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
            <li><a href="#filing-criteria" className="hover:text-gold-600 underline">1. HMRC Statutory Criteria: Do You Need to File?</a></li>
            <li><a href="#company-utr-vs-personal-utr" className="hover:text-gold-600 underline">2. Company UTR vs Personal UTR: Understanding the Difference</a></li>
            <li><a href="#sa109-residence-claim" className="hover:text-gold-600 underline">3. Form SA109: Claiming Non-Resident Tax Status</a></li>
            <li><a href="#srt-test" className="hover:text-gold-600 underline">4. The HMRC Statutory Residence Test (SRT)</a></li>
            <li><a href="#deadlines-and-penalties" className="hover:text-gold-600 underline">5. Deadlines & Late Filing Penalties (£100 Fine)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="filing-criteria" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. HMRC Statutory Criteria: Do You Need to File?
          </h2>
          <p>
            Historically, HMRC required all company directors to register for Self Assessment. However, HMRC updated its official manual to clarify that <strong>non-resident directors are only required to file a Self Assessment tax return if they have UK taxable income</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-red-600 font-semibold text-base mb-2">
                <AlertTriangle size={20} />
                <span>You MUST File If You:</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                <li>Receive UK salary via UK PAYE payroll.</li>
                <li>Receive UK rental income from property.</li>
                <li>Have taxable UK capital gains.</li>
                <li>Receive an explicit Notice to File (Form SA316) from HMRC.</li>
              </ul>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-emerald-600 font-semibold text-base mb-2">
                <CheckCircle2 size={20} />
                <span>You DO NOT Need to File If:</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                <li>You live 100% abroad and perform no work in the UK.</li>
                <li>You only take non-taxable foreign dividends.</li>
                <li>You have no UK-sourced income.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="company-utr-vs-personal-utr" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Company UTR vs Personal UTR: Understanding the Difference
          </h2>
          <p>
            Overseas founders often confuse their company's tax number with their personal tax number:
          </p>

          <div className="space-y-3 my-4">
            <div className="border border-border p-4 rounded-xl bg-white text-sm">
              <strong className="text-navy-900 block text-base mb-1">Company UTR (10 Digits)</strong>
              <p className="text-gray-600">
                Issued to the corporate entity for Corporation Tax (Form CT600). Belongs to the company.
              </p>
            </div>

            <div className="border border-border p-4 rounded-xl bg-white text-sm">
              <strong className="text-navy-900 block text-base mb-1">Personal UTR (10 Digits)</strong>
              <p className="text-gray-600">
                Issued to an individual human being for Self Assessment personal income tax (Form SA100). Belongs to the director personally.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="sa109-residence-claim" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Form SA109: Claiming Non-Resident Tax Status
          </h2>
          <p>
            If a foreign director is required to submit a UK Self Assessment tax return, simply completing the standard SA100 main form is insufficient.
          </p>
          <p>
            You must file supplementary <strong>Form SA109 (Residence, Remittance Basis etc.)</strong> to formally notify HMRC of your non-resident status and claim relief under double taxation treaties.
          </p>
          <p className="text-xs text-gray-500 italic">
            * Note: HMRC's basic online portal does not support Form SA109 electronic filing. You must use commercial tax software (such as ADVAQ Tax filing platform) or third-party filing services.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
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
              Explore Self Assessment Tax Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="srt-test" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. The HMRC Statutory Residence Test (SRT)
          </h2>
          <p>
            Your UK tax residence status is determined objectively using the <strong>Statutory Residence Test (SRT)</strong> introduced in Finance Act 2013.
          </p>
          <p>
            You are classified as an <strong>Automatic Overseas Resident</strong> if you spend fewer than 16 days in the UK during the tax year (or fewer than 46 days if you have not been a UK resident in the previous 3 tax years).
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="deadlines-and-penalties" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Deadlines & Late Filing Penalties (£100 Fine)
          </h2>
          <p>
            If HMRC issues a Notice to File, respect the statutory timeline:
          </p>

          <div className="space-y-3 my-4">
            <div className="flex items-start gap-3 bg-off-white p-4 rounded-xl border border-border text-sm">
              <Calendar className="text-gold-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>31 October:</strong> Paper tax return deadline (if filing by post).
              </div>
            </div>
            <div className="flex items-start gap-3 bg-off-white p-4 rounded-xl border border-border text-sm">
              <Calendar className="text-gold-500 shrink-0 mt-0.5" size={18} />
              <div>
                <strong>31 January:</strong> Online tax return deadline and tax payment due date.
              </div>
            </div>
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
