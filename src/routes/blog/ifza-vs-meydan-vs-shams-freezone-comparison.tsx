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
  Scale,
  Award,
  DollarSign,
  Globe2,
  Landmark,
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
    q: "What is the main difference between IFZA, Meydan, and Shams Freezones?",
    a: "IFZA (operating under Dubai Silicon Oasis) offers high trade license customizability, allowing founders to combine up to 3 business activity groups under one license fee. Meydan Free Zone (located inside The Meydan Hotel in Nad Al Sheba, central Dubai) provides a prestigious Dubai address with rapid 48-hour Wio Bank pre-approvals. Shams (Sharjah Media City) offers the lowest starting entry cost for zero-visa tech, media, and digital consultancy trade licenses.",
  },
  {
    q: "Is Meydan Free Zone located inside central Dubai?",
    a: "Yes! Meydan Free Zone is physically located inside the iconic Meydan Hotel & Racecourse in Nad Al Sheba, central Dubai. Incorporating under Meydan gives your company a official commercial address in Dubai, which is displayed on your corporate trade license, invoice headers, and bank account documentation.",
  },
  {
    q: "Which Freezone is fastest for remote company incorporation?",
    a: "Meydan and IFZA offer 100% digital incorporation portals that issue electronic Trade Licenses, MOAs, and Certificates of Formation within 24 to 72 hours without requiring physical presence in the UAE for initial company registration.",
  },
  {
    q: "Can I upgrade my visa package later in IFZA, Meydan, or Shams?",
    a: "Yes! You can start with a 0-visa flexi-desk license to minimize initial startup costs and upgrade your immigration quota to 1, 2, or more investor/employee visas at any time as your business scales.",
  },
  {
    q: "Which of these three Freezones is easiest for corporate bank account opening?",
    a: "Meydan Free Zone and IFZA enjoy pre-integrated digital onboarding status with Wio Business Bank, allowing multi-currency AED/USD/EUR business bank accounts to be approved online in 48 to 72 hours once the owner's Emirates ID is issued.",
  },
  {
    q: "Do IFZA, Meydan, and Shams qualify for 0% UAE Corporate Tax in 2026?",
    a: "Yes. Under Cabinet Decision No. 55 of 2023, entities registered in IFZA, Meydan, or Shams can maintain a 0% Corporate Tax rate on Qualifying Income derived from international clients outside the UAE or other Freezone entities, provided they maintain adequate economic substance and comply with Transfer Pricing rules.",
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
  headline: "IFZA vs Meydan vs Shams Free Zone: 2026 Comparison for Non-Resident Tech Founders",
  description:
    "Comprehensive 2026 Freezone comparison masterclass for non-resident tech founders. Compare IFZA Dubai, Meydan Free Zone, and Shams Sharjah on license costs, location prestige, 2-year residence visa allocations, 0% Corporate Tax rules, and Wio corporate banking.",
  author: { "@type": "Organization", name: "ADVAQ UAE Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/ifza-vs-meydan-vs-shams-freezone-comparison",
};

export const Route = createFileRoute("/blog/ifza-vs-meydan-vs-shams-freezone-comparison")({
  head: () => ({
    meta: [
      { title: "IFZA vs Meydan vs Shams Free Zone Comparison (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "IFZA vs Meydan vs Shams Freezone cost & license comparison for non-residents. Compare Dubai Silicon Oasis vs Meydan Hotel vs Sharjah Media City for tech founders.",
      },
      {
        name: "keywords",
        content:
          "ifza vs meydan vs shams freezone comparison, ifza dubai license cost tech startup, meydan free zone wio bank integration, shams sharjah cheapest freezone visa",
      },
      {
        property: "og:title",
        content: "IFZA vs Meydan vs Shams Free Zone: 2026 Comparison for Non-Resident Tech Founders",
      },
      {
        property: "og:description",
        content:
          "Compare license costs, location prestige, visa quotas, and banking speed between IFZA, Meydan, and Shams Freezones.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/ifza-vs-meydan-vs-shams-freezone-comparison" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/ifza-vs-meydan-vs-shams-freezone-comparison" }],
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
            IFZA vs Meydan vs Shams Free Zone: 2026 Comparison for Non-Resident Tech Founders
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive, side-by-side legal and operational comparison for international software developers, SaaS creators, digital agencies, and consultants evaluating IFZA Dubai, Meydan Free Zone, and Shams Sharjah.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE Corporate Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UAE Low-to-Mid Market Freezone Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <Scale size={18} />
            <span>3-Way Freezone Comparison Essentials</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Meydan Free Zone</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for prestige Dubai address inside Meydan Hotel, Nad Al Sheba. 100% digital onboarding & fast Wio Bank approval.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">IFZA Dubai</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for multi-activity tech & consulting setups under Dubai Silicon Oasis. High international brand recognition.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Shams Sharjah</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for lowest budget zero-visa media & IT consultancy licenses. Ideal for solo freelancers & remote consultants.
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
            <li><a href="#triad-overview" className="hover:text-gold-600 underline">1. The Low-to-Mid Market Freezone Triad in the UAE</a></li>
            <li><a href="#comparison-matrix" className="hover:text-gold-600 underline">2. Comprehensive 10-Factor Comparison Matrix</a></li>
            <li><a href="#ifza-breakdown" className="hover:text-gold-600 underline">3. In-Depth Breakdown of IFZA (Dubai Silicon Oasis)</a></li>
            <li><a href="#meydan-breakdown" className="hover:text-gold-600 underline">4. In-Depth Breakdown of Meydan Free Zone (Dubai)</a></li>
            <li><a href="#shams-breakdown" className="hover:text-gold-600 underline">5. In-Depth Breakdown of Shams (Sharjah Media City)</a></li>
            <li><a href="#corporate-tax-banking" className="hover:text-gold-600 underline">6. Corporate Tax (Cabinet Decision 55) & Banking Approval Strategy</a></li>
            <li><a href="#remote-workflow" className="hover:text-gold-600 underline">7. Step-by-Step 100% Remote Incorporation & Visa Workflow</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="triad-overview" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. The Low-to-Mid Market Freezone Triad in the UAE
          </h2>
          <p>
            When setting up a business in the United Arab Emirates, international tech founders, software developers, and digital marketing consultants frequently narrow their search to three premier economic zones: <strong>IFZA Dubai</strong>, <strong>Meydan Free Zone</strong>, and <strong>Shams Sharjah</strong>.
          </p>
          <p>
            Together, these three jurisdictions represent the core "low-to-mid market triad" of UAE Freezones. They allow foreign non-residents to establish 100% foreign-owned corporate entities, obtain official flexi-desk co-working space allocations, secure 2-year investor residence visas, and open multi-currency corporate bank accounts without incurring enterprise-level real estate costs.
          </p>
          <p>
            However, while all three Freezones share foundational benefits—such as 100% profit repatriation and 0% personal income tax—their licensing structures, location prestige, fee tiers, and bank acceptance speeds vary significantly.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="comparison-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Comprehensive 10-Factor Comparison Matrix
          </h2>
          <p>
            The matrix below provides a side-by-side legal and operational evaluation across IFZA, Meydan, and Shams:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Comparison Parameter</th>
                  <th className="p-4 text-gold-500">Meydan Free Zone (Dubai)</th>
                  <th className="p-4 text-gold-500">IFZA (Dubai Silicon Oasis)</th>
                  <th className="p-4 text-emerald-400">Shams (Sharjah Media City)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">1. Physical Jurisdiction</td>
                  <td className="p-4 font-bold text-navy-900">Nad Al Sheba, Central Dubai</td>
                  <td className="p-4 font-bold text-navy-900">Dubai Silicon Oasis (DSO)</td>
                  <td className="p-4 font-bold text-emerald-700">Sharjah Media City</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">2. Baseline Zero-Visa License Fee</td>
                  <td className="p-4 font-bold text-navy-900">~AED 12,500 ($3,400)</td>
                  <td className="p-4 font-bold text-navy-900">~AED 12,900 ($3,510)</td>
                  <td className="p-4 font-bold text-emerald-700">~AED 5,750 ($1,565)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">3. 1-Visa Package Total Setup Cost</td>
                  <td className="p-4 font-bold text-navy-900">~AED 16,720 ($4,550)</td>
                  <td className="p-4 font-bold text-navy-900">~AED 17,170 ($4,675)</td>
                  <td className="p-4 font-bold text-emerald-700">~AED 9,470 ($2,578)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">4. Business Activity Customization</td>
                  <td className="p-4 text-navy-900">Up to 3 Tech Activities</td>
                  <td className="p-4 text-emerald-700 font-bold">Combine 3 Activity Groups</td>
                  <td className="p-4 text-navy-900">Media & IT Consultancy Focus</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">5. Wio Business Bank Speed</td>
                  <td className="p-4 text-emerald-700 font-bold">Fast-Track (2–3 Days)</td>
                  <td className="p-4 text-emerald-700 font-bold">Fast-Track (2–4 Days)</td>
                  <td className="p-4 text-navy-900">Standard (3–5 Days)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">6. Invoice Address Prestige</td>
                  <td className="p-4 text-emerald-700 font-bold">High (Meydan Hotel, Dubai)</td>
                  <td className="p-4 text-emerald-700 font-bold">High (DSO, Dubai)</td>
                  <td className="p-4 text-navy-900">Moderate (Sharjah)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">7. Flexi-Desk Virtual Office</td>
                  <td className="p-4 text-emerald-700 font-bold">Included in License Fee</td>
                  <td className="p-4 text-emerald-700 font-bold">Included in License Fee</td>
                  <td className="p-4 text-emerald-700 font-bold">Included in License Fee</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">8. Annual Statutory Audit</td>
                  <td className="p-4 text-navy-900">Optional / Waived for SME</td>
                  <td className="p-4 text-navy-900">Optional / Waived for SME</td>
                  <td className="p-4 text-navy-900">Waived</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            FREEZONE SELECTION CONSULTATION
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Select the Ideal UAE Freezone with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ analyzes your business activities, visa requirements, and budget to select the right Freezone and secure guaranteed corporate bank account opening.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Freezone Setup Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="ifza-breakdown" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. In-Depth Breakdown of IFZA (Dubai Silicon Oasis)
          </h2>
          <p>
            <strong>IFZA (International Free Zone Authority)</strong> operates in strategic co-branding with Dubai Silicon Oasis (DSO). It is widely regarded as one of the most versatile Freezones in the UAE for established software agencies and cross-border consultants.
          </p>
          <div className="p-5 border border-border rounded-xl bg-off-white my-4 text-xs">
            <strong className="block text-navy-950 font-bold text-sm mb-1">Key Advantages of IFZA:</strong>
            <p className="text-gray-600 leading-relaxed mb-2">
              • <strong>Multi-Activity Licensing:</strong> IFZA allows combining up to 3 business activity groups under a single trade license fee, enabling tech agencies to offer software development, IT consultancy, and digital marketing simultaneously.
              <br /><br />
              • <strong>High Global Brand Recognition:</strong> Having an IFZA DSO trade license provides strong international credibility when contracting with US and European enterprise clients.
            </p>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="meydan-breakdown" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. In-Depth Breakdown of Meydan Free Zone (Dubai)
          </h2>
          <p>
            <strong>Meydan Free Zone</strong> is physically located inside the famous Meydan Hotel and Racecourse complex in Nad Al Sheba, central Dubai. Over recent years, Meydan has rapidly become the preferred choice for digital nomads, SaaS founders, and e-commerce sellers.
          </p>
          <div className="p-5 border border-border rounded-xl bg-off-white my-4 text-xs">
            <strong className="block text-navy-950 font-bold text-sm mb-1">Key Advantages of Meydan:</strong>
            <p className="text-gray-600 leading-relaxed mb-2">
              • <strong>Prestige Central Dubai Address:</strong> Company trade licenses feature a prime Nad Al Sheba, Dubai address, enhancing invoice credibility.
              <br /><br />
              • <strong>Fast-Track Wio Bank Integration:</strong> Meydan's 100% digital portal is pre-integrated with Wio Business Bank, allowing digital corporate bank account pre-approvals in as little as 48 hours.
            </p>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="shams-breakdown" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. In-Depth Breakdown of Shams (Sharjah Media City)
          </h2>
          <p>
            <strong>Shams (Sharjah Media City)</strong> is designed for budget-conscious freelancers, creative agencies, and solo software developers who prioritize ultra-low starting overheads over a physical Dubai address.
          </p>
          <div className="p-5 border border-border rounded-xl bg-off-white my-4 text-xs">
            <strong className="block text-navy-950 font-bold text-sm mb-1">Key Advantages of Shams:</strong>
            <p className="text-gray-600 leading-relaxed mb-2">
              • <strong>Lowest Baseline Entry Cost:</strong> With zero-visa trade licenses starting around AED 5,750, Shams offers the most affordable gateway to establishing a legal corporate tax residency anchor in the UAE.
              <br /><br />
              • <strong>Fast E-License Delivery:</strong> Trade licenses are delivered electronically within 3 business days via remote application.
            </p>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="corporate-tax-banking" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Corporate Tax (Cabinet Decision 55) & Banking Approval Strategy
          </h2>
          <p>
            Entities registered in IFZA, Meydan, or Shams are fully subject to the UAE Corporate Tax framework under Federal Decree-Law No. 47 of 2022.
          </p>
          <p>
            Under <strong>Cabinet Decision No. 55 of 2023</strong>, companies in all three Freezones can maintain a <strong>0% Corporate Tax rate</strong> on Qualifying Income derived from foreign clients outside the UAE or transactions with other Freezone persons.
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Building2 size={18} />
              Wio Business Corporate Banking Strategy:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              To secure rapid account activation with Wio Business or Mashreq NEOBiz across IFZA, Meydan, or Shams, submit: (1) Primary owner Emirates ID, (2) Certified E-License & MOA, and (3) Proof of business background (3 months personal bank statements or active client contracts).
            </p>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="remote-workflow" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Step-by-Step 100% Remote Incorporation & Visa Workflow
          </h2>
          <p>
            The execution sequence for incorporating in IFZA, Meydan, or Shams follows a structured 5-step timeline:
          </p>
          
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 1: Activity Selection & Name Approval (Days 1–2)</strong>
              <p className="text-xs text-gray-600">Select business activity codes and submit passport copies for name reservation and security clearance.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 2: Electronic Trade License & MOA Delivery (Days 3–5)</strong>
              <p className="text-xs text-gray-600">Receive your digital Trade License, Flexi-Desk agreement, and MOA via email 100% remotely.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 3: Establishment Card & Entry Permit Generation (Days 6–8)</strong>
              <p className="text-xs text-gray-600">Issue the Ministry of Interior Establishment Card and generate the electronic 60-day visa entry permit.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 4: Travel to Dubai for Medical & Biometrics (Days 9–12)</strong>
              <p className="text-xs text-gray-600">Complete DHA medical fitness screening and ICP Emirates ID thumbprint biometrics in Dubai.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 5: 2-Year Visa Stamping & Bank Activation (Days 13–15)</strong>
              <p className="text-xs text-gray-600">Receive your physical Emirates ID and activate your multi-currency Wio Business bank account.</p>
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
            UAE FREEZONE COMPARISON SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Set Up Your UAE Freezone Entity with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            IFZA, Meydan, and Shams license registration, 2-year UAE investor visas, Emirates ID processing, and Wio corporate banking handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Freezone Setup Package
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
