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
  TrendingDown,
  AlertTriangle,
  Percent,
} from "lucide-react";

const faqs = [
  {
    q: "What is the difference between a Filer and a Non-Filer in Pakistan?",
    a: "A 'Filer' is an active tax compliant citizen or business listed on FBR's Active Taxpayer List (ATL). A 'Non-Filer' is an individual or business that has failed to file annual income tax returns with FBR.",
  },
  {
    q: "What are the financial penalties for remaining a Non-Filer in Pakistan?",
    a: "Non-Filers pay double or triple Withholding Tax (WHT) rates on cash withdrawals (Section 231AB), property transfers (Section 236C/236K), vehicle registration, foreign credit card transactions, and stock dividend payouts.",
  },
  {
    q: "Can Non-Filers buy real estate or register luxury vehicles in Pakistan?",
    a: "Under recent Finance Act amendments, FBR imposes strict restrictions and heavy penalty tax rates (up to 12%–16%) on Non-Filers attempting to purchase property or register motor vehicles.",
  },
  {
    q: "How can a Non-Filer become an Active Tax Filer on FBR ATL?",
    a: "To become a Filer: (1) Log into FBR Iris 2.0 portal, (2) Submit your annual Income Tax Return 114(1) & Wealth Statement 116, and (3) Pay the nominal ATL surcharge fee (PKR 1,000 for individuals, PKR 20,000 for companies).",
  },
  {
    q: "How often is the FBR Active Taxpayer List (ATL) updated?",
    a: "The FBR ATL is updated every Monday morning on the official FBR portal and mobile app.",
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
  headline: "Filer vs Non-Filer Status in Pakistan: Advantages, Bank Tax Rates & Penalties",
  description:
    "Complete 2026 Filer vs Non-Filer tax rate comparison guide for Pakistan. Learn bank withholding tax savings, property transaction tax rates, vehicle registration penalties, and ATL restoration steps.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/filer-vs-non-filer-pakistan-benefits-penalties",
};

export const Route = createFileRoute("/blog/filer-vs-non-filer-pakistan-benefits-penalties")({
  head: () => ({
    meta: [
      { title: "Filer vs Non-Filer Status Pakistan Tax Rates (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Filer vs Non-Filer status comparison in Pakistan. Compare bank WHT rates, real estate tax 236C/236K, vehicle registration penalty & ATL restoration steps.",
      },
      {
        name: "keywords",
        content:
          "filer vs non filer pakistan benefits penalties, fbr active taxpayer list atl status check, non filer cash withdrawal withholding tax 231ab, property tax rate filer vs non filer 236c 236k",
      },
      {
        property: "og:title",
        content: "Filer vs Non-Filer Status in Pakistan: Advantages, Bank Tax Rates & Penalties",
      },
      {
        property: "og:description",
        content:
          "Compare Filer vs Non-Filer tax rates and discover how becoming a Filer slashes your banking and property transaction costs in half.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/filer-vs-non-filer-pakistan-benefits-penalties" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/filer-vs-non-filer-pakistan-benefits-penalties" }],
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
            Filer vs Non-Filer Status in Pakistan: Advantages, Bank Tax Rates & Penalties
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical side-by-side financial comparison for Pakistani citizens, business owners, and real estate buyers on the massive tax savings of Filer status versus the heavy punitive penalties imposed on Non-Filers.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Tax Policy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>FBR Active Taxpayer List (ATL) 2026 Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Filer vs Non-Filer Tax Rate Table</span>
          </div>
          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left text-navy-100 border-collapse">
              <thead>
                <tr className="border-b border-white/20 text-gold-500">
                  <th className="py-2">Transaction Type</th>
                  <th className="py-2">Filer Rate</th>
                  <th className="py-2">Non-Filer Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-2 font-semibold">Cash Withdrawal (Section 231AB)</td>
                  <td className="py-2 text-emerald-400">0%</td>
                  <td className="py-2 text-rose-400">0.6% to 0.9%</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Property Purchase (Section 236K)</td>
                  <td className="py-2 text-emerald-400">3%</td>
                  <td className="py-2 text-rose-400">12% to 16%</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Property Sale (Section 236C)</td>
                  <td className="py-2 text-emerald-400">3%</td>
                  <td className="py-2 text-rose-400">10%</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Foreign Credit Card Spend</td>
                  <td className="py-2 text-emerald-400">5%</td>
                  <td className="py-2 text-rose-400">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            <li><a href="#what-is-atl-status" className="hover:text-gold-600 underline">1. What Is Active Taxpayer List (ATL) Status?</a></li>
            <li><a href="#banking-wht-savings" className="hover:text-gold-600 underline">2. Banking Withholding Tax Savings for Filers</a></li>
            <li><a href="#property-car-tax-rates" className="hover:text-gold-600 underline">3. Real Estate & Vehicle Registration Tax Comparison</a></li>
            <li><a href="#non-filer-penalties" className="hover:text-gold-600 underline">4. Severe Restrictions Imposed on Non-Filers</a></li>
            <li><a href="#how-to-become-filer" className="hover:text-gold-600 underline">5. Step-by-Step Process to Become an Active Filer</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-atl-status" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is Active Taxpayer List (ATL) Status?
          </h2>
          <p>
            The Federal Board of Revenue maintains the <strong>Active Taxpayer List (ATL)</strong> to distinguish tax-compliant citizens ("Filers") from individuals who have defaulted on annual tax returns ("Non-Filers").
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="banking-wht-savings" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Banking Withholding Tax Savings for Filers
          </h2>
          <p>
            Filers enjoy 0% withholding tax on cash withdrawals and bank wire transfers, whereas Non-Filers face automatic WHT deductions under Section 231AB.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            PAKISTAN ATL RESTORATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Become an Active Filer on FBR ATL with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ files your FBR income tax return, reconciles wealth statements, pays the ATL surcharge fee, and restores active filer status on FBR portal.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/atl-restoration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order ATL Restoration Service <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="property-car-tax-rates" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Real Estate & Vehicle Registration Tax Comparison
          </h2>
          <p>
            When purchasing property, Filers pay 3% WHT under Section 236K, whereas Non-Filers face steep penalty tax rates up to 16%.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="non-filer-penalties" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Severe Restrictions Imposed on Non-Filers
          </h2>
          <p>
            Under Finance Act amendments, FBR has authorized blocking mobile SIM cards, electricity connections, and issuing travel ban notices for persistent Non-Filers.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="how-to-become-filer" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Step-by-Step Process to Become an Active Filer
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>File annual Tax Return Form 114(1) and Wealth Statement Form 116 on FBR Iris 2.0.</li>
            <li>Generate PKR 1,000 ATL Surcharge CPR challan on eFBR portal.</li>
            <li>Pay challan via online banking app or ATM.</li>
            <li>Status updates to "Active" on FBR ATL every Monday.</li>
          </ol>
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
            PAKISTAN ATL & FILER STATUS SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Restore Your Active Filer Status Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            FBR Iris return filing, wealth statement reconciliation, ATL surcharge CPR payment, and Active Taxpayer List restoration.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/atl-restoration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order ATL Filer Status Restoration
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
