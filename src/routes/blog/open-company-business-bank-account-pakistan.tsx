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
  Landmark,
  CreditCard,
  FileCheck,
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What documents are required to open a corporate business bank account in Pakistan for a SECP company?",
    a: "You must present: (1) Certified True Copies of SECP Certificate of Incorporation, Memorandum & Articles of Association (MOA & AOA), (2) SECP e-Forms: Form 1, Form 21 (Registered Office), and Form 29 (Directors), (3) FBR Corporate NTN Certificate, (4) Original CNICs of all directors and authorized signatories, (5) Formal Board Resolution passed by directors, and (6) Company rubber stamp.",
  },
  {
    q: "Which bank is best for IT companies and software houses in Pakistan?",
    a: "Top Pakistani banks for IT exporters and software houses include Meezan Bank, Habib Bank Limited (HBL), Bank Alfalah, and Faysal Bank due to their dedicated IT export desks, automated e-PRC generation, and fast setup for SBP 50% FCVA dollar retention accounts.",
  },
  {
    q: "How long does it take to open a SECP company bank account in Pakistan?",
    a: "Once all SECP certified true copy documents, FBR corporate NTN, and board resolutions are presented to the bank branch, corporate account verification and activation typically takes 3 to 7 business days.",
  },
  {
    q: "Do all company directors need to be physically present at the bank branch?",
    a: "Yes. Authorized signatories and directors designated in the Board Resolution must physically visit the bank branch for in-person biometric verification (NADRA thumbprint matching).",
  },
  {
    q: "What is a Board Resolution for opening a company bank account?",
    a: "A Board Resolution is a formal corporate document passed by the company's Board of Directors approving the opening of a bank account, naming the chosen commercial bank and branch, and designating specific authorized signatories who can sign cheques and manage corporate internet banking.",
  },
  {
    q: "Why is a corporate bank account mandatory within 30 days of SECP incorporation?",
    a: "Under Section 85 of the Companies Act 2017, company subscribers must deposit their pledged share capital into the corporate bank account within 30 days of incorporation, followed by filing SECP Form 22 (Auditor Certificate of Paid-Up Capital) within 45 days.",
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
  headline: "How to Open a Business Bank Account in Pakistan for a New SECP Company",
  description:
    "Complete 2026 corporate banking masterclass for SECP companies in Pakistan. Detailed guide on required SECP certified true copies, Board Resolution drafting, NADRA biometric verification, top IT export banks (Meezan, HBL, Alfalah), and Form 22 capital deposit rules.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Corporate Banking Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/open-company-business-bank-account-pakistan",
};

