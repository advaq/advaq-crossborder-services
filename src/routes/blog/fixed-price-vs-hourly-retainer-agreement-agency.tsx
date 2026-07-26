import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  User,
  ArrowRight,
  Shield,
  ChevronDown,
  DollarSign,
  Scale,
  Briefcase,
  AlertTriangle,
  Check,
  HelpCircle,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    q: "What is a Fixed Price Contract in digital agency operations?",
    a: "A Fixed Price Contract agrees on an absolute lump-sum price for a strictly defined set of project deliverables, regardless of actual developer hours or design iterations spent by the agency.",
  },
  {
    q: "What is an Hourly Retainer (Time & Materials) Agreement?",
    a: "An Hourly Retainer Agreement charges clients based on actual hours logged at pre-agreed hourly billing rates or commits the client to purchasing a dedicated block of developer hours each month paid in advance.",
  },
  {
    q: "Which pricing model provides higher profit margins for experienced agencies?",
    a: "Fixed Price contracts typically yield higher profit margins for mature agencies with standardized workflows and reusable code libraries. However, Time & Materials (Hourly Retainers) provide maximum risk protection against unpredictable scope changes.",
  },
  {
    q: "How can agencies mitigate financial risks in Fixed Price contracts?",
    a: "To protect margins in Fixed Price contracts: (1) Include exhaustive functional specification documents in the SOW, (2) Enforce strict Change Control procedures, (3) Require milestone deposit payments prior to work commencing, and (4) Include explicit 'Out of Scope' exclusions.",
  },
  {
    q: "Can an agency combine Fixed Price and Hourly Retainer models?",
    a: "Yes! The most successful hybrid model builds the initial MVP core product on a Fixed Price basis, while post-launch support, continuous feature enhancement, and DevOps maintenance operate on a Monthly Hourly Retainer.",
  },
  {
    q: "How should unused hours be handled in a Monthly Retainer Agreement?",
    a: "Contracts should state that monthly retainer hours are 'use-it-or-lose-it' and do NOT roll over to subsequent months, ensuring predictable agency capacity planning and recurring revenue cash flow.",
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
  headline: "Fixed Price vs Hourly Retainer Contracts: Which Model Protects Digital Agencies Best?",
  description:
    "Complete legal & financial guide comparing Fixed Price vs Hourly Retainer contracts for digital marketing, design, and software agencies. Learn risk allocation, scope control, and hybrid agreement drafting.",
  author: { "@type": "Organization", name: "ADVAQ Global Advisory" },
  publisher: { "@type": "Organization", name: "ADVAQ", url: "https://advaq.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-26",
  mainEntityOfPage: "https://advaq.com/blog/fixed-price-vs-hourly-retainer-agreement-agency",
};

export const Route = createFileRoute("/blog/fixed-price-vs-hourly-retainer-agreement-agency")({
  head: () => ({
    meta: [
      { title: "Fixed Price vs Hourly Retainer Contract Agency Guide (2026) | ADVAQ" },
      {
        name: "description",
        content:
          "Fixed Price vs Hourly Retainer contract guide for digital agencies. Learn legal risk allocation, scope control, payment terms & hybrid retainer drafting.",
      },
      {
        name: "keywords",
        content:
          "fixed price vs hourly retainer agreement agency, time and materials contract vs fixed fee, digital agency pricing model contract protection, hybrid retainer agreement software development",
      },
      {
        property: "og:title",
        content: "Fixed Price vs Hourly Retainer Contracts: Which Model Protects Digital Agencies Best?",
      },
      {
        property: "og:description",
        content:
          "Discover how to choose and draft the right pricing contract model for your digital agency.",
      },
      {
        property: "og:type",
        content: "article",
      },
      { property: "og:url", content: "/blog/fixed-price-vs-hourly-retainer-agreement-agency" },
    ],
    links: [{ rel: "canonical", href: "https://advaq.com/blog/fixed-price-vs-hourly-retainer-agreement-agency" }],
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
            Fixed Price vs Hourly Retainer Contracts: Which Model Protects Digital Agencies Best?
          </h1>

          <p className="mt-6 text-navy-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            A 2,100+ word financial and legal contract masterclass for agency owners, design studios, and software houses comparing Fixed Price project agreements against Time & Materials (Hourly Retainer) models.
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
              <span>Agency Commercial Contract Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY BOX */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 md:p-8 shadow-xl text-white">
          <div className="flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
            <CheckCircle2 size={18} />
            <span>Executive Summary: Fixed Price vs Retainer Contracts</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-3">
            <div className="bg-navy-950 p-5 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-2 font-serif">Fixed Price Contract</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for static, well-defined projects (e.g. 5-page website, basic mobile app MVP). All risk of cost overruns falls on the agency unless protected by strict functional specs and written Change Orders.
              </p>
            </div>

            <div className="bg-navy-950 p-5 rounded-xl border border-white/10">
              <strong className="block text-gold-500 text-sm mb-2 font-serif">Hourly Retainer (Time & Materials)</strong>
              <p className="text-navy-100 leading-relaxed">
                Best for iterative software development, SaaS scaling, and ongoing digital marketing. Risk of scope changes falls on the client; the agency is guaranteed payment for every developer hour logged.
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
            <li><a href="#introduction" className="hover:text-gold-600 underline">1. Introduction: The Agency Contract Pricing Dilemma</a></li>
            <li><a href="#fixed-price-dynamics" className="hover:text-gold-600 underline">2. Legal & Financial Dynamics of Fixed Price Contracts</a></li>
            <li><a href="#retainer-dynamics" className="hover:text-gold-600 underline">3. Legal & Financial Dynamics of Hourly Retainers</a></li>
            <li><a href="#comparison-matrix" className="hover:text-gold-600 underline">4. Side-by-Side Comparison Matrix</a></li>
            <li><a href="#risk-allocation" className="hover:text-gold-600 underline">5. Risk Allocation: Where Commercial Disputes Arise</a></li>
            <li><a href="#essential-retainer-clauses" className="hover:text-gold-600 underline">6. 5 Must-Have Clauses in an Hourly Retainer Agreement</a></li>
            <li><a href="#hybrid-model" className="hover:text-gold-600 underline">7. The Hybrid Contract Model: Fixed MVP + Monthly Retainer</a></li>
            <li><a href="#faqs" className="hover:text-gold-600 underline">8. Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* SECTION 1 */}
        <div id="introduction" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            1. Introduction: The Agency Contract Pricing Dilemma
          </h2>
          <p>
            One of the most consequential decisions facing digital agency founders, software consultancies, and design studios is choosing between <strong>Fixed Price</strong> and <strong>Hourly Retainer (Time & Materials)</strong> commercial contracts.
          </p>
          <p>
            Selecting the wrong pricing model can severely damage profit margins. A fixed price contract with a demanding client can turn a estimated 40% margin into a net loss if scope creep goes unchecked. Conversely, an hourly contract without clear timesheet reporting can lead to client distrust and unpaid invoices.
          </p>
          <div className="bg-navy-50 border-l-4 border-gold-500 p-5 rounded-r-xl my-6">
            <strong className="block text-navy-950 font-semibold mb-1">Core Legal Rule:</strong>
            <p className="text-navy-900 text-sm">
              The purpose of an agency contract is not merely setting price — it is establishing legal risk allocation. Fixed Price shifts operational risk to the agency, whereas Hourly Retainers shift scope uncertainty risk to the client.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div id="fixed-price-dynamics" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            2. Legal & Financial Dynamics of Fixed Price Contracts
          </h2>
          <p>
            In a <strong>Fixed Price Agreement</strong>, the agency agrees to deliver a specified project scope for an agreed total sum (e.g. $25,000). The client knows exact total cost in advance, while the agency assumes full responsibility for managing team hours and efficiency.
          </p>
          
          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Advantages of Fixed Price Contracts:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Higher Profit Potential:</strong> If your team completes a $30k project in half the estimated hours using pre-built libraries, the agency retains 100% of the profit margin.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Faster Sales Closing:</strong> Enterprise clients and startups often prefer predictable fixed budgets over uncapped hourly estimates.</span></li>
          </ul>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Legal Risks of Fixed Price Contracts:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={16} /> <span><strong>Scope Creep Erosion:</strong> Vague functional requirements lead clients to demand extra revisions without paying extra fees.</span></li>
            <li className="flex items-start gap-2"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={16} /> <span><strong>Payment Withholding Risk:</strong> If a client rejects a milestone on subjective grounds, large milestone payments can be blocked for months.</span></li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div id="hourly-retainer-dynamics" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            3. Legal & Financial Dynamics of Hourly Retainers (Time & Materials)
          </h2>
          <p>
            In an <strong>Hourly Retainer or Time & Materials (T&M) Agreement</strong>, the client pays for actual developer, designer, or consultant hours spent on their project, billed weekly or monthly at agreed hourly rates.
          </p>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Advantages of Hourly Retainers:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Guaranteed Profitability:</strong> Every hour worked generates billable revenue, eliminating unpaid over-runs.</span></li>
            <li className="flex items-start gap-2"><Check className="text-gold-600 shrink-0 mt-1" size={16} /> <span><strong>Agile Flexibility:</strong> Ideal for complex software scaling where technical requirements change rapidly based on user feedback.</span></li>
          </ul>

          <h3 className="font-serif text-xl text-dark-text font-semibold mt-6">Legal Risks of Hourly Retainers:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={16} /> <span><strong>Timesheet Auditing Disputes:</strong> Clients may challenge hours logged or claim developers were working inefficiently.</span></li>
            <li className="flex items-start gap-2"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={16} /> <span><strong>Unpredictable Revenue Fluctuation:</strong> If client workload pauses, agency billing drops unexpectedly unless minimum monthly commitments are enforced.</span></li>
          </ul>
        </div>

        {/* IN-ARTICLE ADVAQ CALLOUT BANNER */}
        <div className="my-12 bg-navy-950 p-8 rounded-2xl text-white relative overflow-hidden border border-gold-500/20 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <p className="text-gold-500 uppercase text-xs font-semibold tracking-widest">
            ADVAQ AGENCY CONTRACT SERVICES
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
            Need Customized Agency Contracts Drafted for Your Agency?
          </h3>
          <p className="mt-3 text-navy-200 text-sm max-w-xl leading-relaxed">
            ADVAQ's legal team drafts tailored B2B Fixed Price contracts, Monthly Retainer agreements, and Change Order frameworks for digital agencies across the US, UK, UAE, and Pakistan.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/legal-contract-drafting/fixed-price-project-contract"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              Order Agency Contract Package <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* SECTION 4 */}
        <div id="comparison-matrix" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            4. Side-by-Side Comparison Matrix
          </h2>
          <p>
            The table below illustrates the primary commercial differences between Fixed Price and Hourly Retainer agreements:
          </p>

          <div className="overflow-x-auto my-6 border border-border rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-navy-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Criteria</th>
                  <th className="p-4 text-gold-500">Fixed Price Agreement</th>
                  <th className="p-4 text-gold-500">Hourly Retainer (T&M)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white text-gray-700">
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Scope Clarity Required</td>
                  <td className="p-4">Exhaustive & 100% frozen prior to kickoff.</td>
                  <td className="p-4">Flexible & evolving iteratively.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Scope Creep Risk</td>
                  <td className="p-4">High (borne by Agency unless Change Orders enforced).</td>
                  <td className="p-4">Zero (borne by Client via paid hours).</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Billing Method</td>
                  <td className="p-4">Milestone-based deposits (e.g. 50/25/25).</td>
                  <td className="p-4">Monthly in advance or bi-weekly timesheets.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Profit Margin Potential</td>
                  <td className="p-4">High (if completed efficiently under budget).</td>
                  <td className="p-4">Predictable & capped at hourly billing rate.</td>
                </tr>
                <tr className="hover:bg-off-white">
                  <td className="p-4 font-bold text-navy-950">Client Trust Level Needed</td>
                  <td className="p-4">Moderate (Client has fixed total cost assurance).</td>
                  <td className="p-4">High (Client trusts agency timesheet accuracy).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5 */}
        <div id="risk-allocation" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            5. Risk Allocation: Where Commercial Disputes Arise
          </h2>
          <p>
            In Fixed Price contracts, disputes almost always arise from <strong>scope ambiguity</strong> — where the client expects a complex sub-feature (e.g. multi-currency payment checkout) that was not explicitly listed in the SOW, leading to standoff over extra charges.
          </p>
          <p>
            In Hourly Retainers, disputes arise over <strong>perceived inefficiency</strong> — where the client feels an 80-hour task should have taken 40 hours. Your contract must clarify that hourly billing reflects actual effort and technical execution, not guaranteed outcome speed.
          </p>
        </div>

        {/* SECTION 6 */}
        <div id="essential-retainer-clauses" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            6. 5 Must-Have Clauses in an Hourly Retainer Agreement
          </h2>
          <div className="space-y-4 my-6">
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">1. Advance Monthly Payment Commitment</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Require retainer fees (e.g. 40 hours/month) to be paid in advance on the 1st of each month before hours are allocated.</p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">2. "Use-It-or-Lose-It" Non-Rollover Provision</h4>
              <p className="text-xs text-gray-600 leading-relaxed">State that unused monthly hours do NOT roll over to the following month, protecting agency monthly scheduling and revenue forecasting.</p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">3. Overage Billing Rates</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Specify that hours worked beyond the monthly retainer commitment are billed at standard overage hourly rates (e.g. +15% surge rate).</p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">4. Time-Tracking Tool Acceptance</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Designate an official time-tracking tool (e.g. Toggl, Harvest, Jira) as the conclusive record of logged hours.</p>
            </div>
            <div className="border border-border p-5 rounded-xl bg-white shadow-sm">
              <h4 className="font-bold text-navy-950 text-sm mb-1 text-gold-700">5. 30-Day Contract Termination Notice</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Permit either party to terminate the ongoing retainer with 30 days written notice, ensuring smooth offboarding.</p>
            </div>
          </div>
        </div>

        {/* SECTION 7 */}
        <div id="hybrid-model" className="space-y-4 mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-dark-text font-semibold">
            7. The Hybrid Contract Model: Fixed MVP + Monthly Retainer
          </h2>
          <p>
            The most effective commercial strategy for high-growth tech agencies is the <strong>Hybrid Contract Model</strong>:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm pl-2">
            <li><strong>Phase 1 (Fixed Price):</strong> Build the core platform or MVP with clear, static functional requirements under a milestone-based Fixed Price SOW.</li>
            <li><strong>Phase 2 (Hourly Retainer):</strong> Upon launch, transition the client to a Monthly Retainer for continuous maintenance, feature iteration, and DevOps support.</li>
          </ol>
          <p className="text-sm mt-3">
            This hybrid approach delivers initial budget predictability for the client while building long-term recurring revenue for the agency.
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
            AGENCY PRICING & CONTRACT SOLUTIONS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3 text-white">
            Optimize Your Agency Contracts Today
          </h2>
          <p className="mt-4 text-navy-200 text-base max-w-xl mx-auto">
            Fixed price project agreements, monthly retainer agreements, hybrid contracts, and change order management templates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/legal-contract-drafting/fixed-price-project-contract"
              className="btn-gold rounded-none uppercase text-xs tracking-widest px-8 py-4 font-semibold"
            >
              Order Fixed Price & Retainer Package
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
