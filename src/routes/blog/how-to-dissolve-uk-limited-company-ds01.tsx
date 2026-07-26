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
  Scale,
  Percent,
  Receipt,
  Coins,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
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
  {
    q: "What happens if HMRC objects to a Form DS01 strike-off application?",
    a: "If HMRC objects due to outstanding tax returns or unpaid Corporation Tax, Companies House suspends the strike-off application. You must resolve all outstanding tax filings and pay HMRC liabilities before resubmitting DS01.",
  },
  {
    q: "Can an insolvent company with debts use Form DS01 to dissolve?",
    a: "No. Form DS01 is strictly for solvent companies. If your company owes money to creditors or banks that it cannot repay, using DS01 is illegal and directors can be prosecuted for fraud. Insolvent companies must use Creditors' Voluntary Liquidation (CVL).",
  },
  {
    q: "Can a dissolved company be restored after strike-off?",
    a: "Yes. Creditors or former directors can apply for Administrative Restoration or a Court Order to restore a dissolved company within 6 years of strike-off.",
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
    "Exhaustive 2026 Companies House DS01 striking off guide for foreign directors. Learn legal eligibility rules, HMRC final tax returns, Gazette notices, and Bona Vacantia asset warnings.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-to-dissolve-uk-limited-company-ds01",
};