export const Route = createFileRoute("/blog/open-company-business-bank-account-pakistan")({
  head: () => ({
    meta: [
      { title: "Open SECP Company Business Bank Account Pakistan (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to opening a business bank account in Pakistan for SECP companies. Required SECP certified documents, Board Resolution, NADRA biometrics & top IT banks.",
      },
      {
        name: "keywords",
        content:
          "open company business bank account pakistan, secp corporate bank account documents meezan hbl, board resolution to open bank account secp company, nadra biometric verification corporate account pakistan, bank maintenance certificate secp form 22",
      },
      {
        property: "og:title",
        content: "How to Open a Business Bank Account in Pakistan for a New SECP Company",
      },
      {
        property: "og:description",
        content:
          "Master the corporate bank account opening process in Pakistan for your SECP Private Limited entity.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/open-company-business-bank-account-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/open-company-business-bank-account-pakistan" }],
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
            How to Open a Business Bank Account in Pakistan for a New SECP Company
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive corporate banking tutorial for business owners and founders on opening a commercial bank account for a SECP Private Limited or Single Member Company (SMC-Pvt Ltd) in Pakistan, preparing Board Resolutions, and clearing NADRA biometric verification.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Banking Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>State Bank of Pakistan Corporate Banking Guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Corporate Banking Essential Checklist</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">SECP Certified Documents</strong>
              <p className="text-navy-100 leading-relaxed">
                Certified True Copies of Certificate of Incorporation, Memorandum & Articles, Form 1, Form 21, and Form 29.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Board Resolution</strong>
              <p className="text-navy-100 leading-relaxed">
                Official resolution passed by directors authorizing bank account opening and designating authorized signatories.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">NADRA Biometrics</strong>
              <p className="text-navy-100 leading-relaxed">
                In-person thumbprint verification at the bank branch for all designated account signatories.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">FBR Corporate NTN</strong>
              <p className="text-navy-100 leading-relaxed">
                Official 7-digit Corporate National Tax Number certificate issued by FBR.
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
            <li><a href="#role-of-corporate-banking" className="hover:text-gold-600 underline">1. The Role of Corporate Banking for SECP Entities</a></li>
            <li><a href="#choosing-bank" className="hover:text-gold-600 underline">2. Top Commercial Banks Comparison (Meezan, HBL, Alfalah)</a></li>
            <li><a href="#required-documents" className="hover:text-gold-600 underline">3. Full List of SECP Certified Documents Required</a></li>
            <li><a href="#board-resolution-drafting" className="hover:text-gold-600 underline">4. Drafting an Approved Board Resolution</a></li>
            <li><a href="#biometric-verification" className="hover:text-gold-600 underline">5. NADRA Biometric Verification & Account Opening Protocol</a></li>
            <li><a href="#post-activation" className="hover:text-gold-600 underline">6. Post-Activation Form 22 & Share Capital Deposit</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="role-of-corporate-banking" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Role of Corporate Banking for SECP Entities
          </h2>
          <p>
            Once your company receives its digital Certificate of Incorporation from the <strong>Securities and Exchange Commission of Pakistan (SECP)</strong>, opening a corporate bank account is the next legal milestone.
          </p>
          <p>
            Under Section 85 of the <strong>Companies Act 2017</strong>, company subscribers are legally mandated to deposit their subscribed paid-up capital into the corporate bank account within 30 days of incorporation.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="choosing-bank" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Top Commercial Banks Comparison (Meezan, HBL, Alfalah)
          </h2>
          <p>
            Evaluating commercial banks based on your company's business model is crucial:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Commercial Bank</th>
                  <th className="p-4 text-gold-500">IT Export & e-PRC Support</th>
                  <th className="p-4">SBP 50% FCVA Retention</th>
                  <th className="p-4">Corporate Internet Banking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Meezan Bank (Islamic)</td>
                  <td className="p-4 text-emerald-700 font-bold">Fastest e-PRC Generation</td>
                  <td className="p-4 text-emerald-700 font-bold">Full SBP FCVA Support</td>
                  <td className="p-4">Meezan e-Biz Portal</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Habib Bank Limited (HBL)</td>
                  <td className="p-4 text-emerald-700 font-bold">Dedicated IT Desks</td>
                  <td className="p-4 text-emerald-700 font-bold">Full SBP FCVA Support</td>
                  <td className="p-4">HBL PayBusiness</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Bank Alfalah</td>
                  <td className="p-4 text-emerald-700 font-bold">Automated FOREX Realization</td>
                  <td className="p-4 text-emerald-700 font-bold">Alfa Business FCVA</td>
                  <td className="p-4">Alfa Corporate Portal</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Faysal Bank</td>
                  <td className="p-4">Standard FOREX Desks</td>
                  <td className="p-4">FCVA Available</td>
                  <td className="p-4">Faysal Digibank</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN CORPORATE BANKING ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Open Your SECP Business Bank Account with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts board resolutions, orders SECP certified document copies, pre-screens your dossier with bank branch managers, and expedites account approval.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Corporate Banking Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="required-documents" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Full List of SECP Certified Documents Required
          </h2>
          <p>
            Pakistani banks enforce strict Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations supervised by the State Bank of Pakistan:
          </p>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Mandatory Document Dossier:</h3>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>SECP Certified True Copies (CTC):</strong> Official certified copies of Certificate of Incorporation, Memorandum of Association (MOA), and Articles of Association (AOA).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>SECP Statutory Forms:</strong> Form 1 (Name Reservation), Form 21 (Registered Office Address Notification), and Form 29 (Particulars of Directors & Officers).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>FBR Corporate NTN:</strong> Official 7-digit Corporate NTN certificate issued by the Federal Board of Revenue.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Identity Credentials:</strong> CNIC / NICOP copies of all proposed account signatories and directors.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="board-resolution-drafting" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Drafting an Approved Board Resolution
          </h2>
          <p>
            The company's Board of Directors must pass a formal resolution approving account opening:
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <FileText size={18} />
              Key Elements of a SBP-Compliant Board Resolution:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              1. <strong>Bank & Branch Name:</strong> Explicitly naming the chosen commercial bank (e.g. Meezan Bank, Main Branch).
              <br /><br />
              2. <strong>Account Signatories:</strong> Naming authorized directors who will operate the account.
              <br /><br />
              3. <strong>Operating Instructions:</strong> Stating whether account is operated <em>Singly</em> (any one director) or <em>Jointly</em> (two directors combined).
              <br /><br />
              4. <strong>Corporate Rubber Stamp:</strong> Signed and stamped by the Chief Executive or Company Secretary.
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
            PAKISTAN CORPORATE BANKING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Open Your Company Bank Account Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            SECP certified document ordering, Board Resolution drafting, bank branch introductions, and digital banking activation handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Bank Account Assistance
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
