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
    q: "What is MOFA Attestation in the UAE?",
    a: "MOFA Attestation is the official government legalization process conducted by the UAE Ministry of Foreign Affairs (MOFAIC) to validate foreign educational degrees, marriage certificates, birth certificates, and commercial legal documents for official usage inside the United Arab Emirates.",
  },
  {
    q: "What is the 3-step legal process to attest foreign documents for the UAE?",
    a: "The mandatory 3-step attestation chain includes: (1) Notarization and Foreign Ministry (MOFA / State Dept / FCO) attestation in your home country (e.g. US, UK, Pakistan, India), (2) Consular legalization by the UAE Embassy in your home country, and (3) Final attestation by the UAE Ministry of Foreign Affairs (MOFAIC) inside Dubai or Abu Dhabi.",
  },
  {
    q: "Why do I need degree attestation for a UAE work or investor visa?",
    a: "Degree attestation is legally mandatory for MoHRE executive skill level titles (e.g. General Manager, CTO, Engineer, Consultant), 10-year Specialized Talent Golden Visas (requiring a bachelor's degree and AED 30,000 monthly salary), and specific regulated trade activities.",
  },
  {
    q: "How long does MOFA document attestation take?",
    a: "Complete end-to-end multi-tier attestation takes approximately 7 to 14 business days depending on the country of origin, university verification protocols, and courier transit times.",
  },
  {
    q: "Do personal certificates need legal Arabic translation in the UAE?",
    a: "Yes. Once MOFA attestation is stamped on foreign non-Arabic public documents, they must be legally translated into Arabic by a sworn translator licensed by the UAE Ministry of Justice before submission to courts or government entities.",
  },
  {
    q: "Can ADVAQ handle document attestation if I am already inside the UAE?",
    a: "Yes! ADVAQ provides door-to-door document collection inside the UAE, arranges home country notary and embassy legalizations via global courier partners, and secures final UAE MOFAIC digital stamps.",
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
    "Complete 2026 MOFA attestation masterclass guide for UAE visa & business setup. Learn how to attest educational degrees, marriage certificates, birth certificates, and commercial documents via home country MOFA, UAE Embassy, and UAE MOFA.",
  author: { "@type": "Organization", name: "ADVAQ UAE Legalization Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/mofa-attestation-uae-foreign-documents-guide",
};

export const Route = createFileRoute("/blog/mofa-attestation-uae-foreign-documents-guide")({
  head: () => ({
    meta: [
      { title: "MOFA Document Attestation Guide UAE (2026 Masterclass) | ADVAQ" },
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
            A practical step-by-step legalization masterclass for expatriates and business owners on authenticating foreign educational degrees, marriage certificates, birth records, and commercial documents for UAE residency and company incorporation.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Legalization Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE MOFAIC Foreign Ministry Protocol Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>3-Step Legal Attestation Chain Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Step 1: Home Country Notary & MOFA</strong>
              <p className="text-navy-100 leading-relaxed">
                Notary Public certification and Ministry of Foreign Affairs (MOFA / State Dept) attestation in your home nation.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Step 2: UAE Embassy Legalization</strong>
              <p className="text-navy-100 leading-relaxed">
                Official consular legalization stamp by the UAE Embassy located in your country of origin.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Step 3: UAE MOFAIC Final Stamp</strong>
              <p className="text-navy-100 leading-relaxed">
                Final attestation stamp by the Ministry of Foreign Affairs and International Cooperation inside Dubai or Abu Dhabi.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Legal Arabic Translation</strong>
              <p className="text-navy-100 leading-relaxed">
                Sworn translation into Arabic certified by a UAE Ministry of Justice licensed legal translator.
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
            <li><a href="#what-is-mofa" className="hover:text-gold-600 underline">1. Why Is Document Attestation Required in the UAE?</a></li>
            <li><a href="#attestation-chain" className="hover:text-gold-600 underline">2. The 3-Step International Legalization Chain Explained</a></li>
            <li><a href="#attestation-matrix" className="hover:text-gold-600 underline">3. Comprehensive Attestation Categories Matrix</a></li>
            <li><a href="#educational-degrees" className="hover:text-gold-600 underline">4. Educational Degree Attestation for Executive & Golden Visas</a></li>
            <li><a href="#family-certificates" className="hover:text-gold-600 underline">5. Personal Family Certificates (Marriage & Birth Attestation)</a></li>
            <li><a href="#arabic-translation" className="hover:text-gold-600 underline">6. Ministry of Justice Certified Legal Arabic Translation</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-mofa" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Is Document Attestation Required in the UAE?
          </h2>
          <p>
            Under UAE federal law, government bodies—including the General Directorate of Residency and Foreigners Affairs (GDRFA), Dubai Economy and Tourism (DET), Ministry of Human Resources and Emiratisation (MoHRE), and Freezone Authorities—cannot accept foreign public documents unless they are legally authenticated.
          </p>
          <p>
            <strong>MOFA Attestation</strong> verifies that the signatures, seals, and issuing institutions of foreign certificates are authentic, ensuring seamless legal recognition for visa processing, university equivalency, and commercial entity establishment.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="attestation-chain" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The 3-Step International Legalization Chain Explained
          </h2>
          <p>
            Because the UAE is not a signatory to the Hague Apostille Convention for all document categories, a mandatory 3-step legal chain must be executed:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Award className="text-gold-600" size={18} />
                Step 1: Home Country Notary & Foreign Ministry
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The document is notarized by a certified Notary Public and authenticated by the Ministry of Foreign Affairs (MOFA / State Dept / FCO) in your country of origin.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Globe2 className="text-gold-600" size={18} />
                Step 2: UAE Embassy Consular Legalization
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The authenticated document is presented to the official UAE Embassy or Consulate in your home capital for consular verification.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Shield className="text-gold-600" size={18} />
                Step 3: UAE MOFAIC Final Attestation
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Upon arrival in the UAE, the document receives its final digital or physical attestation stamp from the Ministry of Foreign Affairs and International Cooperation (MOFAIC).
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="attestation-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive Attestation Categories Matrix
          </h2>
          <p>
            Detailed comparative matrix of document legalization categories:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Document Category</th>
                  <th className="p-4 text-gold-500">Mandatory Legal Steps</th>
                  <th className="p-4 text-emerald-400">Primary Usage Purpose</th>
                  <th className="p-4">Turnaround Time</th>
                  <th className="p-4">Legal Arabic Translation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Educational Degrees (Bachelor/Master)</td>
                  <td className="p-4 text-navy-900">University Verification + Home MOFA + UAE Embassy + UAE MOFA</td>
                  <td className="p-4 text-emerald-700 font-bold">Executive Visa / Golden Visa</td>
                  <td className="p-4 text-navy-900">7 to 14 Business Days</td>
                  <td className="p-4 text-emerald-700 font-bold">Mandatory if non-Arabic</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Personal Certificates (Marriage/Birth)</td>
                  <td className="p-4 text-navy-900">Home Registrar + Home MOFA + UAE Embassy + UAE MOFA</td>
                  <td className="p-4 text-emerald-700 font-bold">Family Visa Sponsorship</td>
                  <td className="p-4 text-navy-900">5 to 10 Business Days</td>
                  <td className="p-4 text-emerald-700 font-bold">Mandatory for GDRFA</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Commercial Corporate Papers (POA / MOA)</td>
                  <td className="p-4 text-navy-900">Commercial Notary + Chamber of Commerce + UAE Embassy + UAE MOFA</td>
                  <td className="p-4 text-emerald-700 font-bold">Branch Formation / Bank Account</td>
                  <td className="p-4 text-navy-900">10 to 18 Business Days</td>
                  <td className="p-4 text-emerald-700 font-bold">Mandatory for Courts/DET</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="educational-degrees" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Educational Degree Attestation for Executive & Golden Visas
          </h2>
          <p>
            Attested bachelor's and master's degrees are required for MoHRE Skill Level 1 employment titles (General Manager, CTO, Specialist Engineer, Legal Advisor).
          </p>
          <p>
            Furthermore, applying for the <strong>10-Year Specialized Talent Golden Visa</strong> under the Skilled Employee pathway requires submitting a MOFA-attested bachelor's degree alongside proof of a minimum monthly salary of AED 30,000.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="family-certificates" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Personal Family Certificates (Marriage & Birth Attestation)
          </h2>
          <p>
            When sponsoring a spouse or children under a 2-year UAE Investor Visa or Golden Visa, GDRFA immigration requires submitting a fully MOFA-attested marriage certificate and children's birth certificates.
          </p>
          <p>
            Attestation validates the legal family relationship and prevents delays in Emirates ID issuance for dependents.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="arabic-translation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Ministry of Justice Certified Legal Arabic Translation
          </h2>
          <p>
            Once foreign certificates receive their final MOFAIC stamp, non-Arabic documents must undergo <strong>legal Arabic translation</strong> by a sworn translator licensed by the UAE Ministry of Justice.
          </p>
          <p>
            Legal translations carry an official Ministry of Justice stamp recognized by courts, notary public offices, and government departments.
          </p>
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
            MOFA ATTESTATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Legalize Your Certificates for the UAE
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Home country notary, UAE Embassy attestation, UAE MOFAIC stamping, and Ministry of Justice legal Arabic translation handled by ADVAQ.
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
