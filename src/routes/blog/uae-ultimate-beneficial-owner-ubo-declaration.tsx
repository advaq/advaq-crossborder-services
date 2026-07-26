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
  FileCheck,
  Lock,
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
    q: "What is an Ultimate Beneficial Owner (UBO) declaration in the UAE?",
    a: "Under Cabinet Resolution No. 109 of 2023 on the Regulation of Real Beneficial Owner Procedures, every registered UAE business entity (Freezone & Mainland) must register and maintain an official Register of Real Beneficial Owners (UBO) with their licensing authority.",
  },
  {
    q: "Who qualifies as an Ultimate Beneficial Owner (UBO)?",
    a: "A UBO is defined as any natural person who ultimately owns or controls 25% or more of the company's capital, voting rights, or shareholder shares (directly or indirectly), or exercises ultimate executive control over the business.",
  },
  {
    q: "What registers must a UAE company maintain under UBO law?",
    a: "All UAE companies must maintain three internal statutory registers: (1) Register of Real Beneficial Owners (UBO), (2) Register of Partners / Shareholders, and (3) Register of Nominee Directors.",
  },
  {
    q: "Within how many days must a company report UBO changes to the licensing authority?",
    a: "Any change or update to UBO details (such as share transfers, passport renewals, or address updates) must be reported to the relevant Freezone authority or Department of Economy and Tourism (DET) within 15 business days.",
  },
  {
    q: "What are the penalties for non-compliance with UAE UBO regulations?",
    a: "Administrative penalties for failing to maintain or submit UBO registers start at AED 20,000 for the first offense and rise to AED 100,000 for repeated offenses, alongside trade license suspensions.",
  },
  {
    q: "Are UBO details publicly accessible on UAE government portals?",
    a: "No. Information contained within UBO registers is strictly confidential under UAE law and is not made accessible to the general public or third parties.",
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
  headline: "Ultimate Beneficial Owner (UBO) Declaration in the UAE: Rules & Compliance",
  description:
    "Complete 2026 UBO compliance masterclass guide for UAE Freezone & Mainland companies. Learn Cabinet Resolution No. 109 of 2023, 25% ownership rules, Real Beneficial Owner registers, and administrative fine prevention.",
  author: { "@type": "Organization", name: "ADVAQ UAE Legal Compliance Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uae-ultimate-beneficial-owner-ubo-declaration",
};

export const Route = createFileRoute("/blog/uae-ultimate-beneficial-owner-ubo-declaration")({
  head: () => ({
    meta: [
      { title: "UAE Ultimate Beneficial Owner (UBO) Guide (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "UAE UBO declaration rules (Cabinet Resolution No. 109 of 2023). 25% ownership criteria, Register of Beneficial Owners, 15-day update rules & fine prevention.",
      },
      {
        name: "keywords",
        content:
          "uae ultimate beneficial owner ubo declaration, register of real beneficial owner uae freezone, cabinet resolution 109 of 2023 ubo threshold 25 percent, ubo penalty fine 20000 100000 aed uae",
      },
      {
        property: "og:title",
        content: "Ultimate Beneficial Owner (UBO) Declaration in the UAE: Rules & Compliance",
      },
      {
        property: "og:description",
        content:
          "Master UAE Real Beneficial Owner (UBO) transparency laws, 25% ownership thresholds, and official register filings.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-ultimate-beneficial-owner-ubo-declaration" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-ultimate-beneficial-owner-ubo-declaration" }],
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
            Ultimate Beneficial Owner (UBO) Declaration in the UAE: Rules & Compliance
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An in-depth legal transparency masterclass for business owners on UAE Cabinet Resolution No. 109 of 2023, registering Ultimate Beneficial Owners (UBO), maintaining statutory shareholder registers, and penalty protection.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Legal Compliance Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Cabinet Resolution No. 109 of 2023 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>UBO Statutory Framework Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">25% UBO Threshold</strong>
              <p className="text-navy-100 leading-relaxed">
                Any natural person owning or controlling 25%+ of company capital or voting rights.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">3 Mandatory Registers</strong>
              <p className="text-navy-100 leading-relaxed">
                (1) Register of Real Beneficial Owners, (2) Register of Partners/Shareholders, (3) Register of Nominee Directors.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">15-Day Update Mandate</strong>
              <p className="text-navy-100 leading-relaxed">
                Notify licensing authority within 15 days of any ownership or passport detail changes.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Administrative Fines</strong>
              <p className="text-navy-100 leading-relaxed">
                Fines start at AED 20,000 to AED 100,000 plus potential trade license suspension.
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
            <li><a href="#ubo-framework" className="hover:text-gold-600 underline">1. Understanding Cabinet Resolution No. 109 of 2023 on UBOs</a></li>
            <li><a href="#who-is-ubo" className="hover:text-gold-600 underline">2. Who Qualifies as an Ultimate Beneficial Owner (25% Rule)</a></li>
            <li><a href="#ubo-matrix" className="hover:text-gold-600 underline">3. Comprehensive UBO Compliance Requirements Matrix</a></li>
            <li><a href="#three-registers" className="hover:text-gold-600 underline">4. The 3 Mandatory Corporate Registers Every Company Must Keep</a></li>
            <li><a href="#reporting-updates" className="hover:text-gold-600 underline">5. Reporting Timelines (15-Day Rule) & Licensing Portals</a></li>
            <li><a href="#penalties" className="hover:text-gold-600 underline">6. Avoiding Fines & Trade License Suspensions</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="ubo-framework" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Understanding Cabinet Resolution No. 109 of 2023 on UBOs
          </h2>
          <p>
            To align with global Financial Action Task Force (FATF) standards and enhance international financial transparency, the UAE government enacted <strong>Cabinet Resolution No. 109 of 2023</strong> on the Regulation of Real Beneficial Owner Procedures.
          </p>
          <p>
            The resolution requires all commercial corporate entities registered in UAE Freezones and Mainland jurisdictions to maintain accurate records of their ultimate human beneficial owners and declare them to licensing authorities.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="who-is-ubo" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Who Qualifies as an Ultimate Beneficial Owner (25% Rule)
          </h2>
          <p>
            Under UAE statutory law, a <strong>Real Beneficial Owner (UBO)</strong> is determined through a 3-tier cascade test:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Users className="text-gold-600" size={18} />
                Tier 1: 25% Equity or Voting Control Test
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Any natural person who ultimately owns or controls <strong>25% or more</strong> of company capital, shares, or voting rights (whether held directly or indirectly through corporate holding entities).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Shield className="text-gold-600" size={18} />
                Tier 2: Ultimate Control Test
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                If no individual meets the 25% ownership threshold, any natural person who exercises ultimate control over the company through contractual rights or director appointments.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                Tier 3: Senior Management Official Test
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                If no natural person is identified under Tier 1 or Tier 2, the natural person holding the executive position of Senior Management Official (Managing Director or CEO).
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE UBO COMPLIANCE SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your UAE UBO Declaration with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares statutory UBO registers, submits official beneficial ownership declarations to Freezone & DET portals, and manages ongoing 15-day updates.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UBO Compliance Filing <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="ubo-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive UBO Compliance Requirements Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of mandatory internal corporate registers:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Mandatory Corporate Register</th>
                  <th className="p-4 text-gold-500">Required Data Fields</th>
                  <th className="p-4 text-emerald-400">Storage Location Mandate</th>
                  <th className="p-4">Submission Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Register of Real Beneficial Owners (UBO)</td>
                  <td className="p-4 text-navy-900">Full Name, Passport Copy, Nationality, % Ownership, Address</td>
                  <td className="p-4 text-emerald-700 font-bold">Registered UAE Office Address</td>
                  <td className="p-4 text-navy-900 font-bold">Within 15 Days of Setup / Change</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Register of Partners / Shareholders</td>
                  <td className="p-4 text-navy-900">Share Certificate Nos, Voting Rights, Number of Shares</td>
                  <td className="p-4 text-emerald-700 font-bold">Registered UAE Office Address</td>
                  <td className="p-4 text-navy-900">Maintained Continuously</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Register of Nominee Directors</td>
                  <td className="p-4 text-navy-900">Nominee Details, Appointing Entity Details, Service Date</td>
                  <td className="p-4 text-emerald-700 font-bold">Registered UAE Office Address</td>
                  <td className="p-4 text-navy-900">Within 15 Days of Appointment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="three-registers" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. The 3 Mandatory Corporate Registers Every Company Must Keep
          </h2>
          <p>
            Under Cabinet Resolution No. 109 of 2023, every active UAE company must maintain three statutory internal registers:
          </p>

          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>1. Register of Beneficial Owners (UBO):</strong> Detailing ultimate natural human owners controlling 25%+ equity.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>2. Register of Partners / Shareholders:</strong> Recording direct shareholdings, voting rights, and share classes.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>3. Register of Nominee Directors:</strong> Listing any individuals serving as directors under formal nominee arrangements.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 5 */}
        <div id="reporting-updates" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Reporting Timelines (15-Day Rule) & Licensing Portals
          </h2>
          <p>
            Whenever a share transfer occurs, a new passport is issued to a shareholder, or residential addresses change, the company must submit an updated UBO declaration to its licensing authority within <strong>15 business days</strong>.
          </p>
          <p>
            Declarations are submitted via digital portals (such as the Dubai DET portal or respective Freezone portal).
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="penalties" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Avoiding Fines & Trade License Suspensions
          </h2>
          <p>
            Failure to maintain or submit statutory UBO registers triggers severe administrative penalties:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">AED 20,000 First Offense Penalty</strong>
              <p className="text-xs text-gray-600">Imposed for failing to file initial UBO records or missing the 15-day update deadline.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">AED 100,000 Repeat Penalty & License Hold</strong>
              <p className="text-xs text-gray-600">Imposed for repeated non-compliance, alongside trade license suspension and bank account freezes.</p>
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
            UAE CORPORATE TRANSPARENCY SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Maintain 100% UBO Compliance with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Beneficial owner register drafting, Freezone & DET portal submissions, and 15-day detail updates handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UBO Compliance Package
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
