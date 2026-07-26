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
  Award,
  Crown,
  Sparkles,
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
    q: "What is the UAE Golden Visa for Tech Founders and IT Experts?",
    a: "The UAE Golden Visa is a long-term, 10-year self-sponsored residency visa program established under UAE Cabinet Resolution No. 56 of 2018. It is granted to tech entrepreneurs, software engineers, AI leaders, and specialized executives. It provides 100% independent residency in the UAE without requiring a local employer sponsor.",
  },
  {
    q: "How can tech founders and software engineers qualify for the 10-year Golden Visa?",
    a: "Tech entrepreneurs qualify by: (1) Owning a registered tech business in the UAE valued at AED 2,000,000+ ($545,000 USD), or (2) Obtaining an official nomination letter from an accredited UAE tech incubator (such as Hub71 or DIFC Innovation Hub). Executive software leads and CTOs qualify under the Specialized Talent pathway with an attested STEM bachelor's degree and a basic monthly salary of AED 30,000+.",
  },
  {
    q: "Does the UAE Golden Visa expire if I stay outside the UAE for more than 6 months?",
    a: "No! Unlike standard 2-year residence visas (which automatically nullify if the holder remains outside the UAE for more than 180 consecutive days), 10-year Golden Visa holders can remain outside the UAE for any duration without forfeiting their residency status or Emirates ID.",
  },
  {
    q: "Can Golden Visa holders sponsor their family members and domestic helpers?",
    a: "Yes. Golden Visa holders enjoy enhanced family sponsorship rights, allowing them to sponsor their spouse, unmarried sons of any age, daughters of any age, and domestic staff (such as drivers or housekeepers) under 10-year residency permits.",
  },
  {
    q: "What government bodies issue Golden Visa nominations for tech talent?",
    a: "Golden Visa nominations for technology experts and digital entrepreneurs are issued through the UAE Council for Artificial Intelligence and Digital Economy, the Ministry of Economy, the Dubai Future Foundation, or accredited incubator bodies (such as Hub71 in Abu Dhabi and DIFC Innovation Hub in Dubai).",
  },
  {
    q: "What documents are required to prove the AED 30,000 monthly salary requirement?",
    a: "To prove salary eligibility under the Specialized Talent category, applicants must present: (1) An official MOHRE-registered employment contract specifying a basic monthly salary of at least AED 30,000, (2) A 6-month bank statement demonstrating monthly salary deposits, and (3) An official salary certificate issued by the employer.",
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
  headline: "UAE Golden Visa Guide for Tech Founders, IT Experts & Business Owners (Eligibility)",
  description:
    "Complete 2026 10-year UAE Golden Visa eligibility masterclass for tech founders, software developers, AI leaders, and IT executives. Learn AED 2M capital rules, AED 30k salary thresholds, incubator letters, and application steps.",
  author: { "@type": "Organization", name: "ADVAQ UAE Legal & Immigration Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uae-golden-visa-for-tech-founders-eligibility",
};

export const Route = createFileRoute("/blog/uae-golden-visa-for-tech-founders-eligibility")({
  head: () => ({
    meta: [
      { title: "UAE Golden Visa Guide Tech Founders & IT Experts (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "10-year UAE Golden Visa eligibility guide for tech founders, software developers & IT executives. AED 2M business valuation & AED 30k salary rules.",
      },
      {
        name: "keywords",
        content:
          "uae golden visa for tech founders eligibility, 10 year golden visa dubai software engineer, uae golden visa 30k salary requirement, golden visa entrepreneur endorsement uae",
      },
      {
        property: "og:title",
        content: "UAE Golden Visa Guide for Tech Founders, IT Experts & Business Owners (Eligibility)",
      },
      {
        property: "og:description",
        content:
          "Master the 10-year UAE Golden Visa criteria for tech entrepreneurs, AI experts, and executive software leaders.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-golden-visa-for-tech-founders-eligibility" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-golden-visa-for-tech-founders-eligibility" }],
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
            UAE Golden Visa Guide for Tech Founders, IT Experts & Business Owners (Eligibility)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive, highly detailed eligibility masterclass on securing the prestigious 10-year UAE Golden Visa for technology entrepreneurs, software engineers, AI specialists, and executive business owners under 2026 federal guidelines.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Legal & Immigration Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Federal Authority (ICP) & Ministry of Economy Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <Crown size={18} />
            <span>Golden Visa Core Pathways</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">10-Year Self-Sponsored Residency</strong>
              <p className="text-navy-100 leading-relaxed">
                100% independent residency status. Requires zero national employer sponsor or local guarantor.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Entrepreneur Pathway (AED 2M)</strong>
              <p className="text-navy-100 leading-relaxed">
                Own a technology business valued at AED 2,000,000+ or backed by an accredited incubator (Hub71, DIFC).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Specialized IT Talent (AED 30k)</strong>
              <p className="text-navy-100 leading-relaxed">
                Software leads & CTOs earning AED 30,000+/month basic salary with an attested STEM bachelor's degree.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">No 6-Month Travel Restriction</strong>
              <p className="text-navy-100 leading-relaxed">
                Golden Visa holders can stay outside the UAE for extended periods without forfeiting their residency status.
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
            <li><a href="#what-is-golden-visa" className="hover:text-gold-600 underline">1. What Is the UAE 10-Year Golden Visa Program?</a></li>
            <li><a href="#eligibility-founders" className="hover:text-gold-600 underline">2. Eligibility for Tech Founders & Startup Owners (AED 2M Rules)</a></li>
            <li><a href="#eligibility-executives" className="hover:text-gold-600 underline">3. Eligibility for Software Engineers & IT Executives (AED 30k Salary)</a></li>
            <li><a href="#pathways-matrix" className="hover:text-gold-600 underline">4. Comprehensive Golden Visa Pathways Comparison Matrix</a></li>
            <li><a href="#application-steps" className="hover:text-gold-600 underline">5. Step-by-Step Nomination & ICP Application Process</a></li>
            <li><a href="#family-perks" className="hover:text-gold-600 underline">6. Exclusive Perks: Family Sponsorship & Unlimited Global Mobility</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-golden-visa" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is the UAE 10-Year Golden Visa Program?
          </h2>
          <p>
            The <strong>UAE Golden Visa</strong> is a long-term residency program introduced under Cabinet Resolution No. 56 of 2018 to position the UAE as a premier global hub for innovation, technology, and capital investment.
          </p>
          <p>
            Unlike standard 2-year employment or investor visas, the Golden Visa grants a renewable 10-year residency permit that is 100% self-sponsored. It eliminates the need for an employer sponsor, corporate guarantor, or local Emirati partner.
          </p>
          <p>
            For technology entrepreneurs and senior software leads, the Golden Visa offers complete security of tenure, tax residency benefits, and full immunity from travel absence restrictions.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="eligibility-founders" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Eligibility for Tech Founders & Startup Owners (AED 2M Rules)
          </h2>
          <p>
            Tech entrepreneurs and startup founders can qualify for a 10-year Golden Visa under three distinct sub-pathways:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                Sub-Pathway A: Business Valuation / Capital (AED 2,000,000+)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Owning a registered tech company in Dubai or Abu Dhabi with a total capital valuation of at least <strong>AED 2,000,000</strong> (~$545,000 USD), verified through an audited financial report prepared by a licensed UAE auditor.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Award className="text-gold-600" size={18} />
                Sub-Pathway B: Accredited Tech Incubator Endorsement
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Obtaining an official approval/recommendation letter from an accredited UAE startup incubator, such as <strong>Hub71 (Abu Dhabi)</strong>, <strong>DIFC Innovation Hub (Dubai)</strong>, or <strong>DTEC (Dubai Silicon Oasis)</strong>, certifying that the startup is an innovative tech venture.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Receipt className="text-gold-600" size={18} />
                Sub-Pathway C: Successful Venture Exit (AED 7,000,000+)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Founders who have successfully founded and sold a technology enterprise for a total valuation of not less than <strong>AED 7,000,000</strong> (~$1.9 Million USD) with Ministry of Economy endorsement.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE GOLDEN VISA CONSULTANCY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Apply for Your 10-Year Golden Visa with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ assists tech founders and IT executives with Ministry nomination letters, eligibility audits, document attestation, and 10-year Golden Visa processing.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Golden Visa Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="eligibility-executives" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Eligibility for Software Engineers & IT Executives (AED 30k Salary)
          </h2>
          <p>
            Senior technical professionals qualify under the <strong>Specialized Talent / High-Salaried Professional</strong> category by fulfilling four statutory criteria:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <Sparkles className="text-gold-500" size={20} />
              IT Executive Qualification Checklist:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Specialized Role:</strong> Employment contract as CTO, VP of Engineering, Lead Architect, Principal Developer, or AI Specialist.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Basic Monthly Salary:</strong> Minimum basic monthly salary of <strong>AED 30,000</strong> (~$8,170 USD) verified via MOHRE contract and bank statements.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Educational Degree:</strong> Bachelor's degree in Computer Science, Software Engineering, IT, or STEM field (attested by MOFA).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>MOHRE Classification:</strong> Classified under MOHRE Occupational Skill Level 1 (Executive/Professional Managerial level).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="pathways-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive Golden Visa Pathways Comparison Matrix
          </h2>
          <p>
            Side-by-side comparison of the core UAE 10-Year Golden Visa categories:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Golden Visa Pathway</th>
                  <th className="p-4 text-gold-500">Capital / Salary Threshold</th>
                  <th className="p-4">Endorsement Body</th>
                  <th className="p-4">Key Document Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Tech Entrepreneur / Founder</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 2,000,000 Company Valuation</td>
                  <td className="p-4 text-navy-900">Ministry of Economy / Incubator</td>
                  <td className="p-4 text-navy-900">Audited Financials / Incubator Letter</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Specialized IT Executive / Lead</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 30,000 / Month Salary</td>
                  <td className="p-4 text-navy-900">MOHRE / ICP</td>
                  <td className="p-4 text-navy-900">MOHRE Contract & Attested Degree</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Real Estate Investor</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 2,000,000 Property Value</td>
                  <td className="p-4 text-navy-900">Dubai Land Department (DLD)</td>
                  <td className="p-4 text-navy-900">DLD Title Deed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="application-steps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Step-by-Step Nomination & ICP Application Process
          </h2>
          <p>
            Securing a 10-year Golden Visa follows a structured 5-step application process:
          </p>

          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 1: Nomination Request:</strong> Submit an initial nomination application to the Ministry of Economy or the UAE Council for AI.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 2: Approval Certificate:</strong> Receive the official nomination approval certificate authorizing 10-year residency.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 3: Visa Cancellation & Entry Permit:</strong> Cancel existing 2-year visa (if currently present in UAE) and issue Golden Visa Entry Permit.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 4: DHA VIP Medical & Biometrics:</strong> Undergo VIP medical fitness screening and complete ICP biometrics capture.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 5: 10-Year Golden Emirates ID Delivery:</strong> Receive your physical 10-year Golden Emirates ID card via courier.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 6 */}
        <div id="family-perks" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Exclusive Perks: Family Sponsorship & Unlimited Global Mobility
          </h2>
          <p>
            Golden Visa holders enjoy premium privileges unavailable under standard 2-year visas:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">10-Year Family Sponsorship</strong>
              <p className="text-xs text-gray-600">Sponsor spouse, unmarried sons of any age, daughters of any age, and domestic staff under 10-year visas.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Unrestricted Global Travel</strong>
              <p className="text-xs text-gray-600">Exempt from the 180-day UAE entry rule; residency remains valid even if residing outside the UAE for over 1 year.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Family Visa Continuity</strong>
              <p className="text-xs text-gray-600">In the event of the primary Golden Visa holder's passing, sponsored family members can remain in the UAE until the end of their 10-year visa duration.</p>
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
            10-YEAR UAE GOLDEN VISA SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your 10-Year Golden Visa Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Eligibility audits, Ministry nomination applications, degree attestation, and 10-year Emirates ID processing for tech leaders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/visa-application-support"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Golden Visa Audit
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
