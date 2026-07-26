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
  FileText,
  AlertTriangle,
  Scale,
  Globe2,
  Percent,
  Receipt,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "What are UAE Economic Substance Regulations (ESR)?",
    a: "UAE Economic Substance Regulations (enacted under Cabinet Resolution No. 57 of 2020) require UAE entities (Freezone and Mainland) that conduct 'Relevant Activities' to demonstrate genuine physical presence, local operational management, and economic substance inside the United Arab Emirates.",
  },
  {
    q: "What business activities are classified as 'Relevant Activities' under ESR?",
    a: "The 9 Relevant Activities defined under ESR are: (1) Distribution and Service Center Business, (2) Headquarter Business, (3) Holding Company Business, (4) Intellectual Property (IP) Business, (5) Lease-Finance Business, (6) Fund Management Business, (7) Banking Business, (8) Insurance Business, and (9) Shipping Business.",
  },
  {
    q: "What annual filing obligations does ESR impose on UAE companies?",
    a: "Entities carrying out Relevant Activities must fulfill two annual digital filings via the Ministry of Finance (MoF) portal: (1) An annual ESR Notification submitted within 6 months of financial year-end, and (2) An annual Economic Substance Report submitted within 12 months of financial year-end.",
  },
  {
    q: "What are the penalties for non-compliance with UAE ESR regulations?",
    a: "Failing to submit an ESR notification carries an administrative fine of AED 20,000. Failing to satisfy the Economic Substance Test or submit an ESR report carries administrative fines of AED 50,000 for the first year of non-compliance, increasing to AED 400,000 for subsequent years, alongside potential trade license revocation.",
  },
  {
    q: "How does ESR impact Qualifying Freezone Persons (QFZP) claiming 0% Corporate Tax?",
    a: "Maintaining adequate economic substance under ESR is a mandatory statutory prerequisite for Freezone entities seeking to qualify for the 0% Corporate Tax rate on Qualifying Income under Cabinet Decision No. 55 of 2023.",
  },
  {
    q: "Does ESR apply to a 100% foreign-owned IT consulting company with a Flexi-Desk?",
    a: "If an IT consulting company only provides pure IT services to third parties without providing headquarter management or intra-group service center activities, it is generally outside the scope of ESR. However, an annual assessment is recommended to confirm exemption status.",
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
  headline: "Ultimate Guide to UAE Economic Substance Regulations (ESR) for Freezones",
  description:
    "Complete 2026 ESR compliance masterclass guide for UAE Freezone & Mainland companies. Learn 9 relevant activities, Core Income Generating Activities (CIGA), Ministry of Finance notification deadlines, and penalty rules.",
  author: { "@type": "Organization", name: "ADVAQ UAE Tax & Compliance Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uae-economic-substance-regulations-esr-guide",
};

export const Route = createFileRoute("/blog/uae-economic-substance-regulations-esr-guide")({
  head: () => ({
    meta: [
      { title: "UAE Economic Substance Regulations (ESR) Guide (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to UAE Economic Substance Regulations (ESR) for Freezone companies. Learn 9 relevant activities, CIGA tests, MoF portal filing deadlines & AED 50k penalties.",
      },
      {
        name: "keywords",
        content:
          "uae economic substance regulations esr guide, esr relevant activities freezone ciga test, ministry of finance esr notification deadline 6 months, esr penalty fine 50000 400000 aed uae",
      },
      {
        property: "og:title",
        content: "Ultimate Guide to UAE Economic Substance Regulations (ESR) for Freezones",
      },
      {
        property: "og:description",
        content:
          "Master UAE ESR compliance rules, Relevant Activity tests, and Ministry of Finance reporting to protect your company from penalties.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uae-economic-substance-regulations-esr-guide" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uae-economic-substance-regulations-esr-guide" }],
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
            Ultimate Guide to UAE Economic Substance Regulations (ESR) for Freezones
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An in-depth regulatory masterclass for business owners on UAE Economic Substance Regulations (ESR), Core Income Generating Activities (CIGA), Ministry of Finance reporting portals, and non-compliance penalty prevention under Cabinet Resolution No. 57 of 2020.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Tax & Compliance Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Cabinet Resolution No. 57 of 2020 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>ESR Framework Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">9 Relevant Activities</strong>
              <p className="text-navy-100 leading-relaxed">
                Distribution/Service Centers, Headquarters, Holding Companies, IP Business, Lease-Finance, Fund Management, Shipping, Banking, Insurance.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">ESR Notification (6 Months)</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory annual digital filing submitted on the MoF portal within 6 months of financial year-end.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">ESR Report (12 Months)</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory annual report detailing local employees, operating expenses, and office space within 12 months.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Non-Compliance Fines</strong>
              <p className="text-navy-100 leading-relaxed">
                AED 20,000 fine for notification failures; AED 50,000 to AED 400,000 for failing substance tests.
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
            <li><a href="#esr-overview" className="hover:text-gold-600 underline">1. Understanding Cabinet Resolution No. 57 of 2020 (ESR)</a></li>
            <li><a href="#relevant-activities" className="hover:text-gold-600 underline">2. The 9 Relevant Business Activities Specified under ESR</a></li>
            <li><a href="#esr-matrix" className="hover:text-gold-600 underline">3. Comprehensive ESR Relevant Activity & CIGA Test Matrix</a></li>
            <li><a href="#ciga-test" className="hover:text-gold-600 underline">4. Passing the Economic Substance & CIGA Test</a></li>
            <li><a href="#mof-deadlines" className="hover:text-gold-600 underline">5. Ministry of Finance Filing Deadlines & Portal Rules</a></li>
            <li><a href="#corporate-tax-link" className="hover:text-gold-600 underline">6. The Crucial Link Between ESR & 0% Corporate Tax (QFZP)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="esr-overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Understanding Cabinet Resolution No. 57 of 2020 (ESR)
          </h2>
          <p>
            Introduced by the UAE Ministry of Finance under <strong>Cabinet Resolution No. 57 of 2020</strong> and <strong>Ministerial Decision No. 100 of 2020</strong> in alignment with OECD BEPS Action 5 international standards, <strong>Economic Substance Regulations (ESR)</strong> prevent artificial profit shifting by requiring companies operating in specific sectors to demonstrate real operational presence within the UAE.
          </p>
          <p>
            ESR applies to all corporate entities (both Freezone and Mainland LLCs) that derive revenue from any of 9 defined "Relevant Activities."
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="relevant-activities" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The 9 Relevant Business Activities Specified under ESR
          </h2>
          <p>
            ESR compliance applies strictly to licensees conducting one or more of the following 9 Relevant Activities:
          </p>

          <div className="space-y-3 text-sm pl-2 my-4">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">1. Distribution & Service Center Business</strong>
              <p className="text-xs text-gray-600">Purchasing raw materials/goods from foreign related parties for re-sale, or providing consulting/administrative services to foreign group entities.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">2. Headquarter Business</strong>
              <p className="text-xs text-gray-600">Providing senior management, strategic direction, or risk assumption for corporate group entities.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">3. Holding Company Business</strong>
              <p className="text-xs text-gray-600">Holding equity shares in subsidiary entities and deriving dividends or capital gains.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">4. Intellectual Property (IP) Business</strong>
              <p className="text-xs text-gray-600">Holding patents, trademarks, or software copyrights and licensing them to related or third parties for royalties.</p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE ESR COMPLIANCE ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            File Your UAE ESR Notification & Report with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts ESR activity audits, prepares Core Income Generating Activity (CIGA) dossiers, and submits annual notifications on the MoF portal.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/corporate-tax-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order ESR Compliance Filing <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="esr-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive ESR Relevant Activity & CIGA Test Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of Core Income Generating Activities (CIGA):
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Relevant Activity Sector</th>
                  <th className="p-4 text-gold-500">Mandatory CIGA Requirement</th>
                  <th className="p-4 text-emerald-400">Minimum Economic Substance Criteria</th>
                  <th className="p-4">MoF Portal Reporting Mandate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Distribution & Service Center</td>
                  <td className="p-4 text-navy-900">Storing goods, managing orders, providing consulting to group</td>
                  <td className="p-4 text-emerald-700 font-bold">Physical Office + Full-Time Staff + Local Expenses</td>
                  <td className="p-4 text-emerald-700 font-bold">Notification + Full Substance Report</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Pure Equity Holding Company</td>
                  <td className="p-4 text-navy-900">Holding & managing shares, complying with corporate filings</td>
                  <td className="p-4 text-emerald-700 font-bold">Reduced Substance (Flexi-Desk + Corporate Secretary)</td>
                  <td className="p-4 text-navy-900">Notification + Simplified Report</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">High Risk IP Business</td>
                  <td className="p-4 text-navy-900">R&D, marketing, and managing IP assets locally</td>
                  <td className="p-4 text-rose-700 font-bold">Enhanced Substance (Full Dedicated R&D Facility)</td>
                  <td className="p-4 text-rose-700 font-bold">Notification + Full Report + Tax Exchange Notice</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="ciga-test" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Passing the Economic Substance & CIGA Test
          </h2>
          <p>
            To successfully pass an FTA or MoF economic substance audit, licensees conducting Relevant Activities must satisfy a 3-part statutory test:
          </p>

          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>1. Directed and Managed in the UAE:</strong> Holding board of directors meetings in the UAE with physical presence of directors and required quorum.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>2. Core Income Generating Activities (CIGA):</strong> Conducting the main revenue-producing operations inside the UAE.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>3. Adequate Employees, Assets & Expenses:</strong> Employing qualified full-time personnel, maintaining physical office space, and incurring adequate local operating expenditure.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 5 */}
        <div id="mof-deadlines" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Ministry of Finance Filing Deadlines & Portal Rules
          </h2>
          <p>
            Licensees face strict statutory submission timelines on the official Ministry of Finance (MoF) digital portal:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Annual ESR Notification:</strong> Must be filed within <strong>6 months</strong> following the end of the company's financial year (e.g. June 30 for a December 31 FY-end).</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Annual Economic Substance Report:</strong> Must be submitted within <strong>12 months</strong> following the end of the financial year.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="corporate-tax-link" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. The Crucial Link Between ESR & 0% Corporate Tax (QFZP)
          </h2>
          <p>
            Under Cabinet Decision No. 55 of 2023, satisfying Economic Substance Regulations is a non-negotiable prerequisite for Freezone entities seeking <strong>Qualifying Freezone Person (QFZP) status</strong> to maintain a <strong>0% UAE Corporate Tax rate</strong>.
          </p>
          <p>
            Failing to satisfy ESR substance requirements automatically disqualifies a Freezone entity from 0% corporate tax benefits, subjecting profits to standard 9% tax rates.
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
            UAE ESR COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure Full ESR Compliance with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Relevant Activity assessments, Core Income Generating Activity (CIGA) dossiers, and Ministry of Finance ESR portal filings handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/corporate-tax-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order ESR Compliance Filing
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
