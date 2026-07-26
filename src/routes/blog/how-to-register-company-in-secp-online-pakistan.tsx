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
} from "lucide-react";

const faqs = [
  {
    q: "How long does SECP online company registration take in Pakistan?",
    a: "Through SECP eServices, fast-track company incorporation is completed in 24 to 48 hours once all subscriber digital signatures and documents are submitted.",
  },
  {
    q: "What documents are required to register a Private Limited company with SECP?",
    a: "You need: (1) CNIC/NICOP copies of all directors, (2) Proposed company name options, (3) Registered address details in Pakistan, (4) Memorandum & Articles of Association, and (5) SECP digital signatures / User IDs.",
  },
  {
    q: "What is the fast-track fee for SECP company incorporation?",
    a: "Official SECP government incorporation fees start at approximately PKR 2,500 to PKR 4,000 for standard Authorized Capital (PKR 100,000) online filings.",
  },
  {
    q: "Is physical presence required at the SECP office to register a company?",
    a: "No! SECP eServices provides a 100% online digital portal. Name reservation, document submission, fee payment, and digital Incorporation Certificate issuance are conducted entirely online.",
  },
  {
    q: "Does SECP registration automatically issue a FBR Corporate NTN?",
    a: "Yes! Under SECP's single-window integration with FBR, your corporate National Tax Number (NTN) is automatically generated and delivered alongside your SECP Incorporation Certificate.",
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
    "Complete 2026 SECP company registration tutorial for Pakistani founders. Learn eServices login setup, name availability search, digital signatures, Memorandum & Articles drafting, and FBR NTN integration.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/how-to-register-company-in-secp-online-pakistan",
};

export const Route = createFileRoute("/blog/how-to-register-company-in-secp-online-pakistan")({
  head: () => ({
    meta: [
      { title: "How to Register a Company in SECP Online (2026 Guide) | ADVAQ" },
      {
        name: "description",
        content:
          "Step-by-step tutorial to register a company with SECP online via eServices in Pakistan. Name availability, digital signatures, Memorandum of Association & FBR NTN.",
      },
      {
        name: "keywords",
        content:
          "how to register company in secp online pakistan, secp eservices company incorporation step by step, secp name availability application form 1, fbr corporate ntn secp single window",
      },
      {
        property: "og:title",
        content: "How to Register a Company in Pakistan with SECP Online (eServices Guide)",
      },
      {
        property: "og:description",
        content:
          "Master the step-by-step SECP eServices online registration process to get your Private Limited company incorporated in 24 hours.",
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
            A comprehensive 2026 digital step-by-step tutorial on registering a Private Limited company or Single Member Company with the Securities and Exchange Commission of Pakistan (SECP) via eServices.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
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
            <span>SECP 4-Step Registration Summary</span>
          </div>
          <ol className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed list-decimal list-inside">
            <li><strong>Step 1 (Name Reservation):</strong> Apply for unique company name reservation on SECP eServices (2-4 hours).</li>
            <li><strong>Step 2 (Digital ID):</strong> Create SECP User IDs and digital signatures for all proposed directors.</li>
            <li><strong>Step 3 (Document Filing):</strong> Submit Memorandum & Articles of Association, Form 1, Form 21, and Form 29.</li>
            <li><strong>Step 4 (Certificate & NTN):</strong> Receive digital Certificate of Incorporation and automatic FBR Corporate NTN.</li>
          </ol>
        </div>
      </section>

      {/* MAIN ARTICLE BODY */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed text-[16px]">
        {/* TABLE OF CONTENTS */}
        <div className="bg-off-white border border-border p-6 rounded-xl mb-12">
          <h2 className="font-sans font-bold text-dark-text text-sm uppercase tracking-wider mb-4">
            Table of Contents
          </h2>
          <ol className="space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#name-reservation" className="hover:text-gold-600 underline">1. Name Availability & Search on SECP eServices</a></li>
            <li><a href="#eservices-account" className="hover:text-gold-600 underline">2. Setting Up Directors' SECP User IDs & Digital Signatures</a></li>
            <li><a href="#drafting-moa-aoa" className="hover:text-gold-600 underline">3. Drafting Memorandum & Articles of Association</a></li>
            <li><a href="#single-window-ntn" className="hover:text-gold-600 underline">4. SECP & FBR Single-Window Corporate NTN Issuance</a></li>
            <li><a href="#post-incorporation" className="hover:text-gold-600 underline">5. Post-Incorporation Steps (Bank Account & Share Capital)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="name-reservation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Name Availability & Search on SECP eServices
          </h2>
          <p>
            The first step in registering a company in Pakistan is securing a unique company name on the SECP eServices portal.
          </p>
          <p>
            The proposed name must not be identical or deceptively similar to an existing registered company or registered trademark in Pakistan.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="eservices-account" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Setting Up Directors' SECP User IDs & Digital Signatures
          </h2>
          <p>
            Each subscriber and director must register their CNIC/NICOP on eServices to receive a secure pin and digital sign-off credential.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FAST-TRACK SECP INCORPORATION
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your SECP Company Registered in 24 Hours
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ provides complete SECP eServices company registration, name clearance, Memorandum drafting, and FBR Corporate NTN setup.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="drafting-moa-aoa" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Drafting Memorandum & Articles of Association
          </h2>
          <p>
            The Memorandum of Association (MOA) defines the principal business object of your company (e.g. software development, IT services, trading). The Articles of Association (AOA) establish internal management governance.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="single-window-ntn" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. SECP & FBR Single-Window Corporate NTN Issuance
          </h2>
          <p>
            Thanks to SECP's single-window integration with the Federal Board of Revenue (FBR), your 7-digit Corporate National Tax Number (NTN) is generated automatically upon company approval.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="post-incorporation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Post-Incorporation Steps (Bank Account & Share Capital)
          </h2>
          <p>
            After receiving your Certificate of Incorporation, open a corporate bank account, deposit the subscribed share capital within 30 days, and issue Form 22 to SECP.
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
            SECP ESERVICES SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your Company in Pakistan Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Name reservation, eServices incorporation filing, Memorandum & Articles drafting, digital signatures, and FBR Corporate NTN registration.
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
