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
  Globe2,
  Scale,
  Percent,
  Receipt,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
} from "lucide-react";

const faqs = [
  {
    q: "Can a foreigner own 100% of a Dubai Mainland company without a local sponsor?",
    a: "Yes! Following the historic Foreign Direct Investment (FDI) law reforms under Federal Decree-Law No. 26 of 2020 amending the UAE Commercial Companies Law (Federal Law No. 2 of 2015), foreign investors can legally own 100% equity of over 1,000 commercial and industrial business activities on the Dubai Mainland. The mandatory 51% UAE national local sponsor requirement has been officially abolished across all general trading, technology, healthcare, and commercial sectors.",
  },
  {
    q: "Do I still need a Local Service Agent (LSA) for a professional mainland license?",
    a: "No. Under the updated Commercial Companies Law framework, professional mainland licenses (such as IT consultancy, software architecture, management consulting, or digital services) no longer require a Local Service Agent (LSA). Foreign investors can establish a 100% foreign-owned Sole Establishment or Limited Liability Company (LLC) directly with the Dubai Department of Economy and Tourism (DET).",
  },
  {
    q: "What government authority issues Dubai Mainland business licenses?",
    a: "Commercial, professional, and industrial business licenses on the Dubai Mainland are issued directly by the Department of Economy and Tourism in Dubai (DET). DET oversees trade name reservations, initial approvals, Memorandum of Association (MOA) attestations, and commercial trade license delivery.",
  },
  {
    q: "Do I need a physical commercial office lease (Ejari) for a Dubai Mainland company?",
    a: "Yes. Under standard DET licensing regulations, all Dubai Mainland companies require an approved commercial lease contract registered in the Dubai Land Department Ejari system. However, for early-stage startups and non-resident founders, DET offers an Instant License program that allows operating for the first 12 months with a virtual desk arrangement before requiring a physical commercial office lease.",
  },
  {
    q: "How long does it take to register a Dubai Mainland company from start to finish?",
    a: "The entire DET mainland incorporation process takes between 3 to 5 business days: (1) Initial trade name reservation takes 24 hours, (2) DET Initial Approval takes 24 hours, (3) MOA notary signing takes 1 day, and (4) Final commercial trade license issuance takes 24 hours following Ejari registration or Instant License voucher payment.",
  },
  {
    q: "Do 100% foreign-owned Dubai Mainland entities qualify for Small Business Relief (SBR)?",
    a: "Yes. Under Ministerial Decision No. 73 of 2023, resident Dubai Mainland entities with gross annual revenues below AED 3,000,000 in any tax period can elect to claim Small Business Relief (SBR). Claiming SBR treats the entity as having zero taxable income for that period, effectively exempting it from paying the 9% UAE Corporate Tax rate.",
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
    "Complete 2026 legal guide to registering a 100% foreign-owned Dubai Mainland company. Learn DET trade name approval, Ejari lease requirements, FDI law reforms under Federal Decree-Law No. 26, Corporate Tax rules, and corporate bank setup.",
  author: { "@type": "Organization", name: "ADVAQ UAE Legal & Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/register-dubai-mainland-company-without-local-sponsor",
};

export const Route = createFileRoute("/blog/register-dubai-mainland-company-without-local-sponsor")({
  head: () => ({
    meta: [
      { title: "100% Foreign-Owned Dubai Mainland Company Setup (2026 Masterclass) | ADVAQ" },
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
            A comprehensive, step-by-step legal masterclass for non-resident investors, commercial brands, and service companies on establishing a 100% foreign-owned Dubai Mainland LLC through the Department of Economy and Tourism (DET) under updated UAE Foreign Direct Investment (FDI) laws.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Legal & Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>14 Min Read · Updated July 2026</span>
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
            <span>Dubai Mainland 100% Ownership Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">100% Foreign Ownership</strong>
              <p className="text-navy-100 leading-relaxed">
                Available across 1,000+ commercial, trading, technology, and industrial activities without requiring a 51% UAE national local sponsor.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">DET Licensing Authority</strong>
              <p className="text-navy-100 leading-relaxed">
                Directly licensed by the Dubai Department of Economy and Tourism (DET), authorizing unrestricted onshore business across all 7 Emirates.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Ejari & Instant Desk License</strong>
              <p className="text-navy-100 leading-relaxed">
                Standard setup requires an approved Ejari commercial lease. DET Instant License permits operating for 12 months with a virtual desk allocation.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Corporate Tax Slabs</strong>
              <p className="text-navy-100 leading-relaxed">
                9% tax on net profits exceeding AED 375,000 ($102,000 USD). Small Business Relief (SBR) waives tax for gross revenues under AED 3 Million.
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
            <li><a href="#fdi-reform" className="hover:text-gold-600 underline">1. The 2021 FDI Transformation: End of 51/49 Sponsorship</a></li>
            <li><a href="#det-workflow" className="hover:text-gold-600 underline">2. Step-by-Step DET Mainland Registration Workflow</a></li>
            <li><a href="#license-types-matrix" className="hover:text-gold-600 underline">3. Comprehensive Mainland License Types Matrix</a></li>
            <li><a href="#ejari-office-rules" className="hover:text-gold-600 underline">4. Ejari Office Contract Rules & DET Instant License</a></li>
            <li><a href="#corporate-tax-sbr" className="hover:text-gold-600 underline">5. UAE Corporate Tax Framework & Small Business Relief (SBR)</a></li>
            <li><a href="#mainland-banking" className="hover:text-gold-600 underline">6. Corporate Banking Workflow for Mainland LLCs</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="fdi-reform" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The 2021 FDI Transformation: End of 51/49 Sponsorship
          </h2>
          <p>
            For decades, international entrepreneurs wishing to establish a commercial business on the UAE Mainland were legally required to partner with a local Emirati shareholder who owned 51% of the company's equity under the traditional 51/49 sponsorship model.
          </p>
          <p>
            This requirement changed permanently following the enactment of <strong>Federal Decree-Law No. 26 of 2020</strong>, which comprehensively amended the UAE Commercial Companies Law (Federal Law No. 2 of 2015). Effective June 2021, the UAE government officially abolished the 51% local sponsor mandate for over 1,000 commercial, general trading, software, and industrial business activities.
          </p>
          <p>
            Today, foreign non-residents can establish a Dubai Mainland Limited Liability Company (LLC) or Sole Establishment with <strong>100% full foreign equity ownership</strong>, retaining complete control over company shares, bank account signatories, operational decisions, and profit distributions without needing a local Emirati partner.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="det-workflow" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Step-by-Step DET Mainland Registration Workflow
          </h2>
          <p>
            Registering a 100% foreign-owned Mainland LLC in Dubai is administered directly by the <strong>Dubai Department of Economy and Tourism (DET)</strong>. The process follows a streamlined 5-step execution plan:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Briefcase className="text-gold-600" size={18} />
                Step 1: Trade Name Reservation
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Reserve a unique commercial trade name with DET online. The trade name must conform to DET guidelines (avoiding offensive words, religious terms, or existing trademarked brand names) and will include the legal extension "LLC".
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <FileCheck className="text-gold-600" size={18} />
                Step 2: Obtain DET Initial Approval Certificate
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submit passport copies and background details of all foreign shareholders to DET. DET issues an Initial Approval Certificate confirming that the UAE government raises no objection to the incorporation.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Layers className="text-gold-600" size={18} />
                Step 3: Draft & Notarize Memorandum of Association (MOA)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Draft the official Memorandum of Association (MOA) specifying 100% foreign shareholding, capital allocation, and manager appointments. Sign the MOA electronically or via a Dubai Public Notary.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-gold-600" size={18} />
                Step 4: Register Commercial Lease (Ejari)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Finalize a commercial office or retail shop lease contract and register it in the Dubai Land Department <em>Ejari</em> portal. (Alternatively, select the DET Instant License option for 12-month virtual lease deferral).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Receipt className="text-gold-600" size={18} />
                Step 5: DET Payment Voucher & License Issuance
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pay the official DET payment voucher to receive your commercial Trade License, Memorandum of Association, and Dubai Chamber of Commerce membership certificate.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            DUBAI MAINLAND SETUP SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Form Your 100% Foreign-Owned Mainland LLC with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ manages DET trade name approvals, electronic MOA drafting, Ejari lease registration, and investor residence visa processing.
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
        <div id="license-types-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive Mainland License Types Matrix
          </h2>
          <p>
            Understanding the legal distinctions between the three primary Dubai Mainland license categories:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Mainland License Type</th>
                  <th className="p-4 text-gold-500">Foreign Ownership %</th>
                  <th className="p-4">Local Service Agent (LSA) Mandate</th>
                  <th className="p-4">Target Commercial Activities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Commercial Trading License</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Foreign Equity</td>
                  <td className="p-4 text-emerald-700 font-bold">Abolished (No LSA Required)</td>
                  <td className="p-4 text-navy-900">General Trading, Import/Export, Retail Stores</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Professional Service License</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Foreign Equity</td>
                  <td className="p-4 text-emerald-700 font-bold">Abolished (No LSA Required)</td>
                  <td className="p-4 text-navy-900">IT Consultancy, Management Advisory, Software</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Industrial Manufacturing License</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Foreign Equity</td>
                  <td className="p-4 text-navy-900">Varies by Special Sector Approval</td>
                  <td className="p-4 text-navy-900">Manufacturing, Processing, Heavy Assembly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="ejari-office-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Ejari Office Contract Rules & DET Instant License Option
          </h2>
          <p>
            To complete standard DET mainland incorporation, company owners must present an approved commercial office lease contract registered in the Dubai Land Department <strong>Ejari</strong> system.
          </p>
          <p>
            The physical square footage of your Ejari office lease directly determines your immigration residence visa quota (scaling at approximately 1 visa per 80 sq ft of commercial space).
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Building2 size={18} />
              DET Instant License Advantage for Startups:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              Under the DET Instant License program, foreign founders can obtain a 100% foreign-owned Dubai Mainland commercial license in a single day without immediately renting a physical commercial office space. The Instant License permits operating with a virtual desk allocation for the first 12 months, giving founders time to secure clients before signing a physical Ejari commercial lease in Year 2.
            </p>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="corporate-tax-sbr" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. UAE Corporate Tax Framework & Small Business Relief (SBR)
          </h2>
          <p>
            Dubai Mainland companies are subject to the federal corporate tax framework under Federal Decree-Law No. 47 of 2022.
          </p>
          <p>
            Mainland entities pay a standard <strong>9% Corporate Tax</strong> rate on net taxable business profits exceeding <strong>AED 375,000</strong> ($102,000 USD). Net taxable profits below AED 375,000 are taxed at a 0% rate.
          </p>
          <p>
            Additionally, under <strong>Ministerial Decision No. 73 of 2023</strong> on Small Business Relief (SBR), resident mainland companies with gross annual revenues below <strong>AED 3,000,000</strong> in any tax period ending on or before December 31, 2026, can elect to be treated as having no taxable income. This waives tax payment obligations and simplifies filing for early-stage mainland businesses.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="mainland-banking" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Corporate Banking Workflow for Mainland LLCs
          </h2>
          <p>
            Operating a Dubai Mainland LLC provides immense credibility when applying for corporate business bank accounts.
          </p>
          <p>
            Unlike offshore or certain zero-substance entities, onshore DET Mainland companies enjoy high approval acceptance across tier-1 UAE commercial banks (such as Emirates NBD, Mashreq Bank, ADCB, and Commercial Bank of Dubai) as well as modern digital corporate banks (such as Wio Business).
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">1. Primary Signatory Emirates ID</strong>
              <p className="text-xs text-gray-600">Account signatories must hold a valid 2-year UAE Residence Visa and physical Emirates ID.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">2. DET Trade License & Certified MOA</strong>
              <p className="text-xs text-gray-600">Provide certified digital copies of the DET Commercial License and notarized Memorandum of Association.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">3. Registered Ejari Commercial Lease</strong>
              <p className="text-xs text-gray-600">Present the registered Ejari office contract verifying physical operating premises in Dubai.</p>
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
            DUBAI MAINLAND FORMATION SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your Dubai Mainland Company
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            100% foreign ownership, DET trade license, Ejari office registration, and investor residence visa processing handled by ADVAQ.
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
