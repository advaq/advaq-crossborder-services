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
  UserCheck,
  Scale,
  Briefcase,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is an Employee Confidentiality & Proprietary Information Agreement (PIIPA)?",
    a: "An Employee Confidentiality Agreement (or PIIPA - Proprietary Information and Inventions Agreement) is an employment contract signed by tech staff agreeing to keep company and client data secret and automatically assigning all inventions, source code, and IP created during employment to the employer.",
  },
  {
    q: "Why is an Employee Confidentiality Agreement essential for tech companies and dev agencies?",
    a: "Tech agencies hold strict confidentiality obligations to their B2B clients. Employee confidentiality agreements ensure that if an engineer leaves, they cannot legally copy, share, or take client source code, customer databases, or proprietary algorithms to a competitor.",
  },
  {
    q: "What is the difference between a Non-Disclosure Agreement (NDA) and an Employee Confidentiality Agreement?",
    a: "NDAs are commercial contracts signed between independent third-party entities. Employee Confidentiality Agreements are internal employment contracts containing IP invention assignment, non-solicitation, and post-employment confidentiality obligations.",
  },
  {
    q: "Can an Employee Confidentiality Agreement include a Non-Solicitation clause?",
    a: "Yes! Modern tech employment agreements include Non-Solicitation of Clients and Non-Solicitation of Employees clauses prohibiting departing staff from poaching company clients or colleagues for 12 to 24 months.",
  },
  {
    q: "Does an Employee Confidentiality Agreement remain effective after employment ends?",
    a: "Yes. Post-employment confidentiality obligations survive termination indefinitely for core trade secrets (like source code algorithms), and for 2 to 5 years for general business information.",
  },
  {
    q: "How are prior inventions carved out in a PIIPA agreement?",
    a: "A well-drafted PIIPA includes an Exhibit for 'Prior Inventions,' allowing incoming employees to list pre-existing personal software projects created prior to employment so they are excluded from automatic company IP assignment.",
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
  headline: "Employee Confidentiality Agreements: Protecting Client Data & Proprietary Secrets",
  description:
    "Complete 2026 legal guide on Employee Confidentiality & Proprietary Information Agreements (PIIPA) for tech companies & dev agencies. Learn trade secret protection, IP invention assignment, and non-solicitation rules.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/employee-confidentiality-agreement-tech-company",
};

