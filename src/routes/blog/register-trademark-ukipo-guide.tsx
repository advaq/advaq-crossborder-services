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
  Award,
  Globe2,
  Lock,
} from "lucide-react";

const faqs = [
  {
    q: "Does registering a company name at Companies House automatically protect my brand trademark?",
    a: "No. Registering a Limited Company at Companies House only prevents another entity from incorporating under the exact same legal name. It does NOT grant trademark rights or prevent competitors from using your brand name for commercial goods and services.",
  },
  {
    q: "What is the UK Intellectual Property Office (UKIPO) trademark registration fee?",
    a: "The UKIPO charges an official online application fee of £170 for one trade mark class, plus £50 for each additional class.",
  },
  {
    q: "How long does a UKIPO trademark registration take?",
    a: "A standard UKIPO trademark registration takes approximately 3 to 4 months from application date, assuming no oppositions are filed during the 2-month public examination period.",
  },
  {
    q: "Can a non-UK resident register a trademark with UKIPO?",
    a: "Yes. Non-resident business owners can apply for UKIPO trademarks. However, UKIPO requires an address for service in the UK or Channel Islands for official legal communications.",
  },
  {
    q: "How long does a UK trademark protection last?",
    a: "A registered UK trademark lasts for 10 years from the filing date and can be renewed indefinitely every 10 years.",
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
  headline: "How to Protect Your Brand Name with UKIPO Trademark Registration",
  description:
    "Complete 2026 UKIPO trademark registration guide for overseas founders. Learn NICE class classification, Companies House vs Trademark protection, fees, and application steps.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/register-trademark-ukipo-guide",
};

export const Route = createFileRoute("/blog/register-trademark-ukipo-guide")({
  head: () => ({
    meta: [
      { title: "How to Protect Brand Name with UKIPO Trademark (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Complete guide for overseas entrepreneurs to register a UK trademark with UKIPO. NICE classes, Companies House vs UKIPO rules & £170 official fees.",
      },
      {
        name: "keywords",
        content:
          "register trademark ukipo guide, uk trademark registration non resident, protect brand name uk company, ukipo trade mark classes nice classification",
      },
      {
        property: "og:title",
        content: "How to Protect Your Brand Name with UKIPO Trademark Registration",
      },
      {
        property: "og:description",
        content:
          "Learn how non-resident UK LTD owners protect logos, brand names, and slogans using official UKIPO trademark registration.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/register-trademark-ukipo-guide" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/register-trademark-ukipo-guide" }],
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
            How to Protect Your Brand Name with UKIPO Trademark Registration
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive legal trademark guide for non-resident directors on protecting brand names, logos, and slogans with the UK Intellectual Property Office (UKIPO).
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Legal Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>UKIPO Official Registration Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Trademark Registration Key Facts</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Companies House vs UKIPO:</strong> Company registration at Companies House does NOT protect your brand name or logo. Only a UKIPO registered trademark provides exclusive legal monopoly rights.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>10-Year Protection:</strong> A registered UK trademark is valid for 10 years and renewable indefinitely across the UK.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>NICE Classification:</strong> Goods and services are categorized into 45 international NICE classes (e.g. Class 9 for software/SaaS, Class 35 for e-commerce).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Amazon Brand Registry:</strong> A UKIPO registered trademark allows instant enrollment in Amazon Brand Registry UK.</span>
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
            <li><a href="#companies-house-vs-ukipo" className="hover:text-gold-600 underline">1. Companies House vs UKIPO: The Misconception</a></li>
            <li><a href="#benefits" className="hover:text-gold-600 underline">2. Why Non-Resident Founders Need UK Trademark Protection</a></li>
            <li><a href="#nice-classes" className="hover:text-gold-600 underline">3. Understanding NICE Trademark Classes (1 to 45)</a></li>
            <li><a href="#application-steps" className="hover:text-gold-600 underline">4. Step-by-Step UKIPO Trademark Application Process</a></li>
            <li><a href="#costs-timeline" className="hover:text-gold-600 underline">5. Official UKIPO Fees & 3-4 Month Timeline</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="companies-house-vs-ukipo" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Companies House vs UKIPO: The Misconception
          </h2>
          <p>
            Many overseas entrepreneurs assume that incorporating a UK Limited Company named (for example) <em>"Apex Software Solutions LTD"</em> automatically gives them exclusive ownership of the brand name <em>"Apex"</em>.
          </p>
          <p>
            <strong>This is a dangerous legal misconception.</strong>
          </p>
          <p>
            Companies House only registers corporate entity names to prevent two UK companies from sharing an identical legal name. It does <strong>not</strong> grant trademark rights. A competitor could register <em>"Apex"</em> as a trademark with the <strong>UK Intellectual Property Office (UKIPO)</strong> and force you to rebrand your business.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="benefits" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Why Non-Resident Founders Need UK Trademark Protection
          </h2>
          <p>
            Securing an official UKIPO trademark provides critical commercial benefits:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gold-500 font-semibold text-base mb-2">
                <Lock size={20} />
                <span>Legal Monopoly & Enforceability</span>
              </div>
              <p className="text-sm text-gray-600">
                Grants exclusive right to use the ® symbol in the UK and take legal action against infringers using confusingly similar names.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <div className="flex items-center gap-3 text-navy-700 font-semibold text-base mb-2">
                <Award size={20} />
                <span>Amazon Brand Registry</span>
              </div>
              <p className="text-sm text-gray-600">
                Unlocks Amazon Brand Registry UK protection, preventing hijackers from piggybacking on your e-commerce product listings.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="nice-classes" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Understanding NICE Trademark Classes (1 to 45)
          </h2>
          <p>
            Trademarks are filed under the international <strong>NICE Classification System</strong>, which divides products and services into 45 distinct classes (34 goods classes, 11 service classes).
          </p>

          <div className="bg-off-white p-6 rounded-xl border border-border space-y-3 my-4">
            <h4 className="font-bold text-navy-900 text-base">Popular Classes for Tech & E-Commerce:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Class 9:</strong> Software applications, mobile apps, SaaS platforms, downloadable media.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Class 35:</strong> E-commerce retail, online advertising, business management.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-500 shrink-0" size={16} />
                <span><strong>Class 42:</strong> Software engineering, IT consultancy, web development services.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            UK TRADEMARK REGISTRATION SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Protect Your Brand Name with UKIPO & ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts UKIPO clearance searches, prepares NICE class specifications, and files official trademark applications for non-resident directors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order UK Trademark & Formation Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="application-steps" className="space-y-6 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step UKIPO Trademark Application Process
          </h2>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Conduct UKIPO Clearance Search</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Search the official UKIPO database to ensure no identical or similar trademarks already exist in your target classes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Draft NICE Specification & File Application</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Define your exact goods and services wording and submit Form TM3 online to UKIPO with the £170 fee.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">UKIPO Examination & Publication</h4>
                <p className="text-xs text-gray-600 mt-1">
                  UKIPO examiners review the application for distinctiveness. Once passed, it is published in the Trade Marks Journal for a 2-month public opposition period.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border border-border rounded-xl bg-white">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-navy-900 text-sm">Receive Registration Certificate</h4>
                <p className="text-xs text-gray-600 mt-1">
                  If no opposition is filed, UKIPO issues your official Trademark Registration Certificate valid for 10 years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="costs-timeline" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Official UKIPO Fees & 3-4 Month Timeline
          </h2>
          <p>
            Official UKIPO online application fees:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 ml-2">
            <li><strong>First Class:</strong> £170</li>
            <li><strong>Each Additional Class:</strong> £50</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            The entire process takes 3 to 4 months from initial filing to registration certificate issuance.
          </p>
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
            UK TRADEMARK PROTECTION
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Register Your UK Trademark with ADVAQ
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Comprehensive UKIPO clearance searches, NICE class drafting, application filing, and 10-year brand protection.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/uk-services/ltd-formation"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order UK Trademark Registration
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
