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
    q: "Do I need to visit the UK to register a Limited Company?",
    a: "No. The entire UK company formation process can be completed 100% online from anywhere in the world. You do not need to visit the UK, hold a UK visa, or physically reside in the UK. Companies House processes digital applications remotely.",
  },
  {
    q: "Can a foreign passport holder be a UK LTD director and shareholder?",
    a: "Yes, 100%. Under the UK Companies Act 2006, citizens of any country (such as Pakistan, UAE, USA, India, or Nigeria) can act as directors and shareholders of a UK Limited Company, provided they are at least 16 years old and not disqualified or bankrupt.",
  },
  {
    q: "Do I need a UK address to register a company as a non-resident?",
    a: "Yes. Every UK company must have an official Registered Office Address located in the UK (England, Wales, Scotland, or Northern Ireland). Non-residents typically use a commercial UK Virtual Registered Office service provided by corporate formation agencies like ADVAQ.",
  },
  {
    q: "What is the ECCTA 2023 Identity Verification rule for foreign directors?",
    a: "Under the Economic Crime and Corporate Transparency Act (ECCTA 2023), Companies House requires all company directors and Persons with Significant Control (PSCs) to complete a digital Identity Verification (IDV) check using a valid passport and biometric face match.",
  },
  {
    q: "Do non-resident directors pay personal income tax in the UK?",
    a: "If you reside outside the UK and perform all business operations remotely from abroad, you generally do not owe UK personal income tax on salaries or dividends. However, your UK LTD company pays UK Corporation Tax (19% to 25%) on its net corporate profits.",
  },
  {
    q: "Can I open a UK business bank account from overseas without visiting London?",
    a: "Yes. While traditional UK high-street banks (like Barclays or HSBC) require UK physical presence, non-resident directors can easily open official UK business accounts with UK Sort Codes and Account Numbers via digital fintech platforms like Wise Business, Revolut Business, or Payoneer.",
  },
  {
    q: "What is the minimum share capital required to start a UK LTD company?",
    a: "There is no high minimum capital requirement. Most non-resident founders incorporate with a nominal share capital of £1 to £100 (e.g. 100 shares valued at £1 per share). You do not need to deposit this money into a bank account beforehand.",
  },
  {
    q: "How long does it take for Companies House to approve a non-resident company?",
    a: "Electronic company formation applications submitted through ADVAQ are typically processed and approved by Companies House within 3 to 24 hours on business days.",
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
    "Exhaustive 2026 legal masterclass guide on how non-UK residents and overseas directors can register a UK Limited (LTD) company online from abroad without visiting the UK.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-26",
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
            An exhaustive 2026 legal and tax masterclass for non-resident founders, freelancers, e-commerce sellers, and agency owners worldwide on how to form, own, and operate a UK LTD company remotely.
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
              <span>Verified Companies House & HMRC Rules</span>
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
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">100% Legal Foreign Ownership</strong>
              <p className="text-navy-100 leading-relaxed">
                You do NOT need UK citizenship, UK residency, or a UK visa to register and own 100% shares of a UK Limited Company.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">No Physical Travel Required</strong>
              <p className="text-navy-100 leading-relaxed">
                The entire incorporation process is conducted 100% online through Companies House in 3 to 24 hours.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">UK Virtual Registered Address</strong>
              <p className="text-navy-100 leading-relaxed">
                Companies must maintain a UK street address for statutory mail, which ADVAQ provides via virtual London address packages.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Remote Business Banking</strong>
              <p className="text-navy-100 leading-relaxed">
                Overseas founders open multi-currency GBP, USD, and EUR business accounts with Wise, Revolut, or Payoneer.
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
            <li><a href="#legal-basis" className="hover:text-gold-600 underline">1. Legal Basis Under the Companies Act 2006</a></li>
            <li><a href="#eccta-2023-rules" className="hover:text-gold-600 underline">2. ECCTA 2023 Regulations & Identity Verification</a></li>
            <li><a href="#core-requirements" className="hover:text-gold-600 underline">3. Core Legal Requirements for Overseas Directors</a></li>
            <li><a href="#formation-matrix" className="hover:text-gold-600 underline">4. Non-Resident UK Formation Comparison Matrix</a></li>
            <li><a href="#step-by-step" className="hover:text-gold-600 underline">5. Step-by-Step UK LTD Formation Roadmap</a></li>
            <li><a href="#tax-obligations" className="hover:text-gold-600 underline">6. UK Tax Obligations & Tax Treaty Mechanics (HMRC)</a></li>
            <li><a href="#banking" className="hover:text-gold-600 underline">7. Remote UK Business Banking Protocol</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">8. 6 Critical Common Mistakes Non-Residents Must Avoid</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">9. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="legal-basis" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Legal Basis: Can Non-UK Residents Form a UK Company?
          </h2>
          <p>
            The direct legal answer under UK statutory corporate law is an unequivocal <strong>YES</strong>. Pursuant to Section 7 and Section 154 of the <em>UK Companies Act 2006</em>, there are zero residency, nationality, or citizenship restrictions on who can incorporate, hold shares in, or act as an executive director of a Private Limited Company (LTD) registered in England and Wales, Scotland, or Northern Ireland.
          </p>
          <p>
            Whether you are a software agency owner in Lahore, a SaaS founder operating out of Dubai, an e-commerce merchant in Mumbai, or a digital marketing consultant based in Texas, UK law grants non-resident foreign nationals full legal standing to establish a 100% foreign-owned UK corporate entity without ever stepping foot inside the United Kingdom.
          </p>
          
          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Software Agency Expansion
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Tariq, an IT software agency founder residing in Pakistan. Tariq services corporate clients in London, Frankfurt, and New York. By incorporating a UK LTD company remotely, Tariq issues official UK invoices, collects payments in GBP and EUR into a UK Wise Business account, and signs contracts under prestigious UK corporate law—all while operating his development team in Pakistan.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="eccta-2023-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. ECCTA 2023 Regulations & Identity Verification
          </h2>
          <p>
            In late 2023, the UK Parliament passed the landmark <em>Economic Crime and Corporate Transparency Act (ECCTA 2023)</em>, introducing fundamental reforms to Companies House transparency standards.
          </p>
          <p>
            Under ECCTA rules, Companies House has transitioned from a passive registrar of documents into an active regulatory gatekeeper. The key reform affecting overseas founders is mandatory <strong>Identity Verification (IDV)</strong>. Every director and Person with Significant Control (PSC) must complete a digital identity check verifying their international passport details against biometric facial recognition before or immediately following company formation.
          </p>
          <p>
            Furthermore, ECCTA 2023 strictly prohibits the use of un-serviced PO Boxes or physical mail drops as a Registered Office Address. Every UK company must maintain an <strong>Appropriate Registered Address</strong> where statutory notices delivered by Royal Mail are guaranteed to come to the attention of company officers.
          </p>
        </div>

        {/* SECTION 3 */}
        <div id="core-requirements" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Core Legal Requirements for Overseas Directors & Shareholders
          </h2>
          <p>
            While Companies House does not require UK residency, every UK Limited Company must satisfy five mandatory structural legal requirements at incorporation:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-600 font-bold text-base mb-2">
                <Building2 size={20} />
                <span>1. Unique Company Name</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Must end with "Limited" or "LTD" (or Welsh equivalents) and cannot be identical or confusingly similar to any existing registered UK company. Must pass sensitive words checks (e.g., "Bank", "Royal", "Group").
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-600 font-bold text-base mb-2">
                <Globe2 size={20} />
                <span>2. UK Registered Office Address</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                A commercial physical street address in England, Wales, Scotland, or NI. PO Boxes are prohibited. Non-resident founders utilize commercial UK virtual address services provided by ADVAQ.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-600 font-bold text-base mb-2">
                <User size={20} />
                <span>3. Officers (Directors & Shareholders)</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                At least one natural person aged 16+ as director, and at least one shareholder. A single non-resident individual can act as 100% shareholder and sole director simultaneously.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-600 font-bold text-base mb-2">
                <Lock size={20} />
                <span>4. PSC Register Declaration</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mandatory disclosure of People with Significant Control (PSC)—any individual holding more than 25% of shares, voting rights, or operational control over the UK entity.
              </p>
            </div>
          </div>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Layers className="text-gold-600" size={18} />
              Real-World Founder Scenario: Dubai E-Commerce Equity Split
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Sarah, a Shopify merchant in Dubai, incorporates a UK LTD with 1,000 shares valued at £1 each. She allocates 700 shares (70%) to herself as Managing Director and 300 shares (30%) to her silent partner in Saudi Arabia. Both Sarah and her investor are declared as PSCs on Companies House public register, establishing transparent equity ownership recognized by global venture funds.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="formation-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Non-Resident UK Formation Comparison Matrix
          </h2>
          <p>
            Detailed side-by-side legal comparison of company formation parameters for non-residents:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Formation Parameter</th>
                  <th className="p-4 text-gold-500">Statutory Requirement</th>
                  <th className="p-4 text-emerald-400">Non-Resident Solution</th>
                  <th className="p-4">Common Misconception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Director Residency</td>
                  <td className="p-4 text-emerald-700 font-bold">Any Country Globally</td>
                  <td className="p-4 text-navy-900">Foreign Passport & Biometric IDV</td>
                  <td className="p-4 text-rose-700 font-bold">"Must hire a UK resident director" (FALSE)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Registered Address</td>
                  <td className="p-4 text-navy-900">Physical UK Street Address</td>
                  <td className="p-4 text-emerald-700 font-bold">Commercial UK Virtual Address</td>
                  <td className="p-4 text-rose-700 font-bold">"Can use PO Box or overseas home address" (FALSE)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Share Capital Deposit</td>
                  <td className="p-4 text-emerald-700 font-bold">Nominal (£1 to £100)</td>
                  <td className="p-4 text-navy-900">Unpaid Share Capital Allowed</td>
                  <td className="p-4 text-rose-700 font-bold">"Requires £10,000 paid-up bank deposit" (FALSE)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Business Banking</td>
                  <td className="p-4 text-navy-900">GBP/EUR/USD Account</td>
                  <td className="p-4 text-emerald-700 font-bold">Wise, Revolut, Payoneer FinTechs</td>
                  <td className="p-4 text-rose-700 font-bold">"Must visit London branch in person" (FALSE)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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

        {/* SECTION 5 */}
        <div id="step-by-step" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Step-by-Step UK LTD Formation Roadmap for Foreign Founders
          </h2>
          <p>
            Registering your UK business from abroad follows a standardized 5-stage electronic workflow:
          </p>

          <div className="space-y-6 my-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Select Company Name & SIC Classification</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Verify name availability on the Companies House public register. Select standard industry classification (SIC) codes corresponding to your business activities (e.g. 62010 for Software Development, 47910 for Retail via Internet).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Secure UK Registered Address & Service Address</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Appoint a commercial UK Registered Office Address in London to receive statutory correspondence from HMRC and Companies House. Secure a Directors' Service Address to prevent your personal foreign home address from being published online.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Complete Anti-Money Laundering (AML) Verification</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Submit a digital copy of your valid international passport and proof of residential address (bank statement, credit card bill, or utility bill issued within the last 3 months) to satisfy UK AML/KYC legal standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Electronic Submission of Form IN01</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  ADVAQ submits Form IN01 electronically to Companies House, including the Memorandum of Association, Articles of Association, capital statement, and officer declarations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-navy-950 text-gold-500 font-serif font-bold text-lg flex items-center justify-center shrink-0">
                5
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-dark-text">Incorporation Certificate & Official Corporate Pack</h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Upon approval (3 to 24 hours), Companies House issues your official <strong>Certificate of Incorporation</strong> featuring your unique 8-digit Company Number. You receive digital PDF copies of Articles of Association, Share Certificates, and WebFiling authentication codes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="tax-obligations" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. UK Tax Obligations & Tax Treaty Mechanics (HMRC)
          </h2>
          <p>
            Understanding how HM Revenue & Customs (HMRC) taxes non-resident UK companies is essential for compliance:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Receipt className="text-gold-600" size={18} />
                UK Corporation Tax (Net Corporate Profits)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Your UK company pays UK Corporation Tax on its global net taxable profits. The small profits rate is <strong>19%</strong> for annual profits up to £50,000. Profits between £50,000 and £250,000 are taxed on a marginal relief sliding scale up to the main rate of 25%.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Percent className="text-gold-600" size={18} />
                Value Added Tax (VAT) Rules for Overseas Sellers
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                If your company's UK taxable turnover exceeds £90,000 annually, VAT registration is mandatory. However, if your UK company has no physical establishment in the UK and is classified as a <strong>Non-Established Taxable Person (NETP)</strong> selling physical goods stored in UK warehouses, the VAT registration threshold is **£0** (immediate mandatory VAT registration upon first UK sale).
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Scale className="text-gold-600" size={18} />
                Double Taxation Treaties (DTT Protections)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                The UK maintains double taxation treaties with over 130 countries worldwide (including Pakistan, UAE, USA, Saudi Arabia, and EU nations). Under Article 7 (Business Profits) and Article 10 (Dividends), profit distributions paid to non-resident shareholders are protected from double taxation.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="banking" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Remote UK Business Banking Protocol for Overseas Directors
          </h2>
          <p>
            Traditional UK high-street banks (such as Barclays, HSBC, Lloyds, or NatWest) require company directors to attend an in-person interview at a London branch and hold proof of UK residential address.
          </p>
          <p>
            However, non-resident directors successfully open multi-currency UK business accounts remotely via regulated <strong>UK FinTech Digital Banking Platforms</strong>:
          </p>

          <div className="space-y-3 my-6">
            <div className="p-4 border border-border rounded-xl bg-white flex items-start gap-3">
              <Check className="text-gold-600 shrink-0 mt-1" size={18} />
              <div>
                <strong className="block text-navy-950 text-sm font-bold">Wise Business (Formerly TransferWise)</strong>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  Provides an official UK Sort Code and Account Number, USD Routing Number, and EUR IBAN. Allows receiving funds from global clients and paying suppliers at mid-market FX exchange rates.
                </p>
              </div>
            </div>

            <div className="p-4 border border-border rounded-xl bg-white flex items-start gap-3">
              <Check className="text-gold-600 shrink-0 mt-1" size={18} />
              <div>
                <strong className="block text-navy-950 text-sm font-bold">Revolut Business</strong>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  Offers modern corporate accounts with virtual debit cards, automated Xero integration, and instant international transfers across 25+ currencies.
                </p>
              </div>
            </div>

            <div className="p-4 border border-border rounded-xl bg-white flex items-start gap-3">
              <Check className="text-gold-600 shrink-0 mt-1" size={18} />
              <div>
                <strong className="block text-navy-950 text-sm font-bold">Payoneer Business Account</strong>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  Tailored specifically for Amazon UK sellers, e-commerce brands, and digital agency freelancers receiving payouts from global marketplaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 8 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            8. 6 Critical Common Mistakes Non-Residents Must Avoid
          </h2>
          <p>
            Steer clear of these six costly errors frequently committed by overseas founders:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Publishing Personal Home Address on Public Record
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Failing to purchase a Directors' Service Address will publish your personal residential address on the public Companies House website forever, exposing you to junk mail and privacy breaches.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Missing Annual Confirmation Statement (CS01) Filings
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Every UK company must file an annual Confirmation Statement (Form CS01) with Companies House. Missing this deadline triggers automatic company strike-off proceedings and freezes corporate bank accounts.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                3. Ignorance of NETP Zero VAT Threshold Rules
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Non-established e-commerce sellers storing inventory in UK FBA warehouses do NOT get the £90,000 VAT threshold. You must register for UK VAT upon your very first sale to avoid heavy HMRC penalties.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                4. Failing to Register for HMRC Corporation Tax Within 3 Months
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Newly formed UK companies must inform HMRC when they start active business operations within 3 months of trading to receive their 10-digit Corporation Tax UTR number.
              </p>
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
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
