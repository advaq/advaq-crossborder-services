import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  FileText,
  Scale,
  Briefcase,
  AlertTriangle,
  FileCode,
  Check,
  X,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is the main difference between a Master Service Agreement (MSA) and a Statement of Work (SOW)?",
    a: "An MSA is an overarching master contract governing the long-term legal relationship, liabilities, payment terms, warranties, and IP ownership between two commercial entities. An SOW is a project-specific addendum defining project deliverables, milestones, timelines, acceptance criteria, and exact pricing for a specific phase or project.",
  },
  {
    q: "Why do agencies use MSAs combined with SOWs instead of a single long contract?",
    a: "Using an MSA + SOW structure dramatically accelerates client onboarding and contract negotiation. Once the master legal terms (indemnities, liability caps, dispute resolution, governing law) are signed in the MSA, launching subsequent projects requires signing a brief 3-5 page SOW without needing legal team re-review of the master legal terms.",
  },
  {
    q: "Which document prevails if an MSA and SOW conflict?",
    a: "Standard contract law dictates that MSA legal terms supersede SOW provisions unless the SOW explicitly names the specific MSA clause it intends to override (e.g. 'Notwithstanding Section 8.2 of the MSA, the parties agree that for this SOW...'). Without explicit language, the MSA prevails under the Order of Precedence clause.",
  },
  {
    q: "What key clauses must every agency Master Service Agreement contain?",
    a: "Essential MSA clauses include: (1) Intellectual Property Assignment & Transfer Triggers, (2) Limitation of Liability & Consequential Damage Exclusions, (3) Payment & Invoicing Terms (Net-30/Late Fees), (4) Confidentiality & Non-Disclosure, (5) Warranties & Disclaimers, (6) Indemnification, (7) Suspension of Work & Termination, and (8) Governing Law & Dispute Resolution.",
  },
  {
    q: "Can a client terminate an SOW without terminating the entire MSA?",
    a: "Yes. Well-drafted MSAs permit individual SOWs to be completed, paused, or cancelled for convenience or default without terminating the underlying MSA framework, maintaining the legal relationship for future SOWs.",
  },
  {
    q: "How should IP transfer be structured between an MSA and an SOW?",
    a: "The MSA should contain the legal mechanism for IP transfer (e.g., assignment of Work Made for Hire), but explicitly condition the transfer upon complete, unconditional payment of all invoices under the relevant SOW. The SOW should define the specific deliverables being transferred.",
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
  headline: "Master Service Agreement (MSA) vs Statement of Work (SOW): The Complete Legal Guide for Tech Agencies",
  description:
    "Comprehensive legal guide comparing Master Service Agreements (MSA) and Statements of Work (SOW) for digital agencies, IT vendors, and software development firms. Learn key clauses, structure, order of precedence, and risk management.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/master-service-agreement-vs-statement-of-work",
};

