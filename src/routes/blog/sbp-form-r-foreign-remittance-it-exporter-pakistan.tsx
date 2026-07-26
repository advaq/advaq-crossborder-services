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
    q: "What is SBP Form R in Pakistan banking?",
    a: "Form R (Remittance Form) is a mandatory State Bank of Pakistan (SBP) foreign exchange declaration form processed electronically by commercial banks whenever international funds (USD, EUR, GBP) land in a Pakistani corporate or individual bank account.",
  },
  {
    q: "Why is Form R classification critical for IT exporters and software houses?",
    a: "Properly tagging incoming foreign wire transfers under official IT & ITeS Export Purpose Codes (such as 9186 for Software Consulting or 9187 for Custom Software Export) ensures your proceeds qualify for the 0.25% Section 154A reduced tax rate and triggers 50% credit into your FCVA dollar account.",
  },
  {
    q: "What is a Foreign Inward Remittance Certificate (FIRC) / Electronic Proceed Realization Certificate (e-PRC)?",
    a: "An e-PRC is an official digital certificate issued by your commercial bank confirming the foreign currency amount received, conversion exchange rate, beneficiary NTN, and SBP purpose code for an incoming export wire. It serves as primary evidence during FBR income tax audits.",
  },
  {
    q: "Can software houses receive export remittances via Payoneer, Wise, or Stripe?",
    a: "Yes! Foreign proceeds withdrawn from third-party merchant platforms (Payoneer, Wise, Stripe, Upwork) qualify as legitimate IT export earnings under SBP regulations, provided your receiving bank issues a valid e-PRC carrying an official IT export purpose code.",
  },
  {
    q: "How long does a bank take to issue an e-PRC certificate in Pakistan?",
    a: "Most commercial banks (HBL, Meezan Bank, Bank Alfalah, Faysal Bank) issue electronic PRCs (e-PRC) through their online banking portals or FOREX desks within 24 to 48 hours of export funds being realized in your account.",
  },
  {
    q: "What happens if a bank misclassifies an IT export remittance as a personal family remittance?",
    a: "If misclassified under home remittance codes (e.g. Code 9999), FBR will treat the funds as standard taxable income subject to normal tax rates (up to 35%) instead of the 0.25% Section 154A IT export rate. You must request your bank FOREX desk to issue a Purpose Code Rectification letter.",
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
  headline: "State Bank of Pakistan (SBP) Form R & Foreign Remittances Guide for Software Houses",
  description:
    "Complete 2026 SBP foreign remittance compliance masterclass for Pakistani software houses & IT exporters. Detailed guide on Form R processing, SBP purpose codes (9186/9187/9188), Electronic Proceed Realization Certificates (e-PRC), and Payoneer/Wise proceeds realization.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Foreign Exchange Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan",
};

