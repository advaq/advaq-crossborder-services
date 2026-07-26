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
  Percent,
  Receipt,
  FileText,
  Coins,
  Scale,
  HelpCircle,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "What is Withholding Tax (WHT) under Pakistan tax law?",
    a: "Withholding Tax (WHT) is an advance tax collected at source by designated withholding agents (including all SECP registered companies) whenever making payments to vendors, suppliers, contractors, landlords, and foreign entities for goods, services, rent, or contracts.",
  },
  {
    q: "What is Section 153 of the Income Tax Ordinance 2001?",
    a: "Section 153 governs withholding tax on payments made for the supply of goods, rendering of services, and execution of contracts. Companies must deduct WHT at applicable statutory rates (e.g. 3% for IT services, 8% for general services) depending on the vendor's Active Taxpayer List (ATL) status.",
  },
  {
    q: "What is Section 152 of the Income Tax Ordinance 2001?",
    a: "Section 152 governs withholding tax on payments made to non-residents (foreign companies, foreign freelancers, or offshore software vendors). Unless covered under an active Double Taxation Treaty (DTAA) or FBR Exemption Certificate, payments to non-residents attract 15% to 20% withholding tax.",
  },
  {
    q: "How often must SECP companies file withholding tax statements on FBR Iris 2.0?",
    a: "Under Section 165, all companies must file quarterly Withholding Tax Statements (Form 165) on FBR Iris 2.0 by the 20th day of the month following each quarter (October 20, January 20, April 20, July 20).",
  },
  {
    q: "What is the penalty for failing to deduct or deposit Withholding Tax under Section 161?",
    a: "Failing to deduct or deposit WHT makes the company personally liable to pay the un-deducted tax plus a 12% per annum default surcharge interest under Section 161, and disallows the underlying expense from corporate tax deductions under Section 21(c).",
  },
  {
    q: "How does FBR's Section 21(c) expense disallowance impact corporate tax liability?",
    a: "Under Section 21(c), if a company fails to withhold tax on a vendor invoice (e.g. PKR 1,000,000 IT consulting bill), FBR auditors will completely disallow that PKR 1,000,000 expense, adding it back to taxable income and taxing it at the standard 29% corporate rate.",
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
  headline: "Withholding Tax (WHT) Rates & Filings in Pakistan for Companies (Section 153/152)",
  description:
    "Complete 2026 Withholding Tax (WHT) compliance masterclass for SECP companies in Pakistan. Detailed guide on Section 153 (goods & services), Section 152 (foreign non-residents), quarterly Form 165 filing deadlines, Section 21(c) expense disallowance, and Section 161 audit defense.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Corporate Tax Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/withholding-tax-rates-section-152-secp-company",
};

