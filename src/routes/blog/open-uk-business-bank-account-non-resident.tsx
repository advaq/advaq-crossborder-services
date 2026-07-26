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
  Landmark,
  CreditCard,
  Globe2,
  FileCheck,
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
    q: "Can a non-UK resident open a traditional UK high-street bank account (like Barclays or HSBC)?",
    a: "Traditional UK high-street banks almost universally require directors to hold physical UK residency, provide UK proof of address, and attend an in-person branch interview in London. For non-residents living abroad, FCA-regulated digital fintech platforms like Wise Business, Payoneer, and Revolut Business are the recommended legal alternatives.",
  },
  {
    q: "Does a Wise Business or Payoneer account give me a real UK Sort Code and Account Number?",
    a: "Yes, 100%. Wise Business and Payoneer provide official UK Sort Codes and 8-digit Account Numbers in your UK LTD company's legal name, allowing you to receive domestic UK BACS/Faster Payments and international SWIFT transfers seamlessly.",
  },
  {
    q: "What documents are required to open a UK business bank account from overseas?",
    a: "You need your official UK Certificate of Incorporation (showing your 8-digit CRN), Memorandum & Articles of Association, valid director passport copy, proof of overseas residential address (bank statement or utility bill under 90 days old), and proof of business activity (website or invoice draft).",
  },
  {
    q: "How long does digital business bank account approval take for non-residents?",
    a: "FCA-regulated digital fintech platforms process non-resident UK LTD applications in 24 to 48 hours once all identity and company documents pass digital compliance review.",
  },
  {
    q: "Can I receive USD and EUR payments into my UK LTD bank account?",
    a: "Yes. Multi-currency business accounts provided by Wise Business and Payoneer allow you to hold, convert, and receive USD (with US routing number), EUR (with European IBAN), GBP, CAD, and AUD under a single corporate dashboard.",
  },
  {
    q: "Are deposits held in Wise Business protected by the UK FSCS?",
    a: "Wise is authorized by the Financial Conduct Authority (FCA) as an Electronic Money Institution (EMI). Rather than traditional FSCS deposit insurance, Wise safeguards 100% of customer funds in liquid, segregated accounts held at tier-1 systemic banks (such as JPMorgan Chase and Barclays).",
  },
  {
    q: "Can I get a physical corporate debit card shipped to my overseas address?",
    a: "Yes. Wise Business and Payoneer ship physical business Mastercard/Visa debit cards directly to international residential addresses in over 150 countries worldwide.",
  },
  {
    q: "Can I connect my non-resident UK business bank account to Stripe UK?",
    a: "Yes. Once your Wise Business or Payoneer GBP account details (Sort Code and Account Number) are issued, you can link them directly to Stripe UK or PayPal Business for automatic daily sales payouts.",
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
  headline: "How to Open a UK Business Bank Account for a Non-Resident Company",
  description:
    "Exhaustive 2026 guide for foreign directors on opening a UK business bank account remotely. Compare Wise Business, Revolut, Payoneer, and high-street banking rules.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/open-uk-business-bank-account-non-resident",
};

