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
  Globe2,
  Scale,
  Percent,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
} from "lucide-react";

const faqs = [
  {
    q: "How long is a UAE Investor / Partner Residence Visa valid for?",
    a: "UAE Investor and Partner Residence Visas issued through Freezone or Mainland company setup are valid for 2 years (renewable indefinitely every 2 years for as long as the underlying company trade license remains active and in good standing with the licensing authority).",
  },
  {
    q: "Do I have to live in Dubai full-time to keep my UAE Investor Visa valid?",
    a: "No. You do not need to reside in Dubai full-time. However, under standard UAE Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) immigration rules, an Investor Visa holder must physically enter the UAE at least once every 180 days (6 months) to keep their residence visa status active.",
  },
  {
    q: "What is the process to get a UAE Emirates ID?",
    a: "The Emirates ID acquisition sequence requires four primary steps: (1) Entry permit issuance through GDRFA/ICP, (2) In-country status change, (3) Mandatory in-person medical fitness examination (blood screening and chest X-ray) at a DHA center, and (4) Biometrics capture (fingerprint scanning and photograph) at an official ICP biometrics center.",
  },
  {
    q: "How many days must I be physically present in Dubai to complete the visa process?",
    a: "You need to plan a brief stay of approximately 3 to 5 business days in Dubai to complete the medical fitness examination and ICP biometrics appointment. Using fast-track VIP medical testing centers (such as Smart Salem), medical test results are certified within 30 minutes, allowing rapid visa issuance.",
  },
  {
    q: "Can an Investor Visa holder sponsor their family in Dubai?",
    a: "Yes! Once your physical Emirates ID is issued and your company establishment card is active, you can sponsor your spouse, unmarried daughters of any age, sons under 25 years of age, and parents for 2-year UAE residence visas by presenting MOFA-attested relationship certificates.",
  },
  {
    q: "What happens if an applicant fails the DHA medical fitness test?",
    a: "Under UAE immigration law, medical fitness testing screens for communicable diseases, specifically HIV and active Pulmonary Tuberculosis. If an applicant tests positive for HIV or active TB, the residence visa application is denied. However, inactive or scarred TB cases may be referred for specialized preventative monitoring under DHA medical protocols.",
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
    "Complete 2026 step-by-step masterclass guide to obtaining a 2-year UAE Investor Visa and Emirates ID through business formation. Learn entry permit rules, medical fitness tests, biometrics, 180-day travel rules, and family sponsorship.",
  author: { "@type": "Organization", name: "ADVAQ UAE Immigration & Legal Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/how-to-get-uae-investor-visa-company-setup",
};

export const Route = createFileRoute("/blog/how-to-get-uae-investor-visa-company-setup")({
  head: () => ({
    meta: [
      { title: "UAE Investor Visa & Emirates ID Guide (2026 Masterclass) | ADVAQ" },
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
            An exhaustive immigration roadmap for international investors, software agency founders, and business shareholders on securing a 2-year renewable UAE Residence Visa, completing medical fitness screening, capturing ICP biometrics, and unlocking physical Emirates ID privileges.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Immigration & Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE GDRFA & ICP Immigration Guidelines Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Investor Visa Setup Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">2-Year Renewable Validity</strong>
              <p className="text-navy-100 leading-relaxed">
                Issued directly through your Freezone or Mainland company trade license, renewable indefinitely every 2 years.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">3–5 Days Physical Stay</strong>
              <p className="text-navy-100 leading-relaxed">
                Requires a brief visit to Dubai for blood screening, chest X-ray, and ICP fingerprint biometrics capture.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Emirates ID Privileges</strong>
              <p className="text-navy-100 leading-relaxed">
                Unlocks personal AED/USD bank accounts, residential apartment leases, driver's licenses, and tax residency certificates.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">180-Day Travel Rule</strong>
              <p className="text-navy-100 leading-relaxed">
                Maintain active residency status by physically entering the UAE at least once every 6 months (180 days).
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
            <li><a href="#what-is-investor-visa" className="hover:text-gold-600 underline">1. What Is a UAE Investor / Partner Residence Visa?</a></li>
            <li><a href="#step-by-step-process" className="hover:text-gold-600 underline">2. Step-by-Step Immigration Workflow (6 Milestones)</a></li>
            <li><a href="#process-cost-matrix" className="hover:text-gold-600 underline">3. Comprehensive Visa Process Timeline & Cost Matrix</a></li>
            <li><a href="#medical-biometrics" className="hover:text-gold-600 underline">4. Medical Fitness Testing & ICP Biometrics Appointment Protocol</a></li>
            <li><a href="#benefits-emirates-id" className="hover:text-gold-600 underline">5. Key Legal & Personal Benefits of Holding a UAE Emirates ID</a></li>
            <li><a href="#family-sponsorship" className="hover:text-gold-600 underline">6. Sponsoring Family Members (Spouse, Children, & Parents)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-investor-visa" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is a UAE Investor / Partner Residence Visa?
          </h2>
          <p>
            A <strong>UAE Investor Visa</strong> (or Partner Visa) is a 2-year renewable residence permit granted to foreign business owners, shareholders, and investors who incorporate a company on the UAE Mainland or within a UAE Free Zone.
          </p>
          <p>
            Regulated jointly by the General Directorate of Residency and Foreigners Affairs (GDRFA) and the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), the Investor Visa grants foreign nationals official UAE tax residency status, legal residency rights, and access to the physical Emirates ID card system.
          </p>
          <p>
            The visa carries a 2-year renewable validity and does not require full-time physical living in Dubai. To maintain active residency, visa holders must physically enter the UAE at least once every <strong>180 days (6 months)</strong>.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="step-by-step-process" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step Immigration Workflow (6 Milestones)
          </h2>
          <p>
            Securing a 2-year UAE Investor Visa involves a structured 6-step immigration sequence:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Briefcase className="text-gold-600" size={18} />
                Milestone 1: Trade License & MOA Issuance
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Complete your company incorporation in your chosen Freezone (such as Meydan or IFZA) or DET Mainland, receiving your official commercial trade license and Memorandum of Association.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileText className="text-gold-600" size={18} />
                Milestone 2: Ministry of Interior Establishment Card
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Apply for the Ministry of Interior Establishment Card (Immigration File), which establishes your company's official immigration portal for issuing residence visas.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Plane className="text-gold-600" size={18} />
                Milestone 3: 60-Day Entry Permit Application
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Apply for the electronic 60-day Employment or Investor Entry Permit. This e-visa allows entering the UAE specifically to complete residency processing.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Layers className="text-gold-600" size={18} />
                Milestone 4: In-Country Status Change
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Once inside the UAE (or if already present on a visit visa), execute an in-country status modification (Status Change) without exiting the country.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <HeartPulse className="text-gold-600" size={18} />
                Milestone 5: DHA Medical Screening & ICP Biometrics
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Visit a Dubai Health Authority (DHA) center for medical fitness testing (blood screening & chest X-ray) and complete ICP fingerprint biometrics capture.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <IdCard className="text-gold-600" size={18} />
                Milestone 6: Visa Stamping & Emirates ID Delivery
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Receive electronic residence visa approval, and collect your physical 2-year Emirates ID card delivered via Emirates Post courier.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="process-cost-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive Visa Process Timeline & Cost Matrix
          </h2>
          <p>
            Review the itemized legal, medical, and government fee structure for processing a 2-year UAE Investor Visa:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Immigration Step</th>
                  <th className="p-4 text-gold-500">Processing Time</th>
                  <th className="p-4 text-emerald-400">Government Fee Range (AED)</th>
                  <th className="p-4">Mandatory Document Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Establishment Card (Immigration File)</td>
                  <td className="p-4 font-bold text-navy-900">24 to 48 Hours</td>
                  <td className="p-4 font-bold text-emerald-700">AED 2,000 ($545 USD)</td>
                  <td className="p-4 text-navy-900">Trade License & MOA</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">60-Day Entry Permit (E-Visa)</td>
                  <td className="p-4 text-navy-900">24 to 72 Hours</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 1,100 ($300 USD)</td>
                  <td className="p-4 text-navy-900">Passport Copy & Photo</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">In-Country Status Change</td>
                  <td className="p-4 text-navy-900">24 Hours</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 750 ($205 USD)</td>
                  <td className="p-4 text-navy-900">Entry Permit Copy</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">DHA VIP Medical Fitness Test</td>
                  <td className="p-4 text-emerald-700 font-bold">30 Mins (Smart Salem VIP)</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 750 ($205 USD)</td>
                  <td className="p-4 text-navy-900">Original Passport</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">ICP Emirates ID (2-Year Card)</td>
                  <td className="p-4 text-navy-900">24 to 48 Hours Post-Bio</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 370 ($100 USD)</td>
                  <td className="p-4 text-navy-900">ICP Registration Form</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="medical-biometrics" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Medical Fitness Testing & ICP Biometrics Appointment Protocol
          </h2>
          <p>
            The mandatory medical fitness examination is administered under Dubai Health Authority (DHA) protocols.
          </p>
          <p>
            The examination tests for communicable health conditions and includes: (1) A blood screening for HIV, Hepatitis B/C, and Syphilis, and (2) A chest X-ray to screen for active Pulmonary Tuberculosis.
          </p>
          <p>
            While standard DHA medical centers deliver certified test results within 24 to 48 hours, premium VIP centers—such as <strong>Smart Salem VIP Centers</strong> in City Walk or DIFC—utilize automated AI diagnostic systems to deliver certified medical fitness results within <strong>30 minutes</strong>.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="benefits-emirates-id" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Key Legal & Personal Benefits of Holding a UAE Emirates ID
          </h2>
          <p>
            Holding a physical 2-year Emirates ID card unlocks foundational financial and personal privileges in Dubai:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Corporate & Personal Banking:</strong> Unlocks multi-currency business and personal bank accounts (AED, USD, EUR, GBP) with Wio Business, Emirates NBD, or Mashreq.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Residential Real Estate Ejari Leases:</strong> Authorizes signing long-term residential apartment lease contracts registered with Ejari.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>UAE Driver's License & Vehicle Registration:</strong> Convert foreign driving licenses directly or pass RTA tests to purchase and register personal vehicles.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Tax Residency Certificates (TRC):</strong> Apply to the Federal Tax Authority (FTA) for official Tax Residency Certificates to avoid double taxation in foreign jurisdictions.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="family-sponsorship" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Sponsoring Family Members (Spouse, Children, & Parents)
          </h2>
          <p>
            Once your 2-year Emirates ID is issued and company establishment card is active, you can legally sponsor your family members for UAE residence visas:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Spousal Sponsorship</strong>
              <p className="text-xs text-gray-600">Requires a Ministry of Foreign Affairs (MOA) attested marriage certificate translated into Arabic.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Child Sponsorship</strong>
              <p className="text-xs text-gray-600">Sponsor sons up to 25 years of age and unmarried daughters of any age using MOFA-attested birth certificates.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Parent Sponsorship</strong>
              <p className="text-xs text-gray-600">Sponsor both parents under 1-year renewable visas by demonstrating a minimum monthly income threshold (AED 20,000) and medical insurance coverage.</p>
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
            UAE RESIDENCE VISA SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your 2-Year UAE Residence Visa
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Investor visa processing, VIP medical testing, Emirates ID biometrics scheduling, and family sponsorship support handled by ADVAQ.
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
