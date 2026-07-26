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
  Receipt,
  Percent,
  Coins,
  Globe2,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
  Briefcase,
  Layers,
  IdCard,
} from "lucide-react";

const faqs = [
  {
    q: "Does the UK £90,000 VAT threshold apply to non-UK resident businesses?",
    a: "No. The standard UK VAT threshold (£90,000 in 2026) only applies to UK-established businesses. Under NETP (Non-Established Taxable Person) rules, overseas businesses selling taxable goods or digital services in the UK have a £0 VAT threshold and must register immediately upon making their first UK sale.",
  },
  {
    q: "Is a UK Limited Company owned by an overseas resident considered a UK-established business?",
    a: "Yes. Because the company is legally incorporated at Companies House with a UK Registered Office Address, it is treated as a UK-established entity for VAT purposes and benefits from the full £90,000 UK VAT registration threshold for domestic sales.",
  },
  {
    q: "What is the standard UK VAT rate for 2026?",
    a: "The standard UK VAT rate is 20%. Certain goods and services qualify for a reduced rate of 5% (e.g. home energy) or zero-rate 0% (e.g. books, children's clothing, exported goods, B2B digital services to non-UK clients).",
  },
  {
    q: "Can a non-resident business voluntarily register for UK VAT below the £90,000 threshold?",
    a: "Yes. UK LTD companies can voluntarily register for VAT even with £0 turnover to reclaim UK VAT paid on startup expenses, software subscriptions, equipment, and London virtual office costs.",
  },
  {
    q: "How often do I need to file UK VAT returns with HMRC?",
    a: "UK VAT returns are submitted quarterly (every 3 months) via HMRC Making Tax Digital (MTD) compatible accounting software (such as Xero, QuickBooks, or ADVAQ's MTD VAT service).",
  },
  {
    q: "What happens if I cross the £90,000 VAT threshold and forget to register?",
    a: "Failing to register within 30 days of crossing the £90,000 rolling 12-month threshold results in automated HMRC 'Late Registration' penalties ranging from 5% to 15% of the VAT due, plus backdated VAT assessments.",
  },
  {
    q: "Do I charge UK VAT to international clients living outside the UK?",
    a: "Generally, no. Cross-border B2B digital services and exported goods sold to customers outside the UK are zero-rated (0% VAT) under UK place of supply rules.",
  },
  {
    q: "How long does HMRC take to issue a UK VAT Registration Number (GB Prefix)?",
    a: "HMRC processes non-resident UK LTD VAT applications in 14 to 30 days once identity verification and business activity proof are uploaded.",
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
  headline: "UK VAT Registration Threshold & Rules for Non-UK Resident Businesses",
  description:
    "Exhaustive 2026 UK VAT compliance guide for overseas founders. Learn £90,000 vs £0 NETP threshold rules, voluntary VAT registration benefits, and Making Tax Digital (MTD).",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/uk-vat-registration-non-resident-threshold",
};

export const Route = createFileRoute("/blog/uk-vat-registration-non-resident-threshold")({
  head: () => ({
    meta: [
      { title: "UK VAT Registration Threshold Non-Resident Rules (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Guide to UK VAT registration threshold (£90,000 vs £0 NETP rule) for non-resident business owners. Voluntary VAT, Making Tax Digital & HMRC rules.",
      },
      {
        name: "keywords",
        content:
          "uk vat registration non resident threshold, £90000 vat threshold uk ltd overseas, netp zero vat threshold non established business, hmrc vat registration foreign director",
      },
      {
        property: "og:title",
        content: "UK VAT Registration Threshold & Rules for Non-UK Resident Businesses",
      },
      {
        property: "og:description",
        content:
          "Understand UK VAT registration thresholds, NETP rules, input VAT reclaims, and HMRC Making Tax Digital compliance for foreign directors.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/uk-vat-registration-non-resident-threshold" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/uk-vat-registration-non-resident-threshold" }],
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
            UK VAT Registration Threshold & Rules for Non-UK Resident Businesses
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            An exhaustive 2026 HMRC VAT masterclass explaining the £90,000 threshold, Non-Established Taxable Person (NETP) £0 rules, input VAT reclaims, and Making Tax Digital (MTD) compliance.
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
              <span>HMRC VAT & MTD Official Compliance Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>VAT Threshold Rules at a Glance (2026)</span>
          </div>
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Understanding HMRC VAT thresholds for UK incorporated entities versus foreign entities:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">UK Limited Company (UK Established)</strong>
              <p className="text-navy-100 leading-relaxed">
                Enjoys the full <strong>£90,000 rolling 12-month VAT threshold</strong> for domestic UK sales. Registration is optional until turnover hits £90,000.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Non-UK Entity (NETP - Foreign Company)</strong>
              <p className="text-navy-100 leading-relaxed">
                Subject to a <strong>£0 VAT threshold</strong>. Must register for UK VAT immediately upon making their very first UK taxable sale.
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
            <li><a href="#threshold-explained" className="hover:text-gold-600 underline">1. UK VAT Registration Threshold Explained (£90,000 Limit)</a></li>
            <li><a href="#netp-rules" className="hover:text-gold-600 underline">2. UK LTD vs Foreign Entity: The NETP £0 Rule</a></li>
            <li><a href="#voluntary-registration" className="hover:text-gold-600 underline">3. Benefits of Voluntary UK VAT Registration Below £90k</a></li>
            <li><a href="#vat-matrix" className="hover:text-gold-600 underline">4. Comprehensive UK VAT Rates & Threshold Matrix</a></li>
            <li><a href="#vat-rates" className="hover:text-gold-600 underline">5. UK VAT Rates: 20% Standard, 5% Reduced & 0% Zero-Rated</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common VAT Mistakes Non-Residents Must Avoid</a></li>
            <li><a href="#mtd-compliance" className="hover:text-gold-600 underline">7. HMRC Making Tax Digital (MTD) Quarterly Filing Rules</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="threshold-explained" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. UK VAT Registration Threshold Explained (£90,000 Limit)
          </h2>
          <p>
            Value Added Tax (VAT) is a consumption tax levied on goods and services sold inside the United Kingdom.
          </p>
          <p>
            For UK-established corporate entities, HM Revenue & Customs (HMRC) sets mandatory VAT registration based on a <strong>rolling 12-month taxable turnover threshold of £90,000</strong>.
          </p>
          <p>
            You must register for UK VAT if:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 my-4 pl-2">
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> Your total taxable UK turnover in any rolling 12-month period exceeds £90,000.</li>
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> You expect your taxable turnover to exceed £90,000 in the next 30 days alone.</li>
          </ul>

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Voluntary VAT Registration
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Zayn, a software founder in Pakistan operating a UK LTD. Zayn's agency generates £60,000 in annual turnover—well below the mandatory £90,000 threshold. However, Zayn voluntarily registers for UK VAT to reclaim 20% VAT (£1,400) paid on expensive UK server infrastructure and London virtual office fees.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="netp-rules" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. UK LTD vs Foreign Entity: The NETP £0 Rule
          </h2>
          <p>
            A critical distinction exists under UK VAT law between an overseas entrepreneur trading via a <strong>UK Limited Company</strong> versus trading directly through an <strong>unincorporated foreign business</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-emerald-950 text-base mb-1 flex items-center gap-2">
                <Building2 className="text-emerald-600" size={18} />
                UK LTD Company (UK Established)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Because your UK LTD is incorporated at Companies House with a UK registered address, HMRC grants it <strong>UK-established tax status</strong> with the full <strong>£90,000 threshold allowance</strong>.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-rose-950 text-base mb-1 flex items-center gap-2">
                <Globe2 className="text-rose-600" size={18} />
                NETP Foreign Business (£0 Threshold)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                If you sell goods directly into the UK from an overseas entity (e.g. US LLC or Pakistan Sole Proprietorship), you are classified as a <strong>Non-Established Taxable Person (NETP)</strong> with a <strong>£0 VAT threshold</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="voluntary-registration" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Benefits of Voluntary UK VAT Registration Below £90k
          </h2>
          <p>
            Even if your UK LTD company generates less than £90,000 in turnover, <strong>voluntary VAT registration</strong> offers major commercial advantages:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Check className="text-gold-600" size={18} />
                Reclaim UK Input VAT Expenses
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Recover 20% VAT paid on UK business expenses, software subscriptions, equipment, and London virtual office services.
              </p>
            </div>

            <div className="p-5 border border-border rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Check className="text-gold-600" size={18} />
                Corporate Credibility & GB VAT Number
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Displaying an official UK VAT Registration Number (`GB123456789`) on client invoices builds immense trust with UK corporate clients.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="vat-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive UK VAT Rates & Threshold Matrix
          </h2>
          <p>
            Detailed overview of UK VAT thresholds and rates based on entity classification:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Entity & Transaction Type</th>
                  <th className="p-4 text-gold-500">VAT Registration Threshold</th>
                  <th className="p-4 text-emerald-400">Applicable VAT Rate</th>
                  <th className="p-4">Input VAT Reclaim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">UK LTD (Domestic UK Sales)</td>
                  <td className="p-4 text-emerald-700 font-bold">£90,000 Rolling 12-Month Limit</td>
                  <td className="p-4 text-navy-900">20% Standard Rate</td>
                  <td className="p-4 text-emerald-700 font-bold">Eligible (Full Input Reclaim)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Foreign Entity (NETP Sales to UK)</td>
                  <td className="p-4 text-rose-700 font-bold">£0 (Mandatory Immediate Reg)</td>
                  <td className="p-4 text-navy-900">20% Standard Rate</td>
                  <td className="p-4 text-navy-900">Eligible</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">UK LTD Export B2B Services</td>
                  <td className="p-4 text-navy-900">Excluded from UK Threshold</td>
                  <td className="p-4 text-emerald-700 font-bold">0% Zero-Rated</td>
                  <td className="p-4 text-emerald-700 font-bold">Eligible (Full Reclaim)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">UK Domestic Books & Childrenswear</td>
                  <td className="p-4 text-navy-900">Counts Towards £90k Limit</td>
                  <td className="p-4 text-emerald-700 font-bold">0% Zero-Rated</td>
                  <td className="p-4 text-navy-900">Eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            HMRC VAT REGISTRATION & FILING
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Get Your Official UK VAT Number (GB Prefix)
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ submits complete HMRC VAT registration applications and handles Making Tax Digital (MTD) quarterly filing for non-resident directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/vat-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore UK VAT Registration Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="vat-rates" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. UK VAT Rates: 20% Standard, 5% Reduced & 0% Zero-Rated
          </h2>
          <p>
            When issuing VAT invoices to clients, apply the correct UK statutory rate:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 my-6">
            <div className="bg-white border border-border p-5 rounded-2xl text-center shadow-sm">
              <span className="text-gold-600 font-bold text-2xl block">20%</span>
              <strong className="text-navy-950 block mt-1 text-sm">Standard Rate</strong>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Applies to most UK B2B services, goods, and digital software products.</p>
            </div>
            <div className="bg-white border border-border p-5 rounded-2xl text-center shadow-sm">
              <span className="text-navy-700 font-bold text-2xl block">5%</span>
              <strong className="text-navy-950 block mt-1 text-sm">Reduced Rate</strong>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Applies to domestic energy, heating, and specialized items.</p>
            </div>
            <div className="bg-white border border-border p-5 rounded-2xl text-center shadow-sm">
              <span className="text-emerald-600 font-bold text-2xl block">0%</span>
              <strong className="text-navy-950 block mt-1 text-sm">Zero-Rated</strong>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">Applies to exported services, books, and basic food items.</p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common VAT Mistakes Non-Residents Must Avoid
          </h2>
          <p>
            Avoid these six frequent VAT compliance mistakes:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Confusing Calendar Year with Rolling 12-Month Turnover
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                HMRC calculates the £90,000 threshold on a rolling 12-month basis, not a fixed calendar year.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Charging 20% VAT Prior to Receiving GB VAT Number
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Charging VAT on invoices before receiving your official GB VAT registration number from HMRC is strictly illegal.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="mtd-compliance" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. HMRC Making Tax Digital (MTD) Quarterly Filing Rules
          </h2>
          <p>
            HMRC mandates that all VAT-registered businesses submit their quarterly VAT returns through <strong>Making Tax Digital (MTD)</strong> compatible software via digital API links.
          </p>
          <p>
            ADVAQ manages MTD compliance by maintaining digital bookkeeping and submitting quarterly MTD VAT returns directly to HMRC on your behalf.
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
            HMRC VAT REGISTRATION & COMPLIANCE
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your UK Company for VAT with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            HMRC VAT number registration, MTD setup, and quarterly VAT return preparation for non-resident directors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/vat-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK VAT Registration
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
