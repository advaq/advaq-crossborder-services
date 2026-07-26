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
  HeartPulse,
  IdCard,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What diseases are tested during the UAE Residence Visa Medical Fitness Test?",
    a: "The mandatory UAE medical test screens for communicable diseases including HIV/AIDS, Hepatitis B & C, Syphilis, and Tuberculosis (via chest X-ray).",
  },
  {
    q: "How long does it take to get UAE Medical Fitness Test results?",
    a: "Standard DHA (Dubai Health Authority) medical results take 24 to 48 hours. VIP processing centers (Smart Salem) deliver certified results in as fast as 30 minutes.",
  },
  {
    q: "What happens during the ICP Emirates ID Biometrics appointment?",
    a: "At the ICP (Federal Authority for Identity, Citizenship, Customs and Port Security) center, officers capture your 10-digit digital fingerprints, facial photograph, and iris scan.",
  },
  {
    q: "Do I need to fast before the UAE visa medical blood test?",
    a: "No. Fasting is NOT required for the UAE residency medical blood test.",
  },
  {
    q: "What documents must I bring to the medical test and biometrics center?",
    a: "You must bring: (1) Original Passport, (2) Visa Entry Permit copy, (3) Printed ICP Emirates ID application form, and (4) Passport-size photographs with white background.",
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
  headline: "What is the UAE Medical Fitness Test and Biometrics Process for Emirates ID?",
  description:
    "Complete 2026 procedural guide for UAE residence visa applicants. Learn DHA medical screening (blood test & chest X-ray), VIP Smart Salem centers, ICP biometrics, and Emirates ID card collection.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/uae-medical-test-emirates-id-biometrics-process",
};

export const Route = createFileRoute("/blog/uae-medical-test-emirates-id-biometrics-process")({
  head: () => ({
    meta: [
      { title: "UAE Medical Fitness Test & Biometrics Process (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "UAE Medical Fitness Test & ICP biometrics guide for Emirates ID. DHA blood test & chest X-ray rules, Smart Salem VIP 30-min processing & card collection.",
      },
      {
        name: "keywords",
        content:
          "uae medical test emirates id biometrics process, dha medical fitness test dubai smart salem, icp biometrics appointment fingerprint eye scan uae, emirates id residence visa stamping timeline",
      },
      {
        property: "og:title",
        content: "What is the UAE Medical Fitness Test and Biometrics Process for Emirates ID?",
      },
      {
        property: "og:description",
        content:
          "Master the mandatory DHA medical screening and ICP biometrics workflow for your UAE Residence Visa and Emirates ID.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-medical-test-emirates-id-biometrics-process" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-medical-test-emirates-id-biometrics-process" }],
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
            What is the UAE Medical Fitness Test and Biometrics Process for Emirates ID?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive procedural guide for UAE residency applicants detailing DHA blood screenings, chest X-ray protocols, Smart Salem VIP fast-track centers, ICP biometrics appointments, and Emirates ID delivery.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE PRO Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>7 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>DHA & ICP Government Standard Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Medical & Biometrics Steps</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Medical Fitness Test:</strong> Mandatory blood test & chest X-ray conducted at approved Dubai Health Authority (DHA) centers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>VIP Fast-Track (Smart Salem):</strong> Certified medical results in 30 minutes with luxury lounge service.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>ICP Biometrics:</strong> Digital 10-fingerprint scan, iris scan, and photo capture for first-time applicants.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Card Issuance:</strong> Digital Emirates ID issued in 24 hours; physical card delivered by Tawzea courier.</span>
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
          <ol className="space-y-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#dha-medical-test" className="hover:text-gold-600 underline">1. What Happens During the DHA Medical Fitness Test?</a></li>
            <li><a href="#smart-salem-vip" className="hover:text-gold-600 underline">2. Smart Salem VIP 30-Minute Medical Processing</a></li>
            <li><a href="#icp-biometrics" className="hover:text-gold-600 underline">3. The ICP Biometrics Appointment (Fingerprints & Iris Scan)</a></li>
            <li><a href="#emirates-id-collection" className="hover:text-gold-600 underline">4. Digital ID Activation & Physical Card Delivery</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">5. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="dha-medical-test" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Happens During the DHA Medical Fitness Test?
          </h2>
          <p>
            All expats applying for a new UAE Residence Visa must pass a medical fitness examination administered by the Dubai Health Authority (DHA) or Ministry of Health (MOHAP).
          </p>
          <p>
            The test consists of two mandatory components:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>Blood Screening:</strong> Tests for HIV 1/2, Hepatitis B/C, and Syphilis.</li>
            <li><strong>Chest X-Ray:</strong> Tests for active pulmonary tuberculosis (TB).</li>
          </ul>
        </div>

        {/* SECTION 2 */}
        <div id="smart-salem-vip" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Smart Salem VIP 30-Minute Medical Processing
          </h2>
          <p>
            For busy investors and corporate executives, Dubai features <strong>Smart Salem VIP centers</strong> (located in DIFC, City Walk, and Dubai Knowledge Park).
          </p>
          <p>
            Smart Salem utilizes AI blood testing and automated X-ray analysis to deliver certified medical fitness results directly to GDRFA in just 30 minutes.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            VIP UAE PRO & MEDICAL ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Fast-Track Your Medical & Biometrics with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ arranges VIP Smart Salem medical testing appointments, chauffeur transport, priority ICP biometrics bookings, and fast Emirates ID delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order VIP PRO Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="icp-biometrics" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. The ICP Biometrics Appointment (Fingerprints & Iris Scan)
          </h2>
          <p>
            First-time applicants must visit an official ICP customer happiness center to capture biometric data.
          </p>
          <p>
            The process takes under 10 minutes: officers record 10 digital fingerprints, perform a high-resolution iris scan, and take a digital facial photo.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="emirates-id-collection" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Digital ID Activation & Physical Card Delivery
          </h2>
          <p>
            Once medical and biometrics are complete, your electronic Emirates ID becomes active in the UAE Pass app within 24 hours. The physical plastic card is printed by ICP and delivered to your doorstep via Emirates Post or Tawzea courier.
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
            UAE MEDICAL & BIOMETRICS SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Complete Your UAE Visa Medical with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            VIP 30-minute Smart Salem medical bookings, ICP biometrics scheduling, and Emirates ID courier delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order VIP Visa Medical Package
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