export const Route = createFileRoute("/blog/how-to-dissolve-uk-limited-company-ds01")({
  head: () => ({
    meta: [
      { title: "How to Strike Off UK LTD Company (DS01 Guide 2026 Masterclass) | ADVAQ" },
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
            An exhaustive legal masterclass for foreign directors on voluntary company dissolution, Form DS01 filing, HMRC final Corporation Tax clearances, Gazette public notices, and asset forfeiture rules in 2026.
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
              <span>Companies Act 2006 Section 1003 Compliance</span>
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
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Essential legal requirements for voluntary UK company strike-off:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Eligibility Criteria</strong>
              <p className="text-navy-100 leading-relaxed">
                Company must NOT have traded, sold stock, or changed name for at least 3 months prior to application.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Form DS01 Filing</strong>
              <p className="text-navy-100 leading-relaxed">
                Official electronic strike-off application submitted to Companies House with £33 fee.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">WARNING (Bona Vacantia)</strong>
              <p className="text-navy-100 leading-relaxed">
                Empty all company bank accounts before filing. Any remaining money automatically becomes Crown property upon dissolution.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">HMRC Final Clearance</strong>
              <p className="text-navy-100 leading-relaxed">
                File final CT600 Corporation Tax return and close PAYE/VAT schemes to prevent HMRC strike-off objections.
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
            <li><a href="#eligibility" className="hover:text-gold-600 underline">1. Legal Eligibility Rules for Striking Off (Section 1004)</a></li>
            <li><a href="#pre-dissolution-checklist" className="hover:text-gold-600 underline">2. Pre-Dissolution Checklist & Bank Account Closure</a></li>
            <li><a href="#hmrc-tax-clearance" className="hover:text-gold-600 underline">3. HMRC Final Tax Returns & Closing PAYE/VAT</a></li>
            <li><a href="#dissolution-matrix" className="hover:text-gold-600 underline">4. Comprehensive Dissolution & Strike-Off Process Matrix</a></li>
            <li><a href="#ds01-submission" className="hover:text-gold-600 underline">5. Submitting Form DS01 & Gazetting Process</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Dissolution Mistakes to Avoid</a></li>
            <li><a href="#bona-vacantia" className="hover:text-gold-600 underline">7. The Bona Vacantia Risk: Loss of Uncollected Funds</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="eligibility" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Legal Eligibility Rules for Striking Off (Section 1004)
          </h2>
          <p>
            Under Section 1004 of the <em>UK Companies Act 2006</em>, a private UK Limited Company can only apply for voluntary strike-off using Form DS01 if it meets strict legal conditions:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-emerald-950 text-base mb-1 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-600" size={18} />
                You CAN File Form DS01 If:
              </h4>
              <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside">
                <li>The company has not traded or carried on business for 3 months.</li>
                <li>The company has not changed its legal name in the last 3 months.</li>
                <li>The company is solvent and has no outstanding debts to suppliers or HMRC.</li>
              </ul>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-rose-950 text-base mb-1 flex items-center gap-2">
                <XCircle className="text-rose-600" size={18} />
                You CANNOT File Form DS01 If:
              </h4>
              <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside">
                <li>The company is insolvent (must use liquidation process).</li>
                <li>The company is subject to active legal proceedings.</li>
                <li>The company traded within the past 90 days.</li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Voluntary Strike-Off
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Haris, a software developer in Pakistan who registered a UK LTD for a project that was later shelved. Haris ceased all bank activity for 3 months, paid off his final software hosting bills, transferred his remaining £500 balance to his personal account, closed his Wise Business account, and submitted Form DS01 online via ADVAQ. Two months after Gazette publication, the company was officially struck off with zero penalties.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="pre-dissolution-checklist" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Pre-Dissolution Checklist & Bank Account Closure
          </h2>
          <p>
            Before signing Form DS01, directors must complete crucial administrative tasks:
          </p>

          <div className="bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6">
            <h4 className="font-bold text-navy-950 text-base flex items-center gap-2">
              <FileCheck className="text-gold-600" size={20} />
              Pre-Strike Off Action Checklist:
            </h4>
            <ol className="space-y-3 text-xs text-gray-700 list-decimal list-inside">
              <li className="leading-relaxed"><strong>Settle All Liabilities:</strong> Pay all outstanding supplier bills, utility invoices, and accountancy fees.</li>
              <li className="leading-relaxed"><strong>Distribute Remaining Assets:</strong> Pay remaining cash reserves to shareholders as final capital distributions or dividends.</li>
              <li className="leading-relaxed"><strong>Close Corporate Bank Accounts:</strong> Formally close all Wise, Payoneer, or Revolut business accounts once the balance reaches £0.00.</li>
              <li className="leading-relaxed"><strong>Notify Interested Parties:</strong> Send a copy of Form DS01 within 7 days to shareholders, employees, co-directors, and creditors.</li>
            </ol>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="hmrc-tax-clearance" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. HMRC Final Tax Returns & Closing PAYE/VAT
          </h2>
          <p>
            HMRC is the most frequent objector to company strike-offs. If a company owes Corporation Tax, VAT, or PAYE penalties, HMRC will automatically block the dissolution.
          </p>
          <p>
            <strong>Steps for HMRC Tax Clearance:</strong>
          </p>
          <ul className="space-y-2 text-sm text-gray-700 my-4 pl-2">
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> File a final CT600 Corporation Tax return covering up to the date trading ceased.</li>
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> Deregister from VAT via HMRC Gateway and submit a final VAT return.</li>
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> Close the PAYE scheme and mark final RTI payroll submissions as <em>"Final Submission upon Ceasing Scheme."</em></li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="dissolution-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive Dissolution & Strike-Off Process Matrix
          </h2>
          <p>
            Side-by-side legal comparison of company closure routes in the UK:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Closure Method</th>
                  <th className="p-4 text-gold-500">Solvency Requirement</th>
                  <th className="p-4 text-emerald-400">Official Filing Fee</th>
                  <th className="p-4">Timeline to Closure</th>
                  <th className="p-4">Asset Recovery Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Voluntary Strike-Off (Form DS01)</td>
                  <td className="p-4 text-emerald-700 font-bold">Solvent (Zero Debts)</td>
                  <td className="p-4 text-emerald-700 font-bold">£33 Online Fee</td>
                  <td className="p-4 text-emerald-700 font-bold">2 to 3 Months</td>
                  <td className="p-4 text-rose-700 font-bold">High (Bona Vacantia if uncollected)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Members Voluntary Liquidation (MVL)</td>
                  <td className="p-4 text-emerald-700 font-bold">Solvent (Assets &gt; £25k)</td>
                  <td className="p-4 text-navy-900">Insolvency Practitioner Fees</td>
                  <td className="p-4 text-navy-900">6 to 12 Months</td>
                  <td className="p-4 text-emerald-700 font-bold">Low (Formal IP Distribution)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Creditors Voluntary Liquidation (CVL)</td>
                  <td className="p-4 text-rose-700 font-bold">Insolvent (Unpayable Debts)</td>
                  <td className="p-4 text-navy-900">Insolvency Practitioner Fees</td>
                  <td className="p-4 text-navy-900">6 to 12 Months</td>
                  <td className="p-4 text-navy-900">Creditor Realization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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

        {/* SECTION 5 */}
        <div id="ds01-submission" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Submitting Form DS01 & Gazetting Process
          </h2>
          <p>
            Once Form DS01 is submitted online with the £33 fee, Companies House publishes a notice in the <strong>London, Edinburgh, or Belfast Gazette</strong>.
          </p>
          <p>
            The Gazette notice serves as a 2-month public warning to creditors. If no objection is received during this 60-day window, Companies House issues a second Gazette notice confirming the company has been dissolved and struck off the register.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Dissolution Mistakes to Avoid
          </h2>
          <p>
            Avoid these six frequent company strike-off errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Leaving Money in Bank Accounts on Dissolution Date
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Failing to empty bank accounts before dissolution causes all remaining balances to automatically pass to the Crown (Bona Vacantia).
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Submitting Form DS01 While Actively Trading
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Applying for strike-off within 3 months of buying, selling, or issuing client invoices is illegal under Section 1004.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="bona-vacantia" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. The Bona Vacantia Risk: Loss of Uncollected Funds
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