export const Route = createFileRoute("/blog/employee-confidentiality-agreement-tech-company")({
  head: () => ({
    meta: [
      { title: "Employee Confidentiality Agreement Tech Company Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Employee confidentiality agreement guide for tech companies & agencies. Protect client code, trade secrets, IP invention assignment & non-solicitation.",
      },
      {
        name: "keywords",
        content:
          "employee confidentiality agreement tech company, piipa proprietary information inventions agreement, employee non solicitation clause client code protection, trade secret protection post employment confidentiality",
      },
      {
        property: "og:title",
        content: "Employee Confidentiality Agreements: Protecting Client Data & Proprietary Secrets",
      },
      {
        property: "og:description",
        content:
          "Safeguard client source code, algorithms, and trade secrets with bulletproof employee confidentiality agreements.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/employee-confidentiality-agreement-tech-company" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/employee-confidentiality-agreement-tech-company" }],
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
            Employee Confidentiality Agreements: Protecting Client Data & Proprietary Secrets
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word practical HR and legal protection guide for software houses, agency owners, and tech CEOs on drafting Proprietary Information and Inventions Agreements (PIIPA) to protect client source code and trade secrets.
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
              <span>Employment Law & Trade Secret Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Legal Summary: Essential Employee Clauses</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">1. Client Data & Code Confidentiality</strong>
              <p className="text-navy-100 leading-relaxed">
                Mandatory strict secrecy for all client source repositories, credentials, databases, and internal agency operations.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">2. IP Invention Assignment (PIIPA)</strong>
              <p className="text-navy-100 leading-relaxed">
                Automatic legal assignment of all code, designs, architectures, and tools developed during employment to the company.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">3. Non-Solicitation of Clients & Staff</strong>
              <p className="text-navy-100 leading-relaxed">
                Prohibits departing developers from soliciting company clients or poaching team members for 12 to 24 months post-employment.
              </p>
            </div>

            <div className="bg-navy-950 p-4 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-1 font-serif">4. Indefinite Trade Secret Survival</strong>
              <p className="text-navy-100 leading-relaxed">
                Confidentiality obligations for core trade secrets survive employment termination perpetually under trade secret statutes.
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
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Why Employee Confidentiality Is Critical for Agencies</a></li>
            <li><a href="#piipa-inventions" className="hover:text-gold-600 underline">2. Proprietary Information & Inventions Assignment (PIIPA)</a></li>
            <li><a href="#client-data-protection" className="hover:text-gold-600 underline">3. Protecting Client Source Code & Credentials</a></li>
            <li><a href="#non-solicitation" className="hover:text-gold-600 underline">4. Drafting Enforceable Non-Solicitation Clauses</a></li>
            <li><a href="#post-employment-survival" className="hover:text-gold-600 underline">5. Post-Employment Survival & Device Inspection</a></li>
            <li><a href="#prior-inventions-carveout" className="hover:text-gold-600 underline">6. Handling Employee Prior Inventions</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">7. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Why Employee Confidentiality Is Critical for Agencies & Tech Firms
          </h2>
          <p>
            When a tech company or digital agency hires software developers, UI designers, or project managers, those employees gain access to the firm's most sensitive assets: client GitHub repositories, staging API keys, customer databases, and proprietary devops scripts.
          </p>
          <p>
            Agencies are bound by strict Non-Disclosure Agreements (NDAs) with their enterprise clients. If a departing employee takes client source code to a competitor or launches a competing product using client data, the agency faces catastrophic breach of contract lawsuits from its clients.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">HR Compliance Rule:</strong>
            <p className="text-navy-900 text-sm">
              An offer letter alone does not protect your IP. Every tech employee must sign a formal Proprietary Information and Inventions Agreement (PIIPA) on or before their first day of work.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="piipa-inventions" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Proprietary Information & Inventions Assignment (PIIPA)
          </h2>
          <p>
            A <strong>Proprietary Information and Inventions Agreement (PIIPA)</strong> ensures that all code, software architectures, algorithms, bug fixes, and documentation created by employees during employment automatically belong to the company.
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Sample Inventions Assignment Wording:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "Employee agrees that all inventions, software code, algorithms, trade secrets, and technical documentation developed, authored, or conceived by Employee during employment ('Inventions') shall be the sole and exclusive property of Company. Employee hereby irrevocably assigns to Company all right, title, and interest in and to all such Inventions."
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div id="client-data-protection" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Protecting Client Source Code & Credentials
          </h2>
          <p>
            The agreement must explicitly define <strong>Confidential Information</strong> to include client data. Employees must be prohibited from copying, downloading to personal devices, or storing client source code on unauthorized personal cloud accounts (e.g. personal GitHub, Google Drive, or Dropbox).
          </p>
        </div>

        {/* IN-ARTICLE CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ HR & IP CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Draft Employee Confidentiality & PIIPA Agreements with ADVAQ
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ drafts custom employment contracts, PIIPA forms, and non-solicitation agreements for software companies and digital agencies across US, UK, UAE, and Pakistan.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/employee-confidentiality-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Employee Contract Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="non-solicitation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Drafting Enforceable Non-Solicitation Clauses
          </h2>
          <p>
            When a senior developer leaves an agency, they often attempt to take key agency clients with them or recruit fellow developers to their new employer.
          </p>
          <p>
            Your employment agreement must include two distinct non-solicitation covenants:
          </p>
          <ul className="space-y-3 text-sm pl-2">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Non-Solicitation of Clients:</strong> Prohibits soliciting or accepting business from company clients for 12 to 24 months post-employment.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Non-Solicitation of Employees:</strong> Prohibits recruiting or poaching fellow agency engineers for 12 to 24 months post-employment.</span></li>
          </ul>
        </div>

        {/* SECTION 5 */}
        <div id="post-employment-survival" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Post-Employment Survival & Device Inspection
          </h2>
          <p>
            Confidentiality obligations must survive employment termination indefinitely for core trade secrets. The agreement must also authorize the employer to audit and wipe company data from employee devices upon exit.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="prior-inventions-carveout" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. Handling Employee Prior Inventions
          </h2>
          <p>
            To avoid disputes over pre-existing side projects, include a "Prior Inventions Schedule" where the incoming employee lists personal code repositories created before joining the company, excluding them from automatic company assignment.
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
            EMPLOYEE HR & LEGAL SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Protect Your Agency's IP & Client Data
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Employee confidentiality contracts, PIIPA invention assignment templates, and non-solicitation provisions drafted by Advocate High Court.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/employee-confidentiality-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Employee Confidentiality Package
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
