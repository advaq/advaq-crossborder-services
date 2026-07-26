import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  Lock,
  Scale,
  Globe,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What mandatory disclosures must be included in a GDPR-compliant Privacy Policy?",
    a: "Under GDPR Article 13 & 14, a Privacy Policy must disclose: (1) Identity & contact details of Data Controller, (2) Categories of personal data collected, (3) Legal bases for processing (Consent, Contract performance, Legitimate Interest), (4) Third-party data recipients/sub-processors, (5) Data retention periods, and (6) Explicit instructions for exercising user rights (Access, Erasure, Portability).",
  },
  {
    q: "Does GDPR apply to US or non-EU companies operating SaaS applications?",
    a: "Yes! Under GDPR Article 3(2), GDPR applies extraterritorially to ANY company worldwide that targets, collects, or processes personal data of individuals located within the EU or UK, regardless of where the software business is legally incorporated.",
  },
  {
    q: "What are the regulatory penalties for non-compliant Privacy Policies under GDPR?",
    a: "GDPR fines can reach up to €20 Million or 4% of global annual turnover (whichever is higher) for severe data transparency or legal basis violations.",
  },
  {
    q: "What is the difference between a Data Controller and a Data Processor under GDPR?",
    a: "A Data Controller determines the legal purposes and means of processing personal data. A Data Processor processes data on behalf of the Controller under strict contractual instructions (governed by a Data Processing Agreement - DPA).",
  },
  {
    q: "What cookie consent disclosures are required for web applications?",
    a: "Web applications using analytics, remarketing, or tracking cookies must deploy an explicit Cookie Consent Banner requiring active opt-in consent before non-essential cookies or tracking scripts are loaded.",
  },
  {
    q: "What are Standard Contractual Clauses (SCCs) in international data transfers?",
    a: "SCCs are standardized legal terms approved by the European Commission that permit the transfer of EU personal data to cloud servers or remote sub-processors located in non-EU countries (such as the US or Pakistan).",
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
  headline: "GDPR Privacy Policy Requirements for SaaS & Web Applications: What to Disclose",
  description:
    "Complete 2026 GDPR Privacy Policy compliance guide for SaaS applications and websites. Learn mandatory Article 13 disclosures, legal bases for processing, cookie consent rules, and user data rights.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/gdpr-privacy-policy-requirements-saas-website",
};

