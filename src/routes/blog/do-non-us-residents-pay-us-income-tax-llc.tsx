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
  DollarSign,
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
    q: "Do non-US residents pay US federal income tax on US LLC profits?",
    a: "If a single-member foreign-owned US LLC has zero US physical presence, zero US employees or dependent agents, and no US Trade or Business (ETBUS), its income is non-US-sourced. The foreign owner is generally subject to 0% US federal income tax.",
  },
  {
    q: "What does ETBUS mean in US tax law?",
    a: "ETBUS stands for 'Engaged in a Trade or Business within the United States.' You are classified as ETBUS if your business has physical operations, warehouses, dependent agents, or employees physically operating within the US.",
  },
  {
    q: "What is Effectively Connected Income (ECI)?",
    a: "Effectively Connected Income (ECI) is income generated from operating an active trade or business within the United States. ECI is taxed at standard US progressive income tax rates.",
  },
  {
    q: "Does selling digital products or SaaS to US customers create ETBUS?",
    a: "No. Selling digital goods, SaaS subscriptions, or remote services to US clients over the internet from outside the US does NOT create ETBUS or physical US presence by itself.",
  },
  {
    q: "Do I need to file a US personal tax return (Form 1040-NR) if I owe $0 tax?",
    a: "If your single-member LLC has zero US-sourced income and zero ETBUS, you are not required to file Form 1040-NR. However, your LLC must still file annual informational IRS Form 5472 + Form 1120.",
  },
  {
    q: "How do US double taxation treaties protect foreign LLC owners?",
    a: "Under Article 7 of US Model Tax Treaties, business profits of a foreign enterprise are taxable in the US ONLY if the foreign enterprise carries on business through a fixed Permanent Establishment (PE) in the United States.",
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
  headline: "Do Non-US Residents Pay Income Tax on US LLC Profits? (ETBUS Rules & Tax Treaties)",
  description:
    "Exhaustive 2026 IRS tax masterclass guide for non-resident alien US LLC owners. ETBUS rules, Effectively Connected Income (ECI), FDAP income, tax treaties, and 0% federal tax eligibility.",
  author: { "@type": "Organization", name: "ADVAQ US International Tax Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/do-non-us-residents-pay-us-income-tax-llc",
};

export const Route = createFileRoute("/blog/do-non-us-residents-pay-us-income-tax-llc")({
  head: () => ({
    meta: [
      { title: "Do Non-US Residents Pay Tax on US LLC Profits? (ETBUS) (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "IRS tax guide for foreign non-residents owning a US LLC. Learn ETBUS rules, ECI vs FDAP income, tax treaty benefits & 0% US federal tax eligibility.",
      },
      {
        name: "keywords",
        content:
          "do non us residents pay us income tax llc, etbus engaged in trade or business us llc foreign owner, effectively connected income ECI non resident alien, double taxation treaty us llc",
      },
      {
        property: "og:title",
        content: "Do Non-US Residents Pay Income Tax on US LLC Profits? (ETBUS Rules & Tax Treaties)",
      },
      {
        property: "og:description",
        content:
          "Master IRS ETBUS rules, Effectively Connected Income (ECI), and tax treaty protections for foreign non-resident US LLC owners.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/do-non-us-residents-pay-us-income-tax-llc" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/do-non-us-residents-pay-us-income-tax-llc" }],
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
            <span>US Business Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            Do Non-US Residents Pay Income Tax on US LLC Profits? (ETBUS Rules & Tax Treaties)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An in-depth IRS legal and tax analysis masterclass for foreign non-resident founders evaluating ETBUS status, Effectively Connected Income (ECI), FDAP passive income, and double taxation treaty benefits.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ US International Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>16 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>IRS Code Section 861 & 871 Tax Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>0% US Tax Principles</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Pass-Through Tax Entity</strong>
              <p className="text-navy-100 leading-relaxed">
                Single-member LLCs are disregarded by IRS. Profits pass through directly to the foreign owner.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">ETBUS Statutory Rule</strong>
              <p className="text-navy-100 leading-relaxed">
                If you have zero US physical presence, zero US employees, and zero US dependent agents, your business is NOT ETBUS.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">0% Federal Income Tax</strong>
              <p className="text-navy-100 leading-relaxed">
                Non-ETBUS foreign income has $0 US federal income tax liability under IRC Sections 861 & 871.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Mandatory Form 5472</strong>
              <p className="text-navy-100 leading-relaxed">
                You still must file informational IRS Form 5472 annually by April 15 even with $0 tax liability.
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
            <li><a href="#etbus-explained" className="hover:text-gold-600 underline">1. What Does ETBUS (Engaged in Trade or Business) Mean?</a></li>
            <li><a href="#eci-vs-fdap" className="hover:text-gold-600 underline">2. Effectively Connected Income (ECI) vs FDAP Income</a></li>
            <li><a href="#taxability-matrix" className="hover:text-gold-600 underline">3. Comprehensive US Tax & Income Classification Matrix</a></li>
            <li><a href="#digital-founders" className="hover:text-gold-600 underline">4. Why E-Commerce & SaaS Founders Qualify for 0% US Tax</a></li>
            <li><a href="#tax-treaties" className="hover:text-gold-600 underline">5. Double Taxation Treaties & Permanent Establishment (PE)</a></li>
            <li><a href="#home-country-taxes" className="hover:text-gold-600 underline">6. State Income Tax Rules & Home Country Obligations</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="etbus-explained" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Does ETBUS (Engaged in Trade or Business) Mean?
          </h2>
          <p>
            Under Internal Revenue Code <strong>Section 864(b)</strong>, a foreign individual or foreign entity is subject to US federal income tax only if they are classified as being <strong>Engaged in a Trade or Business within the United States (ETBUS)</strong>.
          </p>
          <p>
            To be classified as ETBUS, your business must satisfy a 3-part statutory test: (1) maintain a physical office, retail store, or warehouse in the US, (2) employ US-based employees or dependent agents operating on your behalf in the US, or (3) own physical real estate generating active US rental income. If your company satisfies none of these 3 conditions, it is NOT ETBUS.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="eci-vs-fdap" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Effectively Connected Income (ECI) vs FDAP Income
          </h2>
          <p>
            The IRS categorizes income earned by non-resident aliens into two distinct legal classifications:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Scale className="text-gold-600" size={18} />
                Effectively Connected Income (ECI)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Income generated from operating an active US trade or business (ETBUS). ECI is subject to standard US progressive income tax rates (10% to 37% individual or 21% corporate rate) and requires filing Form 1040-NR.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <DollarSign className="text-gold-600" size={18} />
                FDAP Income (Fixed, Determinable, Annual, Periodical)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Passive investment income derived from US sources (such as US stock dividends, interest, or royalties). FDAP income is subject to a flat 30% US gross withholding tax unless reduced by bilateral tax treaties.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="taxability-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive US Tax & Income Classification Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of business models:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Business Model</th>
                  <th className="p-4 text-gold-500">ETBUS Status</th>
                  <th className="p-4 text-emerald-400">Income Classification</th>
                  <th className="p-4">US Federal Tax Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Remote SaaS / Digital Agency / Freelancing</td>
                  <td className="p-4 text-emerald-700 font-bold">NOT ETBUS</td>
                  <td className="p-4 text-emerald-700 font-bold">Foreign-Sourced Personal Services</td>
                  <td className="p-4 text-emerald-700 font-bold">0% US Federal Tax</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">E-Commerce Dropshipping (Outside US)</td>
                  <td className="p-4 text-emerald-700 font-bold">NOT ETBUS</td>
                  <td className="p-4 text-emerald-700 font-bold">Foreign Sales Income</td>
                  <td className="p-4 text-emerald-700 font-bold">0% US Federal Tax</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Amazon FBA with US Staff/Warehouses</td>
                  <td className="p-4 text-rose-700 font-bold">ETBUS Triggered</td>
                  <td className="p-4 text-navy-900">Effectively Connected Income (ECI)</td>
                  <td className="p-4 text-navy-900">Progressive US Rates (Form 1040-NR)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            US INTERNATIONAL TAX ADVISORY
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Verify Your 0% US Tax Eligibility with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts ETBUS audits, verifies non-resident tax exemptions, prepares IRS Form 5472, and optimizes international tax treaties.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/us-services/single-member-llc-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order US Tax Advisory Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="digital-founders" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Why E-Commerce & SaaS Founders Qualify for 0% US Tax
          </h2>
          <p>
            Under IRS Sourcing Rules (IRC §§ 861 & 862), income derived from personal services, software development, or digital consulting is sourced to the physical location where the services are performed.
          </p>
          <p>
            If a non-resident alien founder writes code, delivers digital marketing services, or manages online store operations while physically located outside the US, the income is classified as foreign-sourced income. As a result, the owner incurs <strong>0% US federal income tax liability</strong>.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="tax-treaties" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Double Taxation Treaties & Permanent Establishment (PE)
          </h2>
          <p>
            Under Article 7 (Business Profits) of US Model Income Tax Treaties, business profits earned by a foreign enterprise are taxable in the US <strong>only if</strong> the foreign enterprise carries on business through a fixed <strong>Permanent Establishment (PE)</strong> in the US.
          </p>
          <p>
            Maintaining a virtual address or employing third-party independent fulfillment centers does not constitute a Permanent Establishment, insulating treaty-country residents from US tax.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="home-country-taxes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. State Income Tax Rules & Home Country Obligations
          </h2>
          <p>
            Incorporating in 0% state income tax states (such as Wyoming, Nevada, or Florida) ensures that no state-level income tax is owed.
          </p>
          <p>
            However, non-resident founders remain obligated to declare their global income and foreign business distributions on their personal income tax returns in their home country (e.g. FBR in Pakistan, HMRC in UK, or local tax authorities).
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
            US INTERNATIONAL TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure US Tax Compliance with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            ETBUS audits, IRS Form 5472 & 1120 pro-forma filings, tax treaty analysis, and non-resident tax structuring handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/us-services/single-member-llc-filing"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order US Tax Advisory
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
