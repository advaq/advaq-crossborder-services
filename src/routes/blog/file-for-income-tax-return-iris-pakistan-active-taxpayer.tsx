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
  DollarSign,
  Landmark,
  Coins,
  Scale,
  HelpCircle,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "What is the statutory deadline to file FBR Income Tax Returns in Pakistan?",
    a: "For individuals, salaried employees, sole proprietors, and AOPs, the standard annual FBR income tax filing deadline is September 30 following the end of the fiscal year (June 30). For SECP Private Limited companies, the deadline is December 31 following the fiscal year-end.",
  },
  {
    q: "What is the Active Taxpayer List (ATL) in Pakistan and why is it important?",
    a: "The Active Taxpayer List (ATL) is FBR's official roster of compliant tax filers published weekly on Mondays. Being on the ATL grants 'Filer' status, reducing withholding tax rates on bank cash transactions, property transfers, vehicle registration, and international card payments by 50% or more.",
  },
  {
    q: "How do IT exporters file tax returns on FBR Iris 2.0 under Section 154A?",
    a: "IT exporters select Section 154A in Iris 2.0, declare gross foreign proceeds verified by commercial bank e-PRC certificates, pay the 0.25% final withholding tax, and claim complete tax exemption on 99.75% of export revenue.",
  },
  {
    q: "What happens if I miss the annual FBR tax return filing deadline?",
    a: "Missing the deadline categorizes you as a 'Non-Filer', removes you from the ATL, triggers penalty fines under Section 182 starting at PKR 1,000 for individuals up to PKR 40,000+ for entities, and doubles withholding tax rates across banking and asset transactions.",
  },
  {
    q: "How does Wealth Statement (Form 116) reconciliation work on Iris?",
    a: "The Wealth Statement reconciles your personal net assets from July 1 to June 30. Your ending net wealth must mathematically balance: Ending Wealth = Opening Wealth + Total Inflows (Salary/Business Profits/Exempt Remittances) - Total Outflows (Personal Household Expenses/Taxes). Unreconciled differences trigger FBR audit notices.",
  },
  {
    q: "How can I restore my Active Taxpayer List (ATL) status if I file late?",
    a: "If you file after the statutory deadline, you can restore active ATL status by paying an ATL Surcharge fee via a PSID challan on eFBR (PKR 1,000 for individuals, PKR 10,000 for AOPs, and PKR 20,000 for SECP companies).",
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
  headline: "How to File FBR Income Tax Return in Pakistan (Iris Portal Active Taxpayer Guide)",
  description:
    "Complete 2026 FBR Income Tax filing masterclass on Iris 2.0 for individuals, companies, and IT exporters. Detailed guide on step-by-step return filing, Active Taxpayer List (ATL) status, Wealth Statement 116 reconciliation, and Section 154A IT export credits.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Tax Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer",
};