export const Route = createFileRoute("/blog/gdpr-privacy-policy-requirements-saas-website")({
  head: () => ({
    meta: [
      { title: "GDPR Privacy Policy Requirements SaaS (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "GDPR Privacy Policy requirements for SaaS & web apps. Mandatory disclosures, legal bases for processing, cookie consent banners & user data rights.",
      },
      {
        name: "keywords",
        content:
          "gdpr privacy policy requirements saas website, article 13 mandatory disclosures gdpr privacy policy, legal basis processing contract consent legitimate interest saas, cookie consent opt in banner gdpr compliance",
      },
      {
        property: "og:title",
        content: "GDPR Privacy Policy Requirements for SaaS & Web Applications: What to Disclose",
      },
      {
        property: "og:description",
        content:
          "Ensure your SaaS platform satisfies EU GDPR and UK Data Protection Act mandatory privacy disclosures.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/gdpr-privacy-policy-requirements-saas-website" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/gdpr-privacy-policy-requirements-saas-website" }],
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
    <article className="min-h-screen bg-white text-gray-800">
      {/* HEADER HERO */}
      <section className="bg-navy-950 pt-36 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500 font-semibold mb-4">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <span>/</span>
            <Link to="/legal-contract-drafting" className="hover:underline">Legal Contract Drafting</Link>
          </div>

          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[50px] leading-[1.15] text-white font-medium">
            GDPR Privacy Policy Requirements for SaaS & Web Applications: What to Disclose
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word comprehensive data privacy compliance guide for SaaS founders, software developers, and web app operators on satisfying EU GDPR Article 13 and UK DPA mandatory privacy disclosures.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>Advocate Muhammad Abdullah (Lead Counsel)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>11 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>EU GDPR & UK DPA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Legal Summary: GDPR Privacy Policy Mandatory Elements</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Data Controller Identity</strong>
              <p className="text-navy-100 leading-relaxed">
                Full legal name of company, physical business address, DPO contact email, and official Data Protection Officer details.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. Lawful Basis Mapping</strong>
              <p className="text-navy-100 leading-relaxed">
                Explicit mapping of lawful basis (Consent, Contract Performance, Legitimate Interest) for every specific data processing activity.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Sub-Processor Disclosures</strong>
              <p className="text-navy-100 leading-relaxed">
                Comprehensive listing of third-party cloud infrastructure (AWS/Vercel), analytics (PostHog/GA4), and payment gateways (Stripe/PayPal).
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Data Subject Rights</strong>
              <p className="text-navy-100 leading-relaxed">
                Clear instructions enabling users to exercise rights to data access, rectification, erasure ("Right to be Forgotten"), and data portability.
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
          <ol className="grid md:grid-cols-2 gap-2 text-sm text-navy-900 list-decimal list-inside font-medium">
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: Global Extraterritorial Scope of GDPR</a></li>
            <li><a href="#article-13-disclosures" className="hover:text-gold-600 underline">2. Mandatory Article 13 Privacy Disclosures</a></li>
            <li><a href="#legal-bases" className="hover:text-gold-600 underline">3. Identifying Lawful Bases for Data Processing</a></li>
            <li><a href="#subprocessor-transfers" className="hover:text-gold-600 underline">4. Sub-Processors & Cross-Border Data Transfer Rules</a></li>
            <li><a href="#cookie-consent" className="hover:text-gold-600 underline">5. Cookie Consent Banners & Tracking Scripts</a></li>
            <li><a href="#user-rights" className="hover:text-gold-600 underline">6. Facilitating User Data Subject Rights (DSAR)</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: Global Extraterritorial Scope of GDPR
          </h2>
          <p>
            Many US, UAE, or Pakistani software founders assume that because their company is incorporated outside the European Union, they do not need to comply with the EU General Data Protection Regulation (GDPR).
          </p>
          <p>
            This is a dangerous misconception. Under <strong>GDPR Article 3(2)</strong>, the regulation applies extraterritorially to ANY company worldwide that offers goods, services, or SaaS subscriptions to individuals in the EU or monitors their online behavior (such as tracking analytics).
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Regulatory Reality:</strong>
            <p className="text-navy-900 text-sm">
              Failure to publish a compliant Privacy Policy under Article 13 exposes SaaS platforms to regulatory fines up to €20 Million or 4% of global turnover, plus immediate blocking by enterprise B2B buyers during security audits.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="article-13-disclosures" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Mandatory Article 13 Privacy Disclosures
          </h2>
          <p>
            When collecting personal data directly from users (during signup or form submission), GDPR Article 13 mandates that your Privacy Policy must explicitly state:
          </p>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Categories of Data Collected:</strong> Names, email addresses, IP addresses, payment card tokens, device telemetry, and usage logs.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Purposes of Processing:</strong> Account creation, subscription billing, product analytics, and customer support.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Data Retention Period:</strong> Specific timelines for holding user logs and account data post-cancellation.</span></li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div id="legal-bases" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Identifying Lawful Bases for Data Processing
          </h2>
          <p>
            Under GDPR Article 6, every data collection item must be justified by one of three primary legal grounds:
          </p>

          <div className="space-y-4 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">1. Performance of a Contract</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Necessary to provide the SaaS service requested by the user (e.g. processing email addresses to allow user login).</p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">2. Legitimate Interest</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Necessary for platform security, fraud prevention, or internal server error monitoring (balancing user rights against business needs).</p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">3. Explicit Consent</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Required for sending promotional email newsletters, remarketing ads, or non-essential cookies.</p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ DATA PRIVACY SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft GDPR-Compliant Privacy Policies with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts custom GDPR, CCPA, and UK DPA Privacy Policies tailored for SaaS platforms, mobile apps, and e-commerce websites in US, UK, UAE, and Pakistan.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/privacy-policy"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Privacy Policy Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="subprocessor-transfers" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Sub-Processors & Cross-Border Data Transfer Rules
          </h2>
          <p>
            If your SaaS application transfers personal data across borders (e.g., storing data on US cloud servers like AWS, Vercel, or Supabase), your privacy policy must disclose third-party sub-processors and reference <strong>EU Standard Contractual Clauses (SCCs)</strong>.
          </p>
        </div>

        {/* SECTION 5 */}
        <div id="cookie-consent" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Cookie Consent Banners & Tracking Scripts
          </h2>
          <p>
            Under the EU ePrivacy Directive and GDPR, non-essential cookies (such as Google Analytics 4, Meta Pixel, or Hotjar) cannot be loaded until the user explicitly clicks "Accept All" on a <strong>Cookie Consent Banner</strong> offering granular opt-in controls.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="user-rights" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Facilitating User Data Subject Rights (DSAR)
          </h2>
          <p>
            Your policy must provide a dedicated contact channel (e.g. `privacy@yourcompany.com`) allowing users to exercise their statutory rights:
          </p>
          <ul className="space-y-2 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Right to Access & Data Portability:</strong> Providing users with a copy of their personal data in machine-readable JSON/CSV format.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Right to Erasure ("Right to be Forgotten"):</strong> Permanently deleting user account records upon request within 30 days.</span></li>
          </ul>
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
            DATA PRIVACY COMPLIANCE SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Ensure Full GDPR & CCPA Compliance
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            GDPR privacy policies, cookie consent policy drafting, sub-processor disclosures, and user data rights management templates drafted by Advocate High Court.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/privacy-policy"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order GDPR Privacy Policy
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