export const Route = createFileRoute("/blog/withholding-tax-rates-section-152-secp-company")({
  head: () => ({
    meta: [
      { title: "Withholding Tax Rates & Section 153/152 Guide (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Withholding tax (WHT) rates guide for SECP companies in Pakistan. Section 153 (services/goods), Section 152 (non-residents), quarterly Form 165 & CPR deposits.",
      },
      {
        name: "keywords",
        content:
          "withholding tax rates section 152 secp company, section 153 withholding tax rates services goods pakistan, quarterly withholding tax statement form 165 fbr iris, section 161 default surcharge withholding tax audit, section 21c expense disallowance fbr",
      },
      {
        property: "og:title",
        content: "Withholding Tax (WHT) Rates & Filings in Pakistan for Companies (Section 153/152)",
      },
      {
        property: "og:description",
        content:
          "Master FBR Withholding Tax obligations under Section 153 and 152 to protect your corporate expense deductions.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/withholding-tax-rates-section-152-secp-company" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/withholding-tax-rates-section-152-secp-company" }],
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
            Withholding Tax (WHT) Rates & Filings in Pakistan for Companies (Section 153/152)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive withholding tax compliance masterclass for corporate finance leads, CFOs, and business owners on FBR WHT rates under Section 153, foreign payments under Section 152, quarterly Form 165 statements, and CPR deposit receipts.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Corporate Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Income Tax Ordinance 2001 Section 153/152</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>WHT Corporate Statutory Mandate</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Withholding Agent Status</strong>
              <p className="text-navy-100 leading-relaxed">
                Every SECP Private Limited company is legally designated as a Statutory Withholding Agent under Section 153.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Section 153 (Local Payments)</strong>
              <p className="text-navy-100 leading-relaxed">
                Deduct WHT on vendor payments for goods, IT services, and contracts. Deposit via CPR within 7 days.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Section 152 (Foreign Payments)</strong>
              <p className="text-navy-100 leading-relaxed">
                Deduct WHT on payments to non-resident foreign software vendors unless covered by Double Tax Treaties.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Quarterly Form 165 Statements</strong>
              <p className="text-navy-100 leading-relaxed">
                File electronic withholding tax statements on FBR Iris 2.0 every 3 months to avoid Section 161 penalties.
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
            <li><a href="#withholding-agent-role" className="hover:text-gold-600 underline">1. The Role of SECP Companies as Statutory Withholding Agents</a></li>
            <li><a href="#section-153-rates" className="hover:text-gold-600 underline">2. Section 153 WHT Rates (Goods, Services, Contracts)</a></li>
            <li><a href="#section-152-foreign" className="hover:text-gold-600 underline">3. Section 152 WHT on Payments to Foreign Non-Residents</a></li>
            <li><a href="#quarterly-form-165" className="hover:text-gold-600 underline">4. Submitting Quarterly Withholding Tax Statements (Form 165)</a></li>
            <li><a href="#section-21c-disallowance" className="hover:text-gold-600 underline">5. Avoiding Expense Disallowance under Section 21(c)</a></li>
            <li><a href="#audit-defense" className="hover:text-gold-600 underline">6. Section 161 Audit Defense & Default Surcharge Rules</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="withholding-agent-role" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Role of SECP Companies as Statutory Withholding Agents
          </h2>
          <p>
            Under Section 153 of the <strong>Income Tax Ordinance 2001</strong>, all SECP registered companies automatically operate as <strong>Withholding Tax Agents</strong> for the Federal Board of Revenue (FBR).
          </p>
          <p>
            When making payments to suppliers, IT vendors, contractors, landlords, or foreign software platforms, companies must deduct the statutory tax percentage at source and deposit it into the Federal Treasury via a Computerized Payment Receipt (CPR) within 7 days.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="section-153-rates" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Section 153 WHT Rates (Goods, Services, Contracts)
          </h2>
          <p>
            Statutory withholding rates vary based on whether the vendor is an Active Filer or Non-Filer on FBR's Active Taxpayer List (ATL):
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Payment Transaction Head</th>
                  <th className="p-4 text-emerald-500 font-bold">Active Filer WHT Rate (ATL)</th>
                  <th className="p-4 text-red-400 font-bold">Non-Filer Penalty WHT Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">IT & IT-Enabled Services (Section 153(1)(b))</td>
                  <td className="p-4 text-emerald-700 font-bold">3% WHT Rate</td>
                  <td className="p-4 text-red-700 font-bold">6% WHT Rate</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">General Services (Consulting, Marketing)</td>
                  <td className="p-4 text-emerald-700 font-bold">8% to 11%</td>
                  <td className="p-4 text-red-700 font-bold">16% to 22%</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Sale / Supply of Goods</td>
                  <td className="p-4 text-emerald-700 font-bold">4% to 5%</td>
                  <td className="p-4 text-red-700 font-bold">8% to 10%</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Execution of Contracts</td>
                  <td className="p-4 text-emerald-700 font-bold">7% to 8%</td>
                  <td className="p-4 text-red-700 font-bold">14% to 16%</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Rent of Immovable Property (Section 155)</td>
                  <td className="p-4 text-emerald-700 font-bold">15% on excess rent</td>
                  <td className="p-4 text-red-700 font-bold">30% (Doubled Rate)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            CORPORATE WHT COMPLIANCE SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Manage Corporate Withholding Tax with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ calculates vendor WHT deductions, generates CPR payment receipts, files quarterly Form 165 statements, and protects against Section 161 tax audits.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/withholding-compliance"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Withholding Tax Advisory <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="section-152-foreign" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Section 152 WHT on Payments to Foreign Non-Residents
          </h2>
          <p>
            When a Pakistani company pays foreign offshore vendors for cloud software (AWS, Azure), international digital ads (Meta, Google), or overseas consulting under Section 152:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Standard Foreign WHT Rate:</strong> Payments to non-residents attract a standard 15% to 20% withholding tax unless covered by a Double Taxation Treaty (DTAA).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>FBR Exemption Certificate:</strong> Companies can apply for an FBR Exemption Certificate under Section 152(5) if the foreign vendor has no Permanent Establishment (PE) in Pakistan.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="section-21c-disallowance" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Avoiding Expense Disallowance under Section 21(c)
          </h2>
          <p>
            The single greatest financial threat during an FBR corporate audit is <strong>Section 21(c) Expense Disallowance</strong>:
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6">
            <div className="flex items-center gap-2 text-red-900 font-semibold text-sm mb-1">
              <AlertTriangle size={16} />
              <span>Section 21(c) Audit Risk:</span>
            </div>
            <p className="text-red-900 text-xs leading-relaxed">
              If a company pays a vendor PKR 10,000,000 for IT services but fails to deduct and deposit Section 153 withholding tax, FBR tax auditors will completely <strong>disallow the PKR 10,000,000 expense</strong>, adding it back to corporate net income and levying 29% corporate tax (PKR 2,900,000 tax penalty) plus default surcharge.
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
            PAKISTAN CORPORATE WHT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure 100% Withholding Tax Compliance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Section 153 & 152 WHT calculation, CPR payment generation, quarterly Form 165 Iris filings, and Section 161 audit defense handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/withholding-compliance"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Withholding Tax Service
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