export const Route = createFileRoute("/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer")({
  head: () => ({
    meta: [
      { title: "File FBR Income Tax Return Iris Active Taxpayer (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "How to file FBR Income Tax Return on Iris 2.0 in Pakistan. Become Filer on Active Taxpayer List (ATL), wealth statement reconciliation & Section 154A IT credit.",
      },
      {
        name: "keywords",
        content:
          "file for income tax return iris pakistan active taxpayer, fbr iris 2.0 tax return filing guide, active taxpayer list atl restoration fee 1000 pkr, wealth statement reconciliation fbr iris, section 154A IT export return filing",
      },
      {
        property: "og:title",
        content: "How to File FBR Income Tax Return in Pakistan (Iris Portal Active Taxpayer Guide)",
      },
      {
        property: "og:description",
        content:
          "Master FBR Iris 2.0 income tax return filing, wealth statement reconciliation, and Active Taxpayer List (ATL) status.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/file-for-income-tax-return-iris-pakistan-active-taxpayer" }],
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
            <span>Pakistan Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            How to File FBR Income Tax Return in Pakistan (Iris Portal Active Taxpayer Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive tax filing masterclass for Pakistani citizens, business owners, corporate directors, and software exporters on submitting annual tax returns via FBR Iris 2.0, reconciling Wealth Statements (Form 116), and securing Active Taxpayer List (ATL) status.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Tax Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>13 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FBR Income Tax Ordinance 2001 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FBR Tax Filing Key Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">FBR Iris 2.0 Portal</strong>
              <p className="text-navy-100 leading-relaxed">
                Submit annual Income Tax Return under Form 114(1) and Wealth Statement under Form 116 electronically.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Active Taxpayer List (ATL)</strong>
              <p className="text-navy-100 leading-relaxed">
                Filing return grants active "Filer" status, cutting banking withholding taxes, property WHT, and vehicle taxes by 50%+.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Wealth Statement Reconciliation</strong>
              <p className="text-navy-100 leading-relaxed">
                Total ending assets must balance with opening assets + net income minus personal expenses.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">IT Exporter 0.25% Tax Rate</strong>
              <p className="text-navy-100 leading-relaxed">
                Declare export proceeds under Section 154A by attaching commercial bank e-PRC certificates.
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
            <li><a href="#fbr-iris-overview" className="hover:text-gold-600 underline">1. Overview of FBR Iris 2.0 & Statutory Mandates</a></li>
            <li><a href="#filer-vs-nonfiler-rates" className="hover:text-gold-600 underline">2. Filer vs Non-Filer Withholding Tax Comparison</a></li>
            <li><a href="#step-by-step-filing" className="hover:text-gold-600 underline">3. Step-by-Step Return Filing Workflow on Iris 2.0</a></li>
            <li><a href="#wealth-reconciliation" className="hover:text-gold-600 underline">4. Reconciling Wealth Statements (Form 116 Formula)</a></li>
            <li><a href="#section-154a-it" className="hover:text-gold-600 underline">5. Return Filing Rules for IT Exporters (Section 154A)</a></li>
            <li><a href="#atl-restoration" className="hover:text-gold-600 underline">6. Late Filing Penalties & ATL Restoration Protocol</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="fbr-iris-overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Overview of FBR Iris 2.0 & Statutory Mandates
          </h2>
          <p>
            In Pakistan, filing an annual Income Tax Return is a statutory requirement enforced by the <strong>Federal Board of Revenue (FBR)</strong> under Section 114 of the <strong>Income Tax Ordinance 2001</strong>.
          </p>
          <p>
            FBR operates its upgraded digital portal, <strong>Iris 2.0</strong>, where taxpayers submit Form 114(1) (Return of Income) and Form 116 (Wealth Statement). The Pakistani tax year runs from July 1 to June 30 of the following year.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="filer-vs-nonfiler-rates" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Filer vs Non-Filer Withholding Tax Comparison
          </h2>
          <p>
            Being registered on the FBR's <strong>Active Taxpayer List (ATL)</strong> grants significant financial protection:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Transaction / Activity</th>
                  <th className="p-4 text-emerald-500 font-bold">Active Filer Tax Rate (ATL)</th>
                  <th className="p-4 text-red-400 font-bold">Non-Filer Tax Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Bank Cash Withdrawal (above PKR 50k)</td>
                  <td className="p-4 text-emerald-700 font-bold">0% Tax</td>
                  <td className="p-4 text-red-700 font-bold">0.6% Withholding Tax</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Immovable Property Purchase (Section 236K)</td>
                  <td className="p-4 text-emerald-700 font-bold">3% to 3.5%</td>
                  <td className="p-4 text-red-700 font-bold">12% to 16% (Penalty Rate)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Motor Vehicle Registration (Section 231B)</td>
                  <td className="p-4 text-emerald-700 font-bold">Standard Base Rate</td>
                  <td className="p-4 text-red-700 font-bold">200% to 300% Penalty Rate</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">International Credit Card Transactions</td>
                  <td className="p-4 text-emerald-700 font-bold">5% Advance Tax</td>
                  <td className="p-4 text-red-700 font-bold">10% Advance Tax</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FBR TAX FILING & ATL ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your FBR Tax Return with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ reconciles your wealth statement, claims Section 154A IT export credits, files corporate returns, and restores Active Taxpayer List (ATL) status.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/company-tax-return"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Income Tax Return Filing <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="step-by-step-filing" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step Return Filing Workflow on Iris 2.0
          </h2>
          <p>
            Filing on Iris 2.0 requires careful data input across several tax heads:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 1: Declare Income Heads</strong>
              <p className="text-xs text-gray-600">Input gross salary income, net business profits, rental receipts, or foreign IT export proceeds.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 2: Input Deductible Allowances & WHT</strong>
              <p className="text-xs text-gray-600">Claim advance tax deducted on mobile bills, electricity bills, vehicle taxes, and bank cash transactions.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 3: Complete Wealth Statement (Form 116)</strong>
              <p className="text-xs text-gray-600">Declare personal assets, bank balances, real estate properties, and household expenses.</p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="wealth-reconciliation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Reconciling Wealth Statements (Form 116 Formula)
          </h2>
          <p>
            The Wealth Statement Reconciliation (Form 116) is where most self-filers make errors that trigger FBR audit notices under Section 122:
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Mathematical Wealth Reconciliation Equation:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              <strong>Net Wealth (As of June 30)</strong> = Opening Net Wealth (July 1) + Total Taxable Income + Total Exempt Inflows (Foreign Remittances / IT Export Receipts) - Personal Household Expenses - Tax Paid.
              <br /><br />
              • <em>Un-Reconciled Amount:</em> Must equal <strong>0</strong>. Any positive or negative discrepancy blocks electronic submission on Iris 2.0.
            </p>
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
            FBR TAX COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            File Your FBR Tax Return with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Iris 2.0 return filing, wealth statement reconciliation, IT export tax credit claims, and Active Taxpayer List (ATL) restoration handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/company-tax-return"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Income Tax Return Filing
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
