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
    q: "Can a UAE Investor Visa holder sponsor their wife and children in Dubai?",
    a: "Yes! Once an investor or company shareholder receives their active 2-year UAE Residence Visa and physical Emirates ID, they possess full legal rights under GDRFA regulations to sponsor their spouse, unmarried daughters (of any age), and sons up to age 25 for 2-year renewable residence visas.",
  },
  {
    q: "What is the minimum monthly salary or income required to sponsor family in Dubai?",
    a: "Under standard UAE immigration rules, an employee sponsor requires a minimum basic monthly salary of AED 4,000 (or AED 3,000 plus accommodation). However, for UAE company owners and investors holding a valid investor visa, presenting their active commercial trade license and Ejari residential lease satisfies the income requirement.",
  },
  {
    q: "What document attestations are required for family sponsorship in the UAE?",
    a: "Relationship certificates (Marriage Certificate and Children's Birth Certificates) must undergo a mandatory 3-tier attestation chain: (1) Attestation by the Ministry of Foreign Affairs (MOFA) in your home country, (2) Legalization by the UAE Embassy in your home country, and (3) Final attestation by the UAE Ministry of Foreign Affairs (MOFAIC) inside the UAE with certified Arabic translation.",
  },
  {
    q: "Do family members need to undergo medical fitness testing?",
    a: "Spouses and children aged 18 and older must undergo a mandatory medical fitness examination (blood screening for HIV and chest X-ray for active TB) at an approved Dubai Health Authority (DHA) center before their residence visa is stamped.",
  },
  {
    q: "Can a female business owner sponsor her husband and children in Dubai?",
    a: "Yes! Under modern UAE immigration guidelines, female business owners and investors holding a valid UAE Residence Visa enjoy equal sponsorship rights to sponsor their husband and children for 2-year residence visas.",
  },
  {
    q: "What are the health insurance requirements for sponsored dependants in Dubai?",
    a: "Under Dubai Health Authority (DHA) regulations, maintaining a valid health insurance policy for all sponsored dependants is mandatory. Medical insurance coverage must be activated before GDRFA will issue final residence visa approvals and Emirates ID cards.",
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
    "Complete 2026 Dubai family sponsorship masterclass for investor visa holders. Learn document attestation requirements, MOFA rules, medical tests, Ejari lease prerequisites, health insurance, and step-by-step visa processing.",
  author: { "@type": "Organization", name: "ADVAQ UAE Family PRO & Immigration Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/sponsor-family-in-dubai-investor-visa",
};

export const Route = createFileRoute("/blog/sponsor-family-in-dubai-investor-visa")({
  head: () => ({
    meta: [
      { title: "Sponsor Family in Dubai Investor Visa (2026 Masterclass) | ADVAQ" },
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
            A comprehensive, practical family relocation masterclass for UAE investor visa holders detailing MOFA document attestations, Ejari residential leases, DHA medical testing, health insurance activation, and 2-year Emirates ID processing for dependants.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Family PRO Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>GDRFA Dubai Dependant Visa Guidelines Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <Users size={18} />
            <span>Family Visa Strategic Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Sponsor Prerequisites</strong>
              <p className="text-navy-100 leading-relaxed">
                Active 2-year UAE Investor Visa, Emirates ID card, and registered Ejari residential lease contract.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">3-Tier MOFA Attestation</strong>
              <p className="text-navy-100 leading-relaxed">
                Marriage & birth certificates must be fully attested by home country MOFA, UAE Embassy, and UAE MOFAIC.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Son / Daughter Age Rules</strong>
              <p className="text-navy-100 leading-relaxed">
                Unmarried daughters sponsored at any age. Sons sponsored up to 25 years of age (or older if studying).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Medical & Health Insurance</strong>
              <p className="text-navy-100 leading-relaxed">
                Dependants aged 18+ undergo DHA blood screening & X-ray. Mandatory DHA medical insurance coverage.
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
            <li><a href="#sponsor-eligibility" className="hover:text-gold-600 underline">1. Sponsor Prerequisites for Dubai Family Visas</a></li>
            <li><a href="#document-attestation" className="hover:text-gold-600 underline">2. MOFA 3-Tier Document Attestation Workflow</a></li>
            <li><a href="#dependant-matrix" className="hover:text-gold-600 underline">3. Comprehensive Family Dependant Categories & Rules Matrix</a></li>
            <li><a href="#ejari-housing" className="hover:text-gold-600 underline">4. Ejari Residential Lease & Housing Requirements</a></li>
            <li><a href="#step-by-step-family" className="hover:text-gold-600 underline">5. Step-by-Step Dependant Application Sequence</a></li>
            <li><a href="#parent-sponsorship" className="hover:text-gold-600 underline">6. Sponsoring Parents (Father & Mother) Under Investor Visas</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="sponsor-eligibility" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Sponsor Prerequisites for Dubai Family Visas
          </h2>
          <p>
            As a business founder, shareholder, or investor holding a valid 2-year UAE Residence Visa issued through a Freezone or Mainland entity, you possess full statutory rights under General Directorate of Residency and Foreigners Affairs (GDRFA) regulations to relocate your immediate family to Dubai.
          </p>
          <p>
            To act as a family visa sponsor, you must satisfy three baseline prerequisites: (1) Hold an active 2-year UAE Investor/Partner Visa and physical Emirates ID, (2) Hold an active company establishment card, and (3) Maintain a registered residential apartment lease (Ejari) in your name.
          </p>
          <p>
            Under modern UAE immigration guidelines, female business owners and female investors enjoy equal sponsorship rights, allowing them to sponsor their husband and children under identical procedural conditions.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="document-attestation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. MOFA 3-Tier Document Attestation Workflow
          </h2>
          <p>
            Before submitting a family dependant visa application to GDRFA Dubai, all underlying legal relationship documents (Marriage Certificate and Children's Birth Certificates) must undergo a mandatory 3-tier legal attestation chain:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileCheck className="text-gold-600" size={18} />
                Tier 1: Home Country MOFA Attestation
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The original certificate must be attested by the Ministry of Foreign Affairs (or Secretary of State / Foreign Office) in the issuing country (e.g. Pakistan, UK, US, India).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Globe2 className="text-gold-600" size={18} />
                Tier 2: UAE Embassy Legalization
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The document is presented to the official UAE Embassy or Consulate located in your home country for diplomatic verification and consular stamping.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Receipt className="text-gold-600" size={18} />
                Tier 3: UAE MOFAIC In-Country Stamping & Legal Translation
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Upon arrival in Dubai, the certificate receives final attestation from the UAE Ministry of Foreign Affairs and International Cooperation (MOFAIC) and is translated into legal Arabic by a certified Ministry of Justice legal translator.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="dependant-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive Family Dependant Categories & Rules Matrix
          </h2>
          <p>
            Detailed breakdown of sponsorship rules across dependant categories:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Dependant Category</th>
                  <th className="p-4 text-gold-500">Age / Condition Rules</th>
                  <th className="p-4">Mandatory Attested Document</th>
                  <th className="p-4">Medical Fitness Test</th>
                  <th className="p-4 text-emerald-400">Visa Validity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Spouse (Wife / Husband)</td>
                  <td className="p-4 text-navy-900">No Age Limit</td>
                  <td className="p-4 text-navy-900 font-bold">MOFA Attested Marriage Certificate</td>
                  <td className="p-4 text-navy-900">Mandatory (Blood Screening & X-Ray)</td>
                  <td className="p-4 text-emerald-700 font-bold">2 Years Renewable</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Unmarried Daughters</td>
                  <td className="p-4 text-emerald-700 font-bold">No Age Limit (Must be Unmarried)</td>
                  <td className="p-4 text-navy-900">MOFA Attested Birth Certificate</td>
                  <td className="p-4 text-navy-900">Mandatory if 18+ Years Old</td>
                  <td className="p-4 text-emerald-700 font-bold">2 Years Renewable</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Sons</td>
                  <td className="p-4 text-navy-900 font-bold">Up to 25 Years (Older if Student)</td>
                  <td className="p-4 text-navy-900">MOFA Attested Birth Certificate</td>
                  <td className="p-4 text-navy-900">Mandatory if 18+ Years Old</td>
                  <td className="p-4 text-emerald-700 font-bold">2 Years Renewable</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Parents (Father & Mother)</td>
                  <td className="p-4 text-navy-900">Both Parents Jointly Sponsored</td>
                  <td className="p-4 text-navy-900">Attested Birth Cert & Proof of Care</td>
                  <td className="p-4 text-navy-900">Mandatory DHA Screening</td>
                  <td className="p-4 text-navy-900 font-bold">1 Year Renewable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="ejari-housing" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Ejari Residential Lease & Housing Requirements
          </h2>
          <p>
            To process family dependant visas, GDRFA Dubai requires submitting an official <strong>Ejari lease contract</strong> in the sponsor's name.
          </p>
          <p>
            The residential apartment must meet minimum size criteria: a 1-bedroom or 2-bedroom apartment is required for sponsoring a spouse and children. (Studio apartments are generally restricted from family visa sponsorship).
          </p>
          <p>
            You must also present a recent Dubai Electricity and Water Authority (DEWA) utility bill confirming active residential service.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="step-by-step-family" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Step-by-Step Dependant Application Sequence
          </h2>
          <p>
            Processing family residence visas follows a 5-step immigration timeline:
          </p>

          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 1: Dependant Entry Permit:</strong> Apply online via GDRFA or Amer Center for 60-day Dependant Entry Permits for spouse and children.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 2: Status Change:</strong> Execute an in-country status modification once your family members land in Dubai.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 3: DHA Medical Fitness Screening:</strong> Accompany spouse and dependants aged 18+ for blood screening and chest X-ray at DHA medical centers.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 4: Health Insurance Activation:</strong> Purchase and upload mandatory DHA-compliant health insurance coverage for each dependant.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 5: Biometrics & Emirates ID Delivery:</strong> Complete ICP biometrics capture and receive physical 2-year Emirates ID cards via courier.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 6 */}
        <div id="parent-sponsorship" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Sponsoring Parents (Father & Mother) Under Investor Visas
          </h2>
          <p>
            Investor visa holders can sponsor both parents under 1-year renewable residence visas under special humanitarian guidelines:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Joint Parent Sponsorship Mandate</strong>
              <p className="text-xs text-gray-600">Both father and mother must be sponsored together (unless one parent is deceased or divorced, supported by legal certificates).</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Income & Housing Threshold</strong>
              <p className="text-xs text-gray-600">Sponsor must demonstrate a minimum monthly income of AED 20,000 and maintain a minimum 2-bedroom residential Ejari lease.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Comprehensive Health Insurance</strong>
              <p className="text-xs text-gray-600">Must maintain comprehensive private medical insurance policy for each elderly parent.</p>
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
