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
  Landmark,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "Can a foreigner own 100% of a Dubai Mainland company without a local sponsor?",
    a: "Yes! Following the 2021 Foreign Direct Investment (FDI) law reforms under Federal Decree-Law No. 26 of 2020, foreign investors can legally own 100% of over 1,000 commercial and industrial business activities on the Dubai Mainland without requiring a 51% local UAE sponsor.",
  },
  {
    q: "Do I still need a Local Service Agent (LSA) for a professional mainland license?",
    a: "No. Professional mainland licenses (such as management consulting or IT services) no longer require an LSA. Foreigners can hold 100% direct ownership.",
  },
  {
    q: "What government authority issues Dubai Mainland business licenses?",
    a: "The Department of Economy and Tourism in Dubai (DET) issues mainland commercial, professional, and industrial business licenses.",
  },
  {
    q: "Do I need a physical commercial office lease (Ejari) for a Dubai Mainland company?",
    a: "Yes. All Dubai Mainland companies require an approved commercial lease contract registered in the Dubai Land Department Ejari system (or an instant virtual desk license for the first year).",
  },
  {
    q: "How long does it take to get a Dubai Mainland license?",
    a: "Initial trade name approval takes 24 hours, and full commercial license issuance takes 3 to 5 business days after Ejari approval.",
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
  headline: "How to Register a 100% Foreign-Owned Mainland Company Without a Local Sponsor",
  description:
    "Complete 2026 legal guide to registering a 100% foreign-owned Dubai Mainland company. Learn DET trade name approval, Ejari lease requirements, FDI law reforms, and corporate bank setup.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/register-dubai-mainland-company-without-local-sponsor",
};

export const Route = createFileRoute("/blog/register-dubai-mainland-company-without-local-sponsor")({
  head: () => ({
    meta: [
      { title: "100% Foreign-Owned Dubai Mainland Company Setup (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Register a 100% foreign-owned Dubai Mainland company without a local sponsor. DET trade name approval, Ejari lease rules & Commercial Companies Law guide.",
      },
      {
        name: "keywords",
        content:
          "register dubai mainland company without local sponsor, 100 percent foreign ownership uae mainland, det dubai department of economy and tourism, ejari commercial lease contract uae",
      },
      {
        property: "og:title",
        content: "How to Register a 100% Foreign-Owned Mainland Company Without a Local Sponsor",
      },
      {
        property: "og:description",
        content:
          "Discover how international founders retain 100% equity in Dubai Mainland entities without local sponsors under updated UAE FDI laws.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/register-dubai-mainland-company-without-local-sponsor" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/register-dubai-mainland-company-without-local-sponsor" }],
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
            How to Register a 100% Foreign-Owned Mainland Company Without a Local Sponsor
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive step-by-step legal guide for international investors on registering a 100% foreign-owned Dubai Mainland LLC through the Department of Economy and Tourism (DET).
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Federal Decree-Law No. 26 of 2020 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Mainland Setup Essentials</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>100% Foreign Ownership:</strong> 1,000+ commercial activities (trading, consulting, manufacturing) require zero local UAE sponsorship.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>DET Registration:</strong> Licensed directly by the Department of Economy and Tourism in Dubai.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Ejari Lease Requirement:</strong> Commercial office lease registered with Ejari required for license issuance and visa quota.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Unrestricted Local Trading:</strong> Sell directly to UAE businesses, consumers, and government entities without third-party agents.</span>
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
            <li><a href="#fdi-reform" className="hover:text-gold-600 underline">1. The 2021 FDI Reform: End of 51/49 Local Sponsorship</a></li>
            <li><a href="#det-incorporation-steps" className="hover:text-gold-600 underline">2. Step-by-Step DET Mainland Registration Workflow</a></li>
            <li><a href="#ejari-office-rules" className="hover:text-gold-600 underline">3. Ejari Office Contract & Virtual Desk Options</a></li>
            <li><a href="#corporate-tax-regime" className="hover:text-gold-600 underline">4. UAE Corporate Tax & Small Business Relief Rules</a></li>
            <li><a href="#mainland-banking" className="hover:text-gold-600 underline">5. Opening a Corporate Bank Account for a Mainland Entity</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="fdi-reform" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The 2021 FDI Reform: End of 51/49 Local Sponsorship
          </h2>
          <p>
            The historical requirement for a 51% UAE national local sponsor was officially replaced under <strong>Federal Decree-Law No. 26 of 2020</strong>.
          </p>
          <p>
            Today, foreign non-residents can incorporate a Dubai Mainland LLC with <strong>100% full equity ownership</strong> across general trading, technology, healthcare, and engineering sectors.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="det-incorporation-steps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step DET Mainland Registration Workflow
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 ml-2">
            <li>Reserve a unique business trade name with the Dubai Department of Economy and Tourism (DET).</li>
            <li>Obtain Initial Approval (Pre-approval certificate) from DET.</li>
            <li>Draft and sign the Memorandum of Association (MOA) via public notary or electronic sign.</li>
            <li>Finalize the commercial lease and register Ejari with Dubai Land Department.</li>
            <li>Pay DET voucher fees to receive your official Dubai Mainland Commercial License.</li>
          </ol>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            DUBAI MAINLAND SETUP SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Form Your 100% Foreign-Owned Mainland LLC with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages DET trade name approvals, electronic MOA drafting, Ejari lease registration, and investor residence visas.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/mainland-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Dubai Mainland Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="ejari-office-rules" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Ejari Office Contract & Virtual Desk Options
          </h2>
          <p>
            Mainland companies must present an approved <strong>Ejari</strong> lease contract.
          </p>
          <p>
            For first-year startups, DET offers instant desk licensing options (like the DET Instant License) which allow operating for 12 months before requiring a full commercial office lease.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="corporate-tax-regime" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. UAE Corporate Tax & Small Business Relief Rules
          </h2>
          <p>
            Dubai Mainland companies are subject to 9% UAE Corporate Tax on net annual profits over AED 375,000. Under <strong>Small Business Relief (SBR)</strong>, businesses with revenue under AED 3,000,000 can elect to be treated as having zero taxable income.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="mainland-banking" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Opening a Corporate Bank Account for a Mainland Entity
          </h2>
          <p>
            Mainland LLCs carry high credibility with tier-1 UAE banks (Emirates NBD, Mashreq, Abu Dhabi Commercial Bank) and digital business platforms (Wio Business).
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
            DUBAI MAINLAND FORMATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your Dubai Mainland Company
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            100% foreign ownership, DET trade license, Ejari office registration, and investor visa processing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/mainland-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Dubai Mainland Package
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
