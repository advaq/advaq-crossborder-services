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
  Ship,
  FileCheck,
  Key,
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is WEBOC in Pakistan Customs and why is it required?",
    a: "WEBOC (Web Based One Customs) is the official web-based clearance system operated by Pakistan Customs for clearing import and export goods, filing electronic Goods Declarations (GDs), paying customs duties, and clearing shipments at sea ports, dry ports, and airports.",
  },
  {
    q: "Who needs a WEBOC User ID in Pakistan?",
    a: "Any business importing commercial goods, physical IT hardware, machinery, raw materials, or exporting manufactured products from Pakistan must possess an active WEBOC Trader User ID.",
  },
  {
    q: "What statutory prerequisites are required before applying for WEBOC?",
    a: "Before applying for WEBOC, you must hold: (1) Active FBR NTN (Personal or SECP Company), (2) FBR Sales Tax Registration Number (STRN), (3) Valid Chamber of Commerce & Industry Membership Certificate, and (4) Bank Maintenance Certificate.",
  },
  {
    q: "Where is physical document verification and biometric registration conducted?",
    a: "Physical document submission and biometric thumbprint registration take place at designated regional Customs Houses (e.g. Karachi Customs House, Lahore Dry Port Customs House, Rawalpindi/Islamabad Dry Port).",
  },
  {
    q: "How long does it take to get WEBOC User ID approval?",
    a: "Once all verified physical documents and biometric thumbprints are submitted at Customs House, WEBOC User ID login credentials are sent via official email within 3 to 5 business days.",
  },
  {
    q: "What is a Goods Declaration (GD) on WEBOC?",
    a: "A Goods Declaration (GD) is an electronic customs declaration filed on WEBOC stating the precise HS Code tariff, quantity, commercial value, origin, and duty calculation for imported or exported merchandise.",
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
  headline: "WEBOC Customs Registration Guide: How to Get Import/Export ID in Pakistan",
  description:
    "Complete 2026 WEBOC Customs registration masterclass for importers & exporters in Pakistan. Detailed guide on required SECP, STRN, Chamber of Commerce documents, Customs House biometric verification, Goods Declaration (GD) filing, and WEBOC User ID approval.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Customs Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/weboc-customs-registration-guide-pakistan",
};

