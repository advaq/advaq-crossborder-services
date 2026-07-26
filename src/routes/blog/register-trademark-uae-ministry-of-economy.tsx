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
  Bookmark,
  Award,
  Lock,
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
    q: "Why should I register a trademark with the UAE Ministry of Economy (MOEC)?",
    a: "Registering your brand name, logo, or slogan with the Ministry of Economy (MOEC) under Federal Law No. 36 of 2021 grants legal monopoly ownership across all 7 UAE Emirates, protects against counterfeiters, and secures intellectual property assets for future corporate valuation.",
  },
  {
    q: "How long is a registered UAE Trademark valid for?",
    a: "A UAE trademark registration certificate is valid for 10 years from the filing date and can be renewed indefinitely for consecutive 10-year terms upon payment of renewal fees.",
  },
  {
    q: "Can a foreign company or non-resident register a trademark in the UAE?",
    a: "Yes! Foreign corporate entities and non-resident brand owners can register trademarks in the UAE through an accredited UAE trademark agent like ADVAQ without needing a physical local company license.",
  },
  {
    q: "What is the total cost of registering a trademark in the UAE?",
    a: "Official Ministry of Economy (MOEC) government fees for trademark clearance search, filing, legal examination, publication in the Official Trademark Bulletin, and final 10-year certificate issuance total approximately AED 6,500 to AED 8,500 per class.",
  },
  {
    q: "How long does the UAE trademark registration process take?",
    a: "The complete trademark registration process takes approximately 3 to 4 months, which includes a mandatory 30-day public opposition gazette window.",
  },
  {
    q: "Can I register a trademark for multiple classes under one application?",
    a: "The UAE follows a single-class filing system per application. If your business operates across multiple product or service categories (e.g. Class 35 for E-Commerce and Class 42 for Software), separate trademark applications must be submitted for each Nice Classification class.",
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
  headline: "How to Register a Trademark with the UAE Ministry of Economy (MOEC)",
  description:
    "Complete 2026 trademark filing masterclass guide for brand owners in the UAE. Learn Ministry of Economy (MOEC) class searches, application steps, public opposition periods, and 10-year protection rules.",
  author: { "@type": "Organization", name: "ADVAQ UAE IP & Trademark Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/register-trademark-uae-ministry-of-economy",
};

export const Route = createFileRoute("/blog/register-trademark-uae-ministry-of-economy")({
  head: () => ({
    meta: [
      { title: "Register Trademark UAE Ministry of Economy Guide (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "How to register a trademark with the UAE Ministry of Economy (MOEC). Nice classification search, government fees, 30-day opposition & 10-year brand protection.",
      },
      {
        name: "keywords",
        content:
          "register trademark uae ministry of economy, moec trademark search fee dubai, uae brand name logo protection 10 year certificate, foreign company trademark agent dubai",
      },
      {
        property: "og:title",
        content: "How to Register a Trademark with the UAE Ministry of Economy (MOEC)",
      },
      {
        property: "og:description",
        content:
          "Master the step-by-step trademark registration process in the UAE to protect your brand identity, logo, and digital intellectual property.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/register-trademark-uae-ministry-of-economy" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/register-trademark-uae-ministry-of-economy" }],
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
            How to Register a Trademark with the UAE Ministry of Economy (MOEC)
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A practical intellectual property masterclass for founders, SaaS companies, and international brands on securing 10-year exclusive trademark protection across all 7 UAE Emirates under Federal Law No. 36 of 2021.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ UAE IP & Trademark Advisory Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>15 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Federal Law No. 36 of 2021 Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>UAE Trademark Filing Essentials</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Governing Body</strong>
              <p className="text-navy-100 leading-relaxed">
                UAE Ministry of Economy (MOEC) Intellectual Property Sector grants official federal protection.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">10-Year Exclusive Rights</strong>
              <p className="text-navy-100 leading-relaxed">
                Legal monopoly ownership over brand name, logo, or slogan across all 7 UAE Emirates.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Nice Classification System</strong>
              <p className="text-navy-100 leading-relaxed">
                Categorized under international Nice Classes (Goods 1–34 vs Services 35–45).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">30-Day Opposition Period</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory public gazette notice prior to final trademark registration certificate issuance.
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
            <li><a href="#why-register" className="hover:text-gold-600 underline">1. Why Register a Trademark in the UAE?</a></li>
            <li><a href="#nice-classification" className="hover:text-gold-600 underline">2. Pre-Filing MOEC Trademark Search & Nice Classification</a></li>
            <li><a href="#trademark-matrix" className="hover:text-gold-600 underline">3. Comprehensive UAE Trademark Registration Stages Matrix</a></li>
            <li><a href="#step-by-step-workflow" className="hover:text-gold-600 underline">4. Step-by-Step MOEC Trademark Application Workflow</a></li>
            <li><a href="#fees-and-expansion" className="hover:text-gold-600 underline">5. Government Fee Structure & Madrid Protocol International Expansion</a></li>
            <li><a href="#brand-enforcement" className="hover:text-gold-600 underline">6. Brand Enforcement & Customs Protection</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-register" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Register a Trademark in the UAE?
          </h2>
          <p>
            Enacted under <strong>Federal Law No. 36 of 2021 on Trademarks</strong>, registering your brand name, logo, or slogan with the UAE Ministry of Economy (MOEC) establishes nationwide legal monopoly ownership across Dubai, Abu Dhabi, Sharjah, and all Northern Emirates.
          </p>
          <p>
            In a fast-growing commercial hub like Dubai, holding a registered trademark prevents competitors from registering confusingly similar business names, protects against counterfeit goods, and builds valuable corporate equity for international M&A transactions.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="nice-classification" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Pre-Filing MOEC Trademark Search & Nice Classification
          </h2>
          <p>
            The UAE uses the international <strong>Nice Classification system</strong>, dividing trademarks into 45 classes (Goods 1–34 and Services 35–45).
          </p>
          <p>
            Common target classes for modern startups include:
          </p>
          <ul className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Class 42:</strong> Software development, SaaS applications, and IT consulting services.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Class 35:</strong> Advertising, e-commerce retail platforms, and business management services.</span>
            </li>
          </ul>
          <p>
            Before filing, an official clearance search in the MOEC trademark database must be performed to confirm that no identical or conflicting mark is currently registered.
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UAE TRADEMARK REGISTRATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Protect Your Brand Name in the UAE with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts MOEC trademark clearance searches, drafts class specifications, files applications, handles gazette publications, and delivers your 10-year certificate.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Trademark Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="trademark-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Comprehensive UAE Trademark Registration Stages Matrix
          </h2>
          <p>
            Detailed side-by-side breakdown of the trademark registration workflow:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Workflow Stage</th>
                  <th className="p-4 text-gold-500">Responsible Authority</th>
                  <th className="p-4 text-emerald-400">Key Deliverables & Outputs</th>
                  <th className="p-4">Estimated Stage Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Stage 1: Pre-Filing Search</td>
                  <td className="p-4 text-navy-900">MOEC Legal IP Database</td>
                  <td className="p-4 text-emerald-700 font-bold">Clearance Search Report</td>
                  <td className="p-4 text-navy-900">24 to 48 Hours</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Stage 2: Application Filing</td>
                  <td className="p-4 text-navy-900">MOEC Digital Portal</td>
                  <td className="p-4 text-emerald-700 font-bold">Filing Receipt & App Number</td>
                  <td className="p-4 text-navy-900">1 Business Day</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Stage 3: Substantive Examination</td>
                  <td className="p-4 text-navy-900">MOEC Trademark Examiner</td>
                  <td className="p-4 text-emerald-700 font-bold">Formal Acceptance Decision</td>
                  <td className="p-4 text-navy-900">30 to 45 Days</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Stage 4: Gazette Publication</td>
                  <td className="p-4 text-navy-900">Official Trademark Bulletin</td>
                  <td className="p-4 text-emerald-700 font-bold">30-Day Public Opposition Window</td>
                  <td className="p-4 text-navy-900">30 Days Fixed</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Stage 5: Certificate Issuance</td>
                  <td className="p-4 text-navy-900">Ministry of Economy (MOEC)</td>
                  <td className="p-4 text-emerald-700 font-bold">Official 10-Year Certificate</td>
                  <td className="p-4 text-navy-900">5 to 7 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="step-by-step-workflow" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step MOEC Trademark Application Workflow
          </h2>
          <p>
            The trademark filing procedure follows a 5-step legal sequence:
          </p>

          <ol className="space-y-3 text-sm pl-2 my-4">
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 1: Clearance Search:</strong> Verify brand name and logo availability across target Nice classes.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 2: Portal Submission:</strong> Upload brand logo image (JPEG/PNG), trade license, and applicant passport copy.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 3: Legal Examination:</strong> MOEC examiners check for compliance with public order and existing marks.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 4: Public Opposition Gazette:</strong> Publish mark in the Official Bulletin for a 30-day public objection period.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Step 5: Certificate Delivery:</strong> Pay final registration fees and download the digital 10-Year Trademark Certificate.</span>
            </li>
          </ol>
        </div>

        {/* SECTION 5 */}
        <div id="fees-and-expansion" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Government Fee Structure & Madrid Protocol International Expansion
          </h2>
          <p>
            Official MOEC government fees (application fee, publication fee, and final registration certificate issuance) total approximately <strong>AED 6,500 to AED 8,500</strong> per class.
          </p>
          <p>
            Once filed in the UAE, brand owners can leverage their UAE national application as an origin base to extend international trademark protection across 130+ member countries via the <strong>WIPO Madrid Protocol</strong> system.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="brand-enforcement" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Brand Enforcement & Customs Protection
          </h2>
          <p>
            Holding a registered MOEC trademark certificate enables brand owners to register their mark with Dubai Customs (IP Rights Department).
          </p>
          <p>
            Dubai Customs monitors sea and air cargo ports, seizing counterfeit shipments bearing your trademarked logo before they enter the UAE market.
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
            UAE INTELLECTUAL PROPERTY SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your UAE Trademark Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            MOEC clearance search, class filing, trademark bulletin publication, and 10-year certificate delivery handled by ADVAQ.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uae-services/freezone-company-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Trademark Registration
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
