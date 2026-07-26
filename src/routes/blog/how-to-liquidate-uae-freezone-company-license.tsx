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
  FileCheck,
  XCircle,
  AlertTriangle,
  Globe2,
  Scale,
  Percent,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "Why is official company liquidation required in the UAE rather than just letting a license expire?",
    a: "Failing to undergo formal legal liquidation and simply abandoning an expired UAE trade license results in compounding annual renewal fines (up to AED 100,000+), MoHRE labor ban blacklisting of shareholders, Ministry of Interior (MoI) immigration travel bans, and potential legal lawsuits by commercial landlords or banking institutions.",
  },
  {
    q: "What clearances are required to liquidate a UAE Freezone company?",
    a: "Formal liquidation requires obtaining official clearance certificates from: (1) Freezone Authority / DET, (2) Federal Tax Authority (VAT & Corporate Tax deregistration approval), (3) Customs Authority (if applicable), (4) Telecom providers (e& / du), (5) Bank Account Closure Certificate, and (6) Cancellation of all employee, investor, and dependent residence visas.",
  },
  {
    q: "Is an Audited Liquidation Report required to close a Freezone entity?",
    a: "Yes. Most Freezone authorities in Dubai and across the UAE require appointing a registered UAE auditor to audit company financial records and issue a formal Statement of Account & Liquidator's Report confirming all corporate debts and liabilities have been fully settled.",
  },
  {
    q: "How long does it take to formally cancel a UAE Freezone trade license?",
    a: "The complete liquidation workflow takes between 4 to 8 weeks, which includes mandatory newspaper public opposition notices (where required by the specific Freezone) and FTA tax deregistration processing.",
  },
  {
    q: "What happens to the company bank account during liquidation?",
    a: "The corporate bank account must be fully liquidated. All outstanding supplier debts are paid, remaining corporate capital is transferred to shareholders' personal bank accounts, and an official Bank Closure Clearance Letter is issued for submission to the Freezone authority.",
  },
  {
    q: "Can a foreign shareholder liquidate a company without visiting Dubai physically?",
    a: "Yes! By issuing an attested Power of Attorney (POA) to a licensed corporate service provider like ADVAQ, foreign shareholders can complete company liquidation, visa cancellations, and tax deregistration remotely without traveling to the UAE.",
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
  headline: "How to Liquidate & Cancel a UAE Freezone Company License Legally (Step-by-Step)",
  description:
    "Complete 2026 legal liquidation masterclass roadmap for UAE Freezone companies. Learn board resolution drafting, visa cancellations, FTA tax deregistration, auditor reports, bank account closures, and trade license deregistration.",
  author: { "@type": "Organization", name: "ADVAQ UAE Legal Liquidation Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-to-liquidate-uae-freezone-company-license",
};

export const Route = createFileRoute("/blog/how-to-liquidate-uae-freezone-company-license")({
  head: () => ({
    meta: [
      { title: "How to Liquidate UAE Freezone Company License (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Step-by-step guide to liquidating a UAE Freezone company license legally. Board resolutions, visa cancellations, FTA tax deregistration, auditor reports & bank closure.",
      },
      {
        name: "keywords",
        content:
          "how to liquidate uae freezone company license, cancel dubai freezone company trade license, fta corporate tax vat deregistration uae, audit liquidation report bank account closure dubai",
      },
      {
        property: "og:title",
        content: "How to Liquidate & Cancel a UAE Freezone Company License Legally (Step-by-Step)",
      },
      {
        property: "og:description",
        content:
          "Master the legal liquidation process in the UAE to formally close your Freezone entity, cancel visas, and avoid blacklisting.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-liquidate-uae-freezone-company-license" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-liquidate-uae-freezone-company-license" }],
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
            <span>UAE Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            How to Liquidate & Cancel a UAE Freezone Company License Legally (Step-by-Step)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive legal closure roadmap for foreign investors on Board Resolutions for Dissolution, visa cancellations, FTA tax deregistration, liquidator audit reports, bank closures, and official certificate of cancellation issuance.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Legal Liquidation Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Commercial Companies Law Dissolution Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Liquidation Roadmap Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">1. Shareholder Resolution</strong>
              <p className="text-navy-100 leading-relaxed">
                Pass formal Board Resolution for dissolution and appoint an approved registered UAE liquidator.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">2. Visa Cancellations</strong>
              <p className="text-navy-100 leading-relaxed">
                Cancel all employee, partner, investor residence visas, and Ministry of Interior Establishment Cards.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">3. FTA Tax Deregistration</strong>
              <p className="text-navy-100 leading-relaxed">
                File final returns and obtain official VAT & Corporate Tax Deregistration Approval on EmaraTax.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">4. Bank & License Deregistration</strong>
              <p className="text-navy-100 leading-relaxed">
                Close business bank account, submit audited liquidator report, and receive Certificate of Cancellation.
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
            <li><a href="#why-formal-liquidation" className="hover:text-gold-600 underline">1. Why You Must Liquidate Legally (Dangers of Abandonment)</a></li>
            <li><a href="#liquidation-matrix" className="hover:text-gold-600 underline">2. Comprehensive Company Liquidation Workflow Matrix</a></li>
            <li><a href="#step-by-step-liquidation" className="hover:text-gold-600 underline">3. Step-by-Step Freezone Company Liquidation Workflow</a></li>
            <li><a href="#fta-tax-deregistration" className="hover:text-gold-600 underline">4. FTA Corporate Tax & VAT Deregistration Rules</a></li>
            <li><a href="#bank-closure" className="hover:text-gold-600 underline">5. Corporate Bank Account Closure & Asset Distribution</a></li>
            <li><a href="#advaq-solution" className="hover:text-gold-600 underline">6. ADVAQ End-to-End Liquidation Management</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-formal-liquidation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why You Must Liquidate Legally (Dangers of Abandonment)
          </h2>
          <p>
            Abandoning a UAE company entity without executing formal legal liquidation is a critical error for international investors.
          </p>
          <p>
            Under UAE Commercial Companies Law, simply letting a trade license expire without deregistration triggers cascading legal liabilities:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={16} />
              <span><strong>Compounding Renewal Fines:</strong> Freezone authorities accrue automatic monthly penalties ranging from AED 2,000 to AED 100,000+.</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={16} />
              <span><strong>MoHRE Labor Blacklisting:</strong> License holders face MoHRE blacklisting, blocking shareholders from launching new UAE entities.</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={16} />
              <span><strong>Immigration Travel Bans:</strong> Ministry of Interior (MoI) immigration holds prevent directors from entering the UAE.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="liquidation-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Comprehensive Company Liquidation Workflow Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of liquidation stages:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Liquidation Stage</th>
                  <th className="p-4 text-gold-500">Responsible Authority</th>
                  <th className="p-4 text-emerald-400">Required Clearances & Outputs</th>
                  <th className="p-4">Estimated Stage Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Stage 1: Board Resolution & Liquidator</td>
                  <td className="p-4 text-navy-900">Notary Public / Freezone Registrar</td>
                  <td className="p-4 text-emerald-700 font-bold">Appointed Liquidator Acceptance Letter</td>
                  <td className="p-4 text-navy-900">3 to 5 Business Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Stage 2: Residence Visa Cancellations</td>
                  <td className="p-4 text-navy-900">GDRFA & MoHRE Immigration</td>
                  <td className="p-4 text-emerald-700 font-bold">Visa Cancellation Stamps & E-Cards</td>
                  <td className="p-4 text-navy-900">5 to 7 Business Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Stage 3: Tax Deregistration</td>
                  <td className="p-4 text-navy-900">Federal Tax Authority (FTA)</td>
                  <td className="p-4 text-emerald-700 font-bold">FTA Tax Deregistration Certificate</td>
                  <td className="p-4 text-navy-900">10 to 20 Business Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Stage 4: Liquidator Audit & Gazette</td>
                  <td className="p-4 text-navy-900">Registered UAE Audit Firm</td>
                  <td className="p-4 text-emerald-700 font-bold">Audited Liquidator Report + Public Notice</td>
                  <td className="p-4 text-navy-900">14 to 30 Days (Freezone Specific)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Stage 5: License Deregistration</td>
                  <td className="p-4 text-navy-900">Freezone Authority / DET</td>
                  <td className="p-4 text-emerald-700 font-bold">Official Certificate of Cancellation</td>
                  <td className="p-4 text-navy-900">3 to 5 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            COMPANY LIQUIDATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Liquidate Your UAE Freezone Company with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages board resolutions, visa cancellations, FTA tax deregistration, audited liquidator reports, and official certificate of cancellation delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/trade-license-renewal"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Liquidation Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="step-by-step-liquidation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step Freezone Company Liquidation Workflow
          </h2>
          <p>
            Executing formal legal dissolution follows a 6-step workflow:
          </p>

          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 1: Board Resolution & Liquidator Appointment:</strong> Draft and notarize a formal Board Resolution declaring intent to dissolve the company and appointing a registered auditor as Liquidator.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 2: Visa Cancellations:</strong> Cancel all active investor, partner, and employee residence visas and cancel the MoI Establishment Card.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 3: Clearances Collection:</strong> Obtain clearance certificates from landlord/flexi-desk provider, customs, telecom (e&/du), and utility providers.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 4: FTA Tax Deregistration:</strong> Submit final VAT and Corporate Tax returns on EmaraTax and receive FTA Deregistration Approval.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 5: Liquidator's Audit Report:</strong> Submit the final audited Statement of Account prepared by the appointed liquidator.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 6: Cancellation Certificate:</strong> Pay final Freezone closing fees and receive the official Certificate of Cancellation.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 4 */}
        <div id="fta-tax-deregistration" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. FTA Corporate Tax & VAT Deregistration Rules
          </h2>
          <p>
            Under UAE federal tax laws, a business entity cannot complete trade license liquidation without first securing formal <strong>Tax Deregistration Approval</strong> from the Federal Tax Authority (FTA).
          </p>
          <p>
            The company must file final VAT201 returns and Corporate Tax returns for the short tax period ending on the liquidation date, settle any outstanding tax liabilities or penalties, and obtain an official FTA Deregistration Certificate.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="bank-closure" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Corporate Bank Account Closure & Asset Distribution
          </h2>
          <p>
            Once all creditor claims are satisfied, the company's corporate bank account must be closed.
          </p>
          <p>
            Remaining liquidation balances are transferred directly to shareholders' personal accounts according to their shareholding proportions, and an official <strong>Bank Account Closure Clearance Letter</strong> is issued for submission to the Freezone authority.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="advaq-solution" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. ADVAQ End-to-End Liquidation Management
          </h2>
          <p>
            ADVAQ provides a turn-key company liquidation service for foreign investors in Dubai and across all UAE Freezones.
          </p>
          <p>
            We manage board resolution drafting, visa cancellations, FTA tax deregistration filings, registered auditor reports, bank closures, and official License Cancellation Certificate delivery.
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
            UAE COMPANY DISSOLUTION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Liquidate Your UAE Freezone Entity Legally
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Board resolutions, visa cancellations, FTA tax deregistration, audited liquidator reports, and official license cancellation certificate delivery handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/trade-license-renewal"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Company Liquidation Package
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
