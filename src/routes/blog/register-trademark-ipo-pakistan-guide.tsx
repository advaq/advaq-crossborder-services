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
  Award,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What is IPO Pakistan and why should I register my trademark?",
    a: "IPO (Intellectual Property Organization of Pakistan) is the federal government agency regulating trademarks, patents, and copyrights. Registering a trademark gives you exclusive legal rights to your brand name, logo, or tagline in Pakistan for 10 years.",
  },
  {
    q: "How long does it take to register a trademark in Pakistan with IPO?",
    a: "Trademark registration in Pakistan typically takes 12 to 18 months, covering trademark search, TM-1 application filing, examination report, Trademark Journal publication, and certificate issuance.",
  },
  {
    q: "Can I use the ® registered symbol while my trademark application is pending?",
    a: "No. You can use the ™ symbol once your TM-1 application is filed and assigned an application number. You can only legally use the ® registered symbol after the official Registration Certificate is issued.",
  },
  {
    q: "What documents are required to file a trademark application with IPO Pakistan?",
    a: "You need: (1) High-resolution logo/brand image, (2) Applicant details (CNIC/NTN for individuals or SECP Certificate for companies), (3) Nice Classification of Goods/Services (Classes 1 to 45), and (4) Form TM-48 (Power of Attorney for attorney representation).",
  },
  {
    q: "How long is a trademark registration valid for in Pakistan?",
    a: "A trademark registration certificate in Pakistan is valid for 10 years from the date of filing and can be renewed indefinitely every 10 years.",
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
  headline: "How to Register a Trademark & Brand Name in Pakistan with IPO Pakistan",
  description:
    "Complete 2026 trademark registration guide for Pakistani businesses & software houses with IPO Pakistan. Learn trademark search, TM-1 filing, Nice classes (Class 9/42), Trademark Journal publication, and certificate issuance.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://advaq.com/blog/register-trademark-ipo-pakistan-guide",
};

export const Route = createFileRoute("/blog/register-trademark-ipo-pakistan-guide")({
  head: () => ({
    meta: [
      { title: "Register Trademark Brand Name IPO Pakistan Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "How to register a trademark & logo in Pakistan with IPO Pakistan. Learn TM-1 filing, trademark search, Nice Classification (Class 9/42), & Journal publication.",
      },
      {
        name: "keywords",
        content:
          "register trademark ipo pakistan guide, ipo pakistan tm-1 application filing fee, trademark search trademark journal publication, logo brand name protection pakistan",
      },
      {
        property: "og:title",
        content: "How to Register a Trademark & Brand Name in Pakistan with IPO Pakistan",
      },
      {
        property: "og:description",
        content:
          "Protect your brand name, logo, and software IP in Pakistan with official IPO trademark registration.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/register-trademark-ipo-pakistan-guide" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/register-trademark-ipo-pakistan-guide" }],
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
            How to Register a Trademark & Brand Name in Pakistan with IPO Pakistan
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A comprehensive intellectual property guide for Pakistani startups, software houses, and retail brands on protecting brand names, logos, and SaaS trademarks through the Intellectual Property Organization of Pakistan (IPO).
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ IP & Trademark Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>8 Min Read · Published July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>IPO Pakistan Trademarks Ordinance 2001</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Trademark Registration Milestones</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-[15px] text-navy-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Pre-Filing Availability Search:</strong> Search IPO database to ensure no conflicting registered trademarks exist.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Form TM-1 Filing:</strong> Official application submission securing filing date and ™ symbol rights.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>Trademark Journal Publication:</strong> 2-month public notice period allowing third-party oppositions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold-500 font-bold">•</span>
              <span><strong>10-Year Protection Certificate:</strong> Grants exclusive legal ownership and ® registered symbol rights.</span>
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
            <li><a href="#why-register-trademark" className="hover:text-gold-600 underline">1. Why Register Your Trademark with IPO Pakistan?</a></li>
            <li><a href="#nice-classification" className="hover:text-gold-600 underline">2. Selecting Nice Trademark Classes (Class 9 & 42 for Tech)</a></li>
            <li><a href="#trademark-search" className="hover:text-gold-600 underline">3. Conducting an Official IPO Trademark Search</a></li>
            <li><a href="#tm-1-filing-steps" className="hover:text-gold-600 underline">4. Step-by-Step TM-1 Application Filing Workflow</a></li>
            <li><a href="#journal-to-certificate" className="hover:text-gold-600 underline">5. Examination, Journal Publication & Certificate Issuance</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">6. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-register-trademark" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Register Your Trademark with IPO Pakistan?
          </h2>
          <p>
            Operating under the Ministry of Commerce, <strong>IPO Pakistan (Intellectual Property Organization)</strong> grants exclusive legal ownership over brand names, logos, slogans, and product names under the Trademarks Ordinance 2001.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="nice-classification" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Selecting Nice Trademark Classes (Class 9 & 42 for Tech)
          </h2>
          <p>
            Trademarks are classified into 45 international Nice Classes. Software houses and IT agencies typically register under <strong>Class 9</strong> (Software Products) and <strong>Class 42</strong> (Software Consulting & SaaS).
          </p>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-10 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            IPO PAKISTAN TRADEMARK SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Register Your Brand Trademark with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ conducts IPO trademark searches, files TM-1 applications, responds to examination objections, and secures your 10-year Registration Certificate.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/pakistan-services/trademark-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Trademark Registration <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="trademark-search" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Conducting an Official IPO Trademark Search
          </h2>
          <p>
            Before filing Form TM-1, conduct an official trademark search at the Trademark Registry (TMR) in Karachi, Lahore, or Islamabad to ensure your mark is distinctive and non-infringing.
          </p>
        </div>

        {/* SECTION 4 */}
        <div id="tm-1-filing-steps" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Step-by-Step TM-1 Application Filing Workflow
          </h2>
          <ol className="list-none space-y-2 text-sm text-gray-700 ml-2">
            <li>Prepare TM-1 form detailing applicant name, address, logo, and class.</li>
            <li>Attach Form TM-48 (Power of Attorney) if represented by a legal advocate.</li>
            <li>Submit to IPO registry and pay statutory application fee.</li>
            <li>Receive official TM application number and start using ™ mark.</li>
          </ol>
        </div>

        {/* SECTION 5 */}
        <div id="journal-to-certificate" className="space-y-4 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Examination, Journal Publication & Certificate Issuance
          </h2>
          <p>
            Following examination, the trademark is published in the monthly Trademark Journal. If no opposition is filed within 2 months, the official 10-year Registration Certificate is issued.
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
            PAKISTAN TRADEMARK & BRAND SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Protect Your Brand Name in Pakistan
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            IPO trademark search, TM-1 application filing, examination objection responses, and 10-year registration certificate issuance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pakistan-services/trademark-registration"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Trademark Registration Package
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
