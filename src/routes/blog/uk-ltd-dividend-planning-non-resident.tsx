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
  Coins,
  FileCheck,
  Percent,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "Can a UK Limited Company declare dividends if it has accumulated accounting losses?",
    a: "No. Under Section 830 of the Companies Act 2006, dividends can ONLY be legally declared out of accumulated distributable reserves (retained profits after Corporation Tax). Declaring dividends while insolvent or with accumulated losses makes the dividend illegal ('unlawful distribution').",
  },
  {
    q: "What legal paperwork is required when declaring a UK company dividend?",
    a: "Board of Directors meeting minutes approving the dividend declaration and an official Dividend Voucher issued to each shareholder detailing the date, number of shares held, gross dividend amount, and 0% UK tax treatment.",
  },
  {
    q: "Does the UK charge dividend withholding tax on payments to non-resident shareholders?",
    a: "No. The UK applies a 0% Withholding Tax (WHT) on dividends paid by UK Limited Companies to foreign shareholders. 100% of the declared gross dividend is remitted to your bank account.",
  },
  {
    q: "How are dividends taxed in the non-resident shareholder's home country?",
    a: "Foreign shareholders report dividend income in their local tax return (e.g. FBR in Pakistan, IRS in USA, or local tax authority in UAE/Europe) and pay tax according to their country of tax residence.",
  },
  {
    q: "Can different share classes (Alphabet Shares) receive different dividend amounts?",
    a: "Yes. Issuing Alphabet Shares (e.g. Class A Ordinary, Class B Ordinary) allows a UK company to declare different dividend amounts per share class, providing flexible profit extraction for co-founders.",
  },
  {
    q: "What happens if a director draws an illegal dividend under UK law?",
    a: "If a dividend is declared without sufficient distributable reserves, HMRC reclassifies the payment as a Director's Loan. The company must pay Section 455 tax at 33.75% on the outstanding amount if not repaid within 9 months.",
  },
  {
    q: "How frequently can a UK LTD declare and pay dividends?",
    a: "A UK company can declare interim dividends monthly, quarterly, or annually, provided that up-to-date management accounts confirm adequate distributable post-tax profits exist before each payout.",
  },
  {
    q: "Do I need to report UK dividends to HMRC if I am a non-resident shareholder?",
    a: "If you have no other UK-sourced taxable income, non-resident shareholders receiving 0% WHT dividends do not need to register for UK Self Assessment or report the dividends to HMRC.",
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
  headline: "UK Dividend Planning & Extraction Strategy for Non-Resident Shareholders",
  description:
    "Exhaustive 2026 dividend guide for foreign UK LTD owners. Learn distributable reserves rules, Board Minutes & Dividend Voucher compliance, and 0% UK withholding tax advantages.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uk-ltd-dividend-planning-non-resident",
};

