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
  AlertTriangle,
  FileText,
  UserCheck,
  Briefcase,
  Scale,
  Percent,
  Receipt,
  Coins,
  HelpCircle,
  BookOpen,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "Is a Company Secretary legally mandatory for a private UK Limited Company in 2026?",
    a: "No. Under Section 270 of the Companies Act 2006, private limited companies (LTDs) are NOT legally required to appoint a Company Secretary unless explicitly mandated by the company's Articles of Association.",
  },
  {
    q: "Who carries out secretary duties if a UK company does not appoint one?",
    a: "If no secretary is appointed, all statutory duties (filing Confirmation Statements, maintaining PSC registers, keeping board minutes, and notifying Companies House of changes) fall legally upon the sole director or board of directors.",
  },
  {
    q: "Are Public Limited Companies (PLCs) required to have a Company Secretary?",
    a: "Yes. Under Section 271 of the Companies Act 2006, Public Limited Companies (PLCs) must have a formally appointed, qualified Company Secretary.",
  },
  {
    q: "Can a sole director also act as the Company Secretary of a UK LTD?",
    a: "Yes. If a private company chooses to appoint a Company Secretary, a sole director can be appointed as the secretary, provided the company's Articles permit it.",
  },
  {
    q: "Can an overseas non-resident act as a UK Company Secretary?",
    a: "Yes. Non-UK residents living abroad can be appointed as a UK Company Secretary. There are no nationality or physical UK residency requirements for company officers.",
  },
  {
    q: "What form is used to notify Companies House of a Company Secretary appointment?",
    a: "Appointing an individual secretary is reported using Form AP03 online. Appointing a corporate secretary is reported using Form AP04 within 14 days of appointment.",
  },
  {
    q: "What happens if our bespoke Articles of Association mandate a Company Secretary?",
    a: "If your company's custom Articles of Association state that a secretary must be appointed, you must either appoint a secretary or pass a Special Resolution (Form SR01) to amend the Articles.",
  },
  {
    q: "Can a corporate secretarial service manage company secretarial duties without formal officer appointment?",
    a: "Yes. Corporate governance service providers like ADVAQ manage all statutory filings, board minutes, and Companies House notifications on your behalf without requiring formal officer appointment on the public register.",
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
  headline: "Is a Company Secretary Mandatory for UK Limited Companies in 2026?",
  description:
    "Exhaustive legal analysis of Companies Act 2006 Section 270 rules. Learn whether private UK LTD companies need a Company Secretary, director responsibilities, and officer appointment rules.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/is-company-secretary-mandatory-uk",
};

