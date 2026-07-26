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
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is the difference between a Filer and a Non-Filer in Pakistan?",
    a: "A 'Filer' is an active tax-compliant citizen or business listed on FBR's Active Taxpayer List (ATL) who has submitted annual tax returns. A 'Non-Filer' is an individual or business that has failed to file annual returns with FBR, resulting in doubled or tripled withholding tax penalties.",
  },
  {
    q: "What are the financial penalties for remaining a Non-Filer in Pakistan?",
    a: "Non-Filers pay double or triple Withholding Tax (WHT) rates on cash withdrawals (Section 231AB), property transfers (Section 236C/236K), motor vehicle registration, foreign credit card transactions, and bank profit on debt.",
  },
  {
    q: "Can Non-Filers buy real estate or register luxury vehicles in Pakistan?",
    a: "Under recent Finance Act amendments, FBR imposes heavy penalty tax rates (up to 12%–16% on property purchases under Section 236K and 200% to 300% penalty taxes on motor vehicle registration) on Non-Filers.",
  },
  {
    q: "How can a Non-Filer become an Active Tax Filer on FBR ATL?",
    a: "To become an Active Filer: (1) Log into FBR Iris 2.0 portal, (2) Submit your annual Income Tax Return 114(1) & Wealth Statement 116, and (3) Pay the nominal ATL surcharge fee (PKR 1,000 for individuals, PKR 10,000 for AOPs, and PKR 20,000 for SECP companies).",
  },
  {
    q: "How often is the FBR Active Taxpayer List (ATL) updated?",
    a: "The FBR Active Taxpayer List (ATL) is updated every Monday morning on the official FBR portal and mobile application.",
  },
  {
    q: "What happens if a Non-Filer buys a PKR 50 Million property?",
    a: "A Filer purchasing a PKR 50 Million property pays 3% WHT (PKR 1,500,000). A Non-Filer pays 16% WHT (PKR 8,000,000)—costing the Non-Filer an additional PKR 6.5 Million in tax penalties on a single property transaction.",
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
    "Complete 2026 Filer vs Non-Filer tax rate comparison masterclass for Pakistan. Detailed guide on banking withholding tax savings, property transaction tax rates (Section 236C/236K), vehicle registration penalties, and step-by-step ATL restoration.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan Tax Policy Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/filer-vs-non-filer-pakistan-benefits-penalties",
};

