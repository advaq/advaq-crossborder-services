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
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "What is an FBR NTN (National Tax Number) in Pakistan?",
    a: "An FBR NTN (National Tax Number) is a 7-digit unique tax identification number issued by the Federal Board of Revenue to individuals, sole proprietors, AOPs, and SECP companies for tax identification and return filing.",
  },
  {
    q: "How long does it take to get an FBR NTN registered online?",
    a: "Personal individual NTN registration on FBR Iris 2.0 takes under 10 minutes. Business NTN modification or SECP Corporate NTN issuance is instant or completed within 24 hours.",
  },
  {
    q: "What documents are required to register an individual NTN?",
    a: "You need: (1) Valid CNIC / NICOP, (2) Active mobile number registered under your CNIC, (3) Personal email address, and (4) Paid utility bill or property document proving address.",
  },
  {
    q: "What is the difference between a Personal NTN and a Business NTN?",
    a: "A Personal NTN is registered against your CNIC for individual salary or general tax filing. A Business NTN links a specific trade name (e.g. Sole Proprietorship or SECP Company) to your tax profile.",
  },
  {
    q: "Is there any official government fee to register an NTN with FBR?",
    a: "No! Official FBR NTN registration on Iris 2.0 is 100% free of cost.",
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
  headline: "How to Register Personal & Business NTN (National Tax Number) with FBR Online",
  description:
    "Complete 2026 FBR NTN registration guide for Pakistanis & businesses. Learn how to register personal NTN & business NTN on Iris 2.0, modify business names, and become an Active Taxpayer.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/how-to-register-ntn-online-for-pakistan",
};

export const Route = createFileRoute("/blog/how-to-register-ntn-online-for-pakistan")({
  head: () => ({
    meta: [
      { title: "Register Personal & Business NTN FBR Online (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to register personal & business NTN on FBR Iris 2.0 online. Step-by-step registration for CNIC, sole proprietorship & SECP corporate NTN.",
      },
      {
        name: "keywords",
        content:
          "how to register ntn online for pakistan, fbr iris 2.0 personal ntn registration free, business ntn registration sole proprietorship, secp corporate ntn automatic issuance fbr",
      },
      {
        property: "og:title",
        content: "How to Register Personal & Business NTN (National Tax Number) with FBR Online",
      },
      {
        property: "og:description",
        content:
          "Master FBR Iris 2.0 NTN registration to obtain your 7-digit National Tax Number for personal or business tax filing.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-register-ntn-online-for-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-register-ntn-online-for-pakistan" }],
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
            How to Register Personal & Business NTN (National Tax Number) with FBR Online
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A step-by-step tutorial for individuals, sole proprietors, and SECP companies on registering a National Tax Number (NTN) on FBR Iris 2.0, adding business activities, and establishing tax compliance.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ FBR Registration Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FBR Iris 2.0 Official Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>FBR NTN Registration Types</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Personal Individual NTN:</strong> Registered against your 13-digit CNIC for salary, freelance, or personal investments.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Business NTN (Sole Proprietor):</strong> Adding a trade name and business address to your existing personal NTN profile.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Corporate NTN (SECP Company):</strong> 7-digit corporate NTN automatically generated upon SECP incorporation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Fee & Processing:</strong> 100% free online setup via FBR Iris 2.0 portal.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#what-is-ntn" className="hover:text-gold-600 underline">1. What Is an FBR NTN and Why Do You Need It?</a></li>
            <li><a href="#personal-ntn-steps" className="hover:text-gold-600 underline">2. Step-by-Step Personal NTN Registration on Iris 2.0</a></li>
            <li><a href="#business-ntn-sole-proprietor" className="hover:text-gold-600 underline">3. Adding a Business Name & Address (Sole Proprietorship NTN)</a></li>
            <li><a href="#secp-corporate-ntn" className="hover:text-gold-600 underline">4. SECP Company Corporate NTN Integration</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-ntn" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is an FBR NTN and Why Do You Need It?
          </h2>
          <p>
            An <strong>FBR National Tax Number (NTN)</strong> is your primary tax identification credential in Pakistan. Having an active NTN is mandatory for opening commercial bank accounts, buying or selling real estate, registering vehicles, and filing annual tax returns.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="personal-ntn-steps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step Personal NTN Registration on Iris 2.0
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Visit the FBR Iris 2.0 portal and click "Basic Registration".</li>
            <li>Input CNIC number, full name, mobile number (registered in your CNIC), and email.</li>
            <li>Receive SMS & Email verification codes and enter them to generate Iris login credentials.</li>
            <li>Log into Iris and complete Form 181 (Registration Modification) to finalize NTN issuance.</li>
          </ol>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FBR NTN REGISTRATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register Your FBR NTN with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ registers personal NTNs, sole proprietorship business NTNs, handles FBR Iris 181 modifications, and ensures active taxpayer status.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/ntn-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order NTN Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="business-ntn-sole-proprietor" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Adding a Business Name & Address (Sole Proprietorship NTN)
          </h2>
          <p>
            To operate a Sole Proprietorship, open Form 181 in Iris, click the "Business" tab, add your business trade name, select principal business activity, attach a paid utility bill, and submit for instant Business NTN Certificate issuance.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="secp-corporate-ntn" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. SECP Company Corporate NTN Integration
          </h2>
          <p>
            For SECP Private Limited entities, FBR automatically issues a 7-digit Corporate NTN simultaneously upon company incorporation without requiring separate registration.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div id="faqs" className="pt-8 border-t border-border">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl bg-white overflow-hidden transition-all"
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
            FBR NTN REGISTRATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Get Your FBR NTN Registered Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Personal CNIC NTN registration, sole proprietorship business NTN modification, and corporate tax profile setup.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/ntn-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order FBR NTN Registration
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