export const Route = createFileRoute("/blog/is-company-secretary-mandatory-uk")({
  head: () => ({
    meta: [
      { title: "Is a Company Secretary Mandatory for UK LTD in 2026? (Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Legal breakdown of Companies Act 2006 Section 270. Find out if private UK companies need a Company Secretary & how directors manage secretarial duties.",
      },
      {
        name: "keywords",
        content:
          "is company secretary mandatory uk, section 270 companies act 2006 company secretary, private limited company secretary requirements uk, non resident company secretary uk ltd",
      },
      {
        property: "og:title",
        content: "Is a Company Secretary Mandatory for UK Limited Companies in 2026?",
      },
      {
        property: "og:description",
        content:
          "Discover Companies Act Section 270 rules, officer responsibilities, and how non-resident UK LTD directors handle corporate governance.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/is-company-secretary-mandatory-uk" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/is-company-secretary-mandatory-uk" }],
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
            <span>UK Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Is a Company Secretary Mandatory for UK Limited Companies in 2026?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive legal masterclass on Companies Act 2006 Section 270, corporate officer responsibilities, Articles of Association rules, and non-resident director governance in 2026.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UK Corporate Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>22 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Companies Act 2006 Section 270 Compliance</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Legal Verdict (TL;DR)</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Official UK statutory governance requirements for company secretaries:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Private Limited Company (LTD)</strong>
              <p className="text-navy-100 leading-relaxed">
                <strong>NOT MANDATORY.</strong> Under Section 270 of the Companies Act 2006, private UK companies are not required to have a secretary unless specified in their Articles.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Public Limited Company (PLC)</strong>
              <p className="text-navy-100 leading-relaxed">
                <strong>MANDATORY.</strong> Under Section 271 of the Companies Act 2006, PLCs must appoint a qualified Company Secretary.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Director Responsibility</strong>
              <p className="text-navy-100 leading-relaxed">
                If no secretary is appointed, all statutory duties fall legally on the sole director or board of directors.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Non-Resident Appointee</strong>
              <p className="text-navy-100 leading-relaxed">
                A company secretary can be a non-resident individual living anywhere in the world.
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
            <li><a href="#section-270-rule" className="hover:text-gold-600 underline">1. Companies Act 2006 Section 270 Rule Explained</a></li>
            <li><a href="#who-handles-duties" className="hover:text-gold-600 underline">2. Who Performs Secretarial Duties If No Secretary Is Appointed?</a></li>
            <li><a href="#benefits-of-appointing" className="hover:text-gold-600 underline">3. Why Might a Company Still Choose to Appoint a Secretary?</a></li>
            <li><a href="#governance-matrix" className="hover:text-gold-600 underline">4. Company Secretary & Officer Governance Matrix</a></li>
            <li><a href="#appointment-rules" className="hover:text-gold-600 underline">5. Rules for Appointing a Non-Resident Company Secretary</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Governance Mistakes to Avoid</a></li>
            <li><a href="#articles-check" className="hover:text-gold-600 underline">7. Checking Your Articles of Association Clause</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="section-270-rule" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Companies Act 2006 Section 270 Rule Explained
          </h2>
          <p>
            Prior to April 2008, all UK companies were legally mandated to maintain a Company Secretary.
          </p>
          <p>
            However, the <em>Companies Act 2006 (Section 270)</em> repealed this mandate for private limited companies. Today, a private UK LTD company can operate legally with just <strong>one single director and zero secretary</strong>.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Single Director Setup
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Usman, a software house owner in Pakistan who formed a UK LTD using standard Model Articles. Usman operates as the sole director with zero company secretary appointed. ADVAQ handles his statutory filings, Confirmation Statements, and address updates behind the scenes without needing a formally appointed secretary.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="who-handles-duties" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Who Performs Secretarial Duties If No Secretary Is Appointed?
          </h2>
          <p>
            Eliminating the requirement for a Company Secretary does not eliminate statutory secretarial duties.
          </p>
          <p>
            Instead, all legal governance duties fall directly upon the company's director(s):
          </p>

          <div className="bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6">
            <h4 className="font-bold text-navy-950 text-base flex items-center gap-2">
              <Briefcase className="text-gold-600" size={20} />
              Director Governance Responsibilities:
            </h4>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span>Filing annual Confirmation Statements (CS01) with Companies House.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span>Maintaining statutory registers (PSC register, register of directors/shareholders).</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span>Notifying Companies House of officer changes, address updates, or share allotments within statutory timeframes.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span>Organizing board meetings and recording board minutes.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="benefits-of-appointing" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Why Might a Company Still Choose to Appoint a Secretary?
          </h2>
          <p>
            While optional, many growing UK companies choose to formally appoint a Company Secretary or corporate secretarial service:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-gold-600 text-base mb-1 flex items-center gap-2">
                <UserCheck className="text-gold-600" size={18} />
                Division of Governance Workload
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Allows executive directors to focus 100% on business operations, sales, and strategy while the secretary manages statutory filings.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-navy-950" size={18} />
                Institutional Credibility
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Appointing a formal secretary signals high corporate governance standards to enterprise clients, venture capital investors, and UK banks.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="governance-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Company Secretary & Officer Governance Matrix
          </h2>
          <p>
            Side-by-side comparison of company secretarial requirements across UK corporate structures:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Corporate Structure</th>
                  <th className="p-4 text-gold-500">Secretary Mandatory?</th>
                  <th className="p-4 text-emerald-400">Minimum Directors</th>
                  <th className="p-4">Non-Resident Secretary Allowed?</th>
                  <th className="p-4">Companies House Form</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Private Limited Company (LTD)</td>
                  <td className="p-4 text-emerald-700 font-bold">No (Optional S270)</td>
                  <td className="p-4 text-navy-900">1 Natural Person</td>
                  <td className="p-4 text-emerald-700 font-bold">Yes (Living Anywhere)</td>
                  <td className="p-4 text-navy-900">Form AP03 (Individual) / AP04 (Corporate)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Public Limited Company (PLC)</td>
                  <td className="p-4 text-rose-700 font-bold">Yes (Mandatory S271)</td>
                  <td className="p-4 text-navy-900">2 Directors</td>
                  <td className="p-4 text-navy-900">Yes (Must be Qualified)</td>
                  <td className="p-4 text-navy-900">Form AP03 / AP04</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Overseas Company UK Branch</td>
                  <td className="p-4 text-navy-900">Optional</td>
                  <td className="p-4 text-navy-900">N/A (UK Representative)</td>
                  <td className="p-4 text-navy-900">Yes</td>
                  <td className="p-4 text-navy-900">Form OS AP03</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK CORPORATE GOVERNANCE SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Professional UK Company Secretarial Support
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages statutory filings, Companies House officer appointments, register maintenance, and corporate governance for overseas directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK Secretarial Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="appointment-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Rules for Appointing a Non-Resident Company Secretary
          </h2>
          <p>
            If your UK LTD company decides to appoint a secretary, the appointee can be:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 my-4 pl-2">
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> An individual person (living anywhere in the world, UK or non-UK resident).</li>
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> A corporate entity (corporate secretary).</li>
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> An existing company director.</li>
          </ul>
          <p className="text-sm text-gray-600">
            Form AP03 (for individual secretary) or Form AP04 (for corporate secretary) must be submitted to Companies House within 14 days of appointment.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Governance Mistakes to Avoid
          </h2>
          <p>
            Avoid these six frequent corporate governance errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Neglecting Secretarial Duties When No Secretary Is Appointed
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Operating without a secretary does not excuse directors from filing Confirmation Statements or maintaining PSC registers.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Overlooking Mandatory Clauses in Custom Articles of Association
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Failing to check whether custom bespoke Articles explicitly require a secretary breaches your corporate constitution.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="articles-check" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Checking Your Articles of Association Clause
          </h2>
          <p>
            Before deciding not to appoint a secretary, check your company's <strong>Articles of Association</strong>.
          </p>
          <p>
            If your company was formed using bespoke older Articles that contain an explicit clause stating <em>"The company shall appoint a secretary,"</em> you must either appoint one or amend your Articles via special resolution.
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
            UK CORPORATE GOVERNANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UK LTD with Full Corporate Compliance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Standard Model Articles, Companies House incorporation, London registered address, and statutory secretarial support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Formation Package — £99
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
