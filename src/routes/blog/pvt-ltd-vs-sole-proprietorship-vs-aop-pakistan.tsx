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
  Users,
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const faqs = [
  {
    q: "What are the main business structures available in Pakistan?",
    a: "The three main business structures in Pakistan are: (1) Sole Proprietorship (unincorporated single owner using personal NTN), (2) Association of Persons / AOP (partnership registered under Partnership Act 1932 with Registrar of Firms), and (3) Private Limited Company (Pvt Ltd / SMC-Pvt Ltd incorporated under Companies Act 2017 with SECP).",
  },
  {
    q: "Why is a Private Limited Company safer than a Sole Proprietorship or AOP?",
    a: "A Private Limited Company creates a separate corporate entity with limited liability protection. If the company incurs debts or legal damages, your personal wealth (home, personal savings) remains 100% protected. In a Sole Proprietorship or AOP, owners face unlimited personal financial liability for all business obligations.",
  },
  {
    q: "Can a Sole Proprietorship or AOP get PSEB registration and SBP 50% dollar retention accounts?",
    a: "While sole proprietors can register with PSEB as freelancers, only SECP registered Private Limited companies enjoy full corporate banking privileges, 50% Exporters' Special Foreign Currency Account (FCVA) USD retention, and investor equity credibility.",
  },
  {
    q: "What is the tax rate difference between an AOP and a Private Limited company?",
    a: "AOPs are taxed on net income using progressive individual tax slabs that scale up to 35%+. Private Limited companies pay a flat 29% corporate tax rate (or a 0.25% reduced IT export final tax rate for PSEB-registered software houses under Section 154A).",
  },
  {
    q: "How do I upgrade my existing Sole Proprietorship to an SECP Private Limited company?",
    a: "Upgrading requires incorporating a new Private Limited company with SECP, transferring business assets and client contracts to the new corporate entity, registering for a Corporate NTN on FBR Iris, opening a corporate bank account, and closing the old individual business setup.",
  },
  {
    q: "What is the minimum statutory capital required to form a Private Limited company in Pakistan?",
    a: "Under SECP regulations, there is no minimum statutory paid-up capital requirement. Startups typically incorporate with an Authorized Capital of PKR 100,000 divided into 10,000 shares of PKR 10 each.",
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
  headline: "Private Limited Company vs Sole Proprietorship vs AOP (Partnership) in Pakistan",
  description:
    "Complete 2026 legal, tax & financial comparison masterclass comparing SECP Private Limited entities (Pvt Ltd / SMC-Pvt Ltd) vs Sole Proprietorships vs Association of Persons (AOP) under Pakistani law. Analysis of limited liability, FBR tax slabs, SBP FCVA retention, and corporate credibility.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Legal & Tax Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan",
};

export const Route = createFileRoute("/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan")({
  head: () => ({
    meta: [
      { title: "Pvt Ltd vs Sole Proprietorship vs AOP Pakistan (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Private Limited company vs Sole Proprietorship vs AOP in Pakistan. Compare SECP limited liability, FBR tax rates, bank account rules, SBP FCVA accounts, and corporate prestige.",
      },
      {
        name: "keywords",
        content:
          "pvt ltd vs sole proprietorship vs aop pakistan, secp company vs partnership deed fbr tax, single member company vs sole proprietor pakistan, limited liability corporate structure pakistan, aop partnership registration registrar of firms",
      },
      {
        property: "og:title",
        content: "Private Limited Company vs Sole Proprietorship vs AOP (Partnership) in Pakistan",
      },
      {
        property: "og:description",
        content:
          "Discover which business structure provides the legal safety, tax benefits, and growth potential for your Pakistani business.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/pvt-ltd-vs-sole-proprietorship-vs-aop-pakistan" }],
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
            Private Limited Company vs Sole Proprietorship vs AOP (Partnership) in Pakistan
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal, financial, and tax evaluation comparing SECP Private Limited entities, Sole Proprietorships, and Associations of Persons (AOP) for Pakistani entrepreneurs, IT agency owners, and SaaS founders.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Legal & Tax Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>SECP & FBR Structure Masterclass</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Business Structure Summary</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 text-xs pt-2">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Sole Proprietorship</strong>
              <p className="text-navy-100 leading-relaxed">
                Simple FBR NTN addition. 100% unlimited personal financial liability. Best for solo local freelancers or small micro-traders.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">AOP (Partnership)</strong>
              <p className="text-navy-100 leading-relaxed">
                Partnership deed registered with Registrar of Firms. Unlimited joint & several personal liability for all business partners.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Pvt Ltd (SECP Entity)</strong>
              <p className="text-navy-100 leading-relaxed">
                Incorporated SECP corporate entity. Complete corporate limited liability protection, 0.25% IT export tax regime, and VC funding readiness.
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
            <li><a href="#three-structures" className="hover:text-gold-600 underline">1. Legal Definitions under Pakistani Law</a></li>
            <li><a href="#structural-matrix" className="hover:text-gold-600 underline">2. Comprehensive 3-Way Comparative Matrix</a></li>
            <li><a href="#liability-exposure" className="hover:text-gold-600 underline">3. Limited Liability Protection vs Unlimited Personal Risk</a></li>
            <li><a href="#fbr-tax-comparison" className="hover:text-gold-600 underline">4. FBR Corporate Tax vs Individual / AOP Tax Slabs</a></li>
            <li><a href="#banking-forex" className="hover:text-gold-600 underline">5. Corporate Banking & SBP FCVA Dollar Accounts</a></li>
            <li><a href="#upgrading-roadmap" className="hover:text-gold-600 underline">6. How to Upgrade from Sole Proprietor to SECP Pvt Ltd</a></li>
            <li><a href="#secp-compliance" className="hover:text-gold-600 underline">7. Compliance & Annual Filing Requirements</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="three-structures" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Legal Definitions under Pakistani Law
          </h2>
          <p>
            When launching a commercial venture in Pakistan, entrepreneurs must select from three primary legal business models. Each operates under a completely different statutory framework:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-1">A. Sole Proprietorship (Unincorporated Entity)</strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                An informal structure where a single individual operates a business under a trade name. It has no separate legal existence from the owner. Registration requires simply adding a business name to your personal FBR NTN profile.
              </p>
            </div>

            <div className="p-5 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-1">B. Association of Persons / AOP (Partnership Act 1932)</strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                A contractual partnership between two or more individuals governed by the <em>Partnership Act 1932</em>. AOPs are registered locally with the district <strong>Registrar of Firms</strong> and assigned a distinct AOP NTN by FBR.
              </p>
            </div>

            <div className="p-5 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold text-sm mb-1">C. Private Limited Company (Companies Act 2017)</strong>
              <p className="text-xs text-gray-600 leading-relaxed">
                A formal corporate entity registered federally with the <strong>Securities and Exchange Commission of Pakistan (SECP)</strong>. It exists as an artificial legal person with perpetual succession, limited liability, and a dedicated corporate seal. Includes both Single Member (SMC-Pvt Ltd) and Multi-Member entities.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="structural-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Comprehensive 3-Way Comparative Matrix
          </h2>
          <p>
            The table below evaluates the legal, financial, tax, and operational dimensions of each business structure in Pakistan:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Feature / Metric</th>
                  <th className="p-4">Sole Proprietorship</th>
                  <th className="p-4">AOP (Partnership)</th>
                  <th className="p-4 text-gold-500">Pvt Ltd (SECP Entity)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Governing Law</td>
                  <td className="p-4">Income Tax Ordinance 2001</td>
                  <td className="p-4">Partnership Act 1932</td>
                  <td className="p-4 font-semibold text-navy-950">Companies Act 2017 (SECP)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Regulatory Body</td>
                  <td className="p-4">FBR (Federal Board of Revenue)</td>
                  <td className="p-4">Registrar of Firms & FBR</td>
                  <td className="p-4 font-semibold text-gold-600">SECP (Federal Commission)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Personal Liability</td>
                  <td className="p-4 font-semibold text-red-700">Unlimited (Personal Assets at Risk)</td>
                  <td className="p-4 font-semibold text-red-700">Unlimited (Joint & Several Liability)</td>
                  <td className="p-4 font-semibold text-emerald-700 bg-emerald-50/50">Limited Liability (Assets Protected)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">FBR Tax Regime</td>
                  <td className="p-4">Individual Slabs (up to 35%+)</td>
                  <td className="p-4">AOP Slabs (up to 35%+)</td>
                  <td className="p-4">Flat 29% (or 0.25% IT Export Final Tax)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">PSEB & SBP FCVA Dollar Retention</td>
                  <td className="p-4 text-gray-500">Freelancer limits only</td>
                  <td className="p-4 text-gray-500">Limited commercial perks</td>
                  <td className="p-4 font-semibold text-emerald-700">Full 50% SBP FCVA Dollar Retention</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Venture Capital / Investment</td>
                  <td className="p-4 font-semibold text-red-700">Cannot issue equity</td>
                  <td className="p-4 font-semibold text-red-700">Cannot issue shares</td>
                  <td className="p-4 font-semibold text-emerald-700">Fully VC & Investor Ready</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Perpetual Succession</td>
                  <td className="p-4 text-red-700">Terminates on death</td>
                  <td className="p-4 text-red-700">Dissolves on partner death</td>
                  <td className="p-4 text-emerald-700 font-semibold">Perpetual Existence</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ PAKISTAN BUSINESS STRUCTURING
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Structure Your Business for Corporate Growth
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ advises Pakistani founders on choosing between SMC-Pvt Ltd, AOP, and Private Limited setups, managing SECP eServices filings and FBR NTN registration.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order SECP Incorporation Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="liability-exposure" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Limited Liability Protection vs Unlimited Personal Risk
          </h2>
          <p>
            The single most critical legal difference between unincorporated structures (Sole Proprietorship and AOP) and a SECP Private Limited entity is <strong>Personal Financial Risk</strong>.
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6">
            <div className="flex items-center gap-2 text-red-900 font-semibold text-sm mb-1">
              <AlertTriangle size={16} />
              <span>The Danger of Unlimited Personal Liability:</span>
            </div>
            <p className="text-red-900 text-xs leading-relaxed">
              If a Sole Proprietorship or AOP partnership breaches a commercial contract, fails to pay bank loans, or faces a heavy legal lawsuit, Pakistani courts can attach and seize the <strong>personal assets</strong> of the business owner or partners—including personal houses, vehicles, personal bank accounts, and inherited land.
            </p>
          </div>

          <p>
            In contrast, a <strong>SECP Private Limited company</strong> operates behind an impenetrable legal shield known as the Corporate Veil. Creditors can only lay claim to assets registered under the company's corporate NTN and bank accounts.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="fbr-tax-comparison" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. FBR Corporate Tax vs Individual / AOP Tax Slabs
          </h2>
          <p>
            Tax treatment varies dramatically across the three structures under FBR regulations:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Coins className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>AOP & Sole Proprietor Tax Rates:</strong> Profits are taxed under progressive individual income tax slabs scaling from 5% up to 35%+ plus applicable surcharges for high earners.</span>
            </li>
            <li className="flex items-start gap-2">
              <Coins className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Standard Private Limited Tax Rates:</strong> Domestic corporate net taxable income is taxed at a flat rate of <strong>29%</strong> under Section 80.</span>
            </li>
            <li className="flex items-start gap-2">
              <Coins className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>IT Exporters Section 154A Tax Regime:</strong> Pakistani software houses, SaaS entities, and IT service agencies incorporated as Private Limited entities qualify for the <strong>0.25% Final Tax Regime</strong> on foreign remittance proceeds when registered with PSEB.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="banking-forex" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Banking Privileges, FCVA Accounts & Raising Capital
          </h2>
          <p>
            For tech founders and export agencies, corporate banking functionality is paramount:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2">
              <Building2 className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>SBP FCVA 50% Dollar Retention:</strong> State Bank of Pakistan rules allow SECP-registered IT export companies to open Exporters' Special Foreign Currency Accounts (FCVA) and retain 50% of foreign export earnings in USD to pay for overseas cloud hosting (AWS, Azure), SaaS tools, and foreign software subscriptions without currency conversion losses.</span>
            </li>
            <li className="flex items-start gap-2">
              <Building2 className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Equity Capitalization & VC Investment:</strong> Venture capital funds, angel investors, and foreign institutional investors in the US, UK, or UAE cannot invest in Sole Proprietorships or AOPs. They require an SECP Private Limited structure capable of issuing ordinary shares, preference shares, or SAFE notes.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 6 */}
        <div id="upgrading-roadmap" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. How to Upgrade from Sole Proprietor to SECP Pvt Ltd
          </h2>
          <p>
            If you currently operate as a Sole Proprietor or AOP, transitioning to a SECP Private Limited company involves four key steps:
          </p>
          <div className="space-y-3 text-sm pl-2">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">1. Incorporate New SECP Entity:</strong>
              <p className="text-xs text-gray-600">Reserve company name and incorporate an SMC-Pvt Ltd or Private Limited company via SECP eServices.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">2. Obtain Corporate NTN & Open Bank Account:</strong>
              <p className="text-xs text-gray-600">Receive 7-digit Corporate NTN and open a corporate bank account with Meezan Bank, HBL, or Bank Alfalah.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">3. Novate Contracts & PSEB Transfer:</strong>
              <p className="text-xs text-gray-600">Transfer client service agreements, vendor software accounts, and PSEB export certificates to the new corporate entity.</p>
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
            PAKISTAN CORPORATE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Incorporate Your SECP Company Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            SECP incorporation, AOP partnership deeds, FBR corporate NTN registration, and corporate banking support handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/secp-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order SECP Incorporation
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