export const Route = createFileRoute("/blog/open-uk-business-bank-account-non-resident")({
  head: () => ({
    meta: [
      { title: "Open UK Business Bank Account for Non-Residents (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Step-by-step guide to opening a UK business bank account remotely for non-UK resident company directors. Wise, Payoneer, Revolut & KYC rules.",
      },
      {
        name: "keywords",
        content:
          "open uk business bank account non resident, uk business bank account for foreign company, wise business account uk ltd overseas, non resident bank account for uk limited company",
      },
      {
        property: "og:title",
        content: "How to Open a UK Business Bank Account for a Non-Resident Company",
      },
      {
        property: "og:description",
        content:
          "Discover how overseas founders open GBP, USD, and EUR business bank accounts for UK Limited Companies remotely without visiting London.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/open-uk-business-bank-account-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/open-uk-business-bank-account-non-resident" }],
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
            How to Open a UK Business Bank Account for a Non-Resident Company
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive 2026 masterclass for foreign directors on securing official UK Sort Codes, 8-digit GBP Account Numbers, multi-currency USD/EUR balances, and digital banking approvals remotely from abroad.
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
              <span>FCA & HMRC Compliant Banking Protocols</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Banking Summary (TL;DR)</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Opening a UK business account remotely from overseas is straightforward when leveraging FCA-regulated digital banking platforms:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">No UK Travel Required</strong>
              <p className="text-navy-100 leading-relaxed">
                Non-residents open business bank accounts 100% online through regulated UK FinTech platforms.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Top 3 Digital Banks</strong>
              <p className="text-navy-100 leading-relaxed">
                <strong>Wise Business</strong>, <strong>Payoneer</strong>, and <strong>Revolut Business</strong> offer highest approval rates for foreign-owned UK LTDs.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Official UK Account Details</strong>
              <p className="text-navy-100 leading-relaxed">
                Receive an official UK Sort Code, 8-digit Account Number, and IBAN issued in your company's legal name.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Fast Approval (24–48 Hrs)</strong>
              <p className="text-navy-100 leading-relaxed">
                Digital verification completes in 24 to 48 hours after uploading your Certificate of Incorporation and Passport.
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
            <li><a href="#challenge" className="hover:text-gold-600 underline">1. The Banking Challenge for Non-Resident Directors</a></li>
            <li><a href="#top-digital-banks" className="hover:text-gold-600 underline">2. Top 3 Digital Business Banking Platforms Compared</a></li>
            <li><a href="#banking-matrix" className="hover:text-gold-600 underline">3. Non-Resident Banking Provider Comparison Matrix</a></li>
            <li><a href="#required-documents" className="hover:text-gold-600 underline">4. Documents Required for Banking Verification</a></li>
            <li><a href="#application-steps" className="hover:text-gold-600 underline">5. Step-by-Step Bank Account Opening Workflow</a></li>
            <li><a href="#rejection-pitfalls" className="hover:text-gold-600 underline">6. 6 Critical Common Rejection Causes to Avoid</a></li>
            <li><a href="#stripe-integration" className="hover:text-gold-600 underline">7. Stripe UK & Payment Gateway Integration Guide</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="challenge" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Banking Challenge for Non-Resident Directors
          </h2>
          <p>
            Once your UK Limited Company is registered with Companies House, securing a commercial business bank account is the mandatory next step to invoice global clients, process credit card payments, and manage corporate funds.
          </p>
          <p>
            However, traditional UK high-street banks (Barclays, HSBC, Lloyds, NatWest) enforce strict internal compliance policies requiring company directors to be physical UK residents with a UK credit history and in-person London branch verification.
          </p>
          <p>
            Fortunately, the growth of <strong>FCA-regulated UK FinTech Electronic Money Institutions (EMIs)</strong> has transformed international corporate banking. Foreign directors operating from Pakistan, the UAE, the US, or elsewhere can legally open dedicated UK business accounts remotely in 24 to 48 hours.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Software Agency Banking Success
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Kamran, an IT agency founder in Pakistan. After forming "PixelTech Solutions LTD" in London, Kamran applied for a Wise Business account. Within 36 hours of uploading his Pakistani passport and UK Certificate of Incorporation, Kamran received an official UK Sort Code (56-00-36) and Account Number (#84920193), allowing him to invoice UK clients in GBP and US clients in USD with instant mid-market conversion.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="top-digital-banks" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Top 3 Digital Business Banking Platforms Compared
          </h2>
          <p>
            Detailed analysis of the top three digital business banking options for non-resident UK LTDs:
          </p>

          <div className="space-y-6 my-6">
            {/* WISE BUSINESS */}
            <div className="border border-border bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-navy-950 text-xl flex items-center gap-2">
                  <Landmark className="text-gold-600" size={22} /> Wise Business (Formerly TransferWise)
                </h3>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR & HIGHEST APPROVAL
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Wise Business is the gold standard for foreign-owned UK companies. It provides dedicated UK Sort Codes and Account Numbers, US Routing & Account Numbers, and European IBANs in over 40 currencies at mid-market exchange rates.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700 bg-off-white p-3.5 rounded-xl border border-border/50">
                <div>✓ <strong>UK Account Details:</strong> Sort Code & 8-digit Account Number</div>
                <div>✓ <strong>Multi-Currency:</strong> Hold GBP, USD, EUR, CAD, AUD</div>
                <div>✓ <strong>Accounting Sync:</strong> Connects to Xero, QuickBooks, FreeAgent</div>
                <div>✓ <strong>Setup Fee:</strong> One-time £45 account verification fee</div>
              </div>
            </div>

            {/* PAYONEER */}
            <div className="border border-border bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-navy-950 text-xl flex items-center gap-2">
                  <Globe2 className="text-gold-600" size={22} /> Payoneer for UK LTDs
                </h3>
                <span className="bg-navy-100 text-navy-800 text-xs font-bold px-3 py-1 rounded-full">
                  BEST FOR E-COMMERCE & FREELANCERS
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Payoneer provides receiving accounts in UK GBP, US USD, and EU EUR. It seamlessly integrates with Amazon UK, Upwork, Fiverr, eBay, and global B2B client invoicing systems.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700 bg-off-white p-3.5 rounded-xl border border-border/50">
                <div>✓ <strong>Marketplace Ready:</strong> Direct payouts from Upwork & Amazon</div>
                <div>✓ <strong>Debit Card:</strong> Physical & Virtual Mastercard shipped globally</div>
                <div>✓ <strong>Global Transfer:</strong> Withdraw funds to foreign local bank accounts</div>
                <div>✓ <strong>Setup Fee:</strong> Free to apply for UK LTD owners</div>
              </div>
            </div>

            {/* REVOLUT BUSINESS */}
            <div className="border border-border bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-navy-950 text-xl flex items-center gap-2">
                  <CreditCard className="text-gold-600" size={22} /> Revolut Business
                </h3>
                <span className="bg-navy-100 text-navy-800 text-xs font-bold px-3 py-1 rounded-full">
                  BEST FOR EUROPEAN & UK TRADE
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Revolut Business offers rapid digital onboarding, smart corporate employee cards, automated expense management, and multi-currency IBANs.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700 bg-off-white p-3.5 rounded-xl border border-border/50">
                <div>✓ <strong>Virtual Cards:</strong> Issue instant corporate debit cards</div>
                <div>✓ <strong>API Workflows:</strong> Automated mass payout integrations</div>
                <div>✓ <strong>Fast FX:</strong> Low-cost foreign exchange conversions</div>
                <div>✓ <strong>Setup Fee:</strong> Free tier available</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="banking-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Non-Resident Banking Provider Comparison Matrix
          </h2>
          <p>
            Side-by-side comparison of banking channels for overseas UK LTD owners:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Banking Provider</th>
                  <th className="p-4 text-gold-500">Non-Resident Approval Rate</th>
                  <th className="p-4 text-emerald-400">UK Sort Code & Account #</th>
                  <th className="p-4">Approval SLA Speed</th>
                  <th className="p-4">Overseas Card Shipping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Wise Business</td>
                  <td className="p-4 text-emerald-700 font-bold">Very High (95%+)</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (Dedicated Sort Code)</td>
                  <td className="p-4 text-navy-900">24 to 48 Hours</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (Shipped Worldwide)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Payoneer</td>
                  <td className="p-4 text-emerald-700 font-bold">High (90%+)</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (Receiving Account)</td>
                  <td className="p-4 text-navy-900">24 to 72 Hours</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (Mastercard Available)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Revolut Business</td>
                  <td className="p-4 text-navy-900">Medium (Requires approved jurisdictions)</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (UK Sort Code)</td>
                  <td className="p-4 text-navy-900">1 to 3 Business Days</td>
                  <td className="p-4 text-navy-900">Select Countries Only</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">High-Street Banks (Barclays/HSBC)</td>
                  <td className="p-4 text-rose-700 font-bold">Extremely Low (&lt;5% for non-residents)</td>
                  <td className="p-4 text-navy-900">Yes</td>
                  <td className="p-4 text-rose-700 font-bold">4 to 8 Weeks (Requires London Visit)</td>
                  <td className="p-4 text-navy-900">UK Residential Addresses Only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK FORMATION & BANKING ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your UK LTD & Bank Account Setup Package
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ includes complete digital business bank account application support with Wise Business & Payoneer alongside your UK incorporation package.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK Formation Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="required-documents" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Documents Required for Banking Verification
          </h2>
          <p>
            To satisfy FCA compliance rules, prepare the following official documents:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileCheck className="text-gold-600" size={18} />
                Official Corporate Pack Documents
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Certificate of Incorporation (showing your 8-digit CRN) and Memorandum & Articles of Association issued by Companies House.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileCheck className="text-gold-600" size={18} />
                Director Personal KYC Documents
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Valid director international passport photo page scan, and personal bank statement or utility bill issued within the last 90 days matching passport identity.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileCheck className="text-gold-600" size={18} />
                Business Model Proof
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Active business website URL, LinkedIn corporate profile, draft client invoice/contract, or Amazon seller dashboard proving legitimate commercial operations.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="application-steps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Step-by-Step Bank Account Opening Workflow
          </h2>
          <p>
            Follow this 4-step digital application sequence:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Submit Online Business Profile</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Create a corporate account on Wise or Payoneer entering your UK LTD company name, CRN number, and London registered office address.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Upload Identity & Corporate Documents</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Upload your passport scan, proof of residential address under 90 days, Certificate of Incorporation, and PSC ownership details.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Biometric Facial Verification</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Complete a 30-second smartphone liveness selfie scan to verify your face matches your passport photo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Receive UK Sort Code & Account Details</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Within 24 to 48 hours, your UK business account is activated, providing instant access to GBP Sort Codes and multi-currency balances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="rejection-pitfalls" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Rejection Causes & How to Avoid Them
          </h2>
          <p>
            Avoid these six frequent mistakes that cause bank compliance rejections:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Mismatched Address Details
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Ensure the address on your utility bill or personal bank statement matches the residential address entered in your application character for character.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Expired Proof of Address Documents
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Submitting a proof of address document issued more than 90 days prior causes immediate automated compliance rejection.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                3. High-Risk Industry Classification
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Operating in un-licensed financial services, unregulated FX trading, or crypto gambling triggers automatic bank rejections.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                4. Lack of Verifiable Commercial Web Presence
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Applying without a basic company website, LinkedIn profile, or client invoice template raises red flags for bank compliance examiners.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="stripe-integration" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Stripe UK & Merchant Payment Gateway Integration Guide
          </h2>
          <p>
            Once your Wise Business or Payoneer GBP account details (Sort Code and Account Number) are issued:
          </p>
          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Register Stripe UK:</strong> Create a Stripe UK merchant account using your 8-digit Company Registration Number (CRN).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Link GBP Bank Details:</strong> Enter your Wise/Payoneer GBP Sort Code and Account Number into Stripe payout settings.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Automatic Daily Payouts:</strong> Stripe processes credit card sales and remits funds directly to your UK business bank account within 2 business days.</span>
            </li>
          </ol>
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
            GET YOUR UK COMPANY & BANK ACCOUNT READY
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Start Your UK Business with ADVAQ Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            From Companies House incorporation and London registered address to digital business bank account setup support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Formation & Banking Setup — £99
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
