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
  Award,
  Globe2,
} from "lucide-react";

const faqs = [
  {
    q: "What is MOFA Attestation in the UAE?",
    a: "MOFA Attestation is the official legalization process conducted by the UAE Ministry of Foreign Affairs (MOFA) to validate foreign educational degrees, marriage certificates, birth certificates, and commercial documents for official use inside the United Arab Emirates.",
  },
  {
    q: "What is the 3-step legal process to attest foreign documents for the UAE?",
    a: "The mandatory 3-step attestation chain is: (1) Notarization & MOFA attestation in your home country (e.g. UK, US, Pakistan, India), (2) Attestation by the UAE Embassy in your home country, and (3) Final attestation by MOFA inside the UAE.",
  },
  {
    q: "Why do I need degree attestation for a UAE work or investor visa?",
    a: "Degree attestation is mandatory for executive employment positions (e.g. CTO, Manager, Engineer), specialized talent Golden Visas (AED 30k salary criteria), and certain commercial activity licenses.",
  },
  {
    q: "How long does MOFA document attestation take?",
    a: "Complete end-to-end attestation takes approximately 7 to 14 business days depending on the country of origin.",
  },
  {
    q: "Do personal certificates need legal Arabic translation in the UAE?",
    a: "Yes. Once MOFA attestation is stamped on foreign non-Arabic documents, they must be legally translated into Arabic by a UAE Ministry of Justice licensed legal translator.",
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
  headline: "MOFA Document Attestation Guide in UAE: How to Legalize Foreign Certificates",
  description:
    "Complete 2026 MOFA attestation guide for UAE visa & business setup. Learn how to attest educational degrees, marriage certificates, birth certificates, and commercial documents via home country MOFA, UAE Embassy, and UAE MOFA.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/mofa-attestation-uae-foreign-documents-guide",
};

export const Route = createFileRoute("/blog/mofa-attestation-uae-foreign-documents-guide")({
  head: () => ({
    meta: [
      { title: "MOFA Document Attestation Guide UAE (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to attest foreign educational degrees, marriage & birth certificates for UAE MOFA. 3-step legal attestation chain, UAE Embassy stamping & legal Arabic translation.",
      },
      {
        name: "keywords",
        content:
          "mofa attestation uae foreign documents guide, degree attestation uae golden visa employment, marriage certificate mofa legalization family visa dubai, uae embassy attestation home country notary",
      },
      {
        property: "og:title",
        content: "MOFA Document Attestation Guide in UAE: How to Legalize Foreign Certificates",
      },
      {
        property: "og:description",
        content:
          "Master the step-by-step document attestation workflow for educational degrees, personal certificates, and commercial documents in the UAE.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/mofa-attestation-uae-foreign-documents-guide" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/mofa-attestation-uae-foreign-documents-guide" }],
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
            MOFA Document Attestation Guide in UAE: How to Legalize Foreign Certificates
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical step-by-step attestation guide for expatriates and business owners on legalizing foreign educational degrees, marriage certificates, birth records, and commercial documents for UAE residency and company incorporation.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Legalization Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE MOFA Foreign Ministry Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>3-Step Legal Attestation Chain</span>
          </div>
          <ol className="space-y-2 text-sm text-navy-100 list-decimal list-inside leading-relaxed">
            <li><strong>Step 1 (Home Country):</strong> Notary Public certification and Ministry of Foreign Affairs (MOFA / State Dept) attestation.</li>
            <li><strong>Step 2 (UAE Embassy):</strong> Official legalization by the UAE Embassy in your home country.</li>
            <li><strong>Step 3 (UAE MOFA):</strong> Final digital or physical attestation stamp by the Ministry of Foreign Affairs inside the UAE.</li>
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
            <li><a href="#what-is-mofa" className="hover:text-gold-600 underline">1. Why Is Document Attestation Required in the UAE?</a></li>
            <li><a href="#attestation-chain" className="hover:text-gold-600 underline">2. The 3-Step International Legalization Chain Explained</a></li>
            <li><a href="#types-of-documents" className="hover:text-gold-600 underline">3. Educational Degrees vs Personal Certificates vs Commercial Papers</a></li>
            <li><a href="#arabic-translation" className="hover:text-gold-600 underline">4. Ministry of Justice Certified Legal Arabic Translation</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-mofa" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Is Document Attestation Required in the UAE?
          </h2>
          <p>
            Under UAE federal law, government bodies (GDRFA, DET, Ministry of Human Resources, and Freezone authorities) cannot accept foreign public documents unless they are legally authenticated.
          </p>
          <p>
            <strong>MOFA Attestation</strong> verifies that the signatures, seals, and issuing institutions of foreign documents are genuine.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="attestation-chain" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The 3-Step International Legalization Chain Explained
          </h2>
          <p>
            Because the UAE is not a member of the Hague Apostille Convention for all document categories, a full multi-tier chain attestation is required:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Home country Notary Public & Ministry of Foreign Affairs seal.</li>
            <li>UAE Embassy legalization stamp in your capital city.</li>
            <li>UAE Ministry of Foreign Affairs (MOFAIC) final stamp in Dubai/Abu Dhabi.</li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            GLOBAL MOFA ATTESTATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Attest Your Foreign Certificates with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles door-to-door document pick-up, home country embassy attestation, UAE MOFA stamping, and Ministry of Justice legal Arabic translation.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Document Attestation Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="types-of-documents" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Educational Degrees vs Personal Certificates vs Commercial Papers
          </h2>
          <p>
            Degrees require verification from the issuing university. Personal certificates (Marriage/Birth) require local registrar authentication. Commercial papers (Board Resolutions, Power of Attorney) require corporate notary stamps.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="arabic-translation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Ministry of Justice Certified Legal Arabic Translation
          </h2>
          <p>
            Once stamped by MOFA, foreign documents must be translated into Arabic by a sworn translator licensed by the UAE Ministry of Justice before submission to courts or government entities.
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
            MOFA ATTESTATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Legalize Your Certificates for the UAE
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Home country notary, UAE Embassy attestation, UAE MOFA stamping, and Ministry of Justice legal Arabic translation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order MOFA Attestation Package
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
