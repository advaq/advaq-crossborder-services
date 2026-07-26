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
  {
    q: "Should I register a Word Mark or a Logo Mark?",
    a: "A Word Mark provides the broadest legal protection because it protects the brand name itself regardless of visual design or logo updates. If budget permits, registering both a Word Mark and a Logo Mark is recommended.",
  },
  {
    q: "How does a UKIPO trademark help with Amazon Brand Registry?",
    a: "Amazon Brand Registry UK requires an active registered trademark (or pending application) with the UKIPO. Registration grants A+ content, Brand Store creation, and automated IP infringement enforcement on Amazon.",
  },
  {
    q: "What happens if someone opposes my UKIPO trademark application?",
    a: "If a third party files an opposition during the 2-month publication period, you have the option to negotiate a co-existence agreement, modify your class specification, or defend the application with legal submissions.",
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
    "Exhaustive 2026 UKIPO trademark registration guide for overseas founders. Learn NICE class classification, Companies House vs Trademark protection, fees, and application steps.",
  author: { "@type": "Organization", name: "ADVAQ UK Corporate Advisory Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/register-trademark-ukipo-guide",
};

export const Route = createFileRoute("/blog/register-trademark-ukipo-guide")({
  head: () => ({
    meta: [
      { title: "How to Protect Brand Name with UKIPO Trademark (2026 Masterclass) | ADVAQ" },
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
            An exhaustive legal trademark masterclass for non-resident directors on protecting brand names, logos, and slogans with the UK Intellectual Property Office (UKIPO) in 2026.
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
          <p className="text-sm sm:text-[15px] text-navy-100 leading-relaxed mb-4">
            Essential intellectual property principles for foreign entrepreneurs:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-white/10">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Companies House vs UKIPO</strong>
              <p className="text-navy-100 leading-relaxed">
                Company registration at Companies House does NOT protect your brand name or logo. Only a UKIPO registered trademark provides exclusive legal monopoly rights.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">10-Year Protection</strong>
              <p className="text-navy-100 leading-relaxed">
                A registered UK trademark is valid for 10 years and renewable indefinitely across the UK.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">NICE Classification</strong>
              <p className="text-navy-100 leading-relaxed">
                Goods and services are categorized into 45 international NICE classes (e.g. Class 9 for software/SaaS, Class 35 for e-commerce).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Amazon Brand Registry</strong>
              <p className="text-navy-100 leading-relaxed">
                A UKIPO registered trademark allows instant enrollment in Amazon Brand Registry UK.
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
            <li><a href="#companies-house-vs-ukipo" className="hover:text-gold-600 underline">1. Companies House vs UKIPO: The Misconception</a></li>
            <li><a href="#benefits" className="hover:text-gold-600 underline">2. Why Non-Resident Founders Need UK Trademark Protection</a></li>
            <li><a href="#nice-classes" className="hover:text-gold-600 underline">3. Understanding NICE Trademark Classes (1 to 45)</a></li>
            <li><a href="#trademark-matrix" className="hover:text-gold-600 underline">4. Comprehensive Trademark Registration & Protection Matrix</a></li>
            <li><a href="#application-steps" className="hover:text-gold-600 underline">5. Step-by-Step UKIPO Trademark Application Process</a></li>
            <li><a href="#common-mistakes" className="hover:text-gold-600 underline">6. 6 Critical Common Trademark Mistakes to Avoid</a></li>
            <li><a href="#costs-timeline" className="hover:text-gold-600 underline">7. Official UKIPO Fees & 3-4 Month Timeline</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="companies-house-vs-ukipo" className="space-y-4 mb-14">
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

          <div className="bg-navy-950/5 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
              <Briefcase className="text-gold-600" size={18} />
              Real-World Founder Scenario: Amazon Brand Protection
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Consider Danish, an e-commerce brand owner in Pakistan selling kitchenware on Amazon UK. When a Chinese seller copied Danish's brand name and listings, Danish applied for a UKIPO trademark via ADVAQ. Within 48 hours of filing, ADVAQ enrolled his UKIPO application in Amazon Brand Registry, successfully removing the unauthorized hijacker listings.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="benefits" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Why Non-Resident Founders Need UK Trademark Protection
          </h2>
          <p>
            Securing an official UKIPO trademark provides critical commercial benefits:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-gold-600 text-base mb-1 flex items-center gap-2">
                <Lock className="text-gold-600" size={18} />
                Legal Monopoly & Enforceability
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Grants exclusive right to use the ® symbol in the UK and take legal action against infringers using confusingly similar names.
              </p>
            </div>

            <div className="border border-border p-5 rounded-2xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-base mb-1 flex items-center gap-2">
                <Award className="text-navy-950" size={18} />
                Amazon Brand Registry UK
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Unlocks Amazon Brand Registry UK protection, preventing hijackers from piggybacking on your e-commerce product listings.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="nice-classes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Understanding NICE Trademark Classes (1 to 45)
          </h2>
          <p>
            Trademarks are filed under the international <strong>NICE Classification System</strong>, which divides products and services into 45 distinct classes (34 goods classes, 11 service classes):
          </p>

          <div className="bg-off-white p-6 rounded-2xl border border-border space-y-4 my-6">
            <h4 className="font-bold text-navy-950 text-base flex items-center gap-2">
              <Award className="text-gold-600" size={20} />
              Popular Classes for Tech & E-Commerce:
            </h4>
            <ul className="space-y-3 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span><strong>Class 9:</strong> Software applications, mobile apps, SaaS platforms, downloadable media.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span><strong>Class 35:</strong> E-commerce retail, online advertising, business management.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-gold-600 shrink-0" size={16} />
                <span><strong>Class 42:</strong> Software engineering, IT consultancy, web development services.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="trademark-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Comprehensive Trademark Registration & Protection Matrix
          </h2>
          <p>
            Side-by-side legal comparison of brand protection mechanisms in the UK:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Protection Mechanism</th>
                  <th className="p-4 text-gold-500">Exclusive Brand Rights</th>
                  <th className="p-4 text-emerald-400">Amazon Brand Registry</th>
                  <th className="p-4">Protection Duration</th>
                  <th className="p-4">Infringement Remedies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">UKIPO Registered Trademark</td>
                  <td className="p-4 text-emerald-700 font-bold">100% Exclusive UK Monopoly</td>
                  <td className="p-4 text-emerald-700 font-bold">Eligible (Full Access)</td>
                  <td className="p-4 text-emerald-700 font-bold">10 Years (Renewable Indefinitely)</td>
                  <td className="p-4 text-emerald-700 font-bold">High (Injunctions & Damages)</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Companies House Company Name</td>
                  <td className="p-4 text-rose-700 font-bold">Entity Name Only (No Brand Rights)</td>
                  <td className="p-4 text-rose-700 font-bold">Not Eligible</td>
                  <td className="p-4 text-navy-900">Life of Company</td>
                  <td className="p-4 text-rose-700 font-bold">Zero Brand Protection</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Domain Name (.co.uk / .com)</td>
                  <td className="p-4 text-rose-700 font-bold">URL Rights Only</td>
                  <td className="p-4 text-rose-700 font-bold">Not Eligible</td>
                  <td className="p-4 text-navy-900">Annual Renewal</td>
                  <td className="p-4 text-rose-700 font-bold">Zero Brand Monopoly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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

        {/* SECTION 5 */}
        <div id="application-steps" className="space-y-6 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Step-by-Step UKIPO Trademark Application Process
          </h2>

          <div className="space-y-4 my-6">
            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Conduct UKIPO Clearance Search</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Search the official UKIPO database to ensure no identical or similar trademarks already exist in your target classes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Draft NICE Specification & File Application</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Define your exact goods and services wording and submit Form TM3 online to UKIPO with the £170 fee.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">UKIPO Examination & Publication</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  UKIPO examiners review the application for distinctiveness. Once passed, it is published in the Trade Marks Journal for a 2-month public opposition period.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 border border-border rounded-2xl bg-white shadow-sm">
              <div className="w-8 h-8 rounded-full bg-navy-950 text-gold-500 font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-base">Receive Registration Certificate</h4>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  If no opposition is filed, UKIPO issues your official Trademark Registration Certificate valid for 10 years.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
        <div id="common-mistakes" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 6 Critical Common Trademark Mistakes to Avoid
          </h2>
          <p>
            Avoid these six frequent trademark application errors:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                1. Assuming Companies House Incorporation Provides Trademark Rights
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                Incorporating at Companies House only reserves your company name on the corporate index—it does not prevent brand name infringement.
              </p>
            </div>

            <div className="p-5 border border-red-200 bg-red-50/40 rounded-2xl">
              <h4 className="font-bold text-red-900 text-sm flex items-center gap-2 mb-1">
                <AlertTriangle className="text-red-600" size={18} />
                2. Filing Descriptive or Non-Distinctive Names
              </h4>
              <p className="text-xs text-red-800 leading-relaxed">
                UKIPO rejects generic brand names (e.g. "Best Online Software") that lack inherent distinctiveness.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="costs-timeline" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Official UKIPO Fees & 3-4 Month Timeline
          </h2>
          <p>
            Official UKIPO online application fees:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 my-4 pl-2">
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> <strong>First Class:</strong> £170</li>
            <li className="flex items-center gap-2"><Check className="text-gold-600 shrink-0" size={16} /> <strong>Each Additional Class:</strong> £50</li>
          </ul>
          <p className="text-sm text-gray-600">
            The entire process takes 3 to 4 months from initial filing to registration certificate issuance.
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
