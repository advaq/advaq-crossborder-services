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
  Coins,
  Scale,
  FileText,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is IPO Pakistan and why should I register my trademark?",
    a: "IPO (Intellectual Property Organization of Pakistan) is the federal government agency regulating trademarks, patents, and copyrights under the Trademarks Ordinance 2001. Registering a trademark gives you exclusive legal rights to your brand name, logo, or tagline across Pakistan for 10 years.",
  },
  {
    q: "How long does it take to register a trademark in Pakistan with IPO?",
    a: "Trademark registration in Pakistan typically takes 12 to 18 months, covering trademark search, Form TM-1 application filing, examination report, Trademark Journal publication, and certificate issuance.",
  },
  {
    q: "Can I use the ® registered symbol while my trademark application is pending?",
    a: "No! You can use the ™ symbol once your Form TM-1 application is filed and assigned an official application number. You can only legally use the ® registered symbol after the official 10-year Registration Certificate is issued.",
  },
  {
    q: "What documents are required to file a trademark application with IPO Pakistan?",
    a: "You need: (1) High-resolution logo/brand image, (2) Applicant details (CNIC/NTN for individuals or SECP Certificate for companies), (3) Nice Classification of Goods/Services (Classes 1 to 45), and (4) Form TM-48 (Power of Attorney for advocate representation).",
  },
  {
    q: "How long is a trademark registration valid for in Pakistan?",
    a: "A trademark registration certificate in Pakistan is valid for 10 years from the date of filing and can be renewed indefinitely for 10-year periods upon payment of renewal fees.",
  },
  {
    q: "What Nice Classes should software houses and tech startups select?",
    a: "Tech startups and software houses typically register under Class 9 (Software products, mobile apps), Class 42 (SaaS, custom web development, IT consulting), and Class 35 (E-commerce, digital marketing services).",
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
    "Complete 2026 trademark registration masterclass for Pakistani businesses & software houses with IPO Pakistan. Detailed guide on trademark search, TM-1 filing, Nice classes (Class 9/42), Trademark Journal publication, opposition defense, and 10-year certificate issuance.",
  author: { "@type": "Organization", name: "ADVAQ Pakistan IP & Trademark Team" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/register-trademark-ipo-pakistan-guide",
};

export const Route = createFileRoute("/blog/register-trademark-ipo-pakistan-guide")({
  head: () => ({
    meta: [
      { title: "Register Trademark Brand Name IPO Pakistan Guide (2026 Masterclass) | ADVAQ" },
      {
        name: "description",
        content:
          "How to register a trademark & logo in Pakistan with IPO Pakistan. Learn TM-1 filing, trademark search, Nice Classification (Class 9/42), & Journal publication.",
      },
      {
        name: "keywords",
        content:
          "register trademark ipo pakistan guide, ipo pakistan tm-1 application filing fee, trademark search trademark journal publication, logo brand name protection pakistan, nice classification class 9 class 42 software",
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
            An exhaustive intellectual property masterclass for Pakistani startups, software houses, e-commerce stores, and corporate brands on securing brand names, logos, and SaaS trademarks through the Intellectual Property Organization of Pakistan (IPO).
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>ADVAQ Pakistan IP & Trademark Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
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
            <span>Trademark Registration Key Milestones</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Official Search Report</strong>
              <p className="text-navy-100 leading-relaxed">
                Conduct pre-filing IPO database search (Form TM-55) to verify name availability and avoid objections.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Form TM-1 Application</strong>
              <p className="text-navy-100 leading-relaxed">
                Official application submission establishing filing priority date and immediate ™ symbol usage rights.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">Trademark Journal Notice</strong>
              <p className="text-navy-100 leading-relaxed">
                2-month public notice period in the official IPO Trademark Journal for third-party opposition review.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 font-serif text-sm mb-1">10-Year Protection Certificate</strong>
              <p className="text-navy-100 leading-relaxed">
                Grants exclusive statutory brand ownership across Pakistan and authorization to use the ® registered mark.
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
            <li><a href="#why-register-trademark" className="hover:text-gold-600 underline">1. Why Register Your Trademark with IPO Pakistan?</a></li>
            <li><a href="#nice-classification" className="hover:text-gold-600 underline">2. Selecting Nice Trademark Classes (Class 9 & 42 for Tech)</a></li>
            <li><a href="#trademark-search" className="hover:text-gold-600 underline">3. Conducting an Official IPO Trademark Search</a></li>
            <li><a href="#tm-1-filing-steps" className="hover:text-gold-600 underline">4. Step-by-Step TM-1 Application Filing Workflow</a></li>
            <li><a href="#journal-to-certificate" className="hover:text-gold-600 underline">5. Examination, Journal Publication & Certificate Issuance</a></li>
            <li><a href="#trademark-renewal" className="hover:text-gold-600 underline">6. 10-Year Renewals & Brand Enforcement</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="why-register-trademark" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Register Your Trademark with IPO Pakistan?
          </h2>
          <p>
            Operating under the Ministry of Commerce, <strong>IPO Pakistan (Intellectual Property Organization)</strong> is the sole statutory authority governing trademark registration under the <strong>Trademarks Ordinance 2001</strong>.
          </p>
          <p>
            Securing a trademark grants exclusive legal authority over your brand name, logo mark, and product taglines across Pakistan, empowering you to block competitors from copying your brand identity.
          </p>
        </div>

        {/* SECTION 2 */}
        <div id="nice-classification" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Selecting Nice Trademark Classes (Class 9 & 42 for Tech)
          </h2>
          <p>
            Trademarks in Pakistan are categorized under the international <strong>Nice Classification System</strong> comprising 45 distinct classes:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Nice Class</th>
                  <th className="p-4 text-gold-500">Business Industry Category</th>
                  <th className="p-4">Covered Goods & Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white font-semibold bg-gold-50/30">
                  <td className="p-4 font-bold text-navy-950">Class 9</td>
                  <td className="p-4 text-emerald-700 font-bold">Software Products & Hardware</td>
                  <td className="p-4">Downloadable software applications, mobile apps, SaaS code.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Class 42</td>
                  <td className="p-4 text-emerald-700 font-bold">IT Consultancy & Web Development</td>
                  <td className="p-4">Custom software development, cloud hosting, IT consulting services.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Class 35</td>
                  <td className="p-4">Business & Digital Marketing</td>
                  <td className="p-4">E-commerce store branding, digital advertising agency services.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Class 38</td>
                  <td className="p-4">Telecommunications & Call Centers</td>
                  <td className="p-4">VoIP communications, call center services, data transmission.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
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
        <div id="tm-1-filing-steps" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Step-by-Step TM-1 Application Filing Workflow
          </h2>
          <p>
            Filing a trademark application at the Trademark Registry (TMR):
          </p>
          <div className="space-y-3 text-sm pl-2 my-6">
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 1: Conduct Official Search (Form TM-55)</strong>
              <p className="text-xs text-gray-600">Submit an official search query to verify no conflicting marks exist in your designated Nice Class.</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 2: Submit Form TM-1 Application</strong>
              <p className="text-xs text-gray-600">File Form TM-1 along with brand logos, applicant CNIC/SECP details, and Form TM-48 (Power of Attorney).</p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-off-white">
              <strong className="block text-navy-950 font-semibold mb-1">Step 3: Receive TM Application Number</strong>
              <p className="text-xs text-gray-600">IPO issues an official application number, giving you immediate statutory rights to use the ™ symbol.</p>
            </div>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="journal-to-certificate" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Examination, Journal Publication & Certificate Issuance
          </h2>
          <p>
            Following examination, the Registrar publishes your mark in the monthly <strong>IPO Trademark Journal</strong>:
          </p>
          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Award size={18} />
              Journal Notice & Certificate Timeline:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              1. <strong>2-Month Notice Period:</strong> Allows any third party to file a Notice of Opposition (Form TM-5).
              <br /><br />
              2. <strong>Certificate Issuance:</strong> If no opposition is received, pay final registration fees to receive the 10-Year Trademark Certificate granting ® symbol rights.
            </p>
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
            PAKISTAN TRADEMARK & BRAND SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Protect Your Brand Name in Pakistan
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            IPO trademark search, TM-1 application filing, examination objection responses, and 10-year registration certificate issuance handled by ADVAQ.
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