export const Route = createFileRoute("/blog/weboc-customs-registration-guide-pakistan")({
  head: () => ({
    meta: [
      { title: "WEBOC Customs Registration Guide Pakistan (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "WEBOC Customs registration guide to get import/export ID in Pakistan. Required SECP, STRN, Chamber of Commerce documents & Customs House biometrics.",
      },
      {
        name: "keywords",
        content:
          "weboc customs registration guide pakistan, weboc user id application documents customs house, goods declaration gd filing weboc pakistan, import export license registration pakistan, custom duty section 148 advance tax",
      },
      {
        property: "og:title",
        content: "WEBOC Customs Registration Guide: How to Get Import/Export ID in Pakistan",
      },
      {
        property: "og:description",
        content:
          "Master the WEBOC Pakistan Customs registration process to obtain your official Import/Export License ID.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/weboc-customs-registration-guide-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/weboc-customs-registration-guide-pakistan" }],
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
            WEBOC Customs Registration Guide: How to Get Import/Export ID in Pakistan
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive international trade masterclass for business owners, commercial importers, and physical hardware exporters on securing a Web Based One Customs (WEBOC) User ID from Pakistan Customs, completing biometric verifications, and filing Goods Declarations (GDs).
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Customs Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Pakistan Customs Act 1969 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>WEBOC Prerequisites & Registration Steps</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">FBR Sales Tax STRN</strong>
              <p className="text-navy-100 leading-relaxed">
                Active FBR Sales Tax profile required prior to submitting WEBOC application.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Chamber of Commerce</strong>
              <p className="text-navy-100 leading-relaxed">
                Valid regional Chamber membership certificate (LCCI, KCCI, ICCI, RCCI).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Customs House Biometrics</strong>
              <p className="text-navy-100 leading-relaxed">
                In-person thumbprint biometric scan and physical document submission at Customs House.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Goods Declaration (GD)</strong>
              <p className="text-navy-100 leading-relaxed">
                Enables online filing of import/export GDs, Customs Duty calculation, and clearing shipments.
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
            <li><a href="#what-is-weboc" className="hover:text-gold-600 underline">1. What Is WEBOC (Web Based One Customs)?</a></li>
            <li><a href="#prerequisites-checklist" className="hover:text-gold-600 underline">2. Statutory Prerequisites Checklist</a></li>
            <li><a href="#document-dossier" className="hover:text-gold-600 underline">3. Complete WEBOC Document Dossier Preparation</a></li>
            <li><a href="#customs-house-workflow" className="hover:text-gold-600 underline">4. Step-by-Step Customs House Submission & Biometrics</a></li>
            <li><a href="#filing-gds" className="hover:text-gold-600 underline">5. Filing Goods Declarations (GDs) & Duty Processing</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-weboc" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is WEBOC (Web Based One Customs)?
          </h2>
          <p>
            Operating under the Customs Act 1969, <strong>WEBOC (Web Based One Customs)</strong> is the national digital platform developed by Pakistan Customs for clearing commercial containerized cargo, air cargo, and dry port shipments.
          </p>
          <p>
            Whether importing tech hardware servers from China, raw manufacturing materials from Germany, or exporting physical products to Dubai, having an active WEBOC User ID is legally mandatory.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="prerequisites-checklist" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Statutory Prerequisites Checklist
          </h2>
          <p>
            Before applying for a WEBOC Trader User ID, your entity must obtain the following preliminary licenses:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Statutory Prerequisite</th>
                  <th className="p-4 text-gold-500">Issuing Government Body</th>
                  <th className="p-4">Mandatory Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Active FBR NTN</td>
                  <td className="p-4 text-emerald-700 font-bold">Federal Board of Revenue (FBR)</td>
                  <td className="p-4">CNIC NTN or SECP Corporate NTN registered on Iris.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">FBR Sales Tax STRN</td>
                  <td className="p-4 text-emerald-700 font-bold">Federal Board of Revenue (FBR)</td>
                  <td className="p-4">Active Sales Tax Registration Certificate with Sales Tax profile.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Chamber of Commerce Certificate</td>
                  <td className="p-4">Regional Chamber (LCCI, KCCI, ICCI)</td>
                  <td className="p-4">Valid membership certificate for current fiscal year.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Bank Maintenance Certificate</td>
                  <td className="p-4">Commercial Bank</td>
                  <td className="p-4">Bank certificate verifying active business account & IBAN.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN WEBOC CUSTOMS SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your WEBOC Import/Export ID with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares WEBOC document dossiers, manages Customs House appointments, handles biometric verifications, and secures User ID approvals.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order WEBOC Setup Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="customs-house-workflow" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step Customs House Submission & Biometrics
          </h2>
          <p>
            Completing physical verification at the Customs House:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 1: Document Folder Assembly</strong>
              <p className="text-xs text-gray-600">Assemble SECP documents, STRN certificate, Chamber certificate, bank maintenance letter, and PKR 100 stamp paper undertaking.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 2: Customs House Visit & Biometrics</strong>
              <p className="text-xs text-gray-600">Authorized proprietor or company director visits regional Customs House for physical verification and NADRA biometric thumbprint scan.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 3: Receive Credentials via Email</strong>
              <p className="text-xs text-gray-600">Within 3 to 5 business days, Pakistan Customs dispatches your official WEBOC User ID and password to your registered email.</p>
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
            PAKISTAN WEBOC CUSTOMS SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Obtain Your WEBOC Import/Export ID
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            STRN, Chamber of Commerce, and Customs House WEBOC registration support handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order WEBOC Registration Package
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
