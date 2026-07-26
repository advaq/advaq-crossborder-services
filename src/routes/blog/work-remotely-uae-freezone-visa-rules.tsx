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
  Globe2,
  Laptop,
  Plane,
} from "lucide-react";

const faqs = [
  {
    q: "Can an overseas company director hold a UAE Freezone Visa and live outside Dubai?",
    a: "Yes! Overseas company directors and shareholders can hold a valid 2-year UAE Freezone Residence Visa while continuing to live and work remotely from their home country or traveling internationally.",
  },
  {
    q: "How often must a UAE Freezone Visa holder visit the UAE to maintain residency?",
    a: "To prevent your 2-year UAE Residence Visa from automatically lapsing, you must enter the UAE at least once every 180 days (6 months). A quick 1-day entry through airport passport control resets the 180-day clock.",
  },
  {
    q: "Do I become a tax resident of the UAE if I hold a UAE Freezone Visa?",
    a: "Under UAE Cabinet Decision No. 85 of 2022, you can obtain a formal UAE Tax Residency Certificate (TRC) if you hold a valid residence visa, Ejari/residential lease or company office contract, and satisfy physical presence rules (e.g. 90 days or 183 days depending on primary financial interests).",
  },
  {
    q: "Can I open a personal UAE bank account as an overseas remote director?",
    a: "Yes. Once your Emirates ID is issued, you can open multi-currency personal checking and savings accounts (AED, USD, EUR, GBP) with Wio Bank, Mashreq, or Commercial Bank of Dubai.",
  },
  {
    q: "Does holding a UAE Freezone Visa exempt me from taxes in my home country?",
    a: "Not automatically. Tax residency in your home country depends on that nation's domestic tax laws (such as 183-day physical presence rules or UK statutory residence tests). Consult ADVAQ international tax advisors to structure cross-border tax compliance.",
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
  headline: "Can Overseas Directors Work Remotely with a UAE Freezone Company Visa?",
  description:
    "Complete 2026 remote work & tax residency guide for foreign directors holding a UAE Freezone Visa. Learn 180-day travel rules, tax residency certificates, and international remote operation compliance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/work-remotely-uae-freezone-visa-rules",
};

export const Route = createFileRoute("/blog/work-remotely-uae-freezone-visa-rules")({
  head: () => ({
    meta: [
      { title: "Can Overseas Directors Work Remotely UAE Freezone Visa? (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Can foreign directors work remotely on a UAE Freezone Visa? Learn 180-day entry rules, tax residency certificates, Wio banking & home country tax compliance.",
      },
      {
        name: "keywords",
        content:
          "work remotely uae freezone visa rules, 180 day rule uae residence visa foreign director, uae tax residency certificate trc non resident, remote company director dubai investor visa",
      },
      {
        property: "og:title",
        content: "Can Overseas Directors Work Remotely with a UAE Freezone Company Visa?",
      },
      {
        property: "og:description",
        content:
          "Master remote work rules, 180-day travel requirements, and tax residency certificate benefits for overseas UAE Freezone directors.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/work-remotely-uae-freezone-visa-rules" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/work-remotely-uae-freezone-visa-rules" }],
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
            Can Overseas Directors Work Remotely with a UAE Freezone Company Visa?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical legal and tax guide for international digital founders, software executives, and remote agency owners on operating a UAE company from overseas while maintaining a valid UAE Residence Visa.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ International Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Federal Tax Authority (FTA) Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Remote Director Rules</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>100% Remote Operation Permitted:</strong> Foreign directors can manage their UAE Freezone entity completely from overseas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>180-Day Entry Rule:</strong> To keep your 2-year residence visa active, you must physically enter the UAE at least once every 180 days.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>UAE Tax Residency Certificate (TRC):</strong> Available to visa holders with proper lease or physical presence documentation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Cross-Border Tax Advisory:</strong> Ensure remote management does not accidentally create corporate tax nexus in your home country.</span>
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
            <li><a href="#remote-director-legality" className="hover:text-gold-600 underline">1. Is Operating a UAE Freezone Entity Remotely Legal?</a></li>
            <li><a href="#180-day-rule" className="hover:text-gold-600 underline">2. The 180-Day Travel Rule & Visa Validity</a></li>
            <li><a href="#tax-residency-certificate" className="hover:text-gold-600 underline">3. Qualifying for a UAE Tax Residency Certificate (TRC)</a></li>
            <li><a href="#home-country-nexus" className="hover:text-gold-600 underline">4. Preventing Place of Effective Management (POEM) Tax Risks</a></li>
            <li><a href="#remote-banking" className="hover:text-gold-600 underline">5. Managing Wio & UAE Bank Accounts Remotely</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="remote-director-legality" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Is Operating a UAE Freezone Entity Remotely Legal?
          </h2>
          <p>
            Yes. UAE Freezone regulations (IFZA, Meydan, DMCC, RAKEZ) do not require company directors or shareholders to live in Dubai full-time.
          </p>
          <p>
            You can legally manage invoices, client contracts, software projects, and banking from anywhere in the world.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="180-day-rule" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The 180-Day Travel Rule & Visa Validity
          </h2>
          <p>
            Under UAE immigration rules, standard 2-year Investor and Employee Residence Visas remain valid provided the holder does not remain outside the UAE for more than 180 consecutive days.
          </p>
          <p>
            A quick weekend visit or even a same-day transit flight through Dubai International Airport (DXB) clears the 180-day rule.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE INTERNATIONAL TAX & REMOTE SETUP
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Structure Your Remote UAE Business with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ helps remote founders obtain UAE Freezone licenses, 2-year residence visas, Tax Residency Certificates (TRC), and compliant banking structures.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Remote UAE Setup Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="tax-residency-certificate" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Qualifying for a UAE Tax Residency Certificate (TRC)
          </h2>
          <p>
            The UAE Federal Tax Authority (FTA) issues official <strong>Tax Residency Certificates (TRC)</strong> to individuals and corporate entities.
          </p>
          <p>
            A TRC allows remote directors to leverage Double Taxation Avoidance Agreements (DTAA) between the UAE and over 130 countries worldwide.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="home-country-nexus" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Preventing Place of Effective Management (POEM) Tax Risks
          </h2>
          <p>
            If you manage your UAE company while living full-time in a high-tax country (such as UK, Germany, or Canada), local tax authorities may argue that the company's <em>"Place of Effective Management (POEM)"</em> is located in that country.
          </p>
          <p>
            ADVAQ helps founders establish economic substance in the UAE to protect against POEM tax audits.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="remote-banking" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Managing Wio & UAE Bank Accounts Remotely
          </h2>
          <p>
            Modern UAE digital banks like Wio Business provide mobile apps with multi-currency debit cards, wire transfers, and account management accessible globally 24/7.
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
            UAE REMOTE BUSINESS SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Operate Your UAE Business Remotely with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Freezone incorporation, 2-year residence visas, Tax Residency Certificates, and Wio corporate banking advisory.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Remote UAE Setup Package
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
