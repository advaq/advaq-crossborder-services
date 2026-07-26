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
  Scale,
  DollarSign,
  ShieldAlert,
  Globe2,
  Lock,
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
    q: "Can a non-UK resident register as a Sole Trader in the UK?",
    a: "No. To register as a Sole Trader with HMRC, you must have a UK National Insurance Number (NINo), a UK right-to-work visa, and physically reside in the UK. Non-UK residents operating remotely from abroad cannot register as sole traders and must instead form a UK Limited (LTD) company.",
  },
  {
    q: "Why is a UK LTD better than a Sole Trader for international freelancers?",
    a: "A UK LTD creates a distinct legal entity separate from your personal assets, providing limited liability protection. Additionally, it offers enterprise credibility with global B2B clients, allows multi-currency business banking (Wise, Revolut), and provides tax-efficient dividend structuring.",
  },
  {
    q: "Do I pay double tax if I own a UK LTD as a foreign resident?",
    a: "No. The UK has Double Taxation Treaties (DTT) with over 130 countries (including Pakistan, UAE, USA, and India). Your UK LTD pays UK Corporation Tax (19%–25%) on net company profits, while personal dividends are declared in your home jurisdiction in accordance with local tax treaty rules.",
  },
  {
    q: "What is the liability difference between a Sole Trader and an LTD?",
    a: "As a Sole Trader, you have unlimited personal liability—your personal savings, home, and assets can be seized to pay business debts or legal claims. In a UK LTD, your liability is limited strictly to the nominal value of your unpaid company shares (typically £1).",
  },
  {
    q: "How much does it cost to set up a UK LTD vs Sole Trader?",
    a: "Setting up a Sole Trader is free for UK residents. Incorporating a UK LTD via ADVAQ costs just £99 and includes official Companies House registration, London registered address, HMRC tax setup, and business bank account opening assistance.",
  },
  {
    q: "Can I convert a UK Sole Trader business into a UK LTD later?",
    a: "If you move to the UK and start as a sole trader, you can incorporate a UK LTD later. However, for non-residents starting from overseas, forming a UK LTD from day one is mandatory because sole trader registration is legally unavailable.",
  },
  {
    q: "How are profits extracted from a UK LTD by a foreign director?",
    a: "Foreign directors extract profits tax-efficiently as dividend payouts or director salary expense reimbursements. Dividends are declared via formal Board Minutes and Dividend Vouchers after deducting 19% Corporation Tax.",
  },
  {
    q: "Does owning a UK LTD give me a UK residence visa?",
    a: "No. Incorporating a UK Limited Company does not automatically grant a UK residency visa or right to work in the UK. However, it allows you to trade globally and invoice international clients under UK law from your home country.",
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
  headline: "UK LTD vs Sole Trader: Which Business Structure is Best for Non-Residents?",
  description:
    "Exhaustive 2026 legal comparison between a UK Limited (LTD) company and Sole Trader structure for overseas founders, freelancers, and agency owners.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-21",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uk-ltd-vs-sole-trader-non-resident",
};

