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
  Globe2,
  Scale,
  Percent,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    q: "What diseases are tested during the UAE Residence Visa Medical Fitness Test?",
    a: "The mandatory UAE medical fitness examination screens for communicable diseases to protect public health. The examination includes: (1) A blood screening testing for HIV 1/2, Hepatitis B, Hepatitis C, and Syphilis, and (2) A chest X-ray screening for active Pulmonary Tuberculosis (TB).",
  },
  {
    q: "How long does it take to get UAE Medical Fitness Test results?",
    a: "Standard Dubai Health Authority (DHA) medical centers process certified results within 24 to 48 hours. Premium VIP centers—such as Smart Salem Centers—utilize AI diagnostics to deliver certified medical fitness results directly to GDRFA in as fast as 30 minutes.",
  },
  {
    q: "What happens during the ICP Emirates ID Biometrics appointment?",
    a: "At the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) center, officers capture your official biometric profile: (1) 10 digital fingerprint scans, (2) High-resolution iris scan, and (3) Digital facial photograph. The biometrics appointment takes under 10 minutes.",
  },
  {
    q: "Do I need to fast before the UAE visa medical blood test?",
    a: "No! Fasting is NOT required for the UAE residence visa medical fitness blood test. Applicants can eat and drink normally prior to their appointment.",
  },
  {
    q: "What documents must I bring to the medical test and biometrics center?",
    a: "You must bring: (1) Your original physical Passport, (2) Printed copy of your valid 60-day Entry Permit / Status Change, (3) Printed ICP Emirates ID Registration Form, and (4) 2 passport-size photographs with white background.",
  },
  {
    q: "What happens if an applicant has an old inactive TB scar on their chest X-ray?",
    a: "Under updated DHA protocols, if a chest X-ray shows old, inactive, or healed tuberculosis scars, the applicant is referred to a DHA specialized doctor for additional sputum testing. If confirmed non-contagious, the applicant is issued a conditional medical fitness certificate accompanied by a 1-year preventative monitoring plan.",
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
    "Complete 2026 procedural masterclass guide for UAE residence visa applicants. Learn DHA medical screening (blood test & chest X-ray), VIP Smart Salem centers, ICP biometrics, TB scar rules, and Emirates ID card collection.",
  author: { "@type": "Organization", name: "ADVAQ UAE PRO & Immigration Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uae-medical-test-emirates-id-biometrics-process",
};

export const Route = createFileRoute("/blog/uae-medical-test-emirates-id-biometrics-process")({
  head: () => ({
    meta: [
      { title: "UAE Medical Fitness Test & Biometrics Process (2026 Masterclass) | ADVAQ" },
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
            An exhaustive procedural masterclass for UAE residency applicants detailing DHA blood screenings, chest X-ray protocols, Smart Salem VIP 30-minute processing centers, ICP biometrics appointments, and Emirates ID card courier delivery.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE PRO Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
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
            <span>Medical & Biometrics Procedural Highlights</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">DHA Medical Screening</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory blood screening (HIV, Hepatitis B/C, Syphilis) & chest X-ray (TB) for all residency applicants 18+.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Smart Salem VIP 30-Min Fast-Track</strong>
              <p className="text-navy-100 leading-relaxed">
                AI-driven medical testing center delivering certified results directly to GDRFA in 30 minutes with luxury lounge service.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">ICP Biometrics Capture</strong>
              <p className="text-navy-100 leading-relaxed">
                Capture of 10 digital fingerprints, high-resolution iris scan, and digital photo for first-time applicants.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Emirates ID Activation</strong>
              <p className="text-navy-100 leading-relaxed">
                Digital ID active in UAE Pass mobile app within 24 hours; physical card delivered by Tawzea courier.
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
            <li><a href="#dha-medical-test" className="hover:text-gold-600 underline">1. What Happens During the DHA Medical Fitness Test?</a></li>
            <li><a href="#smart-salem-vip" className="hover:text-gold-600 underline">2. Smart Salem VIP 30-Minute Medical Processing</a></li>
            <li><a href="#center-comparison" className="hover:text-gold-600 underline">3. Comprehensive Medical & Biometrics Center Options Matrix</a></li>
            <li><a href="#icp-biometrics" className="hover:text-gold-600 underline">4. The ICP Biometrics Appointment Protocol (Fingerprints & Iris Scan)</a></li>
            <li><a href="#emirates-id-collection" className="hover:text-gold-600 underline">5. Digital ID Activation & Physical Card Delivery</a></li>
            <li><a href="#tb-scar-protocol" className="hover:text-gold-600 underline">6. Handling Medical Test Inconclusive Results & TB Scar Protocol</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="dha-medical-test" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Happens During the DHA Medical Fitness Test?
          </h2>
          <p>
            Under UAE immigration law, every foreign national applying for a new 2-year or 10-year UAE Residence Visa must pass a mandatory medical fitness examination administered by the Dubai Health Authority (DHA) or Ministry of Health and Prevention (MOHAP).
          </p>
          <p>
            The medical screening protects public health and comprises two primary diagnostic components:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <HeartPulse className="text-gold-600" size={18} />
                1. Diagnostic Blood Screening
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A blood sample is drawn to screen for communicable conditions, specifically HIV 1/2, Hepatitis B (mandatory for specific employment categories), Hepatitis C, and Syphilis.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileText className="text-gold-600" size={18} />
                2. Chest Radiography (Chest X-Ray)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A high-resolution chest X-ray is performed to screen for active Pulmonary Tuberculosis (TB) or infectious lung lesions.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="smart-salem-vip" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Smart Salem VIP 30-Minute Medical Processing
          </h2>
          <p>
            For corporate founders, investors, and busy executives seeking to complete their residency workflow without long waiting times, Dubai established <strong>Smart Salem VIP Medical Centers</strong> located in DIFC (Index Tower), City Walk, and Dubai Knowledge Park.
          </p>
          <p>
            Smart Salem operates as a paperless, AI-powered diagnostic facility. It utilizes automated blood sampling robotics and instant AI chest X-ray analysis to deliver certified medical fitness results directly to GDRFA immigration systems in just <strong>30 minutes</strong>.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="center-comparison" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive Medical & Biometrics Center Options Matrix
          </h2>
          <p>
            Compare processing timelines and government fees across medical center tiers:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Center Category</th>
                  <th className="p-4 text-gold-500">Result Delivery Timeline</th>
                  <th className="p-4 text-emerald-400">Government Fee (AED)</th>
                  <th className="p-4">Queue & Service Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Smart Salem VIP Center</td>
                  <td className="p-4 text-emerald-700 font-bold">30 Minutes Certified</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 750 ($205 USD)</td>
                  <td className="p-4 text-navy-900">Luxury Executive Lounge / Zero Wait</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">DHA Express Medical Center</td>
                  <td className="p-4 text-navy-900 font-bold">4 to 6 Hours</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 500 ($136 USD)</td>
                  <td className="p-4 text-navy-900">Fast-Track Dedicated Desk</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">DHA Standard Medical Center</td>
                  <td className="p-4 text-navy-900">24 to 48 Hours</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 250 ($68 USD)</td>
                  <td className="p-4 text-navy-900">Standard Appointment Queue</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">ICP Main Biometrics Hub</td>
                  <td className="p-4 text-emerald-700 font-bold">Instant Biometrics Capture</td>
                  <td className="p-4 text-navy-900 font-bold">Included in E-ID Fee</td>
                  <td className="p-4 text-navy-900">Scheduled Token System</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="icp-biometrics" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. The ICP Biometrics Appointment Protocol (Fingerprints & Iris Scan)
          </h2>
          <p>
            First-time applicants for a UAE Residence Visa must attend an in-person biometrics appointment at an official Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) customer happiness center.
          </p>
          <p>
            The biometrics capture process takes under 10 minutes and includes:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>10-Finger Digital Fingerprint Scan:</strong> High-resolution digital scan of all ten fingerprints.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>High-Definition Iris Scan:</strong> Ocular iris scanning for biometric passport control matching.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Digital Facial Photograph:</strong> High-resolution digital headshot for smart gate airport integration.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="emirates-id-collection" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Digital ID Activation & Physical Card Delivery
          </h2>
          <p>
            Following successful completion of your DHA medical test and ICP biometrics:
          </p>
          <p>
            1. Your digital Emirates ID is activated within 24 hours in the official <strong>UAE Pass mobile application</strong>, allowing immediate use for opening business bank accounts and registering Ejari leases.
          </p>
          <p>
            2. The physical plastic Emirates ID card is printed by ICP and dispatched via Tawzea or Emirates Post courier, arriving at your designated address within 48 to 72 hours.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="tb-scar-protocol" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Handling Medical Test Inconclusive Results & TB Scar Protocol
          </h2>
          <p>
            If a chest X-ray reveals old, healed, or inactive pulmonary tuberculosis scars:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">DHA Specialist Referral</strong>
              <p className="text-xs text-gray-600">The applicant is referred to a DHA specialized pulmonary clinic for confirmatory sputum testing.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Conditional Medical Clearance</strong>
              <p className="text-xs text-gray-600">If confirmed non-contagious, DHA issues a conditional medical fitness certificate accompanied by a 1-year preventative monitoring agreement.</p>
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
