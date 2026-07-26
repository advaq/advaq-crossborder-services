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
  CreditCard,
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
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "Can a foreign non-resident open a corporate bank account in Dubai?",
    a: "Yes. By registering a UAE Freezone or Mainland company and obtaining an investor Emirates ID, foreign non-residents can open full multi-currency business bank accounts (AED, USD, EUR, GBP) in Dubai with complete international transaction capabilities.",
  },
  {
    q: "What is the fastest bank to open a business account for a new Freezone company?",
    a: "Wio Bank (Wio Business) offers the fastest digital corporate onboarding in the UAE. As a regulated digital business bank backed by First Abu Dhabi Bank (FAB) and ADQ, Wio Business approves multi-currency business accounts online in 2 to 4 business days.",
  },
  {
    q: "What documents are required to open a corporate bank account in Dubai?",
    a: "You must provide a complete corporate KYC dossier: (1) Official Trade License, (2) Certified Memorandum of Association (MOA) and Share Certificate, (3) Investor Emirates ID and Passport copies of all 20%+ shareholders, (4) 6-month personal or foreign company bank statements, and (5) Proof of business background (3 signed client contracts, sample invoices, and active company website).",
  },
  {
    q: "What is the minimum account balance requirement for traditional UAE banks?",
    a: "Traditional physical commercial banks (such as Emirates NBD, Mashreq Bank, or ADCB) require maintaining a minimum monthly average balance ranging from AED 25,000 to AED 50,000 to avoid low balance penalty fees (typically AED 250 per month). Wio Business offers starter plans with zero minimum balance requirements.",
  },
  {
    q: "Is physical presence required in Dubai to open a corporate bank account?",
    a: "For digital banking platforms like Wio Business, account opening is conducted 100% online using your Emirates ID and facial recognition via the mobile application. For traditional tier-1 physical banks, a physical in-person meeting with a bank relationship manager in Dubai is mandatory.",
  },
  {
    q: "What are the most common reasons for UAE corporate bank account rejection?",
    a: "Common account rejection triggers include: (1) Failure to demonstrate active business background or proof of clients, (2) Operating in high-risk unapproved jurisdictions, (3) Lack of physical or virtual economic substance in the UAE, and (4) Incomplete or inconsistent UBO background documentation.",
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
  headline: "How to Open a Corporate Bank Account in Dubai for a New Freezone Company",
  description:
    "Complete 2026 banking masterclass for foreign founders in Dubai. Learn how to open business accounts with Wio Bank, Emirates NBD, and Mashreq, KYC documentation rules, compliance interviews, and minimum balance requirements.",
  author: { "@type": "Organization", name: "ADVAQ UAE Banking & Financial Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/open-corporate-bank-account-in-dubai-freezone",
};

export const Route = createFileRoute("/blog/open-corporate-bank-account-in-dubai-freezone")({
  head: () => ({
    meta: [
      { title: "Open Corporate Bank Account in Dubai Freezone (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to opening a corporate bank account in Dubai for Freezone companies. Wio Bank, Emirates NBD & Mashreq setup, KYC documents & minimum balance rules.",
      },
      {
        name: "keywords",
        content:
          "open corporate bank account in dubai freezone, wio bank business account foreign non resident, uae business bank account kyc requirements, dubai bank account opening timeline",
      },
      {
        property: "og:title",
        content: "How to Open a Corporate Bank Account in Dubai for a New Freezone Company",
      },
      {
        property: "og:description",
        content:
          "Master the corporate banking workflow in Dubai to open multi-currency AED/USD business bank accounts for your Freezone entity.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/open-corporate-bank-account-in-dubai-freezone" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/open-corporate-bank-account-in-dubai-freezone" }],
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
            How to Open a Corporate Bank Account in Dubai for a New Freezone Company
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive corporate banking masterclass for foreign founders, IT agency owners, and digital consultants on navigating Central Bank AML regulations, preparing corporate KYC dossiers, passing relationship officer interviews, and activating multi-currency accounts.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Banking & Financial Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Central Bank of the UAE Compliance Protocol Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Dubai Corporate Banking Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Wio Business (Digital Leader)</strong>
              <p className="text-navy-100 leading-relaxed">
                Online onboarding in 2–4 days. Multi-currency (AED, USD, EUR, GBP). Zero minimum balance options for starter accounts.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Emirates NBD & Mashreq (Tier-1)</strong>
              <p className="text-navy-100 leading-relaxed">
                Traditional physical banking. Requires physical interview in Dubai and AED 25,000–50,000 minimum monthly balance.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Emirates ID Mandate</strong>
              <p className="text-navy-100 leading-relaxed">
                Primary account signatory must hold a valid 2-year UAE Residence Visa and physical Emirates ID card.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Proof of Business Substance</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory active company website, 3 signed client contracts, and supplier invoices for background verification.
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
            <li><a href="#banking-landscape" className="hover:text-gold-600 underline">1. The Banking Landscape in Dubai for Foreign-Owned Freezone Entities</a></li>
            <li><a href="#digital-vs-traditional" className="hover:text-gold-600 underline">2. Digital Banks (Wio) vs Traditional Banks (Emirates NBD, Mashreq)</a></li>
            <li><a href="#banking-matrix" className="hover:text-gold-600 underline">3. Comprehensive Dubai Banking Options Comparison Matrix</a></li>
            <li><a href="#required-kyc-documents" className="hover:text-gold-600 underline">4. Full List of Required Corporate & Personal KYC Documents</a></li>
            <li><a href="#bank-interview-prep" className="hover:text-gold-600 underline">5. How to Pass the Bank Relationship Manager Compliance Interview</a></li>
            <li><a href="#step-by-step-workflow" className="hover:text-gold-600 underline">6. Step-by-Step Corporate Bank Account Opening Workflow</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="banking-landscape" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Banking Landscape in Dubai for Foreign-Owned Freezone Entities
          </h2>
          <p>
            Securing a corporate business bank account is the single most critical milestone in operationalizing your UAE Freezone entity.
          </p>
          <p>
            Regulated directly by the Central Bank of the UAE under strict Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) frameworks, UAE banking institutions conduct rigorous background screening on Ultimate Beneficial Owners (UBOs) owning 20% or more of company equity.
          </p>
          <p>
            While UAE Freezone entity registration is fast and streamlined, bank account opening requires presenting verified proof of business substance, legitimate source of funds, and clear professional experience.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="digital-vs-traditional" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Digital Banks (Wio) vs Traditional Banks (Emirates NBD, Mashreq)
          </h2>
          <p>
            Foreign founders in Dubai can choose between modern digital business banks and physical commercial banks:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-6 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-lg mb-2">
                <CreditCard size={20} />
                <span>Wio Business (Digital Leader)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Backed by First Abu Dhabi Bank (FAB) and ADQ. Features 100% mobile app onboarding in 2–4 business days, multi-currency USD/EUR/GBP accounts, virtual debit cards, and zero minimum balance options.
              </p>
            </div>

            <div className="border border-border p-6 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-2 text-navy-950 font-bold text-lg mb-2">
                <Landmark size={20} />
                <span>Emirates NBD & Mashreq</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Established tier-1 physical commercial banks. Requires physical meeting with relationship managers, physical Ejari lease inspection, and AED 25,000–50,000 minimum monthly balance.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            GUARANTEED CORPORATE BANKING ASSISTANCE
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Open Your Dubai Corporate Bank Account with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ prepares your corporate KYC dossier, pre-screens your application with Wio and tier-1 banks, and manages relationship officer meetings.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/business-bank-account-guide"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Corporate Banking Advisory <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="banking-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive Dubai Banking Options Comparison Matrix
          </h2>
          <p>
            Detailed side-by-side comparative analysis of major UAE corporate banking options:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Bank Institution</th>
                  <th className="p-4 text-gold-500">Minimum Monthly Balance</th>
                  <th className="p-4 text-emerald-400">Approval Timeline</th>
                  <th className="p-4">Application Capability</th>
                  <th className="p-4">Multi-Currency Accounts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Wio Business (Digital)</td>
                  <td className="p-4 text-emerald-700 font-bold">AED 0 (Starter) / AED 3,000</td>
                  <td className="p-4 text-emerald-700 font-bold">2 to 4 Business Days</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Mobile App Remote</td>
                  <td className="p-4 text-navy-900">AED, USD, EUR, GBP</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Mashreq NEOBiz</td>
                  <td className="p-4 text-navy-900">AED 10,000 / Month</td>
                  <td className="p-4 text-navy-900">5 to 7 Business Days</td>
                  <td className="p-4 text-navy-900">Online Web Portal</td>
                  <td className="p-4 text-navy-900">AED, USD, EUR</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Emirates NBD</td>
                  <td className="p-4 text-rose-700 font-bold">AED 50,000 / Month</td>
                  <td className="p-4 text-navy-900">2 to 4 Weeks</td>
                  <td className="p-4 text-navy-900">Physical Interview Required</td>
                  <td className="p-4 text-navy-900">All Major Global Currencies</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Commercial Bank of Dubai (CBD)</td>
                  <td className="p-4 text-rose-700 font-bold">AED 25,000 / Month</td>
                  <td className="p-4 text-navy-900">2 to 3 Weeks</td>
                  <td className="p-4 text-navy-900">Physical Interview Required</td>
                  <td className="p-4 text-navy-900">All Major Global Currencies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="required-kyc-documents" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Full List of Required Corporate & Personal KYC Documents
          </h2>
          <p>
            To avoid application rejections, founders must assemble a complete corporate KYC dossier:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base flex items-center gap-2">
              <FileCheck className="text-gold-500" size={20} />
              Bank Application KYC Document Checklist:
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Corporate Legal Documents:</strong> Trade License, Memorandum of Association (MOA), Certificate of Formation, and Share Certificate.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Personal Identification:</strong> Investor Emirates ID card and Passport copy for all shareholders owning 20%+ equity.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Bank Statements:</strong> 6-month personal or foreign business bank statements demonstrating source of wealth.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Proof of Business Substance:</strong> 3 signed client contracts/LOIs, sample sales invoices, supplier agreements, and company website URL.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="bank-interview-prep" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. How to Pass the Bank Relationship Manager Compliance Interview
          </h2>
          <p>
            When applying with traditional tier-1 banks (Emirates NBD, FAB, CBD), applicants attend an in-person meeting with a Bank Relationship Manager (RM).
          </p>
          <p>
            To pass compliance pre-screening, be prepared to answer five standard compliance questions:
          </p>
          <div className="space-y-3 text-sm pl-2 my-4">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">1. Business Model & Revenue Sources</strong>
              <p className="text-xs text-gray-600">Explain clearly how your company generates income (e.g. software development fees, SaaS subscriptions, retainer services).</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">2. Target Customer & Supplier Locations</strong>
              <p className="text-xs text-gray-600">List primary jurisdictions for inbound and outbound wire transfers (e.g. US, UK, EU, UAE).</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">3. Expected Monthly Transaction Volumes</strong>
              <p className="text-xs text-gray-600">Provide realistic estimates for initial monthly turnover (e.g. AED 50,000 to AED 200,000).</p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="step-by-step-workflow" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Step-by-Step Corporate Bank Account Opening Workflow
          </h2>
          <p>
            The corporate bank account opening process follows a 5-step execution sequence:
          </p>

          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 1: Company Incorporation & Emirates ID:</strong> Complete company registration and obtain physical primary signatory Emirates ID.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 2: Dossier Preparation:</strong> Assemble business plan, client contracts, 6-month bank statements, and website proof.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 3: Application Submission:</strong> Submit application digitally via Wio app or to bank relationship officer.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 4: Compliance Review:</strong> Respond to compliance officer queries regarding transaction sources.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 5: IBAN Activation:</strong> Receive multi-currency IBANs (AED, USD, EUR) and debit cards.</span>
            </li>
          </ol>
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
            DUBAI CORPORATE BANKING SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Secure Your UAE Business Bank Account
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Wio digital bank setup, tier-1 physical bank introductions (Emirates NBD, Mashreq), KYC profile drafting, and account approval management handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/business-bank-account-guide"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Corporate Banking Service
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
