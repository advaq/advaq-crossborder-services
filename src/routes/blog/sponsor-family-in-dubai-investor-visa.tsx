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
  Users,
  Heart,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "Can a UAE Investor Visa holder sponsor their wife and children in Dubai?",
    a: "Yes. Once an investor or business owner receives their valid UAE Residence Visa and Emirates ID, they can legally sponsor their spouse, unmarried daughters (of any age), and sons up to age 25.",
  },
  {
    q: "What is the minimum monthly salary or income required to sponsor family in Dubai?",
    a: "To sponsor a family in Dubai, the sponsor must earn a minimum monthly income of AED 4,000 (or AED 3,000 + accommodation), or hold a valid UAE Investor/Partner company visa with an Ejari lease.",
  },
  {
    q: "What document attestations are required for family sponsorship in the UAE?",
    a: "Your Marriage Certificate and Children's Birth Certificates must be legally attested by: (1) Ministry of Foreign Affairs in your home country, (2) UAE Embassy in your home country, and (3) MOFA in the UAE.",
  },
  {
    q: "Do family members need to undergo medical fitness testing?",
    a: "Spouses and children aged 18 and older must undergo a mandatory medical fitness test (blood test & chest X-ray) in Dubai before their residence visa is stamped.",
  },
  {
    q: "Can a female business owner sponsor her husband and children in Dubai?",
    a: "Yes! Female business owners and investors holding a valid UAE Residence Visa can sponsor their husband and children.",
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
  headline: "Sponsoring Family Members in Dubai (Wife & Children) on an Investor Visa",
  description:
    "Complete 2026 Dubai family sponsorship guide for investor visa holders. Learn document attestation requirements, MOFA rules, medical tests, Ejari lease prerequisites, and step-by-step visa processing.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/sponsor-family-in-dubai-investor-visa",
};

export const Route = createFileRoute("/blog/sponsor-family-in-dubai-investor-visa")({
  head: () => ({
    meta: [
      { title: "Sponsor Family in Dubai Investor Visa (2026 Guide) | ADVAQ" },
      {
        name: "description",
        content:
          "Sponsor wife & children in Dubai on a 2-year Investor Visa. MOFA document attestation, Ejari lease requirements, medical test & Emirates ID guide.",
      },
      {
        name: "keywords",
        content:
          "sponsor family in dubai investor visa, uae family visa marriage certificate mofa attestation, sponsor wife children dubai partner visa, ejari lease family visa requirements dubai",
      },
      {
        property: "og:title",
        content: "Sponsoring Family Members in Dubai (Wife & Children) on an Investor Visa",
      },
      {
        property: "og:description",
        content:
          "Discover how investor visa holders sponsor their spouse and children for 2-year UAE residence visas with MOFA attested documents.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/sponsor-family-in-dubai-investor-visa" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/sponsor-family-in-dubai-investor-visa" }],
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
            Sponsoring Family Members in Dubai (Wife & Children) on an Investor Visa
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical step-by-step family relocation guide for UAE investor visa holders on MOFA document attestation, Ejari apartment leases, medical testing, and Emirates ID processing for dependants.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Family PRO Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>GDRFA Dubai Dependant Visa Guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <Users size={18} />
            <span>Family Visa Checklist</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Sponsor Prerequisites:</strong> Valid 2-year UAE Investor Visa, Emirates ID, and registered Ejari residential lease.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>MOFA Attestation:</strong> Marriage certificate and children's birth certificates must be fully attested by MOFA in home country & UAE.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Son / Daughter Age Limits:</strong> Unmarried daughters can be sponsored regardless of age. Sons can be sponsored up to age 25.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Medical Test:</strong> Dependants aged 18+ undergo blood test and chest X-ray in Dubai.</span>
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
            <li><a href="#sponsor-eligibility" className="hover:text-gold-600 underline">1. Sponsor Prerequisites for Dubai Family Visas</a></li>
            <li><a href="#document-attestation" className="hover:text-gold-600 underline">2. MOFA Document Attestation Rules (Marriage & Birth Certificates)</a></li>
            <li><a href="#ejari-housing" className="hover:text-gold-600 underline">3. Ejari Housing Requirement & Deposit Rules</a></li>
            <li><a href="#step-by-step-family" className="hover:text-gold-600 underline">4. Step-by-Step Dependant Application Process</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="sponsor-eligibility" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Sponsor Prerequisites for Dubai Family Visas
          </h2>
          <p>
            As an investor or shareholder in a UAE Freezone or Mainland company, you possess full legal rights to relocate your immediate family to Dubai.
          </p>
          <p>
            You must hold an active UAE Residence Visa, an Emirates ID card, and maintain an approved residential apartment lease (Ejari).
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="document-attestation" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. MOFA Document Attestation Rules (Marriage & Birth Certificates)
          </h2>
          <p>
            Before submitting your family visa application to GDRFA Dubai, your legal relationship certificates must undergo a 3-tier attestation process:
          </p>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Attestation by the Ministry of Foreign Affairs (MOFA) in your home country (e.g. Pakistan, UK, US).</li>
            <li>Attestation by the UAE Embassy in your home country.</li>
            <li>Final attestation by MOFA inside the UAE (or translated into legal Arabic by a certified translator).</li>
          </ol>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            DUBAI FAMILY PRO SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Sponsor Your Family in Dubai with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages MOFA document attestations, GDRFA entry permits, VIP medical appointments, and Emirates ID stamping for your spouse and children.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Family Visa Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="ejari-housing" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Ejari Housing Requirement & Deposit Rules
          </h2>
          <p>
            Immigration requires presenting an official <strong>Ejari lease contract</strong> in the sponsor's name (1-bedroom or 2-bedroom apartment minimum for families).
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="step-by-step-family" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step Dependant Application Process
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Apply for Dependant Entry Permits via GDRFA Dubai portal.</li>
            <li>Perform Status Change for family members inside the UAE.</li>
            <li>Complete medical fitness test for spouse and children over 18.</li>
            <li>Submit biometrics at ICP center and receive 2-year Emirates IDs.</li>
          </ol>
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
            DUBAI FAMILY RELOCATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Relocate Your Family to Dubai Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            MOFA document attestation, GDRFA dependant entry permits, VIP medical testing, and 2-year Emirates ID processing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Family Visa PRO Service
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