export const Route = createFileRoute("/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan")({
  head: () => ({
    meta: [
      { title: "SBP Form R & Foreign Remittance Guide IT Exporters (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "State Bank of Pakistan (SBP) Form R & foreign remittance guide for software houses. Learn SBP purpose codes 9186/9187, e-PRC certificates & Payoneer/Wise rules.",
      },
      {
        name: "keywords",
        content:
          "sbp form r foreign remittance IT exporter pakistan, sbp purpose code 9186 software export, e-prc proceed realization certificate pakistan bank, payoneer wise stripe IT export remittance sbp, foreign exchange manual chapter 14 pakistan",
      },
      {
        property: "og:title",
        content: "State Bank of Pakistan (SBP) Form R & Foreign Remittances Guide for Software Houses",
      },
      {
        property: "og:description",
        content:
          "Master State Bank of Pakistan Form R procedures, SBP IT export purpose codes, and e-PRC certificates to protect your 0.25% tax status.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/sbp-form-r-foreign-remittance-it-exporter-pakistan" }],
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
            State Bank of Pakistan (SBP) Form R & Foreign Remittances Guide for Software Houses
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical foreign exchange compliance masterclass for Pakistani software houses, IT agencies, and SaaS founders on State Bank of Pakistan (SBP) Form R processing, purpose code selection, and Proceed Realization Certificate (PRC) management under SBP FE Manual rules.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Foreign Exchange Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>State Bank of Pakistan FE Manual Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>SBP Remittance Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Form R Declaration Mandate</strong>
              <p className="text-navy-100 leading-relaxed">
                Electronic declaration processed by commercial bank FOREX desks whenever foreign currency (USD, EUR, GBP) is credited to a Pakistani account.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Key SBP IT Purpose Codes</strong>
              <p className="text-navy-100 leading-relaxed">
                Code 9186 (Software Consultancy), Code 9187 (Software Export), and Code 9188 (Data Processing & Hosting).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Electronic e-PRC Certificates</strong>
              <p className="text-navy-100 leading-relaxed">
                Digital proof of foreign currency realization required to claim 0.25% Section 154A IT export tax credits during FBR audits.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Merchant Payout Realization</strong>
              <p className="text-navy-100 leading-relaxed">
                Payoneer, Wise, and Stripe payouts must be tagged under IT export purpose codes to unlock 50% FCVA dollar retention.
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
            <li><a href="#what-is-form-r" className="hover:text-gold-600 underline">1. What Is SBP Form R & How Banking Systems Process Inflows</a></li>
            <li><a href="#sbp-purpose-codes" className="hover:text-gold-600 underline">2. Official SBP Purpose Codes for IT & Software Exports</a></li>
            <li><a href="#eprc-issuance" className="hover:text-gold-600 underline">3. Electronic Proceed Realization Certificates (e-PRC)</a></li>
            <li><a href="#third-party-payouts" className="hover:text-gold-600 underline">4. Managing Payoneer, Wise & Stripe Remittances</a></li>
            <li><a href="#fcva-link" className="hover:text-gold-600 underline">5. Linking Form R Realization to SBP 50% FCVA Accounts</a></li>
            <li><a href="#banking-errors" className="hover:text-gold-600 underline">6. Common Banking Errors & FBR Audit Risks</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-form-r" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is SBP Form R & How Banking Systems Process Inflows
          </h2>
          <p>
            In Pakistan's foreign exchange ecosystem regulated by the <strong>State Bank of Pakistan (SBP)</strong> under Chapter 14 of the Foreign Exchange Manual, every incoming international wire transfer must be declared through <strong>Form R (Remittance Form)</strong>.
          </p>
          <p>
            When a foreign client wire transfers funds from the US, UK, EU, or UAE, your commercial bank's Foreign Exchange (FOREX) department acts as an Authorized Dealer. The bank requires the account holder to declare the precise nature and purpose of the incoming funds.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="sbp-purpose-codes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Official SBP Purpose Codes for IT & Software Exports
          </h2>
          <p>
            Tagging foreign wire transfers under the correct SBP Purpose Code is the single most critical step in safeguarding your company's IT export tax status:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">SBP Purpose Code</th>
                  <th className="p-4 text-gold-500">Official SBP Description</th>
                  <th className="p-4">Eligible Services & Business Activities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Code 9186</td>
                  <td className="p-4 font-bold text-navy-950">Software Consultancy Services</td>
                  <td className="p-4">IT consulting, software architecture, tech advisory, system integration.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Code 9187</td>
                  <td className="p-4">Computer Software Export</td>
                  <td className="p-4">Custom software development, mobile app coding, web development, SaaS subscriptions.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Code 9188</td>
                  <td className="p-4">Data Processing & Hosting Services</td>
                  <td className="p-4">Cloud hosting, database management, data entry, DevOps, infrastructure management.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Code 9189</td>
                  <td className="p-4">Other IT & Call Center Services</td>
                  <td className="p-4">Inbound/outbound call center operations, BPO, virtual assistant services, digital marketing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SBP REMITTANCE & BANKING ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Optimize Your IT Remittances with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ assists software houses with bank Form R tagging, e-PRC collection, Payoneer/Wise proceeds realization, and 50% FCVA account management.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/pseb-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Remittance Advisory Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="eprc-issuance" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Electronic Proceed Realization Certificates (e-PRC)
          </h2>
          <p>
            An <strong>Electronic Proceed Realization Certificate (e-PRC)</strong> is an official digital record issued by commercial banks in Pakistan upon realizing foreign exchange funds:
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <FileText size={18} />
              Mandatory Fields on a Valid e-PRC:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              1. <strong>Beneficiary Details:</strong> Company Name & 7-digit Corporate NTN / CNIC.
              <br /><br />
              2. <strong>Remitter Details:</strong> Foreign Client Name & Foreign Bank Country.
              <br /><br />
              3. <strong>Financial Data:</strong> Foreign Currency Amount (USD), Conversion Exchange Rate, & Equivalent PKR Realized.
              <br /><br />
              4. <strong>SBP Purpose Code:</strong> Explicit SBP Purpose Code (e.g. 9186 or 9187).
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="third-party-payouts" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Managing Payoneer, Wise & Stripe Remittances
          </h2>
          <p>
            Thousands of Pakistani software houses and IT freelancers receive client payments via third-party fintech platforms such as Payoneer, Wise, Stripe, or Upwork.
          </p>
          <p>
            When withdrawing funds from Payoneer or Wise to your Pakistani commercial bank account (Meezan, HBL, Bank Alfalah), banks sometimes default to tagging incoming transfers as "Personal Inward Remittance" (Purpose Code 9999).
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm mb-1">
              <AlertTriangle size={16} />
              <span>How to Fix Fintech Payout Tagging:</span>
            </div>
            <p className="text-amber-900 text-xs leading-relaxed">
              To preserve your 0.25% Section 154A IT export tax credit, submit your Payoneer/Wise withdrawal invoice and client contract to your bank FOREX officer, requesting that the incoming remittance be tagged under Purpose Code 9187 with an e-PRC issued accordingly.
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
            SBP FOREIGN EXCHANGE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your SBP e-PRC Certificates
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Form R compliance, SBP purpose code tagging, e-PRC collection, and 0.25% FBR tax return filing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/pseb-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SBP Remittance Service
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
