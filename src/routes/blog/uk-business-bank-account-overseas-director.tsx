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
  ShieldAlert,
  FileCheck,
  Zap,
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
    q: "Why do Barclays, HSBC, Lloyds, and NatWest reject overseas company directors?",
    a: "Traditional UK high-street banks rely on legacy risk-scoring models that require directors to hold a physical UK residential address, possess a UK credit footprint, and attend an in-person branch interview in London for Anti-Money Laundering (AML) verification.",
  },
  {
    q: "Can I open a high-street UK bank account if I travel to London in person?",
    a: "Even if you travel to London, high-street banks generally refuse to open business accounts unless at least one executive director is a tax resident of the UK with valid UK proof of address (utility bill or tenancy agreement).",
  },
  {
    q: "What is the legal difference between an FCA-regulated EMI FinTech and a traditional bank?",
    a: "Electronic Money Institutions (EMIs) like Wise Business and Payoneer are authorized by the UK Financial Conduct Authority (FCA). While they do not lend money like credit banks, they store 100% of customer funds in ring-fenced safeguarding accounts with major systemic banks (like Barclays or JPMorgan Chase).",
  },
  {
    q: "How can non-residents satisfy FinTech KYC identity checks on the first attempt?",
    a: "Provide a high-resolution color passport scan, a personal bank statement issued within the last 90 days matching your passport name exactly, and ensure your business website clearly describes your professional services.",
  },
  {
    q: "Will my UK LTD company account be closed if I move to another country?",
    a: "FCA-regulated FinTech accounts are designed for international mobility. As long as you maintain your updated passport and residential address proof in your user portal, your UK LTD company account remains fully active.",
  },
  {
    q: "Are deposits held in Wise Business protected for non-residents?",
    a: "Wise is regulated by the FCA under the Electronic Money Regulations 2011. Rather than FSCS deposit insurance up to £85k, Wise safeguards 100% of customer balances in liquid, segregated accounts held at tier-1 UK banks.",
  },
  {
    q: "Can a foreign director connect a Wise Business account to Stripe UK?",
    a: "Yes. Wise Business provides official UK Sort Codes and 8-digit Account Numbers that integrate directly with Stripe UK or PayPal Business for automatic daily merchant payouts.",
  },
  {
    q: "How long does digital KYC verification take for non-resident directors?",
    a: "FCA-regulated digital FinTech platforms process non-resident business applications in 24 to 48 hours once all identity and company documents pass automated biometric review.",
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
  headline: "Why Traditional UK High Street Banks Reject Overseas Directors (KYC Solutions)",
  description:
    "Exhaustive compliance guide explaining why Barclays, HSBC, Lloyds reject non-resident directors and how foreign UK LTD owners secure approved banking solutions.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uk-business-bank-account-overseas-director",
};

