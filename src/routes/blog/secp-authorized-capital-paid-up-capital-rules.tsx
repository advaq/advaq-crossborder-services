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
  DollarSign,
  Briefcase,
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "What is the difference between Authorized Capital and Paid-Up Capital under SECP rules?",
    a: "Authorized Capital is the maximum amount of share capital a company is legally authorized to issue under its Memorandum of Association. Paid-Up Capital is the actual cash money injected by shareholders into the company's corporate bank account for issued shares.",
  },
  {
    q: "Is there a minimum Paid-Up Capital requirement for SECP incorporation in Pakistan?",
    a: "No! Under the Companies Act 2017, SECP removed fixed minimum paid-up capital requirements for general Private Limited and SMC-Pvt Ltd companies. You can incorporate a startup with any initial capital (e.g. Authorized Capital of PKR 100,000). Specific licensed sectors such as NBFCs, Insurance, and Security Services retain statutory minimum capital floors.",
  },
  {
    q: "What is the recommended Authorized Capital for a new tech startup or agency in Pakistan?",
    a: "Most IT startups, software houses, and small agencies incorporate with an initial Authorized Capital of PKR 100,000 (divided into 10,000 shares of PKR 10 each). This minimizes initial SECP registration fees while providing adequate shares for initial founding equity splits.",
  },
  {
    q: "How many days do shareholders have to deposit Paid-Up Capital after incorporation?",
    a: "Under Section 85 of the Companies Act 2017, subscribers must deposit the full subscribed share capital into the company's corporate bank account within 30 days of receiving the SECP Certificate of Incorporation, and file Form 22 (Auditor Certificate of Paid-Up Capital) within 45 days.",
  },
  {
    q: "How can a company increase its Authorized Capital with SECP later when raising investment?",
    a: "To increase Authorized Capital, the company passes a Special Resolution amending Clause V of its Memorandum of Association, submits SECP Form 7 via eServices, and pays the incremental SECP registration fee based on the newly expanded capital ceiling.",
  },
  {
    q: "What is Form 22 and who must issue the Auditor Certificate for SECP?",
    a: "Form 22 is a mandatory SECP statutory return certifying that subscribers have deposited their share capital into the corporate bank account. It must be accompanied by a formal verification certificate issued by a practicing Chartered Accountant firm.",
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
  headline: "Minimum Paid-Up Capital & Shareholder Rules for SECP Incorporation",
  description:
    "Complete 2026 SECP capital structure masterclass for Pakistani companies. Detailed analysis of Authorized Capital vs Paid-Up Capital rules under Companies Act 2017, Form 22 auditor certificate deadlines, 30-day bank deposit mandates, and Form 7 capital expansion procedures.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Corporate Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/secp-authorized-capital-paid-up-capital-rules",
};