export const Route = createFileRoute("/blog/uk-ltd-vs-sole-trader-non-resident")({
  head: () => ({
    meta: [
      { title: "UK LTD vs Sole Trader for Non-Residents (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Detailed legal comparison between a UK LTD and Sole Trader setup for non-UK residents. Discover liability, tax, banking, and registration rules.",
      },
      {
        name: "keywords",
        content:
          "uk ltd vs sole trader non resident, sole trader vs limited company uk overseas, uk business structure for foreigners, non resident sole trader uk",
      },
      {
        property: "og:title",
        content: "UK LTD vs Sole Trader: Which Business Structure is Best for Non-Residents?",
      },
      {
        property: "og:description",
        content:
          "Compare legal protection, tax efficiency, and banking options for non-UK founders between a Limited Company and Sole Trader.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-ltd-vs-sole-trader-non-resident" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-ltd-vs-sole-trader-non-resident" }],
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
            UK LTD vs Sole Trader: Which Business Structure Is Best for Non-Residents?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive legal, tax, and banking comparison for non-UK resident founders, freelancers, and agency owners evaluating Limited Company (LTD) vs Sole Trader structures in 2026.
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
              <span>HMRC & Companies House Compliance Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>The Bottom Line for Non-Residents</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            For non-UK residents living overseas, a <strong>UK Limited (LTD) Company is the ONLY viable, legally protected business structure</strong>. HMRC requires a UK National Insurance Number for Sole Trader registration, making Sole Proprietorship legally unavailable to non-residents.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-emerald-950/60 border border-emerald-500/30 p-3.5 rounded-lg text-emerald-200">
              <strong className="block text-emerald-400 font-serif text-sm mb-1">UK Limited Company (LTD)</strong>
              <ul className="space-y-1">
                <li>✅ 100% Open to Foreign Non-Residents</li>
                <li>✅ Limited Personal Asset Liability Shield</li>
                <li>✅ Remote Digital Banking (Wise, Revolut)</li>
                <li>✅ Enterprise B2B Corporate Credibility</li>
              </ul>
            </div>
            <div className="bg-red-950/60 border border-red-500/30 p-3.5 rounded-lg text-red-200">
              <strong className="block text-red-400 font-serif text-sm mb-1">Sole Trader (Self-Employed)</strong>
              <ul className="space-y-1">
                <li>❌ Requires UK Residency & NINo</li>
                <li>❌ Unlimited Personal Asset Liability</li>
                <li>❌ No Separate Corporate Legal Entity</li>
                <li>❌ High Street Bank Restrictions</li>
              </ul>
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
            <li><a href="#definition" className="hover:text-gold-600 underline">1. Fundamental Definitions: UK LTD vs Sole Trader</a></li>
            <li><a href="#eligibility" className="hover:text-gold-600 underline">2. The HMRC NINo Barrier: Why Sole Trader Fails</a></li>
            <li><a href="#liability" className="hover:text-gold-600 underline">3. Personal Legal Liability Protection Comparison</a></li>
            <li><a href="#comparison-table" className="hover:text-gold-600 underline">4. Comprehensive Business Structure Comparison Matrix</a></li>
            <li><a href="#taxation" className="hover:text-gold-600 underline">5. Tax Efficiency & Profit Extraction Comparison</a></li>
            <li><a href="#banking-credibility" className="hover:text-gold-600 underline">6. Corporate Banking & Global Client Credibility</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">7. 6 Critical Common Mistakes Non-Residents Must Avoid</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="definition" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Fundamental Definitions: UK LTD vs Sole Trader
          </h2>
          <p>
            When establishing a business presence connected to the United Kingdom, non-resident entrepreneurs must evaluate the legal distinction between two core entity types: a <strong>Sole Trader</strong> (Self-Employed individual) and a <strong>Private Limited Company (LTD)</strong>.
          </p>
          <p>
            A <strong>Sole Trader</strong> is an individual who owns and runs a business as an unincorporated self-employed person. Under UK law, the owner and the business are legally identical—there is zero separation between personal identity and business operations.
          </p>
          <p>
            Conversely, a <strong>UK Limited Company (LTD)</strong> is a distinct legal person incorporated under the <em>UK Companies Act 2006</em>. It possesses its own independent legal identity, meaning it can hold assets, enter into binding contracts, sue and be sued, incur debt, and pay tax completely separate from its directors and shareholders.
          </p>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Example: Designer Freelancer vs Incorporated Agency
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Ali, a UI/UX designer based in Pakistan. As a sole freelancer invoicing directly under his personal name, overseas clients treat him as an individual contractor subject to personal withholding taxes. By incorporating "Apex Design LTD" in the UK, Ali presents a registered corporate entity to European clients, signs Master Service Agreements under UK corporate law, and builds enterprise brand equity.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="eligibility" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. The HMRC NINo Barrier: Why Sole Trader Fails for Non-Residents
          </h2>
          <p>
            For foreign founders operating from outside the UK, legal eligibility is the first non-negotiable roadblock:
          </p>

          <div className="bg-red-50 border border-red-200 p-6 rounded-2xl space-y-3 my-6">
            <h4 className="font-bold text-red-900 text-base flex items-center gap-2">
              <ShieldAlert size={20} className="text-red-600" />
              The HMRC National Insurance Number (NINo) Hard Barrier
            </h4>
            <p className="text-xs text-red-800 leading-relaxed">
              To register as a Sole Trader with HM Revenue & Customs (HMRC), you must provide a valid UK National Insurance Number (NINo), a UK right-to-work visa, and evidence of UK residential address. HMRC strictly requires in-person identity interviews in the UK to issue a NINo. Foreign non-residents living abroad CANNOT obtain a NINo and are legally barred from registering as UK Sole Traders.
            </p>
          </div>

          <p>
            In sharp contrast, <strong>Companies House permits foreign nationals of any citizenship residing anywhere on earth</strong> to incorporate and own a UK LTD company. There is zero requirement to hold a UK visa, reside in the UK, or possess a National Insurance Number.
          </p>
        </div>

        {/* SECTION 3 */}
        <div id="liability" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Personal Legal Liability Protection Comparison
          </h2>
          <p>
            Liability protection is the single most critical legal factor for IT agencies, SaaS platforms, and e-commerce stores serving international clients:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-red-200 bg-red-50/40 p-6 rounded-2xl">
              <h3 className="font-bold text-red-900 text-base mb-2 flex items-center gap-2">
                <AlertTriangle className="text-red-600" size={18} />
                Sole Trader: Unlimited Personal Asset Risk
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                As a Sole Trader, you face unlimited personal liability. If a customer sues your business for contract breach, data infringement, or product liability, your personal savings, personal bank accounts, and home can be seized by court order to satisfy business debts.
              </p>
            </div>

            <div className="border border-emerald-200 bg-emerald-50/40 p-6 rounded-2xl">
              <h3 className="font-bold text-emerald-900 text-base mb-2 flex items-center gap-2">
                <Shield className="text-emerald-600" size={18} />
                UK LTD: Limited Corporate Liability Shield
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                A UK LTD creates a legal firewall between personal and company finances. Shareholders are only liable up to the nominal value of their unpaid shares (typically £1 per share). Your personal wealth remains completely insulated from corporate liabilities or lawsuits.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="comparison-table" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive Business Structure Comparison Matrix
          </h2>
          <p>
            Detailed side-by-side legal comparison between UK Limited Company (LTD) and Sole Trader structures:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Comparison Parameter</th>
                  <th className="p-4 text-gold-500">UK Limited Company (LTD)</th>
                  <th className="p-4 text-emerald-400">UK Sole Trader</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Non-Resident Eligibility</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Eligible (No UK Visa Required)</td>
                  <td className="p-4 text-rose-700 font-bold">Ineligible (Requires UK NINo & Visa)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Personal Liability Shield</td>
                  <td className="p-4 text-emerald-700 font-bold">Limited to Unpaid Shares (£1)</td>
                  <td className="p-4 text-rose-700 font-bold">Unlimited Personal Asset Liability</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Primary Tax Rate</td>
                  <td className="p-4 text-navy-900">19% Corporation Tax on Net Profits</td>
                  <td className="p-4 text-navy-900">Up to 45% Income Tax + NICs</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Corporate Banking</td>
                  <td className="p-4 text-emerald-700 font-bold">Approved via Wise, Revolut, Payoneer</td>
                  <td className="p-4 text-rose-700 font-bold">Restricted Personal High-Street Accounts</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Enterprise B2B Trust</td>
                  <td className="p-4 text-emerald-700 font-bold">High (Official Companies House record)</td>
                  <td className="p-4 text-gray-500">Low (Perceived as informal freelancer)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            NON-RESIDENT UK FORMATION
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Form Your UK LTD Company Remotely for £99
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ provides complete non-resident UK incorporation, registered London address, HMRC tax setup, and digital business banking assistance in 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK LTD Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="taxation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Tax Efficiency & Profit Extraction Comparison
          </h2>
          <p>
            Tax treatment and profit extraction mechanics differ fundamentally between an incorporated LTD company and a sole proprietorship:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Receipt className="text-gold-600" size={18} />
                UK LTD Corporate Tax & Dividend Model
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A UK LTD pays <strong>19% UK Corporation Tax</strong> on net profits under £50,000 after deducting all legitimate business operating expenses (software tools, hosting, advertising, hardware, contractor fees). Post-tax profits are extracted as dividends to foreign shareholders under bilateral Double Taxation Treaties.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Percent className="text-gold-600" size={18} />
                Sole Trader Personal Income Tax Model
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sole Traders pay UK progressive income tax (up to 45%) plus Class 2 and Class 4 National Insurance Contributions on all annual profits earned, regardless of whether funds are retained in the business or withdrawn.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="banking-credibility" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Corporate Banking & Global Client Credibility
          </h2>
          <p>
            Enterprise B2B clients in the US, UK, and Europe maintain strict vendor procurement rules. They rarely execute contracts or remit large wire transfers to unverified overseas personal accounts.
          </p>
          <p>
            Operating a <strong>UK Limited Company with an official Companies House registration number</strong> provides immediate institutional credibility. Furthermore, non-resident LTD directors qualify for multi-currency UK business banking accounts (Wise Business, Revolut Business, Payoneer), enabling direct billing in GBP, USD, and EUR.
          </p>
        </div>

        {/* SECTION 7 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. 6 Critical Common Mistakes Non-Residents Must Avoid
          </h2>
          <p>
            Avoid these six frequent missteps made by overseas founders:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Attempting Sole Trader Registration Without a UK Address
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Trying to register as a UK sole trader using a fake UK address or without a valid National Insurance Number results in HMRC rejection and tax fraud penalties.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Intermingling Personal & Corporate Funds
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Using a UK LTD company bank account for personal living expenses breaks the corporate veil, creating illegal director loan accounts.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                3. Neglecting Dividend Vouchers & Board Minutes
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Withdrawing company profits without issuing formal dividend vouchers and holding recorded board meetings breaches UK corporate law.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                4. Missing Companies House Confirmation Statement Deadlines
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Failing to submit annual Confirmation Statements (Form CS01) leads to company strike-off and bank account freezes.
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
            READY TO SETUP YOUR UK LIMITED COMPANY?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Form Your UK LTD with ADVAQ Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Get your official Companies House registration, London registered office address, and business banking assistance for just £99.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Company Formation — £99
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