export const Route = createFileRoute("/blog/master-service-agreement-vs-statement-of-work")({
  head: () => ({
    meta: [
      { title: "MSA vs SOW Difference: Agency Contract Masterclass (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Master Service Agreement (MSA) vs Statement of Work (SOW) guide for digital agencies & software houses. Key clauses, order of precedence, conflict rules & sample wording.",
      },
      {
        name: "keywords",
        content:
          "master service agreement vs statement of work, msa vs sow difference digital agency, software development msa sow template, limitation of liability msa clause agency, order of precedence msa sow",
      },
      {
        property: "og:title",
        content: "Master Service Agreement (MSA) vs Statement of Work (SOW): The Complete Agency Guide",
      },
      {
        property: "og:description",
        content:
          "Master the legal structure of MSAs and SOWs to streamline client onboarding, protect IP rights, and cap agency liability.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/master-service-agreement-vs-statement-of-work" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/master-service-agreement-vs-statement-of-work" }],
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
            Master Service Agreement (MSA) vs Statement of Work (SOW): The Definitive Agency Legal Guide
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,200+ word contract drafting masterclass for digital agencies, IT consultancies, software houses, and SaaS vendors on structuring two-tier commercial contracts, managing legal risk, and enforcing order of precedence.
          </p>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-navy-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-gold-500" />
                <span>Advocate Muhammad Abdullah (Lead Counsel)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-gold-500" />
                <span>12 Min Read · Updated July 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>US, UK, UAE & Global Commercial Law Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Legal Summary: MSA vs SOW</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-5 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-2 font-serif">Master Service Agreement (MSA)</strong>
              <p className="text-navy-100 leading-relaxed">
                The umbrella legal contract governing overall risk allocation, IP ownership transfer triggers, indemnities, liability caps (1x fees), payment terms, confidentiality, suspension rights, and governing court jurisdiction. Signed once.
              </p>
            </div>

            <div className="bg-navy-950 p-5 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-2 font-serif">Statement of Work (SOW)</strong>
              <p className="text-navy-100 leading-relaxed">
                The tactical project addendum detailing functional specifications, technical deliverables, milestone schedules, acceptance test windows, pricing structures (Fixed Price or Time & Materials), and client dependencies. Signed for every project.
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
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: Why Single Contracts Fail Digital Agencies</a></li>
            <li><a href="#what-is-msa" className="hover:text-gold-600 underline">2. Deep Dive: What Is a Master Service Agreement (MSA)?</a></li>
            <li><a href="#what-is-sow" className="hover:text-gold-600 underline">3. Deep Dive: What Is a Statement of Work (SOW)?</a></li>
            <li><a href="#comparison-matrix" className="hover:text-gold-600 underline">4. Side-by-Side Comparison Matrix</a></li>
            <li><a href="#order-of-precedence" className="hover:text-gold-600 underline">5. The Order of Precedence Clause: Preventing Legal Conflicts</a></li>
            <li><a href="#critical-clauses" className="hover:text-gold-600 underline">6. 7 Essential MSA Clauses Every Tech Vendor Must Include</a></li>
            <li><a href="#sow-pitfalls" className="hover:text-gold-600 underline">7. Common SOW Mistakes That Lead to Scope Creep & Disputes</a></li>
            <li><a href="#checklist" className="hover:text-gold-600 underline">8. Step-by-Step Contract Drafting Checklist</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">9. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: Why Single Contracts Fail Digital Agencies & Software Houses
          </h2>
          <p>
            When scaling a digital agency, software house, or IT consultancy, one of the most dangerous operational traps is relying on a single "catch-all" contract for every client project. When an agency sends a 20-page combined proposal and contract for a small $10,000 project, the client’s legal team spends three weeks redlining liability caps, governing law, and indemnification clauses. Conversely, if an agency relies on a brief 3-page proposal with no formal legal protections, a single disputed milestone or scope creep disagreement can trigger catastrophic financial liability.
          </p>
          <p>
            The solution used by tier-one IT consultancies (such as Accenture, McKinsey, and enterprise software vendors) is the <strong>Two-Tier Commercial Contract Architecture</strong>: separating master legal terms into a <strong>Master Service Agreement (MSA)</strong> and individual project specifications into a <strong>Statement of Work (SOW)</strong>.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Key Strategic Advantage:</strong>
            <p className="text-navy-900 text-sm">
              By negotiating and executing an overarching MSA once, an agency establishes a permanent legal relationship with a client. Future projects, retainers, or emergency feature sprints can be authorized within 24 hours by signing a concise 3-page SOW without re-opening legal negotiations.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="what-is-msa" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Deep Dive: What Is a Master Service Agreement (MSA)?
          </h2>
          <p>
            A <strong>Master Service Agreement (MSA)</strong> is a master commercial legal contract entered into by a service provider (the agency) and a buyer (the client). It sets forth the legal, financial, and risk-allocation terms that govern all current and future work between the parties.
          </p>
          <p>
            The MSA does not commit the client to spend a specific dollar amount, nor does it obligate the agency to perform specific technical tasks. Instead, it creates the legal framework under which work will be performed if and when an SOW is executed.
          </p>
          
          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Core Functions of an MSA:</h3>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-3 text-sm">
              <Shield className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Limitation of Liability:</strong> Caps maximum legal damages (typically limited to total fees paid in the preceding 6 or 12 months) and waives indirect/consequential damages.</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Shield className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Intellectual Property Transfer Mechanism:</strong> Defines when and how IP transfers to the client (strictly conditioned upon full payment of invoices).</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Shield className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Payment Standards & Interest:</strong> Sets default payment windows (e.g. Net-30), accepted currencies, late payment interest rates (e.g. 1.5% per month), and suspension rights.</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Shield className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Confidentiality & Non-Disclosure:</strong> Establishes mutual 3-to-5 year confidentiality obligations for proprietary code, customer data, and business operations.</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Shield className="text-gold-600 shrink-0 mt-1" size={16} />
              <span><strong>Dispute Resolution & Jurisdiction:</strong> Specifies choice of governing law (e.g. Delaware, UK High Court, Dubai Courts) and mandatory mediation/arbitration steps.</span>
            </li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div id="what-is-sow" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Deep Dive: What Is a Statement of Work (SOW)?
          </h2>
          <p>
            A <strong>Statement of Work (SOW)</strong> is a operational and technical contract document executed pursuant to an existing MSA. It defines the specific scope, technical deliverables, milestone timeline, acceptance testing procedures, and pricing model for a specific engagement.
          </p>
          <p>
            While the MSA is drafted by legal attorneys, the SOW is typically drafted by Project Managers, Solutions Architects, or Account Directors. It acts as the functional blueprint of the project.
          </p>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Core Components of an Effective SOW:</h3>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-border p-5 rounded-xl bg-off-white">
              <h4 className="font-bold text-navy-950 text-sm mb-2 flex items-center gap-2">
                <FileCode size={16} className="text-gold-600" />
                Technical & Functional Scope
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Detailed list of features, user stories, API integrations, supported browsers/devices, third-party licenses, and explicit "Out of Scope" exclusions.
              </p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-off-white">
              <h4 className="font-bold text-navy-950 text-sm mb-2 flex items-center gap-2">
                <Clock size={16} className="text-gold-600" />
                Milestone Schedule & Acceptance
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Phased timeline with exact deliverable deadlines, client review windows (e.g. 5 business days), User Acceptance Testing (UAT) criteria, and deemed acceptance rules.
              </p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-off-white">
              <h4 className="font-bold text-navy-950 text-sm mb-2 flex items-center gap-2">
                <Briefcase size={16} className="text-gold-600" />
                Pricing & Billing Structure
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Specifies whether the engagement is Fixed-Price (milestone-based) or Time & Materials (hourly/monthly rates), invoicing schedules, and deposit requirements.
              </p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-off-white">
              <h4 className="font-bold text-navy-950 text-sm mb-2 flex items-center gap-2">
                <User size={16} className="text-gold-600" />
                Client Dependencies & Assumptions
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Required client inputs (brand assets, API keys, staging access, timely feedback). States that client delays automatically extend project timelines.
              </p>
            </div>
          </div>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ LEGAL CONTRACT ENGINEERING
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Need Bulletproof MSA & SOW Templates Drafted for Your Tech Agency?
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ's Advocate-led team drafts bulletproof B2B Master Service Agreements and SOW frameworks customized for US, UK, UAE, and cross-border tech consultancies, agencies, and software houses.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Explore MSA Contract Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="comparison-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Side-by-Side Architectural Comparison Matrix
          </h2>
          <p>
            Understanding the distinction between an MSA and an SOW is vital for both account management and legal risk containment. The following comparison highlights key differences:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Feature / Aspect</th>
                  <th className="p-4 text-gold-500">Master Service Agreement (MSA)</th>
                  <th className="p-4 text-gold-500">Statement of Work (SOW)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Primary Purpose</td>
                  <td className="p-4">Establishes overarching legal terms & risk allocation.</td>
                  <td className="p-4">Defines specific project scope, deliverables, and fees.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Execution Frequency</td>
                  <td className="p-4">Signed once at the start of the commercial relationship.</td>
                  <td className="p-4">Signed for every new project, feature sprint, or phase.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Primary Drafter</td>
                  <td className="p-4">Corporate Attorneys & Legal Counsel.</td>
                  <td className="p-4">Project Managers, Account Directors & Technical Leads.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">IP Transfer Rules</td>
                  <td className="p-4">Defines legal transfer triggers & payment conditions.</td>
                  <td className="p-4">Lists specific source code, assets, and design files transferred.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Liability & Indemnity</td>
                  <td className="p-4">Contains liability caps (e.g. 1x fees) and waiver of consequential damages.</td>
                  <td className="p-4">Silent on legal liability (defers to MSA).</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Duration / Term</td>
                  <td className="p-4">Multi-year or perpetual (until formally terminated).</td>
                  <td className="p-4">Short-term (e.g. 3 months, 6 months) for project duration.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="order-of-precedence" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. The Order of Precedence Clause: Preventing Legal Conflicts
          </h2>
          <p>
            One of the most critical legal challenges in a two-tier contract structure is resolving conflicting provisions. What happens if the MSA states that payment is due Net-30 days, but a specific SOW states that payment is due Net-15 days? Or what if an SOW drafted by a project manager accidentally promises unlimited liability or custom IP rights that violate the MSA?
          </p>
          <p>
            To prevent ambiguity, every professionally drafted MSA must contain an <strong>Order of Precedence Clause</strong>.
          </p>

          <div className="bg-navy-950 text-white p-6 rounded-2xl my-6 border border-white/10">
            <h4 className="font-serif text-lg text-gold-500 font-semibold mb-2 flex items-center gap-2">
              <Scale size={18} />
              Standard Legal Order of Precedence Sample Wording:
            </h4>
            <p className="text-xs text-navy-200 font-mono leading-relaxed bg-navy-900 p-4 rounded-xl border border-white/5 my-3">
              "In the event of any conflict or inconsistency between the terms of this Master Service Agreement and any Statement of Work, the terms of this Master Service Agreement shall control and prevail; PROVIDED, HOWEVER, that a Statement of Work may override a specific provision of this MSA only if such Statement of Work explicitly identifies the section number of the MSA to be modified and expressly states the parties' intention to override that specific provision for that SOW alone."
            </p>
          </div>

          <p className="text-sm">
            This legal mechanism ensures that project managers cannot accidentally compromise the agency’s master legal protections in an SOW without explicit, intentional legal override.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="critical-clauses" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 7 Essential MSA Clauses Every Tech Vendor Must Include
          </h2>
          <p>
            When drafting or reviewing an agency MSA, failing to include protective legal clauses leaves your firm vulnerable to unpaid invoices, infinite rework, and un-capped legal damages. Ensure your MSA contains these seven essential clauses:
          </p>

          <div className="space-y-4 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">
                1. IP Transfer Conditioned Upon Full Payment
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Never assign intellectual property upon creation. State clearly that title and ownership of all deliverables pass to the client <em>only after full and final payment of all associated invoices under the relevant SOW</em>.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">
                2. Limitation of Liability Cap
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cap the agency’s maximum total aggregate liability for any claims to the actual amount paid by the client under the specific SOW in the preceding 6 or 12 months. Exclude indirect, special, lost profit, and consequential damages entirely.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">
                3. Work Suspension for Non-Payment
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Include a clause granting the agency the immediate right to suspend all work, withhold code deployment, and revoke staging access if any invoice is overdue by more than 10 business days, without incurring breach of contract liability.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">
                4. Background IP & Pre-Existing Tools Reservation
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Explicitly reserve ownership of the agency’s pre-existing code frameworks, libraries, devops scripts, and internal tools. Grant the client a non-exclusive, perpetual license to use embedded background IP solely as integrated into the final deliverable.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">
                5. Formal Change Request Procedure
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Mandate that any modification to project scope, timelines, or technical specifications must be documented in a written Change Request Form signed by authorized representatives of both parties, specifying cost and timeline impacts.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">
                6. Client Delay & Timeline Adjustments
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                State that project deadlines in an SOW are strictly dependent upon the client providing timely approvals, brand assets, and feedback. Any client delay automatically extends agency deadlines day-for-day and may incur restart fees if paused for over 30 days.
              </p>
            </div>

            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">
                7. Non-Solicitation of Agency Staff
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Protect your team from client poaching. Prohibit the client from soliciting or hiring agency developers or project managers during the agreement and for 12 months thereafter, with a pre-agreed liquidated damages fee (e.g. 50% of annual salary).
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="sow-pitfalls" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. Common SOW Mistakes That Lead to Scope Creep & Disputes
          </h2>
          <p>
            Even with a rock-solid MSA, a poorly drafted SOW can ruin project profitability. Avoid these four common SOW drafting errors:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-2">
                <AlertTriangle size={16} />
                <span>Vague Acceptance Testing Terms</span>
              </div>
              <p className="text-xs text-red-900 leading-relaxed">
                <strong>Mistake:</strong> Allowing clients infinite time to review code or testing deliverables.<br />
                <strong>Fix:</strong> Set a strict 5-business-day review window. State that if no written rejection detailing non-conformities is received within 5 days, the deliverable is deemed accepted and milestone invoice triggered.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-2">
                <AlertTriangle size={16} />
                <span>Omitting "Out of Scope" Section</span>
              </div>
              <p className="text-xs text-red-900 leading-relaxed">
                <strong>Mistake:</strong> Only listing what IS included.<br />
                <strong>Fix:</strong> Always include an explicit "Out of Scope" list (e.g. third-party API subscription costs, SEO copywriting, multi-language localization, post-launch maintenance) to eliminate client assumptions.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 8 */}
        <div id="checklist" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            8. Step-by-Step Contract Drafting Checklist for Agencies
          </h2>
          <p>
            Follow this practical step-by-step checklist before issuing contracts to new clients:
          </p>

          <div className="bg-navy-900 text-white p-6 rounded-2xl space-y-3 text-xs my-6 border border-gold-500/30">
            <div className="flex items-center gap-3">
              <Check className="text-gold-500 shrink-0" size={16} />
              <span><strong>Step 1:</strong> Have a qualified advocate/attorney draft your standard agency Master Service Agreement (MSA).</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-gold-500 shrink-0" size={16} />
              <span><strong>Step 2:</strong> Ensure the MSA includes an Order of Precedence clause, payment terms, and liability caps.</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-gold-500 shrink-0" size={16} />
              <span><strong>Step 3:</strong> Have both parties sign the MSA once during initial account setup.</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-gold-500 shrink-0" size={16} />
              <span><strong>Step 4:</strong> Draft SOW #1 detailing exact scope, deliverables, milestones, acceptance window, and fees.</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-gold-500 shrink-0" size={16} />
              <span><strong>Step 5:</strong> Ensure SOW #1 references the MSA date and contains no conflicting legal terms.</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-gold-500 shrink-0" size={16} />
              <span><strong>Step 6:</strong> Collect initial deposit payment before commencing technical development work.</span>
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
            ADVAQ LEGAL CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Protect Your Tech Agency with Tailored MSAs & SOWs
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Custom B2B contract drafting, IP protection, liability cap structuring, and cross-border enforcement advisory led by Advocate High Court.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/master-service-agreement"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order MSA & SOW Contract Package
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
