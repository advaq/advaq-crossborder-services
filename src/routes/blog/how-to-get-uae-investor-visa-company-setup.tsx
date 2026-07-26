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
  IdCard,
  HeartPulse,
  Plane,
} from "lucide-react";

const faqs = [
  {
    q: "How long is a UAE Investor / Partner Residence Visa valid for?",
    a: "UAE Investor and Partner Residence Visas issued through Freezone or Mainland company setup are valid for 2 years (renewable indefinitely as long as the company license remains active).",
  },
  {
    q: "Do I have to live in Dubai full-time to keep my UAE Investor Visa valid?",
    a: "No. However, under standard UAE immigration rules, you must enter the UAE at least once every 180 days (6 months) to keep your residence visa active.",
  },
  {
    q: "What is the process to get a UAE Emirates ID?",
    a: "The Emirates ID process requires: (1) Entry permit issuance, (2) In-person medical fitness test (blood test & chest X-ray), (3) Biometrics capture (fingerprints & eye scan) at an ICP center, and (4) Stamping/issuance of the physical Emirates ID card.",
  },
  {
    q: "How many days must I be physically present in Dubai to complete the visa process?",
    a: "You need to spend approximately 3 to 5 business days in Dubai to complete the medical test and biometrics appointment.",
  },
  {
    q: "Can an Investor Visa holder sponsor their family in Dubai?",
    a: "Yes! Once your Emirates ID is issued, you can sponsor your spouse, children, and parents for UAE residence visas.",
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
  headline: "How to Get a UAE Investor / Partner Visa & Emirates ID Through Company Setup",
  description:
    "Complete 2026 step-by-step guide to obtaining a 2-year UAE Investor Visa and Emirates ID through business formation. Learn entry permit rules, medical fitness tests, biometrics, and family sponsorship.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/how-to-get-uae-investor-visa-company-setup",
};

export const Route = createFileRoute("/blog/how-to-get-uae-investor-visa-company-setup")({
  head: () => ({
    meta: [
      { title: "UAE Investor Visa & Emirates ID Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to get a 2-year UAE Investor Visa & Emirates ID through company setup. Entry permit, medical fitness test, biometrics & family sponsorship guide.",
      },
      {
        name: "keywords",
        content:
          "how to get uae investor visa company setup, 2 year partner visa dubai emirates id, uae medical fitness test biometrics process, sponsor family in dubai investor visa",
      },
      {
        property: "og:title",
        content: "How to Get a UAE Investor / Partner Visa & Emirates ID Through Company Setup",
      },
      {
        property: "og:description",
        content:
          "Master the step-by-step roadmap to obtaining your 2-year UAE Residence Visa and Emirates ID as a business owner or shareholder.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/how-to-get-uae-investor-visa-company-setup" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/how-to-get-uae-investor-visa-company-setup" }],
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
            How to Get a UAE Investor / Partner Visa & Emirates ID Through Company Setup
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive immigration roadmap for international investors on securing a 2-year renewable UAE Residence Visa, completing the medical fitness test, biometrics capture, and obtaining your physical Emirates ID.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Immigration Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE ICP & GDRFA Visa Guidelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Investor Visa Setup Highlights</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>2-Year Validity:</strong> Issued directly through your Freezone or Mainland company trade license.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>3-5 Days Physical Stay:</strong> Requires a brief visit to Dubai for medical fitness testing and biometrics.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Emirates ID Utility:</strong> Unlocks personal bank accounts, local vehicle leasing, long-term apartment rentals, and tax residency certificates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>180-Day Rule:</strong> Keep visa active by entering the UAE at least once every 6 months.</span>
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
            <li><a href="#what-is-investor-visa" className="hover:text-gold-600 underline">1. What Is a UAE Investor / Partner Visa?</a></li>
            <li><a href="#step-by-step-process" className="hover:text-gold-600 underline">2. Step-by-Step Visa & Emirates ID Timeline</a></li>
            <li><a href="#medical-biometrics" className="hover:text-gold-600 underline">3. Medical Fitness Testing & Biometrics Appointment</a></li>
            <li><a href="#benefits-emirates-id" className="hover:text-gold-600 underline">4. Key Benefits of Holding a UAE Emirates ID</a></li>
            <li><a href="#family-sponsorship" className="hover:text-gold-600 underline">5. Sponsoring Family Members (Spouse & Children)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-investor-visa" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is a UAE Investor / Partner Visa?
          </h2>
          <p>
            A <strong>UAE Investor Visa</strong> (or Partner Visa) is a 2-year renewable residence permit granted to foreign shareholders and business owners who register a company in the UAE.
          </p>
          <p>
            It grants official UAE residency status, tax residence eligibility, and access to the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) Emirates ID system.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="step-by-step-process" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step Visa & Emirates ID Timeline
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li><strong>Company License Issuance:</strong> Obtain your Freezone or Mainland E-License.</li>
            <li><strong>Establishment Card (Immigration Card):</strong> Issued in 24-48 hours.</li>
            <li><strong>Entry Permit Application:</strong> Electronic e-visa issued while outside or inside the UAE.</li>
            <li><strong>Status Change:</strong> In-country status modification (no exit required).</li>
            <li><strong>Medical Fitness & Biometrics:</strong> Visit Dubai medical center and ICP fingerprint center.</li>
            <li><strong>Emirates ID Issuance:</strong> Digital Emirates ID issued in 24h; physical card delivered via courier.</li>
          </ol>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE RESIDENCE VISA SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your 2-Year UAE Investor Visa with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages entry permit applications, VIP medical testing, biometrics scheduling, and Emirates ID delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore Residence Visa Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="medical-biometrics" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Medical Fitness Testing & Biometrics Appointment
          </h2>
          <p>
            The mandatory medical test includes a blood screening (HIV, Hepatitis B/C, Syphilis) and a chest X-ray for tuberculosis. VIP processing centers (such as Smart Salem) deliver certified medical results within 30 minutes.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="benefits-emirates-id" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Key Benefits of Holding a UAE Emirates ID
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li>Open personal & corporate multi-currency bank accounts (AED, USD, EUR, GBP).</li>
            <li>Lease residential apartments with Ejari contracts.</li>
            <li>Obtain a UAE driver's license and vehicle registration.</li>
            <li>Apply for Tax Residency Certificates to prevent home country double taxation.</li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="family-sponsorship" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Sponsoring Family Members (Spouse & Children)
          </h2>
          <p>
            As a valid investor visa holder, you can sponsor your spouse and children for 2-year residence visas by presenting your attested marriage certificate, birth certificates, andEjari lease or company office lease.
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
            UAE RESIDENCE VISA SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your 2-Year UAE Residence Visa
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Investor visa processing, VIP medical testing, Emirates ID biometrics scheduling, and family sponsorship support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UAE Investor Visa Service
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