export const Route = createFileRoute("/blog/secp-authorized-capital-paid-up-capital-rules")({
  head: () => ({
    meta: [
      { title: "SECP Authorized & Paid-Up Capital Rules (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "SECP Authorized Capital vs Paid-Up Capital rules in Pakistan. Minimum capital requirements, Form 22 auditor certificate deadline, 30-day bank deposit timeline & Form 7 capital increase.",
      },
      {
        name: "keywords",
        content:
          "secp authorized capital paid up capital rules, secp minimum paid up capital requirement pvt ltd, form 22 auditor certificate paid up capital timeline secp, increase authorized capital form 7 secp pakistan, companies act 2017 section 85 share capital",
      },
      {
        property: "og:title",
        content: "Minimum Paid-Up Capital & Shareholder Rules for SECP Incorporation",
      },
      {
        property: "og:description",
        content:
          "Master SECP share capital rules, Authorized vs Paid-Up capital limits, Form 22 auditor certificates, and bank deposit deadlines.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/secp-authorized-capital-paid-up-capital-rules" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/secp-authorized-capital-paid-up-capital-rules" }],
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
            Minimum Paid-Up Capital & Shareholder Rules for SECP Incorporation
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive capital structuring blueprint for business owners, SaaS founders, and corporate directors detailing SECP Authorized Capital rules, Paid-Up Capital bank deposit mandates, Form 22 auditor certificates, and share value allocations under the Companies Act 2017.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Corporate Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SECP Companies Act 2017 Section 85 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>SECP Capital Structure Key Takeaways</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Authorized Capital Ceiling</strong>
              <p className="text-navy-100 leading-relaxed">
                The maximum share capital headroom registered in Clause V of your Memorandum (Default: PKR 100,000 divided into 10,000 shares of PKR 10 each). Determines initial SECP incorporation fee.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Paid-Up Capital & Form 22 Mandate</strong>
              <p className="text-navy-100 leading-relaxed">
                Actual cash money deposited into the corporate bank account within 30 days of incorporation. Must be verified by a Chartered Accountant via SECP Form 22 within 45 days.
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
            <li><a href="#fundamental-concepts" className="hover:text-gold-600 underline">1. Fundamental Capital Concepts under Companies Act 2017</a></li>
            <li><a href="#minimum-capital-rules" className="hover:text-gold-600 underline">2. SECP Statutory Minimum Capital Rules for Startups</a></li>
            <li><a href="#deposit-mandate" className="hover:text-gold-600 underline">3. The 30-Day Capital Deposit Mandate & Banking Protocol</a></li>
            <li><a href="#form22-auditor-certificate" className="hover:text-gold-600 underline">4. SECP Form 22 & Chartered Accountant Verification</a></li>
            <li><a href="#increasing-authorized-capital" className="hover:text-gold-600 underline">5. How to Increase Authorized Capital via Form 7</a></li>
            <li><a href="#share-allotment-procedures" className="hover:text-gold-600 underline">6. Share Allotments & Provincial Stamp Duty Rules</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="fundamental-concepts" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Fundamental Capital Concepts under Companies Act 2017
          </h2>
          <p>
            When incorporating a Private Limited company or Single Member Company (SMC-Pvt Ltd) with the <strong>Securities and Exchange Commission of Pakistan (SECP)</strong>, understanding share capital definitions under Section 85 of the <strong>Companies Act 2017</strong> is essential:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-1">A. Authorized Share Capital</strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                The maximum financial limit of share capital a company is legally authorized to issue to shareholders, as specified in Clause V of its Memorandum of Association. SECP government incorporation fees are calculated based on this figure.
              </p>
            </div>

            <div className="p-5 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-1">B. Subscribed Share Capital</strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                The portion of Authorized Capital that the founding subscribers formally pledge to purchase upon signing the company incorporation documents.
              </p>
            </div>

            <div className="p-5 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-1">C. Paid-Up Share Capital</strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                The actual liquid cash money transferred by subscribers from their personal bank accounts into the newly opened corporate bank account to pay for their allotted shares.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="minimum-capital-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. SECP Statutory Minimum Capital Rules for Startups
          </h2>
          <p>
            Under the repealed Companies Ordinance 1984, companies faced rigid minimum paid-up capital floors. To foster entrepreneurship, SECP completely abolished minimum capital requirements for general private limited entities under the <strong>Companies Act 2017</strong>.
          </p>
          <p>
            Today, a tech startup, software house, digital marketing agency, or consulting firm can legally incorporate with an initial Authorized Capital of <strong>PKR 100,000</strong> (10,000 ordinary shares valued at PKR 10 per share).
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
            <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm mb-1">
              <AlertTriangle size={16} />
              <span>Regulated Sector Exceptions:</span>
            </div>
            <p className="text-amber-900 text-xs leading-relaxed">
              Special licensed business sectors retain mandatory statutory minimum capital floors enforced by specialized regulators:
              <br />
              • <strong>Non-Banking Finance Companies (NBFC):</strong> PKR 20 Million to PKR 100 Million+
              <br />
              • <strong>Security Guard Agencies:</strong> PKR 15 Million
              <br />
              • <strong>Insurance Companies:</strong> PKR 300 Million+
            </p>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            SECP CAPITAL STRUCTURING & FORM 22 SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Structure Your SECP Share Capital with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ assists Pakistani founders with share capital allocations, Form 22 Chartered Accountant verifications, and Form 7 capital expansion filings.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Capital Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="deposit-mandate" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. The 30-Day Capital Deposit Mandate & Banking Protocol
          </h2>
          <p>
            Under Section 85(1) of the Companies Act 2017, subscribers who pledge share capital during incorporation are under a strict legal obligation to pay for their shares:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>30-Day Mandatory Deposit Deadline:</strong> Within 30 days from the date of receiving the official SECP Certificate of Incorporation, every subscriber must deposit their subscribed share capital amount in cash or online bank transfer into the company's newly opened corporate bank account.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Individual Bank Transfer Verification:</strong> Deposits must originate from the personal bank account of each respective subscriber matching their registered CNIC/NICOP. Cash deposits must bear the subscriber's name on the bank deposit slip.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="form22-auditor-certificate" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. SECP Form 22 & Chartered Accountant Verification
          </h2>
          <p>
            Depositing money into the bank account is not enough to satisfy SECP requirements. The company must report the capital deposit to SECP via <strong>Form 22</strong>:
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <FileText size={18} />
              Form 22 Statutory Filing Requirements:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              • <strong>Filing Deadline:</strong> Must be submitted on SECP eServices within 45 days of incorporation.
              <br /><br />
              • <strong>Auditor Certificate:</strong> Must be accompanied by a formal certificate issued by a practicing Chartered Accountant (CA) or Cost and Management Accountant (CMA) confirming inspection of the company's bank statement.
              <br /><br />
              • <strong>Non-Compliance Penalties:</strong> Failure to file Form 22 within 45 days triggers automatic late filing fines and prevents the company from filing subsequent annual returns (Form A).
            </p>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="increasing-authorized-capital" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How to Increase Authorized Capital via Form 7
          </h2>
          <p>
            As your business expands or prepares for equity financing from venture capital funds, your current Authorized Capital of PKR 100,000 may prove insufficient. To issue new shares, you must increase your Authorized Capital:
          </p>

          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 1: Convene Board Meeting & AGM/EGM</strong>
              <p className="text-xs text-gray-600">The Board of Directors passes a resolution recommending an increase in Authorized Capital (e.g. from PKR 100,000 to PKR 10,000,000) and calls an Extraordinary General Meeting (EGM).</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 2: Pass Special Resolution</strong>
              <p className="text-xs text-gray-600">Shareholders pass a Special Resolution approving the amendment to Clause V of the Memorandum of Association.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 3: File SECP Form 7 via eServices</strong>
              <p className="text-xs text-gray-600">Submit Form 7 (Notice of Increase in Authorized Capital) on SECP eServices within 15 days, paying the incremental fee schedule based on the new capital bracket.</p>
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
            SECP CAPITAL COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Manage SECP Capital Filings with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Authorized capital structuring, Form 22 auditor verification certificates, Form 7 capital increases, and share transfer compliance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Capital Filing Service
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
