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
  Calculator,
  Percent,
  Coins,
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
    q: "Does a UK Limited Company pay UK Corporation Tax if all directors live overseas?",
    a: "Yes. All UK incorporated Limited Companies pay UK Corporation Tax (19% to 25%) to HMRC on worldwide net profits regardless of where the directors or shareholders physically reside.",
  },
  {
    q: "Do non-resident shareholders pay UK income tax on dividends received from a UK LTD?",
    a: "Generally, no. The UK does not impose withholding tax (WHT) on dividends paid by a UK company to foreign shareholders. Non-resident shareholders report and pay tax on dividends in their home country according to local tax rules.",
  },
  {
    q: "What are the UK Corporation Tax rates for 2026?",
    a: "For net profits up to £50,000, the Small Profits Rate is 19%. For net profits exceeding £250,000, the main rate is 25%. A marginal relief tax rate applies for net profits between £50,000 and £250,000.",
  },
  {
    q: "Do non-UK directors need to file a UK Self Assessment tax return?",
    a: "Non-resident directors only need to file a UK Self Assessment tax return if they receive UK-sourced salary (via UK PAYE payroll) or income taxable in the UK. If you only receive non-taxable UK dividends, a UK Self Assessment is usually not required.",
  },
  {
    q: "How do Double Taxation Treaties (DTT) protect overseas directors from paying tax twice?",
    a: "The UK maintains bilateral Double Taxation Treaties with over 130 countries (including Pakistan, UAE, USA). These treaties prevent double taxation by allowing you to claim foreign tax credits in your home country for taxes paid in the UK.",
  },
  {
    q: "Is Corporation Tax due if my UK LTD made zero profit or a financial loss?",
    a: "If your company made zero net profit or operated at a financial loss, no Corporation Tax is owed. However, you must still file a formal CT600 Tax Return with HMRC declaring your zero taxable profit.",
  },
  {
    q: "When is UK Corporation Tax payment due to HMRC?",
    a: "Corporation Tax payment is due **9 months and 1 day** after the end of your company's accounting period. The CT600 return document itself must be filed within 12 months.",
  },
  {
    q: "What happens if an overseas director draws illegal dividends?",
    a: "Dividends drawn in excess of post-tax retained profits are considered 'unlawful dividends'. HMRC may reclassify them as director loans, subjecting the company to Section 455 tax penalties at 33.75%.",
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
  headline: "Do Non-UK Residents Pay UK Taxes on LTD Company Income? (2026 Rules)",
  description:
    "Exhaustive 2026 UK tax breakdown for foreign directors & shareholders. Learn Corporation Tax rates, dividend withholding tax rules, and Double Tax Treaties.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/do-non-uk-residents-pay-uk-tax-ltd-company",
};