export const Route = createFileRoute("/blog/uk-business-bank-account-overseas-director")({
  head: () => ({
    meta: [
      { title: "Why High Street Banks Reject Overseas Directors (KYC Solutions) | ADVAQ" },
      {
        name: "description",
        content:
          "Discover why traditional UK banks reject foreign directors & how non-residents pass FCA digital KYC verification to open approved UK business bank accounts.",
      },
      {
        name: "keywords",
        content:
          "uk business bank account overseas director, barclays non resident uk business account, hsbc uk business account foreign director, uk bank account rejection overseas founder",
      },
      {
        property: "og:title",
        content: "Why Traditional UK High Street Banks Reject Overseas Directors (KYC Solutions)",
      },
      {
        property: "og:description",
        content:
          "Understand the AML compliance barriers enforced by traditional banks and how non-UK founders legally bypass them using FCA-regulated digital business accounts.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-business-bank-account-overseas-director" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-business-bank-account-overseas-director" }],
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
            Why Traditional UK High Street Banks Reject Overseas Directors (KYC Solutions)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An insider legal compliance breakdown explaining why traditional banks reject non-resident directors, and how overseas founders secure 100% approved digital UK business accounts in 2026.
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
              <span>FCA & AML Compliance Analysis</span>
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
            Understanding why high-street banks decline foreign directors and how digital FinTechs solve non-resident KYC:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">The High-Street Barrier</strong>
              <p className="text-navy-100 leading-relaxed">
                Traditional UK banks (Barclays, HSBC, Lloyds) reject 98% of overseas directors due to strict UK physical residency requirements.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Legacy Risk Scoring</strong>
              <p className="text-navy-100 leading-relaxed">
                High-street banks lack international remote identity verification software and enforce legacy AML risk profiles.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">The Approved Solution</strong>
              <p className="text-navy-100 leading-relaxed">
                Non-residents use <strong>FCA-regulated Electronic Money Institutions (EMIs)</strong> like Wise Business or Payoneer.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Full Safeguarded Protection</strong>
              <p className="text-navy-100 leading-relaxed">
                EMI accounts issue official UK Sort Codes & Account Numbers under liquid ring-fenced safeguarding regulations.
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
            <li><a href="#why-rejection" className="hover:text-gold-600 underline">1. Why High Street Banks Automatically Reject Non-Residents</a></li>
            <li><a href="#aml-regulations" className="hover:text-gold-600 underline">2. UK AML & KYC Regulatory Obstacles Explained</a></li>
            <li><a href="#credit-footprint" className="hover:text-gold-600 underline">3. The UK Credit Footprint & Electoral Roll Catch-22</a></li>
            <li><a href="#rejection-matrix" className="hover:text-gold-600 underline">4. Bank Rejection vs FinTech Approval Matrix</a></li>
            <li><a href="#the-solution" className="hover:text-gold-600 underline">5. The Proven KYC Solution: FCA-Regulated Digital EMIs</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Mistakes That Cause FinTech Account Rejections</a></li>
            <li><a href="#approval-checklist" className="hover:text-gold-600 underline">7. Step-by-Step Approval Checklist for Foreign Directors</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-rejection" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why High Street Banks Automatically Reject Non-Residents
          </h2>
          <p>
            One of the most frustrating hurdles for overseas founders is incorporating a legitimate UK Limited Company with Companies House, only to have major UK high-street banks (Barclays, HSBC UK, Lloyds, NatWest, Santander) decline their business account application.
          </p>
          <p>
            This rejection is almost never related to your business model or personal integrity. Rather, it is a structural byproduct of how legacy UK commercial banking underwriting systems operate.
          </p>

          <div className="bg-red-50 border border-red-200 p-6 rounded-2xl space-y-3 my-6">
            <h4 className="font-bold text-red-900 text-base flex items-center gap-2">
              <ShieldAlert size={20} className="text-red-600" />
              The High-Street Bank Underwriting Mandate
            </h4>
            <p className="text-xs text-red-800 leading-relaxed">
              High-street banks operate under underwriting software that requires <strong>at least one executive director and major shareholder (25%+) to reside permanently inside the UK</strong> and possess a UK credit footprint. If all directors reside overseas (e.g., in Pakistan, UAE, USA, India), the software automatically flags the application as high-risk and issues a rejection notice.
            </p>
          </div>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: The London Branch Rejection
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Rashid, an e-commerce director in Dubai. Rashid traveled to London in person and visited a major HSBC branch to open a business account for his UK LTD. Despite bringing his passport and Certificate of Incorporation, the branch manager declined his application because Rashid could not produce a personal UK utility bill or UK council tax statement in his name.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="aml-regulations" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. UK AML & KYC Regulatory Obstacles Explained
          </h2>
          <p>
            Under the UK <em>Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017 (MLR 2017)</em>, UK financial institutions must perform rigorous <strong>Enhanced Due Diligence (EDD)</strong> on foreign non-resident corporate accounts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Landmark className="text-gold-600" size={18} />
                In-Person Branch Attendance Mandates
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Traditional high-street banks rely on branch personnel to physically verify original passports and perform face-to-face compliance interviews.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileCheck className="text-gold-600" size={18} />
                UK Personal Proof of Address Enforcement
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Traditional banks require a UK utility bill, tenancy agreement, or council tax statement in the director's personal name—documents non-residents do not possess.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="credit-footprint" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. The UK Credit Footprint & Electoral Roll Catch-22
          </h2>
          <p>
            High-street banks run automated credit bureau checks via Experian, Equifax, and TransUnion during business account applications.
          </p>
          <p>
            Because non-UK residents do not appear on the UK Electoral Roll and lack a UK credit history score, the automated system assigns an "insufficient credit data" rating, triggering automatic rejection without human review.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="rejection-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Bank Rejection vs FinTech Approval Matrix
          </h2>
          <p>
            Side-by-side comparison of compliance evaluation between high-street banks and FCA FinTechs:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Compliance Parameter</th>
                  <th className="p-4 text-rose-400">Traditional High-Street Banks</th>
                  <th className="p-4 text-emerald-400">FCA-Regulated Digital EMIs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">UK Physical Residency Mandate</td>
                  <td className="p-4 text-rose-700 font-bold">Required (100% Mandatory)</td>
                  <td className="p-4 text-emerald-700 font-bold">Not Required (100% Remote)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">In-Person London Branch Visit</td>
                  <td className="p-4 text-rose-700 font-bold">Required</td>
                  <td className="p-4 text-emerald-700 font-bold">Not Required (Digital Selfie KYC)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">UK Residential Proof of Address</td>
                  <td className="p-4 text-rose-700 font-bold">Required (UK Utility/Tax Bill)</td>
                  <td className="p-4 text-emerald-700 font-bold">Accepts Overseas Residential Address</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">UK Credit Bureau History Check</td>
                  <td className="p-4 text-rose-700 font-bold">Required (Experian/Equifax)</td>
                  <td className="p-4 text-emerald-700 font-bold">Bypassed (AML Identity Scan Only)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Non-Resident Approval SLA</td>
                  <td className="p-4 text-rose-700 font-bold">&lt; 2% Approval Rate</td>
                  <td className="p-4 text-emerald-700 font-bold">95%+ Approval Rate in 24–48 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            GUARANTEED UK BANKING SOLUTIONS
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your Approved UK LTD & Bank Account Package
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ structures your UK LTD incorporation with pre-verified digital business bank application support, ensuring 100% approval for overseas directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UK Formation Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="the-solution" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. The Proven KYC Solution: FCA-Regulated Digital EMIs
          </h2>
          <p>
            The legal compliance solution used by international entrepreneurs worldwide is applying to <strong>UK FCA-regulated Electronic Money Institutions (EMIs)</strong> such as <strong>Wise Business</strong> and <strong>Payoneer</strong>:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Check className="text-gold-600" size={18} />
                Remote Biometric Facial KYC
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Uses smartphone liveness facial recognition and high-resolution passport chip scanning instead of physical branch visits.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Check className="text-gold-600" size={18} />
                International Proof of Address Acceptance
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Accepts overseas personal bank statements or utility bills issued in Pakistan, UAE, US, or elsewhere.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Check className="text-gold-600" size={18} />
                Official UK Sort Code & Account Credentials
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Issues dedicated UK Sort Codes (e.g. 56-00-36), 8-digit Account Numbers, and IBANs in your company's legal name.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Mistakes That Cause FinTech Account Rejections
          </h2>
          <p>
            Avoid these six frequent identity verification errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Cropped Passport Photos with Flash Glare
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Submitting passport scans missing corners or obscured by flash glare triggers automated KYC OCR extraction failures.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Outdated Residential Address Proof
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Providing personal bank statements or utility bills issued more than 90 days prior causes immediate compliance rejection.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="approval-checklist" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Step-by-Step Approval Checklist for Foreign Directors
          </h2>
          <p>
            Follow this step-by-step checklist to guarantee first-time digital bank approval:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Un-cropped Color Passport PDF</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Ensure all 4 corners of your international passport photo page are clearly visible without reflections.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Fresh Electronic Bank Statement (&lt;90 Days)</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Download an official electronic PDF bank statement displaying your full legal name and overseas residential address.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Verifiable Digital Business Presence</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Compliance examiners check that your company offers legitimate B2B services via your business website or LinkedIn profile.
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
            GET YOUR APPROVED UK BUSINESS BANK ACCOUNT
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UK LTD with ADVAQ Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Incorporation, London registered office address, HMRC tax setup, and guaranteed digital banking support for £99.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Formation Package — £99
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