export const Route = createFileRoute("/blog/filer-vs-non-filer-pakistan-benefits-penalties")({
  head: () => ({
    meta: [
      { title: "Filer vs Non-Filer Status Pakistan Tax Rates (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "Filer vs Non-Filer status comparison in Pakistan. Compare bank WHT rates, real estate tax 236C/236K, vehicle registration penalty & ATL restoration steps.",
      },
      {
        name: "keywords",
        content:
          "filer vs non filer pakistan benefits penalties, fbr active taxpayer list atl status check, non filer cash withdrawal withholding tax 231ab, property tax rate filer vs non filer 236c 236k, atl surcharge fee 1000 pkr pakistan",
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
            An exhaustive financial comparison for Pakistani citizens, business owners, investors, and real estate buyers on the massive tax savings of Filer status versus the heavy punitive penalties imposed on Non-Filers.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan Tax Policy Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
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
            <span>Filer vs Non-Filer Financial Comparison</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-emerald-400 font-serif text-sm mb-1">Active Filer Benefits (ATL)</strong>
              <p className="text-navy-100 leading-relaxed">
                0% banking cash withdrawal WHT, 3% real estate purchase WHT, 5% international card tax, full legal asset protection.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-rose-400 font-serif text-sm mb-1">Non-Filer Penalty Taxes</strong>
              <p className="text-navy-100 leading-relaxed">
                0.6% cash withdrawal tax, 12%–16% property purchase WHT, 200%+ motor vehicle tax, risk of SIM/utility disconnections.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">ATL Restoration Fee</strong>
              <p className="text-navy-100 leading-relaxed">
                PKR 1,000 for individuals, PKR 10,000 for AOPs, and PKR 20,000 for SECP companies to regain active status.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Weekly Roster Updates</strong>
              <p className="text-navy-100 leading-relaxed">
                FBR Active Taxpayer List (ATL) updates automatically every Monday morning across bank databases.
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
            <li><a href="#what-is-atl-status" className="hover:text-gold-600 underline">1. What Is Active Taxpayer List (ATL) Status?</a></li>
            <li><a href="#tax-rate-matrix" className="hover:text-gold-600 underline">2. Comprehensive Filer vs Non-Filer Tax Rate Table</a></li>
            <li><a href="#banking-wht-savings" className="hover:text-gold-600 underline">3. Banking Withholding Tax Savings for Filers</a></li>
            <li><a href="#property-car-tax-rates" className="hover:text-gold-600 underline">4. Real Estate & Vehicle Registration Tax Comparison</a></li>
            <li><a href="#non-filer-penalties" className="hover:text-gold-600 underline">5. Severe Non-Filer Penalties & Legal Restrictions</a></li>
            <li><a href="#how-to-become-filer" className="hover:text-gold-600 underline">6. Step-by-Step Process to Become an Active Filer</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="what-is-atl-status" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. What Is Active Taxpayer List (ATL) Status?
          </h2>
          <p>
            The Federal Board of Revenue (FBR) maintains the <strong>Active Taxpayer List (ATL)</strong> under Section 181A of the Income Tax Ordinance 2001.
          </p>
          <p>
            The ATL separates tax-compliant citizens and registered businesses ("Filers") from individuals who have defaulted on filing annual tax returns ("Non-Filers"). Being listed on the ATL guarantees access to standard withholding tax rates.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="tax-rate-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Comprehensive Filer vs Non-Filer Tax Rate Table
          </h2>
          <p>
            Side-by-side withholding tax comparison across key financial transactions:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Transaction / Activity Head</th>
                  <th className="p-4 text-emerald-500 font-bold">Active Filer Tax Rate (ATL)</th>
                  <th className="p-4 text-red-400 font-bold">Non-Filer Penalty Tax Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Cash Withdrawal (Section 231AB, &gt; PKR 50k)</td>
                  <td className="p-4 text-emerald-700 font-bold">0% Tax</td>
                  <td className="p-4 text-red-700 font-bold">0.6% Withholding Tax</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Property Purchase (Section 236K)</td>
                  <td className="p-4 text-emerald-700 font-bold">3% to 3.5% WHT</td>
                  <td className="p-4 text-red-700 font-bold">12% to 16% Penalty WHT</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Property Sale / Transfer (Section 236C)</td>
                  <td className="p-4 text-emerald-700 font-bold">3% WHT</td>
                  <td className="p-4 text-red-700 font-bold">10% WHT</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">International Credit Card Payments</td>
                  <td className="p-4 text-emerald-700 font-bold">5% Advance Tax</td>
                  <td className="p-4 text-red-700 font-bold">10% Advance Tax</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Bank Profit on Debt / Savings</td>
                  <td className="p-4 text-emerald-700 font-bold">15% Final Tax</td>
                  <td className="p-4 text-red-700 font-bold">35% Penalty WHT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="property-car-tax-rates" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Real Estate & Vehicle Registration Tax Comparison
          </h2>
          <p>
            The difference in tax liability when purchasing real estate is staggering:
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              PKR 50,000,000 Real Estate Transaction Case Study:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              • <strong>Active Filer Tax Paid:</strong> 3% under Section 236K = <strong>PKR 1,500,000</strong>.
              <br /><br />
              • <strong>Non-Filer Tax Paid:</strong> 16% under Section 236K = <strong>PKR 8,000,000</strong>.
              <br /><br />
              • <strong>Net Filer Financial Savings:</strong> <strong>PKR 6,500,000</strong> saved on a single property purchase.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="how-to-become-filer" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step Process to Become an Active Filer
          </h2>
          <p>
            Restoring your Filer status on the FBR Iris 2.0 portal:
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 1: Submit Income Tax Return & Wealth Statement</strong>
              <p className="text-xs text-gray-600">File Form 114(1) and Form 116 for the latest completed tax year on FBR Iris 2.0.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 2: Generate ATL Surcharge PSID</strong>
              <p className="text-xs text-gray-600">Generate a CPR challan on eFBR (PKR 1,000 for individuals, PKR 20,000 for SECP companies).</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 3: Roster Verification on Monday</strong>
              <p className="text-xs text-gray-600">Your profile is automatically updated to "Active" on the weekly FBR ATL roster published every Monday morning.</p>
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
            PAKISTAN ATL & FILER STATUS SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Restore Your Active Filer Status Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            FBR Iris return filing, wealth statement reconciliation, ATL surcharge CPR payment, and Active Taxpayer List restoration handled by ADVAQ.
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