export const Route = createFileRoute("/blog/do-non-uk-residents-pay-uk-tax-ltd-company")({
  head: () => ({
    meta: [
      { title: "Do Non-UK Residents Pay UK Tax on LTD Company Income? (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to UK Corporation Tax, dividend rules, and non-resident tax obligations for foreign directors owning a UK Limited Company. Double tax treaty rules.",
      },
      {
        name: "keywords",
        content:
          "do non uk residents pay uk tax ltd company, uk corporation tax rate non resident, uk dividend tax foreign shareholder, non resident director UK HMRC tax return",
      },
      {
        property: "og:title",
        content: "Do Non-UK Residents Pay UK Taxes on LTD Company Income? (2026 Rules)",
      },
      {
        property: "og:description",
        content:
          "Understand how UK Corporation Tax, dividend withholding exemptions, and international Double Taxation Treaties apply to overseas founders.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/do-non-uk-residents-pay-uk-tax-ltd-company" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/do-non-uk-residents-pay-uk-tax-ltd-company" }],
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
            Do Non-UK Residents Pay UK Taxes on LTD Company Income? (2026 Rules)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive tax compliance masterclass for foreign directors and shareholders on UK Corporation Tax, dividend withholding exemptions, HMRC filing rules, and Double Tax Treaties in 2026.
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
              <span>HMRC & International Tax Treaty Compliant</span>
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
            Understanding UK tax obligations for foreign non-resident company owners:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Company Level: Taxable in UK</strong>
              <p className="text-navy-100 leading-relaxed">
                The UK Limited Company pays <strong>19% to 25% Corporation Tax</strong> to HMRC on profits earned worldwide, regardless of director residency.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Shareholder Level: 0% UK Withholding</strong>
              <p className="text-navy-100 leading-relaxed">
                The UK imposes <strong>0% Dividend Withholding Tax (WHT)</strong>. Foreign shareholders receive 100% of dividends and pay tax locally in their home country.
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
            <li><a href="#corp-tax" className="hover:text-gold-600 underline">1. UK Corporation Tax Rates for 2026</a></li>
            <li><a href="#dividend-rules" className="hover:text-gold-600 underline">2. Dividend Taxation for Non-Resident Shareholders</a></li>
            <li><a href="#salary-vs-dividend" className="hover:text-gold-600 underline">3. Salary vs Dividends: Tax-Efficient Profit Extraction</a></li>
            <li><a href="#tax-matrix" className="hover:text-gold-600 underline">4. Comprehensive UK Tax Liability Matrix</a></li>
            <li><a href="#double-taxation" className="hover:text-gold-600 underline">5. Double Taxation Treaties (DTT) & Relief</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Tax Mistakes Overseas Directors Make</a></li>
            <li><a href="#hmrc-filing" className="hover:text-gold-600 underline">7. Annual HMRC Filing Deadlines for Non-Residents</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="corp-tax" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. UK Corporation Tax Rates for 2026
          </h2>
          <p>
            Because a UK Limited Company is a distinct corporate entity incorporated under UK law, HM Revenue & Customs (HMRC) exercises tax jurisdiction over the company's net profits worldwide.
          </p>
          <p>
            The physical residency of the company's directors or shareholders does <strong>not</strong> exempt the corporate entity from UK Corporation Tax.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Tax Scenario
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Hamza, a software agency founder in Pakistan operating a UK LTD. In 2026, Hamza's company generates £40,000 in net profit after software expenses. Because the net profit is under £50,000, his company pays the 19% Small Profits Rate (£7,600) to HMRC, leaving £32,400 in post-tax retained earnings for dividend payouts.
            </p>
          </div>

          <div className="bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6">
            <h4 className="font-bold text-navy-950 text-base flex items-center gap-2">
              <Calculator className="text-gold-600" size={20} />
              2026 UK Corporation Tax Bands:
            </h4>
            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-white p-4 rounded-xl border border-border text-center shadow-sm">
                <span className="block font-bold text-emerald-600 text-xl">19%</span>
                <strong className="text-navy-950 block mt-1">Small Profits Rate</strong>
                <p className="text-gray-500 mt-1">Net profits up to £50,000</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-border text-center shadow-sm">
                <span className="block font-bold text-gold-600 text-xl">Marginal Relief</span>
                <strong className="text-navy-950 block mt-1">Sliding Scale Rate</strong>
                <p className="text-gray-500 mt-1">Profits between £50k and £250k</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-border text-center shadow-sm">
                <span className="block font-bold text-navy-950 text-xl">25%</span>
                <strong className="text-navy-950 block mt-1">Main Rate</strong>
                <p className="text-gray-500 mt-1">Net profits exceeding £250,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="dividend-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Dividend Taxation for Non-Resident Shareholders
          </h2>
          <p>
            Once a UK Limited Company pays its Corporation Tax on net profits, remaining post-tax profits can be distributed to company shareholders as <strong>dividends</strong>.
          </p>
          <p>
            One of the greatest advantages of the UK tax framework for overseas investors is that <strong>the UK imposes ZERO Dividend Withholding Tax (WHT)</strong> on dividends paid to non-resident shareholders.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-xs text-emerald-900 my-6 space-y-2">
            <strong className="text-sm font-bold text-emerald-950 block">0% Withholding Tax Advantage:</strong>
            <p className="leading-relaxed">
              If your UK company issues a £10,000 dividend to an overseas shareholder in Pakistan, UAE, or the US, the full £10,000 is transferred without any UK tax deduction at source. Foreign shareholders declare and pay tax on dividends in their home country according to local laws.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="salary-vs-dividend" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Salary vs Dividends: Tax-Efficient Profit Extraction
          </h2>
          <p>
            Foreign directors often evaluate drawing a salary versus issuing dividends:
          </p>

          <div className="space-y-4 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1">Option A: Taking Dividends (Recommended for Non-Residents)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dividends are distributed from post-corporation tax profits. Zero UK National Insurance (NIC) or PAYE withholding tax applies to non-residents.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1">Option B: Director Salary (PAYE Payroll)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Paying a salary requires setting up a UK PAYE scheme with HMRC. While salary acts as a tax-deductible expense for Corporation Tax, it may trigger UK Income Tax and National Insurance liabilities if work is physically performed inside the UK.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="tax-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive UK Tax Liability Matrix
          </h2>
          <p>
            Detailed legal comparison of UK tax obligations for foreign non-resident directors:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Tax Category</th>
                  <th className="p-4 text-gold-500">Applicable Tax Rate</th>
                  <th className="p-4 text-emerald-400">Non-Resident Withholding</th>
                  <th className="p-4">HMRC Filing Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">UK Corporation Tax</td>
                  <td className="p-4 text-emerald-700 font-bold">19% to 25% on Net Profit</td>
                  <td className="p-4 text-navy-900">Paid by Company in UK</td>
                  <td className="p-4 text-navy-900">Annual CT600 Return</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Dividend Distributions</td>
                  <td className="p-4 text-emerald-700 font-bold">0% UK Withholding Tax</td>
                  <td className="p-4 text-emerald-700 font-bold">0% Deducted at Source</td>
                  <td className="p-4 text-navy-900">Declare in Home Country</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Director Salary (PAYE)</td>
                  <td className="p-4 text-navy-900">20% to 45% (If UK Sourced)</td>
                  <td className="p-4 text-navy-900">PAYE Deducted via Payroll</td>
                  <td className="p-4 text-navy-900">Monthly Real Time Information (RTI)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">UK Value Added Tax (VAT)</td>
                  <td className="p-4 text-navy-900">20% Standard Rate</td>
                  <td className="p-4 text-navy-900">Applies over £90k UK Sales</td>
                  <td className="p-4 text-navy-900">Quarterly VAT Returns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            HMRC TAX COMPLIANCE & FILING
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            HMRC Corporation Tax Return Service
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages complete HMRC Corporation Tax Returns (CT600), statutory annual accounts (iXBRL format), and Companies House filings for non-resident directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/corporation-tax-return"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore HMRC Tax Filing Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="double-taxation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Double Taxation Treaties (DTT) & Relief
          </h2>
          <p>
            The UK maintains bilateral Double Taxation Treaties with over 130 countries globally (including Pakistan, UAE, USA, and EU member states).
          </p>
          <p>
            These international treaties ensure foreign company owners are not taxed twice on the same corporate income. Corporation tax paid in the UK can be offset as a foreign tax credit in jurisdictions that tax overseas company earnings.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Tax Mistakes Overseas Directors Make
          </h2>
          <p>
            Avoid these six frequent corporate tax errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Assuming Overseas Residence Exempts the UK LTD
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Believing foreign director residency cancels UK Corporation Tax liabilities results in severe HMRC financial penalties.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Drawing Unlawful Dividends Prior to Corp Tax Calculations
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Taking dividends in excess of actual post-tax retained profits causes HMRC to reclassify withdrawals as director loans subject to Section 455 tax penalties (33.75%).
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="hmrc-filing" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Annual HMRC Filing Deadlines for Non-Residents
          </h2>
          <p>
            Every UK Limited Company must satisfy two annual statutory filing deadlines:
          </p>

          <div className="space-y-3 my-6">
            <div className="flex items-start gap-3 bg-off-white p-5 rounded-2xl border border-border text-sm">
              <Receipt className="text-gold-600 shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="block text-navy-950 font-bold">Companies House Annual Accounts:</strong>
                <p className="text-xs text-gray-600 mt-1">Due 9 months after your financial year-end.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-off-white p-5 rounded-2xl border border-border text-sm">
              <Receipt className="text-gold-600 shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="block text-navy-950 font-bold">HMRC CT600 Corporation Tax Return:</strong>
                <p className="text-xs text-gray-600 mt-1">Due 12 months after your accounting period ends (tax payment due at 9 months & 1 day).</p>
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
            HMRC TAX COMPLIANCE & ADVISORY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your UK Corporation Tax Return with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            HMRC-registered corporate tax preparation, annual accounts filing, and double taxation treaty advice for non-resident directors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/corporation-tax-return"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order HMRC Tax Return Filing
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