export const Route = createFileRoute("/blog/uk-ltd-dividend-planning-non-resident")({
  head: () => ({
    meta: [
      { title: "UK Dividend Planning Non-Resident Strategy (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to UK LTD dividend planning & profit extraction for non-UK resident shareholders. Distributable reserves, 0% withholding tax, vouchers & Board Minutes.",
      },
      {
        name: "keywords",
        content:
          "uk ltd dividend planning non resident, 0% dividend withholding tax uk foreign shareholder, unlawful dividend distribution companies act 2006, dividend voucher board minutes template uk ltd",
      },
      {
        property: "og:title",
        content: "UK Dividend Planning & Extraction Strategy for Non-Resident Shareholders",
      },
      {
        property: "og:description",
        content:
          "Learn how non-resident shareholders extract company profits legally using tax-efficient dividend vouchers, board resolutions, and 0% UK withholding tax.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-ltd-dividend-planning-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-ltd-dividend-planning-non-resident" }],
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
            UK Dividend Planning & Extraction Strategy for Non-Resident Shareholders
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive masterclass for foreign business owners on legal profit extraction, distributable reserves calculations, dividend voucher documentation, and tax treaty optimization in 2026.
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
              <span>Companies Act 2006 Section 830 Statutory Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Key Takeaways (TL;DR)</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Essential dividend rules for foreign non-resident shareholders:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">0% UK Withholding Tax</strong>
              <p className="text-navy-100 leading-relaxed">
                The UK imposes <strong>0% Dividend Withholding Tax (WHT)</strong>. 100% of declared dividends are transferred directly to overseas shareholder bank accounts.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Distributable Reserves Rule</strong>
              <p className="text-navy-100 leading-relaxed">
                Under Section 830 of the Companies Act 2006, dividends can ONLY be paid out of net post-tax retained profits. Paying dividends without profits is illegal.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Mandatory Paperwork</strong>
              <p className="text-navy-100 leading-relaxed">
                Every dividend declaration requires formal Board Meeting Minutes and an official Dividend Voucher.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Alphabet Share Flexibility</strong>
              <p className="text-navy-100 leading-relaxed">
                Issuing Class A and Class B shares allows custom profit allocations among overseas co-founders.
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
            <li><a href="#what-is-a-dividend" className="hover:text-gold-600 underline">1. What is a Dividend & How Does It Work?</a></li>
            <li><a href="#distributable-reserves" className="hover:text-gold-600 underline">2. Calculating Distributable Reserves (Section 830 Rules)</a></li>
            <li><a href="#legal-paperwork" className="hover:text-gold-600 underline">3. Mandatory Paperwork: Board Minutes & Dividend Vouchers</a></li>
            <li><a href="#extraction-matrix" className="hover:text-gold-600 underline">4. Comprehensive Dividend Compliance & Extraction Matrix</a></li>
            <li><a href="#withholding-tax" className="hover:text-gold-600 underline">5. The UK 0% Dividend Withholding Tax Advantage</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Dividend Mistakes to Avoid</a></li>
            <li><a href="#alphabet-shares" className="hover:text-gold-600 underline">7. Alphabet Shares (Class A/B) for Flexible Dividend Splits</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-a-dividend" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What is a Dividend & How Does It Work?
          </h2>
          <p>
            A <strong>dividend</strong> is a formal distribution made by a UK Limited Company to its equity shareholders out of its accumulated post-tax profits.
          </p>
          <p>
            Unlike director salaries (which are paid pre-tax as allowable corporate expenses), dividends are paid <strong>after Corporation Tax (19%–25%)</strong> has been calculated and set aside.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Post-Tax Dividend Extraction
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Taimur, a software agency founder in Pakistan operating a UK LTD. After deducting software expenses and director salary, Taimur's company earned £40,000 net profit. After providing for £7,600 (19%) Corporation Tax, the remaining £32,400 represents distributable reserves. Taimur declares a £20,000 dividend, remitting 100% of the funds to his Wise Business account without UK withholding tax.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="distributable-reserves" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Calculating Distributable Reserves (Section 830 Rules)
          </h2>
          <p>
            Section 830 of the <em>UK Companies Act 2006</em> dictates that a UK company may only make a distribution if it has <strong>accumulated, realized profits</strong> (distributable reserves).
          </p>

          <div className="bg-red-50 border border-red-200 p-6 rounded-2xl space-y-3 my-6">
            <h4 className="font-bold text-red-900 text-base flex items-center gap-2">
              <AlertTriangle size={20} className="text-red-600" />
              The Legal Danger of Illegal Dividends ("Unlawful Distributions")
            </h4>
            <p className="text-xs text-red-800 leading-relaxed">
              If directors declare dividends when the company lacks sufficient retained earnings (or is in an overall loss position), the payment is classified as an <strong>illegal dividend</strong>. HMRC reclassifies unlawful distributions as Director Loans subject to Section 455 tax penalties at 33.75%.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="legal-paperwork" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Mandatory Paperwork: Board Minutes & Dividend Vouchers
          </h2>
          <p>
            To withstand HMRC audit scrutiny, every dividend declaration must be supported by two statutory legal documents:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-gold-600 text-base mb-1 flex items-center gap-2">
                <FileCheck className="text-gold-600" size={18} />
                1. Board Meeting Minutes
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Formal written minutes of the Board of Directors resolving to declare an interim or final dividend, confirming that distributable reserves were verified.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Receipt className="text-navy-950" size={18} />
                2. Official Dividend Voucher
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A formal tax voucher issued to each shareholder stating company name, date, shareholder name, number of shares held, gross dividend amount, and 0% UK tax status.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="extraction-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive Dividend Compliance & Extraction Matrix
          </h2>
          <p>
            Side-by-side legal comparison of profit extraction channels for foreign shareholders:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Extraction Channel</th>
                  <th className="p-4 text-gold-500">Timing Relative to Corp Tax</th>
                  <th className="p-4 text-emerald-400">UK Withholding Tax Rate</th>
                  <th className="p-4">Distributable Reserves Mandate</th>
                  <th className="p-4">HMRC Paperwork Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Dividend Distribution</td>
                  <td className="p-4 text-navy-900">Post-Corporation Tax Profits</td>
                  <td className="p-4 text-emerald-700 font-bold">0% UK Withholding Tax</td>
                  <td className="p-4 text-rose-700 font-bold">Strictly Mandatory (S830)</td>
                  <td className="p-4 text-navy-900">Board Minutes & Dividend Voucher</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Director Salary (PAYE)</td>
                  <td className="p-4 text-emerald-700 font-bold">Pre-Tax (Allowable Expense)</td>
                  <td className="p-4 text-navy-900">PAYE Deducted via Payroll</td>
                  <td className="p-4 text-navy-900">Not Required</td>
                  <td className="p-4 text-navy-900">Monthly RTI FPS Submissions</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Director Loan Withdrawal</td>
                  <td className="p-4 text-navy-900">Pre/Post Tax Neutral</td>
                  <td className="p-4 text-navy-900">N/A (Subject to S455 33.75%)</td>
                  <td className="p-4 text-navy-900">Not Required</td>
                  <td className="p-4 text-navy-900">Director Loan Account Ledger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK DIVIDEND PLANNING & DOCUMENTATION
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Compliant Board Minutes & Dividend Vouchers
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ calculates your company's distributable reserves, drafts compliant Board Resolutions, and issues official Dividend Vouchers for non-resident directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/dividend-planning"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore Dividend Planning Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="withholding-tax" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. The UK 0% Dividend Withholding Tax Advantage
          </h2>
          <p>
            Unlike many jurisdictions (such as the US, which applies a 30% default withholding tax on foreign dividends), <strong>the United Kingdom applies a 0% Withholding Tax on corporate dividend distributions</strong>.
          </p>
          <p>
            Whether your non-resident shareholder lives in Pakistan, the UAE, Saudi Arabia, the US, or Singapore, the UK bank sends 100% of the declared dividend without deducting any UK tax at source.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Dividend Mistakes to Avoid
          </h2>
          <p>
            Avoid these six frequent dividend distribution errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Declaring Dividends During Loss Positions
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Declaring dividends when the company has net accumulated accounting losses breaches Section 830 and makes distributions illegal.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Failing to Issue Board Minutes & Dividend Vouchers
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Transferring corporate funds to personal accounts without written Board Minutes allows HMRC to reclassify payments as taxable director salary.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="alphabet-shares" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Alphabet Shares (Class A/B) for Flexible Dividend Splits
          </h2>
          <p>
            When a UK Limited Company has multiple founders contributing different levels of equity capital or working hours, standard ordinary shares pay dividends strictly proportional to ownership percentage.
          </p>
          <p>
            By structuring your company with <strong>Alphabet Shares (e.g. Class A Ordinary, Class B Ordinary)</strong>, the board can declare separate dividend rates for Class A vs Class B, providing complete flexibility for profit allocation among overseas partners.
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
            UK DIVIDEND PLANNING & ADVISORY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Plan Your UK Company Dividends with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Distributable reserves calculation, Board Resolution documentation, Dividend Voucher generation, and 0% UK withholding tax optimization.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/dividend-planning"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Dividend Planning Service
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
