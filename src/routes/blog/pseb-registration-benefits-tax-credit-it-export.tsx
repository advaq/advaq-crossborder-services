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
  Briefcase,
  Percent,
  Award,
} from "lucide-react";

const faqs = [
  {
    q: "What is PSEB Registration and why is it mandatory for IT exporters in Pakistan?",
    a: "PSEB (Pakistan Software Export Board) registration is the official government accreditation for software houses, IT service providers, call centers, and IT freelancers. It unlocks the 0.25% reduced tax regime under Section 154A of the Income Tax Ordinance 2001 and SBP 50% dollar retention accounts.",
  },
  {
    q: "What is the tax rate for PSEB registered IT exporters in Pakistan?",
    a: "Under Section 154A of the Income Tax Ordinance 2001, PSEB registered IT & ITeS exporters enjoy a 0.25% final withholding tax rate on export proceeds, with 99.75% of export income exempt from standard corporate or individual tax.",
  },
  {
    q: "What documents are required for PSEB registration?",
    a: "You need: (1) SECP Incorporation Certificate or Sole Proprietorship NTN, (2) CNIC copies of directors/owners, (3) Company Bank Maintenance Certificate, (4) Office lease or utility bill, and (5) Client export contracts.",
  },
  {
    q: "How long is a PSEB Registration Certificate valid for?",
    a: "A PSEB registration certificate is valid for 1 fiscal year (July 1 to June 30) and must be renewed annually on the PSEB portal.",
  },
  {
    q: "Can freelancers and call centers register with PSEB?",
    a: "Yes! PSEB offers separate registration categories for IT freelancers, call centers, software houses, and IT training centers.",
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
  headline: "PSEB Registration Guide: Benefits & 100% Tax Exemption Rules for IT Exporters",
  description:
    "Complete 2026 PSEB registration guide for Pakistani IT exporters, software houses & freelancers. Learn 0.25% Section 154A tax credit rules, PSEB portal registration steps, and SBP dollar retention benefits.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/pseb-registration-benefits-tax-credit-it-export",
};

export const Route = createFileRoute("/blog/pseb-registration-benefits-tax-credit-it-export")({
  head: () => ({
    meta: [
      { title: "PSEB Registration Benefits & IT Export Tax Credit (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "PSEB registration guide for IT companies & freelancers in Pakistan. 0.25% Section 154A tax regime, PSEB portal application, SBP FCVA retention & renewal rules.",
      },
      {
        name: "keywords",
        content:
          "pseb registration benefits tax credit IT export, section 154A IT export tax rate 0.25 percent, pseb registration documents software house pakistan, call center registration pseb pakistan",
      },
      {
        property: "og:title",
        content: "PSEB Registration Guide: Benefits & 100% Tax Exemption Rules for IT Exporters",
      },
      {
        property: "og:description",
        content:
          "Discover how PSEB registration unlocks 0.25% reduced tax regimes and State Bank of Pakistan 50% dollar retention accounts for software houses.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/pseb-registration-benefits-tax-credit-it-export" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/pseb-registration-benefits-tax-credit-it-export" }],
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
            <span>Pakistan Corporate Setup</span>
          </div>

          <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] leading-[1.15] text-white font-medium">
            PSEB Registration Guide: Benefits & 100% Tax Exemption Rules for IT Exporters
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical tax and regulatory masterclass for Pakistani software houses, SaaS companies, call centers, and IT freelancers on securing Pakistan Software Export Board (PSEB) certification, claiming 0.25% Section 154A final tax rates, and accessing SBP dollar accounts.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan IT Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Income Tax Ordinance Section 154A Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>PSEB Registration Key Perks</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>0.25% Reduced Tax Rate:</strong> IT export proceeds are taxed at a final rate of 0.25% under Section 154A.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>50% SBP Dollar Retention:</strong> Retain up to 50% of foreign export earnings in Exporters' Special FCVA accounts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Subsidized IT Office Spaces:</strong> Access to Software Technology Parks (STPs) across Pakistan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Global Tech Exhibitions:</strong> PSEB subsidies for Gitex Dubai, Leap Saudi Arabia, and London Tech Week booths.</span>
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
            <li><a href="#what-is-pseb" className="hover:text-gold-600 underline">1. What Is the Pakistan Software Export Board (PSEB)?</a></li>
            <li><a href="#section-154a-tax" className="hover:text-gold-600 underline">2. Section 154A 0.25% Reduced Final Tax Regime</a></li>
            <li><a href="#pseb-registration-steps" className="hover:text-gold-600 underline">3. Step-by-Step PSEB Portal Registration Workflow</a></li>
            <li><a href="#sbp-fcva-link" className="hover:text-gold-600 underline">4. Unlocking State Bank of Pakistan 50% FCVA Accounts</a></li>
            <li><a href="#annual-renewal" className="hover:text-gold-600 underline">5. Annual Renewal & FBR Tax Return Compliance</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-pseb" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is the Pakistan Software Export Board (PSEB)?
          </h2>
          <p>
            Operating under the Ministry of Information Technology and Telecommunication (MoITT), the <strong>Pakistan Software Export Board (PSEB)</strong> is the apex government body responsible for promoting Pakistan’s IT industry and software exports.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="section-154a-tax" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Section 154A 0.25% Reduced Final Tax Regime
          </h2>
          <p>
            Under Section 154A of the Income Tax Ordinance 2001, export proceeds derived from software, IT services, and IT-enabled services (ITeS) are subject to a final withholding tax rate of <strong>0.25%</strong> provided the business is registered with PSEB and files annual income tax returns.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN PSEB & IT TAX SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your PSEB Registration Certificate with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares your PSEB portal documentation, manages company accreditation, files Section 154A tax exemptions, and assists with SBP FCVA bank account opening.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/pseb-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order PSEB Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="pseb-registration-steps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step PSEB Portal Registration Workflow
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 ml-2">
            <li>Create company account on the official PSEB registration portal.</li>
            <li>Upload SECP Incorporation Certificate / NTN certificate.</li>
            <li>Submit CNIC copies of directors and Bank Maintenance Certificate.</li>
            <li>Pay annual PSEB registration fee online.</li>
            <li>Receive digital PSEB Registration Certificate (issued in 3-5 business days).</li>
          </ol>
        </div>

        {/* SECTION 4 */}
        <div id="sbp-fcva-link" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Unlocking State Bank of Pakistan 50% FCVA Accounts
          </h2>
          <p>
            Presenting your valid PSEB Registration Certificate to commercial banks in Pakistan allows you to open an <strong>Exporters' Special Foreign Currency Account (FCVA)</strong> to retain 50% of IT export earnings in USD.
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
            PAKISTAN IT EXPORT TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your IT Company with PSEB Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            PSEB portal filing, 0.25% Section 154A tax certificate, SBP 50% dollar retention account setup, and annual renewal compliance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/pseb-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order PSEB Registration Package
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
