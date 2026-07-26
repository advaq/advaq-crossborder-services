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
  Globe2,
  Lock,
} from "lucide-react";

const faqs = [
  {
    q: "Do I need to visit the UK to register a Limited Company?",
    a: "No. The entire UK company formation process can be completed 100% online from anywhere in the world. You do not need to visit the UK, hold a UK visa, or physically reside in the UK.",
  },
  {
    q: "Can a foreign passport holder be a UK LTD director and shareholder?",
    a: "Yes. Companies House allows citizens of any country to act as directors and shareholders of a UK Limited Company, provided they are over 16 years old and not disqualified or bankrupt.",
  },
  {
    q: "Do I need a UK address to register a company as a non-resident?",
    a: "Yes. Every UK company must have an official Registered Office Address located in the UK (England, Wales, Scotland, or Northern Ireland). Non-residents typically use a UK Virtual Registered Office service provided by corporate formation agencies like ADVAQ.",
  },
  {
    q: "Do non-resident directors pay personal income tax in the UK?",
    a: "If you do not reside in the UK and do not perform work inside the UK, you generally do not owe UK personal income tax on salaries. However, your UK LTD company pays UK Corporation Tax on its net profits, and dividends may be subject to tax treaties depending on your country of residence.",
  },
  {
    q: "Can I open a UK business bank account from overseas?",
    a: "Yes. While traditional UK high-street banks (like Barclays or HSBC) require UK physical presence, non-resident directors can easily open UK business accounts via digital fintech platforms like Wise Business, Revolut Business, or Payoneer.",
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
  headline: "Can a Non-UK Resident Register a Limited Company in the UK? (2026 Rules)",
  description:
    "Complete 2026 legal guide on how non-UK residents and overseas directors can register a UK Limited (LTD) company online from abroad without visiting the UK.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntityOfPage: "https://advaq.com/blog/can-non-uk-resident-register-company-uk",
};

export const Route = createFileRoute("/blog/can-non-uk-resident-register-company-uk")({
  head: () => ({
    meta: [
      { title: "Can a Non-UK Resident Register a UK Company? (2026 Guide) | ADVAQ" },
      {
        name: "description",
        content:
          "Step-by-step 2026 legal guide on how non-UK residents & foreign directors can register a UK Limited (LTD) company online from overseas without visiting the UK.",
      },
      {
        name: "keywords",
        content:
          "register uk company non resident, uk ltd company non UK resident, open uk company from overseas, companies house non resident director, uk business setup for foreigners",
      },
      {
        property: "og:title",
        content: "Can a Non-UK Resident Register a UK Company? (2026 Rules)",
      },
      {
        property: "og:description",
        content:
          "Learn how overseas entrepreneurs, freelancers, and agency owners can form a UK LTD company remotely in 2026.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/can-non-uk-resident-register-company-uk" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/can-non-uk-resident-register-company-uk" }],
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
            Can a Non-UK Resident Register a Limited Company in the UK? (2026 Rules)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive guide for non-resident founders, freelancers, and agency owners worldwide on how to legally form, own, and operate a UK LTD company remotely.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Verified Companies House Rules</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Summary (TL;DR)</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>100% Legal:</strong> You do NOT need UK citizenship, UK residency, or a UK visa to register a UK Limited Company.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>No Physical Visit Required:</strong> The incorporation is done 100% online through Companies House.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Key Requirement:</strong> You must have an official UK Registered Office Address (which can be provided by a virtual address service).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Digital Banking Available:</strong> Foreign directors can open USD/GBP/EUR accounts with Wise, Payoneer, or Revolut Business.</span>
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
          <ol className="space-y-2 text-sm text-navy-900 list-none font-medium">
            <li><a href="#legal-basis" className="hover:text-gold-600 underline">Legal Basis Under the Companies Act 2006</a></li>
            <li><a href="#core-requirements" className="hover:text-gold-600 underline">Core Legal Requirements for Non-Resident Founders</a></li>
            <li><a href="#step-by-step" className="hover:text-gold-600 underline">Step-by-Step UK LTD Formation Process</a></li>
            <li><a href="#tax-obligations" className="hover:text-gold-600 underline">UK Tax Obligations for Overseas Owners (HMRC)</a></li>
            <li><a href="#banking" className="hover:text-gold-600 underline">Opening a Business Bank Account from Abroad</a></li>
            <li><a href="#common-pitfalls" className="hover:text-gold-600 underline">Common Mistakes Non-Residents Must Avoid</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="legal-basis" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Legal Basis: Can Non-UK Residents Form a UK Company?
          </h2>
          <p>
            The short answer is <strong>YES</strong>. Under the <em>UK Companies Act 2006</em>, there are no nationality or residency restrictions on who can own or manage a UK Private Limited Company (LTD). 
          </p>
          <p>
            Whether you are an IT agency owner in Pakistan, a SaaS founder in Dubai, an e-commerce seller in India, or a consultant in the United States, UK corporate law explicitly permits overseas individuals to serve as directors and shareholders.
          </p>
          <p>
            The UK is consistently ranked as one of the most international business-friendly jurisdictions globally because of its transparent corporate legal framework, straightforward tax reporting, and reputation for financial integrity.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="core-requirements" className="space-y-6 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Core Legal Requirements for Overseas Directors & Shareholders
          </h2>
          <p>
            While Companies House does not require UK residency, every UK Limited Company must satisfy five mandatory structural requirements at incorporation:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-lg mb-2">
                <Building2 size={20} />
                <span>1. Unique Company Name</span>
              </div>
              <p className="text-sm text-gray-600">
                Must end with "Limited" or "LTD" and cannot be identical or misleadingly similar to any existing registered UK company.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-lg mb-2">
                <Globe2 size={20} />
                <span>2. UK Registered Office Address</span>
              </div>
              <p className="text-sm text-gray-600">
                A physical street address in England, Wales, Scotland, or NI. PO Boxes are not allowed. Overseas founders use virtual address services.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-lg mb-2">
                <User size={20} />
                <span>3. Director & Shareholder</span>
              </div>
              <p className="text-sm text-gray-600">
                At least one director (individual over 16) and one shareholder. A single person can hold both roles simultaneously.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-lg mb-2">
                <Lock size={20} />
                <span>4. PSC Declaration</span>
              </div>
              <p className="text-sm text-gray-600">
                Identification of People with Significant Control (PSC) — anyone holding more than 25% of company shares or voting rights.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            NEED UK FORMATION HELP?
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your UK LTD Registered in 24 Hours
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ handles your complete UK company incorporation, registered office address, Companies House filing, HMRC tax setup, and digital bank account application with 100% approval guarantee.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK LTD Formation Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="step-by-step" className="space-y-6 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step UK LTD Formation Process for Non-Residents
          </h2>
          <p>
            Registering your UK business overseas follows a streamlined digital workflow:
          </p>

          <div className="space-y-6 my-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Select Company Name & SIC Code</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Perform a name availability check on Companies House register and select standard industry classification (SIC) codes corresponding to your business activity (e.g., 62010 for Software Development).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Secure a UK Registered Office & Directors' Service Address</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Non-residents use a commercial UK Virtual Registered Address to receive statutory mail from Companies House and HMRC, while keeping personal home addresses off the public register.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Submit Digital Identity Documents (KYC)</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Provide a valid passport copy and proof of address (such as a bank statement or utility bill issued within the last 3 months) to satisfy anti-money laundering (AML) regulations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Incorporation Approval & Official Documents</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Companies House processes digital applications within 3 to 24 hours. Upon approval, you receive your official <strong>Certificate of Incorporation</strong>, <strong>Memorandum & Articles of Association</strong>, and <strong>Share Certificates</strong> in digital PDF format.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="tax-obligations" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. UK Tax Obligations for Overseas Owners (HMRC)
          </h2>
          <p>
            A common misconception among overseas founders is that forming a UK company triggers personal UK tax liabilities. Here is how HMRC treats non-resident UK LTDs:
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-4">
            <div>
              <h4 className="font-bold text-navy-900 text-base">A. Corporation Tax (Company Net Profits)</h4>
              <p className="text-sm text-gray-600 mt-1">
                Your UK company pays UK Corporation Tax on its global net profits. The small profits rate is <strong>19%</strong> for profits under £50,000, and up to 25% for profits above £250,000.
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <h4 className="font-bold text-navy-900 text-base">B. Value Added Tax (VAT)</h4>
              <p className="text-sm text-gray-600 mt-1">
                If your company's taxable turnover exceeds £90,000 annually, UK VAT registration is mandatory. Non-resident companies selling digital services can also voluntarily register for VAT to claim back input VAT on business expenses.
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <h4 className="font-bold text-navy-900 text-base">C. Double Taxation Treaties</h4>
              <p className="text-sm text-gray-600 mt-1">
                The UK has Double Taxation Treaties (DTT) with over 130 countries (including Pakistan, USA, UAE, and European nations), ensuring you are not taxed twice on the same dividend income.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="banking" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Opening a Business Bank Account from Overseas
          </h2>
          <p>
            Traditional UK high-street banks (Barclays, Lloyds, NatWest) usually require directors to attend an in-person branch interview in London or hold UK residency.
          </p>
          <p>
            However, non-resident directors routinely use <strong>UK FinTech Business Accounts</strong> that offer official UK Account Numbers, Sort Codes, and IBANs:
          </p>

          <ul className="space-y-3 my-4">
            <li className="flex items-center gap-3 text-sm text-gray-700 bg-white border border-border p-3.5 rounded-lg">
              <Check className="text-gold-500 shrink-0" size={18} />
              <span><strong>Wise Business:</strong> Provides multi-currency accounts (GBP, USD, EUR, CAD) with international wire capabilities.</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-700 bg-white border border-border p-3.5 rounded-lg">
              <Check className="text-gold-500 shrink-0" size={18} />
              <span><strong>Payoneer:</strong> Ideal for Amazon sellers, freelancers, and digital agencies receiving payments worldwide.</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-700 bg-white border border-border p-3.5 rounded-lg">
              <Check className="text-gold-500 shrink-0" size={18} />
              <span><strong>Revolut Business:</strong> Modern fintech platform supporting fast FX conversions and virtual corporate cards.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="common-pitfalls" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Common Pitfalls Overseas Founders Must Avoid
          </h2>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start gap-3 bg-red-50/60 border border-red-200 p-4 rounded-xl">
              <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-red-900 text-sm">Missing Annual Confirmation Statement Deadlines</h4>
                <p className="text-xs text-red-800 mt-1">
                  Every UK company must file an annual Confirmation Statement with Companies House. Missing this deadline results in automatic company strike-off notices and bank account freezing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-red-50/60 border border-red-200 p-4 rounded-xl">
              <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-red-900 text-sm">Using Residential Addresses on Public Register</h4>
                <p className="text-xs text-red-800 mt-1">
                  Failing to purchase a Directors' Service Address will publish your personal home address on the public Companies House website forever.
                </p>
              </div>
            </div>
          </div>
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
            READY TO FORM YOUR UK COMPANY?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Let ADVAQ Handle Your UK Incorporation End-to-End
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            From Companies House registration and virtual London address to HMRC tax setup and business banking assistance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK LTD Formation — £99
            </Link>
            <a
              href="https://wa.me/923000925335"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Chat with UK Specialist
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
