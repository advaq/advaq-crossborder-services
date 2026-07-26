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
  Laptop,
  Coins,
  FileText,
  HelpCircle,
  BookOpen,
  AlertTriangle,
  Scale,
} from "lucide-react";

const faqs = [
  {
    q: "How long does SECP online company registration take in Pakistan?",
    a: "Through SECP eServices fast-track incorporation, company registration is typically completed in 24 to 48 hours once all subscriber digital signatures, CNIC verifications, and online fee payments via PSID are submitted.",
  },
  {
    q: "What documents are required to register a Private Limited company with SECP?",
    a: "You need: (1) Scanned CNIC/NICOP/Passport copies of all directors, (2) Three proposed company name options, (3) Registered business address in Pakistan, (4) Memorandum & Articles of Association specifying the principal business activity, and (5) Active mobile numbers and email addresses for eServices User ID generation.",
  },
  {
    q: "What is the official SECP government fee for company incorporation?",
    a: "Official SECP government incorporation fees start at approximately PKR 2,500 to PKR 3,500 for a standard Authorized Capital of PKR 100,000 filed online via eServices. Fees scale incrementally for higher authorized capital brackets.",
  },
  {
    q: "Is physical presence required at the SECP office to register a company?",
    a: "No! SECP eServices provides a 100% digital, paperless registration portal. Name availability search, e-Form submissions, digital signatures, online PSID fee payments, and official Certificate of Incorporation issuance are conducted entirely online.",
  },
  {
    q: "Does SECP registration automatically issue an FBR Corporate NTN?",
    a: "Yes! Under SECP's single-window integration with the Federal Board of Revenue (FBR), your company's 7-digit Corporate National Tax Number (NTN) is automatically generated and delivered alongside your SECP Certificate of Incorporation.",
  },
  {
    q: "What is the minimum authorized and paid-up capital required for SECP company setup?",
    a: "SECP does not enforce a statutory minimum paid-up capital requirement under the Companies Act 2017. Most Pakistani tech startups, IT agencies, and trade entities register with an Authorized Capital of PKR 100,000 (10,000 shares at PKR 10 each).",
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
  headline: "How to Register a Company in Pakistan with SECP Online (eServices Guide)",
  description:
    "Complete 2026 digital step-by-step masterclass on registering a Private Limited company or Single Member Company (SMC-Pvt Ltd) with the Securities and Exchange Commission of Pakistan (SECP) via eServices. Covers name reservation, digital IDs, MOA drafting, SECP fee tables, and automatic FBR Corporate NTN generation.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-to-register-company-in-secp-online-pakistan",
};

export const Route = createFileRoute("/blog/how-to-register-company-in-secp-online-pakistan")({
  head: () => ({
    meta: [
      { title: "How to Register a Company in SECP Online (2026 Step-by-Step) | ADVAQ" },
      {
        name: "description",
        content:
          "Complete 2026 step-by-step SECP company registration tutorial for Pakistani founders. Learn eServices login setup, name availability, digital signatures, MOA drafting, and FBR NTN integration.",
      },
      {
        name: "keywords",
        content:
          "how to register company in secp online pakistan, secp eservices company incorporation step by step, secp name availability application form 1, fbr corporate ntn secp single window, secp company registration fee table 2026",
      },
      {
        property: "og:title",
        content: "How to Register a Company in Pakistan with SECP Online (eServices Masterclass)",
      },
      {
        property: "og:description",
        content:
          "Master the step-by-step SECP eServices online registration process to get your Private Limited company or SMC incorporated in 24 hours.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-register-company-in-secp-online-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-register-company-in-secp-online-pakistan" }],
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
            How to Register a Company in Pakistan with SECP Online (eServices Guide)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive 2026 digital step-by-step masterclass on registering a Private Limited company or Single Member Company (SMC-Pvt Ltd) with the Securities and Exchange Commission of Pakistan (SECP) via the eServices portal.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Corporate Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>13 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SECP eServices Portal Approved Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>SECP 4-Step Online Incorporation Blueprint</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Name Reservation (Form 1)</strong>
              <p className="text-navy-100 leading-relaxed">
                Submit 3 proposed company name options on SECP eServices. Approval issued within 2–4 hours upon payment of PKR 500 reservation fee.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. Directors' Digital IDs</strong>
              <p className="text-navy-100 leading-relaxed">
                Generate secure SECP eServices User IDs and digital signatures for all proposed directors using CNIC/NICOP and mobile PIN verification.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Incorporation Filing</strong>
              <p className="text-navy-100 leading-relaxed">
                Submit Memorandum & Articles of Association, Form 1, Form 21, and Form 29 online via eServices with PSID fee payment.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Digital Certificate & NTN</strong>
              <p className="text-navy-100 leading-relaxed">
                Receive official SECP digital Certificate of Incorporation and automatic 7-digit FBR Corporate NTN via single-window integration.
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
            <li><a href="#eservices-overview" className="hover:text-gold-600 underline">1. Overview of SECP eServices Architecture</a></li>
            <li><a href="#name-reservation" className="hover:text-gold-600 underline">2. Phase 1: Name Availability & Search Protocol</a></li>
            <li><a href="#user-id-setup" className="hover:text-gold-600 underline">3. Phase 2: Directors' SECP User IDs & Digital Credentials</a></li>
            <li><a href="#drafting-moa-aoa" className="hover:text-gold-600 underline">4. Phase 3: Drafting Memorandum & Articles of Association</a></li>
            <li><a href="#fee-table" className="hover:text-gold-600 underline">5. SECP Official Government Fee Schedule (2026)</a></li>
            <li><a href="#single-window-ntn" className="hover:text-gold-600 underline">6. Phase 4: SECP & FBR Single-Window NTN Issuance</a></li>
            <li><a href="#post-incorporation" className="hover:text-gold-600 underline">7. Phase 5: Post-Incorporation Banking & Share Capital</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="eservices-overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Overview of SECP eServices Architecture
          </h2>
          <p>
            In Pakistan, corporate incorporation is regulated by the <strong>Securities and Exchange Commission of Pakistan (SECP)</strong> under the <strong>Companies Act 2017</strong>. Historically, registering a private limited entity required physical submissions to regional Company Registration Offices (CROs) in Islamabad, Lahore, Karachi, Peshawar, or Quetta.
          </p>
          <p>
            Today, SECP operates a 100% digital, paperless registration ecosystem known as <strong>eServices 2.0</strong>. Through eServices, founders can reserve company names, generate digital PIN credentials, submit statutory forms, pay government fees via 1Link PSID or credit card, and receive an officially signed digital <strong>Certificate of Incorporation</strong> in as little as 24 hours.
          </p>

          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Single-Window Integration:</strong>
            <p className="text-navy-900 text-sm">
              SECP eServices is directly integrated with the Federal Board of Revenue (FBR), EOBI (Employees' Old-Age Benefits Institution), PESSI (Provincial Employees Social Security Institution), and the Punjab/Sindh Revenue Boards. Incorporating an SECP company automatically registers your corporate entity across these tax and labor databases simultaneously.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="name-reservation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Phase 1: Name Availability & Search Protocol
          </h2>
          <p>
            The initial phase of SECP incorporation is securing name clearance. The proposed company name must comply with Section 10 of the Companies Act 2017 and SECP Name Availability Regulations:
          </p>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Key Rules for Company Name Selection:</h3>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Uniqueness & Similarity Test:</strong> The name must not be identical or deceptively similar to any existing company registered in SECP database or trademark registered with IPO Pakistan.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Prohibited & Restricted Words:</strong> Words such as "State", "Federal", "Royal", "National", "Bank", "Trust", "Insurance", "Chartered", or "University" require prior approval or licensing from federal ministries.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Principal Line of Business Alignment:</strong> The name should reflect your company's core activity (e.g., <em>"Apex Software Solutions (Private) Limited"</em> or <em>"Vanguard Logistics (SMC-Private) Limited"</em>).</span>
            </li>
          </ul>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Laptop size={18} />
              eServices Name Application Submission:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              Log into SECP eServices &rarr; Select "Name Availability" &rarr; Enter 3 proposed names in order of preference &rarr; State principal business activity &rarr; Generate PSID fee (PKR 500) &rarr; Pay online via banking app.
            </p>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FAST-TRACK SECP INCORPORATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your SECP Company Registered in 24 Hours
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles name reservation, eServices incorporation filing, Memorandum & Articles drafting, digital signatures, and automatic FBR Corporate NTN setup.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Online Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="user-id-setup" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Phase 2: Directors' SECP User IDs & Digital Credentials
          </h2>
          <p>
            Under SECP eServices 2.0 regulations, paper signatures on physical incorporation forms are obsolete. Every proposed subscriber and director must possess a verified SECP digital profile:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Pakistani Citizens (CNIC):</strong> Register eServices account using 13-digit CNIC number, active mobile number registered under CNIC (verified via NADRA 8009), and personal email address.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Overseas Pakistanis (NICOP) & Foreign Nationals:</strong> Register using Passport / NICOP details alongside notarized passport copies for SECP eServices clearance.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Digital Signature Pin Generation:</strong> SECP sends a 4-digit digital PIN via SMS and email. This PIN acts as your legally binding electronic signature during form submission.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 4 */}
        <div id="drafting-moa-aoa" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Phase 3: Drafting Memorandum & Articles of Association
          </h2>
          <p>
            The charter documents of your SECP company consist of two fundamental legal instruments:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-border p-5 rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-2 flex items-center gap-2">
                <FileText size={16} className="text-gold-600" /> Memorandum of Association (MOA)
              </strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                Establishes the company's <strong>Principal Line of Business Clause</strong>. Under the Companies Act 2017, companies can engage in any lawful business, but must state their core primary sector (e.g., Software Development, Call Center Services, E-commerce Logistics).
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-2 flex items-center gap-2">
                <Scale size={16} className="text-gold-600" /> Articles of Association (AOA)
              </strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                Defines internal corporate governance, director powers, board meeting quorums, share transfer restrictions, dividend distribution procedures, and AGM voting rules (adopted from Table A of Companies Act 2017).
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="fee-table" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. SECP Official Government Fee Schedule (2026)
          </h2>
          <p>
            SECP eServices offers highly economical government incorporation fee structures. Fees are calculated based on your proposed Authorized Capital:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Authorized Capital Bracket</th>
                  <th className="p-4 text-gold-500">eServices Online Filing Fee (PKR)</th>
                  <th className="p-4">FBR Single-Window NTN Fee</th>
                  <th className="p-4">Average Processing Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Up to PKR 100,000 (Standard Startups)</td>
                  <td className="p-4 font-bold text-navy-950">PKR 2,500 - PKR 3,500</td>
                  <td className="p-4 text-emerald-700 font-bold">FREE (Integrated)</td>
                  <td className="p-4">24 - 48 Hours</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">PKR 100,001 to PKR 1,000,000</td>
                  <td className="p-4">PKR 5,000 - PKR 7,500</td>
                  <td className="p-4 text-emerald-700 font-bold">FREE (Integrated)</td>
                  <td className="p-4">24 - 48 Hours</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">PKR 1,000,001 to PKR 5,000,000</td>
                  <td className="p-4">PKR 15,000 - PKR 22,000</td>
                  <td className="p-4 text-emerald-700 font-bold">FREE (Integrated)</td>
                  <td className="p-4">2 - 3 Working Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Above PKR 5,000,000</td>
                  <td className="p-4">Base Fee + Incremental Rates per PKR 100k</td>
                  <td className="p-4 text-emerald-700 font-bold">FREE (Integrated)</td>
                  <td className="p-4">3 - 4 Working Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="single-window-ntn" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Phase 4: SECP & FBR Single-Window NTN Issuance
          </h2>
          <p>
            Upon successful eServices submission and PSID fee payment, the SECP Registrar inspects your filing. Once approved:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Digital Certificate of Incorporation:</strong> SECP generates an officially signed digital certificate containing your 7-digit Corporate CUIN (Company Universal Identification Number).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>FBR Corporate NTN Generation:</strong> Simultaneously, the eServices portal triggers FBR Iris integration to generate your 7-digit Corporate National Tax Number (NTN) without requiring a separate manual FBR visit.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 7 */}
        <div id="post-incorporation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Phase 5: Post-Incorporation Banking & Share Capital
          </h2>
          <p>
            Receiving your Certificate of Incorporation is only the beginning. To complete legal operational setup:
          </p>
          <div className="space-y-3 text-sm pl-2">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">1. Open Corporate Bank Account:</strong>
              <p className="text-xs text-gray-600">Present SECP Certificate of Incorporation, Memorandum & Articles, Board Resolution, CNIC copies, and NADRA biometric verification to open a business account (Meezan Bank, HBL, Bank Alfalah).</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">2. Deposit Share Capital (30-Day Limit):</strong>
              <p className="text-xs text-gray-600">Subscribers must deposit their pledged share capital into the corporate bank account within 30 days of incorporation.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">3. File SECP Form 22:</strong>
              <p className="text-xs text-gray-600">File Form 22 accompanied by a Chartered Accountant verification certificate confirming receipt of share capital.</p>
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
            SECP ONLINE REGISTRATION SERVICES
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your Company in Pakistan Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Name reservation, eServices incorporation filing, Memorandum & Articles drafting, digital signatures, and automatic FBR Corporate NTN registration handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Online Registration
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
