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
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
  Laptop,
} from "lucide-react";

const faqs = [
  {
    q: "What is PSEB Registration and why is it mandatory for IT exporters in Pakistan?",
    a: "PSEB (Pakistan Software Export Board) registration is the official government accreditation for software houses, IT service providers, SaaS companies, call centers, and IT freelancers. It unlocks the 0.25% reduced tax regime under Section 154A of the Income Tax Ordinance 2001 and SBP 50% FCVA dollar retention accounts.",
  },
  {
    q: "What is the tax rate for PSEB registered IT exporters in Pakistan?",
    a: "Under Section 154A of the Income Tax Ordinance 2001, PSEB registered IT and ITeS exporters enjoy a 0.25% final withholding tax rate on foreign export proceeds, effectively exempting 99.75% of IT export income from standard corporate (29%) or individual income tax.",
  },
  {
    q: "What documents are required for PSEB registration in Pakistan?",
    a: "Required documents include: (1) SECP Incorporation Certificate or Sole Proprietorship NTN, (2) CNIC copies of directors/owners, (3) Official Bank Maintenance Certificate, (4) Office lease agreement or utility bill proof, and (5) Sample export client contracts or online freelancer platform profiles.",
  },
  {
    q: "How long is a PSEB Registration Certificate valid for?",
    a: "A PSEB registration certificate is valid for 1 fiscal year (from July 1 to June 30). IT companies must renew their PSEB registration annually on the PSEB portal before July 30 to maintain continuous tax credit eligibility.",
  },
  {
    q: "Can freelancers and call centers register with PSEB?",
    a: "Yes! PSEB provides specialized registration tracks for: (1) Software Houses & IT Consultancies, (2) Call Centers & BPO Operators, (3) IT Freelancers, and (4) IT Training Institutions.",
  },
  {
    q: "How does PSEB registration enable SBP 50% FCVA dollar retention accounts?",
    a: "By presenting your valid PSEB Registration Certificate to commercial banks (Meezan, HBL, Bank Alfalah), banks open an Exporters' Special Foreign Currency Account (FCVA), allowing you to retain 50% of foreign IT export proceeds in USD to pay for foreign software subscriptions, AWS hosting, and overseas marketing.",
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
    "Complete 2026 PSEB registration masterclass for Pakistani IT exporters, software houses & freelancers. Analysis of 0.25% Section 154A tax credit rules, PSEB portal registration steps, SBP FCVA 50% dollar retention, and call center PTA whitelisting.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan IT Tax Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/pseb-registration-benefits-tax-credit-it-export",
};

export const Route = createFileRoute("/blog/pseb-registration-benefits-tax-credit-it-export")({
  head: () => ({
    meta: [
      { title: "PSEB Registration Benefits & IT Export Tax Credit (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "PSEB registration guide for IT companies & freelancers in Pakistan. 0.25% Section 154A tax regime, PSEB portal application, SBP FCVA retention & renewal rules.",
      },
      {
        name: "keywords",
        content:
          "pseb registration benefits tax credit IT export, section 154A IT export tax rate 0.25 percent, pseb registration documents software house pakistan, call center registration pseb pakistan, sbp fcva 50 percent dollar retention pseb",
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
            An exhaustive tax and regulatory masterclass for Pakistani software houses, SaaS entities, call centers, and IT freelancers on securing Pakistan Software Export Board (PSEB) certification, claiming the 0.25% Section 154A reduced tax regime, and accessing SBP 50% FCVA dollar retention accounts.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan IT Tax Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
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
            <span>PSEB Registration Key Advantages</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">0.25% Section 154A Tax Rate</strong>
              <p className="text-navy-100 leading-relaxed">
                Export proceeds derived from IT and ITeS are taxed at a final rate of 0.25%, granting a 99.75% tax exemption over standard 29% corporate rates.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">50% SBP FCVA Dollar Retention</strong>
              <p className="text-navy-100 leading-relaxed">
                Retain up to 50% of export foreign currency in USD accounts to pay for foreign cloud hosting (AWS, Azure), SaaS, and digital marketing.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Call Center PTA Whitelisting</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory prerequisite for obtaining Pakistan Telecommunication Authority (PTA) IP telephony whitelisting for international call centers.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">International Trade Show Grants</strong>
              <p className="text-navy-100 leading-relaxed">
                Government subsidies and grants for exhibiting at Gitex Dubai, Leap Saudi Arabia, and London Tech Week.
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
            <li><a href="#what-is-pseb" className="hover:text-gold-600 underline">1. What Is the Pakistan Software Export Board (PSEB)?</a></li>
            <li><a href="#section-154a-tax" className="hover:text-gold-600 underline">2. Section 154A 0.25% Reduced Final Tax Regime</a></li>
            <li><a href="#pseb-registration-steps" className="hover:text-gold-600 underline">3. Step-by-Step PSEB Portal Registration Workflow</a></li>
            <li><a href="#sbp-fcva-link" className="hover:text-gold-600 underline">4. Unlocking State Bank of Pakistan 50% FCVA Accounts</a></li>
            <li><a href="#call-center-pta" className="hover:text-gold-600 underline">5. Call Center PSEB Registration & PTA Whitelisting</a></li>
            <li><a href="#subsidies-grants" className="hover:text-gold-600 underline">6. Government Subsidies, STPs & CMMI Grants</a></li>
            <li><a href="#annual-renewal" className="hover:text-gold-600 underline">7. Annual Renewal & FBR Active Taxpayer List (ATL)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-pseb" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is the Pakistan Software Export Board (PSEB)?
          </h2>
          <p>
            Operating under the Ministry of Information Technology and Telecommunication (MoITT), the <strong>Pakistan Software Export Board (PSEB)</strong> is the apex government body mandated to expand Pakistan's IT industry and software exports beyond $3 Billion annually.
          </p>
          <p>
            PSEB acts as the bridge between tech companies, the Federal Board of Revenue (FBR), and the State Bank of Pakistan (SBP). Accreditation is mandatory for any software house, IT consultancy, SaaS vendor, or call center seeking official export incentives under Pakistani law.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="section-154a-tax" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Section 154A 0.25% Reduced Final Tax Regime
          </h2>
          <p>
            The most significant financial benefit of PSEB registration is eligibility for the <strong>Section 154A reduced tax regime</strong> under the Income Tax Ordinance 2001:
          </p>

          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">0.25% Final Tax Mechanism:</strong>
            <p className="text-navy-900 text-sm">
              Foreign export proceeds received in bank accounts registered under Purpose Code "IT Export" are subject to a final withholding tax rate of <strong>0.25%</strong>. The remaining <strong>99.75%</strong> of export gross revenue is legally tax-free, eliminating standard 29% corporate income tax.
            </p>
          </div>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Prerequisites to Claim Section 154A Tax Credit:</h3>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Valid PSEB Registration Certificate for the current fiscal year.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Annual Income Tax Return filed on FBR Iris portal by the statutory deadline.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span>Filing of quarterly withholding tax statements under Section 165.</span></li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="pseb-registration-steps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step PSEB Portal Registration Workflow
          </h2>
          <p>
            Registering on the official PSEB portal involves five straightforward steps:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 1: Account Setup on PSEB Portal</strong>
              <p className="text-xs text-gray-600">Create a company portal profile using corporate NTN and primary director email.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 2: Upload Statutory Documents</strong>
              <p className="text-xs text-gray-600">Upload SECP Incorporation Certificate / Partnership Deed, CNIC copies, Bank Maintenance Certificate, and office lease agreement.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 3: Online Fee Payment</strong>
              <p className="text-xs text-gray-600">Pay official PSEB registration fees online via 1Link PSID or credit card (Fees scale from PKR 5,000 for freelancers to PKR 20,000 for large IT companies).</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 4: PSEB Verification & Certificate Issuance</strong>
              <p className="text-xs text-gray-600">PSEB team reviews documents and issues an official digital <strong>PSEB Registration Certificate</strong> in 3 to 5 business days.</p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="sbp-fcva-link" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Unlocking State Bank of Pakistan 50% FCVA Accounts
          </h2>
          <p>
            Under SBP FE Circular No. 01 of 2023, Pakistani IT exporters registered with PSEB are granted permission to open <strong>Exporters' Special Foreign Currency Accounts (FCVA)</strong>:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Percent className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>50% USD Retention:</strong> Up to 50% of foreign export remittances can be held in USD inside the FCVA account without forced conversion to PKR.</span>
            </li>
            <li className="flex items-start gap-2">
              <Percent className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Permissible Foreign Expenses:</strong> Retained USD funds can be used to pay for foreign cloud infrastructure (AWS, Google Cloud, Azure), overseas digital ad spend (Meta, Google Ads), SaaS subscriptions, and foreign consultant fees using a corporate debit card.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="call-center-pta" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Call Center PSEB Registration & PTA Whitelisting
          </h2>
          <p>
            For international call centers and BPO operators operating in Pakistan, PSEB registration serves an additional critical regulatory function:
          </p>
          <p>
            The <strong>Pakistan Telecommunication Authority (PTA)</strong> requires all international call centers to obtain a valid PSEB Call Center License before whitelisting their VoIP IP addresses and SIP trunks. Operating an un-registered call center can lead to telecom line blocking and heavy PTA fines under illegal call routing regulations.
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
            PAKISTAN IT EXPORT TAX SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your IT Company with PSEB Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            PSEB portal filing, 0.25% Section 154A tax exemption certificate, SBP 50% dollar retention account setup, and annual renewal compliance.
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
